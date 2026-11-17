import { compileTemplate, getVariantArgs } from "../handlebars";
import withPagePreview from "../decorators";
import imageConfig from "../../style-guide/components/01-components/image/image.config.json";
import imageSource from "../../style-guide/components/01-components/image/image.hbs?raw";

const renderImage = compileTemplate(imageSource);

export default {
  title: "Components/Image",
  parameters: { layout: "fullscreen" },
  decorators: [withPagePreview],
  render: (args) => renderImage(args),
};

export const Default = { args: imageConfig.context };

export const Border = { args: getVariantArgs(imageConfig, "Border") };

export const Link = { args: getVariantArgs(imageConfig, "Link") };

export const BorderLink = { args: getVariantArgs(imageConfig, "Border link") };
