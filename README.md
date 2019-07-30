# Health Design System
Design System for Australian Government Department of Health is built on top of the [DTA Design System](https://designsystem.gov.au/).

View the style guide for documentation on how to use the Health Design System components.

## Dependencies
Javascript:
* [jQuery v3+](https://jquery.com/)
* [jQuery UI](https://jqueryui.com/download/#!version=1.12.1&components=110000010001000000100000100000000000000000000000)
* [lazyload](https://github.com/verlok/lazyload)

These are included in the [javascript library](js/libraries) folder but are not bundled into the distribution files.

## Installation

Requirements: 
 * node

Installation:
1. Make sure you have a package.json file. You can create a default one by running `npm init`
1. Install the design system `npm i @health.gov.au/design-system`
1. Tell pancake to include @health.gov.au in its scope when mixing `npx pancake --set npmOrg "@gov.au @health.gov.au"`
1. Run pancake again `node node_modules/@gov.au/pancake/bin/pancake`

Configuration for pancake can be found at the [pancake github](https://github.com/govau/pancake).
