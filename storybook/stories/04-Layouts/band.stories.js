import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import bandTemplate from "../../../source/templates/04-Layouts/band/band.hbs?raw";
import bandCardsCallToActionTemplate from "../../../source/templates/04-Layouts/band/band--cards-call-to-action.hbs?raw";
import bandHotlineTemplate from "../../../source/templates/04-Layouts/band/band--hotline.hbs?raw";
import bandCardsImageTemplate from "../../../source/templates/04-Layouts/band/band--cards-image.hbs?raw";
import bandCardsResourcesTemplate from "../../../source/templates/04-Layouts/band/band--cards-resources.hbs?raw";
import bandCardsBorderlessTemplate from "../../../source/templates/04-Layouts/band/band--cards-borderless.hbs?raw";
import bandFeaturedTemplate from "../../../source/templates/04-Layouts/band/band--featured.hbs?raw";
import bandImageTextHorizontalTemplate from "../../../source/templates/04-Layouts/band/band--image-text-horizontal.hbs?raw";
import bandStatisticsTemplate from "../../../source/templates/04-Layouts/band/band--statistics.hbs?raw";
import bandVideoListingTemplate from "../../../source/templates/04-Layouts/band/band--video-listing.hbs?raw";

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

export const CardsResources = {
  args: {
    ...Default.args,
    title: "Latest resources",
    card: {
      title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      date: "20 July 2019",
      tag: "News",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  },
  render: (args) => {
    const template = compileTemplate(bandCardsResourcesTemplate);
    return template(args);
  },
};

export const Featured = {
  args: {
    ...Default.args,
    image: {
      link: true,
      url: "/images/picsum-20-1865x1319.jpg",
      width: 800,
      height: 450,
      ratio: 56.25,
      modifier: "image--link image--border",
    },
  },
  render: (args) => {
    const template = compileTemplate(bandFeaturedTemplate);
    return template(args);
  },
};

export const ImageTextHorizontal = {
  name: "Image text horizontal",
  args: {
    ...Default.args,
    content:
      "<h2>Archaeopteryx</h2><p>All described specimens of Sinosauropteryx preserve integumentary structures (filaments arising from the skin) which most palaeontologists interpret as very primitive type of feathers. These short, down-like filaments are preserved along the back half of the skull, the arms, neck, back, and top and bottom of the tail. </p><ul><li>Despite its feathers, most palaeontologists do not consider Sinosauropteryx to be a bird.</li><li>There is only one named species of Sinosauropteryx, S. prima.</li></ul>",
    image: `<svg viewBox="0 0 86 70" xmlns="http: //www.w3.org/2000/svg"><g stroke="#222829" stroke-width="2.15" fill="none" fill-rule="evenodd" stroke-linejoin="round"><path d="M35 63.333H7V2h30.667L43 7.333 48.333 2H79v61.333H51"/><path d="M79.333 7h5.334v61.333H47.333v-4c0-2.208-1.792-4-4-4s-4 1.792-4 4v4H2V7h5.333"/><path d="M21 27c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4zM37 27c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4zM29 14c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4zM49 10.333h26.667M49 15.333h26.667M49 50.333h26.667M49 44.333h26.667M49 55.333h26.667M11 39.333h26.667M11 44.333h26.667M11 50.333h26.667M11 55.333h26.667M22 17l-4 6.667M27 17l4 6.667M29 27.333h-8M75.333 39H50V19M55 39v-4M61 39v-4M66 39v-4M71 39v-4"/><path d="M50 28.667h4l5.333-5.334 5.334 5.334L71.333 22h4M43 11v45.333"/></g></svg>`,
    modifier: "image-text-horizontal",
  },
  render: (args) => {
    const template = compileTemplate(bandImageTextHorizontalTemplate);
    return template(args);
  },
};

export const CardsBorderless = {
  args: {
    ...Default.args,
    card: {
      title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      date: "20 July 2019",
      tag: "News",
      content: "This card removes the border and internal padding.",
      class: "health-card--borderless",
    },
  },
  render: (args) => {
    const template = compileTemplate(bandCardsBorderlessTemplate);
    return template(args);
  },
};

export const VideoListing = {
  name: "Video listing",
  args: {
    ...Default.args,
    title: "Your stories",
    image: {
      link: true,
      url: "/images/picsum-867-1280x720.jpg",
      width: 800,
      height: 450,
      ratio: 56.25,
      modifier: "image--link image--border",
    },
  },
  render: (args) => {
    const template = compileTemplate(bandVideoListingTemplate);
    return template(args);
  },
};

export const Statistics = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const template = compileTemplate(bandStatisticsTemplate);
    return template(args);
  },
};
