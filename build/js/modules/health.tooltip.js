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

    // Initialize tooltip component.
    health.tooltip = function (selector) {
      var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (_typeof(FloatingUIDOM) === 'object') {
        var $selector = $(selector);
        settings = getTooltipSettings(settings);
        var hideTimeout;
        var isTooltipOrElementActive = false;
        $selector.each(function (index, element) {
          var _ref, _settings$html;
          var $element = $(element);
          var cleanup = function cleanup() {};

          // Process tooltip content.
          var content = (_ref = (_settings$html = settings['html']) !== null && _settings$html !== void 0 ? _settings$html : $element.attr('title')) !== null && _ref !== void 0 ? _ref : '';
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

          /**
           * Show tooltip.
           */
          var showTooltip = function showTooltip() {
            clearTimeout(hideTimeout);
            isTooltipOrElementActive = true;
            $element.after($tooltip);

            // Set tooltip content.
            $tooltipContent.html($element.attr('data-health-tooltip'));
            $tooltip.attr('id', "health-tooltip-".concat($element.attr('data-health-tooltip-id')));
            $element.attr('aria-describedby', "health-tooltip-".concat($element.attr('data-health-tooltip-id')));

            // Set tooltip position.
            cleanup = FloatingUIDOM.autoUpdate($element[0], $tooltip[0], function () {
              FloatingUIDOM.computePosition($element[0], $tooltip[0], {
                strategy: 'absolute',
                middleware: [FloatingUIDOM.offset(8), FloatingUIDOM.shift(), FloatingUIDOM.flip()]
              }).then(function (_ref2) {
                var x = _ref2.x,
                  y = _ref2.y;
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
          var hideTooltip = function hideTooltip() {
            if (isTooltipOrElementActive === false) {
              $tooltip.removeClass('health-tooltip--active');
              $element.removeAttr('aria-describedby');
              $element.attr('aria-expanded', 'false');
              $tooltip.removeAttr('id');
              $tooltip.detach();
              $tooltipContent.html('');
              cleanup();
            }
          };

          // Add triggers to display and hide tooltip to target element.
          $element.on(settings.triggerOn, function () {
            clearTimeout(hideTimeout);
            isTooltipOrElementActive = true;
            showTooltip();
          }).on(settings.triggerOff, function () {
            isTooltipOrElementActive = false;
            hideTimeout = setTimeout(function () {
              hideTooltip();
            }, 600);
          });

          // Add triggers to display and hide tooltip to tooltip element.
          $tooltip.on('focus mouseenter touchstart', function () {
            clearTimeout(hideTimeout);
            isTooltipOrElementActive = true;
          }).on('blur mouseleave touchend', function () {
            isTooltipOrElementActive = false;
            hideTimeout = setTimeout(function () {
              hideTooltip();
            }, 600);
          });
        });
      }

      // Execute any post initialization tasks
      if (settings.postProcess && typeof settings.postProcess === 'function') {
        settings.postProcess();
      }
    };
  });
})(jQuery, window.FloatingUIDOM, document);