# Lazy load

Images should be lazy loaded to improve [time to interactive](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive).

Images should use width and height attributes.

## Reserving space

To make sure the page doesn't jump around as images are loaded, we reserve the space initially.

`max-width` is the original image width

`padding-top` is calculated as a percentage of height width `height / width * 100`

Requires [LazyLoad](https://github.com/verlok/lazyload), jQuery and [health.lazyload.js](/js/health/health.lazyload.js).

## Image loaded event

When an image is loaded `lazyLoad_loaded` is fired on the image.

To listen for this event, register an event listener to the image, for example

```javascript
$('img[data-src]').on('lazyLoad_loaded', function(event, element) {
  // do something
});
```