import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Tags - Default",
    path: "/components/preview/tags--default",
    file: "tags--default.webp",
    viewport,
  },
  {
    description: "Tags - Linked",
    path: "/components/preview/tags--linked",
    file: "tags--linked.webp",
    viewport,
  }
];

test(components);
