var j=Object.defineProperty;var U=(s,n,e)=>n in s?j(s,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[n]=e;var a=(s,n,e)=>U(s,typeof n!="symbol"?n+"":n,e);import{g as X,c as y,m as J,b as S,d as ee,e as te,h as H,i as F,j as re,k as se,a as A,l as z,n as ne,o as B,p as oe,w as G,q as ae}from"./format.IfTUopx0.js";import{t as P}from"./Header.D2_6XFGq.js";function ie(){return Object.assign({},X())}function ce(s){let e=P(s).getDay();return e===0&&(e=7),e}function ue(s,n){const e=n instanceof Date?y(n,0):new n(0);return e.setFullYear(s.getFullYear(),s.getMonth(),s.getDate()),e.setHours(s.getHours(),s.getMinutes(),s.getSeconds(),s.getMilliseconds()),e}const le=10;class Z{constructor(){a(this,"subPriority",0)}validate(n,e){return!0}}class de extends Z{constructor(n,e,r,t,o){super(),this.value=n,this.validateValue=e,this.setValue=r,this.priority=t,o&&(this.subPriority=o)}validate(n,e){return this.validateValue(n,this.value,e)}set(n,e,r){return this.setValue(n,e,this.value,r)}}class we extends Z{constructor(){super(...arguments);a(this,"priority",le);a(this,"subPriority",-1)}set(e,r){return r.timestampIsSet?e:y(e,ue(e,Date))}}class u{run(n,e,r,t){const o=this.parse(n,e,r,t);return o?{setter:new de(o.value,this.validate,this.set,this.priority,this.subPriority),rest:o.rest}:null}validate(n,e,r){return!0}}class fe extends u{constructor(){super(...arguments);a(this,"priority",140);a(this,"incompatibleTokens",["R","u","t","T"])}parse(e,r,t){switch(r){case"G":case"GG":case"GGG":return t.era(e,{width:"abbreviated"})||t.era(e,{width:"narrow"});case"GGGGG":return t.era(e,{width:"narrow"});case"GGGG":default:return t.era(e,{width:"wide"})||t.era(e,{width:"abbreviated"})||t.era(e,{width:"narrow"})}}set(e,r,t){return r.era=t,e.setFullYear(t,0,1),e.setHours(0,0,0,0),e}}const f={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},m={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function h(s,n){return s&&{value:n(s.value),rest:s.rest}}function l(s,n){const e=n.match(s);return e?{value:parseInt(e[0],10),rest:n.slice(e[0].length)}:null}function T(s,n){const e=n.match(s);if(!e)return null;if(e[0]==="Z")return{value:0,rest:n.slice(1)};const r=e[1]==="+"?1:-1,t=e[2]?parseInt(e[2],10):0,o=e[3]?parseInt(e[3],10):0,i=e[5]?parseInt(e[5],10):0;return{value:r*(t*J+o*S+i*ee),rest:n.slice(e[0].length)}}function K(s){return l(f.anyDigitsSigned,s)}function w(s,n){switch(s){case 1:return l(f.singleDigit,n);case 2:return l(f.twoDigits,n);case 3:return l(f.threeDigits,n);case 4:return l(f.fourDigits,n);default:return l(new RegExp("^\\d{1,"+s+"}"),n)}}function Y(s,n){switch(s){case 1:return l(f.singleDigitSigned,n);case 2:return l(f.twoDigitsSigned,n);case 3:return l(f.threeDigitsSigned,n);case 4:return l(f.fourDigitsSigned,n);default:return l(new RegExp("^-?\\d{1,"+s+"}"),n)}}function I(s){switch(s){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function $(s,n){const e=n>0,r=e?n:1-n;let t;if(r<=50)t=s||100;else{const o=r+50,i=Math.trunc(o/100)*100,p=s>=o%100;t=s+i-(p?100:0)}return e?t:1-t}function V(s){return s%400===0||s%4===0&&s%100!==0}class he extends u{constructor(){super(...arguments);a(this,"priority",130);a(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(e,r,t){const o=i=>({year:i,isTwoDigitYear:r==="yy"});switch(r){case"y":return h(w(4,e),o);case"yo":return h(t.ordinalNumber(e,{unit:"year"}),o);default:return h(w(r.length,e),o)}}validate(e,r){return r.isTwoDigitYear||r.year>0}set(e,r,t){const o=e.getFullYear();if(t.isTwoDigitYear){const p=$(t.year,o);return e.setFullYear(p,0,1),e.setHours(0,0,0,0),e}const i=!("era"in r)||r.era===1?t.year:1-t.year;return e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}}class pe extends u{constructor(){super(...arguments);a(this,"priority",130);a(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(e,r,t){const o=i=>({year:i,isTwoDigitYear:r==="YY"});switch(r){case"Y":return h(w(4,e),o);case"Yo":return h(t.ordinalNumber(e,{unit:"year"}),o);default:return h(w(r.length,e),o)}}validate(e,r){return r.isTwoDigitYear||r.year>0}set(e,r,t,o){const i=te(e,o);if(t.isTwoDigitYear){const x=$(t.year,i);return e.setFullYear(x,0,o.firstWeekContainsDate),e.setHours(0,0,0,0),H(e,o)}const p=!("era"in r)||r.era===1?t.year:1-t.year;return e.setFullYear(p,0,o.firstWeekContainsDate),e.setHours(0,0,0,0),H(e,o)}}class ye extends u{constructor(){super(...arguments);a(this,"priority",130);a(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(e,r){return Y(r==="R"?4:r.length,e)}set(e,r,t){const o=y(e,0);return o.setFullYear(t,0,4),o.setHours(0,0,0,0),F(o)}}class xe extends u{constructor(){super(...arguments);a(this,"priority",130);a(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(e,r){return Y(r==="u"?4:r.length,e)}set(e,r,t){return e.setFullYear(t,0,1),e.setHours(0,0,0,0),e}}class be extends u{constructor(){super(...arguments);a(this,"priority",120);a(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,r,t){switch(r){case"Q":case"QQ":return w(r.length,e);case"Qo":return t.ordinalNumber(e,{unit:"quarter"});case"QQQ":return t.quarter(e,{width:"abbreviated",context:"formatting"})||t.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return t.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(e,{width:"wide",context:"formatting"})||t.quarter(e,{width:"abbreviated",context:"formatting"})||t.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=1&&r<=4}set(e,r,t){return e.setMonth((t-1)*3,1),e.setHours(0,0,0,0),e}}class me extends u{constructor(){super(...arguments);a(this,"priority",120);a(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,r,t){switch(r){case"q":case"qq":return w(r.length,e);case"qo":return t.ordinalNumber(e,{unit:"quarter"});case"qqq":return t.quarter(e,{width:"abbreviated",context:"standalone"})||t.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return t.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(e,{width:"wide",context:"standalone"})||t.quarter(e,{width:"abbreviated",context:"standalone"})||t.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,r){return r>=1&&r<=4}set(e,r,t){return e.setMonth((t-1)*3,1),e.setHours(0,0,0,0),e}}class Te extends u{constructor(){super(...arguments);a(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);a(this,"priority",110)}parse(e,r,t){const o=i=>i-1;switch(r){case"M":return h(l(f.month,e),o);case"MM":return h(w(2,e),o);case"Mo":return h(t.ordinalNumber(e,{unit:"month"}),o);case"MMM":return t.month(e,{width:"abbreviated",context:"formatting"})||t.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return t.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(e,{width:"wide",context:"formatting"})||t.month(e,{width:"abbreviated",context:"formatting"})||t.month(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=0&&r<=11}set(e,r,t){return e.setMonth(t,1),e.setHours(0,0,0,0),e}}class ge extends u{constructor(){super(...arguments);a(this,"priority",110);a(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(e,r,t){const o=i=>i-1;switch(r){case"L":return h(l(f.month,e),o);case"LL":return h(w(2,e),o);case"Lo":return h(t.ordinalNumber(e,{unit:"month"}),o);case"LLL":return t.month(e,{width:"abbreviated",context:"standalone"})||t.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return t.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(e,{width:"wide",context:"standalone"})||t.month(e,{width:"abbreviated",context:"standalone"})||t.month(e,{width:"narrow",context:"standalone"})}}validate(e,r){return r>=0&&r<=11}set(e,r,t){return e.setMonth(t,1),e.setHours(0,0,0,0),e}}function ke(s,n,e){const r=P(s),t=re(r,e)-n;return r.setDate(r.getDate()-t*7),r}class Pe extends u{constructor(){super(...arguments);a(this,"priority",100);a(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(e,r,t){switch(r){case"w":return l(f.week,e);case"wo":return t.ordinalNumber(e,{unit:"week"});default:return w(r.length,e)}}validate(e,r){return r>=1&&r<=53}set(e,r,t,o){return H(ke(e,t,o),o)}}function De(s,n){const e=P(s),r=se(e)-n;return e.setDate(e.getDate()-r*7),e}class Me extends u{constructor(){super(...arguments);a(this,"priority",100);a(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(e,r,t){switch(r){case"I":return l(f.week,e);case"Io":return t.ordinalNumber(e,{unit:"week"});default:return w(r.length,e)}}validate(e,r){return r>=1&&r<=53}set(e,r,t){return F(De(e,t))}}const _e=[31,28,31,30,31,30,31,31,30,31,30,31],Ye=[31,29,31,30,31,30,31,31,30,31,30,31];class Oe extends u{constructor(){super(...arguments);a(this,"priority",90);a(this,"subPriority",1);a(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(e,r,t){switch(r){case"d":return l(f.date,e);case"do":return t.ordinalNumber(e,{unit:"date"});default:return w(r.length,e)}}validate(e,r){const t=e.getFullYear(),o=V(t),i=e.getMonth();return o?r>=1&&r<=Ye[i]:r>=1&&r<=_e[i]}set(e,r,t){return e.setDate(t),e.setHours(0,0,0,0),e}}class Ee extends u{constructor(){super(...arguments);a(this,"priority",90);a(this,"subpriority",1);a(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(e,r,t){switch(r){case"D":case"DD":return l(f.dayOfYear,e);case"Do":return t.ordinalNumber(e,{unit:"date"});default:return w(r.length,e)}}validate(e,r){const t=e.getFullYear();return V(t)?r>=1&&r<=366:r>=1&&r<=365}set(e,r,t){return e.setMonth(0,t),e.setHours(0,0,0,0),e}}function q(s,n,e){var D,_,g,M;const r=X(),t=(e==null?void 0:e.weekStartsOn)??((_=(D=e==null?void 0:e.locale)==null?void 0:D.options)==null?void 0:_.weekStartsOn)??r.weekStartsOn??((M=(g=r.locale)==null?void 0:g.options)==null?void 0:M.weekStartsOn)??0,o=P(s),i=o.getDay(),x=(n%7+7)%7,k=7-t,O=n<0||n>6?n-(i+k)%7:(x+k)%7-(i+k)%7;return A(o,O)}class He extends u{constructor(){super(...arguments);a(this,"priority",90);a(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(e,r,t){switch(r){case"E":case"EE":case"EEE":return t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return t.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=0&&r<=6}set(e,r,t,o){return e=q(e,t,o),e.setHours(0,0,0,0),e}}class Ie extends u{constructor(){super(...arguments);a(this,"priority",90);a(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(e,r,t,o){const i=p=>{const x=Math.floor((p-1)/7)*7;return(p+o.weekStartsOn+6)%7+x};switch(r){case"e":case"ee":return h(w(r.length,e),i);case"eo":return h(t.ordinalNumber(e,{unit:"day"}),i);case"eee":return t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"eeeee":return t.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=0&&r<=6}set(e,r,t,o){return e=q(e,t,o),e.setHours(0,0,0,0),e}}class qe extends u{constructor(){super(...arguments);a(this,"priority",90);a(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(e,r,t,o){const i=p=>{const x=Math.floor((p-1)/7)*7;return(p+o.weekStartsOn+6)%7+x};switch(r){case"c":case"cc":return h(w(r.length,e),i);case"co":return h(t.ordinalNumber(e,{unit:"day"}),i);case"ccc":return t.day(e,{width:"abbreviated",context:"standalone"})||t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"});case"ccccc":return t.day(e,{width:"narrow",context:"standalone"});case"cccccc":return t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return t.day(e,{width:"wide",context:"standalone"})||t.day(e,{width:"abbreviated",context:"standalone"})||t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"})}}validate(e,r){return r>=0&&r<=6}set(e,r,t,o){return e=q(e,t,o),e.setHours(0,0,0,0),e}}function Ne(s,n){const e=P(s),r=ce(e),t=n-r;return A(e,t)}class Le extends u{constructor(){super(...arguments);a(this,"priority",90);a(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(e,r,t){const o=i=>i===0?7:i;switch(r){case"i":case"ii":return w(r.length,e);case"io":return t.ordinalNumber(e,{unit:"day"});case"iii":return h(t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),o);case"iiiii":return h(t.day(e,{width:"narrow",context:"formatting"}),o);case"iiiiii":return h(t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),o);case"iiii":default:return h(t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),o)}}validate(e,r){return r>=1&&r<=7}set(e,r,t){return e=Ne(e,t),e.setHours(0,0,0,0),e}}class Qe extends u{constructor(){super(...arguments);a(this,"priority",80);a(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(e,r,t){switch(r){case"a":case"aa":case"aaa":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,r,t){return e.setHours(I(t),0,0,0),e}}class ve extends u{constructor(){super(...arguments);a(this,"priority",80);a(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(e,r,t){switch(r){case"b":case"bb":case"bbb":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,r,t){return e.setHours(I(t),0,0,0),e}}class Re extends u{constructor(){super(...arguments);a(this,"priority",80);a(this,"incompatibleTokens",["a","b","t","T"])}parse(e,r,t){switch(r){case"B":case"BB":case"BBB":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,r,t){return e.setHours(I(t),0,0,0),e}}class We extends u{constructor(){super(...arguments);a(this,"priority",70);a(this,"incompatibleTokens",["H","K","k","t","T"])}parse(e,r,t){switch(r){case"h":return l(f.hour12h,e);case"ho":return t.ordinalNumber(e,{unit:"hour"});default:return w(r.length,e)}}validate(e,r){return r>=1&&r<=12}set(e,r,t){const o=e.getHours()>=12;return o&&t<12?e.setHours(t+12,0,0,0):!o&&t===12?e.setHours(0,0,0,0):e.setHours(t,0,0,0),e}}class Ce extends u{constructor(){super(...arguments);a(this,"priority",70);a(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(e,r,t){switch(r){case"H":return l(f.hour23h,e);case"Ho":return t.ordinalNumber(e,{unit:"hour"});default:return w(r.length,e)}}validate(e,r){return r>=0&&r<=23}set(e,r,t){return e.setHours(t,0,0,0),e}}class Be extends u{constructor(){super(...arguments);a(this,"priority",70);a(this,"incompatibleTokens",["h","H","k","t","T"])}parse(e,r,t){switch(r){case"K":return l(f.hour11h,e);case"Ko":return t.ordinalNumber(e,{unit:"hour"});default:return w(r.length,e)}}validate(e,r){return r>=0&&r<=11}set(e,r,t){return e.getHours()>=12&&t<12?e.setHours(t+12,0,0,0):e.setHours(t,0,0,0),e}}class Ge extends u{constructor(){super(...arguments);a(this,"priority",70);a(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(e,r,t){switch(r){case"k":return l(f.hour24h,e);case"ko":return t.ordinalNumber(e,{unit:"hour"});default:return w(r.length,e)}}validate(e,r){return r>=1&&r<=24}set(e,r,t){const o=t<=24?t%24:t;return e.setHours(o,0,0,0),e}}class Xe extends u{constructor(){super(...arguments);a(this,"priority",60);a(this,"incompatibleTokens",["t","T"])}parse(e,r,t){switch(r){case"m":return l(f.minute,e);case"mo":return t.ordinalNumber(e,{unit:"minute"});default:return w(r.length,e)}}validate(e,r){return r>=0&&r<=59}set(e,r,t){return e.setMinutes(t,0,0),e}}class Fe extends u{constructor(){super(...arguments);a(this,"priority",50);a(this,"incompatibleTokens",["t","T"])}parse(e,r,t){switch(r){case"s":return l(f.second,e);case"so":return t.ordinalNumber(e,{unit:"second"});default:return w(r.length,e)}}validate(e,r){return r>=0&&r<=59}set(e,r,t){return e.setSeconds(t,0),e}}class Ae extends u{constructor(){super(...arguments);a(this,"priority",30);a(this,"incompatibleTokens",["t","T"])}parse(e,r){const t=o=>Math.trunc(o*Math.pow(10,-r.length+3));return h(w(r.length,e),t)}set(e,r,t){return e.setMilliseconds(t),e}}class ze extends u{constructor(){super(...arguments);a(this,"priority",10);a(this,"incompatibleTokens",["t","T","x"])}parse(e,r){switch(r){case"X":return T(m.basicOptionalMinutes,e);case"XX":return T(m.basic,e);case"XXXX":return T(m.basicOptionalSeconds,e);case"XXXXX":return T(m.extendedOptionalSeconds,e);case"XXX":default:return T(m.extended,e)}}set(e,r,t){return r.timestampIsSet?e:y(e,e.getTime()-z(e)-t)}}class Ze extends u{constructor(){super(...arguments);a(this,"priority",10);a(this,"incompatibleTokens",["t","T","X"])}parse(e,r){switch(r){case"x":return T(m.basicOptionalMinutes,e);case"xx":return T(m.basic,e);case"xxxx":return T(m.basicOptionalSeconds,e);case"xxxxx":return T(m.extendedOptionalSeconds,e);case"xxx":default:return T(m.extended,e)}}set(e,r,t){return r.timestampIsSet?e:y(e,e.getTime()-z(e)-t)}}class Ke extends u{constructor(){super(...arguments);a(this,"priority",40);a(this,"incompatibleTokens","*")}parse(e){return K(e)}set(e,r,t){return[y(e,t*1e3),{timestampIsSet:!0}]}}class $e extends u{constructor(){super(...arguments);a(this,"priority",20);a(this,"incompatibleTokens","*")}parse(e){return K(e)}set(e,r,t){return[y(e,t),{timestampIsSet:!0}]}}const Ve={G:new fe,y:new he,Y:new pe,R:new ye,u:new xe,Q:new be,q:new me,M:new Te,L:new ge,w:new Pe,I:new Me,d:new Oe,D:new Ee,E:new He,e:new Ie,c:new qe,i:new Le,a:new Qe,b:new ve,B:new Re,h:new We,H:new Ce,K:new Be,k:new Ge,m:new Xe,s:new Fe,S:new Ae,X:new ze,x:new Ze,t:new Ke,T:new $e},je=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ue=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Je=/^'([^]*?)'?$/,Se=/''/g,et=/\S/,tt=/[a-zA-Z]/;function at(s,n,e,r){var N,L,Q,v;const t=ie(),o=t.locale??ne,i=t.firstWeekContainsDate??((L=(N=t.locale)==null?void 0:N.options)==null?void 0:L.firstWeekContainsDate)??1,p=t.weekStartsOn??((v=(Q=t.locale)==null?void 0:Q.options)==null?void 0:v.weekStartsOn)??0;if(n==="")return s===""?P(e):y(e,NaN);const x={firstWeekContainsDate:i,weekStartsOn:p,locale:o},k=[new we],O=n.match(Ue).map(c=>{const d=c[0];if(d in B){const b=B[d];return b(c,o.formatLong)}return c}).join("").match(je),D=[];for(let c of O){oe(c)&&G(c,n,s),ae(c)&&G(c,n,s);const d=c[0],b=Ve[d];if(b){const{incompatibleTokens:R}=b;if(Array.isArray(R)){const W=D.find(C=>R.includes(C.token)||C.token===d);if(W)throw new RangeError(`The format string mustn't contain \`${W.fullToken}\` and \`${c}\` at the same time`)}else if(b.incompatibleTokens==="*"&&D.length>0)throw new RangeError(`The format string mustn't contain \`${c}\` and any other token at the same time`);D.push({token:d,fullToken:c});const E=b.run(s,c,o.match,x);if(!E)return y(e,NaN);k.push(E.setter),s=E.rest}else{if(d.match(tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+d+"`");if(c==="''"?c="'":d==="'"&&(c=rt(c)),s.indexOf(c)===0)s=s.slice(c.length);else return y(e,NaN)}}if(s.length>0&&et.test(s))return y(e,NaN);const _=k.map(c=>c.priority).sort((c,d)=>d-c).filter((c,d,b)=>b.indexOf(c)===d).map(c=>k.filter(d=>d.priority===c).sort((d,b)=>b.subPriority-d.subPriority)).map(c=>c[0]);let g=P(e);if(isNaN(g.getTime()))return y(e,NaN);const M={};for(const c of _){if(!c.validate(g,x))return y(e,NaN);const d=c.set(g,M,x);Array.isArray(d)?(g=d[0],Object.assign(M,d[1])):g=d}return y(e,g)}function rt(s){return s.match(Je)[1].replace(Se,"'")}export{at as p};
