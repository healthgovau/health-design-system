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
    // Initialize tooltip component.
    const $tooltip = $('#health-tooltip');
    if ($tooltip.length === 0) {
      return;
    }
    const $tooltipContent = $tooltip.find('.health-tooltip__content');

    health.tooltip = (selector) => {
      if (typeof FloatingUIDOM === 'object') {
        const $selector = $(selector);
        let hideTimeout;
        let isTooltipOrElementActive = false;

        $selector.each((index, element) => {
          const $element = $(element);
          let cleanup = () => {};

          // Process tooltip content.
          const content = $element.attr('title');
          if (content) {
            $element
              .attr('data-health-tooltip', content)
              .removeAttr('title');
          }
          $element.attr('data-health-tooltip-id', `${index}`);
          $element.attr('aria-expanded', 'false');
          $element.attr('aria-controls', `health-tooltip-${$element.attr('data-health-tooltip-id')}`);

          const showTooltip = () => {
            clearTimeout(hideTimeout);
            isTooltipOrElementActive = true;
            $element.after($tooltip);

            // Set tooltip content.
            $tooltipContent.html(content);
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
                      FloatingUIDOM.shift(),
                      FloatingUIDOM.flip(),
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

            // Display tooltip.
            if ($tooltip.hasClass('health-tooltip--active') === false) {
              $tooltip.addClass('health-tooltip--active');
            }
            $element.attr('aria-expanded', 'true');
          };

          const hideTooltip = () => {
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

          $element
            .on('focus mouseenter touchstart', () => {
              clearTimeout(hideTimeout);
              isTooltipOrElementActive = true;
              showTooltip();
            })
            .on('blur mouseleave touchend', () => {
              isTooltipOrElementActive = false;
              hideTimeout = setTimeout(() => {
                hideTooltip();
              }, 600);
            });

          $tooltip
            .on('focus mouseenter touchstart', () => {
              clearTimeout(hideTimeout);
              isTooltipOrElementActive = true;
            })
            .on('blur mouseleave touchend', () => {
              isTooltipOrElementActive = false;
              hideTimeout = setTimeout(() => {
                hideTooltip();
              }, 600);
            });
        });
      }
    };
  });

})(jQuery, window.FloatingUIDOM, document);