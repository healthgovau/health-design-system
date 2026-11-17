import { componentStory } from "../component-preview";

export default {
  title: "Page regions/Header",
  parameters: { layout: "fullscreen" },
};
export const Default = componentStory("header");
export const WithSiteTitle = componentStory("header--with-site-title");
export const Simple = componentStory("header--simple");
export const Dark = componentStory("header--dark");
export const Aligned = componentStory("header--aligned");
export const BrandNameLockup = componentStory("header--brand-name-lockup");
export const BrandNameWithSubline = componentStory(
  "header--brand-name-with-subline",
);
export const DualLogoLockup = componentStory("header--dual-logo-lockup");
