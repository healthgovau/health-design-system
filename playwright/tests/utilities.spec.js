import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Utilities - Spacing - Default",
    path: "/components/preview/spacing--default",
    file: "utilities--spacing--default.webp",
    viewport,
  },
  {
    description: "Utilities - Spacing - Standard Gap",
    path: "/components/preview/spacing--standard-gap",
    file: "utilities--spacing--standard-gap.webp",
    viewport,
  },
  {
    description: "Utilities - Spacing - Large Gap Mobile Only",
    path: "/components/preview/spacing--standard-gap---mobile-only",
    file: "utilities--spacing--standard-gap---mobile-only.webp",
    viewport,
  },
  {
    description: "Utilities - Spacing - Standard Gap Bottom",
    path: "/components/preview/spacing--standard-gap---bottom",
    file: "utilities--spacing--standard-gap---bottom.webp",
    viewport,
  },
];

test(components);
