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
 * @example restrict tooltip to appear only with the boundary of the main
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

(($, FloatingUIDOM, document) => {


  const defaultSettings = {
    boundary: 'clippingAncestors',
    closeButton: false,
    html: null,
    postProcess: () => {},
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

  $(document).ready(() => {
    const $tooltip = $('#health-tooltip');
    if ($tooltip.length === 0) {
      return;
    }
    const $tooltipContent = $tooltip.find('.health-tooltip__content');
    const closeButtonTemplate = `<button class="health-tooltip__close" type="button" aria-label="Close tooltip" tabindex="0"><span class="health-tooltip__icon health-tooltip__icon--close">&plus;</span></button>`;
    let cleanup;
    let $closeButton;
    let hideTimeout;
    let isTooltipOrElementActive;

    /**
     * Show tooltip.
     */
    const showTooltip = ($element, $tooltip, settings) => {
      const useCloseButton = $element.attr('data-health-tooltip-close-method') === 'button' ? true : false;
      clearTimeout(hideTimeout);
      isTooltipOrElementActive = true;
      $element.after($tooltip);
      if ($closeButton) {
        // Remove previous instance of close button if there is one. We always
        // want to start fresh.
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
        $closeButton.on('click touchstart', () => {
          isTooltipOrElementActive = false;
          hideTooltip($element, $tooltip);
          $element.focus();
        });
        $tooltipContent.after($closeButton);
      }

      $tooltip.attr('id', `health-tooltip-${$element.attr('data-health-tooltip-id')}`);
      $element.attr('aria-describedby', `health-tooltip-${$element.attr('data-health-tooltip-id')}`);

      // Set tooltip position.
      cleanup = FloatingUIDOM.autoUpdate($element[0], $tooltip[0], () => {
        FloatingUIDOM
          .computePosition(
            $element[0],
            $tooltip[0],
            {
              placement: 'bottom',
              strategy: 'fixed',
              middleware: [
                FloatingUIDOM.inline(),
                FloatingUIDOM.shift({
                  // Fit tooltip within the main content area.
                  boundary: settings.boundary,
                }),
              ],
            },
          )
          .then(({ x, y }) => {
            Object.assign($tooltip.css({
              left: `${x}px`,
              top: `${y}px`,
            }));
          });
      });

      // Set the close tooltip behaviour for when a close button is not being
      // used.
      if (useCloseButton === false) {
        $tooltip.on('focus mouseenter touchstart', () => {
          clearTimeout(hideTimeout);
          isTooltipOrElementActive = true;
        });
        $tooltip.on('mouseleave touchend', () => {
          isTooltipOrElementActive = false;
          hideTimeout = setTimeout(() => {
            hideTooltip($element, $tooltip);
          }, 600);
        });
      }

      // Tooltip is closable using the escape key.
      $tooltip.on('keydown', (event) => {
        if (event.key === 'Escape') {
          isTooltipOrElementActive = false;
          hideTooltip($element, $tooltip);
          $element.focus();
        }
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
    const hideTooltip = ($element, $tooltip) => {
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

        // Reset close tooltip behaviour by removing any existing triggers.
        $tooltip.off('focus mouseenter touchstart');
        $tooltip.off('blur mouseleave touchend');
        // $tooltip.off('keydown');

        // Cleanup tooltip positioning.
        cleanup();
      }
    };

    // Initialize tooltip component.
    health.tooltip = (selector, settings = {}) => {
      if (typeof FloatingUIDOM === 'object') {
        const $selector = $(selector);
        settings = getTooltipSettings(settings);
        isTooltipOrElementActive = false;

        $selector.each((index, element) => {

          const $element = $(element);
          cleanup = () => {};

          // Process tooltip content.
          const content = settings['html'] ?? $element.attr('title') ?? '';
          if ($element.attr('title')) {
            // Title attribute must be removed to prevent interference with
            // tooltip popup in the case of <abbr> elements which have native
            // browser support for tooltips.
            $element.removeAttr('title');
          }
          $element.attr('data-health-tooltip', content)
          $element.attr('data-health-tooltip-close-method', settings.closeButton ? 'button' : 'default');
          $element.attr('data-health-tooltip-id', `${index}`);
          $element.attr('aria-expanded', 'false');
          $element.attr('aria-controls', `health-tooltip-${$element.attr('data-health-tooltip-id')}`);

          // Add triggers to display and hide tooltip to target element.
          $element.on(settings.triggerOn, () => {
            clearTimeout(hideTimeout);
            isTooltipOrElementActive = true;
            showTooltip($element, $tooltip, settings);
          });
          if (settings.closeButton === false) {
            $element.on(settings.triggerOff, () => {
              isTooltipOrElementActive = false;
              hideTimeout = setTimeout(() => {
                hideTooltip($element, $tooltip);
              }, 600);
            });
          }
          // Add keyboard support to show tooltip.
          $element.on('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              event.stopPropagation();
              isTooltipOrElementActive = true;
              showTooltip($element, $tooltip, settings);
              $tooltip.focus();
            }
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
