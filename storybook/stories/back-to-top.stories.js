import Handlebars from 'handlebars';
import backToTop from '../../style-guide/components/01-components/back-to-top/back-to-top.config.json';
import templateSource from '../../style-guide/components/01-components/back-to-top/back-to-top.hbs?raw';

const renderBackToTop = Handlebars.compile(templateSource);

export default {
  title: 'Components/Back to top',
  render: (args) => `<div class="au-body au-grid">${renderBackToTop(args)}</div>`,
  argTypes: {
    backToTop: { control: 'object' },
  },
};

export const Visible = {
  args: backToTop.context,
};

export const Hidden = {
  args: {
    ...backToTop.context,
    backToTop: {
      ...backToTop.context.backToTop,
      isVisible: false,
    },
  },
};
