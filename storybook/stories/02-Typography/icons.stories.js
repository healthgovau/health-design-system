import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import iconsSource from "../../../style-guide/components/01-components/typography/icons/icons.hbs?raw";

const renderIcons = compileTemplate(iconsSource);

export default {
  title: "Typography/Icons",
  decorators: [withPagePreview],
  render: (args) => renderIcons(args),
};

export const Default = {
  name: "Icons",
  args: {}
};
