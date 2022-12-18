"use strict";(self.webpackChunklehi31=self.webpackChunklehi31||[]).push([[549],{7993:(Y,h,p)=>{p.d(h,{YG:()=>e,E_:()=>l,EJ:()=>d});var e=(()=>{return(a=e||(e={})).General="general",a.Stake="stake",a.Ward="ward",e;var a})(),l=(()=>{return(a=l||(l={}))[a.First=1]="First",a[a.Second=2]="Second",a[a.Third=3]="Third",a[a.Fourth=4]="Fourth",a[a.Fifth=5]="Fifth",a[a.Sixth=6]="Sixth",a[a.Seventh=7]="Seventh",a[a.Eighth=8]="Eighth",a[a.Ninth=9]="Ninth",a[a.Tenth=10]="Tenth",a[a.Eleventh=11]="Eleventh",a[a.Twelve=12]="Twelve",a[a.Thirteenth=13]="Thirteenth",a[a.Fourteenth=14]="Fourteenth",a[a.Fifteenth=15]="Fifteenth",a[a.Sixteenth=16]="Sixteenth",a[a.Seventeenth=17]="Seventeenth",a[a.Eighteenth=18]="Eighteenth",a[a.Nineteenth=19]="Nineteenth",a[a.Twentieth=20]="Twentieth",a[a.TwentyFirst=21]="TwentyFirst",a[a.TwentySecond=22]="TwentySecond",a[a.TwentyThird=23]="TwentyThird",a[a.TwentyFourth=24]="TwentyFourth",a[a.TwentyFifth=25]="TwentyFifth",a[a.TwentySixth=26]="TwentySixth",a[a.TwentySeventh=27]="TwentySeventh",a[a.TwentyEighth=28]="TwentyEighth",a[a.TwentyNinth=29]="TwentyNinth",a[a.Thirtieth=30]="Thirtieth",a[a.ThirtyFirst=31]="ThirtyFirst",l;var a})(),d=(()=>{return(a=d||(d={}))[a.January=0]="January",a[a.February=1]="February",a[a.March=2]="March",a[a.April=3]="April",a[a.May=4]="May",a[a.June=5]="June",a[a.July=6]="July",a[a.August=7]="August",a[a.September=8]="September",a[a.October=9]="October",a[a.November=10]="November",a[a.December=11]="December",d;var a})()},8549:(Y,h,p)=>{p.d(h,{Vg:()=>ce,Zw:()=>Se,Bo:()=>fe,Nt:()=>pe,lX:()=>Ee,uB:()=>Ae,yl:()=>he});var e=(()=>{return(i=e||(e={})).Bishopric="bishopric",i.EldersQuorum="elders-quorum",i.ReliefSociety="relief-society",i.AaronicPriesthoodQuorums="aaronic-priesthood-quorums",i.YoungWomen="young-woman",i.SundaySchool="sunday-school",i.Primary="primary",i.WardMissionaries="ward-missionaries",i.FullTimeMissionaries="full-time-missionaries",i.TempleFamilyHistory="temple-family-history",i.OtherCallings="other-callings",e;var i})();const l={};l[e.Bishopric]="Bishopric",l[e.EldersQuorum]="Elders Quorum",l[e.ReliefSociety]="Relief Society",l[e.AaronicPriesthoodQuorums]="Aaronic Priesthood Quorums",l[e.YoungWomen]="Young Women",l[e.SundaySchool]="Sunday School",l[e.Primary]="Primary",l[e.WardMissionaries]="Ward Missionaries",l[e.FullTimeMissionaries]="Full Time Missionaries",l[e.TempleFamilyHistory]="Temple and Family History",l[e.OtherCallings]="Other Callings";var d=p(6215);const D=(()=>{const i=new d.X([]),f=new d.X([]),c=new d.X([]),E=new d.X([]),y=new d.X([]),b=new d.X([]),v=new d.X([]),g=new d.X([]),R=new d.X([]);return{stores:{members:i,callings:f,callingGroups:c,callingsThatNeedFilling:E,callingsThatNeedApproval:y,callingsThatNeedExtending:b,callingsThatNeedSomeoneElse:v,callingsThatNeedSustaining:g,callingsThatNeedSetApart:R},actions:{reset:()=>{i.next([]),f.next([]),c.next([]),E.next([]),g.next([]),R.next([])},hydrateCallings:()=>{const u=i.getValue(),o=f.getValue().map(r=>{const t=r.history.map(S=>Object.assign(Object.assign({},S),{member:u.find(ge=>ge.id===S.memberId)})),T=t.find(S=>!S.isReleased).member;return Object.assign(Object.assign({},r),{history:t,member:T})});f.next(o)},generateCallingGroups:()=>{const n=f.getValue().reduce((r,t)=>(r[t.organization]=r[t.organization]||[],r[t.organization].push(t),r),{}),o=Object.entries(n).map(r=>({group:r[0],name:l[r[0]],callings:r[1]}));c.next(o)},generateCallingsThatNeedFilling:()=>{const u=c.getValue().map(n=>{const o=n.callings.filter(r=>0===r.member.id);return Object.assign(Object.assign({},n),{callings:o})});E.next(u)},generateCallingsThatNeedApproval:()=>{const u=c.getValue().map(n=>{const o=n.callings.filter(r=>{if(0===r.member.id)return!1;const t=r.history.find(m=>m.isCurrent);return!(!t||null!==t.isApproved||t.accepted||t.sustainedDate||t.isSetApart)});return Object.assign(Object.assign({},n),{callings:o})});y.next(u)},generateCallingsThatNeedExtending:()=>{const u=c.getValue().map(n=>{const o=n.callings.filter(r=>{if(0===r.member.id)return!1;const t=r.history.find(m=>m.isCurrent);return!!t&&t.isApproved&&!t.accepted&&!t.sustainedDate&&!t.isSetApart});return Object.assign(Object.assign({},n),{callings:o})});b.next(u)},generateCallingsThatNeedSomeElse:()=>{const u=c.getValue().map(n=>{const o=n.callings.filter(r=>{if(0===r.member.id)return!1;const t=r.history.find(S=>S.isCurrent);return!!t&&("NO"===t.isApproved&&!t.accepted&&!t.sustainedDate&&!t.isSetApart||t.isApproved&&"NO"===t.accepted&&!t.sustainedDate&&!t.isSetApart)});return Object.assign(Object.assign({},n),{callings:o})});v.next(u)},generateCallingsThatNeedToSustain:()=>{const u=c.getValue().map(n=>{const o=n.callings.filter(r=>{if(0===r.member.id)return!1;const t=r.history.find(m=>m.isCurrent);return!!t&&t.isApproved&&"YES"===t.accepted&&!t.sustainedDate&&!t.isSetApart});return Object.assign(Object.assign({},n),{callings:o})});g.next(u)},generateCallingsThatNeedToSetApart:()=>{const u=c.getValue().map(n=>{const o=n.callings.filter(r=>{if(0===r.member.id)return!1;const t=r.history.find(m=>m.isCurrent);return!!t&&t.isApproved&&"YES"===t.accepted&&t.sustainedDate&&!t.isSetApart});return Object.assign(Object.assign({},n),{callings:o})});R.next(u)}}}})();var s=p(7993);const A=[{name:"Bishop",organization:e.Bishopric,history:[{memberId:79,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Bishopric First Counselor",organization:e.Bishopric,history:[{memberId:318,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Bishopric Second Counselor",organization:e.Bishopric,history:[{memberId:301,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Executive Secretary",organization:e.Bishopric,history:[{memberId:303,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Assistant Executive Secretary",organization:e.Bishopric,history:[{memberId:83,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Assistant Executive Secretary",organization:e.Bishopric,history:[{memberId:282,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk",organization:e.Bishopric,history:[{memberId:218,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk--Membership",organization:e.Bishopric,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk--Finance",organization:e.Bishopric,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],C=[{name:"Sunday School President",organization:e.SundaySchool,history:[{memberId:251,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School First Counselor",organization:e.SundaySchool,history:[{memberId:131,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Second Counselor",organization:e.SundaySchool,history:[{memberId:87,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Secretary",organization:e.SundaySchool,history:[{memberId:221,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],I=[{name:"Sunday School - Gospel Doctrine - Teacher",organization:e.SundaySchool,history:[{memberId:363,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Teacher",organization:e.SundaySchool,history:[{memberId:359,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Youth Teacher",organization:e.SundaySchool,history:[{memberId:361,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Youth Teacher",organization:e.SundaySchool,history:[{memberId:362,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Youth Teacher",organization:e.SundaySchool,history:[{memberId:365,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Youth Teacher",organization:e.SundaySchool,history:[{memberId:366,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],N=[{name:"Primary President",organization:e.Primary,history:[{memberId:258,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary First Counselor",organization:e.Primary,history:[{memberId:29,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Second Counselor",organization:e.Primary,history:[{memberId:225,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Secretary",organization:e.Primary,history:[{memberId:354,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Pianist",organization:e.Primary,history:[{memberId:64,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Leader",organization:e.Primary,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:86,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:283,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:98,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:77,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:238,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:8,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:329,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Eleventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:4,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:105,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:106,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:280,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:279,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:84,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:367,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:368,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:64,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:206,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:48,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:51,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Girls Leader",organization:e.Primary,history:[{memberId:121,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Boys Leader",organization:e.Primary,history:[{memberId:351,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Pianist",organization:e.Primary,history:[{memberId:66,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Boys Leader",organization:e.Primary,history:[{memberId:297,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Leader",organization:e.Primary,history:[{memberId:15,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Leader Assistant",organization:e.Primary,history:[{memberId:220,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],w=[{name:"Young Women President",organization:e.YoungWomen,history:[{memberId:89,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Young Women First Counselor",organization:e.YoungWomen,history:[{memberId:254,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women Second Counselor",organization:e.YoungWomen,history:[{memberId:197,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Young Women Secretary",organization:e.YoungWomen,history:[{memberId:355,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]}],_=[{name:"Young Women 12-13 Class President",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class First Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Second Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Secretary",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Adult Leader - Advisor",organization:e.YoungWomen,history:[{memberId:162,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Adult Leader - Specialist",organization:e.YoungWomen,history:[{memberId:358,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],z=[{name:"Young Women 14-15 Class President",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class First Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Second Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Secretary",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Adult Leader - Advisor",organization:e.YoungWomen,history:[{memberId:357,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Adult Leader - Specialist",organization:e.YoungWomen,history:[{memberId:208,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],P=[{name:"Young Women 16-18 Class President",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class First Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Second Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Secretary",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Adult Leader - Advisor",organization:e.YoungWomen,history:[{memberId:43,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Adult Leader - Specialist",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],L=A.find(i=>"Bishop"===i.name),W=A.find(i=>"Bishopric First Counselor"===i.name),F=A.find(i=>"Bishopric Second Counselor"===i.name),J=[Object.assign(Object.assign({},L),{organization:e.AaronicPriesthoodQuorums}),Object.assign(Object.assign({},W),{organization:e.AaronicPriesthoodQuorums}),Object.assign(Object.assign({},F),{organization:e.AaronicPriesthoodQuorums})],O=[{name:"Deacons Quorum President",organization:e.AaronicPriesthoodQuorums,history:[{memberId:80,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum First Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Second Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Secretary",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Adult Leader - Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:327,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Adult Leader - Specialist",organization:e.AaronicPriesthoodQuorums,history:[{memberId:26,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]}],Q=[{name:"Teachers Quorum President",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum First Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Second Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Secretary",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Adult Leader - Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:99,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Adult Leader - Specialist",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],G=[{name:"Priests Quorum President",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum First Assistant",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Second Assistant",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Adult Leader - Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:193,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Adult Leader - Specialist",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],x=[{name:"Elders Quorum President",organization:e.EldersQuorum,history:[{memberId:24,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum First Counselor",organization:e.EldersQuorum,history:[{memberId:160,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Second Counselor",organization:e.EldersQuorum,history:[{memberId:350,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Secretary",organization:e.EldersQuorum,history:[{memberId:12,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Instructor",organization:e.EldersQuorum,history:[{memberId:209,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Eleventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Instructor",organization:e.EldersQuorum,history:[{memberId:223,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Eleventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Instructor",organization:e.EldersQuorum,history:[{memberId:0,isCurrent:!0,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Activites Coordinator",organization:e.EldersQuorum,history:[{memberId:92,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Service Coordinator",organization:e.EldersQuorum,history:[{memberId:170,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Eleventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Activities Committee Member",organization:e.EldersQuorum,history:[{memberId:360,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Eleventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Activities Committee Member",organization:e.EldersQuorum,history:[{memberId:233,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],k=[{name:"Young Single Adult - Leader",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Facilities Building Representative",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Accompanist",organization:e.OtherCallings,history:[{memberId:352,isCurrent:!0,isApproved:null,accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Leader",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Coordinator",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Technology - Specialist",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Mission Prep Leader",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Trek - Ma",organization:e.OtherCallings,history:[{memberId:208,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Trek - Pa",organization:e.OtherCallings,history:[{memberId:206,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!0,needToRelease:!1,isReleased:!1}]}],j=[{name:"Missionary",organization:e.FullTimeMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],H=[{name:"Ward Temple and Family History Leader",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Temple Prep Teacher",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Temple and Family History Consultant",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Temple and Family History Consultant",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],B=[{name:"Ward Mission Leader",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Assistant Ward Mission Leader",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Missionary",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Missionary",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}];var M=p(5215);const V=[{name:"Relief Society President",organization:e.ReliefSociety,history:[{memberId:250,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society First Counselor",organization:e.ReliefSociety,history:[{memberId:217,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Second Counselor",organization:e.ReliefSociety,history:[{memberId:336,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Secretary",organization:e.ReliefSociety,history:[{memberId:352,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Service Coordinator",organization:e.ReliefSociety,history:[{memberId:269,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Activity Coordinator",organization:e.ReliefSociety,history:[{memberId:9,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Instructor",organization:e.ReliefSociety,history:[{memberId:0,isCurrent:!0,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Instructor",organization:e.ReliefSociety,history:[{memberId:38,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Instructor",organization:e.ReliefSociety,history:[{memberId:339,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Instructor",organization:e.ReliefSociety,history:[{memberId:147,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],{stores:{callings:X,members:U,callingGroups:Z,callingsThatNeedFilling:$,callingsThatNeedApproval:K,callingsThatNeedSomeoneElse:q,callingsThatNeedExtending:ee,callingsThatNeedSustaining:se,callingsThatNeedSetApart:ae},actions:{hydrateCallings:te,generateCallingGroups:re,generateCallingsThatNeedFilling:ie,generateCallingsThatNeedApproval:ne,generateCallingsThatNeedSomeElse:le,generateCallingsThatNeedExtending:oe,generateCallingsThatNeedToSustain:de,generateCallingsThatNeedToSetApart:ue}}=D;U.next(M.A$);const me=[...A,...C,...I,...V,...N,...x,...w,..._,...z,...P,...J,...O,...Q,...G,...H,...B,...j,...k];X.next(me),te(),re(),ie(),ne(),oe(),le(),de(),ue();const ce=Z.getValue(),pe=$.getValue(),Se=K.getValue(),fe=ee.getValue(),Ae=q.getValue(),he=se.getValue(),Ee=ae.getValue()}}]);