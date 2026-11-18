import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import subNavSource from "../../../style-guide/components/01-components/page-regions/_sub-nav/sub-nav.hbs?raw";

const renderSubNav = compileTemplate(subNavSource);

export default {
  title: "Navigation/Sub navigation",
  decorators: [withPagePreview],
  render: (args) => renderSubNav(args),
};

export const Default = { args: {} };
