"use strict";(self.webpackChunkvocabbuilder=self.webpackChunkvocabbuilder||[]).push([[924],{6771:(A,n,e)=>{e.d(n,{Z:()=>i});e(2791);const i=e.p+"static/media/correct.a25809261aafd418fb0e80825e9754ba.svg"},2206:(A,n,e)=>{e.d(n,{Z:()=>i});e(2791);const i=e.p+"static/media/error.047fff7d13be1e7ac4877a1b342482fb.svg"},921:(A,n,e)=>{e.d(n,{Z:()=>i});e(2791);const i=e.p+"static/media/eye-off.5b79f6604c00caac7ff440292afb980e.svg"},8406:(A,n,e)=>{e.d(n,{Z:()=>i});e(2791);const i=e.p+"static/media/eye.561e8ec3e4f1072089624ee4031394db.svg"},8227:(A,n,e)=>{e.d(n,{n:()=>r});var i=e(2791),a=e(184);const r=(A,n,e)=>{const[r,s]=(0,i.useState)(!1),t=()=>{s((A=>!A))};return{showPassword:r,getInputClass:i=>A[i]?n&&e[i]?"ErrorInput":"SuccessInput":"",getInputAlert:i=>A[i]?n&&e[i]?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"ErrorText",children:e[i]}),(0,a.jsx)("div",{className:"ImgError"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"SuccessText",children:"".concat(i," is correct")}),(0,a.jsx)("div",{className:"ImgCorrect"})]}):"",getHidePassword:()=>(0,a.jsx)("div",{className:r?"HidePassword":"ShowPassword",onClick:t})}}},9718:(A,n,e)=>{e.d(n,{IY:()=>o,SB:()=>l,_Q:()=>c,b1:()=>d});var i=e(8007);const a=/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,r=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,s=/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/,t=/^(?![A-Za-z])[\u0410-\u042f\u0406\u0404\u0407\u0490\u0491\u0430-\u044f\u0456\u0454\u0457\u02bc\s]+$/,o=i.Ry().shape({name:i.Z_().min(2,"Too Short!").max(30,"Too Long!").required("Required"),email:i.Z_().email("Invalid email").matches(r,"Must be @ and .com or any").required("Required"),password:i.Z_().min(7,"Must be at least 7 characters").max(16,"Too Long!").matches(a,"Must be min 6 A-z, 1 num").required("Required")}),d=i.Ry().shape({email:i.Z_().email("Invalid email").matches(r,"Must be @ and .com or any").required("Required"),password:i.Z_().min(7,"Must be at least 7 characters").max(16,"Too Long!").matches(a,"Must be min 6 A-z, 1 num").required("Required")}),l=(i.Ry().shape({reason:i.Z_().required("Required"),fullName:i.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:i.Z_().email("Invalid email").required("Required"),number:i.Z_().matches(/^\d+$/).min(5,"Too Short!").max(10,"Too Long!").required("Required")}),i.Ry().shape({en:i.Z_().matches(s,"Must be en letter").required("Required"),ua:i.Z_().matches(t,"Must be ua letter").required("Required"),category:i.Z_().required("Required"),isIrregular:i.O7()})),c=i.Ry().shape({en:i.Z_().matches(s,"Must be en letter").required("Required"),ua:i.Z_().matches(t,"Must be ua letter").required("Required")})},5924:(A,n,e)=>{e.r(n),e.d(n,{default:()=>b});var i,a=e(7689),r=e(1087),s=e(168),t=e(5867),o=e(561),d=e(4149),l=e(9508),c=e(8406),m=e(921),p=e(6771),g=e(2206);const x=t.ZP.div(i||(i=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  padding-bottom: 50px;\n  display: grid;\n  justify-content: center;\n\n  @media only screen and (min-width: 768px) {\n    background-image: url(",');\n    background-size: cover;\n  }\n\n  @media only screen and (min-width: 1440px) {\n    margin-top: 50px;\n    display: grid;\n    grid-template-areas:\n      "f i"\n      "f l"\n      "f l"\n      "f l";\n  }\n\n  .ImgContainer {\n    display: grid;\n    justify-content: center;\n\n    @media only screen and (min-width: 768px) {\n      display: none;\n    }\n\n    @media only screen and (min-width: 1440px) {\n      display: flex;\n    }\n  }\n\n  .RegisterImg {\n    background-image: url(',");\n    width: 247px;\n    height: 191px;\n\n    @media only screen and (min-width: 1440px) {\n      width: 498px;\n      height: 475px;\n      grid-area: i;\n      background-image: url(",');\n    }\n  }\n\n  .FormContainer {\n    padding: 15px 30px;\n    border-radius: 25px 25px 0 0;\n    background: rgba(133, 170, 159, 0.1);\n    height: 100vh;\n\n    @media only screen and (min-width: 768px) {\n      margin-top: 150px;\n      padding: 40px 60px;\n      border-radius: 30px;\n      width: 627px;\n      height: 591px;\n    }\n\n    @media only screen and (min-width: 1440px) {\n      grid-area: f;\n      margin-right: 70px;\n      margin-top: 0;\n    }\n  }\n\n  .Title {\n    font-weight: 600;\n    font-size: 30px;\n    line-height: 107%;\n    letter-spacing: -0.02em;\n    color: #121417;\n\n    @media only screen and (min-width: 768px) {\n      font-size: 53px;\n      line-height: 120%;\n    }\n  }\n\n  .Text {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 150%;\n    color: rgba(18, 20, 23, 0.8);\n    margin-top: 16px;\n\n    @media only screen and (min-width: 768px) {\n      font-size: 27px;\n      margin-top: 20px;\n    }\n  }\n\n  .Form {\n    margin-top: 16px;\n    display: grid;\n    gap: 18px;\n\n    @media only screen and (min-width: 768px) {\n      margin-top: 36px;\n    }\n  }\n\n  input {\n    box-sizing: border-box;\n    border: 1px solid rgba(18, 20, 23, 0.1);\n    border-radius: 15px;\n    padding: 16px 18px;\n    width: 100%;\n\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 150%;\n    color: #121417;\n\n    &:focus {\n      outline: none;\n      box-shadow: none;\n    }\n  }\n\n  .ButtonSubmit {\n    margin-top: 16px;\n    border-radius: 30px;\n    padding: 16px 18px;\n    background: #85aa9f;\n    border: none;\n\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 150%;\n    color: #fcfcfc;\n\n    @media only screen and (min-width: 768px) {\n      margin-top: 36px;\n    }\n\n    &:hover {\n      color: #85aa9f;\n      background: #fcfcfc;\n    }\n  }\n\n  .NavLogIn {\n    justify-content: center;\n    display: flex;\n    margin-top: 32px;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 150%;\n    text-decoration: underline;\n    text-decoration-skip-ink: none;\n    color: rgba(18, 20, 23, 0.5);\n\n    &:hover {\n      color: #85aa9f;\n    }\n  }\n\n  .SkilsList {\n    display: none;\n\n    @media only screen and (min-width: 768px) {\n      margin-top: 220px;\n      display: flex;\n      justify-content: center;\n\n      & li {\n        display: inline-block;\n        margin-right: 15px;\n      }\n\n      & li:not(:last-child)::after {\n        content: "\xb7";\n        margin-left: 15px;\n      }\n    }\n\n    @media only screen and (min-width: 1440px) {\n      margin-top: 0;\n      grid-area: l;\n    }\n  }\n\n  .Skil {\n    font-weight: 400;\n    font-size: 22px;\n    line-height: 150%;\n    text-align: center;\n    color: rgba(18, 20, 23, 0.8);\n  }\n\n  .DivInput {\n    position: relative;\n  }\n\n  .DivInput:hover .ShowPassword,\n  .DivInput:hover .HidePassword {\n    display: block;\n  }\n\n  .ErrorInput {\n    border: 1px solid #e74a3b;\n  }\n\n  .SuccessInput {\n    border: 1px solid #3cbc81;\n  }\n\n  .ShowPassword {\n    display: none;\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n    background-image: url(',");\n  }\n\n  .HidePassword {\n    display: none;\n    position: absolute;\n    right: 20px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n    background-image: url(",");\n  }\n\n  .ErrorText {\n    position: absolute;\n    color: red;\n    top: 60px;\n    left: 20px;\n    font-size: 12px;\n    align-items: flex-start;\n    display: flex;\n\n    &::before {\n      content: url(",");\n      display: inline-block;\n      margin-right: 5px;\n    }\n  }\n\n  .SuccessText {\n    position: absolute;\n    color: green;\n    top: 60px;\n    left: 20px;\n    font-size: 12px;\n    align-items: flex-start;\n    display: flex;\n\n    &::before {\n      content: url(",");\n      display: inline-block;\n      margin-right: 5px;\n    }\n  }\n"])),o,d,l,m.Z,c.Z,g.Z,p.Z);var h=e(5705),u=e(9718),z=e(8227),M=e(4420),k=e(8724),Z=e(184);const b=()=>{const A=(0,M.I0)(),n=(0,a.s0)(),{values:e,errors:i,touched:s,isValid:t,handleBlur:o,handleChange:d,handleSubmit:l}=(0,h.TA)({initialValues:{name:"",email:"",password:""},validationSchema:u.IY,onSubmit:e=>{A(k.Z.register(e)).then((A=>{A.payload.name&&n("/dictionary")}))}}),{showPassword:c,getInputAlert:m,getHidePassword:p,getInputClass:g}=(0,z.n)(e,s,i);return(0,Z.jsxs)(x,{children:[(0,Z.jsx)("div",{className:"ImgContainer",children:(0,Z.jsx)("div",{className:"RegisterImg"})}),(0,Z.jsxs)("div",{className:"FormContainer",children:[(0,Z.jsx)("h2",{className:"Title",children:"Register"}),(0,Z.jsx)("p",{className:"Text",children:"To start using our services, please fill out the registration form below. All fields are mandatory:"}),(0,Z.jsxs)("form",{className:"Form",children:[(0,Z.jsxs)("div",{className:"DivInput",children:[(0,Z.jsx)("input",{id:"registerName",name:"name",type:"text",placeholder:"Name",className:g("name"),onChange:d,value:e.name,onBlur:o}),m("name")]}),(0,Z.jsxs)("div",{className:"DivInput",children:[(0,Z.jsx)("input",{id:"registerEmail",name:"email",type:"email",placeholder:"Email",className:g("email"),onChange:d,value:e.email,onBlur:o}),m("email")]}),(0,Z.jsxs)("div",{className:"DivInput",id:"password",children:[(0,Z.jsx)("input",{id:"registerPassword",name:"password",placeholder:"Password",type:c?"text":"password",className:g("password"),onChange:d,value:e.password,onBlur:o}),m("password"),e.password&&p()]}),(0,Z.jsx)("button",{className:"ButtonSubmit",type:"submit",disabled:!t,onClick:l,children:"Register"})]}),(0,Z.jsx)(r.OL,{className:"NavLogIn",to:"/login",children:"Login"})]}),(0,Z.jsxs)("ul",{className:"SkilsList",children:[(0,Z.jsx)("li",{className:"Skil",children:"Word"}),(0,Z.jsx)("li",{className:"Skil",children:"Translation"}),(0,Z.jsx)("li",{className:"Skil",children:"Grammar"}),(0,Z.jsx)("li",{className:"Skil",children:"Progress"})]})]})}},561:A=>{A.exports="data:image/jpeg;base64,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"},9508:(A,n,e)=>{A.exports=e.p+"static/media/registration-desktop.d2e91d2e25044b505a73.png"},4149:(A,n,e)=>{A.exports=e.p+"static/media/registration-mobile.cab3f1832a1e3f78e770.png"}}]);
//# sourceMappingURL=924.b989050a.chunk.js.map