import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 700,
  height: 570,
};

const components = [
  {
    description: "Figure",
    path: "/components/preview/figure",
    file: "figure.webp",
    viewport,
  },
];

test(components);
