(this["webpackJsonptragic-magic"]=this["webpackJsonptragic-magic"]||[]).push([[0],{139:function(e,t,c){},145:function(e,t,c){},146:function(e,t,c){},147:function(e,t,c){},151:function(e,t,c){},152:function(e,t,c){},153:function(e,t,c){},154:function(e,t,c){},155:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(20),s=c.n(r),i=c(33),o=c(22),d=c(102),j=c.n(d);function l(){var e=Object(n.useState)(window.innerWidth<720),t=Object(o.a)(e,2),c=t[0],a=t[1],r=function(){window.innerWidth<720?a(!0):a(!1)};return Object(n.useEffect)((function(){window.addEventListener("resize",r)}),[]),c}var u=c(5),b=Object(n.createContext)(),h=function(){return Object(n.useContext)(b)};function O(e){var t=e.children,c=Object(n.useState)(""),a=Object(o.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(4),d=Object(o.a)(i,2),j=d[0],l=d[1],h=function(){s(""),l(4)};return Object(u.jsx)(b.Provider,{value:{spreadCount:j,question:r,setSpreadCount:l,setQuestion:s,resetReading:h},children:t})}var m=function(){return"/about"},f=function(){return"/deck"},x=function(){return"/"},p=function(){return"/reading"};c(139);function v(){var e=l(),t=h().resetReading,c=a.a.useState(!1),n=Object(o.a)(c,2),r=n[0],s=n[1],d=function(){return s((function(e){return!e}))},b=function(){window.location.pathname!==x()&&t()},O=function(){return Object(u.jsxs)("nav",{onClick:d,children:[!e&&Object(u.jsx)(i.b,{className:"nav-item app-name",to:x(),onClick:b,children:"Tragic Magic"}),Object(u.jsxs)("div",{className:"nav-items",children:[Object(u.jsx)(i.b,{className:"nav-item",to:x(),onClick:b,children:"Home"}),Object(u.jsx)(i.b,{className:"nav-item",to:m(),children:"About"}),Object(u.jsx)(i.b,{className:"nav-item",to:f(),children:"Deck"})]})]})};return e?Object(u.jsxs)(u.Fragment,{children:[r&&Object(u.jsx)("div",{className:"underlay",onClick:d}),Object(u.jsxs)("div",{className:"mobile-nav-container",children:[Object(u.jsx)("div",{className:"nav-item app-name",children:Object(u.jsx)(i.b,{to:x(),onClick:b,children:"Tragic Magic"})}),Object(u.jsx)(j.a,{active:r,type:"squeeze",onClick:d})]}),r&&O()]}):O()}var g=c(18);c(145);function N(){return Object(u.jsxs)("div",{className:"about",children:[Object(u.jsxs)("div",{children:["Created by"," ",Object(u.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.carlageglio.com/",children:"Carla Geglio"}),"."]}),Object(u.jsx)("div",{children:"Just for fun."})]})}var k=c.p+"static/media/stillLooking.0de6a3de.png";c(146);function C(){return Object(u.jsx)("div",{className:"loading",children:Object(u.jsx)("img",{className:"heartbeat",src:k,alt:"An eye with the words 'Still Looking'"})})}var w=c(157),S=c(159),E=c.p+"static/media/card-back-01.778706b2.png";c(147);function y(e){var t=e.card,c=l(),a=Object(n.useState)(!1),r=Object(o.a)(a,2),s=r[0],i=r[1],d=t.name,j=t.name_short,b=t.meaning_up,h=t.desc,O="".concat("/tragic-magic","/cardAssets/").concat(j,".jpg"),m=Object(u.jsxs)("div",{className:"card-back-details",children:[Object(u.jsx)("div",{className:"card-name",children:d}),Object(u.jsx)("div",{className:"card-category",children:"Meaning:"}),Object(u.jsx)("div",{className:"card-description",children:b}),Object(u.jsx)("div",{className:"card-category",children:"Description:"}),Object(u.jsx)("div",{className:"card-description",children:h})]});return Object(u.jsx)("article",{className:"flip-card fade-in",children:Object(u.jsxs)("div",{className:"flip-card-inner",children:[Object(u.jsx)("div",{className:"flip-card-back",children:c?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{onClick:function(){return i(!0)},children:Object(u.jsx)(w.a,{preview:!1,src:O,alt:d})}),Object(u.jsx)(S.a,{visible:s,footer:null,onCancel:function(){return i(!1)},children:m})]}):Object(u.jsx)(w.a,{preview:{mask:m,maskClassName:"customize-mask"},src:O,alt:d})}),Object(u.jsx)("img",{src:E,alt:"Tarot card back",className:"flip-card-front"})]})})}c(151);function q(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){return fetch("https://rws-cards-api.herokuapp.com/api/v1/cards").then((function(e){if(!e.ok)throw Error("Error fetching cards");return e.json()})).then((function(e){return a(e.cards)})).catch((function(e){return console.log(e)})),a([])}),[]);return Object(u.jsx)("section",{className:"deck",children:c.length?Object(u.jsx)("div",{className:"deck-cards",children:c.map((function(e,t){return Object(u.jsx)("div",{className:"card-container",children:Object(u.jsx)(y,{card:e,number:t})},e.name_short+e.name_short)}))}):Object(u.jsx)(C,{})})}var A=c(50);c(152);function _(){var e=l(),t=h(),c=t.question,n=t.spreadCount,r=t.resetReading,s=a.a.useState([]),d=Object(o.a)(s,2),j=d[0],b=d[1],O=a.a.useState(""),m=Object(o.a)(O,2),f=m[0],p=m[1],v=a.a.useState(!1),g=Object(o.a)(v,2),N=g[0],k=g[1],w=function(){fetch("https://api.quotable.io/random").then((function(e){if(!e.ok)throw Error("Error fetching fortune");return e.json()})).then((function(e){return p(e.content)})).catch((function(e){return console.log(e)}))};a.a.useEffect((function(){return function(e){var t="https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=".concat(e);return fetch(t).then((function(e){if(!e.ok)throw Error("Error fetching cards");return e.json()}))}(n).then((function(e){return b(e.cards)})).then((function(){return w()})).then((function(){return k(!1)})).catch((function(e){return console.log(e)})),b([])}),[]);var S=function(){return Object(u.jsx)("section",{className:"reading-details",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"question",children:c}),Object(u.jsx)("h2",{className:"fortune",children:f})]})})};return N||!j.length?Object(u.jsx)(C,{}):Object(u.jsxs)("section",{className:"card-container fade-in",children:[e&&S(),Object(u.jsx)("section",{className:"cards",children:j.length>0&&j.map((function(e){return Object(u.jsx)(y,{card:e},e.name_short+e.value)}))}),!e&&S(),Object(u.jsx)(i.b,{to:x(),children:Object(u.jsx)(A.a,{onClick:r,className:"back-btn",children:"Ask Another Question"})})]})}var T=c(158),F=c(160),L=c.p+"static/media/golden.46b3a008.png",M=c.p+"static/media/crystal.da2cdc9f.png",R=(c(153),T.a.Option);var z=Object(g.g)((function(e){var t=e.history,c=h(),n=c.question,r=c.setQuestion,s=c.setSpreadCount,i=a.a.useState(""),d=Object(o.a)(i,2),j=d[0],l=d[1];return Object(u.jsx)("div",{className:"reading-starter-container",children:Object(u.jsxs)("div",{className:"reading-starter fade-in",children:[Object(u.jsx)("img",{src:L,alt:"The Future Is Golden",className:"golden-text"}),Object(u.jsxs)("div",{className:"reading-starter-circle",children:[Object(u.jsx)("img",{src:M,className:"crystal"}),Object(u.jsx)("div",{className:"circle"}),Object(u.jsxs)("div",{className:"inner-circle-content",children:[Object(u.jsxs)(T.a,{onChange:function(e){s(e)},placeholder:"Select a spread",defaultValue:4,dropdownClassName:"spread-dropdown",children:[Object(u.jsx)(R,{value:4,children:"4 Card Spread"}),Object(u.jsx)(R,{value:3,children:"3 Card Spread"}),Object(u.jsx)(R,{value:1,children:"1 Card Spread"})]}),Object(u.jsx)(F.a,{placeholder:"Enter a question...",maxLength:55,value:n,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)(A.a,{className:"ask-btn",onClick:function(){return n?t.push(p()):l("Please enter a question.")},children:"ASK THE CARDS"}),Object(u.jsx)("div",{className:"error-message",children:j})]})]})]})})}));function D(){return Object(u.jsxs)(g.d,{children:[Object(u.jsx)(g.b,{path:m(),component:N}),Object(u.jsx)(g.b,{path:f(),component:q}),Object(u.jsx)(g.b,{path:p(),component:_}),Object(u.jsx)(g.b,{exact:!0,path:x(),component:z}),Object(u.jsx)(g.a,{to:x()})]})}function J(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(O,{children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsx)(D,{})]})})})}c(154);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(i.a,{basename:"/tragic-magic",children:Object(u.jsx)(J,{})})}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.651cddbe.chunk.js.map