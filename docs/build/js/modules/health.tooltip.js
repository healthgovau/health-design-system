"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! @health.gov.au/health-design-system v3.1.2 */
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
    arrow: false,
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
    var closeButtonTemplate = "\n      <button class=\"health-tooltip__button health-tooltip__button--close\" type=\"button\" aria-label=\"Close tooltip\" tabindex=\"0\"></button>";
    var cleanup;
    var closeButton;
    var hideTimeout;
    var isTooltipOrElementActive;

    /**
    * Show tooltip.
    */
    var showTooltip = function showTooltip(element, tooltip, settings) {
      if (cleanup) {
        cleanup();
      }
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
        var arrow = tooltip.querySelector('.health-tooltip__arrow');
        var middleware = [FloatingUIDOM.offset(settings.arrow ? 10 : 0), FloatingUIDOM.inline(), FloatingUIDOM.shift({
          boundary: settings.boundary
        }), FloatingUIDOM.autoPlacement({
          allowedPlacements: ['top', 'bottom']
        })];
        if (settings.arrow) {
          middleware.push(FloatingUIDOM.arrow({
            element: document.querySelector('.health-tooltip__arrow'),
            offset: 10
          }));
        }
        FloatingUIDOM.computePosition(element, tooltip, {
          strategy: 'fixed',
          middleware: middleware
        }).then(function (_ref) {
          var x = _ref.x,
            y = _ref.y,
            middlewareData = _ref.middlewareData,
            placement = _ref.placement;
          tooltip.style.left = "".concat(x, "px");
          tooltip.style.top = "".concat(y, "px");
          if (settings.arrow && arrow) {
            var _middlewareData$arrow;
            var arrowOffsetX = ((_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x) || 0;
            Object.assign(arrow.style, {
              left: "".concat(arrowOffsetX, "px")
            });
            if (placement === 'bottom') {
              if (arrow.classList.contains('health-tooltip__arrow--top')) {
                arrow.classList.remove('health-tooltip__arrow--top');
              }
              arrow.classList.add('health-tooltip__arrow--bottom');
            } else if (placement === 'top') {
              if (arrow.classList.contains('health-tooltip__arrow--bottom')) {
                arrow.classList.remove('health-tooltip__arrow--bottom');
              }
              arrow.classList.add('health-tooltip__arrow--top');
            }
          }
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

    /**
     * Initialize tooltip component.
     *
     * @param {string|HTMLElement|NodeList} selector
     *   Selector or element to attach tooltip to.
     * @param {object} settings
     *   Tooltip settings. This can be used to override default settings.
     *   See the list of optional tooltip settings above.
     * @return {void}
     *   No return value.
     */
    health.tooltip = function (selector) {
      var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (typeof selector !== 'string' && selector instanceof HTMLElement === false && selector instanceof NodeList === false) {
        throw new Error('Invalid selector or element provided. Must be a string, HTMLElement, or NodeList.');
      }
      if (_typeof(FloatingUIDOM) === 'object') {
        var elements = [];
        if (typeof selector === 'string') {
          elements = _toConsumableArray(document.querySelectorAll(selector));
        } else if (selector instanceof HTMLElement) {
          elements.push(selector);
        } else if (selector instanceof NodeList) {
          elements = _toConsumableArray(selector);
        }
        if (elements.length === 0) {
          // Exit early if there are no elements to process.
          return;
        }
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