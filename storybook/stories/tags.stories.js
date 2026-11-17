import { compileTemplate } from "../handlebars";
import withPagePreview from "../decorators";
import tagsSource from "../../style-guide/components/01-components/tags/tags.hbs?raw";
import tagsLinkedSource from "../../style-guide/components/01-components/tags/tags--linked.hbs?raw";

const renderTags = compileTemplate(tagsSource);
const renderTagsLinked = compileTemplate(tagsLinkedSource);

export default {
  title: "Components/Tags",
  decorators: [withPagePreview],
  render: (args) => renderTags(args),
};

export const Default = { args: {} };

export const Linked = { args: {}, render: (args) => renderTagsLinked(args) };
