import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Toolbar",
    path: "/components/preview/toolbar",
    file: "toolbar.webp",
    viewport,
  },
];

test(components);
