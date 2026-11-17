import { compileTemplate } from "../handlebars";
import withPagePreview from "../decorators";
import footnotesSource from "../../style-guide/components/01-components/supplementary-content/footnotes/footnotes.hbs?raw";

const renderFootnotes = compileTemplate(footnotesSource);

export default {
  title: "Supplementary content/Footnotes",
  decorators: [withPagePreview],
  render: (args) => renderFootnotes(args),
};

export const Default = { args: {} };
