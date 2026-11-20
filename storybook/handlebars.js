/* eslint import/no-extraneous-dependencies: "off", import/no-unresolved: "off" */

import Handlebars from "handlebars";
import sharedPartials from "./partials";

function mergeContext(base = {}, overrides = {}) {
  const result = { ...base };
  Object.entries(overrides).forEach(([key, value]) => {
    result[key] =
      value && typeof value === "object" && !Array.isArray(value)
        ? mergeContext(base[key], value)
        : value;
  });
  return result;
}

export function compileTemplate(source, partials = {}) {
  const handlebars = Handlebars.create();
  handlebars.registerPartial({ ...sharedPartials, ...partials });
  handlebars.registerHelper("path", function assetPath(path) {
    return handlebars.compile(path)(this);
  });

  return handlebars.compile(source);
}

export function getVariantArgs(component, name) {
  const variant = component.variants.find((item) => item.name === name);

  if (!variant) {
    throw new Error(`Unknown ${component.title} variant: ${name}`);
  }

  return mergeContext(component.context, variant.context);
}

export function pagePreview(html) {
  return `<div class="au-body au-grid">${html}</div>`;
}
