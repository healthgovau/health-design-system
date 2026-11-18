import { compileTemplate, getVariantArgs } from "../../handlebars";
import withPagePreview from "../../decorators";
import paragraphConfig from "../../../style-guide/components/01-components/typography/paragraph.config.json";
import paragraphSource from "../../../style-guide/components/01-components/typography/paragraph.hbs?raw";

const renderParagraph = compileTemplate(paragraphSource);

export default {
  title: "Typography/Paragraph",
  decorators: [withPagePreview],
  render: (args) => renderParagraph(args),
};

export const Default = { args: {} };

export const Introduction = {
  args: getVariantArgs(paragraphConfig, "Introduction"),
};

export const IntroductionDark = {
  args: getVariantArgs(paragraphConfig, "Introduction - Dark"),
};

export const Minor = { args: getVariantArgs(paragraphConfig, "Minor") };

export const AlignRight = {
  args: getVariantArgs(paragraphConfig, "Align right"),
};

export const AlignCenter = {
  args: getVariantArgs(paragraphConfig, "Align center"),
};
