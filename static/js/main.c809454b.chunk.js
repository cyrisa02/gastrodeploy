(this["webpackJsonpreact-showcase"]=this["webpackJsonpreact-showcase"]||[]).push([[0],{24:function(e,a,t){e.exports=t(46)},29:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(19),c=t.n(r),s=(t(29),t(2)),i=t(4),m=function(e){return n.a.createElement("div",{className:"scroll-bottom"},n.a.createElement("div",{className:"sb-main"},e.left&&n.a.createElement(i.b,{to:e.left,className:"left hover"},n.a.createElement("span",null,"\u276c")),n.a.createElement("p",{className:"center"},"switch"),e.right&&n.a.createElement(i.b,{to:e.right,className:"right hover"},n.a.createElement("span",null,"\u276d"))))},o=function(){return n.a.createElement("span",{className:"logo"},"Gastronome.fr")},u=function(){return n.a.createElement("div",{className:"navigation"},n.a.createElement("ul",null,n.a.createElement(i.b,{to:"/",exact:!0,className:"hover",activeClassName:"nav-active"},n.a.createElement("li",null,"Accueil")),n.a.createElement(i.b,{to:"/applepie",exact:!0,className:"hover",activeClassName:"nav-active"},n.a.createElement("li",null,"Tarte aux pommes")),n.a.createElement(i.b,{to:"/strawberrypie",exact:!0,className:"hover",activeClassName:"nav-active"},n.a.createElement("li",null,"Tarte aux fraises")),n.a.createElement(i.b,{to:"/lemonpie",exact:!0,className:"hover",activeClassName:"nav-active"},n.a.createElement("li",null,"Tarte aux citrons")),n.a.createElement(i.b,{to:"/isopicture",exact:!0,className:"hover",activeClassName:"nav-active"},n.a.createElement("li",null,"En r\xe9sum\xe9")),n.a.createElement(i.b,{to:"/pricingtable",exact:!0,className:"hover",activeClassName:"nav-active"},n.a.createElement("li",null,"Tarifs")),n.a.createElement(i.b,{to:"/contact",exact:!0,className:"hover",activeClassName:"nav-active"},n.a.createElement("li",null,"Contact"))))},d=t(8),E=function(){return Object(l.useEffect)((function(){window.addEventListener("mousemove",(function(e){document.querySelector(".cursor").style.top=e.pageY+"px",document.querySelector(".cursor").style.left=e.pageX+"px"}));var e=function(){document.querySelector(".cursor").classList.add("hovered")},a=function(){document.querySelector(".cursor").style.transition=".3s ease-out",document.querySelector(".cursor").classList.remove("hovered")};document.querySelectorAll(".hover").forEach((function(t){t.addEventListener("mouseover",e),t.addEventListener("mouseleave",a)}))}),[]),n.a.createElement("span",{className:"cursor"})},p=function(){var e=Math.floor(200*Math.random()+700)+"px",a=Math.floor(200*Math.random()+150)+"px",t="scale("+(Math.random()+.7)+")";return n.a.createElement("main",null,n.a.createElement(u,null),n.a.createElement(o,null),n.a.createElement(E,null),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"laCarte"},n.a.createElement("div",{className:"carte"},n.a.createElement("div",{className:"divImg"}),n.a.createElement("div",{className:"titre"},"Tartes aux pommes"),n.a.createElement("div",{className:"tab min"},n.a.createElement("div",null,n.a.createElement(d.a,{icon:"hourglass"})),n.a.createElement("span",null,"20")),n.a.createElement("div",{className:"tab ing"},n.a.createElement(d.a,{icon:"list"}),n.a.createElement("span",null,"8")),n.a.createElement("div",{className:"tab pers"},n.a.createElement(d.a,{icon:"user"}),n.a.createElement("span",null,"4")),n.a.createElement("div",{className:"info"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati sapiente odio laborum quasi repudiandae odit et id velit aspernatur.")),n.a.createElement("div",{className:"derriere"},n.a.createElement("div",{className:"divImg2"}),n.a.createElement("div",{className:"btnSection"},n.a.createElement("a",{href:"#"},"La recette")),n.a.createElement(m,{left:"/",right:"/strawberrypie"}))),n.a.createElement("span",{className:"random-circle",style:{left:e,top:a,transform:t}})))},v=function(){var e=["gourmand","clear","smart","delicious"],a=0,t=0;return Object(l.useEffect)((function(){var l=document.getElementById("text-target");!function n(){setTimeout((function(){a>=e.length?(a=0,t=0,n()):t<e[a].length?(!function(){var n=document.createElement("span");l.appendChild(n),n.classList.add("letter"),n.style.opacity="0",n.style.animation="anim 5s ease forwards",n.textContent=e[a][t],setTimeout((function(){n.remove()}),3e3)}(),t++,n()):(t=0,a++,setTimeout((function(){n()}),3e3))}),80)}()}),[]),n.a.createElement("span",{className:"dynamic-text"},n.a.createElement("span",{className:"simply"},"simply"),n.a.createElement("span",{id:"text-target"}))},N=t(13),g=function(){return n.a.createElement("main",null,n.a.createElement(E,null),n.a.createElement("div",{className:"home"},n.a.createElement(u,null),n.a.createElement(o,null),n.a.createElement("div",{className:"home-main"},n.a.createElement("div",{className:"main-content"},n.a.createElement(N.a.h1,{drag:!0,onDragEnd:!0},"Gastronomie Fran\xe7aise"),n.a.createElement(N.a.h2,{drag:!0,onDragEnd:!0},n.a.createElement(v,null)))),n.a.createElement(m,{right:"/applepie"})))},h=function(){return n.a.createElement("div",null,"Errreur 404")},f=function(){return n.a.createElement("main",null,n.a.createElement(E,null),n.a.createElement(u,null),n.a.createElement(o,null),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"laCarte"},n.a.createElement("div",{className:"carte"},n.a.createElement("div",{className:"divImgf"}),n.a.createElement("div",{className:"titre"},"Tartes aux fraises"),n.a.createElement("div",{className:"tab min"},n.a.createElement("div",null,n.a.createElement(d.a,{icon:"hourglass"})),n.a.createElement("span",null,"20")),n.a.createElement("div",{className:"tab ing"},n.a.createElement(d.a,{icon:"list"}),n.a.createElement("span",null,"8")),n.a.createElement("div",{className:"tab pers"},n.a.createElement(d.a,{icon:"user"}),n.a.createElement("span",null,"4")),n.a.createElement("div",{className:"info"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati sapiente odio laborum quasi repudiandae odit et id velit aspernatur.")),n.a.createElement("div",{className:"derriere"},n.a.createElement("div",{className:"divImg2f"}),n.a.createElement("div",{className:"btnSection"},n.a.createElement("a",{href:"#"},"La recette")),n.a.createElement(m,{left:"/applepie",right:"/lemonpie"})))))},b=function(){return n.a.createElement("main",null,n.a.createElement(u,null),n.a.createElement(o,null),n.a.createElement(E,null),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"laCarte"},n.a.createElement("div",{className:"carte"},n.a.createElement("div",{className:"divImgc"}),n.a.createElement("div",{className:"titre"},"Tartes aux citrons"),n.a.createElement("div",{className:"tab min"},n.a.createElement("div",null,n.a.createElement(d.a,{icon:"hourglass"})),n.a.createElement("span",null,"20")),n.a.createElement("div",{className:"tab ing"},n.a.createElement(d.a,{icon:"list"}),n.a.createElement("span",null,"8")),n.a.createElement("div",{className:"tab pers"},n.a.createElement(d.a,{icon:"user"}),n.a.createElement("span",null,"4")),n.a.createElement("div",{className:"info"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati sapiente odio laborum quasi repudiandae odit et id velit aspernatur.")),n.a.createElement("div",{className:"derriere"},n.a.createElement("div",{className:"divImg2c"}),n.a.createElement("div",{className:"btnSection"},n.a.createElement("a",{href:"#"},"La recette")),n.a.createElement(m,{left:"/strawberrypie",right:"/isopicture"})))))},y=function(){Math.floor(200*Math.random()+700),Math.floor(200*Math.random()+150),Math.random();return n.a.createElement("main",null,n.a.createElement(E,null),n.a.createElement("div",{className:"main"},n.a.createElement("ul",{className:"uls2"},n.a.createElement("li",{className:"lis2"},"E"),n.a.createElement("li",{className:"lis2"},"X"),n.a.createElement("li",{className:"lis2"},"P"),n.a.createElement("li",{className:"lis2"},"E"),n.a.createElement("li",{className:"lis2"},"R"),n.a.createElement("li",{className:"lis2"},"I"),n.a.createElement("li",{className:"lis2"},"E"),n.a.createElement("li",{className:"lis2"},"N"),n.a.createElement("li",{className:"lis2"},"C"),n.a.createElement("li",{className:"lis2"},"E")),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati sapiente odio laborum quasi repudiandae odit et id velit aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati sapiente odio laborum quasi repudiandae odit et id velit aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati sapiente odio laborum quasi repudiandae odit et id velit aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati sapiente odio laborum quasi repudiandae odit et id velit aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati sapiente odio laborum quasi repudiandae odit et id velit aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati sapiente odio laborum quasi repudiandae odit et id velit aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati sapiente odio laborum quasi repudiandae odit et id velit aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa obcaecati sapiente odio laborum quasi repudiandae odit et id velit aspernatur."),n.a.createElement("h1",{className:"gastro"},"Gastronome.fr"),n.a.createElement("a",{href:"./",className:"lien"},"D\xe9couvrir..."),n.a.createElement("div",{className:"block b1"},n.a.createElement("img",{src:"./image/citron.jpeg",alt:"citron"})),n.a.createElement("div",{className:"block b2"},n.a.createElement("img",{src:"./image/fraise.jpeg",alt:"fraise"})),n.a.createElement("div",{className:"block b3"},n.a.createElement("img",{src:"./image/pomme.jpg",alt:"pomme"})),n.a.createElement(m,{left:"/lemonpie",right:"/pricingtable"})))},C=function(){return n.a.createElement("main",null,n.a.createElement(u,null),n.a.createElement(o,null),n.a.createElement(E,null),n.a.createElement("div",{className:"flexContainer"},n.a.createElement("div",{className:"threeCards"},n.a.createElement("div",{className:"header"},n.a.createElement("h2",null,n.a.createElement("span",{className:"spanPrix"},"9.99\u20ac"),"/ tarte"),n.a.createElement("div",{className:"price"},n.a.createElement("h1",null,"Tarte aux Pommes"))),n.a.createElement("div",{className:"details"},"sans sucre"),n.a.createElement("div",{className:"details"},"avec la livraison"),n.a.createElement("div",{className:"details"},"4 parts"),n.a.createElement("div",{className:"details"},"6 parts"),n.a.createElement("div",{className:"btn"},n.a.createElement("a",{href:"#"},"Commander"))),n.a.createElement("div",{className:"threeCards"},n.a.createElement("div",{className:"header"},n.a.createElement("h2",null,n.a.createElement("span",{className:"spanPrix"},"8.99\u20ac"),"/ tarte"),n.a.createElement("div",{className:"price"},n.a.createElement("h1",null,"Tarte aux Fraises"))),n.a.createElement("div",{className:"details"},"sans sucre"),n.a.createElement("div",{className:"details"},"avec la livraison"),n.a.createElement("div",{className:"details"},"4 parts"),n.a.createElement("div",{className:"details"},"6 parts"),n.a.createElement("div",{className:"btn"},n.a.createElement("a",{href:"#"},"Commander"))),n.a.createElement("div",{className:"threeCards"},n.a.createElement("div",{className:"header"},n.a.createElement("h2",null,n.a.createElement("span",{className:"spanPrix"},"7.99\u20ac"),"/ tarte"),n.a.createElement("div",{className:"price"},n.a.createElement("h1",null,"Tarte aux Citrons"))),n.a.createElement("div",{className:"details"},"sans sucre"),n.a.createElement("div",{className:"details"},"avec la livraison"),n.a.createElement("div",{className:"details"},"4 parts"),n.a.createElement("div",{className:"details"},"6 parts"),n.a.createElement("div",{className:"btn"},n.a.createElement("a",{href:"#"},"Commander"))),n.a.createElement(m,{left:"/isopicture",right:"/contact"})))},x=t(17),L=t.n(x),T=t(14),q=t(22),S=t.n(q),M=function(){var e=Object(l.useState)(""),a=Object(T.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(""),s=Object(T.a)(c,2),i=s[0],m=s[1],o=Object(l.useState)(""),u=Object(T.a)(o,2),d=u[0],E=u[1];return n.a.createElement("form",{className:"contact-form"},n.a.createElement("h3",null,"Contactez-moi"),n.a.createElement("div",{className:"form-content"},n.a.createElement("input",{type:"text",id:"name",name:"name",required:!0,onChange:function(e){return r(e.target.value)},placeholder:"nom *",value:t}),n.a.createElement("div",{className:"email-content"},n.a.createElement("label",{id:"not-mail"},"Email non valide"),n.a.createElement("input",{type:"mail",id:"email",name:"email",required:!0,onChange:function(e){return m(e.target.value)},placeholder:"email *",value:i})),n.a.createElement("textarea",{id:"message",name:"message",onChange:function(e){return E(e.target.value)},placeholder:"message *",value:d,required:!0})),n.a.createElement("input",{className:"formButton hover",type:"submit",value:"envoyer",onClick:function(e){return function(e){e.preventDefault();var a=document.getElementById("name"),l=document.getElementById("email"),n=document.getElementById("message"),c=document.querySelector(".formMessage");t&&function(){var e=document.getElementById("not-mail");return i.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)?(e.style.display="none",!0):(e.style.display="block",e.style.animation="dongle 1s",setTimeout((function(){e.style.animation="none"}),1e3),!1)}()&&d?(a.classList.remove("red"),l.classList.remove("red"),n.classList.remove("red"),c.innerHTML="Message en cours d'envoi...",c.style.background="#00c1ec",c.style.opacity="1",S.a.send("service_sr9mzsh","template_nr47kdn",{name:t,email:i,message:d},Object({NODE_ENV:"production",PUBLIC_URL:"/gastrodeploy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_EMAILJS_KEY).then((function(){c.innerHTML="Message envoy\xe9 ! Je vous recontacterai d\xe8s que possible.",document.getElementById("name").classList.remove("error"),document.getElementById("email").classList.remove("error"),document.getElementById("message").classList.remove("error"),r(""),m(""),E(""),setTimeout((function(){c.style.opacity="0"}),5e3)}),(function(e){console.log(e),c.style.background="rgb(253, 87, 87)",c.innerHTML="Une erreur s'est produite, veuillez r\xe9essayer."}))):(c.innerHTML="Merci de remplir correctement les champs requis *",c.style.background="rgb(253, 87, 87)",c.style.opacity="1",t||a.classList.add("error"),i||l.classList.add("error"),d||n.classList.add("error"))}(e)}}),n.a.createElement("div",{className:"formMessage"}))},I=function(){return n.a.createElement("main",null,n.a.createElement(E,null),n.a.createElement("div",{className:"contact"},n.a.createElement(u,null),n.a.createElement(o,null),n.a.createElement(M,null),n.a.createElement("div",{className:"contact-infos"},n.a.createElement("div",{className:"address"},n.a.createElement("div",{className:"content"},n.a.createElement("h4",null,"adresse"),n.a.createElement("p",null,"12 rue du Code"),n.a.createElement("p",null," 33 000 Bordeaux"))),n.a.createElement("div",{className:"phone"},n.a.createElement("div",{className:"content"},n.a.createElement("h4",null,"t\xe9l\xe9phone"),n.a.createElement(L.a,{text:"0642156033",className:"hover"},n.a.createElement("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("T\xe9l\xe9phone copi\xe9!")}},"0642156033")))),n.a.createElement("div",{className:"email"},n.a.createElement("div",{className:"content"},n.a.createElement("h4",null,"email"),n.a.createElement(L.a,{text:"gastronome@gmail.com",className:"hover"},n.a.createElement("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("Email copi\xe9!")}},"gastronome@gmail.com")))),n.a.createElement("div",{className:"credits"},n.a.createElement("p",null,"fromCyrisa02 - 2021")),n.a.createElement("input",{className:"button",type:"button",value:"Envoyer"})),n.a.createElement(m,{left:"/pricingtable"})))},O=t(10),_=t(23),k=t(11);O.b.add(_.a,k.a,k.c,k.e,k.f,k.b,k.d);var j=function(){return n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/",component:g}),n.a.createElement(s.a,{exact:!0,path:"/applepie",component:p}),n.a.createElement(s.a,{exact:!0,path:"/strawberrypie",component:f}),n.a.createElement(s.a,{exact:!0,path:"/lemonpie",component:b}),n.a.createElement(s.a,{exact:!0,path:"/isopicture",component:y}),n.a.createElement(s.a,{exact:!0,path:"/pricingtable",component:C}),n.a.createElement(s.a,{exact:!0,path:"/contact",component:I}),n.a.createElement(s.a,{component:h}))};t(45);c.a.render(n.a.createElement(i.a,null,n.a.createElement(j,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c809454b.chunk.js.map