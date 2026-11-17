import { compileTemplate, getVariantArgs } from "../handlebars";
import withPagePreview from "../decorators";
import linkConfig from "../../style-guide/components/01-components/link/link.config.json";
import linkSource from "../../style-guide/components/01-components/link/link.hbs?raw";
import linkCallToActionListSource from "../../style-guide/components/01-components/link/link--call-to-action-list.hbs?raw";

const renderLink = compileTemplate(linkSource);
const renderLinkCallToActionList = compileTemplate(linkCallToActionListSource);

export default {
  title: "Components/Link",
  decorators: [withPagePreview],
  render: (args) => renderLink(args),
};

export const Default = { args: {} };

export const Primary = { args: getVariantArgs(linkConfig, "Primary") };

export const Secondary = { args: getVariantArgs(linkConfig, "Secondary") };

export const Tertiary = { args: getVariantArgs(linkConfig, "Tertiary") };

export const CallToAction = {
  args: getVariantArgs(linkConfig, "Call to action"),
};

export const CallToActionList = {
  args: {},
  render: (args) => renderLinkCallToActionList(args),
};
