"use strict";(self.webpackChunkvocabbuilder=self.webpackChunkvocabbuilder||[]).push([[334],{2185:(e,n,a)=>{a.d(n,{Z:()=>t});a(2791);const t=a.p+"static/media/search.f40218f957a1954f6b3cc31fe50119a4.svg"},1676:(e,n,a)=>{a.d(n,{Z:()=>t});a(2791);const t=a.p+"static/media/switch-horizontal.f8100eed7621827910887b5fb2a1b17b.svg"},5872:(e,n,a)=>{a.d(n,{Z:()=>t});a(2791);const t=a.p+"static/media/toggle.44956463d2686e9744e02374ed696b95.svg"},3174:(e,n,a)=>{a.d(n,{Z:()=>t});a(2791);const t=a.p+"static/media/ukraine.a4400effbdc878712e7bf57b2c3c09b2.svg"},9742:(e,n,a)=>{a.d(n,{Z:()=>t});a(2791);const t=a.p+"static/media/united kingdom.c38e283f348bb237ac8579ea15f520e2.svg"},1258:(e,n,a)=>{a.d(n,{Z:()=>p});a(2791);const t=a.p+"static/media/First.5d5e238e8b487006eada3dc7edaf79df.svg";const s=a.p+"static/media/Next.006d29148a11265dee03d84c6cd4dd7c.svg";const r=a.p+"static/media/Last.73b9062cff80134f46ada90ea3abf538.svg";const i=a.p+"static/media/Prev.63fd235f4da6423ef0f8732e5e0563d3.svg";var l,c=a(168);const d=a(5867).ZP.ul(l||(l=(0,c.Z)(["\n  /* flex-wrap: wrap; */\n  margin-top: 32px;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n\n  .PageButton {\n    border: 1px solid rgba(18, 20, 23, 0.1);\n    border-radius: 8px;\n    min-width: 32px;\n    height: 32px;\n    cursor: pointer;\n\n    justify-content: center;\n    display: flex;\n    align-items: center;\n\n    font-weight: 600;\n    font-size: 13px;\n\n    &:hover {\n      background: #85aa9f;\n      color: #fff;\n    }\n  }\n"])));var o=a(184);const p=e=>{let{data:n,formData:a,setFormData:l}=e;const c=Array.from({length:n.totalPages},((e,n)=>n+1)),p=e=>{l((n=>({...n,page:e})))},m=a.page-1,g=Math.max(Math.min(m-Math.floor(1.5),c.length-3),0),f=c.slice(g,g+3);return(0,o.jsxs)(d,{children:[(0,o.jsx)("li",{className:"PageButton",onClick:()=>p(1),children:(0,o.jsx)("img",{src:t,alt:"First"})}),(0,o.jsx)("li",{className:"PageButton",onClick:()=>a.page>1?p(a.page-1):null,children:(0,o.jsx)("img",{src:i,alt:"Prev"})}),g>0&&(0,o.jsx)("li",{className:"PageButton",children:"..."},"startEllipsis"),f.map(((e,n)=>(0,o.jsx)("li",{style:{background:e===a.page?"#85aa9f":"none",color:e===a.page?"#fcfcfc":"#121417"},className:"PageButton",onClick:()=>p(e),value:a.page,children:e},n))),g+3<c.length&&(0,o.jsx)("li",{className:"PageButton",children:"..."},"endEllipsis"),(0,o.jsx)("li",{className:"PageButton",onClick:()=>a.page<n.totalPages?p(a.page+1):null,children:(0,o.jsx)("img",{src:s,alt:"Next"})}),(0,o.jsx)("li",{className:"PageButton",onClick:()=>p(n.totalPages),children:(0,o.jsx)("img",{src:r,alt:"Last"})})]})}},3385:(e,n,a)=>{a.d(n,{Z:()=>x});var t,s=a(4420),r=a(3174),i=a(9742),l=a(1676),c=a(8422),d=a(9601),o=a(168);const p=a(5867).ZP.table(t||(t=(0,o.Z)(["\n  border-collapse: collapse;\n  width: 100%;\n  table-layout: fixed;\n\n  border-radius: 8px;\n  overflow: hidden;\n\n  .IconCountry {\n    display: none;\n\n    @media only screen and (min-width: 768px) {\n      display: inline-flex;\n    }\n  }\n\n  .TableHeaderItem {\n    padding: 16px;\n    border-bottom: 1px solid #dbdbdb;\n    border-right: 1px solid #dbdbdb;\n    text-align: left;\n\n    font-weight: 500;\n    font-size: 18px;\n\n    overflow-wrap: break-word;\n\n    @media only screen and (min-width: 1440px) {\n      font-size: 20px;\n    }\n  }\n\n  .WordOfTable {\n    &:hover,\n    &:focus {\n      color: #85aa9f;\n    }\n  }\n\n  .PercentContainer {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n\n    width: 90px;\n    display: flex;\n    justify-content: end;\n  }\n\n  .AddDictionaryContainer {\n    cursor: pointer;\n    gap: 10px;\n    align-items: center;\n\n    &:hover,\n    &:focus {\n      color: #85aa9f;\n    }\n\n    @media only screen and (min-width: 768px) {\n      display: grid;\n    }\n\n    @media only screen and (min-width: 1440px) {\n      display: flex;\n    }\n  }\n\n  .TableImagContainer {\n    @media only screen and (min-width: 768px) {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      justify-content: space-between;\n    }\n  }\n\n  .TableHeader {\n    background-color: #f2f2f2;\n  }\n\n  /* .WordList:nth-child(even) {\n    background-color: #f2f2f2;\n  } */\n\n  /* .WordList {\n    cursor: pointer;\n  } */\n  .WordList:nth-child(odd) {\n    background-color: #ffffff;\n  }\n\n  .Circle {\n    width: 26px;\n    height: 26px;\n  }\n\n  .AddToDictionaryText {\n    display: none;\n    @media only screen and (min-width: 768px) {\n      display: block;\n    }\n  }\n"])));var m=a(3604),g=a(7689),f=a(184);const x=e=>{let{data:n}=e;const a=(0,s.I0)(),t=(0,g.TH)(),o=(0,g.s0)();return(0,f.jsxs)(p,{children:[(0,f.jsx)("thead",{className:"TableHeader",children:(0,f.jsxs)("tr",{className:"TableHeaderList",children:[(0,f.jsx)("th",{className:"TableHeaderItem",children:(0,f.jsxs)("div",{className:"TableImagContainer",children:["Word ",(0,f.jsx)("img",{src:i.Z,alt:"England",className:"IconCountry"})]})}),(0,f.jsx)("th",{className:"TableHeaderItem",children:(0,f.jsxs)("div",{className:"TableImagContainer",children:["Translation ",(0,f.jsx)("img",{src:r.Z,alt:"Ukraine",className:"IconCountry"})]})}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Category"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:t.pathname.includes("/dictionary")?"Progress":""})]})}),n.results&&n.results.map(((e,t)=>(0,f.jsx)("tbody",{className:n.results[0].progress>=0?"WordOfTable":"",style:{cursor:n.results[0].progress>=0?"pointer":""},children:(0,f.jsxs)("tr",{className:"WordList",onClick:n=>{e.progress>=0&&((e,n)=>{const{clientX:t,clientY:s}=e;a((0,d._e)({x:t,y:s,wordId:n}))})(n,e)},children:[(0,f.jsx)("td",{className:"TableHeaderItem",children:e.en}),(0,f.jsx)("td",{className:"TableHeaderItem",children:e.ua}),(0,f.jsx)("td",{className:"TableHeaderItem",children:e.category}),(0,f.jsx)("td",{className:"TableHeaderItem",children:e.progress>=0?(0,f.jsxs)("div",{className:"PercentContainer",children:[e.progress,"%",(0,f.jsx)(c.Cd,{className:"Circle",gapPosition:"bottom",percent:e.progress,strokeWidth:15,trailWidth:15,strokeColor:"#00FF00",strokeLinecap:"round",gapDegree:0})]}):(0,f.jsxs)("div",{className:"AddDictionaryContainer",onClick:()=>a((0,m.ge)(e._id)).then((e=>{isNaN(e.payload)&&o("/dictionary")})),children:[(0,f.jsx)("span",{className:"AddToDictionaryText",children:"Add to dictionary"}),(0,f.jsx)("img",{src:l.Z,alt:"Switch"})]})})]})},t)))]})}},4131:(e,n,a)=>{a.d(n,{_:()=>r});var t=a(2791),s=a(4420);const r=()=>{const e=(0,s.v9)((e=>e.data.categories));return(0,t.useEffect)((()=>{const e=document.querySelector(".custom-input"),n=e.querySelector("input"),a=e.querySelector(".dropdown"),t=a.querySelectorAll("li"),s=()=>{a.style.display="grid"},r=e=>{n.value=e.textContent,a.style.display="none"},i=n=>{e.contains(n.target)||(a.style.display="none")};return n.addEventListener("click",s),t.forEach((e=>{e.addEventListener("click",(()=>r(e)))})),document.addEventListener("click",i),()=>{n.removeEventListener("click",s),t.forEach((e=>e.removeEventListener("click",r))),document.removeEventListener("click",i)}}),[]),{categories:e}}}}]);
//# sourceMappingURL=334.1148f349.chunk.js.map