/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

(function ($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.healthLightbox = {
    attach: function (context, settings) {
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
    }
  };
})(jQuery, Drupal, this, this.document);
