"use strict";(self.webpackChunklehi31=self.webpackChunklehi31||[]).push([[690],{7993:(T,y,p)=>{p.d(y,{YG:()=>e,E_:()=>i,EJ:()=>n});var e=(()=>{return(a=e||(e={})).General="general",a.Stake="stake",a.Ward="ward",e;var a})(),i=(()=>{return(a=i||(i={}))[a.First=1]="First",a[a.Second=2]="Second",a[a.Third=3]="Third",a[a.Fourth=4]="Fourth",a[a.Fifth=5]="Fifth",a[a.Sixth=6]="Sixth",a[a.Seventh=7]="Seventh",a[a.Eighth=8]="Eighth",a[a.Ninth=9]="Ninth",a[a.Tenth=10]="Tenth",a[a.Eleventh=11]="Eleventh",a[a.Twelve=12]="Twelve",a[a.Thirteenth=13]="Thirteenth",a[a.Fourteenth=14]="Fourteenth",a[a.Fifteenth=15]="Fifteenth",a[a.Sixteenth=16]="Sixteenth",a[a.Seventeenth=17]="Seventeenth",a[a.Eighteenth=18]="Eighteenth",a[a.Nineteenth=19]="Nineteenth",a[a.Twentieth=20]="Twentieth",a[a.TwentyFirst=21]="TwentyFirst",a[a.TwentySecond=22]="TwentySecond",a[a.TwentyThird=23]="TwentyThird",a[a.TwentyFourth=24]="TwentyFourth",a[a.TwentyFifth=25]="TwentyFifth",a[a.TwentySixth=26]="TwentySixth",a[a.TwentySeventh=27]="TwentySeventh",a[a.TwentyEighth=28]="TwentyEighth",a[a.TwentyNinth=29]="TwentyNinth",a[a.Thirtieth=30]="Thirtieth",a[a.ThirtyFirst=31]="ThirtyFirst",i;var a})(),n=(()=>{return(a=n||(n={}))[a.January=0]="January",a[a.February=1]="February",a[a.March=2]="March",a[a.April=3]="April",a[a.May=4]="May",a[a.June=5]="June",a[a.July=6]="July",a[a.August=7]="August",a[a.September=8]="September",a[a.October=9]="October",a[a.November=10]="November",a[a.December=11]="December",n;var a})()},5046:(T,y,p)=>{p.d(y,{ys:()=>e,kz:()=>i,sj:()=>n});var e=(()=>{return(a=e||(e={})).Bishopric="bishopric",a.EldersQuorum="elders-quorum",a.ReliefSociety="relief-society",a.AaronicPriesthoodQuorums="aaronic-priesthood-quorums",a.YoungWomen="young-woman",a.SundaySchool="sunday-school",a.Primary="primary",a.WardMissionaries="ward-missionaries",a.FullTimeMissionaries="full-time-missionaries",a.TempleFamilyHistory="temple-family-history",a.OtherCallings="other-callings",e;var a})();const i={};i[e.Bishopric]="Bishopric",i[e.EldersQuorum]="Elders Quorum",i[e.ReliefSociety]="Relief Society",i[e.AaronicPriesthoodQuorums]="Aaronic Priesthood Quorums",i[e.YoungWomen]="Young Women",i[e.SundaySchool]="Sunday School",i[e.Primary]="Primary",i[e.WardMissionaries]="Ward Missionaries",i[e.FullTimeMissionaries]="Full Time Missionaries",i[e.TempleFamilyHistory]="Temple and Family History",i[e.OtherCallings]="Other Callings";var n=(()=>{return(a=n||(n={})).NeedsFilling="Needs filling",a.NeedsApproval="Needs approval",a.NeedsExtending="Needs extending",a.NeedsSomeoneElse="Needs someone else",a.NeedsSustaining="Needs sustaining",a.NeedsSettingApart="Needs setting apart",n;var a})()},2690:(T,y,p)=>{p.d(y,{Vg:()=>pe,Zw:()=>Se,Bo:()=>ye,Nt:()=>ce,lX:()=>Ae,uB:()=>fe,yl:()=>Ee});var e=p(5046),i=p(6215),n=(()=>{return(u=n||(n={})).JoshTune="Josh Tune",u.SaiaFonua="Saia Fonua",u.IonaTeriipaia="Iona Teriipaia",n;var u})();const a={};a[e.ys.YoungWomen]=n.JoshTune,a[e.ys.AaronicPriesthoodQuorums]=n.JoshTune,a[e.ys.TempleFamilyHistory]=n.JoshTune,a[e.ys.OtherCallings]=n.JoshTune,a[e.ys.Primary]=n.IonaTeriipaia,a[e.ys.SundaySchool]=n.IonaTeriipaia,a[e.ys.ReliefSociety]=n.SaiaFonua,a[e.ys.EldersQuorum]=n.SaiaFonua;const D=(()=>{const u=new i.X([]),f=new i.X([]),c=new i.X([]),A=new i.X([]),b=new i.X([]),Y=new i.X([]),v=new i.X([]),h=new i.X([]),g=new i.X([]);return{stores:{members:u,callings:f,callingGroups:c,callingsThatNeedFilling:A,callingsThatNeedApproval:b,callingsThatNeedExtending:Y,callingsThatNeedSomeoneElse:v,callingsThatNeedSustaining:h,callingsThatNeedSetApart:g},actions:{reset:()=>{u.next([]),f.next([]),c.next([]),A.next([]),h.next([]),g.next([])},hydrateCallings:()=>{const d=u.getValue(),l=f.getValue().map(r=>{const t=r.history.map(S=>Object.assign(Object.assign({},S),{member:d.find(he=>he.id===S.memberId)})),R=t.find(S=>!S.isReleased).member;return Object.assign(Object.assign({},r),{history:t,member:R})});f.next(l)},generateCallingGroups:()=>{const o=f.getValue().reduce((r,t)=>(r[t.organization]=r[t.organization]||[],r[t.organization].push(t),r),{}),l=Object.entries(o).map(r=>({assignedSecretary:a[r[0]],group:r[0],name:e.kz[r[0]],callings:r[1]}));c.next(l)},generateCallingsThatNeedFilling:()=>{const d=c.getValue().map(o=>{const l=o.callings.filter(r=>0===r.member.id);return Object.assign(Object.assign({},o),{callings:l})});A.next(d)},generateCallingsThatNeedApproval:()=>{const d=c.getValue().map(o=>{const l=o.callings.filter(r=>{if(0===r.member.id)return!1;const t=r.history.find(m=>m.isCurrent);return!(!t||null!==t.isApproved||t.accepted||t.sustainedDate||t.isSetApart)});return Object.assign(Object.assign({},o),{callings:l})});b.next(d)},generateCallingsThatNeedExtending:()=>{const d=c.getValue().map(o=>{const l=o.callings.filter(r=>{if(0===r.member.id)return!1;const t=r.history.find(m=>m.isCurrent);return!!t&&t.isApproved&&!t.accepted&&!t.sustainedDate&&!t.isSetApart});return Object.assign(Object.assign({},o),{callings:l})});Y.next(d)},generateCallingsThatNeedSomeElse:()=>{const d=c.getValue().map(o=>{const l=o.callings.filter(r=>{if(0===r.member.id)return!1;const t=r.history.find(S=>S.isCurrent);return!!t&&("NO"===t.isApproved&&!t.accepted&&!t.sustainedDate&&!t.isSetApart||t.isApproved&&"NO"===t.accepted&&!t.sustainedDate&&!t.isSetApart)});return Object.assign(Object.assign({},o),{callings:l})});v.next(d)},generateCallingsThatNeedToSustain:()=>{const d=c.getValue().map(o=>{const l=o.callings.filter(r=>{if(0===r.member.id)return!1;const t=r.history.find(m=>m.isCurrent);return!!t&&t.isApproved&&"YES"===t.accepted&&!t.sustainedDate&&!t.isSetApart});return Object.assign(Object.assign({},o),{callings:l})});h.next(d)},generateCallingsThatNeedToSetApart:()=>{const d=c.getValue().map(o=>{const l=o.callings.filter(r=>{if(0===r.member.id)return!1;const t=r.history.find(m=>m.isCurrent);return!!t&&t.isApproved&&"YES"===t.accepted&&t.sustainedDate&&!t.isSetApart});return Object.assign(Object.assign({},o),{callings:l})});g.next(d)}}}})();var s=p(7993);const E=[{name:"Bishop",organization:e.ys.Bishopric,history:[{memberId:79,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Bishopric First Counselor",organization:e.ys.Bishopric,history:[{memberId:318,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Bishopric Second Counselor",organization:e.ys.Bishopric,history:[{memberId:301,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Executive Secretary",organization:e.ys.Bishopric,history:[{memberId:303,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Assistant Executive Secretary",organization:e.ys.Bishopric,history:[{memberId:83,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Assistant Executive Secretary",organization:e.ys.Bishopric,history:[{memberId:282,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk",organization:e.ys.Bishopric,history:[{memberId:218,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk--Membership",organization:e.ys.Bishopric,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Clerk--Finance",organization:e.ys.Bishopric,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],C=[{name:"Sunday School President",organization:e.ys.SundaySchool,history:[{memberId:251,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School First Counselor",organization:e.ys.SundaySchool,history:[{memberId:62,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,8),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Second Counselor",organization:e.ys.SundaySchool,history:[{memberId:87,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Secretary",organization:e.ys.SundaySchool,history:[{memberId:37,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],I=[{name:"Sunday School - Gospel Doctrine - Teacher",organization:e.ys.SundaySchool,history:[{memberId:363,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Teacher",organization:e.ys.SundaySchool,history:[{memberId:359,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Youth Teacher",organization:e.ys.SundaySchool,history:[{memberId:361,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Youth Teacher",organization:e.ys.SundaySchool,history:[{memberId:362,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Youth Teacher",organization:e.ys.SundaySchool,history:[{memberId:365,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Sunday School Youth Teacher",organization:e.ys.SundaySchool,history:[{memberId:366,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],w=[{name:"Primary President",organization:e.ys.Primary,history:[{memberId:258,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary First Counselor",organization:e.ys.Primary,history:[{memberId:29,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Second Counselor",organization:e.ys.Primary,history:[{memberId:225,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Secretary",organization:e.ys.Primary,history:[{memberId:354,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Pianist",organization:e.ys.Primary,history:[{memberId:66,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Leader",organization:e.ys.Primary,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:86,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,25),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:110,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:283,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:98,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:77,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:238,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:8,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:329,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Eleventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:4,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:105,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:106,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:280,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:279,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:84,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:367,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,25),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:368,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,25),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:64,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:206,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,25),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:373,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:200,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Worker",organization:e.ys.Primary,history:[{memberId:191,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Girls Leader",organization:e.ys.Primary,history:[{memberId:121,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Girls Leader",organization:e.ys.Primary,history:[{memberId:372,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:null,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Girls Leader",organization:e.ys.Primary,history:[{memberId:59,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:null,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Boys Leader",organization:e.ys.Primary,history:[{memberId:351,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Primary Activities - Boys Leader",organization:e.ys.Primary,history:[{memberId:297,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Pianist",organization:e.ys.Primary,history:[{memberId:66,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Leader",organization:e.ys.Primary,history:[{memberId:15,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Primary Music Leader Assistant",organization:e.ys.Primary,history:[{memberId:220,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],N=[{name:"Young Women President",organization:e.ys.YoungWomen,history:[{memberId:89,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Young Women First Counselor",organization:e.ys.YoungWomen,history:[{memberId:254,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women Second Counselor",organization:e.ys.YoungWomen,history:[{memberId:197,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Young Women Secretary",organization:e.ys.YoungWomen,history:[{memberId:355,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]}],z=[{name:"Young Women 12-13 Class President",organization:e.ys.YoungWomen,history:[{memberId:128,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,8),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class First Counselor",organization:e.ys.YoungWomen,history:[{memberId:309,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Second Counselor",organization:e.ys.YoungWomen,history:[{memberId:17,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Secretary",organization:e.ys.YoungWomen,history:[{memberId:275,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Adult Leader - Advisor",organization:e.ys.YoungWomen,history:[{memberId:162,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Young Women 12-13 Class Adult Leader - Specialist",organization:e.ys.YoungWomen,history:[{memberId:357,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]}],P=[{name:"Young Women 14-15 Class President",organization:e.ys.YoungWomen,history:[{memberId:304,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,8),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class First Counselor",organization:e.ys.YoungWomen,history:[{memberId:122,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Second Counselor",organization:e.ys.YoungWomen,history:[{memberId:293,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Secretary",organization:e.ys.YoungWomen,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Adult Leader - Advisor",organization:e.ys.YoungWomen,history:[{memberId:358,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,25),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 14-15 Class Adult Leader - Specialist",organization:e.ys.YoungWomen,history:[{memberId:208,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,25),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],_=[{name:"Young Women 16-18 Class President",organization:e.ys.YoungWomen,history:[{memberId:317,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,8),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class First Counselor",organization:e.ys.YoungWomen,history:[{memberId:195,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Second Counselor",organization:e.ys.YoungWomen,history:[{memberId:180,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Secretary",organization:e.ys.YoungWomen,history:[{memberId:375,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Adult Leader - Advisor",organization:e.ys.YoungWomen,history:[{memberId:43,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Young Women 16-18 Class Adult Leader - Specialist",organization:e.ys.YoungWomen,history:[{memberId:369,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,8),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],J=E.find(u=>"Bishop"===u.name),L=E.find(u=>"Bishopric First Counselor"===u.name),W=E.find(u=>"Bishopric Second Counselor"===u.name),F=[Object.assign(Object.assign({},J),{organization:e.ys.AaronicPriesthoodQuorums}),Object.assign(Object.assign({},L),{organization:e.ys.AaronicPriesthoodQuorums}),Object.assign(Object.assign({},W),{organization:e.ys.AaronicPriesthoodQuorums})],O=[{name:"Deacons Quorum President",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:80,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Fourteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum First Counselor",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Second Counselor",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Secretary",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Adult Leader - Advisor",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:327,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Deacons Quorum Adult Leader - Specialist",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:26,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]}],Q=[{name:"Teachers Quorum President",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:298,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum First Counselor",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Second Counselor",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Secretary",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Adult Leader - Advisor",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:99,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Teachers Quorum Adult Leader - Specialist",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:371,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],G=[{name:"Priests Quorum First Assistant",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:175,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Second Assistant",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:326,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Secretary",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:207,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Adult Leader - Advisor",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:193,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Priests Quorum Adult Leader - Specialist",organization:e.ys.AaronicPriesthoodQuorums,history:[{memberId:374,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],k=[{name:"Elders Quorum President",organization:e.ys.EldersQuorum,history:[{memberId:24,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Fifth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum First Counselor",organization:e.ys.EldersQuorum,history:[{memberId:160,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Second Counselor",organization:e.ys.EldersQuorum,history:[{memberId:350,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Secretary",organization:e.ys.EldersQuorum,history:[{memberId:12,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,8),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Instructor",organization:e.ys.EldersQuorum,history:[{memberId:209,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Eleventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Instructor",organization:e.ys.EldersQuorum,history:[{memberId:223,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Eleventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Service Coordinator",organization:e.ys.EldersQuorum,history:[{memberId:92,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,8),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Service Coordinator",organization:e.ys.EldersQuorum,history:[{memberId:170,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Eleventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Activities Committee Member",organization:e.ys.EldersQuorum,history:[{memberId:360,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,s.E_.Eleventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Activities Committee Member",organization:e.ys.EldersQuorum,history:[{memberId:150,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,8),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Elders Quorum Activities Committee Member",organization:e.ys.EldersQuorum,history:[{memberId:44,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Facilities Building Representative",organization:e.ys.EldersQuorum,history:[{memberId:247,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],H=[{name:"Young Single Adult - Leader",organization:e.ys.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Accompanist",organization:e.ys.OtherCallings,history:[{memberId:352,isCurrent:!0,isApproved:null,accepted:"YES",sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Leader",organization:e.ys.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Music - Coordinator",organization:e.ys.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Technology - Specialist",organization:e.ys.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Mission Prep Leader",organization:e.ys.OtherCallings,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Building Cleanup & Snow Removal Coordinator",organization:e.ys.OtherCallings,history:[{memberId:233,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Trek - Main Ma",organization:e.ys.OtherCallings,history:[{memberId:208,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Trek - Main Pa",organization:e.ys.OtherCallings,history:[{memberId:206,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Trek - Helper",organization:e.ys.OtherCallings,history:[{memberId:209,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,5),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Trek - Helper",organization:e.ys.OtherCallings,history:[{memberId:213,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,5),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Trek - Helper",organization:e.ys.OtherCallings,history:[{memberId:125,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:null,needToRelease:!1,isReleased:!1}]},{name:"Trek - Helper",organization:e.ys.OtherCallings,history:[{memberId:121,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:null,needToRelease:!1,isReleased:!1}]},{name:"Trek - Helper",organization:e.ys.OtherCallings,history:[{memberId:170,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,8),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Trek - Helper",organization:e.ys.OtherCallings,history:[{memberId:172,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:null,needToRelease:!1,isReleased:!1}]},{name:"Trek - Helper",organization:e.ys.OtherCallings,history:[{memberId:218,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,8),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Trek - Helper",organization:e.ys.OtherCallings,history:[{memberId:217,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,8),isSetApart:!0,needToRelease:!1,isReleased:!1}]}],x=[{name:"Missionary",organization:e.ys.FullTimeMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],M=[{name:"Ward Temple and Family History Leader",organization:e.ys.TempleFamilyHistory,history:[{memberId:370,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Temple Prep Teacher",organization:e.ys.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Temple and Family History Consultant",organization:e.ys.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Temple and Family History Consultant",organization:e.ys.TempleFamilyHistory,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}],j=[{name:"Ward Mission Leader",organization:e.ys.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Assistant Ward Mission Leader",organization:e.ys.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Missionary",organization:e.ys.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Ward Missionary",organization:e.ys.WardMissionaries,history:[{memberId:0,isCurrent:!1,isApproved:null,accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]}];var B=p(5215);const V=[{name:"Relief Society President",organization:e.ys.ReliefSociety,history:[{memberId:250,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.Thirteenth),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society First Counselor",organization:e.ys.ReliefSociety,history:[{memberId:217,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Second Counselor",organization:e.ys.ReliefSociety,history:[{memberId:336,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Secretary",organization:e.ys.ReliefSociety,history:[{memberId:352,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Service Coordinator",organization:e.ys.ReliefSociety,history:[{memberId:269,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Activity Coordinator",organization:e.ys.ReliefSociety,history:[{memberId:9,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.November,s.E_.TwentySeventh),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Activity Committee Member",organization:e.ys.ReliefSociety,history:[{memberId:273,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Activity Committee Member",organization:e.ys.ReliefSociety,history:[{memberId:135,isCurrent:!0,isApproved:"YES",accepted:null,sustainedDate:null,isSetApart:!1,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Instructor",organization:e.ys.ReliefSociety,history:[{memberId:213,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2023,s.EJ.January,8),isSetApart:!0,needToRelease:!1,isReleased:!1}]},{name:"Relief Society Instructor",organization:e.ys.ReliefSociety,history:[{memberId:339,isCurrent:!0,isApproved:"YES",accepted:"YES",sustainedDate:new Date(2022,s.EJ.December,18),isSetApart:!1,needToRelease:!1,isReleased:!1}]}],{stores:{callings:U,members:X,callingGroups:Z,callingsThatNeedFilling:$,callingsThatNeedApproval:K,callingsThatNeedSomeoneElse:q,callingsThatNeedExtending:ee,callingsThatNeedSustaining:se,callingsThatNeedSetApart:ae},actions:{hydrateCallings:te,generateCallingGroups:re,generateCallingsThatNeedFilling:ie,generateCallingsThatNeedApproval:ne,generateCallingsThatNeedSomeElse:oe,generateCallingsThatNeedExtending:le,generateCallingsThatNeedToSustain:de,generateCallingsThatNeedToSetApart:ue}}=D;X.next(B.A$);const me=[...E,...C,...I,...V,...w,...k,...N,...z,...P,..._,...F,...O,...Q,...G,...M,...j,...x,...H];U.next(me),te(),re(),ie(),ne(),le(),oe(),de(),ue();const pe=Z.getValue(),ce=$.getValue(),Se=K.getValue(),ye=ee.getValue(),fe=q.getValue(),Ee=se.getValue(),Ae=ae.getValue()}}]);