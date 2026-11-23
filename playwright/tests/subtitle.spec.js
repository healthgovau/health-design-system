import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Subtitle",
    path: "/components/preview/subtitle",
    file: "subtitle.webp",
    viewport,
  },
];

test(components);
