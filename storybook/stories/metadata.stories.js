import { compileTemplate } from "../handlebars";
import withPagePreview from "../decorators";
import metadataSource from "../../style-guide/components/01-components/supplementary-content/metadata/metadata.hbs?raw";

const renderMetadata = compileTemplate(metadataSource);

export default {
  title: "Supplementary content/Metadata",
  decorators: [withPagePreview],
  render: (args) => renderMetadata(args),
};

export const Default = { args: {} };
