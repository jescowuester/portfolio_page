(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(57)},31:function(e,a,t){},33:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(21),o=t.n(l),s=(t(31),t(6)),r=t(7),i=t(9),m=t(8),_=t(10),u=(t(33),t(60)),h=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={mouse:{x:0,y:0}},t}return Object(_.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__outline"},c.a.createElement("h1",{className:"home__title"},"Jesco Wuester")),c.a.createElement("div",{className:"home__nav"},c.a.createElement("ul",{className:"home__nav__ul"},c.a.createElement("li",{className:"home__nav__ul__li"},c.a.createElement(u.a,{className:"home__nav__navlink",to:"/about"},"about")),c.a.createElement("li",{className:"home__nav__ul__li"},c.a.createElement(u.a,{className:"home__nav__navlink",to:"/contact"},"contact")))))}}]),a}(n.Component),v=t(61),E=t(58),f=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(_.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"contact__icons"},c.a.createElement("a",{className:"contact__icon",href:"mailto:jescosocial@gmail.com"},c.a.createElement("i",{class:"far fa-envelope"})),c.a.createElement("a",{className:"contact__icon",href:"https://github.com/jescowuester",target:"blank"},c.a.createElement("i",{class:"fab fa-github"})),c.a.createElement("a",{className:"contact__icon",href:"https://www.linkedin.com/in/jescowuester/",target:"blank"},c.a.createElement("i",{class:"fab fa-linkedin-in"})))}}]),a}(n.Component),p=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(_.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"profile"},c.a.createElement("div",{className:"profile__picture"},c.a.createElement("img",{src:"https://media.licdn.com/dms/image/C4D03AQGnpTSD2JoH7g/profile-displayphoto-shrink_200_200/0?e=1553126400&v=beta&t=NcKblKyHd9qjGacA1Nen81vTPGVio2vv21Z4LNi6rpE",alt:"profile"})),c.a.createElement(f,null),c.a.createElement("hr",{className:"profile__hr"}),c.a.createElement("div",{className:"profile__technologies"},c.a.createElement("h1",{className:"profile__section__title"},"Technologies:"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("i",{className:"profile__logo fab fa-react"})," - React"),c.a.createElement("li",null,c.a.createElement("i",{className:"profile__logo fab fa-sass"})," - Sass"),c.a.createElement("li",null,c.a.createElement("span",{className:"profile__logo iconify","data-icon":"simple-icons:redux","data-inline":"false"}),"- Redux"),c.a.createElement("li",null,c.a.createElement("i",{className:"profile__logo fab fa-node-js"})," - NodeJs"))),c.a.createElement("div",{className:"home__nav"},c.a.createElement("ul",{className:"home__nav__ul"},c.a.createElement("li",{className:"home__nav__ul__li"},c.a.createElement(u.a,{className:"home__nav__navlink",to:"/about"},"about")),c.a.createElement("li",{className:"home__nav__ul__li"},c.a.createElement(u.a,{className:"home__nav__navlink",to:"/contact"},"contact")))))}}]),a}(n.Component),b=t(23),d=t(24),N=t.n(d),g=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).submit=function(){var e=t.state,a=e.email,n=e.name,c=e.content;a&&n&&c?(t.setState({submit:!0}),console.log("submitting"),N.a.post("https://mailthis.to/jescosocial@gmail.com",{email:t.state.email,_subject:"contact from ".concat(t.state.name," via jescowuester.com"),message:t.state.content,_after:"http://127.0.0.1:3000/"}).then(function(){window.location.href="https://mailthis.to/confirm"}).catch(function(e){return t.setState({error:e})})):t.setState({error:"please fill in all the fields"})},t.handlechange=function(e,a){t.setState(Object(b.a)({},a,e.target.value)),console.log(t.state)},t.state={submit:!1},t}return Object(_.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,this.state.error&&c.a.createElement("div",{className:"errormessage"},this.state.error),this.state.submit?c.a.createElement("div",{className:"loading"},c.a.createElement("span",{class:"loader"},c.a.createElement("span",{class:"loader-inner"}))):c.a.createElement("div",{className:"contact__outline"},c.a.createElement("input",{onChange:function(a){return e.handlechange(a,"name")},type:"text",placeholder:"name",className:"contact__input contact__name"}),c.a.createElement("input",{onChange:function(a){return e.handlechange(a,"email")},type:"text",placeholder:"email",className:"contact__input contact__email"}),c.a.createElement("textarea",{onChange:function(a){return e.handlechange(a,"content")},placeholder:"content - for highly relevant matters please contact me via emal/linkedin directly",name:"content",id:"",cols:"30",rows:"10",className:"contact__content"}),c.a.createElement("button",{onClick:this.submit,className:"contact__submit"},"submit")),c.a.createElement("div",{className:"contact__nav"},c.a.createElement("ul",{className:"contact__nav__ul"},c.a.createElement("li",{className:"contact__nav__ul__li"},c.a.createElement(u.a,{className:"contact__nav__navlink",to:"/about"},"about")),c.a.createElement("li",{className:"contact__nav__ul__li"},c.a.createElement(u.a,{className:"contact__nav__navlink",to:"/contact"},"contact")))),c.a.createElement(f,null))}}]),a}(n.Component),j=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(_.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v.a,null,c.a.createElement(E.a,{exact:!0,path:"/",component:h}),c.a.createElement(E.a,{path:"/about",component:p}),c.a.createElement(E.a,{path:"/contact",component:g})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=t(59);o.a.render(c.a.createElement(O.a,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.c7f8b757.chunk.js.map