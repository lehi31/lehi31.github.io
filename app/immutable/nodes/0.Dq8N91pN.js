import{s as M,n as D,q as Y,u as z,v as F,w as W,x as G}from"../chunks/scheduler.CkBNS7y-.js";import{S as x,i as H,e as _,s as L,c as v,a as b,y as O,f as V,d as c,o as f,g as I,h as m,z as J,t as k,b as C,u as q,v as B,w as A,n as S,l as j,x as N}from"../chunks/index.Bi4TTPad.js";const P=!0,it=Object.freeze(Object.defineProperty({__proto__:null,prerender:P},Symbol.toStringTag,{value:"Module"})),R=()=>{const n=localStorage.getItem("theme");let t="light";n==="light"&&(t="dark"),document.documentElement.setAttribute("data-bs-theme",t),localStorage.setItem("theme",t)},U=()=>localStorage.getItem("theme");function K(n){let t;return{c(){t=_("i"),this.h()},l(e){t=v(e,"I",{class:!0}),b(t).forEach(c),this.h()},h(){f(t,"class","bi bi-moon")},m(e,a){I(e,t,a)},d(e){e&&c(t)}}}function Q(n){let t;return{c(){t=_("i"),this.h()},l(e){t=v(e,"I",{class:!0}),b(t).forEach(c),this.h()},h(){f(t,"class","bi bi-sun")},m(e,a){I(e,t,a)},d(e){e&&c(t)}}}function X(n){let t,e,a,r='<img src="/assets/logo.png" alt="logo" class="logo svelte-193wsx5"/> <div class="navbar-brand mb-0 h1">Lehi Tolutaha</div>',l,h,u,o,s;function i(p,g){return p[0]?Q:K}let y=i(n),d=y(n);return{c(){t=_("nav"),e=_("div"),a=_("div"),a.innerHTML=r,l=L(),h=_("div"),u=_("button"),d.c(),this.h()},l(p){t=v(p,"NAV",{class:!0});var g=b(t);e=v(g,"DIV",{class:!0});var $=b(e);a=v($,"DIV",{class:!0,"data-svelte-h":!0}),O(a)!=="svelte-ui1ooq"&&(a.innerHTML=r),l=V($),h=v($,"DIV",{});var T=b(h);u=v(T,"BUTTON",{class:!0,type:!0});var E=b(u);d.l(E),E.forEach(c),T.forEach(c),$.forEach(c),g.forEach(c),this.h()},h(){f(a,"class","d-flex align-items-center gap-2"),f(u,"class","btn btn-link"),f(u,"type","button"),f(e,"class","container"),f(t,"class","navbar bg-body-tertiary")},m(p,g){I(p,t,g),m(t,e),m(e,a),m(e,l),m(e,h),m(h,u),d.m(u,null),o||(s=J(u,"click",n[1]),o=!0)},p(p,[g]){y!==(y=i(p))&&(d.d(1),d=y(p),d&&(d.c(),d.m(u,null)))},i:D,o:D,d(p){p&&c(t),d.d(),o=!1,s()}}}function Z(n,t,e){let a=!1;return[a,()=>{R(),e(0,a=U()==="light")}]}class tt extends x{constructor(t){super(),H(this,t,Z,X,M,{})}}function et(n){let t,e,a,r,l,h,u,o,s,i,y,d,p=`<div class="col-8"><p><small class="text-muted"><strong>Disclaimer:</strong>
						This is not an official, Church-sponsored website or product. Contents are not sponsored
						or endorsed by or officially represent the Church of Jesus Christ of Latter-day Saints.</small></p></div>`;return{c(){t=_("div"),e=_("div"),a=_("div"),r=_("div"),l=_("img"),u=k(`
				© `),o=k(n[0]),s=k(" | Lehi 31 Ward Bishopric"),i=_("br"),y=L(),d=_("div"),d.innerHTML=p,this.h()},l(g){t=v(g,"DIV",{id:!0,class:!0});var $=b(t);e=v($,"DIV",{class:!0});var T=b(e);a=v(T,"DIV",{class:!0});var E=b(a);r=v(E,"DIV",{class:!0});var w=b(r);l=v(w,"IMG",{alt:!0,src:!0,class:!0}),u=C(w,`
				© `),o=C(w,n[0]),s=C(w," | Lehi 31 Ward Bishopric"),i=v(w,"BR",{}),w.forEach(c),E.forEach(c),y=V(T),d=v(T,"DIV",{class:!0,"data-svelte-h":!0}),O(d)!=="svelte-38jbpw"&&(d.innerHTML=p),T.forEach(c),$.forEach(c),this.h()},h(){f(l,"alt","logo"),Y(l.src,h="/assets/logo.png")||f(l,"src",h),f(l,"class","footer-logo svelte-ujhjs7"),f(r,"class","col"),f(a,"class","row"),f(d,"class","row"),f(e,"class","container pt-5"),f(t,"id","layout-footer"),f(t,"class","bg-body-tertiary svelte-ujhjs7")},m(g,$){I(g,t,$),m(t,e),m(e,a),m(a,r),m(r,l),m(r,u),m(r,o),m(r,s),m(r,i),m(e,y),m(e,d)},p:D,i:D,o:D,d(g){g&&c(t)}}}function st(n){return[new Date().getFullYear()]}class at extends x{constructor(t){super(),H(this,t,st,et,M,{})}}function rt(n){let t,e,a,r,l,h;t=new tt({});const u=n[1].default,o=z(u,n,n[0],null);return l=new at({}),{c(){q(t.$$.fragment),e=L(),a=_("main"),o&&o.c(),r=L(),q(l.$$.fragment),this.h()},l(s){B(t.$$.fragment,s),e=V(s),a=v(s,"MAIN",{class:!0});var i=b(a);o&&o.l(i),i.forEach(c),r=V(s),B(l.$$.fragment,s),this.h()},h(){f(a,"class","container")},m(s,i){A(t,s,i),I(s,e,i),I(s,a,i),o&&o.m(a,null),I(s,r,i),A(l,s,i),h=!0},p(s,[i]){o&&o.p&&(!h||i&1)&&F(o,u,s,s[0],h?G(u,s[0],i,null):W(s[0]),null)},i(s){h||(S(t.$$.fragment,s),S(o,s),S(l.$$.fragment,s),h=!0)},o(s){j(t.$$.fragment,s),j(o,s),j(l.$$.fragment,s),h=!1},d(s){s&&(c(e),c(a),c(r)),N(t,s),o&&o.d(s),N(l,s)}}}function lt(n,t,e){let{$$slots:a={},$$scope:r}=t;return n.$$set=l=>{"$$scope"in l&&e(0,r=l.$$scope)},[r,a]}class ct extends x{constructor(t){super(),H(this,t,lt,rt,M,{})}}export{ct as component,it as universal};
