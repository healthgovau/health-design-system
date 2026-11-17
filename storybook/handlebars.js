/* eslint import/no-extraneous-dependencies: "off", import/no-unresolved: "off" */

import Handlebars from "handlebars";
import labelMandatoryTemplate from "../style-guide/components/01-components/form-controls/label-mandatory/label-mandatory.hbs?raw";

const handlebars = Handlebars.create();

handlebars.registerPartial("@label-mandatory", labelMandatoryTemplate);

export function compileTemplate(source) {
  return handlebars.compile(source);
}

export function getVariantArgs(component, name) {
  const variant = component.variants.find((item) => item.name === name);

  if (!variant) {
    throw new Error(`Unknown ${component.title} variant: ${name}`);
  }

  return {
    ...component.context,
    ...variant.context,
  };
}

export function pagePreview(html) {
  return `<div class="au-body au-grid">${html}</div>`;
}
