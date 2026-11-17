import { compileTemplate } from "../handlebars";
import withPagePreview from "../decorators";
import headingsSource from "../../style-guide/components/01-components/typography/headings.hbs?raw";

const renderHeadings = compileTemplate(headingsSource);

export default {
  title: "Typography/Headings",
  decorators: [withPagePreview],
  render: (args) => renderHeadings(args),
};

export const Default = { args: {} };
