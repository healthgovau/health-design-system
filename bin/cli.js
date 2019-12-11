#!/usr/bin/env node

const copy = require("copy");
const fs = require("fs");

/**
 * Help text template.
 */
const helpText = `

The following command options are supported:

  help          Display help text.

  build-guide   Generate a static HTML version of the Health Design System
                style guide. The guide will be located in the \`./style-guide/\`
                directory. The guide can be viewed by openning the
                \`./style-guide/index.html\` file in a browser.

`;

/**
 * No command provided error message template.
 */
const noCommandErrorMessage = `

Whoops, you forgot to provide an argument. Try one of the following:

    healthds build-guide
    healthds help

`;

/**
 * Unrecognised command error message template.
 */
const unrecognisedCommandErrorMessage = `

Hmm, I don't recognise this command. Try one of the following:

    healthds build-guide
    healthds help

`;

/**
 * Add HTML version of Health Design System style guide to current directory.
 *
 * Copies the HTML version of the HDS Style Guide to current working directory.
 * The Style Guide is saved in the `hds_style_guide` directory. This directory
 * will be created if it does not exist.
 */
const buildGuide = () => {
  console.log(`Building HDS Style Guide...\n`);
  const sourceDir = __dirname + "/../docs/**/*";
  const destDir = process.cwd() + "/hds_style_guide";
  const hdsIndexFilePath = destDir + "/index.html";

  copy(sourceDir, destDir, (err, files) => {
    if (err) {
      throw err;
    }
    try {
      if (fs.existsSync(hdsIndexFilePath)) {
        console.log(`HTML version of the Health Design System has been create.\nYou can access it by openning \`${hdsIndexFilePath}\` in your browser.\n`);
      }
      else {
        throw new Error(`Style Guide Build failed. Could not find ${hdsIndexFilePath}\n`);
      }
    }
    catch (err) {
      console.error(err)
    }
  });
};

/**
 * Display help text.
 */
const help = () => {
  console.log(helpText);
}

/**
 * Validate command line arguments.
 *
 * @param {string} command
 *   The command option to be run.
 */
const validateCommandOptions = (command) => {
  const commandOptions = [
    "build-guide",
    "help"
  ];

  // Confirm command option is a valid option.
  if (command === undefined || command.length === 0) {
    console.error(noCommandErrorMessage);
    return;
  }
  else if (commandOptions.includes(command) === false) {
    console.error(unrecognisedCommandErrorMessage);
    return;
  }
};

/**
 * Process relevant command.
 */
const processCommand = (command, args) => {
  switch (command) {
    case "help":
      help();
      break;

    case "build-guide":
      buildGuide();
      break;

  }
}


/**
 * Initialisation
 */
(() => {
  const [, , command, ...args] = process.argv;
  validateCommandOptions(command, args);
  processCommand(command, args);
})();
