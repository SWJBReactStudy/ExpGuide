(this.webpackJsonpbottompoker=this.webpackJsonpbottompoker||[]).push([[0],{20:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var i,a,o,c,r,d,s,p,b,l,x,u,h,m,j,f,k,O,g,y,w,v,z=t(1),B=t.n(z),C=t(9),N=t.n(C),R=t(4),E=t(2),P=t(3),S=Object(P.b)(i||(i=Object(E.a)(["\n  0% {\n    opacity: 0;\n    transform: translateY(-30px);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateY(0);\n  }\n"]))),G=t(0),J=P.a.div(a||(a=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 300px;\n"]))),L=P.a.h1(o||(o=Object(E.a)(["\n  font-size: 72px;\n  font-weight: 300;\n  font-family: 'Bebas Neue', cursive;\n  color: #222;\n  text-shadow: 2px 2px 1px gray;\n  animation: "," 1s ease-in-out;\n  @media screen and (max-width: 420px) {\n    font-size: 64px;\n    text-shadow: 1px 1px 1px gray;\n  }\n"])),S),M=P.a.h1(c||(c=Object(E.a)(["\n  font-size: 48px;\n  font-weight: 300;\n  font-family: 'Bebas Neue', cursive;\n  color: #555;\n  text-shadow: 2px 2px 1px gray;\n  animation: "," 1s ease-in-out;\n  @media screen and (max-width: 420px) {\n    font-size: 24px;\n    text-shadow: 1px 1px 1px gray;\n  }\n"])),S),D=function(){return Object(G.jsxs)(J,{children:[Object(G.jsx)(L,{children:"BRP"}),Object(G.jsx)(M,{children:"Bottom Random Pokers"})]})},F=Object(P.b)(r||(r=Object(E.a)(["\n  0% {\n    opacity: 0;\n  }\n  60% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 65%;\n  }\n"]))),H=P.a.div(d||(d=Object(E.a)(["\n  height: ","rem;\n"])),(function(n){return n.size})),Y=Object(P.b)(s||(s=Object(E.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 100%;\n  }\n"]))),A=Object(P.b)(p||(p=Object(E.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),I=P.a.div(b||(b=Object(E.a)(["\n  width: 420px;\n  height: 420px;\n  background-color: #fff;\n  border-radius: 30px;\n  box-shadow: 1px 1px 7px gray;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n  position: relative;\n  cursor: pointer;\n\n\t@media screen and (max-width: 420px) {\n\t\twidth: 300px;\n\t\theight: 300px;\n\t}\n\t\n  &:after {\n    content: '';\n    position: absolute;\n    top: calc(-1 * 2px);\n    left: calc(-1 * 2px);\n    height: calc(100% + 2px * 2);\n    width: calc(100% + 2px * 2);\n    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);\n    border-radius: calc(2 * 17px);\n    z-index: -1;\n    opacity: 18%;\n    animation: "," 3s ease alternate infinite;\n    background-size: 300% 300%;\n  }\n"])),A),T=P.a.span(l||(l=Object(E.a)(["\n  display: block;\n  font-family: 'Bebas Neue', cursive;\n  font-weight: bold;\n  font-size: 24px;\n  color: #555;\n  text-shadow: 1px 1px 1px gray;\n  animation: "," 1s ease-in;\n"])),Y),q=P.a.span(x||(x=Object(E.a)(["\n  font-family: 'Bebas Neue', cursive;\n  font-size: 52px;\n  animation: "," 1s;\n  @media screen and (max-width: 420px) {\n    font-size: 42px;\n  }\n"])),Y),K=P.a.span(u||(u=Object(E.a)(["\n  color: ",";\n  text-shadow: 2px 2px 5px #ccc;\n"])),(function(n){return n.kind})),Q=function(){var n=Object(z.useState)([{num:1,kind:"spade"},{num:2,kind:"spade"},{num:3,kind:"spade"},{num:4,kind:"spade"},{num:5,kind:"spade"},{num:6,kind:"spade"},{num:7,kind:"spade"},{num:1,kind:"heart"},{num:2,kind:"heart"},{num:3,kind:"heart"},{num:4,kind:"heart"},{num:5,kind:"heart"},{num:6,kind:"heart"},{num:7,kind:"heart"},{num:1,kind:"diamond"},{num:2,kind:"diamond"},{num:3,kind:"diamond"},{num:4,kind:"diamond"},{num:5,kind:"diamond"},{num:6,kind:"diamond"},{num:7,kind:"diamond"},{num:1,kind:"clover"},{num:2,kind:"clover"},{num:3,kind:"clover"},{num:4,kind:"clover"},{num:5,kind:"clover"},{num:6,kind:"clover"},{num:7,kind:"clover"}]),e=Object(R.a)(n,2),t=e[0],i=e[1],a=Object(z.useState)(void 0),o=Object(R.a)(a,2),c=o[0],r=o[1],d=function(){t.length<=0?alert("\ub0a8\uc740 \uce74\ub4dc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4!"):(r(Math.floor(Math.random()*(t.length-1))),i(t.filter((function(n,e){return e!==c}))))},s=function(n){return"diamond"===n.kind?"cornflowerblue":"clover"===n.kind?"forestgreen":"heart"===n.kind?"salmon":"#444"};return Object(z.useEffect)((function(){var n=function(n){" "===n.key&&(n.preventDefault(),d())};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[t]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(I,{onClick:d,children:t.length<=0?Object(G.jsx)(q,{children:"Press F5!"}):void 0===c?Object(G.jsx)(q,{children:"Click!"}):Object(G.jsxs)(q,{children:[Object(G.jsx)(K,{kind:s(t[c]),children:t[c].kind})," : ",Object(G.jsx)(K,{kind:"spade",children:t[c].num})]})}),Object(G.jsx)(H,{size:1.3}),Object(G.jsxs)(T,{children:["Left Card = ",t.length]})]})},U=P.a.footer(h||(h=Object(E.a)(["\n  min-height: 100px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),V=P.a.p(m||(m=Object(E.a)(["\n  font-family: 'Nanum Gothic', sans-serif;\n  color: #555;\n  opacity: 60%;\n  font-weight: bold;\n\ttext-align: center;\n  @media screen and (max-width: 420px) {\n    font-size: 12px;\n  }\n"]))),W=P.a.span(j||(j=Object(E.a)(["\n  font-size: 14px;\n  @media screen and (max-width: 420px) {\n    font-size: 8px;\n  }\n"]))),X=P.a.a(f||(f=Object(E.a)(["\n  text-decoration: none;\n  color: #222;\n  font-size: 32px;\n  font-weight: bold;\n  opacity: 70%;\n  padding-bottom: .3rem;\n  border-bottom: 5px solid rgba(34, 34, 34, 0.8);\n  display: block;\n"]))),Z=function(){return Object(G.jsxs)(U,{children:[Object(G.jsxs)(V,{children:["\xa9 2021. ",Object(G.jsx)(W,{children:"DongJin Han / Bottom Training Random Pokers"})," All Rights Reserved."]}),Object(G.jsx)(H,{size:7}),Object(G.jsx)(X,{href:"https://github.com/arkc1009",children:"GitHub"}),Object(G.jsx)(H,{size:7})]})},$=Object(P.b)(k||(k=Object(E.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 50%;\n  }\n"]))),_=P.a.div(O||(O=Object(E.a)(["\n  position: absolute;\n  width: 700px;\n  height: 50px;\n  left: 50%;\n  top: 5%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  box-shadow: 2px 2px 2px gray;\n  opacity: 70%;\n  z-index: 10;\n  padding: 1.8rem;\n  border-radius: 30px;\n  display: ",";\n  align-items: center;\n  justify-content: space-around;\n  animation: "," 1s;\n"])),(function(n){return n.v?"flex":"none"}),$),nn=P.a.p(g||(g=Object(E.a)(['\n  color: black;\n  opacity: 80%;\n  font-family: "Nanum Gothic", sans-serif;\n  font-weight: 1000;\n  font-size: 18px;\n']))),en=P.a.button(y||(y=Object(E.a)(['\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #fff;\n  opacity: 100%;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  border: none;\n  box-shadow: 1px 1px 5px black;\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: calc(-1 * 2px);\n    left: calc(-1 * 2px);\n    height: calc(100% + 2px * 2);\n    width: calc(100% + 2px * 2);\n    background: linear-gradient(\n      60deg,\n      #f79533,\n      #f37055,\n      #ef4e7b,\n      #a166ab,\n      #5073b8,\n      #1098ad,\n      #07b39b,\n      #6fba82\n    );\n    border-radius: calc(2 * 50%);\n    z-index: -1;\n    animation: '," 3s ease alternate infinite;\n    background-size: 300% 300%;\n  }\n"])),A),tn=function(n){var e=n.v,t=n.handleCloseBtnClick;return Object(G.jsxs)(_,{v:e,children:[Object(G.jsx)(nn,{children:"\ud558\ud2b8, \ud074\ub85c\ubc84 = \uc2a4\ucffc\ud2b8 / \ub2e4\uc774\uc544 = \uc67c\ubc1c \ub7f0\uc9c0 / \uc2a4\ud398\uc774\ub4dc = \uc624\ub978\ubc1c \ub7f0\uc9c0"}),Object(G.jsx)(en,{onClick:t})]})},an=P.a.div(w||(w=Object(E.a)(["\n  position: relative;\n  padding-top: 2rem;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),on=P.a.button(v||(v=Object(E.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: #777;\n  outline: none;\n  margin-top: -4rem;\n  border: none;\n  box-shadow: 1px 1px 3px black;\n  opacity: 65%;\n  font-weight: bold;\n  color: #ccc;\n  cursor: pointer;\n  animation: "," 1s ease-in-out;\n"])),F),cn=function(){var n=Object(z.useState)(!1),e=Object(R.a)(n,2),t=e[0],i=e[1];return Object(G.jsxs)(an,{children:[Object(G.jsx)(D,{}),Object(G.jsx)(on,{onClick:function(){i(!0)},children:"?"}),Object(G.jsx)(H,{size:3}),Object(G.jsx)(Q,{}),Object(G.jsx)(H,{size:3}),Object(G.jsx)(Z,{}),Object(G.jsx)(tn,{v:t,handleCloseBtnClick:function(){i(!1)}})]})};t(20);N.a.render(Object(G.jsx)(B.a.StrictMode,{children:Object(G.jsx)(cn,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.19a5dac1.chunk.js.map