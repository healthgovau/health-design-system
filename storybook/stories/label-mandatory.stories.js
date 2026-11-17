import { compileTemplate } from "../handlebars";
import withPagePreview from "../decorators";
import labelMandatorySource from "../../style-guide/components/01-components/form-controls/label-mandatory/label-mandatory.hbs?raw";

const renderLabelMandatory = compileTemplate(labelMandatorySource);

export default {
  title: "Form Controls/Label mandatory",
  decorators: [withPagePreview],
  render: (args) => renderLabelMandatory(args),
};

export const Default = { args: {} };
