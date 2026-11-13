import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 375,
  height: 667,
};

const components = [
  {
    description: "Filter",
    path: "/components/preview/filter",
    file: "filter.webp",
    viewport,
  }
];

test(components);
