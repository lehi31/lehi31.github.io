import{s as Ue,n as Ee,r as mt,l as Ht,h as Re,C as Ye,k as Bt,b as Ze,o as Vt,D as Rt}from"./DZwCP9x3.js";import{S as We,i as qe,d as m,c as W,y as xe,D as it,e as l,f as g,k as f,l as y,n as V,g as D,r as _,p as T,o as F,u as X,s as be,B as Oe,J as Fe,b as ie,t as K,a as z,C as ft,E as vt,m as ce,A as Ut,j as ue,q as de,F as Wt,w as bt,v as wt}from"./BGKO8vuC.js";import{W as qt,a as Yt,S as Ft}from"./Dxf7-YYP.js";import{e as Pe}from"./mHr59IZx.js";import{t as le,c as Xt,b as zt,e as Gt,h as yt,m as Dt,j as st,f as ot,g as Jt,i as Kt}from"./Db-Q0OhH.js";import{p as _t}from"./nPZcRqOg.js";import{D as Qt,v as Zt}from"./BiE8WXsh.js";import{w as rt,d as at}from"./wlhN6vKE.js";import{s as ct}from"./DsH82brL.js";function lt(n,e){const t=le(n),s=le(e),a=t.getTime()-s.getTime();return a<0?-1:a>0?1:a}function en(n){return Xt(n,Date.now())}function tn(n,e){const t=le(n),s=le(e),a=t.getFullYear()-s.getFullYear(),o=t.getMonth()-s.getMonth();return a*12+o}function nn(n){return e=>{const s=(n?Math[n]:Math.trunc)(e);return s===0?0:s}}function sn(n,e){return+le(n)-+le(e)}function an(n){const e=le(n);return e.setHours(23,59,59,999),e}function rn(n){const e=le(n),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function ln(n){const e=le(n);return+an(e)==+rn(e)}function on(n,e){const t=le(n),s=le(e),a=lt(t,s),o=Math.abs(tn(t,s));let i;if(o<1)i=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-a*o);let r=lt(t,s)===-a;ln(le(n))&&o===1&&lt(n,s)===1&&(r=!1),i=a*(o-Number(r))}return i===0?0:i}function cn(n,e,t){const s=sn(n,e)/1e3;return nn(t?.roundingMethod)(s)}function un(n,e,t){const s=zt(),a=t?.locale??s.locale??Gt,o=2520,i=lt(n,e);if(isNaN(i))throw new RangeError("Invalid time value");const r=Object.assign({},t,{addSuffix:t?.addSuffix,comparison:i});let c,u;i>0?(c=le(e),u=le(n)):(c=le(n),u=le(e));const h=cn(u,c),d=(yt(u)-yt(c))/1e3,p=Math.round((h-d)/60);let w;if(p<2)return t?.includeSeconds?h<5?a.formatDistance("lessThanXSeconds",5,r):h<10?a.formatDistance("lessThanXSeconds",10,r):h<20?a.formatDistance("lessThanXSeconds",20,r):h<40?a.formatDistance("halfAMinute",0,r):h<60?a.formatDistance("lessThanXMinutes",1,r):a.formatDistance("xMinutes",1,r):p===0?a.formatDistance("lessThanXMinutes",1,r):a.formatDistance("xMinutes",p,r);if(p<45)return a.formatDistance("xMinutes",p,r);if(p<90)return a.formatDistance("aboutXHours",1,r);if(p<Dt){const b=Math.round(p/60);return a.formatDistance("aboutXHours",b,r)}else{if(p<o)return a.formatDistance("xDays",1,r);if(p<st){const b=Math.round(p/Dt);return a.formatDistance("xDays",b,r)}else if(p<st*2)return w=Math.round(p/st),a.formatDistance("aboutXMonths",w,r)}if(w=on(u,c),w<12){const b=Math.round(p/st);return a.formatDistance("xMonths",b,r)}else{const b=w%12,C=Math.trunc(w/12);return b<3?a.formatDistance("aboutXYears",C,r):b<9?a.formatDistance("overXYears",C,r):a.formatDistance("almostXYears",C+1,r)}}function Tt(n,e){return un(n,en(n),e)}function Ct(n,e,t){const s=n.slice();return s[3]=e[t],s}function dn(n){let e,t,s="Lesson Schedule",a,o,i=Pe(n[0]),r=[];for(let c=0;c<i.length;c+=1)r[c]=Et(Ct(n,i,c));return{c(){e=_("div"),t=_("div"),t.textContent=s,a=T(),o=_("ul");for(let c=0;c<r.length;c+=1)r[c].c();this.h()},l(c){e=f(c,"DIV",{class:!0});var u=y(e);t=f(u,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-1wzkwv6"&&(t.textContent=s),a=D(u),o=f(u,"UL",{class:!0});var h=y(o);for(let d=0;d<r.length;d+=1)r[d].l(h);h.forEach(m),u.forEach(m),this.h()},h(){g(t,"class","card-header"),g(o,"class","list-group list-group-flush"),g(e,"class","card")},m(c,u){W(c,e,u),l(e,t),l(e,a),l(e,o);for(let h=0;h<r.length;h+=1)r[h]&&r[h].m(o,null)},p(c,u){if(u&1){i=Pe(c[0]);let h;for(h=0;h<i.length;h+=1){const d=Ct(c,i,h);r[h]?r[h].p(d,u):(r[h]=Et(d),r[h].c(),r[h].m(o,null))}for(;h<r.length;h+=1)r[h].d(1);r.length=i.length}},d(c){c&&m(e),it(r,c)}}}function Et(n){let e,t,s,a=ot(_t(n[3].date,"yyyy-MM-dd",new Date),"dd EEEE MMM, yyyy")+"",o,i,r,c,u=n[3].title+"",h,d,p,w=n[3].speaker+"",b,C;return{c(){e=_("li"),t=_("div"),s=_("div"),o=X(a),i=T(),r=_("div"),c=_("a"),h=X(u),d=T(),p=_("div"),b=X(w),C=T(),this.h()},l($){e=f($,"LI",{class:!0});var L=y(e);t=f(L,"DIV",{});var v=y(t);s=f(v,"DIV",{class:!0});var N=y(s);o=F(N,a),N.forEach(m),i=D(v),r=f(v,"DIV",{class:!0});var A=y(r);c=f(A,"A",{href:!0,target:!0});var I=y(c);h=F(I,u),I.forEach(m),A.forEach(m),d=D(v),p=f(v,"DIV",{class:!0});var q=y(p);b=F(q,w),q.forEach(m),v.forEach(m),C=D(L),L.forEach(m),this.h()},h(){g(s,"class","fw-lighter small"),g(c,"href",n[3].url),g(c,"target","_blank"),g(r,"class","fw-bolder"),g(p,"class","fw-light small"),g(e,"class","list-group-item")},m($,L){W($,e,L),l(e,t),l(t,s),l(s,o),l(t,i),l(t,r),l(r,c),l(c,h),l(t,d),l(t,p),l(p,b),l(e,C)},p:Ee,d($){$&&m(e)}}}function fn(n){let e,t=n[0].length>0&&dn(n);return{c(){t&&t.c(),e=xe()},l(s){t&&t.l(s),e=xe()},m(s,a){t&&t.m(s,a),W(s,e,a)},p(s,[a]){s[0].length>0&&t.p(s,a)},i:Ee,o:Ee,d(s){s&&m(e),t&&t.d(s)}}}function _n(n){const e=[{date:"2024-11-10",title:"The Lord Jesus Christ Will Come Again",speaker:"President Russell M. Nelson",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/57nelson?lang=eng"},{date:"2024-11-24",title:"Burying Our Weapons of Rebellion",speaker:"Elder D. Todd Christofferson",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/21christofferson?lang=eng"},{date:"2024-12-08",title:"Nourish the Roots, and the Branches Will Grow",speaker:"Elder Dieter F. Uchtdorf",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/51uchtdorf?lang=eng"},{date:"2024-12-22",title:"I Am He",speaker:"Elder Jeffrey R. Holland",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/41holland?lang=eng"},{date:"2025-01-12",title:"Live Up to Your Privileges",speaker:"Sister Emily Belle Freeman",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/13freeman?lang=eng"},{date:"2025-01-26",title:"Welcome to the Church of Joy",speaker:"Elder Patrick Kearon",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/24kearon?lang=eng"},{date:"2025-02-09",title:"O Youth of the Noble Birthright",speaker:"Brother Bradley R. Wilcox",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/46wilcox?lang=eng"},{date:"2025-02-23",title:"The Wind Will Never Cease to Blow",speaker:"Elder Aroldo B. Cavalcante",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/27cavalcante?lang=eng"},{date:"2025-03-09",title:"Seeking Answers to Spiritual Questions",speaker:"Sister Tracy Y. Browning",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/42browning?lang=eng"},{date:"2025-03-23",title:"Behold I Am the Light in Which Ye Shall Hold Up",speaker:"Elder Ronald A. Rasband",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/53rasband?lang=eng"},{date:"2025-04-13",title:"Seek Him with All Your Heart",speaker:"Bishop L. Todd Budge",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/45budge?lang=eng"},{date:"2025-04-27",title:"Mortality Works",speaker:"Elder Brook P. Hales",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/43hales?lang=eng"}],t=new Date;return[e.filter(a=>new Date(a.date)>=t)]}class mn extends We{constructor(e){super(),qe(this,e,_n,fn,Ue,{})}}function $t(n){let e,t;return{c(){e=_("small"),t=X(n[2]),this.h()},l(s){e=f(s,"SMALL",{class:!0});var a=y(e);t=F(a,n[2]),a.forEach(m),this.h()},h(){g(e,"class","fw-lighter text-muted")},m(s,a){W(s,e,a),l(e,t)},p(s,a){a&4&&be(t,s[2])},d(s){s&&m(e)}}}function hn(n){let e,t,s,a,o,i,r,c,u='<i class="bi bi-dash"></i>',h,d,p,w,b,C='<i class="bi bi-plus"></i>',$,L,v=n[2]&&$t(n);return{c(){e=_("div"),t=_("div"),s=_("span"),a=X(n[1]),o=T(),v&&v.c(),i=T(),r=_("div"),c=_("button"),c.innerHTML=u,h=T(),d=_("div"),p=X(n[0]),w=T(),b=_("button"),b.innerHTML=C,this.h()},l(N){e=f(N,"DIV",{class:!0});var A=y(e);t=f(A,"DIV",{});var I=y(t);s=f(I,"SPAN",{});var q=y(s);a=F(q,n[1]),q.forEach(m),o=D(I),v&&v.l(I),I.forEach(m),i=D(A),r=f(A,"DIV",{class:!0});var H=y(r);c=f(H,"BUTTON",{class:!0,"data-svelte-h":!0}),V(c)!=="svelte-m10tng"&&(c.innerHTML=u),h=D(H),d=f(H,"DIV",{class:!0});var G=y(d);p=F(G,n[0]),G.forEach(m),w=D(H),b=f(H,"BUTTON",{class:!0,"data-svelte-h":!0}),V(b)!=="svelte-z6pujo"&&(b.innerHTML=C),H.forEach(m),A.forEach(m),this.h()},h(){g(c,"class","btn btn-sm btn-primary"),g(d,"class","count-container d-flex justify-content-end svelte-1ciu8qs"),g(b,"class","btn btn-sm btn-primary"),g(r,"class","d-flex flex-row gap-3 align-items-center"),g(e,"class","d-flex flex-row gap-3 justify-content-between align-items-end")},m(N,A){W(N,e,A),l(e,t),l(t,s),l(s,a),l(t,o),v&&v.m(t,null),l(e,i),l(e,r),l(r,c),l(r,h),l(r,d),l(d,p),l(r,w),l(r,b),$||(L=[Oe(c,"click",n[4]),Oe(b,"click",n[3])],$=!0)},p(N,[A]){A&2&&be(a,N[1]),N[2]?v?v.p(N,A):(v=$t(N),v.c(),v.m(t,null)):v&&(v.d(1),v=null),A&1&&be(p,N[0])},i:Ee,o:Ee,d(N){N&&m(e),v&&v.d(),$=!1,mt(L)}}}function pn(n,e,t){let{count:s=0}=e,{label:a="Count"}=e,{description:o=""}=e;const i=()=>{t(0,s++,s)},r=()=>{s<=0||t(0,s--,s)};return n.$$set=c=>{"count"in c&&t(0,s=c.count),"label"in c&&t(1,a=c.label),"description"in c&&t(2,o=c.description)},[s,a,o,i,r]}class Xe extends We{constructor(e){super(),qe(this,e,pn,hn,Ue,{count:0,label:1,description:2})}}const Mt=rt([]);let dt=!1;async function ut(){if(dt)return Ht(Mt);dt=!0;const{data:n,error:e}=await ct.from("temple_challenge_entries").select("*");if(e)throw e;const t=n||[];return Mt.set(t),setTimeout(()=>dt=!1,800),t}async function gn(n){const{data:e,error:t}=await ct.from("temple_challenge_entries").insert([n]).select();if(t)throw t;return await ut(),e?e[0]:void 0}async function vn(n,e){const{data:t,error:s}=await ct.from("temple_challenge_entries").update(e).eq("id",n).select();if(s)throw s;return await ut(),t?t[0]:void 0}async function bn(n){const{error:e}=await ct.from("temple_challenge_entries").delete().eq("id",n);if(e)throw e;await ut()}const wn=()=>{const n=rt(!1),e=rt(!1),t=rt([]),s=at([t],([d])=>{const p=d.reduce((w,b)=>((w[b.date]||=[]).push(b),w),{});return Object.fromEntries(Object.entries(p).sort(([w],[b])=>new Date(b).getTime()-new Date(w).getTime()))}),a=at(t,d=>d.reduce((p,w)=>({baptism_ordinances_count:p.baptism_ordinances_count+(w.baptism_ordinances_count??0),confirmation_ordinances_count:p.confirmation_ordinances_count+(w.confirmation_ordinances_count??0),initiatory_ordinances_count:p.initiatory_ordinances_count+(w.initiatory_ordinances_count??0),endowment_ordinances_count:p.endowment_ordinances_count+(w.endowment_ordinances_count??0),sealing_ordinances_count:p.sealing_ordinances_count+(w.sealing_ordinances_count??0)}),{baptism_ordinances_count:0,confirmation_ordinances_count:0,initiatory_ordinances_count:0,endowment_ordinances_count:0,sealing_ordinances_count:0})),o=at(t,d=>d.reduce((p,w)=>p+(w.baptism_ordinances_count??0)+(w.confirmation_ordinances_count??0)+(w.initiatory_ordinances_count??0)+(w.endowment_ordinances_count??0)+(w.sealing_ordinances_count??0),0)),i=at(t,d=>d.reduce((p,w)=>p+(w.prepared_names_count??0),0));return{stores:{ready:n,loading:e,data:t,groupedByDate:s,detailTotals:a,totalOrdinancesPerformed:o,totalNamesPrepared:i},actions:{init:async()=>{const d=await ut();d?.length&&t.set(d)},apiCreate:async d=>{await gn(d)},apiUpdate:async(d,p)=>{await vn(d,p)},apiDelete:async d=>{await bn(d)}}}},ht=()=>wn();function kt(n,e,t){const s=n.slice();return s[15]=e[t],s}function St(n){let e,t=n[15]+"",s;return{c(){e=_("option"),s=X(t),this.h()},l(a){e=f(a,"OPTION",{});var o=y(e);s=F(o,t),o.forEach(m),this.h()},h(){e.__value=n[15],ft(e,e.__value)},m(a,o){W(a,e,o),l(e,s)},p:Ee,d(a){a&&m(e)}}}function yn(n){let e,t,s="Log your temple activity here.",a,o,i,r="Date",c,u,h="When was this activity done?",d,p,w,b,C,$="Activity Type",L,v,N="What kind of temple activity was this?",A,I,q,H,G,Q,oe,Se,ae,R,we,Ie,j,Z,Ae,te,ne,$e,ee,ye,J,Y,fe,De="Total:",B,se,Te,_e,M,O,U="Cancel",Me,me,k="Submit",P,he,pe,ke=Pe(n[2]),x=[];for(let E=0;E<ke.length;E+=1)x[E]=St(kt(n,ke,E));function Ce(E){n[8](E)}let ge={label:"Temple Name Preparation Count",description:"Number of names you were able to prepare for temple ordinances"};n[0].prepared_names_count!==void 0&&(ge.count=n[0].prepared_names_count),H=new Xe({props:ge}),Re.push(()=>Fe(H,"count",Ce));function Ve(E){n[9](E)}let Ne={label:"Temple Baptism Ordinances Count",description:"Number of Temple Baptism Ordinances you participated in"};n[0].baptism_ordinances_count!==void 0&&(Ne.count=n[0].baptism_ordinances_count),oe=new Xe({props:Ne}),Re.push(()=>Fe(oe,"count",Ve));function Le(E){n[10](E)}let ze={label:"Temple Confirmation Ordinances Count",description:"Number of Temple Confirmation Ordinances you participated in"};n[0].confirmation_ordinances_count!==void 0&&(ze.count=n[0].confirmation_ordinances_count),R=new Xe({props:ze}),Re.push(()=>Fe(R,"count",Le));function et(E){n[11](E)}let Ge={label:"Temple Initiatory Ordinances Count",description:"Number of Temple Initiatory Ordinances you did OR participated in the Temple"};n[0].initiatory_ordinances_count!==void 0&&(Ge.count=n[0].initiatory_ordinances_count),j=new Xe({props:Ge}),Re.push(()=>Fe(j,"count",et));function tt(E){n[12](E)}let Je={label:"Temple Endowment Ordinances Count",description:"Number of Temple Endowment Ordinances you did OR participated in the Temple"};n[0].endowment_ordinances_count!==void 0&&(Je.count=n[0].endowment_ordinances_count),te=new Xe({props:Je}),Re.push(()=>Fe(te,"count",tt));function nt(E){n[13](E)}let pt={label:"Temple Sealing Ordinances Count",description:"Number of Temple Sealing Ordinances you did OR participated in the Temple"};return n[0].sealing_ordinances_count!==void 0&&(pt.count=n[0].sealing_ordinances_count),ee=new Xe({props:pt}),Re.push(()=>Fe(ee,"count",nt)),{c(){e=_("div"),t=_("div"),t.textContent=s,a=T(),o=_("div"),i=_("div"),i.textContent=r,c=T(),u=_("small"),u.textContent=h,d=T(),p=_("input"),w=T(),b=_("div"),C=_("div"),C.textContent=$,L=T(),v=_("small"),v.textContent=N,A=T(),I=_("select");for(let E=0;E<x.length;E+=1)x[E].c();q=T(),de(H.$$.fragment),Q=T(),de(oe.$$.fragment),ae=T(),de(R.$$.fragment),Ie=T(),de(j.$$.fragment),Ae=T(),de(te.$$.fragment),$e=T(),de(ee.$$.fragment),J=T(),Y=_("div"),fe=_("span"),fe.textContent=De,B=T(),se=_("span"),Te=X(n[1]),_e=T(),M=_("div"),O=_("button"),O.textContent=U,Me=T(),me=_("button"),me.textContent=k,this.h()},l(E){e=f(E,"DIV",{class:!0});var S=y(e);t=f(S,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-edkt6z"&&(t.textContent=s),a=D(S),o=f(S,"DIV",{class:!0});var ve=y(o);i=f(ve,"DIV",{"data-svelte-h":!0}),V(i)!=="svelte-myn5jk"&&(i.textContent=r),c=D(ve),u=f(ve,"SMALL",{class:!0,"data-svelte-h":!0}),V(u)!=="svelte-1vydpg8"&&(u.textContent=h),d=D(ve),p=f(ve,"INPUT",{type:!0,class:!0,id:!0}),ve.forEach(m),w=D(S),b=f(S,"DIV",{class:!0});var je=y(b);C=f(je,"DIV",{"data-svelte-h":!0}),V(C)!=="svelte-gyj3h9"&&(C.textContent=$),L=D(je),v=f(je,"SMALL",{class:!0,"data-svelte-h":!0}),V(v)!=="svelte-6czr2q"&&(v.textContent=N),A=D(je),I=f(je,"SELECT",{class:!0});var Ke=y(I);for(let re=0;re<x.length;re+=1)x[re].l(Ke);Ke.forEach(m),je.forEach(m),q=D(S),ue(H.$$.fragment,S),Q=D(S),ue(oe.$$.fragment,S),ae=D(S),ue(R.$$.fragment,S),Ie=D(S),ue(j.$$.fragment,S),Ae=D(S),ue(te.$$.fragment,S),$e=D(S),ue(ee.$$.fragment,S),J=D(S),Y=f(S,"DIV",{class:!0});var He=y(Y);fe=f(He,"SPAN",{class:!0,"data-svelte-h":!0}),V(fe)!=="svelte-1f2mlef"&&(fe.textContent=De),B=D(He),se=f(He,"SPAN",{class:!0,style:!0});var Qe=y(se);Te=F(Qe,n[1]),Qe.forEach(m),He.forEach(m),_e=D(S),M=f(S,"DIV",{class:!0});var Be=y(M);O=f(Be,"BUTTON",{class:!0,"data-svelte-h":!0}),V(O)!=="svelte-19vd26f"&&(O.textContent=U),Me=D(Be),me=f(Be,"BUTTON",{class:!0,"data-svelte-h":!0}),V(me)!=="svelte-mfwkik"&&(me.textContent=k),Be.forEach(m),S.forEach(m),this.h()},h(){g(t,"class","d-flex flex-column gap-2"),g(u,"class","fw-lighter text-muted"),g(p,"type","date"),g(p,"class","form-control"),g(p,"id","endDate"),g(o,"class","d-flex flex-column gap-2"),g(v,"class","fw-lighter text-muted"),g(I,"class","form-select form-control-sm"),n[0].entry_type===void 0&&Bt(()=>n[7].call(I)),g(b,"class","d-flex flex-column gap-2"),g(fe,"class","fw-bolder"),g(se,"class","fw-bolder"),Ut(se,"margin-right","47px"),g(Y,"class","d-flex justify-content-between border-1 border-top pt-3 mt-4"),g(O,"class","btn btn-secondary"),g(me,"class","btn btn-primary"),g(M,"class","d-flex justify-content-between"),g(e,"class","d-flex flex-column gap-3")},m(E,S){W(E,e,S),l(e,t),l(e,a),l(e,o),l(o,i),l(o,c),l(o,u),l(o,d),l(o,p),ft(p,n[0].date),l(e,w),l(e,b),l(b,C),l(b,L),l(b,v),l(b,A),l(b,I);for(let ve=0;ve<x.length;ve+=1)x[ve]&&x[ve].m(I,null);vt(I,n[0].entry_type,!0),l(e,q),ce(H,e,null),l(e,Q),ce(oe,e,null),l(e,ae),ce(R,e,null),l(e,Ie),ce(j,e,null),l(e,Ae),ce(te,e,null),l(e,$e),ce(ee,e,null),l(e,J),l(e,Y),l(Y,fe),l(Y,B),l(Y,se),l(se,Te),l(e,_e),l(e,M),l(M,O),l(M,Me),l(M,me),P=!0,he||(pe=[Oe(p,"input",n[6]),Oe(I,"change",n[7]),Oe(O,"click",n[3]),Oe(me,"click",n[4])],he=!0)},p(E,[S]){if(S&5&&ft(p,E[0].date),S&4){ke=Pe(E[2]);let re;for(re=0;re<ke.length;re+=1){const gt=kt(E,ke,re);x[re]?x[re].p(gt,S):(x[re]=St(gt),x[re].c(),x[re].m(I,null))}for(;re<x.length;re+=1)x[re].d(1);x.length=ke.length}S&5&&vt(I,E[0].entry_type);const ve={};!G&&S&1&&(G=!0,ve.count=E[0].prepared_names_count,Ye(()=>G=!1)),H.$set(ve);const je={};!Se&&S&1&&(Se=!0,je.count=E[0].baptism_ordinances_count,Ye(()=>Se=!1)),oe.$set(je);const Ke={};!we&&S&1&&(we=!0,Ke.count=E[0].confirmation_ordinances_count,Ye(()=>we=!1)),R.$set(Ke);const He={};!Z&&S&1&&(Z=!0,He.count=E[0].initiatory_ordinances_count,Ye(()=>Z=!1)),j.$set(He);const Qe={};!ne&&S&1&&(ne=!0,Qe.count=E[0].endowment_ordinances_count,Ye(()=>ne=!1)),te.$set(Qe);const Be={};!ye&&S&1&&(ye=!0,Be.count=E[0].sealing_ordinances_count,Ye(()=>ye=!1)),ee.$set(Be),(!P||S&2)&&be(Te,E[1])},i(E){P||(z(H.$$.fragment,E),z(oe.$$.fragment,E),z(R.$$.fragment,E),z(j.$$.fragment,E),z(te.$$.fragment,E),z(ee.$$.fragment,E),P=!0)},o(E){K(H.$$.fragment,E),K(oe.$$.fragment,E),K(R.$$.fragment,E),K(j.$$.fragment,E),K(te.$$.fragment,E),K(ee.$$.fragment,E),P=!1},d(E){E&&m(e),it(x,E),ie(H),ie(oe),ie(R),ie(j),ie(te),ie(ee),he=!1,mt(pe)}}}function Dn(n,e,t){let s,{drawerId:a=""}=e;const o=["Personal","Family","Ward - Youth Temple Baptism","Ward - Temple Activity","Stake - Tuesday Temple Night"],i={prepared_names_count:0,baptism_ordinances_count:0,confirmation_ordinances_count:0,initiatory_ordinances_count:0,endowment_ordinances_count:0,sealing_ordinances_count:0,entry_type:"Personal",date:ot(new Date,"yyyy-MM-dd"),approved:!0};let r={...i};const c=()=>{const v=`[data-bs-target="#${a}"]`,N=document.querySelector(v);N&&N.click()},u=async()=>{const{actions:{apiCreate:v}}=ht();try{await v({prepared_names_count:r.prepared_names_count,baptism_ordinances_count:r.baptism_ordinances_count,confirmation_ordinances_count:r.confirmation_ordinances_count,initiatory_ordinances_count:r.initiatory_ordinances_count,endowment_ordinances_count:r.endowment_ordinances_count,sealing_ordinances_count:r.sealing_ordinances_count,entry_type:r.entry_type,date:r.date,created_at:new Date().toISOString(),approved:!0})}catch(N){console.error(N)}finally{t(0,r={...i}),c()}};function h(){r.date=this.value,t(0,r),t(2,o)}function d(){r.entry_type=Wt(this),t(0,r),t(2,o)}function p(v){n.$$.not_equal(r.prepared_names_count,v)&&(r.prepared_names_count=v,t(0,r))}function w(v){n.$$.not_equal(r.baptism_ordinances_count,v)&&(r.baptism_ordinances_count=v,t(0,r))}function b(v){n.$$.not_equal(r.confirmation_ordinances_count,v)&&(r.confirmation_ordinances_count=v,t(0,r))}function C(v){n.$$.not_equal(r.initiatory_ordinances_count,v)&&(r.initiatory_ordinances_count=v,t(0,r))}function $(v){n.$$.not_equal(r.endowment_ordinances_count,v)&&(r.endowment_ordinances_count=v,t(0,r))}function L(v){n.$$.not_equal(r.sealing_ordinances_count,v)&&(r.sealing_ordinances_count=v,t(0,r))}return n.$$set=v=>{"drawerId"in v&&t(5,a=v.drawerId)},n.$$.update=()=>{n.$$.dirty&1&&t(1,s=r.prepared_names_count+r.baptism_ordinances_count+r.confirmation_ordinances_count+r.initiatory_ordinances_count+r.endowment_ordinances_count+r.sealing_ordinances_count)},[r,s,o,c,u,a,h,d,p,w,b,C,$,L]}class Tn extends We{constructor(e){super(),qe(this,e,Dn,yn,Ue,{drawerId:5})}}function It(n,e,t){const s=n.slice();return s[10]=e[t][0],s[11]=e[t][1],s}function Lt(n,e,t){const s=n.slice();return s[14]=e[t],s}function Cn(n){let e;return{c(){e=X("No Data Found")},l(t){e=F(t,"No Data Found")},m(t,s){W(t,e,s)},p:Ee,d(t){t&&m(e)}}}function En(n){let e,t=Pe(Object.entries(n[1])),s=[];for(let a=0;a<t.length;a+=1)s[a]=jt(It(n,t,a));return{c(){e=_("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=f(a,"DIV",{class:!0});var o=y(e);for(let i=0;i<s.length;i+=1)s[i].l(o);o.forEach(m),this.h()},h(){g(e,"class","d-flex flex-column gap-3")},m(a,o){W(a,e,o);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(e,null)},p(a,o){if(o&2){t=Pe(Object.entries(a[1]));let i;for(i=0;i<t.length;i+=1){const r=It(a,t,i);s[i]?s[i].p(r,o):(s[i]=jt(r),s[i].c(),s[i].m(e,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=t.length}},d(a){a&&m(e),it(s,a)}}}function Nt(n){let e,t,s="Created",a,o,i=Tt(new Date(n[14].created_at),{addSuffix:!0})+"",r;return{c(){e=_("small"),t=_("span"),t.textContent=s,a=T(),o=_("span"),r=X(i),this.h()},l(c){e=f(c,"SMALL",{class:!0});var u=y(e);t=f(u,"SPAN",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-1m80xwa"&&(t.textContent=s),a=D(u),o=f(u,"SPAN",{class:!0});var h=y(o);r=F(h,i),h.forEach(m),u.forEach(m),this.h()},h(){g(t,"class","fw-lighter"),g(o,"class","fw-bolder"),g(e,"class","d-flex justify-content-between")},m(c,u){W(c,e,u),l(e,t),l(e,a),l(e,o),l(o,r)},p(c,u){u&2&&i!==(i=Tt(new Date(c[14].created_at),{addSuffix:!0})+"")&&be(r,i)},d(c){c&&m(e)}}}function At(n){let e,t,s,a=n[14]?.entry_type+"",o,i,r,c,u,h="Prepared Count",d,p,w=n[14]?.prepared_names_count+"",b,C,$,L,v="Baptism Count",N,A,I=n[14]?.baptism_ordinances_count+"",q,H,G,Q,oe="Initiatory Count",Se,ae,R=n[14]?.initiatory_ordinances_count+"",we,Ie,j,Z,Ae="Endowment Count",te,ne,$e=n[14]?.endowment_ordinances_count+"",ee,ye,J,Y,fe="Sealing Count",De,B,se=n[14]?.sealing_ordinances_count+"",Te,_e,M=n[14]?.created_at&&Nt(n);return{c(){e=_("li"),t=_("div"),s=_("div"),o=X(a),i=T(),r=_("div"),c=_("small"),u=_("span"),u.textContent=h,d=T(),p=_("span"),b=X(w),C=T(),$=_("small"),L=_("span"),L.textContent=v,N=T(),A=_("span"),q=X(I),H=T(),G=_("small"),Q=_("span"),Q.textContent=oe,Se=T(),ae=_("span"),we=X(R),Ie=T(),j=_("small"),Z=_("span"),Z.textContent=Ae,te=T(),ne=_("span"),ee=X($e),ye=T(),J=_("small"),Y=_("span"),Y.textContent=fe,De=T(),B=_("span"),Te=X(se),_e=T(),M&&M.c(),this.h()},l(O){e=f(O,"LI",{class:!0});var U=y(e);t=f(U,"DIV",{class:!0});var Me=y(t);s=f(Me,"DIV",{class:!0});var me=y(s);o=F(me,a),me.forEach(m),i=D(Me),r=f(Me,"DIV",{class:!0});var k=y(r);c=f(k,"SMALL",{class:!0});var P=y(c);u=f(P,"SPAN",{class:!0,"data-svelte-h":!0}),V(u)!=="svelte-51dgzo"&&(u.textContent=h),d=D(P),p=f(P,"SPAN",{class:!0});var he=y(p);b=F(he,w),he.forEach(m),P.forEach(m),C=D(k),$=f(k,"SMALL",{class:!0});var pe=y($);L=f(pe,"SPAN",{class:!0,"data-svelte-h":!0}),V(L)!=="svelte-1mbgin5"&&(L.textContent=v),N=D(pe),A=f(pe,"SPAN",{class:!0});var ke=y(A);q=F(ke,I),ke.forEach(m),pe.forEach(m),H=D(k),G=f(k,"SMALL",{class:!0});var x=y(G);Q=f(x,"SPAN",{class:!0,"data-svelte-h":!0}),V(Q)!=="svelte-haf5jr"&&(Q.textContent=oe),Se=D(x),ae=f(x,"SPAN",{class:!0});var Ce=y(ae);we=F(Ce,R),Ce.forEach(m),x.forEach(m),Ie=D(k),j=f(k,"SMALL",{class:!0});var ge=y(j);Z=f(ge,"SPAN",{class:!0,"data-svelte-h":!0}),V(Z)!=="svelte-1bn7wya"&&(Z.textContent=Ae),te=D(ge),ne=f(ge,"SPAN",{class:!0});var Ve=y(ne);ee=F(Ve,$e),Ve.forEach(m),ge.forEach(m),ye=D(k),J=f(k,"SMALL",{class:!0});var Ne=y(J);Y=f(Ne,"SPAN",{class:!0,"data-svelte-h":!0}),V(Y)!=="svelte-1704y1y"&&(Y.textContent=fe),De=D(Ne),B=f(Ne,"SPAN",{class:!0});var Le=y(B);Te=F(Le,se),Le.forEach(m),Ne.forEach(m),_e=D(k),M&&M.l(k),k.forEach(m),Me.forEach(m),U.forEach(m),this.h()},h(){g(s,"class","fw-bold"),g(u,"class","fw-lighter"),g(p,"class","fw-bolder"),g(c,"class","d-flex justify-content-between"),g(L,"class","fw-lighter"),g(A,"class","fw-bolder"),g($,"class","d-flex justify-content-between"),g(Q,"class","fw-lighter"),g(ae,"class","fw-bolder"),g(G,"class","d-flex justify-content-between"),g(Z,"class","fw-lighter"),g(ne,"class","fw-bolder"),g(j,"class","d-flex justify-content-between"),g(Y,"class","fw-lighter"),g(B,"class","fw-bolder"),g(J,"class","d-flex justify-content-between"),g(r,"class","d-flex flex-column gap-2"),g(t,"class","d-flex flex-column gap-2"),g(e,"class","list-group-item")},m(O,U){W(O,e,U),l(e,t),l(t,s),l(s,o),l(t,i),l(t,r),l(r,c),l(c,u),l(c,d),l(c,p),l(p,b),l(r,C),l(r,$),l($,L),l($,N),l($,A),l(A,q),l(r,H),l(r,G),l(G,Q),l(G,Se),l(G,ae),l(ae,we),l(r,Ie),l(r,j),l(j,Z),l(j,te),l(j,ne),l(ne,ee),l(r,ye),l(r,J),l(J,Y),l(J,De),l(J,B),l(B,Te),l(r,_e),M&&M.m(r,null)},p(O,U){U&2&&a!==(a=O[14]?.entry_type+"")&&be(o,a),U&2&&w!==(w=O[14]?.prepared_names_count+"")&&be(b,w),U&2&&I!==(I=O[14]?.baptism_ordinances_count+"")&&be(q,I),U&2&&R!==(R=O[14]?.initiatory_ordinances_count+"")&&be(we,R),U&2&&$e!==($e=O[14]?.endowment_ordinances_count+"")&&be(ee,$e),U&2&&se!==(se=O[14]?.sealing_ordinances_count+"")&&be(Te,se),O[14]?.created_at?M?M.p(O,U):(M=Nt(O),M.c(),M.m(r,null)):M&&(M.d(1),M=null)},d(O){O&&m(e),M&&M.d()}}}function jt(n){let e,t=ot(_t(n[10],"yyyy-MM-dd",new Date),"MMM dd, EEEE")+"",s,a,o,i,r=Pe(n[11]),c=[];for(let u=0;u<r.length;u+=1)c[u]=At(Lt(n,r,u));return{c(){e=_("div"),s=X(t),a=T(),o=_("ul");for(let u=0;u<c.length;u+=1)c[u].c();i=T(),this.h()},l(u){e=f(u,"DIV",{});var h=y(e);s=F(h,t),h.forEach(m),a=D(u),o=f(u,"UL",{class:!0});var d=y(o);for(let p=0;p<c.length;p+=1)c[p].l(d);i=D(d),d.forEach(m),this.h()},h(){g(o,"class","list-group")},m(u,h){W(u,e,h),l(e,s),W(u,a,h),W(u,o,h);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(o,null);l(o,i)},p(u,h){if(h&2&&t!==(t=ot(_t(u[10],"yyyy-MM-dd",new Date),"MMM dd, EEEE")+"")&&be(s,t),h&2){r=Pe(u[11]);let d;for(d=0;d<r.length;d+=1){const p=Lt(u,r,d);c[d]?c[d].p(p,h):(c[d]=At(p),c[d].c(),c[d].m(o,i))}for(;d<c.length;d+=1)c[d].d(1);c.length=r.length}},d(u){u&&(m(e),m(a),m(o)),it(c,u)}}}function $n(n){let e;function t(o,i){return o[0]?.length?En:Cn}let s=t(n),a=s(n);return{c(){a.c(),e=xe()},l(o){a.l(o),e=xe()},m(o,i){a.m(o,i),W(o,e,i)},p(o,[i]){s===(s=t(o))&&a?a.p(o,i):(a.d(1),a=s(o),a&&(a.c(),a.m(e.parentNode,e)))},i:Ee,o:Ee,d(o){o&&m(e),a.d(o)}}}function Mn(n){return n?n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):""}function kn(n,e,t){let s,a;const{stores:{data:o,groupedByDate:i},actions:{init:r}}=ht();Ze(n,i,w=>t(1,a=w));let{query:c=""}=e,u=[],h=[];const d=o.subscribe(w=>{t(0,u=w),t(4,h=[...w])}),p=w=>{let b=[...u];return w&&(b=b.filter(C=>C?.entry_type?C?.entry_type?.trim().toLowerCase().match(s.trim().toLowerCase()):!1)),b};return Vt(r),Rt(d),n.$$set=w=>{"query"in w&&t(3,c=w.query)},n.$$.update=()=>{n.$$.dirty&8&&(s=Mn(c?.trim().toLowerCase())),n.$$.dirty&24&&(c?t(0,u=p(c)):t(0,u=[...h]))},[u,a,i,c,h]}class Sn extends We{constructor(e){super(),qe(this,e,kn,$n,Ue,{query:3})}}function Ot(n){let e,t;return e=new Tn({props:{drawerId:n[6]}}),{c(){de(e.$$.fragment)},l(s){ue(e.$$.fragment,s)},m(s,a){ce(e,s,a),t=!0},p:Ee,i(s){t||(z(e.$$.fragment,s),t=!0)},o(s){K(e.$$.fragment,s),t=!1},d(s){ie(e,s)}}}function xt(n){let e,t;return e=new Sn({}),{c(){de(e.$$.fragment)},l(s){ue(e.$$.fragment,s)},m(s,a){ce(e,s,a),t=!0},i(s){t||(z(e.$$.fragment,s),t=!0)},o(s){K(e.$$.fragment,s),t=!1},d(s){ie(e,s)}}}function In(n){let e,t,s,a=n[0]==="form"&&Ot(n),o=n[0]==="results"&&xt();return{c(){a&&a.c(),e=T(),o&&o.c(),t=xe()},l(i){a&&a.l(i),e=D(i),o&&o.l(i),t=xe()},m(i,r){a&&a.m(i,r),W(i,e,r),o&&o.m(i,r),W(i,t,r),s=!0},p(i,r){i[0]==="form"?a?(a.p(i,r),r&1&&z(a,1)):(a=Ot(i),a.c(),z(a,1),a.m(e.parentNode,e)):a&&(bt(),K(a,1,1,()=>{a=null}),wt()),i[0]==="results"?o?r&1&&z(o,1):(o=xt(),o.c(),z(o,1),o.m(t.parentNode,t)):o&&(bt(),K(o,1,1,()=>{o=null}),wt())},i(i){s||(z(a),z(o),s=!0)},o(i){K(a),K(o),s=!1},d(i){i&&(m(e),m(t)),a&&a.d(i),o&&o.d(i)}}}function Ln(n){let e,t,s,a,o="Ward Mission Goal 2025 (Apr to Dec)",i,r,c,u,h,d,p='<tr><th scope="col"></th> <th scope="col"><span class="d-flex justify-content-end">Goal</span></th> <th scope="col"><span class="d-flex justify-content-end">Actual</span></th></tr>',w,b,C,$='<td><span class="fw-lighter">Baptisms</span></td> <td><span class="d-flex justify-content-end">7</span></td> <td><span class="d-flex justify-content-end">0</span></td>',L,v,N='<td><span class="fw-lighter">Family Sealing</span></td> <td><span class="d-flex justify-content-end">3</span></td> <td><span class="d-flex justify-content-end">0</span></td>',A,I,q,H='<span class="fw-lighter">Temple Ordinances</span>',G,Q,oe='<span class="d-flex justify-content-end">20,000</span>',Se,ae,R,we,Ie,j,Z,Ae='<span class="fw-lighter">Names Prepared for Temple Ordinances</span>',te,ne,$e='<span class="d-flex justify-content-end">--</span>',ee,ye,J,Y,fe,De,B,se,Te,_e,M,O,U,Me,me;return e=new Qt({props:{placement:n[2],title:n[3],id:n[6],$$slots:{default:[In]},$$scope:{ctx:n}}}),{c(){de(e.$$.fragment),t=T(),s=_("div"),a=_("div"),a.textContent=o,i=T(),r=_("div"),c=_("div"),u=_("div"),h=_("table"),d=_("thead"),d.innerHTML=p,w=T(),b=_("tbody"),C=_("tr"),C.innerHTML=$,L=T(),v=_("tr"),v.innerHTML=N,A=T(),I=_("tr"),q=_("td"),q.innerHTML=H,G=T(),Q=_("td"),Q.innerHTML=oe,Se=T(),ae=_("td"),R=_("span"),we=X(n[4]),Ie=T(),j=_("tr"),Z=_("td"),Z.innerHTML=Ae,te=T(),ne=_("td"),ne.innerHTML=$e,ee=T(),ye=_("td"),J=_("span"),Y=X(n[5]),fe=T(),De=_("div"),B=_("button"),se=X("Submit your temple activity"),Te=T(),_e=_("div"),M=_("button"),O=X("See all submissions"),this.h()},l(k){ue(e.$$.fragment,k),t=D(k),s=f(k,"DIV",{class:!0});var P=y(s);a=f(P,"DIV",{class:!0,"data-svelte-h":!0}),V(a)!=="svelte-skrweg"&&(a.textContent=o),i=D(P),r=f(P,"DIV",{class:!0});var he=y(r);c=f(he,"DIV",{class:!0});var pe=y(c);u=f(pe,"DIV",{class:!0});var ke=y(u);h=f(ke,"TABLE",{class:!0});var x=y(h);d=f(x,"THEAD",{"data-svelte-h":!0}),V(d)!=="svelte-mx78dg"&&(d.innerHTML=p),w=D(x),b=f(x,"TBODY",{});var Ce=y(b);C=f(Ce,"TR",{"data-svelte-h":!0}),V(C)!=="svelte-1539cya"&&(C.innerHTML=$),L=D(Ce),v=f(Ce,"TR",{"data-svelte-h":!0}),V(v)!=="svelte-xg1dto"&&(v.innerHTML=N),A=D(Ce),I=f(Ce,"TR",{});var ge=y(I);q=f(ge,"TD",{"data-svelte-h":!0}),V(q)!=="svelte-19hzl8h"&&(q.innerHTML=H),G=D(ge),Q=f(ge,"TD",{"data-svelte-h":!0}),V(Q)!=="svelte-1m6zzsn"&&(Q.innerHTML=oe),Se=D(ge),ae=f(ge,"TD",{});var Ve=y(ae);R=f(Ve,"SPAN",{class:!0});var Ne=y(R);we=F(Ne,n[4]),Ne.forEach(m),Ve.forEach(m),ge.forEach(m),Ie=D(Ce),j=f(Ce,"TR",{});var Le=y(j);Z=f(Le,"TD",{"data-svelte-h":!0}),V(Z)!=="svelte-ul3utp"&&(Z.innerHTML=Ae),te=D(Le),ne=f(Le,"TD",{"data-svelte-h":!0}),V(ne)!=="svelte-1pgevhv"&&(ne.innerHTML=$e),ee=D(Le),ye=f(Le,"TD",{});var ze=y(ye);J=f(ze,"SPAN",{class:!0});var et=y(J);Y=F(et,n[5]),et.forEach(m),ze.forEach(m),Le.forEach(m),Ce.forEach(m),x.forEach(m),ke.forEach(m),fe=D(pe),De=f(pe,"DIV",{class:!0});var Ge=y(De);B=f(Ge,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0});var tt=y(B);se=F(tt,"Submit your temple activity"),tt.forEach(m),Ge.forEach(m),Te=D(pe),_e=f(pe,"DIV",{class:!0});var Je=y(_e);M=f(Je,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0});var nt=y(M);O=F(nt,"See all submissions"),nt.forEach(m),Je.forEach(m),pe.forEach(m),he.forEach(m),P.forEach(m),this.h()},h(){g(a,"class","card-header"),g(R,"class","d-flex justify-content-end"),g(J,"class","d-flex justify-content-end"),g(h,"class","table"),g(u,"class","table-responsive"),g(B,"class","btn btn-sm btn-primary w-100"),g(B,"type","button"),g(B,"data-bs-toggle","offcanvas"),g(B,"data-bs-target","#"+n[6]),g(B,"aria-controls",n[6]),g(De,"class","d-block"),g(M,"class","btn btn-sm btn-link w-100"),g(M,"type","button"),g(M,"data-bs-toggle","offcanvas"),g(M,"data-bs-target","#"+n[6]),g(M,"aria-controls",n[6]),g(_e,"class","d-block"),g(c,"class","d-flex flex-column gap-2"),g(r,"class","card-body"),g(s,"class","card")},m(k,P){ce(e,k,P),W(k,t,P),W(k,s,P),l(s,a),l(s,i),l(s,r),l(r,c),l(c,u),l(u,h),l(h,d),l(h,w),l(h,b),l(b,C),l(b,L),l(b,v),l(b,A),l(b,I),l(I,q),l(I,G),l(I,Q),l(I,Se),l(I,ae),l(ae,R),l(R,we),l(b,Ie),l(b,j),l(j,Z),l(j,te),l(j,ne),l(j,ee),l(j,ye),l(ye,J),l(J,Y),l(c,fe),l(c,De),l(De,B),l(B,se),n[11](B),l(c,Te),l(c,_e),l(_e,M),l(M,O),U=!0,Me||(me=[Oe(B,"click",n[12]),Oe(M,"click",n[13])],Me=!0)},p(k,[P]){const he={};P&4&&(he.placement=k[2]),P&8&&(he.title=k[3]),P&32769&&(he.$$scope={dirty:P,ctx:k}),e.$set(he),(!U||P&16)&&be(we,k[4]),(!U||P&32)&&be(Y,k[5])},i(k){U||(z(e.$$.fragment,k),U=!0)},o(k){K(e.$$.fragment,k),U=!1},d(k){k&&(m(t),m(s)),ie(e,k),n[11](null),Me=!1,mt(me)}}}function Nn(n,e,t){let s,a,o,i="form",r=Zt(),c="end",u,h=!1;const{stores:{totalOrdinancesPerformed:d,totalNamesPrepared:p},actions:{init:w}}=ht();Ze(n,d,v=>t(4,a=v)),Ze(n,p,v=>t(5,o=v));let b=null;Vt(async()=>{await w();const v=new URLSearchParams(window.location.search);t(10,b=v.get("log-temple-activity"))});function C(v){Re[v?"unshift":"push"](()=>{u=v,t(1,u)})}const $=()=>{t(0,i="form")},L=()=>{t(0,i="results")};return n.$$.update=()=>{n.$$.dirty&1538&&b&&b==="yes"&&u&&!h&&(u.click(),t(9,h=!0)),n.$$.dirty&1&&t(2,c=i==="form"?"end":"start"),n.$$.dirty&1&&t(3,s=i==="form"?"Temple Activity":"Temple Activity Results")},[i,u,c,s,a,o,r,d,p,h,b,C,$,L]}class An extends We{constructor(e){super(),qe(this,e,Nn,Ln,Ue,{})}}function Pt(n){let e,t='<ul class="list-group list-group-flush"><li class="list-group-item d-flex align-items-center justify-content-between"><div>Sacrament Program</div> <a href="/sacrament-program" class="btn btn-sm btn-primary"><i class="bi bi-link"></i></a></li></ul>';return{c(){e=_("div"),e.innerHTML=t,this.h()},l(s){e=f(s,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-lx06tj"&&(e.innerHTML=t),this.h()},h(){g(e,"class","card")},m(s,a){W(s,e,a)},d(s){s&&m(e)}}}function jn(n){let e,t=(n[4]||n[0]||n[1])&&Pt();return{c(){t&&t.c(),e=xe()},l(s){t&&t.l(s),e=xe()},m(s,a){t&&t.m(s,a),W(s,e,a)},p(s,[a]){s[4]||s[0]||s[1]?t||(t=Pt(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Ee,o:Ee,d(s){s&&m(e),t&&t.d(s)}}}function On(n,e,t){let s,a;const{stores:{currentUserIsAdmin:o,currentUserIsRoot:i}}=Jt();Ze(n,o,c=>t(0,s=c)),Ze(n,i,c=>t(1,a=c));const r=Kt(new Date);return[s,a,o,i,r]}class xn extends We{constructor(e){super(),qe(this,e,On,jn,Ue,{})}}function Pn(n){let e,t,s,a,o,i,r,c,u,h,d,p,w,b;return t=new xn({}),a=new qt({}),i=new An({}),u=new Yt({}),d=new Ft({}),w=new mn({}),{c(){e=_("div"),de(t.$$.fragment),s=T(),de(a.$$.fragment),o=T(),de(i.$$.fragment),r=T(),c=_("div"),de(u.$$.fragment),h=T(),de(d.$$.fragment),p=T(),de(w.$$.fragment),this.h()},l(C){e=f(C,"DIV",{class:!0});var $=y(e);ue(t.$$.fragment,$),s=D($),ue(a.$$.fragment,$),o=D($),ue(i.$$.fragment,$),r=D($),c=f($,"DIV",{class:!0});var L=y(c);ue(u.$$.fragment,L),h=D(L),ue(d.$$.fragment,L),L.forEach(m),p=D($),ue(w.$$.fragment,$),$.forEach(m),this.h()},h(){g(c,"class","d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column justify-content-between gap-4"),g(e,"class","d-flex flex-column gap-4")},m(C,$){W(C,e,$),ce(t,e,null),l(e,s),ce(a,e,null),l(e,o),ce(i,e,null),l(e,r),l(e,c),ce(u,c,null),l(c,h),ce(d,c,null),l(e,p),ce(w,e,null),b=!0},p:Ee,i(C){b||(z(t.$$.fragment,C),z(a.$$.fragment,C),z(i.$$.fragment,C),z(u.$$.fragment,C),z(d.$$.fragment,C),z(w.$$.fragment,C),b=!0)},o(C){K(t.$$.fragment,C),K(a.$$.fragment,C),K(i.$$.fragment,C),K(u.$$.fragment,C),K(d.$$.fragment,C),K(w.$$.fragment,C),b=!1},d(C){C&&m(e),ie(t),ie(a),ie(i),ie(u),ie(d),ie(w)}}}class Xn extends We{constructor(e){super(),qe(this,e,null,Pn,Ue,{})}}export{Xn as H};
