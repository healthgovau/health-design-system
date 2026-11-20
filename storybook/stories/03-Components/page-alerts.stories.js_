import { compileTemplate, getVariantArgs } from "../../handlebars";
import withPagePreview from "../../decorators";
import pageAlertsConfig from "../../../style-guide/components/01-components/page-alerts/page-alerts.config.json";
import pageAlertsSource from "../../../style-guide/components/01-components/page-alerts/page-alerts.hbs?raw";

const renderPageAlerts = compileTemplate(pageAlertsSource);

export default {
  title: "Components/Page alerts",
  decorators: [withPagePreview],
  render: (args) => renderPageAlerts(args),
};

export const Default = { args: pageAlertsConfig.context };

export const Success = { args: getVariantArgs(pageAlertsConfig, "Success") };

export const Warning = { args: getVariantArgs(pageAlertsConfig, "Warning") };

export const Error = { args: getVariantArgs(pageAlertsConfig, "Error") };
