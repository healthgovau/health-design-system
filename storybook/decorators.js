import previewSource from "../style-guide/components/_preview-page.hbs?raw";
import { compileTemplate } from "./handlebars";

const renderPreview = compileTemplate(previewSource);

export default function withPagePreview(Story, context) {
  const frame = document.createElement("iframe");
  frame.title = `${context.title} component preview`;
  frame.style.cssText = "width: 100%; height: 600px; border: 0; display: block";
  frame.srcdoc = renderPreview({ yield: Story() });
  return frame;
}
