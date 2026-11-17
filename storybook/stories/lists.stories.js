import { compileTemplate, getVariantArgs } from "../handlebars";
import withPagePreview from "../decorators";
import listsConfig from "../../style-guide/components/01-components/lists/lists.config.json";
import listsSource from "../../style-guide/components/01-components/lists/lists.hbs?raw";
import listsDefinitionListSource from "../../style-guide/components/01-components/lists/lists--definition-list.hbs?raw";

const renderLists = compileTemplate(listsSource);
const renderListsDefinitionList = compileTemplate(listsDefinitionListSource);

export default {
  title: "Components/Lists",
  decorators: [withPagePreview],
  render: (args) => renderLists(args),
};

export const Default = { args: {} };

export const Large = { args: getVariantArgs(listsConfig, "Large") };

export const LargePlain = { args: getVariantArgs(listsConfig, "Large plain") };

export const Checklist = { args: getVariantArgs(listsConfig, "Checklist") };

export const DefinitionList = {
  args: {},
  render: (args) => renderListsDefinitionList(args),
};
