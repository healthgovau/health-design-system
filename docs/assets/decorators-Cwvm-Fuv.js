import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./handlebars-C5Vx0QDQ.js";var r;function i(){return(i=t((()=>{r=`<span class="form-required">(mandatory)</span>`})))()}var a;function o(){return(o=t((()=>{a=`
{{#if image.modifier}}
  <div class="{{image.modifier}}">
{{/if}}
{{#if image.link}}
  <a href="#">
{{/if}}
  <div class="image-outer">
    <div class="image-placeholder" style="max-width: {{image.width}}px;">
      <div style="padding-top: {{image.ratio}}%;"></div>
    </div>
    <div class="image-wrapper image-loading">
      <div class="image">
        <img width="{{image.width}}" height="{{image.height}}" data-src="{{ path image.url}}">
      </div>
    </div>
  </div>

{{#if image.link}}
  </a>
{{/if}}
{{#if image.modifier}}
  </div>
{{/if}}`})))()}var s;function c(){return(c=t((()=>{s=`<div class="health-loading{{#if loading.active}} health-loading--active{{/if}}{{#if modifier}} {{modifier}}{{/if}}"></div>`})))()}var l;function u(){return(u=t((()=>{l=`<div class="health-video">
  <div class="health-video__preview">
    {{> @image image=image }}
    <div class="health-video__preview__length health-video__preview__length--small">
      <span class="svg-inline--fa">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>
      </span>
      3:35
    </div>
  </div>
</div>`})))()}var d;function f(){return(f=t((()=>{d=`<div class="health-card health-card--clickable health-card--shadow {{card.class}}">
  {{! <div class="health-card__header">
    <p>Header</p>
  </div> }}
  <div class="health-card__image">
    <img src="/images/picsum-867-1280x720.jpg" />
  </div>
  <div class="health-card__body">
    <h2 class="health-card__title">
      <a class="health-card__link" href="#">{{card.title}}</a>
    </h2>
    <div class="health-card__text">
      <p>{{card.content}}</p>
    </div>
    <div class="health-card__date">{{card.date}}</div>
    <div class="health-card__tag">{{card.tag}}</div>
  </div>
  {{! <div class="health-card__footer">
    <p>Footer</p>
  </div> }}
</div>`})))()}var p;function m(){return(m=t((()=>{p=`<div class="health-card health-card--clickable health-card--shadow {{class}}">
  {{! <div class="health-card__header">
    <p>Header</p>
  </div> }}
  <div class="health-card__body">
    <h2 class="health-card__title">
      <a class="health-card__link" href="#">{{card.title}}</a>
    </h2>
    <div class="health-card__text">
      <p>{{card.content}}</p>
    </div>
    <div class="health-card__date">{{card.date}}</div>
    <div class="health-card__tag">{{card.tag}}</div>
  </div>
  {{! <div class="health-card__footer">
    <p>Footer</p>
  </div> }}
</div>`})))()}var h;function g(){return(g=t((()=>{h=`<ul class="list--cta-links">
  <li><a href="#" class="list--cta-links__link">Link one</a></li>
  <li><a href="#" class="list--cta-links__link">Link two</a></li>
  <li><a href="#" class="list--cta-links__link">Link three</a></li>
  <li><a href="#" class="list--cta-links__link">Link four</a></li>
  <li><a href="#" class="list--cta-links__link">Link five</a></li>
  <li><a href="#" class="list--cta-links__link">Link with a longer title to
      cause wrapping</a></li>
</ul>`})))()}var _;function v(){return(v=t((()=>{_=`<div class="health-metadata health-metadata--inline au-display-sm--text">
  <div class="health-field health-field--label-hidden">
    <div class="health-field__item">3 April 2019</div>
  </div>
  <div class="health-field health-field--label-hidden">
    <div class="health-field__item">Factsheet</div>
  </div>
</div>`})))()}var y;function b(){return(b=t((()=>{y=`<div class="row">
  <div class=" col-xs-3">
    {{> @image image=image }}
  </div>

  <div class="col-xs-9">
    <h2 class="au-display-lg"><a href="#">Why the Tyrannosaurus is the best</a></h2>
    {{> @metadata }}
    <div class="health-field health-field--label-hidden">
      <div class="health-field__item">
        Tyrannosaurus is a genus of coelurosaurian theropod dinosaur. The species Tyrannosaurus rex (rex meaning
        "king" in Latin), often called T. rex or colloquially T-Rex, is one of the most well-represented of the
        large theropods.
      </div>
    </div>
  </div>
</div>`})))()}var x;function S(){return(S=t((()=>{x=`<div class="row">
  <div class=" col-xs-3">
    {{> @video--preview image=image }}
  </div>

  <div class="col-xs-9">
    <h2 class="au-display-lg"><a href="#">Tyrannosaurus</a></h2>
    {{> @metadata }}
    <div class="health-field health-field--label-hidden">
      <div class="health-field__item">
        Tyrannosaurus is a genus of coelurosaurian theropod dinosaur. The species Tyrannosaurus rex (rex meaning
        "king" in Latin), often called T. rex or colloquially T-Rex, is one of the most well-represented of the
        large theropods.
      </div>
    </div>
  </div>
</div>`})))()}var C;function w(){return(w=t((()=>{C=`<div class="health-sub-nav text--align-right">
  <h3 class="au-sronly">Sub menu</h3>
  <ul class="au-link-list au-link-list--inline">
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
  </ul>
</div>`})))()}var T;function E(){return(E=t((()=>{T=`<div class="health-search{{#if search.global}} health-search--global{{/if}}">
  <form class="au-form">
    <div class="health-search__form__input-wrapper">
      <div class="au-form__item">
        <label class="au-sronly" for="search-field">Search</label>
        <input placeholder="{{search.placeholder}}"
               class="health-search__form__input au-text-input au-text-input au-text-input--block ui-autocomplete-input"
               size="30" type="text" id="{{search.id}}" name="funnelback_search_field" value=""
               maxlength="128" autocomplete="off">
      </div>
      {{> @loading searchLoading }}
    </div>
    <input class="health-search__form__submit au-btn au-btn" type="submit" name="submit" value="Search">
  </form>
</div>

<script language="JavaScript">
  $(document).ready(function () {
    health.searchAutocomplete('#{{search.id}}', dinosaurData);
  });
<\/script>`})))()}var D;function O(){return(O=t((()=>{D=`<nav class="au-main-nav {{# if modifier }} {{ modifier }}{{/ if }}" aria-label="main">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="main-nav-default" class="au-main-nav__content">
          <button aria-controls="main-nav-default" class="au-main-nav__toggle au-main-nav__toggle--open" onclick="return AU.mainNav.Toggle( this )">
            <span class="svg-inline--fa fa-fw">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
            </span>
            Menu
          </button>
          <button class="au-main-nav__toggle au-main-nav__toggle--search au-main-nav__toggle--open">
            <span class="svg-inline--fa fa-fw au-main-nav__toggle--search__closed">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
            </span>
            <span class="svg-inline--fa fa-fw au-main-nav__toggle--search__open">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
            </span>
            Search
          </button>
          <div class="au-main-nav__menu">
            <div class="au-main-nav__menu-inner">
              <div class="au-main-nav__focus-trap-top"></div>
              <button aria-controls="main-nav-default" class="au-main-nav__toggle au-main-nav__toggle--close"
                onclick="return AU.mainNav.Toggle( this )">
                <span class="svg-inline--fa fa-fw">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                </span>
                Close
              </button>
              <ul class="au-link-list">
                <li class="active"><a href="#" aria-current="page">Home</a></li>
                <li><a href="#">Dinosaurs</a></li>
                <li><a href="#">Interesting facts</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
              <div class="au-main-nav__focus-trap-bottom"></div>
            </div>
          </div>
          <div class="au-main-nav__overlay" aria-controls="main-nav-default" onclick="return AU.mainNav.Toggle( this )">
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>`})))()}var k;function A(){return(A=t((()=>{k=`<nav class="au-breadcrumbs" aria-label="Breadcrumb">
  <h2 class="au-sronly">You are here</h2>
  <ol class="au-link-list au-link-list--inline">
    <li><a href="#">Home</a></li>
    <li><a href="#">Dinosaurs</a></li>
    <li><a href="#">Theropods</a></li>
  </ol>
</nav>
`})))()}var j;function M(){return(M=t((()=>{j=`<div class="health-toolbar">
  <ul class="health-toolbar__items au-link-list au-link-list--inline">
    <li>
      <button id="health-toolbar__listen" href="#" class="au-btn au-btn--tertiary">
        <span class="svg-inline--fa fa-fw fa-left">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z">
            </path>
          </svg>
        </span>Listen
      </button>
    </li>
    <li>
      <button id="health-toolbar__print" class="au-btn au-btn--tertiary">
        <span class="svg-inline--fa fa-fw fa-left">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
            </path>
          </svg>
        </span>Print
      </button>
    </li>
    <li>
      <button id="health-toolbar__share" class="au-btn au-btn--tertiary">
        <span class="svg-inline--fa fa-fw fa-left">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z">
            </path>
          </svg>
        </span>Share
      </button>
      <div id="health-share-menu">
        <ul class="au-link-list">
          <li>
            <span class="svg-inline--fa fa-fw"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                </path>
              </svg></span>
            <a href="#">X (Twitter)</a>
          </li>
          <li>
            <span class="svg-inline--fa fa-fw"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                </path>
              </svg></span>
            <a href="#">Facebook</a>
          </li>
          <li>
            <span class="svg-inline--fa fa-fw"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                </path>
              </svg></span>
            <a href="#">Email</a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</div>

<div id="health-tooltip" class="health-tooltip">
    <div class="health-tooltip__content"></div>
</div>

<script language="JavaScript">
  (function ($) {
    $(document).ready(function() {
      var element = document.getElementById("health-toolbar__share");
      health.tooltip(element, {
        html: document.getElementById("health-share-menu").outerHTML,
        triggerOn: 'click'
      });
    });
  })(jQuery);
<\/script>
`})))()}var N;function P(){return(P=t((()=>{i(),o(),c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A(),M(),N={"@label-mandatory":r,"@image":a,"@loading":s,"@video--preview":l,"@card":d,"@card--without-image":p,"@card--horizontal":d,"@link--call-to-action-list":h,"@metadata":_,"@listing-publication":y,"@listing-video":x,"@sub-nav":C,"@search":T,"@main-nav":D,"@breadcrumb":k,"@toolbar":j}})))()}function F(e,t={}){let n=I.default.create();return n.registerPartial({...N,...t}),n.registerHelper(`path`,function(e){return n.compile(e)(this)}),n.compile(e)}var I;function L(){return(L=t((()=>{I=e(n()),P()})))()}var R,z;function B(){return(B=t((()=>{R=e=>`
  <div class="au-body au-grid">
    <div class="container">
      <div class="row">
        ${e()}
      </div>
    </div>
  </div>
`,z=[R]})))()}export{p as a,f as c,a as d,o as f,L as i,u as l,B as n,m as o,F as r,d as s,z as t,l as u};