import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Link - Default",
    path: "/components/preview/link--default",
    file: 'link--default.webp',
    viewport,
  },
  {
    description: 'Link - Primary',
    path: '/components/preview/link--primary',
    file: 'link--primary.webp',
    viewport,
  },
  {
    description: 'Link - Secondary',
    path: '/components/preview/link--secondary',
    file: 'link--secondary.webp',
    viewport,
  },
  {
    description: 'Link - Tertiary',
    path: '/components/preview/link--tertiary',
    file: 'link--tertiary.webp',
    viewport,
  },
  {
    description: 'Link - Call to Action',
    path: '/components/preview/link--call-to-action',
    file: 'link--call-to-action.webp',
    viewport,
  },
  {
    description: 'Link - Call to Action List',
    path: '/components/preview/link--call-to-action-list',
    file: 'link--call-to-action-list.webp',
    viewport,
  },
];

test(components);
