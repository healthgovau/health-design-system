import { compileTemplate, getVariantArgs } from "../../handlebars";
import withPagePreview from "../../decorators";
import fieldConfig from "../../../style-guide/components/01-components/metadata/field/field.config.json";
import fieldSource from "../../../style-guide/components/01-components/metadata/field/field.hbs?raw";
import fieldIconsSource from "../../../style-guide/components/01-components/metadata/field/field--icons.hbs?raw";

const renderField = compileTemplate(fieldSource);
const renderFieldIcons = compileTemplate(fieldIconsSource);

export default {
  title: "Metadata/Field",
  decorators: [withPagePreview],
  render: (args) => renderField(args),
};

export const Stacked = { args: fieldConfig.context };

export const StackedLabelWithIcon = {
  args: getVariantArgs(fieldConfig, "Stacked - label with icon"),
};

export const Inline = { args: getVariantArgs(fieldConfig, "Inline") };

export const InlineLabelWithIcon = {
  args: getVariantArgs(fieldConfig, "Inline (label with icon)"),
};

export const IconOnly = { args: getVariantArgs(fieldConfig, "Icon only") };

export const ListOfIcons = {
  args: getVariantArgs(fieldConfig, "List of icons"),
  render: (args) => renderFieldIcons(args),
};
