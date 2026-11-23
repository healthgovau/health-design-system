import { compileTemplate } from '../../handlebars';
import decorators from '../../decorators';
import backToTopTemplate from '../../../style-guide/components/01-components/back-to-top/back-to-top.hbs?raw';

export default {
  title: 'Components/Back to Top',
  decorators,
  render: (args) => {
    const template = compileTemplate(backToTopTemplate);
    return template(args);
  },
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
