import test from './utilities/VisualRegressionTest';

const components = [
  {
    description: "Accordion - Default",
    path: "/components/preview/accordion--default",
    file: "accordion--default.webp",
  },
  {
    description: "Accordion - Block",
    path: "/components/preview/accordion--block",
    file: "accordion--block.webp",
  },
  {
    description: "Accordion - Shadow",
    path: "/components/preview/accordion--shadow",
    file: "accordion--shadow.webp",
  },
  {
    description: "Accordion - Compact",
    path: "/components/preview/accordion--compact",
    file: "accordion--compact.webp",
  },
];

test(components);
