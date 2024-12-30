import{w as N,d as p}from"./index.Dbn8irzZ.js";import{s as T}from"./supabase-config.CfWUfwF8.js";import{t as w,c as j,b as V,p as b,s as g,d as S}from"./app.state.D7XuHsx1.js";function q(e,t){const n=w(e);return isNaN(t)?j(e,NaN):(t&&n.setDate(n.getDate()+t),n)}function W(e,t){const n=t*7;return q(e,n)}function x(e,t){const n=V(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=w(e),s=a.getDay(),o=(s<r?-7:0)+6-(s-r);return a.setDate(a.getDate()+o),a.setHours(23,59,59,999),a}function h(e,t){const n=+w(e),[r,a]=[+w(t.start),+w(t.end)].sort((s,o)=>s-o);return n>=r&&n<=a}const B=N([]);async function Y(){const{data:e,error:t}=await T.from("calendar_events").select("*").order("start_time",{ascending:!0});if(t)throw t;const n=e||[];return B.set(n),n}async function Ye(e){const{data:t,error:n}=await T.from("calendar_events").insert([e]).select();if(n)throw n;return await Y(),t?t[0]:void 0}async function be(e,t){const{data:n,error:r}=await T.from("calendar_events").update(t).eq("id",e).select();if(r)throw r;return await Y(),n?n[0]:void 0}async function ge(e){const{error:t}=await T.from("calendar_events").delete().eq("id",e);if(t)throw t;await Y()}let y=null;const Q=()=>{const e=N(!1),t=N([]),n=N([]),r=p([n],([c])=>c.filter(i=>i.event_type==="calendar_event")),a=p([n],([c])=>c.filter(i=>i.event_type==="announcement")),s=p([r],([c])=>c.filter(i=>{const m=i.start_time?b(i.start_time):null;return m?h(m,{start:g(new Date,{weekStartsOn:1}),end:x(new Date,{weekStartsOn:1})}):!1})),o=p([r],([c])=>{const i=W(g(new Date,{weekStartsOn:1}),1),m=x(i,{weekStartsOn:1});return c.filter(D=>{const _=D.start_time?b(D.start_time):null;return _?h(_,{start:i,end:m}):!1})}),u=p([r],([c])=>{const i=W(g(new Date,{weekStartsOn:1}),2),m=x(i,{weekStartsOn:1});return c.filter(D=>{const _=D.start_time?b(D.start_time):null;return _?h(_,{start:i,end:m}):!1})}),f=c=>c.length?c.map(i=>({...i,start_time:i?.start_time?S(i.start_time):void 0,end_time:i.end_time?S(i.end_time):void 0})):[];return y={stores:{ready:e,data:t,dbData:n,announcements:a,calendarEvents:r,calendarEventsThisWeek:s,calendarEventsNextWeek:o,calendarEventsNextNextWeek:u},actions:{reload:async()=>{e.set(!1);const c=await Y();n.set(f(c)),e.set(!0)}}},y},xe=()=>y?.stores&&Object.keys(y.stores).length>0?y:Q(),G={public:{label:"Public",key:"PUB",sort_index:0,color_number:1},church:{label:"Church",key:"CHU",sort_index:0,color_number:2},stake:{label:"Stake",key:"STK",sort_index:0,color_number:3},ward:{label:"Ward",key:"WRD",sort_index:1,color_number:4},reliefSociety:{label:"Relief Society",key:"RES",sort_index:2,color_number:5},eldersQuorum:{label:"Elders Quorum",key:"ELQ",sort_index:3,color_number:6},youth:{label:"Youth",key:"YOU",sort_index:4,color_number:7},youngWomen:{label:"Young Women",key:"YOW",sort_index:4,color_number:8},youngWomenPearls:{label:"YW - Pearls",key:"YWP",sort_index:5,color_number:9},youngWomenRubies:{label:"YW - Rubies",key:"YWR",sort_index:6,color_number:10},youngWomenDiamonds:{label:"YW - Diamonds",key:"YWD",sort_index:7,color_number:11},aaronicPriesthood:{label:"Young Men",key:"YOM",sort_index:8,color_number:12},aaronicPriesthoodDeacons:{label:"YM - Deacons",key:"YMD",sort_index:9,color_number:13},aaronicPriesthoodTeachers:{label:"YM - Teachers",key:"YMT",sort_index:10,color_number:14},aaronicPriesthoodPriests:{label:"YM - Priests",key:"YMP",sort_index:11,color_number:15},primary:{label:"Primary",key:"PRI",sort_index:12,color_number:16},primaryNursery:{label:"Primary - Nursery",key:"PRN",sort_index:13,color_number:17},primarySunbeams:{label:"Primary - Sunbeams",key:"PRS",sort_index:14,color_number:18},primaryCTR:{label:"Primary - CTR",key:"PRC",sort_index:15,color_number:19},primaryValiant:{label:"Primary - Valiant",key:"PRV",sort_index:16,color_number:20},sundaySchool:{label:"Sunday School",key:"SUS",sort_index:17,color_number:21}},K=Object.values(G).sort((e,t)=>e.sort_index-t.sort_index),he=e=>e?K.find(t=>t.key===e):void 0;function J(e,t){const n=re(t);return"formatToParts"in n?ee(n,e):te(n,e)}const X={year:0,month:1,day:2,hour:3,minute:4,second:5};function ee(e,t){try{const n=e.formatToParts(t),r=[];for(let a=0;a<n.length;a++){const s=X[n[a].type];s!==void 0&&(r[s]=parseInt(n[a].value,10))}return r}catch(n){if(n instanceof RangeError)return[NaN];throw n}}function te(e,t){const n=e.format(t),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[parseInt(r[3],10),parseInt(r[1],10),parseInt(r[2],10),parseInt(r[4],10),parseInt(r[5],10),parseInt(r[6],10)]}const k={},U=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),ne=U==="06/25/2014, 00:00:00"||U==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";function re(e){return k[e]||(k[e]=ne?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})),k[e]}function L(e,t,n,r,a,s,o){const u=new Date(0);return u.setUTCFullYear(e,t,n),u.setUTCHours(r,a,s,o),u}const P=36e5,ae=6e4,I={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function Z(e,t,n){if(!e)return 0;let r=I.timezoneZ.exec(e);if(r)return 0;let a,s;if(r=I.timezoneHH.exec(e),r)return a=parseInt(r[1],10),v(a)?-(a*P):NaN;if(r=I.timezoneHHMM.exec(e),r){a=parseInt(r[2],10);const o=parseInt(r[3],10);return v(a,o)?(s=Math.abs(a)*P+o*ae,r[1]==="+"?-s:s):NaN}if(ie(e)){t=new Date(t||Date.now());const o=n?t:se(t),u=C(o,e);return-(n?u:oe(t,u,e))}return NaN}function se(e){return L(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}function C(e,t){const n=J(e,t),r=L(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime();let a=e.getTime();const s=a%1e3;return a-=s>=0?s:1e3+s,r-a}function oe(e,t,n){let a=e.getTime()-t;const s=C(new Date(a),n);if(t===s)return t;a-=s-t;const o=C(new Date(a),n);return s===o?s:Math.max(s,o)}function v(e,t){return-23<=e&&e<=23&&(t==null||0<=t&&t<=59)}const H={};function ie(e){if(H[e])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:e}),H[e]=!0,!0}catch{return!1}}function E(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+e-+t}const le=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,O=36e5,F=6e4,ce=2,l={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:le};function ue(e,t={}){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(e===null)return new Date(NaN);const n=t.additionalDigits==null?ce:Number(t.additionalDigits);if(n!==2&&n!==1&&n!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]")return new Date(e.getTime());if(typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]")return new Date(e);if(Object.prototype.toString.call(e)!=="[object String]")return new Date(NaN);const r=fe(e),{year:a,restDateString:s}=de(r.date,n),o=me(s,a);if(o===null||isNaN(o.getTime()))return new Date(NaN);if(o){const u=o.getTime();let f=0,d;if(r.time&&(f=De(r.time),f===null||isNaN(f)))return new Date(NaN);if(r.timeZone||t.timeZone){if(d=Z(r.timeZone||t.timeZone,new Date(u+f)),isNaN(d))return new Date(NaN)}else d=E(new Date(u+f)),d=E(new Date(u+f+d));return new Date(u+f+d)}else return new Date(NaN)}function fe(e){const t={};let n=l.dateTimePattern.exec(e),r;if(n?(t.date=n[1],r=n[3]):(n=l.datePattern.exec(e),n?(t.date=n[1],r=n[2]):(t.date=null,r=e)),r){const a=l.timeZone.exec(r);a?(t.time=r.replace(a[1],""),t.timeZone=a[1].trim()):t.time=r}return t}function de(e,t){if(e){const n=l.YYY[t],r=l.YYYYY[t];let a=l.YYYY.exec(e)||r.exec(e);if(a){const s=a[1];return{year:parseInt(s,10),restDateString:e.slice(s.length)}}if(a=l.YY.exec(e)||n.exec(e),a){const s=a[1];return{year:parseInt(s,10)*100,restDateString:e.slice(s.length)}}}return{year:null}}function me(e,t){if(t===null)return null;let n,r,a;if(!e||!e.length)return n=new Date(0),n.setUTCFullYear(t),n;let s=l.MM.exec(e);if(s)return n=new Date(0),r=parseInt(s[1],10)-1,R(t,r)?(n.setUTCFullYear(t,r),n):new Date(NaN);if(s=l.DDD.exec(e),s){n=new Date(0);const o=parseInt(s[1],10);return we(t,o)?(n.setUTCFullYear(t,0,o),n):new Date(NaN)}if(s=l.MMDD.exec(e),s){n=new Date(0),r=parseInt(s[1],10)-1;const o=parseInt(s[2],10);return R(t,r,o)?(n.setUTCFullYear(t,r,o),n):new Date(NaN)}if(s=l.Www.exec(e),s)return a=parseInt(s[1],10)-1,A(a)?$(t,a):new Date(NaN);if(s=l.WwwD.exec(e),s){a=parseInt(s[1],10)-1;const o=parseInt(s[2],10)-1;return A(a,o)?$(t,a,o):new Date(NaN)}return null}function De(e){let t,n,r=l.HH.exec(e);if(r)return t=parseFloat(r[1].replace(",",".")),M(t)?t%24*O:NaN;if(r=l.HHMM.exec(e),r)return t=parseInt(r[1],10),n=parseFloat(r[2].replace(",",".")),M(t,n)?t%24*O+n*F:NaN;if(r=l.HHMMSS.exec(e),r){t=parseInt(r[1],10),n=parseInt(r[2],10);const a=parseFloat(r[3].replace(",","."));return M(t,n,a)?t%24*O+n*F+a*1e3:NaN}return null}function $(e,t,n){t=t||0,n=n||0;const r=new Date(0);r.setUTCFullYear(e,0,4);const a=r.getUTCDay()||7,s=t*7+n+1-a;return r.setUTCDate(r.getUTCDate()+s),r}const _e=[31,28,31,30,31,30,31,31,30,31,30,31],pe=[31,29,31,30,31,30,31,31,30,31,30,31];function z(e){return e%400===0||e%4===0&&e%100!==0}function R(e,t,n){if(t<0||t>11)return!1;if(n!=null){if(n<1)return!1;const r=z(e);if(r&&n>pe[t]||!r&&n>_e[t])return!1}return!0}function we(e,t){if(t<1)return!1;const n=z(e);return!(n&&t>366||!n&&t>365)}function A(e,t){return!(e<0||e>52||t!=null&&(t<0||t>6))}function M(e,t,n){return!(e<0||e>=25||t!=null&&(t<0||t>=60)||n!=null&&(n<0||n>=60))}function ke(e,t,n){e=ue(e,n);const r=Z(t,e,!0),a=new Date(e.getTime()-r),s=new Date(0);return s.setFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),s.setHours(a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds()),s}export{K as D,xe as a,q as b,Ye as c,ge as d,he as g,ke as t,be as u};