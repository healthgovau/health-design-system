import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,c as n,i as r,n as i,o as a,r as o,s,t as c}from"./decorators-Cwvm-Fuv.js";var l,u,d,f,p;function m(){return(m=e((()=>{r(),i(),n(),a(),l={title:`Components/Card`,decorators:c,argTypes:{card:{class:{control:`text`},title:{control:`text`},content:{control:`text`},date:{control:`text`},tag:{control:`text`}}},tags:[`autodocs`],render:e=>o(s)(e.card)},u={args:{card:{class:``,title:`Card Title`,content:`Card content goes here.`,date:`2024-06-05`,tag:`Tag`}}},d={args:{...u.args,card:{class:``,title:`Card Title`,content:`Card content goes here.`,date:`2024-06-05`,tag:`Tag`}},render:e=>o(t)(e.card)},f={args:{...u.args,card:{title:`Nemo enim ipsam voluptatem quia voluptas sit aspernatur`,date:`20 July 2019`,tag:`News`,content:`This card presents image and body side-by-side.`,class:`health-card--horizontal`}}},p=[`Default`,`CardWithoutImage`,`CardHorizontal`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    card: {
      class: "",
      title: "Card Title",
      content: "Card content goes here.",
      date: "2024-06-05",
      tag: "Tag"
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    card: {
      class: "",
      title: "Card Title",
      content: "Card content goes here.",
      date: "2024-06-05",
      tag: "Tag"
    }
  },
  render: args => {
    const template = compileTemplate(cardNoImageTemplate);
    return template(args.card);
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    card: {
      title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
      date: "20 July 2019",
      tag: "News",
      content: "This card presents image and body side-by-side.",
      class: "health-card--horizontal"
    }
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as CardHorizontal,d as CardWithoutImage,u as Default,p as __namedExportsOrder,l as default};