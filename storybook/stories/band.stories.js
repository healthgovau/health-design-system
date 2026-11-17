import { componentStory } from "../component-preview";

export default { title: "Layout/Band", parameters: { layout: "fullscreen" } };
export const Default = componentStory("band");
export const Hotline = componentStory("band--hotline");
export const CardsImage = componentStory("band--cards-image");
export const CardsCallToAction = componentStory("band--cards-call-to-action");
export const CardsResources = componentStory("band--cards-resources");
export const CardsBorderless = componentStory("band--cards-borderless");
export const Featured = componentStory("band--featured");
export const ImageTextHorizontal = componentStory(
  "band--image-text-horizontal",
);
export const Statistics = componentStory("band--statistics");
export const VideoListing = componentStory("band--video-listing");
