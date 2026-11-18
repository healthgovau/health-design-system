import Handlebars from "handlebars";
import whoSource from './who.hbs?raw';

const renderWho = Handlebars.compile(whoSource);

export default {
  title: "Who is this for?",
};

export const WhoIsThisFor = {
  name: "Who is this for?",
  render: (args) => renderWho(args),
};
