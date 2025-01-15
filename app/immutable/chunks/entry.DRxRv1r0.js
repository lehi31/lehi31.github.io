import{o as Ue,t as ft}from"./scheduler.BfFrGQPI.js";import{w as _e}from"./index.Bmxe5pei.js";new URL("sveltekit-internal://");function ut(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function dt(e){return e.split("%25").map(decodeURI).join("%25")}function ht(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function fe({href:e}){return e.split("#")[0]}function pt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}const gt="/__data.json",mt=".html__data.json";function _t(e){return e.endsWith(".html")?e.replace(/\.html$/,mt):e.replace(/\/$/,"")+gt}function yt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function wt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const De=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&B.delete(ye(e)),De(e,t));const B=new Map;function vt(e,t){const n=ye(e,t),r=document.querySelector(n);if(r?.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&B.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=wt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function bt(e,t,n){if(B.size>0){const r=ye(e,n),a=B.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(a.body,a.init);B.delete(r)}}return window.fetch(t,n)}function ye(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${yt(...a)}"]`}return r}const kt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Et(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ue(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ue(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const d=kt.exec(c),[,p,u,f,g]=d;return t.push({name:f,matcher:g,optional:!!p,rest:!!u,chained:u?l===1&&i[0]==="":!1}),u?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return ue(c)}).join("")}).join("")}/?$`),params:t}}function St(e){return!/^\([^)]+\)$/.test(e)}function Et(e){return e.slice(1).split("/").filter(St)}function Rt(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=t[o+1],p=a[o+1];d&&!d.rest&&d.optional&&p&&c.chained&&(i=0),!d&&!p&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ue(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function It({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:p,params:u}=At(o),f={id:o,exec:g=>{const h=p.exec(g);if(h)return Rt(h,u,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function Fe(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Le(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const U=globalThis.__sveltekit_1lpzi4y?.base??"",Ut=globalThis.__sveltekit_1lpzi4y?.assets??U,Lt="1736966724804",Ve="sveltekit:snapshot",Be="sveltekit:scroll",Ge="sveltekit:states",Tt="sveltekit:pageurl",$="sveltekit:history",M="sveltekit:navigation",z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},W=location.origin;function Me(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function we(){return{x:pageXOffset,y:pageYOffset}}function O(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Te={...z,"":z.hover};function qe(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function He(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=qe(e)}}function pe(e,t,n){let r;try{r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||ae(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=r?.origin===W&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function J(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=O(o,"preload-code")),a===null&&(a=O(o,"preload-data")),t===null&&(t=O(o,"keepfocus")),n===null&&(n=O(o,"noscroll")),s===null&&(s=O(o,"reload")),i===null&&(i=O(o,"replacestate")),o=qe(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Te[r??"off"],preload_data:Te[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function xe(e){const t=_e(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const Ke={v:()=>{}};function xt(){const{set:e,subscribe:t}=_e(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Ut}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Lt;return i&&(e(!0),Ke.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function ae(e,t,n){return e.origin!==W||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function Pe(e){const t=Ct(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const Pt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ct(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=Pt.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const Ot=-1,Nt=-2,$t=-3,jt=-4,Dt=-5,Ft=-6;function Vt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===Ot)return;if(s===$t)return NaN;if(s===jt)return 1/0;if(s===Dt)return-1/0;if(s===Ft)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t?.[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let f=1;f<o.length;f+=1)d.add(a(o[f]));break;case"Map":const p=new Map;r[s]=p;for(let f=1;f<o.length;f+=2)p.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const u=Object.create(null);r[s]=u;for(let f=1;f<o.length;f+=2)u[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],g=o[1],h=Pe(g),S=new f(h);r[s]=S;break}case"ArrayBuffer":{const f=o[1],g=Pe(f);r[s]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==Nt&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const We=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...We];const Bt=new Set([...We]);[...Bt];function Gt(e){return e.filter(t=>t!=null)}class oe{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(t,n){this.status=t,this.location=n}}class ve extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Mt="x-sveltekit-invalidated",qt="x-sveltekit-trailing-slash";function X(e){return e instanceof oe||e instanceof ve?e.status:500}function Ht(e){return e instanceof ve?e.text:"Internal Error"}let w,q,de;const Kt=Ue.toString().includes("$$")||/function \w+\(\) \{\}/.test(Ue.toString());Kt?(w={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},q={current:null},de={current:!1}):(w=new class{data=$state.raw({});form=$state.raw(null);error=$state.raw(null);params=$state.raw({});route=$state.raw({id:null});state=$state.raw({});status=$state.raw(-1);url=$state.raw(new URL("https://example.com"))},q=new class{current=$state.raw(null)},de=new class{current=$state.raw(!1)},Ke.v=()=>de.current=!0);function Wt(e){Object.assign(w,e)}const Yt=new Set(["icon","shortcut icon","apple-touch-icon"]),C=Fe(Be)??{},H=Fe(Ve)??{},P={url:xe({}),page:xe({}),navigating:_e(null),updated:xt()};function be(e){C[e]=we()}function zt(e,t){let n=e+1;for(;C[n];)delete C[n],n+=1;for(n=t+1;H[n];)delete H[n],n+=1}function D(e){return location.href=e.href,new Promise(()=>{})}async function ze(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function Ce(){}let se,ge,Z,T,me,b;const Je=[],Q=[];let x=null;const Xe=[],Jt=[];let N=[],_={branch:[],error:null,url:null},ke=!1,ee=!1,Oe=!0,K=!1,F=!1,Ze=!1,Ae=!1,Se,k,I,te;const G=new Set;async function dn(e,t,n){document.URL!==location.href&&(location.href=location.href),b=e,await e.hooks.init?.(),se=It(e),T=document.documentElement,me=t,ge=e.nodes[0],Z=e.nodes[1],ge(),Z(),k=history.state?.[$],I=history.state?.[M],k||(k=I=Date.now(),history.replaceState({...history.state,[$]:k,[M]:I},""));const r=C[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await an(me,n):nn(location.href,{replaceState:!0}),rn()}function Xt(){Je.length=0,Ae=!1}function Qe(e){Q.some(t=>t?.snapshot)&&(H[e]=Q.map(t=>t?.snapshot?.capture()))}function et(e){H[e]?.forEach((t,n)=>{Q[n]?.snapshot?.restore(t)})}function Ne(){be(k),Le(Be,C),Qe(I),Le(Ve,H)}async function tt(e,t,n,r){return V({type:"goto",url:Me(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Ae=!0)}})}async function Zt(e){if(e.id!==x?.id){const t={};G.add(t),x={id:e.id,token:t,promise:rt({...e,preload:t}).then(n=>(G.delete(t),n.type==="loaded"&&n.state.error&&(x=null),n))}}return x.promise}async function he(e){const t=se.find(n=>n.exec(at(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function nt(e,t,n){_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(w,e.props.page),Se=new b.root({target:t,props:{...e.props,stores:P,components:Q},hydrate:n,sync:!1}),et(I);const a={from:null,to:{params:_.params,route:{id:_.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};N.forEach(s=>s(a)),ee=!0}function ne({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(U&&(e.pathname===U||e.pathname===U+"/"))o="always";else for(const f of n)f?.slash!==void 0&&(o=f.slash);e.pathname=ut(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:Gt(n).map(f=>f.node.component),page:w}};i!==void 0&&(c.props.form=i);let l={},d=!w,p=0;for(let f=0;f<Math.max(n.length,_.branch.length);f+=1){const g=n[f],h=_.branch[f];g?.data!==h?.data&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${p}`]=l),p+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==w.form||d)&&(c.props.page={error:a,params:t,route:{id:s?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:w.data}),c}async function Ee({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(l.universal?.load){let d=function(...u){for(const f of u){const{href:g}=new URL(f,n);c.dependencies.add(g)}};const p={route:new Proxy(a,{get:(u,f)=>(o&&(c.route=!0),u[f])}),params:new Proxy(r,{get:(u,f)=>(o&&c.params.add(f),u[f])}),data:s?.data??null,url:pt(n,()=>{o&&(c.url=!0)},u=>{o&&c.search_params.add(u)},b.hash),async fetch(u,f){let g;u instanceof Request?(g=u.url,f={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:[...u.headers].length?u.headers:void 0,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...f}):g=u;const h=new URL(g,n);return o&&d(h.href),h.origin===n.origin&&(g=h.href.slice(n.origin.length)),ee?bt(g,h.href,f):vt(g,f)},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(u){o=!1;try{return u()}finally{o=!0}}};i=await l.universal.load.call(null,p)??null}return{node:l,loader:e,server:s,universal:l.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:l.universal?.trailingSlash??s?.slash}}function $e(e,t,n,r,a,s){if(Ae)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==_.params[i])return!0;for(const i of a.dependencies)if(Je.some(o=>o(new URL(i))))return!0;return!1}function Re(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function Qt(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function je({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:w,constructors:[]}}}async function rt({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if(x?.id===e)return G.delete(x.token),x.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(m=>m?.().catch(()=>{})),l.forEach(m=>m?.[1]().catch(()=>{}));let d=null;const p=_.url?e!==re(_.url):!1,u=_.route?a.id!==_.route.id:!1,f=Qt(_.url,n);let g=!1;const h=l.map((m,y)=>{const R=_.branch[y],A=!!m?.[0]&&(R?.loader!==m[1]||$e(g,u,p,f,R.server?.uses,r));return A&&(g=!0),A});if(h.some(Boolean)){try{d=await it(n,h)}catch(m){const y=await j(m,{url:n,params:r,route:{id:e}});return G.has(s)?je({error:y,url:n,params:r,route:a}):ie({status:X(m),error:y,url:n,route:a})}if(d.type==="redirect")return d}const S=d?.nodes;let E=!1;const L=l.map(async(m,y)=>{if(!m)return;const R=_.branch[y],A=S?.[y];if((!A||A.type==="skip")&&m[1]===R?.loader&&!$e(E,u,p,f,R.universal?.uses,r))return R;if(E=!0,A?.type==="error")throw A;return Ee({loader:m[1],url:n,params:r,route:a,parent:async()=>{const ce={};for(let le=0;le<y;le+=1)Object.assign(ce,(await L[le])?.data);return ce},server_data_node:Re(A===void 0&&m[0]?{type:"skip"}:A??null,m[0]?R?.server:void 0)})});for(const m of L)m.catch(()=>{});const v=[];for(let m=0;m<l.length;m+=1)if(l[m])try{v.push(await L[m])}catch(y){if(y instanceof Ye)return{type:"redirect",location:y.location};if(G.has(s))return je({error:await j(y,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let R=X(y),A;if(S?.includes(y))R=y.status??R,A=y.error;else if(y instanceof oe)A=y.body;else{if(await P.updated.check())return await ze(),await D(n);A=await j(y,{params:r,url:n,route:{id:a.id}})}const Y=await en(m,v,i);return Y?ne({url:n,params:r,branch:v.slice(0,Y.idx).concat(Y.node),status:R,error:A,route:a}):await st(n,{id:a.id},A,R)}else v.push(void 0);return ne({url:n,params:r,branch:v,status:200,error:null,route:a,form:t?void 0:null})}async function en(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:t,url:n,route:r}){const a={};let s=null;if(b.server_loads[0]===0)try{const l=await it(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;s=l.nodes[0]??null}catch{(n.origin!==W||n.pathname!==location.pathname||ke)&&await D(n)}const o=await Ee({loader:ge,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Re(s)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return ne({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}function Ie(e,t){if(!e||ae(e,U,b.hash))return;let n;try{if(n=b.hooks.reroute({url:new URL(e)})??e,typeof n=="string"){const a=new URL(e);b.hash?a.hash=n:a.pathname=n,n=a}}catch{return}const r=at(n);for(const a of se){const s=a.exec(r);if(s)return{id:re(e),invalidating:t,route:a,params:ht(s),url:e}}}function at(e){return dt(b.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(U.length))||"/"}function re(e){return(b.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function ot({url:e,type:t,intent:n,delta:r}){let a=!1;const s=lt(_,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return K||Xe.forEach(o=>o(i)),a?null:s}async function V({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=Ce,block:d=Ce}){const p=Ie(t,!1),u=ot({url:t,type:e,delta:n?.delta,intent:p});if(!u){d();return}const f=k,g=I;l(),K=!0,ee&&P.navigating.set(q.current=u.navigation),te=c;let h=p&&await rt(p);if(!h){if(ae(t,U,b.hash))return await D(t);h=await st(t,{id:null},await j(new ve(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=p?.url||t,te!==c)return u.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await ie({status:500,error:await j(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return tt(new URL(h.location,t).href,{},o+1,c),!1;else h.props.page.status>=400&&await P.updated.check()&&(await ze(),await D(t));if(Xt(),be(f),Qe(g),h.props.page.url.pathname!==t.pathname&&(t.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const v=s?0:1,m={[$]:k+=v,[M]:I+=v,[Ge]:i};(s?history.replaceState:history.pushState).call(history,m,"",t),s||zt(k,I)}if(x=null,h.props.page.state=i,ee){_=h.state,h.props.page&&(h.props.page.url=t);const v=(await Promise.all(Jt.map(m=>m(u.navigation)))).filter(m=>typeof m=="function");if(v.length>0){let m=function(){N=N.filter(y=>!v.includes(y))};v.push(m),N.push(...v)}Se.$set(h.props),Wt(h.props.page),Ze=!0}else nt(h,me,!1);const{activeElement:S}=document;await ft();const E=n?n.scroll:a?we():null;if(Oe){const v=t.hash&&document.getElementById(decodeURIComponent(b.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));E?scrollTo(E.x,E.y):v?v.scrollIntoView():scrollTo(0,0)}const L=document.activeElement!==S&&document.activeElement!==document.body;!r&&!L&&on(),Oe=!0,h.props.page&&Object.assign(w,h.props.page),K=!1,e==="popstate"&&et(I),u.fulfil(void 0),N.forEach(v=>v(u.navigation)),P.navigating.set(q.current=null)}async function st(e,t,n,r){return e.origin===W&&e.pathname===location.pathname&&!ke?await ie({status:r,error:n,url:e,route:t}):await D(e)}function tn(){let e;T.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(s){s.defaultPrevented||r(s.composedPath()[0],1)}T.addEventListener("mousedown",t),T.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(he(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=He(s,T);if(!o)return;const{url:c,external:l,download:d}=pe(o,U,b.hash);if(l||d)return;const p=J(o),u=c&&re(_.url)===re(c);if(!p.reload&&!u)if(i<=p.preload_data){const f=Ie(c,!1);f&&Zt(f)}else i<=p.preload_code&&he(c)}function a(){n.disconnect();for(const s of T.querySelectorAll("a")){const{url:i,external:o,download:c}=pe(s,U,b.hash);if(o||c)continue;const l=J(s);l.reload||(l.preload_code===z.viewport&&n.observe(s),l.preload_code===z.eager&&he(i))}}N.push(a),a()}function j(e,t){if(e instanceof oe)return e.body;const n=X(e),r=Ht(e);return b.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function nn(e,t={}){return e=new URL(Me(e)),e.origin!==W?Promise.reject(new Error("goto: invalid URL")):tt(e,t,0)}function rn(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Ne(),!K){const r=lt(_,void 0,null,"leave"),a={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};Xe.forEach(s=>s(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ne()}),navigator.connection?.saveData||tn(),T.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=He(t.composedPath()[0],T);if(!n)return;const{url:r,external:a,target:s,download:i}=pe(n,U,b.hash);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const o=J(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;const[l,d]=(b.hash?r.hash.replace(/^#/,""):r.href).split("#"),p=l===fe(location);if(a||o.reload&&(!p||!d)){ot({url:r,type:"link"})?K=!0:t.preventDefault();return}if(d!==void 0&&p){const[,u]=_.url.href.split("#");if(u===d){if(t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const f=n.ownerDocument.getElementById(decodeURIComponent(d));f&&(f.scrollIntoView(),f.focus())}return}if(F=!0,be(k),e(r),!o.replace_state)return;F=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),V({type:"link",url:r,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??r.href===location.href})}),T.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formTarget||n.target)==="_blank"||(r?.formMethod||n.method)!=="get")return;const i=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(ae(i,U,!1))return;const o=t.target,c=J(o);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(o),d=r?.getAttribute("name");d&&l.append(d,r?.getAttribute("value")??""),i.search=new URLSearchParams(l).toString(),V({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[$]){const n=t.state[$];if(te={},n===k)return;const r=C[n],a=t.state[Ge]??{},s=new URL(t.state[Tt]??location.href),i=t.state[M],o=fe(location)===fe(_.url);if(i===I&&(Ze||o)){e(s),C[k]=we(),r&&scrollTo(r.x,r.y),a!==w.state&&(w.state=a,Se.$set({page:w})),k=n;return}const l=n-k;await V({type:"popstate",url:s,popped:{state:a,scroll:r,delta:l},accept:()=>{k=n,I=i},block:()=>{history.go(-l)},nav_token:te})}else if(!F){const n=new URL(location.href);e(n)}}),addEventListener("hashchange",()=>{F?(F=!1,history.replaceState({...history.state,[$]:++k,[M]:I},"",location.href)):b.hash&&_.url.hash===location.hash&&V({type:"goto",url:_.url})});for(const t of document.querySelectorAll("link"))Yt.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&P.navigating.set(q.current=null)});function e(t){_.url=w.url=t,P.page.set({data:w.data,error:w.error,form:w.form,params:w.params,route:w.route,state:w.state,status:w.status,url:t}),P.page.notify()}}async function an(e,{status:t=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){ke=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Ie(c,!1)||{});let l,d=!0;try{const p=r.map(async(g,h)=>{const S=i[h];return S?.uses&&(S.uses=ct(S.uses)),Ee({loader:b.nodes[g],url:c,params:a,route:s,parent:async()=>{const E={};for(let L=0;L<h;L+=1)Object.assign(E,(await p[L]).data);return E},server_data_node:Re(S)})}),u=await Promise.all(p),f=se.find(({id:g})=>g===s.id);if(f){const g=f.layouts;for(let h=0;h<g.length;h++)g[h]||u.splice(h,0,void 0)}l=ne({url:c,params:a,branch:u,status:t,error:n,form:o,route:f??null})}catch(p){if(p instanceof Ye){await D(new URL(p.location,location.href));return}l=await ie({status:X(p),error:await j(p,{url:c,params:a,route:s}),url:c,route:s}),e.textContent="",d=!1}l.props.page&&(l.props.page.state={}),nt(l,e,d)}async function it(e,t){const n=new URL(e);n.pathname=_t(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(qt,"1"),n.searchParams.append(Mt,t.map(a=>a?"1":"0").join(""));const r=await De(n.href);if(!r.ok){let a;throw r.headers.get("content-type")?.includes("application/json")?a=await r.json():r.status===404?a="Not Found":r.status===500&&(a="Internal Error"),new oe(r.status,a)}return new Promise(async a=>{const s=new Map,i=r.body.getReader(),o=new TextDecoder;function c(d){return Vt(d,{...b.decoders,Promise:p=>new Promise((u,f)=>{s.set(p,{fulfil:u,reject:f})})})}let l="";for(;;){const{done:d,value:p}=await i.read();if(d&&!l)break;for(l+=!p&&l?`
`:o.decode(p,{stream:!0});;){const u=l.indexOf(`
`);if(u===-1)break;const f=JSON.parse(l.slice(0,u));if(l=l.slice(u+1),f.type==="redirect")return a(f);if(f.type==="data")f.nodes?.forEach(g=>{g?.type==="data"&&(g.uses=ct(g.uses),g.data=c(g.data))}),a(f);else if(f.type==="chunk"){const{id:g,data:h,error:S}=f,E=s.get(g);s.delete(g),S?E.reject(c(S)):E.fulfil(c(h))}}}})}function ct(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function on(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function lt(e,t,n,r){let a,s;const i=new Promise((c,l)=>{a=c,s=l});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}export{dn as a,nn as g,P as s};
