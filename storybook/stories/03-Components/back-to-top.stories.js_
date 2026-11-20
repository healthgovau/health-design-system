import Handlebars from 'handlebars';
import templateSource from '../../../style-guide/components/01-components/back-to-top/back-to-top.hbs?raw';

const renderBackToTop = Handlebars.compile(templateSource);

export default {
  title: 'Components/Back to Top',
  decorators: [
    (Story) => {
      const decorator = document.createElement('div');
      // Add CSS class names.
      decorator.classList.add('au-body', 'au-grid');
      decorator.innerHTML = Story();
      return decorator;
    },
  ],
  render: (args) => `${renderBackToTop(args)}`,
  argTypes: {
    isVisible: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      codePanel: true,
    },
  },
};

export const Visible = {
  args: {
    isVisible: true,
  },
};

export const Hidden = {
  args: {
    isVisible: false,
  },
};
