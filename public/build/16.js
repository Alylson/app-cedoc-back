webpackJsonp([16],{283:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u(0),a=(u(2),u(13),u(26)),i=u(79),e=u(25),o=function(){function l(l,n,u,t,a,i,e,o){switch(this.navCtrl=l,this.navParams=n,this.plat=u,this.api=t,this.appCtrl=a,this.loadingCtrl=i,this.storage=e,this.alertCtrl=o,this.users="",this.usersCache="",this.plt=u,this.optionPosition=this.navParams.get("position"),this.loading=this.loadingCtrl.create({content:"Carregando"}),this.loading.present(),this.optionPosition){case 1:this.getAllUsers();break;case 2:this.getUsersByActive()}}return l.prototype.filtrarEntidades=function(l){switch(this.optionPosition){case 1:this.users=this.usersCache;var n=l.target.value;n&&""!=n.trim()&&(this.users=this.usersCache.filter(function(l){return l.c_nome.concat(l.c_email).concat(l.role).toLowerCase().indexOf(n.toLowerCase())>-1}));break;case 2:this.users=this.usersCache;var u=l.target.value;u&&""!=u.trim()&&(this.users=this.usersCache.filter(function(l){return l.c_nome.concat(l.c_email).concat(l.role).toLowerCase().indexOf(u.toLowerCase())>-1}))}},l.prototype.getAllUsers=function(){var l=this;this.api.getUsers().then(function(n){n.subscribe(function(n){if(200==n.status){l.usersCache=n.body,l.users=n.body;for(var u=0,t=0,a=l.users;t<a.length;t++){"false"==a[t].active&&++u}l.storage.set("inactiveUsers",u)}try{l.loading.dismiss()}catch(l){}},function(n){try{l.loading.dismiss()}catch(l){}l.api.logout(),l.appCtrl.getRootNav().setRoot(i.a)})})},l.prototype.getUsersByActive=function(){var l=this;this.api.getUsersByActive(!1).then(function(n){n.subscribe(function(n){200==n.status&&(l.usersCache=n.body,l.users=n.body,l.storage.set("inactiveUsers",n.body.length));try{l.loading.dismiss()}catch(l){}},function(n){try{l.loading.dismiss()}catch(l){}l.api.logout(),l.appCtrl.getRootNav().setRoot(i.a)})})},l.prototype.voltar=function(){this.navCtrl.pop()},l.prototype.formatDate=function(l){return new Date(l).toLocaleString()},l.prototype.formatText=function(l,n){return n>=l.length?l:l.substring(0,n)+"..."},l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad AboutPage")},l}(),r=function(){return function(){}}(),s=u(216),c=u(217),_=u(218),p=u(219),h=u(220),f=u(221),d=u(222),m=u(223),b=u(224),g=u(225),v=u(74),Z=u(1),k=u(32),y=u(30),Y=u(28),I=u(16),C=u(49),x=u(14),j=u(12),z=u(31),U=u(37),w=u(106),$=u(107),A=u(11),F=u(50),L=u(5),P=u(47),D=u(18),B=u(4),O=u(6),R=u(7),S=u(22),E=u(17),G=u(21),N=u(226),V=u(76),M=u(15),H=u(10),J=u(48),T=u(75),W=t.X({encapsulation:2,styles:[],data:{}});function X(l){return t._19(0,[(l()(),t.Z(0,0,null,null,2,"ion-title",[["class","ion-title-ios"]],null,null,null,g.b,g.a)),t.Y(1,49152,null,0,v.a,[Z.a,t.j,t.z,[2,k.a],[2,y.a]],null,null),(l()(),t._18(-1,0,["Gestão"]))],null,null)}function q(l){return t._19(0,[(l()(),t.Z(0,0,null,null,2,"ion-title",[],null,null,null,g.b,g.a)),t.Y(1,49152,null,0,v.a,[Z.a,t.j,t.z,[2,k.a],[2,y.a]],null,null),(l()(),t._18(-1,0,["Gestão"]))],null,null)}function K(l){return t._19(0,[(l()(),t.Z(0,0,null,null,1,"div",[["class","empty-fill-ios"]],null,null,null,null,null)),(l()(),t._18(-1,null,["\n  "]))],null,null)}function Q(l){return t._19(0,[(l()(),t.Z(0,0,null,null,2,"button",[["ion-button",""],["small",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.alterarPermissao(l.parent.context.$implicit)&&t);return t},Y.b,Y.a)),t.Y(1,1097728,null,0,I.a,[[8,""],Z.a,t.j,t.z],{small:[0,"small"]},null),(l()(),t._18(-1,0,["Alterar"]))],function(l,n){l(n,1,0,"")},null)}function ll(l){return t._19(0,[(l()(),t.Z(0,0,null,null,10,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.alterarStatus(!1,l.parent.context.$implicit.n_pkid)&&t);return t},C.b,C.a)),t.Y(1,1097728,null,3,x.a,[j.a,Z.a,t.j,t.z,[2,z.a]],null,null),t._16(335544320,4,{contentLabel:0}),t._16(603979776,5,{_buttons:1}),t._16(603979776,6,{_icons:1}),t.Y(5,16384,null,0,U.a,[],null,null),(l()(),t._18(-1,2,["\n      "])),(l()(),t.Z(7,0,null,2,2,"button",[["block",""],["color","dark"],["ion-button",""]],null,null,null,Y.b,Y.a)),t.Y(8,1097728,[[5,4]],0,I.a,[[8,""],Z.a,t.j,t.z],{color:[0,"color"],block:[1,"block"]},null),(l()(),t._18(-1,0,["Desativar usuário"])),(l()(),t._18(-1,2,["\n    "]))],function(l,n){l(n,8,0,"dark","")},null)}function nl(l){return t._19(0,[(l()(),t.Z(0,0,null,null,10,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.alterarStatus(!0,l.parent.context.$implicit.n_pkid)&&t);return t},C.b,C.a)),t.Y(1,1097728,null,3,x.a,[j.a,Z.a,t.j,t.z,[2,z.a]],null,null),t._16(335544320,7,{contentLabel:0}),t._16(603979776,8,{_buttons:1}),t._16(603979776,9,{_icons:1}),t.Y(5,16384,null,0,U.a,[],null,null),(l()(),t._18(-1,2,["\n      "])),(l()(),t.Z(7,0,null,2,2,"button",[["block",""],["color","primary"],["ion-button",""]],null,null,null,Y.b,Y.a)),t.Y(8,1097728,[[8,4]],0,I.a,[[8,""],Z.a,t.j,t.z],{color:[0,"color"],block:[1,"block"]},null),(l()(),t._18(-1,0,["Ativar usuário"])),(l()(),t._18(-1,2,["\n    "]))],function(l,n){l(n,8,0,"primary","")},null)}function ul(l){return t._19(0,[(l()(),t.Z(0,0,null,null,69,"ion-card",[],null,null,null,null,null)),t.Y(1,16384,null,0,w.a,[Z.a,t.j,t.z],null,null),(l()(),t._18(-1,null,["\n\n    "])),(l()(),t.Z(3,0,null,null,21,"ion-item",[["class","item item-block"]],null,null,null,C.b,C.a)),t.Y(4,1097728,null,3,x.a,[j.a,Z.a,t.j,t.z,[2,z.a]],null,null),t._16(335544320,1,{contentLabel:0}),t._16(603979776,2,{_buttons:1}),t._16(603979776,3,{_icons:1}),t.Y(8,16384,null,0,U.a,[],null,null),(l()(),t._18(-1,2,["\n      "])),(l()(),t.Z(10,0,null,0,4,"ion-avatar",[["item-start",""]],null,null,null,null,null)),t.Y(11,16384,null,0,$.a,[],null,null),(l()(),t._18(-1,null,["\n        "])),(l()(),t.Z(13,0,null,null,0,"img",[["src","./../../../assets/imgs/user.png"]],null,null,null,null,null)),(l()(),t._18(-1,null,["\n      "])),(l()(),t._18(-1,2,["\n      "])),(l()(),t._18(-1,2,["\n      "])),(l()(),t.Z(17,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),t._18(18,null,["",""])),(l()(),t._18(-1,2,["\n      "])),(l()(),t._18(-1,2,["\n      "])),(l()(),t.Z(21,0,null,2,1,"p",[],null,null,null,null,null)),(l()(),t._18(22,null,["",""])),(l()(),t._18(-1,2,["\n      "])),(l()(),t._18(-1,2,["\n    "])),(l()(),t._18(-1,null,["\n\n    "])),(l()(),t.Z(26,0,null,null,9,"div",[["class","info"]],null,null,null,null,null)),(l()(),t._18(-1,null,["\n      "])),(l()(),t.Z(28,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t._18(-1,null,["\n      "])),(l()(),t.Z(30,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t._18(-1,null,["Cadastrado em"])),(l()(),t._18(-1,null,["\n      "])),(l()(),t.Z(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._18(34,null,["",""])),(l()(),t._18(-1,null,["\n    "])),(l()(),t._18(-1,null,["\n    "])),(l()(),t.Z(37,0,null,null,9,"div",[["class","info"]],null,null,null,null,null)),(l()(),t._18(-1,null,["\n      "])),(l()(),t.Z(39,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t._18(-1,null,["\n      "])),(l()(),t.Z(41,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t._18(-1,null,["Atualizado em"])),(l()(),t._18(-1,null,["\n      "])),(l()(),t.Z(44,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._18(45,null,["",""])),(l()(),t._18(-1,null,["\n    "])),(l()(),t._18(-1,null,["\n    "])),(l()(),t.Z(48,0,null,null,12,"div",[["class","info"]],null,null,null,null,null)),(l()(),t._18(-1,null,["\n      "])),(l()(),t.Z(50,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t._18(-1,null,["\n      "])),(l()(),t.Z(52,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t._18(-1,null,["Permissão"])),(l()(),t._18(-1,null,["\n      "])),(l()(),t.Z(55,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._18(56,null,["",""])),(l()(),t._18(-1,null,["\n      "])),(l()(),t.U(16777216,null,null,1,null,Q)),t.Y(59,16384,null,0,A.i,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._18(-1,null,["\n\n    "])),(l()(),t._18(-1,null,["\n    "])),(l()(),t.Z(62,0,null,null,0,"hr",[["style","margin-bottom: 0px !important;"]],null,null,null,null,null)),(l()(),t._18(-1,null,["\n    "])),(l()(),t.U(16777216,null,null,1,null,ll)),t.Y(65,16384,null,0,A.i,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._18(-1,null,["\n    "])),(l()(),t.U(16777216,null,null,1,null,nl)),t.Y(68,16384,null,0,A.i,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._18(-1,null,["\n\n  "]))],function(l,n){l(n,59,0,"admin"!=n.context.$implicit.role),l(n,65,0,"true"==n.context.$implicit.active&&"admin"!=n.context.$implicit.role),l(n,68,0,"false"==n.context.$implicit.active&&"admin"!=n.context.$implicit.role)},function(l,n){var u=n.component;l(n,18,0,n.context.$implicit.c_email),l(n,22,0,n.context.$implicit.c_nome),l(n,34,0,u.formatDate(n.context.$implicit.created_at)),l(n,45,0,u.formatDate(n.context.$implicit.updated_at)),l(n,56,0,n.context.$implicit.role)})}function tl(l){return t._19(0,[(l()(),t.Z(0,0,null,null,2,"ion-header",[],null,null,null,null,null)),t.Y(1,16384,null,0,F.a,[Z.a,t.j,t.z,[2,L.a]],null,null),(l()(),t._18(-1,null,["\n"])),(l()(),t._18(-1,null,["\n"])),(l()(),t.Z(4,0,null,null,30,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,P.b,P.a)),t.Y(5,4374528,null,0,D.a,[Z.a,B.a,O.a,t.j,t.z,R.a,S.a,t.u,[2,L.a],[2,E.a]],null,null),(l()(),t._18(-1,1,["\n\n  "])),(l()(),t.Z(7,0,null,1,17,"div",[["class","header-bar"],["id","dynamicHeader"]],null,null,null,null,null)),(l()(),t._18(-1,null,["\n    "])),(l()(),t.Z(9,0,null,null,5,"button",[["clear",""],["color","dark"],["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.voltar()&&t);return t},Y.b,Y.a)),t.Y(10,1097728,null,0,I.a,[[8,""],Z.a,t.j,t.z],{color:[0,"color"],clear:[1,"clear"]},null),(l()(),t._18(-1,0,["\n      "])),(l()(),t.Z(12,0,null,0,1,"ion-icon",[["name","arrow-back"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(13,147456,null,0,G.a,[Z.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._18(-1,0,["\n    "])),(l()(),t._18(-1,null,["\n    "])),(l()(),t.U(16777216,null,null,1,null,X)),t.Y(17,16384,null,0,A.i,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._18(-1,null,["\n    "])),(l()(),t.U(16777216,null,null,1,null,q)),t.Y(20,16384,null,0,A.i,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._18(-1,null,["\n    "])),(l()(),t._18(-1,null,["\n    "])),(l()(),t.Z(23,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t._18(-1,null,["\n  "])),(l()(),t._18(-1,1,["\n\n  "])),(l()(),t.U(16777216,null,1,1,null,K)),t.Y(27,16384,null,0,A.i,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._18(-1,1,["\n\n  "])),(l()(),t.Z(29,0,null,1,1,"ion-searchbar",[["placeholder","Buscar"]],[[2,"searchbar-animated",null],[2,"searchbar-has-value",null],[2,"searchbar-active",null],[2,"searchbar-show-cancel",null],[2,"searchbar-left-aligned",null],[2,"searchbar-has-focus",null]],[[null,"ionInput"]],function(l,n,u){var t=!0;"ionInput"===n&&(t=!1!==l.component.filtrarEntidades(u)&&t);return t},N.b,N.a)),t.Y(30,1294336,null,0,V.a,[Z.a,B.a,t.j,t.z,[2,M.i]],{placeholder:[0,"placeholder"]},{ionInput:"ionInput"}),(l()(),t._18(-1,1,["\n\n  "])),(l()(),t.U(16777216,null,1,1,null,ul)),t.Y(33,802816,null,0,A.h,[t.I,t.F,t.p],{ngForOf:[0,"ngForOf"]},null),(l()(),t._18(-1,1,["\n\n"])),(l()(),t._18(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,10,0,"dark","");l(n,13,0,"arrow-back"),l(n,17,0,u.plt.is("ios")),l(n,20,0,!u.plt.is("ios")),l(n,27,0,u.plt.is("ios"));l(n,30,0,"Buscar"),l(n,33,0,u.users)},function(l,n){l(n,4,0,t._13(n,5).statusbarPadding,t._13(n,5)._hasRefresher),l(n,12,0,t._13(n,13)._hidden),l(n,29,0,t._13(n,30)._animated,t._13(n,30)._value,t._13(n,30)._isActive,t._13(n,30)._showCancelButton,t._13(n,30)._shouldAlignLeft,t._13(n,30)._isFocus)})}var al=t.V("page-gerenciar-evento",o,function(l){return t._19(0,[(l()(),t.Z(0,0,null,null,1,"page-gerenciar-evento",[],null,null,null,tl,W)),t.Y(1,49152,null,0,o,[E.a,H.a,B.a,a.a,R.a,J.a,e.b,T.a],null,null)],null,null)},{},{},[]),il=u(150),el=u(56);u.d(n,"GerenciarEventoPageModuleNgFactory",function(){return ol});var ol=t.W(r,[],function(l){return t._10([t._11(512,t.i,t.S,[[8,[s.a,c.a,_.a,p.a,h.a,f.a,d.a,m.a,b.a,al]],[3,t.i],t.s]),t._11(4608,A.k,A.j,[t.r,[2,A.s]]),t._11(4608,M.r,M.r,[]),t._11(4608,M.d,M.d,[]),t._11(512,A.b,A.b,[]),t._11(512,M.p,M.p,[]),t._11(512,M.e,M.e,[]),t._11(512,M.n,M.n,[]),t._11(512,il.a,il.a,[]),t._11(512,il.b,il.b,[]),t._11(512,r,r,[]),t._11(256,el.a,o,[])])})}});