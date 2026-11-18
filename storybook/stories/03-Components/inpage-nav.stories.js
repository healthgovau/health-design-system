import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import inpageNavSource from "../../../style-guide/components/01-components/navigation/inpage-nav/inpage-nav.hbs?raw";
import inpageNavDynamicSource from "../../../style-guide/components/01-components/navigation/inpage-nav/inpage-nav--dynamic.hbs?raw";

const renderInpageNav = compileTemplate(inpageNavSource);
const renderInpageNavDynamic = compileTemplate(inpageNavDynamicSource);

export default {
  title: "Navigation/Inpage navigation",
  decorators: [withPagePreview],
  render: (args) => renderInpageNav(args),
};

export const Default = { args: {} };

export const Dynamic = {
  args: {},
  render: (args) => renderInpageNavDynamic(args),
};
