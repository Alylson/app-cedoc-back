webpackJsonp([0],{277:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=u(0),t=(u(2),u(13),u(25)),o=function(){function l(l,n,u,a){var t=this;this.navCtrl=l,this.navParams=n,this.alertCtrl=u,this.storage=a,this.livro=this.navParams.get("item"),this.storage.get("Logged").then(function(l){t.logged=null!=l&&l})}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad BookDetailsPage")},l.prototype.alertLogin=function(){this.alertCtrl.create({title:"Alerta",subTitle:"Voce precisa logar em uma conta para usar essas funções.",buttons:["Ok"]}).present()},l}(),e=function(){return function(){}}(),i=u(216),s=u(217),c=u(218),_=u(219),r=u(220),b=u(221),d=u(222),m=u(223),g=u(224),f=u(33),k=u(1),Y=u(4),h=u(8),p=u(6),Z=u(49),v=u(14),j=u(12),z=u(31),I=u(58),C=u(37),y=u(21),L=u(298),x=u(15),A=u(151),P=u(40),B=u(41),D=u(28),F=u(16),q=u(50),w=u(5),U=u(299),V=u(30),O=u(7),X=u(17),M=u(225),T=u(74),E=u(32),J=u(47),N=u(18),R=u(22),S=u(107),W=u(57),G=u(108),H=u(11),K=u(10),Q=u(75),$=a.X({encapsulation:2,styles:[],data:{}});function ll(l){return a._19(0,[(l()(),a.Z(0,0,null,null,59,"ion-list",[],null,null,null,null,null)),a.Y(1,16384,null,0,f.a,[k.a,a.j,a.z,Y.a,h.l,p.a],null,null),(l()(),a._18(-1,null,["\n\n      "])),(l()(),a.Z(3,0,null,null,6,"ion-list-header",[["class","item"]],null,null,null,Z.b,Z.a)),a.Y(4,1097728,null,3,v.a,[j.a,k.a,a.j,a.z,[2,z.a]],null,null),a._16(335544320,10,{contentLabel:0}),a._16(603979776,11,{_buttons:1}),a._16(603979776,12,{_icons:1}),a.Y(8,16384,null,0,I.a,[k.a,a.z,a.j,[8,null]],null,null),(l()(),a._18(-1,2,["\n        E-book\n      "])),(l()(),a._18(-1,null,["\n\n      "])),(l()(),a.Z(11,0,null,null,17,"ion-item",[["class","item item-block"]],null,null,null,Z.b,Z.a)),a.Y(12,1097728,null,3,v.a,[j.a,k.a,a.j,a.z,[2,z.a]],null,null),a._16(335544320,13,{contentLabel:0}),a._16(603979776,14,{_buttons:1}),a._16(603979776,15,{_icons:1}),a.Y(16,16384,null,0,C.a,[],null,null),(l()(),a._18(-1,2,["\n        "])),(l()(),a.Z(18,0,null,0,1,"ion-icon",[["item-start",""],["name","cloud"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(19,147456,[[15,4]],0,y.a,[k.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._18(-1,2,["\n        "])),(l()(),a.Z(21,0,null,4,2,"ion-toggle",[["checked","false"]],[[2,"toggle-disabled",null],[2,"toggle-checked",null],[2,"toggle-activated",null]],[[null,"keyup"]],function(l,n,u){var t=!0;"keyup"===n&&(t=!1!==a._13(l,23)._keyup(u)&&t);return t},L.b,L.a)),a._15(5120,null,x.h,function(l){return[l]},[A.a]),a.Y(23,1228800,null,0,A.a,[j.a,k.a,Y.a,a.j,a.z,P.a,[2,v.a],h.l,p.a,a.u],{checked:[0,"checked"]},null),(l()(),a._18(-1,2,["\n        "])),(l()(),a.Z(25,0,null,1,2,"ion-label",[],null,null,null,null,null)),a.Y(26,16384,[[13,4]],0,B.a,[k.a,a.j,a.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),a._18(-1,null,["\n          Disponível Offline\n        "])),(l()(),a._18(-1,2,["\n      "])),(l()(),a._18(-1,null,["\n\n      "])),(l()(),a.Z(30,0,null,null,13,"ion-item",[["class","list-button item item-block"]],null,null,null,Z.b,Z.a)),a.Y(31,1097728,null,3,v.a,[j.a,k.a,a.j,a.z,[2,z.a]],null,null),a._16(335544320,16,{contentLabel:0}),a._16(603979776,17,{_buttons:1}),a._16(603979776,18,{_icons:1}),a.Y(35,16384,null,0,C.a,[],null,null),(l()(),a._18(-1,2,["\n        "])),(l()(),a.Z(37,0,null,2,5,"button",[["block",""],["icon-left",""],["ion-button",""],["small",""]],null,null,null,D.b,D.a)),a.Y(38,1097728,[[17,4]],0,F.a,[[8,""],k.a,a.j,a.z],{small:[0,"small"],block:[1,"block"]},null),(l()(),a._18(-1,0,["\n          "])),(l()(),a.Z(40,0,null,0,1,"ion-icon",[["name","open"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(41,147456,null,0,y.a,[k.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._18(-1,0,["\n          Abrir\n        "])),(l()(),a._18(-1,2,["\n      "])),(l()(),a._18(-1,null,["\n\n      "])),(l()(),a.Z(45,0,null,null,13,"ion-item",[["class","list-button item item-block"]],null,null,null,Z.b,Z.a)),a.Y(46,1097728,null,3,v.a,[j.a,k.a,a.j,a.z,[2,z.a]],null,null),a._16(335544320,19,{contentLabel:0}),a._16(603979776,20,{_buttons:1}),a._16(603979776,21,{_icons:1}),a.Y(50,16384,null,0,C.a,[],null,null),(l()(),a._18(-1,2,["\n        "])),(l()(),a.Z(52,0,null,2,5,"button",[["block",""],["color","secondary"],["icon-left",""],["ion-button",""],["small",""]],null,null,null,D.b,D.a)),a.Y(53,1097728,[[20,4]],0,F.a,[[8,""],k.a,a.j,a.z],{color:[0,"color"],small:[1,"small"],block:[2,"block"]},null),(l()(),a._18(-1,0,["\n          "])),(l()(),a.Z(55,0,null,0,1,"ion-icon",[["name","cloud-download"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(56,147456,null,0,y.a,[k.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._18(-1,0,["\n          Baixar\n        "])),(l()(),a._18(-1,2,["\n      "])),(l()(),a._18(-1,null,["\n\n    "]))],function(l,n){l(n,19,0,"cloud");l(n,23,0,"false");l(n,38,0,"","");l(n,41,0,"open");l(n,53,0,"secondary","","");l(n,56,0,"cloud-download")},function(l,n){l(n,18,0,a._13(n,19)._hidden),l(n,21,0,a._13(n,23)._disabled,a._13(n,23)._value,a._13(n,23)._activated),l(n,40,0,a._13(n,41)._hidden),l(n,55,0,a._13(n,56)._hidden)})}function nl(l){return a._19(0,[(l()(),a.Z(0,0,null,null,5,"button",[["icon-left",""],["ion-button",""],["item-start",""],["small",""]],null,null,null,D.b,D.a)),a.Y(1,1097728,[[23,4]],0,F.a,[[8,""],k.a,a.j,a.z],{small:[0,"small"]},null),(l()(),a._18(-1,0,["\n        "])),(l()(),a.Z(3,0,null,0,1,"ion-icon",[["name","thumbs-up"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(4,147456,null,0,y.a,[k.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._18(5,0,["\n        "," Likes\n      "]))],function(l,n){l(n,1,0,"");l(n,4,0,"thumbs-up")},function(l,n){var u=n.component;l(n,3,0,a._13(n,4)._hidden),l(n,5,0,u.livro.n_curtidas)})}function ul(l){return a._19(0,[(l()(),a.Z(0,0,null,null,5,"button",[["icon-left",""],["ion-button",""],["item-end",""],["small",""]],null,null,null,D.b,D.a)),a.Y(1,1097728,[[23,4]],0,F.a,[[8,""],k.a,a.j,a.z],{small:[0,"small"]},null),(l()(),a._18(-1,0,["\n        "])),(l()(),a.Z(3,0,null,0,1,"ion-icon",[["name","text"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(4,147456,null,0,y.a,[k.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._18(-1,0,["\n        4 Comentários\n      "]))],function(l,n){l(n,1,0,"");l(n,4,0,"text")},function(l,n){l(n,3,0,a._13(n,4)._hidden)})}function al(l){return a._19(0,[(l()(),a.Z(0,0,null,null,5,"button",[["disabled",""],["icon-left",""],["ion-button",""],["item-start",""],["small",""]],null,null,null,D.b,D.a)),a.Y(1,1097728,[[23,4]],0,F.a,[[8,""],k.a,a.j,a.z],{small:[0,"small"]},null),(l()(),a._18(-1,0,["\n        "])),(l()(),a.Z(3,0,null,0,1,"ion-icon",[["name","thumbs-up"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(4,147456,null,0,y.a,[k.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._18(5,0,["\n        "," Likes\n      "]))],function(l,n){l(n,1,0,"");l(n,4,0,"thumbs-up")},function(l,n){var u=n.component;l(n,3,0,a._13(n,4)._hidden),l(n,5,0,u.livro.n_curtidas)})}function tl(l){return a._19(0,[(l()(),a.Z(0,0,null,null,5,"button",[["disabled",""],["icon-left",""],["ion-button",""],["item-end",""],["small",""]],null,null,null,D.b,D.a)),a.Y(1,1097728,[[23,4]],0,F.a,[[8,""],k.a,a.j,a.z],{small:[0,"small"]},null),(l()(),a._18(-1,0,["\n        "])),(l()(),a.Z(3,0,null,0,1,"ion-icon",[["name","text"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(4,147456,null,0,y.a,[k.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._18(-1,0,["\n        4 Comentários\n      "]))],function(l,n){l(n,1,0,"");l(n,4,0,"text")},function(l,n){l(n,3,0,a._13(n,4)._hidden)})}function ol(l){return a._19(0,[(l()(),a.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),a.Y(1,16384,null,0,q.a,[k.a,a.j,a.z,[2,w.a]],null,null),(l()(),a._18(-1,null,["\n\n  "])),(l()(),a.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,U.b,U.a)),a.Y(4,49152,null,0,V.a,[O.a,[2,w.a],[2,X.a],k.a,a.j,a.z],null,null),(l()(),a._18(-1,3,["\n    "])),(l()(),a.Z(6,0,null,3,2,"ion-title",[],null,null,null,M.b,M.a)),a.Y(7,49152,null,0,T.a,[k.a,a.j,a.z,[2,E.a],[2,V.a]],null,null),(l()(),a._18(8,0,["",""])),(l()(),a._18(-1,3,["\n  "])),(l()(),a._18(-1,null,["\n\n"])),(l()(),a._18(-1,null,["\n\n\n"])),(l()(),a.Z(12,0,null,null,91,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,J.b,J.a)),a.Y(13,4374528,null,0,N.a,[k.a,Y.a,p.a,a.j,a.z,O.a,R.a,a.u,[2,w.a],[2,X.a]],null,null),(l()(),a._18(-1,1,["\n\n  "])),(l()(),a.Z(15,0,null,1,87,"ion-list",[["no-lines",""]],null,null,null,null,null)),a.Y(16,16384,null,0,f.a,[k.a,a.j,a.z,Y.a,h.l,p.a],null,null),(l()(),a._18(-1,null,["\n\n    "])),(l()(),a.Z(18,0,null,null,17,"ion-item",[["class","item item-block"]],null,null,null,Z.b,Z.a)),a.Y(19,1097728,null,3,v.a,[j.a,k.a,a.j,a.z,[2,z.a]],null,null),a._16(335544320,1,{contentLabel:0}),a._16(603979776,2,{_buttons:1}),a._16(603979776,3,{_icons:1}),a.Y(23,16384,null,0,C.a,[],null,null),(l()(),a._18(-1,2,["\n      "])),(l()(),a.Z(25,0,null,0,4,"ion-avatar",[["item-start",""]],null,null,null,null,null)),a.Y(26,16384,null,0,S.a,[],null,null),(l()(),a._18(-1,null,["\n        "])),(l()(),a.Z(28,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),a._18(-1,null,["\n      "])),(l()(),a._18(-1,2,["\n      "])),(l()(),a._18(-1,2,["\n      "])),(l()(),a.Z(32,0,null,2,2,"ion-note",[],null,null,null,null,null)),a.Y(33,16384,null,0,W.a,[k.a,a.j,a.z],null,null),(l()(),a._18(34,null,["",""])),(l()(),a._18(-1,2,["\n    "])),(l()(),a._18(-1,null,["\n\n    "])),(l()(),a.Z(37,0,null,null,5,"ion-card-content",[],null,null,null,null,null)),a.Y(38,16384,null,0,G.a,[k.a,a.j,a.z],null,null),(l()(),a._18(-1,null,["\n      "])),(l()(),a.Z(40,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a._18(41,null,[""," "])),(l()(),a._18(-1,null,["\n    "])),(l()(),a._18(-1,null,["\n\n    "])),(l()(),a.Z(44,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,Z.b,Z.a)),a.Y(45,1097728,null,3,v.a,[j.a,k.a,a.j,a.z,[2,z.a]],null,null),a._16(335544320,4,{contentLabel:0}),a._16(603979776,5,{_buttons:1}),a._16(603979776,6,{_icons:1}),a.Y(49,16384,null,0,C.a,[],null,null),(l()(),a._18(-1,2,["\n      "])),(l()(),a.Z(51,0,null,0,1,"ion-icon",[["item-start",""],["large",""],["name","person"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(52,147456,[[6,4]],0,y.a,[k.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._18(-1,2,["\n      "])),(l()(),a.Z(54,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),a._18(-1,null,["Autor"])),(l()(),a._18(-1,2,["\n      "])),(l()(),a.Z(57,0,null,2,2,"ion-note",[],null,null,null,null,null)),a.Y(58,16384,null,0,W.a,[k.a,a.j,a.z],null,null),(l()(),a._18(59,null,["",""])),(l()(),a._18(-1,2,["\n    "])),(l()(),a._18(-1,null,["\n\n    "])),(l()(),a.Z(62,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,Z.b,Z.a)),a.Y(63,1097728,null,3,v.a,[j.a,k.a,a.j,a.z,[2,z.a]],null,null),a._16(335544320,7,{contentLabel:0}),a._16(603979776,8,{_buttons:1}),a._16(603979776,9,{_icons:1}),a.Y(67,16384,null,0,C.a,[],null,null),(l()(),a._18(-1,2,["\n      "])),(l()(),a.Z(69,0,null,0,1,"ion-icon",[["item-start",""],["large",""],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(70,147456,[[9,4]],0,y.a,[k.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a._18(-1,2,["\n      "])),(l()(),a.Z(72,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),a._18(73,null,["",""])),(l()(),a._18(-1,2,["\n      "])),(l()(),a.Z(75,0,null,2,2,"ion-note",[],null,null,null,null,null)),a.Y(76,16384,null,0,W.a,[k.a,a.j,a.z],null,null),(l()(),a._18(-1,null,["Biblioteca"])),(l()(),a._18(-1,2,["\n    "])),(l()(),a._18(-1,null,["\n\n    "])),(l()(),a.U(16777216,null,null,1,null,ll)),a.Y(81,16384,null,0,H.i,[a.I,a.F],{ngIf:[0,"ngIf"]},null),(l()(),a._18(-1,null,["\n\n    "])),(l()(),a.Z(83,0,null,null,18,"ion-item",[["class","item item-block"]],null,null,null,Z.b,Z.a)),a.Y(84,1097728,null,3,v.a,[j.a,k.a,a.j,a.z,[2,z.a]],null,null),a._16(335544320,22,{contentLabel:0}),a._16(603979776,23,{_buttons:1}),a._16(603979776,24,{_icons:1}),a.Y(88,16384,null,0,C.a,[],null,null),(l()(),a._18(-1,2,["\n      "])),(l()(),a.U(16777216,null,0,1,null,nl)),a.Y(91,16384,null,0,H.i,[a.I,a.F],{ngIf:[0,"ngIf"]},null),(l()(),a._18(-1,2,["\n      "])),(l()(),a.U(16777216,null,4,1,null,ul)),a.Y(94,16384,null,0,H.i,[a.I,a.F],{ngIf:[0,"ngIf"]},null),(l()(),a._18(-1,2,["\n      "])),(l()(),a.U(16777216,null,0,1,null,al)),a.Y(97,16384,null,0,H.i,[a.I,a.F],{ngIf:[0,"ngIf"]},null),(l()(),a._18(-1,2,["\n      "])),(l()(),a.U(16777216,null,4,1,null,tl)),a.Y(100,16384,null,0,H.i,[a.I,a.F],{ngIf:[0,"ngIf"]},null),(l()(),a._18(-1,2,["\n    "])),(l()(),a._18(-1,null,["\n\n  "])),(l()(),a._18(-1,1,["\n\n"])),(l()(),a._18(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,52,0,"person"),l(n,70,0,a._2(1,"","true"==u.livro.c_displocal?"checkmark-circle":"close-circle","")),l(n,81,0,"true"==u.livro.c_dispebook),l(n,91,0,u.logged),l(n,94,0,u.logged),l(n,97,0,0==u.logged),l(n,100,0,0==u.logged)},function(l,n){var u=n.component;l(n,3,0,a._13(n,4)._hidden,a._13(n,4)._sbPadding),l(n,8,0,u.livro.c_nome),l(n,12,0,a._13(n,13).statusbarPadding,a._13(n,13)._hasRefresher),l(n,28,0,a._2(1,"",u.livro.c_thumbnail,"")),l(n,34,0,u.livro.d_publi),l(n,41,0,u.livro.c_info),l(n,51,0,a._13(n,52)._hidden),l(n,59,0,u.livro.c_autor),l(n,69,0,a._13(n,70)._hidden),l(n,73,0,"true"==u.livro.c_displocal?"Disponível":"Indisponível")})}var el=a.V("page-book-details",o,function(l){return a._19(0,[(l()(),a.Z(0,0,null,null,1,"page-book-details",[],null,null,null,ol,$)),a.Y(1,49152,null,0,o,[X.a,K.a,Q.a,t.b],null,null)],null,null)},{},{},[]),il=u(150),sl=u(56);u.d(n,"BookDetailsPageModuleNgFactory",function(){return cl});var cl=a.W(e,[],function(l){return a._10([a._11(512,a.i,a.S,[[8,[i.a,s.a,c.a,_.a,r.a,b.a,d.a,m.a,g.a,el]],[3,a.i],a.s]),a._11(4608,H.k,H.j,[a.r,[2,H.s]]),a._11(4608,x.r,x.r,[]),a._11(4608,x.d,x.d,[]),a._11(512,H.b,H.b,[]),a._11(512,x.p,x.p,[]),a._11(512,x.e,x.e,[]),a._11(512,x.n,x.n,[]),a._11(512,il.a,il.a,[]),a._11(512,il.b,il.b,[]),a._11(512,e,e,[]),a._11(256,sl.a,o,[])])})},298:function(l,n,u){"use strict";u.d(n,"a",function(){return i}),n.b=s;var a=u(0),t=u(28),o=u(16),e=u(1),i=(u(151),u(12),u(4),u(40),u(8),u(6),a.X({encapsulation:2,styles:[],data:{}}));function s(l){return a._19(0,[(l()(),a.Z(0,0,null,null,1,"div",[["class","toggle-icon"]],null,null,null,null,null)),(l()(),a.Z(1,0,null,null,0,"div",[["class","toggle-inner"]],null,null,null,null,null)),(l()(),a.Z(2,0,null,null,1,"button",[["class","item-cover"],["disable-activated",""],["ion-button","item-cover"],["role","checkbox"],["type","button"]],[[8,"id",0],[1,"aria-checked",0],[1,"aria-labelledby",0],[1,"aria-disabled",0]],null,null,t.b,t.a)),a.Y(3,1097728,null,0,o.a,[[8,"item-cover"],e.a,a.j,a.z],null,null)],null,function(l,n){var u=n.component;l(n,2,0,u.id,u._value,u._labelId,u._disabled)})}},299:function(l,n,u){"use strict";u.d(n,"a",function(){return c}),n.b=_;var a=u(0),t=u(11),o=u(28),e=u(16),i=u(1),s=u(21),c=(u(30),u(5),u(17),a.X({encapsulation:2,styles:[],data:{}}));function _(l){return a._19(0,[(l()(),a.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),a.Y(1,278528,null,0,t.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var a=!0;"click"===n&&(a=!1!==l.component.backButtonClick(u)&&a);return a},o.b,o.a)),a.Y(3,278528,null,0,t.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(4,1097728,null,0,e.a,[[8,"bar-button"],i.a,a.j,a.z],null,null),(l()(),a.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(6,278528,null,0,t.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(7,147456,null,0,s.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),a.Y(9,278528,null,0,t.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a._18(10,null,["",""])),a._12(null,0),a._12(null,1),a._12(null,2),(l()(),a.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),a.Y(15,278528,null,0,t.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._12(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode),l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb),l(n,5,0,a._13(n,7)._hidden),l(n,10,0,u._backText)})}}});