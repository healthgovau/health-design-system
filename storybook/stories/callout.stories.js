import Handlebars from 'handlebars';
import callout from '../../style-guide/components/01-components/callout/callout.config.json';
import templateSource from '../../style-guide/components/01-components/callout/callout.hbs?raw';

const renderCallout = Handlebars.compile(templateSource);

function getVariantArgs(name) {
  const variant = callout.variants.find((item) => item.name === name);

  if (!variant) {
    throw new Error(`Unknown Callout variant: ${name}`);
  }

  return variant.context;
}

export default {
  title: 'Components/Callout',
  render: (args) => `<div class="au-body au-grid">${renderCallout(args)}</div>`,
  argTypes: {
    modifier: { control: 'text' },
  },
};

export const Default = {
  args: {},
};

export const Secondary = {
  args: getVariantArgs('Colour - Secondary'),
};

export const Tertiary = {
  args: getVariantArgs('Colour - Tertiary'),
};

export const Quaternary = {
  args: getVariantArgs('Colour - Quaternary'),
};

export const Success = {
  args: getVariantArgs('Colour - Success'),
};

export const Simple = {
  args: getVariantArgs('Simple'),
};
