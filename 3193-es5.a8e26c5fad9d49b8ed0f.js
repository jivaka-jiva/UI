!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(self.webpackChunkui=self.webpackChunkui||[]).push([[3193],{3193:function(e,o,i){"use strict";i.r(o),i.d(o,{TwoColumnLayoutModule:function(){return _}});var r=i(1116),c=i(1041),a=i(4812),d=i(3337),l=i(7738),s=i(7013),g=i(5366),u=i(6659);function m(n,t){if(1&n&&g._UZ(0,"ion-icon",11),2&n){var e=g.oxw().$implicit;g.Q6J("ios",e.icon+"-outline")("md",e.icon+"-sharp")}}function p(n,t){if(1&n&&g._UZ(0,"img",12),2&n){var e=g.oxw().$implicit;g.Q6J("src",e.img,g.LSH)}}var h=function(n){return[n]};function P(n,t){if(1&n){var e=g.EpF();g.TgZ(0,"ion-menu-toggle",7),g.TgZ(1,"ion-item",8),g.NdJ("click",function(){var n=g.CHM(e).index;return g.oxw().selectedIndex=n}),g.YNc(2,m,1,2,"ion-icon",9),g.YNc(3,p,1,1,"img",10),g.TgZ(4,"ion-label"),g._uU(5),g.qZA(),g.qZA(),g.qZA()}if(2&n){var o=t.$implicit;g.xp6(1),g.Q6J("routerLink",g.VKq(4,h,o.url)),g.xp6(1),g.Q6J("ngIf",o.icon),g.xp6(1),g.Q6J("ngIf",o.img),g.xp6(2),g.Oqu(o.title)}}var f,C,O=[{path:"",component:(f=function(){function e(t,o,i,r){n(this,e),this.platform=t,this.splashScreen=o,this.statusBar=i,this.authService=r,this.selectedIndex=0,this.appPages=[{title:"Dashboard",url:"/dashboard",icon:"pie-chart"},{title:"Treatments",url:"/treatments",icon:"fitness"}],this.initializeApp()}var o,i,r;return o=e,(i=[{key:"initializeApp",value:function(){var n=this;this.platform.ready().then(function(){n.statusBar.styleDefault(),n.splashScreen.hide()})}},{key:"ngOnInit",value:function(){var n=window.location.pathname.split("folder/")[1];void 0!==n&&(this.selectedIndex=this.appPages.findIndex(function(t){return t.title.toLowerCase()===n.toLowerCase()}))}}])&&t(o.prototype,i),r&&t(o,r),e}(),f.\u0275fac=function(n){return new(n||f)(g.Y36(a.t4),g.Y36(l.c),g.Y36(s.A),g.Y36(u.e))},f.\u0275cmp=g.Xpm({type:f,selectors:[["app-two-column-layout"]],decls:9,vars:1,consts:[["contentId","main-content"],["contentId","main-content","type","overlay"],[1,"text-center"],["height","45px","src","assets/brand-logo.png",1,"ion-align-self-center","ion-text-center"],[1,"inbox-list","ion-text-center"],["auto-hide","false",4,"ngFor","ngForOf"],["id","main-content"],["auto-hide","false"],["routerDirection","root","lines","none","detail","false","routerLinkActive","selected",3,"routerLink","click"],["slot","start",3,"ios","md",4,"ngIf"],["style","width:25px; margin-right: unset; margin-inline-end: 32px;",3,"src",4,"ngIf"],["slot","start",3,"ios","md"],[2,"width","25px","margin-right","unset","margin-inline-end","32px",3,"src"]],template:function(n,t){1&n&&(g.TgZ(0,"ion-split-pane",0),g.TgZ(1,"ion-menu",1),g.TgZ(2,"ion-header"),g.TgZ(3,"ion-toolbar",2),g._UZ(4,"img",3),g.qZA(),g.qZA(),g.TgZ(5,"ion-content"),g.TgZ(6,"ion-list",4),g.YNc(7,P,6,6,"ion-menu-toggle",5),g.qZA(),g.qZA(),g.qZA(),g._UZ(8,"ion-router-outlet",6),g.qZA()),2&n&&(g.xp6(7),g.Q6J("ngForOf",t.appPages))},directives:[a.jI,a.z0,a.Gu,a.sr,a.W2,a.q_,r.sg,a.jP,a.zc,a.Ie,d.Od,a.YI,d.rH,r.O5,a.Q$,a.gu],styles:["ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:var(--ion-item-background,var(--ion-background-color,#fff))}ion-menu.md[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-start:8px;--padding-end:8px;--padding-top:20px;--padding-bottom:20px}ion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:20px 0}ion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{margin-bottom:30px}ion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{padding-left:10px}ion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%]{border-bottom:1px solid #d7d8da;border-bottom:1px solid var(--ion-color-step-150,#d7d8da)}ion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{font-size:22px;font-weight:600;min-height:20px}ion-menu.md[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{font-size:16px;margin-bottom:18px;color:#757575;min-height:26px}ion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:10px;--padding-end:10px;border-radius:4px}ion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]{--background:rgba(var(--ion-color-primary-rgb),0.14)}ion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#616e7e}ion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:500}ion-menu.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-bottom:20px}ion-menu.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:20px 0 0}ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{line-height:24px;margin-bottom:20px}ion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:16px;--padding-end:16px;--min-height:50px}ion-menu.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px;color:#73849a}ion-menu.ios[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{margin-bottom:8px}ion-menu.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px}ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{margin-bottom:8px}ion-note[_ngcontent-%COMP%]{display:inline-block;font-size:16px;color:var(--ion-color-medium-shade)}ion-item.selected[_ngcontent-%COMP%]{--color:var(--ion-color-primary)}ion-menu.menu-pane-visible[_ngcontent-%COMP%]{width:200px}"]}),f),children:[{path:"treatments",loadChildren:function(){return Promise.all([i.e(9769),i.e(3841),i.e(1363),i.e(8592),i.e(5060)]).then(i.bind(i,5060)).then(function(n){return n.TreatmentsPageModule})}},{path:"add-procedure",loadChildren:function(){return Promise.all([i.e(9769),i.e(3841),i.e(1363),i.e(2935),i.e(8592),i.e(5821)]).then(i.bind(i,5821)).then(function(n){return n.AddProcedurePageModule})}},{path:"dashboard",loadChildren:function(){return Promise.all([i.e(9769),i.e(3841),i.e(1363),i.e(2935),i.e(8592),i.e(6613)]).then(i.bind(i,6613)).then(function(n){return n.DashboardPageModule})}},{path:"procedures",loadChildren:function(){return Promise.all([i.e(9769),i.e(3841),i.e(1363),i.e(8592),i.e(3603)]).then(i.bind(i,3603)).then(function(n){return n.ProceduresPageModule})}}]}],M=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[d.Bz.forChild(O)],d.Bz]}),t}(),_=((C=function t(){n(this,t)}).\u0275fac=function(n){return new(n||C)},C.\u0275mod=g.oAB({type:C}),C.\u0275inj=g.cJS({imports:[[r.ez,c.u5,a.Pc,M]]}),C)}}])}();