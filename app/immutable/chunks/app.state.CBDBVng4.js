import{d,w as c}from"./index.jwm6wgPW.js";var e=(n=>(n.UnAuthenticated="un-authenticated",n.Authenticated="authenticated",n.Admin="admin",n.Root="root",n))(e||{});const l={username:"User",role:e.UnAuthenticated},u={username:"Admin",role:e.Admin},h={username:"Root",role:e.Root},N=[{label:"Home",url:"/home",roles:[e.UnAuthenticated,e.Authenticated,e.Admin,e.Root],index:1},{label:"Sacrament Program",url:"/sacrament-program",roles:[e.UnAuthenticated,e.Authenticated,e.Admin,e.Root],visibilities:[{role:e.UnAuthenticated,sundayOnly:!0},{role:e.Authenticated,sundayOnly:!0},{role:e.Admin,sundayOnly:!1},{role:e.Root,sundayOnly:!1}],index:2},{label:"Book of Mormon Challenge Schedule",url:"/bom-challenge",roles:[e.UnAuthenticated,e.Authenticated,e.Admin,e.Root],index:3},{label:"Cheat Sheet",url:"/cheat-sheet",roles:[e.Admin,e.Root],index:4}];let r=null;const f=()=>{const n=c(!1),g=c("Home"),s=c(!1),a=c(l),A=d([a],([t])=>t.role===e.Admin),S=d([a],([t])=>t.role===e.Root);return r={stores:{darkTheme:n,pageName:g,authenticated:s,currentUser:a,currentUserIsAdmin:A,currentUserIsRoot:S},actions:{init:()=>{const t=localStorage.getItem("theme"),o=t??"light";n.set(t==="dark"),document.documentElement.setAttribute("data-bs-theme",o),localStorage.setItem("theme",o);const m=localStorage.getItem("currentUser"),i=m?JSON.parse(m):l;switch(a.set(i),localStorage.setItem("currentUser",JSON.stringify(i)),i.username){case u.username:s.set(!0);break;case l.username:default:s.set(!1)}},toggleTheme:()=>{const t=localStorage.getItem("theme");let o="light";t==="light"&&(o="dark"),n.set(o==="dark"),document.documentElement.setAttribute("data-bs-theme",o),localStorage.setItem("theme",o)},login:(t,o)=>t.toLowerCase()==="admin"&&o==="tolutaha"?(a.set(u),s.set(!0),localStorage.setItem("currentUser",JSON.stringify(u)),!0):t.toLowerCase()==="root"&&o==="tolutaha"?(a.set(h),s.set(!0),localStorage.setItem("currentUser",JSON.stringify(h)),!0):(localStorage.setItem("currentUser",JSON.stringify(l)),a.set(l),s.set(!1),!1),logout:()=>{s.set(!1),localStorage.setItem("currentUser",JSON.stringify(l)),a.set(l)}}},r},R=()=>(r==null?void 0:r.stores)&&Object.keys(r.stores).length>0&&(r==null?void 0:r.actions)&&Object.keys(r.actions).length>0?r:f();export{N,e as U,R as g};
