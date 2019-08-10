# Health Design System

**This a work in progress and is not yet ready for use outside health.gov.au.**

Design System for Australian Government Department of Health is built on top of the [DTA Design System](https://designsystem.gov.au/).

## Style guide
View the [style guide](https://healthgovau.github.io/health-design-system/) for documentation on how to use the Health Design System components.

## Optional dependencies
Javascript:
* [jQuery v3+](https://jquery.com/)
* [jQuery UI autocomplete](https://jqueryui.com/download/#!version=1.12.1&components=110000010001000000100000100000000000000000000000)
* [LazyLoad](https://github.com/verlok/lazyload)
* [FancyBox](http://fancyapps.com/fancybox/3/)
* [TippyJs](https://github.com/atomiks/tippyjs)

These are included in the [javascript library](js/libraries) folder for convenience.

Disable any of the libraries functionality by simply not including the library.

## Installation

### Usage

#### Option 1: Out of the box
Simply download and include the css and js files from the [build](build) folder.
Include any [library scripts](build/js/libraries).

#### Option 2: Build yourself
Clone, git submodule or download the repository.

Requires [Node.js](https://nodejs.org/)

Build using the built in Gulp tasks:

`npm install` and then run:
  * `npm run gulp`: Builds development and production ready CSS and JS files.
  * `npm run gulp watch`: Watches for changes and rebuilds.
  
Or you can import the core sass file into your pipeline `@import "health-design-system/source/sass/all.scss"`

Source javascript files are available in `health-design-system/source/js/src`.

