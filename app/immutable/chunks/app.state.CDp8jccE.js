import{d as h,w as c}from"./index.jwm6wgPW.js";var e=(n=>(n.UnAuthenticated="un-authenticated",n.Authenticated="authenticated",n.Admin="admin",n))(e||{});const s={username:"User",role:e.UnAuthenticated},u={username:"Admin",role:e.Admin},b=[{label:"Home",url:"/home",roles:[e.UnAuthenticated,e.Authenticated,e.Admin],index:1},{label:"Sacrament Program",url:"/sacrament-program",roles:[e.UnAuthenticated,e.Authenticated,e.Admin],visibilities:[{role:e.UnAuthenticated,sundayOnly:!0},{role:e.Authenticated,sundayOnly:!0},{role:e.Admin,sundayOnly:!1}],index:2},{label:"Book of Mormon Challenge Schedule",url:"/bom-challenge",roles:[e.UnAuthenticated,e.Authenticated,e.Admin],index:3},{label:"Cheat Sheet",url:"/cheat-sheet",roles:[e.Admin],index:4}];let t=null;const g=()=>{const n=c(!1),m=c("Home"),o=c(!1),l=c(s),d=h([l],([a])=>a.role==="admin");return t={stores:{darkTheme:n,pageName:m,authenticated:o,currentUser:l,currentUserIsAdmin:d},actions:{init:()=>{const a=localStorage.getItem("theme");n.set(a==="dark");const r=localStorage.getItem("currentUser"),i=r?JSON.parse(r):s;switch(l.set(i),localStorage.setItem("currentUser",JSON.stringify(i)),i.username){case u.username:o.set(!0);break;case s.username:default:o.set(!1)}},toggleTheme:()=>{const a=localStorage.getItem("theme");let r="light";a==="light"&&(r="dark"),n.set(r==="dark"),document.documentElement.setAttribute("data-bs-theme",r),localStorage.setItem("theme",r)},login:(a,r)=>a==="admin"&&r==="tolutaha"?(l.set(u),o.set(!0),localStorage.setItem("currentUser",JSON.stringify(u)),!0):(localStorage.setItem("currentUser",JSON.stringify(s)),l.set(s),o.set(!1),!1),logout:()=>{o.set(!1),localStorage.setItem("currentUser",JSON.stringify(s)),l.set(s)}}},t},y=()=>(t==null?void 0:t.stores)&&Object.keys(t.stores).length>0&&(t==null?void 0:t.actions)&&Object.keys(t.actions).length>0?t:g();export{b as N,e as U,y as g};
