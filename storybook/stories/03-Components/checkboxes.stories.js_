/* eslint import/no-unresolved: "off" */

import checkboxes from "../../../style-guide/components/01-components/form-controls/checkboxes/checkboxes.config.json";
import templateSource from "../../../style-guide/components/01-components/form-controls/checkboxes/checkboxes.hbs?raw";
import { compileTemplate, getVariantArgs, pagePreview } from "../../handlebars";

const renderCheckboxes = compileTemplate(templateSource);

export default {
  title: "Form Controls/Checkboxes",
  render: (args) => pagePreview(renderCheckboxes(args)),
  argTypes: {
    error: { control: "boolean" },
    checkboxes: { control: "object" },
  },
};

export const Default = {
  args: checkboxes.context,
};

export const Error = {
  args: getVariantArgs(checkboxes, "Error"),
};
