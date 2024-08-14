import{A as C,s as z,n as V,o as Y,b as Z}from"./scheduler.tWunq22O.js";import{S as F,i as J,e as b,s as T,j as g,k as v,d,f as y,n as f,o as $,x as M,b as P,m as Q,q as p,r as W,c as ee,l as K,g as te,p as ne,B as le,t as se,a as ae,u as ie}from"./index.C49h1ajP.js";import{g as X,U as S,N as re}from"./app.state.CDp8jccE.js";function D(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function oe(i){const e=Object.prototype.toString.call(i);return i instanceof Date||typeof i=="object"&&e==="[object Date]"?new i.constructor(+i):typeof i=="number"||e==="[object Number]"||typeof i=="string"||e==="[object String]"?new Date(i):new Date(NaN)}function ce(i){return oe(i).getDay()===0}const ue=()=>{const{stores:{authenticated:i,currentUser:e},actions:{init:t}}=X();t();const a=C(i),h=C(e);let r=[];const o={label:"Login",url:"/auth/login",roles:[S.UnAuthenticated],index:100},s={label:"Logout",url:"/auth/logout",roles:[S.Authenticated,S.Admin],index:100},n=a?[s]:[o];r=[...r,...re,...n];const c=(l,u)=>{if(!l)return!0;const _=l.find(x=>x.role===u);return _!=null&&_.sundayOnly?ce(new Date):!0};return r.filter(l=>{const u=h.role,_=!!l.roles.find(N=>N===u),x=c(l.visibilities,u);return _&&x}).sort((l,u)=>l.index-u.index)};function B(i,e,t){const a=i.slice();return a[1]=e[t],a}function G(i,e,t){const a=i.slice();return a[1]=e[t],a}function q(i){let e,t,a=i[1].label+"",h,r,o;return{c(){e=b("li"),t=b("a"),h=P(a),o=T(),this.h()},l(s){e=g(s,"LI",{class:!0});var n=v(e);t=g(n,"A",{class:!0,href:!0});var c=v(t);h=Q(c,a),c.forEach(d),o=y(n),n.forEach(d),this.h()},h(){f(t,"class","nav-link"),f(t,"href",r=i[1].url),f(e,"class","nav-item")},m(s,n){$(s,e,n),p(e,t),p(t,h),p(e,o)},p(s,n){n&1&&a!==(a=s[1].label+"")&&W(h,a),n&1&&r!==(r=s[1].url)&&f(t,"href",r)},d(s){s&&d(e)}}}function R(i){let e,t=i[1].label+"",a,h,r;return{c(){e=b("a"),a=P(t),h=T(),this.h()},l(o){e=g(o,"A",{href:!0,class:!0});var s=v(e);a=Q(s,t),h=y(s),s.forEach(d),this.h()},h(){f(e,"href",r=i[1].url),f(e,"class","list-group-item list-group-item-action")},m(o,s){$(o,e,s),p(e,a),p(e,h)},p(o,s){s&1&&t!==(t=o[1].label+"")&&W(a,t),s&1&&r!==(r=o[1].url)&&f(e,"href",r)},d(o){o&&d(e)}}}function fe(i){let e,t,a,h=D(i[0]),r=[];for(let n=0;n<h.length;n+=1)r[n]=q(G(i,h,n));let o=D(i[0]),s=[];for(let n=0;n<o.length;n+=1)s[n]=R(B(i,o,n));return{c(){e=b("ul");for(let n=0;n<r.length;n+=1)r[n].c();t=T(),a=b("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=g(n,"UL",{class:!0});var c=v(e);for(let u=0;u<r.length;u+=1)r[u].l(c);c.forEach(d),t=y(n),a=g(n,"DIV",{class:!0});var l=v(a);for(let u=0;u<s.length;u+=1)s[u].l(l);l.forEach(d),this.h()},h(){f(e,"class","nav flex-column mt-3 d-none d-lg-flex d-xl-flex d-print-none text-end"),f(a,"class","list-group d-flex d-xl-none d-lg-none d-print-none")},m(n,c){$(n,e,c);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);$(n,t,c),$(n,a,c);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(a,null)},p(n,[c]){if(c&1){h=D(n[0]);let l;for(l=0;l<h.length;l+=1){const u=G(n,h,l);r[l]?r[l].p(u,c):(r[l]=q(u),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=h.length}if(c&1){o=D(n[0]);let l;for(l=0;l<o.length;l+=1){const u=B(n,o,l);s[l]?s[l].p(u,c):(s[l]=R(u),s[l].c(),s[l].m(a,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=o.length}},i:V,o:V,d(n){n&&(d(e),d(t),d(a)),M(r,n),M(s,n)}}}function he(i,e,t){let a=[];return Y(()=>{t(0,a=ue())}),[a]}class de extends F{constructor(e){super(),J(this,e,he,fe,z,{})}}function me(i){let e;return{c(){e=b("i"),this.h()},l(t){e=g(t,"I",{class:!0}),v(e).forEach(d),this.h()},h(){f(e,"class","bi bi-moon")},m(t,a){$(t,e,a)},d(t){t&&d(e)}}}function _e(i){let e;return{c(){e=b("i"),this.h()},l(t){e=g(t,"I",{class:!0}),v(e).forEach(d),this.h()},h(){f(e,"class","bi bi-sun")},m(t,a){$(t,e,a)},d(t){t&&d(e)}}}function be(i){let e,t,a,h='<img src="/assets/logo.png" alt="logo" class="logo svelte-193wsx5"/> <div class="navbar-brand mb-0 h1">Lehi Tolutaha</div>',r,o,s,n,c,l='<i class="bi bi-list"></i>',u,_,x,N,U,j;function O(m,L){return m[0]?_e:me}let I=O(i),k=I(i);return x=new de({}),{c(){e=b("nav"),t=b("div"),a=b("a"),a.innerHTML=h,r=T(),o=b("div"),s=b("button"),k.c(),n=T(),c=b("button"),c.innerHTML=l,u=T(),_=b("div"),ee(x.$$.fragment),this.h()},l(m){e=g(m,"NAV",{class:!0});var L=v(e);t=g(L,"DIV",{class:!0});var A=v(t);a=g(A,"A",{href:!0,class:!0,"data-svelte-h":!0}),K(a)!=="svelte-1wvjxnj"&&(a.innerHTML=h),r=y(A),o=g(A,"DIV",{});var E=v(o);s=g(E,"BUTTON",{class:!0,type:!0});var w=v(s);k.l(w),w.forEach(d),n=y(E),c=g(E,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-expanded":!0,"aria-controls":!0,"data-svelte-h":!0}),K(c)!=="svelte-1s10gm3"&&(c.innerHTML=l),E.forEach(d),A.forEach(d),L.forEach(d),u=y(m),_=g(m,"DIV",{class:!0,id:!0});var H=v(_);te(x.$$.fragment,H),H.forEach(d),this.h()},h(){f(a,"href","/home"),f(a,"class","d-flex align-items-center gap-2 text-decoration-none"),f(s,"class","btn btn-link"),f(s,"type","button"),f(c,"class","btn btn-link d-lg-none d-xl-none d-md-inline d-sm-inline"),f(c,"type","button"),f(c,"data-bs-toggle","collapse"),f(c,"data-bs-target","#mini-menu"),f(c,"aria-expanded","false"),f(c,"aria-controls","mini-menu"),f(t,"class","container"),f(e,"class","navbar bg-body-tertiary d-print-none"),f(_,"class","container collapse mt-5"),f(_,"id","mini-menu")},m(m,L){$(m,e,L),p(e,t),p(t,a),p(t,r),p(t,o),p(o,s),k.m(s,null),p(o,n),p(o,c),$(m,u,L),$(m,_,L),ne(x,_,null),N=!0,U||(j=le(s,"click",i[2]),U=!0)},p(m,[L]){I!==(I=O(m))&&(k.d(1),k=I(m),k&&(k.c(),k.m(s,null)))},i(m){N||(se(x.$$.fragment,m),N=!0)},o(m){ae(x.$$.fragment,m),N=!1},d(m){m&&(d(e),d(u),d(_)),k.d(),ie(x),U=!1,j()}}}function ge(i,e,t){let a;const{stores:{darkTheme:h},actions:{toggleTheme:r}}=X();return Z(i,h,o=>t(0,a=o)),[a,h,r]}class $e extends F{constructor(e){super(),J(this,e,ge,be,z,{})}}export{$e as H,de as N,D as e,ce as i,oe as t};
