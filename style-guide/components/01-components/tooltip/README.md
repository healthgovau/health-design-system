# Tooltip

Tooltips use the [FloatingUI](https://github.com/floating-ui/floating-ui) library.

The title attribute is used as the tooltip.

`health.tooltip(selector, options)`

Default options

```javascript
{
  boundary: 'clippingAncestors',
  closeButton: false,
  html: null,
  postProcess: () => {},
  triggerOn: 'mouseenter touchstart',
  triggerOff: 'blur mouseleave touchend',
}
```

Options

* **boundary:** `{string|Element|Array<Element>|Rect}` Used to determine the boundary that the tooltip will be constrained to. Possible values are 'clippingAncestors' (default) | Element | Array<Element> | Rect. (See https://floating-ui.com/docs/detectoverflow#boundary for more information).
* **closeButton:** `{boolean}` If true, a close button will be displayed. If false, no close button will be displayed.
* **html:** `{string|null}` Tooltip content. If not provided, the title attribute of the element will be used assuming it is present. If neither are present, the tooltip will be empty.
* **postProcess:** `{function}` Anonymous function to be executed after the tooltip has been initialized. This can be used to perform post initialisation actions.
* **triggerOn:** `{string}` Event or events which will trigger the display of the tooltip. Multiple events should be separated by a space.
* **triggerOff:** `{string}` Event or events which will trigger the hiding of the tooltip. Multiple events should be separated by a space.
