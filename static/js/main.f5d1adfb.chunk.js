(this.webpackJsonpbottompoker=this.webpackJsonpbottompoker||[]).push([[0],{20:function(n,e,t){"use strict";t.r(e);var i,o,a,c,r,s,d,b,p,l,u,x,m,f,j,h,g,O,k,y,w,v,z,N=t(2),B=t(1),R=t.n(B),S=t(9),C=t.n(S),G=t(4),E=t(3),P=Object(E.c)(i||(i=Object(N.a)(["\n  0% {\n    opacity: 0;\n    transform: translateY(-30px);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateY(0);\n  }\n"]))),J=t(0),L=E.b.div(o||(o=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 300px;\n"]))),M=E.b.h1(a||(a=Object(N.a)(["\n  font-size: 72px;\n  font-weight: 300;\n  font-family: 'Bebas Neue', cursive;\n  color: #222;\n  text-shadow: 2px 2px 1px gray;\n  animation: "," 1s ease-in-out;\n  @media screen and (max-width: 420px) {\n    font-size: 64px;\n    text-shadow: 1px 1px 1px gray;\n  }\n"])),P),D=E.b.h1(c||(c=Object(N.a)(["\n  font-size: 48px;\n  font-weight: 300;\n  font-family: 'Bebas Neue', cursive;\n  color: #555;\n  text-shadow: 2px 2px 1px gray;\n  animation: "," 1s ease-in-out;\n  @media screen and (max-width: 420px) {\n    font-size: 24px;\n    text-shadow: 1px 1px 1px gray;\n  }\n"])),P),F=function(){return Object(J.jsxs)(L,{children:[Object(J.jsx)(M,{children:"BRP"}),Object(J.jsx)(D,{children:"Bottom Random Pokers"})]})},H=Object(E.c)(r||(r=Object(N.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 50%;\n  }\n"]))),K=Object(E.c)(s||(s=Object(N.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),Y=Object(E.c)(d||(d=Object(N.a)(["\n  0% {\n    opacity: 0;\n  }\n  60% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 65%;\n  }\n"]))),A=E.b.div(b||(b=Object(N.a)(["\n  height: ","rem;\n"])),(function(n){return n.size})),I=Object(E.c)(p||(p=Object(N.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 100%;\n  }\n"]))),T=E.b.div(l||(l=Object(N.a)(["\n  width: 420px;\n  height: 420px;\n  background-color: #fff;\n  border-radius: 30px;\n  box-shadow: 1px 1px 7px gray;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n  position: relative;\n  cursor: pointer;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: calc(-1 * 2px);\n    left: calc(-1 * 2px);\n    height: calc(100% + 2px * 2);\n    width: calc(100% + 2px * 2);\n    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);\n    border-radius: calc(2 * 17px);\n    z-index: -1;\n    opacity: 18%;\n    animation: "," 3s ease alternate infinite;\n    background-size: 300% 300%;\n  }\n"])),K),q=E.b.span(u||(u=Object(N.a)(["\n  display: block;\n  font-family: 'Bebas Neue', cursive;\n  font-weight: bold;\n  font-size: 24px;\n  color: #555;\n  text-shadow: 1px 1px 1px gray;\n  animation: "," 1s ease-in;\n"])),I),Q=E.b.span(x||(x=Object(N.a)(["\n  font-family: 'Bebas Neue', cursive;\n  font-size: 52px;\n  animation: "," 1s;\n"])),I),U=E.b.span(m||(m=Object(N.a)(["\n  color: ",";\n  text-shadow: 2px 2px 5px #ccc;\n"])),(function(n){return n.kind})),V=function(){var n=Object(B.useState)([{num:1,kind:"spade"},{num:2,kind:"spade"},{num:3,kind:"spade"},{num:4,kind:"spade"},{num:5,kind:"spade"},{num:6,kind:"spade"},{num:7,kind:"spade"},{num:1,kind:"heart"},{num:2,kind:"heart"},{num:3,kind:"heart"},{num:4,kind:"heart"},{num:5,kind:"heart"},{num:6,kind:"heart"},{num:7,kind:"heart"},{num:1,kind:"diamond"},{num:2,kind:"diamond"},{num:3,kind:"diamond"},{num:4,kind:"diamond"},{num:5,kind:"diamond"},{num:6,kind:"diamond"},{num:7,kind:"diamond"},{num:1,kind:"clover"},{num:2,kind:"clover"},{num:3,kind:"clover"},{num:4,kind:"clover"},{num:5,kind:"clover"},{num:6,kind:"clover"},{num:7,kind:"clover"}]),e=Object(G.a)(n,2),t=e[0],i=e[1],o=Object(B.useState)(void 0),a=Object(G.a)(o,2),c=a[0],r=a[1],s=function(){t.length<=0?alert("\ub0a8\uc740 \uce74\ub4dc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4!"):(r(Math.floor(Math.random()*(t.length-1))),i(t.filter((function(n,e){return e!==c}))))},d=function(n){return"diamond"===n.kind?"cornflowerblue":"clover"===n.kind?"forestgreen":"heart"===n.kind?"salmon":"#444"};return Object(B.useEffect)((function(){var n=function(n){" "===n.key&&(n.preventDefault(),s())};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[t]),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(T,{onClick:s,children:t.length<=0?Object(J.jsx)(Q,{children:"Press F5!"}):void 0===c?Object(J.jsx)(Q,{children:"Click!"}):Object(J.jsxs)(Q,{children:[Object(J.jsx)(U,{kind:d(t[c]),children:t[c].kind})," : ",Object(J.jsx)(U,{kind:"spade",children:t[c].num})]})}),Object(J.jsx)(A,{size:1.3}),Object(J.jsxs)(q,{children:["Left Card = ",t.length]})]})},W=E.b.footer(f||(f=Object(N.a)(["\n  min-height: 100px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),X=E.b.p(j||(j=Object(N.a)(["\n  font-family: 'Nanum Gothic', sans-serif;\n  color: #555;\n  opacity: 60%;\n  font-weight: bold;\n"]))),Z=E.b.span(h||(h=Object(N.a)(["\n  font-size: 14px;\n"]))),$=E.b.a(g||(g=Object(N.a)(["\n  text-decoration: none;\n  color: #222;\n  font-size: 32px;\n\tfont-weight: bold;\n  opacity: 70%;\n  padding-bottom: .3rem;\n  border-bottom: 5px solid rgba(34,34,34,0.8);\n  display: block;\n"]))),_=function(){return Object(J.jsxs)(W,{children:[Object(J.jsxs)(X,{children:["\xa9 2021. ",Object(J.jsx)(Z,{children:"DongJin Han / Bottom Training Random Pokers"})," All Rights Reserved."]}),Object(J.jsx)(A,{size:7}),Object(J.jsx)($,{href:"https://github.com/arkc1009",children:"GitHub"}),Object(J.jsx)(A,{size:7})]})},nn=E.b.div(O||(O=Object(N.a)(["\n  position: relative;\n  padding-top: 2rem;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),en=E.b.button(k||(k=Object(N.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: #777;\n  outline: none;\n  margin-top: -4rem;\n  border: none;\n  box-shadow: 1px 1px 3px black;\n  opacity: 65%;\n  font-weight: bold;\n  color: #ccc;\n  cursor: pointer;\n  animation: "," 1s ease-in-out;\n"])),Y),tn=E.b.div(y||(y=Object(N.a)(["\n  position: absolute;\n  width: 700px;\n  height: 50px;\n  left: 50%;\n  top: 5%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  box-shadow: 2px 2px 2px gray;\n  opacity: 70%;\n  z-index: 10;\n  padding: 1.8rem;\n  border-radius: 30px;\n  display: ",";\n  align-items: center;\n  justify-content: space-around;\n  animation: "," 1s;\n"])),(function(n){return n.v?"flex":"none"}),H),on=E.b.p(w||(w=Object(N.a)(["\n  color: black;\n  opacity: 80%;\n  font-family: 'Nanum Gothic', sans-serif;\n  font-weight: 1000;\n  font-size: 18px;\n"]))),an=E.b.button(v||(v=Object(N.a)(["\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #fff;\n  opacity: 100%;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  border: none;\n  box-shadow: 1px 1px 5px black;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: calc(-1 * 2px);\n    left: calc(-1 * 2px);\n    height: calc(100% + 2px * 2);\n    width: calc(100% + 2px * 2);\n    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);\n    border-radius: calc(2 * 50%);\n    z-index: -1;\n    animation: "," 3s ease alternate infinite;\n    background-size: 300% 300%;\n  }\n"])),K),cn=function(){var n=Object(B.useState)(!1),e=Object(G.a)(n,2),t=e[0],i=e[1];return Object(J.jsxs)(nn,{children:[Object(J.jsx)(F,{}),Object(J.jsx)(en,{onClick:function(){i(!0)},children:"?"}),Object(J.jsx)(A,{size:3}),Object(J.jsx)(V,{}),Object(J.jsxs)(tn,{v:t,children:[Object(J.jsx)(on,{children:"\ud558\ud2b8, \ud074\ub85c\ubc84 = \uc2a4\ucffc\ud2b8 / \ub2e4\uc774\uc544 = \uc67c\ubc1c \ub7f0\uc9c0 / \uc2a4\ud398\uc774\ub4dc = \uc624\ub978\ubc1c \ub7f0\uc9c0"}),Object(J.jsx)(an,{onClick:function(){i(!1)}})]}),Object(J.jsx)(A,{size:3}),Object(J.jsx)(_,{})]})},rn=Object(E.a)(z||(z=Object(N.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+KR:wght@100;300&display=swap');\n  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');\n\n  body {\n    background-color: #e5e5e5;\n    font-family: 'Bebas Neue', cursive;\n    font-family: 'Noto Sans KR', sans-serif;\n    font-family: 'Nanum Gothic', sans-serif;\n  }\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"])));C.a.render(Object(J.jsxs)(R.a.StrictMode,{children:[Object(J.jsx)(cn,{}),Object(J.jsx)(rn,{})]}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.f5d1adfb.chunk.js.map