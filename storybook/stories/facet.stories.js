import Handlebars from 'handlebars';
import templateSource from '../../style-guide/components/01-components/facet/facet.hbs?raw';

const renderFacet = Handlebars.compile(templateSource);

export default {
  title: 'Components/Facet',
  render: () => `<div class="au-body au-grid">${renderFacet({})}</div>`,
};

export const Default = {
  play: () => {
    if (!globalThis.health?.facetShowMore) {
      throw new Error('The HDS facetShowMore behavior is not available.');
    }

    globalThis.health.facetShowMore('.health-facet', 8);
  },
};
