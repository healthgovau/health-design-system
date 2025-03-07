"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! @health.gov.au/health-design-system v3.0.3 */
/*! @health.gov.au/health-design-system v3.0.3 */
/**
 * Health tooltip component.
 *
 * Provides the functionality for the display of tooltips.
 */

var health = health || {};
(function ($, FloatingUIDOM, document) {
  // Default tooltip settings.
  // html:
  //   tooltip content. If not provided, the title attribute of the element
  //   will be used assuming it is present. If neither are present, the tooltip
  //   will be empty.
  // postProcess:
  //   callback function to be executed after the tooltip has been initialized.
  //   This can be used to perform additional operations on the tooltip.
  // triggerOn:
  //   event(s) that will trigger the display of the tooltip.
  // triggerOff:
  //   event(s) that will trigger the hiding of the tooltip.
  var defaultSettings = {
    closeButton: false,
    html: null,
    postProcess: function postProcess() {},
    triggerOn: 'focus mouseenter touchstart',
    triggerOff: 'blur mouseleave touchend'
  };

  /**
   * Get tooltip settings.
   *
   * Overrides default settings with user provided settings.
   *
   * @param {*} settings
   *   User provided settings.
   *
   * @return {*}
   *   Updated tooltip settings where default settings have been overridden by
   *   any user provided settings.
   */
  function getTooltipSettings(settings) {
    var updatedSettings = {};
    for (var key in defaultSettings) {
      var _settings$key;
      updatedSettings[key] = (_settings$key = settings[key]) !== null && _settings$key !== void 0 ? _settings$key : defaultSettings[key];
    }
    return updatedSettings;
  }
  $(document).ready(function () {
    var $tooltip = $('#health-tooltip');
    if ($tooltip.length === 0) {
      return;
    }
    var $tooltipContent = $tooltip.find('.health-tooltip__content');
    var closeButtonTemplate = "<button class=\"health-tooltip__close\" type=\"button\" aria-label=\"Close tooltip\" tabindex=\"0\"><span class=\"health-tooltip__icon health-tooltip__icon--close\">&plus;</span></button>";
    var cleanup;
    var $closeButton;
    var hideTimeout;
    var isTooltipOrElementActive;

    /**
     * Show tooltip.
     */
    var showTooltip = function showTooltip($element, $tooltip) {
      var useCloseButton = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      clearTimeout(hideTimeout);
      isTooltipOrElementActive = true;
      $element.after($tooltip);
      if ($closeButton) {
        // Remove previous instance of close button.
        $closeButton.remove();
      }
      // Set tooltip content.
      $tooltipContent.html($element.attr('data-health-tooltip'));
      if (useCloseButton === true) {
        // Add close button to tooltip.
        $closeButton = $(closeButtonTemplate);
        if ($tooltipContent.hasClass('health-tooltip__content--close-button') === false) {
          $tooltipContent.addClass('health-tooltip__content--close-button');
        }
        $closeButton.on('click touchstart', function () {
          isTooltipOrElementActive = false;
          hideTooltip($element, $tooltip);
        });
        $tooltipContent.after($closeButton);
      }
      $tooltip.attr('id', "health-tooltip-".concat($element.attr('data-health-tooltip-id')));
      $element.attr('aria-describedby', "health-tooltip-".concat($element.attr('data-health-tooltip-id')));

      // Set tooltip position.
      cleanup = FloatingUIDOM.autoUpdate($element[0], $tooltip[0], function () {
        FloatingUIDOM.computePosition($element[0], $tooltip[0], {
          strategy: 'absolute',
          middleware: [FloatingUIDOM.offset(8), FloatingUIDOM.shift(), FloatingUIDOM.flip()]
        }).then(function (_ref) {
          var x = _ref.x,
            y = _ref.y;
          Object.assign($tooltip.css({
            left: "".concat(x, "px"),
            top: "".concat(y, "px")
          }));
        });
      });

      // Display tooltip.
      if ($tooltip.hasClass('health-tooltip--active') === false) {
        $tooltip.addClass('health-tooltip--active');
      }
      $element.attr('aria-expanded', 'true');
    };

    /**
     * Hide tooltip.
     */
    var hideTooltip = function hideTooltip($element, $tooltip) {
      if (isTooltipOrElementActive === false) {
        $tooltip.removeClass('health-tooltip--active');
        $element.removeAttr('aria-describedby');
        $element.attr('aria-expanded', 'false');
        $tooltip.removeAttr('id');
        $tooltip.detach();
        $tooltipContent.html('');
        if ($closeButton) {
          $closeButton.remove();
        }
        if ($tooltipContent.hasClass('health-tooltip__content--close-button')) {
          $tooltipContent.removeClass('health-tooltip__content--close-button');
        }
        // Cleanup tooltip positioning.
        cleanup();
      }
    };

    // Initialize tooltip component.
    health.tooltip = function (selector) {
      var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (_typeof(FloatingUIDOM) === 'object') {
        var $selector = $(selector);
        settings = getTooltipSettings(settings);
        isTooltipOrElementActive = false;
        $selector.each(function (index, element) {
          var _ref2, _settings$html;
          var $element = $(element);
          cleanup = function cleanup() {};

          // Process tooltip content.
          var content = (_ref2 = (_settings$html = settings['html']) !== null && _settings$html !== void 0 ? _settings$html : $element.attr('title')) !== null && _ref2 !== void 0 ? _ref2 : '';
          if ($element.attr('title')) {
            // Title attribute must be removed to prevent interference with
            // tooltip popup in the case of <abbr> elements which have native
            // browser support for tooltips.
            $element.removeAttr('title');
          }
          $element.attr('data-health-tooltip', content);
          $element.attr('data-health-tooltip-id', "".concat(index));
          $element.attr('aria-expanded', 'false');
          $element.attr('aria-controls', "health-tooltip-".concat($element.attr('data-health-tooltip-id')));

          // Add triggers to display and hide tooltip to target element.
          $element.on(settings.triggerOn, function () {
            clearTimeout(hideTimeout);
            isTooltipOrElementActive = true;
            showTooltip($element, $tooltip, settings.closeButton);
          });
          if (settings.closeButton === false) {
            $element.on(settings.triggerOff, function () {
              isTooltipOrElementActive = false;
              hideTimeout = setTimeout(function () {
                hideTooltip($element, $tooltip);
              }, 600);
            });
          }

          // Add triggers to display and hide tooltip to tooltip element.
          $tooltip.on('focus mouseenter touchstart', function () {
            clearTimeout(hideTimeout);
            isTooltipOrElementActive = true;
          });
          if (settings.closeButton === false) {
            $tooltip.on('blur mouseleave touchend', function () {
              isTooltipOrElementActive = false;
              hideTimeout = setTimeout(function () {
                hideTooltip($element, $tooltip);
              }, 600);
            });
          }
        });
      }

      // Execute any post initialization tasks
      if (settings.postProcess && typeof settings.postProcess === 'function') {
        settings.postProcess();
      }
    };
  });
})(jQuery, window.FloatingUIDOM, document);