(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(29),r=n.n(c),o=n(33),s=n(8),i=n(14),u=n(55),j=n(70),l=n(41),d=n.n(l),b=function(){var e=Object(j.a)(Object(u.a)().mark((function e(t,n){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("auth/login",{username:t,password:n}).then((function(e){return e.data.accessToken&&localStorage.setItem("data",JSON.stringify(e.data)),e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h={login:b,logout:function(){localStorage.removeItem("data")},getCurrentUser:function(){return JSON.parse(localStorage.getItem("user"))}},O={on:function(e,t){document.addEventListener(e,(function(e){return t(e.detail)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}},m=n(158),p=n(159),x=n(160),f=n(161),v=n(155),g=n(162),w=n(156),S=n(153),k=n(154),I=n(2),y=function(){var e=Object(i.f)(),t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),j=u[0],l=u[1],d=Object(a.useState)(!1),b=Object(s.a)(d,2),O=(b[0],b[1]),y=Object(a.useState)(""),C=Object(s.a)(y,2),E=(C[0],C[1]);return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(m.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(I.jsxs)(p.a,{children:[Object(I.jsx)(x.a,{children:Object(I.jsx)(f.a,{children:"Login"})}),Object(I.jsx)(x.a,{children:Object(I.jsx)(v.a,{label:"Username",helperText:"Nunca compartir tu nombre de usuario.",variant:"standard",required:!0,value:c,onChange:function(e){var t=e.target.value;r(t)},InputProps:{startAdornment:Object(I.jsx)(g.a,{position:"start",children:Object(I.jsx)(S.a,{})})}})}),Object(I.jsx)(x.a,{children:Object(I.jsx)(v.a,{label:"Password",helperText:"Nunca compartir tu nombre de contrase\xf1a.",variant:"standard",required:!0,value:j,onChange:function(e){var t=e.target.value;l(t)},InputProps:{startAdornment:Object(I.jsx)(g.a,{position:"start",children:Object(I.jsx)(k.a,{})})}})}),Object(I.jsx)(x.a,{children:Object(I.jsx)(w.a,{onClick:function(t){t.preventDefault(),E(""),O(!1),h.login(c,j).then((function(){e("/schedule"),window.location.reload()}),(function(e){O(!0),E("message"),console.log(e)}))},children:"Login In"})})]})})})},C=function(){return Object(I.jsx)("h1",{children:"Schedule"})},E=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)(!0),r=Object(s.a)(c,2),u=(r[0],r[1]),j=Object(a.useState)(void 0),l=Object(s.a)(j,2),d=(l[0],l[1]);Object(a.useEffect)((function(){var e=h.getCurrentUser();return e&&(d(e),u(e),n(e)),O.on("logout",(function(){b()})),function(){O.remove("logout")}}),[]);var b=function(){h.logout(),d(void 0),u(0),n(0)};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{children:Object(I.jsxs)("nav",{children:[Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/",children:"Home"})}),Object(I.jsx)("li",{children:Object(I.jsx)(o.b,{to:"/schedule",children:"schedule"})})]})}),Object(I.jsx)("div",{children:Object(I.jsxs)(i.c,{children:[Object(I.jsx)(i.a,{exact:!0,path:"/",element:Object(I.jsx)(y,{})}),Object(I.jsx)(i.a,{exact:!0,path:"/schedule",element:Object(I.jsx)(C,{})})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.defaults.baseURL="https://enigmatic-sea-26384.herokuapp.com/api",r.a.render(Object(I.jsx)(o.a,{children:Object(I.jsx)(E,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[109,1,2]]]);
//# sourceMappingURL=main.28ed1eb5.chunk.js.map