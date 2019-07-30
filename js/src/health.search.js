(function ($) {
  $(document).ready(function () {
    // Autocomplete.
    $("#edit-funnelback-search-field, #edit-funnelback-search-field--2").autocomplete({
      source: function( request, response ) {
        // Get results from funnelback.
        $.ajax({
          url: '/funnelback/search/autocompletion/' + request.term,
          dataType: "json",
          success: function( data ) {
            response( data );
          }
        });
      },
      minLength: 2,
      classes: {
        "ui-autocomplete": "au-body au-link-list"
      },
      // When the user selects a value, submit the form.
      select: function( event, ui ) {
        $(this).val(ui.item.value);
        $(event.target).parents('form').submit();
      },
      // Show loading spinner.
      search: function( event, ui ) {
        $(event.target).parents('form').find('.health-loading').toggleClass('health-loading--active');
      },
      // Hide loading spinner.
      response: function( event, ui ) {
        $(event.target).parents('form').find('.health-loading').toggleClass('health-loading--active');
      }
    });

    // Resizing.
    function resizeFunction() {
      if ($(window).width() > 769) {
        if ($('.au-main-nav .health-search--global').length !== 0) {
          $('.health-search--global').insertAfter('#block-menu-menu-sub-menu').show();
        }
      } else {
        if ($('.au-main-nav .health-search--global').length === 0) {
          $('.health-search--global').insertAfter('#main-nav-default').hide();
          $('.au-main-nav__toggle--search i').addClass('fa-search').removeClass('fa-times');
        }
      }
    }

    var resizeTimer; // Set resizeTimer to empty so it resets on page load
    // On resize, run the function and reset the timeout
    $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeFunction, 250);
    });
    resizeFunction();

    // Search button handler.
    $('.au-main-nav__toggle--search').click(function(e) {
      $('.health-search--global').toggle();
      $(this).find('i').toggleClass('fa-search').toggleClass('fa-times');
    });

    // Filter toggles.
    $('.health-filter__title').click(function (e) {
      $(this).toggleClass('expanded');
      $('.block-facetapi, .block-funnelback').toggleClass('facetshow');
    });

    // Add correct grid class to seccond refine search in listings.
    $('.region-navigation #search-api-page-search-form-default-search--2').addClass('col-xs-12');

    // Add 'Show more' to facets.
    $('.health-facets').each(function() {
      var
        limit = 8,
        limit_css = limit - 1,
        facet = $(this);

      // Hide filters beyond the limit.
      facet.find('li:gt(' + limit_css + ')').hide();

      // Add a 'Show more' button if the facet has more than the limit.
      facet.filter(function() {
        return facet.find('li').length > limit;
      }).each(function() {
        $('<button aria-controls="' + facet.attr('id') + '" class="health-filter__more au-btn au-btn--tertiary">').text('Show more').click(function () {
          if (facet.find('li:hidden').length > 0) {
            facet.find('li:gt(' + limit_css + ')').show();
            $(this).addClass('open').text('Show less');
          }
          else {
            facet.find('li:gt(' + limit_css + ')').hide();
            $(this).removeClass('open').text('Show more');
          }
          return false;
        }).insertAfter(facet);
      });
    });
  });
})(jQuery);
