import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Search Result",
    path: "/components/preview/search-result",
    file: "search-result.webp",
    viewport,
  },
];

test(components);
