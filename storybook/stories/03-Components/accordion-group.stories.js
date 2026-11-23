import { compileTemplate } from "../../handlebars";
import accordionGroupTemplate from "../../../style-guide/components/01-components/accordions/accordion-group/accordion-group.hbs?raw";

export default {
  title: "Components/Accordion Group",
  decorators: [
    (Story) => {
      const decorator = document.createElement("div");
      // Add CSS class names.
      decorator.classList.add("au-body", "au-grid");
      decorator.innerHTML = Story();
      return decorator;
    },
  ],
  render: (args) => {
    const template = compileTemplate(accordionGroupTemplate);
    return template(args);
  },
  argTypes: {
    modifier: { control: "text" },
    title: { control: "text" },
    content: { control: "text" },
  },
};

export const Default = {
  args: {
    title: "Accordion title",
    content:
      "Contents of the accordion body. Duis lacinia sed mi ornare <a href='#'>vulputate</a>. Nam dictum eros at orci finibus, quis porttitor ante viverra. Proin et posuere urna, ut placerat nulla. Nam iaculis commodo nulla, at eleifend urna rutrum at. Mauris id aliquet nibh, et porta quam. Cras iaculis lorem eget faucibus consectetur. Ut nec scelerisque tortor. Pellentesque consectetur massa sapien, non mattis justo hendrerit a. Nunc pulvinar nibh ut lectus lacinia pharetra.",
    modifier: "",
  },
};

export const Flush = {
  args: {
    ...Default.args,
    title: "Accordion group flush variant",
    content:
      "This accordion group removes spacing between each accordion.<br><br>Duis lacinia sed mi ornare vulputate. Nam dictum eros at orci finibus, quis porttitor ante viverra. Proin et posuere urna, ut placerat nulla. Nam iaculis commodo nulla, at eleifend urna rutrum at. Mauris id aliquet nibh,    et porta quam. Cras iaculis lorem eget faucibus consectetur. Ut nec scelerisque tortor. Pellentesque consectetur    massa sapien, non mattis justo hendrerit a. Nunc pulvinar nibh ut lectus",
    modifier: "au-accordion-group--flush",
  },
};
