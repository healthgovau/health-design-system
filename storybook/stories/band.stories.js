import { compileTemplate, getVariantArgs, storyPartial } from "../handlebars";
import withPagePreview from "../decorators";
import bandConfig from "../../style-guide/components/01-components/layout/band/band.config.json";
import bandSource from "../../style-guide/components/01-components/layout/band/band.hbs?raw";
import bandHotlineSource from "../../style-guide/components/01-components/layout/band/band--hotline.hbs?raw";
import bandCardsImageSource from "../../style-guide/components/01-components/layout/band/band--cards-image.hbs?raw";
import bandCardsCallToActionSource from "../../style-guide/components/01-components/layout/band/band--cards-call-to-action.hbs?raw";
import bandCardsResourcesSource from "../../style-guide/components/01-components/layout/band/band--cards-resources.hbs?raw";
import bandCardsBorderlessSource from "../../style-guide/components/01-components/layout/band/band--cards-borderless.hbs?raw";
import bandFeaturedSource from "../../style-guide/components/01-components/layout/band/band--featured.hbs?raw";
import bandImageTextHorizontalSource from "../../style-guide/components/01-components/layout/band/band--image-text-horizontal.hbs?raw";
import bandStatisticsSource from "../../style-guide/components/01-components/layout/band/band--statistics.hbs?raw";
import bandVideoListingSource from "../../style-guide/components/01-components/layout/band/band--video-listing.hbs?raw";
import CardMeta, {
  Default as CardDefault,
  Horizontal as CardHorizontal,
  WithoutImage as CardWithoutImage,
  Borderless as CardBorderless,
} from "./card.stories";
import ImageMeta, { BorderLink as ImageBorderLink } from "./image.stories";
import VideoMeta, { Preview as VideoPreview } from "./video.stories";

const renderBand = compileTemplate(bandSource);
const renderBandHotline = compileTemplate(bandHotlineSource);
const renderBandCardsImage = compileTemplate(bandCardsImageSource, {
  "@card": storyPartial(CardMeta, CardDefault),
  "@card--horizontal": storyPartial(CardMeta, CardHorizontal),
});
const renderBandCardsCallToAction = compileTemplate(
  bandCardsCallToActionSource,
  { "@card--without-image": storyPartial(CardMeta, CardWithoutImage) },
);
const renderBandCardsResources = compileTemplate(bandCardsResourcesSource, {
  "@card--without-image": storyPartial(CardMeta, CardWithoutImage),
});
const renderBandCardsBorderless = compileTemplate(bandCardsBorderlessSource, {
  "@card--borderless": storyPartial(CardMeta, CardBorderless),
});
const renderBandFeatured = compileTemplate(bandFeaturedSource, {
  "@image--border-link": storyPartial(ImageMeta, ImageBorderLink),
});
const renderBandImageTextHorizontal = compileTemplate(
  bandImageTextHorizontalSource,
);
const renderBandStatistics = compileTemplate(bandStatisticsSource);
const renderBandVideoListing = compileTemplate(bandVideoListingSource, {
  "@video--preview": storyPartial(VideoMeta, VideoPreview),
});

export default {
  title: "Layout/Band",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [withPagePreview],
  render: (args) => renderBand(args),
};

export const Default = { args: bandConfig.context };

export const Hotline = {
  args: getVariantArgs(bandConfig, "Hotline"),
  render: (args) => renderBandHotline(args),
};

export const CardsImage = {
  args: getVariantArgs(bandConfig, "Cards image"),
  render: (args) => renderBandCardsImage(args),
};

export const CardsCallToAction = {
  args: getVariantArgs(bandConfig, "Cards call to action"),
  render: (args) => renderBandCardsCallToAction(args),
};

export const CardsResources = {
  args: getVariantArgs(bandConfig, "Cards resources"),
  render: (args) => renderBandCardsResources(args),
};

export const CardsBorderless = {
  args: bandConfig.context,
  render: (args) => renderBandCardsBorderless(args),
};

export const Featured = {
  args: getVariantArgs(bandConfig, "Featured"),
  render: (args) => renderBandFeatured(args),
};

export const ImageTextHorizontal = {
  args: getVariantArgs(bandConfig, "Image text horizontal"),
  render: (args) => renderBandImageTextHorizontal(args),
};

export const Statistics = {
  args: bandConfig.context,
  render: (args) => renderBandStatistics(args),
};

export const VideoListing = {
  args: getVariantArgs(bandConfig, "Video listing"),
  render: (args) => renderBandVideoListing(args),
};
