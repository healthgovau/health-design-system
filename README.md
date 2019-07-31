# Health Design System

**Note this a work in progress and is not yet ready for use outside health.gov.au.**

Design System for Australian Government Department of Health is built on top of the [DTA Design System](https://designsystem.gov.au/).

View the [style guide](https://healthgovau.github.io/style-guide-patternlab/) for documentation on how to use the Health Design System components.

## Dependencies
Javascript:
* [jQuery v3+](https://jquery.com/)
* [jQuery UI autocomplete](https://jqueryui.com/download/#!version=1.12.1&components=110000010001000000100000100000000000000000000000)
* [LazyLoad](https://github.com/verlok/lazyload)
* [FancyBox](http://fancyapps.com/fancybox/3/)

These are included in the [javascript library](js/libraries) folder for convenience.

Disable any of the libraries functionality by simply not including the library.

## Installation

### Requirements: 
 * [Node.js](https://nodejs.org/)

### Usage

#### Option 1: Out of the box
Simply download and include the css and js files from the [distribution](dist) folder.
Include any [library scripts](js/libraries).

#### Option 2: Build yourself
Clone, git submodule or download the repository.

Build using the built in Gulp tasks:

`npm install` and then run:
  * `npm run gulp prod` production ready files output to dist folder
  * `npm run gulp` development
  * `npm run gulp watch` development watch for changes and update
  
Or you can import the core sass file into your pipeline `@import "health-design-system/sass/healthgovau-ds.scss"`

Source javascript files are available in design-system/js/src.

