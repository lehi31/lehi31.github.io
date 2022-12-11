"use strict";(self.webpackChunklehi31=self.webpackChunklehi31||[]).push([[549],{7993:(Y,h,p)=>{p.d(h,{YG:()=>e,E_:()=>l,EJ:()=>u});var e=(()=>{return(t=e||(e={})).General="general",t.Stake="stake",t.Ward="ward",e;var t})(),l=(()=>{return(t=l||(l={}))[t.First=1]="First",t[t.Second=2]="Second",t[t.Third=3]="Third",t[t.Fourth=4]="Fourth",t[t.Fifth=5]="Fifth",t[t.Sixth=6]="Sixth",t[t.Seventh=7]="Seventh",t[t.Eighth=8]="Eighth",t[t.Ninth=9]="Ninth",t[t.Tenth=10]="Tenth",t[t.Eleventh=11]="Eleventh",t[t.Twelve=12]="Twelve",t[t.Thirteenth=13]="Thirteenth",t[t.Fourteenth=14]="Fourteenth",t[t.Fifteenth=15]="Fifteenth",t[t.Sixteenth=16]="Sixteenth",t[t.Seventeenth=17]="Seventeenth",t[t.Eighteenth=18]="Eighteenth",t[t.Nineteenth=19]="Nineteenth",t[t.Twentieth=20]="Twentieth",t[t.TwentyFirst=21]="TwentyFirst",t[t.TwentySecond=22]="TwentySecond",t[t.TwentyThird=23]="TwentyThird",t[t.TwentyFourth=24]="TwentyFourth",t[t.TwentyFifth=25]="TwentyFifth",t[t.TwentySixth=26]="TwentySixth",t[t.TwentySeventh=27]="TwentySeventh",t[t.TwentyEighth=28]="TwentyEighth",t[t.TwentyNinth=29]="TwentyNinth",t[t.Thirtieth=30]="Thirtieth",t[t.ThirtyFirst=31]="ThirtyFirst",l;var t})(),u=(()=>{return(t=u||(u={}))[t.January=0]="January",t[t.February=1]="February",t[t.March=2]="March",t[t.April=3]="April",t[t.May=4]="May",t[t.June=5]="June",t[t.July=6]="July",t[t.August=7]="August",t[t.September=8]="September",t[t.October=9]="October",t[t.November=10]="November",t[t.December=11]="December",u;var t})()},8549:(Y,h,p)=>{p.d(h,{Vg:()=>ce,Zw:()=>Se,Bo:()=>fe,Nt:()=>pe,lX:()=>ge,uB:()=>Ae,yl:()=>he});var e=(()=>{return(i=e||(e={})).Bishopric="bishopric",i.EldersQuorum="elders-quorum",i.ReliefSociety="relief-society",i.AaronicPriesthoodQuorums="aaronic-priesthood-quorums",i.YoungWomen="young-woman",i.SundaySchool="sunday-school",i.Primary="primary",i.WardMissionaries="ward-missionaries",i.FullTimeMissionaries="full-time-missionaries",i.TempleFamilyHistory="temple-family-history",i.OtherCallings="other-callings",e;var i})();const l={};l[e.Bishopric]="Bishopric",l[e.EldersQuorum]="Elders Quorum",l[e.ReliefSociety]="Relief Society",l[e.AaronicPriesthoodQuorums]="Aaronic Priesthood Quorums",l[e.YoungWomen]="Young Women",l[e.SundaySchool]="Sunday School",l[e.Primary]="Primary",l[e.WardMissionaries]="Ward Missionaries",l[e.FullTimeMissionaries]="Full Time Missionaries",l[e.TempleFamilyHistory]="Temple and Family History",l[e.OtherCallings]="Other Callings";var u=p(6215);const I=(()=>{const i=new u.X([]),f=new u.X([]),c=new u.X([]),g=new u.X([]),y=new u.X([]),v=new u.X([]),b=new u.X([]),E=new u.X([]),T=new u.X([]);return{stores:{members:i,callings:f,callingGroups:c,callingsThatNeedFilling:g,callingsThatNeedApproval:y,callingsThatNeedExtending:v,callingsThatNeedSomeoneElse:b,callingsThatNeedSustaining:E,callingsThatNeedSetApart:T},actions:{reset:()=>{i.next([]),f.next([]),c.next([]),g.next([]),E.next([]),T.next([])},hydrateCallings:()=>{const d=i.getValue(),o=f.getValue().map(r=>{const a=r.history.map(S=>Object.assign(Object.assign({},S),{member:d.find(Ee=>Ee.id===S.memberId)})),R=a.find(S=>!S.isReleased).member;return Object.assign(Object.assign({},r),{history:a,member:R})});f.next(o)},generateCallingGroups:()=>{const n=f.getValue().reduce((r,a)=>(r[a.organization]=r[a.organization]||[],r[a.organization].push(a),r),{}),o=Object.entries(n).map(r=>({group:r[0],name:l[r[0]],callings:r[1]}));c.next(o)},generateCallingsThatNeedFilling:()=>{const d=c.getValue().map(n=>{const o=n.callings.filter(r=>0===r.member.id);return Object.assign(Object.assign({},n),{callings:o})});g.next(d)},generateCallingsThatNeedApproval:()=>{const d=c.getValue().map(n=>{const o=n.callings.filter(r=>{if(0===r.member.id)return!1;const a=r.history.find(m=>m.isCurrent);return!(!a||null!==a.isApproved||a.accepted||a.sustainedDate||a.isSetApart)});return Object.assign(Object.assign({},n),{callings:o})});y.next(d)},generateCallingsThatNeedExtending:()=>{const d=c.getValue().map(n=>{const o=n.callings.filter(r=>{if(0===r.member.id)return!1;const a=r.history.find(m=>m.isCurrent);return!!a&&a.isApproved&&!a.accepted&&!a.sustainedDate&&!a.isSetApart});return Object.assign(Object.assign({},n),{callings:o})});v.next(d)},generateCallingsThatNeedSomeElse:()=>{const d=c.getValue().map(n=>{const o=n.callings.filter(r=>{if(0===r.member.id)return!1;const a=r.history.find(S=>S.isCurrent);return!!a&&("NO"===a.isApproved&&!a.accepted&&!a.sustainedDate&&!a.isSetApart||a.isApproved&&"NO"===a.accepted&&!a.sustainedDate&&!a.isSetApart)});return Object.assign(Object.assign({},n),{callings:o})});b.next(d)},generateCallingsThatNeedToSustain:()=>{const d=c.getValue().map(n=>{const o=n.callings.filter(r=>{if(0===r.member.id)return!1;const a=r.history.find(m=>m.isCurrent);return!!a&&a.isApproved&&"YES"===a.accepted&&!a.sustainedDate&&!a.isSetApart});return Object.assign(Object.assign({},n),{callings:o})});E.next(d)},generateCallingsThatNeedToSetApart:()=>{const d=c.getValue().map(n=>{const o=n.callings.filter(r=>{if(0===r.member.id)return!1;const a=r.history.find(m=>m.isCurrent);return!!a&&a.isApproved&&"YES"===a.accepted&&a.sustainedDate&&!a.isSetApart});return Object.assign(Object.assign({},n),{callings:o})});T.next(d)}}}})();var s=p(7993);const A=[{name:"Bishop",organization:e.Bishopric,history:[{memberId:79,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Bishopric First Counselor",organization:e.Bishopric,history:[{memberId:318,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Bishopric Second Counselor",organization:e.Bishopric,history:[{memberId:301,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Executive Secretary",organization:e.Bishopric,history:[{memberId:303,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Assistant Executive Secretary",organization:e.Bishopric,history:[{memberId:83,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Assistant Executive Secretary",organization:e.Bishopric,history:[{memberId:282,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk",organization:e.Bishopric,history:[{memberId:218,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk--Membership",organization:e.Bishopric,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk--Finance",organization:e.Bishopric,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],C=[{name:"Sunday School President",organization:e.SundaySchool,history:[{memberId:251,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School First Counselor",organization:e.SundaySchool,history:[{memberId:131,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Second Counselor",organization:e.SundaySchool,history:[{memberId:87,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Secretary",organization:e.SundaySchool,history:[{memberId:221,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],D=[{name:"Sunday School - Gospel Doctrine - Teacher",organization:e.SundaySchool,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School - Youth - Teacher",organization:e.SundaySchool,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Teacher",organization:e.SundaySchool,history:[{memberId:359,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],N=[{name:"Primary President",organization:e.Primary,history:[{memberId:258,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary First Counselor",organization:e.Primary,history:[{memberId:29,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Second Counselor",organization:e.Primary,history:[{memberId:225,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Secretary",organization:e.Primary,history:[{memberId:354,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Pianist",organization:e.Primary,history:[{memberId:64,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Leader",organization:e.Primary,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:283,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:98,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:77,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:238,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:329,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:4,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:105,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:106,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:280,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:279,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:84,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Girls Leader",organization:e.Primary,history:[{memberId:121,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Boys Leader",organization:e.Primary,history:[{memberId:351,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Pianist",organization:e.Primary,history:[{memberId:66,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Boys Leader",organization:e.Primary,history:[{memberId:297,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],_=[{name:"Young Women President",organization:e.YoungWomen,history:[{memberId:89,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Young Women First Counselor",organization:e.YoungWomen,history:[{memberId:254,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women Second Counselor",organization:e.YoungWomen,history:[{memberId:197,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Young Women Secretary",organization:e.YoungWomen,history:[{memberId:355,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]}],w=[{name:"Young Women 12-13 Class President",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class First Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Second Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Secretary",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Adult Leader - Advisor",organization:e.YoungWomen,history:[{memberId:162,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Adult Leader - Specialist",organization:e.YoungWomen,history:[{memberId:358,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],z=[{name:"Young Women 14-15 Class President",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class First Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Second Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Secretary",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Adult Leader - Advisor",organization:e.YoungWomen,history:[{memberId:357,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Adult Leader - Specialist",organization:e.YoungWomen,history:[{memberId:208,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],P=[{name:"Young Women 16-18 Class President",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class First Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Second Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Secretary",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Adult Leader - Advisor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Adult Leader - Specialist",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women Adult 16-18 Adviser",organization:e.YoungWomen,history:[{memberId:43,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],L=A.find(i=>"Bishop"===i.name),W=A.find(i=>"Bishopric First Counselor"===i.name),F=A.find(i=>"Bishopric Second Counselor"===i.name),O=[Object.assign(Object.assign({},L),{organization:e.AaronicPriesthoodQuorums}),Object.assign(Object.assign({},W),{organization:e.AaronicPriesthoodQuorums}),Object.assign(Object.assign({},F),{organization:e.AaronicPriesthoodQuorums})],Q=[{name:"Deacons Quorum President",organization:e.AaronicPriesthoodQuorums,history:[{memberId:80,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum First Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Second Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Secretary",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Adult Leader - Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:327,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Adult Leader - Specialist",organization:e.AaronicPriesthoodQuorums,history:[{memberId:26,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],J=[{name:"Teachers Quorum President",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum First Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Second Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Secretary",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Adult Leader - Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:99,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Adult Leader - Specialist",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],G=[{name:"Priests Quorum President",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum First Assistant",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Second Assistant",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Adult Leader - Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:193,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Adult Leader - Specialist",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],x=[{name:"Elders Quorum President",organization:e.EldersQuorum,history:[{memberId:24,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum First Counselor",organization:e.EldersQuorum,history:[{memberId:160,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Second Counselor",organization:e.EldersQuorum,history:[{memberId:350,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Secretary",organization:e.EldersQuorum,history:[{memberId:12,isCurrent:!0,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Instructor",organization:e.EldersQuorum,history:[{memberId:209,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Instructor",organization:e.EldersQuorum,history:[{memberId:223,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Instructor",organization:e.EldersQuorum,history:[{memberId:361,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Activites Coordinator",organization:e.EldersQuorum,history:[{memberId:92,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Service Coordinator",organization:e.EldersQuorum,history:[{memberId:170,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Activities Committee Member",organization:e.EldersQuorum,history:[{memberId:360,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Activities Committee Member",organization:e.EldersQuorum,history:[{memberId:233,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],j=[{name:"Young Single Adult - Leader",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Facilities Building Representative",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Accompanist",organization:e.OtherCallings,history:[{memberId:352,isCurrent:!0,isApproved:null,accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Leader",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Coordinator",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Technology - Specialist",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Mission Prep Leader",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],H=[{name:"Missionary",organization:e.FullTimeMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],B=[{name:"Ward Temple and Family History Leader",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Temple Prep Teacher",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Temple and Family History Consultant",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Temple and Family History Consultant",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],M=[{name:"Ward Mission Leader",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Assistant Ward Mission Leader",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Missionary",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Missionary",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}];var k=p(5215);const V=[{name:"Relief Society President",organization:e.ReliefSociety,history:[{memberId:250,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society First Counselor",organization:e.ReliefSociety,history:[{memberId:217,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Second Counselor",organization:e.ReliefSociety,history:[{memberId:336,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Secretary",organization:e.ReliefSociety,history:[{memberId:352,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Service Coordinator",organization:e.ReliefSociety,history:[{memberId:269,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Activity Coordinator",organization:e.ReliefSociety,history:[{memberId:9,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Instructor",organization:e.ReliefSociety,history:[{memberId:362,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Instructor",organization:e.ReliefSociety,history:[{memberId:38,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Instructor",organization:e.ReliefSociety,history:[{memberId:339,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Instructor",organization:e.ReliefSociety,history:[{memberId:147,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],{stores:{callings:X,members:U,callingGroups:Z,callingsThatNeedFilling:$,callingsThatNeedApproval:K,callingsThatNeedSomeoneElse:q,callingsThatNeedExtending:ee,callingsThatNeedSustaining:se,callingsThatNeedSetApart:te},actions:{hydrateCallings:ae,generateCallingGroups:re,generateCallingsThatNeedFilling:ie,generateCallingsThatNeedApproval:ne,generateCallingsThatNeedSomeElse:le,generateCallingsThatNeedExtending:oe,generateCallingsThatNeedToSustain:ue,generateCallingsThatNeedToSetApart:de}}=I;U.next(k.A$);const me=[...A,...C,...D,...V,...N,...x,..._,...w,...z,...P,...O,...Q,...J,...G,...B,...M,...H,...j];X.next(me),ae(),re(),ie(),ne(),oe(),le(),ue(),de();const ce=Z.getValue(),pe=$.getValue(),Se=K.getValue(),fe=ee.getValue(),Ae=q.getValue(),he=se.getValue(),ge=te.getValue()}}]);