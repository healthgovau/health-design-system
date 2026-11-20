import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import tooltipTemplate from "../../../style-guide/components/01-components/tooltip/tooltip.hbs?raw";
import tooltipWithArrowTemplate from "../../../style-guide/components/01-components/tooltip/tooltip--with-arrow.hbs?raw";
import tooltipWithCloseButtonTemplate from "../../../style-guide/components/01-components/tooltip/tooltip--with-close-button.hbs?raw";

export default {
  title: "Components/Tooltip",
  decorators,
  args: {},
};

export const Default = {
  render: (args) => {
    const template = compileTemplate(tooltipTemplate);
    return template(args);
  },
};

export const WithArrow = {
  render: (args) => {
    const template = compileTemplate(tooltipWithArrowTemplate);
    return template(args);
  },
};

export const WithCloseButton = {
  render: (args) => {
    const template = compileTemplate(tooltipWithCloseButtonTemplate);
    return template(args);
  },
};
