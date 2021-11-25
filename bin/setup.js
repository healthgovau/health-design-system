#! /usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
var getDeps = require('get-dependencies');
const {getInstalledPathSync} = require('get-installed-path');

console.log("Creating Health Design System starter kit base.");

//Collect paths
const gold = getInstalledPathSync('@gold.au', {local: true});
const hds = getInstalledPathSync('@health.gov.au/health-design-system', {local: true});
const base_path = process.cwd();
const srcDir = hds + '/source';
const destDir = process.cwd() + `/assets/hds`;


//Copy files to assets folder
try {
  fs.copySync(srcDir, destDir, {overwrite: true})
  console.log("■ Files copied to assets folder");
} catch (err) {
  console.error(err)
}

//Check if assets/scss/main.scss exists, if not create it with reference.
if (!fs.existsSync(base_path + '/assets/scss')) {
  fs.mkdirSync(base_path + '/assets/scss');
}
if (fs.existsSync(base_path + '/assets/scss/main.scss')) {
  console.log("/assets/scss/main.scss exists, ensure that it contains:\n  @import '../hds/sass/all.scss';\nto utilise HDS");
} else {
  fs.writeFile(base_path + '/assets/scss/main.scss', "@import '../hds/sass/all.scss';", function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("■ Created /assets/scss/main.scss and added import statement for HDS");
  });
}

//Add GOLD dependencies
getDeps.getByFile(hds + '/package.json')
  .then(function (result) {
    let r = result.filter(val => val.startsWith('@gold') && !val.includes('pancake')).map(filt => '@import "' + base_path + '/node_modules/' + filt + '/lib/sass/_module.scss";');

    r.unshift('\n//GOLD SCSS dependencies. ');

    fs.appendFile(process.cwd() + `/assets/hds/sass/all.scss`, r.join("\n"), function (err) {
      if (err) throw err;
      console.log('■ GOLD references written to scss file.');
    });
  });

//Copy and rename pancake ref file
if (!fs.existsSync(base_path + '/assets/hds/sass/vendors')) {
  fs.mkdirSync(base_path + '/assets/hds/sass/vendosr');
}
if (fs.existsSync(base_path + '/pancake/sass/pancake.scss')) {
  fs.copyFile(base_path + '/pancake/sass/pancake.scss', base_path + '/assets/hds/sass/vendors/govau-ds.scss', (err) => {
    if (err) throw err;
    console.log('■ Pancake reference file copied and renamed.');
  });
} else {
  console.log('\x1b[31m%s\x1b[0m','■ WARNING! No pancace folder found, cannot copy file. Delete the node_modules folder and try again.');
}


//Remove pancake folder
fs.rmdirSync(base_path + '/pancake', {recursive: true});
console.log("■ Removed pancake folder");
