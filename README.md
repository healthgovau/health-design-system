# Health Design System
Design System for Australian Government Department of Health is built on top of the [DTA Design System](https://designsystem.gov.au/).

View the style guide for documentation on how to use the Health Design System components.

## Dependencies
Javascript:
* [jQuery v3+](https://jquery.com/)
* [jQuery UI](https://jqueryui.com/download/#!version=1.12.1&components=110000010001000000100000100000000000000000000000)
* [lazyload](https://github.com/verlok/lazyload)

These are included in the [javascript library](js/libraries) folder but are not bundled into the distribution files.
You can use these or use your own versions.

## Usage

### Direct
Use the css and js files directly from the [distribution folder](dist)

### npm install

Dependencies:
 * npm

Add pancake settings to your package.json

```
"pancake": {
    "auto-save": false,
    "plugins": true,
    "ignore": [],
    "css": {
      "minified": true,
      "modules": false,
      "browsers": [
        "last 2 versions",
        "ie 8",
        "ie 9",
        "ie 10"
      ],
      "location": "css/",
      "name": false
    },
    "sass": {
      "modules": false,
      "location": "node_modules/@healthgovau/design-system/sass/vendors/",
      "name": "govau-design-system.scss"
    },
    "js": {
      "minified": true,
      "modules": false,
      "location": "node_modules/@healthgovau/design-system/js/src",
      "name": "pancake.js"
    },
    "json": {
      "enable": false,
      "location": "pancake/",
      "name": "pancake",
      "content": {
        "name": true,
        "version": true,
        "dependencies": true,
        "path": true,
        "settings": true
      }
    },
    "react": {
      "location": false
    }
  }
  ```

`npm i @healthgovau/design-system`

Include the core sass file [node_modules/@healthgovau/design-system/sass/healthgovau-ds.scss](sass/healthgovau-ds.scss) in your project and compile with your chosen SASS compiler.

## Development

Use gulp to build:
* `npm run gulp` for a development build
* `npm run gulp watch` to watch for changes
* `npm run gulp prod` for a production build
