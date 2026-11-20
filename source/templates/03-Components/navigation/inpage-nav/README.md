# In page nav

**⭐ [Design System - Inpage nav](https://gold.designsystemau.org/components/inpage-nav/)**

## Dynamic generation

Rather than outputting the markup for the in page nav, this function
will automatically identify all the H2's and generate the navigation
based on that.

```javascript
  /**
   * Dynamically generate the in page nav links.
   *
   * Will only look for and link to H2's.
   *
   * @param selector
   *   The area to look for the links, in a jQuery selector.
   */
  health.inpagenav(selector);
```

Requires the [anchorific library](https://github.com/renettarenula/anchorific.js/), available in the build/js/libraries folder.