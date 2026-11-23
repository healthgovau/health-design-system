import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: "Navigation - Book Navigation",
    path: "/components/preview/book-nav",
    file: "navigation--book-nav.webp",
    viewport,
  },
  {
    description: 'Navigation - Breadcrumb',
    path: '/components/preview/breadcrumb',
    file: "navigation--breadcrumb.webp",
    viewport,
  },
  {
    description: 'Navigation - Inpage Nav - Default',
    path: '/components/preview/inpage-nav--default',
    file: "navigation--inpage-nav--default.webp",
    viewport,
  },
  {
    description: 'Navigation - Inpage Nav - Dynamic',
    path: '/components/preview/inpage-nav--dynamic',
    file: "navigation--inpage-nav--dynamic.webp",
    viewport,
  },
  {
    description: 'Navigation - Main Nav - Default',
    path: '/components/preview/main-nav--default',
    file: "navigation--main-nav--default.webp",
    viewport,
  },
  {
    description: 'Navigation - Main Nav - Drop Down',
    path: '/components/preview/main-nav--drop-down',
    file: "navigation--main-nav--drop-down.webp",
    viewport,
  },
  {
    description: 'Navigation - Pager',
    path: '/components/preview/pager',
    file: "navigation--pager.webp",
    viewport,
  },
  {
    description: 'Navigation - Side Nav - Default',
    path: '/components/preview/side-nav--default',
    file: "navigation--side-nav--default.webp",
    viewport,
  },
  {
    description: 'Navigation - Side Nav - Accordion',
    path: '/components/preview/side-nav--accordion',
    file: "navigation--side-nav--accordion.webp",
    viewport,
  },
  {
    description: 'Navigation - Tabs - Default',
    path: '/components/preview/tabs--default',
    file: "navigation--tabs--default.webp",
    viewport,
  },
  {
    description: 'Navigation - Tabs - Mobile Scroll',
    path: '/components/preview/tabs--mobile-scroll',
    file: "navigation--tabs--mobile-scroll.webp",
    viewport,
  },
];

test(components);
