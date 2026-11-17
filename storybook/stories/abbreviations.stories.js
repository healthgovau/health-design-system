import { compileTemplate } from "../handlebars";
import withPagePreview from "../decorators";
import abbreviationsSource from "../../style-guide/components/01-components/typography/abbreviations.hbs?raw";

const renderAbbreviations = compileTemplate(abbreviationsSource);

export default {
  title: "Typography/Abbreviations",
  decorators: [withPagePreview],
  render: (args) => renderAbbreviations(args),
};

export const Default = { args: {} };
