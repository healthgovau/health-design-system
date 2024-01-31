#v2.0.0-beta2

## SCSS structure

Restructure and renaming of colour and variable files to better separate colour and variable declarations and assignment to custom properties.

### Breaking change

This change requires an update to downstream products referencing them in the SCSS build:

- Change file references from `_colours-map.scss` to `_custom-property-map.scss`

## Hero

3 additional hero variants created (using the same DOM):

- Hero inset box (same as campaign sub-header)
- Hero inset box (overlapping)
- Hero gradient

### Template updates

- Add `health-hero__bg` element to support gradient hero
- Remove Bootstrap `row` and `col-*` divs
- Add `health-hero__call-to-action` wrapper around CTA region (update supports all types and multiple instances of CTA)

### New CSS variables

The following CSS variables (and defaults) have been added. Override as required.

```
--hero-bg: #072e7e;
--hero-bg--inset-opaque: #041c4e;
--hero-bg--trans: rgba(7, 46, 126, 0.8);
--hero-text: #FFF;
--hero-content-width--md: 60%;
--hero-content-width--lg: 60%;
--hero-image-width--md: 100%;
--hero-image-width--lg: 50%;
--hero-image-focus: right;
--hero-minheight--md: 400px;
--hero-minheight--lg: 500px;
```

## Main navigation

New drop-down navigation main navigation variant added `au-main-nav--dropdown au-main-nav--dropdown-columns`

### New CSS variables

The following CSS variables (and defaults) have been added. Override as required.

```
--main-nav-border: #072e7e;
--main-nav-active-link-bg--hover: #e6f3ff;
--main-nav-active-link-border: #e6f3ff;
--main-nav-dropdown-bg: #e6f3ff;
--main-nav-active-dropdown-link-bg--hover: #cfe6fb;
--main-nav-active-dropdown-border: #3291d3;
```

## CTA link list

New CTA link list component added.

## Local nav chevron

- Replaced non-standard side-nav chevrons with standard ones.
- Updated chevron mixins accordingly.

## Misc updates

- --accordion-control-link-text fixed (removed extranous semi-colon)
- Fixed mobile navigation hamburger double-up
- Removal of CSS var from sub-header and moved to \_custom-property-map
- Added link list flex variants
- Minor style guide updates (more coming in future release)

## Note

This is a beta-release. The official release will include updated documentation via the style guide.

---

#v2.0.0-beta3 changes

## Quick exit

Added quick exit component
