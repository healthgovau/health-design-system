import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,n,r,t as i}from"./decorators-Cwvm-Fuv.js";var a;function o(){return(o=e((()=>{a=`<div class="health-band health-band--full-width-bg health-band--neutral">
  <div class="health-band__container">
    <h2>Neutral 1 full-width</h2>
    <p>Full-width band using the default neutral grey colour.</p>
  </div>
</div>

<div
  class="health-band health-band--full-width-bg health-band--neutral--darker"
>
  <div class="health-band__container">
    <h2>Neutral 2 full-width</h2>
    <p>Full-width band using the darker neutral grey colour.</p>
  </div>
</div>

<div class="health-band health-band--neutral">
  <div class="health-band__container">
    <h2>Neutral 1 contained</h2>
    <p>Container-width band using the neutral neutral grey colour.</p>
  </div>
</div>

<div class="health-band health-band--neutral--darker">
  <div class="health-band__container">
    <h2>Neutral 2 contained</h2>
    <p>Container-width band using the darker neutral grey colour.</p>
  </div>
</div>

<div class="health-band health-band--primary">
  <div class="health-band__container">
    <h2>Primary contained</h2>
    <p>Container-width band using the primary colour.</p>
  </div>
</div>

<div class="health-band health-band--secondary">
  <div class="health-band__container">
    <h2>Secondary contained</h2>
    <p>Container-width band using the secondary colour.</p>
  </div>
</div>

<div class="health-band health-band--tertiary">
  <div class="health-band__container">
    <h2>Tertiary contained</h2>
    <p>Container-width band using the tertiary colour.</p>
  </div>
</div>

<div class="health-band health-band--quaternary">
  <div class="health-band__container">
    <h2>Quaternary contained</h2>
    <p>Container-width band using the quaternary colour.</p>
  </div>
</div>
`})))()}var s;function c(){return(c=e((()=>{s=`<div class="health-band health-band--full-width-bg{{#if modifier}} health-band--{{ modifier }}{{/if}}">
  <div class="health-band__container">
    <h2>List of call-to-action cards</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-3">
        {{> @card--without-image card=card }}
      </div>
      <div class="col-xs-12 col-sm-3">
        {{> @card--without-image card=card }}
      </div>
      <div class="col-xs-12 col-sm-3">
        {{> @card--without-image card=card }}
      </div>
      <div class="col-xs-12 col-sm-3">
        {{> @card--without-image card=card }}
      </div>
    </div>
  </div>
</div>
`})))()}var l;function u(){return(u=e((()=>{l=`<div class="health-band{{#if modifier}} health-band--{{ modifier }}{{/if}} au-body au-body--dark">
  <div class="health-band__container">
    <div class="row">
      <div class="col-sm-4">
        <h2>{{ title }}</h2>
      </div>
      <div class="col-sm-8 standard-gap--mobile-only">
        <a href="tel:{{ number }}" class="au-display-lg au-display--inline">
          <span class="svg-inline--fa">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
          </span>
          {{ number }}
        </a>
        <p>
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</div>`})))()}var d;function f(){return(f=e((()=>{d=`<div class="health-band health-band--full-width-bg{{#if modifier}} health-band--{{ modifier }}{{/if}}">
  <div class="health-band__container">
    <h2>List of image (vertical) cards</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-4">
        {{> @card card=card }}
      </div>
      <div class="col-xs-12 col-sm-4">
        {{> @card card=card }}
      </div>
      <div class="col-xs-12 col-sm-4">
        {{> @card card=card }}
      </div>
    </div>
    <h2>List of image (horizontal) cards</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        {{> @card--horizontal card=horizontalCard }}
      </div>
      <div class="col-xs-12 col-sm-6">
        {{> @card--horizontal card=horizontalCard }}
      </div>
    </div>
    <div class="row standard-gap">
      <div class="col-xs-12 text--align-right">
        <a href="#" class="au-cta-link">All news</a>
      </div>
    </div>
  </div>
</div>
`})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{t(),n(),o(),c(),u(),f(),p={title:`Layouts/Band`,decorators:i,parameters:{layout:`fullscreen`},tags:[`autodocs`],render:e=>r(a)(e)},m={args:{title:`Band title`}},h={args:{...m.args,modifier:`primary`,title:`Dinosaur escape hotline`,number:`1800 671 811`,text:`Call us on 1800 671 811 if you spot a dinosaur on the loose.`},render:e=>r(l)(e)},g={args:{...m.args,title:`Latest news`,modifier:`neutral`,card:{title:`Nemo enim ipsam voluptatem quia voluptas sit aspernatur`,date:`20 July 2019`,tag:`News`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`},horizontalCard:{title:`Nemo enim ipsam voluptatem quia voluptas sit aspernatur`,date:`20 July 2019`,tag:`News`,content:`This card presents image and body side-by-side.`,class:`health-card--horizontal`}},render:e=>r(d)(e)},_={args:{...m.args,card:{title:`Nemo enim ipsam voluptatem quia voluptas sit aspernatur`,date:`20 July 2019`,tag:`News`,content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`}},render:e=>r(s)(e)},v=[`Default`,`Hotline`,`CardsImage`,`CardsCallToAction`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Band title"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    modifier: "primary",
    title: "Dinosaur escape hotline",
    number: "1800 671 811",
    text: "Call us on 1800 671 811 if you spot a dinosaur on the loose."
  },
  render: args => {
    const template = compileTemplate(bandHotlineTemplate);
    return template(args);
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: "Latest news",
    modifier: "neutral",
    card: {
      title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      date: "20 July 2019",
      tag: "News",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    horizontalCard: {
      title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      date: "20 July 2019",
      tag: "News",
      content: "This card presents image and body side-by-side.",
      class: "health-card--horizontal"
    }
  },
  render: args => {
    const template = compileTemplate(bandCardsImageTemplate);
    return template(args);
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    card: {
      title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      date: "20 July 2019",
      tag: "News",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    }
  },
  render: args => {
    const template = compileTemplate(bandCardsCallToActionTemplate);
    return template(args);
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as CardsCallToAction,g as CardsImage,m as Default,h as Hotline,v as __namedExportsOrder,p as default};