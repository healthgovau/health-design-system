import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Separator",
    path: "/components/preview/separator",
    file: "separator.webp",
    viewport,
  },
];

test(components);
