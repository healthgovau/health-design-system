import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Search",
    path: "/components/preview/search",
    file: "search.webp",
    viewport,
  },
];

test(components);
