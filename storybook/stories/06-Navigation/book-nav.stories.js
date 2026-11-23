import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import bookNavTemplate from "../../../source/templates/06-Navigation/book-nav/book-nav.hbs?raw";

export default {
  title: 'Navigation/Book Nav',
  decorators,
  render: (args) => {
    const template = compileTemplate(bookNavTemplate);
    return template(args);
  },
};

export const Default = {
  args: {
    title: "Book Navigation",
    label: "Book Navigation",
  },
};
