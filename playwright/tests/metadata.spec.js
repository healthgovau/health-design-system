import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 400,
  height: 570,
};

const components = [
  {
    description: 'Metadata - Field - Stacked',
    path: '/components/preview/field--stacked',
    file: "metadata--field--stacked.webp",
    viewport,
  },
  {
    description: 'Metadata - Field - Stacked Label with Icon',
    path: '/components/preview/field--stacked---label-with-icon',
    file: "metadata--field--stacked-label-with-icon.webp",
    viewport,
  },
  {
    description: 'Metadata - Field - Inline',
    path: '/components/preview/field--inline',
    file: "metadata--field--inline.webp",
    viewport,
  },
  {
    description: 'Metadata - Field - Inline Label with Icon',
    path: '/components/preview/field--inline-(label-with-icon)',
    file: "metadata--field--inline-label-with-icon.webp",
    viewport,
  },
  {
    description: 'Metadata - Field - Icon only',
    path: '/components/preview/field--icon-only',
    file: "metadata--field--icon-only.webp",
    viewport,
  },
  {
    description: 'Metadata - Field - List of Icons',
    path: '/components/preview/field--list-of-icons',
    file: "metadata--field--list-of-icons.webp",
    viewport,
  },
  {
    description: 'Metadata - Field Groups - Vertical Group',
    path: '/components/preview/field-groups--vertical-group',
    file: "metadata--field-groups--vertical-group.webp",
    viewport,
  },
  {
    description: 'Metadata - Field Groups - Horizontal Group',
    path: '/components/preview/field-groups--horizontal-group',
    file: "metadata--field-groups--horizontal-group.webp",
    viewport,
  },
  {
    description: 'Metadata - Field Groups - Horizontal Fixed Group',
    path: '/components/preview/field-groups--horizontal-(fixed)-group',
    file: "metadata--field-groups--horizontal-(fixed)-group.webp",
    viewport,
  },
];

test(components);
