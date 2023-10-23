---
title: Changelog
---

##v2.0.0-beta2

### Changes

Done

- SCSS custom property reference update
- Updates to chevrons for local navigation and call-to-action links
- New hero variants
- Primary navigation interaction update and addition of dropdown variants

To do

- New link list component

### SCSS structure

- Reference to `_colours-map.scss` changed to `_custom-property-map.scss` requires update for downstream build systems

### CTA link list

### Hero

####CSS variables

Old:
No CSS vars

New:
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

####Breaking changes

- Add `health-hero__bg` element
- Remove Bootstrap `row` and `col-*` divs

#### Primary navigation

Old:
--main-nav-border: #072e7e;
--main-nav-active-link-bg--hover: #e6f3ff;
--main-nav-active-link-border: #ffffff;

New:
