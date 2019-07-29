(function ($, Drupal, window, document) {

  'use strict';

  Drupal.behaviors.backtotop = {
    attach: function (context, settings) {

      var $backToTop = $('.health-back-to-top');

      $(document).bind('scroll', function () {
        if ($(document).scrollTop() > 1000) {
          $backToTop.addClass('isVisible');
        } else {
          $backToTop.removeClass('isVisible');
        }
      });

      $backToTop.click(function() {
        $('html,body', context).stop().animate({
          scrollTop: 0
        }, 'slow', 'swing');
      });

    }
  };
})(jQuery, Drupal, this, this.document);
