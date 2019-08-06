(function ($) {
  $(document).ready(function () {
    if ($.fancybox !== undefined) {
      $('a[data-lightbox="fancybox"]').fancybox({
        btnTpl: {
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
          '<i class="fa fa-search-plus"></i> Zoom' +
          "</button>",
          close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
          '<i class="fa fa-times"></i> Close' +
          "</button>"
        }
      });
    }
  });
})(jQuery);
