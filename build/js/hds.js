/*! @health.gov.au/health-design-system v1.4.0-alpha.5 */
/* PANCAKE v1.4.1 PANCAKE-JS v1.2.1 */var AU=AU||{};!function(c){var e={};function s(e,t,n){"closing"===n?e.setAttribute("aria-expanded",!1):e.setAttribute("aria-expanded",!0)}function u(e,t,n,o){if("opening"===t||"open"===t)var a=n||"au-accordion--closed",i=o||"au-accordion--open";else a=o||"au-accordion--open",i=n||"au-accordion--closed";var l,r,c,s;s=a,(c=e).classList?c.classList.remove(s):c.className=c.className.replace(new RegExp("(^|\\b)"+s.split(" ").join("|")+"(\\b|$)","gi")," "),r=i,(l=e).classList?l.classList.add(r):l.className=l.className+" "+r}e.Toggle=function(e,t,o){try{window.event.cancelBubble=!0,event.stopPropagation()}catch(r){}e.length===undefined&&(e=[e]),"object"!=typeof o&&(o={});for(var n=0;n<e.length;n++){var a=e[n],i=a.getAttribute("aria-controls"),l=document.getElementById(i);if(null==l)throw new Error("AU.accordion.Toggle cannot find the target to be toggled from inside aria-controls.\nMake sure the first argument you give AU.accordion.Toggle is the DOM element (a button or a link) that has an aria-controls attribute that points to a div that you want to toggle.");l.style.display="block",function(n){c.animate.Toggle({element:l,property:"height",speed:t||250,prefunction:function(e,t){"opening"===t?(e.style.display="block","function"==typeof o.onOpen&&o.onOpen()):"function"==typeof o.onClose&&o.onClose(),s(n,0,t),u(n,t)},postfunction:function(e,t){"closed"===t?(e.style.display="",e.style.height="","function"==typeof o.afterClose&&o.afterClose()):(e.style.display="",e.style.height="","function"==typeof o.afterOpen&&o.afterOpen()),u(e,t)}})}(a)}return!1},e.Open=function(e,t){try{window.event.cancelBubble=!0,event.stopPropagation()}catch(r){}e.length===undefined&&(e=[e]);for(var n=0;n<e.length;n++){var o,a=e[n],i=a.getAttribute("aria-controls"),l=document.getElementById(i);o="undefined"!=typeof getComputedStyle?window.getComputedStyle(l).height:l.currentStyle.height,0===parseInt(o)&&(l.style.height="0px"),l.style.display="",u(l,"opening"),u(a,"opening"),s(a,0,"opening"),function(e,t,n){c.animate.Run({element:e,property:"height",endSize:"auto",speed:t||250,callback:function(){u(n,"opening")}})}(l,t,a)}},e.Close=function(e,t){try{window.event.cancelBubble=!0,event.stopPropagation()}catch(l){}e.length===undefined&&(e=[e]);for(var n=0;n<e.length;n++){var o=e[n],a=o.getAttribute("aria-controls"),i=document.getElementById(a);u(o,"closing"),s(o,0,"closing"),function(e,t){c.animate.Run({element:e,property:"height",endSize:0,speed:t||250,callback:function(){e.style.display="",u(e,"close")}})}(i,t)}},c.accordion=e}(AU),"undefined"!=typeof module&&(module.exports=AU);var AU=AU||{};!function(f){var e={};function s(e,t,n){if(e===t)return{stepSize:0,steps:0,intervalTime:0};var o=t-e,a=n/o,i=o<0?-1:1,l=Math.abs(o/i);return a=n/l,Math.abs(a)<1e3/60&&(a=1e3/60,i=o/(l=Math.ceil(Math.abs(n/a)))),{stepSize:i,steps:l-1,intervalTime:a}}"undefined"!=typeof module&&(e.CalculateAnimationSpecs=s),e.GetCSSPropertyBecauseIE=function(e,t){if("undefined"!=typeof getComputedStyle)return window.getComputedStyle(e)[t];var n=e.currentStyle[t];return"auto"===n&&(n=f.animate.CalculateAuto(e,t)),n},e.CalculateAuto=function(e,t){var n,o;return e.style[t]=(o="height"===t?(n=e.clientHeight,e.style[t]="auto",e.clientHeight):(n=e.clientWidth,e.style[t]="auto",e.clientWidth),n+"px"),parseInt(o)},e.Stop=function(e){clearInterval(e.AUanimation)},e.Run=function(i){var l=i.element,e=i.speed||250;l.length===undefined&&(l=[l]),"function"!=typeof i.callback&&(i.callback=function(){}),l[0].AUinteration=0,l[0].AUinterations=l.length;for(var t=0;t<l.length;t++){var n=l[t];f.animate.Stop(n);var o=parseInt(f.animate.GetCSSPropertyBecauseIE(n,i.property)),a=i.endSize;"auto"===i.endSize&&(a=f.animate.CalculateAuto(n,i.property));var r=s(o,a,e),c=o;r.stepSize<0?n.AUtoggleState="closing":0<r.stepSize&&(n.AUtoggleState="opening"),function(e,t,n,o,a){e.AUanimation=setInterval(function(){if(t===a||0===o.steps){if(f.animate.Stop(e),e.style[i.property]=a+"px",e.AUtoggleState="",l[0].AUinteration++,"auto"===i.endSize&&(e.style[i.property]=""),l[0].AUinteration>=l[0].AUinterations)return i.callback()}else n+=o.stepSize,e.style[i.property]=n+"px",o.steps--},Math.abs(o.intervalTime))}(n,o,c,r,a)}},e.Toggle=function(t){var n=t.element,e=t.property||"height",o=t.speed||250,a=t.closeSize===undefined?0:t.closeSize,i=t.openSize===undefined?"auto":t.openSize;n.length===undefined&&(n=[n]),"function"!=typeof t.prefunction&&(t.prefunction=function(){}),"function"!=typeof t.postfunction&&(t.postfunction=function(){}),"function"!=typeof t.callback&&(t.callback=function(){}),n[0].AUtoggleInteration=0,n[0].AUtoggleInterations=n.length;for(var l=0;l<n.length;l++){var r,c=n[l];f.animate.Stop(c);var s="",u="",p=parseInt(f.animate.GetCSSPropertyBecauseIE(c,t.property));if(p===a||"closing"===c.AUtoggleState)r=i,s="opening",u="open";else{if(p===a&&"opening"!==c.AUtoggleState)throw new Error("AU.animate.Toggle cannot determine state of element");r=a,s="closing",u="closed"}t.prefunction(c,s),f.animate.Run({element:c,endSize:r,property:e,speed:o,callback:function(){if(n[0].AUtoggleInteration++,n[0].AUtoggleInteration===n[0].AUinterations){var e=t.callback(c,u);return t.postfunction(c,u),e}t.postfunction(c,u)}})}},f.animate=e}(AU),"undefined"!=typeof module&&(module.exports=AU),"undefined"!=typeof exports&&(Object.defineProperty(exports,"__esModule",{value:!0}),eval("exports.default = AU"));var AU=AU||{};!function(h){var b={},A={},S=!1;function U(e,t,n,o){if("opening"===t||"open"===t)var a=n||"au-main-nav__content--closed",i=o||"au-main-nav__content--open";else a=o||"au-main-nav__content--open",i=n||"au-main-nav__content--closed";var l,r,c,s;s=a,(c=e).classList?c.classList.remove(s):c.className=c.className.replace(new RegExp("(^|\\b)"+s.split(" ").join("|")+"(\\b|$)","gi")," "),r=i,(l=e).classList?l.classList.add(r):l.className=l.className+" "+r}function _(t,e,n){function o(e){var t=n.apply(this,arguments);return!1===t&&(e.stopPropagation(),e.preventDefault()),t}function a(){var e=n.call(t,window.event);return!1===e&&(window.event.returnValue=!1,window.event.cancelBubble=!0),e}return t.addEventListener?(t.addEventListener(e,o,!1),{element:t,handler:o,event:e}):(t.attachEvent("on"+e,a),{element:t,handler:a,event:e})}function w(e){e.element.removeEventListener?e.element.removeEventListener(e.event,e.handler):e.element.detachEvent("on"+e.event,e.handler)}b.Toggle=function(a,e,i){if(!S){S=!0;try{window.event.cancelBubble=!0,event.stopPropagation()}catch(v){}"object"!=typeof i&&(i={});var t,l,n=a.getAttribute("aria-controls"),o=document.getElementById(n),r=o.querySelector(".au-main-nav__menu"),c=o.querySelector(".au-main-nav__overlay"),s=o.querySelector(".au-main-nav__toggle--close"),u=o.querySelector(".au-main-nav__toggle--open"),p=o.querySelector(".au-main-nav__focus-trap-top"),f=o.querySelector(".au-main-nav__focus-trap-bottom"),d=r.querySelectorAll("a, .au-main-nav__toggle"),g=-1===o.className.indexOf("au-main-nav__content--open"),y=r.offsetWidth,m=g?"opening":"";c.style.display="block",t=o,l=e,h.animate.Toggle({element:r,property:"left",openSize:0,closeSize:-1*y,speed:l||250,prefunction:function(){"opening"===m?(r.style.display="block",c.style.left=0,c.style.opacity=.5,"function"==typeof i.onOpen&&i.onOpen()):(c.style.opacity="0","function"==typeof i.onClose&&i.onClose())},postfunction:function(){"opening"===m?(s.focus(),u.setAttribute("aria-expanded",!0),s.setAttribute("aria-expanded",!0),p.setAttribute("tabindex",0),f.setAttribute("tabindex",0),A.focusTop=_(p,"focus",function(){d[d.length-1].focus()}),A.focusBottom=_(f,"focus",function(){d[0].focus()}),A.escKey=_(document,"keyup",function(){var e,t,n=n||window.event,o=(e=c,t="display",("undefined"!=typeof getComputedStyle?getComputedStyle(e,null):e.currentStyle)[t]);27===n.keyCode&&"block"===o&&b.Toggle(a,l,i)}),"function"==typeof i.afterOpen&&i.afterOpen()):(u.focus(),u.setAttribute("aria-expanded",!1),s.setAttribute("aria-expanded",!1),p.removeAttribute("tabindex"),f.removeAttribute("tabindex"),w(A.focusTop),w(A.focusBottom),w(A.escKey),"function"==typeof i.afterClose&&i.afterClose()),U(t,m),U(document.body,m,"au-main-nav__scroll--unlocked","au-main-nav__scroll--locked"),r.style.display="",r.style.left="",c.style.display="",c.style.left="",c.style.opacity="",S=!1}})}},h.mainNav=b}(AU),"undefined"!=typeof module&&(module.exports=AU);var AU=AU||{};"undefined"!=typeof module&&(module.exports=AU);

