import { MINIMAL_VIEWPORTS } from 'storybook/viewport';
import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import filterTemplate from "../../../source/templates/03-Components/filter/filter.hbs?raw";

export default {
  title: "Components/Filter",
  decorators,
  render: (args) => {
    const template = compileTemplate(filterTemplate);
    return template(args);
  },
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false,
    },
  },
  parameters: {
    viewport: {
      options: MINIMAL_VIEWPORTS,
    },
  },
};

export const Default = { args: {} };
