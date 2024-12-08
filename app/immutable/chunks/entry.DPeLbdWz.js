import{t as ot}from"./scheduler.C8jfK40o.js";import{w as pe}from"./index.BO5Edc8W.js";new URL("sveltekit-internal://");function st(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function it(e){return e.split("%25").map(decodeURI).join("%25")}function ct(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function ce({href:e}){return e.split("#")[0]}const lt=["href","pathname","search","toString","toJSON"];function ft(e,t,n){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(n(s),a[o](s));t();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of lt)Object.defineProperty(r,a,{get(){return t(),e[a]},enumerable:!0,configurable:!0});return r}const ut="/__data.json",dt=".html__data.json";function ht(e){return e.endsWith(".html")?e.replace(/\.html$/,dt):e.replace(/\/$/,"")+ut}function pt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function gt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const Ne=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&V.delete(ge(e)),Ne(e,t));const V=new Map;function _t(e,t){const n=ge(e,t),r=document.querySelector(n);if(r?.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&V.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=gt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,t)}function mt(e,t,n){if(V.size>0){const r=ge(e,n),a=V.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(a.body,a.init);V.delete(r)}}return window.fetch(t,n)}function ge(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${pt(...a)}"]`}return r}const yt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function wt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${bt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return t.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return le(String.fromCharCode(...c.slice(2).split("-").map(g=>parseInt(g,16))));const d=yt.exec(c),[,p,u,f,h]=d;return t.push({name:f,matcher:h,optional:!!p,rest:!!u,chained:u?l===1&&i[0]==="":!1}),u?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return le(c)}).join("")}).join("")}/?$`),params:t}}function vt(e){return!/^\([^)]+\)$/.test(e)}function bt(e){return e.slice(1).split("/").filter(vt)}function At(e,t,n){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<t.length;s+=1){const c=t[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=t[s+1],p=a[s+1];d&&!d.rest&&d.optional&&p&&c.chained&&(i=0),!d&&!p&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function kt({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([s,[c,l,d]])=>{const{pattern:p,params:u}=wt(s),f={id:s,exec:h=>{const g=p.exec(h);if(g)return At(g,u,r)},errors:[1,...d||[]].map(h=>e[h]),layouts:[0,...l||[]].map(i),leaf:o(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function Oe(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Se(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const I=globalThis.__sveltekit_l8l4gi?.base??"",Et=globalThis.__sveltekit_l8l4gi?.assets??I,St="1733678850858",je="sveltekit:snapshot",De="sveltekit:scroll",$e="sveltekit:states",Rt="sveltekit:pageurl",N="sveltekit:history",G="sveltekit:navigation",Y={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},H=location.origin;function Fe(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function _e(){return{x:pageXOffset,y:pageYOffset}}function x(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Re={...Y,"":Y.hover};function Ve(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Be(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ve(e)}}function ue(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!r||ne(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=n?.origin===H&&e.hasAttribute("download");return{url:n,external:a,target:r,download:o}}function J(e){let t=null,n=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=x(s,"preload-code")),a===null&&(a=x(s,"preload-data")),t===null&&(t=x(s,"keepfocus")),n===null&&(n=x(s,"noscroll")),o===null&&(o=x(s,"reload")),i===null&&(i=x(s,"replacestate")),s=Ve(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Re[r??"off"],preload_data:Re[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(o),replace_state:c(i)}}function Ie(e){const t=pe(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function o(i){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function It(){const{set:e,subscribe:t}=pe(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Et}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==St;return i&&(e(!0),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function ne(e,t){return e.origin!==H||!e.pathname.startsWith(t)}function Te(e){const t=Ut(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const Tt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ut(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=Tt.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const Lt=-1,Pt=-2,xt=-3,Ct=-4,Nt=-5,Ot=-6;function jt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(o,i=!1){if(o===Lt)return;if(o===xt)return NaN;if(o===Ct)return 1/0;if(o===Nt)return-1/0;if(o===Ot)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=t?.[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let f=1;f<s.length;f+=1)d.add(a(s[f]));break;case"Map":const p=new Map;r[o]=p;for(let f=1;f<s.length;f+=2)p.set(a(s[f]),a(s[f+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const u=Object.create(null);r[o]=u;for(let f=1;f<s.length;f+=2)u[s[f]]=a(s[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],h=s[1],g=Te(h),k=new f(g);r[o]=k;break}case"ArrayBuffer":{const f=s[1],h=Te(f);r[o]=h;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==Pt&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const Ge=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ge];const Dt=new Set([...Ge]);[...Dt];function $t(e){return e.filter(t=>t!=null)}class re{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class qe{constructor(t,n){this.status=t,this.location=n}}class me extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Ft="x-sveltekit-invalidated",Vt="x-sveltekit-trailing-slash";function z(e){return e instanceof re||e instanceof me?e.status:500}function Bt(e){return e instanceof me?e.text:"Internal Error"}const P=Oe(De)??{},q=Oe(je)??{},L={url:Ie({}),page:Ie({}),navigating:pe(null),updated:It()};function ye(e){P[e]=_e()}function Gt(e,t){let n=e+1;for(;P[n];)delete P[n],n+=1;for(n=t+1;q[n];)delete q[n],n+=1}function j(e){return location.href=e.href,new Promise(()=>{})}async function Me(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(I||"/");e&&await e.update()}}function Ue(){}let ae,de,X,T,he,D;const He=[],Z=[];let U=null;const Ke=[],qt=[];let C=[],m={branch:[],error:null,url:null},we=!1,Q=!1,Le=!0,M=!1,F=!1,We=!1,ve=!1,be,v,R,S,ee;const B=new Set;async function tn(e,t,n){document.URL!==location.href&&(location.href=location.href),D=e,ae=kt(e),T=document.documentElement,he=t,de=e.nodes[0],X=e.nodes[1],de(),X(),v=history.state?.[N],R=history.state?.[G],v||(v=R=Date.now(),history.replaceState({...history.state,[N]:v,[G]:R},""));const r=P[v];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Xt(he,n):Jt(location.href,{replaceState:!0}),zt()}function Mt(){He.length=0,ve=!1}function Ye(e){Z.some(t=>t?.snapshot)&&(q[e]=Z.map(t=>t?.snapshot?.capture()))}function Je(e){q[e]?.forEach((t,n)=>{Z[n]?.snapshot?.restore(t)})}function Pe(){ye(v),Se(De,P),Ye(R),Se(je,q)}async function ze(e,t,n,r){return W({type:"goto",url:Fe(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(ve=!0)}})}async function Ht(e){if(e.id!==U?.id){const t={};B.add(t),U={id:e.id,token:t,promise:Ze({...e,preload:t}).then(n=>(B.delete(t),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function fe(e){const t=ae.find(n=>n.exec(Qe(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function Xe(e,t,n){m=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),S=e.props.page,be=new D.root({target:t,props:{...e.props,stores:L,components:Z},hydrate:n,sync:!1}),Je(R);const a={from:null,to:{params:m.params,route:{id:m.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};C.forEach(o=>o(a)),Q=!0}function te({url:e,params:t,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(I&&(e.pathname===I||e.pathname===I+"/"))s="always";else for(const f of n)f?.slash!==void 0&&(s=f.slash);e.pathname=st(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:o},props:{constructors:$t(n).map(f=>f.node.component),page:S}};i!==void 0&&(c.props.form=i);let l={},d=!S,p=0;for(let f=0;f<Math.max(n.length,m.branch.length);f+=1){const h=n[f],g=m.branch[f];h?.data!==g?.data&&(d=!0),h&&(l={...l,...h.data},d&&(c.props[`data_${p}`]=l),p+=1)}return(!m.url||e.href!==m.url.href||m.error!==a||i!==void 0&&i!==S.form||d)&&(c.props.page={error:a,params:t,route:{id:o?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:S.data}),c}async function Ae({loader:e,parent:t,url:n,params:r,route:a,server_data_node:o}){let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(l.universal?.load){let d=function(...u){for(const f of u){const{href:h}=new URL(f,n);c.dependencies.add(h)}};const p={route:new Proxy(a,{get:(u,f)=>(s&&(c.route=!0),u[f])}),params:new Proxy(r,{get:(u,f)=>(s&&c.params.add(f),u[f])}),data:o?.data??null,url:ft(n,()=>{s&&(c.url=!0)},u=>{s&&c.search_params.add(u)}),async fetch(u,f){let h;u instanceof Request?(h=u.url,f={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...f}):h=u;const g=new URL(h,n);return s&&d(g.href),g.origin===n.origin&&(h=g.href.slice(n.origin.length)),Q?mt(h,g.href,f):_t(h,f)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),t()},untrack(u){s=!1;try{return u()}finally{s=!0}}};i=await l.universal.load.call(null,p)??null}return{node:l,loader:e,server:o,universal:l.universal?.load?{type:"data",data:i,uses:c}:null,data:i??o?.data??null,slash:l.universal?.trailingSlash??o?.slash}}function xe(e,t,n,r,a,o){if(ve)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==m.params[i])return!0;for(const i of a.dependencies)if(He.some(s=>s(new URL(i))))return!0;return!1}function ke(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function Kt(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),o=t.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function Ce({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:S,constructors:[]}}}async function Ze({id:e,invalidating:t,url:n,params:r,route:a,preload:o}){if(U?.id===e)return B.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(_=>_?.().catch(()=>{})),l.forEach(_=>_?.[1]().catch(()=>{}));let d=null;const p=m.url?e!==m.url.pathname+m.url.search:!1,u=m.route?a.id!==m.route.id:!1,f=Kt(m.url,n);let h=!1;const g=l.map((_,y)=>{const E=m.branch[y],b=!!_?.[0]&&(E?.loader!==_[1]||xe(h,u,p,f,E.server?.uses,r));return b&&(h=!0),b});if(g.some(Boolean)){try{d=await nt(n,g)}catch(_){const y=await O(_,{url:n,params:r,route:{id:e}});return B.has(o)?Ce({error:y,url:n,params:r,route:a}):oe({status:z(_),error:y,url:n,route:a})}if(d.type==="redirect")return d}const k=d?.nodes;let A=!1;const $=l.map(async(_,y)=>{if(!_)return;const E=m.branch[y],b=k?.[y];if((!b||b.type==="skip")&&_[1]===E?.loader&&!xe(A,u,p,f,E.universal?.uses,r))return E;if(A=!0,b?.type==="error")throw b;return Ae({loader:_[1],url:n,params:r,route:a,parent:async()=>{const se={};for(let ie=0;ie<y;ie+=1)Object.assign(se,(await $[ie])?.data);return se},server_data_node:ke(b===void 0&&_[0]?{type:"skip"}:b??null,_[0]?E?.server:void 0)})});for(const _ of $)_.catch(()=>{});const w=[];for(let _=0;_<l.length;_+=1)if(l[_])try{w.push(await $[_])}catch(y){if(y instanceof qe)return{type:"redirect",location:y.location};if(B.has(o))return Ce({error:await O(y,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let E=z(y),b;if(k?.includes(y))E=y.status??E,b=y.error;else if(y instanceof re)b=y.body;else{if(await L.updated.check())return await Me(),await j(n);b=await O(y,{params:r,url:n,route:{id:a.id}})}const K=await Wt(_,w,i);return K?te({url:n,params:r,branch:w.slice(0,K.idx).concat(K.node),status:E,error:b,route:a}):await tt(n,{id:a.id},b,E)}else w.push(void 0);return te({url:n,params:r,branch:w,status:200,error:null,route:a,form:t?void 0:null})}async function Wt(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:e,error:t,url:n,route:r}){const a={};let o=null;if(D.server_loads[0]===0)try{const l=await nt(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==H||n.pathname!==location.pathname||we)&&await j(n)}const s=await Ae({loader:de,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:ke(o)}),c={node:await X(),loader:X,universal:null,server:null,data:null};return te({url:n,params:a,branch:[s,c],status:e,error:t,route:null})}function Ee(e,t){if(!e||ne(e,I))return;let n;try{n=D.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=Qe(n);for(const a of ae){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:t,route:a,params:ct(o),url:e}}}function Qe(e){return it(e.slice(I.length)||"/")}function et({url:e,type:t,intent:n,delta:r}){let a=!1;const o=at(m,n,e,t);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return M||Ke.forEach(s=>s(i)),a?null:o}async function W({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Ue,block:d=Ue}){const p=Ee(t,!1),u=et({url:t,type:e,delta:n?.delta,intent:p});if(!u){d();return}const f=v,h=R;l(),M=!0,Q&&L.navigating.set(u.navigation),ee=c;let g=p&&await Ze(p);if(!g){if(ne(t,I))return await j(t);g=await tt(t,{id:null},await O(new me(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=p?.url||t,ee!==c)return u.reject(new Error("navigation aborted")),!1;if(g.type==="redirect")if(s>=20)g=await oe({status:500,error:await O(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ze(new URL(g.location,t).href,{},s+1,c),!1;else g.props.page.status>=400&&await L.updated.check()&&(await Me(),await j(t));if(Mt(),ye(f),Ye(h),g.props.page.url.pathname!==t.pathname&&(t.pathname=g.props.page.url.pathname),i=n?n.state:i,!n){const w=o?0:1,_={[N]:v+=w,[G]:R+=w,[$e]:i};(o?history.replaceState:history.pushState).call(history,_,"",t),o||Gt(v,R)}if(U=null,g.props.page.state=i,Q){m=g.state,g.props.page&&(g.props.page.url=t);const w=(await Promise.all(qt.map(_=>_(u.navigation)))).filter(_=>typeof _=="function");if(w.length>0){let _=function(){C=C.filter(y=>!w.includes(y))};w.push(_),C.push(...w)}be.$set(g.props),We=!0}else Xe(g,he,!1);const{activeElement:k}=document;await ot();const A=n?n.scroll:a?_e():null;if(Le){const w=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));A?scrollTo(A.x,A.y):w?w.scrollIntoView():scrollTo(0,0)}const $=document.activeElement!==k&&document.activeElement!==document.body;!r&&!$&&Zt(),Le=!0,g.props.page&&(S=g.props.page),M=!1,e==="popstate"&&Je(R),u.fulfil(void 0),C.forEach(w=>w(u.navigation)),L.navigating.set(null)}async function tt(e,t,n,r){return e.origin===H&&e.pathname===location.pathname&&!we?await oe({status:r,error:n,url:e,route:t}):await j(e)}function Yt(){let e;T.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(o){r(o.composedPath()[0],1)}T.addEventListener("mousedown",t),T.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(fe(i.target.href),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=Be(o,T);if(!s)return;const{url:c,external:l,download:d}=ue(s,I);if(l||d)return;const p=J(s),u=c&&m.url.pathname+m.url.search===c.pathname+c.search;if(!p.reload&&!u)if(i<=p.preload_data){const f=Ee(c,!1);f&&Ht(f)}else i<=p.preload_code&&fe(c.pathname)}function a(){n.disconnect();for(const o of T.querySelectorAll("a")){const{url:i,external:s,download:c}=ue(o,I);if(s||c)continue;const l=J(o);l.reload||(l.preload_code===Y.viewport&&n.observe(o),l.preload_code===Y.eager&&fe(i.pathname))}}C.push(a),a()}function O(e,t){if(e instanceof re)return e.body;const n=z(e),r=Bt(e);return D.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Jt(e,t={}){return e=Fe(e),e.origin!==H?Promise.reject(new Error("goto: invalid URL")):ze(e,t,0)}function zt(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Pe(),!M){const r=at(m,void 0,null,"leave"),a={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};Ke.forEach(o=>o(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Pe()}),navigator.connection?.saveData||Yt(),T.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Be(t.composedPath()[0],T);if(!n)return;const{url:r,external:a,target:o,download:i}=ue(n,I);if(!r)return;if(o==="_parent"||o==="_top"){if(window.parent!==window)return}else if(o&&o!=="_self")return;const s=J(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;if(a||s.reload){et({url:r,type:"link"})?M=!0:t.preventDefault();return}const[l,d]=r.href.split("#");if(d!==void 0&&l===ce(location)){const[,p]=m.url.href.split("#");if(p===d){t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):n.ownerDocument.getElementById(decodeURIComponent(d))?.scrollIntoView();return}if(F=!0,ye(v),e(r),!s.replace_state)return;F=!1}t.preventDefault(),await new Promise(p=>{requestAnimationFrame(()=>{setTimeout(p,0)}),setTimeout(p,100)}),W({type:"link",url:r,keepfocus:s.keepfocus,noscroll:s.noscroll,replace_state:s.replace_state??r.href===location.href})}),T.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formTarget||n.target)==="_blank"||(r?.formMethod||n.method)!=="get")return;const i=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(ne(i,I))return;const s=t.target,c=J(s);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(s),d=r?.getAttribute("name");d&&l.append(d,r?.getAttribute("value")??""),i.search=new URLSearchParams(l).toString(),W({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[N]){const n=t.state[N];if(ee={},n===v)return;const r=P[n],a=t.state[$e]??{},o=new URL(t.state[Rt]??location.href),i=t.state[G],s=ce(location)===ce(m.url);if(i===R&&(We||s)){e(o),P[v]=_e(),r&&scrollTo(r.x,r.y),a!==S.state&&(S={...S,state:a},be.$set({page:S})),v=n;return}const l=n-v;await W({type:"popstate",url:o,popped:{state:a,scroll:r,delta:l},accept:()=>{v=n,R=i},block:()=>{history.go(-l)},nav_token:ee})}else if(!F){const n=new URL(location.href);e(n)}}),addEventListener("hashchange",()=>{F&&(F=!1,history.replaceState({...history.state,[N]:++v,[G]:R},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&L.navigating.set(null)});function e(t){m.url=t,L.page.set({...S,url:t}),L.page.notify()}}async function Xt(e,{status:t=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){we=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Ee(c,!1)||{});let l;try{const d=r.map(async(f,h)=>{const g=i[h];return g?.uses&&(g.uses=rt(g.uses)),Ae({loader:D.nodes[f],url:c,params:a,route:o,parent:async()=>{const k={};for(let A=0;A<h;A+=1)Object.assign(k,(await d[A]).data);return k},server_data_node:ke(g)})}),p=await Promise.all(d),u=ae.find(({id:f})=>f===o.id);if(u){const f=u.layouts;for(let h=0;h<f.length;h++)f[h]||p.splice(h,0,void 0)}l=te({url:c,params:a,branch:p,status:t,error:n,form:s,route:u??null})}catch(d){if(d instanceof qe){await j(new URL(d.location,location.href));return}l=await oe({status:z(d),error:await O(d,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),Xe(l,e,!0)}async function nt(e,t){const n=new URL(e);n.pathname=ht(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Vt,"1"),n.searchParams.append(Ft,t.map(a=>a?"1":"0").join(""));const r=await Ne(n.href);if(!r.ok){let a;throw r.headers.get("content-type")?.includes("application/json")?a=await r.json():r.status===404?a="Not Found":r.status===500&&(a="Internal Error"),new re(r.status,a)}return new Promise(async a=>{const o=new Map,i=r.body.getReader(),s=new TextDecoder;function c(d){return jt(d,{Promise:p=>new Promise((u,f)=>{o.set(p,{fulfil:u,reject:f})})})}let l="";for(;;){const{done:d,value:p}=await i.read();if(d&&!l)break;for(l+=!p&&l?`
`:s.decode(p,{stream:!0});;){const u=l.indexOf(`
`);if(u===-1)break;const f=JSON.parse(l.slice(0,u));if(l=l.slice(u+1),f.type==="redirect")return a(f);if(f.type==="data")f.nodes?.forEach(h=>{h?.type==="data"&&(h.uses=rt(h.uses),h.data=c(h.data))}),a(f);else if(f.type==="chunk"){const{id:h,data:g,error:k}=f,A=o.get(h);o.delete(h),k?A.reject(c(k)):A.fulfil(c(g))}}}})}function rt(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function Zt(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function at(e,t,n,r){let a,o;const i=new Promise((c,l)=>{a=c,o=l});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:o}}export{tn as a,Jt as g,L as s};
