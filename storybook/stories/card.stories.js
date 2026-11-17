import Handlebars from "handlebars";
import { pagePreview } from "../handlebars";
import card from "../../style-guide/components/01-components/card/card.config.json";
import cardSource from "../../style-guide/components/01-components/card/card.hbs?raw";
import noImageSource from "../../style-guide/components/01-components/card/card--no-image.hbs?raw";
import noClickSource from "../../style-guide/components/01-components/card/card--no-click.hbs?raw";
import contactSource from "../../style-guide/components/01-components/card/card--contact.hbs?raw";
import multipleLinksSource from "../../style-guide/components/01-components/card/card--multiple-links.hbs?raw";
import callToActionLinksSource from "../../style-guide/components/01-components/link/link--call-to-action-list.hbs?raw";

const handlebars = Handlebars.create();
const renderCallToActionLinks = handlebars.compile(callToActionLinksSource);

handlebars.registerHelper("render", (componentName) => {
  if (componentName !== "@link--call-to-action-list") {
    throw new Error(`Unknown rendered component: ${componentName}`);
  }

  return new Handlebars.SafeString(renderCallToActionLinks({}));
});

const templates = {
  "card.hbs": cardSource,
  "card--no-image.hbs": noImageSource,
  "card--no-click.hbs": noClickSource,
  "card--contact.hbs": contactSource,
  "card--multiple-links.hbs": multipleLinksSource,
};

function createStory(variant) {
  const templateSource = templates[variant?.view || "card.hbs"];

  if (!templateSource) {
    throw new Error(`Unknown Card template: ${variant.view}`);
  }

  const renderCard = handlebars.compile(templateSource);

  return {
    args: {
      ...card.context,
      ...variant?.context,
    },
    render: (args) => renderCard(args),
  };
}

function getVariant(name) {
  const variant = card.variants.find((item) => item.name === name);

  if (!variant) {
    throw new Error(`Unknown Card variant: ${name}`);
  }

  return createStory(variant);
}

export default {
  title: "Components/Card",
  decorators: [(Story) => pagePreview(Story())],
  argTypes: {
    class: { control: "text" },
    title: { control: "text" },
    content: { control: "text" },
    date: { control: "text" },
    tag: { control: "text" },
  },
  tags: ["autodocs"],
};

export const Default = createStory();
export const WithoutImage = getVariant("Without image");
export const NotClickable = getVariant("Not clickable");
export const Borderless = getVariant("Borderless");
export const Highlight = getVariant("Highlight");
export const Centred = getVariant("Centred");
export const Horizontal = getVariant("Horizontal");
export const Contact = getVariant("Contact");
export const ContactHorizontal = getVariant("Contact (horizontal)");
export const FullColourPrimary = getVariant("Full colour (primary)");
export const FullColourSecondary = getVariant("Full colour (secondary)");
export const FullColourTertiary = getVariant("Full colour (tertiary)");
export const FullColourQuaternary = getVariant("Full colour (quaternary)");
export const MultipleLinks = getVariant("Multple links");
