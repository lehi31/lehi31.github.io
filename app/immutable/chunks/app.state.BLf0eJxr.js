import{w as r}from"./index.B3YQJo-d.js";let t=null;const a=()=>{const e=r(!0),n=r("Home");return t={stores:{darkTheme:e,pageName:n},actions:{toggleTheme:()=>{const o=localStorage.getItem("theme");let s="light";o==="light"&&(s="dark"),e.set(o==="light"),document.documentElement.setAttribute("data-bs-theme",s),localStorage.setItem("theme",s)}}},t},m=()=>(t==null?void 0:t.stores)&&Object.keys(t.stores).length>0&&(t==null?void 0:t.actions)&&Object.keys(t.actions).length>0?t:a(),g=()=>{t=null};export{g as d,m as g};
