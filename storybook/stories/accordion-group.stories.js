import Handlebars from 'handlebars';
import accordionGroup from '../../style-guide/components/01-components/accordions/accordion-group/accordion-group.config.json';
import templateSource from '../../style-guide/components/01-components/accordions/accordion-group/accordion-group.hbs?raw';

const renderAccordionGroup = Handlebars.compile(templateSource);

function getVariantArgs(name) {
  const variant = accordionGroup.variants.find((item) => item.name === name);

  if (!variant) {
    throw new Error(`Unknown Accordion group variant: ${name}`);
  }

  return {
    ...accordionGroup.context,
    ...variant.context,
  };
}

export default {
  title: 'Components/Accordion group',
  render: (args) => `<div class="au-body au-grid">${renderAccordionGroup(args)}</div>`,
  argTypes: {
    modifier: { control: 'text' },
    accordion: { control: 'object' },
  },
};

export const Default = {
  args: accordionGroup.context,
};

export const Flush = {
  args: getVariantArgs('Flush'),
};
