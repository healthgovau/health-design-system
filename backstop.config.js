
let scenarios = [];
const components = [
  {
    label: "Colours",
    url: "http://localhost:3000/components/preview/colour-palette/"
  },
  {
    label: "Typograph - Abbreviations",
    url: "http://localhost:3000/components/preview/abbreviations/"
  },
  {
    label: "Typograph - Definition list",
    url: "http://localhost:3000/components/preview/definition-list/"
  },
  {
    label: "Typograph - Headings",
    url: "http://localhost:3000/components/preview/headings/"
  },
  {
    label: "Typograph - Icons",
    url: "http://localhost:3000/components/preview/icons"
  },
  {
    label: "Typograph - Lists - Default",
    url: "http://localhost:3000/components/preview/lists--default/"
  },
  {
    label: "Typograph - Lists - Large",
    url: "http://localhost:3000/components/preview/lists--large/"
  },
  {
    label: "Typograph - Lists - Large plain",
    url: "http://localhost:3000/components/preview/lists--large-plain/"
  },
  {
    label: "Typograph - Lists - Checklist",
    url: "http://localhost:3000/components/preview/lists--checklist/"
  },
  {
    label: "Typograph - Paragraph - Default",
    url: "http://localhost:3000/components/preview/paragraph--default/"
  },
  {
    label: "Typograph - Paragraph - Introduction",
    url: "http://localhost:3000/components/preview/paragraph--introduction/"
  },
  {
    label: "Typograph - Paragraph - Introduction dark",
    url: "http://localhost:3000/components/preview/paragraph--introduction---dark/"
  },
  {
    label: "Typograph - Paragraph - Minor",
    url: "http://localhost:3000/components/preview/paragraph--minor/"
  },
  {
    label: "Typograph - Paragraph - Align right",
    url: "http://localhost:3000/components/preview/paragraph--align-right/"
  },
  {
    label: "Typograph - Paragraph - Align center",
    url: "http://localhost:3000/components/preview/paragraph--align-center/"
  },
  {
    label: "Accordion - Default",
    url: "http://localhost:3000/components/preview/accordion--default/"
  },
  {
    label: "Accordion - Small",
    url: "http://localhost:3000/components/preview/accordion--small/"
  },
  {
    label: "Back to top",
    url: "http://localhost:3000/components/preview/back-to-top/"
  },
  {
    label: "Band - Default",
    url: "http://localhost:3000/components/preview/band--default/"
  },
  {
    label: "Band - Hotline",
    url: "http://localhost:3000/components/preview/band--hotline/"
  },
  {
    label: "Band - Card image",
    url: "http://localhost:3000/components/preview/band--cards-image/"
  },
  {
    label: "Band - Cards call to action",
    url: "http://localhost:3000/components/preview/band--cards-call-to-action/"
  },
  {
    label: "Band - Cards audience",
    url: "http://localhost:3000/components/preview/band--cards-audience/"
  },
  {
    label: "Band - Cards resources",
    url: "http://localhost:3000/components/preview/band--cards-resources/"
  },
  {
    label: "Band - Cards image vertical",
    url: "http://localhost:3000/components/preview/band--cards-image-vertical/"
  },
  {
    label: "Band - Featured",
    url: "http://localhost:3000/components/preview/band--featured/"
  },
  {
    label: "Band - Image text horizontal",
    url: "http://localhost:3000/components/preview/band--image-text-horizontal/"
  },
  {
    label: "Band - Video listing",
    url: "http://localhost:3000/components/preview/band--video-listing/"
  },
  {
    label: "Band - Statistics",
    url: "http://localhost:3000/components/preview/band--statistics/"
  },
  {
    label: "Book navigation",
    url: "http://localhost:3000/components/preview/book-nav/"
  },
  {
    label: "Breadcrumb",
    url: "http://localhost:3000/components/preview/breadcrumb/"
  },
  {
    label: "Callout - Default",
    url: "http://localhost:3000/components/preview/callout--default/"
  },
  {
    label: "Callout - Colour secondary",
    url: "http://localhost:3000/components/preview/callout--colour---secondary/"
  },
  {
    label: "Callout - Colour tertiary",
    url: "http://localhost:3000/components/preview/callout--colour---tertiary/"
  },
  {
    label: "Callout - Colour success",
    url: "http://localhost:3000/components/preview/callout--colour---success/"
  },
  {
    label: "Callout - Simple",
    url: "http://localhost:3000/components/preview/callout--simple/"
  },
  {
    label: "Card - Image",
    url: "http://localhost:3000/components/preview/card--image/"
  },
  {
    label: "Card - Resource",
    url: "http://localhost:3000/components/preview/card--resource/"
  },
  {
    label: "Card - Full image",
    url: "http://localhost:3000/components/preview/card--full-image/"
  },
  {
    label: "Card - Call to action",
    url: "http://localhost:3000/components/preview/card--call-to-action/"
  },
  {
    label: "Card - Audience",
    url: "http://localhost:3000/components/preview/card--audience/"
  },
  {
    label: "Card - Image vertical",
    url: "http://localhost:3000/components/preview/card--image-vertical/"
  },
  {
    label: "Compare",
    url: "http://localhost:3000/components/preview/compare/"
  },
  {
    label: "Facet",
    url: "http://localhost:3000/components/preview/facet/"
  },
  {
    label: "Field - Default",
    url: "http://localhost:3000/components/preview/field--default/"
  },
  {
    label: "Field - Label light",
    url: "http://localhost:3000/components/preview/field--label-light/"
  },
  {
    label: "Field - Inline",
    url: "http://localhost:3000/components/preview/field--inline/"
  },
  {
    label: "Field - Inline wide",
    url: "http://localhost:3000/components/preview/field--inline---wide/"
  },
  {
    label: "Field - No label",
    url: "http://localhost:3000/components/preview/field--no-label/"
  },
  {
    label: "Figure",
    url: "http://localhost:3000/components/preview/figure/"
  },
  {
    label: "File",
    url: "http://localhost:3000/components/preview/file/"
  },
  {
    label: "Filter",
    url: "http://localhost:3000/components/preview/filter/"
  },
  {
    label: "Footer",
    url: "http://localhost:3000/components/preview/footer/"
  },
  {
    label: "Footnotes",
    url: "http://localhost:3000/components/preview/footnotes/"
  },
  {
    label: "Form - Button - Default",
    url: "http://localhost:3000/components/preview/button--default/"
  },
  {
    label: "Form - Button - Secondary",
    url: "http://localhost:3000/components/preview/button--secondary/"
  },
  {
    label: "Form - Button - Tertiary",
    url: "http://localhost:3000/components/preview/button--tertiary/"
  },
  {
    label: "Form - Checkboxes - Default",
    url: "http://localhost:3000/components/preview/checkboxes--default/"
  },
  {
    label: "Form - Checkboxes - Error",
    url: "http://localhost:3000/components/preview/checkboxes--error/"
  },
  {
    label: "Form - Label - Mandatory",
    url: "http://localhost:3000/components/preview/label-mandatory/"
  },
  {
    label: "Form - Radios - Default",
    url: "http://localhost:3000/components/preview/radios--default/"
  },
  {
    label: "Form - Radios - Error",
    url: "http://localhost:3000/components/preview/radios--error/"
  },
  {
    label: "Form - Select - Default",
    url: "http://localhost:3000/components/preview/select--default/"
  },
  {
    label: "Form - Select - Error",
    url: "http://localhost:3000/components/preview/select--error/"
  },
  {
    label: "Form - Text - Default",
    url: "http://localhost:3000/components/preview/text--default/"
  },
  {
    label: "Form - Text - Error",
    url: "http://localhost:3000/components/preview/text--error/"
  },
  {
    label: "Form - Text - Counter",
    url: "http://localhost:3000/components/preview/text--counter/"
  },
  {
    label: "Form - Text area - Default",
    url: "http://localhost:3000/components/preview/text-area--default/"
  },
  {
    label: "Form - Text area - Error",
    url: "http://localhost:3000/components/preview/text-area--error/"
  },
  {
    label: "Form - Text area - Counter",
    url: "http://localhost:3000/components/preview/text-area--counter/"
  },
  {
    label: "Header - Default",
    url: "http://localhost:3000/components/preview/header--default/"
  },
  {
    label: "Header - Aligned",
    url: "http://localhost:3000/components/preview/header--aligned/"
  },
  {
    label: "Header - Simple",
    url: "http://localhost:3000/components/preview/header--simple/"
  },
  {
    label: "Hero - Default",
    url: "http://localhost:3000/components/preview/hero--default/"
  },
  {
    label: "Hero - Call to action",
    url: "http://localhost:3000/components/preview/hero--call-to-action/"
  },
  {
    label: "Image - Default",
    url: "http://localhost:3000/components/preview/image--default/"
  },
  {
    label: "Image - Border",
    url: "http://localhost:3000/components/preview/image--border/"
  },
  {
    label: "Image - Link",
    url: "http://localhost:3000/components/preview/image--link/"
  },
  {
    label: "Image - Border link",
    url: "http://localhost:3000/components/preview/image--border-link/"
  },
  {
    label: "Inline reference - Default",
    url: "http://localhost:3000/components/preview/inline-reference--default/"
  },
  {
    label: "Inline reference - Contact",
    url: "http://localhost:3000/components/preview/inline-reference--contact/"
  },
  {
    label: "Inline reference - Video",
    url: "http://localhost:3000/components/preview/inline-reference--video/"
  },
  {
    label: "Inpage nav - Default",
    url: "http://localhost:3000/components/preview/inpage-nav--default/"
  },
  {
    label: "Inpage nav - Dynamic",
    url: "http://localhost:3000/components/preview/inpage-nav--dynamic/"
  },
  {
    label: "Listing - Default",
    url: "http://localhost:3000/components/preview/listing--default/"
  },
  {
    label: "Listing - Compact",
    url: "http://localhost:3000/components/preview/listing--compact/"
  },
  {
    label: "Loading - Default",
    url: "http://localhost:3000/components/preview/loading--default/"
  },
  {
    label: "Loading - Small",
    url: "http://localhost:3000/components/preview/loading--small/"
  },
  {
    label: "Loading - Search",
    url: "http://localhost:3000/components/preview/loading--search/"
  },
  {
    label: "Main navigation",
    url: "http://localhost:3000/components/preview/main-nav/"
  },
  {
    label: "Metadata",
    url: "http://localhost:3000/components/preview/metadata/"
  },
  {
    label: "Page alerts - Default",
    url: "http://localhost:3000/components/preview/page-alerts--default/"
  },
  {
    label: "Page alerts - Success",
    url: "http://localhost:3000/components/preview/page-alerts--success/"
  },
  {
    label: "Page alerts - Warning",
    url: "http://localhost:3000/components/preview/page-alerts--warning/"
  },
  {
    label: "Page alerts - Error",
    url: "http://localhost:3000/components/preview/page-alerts--error/"
  },
  {
    label: "Pager",
    url: "http://localhost:3000/components/preview/pager/"
  },
  {
    label: "Recommendation - Default",
    url: "http://localhost:3000/components/preview/recommendation--default/"
  },
  {
    label: "Recommendation - Grade A",
    url: "http://localhost:3000/components/preview/recommendation--grade-a/"
  },
  {
    label: "Recommendation - Grade B",
    url: "http://localhost:3000/components/preview/recommendation--grade-b/"
  },
  {
    label: "Recommendation - Grade C",
    url: "http://localhost:3000/components/preview/recommendation--grade-c/"
  },
  {
    label: "Recommendation - Grade D",
    url: "http://localhost:3000/components/preview/recommendation--grade-d/"
  },
  {
    label: "Recommendation - Grade evidence based",
    url: "http://localhost:3000/components/preview/recommendation--grade---evidence-based/"
  },
  {
    label: "Recommendation - Grade qualified evidence based",
    url: "http://localhost:3000/components/preview/recommendation--grade---qualified-evidence-based/"
  },
  {
    label: "Recommendation - Grade consensus based",
    url: "http://localhost:3000/components/preview/recommendation--grade---consensus-based/"
  },
  {
    label: "References",
    url: "http://localhost:3000/components/preview/references/"
  },
  {
    label: "Release status - Default",
    url: "http://localhost:3000/components/preview/release-status--default/"
  },
  {
    label: "Release status - Beta",
    url: "http://localhost:3000/components/preview/release-status--beta/"
  },
  {
    label: "Release status - Launch",
    url: "http://localhost:3000/components/preview/release-status--launch/"
  },
  {
    label: "Search",
    url: "http://localhost:3000/components/preview/search/"
  },
  {
    label: "Search result",
    url: "http://localhost:3000/components/preview/search-result/"
  },
  {
    label: "Separator",
    url: "http://localhost:3000/components/preview/separator/"
  },
  {
    label: "Side nav",
    url: "http://localhost:3000/components/preview/side-nav/"
  },
  {
    label: "Spacing - Default",
    url: "http://localhost:3000/components/preview/spacing--default/"
  },
  {
    label: "Spacing - Standard gap",
    url: "http://localhost:3000/components/preview/spacing--standard-gap/"
  },
  {
    label: "Spacing - Standard gap mobile only",
    url: "http://localhost:3000/components/preview/spacing--standard-gap---mobile-only/"
  },
  {
    label: "Spacing - Standard gap bottom",
    url: "http://localhost:3000/components/preview/spacing--standard-gap---bottom/"
  },
  {
    label: "Sub header - Content",
    url: "http://localhost:3000/components/preview/sub-header--content/"
  },
  {
    label: "Sub header - Campaign",
    url: "http://localhost:3000/components/preview/sub-header--campaign/"
  },
  {
    label: "Sub nav",
    url: "http://localhost:3000/components/preview/sub-nav/"
  },
  {
    label: "Subtitle",
    url: "http://localhost:3000/components/preview/subtitle/"
  },
  {
    label: "Table",
    url: "http://localhost:3000/components/preview/table/"
  },
  {
    label: "Tabs",
    url: "http://localhost:3000/components/preview/tabs/"
  },
  {
    label: "Toolbar",
    url: "http://localhost:3000/components/preview/toolbar/"
  },
  {
    label: "Tooltip",
    url: "http://localhost:3000/components/preview/tooltip/"
  },
  {
    label: "Video - Default",
    url: "http://localhost:3000/components/preview/video--default/"
  },
  {
    label: "Video - Preview",
    url: "http://localhost:3000/components/preview/video--preview/"
  },
  {
    label: "Campaign page",
    url: "http://localhost:3000/components/preview/campaign-page/"
  },
  {
    label: "Content page",
    url: "http://localhost:3000/components/preview/content-page/"
  },
  {
    label: "Fields page",
    url: "http://localhost:3000/components/preview/fields-page/"
  },
  {
    label: "Form page - Default",
    url: "http://localhost:3000/components/preview/form-page--default/"
  },
  {
    label: "Form page - Error",
    url: "http://localhost:3000/components/preview/form-page--error/"
  },
  {
    label: "Landing page",
    url: "http://localhost:3000/components/preview/landing-page/"
  },
  {
    label: "Listing page",
    url: "http://localhost:3000/components/preview/listing-page/"
  },
  {
    label: "Search page",
    url: "http://localhost:3000/components/preview/search-page/"
  },
];

components.forEach(component => {
  const scenario = {
    "label": component.label,
    "cookiePath": "backstop_data/engine_scripts/cookies.json",
    "url": component.url,
    "referenceUrl": "",
    "readyEvent": "",
    "readySelector": "",
    "delay": 0,
    "hideSelectors": [],
    "removeSelectors": [],
    "hoverSelector": "",
    "clickSelector": "",
    "postInteractionWait": 0,
    "selectors": [],
    "selectorExpansion": true,
    "expect": 0,
    "misMatchThreshold" : 0.1,
    "requireSameDimensions": true
  };

  scenarios.push(scenario);
});

const config = {
  "id": "backstop_default",
  "viewports": [
    {
      "label": "phone",
      "width": 320,
      "height": 480
    },
    {
      "label": "desktop",
      "width": 1920,
      "height": 1080
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": scenarios,
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["ci"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}

module.exports = config;