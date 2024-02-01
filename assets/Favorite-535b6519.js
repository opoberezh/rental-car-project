import{n as a,u,a as p,r as d,j as t,l as g,m as f}from"./index-05319d55.js";import{e as F,A as j,f as y,g as w}from"./AdvertsCard-78c46c01.js";const A=a.div`
  padding-bottom: 100px;
  margin-top: 100px;
  max-width: 1280px;
  min-height: calc(100vh - 132px);
  padding: 16px;
  margin: auto;

  @media (min-width: 768px) {
    padding-top: 100px;
  }
`;a.div`
  width: 100%;
  height: 100%;
  display: flex;
`;const S=a.h2`
  margin: auto;
  text-align: center;
  font-size: 2rem;
  color: #1a1a1a; /* Adjust the color to your preference */
`,T=()=>{const s=u(),o=p(F),c=e=>{const v=o.some(m=>m.id===e.id);s(v?g(e.id):f(e))},[r,n]=d.useState(!1),[i,l]=d.useState(null),x=e=>{l(e),n(!0)},h=()=>{l(null),n(!1)};return t.jsxs(t.Fragment,{children:[t.jsx("ul",{style:{display:"flex",maxWidth:"1180px",flexWrap:"wrap",gap:"16px",justifyContent:"center"},children:o.map(e=>t.jsx("li",{style:{width:"274px"},children:t.jsx(j,{item:e,onToggleFavorite:()=>c(e),onOpen:()=>x(e)})},e.id))}),r&&i&&t.jsx(y,{open:r,onClose:h,data:i})]})},O=()=>{const s=p(w);return t.jsx(A,{children:s>0?t.jsx(T,{}):t.jsx(MessageWrapper,{children:t.jsx(S,{children:"There are no adverts yet"})})})};export{O as default};
