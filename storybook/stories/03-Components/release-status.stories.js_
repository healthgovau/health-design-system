import { compileTemplate, getVariantArgs } from "../../handlebars";
import withPagePreview from "../../decorators";
import releaseStatusConfig from "../../../style-guide/components/01-components/release-status/release-status.config.json";
import releaseStatusSource from "../../../style-guide/components/01-components/release-status/release-status.hbs?raw";

const renderReleaseStatus = compileTemplate(releaseStatusSource);

export default {
  title: "Components/Release status",
  decorators: [withPagePreview],
  render: (args) => renderReleaseStatus(args),
};

export const Alpha = { args: releaseStatusConfig.context };

export const Beta = { args: getVariantArgs(releaseStatusConfig, "Beta") };

export const Launch = { args: getVariantArgs(releaseStatusConfig, "Launch") };
