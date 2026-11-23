import { DOCS_RENDERED, STORY_RENDERED } from "storybook/internal/core-events";
import { addons } from "storybook/preview-api";

function refreshLazyImages() {
  document.dispatchEvent(new Event("hds:lazyload:update"));
}

const channel = addons.getChannel();
channel.on(STORY_RENDERED, refreshLazyImages);
channel.on(DOCS_RENDERED, refreshLazyImages);

export default {
  parameters: {
    docs: {
      codePanel: true,
    },
    options: {
      storySort: {
        // method: "",
        order: [
          "Home",
          "Who should use it?",
          "Getting started",
          "Principles",
          "Versioning",
          "Colours and variables",
          "Products Using It",
          "Base",
          "Typography",
          "Navigation",
          "Components",
          "Layouts",
        ],
        // locales: "",
      },
    },
  },
};
