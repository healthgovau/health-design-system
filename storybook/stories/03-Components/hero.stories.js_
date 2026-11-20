import { compileTemplate, getVariantArgs } from "../../handlebars";
import withPagePreview from "../../decorators";
import heroConfig from "../../../style-guide/components/01-components/page-regions/hero/hero.config.json";
import heroSource from "../../../style-guide/components/01-components/page-regions/hero/hero.hbs?raw";

const renderHero = compileTemplate(heroSource);

export default {
  title: "Page regions/Hero",
  parameters: { layout: "fullscreen" },
  decorators: [withPagePreview],
  render: (args) => renderHero(args),
};

export const Default = { args: heroConfig.context };

export const InsetBox = { args: getVariantArgs(heroConfig, "Hero inset box") };

export const InsetBoxOverlapping = {
  args: getVariantArgs(heroConfig, "Hero inset box (overlapping)"),
};

export const Gradient = { args: getVariantArgs(heroConfig, "Hero gradient") };

export const GradientVertical = {
  args: getVariantArgs(heroConfig, "Hero gradient (vertical)"),
};
