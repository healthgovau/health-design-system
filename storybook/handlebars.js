/* eslint import/no-extraneous-dependencies: "off", import/no-unresolved: "off" */

import Handlebars from "handlebars";
import labelMandatoryTemplate from "../style-guide/components/01-components/form-controls/label-mandatory/label-mandatory.hbs?raw";
import imageTemplate from "../style-guide/components/01-components/image/image.hbs?raw";
import loadingTemplate from "../style-guide/components/01-components/_loading/loading.hbs?raw";
import videoPreviewTemplate from "../style-guide/components/01-components/video/video--preview.hbs?raw";
import cardTemplate from "../style-guide/components/01-components/card/card.hbs?raw";
import cardWithoutImageTemplate from "../style-guide/components/01-components/card/card--no-image.hbs?raw";
import callToActionListTemplate from "../style-guide/components/01-components/link/link--call-to-action-list.hbs?raw";
import metadataTemplate from "../style-guide/components/01-components/supplementary-content/metadata/metadata.hbs?raw";
import listingPublicationTemplate from "../style-guide/components/01-components/_listing-publication.hbs?raw";
import listingVideoTemplate from "../style-guide/components/01-components/_listing-video.hbs?raw";
import subNavTemplate from "../style-guide/components/01-components/page-regions/_sub-nav/sub-nav.hbs?raw";
import searchTemplate from "../style-guide/components/01-components/search/search.hbs?raw";
import mainNavTemplate from "../style-guide/components/01-components/navigation/main-nav/main-nav.hbs?raw";
import breadcrumbTemplate from "../style-guide/components/01-components/navigation/breadcrumb/breadcrumb.hbs?raw";
import toolbarTemplate from "../style-guide/components/01-components/toolbar/toolbar.hbs?raw";

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
  handlebars.registerPartial("@image", imageTemplate);
  handlebars.registerPartial("@loading", loadingTemplate);
  handlebars.registerPartial("@video--preview", videoPreviewTemplate);
  handlebars.registerPartial("@card", cardTemplate);
  handlebars.registerPartial("@card--without-image", cardWithoutImageTemplate);
  handlebars.registerPartial(
    "@link--call-to-action-list",
    callToActionListTemplate,
  );
  handlebars.registerPartial("@metadata", metadataTemplate);
  handlebars.registerPartial(
    "@listing-publication",
    listingPublicationTemplate,
  );
  handlebars.registerPartial("@listing-video", listingVideoTemplate);
  handlebars.registerPartial("@sub-nav", subNavTemplate);
  handlebars.registerPartial("@search", searchTemplate);
  handlebars.registerPartial("@main-nav", mainNavTemplate);
  handlebars.registerPartial("@breadcrumb", breadcrumbTemplate);
  handlebars.registerPartial("@toolbar", toolbarTemplate);
  handlebars.registerPartial(partials);
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
