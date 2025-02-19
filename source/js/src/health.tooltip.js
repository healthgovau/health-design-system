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

        // Process tooltip content.
        const content = $selector.attr('title');
        if (content) {
          $selector
            .attr('data-health-tooltip', content)
            .removeAttr('title');
        }

        $selector
          .on('focus mouseenter touchstart', (event) => {
            // Set tooltip content.
            $tooltipContent.html(content);
            // Display tooltip.
            $selector.append($tooltip);
            // Set tooltip position.
            FloatingUIDOM.computePosition($selector[0], $tooltip[0]).then(({ x, y }) => {
              Object.assign($tooltip.css({
                left: `${x}px`,
                top: `${y}px`,
              }));
            });
          })
          .on('blur mouseleave touchend', () => {
            $tooltip.remove();
            $tooltipContent.html('');
          });
      }

      return null;
    };
  });
})(jQuery, window.FloatingUIDOM, document);