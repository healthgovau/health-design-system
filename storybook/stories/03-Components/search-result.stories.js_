import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import searchResultSource from "../../../style-guide/components/01-components/search-result/search-result.hbs?raw";

const renderSearchResult = compileTemplate(searchResultSource);

export default {
  title: "Components/Search result",
  decorators: [withPagePreview],
  render: (args) => renderSearchResult(args),
};

export const Default = { args: {} };
