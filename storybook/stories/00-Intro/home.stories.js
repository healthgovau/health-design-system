import Handlebars from "handlebars";

import homeSource from "../../../source/templates/00-Intro/home/home.hbs?raw";

const renderHome = Handlebars.compile(homeSource);

export default {
  title: "Home",
  component: "Home",
};

export const Home = (args) => renderHome(args);
