import test from "./utilities/VisualRegressionTest";

const viewport = {
  width: 1920,
  height: 570,
};

const components = [
  {
    description: "Page Regions - Footer",
    path: "/components/preview/footer",
    file: "page-regions--footer.webp",
    viewport,
  },
  {
    description: "Page Regions - Header - Default",
    path: "/components/preview/header--default",
    file: "page-regions--header--default.webp",
    viewport,
  },
  {
    description: "Page Regions - Header - Simple",
    path: "/components/preview/header--simple",
    file: "page-regions--header--simple.webp",
    viewport,
  },

  {
    description: "Page Regions - Header - Brand name lockup",
    path: "/components/preview/header--brand-name-lockup",
    file: "page-regions--header--brand-name-lockup.webp",
    viewport,
  },
  {
    description: "Page Regions - Header - Brand name with subline",
    path: "/components/preview/header--brand-name-with-subline",
    file: "page-regions--header--brand-name-with-subline.webp",
    viewport,
  },
  {
    description: "Page Regions - Header - Dual logo lockup",
    path: "/components/preview/header--dual-logo-lockup",
    file: "page-regions--header--dual-logo-lockup.webp",
    viewport,
  },
  {
    description: "Page Regions - Hero - Default",
    path: "/components/preview/hero--default",
    file: "page-regions--hero--default.webp",
    viewport,
  },
  {
    description: "Page Regions - Hero - Hero Inset Box",
    path: "/components/preview/hero--hero-inset-box",
    file: "page-regions--hero--hero-inset-box.webp",
    viewport,
  },
  {
    description: "Page Regions - Hero - Hero Inset Box Overlapping",
    path: "/components/preview/hero--hero-inset-box-(overlapping)",
    file: "page-regions--hero--hero-inset-box-(overlapping).webp",
    viewport,
  },
  {
    description: "Page Regions - Hero - Hero Gradient",
    path: "/components/preview/hero--hero-gradient",
    file: "page-regions--hero--hero-gradient.webp",
    viewport,
  },
  {
    description: "Page Regions - Hero - Hero Gradient Vertical",
    path: "/components/preview/hero--hero-gradient-(vertical)",
    file: "page-regions--hero--hero-gradient-(vertical).webp",
    viewport,
  },
  {
    description: "Page Regions - Sub Header - Dark",
    path: "/components/preview/sub-header--dark",
    file: "page-regions--sub-header--dark.webp",
    viewport,
  },
  {
    description: "Page Regions - Sub Header - Light",
    path: "/components/preview/sub-header--light",
    file: "page-regions--sub-header--light.webp",
    viewport,
  },
  {
    description: "Page Regions - Sub Header - Campaign",
    path: "/components/preview/sub-header--campaign",
    file: "page-regions--sub-header--campaign.webp",
    viewport,
  },
];

test(components);
