#! /usr/bin/env node
// const path = require('path');
const fs = require('fs-extra');
const getDeps = require('get-dependencies');
const { getInstalledPathSync } = require('get-installed-path');

console.log('Creating Health Design System starter kit base.');

// Collect paths
const hds = getInstalledPathSync('@health.gov.au/health-design-system', { local: true });
const basePath = process.cwd();
const srcDir = `${hds}/source`;
const destDir = `${process.cwd()}/assets/hds`;

// Copy files to assets folder
try {
  fs.copySync(srcDir, destDir, { overwrite: true });
  console.log('■ Files copied to assets folder');
} catch (err) {
  console.error(err);
}

// Check if assets/scss/main.scss exists, if not create it with reference.
if (!fs.existsSync(`${basePath}/assets/scss`)) {
  fs.mkdirSync(`${basePath}/assets/scss`);
}
if (fs.existsSync(`${basePath}/assets/scss/main.scss`)) {
  console.log('/assets/scss/main.scss exists, ensure that it contains:\n  @import \'../hds/sass/all.scss\';\nto utilise HDS');
} else {
  fs.writeFile(`${basePath}/assets/scss/main.scss`, '@import \'../hds/sass/all.scss\';', (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('■ Created /assets/scss/main.scss and added import statement for HDS');
    return true;
  });
}

// Add GOLD dependencies

// Get dependencies for the Health Design System.
getDeps.getByFile(`${hds}/package.json`)
  .then((result) => {
    //  Only process dependencies that starts with @gold and not includes the word pancake.
    //  Add correct path to the include statement.
    const r = result.filter((val) => val.startsWith('@gold') && !val.includes('pancake'))
      .map((filt) => `@import "${basePath}/node_modules/${filt}/lib/sass/_module.scss";`);

    // Add comment to top of array.
    r.unshift('\n//GOLD SCSS dependencies. ');

    // Append dependencies to all.scss
    fs.appendFile(`${process.cwd()}/assets/hds/sass/all.scss`, r.join('\n'), (err) => {
      if (err) throw err;
      console.log('■ GOLD references written to scss file.');
    });
  });

// Copy and rename pancake ref file
if (!fs.existsSync(`${basePath}/assets/hds/sass/vendors`)) {
  fs.mkdirSync(`${basePath}/assets/hds/sass/vendors`);
}
if (fs.existsSync(`${basePath}/pancake/sass/pancake.scss`)) {
  fs.copyFile(`${basePath}/pancake/sass/pancake.scss`, `${basePath}/assets/hds/sass/vendors/govau-ds.scss`, (err) => {
    if (err) throw err;
    console.log('■ Pancake reference file copied and renamed.');
  });
} else {
  console.log('\x1b[31m%s\x1b[0m', '■ WARNING! No pancace folder found, cannot copy file. Delete the node_modules folder and try again.');
}

// Remove pancake folder
fs.rmdirSync(`${basePath}/pancake`, { recursive: true });
console.log('■ Removed pancake folder');
