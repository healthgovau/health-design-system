import Handlebars from "handlebars";
import usersTemplate from "../../../source/templates/00-Intro/users/users.hbs?raw";

const renderUsers = Handlebars.compile(usersTemplate);

export default {
  title: "Who should use it?",
};

export const WhoIsThisFor = {
  name: "Who should use it?",
  render: (args) => renderUsers(args),
};
