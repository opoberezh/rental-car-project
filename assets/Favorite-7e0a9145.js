import{n as a,u as m,a as p,r as d,j as t,k as u,l as F}from"./index-e00722d9.js";import{e as f,A as j,f as y,g as w}from"./AdvertsCard-0fc1160f.js";const S=a.div`
  padding-bottom: 100px;
  margin-top: 100px;
  max-width: 1280px;
  min-height: calc(100vh - 132px);
  padding: 16px;
  margin: auto;

  @media (min-width: 768px) {
    padding-top: 100px;
  }
`,T=a.div`
  width: 100%;
  height: 100%;
  display: flex;
`,A=a.h2`
  margin: auto;
  text-align: center;
  font-size: 2rem;
  color: #1a1a1a; 
`,C=()=>{const s=m(),o=p(f),c=e=>{const v=o.some(g=>g.id===e.id);s(v?u(e.id):F(e))},[n,i]=d.useState(!1),[r,l]=d.useState(null),x=e=>{l(e),i(!0)},h=()=>{l(null),i(!1)};return t.jsxs(t.Fragment,{children:[t.jsx("ul",{style:{display:"flex",maxWidth:"1180px",flexWrap:"wrap",gap:"16px",justifyContent:"center"},children:o.map(e=>t.jsx("li",{style:{width:"274px"},children:t.jsx(j,{item:e,onToggleFavorite:()=>c(e),onOpen:()=>x(e)})},e.id))}),n&&r&&t.jsx(y,{open:n,onClose:h,data:r})]})},W=()=>{const s=p(w);return t.jsx(S,{children:s>0?t.jsx(C,{}):t.jsx(T,{children:t.jsx(A,{children:"There are no adverts yet"})})})};export{W as default};
