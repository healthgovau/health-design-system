/*! @health.gov.au/health-design-system v3.0.3 */
var health = health || {};

(($, FloatingUIDOM, document) => {
  $(document).ready(() => {
    health.tooltip = (selector) => {
      if (typeof FloatingUIDOM === 'object') {
        const $selector = $(selector);

        // Initialize tooltip component.
        const $tooltip = $('#health-tooltip');
        const $tooltipContent = $tooltip.find('.health-tooltip__content');
        $tooltip.detach();

        $selector.each((index, element) => {
          const $element = $(element);
          let cleanup;

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

          $element
            .on('focus mouseenter touchstart', () => {
              $element.after($tooltip);
              // Set tooltip content.
              $tooltipContent.html(content);
              $tooltip.attr('id', `health-tooltip-${$element.attr('data-health-tooltip-id')}`);
              $element.attr('aria-describedby', `health-tooltip-${$element.attr('data-health-tooltip-id')}`);
              // Set tooltip position.
              cleanup = FloatingUIDOM.autoUpdate($element[0], $tooltip[0], () => {
                FloatingUIDOM.computePosition(
                  $element[0],
                  $tooltip[0],
                  {
                    strategy: 'absolute',
                    middleware: [
                      FloatingUIDOM.shift(),
                      FloatingUIDOM.flip(),
                    ],
                  },
                ).then(({ x, y }) => {
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
            })
            .on('blur mouseleave touchend', () => {
              $tooltip.removeClass('health-tooltip--active');
              $element.removeAttr('aria-describedby');
              $element.attr('aria-expanded', 'false');
              $tooltip.removeAttr('id');
              $tooltip.detach();
              $tooltipContent.html('');
              cleanup();
            });
        });
      }

      return null;
    };
  });
})(jQuery, window.FloatingUIDOM, document);