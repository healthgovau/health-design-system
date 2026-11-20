import Handlebars from 'handlebars';
import templateSource from '../../../source/templates/03-Components/file/file.hbs?raw';

const renderFile = Handlebars.compile(templateSource);

export default {
  title: 'Components/File',
  render: () => `<div class="au-body au-grid">${renderFile({})}</div>`,
};

export const Default = {};
