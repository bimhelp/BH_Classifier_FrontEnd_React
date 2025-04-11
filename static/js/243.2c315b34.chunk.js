"use strict";(self.webpackChunkclassifier=self.webpackChunkclassifier||[]).push([[243],{9366:(e,r,o)=>{o.d(r,{Fg:()=>d,Gq:()=>n,II:()=>t,Mf:()=>c,SP:()=>i,eK:()=>m});var a=o(2978),s=o(1087),l=o(5705);const n=(0,a.ZP)(l.l0)`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`,i=a.ZP.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`,t=(0,a.ZP)(l.gN)`
  background-color: ${e=>e.theme.colors.backgroundWhite};
  border: ${e=>e.theme.borders.bold};
  border-color: ${e=>{let{bordercolor:r}=e;return r}};
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
    border-color: ${e=>{let{bordercolor:r}=e;return r}};
  }
`,d=(0,a.ZP)(s.OL)`
  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hover};
  }
`,m=a.ZP.div`
  color: ${e=>e.theme.colors.invalid};
  position: absolute;
  right: 0;
`,c=a.ZP.div`
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
`},9243:(e,r,o)=>{o.r(r),o.d(r,{default:()=>x});var a=o(2791),s=o(7111),l=o(1012),n=o(5705),i=o(8007),t=o(6272),d=o(3535),m=o(9662),c=o(9366),p=o(184);const h=()=>{const{onRegister:e}=(0,a.useContext)(l.g),r=i.Ry().shape({name:i.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),lastName:i.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),company:i.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),jobRole:i.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:i.Z_().email("Invalid email").required("Required"),phone:i.Z_().matches(/^\d+$/,"Invalid phone number").min(10,"Too short phone number").max(15,"Too long phone number").required("Required"),password:i.Z_().min(6,"Your password is short").max(16,"Your password is to long").matches(/[1-9]/,"Your password is little secure. Add a number!").matches(/[a-z\u0430-\u044fA-Z\u0410-\u042f\u0456\u0457\u0407\u0406\u0454\u0404]/,"Your password is little secure. Add a letter!").matches(/^[a-z\u0430-\u044fA-Z\u0410-\u042f\u0456\u0457\u0407\u0406\u0404\u04541-9]/,"Enter a valid Password*").required("Enter a Password*")});return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(n.J9,{initialValues:{name:"",email:"",password:""},validationSchema:r,onSubmit:(r,o)=>{const{resetForm:a}=o;e(r),a()},children:e=>(0,p.jsxs)(c.Gq,{children:[(0,p.jsx)("h2",{children:"Registration"}),(0,p.jsxs)(c.SP,{children:[(0,p.jsx)("label",{htmlFor:"name",className:m.Z.label,children:"Name"}),(0,p.jsx)(c.II,{name:"name",type:"text",id:"name",autoFocus:!0,bordercolor:(0,t.No)(e.errors.name,e.values.name,"rgb(0, 0, 0)")}),(0,p.jsx)(n.Bc,{name:"name",render:e=>(0,p.jsx)(c.eK,{children:e})})]}),(0,p.jsxs)(c.SP,{children:[(0,p.jsx)("label",{htmlFor:"lastName",className:m.Z.label,children:"Last Name"}),(0,p.jsx)(c.II,{name:"lastName",type:"text",id:"lastName",bordercolor:(0,t.No)(e.errors.lastName,e.values.lastName,"rgb(0, 0, 0)")}),(0,p.jsx)(n.Bc,{name:"lastName",render:e=>(0,p.jsx)(c.eK,{children:e})})]}),(0,p.jsxs)(c.SP,{children:[(0,p.jsx)("label",{htmlFor:"company",className:m.Z.label,children:"Company"}),(0,p.jsx)(c.II,{name:"company",type:"text",id:"company",bordercolor:(0,t.No)(e.errors.company,e.values.company,"rgb(0, 0, 0)")}),(0,p.jsx)(n.Bc,{name:"company",render:e=>(0,p.jsx)(c.eK,{children:e})})]}),(0,p.jsxs)(c.SP,{children:[(0,p.jsx)("label",{htmlFor:"jobRole",className:m.Z.label,children:"Job Role"}),(0,p.jsx)(c.II,{name:"jobRole",type:"text",id:"jobRole",bordercolor:(0,t.No)(e.errors.jobRole,e.values.jobRole,"rgb(0, 0, 0)")}),(0,p.jsx)(n.Bc,{name:"jobRole",render:e=>(0,p.jsx)(c.eK,{children:e})})]}),(0,p.jsxs)(c.SP,{children:[(0,p.jsx)("label",{htmlFor:"phone",className:m.Z.label,children:"Phone"}),(0,p.jsx)(c.II,{name:"phone",type:"phone",id:"phone",bordercolor:(0,t.No)(e.errors.phone,e.values.phone,"rgb(0, 0, 0)")}),(0,p.jsx)(n.Bc,{name:"phone",render:e=>(0,p.jsx)(c.eK,{children:e})})]}),(0,p.jsxs)(c.SP,{children:[(0,p.jsx)("label",{htmlFor:"email",className:m.Z.label,children:"Email"}),(0,p.jsx)(c.II,{name:"email",type:"email",id:"email",bordercolor:(0,t.No)(e.errors.email,e.values.email,"rgb(0, 0, 0)")}),(0,p.jsx)(n.Bc,{name:"email",render:e=>(0,p.jsx)(c.eK,{children:e})})]}),(0,p.jsxs)(c.SP,{children:[(0,p.jsx)("label",{htmlFor:"password",className:m.Z.label,children:"Password"}),(0,p.jsx)(c.II,{name:"password",type:"password",id:"password",bordercolor:(0,t.No)(e.errors.password,e.values.password,"rgb(0, 0, 0)")}),(0,p.jsx)(n.Bc,{name:"password",render:e=>(0,p.jsx)(c.eK,{children:e})})]}),(0,p.jsxs)(c.Mf,{children:[(0,p.jsx)(d.zx,{type:"submit",children:"Send"}),(0,p.jsx)(c.Fg,{to:"/login",children:"LogIn"})]})]})})})},x=()=>(0,p.jsx)(s.Z,{children:(0,p.jsx)(h,{})})},9662:(e,r,o)=>{o.d(r,{Z:()=>a});const a={formWrapper:"RegistrationForm_formWrapper__9O7CZ",form:"RegistrationForm_form__c8X43",inputWrapper:"RegistrationForm_inputWrapper__GNlbh",label:"RegistrationForm_label__zrkEU",input:"RegistrationForm_input__EgGQR",submitBtn:"RegistrationForm_submitBtn__12JmY",loginBtn:"RegistrationForm_loginBtn__WMC6w"}}}]);
//# sourceMappingURL=243.2c315b34.chunk.js.map