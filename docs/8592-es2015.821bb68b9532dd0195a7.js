(self.webpackChunkui=self.webpackChunkui||[]).push([[8592],{8232:function(t,e,n){"use strict";n.d(e,{c:function(){return c}});var r=n(2322),o=n(3320),i=n(8520);const c=(t,e)=>{let n,c;const s=(t,r,o)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(t,r);i&&e(i)?i!==n&&(l(),a(i,o)):l()},a=(t,e)=>{n=t,c||(c=n);const o=n;(0,r.c)(()=>o.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;(0,r.c)(()=>e.classList.remove("ion-activated")),t&&c!==n&&n.click(),n=void 0};return(0,i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>s(t.currentX,t.currentY,o.a),onMove:t=>s(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),(0,o.h)(),c=void 0}})}},4068:function(t,e,n){"use strict";n.d(e,{g:function(){return r}});const r=(t,e,n,r,c)=>i(t[1],e[1],n[1],r[1],c).map(i=>o(t[0],e[0],n[0],r[0],i)),o=(t,e,n,r,o)=>o*(3*e*Math.pow(o-1,2)+o*(-3*n*o+3*n+r*o))-t*Math.pow(o-1,3),i=(t,e,n,r,o)=>c((r-=o)-3*(n-=o)+3*(e-=o)-(t-=o),3*n-6*e+3*t,3*e-3*t,t).filter(t=>t>=0&&t<=1),c=(t,e,n,r)=>{if(0===t)return((t,e,n)=>{const r=e*e-4*t*n;return r<0?[]:[(-e+Math.sqrt(r))/(2*t),(-e-Math.sqrt(r))/(2*t)]})(e,n,r);const o=(3*(n/=t)-(e/=t)*e)/3,i=(2*e*e*e-9*e*n+27*(r/=t))/27;if(0===o)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-o),-Math.sqrt(-o)];const c=Math.pow(i/2,2)+Math.pow(o/3,3);if(0===c)return[Math.pow(i/2,.5)-e/3];if(c>0)return[Math.pow(-i/2+Math.sqrt(c),1/3)-Math.pow(i/2+Math.sqrt(c),1/3)-e/3];const s=Math.sqrt(Math.pow(-o/3,3)),a=Math.acos(-i/(2*Math.sqrt(Math.pow(-o/3,3)))),l=2*Math.pow(s,1/3);return[l*Math.cos(a/3)-e/3,l*Math.cos((a+2*Math.PI)/3)-e/3,l*Math.cos((a+4*Math.PI)/3)-e/3]}},9498:function(t,e,n){"use strict";n.d(e,{a:function(){return o},d:function(){return i}});var r=n(1843);const o=async(t,e,n,o,i)=>{if(t)return t.attachViewToDom(e,n,i,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const c="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return o&&o.forEach(t=>c.classList.add(t)),i&&Object.assign(c,i),e.appendChild(c),await new Promise(t=>(0,r.c)(c,t)),c},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},3320:function(t,e,n){"use strict";n.d(e,{a:function(){return i},b:function(){return c},c:function(){return o},d:function(){return a},h:function(){return s}});const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{r.selection()},i=()=>{r.selectionStart()},c=()=>{r.selectionChanged()},s=()=>{r.selectionEnd()},a=t=>{r.impact(t)}},7942:function(t,e,n){"use strict";n.d(e,{s:function(){return r}});const r=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!c()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,a.forEach(t=>{const n=e.querySelectorAll(t);for(let r=n.length-1;r>=0;r--){const t=n[r];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const c=i(t);for(let e=0;e<c.length;e++)o(c[e])}});const r=i(e);for(let t=0;t<r.length;t++)o(r[t]);const s=document.createElement("div");s.appendChild(e);const l=s.querySelector("div");return null!==l?l.innerHTML:s.innerHTML}catch(e){return console.error(e),""}},o=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),r=e.name;if(!s.includes(r.toLowerCase())){t.removeAttribute(r);continue}const o=e.value;null!=o&&o.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}const e=i(t);for(let n=0;n<e.length;n++)o(e[n])},i=t=>null!=t.children?t.children:t.childNodes,c=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},s=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},9926:function(t,e,n){"use strict";n.d(e,{S:function(){return r}});const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,o=t*r-t+"ms",i=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},4843:function(t,e,n){"use strict";n.d(e,{c:function(){return o},g:function(){return i},h:function(){return r},o:function(){return s}});const r=(t,e)=>null!==e.closest(t),o=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,i=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},c=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n,r)}return!1}},2904:function(t,e,n){"use strict";n.r(e),n.d(e,{FullPageLayoutModule:function(){return f}});var r=n(1116),o=n(1041),i=n(4812),c=n(3337),s=n(5366);let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-full-page-layout"]],decls:2,vars:0,consts:[[1,"container-body"]],template:function(t,e){1&t&&(s.TgZ(0,"ion-content",0),s._UZ(1,"ion-router-outlet"),s.qZA())},directives:[i.W2,i.jP],styles:[".container-body[_ngcontent-%COMP%]{--background:#f2f2f2}"]}),t})();var l=n(6659);const u=[{path:"",component:a,children:[{path:"",pathMatch:"full",redirectTo:"login"},{path:"login",canLoad:[(()=>{class t{constructor(t,e){this.authService=t,this.router=e}canLoad(t,e){return this.authService.checkLogin().then(t=>!t||(this.router.navigateByUrl("").then(),!1))}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(l.e),s.LFG(c.F0))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()],loadChildren:()=>Promise.all([n.e(9769),n.e(7333)]).then(n.bind(n,7333)).then(t=>t.LoginPageModule)},{path:"register",loadChildren:()=>Promise.all([n.e(9769),n.e(3841),n.e(3183)]).then(n.bind(n,3183)).then(t=>t.RegisterPageModule)}]}];let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[c.Bz.forChild(u)],c.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.ez,o.u5,i.Pc,d]]}),t})()}}]);