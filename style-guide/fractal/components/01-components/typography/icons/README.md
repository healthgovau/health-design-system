# Icons
We have elected to use inline SVG's for our icons as it meets our requirements:

 * Inherit sizing and colours automatically
 * Can override colours and sizes
 * Works on modern browsers including IE9+
 * Small bandwidth footprint
 
We are using the free set of icons from FontAwesome 5 and a modified verison of their svg css.
 
As the icons are not embedded in the stylesheet, they need to be embedded direclty in the markup..
This can be done by copy and pasting the icons directly from the icons directory into your code.

A better approach is to dynamically read them in at runtime so you are always loading the latest icon.

## PHP Helper function
```php
/**
 * Load an svg icon.
 *
 * @param string $name
 *   The name of the icon.
 * @param string $category
 *   Type of icon: brand, solid or regular.
 * @param string $classes
 *   Additional classes to apply.
 *
 * @return string
 *   The svg code for the icon or a warning message.
 */
function health_load_icon($name, $category = 'solid', $classes = 'fa-fw') {
  if ($icon = file_get_contents(realpath('/health-design-system/source/icons/fontawesome/all/' . $category . '/' . $name . '.svg')) {
    return '<span class="svg-inline--fa ' . $classes . '">' . $icon . '</span>';
  }
  else {
    return '<span class="error">ICON "' . $name . '" NOT FOUND</span>';
  }
}
```

## Usage
Find the icon and name from the [FontAwesome website](https://fontawesome.com).

```php
// Output the solid clock icon.
print health_load_icon('clock');

// Output the facebook icon with 3x the size.
print health_load_icon('facebook', 'brands', 'fa-3x');
```

