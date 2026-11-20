import Handlebars from 'handlebars';
import templateSource from '../../../style-guide/components/01-components/accordions/accordion-group/accordion-group.hbs?raw';

const renderAccordionGroup = Handlebars.compile(templateSource);

export default {
  title: 'Components/Accordion Group',
  decorators: [
    (Story) => {
      const decorator = document.createElement('div');
      // Add CSS class names.
      decorator.classList.add('au-body', 'au-grid');
      decorator.innerHTML = Story();
      return decorator;
    },
  ],
  render: (args) => `${renderAccordionGroup(args)}`,
  argTypes: {
    modifier: { control: 'text' },
    title: { control: 'text' },
    content: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: "Accordion title",
    content: "Contents of the accordion body. Duis lacinia sed mi ornare <a href='#'>vulputate</a>. Nam dictum eros at orci finibus, quis porttitor ante viverra. Proin et posuere urna, ut placerat nulla. Nam iaculis commodo nulla, at eleifend urna rutrum at. Mauris id aliquet nibh, et porta quam. Cras iaculis lorem eget faucibus consectetur. Ut nec scelerisque tortor. Pellentesque consectetur massa sapien, non mattis justo hendrerit a. Nunc pulvinar nibh ut lectus lacinia pharetra.",
    modifier: "",
  },
};

export const Flush = {
  args: {
    ...Default.args,
    modifier: "au-accordion-group--flush",
  },
};
