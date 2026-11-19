import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: 'Listing - Default',
    path: '/components/preview/listing--default',
    file: 'listing--default.webp',
    viewport,
  },
  {
    description: 'Listing - Compact',
    path: '/components/preview/listing--compact',
    file: 'listing--compact.webp',
    viewport,
  },
];

test(components);
