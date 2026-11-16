import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Supplementary Content - Footnotes",
    path: "/components/preview/footnotes",
    file: "footnotes.webp",
    viewport,
  },
  {
    description: "Supplementary Content - Metadata",
    path: "/components/preview/metadata",
    file: "metadata.webp",
    viewport,
  }
];

test(components);
