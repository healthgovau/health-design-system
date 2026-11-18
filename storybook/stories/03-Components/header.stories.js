import { compileTemplate, getVariantArgs } from "../../handlebars";
import withPagePreview from "../../decorators";
import headerConfig from "../../../style-guide/components/01-components/page-regions/header/header.config.json";
import headerSource from "../../../style-guide/components/01-components/page-regions/header/header.hbs?raw";
import headerWithSiteTitleSource from "../../../style-guide/components/01-components/page-regions/header/01-header--with-site-title.hbs?raw";
import headerSimpleSource from "../../../style-guide/components/01-components/page-regions/header/02-header--simple.hbs?raw";
import headerDarkSource from "../../../style-guide/components/01-components/page-regions/header/03-header--dark.hbs?raw";
import headerAlignedSource from "../../../style-guide/components/01-components/page-regions/header/_02-header--aligned.hbs?raw";
import headerBrandNameLockupSource from "../../../style-guide/components/01-components/page-regions/header/header--brand-name-lockup.hbs?raw";
import headerBrandNameWithSublineSource from "../../../style-guide/components/01-components/page-regions/header/header--brand-name-with-subline.hbs?raw";
import headerDualLogoLockupSource from "../../../style-guide/components/01-components/page-regions/header/header--dual-logo-lockup.hbs?raw";

const renderHeader = compileTemplate(headerSource);
const renderHeaderWithSiteTitle = compileTemplate(headerWithSiteTitleSource);
const renderHeaderSimple = compileTemplate(headerSimpleSource);
const renderHeaderDark = compileTemplate(headerDarkSource);
const renderHeaderAligned = compileTemplate(headerAlignedSource);
const renderHeaderBrandNameLockup = compileTemplate(
  headerBrandNameLockupSource,
);
const renderHeaderBrandNameWithSubline = compileTemplate(
  headerBrandNameWithSublineSource,
);
const renderHeaderDualLogoLockup = compileTemplate(headerDualLogoLockupSource);

export default {
  title: "Page regions/Header",
  parameters: { layout: "fullscreen" },
  decorators: [withPagePreview],
  render: (args) => renderHeader(args),
};

export const Default = { args: headerConfig.context };

export const WithSiteTitle = {
  args: getVariantArgs(headerConfig, "With Site Title"),
  render: (args) => renderHeaderWithSiteTitle(args),
};

export const Simple = {
  args: headerConfig.context,
  render: (args) => renderHeaderSimple(args),
};

export const Dark = {
  args: getVariantArgs(headerConfig, "Dark"),
  render: (args) => renderHeaderDark(args),
};

export const Aligned = {
  args: headerConfig.context,
  render: (args) => renderHeaderAligned(args),
};

export const BrandNameLockup = {
  args: headerConfig.context,
  render: (args) => renderHeaderBrandNameLockup(args),
};

export const BrandNameWithSubline = {
  args: headerConfig.context,
  render: (args) => renderHeaderBrandNameWithSubline(args),
};

export const DualLogoLockup = {
  args: headerConfig.context,
  render: (args) => renderHeaderDualLogoLockup(args),
};
