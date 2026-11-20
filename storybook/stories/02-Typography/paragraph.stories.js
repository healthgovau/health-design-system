import Handlebars from "handlebars";
import decorators from "../../decorators";
import paragraphSource from "../../../source/templates/02-Typography/paragraph/paragraph.hbs?raw";

const renderParagraph = Handlebars.compile(paragraphSource);

export default {
  title: "Typography/Paragraph",
  decorators,
  argTypes: {
    name: {
      control: "text",
    },
    modifier: {
      control: "text",
    },
  },
  render: (args) => renderParagraph(args),
};

export const Introduction = {
  args: {
    name: "Introduction",
    modifier: "au-introduction",
  },
};

export const IntroductionDark = {
  args: {
    name: "Introduction - Dark",
    modifier: "au-introduction au-introduction--dark",
  },
};

export const Minor = {
  args: {
    name: "Minor",
    modifier: "text--minor",
  },
};

export const AlignRight = {
  args: {
    name: "Align right",
    modifier: "text--align-right",
  },
};

export const AlignCenter = {
  args: {
    name: "Align center",
    modifier: "text--align-center",
  },
};
