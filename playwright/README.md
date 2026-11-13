# Playwright URL-based visual regression testing

The Playwright integration runs tests in a Docker container against a site URL.
It captures screenshots from a reference site and compares screenshots from a
test site with those checked-in reference images. The URLs are configurable, so
the reference and test sites can be different deployments, or the same site.

## Requirements and setup

- Docker with the Compose plugin, running.
- A reference and/or test site reachable from inside the Playwright container.
- Node.js matching the repository's `.nvmrc` for the npm commands and report
  viewer.

From the repository root, select the configured Node.js version, install the
project dependencies, and build the Playwright runner:

```sh
nvm use
npm ci
npm run playwright:build
```

Rebuild the runner after changing `package-lock.json` or
`playwright/Dockerfile`.

## Configure the site URLs

Set the default URLs in `playwright.config.js`. No URL changes are needed in
`compose.yml`, and no environment variables need to be set:

```js
const referenceBaseURL =
  process.env.PLAYWRIGHT_REFERENCE_URL ?? 'https://www.health.gov.au';
const testBaseURL =
  process.env.PLAYWRIGHT_TEST_URL ?? 'http://health.docker.amazee.io';
```

Use the site base URL (including `http://` or `https://`), not a page path:
tests navigate to paths relative to that base URL.

Environment variables remain available as optional overrides, including in CI:

```sh
PLAYWRIGHT_REFERENCE_URL=https://published.example.test npm run playwright:reference
PLAYWRIGHT_TEST_URL=https://preview.example.test npm run playwright:run
```

- `PLAYWRIGHT_REFERENCE_URL` is used when capturing or updating reference
  screenshots.
- `PLAYWRIGHT_TEST_URL` is used for normal test runs.

Compose passes these variables through only when they are set; otherwise,
Playwright uses the defaults in `playwright.config.js`. The config is mounted
into the container, so changing the URLs does not require rebuilding the runner.

## Generate references and run tests

Generate or deliberately update reference screenshots from the site selected by
`PLAYWRIGHT_REFERENCE_URL`:

```sh
npm run playwright:reference
```

This runs the Playwright tests and updates screenshots for all configured
projects. Reference images are stored in `playwright/reference_images/`.
Review the changed images before committing them; only update references when
the new appearance is intentional. Make sure the reference URL serves the
approved appearance, rather than the version under test.

Run the tests against `PLAYWRIGHT_TEST_URL` and compare the results with the
checked-in references:

```sh
npm run playwright:run
```

To run a specific spec or project, pass Playwright CLI options through npm. For
example:

```sh
npm run playwright:run -- playwright/tests/pages.spec.js --project=chromium
```

The configured projects are `chromium` and `Mobile Chrome`. Each project has
its own screenshot baselines.

Open the HTML report after a run:

```sh
npm run playwright:open
```

Reports are written to `playwright/report/`; test results and screenshot
comparison artifacts are written to `playwright/test-results/`.

## Add tests

The configured test directory is `playwright/tests/`. The `pages.spec.js` test
loads each entry in `playwright/urls.json` and takes a full-page screenshot.
Add an entry there to include another page in the visual regression suite:

```json
{
  "description": "Sample page",
  "path": "/sample-page",
  "file": "sample-page.webp"
}
```

For functional tests, add a spec under `playwright/tests/` and use Playwright's
`page` fixture. `page.goto()` accepts a path relative to the configured site
URL. For example, this checks that an accordion can be opened:

```js
import { test, expect } from '@playwright/test';

test('accordion opens', async ({ page }) => {
  await page.goto('/node/60');

  const accordion = page.locator('.au-accordion').first();
  const toggle = accordion.getByRole('button', {
    name: 'Guerrilla Warfare (Default accordion style)',
  });
  const panel = accordion.locator('.au-accordion__body');

  await expect(panel).not.toBeVisible();
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(panel).toBeVisible();
});
```

Functional assertions run during both reference generation and normal test
runs, so the page and expected behavior must be available at both configured
URLs. Example specs can be found in `playwright/examples/`. These are not picked up automatically;
the Playwright config only discovers tests in `playwright/tests/`.

## Appendix

### Custom classes

Utility classes to assist with common tasks can be found in `playwright/tests/utilities/`:

**User**

| Method | Notes |
| --- | --- |
| constructor(page) | Class constructor, where `page` is an instance of the Playwright play object. |
| User.login(username, password) | Log user into the Drupal site. |
| User.logout() | Log user out of the Drupal site. |

**Metatags**

| Method | Notes |
| --- | --- |
| constructor(page, metatags = []) | Class constructor, where `page` is an instance of the Playwright play object. |
| Metatags.add() | Add metatag to collection of metatags to test. |
| Metatags.removeAll() | Clear the test metatag collection. |
| Metatags.hasValueAll() | Test that all metatags in the collection have the expected values. |
| Metatags.hasValue(name, value) | Check that a metatag has a particular value. |
| Metatags.present(name) | Check that a metatag is present in the page's <head> element. |
| Metatags.absent(name) | Check that a metatag is not present in the page's <head> element. |
