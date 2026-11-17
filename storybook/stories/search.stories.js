import { compileTemplate } from "../handlebars";
import withPagePreview from "../decorators";
import searchConfig from "../../style-guide/components/01-components/search/search.config.json";
import searchSource from "../../style-guide/components/01-components/search/search.hbs?raw";

const renderSearch = compileTemplate(searchSource);

export default {
  title: "Components/Search",
  decorators: [withPagePreview],
  render: (args) => renderSearch(args),
};

export const Default = { args: searchConfig.context };
