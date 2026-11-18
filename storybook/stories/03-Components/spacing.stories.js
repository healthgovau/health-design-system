import { compileTemplate, getVariantArgs } from "../../handlebars";
import withPagePreview from "../../decorators";
import spacingConfig from "../../../style-guide/components/01-components/utilities/spacing/spacing.config.json";
import spacingSource from "../../../style-guide/components/01-components/utilities/spacing/spacing.hbs?raw";

const renderSpacing = compileTemplate(spacingSource);

export default {
  title: "Utilities/Spacing",
  decorators: [withPagePreview],
  render: (args) => renderSpacing(args),
};

export const Default = { args: {} };

export const StandardGap = {
  args: getVariantArgs(spacingConfig, "Standard gap"),
};

export const StandardGapMobileOnly = {
  args: getVariantArgs(spacingConfig, "Standard gap - Mobile only"),
};

export const StandardGapBottom = {
  args: getVariantArgs(spacingConfig, "Standard gap - Bottom"),
};

export const MarginTop = { args: getVariantArgs(spacingConfig, "Margin top") };

export const MarginBottom = {
  args: getVariantArgs(spacingConfig, "Margin bottom"),
};
