import{s as $,o as l}from"../chunks/scheduler.C9-2ehqC.js";import{S as _,i as d,o as m,s as w,q as f,d as y,r as p,j as S,t as g,a as u,f as v,v as c}from"../chunks/index.Bpqzly7s.js";import{g as L}from"../chunks/app.state.SerDnyJj.js";import{g as b}from"../chunks/entry.CPd3k0vE.js";import{L as h}from"../chunks/Loading.CGwp2y2t.js";import{F as j}from"../chunks/Footer.Dxosc6A8.js";import{i as A,t as P}from"../chunks/analytics.BqvobXsC.js";const q=!0,N=Object.freeze(Object.defineProperty({__proto__:null,prerender:q},Symbol.toStringTag,{value:"Module"}));function x(r){let e,n,o,a;return e=new h({props:{message:r[0]}}),o=new j({}),{c(){m(e.$$.fragment),n=w(),m(o.$$.fragment)},l(t){f(e.$$.fragment,t),n=y(t),f(o.$$.fragment,t)},m(t,s){p(e,t,s),S(t,n,s),p(o,t,s),a=!0},p(t,[s]){const i={};s&1&&(i.message=t[0]),e.$set(i)},i(t){a||(g(e.$$.fragment,t),g(o.$$.fragment,t),a=!0)},o(t){u(e.$$.fragment,t),u(o.$$.fragment,t),a=!1},d(t){t&&v(n),c(e,t),c(o,t)}}}function F(r,e,n){const{actions:{logout:o},stores:{pageName:a}}=L();let t="";return l(()=>{a.set("Auth - Logout ..."),n(0,t="Logging out ..."),o(),typeof window<"u"&&(A(),P(window.location.pathname)),setTimeout(()=>{b("/home")},2e3)}),[t]}class V extends _{constructor(e){super(),d(this,e,F,x,$,{})}}export{V as component,N as universal};
