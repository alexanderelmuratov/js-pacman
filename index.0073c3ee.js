!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequiref884;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequiref884=i),i.register("iE7OH",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=i("8NIkP"))&&r.__esModule?r:{default:r}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=i("8NIkP"))&&r.__esModule?r:{default:r}})),i.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.0073c3ee.js","hxM71":"munch.9f780f66.mp3","9Gw2y":"pill.c07d011f.mp3","9NFAl":"game_start.0165b747.mp3","iT7th":"win.b7c9cbab.mp3","im80T":"death.57cc7a29.mp3","ab94i":"eat_ghost.a39c3f91.mp3"}'));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a.default(e,t,r[t])}))}return e};var s,a=(s=i("hKHmD"))&&s.__esModule?s:{default:s};var c={ArrowLeft:{code:37,movement:-1,rotation:180},ArrowUp:{code:38,movement:-20,rotation:270},ArrowRight:{code:39,movement:1,rotation:0},ArrowDown:{code:40,movement:20,rotation:90}},d={BLANK:"blank",WALL:"wall",DOT:"dot",BLINKY:"blinky",PINKY:"pinky",INKY:"inky",CLYDE:"clyde",PILL:"pill",PACMAN:"pacman",GHOST:"ghost",SCARED:"scared",GHOSTLAIR:"lair"},l=[d.BLANK,d.WALL,d.DOT,d.BLINKY,d.PINKY,d.INKY,d.CLYDE,d.PILL,d.PACMAN,d.GHOSTLAIR],f=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,0,0,0,1,2,1,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0,0,0,1,2,1,2,1,9,9,9,9,1,2,1,2,1,0,0,0,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,1,0,0,0,2,2,2,1,9,9,9,9,1,2,2,2,0,0,0,1,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,0,0,0,1,2,1,2,1,1,1,1,1,1,2,1,2,1,0,0,0,0,0,0,1,2,1,2,0,0,0,0,0,0,2,1,2,1,0,0,0,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],v=function(e,t,r){for(var n=t,o=e+n.movement,i=Object.keys(c);r(o,d.WALL)||r(o,d.GHOST);){var u=i[Math.floor(Math.random()*i.length)];o=e+(n=c[u]).movement}return{nextMovePos:o,direction:n}},p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var h={};function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,r){t&&m(e.prototype,t);r&&m(e,r);return e};var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e){return b.default(e)||g.default(e)||O.default(e)||E.default()};var b=L(i("kMC0W")),g=L(i("7AJDX")),E=L(i("8CtQK")),O=L(i("auk6i"));function L(e){return e&&e.__esModule?e:{default:e}}var w,A=function(){"use strict";function e(r){t(p)(this,e),this.dotCount=0,this.grid=[],this.DOMGrid=r}return t(h)(e,[{key:"showGameStatus",value:function(e){var t=document.createElement("div");t.classList.add("game-status"),t.innerHTML="".concat(e?"WIN!":"GAME OVER!"),this.DOMGrid.appendChild(t)}},{key:"createGrid",value:function(e){var t=this;this.dotCount=0,this.grid=[],this.DOMGrid.innerHTML="",this.DOMGrid.style.cssText="grid-template-columns: repeat(".concat(20,", ").concat(20,"px)"),e.forEach((function(e){var r=document.createElement("div");r.classList.add("square",l[e]),r.style.cssText="width: ".concat(20,"px; height: ").concat(20,"px"),t.DOMGrid.appendChild(r),t.grid.push(r),l[e]===d.DOT&&t.dotCount++}))}},{key:"addObject",value:function(e,r){var n;(n=this.grid[e].classList).add.apply(n,t(y)(r))}},{key:"removeObject",value:function(e,r){var n;(n=this.grid[e].classList).remove.apply(n,t(y)(r))}},{key:"objectExist",value:function(e,t){return this.grid[e].classList.contains(t)}},{key:"rotateDiv",value:function(e,t){this.grid[e].style.transform="rotate(".concat(t,"deg)")}},{key:"moveCharacter",value:function(e){if(e.shouldMove()){var t=e.getNextMove(this.objectExist.bind(this)),r=t.nextMovePos,n=t.direction,o=e.makeMove(),i=o.classesToRemove,u=o.classesToAdd;e.rotation&&r!==e.pos&&(this.rotateDiv(r,e.dir.rotation),this.rotateDiv(e.pos,0)),this.removeObject(e.pos,i),this.addObject(r,u),e.setNewPos(r,n)}}}],[{key:"createGameBoard",value:function(e,t){var r=new this(e);return r.createGrid(t),r}}]),e}(),k=function(){"use strict";function e(r,n){t(p)(this,e),this.pos=n,this.speed=r,this.dir=null,this.timer=0,this.powerPill=!1,this.rotation=!0}return t(h)(e,[{key:"shouldMove",value:function(){return!!this.dir&&(this.timer===this.speed?(this.timer=0,!0):void this.timer++)}},{key:"getNextMove",value:function(e){var t=this.pos+this.dir.movement;return(e(t,d.WALL)||e(t,d.GHOSTLAIR))&&(t=this.pos),{nextMovePos:t,direction:this.dir}}},{key:"makeMove",value:function(){return{classesToRemove:[d.PACMAN],classesToAdd:[d.PACMAN]}}},{key:"setNewPos",value:function(e,t){this.pos=e,this.dir=t}},{key:"handleKeyInput",value:function(e,t){var r;if(e.keyCode>=37&&e.keyCode<=40){r=c[e.key];var n=this.pos+r.movement;t(n,d.WALL)||t(n,d.GHOSTLAIR)||(this.dir=r)}}}]),e}(),x=function(){"use strict";function e(r,n,o,i){t(p)(this,e),this.name=i,this.movement=o,this.startPos=n,this.pos=n,this.dir=c.ArrowRight,this.speed=r,this.timer=0,this.isScared=!1,this.rotation=!1}return t(h)(e,[{key:"shouldMove",value:function(){return this.timer===this.speed?(this.timer=0,!0):(this.timer++,!1)}},{key:"getNextMove",value:function(e){var t=this.movement(this.pos,this.dir,e);return{nextMovePos:t.nextMovePos,direction:t.direction}}},{key:"makeMove",value:function(){var e=[d.GHOST,d.SCARED,this.name],r=[d.GHOST,this.name];return this.isScared&&(r=t(y)(r).concat([d.SCARED])),{classesToRemove:e,classesToAdd:r}}},{key:"setNewPos",value:function(e,t){this.pos=e,this.dir=t}}]),e}();w=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("hxM71");var M;M=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("9Gw2y");var P;P=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("9NFAl");var _;_=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("iT7th");var j;j=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("im80T");var C;C=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("ab94i");var S=document.querySelector("#game"),N=document.querySelector("#score"),I=document.querySelector("#start-button"),H=document.querySelector("#up-button"),T=document.querySelector("#left-button"),R=document.querySelector("#right-button"),D=document.querySelector("#down-button"),K=A.createGameBoard(S,f),G=0,q=0,B=!1,U=!1,Y=null,F=function(e){new Audio(e).play()},J=function(e){F(B?_:j),document.removeEventListener("keydown",(function(t){return e.handleKeyInput(t,K.objectExist.bind(K))})),H.removeEventListener("click",(function(t){return e.handleKeyInput(t,K.objectExist.bind(K))})),T.removeEventListener("click",(function(t){return e.handleKeyInput(t,K.objectExist.bind(K))})),R.removeEventListener("click",(function(t){return e.handleKeyInput(t,K.objectExist.bind(K))})),D.removeEventListener("click",(function(t){return e.handleKeyInput(t,K.objectExist.bind(K))})),K.showGameStatus(B),clearInterval(q),I.classList.remove("hide")},V=function(e,t){var r=t.find((function(t){return e.pos===t.pos}));r&&(e.powerPill?(F(C),K.removeObject(r.pos,[d.GHOST,d.SCARED,r.name]),r.pos=r.startPos,G+=100):(K.removeObject(e.pos,[d.PACMAN]),K.rotateDiv(e.pos,0),J(e)))};I.addEventListener("click",(function(){F(P),B=!1,U=!1,G=0,I.classList.add("hide"),K.createGrid(f);var e=new k(2,289);K.addObject(289,[d.PACMAN]),document.addEventListener("keydown",(function(t){return e.handleKeyInput(t,K.objectExist.bind(K))})),H.addEventListener("click",(function(r){return e.handleKeyInput(t(u)({},r,{keyCode:38,key:"ArrowUp"}),K.objectExist.bind(K))})),T.addEventListener("click",(function(r){return e.handleKeyInput(t(u)({},r,{keyCode:37,key:"ArrowLeft"}),K.objectExist.bind(K))})),R.addEventListener("click",(function(r){return e.handleKeyInput(t(u)({},r,{keyCode:39,key:"ArrowRight"}),K.objectExist.bind(K))})),D.addEventListener("click",(function(r){return e.handleKeyInput(t(u)({},r,{keyCode:40,key:"ArrowDown"}),K.objectExist.bind(K))}));var r=[new x(5,188,v,d.BLINKY),new x(4,209,v,d.PINKY),new x(3,230,v,d.INKY),new x(2,251,v,d.CLYDE)];q=setInterval((function(){return function(e,t){K.moveCharacter(e),V(e,t),t.forEach((function(e){return K.moveCharacter(e)})),V(e,t),K.objectExist(e.pos,d.DOT)&&(F(w),K.removeObject(e.pos,[d.DOT]),K.dotCount--,G+=10),K.objectExist(e.pos,d.PILL)&&(F(M),K.removeObject(e.pos,[d.PILL]),e.powerPill=!0,G+=50,clearTimeout(Y),Y=setTimeout((function(){return e.powerPill=!1}),1e4)),e.powerPill!==U&&(U=e.powerPill,t.forEach((function(t){return t.isScared=e.powerPill}))),0===K.dotCount&&(B=!0,J(e)),N.innerHTML=G}(e,r)}),80)}))}();
//# sourceMappingURL=index.0073c3ee.js.map
