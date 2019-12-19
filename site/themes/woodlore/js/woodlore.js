/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!function(factory){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],factory):factory("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function($){"use strict";function init(options){return!options||void 0!==options.allowPageScroll||void 0===options.swipe&&void 0===options.swipeStatus||(options.allowPageScroll=NONE),void 0!==options.click&&void 0===options.tap&&(options.tap=options.click),options||(options={}),options=$.extend({},$.fn.swipe.defaults,options),this.each(function(){var $this=$(this),plugin=$this.data(PLUGIN_NS);plugin||(plugin=new TouchSwipe(this,options),$this.data(PLUGIN_NS,plugin))})}function TouchSwipe(element,options){function touchStart(jqEvent){if(!(getTouchInProgress()||$(jqEvent.target).closest(options.excludedElements,$element).length>0)){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(!event.pointerType||"mouse"!=event.pointerType||0!=options.fallbackToMouseEvents){var ret,touches=event.touches,evt=touches?touches[0]:event;return phase=PHASE_START,touches?fingerCount=touches.length:options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),distance=0,direction=null,currentDirection=null,pinchDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,maximumsMap=createMaximumsData(),cancelMultiFingerRelease(),createFingerData(0,evt),!touches||fingerCount===options.fingers||options.fingers===ALL_FINGERS||hasPinches()?(startTime=getTimeStamp(),2==fingerCount&&(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)),(options.swipeStatus||options.pinchStatus)&&(ret=triggerHandler(event,phase))):ret=!1,ret===!1?(phase=PHASE_CANCEL,triggerHandler(event,phase),ret):(options.hold&&(holdTimeout=setTimeout($.proxy(function(){$element.trigger("hold",[event.target]),options.hold&&(ret=options.hold.call($element,event,event.target))},this),options.longTapThreshold)),setTouchInProgress(!0),null)}}}function touchMove(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(phase!==PHASE_END&&phase!==PHASE_CANCEL&&!inMultiFingerRelease()){var ret,touches=event.touches,evt=touches?touches[0]:event,currentFinger=updateFingerData(evt);if(endTime=getTimeStamp(),touches&&(fingerCount=touches.length),options.hold&&clearTimeout(holdTimeout),phase=PHASE_MOVE,2==fingerCount&&(0==startTouchesDistance?(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)):(updateFingerData(touches[1]),endTouchesDistance=calculateTouchesDistance(fingerData[0].end,fingerData[1].end),pinchDirection=calculatePinchDirection(fingerData[0].end,fingerData[1].end)),pinchZoom=calculatePinchZoom(startTouchesDistance,endTouchesDistance),pinchDistance=Math.abs(startTouchesDistance-endTouchesDistance)),fingerCount===options.fingers||options.fingers===ALL_FINGERS||!touches||hasPinches()){if(direction=calculateDirection(currentFinger.start,currentFinger.end),currentDirection=calculateDirection(currentFinger.last,currentFinger.end),validateDefaultEvent(jqEvent,currentDirection),distance=calculateDistance(currentFinger.start,currentFinger.end),duration=calculateDuration(),setMaxDistance(direction,distance),ret=triggerHandler(event,phase),!options.triggerOnTouchEnd||options.triggerOnTouchLeave){var inBounds=!0;if(options.triggerOnTouchLeave){var bounds=getbounds(this);inBounds=isInBounds(currentFinger.end,bounds)}!options.triggerOnTouchEnd&&inBounds?phase=getNextPhase(PHASE_MOVE):options.triggerOnTouchLeave&&!inBounds&&(phase=getNextPhase(PHASE_END)),phase!=PHASE_CANCEL&&phase!=PHASE_END||triggerHandler(event,phase)}}else phase=PHASE_CANCEL,triggerHandler(event,phase);ret===!1&&(phase=PHASE_CANCEL,triggerHandler(event,phase))}}function touchEnd(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent,touches=event.touches;if(touches){if(touches.length&&!inMultiFingerRelease())return startMultiFingerRelease(event),!0;if(touches.length&&inMultiFingerRelease())return!0}return inMultiFingerRelease()&&(fingerCount=fingerCountAtRelease),endTime=getTimeStamp(),duration=calculateDuration(),didSwipeBackToCancel()||!validateSwipeDistance()?(phase=PHASE_CANCEL,triggerHandler(event,phase)):options.triggerOnTouchEnd||options.triggerOnTouchEnd===!1&&phase===PHASE_MOVE?(options.preventDefaultEvents!==!1&&jqEvent.cancelable!==!1&&jqEvent.preventDefault(),phase=PHASE_END,triggerHandler(event,phase)):!options.triggerOnTouchEnd&&hasTap()?(phase=PHASE_END,triggerHandlerForGesture(event,phase,TAP)):phase===PHASE_MOVE&&(phase=PHASE_CANCEL,triggerHandler(event,phase)),setTouchInProgress(!1),null}function touchCancel(){fingerCount=0,endTime=0,startTime=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,cancelMultiFingerRelease(),setTouchInProgress(!1)}function touchLeave(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;options.triggerOnTouchLeave&&(phase=getNextPhase(PHASE_END),triggerHandler(event,phase))}function removeListeners(){$element.unbind(START_EV,touchStart),$element.unbind(CANCEL_EV,touchCancel),$element.unbind(MOVE_EV,touchMove),$element.unbind(END_EV,touchEnd),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave),setTouchInProgress(!1)}function getNextPhase(currentPhase){var nextPhase=currentPhase,validTime=validateSwipeTime(),validDistance=validateSwipeDistance(),didCancel=didSwipeBackToCancel();return!validTime||didCancel?nextPhase=PHASE_CANCEL:!validDistance||currentPhase!=PHASE_MOVE||options.triggerOnTouchEnd&&!options.triggerOnTouchLeave?!validDistance&&currentPhase==PHASE_END&&options.triggerOnTouchLeave&&(nextPhase=PHASE_CANCEL):nextPhase=PHASE_END,nextPhase}function triggerHandler(event,phase){var ret,touches=event.touches;return(didSwipe()||hasSwipes())&&(ret=triggerHandlerForGesture(event,phase,SWIPE)),(didPinch()||hasPinches())&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,PINCH)),didDoubleTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,DOUBLE_TAP):didLongTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,LONG_TAP):didTap()&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,TAP)),phase===PHASE_CANCEL&&touchCancel(event),phase===PHASE_END&&(touches?touches.length||touchCancel(event):touchCancel(event)),ret}function triggerHandlerForGesture(event,phase,gesture){var ret;if(gesture==SWIPE){if($element.trigger("swipeStatus",[phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection]),options.swipeStatus&&(ret=options.swipeStatus.call($element,event,phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection),ret===!1))return!1;if(phase==PHASE_END&&validateSwipe()){if(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),$element.trigger("swipe",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipe&&(ret=options.swipe.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection),ret===!1))return!1;switch(direction){case LEFT:$element.trigger("swipeLeft",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeLeft&&(ret=options.swipeLeft.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case RIGHT:$element.trigger("swipeRight",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeRight&&(ret=options.swipeRight.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case UP:$element.trigger("swipeUp",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeUp&&(ret=options.swipeUp.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case DOWN:$element.trigger("swipeDown",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeDown&&(ret=options.swipeDown.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection))}}}if(gesture==PINCH){if($element.trigger("pinchStatus",[phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchStatus&&(ret=options.pinchStatus.call($element,event,phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData),ret===!1))return!1;if(phase==PHASE_END&&validatePinch())switch(pinchDirection){case IN:$element.trigger("pinchIn",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchIn&&(ret=options.pinchIn.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData));break;case OUT:$element.trigger("pinchOut",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchOut&&(ret=options.pinchOut.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData))}}return gesture==TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),hasDoubleTap()&&!inDoubleTap()?(doubleTapStartTime=getTimeStamp(),singleTapTimeout=setTimeout($.proxy(function(){doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target))},this),options.doubleTapThreshold)):(doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target)))):gesture==DOUBLE_TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),doubleTapStartTime=null,$element.trigger("doubletap",[event.target]),options.doubleTap&&(ret=options.doubleTap.call($element,event,event.target))):gesture==LONG_TAP&&(phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),doubleTapStartTime=null,$element.trigger("longtap",[event.target]),options.longTap&&(ret=options.longTap.call($element,event,event.target)))),ret}function validateSwipeDistance(){var valid=!0;return null!==options.threshold&&(valid=distance>=options.threshold),valid}function didSwipeBackToCancel(){var cancelled=!1;return null!==options.cancelThreshold&&null!==direction&&(cancelled=getMaxDistance(direction)-distance>=options.cancelThreshold),cancelled}function validatePinchDistance(){return null===options.pinchThreshold||pinchDistance>=options.pinchThreshold}function validateSwipeTime(){var result;return result=!options.maxTimeThreshold||!(duration>=options.maxTimeThreshold)}function validateDefaultEvent(jqEvent,direction){if(options.preventDefaultEvents!==!1)if(options.allowPageScroll===NONE)jqEvent.preventDefault();else{var auto=options.allowPageScroll===AUTO;switch(direction){case LEFT:(options.swipeLeft&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case RIGHT:(options.swipeRight&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case UP:(options.swipeUp&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case DOWN:(options.swipeDown&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case NONE:}}}function validatePinch(){var hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),hasCorrectDistance=validatePinchDistance();return hasCorrectFingerCount&&hasEndPoint&&hasCorrectDistance}function hasPinches(){return!!(options.pinchStatus||options.pinchIn||options.pinchOut)}function didPinch(){return!(!validatePinch()||!hasPinches())}function validateSwipe(){var hasValidTime=validateSwipeTime(),hasValidDistance=validateSwipeDistance(),hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),didCancel=didSwipeBackToCancel(),valid=!didCancel&&hasEndPoint&&hasCorrectFingerCount&&hasValidDistance&&hasValidTime;return valid}function hasSwipes(){return!!(options.swipe||options.swipeStatus||options.swipeLeft||options.swipeRight||options.swipeUp||options.swipeDown)}function didSwipe(){return!(!validateSwipe()||!hasSwipes())}function validateFingers(){return fingerCount===options.fingers||options.fingers===ALL_FINGERS||!SUPPORTS_TOUCH}function validateEndPoint(){return 0!==fingerData[0].end.x}function hasTap(){return!!options.tap}function hasDoubleTap(){return!!options.doubleTap}function hasLongTap(){return!!options.longTap}function validateDoubleTap(){if(null==doubleTapStartTime)return!1;var now=getTimeStamp();return hasDoubleTap()&&now-doubleTapStartTime<=options.doubleTapThreshold}function inDoubleTap(){return validateDoubleTap()}function validateTap(){return(1===fingerCount||!SUPPORTS_TOUCH)&&(isNaN(distance)||distance<options.threshold)}function validateLongTap(){return duration>options.longTapThreshold&&distance<DOUBLE_TAP_THRESHOLD}function didTap(){return!(!validateTap()||!hasTap())}function didDoubleTap(){return!(!validateDoubleTap()||!hasDoubleTap())}function didLongTap(){return!(!validateLongTap()||!hasLongTap())}function startMultiFingerRelease(event){previousTouchEndTime=getTimeStamp(),fingerCountAtRelease=event.touches.length+1}function cancelMultiFingerRelease(){previousTouchEndTime=0,fingerCountAtRelease=0}function inMultiFingerRelease(){var withinThreshold=!1;if(previousTouchEndTime){var diff=getTimeStamp()-previousTouchEndTime;diff<=options.fingerReleaseThreshold&&(withinThreshold=!0)}return withinThreshold}function getTouchInProgress(){return!($element.data(PLUGIN_NS+"_intouch")!==!0)}function setTouchInProgress(val){$element&&(val===!0?($element.bind(MOVE_EV,touchMove),$element.bind(END_EV,touchEnd),LEAVE_EV&&$element.bind(LEAVE_EV,touchLeave)):($element.unbind(MOVE_EV,touchMove,!1),$element.unbind(END_EV,touchEnd,!1),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave,!1)),$element.data(PLUGIN_NS+"_intouch",val===!0))}function createFingerData(id,evt){var f={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return f.start.x=f.last.x=f.end.x=evt.pageX||evt.clientX,f.start.y=f.last.y=f.end.y=evt.pageY||evt.clientY,fingerData[id]=f,f}function updateFingerData(evt){var id=void 0!==evt.identifier?evt.identifier:0,f=getFingerData(id);return null===f&&(f=createFingerData(id,evt)),f.last.x=f.end.x,f.last.y=f.end.y,f.end.x=evt.pageX||evt.clientX,f.end.y=evt.pageY||evt.clientY,f}function getFingerData(id){return fingerData[id]||null}function setMaxDistance(direction,distance){direction!=NONE&&(distance=Math.max(distance,getMaxDistance(direction)),maximumsMap[direction].distance=distance)}function getMaxDistance(direction){if(maximumsMap[direction])return maximumsMap[direction].distance}function createMaximumsData(){var maxData={};return maxData[LEFT]=createMaximumVO(LEFT),maxData[RIGHT]=createMaximumVO(RIGHT),maxData[UP]=createMaximumVO(UP),maxData[DOWN]=createMaximumVO(DOWN),maxData}function createMaximumVO(dir){return{direction:dir,distance:0}}function calculateDuration(){return endTime-startTime}function calculateTouchesDistance(startPoint,endPoint){var diffX=Math.abs(startPoint.x-endPoint.x),diffY=Math.abs(startPoint.y-endPoint.y);return Math.round(Math.sqrt(diffX*diffX+diffY*diffY))}function calculatePinchZoom(startDistance,endDistance){var percent=endDistance/startDistance*1;return percent.toFixed(2)}function calculatePinchDirection(){return pinchZoom<1?OUT:IN}function calculateDistance(startPoint,endPoint){return Math.round(Math.sqrt(Math.pow(endPoint.x-startPoint.x,2)+Math.pow(endPoint.y-startPoint.y,2)))}function calculateAngle(startPoint,endPoint){var x=startPoint.x-endPoint.x,y=endPoint.y-startPoint.y,r=Math.atan2(y,x),angle=Math.round(180*r/Math.PI);return angle<0&&(angle=360-Math.abs(angle)),angle}function calculateDirection(startPoint,endPoint){if(comparePoints(startPoint,endPoint))return NONE;var angle=calculateAngle(startPoint,endPoint);return angle<=45&&angle>=0?LEFT:angle<=360&&angle>=315?LEFT:angle>=135&&angle<=225?RIGHT:angle>45&&angle<135?DOWN:UP}function getTimeStamp(){var now=new Date;return now.getTime()}function getbounds(el){el=$(el);var offset=el.offset(),bounds={left:offset.left,right:offset.left+el.outerWidth(),top:offset.top,bottom:offset.top+el.outerHeight()};return bounds}function isInBounds(point,bounds){return point.x>bounds.left&&point.x<bounds.right&&point.y>bounds.top&&point.y<bounds.bottom}function comparePoints(pointA,pointB){return pointA.x==pointB.x&&pointA.y==pointB.y}var options=$.extend({},options),useTouchEvents=SUPPORTS_TOUCH||SUPPORTS_POINTER||!options.fallbackToMouseEvents,START_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerDown":"pointerdown":"touchstart":"mousedown",MOVE_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerMove":"pointermove":"touchmove":"mousemove",END_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerUp":"pointerup":"touchend":"mouseup",LEAVE_EV=useTouchEvents?SUPPORTS_POINTER?"mouseleave":null:"mouseleave",CANCEL_EV=SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerCancel":"pointercancel":"touchcancel",distance=0,direction=null,currentDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,pinchDirection=0,maximumsMap=null,$element=$(element),phase="start",fingerCount=0,fingerData={},startTime=0,endTime=0,previousTouchEndTime=0,fingerCountAtRelease=0,doubleTapStartTime=0,singleTapTimeout=null,holdTimeout=null;try{$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel)}catch(e){$.error("events not supported "+START_EV+","+CANCEL_EV+" on jQuery.swipe")}this.enable=function(){return this.disable(),$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel),$element},this.disable=function(){return removeListeners(),$element},this.destroy=function(){removeListeners(),$element.data(PLUGIN_NS,null),$element=null},this.option=function(property,value){if("object"==typeof property)options=$.extend(options,property);else if(void 0!==options[property]){if(void 0===value)return options[property];options[property]=value}else{if(!property)return options;$.error("Option "+property+" does not exist on jQuery.swipe.options")}return null}}var VERSION="1.6.18",LEFT="left",RIGHT="right",UP="up",DOWN="down",IN="in",OUT="out",NONE="none",AUTO="auto",SWIPE="swipe",PINCH="pinch",TAP="tap",DOUBLE_TAP="doubletap",LONG_TAP="longtap",HORIZONTAL="horizontal",VERTICAL="vertical",ALL_FINGERS="all",DOUBLE_TAP_THRESHOLD=10,PHASE_START="start",PHASE_MOVE="move",PHASE_END="end",PHASE_CANCEL="cancel",SUPPORTS_TOUCH="ontouchstart"in window,SUPPORTS_POINTER_IE10=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!SUPPORTS_TOUCH,SUPPORTS_POINTER=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!SUPPORTS_TOUCH,PLUGIN_NS="TouchSwipe",defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};$.fn.swipe=function(method){var $this=$(this),plugin=$this.data(PLUGIN_NS);if(plugin&&"string"==typeof method){if(plugin[method])return plugin[method].apply(plugin,Array.prototype.slice.call(arguments,1));$.error("Method "+method+" does not exist on jQuery.swipe")}else if(plugin&&"object"==typeof method)plugin.option.apply(plugin,arguments);else if(!(plugin||"object"!=typeof method&&method))return init.apply(this,arguments);return $this},$.fn.swipe.version=VERSION,$.fn.swipe.defaults=defaults,$.fn.swipe.phases={PHASE_START:PHASE_START,PHASE_MOVE:PHASE_MOVE,PHASE_END:PHASE_END,PHASE_CANCEL:PHASE_CANCEL},$.fn.swipe.directions={LEFT:LEFT,RIGHT:RIGHT,UP:UP,DOWN:DOWN,IN:IN,OUT:OUT},$.fn.swipe.pageScroll={NONE:NONE,HORIZONTAL:HORIZONTAL,VERTICAL:VERTICAL,AUTO:AUTO},$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:ALL_FINGERS}});
jQuery(document).ready(function(t){t(".bs4-carousel").each(function(){var i,s=t(this),a=s[0].hasAttribute("data-column");if(!0===a){function h(){var i=s.attr("id"),h=s.find(".carousel-item"),n=t(h).length,o=s.attr("data-column"),d=s.attr("data-m1200"),c=s[0].hasAttribute("data-m1200"),r=s.attr("data-m992"),e=s[0].hasAttribute("data-m992"),u=s.attr("data-m768"),l=s[0].hasAttribute("data-m768"),b=s.attr("data-m576"),f=s[0].hasAttribute("data-m576");function m(a,d,c,r){if(t("#"+i).css({display:"block"}),!0===a)var e=d;else e=o;if(""!==e&&e>0&&e<=n){if(window.matchMedia(c).matches){t(h).each(function(){var i=t(this);i.find(".cloneditems").remove();for(var s=1;s<e;s++)(i=i.next()).length||(i=t(this).siblings(":first")),i.children(":first-child").children(":first-child").clone().addClass("cloneditem-"+s+" cloneditems").appendTo(t(this).children(":first-child"))});var u=100/e+"%";t(h).on("slideIsChanging",function(){s.find(".active.carousel-item-left, .carousel-item-prev").css({"-webkit-transform":"translateX(-"+u+")",transform:"translateX(-"+u+")","-webkit-transform":"-webkit-translate3d(-"+u+",0,0)",transform:"translate3d(-"+u+",0,0)"}),s.find(".carousel-item-next, .active.carousel-item-right").css({"-webkit-transform":"translateX("+u+")",transform:"translateX("+u+")","-webkit-transform":"-webkit-translate3d("+u+",0,0)",transform:"translate3d("+u+",0,0)"}),s.find(".carousel-item-next.carousel-item-left, .carousel-item-prev.carousel-item-right").css({"-webkit-transform":"translateX(0)",transform:"translateX(0)","-webkit-transform":"-webkit-translate3d(0,0,0)",transform:"translate3d(0,0,0)"})})}}else{var l="In Slider Id : #"+i;l+="\n",l+="You are assigning the value ("+e+") to the (data-"+r+") attribute. Which is greater than numbers of carousel-item those you are creating ("+n+")",l+="\n\n",l+="Please make sure the value of (data-"+r+") should be <= to numbers of carousel-item ("+n+").",l+="\n\n",l+="Note : The values should not be 0 or empty And also (Positive Integers only)",alert(l),t("#"+i).css({display:"none"})}}m(a,o,"(min-width: 1201px)","column"),m(c,d,"(min-width: 993px) and (max-width: 1200px)","m1200"),m(e,r,"(min-width: 769px) and (max-width: 992px)","m992"),m(l,u,"(min-width: 577px) and (max-width: 768px)","m768"),m(f,b,"(max-width: 576px)","m576")}i=jQuery.fn.addClass,jQuery.fn.addClass=function(){var t=i.apply(this,arguments);return jQuery(this).trigger("slideIsChanging"),t},h(),t(window).resize(function(){clearTimeout(s.id),s.id=setTimeout(h,100)})}}),t(".bs4-carousel.bs4-carousel-move-1").each(function(){var i=t(this);if(!0===i[0].hasAttribute("data-column")){if(!0===i[0].hasAttribute("data-padding")){var s=t(this).attr("data-padding");""!==s&&t(this).css({padding:s})}t(i).find(".carousel-inner").each(function(){t(this).children(".carousel-item").children(".row").each(function(){t(this).css({margin:"0"})});var i=t(this)[0].hasAttribute("data-padding"),s=t(this)[0].hasAttribute("data-border"),a=t(this)[0].hasAttribute("data-radius");if(!0===i){var h=t(this).attr("data-padding");t(this).children(".carousel-item").children(".row").children(".col").each(function(){""!==h&&t(this).css({padding:h})})}if(!0===s){var n=t(this).attr("data-border");t(this).find(".bs4-column-img").each(function(){""!==n&&t(this).css({border:n})})}if(!0===a){var o=t(this).attr("data-radius");t(this).find(".bs4-column-img").each(function(){""!==o&&t(this).css({"-webkit-border-radius":o})})}})}}),t(".bs4-carousel.bs4-carousel-move-2").each(function(){var i=t(this);if(!0===i[0].hasAttribute("data-column")){if(!0===i[0].hasAttribute("data-padding")){var s=t(this).attr("data-padding");""!==s&&t(this).css({padding:s})}t(i).find(".carousel-inner").each(function(){t(this).children(".carousel-item").children(".row").each(function(){t(this).css({margin:"0"})}),t(this).children(".carousel-item").children(".row").children(".col").each(function(){t(this).css({padding:"0"})}),t(this).children(".carousel-item").children(".row").children(".col").children(".row").each(function(){t(this).css({margin:"0"})});var i=t(this)[0].hasAttribute("data-padding"),s=t(this)[0].hasAttribute("data-border"),a=t(this)[0].hasAttribute("data-radius");if(!0===i){var h=t(this).attr("data-padding");t(this).children(".carousel-item").children(".row").children(".col").children(".row").children(".col-12").each(function(){""!==h&&t(this).css({padding:h})})}if(!0===s){var n=t(this).attr("data-border");t(this).find(".bs4-column-img").each(function(){""!==n&&t(this).css({border:n})})}if(!0===a){var o=t(this).attr("data-radius");t(this).find(".bs4-column-img").each(function(){""!==o&&t(this).css({"-webkit-border-radius":o})})}})}}),t(".bs4-carousel.bs4-carousel-move-all").each(function(){var i=t(this);if(!0===i[0].hasAttribute("data-padding")){var s=t(this).attr("data-padding");""!==s&&t(this).css({padding:s})}t(i).find(".carousel-inner").each(function(){t(this).children(".carousel-item").children(".row").each(function(){t(this).css({margin:"0"})});var i=t(this)[0].hasAttribute("data-padding"),s=t(this)[0].hasAttribute("data-border"),a=t(this)[0].hasAttribute("data-radius");if(!0===i){var h=t(this).attr("data-padding");t(this).children(".carousel-item").children(".row").children(".col-12").each(function(){""!==h&&t(this).css({padding:h})})}if(!0===s){var n=t(this).attr("data-border");t(this).find(".bs4-column-img").each(function(){""!==n&&t(this).css({border:n})})}if(!0===a){var o=t(this).attr("data-radius");t(this).find(".bs4-column-img").each(function(){""!==o&&t(this).css({"-webkit-border-radius":o})})}})});for(var i=t(".carousel"),s=i.length,a=0;a<s;a++){t.fn.carousel.Constructor.TRANSITION_DURATION=9999999;var h=i.eq(a).data("duration"),n=t("[data-duration="+h+"] > .carousel-inner > .carousel-item");t(n).each(function(){t(this).css({"-webkit-transition-duration":h+"ms","-moz-transition-duration":h+"ms","transition-duration":h+"ms"})})}var o=t(".carousel").find("[class=bs4-mouse-wheel-y]");t(".carousel").find("[class=bs4-mouse-wheel-xy]")&&t(".bs4-mouse-wheel-xy").on("mousewheel",function(i){i.originalEvent.wheelDelta/120>0?t(this).carousel("prev"):t(this).carousel("next")}),o&&t(".bs4-mouse-wheel-y").on("mousewheel",function(i){i.originalEvent.wheelDelta/120>0&&t(this).carousel("next")});var d=t(".carousel").hasClass("swipe_x"),c=t(".carousel").hasClass("swipe_y");if(!0===d){var r={swipeLeft:function(i,s){t(this).parent().carousel("next"),t(".carousel-item").addClass("no-click")},swipeRight:function(i,s){t(this).parent().carousel("prev"),t(".carousel-item").addClass("no-click")},threshold:5,excludedElements:"label, button, input, select, textarea, .noSwipe"};t(function(){t(".swipe_x .carousel-inner").swipe(r)}),t(".carousel-item").click(function(){if(t(this).hasClass("no-click"))return event.preventDefault(),!1}),t(".carousel-item").mousedown(function(){t(this).removeClass("no-click")})}if(!0===c){var e={swipeUp:function(i,s){t(this).parent().carousel("next"),t(".carousel-item").addClass("no-click")},swipeDown:function(i,s){t(this).parent().carousel("prev"),t(".carousel-item").addClass("no-click")},threshold:5,excludedElements:"label, button, input, select, textarea, .noSwipe"};t(function(){t(".swipe_y .carousel-inner").swipe(e)}),t(".carousel-item").click(function(){if(t(this).hasClass("no-click"))return event.preventDefault(),!1}),t(".carousel-item").mousedown(function(){t(this).removeClass("no-click")})}var u=t(".carousel").hasClass("thumb_scroll_x"),l=t(".carousel").hasClass("thumb_scroll_y");if(!0===u&&t(".thumb_scroll_x").each(function(){var i=0;t(this).on("slide.bs.carousel",function(){var s=-1*t(this).find(".carousel-indicators li:first-child").position().left+t(this).find(".carousel-indicators li:last-child").position().left+t(this).find(".carousel-indicators li:last-child").width(),a=t(this).find(".carousel-indicators li.active").position().left+t(this).find(".carousel-indicators li.active").width()/1.2+i-t(this).find(".carousel-indicators").width()/1.2;a<0&&(a=0),a>s-t(this).find(".carousel-indicators").width()&&(a=s-t(this).find(".carousel-indicators").width()),t(this).find(".carousel-indicators").animate({scrollLeft:a},800),i=a}),t(this).on("slid.bs.carousel",function(){var s=-1*t(this).find(".carousel-indicators li:first-child").position().left+t(this).find(".carousel-indicators li:last-child").position().left+t(this).find(".carousel-indicators li:last-child").width(),a=t(this).find(".carousel-indicators li.active").position().left+t(this).find(".carousel-indicators li.active").width()/1.2+i-t(this).find(".carousel-indicators").width()/1.2;a<0&&(a=0),a>s-t(this).find(".carousel-indicators").width()&&(a=s-t(this).find(".carousel-indicators").width()),t(this).find(".carousel-indicators").animate({scrollLeft:a},800),i=a})}),!0===l){var b=0;t(".thumb_scroll_y").each(function(){t(this).on("slide.bs.carousel",function(){var i=-1*t(this).find(".carousel-indicators li:first").position().top+t(this).find(".carousel-indicators li:last").position().top+t(this).find(".carousel-indicators li:last").height(),s=t(this).find(".carousel-indicators li.active").position().top+t(this).find(".carousel-indicators li.active").height()/1.2+b-t(this).find(".carousel-indicators").height()/1.2;s<0&&(s=0),s>i-t(this).find(".carousel-indicators").height()&&(s=i-t(this).find(".carousel-indicators").height()),t(this).find(".carousel-indicators").animate({scrollTop:s},800),b=s}),t(this).on("slid.bs.carousel",function(){var i=-1*t(this).find(".carousel-indicators li:first").position().top+t(this).find(".carousel-indicators li:last").position().top+t(this).find(".carousel-indicators li:last").height(),s=t(this).find(".carousel-indicators li.active").position().top+t(this).find(".carousel-indicators li.active").height()/1.2+b-t(this).find(".carousel-indicators").height()/1.2;s<0&&(s=0),s>i-t(this).find(".carousel-indicators").height()&&(s=i-t(this).find(".carousel-indicators").height()),t(this).find(".carousel-indicators").animate({scrollTop:s},800),b=s})})}t(".bs4-carousel").each(function(){t(this).find(".carousel-item").eq(0).addClass("active"),t(this).find(".carousel-indicators").children().eq(0).addClass("active")}),t(".bs4-full-screen").each(function(){var i,s,a=t(this),h=window.innerWidth,n=t(window).height(),o=(window,i=t("<div>").css({visibility:"hidden",width:100,overflow:"scroll"}).appendTo("body"),s=t("<div>").css({width:"100%"}).appendTo(i).outerWidth(),i.remove(),100-s),d=a.siblings().not("script").length,c=a.find(".carousel-item"),r=a.find(".carousel-inner"),e=a.find(".carousel-indicators"),u=a.find(".carousel-indicators").width(),l=a.find(".carousel-indicators").height(),b=a.is("[data-thumb=top]"),f=a.is("[data-thumb=left]"),m=a.is("[data-thumb=right]"),g=a.is("[data-thumb=bottom]");t(".bs4-full-screen img.bs4-carousel-img").each(function(){var i=t(this).attr("src");t(this).parent().css({"background-image":"url("+i+")","overflow":"hidden","background-position":"center","background-repeat":"no-repeat"}),t(this).remove()}),d>0?1==f?(t(".bs4-indicators-thumb[data-thumb=left]").find(e).each(function(){t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(r).each(function(){t(this).width(h-u-o),t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(c).each(function(){t(this).width(h-u-o),t(this).height(n)})):1==m?(t(".bs4-indicators-thumb[data-thumb=right]").find(e).each(function(){t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(r).each(function(){t(this).width(h-u-o),t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(c).each(function(){t(this).width(h-u-o),t(this).height(n)})):1==b?(t(".bs4-indicators-thumb[data-thumb=top]").find(e).each(function(){t(this).width(h-o)}),t(".bs4-indicators-thumb[data-thumb=top]").find(r).each(function(){t(this).width(h-o),t(this).height(n-l)}),t(".bs4-indicators-thumb[data-thumb=top]").find(c).each(function(){t(this).width(h-o),t(this).height(n-l)})):1==g?(t(".bs4-indicators-thumb[data-thumb=bottom]").find(e).each(function(){t(this).width(h-o)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(r).each(function(){t(this).width(h-o),t(this).height(n-l)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(c).each(function(){t(this).width(h-o),t(this).height(n-l)})):(c.width(h-o),r.width(h-o),c.height(n),r.height(n)):1==f?(t(".bs4-indicators-thumb[data-thumb=left]").find(e).each(function(){t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(r).each(function(){t(this).width(h-u),t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(c).each(function(){t(this).width(h-u),t(this).height(n)})):1==m?(t(".bs4-indicators-thumb[data-thumb=right]").find(e).each(function(){t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(r).each(function(){t(this).width(h-u),t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(c).each(function(){t(this).width(h-u),t(this).height(n)})):1==b?(t(".bs4-indicators-thumb[data-thumb=top]").find(e).each(function(){t(this).width(h)}),t(".bs4-indicators-thumb[data-thumb=top]").find(r).each(function(){t(this).width(h),t(this).height(n-l)}),t(".bs4-indicators-thumb[data-thumb=top]").find(c).each(function(){t(this).width(h),t(this).height(n-l)})):1==g?(t(".bs4-indicators-thumb[data-thumb=bottom]").find(e).each(function(){t(this).width(h)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(r).each(function(){t(this).width(h),t(this).height(n-l)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(c).each(function(){t(this).width(h),t(this).height(n-l)})):(c.width(h),r.width(h),c.height(n),r.height(n)),t(window).resize(function(){h=window.innerWidth,n=t(window).height(),d>0?1==f?(t(".bs4-indicators-thumb[data-thumb=left]").find(e).each(function(){t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(r).each(function(){t(this).width(h-u-o),t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(c).each(function(){t(this).width(h-u-o),t(this).height(n)})):1==m?(t(".bs4-indicators-thumb[data-thumb=right]").find(e).each(function(){t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(r).each(function(){t(this).width(h-u-o),t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(c).each(function(){t(this).width(h-u-o),t(this).height(n)})):1==b?(t(".bs4-indicators-thumb[data-thumb=top]").find(e).each(function(){t(this).width(h-o)}),t(".bs4-indicators-thumb[data-thumb=top]").find(r).each(function(){t(this).width(h-o),t(this).height(n-l)}),t(".bs4-indicators-thumb[data-thumb=top]").find(c).each(function(){t(this).width(h-o),t(this).height(n-l)})):1==g?(t(".bs4-indicators-thumb[data-thumb=bottom]").find(e).each(function(){t(this).width(h-o)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(r).each(function(){t(this).width(h-o),t(this).height(n-l)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(c).each(function(){t(this).width(h-o),t(this).height(n-l)})):(c.width(h-o),r.width(h-o),c.height(n),r.height(n)):1==f?(t(".bs4-indicators-thumb[data-thumb=left]").find(e).each(function(){t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(r).each(function(){t(this).width(h-u),t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(c).each(function(){t(this).width(h-u),t(this).height(n)})):1==m?(t(".bs4-indicators-thumb[data-thumb=right]").find(e).each(function(){t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(r).each(function(){t(this).width(h-u),t(this).height(n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(c).each(function(){t(this).width(h-u),t(this).height(n)})):1==b?(t(".bs4-indicators-thumb[data-thumb=top]").find(e).each(function(){t(this).width(h)}),t(".bs4-indicators-thumb[data-thumb=top]").find(r).each(function(){t(this).width(h),t(this).height(n-l)}),t(".bs4-indicators-thumb[data-thumb=top]").find(c).each(function(){t(this).width(h),t(this).height(n-l)})):1==g?(t(".bs4-indicators-thumb[data-thumb=bottom]").find(e).each(function(){t(this).width(h)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(r).each(function(){t(this).width(h),t(this).height(n-l)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(c).each(function(){t(this).width(h),t(this).height(n-l)})):(c.width(h),r.width(h),c.height(n),r.height(n))})}),t(".bs4-full-screen-parent").each(function(){var i=t(this),s=i.parent().width(),a=i.parent().height(),h=i.find(".carousel-item"),n=i.find(".carousel-inner"),o=i.find(".carousel-indicators"),d=i.find(".carousel-indicators").width(),c=i.find(".carousel-indicators").height(),r=i.is("[data-thumb=top]"),e=i.is("[data-thumb=left]"),u=i.is("[data-thumb=right]"),l=i.is("[data-thumb=bottom]");t(".bs4-full-screen-parent img.bs4-carousel-img").each(function(){var i=t(this).attr("src");t(this).parent().css({"background-image":"url("+i+")","overflow":"hidden","background-position":"center","background-repeat":"no-repeat"}),t(this).remove()}),1==e?(t(".bs4-indicators-thumb[data-thumb=left]").find(o).each(function(){t(this).height(a)}),t(".bs4-indicators-thumb[data-thumb=left]").find(n).each(function(){t(this).width(s-d),t(this).height(a)}),t(".bs4-indicators-thumb[data-thumb=left]").find(h).each(function(){t(this).width(s-d),t(this).height(a)})):1==u?(t(".bs4-indicators-thumb[data-thumb=right]").find(o).each(function(){t(this).height(a)}),t(".bs4-indicators-thumb[data-thumb=right]").find(n).each(function(){t(this).width(s-d),t(this).height(a)}),t(".bs4-indicators-thumb[data-thumb=right]").find(h).each(function(){t(this).width(s-d),t(this).height(a)})):1==r?(t(".bs4-indicators-thumb[data-thumb=top]").find(n).each(function(){t(this).height(a-c)}),t(".bs4-indicators-thumb[data-thumb=top]").find(h).each(function(){t(this).height(a-c)})):1==l?(t(".bs4-indicators-thumb[data-thumb=bottom]").find(n).each(function(){t(this).height(a-c)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(h).each(function(){t(this).height(a-c)})):(h.height(a),n.height(a)),t(window).on("resize",function(){s=i.parent().width(),a=i.parent().height(),1==e?(t(".bs4-indicators-thumb[data-thumb=left]").find(o).each(function(){t(this).height(a)}),t(".bs4-indicators-thumb[data-thumb=left]").find(n).each(function(){t(this).width(s-d),t(this).height(a)}),t(".bs4-indicators-thumb[data-thumb=left]").find(h).each(function(){t(this).width(s-d),t(this).height(a)})):1==u?(t(".bs4-indicators-thumb[data-thumb=right] .carousel-indicators").each(function(){t(this).height(a)}),t(".bs4-indicators-thumb[data-thumb=right] .carousel-inner").each(function(){t(this).width(s-d),t(this).height(a)}),t(".bs4-indicators-thumb[data-thumb=right] .carousel-inner .carousel-item").each(function(){t(this).width(s-d),t(this).height(a)})):1==r?(t(".bs4-indicators-thumb[data-thumb=top] .carousel-indicators").each(function(){t(this).width(s)}),t(".bs4-indicators-thumb[data-thumb=top] .carousel-inner").each(function(){t(this).width(s),t(this).height(a-c)}),t(".bs4-indicators-thumb[data-thumb=top] .carousel-inner .carousel-item").each(function(){t(this).width(s),t(this).height(a-c)})):1==l?(t(".bs4-full-screen-parent .bs4-indicators-thumb[data-thumb=bottom] .carousel-indicators").each(function(){t(this).width(s)}),t(".bs4-full-screen-parent .bs4-indicators-thumb[data-thumb=bottom] .carousel-inner").each(function(){t(this).width(s),t(this).height(a-c)}),t(".bs4-full-screen-parent .bs4-indicators-thumb[data-thumb=bottom] .carousel-inner .carousel-item").each(function(){t(this).width(s),t(this).height(a-c)})):(h.width(s),n.width(s),h.height(a),n.height(a))})}),t(".bs4-full-width").each(function(){var i=t(this),s=i.parent().not("body").length,a=i.find(".carousel-item"),h=i.find(".carousel-inner"),n=(i.find(".carousel-indicators"),i.find(".carousel-indicators").width()),o=(i.find(".carousel-indicators").height(),i.is("[data-thumb=top]")),d=i.is("[data-thumb=left]"),c=i.is("[data-thumb=right]"),r=i.is("[data-thumb=bottom]");if(s>0){var e=i.parent().width();i.parent().height();1==d?(t(".bs4-indicators-thumb[data-thumb=left]").find(h).each(function(){t(this).width(e-n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(a).each(function(){t(this).width(e-n)})):1==c?(t(".bs4-indicators-thumb[data-thumb=right]").find(h).each(function(){t(this).width(e-n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(a).each(function(){t(this).width(e-n)})):1==o?(t(".bs4-indicators-thumb[data-thumb=top]").find(h).each(function(){t(this).width(e)}),t(".bs4-indicators-thumb[data-thumb=top]").find(a).each(function(){t(this).width(e)})):1==r&&(t(".bs4-indicators-thumb[data-thumb=bottom]").find(h).each(function(){t(this).width(e)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(a).each(function(){t(this).width(e)}))}else{e=t(window).width(),t(window).height();1==d?(t(".bs4-indicators-thumb[data-thumb=left]").find(h).each(function(){t(this).width(e-n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(a).each(function(){t(this).width(e-n)})):1==c?(t(".bs4-indicators-thumb[data-thumb=right]").find(h).each(function(){t(this).width(e-n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(a).each(function(){t(this).width(e-n)})):1==o?(t(".bs4-indicators-thumb[data-thumb=top]").find(h).each(function(){t(this).width(e)}),t(".bs4-indicators-thumb[data-thumb=top]").find(a).each(function(){t(this).width(e)})):1==r&&(t(".bs4-indicators-thumb[data-thumb=bottom]").find(h).each(function(){t(this).width(e)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(a).each(function(){t(this).width(e)}))}t(window).on("resize",function(){if(s>0){var e=i.parent().width();i.parent().height();1==d?(t(".bs4-indicators-thumb[data-thumb=left]").find(h).each(function(){t(this).width(e-n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(a).each(function(){t(this).width(e-n)})):1==c?(t(".bs4-indicators-thumb[data-thumb=right]").find(h).each(function(){t(this).width(e-n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(a).each(function(){t(this).width(e-n)})):1==o?(t(".bs4-indicators-thumb[data-thumb=top]").find(h).each(function(){t(this).width(e)}),t(".bs4-indicators-thumb[data-thumb=top]").find(a).each(function(){t(this).width(e)})):1==r&&(t(".bs4-indicators-thumb[data-thumb=bottom]").find(h).each(function(){t(this).width(e)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(a).each(function(){t(this).width(e)}))}else{e=t(window).width(),t(window).height();1==d?(t(".bs4-indicators-thumb[data-thumb=left]").find(h).each(function(){t(this).width(e-n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(a).each(function(){t(this).width(e-n)})):1==c?(t(".bs4-indicators-thumb[data-thumb=right]").find(h).each(function(){t(this).width(e-n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(a).each(function(){t(this).width(e-n)})):1==o?(t(".bs4-indicators-thumb[data-thumb=top]").find(h).each(function(){t(this).width(e)}),t(".bs4-indicators-thumb[data-thumb=top]").find(a).each(function(){t(this).width(e)})):1==r&&(t(".bs4-indicators-thumb[data-thumb=bottom]").find(h).each(function(){t(this).width(e)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(a).each(function(){t(this).width(e)}))}})}),t(".bs4-full-width-height").each(function(){var i=t(this),s=i.parent().not("body").length,a=i.find(".carousel-item"),h=i.find(".carousel-inner"),n=(i.find(".carousel-indicators"),i.find(".carousel-indicators").width()),o=i.find(".carousel-indicators").height(),d=i.is("[data-thumb=top]"),c=i.is("[data-thumb=left]"),r=i.is("[data-thumb=right]"),e=i.is("[data-thumb=bottom]");if(s>0){var u=i.parent().width(),l=i.parent().height();1==c?(t(".bs4-indicators-thumb[data-thumb=left]").find(h).each(function(){t(this).width(u-n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(a).each(function(){t(this).width(u-n)})):1==r?(t(".bs4-indicators-thumb[data-thumb=right]").find(h).each(function(){t(this).width(u-n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(a).each(function(){t(this).width(u-n)})):1==d?(t(".bs4-indicators-thumb[data-thumb=top]").find(h).each(function(){t(this).width(u),t(this).height(l-o)}),t(".bs4-indicators-thumb[data-thumb=top]").find(a).each(function(){t(this).width(u),t(this).height(l-o)})):1==e&&(t(".bs4-indicators-thumb[data-thumb=bottom]").find(h).each(function(){t(this).width(u),t(this).height(l-o)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(a).each(function(){t(this).width(u),t(this).height(l-o)}))}else{u=t(window).width(),l=t(window).height();1==c?(t(".bs4-indicators-thumb[data-thumb=left]").find(h).each(function(){t(this).width(u-n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(a).each(function(){t(this).width(u-n)})):1==r?(t(".bs4-indicators-thumb[data-thumb=right]").find(h).each(function(){t(this).width(u-n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(a).each(function(){t(this).width(u-n)})):1==d?(t(".bs4-indicators-thumb[data-thumb=top]").find(h).each(function(){t(this).width(u)}),t(".bs4-indicators-thumb[data-thumb=top]").find(a).each(function(){t(this).width(u)})):1==e&&(t(".bs4-indicators-thumb[data-thumb=bottom]").find(h).each(function(){t(this).width(u)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(a).each(function(){t(this).width(u)}))}t(window).on("resize",function(){if(s>0){var u=i.parent().width(),l=i.parent().height();1==c?(t(".bs4-indicators-thumb[data-thumb=left]").find(h).each(function(){t(this).width(u-n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(a).each(function(){t(this).width(u-n)})):1==r?(t(".bs4-indicators-thumb[data-thumb=right]").find(h).each(function(){t(this).width(u-n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(a).each(function(){t(this).width(u-n)})):1==d?(t(".bs4-indicators-thumb[data-thumb=top]").find(h).each(function(){t(this).width(u)}),t(".bs4-indicators-thumb[data-thumb=top]").find(a).each(function(){t(this).width(u)})):1==e&&(t(".bs4-indicators-thumb[data-thumb=bottom]").find(h).each(function(){t(this).width(u),t(this).height(l-o)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(a).each(function(){t(this).width(u),t(this).height(l-o)}))}else{u=t(window).width(),l=t(window).height();1==c?(t(".bs4-indicators-thumb[data-thumb=left]").find(h).each(function(){t(this).width(u-n)}),t(".bs4-indicators-thumb[data-thumb=left]").find(a).each(function(){t(this).width(u-n)})):1==r?(t(".bs4-indicators-thumb[data-thumb=right]").find(h).each(function(){t(this).width(u-n)}),t(".bs4-indicators-thumb[data-thumb=right]").find(a).each(function(){t(this).width(u-n)})):1==d?(t(".bs4-indicators-thumb[data-thumb=top]").find(h).each(function(){t(this).width(u)}),t(".bs4-indicators-thumb[data-thumb=top]").find(a).each(function(){t(this).width(u)})):1==e&&(t(".bs4-indicators-thumb[data-thumb=bottom]").find(h).each(function(){t(this).width(u),t(this).height(l-o)}),t(".bs4-indicators-thumb[data-thumb=bottom]").find(a).each(function(){t(this).width(u),t(this).height(l-o)}))}})}),t(".bs4-carousel .carousel-indicators").each(function(){if(!0===t(this)[0].hasAttribute("data-bgcolor")){var i=t(this).attr("data-bgcolor");""!==i&&t(this).css({background:i})}}),t(".bs4-carousel.bs4-indicators-simple").each(function(){if(!0===t(this).find(".carousel-indicators")[0].hasAttribute("data-color")){var i=t(this).find(".carousel-indicators").hasClass("carousel-indicators-bs3"),s=t(this).find(".carousel-indicators").hasClass("carousel-indicators-bs4"),a=t(this).find(".carousel-indicators").hasClass("carousel-indicators-fill"),h=t(this).find(".carousel-indicators").hasClass("carousel-indicators-border"),n=t(this).find(".carousel-indicators").hasClass("carousel-indicators-ip");!0===i?t(this).children(".carousel-indicators").each(function(){var i=t(this).attr("data-color");t(this).children("li").each(function(){""!==i&&(!0===t(this).hasClass("active")?t(this).css({background:i,border:"1px solid "+i}):t(this).css({background:"transparent",border:"1px solid "+i}))})}):1==s?t(this).children(".carousel-indicators").each(function(){var i=t(this).attr("data-color");t(this).children("li").each(function(){""!==i&&(!0===t(this).hasClass("active")?t(this).css({background:i,opacity:"1"}):t(this).css({background:i,opacity:"0.5"}))})}):1==a?t(this).children(".carousel-indicators").each(function(){var i=t(this).attr("data-color");t(this).children("li").each(function(){""!==i&&(!0===t(this).hasClass("active")?t(this).css({background:i,opacity:"1"}):t(this).css({background:i,opacity:"0.5"}))})}):1==h?t(this).children(".carousel-indicators").each(function(){var i=t(this).attr("data-color");t(this).children("li").each(function(){""!==i&&(!0===t(this).hasClass("active")?t(this).css({background:"transparent",border:"2px solid "+i}):t(this).css({background:i,border:"2px solid "+i}))})}):1==n&&t(this).children(".carousel-indicators").each(function(){var i=t(this).attr("data-color");t(this).children("li").each(function(){""!==i&&(!0===t(this).hasClass("active")?t(this).css({background:i,opacity:"1"}):t(this).css({background:i,opacity:"0.5"}))})})}}),t(".bs4-carousel.bs4-indicators-simple").on("slide.bs.carousel",function(i){var s=t(this),a=i.to;t(this).children(".carousel-indicators").each(function(){if(!0===t(this)[0].hasAttribute("data-color")){var i=t(this).hasClass("carousel-indicators-bs3"),h=t(this).hasClass("carousel-indicators-bs4"),n=t(this).hasClass("carousel-indicators-fill"),o=t(this).hasClass("carousel-indicators-border"),d=t(this).hasClass("carousel-indicators-ip");if(!0===i){var c=t(this).attr("data-color");t(this).children("li").each(function(){var i=t(this).attr("data-slide-to");a==i?""!==c&&t(s).find("[data-slide-to="+a+"]").css({background:c,border:"1px solid "+c}):""!==c&&t(s).find("[data-slide-to="+i+"]").css({background:"transparent",border:"1px solid "+c})})}else if(1==h){var r=t(this).attr("data-color");t(this).children("li").each(function(){var i=t(this).attr("data-slide-to");a==i?""!==r&&t(s).find("[data-slide-to="+a+"]").css({background:r,opacity:"1"}):""!==r&&t(s).find("[data-slide-to="+i+"]").css({background:r,opacity:"0.5"})})}else if(1==n){var e=t(this).attr("data-color");t(this).children("li").each(function(){var i=t(this).attr("data-slide-to");a==i?""!==e&&t(s).find("[data-slide-to="+a+"]").css({background:e,opacity:"1"}):""!==e&&t(s).find("[data-slide-to="+i+"]").css({background:e,opacity:"0.5"})})}else if(1==o){var u=t(this).attr("data-color");t(this).children("li").each(function(){var i=t(this).attr("data-slide-to");a==i?""!==u&&t(s).find("[data-slide-to="+a+"]").css({background:"transparent",border:"2px solid "+u}):""!==c&&t(s).find("[data-slide-to="+i+"]").css({background:u,border:"2px solid "+u})})}else if(1==d){var l=t(this).attr("data-color");t(this).children("li").each(function(){var i=t(this).attr("data-slide-to");a==i?""!==l&&t(s).find("[data-slide-to="+a+"]").css({background:l,opacity:"1"}):""!==l&&t(s).find("[data-slide-to="+i+"]").css({background:l,opacity:"0.5"})})}}})}),t(".bs4-carousel.bs4-indicators-thumb").each(function(){t(this).children(".carousel-indicators").each(function(){if(!0===t(this)[0].hasAttribute("data-color")){var i=t(this).hasClass("carousel-thumb-border"),s=t(this).hasClass("carousel-thumb-border-bottom"),a=t(this).hasClass("carousel-thumb-border-top"),h=t(this).hasClass("carousel-thumb-border-left"),n=t(this).hasClass("carousel-thumb-border-right");if(!0===i){var o=t(this).attr("data-color");t(this).children("li").each(function(){if(""!==o){t(this).hasClass("active");t(this).css({border:"2px solid "+o})}})}else if(1==s){var d=t(this).attr("data-color");t(this).children("li").each(function(){""!==d&&(!0===t(this).hasClass("active")?t(this).css({"border-bottom":"5px solid "+d}):t(this).css({"border-bottom":"5px solid transparent"}))})}else if(1==a){var c=t(this).attr("data-color");t(this).children("li").each(function(){""!==c&&(!0===t(this).hasClass("active")?t(this).css({"border-top":"5px solid "+c}):t(this).css({"border-top":"5px solid transparent"}))})}else if(1==h){var r=t(this).attr("data-color");t(this).children("li").each(function(){""!==r&&(!0===t(this).hasClass("active")?t(this).css({"border-left":"5px solid "+r}):t(this).css({"border-left":"5px solid transparent"}))})}else if(1==n){var e=t(this).attr("data-color");t(this).children("li").each(function(){""!==e&&(!0===t(this).hasClass("active")?t(this).css({"border-right":"5px solid "+e}):t(this).css({"border-right":"5px solid transparent"}))})}}})}),t(".bs4-carousel.bs4-indicators-thumb").on("slide.bs.carousel",function(i){var s=t(this),a=i.to;t(this).children(".carousel-indicators").each(function(){if(!0===t(this)[0].hasAttribute("data-color")){var i=t(this).hasClass("carousel-thumb-border"),h=t(this).hasClass("carousel-thumb-border-bottom"),n=t(this).hasClass("carousel-thumb-border-top"),o=t(this).hasClass("carousel-thumb-border-left"),d=t(this).hasClass("carousel-thumb-border-right");if(!0===i){var c=t(this).attr("data-color");t(this).children("li").each(function(){var i=t(this).attr("data-slide-to");a==i?""!==c&&t(s).find("li[data-slide-to="+a+"]").css({border:"2px solid "+c}):""!==c&&t(s).find("[data-slide-to="+i+"]").css({border:"2px solid "+c})})}else if(1==h){var r=t(this).attr("data-color");t(this).children("li").each(function(){var i=t(this).attr("data-slide-to");a==i?""!==r&&t(s).find("li[data-slide-to="+a+"]").css({"border-bottom":"5px solid "+r}):""!==r&&t(s).find("[data-slide-to="+i+"]").css({"border-bottom":"5px solid transparent"})})}else if(1==n){var e=t(this).attr("data-color");t(this).children("li").each(function(){var i=t(this).attr("data-slide-to");a==i?""!==e&&t(s).find("li[data-slide-to="+a+"]").css({"border-top":"5px solid "+e}):""!==e&&t(s).find("[data-slide-to="+i+"]").css({"border-top":"5px solid transparent"})})}else if(1==o){var u=t(this).attr("data-color");t(this).children("li").each(function(){var i=t(this).attr("data-slide-to");a==i?""!==u&&t(s).find("li[data-slide-to="+a+"]").css({"border-left":"5px solid "+u}):""!==u&&t(s).find("[data-slide-to="+i+"]").css({"border-left":"5px solid transparent"})})}else if(1==d){var l=t(this).attr("data-color");t(this).children("li").each(function(){var i=t(this).attr("data-slide-to");a==i?""!==l&&t(s).find("li[data-slide-to="+a+"]").css({"border-right":"5px solid "+l}):""!==l&&t(s).find("[data-slide-to="+i+"]").css({"border-right":"5px solid transparent"})})}}})}),t(".bs4-carousel .bs4-carousel-control").each(function(){if(!0===t(this)[0].hasAttribute("data-color")){var i=t(this).hasClass("carousel-control-bs3"),s=t(this).hasClass("carousel-control-bs4"),a=t(this).hasClass("carousel-control-ng"),h=t(this).hasClass("carousel-control-env"),n=t(this).hasClass("carousel-control-amz"),o=t(this).hasClass("carousel-control-ab"),d=t(this).hasClass("carousel-control-yt"),c=t(this).hasClass("carousel-control-gm"),r=t(this).hasClass("carousel-control-fill"),e=t(this).hasClass("carousel-control-ip"),u=t(this).hasClass("carousel-control-border"),l=t(this).hasClass("carousel-control-border-radius"),b=t(this).hasClass("carousel-control-group-fill"),f=t(this).hasClass("carousel-control-group-border");if(!0===i){var m=t(this).attr("data-color");""!==m&&t(this).css({background:m})}else if(1==s){var g=t(this).attr("data-color");""!==g&&t(this).css({color:g})}else if(1==a){var w=t(this).attr("data-color");""!==w&&(t(this).css({background:w,opacity:"0.4"}),t(this).hover(function(){t(this).css({background:w,opacity:"0.6"})},function(){t(this).css({background:w,opacity:"0.4"})}))}else if(1==h){var p=t(this).attr("data-color");""!==p&&(t(this).css({background:"transparent"}),t(this).hover(function(){t(this).css({background:p})},function(){t(this).css({background:"transparent"})}))}else if(1==n){var v=t(this).attr("data-color");""!==v&&t(this).css({background:v,color:"#fff"})}else if(1==o){var k=t(this).attr("data-color");""!==k&&(t(this).css({background:k,opacity:"0.4"}),t(this).hover(function(){t(this).css({background:k,opacity:"0.6"})},function(){t(this).css({background:k,opacity:"0.4"})}))}else if(1==d){var C=t(this).attr("data-color");""!==C&&t(this).css({background:C})}else if(1==c){var x=t(this).attr("data-color");""!==x&&t(this).css({background:x,color:"#fff",border:"1px solid #fff"})}else if(1==r){var y=t(this).attr("data-color");""!==y&&t(this).css({background:y})}else if(1==e){var A=t(this).attr("data-color");""!==A&&(t(this).css({background:A,opacity:"0.8"}),t(this).hover(function(){t(this).css({background:A,opacity:"0.9"})},function(){t(this).css({background:A,opacity:"0.8"})}))}else if(1==u){var _=t(this).attr("data-color");""!==_&&t(this).css({color:_,border:"2px solid "+_})}else if(1==l){var T=t(this).attr("data-color");""!==T&&t(this).css({color:T,border:"2px solid "+T})}else if(1==b){var z=t(this).attr("data-color");""!==z&&(t(this).css({background:z,color:"#fff",opacity:"0.9"}),t(this).hover(function(){t(this).css({background:z,color:"#fff",opacity:"1"})},function(){t(this).css({background:z,color:"#fff",opacity:"0.9"})}))}else if(1==f){var I=t(this).attr("data-color");""!==I&&(t(this).css({background:"transparent",border:"2px solid "+I,color:I,opacity:"1"}),t(this).hover(function(){t(this).css({background:I,border:"2px solid "+I,color:"#fff",opacity:"1"})},function(){t(this).css({background:"transparent",border:"2px solid "+I,color:I,opacity:"1"})}))}}})});

/*!
 * Lightbox v2.11.1
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */

// Uses Node, AMD or browser globals to create a module.
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.lightbox = factory(root.jQuery);
    }
}(this, function ($) {

  function Lightbox(options) {
    this.album = [];
    this.currentImageIndex = void 0;
    this.init();

    // options
    this.options = $.extend({}, this.constructor.defaults);
    this.option(options);
  }

  // Descriptions of all options available on the demo site:
  // http://lokeshdhakar.com/projects/lightbox2/index.html#options
  Lightbox.defaults = {
    albumLabel: 'Image %1 of %2',
    alwaysShowNavOnTouchDevices: false,
    fadeDuration: 600,
    fitImagesInViewport: true,
    imageFadeDuration: 600,
    // maxWidth: 800,
    // maxHeight: 600,
    positionFromTop: 50,
    resizeDuration: 700,
    showImageNumberLabel: true,
    wrapAround: false,
    disableScrolling: false,
    /*
    Sanitize Title
    If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
    This will free you to add html tags, such as links, in the caption.

    If the caption data is user submitted or from some other untrusted source, then set this to true
    to prevent xss and other injection attacks.
     */
    sanitizeTitle: false
  };

  Lightbox.prototype.option = function(options) {
    $.extend(this.options, options);
  };

  Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) {
    return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);
  };

  Lightbox.prototype.init = function() {
    var self = this;
    // Both enable and build methods require the body tag to be in the DOM.
    $(document).ready(function() {
      self.enable();
      self.build();
    });
  };

  // Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
  // that contain 'lightbox'. When these are clicked, start lightbox.
  Lightbox.prototype.enable = function() {
    var self = this;
    $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) {
      self.start($(event.currentTarget));
      return false;
    });
  };

  // Build html for the lightbox and the overlay.
  // Attach event handlers to the new DOM elements. click click click
  Lightbox.prototype.build = function() {
    if ($('#lightbox').length > 0) {
        return;
    }

    var self = this;

    // The two root notes generated, #lightboxOverlay and #lightbox are given
    // tabindex attrs so they are focusable. We attach our keyboard event
    // listeners to these two elements, and not the document. Clicking anywhere
    // while Lightbox is opened will keep the focus on or inside one of these
    // two elements.
    //
    // We do this so we can prevent propogation of the Esc keypress when
    // Lightbox is open. This prevents it from intefering with other components
    // on the page below.
    //
    // Github issue: https://github.com/lokesh/lightbox2/issues/663
    $('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href="" ></a><a class="lb-next" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));

    // Cache jQuery objects
    this.$lightbox       = $('#lightbox');
    this.$overlay        = $('#lightboxOverlay');
    this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
    this.$container      = this.$lightbox.find('.lb-container');
    this.$image          = this.$lightbox.find('.lb-image');
    this.$nav            = this.$lightbox.find('.lb-nav');

    // Store css values for future lookup
    this.containerPadding = {
      top: parseInt(this.$container.css('padding-top'), 10),
      right: parseInt(this.$container.css('padding-right'), 10),
      bottom: parseInt(this.$container.css('padding-bottom'), 10),
      left: parseInt(this.$container.css('padding-left'), 10)
    };

    this.imageBorderWidth = {
      top: parseInt(this.$image.css('border-top-width'), 10),
      right: parseInt(this.$image.css('border-right-width'), 10),
      bottom: parseInt(this.$image.css('border-bottom-width'), 10),
      left: parseInt(this.$image.css('border-left-width'), 10)
    };

    // Attach event handlers to the newly minted DOM elements
    this.$overlay.hide().on('click', function() {
      self.end();
      return false;
    });

    this.$lightbox.hide().on('click', function(event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
    });

    this.$outerContainer.on('click', function(event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
      return false;
    });

    this.$lightbox.find('.lb-prev').on('click', function() {
      if (self.currentImageIndex === 0) {
        self.changeImage(self.album.length - 1);
      } else {
        self.changeImage(self.currentImageIndex - 1);
      }
      return false;
    });

    this.$lightbox.find('.lb-next').on('click', function() {
      if (self.currentImageIndex === self.album.length - 1) {
        self.changeImage(0);
      } else {
        self.changeImage(self.currentImageIndex + 1);
      }
      return false;
    });

    /*
      Show context menu for image on right-click

      There is a div containing the navigation that spans the entire image and lives above of it. If
      you right-click, you are right clicking this div and not the image. This prevents users from
      saving the image or using other context menu actions with the image.

      To fix this, when we detect the right mouse button is pressed down, but not yet clicked, we
      set pointer-events to none on the nav div. This is so that the upcoming right-click event on
      the next mouseup will bubble down to the image. Once the right-click/contextmenu event occurs
      we set the pointer events back to auto for the nav div so it can capture hover and left-click
      events as usual.
     */
    this.$nav.on('mousedown', function(event) {
      if (event.which === 3) {
        self.$nav.css('pointer-events', 'none');

        self.$lightbox.one('contextmenu', function() {
          setTimeout(function() {
              this.$nav.css('pointer-events', 'auto');
          }.bind(self), 0);
        });
      }
    });


    this.$lightbox.find('.lb-loader, .lb-close').on('click', function() {
      self.end();
      return false;
    });
  };

  // Show overlay and lightbox. If the image is part of a set, add siblings to album array.
  Lightbox.prototype.start = function($link) {
    var self    = this;
    var $window = $(window);

    $window.on('resize', $.proxy(this.sizeOverlay, this));

    this.sizeOverlay();

    this.album = [];
    var imageNumber = 0;

    function addToAlbum($link) {
      self.album.push({
        alt: $link.attr('data-alt'),
        link: $link.attr('href'),
        title: $link.attr('data-title') || $link.attr('title')
      });
    }

    // Support both data-lightbox attribute and rel attribute implementations
    var dataLightboxValue = $link.attr('data-lightbox');
    var $links;

    if (dataLightboxValue) {
      $links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
      for (var i = 0; i < $links.length; i = ++i) {
        addToAlbum($($links[i]));
        if ($links[i] === $link[0]) {
          imageNumber = i;
        }
      }
    } else {
      if ($link.attr('rel') === 'lightbox') {
        // If image is not part of a set
        addToAlbum($link);
      } else {
        // If image is part of a set
        $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
        for (var j = 0; j < $links.length; j = ++j) {
          addToAlbum($($links[j]));
          if ($links[j] === $link[0]) {
            imageNumber = j;
          }
        }
      }
    }

    // Position Lightbox
    var top  = $window.scrollTop() + this.options.positionFromTop;
    var left = $window.scrollLeft();
    this.$lightbox.css({
      top: top + 'px',
      left: left + 'px'
    }).fadeIn(this.options.fadeDuration);

    // Disable scrolling of the page while open
    if (this.options.disableScrolling) {
      $('body').addClass('lb-disable-scrolling');
    }

    this.changeImage(imageNumber);
  };

  // Hide most UI elements in preparation for the animated resizing of the lightbox.
  Lightbox.prototype.changeImage = function(imageNumber) {
    var self = this;
    var filename = this.album[imageNumber].link;
    var filetype = filename.split('.').slice(-1)[0];
    var $image = this.$lightbox.find('.lb-image');

    // Disable keyboard nav during transitions
    this.disableKeyboardNav();

    // Show loading state
    this.$overlay.fadeIn(this.options.fadeDuration);
    $('.lb-loader').fadeIn('slow');
    this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();
    this.$outerContainer.addClass('animating');

    // When image to show is preloaded, we send the width and height to sizeContainer()
    var preloader = new Image();
    preloader.onload = function() {
      var $preloader;
      var imageHeight;
      var imageWidth;
      var maxImageHeight;
      var maxImageWidth;
      var windowHeight;
      var windowWidth;

      $image.attr({
        'alt': self.album[imageNumber].alt,
        'src': filename
      });

      $preloader = $(preloader);

      $image.width(preloader.width);
      $image.height(preloader.height);
      windowWidth = $(window).width();
      windowHeight = $(window).height();

      // Calculate the max image dimensions for the current viewport.
      // Take into account the border around the image and an additional 10px gutter on each side.
      maxImageWidth  = windowWidth - self.containerPadding.left - self.containerPadding.right - self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
      maxImageHeight = windowHeight - self.containerPadding.top - self.containerPadding.bottom - self.imageBorderWidth.top - self.imageBorderWidth.bottom - self.options.positionFromTop - 70;

      /*
      SVGs that don't have width and height attributes specified are reporting width and height
      values of 0 in Firefox 47 and IE11 on Windows. To fix, we set the width and height to the max
      dimensions for the viewport rather than 0 x 0.

      https://github.com/lokesh/lightbox2/issues/552
      */

      if (filetype === 'svg') {
        if ((preloader.width === 0) || preloader.height === 0) {
          $image.width(maxImageWidth);
          $image.height(maxImageHeight);
        }
      }

      // Fit image inside the viewport.
      if (self.options.fitImagesInViewport) {

        // Check if image size is larger then maxWidth|maxHeight in settings
        if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
          maxImageWidth = self.options.maxWidth;
        }
        if (self.options.maxHeight && self.options.maxHeight < maxImageHeight) {
          maxImageHeight = self.options.maxHeight;
        }

      } else {
        maxImageWidth = self.options.maxWidth || preloader.width || maxImageWidth;
        maxImageHeight = self.options.maxHeight || preloader.height || maxImageHeight;
      }

      // Is the current image's width or height is greater than the maxImageWidth or maxImageHeight
      // option than we need to size down while maintaining the aspect ratio.
      if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
        if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
          imageWidth  = maxImageWidth;
          imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
          $image.width(imageWidth);
          $image.height(imageHeight);
        } else {
          imageHeight = maxImageHeight;
          imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
          $image.width(imageWidth);
          $image.height(imageHeight);
        }
      }
      self.sizeContainer($image.width(), $image.height());
    };

    // Preload image before showing
    preloader.src = this.album[imageNumber].link;
    this.currentImageIndex = imageNumber;
  };

  // Stretch overlay to fit the viewport
  Lightbox.prototype.sizeOverlay = function() {
    var self = this;
    /*
    We use a setTimeout 0 to pause JS execution and let the rendering catch-up.
    Why do this? If the `disableScrolling` option is set to true, a class is added to the body
    tag that disables scrolling and hides the scrollbar. We want to make sure the scrollbar is
    hidden before we measure the document width, as the presence of the scrollbar will affect the
    number.
    */
    setTimeout(function() {
      self.$overlay
        .width($(document).width())
        .height($(document).height());

    }, 0);
  };

  // Animate the size of the lightbox to fit the image we are showing
  // This method also shows the the image.
  Lightbox.prototype.sizeContainer = function(imageWidth, imageHeight) {
    var self = this;

    var oldWidth  = this.$outerContainer.outerWidth();
    var oldHeight = this.$outerContainer.outerHeight();
    var newWidth  = imageWidth + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right;
    var newHeight = imageHeight + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;

    function postResize() {
      self.$lightbox.find('.lb-dataContainer').width(newWidth);
      self.$lightbox.find('.lb-prevLink').height(newHeight);
      self.$lightbox.find('.lb-nextLink').height(newHeight);

      // Set focus on one of the two root nodes so keyboard events are captured.
      self.$overlay.focus();

      self.showImage();
    }

    if (oldWidth !== newWidth || oldHeight !== newHeight) {
      this.$outerContainer.animate({
        width: newWidth,
        height: newHeight
      }, this.options.resizeDuration, 'swing', function() {
        postResize();
      });
    } else {
      postResize();
    }
  };

  // Display the image and its details and begin preload neighboring images.
  Lightbox.prototype.showImage = function() {
    this.$lightbox.find('.lb-loader').stop(true).hide();
    this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);

    this.updateNav();
    this.updateDetails();
    this.preloadNeighboringImages();
    this.enableKeyboardNav();
  };

  // Display previous and next navigation if appropriate.
  Lightbox.prototype.updateNav = function() {
    // Check to see if the browser supports touch events. If so, we take the conservative approach
    // and assume that mouse hover events are not supported and always show prev/next navigation
    // arrows in image sets.
    var alwaysShowNav = false;
    try {
      document.createEvent('TouchEvent');
      alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
    } catch (e) {}

    this.$lightbox.find('.lb-nav').show();

    if (this.album.length > 1) {
      if (this.options.wrapAround) {
        if (alwaysShowNav) {
          this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
        }
        this.$lightbox.find('.lb-prev, .lb-next').show();
      } else {
        if (this.currentImageIndex > 0) {
          this.$lightbox.find('.lb-prev').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-prev').css('opacity', '1');
          }
        }
        if (this.currentImageIndex < this.album.length - 1) {
          this.$lightbox.find('.lb-next').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-next').css('opacity', '1');
          }
        }
      }
    }
  };

  // Display caption, image number, and closing button.
  Lightbox.prototype.updateDetails = function() {
    var self = this;

    // Enable anchor clicks in the injected caption html.
    // Thanks Nate Wright for the fix. @https://github.com/NateWr
    if (typeof this.album[this.currentImageIndex].title !== 'undefined' &&
      this.album[this.currentImageIndex].title !== '') {
      var $caption = this.$lightbox.find('.lb-caption');
      if (this.options.sanitizeTitle) {
        $caption.text(this.album[this.currentImageIndex].title);
      } else {
        $caption.html(this.album[this.currentImageIndex].title);
      }
      $caption.fadeIn('fast');
    }

    if (this.album.length > 1 && this.options.showImageNumberLabel) {
      var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
      this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');
    } else {
      this.$lightbox.find('.lb-number').hide();
    }

    this.$outerContainer.removeClass('animating');

    this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function() {
      return self.sizeOverlay();
    });
  };

  // Preload previous and next images in set.
  Lightbox.prototype.preloadNeighboringImages = function() {
    if (this.album.length > this.currentImageIndex + 1) {
      var preloadNext = new Image();
      preloadNext.src = this.album[this.currentImageIndex + 1].link;
    }
    if (this.currentImageIndex > 0) {
      var preloadPrev = new Image();
      preloadPrev.src = this.album[this.currentImageIndex - 1].link;
    }
  };

  Lightbox.prototype.enableKeyboardNav = function() {
    this.$lightbox.on('keyup.keyboard', $.proxy(this.keyboardAction, this));
    this.$overlay.on('keyup.keyboard', $.proxy(this.keyboardAction, this));
  };

  Lightbox.prototype.disableKeyboardNav = function() {
    this.$lightbox.off('.keyboard');
    this.$overlay.off('.keyboard');
  };

  Lightbox.prototype.keyboardAction = function(event) {
    var KEYCODE_ESC        = 27;
    var KEYCODE_LEFTARROW  = 37;
    var KEYCODE_RIGHTARROW = 39;

    var keycode = event.keyCode;
    if (keycode === KEYCODE_ESC) {
      // Prevent bubbling so as to not affect other components on the page.
      event.stopPropagation();
      this.end();
    } else if (keycode === KEYCODE_LEFTARROW) {
      if (this.currentImageIndex !== 0) {
        this.changeImage(this.currentImageIndex - 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(this.album.length - 1);
      }
    } else if (keycode === KEYCODE_RIGHTARROW) {
      if (this.currentImageIndex !== this.album.length - 1) {
        this.changeImage(this.currentImageIndex + 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(0);
      }
    }
  };

  // Closing time. :-(
  Lightbox.prototype.end = function() {
    this.disableKeyboardNav();
    $(window).off('resize', this.sizeOverlay);
    this.$lightbox.fadeOut(this.options.fadeDuration);
    this.$overlay.fadeOut(this.options.fadeDuration);

    if (this.options.disableScrolling) {
      $('body').removeClass('lb-disable-scrolling');
    }
  };

  return new Lightbox();
}));

/*!
 *
 * jQuery collagePlus Plugin v0.3.3
 * https://github.com/ed-lea/jquery-collagePlus
 *
 * Copyright 2012, Ed Lea twitter.com/ed_lea
 *
 * built for http://qiip.me
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 *
 */





;(function( $ ) {


    $.fn.collagePlus = function( options ) {

        return this.each(function() {

            /*
             *
             * set up vars
             *
             */

            // track row width by adding images, padding and css borders etc
            var row         = 0,
            // collect elements to be re-sized in current row
                elements    = [],
            // track the number of rows generated
                rownum = 1,
            // needed for creating some additional defaults that are actually obtained
            // from the dom, which maybe doesn't make them defaults ?!
                $this = $(this);


            // width of the area the collage will be in
            $.fn.collagePlus.defaults.albumWidth    = $this.width();
            // padding between the images. Using padding left as we assume padding is even all the way round
            $.fn.collagePlus.defaults.padding       = parseFloat( $this.css('padding-left') );
            // object that contains the images to collage
            $.fn.collagePlus.defaults.images        = $this.children();

            var settings = $.extend({}, $.fn.collagePlus.defaults, options);

            settings.images.each(
                function(index){

                    /*
                     *
                     * Cache selector
                     * Even if first child is not an image the whole sizing is based on images
                     * so where we take measurements, we take them on the images
                     *
                     */
                    var $this = $(this),
                        $img  = ($this.is("img")) ? $this : $(this).find("img");



                    /*
                     *
                     * get the current image size. Get image size in this order
                     *
                     * 1. from <img> tag
                     * 2. from data set from initial calculation
                     * 3. after loading the image and checking it's actual size
                     *
                     */
                    var w = (typeof $img.data("width") != 'undefined') ? $img.data("width") : $img.width(),
                        h = (typeof $img.data("height") != 'undefined') ? $img.data("height") : $img.height();



                    /*
                     *
                     * Get any current additional properties that may affect the width or height
                     * like css borders for example
                     *
                     */
                    var imgParams = getImgProperty($img);


                    /*
                     *
                     * store the original size for resize events
                     *
                     */
                    $img.data("width", w);
                    $img.data("height", h);



                    /*
                     *
                     * calculate the w/h based on target height
                     * this is our ideal size, but later we'll resize to make it fit
                     *
                     */
                    var nw = Math.ceil(w/h*settings.targetHeight),
                        nh = Math.ceil(settings.targetHeight);

                    /*
                     *
                     * Keep track of which images are in our row so far
                     *
                     */
                    elements.push([this, nw, nh, imgParams['w'], imgParams['h']]);

                    /*
                     *
                     * calculate the width of the element including extra properties
                     * like css borders
                     *
                     */
                    row += nw + imgParams['w'] + settings.padding;

                    /*
                     *
                     * if the current row width is wider than the parent container
                     * it's time to make a row out of our images
                     *
                     */
                    if( row > settings.albumWidth && elements.length != 0 ){

                        // call the method that calculates the final image sizes
                        // remove one set of padding as it's not needed for the last image in the row
                        resizeRow(elements, (row - settings.padding), settings, rownum);

                        // reset our row
                        delete row;
                        delete elements;
                        row         = 0;
                        elements    = [];
                        rownum      += 1;
                    }


                    /*
                     *
                     * if the images left are not enough to make a row
                     * then we'll force them to make one anyway
                     *
                     */
                    if ( settings.images.length-1 == index && elements.length != 0){
                        resizeRow(elements, row, settings, rownum);

                        // reset our row
                        delete row;
                        delete elements;
                        row         = 0;
                        elements    = [];
                        rownum      += 1;
                    }
                }
            );

        });

        function resizeRow( obj, row, settings, rownum) {

            /*
             *
             * How much bigger is this row than the available space?
             * At this point we have adjusted the images height to fit our target height
             * so the image size will already be different from the original.
             * The resizing we're doing here is to adjust it to the album width.
             *
             * We also need to change the album width (basically available space) by
             * the amount of padding and css borders for the images otherwise
             * this will skew the result.
             *
             * This is because padding and borders remain at a fixed size and we only
             * need to scale the images.
             *
             */
            var imageExtras         = (settings.padding * (obj.length - 1)) + (obj.length * obj[0][3]),
                albumWidthAdjusted  = settings.albumWidth - imageExtras,
                overPercent         = albumWidthAdjusted / (row - imageExtras),
                // start tracking our width with know values that will make up the total width
                // like borders and padding
                trackWidth          = imageExtras,
                // guess whether this is the last row in a set by checking if the width is less
                // than the parent width.
                lastRow             = (row < settings.albumWidth  ? true : false);





            /*
             * Resize the images by the above % so that they'll fit in the album space
             */
            for (var i = 0; i < obj.length; i++) {



                var $obj        = $(obj[i][0]),
                    fw          = Math.floor(obj[i][1] * overPercent),
                    fh          = Math.floor(obj[i][2] * overPercent),
                // if the element is the last in the row,
                // don't apply right hand padding (this is our flag for later)
                    isNotLast   = !!(( i < obj.length - 1 ));

                /*
                 * Checking if the user wants to not stretch the images of the last row to fit the
                 * parent element size
                 */
                if(settings.allowPartialLastRow === true && lastRow === true){
                   fw = obj[i][1];
                   fh = obj[i][2];
                }


                /*
                 *
                 * Because we use % to calculate the widths, it's possible that they are
                 * a few pixels out in which case we need to track this and adjust the
                 * last image accordingly
                 *
                 */
                trackWidth += fw;


                /*
                 *
                 * here we check if the combined images are exactly the width
                 * of the parent. If not then we add a few pixels on to make
                 * up the difference.
                 *
                 * This will alter the aspect ratio of the image slightly, but
                 * by a noticable amount.
                 *
                 * If the user doesn't want full width last row, we check for that here
                 *
                 */
                if(!isNotLast && trackWidth < settings.albumWidth){
                    if(settings.allowPartialLastRow === true && lastRow === true){
                        fw = fw;
                    }else{
                        fw = fw + (settings.albumWidth - trackWidth);
                    }
                }

                fw--;

                /*
                 *
                 * We'll be doing a few things to the image so here we cache the image selector
                 *
                 *
                 */
                var $img = ( $obj.is("img") ) ? $obj : $obj.find("img");

                /*
                 *
                 * Set the width of the image and parent element
                 * if the resized element is not an image, we apply it to the child image also
                 *
                 * We need to check if it's an image as the css borders are only measured on
                 * images. If the parent is a div, we need make the contained image smaller
                 * to accommodate the css image borders.
                 *
                 */
                $img.width(fw);
                if( !$obj.is("img") ){
                    $obj.width(fw + obj[i][3]);
                }


                /*
                 *
                 * Set the height of the image
                 * if the resized element is not an image, we apply it to the child image also
                 *
                 */
                $img.height(fh);
                if( !$obj.is("img") ){
                    $obj.height(fh + obj[i][4]);
                }


                /*
                 *
                 * Apply the css extras like padding
                 *
                 */
                applyModifications($obj, isNotLast, settings);


                /*
                 *
                 * Assign the effect to show the image
                 * Default effect is using jquery and not CSS3 to support more browsers
                 * Wait until the image is loaded to do this
                 *
                 */

                $img
                    .one('load', function (target) {
                    return function(){
                        if( settings.effect == 'default'){
                            target.animate({opacity: '1'},{duration: settings.fadeSpeed});
                        } else {
                            if(settings.direction == 'vertical'){
                                var sequence = (rownum <= 10  ? rownum : 10);
                            } else {
                                var sequence = (i <= 9  ? i+1 : 10);
                            }
                            /* Remove old classes with the "effect-" name */
                            target.removeClass(function (index, css) {
                                return (css.match(/\beffect-\S+/g) || []).join(' ');
                            });
                            target.addClass(settings.effect);
                            target.addClass("effect-duration-" + sequence);
                        }
                    }
                    }($obj))
                    /*
                     * fix for cached or loaded images
                     * For example if images are loaded in a "window.load" call we need to trigger
                     * the load call again
                     */
                    .each(function() {
                            if(this.complete) $(this).trigger('load');
                    });

        }





        }

        /*
         *
         * This private function applies the required css to space the image gallery
         * It applies it to the parent element so if an image is wrapped in a <div> then
         * the css is applied to the <div>
         *
         */
        function applyModifications($obj, isNotLast, settings) {
            var css = {
                    // Applying padding to element for the grid gap effect
                    'margin-bottom'     : settings.padding + "px",
                    'margin-right'      : (isNotLast) ? settings.padding + "px" : "0px",
                    // Set it to an inline-block by default so that it doesn't break the row
                    'display'           : settings.display,
                    // Set vertical alignment otherwise you get 4px extra padding
                    'vertical-align'    : "bottom",
                    // Hide the overflow to hide the caption
                    'overflow'          : "hidden"
                };

            return $obj.css(css);
        }


        /*
         *
         * This private function calculates any extras like padding, border associated
         * with the image that will impact on the width calculations
         *
         */
        function getImgProperty( img )
        {
            $img = $(img);
            var params =  new Array();
            params["w"] = (parseFloat($img.css("border-left-width")) + parseFloat($img.css("border-right-width")));
            params["h"] = (parseFloat($img.css("border-top-width")) + parseFloat($img.css("border-bottom-width")));
            return params;
        }

    };

    $.fn.collagePlus.defaults = {
        // the ideal height you want your images to be
        'targetHeight'          : 400,
        // how quickly you want images to fade in once ready can be in ms, "slow" or "fast"
        'fadeSpeed'             : "fast",
        // how the resized block should be displayed. inline-block by default so that it doesn't break the row
        'display'               : "inline-block",
        // which effect you want to use for revealing the images (note CSS3 browsers only),
        'effect'                : 'default',
        // effect delays can either be applied per row to give the impression of descending appearance
        // or horizontally, so more like a flock of birds changing direction
        'direction'             : 'vertical',
        // Sometimes there is just one image on the last row and it gets blown up to a huge size to fit the
        // parent div width. To stop this behaviour, set this to true
        'allowPartialLastRow'   : false
    };

})( jQuery );
/**
 * zoom.js - It's the best way to zoom an image
 * @version v0.0.2
 * @link https://github.com/fat/zoom.js
 * @license MIT
 */

+function ($) { "use strict";

  /**
   * The zoom service
   */
  function ZoomService () {
    this._activeZoom            =
    this._initialScrollPosition =
    this._initialTouchPosition  =
    this._touchMoveListener     = null

    this._$document = $(document)
    this._$window   = $(window)
    this._$body     = $(document.body)

    this._boundClick = $.proxy(this._clickHandler, this)
  }

  ZoomService.prototype.listen = function () {
    this._$body.on('click', '[data-action="zoom"]', $.proxy(this._zoom, this))
  }

  ZoomService.prototype._zoom = function (e) {
    var target = e.target

    if (!target || target.tagName != 'IMG') return

    if (this._$body.hasClass('zoom-overlay-open')) return

    if (e.metaKey || e.ctrlKey) {
      return window.open((e.target.getAttribute('data-original') || e.target.src), '_blank')
    }

    if (target.width >= ($(window).width() - Zoom.OFFSET)) return

    this._activeZoomClose(true)

    this._activeZoom = new Zoom(target)
    this._activeZoom.zoomImage()

    // todo(fat): probably worth throttling this
    this._$window.on('scroll.zoom', $.proxy(this._scrollHandler, this))

    this._$document.on('keyup.zoom', $.proxy(this._keyHandler, this))
    this._$document.on('touchstart.zoom', $.proxy(this._touchStart, this))

    // we use a capturing phase here to prevent unintended js events
    // sadly no useCapture in jquery api (http://bugs.jquery.com/ticket/14953)
    if (document.addEventListener) {
      document.addEventListener('click', this._boundClick, true)
    } else {
      document.attachEvent('onclick', this._boundClick, true)
    }

    if ('bubbles' in e) {
      if (e.bubbles) e.stopPropagation()
    } else {
      // Internet Explorer before version 9
      e.cancelBubble = true
    }
  }

  ZoomService.prototype._activeZoomClose = function (forceDispose) {
    if (!this._activeZoom) return

    if (forceDispose) {
      this._activeZoom.dispose()
    } else {
      this._activeZoom.close()
    }

    this._$window.off('.zoom')
    this._$document.off('.zoom')

    document.removeEventListener('click', this._boundClick, true)

    this._activeZoom = null
  }

  ZoomService.prototype._scrollHandler = function (e) {
    if (this._initialScrollPosition === null) this._initialScrollPosition = $(window).scrollTop()
    var deltaY = this._initialScrollPosition - $(window).scrollTop()
    if (Math.abs(deltaY) >= 40) this._activeZoomClose()
  }

  ZoomService.prototype._keyHandler = function (e) {
    if (e.keyCode == 27) this._activeZoomClose()
  }

  ZoomService.prototype._clickHandler = function (e) {
    if (e.preventDefault) e.preventDefault()
    else event.returnValue = false

    if ('bubbles' in e) {
      if (e.bubbles) e.stopPropagation()
    } else {
      // Internet Explorer before version 9
      e.cancelBubble = true
    }

    this._activeZoomClose()
  }

  ZoomService.prototype._touchStart = function (e) {
    this._initialTouchPosition = e.touches[0].pageY
    $(e.target).on('touchmove.zoom', $.proxy(this._touchMove, this))
  }

  ZoomService.prototype._touchMove = function (e) {
    if (Math.abs(e.touches[0].pageY - this._initialTouchPosition) > 10) {
      this._activeZoomClose()
      $(e.target).off('touchmove.zoom')
    }
  }


  /**
   * The zoom object
   */
  function Zoom (img) {
    this._fullHeight      =
    this._fullWidth       =
    this._overlay         =
    this._targetImageWrap = null

    this._targetImage = img

    this._$body = $(document.body)
  }

  Zoom.OFFSET = 80
  Zoom._MAX_WIDTH = 2560
  Zoom._MAX_HEIGHT = 4096

  Zoom.prototype.zoomImage = function () {
    var img = document.createElement('img')
    img.onload = $.proxy(function () {
      this._fullHeight = Number(img.height)
      this._fullWidth = Number(img.width)
      this._zoomOriginal()
    }, this)
    img.src = this._targetImage.src
  }

  Zoom.prototype._zoomOriginal = function () {
    this._targetImageWrap           = document.createElement('div')
    this._targetImageWrap.className = 'zoom-img-wrap'

    this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage)
    this._targetImageWrap.appendChild(this._targetImage)

    $(this._targetImage)
      .addClass('zoom-img')
      .attr('data-action', 'zoom-out')

    this._overlay           = document.createElement('div')
    this._overlay.className = 'zoom-overlay'

    document.body.appendChild(this._overlay)

    this._calculateZoom()
    this._triggerAnimation()
  }

  Zoom.prototype._calculateZoom = function () {
    this._targetImage.offsetWidth // repaint before animating

    var originalFullImageWidth  = this._fullWidth
    var originalFullImageHeight = this._fullHeight

    var scrollTop = $(window).scrollTop()

    var maxScaleFactor = originalFullImageWidth / this._targetImage.width

    var viewportHeight = ($(window).height() - Zoom.OFFSET)
    var viewportWidth  = ($(window).width() - Zoom.OFFSET)

    var imageAspectRatio    = originalFullImageWidth / originalFullImageHeight
    var viewportAspectRatio = viewportWidth / viewportHeight

    if (originalFullImageWidth < viewportWidth && originalFullImageHeight < viewportHeight) {
      this._imgScaleFactor = maxScaleFactor

    } else if (imageAspectRatio < viewportAspectRatio) {
      this._imgScaleFactor = (viewportHeight / originalFullImageHeight) * maxScaleFactor

    } else {
      this._imgScaleFactor = (viewportWidth / originalFullImageWidth) * maxScaleFactor
    }
  }

  Zoom.prototype._triggerAnimation = function () {
    this._targetImage.offsetWidth // repaint before animating

    var imageOffset = $(this._targetImage).offset()
    var scrollTop   = $(window).scrollTop()

    var viewportY = scrollTop + ($(window).height() / 2)
    var viewportX = ($(window).width() / 2)

    var imageCenterY = imageOffset.top + (this._targetImage.height / 2)
    var imageCenterX = imageOffset.left + (this._targetImage.width / 2)

    this._translateY = Math.round(viewportY - imageCenterY)
    this._translateX = Math.round(viewportX - imageCenterX)

    var targetTransform = 'scale(' + this._imgScaleFactor + ')'
    var imageWrapTransform = 'translate(' + this._translateX + 'px, ' + this._translateY + 'px)'

    if ($.support.transition) {
      imageWrapTransform += ' translateZ(0)'
    }

    $(this._targetImage)
      .css({
        '-webkit-transform': targetTransform,
            '-ms-transform': targetTransform,
                'transform': targetTransform
      })

    $(this._targetImageWrap)
      .css({
        '-webkit-transform': imageWrapTransform,
            '-ms-transform': imageWrapTransform,
                'transform': imageWrapTransform
      })

    this._$body.addClass('zoom-overlay-open')
  }

  Zoom.prototype.close = function () {
    this._$body
      .removeClass('zoom-overlay-open')
      .addClass('zoom-overlay-transitioning')

    // we use setStyle here so that the correct vender prefix for transform is used
    $(this._targetImage)
      .css({
        '-webkit-transform': '',
            '-ms-transform': '',
                'transform': ''
      })

    $(this._targetImageWrap)
      .css({
        '-webkit-transform': '',
            '-ms-transform': '',
                'transform': ''
      })

    if (!$.support.transition) {
      return this.dispose()
    }

    $(this._targetImage)
      .one($.support.transition.end, $.proxy(this.dispose, this))
      .emulateTransitionEnd(300)
  }

  Zoom.prototype.dispose = function () {
    if (this._targetImageWrap && this._targetImageWrap.parentNode) {
      $(this._targetImage)
        .removeClass('zoom-img')
        .attr('data-action', 'zoom')

      this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap)
      this._overlay.parentNode.removeChild(this._overlay)

      this._$body.removeClass('zoom-overlay-transitioning')
    }
  }

  // wait for dom ready (incase script included before body)
  $(function () {
    new ZoomService().listen()
  })

}(jQuery)
$(function() {

	// Automatically add Zoom interaction
	$('article.content img').attr('data-action', 'zoom');

	// Make captions from Alt tags
	$('img.captioned').each(function() {
		var caption = $(this).attr('alt') || false;
		if (caption) {
			$(this).after('<p class="caption">' + caption + '</p>');
		}
	});

	// Auto focus on the giant search box
	var search = $('input.giant.search');
	search.focus().val(search.val());

	// Fire up that gallery
	$(window).on('load', function () {
		collage();
	});

	// Anima

	$('#nav-main .search').focus(function() {
		$(this).addClass('grow');
	}).blur(function() {
		$(this).removeClass('grow');
	});
});

function collage() {
	$('.gallery-images').collagePlus({
		'fadeSpeed' : 300
    });
}

// Reinitialize the gallery on browser resize.
var resizeTimer = null;
$(window).bind('resize', function() {
    $('.gallery-images img').css("opacity", 0);

    if (resizeTimer) clearTimeout(resizeTimer);

    resizeTimer = setTimeout(collage, 200);
});

//# sourceMappingURL=woodlore.js.map
