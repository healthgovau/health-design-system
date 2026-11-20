import Handlebars from "handlebars";

import versioningTemplate from "../../../source/templates/00-Intro/versioning/versioning.hbs?raw";

const renderVersioning = Handlebars.compile(versioningTemplate);

export default {
    title: "Versioning",
};

export const Versioning = {
    name: "Versioning",
    render: (args) => renderVersioning(args),
};
