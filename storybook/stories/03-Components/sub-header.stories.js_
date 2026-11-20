import { compileTemplate, getVariantArgs } from "../../handlebars";
import withPagePreview from "../../decorators";
import subHeaderConfig from "../../../style-guide/components/01-components/page-regions/sub-header/sub-header.config.json";
import subHeaderSource from "../../../style-guide/components/01-components/page-regions/sub-header/sub-header.hbs?raw";
import subHeaderLightSource from "../../../style-guide/components/01-components/page-regions/sub-header/sub-header--light.hbs?raw";
import subHeaderCampaignSource from "../../../style-guide/components/01-components/page-regions/sub-header/sub-header--campaign.hbs?raw";

const renderSubHeader = compileTemplate(subHeaderSource);
const renderSubHeaderLight = compileTemplate(subHeaderLightSource);
const renderSubHeaderCampaign = compileTemplate(subHeaderCampaignSource);

export default {
  title: "Page regions/Sub header",
  parameters: { layout: "fullscreen" },
  decorators: [withPagePreview],
  render: (args) => renderSubHeader(args),
};

export const Dark = { args: subHeaderConfig.context };

export const Light = {
  args: getVariantArgs(subHeaderConfig, "Light"),
  render: (args) => renderSubHeaderLight(args),
};

export const Campaign = {
  args: getVariantArgs(subHeaderConfig, "Campaign"),
  render: (args) => renderSubHeaderCampaign(args),
};

export const CampaignSecondary = {
  args: getVariantArgs(subHeaderConfig, "Campaign secondary"),
  render: (args) => renderSubHeaderCampaign(args),
};

export const CampaignTertiary = {
  args: getVariantArgs(subHeaderConfig, "Campaign tertiary"),
  render: (args) => renderSubHeaderCampaign(args),
};
