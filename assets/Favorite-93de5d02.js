import{n as a,u as g,a as p,r as d,j as t,k as m,l as f}from"./index-a75f3276.js";import{e as F,A as j,f as y,g as w}from"./AdvertsCard-283a41bc.js";const A=a.div`
  padding-bottom: 100px;
  margin-top: 100px;
  max-width: 1280px;
  min-height: calc(100vh - 132px);
  padding: 16px;
  margin: auto;

  @media (min-width: 768px) {
    padding-top: 100px;
  }
`,S=a.div`
  width: 100%;
  height: 100%;
  display: flex;
`,T=a.h2`
  margin: auto;
  text-align: center;
  font-size: 2rem;
  color: #1a1a1a; /* Adjust the color to your preference */
`,C=()=>{const s=g(),o=p(F),c=e=>{const v=o.some(u=>u.id===e.id);s(v?m(e.id):f(e))},[n,r]=d.useState(!1),[i,l]=d.useState(null),x=e=>{l(e),r(!0)},h=()=>{l(null),r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx("ul",{style:{display:"flex",maxWidth:"1180px",flexWrap:"wrap",gap:"16px",justifyContent:"center"},children:o.map(e=>t.jsx("li",{style:{width:"274px"},children:t.jsx(j,{item:e,onToggleFavorite:()=>c(e),onOpen:()=>x(e)})},e.id))}),n&&i&&t.jsx(y,{open:n,onClose:h,data:i})]})},W=()=>{const s=p(w);return t.jsx(A,{children:s>0?t.jsx(C,{}):t.jsx(S,{children:t.jsx(T,{children:"There are no adverts yet"})})})};export{W as default};
