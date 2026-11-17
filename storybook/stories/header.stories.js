import { compileTemplate, getVariantArgs, storyPartial } from "../handlebars";
import withPagePreview from "../decorators";
import headerConfig from "../../style-guide/components/01-components/page-regions/header/header.config.json";
import headerSource from "../../style-guide/components/01-components/page-regions/header/header.hbs?raw";
import headerWithSiteTitleSource from "../../style-guide/components/01-components/page-regions/header/01-header--with-site-title.hbs?raw";
import headerSimpleSource from "../../style-guide/components/01-components/page-regions/header/02-header--simple.hbs?raw";
import headerDarkSource from "../../style-guide/components/01-components/page-regions/header/03-header--dark.hbs?raw";
import headerAlignedSource from "../../style-guide/components/01-components/page-regions/header/_02-header--aligned.hbs?raw";
import headerBrandNameLockupSource from "../../style-guide/components/01-components/page-regions/header/header--brand-name-lockup.hbs?raw";
import headerBrandNameWithSublineSource from "../../style-guide/components/01-components/page-regions/header/header--brand-name-with-subline.hbs?raw";
import headerDualLogoLockupSource from "../../style-guide/components/01-components/page-regions/header/header--dual-logo-lockup.hbs?raw";
import SubNavMeta, { Default as SubNavDefault } from "./sub-nav.stories";
import SearchMeta, { Default as SearchDefault } from "./search.stories";
import MainNavMeta, {
  Default as MainNavDefault,
  Dark as MainNavDark,
} from "./main-nav.stories";

const renderHeader = compileTemplate(headerSource, {
  "@sub-nav": storyPartial(SubNavMeta, SubNavDefault),
  "@search": storyPartial(SearchMeta, SearchDefault),
  "@main-nav": storyPartial(MainNavMeta, MainNavDefault),
});
const renderHeaderWithSiteTitle = compileTemplate(headerWithSiteTitleSource, {
  "@sub-nav": storyPartial(SubNavMeta, SubNavDefault),
  "@search": storyPartial(SearchMeta, SearchDefault),
  "@main-nav": storyPartial(MainNavMeta, MainNavDefault),
});
const renderHeaderSimple = compileTemplate(headerSimpleSource);
const renderHeaderDark = compileTemplate(headerDarkSource, {
  "@sub-nav": storyPartial(SubNavMeta, SubNavDefault),
  "@search": storyPartial(SearchMeta, SearchDefault),
  "@main-nav--dark": storyPartial(MainNavMeta, MainNavDark),
});
const renderHeaderAligned = compileTemplate(headerAlignedSource, {
  "@sub-nav": storyPartial(SubNavMeta, SubNavDefault),
  "@search": storyPartial(SearchMeta, SearchDefault),
  "@main-nav": storyPartial(MainNavMeta, MainNavDefault),
});
const renderHeaderBrandNameLockup = compileTemplate(
  headerBrandNameLockupSource,
  {
    "@sub-nav": storyPartial(SubNavMeta, SubNavDefault),
    "@search": storyPartial(SearchMeta, SearchDefault),
    "@main-nav": storyPartial(MainNavMeta, MainNavDefault),
  },
);
const renderHeaderBrandNameWithSubline = compileTemplate(
  headerBrandNameWithSublineSource,
  {
    "@sub-nav": storyPartial(SubNavMeta, SubNavDefault),
    "@search": storyPartial(SearchMeta, SearchDefault),
    "@main-nav": storyPartial(MainNavMeta, MainNavDefault),
  },
);
const renderHeaderDualLogoLockup = compileTemplate(headerDualLogoLockupSource, {
  "@sub-nav": storyPartial(SubNavMeta, SubNavDefault),
  "@search": storyPartial(SearchMeta, SearchDefault),
  "@main-nav": storyPartial(MainNavMeta, MainNavDefault),
});

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
