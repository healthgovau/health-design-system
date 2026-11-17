/* eslint import/no-unresolved: "off" */

import select from "../../style-guide/components/01-components/form-controls/select/select.config.json";
import templateSource from "../../style-guide/components/01-components/form-controls/select/select.hbs?raw";
import { compileTemplate, getVariantArgs, pagePreview } from "../handlebars";

const renderSelect = compileTemplate(templateSource);

export default {
  title: "Form Controls/Select",
  render: (args) => pagePreview(renderSelect(args)),
  argTypes: {
    error: { control: "boolean" },
    select: { control: "object" },
  },
};

export const Default = {
  args: select.context,
};

export const Error = {
  args: getVariantArgs(select, "Error"),
};
