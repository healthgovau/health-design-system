import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 800,
  height: 570,
};
const components = [
  {
    description: "Facet",
    path: "/components/preview/facet",
    file: "facet.webp",
    viewport,
  },
];

test(components);
