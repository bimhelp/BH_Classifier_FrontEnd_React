"use strict";(self.webpackChunkclassifier=self.webpackChunkclassifier||[]).push([[675],{6675:(e,r,o)=>{o.r(r),o.d(r,{default:()=>b});var t=o(2791),s=o(6655),c=o(2564),a=o(2978),l=o(1087);const n=(0,a.ZP)(l.OL)`
  display: block;
  padding: ${e=>e.theme.space[3]}px;
  margin-bottom: ${e=>e.theme.space[3]}px;

  border: ${e=>e.theme.borders.bold};
  border-radius: ${e=>e.theme.radii.normal};
  background-color: ${e=>e.theme.colors.primary};

  /* text-transform: uppercase; */
  font-size: 16px;
  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.white};
    border-color: ${e=>e.theme.colors.black};
    background-color: ${e=>e.theme.colors.hover};
  }
`;var i=o(7111),d=o(7689),h=o(184);const m=e=>{let{items:r}=e;const o=(0,d.TH)();return(0,h.jsx)(i.Z,{children:0===r.length?(0,h.jsx)("p",{children:"\u0423 \u0432\u0430\u0441 \u0449\u0435 \u043d\u0435\u043c\u0430\u0454 \u043f\u0440\u043e\u0435\u043a\u0442\u0456\u0432"}):(0,h.jsx)("ul",{children:r.map((e=>(0,h.jsx)("li",{children:(0,h.jsx)(n,{to:`${e._id}`,state:{from:o},children:e.Title})},e._id)))})})};var u=o(334);const b=()=>{const[e,r]=(0,t.useState)([]),[o,a]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const e=new AbortController;return async function(){try{a(!0);const o=await(0,s.mW)(e.signal);r(o.data)}catch(o){c.Am.error("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443")}finally{a(!1)}}(),()=>{r([]),e.abort()}}),[]),(0,t.useEffect)((()=>{console.log("isLoading",o)}),[o]),(0,h.jsx)(h.Fragment,{children:o?(0,h.jsx)(u.Z,{color:"#125b56",width:"100%"}):(0,h.jsx)(m,{items:e})})}}}]);
//# sourceMappingURL=675.b80896f0.chunk.js.map