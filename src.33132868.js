parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\images\\hero\\vector-mobile.png":[["vector-mobile.2fa11f10.png","K5xa"],"K5xa"],"./..\\images\\hero\\vector-mobile@2x.png":[["vector-mobile@2x.bf9c7c63.png","fpDV"],"fpDV"],"./..\\images\\hero\\vector-tablet.png":[["vector-tablet.6d494183.png","YbED"],"YbED"],"./..\\images\\hero\\vector-tablet@2x.png":[["vector-tablet@2x.1de2606c.png","yH1T"],"yH1T"],"./..\\images\\hero\\vector-desktop.png":[["vector-desktop.25093f04.png","ohY4"],"ohY4"],"./..\\images\\hero\\vector-desktop@2x.png":[["vector-desktop@2x.1def79ac.png","sDxv"],"sDxv"],"./..\\images\\registration\\registration-mobile@1x.png":[["registration-mobile@1x.42472626.png","cxIg"],"cxIg"],"./..\\images\\registration\\registration@1x.png":[["registration@1x.17990fc1.png","kAMC"],"kAMC"],"./..\\images\\registration\\registration-mobile@2x.png":[["registration-mobile@2x.eeaea7e0.png","TSEv"],"TSEv"],"./..\\images\\registration\\registration@2x.png":[["registration@2x.aaaa35a7.png","FVTv"],"FVTv"]}],"i0CD":[function(require,module,exports) {
!function(){var e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),a=document.querySelector("[data-menu-logo]");e.addEventListener("click",function(){var o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),a.classList.toggle("logo-reverse"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")})}();
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/menu");
},{"./sass/main.scss":"clu1","./js/menu":"i0CD"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project/src.33132868.js.map