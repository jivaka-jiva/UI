!function(){function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(self.webpackChunkui=self.webpackChunkui||[]).push([[3183],{3183:function(t,i,n){"use strict";n.r(i),n.d(i,{RegisterPageModule:function(){return b}});var a=n(1116),o=n(1041),s=n(4812),u=n(3337),m=n(4762),l=n(5366),g=n(6659),c=n(8372),p=n(2797),d=n(3070),f=n(9550),h=n(3841),Z=n(4369),q=n(5706);function v(e,r){1&e&&(l.TgZ(0,"mat-error"),l._uU(1," Name is "),l.TgZ(2,"strong"),l._uU(3,"required"),l.qZA(),l.qZA())}function A(e,r){1&e&&(l.TgZ(0,"mat-error"),l._uU(1," Please enter a valid email address "),l.qZA())}function y(e,r){1&e&&(l.TgZ(0,"mat-error"),l._uU(1," Email is "),l.TgZ(2,"strong"),l._uU(3,"required"),l.qZA(),l.qZA())}function T(e,r){1&e&&(l.TgZ(0,"mat-error"),l._uU(1," Password is "),l.TgZ(2,"strong"),l._uU(3,"required"),l.qZA(),l.qZA())}function w(e,r){if(1&e&&(l.TgZ(0,"mat-option",18),l._uU(1),l.qZA()),2&e){var t=r.$implicit;l.Q6J("value",t),l.xp6(1),l.Oqu(t)}}function x(e,r){1&e&&(l.TgZ(0,"mat-error"),l._uU(1," Select "),l.TgZ(2,"strong"),l._uU(3,"at-least one"),l.qZA(),l._uU(4," hospital "),l.qZA())}function _(e,r){if(1&e&&(l.TgZ(0,"mat-option",18),l._uU(1),l.qZA()),2&e){var t=r.$implicit;l.Q6J("value",t),l.xp6(1),l.hij(" ",t," ")}}function U(e,r){1&e&&(l.TgZ(0,"mat-error"),l._uU(1," Speciality is "),l.TgZ(2,"strong"),l._uU(3,"required"),l.qZA(),l.qZA())}var F,I,N=function(){return["/login"]},J=[{path:"",component:(F=function(){function t(r,i,n){e(this,t),this.authService=r,this.router=i,this.storage=n,this.registerForm=new o.cw({name:new o.NI("",[o.kI.required]),email:new o.NI("",[o.kI.required,o.kI.email]),password:new o.NI("",[o.kI.required,o.kI.min(5)]),hospitals:new o.NI([],[o.kI.required]),speciality:new o.NI("",[o.kI.required])}),this.hospitals=["Max","Dharamshila","Kailash","Metro"],this.specialities=["ENT","Dentist","Anaesthesia","Physician"]}var i,n,a;return i=t,(n=[{key:"ngOnInit",value:function(){}},{key:"register",value:function(){return(0,m.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storage.set("isRegistered","yes");case 2:return e.next=4,this.storage.set("hospitals",this.registerForm.get("hospitals").value);case 4:return e.next=6,this.storage.set("speciality",this.registerForm.get("speciality").value);case 6:return e.next=8,this.storage.set("email",this.registerForm.get("email").value);case 8:return e.next=10,this.storage.set("password",this.registerForm.get("password").value);case 10:this.registerForm.valid&&this.authService.register(this.registerForm.value).then(function(e){e&&r.authService.login({username:r.registerForm.value.email,password:r.registerForm.value.password}).then(function(e){e&&r.router.navigateByUrl("").then()})});case 11:case"end":return e.stop()}},e,this)}))}}])&&r(i.prototype,n),a&&r(i,a),t}(),F.\u0275fac=function(e){return new(e||F)(l.Y36(g.e),l.Y36(u.F0),l.Y36(c.Ke))},F.\u0275cmp=l.Xpm({type:F,selectors:[["app-register"]],decls:38,vars:11,consts:[[1,"container-fluid","d-flex","ion-justify-content-center","h-100",2,"overflow-y","scroll"],[1,"row",2,"flex","1 0 auto"],[1,"m-auto","card-dimensions"],[1,"mat-elevation-z0","h-100","ion-text-center","pb-5"],[1,"d-flex","ion-justify-content-center"],["src","../../../assets/logo.png","alt","Easy Doc Logo"],[1,"pl-2"],[1,"single-line-container","content-padding",3,"formGroup","ngSubmit"],["matInput","","formControlName","name","placeholder","Full name","type","text","required",""],[4,"ngIf"],["matInput","","placeholder","Email","formControlName","email","type","email","required",""],["matInput","","placeholder","Set a password","formControlName","password","type","password","required",""],["formControlName","hospitals","multiple","","required",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","speciality","required",""],["mat-raised-button","","color","primary","type","submit",1,"mt-4"],[1,"mt-2",2,"font-size","14px"],[3,"routerLink"],[3,"value"]],template:function(e,r){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"mat-card",3),l.TgZ(4,"div",4),l._UZ(5,"img",5),l.TgZ(6,"h1",6),l._uU(7,"Welcome"),l.qZA(),l.qZA(),l.TgZ(8,"mat-card-content"),l.TgZ(9,"form",7),l.NdJ("ngSubmit",function(){return r.register()}),l.TgZ(10,"mat-form-field"),l._UZ(11,"input",8),l.YNc(12,v,4,0,"mat-error",9),l.qZA(),l.TgZ(13,"mat-form-field"),l._UZ(14,"input",10),l.YNc(15,A,2,0,"mat-error",9),l.YNc(16,y,4,0,"mat-error",9),l.qZA(),l.TgZ(17,"mat-form-field"),l._UZ(18,"input",11),l.YNc(19,T,4,0,"mat-error",9),l.qZA(),l.TgZ(20,"mat-form-field"),l.TgZ(21,"mat-label"),l._uU(22,"Select your hospitals"),l.qZA(),l.TgZ(23,"mat-select",12),l.YNc(24,w,2,2,"mat-option",13),l.qZA(),l.YNc(25,x,5,0,"mat-error",9),l.qZA(),l.TgZ(26,"mat-form-field"),l.TgZ(27,"mat-label"),l._uU(28,"What is your speciality"),l.qZA(),l.TgZ(29,"mat-select",14),l.YNc(30,_,2,2,"mat-option",13),l.qZA(),l.YNc(31,U,4,0,"mat-error",9),l.qZA(),l.TgZ(32,"button",15),l._uU(33,"Register"),l.qZA(),l.TgZ(34,"p",16),l._uU(35," Already have an account? "),l.TgZ(36,"a",17),l._uU(37,"Log in"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(9),l.Q6J("formGroup",r.registerForm),l.xp6(3),l.Q6J("ngIf",r.registerForm.get("name").hasError("required")),l.xp6(3),l.Q6J("ngIf",r.registerForm.get("email").hasError("email")&&!r.registerForm.get("email").hasError("required")),l.xp6(1),l.Q6J("ngIf",r.registerForm.get("email").hasError("required")),l.xp6(3),l.Q6J("ngIf",r.registerForm.get("email").hasError("required")),l.xp6(5),l.Q6J("ngForOf",r.hospitals),l.xp6(1),l.Q6J("ngIf",r.registerForm.get("hospitals").hasError("required")),l.xp6(5),l.Q6J("ngForOf",r.specialities),l.xp6(1),l.Q6J("ngIf",r.registerForm.get("speciality").hasError("required")),l.xp6(5),l.Q6J("routerLink",l.DdM(10,N)))},directives:[p.a8,p.dn,o._Y,o.JL,o.sg,d.KE,f.Nt,o.Fj,o.JJ,o.u,o.Q7,a.O5,d.hX,h.gD,a.sg,Z.lW,u.yS,s.YI,d.TO,q.ey],styles:[".content-padding[_ngcontent-%COMP%]{padding:2rem 4rem 4rem}@media only screen and (max-width:480px){.content-padding[_ngcontent-%COMP%]{padding:2rem 3rem 4rem}}@media only screen and (max-width:370px){.content-padding[_ngcontent-%COMP%]{padding:2rem 1rem 4rem}}"]}),F)}],k=function(){var r=function r(){e(this,r)};return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=l.oAB({type:r}),r.\u0275inj=l.cJS({imports:[[u.Bz.forChild(J)],u.Bz]}),r}(),b=((I=function r(){e(this,r)}).\u0275fac=function(e){return new(e||I)},I.\u0275mod=l.oAB({type:I}),I.\u0275inj=l.cJS({imports:[[a.ez,o.u5,s.Pc,c.Fw,k,p.QW,Z.ot,o.UX,d.lN,Z.ot,f.c,h.LD]]}),I)}}])}();