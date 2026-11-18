import { compileTemplate, getVariantArgs } from "../../handlebars";
import withPagePreview from "../../decorators";
import fieldGroupsConfig from "../../../style-guide/components/01-components/metadata/field-groups/field-groups.config.json";
import fieldGroupsSource from "../../../style-guide/components/01-components/metadata/field-groups/field-groups.hbs?raw";

const renderFieldGroups = compileTemplate(fieldGroupsSource);

export default {
  title: "Metadata/Field groups",
  decorators: [withPagePreview],
  render: (args) => renderFieldGroups(args),
};

export const Vertical = { args: fieldGroupsConfig.context };

export const Horizontal = {
  args: getVariantArgs(fieldGroupsConfig, "Horizontal group"),
};

export const HorizontalFixed = {
  args: getVariantArgs(fieldGroupsConfig, "Horizontal (fixed) group"),
};
