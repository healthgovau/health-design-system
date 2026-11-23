import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const viewports = [
  {
    label: 'component',
    width: 800,
    height: 800,
  },
];

const components = [
  {
    description: "Video - Default",
    path: "/components/preview/video--default",
    file: "video--default.webp",
    viewport,
  },
  {
    description: "Video - Preview",
    path: "/components/preview/video--preview",
    file: "video--preview.webp",
    viewport,
  },
];

test(components);
