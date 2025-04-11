"use strict";(self.webpackChunkclassifier=self.webpackChunkclassifier||[]).push([[377],{9966:(e,t,r)=>{r.d(t,{Z:()=>m});var s=r(2791),n=r(2978);const o=n.ZP.form`
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-bottom: ${e=>e.theme.space[2]}px;
  @media screen and (min-width: 680px) {
    width: 40%;
  }
`,i=n.ZP.label`
  width: 100%;
`,a=n.ZP.input`
  font-size: ${e=>e.theme.fontSizes.m};
  width: 100%;
  padding: 9px;
  box-sizing: border-box;
  border-top: ${e=>e.theme.borders.bold};
  border-bottom: ${e=>e.theme.borders.bold};
  border-left: ${e=>e.theme.borders.none};
  border-right: ${e=>e.theme.borders.none};
  text-decoration: none;
  &:focus {
    border-top: ${e=>e.theme.borders.bold};
    border-bottom: ${e=>e.theme.borders.bold};
    border-left: ${e=>e.theme.borders.none};
    border-right: ${e=>e.theme.borders.none};
  }
`;var c=r(3535),d=r(2187),l=r(4330),b=r(5985),h=r(334),u=r(184);const m=e=>{let{submit:t,isLoading:r,back:n,isSubmiting:m}=e;const[x,y]=(0,s.useState)(""),g=e=>{e.preventDefault(),x.trim().length<1?b.Am.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442 \u0432 \u043f\u043e\u043b\u0435 \u043f\u043e\u0448\u0443\u043a\u0443"):t(x.trim())};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(o,{onSubmit:g,children:[(0,u.jsx)(c.xE,{icon:l.Zyb,type:"button",onClick:()=>{y(""),n()}}),(0,u.jsx)(i,{children:(0,u.jsx)(a,{name:"search",type:"text",onChange:e=>{const t=e.currentTarget.value.toLowerCase();y(t)},value:x})}),(0,u.jsx)(c.QZ,{icon:d.eaK,type:"submit",onClick:g,disabled:m})]}),r&&(0,u.jsx)(h.Z,{color:"#125b56",width:"100%"})]})}},1870:(e,t,r)=>{r.d(t,{Z:()=>i});r(2791);var s=r(5479),n=r(4154),o=r(184);const i=e=>{let{results:t,query:r,variant:i,byId:a}=e;return"material"===i?(0,o.jsx)("div",{children:t.length>0&&(0,o.jsx)(s.Z,{items:t,query:r,byId:a})}):"service"===i?(0,o.jsx)("div",{children:t.length>0&&(0,o.jsx)(n.Z,{items:t,query:r,byId:a})}):void 0}},6377:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var s=r(2791),n=r(4154),o=r(9787),i=r(5985),a=r(334),c=r(2978);const d=c.ZP.div`
  /* outline: 2px solid red; */
  margin-left: -${e=>e.theme.space[3]}px;
`;var l=r(184);const b=e=>{let{byId:t}=e;const[r,c]=(0,s.useState)([]),[b,h]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const e=new AbortController;return async function(){try{h(!0);const t=await(0,o.Hi)(2,e.signal);c(t.data)}catch{i.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443")}finally{h(!1)}}(),()=>{c([]),e.abort()}}),[c]),(0,l.jsx)(l.Fragment,{children:b?(0,l.jsx)(a.Z,{color:"#125b56",width:"100%"}):(0,l.jsx)(d,{children:(0,l.jsx)(n.Z,{items:r,style:{padding:0},byId:t})})})};var h=r(7111),u=r(9966),m=r(6655);const x=c.ZP.div`
  max-height: 85vh;
`;var y=r(1870);const g=()=>{const[e,t]=(0,s.useState)([]),[r,a]=(0,s.useState)(""),[c,d]=(0,s.useState)(!1),[g,v]=(0,s.useState)("services"),[f,p]=(0,s.useState)([]),j=e=>{console.log("service id: ",e),v("oneService");const t=new AbortController;return async function(e){try{const r=await(0,o.a7)(e,t.signal);p([r.data])}catch{i.Am.error("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0441\u0435\u0440\u0432\u0456\u0441")}}(e),()=>{t.abort()}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.Z,{children:(0,l.jsx)(u.Z,{submit:e=>{v("search");const r=(0,m.Nk)(e),s=(0,m.p3)(e);if(r){async function n(e){d(!0),t([]);try{const r=await(0,o.Ti)(e);r&&t(r.data)}catch{i.Am.error(`\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u043d\u0430\u0439\u0442\u0438 ${e}`,{autoClose:3e3})}finally{d(!1)}}a(e),n(e)}else{async function c(r){d(!0),t([]);try{const e=await(0,o.qG)(r);e&&t(e.data)}catch{i.Am.error(`\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u043d\u0430\u0439\u0442\u0438 ${e}`,{autoClose:3e3})}finally{d(!1)}}c(s)}},isLoading:c,back:()=>{t([]),v("services")},isSubmiting:c})}),(0,l.jsx)(h.Z,{children:(0,l.jsxs)(x,{children:["services"===g&&(0,l.jsx)(b,{byId:j}),"oneService"===g&&(0,l.jsx)(n.Z,{items:f,byId:j}),"search"===g&&(0,l.jsx)(y.Z,{results:e,query:r,variant:"service",byId:j})]})})]})}}}]);
//# sourceMappingURL=377.ac805b19.chunk.js.map