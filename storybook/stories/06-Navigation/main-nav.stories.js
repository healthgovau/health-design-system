import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import mainNavTemplate from "../../../source/templates/06-Navigation/main-nav/main-nav.hbs?raw";
import mainNavDropDownTemplate from "../../../source/templates/06-Navigation/main-nav/main-nav--drop-down.hbs?raw";

export default {
  title: "Navigation/Main navigation",
  parameters: { layout: "fullscreen" },
  decorators,
  render: (args) => {
    const template = compileTemplate(mainNavTemplate);
    return template(args);
  },
};

export const Default = {
  args: {
    title: "Search this website",
  },
};

export const DropDown = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const template = compileTemplate(mainNavDropDownTemplate);
    return template(args);
  },
};

export const Dark = {
  args: {
    ...Default.args,
    modifier: "au-main-nav--dark",
  },
};
