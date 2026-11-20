import { compileTemplate, getVariantArgs } from "../../handlebars";
import withPagePreview from "../../decorators";
import loadingConfig from "../../../style-guide/components/01-components/_loading/loading.config.json";
import loadingSource from "../../../style-guide/components/01-components/_loading/loading.hbs?raw";

const renderLoading = compileTemplate(loadingSource);

export default {
  title: "Components/Loading",
  decorators: [withPagePreview],
  render: (args) => renderLoading(args),
};

export const Default = { args: loadingConfig.context };

export const Small = { args: getVariantArgs(loadingConfig, "Small") };

export const Search = { args: getVariantArgs(loadingConfig, "Search") };
