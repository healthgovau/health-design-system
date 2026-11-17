import { compileTemplate, storyPartial } from "../handlebars";
import withPagePreview from "../decorators";
import inlineReferenceSource from "../../style-guide/components/01-components/references/inline-reference/inline-reference.hbs?raw";
import inlineReferenceContactSource from "../../style-guide/components/01-components/references/inline-reference/inline-reference--contact.hbs?raw";
import inlineReferenceVideoSource from "../../style-guide/components/01-components/references/inline-reference/inline-reference--video.hbs?raw";
import ImageMeta, { BorderLink as ImageBorderLink } from "./image.stories";
import VideoMeta, { Preview as VideoPreview } from "./video.stories";

const renderInlineReference = compileTemplate(inlineReferenceSource, {
  "@image--border-link": storyPartial(ImageMeta, ImageBorderLink),
});
const renderInlineReferenceContact = compileTemplate(
  inlineReferenceContactSource,
);
const renderInlineReferenceVideo = compileTemplate(inlineReferenceVideoSource, {
  "@video--preview": storyPartial(VideoMeta, VideoPreview),
});

export default {
  title: "References/Inline reference",
  decorators: [withPagePreview],
  render: (args) => renderInlineReference(args),
};

export const Default = { args: {} };

export const Contact = {
  args: {},
  render: (args) => renderInlineReferenceContact(args),
};

export const Video = {
  args: {},
  render: (args) => renderInlineReferenceVideo(args),
};
