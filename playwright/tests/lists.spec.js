import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Lists - Default",
    path: "/components/preview/lists--default",
    file: "lists--default.webp",
    viewport,
  },
  {
    description: "Lists - Large",
    path: "/components/preview/lists--large",
    file: "lists--large.webp",
    viewport,
  },
  {
    description: "Lists - Large Plain",
    path: "/components/preview/lists--large-plain",
    file: "lists--large-plain.webp",
    viewport,
  },
  {
    description: "Lists - Checklist",
    path: "/components/preview/lists--checklist",
    file: "lists--checklist.webp",
    viewport,
  },
  {
    description: "Lists - Definition List",
    path: "/components/preview/lists--definition-list",
    file: "lists--definition-list.webp",
    viewport,
  },
];

test(components);
