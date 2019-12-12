'use strict';

const path = require('path');
const twigAdapter = require('@frctl/twig')();

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

/* Set templating engine. */
fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');

/*
 * Set Fractal theme.
 */
const healthTheme = require('mandelbrot-healthgovau');
fractal.web.theme(healthTheme);
