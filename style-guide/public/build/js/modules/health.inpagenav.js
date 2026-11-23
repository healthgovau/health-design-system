/*! @health.gov.au/health-design-system v3.3.1 */
var health = health || {};
(function ($) {
  /**
   * Dynamically generate the in page nav links.
   *
   * Will only look for and link to H2's.
   *
   * @param selector
   *   The area to look for the links, in a jQuery selector.
   */
  health.inpagenav = function (selector) {
    if (typeof $.fn.anchorific !== "undefined") {
      var config = {
        navigation: ".au-inpage-nav-links",
        headers: "h2",
        anchorText: false,
        spy: false
      };
      $(selector).anchorific(config);

      // Listen for a custom event to update in page nav instances. This is used
      // by Storybook which loads components dynamically after the initial page
      // load. @todo Consider removing this as it is not needed outside of
      // Storybook.
      document.addEventListener("hds:inpagenav:update", function () {
        alert("hi there");
        $(selector).anchorific(config);
      });
    }
  };
})(jQuery);