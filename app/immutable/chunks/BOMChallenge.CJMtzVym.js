import{s as S,n as M,o as x}from"./scheduler.CPYPM6N8.js";import{S as A,i as R,e as g,s as E,b as m,p as I,g as D,d as p,f as h,j as y,k as q,r as a,x as N,n as w,q as B,y as C}from"./index.cGUdpT_F.js";import{e as O}from"./Header.DOr5sb0-.js";import{S as U}from"./data.1x9a8ANf.js";function V(o,e,i){const u=o.slice();return u[0]=e[i],u}function W(o){let e,i,u=o[0].day+"",d,r,l,b=o[0].date+"",k,f,v,c=o[0].reading+"",t,_;return{c(){e=g("tr"),i=g("td"),d=w(u),r=E(),l=g("td"),k=w(b),f=E(),v=g("td"),t=w(c),_=E(),this.h()},l(s){e=m(s,"TR",{class:!0});var n=p(e);i=m(n,"TD",{class:!0});var T=p(i);d=B(T,u),T.forEach(h),r=D(n),l=m(n,"TD",{class:!0});var H=p(l);k=B(H,b),H.forEach(h),f=D(n),v=m(n,"TD",{class:!0});var L=p(v);t=B(L,c),L.forEach(h),_=D(n),n.forEach(h),this.h()},h(){y(i,"class","day-col svelte-1cl9gk3"),y(l,"class","date-col svelte-1cl9gk3"),y(v,"class","reading-col svelte-1cl9gk3"),y(e,"class","svelte-1cl9gk3"),C(e,"is-yesterday",o[0].isYesterday),C(e,"is-weekend",o[0].isWeekend),C(e,"is-today",o[0].isToday)},m(s,n){q(s,e,n),a(e,i),a(i,d),a(e,r),a(e,l),a(l,k),a(e,f),a(e,v),a(v,t),a(e,_)},p:M,d(s){s&&h(e)}}}function Y(o){let e,i=`<blockquote class="blockquote"><p>When I think of the Book of Mormon, I think of the word power. The truths of the Book of
			Mormon have the power to heal, conform, restore, succor, strengthen, console, and cheer our
			souls</p></blockquote> <figcaption class="blockquote-footer"><cite title="Source Title">President Russel M. Nelson</cite></figcaption>`,u,d,r,l,b='<tr><th class="day-col svelte-1cl9gk3">Day</th> <th class="date-col svelte-1cl9gk3">Date</th> <th class="reading-col svelte-1cl9gk3">Reading</th></tr>',k,f,v=O(U),c=[];for(let t=0;t<v.length;t+=1)c[t]=W(V(o,v,t));return{c(){e=g("figure"),e.innerHTML=i,u=E(),d=g("div"),r=g("table"),l=g("thead"),l.innerHTML=b,k=E(),f=g("tbody");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){e=m(t,"FIGURE",{"data-svelte-h":!0}),I(e)!=="svelte-3uif0y"&&(e.innerHTML=i),u=D(t),d=m(t,"DIV",{class:!0});var _=p(d);r=m(_,"TABLE",{class:!0});var s=p(r);l=m(s,"THEAD",{"data-svelte-h":!0}),I(l)!=="svelte-155hiwq"&&(l.innerHTML=b),k=D(s),f=m(s,"TBODY",{class:!0});var n=p(f);for(let T=0;T<c.length;T+=1)c[T].l(n);n.forEach(h),s.forEach(h),_.forEach(h),this.h()},h(){y(f,"class","svelte-1cl9gk3"),y(r,"class","table svelte-1cl9gk3"),y(d,"class","schedule-wrapper svelte-1cl9gk3")},m(t,_){q(t,e,_),q(t,u,_),q(t,d,_),a(d,r),a(r,l),a(r,k),a(r,f);for(let s=0;s<c.length;s+=1)c[s]&&c[s].m(f,null)},p:M,i:M,o:M,d(t){t&&(h(e),h(u),h(d)),N(c,t)}}}function $(o){return x(()=>{setTimeout(()=>{document.getElementsByClassName("is-yesterday")[0].scrollIntoView({behavior:"smooth"})},1e3)}),[]}class z extends A{constructor(e){super(),R(this,e,$,Y,S,{})}}export{z as B};