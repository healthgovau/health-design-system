import { componentStory } from "../component-preview";

export default {
  title: "Page regions/Sub header",
  parameters: { layout: "fullscreen" },
};
export const Dark = componentStory("sub-header");
export const Light = componentStory("sub-header--light");
export const Campaign = componentStory("sub-header--campaign");
export const CampaignSecondary = componentStory(
  "sub-header--campaign-secondary",
);
export const CampaignTertiary = componentStory("sub-header--campaign-tertiary");
