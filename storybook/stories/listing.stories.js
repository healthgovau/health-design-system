import { compileTemplate, storyPartial } from "../handlebars";
import withPagePreview from "../decorators";
import listingSource from "../../style-guide/components/01-components/listing/listing.hbs?raw";
import listingCompactSource from "../../style-guide/components/01-components/listing/listing--compact.hbs?raw";
import listingPublicationSource from "../../style-guide/components/01-components/_listing-publication.hbs?raw";
import listingVideoSource from "../../style-guide/components/01-components/_listing-video.hbs?raw";
import ImageMeta, { BorderLink as ImageBorderLink } from "./image.stories";
import MetadataMeta, { Default as MetadataDefault } from "./metadata.stories";
import VideoMeta, { Preview as VideoPreview } from "./video.stories";

const renderListingCompact = compileTemplate(listingCompactSource);
const renderListingPublication = compileTemplate(listingPublicationSource, {
  "@image--border-link": storyPartial(ImageMeta, ImageBorderLink),
  "@metadata": storyPartial(MetadataMeta, MetadataDefault),
});
const renderListingVideo = compileTemplate(listingVideoSource, {
  "@video--preview": storyPartial(VideoMeta, VideoPreview),
  "@metadata": storyPartial(MetadataMeta, MetadataDefault),
});
const renderListing = compileTemplate(listingSource, {
  "@listing-video": (args) => renderListingVideo(args),
  "@listing-publication": (args) => renderListingPublication(args),
});

export default {
  title: "Components/Listing",
  decorators: [withPagePreview],
  render: (args) => renderListing(args),
};

export const Default = { args: {} };

export const Compact = {
  args: {},
  render: (args) => renderListingCompact(args),
};

export const Publication = {
  args: {},
  render: (args) => renderListingPublication(args),
};

export const Video = { args: {}, render: (args) => renderListingVideo(args) };
