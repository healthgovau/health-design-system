import { componentStory } from "../component-preview";

export default {
  title: "Components/Image",
  parameters: { layout: "fullscreen" },
};
export const Default = componentStory("image");
export const Border = componentStory("image--border");
export const Link = componentStory("image--link");
export const BorderLink = componentStory("image--border-link");
