# Accordion group

The accordion group permits multiple accordions to be used together, as well as multiple accordion groups on a page.

## Implementation

The accordion component is wrapped in:

```
<ul class="au-accordion-group" id="accordion-group-X">
  <li>
    ACCORDION
  </li>
</ul>
```

## Open/close all controls

The open/close controls are placed before the accordion group and teh JavaScript references the accordion group ID, as described above.

```
<div class="au-accordion-group__controls">
    <button class="au-accordion-group__control" onclick="return AU.accordion.Open(document.querySelector('#accordion-group-X').getElementsByClassName('js-au-accordion'))">Open all</button>
    <button class="au-accordion-group__control" onclick="return AU.accordion.Close(document.querySelector('#accordion-group-X').getElementsByClassName('js-au-accordion'))">Close all</button>
</div>
```

### Multiple accordion groups

To ensure that controls do not operate the equivalent accordion across groups, use unique IDs on the accordion body and match aria-control references.

For example `accordion-1-1` below:

```
<section class="au-accordion">
    <button class="au-accordion__title js-au-accordion au-accordion--closed" aria-controls="accordion-1-1"
    aria-expanded="false" onclick="return AU.accordion.Toggle( this )">
        TITLE
    </button>

    <div class="au-accordion__body au-accordion--closed" id="accordion-1-1">
        <div class="au-accordion__body-wrapper">
            BODY CONTENTS
        </div>
    </div>
</section>
```

## Variants

Whilst the behaviour of accordion groups is consistent across types, the following variants exist to suit applications.

Note that variant classes should be applied to the `.au-accordion-group`. Accordion variant classes are applied to the `au.accordion` elements directly.

### Default

Standard group behaviours and styles

### Flush

The accordions are grouped togther without spacing. This is particularly suited to applications and can be extended to include rows/tablular data or similar.

## Tokens

The following CSS custom variables allow customisation:

1. **--accordion-control-link-text**: accordion control link colour
