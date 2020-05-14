# Health Design System

The Health Design System (HDS) is a design system for Australian Government Department of Health which is built on top of the [DTA Design System](https://designsystem.gov.au/).

## Style Guide
View the [Style Guide](https://healthgovau.github.io/health-design-system/) for documentation on how to use the Health Design System components.

The style guide is built using [Fractal](https://github.com/frctl/fractal).

## Dependencies
* [jQuery v3+](https://jquery.com/)

### Optional
* [jQuery UI autocomplete](https://jqueryui.com/download/#!version=1.12.1&components=110000010001000000100000100000000000000000000000)
* [LazyLoad](https://github.com/verlok/lazyload)
* [FancyBox](http://fancyapps.com/fancybox/3/)
* [TippyJs](https://github.com/atomiks/tippyjs)

These are included in the [javascript library](js/libraries) folder for convenience.

Disable any of the optional libraries and related functionality by simply not including the library.
You can find information on what functionality is provided by each library in the relevant component of the [Style Guide](https://healthgovau.github.io/health-design-system/).

## Installation

### Usage

#### Option 1: install as NPM package

The HDS can be added to a project as an npm package.

```
npm install @health.gov.au/health-design-system
```

You can generate a HTML version of Health Design System style guide in a project using the following cli command. The Style Guide will be located in the generated `hds_style_guide` directory and can be viewed by openning the `./style-guide/index.html` file in a browser.

```sh
npx healthds build-guide
```

You can import the HDS core sass file into your project using `@import "@health.gov.au/health-design-system/source/sass/all"`. This assumes the `node_modules` directory is included in you SASS build path.

JavaScript source files are available in `@health.gov.au/health-design-system/health-design-system/source/js/src/`.

Compiled version of CSS and JavaScript assets can be found in `@health.gov.au/health-design-system/build/css/` and `@health.gov.au/health-design-system/build/js/` respectively.



#### Option 2: Out of the box

Simply download and include the css and js files from the [build](build) folder.
Include any [library scripts](build/js/libraries).

#### Option 3: Build yourself

Clone, git submodule or download the repository.

Requires [Node.js](https://nodejs.org/)

Build using the built in Gulp tasks:

`npm install` and then run:
  * `npm run gulp`: Builds development and production ready CSS and JS files.
  * `npm run gulp watch`: Watches for changes and rebuilds.

Or you can import the core sass file into your pipeline `@import "health-design-system/source/sass/all.scss"`

Source javascript files are available in `health-design-system/source/js/src`.

## Command line tool

A command line tool is available if you installed the HDS as a npm package.

| Command | Description |
| --- | --- |
| `npx healthsd build-guide` | Generates a statice HTML version of the HDS Style Guide in the current working directory. The Style Guide is create within the `health-style-guide` directory. |
| `npx healthsd help` | Displays information on command usage. |

## Project structure

The following is a description of important directories used in the project.

| Directory | Description |
| --- | --- |
| `build/` | Compiled CSS and JavaScript files. |
| `docs/` | Compiled HTML version of the HDS component library (aka. the Style Guide). Guide can be access by opening `docs/index.html` in a browser.  |
| `node_modules/` | Project dependencies added by NPM. |
| `source/js/` | JavaScript source files. Include JavaScript libraries as well as custom code. |
| `source/sass/` | SASS source files |
| `source/sass/components/@gov.au/` | Overrides to styles provided by the DTA Design System should be placed in this directory. Overrides should be placed in a SASS partial file with the same name as the file in which the style is defined within the DTA Design System. |
| `source/sass/components/@health/` | Styling for custom HDS components. These are components which are not a part of the DTA Design System. |
| `style-guide/` | Source template and configuration files for components included in the HDS component library (aka. the Style Guide). The Style Guide is created using [Fractal](https://fractal.build/).  |

## Health Design System development

Install dependencies:

```
npm install
```

Start Fractal development server. This will generate a local link to view the Style Guide. The style guide will be automatically updated when changes are made to the component source files. Note that to see any SASS related styling changes you will need to compile any SASS changes using either `npm run gulp` or `npm run gulp:watch`.

```
npm run fractal:start
```

To build a static HTML version of the Style Guide use the following command. After building the Style Guide can be accessed by opening `docs/index.html` file in a browser.

```
npm run fractal:build
```

The HDS uses [Gulp](https://gulpjs.com) to create compiled versions of the HDS CSS and JavaScript assets. The compiled files will be created in the `build/` directory:

```
npm run gulp
```
