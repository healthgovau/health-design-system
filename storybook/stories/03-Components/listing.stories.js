import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import listingConfig from "../../../style-guide/components/01-components/listing/listing.config.json";
import listingSource from "../../../style-guide/components/01-components/listing/listing.hbs?raw";
import listingCompactSource from "../../../style-guide/components/01-components/listing/listing--compact.hbs?raw";
import listingPublicationSource from "../../../style-guide/components/01-components/_listing-publication.hbs?raw";
import listingVideoSource from "../../../style-guide/components/01-components/_listing-video.hbs?raw";

const renderListingCompact = compileTemplate(listingCompactSource);
const renderListingPublication = compileTemplate(listingPublicationSource);
const renderListingVideo = compileTemplate(listingVideoSource);
const renderListing = compileTemplate(listingSource);

export default {
  title: "Components/Listing",
  decorators: [withPagePreview],
  render: (args) => renderListing(args),
};

export const Default = { args: listingConfig.context };

export const Compact = {
  args: {},
  render: (args) => renderListingCompact(args),
};

export const Publication = {
  args: listingConfig.context.publication,
  render: (args) => renderListingPublication(args),
};

export const Video = {
  args: listingConfig.context.video,
  render: (args) => renderListingVideo(args),
};
