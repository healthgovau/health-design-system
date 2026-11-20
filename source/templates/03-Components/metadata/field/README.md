# Fields

Fields are supplementary content elements via the output of information/metedata.

## Elements

Fields comprise of the following elements:

- Label
- Value
- Icon (optional)

## Layouts

Label/value pairs are available in 2 layouts:

- Stacked
- Inline

## Icons

Icons can be output in 2 ways:

- Icon to supplement the label
- Icon only (label visibly hidden but available to screen readers)

## Icon set

The HDS uses the Font Awesome icon set and applies these via the `::before` pseudo-element as dataURIs via an icon class, such as `health-field--icon-DATE` (where `DATE` is replaced by the appropriate class). This means that application doens't require image references or additional HTML mark-up in the DOM.

### Application of icons

Icon-oonly must not be used if:

- it does not describe the meaning of a value (such as a link); OR
- if multiple fields use the same icon (e.g. multiple date fields)

### Field groups

See [field groups](/components/detail/field-groups--vertical-group) for information about output multiple fields.
