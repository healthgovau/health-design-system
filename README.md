# Health Design System
Design System for Australian Government Department of Health is built on top of the [DTA Design System](https://designsystem.gov.au/).

View the style guide for documentation on how to use the Health Design System components.

## Dependencies
Javascript:
* [jQuery v3+](https://jquery.com/)
* [jQuery UI autocomplete](https://jqueryui.com/download/#!version=1.12.1&components=110000010001000000100000100000000000000000000000)
* [LazyLoad](https://github.com/verlok/lazyload)
* [FancyBox](http://fancyapps.com/fancybox/3/)

These are included in the [javascript library](js/libraries) folder for convenience.

Disable by setting js config and not including the libraries:

```apple js
var healthgovauJsConfig = {
  autocomplete: false,
  lazyload: false,
  fancybox: false
}
```

## Installation

### Requirements: 
 * [Node.js](https://nodejs.org/)

### Usage

#### Option 1: Out of the box
Simply download and include the css and js files from the distribution folder.
Include any library scripts.

#### Option 2: SASS
Build from SASS files, allowing you to modify or override as you need.

1. Clone, git submodule or download the repository.
1. `npm install`
1. Either import the core sass file into your pipeline `@import "design-system/sass/healthgovau-ds.scss"` or
1. Run gulp tasks to build 
  * `npm run gulp prod` production ready files output to dist folder
  * `npm run gulp` development
  * `npm run gulp watch` development watch for changes and update