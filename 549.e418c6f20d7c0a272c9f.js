"use strict";(self.webpackChunklehi31=self.webpackChunklehi31||[]).push([[549],{7993:(C,h,c)=>{c.d(h,{YG:()=>e,E_:()=>l,EJ:()=>u});var e=(()=>{return(s=e||(e={})).General="general",s.Stake="stake",s.Ward="ward",e;var s})(),l=(()=>{return(s=l||(l={}))[s.First=1]="First",s[s.Second=2]="Second",s[s.Third=3]="Third",s[s.Fourth=4]="Fourth",s[s.Fifth=5]="Fifth",s[s.Sixth=6]="Sixth",s[s.Seventh=7]="Seventh",s[s.Eighth=8]="Eighth",s[s.Ninth=9]="Ninth",s[s.Tenth=10]="Tenth",s[s.Eleventh=11]="Eleventh",s[s.Twelve=12]="Twelve",s[s.Thirteenth=13]="Thirteenth",s[s.Fourteenth=14]="Fourteenth",s[s.Fifteenth=15]="Fifteenth",s[s.Sixteenth=16]="Sixteenth",s[s.Seventeenth=17]="Seventeenth",s[s.Eighteenth=18]="Eighteenth",s[s.Nineteenth=19]="Nineteenth",s[s.Twentieth=20]="Twentieth",s[s.TwentyFirst=21]="TwentyFirst",s[s.TwentySecond=22]="TwentySecond",s[s.TwentyThird=23]="TwentyThird",s[s.TwentyFourth=24]="TwentyFourth",s[s.TwentyFifth=25]="TwentyFifth",s[s.TwentySixth=26]="TwentySixth",s[s.TwentySeventh=27]="TwentySeventh",s[s.TwentyEighth=28]="TwentyEighth",s[s.TwentyNinth=29]="TwentyNinth",s[s.Thirtieth=30]="Thirtieth",s[s.ThirtyFirst=31]="ThirtyFirst",l;var s})(),u=(()=>{return(s=u||(u={}))[s.January=0]="January",s[s.February=1]="February",s[s.March=2]="March",s[s.April=3]="April",s[s.May=4]="May",s[s.June=5]="June",s[s.July=6]="July",s[s.August=7]="August",s[s.September=8]="September",s[s.October=9]="October",s[s.November=10]="November",s[s.December=11]="December",u;var s})()},8549:(C,h,c)=>{c.d(h,{Vg:()=>pe,Zw:()=>fe,Bo:()=>Se,Nt:()=>ce,lX:()=>ge,uB:()=>Ae,yl:()=>he});var e=(()=>{return(n=e||(e={})).Bishopric="bishopric",n.EldersQuorum="elders-quorum",n.ReliefSociety="relief-society",n.AaronicPriesthoodQuorums="aaronic-priesthood-quorumns",n.YoungWomen="young-woman",n.SundaySchool="sunday-school",n.Primary="primary",n.WardMissionaries="ward-missionaries",n.FullTimeMissionaries="full-time-missionaries",n.TempleFamilyHistory="temple-family-history",n.OtherCallings="other-callings",e;var n})();const l={};l[e.Bishopric]="Bishopric",l[e.EldersQuorum]="Elders Quorum",l[e.ReliefSociety]="Relief Society",l[e.AaronicPriesthoodQuorums]="Aaronic Priesthood Quorums",l[e.YoungWomen]="Young Women",l[e.SundaySchool]="Sunday School",l[e.Primary]="Primary",l[e.WardMissionaries]="Ward Missionaries",l[e.FullTimeMissionaries]="Full Time Missionaries",l[e.TempleFamilyHistory]="Temple and Family History",l[e.OtherCallings]="Other Callings";var u=c(6215);const I=(()=>{const n=new u.X([]),S=new u.X([]),p=new u.X([]),g=new u.X([]),y=new u.X([]),v=new u.X([]),b=new u.X([]),T=new u.X([]),R=new u.X([]);return{stores:{members:n,callings:S,callingGroups:p,callingsThatNeedFilling:g,callingsThatNeedApproval:y,callingsThatNeedExtending:v,callingsThatNeedSomeoneElse:b,callingsThatNeedSustaining:T,callingsThatNeedSetApart:R},actions:{reset:()=>{n.next([]),S.next([]),p.next([]),g.next([]),T.next([]),R.next([])},hydrateCallings:()=>{const d=n.getValue(),o=S.getValue().map(i=>{const t=i.history.map(f=>Object.assign(Object.assign({},f),{member:d.find(Te=>Te.id===f.memberId)})),E=t.find(f=>!f.isReleased).member;return Object.assign(Object.assign({},i),{history:t,member:E})});S.next(o)},generateCallingGroups:()=>{const r=S.getValue().reduce((i,t)=>(i[t.organization]=i[t.organization]||[],i[t.organization].push(t),i),{}),o=Object.entries(r).map(i=>({group:i[0],name:l[i[0]],callings:i[1]}));p.next(o)},generateCallingsThatNeedFilling:()=>{const d=p.getValue().map(r=>{const o=r.callings.filter(i=>0===i.member.id);return Object.assign(Object.assign({},r),{callings:o})});g.next(d)},generateCallingsThatNeedApproval:()=>{const d=p.getValue().map(r=>{const o=r.callings.filter(i=>{if(0===i.member.id)return!1;const t=i.history.find(m=>m.isCurrent);return!(!t||null!==t.isApproved||t.accepted||t.sustainedDate||t.isSetApart)});return Object.assign(Object.assign({},r),{callings:o})});y.next(d)},generateCallingsThatNeedExtending:()=>{const d=p.getValue().map(r=>{const o=r.callings.filter(i=>{if(0===i.member.id)return!1;const t=i.history.find(m=>m.isCurrent);return!!t&&t.isApproved&&!t.accepted&&!t.sustainedDate&&!t.isSetApart});return Object.assign(Object.assign({},r),{callings:o})});v.next(d)},generateCallingsThatNeedSomeElse:()=>{const d=p.getValue().map(r=>{const o=r.callings.filter(i=>{if(0===i.member.id)return!1;const t=i.history.find(f=>f.isCurrent);return!!t&&("NO"===t.isApproved&&!t.accepted&&!t.sustainedDate&&!t.isSetApart||t.isApproved&&"NO"===t.accepted&&!t.sustainedDate&&!t.isSetApart)});return Object.assign(Object.assign({},r),{callings:o})});b.next(d)},generateCallingsThatNeedToSustain:()=>{const d=p.getValue().map(r=>{const o=r.callings.filter(i=>{if(0===i.member.id)return!1;const t=i.history.find(m=>m.isCurrent);return!!t&&t.isApproved&&"YES"===t.accepted&&!t.sustainedDate&&!t.isSetApart});return Object.assign(Object.assign({},r),{callings:o})});T.next(d)},generateCallingsThatNeedToSetApart:()=>{const d=p.getValue().map(r=>{const o=r.callings.filter(i=>{if(0===i.member.id)return!1;const t=i.history.find(m=>m.isCurrent);return!!t&&t.isApproved&&"YES"===t.accepted&&t.sustainedDate&&!t.isSetApart});return Object.assign(Object.assign({},r),{callings:o})});R.next(d)}}}})();var a=c(7993);const A=[{name:"Bishop",organization:e.Bishopric,history:[{memberId:79,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Bishopric First Counselor",organization:e.Bishopric,history:[{memberId:318,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Bishopric Second Counselor",organization:e.Bishopric,history:[{memberId:301,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Executive Secretary",organization:e.Bishopric,history:[{memberId:303,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Assistant Executive Secretary",organization:e.Bishopric,history:[{memberId:83,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Assistant Executive Secretary",organization:e.Bishopric,history:[{memberId:282,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk",organization:e.Bishopric,history:[{memberId:218,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk--Membership",organization:e.Bishopric,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk--Finance",organization:e.Bishopric,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],Y=[{name:"Sunday School President",organization:e.SundaySchool,history:[{memberId:251,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School First Counselor",organization:e.SundaySchool,history:[{memberId:350,isCurrent:!0,isApproved:"NO",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Second Counselor",organization:e.SundaySchool,history:[{memberId:87,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Secretary",organization:e.SundaySchool,history:[{memberId:353,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],N=[{name:"Sunday School - Gospel Doctrine - Teacher",organization:e.SundaySchool,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School - Youth - Teacher",organization:e.SundaySchool,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Teacher",organization:e.SundaySchool,history:[{memberId:359,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],D=[{name:"Primary President",organization:e.Primary,history:[{memberId:258,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary First Counselor",organization:e.Primary,history:[{memberId:29,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Second Counselor",organization:e.Primary,history:[{memberId:225,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Secretary",organization:e.Primary,history:[{memberId:354,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Pianist",organization:e.Primary,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Leader",organization:e.Primary,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:283,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:98,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:77,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:238,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:4,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:105,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:106,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:280,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:279,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Girls Leader",organization:e.Primary,history:[{memberId:121,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Boys Leader",organization:e.Primary,history:[{memberId:351,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Pianist",organization:e.Primary,history:[{memberId:66,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Boys Leader",organization:e.Primary,history:[{memberId:297,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],_=[{name:"Young Women President",organization:e.YoungWomen,history:[{memberId:89,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Young Women First Counselor",organization:e.YoungWomen,history:[{memberId:254,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women Second Counselor",organization:e.YoungWomen,history:[{memberId:197,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Young Women Secretary",organization:e.YoungWomen,history:[{memberId:355,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],z=[{name:"Young Women 12-13 Class President",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class First Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Second Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Secretary",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Adult Leader - Advisor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Adult Leader - Specialist",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women Adult 12-13 Adviser",organization:e.YoungWomen,history:[{memberId:162,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],w=[{name:"Young Women 14-15 Class President",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class First Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Second Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Secretary",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Adult Leader - Advisor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Adult Leader - Specialist",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women Adult 14-15 Adviser",organization:e.YoungWomen,history:[{memberId:357,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]}],P=[{name:"Young Women 16-18 Class President",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class First Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Second Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Secretary",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Adult Leader - Advisor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Adult Leader - Specialist",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women Adult 16-18 Adviser",organization:e.YoungWomen,history:[{memberId:43,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],L=A.find(n=>"Bishop"===n.name),W=A.find(n=>"Bishopric First Counselor"===n.name),O=A.find(n=>"Bishopric Second Counselor"===n.name),F=[Object.assign(Object.assign({},L),{organization:e.AaronicPriesthoodQuorums}),Object.assign(Object.assign({},W),{organization:e.AaronicPriesthoodQuorums}),Object.assign(Object.assign({},O),{organization:e.AaronicPriesthoodQuorums})],Q=[{name:"Deacons Quorum President",organization:e.AaronicPriesthoodQuorums,history:[{memberId:80,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum First Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Second Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Secretary",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Adult Leader - Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Adult Leader - Specialist",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Adviser",organization:e.AaronicPriesthoodQuorums,history:[{memberId:327,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Specialist",organization:e.AaronicPriesthoodQuorums,history:[{memberId:26,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],G=[{name:"Teachers Quorum President",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum First Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Second Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Secretary",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Adult Leader - Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:87,isCurrent:!0,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Adult Leader - Specialist",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Adviser",organization:e.AaronicPriesthoodQuorums,history:[{memberId:99,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]}],J=[{name:"Priests Quorum President",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum First Assistant",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Second Assistant",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Adult Leader - Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:265,isCurrent:!0,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Adult Leader - Specialist",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:193,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]}],x=[{name:"Elders Quorum President",organization:e.EldersQuorum,history:[{memberId:24,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum First Counselor",organization:e.EldersQuorum,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Second Counselor",organization:e.EldersQuorum,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Secretary",organization:e.EldersQuorum,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],j=[{name:"Young Single Adult - Leader",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Facilities Building Representative",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Accompanist",organization:e.OtherCallings,history:[{memberId:352,isCurrent:!0,isApproved:null,accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Leader",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Coordinator",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Technology - Specialist",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Mission Prep Leader",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],H=[{name:"Missionary",organization:e.FullTimeMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],B=[{name:"Ward Temple and Family History Leader",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Temple Prep Teacher",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Temple and Family History Consultant",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Temple and Family History Consultant",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],M=[{name:"Ward Mission Leader",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Assistant Ward Mission Leader",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Missionary",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Missionary",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}];var V=c(5215);const k=[{name:"Relief Society President",organization:e.ReliefSociety,history:[{memberId:250,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society First Counselor",organization:e.ReliefSociety,history:[{memberId:217,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Second Counselor",organization:e.ReliefSociety,history:[{memberId:336,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Secretary",organization:e.ReliefSociety,history:[{memberId:352,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Service Coordinator",organization:e.ReliefSociety,history:[{memberId:269,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Activity Coordinator",organization:e.ReliefSociety,history:[{memberId:9,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,a.EJ.November,a.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]}],{stores:{callings:X,members:U,callingGroups:Z,callingsThatNeedFilling:$,callingsThatNeedApproval:K,callingsThatNeedSomeoneElse:q,callingsThatNeedExtending:ee,callingsThatNeedSustaining:se,callingsThatNeedSetApart:ae},actions:{hydrateCallings:te,generateCallingGroups:ie,generateCallingsThatNeedFilling:ne,generateCallingsThatNeedApproval:re,generateCallingsThatNeedSomeElse:le,generateCallingsThatNeedExtending:oe,generateCallingsThatNeedToSustain:ue,generateCallingsThatNeedToSetApart:de}}=I;U.next(V.A$);const me=[...A,...Y,...N,...k,...D,...x,..._,...z,...w,...P,...F,...Q,...G,...J,...B,...M,...H,...j];X.next(me),te(),ie(),ne(),re(),oe(),le(),ue(),de();const pe=Z.getValue(),ce=$.getValue(),fe=K.getValue(),Se=ee.getValue(),Ae=q.getValue(),he=se.getValue(),ge=ae.getValue()}}]);