/* eslint import/no-unresolved: "off" */

import button from "../../style-guide/components/01-components/form-controls/button/button.config.json";
import buttonSource from "../../style-guide/components/01-components/form-controls/button/button.hbs?raw";
import stickyButtonSource from "../../style-guide/components/01-components/form-controls/button/button--sticky.hbs?raw";
import { compileTemplate, getVariantArgs, pagePreview } from "../handlebars";

const renderButton = compileTemplate(buttonSource);
const renderStickyButton = compileTemplate(stickyButtonSource);

export default {
  title: "Form Controls/Button",
  render: (args) => pagePreview(renderButton(args)),
  argTypes: {
    modifier: { control: "text" },
    button: { control: "object" },
  },
};

export const Primary = {
  args: button.context,
};

export const Secondary = {
  args: getVariantArgs(button, "Secondary"),
};

export const Tertiary = {
  args: getVariantArgs(button, "Tertiary"),
};

export const Sticky = {
  render: () => pagePreview(renderStickyButton({})),
};
