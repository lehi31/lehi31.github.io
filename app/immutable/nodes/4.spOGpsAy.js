import{s as ne,k as ue,b as U,f as Q}from"../chunks/scheduler.C8jfK40o.js";import{S as re,i as oe,e as E,s as D,c as G,b as M,d as $,p as A,f as v,g as P,h as H,D as L,A as ce,j as c,k as C,r as k,E as X,m as q,C as B,t as F,a as R,x,l as J,n as de,q as he,u as fe,y as ee,F as me}from"../chunks/index.BU5kBEy5.js";import{P as _e}from"../chunks/PageLayout.DFvCikYD.js";import{e as Z}from"../chunks/Header.Cr3Z7g5k.js";import{C as pe}from"../chunks/CalendarEvents.BEOe55ji.js";import{g as ve}from"../chunks/app.state.BhiBZQZD.js";import{d as ge,w as z}from"../chunks/index.BO5Edc8W.js";const be=!0,De=Object.freeze(Object.defineProperty({__proto__:null,prerender:be},Symbol.toStringTag,{value:"Module"}));function le(t,e,l){const a=t.slice();return a[13]=e[l],a[14]=e,a[15]=l,a}function te(t,e,l){const a=t.slice();return a[13]=e[l],a[16]=e,a[17]=l,a}function ae(t){let e,l,a,n,r,d=t[1][t[13]].name+"",N,g,f,_,T;function j(){t[11].call(l,t[13])}return{c(){e=E("div"),l=E("input"),n=D(),r=E("label"),N=de(d),f=D(),this.h()},l(u){e=M(u,"DIV",{class:!0});var o=$(e);l=M(o,"INPUT",{class:!0,type:!0,id:!0}),n=P(o),r=M(o,"LABEL",{class:!0,for:!0});var w=$(r);N=he(w,d),w.forEach(v),f=P(o),o.forEach(v),this.h()},h(){c(l,"class","form-check-input"),c(l,"type","checkbox"),c(l,"id",a=t[1][t[13]].id),c(r,"class","form-check-label"),c(r,"for",g=t[1][t[13]].id),c(e,"class","form-check")},m(u,o){C(u,e,o),k(e,l),l.checked=t[1][t[13]].visible,k(e,n),k(e,r),k(r,N),k(e,f),_||(T=B(l,"change",j),_=!0)},p(u,o){t=u,o&2&&a!==(a=t[1][t[13]].id)&&c(l,"id",a),o&2&&(l.checked=t[1][t[13]].visible),o&2&&d!==(d=t[1][t[13]].name+"")&&fe(N,d),o&2&&g!==(g=t[1][t[13]].id)&&c(r,"for",g)},d(u){u&&v(e),_=!1,T()}}}function ie(t){let e,l,a,n,r,d=t[2][t[13]].name+"",N,g,f,_,T;function j(){t[12].call(l,t[13])}return{c(){e=E("div"),l=E("input"),n=D(),r=E("label"),N=de(d),f=D(),this.h()},l(u){e=M(u,"DIV",{class:!0});var o=$(e);l=M(o,"INPUT",{class:!0,type:!0,id:!0}),n=P(o),r=M(o,"LABEL",{class:!0,for:!0});var w=$(r);N=he(w,d),w.forEach(v),f=P(o),o.forEach(v),this.h()},h(){c(l,"class","form-check-input"),c(l,"type","checkbox"),c(l,"id",a=t[2][t[13]].id),c(r,"class","form-check-label"),c(r,"for",g=t[2][t[13]].id),c(e,"class","form-check")},m(u,o){C(u,e,o),k(e,l),l.checked=t[2][t[13]].visible,k(e,n),k(e,r),k(r,N),k(e,f),_||(T=B(l,"change",j),_=!0)},p(u,o){t=u,o&4&&a!==(a=t[2][t[13]].id)&&c(l,"id",a),o&4&&(l.checked=t[2][t[13]].visible),o&4&&d!==(d=t[2][t[13]].name+"")&&fe(N,d),o&4&&g!==(g=t[2][t[13]].id)&&c(r,"for",g)},d(u){u&&v(e),_=!1,T()}}}function se(t){let e,l,a;return{c(){e=E("div"),l=E("iframe"),this.h()},l(n){e=M(n,"DIV",{id:!0,class:!0});var r=$(e);l=M(r,"IFRAME",{title:!0,src:!0,style:!0,width:!0,height:!0,class:!0}),$(l).forEach(v),r.forEach(v),this.h()},h(){c(l,"title","calendars"),Q(l.src,a=t[3])||c(l,"src",a),ce(l,"border","0"),c(l,"width","100%"),c(l,"height","800"),c(l,"class","svelte-1tnqlgk"),c(e,"id","calendar-container"),c(e,"class","svelte-1tnqlgk"),ee(e,"dark-theme",t[4])},m(n,r){C(n,e,r),k(e,l)},p(n,r){r&8&&!Q(l.src,a=n[3])&&c(l,"src",a),r&16&&ee(e,"dark-theme",n[4])},d(n){n&&v(e)}}}function ke(t){let e,l,a="Schedule",n,r="Week",d,N="Month",g,f,_,T,j,u,o,w,m,Y,V,O=Z(Object.keys(t[1])),h=[];for(let i=0;i<O.length;i+=1)h[i]=ae(te(t,O,i));let W=Z(Object.keys(t[2])),b=[];for(let i=0;i<W.length;i+=1)b[i]=ie(le(t,W,i));let y=t[3]&&se(t);return w=new pe({}),{c(){e=E("select"),l=E("option"),l.textContent=a,n=E("option"),n.textContent=r,d=E("option"),d.textContent=N,g=D(),f=E("div"),_=E("div");for(let i=0;i<h.length;i+=1)h[i].c();T=D(),j=E("div");for(let i=0;i<b.length;i+=1)b[i].c();u=D(),y&&y.c(),o=D(),G(w.$$.fragment),this.h()},l(i){e=M(i,"SELECT",{style:!0,class:!0,"aria-label":!0});var p=$(e);l=M(p,"OPTION",{"data-svelte-h":!0}),A(l)!=="svelte-1jk2pdl"&&(l.textContent=a),n=M(p,"OPTION",{"data-svelte-h":!0}),A(n)!=="svelte-1vl23py"&&(n.textContent=r),d=M(p,"OPTION",{"data-svelte-h":!0}),A(d)!=="svelte-1xd1op2"&&(d.textContent=N),p.forEach(v),g=P(i),f=M(i,"DIV",{class:!0});var s=$(f);_=M(s,"DIV",{class:!0});var S=$(_);for(let I=0;I<h.length;I+=1)h[I].l(S);S.forEach(v),T=P(s),j=M(s,"DIV",{class:!0});var K=$(j);for(let I=0;I<b.length;I+=1)b[I].l(K);K.forEach(v),s.forEach(v),u=P(i),y&&y.l(i),o=P(i),H(w.$$.fragment,i),this.h()},h(){l.__value="AGENDA",L(l,l.__value),n.__value="WEEK",L(n,n.__value),d.__value="MONTH",L(d,d.__value),ce(e,"width","200px"),c(e,"class","form-select form-select-sm"),c(e,"aria-label","View Type"),t[0]===void 0&&ue(()=>t[10].call(e)),c(_,"class","d-flex flex-column gap-3"),c(j,"class","d-flex flex-column gap-3"),c(f,"class","d-flex flex-row gap-3")},m(i,p){C(i,e,p),k(e,l),k(e,n),k(e,d),X(e,t[0],!0),C(i,g,p),C(i,f,p),k(f,_);for(let s=0;s<h.length;s+=1)h[s]&&h[s].m(_,null);k(f,T),k(f,j);for(let s=0;s<b.length;s+=1)b[s]&&b[s].m(j,null);C(i,u,p),y&&y.m(i,p),C(i,o,p),q(w,i,p),m=!0,Y||(V=B(e,"change",t[10]),Y=!0)},p(i,[p]){if(p&1&&X(e,i[0]),p&2){O=Z(Object.keys(i[1]));let s;for(s=0;s<O.length;s+=1){const S=te(i,O,s);h[s]?h[s].p(S,p):(h[s]=ae(S),h[s].c(),h[s].m(_,null))}for(;s<h.length;s+=1)h[s].d(1);h.length=O.length}if(p&4){W=Z(Object.keys(i[2]));let s;for(s=0;s<W.length;s+=1){const S=le(i,W,s);b[s]?b[s].p(S,p):(b[s]=ie(S),b[s].c(),b[s].m(j,null))}for(;s<b.length;s+=1)b[s].d(1);b.length=W.length}i[3]?y?y.p(i,p):(y=se(i),y.c(),y.m(o.parentNode,o)):y&&(y.d(1),y=null)},i(i){m||(F(w.$$.fragment,i),m=!0)},o(i){R(w.$$.fragment,i),m=!1},d(i){i&&(v(e),v(g),v(f),v(u),v(o)),x(h,i),x(b,i),y&&y.d(i),J(w,i),Y=!1,V()}}}function ye(t,e,l){let a,n,r,d,N;const{stores:{darkTheme:g}}=ve();U(t,g,m=>l(4,N=m));const f=z("MONTH");U(t,f,m=>l(0,a=m));const _=z({Ward:{id:"ward-calendar",name:"Ward Calendar",sid:"NjMxY2M4N2NmYTIyNjIxNjZmNDY2YWVlMzk3ZDc0OGU5ODcxODU4ZTdmMDU5Y2ZiZTMxYWFjOWY1M2RjYmZmMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",visible:!0},Primary:{id:"primary-calendar",name:"Ward Primary",sid:"NGNiNGY1ZTJmN2UwOTUxNDk3OTgzNjU2ZThiNGVlMzk5MzUyOTgzZTMzZjBjYzdhYjk0NDkyNGFmMDM2MmFhZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",visible:!1},Deacons:{id:"deacon-calendar",name:"Ward Deacons",sid:"60f4a2c8e1d7558ad26fb650d4459403619c2a40c4256643fa2837b702307e5b",visible:!1}});U(t,_,m=>l(1,n=m));const T=z({SkyRidgeHighSchool:{id:"skyridge-high-school-calendar",name:"Skyridge High School",sid:"alpinedistrict.org_rgs6ku5vqrhofuv2v9a9voj0h8%40group.calendar.google.com",visible:!1},LehiHighSchool:{id:"lehi-high-school-calendar",name:"Lehi High School",sid:"lehihigh%40gmail.com",visible:!1},ViewPointMiddleSchool:{id:"view-point-middle-school-calendar",name:"View Point Middle School",sid:"c_3j0cuetipbv7ha5ud0fp7lh14k%40group.calendar.google.com",visible:!1},WillowCreekMiddleSchool:{id:"willow-creek-middle-school-calendar",name:"Willow Creek Middle School",sid:"becar.admin%40gmail.com",visible:!1},LibertyHillsElementary:{id:"liberty-hills-elementary-school-calendar",name:"Liberty Hills Elementary School",sid:"libertyhillselementary%40alpinedistrict.org",visible:!1}});U(t,T,m=>l(2,r=m));const j=ge([_,T,f],([m,Y,V])=>{let O=`https://calendar.google.com/calendar/embed?&ctz=America/Denver&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&mode=${V}`;return Object.keys(m).forEach(h=>{m[h].visible&&(O+=`&src=${m[h].sid}`)}),Object.keys(Y).forEach(h=>{Y[h].visible&&(O+=`&src=${Y[h].sid}`)}),O});U(t,j,m=>l(3,d=m));function u(){a=me(this),f.set(a)}function o(m){n[m].visible=this.checked,_.set(n)}function w(m){r[m].visible=this.checked,T.set(r)}return[a,n,r,d,N,g,f,_,T,j,u,o,w]}class Ne extends re{constructor(e){super(),oe(this,e,ye,ke,ne,{})}}function we(t){let e,l;return e=new Ne({}),{c(){G(e.$$.fragment)},l(a){H(e.$$.fragment,a)},m(a,n){q(e,a,n),l=!0},i(a){l||(F(e.$$.fragment,a),l=!0)},o(a){R(e.$$.fragment,a),l=!1},d(a){J(e,a)}}}function Ee(t){let e,l;return e=new _e({props:{pageTitle:"Announcements",$$slots:{default:[we]},$$scope:{ctx:t}}}),{c(){G(e.$$.fragment)},l(a){H(e.$$.fragment,a)},m(a,n){q(e,a,n),l=!0},p(a,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:a}),e.$set(r)},i(a){l||(F(e.$$.fragment,a),l=!0)},o(a){R(e.$$.fragment,a),l=!1},d(a){J(e,a)}}}class Pe extends re{constructor(e){super(),oe(this,e,null,Ee,ne,{})}}export{Pe as component,De as universal};