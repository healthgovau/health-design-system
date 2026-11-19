import { spawn, spawnSync } from 'node:child_process';
import { accessSync, constants } from 'node:fs';
import { delimiter, join } from 'node:path';
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

/**
 * Starts Playwright's interactive test UI in the Docker Compose service, then
 * opens that UI in a browser installed on the host. Run this from an
 * interactive terminal with `npm run playwright:docker:ui`.
 *
 * The UI listens on port 8080 inside the container. Docker publishes that port
 * on the host so the browser launched by this script can connect to it.
 */
const uiUrl = 'http://localhost:8080';

// Browser command names differ across Linux distributions; try common names
// in order and show each detected browser only once in the selection prompt.
const browserCommands = [
  { name: 'Firefox', commands: ['firefox', 'firefox-esr'] },
  { name: 'Chromium', commands: ['chromium', 'chromium-browser'] },
  { name: 'Google Chrome', commands: ['google-chrome', 'google-chrome-stable'] },
  { name: 'Microsoft Edge', commands: ['microsoft-edge', 'microsoft-edge-stable'] },
  { name: 'Brave', commands: ['brave-browser', 'brave'] },
  { name: 'Vivaldi', commands: ['vivaldi', 'vivaldi-stable'] },
];

/**
 * Finds an executable by searching the current PATH.
 *
 * Resolve the command ourselves so it can be checked and launched without
 * constructing a shell command, which would add quoting and injection risks.
 */
function findExecutable(command) {
  for (const directory of (process.env.PATH || '').split(delimiter)) {
    const path = join(directory, command);
    try {
      accessSync(path, constants.X_OK);
      return path;
    } catch {
      // Continue searching PATH.
    }
  }
  return null;
}

/**
 * Returns supported browsers whose command can run successfully.
 *
 * A command merely being present on PATH does not guarantee its browser is
 * installed (for example, it may be a package-manager shim). Running the
 * browser's version command filters out launchers that cannot start. The
 * timeout also prevents a broken wrapper from hanging startup indefinitely.
 */
function findInstalledBrowsers() {
  const found = [];
  const seenPaths = new Set();
  for (const browser of browserCommands) {
    for (const command of browser.commands) {
      const path = findExecutable(command);
      if (!path || seenPaths.has(path)) {
        continue;
      }
      const version = spawnSync(path, ['--version'], {
        encoding: 'utf8',
        timeout: 5000,
        stdio: ['ignore', 'pipe', 'ignore'],
      });
      if (version.error || version.status !== 0) {
        continue;
      }
      seenPaths.add(path);
      found.push({
        name: browser.name,
        path,
        version: version.stdout.trim().split(/\r?\n/, 1)[0],
      });
      break;
    }
  }
  return found;
}

/**
 * Displays the detected browsers and returns the user's numbered selection.
 *
 * This step must happen before starting Docker so invalid input, or running
 * without an interactive terminal, does not leave a container running.
 */
async function chooseBrowser(browsers) {
  if (!stdin.isTTY || !stdout.isTTY) {
    const detected = browsers.map((browser) => browser.name).join(', ');
    throw new Error(
      `Choose a browser by running this script in an interactive terminal. Detected: ${detected}.`,
    );
  }

  const prompt = createInterface({ input: stdin, output: stdout });
  try {
    console.log('Installed browsers:');
    browsers.forEach((browser, index) => {
      console.log(`  ${index + 1}) ${browser.name} (${browser.version})`);
    });

    while (true) {
      const answer = (await prompt.question('Select a browser number: ')).trim();
      const selected = Number(answer);
      if (Number.isInteger(selected) && selected >= 1 && selected <= browsers.length) {
        return browsers[selected - 1];
      }
      console.log(`Enter a number from 1 to ${browsers.length}.`);
    }
  } finally {
    prompt.close();
  }
}

const installedBrowsers = findInstalledBrowsers();
if (installedBrowsers.length === 0) {
  throw new Error('No supported installed browser was found on this system.');
}

