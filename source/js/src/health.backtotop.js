(function ($) {
  $(document).ready(function () {
    var $backToTop = $('.health-back-to-top');

    $(document).bind('scroll', function () {
      if ($(document).scrollTop() > 1000) {
        $backToTop.addClass('isVisible');
      } else {
        $backToTop.removeClass('isVisible');
      }
    });

    $backToTop.click(function() {
      $('html,body').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
    });
  });
})(jQuery);