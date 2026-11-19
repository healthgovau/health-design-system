import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 900,
  height: 570,
};

const components = [
  {
    description: "Image - Default",
    path: "/components/preview/image--default",
    file: "image--default.webp",
    viewport,
  },
  {
    description: 'Image - Border',
    path: '/components/preview/image--border',
    file: "image--border.webp",
    viewport,
  },
  {
    description: 'Image - Link',
    path: '/components/preview/image--link',
    file: "image--link.webp",
    viewport,
  },
  {
    description: 'Image - Border Link',
    path: '/components/preview/image--border-link',
    file: "image--border-link.webp",
    viewport,
  },
];

test(components);
