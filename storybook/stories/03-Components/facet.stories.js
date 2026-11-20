import { compileTemplate } from "../../handlebars";
import facetTemplate from '../../../source/templates/03-Components/facet/facet.hbs?raw';

export default {
  title: 'Components/Facet',
  args: {},
  tags: ['autodocs'],
  render: (args) => {
    const template = compileTemplate(facetTemplate);
    return template(args);
  },
};

export const Default = {};
