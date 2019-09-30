(function ($) {
  $(document).ready(function () {
    //YouTube embed on click
    $(".health-video__preview__link").click(function (e) {
      e.preventDefault();
      var videoid = $(this).attr("data-youtubeid");
      // Create an iFrame with autoplay set to true
      var iframe_url = "https://www.youtube.com/embed/" + videoid + "?autoplay=1&autohide=2&border=0&wmode=opaque&rel=0&html5=1&fs=1";
      if ($(this).data('params')) {
        iframe_url += '&' + $(this).data('params');
      }

      // Create an iframe that replicates the Youtube embed.
      var $video = $('<div class="au-responsive-media-vid au-responsive-media-vid--16x9"></div>');
      var $iframe = $('<iframe/>', {
        'title': 'YouTube video player',
        'id': 'youtube-iframe',
        'class': 'au-responsive-media-vid__item',
        'allowfullscreen': 'allowfullscreen',
        'frameborder': '0',
        'aria-live': 'assertive',
        'src': iframe_url
      });

      // Replace the YouTube thumbnail with YouTube HTML5 Player
      $video.append($iframe);
      $(this).parent('.health-video__preview').replaceWith($video);

      // Hide the length.
      $('.health-video__preview__length').hide();

    });
  });
})(jQuery);
