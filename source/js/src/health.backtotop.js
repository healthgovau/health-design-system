(function ($) {

  var ignore = false;
  $(document).ready(function () {
    var $backToTop = $('.health-back-to-top');

    $(document).bind('scroll', function () {
      if (!ignore) {
        if ($(document).scrollTop() > 1000) {
          $backToTop.addClass('isVisible');
        } else {
          $backToTop.removeClass('isVisible');
        }
      }
    });

    $backToTop.click(function() {
      ignore = true;
      $backToTop.removeClass('isVisible');
      $('html,body').stop().animate({
        scrollTop: 0,
      }, 'slow', 'swing', function() {
        ignore = false;
      });
    });
  });
})(jQuery);