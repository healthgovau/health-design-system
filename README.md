# Health Design System
Design System for Australian Government Department of Health is built on top of the [DTA Design System](https://designsystem.gov.au/).

View the style guide for documentation on how to implement the Health Design System.

## Dependencies

Javascript:
* [jQuery v3+](https://jquery.com/)
* [jQuery UI](https://jqueryui.com/download/#!version=1.12.1&components=110000010001000000100000100000000000000000000000)
* [lazyload](https://github.com/verlok/lazyload)

These are included in the [javascript library](js/libraries) folder but are not bundled into the distribution files.
You can use these or use your own versions.

## Usage

### Direct
Use the [distribution files](dist) directly.

### npm install

`npm i @healthgovau/design-system`

Include the core sass file (node_modules/@healthgovau/design-system/sass/healthgovau-ds.scss) in your project and compile with your chosen SASS compiler.

## Development

Install the design system then:
* `npm run gulp prod` for a production build
* `npm run gulp` for a development build
* `npm run gulp watch` to watch for changes
