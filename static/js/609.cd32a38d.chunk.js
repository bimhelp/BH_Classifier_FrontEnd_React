"use strict";(self.webpackChunkclassifier=self.webpackChunkclassifier||[]).push([[609],{9366:(e,o,r)=>{r.d(o,{Fg:()=>d,Gq:()=>t,II:()=>s,Mf:()=>c,SP:()=>i,eK:()=>m});var n=r(2978),a=r(1087),l=r(5705);const t=(0,n.ZP)(l.l0)`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`,i=n.ZP.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`,s=(0,n.ZP)(l.gN)`
  background-color: ${e=>e.theme.colors.backgroundWhite};
  border: ${e=>e.theme.borders.bold};
  border-color: ${e=>{let{bordercolor:o}=e;return o}};
  border-radius: ${e=>e.theme.radii.normal};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  /* padding: 12px 12px 12px 40px; */
  padding: 4px;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 480px) {
    font-size: 14px;
    padding: 8px;
  }

  &:hover,
  &:focus {
    border: ${e=>e.theme.borders.bold};
    /* background-color: ${e=>e.theme.colors.backgroundWhite}; */
    border-color: ${e=>{let{bordercolor:o}=e;return o}};
  }
`,d=(0,n.ZP)(a.OL)`
  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hover};
  }
`,m=n.ZP.div`
  color: ${e=>e.theme.colors.invalid};
  position: absolute;
  right: 0;
`,c=n.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 20px;
  @media screen and (min-width: 480px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`},1609:(e,o,r)=>{r.r(o),r.d(o,{default:()=>u});var n=r(2791),a=r(7111),l=r(7689),t=r(1012),i=r(9787),s=r(5705),d=r(8007),m=r(7345),c=r(3535),p=r(9662),h=r(9366),x=r(184);const b=()=>{const{onCompleteRegistration:e,setToken:o}=(0,n.useContext)(t.g),{userId:r}=(0,l.UO)(),a=(0,l.TH)(),b=d.Ry().shape({lastName:d.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),company:d.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),jobRole:d.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),phone:d.Z_().matches(/^\d+$/,"Invalid phone number").min(10,"Too short phone number").max(15,"Too long phone number").required("Required")});(0,n.useEffect)((()=>{const e=new URLSearchParams(a.search).get("token");console.log("tokenParam: ",e),e&&(o(e),i.r.set(e))}),[a,o]);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(s.J9,{initialValues:{lastName:"",company:"",jobRole:"",phone:""},validationSchema:b,onSubmit:(o,n)=>{const{resetForm:a}=n,l={userId:r,...o};e(l),a()},children:e=>(0,x.jsxs)(h.Gq,{children:[(0,x.jsx)("h2",{children:"Complete registration"}),(0,x.jsxs)(h.SP,{children:[(0,x.jsx)("label",{htmlFor:"lastName",className:p.Z.label,children:"Last Name"}),(0,x.jsx)(h.II,{name:"lastName",type:"text",id:"lastName",bordercolor:(0,m.No)(e.errors.lastName,e.values.lastName,"rgb(0, 0, 0)")}),(0,x.jsx)(s.Bc,{name:"lastName",render:e=>(0,x.jsx)(h.eK,{children:e})})]}),(0,x.jsxs)(h.SP,{children:[(0,x.jsx)("label",{htmlFor:"company",className:p.Z.label,children:"Company"}),(0,x.jsx)(h.II,{name:"company",type:"text",id:"company",bordercolor:(0,m.No)(e.errors.company,e.values.company,"rgb(0, 0, 0)")}),(0,x.jsx)(s.Bc,{name:"company",render:e=>(0,x.jsx)(h.eK,{children:e})})]}),(0,x.jsxs)(h.SP,{children:[(0,x.jsx)("label",{htmlFor:"jobRole",className:p.Z.label,children:"Job Role"}),(0,x.jsx)(h.II,{name:"jobRole",type:"text",id:"jobRole",bordercolor:(0,m.No)(e.errors.jobRole,e.values.jobRole,"rgb(0, 0, 0)")}),(0,x.jsx)(s.Bc,{name:"jobRole",render:e=>(0,x.jsx)(h.eK,{children:e})})]}),(0,x.jsxs)(h.SP,{children:[(0,x.jsx)("label",{htmlFor:"phone",className:p.Z.label,children:"Phone"}),(0,x.jsx)(h.II,{name:"phone",type:"phone",id:"phone",bordercolor:(0,m.No)(e.errors.phone,e.values.phone,"rgb(0, 0, 0)")}),(0,x.jsx)(s.Bc,{name:"phone",render:e=>(0,x.jsx)(h.eK,{children:e})})]}),(0,x.jsx)(h.Mf,{children:(0,x.jsx)(c.zx,{type:"submit",children:"Send"})})]})})})},u=()=>(0,x.jsx)(a.Z,{children:(0,x.jsx)(b,{})})},9662:(e,o,r)=>{r.d(o,{Z:()=>n});const n={formWrapper:"RegistrationForm_formWrapper__9O7CZ",form:"RegistrationForm_form__c8X43",inputWrapper:"RegistrationForm_inputWrapper__GNlbh",label:"RegistrationForm_label__zrkEU",input:"RegistrationForm_input__EgGQR",submitBtn:"RegistrationForm_submitBtn__12JmY",loginBtn:"RegistrationForm_loginBtn__WMC6w"}}}]);
//# sourceMappingURL=609.cd32a38d.chunk.js.map