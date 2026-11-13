import test from './utilities/VisualRegressionTest';

const viewport = {
  width: 440,
  height: 570,
};

const components = [
  {
    description: "Callout - Default",
    path: "/components/preview/callout--default",
    file: "callout--default.webp",
    viewport,
  },
  {
    description: "Callout - Colour Secondary",
    path: "/components/preview/callout--colour---secondary",
    file: "callout--colour---secondary.webp",
    viewport,
  },
  {
    description: "Callout - Colour Tertiary",
    path: "/components/preview/callout--colour---tertiary",
    file: "callout--colour---tertiary.webp",
    viewport,
  },
  {
    description: "Callout - Colour Quaternary",
    path: "/components/preview/callout--colour---quaternary",
    file: "callout--colour---quaternary.webp",
    viewport,
  },
  {
    description: "Callout - Colour Success",
    path: "/components/preview/callout--colour---success",
    file: "callout--colour---success.webp",
    viewport,
  },
  {
    description: "Callout - Simple",
    path: "/components/preview/callout--simple",
    file: "callout--simple.webp",
    viewport,
  },
];

test(components);
