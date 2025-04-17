import{t as Y,c as _,b as K,l as se,n as ne,o as ae,q as oe,s as W,r as j,u as ie,v as ue,d as J,e as ce,w as F,x as le,y as U,z as de}from"./B2dSSLxH.js";import{s as we,c as fe,u as he,g as pe,a as be}from"./COA0UztD.js";import{S as ye,i as me,d as E,t as xe,a as Te,s as ge,f as g,c as _e,e as I,k as H,l as q,o as De,g as V,r as N,u as ke,p as z}from"./DIwQssza.js";function $(s,e){const t=Y(s);return isNaN(e)?_(s,NaN):(e&&t.setDate(t.getDate()+e),t)}function Pe(){return Object.assign({},K())}function Me(s){let t=Y(s).getDay();return t===0&&(t=7),t}function ve(s,e){const t=e instanceof Date?_(e,0):new e(0);return t.setFullYear(s.getFullYear(),s.getMonth(),s.getDate()),t.setHours(s.getHours(),s.getMinutes(),s.getSeconds(),s.getMilliseconds()),t}const Ie=10;class S{subPriority=0;validate(e,t){return!0}}class Ye extends S{constructor(e,t,r,n,a){super(),this.value=e,this.validateValue=t,this.setValue=r,this.priority=n,a&&(this.subPriority=a)}validate(e,t){return this.validateValue(e,this.value,t)}set(e,t,r){return this.setValue(e,t,this.value,r)}}class Ee extends S{priority=Ie;subPriority=-1;set(e,t){return t.timestampIsSet?e:_(e,ve(e,Date))}}class u{run(e,t,r,n){const a=this.parse(e,t,r,n);return a?{setter:new Ye(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}validate(e,t,r){return!0}}class Oe extends u{priority=140;parse(e,t,r){switch(t){case"G":case"GG":case"GGG":return r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"});case"GGGGG":return r.era(e,{width:"narrow"});case"GGGG":default:return r.era(e,{width:"wide"})||r.era(e,{width:"abbreviated"})||r.era(e,{width:"narrow"})}}set(e,t,r){return t.era=r,e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}incompatibleTokens=["R","u","t","T"]}const f={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},M={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function h(s,e){return s&&{value:e(s.value),rest:s.rest}}function d(s,e){const t=e.match(s);return t?{value:parseInt(t[0],10),rest:e.slice(t[0].length)}:null}function v(s,e){const t=e.match(s);if(!t)return null;if(t[0]==="Z")return{value:0,rest:e.slice(1)};const r=t[1]==="+"?1:-1,n=t[2]?parseInt(t[2],10):0,a=t[3]?parseInt(t[3],10):0,i=t[5]?parseInt(t[5],10):0;return{value:r*(n*se+a*ne+i*ae),rest:e.slice(t[0].length)}}function ee(s){return d(f.anyDigitsSigned,s)}function w(s,e){switch(s){case 1:return d(f.singleDigit,e);case 2:return d(f.twoDigits,e);case 3:return d(f.threeDigits,e);case 4:return d(f.fourDigits,e);default:return d(new RegExp("^\\d{1,"+s+"}"),e)}}function Q(s,e){switch(s){case 1:return d(f.singleDigitSigned,e);case 2:return d(f.twoDigitsSigned,e);case 3:return d(f.threeDigitsSigned,e);case 4:return d(f.fourDigitsSigned,e);default:return d(new RegExp("^-?\\d{1,"+s+"}"),e)}}function B(s){switch(s){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function te(s,e){const t=e>0,r=t?e:1-e;let n;if(r<=50)n=s||100;else{const a=r+50,i=Math.trunc(a/100)*100,y=s>=a%100;n=s+i-(y?100:0)}return t?n:1-n}function re(s){return s%400===0||s%4===0&&s%100!==0}class He extends u{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(e,t,r){const n=a=>({year:a,isTwoDigitYear:t==="yy"});switch(t){case"y":return h(w(4,e),n);case"yo":return h(r.ordinalNumber(e,{unit:"year"}),n);default:return h(w(t.length,e),n)}}validate(e,t){return t.isTwoDigitYear||t.year>0}set(e,t,r){const n=e.getFullYear();if(r.isTwoDigitYear){const i=te(r.year,n);return e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}const a=!("era"in t)||t.era===1?r.year:1-r.year;return e.setFullYear(a,0,1),e.setHours(0,0,0,0),e}}class qe extends u{priority=130;parse(e,t,r){const n=a=>({year:a,isTwoDigitYear:t==="YY"});switch(t){case"Y":return h(w(4,e),n);case"Yo":return h(r.ordinalNumber(e,{unit:"year"}),n);default:return h(w(t.length,e),n)}}validate(e,t){return t.isTwoDigitYear||t.year>0}set(e,t,r,n){const a=oe(e,n);if(r.isTwoDigitYear){const y=te(r.year,a);return e.setFullYear(y,0,n.firstWeekContainsDate),e.setHours(0,0,0,0),W(e,n)}const i=!("era"in t)||t.era===1?r.year:1-r.year;return e.setFullYear(i,0,n.firstWeekContainsDate),e.setHours(0,0,0,0),W(e,n)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class Ne extends u{priority=130;parse(e,t){return Q(t==="R"?4:t.length,e)}set(e,t,r){const n=_(e,0);return n.setFullYear(r,0,4),n.setHours(0,0,0,0),j(n)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class Le extends u{priority=130;parse(e,t){return Q(t==="u"?4:t.length,e)}set(e,t,r){return e.setFullYear(r,0,1),e.setHours(0,0,0,0),e}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class Qe extends u{priority=120;parse(e,t,r){switch(t){case"Q":case"QQ":return w(t.length,e);case"Qo":return r.ordinalNumber(e,{unit:"quarter"});case"QQQ":return r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(e,{width:"wide",context:"formatting"})||r.quarter(e,{width:"abbreviated",context:"formatting"})||r.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=1&&t<=4}set(e,t,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class Re extends u{priority=120;parse(e,t,r){switch(t){case"q":case"qq":return w(t.length,e);case"qo":return r.ordinalNumber(e,{unit:"quarter"});case"qqq":return r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(e,{width:"wide",context:"standalone"})||r.quarter(e,{width:"abbreviated",context:"standalone"})||r.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,t){return t>=1&&t<=4}set(e,t,r){return e.setMonth((r-1)*3,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class Ce extends u{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(e,t,r){const n=a=>a-1;switch(t){case"M":return h(d(f.month,e),n);case"MM":return h(w(2,e),n);case"Mo":return h(r.ordinalNumber(e,{unit:"month"}),n);case"MMM":return r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(e,{width:"wide",context:"formatting"})||r.month(e,{width:"abbreviated",context:"formatting"})||r.month(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=0&&t<=11}set(e,t,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}}class We extends u{priority=110;parse(e,t,r){const n=a=>a-1;switch(t){case"L":return h(d(f.month,e),n);case"LL":return h(w(2,e),n);case"Lo":return h(r.ordinalNumber(e,{unit:"month"}),n);case"LLL":return r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(e,{width:"wide",context:"standalone"})||r.month(e,{width:"abbreviated",context:"standalone"})||r.month(e,{width:"narrow",context:"standalone"})}}validate(e,t){return t>=0&&t<=11}set(e,t,r){return e.setMonth(r,1),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function Be(s,e,t){const r=Y(s),n=ie(r,t)-e;return r.setDate(r.getDate()-n*7),r}class Ge extends u{priority=100;parse(e,t,r){switch(t){case"w":return d(f.week,e);case"wo":return r.ordinalNumber(e,{unit:"week"});default:return w(t.length,e)}}validate(e,t){return t>=1&&t<=53}set(e,t,r,n){return W(Be(e,r,n),n)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function Xe(s,e){const t=Y(s),r=ue(t)-e;return t.setDate(t.getDate()-r*7),t}class Ae extends u{priority=100;parse(e,t,r){switch(t){case"I":return d(f.week,e);case"Io":return r.ordinalNumber(e,{unit:"week"});default:return w(t.length,e)}}validate(e,t){return t>=1&&t<=53}set(e,t,r){return j(Xe(e,r))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const Fe=[31,28,31,30,31,30,31,31,30,31,30,31],Ue=[31,29,31,30,31,30,31,31,30,31,30,31];class Ve extends u{priority=90;subPriority=1;parse(e,t,r){switch(t){case"d":return d(f.date,e);case"do":return r.ordinalNumber(e,{unit:"date"});default:return w(t.length,e)}}validate(e,t){const r=e.getFullYear(),n=re(r),a=e.getMonth();return n?t>=1&&t<=Ue[a]:t>=1&&t<=Fe[a]}set(e,t,r){return e.setDate(r),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class ze extends u{priority=90;subpriority=1;parse(e,t,r){switch(t){case"D":case"DD":return d(f.dayOfYear,e);case"Do":return r.ordinalNumber(e,{unit:"date"});default:return w(t.length,e)}}validate(e,t){const r=e.getFullYear();return re(r)?t>=1&&t<=366:t>=1&&t<=365}set(e,t,r){return e.setMonth(0,r),e.setHours(0,0,0,0),e}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function G(s,e,t){const r=K(),n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,a=Y(s),i=a.getDay(),k=(e%7+7)%7,b=7-n,P=e<0||e>6?e-(i+b)%7:(k+b)%7-(i+b)%7;return $(a,P)}class Ze extends u{priority=90;parse(e,t,r){switch(t){case"E":case"EE":case"EEE":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=0&&t<=6}set(e,t,r,n){return e=G(e,r,n),e.setHours(0,0,0,0),e}incompatibleTokens=["D","i","e","c","t","T"]}class Ke extends u{priority=90;parse(e,t,r,n){const a=i=>{const y=Math.floor((i-1)/7)*7;return(i+n.weekStartsOn+6)%7+y};switch(t){case"e":case"ee":return h(w(t.length,e),a);case"eo":return h(r.ordinalNumber(e,{unit:"day"}),a);case"eee":return r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeeee":return r.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"})}}validate(e,t){return t>=0&&t<=6}set(e,t,r,n){return e=G(e,r,n),e.setHours(0,0,0,0),e}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class je extends u{priority=90;parse(e,t,r,n){const a=i=>{const y=Math.floor((i-1)/7)*7;return(i+n.weekStartsOn+6)%7+y};switch(t){case"c":case"cc":return h(w(t.length,e),a);case"co":return h(r.ordinalNumber(e,{unit:"day"}),a);case"ccc":return r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"ccccc":return r.day(e,{width:"narrow",context:"standalone"});case"cccccc":return r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return r.day(e,{width:"wide",context:"standalone"})||r.day(e,{width:"abbreviated",context:"standalone"})||r.day(e,{width:"short",context:"standalone"})||r.day(e,{width:"narrow",context:"standalone"})}}validate(e,t){return t>=0&&t<=6}set(e,t,r,n){return e=G(e,r,n),e.setHours(0,0,0,0),e}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function Je(s,e){const t=Y(s),r=Me(t),n=e-r;return $(t,n)}class $e extends u{priority=90;parse(e,t,r){const n=a=>a===0?7:a;switch(t){case"i":case"ii":return w(t.length,e);case"io":return r.ordinalNumber(e,{unit:"day"});case"iii":return h(r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),n);case"iiiii":return h(r.day(e,{width:"narrow",context:"formatting"}),n);case"iiiiii":return h(r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),n);case"iiii":default:return h(r.day(e,{width:"wide",context:"formatting"})||r.day(e,{width:"abbreviated",context:"formatting"})||r.day(e,{width:"short",context:"formatting"})||r.day(e,{width:"narrow",context:"formatting"}),n)}}validate(e,t){return t>=1&&t<=7}set(e,t,r){return e=Je(e,r),e.setHours(0,0,0,0),e}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class Se extends u{priority=80;parse(e,t,r){switch(t){case"a":case"aa":case"aaa":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,t,r){return e.setHours(B(r),0,0,0),e}incompatibleTokens=["b","B","H","k","t","T"]}class et extends u{priority=80;parse(e,t,r){switch(t){case"b":case"bb":case"bbb":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,t,r){return e.setHours(B(r),0,0,0),e}incompatibleTokens=["a","B","H","k","t","T"]}class tt extends u{priority=80;parse(e,t,r){switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(e,{width:"wide",context:"formatting"})||r.dayPeriod(e,{width:"abbreviated",context:"formatting"})||r.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,t,r){return e.setHours(B(r),0,0,0),e}incompatibleTokens=["a","b","t","T"]}class rt extends u{priority=70;parse(e,t,r){switch(t){case"h":return d(f.hour12h,e);case"ho":return r.ordinalNumber(e,{unit:"hour"});default:return w(t.length,e)}}validate(e,t){return t>=1&&t<=12}set(e,t,r){const n=e.getHours()>=12;return n&&r<12?e.setHours(r+12,0,0,0):!n&&r===12?e.setHours(0,0,0,0):e.setHours(r,0,0,0),e}incompatibleTokens=["H","K","k","t","T"]}class st extends u{priority=70;parse(e,t,r){switch(t){case"H":return d(f.hour23h,e);case"Ho":return r.ordinalNumber(e,{unit:"hour"});default:return w(t.length,e)}}validate(e,t){return t>=0&&t<=23}set(e,t,r){return e.setHours(r,0,0,0),e}incompatibleTokens=["a","b","h","K","k","t","T"]}class nt extends u{priority=70;parse(e,t,r){switch(t){case"K":return d(f.hour11h,e);case"Ko":return r.ordinalNumber(e,{unit:"hour"});default:return w(t.length,e)}}validate(e,t){return t>=0&&t<=11}set(e,t,r){return e.getHours()>=12&&r<12?e.setHours(r+12,0,0,0):e.setHours(r,0,0,0),e}incompatibleTokens=["h","H","k","t","T"]}class at extends u{priority=70;parse(e,t,r){switch(t){case"k":return d(f.hour24h,e);case"ko":return r.ordinalNumber(e,{unit:"hour"});default:return w(t.length,e)}}validate(e,t){return t>=1&&t<=24}set(e,t,r){const n=r<=24?r%24:r;return e.setHours(n,0,0,0),e}incompatibleTokens=["a","b","h","H","K","t","T"]}class ot extends u{priority=60;parse(e,t,r){switch(t){case"m":return d(f.minute,e);case"mo":return r.ordinalNumber(e,{unit:"minute"});default:return w(t.length,e)}}validate(e,t){return t>=0&&t<=59}set(e,t,r){return e.setMinutes(r,0,0),e}incompatibleTokens=["t","T"]}class it extends u{priority=50;parse(e,t,r){switch(t){case"s":return d(f.second,e);case"so":return r.ordinalNumber(e,{unit:"second"});default:return w(t.length,e)}}validate(e,t){return t>=0&&t<=59}set(e,t,r){return e.setSeconds(r,0),e}incompatibleTokens=["t","T"]}class ut extends u{priority=30;parse(e,t){const r=n=>Math.trunc(n*Math.pow(10,-t.length+3));return h(w(t.length,e),r)}set(e,t,r){return e.setMilliseconds(r),e}incompatibleTokens=["t","T"]}class ct extends u{priority=10;parse(e,t){switch(t){case"X":return v(M.basicOptionalMinutes,e);case"XX":return v(M.basic,e);case"XXXX":return v(M.basicOptionalSeconds,e);case"XXXXX":return v(M.extendedOptionalSeconds,e);case"XXX":default:return v(M.extended,e)}}set(e,t,r){return t.timestampIsSet?e:_(e,e.getTime()-J(e)-r)}incompatibleTokens=["t","T","x"]}class lt extends u{priority=10;parse(e,t){switch(t){case"x":return v(M.basicOptionalMinutes,e);case"xx":return v(M.basic,e);case"xxxx":return v(M.basicOptionalSeconds,e);case"xxxxx":return v(M.extendedOptionalSeconds,e);case"xxx":default:return v(M.extended,e)}}set(e,t,r){return t.timestampIsSet?e:_(e,e.getTime()-J(e)-r)}incompatibleTokens=["t","T","X"]}class dt extends u{priority=40;parse(e){return ee(e)}set(e,t,r){return[_(e,r*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class wt extends u{priority=20;parse(e){return ee(e)}set(e,t,r){return[_(e,r),{timestampIsSet:!0}]}incompatibleTokens="*"}const ft={G:new Oe,y:new He,Y:new qe,R:new Ne,u:new Le,Q:new Qe,q:new Re,M:new Ce,L:new We,w:new Ge,I:new Ae,d:new Ve,D:new ze,E:new Ze,e:new Ke,c:new je,i:new $e,a:new Se,b:new et,B:new tt,h:new rt,H:new st,K:new nt,k:new at,m:new ot,s:new it,S:new ut,X:new ct,x:new lt,t:new dt,T:new wt},ht=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,pt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,bt=/^'([^]*?)'?$/,yt=/''/g,mt=/\S/,xt=/[a-zA-Z]/;function Ot(s,e,t,r){const n=Pe(),a=n.locale??ce,i=n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,y=n.weekStartsOn??n.locale?.options?.weekStartsOn??0,k={firstWeekContainsDate:i,weekStartsOn:y,locale:a},b=[new Ee],P=e.match(pt).map(o=>{const c=o[0];if(c in F){const D=F[c];return D(o,a.formatLong)}return o}).join("").match(ht),x=[];for(let o of P){le(o)&&U(o,e,s),de(o)&&U(o,e,s);const c=o[0],D=ft[c];if(D){const{incompatibleTokens:O}=D;if(Array.isArray(O)){const X=x.find(A=>O.includes(A.token)||A.token===c);if(X)throw new RangeError(`The format string mustn't contain \`${X.fullToken}\` and \`${o}\` at the same time`)}else if(D.incompatibleTokens==="*"&&x.length>0)throw new RangeError(`The format string mustn't contain \`${o}\` and any other token at the same time`);x.push({token:c,fullToken:o});const R=D.run(s,o,a.match,k);if(!R)return _(t,NaN);b.push(R.setter),s=R.rest}else{if(c.match(xt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+c+"`");if(o==="''"?o="'":c==="'"&&(o=Tt(o)),s.indexOf(o)===0)s=s.slice(o.length);else return _(t,NaN)}}if(s.length>0&&mt.test(s))return _(t,NaN);const T=b.map(o=>o.priority).sort((o,c)=>c-o).filter((o,c,D)=>D.indexOf(o)===c).map(o=>b.filter(c=>c.priority===o).sort((c,D)=>D.subPriority-c.subPriority)).map(o=>o[0]);let p=Y(t);if(isNaN(p.getTime()))return _(t,NaN);const l={};for(const o of T){if(!o.validate(p,k))return _(t,NaN);const c=o.set(p,l,k);Array.isArray(c)?(p=c[0],Object.assign(l,c[1])):p=c}return _(t,p)}function Tt(s){return s.match(bt)[1].replace(yt,"'")}var m=[];for(var C=0;C<256;++C)m.push((C+256).toString(16).slice(1));function gt(s,e=0){return(m[s[e+0]]+m[s[e+1]]+m[s[e+2]]+m[s[e+3]]+"-"+m[s[e+4]]+m[s[e+5]]+"-"+m[s[e+6]]+m[s[e+7]]+"-"+m[s[e+8]]+m[s[e+9]]+"-"+m[s[e+10]]+m[s[e+11]]+m[s[e+12]]+m[s[e+13]]+m[s[e+14]]+m[s[e+15]]).toLowerCase()}var L,_t=new Uint8Array(16);function Dt(){if(!L&&(L=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!L))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return L(_t)}var kt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Z={randomUUID:kt};function Pt(s,e,t){if(Z.randomUUID&&!s)return Z.randomUUID();s=s||{};var r=s.random||(s.rng||Dt)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,gt(r)}function Mt(s){let e,t,r,n,a,i,y,k,b,P,x;const T=s[8].default,p=fe(T,s,s[7],null);return{c(){e=N("div"),t=N("div"),r=N("h4"),n=ke(s[1]),a=z(),i=N("button"),k=z(),b=N("div"),p&&p.c(),this.h()},l(l){e=H(l,"DIV",{class:!0,tabindex:!0,id:!0,"aria-labelledby":!0});var o=q(e);t=H(o,"DIV",{class:!0});var c=q(t);r=H(c,"H4",{class:!0,id:!0});var D=q(r);n=De(D,s[1]),D.forEach(E),a=V(c),i=H(c,"BUTTON",{type:!0,class:!0,"data-bs-dismiss":!0,"data-bs-target":!0,"aria-label":!0}),q(i).forEach(E),c.forEach(E),k=V(o),b=H(o,"DIV",{class:!0});var O=q(b);p&&p.l(O),O.forEach(E),o.forEach(E),this.h()},h(){g(r,"class","offcanvas-title"),g(r,"id",s[4]),g(i,"type","button"),g(i,"class","btn-close"),g(i,"data-bs-dismiss","offcanvas"),g(i,"data-bs-target",y="#"+s[0]),g(i,"aria-label","Close"),g(t,"class","offcanvas-header"),g(b,"class","offcanvas-body"),g(e,"class",P=s[3]+" "+s[2]),g(e,"tabindex","-1"),g(e,"id",s[0]),g(e,"aria-labelledby",s[4])},m(l,o){_e(l,e,o),I(e,t),I(t,r),I(r,n),I(t,a),I(t,i),I(e,k),I(e,b),p&&p.m(b,null),x=!0},p(l,[o]){(!x||o&2)&&ge(n,l[1]),(!x||o&1&&y!==(y="#"+l[0]))&&g(i,"data-bs-target",y),p&&p.p&&(!x||o&128)&&he(p,T,l,l[7],x?be(T,l[7],o,null):pe(l[7]),null),(!x||o&12&&P!==(P=l[3]+" "+l[2]))&&g(e,"class",P),(!x||o&1)&&g(e,"id",l[0])},i(l){x||(Te(p,l),x=!0)},o(l){xe(p,l),x=!1},d(l){l&&E(e),p&&p.d(l)}}}function vt(s,e,t){let r,n,{$$slots:a={},$$scope:i}=e,{id:y}=e,{title:k}=e,{breakpoint:b=""}=e,{placement:P="end"}=e;const x=Pt();return s.$$set=T=>{"id"in T&&t(0,y=T.id),"title"in T&&t(1,k=T.title),"breakpoint"in T&&t(5,b=T.breakpoint),"placement"in T&&t(6,P=T.placement),"$$scope"in T&&t(7,i=T.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&t(3,r=`offcanvas${b===""?"":"-"+b}`),s.$$.dirty&64&&t(2,n=`offcanvas-${P}`)},[y,k,n,r,x,b,P,i,a]}class Ht extends ye{constructor(e){super(),me(this,e,vt,Mt,we,{id:0,title:1,breakpoint:5,placement:6})}}export{Ht as D,$ as a,Ot as p,Pt as v};
