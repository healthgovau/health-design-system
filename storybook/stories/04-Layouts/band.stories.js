import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import bandTemplate from "../../../source/templates/04-Layouts/band/band.hbs?raw";
import bandCardsCallToActionTemplate from "../../../source/templates/04-Layouts/band/band--cards-call-to-action.hbs?raw";
import bandHotlineTemplate from "../../../source/templates/04-Layouts/band/band--hotline.hbs?raw";
import bandCardsImageTemplate from "../../../source/templates/04-Layouts/band/band--cards-image.hbs?raw";
// import bandCardsResourcesSource from "../../../../source/templates/04-Layouts/layout/band/band--cards-resources.hbs?raw";
// import bandCardsBorderlessSource from "../../../../source/templates/04-Layouts/layout/band/band--cards-borderless.hbs?raw";
// import bandFeaturedSource from "../../../../source/templates/04-Layouts/layout/band/band--featured.hbs?raw";
// import bandImageTextHorizontalSource from "../../../../source/templates/04-Layouts/layout/band/band--image-text-horizontal.hbs?raw";
// import bandStatisticsSource from "../../../../source/templates/04-Layouts/layout/band/band--statistics.hbs?raw";
// import bandVideoListingSource from "../../../../source/templates/04-Layouts/layout/band/band--video-listing.hbs?raw";

export default {
  title: 'Layouts/Band',
  decorators,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  render: (args) => {
    const template = compileTemplate(bandTemplate);
    return template(args);
  },
};

export const Default = {
  args: {
    title: "Band title",
  },
};

export const Hotline = {
  args: {
    ...Default.args,
    modifier: "primary",
    title: "Dinosaur escape hotline",
    number: "1800 671 811",
    text: "Call us on 1800 671 811 if you spot a dinosaur on the loose.",
  },
  render: (args) => {
    const template = compileTemplate(bandHotlineTemplate);
    return template(args);
  },
};

export const CardsImage = {
  args: {
    ...Default.args,
    title: "Latest news",
    modifier: "neutral",
    card: {
      title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      date: "20 July 2019",
      tag: "News",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    horizontalCard: {
      title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      date: "20 July 2019",
      tag: "News",
      content: "This card presents image and body side-by-side.",
      class: "health-card--horizontal",
    },
  },
  render: (args) => {
    const template = compileTemplate(bandCardsImageTemplate);
    return template(args);
  },
};

export const CardsCallToAction = {
  args: {
    ...Default.args,
    card: {
      title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      date: "20 July 2019",
      tag: "News",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  },
  render: (args) => {
    const template = compileTemplate(bandCardsCallToActionTemplate);
    return template(args);
  },
};

// export const CardsCallToAction = {
//   args: getVariantArgs(bandConfig, "Cards call to action"),
//   render: (args) => renderBandCardsCallToAction(args),
// };

// export const CardsResources = {
//   args: getVariantArgs(bandConfig, "Cards resources"),
//   render: (args) => renderBandCardsResources(args),
// };

// export const CardsBorderless = {
//   args: getVariantArgs(bandConfig, "Cards borderless"),
//   render: (args) => renderBandCardsBorderless(args),
// };

// export const Featured = {
//   args: getVariantArgs(bandConfig, "Featured"),
//   render: (args) => renderBandFeatured(args),
// };

// export const ImageTextHorizontal = {
//   args: getVariantArgs(bandConfig, "Image text horizontal"),
//   render: (args) => renderBandImageTextHorizontal(args),
// };

// export const Statistics = {
//   args: bandConfig.context,
//   render: (args) => renderBandStatistics(args),
// };

// export const VideoListing = {
//   args: getVariantArgs(bandConfig, "Video listing"),
//   render: (args) => renderBandVideoListing(args),
// };
