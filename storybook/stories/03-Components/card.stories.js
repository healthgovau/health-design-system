import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import cardTemplate from "../../../source/templates/03-Components/card/card.hbs?raw";
import cardNoImageTemplate from "../../../source/templates/03-Components/card/card--no-image.hbs?raw";
import noClickTemplate from "../../../source/templates/03-Components/card/card--no-click.hbs?raw";
import contactTemplate from "../../../source/templates/03-Components/card/card--contact.hbs?raw";
import multipleLinksTemplate from "../../../source/templates/03-Components/card/card--multiple-links.hbs?raw";

// const templates = {
//   "card.hbs": cardSource,
//   "card--no-image.hbs": noImageSource,
//   "card--no-click.hbs": noClickSource,
//   "card--contact.hbs": contactSource,
//   "card--multiple-links.hbs": multipleLinksSource,
// };

// function createStory(variant) {
//   const templateSource = templates[variant?.view || "card.hbs"];

//   if (!templateSource) {
//     throw new Error(`Unknown Card template: ${variant.view}`);
//   }

//   const renderCard = compileTemplate(templateSource);

//   return {
//     args: {
//       ...card.context,
//       ...variant?.context,
//     },
//     render: (args) => renderCard(args),
//   };
// }

// function getVariant(name) {
//   const variant = card.variants.find((item) => item.name === name);

//   if (!variant) {
//     throw new Error(`Unknown Card variant: ${name}`);
//   }

//   return createStory(variant);
// }

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
  args: {
    card: {
      ...Default.args.card,
      class: "",
      title: "Card Title",
      content: "Card content goes here.",
      date: "2024-06-05",
      tag: "Tag",
    },
  },
  render: (args) => {
    const template = compileTemplate(cardNoImageTemplate);
    return template(args);
  },
};

export const CardHorizontal = {
  args: {
    card: {
      ...Default.args.card,
      title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      date: "20 July 2019",
      tag: "News",
      content: "This card presents image and body side-by-side.",
      class: "health-card--horizontal",
    },
  },
};

// export const WithoutImage = getVariant("Without image");
// export const NotClickable = getVariant("Not clickable");
// export const Borderless = getVariant("Borderless");
// export const Highlight = getVariant("Highlight");
// export const Centred = getVariant("Centred");
// export const Horizontal = getVariant("Horizontal");
// export const Contact = getVariant("Contact");
// export const ContactHorizontal = getVariant("Contact (horizontal)");
// export const FullColourPrimary = getVariant("Full colour (primary)");
// export const FullColourSecondary = getVariant("Full colour (secondary)");
// export const FullColourTertiary = getVariant("Full colour (tertiary)");
// export const FullColourQuaternary = getVariant("Full colour (quaternary)");
// export const MultipleLinks = getVariant("Multple links");
