import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import inlineReferenceConfig from "../../../style-guide/components/01-components/references/inline-reference/inline-reference.config.json";
import inlineReferenceSource from "../../../style-guide/components/01-components/references/inline-reference/inline-reference.hbs?raw";
import inlineReferenceContactSource from "../../../style-guide/components/01-components/references/inline-reference/inline-reference--contact.hbs?raw";
import inlineReferenceVideoSource from "../../../style-guide/components/01-components/references/inline-reference/inline-reference--video.hbs?raw";

const renderInlineReference = compileTemplate(inlineReferenceSource);
const renderInlineReferenceContact = compileTemplate(
  inlineReferenceContactSource,
);
const renderInlineReferenceVideo = compileTemplate(inlineReferenceVideoSource);

export default {
  title: "References/Inline reference",
  decorators: [withPagePreview],
  render: (args) => renderInlineReference(args),
};

export const Default = { args: inlineReferenceConfig.context };

export const Contact = {
  args: {},
  render: (args) => renderInlineReferenceContact(args),
};

export const Video = {
  args: inlineReferenceConfig.context,
  render: (args) => renderInlineReferenceVideo(args),
};
