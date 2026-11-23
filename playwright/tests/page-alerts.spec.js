import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Page Alerts - Default",
    path: "/components/preview/page-alerts--default",
    file: "page-alerts--default.webp",
    viewport,
  },
  {
    description: "Page Alerts - Success",
    path: "/components/preview/page-alerts--success",
    file: "page-alerts--success.webp",
    viewport,
  },
  {
    description: "Page Alerts - Warning",
    path: "/components/preview/page-alerts--warning",
    file: "page-alerts--warning.webp",
    viewport,
  },
  {
    description: "Page Alerts - Error",
    path: "/components/preview/page-alerts--error",
    file: "page-alerts--error.webp",
    viewport,
  },
];

test(components);
