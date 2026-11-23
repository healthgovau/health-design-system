/**
 * Contains shared Handlebars partials for the project.
 *
 * These partials provide a mapping between partial names and their corresponding Handlebars templates.
 */
import labelMandatoryTemplate from "../source/templates/03-Components/form-controls/label-mandatory/label-mandatory.hbs?raw";
import imageTemplate from "../source/templates/03-Components/image/image.hbs?raw";
import loadingTemplate from "../source/templates/03-Components/_loading/loading.hbs?raw";
import videoPreviewTemplate from "../source/templates/03-Components/video/video--preview.hbs?raw";
import cardTemplate from "../source/templates/03-Components/card/card.hbs?raw";
import cardWithoutImageTemplate from "../source/templates/03-Components/card/card--no-image.hbs?raw";
import callToActionListTemplate from "../source/templates/03-Components/link/link--call-to-action-list.hbs?raw";
import metadataTemplate from "../source/templates/03-Components/supplementary-content/metadata/metadata.hbs?raw";
import listingPublicationTemplate from "../source/templates/03-Components/listing/_listing-publication.hbs?raw";
import listingVideoTemplate from "../source/templates/03-Components/listing/_listing-video.hbs?raw";
import subNavTemplate from "../source/templates/03-Components/page-regions/_sub-nav/sub-nav.hbs?raw";
import searchTemplate from "../source/templates/03-Components/search/search.hbs?raw";
import mainNavTemplate from "../source/templates/06-Navigation/main-nav/main-nav.hbs?raw";
import breadcrumbTemplate from "../source/templates/06-Navigation/breadcrumb/breadcrumb.hbs?raw";
import toolbarTemplate from "../source/templates/03-Components/toolbar/toolbar.hbs?raw";

const sharedPartials = {
  "@label-mandatory": labelMandatoryTemplate,
  "@image": imageTemplate,
  "@loading": loadingTemplate,
  "@video--preview": videoPreviewTemplate,
  "@card": cardTemplate,
  "@card--without-image": cardWithoutImageTemplate,
  "@card--horizontal": cardTemplate,
  "@link--call-to-action-list": callToActionListTemplate,
  "@metadata": metadataTemplate,
  "@listing-publication": listingPublicationTemplate,
  "@listing-video": listingVideoTemplate,
  "@sub-nav": subNavTemplate,
  "@search": searchTemplate,
  "@main-nav": mainNavTemplate,
  "@breadcrumb": breadcrumbTemplate,
  "@toolbar": toolbarTemplate,
};

export default sharedPartials;
