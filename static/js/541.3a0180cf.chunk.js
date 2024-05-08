"use strict";(self.webpackChunkvocabbuilder=self.webpackChunkvocabbuilder||[]).push([[541],{4541:(n,e,t)=>{t.r(e),t.d(e,{default:()=>w});var i,a=t(2791),o=t(168),s=t(5867),r=t(2185),d=t(5872);const l=s.ZP.div(i||(i=(0,o.Z)(["\n  padding: 32px 16px;\n\n  @media only screen and (min-width: 768px) {\n    padding: 64px 32px;\n  }\n\n  .FilterContainer {\n    @media only screen and (min-width: 1440px) {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n  }\n\n  .Form {\n    position: relative;\n    display: grid;\n    gap: 8px;\n\n    @media only screen and (min-width: 768px) {\n      display: flex;\n    }\n  }\n\n  .CountContainer {\n    @media only screen and (min-width: 768px) {\n      display: flex;\n      align-items: end;\n      gap: 16px;\n\n      margin-top: 30px;\n    }\n\n    @media only screen and (min-width: 1440px) {\n      margin-top: 0;\n      align-items: center;\n    }\n  }\n\n  .SearchContainer {\n    position: relative;\n\n    &::after {\n      content: url(",");\n      position: absolute;\n      top: 14px;\n      right: 24px;\n    }\n  }\n\n  .custom-input {\n    position: relative;\n\n    &::after {\n      content: url(",');\n      position: absolute;\n      top: 14px;\n      right: 24px;\n    }\n  }\n\n  .Input {\n    border: 1px solid rgba(18, 20, 23, 0.1);\n    border-radius: 15px;\n    padding: 12px 24px;\n    width: 100%;\n    height: 48px;\n    box-sizing: border-box;\n\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    color: #121417;\n\n    &:focus {\n      border-color: transparent;\n      outline: none;\n    }\n  }\n\n  .Input[id="filters"] {\n    @media only screen and (min-width: 768px) {\n      width: 274px;\n    }\n  }\n\n  .Input[id="statistics"] {\n    @media only screen and (min-width: 768px) {\n      width: 164px;\n    }\n  }\n\n  .dropdown {\n    z-index: 1000;\n    position: absolute;\n    margin-top: 5px;\n    display: none;\n    gap: 8px;\n\n    border-radius: 15px;\n    padding: 12px 24px;\n    width: 343px;\n    box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);\n    background: #fff;\n  }\n\n  .ListItem {\n    cursor: pointer;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    border-radius: 6px;\n\n    &:hover {\n      background-color: #85aa9f;\n    }\n  }\n\n  .CountWord {\n    margin-top: 50px;\n    font-weight: 500;\n    font-size: 14px;\n    color: rgba(18, 20, 23, 0.5);\n\n    align-items: center;\n    display: flex;\n    gap: 8px;\n\n    @media only screen and (min-width: 768px) {\n      margin-top: 0px;\n    }\n  }\n\n  .NumberCountWord {\n    font-weight: 500;\n    font-size: 20px;\n    color: #121417;\n  }\n\n  .ButtonList {\n    margin-top: 16px;\n    display: flex;\n    gap: 16px;\n\n    @media only screen and (min-width: 1440px) {\n      margin-top: 0;\n    }\n  }\n\n  .ButtonItem {\n    text-decoration: none;\n    display: flex;\n    gap: 8px;\n    cursor: pointer;\n    color: #121417;\n\n    &:hover {\n      color: #85aa9f;\n    }\n\n    &:hover .IconButton {\n      path {\n        stroke: #686868;\n        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);\n      }\n      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n  }\n\n  .RadioButtonList {\n    position: absolute;\n    top: 120px;\n    display: grid;\n    gap: 34px;\n    left: 14px;\n\n    @media only screen and (min-width: 768px) {\n      position: static;\n      margin-left: 20px;\n    }\n  }\n\n  .RadioButtonItem {\n    position: relative;\n    display: flex;\n    gap: 8px;\n\n    font-weight: 400;\n    font-size: 12px;\n    text-align: center;\n    align-items: center;\n  }\n\n  .RadioButton {\n    height: 12px;\n    width: 12px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    outline: none;\n    cursor: pointer;\n\n    &:before {\n      content: "";\n      position: absolute;\n      top: 50%;\n      width: 14px;\n      height: 14px;\n      border-radius: 50%;\n      transform: translate(-50%, -50%);\n      background-color: #fff;\n      border: 3px solid #8a8a89;\n    }\n\n    &:checked:before {\n      border-color: #85aa9f;\n    }\n\n    &:checked::after {\n      content: "";\n      position: absolute;\n      top: 50%;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      background-color: #85aa9f;\n      transform: translate(-50%, -50%);\n      visibility: visible;\n    }\n  }\n\n  .TableContainer {\n    margin-top: 40px;\n    @media only screen and (min-width: 768px) {\n      padding: 18px;\n      background: #fcfcfc;\n      border-radius: 15px;\n      margin-top: 24px;\n    }\n  }\n'])),r.Z,d.Z);var p=t(1676),c=t(4420),x=t(3604),u=t(4131),m=t(763),h=t(1258),g=t(1087),f=t(3385),b=t(184);const w=()=>{const n=(0,c.I0)(),[e,t]=(0,a.useState)({filters:"",statistics:"",isIrregular:void 0,page:1}),[i,o]=(0,a.useState)(!1),{categories:s}=(0,u._)(),r=(0,c.v9)((n=>n.data.allWords));(0,a.useEffect)((()=>{n((0,x.tG)())}),[n]);const d=(0,a.useRef)((0,m.debounce)((e=>{n((0,x.dN)(e))}),300));(0,a.useEffect)((()=>{d.current(e)}),[e]);const w=n=>{const{name:i,value:a}=n.target;t({...e,[i]:a.trim()})},y=n=>{t((e=>({...e,statistics:n}))),o("verb"===n)},j=n=>{t((e=>({...e,isIrregular:n})))};return(0,b.jsxs)(l,{children:[(0,b.jsxs)("div",{className:"FilterContainer",children:[(0,b.jsxs)("form",{className:"Form",children:[(0,b.jsx)("div",{className:"SearchContainer",children:(0,b.jsx)("input",{id:"filters",className:"Input",type:"text",placeholder:"Find the word",name:"filters",value:e.filters,onChange:w})}),(0,b.jsxs)("div",{className:"custom-input",children:[(0,b.jsx)("input",{id:"statistics",name:"statistics",className:"Input",type:"text",placeholder:"Categories",value:e.statistics,onChange:w}),(0,b.jsxs)("ul",{className:"dropdown",children:[(0,b.jsx)("li",{className:"ListItem",onClick:()=>y(""),children:"categories"}),s&&s.map((n=>(0,b.jsx)("li",{className:"ListItem",onClick:()=>y(n),children:n},n)))]})]}),(0,b.jsxs)("ul",{className:"RadioButtonList",style:{display:i?"flex":"none"},children:[(0,b.jsxs)("li",{className:"RadioButtonItem",children:[(0,b.jsx)("input",{className:"RadioButton",id:"regular",name:"regular",type:"radio",onChange:()=>j(!1),checked:!1===e.isIrregular}),"Regular"]}),(0,b.jsxs)("li",{className:"RadioButtonItem",children:[(0,b.jsx)("input",{className:"RadioButton",id:"reason",name:"reason",type:"radio",onChange:()=>j(!0),checked:!0===e.isIrregular}),"Irregular"]})]})]}),(0,b.jsxs)("div",{className:"CountContainer",children:[(0,b.jsxs)("p",{className:"CountWord",children:["To study:",(0,b.jsx)("span",{className:"NumberCountWord",children:r.results&&r.results.length})]}),(0,b.jsx)("ul",{className:"ButtonList",children:(0,b.jsx)("li",{children:(0,b.jsxs)(g.OL,{className:"ButtonItem",to:"/training",children:["Train oneself ",(0,b.jsx)("img",{src:p.Z,alt:"Switch",className:"IconButton"})]})})})]})]}),(0,b.jsx)("div",{className:"TableContainer",children:r?(0,b.jsx)(f.Z,{data:r}):(0,b.jsx)("div",{children:"Oooops samething wrong..."})}),r.totalPages>1&&(0,b.jsx)(h.Z,{data:r,formData:e,setFormData:t})]})}}}]);
//# sourceMappingURL=541.3a0180cf.chunk.js.map