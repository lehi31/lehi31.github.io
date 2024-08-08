import{s as M,n as D,q as Y,u as z,v as F,w as W,x as G}from"../chunks/scheduler.CkBNS7y-.js";import{S as x,i as H,e as _,s as L,c as v,a as b,y as O,f as V,d as c,o as f,g as I,h as m,z as J,t as k,b as C,u as q,v as B,w as A,n as S,l as j,x as N}from"../chunks/index.Bi4TTPad.js";const P=!0,it=Object.freeze(Object.defineProperty({__proto__:null,prerender:P},Symbol.toStringTag,{value:"Module"})),R=()=>{const l=localStorage.getItem("theme");let t="light";l==="light"&&(t="dark"),document.documentElement.setAttribute("data-bs-theme",t),localStorage.setItem("theme",t)},U=()=>localStorage.getItem("theme");function K(l){let t;return{c(){t=_("i"),this.h()},l(e){t=v(e,"I",{class:!0}),b(t).forEach(c),this.h()},h(){f(t,"class","bi bi-moon")},m(e,r){I(e,t,r)},d(e){e&&c(t)}}}function Q(l){let t;return{c(){t=_("i"),this.h()},l(e){t=v(e,"I",{class:!0}),b(t).forEach(c),this.h()},h(){f(t,"class","bi bi-sun")},m(e,r){I(e,t,r)},d(e){e&&c(t)}}}function X(l){let t,e,r,a='<img src="/assets/logo.png" alt="logo" class="logo svelte-193wsx5"/> <div class="navbar-brand mb-0 h1">Lehi Tolutaha</div>',n,h,u,o,s;function i(p,g){return p[0]?Q:K}let y=i(l),d=y(l);return{c(){t=_("nav"),e=_("div"),r=_("div"),r.innerHTML=a,n=L(),h=_("div"),u=_("button"),d.c(),this.h()},l(p){t=v(p,"NAV",{class:!0});var g=b(t);e=v(g,"DIV",{class:!0});var $=b(e);r=v($,"DIV",{class:!0,"data-svelte-h":!0}),O(r)!=="svelte-ui1ooq"&&(r.innerHTML=a),n=V($),h=v($,"DIV",{});var T=b(h);u=v(T,"BUTTON",{class:!0,type:!0});var E=b(u);d.l(E),E.forEach(c),T.forEach(c),$.forEach(c),g.forEach(c),this.h()},h(){f(r,"class","d-flex align-items-center gap-2"),f(u,"class","btn btn-link"),f(u,"type","button"),f(e,"class","container"),f(t,"class","navbar bg-body-tertiary d-print-none")},m(p,g){I(p,t,g),m(t,e),m(e,r),m(e,n),m(e,h),m(h,u),d.m(u,null),o||(s=J(u,"click",l[1]),o=!0)},p(p,[g]){y!==(y=i(p))&&(d.d(1),d=y(p),d&&(d.c(),d.m(u,null)))},i:D,o:D,d(p){p&&c(t),d.d(),o=!1,s()}}}function Z(l,t,e){let r=!1;return[r,()=>{R(),e(0,r=U()==="light")}]}class tt extends x{constructor(t){super(),H(this,t,Z,X,M,{})}}function et(l){let t,e,r,a,n,h,u,o,s,i,y,d,p=`<div class="col-8"><p><small class="text-muted"><strong>Disclaimer:</strong>
						This is not an official, Church-sponsored website or product. Contents are not sponsored
						or endorsed by or officially represent the Church of Jesus Christ of Latter-day Saints.</small></p></div>`;return{c(){t=_("div"),e=_("div"),r=_("div"),a=_("div"),n=_("img"),u=k(`
				© `),o=k(l[0]),s=k(" | Lehi 31 Ward Bishopric"),i=_("br"),y=L(),d=_("div"),d.innerHTML=p,this.h()},l(g){t=v(g,"DIV",{id:!0,class:!0});var $=b(t);e=v($,"DIV",{class:!0});var T=b(e);r=v(T,"DIV",{class:!0});var E=b(r);a=v(E,"DIV",{class:!0});var w=b(a);n=v(w,"IMG",{alt:!0,src:!0,class:!0}),u=C(w,`
				© `),o=C(w,l[0]),s=C(w," | Lehi 31 Ward Bishopric"),i=v(w,"BR",{}),w.forEach(c),E.forEach(c),y=V(T),d=v(T,"DIV",{class:!0,"data-svelte-h":!0}),O(d)!=="svelte-38jbpw"&&(d.innerHTML=p),T.forEach(c),$.forEach(c),this.h()},h(){f(n,"alt","logo"),Y(n.src,h="/assets/logo.png")||f(n,"src",h),f(n,"class","footer-logo svelte-ujhjs7"),f(a,"class","col"),f(r,"class","row"),f(d,"class","row"),f(e,"class","container pt-5"),f(t,"id","layout-footer"),f(t,"class","bg-body-tertiary d-print-none svelte-ujhjs7")},m(g,$){I(g,t,$),m(t,e),m(e,r),m(r,a),m(a,n),m(a,u),m(a,o),m(a,s),m(a,i),m(e,y),m(e,d)},p:D,i:D,o:D,d(g){g&&c(t)}}}function st(l){return[new Date().getFullYear()]}class rt extends x{constructor(t){super(),H(this,t,st,et,M,{})}}function at(l){let t,e,r,a,n,h;t=new tt({});const u=l[1].default,o=z(u,l,l[0],null);return n=new rt({}),{c(){q(t.$$.fragment),e=L(),r=_("main"),o&&o.c(),a=L(),q(n.$$.fragment),this.h()},l(s){B(t.$$.fragment,s),e=V(s),r=v(s,"MAIN",{class:!0});var i=b(r);o&&o.l(i),i.forEach(c),a=V(s),B(n.$$.fragment,s),this.h()},h(){f(r,"class","container")},m(s,i){A(t,s,i),I(s,e,i),I(s,r,i),o&&o.m(r,null),I(s,a,i),A(n,s,i),h=!0},p(s,[i]){o&&o.p&&(!h||i&1)&&F(o,u,s,s[0],h?G(u,s[0],i,null):W(s[0]),null)},i(s){h||(S(t.$$.fragment,s),S(o,s),S(n.$$.fragment,s),h=!0)},o(s){j(t.$$.fragment,s),j(o,s),j(n.$$.fragment,s),h=!1},d(s){s&&(c(e),c(r),c(a)),N(t,s),o&&o.d(s),N(n,s)}}}function nt(l,t,e){let{$$slots:r={},$$scope:a}=t;return l.$$set=n=>{"$$scope"in n&&e(0,a=n.$$scope)},[a,r]}class ct extends x{constructor(t){super(),H(this,t,nt,at,M,{})}}export{ct as component,it as universal};
