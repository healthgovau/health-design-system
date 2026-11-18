import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import toolbarSource from "../../../style-guide/components/01-components/toolbar/toolbar.hbs?raw";

const renderToolbar = compileTemplate(toolbarSource);

export default {
  title: "Components/Toolbar",
  decorators: [withPagePreview],
  render: (args) => renderToolbar(args),
};

export const Default = { args: {} };
