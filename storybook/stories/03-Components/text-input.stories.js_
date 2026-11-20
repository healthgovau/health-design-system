/* eslint import/no-unresolved: "off" */

import textInput from "../../../style-guide/components/01-components/form-controls/text/text.config.json";
import templateSource from "../../../style-guide/components/01-components/form-controls/text/text.hbs?raw";
import counterTemplateSource from "../../../style-guide/components/01-components/form-controls/text/text--counter.hbs?raw";
import { compileTemplate, getVariantArgs, pagePreview } from "../../handlebars";

const renderTextInput = compileTemplate(templateSource);
const renderTextInputCounter = compileTemplate(counterTemplateSource);

export default {
  title: "Form Controls/Text input",
  render: (args) => pagePreview(renderTextInput(args)),
  argTypes: {
    error: { control: "boolean" },
    textInput: { control: "object" },
  },
};

export const Default = {
  args: textInput.context,
};

export const Error = {
  args: getVariantArgs(textInput, "Error"),
};

export const Counter = {
  args: textInput.context,
  render: (args) => pagePreview(renderTextInputCounter(args)),
};
