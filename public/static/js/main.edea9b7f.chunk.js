(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),o=n(8),s=n.n(o),i=n(9),l=n(22),u=n(63),j=n(55),d=n(5),b="[ui] Open modal",m="[ui] Close modal",p="[event] Added",O="[event] Updated",f="[event] Deleted",h="[event] Set active",v="[event] Events loaded",x="[auth] Finish checking login",g="[auth] Login",y="[auth] Logout",N={events:[],activeEvent:null},k={modalOpen:!1},w={checking:!0},E=Object(l.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(d.a)(Object(d.a)({},e),{},{modalOpen:!0});case m:return Object(d.a)(Object(d.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(d.a)(Object(d.a)({},e),{},{events:Object(j.a)(t.payload)});case p:return Object(d.a)(Object(d.a)({},e),{},{events:[].concat(Object(j.a)(e.events),[t.payload])});case O:return Object(d.a)(Object(d.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case f:return Object(d.a)(Object(d.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case h:return Object(d.a)(Object(d.a)({},e),{},{activeEvent:t.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.payload),{},{checking:!1});case x:return Object(d.a)(Object(d.a)({},e),{},{checking:!1});case y:return{checking:!1};default:return e}}}),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,C=Object(l.e)(E,S(Object(l.a)(u.a))),T=n(35),D=n(10),I=n(12),P=n.n(I),A=n(21),_=n(13),R=n.n(_),F="https://mern-calendar-backend-andy.herokuapp.com/api",G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(F,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},L=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(F,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},M=n(17),U=n.n(M),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{end:U()(e.end).toDate(),start:U()(e.start).toDate()})}))},H=function(e){return{type:p,payload:e}},J=function(e){return{type:O,payload:e}},q=function(){return{type:f}},X=function(e){return{type:h,payload:e}},z=function(e){return{type:v,payload:e}},B=function(){return{type:x}},W=function(e){return{type:g,payload:e}},K=function(){return{type:y}},Q=n(15),Y=(n(76),n(25)),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(Q.a)(t,2),a=n[0],c=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},s=function(e){var t=e.target;c(Object(d.a)(Object(d.a)({},a),{},Object(Y.a)({},t.name,t.value)))};return[a,s,o]},$=function(){var e=Object(i.b)(),t=Z({lEmail:"andrescasas@gmail.com",lPassword:"123456"}),n=Object(Q.a)(t,2),r=n[0],c=n[1],o=Z({rName:"Walter Casas",rEmail:"waltercasas@gmail.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(Q.a)(o,2),l=s[0],u=s[1],j=r.lEmail,d=r.lPassword,b=l.rName,m=l.rEmail,p=l.rPassword1,O=l.rPassword2;return Object(a.jsx)("div",{className:"container login-container",children:Object(a.jsxs)("div",{className:"row login-element",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Ingreso"}),Object(a.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=j,a=d,function(){var e=Object(A.a)(P.a.mark((function e(t){var r,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(W({uid:c.uid,name:c.name}))):R.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:j,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:d,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Registro"}),Object(a.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),p!==O)return R.a.fire("Error","Las contrase\xf1as deben ser iguales","error");var n,a,r;e((n=b,a=m,r=p,function(){var e=Object(A.a)(P.a.mark((function e(t){var c,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth/new",{name:n,email:a,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(W({uid:o.uid,name:o.name}))):R.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:b,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:m,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:p,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:O,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear"})})]})]})]})})},ee=n(54),te=function(){return{type:b}},ne=(n(77),n(78),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),ae=function(){var e=Object(i.c)((function(e){return e.auth})).name,t=Object(i.b)();return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(a.jsx)("span",{className:"navbar-brand",children:Object(a.jsx)("b",{children:"ACTIC"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("small",{className:"navbar-name",children:e}),Object(a.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t((function(e){localStorage.removeItem("token"),localStorage.removeItem("token-init-date"),e(X(null)),e(K())}))},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:" Salir"})]})]})]})},re=function(e){var t=e.event,n=t.title,r=t.user;return Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:n}),Object(a.jsxs)("span",{children:["- ",null===r||void 0===r?void 0:r.name]})]})},ce=n(49),oe=n.n(ce),se=n(50),ie=n.n(se),le={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};oe.a.setAppElement("#root");var ue=U()().minutes(0).seconds(0).add(1,"hours"),je=ue.clone().add(1,"hours"),de={title:"",notes:"",start:ue.toDate(),end:je.toDate()},be=function(){var e=Object(i.b)(),t=Object(r.useState)(ue.toDate()),n=Object(Q.a)(t,2),c=n[0],o=n[1],s=Object(r.useState)(je.toDate()),l=Object(Q.a)(s,2),u=l[0],j=l[1],b=Object(r.useState)(!0),p=Object(Q.a)(b,2),O=p[0],f=p[1],h=Object(i.c)((function(e){return e.ui})).modalOpen,v=Object(i.c)((function(e){return e.calendar})).activeEvent,x=Object(r.useState)(de),g=Object(Q.a)(x,2),y=g[0],N=g[1],k=y.notes,w=y.title,E=y.start,S=y.end;Object(r.useEffect)((function(){v&&N(v)}),[v,N]);var C=function(e){var t=e.target;N(Object(d.a)(Object(d.a)({},y),{},Object(Y.a)({},t.name,t.value)))},T=function(){N(de),e({type:m}),e(X(null))};return Object(a.jsxs)(oe.a,{isOpen:h,onRequestClose:T,style:le,className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:200,children:[Object(a.jsxs)("h1",{children:[" ",v?"Editar evento":"Nuevo evento"," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var n,a=U()(E),r=U()(S);return a.isSameOrAfter(r)?R.a.fire("Ups T_T ...!!","Fecha fin debe ser mayor que la fecha inicio","error"):w.trim().length<2?f(!1):(e(v?(n=y,function(){var e=Object(A.a)(P.a.mark((function e(t,a){var r,c,o,s,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a().auth,c=r.uid,o=r.name,e.prev=1,n.user._id===c){e.next=4;break}return e.abrupt("return",R.a.fire("Error","No tiene permisos para hacer este cambio","error"));case 4:return e.next=6,L("events/".concat(n.id),n,"PUT");case 6:return s=e.sent,e.next=9,s.json();case 9:(i=e.sent).ok?(n.user={_id:c,name:o},t(J(n))):R.a.fire("Error",i.msg,"error"),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(1);case 15:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(A.a)(P.a.mark((function t(n,a){var r,c,o,s,i;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,L("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok?(e.id=i.event.id,e.user={_id:c,name:o},n(H(e))):R.a.fire("Error",i.msg,"error"),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(1);case 13:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(y)),f(!0),void T())},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora inicio"}),Object(a.jsx)(ie.a,{onChange:function(e){o(e),N(Object(d.a)(Object(d.a)({},y),{},{start:e}))},value:c,className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora fin"}),Object(a.jsx)(ie.a,{onChange:function(e){j(e),N(Object(d.a)(Object(d.a)({},y),{},{end:e}))},value:u,minDate:c,className:"form-control"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Titulo y notas"}),Object(a.jsx)("input",{type:"text",className:"form-control ".concat(!O&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:w,onChange:C}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:k,onChange:C}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Guardar"})]})]})]})},me=function(){var e=Object(i.b)();return Object(a.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(X(null)),e(te())},children:Object(a.jsx)("i",{className:"fas fa-plus"})})},pe=function(){var e=Object(i.b)();return Object(a.jsx)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(A.a)(P.a.mark((function e(t,n){var a,r,c,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n().calendar.activeEvent,r=n().auth.uid,e.prev=2,a.user._id===r){e.next=5;break}return e.abrupt("return",R.a.fire("Error","No tiene permisos para hacer este cambio","error"));case 5:return e.next=7,L("events/".concat(a.id),{},"DELETE");case 7:return c=e.sent,e.next=10,c.json();case 10:(o=e.sent).ok?t(q()):R.a.fire("Error",o.msg,"error"),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n){return e.apply(this,arguments)}}())},children:Object(a.jsx)("i",{className:"fas fa-trash"})})};U.a.locale("es");var Oe=Object(ee.b)(U.a),fe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).uid,n=Object(i.c)((function(e){return e.calendar})),c=n.events,o=n.activeEvent,s=Object(r.useState)(localStorage.getItem("lastView")||"month"),l=Object(Q.a)(s,2),u=l[0],j=l[1];Object(r.useEffect)((function(){e(function(){var e=Object(A.a)(P.a.mark((function e(t){var n,a,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=V(a.events),a.ok&&t(z(r)),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(a.jsxs)("div",{children:[Object(a.jsx)(ae,{}),Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(ee.a,{localizer:Oe,events:c,startAccessor:"start",endAccessor:"end",view:u,messages:ne,eventPropGetter:function(e,n,a,r){return{style:{backgroundColor:t===e.user._id?"#367CF7":"#465660",boderRadius:"0px",opacity:.8,color:"white"}}},onDoubleClickEvent:function(){e(te())},onSelectEvent:function(t){e(X(t))},onSelectSlot:function(){e(X(null))},selectable:!0,onView:function(e){j(e),localStorage.setItem("lastView",e)},components:{event:re}}),Object(a.jsx)(be,{}),Object(a.jsx)(me,{}),o&&Object(a.jsx)(pe,{})]})]})},he=n(38),ve=function(e){var t=e.isAuthenticated,n=e.component,r=Object(he.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",r.location.pathname),Object(a.jsx)(D.b,Object(d.a)(Object(d.a)({},r),{},{component:function(e){return t?Object(a.jsx)(n,Object(d.a)({},e)):Object(a.jsx)(D.a,{to:"/login"})}}))},xe=function(e){var t=e.isAuthenticated,n=e.component,r=Object(he.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(D.b,Object(d.a)(Object(d.a)({},r),{},{component:function(e){return t?Object(a.jsx)(D.a,{to:"/"}):Object(a.jsx)(n,Object(d.a)({},e))}}))},ge=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(r.useEffect)((function(){e(function(){var e=Object(A.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(W({uid:a.uid,name:a.name}))):t(B());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(a.jsx)("h5",{children:"Espere..."}):Object(a.jsx)(T.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(D.d,{children:[Object(a.jsx)(xe,{exact:!0,path:"/login",component:$,isAuthenticated:!!c}),Object(a.jsx)(ve,{exact:!0,path:"/",component:fe,isAuthenticated:!!c})]})})})},ye=function(){return Object(a.jsx)(i.a,{store:C,children:Object(a.jsx)(ge,{})})};n(114);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ye,{})}),document.getElementById("root"))},76:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.edea9b7f.chunk.js.map