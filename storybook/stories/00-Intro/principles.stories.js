import Handlebars from "handlebars";

import principlesTemplate from "../../../source/templates/00-Intro/principles/principles.hbs?raw";

const renderPrinciples = Handlebars.compile(principlesTemplate);

export default {
  title: "Principles",
};

export const Principles = {
  name: "Principles",
  render: (args) => renderPrinciples(args),
};
