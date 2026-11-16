import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Typography - Abbreviations",
    path: "/components/preview/abbreviations",
    file: "typography--abbreviations.webp",
    viewport,
  },
  {
    description: "Typography - Headings",
    path: "/components/preview/headings",
    file: "typography--headings.webp",
    viewport,
  },
  {
    description: "Typography - Icons",
    path: "/components/preview/icons",
    file: "typography--icons.webp",
    viewport,
  },
  {
    description: "Typography - Paragraph - Default",
    path: "/components/preview/paragraph--default",
    file: "typography--paragraph--default.webp",
    viewport,
  },
  {
    description: "Typography - Paragraph - Introduction",
    path: "/components/preview/paragraph--introduction",
    file: "typography--paragraph--introduction.webp",
    viewport,
  },
  {
    description: "Typography - Paragraph - Introduction Dark",
    path: "/components/preview/paragraph--introduction---dark",
    file: "typography--paragraph--introduction---dark.webp",
    viewport,
  },
  {
    description: "Typography - Paragraph - Minor",
    path: "/components/preview/paragraph--minor",
    file: "typography--paragraph--minor.webp",
    viewport,
  },
  {
    description: "Typography - Paragraph - Align Right",
    path: "/components/preview/paragraph--align-right",
    file: "typography--paragraph--align-right.webp",
    viewport,
  },
  {
    description: "Typography - Paragraph - Align Center",
    path: "/components/preview/paragraph--align-center",
    file: "typography--paragraph--align-center.webp",
    viewport,
  },
];

test(components);
