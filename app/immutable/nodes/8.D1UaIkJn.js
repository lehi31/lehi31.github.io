import{s as $,o as l}from"../chunks/scheduler.BKEM4_Ql.js";import{S as _,i as d,c as i,s as S,h as p,g as y,m as f,k as L,t as g,a as u,f as b,l as c}from"../chunks/index.1Kqq7Gk8.js";import{g as h}from"../chunks/app.state.ChrO-HDs.js";import{g as v}from"../chunks/entry.BGjRtmUS.js";import{L as j}from"../chunks/Loading.B8MqY0rO.js";import{F as w}from"../chunks/Footer.Cv8jLJLb.js";const x=!0,z=Object.freeze(Object.defineProperty({__proto__:null,prerender:x},Symbol.toStringTag,{value:"Module"}));function A(r){let e,n,o,s;return e=new j({props:{message:r[0]}}),o=new w({}),{c(){i(e.$$.fragment),n=S(),i(o.$$.fragment)},l(t){p(e.$$.fragment,t),n=y(t),p(o.$$.fragment,t)},m(t,a){f(e,t,a),L(t,n,a),f(o,t,a),s=!0},p(t,[a]){const m={};a&1&&(m.message=t[0]),e.$set(m)},i(t){s||(g(e.$$.fragment,t),g(o.$$.fragment,t),s=!0)},o(t){u(e.$$.fragment,t),u(o.$$.fragment,t),s=!1},d(t){t&&b(n),c(e,t),c(o,t)}}}function F(r,e,n){const{actions:{logout:o},stores:{pageName:s}}=h();let t="";return l(()=>{s.set("Auth - Logout ..."),n(0,t="Logging out ..."),o(),setTimeout(()=>{v("/home")},1500)}),[t]}class C extends _{constructor(e){super(),d(this,e,F,A,$,{})}}export{C as component,z as universal};
