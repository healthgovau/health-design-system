import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 540,
  height: 570,
};

const components = [
  {
    description: "File",
    path: "/components/preview/file",
    file: "file.webp",
    viewport,
  },
];

test(components);
