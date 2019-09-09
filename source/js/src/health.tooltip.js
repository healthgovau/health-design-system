var health = health || {};

(function ($) {
  $(document).ready(function () {

    health.tooltip = function(selector, options) {
      if (typeof tippy !== 'undefined') {
        var defaultOptions = {
          arrow: false,
          theme: 'health-tooltip',
          performance: true,
          allowTitleHTML: true,
          interactive: true,
          animateFill: false,
        };
        options = options || {};
        options = $.extend(options, defaultOptions);
        return tippy(selector, options);
      }
    }

  });
})(jQuery);