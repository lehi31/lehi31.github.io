import{s as Ce,r as Xe,n as ie,h as Fe,b as je,o as Oe}from"../chunks/scheduler.CPYPM6N8.js";import{S as De,i as $e,e as v,s as S,b as pe,c as R,j as w,k as H,l as Q,f as E,d,m as be,g as W,n as h,y as de,o as A,q as _,D as _e,p as Y,C as le,r as he,E as Ue,t as N,a as P,u as z,w as ye,v as Se,z as ke,x as Ge}from"../chunks/index.BnmbcjlB.js";import{P as Ze}from"../chunks/PageLayout.DeEeAess.js";import{e as xe}from"../chunks/Header.D0k3puKg.js";import{c as et,g as tt,F as nt}from"../chunks/confirm.service.BgmUUAFu.js";import{S as qe}from"../chunks/Spinner.D8nTkRQD.js";import{t as Te,D as Je}from"../chunks/analytics.DztBPlvb.js";import{g as Le,B as ge,u as lt,c as st,d as rt,M as V}from"../chunks/member-lists.state.BEcZW1UT.js";const it=!0,Ht=Object.freeze(Object.defineProperty({__proto__:null,prerender:it},Symbol.toStringTag,{value:"Module"}));function at(r){let e,n="<span>Delete</span>",t,l;return{c(){e=v("button"),e.innerHTML=n,this.h()},l(m){e=w(m,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1bw2173"&&(e.innerHTML=n),this.h()},h(){h(e,"class","btn btn-danger position-relative")},m(m,i){A(m,e,i),t||(l=le(e,"click",r[12]),t=!0)},p:ie,d(m){m&&d(e),t=!1,l()}}}function ot(r){let e,n="Create";return{c(){e=v("span"),e.textContent=n},l(t){e=w(t,"SPAN",{"data-svelte-h":!0}),Q(e)!=="svelte-1wf0js6"&&(e.textContent=n)},m(t,l){A(t,e,l)},d(t){t&&d(e)}}}function mt(r){let e,n="Save";return{c(){e=v("span"),e.textContent=n},l(t){e=w(t,"SPAN",{"data-svelte-h":!0}),Q(e)!=="svelte-l126tb"&&(e.textContent=n)},m(t,l){A(t,e,l)},d(t){t&&d(e)}}}function Re(r){let e,n='<span class="visually-hidden">Item not saved</span>';return{c(){e=v("span"),e.innerHTML=n,this.h()},l(t){e=w(t,"SPAN",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1g0a6ie"&&(e.innerHTML=n),this.h()},h(){h(e,"class","position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle")},m(t,l){A(t,e,l)},d(t){t&&d(e)}}}function ft(r){let e,n,t,l="Name*",m,i,p,a,f,k=`Members full name pre-pended by Brother, Sister or calling title where relevant. i.e. Brother
			John Smith, Sister Jane Smith, Bishop John Smith`,y,u,C,B="Description*",g,o,c,b,M,$,O,F,x,ee="Sort Order*",K,j,J,G,s,I,ae=r[9].message+"",me,T,fe,te,oe,Ee,Ne,Z,Be,U,Me,Ae;oe=new qe({props:{size:"xs"}});let ne=r[11]&&at(r);function Qe(D,L){return D[11]?mt:ot}let ve=Qe(r)(r),q=r[10]&&Re();return{c(){e=v("div"),n=v("div"),t=v("div"),t.textContent=l,m=S(),i=v("input"),a=S(),f=v("small"),f.textContent=k,y=S(),u=v("div"),C=v("div"),C.textContent=B,g=S(),o=v("textarea"),b=S(),M=v("small"),$=pe(r[2]),O=S(),F=v("div"),x=v("div"),x.textContent=ee,K=S(),j=v("input"),G=S(),s=v("div"),I=v("small"),me=pe(ae),fe=S(),te=v("span"),R(oe.$$.fragment),Ee=S(),ne&&ne.c(),Ne=S(),Z=v("button"),ve.c(),Be=S(),q&&q.c(),this.h()},l(D){e=w(D,"DIV",{class:!0});var L=H(e);n=w(L,"DIV",{class:!0});var ue=H(n);t=w(ue,"DIV",{"data-svelte-h":!0}),Q(t)!=="svelte-1xr8wax"&&(t.textContent=l),m=E(ue),i=w(ue,"INPUT",{name:!0,type:!0,class:!0,placeholder:!0}),a=E(ue),f=w(ue,"SMALL",{class:!0,"data-svelte-h":!0}),Q(f)!=="svelte-8ueznh"&&(f.textContent=k),ue.forEach(d),y=E(L),u=w(L,"DIV",{class:!0});var ce=H(u);C=w(ce,"DIV",{"data-svelte-h":!0}),Q(C)!=="svelte-8167a8"&&(C.textContent=B),g=E(ce),o=w(ce,"TEXTAREA",{name:!0,class:!0}),H(o).forEach(d),b=E(ce),M=w(ce,"SMALL",{class:!0});var Pe=H(M);$=be(Pe,r[2]),Pe.forEach(d),ce.forEach(d),O=E(L),F=w(L,"DIV",{class:!0});var we=H(F);x=w(we,"DIV",{"data-svelte-h":!0}),Q(x)!=="svelte-16cav4g"&&(x.textContent=ee),K=E(we),j=w(we,"INPUT",{name:!0,type:!0,class:!0}),we.forEach(d),G=E(L),s=w(L,"DIV",{class:!0});var se=H(s);I=w(se,"SMALL",{class:!0});var He=H(I);me=be(He,ae),He.forEach(d),fe=E(se),te=w(se,"SPAN",{});var Ve=H(te);W(oe.$$.fragment,Ve),Ve.forEach(d),Ee=E(se),ne&&ne.l(se),Ne=E(se),Z=w(se,"BUTTON",{class:!0});var Ie=H(Z);ve.l(Ie),Be=E(Ie),q&&q.l(Ie),Ie.forEach(d),se.forEach(d),L.forEach(d),this.h()},h(){h(i,"name",p=r[1]+"-name"),h(i,"type","text"),h(i,"class","form-control"),h(i,"placeholder","Member's name"),i.disabled=r[6],i.required=!0,de(i,"is-invalid",r[5]),h(f,"class","fw-lighter fst-italic"),h(n,"class","d-flex flex-column gap-2"),h(o,"name",c=r[1]+"-description"),h(o,"class","form-control"),o.disabled=r[6],de(o,"is-invalid",r[4]),h(M,"class","fw-lighter fst-italic"),h(u,"class","d-flex flex-column gap-2"),h(j,"name",J=r[1]+"-sort-order"),h(j,"type","number"),h(j,"class","form-control"),j.disabled=r[6],j.required=!0,h(F,"class","d-flex flex-column gap-2"),h(I,"class",T="fw-lighter fst-italic text-"+r[9].type),de(te,"d-none",!r[6]),h(Z,"class","btn btn-primary position-relative"),h(s,"class","d-flex justify-content-end align-items-center gap-2 flex-row"),h(e,"class","d-flex flex-column gap-4")},m(D,L){A(D,e,L),_(e,n),_(n,t),_(n,m),_(n,i),r[16](i),_e(i,r[0].name),_(n,a),_(n,f),_(e,y),_(e,u),_(u,C),_(u,g),_(u,o),r[20](o),_e(o,r[0].description),_(u,b),_(u,M),_(M,$),_(e,O),_(e,F),_(F,x),_(F,K),_(F,j),_e(j,r[0].sort_order),_(e,G),_(e,s),_(s,I),_(I,me),_(s,fe),_(s,te),Y(oe,te,null),_(s,Ee),ne&&ne.m(s,null),_(s,Ne),_(s,Z),ve.m(Z,null),_(Z,Be),q&&q.m(Z,null),U=!0,Me||(Ae=[le(i,"focus",r[17]),le(i,"keyup",r[18]),le(i,"input",r[19]),le(o,"focus",r[21]),le(o,"keyup",r[22]),le(o,"input",r[23]),le(j,"input",r[24]),le(Z,"click",r[13])],Me=!0)},p(D,[L]){(!U||L&2&&p!==(p=D[1]+"-name"))&&h(i,"name",p),(!U||L&64)&&(i.disabled=D[6]),L&1&&i.value!==D[0].name&&_e(i,D[0].name),(!U||L&32)&&de(i,"is-invalid",D[5]),(!U||L&2&&c!==(c=D[1]+"-description"))&&h(o,"name",c),(!U||L&64)&&(o.disabled=D[6]),L&1&&_e(o,D[0].description),(!U||L&16)&&de(o,"is-invalid",D[4]),(!U||L&4)&&he($,D[2]),(!U||L&2&&J!==(J=D[1]+"-sort-order"))&&h(j,"name",J),(!U||L&64)&&(j.disabled=D[6]),L&1&&Ue(j.value)!==D[0].sort_order&&_e(j,D[0].sort_order),(!U||L&512)&&ae!==(ae=D[9].message+"")&&he(me,ae),(!U||L&512&&T!==(T="fw-lighter fst-italic text-"+D[9].type))&&h(I,"class",T),(!U||L&64)&&de(te,"d-none",!D[6]),D[11]&&ne.p(D,L),D[10]?q||(q=Re(),q.c(),q.m(Z,null)):q&&(q.d(1),q=null)},i(D){U||(N(oe.$$.fragment,D),U=!0)},o(D){P(oe.$$.fragment,D),U=!1},d(D){D&&d(e),r[16](null),r[20](null),z(oe),ne&&ne.d(),ve.d(),q&&q.d(),Me=!1,Xe(Ae)}}}function ut(r,e,n){let t,l,m,i,{name:p=""}=e,{listName:a=""}=e,{member:f=ge}=e,{descriptionHelperText:k=""}=e;const{actions:{reload:y}}=Le();let u=!1,C=f.id,B,g,o={message:"",type:"info"},c={name:"",description:"",list_name:"",sort_order:0},b={name:!1,description:!1};const M=()=>{n(3,b={name:!1,description:!1}),n(0,f={...ge,list_name:a}),n(6,u=!1)},$=(T,fe=0,te="info")=>{n(9,o.message=T,o),n(9,o.type=te,o),fe&&setTimeout(()=>{n(9,o.message="",o)},fe)},O=async()=>{if(!C){$("ID is not defined",0,"danger");return}try{await rt(C),await y(),Te("set_member_list_item_success","interaction","Delete Member List Successful",1),setTimeout(()=>{n(6,u=!1),n(15,c={...f,id:C}),$("Event Deleted",3e3,"success"),n(0,f=ge)},800)}catch(T){Te("set_member_list_item_failed","interaction","Delete Member List Failed",1),setTimeout(()=>{n(6,u=!1),console.error("Save failed:",T),$("Failed to save event. Please try again.",7e3,"danger")},800)}},F=()=>{n(6,u=!0),et({title:"Delete Confirmation",message:"Are you sure you want to do this?  You won't be able to undo this.",confirmButtonLabel:"Yes",confirmButtonCSS:"btn-danger",callback:T=>{T&&O(),M()}})},x=async()=>{if(!t){$("Sorry nothing has changed, therefore, there is nothing to save.",7e3);return}if(!i){let T=[];l&&T.push("Title is invalid"),m&&T.push("Description is invalid"),$(T.join(". ")+".  Please address accordingly.",0,"danger");return}if(!u){$("Saving ..."),n(6,u=!0);try{const T={name:f.name,description:f.description,list_name:f.list_name,sort_order:f.sort_order};C?await lt(C,T):await st(T),await y(),Te("set_member_list_item_success","interaction",`Set Member List Successful ${f.name}`,1),setTimeout(()=>{n(6,u=!1),n(15,c={...f,id:C}),$("Saved",3e3,"success"),M()},800)}catch(T){Te("set_member_list_item_failed","interaction",`Set Member List Failed ${f.name}`,1),setTimeout(()=>{n(6,u=!1),console.error("Save failed:",T),$("Failed to save event. Please try again.",7e3,"danger"),M()},800)}}};function ee(T){Fe[T?"unshift":"push"](()=>{B=T,n(7,B)})}const K=()=>B.select(),j=()=>n(3,b.name=!0,b);function J(){f.name=this.value,n(0,f)}function G(T){Fe[T?"unshift":"push"](()=>{g=T,n(8,g)})}const s=()=>g.select(),I=()=>n(3,b.description=!0,b);function ae(){f.description=this.value,n(0,f)}function me(){f.sort_order=Ue(this.value),n(0,f)}return r.$$set=T=>{"name"in T&&n(1,p=T.name),"listName"in T&&n(14,a=T.listName),"member"in T&&n(0,f=T.member),"descriptionHelperText"in T&&n(2,k=T.descriptionHelperText)},r.$$.update=()=>{r.$$.dirty&32769&&n(10,t=c?.name!==f.name||c?.description!==f.description||c?.list_name!==f.list_name||c?.sort_order!==f.sort_order),r.$$.dirty&9&&n(5,l=b.name&&f.name===""),r.$$.dirty&9&&n(4,m=b.name&&f.description===""),r.$$.dirty&48&&(i=!l&&!m)},[f,p,k,b,m,l,u,B,g,o,t,C,F,x,a,c,ee,K,j,J,G,s,I,ae,me]}class Ke extends De{constructor(e){super(),$e(this,e,ut,ft,Ce,{name:1,listName:14,member:0,descriptionHelperText:2})}}function We(r,e,n){const t=r.slice();return t[13]=e[n],t[15]=n,t}function ct(r){let e,n;return e=new Ke({props:{name:"member-list-item-form-new",listName:r[2],member:{...ge,list_name:r[2]},descriptionHelperText:r[3]}}),{c(){R(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){Y(e,t,l),n=!0},p(t,l){const m={};l&4&&(m.listName=t[2]),l&4&&(m.member={...ge,list_name:t[2]}),l&8&&(m.descriptionHelperText=t[3]),e.$set(m)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function dt(r){let e,n='<i class="bi bi-plus"></i>';return{c(){e=v("span"),e.innerHTML=n,this.h()},l(t){e=w(t,"SPAN",{slot:!0,"data-svelte-h":!0}),Q(e)!=="svelte-f9zb6j"&&(e.innerHTML=n),this.h()},h(){h(e,"slot","label")},m(t,l){A(t,e,l)},p:ie,d(t){t&&d(e)}}}function _t(r){let e,n,t;return n=new qe({}),{c(){e=v("li"),R(n.$$.fragment),this.h()},l(l){e=w(l,"LI",{class:!0});var m=H(e);W(n.$$.fragment,m),m.forEach(d),this.h()},h(){h(e,"class","list-group-item")},m(l,m){A(l,e,m),Y(n,e,null),t=!0},p:ie,i(l){t||(N(n.$$.fragment,l),t=!0)},o(l){P(n.$$.fragment,l),t=!1},d(l){l&&d(e),z(n)}}}function gt(r){let e,n,t,l;const m=[bt,pt],i=[];function p(a,f){return a[7].length?0:1}return e=p(r),n=i[e]=m[e](r),{c(){n.c(),t=ke()},l(a){n.l(a),t=ke()},m(a,f){i[e].m(a,f),A(a,t,f),l=!0},p(a,f){let k=e;e=p(a),e===k?i[e].p(a,f):(ye(),P(i[k],1,1,()=>{i[k]=null}),Se(),n=i[e],n?n.p(a,f):(n=i[e]=m[e](a),n.c()),N(n,1),n.m(t.parentNode,t))},i(a){l||(N(n),l=!0)},o(a){P(n),l=!1},d(a){a&&d(t),i[e].d(a)}}}function pt(r){let e,n="No Data";return{c(){e=v("li"),e.textContent=n,this.h()},l(t){e=w(t,"LI",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-13bykms"&&(e.textContent=n),this.h()},h(){h(e,"class","list-group-item")},m(t,l){A(t,e,l)},p:ie,i:ie,o:ie,d(t){t&&d(e)}}}function bt(r){let e,n,t=xe(r[7]),l=[];for(let i=0;i<t.length;i+=1)l[i]=ze(We(r,t,i));const m=i=>P(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=ke()},l(i){for(let p=0;p<l.length;p+=1)l[p].l(i);e=ke()},m(i,p){for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(i,p);A(i,e,p),n=!0},p(i,p){if(p&225){t=xe(i[7]);let a;for(a=0;a<t.length;a+=1){const f=We(i,t,a);l[a]?(l[a].p(f,p),N(l[a],1)):(l[a]=ze(f),l[a].c(),N(l[a],1),l[a].m(e.parentNode,e))}for(ye(),a=t.length;a<l.length;a+=1)m(a);Se()}},i(i){if(!n){for(let p=0;p<t.length;p+=1)N(l[p]);n=!0}},o(i){l=l.filter(Boolean);for(let p=0;p<l.length;p+=1)P(l[p]);n=!1},d(i){i&&d(e),Ge(l,i)}}}function Ye(r){let e,n;return e=new Je({props:{drawerTitle:r[5],id:r[0]+r[15],$$slots:{label:[vt],default:[ht]},$$scope:{ctx:r}}}),{c(){R(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){Y(e,t,l),n=!0},p(t,l){const m={};l&32&&(m.drawerTitle=t[5]),l&1&&(m.id=t[0]+t[15]),l&65665&&(m.$$scope={dirty:l,ctx:t}),e.$set(m)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function ht(r){let e,n;return e=new Ke({props:{name:r[0]+r[15],member:r[13]}}),{c(){R(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){Y(e,t,l),n=!0},p(t,l){const m={};l&1&&(m.name=t[0]+t[15]),l&128&&(m.member=t[13]),e.$set(m)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function vt(r){let e;return{c(){e=v("i"),this.h()},l(n){e=w(n,"I",{slot:!0,class:!0}),H(e).forEach(d),this.h()},h(){h(e,"slot","label"),h(e,"class","bi bi-pencil")},m(n,t){A(n,e,t)},p:ie,d(n){n&&d(e)}}}function ze(r){let e,n,t,l,m=r[13].name+"",i,p,a,f=r[13].description+"",k,y,u,C,B,g=r[6]&&Ye(r);return{c(){e=v("li"),n=v("div"),t=v("div"),l=v("div"),i=pe(m),p=S(),a=v("div"),k=pe(f),y=S(),u=v("div"),g&&g.c(),C=S(),this.h()},l(o){e=w(o,"LI",{class:!0});var c=H(e);n=w(c,"DIV",{class:!0});var b=H(n);t=w(b,"DIV",{class:!0});var M=H(t);l=w(M,"DIV",{});var $=H(l);i=be($,m),$.forEach(d),p=E(M),a=w(M,"DIV",{class:!0});var O=H(a);k=be(O,f),O.forEach(d),M.forEach(d),y=E(b),u=w(b,"DIV",{});var F=H(u);g&&g.l(F),F.forEach(d),b.forEach(d),C=E(c),c.forEach(d),this.h()},h(){h(a,"class","fw-lighter"),h(t,"class","d-sm-block d-md-flex d-lg-flex d-lg-flex flex-grow-1 justify-content-between me-3 flex-sm-column flex-md-row flex-xl-row flex-lg-row gap-3"),h(n,"class","d-flex justify-content-between align-items-center"),h(e,"class","list-group-item")},m(o,c){A(o,e,c),_(e,n),_(n,t),_(t,l),_(l,i),_(t,p),_(t,a),_(a,k),_(n,y),_(n,u),g&&g.m(u,null),_(e,C),B=!0},p(o,c){(!B||c&128)&&m!==(m=o[13].name+"")&&he(i,m),(!B||c&128)&&f!==(f=o[13].description+"")&&he(k,f),o[6]?g?(g.p(o,c),c&64&&N(g,1)):(g=Ye(o),g.c(),N(g,1),g.m(u,null)):g&&(ye(),P(g,1,1,()=>{g=null}),Se())},i(o){B||(N(g),B=!0)},o(o){P(g),B=!1},d(o){o&&d(e),g&&g.d()}}}function wt(r){let e,n,t,l,m,i,p,a,f,k,y,u,C;a=new Je({props:{drawerTitle:r[4],id:r[0],$$slots:{label:[dt],default:[ct]},$$scope:{ctx:r}}});const B=[gt,_t],g=[];function o(c,b){return c[8]?0:1}return y=o(r),u=g[y]=B[y](r),{c(){e=v("div"),n=v("div"),t=v("div"),l=v("div"),m=v("div"),i=pe(r[1]),p=S(),R(a.$$.fragment),f=S(),k=v("ul"),u.c(),this.h()},l(c){e=w(c,"DIV",{class:!0});var b=H(e);n=w(b,"DIV",{class:!0});var M=H(n);t=w(M,"DIV",{class:!0});var $=H(t);l=w($,"DIV",{class:!0});var O=H(l);m=w(O,"DIV",{class:!0});var F=H(m);i=be(F,r[1]),F.forEach(d),p=E(O),W(a.$$.fragment,O),O.forEach(d),$.forEach(d),M.forEach(d),f=E(b),k=w(b,"UL",{class:!0});var x=H(k);u.l(x),x.forEach(d),b.forEach(d),this.h()},h(){h(m,"class","h5 m-0"),h(l,"class","d-flex justify-content-between align-items-center"),h(t,"class","d-flex flex-column gap-2"),h(n,"class","card-header"),h(k,"class","list-group list-group-flush"),h(e,"class","card")},m(c,b){A(c,e,b),_(e,n),_(n,t),_(t,l),_(l,m),_(m,i),_(l,p),Y(a,l,null),_(e,f),_(e,k),g[y].m(k,null),C=!0},p(c,[b]){(!C||b&2)&&he(i,c[1]);const M={};b&16&&(M.drawerTitle=c[4]),b&1&&(M.id=c[0]),b&65548&&(M.$$scope={dirty:b,ctx:c}),a.$set(M);let $=y;y=o(c),y===$?g[y].p(c,b):(ye(),P(g[$],1,1,()=>{g[$]=null}),Se(),u=g[y],u?u.p(c,b):(u=g[y]=B[y](c),u.c()),N(u,1),u.m(k,null))},i(c){C||(N(a.$$.fragment,c),N(u),C=!0)},o(c){P(a.$$.fragment,c),P(u),C=!1},d(c){c&&d(e),z(a),g[y].d()}}}function It(r,e,n){let t,l,{name:m=""}=e,{title:i=""}=e,{listName:p=""}=e,{descriptionHelperText:a=""}=e,{newItemDrawerTitle:f=""}=e,{editItemDrawerTitle:k=""}=e;const{actions:{featureIsEnabled:y}}=tt(),{stores:{ready:u,dbData:C}}=Le();je(r,u,o=>n(8,l=o)),je(r,C,o=>n(11,t=o));let B=!1,g=[];return Oe(()=>{n(6,B=y(nt.EditMemberListItem))}),r.$$set=o=>{"name"in o&&n(0,m=o.name),"title"in o&&n(1,i=o.title),"listName"in o&&n(2,p=o.listName),"descriptionHelperText"in o&&n(3,a=o.descriptionHelperText),"newItemDrawerTitle"in o&&n(4,f=o.newItemDrawerTitle),"editItemDrawerTitle"in o&&n(5,k=o.editItemDrawerTitle)},r.$$.update=()=>{r.$$.dirty&2052&&n(7,g=t.filter(o=>o.list_name===p).sort((o,c)=>o.sort_order-c.sort_order))},[m,i,p,a,f,k,B,g,l,u,C,t]}class X extends De{constructor(e){super(),$e(this,e,It,wt,Ce,{name:0,title:1,listName:2,descriptionHelperText:3,newItemDrawerTitle:4,editItemDrawerTitle:5})}}function Tt(r){let e,n="In Sacrament",t,l,m,i,p,a,f,k,y,u,C,B,g,o,c,b,M,$,O="In Class",F,x,ee,K,j,J,G;return l=new X({props:{title:"Callings to release in sacrament",name:V.CallingsToBeReleasedInSacrament.key,listName:V.CallingsToBeReleasedInSacrament.key,newItemDrawerTitle:"New Calling to be released in sacrament",editItemDrawerTitle:"Edit Calling to be released in sacrament",descriptionHelperText:re}}),i=new X({props:{title:"Callings to sustain in sacrament",name:V.CallingsToBeSustainedInSacrament.key,listName:V.CallingsToBeSustainedInSacrament.key,newItemDrawerTitle:"New Calling to be sustained in sacrament",editItemDrawerTitle:"Edit Calling to be sustained in sacrament",descriptionHelperText:re}}),a=new X({props:{title:"Callings to be acknowledged in sacrament",name:V.CallingsToBeAcknowledgeInSacrament.key,listName:V.CallingsToBeAcknowledgeInSacrament.key,newItemDrawerTitle:"New Calling to be acknowledged in sacrament",editItemDrawerTitle:"Edit Calling to be acknowledged in sacrament",descriptionHelperText:re}}),k=new X({props:{title:"Aaronic Priesthood Advancements",name:V.AdvancementsForAaronicPriesthood.key,listName:V.AdvancementsForAaronicPriesthood.key,newItemDrawerTitle:"New Aaronic Priesthood Advancement for Sustaining",editItemDrawerTitle:"Edit Aaronic Priesthood Advancement for Sustaining",descriptionHelperText:"State the Aaronic Priesthood the member will be advancing to. i.e. Deacon, Teacher or Priest"}}),u=new X({props:{title:"Young Women Advancements",name:V.AdvancementsForYoungWomen.key,listName:V.AdvancementsForYoungWomen.key,newItemDrawerTitle:"New Young Women Advancing",editItemDrawerTitle:"Edit Young Women Advancing",descriptionHelperText:"State Young Women Class, she will be advancing to.  12 to 13 years old class, 14 to 15 year old class or 16 to 18 year old class"}}),B=new X({props:{title:"Members whom just moved in",name:V.MovedIn.key,listName:V.MovedIn.key,newItemDrawerTitle:"New Member whom just moved in",editItemDrawerTitle:"Edit Member whom just moved in",descriptionHelperText:re}}),o=new X({props:{title:"Baptisms",name:V.Baptisms.key,listName:V.Baptisms.key,newItemDrawerTitle:"New Member Baptism",editItemDrawerTitle:"Edit Member Baptism",descriptionHelperText:re}}),b=new X({props:{title:"Baby Blessing",name:V.BabyBlessing.key,listName:V.BabyBlessing.key,newItemDrawerTitle:"New Baby Blessing Member",editItemDrawerTitle:"Edit Baby Blessing Member",descriptionHelperText:"This is optional if you don't have more details to add"}}),x=new X({props:{title:"Callings to release in class",name:V.CallingsToBeReleasedInClass.key,listName:V.CallingsToBeReleasedInClass.key,newItemDrawerTitle:"New Calling to be released in class",editItemDrawerTitle:"Edit Calling to be released in class",descriptionHelperText:re}}),K=new X({props:{title:"Callings to sustain in class",name:V.CallingsToBeSustainedInClass.key,listName:V.CallingsToBeSustainedInClass.key,newItemDrawerTitle:"New Calling to be sustained in class",editItemDrawerTitle:"Edit Calling to be sustained in class",descriptionHelperText:re}}),J=new X({props:{title:"Callings to be acknowledged in class",name:V.CallingsToBeAcknowledgeInClass.key,listName:V.CallingsToBeAcknowledgeInClass.key,newItemDrawerTitle:"New Calling to be acknowledged in class",editItemDrawerTitle:"Edit Calling to be acknowledged in class",descriptionHelperText:re}}),{c(){e=v("h3"),e.textContent=n,t=S(),R(l.$$.fragment),m=S(),R(i.$$.fragment),p=S(),R(a.$$.fragment),f=S(),R(k.$$.fragment),y=S(),R(u.$$.fragment),C=S(),R(B.$$.fragment),g=S(),R(o.$$.fragment),c=S(),R(b.$$.fragment),M=S(),$=v("h3"),$.textContent=O,F=S(),R(x.$$.fragment),ee=S(),R(K.$$.fragment),j=S(),R(J.$$.fragment)},l(s){e=w(s,"H3",{"data-svelte-h":!0}),Q(e)!=="svelte-x43anv"&&(e.textContent=n),t=E(s),W(l.$$.fragment,s),m=E(s),W(i.$$.fragment,s),p=E(s),W(a.$$.fragment,s),f=E(s),W(k.$$.fragment,s),y=E(s),W(u.$$.fragment,s),C=E(s),W(B.$$.fragment,s),g=E(s),W(o.$$.fragment,s),c=E(s),W(b.$$.fragment,s),M=E(s),$=w(s,"H3",{"data-svelte-h":!0}),Q($)!=="svelte-vzkp7r"&&($.textContent=O),F=E(s),W(x.$$.fragment,s),ee=E(s),W(K.$$.fragment,s),j=E(s),W(J.$$.fragment,s)},m(s,I){A(s,e,I),A(s,t,I),Y(l,s,I),A(s,m,I),Y(i,s,I),A(s,p,I),Y(a,s,I),A(s,f,I),Y(k,s,I),A(s,y,I),Y(u,s,I),A(s,C,I),Y(B,s,I),A(s,g,I),Y(o,s,I),A(s,c,I),Y(b,s,I),A(s,M,I),A(s,$,I),A(s,F,I),Y(x,s,I),A(s,ee,I),Y(K,s,I),A(s,j,I),Y(J,s,I),G=!0},p:ie,i(s){G||(N(l.$$.fragment,s),N(i.$$.fragment,s),N(a.$$.fragment,s),N(k.$$.fragment,s),N(u.$$.fragment,s),N(B.$$.fragment,s),N(o.$$.fragment,s),N(b.$$.fragment,s),N(x.$$.fragment,s),N(K.$$.fragment,s),N(J.$$.fragment,s),G=!0)},o(s){P(l.$$.fragment,s),P(i.$$.fragment,s),P(a.$$.fragment,s),P(k.$$.fragment,s),P(u.$$.fragment,s),P(B.$$.fragment,s),P(o.$$.fragment,s),P(b.$$.fragment,s),P(x.$$.fragment,s),P(K.$$.fragment,s),P(J.$$.fragment,s),G=!1},d(s){s&&(d(e),d(t),d(m),d(p),d(f),d(y),d(C),d(g),d(c),d(M),d($),d(F),d(ee),d(j)),z(l,s),z(i,s),z(a,s),z(k,s),z(u,s),z(B,s),z(o,s),z(b,s),z(x,s),z(K,s),z(J,s)}}}const re="Member calling. i.e. Elders Quorum Instructor, Young Women Class President";function kt(r){const{actions:{reload:e}}=Le();return Oe(e),[]}class Ct extends De{constructor(e){super(),$e(this,e,kt,Tt,Ce,{})}}function Dt(r){let e,n;return e=new Ct({}),{c(){R(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){Y(e,t,l),n=!0},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function $t(r){let e,n;return e=new Ze({props:{pageTitle:"Ward Business",$$slots:{default:[Dt]},$$scope:{ctx:r}}}),{c(){R(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){Y(e,t,l),n=!0},p(t,[l]){const m={};l&1&&(m.$$scope={dirty:l,ctx:t}),e.$set(m)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){P(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}class Vt extends De{constructor(e){super(),$e(this,e,null,$t,Ce,{})}}export{Vt as component,Ht as universal};
