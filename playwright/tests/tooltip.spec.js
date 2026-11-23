import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Tooltip",
    path: "/components/preview/tooltip",
    file: "tooltip.webp",
    viewport,
  },
];

test(components);
