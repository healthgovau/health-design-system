import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import separatorSource from "../../../style-guide/components/01-components/separator/separator.hbs?raw";

const renderSeparator = compileTemplate(separatorSource);

export default {
  title: "Components/Separator",
  decorators: [withPagePreview],
  render: (args) => renderSeparator(args),
};

export const Default = { args: {} };
