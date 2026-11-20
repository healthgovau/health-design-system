import { compileTemplate, getVariantArgs } from "../../handlebars";
import withPagePreview from "../../decorators";
import stepIndicatorConfig from "../../../style-guide/components/01-components/step-indicator/step-indicator.config.json";
import stepIndicatorSource from "../../../style-guide/components/01-components/step-indicator/step-indicator.hbs?raw";
import stepIndicatorProgressSource from "../../../style-guide/components/01-components/step-indicator/step-indicator--progress.hbs?raw";

const renderStepIndicator = compileTemplate(stepIndicatorSource);
const renderStepIndicatorProgress = compileTemplate(
  stepIndicatorProgressSource,
);

export default {
  title: "Components/Step indicator",
  decorators: [withPagePreview],
  render: (args) => renderStepIndicator(args),
};

export const Default = { args: stepIndicatorConfig.context };

export const Numbered = {
  args: getVariantArgs(stepIndicatorConfig, "Numbered"),
};

export const Progress = {
  args: getVariantArgs(stepIndicatorConfig, "Progress"),
  render: (args) => renderStepIndicatorProgress(args),
};
