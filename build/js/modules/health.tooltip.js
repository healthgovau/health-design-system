"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
    // Initialize tooltip component.
    var $tooltip = $('#health-tooltip');
    if ($tooltip.length === 0) {
      return;
    }
    var $tooltipContent = $tooltip.find('.health-tooltip__content');
    health.tooltip = function (selector) {
      if (_typeof(FloatingUIDOM) === 'object') {
        var $selector = $(selector);
        var hideTimeout;
        var isTooltipOrElementActive = false;
        $selector.each(function (index, element) {
          var $element = $(element);
          var cleanup = function cleanup() {};

          // Process tooltip content.
          var content = $element.attr('title');
          if (content) {
            $element.attr('data-health-tooltip', content).removeAttr('title');
          }
          $element.attr('data-health-tooltip-id', "".concat(index));
          $element.attr('aria-expanded', 'false');
          $element.attr('aria-controls', "health-tooltip-".concat($element.attr('data-health-tooltip-id')));
          var showTooltip = function showTooltip() {
            clearTimeout(hideTimeout);
            isTooltipOrElementActive = true;
            $element.after($tooltip);

            // Set tooltip content.
            $tooltipContent.html(content);
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
          $element.on('focus mouseenter touchstart', function () {
            clearTimeout(hideTimeout);
            isTooltipOrElementActive = true;
            showTooltip();
          }).on('blur mouseleave touchend', function () {
            isTooltipOrElementActive = false;
            hideTimeout = setTimeout(function () {
              hideTooltip();
            }, 600);
          });
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
    };
  });
})(jQuery, window.FloatingUIDOM, document);