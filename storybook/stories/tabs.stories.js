import { compileTemplate } from "../handlebars";
import withPagePreview from "../decorators";
import tabsSource from "../../style-guide/components/01-components/navigation/tabs/tabs.hbs?raw";
import tabsMobileScrollSource from "../../style-guide/components/01-components/navigation/tabs/tabs--mobile-scroll.hbs?raw";

const renderTabs = compileTemplate(tabsSource);
const renderTabsMobileScroll = compileTemplate(tabsMobileScrollSource);

export default {
  title: "Navigation/Tabs",
  decorators: [withPagePreview],
  render: (args) => renderTabs(args),
};

export const Default = { args: {} };

export const MobileScroll = {
  args: {},
  render: (args) => renderTabsMobileScroll(args),
};
