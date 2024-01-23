"use strict";(self.webpackChunklehi31=self.webpackChunklehi31||[]).push([[823],{1823:(U,p,o)=>{o.r(p),o.d(p,{CallingsModule:()=>S});var r=o(8583),u=o(1558),l=o(69),g=o(5046),e=o(7716),c=o(665);function _(t,a){if(1&t&&(e.ynx(0),e._UZ(1,"br"),e.TgZ(2,"span",7),e._uU(3),e.qZA(),e.BQk()),2&t){const n=e.oxw();e.xp6(2),e.ekj("bg-primary","Needs extending"===n.status)("bg-info","Needs approval"===n.status)("bg-warning","Needs someone else"===n.status)("bg-secondary","Needs extending"===n.status)("bg-dark","Needs sustaining"===n.status)("bg-success","Needs setting apart"===n.status)("bg-danger","Needs to release"===n.status),e.xp6(1),e.hij(" ",n.status," ")}}let Z=(()=>{class t{constructor(){this.status=null}ngOnInit(){const n=this.calling.history.find(i=>i.memberId===this.calling.member.id);this.isApproved=n.isApproved,this.accepted=n.accepted,this.sustainedDate=n.sustainedDate,this.isSetApart=n.isSetApart,this.needToRelease=n.needToRelease,this.isReleased=n.isReleased,this.status=null,n.memberId||(this.status=null),n.memberId&&null===n.isApproved&&!n.accepted&&!n.sustainedDate&&!n.isSetApart&&(this.status=g.sj.NeedsApproval),("YES"===n.isApproved&&"NO"===n.accepted&&!n.sustainedDate&&!n.isSetApart||n.isApproved&&!n.accepted&&!n.sustainedDate&&!n.isSetApart)&&(this.status=g.sj.NeedsSomeoneElse),n.isApproved&&!n.accepted&&!n.sustainedDate&&!n.isSetApart&&(this.status=g.sj.NeedsExtending),n.isApproved&&"YES"===n.accepted&&!n.sustainedDate&&!n.isSetApart&&(this.status=g.sj.NeedsSustaining),n.sustainedDate&&n.needToRelease&&(this.status=g.sj.NeedsToRelease)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["lehi31-calling-item"]],inputs:{calling:"calling",showDetails:"showDetails"},decls:45,vars:23,consts:[[1,"row"],[1,"col-12"],[1,"d-flex","justify-content-between"],[1,"text-bold","text-end"],[4,"ngIf"],[1,"text-muted","small"],[1,"text-muted","small","text-end"],[1,"badge"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"div",3),e._uU(6),e.YNc(7,_,4,15,"ng-container",4),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"div",1),e.TgZ(9,"div",2),e.TgZ(10,"div",5),e._uU(11,"Approved:"),e.qZA(),e.TgZ(12,"div",6),e._uU(13),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",1),e.TgZ(15,"div",2),e.TgZ(16,"div",5),e._uU(17,"Accepted:"),e.qZA(),e.TgZ(18,"div",6),e._uU(19),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"div",1),e.TgZ(21,"div",2),e.TgZ(22,"div",5),e._uU(23,"Sustained date:"),e.qZA(),e.TgZ(24,"div",6),e._uU(25),e.ALo(26,"date"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"div",1),e.TgZ(28,"div",2),e.TgZ(29,"div",5),e._uU(30,"Set apart:"),e.qZA(),e.TgZ(31,"div",5),e._uU(32),e.qZA(),e.qZA(),e.qZA(),e.TgZ(33,"div",1),e.TgZ(34,"div",2),e.TgZ(35,"div",5),e._uU(36,"Needs to release:"),e.qZA(),e.TgZ(37,"div",5),e._uU(38),e.qZA(),e.qZA(),e.qZA(),e.TgZ(39,"div",1),e.TgZ(40,"div",2),e.TgZ(41,"div",5),e._uU(42,"Released:"),e.qZA(),e.TgZ(43,"div",5),e._uU(44),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(4),e.Oqu(i.calling.name),e.xp6(2),e.hij(" ",i.calling.member.givenName," "),e.xp6(1),e.Q6J("ngIf",i.status),e.xp6(1),e.ekj("collapse",!i.showDetails),e.xp6(5),e.hij(" ",null===i.isApproved?"--":"YES"===i.isApproved?"YES":"NO"," "),e.xp6(1),e.ekj("collapse",!i.showDetails),e.xp6(5),e.hij(" ",null===i.accepted?"--":"YES"===i.accepted?"YES":"NO"," "),e.xp6(1),e.ekj("collapse",!i.showDetails),e.xp6(5),e.hij(" ",i.sustainedDate&&"--"!==i.calling.member.givenName?e.lcZ(26,21,i.sustainedDate):"--"," "),e.xp6(2),e.ekj("collapse",!i.showDetails),e.xp6(5),e.hij(" ",i.sustainedDate&&"--"!==i.calling.member.givenName?i.isSetApart?"YES":"NO":"--"," "),e.xp6(1),e.ekj("collapse",!i.showDetails),e.xp6(5),e.hij(" ",i.needToRelease?"YES":"--"," "),e.xp6(1),e.ekj("collapse",!i.showDetails),e.xp6(5),e.hij(" ",i.isReleased?"YES":"--"," "))},directives:[r.O5],pipes:[r.uU],encapsulation:2}),t})();function m(t,a){if(1&t&&(e.TgZ(0,"li",34),e._UZ(1,"lehi31-calling-item",35),e.qZA()),2&t){const n=a.$implicit,i=e.oxw(7);e.xp6(1),e.Q6J("calling",n)("showDetails",i.showDetails)}}function h(t,a){if(1&t&&(e.ynx(0),e.YNc(1,m,2,2,"li",33),e.BQk()),2&t){const n=e.oxw(2).$implicit,i=e.oxw(2).$implicit,s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.getCallingsBySubOrg(i.callings,n))}}function v(t,a){if(1&t&&(e.ynx(0),e.TgZ(1,"div",32),e._uU(2),e.qZA(),e.TgZ(3,"ul",31),e.YNc(4,h,2,1,"ng-container",26),e.qZA(),e.BQk()),2&t){const n=e.oxw().$implicit,i=e.oxw(2).$implicit;e.xp6(2),e.hij(" ",n," "),e.xp6(2),e.Q6J("ngIf",i.callings.length)}}function A(t,a){if(1&t&&(e.ynx(0),e.YNc(1,v,5,2,"ng-container",26),e.BQk()),2&t){const n=a.$implicit,i=e.oxw(2).$implicit,s=e.oxw(2);e.xp6(1),e.Q6J("ngIf",s.getCallingsBySubOrg(i.callings,n).length)}}function T(t,a){if(1&t&&(e.TgZ(0,"li",34),e._UZ(1,"lehi31-calling-item",35),e.qZA()),2&t){const n=a.$implicit,i=e.oxw(5);e.xp6(1),e.Q6J("calling",n)("showDetails",i.showDetails)}}function f(t,a){if(1&t&&(e.ynx(0),e.YNc(1,T,2,2,"li",33),e.BQk()),2&t){const n=e.oxw(2).$implicit;e.xp6(1),e.Q6J("ngForOf",n.callings)}}function C(t,a){if(1&t&&(e.ynx(0),e.TgZ(1,"div",28),e.TgZ(2,"div",29),e.TgZ(3,"h5",30),e.TgZ(4,"span"),e._uU(5),e.qZA(),e.qZA(),e.qZA(),e.YNc(6,A,2,1,"ng-container",27),e.TgZ(7,"ul",31),e.YNc(8,f,2,1,"ng-container",26),e.qZA(),e.qZA(),e.BQk()),2&t){const n=e.oxw().$implicit,i=e.oxw(2);e.xp6(5),e.Oqu(n.name),e.xp6(1),e.Q6J("ngForOf",i.subOrgs),e.xp6(2),e.Q6J("ngIf",i.callingGroupHasNoSubOrgs(n.callings)&&n.callings.length)}}function q(t,a){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,C,9,3,"ng-container",26),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.Q6J("ngIf",n.callings.length)}}function x(t,a){if(1&t&&(e.ynx(0),e.YNc(1,q,2,1,"div",27),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.data)}}function b(t,a){1&t&&(e.ynx(0),e.TgZ(1,"div",36),e.TgZ(2,"div",29),e._uU(3,"No Callings Found"),e.qZA(),e.qZA(),e.BQk())}const y=[{path:"",component:(()=>{class t{constructor(n,i){this.activatedRoute=n,this.router=i,this.data=l.Vg,this.callingsFound=!0,this.subOrgs=g.Di,this.selectedOrganization="all",this.selectedStatus="all",this.activatedRoute.queryParams.subscribe(s=>{this.selectedStatus=s.status,this.selectedOrganization=s.organization,this.updateFilters(this.selectedStatus,this.selectedOrganization)})}toggleDetails(){this.showDetails=!this.showDetails}onStatusChange(){this.updateFilters(this.selectedStatus,this.selectedOrganization)}onOrganizationChange(){this.updateFilters(this.selectedStatus,this.selectedOrganization)}updateFilters(n,i){switch(n){case"all":this.data=l.Vg;break;case"need-filling":this.data=l.Nt;break;case"need-approval":this.data=l.Zw;break;case"need-extending":this.data=l.Bo;break;case"need-someone-else":this.data=l.uB;break;case"need-sustaining":this.data=l.yl;break;case"need-set-apart":this.data=l.lX;break;case"need-to-release":this.data=l.ZE}"all"!==i&&(this.data=this.data.filter(s=>s.group===i)),this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{status:n||"all",organization:i||"all"},queryParamsHandling:"merge",skipLocationChange:!1}).then(()=>console.log("route changed")),this.checkIfCallingFound()}ngOnInit(){this.updateFilters(this.selectedStatus,this.selectedOrganization)}checkIfCallingFound(){this.callingsFound=!1,this.data.forEach(n=>{n.callings.length&&(this.callingsFound=!0)})}getCallingsBySubOrg(n,i){return n.filter(s=>s.subOrganization===i)}callingGroupHasNoSubOrgs(n){return n.filter(i=>void 0===i.subOrganization).length>0}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.gz),e.Y36(u.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["lehi31-callings"]],decls:52,vars:4,consts:[[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-3"],[1,"d-flex","justify-content-between","mb-3"],[1,"h3","mb-0"],[1,"d-flex"],["aria-label","Filter",1,"form-select","form-select-sm","d-inline","me-2",3,"ngModel","change","ngModelChange"],["value","all","selected",""],["value","bishopric"],["value","elders-quorum"],["value","relief-society"],["value","aaronic-priesthood-quorums"],["value","young-woman"],["value","sunday-school"],["value","primary"],["value","ward-missionaries"],["value","full-time-missionaries"],["value","temple-family-history"],["value","other-callings"],["value","need-filling"],["value","need-approval"],["value","need-extending"],["value","need-someone-else"],["value","need-sustaining"],["value","need-set-apart"],["value","need-to-release"],[1,"btn","btn-outline-secondary","btn-sm",3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"card","mb-3"],[1,"card-body"],[1,"card-title","mb-0","d-flex","justify-content-between"],[1,"list-group","list-group-flush"],[1,"px-3","py-1","font-size-12","list-group-item","list-group-item-secondary"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[3,"calling","showDetails"],[1,"card"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h1",3),e._uU(4,"Callings"),e.qZA(),e.TgZ(5,"div",4),e.TgZ(6,"select",5),e.NdJ("change",function(){return i.onOrganizationChange()})("ngModelChange",function(d){return i.selectedOrganization=d}),e.TgZ(7,"option",6),e._uU(8,"Organization - All"),e.qZA(),e.TgZ(9,"option",7),e._uU(10,"Bishopric"),e.qZA(),e.TgZ(11,"option",8),e._uU(12,"Elders Quorum"),e.qZA(),e.TgZ(13,"option",9),e._uU(14,"Relief Society"),e.qZA(),e.TgZ(15,"option",10),e._uU(16," Aaronic Priesthood Quorums "),e.qZA(),e.TgZ(17,"option",11),e._uU(18,"Young Women"),e.qZA(),e.TgZ(19,"option",12),e._uU(20,"Sunday School"),e.qZA(),e.TgZ(21,"option",13),e._uU(22,"Primary"),e.qZA(),e.TgZ(23,"option",14),e._uU(24,"Ward Missionaries"),e.qZA(),e.TgZ(25,"option",15),e._uU(26,"Full Time Missionaries"),e.qZA(),e.TgZ(27,"option",16),e._uU(28,"Temple Family History"),e.qZA(),e.TgZ(29,"option",17),e._uU(30,"Other Callings"),e.qZA(),e.qZA(),e.TgZ(31,"select",5),e.NdJ("change",function(){return i.onStatusChange()})("ngModelChange",function(d){return i.selectedStatus=d}),e.TgZ(32,"option",6),e._uU(33,"Status - All"),e.qZA(),e.TgZ(34,"option",18),e._uU(35,"Need Filling"),e.qZA(),e.TgZ(36,"option",19),e._uU(37,"Need Approval"),e.qZA(),e.TgZ(38,"option",20),e._uU(39,"Need Extending"),e.qZA(),e.TgZ(40,"option",21),e._uU(41,"Needs Someone Else"),e.qZA(),e.TgZ(42,"option",22),e._uU(43,"Need Sustaining"),e.qZA(),e.TgZ(44,"option",23),e._uU(45,"Need Set Apart"),e.qZA(),e.TgZ(46,"option",24),e._uU(47,"Need To Release"),e.qZA(),e.qZA(),e.TgZ(48,"button",25),e.NdJ("click",function(){return i.toggleDetails()}),e._uU(49," Details "),e.qZA(),e.qZA(),e.qZA(),e.YNc(50,x,2,1,"ng-container",26),e.YNc(51,b,4,0,"ng-container",26),e.qZA(),e.qZA()),2&n&&(e.xp6(6),e.Q6J("ngModel",i.selectedOrganization),e.xp6(25),e.Q6J("ngModel",i.selectedStatus),e.xp6(19),e.Q6J("ngIf",i.callingsFound),e.xp6(1),e.Q6J("ngIf",!i.callingsFound))},directives:[c.EJ,c.JJ,c.On,c.YN,c.Kr,r.O5,r.sg,Z],encapsulation:2}),t})()}];let N=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(y)],u.Bz]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.ez,c.u5,N]]}),t})()}}]);