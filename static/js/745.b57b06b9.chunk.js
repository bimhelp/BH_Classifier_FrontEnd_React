"use strict";(self.webpackChunkclassifier=self.webpackChunkclassifier||[]).push([[745],{7745:(e,r,o)=>{o.r(r),o.d(r,{default:()=>v});var i=o(2791),s=o(7111),l=o(5705),a=o(8007),d=o(3535);const n="LoginForm_label__F7sLE";var t=o(2978),c=o(1087);const m=(0,t.ZP)(l.l0)`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`,p=t.ZP.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`,h=(0,t.ZP)(l.gN)`
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
`,x=(0,t.ZP)(c.OL)`
  color: ${e=>e.theme.colors.black};
  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hover};
  }
`,u=(t.ZP.label``,t.ZP.div`
  color: ${e=>e.theme.colors.invalid};
  position: absolute;
  right: 0;
`),b=t.ZP.div`
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
`;var g=o(6272),j=o(1012),w=o(184);const f=()=>{const{onLogIn:e}=(0,i.useContext)(j.g),r=a.Ry().shape({email:a.Z_().email("Invalid email").required("Required"),password:a.Z_().required("No password provided.").min(6,"Password is too short - should be 6 chars minimum.")});return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(l.J9,{initialValues:{email:"",password:""},validationSchema:r,onSubmit:(r,o)=>{const{resetForm:i}=o;e(r),i()},children:e=>(0,w.jsxs)(m,{children:[(0,w.jsx)("h2",{children:"LogIn"}),(0,w.jsxs)(p,{children:[(0,w.jsx)("label",{htmlFor:"email",className:n,children:"Email"}),(0,w.jsx)(h,{name:"email",type:"email",id:"email",autoFocus:!0,bordercolor:(0,g.No)(e.errors.email,e.values.email,"rgb(0, 0, 0)")}),(0,w.jsx)(l.Bc,{name:"email",render:e=>(0,w.jsx)(u,{children:e})})]}),(0,w.jsxs)(p,{children:[(0,w.jsx)("label",{htmlFor:"password",className:n,children:"Password"}),(0,w.jsx)(h,{name:"password",type:"password",id:"password",bordercolor:(0,g.No)(e.errors.password,e.values.password,"rgb(0, 0, 0)")}),(0,w.jsx)(l.Bc,{name:"password",render:e=>(0,w.jsx)(u,{children:e})})]}),(0,w.jsxs)(b,{children:[(0,w.jsx)(d.zx,{type:"submit",children:"LogIn"}),(0,w.jsx)(x,{to:"/registration",children:"Registration"})]})]})})})},v=()=>(0,w.jsx)(s.Z,{children:(0,w.jsx)(f,{})})}}]);
//# sourceMappingURL=745.b57b06b9.chunk.js.map