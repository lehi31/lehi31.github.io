import{o as Pe,t as ut}from"./DZwCP9x3.js";import{w as ye}from"./wlhN6vKE.js";new URL("sveltekit-internal://");function dt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function ht(e){return e.split("%25").map(decodeURI).join("%25")}function pt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function de({href:e}){return e.split("#")[0]}function gt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return f=>(n(f),i[o](f));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}function _t(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function mt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const wt=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&B.delete(ve(e)),wt(e,t));const B=new Map;function yt(e,t){const n=ve(e,t),r=document.querySelector(n);if(r?.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&B.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=mt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function vt(e,t,n){if(B.size>0){const r=ve(e,n),a=B.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(a.body,a.init);B.delete(r)}}return window.fetch(t,n)}function ve(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${_t(...a)}"]`}return r}const bt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${St(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return he(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return he(String.fromCharCode(...c.slice(2).split("-").map(m=>parseInt(m,16))));const u=bt.exec(c),[,h,d,l,p]=u;return t.push({name:l,matcher:p,optional:!!h,rest:!!d,chained:d?f===1&&i[0]==="":!1}),d?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return he(c)}).join("")}).join("")}/?$`),params:t}}function kt(e){return!/^\([^)]+\)$/.test(e)}function St(e){return e.slice(1).split("/").filter(kt)}function Et(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let f=a[o-i];if(c.chained&&c.rest&&i&&(f=a.slice(o-i,o+1).filter(u=>u).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){r[c.name]=f;const u=t[o+1],h=a[o+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function he(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Rt({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,f,u]])=>{const{pattern:h,params:d}=At(o),l={id:o,exec:p=>{const m=h.exec(p);if(m)return Et(m,d,r)},errors:[1,...u||[]].map(p=>e[p]),layouts:[0,...f||[]].map(i),leaf:s(c)};return l.errors.length=l.layouts.length=Math.max(l.errors.length,l.layouts.length),l});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function Me(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Ce(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const U=globalThis.__sveltekit_jazhcl?.base??"",It=globalThis.__sveltekit_jazhcl?.assets??U,Ut="1744783714901",qe="sveltekit:snapshot",Ge="sveltekit:scroll",He="sveltekit:states",Lt="sveltekit:pageurl",j="sveltekit:history",G="sveltekit:navigation",C={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Y=location.origin;function Ke(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function be(){return{x:pageXOffset,y:pageYOffset}}function $(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Oe={...C,"":C.hover};function We(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Ye(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=We(e)}}function _e(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||se(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=r?.origin===Y&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function Z(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=$(o,"preload-code")),a===null&&(a=$(o,"preload-data")),t===null&&(t=$(o,"keepfocus")),n===null&&(n=$(o,"noscroll")),s===null&&(s=$(o,"reload")),i===null&&(i=$(o,"replacestate")),o=We(o);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Oe[r??"off"],preload_data:Oe[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Ne(e){const t=ye(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const ze={v:()=>{}};function Tt(){const{set:e,subscribe:t}=ye(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${It}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Ut;return i&&(e(!0),ze.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function se(e,t,n){return e.origin!==Y||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function gn(e){}function $e(e){const t=Pt(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const xt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Pt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=xt.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const Ct=-1,Ot=-2,Nt=-3,$t=-4,jt=-5,Dt=-6;function Ft(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===Ct)return;if(s===Nt)return NaN;if(s===$t)return 1/0;if(s===jt)return-1/0;if(s===Dt)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],f=t?.[c];if(f)return r[s]=f(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const u=new Set;r[s]=u;for(let l=1;l<o.length;l+=1)u.add(a(o[l]));break;case"Map":const h=new Map;r[s]=h;for(let l=1;l<o.length;l+=2)h.set(a(o[l]),a(o[l+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const d=Object.create(null);r[s]=d;for(let l=1;l<o.length;l+=2)d[o[l]]=a(o[l+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const l=globalThis[c],p=o[1],m=$e(p),_=new l(m);r[s]=_;break}case"ArrayBuffer":{const l=o[1],p=$e(l);r[s]=p;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let f=0;f<o.length;f+=1){const u=o[f];u!==Ot&&(c[f]=a(u))}}else{const c={};r[s]=c;for(const f in o){const u=o[f];c[f]=a(u)}}return r[s]}return a(0)}const Je=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Je];const Vt=new Set([...Je]);[...Vt];function Bt(e){return e.filter(t=>t!=null)}class ie{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Ae{constructor(t,n){this.status=t,this.location=n}}class ke extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Mt="x-sveltekit-invalidated",qt="x-sveltekit-trailing-slash";function Q(e){return e instanceof ie||e instanceof ke?e.status:500}function Gt(e){return e instanceof ke?e.text:"Internal Error"}let S,H,pe;const Ht=Pe.toString().includes("$$")||/function \w+\(\) \{\}/.test(Pe.toString());Ht?(S={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},H={current:null},pe={current:!1}):(S=new class{data=$state.raw({});form=$state.raw(null);error=$state.raw(null);params=$state.raw({});route=$state.raw({id:null});state=$state.raw({});status=$state.raw(-1);url=$state.raw(new URL("https://example.com"))},H=new class{current=$state.raw(null)},pe=new class{current=$state.raw(!1)},ze.v=()=>pe.current=!0);function Kt(e){Object.assign(S,e)}const Wt="/__data.json",Yt=".html__data.json";function zt(e){return e.endsWith(".html")?e.replace(/\.html$/,Yt):e.replace(/\/$/,"")+Wt}const Jt=new Set(["icon","shortcut icon","apple-touch-icon"]),N=Me(Ge)??{},K=Me(qe)??{},P={url:Ne({}),page:Ne({}),navigating:ye(null),updated:Tt()};function Se(e){N[e]=be()}function Xt(e,t){let n=e+1;for(;N[n];)delete N[n],n+=1;for(n=t+1;K[n];)delete K[n],n+=1}function F(e){return location.href=e.href,new Promise(()=>{})}async function Xe(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function je(){}let Ee,me,ee,T,we,v;const te=[],ne=[];let x=null;const J=new Map,Ze=new Set,Zt=new Set,M=new Set;let y={branch:[],error:null,url:null},Re=!1,re=!1,De=!0,W=!1,V=!1,Qe=!1,Ie=!1,et,A,I,O;const q=new Set;async function yn(e,t,n){document.URL!==location.href&&(location.href=location.href),v=e,await e.hooks.init?.(),Ee=Rt(e),T=document.documentElement,we=t,me=e.nodes[0],ee=e.nodes[1],me(),ee(),A=history.state?.[j],I=history.state?.[G],A||(A=I=Date.now(),history.replaceState({...history.state,[j]:A,[G]:I},""));const r=N[A];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await fn(we,n):await sn(v.hash?dn(new URL(location.href)):location.href,{replaceState:!0}),ln()}function Qt(){te.length=0,Ie=!1}function tt(e){ne.some(t=>t?.snapshot)&&(K[e]=ne.map(t=>t?.snapshot?.capture()))}function nt(e){K[e]?.forEach((t,n)=>{ne[n]?.snapshot?.restore(t)})}function Fe(){Se(A),Ce(Ge,N),tt(I),Ce(qe,K)}async function Ue(e,t,n,r){return X({type:"goto",url:Ke(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Ie=!0),t.invalidate&&t.invalidate.forEach(cn)}})}async function en(e){if(e.id!==x?.id){const t={};q.add(t),x={id:e.id,token:t,promise:ot({...e,preload:t}).then(n=>(q.delete(t),n.type==="loaded"&&n.state.error&&(x=null),n))}}return x.promise}async function ge(e){const t=(await le(e,!1))?.route;t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function rt(e,t,n){y=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(S,e.props.page),et=new v.root({target:t,props:{...e.props,stores:P,components:ne},hydrate:n,sync:!1}),nt(I);const a={from:null,to:{params:y.params,route:{id:y.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};M.forEach(s=>s(a)),re=!0}function ae({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(U&&(e.pathname===U||e.pathname===U+"/"))o="always";else for(const l of n)l?.slash!==void 0&&(o=l.slash);e.pathname=dt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:Bt(n).map(l=>l.node.component),page:xe(S)}};i!==void 0&&(c.props.form=i);let f={},u=!S,h=0;for(let l=0;l<Math.max(n.length,y.branch.length);l+=1){const p=n[l],m=y.branch[l];p?.data!==m?.data&&(u=!0),p&&(f={...f,...p.data},u&&(c.props[`data_${h}`]=f),h+=1)}return(!y.url||e.href!==y.url.href||y.error!==a||i!==void 0&&i!==S.form||u)&&(c.props.page={error:a,params:t,route:{id:s?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:u?f:S.data}),c}async function Le({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if(f.universal?.load){let u=function(...d){for(const l of d){const{href:p}=new URL(l,n);c.dependencies.add(p)}};const h={route:new Proxy(a,{get:(d,l)=>(o&&(c.route=!0),d[l])}),params:new Proxy(r,{get:(d,l)=>(o&&c.params.add(l),d[l])}),data:s?.data??null,url:gt(n,()=>{o&&(c.url=!0)},d=>{o&&c.search_params.add(d)},v.hash),async fetch(d,l){d instanceof Request&&(l={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:[...d.headers].length?d.headers:void 0,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...l});const{resolved:p,promise:m}=at(d,l,n);return o&&u(p.href),m},setHeaders:()=>{},depends:u,parent(){return o&&(c.parent=!0),t()},untrack(d){o=!1;try{return d()}finally{o=!0}}};i=await f.universal.load.call(null,h)??null}return{node:f,loader:e,server:s,universal:f.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:f.universal?.trailingSlash??s?.slash}}function at(e,t,n){let r=e instanceof Request?e.url:e;const a=new URL(r,n);a.origin===n.origin&&(r=a.href.slice(n.origin.length));const s=re?vt(r,a.href,t):yt(r,t);return{resolved:a,promise:s}}function Ve(e,t,n,r,a,s){if(Ie)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==y.params[i])return!0;for(const i of a.dependencies)if(te.some(o=>o(new URL(i))))return!0;return!1}function Te(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function tn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function Be({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:xe(S),constructors:[]}}}async function ot({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if(x?.id===e)return q.delete(x.token),x.promise;const{errors:i,layouts:o,leaf:c}=a,f=[...o,c];i.forEach(g=>g?.().catch(()=>{})),f.forEach(g=>g?.[1]().catch(()=>{}));let u=null;const h=y.url?e!==oe(y.url):!1,d=y.route?a.id!==y.route.id:!1,l=tn(y.url,n);let p=!1;const m=f.map((g,w)=>{const b=y.branch[w],k=!!g?.[0]&&(b?.loader!==g[1]||Ve(p,d,h,l,b.server?.uses,r));return k&&(p=!0),k});if(m.some(Boolean)){try{u=await ct(n,m)}catch(g){const w=await D(g,{url:n,params:r,route:{id:e}});return q.has(s)?Be({error:w,url:n,params:r,route:a}):ce({status:Q(g),error:w,url:n,route:a})}if(u.type==="redirect")return u}const _=u?.nodes;let R=!1;const E=f.map(async(g,w)=>{if(!g)return;const b=y.branch[w],k=_?.[w];if((!k||k.type==="skip")&&g[1]===b?.loader&&!Ve(R,d,h,l,b.universal?.uses,r))return b;if(R=!0,k?.type==="error")throw k;return Le({loader:g[1],url:n,params:r,route:a,parent:async()=>{const fe={};for(let ue=0;ue<w;ue+=1)Object.assign(fe,(await E[ue])?.data);return fe},server_data_node:Te(k===void 0&&g[0]?{type:"skip"}:k??null,g[0]?b?.server:void 0)})});for(const g of E)g.catch(()=>{});const L=[];for(let g=0;g<f.length;g+=1)if(f[g])try{L.push(await E[g])}catch(w){if(w instanceof Ae)return{type:"redirect",location:w.location};if(q.has(s))return Be({error:await D(w,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=Q(w),k;if(_?.includes(w))b=w.status??b,k=w.error;else if(w instanceof ie)k=w.body;else{if(await P.updated.check())return await Xe(),await F(n);k=await D(w,{params:r,url:n,route:{id:a.id}})}const z=await nn(g,L,i);return z?ae({url:n,params:r,branch:L.slice(0,z.idx).concat(z.node),status:b,error:k,route:a}):await it(n,{id:a.id},k,b)}else L.push(void 0);return ae({url:n,params:r,branch:L,status:200,error:null,route:a,form:t?void 0:null})}async function nn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:t,url:n,route:r}){const a={};let s=null;if(v.server_loads[0]===0)try{const o=await ct(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==Y||n.pathname!==location.pathname||Re)&&await F(n)}try{const o=await Le({loader:me,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Te(s)}),c={node:await ee(),loader:ee,universal:null,server:null,data:null};return ae({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof Ae)return Ue(new URL(o.location,location.href),{},0);throw o}}async function rn(e){const t=e.href;if(J.has(t))return J.get(t);let n;try{const r=(async()=>{let a=await v.hooks.reroute({url:new URL(e),fetch:async(s,i)=>at(s,i,e).promise})??e;if(typeof a=="string"){const s=new URL(e);v.hash?s.hash=a:s.pathname=a,a=s}return a})();J.set(t,r),n=await r}catch{J.delete(t);return}return n}async function le(e,t){if(e&&!se(e,U,v.hash)){const n=await rn(e);if(!n)return;const r=an(n);for(const a of Ee){const s=a.exec(r);if(s)return{id:oe(e),invalidating:t,route:a,params:pt(s),url:e}}}}function an(e){return ht(v.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(U.length))||"/"}function oe(e){return(v.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function st({url:e,type:t,intent:n,delta:r}){let a=!1;const s=ft(y,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return W||Ze.forEach(o=>o(i)),a?null:s}async function X({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:f=je,block:u=je}){const h=O;O=c;const d=await le(t,!1),l=st({url:t,type:e,delta:n?.delta,intent:d});if(!l){u(),O===c&&(O=h);return}const p=A,m=I;f(),W=!0,re&&P.navigating.set(H.current=l.navigation);let _=d&&await ot(d);if(!_){if(se(t,U,v.hash))return await F(t);_=await it(t,{id:null},await D(new ke(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=d?.url||t,O!==c)return l.reject(new Error("navigation aborted")),!1;if(_.type==="redirect")if(o>=20)_=await ce({status:500,error:await D(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return await Ue(new URL(_.location,t).href,{},o+1,c),!1;else _.props.page.status>=400&&await P.updated.check()&&(await Xe(),await F(t));if(Qt(),Se(p),tt(m),_.props.page.url.pathname!==t.pathname&&(t.pathname=_.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,w={[j]:A+=g,[G]:I+=g,[He]:i};(s?history.replaceState:history.pushState).call(history,w,"",t),s||Xt(A,I)}if(x=null,_.props.page.state=i,re){y=_.state,_.props.page&&(_.props.page.url=t);const g=(await Promise.all(Array.from(Zt,w=>w(l.navigation)))).filter(w=>typeof w=="function");if(g.length>0){let w=function(){g.forEach(b=>{M.delete(b)})};g.push(w),g.forEach(b=>{M.add(b)})}et.$set(_.props),Kt(_.props.page),Qe=!0}else rt(_,we,!1);const{activeElement:R}=document;await ut();const E=n?n.scroll:a?be():null;if(De){const g=t.hash&&document.getElementById(decodeURIComponent(v.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));E?scrollTo(E.x,E.y):g?g.scrollIntoView():scrollTo(0,0)}const L=document.activeElement!==R&&document.activeElement!==document.body;!r&&!L&&un(),De=!0,_.props.page&&Object.assign(S,_.props.page),W=!1,e==="popstate"&&nt(I),l.fulfil(void 0),M.forEach(g=>g(l.navigation)),P.navigating.set(H.current=null)}async function it(e,t,n,r){return e.origin===Y&&e.pathname===location.pathname&&!Re?await ce({status:r,error:n,url:e,route:t}):await F(e)}function on(){let e,t,n;T.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(e),e=setTimeout(()=>{s(c,C.hover)},20)});function r(o){o.defaultPrevented||s(o.composedPath()[0],C.tap)}T.addEventListener("mousedown",r),T.addEventListener("touchstart",r,{passive:!0});const a=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(ge(new URL(c.target.href)),a.unobserve(c.target))},{threshold:0});async function s(o,c){const f=Ye(o,T),u=f===t&&c>=n;if(!f||u)return;const{url:h,external:d,download:l}=_e(f,U,v.hash);if(d||l)return;const p=Z(f),m=h&&oe(y.url)===oe(h);if(!(p.reload||m))if(c<=p.preload_data){t=f,n=C.tap;const _=await le(h,!1);if(!_)return;en(_)}else c<=p.preload_code&&(t=f,n=c,ge(h))}function i(){a.disconnect();for(const o of T.querySelectorAll("a")){const{url:c,external:f,download:u}=_e(o,U,v.hash);if(f||u)continue;const h=Z(o);h.reload||(h.preload_code===C.viewport&&a.observe(o),h.preload_code===C.eager&&ge(c))}}M.add(i),i()}function D(e,t){if(e instanceof ie)return e.body;const n=Q(e),r=Gt(e);return v.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function sn(e,t={}){return e=new URL(Ke(e)),e.origin!==Y?Promise.reject(new Error("goto: invalid URL")):Ue(e,t,0)}function cn(e){if(typeof e=="function")te.push(e);else{const{href:t}=new URL(e,location.href);te.push(n=>n.href===t)}}function ln(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Fe(),!W){const r=ft(y,void 0,null,"leave"),a={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};Ze.forEach(s=>s(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Fe()}),navigator.connection?.saveData||on(),T.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Ye(t.composedPath()[0],T);if(!n)return;const{url:r,external:a,target:s,download:i}=_e(n,U,v.hash);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const o=Z(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;const[f,u]=(v.hash?r.hash.replace(/^#/,""):r.href).split("#"),h=f===de(location);if(a||o.reload&&(!h||!u)){st({url:r,type:"link"})?W=!0:t.preventDefault();return}if(u!==void 0&&h){const[,d]=y.url.href.split("#");if(d===u){if(t.preventDefault(),u===""||u==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const l=n.ownerDocument.getElementById(decodeURIComponent(u));l&&(l.scrollIntoView(),l.focus())}return}if(V=!0,Se(A),e(r),!o.replace_state)return;V=!1}t.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),await X({type:"link",url:r,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??r.href===location.href})}),T.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formTarget||n.target)==="_blank"||(r?.formMethod||n.method)!=="get")return;const i=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(se(i,U,!1))return;const o=t.target,c=Z(o);if(c.reload)return;t.preventDefault(),t.stopPropagation();const f=new FormData(o),u=r?.getAttribute("name");u&&f.append(u,r?.getAttribute("value")??""),i.search=new URLSearchParams(f).toString(),X({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[j]){const n=t.state[j];if(O={},n===A)return;const r=N[n],a=t.state[He]??{},s=new URL(t.state[Lt]??location.href),i=t.state[G],o=y.url?de(location)===de(y.url):!1;if(i===I&&(Qe||o)){a!==S.state&&(S.state=a),e(s),N[A]=be(),r&&scrollTo(r.x,r.y),A=n;return}const f=n-A;await X({type:"popstate",url:s,popped:{state:a,scroll:r,delta:f},accept:()=>{A=n,I=i},block:()=>{history.go(-f)},nav_token:O})}else if(!V){const n=new URL(location.href);e(n),v.hash&&location.reload()}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[j]:++A,[G]:I},"",location.href))});for(const t of document.querySelectorAll("link"))Jt.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&P.navigating.set(H.current=null)});function e(t){y.url=S.url=t,P.page.set(xe(S)),P.page.notify()}}async function fn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Re=!0;const f=new URL(location.href);let u;({params:a={},route:s={id:null}}=await le(f,!1)||{}),u=Ee.find(({id:l})=>l===s.id);let h,d=!0;try{const l=r.map(async(m,_)=>{const R=o[_];return R?.uses&&(R.uses=lt(R.uses)),Le({loader:v.nodes[m],url:f,params:a,route:s,parent:async()=>{const E={};for(let L=0;L<_;L+=1)Object.assign(E,(await l[L]).data);return E},server_data_node:Te(R)})}),p=await Promise.all(l);if(u){const m=u.layouts;for(let _=0;_<m.length;_++)m[_]||p.splice(_,0,void 0)}h=ae({url:f,params:a,branch:p,status:t,error:n,form:c,route:u??null})}catch(l){if(l instanceof Ae){await F(new URL(l.location,location.href));return}h=await ce({status:Q(l),error:await D(l,{url:f,params:a,route:s}),url:f,route:s}),e.textContent="",d=!1}h.props.page&&(h.props.page.state={}),rt(h,e,d)}async function ct(e,t){const n=new URL(e);n.pathname=zt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(qt,"1"),n.searchParams.append(Mt,t.map(s=>s?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let s;throw a.headers.get("content-type")?.includes("application/json")?s=await a.json():a.status===404?s="Not Found":a.status===500&&(s="Internal Error"),new ie(a.status,s)}return new Promise(async s=>{const i=new Map,o=a.body.getReader(),c=new TextDecoder;function f(h){return Ft(h,{...v.decoders,Promise:d=>new Promise((l,p)=>{i.set(d,{fulfil:l,reject:p})})})}let u="";for(;;){const{done:h,value:d}=await o.read();if(h&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const l=u.indexOf(`
`);if(l===-1)break;const p=JSON.parse(u.slice(0,l));if(u=u.slice(l+1),p.type==="redirect")return s(p);if(p.type==="data")p.nodes?.forEach(m=>{m?.type==="data"&&(m.uses=lt(m.uses),m.data=f(m.data))}),s(p);else if(p.type==="chunk"){const{id:m,data:_,error:R}=p,E=i.get(m);i.delete(m),R?E.reject(f(R)):E.fulfil(f(_))}}}})}function lt(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function un(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function ft(e,t,n,r){let a,s;const i=new Promise((c,f)=>{a=c,s=f});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function xe(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function dn(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{yn as a,sn as g,gn as l,P as s};
