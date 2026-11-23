import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import pagerSource from "../../../style-guide/components/01-components/navigation/pager/pager.hbs?raw";

const renderPager = compileTemplate(pagerSource);

export default {
  title: "Navigation/Pager",
  decorators: [withPagePreview],
  render: (args) => renderPager(args),
};

export const Default = { args: {} };
