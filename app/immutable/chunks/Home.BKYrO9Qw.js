import{s as L,n as d,b as j}from"./scheduler.DcEkuL-l.js";import{S as A,i as U,e as g,c as h,g as T,h as b,j as S,f as v,s as $,o as y,b as W,d as k,q as w,k as p,r as x,t as H,a as M,v as C}from"./index.tXRonzTj.js";import{g as B}from"./app.state.DGPW17o0.js";import{A as V}from"./Announcements.BjjQqs-u.js";import{i as P}from"./Header.CMZQP-_1.js";function R(i){let t,a=`<div class="card-header">Ward Information</div> <ul class="list-group list-group-flush"><li class="list-group-item"><strong><small>Chapel Address</small></strong><br/> <a href="https://goo.gl/maps/TLrPMMT1CpjijHnE7" target="_blank">220 W 200 S, Lehi<br/>
				UT 84043<br/>
				United States</a></li> <li class="list-group-item"><strong><small>To setup appointments with Bishop contact:</small></strong><br/>
			Bro. Jackson Kaka | <a href="sms:8082215512" target="_blank">808-221-5512</a></li></ul>`;return{c(){t=g("div"),t.innerHTML=a,this.h()},l(e){t=h(e,"DIV",{class:!0,"data-svelte-h":!0}),T(t)!=="svelte-rgsafd"&&(t.innerHTML=a),this.h()},h(){b(t,"class","card")},m(e,l){S(e,t,l)},p:d,i:d,o:d,d(e){e&&v(t)}}}class q extends A{constructor(t){super(),U(this,t,null,R,L,{})}}function E(i){let t,a=`<div class="card-header">Stake Information</div> <ul class="list-group list-group-flush"><li class="list-group-item"><small>Stake Center Address</small><br/> <a href="https://goo.gl/maps/kjrbeY8Cmn63pyan6" target="_blank">680 N 350 W,<br/>
				American Fork, UT 84003<br/>
				United States</a></li> <li class="list-group-item"><strong><small>To setup appointments with Stake for Temple Recommend contact:</small></strong><br/>
			Bro. Wayland Pili | <a href="sms:7022904155" target="_blank">702-290-4155</a></li> <li class="list-group-item"><strong><small>To setup appointments with Stake President contact:</small></strong><br/>
			Bro. David Takapu | <a href="sms:6502916760" target="_blank">650-291-6760</a></li></ul>`;return{c(){t=g("div"),t.innerHTML=a,this.h()},l(e){t=h(e,"DIV",{class:!0,"data-svelte-h":!0}),T(t)!=="svelte-1rrbkwu"&&(t.innerHTML=a),this.h()},h(){b(t,"class","card")},m(e,l){S(e,t,l)},p:d,i:d,o:d,d(e){e&&v(t)}}}class F extends A{constructor(t){super(),U(this,t,null,E,L,{})}}function D(i){let t,a='<ul class="list-group list-group-flush"><li class="list-group-item d-flex align-items-center justify-content-between"><div>Sacrament Program</div> <a href="/sacrament-program" class="btn btn-sm btn-primary"><i class="bi bi-link"></i></a></li></ul>';return{c(){t=g("div"),t.innerHTML=a,this.h()},l(e){t=h(e,"DIV",{class:!0,"data-svelte-h":!0}),T(t)!=="svelte-1wjrnei"&&(t.innerHTML=a),this.h()},h(){b(t,"class","card")},m(e,l){S(e,t,l)},d(e){e&&v(t)}}}function J(i){let t,a,e,l='<ul class="list-group list-group-flush"><li class="list-group-item d-flex align-items-center justify-content-between"><div>Ward Book of Mormon Challenge Schedule</div> <a href="/bom-challenge" class="btn btn-sm btn-primary"><i class="bi bi-link"></i></a></li></ul>',u,m,f,o,I,c,_,n=(i[4]||i[0]||i[1])&&D();return m=new V({}),o=new q({}),c=new F({}),{c(){t=g("div"),n&&n.c(),a=$(),e=g("div"),e.innerHTML=l,u=$(),y(m.$$.fragment),f=$(),y(o.$$.fragment),I=$(),y(c.$$.fragment),this.h()},l(s){t=h(s,"DIV",{class:!0});var r=W(t);n&&n.l(r),a=k(r),e=h(r,"DIV",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-umi22m"&&(e.innerHTML=l),u=k(r),w(m.$$.fragment,r),f=k(r),w(o.$$.fragment,r),I=k(r),w(c.$$.fragment,r),r.forEach(v),this.h()},h(){b(e,"class","card"),b(t,"class","d-flex flex-column gap-4")},m(s,r){S(s,t,r),n&&n.m(t,null),p(t,a),p(t,e),p(t,u),x(m,t,null),p(t,f),x(o,t,null),p(t,I),x(c,t,null),_=!0},p(s,[r]){s[4]||s[0]||s[1]?n||(n=D(),n.c(),n.m(t,a)):n&&(n.d(1),n=null)},i(s){_||(H(m.$$.fragment,s),H(o.$$.fragment,s),H(c.$$.fragment,s),_=!0)},o(s){M(m.$$.fragment,s),M(o.$$.fragment,s),M(c.$$.fragment,s),_=!1},d(s){s&&v(t),n&&n.d(),C(m),C(o),C(c)}}}function K(i,t,a){let e,l;const{stores:{currentUserIsAdmin:u,currentUserIsRoot:m}}=B();j(i,u,o=>a(0,e=o)),j(i,m,o=>a(1,l=o));const f=P(new Date);return[e,l,u,m,f]}class Q extends A{constructor(t){super(),U(this,t,K,J,L,{})}}export{Q as H};