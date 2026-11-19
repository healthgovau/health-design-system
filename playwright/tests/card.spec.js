import test from './utilities/VisualRegressionTest';

const viewport = {
  width: 440,
  height: 570,
};

const components = [
  {
    description: "Card - Default",
    path: "/components/preview/card--default",
    file: "card-default.webp",
    viewport,
  },
  {
    description: "Card - Without Image",
    path: "/components/preview/card--without-image",
    file: "card-without-image.webp",
    viewport,
  },
  {
    description: "Card - Not Clickable",
    path: "/components/preview/card--not-clickable",
    file: "card-not-clickable.webp",
    viewport,
  },
  {
    description: "Card - Borderless",
    path: "/components/preview/card--borderless",
    file: "card-borderless.webp",
    viewport,
  },
  {
    description: "Card - Highlight",
    path: "/components/preview/card--highlight",
    file: "card-highlight.webp",
    viewport,
  },
  {
    description: "Card - Centred",
    path: "/components/preview/card--centred",
    file: "card-centred.webp",
    viewport,
  },
  {
    description: "Card - Horizontal",
    path: "/components/preview/card--horizontal",
    file: "card-horizontal.webp",
    viewport,
  },
  {
    description: "Card - Contact",
    path: "/components/preview/card--contact",
    file: "card-contact.webp",
    viewport,
  },
  {
    description: "Card - Contact Horizontal",
    path: "/components/preview/card--contact-(horizontal)",
    file: "card-contact-horizontal.webp",
    viewport,
  },
  {
    description: "Card - Full Colour Primary",
    path: "/components/preview/card--full-colour-(primary)",
    file: "card-full-colour-primary.webp",
    viewport,
  },
  {
    description: "Card - Full Colour Secondary",
    path: "/components/preview/card--full-colour-(secondary)",
    file: "card-full-colour-secondary.webp",
    viewport,
  },
  {
    description: "Card - Full Colour Tertiary",
    path: "/components/preview/card--full-colour-(tertiary)",
    file: "card-full-colour-tertiary.webp",
    viewport,
  },
  {
    description: "Card - Full Colour Quaternary",
    path: "/components/preview/card--full-colour-(quaternary)",
    file: "card-full-colour-quaternary.webp",
    viewport,
  },
  {
    description: "Card - Multiple Links",
    path: "/components/preview/card--multple-links",
    file: "card-multiple-links.webp",
    viewport,
  },
];

test(components);
