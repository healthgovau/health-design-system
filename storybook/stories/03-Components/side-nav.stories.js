import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import sideNavSource from "../../../style-guide/components/01-components/navigation/side-nav/side-nav.hbs?raw";
import sideNavAccordionSource from "../../../style-guide/components/01-components/navigation/side-nav/side-nav--accordion.hbs?raw";

const renderSideNav = compileTemplate(sideNavSource);
const renderSideNavAccordion = compileTemplate(sideNavAccordionSource);

export default {
  title: "Navigation/Side navigation",
  decorators: [withPagePreview],
  render: (args) => renderSideNav(args),
};

export const Default = { args: {} };

export const Accordion = {
  args: {},
  render: (args) => renderSideNavAccordion(args),
};