const selectedBrowser = await chooseBrowser(installedBrowsers);

/**
 * Launch the one-off Compose container that serves Playwright UI.
 *
 * `--ui-host=0.0.0.0` makes the server reachable through Docker's published
 * port; `localhost` alone would bind only inside the container. The current
 * user's UID/GID ensures files written through the mounted workspace have
 * appropriate ownership. `--rm` removes the container after it exits.
 */
const compose = spawn(
  'docker',
  [
    'compose',
    '-f',
    'playwright/compose.yml',
    'run',
    '--rm',
    '--user',
    `${process.getuid()}:${process.getgid()}`,
    '-p',
    '8080:8080',
    'playwright',
    'test',
    '--ui',
    '--ui-host=0.0.0.0',
    '--ui-port=8080',
  ],
  { stdio: 'inherit' },
);

let interrupted = false;
// Keep the child process result available both to readiness checks and shutdown.
const composeExit = new Promise((resolve) => {
  compose.once('error', (error) => resolve({ code: 1, signal: null, error }));
  compose.once('close', (code, signal) => resolve({ code, signal }));
});

function stopCompose(signal) {
  if (compose.exitCode === null && compose.signalCode === null) {
    compose.kill(signal);
  }
}

// Forward terminal shutdown signals to Docker Compose so Ctrl+C also stops the
// temporary Playwright container instead of leaving it running in the background.
process.once('SIGINT', () => {
  interrupted = true;
  stopCompose('SIGINT');
});
process.once('SIGTERM', () => {
  interrupted = true;
  stopCompose('SIGTERM');
});

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

/**
 * Waits for the UI HTTP endpoint, while also detecting early container exit.
 *
 * Polling avoids opening the browser before Playwright has bound the published
 * port. The deadline provides a clear failure instead of waiting forever if
 * startup stalls.
 */
async function waitForUi() {
  const deadline = Date.now() + 60_000;

  while (Date.now() < deadline) {
    const exited = await Promise.race([
      composeExit.then((result) => ({ result })),
      delay(500).then(() => null),
    ]);

    if (exited) {
      return exited.result;
    }

    try {
      const response = await fetch(uiUrl);
      if (response.ok) {
        // The readiness probe needs only the status; release the response body.
        await response.body?.cancel();
        return null;
      }
    } catch {
      // The port is expected to refuse connections until Playwright starts.
    }
  }

  throw new Error(`Playwright UI did not become available at ${uiUrl} within 60 seconds.`);
}

/**
 * Opens the ready UI in the selected host browser without waiting for it to
 * exit. The launcher can then remain attached to Docker Compose and report its
 * exit status when the user eventually closes the UI or stops the tests.
 */
function openBrowser() {
  return new Promise((resolve, reject) => {
    const browser = spawn(selectedBrowser.path, [uiUrl], {
      detached: true,
      stdio: 'ignore',
    });
    browser.once('error', reject);
    browser.once('spawn', () => {
      // Let the browser stay open after this launcher continues waiting on Compose.
      browser.unref();
      resolve();
    });
  });
}

try {
  // Do not open a browser until the UI is reachable, and report container
  // startup failures directly rather than leaving the user with a blank tab.
  const earlyExit = await waitForUi();
  if (earlyExit) {
    if (!interrupted) {
      throw new Error(
        earlyExit.error ??
          `Playwright UI container exited before the UI became available (code ${earlyExit.code}, signal ${earlyExit.signal}).`,
      );
    }
    process.exitCode = 130;
  } else {
    console.log(`Opening Playwright UI at ${uiUrl} with ${selectedBrowser.name}`);
    await openBrowser();
    const result = await composeExit;
    process.exitCode = result.code ?? 1;
  }
} catch (error) {
  stopCompose('SIGTERM');
  await composeExit;
  console.error(error);
  process.exitCode = 1;
}
