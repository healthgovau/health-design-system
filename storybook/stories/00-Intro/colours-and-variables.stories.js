import Handlebars from "handlebars";

import coloursAndVariablesTemplate from "../../../source/templates/00-Intro/colours-and-variables/colours-and-variables.hbs?raw";

const renderColoursAndVariables = Handlebars.compile(coloursAndVariablesTemplate);

export default {
  title: "Colours and variables",
};

export const ColoursAndVariables = {
  name: "Colours and variables",
  render: (args) => renderColoursAndVariables(args),
};
