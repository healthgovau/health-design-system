import { compileTemplate, storyPartial } from "../handlebars";
import withPagePreview from "../decorators";
import searchConfig from "../../style-guide/components/01-components/search/search.config.json";
import searchSource from "../../style-guide/components/01-components/search/search.hbs?raw";
import LoadingMeta, { Search as LoadingSearch } from "./loading.stories";

const renderSearch = compileTemplate(searchSource, {
  "@loading--search": storyPartial(LoadingMeta, LoadingSearch),
});

export default {
  title: "Components/Search",
  decorators: [withPagePreview],
  render: (args) => renderSearch(args),
};

export const Default = { args: searchConfig.context };
