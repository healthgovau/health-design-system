import Handlebars from 'handlebars';
import accordion from '../../style-guide/components/01-components/accordions/accordion/accordion.config.json';
import templateSource from '../../style-guide/components/01-components/accordions/accordion/accordion.hbs?raw';

const renderAccordion = Handlebars.compile(templateSource);

function getVariantArgs(name) {
  const variant = accordion.variants.find((item) => item.name === name);

  if (!variant) {
    throw new Error(`Unknown Accordion variant: ${name}`);
  }

  return {
    ...accordion.context,
    ...variant.context,
  };
}

export default {
  title: 'Components/Accordion',
  decorators: [
    (Story) => {
      const decorator = document.createElement('div');
      // Add CSS class names.
      decorator.classList.add('au-body', 'au-grid');
      decorator.innerHTML = Story();
      return decorator;
    },
  ],
  render: (args) => `${renderAccordion(args)}`,
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the accordion. HTML is allowed.',
      type: 'string',
    },
    content: {
      control: 'text',
      description: 'The content of the accordion body. HTML is allowed.',
      type: 'string',
    },
    modifier: {
      type: 'string',
    },
  },
};

export const Default = {
  args: {
    title: "Accordion title",
    content: "Contents of the accordion body. Duis lacinia sed mi ornare <a href='#'>vulputate</a>. Nam dictum eros at orci finibus, quis porttitor ante viverra. Proin et posuere urna, ut placerat nulla. Nam iaculis commodo nulla, at eleifend urna rutrum at. Mauris id aliquet nibh, et porta quam. Cras iaculis lorem eget faucibus consectetur. Ut nec scelerisque tortor. Pellentesque consectetur massa sapien, non mattis justo hendrerit a. Nunc pulvinar nibh ut lectus lacinia pharetra.",
    modifier: "",
  },
};

export const Block = {
  args: {
    ...Default.args,
    modifier: "au-accordion--block",
  },
};

export const Shadow = {
  args: {
    ...Default.args,
    modifier: "au-accordion--shadow",
  },
};

export const Compact = {
  args: {
    ...Default.args,
    modifier: "au-accordion--compact",
  },
};