(function ($) {
  $(document).ready(function () {
    $('html').removeClass('no-js').addClass('js');
  });
})(jQuery);
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
(function ($) {
  $(document).ready(function () {
    if ($.fancybox !== undefined) {
      $('a[data-lightbox="fancybox"]').fancybox({
        btnTpl: {
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"/></svg>' +
          'Zoom' +
          "</button>",
          close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>' +
          'Close' +
          "</button>"
        }
      });
    }
  });
})(jQuery);

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


(function ($) {
  $(document).ready(function () {
    if (typeof LazyLoad !== 'undefined') {
      var myLazyLoad = new LazyLoad({
        callback_load: function (el) {
          // Remove all the space reserving class and styles.
          $(el).parents('.image-outer').find('.image-placeholder').remove();
          $(el).parents('.image-wrapper')
            .removeClass('image-loading')
            .removeClass('image-wrapper');
          // Fire off an event to listeners that this image has loaded.
          $(el).trigger('lazyLoad_loaded', el);
        }
      });
    }

    // If the user tries to print, then try to load all the images so printing works :)
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint

    // Webkit browsers.
    if (typeof window.webkitConvertPointFromNodeToPage === 'function') {
      // Onbeforeprint equivalent for webkit browsers (Safari etc)
      var mediaQueryList = window.matchMedia('print');
      mediaQueryList.addListener(function (mql) {
        if (mql.matches) {
          myLazyLoad._settings.threshold = 999999999;
          myLazyLoad.update();
          window.scrollTo(0, document.body.scrollHeight);
        }
      });
    }
    // Normal browsers.
    else {
      window.onbeforeprint = function () {
        myLazyLoad._settings.threshold = 999999999;
        myLazyLoad.update();
        window.scrollTo(0, document.body.scrollHeight);
      }
    }
  });
})(jQuery);

