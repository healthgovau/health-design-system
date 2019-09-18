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
  health.inpagenav = function(selector) {
    if (typeof $.fn.anchorific !== 'undefined') {
      $(selector).anchorific({
        navigation: '.au-inpage-nav-links',
        headers: 'h2',
        anchorText: false,
        spy: false
      });
    }
  };

})(jQuery);

