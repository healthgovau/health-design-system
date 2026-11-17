import { componentStory } from "../component-preview";

export default {
  title: "Navigation/Main navigation",
  parameters: { layout: "fullscreen" },
};
export const Default = componentStory("main-nav");
export const DropDown = componentStory("main-nav--drop-down");
export const Dark = componentStory("main-nav--dark");
