(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,n,a){e.exports=a(64)},39:function(e,n,a){},64:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(23),c=a.n(o);a(39);var l=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("a",{href:"/",className:"navbar-brand"},r.a.createElement("h3",{className:"display-4"},"Google Books")),r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/Search",className:"nav-link active"},"Search")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/Saved",className:"nav-link active"},"Saved")))))};var i=function(){return r.a.createElement("div",{className:"jumbotron text-center border"},r.a.createElement("h1",null,"(React) Google Books Search"),r.a.createElement("h3",null,"Search for and Save books of Interest"))},s=a(29),u=a(7),m=a(24),h=a(25),d=a(26),f=a(32),v=a(27),E=a(33),b=function(e){return r.a.createElement("div",{className:"border form-group"},r.a.createElement("form",{className:"text-center"},r.a.createElement("label",{htmlFor:"bookSearch"},"Search"),r.a.createElement("input",{name:"bookSearch",className:"form-control container",onChange:e.handleInputChange}),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:e.handleSubmit},"Search!")))},g=a(28),p=a.n(g),k={searchBooks:function(e){return p.a.get("/api/booksearch/"+e)}},w=function(e){function n(){var e,a;Object(h.a)(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(v.a)(n)).call.apply(e,[this].concat(r)))).state={bookSearch:""},a.handleInputChange=function(e){var n=e.target,t=n.name,r=n.value;a.setState(Object(m.a)({},t,r))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.bookSearch),k.searchBooks(a.state.bookSearch).then(function(e){console.log(e)})},a}return Object(E.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"border"},r.a.createElement("h3",null,"Book Search"),r.a.createElement(b,{handleInputChange:this.handleInputChange,handleSubmit:this.handleSubmit}))}}]),n}(t.Component);var S=function(){return r.a.createElement("div",null,r.a.createElement(w,null))};var N=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Saved"))};var j=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(l,null),r.a.createElement(i,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:S}),r.a.createElement(u.a,{exact:!0,path:"/search",component:S}),r.a.createElement(u.a,{exact:!0,path:"/saved",component:N}))))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");y?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):C(e)})}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.a10fb0e6.chunk.js.map