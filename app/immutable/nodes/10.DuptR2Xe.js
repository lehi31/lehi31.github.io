import{s as Le,n as x}from"../chunks/scheduler.tWunq22O.js";import{S as De,i as He,e as b,m as V,s as y,c as k,b as M,n as B,f as p,d as w,h as E,j as H,k as u,u as K,y as Ce,o as C,q as P,g as Pe,r as R,x as we,a as v,w as Ee,t as h,v as N,z as $n,l as vn}from"../chunks/index.BiSuWVZV.js";import{i as En,f as Tn,e as ye}from"../chunks/Header.CnawA9az.js";import{n as Ln,C as Dn}from"../chunks/cheat-sheet.data.BZux2PEA.js";import{P as Hn}from"../chunks/PageLayout.CqYxCLMb.js";const In=!0,Jn=Object.freeze(Object.defineProperty({__proto__:null,prerender:In},Symbol.toStringTag,{value:"Module"}));function An(t){let e,a,n,g,m,o,d,l,_,c;return{c(){e=b("div"),a=b("div"),n=V(t[0]),g=y(),m=b("div"),o=V(t[1]),d=b("br"),l=y(),_=b("small"),c=V(t[2]),this.h()},l(S){e=k(S,"DIV",{class:!0});var r=M(e);a=k(r,"DIV",{});var f=M(a);n=B(f,t[0]),f.forEach(p),g=w(r),m=k(r,"DIV",{class:!0});var s=M(m);o=B(s,t[1]),d=k(s,"BR",{}),l=w(s),_=k(s,"SMALL",{});var T=M(_);c=B(T,t[2]),T.forEach(p),s.forEach(p),r.forEach(p),this.h()},h(){E(m,"class","text-end"),E(e,"class","d-flex justify-content-between")},m(S,r){H(S,e,r),u(e,a),u(a,n),u(e,g),u(e,m),u(m,o),u(m,d),u(m,l),u(m,_),u(_,c)},p(S,[r]){r&1&&K(n,S[0]),r&2&&K(o,S[1]),r&4&&K(c,S[2])},i:x,o:x,d(S){S&&p(e)}}}function Mn(t,e,a){let{assignment:n=""}=e,{name:g=""}=e,{details:m=""}=e;return t.$$set=o=>{"assignment"in o&&a(0,n=o.assignment),"name"in o&&a(1,g=o.name),"details"in o&&a(2,m=o.details)},[n,g,m]}class J extends De{constructor(e){super(),He(this,e,Mn,An,Le,{assignment:0,name:1,details:2})}}function Vn(t){let e,a,n,g,m,o,d,l,_,c,S,r,f,s,T;return{c(){e=b("div"),a=b("div"),n=V(t[0]),g=y(),m=b("div"),o=V(t[1]),d=b("br"),l=y(),_=b("small"),c=V(t[2]),S=V(" Hymn No. "),r=V(t[3]),f=y(),s=b("a"),T=V("Lyrics"),this.h()},l(I){e=k(I,"DIV",{class:!0});var L=M(e);a=k(L,"DIV",{});var D=M(a);n=B(D,t[0]),D.forEach(p),g=w(L),m=k(L,"DIV",{class:!0});var A=M(m);o=B(A,t[1]),d=k(A,"BR",{}),l=w(A),_=k(A,"SMALL",{});var W=M(_);c=B(W,t[2]),S=B(W," Hymn No. "),r=B(W,t[3]),W.forEach(p),f=w(A),s=k(A,"A",{href:!0,class:!0,target:!0,tabindex:!0,role:!0,style:!0});var q=M(s);T=B(q,"Lyrics"),q.forEach(p),A.forEach(p),L.forEach(p),this.h()},h(){E(s,"href",t[4]),E(s,"class","btn btn-secondary btn-sm d-print-none"),E(s,"target","_blank"),E(s,"tabindex","-1"),E(s,"role","button"),Ce(s,"--bs-btn-padding-y",".25rem"),Ce(s,"--bs-btn-padding-x",".5rem"),Ce(s,"--bs-btn-font-size",".70rem"),E(m,"class","text-end"),E(e,"class","d-flex justify-content-between")},m(I,L){H(I,e,L),u(e,a),u(a,n),u(e,g),u(e,m),u(m,o),u(m,d),u(m,l),u(m,_),u(_,c),u(_,S),u(_,r),u(m,f),u(m,s),u(s,T)},p(I,[L]){L&1&&K(n,I[0]),L&2&&K(o,I[1]),L&4&&K(c,I[2]),L&8&&K(r,I[3]),L&16&&E(s,"href",I[4])},i:x,o:x,d(I){I&&p(e)}}}function Bn(t,e,a){let{assignment:n=""}=e,{title:g=""}=e,{language:m=""}=e,{page:o=0}=e,{link:d=""}=e;return t.$$set=l=>{"assignment"in l&&a(0,n=l.assignment),"title"in l&&a(1,g=l.title),"language"in l&&a(2,m=l.language),"page"in l&&a(3,o=l.page),"link"in l&&a(4,d=l.link)},[n,g,m,o,d]}class Te extends De{constructor(e){super(),He(this,e,Bn,Vn,Le,{assignment:0,title:1,language:2,page:3,link:4})}}function bn(t,e,a){const n=t.slice();return n[15]=e[a],n}function kn(t,e,a){const n=t.slice();return n[15]=e[a],n}function Cn(t){let e,a,n,g,m=ye(t[7]),o=[];for(let r=0;r<m.length;r+=1)o[r]=Sn(kn(t,m,r));const d=r=>v(o[r],1,1,()=>{o[r]=null});let l=t[0]&&yn(t),_=ye(t[8]),c=[];for(let r=0;r<_.length;r+=1)c[r]=wn(bn(t,_,r));const S=r=>v(c[r],1,1,()=>{c[r]=null});return{c(){for(let r=0;r<o.length;r+=1)o[r].c();e=y(),l&&l.c(),a=y();for(let r=0;r<c.length;r+=1)c[r].c();n=$n()},l(r){for(let f=0;f<o.length;f+=1)o[f].l(r);e=w(r),l&&l.l(r),a=w(r);for(let f=0;f<c.length;f+=1)c[f].l(r);n=$n()},m(r,f){for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(r,f);H(r,e,f),l&&l.m(r,f),H(r,a,f);for(let s=0;s<c.length;s+=1)c[s]&&c[s].m(r,f);H(r,n,f),g=!0},p(r,f){if(f&640){m=ye(r[7]);let s;for(s=0;s<m.length;s+=1){const T=kn(r,m,s);o[s]?(o[s].p(T,f),h(o[s],1)):(o[s]=Sn(T),o[s].c(),h(o[s],1),o[s].m(e.parentNode,e))}for(we(),s=m.length;s<o.length;s+=1)d(s);Ee()}if(r[0]?l?(l.p(r,f),f&1&&h(l,1)):(l=yn(r),l.c(),h(l,1),l.m(a.parentNode,a)):l&&(we(),v(l,1,1,()=>{l=null}),Ee()),f&768){_=ye(r[8]);let s;for(s=0;s<_.length;s+=1){const T=bn(r,_,s);c[s]?(c[s].p(T,f),h(c[s],1)):(c[s]=wn(T),c[s].c(),h(c[s],1),c[s].m(n.parentNode,n))}for(we(),s=_.length;s<c.length;s+=1)S(s);Ee()}},i(r){if(!g){for(let f=0;f<m.length;f+=1)h(o[f]);h(l);for(let f=0;f<_.length;f+=1)h(c[f]);g=!0}},o(r){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)v(o[f]);v(l),c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)v(c[f]);g=!1},d(r){r&&(p(e),p(a),p(n)),vn(o,r),l&&l.d(r),vn(c,r)}}}function Pn(t){let e,a="<h5>Fast Sunday: Bearing of Testimonies</h5>";return{c(){e=b("div"),e.innerHTML=a,this.h()},l(n){e=k(n,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-d9l13f"&&(e.innerHTML=a),this.h()},h(){E(e,"class","text-center")},m(n,g){H(n,e,g)},p:x,i:x,o:x,d(n){n&&p(e)}}}function Sn(t){var n,g,m,o;let e,a;return e=new J({props:{assignment:t[9](t[15].role),name:((g=(n=t[15])==null?void 0:n.person)==null?void 0:g.name)??"",details:((o=(m=t[15])==null?void 0:m.person)==null?void 0:o.details)??""}}),{c(){C(e.$$.fragment)},l(d){P(e.$$.fragment,d)},m(d,l){R(e,d,l),a=!0},p:x,i(d){a||(h(e.$$.fragment,d),a=!0)},o(d){v(e.$$.fragment,d),a=!1},d(d){N(e,d)}}}function yn(t){let e,a;return e=new Te({props:{assignment:"Rest Hymn",title:t[0].title,page:t[0].page,language:t[0].language,link:t[0].link}}),{c(){C(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,g){R(e,n,g),a=!0},p(n,g){const m={};g&1&&(m.title=n[0].title),g&1&&(m.page=n[0].page),g&1&&(m.language=n[0].language),g&1&&(m.link=n[0].link),e.$set(m)},i(n){a||(h(e.$$.fragment,n),a=!0)},o(n){v(e.$$.fragment,n),a=!1},d(n){N(e,n)}}}function wn(t){var n,g,m,o;let e,a;return e=new J({props:{assignment:t[9](t[15].role),name:((g=(n=t[15])==null?void 0:n.person)==null?void 0:g.name)??"",details:((o=(m=t[15])==null?void 0:m.person)==null?void 0:o.details)??""}}),{c(){C(e.$$.fragment)},l(d){P(e.$$.fragment,d)},m(d,l){R(e,d,l),a=!0},p:x,i(d){a||(h(e.$$.fragment,d),a=!0)},o(d){v(e.$$.fragment,d),a=!1},d(d){N(e,d)}}}function Rn(t){var Oe,ze,Ue,We,Fe,Ge,Je,Ke,Qe,Xe,Ye,Ze,xe,et,tt,nt,at,st,rt,lt,it,ot,mt,ft,gt,ut,ct,dt,pt,_t,ht,$t,vt,bt,kt,St,yt,wt,Et,Tt,Lt,Dt,Ht,It,At,Mt,Vt,Bt,Ct,Pt,Rt,Nt,qt,jt,Ot,zt,Ut,Wt,Ft,Gt,Jt,Kt,Qt,Xt,Yt,Zt,xt,en,tn,nn,an,sn,rn,ln,on,mn,fn,gn,un,cn,dn,pn,_n;let e,a,n,g,m,o,d,l,_,c,S,r,f,s=((Oe=t[4])==null?void 0:Oe.reference)+"",T,I,L,D,A,W,q,de,G,Q,j,_e,O,le,Ie,ie,Ae,oe,Me,me,he,X,fe,Ve,ge,Re="<h5>Administration of Sacrament</h5>",$e,ee,z,U,ve,Y,ue,Be,ce,be,te,Ne='<blockquote class="blockquote"><p>But be ye doers of the word, and not hearers only, deceiving your own selves.</p></blockquote> <figcaption class="blockquote-footer"><cite title="Source Title">James 1:22</cite></figcaption>',ne;A=new J({props:{assignment:"Presiding",name:((We=(Ue=(ze=t[5])==null?void 0:ze.sacrament)==null?void 0:Ue.presiding)==null?void 0:We.name)??"",details:((Je=(Ge=(Fe=t[5])==null?void 0:Fe.sacrament)==null?void 0:Ge.presiding)==null?void 0:Je.details)??""}}),q=new J({props:{assignment:"Conducting",name:((Xe=(Qe=(Ke=t[5])==null?void 0:Ke.sacrament)==null?void 0:Qe.conducting)==null?void 0:Xe.name)??"",details:((xe=(Ze=(Ye=t[5])==null?void 0:Ye.sacrament)==null?void 0:Ze.conducting)==null?void 0:xe.details)??""}}),G=new J({props:{assignment:"Chorister",name:((nt=(tt=(et=t[5])==null?void 0:et.sacrament)==null?void 0:tt.chorister)==null?void 0:nt.name)??"",details:((rt=(st=(at=t[5])==null?void 0:at.sacrament)==null?void 0:st.chorister)==null?void 0:rt.details)??""}}),j=new J({props:{assignment:"Organist",name:((ot=(it=(lt=t[5])==null?void 0:lt.sacrament)==null?void 0:it.organist)==null?void 0:ot.name)??"",details:((gt=(ft=(mt=t[5])==null?void 0:mt.sacrament)==null?void 0:ft.organist)==null?void 0:gt.details)??""}}),le=new Te({props:{assignment:"Opening Hymn",title:(dt=(ct=(ut=t[5])==null?void 0:ut.sacrament)==null?void 0:ct.openingSong)==null?void 0:dt.title,page:(ht=(_t=(pt=t[5])==null?void 0:pt.sacrament)==null?void 0:_t.openingSong)==null?void 0:ht.page,language:(bt=(vt=($t=t[5])==null?void 0:$t.sacrament)==null?void 0:vt.openingSong)==null?void 0:bt.language,link:(yt=(St=(kt=t[5])==null?void 0:kt.sacrament)==null?void 0:St.openingSong)==null?void 0:yt.link}}),ie=new J({props:{assignment:"Invocation",name:((Tt=(Et=(wt=t[5])==null?void 0:wt.sacrament)==null?void 0:Et.invocation)==null?void 0:Tt.name)??"",details:((Ht=(Dt=(Lt=t[5])==null?void 0:Lt.sacrament)==null?void 0:Dt.invocation)==null?void 0:Ht.details)??""}}),oe=new J({props:{assignment:"Ward Business",name:((Mt=(At=(It=t[5])==null?void 0:It.sacrament)==null?void 0:At.conducting)==null?void 0:Mt.name)??"",details:((Ct=(Bt=(Vt=t[5])==null?void 0:Vt.sacrament)==null?void 0:Bt.conducting)==null?void 0:Ct.details)??""}}),me=new J({props:{assignment:"Stake Business",name:((Rt=(Pt=t[5])==null?void 0:Pt.stakeBusinessAssignment)==null?void 0:Rt.name)??"",details:((qt=(Nt=t[5])==null?void 0:Nt.stakeBusinessAssignment)==null?void 0:qt.details)??""}}),fe=new Te({props:{assignment:"Sacrament Hymn",title:(zt=(Ot=(jt=t[5])==null?void 0:jt.sacrament)==null?void 0:Ot.sacramentSong)==null?void 0:zt.title,page:(Ft=(Wt=(Ut=t[5])==null?void 0:Ut.sacrament)==null?void 0:Wt.sacramentSong)==null?void 0:Ft.page,language:(Kt=(Jt=(Gt=t[5])==null?void 0:Gt.sacrament)==null?void 0:Jt.sacramentSong)==null?void 0:Kt.language,link:(Yt=(Xt=(Qt=t[5])==null?void 0:Qt.sacrament)==null?void 0:Xt.sacramentSong)==null?void 0:Yt.link}});const qe=[Pn,Cn],ae=[];function je(i,$){return i[1]?0:1}return z=je(t),U=ae[z]=qe[z](t),ue=new Te({props:{assignment:"Closing Hymn",title:(en=(xt=(Zt=t[5])==null?void 0:Zt.sacrament)==null?void 0:xt.closingSong)==null?void 0:en.title,page:(an=(nn=(tn=t[5])==null?void 0:tn.sacrament)==null?void 0:nn.closingSong)==null?void 0:an.page,language:(ln=(rn=(sn=t[5])==null?void 0:sn.sacrament)==null?void 0:rn.closingSong)==null?void 0:ln.language,link:(fn=(mn=(on=t[5])==null?void 0:on.sacrament)==null?void 0:mn.closingSong)==null?void 0:fn.link}}),ce=new J({props:{assignment:"Benediction",name:((cn=(un=(gn=t[5])==null?void 0:gn.sacrament)==null?void 0:un.benediction)==null?void 0:cn.name)??"",details:((_n=(pn=(dn=t[5])==null?void 0:dn.sacrament)==null?void 0:pn.benediction)==null?void 0:_n.details)??""}}),{c(){e=b("div"),a=b("p"),n=V("Lehi 31st Ward | Lehi Utah 3rd Stake (Tongan)"),g=b("br"),m=y(),o=b("small"),d=V(t[6]),l=V(`,
			`),_=V(t[3]),c=V(" to "),S=V(t[2]),r=V(`,
			`),f=b("a"),T=V(s),L=y(),D=b("div"),C(A.$$.fragment),W=y(),C(q.$$.fragment),de=y(),C(G.$$.fragment),Q=y(),C(j.$$.fragment),_e=y(),O=b("div"),C(le.$$.fragment),Ie=y(),C(ie.$$.fragment),Ae=y(),C(oe.$$.fragment),Me=y(),C(me.$$.fragment),he=y(),X=b("div"),C(fe.$$.fragment),Ve=y(),ge=b("div"),ge.innerHTML=Re,$e=y(),ee=b("div"),U.c(),ve=y(),Y=b("div"),C(ue.$$.fragment),Be=y(),C(ce.$$.fragment),be=y(),te=b("figure"),te.innerHTML=Ne,this.h()},l(i){e=k(i,"DIV",{class:!0});var $=M(e);a=k($,"P",{});var Z=M(a);n=B(Z,"Lehi 31st Ward | Lehi Utah 3rd Stake (Tongan)"),g=k(Z,"BR",{}),m=w(Z),o=k(Z,"SMALL",{});var F=M(o);d=B(F,t[6]),l=B(F,`,
			`),_=B(F,t[3]),c=B(F," to "),S=B(F,t[2]),r=B(F,`,
			`),f=k(F,"A",{href:!0,target:!0});var pe=M(f);T=B(pe,s),pe.forEach(p),F.forEach(p),Z.forEach(p),$.forEach(p),L=w(i),D=k(i,"DIV",{class:!0});var se=M(D);P(A.$$.fragment,se),W=w(se),P(q.$$.fragment,se),de=w(se),P(G.$$.fragment,se),Q=w(se),P(j.$$.fragment,se),se.forEach(p),_e=w(i),O=k(i,"DIV",{class:!0});var re=M(O);P(le.$$.fragment,re),Ie=w(re),P(ie.$$.fragment,re),Ae=w(re),P(oe.$$.fragment,re),Me=w(re),P(me.$$.fragment,re),re.forEach(p),he=w(i),X=k(i,"DIV",{class:!0});var ke=M(X);P(fe.$$.fragment,ke),Ve=w(ke),ge=k(ke,"DIV",{class:!0,"data-svelte-h":!0}),Pe(ge)!=="svelte-1obbu0h"&&(ge.innerHTML=Re),ke.forEach(p),$e=w(i),ee=k(i,"DIV",{class:!0});var hn=M(ee);U.l(hn),hn.forEach(p),ve=w(i),Y=k(i,"DIV",{class:!0});var Se=M(Y);P(ue.$$.fragment,Se),Be=w(Se),P(ce.$$.fragment,Se),Se.forEach(p),be=w(i),te=k(i,"FIGURE",{class:!0,"data-svelte-h":!0}),Pe(te)!=="svelte-1rgged"&&(te.innerHTML=Ne),this.h()},h(){var i;E(f,"href",I=(i=t[4])==null?void 0:i.link),E(f,"target","_blank"),E(e,"class","d-flex flex-column"),E(D,"class","d-flex flex-column gap-1 border-top pt-3"),E(O,"class","d-flex flex-column gap-1 border-top pt-3"),E(ge,"class","text-center"),E(X,"class","d-flex flex-column gap-1 border-top pt-3"),E(ee,"class","d-flex flex-column gap-1 border-top pt-3"),E(Y,"class","d-flex flex-column gap-1 border-top pt-3"),E(te,"class","text-center")},m(i,$){H(i,e,$),u(e,a),u(a,n),u(a,g),u(a,m),u(a,o),u(o,d),u(o,l),u(o,_),u(o,c),u(o,S),u(o,r),u(o,f),u(f,T),H(i,L,$),H(i,D,$),R(A,D,null),u(D,W),R(q,D,null),u(D,de),R(G,D,null),u(D,Q),R(j,D,null),H(i,_e,$),H(i,O,$),R(le,O,null),u(O,Ie),R(ie,O,null),u(O,Ae),R(oe,O,null),u(O,Me),R(me,O,null),H(i,he,$),H(i,X,$),R(fe,X,null),u(X,Ve),u(X,ge),H(i,$e,$),H(i,ee,$),ae[z].m(ee,null),H(i,ve,$),H(i,Y,$),R(ue,Y,null),u(Y,Be),R(ce,Y,null),H(i,be,$),H(i,te,$),ne=!0},p(i,[$]){var F,pe;(!ne||$&8)&&K(_,i[3]),(!ne||$&4)&&K(S,i[2]),(!ne||$&16)&&s!==(s=((F=i[4])==null?void 0:F.reference)+"")&&K(T,s),(!ne||$&16&&I!==(I=(pe=i[4])==null?void 0:pe.link))&&E(f,"href",I);let Z=z;z=je(i),z===Z?ae[z].p(i,$):(we(),v(ae[Z],1,1,()=>{ae[Z]=null}),Ee(),U=ae[z],U?U.p(i,$):(U=ae[z]=qe[z](i),U.c()),h(U,1),U.m(ee,null))},i(i){ne||(h(A.$$.fragment,i),h(q.$$.fragment,i),h(G.$$.fragment,i),h(j.$$.fragment,i),h(le.$$.fragment,i),h(ie.$$.fragment,i),h(oe.$$.fragment,i),h(me.$$.fragment,i),h(fe.$$.fragment,i),h(U),h(ue.$$.fragment,i),h(ce.$$.fragment,i),ne=!0)},o(i){v(A.$$.fragment,i),v(q.$$.fragment,i),v(G.$$.fragment,i),v(j.$$.fragment,i),v(le.$$.fragment,i),v(ie.$$.fragment,i),v(oe.$$.fragment,i),v(me.$$.fragment,i),v(fe.$$.fragment,i),v(U),v(ue.$$.fragment,i),v(ce.$$.fragment,i),ne=!1},d(i){i&&(p(e),p(L),p(D),p(_e),p(O),p(he),p(X),p($e),p(ee),p(ve),p(Y),p(be),p(te)),N(A),N(q),N(G),N(j),N(le),N(ie),N(oe),N(me),N(fe),ae[z].d(),N(ue),N(ce)}}}function Nn(t,e,a){var D,A,W,q,de,G;let n,g,m,o,d;const l=Dn,_=new Date,c=En(_),S=Ln(_),f=Tn(c?_:S,"cccc dd MMM"),s=(D=l==null?void 0:l.sacrament)==null?void 0:D.speakers,T=s==null?void 0:s.filter(Q=>Q.beforeRestHymn),I=s==null?void 0:s.filter(Q=>!Q.beforeRestHymn),L=Q=>{let j="Speaker";switch(Q){case"narrator":j="Narrator";break;case"musical":j="Musical Number";break;case"testimony":j="Testimony";break;case"speaker":default:j="Speaker";break}return j};return a(4,n=(A=l==null?void 0:l.sacrament)==null?void 0:A.address),a(3,g=(W=l==null?void 0:l.sacrament)==null?void 0:W.startTime),a(2,m=(q=l==null?void 0:l.sacrament)==null?void 0:q.endTime),a(1,o=(de=l==null?void 0:l.sacrament)==null?void 0:de.testimonySunday),a(0,d=(G=l==null?void 0:l.sacrament)==null?void 0:G.restSong),[d,o,m,g,n,l,f,T,I,L]}class qn extends De{constructor(e){super(),He(this,e,Nn,Rn,Le,{})}}function jn(t){let e,a;return e=new qn({}),{c(){C(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,g){R(e,n,g),a=!0},i(n){a||(h(e.$$.fragment,n),a=!0)},o(n){v(e.$$.fragment,n),a=!1},d(n){N(e,n)}}}function On(t){let e,a;return e=new Hn({props:{pageTitle:"Sacrament Program",$$slots:{default:[jn]},$$scope:{ctx:t}}}),{c(){C(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,g){R(e,n,g),a=!0},p(n,[g]){const m={};g&1&&(m.$$scope={dirty:g,ctx:n}),e.$set(m)},i(n){a||(h(e.$$.fragment,n),a=!0)},o(n){v(e.$$.fragment,n),a=!1},d(n){N(e,n)}}}class Kn extends De{constructor(e){super(),He(this,e,null,On,Le,{})}}export{Kn as component,Jn as universal};
