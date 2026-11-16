import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Step Indicator - Default",
    path: "/components/preview/step-indicator--default",
    file: "step-indicator--default.webp",
    viewport,
  },
  {
    description: "Step Indicator - Numbered",
    path: "/components/preview/step-indicator--numbered",
    file: "step-indicator--numbered.webp",
    viewport,
  },
  {
    description: "Step Indicator - Progress",
    path: "/components/preview/step-indicator--progress",
    file: "step-indicator--progress.webp",
    viewport,
  },
];

test(components);
