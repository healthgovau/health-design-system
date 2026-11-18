import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import referencesSource from "../../../style-guide/components/01-components/references/reference/references.hbs?raw";

const renderReferences = compileTemplate(referencesSource);

export default {
  title: "References/References",
  decorators: [withPagePreview],
  render: (args) => renderReferences(args),
};

export const Default = { args: {} };
