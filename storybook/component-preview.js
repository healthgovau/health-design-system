import Handlebars from "handlebars";
import previewSource from "../style-guide/components/_preview-page.hbs?raw";

const sources = import.meta.glob(
  "../style-guide/components/01-components/**/*.hbs",
  { eager: true, query: "?raw", import: "default" },
);
const configs = import.meta.glob(
  "../style-guide/components/01-components/**/*.config.json",
  { eager: true, import: "default" },
);
const handlebars = Handlebars.create();
const components = new Map();

function slug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function handleFor(path) {
  return path
    .split("/")
    .pop()
    .replace(/\.hbs$|\.config\.json$/g, "")
    .replace(/^_/, "")
    .replace(/^\d+-/, "");
}

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

Object.entries(sources).forEach(([path, source]) => {
  components.set(handleFor(path), {
    template: handlebars.compile(source),
    context: {},
  });
});

Object.entries(configs).forEach(([path, config]) => {
  const handle = handleFor(path);
  const component = components.get(handle);
  if (!component) {
    throw new Error(`Missing template for ${handle}`);
  }
  component.context = config.context || {};
  components.forEach((entry, entryHandle) => {
    if (entryHandle.startsWith(`${handle}--`)) {
      entry.context = config.context || {};
    }
  });
  (config.variants || []).forEach((variant) => {
    const variantHandle = `${handle}--${slug(variant.name)}`;
    const templateHandle = variant.view
      ? handleFor(variant.view)
      : variantHandle;
    const template = components.get(templateHandle);
    if (variant.view && !template) {
      throw new Error(`Missing template: ${variant.view}`);
    }
    components.set(variantHandle, {
      template: (template || component).template,
      context: mergeContext(config.context, variant.context),
    });
  });
});

// The legacy dark header references this variant without configuring it.
components.set("main-nav--dark", {
  ...components.get("main-nav"),
  context: { modifier: "au-main-nav--dark" },
});

function getComponent(handle) {
  const component = components.get(handle.replace(/^@/, ""));
  if (!component) {
    throw new Error(`Unknown component: ${handle}`);
  }
  return component;
}

components.forEach((component, handle) => {
  handlebars.registerPartial(`@${handle}`, (context, options) =>
    component.template(mergeContext(component.context, context), options),
  );
});

export function renderComponent(handle, context = {}) {
  const component = getComponent(handle);
  return component.template(mergeContext(component.context, context));
}

handlebars.registerHelper(
  "render",
  (handle, options) =>
    new Handlebars.SafeString(renderComponent(handle, options.hash)),
);
handlebars.registerHelper("path", function assetPath(path) {
  return handlebars.compile(path)(this);
});

const renderPreview = handlebars.compile(previewSource);

export function componentStory(handle, overrides = {}) {
  const component = getComponent(handle);
  return {
    args: mergeContext(component.context, overrides),
    render: (args) => {
      const frame = document.createElement("iframe");
      frame.title = `${handle} component preview`;
      frame.style.cssText =
        "width: 100%; height: 600px; border: 0; display: block";
      frame.srcdoc = renderPreview({ yield: component.template(args) });
      return frame;
    },
  };
}
