import{d as v,w as W}from"./wlhN6vKE.js";import{l as at}from"./DZwCP9x3.js";var i=(t=>(t.UnAuthenticated="un-authenticated",t.Authenticated="authenticated",t.Admin="admin",t.Root="root",t.Primary="primary",t.ReliefSociety="relief-society",t.EldersQuorum="elders-quorum",t.TeachersQuorum="teachers-quorum",t.YoungWomen="young-women",t.SundaySchool="sunday-school",t))(i||{});const Ce="America/Denver",Ae={title:"",event_type:"calendar_event",is_all_day:!0,description:"",location:"",start_time:new Date().toISOString(),end_time:new Date().toISOString()},p={username:"User",role:i.UnAuthenticated},A={username:"Admin",role:i.Admin},R={username:"Young Women",role:i.YoungWomen},U={username:"Relief Society",role:i.ReliefSociety},I={username:"Elders Quorum",role:i.EldersQuorum},j={username:"Teachers Quorum",role:i.TeachersQuorum},F={username:"Primary",role:i.Primary},_={username:"Sunday School",role:i.SundaySchool},Q={username:"Root",role:i.Root},ot=[{label:"Home",url:"/home",roles:[i.UnAuthenticated,i.Authenticated,i.Primary,i.SundaySchool,i.TeachersQuorum,i.EldersQuorum,i.ReliefSociety,i.YoungWomen,i.Admin,i.Root],index:1},{label:"Sacrament Program",url:"/sacrament-program",roles:[i.UnAuthenticated,i.Authenticated,i.Primary,i.SundaySchool,i.TeachersQuorum,i.EldersQuorum,i.ReliefSociety,i.YoungWomen,i.Admin,i.Root],visibilities:[{role:i.UnAuthenticated,sundayOnly:!0},{role:i.Authenticated,sundayOnly:!0},{role:i.YoungWomen,sundayOnly:!0},{role:i.SundaySchool,sundayOnly:!0},{role:i.EldersQuorum,sundayOnly:!0},{role:i.ReliefSociety,sundayOnly:!0},{role:i.Primary,sundayOnly:!0},{role:i.Admin,sundayOnly:!1},{role:i.Root,sundayOnly:!1}],index:2},{label:"Announcements & Events",url:"/announcements-and-events",roles:[i.UnAuthenticated,i.Authenticated,i.Primary,i.SundaySchool,i.EldersQuorum,i.TeachersQuorum,i.ReliefSociety,i.YoungWomen,i.Admin,i.Root],index:3},{label:"Admin",url:"/admin",roles:[i.Primary,i.SundaySchool,i.EldersQuorum,i.ReliefSociety,i.YoungWomen,i.Admin,i.Root],index:4},{label:"Assignments",url:"/assignments",roles:[i.Admin,i.Root,i.TeachersQuorum],index:4},{label:"Calendar",url:"/calendar",roles:[i.Root],index:5}];function y(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function D(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function it(t){return y(t).getDay()===0}const z=6048e5,st=864e5,Z=6e4,K=36e5,Re=1e3;let ut={};function Y(){return ut}function k(t,e){const n=Y(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=y(t),o=a.getDay(),s=(o<r?7:0)+o-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function E(t){return k(t,{weekStartsOn:1})}function tt(t){const e=y(t),n=e.getFullYear(),r=D(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=E(r),o=D(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const s=E(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function J(t){const e=y(t);return e.setHours(0,0,0,0),e}function X(t){const e=y(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function ct(t,e){const n=J(t),r=J(e),a=+n-X(n),o=+r-X(r);return Math.round((a-o)/st)}function dt(t){const e=tt(t),n=D(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),E(n)}function lt(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function ft(t){if(!lt(t)&&typeof t!="number")return!1;const e=y(t);return!isNaN(Number(e))}function mt(t){const e=y(t),n=D(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const ht={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},gt=(t,e,n)=>{let r;const a=ht[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function q(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const yt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},wt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},bt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},pt={date:q({formats:yt,defaultWidth:"full"}),time:q({formats:wt,defaultWidth:"full"}),dateTime:q({formats:bt,defaultWidth:"full"})},St={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ot=(t,e,n,r)=>St[t];function M(t){return(e,n)=>{const r=n?.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,d=n?.width?String(n.width):s;a=t.formattingValues[d]||t.formattingValues[s]}else{const s=t.defaultWidth,d=n?.width?String(n.width):t.defaultWidth;a=t.values[d]||t.values[s]}const o=t.argumentCallback?t.argumentCallback(e):e;return a[o]}}const Dt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Tt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Mt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Pt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},xt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},kt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},vt=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Wt={ordinalNumber:vt,era:M({values:Dt,defaultWidth:"wide"}),quarter:M({values:Tt,defaultWidth:"wide",argumentCallback:t=>t-1}),month:M({values:Mt,defaultWidth:"wide"}),day:M({values:Pt,defaultWidth:"wide"}),dayPeriod:M({values:xt,defaultWidth:"wide",formattingValues:kt,defaultFormattingWidth:"wide"})};function P(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const s=o[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(d)?Et(d,m=>m.test(s)):Nt(d,m=>m.test(s));let f;f=t.valueCallback?t.valueCallback(u):u,f=n.valueCallback?n.valueCallback(f):f;const g=e.slice(s.length);return{value:f,rest:g}}}function Nt(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Et(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Yt(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],o=e.match(t.parsePattern);if(!o)return null;let s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const d=e.slice(a.length);return{value:s,rest:d}}}const Ct=/^(\d+)(th|st|nd|rd)?/i,At=/\d+/i,Rt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ut={any:[/^b/i,/^(a|c)/i]},It={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ft={any:[/1/i,/2/i,/3/i,/4/i]},_t={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Qt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},qt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Lt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ht={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},jt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Jt={ordinalNumber:Yt({matchPattern:Ct,parsePattern:At,valueCallback:t=>parseInt(t,10)}),era:P({matchPatterns:Rt,defaultMatchWidth:"wide",parsePatterns:Ut,defaultParseWidth:"any"}),quarter:P({matchPatterns:It,defaultMatchWidth:"wide",parsePatterns:Ft,defaultParseWidth:"any",valueCallback:t=>t+1}),month:P({matchPatterns:_t,defaultMatchWidth:"wide",parsePatterns:Qt,defaultParseWidth:"any"}),day:P({matchPatterns:qt,defaultMatchWidth:"wide",parsePatterns:Lt,defaultParseWidth:"any"}),dayPeriod:P({matchPatterns:Ht,defaultMatchWidth:"any",parsePatterns:jt,defaultParseWidth:"any"})},Xt={code:"en-US",formatDistance:gt,formatLong:pt,formatRelative:Ot,localize:Wt,match:Jt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Bt(t){const e=y(t);return ct(e,mt(e))+1}function Gt(t){const e=y(t),n=+E(e)-+dt(e);return Math.round(n/z)+1}function et(t,e){const n=y(t),r=n.getFullYear(),a=Y(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,s=D(t,0);s.setFullYear(r+1,0,o),s.setHours(0,0,0,0);const d=k(s,e),u=D(t,0);u.setFullYear(r,0,o),u.setHours(0,0,0,0);const f=k(u,e);return n.getTime()>=d.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function Vt(t,e){const n=Y(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=et(t,e),o=D(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),k(o,e)}function $t(t,e){const n=y(t),r=+k(n,e)-+Vt(n,e);return Math.round(r/z)+1}function c(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const b={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return c(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):c(n+1,2)},d(t,e){return c(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return c(t.getHours()%12||12,e.length)},H(t,e){return c(t.getHours(),e.length)},m(t,e){return c(t.getMinutes(),e.length)},s(t,e){return c(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return c(a,e.length)}},T={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},B={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return b.y(t,e)},Y:function(t,e,n,r){const a=et(t,r),o=a>0?a:1-a;if(e==="YY"){const s=o%100;return c(s,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):c(o,e.length)},R:function(t,e){const n=tt(t);return c(n,e.length)},u:function(t,e){const n=t.getFullYear();return c(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return c(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return c(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return b.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return c(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=$t(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):c(a,e.length)},I:function(t,e,n){const r=Gt(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):c(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):b.d(t,e)},D:function(t,e,n){const r=Bt(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):c(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return c(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return c(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return c(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=T.noon:r===0?a=T.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=T.evening:r>=12?a=T.afternoon:r>=4?a=T.morning:a=T.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return b.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):b.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):b.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):b.s(t,e)},S:function(t,e){return b.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return V(r);case"XXXX":case"XX":return S(r);case"XXXXX":case"XXX":default:return S(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return V(r);case"xxxx":case"xx":return S(r);case"xxxxx":case"xxx":default:return S(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+G(r,":");case"OOOO":default:return"GMT"+S(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+G(r,":");case"zzzz":default:return"GMT"+S(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return c(r,e.length)},T:function(t,e,n){const r=t.getTime();return c(r,e.length)}};function G(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return o===0?n+String(a):n+String(a)+e+c(o,2)}function V(t,e){return t%60===0?(t>0?"-":"+")+c(Math.abs(t)/60,2):S(t,e)}function S(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=c(Math.trunc(r/60),2),o=c(r%60,2);return n+a+e+o}const $=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},nt=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},zt=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return $(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",$(r,e)).replace("{{time}}",nt(a,e))},Zt={p:nt,P:zt},Kt=/^D+$/,te=/^Y+$/,ee=["D","DD","YY","YYYY"];function ne(t){return Kt.test(t)}function re(t){return te.test(t)}function ae(t,e,n){const r=oe(t,e,n);if(console.warn(r),ee.includes(t))throw new RangeError(r)}function oe(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ie=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,se=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ue=/^'([^]*?)'?$/,ce=/''/g,de=/[a-zA-Z]/;function le(t,e,n){const r=Y(),a=r.locale??Xt,o=r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,s=r.weekStartsOn??r.locale?.options?.weekStartsOn??0,d=y(t);if(!ft(d))throw new RangeError("Invalid time value");let u=e.match(se).map(g=>{const m=g[0];if(m==="p"||m==="P"){const l=Zt[m];return l(g,a.formatLong)}return g}).join("").match(ie).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const m=g[0];if(m==="'")return{isToken:!1,value:fe(g)};if(B[m])return{isToken:!0,value:g};if(m.match(de))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");return{isToken:!1,value:g}});a.localize.preprocessor&&(u=a.localize.preprocessor(d,u));const f={firstWeekContainsDate:o,weekStartsOn:s,locale:a};return u.map(g=>{if(!g.isToken)return g.value;const m=g.value;(re(m)||ne(m))&&ae(m,e,String(t));const l=B[m[0]];return l(d,m,a.localize,f)}).join("")}function fe(t){const e=t.match(ue);return e?e[1].replace(ce,"'"):t}function me(t,e){const r=we(t);let a;if(r.date){const u=be(r.date,2);a=pe(u.restDateString,u.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);const o=a.getTime();let s=0,d;if(r.time&&(s=Se(r.time),isNaN(s)))return new Date(NaN);if(r.timezone){if(d=Oe(r.timezone),isNaN(d))return new Date(NaN)}else{const u=new Date(o+s),f=new Date(0);return f.setFullYear(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()),f.setHours(u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds()),f}return new Date(o+s+d)}const N={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},he=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ge=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,ye=/^([+-])(\d{2})(?::?(\d{2}))?$/;function we(t){const e={},n=t.split(N.dateTimeDelimiter);let r;if(n.length>2)return e;if(/:/.test(n[0])?r=n[0]:(e.date=n[0],r=n[1],N.timeZoneDelimiter.test(e.date)&&(e.date=t.split(N.timeZoneDelimiter)[0],r=t.substr(e.date.length,t.length))),r){const a=N.timezone.exec(r);a?(e.time=r.replace(a[1],""),e.timezone=a[1]):e.time=r}return e}function be(t,e){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};const a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:o===null?a:o*100,restDateString:t.slice((r[1]||r[2]).length)}}function pe(t,e){if(e===null)return new Date(NaN);const n=t.match(he);if(!n)return new Date(NaN);const r=!!n[4],a=x(n[1]),o=x(n[2])-1,s=x(n[3]),d=x(n[4]),u=x(n[5])-1;if(r)return xe(e,d,u)?De(e,d,u):new Date(NaN);{const f=new Date(0);return!Me(e,o,s)||!Pe(e,a)?new Date(NaN):(f.setUTCFullYear(e,o,Math.max(a,s)),f)}}function x(t){return t?parseInt(t):1}function Se(t){const e=t.match(ge);if(!e)return NaN;const n=L(e[1]),r=L(e[2]),a=L(e[3]);return ke(n,r,a)?n*K+r*Z+a*1e3:NaN}function L(t){return t&&parseFloat(t.replace(",","."))||0}function Oe(t){if(t==="Z")return 0;const e=t.match(ye);if(!e)return 0;const n=e[1]==="+"?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return ve(r,a)?n*(r*K+a*Z):NaN}function De(t,e,n){const r=new Date(0);r.setUTCFullYear(t,0,4);const a=r.getUTCDay()||7,o=(e-1)*7+n+1-a;return r.setUTCDate(r.getUTCDate()+o),r}const Te=[31,null,31,30,31,30,31,31,30,31,30,31];function rt(t){return t%400===0||t%4===0&&t%100!==0}function Me(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(Te[e]||(rt(t)?29:28))}function Pe(t,e){return e>=1&&e<=(rt(t)?366:365)}function xe(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}function ke(t,e,n){return t===24?e===0&&n===0:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}function ve(t,e){return e>=0&&e<=59}const Ue=()=>{const{stores:{currentUser:t},actions:{init:e}}=Ne();e();const n=at(t);let r=[];r=[...r,...ot];const a=(o,s)=>o&&o.find(u=>u.role===s)?.sundayOnly?it(new Date):!0;return r.filter(o=>{const s=n.role,d=!!o.roles.find(f=>f===s),u=a(o.visibilities,s);return d&&u}).sort((o,s)=>o.index-s.index)};function Ie(t){const e=me(t);return le(e,"yyyy-MM-dd'T'HH:mm")}async function w(t){function e(o){return Array.from(new Uint8Array(o)).map(s=>s.toString(16).padStart(2,"0")).join("")}const r=new TextEncoder().encode(t),a=await crypto.subtle.digest("SHA-256",r);return e(a)}let O=null;const We=()=>{const t=W(!1),e=W("Home"),n=W(!1),r=W(p),a=v([r],([l])=>l.role===i.Admin||l.role===i.Root),o=v([r],([l])=>l.role===i.Admin),s=v([r],([l])=>l.role===i.TeachersQuorum),d=v([r],([l])=>l.role===i.Root);return O={stores:{darkTheme:t,pageName:e,authenticated:n,currentUser:r,currentUserIsTeachersQuorum:s,currentUserIsAdmin:o,currentUserIsRoot:d,currentUserIsRootOrAdmin:a},actions:{init:()=>{const l=localStorage.getItem("theme"),h=l??"light";t.set(l==="dark"),document.documentElement.setAttribute("data-bs-theme",h),localStorage.setItem("theme",h);const H=localStorage.getItem("currentUser"),C=H?JSON.parse(H):p;switch(r.set(C),localStorage.setItem("currentUser",JSON.stringify(C)),C.username){case A.username:case R.username:case U.username:case I.username:case F.username:case _.username:case Q.username:n.set(!0);break;case p.username:default:n.set(!1)}},toggleTheme:()=>{const l=localStorage.getItem("theme");let h="light";l==="light"&&(h="dark"),t.set(h==="dark"),document.documentElement.setAttribute("data-bs-theme",h),localStorage.setItem("theme",h)},login:async(l,h)=>l.toLowerCase().trim()==="admin"&&await w(h)==="6a176086ec9c443fe159921a29c549a731faa9b1c368adbc550b3bc036256af0"?(r.set(A),n.set(!0),localStorage.setItem("currentUser",JSON.stringify(A)),!0):l.toLowerCase().trim()==="youngwomen"&&await w(h)==="dcb2599dbfb8109d6d1cf734be3af136fff113559a01f49fdd11968a0938a115"?(r.set(R),n.set(!0),localStorage.setItem("currentUser",JSON.stringify(R)),!0):l.toLowerCase().trim()==="reliefsociety"&&await w(h)==="dcb2599dbfb8109d6d1cf734be3af136fff113559a01f49fdd11968a0938a115"?(r.set(U),n.set(!0),localStorage.setItem("currentUser",JSON.stringify(U)),!0):l.toLowerCase().trim()==="eldersquorum"&&await w(h)==="dcb2599dbfb8109d6d1cf734be3af136fff113559a01f49fdd11968a0938a115"?(r.set(I),n.set(!0),localStorage.setItem("currentUser",JSON.stringify(I)),!0):(console.log("###",await w(h),l.toLowerCase().trim()),l.toLowerCase().trim()==="teachers"&&await w(h)==="dcb2599dbfb8109d6d1cf734be3af136fff113559a01f49fdd11968a0938a115"?(r.set(j),n.set(!0),localStorage.setItem("currentUser",JSON.stringify(j)),!0):l.toLowerCase().trim()==="primary"&&await w(h)==="dcb2599dbfb8109d6d1cf734be3af136fff113559a01f49fdd11968a0938a115"?(r.set(F),n.set(!0),localStorage.setItem("currentUser",JSON.stringify(F)),!0):l.toLowerCase().trim()==="sundayschool"&&await w(h)==="dcb2599dbfb8109d6d1cf734be3af136fff113559a01f49fdd11968a0938a115"?(r.set(_),n.set(!0),localStorage.setItem("currentUser",JSON.stringify(_)),!0):l.toLowerCase()==="root"&&await w(h)==="6a176086ec9c443fe159921a29c549a731faa9b1c368adbc550b3bc036256af0"?(r.set(Q),n.set(!0),localStorage.setItem("currentUser",JSON.stringify(Q)),!0):(localStorage.setItem("currentUser",JSON.stringify(p)),r.set(p),n.set(!1),!1)),logout:()=>{n.set(!1),localStorage.setItem("currentUser",JSON.stringify(p)),r.set(p)}}},O},Ne=()=>O?.stores&&Object.keys(O.stores).length>0&&O?.actions&&Object.keys(O.actions).length>0?O:We();export{Ce as A,Ae as B,i as U,Ue as a,Y as b,D as c,Ie as d,J as e,le as f,Ne as g,Z as h,it as i,Re as j,et as k,E as l,K as m,$t as n,Gt as o,me as p,X as q,Xt as r,k as s,y as t,Zt as u,re as v,ae as w,ne as x};
