import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "References - Inline Reference - Default",
    path: "/components/preview/inline-reference--default",
    file: "references--inline-reference--default.webp",
    viewport,
  },
  {
    description: "References - Inline Reference - Contact",
    path: "/components/preview/inline-reference--contact",
    file: "references--inline-reference--contact.webp",
    viewport,
  },
  {
    description: "References - Inline Reference - Video",
    path: "/components/preview/inline-reference--video",
    file: "references--inline-reference--video.webp",
    viewport,
  },
  {
    description: "References - References",
    path: "/components/preview/references",
    file: "references--references.webp",
    viewport,
  },
];

test(components);
