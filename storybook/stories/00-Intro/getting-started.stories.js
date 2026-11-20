import Handlebars from "handlebars";

import gettingStartedTemplate from "../../../source/templates/00-Intro/getting-started/getting-started.hbs?raw";

const renderGettingStarted = Handlebars.compile(gettingStartedTemplate);

export default {
  title: "Getting started",
};

export const GettingStarted = {
  name: "Getting started",
  render: (args) => renderGettingStarted(args),
};
