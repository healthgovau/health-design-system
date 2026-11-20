import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import headingsSource from "../../../source/templates/02-Typography/headings/headings.hbs?raw";

const renderHeadings = compileTemplate(headingsSource);

export default {
  title: "Typography/Headings",
  decorators,
  render: (args) => renderHeadings(args),
};

export const Default = {
  name: "Headings",
  args: {},
};
