"use strict";(self.webpackChunkclassifier=self.webpackChunkclassifier||[]).push([[592],{9966:(e,t,r)=>{r.d(t,{Z:()=>m});var s=r(2791),n=r(2978);const a=n.ZP.form`
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
`,o=n.ZP.input`
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
`;var l=r(3535),d=r(2187),c=r(4330),u=r(5985),b=r(334),h=r(184);const m=e=>{let{submit:t,isLoading:r,back:n,isSubmiting:m}=e;const[x,y]=(0,s.useState)(""),j=e=>{e.preventDefault(),x.trim().length<1?u.Am.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442 \u0432 \u043f\u043e\u043b\u0435 \u043f\u043e\u0448\u0443\u043a\u0443"):t(x.trim())};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(a,{onSubmit:j,children:[(0,h.jsx)(l.xE,{icon:c.Zyb,type:"button",onClick:()=>{y(""),n()}}),(0,h.jsx)(i,{children:(0,h.jsx)(o,{name:"search",type:"text",onChange:e=>{const t=e.currentTarget.value.toLowerCase();y(t)},value:x})}),(0,h.jsx)(l.QZ,{icon:d.eaK,type:"submit",onClick:j,disabled:m})]}),r&&(0,h.jsx)(b.Z,{color:"#125b56",width:"100%"})]})}},1870:(e,t,r)=>{r.d(t,{Z:()=>i});r(2791);var s=r(5479),n=r(4154),a=r(184);const i=e=>{let{results:t,query:r,variant:i,byId:o}=e;return"material"===i?(0,a.jsx)("div",{children:t.length>0&&(0,a.jsx)(s.Z,{items:t,query:r,byId:o})}):"service"===i?(0,a.jsx)("div",{children:t.length>0&&(0,a.jsx)(n.Z,{items:t,query:r,byId:o})}):void 0}},9592:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var s=r(2791),n=r(5479),a=r(9787),i=r(5985),o=r(334),l=r(2978);const d=l.ZP.div`
  /* outline: 2px solid red; */
  margin-left: -${e=>e.theme.space[3]}px;
`;var c=r(3073),u=r(184);const b=e=>{let{byId:t}=e;const[r,l]=(0,s.useState)([]),[b,h]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const e=new AbortController;return async function(){try{h(!0);const t=await(0,a.H0)(2,e.signal);l(t.data)}catch{i.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443")}finally{h(!1)}}(),()=>{l([]),e.abort()}}),[l]),(0,u.jsx)(u.Fragment,{children:b?(0,u.jsx)(o.Z,{color:"#125b56",width:"100%"}):(0,u.jsxs)(d,{children:[(0,u.jsx)(n.Z,{items:r,style:{padding:0},byId:t}),(0,u.jsx)(c.Z,{})]})})};var h=r(7111),m=r(9966),x=r(1870),y=r(6334),j=r(6655);const f=l.ZP.div`
  max-height: 85vh;
`,p=l.ZP.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,g=()=>{const[e,t]=(0,s.useState)([]),[r,o]=(0,s.useState)([]),[l,d]=(0,s.useState)(null),[c,g]=(0,s.useState)(null),[v,Z]=(0,s.useState)(""),[w,S]=(0,s.useState)(!1),[$,k]=(0,s.useState)([]),[C,I]=(0,s.useState)("materials");(0,s.useEffect)((()=>{o((()=>l?e.filter((e=>e.Unit===l)):e))}),[c,e,l]);const A=e=>{I("oneMaterial");const t=new AbortController;return async function(e){try{const r=await(0,a.J2)(e,t.signal);k([r.data])}catch{i.Am.error("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b")}}(e),()=>{t.abort()}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h.Z,{children:(0,u.jsxs)(p,{children:[(0,u.jsx)(m.Z,{submit:e=>{I("search");const r=(0,j.Nk)(e),s=(0,j.p3)(e);if(r){async function n(e){S(!0),t([]);try{const r=await(0,a.Pk)(e);r&&(t(r.data),g((0,j.ej)(r.data)))}catch{i.Am.error(`\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u043d\u0430\u0439\u0442\u0438 ${e}`,{autoClose:3e3})}finally{S(!1)}}Z(e),n(e)}else{async function o(r){S(!0),t([]);try{const e=await(0,a.M4)(r);e&&(t(e.data),g((0,j.ej)(e.data)))}catch{i.Am.error(`\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u043d\u0430\u0439\u0442\u0438 ${e}`,{autoClose:3e3})}finally{S(!1)}}o(s)}},isLoading:w,back:()=>{t([]),o([]),d(null),I("materials")},isSubmiting:w}),(0,u.jsx)("div",{style:{minWidth:"20%"},children:(null===e||void 0===e?void 0:e.length)>0&&(0,u.jsx)(y.Z,{onSelect:e=>{d(e.value)},options:c})})]})}),(0,u.jsx)(h.Z,{children:(0,u.jsxs)(f,{children:["materials"===C&&(0,u.jsx)(b,{byId:A}),"oneMaterial"===C&&(0,u.jsx)(n.Z,{items:$,byId:A}),"search"===C&&(0,u.jsx)(x.Z,{results:r,query:v,variant:"material",byId:A})]})})]})}}}]);
//# sourceMappingURL=592.2febb7f7.chunk.js.map