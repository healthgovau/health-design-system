import { componentStory } from "../component-preview";

export default { title: "Utilities/Spacing" };
export const Default = componentStory("spacing");
export const StandardGap = componentStory("spacing--standard-gap");
export const StandardGapMobileOnly = componentStory(
  "spacing--standard-gap-mobile-only",
);
export const StandardGapBottom = componentStory("spacing--standard-gap-bottom");
export const MarginTop = componentStory("spacing--margin-top");
export const MarginBottom = componentStory("spacing--margin-bottom");
