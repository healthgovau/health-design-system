import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Table",
    path: "/components/preview/table",
    file: "table.webp",
    viewport,
  },
];

test(components);
