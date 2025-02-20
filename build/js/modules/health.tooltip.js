/*! @health.gov.au/health-design-system v3.0.3 */
var health = health || {};

(($, FloatingUIDOM, document) => {
  $(document).ready(() => {
    health.tooltip = (selector, options) => {
      if (typeof FloatingUIDOM === 'object') {
        const template = `
          <div class="health-tooltip">
            <div class="health-tooltip__content"><h2>Hi there!</h2></div>
          </div>
        `;
        const $selector = $(selector);
        const $tooltip = $(template);
        const $tooltipContent = $tooltip.find('.health-tooltip__content');

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

          $element
            .on('focus mouseenter touchstart', (event) => {
              // Set tooltip content.
              $tooltipContent.html(content);
              // Display tooltip.
              $element.append($tooltip);
              // Set tooltip position.
              cleanup = FloatingUIDOM.autoUpdate($element[0], $tooltip[0], () => {
                FloatingUIDOM.computePosition($element[0], $tooltip[0]).then(({ x, y }) => {
                  Object.assign($tooltip.css({
                    left: `${x}px`,
                    top: `${y}px`,
                  }));
                });
              });
            })
            .on('blur mouseleave touchend', () => {
              $tooltip.remove();
              $tooltipContent.html('');
              cleanup();
            });
        });
      }

      return null;
    };
  });
})(jQuery, window.FloatingUIDOM, document);