/* eslint import/no-extraneous-dependencies: "off", import/no-unresolved: "off" */

import Handlebars from "handlebars";
import labelMandatoryTemplate from "../style-guide/components/01-components/form-controls/label-mandatory/label-mandatory.hbs?raw";

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
  handlebars.registerPartial("@label-mandatory", labelMandatoryTemplate);
  Object.entries(partials).forEach(([name, render]) => {
    handlebars.registerPartial(name, render);
  });
  handlebars.registerHelper("render", (name, options) => {
    if (typeof partials[name] !== "function") {
      throw new Error(`Unknown rendered partial: ${name}`);
    }
    return new Handlebars.SafeString(partials[name](options.hash));
  });
  handlebars.registerHelper("path", function assetPath(path) {
    return handlebars.compile(path)(this);
  });
  return handlebars.compile(source);
}

export function storyPartial(meta, story) {
  const render = story.render || meta.render;
  if (typeof render !== "function") {
    throw new Error("A composed story must provide a render function.");
  }
  return (context = {}) => render(mergeContext(story.args, context));
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
