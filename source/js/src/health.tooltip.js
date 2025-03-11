/*! @health.gov.au/health-design-system v3.0.3 */
/**
 * Health tooltip component.
 *
 * Provides the functionality for the display of tooltips.
 */

var health = health || {};

(($, FloatingUIDOM, document) => {

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
  const defaultSettings = {
    closeButton: false,
    html: null,
    postProcess: () => {},
    triggerOn: 'focus mouseenter touchstart',
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
    const showTooltip = ($element, $tooltip) => {
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
              strategy: 'absolute',
              middleware: [
                FloatingUIDOM.offset(8),
                FloatingUIDOM.flip(),
                FloatingUIDOM.shift({ padding: 5 }),
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

      // Set the close tooltip behaviour when a close button is not being used.
      if (useCloseButton === false) {
        $tooltip.on('focus mouseenter touchstart', () => {
          clearTimeout(hideTimeout);
          isTooltipOrElementActive = true;
        });
        $tooltip.on('blur mouseleave touchend', () => {
          isTooltipOrElementActive = false;
          hideTimeout = setTimeout(() => {
            hideTooltip($element, $tooltip);
          }, 600);
        });
      }

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
            $element
              .removeAttr('title');
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
            showTooltip($element, $tooltip, settings.closeButton);
          });
          if (settings.closeButton === false) {
            $element.on(settings.triggerOff, () => {
              isTooltipOrElementActive = false;
              hideTimeout = setTimeout(() => {
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
