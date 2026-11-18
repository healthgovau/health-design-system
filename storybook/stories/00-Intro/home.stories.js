import Handlebars from "handlebars";

import homeSource from './home.hbs?raw';

const renderHome = Handlebars.compile(homeSource);

export default {
  title: "Home",
  component: "Home",
};

export const Home = (args) => renderHome(args);
