(function ($) {
  $(document).ready(function () {
    if (typeof LazyLoad !== 'undefined') {
      var myLazyLoad = new LazyLoad({
        callback_load: function (el) {
          // Remove all the space reserving class and styles.
          $(el).parents('.image-outer').find('.image-placeholder').remove();
          $(el).parents('.image-wrapper')
            .removeClass('image-loading')
            .removeClass('image-wrapper');
          // Fire off an event to listeners that this image has loaded.
          $(el).trigger('lazyLoad_loaded', el);
        }
      });
    }

    // If the user tries to print, then try to load all the images so printing works :)
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint

    // Webkit browsers.
    if (typeof window.webkitConvertPointFromNodeToPage === 'function') {
      // Onbeforeprint equivalent for webkit browsers (Safari etc)
      var mediaQueryList = window.matchMedia('print');
      mediaQueryList.addListener(function (mql) {
        if (mql.matches) {
          myLazyLoad._settings.threshold = 999999999;
          myLazyLoad.update();
          window.scrollTo(0, document.body.scrollHeight);
        }
      });
    }
    // Normal browsers.
    else {
      window.onbeforeprint = function () {
        myLazyLoad._settings.threshold = 999999999;
        myLazyLoad.update();
        window.scrollTo(0, document.body.scrollHeight);
      }
    }
  });
})(jQuery);
