import{s as ke,c as pt,u as vt,g as bt,a as gt,n as le,r as Dt,h as Be,b as Et,o as Xt}from"./scheduler.C9-2ehqC.js";import{S as Ne,i as Se,e as h,b as K,s as S,j as p,k as I,m as Q,d as v,f as M,n as c,o as O,q as u,r as ie,t as j,a as z,c as De,g as we,p as Ie,u as Te,B as W,l as $,x as se,C as re,w as et,v as tt,D as $t,z as cn,H as fn,I as dn,y as kt}from"./index.8lvwZVbA.js";import{s as nt,a as xt,F as en,A as mn}from"./announcements.data.Cg7G1cuC.js";import{t as tn,b as Nt,f as Fe,d as je,p as St,e as _t}from"./Header.BiSYsWYb.js";import{S as _n}from"./Spinner.BIR51mvO.js";import{w as xe}from"./index.-KbeAlZo.js";import{A as Pe,B as Mt}from"./app.state.DWeeLeA6.js";function hn(t,e){const n=tn(t);return n.setHours(e),n}function pn(t,e){const n=tn(t);return n.setMinutes(e),n}var J=[];for(var ut=0;ut<256;++ut)J.push((ut+256).toString(16).slice(1));function vn(t,e=0){return(J[t[e+0]]+J[t[e+1]]+J[t[e+2]]+J[t[e+3]]+"-"+J[t[e+4]]+J[t[e+5]]+"-"+J[t[e+6]]+J[t[e+7]]+"-"+J[t[e+8]]+J[t[e+9]]+"-"+J[t[e+10]]+J[t[e+11]]+J[t[e+12]]+J[t[e+13]]+J[t[e+14]]+J[t[e+15]]).toLowerCase()}var Xe,bn=new Uint8Array(16);function gn(){if(!Xe&&(Xe=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Xe))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Xe(bn)}var Dn=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Yt={randomUUID:Dn};function wn(t,e,n){if(Yt.randomUUID&&!e&&!t)return Yt.randomUUID();t=t||{};var l=t.random||(t.rng||gn)();return l[6]=l[6]&15|64,l[8]=l[8]&63|128,vn(l)}function In(t){let e,n,l,a,s,i,o,r,f,d,C;const m=t[8].default,w=pt(m,t,t[7],null);return{c(){e=h("div"),n=h("div"),l=h("h4"),a=K(t[1]),s=S(),i=h("button"),r=S(),f=h("div"),w&&w.c(),this.h()},l(_){e=p(_,"DIV",{class:!0,tabindex:!0,id:!0,"aria-labelledby":!0});var g=I(e);n=p(g,"DIV",{class:!0});var b=I(n);l=p(b,"H4",{class:!0,id:!0});var D=I(l);a=Q(D,t[1]),D.forEach(v),s=M(b),i=p(b,"BUTTON",{type:!0,class:!0,"data-bs-dismiss":!0,"data-bs-target":!0,"aria-label":!0}),I(i).forEach(v),b.forEach(v),r=M(g),f=p(g,"DIV",{class:!0});var V=I(f);w&&w.l(V),V.forEach(v),g.forEach(v),this.h()},h(){c(l,"class","offcanvas-title"),c(l,"id",t[4]),c(i,"type","button"),c(i,"class","btn-close"),c(i,"data-bs-dismiss","offcanvas"),c(i,"data-bs-target",o="#"+t[0]),c(i,"aria-label","Close"),c(n,"class","offcanvas-header"),c(f,"class","offcanvas-body"),c(e,"class",d=t[3]+" "+t[2]),c(e,"tabindex","-1"),c(e,"id",t[0]),c(e,"aria-labelledby",t[4])},m(_,g){O(_,e,g),u(e,n),u(n,l),u(l,a),u(n,s),u(n,i),u(e,r),u(e,f),w&&w.m(f,null),C=!0},p(_,[g]){(!C||g&2)&&ie(a,_[1]),(!C||g&1&&o!==(o="#"+_[0]))&&c(i,"data-bs-target",o),w&&w.p&&(!C||g&128)&&vt(w,m,_,_[7],C?gt(m,_[7],g,null):bt(_[7]),null),(!C||g&12&&d!==(d=_[3]+" "+_[2]))&&c(e,"class",d),(!C||g&1)&&c(e,"id",_[0])},i(_){C||(j(w,_),C=!0)},o(_){z(w,_),C=!1},d(_){_&&v(e),w&&w.d(_)}}}function Tn(t,e,n){let l,a,{$$slots:s={},$$scope:i}=e,{id:o}=e,{title:r}=e,{breakpoint:f=""}=e,{placement:d="end"}=e;const C=wn();return t.$$set=m=>{"id"in m&&n(0,o=m.id),"title"in m&&n(1,r=m.title),"breakpoint"in m&&n(5,f=m.breakpoint),"placement"in m&&n(6,d=m.placement),"$$scope"in m&&n(7,i=m.$$scope)},t.$$.update=()=>{t.$$.dirty&32&&n(3,l=`offcanvas${f===""?"":"-"+f}`),t.$$.dirty&64&&n(2,a=`offcanvas-${d}`)},[o,r,a,l,C,f,d,i,s]}class Cn extends Ne{constructor(e){super(),Se(this,e,Tn,In,ke,{id:0,title:1,breakpoint:5,placement:6})}}const yn=t=>({}),Lt=t=>({});function En(t){let e;const n=t[2].default,l=pt(n,t,t[3],null);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,s){l&&l.m(a,s),e=!0},p(a,s){l&&l.p&&(!e||s&8)&&vt(l,n,a,a[3],e?gt(n,a[3],s,null):bt(a[3]),null)},i(a){e||(j(l,a),e=!0)},o(a){z(l,a),e=!1},d(a){l&&l.d(a)}}}function kn(t){let e,n,l,a,s;const i=t[2].label,o=pt(i,t,t[3],Lt);return a=new Cn({props:{title:t[1],id:t[0],$$slots:{default:[En]},$$scope:{ctx:t}}}),{c(){e=h("button"),o&&o.c(),l=S(),De(a.$$.fragment),this.h()},l(r){e=p(r,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0});var f=I(e);o&&o.l(f),f.forEach(v),l=M(r),we(a.$$.fragment,r),this.h()},h(){c(e,"class","btn btn-sm btn-secondary"),c(e,"type","button"),c(e,"data-bs-toggle","offcanvas"),c(e,"data-bs-target",n="#"+t[0]),c(e,"aria-controls",t[0])},m(r,f){O(r,e,f),o&&o.m(e,null),O(r,l,f),Ie(a,r,f),s=!0},p(r,[f]){o&&o.p&&(!s||f&8)&&vt(o,i,r,r[3],s?gt(i,r[3],f,yn):bt(r[3]),Lt),(!s||f&1&&n!==(n="#"+r[0]))&&c(e,"data-bs-target",n),(!s||f&1)&&c(e,"aria-controls",r[0]);const d={};f&2&&(d.title=r[1]),f&1&&(d.id=r[0]),f&8&&(d.$$scope={dirty:f,ctx:r}),a.$set(d)},i(r){s||(j(o,r),j(a.$$.fragment,r),s=!0)},o(r){z(o,r),z(a.$$.fragment,r),s=!1},d(r){r&&(v(e),v(l)),o&&o.d(r),Te(a,r)}}}function Nn(t,e,n){let{$$slots:l={},$$scope:a}=e,{id:s=""}=e,{drawerTitle:i=""}=e;return t.$$set=o=>{"id"in o&&n(0,s=o.id),"drawerTitle"in o&&n(1,i=o.drawerTitle),"$$scope"in o&&n(3,a=o.$$scope)},[s,i,l,a]}class nn extends Ne{constructor(e){super(),Se(this,e,Nn,kn,ke,{id:0,drawerTitle:1})}}function Sn(t,e){const n=An(e);return"formatToParts"in n?Yn(n,t):Ln(n,t)}const Mn={year:0,month:1,day:2,hour:3,minute:4,second:5};function Yn(t,e){try{const n=t.formatToParts(e),l=[];for(let a=0;a<n.length;a++){const s=Mn[n[a].type];s!==void 0&&(l[s]=parseInt(n[a].value,10))}return l}catch(n){if(n instanceof RangeError)return[NaN];throw n}}function Ln(t,e){const n=t.format(e),l=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[parseInt(l[3],10),parseInt(l[1],10),parseInt(l[2],10),parseInt(l[4],10),parseInt(l[5],10),parseInt(l[6],10)]}const ct={},Ut=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),Un=Ut==="06/25/2014, 00:00:00"||Ut==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";function An(t){return ct[t]||(ct[t]=Un?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})),ct[t]}function ln(t,e,n,l,a,s,i){const o=new Date(0);return o.setUTCFullYear(t,e,n),o.setUTCHours(l,a,s,i),o}const At=36e5,Bn=6e4,ft={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function an(t,e,n){if(!t)return 0;let l=ft.timezoneZ.exec(t);if(l)return 0;let a,s;if(l=ft.timezoneHH.exec(t),l)return a=parseInt(l[1],10),Bt(a)?-(a*At):NaN;if(l=ft.timezoneHHMM.exec(t),l){a=parseInt(l[2],10);const i=parseInt(l[3],10);return Bt(a,i)?(s=Math.abs(a)*At+i*Bn,l[1]==="+"?-s:s):NaN}if(On(t)){e=new Date(e||Date.now());const i=n?e:Hn(e),o=ht(i,t);return-(n?o:Vn(e,o,t))}return NaN}function Hn(t){return ln(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function ht(t,e){const n=Sn(t,e),l=ln(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime();let a=t.getTime();const s=a%1e3;return a-=s>=0?s:1e3+s,l-a}function Vn(t,e,n){let a=t.getTime()-e;const s=ht(new Date(a),n);if(e===s)return e;a-=s-e;const i=ht(new Date(a),n);return s===i?s:Math.max(s,i)}function Bt(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}const Ht={};function On(t){if(Ht[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),Ht[t]=!0,!0}catch{return!1}}function Vt(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+t-+e}const Fn=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,dt=36e5,Ot=6e4,jn=2,ee={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:Fn};function Pn(t,e={}){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);const n=e.additionalDigits==null?jn:Number(e.additionalDigits);if(n!==2&&n!==1&&n!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(Object.prototype.toString.call(t)!=="[object String]")return new Date(NaN);const l=Rn(t),{year:a,restDateString:s}=zn(l.date,n),i=Zn(s,a);if(i===null||isNaN(i.getTime()))return new Date(NaN);if(i){const o=i.getTime();let r=0,f;if(l.time&&(r=Wn(l.time),r===null||isNaN(r)))return new Date(NaN);if(l.timeZone||e.timeZone){if(f=an(l.timeZone||e.timeZone,new Date(o+r)),isNaN(f))return new Date(NaN)}else f=Vt(new Date(o+r)),f=Vt(new Date(o+r+f));return new Date(o+r+f)}else return new Date(NaN)}function Rn(t){const e={};let n=ee.dateTimePattern.exec(t),l;if(n?(e.date=n[1],l=n[3]):(n=ee.datePattern.exec(t),n?(e.date=n[1],l=n[2]):(e.date=null,l=t)),l){const a=ee.timeZone.exec(l);a?(e.time=l.replace(a[1],""),e.timeZone=a[1].trim()):e.time=l}return e}function zn(t,e){if(t){const n=ee.YYY[e],l=ee.YYYYY[e];let a=ee.YYYY.exec(t)||l.exec(t);if(a){const s=a[1];return{year:parseInt(s,10),restDateString:t.slice(s.length)}}if(a=ee.YY.exec(t)||n.exec(t),a){const s=a[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}}return{year:null}}function Zn(t,e){if(e===null)return null;let n,l,a;if(!t||!t.length)return n=new Date(0),n.setUTCFullYear(e),n;let s=ee.MM.exec(t);if(s)return n=new Date(0),l=parseInt(s[1],10)-1,jt(e,l)?(n.setUTCFullYear(e,l),n):new Date(NaN);if(s=ee.DDD.exec(t),s){n=new Date(0);const i=parseInt(s[1],10);return Jn(e,i)?(n.setUTCFullYear(e,0,i),n):new Date(NaN)}if(s=ee.MMDD.exec(t),s){n=new Date(0),l=parseInt(s[1],10)-1;const i=parseInt(s[2],10);return jt(e,l,i)?(n.setUTCFullYear(e,l,i),n):new Date(NaN)}if(s=ee.Www.exec(t),s)return a=parseInt(s[1],10)-1,Pt(a)?Ft(e,a):new Date(NaN);if(s=ee.WwwD.exec(t),s){a=parseInt(s[1],10)-1;const i=parseInt(s[2],10)-1;return Pt(a,i)?Ft(e,a,i):new Date(NaN)}return null}function Wn(t){let e,n,l=ee.HH.exec(t);if(l)return e=parseFloat(l[1].replace(",",".")),mt(e)?e%24*dt:NaN;if(l=ee.HHMM.exec(t),l)return e=parseInt(l[1],10),n=parseFloat(l[2].replace(",",".")),mt(e,n)?e%24*dt+n*Ot:NaN;if(l=ee.HHMMSS.exec(t),l){e=parseInt(l[1],10),n=parseInt(l[2],10);const a=parseFloat(l[3].replace(",","."));return mt(e,n,a)?e%24*dt+n*Ot+a*1e3:NaN}return null}function Ft(t,e,n){e=e||0,n=n||0;const l=new Date(0);l.setUTCFullYear(t,0,4);const a=l.getUTCDay()||7,s=e*7+n+1-a;return l.setUTCDate(l.getUTCDate()+s),l}const qn=[31,28,31,30,31,30,31,31,30,31,30,31],Gn=[31,29,31,30,31,30,31,31,30,31,30,31];function sn(t){return t%400===0||t%4===0&&t%100!==0}function jt(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;const l=sn(t);if(l&&n>Gn[e]||!l&&n>qn[e])return!1}return!0}function Jn(t,e){if(e<1)return!1;const n=sn(t);return!(n&&e>366||!n&&e>365)}function Pt(t,e){return!(t<0||t>52||e!=null&&(e<0||e>6))}function mt(t,e,n){return!(t<0||t>=25||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}function Re(t,e,n){t=Pn(t,n);const l=an(e,t,!0),a=new Date(t.getTime()-l),s=new Date(0);return s.setFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),s.setHours(a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds()),s}const Kn=xe([]);async function lt(){const{data:t,error:e}=await nt.from("calendar_events").select("*").order("start_time",{ascending:!0});if(e)throw e;const n=t||[];return Kn.set(n),n}async function Qn(t){const{data:e,error:n}=await nt.from("calendar_events").insert([t]).select();if(n)throw n;return await lt(),e?e[0]:void 0}async function Xn(t,e){const{data:n,error:l}=await nt.from("calendar_events").update(e).eq("id",t).select();if(l)throw l;return await lt(),n?n[0]:void 0}async function $n(t){const{error:e}=await nt.from("calendar_events").delete().eq("id",t);if(e)throw e;await lt()}function xn(t,e){typeof window<"u"&&window.gtag?window.gtag("event",t,e||{}):console.warn("gtag is not available")}function $e(t,e,n,l){xn(t,{event_category:e,event_label:n,value:l})}let ze=null;const el=()=>{const t=xe(!1),e=xe([]),n=xe([]),l=s=>s.length?s.map(i=>({...i,start_time:Nt(i.start_time),end_time:Nt(i.end_time)})):[];return ze={stores:{ready:t,data:e,dbData:n},actions:{reload:async()=>{t.set(!1);const s=await lt();n.set(l(s)),t.set(!0)}}},ze},rn=()=>ze?.stores&&Object.keys(ze.stores).length>0?ze:el();function tl(t){let e,n,l,a,s,i,o,r,f,d,C,m,w,_,g,b,D,V,B,y,E,A,U;return{c(){e=h("div"),n=h("div"),l=h("div"),a=h("div"),s=h("h5"),i=K(t[0]),o=S(),r=h("button"),f=S(),d=h("div"),C=h("p"),m=K(t[1]),w=S(),_=h("div"),g=h("button"),b=K(t[2]),V=S(),B=h("button"),y=K(t[4]),this.h()},l(T){e=p(T,"DIV",{class:!0,tabindex:!0});var Y=I(e);n=p(Y,"DIV",{class:!0});var te=I(n);l=p(te,"DIV",{class:!0});var q=I(l);a=p(q,"DIV",{class:!0});var ne=I(a);s=p(ne,"H5",{class:!0});var Z=I(s);i=Q(Z,t[0]),Z.forEach(v),o=M(ne),r=p(ne,"BUTTON",{type:!0,class:!0,"aria-label":!0});var R=I(r);R.forEach(v),ne.forEach(v),f=M(q),d=p(q,"DIV",{class:!0});var ce=I(d);C=p(ce,"P",{});var oe=I(C);m=Q(oe,t[1]),oe.forEach(v),ce.forEach(v),w=M(q),_=p(q,"DIV",{class:!0});var F=I(_);g=p(F,"BUTTON",{type:!0,class:!0,"data-bs-dismiss":!0});var de=I(g);b=Q(de,t[2]),de.forEach(v),V=M(F),B=p(F,"BUTTON",{type:!0,class:!0});var pe=I(B);y=Q(pe,t[4]),pe.forEach(v),F.forEach(v),q.forEach(v),te.forEach(v),Y.forEach(v),this.h()},h(){c(s,"class","modal-title"),c(r,"type","button"),c(r,"class","btn-close"),c(r,"aria-label",t[2]),c(a,"class","modal-header"),c(d,"class","modal-body"),c(g,"type","button"),c(g,"class",D="btn "+t[3]+" svelte-ydpc16"),c(g,"data-bs-dismiss","modal"),c(B,"type","button"),c(B,"class",E="btn "+t[5]+" svelte-ydpc16"),c(_,"class","modal-footer"),c(l,"class","modal-content"),c(n,"class","modal-dialog"),c(e,"class","modal svelte-ydpc16"),c(e,"tabindex","-1")},m(T,Y){O(T,e,Y),u(e,n),u(n,l),u(l,a),u(a,s),u(s,i),u(a,o),u(a,r),u(l,f),u(l,d),u(d,C),u(C,m),u(l,w),u(l,_),u(_,g),u(g,b),u(_,V),u(_,B),u(B,y),A||(U=[W(r,"click",t[8]),W(g,"click",t[9]),W(B,"click",t[10])],A=!0)},p(T,[Y]){Y&1&&ie(i,T[0]),Y&4&&c(r,"aria-label",T[2]),Y&2&&ie(m,T[1]),Y&4&&ie(b,T[2]),Y&8&&D!==(D="btn "+T[3]+" svelte-ydpc16")&&c(g,"class",D),Y&16&&ie(y,T[4]),Y&32&&E!==(E="btn "+T[5]+" svelte-ydpc16")&&c(B,"class",E)},i:le,o:le,d(T){T&&v(e),A=!1,Dt(U)}}}function nl(t,e,n){let{title:l=""}=e,{message:a=""}=e,{rejectButtonLabel:s="No"}=e,{rejectButtonCSS:i="btn-secondary"}=e,{confirmButtonLabel:o="Yes"}=e,{confirmButtonCSS:r="btn-primary"}=e,{callback:f}=e;function d(_){f(_)}const C=()=>d(!1),m=()=>d(!1),w=()=>d(!0);return t.$$set=_=>{"title"in _&&n(0,l=_.title),"message"in _&&n(1,a=_.message),"rejectButtonLabel"in _&&n(2,s=_.rejectButtonLabel),"rejectButtonCSS"in _&&n(3,i=_.rejectButtonCSS),"confirmButtonLabel"in _&&n(4,o=_.confirmButtonLabel),"confirmButtonCSS"in _&&n(5,r=_.confirmButtonCSS),"callback"in _&&n(7,f=_.callback)},[l,a,s,i,o,r,d,f,C,m,w]}class ll extends Ne{constructor(e){super(),Se(this,e,nl,tl,ke,{title:0,message:1,rejectButtonLabel:2,rejectButtonCSS:3,confirmButtonLabel:4,confirmButtonCSS:5,callback:7})}}let Rt;function al(t){const e=document.createElement("div");document.body.appendChild(e);const n={title:"Are you sure?",message:"Are you sure you want to do that?  You will not be able to undo this.",callback:()=>{console.log("callback")}};t.title&&(n.title=t.title),t.message&&(n.message=t.message),t.rejectButtonLabel&&(n.rejectButtonLabel=t.rejectButtonLabel),t.rejectButtonCSS&&(n.rejectButtonCSS=t.rejectButtonCSS),t.confirmButtonLabel&&(n.confirmButtonLabel=t.confirmButtonLabel),t.confirmButtonCSS&&(n.confirmButtonCSS=t.confirmButtonCSS),n.callback=l=>{console.log("Confirm result:",l),Rt.$destroy(),document.body.removeChild(e),t.callback&&typeof t.callback=="function"&&t.callback(l)},Rt=new ll({target:e,props:n})}function zt(t){let e,n,l="Start time*",a,s,i,o,r,f,d="End time*",C,m,w,_,g;return{c(){e=h("div"),n=h("div"),n.textContent=l,a=S(),s=h("input"),o=S(),r=h("div"),f=h("div"),f.textContent=d,C=S(),m=h("input"),this.h()},l(b){e=p(b,"DIV",{class:!0});var D=I(e);n=p(D,"DIV",{"data-svelte-h":!0}),$(n)!=="svelte-gzi1xn"&&(n.textContent=l),a=M(D),s=p(D,"INPUT",{name:!0,type:!0,step:!0,class:!0}),D.forEach(v),o=M(b),r=p(b,"DIV",{class:!0});var V=I(r);f=p(V,"DIV",{"data-svelte-h":!0}),$(f)!=="svelte-ig3ngi"&&(f.textContent=d),C=M(V),m=p(V,"INPUT",{name:!0,type:!0,step:!0,class:!0}),V.forEach(v),this.h()},h(){c(s,"name",i=t[1]+"-start-time"),c(s,"type","time"),c(s,"step",900),c(s,"class","form-control"),s.disabled=t[6],s.required=!0,se(s,"is-invalid",t[3]),c(e,"class","d-flex flex-column gap-2"),c(m,"name",w=t[1]+"-end-time"),c(m,"type","time"),c(m,"step",900),c(m,"class","form-control"),m.disabled=t[6],m.required=!0,se(m,"is-invalid",t[2]),c(r,"class","d-flex flex-column gap-2")},m(b,D){O(b,e,D),u(e,n),u(e,a),u(e,s),t[29](s),re(s,t[15]),O(b,o,D),O(b,r,D),u(r,f),u(r,C),u(r,m),t[32](m),re(m,t[16]),_||(g=[W(s,"focus",t[30]),W(s,"input",t[31]),W(m,"focus",t[33]),W(m,"input",t[34])],_=!0)},p(b,D){D[0]&2&&i!==(i=b[1]+"-start-time")&&c(s,"name",i),D[0]&64&&(s.disabled=b[6]),D[0]&32768&&re(s,b[15]),D[0]&8&&se(s,"is-invalid",b[3]),D[0]&2&&w!==(w=b[1]+"-end-time")&&c(m,"name",w),D[0]&64&&(m.disabled=b[6]),D[0]&65536&&re(m,b[16]),D[0]&4&&se(m,"is-invalid",b[2])},d(b){b&&(v(e),v(o),v(r)),t[29](null),t[32](null),_=!1,Dt(g)}}}function sl(t){let e,n="<span>Delete</span>",l,a;return{c(){e=h("button"),e.innerHTML=n,this.h()},l(s){e=p(s,"BUTTON",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-1bw2173"&&(e.innerHTML=n),this.h()},h(){c(e,"class","btn btn-danger position-relative")},m(s,i){O(s,e,i),l||(a=W(e,"click",t[19]),l=!0)},p:le,d(s){s&&v(e),l=!1,a()}}}function rl(t){let e,n="Create";return{c(){e=h("span"),e.textContent=n},l(l){e=p(l,"SPAN",{"data-svelte-h":!0}),$(e)!=="svelte-1wf0js6"&&(e.textContent=n)},m(l,a){O(l,e,a)},d(l){l&&v(e)}}}function il(t){let e,n="Save";return{c(){e=h("span"),e.textContent=n},l(l){e=p(l,"SPAN",{"data-svelte-h":!0}),$(e)!=="svelte-l126tb"&&(e.textContent=n)},m(l,a){O(l,e,a)},d(l){l&&v(e)}}}function Zt(t){let e,n='<span class="visually-hidden">Item not saved</span>';return{c(){e=h("span"),e.innerHTML=n,this.h()},l(l){e=p(l,"SPAN",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-1g0a6ie"&&(e.innerHTML=n),this.h()},h(){c(e,"class","position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle")},m(l,a){O(l,e,a)},d(l){l&&v(e)}}}function ol(t){let e,n,l,a="Title*",s,i,o,r,f,d="Event title. i.e. Ward Conference, Ward BBQ Night",C,m,w,_="Date*",g,b,D,V,B,y,E,A,U,T,Y,te,q,ne,Z,R,ce="Description",oe,F,de,pe,me,Ze="Describe the event to the best of your knowledge",He,ae,ve,We="Location",Ve,G,Me,Oe,_e,qe="Location can be physical or virtual",L,H,ue,Ce=t[13].message+"",Ye,be,at,ye,Ee,st,rt,fe,it,P,ot,wt,X=!t[0].is_all_day&&zt(t);Ee=new _n({props:{size:"xs"}});let he=t[18]&&sl(t);function un(k,N){return k[18]?il:rl}let Ge=un(t)(t),x=t[17]&&Zt();return{c(){e=h("div"),n=h("div"),l=h("div"),l.textContent=a,s=S(),i=h("input"),r=S(),f=h("small"),f.textContent=d,C=S(),m=h("div"),w=h("div"),w.textContent=_,g=S(),b=h("input"),V=S(),B=h("div"),y=h("div"),E=h("input"),U=S(),T=h("label"),Y=K("All Day Event"),q=S(),X&&X.c(),ne=S(),Z=h("div"),R=h("div"),R.textContent=ce,oe=S(),F=h("textarea"),pe=S(),me=h("small"),me.textContent=Ze,He=S(),ae=h("div"),ve=h("div"),ve.textContent=We,Ve=S(),G=h("input"),Oe=S(),_e=h("small"),_e.textContent=qe,L=S(),H=h("div"),ue=h("small"),Ye=K(Ce),at=S(),ye=h("span"),De(Ee.$$.fragment),st=S(),he&&he.c(),rt=S(),fe=h("button"),Ge.c(),it=S(),x&&x.c(),this.h()},l(k){e=p(k,"DIV",{class:!0});var N=I(e);n=p(N,"DIV",{class:!0});var Le=I(n);l=p(Le,"DIV",{"data-svelte-h":!0}),$(l)!=="svelte-1w3dtko"&&(l.textContent=a),s=M(Le),i=p(Le,"INPUT",{name:!0,type:!0,class:!0,placeholder:!0}),r=M(Le),f=p(Le,"SMALL",{class:!0,"data-svelte-h":!0}),$(f)!=="svelte-gvb7m1"&&(f.textContent=d),Le.forEach(v),C=M(N),m=p(N,"DIV",{class:!0});var Je=I(m);w=p(Je,"DIV",{"data-svelte-h":!0}),$(w)!=="svelte-1992pd0"&&(w.textContent=_),g=M(Je),b=p(Je,"INPUT",{name:!0,type:!0,class:!0,placeholder:!0}),Je.forEach(v),V=M(N),B=p(N,"DIV",{});var It=I(B);y=p(It,"DIV",{class:!0});var Ke=I(y);E=p(Ke,"INPUT",{class:!0,type:!0,id:!0}),U=M(Ke),T=p(Ke,"LABEL",{class:!0,for:!0});var Tt=I(T);Y=Q(Tt,"All Day Event"),Tt.forEach(v),Ke.forEach(v),It.forEach(v),q=M(N),X&&X.l(N),ne=M(N),Z=p(N,"DIV",{class:!0});var Ue=I(Z);R=p(Ue,"DIV",{"data-svelte-h":!0}),$(R)!=="svelte-1x8itd0"&&(R.textContent=ce),oe=M(Ue),F=p(Ue,"TEXTAREA",{name:!0,class:!0}),I(F).forEach(v),pe=M(Ue),me=p(Ue,"SMALL",{class:!0,"data-svelte-h":!0}),$(me)!=="svelte-bky2ve"&&(me.textContent=Ze),Ue.forEach(v),He=M(N),ae=p(N,"DIV",{class:!0});var Ae=I(ae);ve=p(Ae,"DIV",{"data-svelte-h":!0}),$(ve)!=="svelte-szqbut"&&(ve.textContent=We),Ve=M(Ae),G=p(Ae,"INPUT",{name:!0,type:!0,class:!0}),Oe=M(Ae),_e=p(Ae,"SMALL",{class:!0,"data-svelte-h":!0}),$(_e)!=="svelte-1drtb8l"&&(_e.textContent=qe),Ae.forEach(v),L=M(N),H=p(N,"DIV",{class:!0});var ge=I(H);ue=p(ge,"SMALL",{class:!0});var Ct=I(ue);Ye=Q(Ct,Ce),Ct.forEach(v),at=M(ge),ye=p(ge,"SPAN",{});var yt=I(ye);we(Ee.$$.fragment,yt),yt.forEach(v),st=M(ge),he&&he.l(ge),rt=M(ge),fe=p(ge,"BUTTON",{class:!0});var Qe=I(fe);Ge.l(Qe),it=M(Qe),x&&x.l(Qe),Qe.forEach(v),ge.forEach(v),N.forEach(v),this.h()},h(){c(i,"name",o=t[1]+"-title"),c(i,"type","text"),c(i,"class","form-control"),c(i,"placeholder","Event title"),i.disabled=t[6],i.required=!0,se(i,"is-invalid",t[5]),c(f,"class","fw-lighter fst-italic"),c(n,"class","d-flex flex-column gap-2"),c(b,"name",D=t[1]+"-start-time"),c(b,"type","date"),c(b,"class","form-control"),c(b,"placeholder","Event title"),b.disabled=t[6],b.required=!0,se(b,"is-invalid",t[3]),c(m,"class","d-flex flex-column gap-2"),c(E,"class","form-check-input"),c(E,"type","checkbox"),c(E,"id",A=t[1]+"-all-day-check"),c(T,"class","form-check-label"),c(T,"for",te=t[1]+"-all-day-check"),c(y,"class","form-check d-flex align-items-center gap-2"),c(F,"name",de=t[1]+"-description"),c(F,"class","form-control"),F.disabled=t[6],se(F,"is-invalid",t[4]),c(me,"class","fw-lighter fst-italic"),c(Z,"class","d-flex flex-column gap-2"),c(G,"name",Me=t[1]+"-location"),c(G,"type","text"),c(G,"class","form-control"),G.disabled=t[6],c(_e,"class","fw-lighter fst-italic"),c(ae,"class","d-flex flex-column gap-2"),c(ue,"class",be="fw-lighter fst-italic text-"+t[13].type),se(ye,"d-none",!t[6]),c(fe,"class","btn btn-primary position-relative"),c(H,"class","d-flex justify-content-end align-items-center gap-2 flex-row"),c(e,"class","d-flex flex-column gap-4")},m(k,N){O(k,e,N),u(e,n),u(n,l),u(n,s),u(n,i),t[22](i),re(i,t[0].title),u(n,r),u(n,f),u(e,C),u(e,m),u(m,w),u(m,g),u(m,b),t[25](b),re(b,t[14]),u(e,V),u(e,B),u(B,y),u(y,E),E.checked=t[0].is_all_day,u(y,U),u(y,T),u(T,Y),u(e,q),X&&X.m(e,null),u(e,ne),u(e,Z),u(Z,R),u(Z,oe),u(Z,F),t[35](F),re(F,t[0].description),u(Z,pe),u(Z,me),u(e,He),u(e,ae),u(ae,ve),u(ae,Ve),u(ae,G),t[38](G),re(G,t[0].location),u(ae,Oe),u(ae,_e),u(e,L),u(e,H),u(H,ue),u(ue,Ye),u(H,at),u(H,ye),Ie(Ee,ye,null),u(H,st),he&&he.m(H,null),u(H,rt),u(H,fe),Ge.m(fe,null),u(fe,it),x&&x.m(fe,null),P=!0,ot||(wt=[W(i,"focus",t[23]),W(i,"input",t[24]),W(b,"focus",t[26]),W(b,"input",t[27]),W(E,"change",t[28]),W(F,"focus",t[36]),W(F,"input",t[37]),W(G,"focus",t[39]),W(G,"input",t[40]),W(fe,"click",t[20])],ot=!0)},p(k,N){(!P||N[0]&2&&o!==(o=k[1]+"-title"))&&c(i,"name",o),(!P||N[0]&64)&&(i.disabled=k[6]),N[0]&1&&i.value!==k[0].title&&re(i,k[0].title),(!P||N[0]&32)&&se(i,"is-invalid",k[5]),(!P||N[0]&2&&D!==(D=k[1]+"-start-time"))&&c(b,"name",D),(!P||N[0]&64)&&(b.disabled=k[6]),N[0]&16384&&re(b,k[14]),(!P||N[0]&8)&&se(b,"is-invalid",k[3]),(!P||N[0]&2&&A!==(A=k[1]+"-all-day-check"))&&c(E,"id",A),N[0]&1&&(E.checked=k[0].is_all_day),(!P||N[0]&2&&te!==(te=k[1]+"-all-day-check"))&&c(T,"for",te),k[0].is_all_day?X&&(X.d(1),X=null):X?X.p(k,N):(X=zt(k),X.c(),X.m(e,ne)),(!P||N[0]&2&&de!==(de=k[1]+"-description"))&&c(F,"name",de),(!P||N[0]&64)&&(F.disabled=k[6]),N[0]&1&&re(F,k[0].description),(!P||N[0]&16)&&se(F,"is-invalid",k[4]),(!P||N[0]&2&&Me!==(Me=k[1]+"-location"))&&c(G,"name",Me),(!P||N[0]&64)&&(G.disabled=k[6]),N[0]&1&&G.value!==k[0].location&&re(G,k[0].location),(!P||N[0]&8192)&&Ce!==(Ce=k[13].message+"")&&ie(Ye,Ce),(!P||N[0]&8192&&be!==(be="fw-lighter fst-italic text-"+k[13].type))&&c(ue,"class",be),(!P||N[0]&64)&&se(ye,"d-none",!k[6]),k[18]&&he.p(k,N),k[17]?x||(x=Zt(),x.c(),x.m(fe,null)):x&&(x.d(1),x=null)},i(k){P||(j(Ee.$$.fragment,k),P=!0)},o(k){z(Ee.$$.fragment,k),P=!1},d(k){k&&v(e),t[22](null),t[25](null),X&&X.d(),t[35](null),t[38](null),Te(Ee),he&&he.d(),Ge.d(),x&&x.d(),ot=!1,Dt(wt)}}}function ul(t,e,n){let l,a,s,i,o,r,{name:f=""}=e,{event:d=Mt}=e;const{actions:{reload:C}}=rn();let m=!1,w=d.id,_,g,b,D,V,B,y={message:"",type:"info"},E={title:"",description:"",start_time:"",end_time:"",location:"",is_all_day:!1},A=Fe(Re(je(d.start_time),Pe),"yyyy-MM-dd"),U=Fe(Re(je(d.start_time),Pe),"HH:mm"),T=Fe(Re(je(d.end_time),Pe),"HH:mm");const Y=(L,H=0,ue="info")=>{n(13,y.message=L,y),n(13,y.type=ue,y),H&&setTimeout(()=>{n(13,y.message="",y)},H)},te=async()=>{if(!w){Y("ID is not defined",0,"danger");return}try{await $n(w),await C(),$e("set_calendar_event_success","interaction","Delete Calendar Event Successful",1),setTimeout(()=>{n(6,m=!1),n(21,E={...d,id:w}),Y("Event Deleted",3e3,"success"),n(0,d=Mt)},800)}catch(L){$e("set_calendar_event_failed","interaction","Delete Calendar Event Failed",1),setTimeout(()=>{n(6,m=!1),console.error("Save failed:",L),Y("Failed to save event. Please try again.",7e3,"danger")},800)}},q=()=>{n(6,m=!0),al({title:"Delete Confirmation",message:"Are you sure you want to do this?  You won't be able to undo this.",confirmButtonLabel:"Yes",confirmButtonCSS:"btn-danger",callback:L=>{L?te():n(6,m=!1)}})},ne=async()=>{if(!l){Y("Sorry nothing has changed, therefore, there is nothing to save.",7e3);return}if(!r){let H=[];a&&H.push("Title is invalid"),s&&H.push("Description is invalid"),i&&H.push("Start time is invalid"),o&&H.push("End time is invalid"),Y(H.join(". ")+".  Please address accordingly.",0,"danger");return}if(m)return;Y("Saving ..."),n(6,m=!0);const L=(H,ue)=>{const[Ce,Ye]=ue.split(":").map(Number);let be=hn(H,Ce);return be=pn(be,Ye),be};try{const H={title:d.title,description:d.description,start_time:L(St(A,"yyyy-MM-dd",new Date),U).toISOString(),end_time:L(St(A,"yyyy-MM-dd",new Date),T).toISOString(),location:d.location,is_all_day:d.is_all_day};w?await Xn(w,H):await Qn(H),await C(),$e("set_calendar_event_success","interaction",`Set Calendar Event Successful ${d.title}`,1),setTimeout(()=>{n(6,m=!1),n(21,E={...d,id:w}),Y("Saved",3e3,"success")},800)}catch(H){$e("set_calendar_event_failed","interaction",`Set Calendar Event Failed ${d.title}`,1),setTimeout(()=>{n(6,m=!1),console.error("Save failed:",H),Y("Failed to save event. Please try again.",7e3,"danger")},800)}};function Z(L){Be[L?"unshift":"push"](()=>{_=L,n(7,_)})}const R=()=>_.select();function ce(){d.title=this.value,n(0,d)}function oe(L){Be[L?"unshift":"push"](()=>{b=L,n(9,b)})}const F=()=>b.select();function de(){A=this.value,n(14,A)}function pe(){d.is_all_day=this.checked,n(0,d)}function me(L){Be[L?"unshift":"push"](()=>{D=L,n(10,D)})}const Ze=()=>D.select();function He(){U=this.value,n(15,U)}function ae(L){Be[L?"unshift":"push"](()=>{V=L,n(11,V)})}const ve=()=>V.select();function We(){T=this.value,n(16,T)}function Ve(L){Be[L?"unshift":"push"](()=>{g=L,n(8,g)})}const G=()=>g.select();function Me(){d.description=this.value,n(0,d)}function Oe(L){Be[L?"unshift":"push"](()=>{B=L,n(12,B)})}const _e=()=>B.select();function qe(){d.location=this.value,n(0,d)}return t.$$set=L=>{"name"in L&&n(1,f=L.name),"event"in L&&n(0,d=L.event)},t.$$.update=()=>{t.$$.dirty[0]&2097153&&n(17,l=E.title!==d.title||E.start_time!==d.start_time||E.end_time!==d.end_time||E.location!==d.location||E.is_all_day!==d.is_all_day),t.$$.dirty[0]&1&&n(5,a=d.title===""),t.$$.dirty[0]&1&&n(3,i=d.start_time===""),t.$$.dirty[0]&1&&n(2,o=d.end_time===""),t.$$.dirty[0]&60&&(r=!a&&!s&&!i&&!o)},n(4,s=!1),[d,f,o,i,s,a,m,_,g,b,D,V,B,y,A,U,T,l,w,q,ne,E,Z,R,ce,oe,F,de,pe,me,Ze,He,ae,ve,We,Ve,G,Me,Oe,_e,qe]}class on extends Ne{constructor(e){super(),Se(this,e,ul,ol,ke,{name:1,event:0},null,[-1,-1])}}function Wt(t,e,n){const l=t.slice();return l[9]=e[n],l[11]=n,l}function cl(t){let e,n;return e=new on({props:{name:"item-new"}}),{c(){De(e.$$.fragment)},l(l){we(e.$$.fragment,l)},m(l,a){Ie(e,l,a),n=!0},p:le,i(l){n||(j(e.$$.fragment,l),n=!0)},o(l){z(e.$$.fragment,l),n=!1},d(l){Te(e,l)}}}function fl(t){let e,n=`<i class="bi bi-plus"></i>
				Add New Announcement`;return{c(){e=h("span"),e.innerHTML=n,this.h()},l(l){e=p(l,"SPAN",{slot:!0,"data-svelte-h":!0}),$(e)!=="svelte-1ykpm6n"&&(e.innerHTML=n),this.h()},h(){c(e,"slot","label")},m(l,a){O(l,e,a)},p:le,d(l){l&&v(e)}}}function dl(t){let e;return{c(){e=K("Loading ...")},l(n){e=Q(n,"Loading ...")},m(n,l){O(n,e,l)},p:le,i:le,o:le,d(n){n&&v(e)}}}function ml(t){let e,n,l=_t(t[2]),a=[];for(let i=0;i<l.length;i+=1)a[i]=Qt(Wt(t,l,i));const s=i=>z(a[i],1,1,()=>{a[i]=null});return{c(){e=h("ul");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=p(i,"UL",{class:!0});var o=I(e);for(let r=0;r<a.length;r+=1)a[r].l(o);o.forEach(v),this.h()},h(){c(e,"class","list-group list-group-flush")},m(i,o){O(i,e,o);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(e,null);n=!0},p(i,o){if(o&101){l=_t(i[2]);let r;for(r=0;r<l.length;r+=1){const f=Wt(i,l,r);a[r]?(a[r].p(f,o),j(a[r],1)):(a[r]=Qt(f),a[r].c(),j(a[r],1),a[r].m(e,null))}for(et(),r=l.length;r<a.length;r+=1)s(r);tt()}},i(i){if(!n){for(let o=0;o<l.length;o+=1)j(a[o]);n=!0}},o(i){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)z(a[o]);n=!1},d(i){i&&v(e),$t(a,i)}}}function qt(t){let e,n=t[6](t[9].start_time)+"",l,a,s=t[6](t[9].end_time)+"",i;return{c(){e=h("span"),l=K(n),a=K(" to "),i=K(s),this.h()},l(o){e=p(o,"SPAN",{class:!0});var r=I(e);l=Q(r,n),a=Q(r," to "),i=Q(r,s),r.forEach(v),this.h()},h(){c(e,"class","d-block")},m(o,r){O(o,e,r),u(e,l),u(e,a),u(e,i)},p(o,r){r&4&&n!==(n=o[6](o[9].start_time)+"")&&ie(l,n),r&4&&s!==(s=o[6](o[9].end_time)+"")&&ie(i,s)},d(o){o&&v(e)}}}function Gt(t){let e,n=t[9].description+"",l;return{c(){e=h("span"),l=K(n),this.h()},l(a){e=p(a,"SPAN",{class:!0});var s=I(e);l=Q(s,n),s.forEach(v),this.h()},h(){c(e,"class","d-block small")},m(a,s){O(a,e,s),u(e,l)},p(a,s){s&4&&n!==(n=a[9].description+"")&&ie(l,n)},d(a){a&&v(e)}}}function Jt(t){let e,n=t[9].location+"",l;return{c(){e=h("em"),l=K(n),this.h()},l(a){e=p(a,"EM",{class:!0});var s=I(e);l=Q(s,n),s.forEach(v),this.h()},h(){c(e,"class","d-block small fw-lighter")},m(a,s){O(a,e,s),u(e,l)},p(a,s){s&4&&n!==(n=a[9].location+"")&&ie(l,n)},d(a){a&&v(e)}}}function Kt(t){let e,n;return e=new nn({props:{drawerTitle:"Edit Calendar Event",id:"calendar-event-form"+t[11],$$slots:{label:[hl],default:[_l]},$$scope:{ctx:t}}}),{c(){De(e.$$.fragment)},l(l){we(e.$$.fragment,l)},m(l,a){Ie(e,l,a),n=!0},p(l,a){const s={};a&4100&&(s.$$scope={dirty:a,ctx:l}),e.$set(s)},i(l){n||(j(e.$$.fragment,l),n=!0)},o(l){z(e.$$.fragment,l),n=!1},d(l){Te(e,l)}}}function _l(t){let e,n;return e=new on({props:{event:t[9],name:"item"+t[11]}}),{c(){De(e.$$.fragment)},l(l){we(e.$$.fragment,l)},m(l,a){Ie(e,l,a),n=!0},p(l,a){const s={};a&4&&(s.event=l[9]),e.$set(s)},i(l){n||(j(e.$$.fragment,l),n=!0)},o(l){z(e.$$.fragment,l),n=!1},d(l){Te(e,l)}}}function hl(t){let e;return{c(){e=h("i"),this.h()},l(n){e=p(n,"I",{slot:!0,class:!0}),I(e).forEach(v),this.h()},h(){c(e,"slot","label"),c(e,"class","bi bi-pencil")},m(n,l){O(n,e,l)},p:le,d(n){n&&v(e)}}}function Qt(t){let e,n,l,a,s,i=t[5](t[9].start_time)+"",o,r,f,d,C=t[9].title+"",m,w,_,g,b,D,V,B,y=!t[9].is_all_day&&qt(t),E=t[9].description&&Gt(t),A=t[9].location&&Jt(t),U=t[0]&&Kt(t);return{c(){e=h("li"),n=h("div"),l=h("div"),a=h("div"),s=h("strong"),o=K(i),r=S(),f=h("div"),d=h("strong"),m=K(C),w=S(),y&&y.c(),_=S(),E&&E.c(),g=S(),A&&A.c(),b=S(),D=h("div"),U&&U.c(),V=S(),this.h()},l(T){e=p(T,"LI",{class:!0});var Y=I(e);n=p(Y,"DIV",{class:!0});var te=I(n);l=p(te,"DIV",{class:!0});var q=I(l);a=p(q,"DIV",{style:!0});var ne=I(a);s=p(ne,"STRONG",{});var Z=I(s);o=Q(Z,i),Z.forEach(v),ne.forEach(v),r=M(q),f=p(q,"DIV",{});var R=I(f);d=p(R,"STRONG",{});var ce=I(d);m=Q(ce,C),ce.forEach(v),w=M(R),y&&y.l(R),_=M(R),E&&E.l(R),g=M(R),A&&A.l(R),R.forEach(v),q.forEach(v),b=M(te),D=p(te,"DIV",{});var oe=I(D);U&&U.l(oe),oe.forEach(v),te.forEach(v),V=M(Y),Y.forEach(v),this.h()},h(){cn(a,"width","85px"),c(l,"class","d-flex flex-sm-column flex-md-row flex-xl-row flex-lg-row gap-3"),c(n,"class","d-flex justify-content-between"),c(e,"class","list-group-item")},m(T,Y){O(T,e,Y),u(e,n),u(n,l),u(l,a),u(a,s),u(s,o),u(l,r),u(l,f),u(f,d),u(d,m),u(f,w),y&&y.m(f,null),u(f,_),E&&E.m(f,null),u(f,g),A&&A.m(f,null),u(n,b),u(n,D),U&&U.m(D,null),u(e,V),B=!0},p(T,Y){(!B||Y&4)&&i!==(i=T[5](T[9].start_time)+"")&&ie(o,i),(!B||Y&4)&&C!==(C=T[9].title+"")&&ie(m,C),T[9].is_all_day?y&&(y.d(1),y=null):y?y.p(T,Y):(y=qt(T),y.c(),y.m(f,_)),T[9].description?E?E.p(T,Y):(E=Gt(T),E.c(),E.m(f,g)):E&&(E.d(1),E=null),T[9].location?A?A.p(T,Y):(A=Jt(T),A.c(),A.m(f,null)):A&&(A.d(1),A=null),T[0]?U?(U.p(T,Y),Y&1&&j(U,1)):(U=Kt(T),U.c(),j(U,1),U.m(D,null)):U&&(et(),z(U,1,1,()=>{U=null}),tt())},i(T){B||(j(U),B=!0)},o(T){z(U),B=!1},d(T){T&&v(e),y&&y.d(),E&&E.d(),A&&A.d(),U&&U.d()}}}function pl(t){let e,n,l="Announcements",a,s,i,o,r,f,d;i=new nn({props:{drawerTitle:"New Announcement",id:"calendar-event-form-new",$$slots:{label:[fl],default:[cl]},$$scope:{ctx:t}}});const C=[ml,dl],m=[];function w(_,g){return _[1]?0:1}return r=w(t),f=m[r]=C[r](t),{c(){e=h("div"),n=h("div"),n.textContent=l,a=S(),s=h("div"),De(i.$$.fragment),o=S(),f.c(),this.h()},l(_){e=p(_,"DIV",{class:!0});var g=I(e);n=p(g,"DIV",{class:!0,"data-svelte-h":!0}),$(n)!=="svelte-rw6gj3"&&(n.textContent=l),a=M(g),s=p(g,"DIV",{class:!0});var b=I(s);we(i.$$.fragment,b),b.forEach(v),o=M(g),f.l(g),g.forEach(v),this.h()},h(){c(n,"class","card-header"),c(s,"class","card-body"),c(e,"class","card")},m(_,g){O(_,e,g),u(e,n),u(e,a),u(e,s),Ie(i,s,null),u(e,o),m[r].m(e,null),d=!0},p(_,[g]){const b={};g&4096&&(b.$$scope={dirty:g,ctx:_}),i.$set(b);let D=r;r=w(_),r===D?m[r].p(_,g):(et(),z(m[D],1,1,()=>{m[D]=null}),tt(),f=m[r],f?f.p(_,g):(f=m[r]=C[r](_),f.c()),j(f,1),f.m(e,null))},i(_){d||(j(i.$$.fragment,_),j(f),d=!0)},o(_){z(i.$$.fragment,_),z(f),d=!1},d(_){_&&v(e),Te(i),m[r].d()}}}function vl(t,e,n){let l,a;const{actions:{featureIsEnabled:s}}=xt(),{stores:{ready:i,dbData:o},actions:{reload:r}}=rn();Et(t,i,m=>n(1,l=m)),Et(t,o,m=>n(2,a=m));let f=!1;return Xt(async()=>{n(0,f=s(en.EditAnnouncement)),await r()}),[f,l,a,i,o,m=>{const w=je(m),_=Re(w,Pe);return Fe(_,"MMM, dd")},m=>{const w=je(m),_=Re(w,Pe);return Fe(_,"h:mm aa")}]}class bl extends Ne{constructor(e){super(),Se(this,e,vl,pl,ke,{})}}function gl(t,e,n){const l=t.slice();return l[0]=e[n],l}function Dl(t){let e,n,l,a=t[0].when+"",s,i,o,r=t[0].title+"",f,d,C,m,w,_=t[0].details+"",g;return{c(){e=h("li"),n=h("strong"),l=h("small"),s=K(a),i=h("br"),o=S(),f=K(r),d=h("br"),C=S(),m=h("em"),w=new fn(!1),g=S(),this.h()},l(b){e=p(b,"LI",{class:!0});var D=I(e);n=p(D,"STRONG",{});var V=I(n);l=p(V,"SMALL",{});var B=I(l);s=Q(B,a),B.forEach(v),V.forEach(v),i=p(D,"BR",{}),o=M(D),f=Q(D,r),d=p(D,"BR",{}),C=M(D),m=p(D,"EM",{class:!0});var y=I(m);w=dn(y,!1),y.forEach(v),g=M(D),D.forEach(v),this.h()},h(){w.a=null,c(m,"class","small fw-lighter"),c(e,"class","list-group-item")},m(b,D){O(b,e,D),u(e,n),u(n,l),u(l,s),u(e,i),u(e,o),u(e,f),u(e,d),u(e,C),u(e,m),w.m(_,m),u(e,g)},p:le,d(b){b&&v(e)}}}function wl(t){let e,n,l="Announcements",a,s,i=_t(mn),o=[];for(let r=0;r<i.length;r+=1)o[r]=Dl(gl(t,i,r));return{c(){e=h("div"),n=h("div"),n.textContent=l,a=S(),s=h("ul");for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){e=p(r,"DIV",{class:!0});var f=I(e);n=p(f,"DIV",{class:!0,"data-svelte-h":!0}),$(n)!=="svelte-rw6gj3"&&(n.textContent=l),a=M(f),s=p(f,"UL",{class:!0});var d=I(s);for(let C=0;C<o.length;C+=1)o[C].l(d);d.forEach(v),f.forEach(v),this.h()},h(){c(n,"class","card-header"),c(s,"class","list-group list-group-flush"),c(e,"class","card")},m(r,f){O(r,e,f),u(e,n),u(e,a),u(e,s);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(s,null)},p:le,i:le,o:le,d(r){r&&v(e),$t(o,r)}}}class Il extends Ne{constructor(e){super(),Se(this,e,null,wl,ke,{})}}function Tl(t){let e,n;return e=new Il({}),{c(){De(e.$$.fragment)},l(l){we(e.$$.fragment,l)},m(l,a){Ie(e,l,a),n=!0},i(l){n||(j(e.$$.fragment,l),n=!0)},o(l){z(e.$$.fragment,l),n=!1},d(l){Te(e,l)}}}function Cl(t){let e,n;return e=new bl({}),{c(){De(e.$$.fragment)},l(l){we(e.$$.fragment,l)},m(l,a){Ie(e,l,a),n=!0},i(l){n||(j(e.$$.fragment,l),n=!0)},o(l){z(e.$$.fragment,l),n=!1},d(l){Te(e,l)}}}function yl(t){let e,n,l,a;const s=[Cl,Tl],i=[];function o(r,f){return r[0]?0:1}return e=o(t),n=i[e]=s[e](t),{c(){n.c(),l=kt()},l(r){n.l(r),l=kt()},m(r,f){i[e].m(r,f),O(r,l,f),a=!0},p(r,[f]){let d=e;e=o(r),e!==d&&(et(),z(i[d],1,1,()=>{i[d]=null}),tt(),n=i[e],n||(n=i[e]=s[e](r),n.c()),j(n,1),n.m(l.parentNode,l))},i(r){a||(j(n),a=!0)},o(r){z(n),a=!1},d(r){r&&v(l),i[e].d(r)}}}function El(t,e,n){const{actions:{featureIsEnabled:l}}=xt();let a=!1;return Xt(async()=>{n(0,a=l(en.ViewDBAnnouncements))}),[a]}class Bl extends Ne{constructor(e){super(),Se(this,e,El,yl,ke,{})}}export{Bl as A,nn as D,$e as t};
