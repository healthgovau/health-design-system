import { componentStory } from "../component-preview";

export default {
  title: "Page regions/Hero",
  parameters: { layout: "fullscreen" },
};
export const Default = componentStory("hero");
export const InsetBox = componentStory("hero--hero-inset-box");
export const InsetBoxOverlapping = componentStory(
  "hero--hero-inset-box-overlapping",
);
export const Gradient = componentStory("hero--hero-gradient");
export const GradientVertical = componentStory("hero--hero-gradient-vertical");
