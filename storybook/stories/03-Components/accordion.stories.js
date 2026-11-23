import { compileTemplate } from "../../handlebars";
import decorators from "../../decorators";
import accordionTemplate from '../../../source/templates/03-Components/accordion/accordion.hbs?raw';

export default {
  title: 'Components/Accordion',
  decorators,
  render: (args) => {
    const template = compileTemplate(accordionTemplate);
    return template(args);
  },
};

export const Default = {
  args: {
    title: "Accordion title",
    content:
      "Contents of the accordion body. Duis lacinia sed mi ornare <a href='#'>vulputate</a>. Nam dictum eros at orci finibus, quis porttitor ante viverra. Proin et posuere urna, ut placerat nulla. Nam iaculis commodo nulla, at eleifend urna rutrum at. Mauris id aliquet nibh,    et porta quam. Cras iaculis lorem eget faucibus consectetur. Ut nec scelerisque tortor. Pellentesque consectetur    massa sapien, non mattis justo hendrerit a. Nunc pulvinar nibh ut lectus lacinia pharetra.",
  },
};

export const Block = {
  args: {
    modifier: "au-accordion--block",
    title: "Accordion block variant",
    content:
      "This accordion visually represents the title/body as a single unit.<br><br>Duis lacinia sed mi ornare vulputate. Nam dictum eros at orci finibus, quis porttitor ante viverra. Proin et posuere urna, ut placerat nulla. Nam iaculis commodo nulla, at eleifend urna rutrum at. Mauris id aliquet nibh,    et porta quam. Cras iaculis lorem eget faucibus consectetur. Ut nec scelerisque tortor. Pellentesque consectetur    massa sapien, non mattis justo hendrerit a. Nunc pulvinar nibh ut lectus",
  },
};

export const Shadow = {
  args: {
    modifier: "au-accordion--shadow",
    title: "Accordion shadow variant",
    content:
      "This accordion add the default shadow to make it more prominent.<br><br>Duis lacinia sed mi ornare vulputate. Nam dictum eros at orci finibus, quis porttitor ante viverra. Proin et posuere urna, ut placerat nulla. Nam iaculis commodo nulla, at eleifend urna rutrum at. Mauris id aliquet nibh,    et porta quam. Cras iaculis lorem eget faucibus consectetur. Ut nec scelerisque tortor. Pellentesque consectetur    massa sapien, non mattis justo hendrerit a. Nunc pulvinar nibh ut lectus",
  },
};

export const Compact = {
  args: {
    modifier: "au-accordion--compact",
    title: "Accordion compact variant",
    content:
      "This accordion reduces font size and padding.<br><br>Duis lacinia sed mi ornare vulputate. Nam dictum eros at orci finibus, quis porttitor ante viverra. Proin et posuere urna, ut placerat nulla. Nam iaculis commodo nulla, at eleifend urna rutrum at. Mauris id aliquet nibh,    et porta quam. Cras iaculis lorem eget faucibus consectetur. Ut nec scelerisque tortor. Pellentesque consectetur    massa sapien, non mattis justo hendrerit a. Nunc pulvinar nibh ut lectus",
  },
};
