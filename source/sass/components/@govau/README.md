# Design System overrides

Overrides to styles provided by the DTA Design System should be placed in this directory. Overrides should be placed in a SASS partial file with the same name as the file in which the style is defined within the DTA Design System.

## Example

If you want to override the `.AU-body` classname definition, then you should create a `_au-body.scss` file in this directory and add any styling overrides to it. You should also make sure that the partial file is imported into the `_components.scss` file so that the changes with be picked up when the SASS files are compiled.
