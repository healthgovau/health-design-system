import Handlebars from "handlebars";
import callout from "../../../style-guide/components/01-components/callout/callout.config.json";
import templateSource from "../../../style-guide/components/01-components/callout/callout.hbs?raw";
import simpleTemplateSource from "../../../style-guide/components/01-components/callout/callout--simple.hbs?raw";

const renderCallout = Handlebars.compile(templateSource);
const renderSimpleCallout = Handlebars.compile(simpleTemplateSource);

function getVariantArgs(name) {
  const variant = callout.variants.find((item) => item.name === name);

  if (!variant) {
    throw new Error(`Unknown Callout variant: ${name}`);
  }

  return variant.context;
}

export default {
  title: "Components/Callout",
  decorators: [
    (Story) => {
      const decorator = document.createElement('div');
      decorator.classList.add('au-body', 'au-grid');
      decorator.innerHTML = Story();
      return decorator;
    },
  ],
  render: (args) => `${renderCallout(args)}`,
  argTypes: {
    content: { control: "text" },
    modifier: { control: "text" },
  },
};

export const Default = {
  args: {
    content: "More than 20 almost-complete t rex skeletons have been found. The most perfect, nicknamed Sue, was unearthed in South Dakota, USA, 20 years ago.",
    modifier: "",
  },
};

export const Secondary = {
  args: {
    ...Default.args,
    modifier: "au-callout--secondary",
  },
};

export const Tertiary = {
  args: {
    ...Default.args,
    modifier: "au-callout--tertiary",
  },
};

export const Quaternary = {
  args: {
    ...Default.args,
    modifier: "au-callout--quaternary",
  },
};

export const Success = {
  args: {
    ...Default.args,
    modifier: "au-callout--success",
  },
};

export const Simple = {
  args: {
    ...Default.args,
    modifier: "au-callout--simple",
  },
  render: (args) => `${renderSimpleCallout(args)}`,
};
