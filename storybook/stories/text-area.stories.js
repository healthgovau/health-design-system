/* eslint import/no-unresolved: "off" */

import textArea from "../../style-guide/components/01-components/form-controls/text-area/text-area.config.json";
import templateSource from "../../style-guide/components/01-components/form-controls/text-area/text-area.hbs?raw";
import counterTemplateSource from "../../style-guide/components/01-components/form-controls/text-area/text-area--counter.hbs?raw";
import { compileTemplate, getVariantArgs, pagePreview } from "../handlebars";

const renderTextArea = compileTemplate(templateSource);
const renderTextAreaCounter = compileTemplate(counterTemplateSource);

export default {
  title: "Form Controls/Text area",
  render: (args) => pagePreview(renderTextArea(args)),
  argTypes: {
    error: { control: "boolean" },
    textArea: { control: "object" },
  },
};

export const Default = {
  args: textArea.context,
};

export const Error = {
  args: getVariantArgs(textArea, "Error"),
};

export const Counter = {
  args: textArea.context,
  render: (args) => pagePreview(renderTextAreaCounter(args)),
};
