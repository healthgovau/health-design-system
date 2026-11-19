import test from "./utilities/VisualRegressionTest";

const components = [
  {
    description: "Band - Default",
    path: "/components/preview/band--default",
    file: 'band--default.webp',
  },
  {
    description: 'Band - Hotline',
    path: '/components/preview/band--hotline',
    file: 'band--hotline.webp',
  },
  {
    description: 'Band - Cards Image',
    path: '/components/preview/band--cards-image',
    file: 'band--cards-image.webp',
  },
  {
    description: 'Band - Cards Call to Action',
    path: '/components/preview/band--cards-call-to-action',
    file: 'band--cards-call-to-action.webp',
  },
  {
    description: 'Band - Cards Resources',
    path: '/components/preview/band--cards-resources',
    file: 'band--cards-resources.webp',
  },
  {
    description: 'Band - Featured',
    path: '/components/preview/band--featured',
    file: 'band--featured.webp',
  },
  {
    description: 'Band - Image Text Horizontal',
    path: '/components/preview/band--image-text-horizontal',
    file: 'band--image-text-horizontal.webp',
  },
  {
    description: 'Band - Video Listing',
    path: '/components/preview/band--video-listing',
    file: 'band--video-listing.webp',
  },
  {
    description: 'Band - Cards Borderless',
    path: '/components/preview/band--cards-borderless',
    file: 'band--cards-borderless.webp',
  },
  {
    description: 'Band - Statistics',
    path: '/components/preview/band--statistics',
    file: 'band--statistics.webp',
  },
];

test(components);
