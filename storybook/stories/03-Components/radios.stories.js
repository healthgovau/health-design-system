/* eslint import/no-unresolved: "off" */

import radios from "../../../style-guide/components/01-components/form-controls/radios/radios.config.json";
import templateSource from "../../../style-guide/components/01-components/form-controls/radios/radios.hbs?raw";
import { compileTemplate, getVariantArgs, pagePreview } from "../../handlebars";

const renderRadios = compileTemplate(templateSource);

export default {
  title: "Form Controls/Radios",
  render: (args) => pagePreview(renderRadios(args)),
  argTypes: {
    error: { control: "boolean" },
    radios: { control: "object" },
  },
};

export const Default = {
  args: radios.context,
};

export const Error = {
  args: getVariantArgs(radios, "Error"),
};
