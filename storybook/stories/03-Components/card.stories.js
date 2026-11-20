import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import cardTemplate from "../../../source/templates/03-Components/card/card.hbs?raw";
import cardNoImageTemplate from "../../../source/templates/03-Components/card/card--no-image.hbs?raw";
import cardNoClickTemplate from "../../../source/templates/03-Components/card/card--no-click.hbs?raw";
import cardContactTemplate from "../../../source/templates/03-Components/card/card--contact.hbs?raw";
import cardMultipleLinksTemplate from "../../../source/templates/03-Components/card/card--multiple-links.hbs?raw";

export default {
  title: "Components/Card",
  decorators,
  argTypes: {
    card: {
      class: { control: "text" },
      title: { control: "text" },
      content: { control: "text" },
      date: { control: "text" },
      tag: { control: "text" },
    },
  },
  render: (args) => {
    const template = compileTemplate(cardTemplate);
    return template(args);
  },
};

export const Default = {
  args: {
    card: {
      class: "",
      title: "Card Title",
      content: "Card content goes here.",
      date: "2024-06-05",
      tag: "Tag",
    },
  },
};

export const CardWithoutImage = {
  name: "Without image",
  args: {
    card: {
      ...Default.args.card,
    },
  },
  render: (args) => {
    const template = compileTemplate(cardNoImageTemplate);
    return template(args);
  },
};

export const NotClickable = {
  name: "Not clickable",
  args: {
    card: {
      ...Default.args.card,
    },
  },
  render: (args) => {
    const template = compileTemplate(cardNoClickTemplate);
    return template(args);
  },
};

export const Borderless = {
  name: "Borderless",
  args: {
    card: {
      ...Default.args.card,
      class: "health-card--borderless",
      content: "This card removes the border and internal padding.",
    },
  },
};

export const Highlight = {
  name: "Highlight",
  args: {
    card: {
      ...Default.args.card,
      content: "This card includes a highlight keyline.",
      class: "health-card--highlight",
    },
  },
};

export const Centred = {
  name: "Centred",
  args: {
    card: {
      ...Default.args.card,
      content: "This card centres all content.",
      class: "health-card--centered",
    },
  },
  render: (args) => {
    const template = compileTemplate(cardNoClickTemplate);
    return template(args);
  },
};

export const Horizontal = {
  name: "Horizontal",
  args: {
    card: {
      ...Default.args.card,
      title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      date: "20 July 2019",
      tag: "News",
      content: "This card presents image and body side-by-side.",
      class:
        "health-card--clickable health-card--shadow health-card--horizontal",
    },
  },
};

export const Contact = {
  name: "Contact",
  args: {
    card: {
      ...Default.args.card,
      content: "This card presents a contact.",
      class: "health-card--contact",
    },
  },
  render: (args) => {
    const template = compileTemplate(cardContactTemplate);
    return template(args);
  },
};

export const ContactHorizontal = {
  name: "Contact (horizontal)",
  args: {
    card: {
      ...Default.args.card,
      content: "This card presents a contact in horizontal layout.",
      class: "health-card--contact-horizontal",
    },
  },
  render: (args) => {
    const template = compileTemplate(cardContactTemplate);
    return template(args);
  },
};

export const FullColourPrimary = {
  name: "Full colour (primary)",
  args: {
    card: {
      ...Default.args.card,
      class: "health-card--colour-primary",
      content: "This card uses the primary colour as a background.",
    },
  },
  render: (args) => {
    const template = compileTemplate(cardNoImageTemplate);
    return template(args);
  }
};

export const FullColourSecondary = {
  name: "Full colour (secondary)",
  args: {
    card: {
      ...Default.args.card,
      class: "health-card--colour-secondary",
      content: "This card uses the secondary colour as a background.",
    },
  },
  render: (args) => {
    const template = compileTemplate(cardNoImageTemplate);
    return template(args);
  },
};

export const FullColourTertiary = {
  name: "Full colour (tertiary)",
  args: {
    card: {
      ...Default.args.card,
      class: "health-card--colour-tertiary",
      content: "This card uses the tertiary colour as a background.",
    },
  },
  render: (args) => {
    const template = compileTemplate(cardNoImageTemplate);
    return template(args);
  },
};

export const FullColourQuaternary = {
  name: "Full colour (quaternary)",
  args: {
    card: {
      ...Default.args.card,
      class: "health-card--colour-quaternary",
      content: "This card uses the quaternary colour as a background.",
    },
  },
  render: (args) => {
    const template = compileTemplate(cardNoImageTemplate);
    return template(args);
  },
};

export const MultipleLinks = {
  name: "Multiple links",
  args: {
    card: {
      ...Default.args.card,
      content: "This card contains multiple links.",
    },
  },
  render: (args) => {
    const template = compileTemplate(cardMultipleLinksTemplate);
    return template(args);
  },
};
