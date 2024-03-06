function Od(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Td(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Iu={exports:{}},Qo={},Mu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=Symbol.for("react.element"),Rd=Symbol.for("react.portal"),zd=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),Id=Symbol.for("react.profiler"),Md=Symbol.for("react.provider"),Dd=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),Ad=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),ha=Symbol.iterator;function Bd(e){return e===null||typeof e!="object"?null:(e=ha&&e[ha]||e["@@iterator"],typeof e=="function"?e:null)}var Du={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ju=Object.assign,Fu={};function In(e,t,n){this.props=e,this.context=t,this.refs=Fu,this.updater=n||Du}In.prototype.isReactComponent={};In.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};In.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Au(){}Au.prototype=In.prototype;function us(e,t,n){this.props=e,this.context=t,this.refs=Fu,this.updater=n||Du}var cs=us.prototype=new Au;cs.constructor=us;ju(cs,In.prototype);cs.isPureReactComponent=!0;var va=Array.isArray,Uu=Object.prototype.hasOwnProperty,fs={current:null},Bu={key:!0,ref:!0,__self:!0,__source:!0};function Vu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Uu.call(t,r)&&!Bu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Pr,type:e,key:i,ref:l,props:o,_owner:fs.current}}function Vd(e,t){return{$$typeof:Pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ds(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pr}function Wd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ya=/\/+/g;function zi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wd(""+e.key):t.toString(36)}function ro(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Pr:case Rd:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+zi(l,0):r,va(o)?(n="",e!=null&&(n=e.replace(ya,"$&/")+"/"),ro(o,t,n,"",function(u){return u})):o!=null&&(ds(o)&&(o=Vd(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ya,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",va(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+zi(i,s);l+=ro(i,t,n,a,o)}else if(a=Bd(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+zi(i,s++),l+=ro(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Mr(e,t,n){if(e==null)return e;var r=[],o=0;return ro(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Hd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},oo={transition:null},Qd={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:oo,ReactCurrentOwner:fs};I.Children={map:Mr,forEach:function(e,t,n){Mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mr(e,function(){t++}),t},toArray:function(e){return Mr(e,function(t){return t})||[]},only:function(e){if(!ds(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=In;I.Fragment=zd;I.Profiler=Id;I.PureComponent=us;I.StrictMode=Ld;I.Suspense=Fd;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qd;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ju({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=fs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Uu.call(t,a)&&!Bu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Pr,type:e.type,key:o,ref:i,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:Dd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Md,_context:e},e.Consumer=e};I.createElement=Vu;I.createFactory=function(e){var t=Vu.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:jd,render:e}};I.isValidElement=ds;I.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:Hd}};I.memo=function(e,t){return{$$typeof:Ad,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=oo.transition;oo.transition={};try{e()}finally{oo.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return xe.current.useCallback(e,t)};I.useContext=function(e){return xe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};I.useEffect=function(e,t){return xe.current.useEffect(e,t)};I.useId=function(){return xe.current.useId()};I.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return xe.current.useMemo(e,t)};I.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};I.useRef=function(e){return xe.current.useRef(e)};I.useState=function(e){return xe.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return xe.current.useTransition()};I.version="18.2.0";Mu.exports=I;var x=Mu.exports;const wo=Td(x),sl=Od({__proto__:null,default:wo},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=x,Kd=Symbol.for("react.element"),Xd=Symbol.for("react.fragment"),bd=Object.prototype.hasOwnProperty,Gd=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zd={key:!0,ref:!0,__self:!0,__source:!0};function Wu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)bd.call(t,r)&&!Zd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Kd,type:e,key:i,ref:l,props:o,_owner:Gd.current}}Qo.Fragment=Xd;Qo.jsx=Wu;Qo.jsxs=Wu;Iu.exports=Qo;var N=Iu.exports,al={},Hu={exports:{}},Me={},Qu={exports:{}},Yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,z){var _=P.length;P.push(z);e:for(;0<_;){var M=_-1>>>1,A=P[M];if(0<o(A,z))P[M]=z,P[_]=A,_=M;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var z=P[0],_=P.pop();if(_!==z){P[0]=_;e:for(var M=0,A=P.length,oe=A>>>1;M<oe;){var ke=2*(M+1)-1,Ri=P[ke],Vt=ke+1,Ir=P[Vt];if(0>o(Ri,_))Vt<A&&0>o(Ir,Ri)?(P[M]=Ir,P[Vt]=_,M=Vt):(P[M]=Ri,P[ke]=_,M=ke);else if(Vt<A&&0>o(Ir,_))P[M]=Ir,P[Vt]=_,M=Vt;else break e}}return z}function o(P,z){var _=P.sortIndex-z.sortIndex;return _!==0?_:P.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],f=1,m=null,h=3,v=!1,g=!1,y=!1,R=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=P)r(u),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(u)}}function w(P){if(y=!1,p(P),!g)if(n(a)!==null)g=!0,xt(C);else{var z=n(u);z!==null&&rn(w,z.startTime-P)}}function C(P,z){g=!1,y&&(y=!1,d(T),T=-1),v=!0;var _=h;try{for(p(z),m=n(a);m!==null&&(!(m.expirationTime>z)||P&&!K());){var M=m.callback;if(typeof M=="function"){m.callback=null,h=m.priorityLevel;var A=M(m.expirationTime<=z);z=e.unstable_now(),typeof A=="function"?m.callback=A:m===n(a)&&r(a),p(z)}else r(a);m=n(a)}if(m!==null)var oe=!0;else{var ke=n(u);ke!==null&&rn(w,ke.startTime-z),oe=!1}return oe}finally{m=null,h=_,v=!1}}var $=!1,k=null,T=-1,W=5,L=-1;function K(){return!(e.unstable_now()-L<W)}function Oe(){if(k!==null){var P=e.unstable_now();L=P;var z=!0;try{z=k(!0,P)}finally{z?Qe():($=!1,k=null)}}else $=!1}var Qe;if(typeof c=="function")Qe=function(){c(Oe)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,Fn=wt.port2;wt.port1.onmessage=Oe,Qe=function(){Fn.postMessage(null)}}else Qe=function(){R(Oe,0)};function xt(P){k=P,$||($=!0,Qe())}function rn(P,z){T=R(function(){P(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,xt(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var _=h;h=z;try{return P()}finally{h=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var _=h;h=P;try{return z()}finally{h=_}},e.unstable_scheduleCallback=function(P,z,_){var M=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?M+_:M):_=M,P){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=_+A,P={id:f++,callback:z,priorityLevel:P,startTime:_,expirationTime:A,sortIndex:-1},_>M?(P.sortIndex=_,t(u,P),n(a)===null&&P===n(u)&&(y?(d(T),T=-1):y=!0,rn(w,_-M))):(P.sortIndex=A,t(a,P),g||v||(g=!0,xt(C))),P},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(P){var z=h;return function(){var _=h;h=z;try{return P.apply(this,arguments)}finally{h=_}}}})(Yu);Qu.exports=Yu;var Jd=Qu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ku=x,Ie=Jd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xu=new Set,sr={};function tn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(sr[e]=t,e=0;e<t.length;e++)Xu.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=Object.prototype.hasOwnProperty,qd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ga={},wa={};function e0(e){return ul.call(wa,e)?!0:ul.call(ga,e)?!1:qd.test(e)?wa[e]=!0:(ga[e]=!0,!1)}function t0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function n0(e,t,n,r){if(t===null||typeof t>"u"||t0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var ps=/[\-:]([a-z])/g;function ms(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ps,ms);de[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ps,ms);de[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ps,ms);de[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function hs(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(n0(t,n,o,r)&&(n=null),r||o===null?e0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=Ku.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dr=Symbol.for("react.element"),ln=Symbol.for("react.portal"),sn=Symbol.for("react.fragment"),vs=Symbol.for("react.strict_mode"),cl=Symbol.for("react.profiler"),bu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),ys=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),dl=Symbol.for("react.suspense_list"),gs=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Zu=Symbol.for("react.offscreen"),xa=Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=xa&&e[xa]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Li;function Xn(e){if(Li===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Li=t&&t[1]||""}return`
`+Li+e}var Ii=!1;function Mi(e,t){if(!e||Ii)return"";Ii=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Ii=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xn(e):""}function r0(e){switch(e.tag){case 5:return Xn(e.type);case 16:return Xn("Lazy");case 13:return Xn("Suspense");case 19:return Xn("SuspenseList");case 0:case 2:case 15:return e=Mi(e.type,!1),e;case 11:return e=Mi(e.type.render,!1),e;case 1:return e=Mi(e.type,!0),e;default:return""}}function pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sn:return"Fragment";case ln:return"Portal";case cl:return"Profiler";case vs:return"StrictMode";case fl:return"Suspense";case dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gu:return(e.displayName||"Context")+".Consumer";case bu:return(e._context.displayName||"Context")+".Provider";case ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gs:return t=e.displayName||null,t!==null?t:pl(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return pl(e(t))}catch{}}return null}function o0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pl(t);case 8:return t===vs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ju(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function i0(e){var t=Ju(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){e._valueTracker||(e._valueTracker=i0(e))}function qu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ju(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ec(e,t){t=t.checked,t!=null&&hs(e,"checked",t,!1)}function hl(e,t){ec(e,t);var n=jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&vl(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ka(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vl(e,t,n){(t!=="number"||xo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bn=Array.isArray;function gn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ea(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(bn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jt(n)}}function tc(e,t){var n=jt(t.value),r=jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fr,rc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l0=["Webkit","ms","Moz","O"];Object.keys(Jn).forEach(function(e){l0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jn[t]=Jn[e]})});function oc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jn.hasOwnProperty(e)&&Jn[e]?(""+t).trim():t+"px"}function ic(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=oc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var s0=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(s0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sl=null;function ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kl=null,wn=null,xn=null;function $a(e){if(e=Rr(e)){if(typeof kl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Go(t),kl(e.stateNode,e.type,t))}}function lc(e){wn?xn?xn.push(e):xn=[e]:wn=e}function sc(){if(wn){var e=wn,t=xn;if(xn=wn=null,$a(e),t)for(e=0;e<t.length;e++)$a(t[e])}}function ac(e,t){return e(t)}function uc(){}var Di=!1;function cc(e,t,n){if(Di)return e(t,n);Di=!0;try{return ac(e,t,n)}finally{Di=!1,(wn!==null||xn!==null)&&(uc(),sc())}}function ur(e,t){var n=e.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var El=!1;if(mt)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){El=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{El=!1}function a0(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var qn=!1,So=null,ko=!1,Cl=null,u0={onError:function(e){qn=!0,So=e}};function c0(e,t,n,r,o,i,l,s,a){qn=!1,So=null,a0.apply(u0,arguments)}function f0(e,t,n,r,o,i,l,s,a){if(c0.apply(this,arguments),qn){if(qn){var u=So;qn=!1,So=null}else throw Error(S(198));ko||(ko=!0,Cl=u)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Na(e){if(nn(e)!==e)throw Error(S(188))}function d0(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Na(o),e;if(i===r)return Na(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function dc(e){return e=d0(e),e!==null?pc(e):null}function pc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pc(e);if(t!==null)return t;e=e.sibling}return null}var mc=Ie.unstable_scheduleCallback,_a=Ie.unstable_cancelCallback,p0=Ie.unstable_shouldYield,m0=Ie.unstable_requestPaint,q=Ie.unstable_now,h0=Ie.unstable_getCurrentPriorityLevel,xs=Ie.unstable_ImmediatePriority,hc=Ie.unstable_UserBlockingPriority,Eo=Ie.unstable_NormalPriority,v0=Ie.unstable_LowPriority,vc=Ie.unstable_IdlePriority,Yo=null,lt=null;function y0(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:x0,g0=Math.log,w0=Math.LN2;function x0(e){return e>>>=0,e===0?32:31-(g0(e)/w0|0)|0}var Ar=64,Ur=4194304;function Gn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Co(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Gn(s):(i&=l,i!==0&&(r=Gn(i)))}else l=n&~o,l!==0?r=Gn(l):i!==0&&(r=Gn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),o=1<<n,r|=e[n],t&=~o;return r}function S0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ze(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=S0(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function $l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yc(){var e=Ar;return Ar<<=1,!(Ar&4194240)&&(Ar=64),e}function ji(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function E0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ze(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ss(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function gc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wc,ks,xc,Sc,kc,Nl=!1,Br=[],Pt=null,Ot=null,Tt=null,cr=new Map,fr=new Map,Ct=[],C0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pa(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":cr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(t.pointerId)}}function Bn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Rr(t),t!==null&&ks(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function $0(e,t,n,r,o){switch(t){case"focusin":return Pt=Bn(Pt,e,t,n,r,o),!0;case"dragenter":return Ot=Bn(Ot,e,t,n,r,o),!0;case"mouseover":return Tt=Bn(Tt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return cr.set(i,Bn(cr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,fr.set(i,Bn(fr.get(i)||null,e,t,n,r,o)),!0}return!1}function Ec(e){var t=Qt(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=fc(n),t!==null){e.blockedOn=t,kc(e.priority,function(){xc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function io(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sl=r,n.target.dispatchEvent(r),Sl=null}else return t=Rr(n),t!==null&&ks(t),e.blockedOn=n,!1;t.shift()}return!0}function Oa(e,t,n){io(e)&&n.delete(t)}function N0(){Nl=!1,Pt!==null&&io(Pt)&&(Pt=null),Ot!==null&&io(Ot)&&(Ot=null),Tt!==null&&io(Tt)&&(Tt=null),cr.forEach(Oa),fr.forEach(Oa)}function Vn(e,t){e.blockedOn===t&&(e.blockedOn=null,Nl||(Nl=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,N0)))}function dr(e){function t(o){return Vn(o,e)}if(0<Br.length){Vn(Br[0],e);for(var n=1;n<Br.length;n++){var r=Br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Vn(Pt,e),Ot!==null&&Vn(Ot,e),Tt!==null&&Vn(Tt,e),cr.forEach(t),fr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)Ec(n),n.blockedOn===null&&Ct.shift()}var Sn=gt.ReactCurrentBatchConfig,$o=!0;function _0(e,t,n,r){var o=U,i=Sn.transition;Sn.transition=null;try{U=1,Es(e,t,n,r)}finally{U=o,Sn.transition=i}}function P0(e,t,n,r){var o=U,i=Sn.transition;Sn.transition=null;try{U=4,Es(e,t,n,r)}finally{U=o,Sn.transition=i}}function Es(e,t,n,r){if($o){var o=_l(e,t,n,r);if(o===null)Ki(e,t,r,No,n),Pa(e,r);else if($0(o,e,t,n,r))r.stopPropagation();else if(Pa(e,r),t&4&&-1<C0.indexOf(e)){for(;o!==null;){var i=Rr(o);if(i!==null&&wc(i),i=_l(e,t,n,r),i===null&&Ki(e,t,r,No,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ki(e,t,r,null,n)}}var No=null;function _l(e,t,n,r){if(No=null,e=ws(r),e=Qt(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return No=e,null}function Cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h0()){case xs:return 1;case hc:return 4;case Eo:case v0:return 16;case vc:return 536870912;default:return 16}default:return 16}}var Nt=null,Cs=null,lo=null;function $c(){if(lo)return lo;var e,t=Cs,n=t.length,r,o="value"in Nt?Nt.value:Nt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return lo=o.slice(e,1<r?1-r:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vr(){return!0}function Ta(){return!1}function De(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vr:Ta,this.isPropagationStopped=Ta,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},isPersistent:Vr}),t}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=De(Mn),Tr=Z({},Mn,{view:0,detail:0}),O0=De(Tr),Fi,Ai,Wn,Ko=Z({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(Fi=e.screenX-Wn.screenX,Ai=e.screenY-Wn.screenY):Ai=Fi=0,Wn=e),Fi)},movementY:function(e){return"movementY"in e?e.movementY:Ai}}),Ra=De(Ko),T0=Z({},Ko,{dataTransfer:0}),R0=De(T0),z0=Z({},Tr,{relatedTarget:0}),Ui=De(z0),L0=Z({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),I0=De(L0),M0=Z({},Mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),D0=De(M0),j0=Z({},Mn,{data:0}),za=De(j0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=U0[e])?!!t[e]:!1}function Ns(){return B0}var V0=Z({},Tr,{key:function(e){if(e.key){var t=F0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?A0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W0=De(V0),H0=Z({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),La=De(H0),Q0=Z({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),Y0=De(Q0),K0=Z({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=De(K0),b0=Z({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=De(b0),Z0=[9,13,27,32],_s=mt&&"CompositionEvent"in window,er=null;mt&&"documentMode"in document&&(er=document.documentMode);var J0=mt&&"TextEvent"in window&&!er,Nc=mt&&(!_s||er&&8<er&&11>=er),Ia=" ",Ma=!1;function _c(e,t){switch(e){case"keyup":return Z0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var an=!1;function q0(e,t){switch(e){case"compositionend":return Pc(t);case"keypress":return t.which!==32?null:(Ma=!0,Ia);case"textInput":return e=t.data,e===Ia&&Ma?null:e;default:return null}}function ep(e,t){if(an)return e==="compositionend"||!_s&&_c(e,t)?(e=$c(),lo=Cs=Nt=null,an=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nc&&t.locale!=="ko"?null:t.data;default:return null}}var tp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tp[e.type]:t==="textarea"}function Oc(e,t,n,r){lc(r),t=_o(t,"onChange"),0<t.length&&(n=new $s("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var tr=null,pr=null;function np(e){Uc(e,0)}function Xo(e){var t=fn(e);if(qu(t))return e}function rp(e,t){if(e==="change")return t}var Tc=!1;if(mt){var Bi;if(mt){var Vi="oninput"in document;if(!Vi){var ja=document.createElement("div");ja.setAttribute("oninput","return;"),Vi=typeof ja.oninput=="function"}Bi=Vi}else Bi=!1;Tc=Bi&&(!document.documentMode||9<document.documentMode)}function Fa(){tr&&(tr.detachEvent("onpropertychange",Rc),pr=tr=null)}function Rc(e){if(e.propertyName==="value"&&Xo(pr)){var t=[];Oc(t,pr,e,ws(e)),cc(np,t)}}function op(e,t,n){e==="focusin"?(Fa(),tr=t,pr=n,tr.attachEvent("onpropertychange",Rc)):e==="focusout"&&Fa()}function ip(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xo(pr)}function lp(e,t){if(e==="click")return Xo(t)}function sp(e,t){if(e==="input"||e==="change")return Xo(t)}function ap(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:ap;function mr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ul.call(t,o)||!qe(e[o],t[o]))return!1}return!0}function Aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ua(e,t){var n=Aa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Aa(n)}}function zc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lc(){for(var e=window,t=xo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xo(e.document)}return t}function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function up(e){var t=Lc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zc(n.ownerDocument.documentElement,n)){if(r!==null&&Ps(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ua(n,i);var l=Ua(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cp=mt&&"documentMode"in document&&11>=document.documentMode,un=null,Pl=null,nr=null,Ol=!1;function Ba(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ol||un==null||un!==xo(r)||(r=un,"selectionStart"in r&&Ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&mr(nr,r)||(nr=r,r=_o(Pl,"onSelect"),0<r.length&&(t=new $s("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=un)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cn={animationend:Wr("Animation","AnimationEnd"),animationiteration:Wr("Animation","AnimationIteration"),animationstart:Wr("Animation","AnimationStart"),transitionend:Wr("Transition","TransitionEnd")},Wi={},Ic={};mt&&(Ic=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);function bo(e){if(Wi[e])return Wi[e];if(!cn[e])return e;var t=cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ic)return Wi[e]=t[n];return e}var Mc=bo("animationend"),Dc=bo("animationiteration"),jc=bo("animationstart"),Fc=bo("transitionend"),Ac=new Map,Va="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){Ac.set(e,t),tn(t,[e])}for(var Hi=0;Hi<Va.length;Hi++){var Qi=Va[Hi],fp=Qi.toLowerCase(),dp=Qi[0].toUpperCase()+Qi.slice(1);At(fp,"on"+dp)}At(Mc,"onAnimationEnd");At(Dc,"onAnimationIteration");At(jc,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(Fc,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));function Wa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,f0(r,t,void 0,e),e.currentTarget=null}function Uc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Wa(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Wa(o,s,u),i=a}}}if(ko)throw e=Cl,ko=!1,Cl=null,e}function Q(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(Bc(t,e,2,!1),n.add(r))}function Yi(e,t,n){var r=0;t&&(r|=4),Bc(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function hr(e){if(!e[Hr]){e[Hr]=!0,Xu.forEach(function(n){n!=="selectionchange"&&(pp.has(n)||Yi(n,!1,e),Yi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,Yi("selectionchange",!1,t))}}function Bc(e,t,n,r){switch(Cc(t)){case 1:var o=_0;break;case 4:o=P0;break;default:o=Es}n=o.bind(null,t,n,e),o=void 0,!El||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ki(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Qt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}cc(function(){var u=i,f=ws(n),m=[];e:{var h=Ac.get(e);if(h!==void 0){var v=$s,g=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":v=W0;break;case"focusin":g="focus",v=Ui;break;case"focusout":g="blur",v=Ui;break;case"beforeblur":case"afterblur":v=Ui;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=R0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Y0;break;case Mc:case Dc:case jc:v=I0;break;case Fc:v=X0;break;case"scroll":v=O0;break;case"wheel":v=G0;break;case"copy":case"cut":case"paste":v=D0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=La}var y=(t&4)!==0,R=!y&&e==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,d!==null&&(w=ur(c,d),w!=null&&y.push(vr(c,w,p)))),R)break;c=c.return}0<y.length&&(h=new v(h,g,null,n,f),m.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Sl&&(g=n.relatedTarget||n.fromElement)&&(Qt(g)||g[ht]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Qt(g):null,g!==null&&(R=nn(g),g!==R||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(y=Ra,w="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=La,w="onPointerLeave",d="onPointerEnter",c="pointer"),R=v==null?h:fn(v),p=g==null?h:fn(g),h=new y(w,c+"leave",v,n,f),h.target=R,h.relatedTarget=p,w=null,Qt(f)===u&&(y=new y(d,c+"enter",g,n,f),y.target=p,y.relatedTarget=R,w=y),R=w,v&&g)t:{for(y=v,d=g,c=0,p=y;p;p=on(p))c++;for(p=0,w=d;w;w=on(w))p++;for(;0<c-p;)y=on(y),c--;for(;0<p-c;)d=on(d),p--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break t;y=on(y),d=on(d)}y=null}else y=null;v!==null&&Ha(m,h,v,y,!1),g!==null&&R!==null&&Ha(m,R,g,y,!0)}}e:{if(h=u?fn(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var C=rp;else if(Da(h))if(Tc)C=sp;else{C=ip;var $=op}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=lp);if(C&&(C=C(e,u))){Oc(m,C,n,f);break e}$&&$(e,h,u),e==="focusout"&&($=h._wrapperState)&&$.controlled&&h.type==="number"&&vl(h,"number",h.value)}switch($=u?fn(u):window,e){case"focusin":(Da($)||$.contentEditable==="true")&&(un=$,Pl=u,nr=null);break;case"focusout":nr=Pl=un=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,Ba(m,n,f);break;case"selectionchange":if(cp)break;case"keydown":case"keyup":Ba(m,n,f)}var k;if(_s)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else an?_c(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Nc&&n.locale!=="ko"&&(an||T!=="onCompositionStart"?T==="onCompositionEnd"&&an&&(k=$c()):(Nt=f,Cs="value"in Nt?Nt.value:Nt.textContent,an=!0)),$=_o(u,T),0<$.length&&(T=new za(T,e,null,n,f),m.push({event:T,listeners:$}),k?T.data=k:(k=Pc(n),k!==null&&(T.data=k)))),(k=J0?q0(e,n):ep(e,n))&&(u=_o(u,"onBeforeInput"),0<u.length&&(f=new za("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=k))}Uc(m,t)})}function vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _o(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ur(e,n),i!=null&&r.unshift(vr(e,i,o)),i=ur(e,t),i!=null&&r.push(vr(e,i,o))),e=e.return}return r}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ha(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=ur(n,i),a!=null&&l.unshift(vr(n,a,s))):o||(a=ur(n,i),a!=null&&l.push(vr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var mp=/\r\n?/g,hp=/\u0000|\uFFFD/g;function Qa(e){return(typeof e=="string"?e:""+e).replace(mp,`
`).replace(hp,"")}function Qr(e,t,n){if(t=Qa(t),Qa(e)!==t&&n)throw Error(S(425))}function Po(){}var Tl=null,Rl=null;function zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ll=typeof setTimeout=="function"?setTimeout:void 0,vp=typeof clearTimeout=="function"?clearTimeout:void 0,Ya=typeof Promise=="function"?Promise:void 0,yp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ya<"u"?function(e){return Ya.resolve(null).then(e).catch(gp)}:Ll;function gp(e){setTimeout(function(){throw e})}function Xi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);dr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ka(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Dn,yr="__reactProps$"+Dn,ht="__reactContainer$"+Dn,Il="__reactEvents$"+Dn,wp="__reactListeners$"+Dn,xp="__reactHandles$"+Dn;function Qt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ka(e);e!==null;){if(n=e[ot])return n;e=Ka(e)}return t}e=n,n=e.parentNode}return null}function Rr(e){return e=e[ot]||e[ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Go(e){return e[yr]||null}var Ml=[],dn=-1;function Ut(e){return{current:e}}function Y(e){0>dn||(e.current=Ml[dn],Ml[dn]=null,dn--)}function H(e,t){dn++,Ml[dn]=e.current,e.current=t}var Ft={},ye=Ut(Ft),$e=Ut(!1),Gt=Ft;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ne(e){return e=e.childContextTypes,e!=null}function Oo(){Y($e),Y(ye)}function Xa(e,t,n){if(ye.current!==Ft)throw Error(S(168));H(ye,t),H($e,n)}function Vc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,o0(e)||"Unknown",o));return Z({},n,r)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,Gt=ye.current,H(ye,e),H($e,$e.current),!0}function ba(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Vc(e,t,Gt),r.__reactInternalMemoizedMergedChildContext=e,Y($e),Y(ye),H(ye,e)):Y($e),H($e,n)}var ct=null,Zo=!1,bi=!1;function Wc(e){ct===null?ct=[e]:ct.push(e)}function Sp(e){Zo=!0,Wc(e)}function Bt(){if(!bi&&ct!==null){bi=!0;var e=0,t=U;try{var n=ct;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,Zo=!1}catch(o){throw ct!==null&&(ct=ct.slice(e+1)),mc(xs,Bt),o}finally{U=t,bi=!1}}return null}var pn=[],mn=0,Ro=null,zo=0,Fe=[],Ae=0,Zt=null,ft=1,dt="";function Wt(e,t){pn[mn++]=zo,pn[mn++]=Ro,Ro=e,zo=t}function Hc(e,t,n){Fe[Ae++]=ft,Fe[Ae++]=dt,Fe[Ae++]=Zt,Zt=e;var r=ft;e=dt;var o=32-Ze(r)-1;r&=~(1<<o),n+=1;var i=32-Ze(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ft=1<<32-Ze(t)+o|n<<o|r,dt=i+e}else ft=1<<i|n<<o|r,dt=e}function Os(e){e.return!==null&&(Wt(e,1),Hc(e,1,0))}function Ts(e){for(;e===Ro;)Ro=pn[--mn],pn[mn]=null,zo=pn[--mn],pn[mn]=null;for(;e===Zt;)Zt=Fe[--Ae],Fe[Ae]=null,dt=Fe[--Ae],Fe[Ae]=null,ft=Fe[--Ae],Fe[Ae]=null}var ze=null,Re=null,X=!1,be=null;function Qc(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ga(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Re=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:ft,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Re=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(X){var t=Re;if(t){var n=t;if(!Ga(e,t)){if(Dl(e))throw Error(S(418));t=Rt(n.nextSibling);var r=ze;t&&Ga(e,t)?Qc(r,n):(e.flags=e.flags&-4097|2,X=!1,ze=e)}}else{if(Dl(e))throw Error(S(418));e.flags=e.flags&-4097|2,X=!1,ze=e}}}function Za(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Yr(e){if(e!==ze)return!1;if(!X)return Za(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zl(e.type,e.memoizedProps)),t&&(t=Re)){if(Dl(e))throw Yc(),Error(S(418));for(;t;)Qc(e,t),t=Rt(t.nextSibling)}if(Za(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=ze?Rt(e.stateNode.nextSibling):null;return!0}function Yc(){for(var e=Re;e;)e=Rt(e.nextSibling)}function _n(){Re=ze=null,X=!1}function Rs(e){be===null?be=[e]:be.push(e)}var kp=gt.ReactCurrentBatchConfig;function Ke(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Lo=Ut(null),Io=null,hn=null,zs=null;function Ls(){zs=hn=Io=null}function Is(e){var t=Lo.current;Y(Lo),e._currentValue=t}function Fl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kn(e,t){Io=e,zs=hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(zs!==e)if(e={context:e,memoizedValue:t,next:null},hn===null){if(Io===null)throw Error(S(308));hn=e,Io.dependencies={lanes:0,firstContext:e}}else hn=hn.next=e;return t}var Yt=null;function Ms(e){Yt===null?Yt=[e]:Yt.push(e)}function Kc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ms(t)):(n.next=o.next,o.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function Ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,vt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ms(r)):(t.next=o.next,o.next=t),r.interleaved=t,vt(e,n)}function ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ss(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Mo(e,t,n,r){var o=e.updateQueue;Et=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==l&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;l=0,f=u=a=null,s=i;do{var h=s.lane,v=s.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(h=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){m=g.call(v,m,h);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(v,m,h):g,h==null)break e;m=Z({},m,h);break e;case 2:Et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=v,a=m):f=f.next=v,l|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(f===null&&(a=m),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);qt|=l,e.lanes=l,e.memoizedState=m}}function qa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var bc=new Ku.Component().refs;function Al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jo={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),o=It(e),i=pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,o),t!==null&&(Je(t,e,o,r),ao(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),o=It(e),i=pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,o),t!==null&&(Je(t,e,o,r),ao(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=It(e),o=pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=zt(e,o,r),t!==null&&(Je(t,e,r,n),ao(t,e,r))}};function eu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(o,i):!0}function Gc(e,t,n){var r=!1,o=Ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(o=Ne(t)?Gt:ye.current,r=t.contextTypes,i=(r=r!=null)?Nn(e,o):Ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function tu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function Ul(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=bc,Ds(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ve(i):(i=Ne(t)?Gt:ye.current,o.context=Nn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Al(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Jo.enqueueReplaceState(o,o.state,null),Mo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===bc&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Kr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nu(e){var t=e._init;return t(e._payload)}function Zc(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Mt(d,c),d.index=0,d.sibling=null,d}function i(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,p,w){return c===null||c.tag!==6?(c=nl(p,d.mode,w),c.return=d,c):(c=o(c,p),c.return=d,c)}function a(d,c,p,w){var C=p.type;return C===sn?f(d,c,p.props.children,w,p.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===kt&&nu(C)===c.type)?(w=o(c,p.props),w.ref=Hn(d,c,p),w.return=d,w):(w=ho(p.type,p.key,p.props,null,d.mode,w),w.ref=Hn(d,c,p),w.return=d,w)}function u(d,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=rl(p,d.mode,w),c.return=d,c):(c=o(c,p.children||[]),c.return=d,c)}function f(d,c,p,w,C){return c===null||c.tag!==7?(c=bt(p,d.mode,w,C),c.return=d,c):(c=o(c,p),c.return=d,c)}function m(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=nl(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Dr:return p=ho(c.type,c.key,c.props,null,d.mode,p),p.ref=Hn(d,null,c),p.return=d,p;case ln:return c=rl(c,d.mode,p),c.return=d,c;case kt:var w=c._init;return m(d,w(c._payload),p)}if(bn(c)||An(c))return c=bt(c,d.mode,p,null),c.return=d,c;Kr(d,c)}return null}function h(d,c,p,w){var C=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(d,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Dr:return p.key===C?a(d,c,p,w):null;case ln:return p.key===C?u(d,c,p,w):null;case kt:return C=p._init,h(d,c,C(p._payload),w)}if(bn(p)||An(p))return C!==null?null:f(d,c,p,w,null);Kr(d,p)}return null}function v(d,c,p,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(p)||null,s(c,d,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Dr:return d=d.get(w.key===null?p:w.key)||null,a(c,d,w,C);case ln:return d=d.get(w.key===null?p:w.key)||null,u(c,d,w,C);case kt:var $=w._init;return v(d,c,p,$(w._payload),C)}if(bn(w)||An(w))return d=d.get(p)||null,f(c,d,w,C,null);Kr(c,w)}return null}function g(d,c,p,w){for(var C=null,$=null,k=c,T=c=0,W=null;k!==null&&T<p.length;T++){k.index>T?(W=k,k=null):W=k.sibling;var L=h(d,k,p[T],w);if(L===null){k===null&&(k=W);break}e&&k&&L.alternate===null&&t(d,k),c=i(L,c,T),$===null?C=L:$.sibling=L,$=L,k=W}if(T===p.length)return n(d,k),X&&Wt(d,T),C;if(k===null){for(;T<p.length;T++)k=m(d,p[T],w),k!==null&&(c=i(k,c,T),$===null?C=k:$.sibling=k,$=k);return X&&Wt(d,T),C}for(k=r(d,k);T<p.length;T++)W=v(k,d,T,p[T],w),W!==null&&(e&&W.alternate!==null&&k.delete(W.key===null?T:W.key),c=i(W,c,T),$===null?C=W:$.sibling=W,$=W);return e&&k.forEach(function(K){return t(d,K)}),X&&Wt(d,T),C}function y(d,c,p,w){var C=An(p);if(typeof C!="function")throw Error(S(150));if(p=C.call(p),p==null)throw Error(S(151));for(var $=C=null,k=c,T=c=0,W=null,L=p.next();k!==null&&!L.done;T++,L=p.next()){k.index>T?(W=k,k=null):W=k.sibling;var K=h(d,k,L.value,w);if(K===null){k===null&&(k=W);break}e&&k&&K.alternate===null&&t(d,k),c=i(K,c,T),$===null?C=K:$.sibling=K,$=K,k=W}if(L.done)return n(d,k),X&&Wt(d,T),C;if(k===null){for(;!L.done;T++,L=p.next())L=m(d,L.value,w),L!==null&&(c=i(L,c,T),$===null?C=L:$.sibling=L,$=L);return X&&Wt(d,T),C}for(k=r(d,k);!L.done;T++,L=p.next())L=v(k,d,T,L.value,w),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?T:L.key),c=i(L,c,T),$===null?C=L:$.sibling=L,$=L);return e&&k.forEach(function(Oe){return t(d,Oe)}),X&&Wt(d,T),C}function R(d,c,p,w){if(typeof p=="object"&&p!==null&&p.type===sn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Dr:e:{for(var C=p.key,$=c;$!==null;){if($.key===C){if(C=p.type,C===sn){if($.tag===7){n(d,$.sibling),c=o($,p.props.children),c.return=d,d=c;break e}}else if($.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===kt&&nu(C)===$.type){n(d,$.sibling),c=o($,p.props),c.ref=Hn(d,$,p),c.return=d,d=c;break e}n(d,$);break}else t(d,$);$=$.sibling}p.type===sn?(c=bt(p.props.children,d.mode,w,p.key),c.return=d,d=c):(w=ho(p.type,p.key,p.props,null,d.mode,w),w.ref=Hn(d,c,p),w.return=d,d=w)}return l(d);case ln:e:{for($=p.key;c!==null;){if(c.key===$)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=o(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=rl(p,d.mode,w),c.return=d,d=c}return l(d);case kt:return $=p._init,R(d,c,$(p._payload),w)}if(bn(p))return g(d,c,p,w);if(An(p))return y(d,c,p,w);Kr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,p),c.return=d,d=c):(n(d,c),c=nl(p,d.mode,w),c.return=d,d=c),l(d)):n(d,c)}return R}var Pn=Zc(!0),Jc=Zc(!1),zr={},st=Ut(zr),gr=Ut(zr),wr=Ut(zr);function Kt(e){if(e===zr)throw Error(S(174));return e}function js(e,t){switch(H(wr,t),H(gr,e),H(st,zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gl(t,e)}Y(st),H(st,t)}function On(){Y(st),Y(gr),Y(wr)}function qc(e){Kt(wr.current);var t=Kt(st.current),n=gl(t,e.type);t!==n&&(H(gr,e),H(st,n))}function Fs(e){gr.current===e&&(Y(st),Y(gr))}var b=Ut(0);function Do(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gi=[];function As(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var uo=gt.ReactCurrentDispatcher,Zi=gt.ReactCurrentBatchConfig,Jt=0,G=null,ne=null,le=null,jo=!1,rr=!1,xr=0,Ep=0;function pe(){throw Error(S(321))}function Us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Bs(e,t,n,r,o,i){if(Jt=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,uo.current=e===null||e.memoizedState===null?_p:Pp,e=n(r,o),rr){i=0;do{if(rr=!1,xr=0,25<=i)throw Error(S(301));i+=1,le=ne=null,t.updateQueue=null,uo.current=Op,e=n(r,o)}while(rr)}if(uo.current=Fo,t=ne!==null&&ne.next!==null,Jt=0,le=ne=G=null,jo=!1,t)throw Error(S(300));return e}function Vs(){var e=xr!==0;return xr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?G.memoizedState=le=e:le=le.next=e,le}function We(){if(ne===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=le===null?G.memoizedState:le.next;if(t!==null)le=t,ne=e;else{if(e===null)throw Error(S(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?G.memoizedState=le=e:le=le.next=e}return le}function Sr(e,t){return typeof t=="function"?t(e):t}function Ji(e){var t=We(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var f=u.lane;if((Jt&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=m,l=r):a=a.next=m,G.lanes|=f,qt|=f}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,qe(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,qt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qi(e){var t=We(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);qe(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ef(){}function tf(e,t){var n=G,r=We(),o=t(),i=!qe(r.memoizedState,o);if(i&&(r.memoizedState=o,Ce=!0),r=r.queue,Ws(of.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,kr(9,rf.bind(null,n,r,o,t),void 0,null),se===null)throw Error(S(349));Jt&30||nf(n,t,o)}return o}function nf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rf(e,t,n,r){t.value=n,t.getSnapshot=r,lf(t)&&sf(e)}function of(e,t,n){return n(function(){lf(t)&&sf(e)})}function lf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function sf(e){var t=vt(e,1);t!==null&&Je(t,e,1,-1)}function ru(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},t.queue=e,e=e.dispatch=Np.bind(null,G,e),[t.memoizedState,e]}function kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function af(){return We().memoizedState}function co(e,t,n,r){var o=tt();G.flags|=e,o.memoizedState=kr(1|t,n,void 0,r===void 0?null:r)}function qo(e,t,n,r){var o=We();r=r===void 0?null:r;var i=void 0;if(ne!==null){var l=ne.memoizedState;if(i=l.destroy,r!==null&&Us(r,l.deps)){o.memoizedState=kr(t,n,i,r);return}}G.flags|=e,o.memoizedState=kr(1|t,n,i,r)}function ou(e,t){return co(8390656,8,e,t)}function Ws(e,t){return qo(2048,8,e,t)}function uf(e,t){return qo(4,2,e,t)}function cf(e,t){return qo(4,4,e,t)}function ff(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function df(e,t,n){return n=n!=null?n.concat([e]):null,qo(4,4,ff.bind(null,t,e),n)}function Hs(){}function pf(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Us(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function mf(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Us(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hf(e,t,n){return Jt&21?(qe(n,t)||(n=yc(),G.lanes|=n,qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function Cp(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Zi.transition;Zi.transition={};try{e(!1),t()}finally{U=n,Zi.transition=r}}function vf(){return We().memoizedState}function $p(e,t,n){var r=It(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yf(e))gf(t,n);else if(n=Kc(e,t,n,r),n!==null){var o=we();Je(n,e,r,o),wf(n,t,r)}}function Np(e,t,n){var r=It(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yf(e))gf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,qe(s,l)){var a=t.interleaved;a===null?(o.next=o,Ms(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Kc(e,t,o,r),n!==null&&(o=we(),Je(n,e,r,o),wf(n,t,r))}}function yf(e){var t=e.alternate;return e===G||t!==null&&t===G}function gf(e,t){rr=jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ss(e,n)}}var Fo={readContext:Ve,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},_p={readContext:Ve,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:ou,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,co(4194308,4,ff.bind(null,t,e),n)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){return co(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$p.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:ru,useDebugValue:Hs,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=ru(!1),t=e[0];return e=Cp.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=tt();if(X){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),se===null)throw Error(S(349));Jt&30||nf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ou(of.bind(null,r,i,e),[e]),r.flags|=2048,kr(9,rf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=se.identifierPrefix;if(X){var n=dt,r=ft;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ep++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pp={readContext:Ve,useCallback:pf,useContext:Ve,useEffect:Ws,useImperativeHandle:df,useInsertionEffect:uf,useLayoutEffect:cf,useMemo:mf,useReducer:Ji,useRef:af,useState:function(){return Ji(Sr)},useDebugValue:Hs,useDeferredValue:function(e){var t=We();return hf(t,ne.memoizedState,e)},useTransition:function(){var e=Ji(Sr)[0],t=We().memoizedState;return[e,t]},useMutableSource:ef,useSyncExternalStore:tf,useId:vf,unstable_isNewReconciler:!1},Op={readContext:Ve,useCallback:pf,useContext:Ve,useEffect:Ws,useImperativeHandle:df,useInsertionEffect:uf,useLayoutEffect:cf,useMemo:mf,useReducer:qi,useRef:af,useState:function(){return qi(Sr)},useDebugValue:Hs,useDeferredValue:function(e){var t=We();return ne===null?t.memoizedState=e:hf(t,ne.memoizedState,e)},useTransition:function(){var e=qi(Sr)[0],t=We().memoizedState;return[e,t]},useMutableSource:ef,useSyncExternalStore:tf,useId:vf,unstable_isNewReconciler:!1};function Tn(e,t){try{var n="",r=t;do n+=r0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function el(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Tp=typeof WeakMap=="function"?WeakMap:Map;function xf(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Uo||(Uo=!0,Zl=r),Bl(e,t)},n}function Sf(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Bl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function iu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Tp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Hp.bind(null,e,t,n),t.then(e,e))}function lu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function su(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,zt(n,t,1))),n.lanes|=1),e)}var Rp=gt.ReactCurrentOwner,Ce=!1;function ge(e,t,n,r){t.child=e===null?Jc(t,null,n,r):Pn(t,e.child,n,r)}function au(e,t,n,r,o){n=n.render;var i=t.ref;return kn(t,o),r=Bs(e,t,n,r,i,o),n=Vs(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(X&&n&&Os(t),t.flags|=1,ge(e,t,r,o),t.child)}function uu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Js(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,kf(e,t,i,r,o)):(e=ho(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:mr,n(l,r)&&e.ref===t.ref)return yt(e,t,o)}return t.flags|=1,e=Mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function kf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(mr(i,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,yt(e,t,o)}return Vl(e,t,n,r,o)}function Ef(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(yn,Te),Te|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(yn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(yn,Te),Te|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(yn,Te),Te|=r;return ge(e,t,o,n),t.child}function Cf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,n,r,o){var i=Ne(n)?Gt:ye.current;return i=Nn(t,i),kn(t,o),n=Bs(e,t,n,r,i,o),r=Vs(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(X&&r&&Os(t),t.flags|=1,ge(e,t,n,o),t.child)}function cu(e,t,n,r,o){if(Ne(n)){var i=!0;To(t)}else i=!1;if(kn(t,o),t.stateNode===null)fo(e,t),Gc(t,n,r),Ul(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Ne(n)?Gt:ye.current,u=Nn(t,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&tu(t,l,r,u),Et=!1;var h=t.memoizedState;l.state=h,Mo(t,r,l,o),a=t.memoizedState,s!==r||h!==a||$e.current||Et?(typeof f=="function"&&(Al(t,n,f,r),a=t.memoizedState),(s=Et||eu(t,n,s,r,h,a,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Xc(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ke(t.type,s),l.props=u,m=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ve(a):(a=Ne(n)?Gt:ye.current,a=Nn(t,a));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||h!==a)&&tu(t,l,r,a),Et=!1,h=t.memoizedState,l.state=h,Mo(t,r,l,o);var g=t.memoizedState;s!==m||h!==g||$e.current||Et?(typeof v=="function"&&(Al(t,n,v,r),g=t.memoizedState),(u=Et||eu(t,n,u,r,h,g,a)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Wl(e,t,n,r,i,o)}function Wl(e,t,n,r,o,i){Cf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ba(t,n,!1),yt(e,t,i);r=t.stateNode,Rp.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Pn(t,e.child,null,i),t.child=Pn(t,null,s,i)):ge(e,t,s,i),t.memoizedState=r.state,o&&ba(t,n,!0),t.child}function $f(e){var t=e.stateNode;t.pendingContext?Xa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xa(e,t.context,!1),js(e,t.containerInfo)}function fu(e,t,n,r,o){return _n(),Rs(o),t.flags|=256,ge(e,t,n,r),t.child}var Hl={dehydrated:null,treeContext:null,retryLane:0};function Ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nf(e,t,n){var r=t.pendingProps,o=b.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(b,o&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ni(l,r,0,null),e=bt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ql(n),t.memoizedState=Hl,e):Qs(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return zp(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Mt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Mt(s,i):(i=bt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ql(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Hl,r}return i=e.child,e=i.sibling,r=Mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qs(e,t){return t=ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xr(e,t,n,r){return r!==null&&Rs(r),Pn(t,e.child,null,n),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zp(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=el(Error(S(422))),Xr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ni({mode:"visible",children:r.children},o,0,null),i=bt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Pn(t,e.child,null,l),t.child.memoizedState=Ql(l),t.memoizedState=Hl,i);if(!(t.mode&1))return Xr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=el(i,r,void 0),Xr(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ce||s){if(r=se,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,vt(e,o),Je(r,e,o,-1))}return Zs(),r=el(Error(S(421))),Xr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Qp.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Re=Rt(o.nextSibling),ze=t,X=!0,be=null,e!==null&&(Fe[Ae++]=ft,Fe[Ae++]=dt,Fe[Ae++]=Zt,ft=e.id,dt=e.overflow,Zt=t),t=Qs(t,r.children),t.flags|=4096,t)}function du(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fl(e.return,t,n)}function tl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function _f(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ge(e,t,r.children,n),r=b.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&du(e,n,t);else if(e.tag===19)du(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(b,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Do(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),tl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Do(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}tl(t,!0,n,null,i);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lp(e,t,n){switch(t.tag){case 3:$f(t),_n();break;case 5:qc(t);break;case 1:Ne(t.type)&&To(t);break;case 4:js(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(Lo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(b,b.current&1),t.flags|=128,null):n&t.child.childLanes?Nf(e,t,n):(H(b,b.current&1),e=yt(e,t,n),e!==null?e.sibling:null);H(b,b.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _f(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(b,b.current),r)break;return null;case 22:case 23:return t.lanes=0,Ef(e,t,n)}return yt(e,t,n)}var Pf,Yl,Of,Tf;Pf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yl=function(){};Of=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Kt(st.current);var i=null;switch(n){case"input":o=ml(e,o),r=ml(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=yl(e,o),r=yl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Po)}wl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Tf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ip(e,t,n){var r=t.pendingProps;switch(Ts(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Ne(t.type)&&Oo(),me(t),null;case 3:return r=t.stateNode,On(),Y($e),Y(ye),As(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,be!==null&&(es(be),be=null))),Yl(e,t),me(t),null;case 5:Fs(t);var o=Kt(wr.current);if(n=t.type,e!==null&&t.stateNode!=null)Of(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return me(t),null}if(e=Kt(st.current),Yr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ot]=t,r[yr]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Zn.length;o++)Q(Zn[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Sa(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":Ea(r,i),Q("invalid",r)}wl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,s,e),o=["children",""+s]):sr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":jr(r),ka(r,i,!0);break;case"textarea":jr(r),Ca(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Po)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ot]=t,e[yr]=r,Pf(e,t,!1,!1),t.stateNode=e;e:{switch(l=xl(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Zn.length;o++)Q(Zn[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":Sa(e,r),o=ml(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Ea(e,r),o=yl(e,r),Q("invalid",e);break;default:o=r}wl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?ic(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&rc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ar(e,a):typeof a=="number"&&ar(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(sr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&Q("scroll",e):a!=null&&hs(e,i,a,l))}switch(n){case"input":jr(e),ka(e,r,!1);break;case"textarea":jr(e),Ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?gn(e,!!r.multiple,i,!1):r.defaultValue!=null&&gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Tf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Kt(wr.current),Kt(st.current),Yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(i=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return me(t),null;case 13:if(Y(b),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Re!==null&&t.mode&1&&!(t.flags&128))Yc(),_n(),t.flags|=98560,i=!1;else if(i=Yr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[ot]=t}else _n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else be!==null&&(es(be),be=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||b.current&1?re===0&&(re=3):Zs())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return On(),Yl(e,t),e===null&&hr(t.stateNode.containerInfo),me(t),null;case 10:return Is(t.type._context),me(t),null;case 17:return Ne(t.type)&&Oo(),me(t),null;case 19:if(Y(b),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Qn(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Do(e),l!==null){for(t.flags|=128,Qn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(b,b.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>Rn&&(t.flags|=128,r=!0,Qn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Do(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!X)return me(t),null}else 2*q()-i.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,r=!0,Qn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=b.current,H(b,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Gs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Mp(e,t){switch(Ts(t),t.tag){case 1:return Ne(t.type)&&Oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),Y($e),Y(ye),As(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fs(t),null;case 13:if(Y(b),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(b),null;case 4:return On(),null;case 10:return Is(t.type._context),null;case 22:case 23:return Gs(),null;case 24:return null;default:return null}}var br=!1,ve=!1,Dp=typeof WeakSet=="function"?WeakSet:Set,O=null;function vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Kl(e,t,n){try{n()}catch(r){J(e,t,r)}}var pu=!1;function jp(e,t){if(Tl=$o,e=Lc(),Ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,f=0,m=e,h=null;t:for(;;){for(var v;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(v=m.firstChild)!==null;)h=m,m=v;for(;;){if(m===e)break t;if(h===n&&++u===o&&(s=l),h===i&&++f===r&&(a=l),(v=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rl={focusedElem:e,selectionRange:n},$o=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,R=g.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ke(t.type,y),R);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){J(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return g=pu,pu=!1,g}function or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Kl(t,n,i)}o=o.next}while(o!==r)}}function ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rf(e){var t=e.alternate;t!==null&&(e.alternate=null,Rf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[yr],delete t[Il],delete t[wp],delete t[xp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zf(e){return e.tag===5||e.tag===3||e.tag===4}function mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Po));else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}var ue=null,Xe=!1;function St(e,t,n){for(n=n.child;n!==null;)Lf(e,t,n),n=n.sibling}function Lf(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Yo,n)}catch{}switch(n.tag){case 5:ve||vn(n,t);case 6:var r=ue,o=Xe;ue=null,St(e,t,n),ue=r,Xe=o,ue!==null&&(Xe?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Xe?(e=ue,n=n.stateNode,e.nodeType===8?Xi(e.parentNode,n):e.nodeType===1&&Xi(e,n),dr(e)):Xi(ue,n.stateNode));break;case 4:r=ue,o=Xe,ue=n.stateNode.containerInfo,Xe=!0,St(e,t,n),ue=r,Xe=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Kl(n,t,l),o=o.next}while(o!==r)}St(e,t,n);break;case 1:if(!ve&&(vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){J(n,t,s)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,St(e,t,n),ve=r):St(e,t,n);break;default:St(e,t,n)}}function hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dp),t.forEach(function(r){var o=Yp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,Xe=!1;break e;case 3:ue=s.stateNode.containerInfo,Xe=!0;break e;case 4:ue=s.stateNode.containerInfo,Xe=!0;break e}s=s.return}if(ue===null)throw Error(S(160));Lf(i,l,o),ue=null,Xe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){J(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)If(t,e),t=t.sibling}function If(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),et(e),r&4){try{or(3,e,e.return),ei(3,e)}catch(y){J(e,e.return,y)}try{or(5,e,e.return)}catch(y){J(e,e.return,y)}}break;case 1:Ye(t,e),et(e),r&512&&n!==null&&vn(n,n.return);break;case 5:if(Ye(t,e),et(e),r&512&&n!==null&&vn(n,n.return),e.flags&32){var o=e.stateNode;try{ar(o,"")}catch(y){J(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ec(o,i),xl(s,l);var u=xl(s,i);for(l=0;l<a.length;l+=2){var f=a[l],m=a[l+1];f==="style"?ic(o,m):f==="dangerouslySetInnerHTML"?rc(o,m):f==="children"?ar(o,m):hs(o,f,m,u)}switch(s){case"input":hl(o,i);break;case"textarea":tc(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?gn(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?gn(o,!!i.multiple,i.defaultValue,!0):gn(o,!!i.multiple,i.multiple?[]:"",!1))}o[yr]=i}catch(y){J(e,e.return,y)}}break;case 6:if(Ye(t,e),et(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){J(e,e.return,y)}}break;case 3:if(Ye(t,e),et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dr(t.containerInfo)}catch(y){J(e,e.return,y)}break;case 4:Ye(t,e),et(e);break;case 13:Ye(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Xs=q())),r&4&&hu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||f,Ye(t,e),ve=u):Ye(t,e),et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(m=O=f;O!==null;){switch(h=O,v=h.child,h.tag){case 0:case 11:case 14:case 15:or(4,h,h.return);break;case 1:vn(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){J(r,n,y)}}break;case 5:vn(h,h.return);break;case 22:if(h.memoizedState!==null){yu(m);continue}}v!==null?(v.return=h,O=v):yu(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=oc("display",l))}catch(y){J(e,e.return,y)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(y){J(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ye(t,e),et(e),r&4&&hu(e);break;case 21:break;default:Ye(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ar(o,""),r.flags&=-33);var i=mu(e);Gl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=mu(e);bl(e,s,l);break;default:throw Error(S(161))}}catch(a){J(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fp(e,t,n){O=e,Mf(e)}function Mf(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||br;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ve;s=br;var u=ve;if(br=l,(ve=a)&&!u)for(O=o;O!==null;)l=O,a=l.child,l.tag===22&&l.memoizedState!==null?gu(o):a!==null?(a.return=l,O=a):gu(o);for(;i!==null;)O=i,Mf(i),i=i.sibling;O=o,br=s,ve=u}vu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):vu(e)}}function vu(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||ei(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&qa(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qa(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&dr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ve||t.flags&512&&Xl(t)}catch(h){J(t,t.return,h)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function yu(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function gu(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ei(4,t)}catch(a){J(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){J(t,o,a)}}var i=t.return;try{Xl(t)}catch(a){J(t,i,a)}break;case 5:var l=t.return;try{Xl(t)}catch(a){J(t,l,a)}}}catch(a){J(t,t.return,a)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var Ap=Math.ceil,Ao=gt.ReactCurrentDispatcher,Ys=gt.ReactCurrentOwner,Be=gt.ReactCurrentBatchConfig,D=0,se=null,te=null,fe=0,Te=0,yn=Ut(0),re=0,Er=null,qt=0,ti=0,Ks=0,ir=null,Ee=null,Xs=0,Rn=1/0,ut=null,Uo=!1,Zl=null,Lt=null,Gr=!1,_t=null,Bo=0,lr=0,Jl=null,po=-1,mo=0;function we(){return D&6?q():po!==-1?po:po=q()}function It(e){return e.mode&1?D&2&&fe!==0?fe&-fe:kp.transition!==null?(mo===0&&(mo=yc()),mo):(e=U,e!==0||(e=window.event,e=e===void 0?16:Cc(e.type)),e):1}function Je(e,t,n,r){if(50<lr)throw lr=0,Jl=null,Error(S(185));Or(e,n,r),(!(D&2)||e!==se)&&(e===se&&(!(D&2)&&(ti|=n),re===4&&$t(e,fe)),_e(e,r),n===1&&D===0&&!(t.mode&1)&&(Rn=q()+500,Zo&&Bt()))}function _e(e,t){var n=e.callbackNode;k0(e,t);var r=Co(e,e===se?fe:0);if(r===0)n!==null&&_a(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_a(n),t===1)e.tag===0?Sp(wu.bind(null,e)):Wc(wu.bind(null,e)),yp(function(){!(D&6)&&Bt()}),n=null;else{switch(gc(r)){case 1:n=xs;break;case 4:n=hc;break;case 16:n=Eo;break;case 536870912:n=vc;break;default:n=Eo}n=Wf(n,Df.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Df(e,t){if(po=-1,mo=0,D&6)throw Error(S(327));var n=e.callbackNode;if(En()&&e.callbackNode!==n)return null;var r=Co(e,e===se?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Vo(e,r);else{t=r;var o=D;D|=2;var i=Ff();(se!==e||fe!==t)&&(ut=null,Rn=q()+500,Xt(e,t));do try{Vp();break}catch(s){jf(e,s)}while(!0);Ls(),Ao.current=i,D=o,te!==null?t=0:(se=null,fe=0,t=re)}if(t!==0){if(t===2&&(o=$l(e),o!==0&&(r=o,t=ql(e,o))),t===1)throw n=Er,Xt(e,0),$t(e,r),_e(e,q()),n;if(t===6)$t(e,r);else{if(o=e.current.alternate,!(r&30)&&!Up(o)&&(t=Vo(e,r),t===2&&(i=$l(e),i!==0&&(r=i,t=ql(e,i))),t===1))throw n=Er,Xt(e,0),$t(e,r),_e(e,q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Ht(e,Ee,ut);break;case 3:if($t(e,r),(r&130023424)===r&&(t=Xs+500-q(),10<t)){if(Co(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ll(Ht.bind(null,e,Ee,ut),t);break}Ht(e,Ee,ut);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ze(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ap(r/1960))-r,10<r){e.timeoutHandle=Ll(Ht.bind(null,e,Ee,ut),r);break}Ht(e,Ee,ut);break;case 5:Ht(e,Ee,ut);break;default:throw Error(S(329))}}}return _e(e,q()),e.callbackNode===n?Df.bind(null,e):null}function ql(e,t){var n=ir;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=Vo(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&es(t)),e}function es(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Up(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!qe(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Ks,t&=~ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function wu(e){if(D&6)throw Error(S(327));En();var t=Co(e,0);if(!(t&1))return _e(e,q()),null;var n=Vo(e,t);if(e.tag!==0&&n===2){var r=$l(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=Er,Xt(e,0),$t(e,t),_e(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e,Ee,ut),_e(e,q()),null}function bs(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Rn=q()+500,Zo&&Bt())}}function en(e){_t!==null&&_t.tag===0&&!(D&6)&&En();var t=D;D|=1;var n=Be.transition,r=U;try{if(Be.transition=null,U=1,e)return e()}finally{U=r,Be.transition=n,D=t,!(D&6)&&Bt()}}function Gs(){Te=yn.current,Y(yn)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vp(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Ts(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oo();break;case 3:On(),Y($e),Y(ye),As();break;case 5:Fs(r);break;case 4:On();break;case 13:Y(b);break;case 19:Y(b);break;case 10:Is(r.type._context);break;case 22:case 23:Gs()}n=n.return}if(se=e,te=e=Mt(e.current,null),fe=Te=t,re=0,Er=null,Ks=ti=qt=0,Ee=ir=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Yt=null}return e}function jf(e,t){do{var n=te;try{if(Ls(),uo.current=Fo,jo){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}jo=!1}if(Jt=0,le=ne=G=null,rr=!1,xr=0,Ys.current=null,n===null||n.return===null){re=1,Er=t,te=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=fe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=s,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=lu(l);if(v!==null){v.flags&=-257,su(v,l,s,i,t),v.mode&1&&iu(i,u,t),t=v,a=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(a),t.updateQueue=y}else g.add(a);break e}else{if(!(t&1)){iu(i,u,t),Zs();break e}a=Error(S(426))}}else if(X&&s.mode&1){var R=lu(l);if(R!==null){!(R.flags&65536)&&(R.flags|=256),su(R,l,s,i,t),Rs(Tn(a,s));break e}}i=a=Tn(a,s),re!==4&&(re=2),ir===null?ir=[i]:ir.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=xf(i,a,t);Ja(i,d);break e;case 1:s=a;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Lt===null||!Lt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Sf(i,s,t);Ja(i,w);break e}}i=i.return}while(i!==null)}Uf(n)}catch(C){t=C,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Ff(){var e=Ao.current;return Ao.current=Fo,e===null?Fo:e}function Zs(){(re===0||re===3||re===2)&&(re=4),se===null||!(qt&268435455)&&!(ti&268435455)||$t(se,fe)}function Vo(e,t){var n=D;D|=2;var r=Ff();(se!==e||fe!==t)&&(ut=null,Xt(e,t));do try{Bp();break}catch(o){jf(e,o)}while(!0);if(Ls(),D=n,Ao.current=r,te!==null)throw Error(S(261));return se=null,fe=0,re}function Bp(){for(;te!==null;)Af(te)}function Vp(){for(;te!==null&&!p0();)Af(te)}function Af(e){var t=Vf(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?Uf(e):te=t,Ys.current=null}function Uf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Mp(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Ip(n,t,Te),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Ht(e,t,n){var r=U,o=Be.transition;try{Be.transition=null,U=1,Wp(e,t,n,r)}finally{Be.transition=o,U=r}return null}function Wp(e,t,n,r){do En();while(_t!==null);if(D&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(E0(e,i),e===se&&(te=se=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gr||(Gr=!0,Wf(Eo,function(){return En(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var l=U;U=1;var s=D;D|=4,Ys.current=null,jp(e,n),If(n,e),up(Rl),$o=!!Tl,Rl=Tl=null,e.current=n,Fp(n),m0(),D=s,U=l,Be.transition=i}else e.current=n;if(Gr&&(Gr=!1,_t=e,Bo=o),i=e.pendingLanes,i===0&&(Lt=null),y0(n.stateNode),_e(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Uo)throw Uo=!1,e=Zl,Zl=null,e;return Bo&1&&e.tag!==0&&En(),i=e.pendingLanes,i&1?e===Jl?lr++:(lr=0,Jl=e):lr=0,Bt(),null}function En(){if(_t!==null){var e=gc(Bo),t=Be.transition,n=U;try{if(Be.transition=null,U=16>e?16:e,_t===null)var r=!1;else{if(e=_t,_t=null,Bo=0,D&6)throw Error(S(331));var o=D;for(D|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(O=u;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:or(8,f,i)}var m=f.child;if(m!==null)m.return=f,O=m;else for(;O!==null;){f=O;var h=f.sibling,v=f.return;if(Rf(f),f===u){O=null;break}if(h!==null){h.return=v,O=h;break}O=v}}}var g=i.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var R=y.sibling;y.sibling=null,y=R}while(y!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:or(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,O=d;break e}O=i.return}}var c=e.current;for(O=c;O!==null;){l=O;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,O=p;else e:for(l=c;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ei(9,s)}}catch(C){J(s,s.return,C)}if(s===l){O=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,O=w;break e}O=s.return}}if(D=o,Bt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Yo,e)}catch{}r=!0}return r}finally{U=n,Be.transition=t}}return!1}function xu(e,t,n){t=Tn(n,t),t=xf(e,t,1),e=zt(e,t,1),t=we(),e!==null&&(Or(e,1,t),_e(e,t))}function J(e,t,n){if(e.tag===3)xu(e,e,n);else for(;t!==null;){if(t.tag===3){xu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=Tn(n,e),e=Sf(t,e,1),t=zt(t,e,1),e=we(),t!==null&&(Or(t,1,e),_e(t,e));break}}t=t.return}}function Hp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(fe&n)===n&&(re===4||re===3&&(fe&130023424)===fe&&500>q()-Xs?Xt(e,0):Ks|=n),_e(e,t)}function Bf(e,t){t===0&&(e.mode&1?(t=Ur,Ur<<=1,!(Ur&130023424)&&(Ur=4194304)):t=1);var n=we();e=vt(e,t),e!==null&&(Or(e,t,n),_e(e,n))}function Qp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bf(e,n)}function Yp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Bf(e,n)}var Vf;Vf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Lp(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,X&&t.flags&1048576&&Hc(t,zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fo(e,t),e=t.pendingProps;var o=Nn(t,ye.current);kn(t,n),o=Bs(null,t,r,e,o,n);var i=Vs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,To(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ds(t),o.updater=Jo,t.stateNode=o,o._reactInternals=t,Ul(t,r,e,n),t=Wl(null,t,r,!0,i,n)):(t.tag=0,X&&i&&Os(t),ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Xp(r),e=Ke(r,e),o){case 0:t=Vl(null,t,r,e,n);break e;case 1:t=cu(null,t,r,e,n);break e;case 11:t=au(null,t,r,e,n);break e;case 14:t=uu(null,t,r,Ke(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),Vl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),cu(e,t,r,o,n);case 3:e:{if($f(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Xc(e,t),Mo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Tn(Error(S(423)),t),t=fu(e,t,r,n,o);break e}else if(r!==o){o=Tn(Error(S(424)),t),t=fu(e,t,r,n,o);break e}else for(Re=Rt(t.stateNode.containerInfo.firstChild),ze=t,X=!0,be=null,n=Jc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),r===o){t=yt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return qc(t),e===null&&jl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,zl(r,o)?l=null:i!==null&&zl(r,i)&&(t.flags|=32),Cf(e,t),ge(e,t,l,n),t.child;case 6:return e===null&&jl(t),null;case 13:return Nf(e,t,n);case 4:return js(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),au(e,t,r,o,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,H(Lo,r._currentValue),r._currentValue=l,i!==null)if(qe(i.value,l)){if(i.children===o.children&&!$e.current){t=yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=pt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Fl(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Fl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,kn(t,n),o=Ve(o),r=r(o),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,o=Ke(r,t.pendingProps),o=Ke(r.type,o),uu(e,t,r,o,n);case 15:return kf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),fo(e,t),t.tag=1,Ne(r)?(e=!0,To(t)):e=!1,kn(t,n),Gc(t,r,o),Ul(t,r,o,n),Wl(null,t,r,!0,e,n);case 19:return _f(e,t,n);case 22:return Ef(e,t,n)}throw Error(S(156,t.tag))};function Wf(e,t){return mc(e,t)}function Kp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new Kp(e,t,n,r)}function Js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xp(e){if(typeof e=="function")return Js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ys)return 11;if(e===gs)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ho(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Js(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case sn:return bt(n.children,o,i,t);case vs:l=8,o|=8;break;case cl:return e=Ue(12,n,t,o|2),e.elementType=cl,e.lanes=i,e;case fl:return e=Ue(13,n,t,o),e.elementType=fl,e.lanes=i,e;case dl:return e=Ue(19,n,t,o),e.elementType=dl,e.lanes=i,e;case Zu:return ni(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bu:l=10;break e;case Gu:l=9;break e;case ys:l=11;break e;case gs:l=14;break e;case kt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ue(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function bt(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function ni(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=Zu,e.lanes=n,e.stateNode={isHidden:!1},e}function nl(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function rl(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ji(0),this.expirationTimes=ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function qs(e,t,n,r,o,i,l,s,a){return e=new bp(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ue(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ds(i),e}function Gp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hf(e){if(!e)return Ft;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Vc(e,n,t)}return t}function Qf(e,t,n,r,o,i,l,s,a){return e=qs(n,r,!0,e,o,i,l,s,a),e.context=Hf(null),n=e.current,r=we(),o=It(n),i=pt(r,o),i.callback=t??null,zt(n,i,o),e.current.lanes=o,Or(e,o,r),_e(e,r),e}function ri(e,t,n,r){var o=t.current,i=we(),l=It(o);return n=Hf(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zt(o,t,l),e!==null&&(Je(e,o,l,i),ao(e,o,l)),l}function Wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ea(e,t){Su(e,t),(e=e.alternate)&&Su(e,t)}function Zp(){return null}var Yf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ta(e){this._internalRoot=e}oi.prototype.render=ta.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));ri(e,t,null,null)};oi.prototype.unmount=ta.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;en(function(){ri(null,e,null,null)}),t[ht]=null}};function oi(e){this._internalRoot=e}oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&Ec(e)}};function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ku(){}function Jp(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Wo(l);i.call(u)}}var l=Qf(t,r,e,0,null,!1,!1,"",ku);return e._reactRootContainer=l,e[ht]=l.current,hr(e.nodeType===8?e.parentNode:e),en(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Wo(a);s.call(u)}}var a=qs(e,0,!1,null,null,!1,!1,"",ku);return e._reactRootContainer=a,e[ht]=a.current,hr(e.nodeType===8?e.parentNode:e),en(function(){ri(t,a,n,r)}),a}function li(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Wo(l);s.call(a)}}ri(t,l,e,o)}else l=Jp(n,t,e,o,r);return Wo(l)}wc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gn(t.pendingLanes);n!==0&&(Ss(t,n|1),_e(t,q()),!(D&6)&&(Rn=q()+500,Bt()))}break;case 13:en(function(){var r=vt(e,1);if(r!==null){var o=we();Je(r,e,1,o)}}),ea(e,1)}};ks=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=we();Je(t,e,134217728,n)}ea(e,134217728)}};xc=function(e){if(e.tag===13){var t=It(e),n=vt(e,t);if(n!==null){var r=we();Je(n,e,t,r)}ea(e,t)}};Sc=function(){return U};kc=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};kl=function(e,t,n){switch(t){case"input":if(hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Go(r);if(!o)throw Error(S(90));qu(r),hl(r,o)}}}break;case"textarea":tc(e,n);break;case"select":t=n.value,t!=null&&gn(e,!!n.multiple,t,!1)}};ac=bs;uc=en;var qp={usingClientEntryPoint:!1,Events:[Rr,fn,Go,lc,sc,bs]},Yn={findFiberByHostInstance:Qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},em={bundleType:Yn.bundleType,version:Yn.version,rendererPackageName:Yn.rendererPackageName,rendererConfig:Yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dc(e),e===null?null:e.stateNode},findFiberByHostInstance:Yn.findFiberByHostInstance||Zp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{Yo=Zr.inject(em),lt=Zr}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qp;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!na(t))throw Error(S(200));return Gp(e,t,null,n)};Me.createRoot=function(e,t){if(!na(e))throw Error(S(299));var n=!1,r="",o=Yf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=qs(e,1,!1,null,null,n,!1,r,o),e[ht]=t.current,hr(e.nodeType===8?e.parentNode:e),new ta(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=dc(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return en(e)};Me.hydrate=function(e,t,n){if(!ii(t))throw Error(S(200));return li(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!na(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Yf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Qf(t,null,e,1,n??null,o,!1,i,l),e[ht]=t.current,hr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new oi(t)};Me.render=function(e,t,n){if(!ii(t))throw Error(S(200));return li(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!ii(e))throw Error(S(40));return e._reactRootContainer?(en(function(){li(null,null,e,!1,function(){e._reactRootContainer=null,e[ht]=null})}),!0):!1};Me.unstable_batchedUpdates=bs;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ii(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return li(e,t,n,!1,r)};Me.version="18.2.0-next-9e3b772b8-20220608";function Kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kf)}catch(e){console.error(e)}}Kf(),Hu.exports=Me;var Xf=Hu.exports,Eu=Xf;al.createRoot=Eu.createRoot,al.hydrateRoot=Eu.hydrateRoot;function tm(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function nm(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var rm=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(nm(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=tm(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",Ho="-moz-",j="-webkit-",bf="comm",ra="rule",oa="decl",om="@import",Gf="@keyframes",im="@layer",lm=Math.abs,si=String.fromCharCode,sm=Object.assign;function am(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function Zf(e){return e.trim()}function um(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function ts(e,t){return e.indexOf(t)}function ce(e,t){return e.charCodeAt(t)|0}function Cr(e,t,n){return e.slice(t,n)}function nt(e){return e.length}function ia(e){return e.length}function Jr(e,t){return t.push(e),e}function cm(e,t){return e.map(t).join("")}var ai=1,zn=1,Jf=0,Pe=0,ee=0,jn="";function ui(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ai,column:zn,length:l,return:""}}function Kn(e,t){return sm(ui("",null,null,"",null,null,0),e,{length:-e.length},t)}function fm(){return ee}function dm(){return ee=Pe>0?ce(jn,--Pe):0,zn--,ee===10&&(zn=1,ai--),ee}function Le(){return ee=Pe<Jf?ce(jn,Pe++):0,zn++,ee===10&&(zn=1,ai++),ee}function at(){return ce(jn,Pe)}function vo(){return Pe}function Lr(e,t){return Cr(jn,e,t)}function $r(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qf(e){return ai=zn=1,Jf=nt(jn=e),Pe=0,[]}function ed(e){return jn="",e}function yo(e){return Zf(Lr(Pe-1,ns(e===91?e+2:e===40?e+1:e)))}function pm(e){for(;(ee=at())&&ee<33;)Le();return $r(e)>2||$r(ee)>3?"":" "}function mm(e,t){for(;--t&&Le()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Lr(e,vo()+(t<6&&at()==32&&Le()==32))}function ns(e){for(;Le();)switch(ee){case e:return Pe;case 34:case 39:e!==34&&e!==39&&ns(ee);break;case 40:e===41&&ns(e);break;case 92:Le();break}return Pe}function hm(e,t){for(;Le()&&e+ee!==57;)if(e+ee===84&&at()===47)break;return"/*"+Lr(t,Pe-1)+"*"+si(e===47?e:Le())}function vm(e){for(;!$r(at());)Le();return Lr(e,Pe)}function ym(e){return ed(go("",null,null,null,[""],e=qf(e),0,[0],e))}function go(e,t,n,r,o,i,l,s,a){for(var u=0,f=0,m=l,h=0,v=0,g=0,y=1,R=1,d=1,c=0,p="",w=o,C=i,$=r,k=p;R;)switch(g=c,c=Le()){case 40:if(g!=108&&ce(k,m-1)==58){ts(k+=F(yo(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:k+=yo(c);break;case 9:case 10:case 13:case 32:k+=pm(g);break;case 92:k+=mm(vo()-1,7);continue;case 47:switch(at()){case 42:case 47:Jr(gm(hm(Le(),vo()),t,n),a);break;default:k+="/"}break;case 123*y:s[u++]=nt(k)*d;case 125*y:case 59:case 0:switch(c){case 0:case 125:R=0;case 59+f:d==-1&&(k=F(k,/\f/g,"")),v>0&&nt(k)-m&&Jr(v>32?$u(k+";",r,n,m-1):$u(F(k," ","")+";",r,n,m-2),a);break;case 59:k+=";";default:if(Jr($=Cu(k,t,n,u,f,o,s,p,w=[],C=[],m),i),c===123)if(f===0)go(k,t,$,$,w,i,m,s,C);else switch(h===99&&ce(k,3)===110?100:h){case 100:case 108:case 109:case 115:go(e,$,$,r&&Jr(Cu(e,$,$,0,0,o,s,p,o,w=[],m),C),o,C,m,s,r?w:C);break;default:go(k,$,$,$,[""],C,0,s,C)}}u=f=v=0,y=d=1,p=k="",m=l;break;case 58:m=1+nt(k),v=g;default:if(y<1){if(c==123)--y;else if(c==125&&y++==0&&dm()==125)continue}switch(k+=si(c),c*y){case 38:d=f>0?1:(k+="\f",-1);break;case 44:s[u++]=(nt(k)-1)*d,d=1;break;case 64:at()===45&&(k+=yo(Le())),h=at(),f=m=nt(p=k+=vm(vo())),c++;break;case 45:g===45&&nt(k)==2&&(y=0)}}return i}function Cu(e,t,n,r,o,i,l,s,a,u,f){for(var m=o-1,h=o===0?i:[""],v=ia(h),g=0,y=0,R=0;g<r;++g)for(var d=0,c=Cr(e,m+1,m=lm(y=l[g])),p=e;d<v;++d)(p=Zf(y>0?h[d]+" "+c:F(c,/&\f/g,h[d])))&&(a[R++]=p);return ui(e,t,n,o===0?ra:s,a,u,f)}function gm(e,t,n){return ui(e,t,n,bf,si(fm()),Cr(e,2,-2),0)}function $u(e,t,n,r){return ui(e,t,n,oa,Cr(e,0,r),Cr(e,r+1,-1),r)}function Cn(e,t){for(var n="",r=ia(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function wm(e,t,n,r){switch(e.type){case im:if(e.children.length)break;case om:case oa:return e.return=e.return||e.value;case bf:return"";case Gf:return e.return=e.value+"{"+Cn(e.children,r)+"}";case ra:e.value=e.props.join(",")}return nt(n=Cn(e.children,r))?e.return=e.value+"{"+n+"}":""}function xm(e){var t=ia(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Sm(e){return function(t){t.root||(t=t.return)&&e(t)}}function km(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Em=function(t,n,r){for(var o=0,i=0;o=i,i=at(),o===38&&i===12&&(n[r]=1),!$r(i);)Le();return Lr(t,Pe)},Cm=function(t,n){var r=-1,o=44;do switch($r(o)){case 0:o===38&&at()===12&&(n[r]=1),t[r]+=Em(Pe-1,n,r);break;case 2:t[r]+=yo(o);break;case 4:if(o===44){t[++r]=at()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=si(o)}while(o=Le());return t},$m=function(t,n){return ed(Cm(qf(t),n))},Nu=new WeakMap,Nm=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Nu.get(r))&&!o){Nu.set(t,!0);for(var i=[],l=$m(n,i),s=r.props,a=0,u=0;a<l.length;a++)for(var f=0;f<s.length;f++,u++)t.props[u]=i[a]?l[a].replace(/&\f/g,s[f]):s[f]+" "+l[a]}}},_m=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function td(e,t){switch(am(e,t)){case 5103:return j+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+Ho+e+he+e+e;case 6828:case 4268:return j+e+he+e+e;case 6165:return j+e+he+"flex-"+e+e;case 5187:return j+e+F(e,/(\w+).+(:[^]+)/,j+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return j+e+he+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return j+e+he+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return j+e+he+F(e,"shrink","negative")+e;case 5292:return j+e+he+F(e,"basis","preferred-size")+e;case 6060:return j+"box-"+F(e,"-grow","")+j+e+he+F(e,"grow","positive")+e;case 4554:return j+F(e,/([^-])(transform)/g,"$1"+j+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,j+"$1"),/(image-set)/,j+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,j+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+j+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,j+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+j+"$2-$3$1"+Ho+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ts(e,"stretch")?td(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ce(e,t+1)!==115)break;case 6444:switch(ce(e,nt(e)-3-(~ts(e,"!important")&&10))){case 107:return F(e,":",":"+j)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+j+(ce(e,14)===45?"inline-":"")+"box$3$1"+j+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(ce(e,t+11)){case 114:return j+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return j+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return j+e+he+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return j+e+he+e+e}return e}var Pm=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case oa:t.return=td(t.value,t.length);break;case Gf:return Cn([Kn(t,{value:F(t.value,"@","@"+j)})],o);case ra:if(t.length)return cm(t.props,function(i){switch(um(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Cn([Kn(t,{props:[F(i,/:(read-\w+)/,":"+Ho+"$1")]})],o);case"::placeholder":return Cn([Kn(t,{props:[F(i,/:(plac\w+)/,":"+j+"input-$1")]}),Kn(t,{props:[F(i,/:(plac\w+)/,":"+Ho+"$1")]}),Kn(t,{props:[F(i,/:(plac\w+)/,he+"input-$1")]})],o)}return""})}},Om=[Pm],Tm=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var R=y.getAttribute("data-emotion");R.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||Om,i={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var R=y.getAttribute("data-emotion").split(" "),d=1;d<R.length;d++)i[R[d]]=!0;s.push(y)});var a,u=[Nm,_m];{var f,m=[wm,Sm(function(y){f.insert(y)})],h=xm(u.concat(o,m)),v=function(R){return Cn(ym(R),h)};a=function(R,d,c,p){f=c,v(R?R+"{"+d.styles+"}":d.styles),p&&(g.inserted[d.name]=!0)}}var g={key:n,sheet:new rm({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return g.sheet.hydrate(s),g};function Ln(){return Ln=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ln.apply(this,arguments)}var nd={exports:{}},B={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=typeof Symbol=="function"&&Symbol.for,la=ae?Symbol.for("react.element"):60103,sa=ae?Symbol.for("react.portal"):60106,ci=ae?Symbol.for("react.fragment"):60107,fi=ae?Symbol.for("react.strict_mode"):60108,di=ae?Symbol.for("react.profiler"):60114,pi=ae?Symbol.for("react.provider"):60109,mi=ae?Symbol.for("react.context"):60110,aa=ae?Symbol.for("react.async_mode"):60111,hi=ae?Symbol.for("react.concurrent_mode"):60111,vi=ae?Symbol.for("react.forward_ref"):60112,yi=ae?Symbol.for("react.suspense"):60113,Rm=ae?Symbol.for("react.suspense_list"):60120,gi=ae?Symbol.for("react.memo"):60115,wi=ae?Symbol.for("react.lazy"):60116,zm=ae?Symbol.for("react.block"):60121,Lm=ae?Symbol.for("react.fundamental"):60117,Im=ae?Symbol.for("react.responder"):60118,Mm=ae?Symbol.for("react.scope"):60119;function je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case la:switch(e=e.type,e){case aa:case hi:case ci:case di:case fi:case yi:return e;default:switch(e=e&&e.$$typeof,e){case mi:case vi:case wi:case gi:case pi:return e;default:return t}}case sa:return t}}}function rd(e){return je(e)===hi}B.AsyncMode=aa;B.ConcurrentMode=hi;B.ContextConsumer=mi;B.ContextProvider=pi;B.Element=la;B.ForwardRef=vi;B.Fragment=ci;B.Lazy=wi;B.Memo=gi;B.Portal=sa;B.Profiler=di;B.StrictMode=fi;B.Suspense=yi;B.isAsyncMode=function(e){return rd(e)||je(e)===aa};B.isConcurrentMode=rd;B.isContextConsumer=function(e){return je(e)===mi};B.isContextProvider=function(e){return je(e)===pi};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===la};B.isForwardRef=function(e){return je(e)===vi};B.isFragment=function(e){return je(e)===ci};B.isLazy=function(e){return je(e)===wi};B.isMemo=function(e){return je(e)===gi};B.isPortal=function(e){return je(e)===sa};B.isProfiler=function(e){return je(e)===di};B.isStrictMode=function(e){return je(e)===fi};B.isSuspense=function(e){return je(e)===yi};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ci||e===hi||e===di||e===fi||e===yi||e===Rm||typeof e=="object"&&e!==null&&(e.$$typeof===wi||e.$$typeof===gi||e.$$typeof===pi||e.$$typeof===mi||e.$$typeof===vi||e.$$typeof===Lm||e.$$typeof===Im||e.$$typeof===Mm||e.$$typeof===zm)};B.typeOf=je;nd.exports=B;var Dm=nd.exports,od=Dm,jm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},id={};id[od.ForwardRef]=jm;id[od.Memo]=Fm;var Am=!0;function ld(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var ua=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Am===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},sd=function(t,n,r){ua(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Um(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Bm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vm=/[A-Z]|^ms/g,Wm=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ad=function(t){return t.charCodeAt(1)===45},_u=function(t){return t!=null&&typeof t!="boolean"},ol=km(function(e){return ad(e)?e:e.replace(Vm,"-$&").toLowerCase()}),Pu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Wm,function(r,o,i){return rt={name:o,styles:i,next:rt},o})}return Bm[t]!==1&&!ad(t)&&typeof n=="number"&&n!==0?n+"px":n};function Nr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return rt={name:n.name,styles:n.styles,next:rt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)rt={name:r.name,styles:r.styles,next:rt},r=r.next;var o=n.styles+";";return o}return Hm(e,t,n)}case"function":{if(e!==void 0){var i=rt,l=n(e);return rt=i,Nr(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Hm(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Nr(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":_u(l)&&(r+=ol(i)+":"+Pu(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)_u(l[s])&&(r+=ol(i)+":"+Pu(i,l[s])+";");else{var a=Nr(e,t,l);switch(i){case"animation":case"animationName":{r+=ol(i)+":"+a+";";break}default:r+=i+"{"+a+"}"}}}return r}var Ou=/label:\s*([^\s;\n{]+)\s*(;|$)/g,rt,ca=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";rt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Nr(r,n,l)):i+=l[0];for(var s=1;s<t.length;s++)i+=Nr(r,n,t[s]),o&&(i+=l[s]);Ou.lastIndex=0;for(var a="",u;(u=Ou.exec(i))!==null;)a+="-"+u[1];var f=Um(i)+a;return{name:f,styles:i,next:rt}},Qm=function(t){return t()},Ym=sl.useInsertionEffect?sl.useInsertionEffect:!1,ud=Ym||Qm,fa={}.hasOwnProperty,cd=x.createContext(typeof HTMLElement<"u"?Tm({key:"css"}):null);cd.Provider;var fd=function(t){return x.forwardRef(function(n,r){var o=x.useContext(cd);return t(n,o,r)})},dd=x.createContext({}),rs="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Km=function(t,n){var r={};for(var o in n)fa.call(n,o)&&(r[o]=n[o]);return r[rs]=t,r},Xm=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return ua(n,r,o),ud(function(){return sd(n,r,o)}),null},bm=fd(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[rs],i=[r],l="";typeof e.className=="string"?l=ld(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var s=ca(i,void 0,x.useContext(dd));l+=t.key+"-"+s.name;var a={};for(var u in e)fa.call(e,u)&&u!=="css"&&u!==rs&&(a[u]=e[u]);return a.ref=n,a.className=l,x.createElement(x.Fragment,null,x.createElement(Xm,{cache:t,serialized:s,isStringTag:typeof o=="string"}),x.createElement(o,a))}),Gm=bm,Zm=N.Fragment;function ie(e,t,n){return fa.call(t,"css")?N.jsx(Gm,Km(e,t),n):N.jsx(e,t,n)}function pd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ca(t)}var E=function(){var t=pd.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Jm=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var s in i)i[s]&&s&&(l&&(l+=" "),l+=s)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function qm(e,t,n){var r=[],o=ld(e,r,n);return r.length<2?n:o+t(r)}var e1=function(t){var n=t.cache,r=t.serializedArr;return ud(function(){for(var o=0;o<r.length;o++)sd(n,r[o],!1)}),null},il=fd(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,f=new Array(u),m=0;m<u;m++)f[m]=arguments[m];var h=ca(f,t.registered);return r.push(h),ua(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,f=new Array(u),m=0;m<u;m++)f[m]=arguments[m];return qm(t.registered,o,Jm(f))},l={css:o,cx:i,theme:x.useContext(dd)},s=e.children(l);return n=!0,x.createElement(x.Fragment,null,x.createElement(e1,{cache:t,serializedArr:r}),s)}),t1=Object.defineProperty,n1=(e,t,n)=>t in e?t1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qr=(e,t,n)=>(n1(e,typeof t!="symbol"?t+"":t,n),n),os=new Map,eo=new WeakMap,Tu=0,r1=void 0;function o1(e){return e?(eo.has(e)||(Tu+=1,eo.set(e,Tu.toString())),eo.get(e)):"0"}function i1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?o1(e.root):e[t]}`).toString()}function l1(e){const t=i1(e);let n=os.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(s=>{var a;const u=s.isIntersecting&&o.some(f=>s.intersectionRatio>=f);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=u),(a=r.get(s.target))==null||a.forEach(f=>{f(u,s)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},os.set(t,n)}return n}function md(e,t,n={},r=r1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:o,observer:i,elements:l}=l1(n),s=l.get(e)||[];return l.has(e)||l.set(e,s),s.push(t),i.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),os.delete(o))}}function s1(e){return typeof e.children!="function"}var Ru=class extends x.Component{constructor(e){super(e),qr(this,"node",null),qr(this,"_unobserveCb",null),qr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),qr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),s1(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=md(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:v,entry:g}=this.state;return e({inView:v,entry:g,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:s,trackVisibility:a,delay:u,initialInView:f,fallbackInView:m,...h}=this.props;return x.createElement(t||"div",{ref:this.handleNode,...h},e)}};function hd({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:s,fallbackInView:a,onChange:u}={}){var f;const[m,h]=x.useState(null),v=x.useRef(),[g,y]=x.useState({inView:!!s,entry:void 0});v.current=u,x.useEffect(()=>{if(l||!m)return;let p;return p=md(m,(w,C)=>{y({inView:w,entry:C}),v.current&&v.current(w,C),C.isIntersecting&&i&&p&&(p(),p=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,m,o,r,i,l,n,a,t]);const R=(f=g.entry)==null?void 0:f.target,d=x.useRef();!m&&R&&!i&&!l&&d.current!==R&&(d.current=R,y({inView:!!s,entry:void 0}));const c=[h,g.inView,g.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var vd={exports:{}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),pa=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),Si=Symbol.for("react.strict_mode"),ki=Symbol.for("react.profiler"),Ei=Symbol.for("react.provider"),Ci=Symbol.for("react.context"),a1=Symbol.for("react.server_context"),$i=Symbol.for("react.forward_ref"),Ni=Symbol.for("react.suspense"),_i=Symbol.for("react.suspense_list"),Pi=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy"),u1=Symbol.for("react.offscreen"),yd;yd=Symbol.for("react.module.reference");function He(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case da:switch(e=e.type,e){case xi:case ki:case Si:case Ni:case _i:return e;default:switch(e=e&&e.$$typeof,e){case a1:case Ci:case $i:case Oi:case Pi:case Ei:return e;default:return t}}case pa:return t}}}V.ContextConsumer=Ci;V.ContextProvider=Ei;V.Element=da;V.ForwardRef=$i;V.Fragment=xi;V.Lazy=Oi;V.Memo=Pi;V.Portal=pa;V.Profiler=ki;V.StrictMode=Si;V.Suspense=Ni;V.SuspenseList=_i;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return He(e)===Ci};V.isContextProvider=function(e){return He(e)===Ei};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===da};V.isForwardRef=function(e){return He(e)===$i};V.isFragment=function(e){return He(e)===xi};V.isLazy=function(e){return He(e)===Oi};V.isMemo=function(e){return He(e)===Pi};V.isPortal=function(e){return He(e)===pa};V.isProfiler=function(e){return He(e)===ki};V.isStrictMode=function(e){return He(e)===Si};V.isSuspense=function(e){return He(e)===Ni};V.isSuspenseList=function(e){return He(e)===_i};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xi||e===ki||e===Si||e===Ni||e===_i||e===u1||typeof e=="object"&&e!==null&&(e.$$typeof===Oi||e.$$typeof===Pi||e.$$typeof===Ei||e.$$typeof===Ci||e.$$typeof===$i||e.$$typeof===yd||e.getModuleId!==void 0)};V.typeOf=He;vd.exports=V;var c1=vd.exports;E`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;E`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;E`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;E`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;E`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;E`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const f1=E`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,d1=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,p1=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,m1=E`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,h1=E`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ma=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,v1=E`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,y1=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,g1=E`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,w1=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,x1=E`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,S1=E`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,k1=E`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function E1({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=ma,iterationCount:o=1}){return pd`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function C1(e){return e==null}function $1(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function gd(e,t){return n=>n?e():t()}function _r(e){return gd(e,()=>null)}function is(e){return _r(()=>({opacity:0}))(e)}const wd=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=ma,triggerOnce:s=!1,className:a,style:u,childClassName:f,childStyle:m,children:h,onVisibilityChange:v}=e,g=x.useMemo(()=>E1({keyframes:l,duration:o}),[o,l]);return C1(h)?null:$1(h)?ie(_1,{...e,animationStyles:g,children:String(h)}):c1.isFragment(h)?ie(xd,{...e,animationStyles:g}):ie(Zm,{children:x.Children.map(h,(y,R)=>{if(!x.isValidElement(y))return null;const d=r+(t?R*o*n:0);switch(y.type){case"ol":case"ul":return ie(il,{children:({cx:c})=>ie(y.type,{...y.props,className:c(a,y.props.className),style:Object.assign({},u,y.props.style),children:ie(wd,{...e,children:y.props.children})})});case"li":return ie(Ru,{threshold:i,triggerOnce:s,onChange:v,children:({inView:c,ref:p})=>ie(il,{children:({cx:w})=>ie(y.type,{...y.props,ref:p,className:w(f,y.props.className),css:_r(()=>g)(c),style:Object.assign({},m,y.props.style,is(!c),{animationDelay:d+"ms"})})})});default:return ie(Ru,{threshold:i,triggerOnce:s,onChange:v,children:({inView:c,ref:p})=>ie("div",{ref:p,className:a,css:_r(()=>g)(c),style:Object.assign({},u,is(!c),{animationDelay:d+"ms"}),children:ie(il,{children:({cx:w})=>ie(y.type,{...y.props,className:w(f,y.props.className),style:Object.assign({},m,y.props.style)})})})})}})})},N1={display:"inline-block",whiteSpace:"pre"},_1=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:s=!1,className:a,style:u,children:f,onVisibilityChange:m}=e,{ref:h,inView:v}=hd({triggerOnce:s,threshold:l,onChange:m});return gd(()=>ie("div",{ref:h,className:a,style:Object.assign({},u,N1),children:f.split("").map((g,y)=>ie("span",{css:_r(()=>t)(v),style:{animationDelay:o+y*i*r+"ms"},children:g},y))}),()=>ie(xd,{...e,children:f}))(n)},xd=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:s}=e,{ref:a,inView:u}=hd({triggerOnce:r,threshold:n,onChange:s});return ie("div",{ref:a,className:o,css:_r(()=>t)(u),style:Object.assign({},i,is(!u)),children:l})};E`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;E`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const P1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,O1=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,T1=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,R1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,z1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,L1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,I1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,M1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,D1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,j1=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,F1=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,A1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,U1=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function B1(e,t,n){switch(n){case"bottom-left":return t?O1:d1;case"bottom-right":return t?T1:p1;case"down":return e?t?z1:h1:t?R1:m1;case"left":return e?t?I1:v1:t?L1:ma;case"right":return e?t?D1:g1:t?M1:y1;case"top-left":return t?j1:w1;case"top-right":return t?F1:x1;case"up":return e?t?U1:k1:t?A1:S1;default:return t?P1:f1}}const to=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=x.useMemo(()=>B1(t,r,n),[t,n,r]);return ie(wd,{keyframes:i,...o})};E`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;E`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;E`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;E`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;E`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;E`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;E`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;E`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Ti(e,t,n,r){return new(n||(n=Promise))(function(o,i){function l(u){try{a(r.next(u))}catch(f){i(f)}}function s(u){try{a(r.throw(u))}catch(f){i(f)}}function a(u){var f;u.done?o(u.value):(f=u.value,f instanceof n?f:new n(function(m){m(f)})).then(l,s)}a((r=r.apply(e,t||[])).next())})}function Dt(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(a){return function(u){return function(f){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&f[0]?r.return:f[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,f[1])).done)return o;switch(r=0,o&&(f=[2&f[0],o.value]),f[0]){case 0:case 1:o=f;break;case 4:return l.label++,{value:f[1],done:!1};case 5:l.label++,r=f[1],f=[0];continue;case 7:f=l.ops.pop(),l.trys.pop();continue;default:if(o=l.trys,!((o=o.length>0&&o[o.length-1])||f[0]!==6&&f[0]!==2)){l=0;continue}if(f[0]===3&&(!o||f[1]>o[0]&&f[1]<o[3])){l.label=f[1];break}if(f[0]===6&&l.label<o[1]){l.label=o[1],o=f;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(f);break}o[2]&&l.ops.pop(),l.trys.pop();continue}f=t.call(e,l)}catch(m){f=[6,m],r=0}finally{n=o=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([a,u])}}}function ls(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ge(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(t===void 0||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l}function it(e,t,n){if(n||arguments.length===2)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function zu(e,t,n,r,o){for(var i=[],l=5;l<arguments.length;l++)i[l-5]=arguments[l];return Ti(this,void 0,void 0,function(){var s,a,u,f,m,h;return Dt(this,function(v){switch(v.label){case 0:v.trys.push([0,12,13,14]),s=ls(i),a=s.next(),v.label=1;case 1:if(a.done)return[3,11];switch(u=a.value,typeof u){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,V1(e,t,u,n,r,o)];case 3:return v.sent(),[3,10];case 4:return[4,Sd(u)];case 5:return v.sent(),[3,10];case 6:return[4,u.apply(void 0,it([e,t,n,r,o],Ge(i),!1))];case 7:return v.sent(),[3,10];case 8:return[4,u];case 9:v.sent(),v.label=10;case 10:return a=s.next(),[3,1];case 11:return[3,14];case 12:return f=v.sent(),m={error:f},[3,14];case 13:try{a&&!a.done&&(h=s.return)&&h.call(s)}finally{if(m)throw m.error}return[7];case 14:return[2]}})})}function V1(e,t,n,r,o,i){return Ti(this,void 0,void 0,function(){var l,s;return Dt(this,function(a){switch(a.label){case 0:return l=e.textContent||"",s=function(u,f){var m=Ge(f).slice(0);return it(it([],Ge(u),!1),[NaN],!1).findIndex(function(h,v){return m[v]!==h})}(l,n),[4,W1(e,it(it([],Ge(Q1(l,t,s)),!1),Ge(H1(n,t,s)),!1),r,o,i)];case 1:return a.sent(),[2]}})})}function Sd(e){return Ti(this,void 0,void 0,function(){return Dt(this,function(t){switch(t.label){case 0:return[4,new Promise(function(n){return setTimeout(n,e)})];case 1:return t.sent(),[2]}})})}function W1(e,t,n,r,o){return Ti(this,void 0,void 0,function(){var i,l,s,a,u,f,m,h,v,g,y,R,d;return Dt(this,function(c){switch(c.label){case 0:if(i=t,o){for(l=0,s=1;s<t.length;s++)if(a=Ge([t[s-1],t[s]],2),u=a[0],(f=a[1]).length>u.length||f===""){l=s;break}i=t.slice(l,t.length)}c.label=1;case 1:c.trys.push([1,6,7,8]),m=ls(function(p){var w,C,$,k,T,W,L;return Dt(this,function(K){switch(K.label){case 0:w=function(Oe){return Dt(this,function(Qe){switch(Qe.label){case 0:return[4,{op:function(wt){return requestAnimationFrame(function(){return wt.textContent=Oe})},opCode:function(wt){var Fn=wt.textContent||"";return Oe===""||Fn.length>Oe.length?"DELETE":"WRITING"}}];case 1:return Qe.sent(),[2]}})},K.label=1;case 1:K.trys.push([1,6,7,8]),C=ls(p),$=C.next(),K.label=2;case 2:return $.done?[3,5]:(k=$.value,[5,w(k)]);case 3:K.sent(),K.label=4;case 4:return $=C.next(),[3,2];case 5:return[3,8];case 6:return T=K.sent(),W={error:T},[3,8];case 7:try{$&&!$.done&&(L=C.return)&&L.call(C)}finally{if(W)throw W.error}return[7];case 8:return[2]}})}(i)),h=m.next(),c.label=2;case 2:return h.done?[3,5]:(v=h.value,g=v.opCode(e)==="WRITING"?n+n*(Math.random()-.5):r+r*(Math.random()-.5),v.op(e),[4,Sd(g)]);case 3:c.sent(),c.label=4;case 4:return h=m.next(),[3,2];case 5:return[3,8];case 6:return y=c.sent(),R={error:y},[3,8];case 7:try{h&&!h.done&&(d=m.return)&&d.call(m)}finally{if(R)throw R.error}return[7];case 8:return[2]}})})}function H1(e,t,n){var r,o;return n===void 0&&(n=0),Dt(this,function(i){switch(i.label){case 0:r=t(e),o=r.length,i.label=1;case 1:return n<o?[4,r.slice(0,++n).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}function Q1(e,t,n){var r,o;return n===void 0&&(n=0),Dt(this,function(i){switch(i.label){case 0:r=t(e),o=r.length,i.label=1;case 1:return o>n?[4,r.slice(0,--o).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}var Y1="index-module_type__E-SaG";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var K1=x.memo(x.forwardRef(function(e,t){var n=e.sequence,r=e.repeat,o=e.className,i=e.speed,l=i===void 0?40:i,s=e.deletionSpeed,a=e.omitDeletionAnimation,u=a!==void 0&&a,f=e.preRenderFirstString,m=f!==void 0&&f,h=e.wrapper,v=h===void 0?"span":h,g=e.splitter,y=g===void 0?function(_){return it([],Ge(_),!1)}:g,R=e.cursor,d=R===void 0||R,c=e.style,p=function(_,M){var A={};for(var oe in _)Object.prototype.hasOwnProperty.call(_,oe)&&M.indexOf(oe)<0&&(A[oe]=_[oe]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function"){var ke=0;for(oe=Object.getOwnPropertySymbols(_);ke<oe.length;ke++)M.indexOf(oe[ke])<0&&Object.prototype.propertyIsEnumerable.call(_,oe[ke])&&(A[oe[ke]]=_[oe[ke]])}return A}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),w=p["aria-label"],C=p["aria-hidden"],$=p.role;s||(s=l);var k=new Array(2).fill(40);[l,s].forEach(function(_,M){switch(typeof _){case"number":k[M]=Math.abs(_-100);break;case"object":var A=_.type,oe=_.value;if(typeof oe!="number")break;A==="keyStrokeDelayInMs"&&(k[M]=oe)}});var T,W,L,K,Oe,Qe,wt=k[0],Fn=k[1],xt=function(_,M){M===void 0&&(M=null);var A=x.useRef(M);return x.useEffect(function(){_&&(typeof _=="function"?_(A.current):_.current=A.current)},[_]),A}(t),rn=Y1;T=o?"".concat(d?rn+" ":"").concat(o):d?rn:"",W=x.useRef(function(){var _,M=n;r===1/0?_=zu:typeof r=="number"&&(M=Array(1+r).fill(n).flat());var A=_?it(it([],Ge(M),!1),[_],!1):it([],Ge(M),!1);return zu.apply(void 0,it([xt.current,y,wt,Fn,u],Ge(A),!1)),function(){xt.current}}),L=x.useRef(),K=x.useRef(!1),Oe=x.useRef(!1),Qe=Ge(x.useState(0),2)[1],K.current&&(Oe.current=!0),x.useEffect(function(){return K.current||(L.current=W.current(),K.current=!0),Qe(function(_){return _+1}),function(){Oe.current&&L.current&&L.current()}},[]);var P=v,z=m?n.find(function(_){return typeof _=="string"})||"":null;return wo.createElement(P,{"aria-hidden":C,"aria-label":w,role:$,style:c,className:T,children:w?wo.createElement("span",{"aria-hidden":"true",ref:xt,children:z}):z,ref:w?void 0:xt})}),function(e,t){return!0});function X1(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function b1(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function kd(...e){return t=>e.forEach(n=>b1(n,t))}function Ed(...e){return x.useCallback(kd(...e),e)}function G1(e,t=[]){let n=[];function r(i,l){const s=x.createContext(l),a=n.length;n=[...n,l];function u(m){const{scope:h,children:v,...g}=m,y=(h==null?void 0:h[e][a])||s,R=x.useMemo(()=>g,Object.values(g));return x.createElement(y.Provider,{value:R},v)}function f(m,h){const v=(h==null?void 0:h[e][a])||s,g=x.useContext(v);if(g)return g;if(l!==void 0)return l;throw new Error(`\`${m}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,f]}const o=()=>{const i=n.map(l=>x.createContext(l));return function(s){const a=(s==null?void 0:s[e])||i;return x.useMemo(()=>({[`__scope${e}`]:{...s,[e]:a}}),[s,a])}};return o.scopeName=e,[r,Z1(o,...t)]}function Z1(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=r.reduce((s,{useScope:a,scopeName:u})=>{const m=a(i)[`__scope${u}`];return{...s,...m}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}const ss=globalThis!=null&&globalThis.document?x.useLayoutEffect:()=>{},J1=sl.useId||(()=>{});let q1=0;function ll(e){const[t,n]=x.useState(J1());return ss(()=>{e||n(r=>r??String(q1++))},[e]),e||(t?`radix-${t}`:"")}function Cd(e){const t=x.useRef(e);return x.useEffect(()=>{t.current=e}),x.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function eh({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=th({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r,s=Cd(n),a=x.useCallback(u=>{if(i){const m=typeof u=="function"?u(e):u;m!==e&&s(m)}else o(u)},[i,e,o,s]);return[l,a]}function th({defaultProp:e,onChange:t}){const n=x.useState(e),[r]=n,o=x.useRef(r),i=Cd(t);return x.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}const $d=x.forwardRef((e,t)=>{const{children:n,...r}=e,o=x.Children.toArray(n),i=o.find(rh);if(i){const l=i.props.children,s=o.map(a=>a===i?x.Children.count(l)>1?x.Children.only(null):x.isValidElement(l)?l.props.children:null:a);return x.createElement(as,Ln({},r,{ref:t}),x.isValidElement(l)?x.cloneElement(l,void 0,s):null)}return x.createElement(as,Ln({},r,{ref:t}),n)});$d.displayName="Slot";const as=x.forwardRef((e,t)=>{const{children:n,...r}=e;return x.isValidElement(n)?x.cloneElement(n,{...oh(r,n.props),ref:t?kd(t,n.ref):n.ref}):x.Children.count(n)>1?x.Children.only(null):null});as.displayName="SlotClone";const nh=({children:e})=>x.createElement(x.Fragment,null,e);function rh(e){return x.isValidElement(e)&&e.type===nh}function oh(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...s)=>{i(...s),o(...s)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const ih=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],lh=ih.reduce((e,t)=>{const n=x.forwardRef((r,o)=>{const{asChild:i,...l}=r,s=i?$d:t;return x.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),x.createElement(s,Ln({},l,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});const $h=sh();function sh(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Lu(e,t),e.unshift(t)},remove(t){var n;e=Lu(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Lu(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function ah(e,t){return x.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const uh=e=>{const{present:t,children:n}=e,r=ch(t),o=typeof n=="function"?n({present:r.isPresent}):x.Children.only(n),i=Ed(r.ref,o.ref);return typeof n=="function"||r.isPresent?x.cloneElement(o,{ref:i}):null};uh.displayName="Presence";function ch(e){const[t,n]=x.useState(),r=x.useRef({}),o=x.useRef(e),i=x.useRef("none"),l=e?"mounted":"unmounted",[s,a]=ah(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return x.useEffect(()=>{const u=no(r.current);i.current=s==="mounted"?u:"none"},[s]),ss(()=>{const u=r.current,f=o.current;if(f!==e){const h=i.current,v=no(u);e?a("MOUNT"):v==="none"||(u==null?void 0:u.display)==="none"?a("UNMOUNT"):a(f&&h!==v?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,a]),ss(()=>{if(t){const u=m=>{const v=no(r.current).includes(m.animationName);m.target===t&&v&&Xf.flushSync(()=>a("ANIMATION_END"))},f=m=>{m.target===t&&(i.current=no(r.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:x.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function no(e){return(e==null?void 0:e.animationName)||"none"}const Nd="Dialog",[_d,Nh]=G1(Nd),[fh,dh]=_d(Nd),ph=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:l=!0}=e,s=x.useRef(null),a=x.useRef(null),[u=!1,f]=eh({prop:r,defaultProp:o,onChange:i});return x.createElement(fh,{scope:t,triggerRef:s,contentRef:a,contentId:ll(),titleId:ll(),descriptionId:ll(),open:u,onOpenChange:f,onOpenToggle:x.useCallback(()=>f(m=>!m),[f]),modal:l},n)},mh="DialogTrigger",hh=x.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=dh(mh,n),i=Ed(t,o.triggerRef);return x.createElement(lh.button,Ln({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":yh(o.open)},r,{ref:i,onClick:X1(e.onClick,o.onOpenToggle)}))}),vh="DialogPortal",[_h,Ph]=_d(vh,{forceMount:void 0});function yh(e){return e?"open":"closed"}const gh=ph,wh=hh;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Pd=(e,t)=>{const n=x.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:s="",children:a,...u},f)=>x.createElement("svg",{ref:f,...xh,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${Sh(e)}`,s].join(" "),...u},[...t.map(([m,h])=>x.createElement(m,h)),...Array.isArray(a)?a:[a]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=Pd("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=Pd("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function Ch(){const[e,t]=x.useState(!0),n=()=>{t(!e)};return N.jsx("div",{className:"mx-auto px-5",children:N.jsxs("div",{className:`${e&&"dark"} min-h-screen`,children:[N.jsx(to,{cascade:!0,damping:.2,triggerOnce:!0,children:N.jsx(gh,{children:N.jsxs("main",{className:"min-h-screen dark:bg-zinc-900 bg-slate-200 outline-none selection:bg-red-500 overflow-hidden",children:[N.jsx("div",{className:"h-48",children:N.jsxs(to,{direction:"down",children:[N.jsx("h1",{className:"absolute left-6 top-6 font-normal celular:text-1xl lg:text-3xl font-Inter text-zinc-900 dark:text-slate-200",children:N.jsxs("a",{children:["PORTI",N.jsx("a",{className:" celular:text-lg lg:text-4xl font-Pixel text-blue-600  dark:text-indigo-500",children:"FOLIO"})]})}),N.jsx("div",{className:" absolute hidden lg:right-6 lg:top-6 ",children:N.jsxs("div",{className:"flex flex-row gap-6 font-normal font-JetBrains",children:[N.jsx("h1",{className:" text-4xl dark:text-slate-200",children:N.jsx("a",{children:"SOBRE"})}),N.jsx("h1",{className:" text-4xl dark:text-slate-200",children:N.jsx("a",{children:"PROJETOS"})}),N.jsx("h1",{className:" text-4xl dark:text-slate-200",children:N.jsx("a",{children:"CONTATO"})})]})})]})}),N.jsxs("div",{children:[N.jsx(to,{direction:"down",children:N.jsx("h2",{className:" absolute animate-wiggle left-1/4 font-Pixel font-light lg:top-0 lg:text-3xl text-blue-400 dark:text-indigo-600 ",children:"I am..."})}),N.jsxs(to,{direction:"up",children:[N.jsxs("h1",{className:" celular:relative celular:text-center celular:text-sm lg:left-72 font-JetBrains lg:text-left celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:[N.jsx(K1,{sequence:["Desginer",1e3,"Web Developer",1e3,"Music Producer",1e3,"Bruno B. Mathias",1e3],wrapper:"span",speed:50,style:{fontSize:"2em",display:"inline-block"},repeat:1/0}),N.jsx("blockquote",{className:" dark:text-slate-200 text-xl lg:text-left mt-14",children:N.jsx("span",{className:" bg-zinc-800 p-3 rounded-2xl",children:'"You dont need to make, I do"'})})]}),N.jsxs("div",{className:"flex flex-col translate-x-1/2 -translate-y-3/4 opacity-45",children:[N.jsx("div",{className:" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:N.jsxs("div",{className:"flex gap-10",children:[N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"})]})}),N.jsx("div",{className:" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:N.jsxs("div",{className:"flex gap-10",children:[N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"})]})}),N.jsx("div",{className:" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:N.jsxs("div",{className:"flex gap-10",children:[N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"})]})}),N.jsx("div",{className:" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:N.jsxs("div",{className:"flex gap-10",children:[N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"})]})})]})]})]}),N.jsx(wh,{asChild:!0,children:N.jsx("button",{className:"transition ease-in-out hover:-translate-y-1 hover:scale-110 absolute right-1/4 bottom-1/4 text-violet11  hover:shadow-glowing inline-flex h-[35px] items-center justify-center rounded-[20px] border-solid border-4 border-green-500 dark:border-green-600 dark:text-green-500 dark:hover:border-indigo-600 dark:hover:text-indigo-600 text-green-500 py-[50px] px-[120px] font-JetBrains leading-none text-2xl  focus:outline-none",children:"Call-me"})}),N.jsx("div",{className:"dark:bg-zinc-900 bg-slate-300"}),N.jsx("div",{className:"bg-slate-200"})]})})}),N.jsx("button",{onClick:n,className:"absolute w-16 h-16 right-16 bottom-16 p-4 rounded-full font-medium font-Danci dark:bg-slate-200 bg-zinc-900 text-slate-200 dark:text-zinc-900",children:e?N.jsx(Eh,{className:"absolute w-8 h-8 left-4 top-4"}):N.jsx(kh,{className:"absolute w-8 h-8 left-4 top-4"})})]})})}al.createRoot(document.getElementById("root")).render(N.jsx(wo.StrictMode,{children:N.jsx(Ch,{})}));
