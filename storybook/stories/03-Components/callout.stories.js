import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import calloutTemplate from "../../../source/templates/03-Components/callout/callout.hbs?raw";
import calloutSimpleTemplate from "../../../source/templates/03-Components/callout/callout--simple.hbs?raw";

export default {
  title: "Components/Callout",
  decorators,
  argTypes: {
    content: { control: "text" },
    modifier: { control: "text" },
  },
  render: (args) => {
    const template = compileTemplate(calloutTemplate);
    return template(args);
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
  render: (args) => {
    const template = compileTemplate(calloutSimpleTemplate);
    return template(args);
  },
};
