import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import iconsSource from "../../../source/templates/02-Typography/icons/icons.hbs?raw";

const renderIcons = compileTemplate(iconsSource);

export default {
  title: "Typography/Icons",
  decorators,
  render: (args) => renderIcons(args),
};

export const Default = {
  name: "Icons",
  args: {},
};
