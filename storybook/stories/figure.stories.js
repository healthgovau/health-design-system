import Handlebars from 'handlebars';
import templateSource from '../../style-guide/components/01-components/figure/figure.hbs?raw';

const handlebars = Handlebars.create();
handlebars.registerHelper('path', (assetPath) => assetPath);

const renderFigure = handlebars.compile(templateSource);

export default {
  title: 'Components/Figure',
  render: () => `<div class="au-body au-grid">${renderFigure({})}</div>`,
};

export const Default = {};
