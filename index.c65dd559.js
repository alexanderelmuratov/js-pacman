function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},s=t.parcelRequiref884;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var s={id:e,exports:{}};return o[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequiref884=s),s.register("kyEFX",(function(t,o){var r,s;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var i={};r=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},s=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.c65dd559.js","g9e6O":"munch.9f780f66.mp3","20nZ1":"pill.c07d011f.mp3","7I1iT":"game_start.0165b747.mp3","fY2Rt":"death.57cc7a29.mp3","h36oY":"eat_ghost.a39c3f91.mp3"}'));const i={ArrowLeft:{code:37,movement:-1,rotation:180},ArrowUp:{code:38,movement:-20,rotation:270},ArrowRight:{code:39,movement:1,rotation:0},ArrowDown:{code:40,movement:20,rotation:90}},n={BLANK:"blank",WALL:"wall",DOT:"dot",BLINKY:"blinky",PINKY:"pinky",INKY:"inky",CLYDE:"clyde",PILL:"pill",PACMAN:"pacman",GHOST:"ghost",SCARED:"scared",GHOSTLAIR:"lair"},a=[n.BLANK,n.WALL,n.DOT,n.BLINKY,n.PINKY,n.INKY,n.CLYDE,n.PILL,n.PACMAN,n.GHOSTLAIR],d=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,0,0,0,1,2,1,2,2,2,2,2,2,2,2,1,2,1,0,0,0,0,0,0,1,2,1,2,1,9,9,9,9,1,2,1,2,1,0,0,0,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,1,0,0,0,2,2,2,1,9,9,9,9,1,2,2,2,0,0,0,1,1,1,1,1,2,1,2,1,9,9,9,9,1,2,1,2,1,1,1,1,0,0,0,1,2,1,2,1,1,1,1,1,1,2,1,2,1,0,0,0,0,0,0,1,2,1,2,0,0,0,0,0,0,2,1,2,1,0,0,0,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,2,2,2,2,1,2,2,2,1,1,2,2,2,1,2,2,2,2,1,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,7,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,7,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],c=(e,t,o)=>{let r=t,s=e+r.movement;const a=Object.keys(i);for(;o(s,n.WALL)||o(s,n.GHOST);){const t=a[Math.floor(Math.random()*a.length)];r=i[t],s=e+r.movement}return{nextMovePos:s,direction:r}};class l{shouldMove(){return!!this.dir&&(this.timer===this.speed?(this.timer=0,!0):void this.timer++)}getNextMove(e){let t=this.pos+this.dir.movement;return(e(t,n.WALL)||e(t,n.GHOSTLAIR))&&(t=this.pos),{nextMovePos:t,direction:this.dir}}makeMove(){return{classesToRemove:[n.PACMAN],classesToAdd:[n.PACMAN]}}setNewPos(e,t){this.pos=e,this.dir=t}handleKeyInput(e,t){let o;if(!(e.keyCode>=37&&e.keyCode<=40))return;o=i[e.key];const r=this.pos+o.movement;t(r,n.WALL)||t(r,n.GHOSTLAIR)||(this.dir=o)}constructor(e,t){this.pos=t,this.speed=e,this.dir=null,this.timer=0,this.powerPill=!1,this.rotation=!0}}class h{shouldMove(){return this.timer===this.speed?(this.timer=0,!0):(this.timer++,!1)}getNextMove(e){const{nextMovePos:t,direction:o}=this.movement(this.pos,this.dir,e);return{nextMovePos:t,direction:o}}makeMove(){const e=[n.GHOST,n.SCARED,this.name];let t=[n.GHOST,this.name];return this.isScared&&(t=[...t,n.SCARED]),{classesToRemove:e,classesToAdd:t}}setNewPos(e,t){this.pos=e,this.dir=t}constructor(e,t,o,r){this.name=r,this.movement=o,this.startPos=t,this.pos=t,this.dir=i.ArrowRight,this.speed=e,this.timer=0,this.isScared=!1,this.rotation=!1}}var m;m=new URL(s("kyEFX").resolve("g9e6O"),import.meta.url).toString();var u;u=new URL(s("kyEFX").resolve("20nZ1"),import.meta.url).toString();var p;p=new URL(s("kyEFX").resolve("7I1iT"),import.meta.url).toString();var v;v=new URL(s("kyEFX").resolve("fY2Rt"),import.meta.url).toString();var L;L=new URL(s("kyEFX").resolve("h36oY"),import.meta.url).toString();const f=document.querySelector("#game"),w=document.querySelector("#score"),A=document.querySelector("#start-button"),g=class{showGameStatus(e){const t=document.createElement("div");t.classList.add("game-status"),t.innerHTML=""+(e?"WIN!":"GAME OVER!"),this.DOMGrid.appendChild(t)}createGrid(e){this.dotCount=0,this.grid=[],this.DOMGrid.innerHTML="",this.DOMGrid.style.cssText="grid-template-columns: repeat(20, 20px)",e.forEach((e=>{const t=document.createElement("div");t.classList.add("square",a[e]),t.style.cssText="width: 20px; height: 20px",this.DOMGrid.appendChild(t),this.grid.push(t),a[e]===n.DOT&&this.dotCount++}))}addObject(e,t){this.grid[e].classList.add(...t)}removeObject(e,t){this.grid[e].classList.remove(...t)}objectExist(e,t){return this.grid[e].classList.contains(t)}rotateDiv(e,t){this.grid[e].style.transform=`rotate(${t}deg)`}moveCharacter(e){if(e.shouldMove()){const{nextMovePos:t,direction:o}=e.getNextMove(this.objectExist.bind(this)),{classesToRemove:r,classesToAdd:s}=e.makeMove();e.rotation&&t!==e.pos&&(this.rotateDiv(t,e.dir.rotation),this.rotateDiv(e.pos,0)),this.removeObject(e.pos,r),this.addObject(t,s),e.setNewPos(t,o)}}static createGameBoard(e,t){const o=new this(e);return o.createGrid(t),o}constructor(e){this.dotCount=0,this.grid=[],this.DOMGrid=e}}.createGameBoard(f,d);let E=0,b=0,O=!1,y=!1,S=null;const M=e=>{new Audio(e).play()},P=e=>{M(v),document.removeEventListener("keydown",(t=>e.handleKeyInput(t,g.objectExist.bind(g)))),g.showGameStatus(O),clearInterval(b),A.classList.remove("hide")},T=(e,t)=>{const o=t.find((t=>e.pos===t.pos));o&&(e.powerPill?(M(L),g.removeObject(o.pos,[n.GHOST,n.SCARED,o.name]),o.pos=o.startPos,E+=100):(g.removeObject(e.pos,[n.PACMAN]),g.rotateDiv(e.pos,0),P(e)))};A.addEventListener("click",(()=>{M(p),O=!1,y=!1,E=0,A.classList.add("hide"),g.createGrid(d);const e=new l(2,289);g.addObject(289,[n.PACMAN]),document.addEventListener("keydown",(t=>e.handleKeyInput(t,g.objectExist.bind(g))));const t=[new h(5,188,c,n.BLINKY),new h(4,209,c,n.PINKY),new h(3,230,c,n.INKY),new h(2,251,c,n.CLYDE)];b=setInterval((()=>((e,t)=>{g.moveCharacter(e),T(e,t),t.forEach((e=>g.moveCharacter(e))),T(e,t),g.objectExist(e.pos,n.DOT)&&(M(m),g.removeObject(e.pos,[n.DOT]),g.dotCount--,E+=10),g.objectExist(e.pos,n.PILL)&&(M(u),g.removeObject(e.pos,[n.PILL]),e.powerPill=!0,E+=50,clearTimeout(S),S=setTimeout((()=>e.powerPill=!1),1e4)),e.powerPill!==y&&(y=e.powerPill,t.forEach((t=>t.isScared=e.powerPill))),0===g.dotCount&&(O=!0,P(e)),w.innerHTML=E})(e,t)),80)}));
//# sourceMappingURL=index.c65dd559.js.map