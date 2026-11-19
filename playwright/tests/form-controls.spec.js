import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 600,
  height: 570,
};

const components = [
  {
    description: "Form Controls - Button - Default",
    path: "/components/preview/button--default",
    file: "button--default.webp",
    viewport,
  },
  {
    description: "Form Controls - Button - Secondary",
    path: "/components/preview/button--secondary",
    file: "button--secondary.webp",
    viewport,
  },
  {
    description: "Form Controls - Button - Tertiary",
    path: "/components/preview/button--tertiary",
    file: "button--tertiary.webp",
    viewport,
  },
  {
    description: "Form Controls - Button - Sticky",
    path: "/components/preview/button--sticky",
    file: "button--sticky.webp",
    viewport,
  },
  {
    description: "Form Controls - Checkboxes - Default",
    path: "/components/preview/checkboxes--default",
    file: "checkboxes--default.webp",
    viewport,
  },
  {
    description: "Form Controls - Checkboxes - Error",
    path: "/components/preview/checkboxes--error",
    file: "checkboxes--error.webp",
    viewport,
  },
  {
    description: "Form Controls - Label Mandatory",
    path: "/components/preview/label-mandatory",
    file: "label-mandatory.webp",
    viewport,
  },
  {
    description: "Form Controls - Radio Buttons - Default",
    path: "/components/preview/radios--default",
    file: "radios--default.webp",
    viewport,
  },
  {
    description: "Form Controls - Radio Buttons - Error",
    path: "/components/preview/radios--error",
    file: "radios--error.webp",
    viewport,
  },
  {
    description: "Form Controls - Select - Default",
    path: "/components/preview/select--default",
    file: "select--default.webp",
    viewport,
  },
  {
    description: "Form Controls - Select - Error",
    path: "/components/preview/select--error",
    file: "select--error.webp",
    viewport,
  },
  {
    description: "Form Controls - Text - Default",
    path: "/components/preview/text--default",
    file: "text--default.webp",
    viewport,
  },
  {
    description: "Form Controls - Text - Error",
    path: "/components/preview/text--error",
    file: "text--error.webp",
    viewport,
  },
  {
    description: "Form Controls - Text - Counter",
    path: "/components/preview/text--counter",
    file: "text--counter.webp",
    viewport,
  },
  {
    description: "Form Controls - Text Area - Default",
    path: "/components/preview/text-area--default",
    file: "text-area--default.webp",
    viewport,
  },
  {
    description: "Form Controls - Text Area - Error",
    path: "/components/preview/text-area--error",
    file: "text-area--error.webp",
    viewport,
  },
  {
    description: "Form Controls - Text Area - Counter",
    path: "/components/preview/text-area--counter",
    file: "text-area--counter.webp",
    viewport,
  },
];

test(components);
