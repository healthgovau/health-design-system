"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! @health.gov.au/health-design-system v3.0.3 */
/*! @health.gov.au/health-design-system v3.0.3 */
/**
 * Health tooltip component.
 *
 * Provides the functionality for the display of tooltips.
 *
 * @example default tooltip usage:
 *   health.tooltip("abbr[title]");
 *
 * @example tooltip with a manual close button:
 *   health.tooltip("abbr[title]", {
 *     closeButton: true,
 *   });
 *
 * @example click activated tooltip:
 *   health.tooltip("abbr[title]", {
 *     triggerOn: 'click',
 *   });
 *
 * @example restrict tooltip to appear only within the boundary of the main
 * content area:
 *   health.tooltip("abbr[title]", {
 *     boundary: document.querySelector('.main-content'),
 *   });
 *
 * List of optional tooltip settings.
 * - boundary: {string|Element|Array<Element>|Rect} Used to determine the
 *   boundary that the tooltip will be constrained to. Possible values are
 *   'clippingAncestors' (default) | Element | Array<Element> | Rect. (See
 *   https://floating-ui.com/docs/detectoverflow#boundary for more
 *   information).
 * - closeButton: {boolean} If true, a close button will be displayed. If
 *   false, no close button will be displayed.
 * - html: {string|null} Tooltip content. If not provided, the title attribute
 *   of the element will be used assuming it is present. If neither are
 *   present, the tooltip will be empty.
 * - postProcess: {function} Anonymous function to be executed after the
 *   tooltip has been initialized. This can be used to perform post
 *   initialisation actions.
 * - triggerOn: {string} Event or events which will trigger the display of the
 *   tooltip. Multiple events should be separated by a space.
 * - triggerOff: {string} Event or events which will trigger the hiding of the
 *   tooltip. Multiple events should be separated by a space.
 */

