parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/hero/vector-mobile.png":[["vector-mobile.2fa11f10.png","K5xa"],"K5xa"],"./../images/hero/vector-mobile@2x.png":[["vector-mobile@2x.bf9c7c63.png","fpDV"],"fpDV"],"./../images/hero/vector-tablet.png":[["vector-tablet.6d494183.png","YbED"],"YbED"],"./../images/hero/vector-tablet@2x.png":[["vector-tablet@2x.1de2606c.png","yH1T"],"yH1T"],"./../images/hero/vector-desktop.png":[["vector-desktop.25093f04.png","ohY4"],"ohY4"],"./../images/hero/vector-desktop@2x.png":[["vector-desktop@2x.1def79ac.png","sDxv"],"sDxv"],"./../images/registration/registration-mobile@1x.png":[["registration-mobile@1x.42472626.png","cxIg"],"cxIg"],"./../images/registration/registration@1x.png":[["registration@1x.17990fc1.png","kAMC"],"kAMC"],"./../images/registration/registration-mobile@2x.png":[["registration-mobile@2x.eeaea7e0.png","TSEv"],"TSEv"],"./../images/registration/registration@2x.png":[["registration@2x.aaaa35a7.png","FVTv"],"FVTv"]}],"i0CD":[function(require,module,exports) {
!function(){var e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),a=document.querySelector("[data-menu-logo]");e.addEventListener("click",function(){var o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),a.classList.toggle("logo-reverse"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")})}();
},{}],"dSQt":[function(require,module,exports) {
function t(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=r(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return u=t.done,t},e:function(t){l=!0,i=t},f:function(){try{u||null==e.return||e.return()}finally{if(l)throw i}}}}function r(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var e,o=document.querySelectorAll('a[href*="#"]'),a=t(o);try{var i=function(){var t=e.value;t.addEventListener("click",function(r){r.preventDefault();var n=t.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})})};for(a.s();!(e=a.n()).done;)i()}catch(u){a.e(u)}finally{a.f()}
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/menu"),require("./js/scrolling");
},{"./sass/main.scss":"clu1","./js/menu":"i0CD","./js/scrolling":"dSQt"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project/src.b5963a41.js.map