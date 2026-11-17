import { compileTemplate } from "../handlebars";
import withPagePreview from "../decorators";
import mainNavConfig from "../../style-guide/components/01-components/navigation/main-nav/main-nav.config.json";
import mainNavSource from "../../style-guide/components/01-components/navigation/main-nav/main-nav.hbs?raw";
import mainNavDropDownSource from "../../style-guide/components/01-components/navigation/main-nav/main-nav--drop-down.hbs?raw";

const renderMainNav = compileTemplate(mainNavSource);
const renderMainNavDropDown = compileTemplate(mainNavDropDownSource);

export default {
  title: "Navigation/Main navigation",
  parameters: { layout: "fullscreen" },
  decorators: [withPagePreview],
  render: (args) => renderMainNav(args),
};

export const Default = { args: mainNavConfig.context };

export const DropDown = {
  args: mainNavConfig.context,
  render: (args) => renderMainNavDropDown(args),
};

export const Dark = { args: { modifier: "au-main-nav--dark" } };