var health = health || {};
(function (FloatingUIDOM, document) {
  // Default tooltip settings.
  var defaultSettings = {
    boundary: 'clippingAncestors',
    closeButton: false,
    html: null,
    postProcess: function postProcess() {},
    triggerOn: 'mouseenter touchstart',
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
  document.addEventListener('DOMContentLoaded', function () {
    var tooltip = document.getElementById('health-tooltip');
    if (!tooltip) {
      return;
    }
    var tooltipContent = tooltip.querySelector('.health-tooltip__content');
    var closeButtonTemplate = "<button class=\"health-tooltip__close\" type=\"button\" aria-label=\"Close tooltip\" tabindex=\"0\"><span class=\"health-tooltip__icon health-tooltip__icon--close\">&plus;</span></button>";
    var cleanup;
    var closeButton;
    var hideTimeout;
    var isTooltipOrElementActive;

    /**
    * Show tooltip.
    */
    var showTooltip = function showTooltip(element, tooltip, settings) {
      var useCloseButton = element.getAttribute('data-health-tooltip-close-method') === 'button';
      clearTimeout(hideTimeout);
      isTooltipOrElementActive = true;
      element.insertAdjacentElement('afterend', tooltip);
      if (closeButton) {
        // Remove previous instance of close button if there is one. We always
        // want to start fresh.
        closeButton.remove();
      }

      // Set tooltip content.
      tooltipContent.innerHTML = element.getAttribute('data-health-tooltip');
      if (useCloseButton) {
        // Add close button to tooltip.
        closeButton = document.createElement('div');
        closeButton.innerHTML = closeButtonTemplate;
        closeButton = closeButton.firstElementChild;
        if (!tooltipContent.classList.contains('health-tooltip__content--close-button')) {
          tooltipContent.classList.add('health-tooltip__content--close-button');
        }
        closeButton.addEventListener('click', function () {
          isTooltipOrElementActive = false;
          hideTooltip(element, tooltip);
          element.focus();
        });
        tooltipContent.insertAdjacentElement('afterend', closeButton);
      }
      tooltip.id = "health-tooltip-".concat(element.getAttribute('data-health-tooltip-id'));
      element.setAttribute('aria-describedby', tooltip.id);

      // Set tooltip position.
      cleanup = FloatingUIDOM.autoUpdate(element, tooltip, function () {
        FloatingUIDOM.computePosition(element, tooltip, {
          placement: 'bottom',
          strategy: 'fixed',
          middleware: [FloatingUIDOM.inline(), FloatingUIDOM.shift({
            boundary: settings.boundary
          })]
        }).then(function (_ref) {
          var x = _ref.x,
            y = _ref.y;
          tooltip.style.left = "".concat(x, "px");
          tooltip.style.top = "".concat(y, "px");
        });
      });

      // Set the close tooltip behaviour for when a close button is not being
      // used.
      if (!useCloseButton) {
        tooltip.addEventListener('mouseenter', function () {
          clearTimeout(hideTimeout);
          isTooltipOrElementActive = true;
        });
        tooltip.addEventListener('mouseleave', function () {
          isTooltipOrElementActive = false;
          hideTimeout = setTimeout(function () {
            hideTooltip(element, tooltip);
          }, 600);
        });
      }

      // Tooltip is closable using the escape key.
      tooltip.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          isTooltipOrElementActive = false;
          hideTooltip(element, tooltip);
          element.focus();
        }
      });

      // Display tooltip.
      if (!tooltip.classList.contains('health-tooltip--active')) {
        tooltip.classList.add('health-tooltip--active');
      }
      element.setAttribute('aria-expanded', 'true');
    };

    /**
     * Hide tooltip.
     */
    var hideTooltip = function hideTooltip(element, tooltip) {
      if (!isTooltipOrElementActive) {
        tooltip.classList.remove('health-tooltip--active');
        element.removeAttribute('aria-describedby');
        element.setAttribute('aria-expanded', 'false');
        tooltip.removeAttribute('id');
        tooltip.remove();
        tooltipContent.innerHTML = '';
        if (closeButton) {
          closeButton.remove();
        }
        if (tooltipContent.classList.contains('health-tooltip__content--close-button')) {
          tooltipContent.classList.remove('health-tooltip__content--close-button');
        }

        // Reset close tooltip behaviour by removing any existing triggers.
        tooltip.replaceWith(tooltip.cloneNode(true));

        // Cleanup tooltip positioning.
        cleanup();
      }
    };

    // Initialize tooltip component.
    health.tooltip = function (selector) {
      var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (_typeof(FloatingUIDOM) === 'object') {
        var elements = document.querySelectorAll(selector);
        settings = getTooltipSettings(settings);
        isTooltipOrElementActive = false;
        elements.forEach(function (element, index) {
          var _ref2, _settings$html;
          cleanup = function cleanup() {};

          // Process tooltip content.
          var content = (_ref2 = (_settings$html = settings.html) !== null && _settings$html !== void 0 ? _settings$html : element.getAttribute('title')) !== null && _ref2 !== void 0 ? _ref2 : '';
          if (element.getAttribute('title')) {
            // Title attribute must be removed to prevent interference with
            // tooltip popup in the case of <abbr> elements which have native
            // browser support for tooltips.
            element.removeAttribute('title');
          }
          element.setAttribute('data-health-tooltip', content);
          element.setAttribute('data-health-tooltip-close-method', settings.closeButton ? 'button' : 'default');
          element.setAttribute('data-health-tooltip-id', "".concat(index));
          element.setAttribute('aria-expanded', 'false');
          element.setAttribute('aria-controls', "health-tooltip-".concat(index));

          // Add triggers to display and hide tooltip to target element.
          settings.triggerOn.split(' ').forEach(function (event) {
            element.addEventListener(event, function () {
              clearTimeout(hideTimeout);
              isTooltipOrElementActive = true;
              showTooltip(element, tooltip, settings);
            });
          });
          if (!settings.closeButton) {
            settings.triggerOff.split(' ').forEach(function (event) {
              element.addEventListener(event, function () {
                isTooltipOrElementActive = false;
                hideTimeout = setTimeout(function () {
                  hideTooltip(element, tooltip);
                }, 600);
              });
            });
          }

          // Add keyboard support to show tooltip.
          element.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              event.stopPropagation();
              isTooltipOrElementActive = true;
              showTooltip(element, tooltip, settings);
              tooltip.focus();
            }
          });
        });
      }

      // Execute post initialization tasks.
      if (settings.postProcess && typeof settings.postProcess === 'function') {
        settings.postProcess();
      }
    };
  });
})(window.FloatingUIDOM, document);