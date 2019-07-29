window.onload = new function() {
  // Load a compatible jQuery version.

  $('img').each(function() {
    if ($(this).attr('data-src')) {
      $(this).attr('src', $(this).attr('data-src'));
      $(this).attr('data-src', null);
    }
  });

  // Don't lazy load on IE8.

  // Remove bottom padding on lazy loaded images.
  var imageWrappers = document.querySelectorAll('.image-wrapper');
  for (i = 0; i < imageWrappers.length; ++i) {
    imageWrappers[i].removeAttribute('style');
  }

};
