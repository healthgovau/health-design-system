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
  render: (args) => `<div class="au-body au-grid">${renderAccordion(args)}</div>`,
  argTypes: {
    modifier: { control: 'text' },
    accordion: { control: 'object' },
  },
};

export const Default = {
  args: accordion.context,
};

export const Block = {
  args: getVariantArgs('Block'),
};

export const Shadow = {
  args: getVariantArgs('Shadow'),
};

export const Compact = {
  args: getVariantArgs('Compact'),
};
