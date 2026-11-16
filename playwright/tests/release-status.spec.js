import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Release Status - Default",
    path: "/components/preview/release-status--default",
    file: "release-status--default.webp",
    viewport,
  },
  {
    description: "Release Status - Beta",
    path: "/components/preview/release-status--beta",
    file: "release-status--beta.webp",
    viewport,
  },
  {
    description: "Release Status - Launch",
    path: "/components/preview/release-status--launch",
    file: "release-status--launch.webp",
    viewport,
  },
];

test(components);
