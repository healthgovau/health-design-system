var health = health || {};

(function ($) {
  $(document).ready(function () {

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
      var $field = $(selector);
      var $counter = $('<span class="text--minor"></span>');
      var maxlength = parseInt(maxlength) || parseInt($field.attr('maxlength')) || 0;

      $field.after($counter);

      $field.keyup(function() {
        var remaining = maxlength - $field.val().length;
        if (remaining < 0) {
          remaining = 0;
        }
        $counter.text(remaining + ' characters remaining');
      });

      $field.trigger('keyup');
    };
  });
})(jQuery);