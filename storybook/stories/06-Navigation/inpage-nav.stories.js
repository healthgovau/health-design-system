import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import inpageNavTemplate from "../../../style-guide/components/01-components/navigation/inpage-nav/inpage-nav.hbs?raw";
import inpageNavDynamicTemplate from "../../../style-guide/components/01-components/navigation/inpage-nav/inpage-nav--dynamic.hbs?raw";

export default {
  title: "Navigation/Inpage navigation",
  decorators,
};

export const Default = {
  args: {},
  render: (args) => {
    const template = compileTemplate(inpageNavTemplate);
    return template(args);
  },
};

export const Dynamic = {
  args: {},
  render: (args) => {
    const template = compileTemplate(inpageNavDynamicTemplate);
    return template(args);
  },
};
