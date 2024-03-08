function U0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Nc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pc={exports:{}},di={},Tc={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var br=Symbol.for("react.element"),B0=Symbol.for("react.portal"),V0=Symbol.for("react.fragment"),W0=Symbol.for("react.strict_mode"),H0=Symbol.for("react.profiler"),Q0=Symbol.for("react.provider"),Y0=Symbol.for("react.context"),K0=Symbol.for("react.forward_ref"),X0=Symbol.for("react.suspense"),G0=Symbol.for("react.memo"),Z0=Symbol.for("react.lazy"),Js=Symbol.iterator;function J0(e){return e===null||typeof e!="object"?null:(e=Js&&e[Js]||e["@@iterator"],typeof e=="function"?e:null)}var Oc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rc=Object.assign,Lc={};function Wn(e,t,n){this.props=e,this.context=t,this.refs=Lc,this.updater=n||Oc}Wn.prototype.isReactComponent={};Wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zc(){}zc.prototype=Wn.prototype;function Va(e,t,n){this.props=e,this.context=t,this.refs=Lc,this.updater=n||Oc}var Wa=Va.prototype=new zc;Wa.constructor=Va;Rc(Wa,Wn.prototype);Wa.isPureReactComponent=!0;var qs=Array.isArray,jc=Object.prototype.hasOwnProperty,Ha={current:null},Ic={key:!0,ref:!0,__self:!0,__source:!0};function Mc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)jc.call(t,r)&&!Ic.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:br,type:e,key:i,ref:l,props:o,_owner:Ha.current}}function q0(e,t){return{$$typeof:br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qa(e){return typeof e=="object"&&e!==null&&e.$$typeof===br}function ep(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eu=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ep(""+e.key):t.toString(36)}function Eo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case br:case B0:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+nl(l,0):r,qs(o)?(n="",e!=null&&(n=e.replace(eu,"$&/")+"/"),Eo(o,t,n,"",function(u){return u})):o!=null&&(Qa(o)&&(o=q0(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(eu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",qs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+nl(i,a);l+=Eo(i,t,n,s,o)}else if(s=J0(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+nl(i,a++),l+=Eo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Kr(e,t,n){if(e==null)return e;var r=[],o=0;return Eo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function tp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},ko={transition:null},np={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:ko,ReactCurrentOwner:Ha};I.Children={map:Kr,forEach:function(e,t,n){Kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kr(e,function(){t++}),t},toArray:function(e){return Kr(e,function(t){return t})||[]},only:function(e){if(!Qa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Wn;I.Fragment=V0;I.Profiler=H0;I.PureComponent=Va;I.StrictMode=W0;I.Suspense=X0;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=np;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ha.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)jc.call(t,s)&&!Ic.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:br,type:e.type,key:o,ref:i,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:Y0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Q0,_context:e},e.Consumer=e};I.createElement=Mc;I.createFactory=function(e){var t=Mc.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:K0,render:e}};I.isValidElement=Qa;I.lazy=function(e){return{$$typeof:Z0,_payload:{_status:-1,_result:e},_init:tp}};I.memo=function(e,t){return{$$typeof:G0,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=ko.transition;ko.transition={};try{e()}finally{ko.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return Ee.current.useCallback(e,t)};I.useContext=function(e){return Ee.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};I.useEffect=function(e,t){return Ee.current.useEffect(e,t)};I.useId=function(){return Ee.current.useId()};I.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Ee.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};I.useRef=function(e){return Ee.current.useRef(e)};I.useState=function(e){return Ee.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Ee.current.useTransition()};I.version="18.2.0";Tc.exports=I;var v=Tc.exports;const Ao=Nc(v),Fl=U0({__proto__:null,default:Ao},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp=v,op=Symbol.for("react.element"),ip=Symbol.for("react.fragment"),lp=Object.prototype.hasOwnProperty,ap=rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sp={key:!0,ref:!0,__self:!0,__source:!0};function Dc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)lp.call(t,r)&&!sp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:op,type:e,key:i,ref:l,props:o,_owner:ap.current}}di.Fragment=ip;di.jsx=Dc;di.jsxs=Dc;Pc.exports=di;var P=Pc.exports,Al={},Fc={exports:{}},De={},Ac={exports:{}},bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,z){var T=O.length;O.push(z);e:for(;0<T;){var M=T-1>>>1,b=O[M];if(0<o(b,z))O[M]=z,O[T]=b,T=M;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var z=O[0],T=O.pop();if(T!==z){O[0]=T;e:for(var M=0,b=O.length,oe=b>>>1;M<oe;){var Ce=2*(M+1)-1,tl=O[Ce],Yt=Ce+1,Yr=O[Yt];if(0>o(tl,T))Yt<b&&0>o(Yr,tl)?(O[M]=Yr,O[Yt]=T,M=Yt):(O[M]=tl,O[Ce]=T,M=Ce);else if(Yt<b&&0>o(Yr,T))O[M]=Yr,O[Yt]=T,M=Yt;else break e}}return z}function o(O,z){var T=O.sortIndex-z.sortIndex;return T!==0?T:O.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,d=null,h=3,g=!1,x=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=O)r(u),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(u)}}function w(O){if(y=!1,m(O),!x)if(n(s)!==null)x=!0,Ct(E);else{var z=n(u);z!==null&&dn(w,z.startTime-O)}}function E(O,z){x=!1,y&&(y=!1,p(N),N=-1),g=!0;var T=h;try{for(m(z),d=n(s);d!==null&&(!(d.expirationTime>z)||O&&!W());){var M=d.callback;if(typeof M=="function"){d.callback=null,h=d.priorityLevel;var b=M(d.expirationTime<=z);z=e.unstable_now(),typeof b=="function"?d.callback=b:d===n(s)&&r(s),m(z)}else r(s);d=n(s)}if(d!==null)var oe=!0;else{var Ce=n(u);Ce!==null&&dn(w,Ce.startTime-z),oe=!1}return oe}finally{d=null,h=T,g=!1}}var $=!1,S=null,N=-1,j=5,L=-1;function W(){return!(e.unstable_now()-L<j)}function Re(){if(S!==null){var O=e.unstable_now();L=O;var z=!0;try{z=S(!0,O)}finally{z?Ye():($=!1,S=null)}}else $=!1}var Ye;if(typeof c=="function")Ye=function(){c(Re)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,Xn=kt.port2;kt.port1.onmessage=Re,Ye=function(){Xn.postMessage(null)}}else Ye=function(){C(Re,0)};function Ct(O){S=O,$||($=!0,Ye())}function dn(O,z){N=C(function(){O(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,Ct(E))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var T=h;h=z;try{return O()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var T=h;h=O;try{return z()}finally{h=T}},e.unstable_scheduleCallback=function(O,z,T){var M=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?M+T:M):T=M,O){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=T+b,O={id:f++,callback:z,priorityLevel:O,startTime:T,expirationTime:b,sortIndex:-1},T>M?(O.sortIndex=T,t(u,O),n(s)===null&&O===n(u)&&(y?(p(N),N=-1):y=!0,dn(w,T-M))):(O.sortIndex=b,t(s,O),x||g||(x=!0,Ct(E))),O},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(O){var z=h;return function(){var T=h;h=z;try{return O.apply(this,arguments)}finally{h=T}}}})(bc);Ac.exports=bc;var up=Ac.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc=v,Me=up;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bc=new Set,gr={};function un(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for(gr[e]=t,e=0;e<t.length;e++)Bc.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,cp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function fp(e){return bl.call(nu,e)?!0:bl.call(tu,e)?!1:cp.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function dp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pp(e,t,n,r){if(t===null||typeof t>"u"||dp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ya=/[\-:]([a-z])/g;function Ka(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ya,Ka);me[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ya,Ka);me[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ya,Ka);me[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xa(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pp(t,n,o,r)&&(n=null),r||o===null?fp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xr=Symbol.for("react.element"),yn=Symbol.for("react.portal"),gn=Symbol.for("react.fragment"),Ga=Symbol.for("react.strict_mode"),Ul=Symbol.for("react.profiler"),Vc=Symbol.for("react.provider"),Wc=Symbol.for("react.context"),Za=Symbol.for("react.forward_ref"),Bl=Symbol.for("react.suspense"),Vl=Symbol.for("react.suspense_list"),Ja=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Hc=Symbol.for("react.offscreen"),ru=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,rl;function ir(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var ol=!1;function il(e,t){if(!e||ol)return"";ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ir(e):""}function mp(e){switch(e.tag){case 5:return ir(e.type);case 16:return ir("Lazy");case 13:return ir("Suspense");case 19:return ir("SuspenseList");case 0:case 2:case 15:return e=il(e.type,!1),e;case 11:return e=il(e.type.render,!1),e;case 1:return e=il(e.type,!0),e;default:return""}}function Wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gn:return"Fragment";case yn:return"Portal";case Ul:return"Profiler";case Ga:return"StrictMode";case Bl:return"Suspense";case Vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wc:return(e.displayName||"Context")+".Consumer";case Vc:return(e._context.displayName||"Context")+".Provider";case Za:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ja:return t=e.displayName||null,t!==null?t:Wl(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return Wl(e(t))}catch{}}return null}function hp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wl(t);case 8:return t===Ga?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vp(e){var t=Qc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=vp(e))}function Yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ou(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kc(e,t){t=t.checked,t!=null&&Xa(e,"checked",t,!1)}function Ql(e,t){Kc(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yl(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yl(e,t,n){(t!=="number"||bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var lr=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(lr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function Xc(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function au(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,Zc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yp=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){yp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function Jc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function qc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Jc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var gp=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(e,t){if(t){if(gp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Zl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jl=null;function qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ql=null,On=null,Rn=null;function su(e){if(e=Vr(e)){if(typeof ql!="function")throw Error(k(280));var t=e.stateNode;t&&(t=yi(t),ql(e.stateNode,e.type,t))}}function ef(e){On?Rn?Rn.push(e):Rn=[e]:On=e}function tf(){if(On){var e=On,t=Rn;if(Rn=On=null,su(e),t)for(e=0;e<t.length;e++)su(t[e])}}function nf(e,t){return e(t)}function rf(){}var ll=!1;function of(e,t,n){if(ll)return e(t,n);ll=!0;try{return nf(e,t,n)}finally{ll=!1,(On!==null||Rn!==null)&&(rf(),tf())}}function xr(e,t){var n=e.stateNode;if(n===null)return null;var r=yi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var ea=!1;if(gt)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){ea=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{ea=!1}function wp(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var cr=!1,Uo=null,Bo=!1,ta=null,xp={onError:function(e){cr=!0,Uo=e}};function Sp(e,t,n,r,o,i,l,a,s){cr=!1,Uo=null,wp.apply(xp,arguments)}function Ep(e,t,n,r,o,i,l,a,s){if(Sp.apply(this,arguments),cr){if(cr){var u=Uo;cr=!1,Uo=null}else throw Error(k(198));Bo||(Bo=!0,ta=u)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uu(e){if(cn(e)!==e)throw Error(k(188))}function kp(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return uu(o),e;if(i===r)return uu(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function af(e){return e=kp(e),e!==null?sf(e):null}function sf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sf(e);if(t!==null)return t;e=e.sibling}return null}var uf=Me.unstable_scheduleCallback,cu=Me.unstable_cancelCallback,Cp=Me.unstable_shouldYield,$p=Me.unstable_requestPaint,q=Me.unstable_now,_p=Me.unstable_getCurrentPriorityLevel,es=Me.unstable_ImmediatePriority,cf=Me.unstable_UserBlockingPriority,Vo=Me.unstable_NormalPriority,Np=Me.unstable_LowPriority,ff=Me.unstable_IdlePriority,pi=null,ut=null;function Pp(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Rp,Tp=Math.log,Op=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(Tp(e)/Op|0)|0}var Jr=64,qr=4194304;function ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=ar(a):(i&=l,i!==0&&(r=ar(i)))}else l=n&~o,l!==0?r=ar(l):i!==0&&(r=ar(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),o=1<<n,r|=e[n],t&=~o;return r}function Lp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-qe(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Lp(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function df(){var e=Jr;return Jr<<=1,!(Jr&4194240)&&(Jr=64),e}function al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function jp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ts(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function pf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mf,ns,hf,vf,yf,ra=!1,eo=[],zt=null,jt=null,It=null,Sr=new Map,Er=new Map,Tt=[],Ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(t.pointerId)}}function Jn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Vr(t),t!==null&&ns(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Mp(e,t,n,r,o){switch(t){case"focusin":return zt=Jn(zt,e,t,n,r,o),!0;case"dragenter":return jt=Jn(jt,e,t,n,r,o),!0;case"mouseover":return It=Jn(It,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Sr.set(i,Jn(Sr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Er.set(i,Jn(Er.get(i)||null,e,t,n,r,o)),!0}return!1}function gf(e){var t=Gt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=lf(n),t!==null){e.blockedOn=t,yf(e.priority,function(){hf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=oa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jl=r,n.target.dispatchEvent(r),Jl=null}else return t=Vr(n),t!==null&&ns(t),e.blockedOn=n,!1;t.shift()}return!0}function du(e,t,n){Co(e)&&n.delete(t)}function Dp(){ra=!1,zt!==null&&Co(zt)&&(zt=null),jt!==null&&Co(jt)&&(jt=null),It!==null&&Co(It)&&(It=null),Sr.forEach(du),Er.forEach(du)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,ra||(ra=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,Dp)))}function kr(e){function t(o){return qn(o,e)}if(0<eo.length){qn(eo[0],e);for(var n=1;n<eo.length;n++){var r=eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&qn(zt,e),jt!==null&&qn(jt,e),It!==null&&qn(It,e),Sr.forEach(t),Er.forEach(t),n=0;n<Tt.length;n++)r=Tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)gf(n),n.blockedOn===null&&Tt.shift()}var Ln=Et.ReactCurrentBatchConfig,Ho=!0;function Fp(e,t,n,r){var o=U,i=Ln.transition;Ln.transition=null;try{U=1,rs(e,t,n,r)}finally{U=o,Ln.transition=i}}function Ap(e,t,n,r){var o=U,i=Ln.transition;Ln.transition=null;try{U=4,rs(e,t,n,r)}finally{U=o,Ln.transition=i}}function rs(e,t,n,r){if(Ho){var o=oa(e,t,n,r);if(o===null)yl(e,t,r,Qo,n),fu(e,r);else if(Mp(o,e,t,n,r))r.stopPropagation();else if(fu(e,r),t&4&&-1<Ip.indexOf(e)){for(;o!==null;){var i=Vr(o);if(i!==null&&mf(i),i=oa(e,t,n,r),i===null&&yl(e,t,r,Qo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var Qo=null;function oa(e,t,n,r){if(Qo=null,e=qa(r),e=Gt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qo=e,null}function wf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_p()){case es:return 1;case cf:return 4;case Vo:case Np:return 16;case ff:return 536870912;default:return 16}default:return 16}}var Rt=null,os=null,$o=null;function xf(){if($o)return $o;var e,t=os,n=t.length,r,o="value"in Rt?Rt.value:Rt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return $o=o.slice(e,1<r?1-r:void 0)}function _o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function pu(){return!1}function Fe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?to:pu,this.isPropagationStopped=pu,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},is=Fe(Hn),Br=Z({},Hn,{view:0,detail:0}),bp=Fe(Br),sl,ul,er,mi=Z({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(sl=e.screenX-er.screenX,ul=e.screenY-er.screenY):ul=sl=0,er=e),sl)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),mu=Fe(mi),Up=Z({},mi,{dataTransfer:0}),Bp=Fe(Up),Vp=Z({},Br,{relatedTarget:0}),cl=Fe(Vp),Wp=Z({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Hp=Fe(Wp),Qp=Z({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yp=Fe(Qp),Kp=Z({},Hn,{data:0}),hu=Fe(Kp),Xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zp[e])?!!t[e]:!1}function ls(){return Jp}var qp=Z({},Br,{key:function(e){if(e.key){var t=Xp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(e){return e.type==="keypress"?_o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),em=Fe(qp),tm=Z({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vu=Fe(tm),nm=Z({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),rm=Fe(nm),om=Z({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),im=Fe(om),lm=Z({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),am=Fe(lm),sm=[9,13,27,32],as=gt&&"CompositionEvent"in window,fr=null;gt&&"documentMode"in document&&(fr=document.documentMode);var um=gt&&"TextEvent"in window&&!fr,Sf=gt&&(!as||fr&&8<fr&&11>=fr),yu=" ",gu=!1;function Ef(e,t){switch(e){case"keyup":return sm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function cm(e,t){switch(e){case"compositionend":return kf(t);case"keypress":return t.which!==32?null:(gu=!0,yu);case"textInput":return e=t.data,e===yu&&gu?null:e;default:return null}}function fm(e,t){if(wn)return e==="compositionend"||!as&&Ef(e,t)?(e=xf(),$o=os=Rt=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sf&&t.locale!=="ko"?null:t.data;default:return null}}var dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dm[e.type]:t==="textarea"}function Cf(e,t,n,r){ef(r),t=Yo(t,"onChange"),0<t.length&&(n=new is("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var dr=null,Cr=null;function pm(e){If(e,0)}function hi(e){var t=En(e);if(Yc(t))return e}function mm(e,t){if(e==="change")return t}var $f=!1;if(gt){var fl;if(gt){var dl="oninput"in document;if(!dl){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),dl=typeof xu.oninput=="function"}fl=dl}else fl=!1;$f=fl&&(!document.documentMode||9<document.documentMode)}function Su(){dr&&(dr.detachEvent("onpropertychange",_f),Cr=dr=null)}function _f(e){if(e.propertyName==="value"&&hi(Cr)){var t=[];Cf(t,Cr,e,qa(e)),of(pm,t)}}function hm(e,t,n){e==="focusin"?(Su(),dr=t,Cr=n,dr.attachEvent("onpropertychange",_f)):e==="focusout"&&Su()}function vm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(Cr)}function ym(e,t){if(e==="click")return hi(t)}function gm(e,t){if(e==="input"||e==="change")return hi(t)}function wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:wm;function $r(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!bl.call(t,o)||!tt(e[o],t[o]))return!1}return!0}function Eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var n=Eu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eu(n)}}function Nf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pf(){for(var e=window,t=bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bo(e.document)}return t}function ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xm(e){var t=Pf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nf(n.ownerDocument.documentElement,n)){if(r!==null&&ss(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ku(n,i);var l=ku(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sm=gt&&"documentMode"in document&&11>=document.documentMode,xn=null,ia=null,pr=null,la=!1;function Cu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;la||xn==null||xn!==bo(r)||(r=xn,"selectionStart"in r&&ss(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&$r(pr,r)||(pr=r,r=Yo(ia,"onSelect"),0<r.length&&(t=new is("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xn)))}function no(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sn={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},pl={},Tf={};gt&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function vi(e){if(pl[e])return pl[e];if(!Sn[e])return e;var t=Sn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tf)return pl[e]=t[n];return e}var Of=vi("animationend"),Rf=vi("animationiteration"),Lf=vi("animationstart"),zf=vi("transitionend"),jf=new Map,$u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){jf.set(e,t),un(t,[e])}for(var ml=0;ml<$u.length;ml++){var hl=$u[ml],Em=hl.toLowerCase(),km=hl[0].toUpperCase()+hl.slice(1);Wt(Em,"on"+km)}Wt(Of,"onAnimationEnd");Wt(Rf,"onAnimationIteration");Wt(Lf,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(zf,"onTransitionEnd");Mn("onMouseEnter",["mouseout","mouseover"]);Mn("onMouseLeave",["mouseout","mouseover"]);Mn("onPointerEnter",["pointerout","pointerover"]);Mn("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cm=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function _u(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ep(r,t,void 0,e),e.currentTarget=null}function If(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;_u(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;_u(o,a,u),i=s}}}if(Bo)throw e=ta,Bo=!1,ta=null,e}function Q(e,t){var n=t[fa];n===void 0&&(n=t[fa]=new Set);var r=e+"__bubble";n.has(r)||(Mf(t,e,2,!1),n.add(r))}function vl(e,t,n){var r=0;t&&(r|=4),Mf(n,e,r,t)}var ro="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[ro]){e[ro]=!0,Bc.forEach(function(n){n!=="selectionchange"&&(Cm.has(n)||vl(n,!1,e),vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ro]||(t[ro]=!0,vl("selectionchange",!1,t))}}function Mf(e,t,n,r){switch(wf(t)){case 1:var o=Fp;break;case 4:o=Ap;break;default:o=rs}n=o.bind(null,t,n,e),o=void 0,!ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Gt(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}of(function(){var u=i,f=qa(n),d=[];e:{var h=jf.get(e);if(h!==void 0){var g=is,x=e;switch(e){case"keypress":if(_o(n)===0)break e;case"keydown":case"keyup":g=em;break;case"focusin":x="focus",g=cl;break;case"focusout":x="blur",g=cl;break;case"beforeblur":case"afterblur":g=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Bp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=rm;break;case Of:case Rf:case Lf:g=Hp;break;case zf:g=im;break;case"scroll":g=bp;break;case"wheel":g=am;break;case"copy":case"cut":case"paste":g=Yp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vu}var y=(t&4)!==0,C=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var c=u,m;c!==null;){m=c;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=xr(c,p),w!=null&&y.push(Nr(c,w,m)))),C)break;c=c.return}0<y.length&&(h=new g(h,x,null,n,f),d.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Jl&&(x=n.relatedTarget||n.fromElement)&&(Gt(x)||x[wt]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?Gt(x):null,x!==null&&(C=cn(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(y=mu,w="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=vu,w="onPointerLeave",p="onPointerEnter",c="pointer"),C=g==null?h:En(g),m=x==null?h:En(x),h=new y(w,c+"leave",g,n,f),h.target=C,h.relatedTarget=m,w=null,Gt(f)===u&&(y=new y(p,c+"enter",x,n,f),y.target=m,y.relatedTarget=C,w=y),C=w,g&&x)t:{for(y=g,p=x,c=0,m=y;m;m=pn(m))c++;for(m=0,w=p;w;w=pn(w))m++;for(;0<c-m;)y=pn(y),c--;for(;0<m-c;)p=pn(p),m--;for(;c--;){if(y===p||p!==null&&y===p.alternate)break t;y=pn(y),p=pn(p)}y=null}else y=null;g!==null&&Nu(d,h,g,y,!1),x!==null&&C!==null&&Nu(d,C,x,y,!0)}}e:{if(h=u?En(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=mm;else if(wu(h))if($f)E=gm;else{E=vm;var $=hm}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=ym);if(E&&(E=E(e,u))){Cf(d,E,n,f);break e}$&&$(e,h,u),e==="focusout"&&($=h._wrapperState)&&$.controlled&&h.type==="number"&&Yl(h,"number",h.value)}switch($=u?En(u):window,e){case"focusin":(wu($)||$.contentEditable==="true")&&(xn=$,ia=u,pr=null);break;case"focusout":pr=ia=xn=null;break;case"mousedown":la=!0;break;case"contextmenu":case"mouseup":case"dragend":la=!1,Cu(d,n,f);break;case"selectionchange":if(Sm)break;case"keydown":case"keyup":Cu(d,n,f)}var S;if(as)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else wn?Ef(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Sf&&n.locale!=="ko"&&(wn||N!=="onCompositionStart"?N==="onCompositionEnd"&&wn&&(S=xf()):(Rt=f,os="value"in Rt?Rt.value:Rt.textContent,wn=!0)),$=Yo(u,N),0<$.length&&(N=new hu(N,e,null,n,f),d.push({event:N,listeners:$}),S?N.data=S:(S=kf(n),S!==null&&(N.data=S)))),(S=um?cm(e,n):fm(e,n))&&(u=Yo(u,"onBeforeInput"),0<u.length&&(f=new hu("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=S))}If(d,t)})}function Nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=xr(e,n),i!=null&&r.unshift(Nr(e,i,o)),i=xr(e,t),i!=null&&r.push(Nr(e,i,o))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=xr(n,i),s!=null&&l.unshift(Nr(n,s,a))):o||(s=xr(n,i),s!=null&&l.push(Nr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var $m=/\r\n?/g,_m=/\u0000|\uFFFD/g;function Pu(e){return(typeof e=="string"?e:""+e).replace($m,`
`).replace(_m,"")}function oo(e,t,n){if(t=Pu(t),Pu(e)!==t&&n)throw Error(k(425))}function Ko(){}var aa=null,sa=null;function ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ca=typeof setTimeout=="function"?setTimeout:void 0,Nm=typeof clearTimeout=="function"?clearTimeout:void 0,Tu=typeof Promise=="function"?Promise:void 0,Pm=typeof queueMicrotask=="function"?queueMicrotask:typeof Tu<"u"?function(e){return Tu.resolve(null).then(e).catch(Tm)}:ca;function Tm(e){setTimeout(function(){throw e})}function gl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);kr(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ou(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Qn,Pr="__reactProps$"+Qn,wt="__reactContainer$"+Qn,fa="__reactEvents$"+Qn,Om="__reactListeners$"+Qn,Rm="__reactHandles$"+Qn;function Gt(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ou(e);e!==null;){if(n=e[lt])return n;e=Ou(e)}return t}e=n,n=e.parentNode}return null}function Vr(e){return e=e[lt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function yi(e){return e[Pr]||null}var da=[],kn=-1;function Ht(e){return{current:e}}function Y(e){0>kn||(e.current=da[kn],da[kn]=null,kn--)}function H(e,t){kn++,da[kn]=e.current,e.current=t}var Vt={},we=Ht(Vt),Ne=Ht(!1),nn=Vt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Pe(e){return e=e.childContextTypes,e!=null}function Xo(){Y(Ne),Y(we)}function Ru(e,t,n){if(we.current!==Vt)throw Error(k(168));H(we,t),H(Ne,n)}function Df(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,hp(e)||"Unknown",o));return Z({},n,r)}function Go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,nn=we.current,H(we,e),H(Ne,Ne.current),!0}function Lu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Df(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,Y(Ne),Y(we),H(we,e)):Y(Ne),H(Ne,n)}var mt=null,gi=!1,wl=!1;function Ff(e){mt===null?mt=[e]:mt.push(e)}function Lm(e){gi=!0,Ff(e)}function Qt(){if(!wl&&mt!==null){wl=!0;var e=0,t=U;try{var n=mt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,gi=!1}catch(o){throw mt!==null&&(mt=mt.slice(e+1)),uf(es,Qt),o}finally{U=t,wl=!1}}return null}var Cn=[],$n=0,Zo=null,Jo=0,be=[],Ue=0,rn=null,ht=1,vt="";function Kt(e,t){Cn[$n++]=Jo,Cn[$n++]=Zo,Zo=e,Jo=t}function Af(e,t,n){be[Ue++]=ht,be[Ue++]=vt,be[Ue++]=rn,rn=e;var r=ht;e=vt;var o=32-qe(r)-1;r&=~(1<<o),n+=1;var i=32-qe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ht=1<<32-qe(t)+o|n<<o|r,vt=i+e}else ht=1<<i|n<<o|r,vt=e}function us(e){e.return!==null&&(Kt(e,1),Af(e,1,0))}function cs(e){for(;e===Zo;)Zo=Cn[--$n],Cn[$n]=null,Jo=Cn[--$n],Cn[$n]=null;for(;e===rn;)rn=be[--Ue],be[Ue]=null,vt=be[--Ue],be[Ue]=null,ht=be[--Ue],be[Ue]=null}var je=null,ze=null,K=!1,Ze=null;function bf(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,ze=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:ht,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,ze=null,!0):!1;default:return!1}}function pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ma(e){if(K){var t=ze;if(t){var n=t;if(!zu(e,t)){if(pa(e))throw Error(k(418));t=Mt(n.nextSibling);var r=je;t&&zu(e,t)?bf(r,n):(e.flags=e.flags&-4097|2,K=!1,je=e)}}else{if(pa(e))throw Error(k(418));e.flags=e.flags&-4097|2,K=!1,je=e}}}function ju(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function io(e){if(e!==je)return!1;if(!K)return ju(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ua(e.type,e.memoizedProps)),t&&(t=ze)){if(pa(e))throw Uf(),Error(k(418));for(;t;)bf(e,t),t=Mt(t.nextSibling)}if(ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=je?Mt(e.stateNode.nextSibling):null;return!0}function Uf(){for(var e=ze;e;)e=Mt(e.nextSibling)}function Fn(){ze=je=null,K=!1}function fs(e){Ze===null?Ze=[e]:Ze.push(e)}var zm=Et.ReactCurrentBatchConfig;function Xe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var qo=Ht(null),ei=null,_n=null,ds=null;function ps(){ds=_n=ei=null}function ms(e){var t=qo.current;Y(qo),e._currentValue=t}function ha(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){ei=e,ds=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(ds!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(ei===null)throw Error(k(308));_n=e,ei.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var Zt=null;function hs(e){Zt===null?Zt=[e]:Zt.push(e)}function Bf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,hs(t)):(n.next=o.next,o.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,xt(e,n)}return o=r.interleaved,o===null?(t.next=t,hs(r)):(t.next=o.next,o.next=t),r.interleaved=t,xt(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ts(e,n)}}function Iu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ti(e,t,n,r){var o=e.updateQueue;Pt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;l=0,f=u=s=null,a=i;do{var h=a.lane,g=a.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(h=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){d=x.call(g,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(g,d,h):x,h==null)break e;d=Z({},d,h);break e;case 2:Pt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,s=d):f=f.next=g,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(f===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ln|=l,e.lanes=l,e.memoizedState=d}}function Mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var Wf=new Uc.Component().refs;function va(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wi={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),o=At(e),i=yt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(et(t,e,o,r),No(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),o=At(e),i=yt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Dt(e,i,o),t!==null&&(et(t,e,o,r),No(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=At(e),o=yt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Dt(e,o,r),t!==null&&(et(t,e,r,n),No(t,e,r))}};function Du(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(o,i):!0}function Hf(e,t,n){var r=!1,o=Vt,i=t.contextType;return typeof i=="object"&&i!==null?i=We(i):(o=Pe(t)?nn:we.current,r=t.contextTypes,i=(r=r!=null)?Dn(e,o):Vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function ya(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Wf,vs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=We(i):(i=Pe(t)?nn:we.current,o.context=Dn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(va(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&wi.enqueueReplaceState(o,o.state,null),ti(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Wf&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function lo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Au(e){var t=e._init;return t(e._payload)}function Qf(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=bt(p,c),p.index=0,p.sibling=null,p}function i(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,m,w){return c===null||c.tag!==6?(c=_l(m,p.mode,w),c.return=p,c):(c=o(c,m),c.return=p,c)}function s(p,c,m,w){var E=m.type;return E===gn?f(p,c,m.props.children,w,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Nt&&Au(E)===c.type)?(w=o(c,m.props),w.ref=tr(p,c,m),w.return=p,w):(w=zo(m.type,m.key,m.props,null,p.mode,w),w.ref=tr(p,c,m),w.return=p,w)}function u(p,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Nl(m,p.mode,w),c.return=p,c):(c=o(c,m.children||[]),c.return=p,c)}function f(p,c,m,w,E){return c===null||c.tag!==7?(c=en(m,p.mode,w,E),c.return=p,c):(c=o(c,m),c.return=p,c)}function d(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=_l(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Xr:return m=zo(c.type,c.key,c.props,null,p.mode,m),m.ref=tr(p,null,c),m.return=p,m;case yn:return c=Nl(c,p.mode,m),c.return=p,c;case Nt:var w=c._init;return d(p,w(c._payload),m)}if(lr(c)||Gn(c))return c=en(c,p.mode,m,null),c.return=p,c;lo(p,c)}return null}function h(p,c,m,w){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(p,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Xr:return m.key===E?s(p,c,m,w):null;case yn:return m.key===E?u(p,c,m,w):null;case Nt:return E=m._init,h(p,c,E(m._payload),w)}if(lr(m)||Gn(m))return E!==null?null:f(p,c,m,w,null);lo(p,m)}return null}function g(p,c,m,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(c,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xr:return p=p.get(w.key===null?m:w.key)||null,s(c,p,w,E);case yn:return p=p.get(w.key===null?m:w.key)||null,u(c,p,w,E);case Nt:var $=w._init;return g(p,c,m,$(w._payload),E)}if(lr(w)||Gn(w))return p=p.get(m)||null,f(c,p,w,E,null);lo(c,w)}return null}function x(p,c,m,w){for(var E=null,$=null,S=c,N=c=0,j=null;S!==null&&N<m.length;N++){S.index>N?(j=S,S=null):j=S.sibling;var L=h(p,S,m[N],w);if(L===null){S===null&&(S=j);break}e&&S&&L.alternate===null&&t(p,S),c=i(L,c,N),$===null?E=L:$.sibling=L,$=L,S=j}if(N===m.length)return n(p,S),K&&Kt(p,N),E;if(S===null){for(;N<m.length;N++)S=d(p,m[N],w),S!==null&&(c=i(S,c,N),$===null?E=S:$.sibling=S,$=S);return K&&Kt(p,N),E}for(S=r(p,S);N<m.length;N++)j=g(S,p,N,m[N],w),j!==null&&(e&&j.alternate!==null&&S.delete(j.key===null?N:j.key),c=i(j,c,N),$===null?E=j:$.sibling=j,$=j);return e&&S.forEach(function(W){return t(p,W)}),K&&Kt(p,N),E}function y(p,c,m,w){var E=Gn(m);if(typeof E!="function")throw Error(k(150));if(m=E.call(m),m==null)throw Error(k(151));for(var $=E=null,S=c,N=c=0,j=null,L=m.next();S!==null&&!L.done;N++,L=m.next()){S.index>N?(j=S,S=null):j=S.sibling;var W=h(p,S,L.value,w);if(W===null){S===null&&(S=j);break}e&&S&&W.alternate===null&&t(p,S),c=i(W,c,N),$===null?E=W:$.sibling=W,$=W,S=j}if(L.done)return n(p,S),K&&Kt(p,N),E;if(S===null){for(;!L.done;N++,L=m.next())L=d(p,L.value,w),L!==null&&(c=i(L,c,N),$===null?E=L:$.sibling=L,$=L);return K&&Kt(p,N),E}for(S=r(p,S);!L.done;N++,L=m.next())L=g(S,p,N,L.value,w),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?N:L.key),c=i(L,c,N),$===null?E=L:$.sibling=L,$=L);return e&&S.forEach(function(Re){return t(p,Re)}),K&&Kt(p,N),E}function C(p,c,m,w){if(typeof m=="object"&&m!==null&&m.type===gn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Xr:e:{for(var E=m.key,$=c;$!==null;){if($.key===E){if(E=m.type,E===gn){if($.tag===7){n(p,$.sibling),c=o($,m.props.children),c.return=p,p=c;break e}}else if($.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Nt&&Au(E)===$.type){n(p,$.sibling),c=o($,m.props),c.ref=tr(p,$,m),c.return=p,p=c;break e}n(p,$);break}else t(p,$);$=$.sibling}m.type===gn?(c=en(m.props.children,p.mode,w,m.key),c.return=p,p=c):(w=zo(m.type,m.key,m.props,null,p.mode,w),w.ref=tr(p,c,m),w.return=p,p=w)}return l(p);case yn:e:{for($=m.key;c!==null;){if(c.key===$)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=o(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Nl(m,p.mode,w),c.return=p,p=c}return l(p);case Nt:return $=m._init,C(p,c,$(m._payload),w)}if(lr(m))return x(p,c,m,w);if(Gn(m))return y(p,c,m,w);lo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,m),c.return=p,p=c):(n(p,c),c=_l(m,p.mode,w),c.return=p,p=c),l(p)):n(p,c)}return C}var An=Qf(!0),Yf=Qf(!1),Wr={},ct=Ht(Wr),Tr=Ht(Wr),Or=Ht(Wr);function Jt(e){if(e===Wr)throw Error(k(174));return e}function ys(e,t){switch(H(Or,t),H(Tr,e),H(ct,Wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xl(t,e)}Y(ct),H(ct,t)}function bn(){Y(ct),Y(Tr),Y(Or)}function Kf(e){Jt(Or.current);var t=Jt(ct.current),n=Xl(t,e.type);t!==n&&(H(Tr,e),H(ct,n))}function gs(e){Tr.current===e&&(Y(ct),Y(Tr))}var X=Ht(0);function ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xl=[];function ws(){for(var e=0;e<xl.length;e++)xl[e]._workInProgressVersionPrimary=null;xl.length=0}var Po=Et.ReactCurrentDispatcher,Sl=Et.ReactCurrentBatchConfig,on=0,G=null,ne=null,le=null,ri=!1,mr=!1,Rr=0,jm=0;function he(){throw Error(k(321))}function xs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function Ss(e,t,n,r,o,i){if(on=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Po.current=e===null||e.memoizedState===null?Fm:Am,e=n(r,o),mr){i=0;do{if(mr=!1,Rr=0,25<=i)throw Error(k(301));i+=1,le=ne=null,t.updateQueue=null,Po.current=bm,e=n(r,o)}while(mr)}if(Po.current=oi,t=ne!==null&&ne.next!==null,on=0,le=ne=G=null,ri=!1,t)throw Error(k(300));return e}function Es(){var e=Rr!==0;return Rr=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?G.memoizedState=le=e:le=le.next=e,le}function He(){if(ne===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=le===null?G.memoizedState:le.next;if(t!==null)le=t,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?G.memoizedState=le=e:le=le.next=e}return le}function Lr(e,t){return typeof t=="function"?t(e):t}function El(e){var t=He(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var f=u.lane;if((on&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,G.lanes|=f,ln|=f}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,tt(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,ln|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function kl(e){var t=He(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);tt(i,t.memoizedState)||(_e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Xf(){}function Gf(e,t){var n=G,r=He(),o=t(),i=!tt(r.memoizedState,o);if(i&&(r.memoizedState=o,_e=!0),r=r.queue,ks(qf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,zr(9,Jf.bind(null,n,r,o,t),void 0,null),ae===null)throw Error(k(349));on&30||Zf(n,t,o)}return o}function Zf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jf(e,t,n,r){t.value=n,t.getSnapshot=r,ed(t)&&td(e)}function qf(e,t,n){return n(function(){ed(t)&&td(e)})}function ed(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function td(e){var t=xt(e,1);t!==null&&et(t,e,1,-1)}function bu(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},t.queue=e,e=e.dispatch=Dm.bind(null,G,e),[t.memoizedState,e]}function zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nd(){return He().memoizedState}function To(e,t,n,r){var o=rt();G.flags|=e,o.memoizedState=zr(1|t,n,void 0,r===void 0?null:r)}function xi(e,t,n,r){var o=He();r=r===void 0?null:r;var i=void 0;if(ne!==null){var l=ne.memoizedState;if(i=l.destroy,r!==null&&xs(r,l.deps)){o.memoizedState=zr(t,n,i,r);return}}G.flags|=e,o.memoizedState=zr(1|t,n,i,r)}function Uu(e,t){return To(8390656,8,e,t)}function ks(e,t){return xi(2048,8,e,t)}function rd(e,t){return xi(4,2,e,t)}function od(e,t){return xi(4,4,e,t)}function id(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,n){return n=n!=null?n.concat([e]):null,xi(4,4,id.bind(null,t,e),n)}function Cs(){}function ad(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sd(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ud(e,t,n){return on&21?(tt(n,t)||(n=df(),G.lanes|=n,ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function Im(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Sl.transition;Sl.transition={};try{e(!1),t()}finally{U=n,Sl.transition=r}}function cd(){return He().memoizedState}function Mm(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fd(e))dd(t,n);else if(n=Bf(e,t,n,r),n!==null){var o=Se();et(n,e,r,o),pd(n,t,r)}}function Dm(e,t,n){var r=At(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fd(e))dd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,tt(a,l)){var s=t.interleaved;s===null?(o.next=o,hs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Bf(e,t,o,r),n!==null&&(o=Se(),et(n,e,r,o),pd(n,t,r))}}function fd(e){var t=e.alternate;return e===G||t!==null&&t===G}function dd(e,t){mr=ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ts(e,n)}}var oi={readContext:We,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Fm={readContext:We,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Uu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,To(4194308,4,id.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Mm.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:bu,useDebugValue:Cs,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=bu(!1),t=e[0];return e=Im.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=rt();if(K){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ae===null)throw Error(k(349));on&30||Zf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Uu(qf.bind(null,r,i,e),[e]),r.flags|=2048,zr(9,Jf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=rt(),t=ae.identifierPrefix;if(K){var n=vt,r=ht;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Am={readContext:We,useCallback:ad,useContext:We,useEffect:ks,useImperativeHandle:ld,useInsertionEffect:rd,useLayoutEffect:od,useMemo:sd,useReducer:El,useRef:nd,useState:function(){return El(Lr)},useDebugValue:Cs,useDeferredValue:function(e){var t=He();return ud(t,ne.memoizedState,e)},useTransition:function(){var e=El(Lr)[0],t=He().memoizedState;return[e,t]},useMutableSource:Xf,useSyncExternalStore:Gf,useId:cd,unstable_isNewReconciler:!1},bm={readContext:We,useCallback:ad,useContext:We,useEffect:ks,useImperativeHandle:ld,useInsertionEffect:rd,useLayoutEffect:od,useMemo:sd,useReducer:kl,useRef:nd,useState:function(){return kl(Lr)},useDebugValue:Cs,useDeferredValue:function(e){var t=He();return ne===null?t.memoizedState=e:ud(t,ne.memoizedState,e)},useTransition:function(){var e=kl(Lr)[0],t=He().memoizedState;return[e,t]},useMutableSource:Xf,useSyncExternalStore:Gf,useId:cd,unstable_isNewReconciler:!1};function Un(e,t){try{var n="",r=t;do n+=mp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ga(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Um=typeof WeakMap=="function"?WeakMap:Map;function md(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){li||(li=!0,Pa=r),ga(e,t)},n}function hd(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ga(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ga(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Um;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=th.bind(null,e,t,n),t.then(e,e))}function Vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var Bm=Et.ReactCurrentOwner,_e=!1;function xe(e,t,n,r){t.child=e===null?Yf(t,null,n,r):An(t,e.child,n,r)}function Hu(e,t,n,r,o){n=n.render;var i=t.ref;return zn(t,o),r=Ss(e,t,n,r,i,o),n=Es(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(K&&n&&us(t),t.flags|=1,xe(e,t,r,o),t.child)}function Qu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ls(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,vd(e,t,i,r,o)):(e=zo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(l,r)&&e.ref===t.ref)return St(e,t,o)}return t.flags|=1,e=bt(i,r),e.ref=t.ref,e.return=t,t.child=e}function vd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if($r(i,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,St(e,t,o)}return wa(e,t,n,r,o)}function yd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Pn,Le),Le|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Pn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(Pn,Le),Le|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(Pn,Le),Le|=r;return xe(e,t,o,n),t.child}function gd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wa(e,t,n,r,o){var i=Pe(n)?nn:we.current;return i=Dn(t,i),zn(t,o),n=Ss(e,t,n,r,i,o),r=Es(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(K&&r&&us(t),t.flags|=1,xe(e,t,n,o),t.child)}function Yu(e,t,n,r,o){if(Pe(n)){var i=!0;Go(t)}else i=!1;if(zn(t,o),t.stateNode===null)Oo(e,t),Hf(t,n,r),ya(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Pe(n)?nn:we.current,u=Dn(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Fu(t,l,r,u),Pt=!1;var h=t.memoizedState;l.state=h,ti(t,r,l,o),s=t.memoizedState,a!==r||h!==s||Ne.current||Pt?(typeof f=="function"&&(va(t,n,f,r),s=t.memoizedState),(a=Pt||Du(t,n,a,r,h,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Vf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Xe(t.type,a),l.props=u,d=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=We(s):(s=Pe(n)?nn:we.current,s=Dn(t,s));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||h!==s)&&Fu(t,l,r,s),Pt=!1,h=t.memoizedState,l.state=h,ti(t,r,l,o);var x=t.memoizedState;a!==d||h!==x||Ne.current||Pt?(typeof g=="function"&&(va(t,n,g,r),x=t.memoizedState),(u=Pt||Du(t,n,u,r,h,x,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return xa(e,t,n,r,i,o)}function xa(e,t,n,r,o,i){gd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Lu(t,n,!1),St(e,t,i);r=t.stateNode,Bm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=An(t,e.child,null,i),t.child=An(t,null,a,i)):xe(e,t,a,i),t.memoizedState=r.state,o&&Lu(t,n,!0),t.child}function wd(e){var t=e.stateNode;t.pendingContext?Ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ru(e,t.context,!1),ys(e,t.containerInfo)}function Ku(e,t,n,r,o){return Fn(),fs(o),t.flags|=256,xe(e,t,n,r),t.child}var Sa={dehydrated:null,treeContext:null,retryLane:0};function Ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function xd(e,t,n){var r=t.pendingProps,o=X.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(X,o&1),e===null)return ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ki(l,r,0,null),e=en(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ea(n),t.memoizedState=Sa,e):$s(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Vm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=bt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=bt(a,i):(i=en(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ea(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Sa,r}return i=e.child,e=i.sibling,r=bt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $s(e,t){return t=ki({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,n,r){return r!==null&&fs(r),An(t,e.child,null,n),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Cl(Error(k(422))),ao(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ki({mode:"visible",children:r.children},o,0,null),i=en(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&An(t,e.child,null,l),t.child.memoizedState=Ea(l),t.memoizedState=Sa,i);if(!(t.mode&1))return ao(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=Cl(i,r,void 0),ao(e,t,l,r)}if(a=(l&e.childLanes)!==0,_e||a){if(r=ae,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,xt(e,o),et(r,e,o,-1))}return Rs(),r=Cl(Error(k(421))),ao(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=nh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ze=Mt(o.nextSibling),je=t,K=!0,Ze=null,e!==null&&(be[Ue++]=ht,be[Ue++]=vt,be[Ue++]=rn,ht=e.id,vt=e.overflow,rn=t),t=$s(t,r.children),t.flags|=4096,t)}function Xu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ha(e.return,t,n)}function $l(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Sd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(xe(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xu(e,n,t);else if(e.tag===19)Xu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(X,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ni(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),$l(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ni(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}$l(t,!0,n,null,i);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wm(e,t,n){switch(t.tag){case 3:wd(t),Fn();break;case 5:Kf(t);break;case 1:Pe(t.type)&&Go(t);break;case 4:ys(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(qo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?xd(e,t,n):(H(X,X.current&1),e=St(e,t,n),e!==null?e.sibling:null);H(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,yd(e,t,n)}return St(e,t,n)}var Ed,ka,kd,Cd;Ed=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ka=function(){};kd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Jt(ct.current);var i=null;switch(n){case"input":o=Hl(e,o),r=Hl(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=Kl(e,o),r=Kl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ko)}Gl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Q("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Cd=function(e,t,n,r){n!==r&&(t.flags|=4)};function nr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hm(e,t,n){var r=t.pendingProps;switch(cs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Pe(t.type)&&Xo(),ve(t),null;case 3:return r=t.stateNode,bn(),Y(Ne),Y(we),ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Ra(Ze),Ze=null))),ka(e,t),ve(t),null;case 5:gs(t);var o=Jt(Or.current);if(n=t.type,e!==null&&t.stateNode!=null)kd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ve(t),null}if(e=Jt(ct.current),io(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[lt]=t,r[Pr]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<sr.length;o++)Q(sr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":ou(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":lu(r,i),Q("invalid",r)}Gl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&oo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&oo(r.textContent,a,e),o=["children",""+a]):gr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":Gr(r),iu(r,i,!0);break;case"textarea":Gr(r),au(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ko)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[lt]=t,e[Pr]=r,Ed(e,t,!1,!1),t.stateNode=e;e:{switch(l=Zl(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<sr.length;o++)Q(sr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":ou(e,r),o=Hl(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),Q("invalid",e);break;case"textarea":lu(e,r),o=Kl(e,r),Q("invalid",e);break;default:o=r}Gl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?qc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Zc(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&wr(e,s):typeof s=="number"&&wr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(gr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Q("scroll",e):s!=null&&Xa(e,i,s,l))}switch(n){case"input":Gr(e),iu(e,r,!1);break;case"textarea":Gr(e),au(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Cd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Jt(Or.current),Jt(ct.current),io(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:oo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return ve(t),null;case 13:if(Y(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&ze!==null&&t.mode&1&&!(t.flags&128))Uf(),Fn(),t.flags|=98560,i=!1;else if(i=io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[lt]=t}else Fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else Ze!==null&&(Ra(Ze),Ze=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?re===0&&(re=3):Rs())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return bn(),ka(e,t),e===null&&_r(t.stateNode.containerInfo),ve(t),null;case 10:return ms(t.type._context),ve(t),null;case 17:return Pe(t.type)&&Xo(),ve(t),null;case 19:if(Y(X),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)nr(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ni(e),l!==null){for(t.flags|=128,nr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(X,X.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>Bn&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ni(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!K)return ve(t),null}else 2*q()-i.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=X.current,H(X,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Os(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Qm(e,t){switch(cs(t),t.tag){case 1:return Pe(t.type)&&Xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),Y(Ne),Y(we),ws(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gs(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return bn(),null;case 10:return ms(t.type._context),null;case 22:case 23:return Os(),null;case 24:return null;default:return null}}var so=!1,ge=!1,Ym=typeof WeakSet=="function"?WeakSet:Set,R=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Ca(e,t,n){try{n()}catch(r){J(e,t,r)}}var Gu=!1;function Km(e,t){if(aa=Ho,e=Pf(),ss(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,d=e,h=null;t:for(;;){for(var g;d!==n||o!==0&&d.nodeType!==3||(a=l+o),d!==i||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===e)break t;if(h===n&&++u===o&&(a=l),h===i&&++f===r&&(s=l),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(sa={focusedElem:e,selectionRange:n},Ho=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,C=x.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Xe(t.type,y),C);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){J(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return x=Gu,Gu=!1,x}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ca(t,n,i)}o=o.next}while(o!==r)}}function Si(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $a(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $d(e){var t=e.alternate;t!==null&&(e.alternate=null,$d(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Pr],delete t[fa],delete t[Om],delete t[Rm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _d(e){return e.tag===5||e.tag===3||e.tag===4}function Zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ko));else if(r!==4&&(e=e.child,e!==null))for(_a(e,t,n),e=e.sibling;e!==null;)_a(e,t,n),e=e.sibling}function Na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Na(e,t,n),e=e.sibling;e!==null;)Na(e,t,n),e=e.sibling}var ce=null,Ge=!1;function $t(e,t,n){for(n=n.child;n!==null;)Nd(e,t,n),n=n.sibling}function Nd(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(pi,n)}catch{}switch(n.tag){case 5:ge||Nn(n,t);case 6:var r=ce,o=Ge;ce=null,$t(e,t,n),ce=r,Ge=o,ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?gl(e.parentNode,n):e.nodeType===1&&gl(e,n),kr(e)):gl(ce,n.stateNode));break;case 4:r=ce,o=Ge,ce=n.stateNode.containerInfo,Ge=!0,$t(e,t,n),ce=r,Ge=o;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ca(n,t,l),o=o.next}while(o!==r)}$t(e,t,n);break;case 1:if(!ge&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,$t(e,t,n),ge=r):$t(e,t,n);break;default:$t(e,t,n)}}function Ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ym),t.forEach(function(r){var o=rh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,Ge=!1;break e;case 3:ce=a.stateNode.containerInfo,Ge=!0;break e;case 4:ce=a.stateNode.containerInfo,Ge=!0;break e}a=a.return}if(ce===null)throw Error(k(160));Nd(i,l,o),ce=null,Ge=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){J(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}function Pd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),nt(e),r&4){try{hr(3,e,e.return),Si(3,e)}catch(y){J(e,e.return,y)}try{hr(5,e,e.return)}catch(y){J(e,e.return,y)}}break;case 1:Ke(t,e),nt(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(Ke(t,e),nt(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var o=e.stateNode;try{wr(o,"")}catch(y){J(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Kc(o,i),Zl(a,l);var u=Zl(a,i);for(l=0;l<s.length;l+=2){var f=s[l],d=s[l+1];f==="style"?qc(o,d):f==="dangerouslySetInnerHTML"?Zc(o,d):f==="children"?wr(o,d):Xa(o,f,d,u)}switch(a){case"input":Ql(o,i);break;case"textarea":Xc(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Tn(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?Tn(o,!!i.multiple,i.defaultValue,!0):Tn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Pr]=i}catch(y){J(e,e.return,y)}}break;case 6:if(Ke(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){J(e,e.return,y)}}break;case 3:if(Ke(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{kr(t.containerInfo)}catch(y){J(e,e.return,y)}break;case 4:Ke(t,e),nt(e);break;case 13:Ke(t,e),nt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ps=q())),r&4&&Ju(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||f,Ke(t,e),ge=u):Ke(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(R=e,f=e.child;f!==null;){for(d=R=f;R!==null;){switch(h=R,g=h.child,h.tag){case 0:case 11:case 14:case 15:hr(4,h,h.return);break;case 1:Nn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){J(r,n,y)}}break;case 5:Nn(h,h.return);break;case 22:if(h.memoizedState!==null){ec(d);continue}}g!==null?(g.return=h,R=g):ec(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Jc("display",l))}catch(y){J(e,e.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){J(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ke(t,e),nt(e),r&4&&Ju(e);break;case 21:break;default:Ke(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_d(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(wr(o,""),r.flags&=-33);var i=Zu(e);Na(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Zu(e);_a(e,a,l);break;default:throw Error(k(161))}}catch(s){J(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xm(e,t,n){R=e,Td(e)}function Td(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||so;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ge;a=so;var u=ge;if(so=l,(ge=s)&&!u)for(R=o;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?tc(o):s!==null?(s.return=l,R=s):tc(o);for(;i!==null;)R=i,Td(i),i=i.sibling;R=o,so=a,ge=u}qu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):qu(e)}}function qu(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Si(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Mu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&kr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ge||t.flags&512&&$a(t)}catch(h){J(t,t.return,h)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function ec(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function tc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Si(4,t)}catch(s){J(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){J(t,o,s)}}var i=t.return;try{$a(t)}catch(s){J(t,i,s)}break;case 5:var l=t.return;try{$a(t)}catch(s){J(t,l,s)}}}catch(s){J(t,t.return,s)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var Gm=Math.ceil,ii=Et.ReactCurrentDispatcher,_s=Et.ReactCurrentOwner,Ve=Et.ReactCurrentBatchConfig,D=0,ae=null,te=null,pe=0,Le=0,Pn=Ht(0),re=0,jr=null,ln=0,Ei=0,Ns=0,vr=null,$e=null,Ps=0,Bn=1/0,pt=null,li=!1,Pa=null,Ft=null,uo=!1,Lt=null,ai=0,yr=0,Ta=null,Ro=-1,Lo=0;function Se(){return D&6?q():Ro!==-1?Ro:Ro=q()}function At(e){return e.mode&1?D&2&&pe!==0?pe&-pe:zm.transition!==null?(Lo===0&&(Lo=df()),Lo):(e=U,e!==0||(e=window.event,e=e===void 0?16:wf(e.type)),e):1}function et(e,t,n,r){if(50<yr)throw yr=0,Ta=null,Error(k(185));Ur(e,n,r),(!(D&2)||e!==ae)&&(e===ae&&(!(D&2)&&(Ei|=n),re===4&&Ot(e,pe)),Te(e,r),n===1&&D===0&&!(t.mode&1)&&(Bn=q()+500,gi&&Qt()))}function Te(e,t){var n=e.callbackNode;zp(e,t);var r=Wo(e,e===ae?pe:0);if(r===0)n!==null&&cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cu(n),t===1)e.tag===0?Lm(nc.bind(null,e)):Ff(nc.bind(null,e)),Pm(function(){!(D&6)&&Qt()}),n=null;else{switch(pf(r)){case 1:n=es;break;case 4:n=cf;break;case 16:n=Vo;break;case 536870912:n=ff;break;default:n=Vo}n=Dd(n,Od.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Od(e,t){if(Ro=-1,Lo=0,D&6)throw Error(k(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=Wo(e,e===ae?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=si(e,r);else{t=r;var o=D;D|=2;var i=Ld();(ae!==e||pe!==t)&&(pt=null,Bn=q()+500,qt(e,t));do try{qm();break}catch(a){Rd(e,a)}while(!0);ps(),ii.current=i,D=o,te!==null?t=0:(ae=null,pe=0,t=re)}if(t!==0){if(t===2&&(o=na(e),o!==0&&(r=o,t=Oa(e,o))),t===1)throw n=jr,qt(e,0),Ot(e,r),Te(e,q()),n;if(t===6)Ot(e,r);else{if(o=e.current.alternate,!(r&30)&&!Zm(o)&&(t=si(e,r),t===2&&(i=na(e),i!==0&&(r=i,t=Oa(e,i))),t===1))throw n=jr,qt(e,0),Ot(e,r),Te(e,q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Xt(e,$e,pt);break;case 3:if(Ot(e,r),(r&130023424)===r&&(t=Ps+500-q(),10<t)){if(Wo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ca(Xt.bind(null,e,$e,pt),t);break}Xt(e,$e,pt);break;case 4:if(Ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-qe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gm(r/1960))-r,10<r){e.timeoutHandle=ca(Xt.bind(null,e,$e,pt),r);break}Xt(e,$e,pt);break;case 5:Xt(e,$e,pt);break;default:throw Error(k(329))}}}return Te(e,q()),e.callbackNode===n?Od.bind(null,e):null}function Oa(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(qt(e,t).flags|=256),e=si(e,t),e!==2&&(t=$e,$e=n,t!==null&&Ra(t)),e}function Ra(e){$e===null?$e=e:$e.push.apply($e,e)}function Zm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ot(e,t){for(t&=~Ns,t&=~Ei,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function nc(e){if(D&6)throw Error(k(327));jn();var t=Wo(e,0);if(!(t&1))return Te(e,q()),null;var n=si(e,t);if(e.tag!==0&&n===2){var r=na(e);r!==0&&(t=r,n=Oa(e,r))}if(n===1)throw n=jr,qt(e,0),Ot(e,t),Te(e,q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,$e,pt),Te(e,q()),null}function Ts(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Bn=q()+500,gi&&Qt())}}function an(e){Lt!==null&&Lt.tag===0&&!(D&6)&&jn();var t=D;D|=1;var n=Ve.transition,r=U;try{if(Ve.transition=null,U=1,e)return e()}finally{U=r,Ve.transition=n,D=t,!(D&6)&&Qt()}}function Os(){Le=Pn.current,Y(Pn)}function qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nm(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(cs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xo();break;case 3:bn(),Y(Ne),Y(we),ws();break;case 5:gs(r);break;case 4:bn();break;case 13:Y(X);break;case 19:Y(X);break;case 10:ms(r.type._context);break;case 22:case 23:Os()}n=n.return}if(ae=e,te=e=bt(e.current,null),pe=Le=t,re=0,jr=null,Ns=Ei=ln=0,$e=vr=null,Zt!==null){for(t=0;t<Zt.length;t++)if(n=Zt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Zt=null}return e}function Rd(e,t){do{var n=te;try{if(ps(),Po.current=oi,ri){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ri=!1}if(on=0,le=ne=G=null,mr=!1,Rr=0,_s.current=null,n===null||n.return===null){re=1,jr=t,te=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=pe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Vu(l);if(g!==null){g.flags&=-257,Wu(g,l,a,i,t),g.mode&1&&Bu(i,u,t),t=g,s=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(s),t.updateQueue=y}else x.add(s);break e}else{if(!(t&1)){Bu(i,u,t),Rs();break e}s=Error(k(426))}}else if(K&&a.mode&1){var C=Vu(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Wu(C,l,a,i,t),fs(Un(s,a));break e}}i=s=Un(s,a),re!==4&&(re=2),vr===null?vr=[i]:vr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=md(i,s,t);Iu(i,p);break e;case 1:a=s;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ft===null||!Ft.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=hd(i,a,t);Iu(i,w);break e}}i=i.return}while(i!==null)}jd(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Ld(){var e=ii.current;return ii.current=oi,e===null?oi:e}function Rs(){(re===0||re===3||re===2)&&(re=4),ae===null||!(ln&268435455)&&!(Ei&268435455)||Ot(ae,pe)}function si(e,t){var n=D;D|=2;var r=Ld();(ae!==e||pe!==t)&&(pt=null,qt(e,t));do try{Jm();break}catch(o){Rd(e,o)}while(!0);if(ps(),D=n,ii.current=r,te!==null)throw Error(k(261));return ae=null,pe=0,re}function Jm(){for(;te!==null;)zd(te)}function qm(){for(;te!==null&&!Cp();)zd(te)}function zd(e){var t=Md(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?jd(e):te=t,_s.current=null}function jd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qm(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Hm(n,t,Le),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Xt(e,t,n){var r=U,o=Ve.transition;try{Ve.transition=null,U=1,eh(e,t,n,r)}finally{Ve.transition=o,U=r}return null}function eh(e,t,n,r){do jn();while(Lt!==null);if(D&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(jp(e,i),e===ae&&(te=ae=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,Dd(Vo,function(){return jn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ve.transition,Ve.transition=null;var l=U;U=1;var a=D;D|=4,_s.current=null,Km(e,n),Pd(n,e),xm(sa),Ho=!!aa,sa=aa=null,e.current=n,Xm(n),$p(),D=a,U=l,Ve.transition=i}else e.current=n;if(uo&&(uo=!1,Lt=e,ai=o),i=e.pendingLanes,i===0&&(Ft=null),Pp(n.stateNode),Te(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(li)throw li=!1,e=Pa,Pa=null,e;return ai&1&&e.tag!==0&&jn(),i=e.pendingLanes,i&1?e===Ta?yr++:(yr=0,Ta=e):yr=0,Qt(),null}function jn(){if(Lt!==null){var e=pf(ai),t=Ve.transition,n=U;try{if(Ve.transition=null,U=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,ai=0,D&6)throw Error(k(331));var o=D;for(D|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(R=u;R!==null;){var f=R;switch(f.tag){case 0:case 11:case 15:hr(8,f,i)}var d=f.child;if(d!==null)d.return=f,R=d;else for(;R!==null;){f=R;var h=f.sibling,g=f.return;if($d(f),f===u){R=null;break}if(h!==null){h.return=g,R=h;break}R=g}}}var x=i.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:hr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,R=p;break e}R=i.return}}var c=e.current;for(R=c;R!==null;){l=R;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,R=m;else e:for(l=c;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Si(9,a)}}catch(E){J(a,a.return,E)}if(a===l){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(D=o,Qt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(pi,e)}catch{}r=!0}return r}finally{U=n,Ve.transition=t}}return!1}function rc(e,t,n){t=Un(n,t),t=md(e,t,1),e=Dt(e,t,1),t=Se(),e!==null&&(Ur(e,1,t),Te(e,t))}function J(e,t,n){if(e.tag===3)rc(e,e,n);else for(;t!==null;){if(t.tag===3){rc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Un(n,e),e=hd(t,e,1),t=Dt(t,e,1),e=Se(),t!==null&&(Ur(t,1,e),Te(t,e));break}}t=t.return}}function th(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(pe&n)===n&&(re===4||re===3&&(pe&130023424)===pe&&500>q()-Ps?qt(e,0):Ns|=n),Te(e,t)}function Id(e,t){t===0&&(e.mode&1?(t=qr,qr<<=1,!(qr&130023424)&&(qr=4194304)):t=1);var n=Se();e=xt(e,t),e!==null&&(Ur(e,t,n),Te(e,n))}function nh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Id(e,n)}function rh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Id(e,n)}var Md;Md=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Wm(e,t,n);_e=!!(e.flags&131072)}else _e=!1,K&&t.flags&1048576&&Af(t,Jo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oo(e,t),e=t.pendingProps;var o=Dn(t,we.current);zn(t,n),o=Ss(null,t,r,e,o,n);var i=Es();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(i=!0,Go(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,vs(t),o.updater=wi,t.stateNode=o,o._reactInternals=t,ya(t,r,e,n),t=xa(null,t,r,!0,i,n)):(t.tag=0,K&&i&&us(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ih(r),e=Xe(r,e),o){case 0:t=wa(null,t,r,e,n);break e;case 1:t=Yu(null,t,r,e,n);break e;case 11:t=Hu(null,t,r,e,n);break e;case 14:t=Qu(null,t,r,Xe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),wa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),Yu(e,t,r,o,n);case 3:e:{if(wd(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Vf(e,t),ti(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Un(Error(k(423)),t),t=Ku(e,t,r,n,o);break e}else if(r!==o){o=Un(Error(k(424)),t),t=Ku(e,t,r,n,o);break e}else for(ze=Mt(t.stateNode.containerInfo.firstChild),je=t,K=!0,Ze=null,n=Yf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fn(),r===o){t=St(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return Kf(t),e===null&&ma(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ua(r,o)?l=null:i!==null&&ua(r,i)&&(t.flags|=32),gd(e,t),xe(e,t,l,n),t.child;case 6:return e===null&&ma(t),null;case 13:return xd(e,t,n);case 4:return ys(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=An(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),Hu(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,H(qo,r._currentValue),r._currentValue=l,i!==null)if(tt(i.value,l)){if(i.children===o.children&&!Ne.current){t=St(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=yt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ha(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ha(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,zn(t,n),o=We(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=Xe(r,t.pendingProps),o=Xe(r.type,o),Qu(e,t,r,o,n);case 15:return vd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),Oo(e,t),t.tag=1,Pe(r)?(e=!0,Go(t)):e=!1,zn(t,n),Hf(t,r,o),ya(t,r,o,n),xa(null,t,r,!0,e,n);case 19:return Sd(e,t,n);case 22:return yd(e,t,n)}throw Error(k(156,t.tag))};function Dd(e,t){return uf(e,t)}function oh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new oh(e,t,n,r)}function Ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ih(e){if(typeof e=="function")return Ls(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Za)return 11;if(e===Ja)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ls(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case gn:return en(n.children,o,i,t);case Ga:l=8,o|=8;break;case Ul:return e=Be(12,n,t,o|2),e.elementType=Ul,e.lanes=i,e;case Bl:return e=Be(13,n,t,o),e.elementType=Bl,e.lanes=i,e;case Vl:return e=Be(19,n,t,o),e.elementType=Vl,e.lanes=i,e;case Hc:return ki(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vc:l=10;break e;case Wc:l=9;break e;case Za:l=11;break e;case Ja:l=14;break e;case Nt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Be(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function en(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function ki(e,t,n,r){return e=Be(22,e,r,t),e.elementType=Hc,e.lanes=n,e.stateNode={isHidden:!1},e}function _l(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function Nl(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=al(0),this.expirationTimes=al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function zs(e,t,n,r,o,i,l,a,s){return e=new lh(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vs(i),e}function ah(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fd(e){if(!e)return Vt;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Df(e,n,t)}return t}function Ad(e,t,n,r,o,i,l,a,s){return e=zs(n,r,!0,e,o,i,l,a,s),e.context=Fd(null),n=e.current,r=Se(),o=At(n),i=yt(r,o),i.callback=t??null,Dt(n,i,o),e.current.lanes=o,Ur(e,o,r),Te(e,r),e}function Ci(e,t,n,r){var o=t.current,i=Se(),l=At(o);return n=Fd(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(o,t,l),e!==null&&(et(e,o,l,i),No(e,o,l)),l}function ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function js(e,t){oc(e,t),(e=e.alternate)&&oc(e,t)}function sh(){return null}var bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Is(e){this._internalRoot=e}$i.prototype.render=Is.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ci(e,t,null,null)};$i.prototype.unmount=Is.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){Ci(null,e,null,null)}),t[wt]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var t=vf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&gf(e)}};function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ic(){}function uh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ui(l);i.call(u)}}var l=Ad(t,r,e,0,null,!1,!1,"",ic);return e._reactRootContainer=l,e[wt]=l.current,_r(e.nodeType===8?e.parentNode:e),an(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=ui(s);a.call(u)}}var s=zs(e,0,!1,null,null,!1,!1,"",ic);return e._reactRootContainer=s,e[wt]=s.current,_r(e.nodeType===8?e.parentNode:e),an(function(){Ci(t,s,n,r)}),s}function Ni(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=ui(l);a.call(s)}}Ci(t,l,e,o)}else l=uh(n,t,e,o,r);return ui(l)}mf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ar(t.pendingLanes);n!==0&&(ts(t,n|1),Te(t,q()),!(D&6)&&(Bn=q()+500,Qt()))}break;case 13:an(function(){var r=xt(e,1);if(r!==null){var o=Se();et(r,e,1,o)}}),js(e,1)}};ns=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=Se();et(t,e,134217728,n)}js(e,134217728)}};hf=function(e){if(e.tag===13){var t=At(e),n=xt(e,t);if(n!==null){var r=Se();et(n,e,t,r)}js(e,t)}};vf=function(){return U};yf=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};ql=function(e,t,n){switch(t){case"input":if(Ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=yi(r);if(!o)throw Error(k(90));Yc(r),Ql(r,o)}}}break;case"textarea":Xc(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};nf=Ts;rf=an;var ch={usingClientEntryPoint:!1,Events:[Vr,En,yi,ef,tf,Ts]},rr={findFiberByHostInstance:Gt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},fh={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=af(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||sh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{pi=co.inject(fh),ut=co}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ch;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ms(t))throw Error(k(200));return ah(e,t,null,n)};De.createRoot=function(e,t){if(!Ms(e))throw Error(k(299));var n=!1,r="",o=bd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=zs(e,1,!1,null,null,n,!1,r,o),e[wt]=t.current,_r(e.nodeType===8?e.parentNode:e),new Is(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=af(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return an(e)};De.hydrate=function(e,t,n){if(!_i(t))throw Error(k(200));return Ni(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!Ms(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=bd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Ad(t,null,e,1,n??null,o,!1,i,l),e[wt]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new $i(t)};De.render=function(e,t,n){if(!_i(t))throw Error(k(200));return Ni(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!_i(e))throw Error(k(40));return e._reactRootContainer?(an(function(){Ni(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};De.unstable_batchedUpdates=Ts;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_i(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ni(e,t,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function Ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ud)}catch(e){console.error(e)}}Ud(),Fc.exports=De;var Pi=Fc.exports;const dh=Nc(Pi);var lc=Pi;Al.createRoot=lc.createRoot,Al.hydrateRoot=lc.hydrateRoot;function ph(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function mh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var hh=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(mh(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=ph(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ye="-ms-",ci="-moz-",F="-webkit-",Bd="comm",Ds="rule",Fs="decl",vh="@import",Vd="@keyframes",yh="@layer",gh=Math.abs,Ti=String.fromCharCode,wh=Object.assign;function xh(e,t){return fe(e,0)^45?(((t<<2^fe(e,0))<<2^fe(e,1))<<2^fe(e,2))<<2^fe(e,3):0}function Wd(e){return e.trim()}function Sh(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function La(e,t){return e.indexOf(t)}function fe(e,t){return e.charCodeAt(t)|0}function Ir(e,t,n){return e.slice(t,n)}function ot(e){return e.length}function As(e){return e.length}function fo(e,t){return t.push(e),e}function Eh(e,t){return e.map(t).join("")}var Oi=1,Vn=1,Hd=0,Oe=0,ee=0,Yn="";function Ri(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Oi,column:Vn,length:l,return:""}}function or(e,t){return wh(Ri("",null,null,"",null,null,0),e,{length:-e.length},t)}function kh(){return ee}function Ch(){return ee=Oe>0?fe(Yn,--Oe):0,Vn--,ee===10&&(Vn=1,Oi--),ee}function Ie(){return ee=Oe<Hd?fe(Yn,Oe++):0,Vn++,ee===10&&(Vn=1,Oi++),ee}function ft(){return fe(Yn,Oe)}function jo(){return Oe}function Hr(e,t){return Ir(Yn,e,t)}function Mr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Qd(e){return Oi=Vn=1,Hd=ot(Yn=e),Oe=0,[]}function Yd(e){return Yn="",e}function Io(e){return Wd(Hr(Oe-1,za(e===91?e+2:e===40?e+1:e)))}function $h(e){for(;(ee=ft())&&ee<33;)Ie();return Mr(e)>2||Mr(ee)>3?"":" "}function _h(e,t){for(;--t&&Ie()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Hr(e,jo()+(t<6&&ft()==32&&Ie()==32))}function za(e){for(;Ie();)switch(ee){case e:return Oe;case 34:case 39:e!==34&&e!==39&&za(ee);break;case 40:e===41&&za(e);break;case 92:Ie();break}return Oe}function Nh(e,t){for(;Ie()&&e+ee!==57;)if(e+ee===84&&ft()===47)break;return"/*"+Hr(t,Oe-1)+"*"+Ti(e===47?e:Ie())}function Ph(e){for(;!Mr(ft());)Ie();return Hr(e,Oe)}function Th(e){return Yd(Mo("",null,null,null,[""],e=Qd(e),0,[0],e))}function Mo(e,t,n,r,o,i,l,a,s){for(var u=0,f=0,d=l,h=0,g=0,x=0,y=1,C=1,p=1,c=0,m="",w=o,E=i,$=r,S=m;C;)switch(x=c,c=Ie()){case 40:if(x!=108&&fe(S,d-1)==58){La(S+=A(Io(c),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=Io(c);break;case 9:case 10:case 13:case 32:S+=$h(x);break;case 92:S+=_h(jo()-1,7);continue;case 47:switch(ft()){case 42:case 47:fo(Oh(Nh(Ie(),jo()),t,n),s);break;default:S+="/"}break;case 123*y:a[u++]=ot(S)*p;case 125*y:case 59:case 0:switch(c){case 0:case 125:C=0;case 59+f:p==-1&&(S=A(S,/\f/g,"")),g>0&&ot(S)-d&&fo(g>32?sc(S+";",r,n,d-1):sc(A(S," ","")+";",r,n,d-2),s);break;case 59:S+=";";default:if(fo($=ac(S,t,n,u,f,o,a,m,w=[],E=[],d),i),c===123)if(f===0)Mo(S,t,$,$,w,i,d,a,E);else switch(h===99&&fe(S,3)===110?100:h){case 100:case 108:case 109:case 115:Mo(e,$,$,r&&fo(ac(e,$,$,0,0,o,a,m,o,w=[],d),E),o,E,d,a,r?w:E);break;default:Mo(S,$,$,$,[""],E,0,a,E)}}u=f=g=0,y=p=1,m=S="",d=l;break;case 58:d=1+ot(S),g=x;default:if(y<1){if(c==123)--y;else if(c==125&&y++==0&&Ch()==125)continue}switch(S+=Ti(c),c*y){case 38:p=f>0?1:(S+="\f",-1);break;case 44:a[u++]=(ot(S)-1)*p,p=1;break;case 64:ft()===45&&(S+=Io(Ie())),h=ft(),f=d=ot(m=S+=Ph(jo())),c++;break;case 45:x===45&&ot(S)==2&&(y=0)}}return i}function ac(e,t,n,r,o,i,l,a,s,u,f){for(var d=o-1,h=o===0?i:[""],g=As(h),x=0,y=0,C=0;x<r;++x)for(var p=0,c=Ir(e,d+1,d=gh(y=l[x])),m=e;p<g;++p)(m=Wd(y>0?h[p]+" "+c:A(c,/&\f/g,h[p])))&&(s[C++]=m);return Ri(e,t,n,o===0?Ds:a,s,u,f)}function Oh(e,t,n){return Ri(e,t,n,Bd,Ti(kh()),Ir(e,2,-2),0)}function sc(e,t,n,r){return Ri(e,t,n,Fs,Ir(e,0,r),Ir(e,r+1,-1),r)}function In(e,t){for(var n="",r=As(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Rh(e,t,n,r){switch(e.type){case yh:if(e.children.length)break;case vh:case Fs:return e.return=e.return||e.value;case Bd:return"";case Vd:return e.return=e.value+"{"+In(e.children,r)+"}";case Ds:e.value=e.props.join(",")}return ot(n=In(e.children,r))?e.return=e.value+"{"+n+"}":""}function Lh(e){var t=As(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function zh(e){return function(t){t.root||(t=t.return)&&e(t)}}function jh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ih=function(t,n,r){for(var o=0,i=0;o=i,i=ft(),o===38&&i===12&&(n[r]=1),!Mr(i);)Ie();return Hr(t,Oe)},Mh=function(t,n){var r=-1,o=44;do switch(Mr(o)){case 0:o===38&&ft()===12&&(n[r]=1),t[r]+=Ih(Oe-1,n,r);break;case 2:t[r]+=Io(o);break;case 4:if(o===44){t[++r]=ft()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ti(o)}while(o=Ie());return t},Dh=function(t,n){return Yd(Mh(Qd(t),n))},uc=new WeakMap,Fh=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!uc.get(r))&&!o){uc.set(t,!0);for(var i=[],l=Dh(n,i),a=r.props,s=0,u=0;s<l.length;s++)for(var f=0;f<a.length;f++,u++)t.props[u]=i[s]?l[s].replace(/&\f/g,a[f]):a[f]+" "+l[s]}}},Ah=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Kd(e,t){switch(xh(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+ci+e+ye+e+e;case 6828:case 4268:return F+e+ye+e+e;case 6165:return F+e+ye+"flex-"+e+e;case 5187:return F+e+A(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return F+e+ye+"flex-item-"+A(e,/flex-|-self/,"")+e;case 4675:return F+e+ye+"flex-line-pack"+A(e,/align-content|flex-|-self/,"")+e;case 5548:return F+e+ye+A(e,"shrink","negative")+e;case 5292:return F+e+ye+A(e,"basis","preferred-size")+e;case 6060:return F+"box-"+A(e,"-grow","")+F+e+ye+A(e,"grow","positive")+e;case 4554:return F+A(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ot(e)-1-t>6)switch(fe(e,t+1)){case 109:if(fe(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+ci+(fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~La(e,"stretch")?Kd(A(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(fe(e,t+1)!==115)break;case 6444:switch(fe(e,ot(e)-3-(~La(e,"!important")&&10))){case 107:return A(e,":",":"+F)+e;case 101:return A(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(fe(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+ye+"$2box$3")+e}break;case 5936:switch(fe(e,t+11)){case 114:return F+e+ye+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+ye+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+ye+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return F+e+ye+e+e}return e}var bh=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Fs:t.return=Kd(t.value,t.length);break;case Vd:return In([or(t,{value:A(t.value,"@","@"+F)})],o);case Ds:if(t.length)return Eh(t.props,function(i){switch(Sh(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return In([or(t,{props:[A(i,/:(read-\w+)/,":"+ci+"$1")]})],o);case"::placeholder":return In([or(t,{props:[A(i,/:(plac\w+)/,":"+F+"input-$1")]}),or(t,{props:[A(i,/:(plac\w+)/,":"+ci+"$1")]}),or(t,{props:[A(i,/:(plac\w+)/,ye+"input-$1")]})],o)}return""})}},Uh=[bh],Bh=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var C=y.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||Uh,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var C=y.getAttribute("data-emotion").split(" "),p=1;p<C.length;p++)i[C[p]]=!0;a.push(y)});var s,u=[Fh,Ah];{var f,d=[Rh,zh(function(y){f.insert(y)})],h=Lh(u.concat(o,d)),g=function(C){return In(Th(C),h)};s=function(C,p,c,m){f=c,g(C?C+"{"+p.styles+"}":p.styles),m&&(x.inserted[p.name]=!0)}}var x={key:n,sheet:new hh({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return x.sheet.hydrate(a),x};function se(){return se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)}var Xd={exports:{}},B={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue=typeof Symbol=="function"&&Symbol.for,bs=ue?Symbol.for("react.element"):60103,Us=ue?Symbol.for("react.portal"):60106,Li=ue?Symbol.for("react.fragment"):60107,zi=ue?Symbol.for("react.strict_mode"):60108,ji=ue?Symbol.for("react.profiler"):60114,Ii=ue?Symbol.for("react.provider"):60109,Mi=ue?Symbol.for("react.context"):60110,Bs=ue?Symbol.for("react.async_mode"):60111,Di=ue?Symbol.for("react.concurrent_mode"):60111,Fi=ue?Symbol.for("react.forward_ref"):60112,Ai=ue?Symbol.for("react.suspense"):60113,Vh=ue?Symbol.for("react.suspense_list"):60120,bi=ue?Symbol.for("react.memo"):60115,Ui=ue?Symbol.for("react.lazy"):60116,Wh=ue?Symbol.for("react.block"):60121,Hh=ue?Symbol.for("react.fundamental"):60117,Qh=ue?Symbol.for("react.responder"):60118,Yh=ue?Symbol.for("react.scope"):60119;function Ae(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case bs:switch(e=e.type,e){case Bs:case Di:case Li:case ji:case zi:case Ai:return e;default:switch(e=e&&e.$$typeof,e){case Mi:case Fi:case Ui:case bi:case Ii:return e;default:return t}}case Us:return t}}}function Gd(e){return Ae(e)===Di}B.AsyncMode=Bs;B.ConcurrentMode=Di;B.ContextConsumer=Mi;B.ContextProvider=Ii;B.Element=bs;B.ForwardRef=Fi;B.Fragment=Li;B.Lazy=Ui;B.Memo=bi;B.Portal=Us;B.Profiler=ji;B.StrictMode=zi;B.Suspense=Ai;B.isAsyncMode=function(e){return Gd(e)||Ae(e)===Bs};B.isConcurrentMode=Gd;B.isContextConsumer=function(e){return Ae(e)===Mi};B.isContextProvider=function(e){return Ae(e)===Ii};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===bs};B.isForwardRef=function(e){return Ae(e)===Fi};B.isFragment=function(e){return Ae(e)===Li};B.isLazy=function(e){return Ae(e)===Ui};B.isMemo=function(e){return Ae(e)===bi};B.isPortal=function(e){return Ae(e)===Us};B.isProfiler=function(e){return Ae(e)===ji};B.isStrictMode=function(e){return Ae(e)===zi};B.isSuspense=function(e){return Ae(e)===Ai};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Li||e===Di||e===ji||e===zi||e===Ai||e===Vh||typeof e=="object"&&e!==null&&(e.$$typeof===Ui||e.$$typeof===bi||e.$$typeof===Ii||e.$$typeof===Mi||e.$$typeof===Fi||e.$$typeof===Hh||e.$$typeof===Qh||e.$$typeof===Yh||e.$$typeof===Wh)};B.typeOf=Ae;Xd.exports=B;var Kh=Xd.exports,Zd=Kh,Xh={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jd={};Jd[Zd.ForwardRef]=Xh;Jd[Zd.Memo]=Gh;var Zh=!0;function qd(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Vs=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Zh===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},e0=function(t,n,r){Vs(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Jh(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var qh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ev=/[A-Z]|^ms/g,tv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,t0=function(t){return t.charCodeAt(1)===45},cc=function(t){return t!=null&&typeof t!="boolean"},Pl=jh(function(e){return t0(e)?e:e.replace(ev,"-$&").toLowerCase()}),fc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(tv,function(r,o,i){return it={name:o,styles:i,next:it},o})}return qh[t]!==1&&!t0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Dr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return it={name:n.name,styles:n.styles,next:it},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)it={name:r.name,styles:r.styles,next:it},r=r.next;var o=n.styles+";";return o}return nv(e,t,n)}case"function":{if(e!==void 0){var i=it,l=n(e);return it=i,Dr(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function nv(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Dr(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":cc(l)&&(r+=Pl(i)+":"+fc(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)cc(l[a])&&(r+=Pl(i)+":"+fc(i,l[a])+";");else{var s=Dr(e,t,l);switch(i){case"animation":case"animationName":{r+=Pl(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var dc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,it,Ws=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";it=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Dr(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=Dr(r,n,t[a]),o&&(i+=l[a]);dc.lastIndex=0;for(var s="",u;(u=dc.exec(i))!==null;)s+="-"+u[1];var f=Jh(i)+s;return{name:f,styles:i,next:it}},rv=function(t){return t()},ov=Fl.useInsertionEffect?Fl.useInsertionEffect:!1,n0=ov||rv,Hs={}.hasOwnProperty,r0=v.createContext(typeof HTMLElement<"u"?Bh({key:"css"}):null);r0.Provider;var o0=function(t){return v.forwardRef(function(n,r){var o=v.useContext(r0);return t(n,o,r)})},i0=v.createContext({}),ja="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",iv=function(t,n){var r={};for(var o in n)Hs.call(n,o)&&(r[o]=n[o]);return r[ja]=t,r},lv=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Vs(n,r,o),n0(function(){return e0(n,r,o)}),null},av=o0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[ja],i=[r],l="";typeof e.className=="string"?l=qd(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=Ws(i,void 0,v.useContext(i0));l+=t.key+"-"+a.name;var s={};for(var u in e)Hs.call(e,u)&&u!=="css"&&u!==ja&&(s[u]=e[u]);return s.ref=n,s.className=l,v.createElement(v.Fragment,null,v.createElement(lv,{cache:t,serialized:a,isStringTag:typeof o=="string"}),v.createElement(o,s))}),sv=av,uv=P.Fragment;function ie(e,t,n){return Hs.call(t,"css")?P.jsx(sv,iv(e,t),n):P.jsx(e,t,n)}function l0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ws(t)}var _=function(){var t=l0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},cv=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function fv(e,t,n){var r=[],o=qd(e,r,n);return r.length<2?n:o+t(r)}var dv=function(t){var n=t.cache,r=t.serializedArr;return n0(function(){for(var o=0;o<r.length;o++)e0(n,r[o],!1)}),null},Tl=o0(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,f=new Array(u),d=0;d<u;d++)f[d]=arguments[d];var h=Ws(f,t.registered);return r.push(h),Vs(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,f=new Array(u),d=0;d<u;d++)f[d]=arguments[d];return fv(t.registered,o,cv(f))},l={css:o,cx:i,theme:v.useContext(i0)},a=e.children(l);return n=!0,v.createElement(v.Fragment,null,v.createElement(dv,{cache:t,serializedArr:r}),a)}),pv=Object.defineProperty,mv=(e,t,n)=>t in e?pv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,po=(e,t,n)=>(mv(e,typeof t!="symbol"?t+"":t,n),n),Ia=new Map,mo=new WeakMap,pc=0,hv=void 0;function vv(e){return e?(mo.has(e)||(pc+=1,mo.set(e,pc.toString())),mo.get(e)):"0"}function yv(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?vv(e.root):e[t]}`).toString()}function gv(e){const t=yv(e);let n=Ia.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(a=>{var s;const u=a.isIntersecting&&o.some(f=>a.intersectionRatio>=f);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(f=>{f(u,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Ia.set(t,n)}return n}function a0(e,t,n={},r=hv){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:i,elements:l}=gv(n),a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),Ia.delete(o))}}function wv(e){return typeof e.children!="function"}var mc=class extends v.Component{constructor(e){super(e),po(this,"node",null),po(this,"_unobserveCb",null),po(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),po(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),wv(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=a0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:g,entry:x}=this.state;return e({inView:g,entry:x,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:a,trackVisibility:s,delay:u,initialInView:f,fallbackInView:d,...h}=this.props;return v.createElement(t||"div",{ref:this.handleNode,...h},e)}};function s0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:a,fallbackInView:s,onChange:u}={}){var f;const[d,h]=v.useState(null),g=v.useRef(),[x,y]=v.useState({inView:!!a,entry:void 0});g.current=u,v.useEffect(()=>{if(l||!d)return;let m;return m=a0(d,(w,E)=>{y({inView:w,entry:E}),g.current&&g.current(w,E),E.isIntersecting&&i&&m&&(m(),m=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{m&&m()}},[Array.isArray(e)?e.toString():e,d,o,r,i,l,n,s,t]);const C=(f=x.entry)==null?void 0:f.target,p=v.useRef();!d&&C&&!i&&!l&&p.current!==C&&(p.current=C,y({inView:!!a,entry:void 0}));const c=[h,x.inView,x.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var u0={exports:{}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qs=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),Vi=Symbol.for("react.strict_mode"),Wi=Symbol.for("react.profiler"),Hi=Symbol.for("react.provider"),Qi=Symbol.for("react.context"),xv=Symbol.for("react.server_context"),Yi=Symbol.for("react.forward_ref"),Ki=Symbol.for("react.suspense"),Xi=Symbol.for("react.suspense_list"),Gi=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),Sv=Symbol.for("react.offscreen"),c0;c0=Symbol.for("react.module.reference");function Qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qs:switch(e=e.type,e){case Bi:case Wi:case Vi:case Ki:case Xi:return e;default:switch(e=e&&e.$$typeof,e){case xv:case Qi:case Yi:case Zi:case Gi:case Hi:return e;default:return t}}case Ys:return t}}}V.ContextConsumer=Qi;V.ContextProvider=Hi;V.Element=Qs;V.ForwardRef=Yi;V.Fragment=Bi;V.Lazy=Zi;V.Memo=Gi;V.Portal=Ys;V.Profiler=Wi;V.StrictMode=Vi;V.Suspense=Ki;V.SuspenseList=Xi;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return Qe(e)===Qi};V.isContextProvider=function(e){return Qe(e)===Hi};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qs};V.isForwardRef=function(e){return Qe(e)===Yi};V.isFragment=function(e){return Qe(e)===Bi};V.isLazy=function(e){return Qe(e)===Zi};V.isMemo=function(e){return Qe(e)===Gi};V.isPortal=function(e){return Qe(e)===Ys};V.isProfiler=function(e){return Qe(e)===Wi};V.isStrictMode=function(e){return Qe(e)===Vi};V.isSuspense=function(e){return Qe(e)===Ki};V.isSuspenseList=function(e){return Qe(e)===Xi};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Bi||e===Wi||e===Vi||e===Ki||e===Xi||e===Sv||typeof e=="object"&&e!==null&&(e.$$typeof===Zi||e.$$typeof===Gi||e.$$typeof===Hi||e.$$typeof===Qi||e.$$typeof===Yi||e.$$typeof===c0||e.getModuleId!==void 0)};V.typeOf=Qe;u0.exports=V;var Ev=u0.exports;_`
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
`;_`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;_`
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
`;_`
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
`;_`
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
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;const kv=_`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Cv=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$v=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_v=_`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Nv=_`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ks=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pv=_`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Tv=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ov=_`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Rv=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Lv=_`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,zv=_`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jv=_`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Iv({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Ks,iterationCount:o=1}){return l0`
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
  `}function Mv(e){return e==null}function Dv(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function f0(e,t){return n=>n?e():t()}function Fr(e){return f0(e,()=>null)}function Ma(e){return Fr(()=>({opacity:0}))(e)}const d0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=Ks,triggerOnce:a=!1,className:s,style:u,childClassName:f,childStyle:d,children:h,onVisibilityChange:g}=e,x=v.useMemo(()=>Iv({keyframes:l,duration:o}),[o,l]);return Mv(h)?null:Dv(h)?ie(Av,{...e,animationStyles:x,children:String(h)}):Ev.isFragment(h)?ie(p0,{...e,animationStyles:x}):ie(uv,{children:v.Children.map(h,(y,C)=>{if(!v.isValidElement(y))return null;const p=r+(t?C*o*n:0);switch(y.type){case"ol":case"ul":return ie(Tl,{children:({cx:c})=>ie(y.type,{...y.props,className:c(s,y.props.className),style:Object.assign({},u,y.props.style),children:ie(d0,{...e,children:y.props.children})})});case"li":return ie(mc,{threshold:i,triggerOnce:a,onChange:g,children:({inView:c,ref:m})=>ie(Tl,{children:({cx:w})=>ie(y.type,{...y.props,ref:m,className:w(f,y.props.className),css:Fr(()=>x)(c),style:Object.assign({},d,y.props.style,Ma(!c),{animationDelay:p+"ms"})})})});default:return ie(mc,{threshold:i,triggerOnce:a,onChange:g,children:({inView:c,ref:m})=>ie("div",{ref:m,className:s,css:Fr(()=>x)(c),style:Object.assign({},u,Ma(!c),{animationDelay:p+"ms"}),children:ie(Tl,{children:({cx:w})=>ie(y.type,{...y.props,className:w(f,y.props.className),style:Object.assign({},d,y.props.style)})})})})}})})},Fv={display:"inline-block",whiteSpace:"pre"},Av=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:u,children:f,onVisibilityChange:d}=e,{ref:h,inView:g}=s0({triggerOnce:a,threshold:l,onChange:d});return f0(()=>ie("div",{ref:h,className:s,style:Object.assign({},u,Fv),children:f.split("").map((x,y)=>ie("span",{css:Fr(()=>t)(g),style:{animationDelay:o+y*i*r+"ms"},children:x},y))}),()=>ie(p0,{...e,children:f}))(n)},p0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:a}=e,{ref:s,inView:u}=s0({triggerOnce:r,threshold:n,onChange:a});return ie("div",{ref:s,className:o,css:Fr(()=>t)(u),style:Object.assign({},i,Ma(!u)),children:l})};_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;_`
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
`;const bv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Uv=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Bv=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Vv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Wv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Hv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Qv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Yv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Kv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Xv=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Gv=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Zv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Jv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function qv(e,t,n){switch(n){case"bottom-left":return t?Uv:Cv;case"bottom-right":return t?Bv:$v;case"down":return e?t?Wv:Nv:t?Vv:_v;case"left":return e?t?Qv:Pv:t?Hv:Ks;case"right":return e?t?Kv:Ov:t?Yv:Tv;case"top-left":return t?Xv:Rv;case"top-right":return t?Gv:Lv;case"up":return e?t?Jv:jv:t?Zv:zv;default:return t?bv:kv}}const ho=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=v.useMemo(()=>qv(t,r,n),[t,n,r]);return ie(d0,{keyframes:i,...o})};_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;_`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;_`
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
`;function Ji(e,t,n,r){return new(n||(n=Promise))(function(o,i){function l(u){try{s(r.next(u))}catch(f){i(f)}}function a(u){try{s(r.throw(u))}catch(f){i(f)}}function s(u){var f;u.done?o(u.value):(f=u.value,f instanceof n?f:new n(function(d){d(f)})).then(l,a)}s((r=r.apply(e,t||[])).next())})}function Ut(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(s){return function(u){return function(f){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&f[0]?r.return:f[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,f[1])).done)return o;switch(r=0,o&&(f=[2&f[0],o.value]),f[0]){case 0:case 1:o=f;break;case 4:return l.label++,{value:f[1],done:!1};case 5:l.label++,r=f[1],f=[0];continue;case 7:f=l.ops.pop(),l.trys.pop();continue;default:if(o=l.trys,!((o=o.length>0&&o[o.length-1])||f[0]!==6&&f[0]!==2)){l=0;continue}if(f[0]===3&&(!o||f[1]>o[0]&&f[1]<o[3])){l.label=f[1];break}if(f[0]===6&&l.label<o[1]){l.label=o[1],o=f;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(f);break}o[2]&&l.ops.pop(),l.trys.pop();continue}f=t.call(e,l)}catch(d){f=[6,d],r=0}finally{n=o=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([s,u])}}}function Da(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Je(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(t===void 0||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l}function at(e,t,n){if(n||arguments.length===2)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function hc(e,t,n,r,o){for(var i=[],l=5;l<arguments.length;l++)i[l-5]=arguments[l];return Ji(this,void 0,void 0,function(){var a,s,u,f,d,h;return Ut(this,function(g){switch(g.label){case 0:g.trys.push([0,12,13,14]),a=Da(i),s=a.next(),g.label=1;case 1:if(s.done)return[3,11];switch(u=s.value,typeof u){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,e1(e,t,u,n,r,o)];case 3:return g.sent(),[3,10];case 4:return[4,m0(u)];case 5:return g.sent(),[3,10];case 6:return[4,u.apply(void 0,at([e,t,n,r,o],Je(i),!1))];case 7:return g.sent(),[3,10];case 8:return[4,u];case 9:g.sent(),g.label=10;case 10:return s=a.next(),[3,1];case 11:return[3,14];case 12:return f=g.sent(),d={error:f},[3,14];case 13:try{s&&!s.done&&(h=a.return)&&h.call(a)}finally{if(d)throw d.error}return[7];case 14:return[2]}})})}function e1(e,t,n,r,o,i){return Ji(this,void 0,void 0,function(){var l,a;return Ut(this,function(s){switch(s.label){case 0:return l=e.textContent||"",a=function(u,f){var d=Je(f).slice(0);return at(at([],Je(u),!1),[NaN],!1).findIndex(function(h,g){return d[g]!==h})}(l,n),[4,t1(e,at(at([],Je(r1(l,t,a)),!1),Je(n1(n,t,a)),!1),r,o,i)];case 1:return s.sent(),[2]}})})}function m0(e){return Ji(this,void 0,void 0,function(){return Ut(this,function(t){switch(t.label){case 0:return[4,new Promise(function(n){return setTimeout(n,e)})];case 1:return t.sent(),[2]}})})}function t1(e,t,n,r,o){return Ji(this,void 0,void 0,function(){var i,l,a,s,u,f,d,h,g,x,y,C,p;return Ut(this,function(c){switch(c.label){case 0:if(i=t,o){for(l=0,a=1;a<t.length;a++)if(s=Je([t[a-1],t[a]],2),u=s[0],(f=s[1]).length>u.length||f===""){l=a;break}i=t.slice(l,t.length)}c.label=1;case 1:c.trys.push([1,6,7,8]),d=Da(function(m){var w,E,$,S,N,j,L;return Ut(this,function(W){switch(W.label){case 0:w=function(Re){return Ut(this,function(Ye){switch(Ye.label){case 0:return[4,{op:function(kt){return requestAnimationFrame(function(){return kt.textContent=Re})},opCode:function(kt){var Xn=kt.textContent||"";return Re===""||Xn.length>Re.length?"DELETE":"WRITING"}}];case 1:return Ye.sent(),[2]}})},W.label=1;case 1:W.trys.push([1,6,7,8]),E=Da(m),$=E.next(),W.label=2;case 2:return $.done?[3,5]:(S=$.value,[5,w(S)]);case 3:W.sent(),W.label=4;case 4:return $=E.next(),[3,2];case 5:return[3,8];case 6:return N=W.sent(),j={error:N},[3,8];case 7:try{$&&!$.done&&(L=E.return)&&L.call(E)}finally{if(j)throw j.error}return[7];case 8:return[2]}})}(i)),h=d.next(),c.label=2;case 2:return h.done?[3,5]:(g=h.value,x=g.opCode(e)==="WRITING"?n+n*(Math.random()-.5):r+r*(Math.random()-.5),g.op(e),[4,m0(x)]);case 3:c.sent(),c.label=4;case 4:return h=d.next(),[3,2];case 5:return[3,8];case 6:return y=c.sent(),C={error:y},[3,8];case 7:try{h&&!h.done&&(p=d.return)&&p.call(d)}finally{if(C)throw C.error}return[7];case 8:return[2]}})})}function n1(e,t,n){var r,o;return n===void 0&&(n=0),Ut(this,function(i){switch(i.label){case 0:r=t(e),o=r.length,i.label=1;case 1:return n<o?[4,r.slice(0,++n).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}function r1(e,t,n){var r,o;return n===void 0&&(n=0),Ut(this,function(i){switch(i.label){case 0:r=t(e),o=r.length,i.label=1;case 1:return o>n?[4,r.slice(0,--o).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}var o1="index-module_type__E-SaG";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var i1=v.memo(v.forwardRef(function(e,t){var n=e.sequence,r=e.repeat,o=e.className,i=e.speed,l=i===void 0?40:i,a=e.deletionSpeed,s=e.omitDeletionAnimation,u=s!==void 0&&s,f=e.preRenderFirstString,d=f!==void 0&&f,h=e.wrapper,g=h===void 0?"span":h,x=e.splitter,y=x===void 0?function(T){return at([],Je(T),!1)}:x,C=e.cursor,p=C===void 0||C,c=e.style,m=function(T,M){var b={};for(var oe in T)Object.prototype.hasOwnProperty.call(T,oe)&&M.indexOf(oe)<0&&(b[oe]=T[oe]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function"){var Ce=0;for(oe=Object.getOwnPropertySymbols(T);Ce<oe.length;Ce++)M.indexOf(oe[Ce])<0&&Object.prototype.propertyIsEnumerable.call(T,oe[Ce])&&(b[oe[Ce]]=T[oe[Ce]])}return b}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),w=m["aria-label"],E=m["aria-hidden"],$=m.role;a||(a=l);var S=new Array(2).fill(40);[l,a].forEach(function(T,M){switch(typeof T){case"number":S[M]=Math.abs(T-100);break;case"object":var b=T.type,oe=T.value;if(typeof oe!="number")break;b==="keyStrokeDelayInMs"&&(S[M]=oe)}});var N,j,L,W,Re,Ye,kt=S[0],Xn=S[1],Ct=function(T,M){M===void 0&&(M=null);var b=v.useRef(M);return v.useEffect(function(){T&&(typeof T=="function"?T(b.current):T.current=b.current)},[T]),b}(t),dn=o1;N=o?"".concat(p?dn+" ":"").concat(o):p?dn:"",j=v.useRef(function(){var T,M=n;r===1/0?T=hc:typeof r=="number"&&(M=Array(1+r).fill(n).flat());var b=T?at(at([],Je(M),!1),[T],!1):at([],Je(M),!1);return hc.apply(void 0,at([Ct.current,y,kt,Xn,u],Je(b),!1)),function(){Ct.current}}),L=v.useRef(),W=v.useRef(!1),Re=v.useRef(!1),Ye=Je(v.useState(0),2)[1],W.current&&(Re.current=!0),v.useEffect(function(){return W.current||(L.current=j.current(),W.current=!0),Ye(function(T){return T+1}),function(){Re.current&&L.current&&L.current()}},[]);var O=g,z=d?n.find(function(T){return typeof T=="string"})||"":null;return Ao.createElement(O,{"aria-hidden":E,"aria-label":w,role:$,style:c,className:N,children:w?Ao.createElement("span",{"aria-hidden":"true",ref:Ct,children:z}):z,ref:w?void 0:Ct})}),function(e,t){return!0});function tn(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function l1(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function h0(...e){return t=>e.forEach(n=>l1(n,t))}function Kn(...e){return v.useCallback(h0(...e),e)}function a1(e,t=[]){let n=[];function r(i,l){const a=v.createContext(l),s=n.length;n=[...n,l];function u(d){const{scope:h,children:g,...x}=d,y=(h==null?void 0:h[e][s])||a,C=v.useMemo(()=>x,Object.values(x));return v.createElement(y.Provider,{value:C},g)}function f(d,h){const g=(h==null?void 0:h[e][s])||a,x=v.useContext(g);if(x)return x;if(l!==void 0)return l;throw new Error(`\`${d}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,f]}const o=()=>{const i=n.map(l=>v.createContext(l));return function(a){const s=(a==null?void 0:a[e])||i;return v.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])}};return o.scopeName=e,[r,s1(o,...t)]}function s1(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=r.reduce((a,{useScope:s,scopeName:u})=>{const d=s(i)[`__scope${u}`];return{...a,...d}},{});return v.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}const Fa=globalThis!=null&&globalThis.document?v.useLayoutEffect:()=>{},u1=Fl.useId||(()=>{});let c1=0;function Ol(e){const[t,n]=v.useState(u1());return Fa(()=>{e||n(r=>r??String(c1++))},[e]),e||(t?`radix-${t}`:"")}function sn(e){const t=v.useRef(e);return v.useEffect(()=>{t.current=e}),v.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function f1({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=d1({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r,a=sn(n),s=v.useCallback(u=>{if(i){const d=typeof u=="function"?u(e):u;d!==e&&a(d)}else o(u)},[i,e,o,a]);return[l,s]}function d1({defaultProp:e,onChange:t}){const n=v.useState(e),[r]=n,o=v.useRef(r),i=sn(t);return v.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}const Xs=v.forwardRef((e,t)=>{const{children:n,...r}=e,o=v.Children.toArray(n),i=o.find(m1);if(i){const l=i.props.children,a=o.map(s=>s===i?v.Children.count(l)>1?v.Children.only(null):v.isValidElement(l)?l.props.children:null:s);return v.createElement(Aa,se({},r,{ref:t}),v.isValidElement(l)?v.cloneElement(l,void 0,a):null)}return v.createElement(Aa,se({},r,{ref:t}),n)});Xs.displayName="Slot";const Aa=v.forwardRef((e,t)=>{const{children:n,...r}=e;return v.isValidElement(n)?v.cloneElement(n,{...h1(r,n.props),ref:t?h0(t,n.ref):n.ref}):v.Children.count(n)>1?v.Children.only(null):null});Aa.displayName="SlotClone";const p1=({children:e})=>v.createElement(v.Fragment,null,e);function m1(e){return v.isValidElement(e)&&e.type===p1}function h1(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const v1=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],fn=v1.reduce((e,t)=>{const n=v.forwardRef((r,o)=>{const{asChild:i,...l}=r,a=i?Xs:t;return v.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),v.createElement(a,se({},l,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function y1(e,t){e&&Pi.flushSync(()=>e.dispatchEvent(t))}function g1(e,t=globalThis==null?void 0:globalThis.document){const n=sn(e);v.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const ba="dismissableLayer.update",w1="dismissableLayer.pointerDownOutside",x1="dismissableLayer.focusOutside";let vc;const S1=v.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),E1=v.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:l,onInteractOutside:a,onDismiss:s,...u}=e,f=v.useContext(S1),[d,h]=v.useState(null),g=(n=d==null?void 0:d.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,x]=v.useState({}),y=Kn(t,N=>h(N)),C=Array.from(f.layers),[p]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),c=C.indexOf(p),m=d?C.indexOf(d):-1,w=f.layersWithOutsidePointerEventsDisabled.size>0,E=m>=c,$=k1(N=>{const j=N.target,L=[...f.branches].some(W=>W.contains(j));!E||L||(i==null||i(N),a==null||a(N),N.defaultPrevented||s==null||s())},g),S=C1(N=>{const j=N.target;[...f.branches].some(W=>W.contains(j))||(l==null||l(N),a==null||a(N),N.defaultPrevented||s==null||s())},g);return g1(N=>{m===f.layers.size-1&&(o==null||o(N),!N.defaultPrevented&&s&&(N.preventDefault(),s()))},g),v.useEffect(()=>{if(d)return r&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(vc=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(d)),f.layers.add(d),yc(),()=>{r&&f.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=vc)}},[d,g,r,f]),v.useEffect(()=>()=>{d&&(f.layers.delete(d),f.layersWithOutsidePointerEventsDisabled.delete(d),yc())},[d,f]),v.useEffect(()=>{const N=()=>x({});return document.addEventListener(ba,N),()=>document.removeEventListener(ba,N)},[]),v.createElement(fn.div,se({},u,{ref:y,style:{pointerEvents:w?E?"auto":"none":void 0,...e.style},onFocusCapture:tn(e.onFocusCapture,S.onFocusCapture),onBlurCapture:tn(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:tn(e.onPointerDownCapture,$.onPointerDownCapture)}))});function k1(e,t=globalThis==null?void 0:globalThis.document){const n=sn(e),r=v.useRef(!1),o=v.useRef(()=>{});return v.useEffect(()=>{const i=a=>{if(a.target&&!r.current){let f=function(){v0(w1,n,u,{discrete:!0})};var s=f;const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=f,t.addEventListener("click",o.current,{once:!0})):f()}else t.removeEventListener("click",o.current);r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function C1(e,t=globalThis==null?void 0:globalThis.document){const n=sn(e),r=v.useRef(!1);return v.useEffect(()=>{const o=i=>{i.target&&!r.current&&v0(x1,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function yc(){const e=new CustomEvent(ba);document.dispatchEvent(e)}function v0(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?y1(o,i):o.dispatchEvent(i)}const Rl="focusScope.autoFocusOnMount",Ll="focusScope.autoFocusOnUnmount",gc={bubbles:!1,cancelable:!0},$1=v.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...l}=e,[a,s]=v.useState(null),u=sn(o),f=sn(i),d=v.useRef(null),h=Kn(t,y=>s(y)),g=v.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;v.useEffect(()=>{if(r){let c=function($){if(g.paused||!a)return;const S=$.target;a.contains(S)?d.current=S:_t(d.current,{select:!0})},m=function($){if(g.paused||!a)return;const S=$.relatedTarget;S!==null&&(a.contains(S)||_t(d.current,{select:!0}))},w=function($){if(document.activeElement===document.body)for(const N of $)N.removedNodes.length>0&&_t(a)};var y=c,C=m,p=w;document.addEventListener("focusin",c),document.addEventListener("focusout",m);const E=new MutationObserver(w);return a&&E.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",c),document.removeEventListener("focusout",m),E.disconnect()}}},[r,a,g.paused]),v.useEffect(()=>{if(a){xc.add(g);const y=document.activeElement;if(!a.contains(y)){const p=new CustomEvent(Rl,gc);a.addEventListener(Rl,u),a.dispatchEvent(p),p.defaultPrevented||(_1(R1(y0(a)),{select:!0}),document.activeElement===y&&_t(a))}return()=>{a.removeEventListener(Rl,u),setTimeout(()=>{const p=new CustomEvent(Ll,gc);a.addEventListener(Ll,f),a.dispatchEvent(p),p.defaultPrevented||_t(y??document.body,{select:!0}),a.removeEventListener(Ll,f),xc.remove(g)},0)}}},[a,u,f,g]);const x=v.useCallback(y=>{if(!n&&!r||g.paused)return;const C=y.key==="Tab"&&!y.altKey&&!y.ctrlKey&&!y.metaKey,p=document.activeElement;if(C&&p){const c=y.currentTarget,[m,w]=N1(c);m&&w?!y.shiftKey&&p===w?(y.preventDefault(),n&&_t(m,{select:!0})):y.shiftKey&&p===m&&(y.preventDefault(),n&&_t(w,{select:!0})):p===c&&y.preventDefault()}},[n,r,g.paused]);return v.createElement(fn.div,se({tabIndex:-1},l,{ref:h,onKeyDown:x}))});function _1(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(_t(r,{select:t}),document.activeElement!==n)return}function N1(e){const t=y0(e),n=wc(t,e),r=wc(t.reverse(),e);return[n,r]}function y0(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function wc(e,t){for(const n of e)if(!P1(n,{upTo:t}))return n}function P1(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function T1(e){return e instanceof HTMLInputElement&&"select"in e}function _t(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&T1(e)&&t&&e.select()}}const xc=O1();function O1(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Sc(e,t),e.unshift(t)},remove(t){var n;e=Sc(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Sc(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function R1(e){return e.filter(t=>t.tagName!=="A")}const L1=v.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=e;return r?dh.createPortal(v.createElement(fn.div,se({},o,{ref:t})),r):null});function z1(e,t){return v.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const qi=e=>{const{present:t,children:n}=e,r=j1(t),o=typeof n=="function"?n({present:r.isPresent}):v.Children.only(n),i=Kn(r.ref,o.ref);return typeof n=="function"||r.isPresent?v.cloneElement(o,{ref:i}):null};qi.displayName="Presence";function j1(e){const[t,n]=v.useState(),r=v.useRef({}),o=v.useRef(e),i=v.useRef("none"),l=e?"mounted":"unmounted",[a,s]=z1(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return v.useEffect(()=>{const u=vo(r.current);i.current=a==="mounted"?u:"none"},[a]),Fa(()=>{const u=r.current,f=o.current;if(f!==e){const h=i.current,g=vo(u);e?s("MOUNT"):g==="none"||(u==null?void 0:u.display)==="none"?s("UNMOUNT"):s(f&&h!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),Fa(()=>{if(t){const u=d=>{const g=vo(r.current).includes(d.animationName);d.target===t&&g&&Pi.flushSync(()=>s("ANIMATION_END"))},f=d=>{d.target===t&&(i.current=vo(r.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:v.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function vo(e){return(e==null?void 0:e.animationName)||"none"}let zl=0;function I1(){v.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:Ec()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:Ec()),zl++,()=>{zl===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),zl--}},[])}function Ec(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var st=function(){return st=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},st.apply(this,arguments)};function g0(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function M1(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Do="right-scroll-bar-position",Fo="width-before-scroll-bar",D1="with-scroll-bars-hidden",F1="--removed-body-scroll-bar-size";function jl(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function A1(e,t){var n=v.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var kc=new WeakMap;function b1(e,t){var n=A1(t||null,function(r){return e.forEach(function(o){return jl(o,r)})});return v.useLayoutEffect(function(){var r=kc.get(n);if(r){var o=new Set(r),i=new Set(e),l=n.current;o.forEach(function(a){i.has(a)||jl(a,null)}),i.forEach(function(a){o.has(a)||jl(a,l)})}kc.set(n,e)},[e]),n}function U1(e){return e}function B1(e,t){t===void 0&&(t=U1);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var l=t(i,r);return n.push(l),function(){n=n.filter(function(a){return a!==l})}},assignSyncMedium:function(i){for(r=!0;n.length;){var l=n;n=[],l.forEach(i)}n={push:function(a){return i(a)},filter:function(){return n}}},assignMedium:function(i){r=!0;var l=[];if(n.length){var a=n;n=[],a.forEach(i),l=n}var s=function(){var f=l;l=[],f.forEach(i)},u=function(){return Promise.resolve().then(s)};u(),n={push:function(f){l.push(f),u()},filter:function(f){return l=l.filter(f),n}}}};return o}function V1(e){e===void 0&&(e={});var t=B1(null);return t.options=st({async:!0,ssr:!1},e),t}var w0=function(e){var t=e.sideCar,n=g0(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return v.createElement(r,st({},n))};w0.isSideCarExport=!0;function W1(e,t){return e.useMedium(t),w0}var x0=V1(),Il=function(){},el=v.forwardRef(function(e,t){var n=v.useRef(null),r=v.useState({onScrollCapture:Il,onWheelCapture:Il,onTouchMoveCapture:Il}),o=r[0],i=r[1],l=e.forwardProps,a=e.children,s=e.className,u=e.removeScrollBar,f=e.enabled,d=e.shards,h=e.sideCar,g=e.noIsolation,x=e.inert,y=e.allowPinchZoom,C=e.as,p=C===void 0?"div":C,c=g0(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),m=h,w=b1([n,t]),E=st(st({},c),o);return v.createElement(v.Fragment,null,f&&v.createElement(m,{sideCar:x0,removeScrollBar:u,shards:d,noIsolation:g,inert:x,setCallbacks:i,allowPinchZoom:!!y,lockRef:n}),l?v.cloneElement(v.Children.only(a),st(st({},E),{ref:w})):v.createElement(p,st({},E,{className:s,ref:w}),a))});el.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};el.classNames={fullWidth:Fo,zeroRight:Do};var H1=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Q1(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=H1();return t&&e.setAttribute("nonce",t),e}function Y1(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function K1(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var X1=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Q1())&&(Y1(t,n),K1(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},G1=function(){var e=X1();return function(t,n){v.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},S0=function(){var e=G1(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},Z1={left:0,top:0,right:0,gap:0},Ml=function(e){return parseInt(e||"",10)||0},J1=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Ml(n),Ml(r),Ml(o)]},q1=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Z1;var t=J1(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ey=S0(),fi="data-scroll-locked",ty=function(e,t,n,r){var o=e.left,i=e.top,l=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(D1,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(fi,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Do,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Fo,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Do," .").concat(Do,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Fo," .").concat(Fo,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(fi,`] {
    `).concat(F1,": ").concat(a,`px;
  }
