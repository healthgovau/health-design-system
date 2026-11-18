import Handlebars from 'handlebars';
import templateSource from '../../../style-guide/components/01-components/file/file.hbs?raw';

const renderFile = Handlebars.compile(templateSource);

export default {
  title: 'Components/File',
  render: () => `<div class="au-body au-grid">${renderFile({})}</div>`,
};

export const Default = {};
