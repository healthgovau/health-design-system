import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import imageTemplate from "../../../source/templates/03-Components/image/image.hbs?raw";

export default {
  title: "Components/Image",
  parameters: { layout: "fullscreen" },
  decorators,
  render: (args) => {
    const template = compileTemplate(imageTemplate);
    return template(args);
  },
};

export const Default = {
  args: {
    image: {
      link: false,
      url: "/images/picsum-20-1865x1319.jpg",
      width: 800,
      height: 450,
      ratio: 56.25,
    },
  },
};

export const Border = {
  args: {
    image: {
      ...Default.args.image,
      modifier: "image--border",
    },
  },
};

export const Link = {
  args: {
    image: {
      ...Default.args.image,
      modifier: "image--link",
      link: true,
    },
  },
};

export const BorderLink = {
  args: {
    image: {
      ...Default.args.image,
      modifier: "image--border image--link",
      link: true,
    },
  },
};
