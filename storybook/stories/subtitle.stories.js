import { compileTemplate } from "../handlebars";
import withPagePreview from "../decorators";
import subtitleSource from "../../style-guide/components/01-components/subtitle/subtitle.hbs?raw";

const renderSubtitle = compileTemplate(subtitleSource);

export default {
  title: "Components/Subtitle",
  decorators: [withPagePreview],
  render: (args) => renderSubtitle(args),
};

export const Default = { args: {} };
