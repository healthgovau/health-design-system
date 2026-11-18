import { compileTemplate } from "../../handlebars";
import withPagePreview from "../../decorators";
import videoConfig from "../../../style-guide/components/01-components/video/video.config.json";
import videoSource from "../../../style-guide/components/01-components/video/video.hbs?raw";
import videoPreviewSource from "../../../style-guide/components/01-components/video/video--preview.hbs?raw";

const renderVideo = compileTemplate(videoSource);
const renderVideoPreview = compileTemplate(videoPreviewSource);

export default {
  title: "Components/Video",
  decorators: [withPagePreview],
  render: (args) => renderVideo(args),
};

export const Default = { args: videoConfig.context };

export const Preview = {
  args: videoConfig.context,
  render: (args) => renderVideoPreview(args),
};
