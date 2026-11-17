import { compileTemplate } from "../handlebars";
import withPagePreview from "../decorators";
import breadcrumbSource from "../../style-guide/components/01-components/navigation/breadcrumb/breadcrumb.hbs?raw";

const renderBreadcrumb = compileTemplate(breadcrumbSource);

export default {
  title: "Navigation/Breadcrumb",
  decorators: [withPagePreview],
  render: (args) => renderBreadcrumb(args),
};

export const Default = { args: {} };
