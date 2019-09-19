'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Get the release verson from package.json
 */
//const pkg = require(path.join(__dirname, 'package.json'));
const pkg = require('../package.json');

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Health Design System');
fractal.set('project.version', pkg.version);
fractal.set('project.author', 'Australian Government Department of Health');
fractal.set('project.repo','https://github.com/healthgovau/health-design-system');
/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('default.preview', '@preview-not-full-width');
/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/* Generated HTML export destination */
fractal.web.set('builder.dest', __dirname + '/../docs');


const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
  skin: "navy",
  nav: ["docs", "components"],
  panels: ["notes", "html", "info", "resources"]
});
//fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default

const healthTheme = require('./theme');
fractal.web.theme(healthTheme);


