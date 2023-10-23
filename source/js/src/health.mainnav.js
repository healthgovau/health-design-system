var health = health || {};

(function ($, once) {

  $(document).ready(function () {

    // Main nav drop-down controls
    // Add IDs/aria to dropdown control/nav
    var dropdownControls = $('.au-main-nav__dropdown-control > a');
    dropdownControls.each(function (i) {
      $(this).attr({
        "id": "dropdown-control-" + i,
        "aria-controls": "dropdown-control-" + i,
        "aria-expanded": false,
        "aria-haspopup": "true",
        "role": "button",
        "data-toggle": "dropdown"
      });
      $(this).next(".au-main-nav__dropdown").attr("aria-labelledby", "dropdown-control-" + i);
    });

    // Add click event handlers for all the buttons
    $(".au-main-nav__dropdown-control > a").on("click", function (event) {
      event.preventDefault();
      $control = $(this);

      $.each(dropdownControls, function (index, element) {
        if ($(this).attr("id") === $control.attr("id")) {
          $controlParent = $control.parent(".au-main-nav__dropdown-control");
          if ($controlParent.hasClass('au-main-nav__dropdown-control--active')) {
            $controlParent.removeClass('au-main-nav__dropdown-control--active');
            $(this).attr("aria-expanded", "false");
          } else {
            $controlParent.addClass('au-main-nav__dropdown-control--active');
            $(this).attr("aria-expanded", "true");
          }
        } else {
          $(this).parent(".au-main-nav__dropdown-control").removeClass('au-main-nav__dropdown-control--active');
          $(this).attr("aria-expanded", "false");
        }
      });
    });

    // Add a click event handler for the document to close any open dropdowns when clicking outside
    $(document).on("click", function (event) {
      var $target = $(event.target);
      if (!$target.closest(".au-main-nav__dropdown-control > a").length) {
        // event.preventDefault();
        $(".au-main-nav__dropdown-control > a").attr("aria-expanded", "false");
        $(".au-main-nav__dropdown-control--active").removeClass('au-main-nav__dropdown-control--active');
      }
    });

  });

})(jQuery, once);
