import{s as be,c as ot,u as ut,g as ct,a as ft,r as Bt,o as dt,t as Mt,h as Ue,b as yt,n as ae}from"./scheduler.C9-2ehqC.js";import{S as Ee,i as ye,e as _,b as se,s as S,j as m,k as w,m as ie,d as g,f as T,n as f,o as H,q as d,r as Xe,t as R,a as M,c as Ie,g as ke,p as we,u as Ce,l as O,x as K,C as Y,B as z,w as Je,v as Ke,D as Vt,y as It}from"./index.DV0H2daQ.js";import{s as Lt,a as Ut,F as Nt,A as qt}from"./announcements.data.BZqCrcW1.js";import{e as rt}from"./Header.DHJbIo2C.js";import{S as Pt}from"./Spinner.DTkmz9vP.js";import{w as Qe}from"./index.-KbeAlZo.js";var B=[];for(var it=0;it<256;++it)B.push((it+256).toString(16).slice(1));function Ft(t,e=0){return(B[t[e+0]]+B[t[e+1]]+B[t[e+2]]+B[t[e+3]]+"-"+B[t[e+4]]+B[t[e+5]]+"-"+B[t[e+6]]+B[t[e+7]]+"-"+B[t[e+8]]+B[t[e+9]]+"-"+B[t[e+10]]+B[t[e+11]]+B[t[e+12]]+B[t[e+13]]+B[t[e+14]]+B[t[e+15]]).toLowerCase()}var We,jt=new Uint8Array(16);function Ot(){if(!We&&(We=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!We))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return We(jt)}var Ht=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const kt={randomUUID:Ht};function zt(t,e,l){if(kt.randomUUID&&!e&&!t)return kt.randomUUID();t=t||{};var n=t.random||(t.rng||Ot)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,Ft(n)}function Gt(t){let e,l,n,a,c,i,u,s,r,o,h;const v=t[8].default,C=ot(v,t,t[7],null);return{c(){e=_("div"),l=_("div"),n=_("h4"),a=se(t[1]),c=S(),i=_("button"),s=S(),r=_("div"),C&&C.c(),this.h()},l(E){e=m(E,"DIV",{class:!0,tabindex:!0,id:!0,"aria-labelledby":!0});var p=w(e);l=m(p,"DIV",{class:!0});var D=w(l);n=m(D,"H4",{class:!0,id:!0});var V=w(n);a=ie(V,t[1]),V.forEach(g),c=T(D),i=m(D,"BUTTON",{type:!0,class:!0,"data-bs-dismiss":!0,"data-bs-target":!0,"aria-label":!0}),w(i).forEach(g),D.forEach(g),s=T(p),r=m(p,"DIV",{class:!0});var N=w(r);C&&C.l(N),N.forEach(g),p.forEach(g),this.h()},h(){f(n,"class","offcanvas-title"),f(n,"id",t[4]),f(i,"type","button"),f(i,"class","btn-close"),f(i,"data-bs-dismiss","offcanvas"),f(i,"data-bs-target",u="#"+t[0]),f(i,"aria-label","Close"),f(l,"class","offcanvas-header"),f(r,"class","offcanvas-body"),f(e,"class",o=t[3]+" "+t[2]),f(e,"tabindex","-1"),f(e,"id",t[0]),f(e,"aria-labelledby",t[4])},m(E,p){H(E,e,p),d(e,l),d(l,n),d(n,a),d(l,c),d(l,i),d(e,s),d(e,r),C&&C.m(r,null),h=!0},p(E,[p]){(!h||p&2)&&Xe(a,E[1]),(!h||p&1&&u!==(u="#"+E[0]))&&f(i,"data-bs-target",u),C&&C.p&&(!h||p&128)&&ut(C,v,E,E[7],h?ft(v,E[7],p,null):ct(E[7]),null),(!h||p&12&&o!==(o=E[3]+" "+E[2]))&&f(e,"class",o),(!h||p&1)&&f(e,"id",E[0])},i(E){h||(R(C,E),h=!0)},o(E){M(C,E),h=!1},d(E){E&&g(e),C&&C.d(E)}}}function Wt(t,e,l){let n,a,{$$slots:c={},$$scope:i}=e,{id:u}=e,{title:s}=e,{breakpoint:r=""}=e,{placement:o="end"}=e;const h=zt();return t.$$set=v=>{"id"in v&&l(0,u=v.id),"title"in v&&l(1,s=v.title),"breakpoint"in v&&l(5,r=v.breakpoint),"placement"in v&&l(6,o=v.placement),"$$scope"in v&&l(7,i=v.$$scope)},t.$$.update=()=>{t.$$.dirty&32&&l(3,n=`offcanvas${r===""?"":"-"+r}`),t.$$.dirty&64&&l(2,a=`offcanvas-${o}`)},[u,s,a,n,h,r,o,i,c]}class Qt extends Ee{constructor(e){super(),ye(this,e,Wt,Gt,be,{id:0,title:1,breakpoint:5,placement:6})}}const Xt=t=>({}),wt=t=>({});function Jt(t){let e;const l=t[2].default,n=ot(l,t,t[3],null);return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,c){n&&n.m(a,c),e=!0},p(a,c){n&&n.p&&(!e||c&8)&&ut(n,l,a,a[3],e?ft(l,a[3],c,null):ct(a[3]),null)},i(a){e||(R(n,a),e=!0)},o(a){M(n,a),e=!1},d(a){n&&n.d(a)}}}function Kt(t){let e,l,n,a,c;const i=t[2].label,u=ot(i,t,t[3],wt);return a=new Qt({props:{title:t[1],id:t[0],$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){e=_("button"),u&&u.c(),n=S(),Ie(a.$$.fragment),this.h()},l(s){e=m(s,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0});var r=w(e);u&&u.l(r),r.forEach(g),n=T(s),ke(a.$$.fragment,s),this.h()},h(){f(e,"class","btn btn-secondary"),f(e,"type","button"),f(e,"data-bs-toggle","offcanvas"),f(e,"data-bs-target",l="#"+t[0]),f(e,"aria-controls",t[0])},m(s,r){H(s,e,r),u&&u.m(e,null),H(s,n,r),we(a,s,r),c=!0},p(s,[r]){u&&u.p&&(!c||r&8)&&ut(u,i,s,s[3],c?ft(i,s[3],r,Xt):ct(s[3]),wt),(!c||r&1&&l!==(l="#"+s[0]))&&f(e,"data-bs-target",l),(!c||r&1)&&f(e,"aria-controls",s[0]);const o={};r&2&&(o.title=s[1]),r&1&&(o.id=s[0]),r&8&&(o.$$scope={dirty:r,ctx:s}),a.$set(o)},i(s){c||(R(u,s),R(a.$$.fragment,s),c=!0)},o(s){M(u,s),M(a.$$.fragment,s),c=!1},d(s){s&&(g(e),g(n)),u&&u.d(s),Ce(a,s)}}}function Yt(t,e,l){let{$$slots:n={},$$scope:a}=e,{id:c=""}=e,{drawerTitle:i=""}=e;return t.$$set=u=>{"id"in u&&l(0,c=u.id),"drawerTitle"in u&&l(1,i=u.drawerTitle),"$$scope"in u&&l(3,a=u.$$scope)},[c,i,n,a]}class Zt extends Ee{constructor(e){super(),ye(this,e,Yt,Kt,be,{id:0,drawerTitle:1})}}const $t=Qe([]);async function Rt(){const{data:t,error:e}=await Lt.from("calendar_events").select("*").order("start_time",{ascending:!0});if(e)throw e;return $t.set(t),t}async function xt(t,e){const{data:l,error:n}=await Lt.from("calendar_events").update(e).eq("id",t);if(n)throw n;return await Rt(),l}function el(t,e){typeof window<"u"&&window.gtag?window.gtag("event",t,e||{}):console.warn("gtag is not available")}function Ct(t,e,l,n){el(t,{event_category:e,event_label:l,value:n})}function Dt(t){let e,l='<span class="visually-hidden">Item not saved</span>';return{c(){e=_("span"),e.innerHTML=l,this.h()},l(n){e=m(n,"SPAN",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1g0a6ie"&&(e.innerHTML=l),this.h()},h(){f(e,"class","position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle")},m(n,a){H(n,e,a)},d(n){n&&g(e)}}}function tl(t){let e,l,n="<strong>Calendar Event</strong>",a,c,i,u="Title",s,r,o,h,v,C="Event title. i.e. Ward Conference, Ward BBQ Night",E,p,D,V="Description",N,k,Z,F,$,Ne="Describe the event to the best of your knowledge",De,G,x,Re="Start time",Se,L,de,Te,W,ee,Be="End time",Ae,U,_e,I,j,te,_t="Location",Ye,q,Me,Ze,re,mt="Location can be physical or virtual",$e,Ve,le,Q,qe,xe,ne,et,Pe,tt,X,oe,Le=t[12].message+"",Fe,je,lt,ue,ce,nt,J,me,ht="Save",at,A,st,vt;ce=new Pt({props:{size:"xs"}});let P=t[13]&&Dt();return{c(){e=_("div"),l=_("div"),l.innerHTML=n,a=S(),c=_("div"),i=_("div"),i.textContent=u,s=S(),r=_("input"),h=S(),v=_("small"),v.textContent=C,E=S(),p=_("div"),D=_("div"),D.textContent=V,N=S(),k=_("textarea"),F=S(),$=_("small"),$.textContent=Ne,De=S(),G=_("div"),x=_("div"),x.textContent=Re,Se=S(),L=_("input"),Te=S(),W=_("div"),ee=_("div"),ee.textContent=Be,Ae=S(),U=_("input"),I=S(),j=_("div"),te=_("div"),te.textContent=_t,Ye=S(),q=_("input"),Ze=S(),re=_("small"),re.textContent=mt,$e=S(),Ve=_("div"),le=_("div"),Q=_("input"),xe=S(),ne=_("label"),et=se("All Day Event"),tt=S(),X=_("div"),oe=_("small"),Fe=se(Le),lt=S(),ue=_("span"),Ie(ce.$$.fragment),nt=S(),J=_("button"),me=_("span"),me.textContent=ht,at=S(),P&&P.c(),this.h()},l(y){e=m(y,"DIV",{class:!0});var b=w(e);l=m(b,"DIV",{"data-svelte-h":!0}),O(l)!=="svelte-sc2qz1"&&(l.innerHTML=n),a=T(b),c=m(b,"DIV",{class:!0});var he=w(c);i=m(he,"DIV",{"data-svelte-h":!0}),O(i)!=="svelte-1vkxc90"&&(i.textContent=u),s=T(he),r=m(he,"INPUT",{name:!0,type:!0,class:!0,placeholder:!0}),h=T(he),v=m(he,"SMALL",{class:!0,"data-svelte-h":!0}),O(v)!=="svelte-gvb7m1"&&(v.textContent=C),he.forEach(g),E=T(b),p=m(b,"DIV",{class:!0});var ve=w(p);D=m(ve,"DIV",{"data-svelte-h":!0}),O(D)!=="svelte-1x8itd0"&&(D.textContent=V),N=T(ve),k=m(ve,"TEXTAREA",{name:!0,class:!0,placeholder:!0}),w(k).forEach(g),F=T(ve),$=m(ve,"SMALL",{class:!0,"data-svelte-h":!0}),O($)!=="svelte-bky2ve"&&($.textContent=Ne),ve.forEach(g),De=T(b),G=m(b,"DIV",{class:!0});var Oe=w(G);x=m(Oe,"DIV",{"data-svelte-h":!0}),O(x)!=="svelte-1rswwqf"&&(x.textContent=Re),Se=T(Oe),L=m(Oe,"INPUT",{name:!0,type:!0,class:!0,placeholder:!0}),Oe.forEach(g),Te=T(b),W=m(b,"DIV",{class:!0});var He=w(W);ee=m(He,"DIV",{"data-svelte-h":!0}),O(ee)!=="svelte-cgab46"&&(ee.textContent=Be),Ae=T(He),U=m(He,"INPUT",{name:!0,type:!0,class:!0,placeholder:!0}),He.forEach(g),I=T(b),j=m(b,"DIV",{class:!0});var pe=w(j);te=m(pe,"DIV",{"data-svelte-h":!0}),O(te)!=="svelte-szqbut"&&(te.textContent=_t),Ye=T(pe),q=m(pe,"INPUT",{name:!0,type:!0,class:!0,placeholder:!0}),Ze=T(pe),re=m(pe,"SMALL",{class:!0,"data-svelte-h":!0}),O(re)!=="svelte-1drtb8l"&&(re.textContent=mt),pe.forEach(g),$e=T(b),Ve=m(b,"DIV",{});var pt=w(Ve);le=m(pt,"DIV",{class:!0});var ze=w(le);Q=m(ze,"INPUT",{class:!0,type:!0,id:!0}),xe=T(ze),ne=m(ze,"LABEL",{class:!0,for:!0});var gt=w(ne);et=ie(gt,"All Day Event"),gt.forEach(g),ze.forEach(g),pt.forEach(g),tt=T(b),X=m(b,"DIV",{class:!0});var ge=w(X);oe=m(ge,"SMALL",{class:!0});var bt=w(oe);Fe=ie(bt,Le),bt.forEach(g),lt=T(ge),ue=m(ge,"SPAN",{});var Et=w(ue);ke(ce.$$.fragment,Et),Et.forEach(g),nt=T(ge),J=m(ge,"BUTTON",{class:!0});var Ge=w(J);me=m(Ge,"SPAN",{"data-svelte-h":!0}),O(me)!=="svelte-l126tb"&&(me.textContent=ht),at=T(Ge),P&&P.l(Ge),Ge.forEach(g),ge.forEach(g),b.forEach(g),this.h()},h(){f(r,"name",o=t[1]+"-title"),f(r,"type","text"),f(r,"class","form-control"),f(r,"placeholder","Event title"),r.disabled=t[6],r.required=!0,K(r,"is-invalid",t[5]),f(v,"class","fw-lighter fst-italic"),f(c,"class","d-flex flex-column gap-2"),f(k,"name",Z=t[1]+"-description"),f(k,"class","form-control"),f(k,"placeholder","Event description"),k.disabled=t[6],k.required=!0,K(k,"is-invalid",t[4]),f($,"class","fw-lighter fst-italic"),f(p,"class","d-flex flex-column gap-2"),f(L,"name",de=t[1]+"-start-time"),f(L,"type","datetime-local"),f(L,"class","form-control"),f(L,"placeholder","Event title"),L.disabled=t[6],L.required=!0,K(L,"is-invalid",t[3]),f(G,"class","d-flex flex-column gap-2"),f(U,"name",_e=t[1]+"-end-time"),f(U,"type","datetime-local"),f(U,"class","form-control"),f(U,"placeholder","Event title"),U.disabled=t[6],U.required=!0,K(U,"is-invalid",t[2]),f(W,"class","d-flex flex-column gap-2"),f(q,"name",Me=t[1]+"-location"),f(q,"type","text"),f(q,"class","form-control"),f(q,"placeholder","Event title"),q.disabled=t[6],f(re,"class","fw-lighter fst-italic"),f(j,"class","d-flex flex-column gap-2"),f(Q,"class","form-check-input"),f(Q,"type","checkbox"),f(Q,"id",qe=t[1]+"-all-day-check"),f(ne,"class","form-check-label"),f(ne,"for",Pe=t[1]+"-all-day-check"),f(le,"class","form-check"),f(oe,"class",je="fw-lighter fst-italic text-"+t[12].type),K(ue,"d-none",!t[6]),f(J,"class","btn btn-primary position-relative"),f(X,"class","d-flex justify-content-end align-items-center gap-2 flex-row"),f(e,"class","d-flex flex-column gap-4")},m(y,b){H(y,e,b),d(e,l),d(e,a),d(e,c),d(c,i),d(c,s),d(c,r),t[16](r),Y(r,t[0].title),d(c,h),d(c,v),d(e,E),d(e,p),d(p,D),d(p,N),d(p,k),t[19](k),Y(k,t[0].description),d(p,F),d(p,$),d(e,De),d(e,G),d(G,x),d(G,Se),d(G,L),t[22](L),Y(L,t[0].start_time),d(e,Te),d(e,W),d(W,ee),d(W,Ae),d(W,U),t[25](U),Y(U,t[0].end_time),d(e,I),d(e,j),d(j,te),d(j,Ye),d(j,q),t[28](q),Y(q,t[0].location),d(j,Ze),d(j,re),d(e,$e),d(e,Ve),d(Ve,le),d(le,Q),Q.checked=t[0].is_all_day,d(le,xe),d(le,ne),d(ne,et),d(e,tt),d(e,X),d(X,oe),d(oe,Fe),d(X,lt),d(X,ue),we(ce,ue,null),d(X,nt),d(X,J),d(J,me),d(J,at),P&&P.m(J,null),A=!0,st||(vt=[z(r,"focus",t[17]),z(r,"input",t[18]),z(k,"focus",t[20]),z(k,"input",t[21]),z(L,"focus",t[23]),z(L,"input",t[24]),z(U,"focus",t[26]),z(U,"input",t[27]),z(q,"focus",t[29]),z(q,"input",t[30]),z(Q,"change",t[31]),z(J,"click",t[14])],st=!0)},p(y,b){(!A||b[0]&2&&o!==(o=y[1]+"-title"))&&f(r,"name",o),(!A||b[0]&64)&&(r.disabled=y[6]),b[0]&1&&r.value!==y[0].title&&Y(r,y[0].title),(!A||b[0]&32)&&K(r,"is-invalid",y[5]),(!A||b[0]&2&&Z!==(Z=y[1]+"-description"))&&f(k,"name",Z),(!A||b[0]&64)&&(k.disabled=y[6]),b[0]&1&&Y(k,y[0].description),(!A||b[0]&16)&&K(k,"is-invalid",y[4]),(!A||b[0]&2&&de!==(de=y[1]+"-start-time"))&&f(L,"name",de),(!A||b[0]&64)&&(L.disabled=y[6]),b[0]&1&&Y(L,y[0].start_time),(!A||b[0]&8)&&K(L,"is-invalid",y[3]),(!A||b[0]&2&&_e!==(_e=y[1]+"-end-time"))&&f(U,"name",_e),(!A||b[0]&64)&&(U.disabled=y[6]),b[0]&1&&Y(U,y[0].end_time),(!A||b[0]&4)&&K(U,"is-invalid",y[2]),(!A||b[0]&2&&Me!==(Me=y[1]+"-location"))&&f(q,"name",Me),(!A||b[0]&64)&&(q.disabled=y[6]),b[0]&1&&q.value!==y[0].location&&Y(q,y[0].location),(!A||b[0]&2&&qe!==(qe=y[1]+"-all-day-check"))&&f(Q,"id",qe),b[0]&1&&(Q.checked=y[0].is_all_day),(!A||b[0]&2&&Pe!==(Pe=y[1]+"-all-day-check"))&&f(ne,"for",Pe),(!A||b[0]&4096)&&Le!==(Le=y[12].message+"")&&Xe(Fe,Le),(!A||b[0]&4096&&je!==(je="fw-lighter fst-italic text-"+y[12].type))&&f(oe,"class",je),(!A||b[0]&64)&&K(ue,"d-none",!y[6]),y[13]?P||(P=Dt(),P.c(),P.m(J,null)):P&&(P.d(1),P=null)},i(y){A||(R(ce.$$.fragment,y),A=!0)},o(y){M(ce.$$.fragment,y),A=!1},d(y){y&&g(e),t[16](null),t[19](null),t[22](null),t[25](null),t[28](null),Ce(ce),P&&P.d(),st=!1,Bt(vt)}}}function ll(t,e,l){let n,a,c,i,u,s,{name:r=""}=e,{event:o={title:"",description:"",start_time:"",end_time:"",location:"",is_all_day:!1}}=e,h=!1,v=o.id,C,E,p,D,V,N={message:"",type:"info"},k={title:"",description:"",start_time:"",end_time:"",location:"",is_all_day:!1};const Z=async()=>{if(!n){F("Sorry nothing has changed, therefore, there is nothing to save.",7e3);return}if(!v){F("ID is not defined",0,"danger");return}if(!s){let I=[];a&&I.push("Title is invalid"),c&&I.push("Description is invalid"),i&&I.push("Start time is invalid"),u&&I.push("End time is invalid"),F(I.join(". ")+".  Please address accordingly.",0,"danger")}if(!h){F("Saving ..."),l(6,h=!0);try{const I={title:o.title,description:o.description,start_time:o.start_time,end_time:o.end_time,location:o.location,is_all_day:o.is_all_day};await xt(v,I),Ct("set_calendar_event_success","interaction",`Set Calendar Event Successful ${o.title}`,1),setTimeout(()=>{l(6,h=!1),l(15,k={...o,id:v}),F("Saved",3e3,"success")},800)}catch(I){Ct("set_calendar_event_failed","interaction",`Set Calendar Event Failed ${o.title}`,1),setTimeout(()=>{l(6,h=!1),console.error("Save failed:",I),F("Failed to save event. Please try again.",7e3,"danger")},800)}}},F=(I,j=0,te="info")=>{l(12,N.message=I,N),l(12,N.type=te,N),j&&setTimeout(()=>{l(12,N.message="",N)},j)};dt(()=>{Mt()});function $(I){Ue[I?"unshift":"push"](()=>{C=I,l(7,C)})}const Ne=()=>C.select();function De(){o.title=this.value,l(0,o)}function G(I){Ue[I?"unshift":"push"](()=>{E=I,l(8,E)})}const x=()=>E.select();function Re(){o.description=this.value,l(0,o)}function Se(I){Ue[I?"unshift":"push"](()=>{p=I,l(9,p)})}const L=()=>p.select();function de(){o.start_time=this.value,l(0,o)}function Te(I){Ue[I?"unshift":"push"](()=>{D=I,l(10,D)})}const W=()=>D.select();function ee(){o.end_time=this.value,l(0,o)}function Be(I){Ue[I?"unshift":"push"](()=>{V=I,l(11,V)})}const Ae=()=>V.select();function U(){o.location=this.value,l(0,o)}function _e(){o.is_all_day=this.checked,l(0,o)}return t.$$set=I=>{"name"in I&&l(1,r=I.name),"event"in I&&l(0,o=I.event)},t.$$.update=()=>{t.$$.dirty[0]&32769&&l(13,n=k.title!==o.title||k.description!==o.description||k.start_time!==o.start_time||k.end_time!==o.end_time||k.location!==o.location||k.is_all_day!==o.is_all_day),t.$$.dirty[0]&1&&l(5,a=o.title===""),t.$$.dirty[0]&1&&l(4,c=o.description===""),t.$$.dirty[0]&1&&l(3,i=o.start_time===""),t.$$.dirty[0]&1&&l(2,u=o.end_time===""),t.$$.dirty[0]&60&&(s=!!(v&&a&&c&&i&&u)),t.$$.dirty[0]&1&&console.log("### event",o)},[o,r,u,i,c,a,h,C,E,p,D,V,N,n,Z,k,$,Ne,De,G,x,Re,Se,L,de,Te,W,ee,Be,Ae,U,_e]}class nl extends Ee{constructor(e){super(),ye(this,e,ll,tl,be,{name:1,event:0},null,[-1,-1])}}let fe=null;const al=()=>{const t=Qe(!1),e=Qe([]),l=Qe([]);return fe={stores:{ready:t,data:e,dbData:l},actions:{init:async()=>{t.set(!1);const a=await Rt();a!=null&&a.length&&l.set(a)}}},fe},sl=()=>(fe==null?void 0:fe.stores)&&Object.keys(fe.stores).length>0?fe:al();function St(t,e,l){const n=t.slice();return n[7]=e[l],n[9]=l,n}function il(t){let e;return{c(){e=se("Loading ...")},l(l){e=ie(l,"Loading ...")},m(l,n){H(l,e,n)},p:ae,i:ae,o:ae,d(l){l&&g(e)}}}function rl(t){let e,l,n=rt(t[2]),a=[];for(let i=0;i<n.length;i+=1)a[i]=At(St(t,n,i));const c=i=>M(a[i],1,1,()=>{a[i]=null});return{c(){e=_("ul");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=m(i,"UL",{class:!0});var u=w(e);for(let s=0;s<a.length;s+=1)a[s].l(u);u.forEach(g),this.h()},h(){f(e,"class","list-group list-group-flush")},m(i,u){H(i,e,u);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(e,null);l=!0},p(i,u){if(u&5){n=rt(i[2]);let s;for(s=0;s<n.length;s+=1){const r=St(i,n,s);a[s]?(a[s].p(r,u),R(a[s],1)):(a[s]=At(r),a[s].c(),R(a[s],1),a[s].m(e,null))}for(Je(),s=n.length;s<a.length;s+=1)c(s);Ke()}},i(i){if(!l){for(let u=0;u<n.length;u+=1)R(a[u]);l=!0}},o(i){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)M(a[u]);l=!1},d(i){i&&g(e),Vt(a,i)}}}function Tt(t){let e,l;return e=new Zt({props:{drawerTitle:"Announcement Form",id:"sacrament-form"+t[9],$$slots:{label:[ul],default:[ol]},$$scope:{ctx:t}}}),{c(){Ie(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,a){we(e,n,a),l=!0},p(n,a){const c={};a&1028&&(c.$$scope={dirty:a,ctx:n}),e.$set(c)},i(n){l||(R(e.$$.fragment,n),l=!0)},o(n){M(e.$$.fragment,n),l=!1},d(n){Ce(e,n)}}}function ol(t){let e,l;return e=new nl({props:{event:t[7],name:"item"+t[9]}}),{c(){Ie(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,a){we(e,n,a),l=!0},p(n,a){const c={};a&4&&(c.event=n[7]),e.$set(c)},i(n){l||(R(e.$$.fragment,n),l=!0)},o(n){M(e.$$.fragment,n),l=!1},d(n){Ce(e,n)}}}function ul(t){let e;return{c(){e=_("i"),this.h()},l(l){e=m(l,"I",{slot:!0,class:!0}),w(e).forEach(g),this.h()},h(){f(e,"slot","label"),f(e,"class","bi bi-pencil")},m(l,n){H(l,e,n)},p:ae,d(l){l&&g(e)}}}function At(t){let e,l,n,a,c,i=t[7].start_time+"",u,s,r,o=t[7].title+"",h,v,C,E,p=t[0]&&Tt(t);return{c(){e=_("li"),l=_("div"),n=_("div"),a=_("strong"),c=_("small"),u=se(i),s=_("br"),r=S(),h=se(o),v=S(),p&&p.c(),C=S(),this.h()},l(D){e=m(D,"LI",{class:!0});var V=w(e);l=m(V,"DIV",{class:!0});var N=w(l);n=m(N,"DIV",{});var k=w(n);a=m(k,"STRONG",{});var Z=w(a);c=m(Z,"SMALL",{});var F=w(c);u=ie(F,i),F.forEach(g),Z.forEach(g),s=m(k,"BR",{}),r=T(k),h=ie(k,o),k.forEach(g),v=T(N),p&&p.l(N),N.forEach(g),C=T(V),V.forEach(g),this.h()},h(){f(l,"class","d-flex justify-content-between"),f(e,"class","list-group-item")},m(D,V){H(D,e,V),d(e,l),d(l,n),d(n,a),d(a,c),d(c,u),d(n,s),d(n,r),d(n,h),d(l,v),p&&p.m(l,null),d(e,C),E=!0},p(D,V){(!E||V&4)&&i!==(i=D[7].start_time+"")&&Xe(u,i),(!E||V&4)&&o!==(o=D[7].title+"")&&Xe(h,o),D[0]?p?(p.p(D,V),V&1&&R(p,1)):(p=Tt(D),p.c(),R(p,1),p.m(l,null)):p&&(Je(),M(p,1,1,()=>{p=null}),Ke())},i(D){E||(R(p),E=!0)},o(D){M(p),E=!1},d(D){D&&g(e),p&&p.d()}}}function cl(t){let e,l,n="Announcements",a,c,i,u;const s=[rl,il],r=[];function o(h,v){return h[1]?0:1}return c=o(t),i=r[c]=s[c](t),{c(){e=_("div"),l=_("div"),l.textContent=n,a=S(),i.c(),this.h()},l(h){e=m(h,"DIV",{class:!0});var v=w(e);l=m(v,"DIV",{class:!0,"data-svelte-h":!0}),O(l)!=="svelte-rw6gj3"&&(l.textContent=n),a=T(v),i.l(v),v.forEach(g),this.h()},h(){f(l,"class","card-header"),f(e,"class","card")},m(h,v){H(h,e,v),d(e,l),d(e,a),r[c].m(e,null),u=!0},p(h,[v]){let C=c;c=o(h),c===C?r[c].p(h,v):(Je(),M(r[C],1,1,()=>{r[C]=null}),Ke(),i=r[c],i?i.p(h,v):(i=r[c]=s[c](h),i.c()),R(i,1),i.m(e,null))},i(h){u||(R(i),u=!0)},o(h){M(i),u=!1},d(h){h&&g(e),r[c].d()}}}function fl(t,e,l){let n,a;const{actions:{featureIsEnabled:c}}=Ut(),{stores:{ready:i,data:u},actions:{init:s}}=sl();yt(t,i,o=>l(1,n=o)),yt(t,u,o=>l(2,a=o));let r=!1;return dt(async()=>{l(0,r=c(Nt.EditAnnouncement)),await s()}),[r,n,a,i,u]}class dl extends Ee{constructor(e){super(),ye(this,e,fl,cl,be,{})}}function _l(t,e,l){const n=t.slice();return n[0]=e[l],n}function ml(t){let e,l,n,a=t[0].when+"",c,i,u,s=t[0].title+"",r,o;return{c(){e=_("li"),l=_("strong"),n=_("small"),c=se(a),i=_("br"),u=S(),r=se(s),o=S(),this.h()},l(h){e=m(h,"LI",{class:!0});var v=w(e);l=m(v,"STRONG",{});var C=w(l);n=m(C,"SMALL",{});var E=w(n);c=ie(E,a),E.forEach(g),C.forEach(g),i=m(v,"BR",{}),u=T(v),r=ie(v,s),o=T(v),v.forEach(g),this.h()},h(){f(e,"class","list-group-item")},m(h,v){H(h,e,v),d(e,l),d(l,n),d(n,c),d(e,i),d(e,u),d(e,r),d(e,o)},p:ae,d(h){h&&g(e)}}}function hl(t){let e,l,n="Announcements",a,c,i=rt(qt),u=[];for(let s=0;s<i.length;s+=1)u[s]=ml(_l(t,i,s));return{c(){e=_("div"),l=_("div"),l.textContent=n,a=S(),c=_("ul");for(let s=0;s<u.length;s+=1)u[s].c();this.h()},l(s){e=m(s,"DIV",{class:!0});var r=w(e);l=m(r,"DIV",{class:!0,"data-svelte-h":!0}),O(l)!=="svelte-rw6gj3"&&(l.textContent=n),a=T(r),c=m(r,"UL",{class:!0});var o=w(c);for(let h=0;h<u.length;h+=1)u[h].l(o);o.forEach(g),r.forEach(g),this.h()},h(){f(l,"class","card-header"),f(c,"class","list-group list-group-flush"),f(e,"class","card")},m(s,r){H(s,e,r),d(e,l),d(e,a),d(e,c);for(let o=0;o<u.length;o+=1)u[o]&&u[o].m(c,null)},p:ae,i:ae,o:ae,d(s){s&&g(e),Vt(u,s)}}}class vl extends Ee{constructor(e){super(),ye(this,e,null,hl,be,{})}}function pl(t){let e,l;return e=new vl({}),{c(){Ie(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,a){we(e,n,a),l=!0},i(n){l||(R(e.$$.fragment,n),l=!0)},o(n){M(e.$$.fragment,n),l=!1},d(n){Ce(e,n)}}}function gl(t){let e,l;return e=new dl({}),{c(){Ie(e.$$.fragment)},l(n){ke(e.$$.fragment,n)},m(n,a){we(e,n,a),l=!0},i(n){l||(R(e.$$.fragment,n),l=!0)},o(n){M(e.$$.fragment,n),l=!1},d(n){Ce(e,n)}}}function bl(t){let e,l,n,a;const c=[gl,pl],i=[];function u(s,r){return s[0]?0:1}return e=u(t),l=i[e]=c[e](t),{c(){l.c(),n=It()},l(s){l.l(s),n=It()},m(s,r){i[e].m(s,r),H(s,n,r),a=!0},p(s,[r]){let o=e;e=u(s),e!==o&&(Je(),M(i[o],1,1,()=>{i[o]=null}),Ke(),l=i[e],l||(l=i[e]=c[e](s),l.c()),R(l,1),l.m(n.parentNode,n))},i(s){a||(R(l),a=!0)},o(s){M(l),a=!1},d(s){s&&g(n),i[e].d(s)}}}function El(t,e,l){const{actions:{featureIsEnabled:n}}=Ut();let a=!1;return dt(async()=>{l(0,a=n(Nt.ViewDBAnnouncements))}),[a]}class Sl extends Ee{constructor(e){super(),ye(this,e,El,bl,be,{})}}export{Sl as A,Zt as D,Ct as t};
