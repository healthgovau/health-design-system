import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import breadcrumbTemplate from "../../../source/templates/06-Navigation/breadcrumb/breadcrumb.hbs?raw";

export default {
  title: "Navigation/Breadcrumb",
  decorators: decorators,
  render: (args) => {
    const template = compileTemplate(breadcrumbTemplate);
    return template(args);
  },
};

export const Default = { args: {} };