var health = health || {};

(function ($) {

  /**
   * Add an autocomplete dropdown to a text input.
   *
   * @param selector
   *   jQuery selector.
   * @param source
   *   Callback function or array of terms.
   *
   * @see https://api.jqueryui.com/autocomplete/
   */
  health.searchAutocomplete = function (selector, source) {
    $(selector).once('healthSearchAutocomplete').autocomplete({
      source: source,
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
  };

  /**
   * Move the search box depending on if we are looking at mobile or desktop.
   */
  function healthSearchResize() {
    // Desktop
    if ($(window).width() > 769) {
      if ($('.au-main-nav .health-search--global').length !== 0) {
        $('.health-search--global').insertAfter('.health-sub-nav').show();
      }
      $('.health-facet').removeClass('health-facet--mobile-hidden');
    }
    // Mobile
    else {
      if ($('.au-main-nav .health-search--global').length === 0) {
        $('.health-search--global').insertAfter('#main-nav-default').hide();
      }
      // If mobile filters are closed, then hide the facets.
      if (!$('.health-filter').hasClass('health-filter--open')) {
        $('.health-facet').addClass('health-facet--mobile-hidden');
      }
    }
  }

  /**
   * Limit the number of options displayed in a facet group by providing a show more and show less link.
   *
   * @param selector
   * @param limit
   */
  health.facetShowMore = function(selector, limit) {
    $(selector).once('healthFacetShowMore').each(function() {
      var
        limit_css = limit - 1,
        facet = $(this);

      // Hide filters beyond the limit.
      facet.find('.au-control-input:gt(' + limit_css + ')').hide();

      // Add a 'Show more' button if the facet has more than the limit.
      facet.filter(function() {
        return facet.find('.au-control-input').length > limit;
      }).each(function() {
        $('<button aria-controls="' + facet.attr('id') + '" class="health-facet__more au-btn au-btn--tertiary">').text('Show more').click(function () {
          if (facet.find('.au-control-input:hidden').length > 0) {
            facet.find('.au-control-input:gt(' + limit_css + ')').show();
            $(this).addClass('open').text('Show less');
          }
          else {
            facet.find('.au-control-input:gt(' + limit_css + ')').hide();
            $(this).removeClass('open').text('Show more');
          }
          return false;
        }).insertAfter(facet.find('.health-facet__list'));
      });
    });
  };

  $(document).ready(function () {

    var resizeTimer; // Set resizeTimer to empty so it resets on page load
    // On resize, run the function and reset the timeout
    $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(healthSearchResize, 250);
    });
    healthSearchResize();

    // Copy across the elements from the sub menu into the main nav.
    // Only show them in the mobile menu.
    $('.health-sub-nav ul.au-link-list li').clone().insertAfter('.au-main-nav ul li:last-of-type').addClass('au-main-nav--mobile-only');

    // Search button handler.
    $('.au-main-nav__toggle--search').click(function(e) {
      $('.health-search--global').toggle();
      $(this).find('span.svg-inline--fa').toggle();
    });

    // Filter toggles.
    $('.health-filter').click(function (e) {
      $('.health-facet').toggleClass('health-facet--mobile-hidden');
      $(this).toggleClass('health-filter--open');
    });

    // Add correct grid class to second refine search in listings.
    $('.region-navigation #search-api-page-search-form-default-search--2').addClass('col-xs-12');

  });

})(jQuery);

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
