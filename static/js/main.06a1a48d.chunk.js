(this.webpackJsonpbottompoker=this.webpackJsonpbottompoker||[]).push([[0],{20:function(n,e,t){"use strict";t.r(e);var i,a,o,c,r,s,d,p,b,l,u,x,m,f,h,j,g,k,O,y=t(0),w=t.n(y),v=t(9),z=t.n(v),N=t(4),B=t(2),S=t(3),C=Object(S.c)(i||(i=Object(B.a)(["\n  0% {\n    opacity: 0;\n    transform: translateY(-30px);\n  }\n  100% {\n    opacity: 100%;\n    transform: translateY(0);\n  }\n"]))),R=t(1),G=S.b.div(a||(a=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 300px;\n"]))),M=S.b.h1(o||(o=Object(B.a)(["\n  font-size: 72px;\n  font-weight: 300;\n  font-family: 'Bebas Neue', cursive;\n  color: #222;\n  text-shadow: 2px 2px 1px gray;\n  animation: "," 1s ease-in-out;\n  @media screen and (max-width: 420px) {\n    font-size: 64px;\n    text-shadow: 1px 1px 1px gray;\n  }\n"])),C),P=S.b.h1(c||(c=Object(B.a)(["\n  font-size: 48px;\n  font-weight: 300;\n  font-family: 'Bebas Neue', cursive;\n  color: #555;\n  text-shadow: 2px 2px 1px gray;\n  animation: "," 1s ease-in-out;\n  @media screen and (max-width: 420px) {\n    font-size: 24px;\n    text-shadow: 1px 1px 1px gray;\n  }\n"])),C),F=function(){return Object(R.jsxs)(G,{children:[Object(R.jsx)(M,{children:"BRP"}),Object(R.jsx)(P,{children:"Bottom Random Pokers"})]})},J=Object(S.c)(r||(r=Object(B.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 50%;\n  }\n"]))),K=Object(S.c)(s||(s=Object(B.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),Y=Object(S.c)(d||(d=Object(B.a)(["\n  0% {\n    opacity: 0;\n  }\n  60% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 65%;\n  }\n"]))),E=S.b.div(p||(p=Object(B.a)(["\n  height: ","rem;\n"])),(function(n){return n.size})),I=Object(S.c)(b||(b=Object(B.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 100%;\n  }\n"]))),L=S.b.div(l||(l=Object(B.a)(["\n  width: 420px;\n  height: 420px;\n  background-color: #fff;\n  border-radius: 30px;\n  box-shadow: 1px 1px 7px gray;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n  position: relative;\n  cursor: pointer;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: calc(-1 * 3px);\n    left: calc(-1 * 3px);\n    height: calc(100% + 3px * 2);\n    width: calc(100% + 3px * 2);\n    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);\n    border-radius: calc(2 * 17px);\n    z-index: -1;\n    opacity: 25%;\n    animation: "," 3s ease alternate infinite;\n    background-size: 300% 300%;\n  }\n"])),K),q=S.b.span(u||(u=Object(B.a)(["\n  display: block;\n  font-family: 'Bebas Neue', cursive;\n  font-weight: bold;\n  font-size: 24px;\n  color: #555;\n  text-shadow: 1px 1px 1px gray;\n  animation: "," 1s ease-in;\n"])),I),A=S.b.span(x||(x=Object(B.a)(["\n  font-family: 'Bebas Neue', cursive;\n  font-size: 52px;\n  animation: "," 1s;\n"])),I),D=S.b.span(m||(m=Object(B.a)(["\n  color: ",";\n  text-shadow: 2px 2px 5px #ccc;\n"])),(function(n){return n.kind})),H=function(){var n=Object(y.useState)([{num:1,kind:"spade"},{num:2,kind:"spade"},{num:3,kind:"spade"},{num:4,kind:"spade"},{num:5,kind:"spade"},{num:6,kind:"spade"},{num:7,kind:"spade"},{num:1,kind:"heart"},{num:2,kind:"heart"},{num:3,kind:"heart"},{num:4,kind:"heart"},{num:5,kind:"heart"},{num:6,kind:"heart"},{num:7,kind:"heart"},{num:1,kind:"diamond"},{num:2,kind:"diamond"},{num:3,kind:"diamond"},{num:4,kind:"diamond"},{num:5,kind:"diamond"},{num:6,kind:"diamond"},{num:7,kind:"diamond"},{num:1,kind:"clover"},{num:2,kind:"clover"},{num:3,kind:"clover"},{num:4,kind:"clover"},{num:5,kind:"clover"},{num:6,kind:"clover"},{num:7,kind:"clover"}]),e=Object(N.a)(n,2),t=e[0],i=e[1],a=Object(y.useState)(void 0),o=Object(N.a)(a,2),c=o[0],r=o[1],s=function(n){return"diamond"===n.kind?"cornflowerblue":"clover"===n.kind?"forestgreen":"heart"===n.kind?"salmon":"#444"};return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(L,{onClick:function(){t.length<=0?alert("\ub0a8\uc740 \uce74\ub4dc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4!"):(r(Math.floor(Math.random()*(t.length-1))),i(t.filter((function(n,e){return e!==c}))))},children:t.length<=0?Object(R.jsx)(A,{children:"Press F5!"}):void 0===c?Object(R.jsx)(A,{children:"Click!"}):Object(R.jsxs)(A,{children:[Object(R.jsx)(D,{kind:s(t[c]),children:t[c].kind})," : ",Object(R.jsx)(D,{kind:"spade",children:t[c].num})]})}),Object(R.jsx)(E,{size:1.3}),Object(R.jsxs)(q,{children:["Left Card = ",t.length]})]})},Q=Object(S.a)(f||(f=Object(B.a)(["\n  body {\n    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+KR:wght@100;300&display=swap');\n    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');\n    margin: 0;\n    padding: 0;\n    background-color: #e5e5e5;\n    font-family: 'Bebas Neue', cursive;\n    font-family: 'Noto Sans KR', sans-serif;\n    font-family: 'Nanum Gothic', sans-serif;\n  }\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"]))),T=S.b.div(h||(h=Object(B.a)(["\n  position: relative;\n  padding-top: 5rem;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),U=S.b.button(j||(j=Object(B.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background-color: #777;\n  outline: none;\n  margin-top: -4rem;\n  border: none;\n  box-shadow: 1px 1px 3px black;\n  opacity: 65%;\n  font-weight: bold;\n  color: #ccc;\n  cursor: pointer;\n  animation: "," 1s ease-in-out;\n"])),Y),V=S.b.div(g||(g=Object(B.a)(["\n  position: absolute;\n  width: 700px;\n  height: 50px;\n  left: 50%;\n  top: 9%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  box-shadow: 2px 2px 2px gray;\n  opacity: 70%;\n  z-index: 10;\n  padding: 1.8rem;\n  border-radius: 30px;\n  display: ",";\n  align-items: center;\n  justify-content: space-around;\n  animation: "," 1s;\n"])),(function(n){return n.v?"flex":"none"}),J),W=S.b.p(k||(k=Object(B.a)(["\n  color: black;\n  opacity: 80%;\n  font-family: 'Nanum Gothic', sans-serif;\n  font-weight: 1000;\n  font-size: 18px;\n"]))),X=S.b.button(O||(O=Object(B.a)(["\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #fff;\n  opacity: 100%;\n  outline: none;\n  cursor: pointer;\n\tposition: relative;\n\tborder: none;\n\tbox-shadow: 1px 1px 5px black;\n\t\n  &:after {\n    content: '';\n    position: absolute;\n    top: calc(-1 * 2px);\n    left: calc(-1 * 2px);\n    height: calc(100% + 2px * 2);\n    width: calc(100% + 2px * 2);\n    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);\n    border-radius: calc(2 * 50%);\n    z-index: -1;\n    animation: "," 3s ease alternate infinite;\n    background-size: 300% 300%;\n  }\n"])),K),Z=function(){var n=Object(y.useState)(!1),e=Object(N.a)(n,2),t=e[0],i=e[1];return Object(R.jsxs)(T,{children:[Object(R.jsx)(Q,{}),Object(R.jsx)(F,{}),Object(R.jsx)(U,{onClick:function(){i(!0)},children:"?"}),Object(R.jsx)(E,{size:3}),Object(R.jsx)(H,{}),Object(R.jsxs)(V,{v:t,children:[Object(R.jsx)(W,{children:"\ud558\ud2b8, \ud074\ub85c\ubc84 = \uc2a4\ucffc\ud2b8 / \ub2e4\uc774\uc544 = \uc67c\ubc1c \ub7f0\uc9c0 / \uc2a4\ud398\uc774\ub4dc = \uc624\ub978\ubc1c \ub7f0\uc9c0"}),Object(R.jsx)(X,{onClick:function(){i(!1)}})]})]})};z.a.render(Object(R.jsx)(w.a.StrictMode,{children:Object(R.jsx)(Z,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.06a1a48d.chunk.js.map