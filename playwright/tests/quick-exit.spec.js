import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Quick Exit",
    path: "/components/preview/quick-exit",
    file: "quick-exit.webp",
    viewport,
  },
];

test(components);
