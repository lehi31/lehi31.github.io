"use strict";(self.webpackChunklehi31=self.webpackChunklehi31||[]).push([[863],{7993:(I,g,p)=>{p.d(g,{YG:()=>e,E_:()=>r,EJ:()=>u});var e=(()=>{return(s=e||(e={})).General="general",s.Stake="stake",s.Ward="ward",e;var s})(),r=(()=>{return(s=r||(r={}))[s.First=1]="First",s[s.Second=2]="Second",s[s.Third=3]="Third",s[s.Fourth=4]="Fourth",s[s.Fifth=5]="Fifth",s[s.Sixth=6]="Sixth",s[s.Seventh=7]="Seventh",s[s.Eighth=8]="Eighth",s[s.Ninth=9]="Ninth",s[s.Tenth=10]="Tenth",s[s.Eleventh=11]="Eleventh",s[s.Twelve=12]="Twelve",s[s.Thirteenth=13]="Thirteenth",s[s.Fourteenth=14]="Fourteenth",s[s.Fifteenth=15]="Fifteenth",s[s.Sixteenth=16]="Sixteenth",s[s.Seventeenth=17]="Seventeenth",s[s.Eighteenth=18]="Eighteenth",s[s.Nineteenth=19]="Nineteenth",s[s.Twentieth=20]="Twentieth",s[s.TwentyFirst=21]="TwentyFirst",s[s.TwentySecond=22]="TwentySecond",s[s.TwentyThird=23]="TwentyThird",s[s.TwentyFourth=24]="TwentyFourth",s[s.TwentyFifth=25]="TwentyFifth",s[s.TwentySixth=26]="TwentySixth",s[s.TwentySeventh=27]="TwentySeventh",s[s.TwentyEighth=28]="TwentyEighth",s[s.TwentyNinth=29]="TwentyNinth",s[s.Thirtieth=30]="Thirtieth",s[s.ThirtyFirst=31]="ThirtyFirst",r;var s})(),u=(()=>{return(s=u||(u={}))[s.January=0]="January",s[s.February=1]="February",s[s.March=2]="March",s[s.April=3]="April",s[s.May=4]="May",s[s.June=5]="June",s[s.July=6]="July",s[s.August=7]="August",s[s.September=8]="September",s[s.October=9]="October",s[s.November=10]="November",s[s.December=11]="December",u;var s})()},1863:(I,g,p)=>{p.d(g,{Vg:()=>me,Zw:()=>pe,Bo:()=>fe,Nt:()=>ce,lX:()=>ge,uB:()=>Ae,yl:()=>Se});var e=(()=>{return(n=e||(e={})).Bishopric="bishopric",n.EldersQuorum="elders-quorum",n.ReliefSociety="relief-society",n.AaronicPriesthoodQuorums="aaronic-priesthood-quorumns",n.YoungWomen="young-woman",n.SundaySchool="sunday-school",n.Primary="primary",n.WardMissionaries="ward-missionaries",n.FullTimeMissionaries="full-time-missionaries",n.TempleFamilyHistory="temple-family-history",n.OtherCallings="other-callings",e;var n})();const r={};r[e.Bishopric]="Bishopric",r[e.EldersQuorum]="Elders Quorum",r[e.ReliefSociety]="Relief Society",r[e.AaronicPriesthoodQuorums]="Aaronic Priesthood Quorums",r[e.YoungWomen]="Young Women",r[e.SundaySchool]="Sunday School",r[e.Primary]="Primary",r[e.WardMissionaries]="Ward Missionaries",r[e.FullTimeMissionaries]="Full Time Missionaries",r[e.TempleFamilyHistory]="Temple and Family History",r[e.OtherCallings]="Other Callings";var u=p(6215);const C=(()=>{const n=new u.X([]),A=new u.X([]),c=new u.X([]),h=new u.X([]),E=new u.X([]),b=new u.X([]),v=new u.X([]),T=new u.X([]),R=new u.X([]);return{stores:{members:n,callings:A,callingGroups:c,callingsThatNeedFilling:h,callingsThatNeedApproval:E,callingsThatNeedExtending:b,callingsThatNeedSomeoneElse:v,callingsThatNeedSustaining:T,callingsThatNeedSetApart:R},actions:{reset:()=>{n.next([]),A.next([]),c.next([]),h.next([]),T.next([]),R.next([])},hydrateCallings:()=>{const d=n.getValue(),o=A.getValue().map(t=>{const a=t.history.map(f=>Object.assign(Object.assign({},f),{member:d.find(he=>he.id===f.memberId)})),y=a.find(f=>!f.isReleased).member;return Object.assign(Object.assign({},t),{history:a,member:y})});A.next(o)},generateCallingGroups:()=>{const l=A.getValue().reduce((t,a)=>(t[a.organization]=t[a.organization]||[],t[a.organization].push(a),t),{}),o=Object.entries(l).map(t=>({group:t[0],name:r[t[0]],callings:t[1]}));c.next(o)},generateCallingsThatNeedFilling:()=>{const d=c.getValue().map(l=>{const o=l.callings.filter(t=>0===t.member.id);return Object.assign(Object.assign({},l),{callings:o})});h.next(d)},generateCallingsThatNeedApproval:()=>{const d=c.getValue().map(l=>{const o=l.callings.filter(t=>{if(0===t.member.id)return!1;const a=t.history.find(m=>m.isCurrent);return!(!a||null!==a.isApproved||a.accepted||a.sustainedDate||a.isSetApart)});return Object.assign(Object.assign({},l),{callings:o})});E.next(d)},generateCallingsThatNeedExtending:()=>{const d=c.getValue().map(l=>{const o=l.callings.filter(t=>{if(0===t.member.id)return!1;const a=t.history.find(m=>m.isCurrent);return!!a&&a.isApproved&&!a.accepted&&!a.sustainedDate&&!a.isSetApart});return Object.assign(Object.assign({},l),{callings:o})});b.next(d)},generateCallingsThatNeedSomeElse:()=>{const d=c.getValue().map(l=>{const o=l.callings.filter(t=>{if(0===t.member.id)return!1;const a=t.history.find(f=>f.isCurrent);return!!a&&("NO"===a.isApproved&&!a.accepted&&!a.sustainedDate&&!a.isSetApart||a.isApproved&&"NO"===a.accepted&&!a.sustainedDate&&!a.isSetApart)});return Object.assign(Object.assign({},l),{callings:o})});v.next(d)},generateCallingsThatNeedToSustain:()=>{const d=c.getValue().map(l=>{const o=l.callings.filter(t=>{if(0===t.member.id)return!1;const a=t.history.find(m=>m.isCurrent);return!!a&&a.isApproved&&"YES"===a.accepted&&!a.sustainedDate&&!a.isSetApart});return Object.assign(Object.assign({},l),{callings:o})});T.next(d)},generateCallingsThatNeedToSetApart:()=>{const d=c.getValue().map(l=>{const o=l.callings.filter(t=>{if(0===t.member.id)return!1;const a=t.history.find(m=>m.isCurrent);return!!a&&a.isApproved&&"YES"===a.accepted&&a.sustainedDate&&!a.isSetApart});return Object.assign(Object.assign({},l),{callings:o})});R.next(d)}}}})();var i=p(7993);const S=[{name:"Bishop",organization:e.Bishopric,history:[{memberId:79,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,i.EJ.November,i.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Bishopric First Counselor",organization:e.Bishopric,history:[{memberId:318,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,i.EJ.November,i.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Bishopric Second Counselor",organization:e.Bishopric,history:[{memberId:301,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,i.EJ.November,i.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Executive Secretary",organization:e.Bishopric,history:[{memberId:303,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,i.EJ.November,i.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Assistant Executive Secretary",organization:e.Bishopric,history:[{memberId:83,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,i.EJ.November,i.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Assistant Executive Secretary",organization:e.Bishopric,history:[{memberId:282,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,i.EJ.November,i.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk",organization:e.Bishopric,history:[{memberId:218,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,i.EJ.November,i.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk--Membership",organization:e.Bishopric,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk--Finance",organization:e.Bishopric,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],Y=[{name:"Sunday School President",organization:e.SundaySchool,history:[{memberId:251,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,i.EJ.November,i.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School First Counselor",organization:e.SundaySchool,history:[{memberId:350,isCurrent:!0,isApproved:"NO",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Second Counselor",organization:e.SundaySchool,history:[{memberId:282,isCurrent:!0,isApproved:"NO",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Secretary",organization:e.SundaySchool,history:[{memberId:353,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],N=[{name:"Primary President",organization:e.Primary,history:[{memberId:258,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,i.EJ.November,i.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary First Counselor",organization:e.Primary,history:[{memberId:29,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Second Counselor",organization:e.Primary,history:[{memberId:225,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Secretary",organization:e.Primary,history:[{memberId:354,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Pianist",organization:e.Primary,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Leader",organization:e.Primary,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:283,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.Primary,history:[{memberId:98,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Boys Leader",organization:e.Primary,history:[{memberId:297,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],z=[{name:"Young Women President",organization:e.YoungWomen,history:[{memberId:89,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,i.EJ.November,i.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Young Women First Counselor",organization:e.YoungWomen,history:[{memberId:254,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women Second Counselor",organization:e.YoungWomen,history:[{memberId:355,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women Secretary",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],L=[{name:"Young Women 12-13 Class President",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class First Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Second Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Secretary",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Adult Leader - Advisor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Adult Leader - Specialist",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women Adult 12-13 Adviser",organization:e.YoungWomen,history:[{memberId:162,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],W=[{name:"Young Women 14-15 Class President",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class First Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Second Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Secretary",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Adult Leader - Advisor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Adult Leader - Specialist",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women Adult 14-15 Adviser",organization:e.YoungWomen,history:[{memberId:357,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],_=[{name:"Young Women 16-18 Class President",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class First Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Second Counselor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Secretary",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Adult Leader - Advisor",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Adult Leader - Specialist",organization:e.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women Adult 16-18 Adviser",organization:e.YoungWomen,history:[{memberId:43,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],D=S.find(n=>"Bishop"===n.name),P=S.find(n=>"Bishopric First Counselor"===n.name),O=S.find(n=>"Bishopric Second Counselor"===n.name),F=[Object.assign(Object.assign({},D),{organization:e.AaronicPriesthoodQuorums}),Object.assign(Object.assign({},P),{organization:e.AaronicPriesthoodQuorums}),Object.assign(Object.assign({},O),{organization:e.AaronicPriesthoodQuorums})],Q=[{name:"Deacons Quorum President",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum First Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Second Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Secretary",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Adult Leader - Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Adult Leader - Specialist",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],w=[{name:"Teachers Quorum President",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum First Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Second Counselor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Secretary",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Adult Leader - Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:87,isCurrent:!0,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Adult Leader - Specialist",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Adviser",organization:e.AaronicPriesthoodQuorums,history:[{memberId:99,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],G=[{name:"Priests Quorum President",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum First Assistant",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Second Assistant",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Adult Leader - Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:265,isCurrent:!0,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Adult Leader - Specialist",organization:e.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Advisor",organization:e.AaronicPriesthoodQuorums,history:[{memberId:193,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],x=[{name:"Elders Quorum President",organization:e.EldersQuorum,history:[{memberId:24,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,i.EJ.November,i.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum First Counselor",organization:e.EldersQuorum,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Second Counselor",organization:e.EldersQuorum,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Secretary",organization:e.EldersQuorum,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],j=[{name:"Young Single Adult - Leader",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Facilities Building Representative",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Accompanist",organization:e.OtherCallings,history:[{memberId:352,isCurrent:!0,isApproved:null,accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Leader",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Coordinator",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Technology - Specialist",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Mission Prep Leader",organization:e.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],B=[{name:"Missionary",organization:e.FullTimeMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],H=[{name:"Ward Temple and Family History Leader",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Temple Prep Teacher",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Temple and Family History Consultant",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Temple and Family History Consultant",organization:e.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],M=[{name:"Ward Mission Leader",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Assistant Ward Mission Leader",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Missionary",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Missionary",organization:e.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}];var J=p(5215);const V=[{name:"Relief Society President",organization:e.ReliefSociety,history:[{memberId:250,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,i.EJ.November,i.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society First Counselor",organization:e.ReliefSociety,history:[{memberId:217,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Second Counselor",organization:e.ReliefSociety,history:[{memberId:336,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Secretary",organization:e.ReliefSociety,history:[{memberId:352,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Service Coordinator",organization:e.ReliefSociety,history:[{memberId:269,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],{stores:{callings:X,members:k,callingGroups:U,callingsThatNeedFilling:Z,callingsThatNeedApproval:$,callingsThatNeedSomeoneElse:K,callingsThatNeedExtending:q,callingsThatNeedSustaining:ee,callingsThatNeedSetApart:se},actions:{hydrateCallings:ae,generateCallingGroups:te,generateCallingsThatNeedFilling:ie,generateCallingsThatNeedApproval:ne,generateCallingsThatNeedSomeElse:le,generateCallingsThatNeedExtending:re,generateCallingsThatNeedToSustain:oe,generateCallingsThatNeedToSetApart:ue}}=C;k.next(J.A$);const de=[...S,...Y,...V,...N,...x,...z,...L,...W,..._,...F,...Q,...w,...G,...H,...M,...B,...j];X.next(de),ae(),te(),ie(),ne(),re(),le(),oe(),ue();const me=U.getValue(),ce=Z.getValue(),pe=$.getValue(),fe=q.getValue(),Ae=K.getValue(),Se=ee.getValue(),ge=se.getValue()}}]);