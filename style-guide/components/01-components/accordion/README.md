# Accordion

The accordion is based on the [GOLD Design System Accordion](https://gold.designsystemau.org/components/accordion/).

## Implementation

Accordions can be implementated:

- Singularly (this component)
- As a group

## Variants

Whilst the behaviour of accordions is consistent across types, the following variants exist to suit applications.

The following should be applied to the `.au-accordion` as they may be delivered singularly. Variatn must no be mixed within a group.

### Default

The default accordion including default colour, border and font size.

### Block

Removes the colour and bottom padding from the accordion title so that the title and body appear as a single unit.

### Shadow

Adds the default shadow.

### Compact

Reduces font size and padding.

## Tokens

The following CSS custom variables allow customisation:

1. **--accordion-title-bg**: title background colour
2. **--accordion-title-bg--active**: title and chevron hover/focus background colour
3. **--accordion-title-text**: title text colour
4. **--accordion-border**: accordion border colour
5. **--accordion-body-bg**: accordion body background colour
6. **--accordion-body-text**: accordion body text colour