`)},ny=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r,i=v.useMemo(function(){return q1(o)},[o]);return v.useEffect(function(){return document.body.setAttribute(fi,""),function(){document.body.removeAttribute(fi)}},[]),v.createElement(ey,{styles:ty(i,!t,o,n?"":"!important")})},Ua=!1;if(typeof window<"u")try{var yo=Object.defineProperty({},"passive",{get:function(){return Ua=!0,!0}});window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Ua=!1}var mn=Ua?{passive:!1}:!1,ry=function(e){return e.tagName==="TEXTAREA"},E0=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!ry(e)&&n[t]==="visible")},oy=function(e){return E0(e,"overflowY")},iy=function(e){return E0(e,"overflowX")},Cc=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=k0(e,n);if(r){var o=C0(e,n),i=o[1],l=o[2];if(i>l)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},ly=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},ay=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},k0=function(e,t){return e==="v"?oy(t):iy(t)},C0=function(e,t){return e==="v"?ly(t):ay(t)},sy=function(e,t){return e==="h"&&t==="rtl"?-1:1},uy=function(e,t,n,r,o){var i=sy(e,window.getComputedStyle(t).direction),l=i*r,a=n.target,s=t.contains(a),u=!1,f=l>0,d=0,h=0;do{var g=C0(e,a),x=g[0],y=g[1],C=g[2],p=y-C-i*x;(x||p)&&k0(e,a)&&(d+=p,h+=x),a=a.parentNode}while(!s&&a!==document.body||s&&(t.contains(a)||t===a));return(f&&(o&&d===0||!o&&l>d)||!f&&(o&&h===0||!o&&-l>h))&&(u=!0),u},go=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},$c=function(e){return[e.deltaX,e.deltaY]},_c=function(e){return e&&"current"in e?e.current:e},cy=function(e,t){return e[0]===t[0]&&e[1]===t[1]},fy=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},dy=0,hn=[];function py(e){var t=v.useRef([]),n=v.useRef([0,0]),r=v.useRef(),o=v.useState(dy++)[0],i=v.useState(function(){return S0()})[0],l=v.useRef(e);v.useEffect(function(){l.current=e},[e]),v.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var y=M1([e.lockRef.current],(e.shards||[]).map(_c),!0).filter(Boolean);return y.forEach(function(C){return C.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),y.forEach(function(C){return C.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=v.useCallback(function(y,C){if("touches"in y&&y.touches.length===2)return!l.current.allowPinchZoom;var p=go(y),c=n.current,m="deltaX"in y?y.deltaX:c[0]-p[0],w="deltaY"in y?y.deltaY:c[1]-p[1],E,$=y.target,S=Math.abs(m)>Math.abs(w)?"h":"v";if("touches"in y&&S==="h"&&$.type==="range")return!1;var N=Cc(S,$);if(!N)return!0;if(N?E=S:(E=S==="v"?"h":"v",N=Cc(S,$)),!N)return!1;if(!r.current&&"changedTouches"in y&&(m||w)&&(r.current=E),!E)return!0;var j=r.current||E;return uy(j,C,y,j==="h"?m:w,!0)},[]),s=v.useCallback(function(y){var C=y;if(!(!hn.length||hn[hn.length-1]!==i)){var p="deltaY"in C?$c(C):go(C),c=t.current.filter(function(E){return E.name===C.type&&E.target===C.target&&cy(E.delta,p)})[0];if(c&&c.should){C.cancelable&&C.preventDefault();return}if(!c){var m=(l.current.shards||[]).map(_c).filter(Boolean).filter(function(E){return E.contains(C.target)}),w=m.length>0?a(C,m[0]):!l.current.noIsolation;w&&C.cancelable&&C.preventDefault()}}},[]),u=v.useCallback(function(y,C,p,c){var m={name:y,delta:C,target:p,should:c};t.current.push(m),setTimeout(function(){t.current=t.current.filter(function(w){return w!==m})},1)},[]),f=v.useCallback(function(y){n.current=go(y),r.current=void 0},[]),d=v.useCallback(function(y){u(y.type,$c(y),y.target,a(y,e.lockRef.current))},[]),h=v.useCallback(function(y){u(y.type,go(y),y.target,a(y,e.lockRef.current))},[]);v.useEffect(function(){return hn.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:h}),document.addEventListener("wheel",s,mn),document.addEventListener("touchmove",s,mn),document.addEventListener("touchstart",f,mn),function(){hn=hn.filter(function(y){return y!==i}),document.removeEventListener("wheel",s,mn),document.removeEventListener("touchmove",s,mn),document.removeEventListener("touchstart",f,mn)}},[]);var g=e.removeScrollBar,x=e.inert;return v.createElement(v.Fragment,null,x?v.createElement(i,{styles:fy(o)}):null,g?v.createElement(ny,{gapMode:"margin"}):null)}const my=W1(x0,py);var $0=v.forwardRef(function(e,t){return v.createElement(el,st({},e,{ref:t,sideCar:my}))});$0.classNames=el.classNames;const hy=$0;var vy=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},vn=new WeakMap,wo=new WeakMap,xo={},Dl=0,_0=function(e){return e&&(e.host||_0(e.parentNode))},yy=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=_0(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},gy=function(e,t,n,r){var o=yy(t,Array.isArray(e)?e:[e]);xo[n]||(xo[n]=new WeakMap);var i=xo[n],l=[],a=new Set,s=new Set(o),u=function(d){!d||a.has(d)||(a.add(d),u(d.parentNode))};o.forEach(u);var f=function(d){!d||s.has(d)||Array.prototype.forEach.call(d.children,function(h){if(a.has(h))f(h);else{var g=h.getAttribute(r),x=g!==null&&g!=="false",y=(vn.get(h)||0)+1,C=(i.get(h)||0)+1;vn.set(h,y),i.set(h,C),l.push(h),y===1&&x&&wo.set(h,!0),C===1&&h.setAttribute(n,"true"),x||h.setAttribute(r,"true")}})};return f(t),a.clear(),Dl++,function(){l.forEach(function(d){var h=vn.get(d)-1,g=i.get(d)-1;vn.set(d,h),i.set(d,g),h||(wo.has(d)||d.removeAttribute(r),wo.delete(d)),g||d.removeAttribute(n)}),Dl--,Dl||(vn=new WeakMap,vn=new WeakMap,wo=new WeakMap,xo={})}},wy=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||vy(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),gy(r,o,n,"aria-hidden")):function(){return null}};const N0="Dialog",[P0,ag]=a1(N0),[xy,dt]=P0(N0),Sy=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:l=!0}=e,a=v.useRef(null),s=v.useRef(null),[u=!1,f]=f1({prop:r,defaultProp:o,onChange:i});return v.createElement(xy,{scope:t,triggerRef:a,contentRef:s,contentId:Ol(),titleId:Ol(),descriptionId:Ol(),open:u,onOpenChange:f,onOpenToggle:v.useCallback(()=>f(d=>!d),[f]),modal:l},n)},Ey="DialogTrigger",ky=v.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=dt(Ey,n),i=Kn(t,o.triggerRef);return v.createElement(fn.button,se({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Gs(o.open)},r,{ref:i,onClick:tn(e.onClick,o.onOpenToggle)}))}),T0="DialogPortal",[Cy,O0]=P0(T0,{forceMount:void 0}),$y=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=dt(T0,t);return v.createElement(Cy,{scope:t,forceMount:n},v.Children.map(r,l=>v.createElement(qi,{present:n||i.open},v.createElement(L1,{asChild:!0,container:o},l))))},Ba="DialogOverlay",_y=v.forwardRef((e,t)=>{const n=O0(Ba,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=dt(Ba,e.__scopeDialog);return i.modal?v.createElement(qi,{present:r||i.open},v.createElement(Ny,se({},o,{ref:t}))):null}),Ny=v.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=dt(Ba,n);return v.createElement(hy,{as:Xs,allowPinchZoom:!0,shards:[o.contentRef]},v.createElement(fn.div,se({"data-state":Gs(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),Ar="DialogContent",Py=v.forwardRef((e,t)=>{const n=O0(Ar,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=dt(Ar,e.__scopeDialog);return v.createElement(qi,{present:r||i.open},i.modal?v.createElement(Ty,se({},o,{ref:t})):v.createElement(Oy,se({},o,{ref:t})))}),Ty=v.forwardRef((e,t)=>{const n=dt(Ar,e.__scopeDialog),r=v.useRef(null),o=Kn(t,n.contentRef,r);return v.useEffect(()=>{const i=r.current;if(i)return wy(i)},[]),v.createElement(R0,se({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:tn(e.onCloseAutoFocus,i=>{var l;i.preventDefault(),(l=n.triggerRef.current)===null||l===void 0||l.focus()}),onPointerDownOutside:tn(e.onPointerDownOutside,i=>{const l=i.detail.originalEvent,a=l.button===0&&l.ctrlKey===!0;(l.button===2||a)&&i.preventDefault()}),onFocusOutside:tn(e.onFocusOutside,i=>i.preventDefault())}))}),Oy=v.forwardRef((e,t)=>{const n=dt(Ar,e.__scopeDialog),r=v.useRef(!1),o=v.useRef(!1);return v.createElement(R0,se({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var l;if((l=e.onCloseAutoFocus)===null||l===void 0||l.call(e,i),!i.defaultPrevented){var a;r.current||(a=n.triggerRef.current)===null||a===void 0||a.focus(),i.preventDefault()}r.current=!1,o.current=!1},onInteractOutside:i=>{var l,a;(l=e.onInteractOutside)===null||l===void 0||l.call(e,i),i.defaultPrevented||(r.current=!0,i.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const s=i.target;((a=n.triggerRef.current)===null||a===void 0?void 0:a.contains(s))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&o.current&&i.preventDefault()}}))}),R0=v.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...l}=e,a=dt(Ar,n),s=v.useRef(null),u=Kn(t,s);return I1(),v.createElement(v.Fragment,null,v.createElement($1,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},v.createElement(E1,se({role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":Gs(a.open)},l,{ref:u,onDismiss:()=>a.onOpenChange(!1)}))),!1)}),Ry="DialogTitle",Ly=v.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=dt(Ry,n);return v.createElement(fn.h2,se({id:o.titleId},r,{ref:t}))}),zy="DialogDescription",jy=v.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=dt(zy,n);return v.createElement(fn.p,se({id:o.descriptionId},r,{ref:t}))});function Gs(e){return e?"open":"closed"}const Iy=Sy,My=ky,Dy=$y,Fy=_y,Ay=Py,by=Ly,Uy=jy;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var By={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),L0=(e,t)=>{const n=v.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:a="",children:s,...u},f)=>v.createElement("svg",{ref:f,...By,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${Vy(e)}`,a].join(" "),...u},[...t.map(([d,h])=>v.createElement(d,h)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=L0("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=L0("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);class Qr{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const Qy=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},de={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Qy()},Zs=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Yy=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=Zs(e);de.publicKey=n.publicKey,de.blockHeadless=n.blockHeadless,de.storageProvider=n.storageProvider,de.blockList=n.blockList,de.limitRate=n.limitRate,de.origin=n.origin||t},z0=async(e,t,n={})=>{const r=await fetch(de.origin+e,{method:"POST",headers:n,body:t}),o=await r.text(),i=new Qr(r.status,o);if(r.ok)return i;throw i},j0=(e,t,n)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Ky=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},I0=e=>e.webdriver||!e.languages||e.languages.length===0,M0=()=>new Qr(451,"Unavailable For Headless Browser"),Xy=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Gy=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},Zy=(e,t)=>e instanceof FormData?e.get(t):e[t],D0=(e,t)=>{if(Gy(e))return!1;Xy(e.list,e.watchVariable);const n=Zy(t,e.watchVariable);return typeof n!="string"?!1:e.list.includes(n)},F0=()=>new Qr(403,"Forbidden"),Jy=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},qy=async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r},A0=async(e,t,n)=>{if(!t.throttle||!n)return!1;Jy(t.throttle,t.id);const r=t.id||e;return await qy(r,t.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},b0=()=>new Qr(429,"Too Many Requests"),eg=async(e,t,n,r)=>{const o=Zs(r),i=o.publicKey||de.publicKey,l=o.blockHeadless||de.blockHeadless,a=de.storageProvider||o.storageProvider,s={...de.blockList,...o.blockList},u={...de.limitRate,...o.limitRate};return l&&I0(navigator)?Promise.reject(M0()):(j0(i,e,t),Ky(n),n&&D0(s,n)?Promise.reject(F0()):await A0(location.pathname,u,a)?Promise.reject(b0()):z0("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:i,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"}))},tg=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},ng=e=>typeof e=="string"?document.querySelector(e):e,rg=async(e,t,n,r)=>{const o=Zs(r),i=o.publicKey||de.publicKey,l=o.blockHeadless||de.blockHeadless,a=de.storageProvider||o.storageProvider,s={...de.blockList,...o.blockList},u={...de.limitRate,...o.limitRate};if(l&&I0(navigator))return Promise.reject(M0());const f=ng(n);j0(i,e,t),tg(f);const d=new FormData(f);return D0(s,d)?Promise.reject(F0()):await A0(location.pathname,u,a)?Promise.reject(b0()):(d.append("lib_version","4.3.3"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",i),z0("/api/v1.0/email/send-form",d))},og={init:Yy,send:eg,sendForm:rg,EmailJSResponseStatus:Qr},ig=()=>{const[e,t]=v.useState(""),[n,r]=v.useState(""),[o,i]=v.useState(""),l=a=>{a.preventDefault();const s="service_eok2rhv",u="template_upygej8",f="smOm0iZ7smpj1qG1P",d={from_name:e,from_email:n,from_message:o};og.send(s,u,d,f).then(h=>{console.log("Email sent successfully!",h),t(""),r(""),i("")}).catch(h=>{console.error("Error sending email!",h)})};return P.jsx("div",{children:P.jsx(Dy,{children:P.jsx(Fy,{className:"fixed inset-0",children:P.jsxs(Ay,{className:"data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-green-500 p-[25px]  focus:outline-none",children:[P.jsx(by,{className:"m-0 font-JetBrains font-bold text-[32px] text-center",children:"Work Request"}),P.jsx(Uy,{className:"text-green-800 mb-6 text-center",children:"Write all things you need and I go make the budget"}),P.jsx("div",{className:"",children:P.jsxs("form",{className:"w-[400px] relative",onSubmit:l,children:[P.jsxs("div",{className:" grid mb-[2px]",children:[P.jsxs("div",{className:"flex items-baseline justify-between",children:[P.jsx("h2",{className:"text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900",children:"Full Name"}),P.jsx("h4",{className:" text-red-600 font-Inter font-semibold text-sm opacity-[0.8]",children:"--"})]}),P.jsx("div",{children:P.jsx("input",{className:"box-border font-JetBrains tracking-wider w-full bg-zinc-900 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-lg leading-none text-indigo-400 outline-none",type:"text",value:e,required:!0,onChange:a=>t(a.target.value)})})]}),P.jsxs("div",{className:" grid mb-[2px]",children:[P.jsx("div",{className:"flex items-baseline justify-between",children:P.jsx("h2",{className:"text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900",children:"Email"})}),P.jsx("div",{children:P.jsx("input",{className:"box-border font-JetBrains tracking-wider w-full bg-zinc-900 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-lg leading-none text-indigo-400 outline-none",type:"email",value:n,required:!0,onChange:a=>r(a.target.value)})})]}),P.jsxs("div",{className:"",children:[P.jsxs("div",{className:"grid mb-[10px] ",children:[P.jsx("div",{className:"flex items-baseline justify-between",children:P.jsx("h2",{className:"text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900",children:"Work"})}),P.jsx("div",{children:P.jsx("textarea",{className:"box-border font-Inter text-lg text-indigo-400 bg-zinc-900 w-full inline-flex appearance-none items-center justify-center rounded-[4px] h-56 line p-[20px]  leading-6 outline-none resize-none",required:!0,value:o,onChange:a=>i(a.target.value)})})]}),P.jsx("button",{type:"submit",className:`box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center 
              rounded-[20px] hover:bg-indigo-600 hover:text-slate-200 bg-zinc-900 border-4 text-green-400 border-green-500 
              border-solid bg-none p-[20px] font-medium leading-none shadow-[0_2px_10px]  outline-none mt-[2px]`,children:"Enviar"})]})]})})]})})})})};function So(){return P.jsxs("div",{className:"flex gap-10",children:[P.jsx("div",{className:"animate-spining",children:"+"}),P.jsx("div",{className:"animate-spining",children:"+"}),P.jsx("div",{className:"animate-spining",children:"+"}),P.jsx("div",{className:"animate-spining",children:"+"}),P.jsx("div",{className:"animate-spining",children:"+"}),P.jsx("div",{className:"animate-spining",children:"+"}),P.jsx("div",{className:"animate-spining",children:"+"})]})}function lg(){const[e,t]=v.useState(!0),n=()=>{t(!e)};return P.jsx("div",{className:"mx-auto px-5",children:P.jsxs("div",{className:`${e&&"dark"} min-h-screen`,children:[P.jsx(ho,{cascade:!0,damping:.2,triggerOnce:!0,children:P.jsx(Iy,{children:P.jsxs("main",{className:"min-h-screen dark:bg-zinc-900 bg-slate-200 outline-none selection:bg-red-500 overflow-hidden",children:[P.jsx("div",{className:"h-48",children:P.jsxs(ho,{direction:"down",children:[P.jsx("h1",{className:"absolute left-6 top-6 font-normal celular:text-1xl lg:text-3xl font-Inter text-zinc-900 dark:text-slate-200",children:P.jsxs("a",{children:["PORTI",P.jsx("a",{className:" celular:text-lg lg:text-4xl font-Pixel text-blue-600  dark:text-indigo-500",children:"FOLIO"})]})}),P.jsx("div",{className:" absolute hidden lg:right-6 lg:top-6 ",children:P.jsxs("div",{className:"flex flex-row gap-6 font-normal font-JetBrains",children:[P.jsx("h1",{className:" text-4xl dark:text-slate-200",children:P.jsx("a",{children:"SOBRE"})}),P.jsx("h1",{className:" text-4xl dark:text-slate-200",children:P.jsx("a",{children:"PROJETOS"})}),P.jsx("h1",{className:" text-4xl dark:text-slate-200",children:P.jsx("a",{children:"CONTATO"})})]})})]})}),P.jsxs("div",{children:[P.jsx(ho,{direction:"down",children:P.jsx("h2",{className:" absolute animate-wiggle left-1/4 font-Pixel font-light lg:top-0 lg:text-3xl text-blue-400 dark:text-indigo-600 ",children:"I am..."})}),P.jsxs(ho,{direction:"up",children:[P.jsxs("h1",{className:" celular:relative celular:text-center celular:text-sm lg:left-72 font-JetBrains lg:text-left celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:[P.jsx(i1,{sequence:["Desginer",1e3,"Web Developer",1e3,"Music Producer",1e3,"Bruno B. Mathias",1e3],wrapper:"span",speed:50,style:{fontSize:"2em",display:"inline-block"},repeat:1/0}),P.jsx("blockquote",{className:" dark:text-slate-200 text-xl lg:text-left mt-14",children:P.jsx("span",{className:" bg-zinc-800 p-3 rounded-2xl",children:'"You dont need to make, I do"'})})]}),P.jsxs("div",{className:"flex flex-col translate-x-1/2 -translate-y-3/4 opacity-45",children:[P.jsx("div",{className:" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:P.jsx("div",{className:"flex gap-10",children:P.jsx(So,{})})}),P.jsx("div",{className:" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:P.jsx("div",{className:"flex gap-10",children:P.jsx(So,{})})}),P.jsx("div",{className:" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:P.jsx("div",{className:"flex gap-10",children:P.jsx(So,{})})}),P.jsx("div",{className:" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:P.jsx(So,{})})]})]})]}),P.jsx(My,{asChild:!0,children:P.jsx("button",{className:"transition ease-in-out hover:-translate-y-1 hover:scale-110 absolute right-1/4 bottom-1/4 text-violet11  hover:shadow-glowing inline-flex h-[35px] items-center justify-center rounded-[20px] border-solid border-4 border-green-500 dark:border-green-600 dark:text-green-500 dark:hover:border-indigo-600 dark:hover:text-indigo-600 text-green-500 py-[50px] px-[120px] font-JetBrains leading-none text-2xl  focus:outline-none",children:"Call-me"})}),P.jsx(ig,{}),P.jsx("div",{className:"dark:bg-zinc-900 bg-slate-300"}),P.jsx("div",{className:"bg-slate-200"})]})})}),P.jsx("button",{onClick:n,className:"absolute w-16 h-16 right-16 bottom-16 p-4 rounded-full font-medium font-Danci dark:bg-slate-200 bg-zinc-900 text-slate-200 dark:text-zinc-900",children:e?P.jsx(Hy,{className:"absolute w-8 h-8 left-4 top-4"}):P.jsx(Wy,{className:"absolute w-8 h-8 left-4 top-4"})})]})})}Al.createRoot(document.getElementById("root")).render(P.jsx(Ao.StrictMode,{children:P.jsx(lg,{})}));
