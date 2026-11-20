import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import tableSource from "../../../style-guide/components/01-components/table/table.hbs?raw";

const renderTable = compileTemplate(tableSource);

export default {
  title: "Components/Table",
  decorators: [withPagePreview],
  render: (args) => renderTable(args),
};

export const Default = { args: {} };
