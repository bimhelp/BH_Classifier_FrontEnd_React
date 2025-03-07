"use strict";(self.webpackChunkclassifier=self.webpackChunkclassifier||[]).push([[678],{2678:(e,o,r)=>{r.r(o),r.d(o,{default:()=>W});var i=r(2791),A=r(7111),l=r(5705),a=r(8007),n=r(3535);const s="LoginForm_label__F7sLE";var d=r(2978),t=r(1087);const c=(0,d.ZP)(l.l0)`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`,g=d.ZP.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`,h=(0,d.ZP)(l.gN)`
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
`,p=(0,d.ZP)(t.OL)`
  color: ${e=>e.theme.colors.black};
  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hover};
  }
`,x=(d.ZP.label``,d.ZP.div`
  color: ${e=>e.theme.colors.invalid};
  position: absolute;
  right: 0;
`),m=d.ZP.div`
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
`;var b=r(7345),u=r(1012),w=r(184);const Z=()=>{const{onLogIn:e}=(0,i.useContext)(u.g),o=a.Ry().shape({email:a.Z_().email("Invalid email").required("Required"),password:a.Z_().required("No password provided.").min(6,"Password is too short - should be 6 chars minimum.")});return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(l.J9,{initialValues:{email:"",password:""},validationSchema:o,onSubmit:(o,r)=>{const{resetForm:i}=r;e(o),i()},children:e=>(0,w.jsxs)(c,{children:[(0,w.jsx)("h2",{children:"LogIn"}),(0,w.jsxs)(g,{children:[(0,w.jsx)("label",{htmlFor:"email",className:s,children:"Email"}),(0,w.jsx)(h,{name:"email",type:"email",id:"email",autoFocus:!0,bordercolor:(0,b.No)(e.errors.email,e.values.email,"rgb(0, 0, 0)")}),(0,w.jsx)(l.Bc,{name:"email",render:e=>(0,w.jsx)(x,{children:e})})]}),(0,w.jsxs)(g,{children:[(0,w.jsx)("label",{htmlFor:"password",className:s,children:"Password"}),(0,w.jsx)(h,{name:"password",type:"password",id:"password",bordercolor:(0,b.No)(e.errors.password,e.values.password,"rgb(0, 0, 0)")}),(0,w.jsx)(l.Bc,{name:"password",render:e=>(0,w.jsx)(x,{children:e})})]}),(0,w.jsxs)(m,{children:[(0,w.jsx)(n.zx,{type:"submit",children:"LogIn"}),(0,w.jsx)(p,{to:"/registration",children:"Registration"})]})]})})})},j=d.ZP.a`
  position: absolute;
  top: 30px;
  padding: 2px;
  height: 33px;
  background-color: rgb(255, 255, 255);
  width: 106px;
  box-shadow: lightgray 0px 1px;
  cursor: pointer;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 18px;
  color: rgb(92, 108, 117);
  border-radius: 5px;
  border: none;
  right: 9px;

  &:before {
    content: "";
    display: inline-block;
    margin-left: 0px;
    margin-right: 5px;
    width: 32px;
    height: 32px;
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAACdgAAAnYB2mDjTwAABTFJREFUWMPll2uIVVUUx39rnzPnPmZGxxy9U46lppRY9prBMsjCUCnTwUmQgvxYFmSfypDASsOCkCBKgpIiK7ESH4RTmgqhgamghk4pho90xmYanfu+5+zVh3vnekdnnDuV9KH/l8vde+29/uu/1ll7b/i/QwZj3D69EcABokBNYb0CXUACsCO37/13CZQ4nQDMBBqA8UCsMB4A54DjwF7gW+BXICiHTL8E2qc3ggqITgaeAR4DRg1AWoHTwGZgNcYewhquRqTPzQpRh4GFwBJgzKB0zeME8CbwCZDqj8QVBArOq4FlwLMFIqXwgQ7gDHARGArcAAwH3MtsM8A7wCtAti8SvRa0T5uC5ghLhV0GPH/ZfBz4BtgE7Cef9xT5gowBdwNNwCygqiQlFwA7YAoy66v4fn4L9y1e+HT2SM0qfImU6LO/oMh3QLqvSErSNgN4FbgVWA683d+aXgSyW0NguZNAvs4cqB2b/nEkmnZAaAEWA63AVQuqQAJgEnB7Qa3kgEWY3RIm6AwbN5Z8F0cXoZBtrSH9Q91+//foE1JhWwf7fZcLF0A8i1uXvAWjj/bQ8m7tSrjXJ1/zJiVazz/X+I+cXA0GgAoL+dzdWJyxshXl29zRKNcqegCT+bIK/9hQA5SGaYHNZlg25TUlr5lzAFccizMiVYlwc8n4H2rZJ3r1Tj1zZRzyaYwVfnUAf0K+j7QBfsuSKlyJBAA1oHVFM5U2ck6bDrRdHjFgPVBfJoHTwHzyjQwX1/ZMmEtm2ikRP16mig75M2J0mfZaWJNPgfqSj9lRW+wKKrWaNtUgKciVuW95ENS6NldUytWUC8IFqfTbQMcUGMSkwtYhtJexZ1CQs+ducHm0YWBkYR5R216dvXBRCt3ZRcF2eXET9Y8hTBGUQMzwsxq9Z7QbP1gGgTbyOe2rCANH/YWBuCsuKcDRm7qPdZ+qGtvzH/wdLpozLxhjV3XYMOvS42hJ1W8+mRyyYJiTSe56asOgpZ63/CyOBtG4W73OijP7kuT+oowJrd72UgQoFF4qV4GFlu2ZUSdf7m7g4+QEztnIw0MqsrPjnqHhi+ZBOZ+5Mk7aiZBwq+eomOkl+T8pand5NlO0NQAf/jkR70z26PKuu7YcyNX2WEcyjiyN+DrJteV9jz2weIh6dwTiLlUkUnSm9quG87uPVuW6i7bFTjN17TxCOZ2cCJkNVhjXM+5Y3RHN6WLgUHfI8NOCr/p13PBFMyFf8Z3MZC/+4HuRrsfvlyAGWIza4+Eg2RSIc3jT0hG9FQAY25Fl5/iqg8BboqSKVWTkobhnPkt4pnlk3I809pOOKZ83E83aqG9YEEh4bap6z/2J2vdR7wiiNuXa3Mrt9bHD9Ynfeq3r1WvnfDAXL9DwqaHuisBIrxuRQMKxukOUTSrsqczatkAk7qhWZx1T5xvuDYw0WWEa+VsSYHFzI/xhHY+smnR87iudQ3/OfLT8tv4J9MioQrUb6DJrZJFC5DKTAOg0SrsKHaLUKsRUGFaqKIAoKS8I3k2HOl+HUPe++d9doVyfp82sD/NKnK90nwyMvGx7H1RlwSgnKgJ944YL/qdZV9Ibn97Yp53T1+CxTa2MbZroz/gleeDEdRXbrJEMQj0whDLeBY6yJpKzL848Et/623DP39yPcyjjZdT4eTNWMF6gE6zIA6BTVeQWhetVMKJYgXMCrSh7BN1VlbG/JD1jdz/59YBKDept+PCaJoakrYmHTGU8ZGoyjkgoUK3M2q5ITpMXwybY+Te65n+KvwAS3xduQ4AB3wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wNC0xOVQxMjo1MzozMSswMjowMEnXLlAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDQtMTlUMTI6NTM6MzErMDI6MDA4ipbsAAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTYtMDYtMTYgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3Jn5r80tgAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQANTEywNBQUQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1MTIcfAPcAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE0OTI1OTkyMTHpZDQWAAAAE3RFWHRUaHVtYjo6U2l6ZQAyMC4xS0JCGzm3QQAAAHN0RVh0VGh1bWI6OlVSSQBmaWxlOi8vLi91cGxvYWRzL2Nhcmxvc3ByZXZpL01TRjY2UEIvMTIyMi8xNDkyNjE2OTkwLTEtZ29vZ2xlLXNlYXJjaC1sb2dvLWVuZ2luZS1zZXJ2aWNlLXN1aXRzXzgzNDEyLnBuZ5iBIO4AAAAASUVORK5CYII="});
  }
`,T=()=>{const{onGoogleAuthenticate:e}=(0,i.useContext)(u.g);return(0,w.jsx)(j,{type:"button",onClick:e,children:"Google"})},W=()=>(0,w.jsxs)(A.Z,{children:[(0,w.jsx)(Z,{}),(0,w.jsx)(T,{})]})}}]);
//# sourceMappingURL=678.ca339d3a.chunk.js.map