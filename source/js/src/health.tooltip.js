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

((FloatingUIDOM, document) => {

  // Default tooltip settings.
  const defaultSettings = {
    arrow: false,
    autoPosition: true,
    boundary: 'clippingAncestors',
    closeButton: false,
    html: null,
    postProcess: () => { },
    triggerOn: 'mouseenter touchstart',
    triggerOff: 'blur mouseleave touchend',
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
    const updatedSettings = {};
    for (const key in defaultSettings) {
      updatedSettings[key] = settings[key] ?? defaultSettings[key];
    }
    return updatedSettings;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.getElementById('health-tooltip');
    if (!tooltip) {
      return;
    }
    const tooltipContent = tooltip.querySelector('.health-tooltip__content');
    const closeButtonTemplate = `
      <button class="health-tooltip__button health-tooltip__button--close" type="button" aria-label="Close tooltip" tabindex="0"></button>`;
    let cleanup;
    let closeButton;
    let hideTimeout;
    let isTooltipOrElementActive;

    /**
    * Show tooltip.
    */
    const showTooltip = (element, tooltip, settings) => {
      if (cleanup) {
        cleanup();
      }
      const useCloseButton = element.getAttribute('data-health-tooltip-close-method') === 'button';
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

        closeButton.addEventListener('click', () => {
          isTooltipOrElementActive = false;
          hideTooltip(element, tooltip);
          element.focus();
        });

        tooltipContent.insertAdjacentElement('afterend', closeButton);
      }

      tooltip.id = `health-tooltip-${element.getAttribute('data-health-tooltip-id')}`;
      element.setAttribute('aria-describedby', tooltip.id);

      // Set tooltip position.
      cleanup = FloatingUIDOM.autoUpdate(element, tooltip, () => {
        const arrow = tooltip.querySelector('.health-tooltip__arrow');
        const middleware = [
          FloatingUIDOM.offset(settings.arrow ? 10 : 0),
          FloatingUIDOM.inline(),
          FloatingUIDOM.shift({
            boundary: settings.boundary,
          }),
        ];
        if (settings.autoPosition) {
          middleware.push(FloatingUIDOM.autoPlacement({
            allowedPlacements: ['bottom', 'top'],
          }));
        }
        if (settings.arrow) {
          middleware.push(FloatingUIDOM.arrow({
            element: document.querySelector('.health-tooltip__arrow'),
            offset: 10,
          }));
        }

        FloatingUIDOM.computePosition(element, tooltip, {
          strategy: 'fixed',
          middleware: middleware,
        }).then(({ x, y, middlewareData, placement }) => {
          tooltip.style.left = `${x}px`;
          tooltip.style.top = `${y}px`;
          if (settings.arrow && arrow) {
            const arrowOffsetX = middlewareData.arrow?.x || 0;
            Object.assign(arrow.style, {
              left: `${arrowOffsetX}px`,
            });
            if (placement === 'bottom') {
              if (arrow.classList.contains('health-tooltip__arrow--top')) {
                arrow.classList.remove('health-tooltip__arrow--top');
              }
              arrow.classList.add('health-tooltip__arrow--bottom');
            }
            else if (placement === 'top') {
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
        tooltip.addEventListener('mouseenter', () => {
          clearTimeout(hideTimeout);
          isTooltipOrElementActive = true;
        });

        tooltip.addEventListener('mouseleave', () => {
          isTooltipOrElementActive = false;
          hideTimeout = setTimeout(() => {
            hideTooltip(element, tooltip);
          }, 600);
        });
      }

      // Tooltip is closable using the escape key.
      tooltip.addEventListener('keydown', (event) => {
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
    const hideTooltip = (element, tooltip) => {
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
    health.tooltip = (selector, settings = {}) => {
      if (
        typeof selector !== 'string' &&
        selector instanceof HTMLElement === false &&
        selector instanceof NodeList === false
      ) {
        throw new Error('Invalid selector or element provided. Must be a string, HTMLElement, or NodeList.');
      }
      if (typeof FloatingUIDOM === 'object') {
        let elements = [];

        if (typeof selector === 'string') {
          elements = [...document.querySelectorAll(selector)];
        }
        else if (selector instanceof HTMLElement) {
          elements.push(selector);
        }
        else if (selector instanceof NodeList) {
          elements = [...selector];
        }
        if (elements.length === 0) {
          // Exit early if there are no elements to process.
          return;
        }

        settings = getTooltipSettings(settings);
        isTooltipOrElementActive = false;

        elements.forEach((element, index) => {
          cleanup = () => { };

          // Process tooltip content.
          const content = settings.html ?? element.getAttribute('title') ?? '';
          if (element.getAttribute('title')) {
            // Title attribute must be removed to prevent interference with
            // tooltip popup in the case of <abbr> elements which have native
            // browser support for tooltips.
            element.removeAttribute('title');
          }

          element.setAttribute('data-health-tooltip', content);
          element.setAttribute('data-health-tooltip-close-method', settings.closeButton ? 'button' : 'default');
          element.setAttribute('data-health-tooltip-id', `${index}`);
          element.setAttribute('aria-expanded', 'false');
          element.setAttribute('aria-controls', `health-tooltip-${index}`);

          // Add triggers to display and hide tooltip to target element.
          settings.triggerOn.split(' ').forEach((event) => {
            element.addEventListener(event, () => {
              clearTimeout(hideTimeout);
              isTooltipOrElementActive = true;
              showTooltip(element, tooltip, settings);
            });
          });
          if (!settings.closeButton) {
            settings.triggerOff.split(' ').forEach((event) => {
              element.addEventListener(event, () => {
                isTooltipOrElementActive = false;
                hideTimeout = setTimeout(() => {
                  hideTooltip(element, tooltip);
                }, 600);
              });
            });
          }

          // Add keyboard support to show tooltip.
          element.addEventListener('keydown', (event) => {
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