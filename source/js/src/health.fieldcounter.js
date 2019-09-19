var health = health || {};

(function ($) {
  /**
   * Add a dynamic character counter to the bottom of a input field.
   *
   * @param selector
   *   jQuery selector for an input or textarea.
   *
   * @param maxlength
   *   How many characters to restrict. If ommited, will use maxlength attribute if found.
   */
  health.fieldLengthCounter = function (selector, maxlength) {

    $(selector).each(function() {

      var $counter = $('<span class="text--minor"></span>');
      var maxlength = parseInt(maxlength) || parseInt($(this).attr('maxlength')) || 0;

      $(this).after($counter);

      $(this).keyup(function () {
        var remaining = maxlength - $(this).val().length;
        if (remaining < 0) {
          remaining = 0;
        }
        $counter.text(remaining + ' characters remaining');
      });

      $(this).trigger('keyup');
    });
  };
})(jQuery);