import{s as g,n as p}from"./scheduler.DcEkuL-l.js";import{S as y,i as j,e as f,s as x,c as m,b as d,f as r,d as E,h as u,j as v,k as h,m as L,n as b,u as k}from"./index.tXRonzTj.js";function _(n){let e,s;return{c(){e=f("small"),s=L(n[0]),this.h()},l(a){e=m(a,"SMALL",{class:!0});var l=d(e);s=b(l,n[0]),l.forEach(r),this.h()},h(){u(e,"class","text-muted")},m(a,l){v(a,e,l),h(e,s)},p(a,l){l&1&&k(s,a[0])},d(a){a&&r(e)}}}function D(n){let e,s,a,l,t=n[0]&&_(n);return{c(){e=f("div"),s=f("div"),a=f("div"),l=x(),t&&t.c(),this.h()},l(i){e=m(i,"DIV",{class:!0});var c=d(e);s=m(c,"DIV",{class:!0});var o=d(s);a=m(o,"DIV",{class:!0}),d(a).forEach(r),l=E(o),t&&t.l(o),o.forEach(r),c.forEach(r),this.h()},h(){u(a,"class","loader svelte-1ujpymy"),u(s,"class","d-flex flex-column gap-5 align-items-center"),u(e,"class","d-flex gap-4 justify-content-center mt-20 svelte-1ujpymy")},m(i,c){v(i,e,c),h(e,s),h(s,a),h(s,l),t&&t.m(s,null)},p(i,[c]){i[0]?t?t.p(i,c):(t=_(i),t.c(),t.m(s,null)):t&&(t.d(1),t=null)},i:p,o:p,d(i){i&&r(e),t&&t.d()}}}function I(n,e,s){let{message:a}=e;return n.$$set=l=>{"message"in l&&s(0,a=l.message)},[a]}class q extends y{constructor(e){super(),j(this,e,I,D,g,{message:0})}}export{q as L};