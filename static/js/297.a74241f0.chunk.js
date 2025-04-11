"use strict";(self.webpackChunkclassifier=self.webpackChunkclassifier||[]).push([[297],{4297:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var s=r(2791),i=r(7689),n=r(6655),d=r(5985),o=r(7111),c=r(334),l=r(2978),h=r(1087);const a=(0,l.ZP)(h.OL)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.space[2]}px;
  margin-bottom: 15px;

  min-width: 100px;
  /* margin: ${e=>e.theme.space[2]}px; */
  padding-top: ${e=>e.theme.space[2]}px;
  padding-bottom: ${e=>e.theme.space[2]}px;
  padding-left: ${e=>e.theme.space[3]}px;
  padding-right: ${e=>e.theme.space[3]}px;

  border: ${e=>e.theme.borders.bold};
  border-radius: ${e=>e.theme.radii.normal};

  background-color: ${e=>e.disabled?e.theme.colors.muted:e.theme.colors.backgroundWhite};
  font-size: ${e=>e.theme.fontSizes.m};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    cursor: pointer;
    color: ${e=>e.theme.colors.white};
    border-color: ${e=>e.theme.colors.black};
    background-color: ${e=>e.theme.colors.hover};
  }
`,x=l.ZP.table`
  border-collapse: collapse;

  & caption {
    text-align: left;
  }

  & th,
  & td {
    padding: 2px 10px;
    border: 1px solid #2a2a2a;
  }

  & tr:hover {
    /* background-color: ${e=>e.theme.colors.white}; */
    /* box-shadow: ${e=>e.theme.shadows.shadow}; */
  }
`,j=l.ZP.tr`
  background-color: bisque;
`,p=l.ZP.tr`
  background-color: ${e=>e.theme.colors.backgroundMain};
`,m=l.ZP.tr`
  background-color: ${e=>e.theme.colors.backgroundMain};
`,u=l.ZP.td`
  white-space: nowrap;
  /* width: 100px; */
`;l.ZP.ul`
  margin-left: ${e=>e.theme.space[4]}px;

  /* border-left: 2px solid; */
`,l.ZP.li`
  /* margin-bottom: ${e=>e.theme.space[1]}px; */
  &:hover,
  &:focus {
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-bottom: ${e=>e.theme.space[1]}px;
  }
`,l.ZP.div`
  display: flex;
  justify-content: space-between;
`;var b=r(4330),g=r(2187),f=r(4316),P=r(657),$=r(184);const w=()=>{const{id:e}=(0,i.UO)(),[t,r]=(0,s.useState)(null),[l,h]=(0,s.useState)(!1),w=(0,i.TH)();return(0,s.useEffect)((()=>{const t=new AbortController;return async function(e){try{h(!0);const s=await(0,n.Rp)(e,t.signal);r(s.data)}catch(s){d.Am.error("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u043f\u0440\u043e\u0435\u043a\u0442")}finally{h(!1)}}(e),()=>{r(null),t.abort()}}),[e]),(0,$.jsxs)(o.Z,{children:[l&&(0,$.jsx)(c.Z,{color:"#125b56",width:"100%"}),t&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(a,{to:w.state.from,children:[(0,$.jsx)(b.D_,{}),"\u0414\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0456\u0432"]}),(0,$.jsx)("h2",{children:t.Title}),(0,$.jsx)("div",{children:(0,$.jsxs)(x,{children:[(0,$.jsx)("caption",{children:"\u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438 \u0456 \u043f\u043e\u0441\u043b\u0443\u0433\u0438 \u0434\u0430\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443"}),(0,$.jsx)("thead",{children:(0,$.jsxs)("tr",{children:[(0,$.jsx)("th",{}),(0,$.jsx)("th",{children:"\u041a\u043e\u0434"}),(0,$.jsx)("th",{children:"\u041e\u043f\u0438\u0441"}),(0,$.jsx)("th",{children:"\u0426\u0456\u043d\u0430 \u0440\u0438\u043d\u043a\u043e\u0432\u0430"}),(0,$.jsx)("th",{children:"\u0426\u0456\u043d\u0430 \u0432 \u0434\u0430\u043d\u043e\u043c\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0456"}),(0,$.jsx)("th",{children:"\u041e\u0434\u0438\u043d\u0438\u0446\u0456"}),(0,$.jsx)("th",{children:"\u0412\u0438\u0442\u0440\u0430\u0442\u0430"}),(0,$.jsx)("th",{children:"\u0412\u0438\u0442\u0440\u0430\u0442\u0430 \u0432 \u0434\u0430\u043d\u043e\u043c\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0456"})]})}),(0,$.jsxs)("tbody",{children:[t.Services&&t.Services.map((e=>{var t;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(j,{children:[(0,$.jsx)("td",{children:(0,$.jsx)(g.zlV,{})}),(0,$.jsx)(u,{children:e.Code}),(0,$.jsx)("td",{children:e.DescriptionUA}),(0,$.jsx)("td",{children:e.PriceUAH}),(0,$.jsx)("td",{children:e.PriceInProject}),(0,$.jsx)("td",{children:e.Unit}),(0,$.jsx)("td",{children:e.Consumption}),(0,$.jsx)("td",{children:e.ConsumptionInProject})]},e._id),(null===(t=e.Materials)||void 0===t?void 0:t.length)>0&&e.Materials.map((e=>(0,$.jsxs)(p,{children:[(0,$.jsx)("td",{children:(0,$.jsx)(P.x3W,{})}),(0,$.jsx)("td",{children:e.Code}),(0,$.jsx)("td",{children:e.DescriptionUA}),(0,$.jsx)("td",{children:e.PriceUAH}),(0,$.jsx)("td",{children:e.PriceInProject}),(0,$.jsx)("td",{children:e.Unit}),(0,$.jsx)("td",{children:e.Consumption}),(0,$.jsx)("td",{children:e.ConsumptionInProject})]},e._id)))]})})),t.Materials&&t.Materials.map((e=>(0,$.jsxs)(m,{children:[(0,$.jsx)("td",{children:(0,$.jsx)(f.DWn,{})}),(0,$.jsx)(u,{children:e.Code}),(0,$.jsx)("td",{children:e.DescriptionUA}),(0,$.jsx)("td",{children:e.PriceUAH}),(0,$.jsx)("td",{children:e.PriceInProject}),(0,$.jsx)("td",{children:e.Unit}),(0,$.jsx)("td",{children:e.Consumption}),(0,$.jsx)("td",{children:e.ConsumptionInProject})]},e._id)))]})]})})]})]})}}}]);
//# sourceMappingURL=297.a74241f0.chunk.js.map