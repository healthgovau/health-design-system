import { compileTemplate } from "../handlebars";
import withPagePreview from "../decorators";
import quickExitSource from "../../style-guide/components/01-components/quick-exit/quick-exit.hbs?raw";

const renderQuickExit = compileTemplate(quickExitSource);

export default {
  title: "Components/Quick exit",
  parameters: { layout: "fullscreen" },
  decorators: [withPagePreview],
  render: (args) => renderQuickExit(args),
};

export const Default = { args: {} };
