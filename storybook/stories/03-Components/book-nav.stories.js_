import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import bookNavSource from "../../../style-guide/components/01-components/navigation/book-nav/book-nav.hbs?raw";

const renderBookNav = compileTemplate(bookNavSource);

export default {
  title: 'Components/Book Nav',
  decorators: [withPagePreview],
  render: (args) => renderBookNav(args),
};

export const Default = { args: {} };
