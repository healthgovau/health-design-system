import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import footerSource from "../../../style-guide/components/01-components/page-regions/footer/footer.hbs?raw";

const renderFooter = compileTemplate(footerSource);

export default {
  title: "Page regions/Footer",
  parameters: { layout: "fullscreen" },
  decorators: [withPagePreview],
  render: (args) => renderFooter(args),
};

export const Default = { args: {} };
