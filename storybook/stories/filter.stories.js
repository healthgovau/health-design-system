import { compileTemplate } from "../handlebars";
import withPagePreview from "../decorators";
import filterSource from "../../style-guide/components/01-components/filter/filter.hbs?raw";

const renderFilter = compileTemplate(filterSource);

export default {
  title: "Components/Filter",
  decorators: [withPagePreview],
  render: (args) => renderFilter(args),
};

export const Default = { args: {} };
