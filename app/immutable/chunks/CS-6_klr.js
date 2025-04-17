import{s as Ge,n as Me,r as pt,j as Ut,h as Fe,B as Ke,l as qt,b as ze,D as wt,o as Wt,C as Yt}from"./DFi_IyuO.js";import{S as Xe,i as Je,d as _,e as W,j as Oe,x as ut,l as r,n as g,o as f,p as b,q as B,h as E,r as h,s as T,v as U,w as q,y as fe,u as xe,J as Qe,b as he,t as K,a as z,E as mt,F as bt,m as me,D as Ft,f as _e,k as pe,G as zt,g as yt,c as Et}from"./CxxyB1Oo.js";import{W as Gt,a as Xt,S as Jt}from"./wRoTqrFY.js";import{e as Be}from"./D6vIPG34.js";import{t as ge,c as Kt,b as Qt,e as Zt,d as Tt,m as Ct,h as lt,f as et,g as en,i as tn}from"./7vQcJKzB.js";import{p as _t}from"./Bim047dt.js";import{D as nn,v as sn}from"./CTONLfFB.js";import{w as it,d as ot}from"./DIoSxB7H.js";import{s as dt}from"./DsH82brL.js";import{E as an}from"./Bg3OnM_k.js";function ct(s,e){const t=ge(s),n=ge(e),a=t.getTime()-n.getTime();return a<0?-1:a>0?1:a}function rn(s){return Kt(s,Date.now())}function ln(s,e){const t=ge(s),n=ge(e),a=t.getFullYear()-n.getFullYear(),o=t.getMonth()-n.getMonth();return a*12+o}function on(s){return e=>{const n=(s?Math[s]:Math.trunc)(e);return n===0?0:n}}function cn(s,e){return+ge(s)-+ge(e)}function un(s){const e=ge(s);return e.setHours(23,59,59,999),e}function dn(s){const e=ge(s),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function fn(s){const e=ge(s);return+un(e)==+dn(e)}function hn(s,e){const t=ge(s),n=ge(e),a=ct(t,n),o=Math.abs(ln(t,n));let c;if(o<1)c=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-a*o);let i=ct(t,n)===-a;fn(ge(s))&&o===1&&ct(s,n)===1&&(i=!1),c=a*(o-Number(i))}return c===0?0:c}function mn(s,e,t){const n=cn(s,e)/1e3;return on(t?.roundingMethod)(n)}function _n(s,e,t){const n=Qt(),a=t?.locale??n.locale??Zt,o=2520,c=ct(s,e);if(isNaN(c))throw new RangeError("Invalid time value");const i=Object.assign({},t,{addSuffix:t?.addSuffix,comparison:c});let u,m;c>0?(u=ge(e),m=ge(s)):(u=ge(s),m=ge(e));const d=mn(m,u),l=(Tt(m)-Tt(u))/1e3,p=Math.round((d-l)/60);let w;if(p<2)return t?.includeSeconds?d<5?a.formatDistance("lessThanXSeconds",5,i):d<10?a.formatDistance("lessThanXSeconds",10,i):d<20?a.formatDistance("lessThanXSeconds",20,i):d<40?a.formatDistance("halfAMinute",0,i):d<60?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",1,i):p===0?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",p,i);if(p<45)return a.formatDistance("xMinutes",p,i);if(p<90)return a.formatDistance("aboutXHours",1,i);if(p<Ct){const v=Math.round(p/60);return a.formatDistance("aboutXHours",v,i)}else{if(p<o)return a.formatDistance("xDays",1,i);if(p<lt){const v=Math.round(p/Ct);return a.formatDistance("xDays",v,i)}else if(p<lt*2)return w=Math.round(p/lt),a.formatDistance("aboutXMonths",w,i)}if(w=hn(m,u),w<12){const v=Math.round(p/lt);return a.formatDistance("xMonths",v,i)}else{const v=w%12,D=Math.trunc(w/12);return v<3?a.formatDistance("aboutXYears",D,i):v<9?a.formatDistance("overXYears",D,i):a.formatDistance("almostXYears",D+1,i)}}function Dt(s,e){return _n(s,rn(s),e)}function kt(s,e,t){const n=s.slice();return n[3]=e[t],n}function pn(s){let e,t,n="Lesson Schedule",a,o,c=Be(s[0]),i=[];for(let u=0;u<c.length;u+=1)i[u]=Mt(kt(s,c,u));return{c(){e=h("div"),t=h("div"),t.textContent=n,a=T(),o=h("ul");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){e=f(u,"DIV",{class:!0});var m=b(e);t=f(m,"DIV",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-1wzkwv6"&&(t.textContent=n),a=E(m),o=f(m,"UL",{class:!0});var d=b(o);for(let l=0;l<i.length;l+=1)i[l].l(d);d.forEach(_),m.forEach(_),this.h()},h(){g(t,"class","card-header"),g(o,"class","list-group list-group-flush"),g(e,"class","card")},m(u,m){W(u,e,m),r(e,t),r(e,a),r(e,o);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(o,null)},p(u,m){if(m&1){c=Be(u[0]);let d;for(d=0;d<c.length;d+=1){const l=kt(u,c,d);i[d]?i[d].p(l,m):(i[d]=Mt(l),i[d].c(),i[d].m(o,null))}for(;d<i.length;d+=1)i[d].d(1);i.length=c.length}},d(u){u&&_(e),ut(i,u)}}}function Mt(s){let e,t,n,a=et(_t(s[3].date,"yyyy-MM-dd",new Date),"dd EEEE MMM, yyyy")+"",o,c,i,u,m=s[3].title+"",d,l,p,w=s[3].speaker+"",v,D;return{c(){e=h("li"),t=h("div"),n=h("div"),o=q(a),c=T(),i=h("div"),u=h("a"),d=q(m),l=T(),p=h("div"),v=q(w),D=T(),this.h()},l(S){e=f(S,"LI",{class:!0});var k=b(e);t=f(k,"DIV",{});var y=b(t);n=f(y,"DIV",{class:!0});var j=b(n);o=U(j,a),j.forEach(_),c=E(y),i=f(y,"DIV",{class:!0});var $=b(i);u=f($,"A",{href:!0,target:!0});var N=b(u);d=U(N,m),N.forEach(_),$.forEach(_),l=E(y),p=f(y,"DIV",{class:!0});var M=b(p);v=U(M,w),M.forEach(_),y.forEach(_),D=E(k),k.forEach(_),this.h()},h(){g(n,"class","fw-lighter small"),g(u,"href",s[3].url),g(u,"target","_blank"),g(i,"class","fw-bolder"),g(p,"class","fw-light small"),g(e,"class","list-group-item")},m(S,k){W(S,e,k),r(e,t),r(t,n),r(n,o),r(t,c),r(t,i),r(i,u),r(u,d),r(t,l),r(t,p),r(p,v),r(e,D)},p:Me,d(S){S&&_(e)}}}function gn(s){let e,t=s[0].length>0&&pn(s);return{c(){t&&t.c(),e=Oe()},l(n){t&&t.l(n),e=Oe()},m(n,a){t&&t.m(n,a),W(n,e,a)},p(n,[a]){n[0].length>0&&t.p(n,a)},i:Me,o:Me,d(n){n&&_(e),t&&t.d(n)}}}function vn(s){const e=[{date:"2024-11-10",title:"The Lord Jesus Christ Will Come Again",speaker:"President Russell M. Nelson",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/57nelson?lang=eng"},{date:"2024-11-24",title:"Burying Our Weapons of Rebellion",speaker:"Elder D. Todd Christofferson",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/21christofferson?lang=eng"},{date:"2024-12-08",title:"Nourish the Roots, and the Branches Will Grow",speaker:"Elder Dieter F. Uchtdorf",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/51uchtdorf?lang=eng"},{date:"2024-12-22",title:"I Am He",speaker:"Elder Jeffrey R. Holland",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/41holland?lang=eng"},{date:"2025-01-12",title:"Live Up to Your Privileges",speaker:"Sister Emily Belle Freeman",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/13freeman?lang=eng"},{date:"2025-01-26",title:"Welcome to the Church of Joy",speaker:"Elder Patrick Kearon",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/24kearon?lang=eng"},{date:"2025-02-09",title:"O Youth of the Noble Birthright",speaker:"Brother Bradley R. Wilcox",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/46wilcox?lang=eng"},{date:"2025-02-23",title:"The Wind Will Never Cease to Blow",speaker:"Elder Aroldo B. Cavalcante",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/27cavalcante?lang=eng"},{date:"2025-03-09",title:"Seeking Answers to Spiritual Questions",speaker:"Sister Tracy Y. Browning",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/42browning?lang=eng"},{date:"2025-03-23",title:"Behold I Am the Light in Which Ye Shall Hold Up",speaker:"Elder Ronald A. Rasband",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/53rasband?lang=eng"},{date:"2025-04-13",title:"Seek Him with All Your Heart",speaker:"Bishop L. Todd Budge",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/45budge?lang=eng"},{date:"2025-04-27",title:"Mortality Works",speaker:"Elder Brook P. Hales",url:"https://www.churchofjesuschrist.org/study/general-conference/2024/10/43hales?lang=eng"},{date:"2025-05-11",title:"Return to Me, That I May Heal You",speaker:"Elder S. Mark Palmer",url:"https://www.churchofjesuschrist.org/study/general-conference/2025/04/23palmer?lang=eng"},{date:"2025-05-25",title:"Confidence in the Presence of God",speaker:"President Russell M. Nelson",url:"https://www.churchofjesuschrist.org/study/general-conference/2025/04/57nelson?lang=eng"},{date:"2025-06-08",title:"Cherishing Life",speaker:"Elder Neil L. Andersen",url:"https://www.churchofjesuschrist.org/study/general-conference/2025/04/21andersen?lang=eng"},{date:"2025-06-22",title:"Compensating Blessings",speaker:"Elder Gérald Caussé",url:"https://www.churchofjesuschrist.org/study/general-conference/2025/04/44causse?lang=eng"},{date:"2025-07-13",title:"Your Repentance Doesn't Burden Jesus Christ. It Brightens His Joy",speaker:"Sister Tamara W. Runia",url:"https://www.churchofjesuschrist.org/study/general-conference/2025/04/43runia?lang=eng"},{date:"2025-07-27",title:"Joy through Covenant Discipleship",speaker:"Elder John A. McCune",url:"https://www.churchofjesuschrist.org/study/general-conference/2025/04/46mccune?lang=eng"},{date:"2025-08-10",title:"True to the Faith That Our Parents Have Cherished",speaker:"Elder Hans T. Boom",url:"https://www.churchofjesuschrist.org/study/general-conference/2025/04/26boom?lang=eng"},{date:"2025-08-24",title:"Faith: A Bond of Trust and Loyalty",speaker:"Elder Sandino Roman",url:"https://www.churchofjesuschrist.org/study/general-conference/2025/04/24roman?lang=eng"},{date:"2025-09-14",title:"Right Before Our Eyes",speaker:"Elder Ronald A. Rasband",url:"https://www.churchofjesuschrist.org/study/general-conference/2025/04/15rasband?lang=eng"},{date:"2025-09-28",title:"My Love for the Savior is my Why",speaker:"Elder Ricardo P. Gimenez",url:"https://www.churchofjesuschrist.org/study/general-conference/2025/04/17gimenez?lang=eng"},{date:"2025-10-12",title:"Participate To Prepare for Christ’s Return",speaker:"Elder Steven D. Shumway",url:"https://www.churchofjesuschrist.org/study/general-conference/2025/04/42shumway?lang=eng"},{date:"2025-10-26",title:"Reverence for Sacred Things",speaker:"Elder Ulisses Soares",url:"https://www.churchofjesuschrist.org/study/general-conference/2025/04/51soares?lang=eng"}],t=new Date;return[e.filter(a=>new Date(a.date)>=t)]}class wn extends Xe{constructor(e){super(),Je(this,e,vn,gn,Ge,{})}}function St(s){let e,t;return{c(){e=h("small"),t=q(s[2]),this.h()},l(n){e=f(n,"SMALL",{class:!0});var a=b(e);t=U(a,s[2]),a.forEach(_),this.h()},h(){g(e,"class","fw-lighter text-muted")},m(n,a){W(n,e,a),r(e,t)},p(n,a){a&4&&fe(t,n[2])},d(n){n&&_(e)}}}function bn(s){let e,t,n,a,o,c,i,u,m='<i class="bi bi-dash"></i>',d,l,p,w,v,D='<i class="bi bi-plus"></i>',S,k,y=s[2]&&St(s);return{c(){e=h("div"),t=h("div"),n=h("span"),a=q(s[1]),o=T(),y&&y.c(),c=T(),i=h("div"),u=h("button"),u.innerHTML=m,d=T(),l=h("div"),p=q(s[0]),w=T(),v=h("button"),v.innerHTML=D,this.h()},l(j){e=f(j,"DIV",{class:!0});var $=b(e);t=f($,"DIV",{});var N=b(t);n=f(N,"SPAN",{});var M=b(n);a=U(M,s[1]),M.forEach(_),o=E(N),y&&y.l(N),N.forEach(_),c=E($),i=f($,"DIV",{class:!0});var H=b(i);u=f(H,"BUTTON",{class:!0,"data-svelte-h":!0}),B(u)!=="svelte-m10tng"&&(u.innerHTML=m),d=E(H),l=f(H,"DIV",{class:!0});var Q=b(l);p=U(Q,s[0]),Q.forEach(_),w=E(H),v=f(H,"BUTTON",{class:!0,"data-svelte-h":!0}),B(v)!=="svelte-z6pujo"&&(v.innerHTML=D),H.forEach(_),$.forEach(_),this.h()},h(){g(u,"class","btn btn-sm btn-primary"),g(l,"class","count-container d-flex justify-content-end svelte-1ciu8qs"),g(v,"class","btn btn-sm btn-primary"),g(i,"class","d-flex flex-row gap-3 align-items-center"),g(e,"class","d-flex flex-row gap-3 justify-content-between align-items-end")},m(j,$){W(j,e,$),r(e,t),r(t,n),r(n,a),r(t,o),y&&y.m(t,null),r(e,c),r(e,i),r(i,u),r(i,d),r(i,l),r(l,p),r(i,w),r(i,v),S||(k=[xe(u,"click",s[4]),xe(v,"click",s[3])],S=!0)},p(j,[$]){$&2&&fe(a,j[1]),j[2]?y?y.p(j,$):(y=St(j),y.c(),y.m(t,null)):y&&(y.d(1),y=null),$&1&&fe(p,j[0])},i:Me,o:Me,d(j){j&&_(e),y&&y.d(),S=!1,pt(k)}}}function yn(s,e,t){let{count:n=0}=e,{label:a="Count"}=e,{description:o=""}=e;const c=()=>{t(0,n++,n)},i=()=>{n<=0||t(0,n--,n)};return s.$$set=u=>{"count"in u&&t(0,n=u.count),"label"in u&&t(1,a=u.label),"description"in u&&t(2,o=u.description)},[n,a,o,c,i]}class Ze extends Xe{constructor(e){super(),Je(this,e,yn,bn,Ge,{count:0,label:1,description:2})}}const $t=it([]);let ht=!1;async function ft(){if(ht)return Ut($t);ht=!0;const{data:s,error:e}=await dt.from("temple_challenge_entries").select("*");if(e)throw e;const t=s||[];return $t.set(t),setTimeout(()=>ht=!1,800),t}async function En(s){const{data:e,error:t}=await dt.from("temple_challenge_entries").insert([s]).select();if(t)throw t;return await ft(),e?e[0]:void 0}async function Tn(s,e){const{data:t,error:n}=await dt.from("temple_challenge_entries").update(e).eq("id",s).select();if(n)throw n;return await ft(),t?t[0]:void 0}async function Cn(s){const{error:e}=await dt.from("temple_challenge_entries").delete().eq("id",s);if(e)throw e;await ft()}let st=null;const Dn=()=>{const s=it(!1),e=it(!1),t=it([]),n=ot([t],([l])=>{const p=l.reduce((v,D)=>((v[D.date]||=[]).push(D),v),{}),w=Object.entries(p).sort(([v],[D])=>new Date(D).getTime()-new Date(v).getTime()).map(([v,D])=>[v,D.sort((S,k)=>new Date(k.created_at??"").getTime()-new Date(S.created_at??"").getTime())]);return Object.fromEntries(w)}),a=ot(t,l=>l.reduce((p,w)=>({baptism_ordinances_count:p.baptism_ordinances_count+(w.baptism_ordinances_count??0),confirmation_ordinances_count:p.confirmation_ordinances_count+(w.confirmation_ordinances_count??0),initiatory_ordinances_count:p.initiatory_ordinances_count+(w.initiatory_ordinances_count??0),endowment_ordinances_count:p.endowment_ordinances_count+(w.endowment_ordinances_count??0),sealing_ordinances_count:p.sealing_ordinances_count+(w.sealing_ordinances_count??0)}),{baptism_ordinances_count:0,confirmation_ordinances_count:0,initiatory_ordinances_count:0,endowment_ordinances_count:0,sealing_ordinances_count:0})),o=ot(t,l=>l.reduce((p,w)=>p+(w.baptism_ordinances_count??0)+(w.confirmation_ordinances_count??0)+(w.initiatory_ordinances_count??0)+(w.endowment_ordinances_count??0)+(w.sealing_ordinances_count??0),0)),c=ot(t,l=>l.reduce((p,w)=>p+(w.prepared_names_count??0),0));return st={stores:{ready:s,loading:e,data:t,groupedByDate:n,detailTotals:a,totalOrdinancesPerformed:o,totalNamesPrepared:c},actions:{reload:async()=>{const l=await ft();l?.length&&t.set(l)},apiCreate:async l=>{await En(l)},apiUpdate:async(l,p)=>{await Tn(l,p)},apiDelete:async l=>{await Cn(l)}}},st},gt=()=>st?.stores&&Object.keys(st.stores).length>0?st:Dn();function It(s,e,t){const n=s.slice();return n[19]=e[t],n}function Lt(s){let e,t=s[19]+"",n;return{c(){e=h("option"),n=q(t),this.h()},l(a){e=f(a,"OPTION",{});var o=b(e);n=U(o,t),o.forEach(_),this.h()},h(){e.__value=s[19],mt(e,e.__value)},m(a,o){W(a,e,o),r(e,n)},p:Me,d(a){a&&_(e)}}}function kn(s){let e,t,n="Log your temple activity here.",a,o,c,i="Date",u,m,d="When was this activity done?",l,p,w,v,D,S="Activity Type",k,y,j="What kind of temple activity was this?",$,N,M,H,Q,te,ve,$e,ae,Z,ne,be,G,we,De,ie,ye,ce,se,Ee,R,X,Te,ke="Total:",Y,re,Ce,Ie,J,A,F="Cancel",P,O,ue="Submit",le,Le,V,x=Be(s[3]),L=[];for(let C=0;C<x.length;C+=1)L[C]=Lt(It(s,x,C));function Ae(C){s[9](C)}let Se={label:"Temple Name Preparation Count",description:"Number of names you were able to prepare for temple ordinances"};s[0].prepared_names_count!==void 0&&(Se.count=s[0].prepared_names_count),H=new Ze({props:Se}),Fe.push(()=>Qe(H,"count",Ae));function ee(C){s[10](C)}let Ne={label:"Temple Baptism Ordinances Count",description:"Number of Temple Baptism Ordinances you participated in"};s[0].baptism_ordinances_count!==void 0&&(Ne.count=s[0].baptism_ordinances_count),ve=new Ze({props:Ne}),Fe.push(()=>Qe(ve,"count",ee));function He(C){s[11](C)}let je={label:"Temple Confirmation Ordinances Count",description:"Number of Temple Confirmation Ordinances you participated in"};s[0].confirmation_ordinances_count!==void 0&&(je.count=s[0].confirmation_ordinances_count),Z=new Ze({props:je}),Fe.push(()=>Qe(Z,"count",He));function Re(C){s[12](C)}let Ve={label:"Temple Initiatory Ordinances Count",description:"Number of Temple Initiatory Ordinances you did OR participated in the Temple"};s[0].initiatory_ordinances_count!==void 0&&(Ve.count=s[0].initiatory_ordinances_count),G=new Ze({props:Ve}),Fe.push(()=>Qe(G,"count",Re));function at(C){s[13](C)}let We={label:"Temple Endowment Ordinances Count",description:"Number of Temple Endowment Ordinances you did OR participated in the Temple"};s[0].endowment_ordinances_count!==void 0&&(We.count=s[0].endowment_ordinances_count),ie=new Ze({props:We}),Fe.push(()=>Qe(ie,"count",at));function rt(C){s[14](C)}let Ue={label:"Temple Sealing Ordinances Count",description:"Number of Temple Sealing Ordinances you did OR participated in the Temple"};return s[0].sealing_ordinances_count!==void 0&&(Ue.count=s[0].sealing_ordinances_count),se=new Ze({props:Ue}),Fe.push(()=>Qe(se,"count",rt)),{c(){e=h("div"),t=h("div"),t.textContent=n,a=T(),o=h("div"),c=h("div"),c.textContent=i,u=T(),m=h("small"),m.textContent=d,l=T(),p=h("input"),w=T(),v=h("div"),D=h("div"),D.textContent=S,k=T(),y=h("small"),y.textContent=j,$=T(),N=h("select");for(let C=0;C<L.length;C+=1)L[C].c();M=T(),pe(H.$$.fragment),te=T(),pe(ve.$$.fragment),ae=T(),pe(Z.$$.fragment),be=T(),pe(G.$$.fragment),De=T(),pe(ie.$$.fragment),ce=T(),pe(se.$$.fragment),R=T(),X=h("div"),Te=h("span"),Te.textContent=ke,Y=T(),re=h("span"),Ce=q(s[1]),Ie=T(),J=h("div"),A=h("button"),A.textContent=F,P=T(),O=h("button"),O.textContent=ue,this.h()},l(C){e=f(C,"DIV",{class:!0});var I=b(e);t=f(I,"DIV",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-edkt6z"&&(t.textContent=n),a=E(I),o=f(I,"DIV",{class:!0});var oe=b(o);c=f(oe,"DIV",{"data-svelte-h":!0}),B(c)!=="svelte-myn5jk"&&(c.textContent=i),u=E(oe),m=f(oe,"SMALL",{class:!0,"data-svelte-h":!0}),B(m)!=="svelte-1vydpg8"&&(m.textContent=d),l=E(oe),p=f(oe,"INPUT",{type:!0,class:!0,id:!0}),oe.forEach(_),w=E(I),v=f(I,"DIV",{class:!0});var Pe=b(v);D=f(Pe,"DIV",{"data-svelte-h":!0}),B(D)!=="svelte-gyj3h9"&&(D.textContent=S),k=E(Pe),y=f(Pe,"SMALL",{class:!0,"data-svelte-h":!0}),B(y)!=="svelte-6czr2q"&&(y.textContent=j),$=E(Pe),N=f(Pe,"SELECT",{class:!0});var tt=b(N);for(let de=0;de<L.length;de+=1)L[de].l(tt);tt.forEach(_),Pe.forEach(_),M=E(I),_e(H.$$.fragment,I),te=E(I),_e(ve.$$.fragment,I),ae=E(I),_e(Z.$$.fragment,I),be=E(I),_e(G.$$.fragment,I),De=E(I),_e(ie.$$.fragment,I),ce=E(I),_e(se.$$.fragment,I),R=E(I),X=f(I,"DIV",{class:!0});var qe=b(X);Te=f(qe,"SPAN",{class:!0,"data-svelte-h":!0}),B(Te)!=="svelte-1f2mlef"&&(Te.textContent=ke),Y=E(qe),re=f(qe,"SPAN",{class:!0,style:!0});var nt=b(re);Ce=U(nt,s[1]),nt.forEach(_),qe.forEach(_),Ie=E(I),J=f(I,"DIV",{class:!0});var Ye=b(J);A=f(Ye,"BUTTON",{class:!0,"data-svelte-h":!0}),B(A)!=="svelte-19vd26f"&&(A.textContent=F),P=E(Ye),O=f(Ye,"BUTTON",{class:!0,"data-svelte-h":!0}),B(O)!=="svelte-mfwkik"&&(O.textContent=ue),Ye.forEach(_),I.forEach(_),this.h()},h(){g(t,"class","d-flex flex-column gap-2"),g(m,"class","fw-lighter text-muted"),g(p,"type","date"),g(p,"class","form-control"),g(p,"id","endDate"),g(o,"class","d-flex flex-column gap-2"),g(y,"class","fw-lighter text-muted"),g(N,"class","form-select form-control-sm"),s[0].entry_type===void 0&&qt(()=>s[8].call(N)),g(v,"class","d-flex flex-column gap-2"),g(Te,"class","fw-bolder"),g(re,"class","fw-bolder"),Ft(re,"margin-right","47px"),g(X,"class","d-flex justify-content-between border-1 border-top pt-3 mt-4"),g(A,"class","btn btn-secondary"),g(O,"class","btn btn-primary"),g(J,"class","d-flex justify-content-between"),g(e,"class","d-flex flex-column gap-3")},m(C,I){W(C,e,I),r(e,t),r(e,a),r(e,o),r(o,c),r(o,u),r(o,m),r(o,l),r(o,p),mt(p,s[0].date),r(e,w),r(e,v),r(v,D),r(v,k),r(v,y),r(v,$),r(v,N);for(let oe=0;oe<L.length;oe+=1)L[oe]&&L[oe].m(N,null);bt(N,s[0].entry_type,!0),r(e,M),me(H,e,null),r(e,te),me(ve,e,null),r(e,ae),me(Z,e,null),r(e,be),me(G,e,null),r(e,De),me(ie,e,null),r(e,ce),me(se,e,null),r(e,R),r(e,X),r(X,Te),r(X,Y),r(X,re),r(re,Ce),r(e,Ie),r(e,J),r(J,A),r(J,P),r(J,O),le=!0,Le||(V=[xe(p,"input",s[7]),xe(N,"change",s[8]),xe(A,"click",s[4]),xe(O,"click",s[5])],Le=!0)},p(C,[I]){if(I&9&&mt(p,C[0].date),I&8){x=Be(C[3]);let de;for(de=0;de<x.length;de+=1){const vt=It(C,x,de);L[de]?L[de].p(vt,I):(L[de]=Lt(vt),L[de].c(),L[de].m(N,null))}for(;de<L.length;de+=1)L[de].d(1);L.length=x.length}I&9&&bt(N,C[0].entry_type);const oe={};!Q&&I&1&&(Q=!0,oe.count=C[0].prepared_names_count,Ke(()=>Q=!1)),H.$set(oe);const Pe={};!$e&&I&1&&($e=!0,Pe.count=C[0].baptism_ordinances_count,Ke(()=>$e=!1)),ve.$set(Pe);const tt={};!ne&&I&1&&(ne=!0,tt.count=C[0].confirmation_ordinances_count,Ke(()=>ne=!1)),Z.$set(tt);const qe={};!we&&I&1&&(we=!0,qe.count=C[0].initiatory_ordinances_count,Ke(()=>we=!1)),G.$set(qe);const nt={};!ye&&I&1&&(ye=!0,nt.count=C[0].endowment_ordinances_count,Ke(()=>ye=!1)),ie.$set(nt);const Ye={};!Ee&&I&1&&(Ee=!0,Ye.count=C[0].sealing_ordinances_count,Ke(()=>Ee=!1)),se.$set(Ye),(!le||I&2)&&fe(Ce,C[1])},i(C){le||(z(H.$$.fragment,C),z(ve.$$.fragment,C),z(Z.$$.fragment,C),z(G.$$.fragment,C),z(ie.$$.fragment,C),z(se.$$.fragment,C),le=!0)},o(C){K(H.$$.fragment,C),K(ve.$$.fragment,C),K(Z.$$.fragment,C),K(G.$$.fragment,C),K(ie.$$.fragment,C),K(se.$$.fragment,C),le=!1},d(C){C&&_(e),ut(L,C),he(H),he(ve),he(Z),he(G),he(ie),he(se),Le=!1,pt(V)}}}function Mn(s,e,t){let n,a,{drawerId:o=""}=e;const{stores:{loading:c},actions:{apiCreate:i,reload:u}}=gt();ze(s,c,M=>t(15,a=M));const m=["Personal","Family","Ward - Youth Temple Baptism","Ward - Temple Activity","Stake - Tuesday Temple Night"],d={prepared_names_count:0,baptism_ordinances_count:0,confirmation_ordinances_count:0,initiatory_ordinances_count:0,endowment_ordinances_count:0,sealing_ordinances_count:0,entry_type:"Personal",date:et(new Date,"yyyy-MM-dd"),approved:!0};let l={...d};const p=()=>{t(0,l={...d});const M=`[data-bs-target="#${o}"]`,H=document.querySelector(M);H&&H.click()},w=async()=>{try{wt(c,a=!0,a),await i({prepared_names_count:l.prepared_names_count,baptism_ordinances_count:l.baptism_ordinances_count,confirmation_ordinances_count:l.confirmation_ordinances_count,initiatory_ordinances_count:l.initiatory_ordinances_count,endowment_ordinances_count:l.endowment_ordinances_count,sealing_ordinances_count:l.sealing_ordinances_count,entry_type:l.entry_type,date:l.date,created_at:new Date().toISOString(),approved:!0}),await u()}catch(M){console.error(M)}finally{wt(c,a=!1,a),p()}};function v(){l.date=this.value,t(0,l),t(3,m)}function D(){l.entry_type=zt(this),t(0,l),t(3,m)}function S(M){s.$$.not_equal(l.prepared_names_count,M)&&(l.prepared_names_count=M,t(0,l))}function k(M){s.$$.not_equal(l.baptism_ordinances_count,M)&&(l.baptism_ordinances_count=M,t(0,l))}function y(M){s.$$.not_equal(l.confirmation_ordinances_count,M)&&(l.confirmation_ordinances_count=M,t(0,l))}function j(M){s.$$.not_equal(l.initiatory_ordinances_count,M)&&(l.initiatory_ordinances_count=M,t(0,l))}function $(M){s.$$.not_equal(l.endowment_ordinances_count,M)&&(l.endowment_ordinances_count=M,t(0,l))}function N(M){s.$$.not_equal(l.sealing_ordinances_count,M)&&(l.sealing_ordinances_count=M,t(0,l))}return s.$$set=M=>{"drawerId"in M&&t(6,o=M.drawerId)},s.$$.update=()=>{s.$$.dirty&1&&t(1,n=l.prepared_names_count+l.baptism_ordinances_count+l.confirmation_ordinances_count+l.initiatory_ordinances_count+l.endowment_ordinances_count+l.sealing_ordinances_count)},[l,n,c,m,p,w,o,v,D,S,k,y,j,$,N]}class Sn extends Xe{constructor(e){super(),Je(this,e,Mn,kn,Ge,{drawerId:6})}}function Nt(s,e,t){const n=s.slice();return n[10]=e[t][0],n[11]=e[t][1],n}function jt(s,e,t){const n=s.slice();return n[14]=e[t],n}function $n(s){let e;return{c(){e=q("No Data Found")},l(t){e=U(t,"No Data Found")},m(t,n){W(t,e,n)},p:Me,d(t){t&&_(e)}}}function In(s){let e,t=Be(Object.entries(s[1])),n=[];for(let a=0;a<t.length;a+=1)n[a]=xt(Nt(s,t,a));return{c(){e=h("div");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=f(a,"DIV",{class:!0});var o=b(e);for(let c=0;c<n.length;c+=1)n[c].l(o);o.forEach(_),this.h()},h(){g(e,"class","d-flex flex-column gap-3")},m(a,o){W(a,e,o);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null)},p(a,o){if(o&2){t=Be(Object.entries(a[1]));let c;for(c=0;c<t.length;c+=1){const i=Nt(a,t,c);n[c]?n[c].p(i,o):(n[c]=xt(i),n[c].c(),n[c].m(e,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=t.length}},d(a){a&&_(e),ut(n,a)}}}function At(s){let e,t,n="Submitted",a,o,c,i=Dt(new Date(s[14].created_at),{addSuffix:!0})+"",u,m,d,l=et(new Date(s[14].created_at),"MMMM d, yyyy 'at' h:mm a")+"",p;return{c(){e=h("small"),t=h("span"),t.textContent=n,a=T(),o=h("span"),c=h("span"),u=q(i),m=T(),d=h("span"),p=q(l),this.h()},l(w){e=f(w,"SMALL",{class:!0});var v=b(e);t=f(v,"SPAN",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-muxy17"&&(t.textContent=n),a=E(v),o=f(v,"SPAN",{class:!0});var D=b(o);c=f(D,"SPAN",{class:!0});var S=b(c);u=U(S,i),S.forEach(_),m=E(D),d=f(D,"SPAN",{class:!0});var k=b(d);p=U(k,l),k.forEach(_),D.forEach(_),v.forEach(_),this.h()},h(){g(t,"class","fw-lighter"),g(c,"class","fw-bolder d-flex justify-content-end"),g(d,"class","fw-lighter fs-x-small"),g(o,"class","d-flex flex-column"),g(e,"class","d-flex justify-content-between")},m(w,v){W(w,e,v),r(e,t),r(e,a),r(e,o),r(o,c),r(c,u),r(o,m),r(o,d),r(d,p)},p(w,v){v&2&&i!==(i=Dt(new Date(w[14].created_at),{addSuffix:!0})+"")&&fe(u,i),v&2&&l!==(l=et(new Date(w[14].created_at),"MMMM d, yyyy 'at' h:mm a")+"")&&fe(p,l)},d(w){w&&_(e)}}}function Pt(s){let e,t,n,a=s[14]?.entry_type+"",o,c,i,u,m,d="Names Prepared Count",l,p,w=s[14]?.prepared_names_count+"",v,D,S,k,y="Baptism Count",j,$,N=s[14]?.baptism_ordinances_count+"",M,H,Q,te,ve="Confirmation Count",$e,ae,Z=s[14]?.confirmation_ordinances_count+"",ne,be,G,we,De="Initiatory Count",ie,ye,ce=s[14]?.initiatory_ordinances_count+"",se,Ee,R,X,Te="Endowment Count",ke,Y,re=s[14]?.endowment_ordinances_count+"",Ce,Ie,J,A,F="Sealing Count",P,O,ue=s[14]?.sealing_ordinances_count+"",le,Le,V=s[14]?.created_at&&At(s);return{c(){e=h("li"),t=h("div"),n=h("div"),o=q(a),c=T(),i=h("div"),u=h("small"),m=h("span"),m.textContent=d,l=T(),p=h("span"),v=q(w),D=T(),S=h("small"),k=h("span"),k.textContent=y,j=T(),$=h("span"),M=q(N),H=T(),Q=h("small"),te=h("span"),te.textContent=ve,$e=T(),ae=h("span"),ne=q(Z),be=T(),G=h("small"),we=h("span"),we.textContent=De,ie=T(),ye=h("span"),se=q(ce),Ee=T(),R=h("small"),X=h("span"),X.textContent=Te,ke=T(),Y=h("span"),Ce=q(re),Ie=T(),J=h("small"),A=h("span"),A.textContent=F,P=T(),O=h("span"),le=q(ue),Le=T(),V&&V.c(),this.h()},l(x){e=f(x,"LI",{class:!0});var L=b(e);t=f(L,"DIV",{class:!0});var Ae=b(t);n=f(Ae,"DIV",{class:!0});var Se=b(n);o=U(Se,a),Se.forEach(_),c=E(Ae),i=f(Ae,"DIV",{class:!0});var ee=b(i);u=f(ee,"SMALL",{class:!0});var Ne=b(u);m=f(Ne,"SPAN",{class:!0,"data-svelte-h":!0}),B(m)!=="svelte-1ks3r10"&&(m.textContent=d),l=E(Ne),p=f(Ne,"SPAN",{class:!0});var He=b(p);v=U(He,w),He.forEach(_),Ne.forEach(_),D=E(ee),S=f(ee,"SMALL",{class:!0});var je=b(S);k=f(je,"SPAN",{class:!0,"data-svelte-h":!0}),B(k)!=="svelte-1mbgin5"&&(k.textContent=y),j=E(je),$=f(je,"SPAN",{class:!0});var Re=b($);M=U(Re,N),Re.forEach(_),je.forEach(_),H=E(ee),Q=f(ee,"SMALL",{class:!0});var Ve=b(Q);te=f(Ve,"SPAN",{class:!0,"data-svelte-h":!0}),B(te)!=="svelte-7kzc3g"&&(te.textContent=ve),$e=E(Ve),ae=f(Ve,"SPAN",{class:!0});var at=b(ae);ne=U(at,Z),at.forEach(_),Ve.forEach(_),be=E(ee),G=f(ee,"SMALL",{class:!0});var We=b(G);we=f(We,"SPAN",{class:!0,"data-svelte-h":!0}),B(we)!=="svelte-haf5jr"&&(we.textContent=De),ie=E(We),ye=f(We,"SPAN",{class:!0});var rt=b(ye);se=U(rt,ce),rt.forEach(_),We.forEach(_),Ee=E(ee),R=f(ee,"SMALL",{class:!0});var Ue=b(R);X=f(Ue,"SPAN",{class:!0,"data-svelte-h":!0}),B(X)!=="svelte-1bn7wya"&&(X.textContent=Te),ke=E(Ue),Y=f(Ue,"SPAN",{class:!0});var C=b(Y);Ce=U(C,re),C.forEach(_),Ue.forEach(_),Ie=E(ee),J=f(ee,"SMALL",{class:!0});var I=b(J);A=f(I,"SPAN",{class:!0,"data-svelte-h":!0}),B(A)!=="svelte-1704y1y"&&(A.textContent=F),P=E(I),O=f(I,"SPAN",{class:!0});var oe=b(O);le=U(oe,ue),oe.forEach(_),I.forEach(_),Le=E(ee),V&&V.l(ee),ee.forEach(_),Ae.forEach(_),L.forEach(_),this.h()},h(){g(n,"class","fw-bold"),g(m,"class","fw-lighter"),g(p,"class","fw-bolder"),g(u,"class","d-flex justify-content-between"),g(k,"class","fw-lighter"),g($,"class","fw-bolder"),g(S,"class","d-flex justify-content-between"),g(te,"class","fw-lighter"),g(ae,"class","fw-bolder"),g(Q,"class","d-flex justify-content-between"),g(we,"class","fw-lighter"),g(ye,"class","fw-bolder"),g(G,"class","d-flex justify-content-between"),g(X,"class","fw-lighter"),g(Y,"class","fw-bolder"),g(R,"class","d-flex justify-content-between"),g(A,"class","fw-lighter"),g(O,"class","fw-bolder"),g(J,"class","d-flex justify-content-between"),g(i,"class","d-flex flex-column gap-2"),g(t,"class","d-flex flex-column gap-2"),g(e,"class","list-group-item")},m(x,L){W(x,e,L),r(e,t),r(t,n),r(n,o),r(t,c),r(t,i),r(i,u),r(u,m),r(u,l),r(u,p),r(p,v),r(i,D),r(i,S),r(S,k),r(S,j),r(S,$),r($,M),r(i,H),r(i,Q),r(Q,te),r(Q,$e),r(Q,ae),r(ae,ne),r(i,be),r(i,G),r(G,we),r(G,ie),r(G,ye),r(ye,se),r(i,Ee),r(i,R),r(R,X),r(R,ke),r(R,Y),r(Y,Ce),r(i,Ie),r(i,J),r(J,A),r(J,P),r(J,O),r(O,le),r(i,Le),V&&V.m(i,null)},p(x,L){L&2&&a!==(a=x[14]?.entry_type+"")&&fe(o,a),L&2&&w!==(w=x[14]?.prepared_names_count+"")&&fe(v,w),L&2&&N!==(N=x[14]?.baptism_ordinances_count+"")&&fe(M,N),L&2&&Z!==(Z=x[14]?.confirmation_ordinances_count+"")&&fe(ne,Z),L&2&&ce!==(ce=x[14]?.initiatory_ordinances_count+"")&&fe(se,ce),L&2&&re!==(re=x[14]?.endowment_ordinances_count+"")&&fe(Ce,re),L&2&&ue!==(ue=x[14]?.sealing_ordinances_count+"")&&fe(le,ue),x[14]?.created_at?V?V.p(x,L):(V=At(x),V.c(),V.m(i,null)):V&&(V.d(1),V=null)},d(x){x&&_(e),V&&V.d()}}}function xt(s){let e,t=et(_t(s[10],"yyyy-MM-dd",new Date),"MMM dd, EEEE")+"",n,a,o,c,i=Be(s[11]),u=[];for(let m=0;m<i.length;m+=1)u[m]=Pt(jt(s,i,m));return{c(){e=h("div"),n=q(t),a=T(),o=h("ul");for(let m=0;m<u.length;m+=1)u[m].c();c=T(),this.h()},l(m){e=f(m,"DIV",{});var d=b(e);n=U(d,t),d.forEach(_),a=E(m),o=f(m,"UL",{class:!0});var l=b(o);for(let p=0;p<u.length;p+=1)u[p].l(l);c=E(l),l.forEach(_),this.h()},h(){g(o,"class","list-group")},m(m,d){W(m,e,d),r(e,n),W(m,a,d),W(m,o,d);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(o,null);r(o,c)},p(m,d){if(d&2&&t!==(t=et(_t(m[10],"yyyy-MM-dd",new Date),"MMM dd, EEEE")+"")&&fe(n,t),d&2){i=Be(m[11]);let l;for(l=0;l<i.length;l+=1){const p=jt(m,i,l);u[l]?u[l].p(p,d):(u[l]=Pt(p),u[l].c(),u[l].m(o,c))}for(;l<u.length;l+=1)u[l].d(1);u.length=i.length}},d(m){m&&(_(e),_(a),_(o)),ut(u,m)}}}function Ln(s){let e;function t(o,c){return o[0]?.length?In:$n}let n=t(s),a=n(s);return{c(){a.c(),e=Oe()},l(o){a.l(o),e=Oe()},m(o,c){a.m(o,c),W(o,e,c)},p(o,[c]){n===(n=t(o))&&a?a.p(o,c):(a.d(1),a=n(o),a&&(a.c(),a.m(e.parentNode,e)))},i:Me,o:Me,d(o){o&&_(e),a.d(o)}}}function Nn(s){return s?s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):""}function jn(s,e,t){let n,a;const{stores:{data:o,groupedByDate:c},actions:{reload:i}}=gt();ze(s,c,w=>t(1,a=w));let{query:u=""}=e,m=[],d=[];const l=o.subscribe(w=>{t(0,m=w),t(4,d=[...w])}),p=w=>{let v=[...m];return w&&(v=v.filter(D=>D?.entry_type?D?.entry_type?.trim().toLowerCase().match(n.trim().toLowerCase()):!1)),v};return Wt(i),Yt(l),s.$$set=w=>{"query"in w&&t(3,u=w.query)},s.$$.update=()=>{s.$$.dirty&8&&(n=Nn(u?.trim().toLowerCase())),s.$$.dirty&24&&(u?t(0,m=p(u)):t(0,m=[...d]))},[m,a,c,u,d]}class An extends Xe{constructor(e){super(),Je(this,e,jn,Ln,Ge,{query:3})}}function Ot(s){let e,t;return e=new Sn({props:{drawerId:s[7]}}),{c(){pe(e.$$.fragment)},l(n){_e(e.$$.fragment,n)},m(n,a){me(e,n,a),t=!0},p:Me,i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){K(e.$$.fragment,n),t=!1},d(n){he(e,n)}}}function Bt(s){let e,t;return e=new An({}),{c(){pe(e.$$.fragment)},l(n){_e(e.$$.fragment,n)},m(n,a){me(e,n,a),t=!0},i(n){t||(z(e.$$.fragment,n),t=!0)},o(n){K(e.$$.fragment,n),t=!1},d(n){he(e,n)}}}function Pn(s){let e,t,n,a=s[0]==="form"&&Ot(s),o=s[0]==="results"&&Bt();return{c(){a&&a.c(),e=T(),o&&o.c(),t=Oe()},l(c){a&&a.l(c),e=E(c),o&&o.l(c),t=Oe()},m(c,i){a&&a.m(c,i),W(c,e,i),o&&o.m(c,i),W(c,t,i),n=!0},p(c,i){c[0]==="form"?a?(a.p(c,i),i&1&&z(a,1)):(a=Ot(c),a.c(),z(a,1),a.m(e.parentNode,e)):a&&(yt(),K(a,1,1,()=>{a=null}),Et()),c[0]==="results"?o?i&1&&z(o,1):(o=Bt(),o.c(),z(o,1),o.m(t.parentNode,t)):o&&(yt(),K(o,1,1,()=>{o=null}),Et())},i(c){n||(z(a),z(o),n=!0)},o(c){K(a),K(o),n=!1},d(c){c&&(_(e),_(t)),a&&a.d(c),o&&o.d(c)}}}function Ht(s){let e,t;return{c(){e=h("span"),t=q(s[5]),this.h()},l(n){e=f(n,"SPAN",{class:!0});var a=b(e);t=U(a,s[5]),a.forEach(_),this.h()},h(){g(e,"class","d-flex justify-content-end")},m(n,a){W(n,e,a),r(e,t)},p(n,a){a&32&&fe(t,n[5])},d(n){n&&_(e)}}}function Rt(s){let e,t;return{c(){e=h("span"),t=q(s[6]),this.h()},l(n){e=f(n,"SPAN",{class:!0});var a=b(e);t=U(a,s[6]),a.forEach(_),this.h()},h(){g(e,"class","d-flex justify-content-end")},m(n,a){W(n,e,a),r(e,t)},p(n,a){a&64&&fe(t,n[6])},d(n){n&&_(e)}}}function xn(s){let e,t,n,a,o="Ward Mission Goal 2025 (Apr to Dec)",c,i,u,m,d,l,p='<tr><th scope="col"></th> <th scope="col"><span class="d-flex justify-content-end">Goal</span></th> <th scope="col"><span class="d-flex justify-content-end">Actual</span></th></tr>',w,v,D,S='<td><span class="fw-lighter">Baptisms</span></td> <td><span class="d-flex justify-content-end">7</span></td> <td><span class="d-flex justify-content-end">0</span></td>',k,y,j='<td><span class="fw-lighter">Family Sealing</span></td> <td><span class="d-flex justify-content-end">3</span></td> <td><span class="d-flex justify-content-end">0</span></td>',$,N,M,H='<span class="fw-lighter">Temple Ordinances</span>',Q,te,ve='<span class="d-flex justify-content-end">20,000</span>',$e,ae,Z,ne,be,G='<span class="fw-lighter">Names Prepared for Temple Ordinances</span>',we,De,ie='<span class="d-flex justify-content-end">--</span>',ye,ce,se,Ee,R,X,Te,ke,Y,re,Ce,Ie,J;e=new nn({props:{placement:s[2],title:s[3],id:s[7],$$slots:{default:[Pn]},$$scope:{ctx:s}}});let A=!s[4]&&Ht(s),F=!s[4]&&Rt(s);return{c(){pe(e.$$.fragment),t=T(),n=h("div"),a=h("div"),a.textContent=o,c=T(),i=h("div"),u=h("div"),m=h("div"),d=h("table"),l=h("thead"),l.innerHTML=p,w=T(),v=h("tbody"),D=h("tr"),D.innerHTML=S,k=T(),y=h("tr"),y.innerHTML=j,$=T(),N=h("tr"),M=h("td"),M.innerHTML=H,Q=T(),te=h("td"),te.innerHTML=ve,$e=T(),ae=h("td"),A&&A.c(),Z=T(),ne=h("tr"),be=h("td"),be.innerHTML=G,we=T(),De=h("td"),De.innerHTML=ie,ye=T(),ce=h("td"),F&&F.c(),se=T(),Ee=h("div"),R=h("button"),X=q("Submit your temple activity"),Te=T(),ke=h("div"),Y=h("button"),re=q("See all submissions"),this.h()},l(P){_e(e.$$.fragment,P),t=E(P),n=f(P,"DIV",{class:!0});var O=b(n);a=f(O,"DIV",{class:!0,"data-svelte-h":!0}),B(a)!=="svelte-skrweg"&&(a.textContent=o),c=E(O),i=f(O,"DIV",{class:!0});var ue=b(i);u=f(ue,"DIV",{class:!0});var le=b(u);m=f(le,"DIV",{class:!0});var Le=b(m);d=f(Le,"TABLE",{class:!0});var V=b(d);l=f(V,"THEAD",{"data-svelte-h":!0}),B(l)!=="svelte-mx78dg"&&(l.innerHTML=p),w=E(V),v=f(V,"TBODY",{});var x=b(v);D=f(x,"TR",{"data-svelte-h":!0}),B(D)!=="svelte-1539cya"&&(D.innerHTML=S),k=E(x),y=f(x,"TR",{"data-svelte-h":!0}),B(y)!=="svelte-xg1dto"&&(y.innerHTML=j),$=E(x),N=f(x,"TR",{});var L=b(N);M=f(L,"TD",{"data-svelte-h":!0}),B(M)!=="svelte-19hzl8h"&&(M.innerHTML=H),Q=E(L),te=f(L,"TD",{"data-svelte-h":!0}),B(te)!=="svelte-1m6zzsn"&&(te.innerHTML=ve),$e=E(L),ae=f(L,"TD",{});var Ae=b(ae);A&&A.l(Ae),Ae.forEach(_),L.forEach(_),Z=E(x),ne=f(x,"TR",{});var Se=b(ne);be=f(Se,"TD",{"data-svelte-h":!0}),B(be)!=="svelte-ul3utp"&&(be.innerHTML=G),we=E(Se),De=f(Se,"TD",{"data-svelte-h":!0}),B(De)!=="svelte-1pgevhv"&&(De.innerHTML=ie),ye=E(Se),ce=f(Se,"TD",{});var ee=b(ce);F&&F.l(ee),ee.forEach(_),Se.forEach(_),x.forEach(_),V.forEach(_),Le.forEach(_),se=E(le),Ee=f(le,"DIV",{class:!0});var Ne=b(Ee);R=f(Ne,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0});var He=b(R);X=U(He,"Submit your temple activity"),He.forEach(_),Ne.forEach(_),Te=E(le),ke=f(le,"DIV",{class:!0});var je=b(ke);Y=f(je,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0});var Re=b(Y);re=U(Re,"See all submissions"),Re.forEach(_),je.forEach(_),le.forEach(_),ue.forEach(_),O.forEach(_),this.h()},h(){g(a,"class","card-header"),g(d,"class","table"),g(m,"class","table-responsive"),g(R,"class","btn btn-sm btn-primary w-100"),g(R,"type","button"),g(R,"data-bs-toggle","offcanvas"),g(R,"data-bs-target","#"+s[7]),g(R,"aria-controls",s[7]),g(Ee,"class","d-block"),g(Y,"class","btn btn-sm btn-link w-100"),g(Y,"type","button"),g(Y,"data-bs-toggle","offcanvas"),g(Y,"data-bs-target","#"+s[7]),g(Y,"aria-controls",s[7]),g(ke,"class","d-block"),g(u,"class","d-flex flex-column gap-2"),g(i,"class","card-body"),g(n,"class","card")},m(P,O){me(e,P,O),W(P,t,O),W(P,n,O),r(n,a),r(n,c),r(n,i),r(i,u),r(u,m),r(m,d),r(d,l),r(d,w),r(d,v),r(v,D),r(v,k),r(v,y),r(v,$),r(v,N),r(N,M),r(N,Q),r(N,te),r(N,$e),r(N,ae),A&&A.m(ae,null),r(v,Z),r(v,ne),r(ne,be),r(ne,we),r(ne,De),r(ne,ye),r(ne,ce),F&&F.m(ce,null),r(u,se),r(u,Ee),r(Ee,R),r(R,X),s[13](R),r(u,Te),r(u,ke),r(ke,Y),r(Y,re),Ce=!0,Ie||(J=[xe(R,"click",s[14]),xe(Y,"click",s[15])],Ie=!0)},p(P,[O]){const ue={};O&4&&(ue.placement=P[2]),O&8&&(ue.title=P[3]),O&131073&&(ue.$$scope={dirty:O,ctx:P}),e.$set(ue),P[4]?A&&(A.d(1),A=null):A?A.p(P,O):(A=Ht(P),A.c(),A.m(ae,null)),P[4]?F&&(F.d(1),F=null):F?F.p(P,O):(F=Rt(P),F.c(),F.m(ce,null))},i(P){Ce||(z(e.$$.fragment,P),Ce=!0)},o(P){K(e.$$.fragment,P),Ce=!1},d(P){P&&(_(t),_(n)),he(e,P),A&&A.d(),F&&F.d(),s[13](null),Ie=!1,pt(J)}}}function On(s,e,t){let n,a,o,c,i="form",u=sn(),m="end",d,l=!1;const{stores:{loading:p,totalOrdinancesPerformed:w,totalNamesPrepared:v},actions:{reload:D}}=gt();ze(s,p,$=>t(4,a=$)),ze(s,w,$=>t(5,o=$)),ze(s,v,$=>t(6,c=$));let S=null;Wt(async()=>{await D();const $=new URLSearchParams(window.location.search);t(12,S=$.get("log-temple-activity"))});function k($){Fe[$?"unshift":"push"](()=>{d=$,t(1,d)})}const y=()=>{t(0,i="form")},j=()=>{t(0,i="results")};return s.$$.update=()=>{s.$$.dirty&6146&&S&&S==="yes"&&d&&!l&&(d.click(),t(11,l=!0)),s.$$.dirty&1&&t(2,m=i==="form"?"end":"start"),s.$$.dirty&1&&t(3,n=i==="form"?"Temple Activity":"Temple Activity Results")},[i,d,m,n,a,o,c,u,p,w,v,l,S,k,y,j]}class Bn extends Xe{constructor(e){super(),Je(this,e,On,xn,Ge,{})}}function Vt(s){let e,t='<ul class="list-group list-group-flush"><li class="list-group-item d-flex align-items-center justify-content-between"><div>Sacrament Program</div> <a href="/sacrament-program" class="btn btn-sm btn-primary"><i class="bi bi-link"></i></a></li></ul>';return{c(){e=h("div"),e.innerHTML=t,this.h()},l(n){e=f(n,"DIV",{class:!0,"data-svelte-h":!0}),B(e)!=="svelte-lx06tj"&&(e.innerHTML=t),this.h()},h(){g(e,"class","card")},m(n,a){W(n,e,a)},d(n){n&&_(e)}}}function Hn(s){let e,t=(s[4]||s[0]||s[1])&&Vt();return{c(){t&&t.c(),e=Oe()},l(n){t&&t.l(n),e=Oe()},m(n,a){t&&t.m(n,a),W(n,e,a)},p(n,[a]){n[4]||n[0]||n[1]?t||(t=Vt(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Me,o:Me,d(n){n&&_(e),t&&t.d(n)}}}function Rn(s,e,t){let n,a;const{stores:{currentUserIsAdmin:o,currentUserIsRoot:c}}=en();ze(s,o,u=>t(0,n=u)),ze(s,c,u=>t(1,a=u));const i=tn(new Date);return[n,a,o,c,i]}class Vn extends Xe{constructor(e){super(),Je(this,e,Rn,Hn,Ge,{})}}function Wn(s){let e,t,n,a,o,c,i,u,m,d,l,p,w,v,D,S;return t=new Vn({}),a=new Gt({}),c=new Bn({}),u=new an({props:{showNextNextWeek:!1}}),l=new Xt({}),w=new Jt({}),D=new wn({}),{c(){e=h("div"),pe(t.$$.fragment),n=T(),pe(a.$$.fragment),o=T(),pe(c.$$.fragment),i=T(),pe(u.$$.fragment),m=T(),d=h("div"),pe(l.$$.fragment),p=T(),pe(w.$$.fragment),v=T(),pe(D.$$.fragment),this.h()},l(k){e=f(k,"DIV",{class:!0});var y=b(e);_e(t.$$.fragment,y),n=E(y),_e(a.$$.fragment,y),o=E(y),_e(c.$$.fragment,y),i=E(y),_e(u.$$.fragment,y),m=E(y),d=f(y,"DIV",{class:!0});var j=b(d);_e(l.$$.fragment,j),p=E(j),_e(w.$$.fragment,j),j.forEach(_),v=E(y),_e(D.$$.fragment,y),y.forEach(_),this.h()},h(){g(d,"class","d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column justify-content-between gap-4"),g(e,"class","d-flex flex-column gap-4")},m(k,y){W(k,e,y),me(t,e,null),r(e,n),me(a,e,null),r(e,o),me(c,e,null),r(e,i),me(u,e,null),r(e,m),r(e,d),me(l,d,null),r(d,p),me(w,d,null),r(e,v),me(D,e,null),S=!0},p:Me,i(k){S||(z(t.$$.fragment,k),z(a.$$.fragment,k),z(c.$$.fragment,k),z(u.$$.fragment,k),z(l.$$.fragment,k),z(w.$$.fragment,k),z(D.$$.fragment,k),S=!0)},o(k){K(t.$$.fragment,k),K(a.$$.fragment,k),K(c.$$.fragment,k),K(u.$$.fragment,k),K(l.$$.fragment,k),K(w.$$.fragment,k),K(D.$$.fragment,k),S=!1},d(k){k&&_(e),he(t),he(a),he(c),he(u),he(l),he(w),he(D)}}}class Zn extends Xe{constructor(e){super(),Je(this,e,null,Wn,Ge,{})}}export{Zn as H};
