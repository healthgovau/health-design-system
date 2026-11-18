import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import tooltipSource from "../../../style-guide/components/01-components/tooltip/tooltip.hbs?raw";
import tooltipWithArrowSource from "../../../style-guide/components/01-components/tooltip/tooltip--with-arrow.hbs?raw";
import tooltipWithCloseButtonSource from "../../../style-guide/components/01-components/tooltip/tooltip--with-close-button.hbs?raw";

const renderTooltip = compileTemplate(tooltipSource);
const renderTooltipWithArrow = compileTemplate(tooltipWithArrowSource);
const renderTooltipWithCloseButton = compileTemplate(
  tooltipWithCloseButtonSource,
);

export default {
  title: "Components/Tooltip",
  decorators: [withPagePreview],
  render: (args) => renderTooltip(args),
};

export const Default = { args: {} };

export const WithArrow = {
  args: {},
  render: (args) => renderTooltipWithArrow(args),
};

export const WithCloseButton = {
  args: {},
  render: (args) => renderTooltipWithCloseButton(args),
};
