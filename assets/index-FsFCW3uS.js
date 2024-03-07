function Z0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ac(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bc={exports:{}},mi={},Uc={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),J0=Symbol.for("react.portal"),q0=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),tp=Symbol.for("react.profiler"),np=Symbol.for("react.provider"),rp=Symbol.for("react.context"),op=Symbol.for("react.forward_ref"),ip=Symbol.for("react.suspense"),lp=Symbol.for("react.memo"),ap=Symbol.for("react.lazy"),uu=Symbol.iterator;function sp(e){return e===null||typeof e!="object"?null:(e=uu&&e[uu]||e["@@iterator"],typeof e=="function"?e:null)}var Bc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vc=Object.assign,Wc={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=Wc,this.updater=n||Bc}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hc(){}Hc.prototype=Qn.prototype;function Ga(e,t,n){this.props=e,this.context=t,this.refs=Wc,this.updater=n||Bc}var Za=Ga.prototype=new Hc;Za.constructor=Ga;Vc(Za,Qn.prototype);Za.isPureReactComponent=!0;var cu=Array.isArray,Qc=Object.prototype.hasOwnProperty,Ja={current:null},Yc={key:!0,ref:!0,__self:!0,__source:!0};function Xc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Qc.call(t,r)&&!Yc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Br,type:e,key:i,ref:l,props:o,_owner:Ja.current}}function up(e,t){return{$$typeof:Br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function cp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fu=/\/+/g;function il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cp(""+e.key):t.toString(36)}function ko(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Br:case J0:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+il(l,0):r,cu(o)?(n="",e!=null&&(n=e.replace(fu,"$&/")+"/"),ko(o,t,n,"",function(u){return u})):o!=null&&(qa(o)&&(o=up(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(fu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",cu(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+il(i,a);l+=ko(i,t,n,s,o)}else if(s=sp(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+il(i,a++),l+=ko(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Gr(e,t,n){if(e==null)return e;var r=[],o=0;return ko(e,r,"","",function(i){return t.call(n,i,o++)}),r}function fp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},$o={transition:null},dp={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:$o,ReactCurrentOwner:Ja};j.Children={map:Gr,forEach:function(e,t,n){Gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Gr(e,function(){t++}),t},toArray:function(e){return Gr(e,function(t){return t})||[]},only:function(e){if(!qa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Qn;j.Fragment=q0;j.Profiler=tp;j.PureComponent=Ga;j.StrictMode=ep;j.Suspense=ip;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dp;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ja.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Qc.call(t,s)&&!Yc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Br,type:e.type,key:o,ref:i,props:r,_owner:l}};j.createContext=function(e){return e={$$typeof:rp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:np,_context:e},e.Consumer=e};j.createElement=Xc;j.createFactory=function(e){var t=Xc.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:op,render:e}};j.isValidElement=qa;j.lazy=function(e){return{$$typeof:ap,_payload:{_status:-1,_result:e},_init:fp}};j.memo=function(e,t){return{$$typeof:lp,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=$o.transition;$o.transition={};try{e()}finally{$o.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return Ce.current.useCallback(e,t)};j.useContext=function(e){return Ce.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};j.useEffect=function(e,t){return Ce.current.useEffect(e,t)};j.useId=function(){return Ce.current.useId()};j.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return Ce.current.useMemo(e,t)};j.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};j.useRef=function(e){return Ce.current.useRef(e)};j.useState=function(e){return Ce.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return Ce.current.useTransition()};j.version="18.2.0";Uc.exports=j;var d=Uc.exports;const Uo=Ac(d),Hl=Z0({__proto__:null,default:Uo},[d]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=d,mp=Symbol.for("react.element"),vp=Symbol.for("react.fragment"),hp=Object.prototype.hasOwnProperty,yp=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gp={key:!0,ref:!0,__self:!0,__source:!0};function Kc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)hp.call(t,r)&&!gp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:mp,type:e,key:i,ref:l,props:o,_owner:yp.current}}mi.Fragment=vp;mi.jsx=Kc;mi.jsxs=Kc;bc.exports=mi;var N=bc.exports,Ql={},Gc={exports:{}},je={},Zc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,F){var O=R.length;R.push(F);e:for(;0<O;){var A=O-1>>>1,V=R[A];if(0<o(V,F))R[A]=F,R[O]=V,O=A;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var F=R[0],O=R.pop();if(O!==F){R[0]=O;e:for(var A=0,V=R.length,ae=V>>>1;A<ae;){var $e=2*(A+1)-1,ol=R[$e],Gt=$e+1,Kr=R[Gt];if(0>o(ol,O))Gt<V&&0>o(Kr,ol)?(R[A]=Kr,R[Gt]=O,A=Gt):(R[A]=ol,R[$e]=O,A=$e);else if(Gt<V&&0>o(Kr,O))R[A]=Kr,R[Gt]=O,A=Gt;else break e}}return F}function o(R,F){var O=R.sortIndex-F.sortIndex;return O!==0?O:R.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,p=null,h=3,g=!1,w=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=R)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function x(R){if(y=!1,v(R),!w)if(n(s)!==null)w=!0,ot(S);else{var F=n(u);F!==null&&Nt(x,F.startTime-R)}}function S(R,F){w=!1,y&&(y=!1,m(_),_=-1),g=!0;var O=h;try{for(v(F),p=n(s);p!==null&&(!(p.expirationTime>F)||R&&!I());){var A=p.callback;if(typeof A=="function"){p.callback=null,h=p.priorityLevel;var V=A(p.expirationTime<=F);F=e.unstable_now(),typeof V=="function"?p.callback=V:p===n(s)&&r(s),v(F)}else r(s);p=n(s)}if(p!==null)var ae=!0;else{var $e=n(u);$e!==null&&Nt(x,$e.startTime-F),ae=!1}return ae}finally{p=null,h=O,g=!1}}var k=!1,E=null,_=-1,D=5,T=-1;function I(){return!(e.unstable_now()-T<D)}function L(){if(E!==null){var R=e.unstable_now();T=R;var F=!0;try{F=E(!0,R)}finally{F?z():(k=!1,E=null)}}else k=!1}var z;if(typeof c=="function")z=function(){c(L)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,pn=Me.port2;Me.port1.onmessage=L,z=function(){pn.postMessage(null)}}else z=function(){C(L,0)};function ot(R){E=R,k||(k=!0,z())}function Nt(R,F){_=C(function(){R(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,ot(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var O=h;h=F;try{return R()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,F){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var O=h;h=R;try{return F()}finally{h=O}},e.unstable_scheduleCallback=function(R,F,O){var A=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?A+O:A):O=A,R){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=O+V,R={id:f++,callback:F,priorityLevel:R,startTime:O,expirationTime:V,sortIndex:-1},O>A?(R.sortIndex=O,t(u,R),n(s)===null&&R===n(u)&&(y?(m(_),_=-1):y=!0,Nt(x,O-A))):(R.sortIndex=V,t(s,R),w||g||(w=!0,ot(S))),R},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(R){var F=h;return function(){var O=h;h=F;try{return R.apply(this,arguments)}finally{h=O}}}})(Jc);Zc.exports=Jc;var xp=Zc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=d,ze=xp;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ef=new Set,xr={};function fn(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(xr[e]=t,e=0;e<t.length;e++)ef.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,wp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,du={},pu={};function Sp(e){return Yl.call(pu,e)?!0:Yl.call(du,e)?!1:wp.test(e)?pu[e]=!0:(du[e]=!0,!1)}function Ep(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cp(e,t,n,r){if(t===null||typeof t>"u"||Ep(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var es=/[\-:]([a-z])/g;function ts(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(es,ts);ve[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(es,ts);ve[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(es,ts);ve[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function ns(e,t,n,r){var o=ve.hasOwnProperty(t)?ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cp(t,n,o,r)&&(n=null),r||o===null?Sp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zr=Symbol.for("react.element"),gn=Symbol.for("react.portal"),xn=Symbol.for("react.fragment"),rs=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),os=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),is=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),rf=Symbol.for("react.offscreen"),mu=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=mu&&e[mu]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,ll;function lr(e){if(ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ll=t&&t[1]||""}return`
`+ll+e}var al=!1;function sl(e,t){if(!e||al)return"";al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{al=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function kp(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=sl(e.type,!1),e;case 11:return e=sl(e.type.render,!1),e;case 1:return e=sl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xn:return"Fragment";case gn:return"Portal";case Xl:return"Profiler";case rs:return"StrictMode";case Kl:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nf:return(e.displayName||"Context")+".Consumer";case tf:return(e._context.displayName||"Context")+".Provider";case os:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case is:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function $p(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===rs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function of(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _p(e){var t=of(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){e._valueTracker||(e._valueTracker=_p(e))}function lf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=of(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function af(e,t){t=t.checked,t!=null&&ns(e,"checked",t,!1)}function ql(e,t){af(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ea(e,t.type,n):t.hasOwnProperty("defaultValue")&&ea(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ea(e,t,n){(t!=="number"||Bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ta(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(ar(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function sf(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function na(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qr,cf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Np=["Webkit","ms","Moz","O"];Object.keys(cr).forEach(function(e){Np.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cr[t]=cr[e]})});function ff(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||cr.hasOwnProperty(e)&&cr[e]?(""+t).trim():t+"px"}function df(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ff(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Pp=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ra(e,t){if(t){if(Pp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function oa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ia=null;function ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var la=null,Rn=null,Mn=null;function xu(e){if(e=Hr(e)){if(typeof la!="function")throw Error($(280));var t=e.stateNode;t&&(t=xi(t),la(e.stateNode,e.type,t))}}function pf(e){Rn?Mn?Mn.push(e):Mn=[e]:Rn=e}function mf(){if(Rn){var e=Rn,t=Mn;if(Mn=Rn=null,xu(e),t)for(e=0;e<t.length;e++)xu(t[e])}}function vf(e,t){return e(t)}function hf(){}var ul=!1;function yf(e,t,n){if(ul)return e(t,n);ul=!0;try{return vf(e,t,n)}finally{ul=!1,(Rn!==null||Mn!==null)&&(hf(),mf())}}function Sr(e,t){var n=e.stateNode;if(n===null)return null;var r=xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var aa=!1;if(St)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){aa=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{aa=!1}function Tp(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var fr=!1,Vo=null,Wo=!1,sa=null,Op={onError:function(e){fr=!0,Vo=e}};function Rp(e,t,n,r,o,i,l,a,s){fr=!1,Vo=null,Tp.apply(Op,arguments)}function Mp(e,t,n,r,o,i,l,a,s){if(Rp.apply(this,arguments),fr){if(fr){var u=Vo;fr=!1,Vo=null}else throw Error($(198));Wo||(Wo=!0,sa=u)}}function dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wu(e){if(dn(e)!==e)throw Error($(188))}function Ip(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return wu(o),e;if(i===r)return wu(o),t;i=i.sibling}throw Error($(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function xf(e){return e=Ip(e),e!==null?wf(e):null}function wf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wf(e);if(t!==null)return t;e=e.sibling}return null}var Sf=ze.unstable_scheduleCallback,Su=ze.unstable_cancelCallback,Fp=ze.unstable_shouldYield,Lp=ze.unstable_requestPaint,ne=ze.unstable_now,Dp=ze.unstable_getCurrentPriorityLevel,as=ze.unstable_ImmediatePriority,Ef=ze.unstable_UserBlockingPriority,Ho=ze.unstable_NormalPriority,zp=ze.unstable_LowPriority,Cf=ze.unstable_IdlePriority,vi=null,dt=null;function jp(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Up,Ap=Math.log,bp=Math.LN2;function Up(e){return e>>>=0,e===0?32:31-(Ap(e)/bp|0)|0}var eo=64,to=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=sr(a):(i&=l,i!==0&&(r=sr(i)))}else l=n&~o,l!==0?r=sr(l):i!==0&&(r=sr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),o=1<<n,r|=e[n],t&=~o;return r}function Bp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-tt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Bp(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ua(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kf(){var e=eo;return eo<<=1,!(eo&4194240)&&(eo=64),e}function cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function Wp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-tt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ss(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function $f(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _f,us,Nf,Pf,Tf,ca=!1,no=[],Dt=null,zt=null,jt=null,Er=new Map,Cr=new Map,Mt=[],Hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eu(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function Jn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Hr(t),t!==null&&us(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Qp(e,t,n,r,o){switch(t){case"focusin":return Dt=Jn(Dt,e,t,n,r,o),!0;case"dragenter":return zt=Jn(zt,e,t,n,r,o),!0;case"mouseover":return jt=Jn(jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Er.set(i,Jn(Er.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Cr.set(i,Jn(Cr.get(i)||null,e,t,n,r,o)),!0}return!1}function Of(e){var t=qt(e.target);if(t!==null){var n=dn(t);if(n!==null){if(t=n.tag,t===13){if(t=gf(n),t!==null){e.blockedOn=t,Tf(e.priority,function(){Nf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ia=r,n.target.dispatchEvent(r),ia=null}else return t=Hr(n),t!==null&&us(t),e.blockedOn=n,!1;t.shift()}return!0}function Cu(e,t,n){_o(e)&&n.delete(t)}function Yp(){ca=!1,Dt!==null&&_o(Dt)&&(Dt=null),zt!==null&&_o(zt)&&(zt=null),jt!==null&&_o(jt)&&(jt=null),Er.forEach(Cu),Cr.forEach(Cu)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,ca||(ca=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Yp)))}function kr(e){function t(o){return qn(o,e)}if(0<no.length){qn(no[0],e);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dt!==null&&qn(Dt,e),zt!==null&&qn(zt,e),jt!==null&&qn(jt,e),Er.forEach(t),Cr.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)Of(n),n.blockedOn===null&&Mt.shift()}var In=$t.ReactCurrentBatchConfig,Yo=!0;function Xp(e,t,n,r){var o=H,i=In.transition;In.transition=null;try{H=1,cs(e,t,n,r)}finally{H=o,In.transition=i}}function Kp(e,t,n,r){var o=H,i=In.transition;In.transition=null;try{H=4,cs(e,t,n,r)}finally{H=o,In.transition=i}}function cs(e,t,n,r){if(Yo){var o=fa(e,t,n,r);if(o===null)wl(e,t,r,Xo,n),Eu(e,r);else if(Qp(o,e,t,n,r))r.stopPropagation();else if(Eu(e,r),t&4&&-1<Hp.indexOf(e)){for(;o!==null;){var i=Hr(o);if(i!==null&&_f(i),i=fa(e,t,n,r),i===null&&wl(e,t,r,Xo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else wl(e,t,r,null,n)}}var Xo=null;function fa(e,t,n,r){if(Xo=null,e=ls(r),e=qt(e),e!==null)if(t=dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xo=e,null}function Rf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dp()){case as:return 1;case Ef:return 4;case Ho:case zp:return 16;case Cf:return 536870912;default:return 16}default:return 16}}var Ft=null,fs=null,No=null;function Mf(){if(No)return No;var e,t=fs,n=t.length,r,o="value"in Ft?Ft.value:Ft.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return No=o.slice(e,1<r?1-r:void 0)}function Po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function ku(){return!1}function Ae(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ro:ku,this.isPropagationStopped=ku,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ds=Ae(Yn),Wr=ee({},Yn,{view:0,detail:0}),Gp=Ae(Wr),fl,dl,er,hi=ee({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(fl=e.screenX-er.screenX,dl=e.screenY-er.screenY):dl=fl=0,er=e),fl)},movementY:function(e){return"movementY"in e?e.movementY:dl}}),$u=Ae(hi),Zp=ee({},hi,{dataTransfer:0}),Jp=Ae(Zp),qp=ee({},Wr,{relatedTarget:0}),pl=Ae(qp),em=ee({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),tm=Ae(em),nm=ee({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rm=Ae(nm),om=ee({},Yn,{data:0}),_u=Ae(om),im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function ps(){return sm}var um=ee({},Wr,{key:function(e){if(e.key){var t=im[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(e){return e.type==="keypress"?Po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cm=Ae(um),fm=ee({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nu=Ae(fm),dm=ee({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),pm=Ae(dm),mm=ee({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),vm=Ae(mm),hm=ee({},hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ym=Ae(hm),gm=[9,13,27,32],ms=St&&"CompositionEvent"in window,dr=null;St&&"documentMode"in document&&(dr=document.documentMode);var xm=St&&"TextEvent"in window&&!dr,If=St&&(!ms||dr&&8<dr&&11>=dr),Pu=" ",Tu=!1;function Ff(e,t){switch(e){case"keyup":return gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function wm(e,t){switch(e){case"compositionend":return Lf(t);case"keypress":return t.which!==32?null:(Tu=!0,Pu);case"textInput":return e=t.data,e===Pu&&Tu?null:e;default:return null}}function Sm(e,t){if(wn)return e==="compositionend"||!ms&&Ff(e,t)?(e=Mf(),No=fs=Ft=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return If&&t.locale!=="ko"?null:t.data;default:return null}}var Em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Em[e.type]:t==="textarea"}function Df(e,t,n,r){pf(r),t=Ko(t,"onChange"),0<t.length&&(n=new ds("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,$r=null;function Cm(e){Yf(e,0)}function yi(e){var t=Cn(e);if(lf(t))return e}function km(e,t){if(e==="change")return t}var zf=!1;if(St){var ml;if(St){var vl="oninput"in document;if(!vl){var Ru=document.createElement("div");Ru.setAttribute("oninput","return;"),vl=typeof Ru.oninput=="function"}ml=vl}else ml=!1;zf=ml&&(!document.documentMode||9<document.documentMode)}function Mu(){pr&&(pr.detachEvent("onpropertychange",jf),$r=pr=null)}function jf(e){if(e.propertyName==="value"&&yi($r)){var t=[];Df(t,$r,e,ls(e)),yf(Cm,t)}}function $m(e,t,n){e==="focusin"?(Mu(),pr=t,$r=n,pr.attachEvent("onpropertychange",jf)):e==="focusout"&&Mu()}function _m(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi($r)}function Nm(e,t){if(e==="click")return yi(t)}function Pm(e,t){if(e==="input"||e==="change")return yi(t)}function Tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Tm;function _r(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Yl.call(t,o)||!rt(e[o],t[o]))return!1}return!0}function Iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fu(e,t){var n=Iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Iu(n)}}function Af(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Af(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bf(){for(var e=window,t=Bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bo(e.document)}return t}function vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Om(e){var t=bf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Af(n.ownerDocument.documentElement,n)){if(r!==null&&vs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Fu(n,i);var l=Fu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rm=St&&"documentMode"in document&&11>=document.documentMode,Sn=null,da=null,mr=null,pa=!1;function Lu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pa||Sn==null||Sn!==Bo(r)||(r=Sn,"selectionStart"in r&&vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mr&&_r(mr,r)||(mr=r,r=Ko(da,"onSelect"),0<r.length&&(t=new ds("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},hl={},Uf={};St&&(Uf=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function gi(e){if(hl[e])return hl[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uf)return hl[e]=t[n];return e}var Bf=gi("animationend"),Vf=gi("animationiteration"),Wf=gi("animationstart"),Hf=gi("transitionend"),Qf=new Map,Du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){Qf.set(e,t),fn(t,[e])}for(var yl=0;yl<Du.length;yl++){var gl=Du[yl],Mm=gl.toLowerCase(),Im=gl[0].toUpperCase()+gl.slice(1);Yt(Mm,"on"+Im)}Yt(Bf,"onAnimationEnd");Yt(Vf,"onAnimationIteration");Yt(Wf,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(Hf,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fm=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function zu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mp(r,t,void 0,e),e.currentTarget=null}function Yf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;zu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;zu(o,a,u),i=s}}}if(Wo)throw e=sa,Wo=!1,sa=null,e}function K(e,t){var n=t[ga];n===void 0&&(n=t[ga]=new Set);var r=e+"__bubble";n.has(r)||(Xf(t,e,2,!1),n.add(r))}function xl(e,t,n){var r=0;t&&(r|=4),Xf(n,e,r,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[io]){e[io]=!0,ef.forEach(function(n){n!=="selectionchange"&&(Fm.has(n)||xl(n,!1,e),xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,xl("selectionchange",!1,t))}}function Xf(e,t,n,r){switch(Rf(t)){case 1:var o=Xp;break;case 4:o=Kp;break;default:o=cs}n=o.bind(null,t,n,e),o=void 0,!aa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=qt(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}yf(function(){var u=i,f=ls(n),p=[];e:{var h=Qf.get(e);if(h!==void 0){var g=ds,w=e;switch(e){case"keypress":if(Po(n)===0)break e;case"keydown":case"keyup":g=cm;break;case"focusin":w="focus",g=pl;break;case"focusout":w="blur",g=pl;break;case"beforeblur":case"afterblur":g=pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=$u;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Jp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=pm;break;case Bf:case Vf:case Wf:g=tm;break;case Hf:g=vm;break;case"scroll":g=Gp;break;case"wheel":g=ym;break;case"copy":case"cut":case"paste":g=rm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Nu}var y=(t&4)!==0,C=!y&&e==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var c=u,v;c!==null;){v=c;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,m!==null&&(x=Sr(c,m),x!=null&&y.push(Pr(c,x,v)))),C)break;c=c.return}0<y.length&&(h=new g(h,w,null,n,f),p.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==ia&&(w=n.relatedTarget||n.fromElement)&&(qt(w)||w[Et]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?qt(w):null,w!==null&&(C=dn(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(y=$u,x="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Nu,x="onPointerLeave",m="onPointerEnter",c="pointer"),C=g==null?h:Cn(g),v=w==null?h:Cn(w),h=new y(x,c+"leave",g,n,f),h.target=C,h.relatedTarget=v,x=null,qt(f)===u&&(y=new y(m,c+"enter",w,n,f),y.target=v,y.relatedTarget=C,x=y),C=x,g&&w)t:{for(y=g,m=w,c=0,v=y;v;v=mn(v))c++;for(v=0,x=m;x;x=mn(x))v++;for(;0<c-v;)y=mn(y),c--;for(;0<v-c;)m=mn(m),v--;for(;c--;){if(y===m||m!==null&&y===m.alternate)break t;y=mn(y),m=mn(m)}y=null}else y=null;g!==null&&ju(p,h,g,y,!1),w!==null&&C!==null&&ju(p,C,w,y,!0)}}e:{if(h=u?Cn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=km;else if(Ou(h))if(zf)S=Pm;else{S=_m;var k=$m}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Nm);if(S&&(S=S(e,u))){Df(p,S,n,f);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&ea(h,"number",h.value)}switch(k=u?Cn(u):window,e){case"focusin":(Ou(k)||k.contentEditable==="true")&&(Sn=k,da=u,mr=null);break;case"focusout":mr=da=Sn=null;break;case"mousedown":pa=!0;break;case"contextmenu":case"mouseup":case"dragend":pa=!1,Lu(p,n,f);break;case"selectionchange":if(Rm)break;case"keydown":case"keyup":Lu(p,n,f)}var E;if(ms)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else wn?Ff(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(If&&n.locale!=="ko"&&(wn||_!=="onCompositionStart"?_==="onCompositionEnd"&&wn&&(E=Mf()):(Ft=f,fs="value"in Ft?Ft.value:Ft.textContent,wn=!0)),k=Ko(u,_),0<k.length&&(_=new _u(_,e,null,n,f),p.push({event:_,listeners:k}),E?_.data=E:(E=Lf(n),E!==null&&(_.data=E)))),(E=xm?wm(e,n):Sm(e,n))&&(u=Ko(u,"onBeforeInput"),0<u.length&&(f=new _u("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=E))}Yf(p,t)})}function Pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Sr(e,n),i!=null&&r.unshift(Pr(e,i,o)),i=Sr(e,t),i!=null&&r.push(Pr(e,i,o))),e=e.return}return r}function mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ju(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Sr(n,i),s!=null&&l.unshift(Pr(n,s,a))):o||(s=Sr(n,i),s!=null&&l.push(Pr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Lm=/\r\n?/g,Dm=/\u0000|\uFFFD/g;function Au(e){return(typeof e=="string"?e:""+e).replace(Lm,`
`).replace(Dm,"")}function lo(e,t,n){if(t=Au(t),Au(e)!==t&&n)throw Error($(425))}function Go(){}var ma=null,va=null;function ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ya=typeof setTimeout=="function"?setTimeout:void 0,zm=typeof clearTimeout=="function"?clearTimeout:void 0,bu=typeof Promise=="function"?Promise:void 0,jm=typeof queueMicrotask=="function"?queueMicrotask:typeof bu<"u"?function(e){return bu.resolve(null).then(e).catch(Am)}:ya;function Am(e){setTimeout(function(){throw e})}function Sl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);kr(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),ut="__reactFiber$"+Xn,Tr="__reactProps$"+Xn,Et="__reactContainer$"+Xn,ga="__reactEvents$"+Xn,bm="__reactListeners$"+Xn,Um="__reactHandles$"+Xn;function qt(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uu(e);e!==null;){if(n=e[ut])return n;e=Uu(e)}return t}e=n,n=e.parentNode}return null}function Hr(e){return e=e[ut]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function xi(e){return e[Tr]||null}var xa=[],kn=-1;function Xt(e){return{current:e}}function G(e){0>kn||(e.current=xa[kn],xa[kn]=null,kn--)}function X(e,t){kn++,xa[kn]=e.current,e.current=t}var Qt={},we=Xt(Qt),Pe=Xt(!1),on=Qt;function An(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Te(e){return e=e.childContextTypes,e!=null}function Zo(){G(Pe),G(we)}function Bu(e,t,n){if(we.current!==Qt)throw Error($(168));X(we,t),X(Pe,n)}function Kf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error($(108,$p(e)||"Unknown",o));return ee({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,on=we.current,X(we,e),X(Pe,Pe.current),!0}function Vu(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=Kf(e,t,on),r.__reactInternalMemoizedMergedChildContext=e,G(Pe),G(we),X(we,e)):G(Pe),X(Pe,n)}var yt=null,wi=!1,El=!1;function Gf(e){yt===null?yt=[e]:yt.push(e)}function Bm(e){wi=!0,Gf(e)}function Kt(){if(!El&&yt!==null){El=!0;var e=0,t=H;try{var n=yt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yt=null,wi=!1}catch(o){throw yt!==null&&(yt=yt.slice(e+1)),Sf(as,Kt),o}finally{H=t,El=!1}}return null}var $n=[],_n=0,qo=null,ei=0,Be=[],Ve=0,ln=null,gt=1,xt="";function Zt(e,t){$n[_n++]=ei,$n[_n++]=qo,qo=e,ei=t}function Zf(e,t,n){Be[Ve++]=gt,Be[Ve++]=xt,Be[Ve++]=ln,ln=e;var r=gt;e=xt;var o=32-tt(r)-1;r&=~(1<<o),n+=1;var i=32-tt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,gt=1<<32-tt(t)+o|n<<o|r,xt=i+e}else gt=1<<i|n<<o|r,xt=e}function hs(e){e.return!==null&&(Zt(e,1),Zf(e,1,0))}function ys(e){for(;e===qo;)qo=$n[--_n],$n[_n]=null,ei=$n[--_n],$n[_n]=null;for(;e===ln;)ln=Be[--Ve],Be[Ve]=null,xt=Be[--Ve],Be[Ve]=null,gt=Be[--Ve],Be[Ve]=null}var Le=null,Fe=null,Z=!1,qe=null;function Jf(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Fe=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:gt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Fe=null,!0):!1;default:return!1}}function wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sa(e){if(Z){var t=Fe;if(t){var n=t;if(!Wu(e,t)){if(wa(e))throw Error($(418));t=At(n.nextSibling);var r=Le;t&&Wu(e,t)?Jf(r,n):(e.flags=e.flags&-4097|2,Z=!1,Le=e)}}else{if(wa(e))throw Error($(418));e.flags=e.flags&-4097|2,Z=!1,Le=e}}}function Hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function ao(e){if(e!==Le)return!1;if(!Z)return Hu(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ha(e.type,e.memoizedProps)),t&&(t=Fe)){if(wa(e))throw qf(),Error($(418));for(;t;)Jf(e,t),t=At(t.nextSibling)}if(Hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Le?At(e.stateNode.nextSibling):null;return!0}function qf(){for(var e=Fe;e;)e=At(e.nextSibling)}function bn(){Fe=Le=null,Z=!1}function gs(e){qe===null?qe=[e]:qe.push(e)}var Vm=$t.ReactCurrentBatchConfig;function Ze(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ti=Xt(null),ni=null,Nn=null,xs=null;function ws(){xs=Nn=ni=null}function Ss(e){var t=ti.current;G(ti),e._currentValue=t}function Ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){ni=e,xs=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(xs!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(ni===null)throw Error($(308));Nn=e,ni.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var en=null;function Es(e){en===null?en=[e]:en.push(e)}function ed(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Es(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function Cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function td(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ct(e,n)}return o=r.interleaved,o===null?(t.next=t,Es(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ct(e,n)}function To(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}function Qu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ri(e,t,n,r){var o=e.updateQueue;Rt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,f=u=s=null,a=i;do{var h=a.lane,g=a.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(h=t,g=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(g,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,h=typeof w=="function"?w.call(g,p,h):w,h==null)break e;p=ee({},p,h);break e;case 2:Rt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,s=p):f=f.next=g,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(f===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);sn|=l,e.lanes=l,e.memoizedState=p}}function Yu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error($(191,o));o.call(r)}}}var nd=new qc.Component().refs;function Ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Si={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=Bt(e),i=wt(r,o);i.payload=t,n!=null&&(i.callback=n),t=bt(e,i,o),t!==null&&(nt(t,e,o,r),To(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=Bt(e),i=wt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bt(e,i,o),t!==null&&(nt(t,e,o,r),To(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=Bt(e),o=wt(n,r);o.tag=2,t!=null&&(o.callback=t),t=bt(e,o,r),t!==null&&(nt(t,e,r,n),To(t,e,r))}};function Xu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!_r(n,r)||!_r(o,i):!0}function rd(e,t,n){var r=!1,o=Qt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ye(i):(o=Te(t)?on:we.current,r=t.contextTypes,i=(r=r!=null)?An(e,o):Qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Si,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Si.enqueueReplaceState(t,t.state,null)}function ka(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=nd,Cs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ye(i):(i=Te(t)?on:we.current,o.context=An(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ca(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Si.enqueueReplaceState(o,o.state,null),ri(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===nd&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function so(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gu(e){var t=e._init;return t(e._payload)}function od(e){function t(m,c){if(e){var v=m.deletions;v===null?(m.deletions=[c],m.flags|=16):v.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function o(m,c){return m=Vt(m,c),m.index=0,m.sibling=null,m}function i(m,c,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<c?(m.flags|=2,c):v):(m.flags|=2,c)):(m.flags|=1048576,c)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,c,v,x){return c===null||c.tag!==6?(c=Tl(v,m.mode,x),c.return=m,c):(c=o(c,v),c.return=m,c)}function s(m,c,v,x){var S=v.type;return S===xn?f(m,c,v.props.children,x,v.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ot&&Gu(S)===c.type)?(x=o(c,v.props),x.ref=tr(m,c,v),x.return=m,x):(x=Lo(v.type,v.key,v.props,null,m.mode,x),x.ref=tr(m,c,v),x.return=m,x)}function u(m,c,v,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==v.containerInfo||c.stateNode.implementation!==v.implementation?(c=Ol(v,m.mode,x),c.return=m,c):(c=o(c,v.children||[]),c.return=m,c)}function f(m,c,v,x,S){return c===null||c.tag!==7?(c=rn(v,m.mode,x,S),c.return=m,c):(c=o(c,v),c.return=m,c)}function p(m,c,v){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Tl(""+c,m.mode,v),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Zr:return v=Lo(c.type,c.key,c.props,null,m.mode,v),v.ref=tr(m,null,c),v.return=m,v;case gn:return c=Ol(c,m.mode,v),c.return=m,c;case Ot:var x=c._init;return p(m,x(c._payload),v)}if(ar(c)||Gn(c))return c=rn(c,m.mode,v,null),c.return=m,c;so(m,c)}return null}function h(m,c,v,x){var S=c!==null?c.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(m,c,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zr:return v.key===S?s(m,c,v,x):null;case gn:return v.key===S?u(m,c,v,x):null;case Ot:return S=v._init,h(m,c,S(v._payload),x)}if(ar(v)||Gn(v))return S!==null?null:f(m,c,v,x,null);so(m,v)}return null}function g(m,c,v,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(v)||null,a(c,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zr:return m=m.get(x.key===null?v:x.key)||null,s(c,m,x,S);case gn:return m=m.get(x.key===null?v:x.key)||null,u(c,m,x,S);case Ot:var k=x._init;return g(m,c,v,k(x._payload),S)}if(ar(x)||Gn(x))return m=m.get(v)||null,f(c,m,x,S,null);so(c,x)}return null}function w(m,c,v,x){for(var S=null,k=null,E=c,_=c=0,D=null;E!==null&&_<v.length;_++){E.index>_?(D=E,E=null):D=E.sibling;var T=h(m,E,v[_],x);if(T===null){E===null&&(E=D);break}e&&E&&T.alternate===null&&t(m,E),c=i(T,c,_),k===null?S=T:k.sibling=T,k=T,E=D}if(_===v.length)return n(m,E),Z&&Zt(m,_),S;if(E===null){for(;_<v.length;_++)E=p(m,v[_],x),E!==null&&(c=i(E,c,_),k===null?S=E:k.sibling=E,k=E);return Z&&Zt(m,_),S}for(E=r(m,E);_<v.length;_++)D=g(E,m,_,v[_],x),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?_:D.key),c=i(D,c,_),k===null?S=D:k.sibling=D,k=D);return e&&E.forEach(function(I){return t(m,I)}),Z&&Zt(m,_),S}function y(m,c,v,x){var S=Gn(v);if(typeof S!="function")throw Error($(150));if(v=S.call(v),v==null)throw Error($(151));for(var k=S=null,E=c,_=c=0,D=null,T=v.next();E!==null&&!T.done;_++,T=v.next()){E.index>_?(D=E,E=null):D=E.sibling;var I=h(m,E,T.value,x);if(I===null){E===null&&(E=D);break}e&&E&&I.alternate===null&&t(m,E),c=i(I,c,_),k===null?S=I:k.sibling=I,k=I,E=D}if(T.done)return n(m,E),Z&&Zt(m,_),S;if(E===null){for(;!T.done;_++,T=v.next())T=p(m,T.value,x),T!==null&&(c=i(T,c,_),k===null?S=T:k.sibling=T,k=T);return Z&&Zt(m,_),S}for(E=r(m,E);!T.done;_++,T=v.next())T=g(E,m,_,T.value,x),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?_:T.key),c=i(T,c,_),k===null?S=T:k.sibling=T,k=T);return e&&E.forEach(function(L){return t(m,L)}),Z&&Zt(m,_),S}function C(m,c,v,x){if(typeof v=="object"&&v!==null&&v.type===xn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Zr:e:{for(var S=v.key,k=c;k!==null;){if(k.key===S){if(S=v.type,S===xn){if(k.tag===7){n(m,k.sibling),c=o(k,v.props.children),c.return=m,m=c;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ot&&Gu(S)===k.type){n(m,k.sibling),c=o(k,v.props),c.ref=tr(m,k,v),c.return=m,m=c;break e}n(m,k);break}else t(m,k);k=k.sibling}v.type===xn?(c=rn(v.props.children,m.mode,x,v.key),c.return=m,m=c):(x=Lo(v.type,v.key,v.props,null,m.mode,x),x.ref=tr(m,c,v),x.return=m,m=x)}return l(m);case gn:e:{for(k=v.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===v.containerInfo&&c.stateNode.implementation===v.implementation){n(m,c.sibling),c=o(c,v.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=Ol(v,m.mode,x),c.return=m,m=c}return l(m);case Ot:return k=v._init,C(m,c,k(v._payload),x)}if(ar(v))return w(m,c,v,x);if(Gn(v))return y(m,c,v,x);so(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,c!==null&&c.tag===6?(n(m,c.sibling),c=o(c,v),c.return=m,m=c):(n(m,c),c=Tl(v,m.mode,x),c.return=m,m=c),l(m)):n(m,c)}return C}var Un=od(!0),id=od(!1),Qr={},pt=Xt(Qr),Or=Xt(Qr),Rr=Xt(Qr);function tn(e){if(e===Qr)throw Error($(174));return e}function ks(e,t){switch(X(Rr,t),X(Or,e),X(pt,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:na(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=na(t,e)}G(pt),X(pt,t)}function Bn(){G(pt),G(Or),G(Rr)}function ld(e){tn(Rr.current);var t=tn(pt.current),n=na(t,e.type);t!==n&&(X(Or,e),X(pt,n))}function $s(e){Or.current===e&&(G(pt),G(Or))}var J=Xt(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cl=[];function _s(){for(var e=0;e<Cl.length;e++)Cl[e]._workInProgressVersionPrimary=null;Cl.length=0}var Oo=$t.ReactCurrentDispatcher,kl=$t.ReactCurrentBatchConfig,an=0,q=null,ie=null,ue=null,ii=!1,vr=!1,Mr=0,Wm=0;function he(){throw Error($(321))}function Ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Ps(e,t,n,r,o,i){if(an=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?Xm:Km,e=n(r,o),vr){i=0;do{if(vr=!1,Mr=0,25<=i)throw Error($(301));i+=1,ue=ie=null,t.updateQueue=null,Oo.current=Gm,e=n(r,o)}while(vr)}if(Oo.current=li,t=ie!==null&&ie.next!==null,an=0,ue=ie=q=null,ii=!1,t)throw Error($(300));return e}function Ts(){var e=Mr!==0;return Mr=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?q.memoizedState=ue=e:ue=ue.next=e,ue}function Xe(){if(ie===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ue===null?q.memoizedState:ue.next;if(t!==null)ue=t,ie=e;else{if(e===null)throw Error($(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ue===null?q.memoizedState=ue=e:ue=ue.next=e}return ue}function Ir(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Xe(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var f=u.lane;if((an&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,q.lanes|=f,sn|=f}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,rt(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,sn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _l(e){var t=Xe(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);rt(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ad(){}function sd(e,t){var n=q,r=Xe(),o=t(),i=!rt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ne=!0),r=r.queue,Os(fd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Fr(9,cd.bind(null,n,r,o,t),void 0,null),ce===null)throw Error($(349));an&30||ud(n,t,o)}return o}function ud(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cd(e,t,n,r){t.value=n,t.getSnapshot=r,dd(t)&&pd(e)}function fd(e,t,n){return n(function(){dd(t)&&pd(e)})}function dd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function pd(e){var t=Ct(e,1);t!==null&&nt(t,e,1,-1)}function Zu(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},t.queue=e,e=e.dispatch=Ym.bind(null,q,e),[t.memoizedState,e]}function Fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function md(){return Xe().memoizedState}function Ro(e,t,n,r){var o=lt();q.flags|=e,o.memoizedState=Fr(1|t,n,void 0,r===void 0?null:r)}function Ei(e,t,n,r){var o=Xe();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&Ns(r,l.deps)){o.memoizedState=Fr(t,n,i,r);return}}q.flags|=e,o.memoizedState=Fr(1|t,n,i,r)}function Ju(e,t){return Ro(8390656,8,e,t)}function Os(e,t){return Ei(2048,8,e,t)}function vd(e,t){return Ei(4,2,e,t)}function hd(e,t){return Ei(4,4,e,t)}function yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gd(e,t,n){return n=n!=null?n.concat([e]):null,Ei(4,4,yd.bind(null,t,e),n)}function Rs(){}function xd(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ns(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wd(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ns(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sd(e,t,n){return an&21?(rt(n,t)||(n=kf(),q.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function Hm(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=kl.transition;kl.transition={};try{e(!1),t()}finally{H=n,kl.transition=r}}function Ed(){return Xe().memoizedState}function Qm(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cd(e))kd(t,n);else if(n=ed(e,t,n,r),n!==null){var o=Ee();nt(n,e,r,o),$d(n,t,r)}}function Ym(e,t,n){var r=Bt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cd(e))kd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,rt(a,l)){var s=t.interleaved;s===null?(o.next=o,Es(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=ed(e,t,o,r),n!==null&&(o=Ee(),nt(n,e,r,o),$d(n,t,r))}}function Cd(e){var t=e.alternate;return e===q||t!==null&&t===q}function kd(e,t){vr=ii=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $d(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}var li={readContext:Ye,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Xm={readContext:Ye,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4194308,4,yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qm.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:Zu,useDebugValue:Rs,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=Zu(!1),t=e[0];return e=Hm.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=lt();if(Z){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),ce===null)throw Error($(349));an&30||ud(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ju(fd.bind(null,r,i,e),[e]),r.flags|=2048,Fr(9,cd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=lt(),t=ce.identifierPrefix;if(Z){var n=xt,r=gt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Km={readContext:Ye,useCallback:xd,useContext:Ye,useEffect:Os,useImperativeHandle:gd,useInsertionEffect:vd,useLayoutEffect:hd,useMemo:wd,useReducer:$l,useRef:md,useState:function(){return $l(Ir)},useDebugValue:Rs,useDeferredValue:function(e){var t=Xe();return Sd(t,ie.memoizedState,e)},useTransition:function(){var e=$l(Ir)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:sd,useId:Ed,unstable_isNewReconciler:!1},Gm={readContext:Ye,useCallback:xd,useContext:Ye,useEffect:Os,useImperativeHandle:gd,useInsertionEffect:vd,useLayoutEffect:hd,useMemo:wd,useReducer:_l,useRef:md,useState:function(){return _l(Ir)},useDebugValue:Rs,useDeferredValue:function(e){var t=Xe();return ie===null?t.memoizedState=e:Sd(t,ie.memoizedState,e)},useTransition:function(){var e=_l(Ir)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:sd,useId:Ed,unstable_isNewReconciler:!1};function Vn(e,t){try{var n="",r=t;do n+=kp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Nl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $a(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zm=typeof WeakMap=="function"?WeakMap:Map;function _d(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){si||(si=!0,La=r),$a(e,t)},n}function Nd(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){$a(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){$a(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=fv.bind(null,e,t,n),t.then(e,e))}function ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,bt(n,t,1))),n.lanes|=1),e)}var Jm=$t.ReactCurrentOwner,Ne=!1;function Se(e,t,n,r){t.child=e===null?id(t,null,n,r):Un(t,e.child,n,r)}function nc(e,t,n,r,o){n=n.render;var i=t.ref;return Fn(t,o),r=Ps(e,t,n,r,i,o),n=Ts(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kt(e,t,o)):(Z&&n&&hs(t),t.flags|=1,Se(e,t,r,o),t.child)}function rc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!As(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Pd(e,t,i,r,o)):(e=Lo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:_r,n(l,r)&&e.ref===t.ref)return kt(e,t,o)}return t.flags|=1,e=Vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(_r(i,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,kt(e,t,o)}return _a(e,t,n,r,o)}function Td(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Tn,Ie),Ie|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Tn,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(Tn,Ie),Ie|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(Tn,Ie),Ie|=r;return Se(e,t,o,n),t.child}function Od(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _a(e,t,n,r,o){var i=Te(n)?on:we.current;return i=An(t,i),Fn(t,o),n=Ps(e,t,n,r,i,o),r=Ts(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kt(e,t,o)):(Z&&r&&hs(t),t.flags|=1,Se(e,t,n,o),t.child)}function oc(e,t,n,r,o){if(Te(n)){var i=!0;Jo(t)}else i=!1;if(Fn(t,o),t.stateNode===null)Mo(e,t),rd(t,n,r),ka(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Te(n)?on:we.current,u=An(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Ku(t,l,r,u),Rt=!1;var h=t.memoizedState;l.state=h,ri(t,r,l,o),s=t.memoizedState,a!==r||h!==s||Pe.current||Rt?(typeof f=="function"&&(Ca(t,n,f,r),s=t.memoizedState),(a=Rt||Xu(t,n,a,r,h,s,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,td(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ze(t.type,a),l.props=u,p=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ye(s):(s=Te(n)?on:we.current,s=An(t,s));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||h!==s)&&Ku(t,l,r,s),Rt=!1,h=t.memoizedState,l.state=h,ri(t,r,l,o);var w=t.memoizedState;a!==p||h!==w||Pe.current||Rt?(typeof g=="function"&&(Ca(t,n,g,r),w=t.memoizedState),(u=Rt||Xu(t,n,u,r,h,w,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Na(e,t,n,r,i,o)}function Na(e,t,n,r,o,i){Od(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Vu(t,n,!1),kt(e,t,i);r=t.stateNode,Jm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Un(t,e.child,null,i),t.child=Un(t,null,a,i)):Se(e,t,a,i),t.memoizedState=r.state,o&&Vu(t,n,!0),t.child}function Rd(e){var t=e.stateNode;t.pendingContext?Bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bu(e,t.context,!1),ks(e,t.containerInfo)}function ic(e,t,n,r,o){return bn(),gs(o),t.flags|=256,Se(e,t,n,r),t.child}var Pa={dehydrated:null,treeContext:null,retryLane:0};function Ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function Md(e,t,n){var r=t.pendingProps,o=J.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(J,o&1),e===null)return Sa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=$i(l,r,0,null),e=rn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ta(n),t.memoizedState=Pa,e):Ms(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return qm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Vt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Vt(a,i):(i=rn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ta(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Pa,r}return i=e.child,e=i.sibling,r=Vt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ms(e,t){return t=$i({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function uo(e,t,n,r){return r!==null&&gs(r),Un(t,e.child,null,n),e=Ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Nl(Error($(422))),uo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=$i({mode:"visible",children:r.children},o,0,null),i=rn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Un(t,e.child,null,l),t.child.memoizedState=Ta(l),t.memoizedState=Pa,i);if(!(t.mode&1))return uo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error($(419)),r=Nl(i,r,void 0),uo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ne||a){if(r=ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ct(e,o),nt(r,e,o,-1))}return js(),r=Nl(Error($(421))),uo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=dv.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Fe=At(o.nextSibling),Le=t,Z=!0,qe=null,e!==null&&(Be[Ve++]=gt,Be[Ve++]=xt,Be[Ve++]=ln,gt=e.id,xt=e.overflow,ln=t),t=Ms(t,r.children),t.flags|=4096,t)}function lc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ea(e.return,t,n)}function Pl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Id(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Se(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lc(e,n,t);else if(e.tag===19)lc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&oi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Pl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&oi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Pl(t,!0,n,null,i);break;case"together":Pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ev(e,t,n){switch(t.tag){case 3:Rd(t),bn();break;case 5:ld(t);break;case 1:Te(t.type)&&Jo(t);break;case 4:ks(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(ti,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Md(e,t,n):(X(J,J.current&1),e=kt(e,t,n),e!==null?e.sibling:null);X(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Id(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Td(e,t,n)}return kt(e,t,n)}var Fd,Oa,Ld,Dd;Fd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oa=function(){};Ld=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,tn(pt.current);var i=null;switch(n){case"input":o=Jl(e,o),r=Jl(e,r),i=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),i=[];break;case"textarea":o=ta(e,o),r=ta(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Go)}ra(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&K("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Dd=function(e,t,n,r){n!==r&&(t.flags|=4)};function nr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tv(e,t,n){var r=t.pendingProps;switch(ys(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Te(t.type)&&Zo(),ye(t),null;case 3:return r=t.stateNode,Bn(),G(Pe),G(we),_s(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(ja(qe),qe=null))),Oa(e,t),ye(t),null;case 5:$s(t);var o=tn(Rr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ld(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return ye(t),null}if(e=tn(pt.current),ao(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ut]=t,r[Tr]=i,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(o=0;o<ur.length;o++)K(ur[o],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":vu(r,i),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},K("invalid",r);break;case"textarea":yu(r,i),K("invalid",r)}ra(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&lo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&lo(r.textContent,a,e),o=["children",""+a]):xr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&K("scroll",r)}switch(n){case"input":Jr(r),hu(r,i,!0);break;case"textarea":Jr(r),gu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Go)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ut]=t,e[Tr]=r,Fd(e,t,!1,!1),t.stateNode=e;e:{switch(l=oa(n,r),n){case"dialog":K("cancel",e),K("close",e),o=r;break;case"iframe":case"object":case"embed":K("load",e),o=r;break;case"video":case"audio":for(o=0;o<ur.length;o++)K(ur[o],e);o=r;break;case"source":K("error",e),o=r;break;case"img":case"image":case"link":K("error",e),K("load",e),o=r;break;case"details":K("toggle",e),o=r;break;case"input":vu(e,r),o=Jl(e,r),K("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),K("invalid",e);break;case"textarea":yu(e,r),o=ta(e,r),K("invalid",e);break;default:o=r}ra(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?df(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&cf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&wr(e,s):typeof s=="number"&&wr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(xr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&K("scroll",e):s!=null&&ns(e,i,s,l))}switch(n){case"input":Jr(e),hu(e,r,!1);break;case"textarea":Jr(e),gu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?On(e,!!r.multiple,i,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)Dd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=tn(Rr.current),tn(pt.current),ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[ut]=t,(i=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=t,t.stateNode=r}return ye(t),null;case 13:if(G(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Fe!==null&&t.mode&1&&!(t.flags&128))qf(),bn(),t.flags|=98560,i=!1;else if(i=ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error($(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[ut]=t}else bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),i=!1}else qe!==null&&(ja(qe),qe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?le===0&&(le=3):js())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return Bn(),Oa(e,t),e===null&&Nr(t.stateNode.containerInfo),ye(t),null;case 10:return Ss(t.type._context),ye(t),null;case 17:return Te(t.type)&&Zo(),ye(t),null;case 19:if(G(J),i=t.memoizedState,i===null)return ye(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)nr(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=oi(e),l!==null){for(t.flags|=128,nr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>Wn&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304)}else{if(!r)if(e=oi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return ye(t),null}else 2*ne()-i.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=J.current,X(J,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return zs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ie&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function nv(e,t){switch(ys(t),t.tag){case 1:return Te(t.type)&&Zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),G(Pe),G(we),_s(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $s(t),null;case 13:if(G(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(J),null;case 4:return Bn(),null;case 10:return Ss(t.type._context),null;case 22:case 23:return zs(),null;case 24:return null;default:return null}}var co=!1,xe=!1,rv=typeof WeakSet=="function"?WeakSet:Set,M=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Ra(e,t,n){try{n()}catch(r){te(e,t,r)}}var ac=!1;function ov(e,t){if(ma=Yo,e=bf(),vs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,p=e,h=null;t:for(;;){for(var g;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===e)break t;if(h===n&&++u===o&&(a=l),h===i&&++f===r&&(s=l),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(va={focusedElem:e,selectionRange:n},Yo=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,C=w.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ze(t.type,y),C);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(x){te(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return w=ac,ac=!1,w}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ra(t,n,i)}o=o.next}while(o!==r)}}function Ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ma(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zd(e){var t=e.alternate;t!==null&&(e.alternate=null,zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ut],delete t[Tr],delete t[ga],delete t[bm],delete t[Um])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jd(e){return e.tag===5||e.tag===3||e.tag===4}function sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Go));else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}function Fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fa(e,t,n),e=e.sibling;e!==null;)Fa(e,t,n),e=e.sibling}var de=null,Je=!1;function Pt(e,t,n){for(n=n.child;n!==null;)Ad(e,t,n),n=n.sibling}function Ad(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(vi,n)}catch{}switch(n.tag){case 5:xe||Pn(n,t);case 6:var r=de,o=Je;de=null,Pt(e,t,n),de=r,Je=o,de!==null&&(Je?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Je?(e=de,n=n.stateNode,e.nodeType===8?Sl(e.parentNode,n):e.nodeType===1&&Sl(e,n),kr(e)):Sl(de,n.stateNode));break;case 4:r=de,o=Je,de=n.stateNode.containerInfo,Je=!0,Pt(e,t,n),de=r,Je=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ra(n,t,l),o=o.next}while(o!==r)}Pt(e,t,n);break;case 1:if(!xe&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,t,a)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Pt(e,t,n),xe=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rv),t.forEach(function(r){var o=pv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,Je=!1;break e;case 3:de=a.stateNode.containerInfo,Je=!0;break e;case 4:de=a.stateNode.containerInfo,Je=!0;break e}a=a.return}if(de===null)throw Error($(160));Ad(i,l,o),de=null,Je=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bd(t,e),t=t.sibling}function bd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),it(e),r&4){try{hr(3,e,e.return),Ci(3,e)}catch(y){te(e,e.return,y)}try{hr(5,e,e.return)}catch(y){te(e,e.return,y)}}break;case 1:Ge(t,e),it(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(Ge(t,e),it(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var o=e.stateNode;try{wr(o,"")}catch(y){te(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&af(o,i),oa(a,l);var u=oa(a,i);for(l=0;l<s.length;l+=2){var f=s[l],p=s[l+1];f==="style"?df(o,p):f==="dangerouslySetInnerHTML"?cf(o,p):f==="children"?wr(o,p):ns(o,f,p,u)}switch(a){case"input":ql(o,i);break;case"textarea":sf(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?On(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?On(o,!!i.multiple,i.defaultValue,!0):On(o,!!i.multiple,i.multiple?[]:"",!1))}o[Tr]=i}catch(y){te(e,e.return,y)}}break;case 6:if(Ge(t,e),it(e),r&4){if(e.stateNode===null)throw Error($(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){te(e,e.return,y)}}break;case 3:if(Ge(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{kr(t.containerInfo)}catch(y){te(e,e.return,y)}break;case 4:Ge(t,e),it(e);break;case 13:Ge(t,e),it(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ls=ne())),r&4&&uc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||f,Ge(t,e),xe=u):Ge(t,e),it(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(M=e,f=e.child;f!==null;){for(p=M=f;M!==null;){switch(h=M,g=h.child,h.tag){case 0:case 11:case 14:case 15:hr(4,h,h.return);break;case 1:Pn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:Pn(h,h.return);break;case 22:if(h.memoizedState!==null){fc(p);continue}}g!==null?(g.return=h,M=g):fc(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ff("display",l))}catch(y){te(e,e.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){te(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ge(t,e),it(e),r&4&&uc(e);break;case 21:break;default:Ge(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jd(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(wr(o,""),r.flags&=-33);var i=sc(e);Fa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=sc(e);Ia(e,a,l);break;default:throw Error($(161))}}catch(s){te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function iv(e,t,n){M=e,Ud(e)}function Ud(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||co;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||xe;a=co;var u=xe;if(co=l,(xe=s)&&!u)for(M=o;M!==null;)l=M,s=l.child,l.tag===22&&l.memoizedState!==null?dc(o):s!==null?(s.return=l,M=s):dc(o);for(;i!==null;)M=i,Ud(i),i=i.sibling;M=o,co=a,xe=u}cc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):cc(e)}}function cc(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||Ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ze(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Yu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&kr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}xe||t.flags&512&&Ma(t)}catch(h){te(t,t.return,h)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function fc(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function dc(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ci(4,t)}catch(s){te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){te(t,o,s)}}var i=t.return;try{Ma(t)}catch(s){te(t,i,s)}break;case 5:var l=t.return;try{Ma(t)}catch(s){te(t,l,s)}}}catch(s){te(t,t.return,s)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var lv=Math.ceil,ai=$t.ReactCurrentDispatcher,Is=$t.ReactCurrentOwner,He=$t.ReactCurrentBatchConfig,b=0,ce=null,oe=null,me=0,Ie=0,Tn=Xt(0),le=0,Lr=null,sn=0,ki=0,Fs=0,yr=null,_e=null,Ls=0,Wn=1/0,ht=null,si=!1,La=null,Ut=null,fo=!1,Lt=null,ui=0,gr=0,Da=null,Io=-1,Fo=0;function Ee(){return b&6?ne():Io!==-1?Io:Io=ne()}function Bt(e){return e.mode&1?b&2&&me!==0?me&-me:Vm.transition!==null?(Fo===0&&(Fo=kf()),Fo):(e=H,e!==0||(e=window.event,e=e===void 0?16:Rf(e.type)),e):1}function nt(e,t,n,r){if(50<gr)throw gr=0,Da=null,Error($(185));Vr(e,n,r),(!(b&2)||e!==ce)&&(e===ce&&(!(b&2)&&(ki|=n),le===4&&It(e,me)),Oe(e,r),n===1&&b===0&&!(t.mode&1)&&(Wn=ne()+500,wi&&Kt()))}function Oe(e,t){var n=e.callbackNode;Vp(e,t);var r=Qo(e,e===ce?me:0);if(r===0)n!==null&&Su(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Su(n),t===1)e.tag===0?Bm(pc.bind(null,e)):Gf(pc.bind(null,e)),jm(function(){!(b&6)&&Kt()}),n=null;else{switch($f(r)){case 1:n=as;break;case 4:n=Ef;break;case 16:n=Ho;break;case 536870912:n=Cf;break;default:n=Ho}n=Kd(n,Bd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bd(e,t){if(Io=-1,Fo=0,b&6)throw Error($(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var r=Qo(e,e===ce?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ci(e,r);else{t=r;var o=b;b|=2;var i=Wd();(ce!==e||me!==t)&&(ht=null,Wn=ne()+500,nn(e,t));do try{uv();break}catch(a){Vd(e,a)}while(!0);ws(),ai.current=i,b=o,oe!==null?t=0:(ce=null,me=0,t=le)}if(t!==0){if(t===2&&(o=ua(e),o!==0&&(r=o,t=za(e,o))),t===1)throw n=Lr,nn(e,0),It(e,r),Oe(e,ne()),n;if(t===6)It(e,r);else{if(o=e.current.alternate,!(r&30)&&!av(o)&&(t=ci(e,r),t===2&&(i=ua(e),i!==0&&(r=i,t=za(e,i))),t===1))throw n=Lr,nn(e,0),It(e,r),Oe(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:Jt(e,_e,ht);break;case 3:if(It(e,r),(r&130023424)===r&&(t=Ls+500-ne(),10<t)){if(Qo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ya(Jt.bind(null,e,_e,ht),t);break}Jt(e,_e,ht);break;case 4:if(It(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-tt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lv(r/1960))-r,10<r){e.timeoutHandle=ya(Jt.bind(null,e,_e,ht),r);break}Jt(e,_e,ht);break;case 5:Jt(e,_e,ht);break;default:throw Error($(329))}}}return Oe(e,ne()),e.callbackNode===n?Bd.bind(null,e):null}function za(e,t){var n=yr;return e.current.memoizedState.isDehydrated&&(nn(e,t).flags|=256),e=ci(e,t),e!==2&&(t=_e,_e=n,t!==null&&ja(t)),e}function ja(e){_e===null?_e=e:_e.push.apply(_e,e)}function av(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!rt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~Fs,t&=~ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function pc(e){if(b&6)throw Error($(327));Ln();var t=Qo(e,0);if(!(t&1))return Oe(e,ne()),null;var n=ci(e,t);if(e.tag!==0&&n===2){var r=ua(e);r!==0&&(t=r,n=za(e,r))}if(n===1)throw n=Lr,nn(e,0),It(e,t),Oe(e,ne()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,_e,ht),Oe(e,ne()),null}function Ds(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(Wn=ne()+500,wi&&Kt())}}function un(e){Lt!==null&&Lt.tag===0&&!(b&6)&&Ln();var t=b;b|=1;var n=He.transition,r=H;try{if(He.transition=null,H=1,e)return e()}finally{H=r,He.transition=n,b=t,!(b&6)&&Kt()}}function zs(){Ie=Tn.current,G(Tn)}function nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zm(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(ys(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zo();break;case 3:Bn(),G(Pe),G(we),_s();break;case 5:$s(r);break;case 4:Bn();break;case 13:G(J);break;case 19:G(J);break;case 10:Ss(r.type._context);break;case 22:case 23:zs()}n=n.return}if(ce=e,oe=e=Vt(e.current,null),me=Ie=t,le=0,Lr=null,Fs=ki=sn=0,_e=yr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}en=null}return e}function Vd(e,t){do{var n=oe;try{if(ws(),Oo.current=li,ii){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ii=!1}if(an=0,ue=ie=q=null,vr=!1,Mr=0,Is.current=null,n===null||n.return===null){le=1,Lr=t,oe=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=me,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=ec(l);if(g!==null){g.flags&=-257,tc(g,l,a,i,t),g.mode&1&&qu(i,u,t),t=g,s=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(s),t.updateQueue=y}else w.add(s);break e}else{if(!(t&1)){qu(i,u,t),js();break e}s=Error($(426))}}else if(Z&&a.mode&1){var C=ec(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),tc(C,l,a,i,t),gs(Vn(s,a));break e}}i=s=Vn(s,a),le!==4&&(le=2),yr===null?yr=[i]:yr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=_d(i,s,t);Qu(i,m);break e;case 1:a=s;var c=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ut===null||!Ut.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Nd(i,a,t);Qu(i,x);break e}}i=i.return}while(i!==null)}Qd(n)}catch(S){t=S,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Wd(){var e=ai.current;return ai.current=li,e===null?li:e}function js(){(le===0||le===3||le===2)&&(le=4),ce===null||!(sn&268435455)&&!(ki&268435455)||It(ce,me)}function ci(e,t){var n=b;b|=2;var r=Wd();(ce!==e||me!==t)&&(ht=null,nn(e,t));do try{sv();break}catch(o){Vd(e,o)}while(!0);if(ws(),b=n,ai.current=r,oe!==null)throw Error($(261));return ce=null,me=0,le}function sv(){for(;oe!==null;)Hd(oe)}function uv(){for(;oe!==null&&!Fp();)Hd(oe)}function Hd(e){var t=Xd(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?Qd(e):oe=t,Is.current=null}function Qd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=nv(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(n=tv(n,t,Ie),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function Jt(e,t,n){var r=H,o=He.transition;try{He.transition=null,H=1,cv(e,t,n,r)}finally{He.transition=o,H=r}return null}function cv(e,t,n,r){do Ln();while(Lt!==null);if(b&6)throw Error($(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Wp(e,i),e===ce&&(oe=ce=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,Kd(Ho,function(){return Ln(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=He.transition,He.transition=null;var l=H;H=1;var a=b;b|=4,Is.current=null,ov(e,n),bd(n,e),Om(va),Yo=!!ma,va=ma=null,e.current=n,iv(n),Lp(),b=a,H=l,He.transition=i}else e.current=n;if(fo&&(fo=!1,Lt=e,ui=o),i=e.pendingLanes,i===0&&(Ut=null),jp(n.stateNode),Oe(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(si)throw si=!1,e=La,La=null,e;return ui&1&&e.tag!==0&&Ln(),i=e.pendingLanes,i&1?e===Da?gr++:(gr=0,Da=e):gr=0,Kt(),null}function Ln(){if(Lt!==null){var e=$f(ui),t=He.transition,n=H;try{if(He.transition=null,H=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,ui=0,b&6)throw Error($(331));var o=b;for(b|=4,M=e.current;M!==null;){var i=M,l=i.child;if(M.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(M=u;M!==null;){var f=M;switch(f.tag){case 0:case 11:case 15:hr(8,f,i)}var p=f.child;if(p!==null)p.return=f,M=p;else for(;M!==null;){f=M;var h=f.sibling,g=f.return;if(zd(f),f===u){M=null;break}if(h!==null){h.return=g,M=h;break}M=g}}}var w=i.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}M=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,M=l;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:hr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,M=m;break e}M=i.return}}var c=e.current;for(M=c;M!==null;){l=M;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,M=v;else e:for(l=c;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ci(9,a)}}catch(S){te(a,a.return,S)}if(a===l){M=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,M=x;break e}M=a.return}}if(b=o,Kt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{H=n,He.transition=t}}return!1}function mc(e,t,n){t=Vn(n,t),t=_d(e,t,1),e=bt(e,t,1),t=Ee(),e!==null&&(Vr(e,1,t),Oe(e,t))}function te(e,t,n){if(e.tag===3)mc(e,e,n);else for(;t!==null;){if(t.tag===3){mc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Vn(n,e),e=Nd(t,e,1),t=bt(t,e,1),e=Ee(),t!==null&&(Vr(t,1,e),Oe(t,e));break}}t=t.return}}function fv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(me&n)===n&&(le===4||le===3&&(me&130023424)===me&&500>ne()-Ls?nn(e,0):Fs|=n),Oe(e,t)}function Yd(e,t){t===0&&(e.mode&1?(t=to,to<<=1,!(to&130023424)&&(to=4194304)):t=1);var n=Ee();e=Ct(e,t),e!==null&&(Vr(e,t,n),Oe(e,n))}function dv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yd(e,n)}function pv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),Yd(e,n)}var Xd;Xd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,ev(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,Z&&t.flags&1048576&&Zf(t,ei,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mo(e,t),e=t.pendingProps;var o=An(t,we.current);Fn(t,n),o=Ps(null,t,r,e,o,n);var i=Ts();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(i=!0,Jo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Cs(t),o.updater=Si,t.stateNode=o,o._reactInternals=t,ka(t,r,e,n),t=Na(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&hs(t),Se(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=vv(r),e=Ze(r,e),o){case 0:t=_a(null,t,r,e,n);break e;case 1:t=oc(null,t,r,e,n);break e;case 11:t=nc(null,t,r,e,n);break e;case 14:t=rc(null,t,r,Ze(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),_a(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),oc(e,t,r,o,n);case 3:e:{if(Rd(t),e===null)throw Error($(387));r=t.pendingProps,i=t.memoizedState,o=i.element,td(e,t),ri(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Vn(Error($(423)),t),t=ic(e,t,r,n,o);break e}else if(r!==o){o=Vn(Error($(424)),t),t=ic(e,t,r,n,o);break e}else for(Fe=At(t.stateNode.containerInfo.firstChild),Le=t,Z=!0,qe=null,n=id(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bn(),r===o){t=kt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return ld(t),e===null&&Sa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ha(r,o)?l=null:i!==null&&ha(r,i)&&(t.flags|=32),Od(e,t),Se(e,t,l,n),t.child;case 6:return e===null&&Sa(t),null;case 13:return Md(e,t,n);case 4:return ks(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),nc(e,t,r,o,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,X(ti,r._currentValue),r._currentValue=l,i!==null)if(rt(i.value,l)){if(i.children===o.children&&!Pe.current){t=kt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=wt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ea(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error($(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ea(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Fn(t,n),o=Ye(o),r=r(o),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,o=Ze(r,t.pendingProps),o=Ze(r.type,o),rc(e,t,r,o,n);case 15:return Pd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),Mo(e,t),t.tag=1,Te(r)?(e=!0,Jo(t)):e=!1,Fn(t,n),rd(t,r,o),ka(t,r,o,n),Na(null,t,r,!0,e,n);case 19:return Id(e,t,n);case 22:return Td(e,t,n)}throw Error($(156,t.tag))};function Kd(e,t){return Sf(e,t)}function mv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new mv(e,t,n,r)}function As(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vv(e){if(typeof e=="function")return As(e)?1:0;if(e!=null){if(e=e.$$typeof,e===os)return 11;if(e===is)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")As(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case xn:return rn(n.children,o,i,t);case rs:l=8,o|=8;break;case Xl:return e=We(12,n,t,o|2),e.elementType=Xl,e.lanes=i,e;case Kl:return e=We(13,n,t,o),e.elementType=Kl,e.lanes=i,e;case Gl:return e=We(19,n,t,o),e.elementType=Gl,e.lanes=i,e;case rf:return $i(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tf:l=10;break e;case nf:l=9;break e;case os:l=11;break e;case is:l=14;break e;case Ot:l=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=We(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function rn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function $i(e,t,n,r){return e=We(22,e,r,t),e.elementType=rf,e.lanes=n,e.stateNode={isHidden:!1},e}function Tl(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Ol(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function bs(e,t,n,r,o,i,l,a,s){return e=new hv(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=We(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cs(i),e}function yv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gd(e){if(!e)return Qt;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Te(n))return Kf(e,n,t)}return t}function Zd(e,t,n,r,o,i,l,a,s){return e=bs(n,r,!0,e,o,i,l,a,s),e.context=Gd(null),n=e.current,r=Ee(),o=Bt(n),i=wt(r,o),i.callback=t??null,bt(n,i,o),e.current.lanes=o,Vr(e,o,r),Oe(e,r),e}function _i(e,t,n,r){var o=t.current,i=Ee(),l=Bt(o);return n=Gd(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bt(o,t,l),e!==null&&(nt(e,o,l,i),To(e,o,l)),l}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Us(e,t){vc(e,t),(e=e.alternate)&&vc(e,t)}function gv(){return null}var Jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bs(e){this._internalRoot=e}Ni.prototype.render=Bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));_i(e,t,null,null)};Ni.prototype.unmount=Bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){_i(null,e,null,null)}),t[Et]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&Of(e)}};function Vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hc(){}function xv(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=fi(l);i.call(u)}}var l=Zd(t,r,e,0,null,!1,!1,"",hc);return e._reactRootContainer=l,e[Et]=l.current,Nr(e.nodeType===8?e.parentNode:e),un(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=fi(s);a.call(u)}}var s=bs(e,0,!1,null,null,!1,!1,"",hc);return e._reactRootContainer=s,e[Et]=s.current,Nr(e.nodeType===8?e.parentNode:e),un(function(){_i(t,s,n,r)}),s}function Ti(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=fi(l);a.call(s)}}_i(t,l,e,o)}else l=xv(n,t,e,o,r);return fi(l)}_f=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(ss(t,n|1),Oe(t,ne()),!(b&6)&&(Wn=ne()+500,Kt()))}break;case 13:un(function(){var r=Ct(e,1);if(r!==null){var o=Ee();nt(r,e,1,o)}}),Us(e,1)}};us=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Ee();nt(t,e,134217728,n)}Us(e,134217728)}};Nf=function(e){if(e.tag===13){var t=Bt(e),n=Ct(e,t);if(n!==null){var r=Ee();nt(n,e,t,r)}Us(e,t)}};Pf=function(){return H};Tf=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};la=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=xi(r);if(!o)throw Error($(90));lf(r),ql(r,o)}}}break;case"textarea":sf(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};vf=Ds;hf=un;var wv={usingClientEntryPoint:!1,Events:[Hr,Cn,xi,pf,mf,Ds]},rr={findFiberByHostInstance:qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Sv={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xf(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||gv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{vi=po.inject(Sv),dt=po}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vs(t))throw Error($(200));return yv(e,t,null,n)};je.createRoot=function(e,t){if(!Vs(e))throw Error($(299));var n=!1,r="",o=Jd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=bs(e,1,!1,null,null,n,!1,r,o),e[Et]=t.current,Nr(e.nodeType===8?e.parentNode:e),new Bs(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=xf(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return un(e)};je.hydrate=function(e,t,n){if(!Pi(t))throw Error($(200));return Ti(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Vs(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Jd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Zd(t,null,e,1,n??null,o,!1,i,l),e[Et]=t.current,Nr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ni(t)};je.render=function(e,t,n){if(!Pi(t))throw Error($(200));return Ti(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Pi(e))throw Error($(40));return e._reactRootContainer?(un(function(){Ti(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};je.unstable_batchedUpdates=Ds;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pi(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return Ti(e,t,n,!1,r)};je.version="18.2.0-next-9e3b772b8-20220608";function qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qd)}catch(e){console.error(e)}}qd(),Gc.exports=je;var Oi=Gc.exports;const Ev=Ac(Oi);var yc=Oi;Ql.createRoot=yc.createRoot,Ql.hydrateRoot=yc.hydrateRoot;function Cv(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function kv(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var $v=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(kv(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Cv(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ge="-ms-",di="-moz-",U="-webkit-",e0="comm",Ws="rule",Hs="decl",_v="@import",t0="@keyframes",Nv="@layer",Pv=Math.abs,Ri=String.fromCharCode,Tv=Object.assign;function Ov(e,t){return pe(e,0)^45?(((t<<2^pe(e,0))<<2^pe(e,1))<<2^pe(e,2))<<2^pe(e,3):0}function n0(e){return e.trim()}function Rv(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,n){return e.replace(t,n)}function Aa(e,t){return e.indexOf(t)}function pe(e,t){return e.charCodeAt(t)|0}function Dr(e,t,n){return e.slice(t,n)}function at(e){return e.length}function Qs(e){return e.length}function mo(e,t){return t.push(e),e}function Mv(e,t){return e.map(t).join("")}var Mi=1,Hn=1,r0=0,Re=0,re=0,Kn="";function Ii(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Mi,column:Hn,length:l,return:""}}function or(e,t){return Tv(Ii("",null,null,"",null,null,0),e,{length:-e.length},t)}function Iv(){return re}function Fv(){return re=Re>0?pe(Kn,--Re):0,Hn--,re===10&&(Hn=1,Mi--),re}function De(){return re=Re<r0?pe(Kn,Re++):0,Hn++,re===10&&(Hn=1,Mi++),re}function mt(){return pe(Kn,Re)}function Do(){return Re}function Yr(e,t){return Dr(Kn,e,t)}function zr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function o0(e){return Mi=Hn=1,r0=at(Kn=e),Re=0,[]}function i0(e){return Kn="",e}function zo(e){return n0(Yr(Re-1,ba(e===91?e+2:e===40?e+1:e)))}function Lv(e){for(;(re=mt())&&re<33;)De();return zr(e)>2||zr(re)>3?"":" "}function Dv(e,t){for(;--t&&De()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return Yr(e,Do()+(t<6&&mt()==32&&De()==32))}function ba(e){for(;De();)switch(re){case e:return Re;case 34:case 39:e!==34&&e!==39&&ba(re);break;case 40:e===41&&ba(e);break;case 92:De();break}return Re}function zv(e,t){for(;De()&&e+re!==57;)if(e+re===84&&mt()===47)break;return"/*"+Yr(t,Re-1)+"*"+Ri(e===47?e:De())}function jv(e){for(;!zr(mt());)De();return Yr(e,Re)}function Av(e){return i0(jo("",null,null,null,[""],e=o0(e),0,[0],e))}function jo(e,t,n,r,o,i,l,a,s){for(var u=0,f=0,p=l,h=0,g=0,w=0,y=1,C=1,m=1,c=0,v="",x=o,S=i,k=r,E=v;C;)switch(w=c,c=De()){case 40:if(w!=108&&pe(E,p-1)==58){Aa(E+=B(zo(c),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:E+=zo(c);break;case 9:case 10:case 13:case 32:E+=Lv(w);break;case 92:E+=Dv(Do()-1,7);continue;case 47:switch(mt()){case 42:case 47:mo(bv(zv(De(),Do()),t,n),s);break;default:E+="/"}break;case 123*y:a[u++]=at(E)*m;case 125*y:case 59:case 0:switch(c){case 0:case 125:C=0;case 59+f:m==-1&&(E=B(E,/\f/g,"")),g>0&&at(E)-p&&mo(g>32?xc(E+";",r,n,p-1):xc(B(E," ","")+";",r,n,p-2),s);break;case 59:E+=";";default:if(mo(k=gc(E,t,n,u,f,o,a,v,x=[],S=[],p),i),c===123)if(f===0)jo(E,t,k,k,x,i,p,a,S);else switch(h===99&&pe(E,3)===110?100:h){case 100:case 108:case 109:case 115:jo(e,k,k,r&&mo(gc(e,k,k,0,0,o,a,v,o,x=[],p),S),o,S,p,a,r?x:S);break;default:jo(E,k,k,k,[""],S,0,a,S)}}u=f=g=0,y=m=1,v=E="",p=l;break;case 58:p=1+at(E),g=w;default:if(y<1){if(c==123)--y;else if(c==125&&y++==0&&Fv()==125)continue}switch(E+=Ri(c),c*y){case 38:m=f>0?1:(E+="\f",-1);break;case 44:a[u++]=(at(E)-1)*m,m=1;break;case 64:mt()===45&&(E+=zo(De())),h=mt(),f=p=at(v=E+=jv(Do())),c++;break;case 45:w===45&&at(E)==2&&(y=0)}}return i}function gc(e,t,n,r,o,i,l,a,s,u,f){for(var p=o-1,h=o===0?i:[""],g=Qs(h),w=0,y=0,C=0;w<r;++w)for(var m=0,c=Dr(e,p+1,p=Pv(y=l[w])),v=e;m<g;++m)(v=n0(y>0?h[m]+" "+c:B(c,/&\f/g,h[m])))&&(s[C++]=v);return Ii(e,t,n,o===0?Ws:a,s,u,f)}function bv(e,t,n){return Ii(e,t,n,e0,Ri(Iv()),Dr(e,2,-2),0)}function xc(e,t,n,r){return Ii(e,t,n,Hs,Dr(e,0,r),Dr(e,r+1,-1),r)}function Dn(e,t){for(var n="",r=Qs(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Uv(e,t,n,r){switch(e.type){case Nv:if(e.children.length)break;case _v:case Hs:return e.return=e.return||e.value;case e0:return"";case t0:return e.return=e.value+"{"+Dn(e.children,r)+"}";case Ws:e.value=e.props.join(",")}return at(n=Dn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Bv(e){var t=Qs(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Vv(e){return function(t){t.root||(t=t.return)&&e(t)}}function Wv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Hv=function(t,n,r){for(var o=0,i=0;o=i,i=mt(),o===38&&i===12&&(n[r]=1),!zr(i);)De();return Yr(t,Re)},Qv=function(t,n){var r=-1,o=44;do switch(zr(o)){case 0:o===38&&mt()===12&&(n[r]=1),t[r]+=Hv(Re-1,n,r);break;case 2:t[r]+=zo(o);break;case 4:if(o===44){t[++r]=mt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ri(o)}while(o=De());return t},Yv=function(t,n){return i0(Qv(o0(t),n))},wc=new WeakMap,Xv=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!wc.get(r))&&!o){wc.set(t,!0);for(var i=[],l=Yv(n,i),a=r.props,s=0,u=0;s<l.length;s++)for(var f=0;f<a.length;f++,u++)t.props[u]=i[s]?l[s].replace(/&\f/g,a[f]):a[f]+" "+l[s]}}},Kv=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function l0(e,t){switch(Ov(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+di+e+ge+e+e;case 6828:case 4268:return U+e+ge+e+e;case 6165:return U+e+ge+"flex-"+e+e;case 5187:return U+e+B(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+ge+"flex-$1$2")+e;case 5443:return U+e+ge+"flex-item-"+B(e,/flex-|-self/,"")+e;case 4675:return U+e+ge+"flex-line-pack"+B(e,/align-content|flex-|-self/,"")+e;case 5548:return U+e+ge+B(e,"shrink","negative")+e;case 5292:return U+e+ge+B(e,"basis","preferred-size")+e;case 6060:return U+"box-"+B(e,"-grow","")+U+e+ge+B(e,"grow","positive")+e;case 4554:return U+B(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(at(e)-1-t>6)switch(pe(e,t+1)){case 109:if(pe(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+di+(pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Aa(e,"stretch")?l0(B(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(pe(e,t+1)!==115)break;case 6444:switch(pe(e,at(e)-3-(~Aa(e,"!important")&&10))){case 107:return B(e,":",":"+U)+e;case 101:return B(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+U+(pe(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+ge+"$2box$3")+e}break;case 5936:switch(pe(e,t+11)){case 114:return U+e+ge+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+ge+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+ge+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return U+e+ge+e+e}return e}var Gv=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Hs:t.return=l0(t.value,t.length);break;case t0:return Dn([or(t,{value:B(t.value,"@","@"+U)})],o);case Ws:if(t.length)return Mv(t.props,function(i){switch(Rv(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Dn([or(t,{props:[B(i,/:(read-\w+)/,":"+di+"$1")]})],o);case"::placeholder":return Dn([or(t,{props:[B(i,/:(plac\w+)/,":"+U+"input-$1")]}),or(t,{props:[B(i,/:(plac\w+)/,":"+di+"$1")]}),or(t,{props:[B(i,/:(plac\w+)/,ge+"input-$1")]})],o)}return""})}},Zv=[Gv],Jv=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var C=y.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||Zv,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var C=y.getAttribute("data-emotion").split(" "),m=1;m<C.length;m++)i[C[m]]=!0;a.push(y)});var s,u=[Xv,Kv];{var f,p=[Uv,Vv(function(y){f.insert(y)})],h=Bv(u.concat(o,p)),g=function(C){return Dn(Av(C),h)};s=function(C,m,c,v){f=c,g(C?C+"{"+m.styles+"}":m.styles),v&&(w.inserted[m.name]=!0)}}var w={key:n,sheet:new $v({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return w.sheet.hydrate(a),w};function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}var a0={exports:{}},Q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe=typeof Symbol=="function"&&Symbol.for,Ys=fe?Symbol.for("react.element"):60103,Xs=fe?Symbol.for("react.portal"):60106,Fi=fe?Symbol.for("react.fragment"):60107,Li=fe?Symbol.for("react.strict_mode"):60108,Di=fe?Symbol.for("react.profiler"):60114,zi=fe?Symbol.for("react.provider"):60109,ji=fe?Symbol.for("react.context"):60110,Ks=fe?Symbol.for("react.async_mode"):60111,Ai=fe?Symbol.for("react.concurrent_mode"):60111,bi=fe?Symbol.for("react.forward_ref"):60112,Ui=fe?Symbol.for("react.suspense"):60113,qv=fe?Symbol.for("react.suspense_list"):60120,Bi=fe?Symbol.for("react.memo"):60115,Vi=fe?Symbol.for("react.lazy"):60116,eh=fe?Symbol.for("react.block"):60121,th=fe?Symbol.for("react.fundamental"):60117,nh=fe?Symbol.for("react.responder"):60118,rh=fe?Symbol.for("react.scope"):60119;function be(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ys:switch(e=e.type,e){case Ks:case Ai:case Fi:case Di:case Li:case Ui:return e;default:switch(e=e&&e.$$typeof,e){case ji:case bi:case Vi:case Bi:case zi:return e;default:return t}}case Xs:return t}}}function s0(e){return be(e)===Ai}Q.AsyncMode=Ks;Q.ConcurrentMode=Ai;Q.ContextConsumer=ji;Q.ContextProvider=zi;Q.Element=Ys;Q.ForwardRef=bi;Q.Fragment=Fi;Q.Lazy=Vi;Q.Memo=Bi;Q.Portal=Xs;Q.Profiler=Di;Q.StrictMode=Li;Q.Suspense=Ui;Q.isAsyncMode=function(e){return s0(e)||be(e)===Ks};Q.isConcurrentMode=s0;Q.isContextConsumer=function(e){return be(e)===ji};Q.isContextProvider=function(e){return be(e)===zi};Q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ys};Q.isForwardRef=function(e){return be(e)===bi};Q.isFragment=function(e){return be(e)===Fi};Q.isLazy=function(e){return be(e)===Vi};Q.isMemo=function(e){return be(e)===Bi};Q.isPortal=function(e){return be(e)===Xs};Q.isProfiler=function(e){return be(e)===Di};Q.isStrictMode=function(e){return be(e)===Li};Q.isSuspense=function(e){return be(e)===Ui};Q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fi||e===Ai||e===Di||e===Li||e===Ui||e===qv||typeof e=="object"&&e!==null&&(e.$$typeof===Vi||e.$$typeof===Bi||e.$$typeof===zi||e.$$typeof===ji||e.$$typeof===bi||e.$$typeof===th||e.$$typeof===nh||e.$$typeof===rh||e.$$typeof===eh)};Q.typeOf=be;a0.exports=Q;var oh=a0.exports,u0=oh,ih={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c0={};c0[u0.ForwardRef]=ih;c0[u0.Memo]=lh;var ah=!0;function f0(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Gs=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||ah===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},d0=function(t,n,r){Gs(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function sh(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var uh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ch=/[A-Z]|^ms/g,fh=/_EMO_([^_]+?)_([^]*?)_EMO_/g,p0=function(t){return t.charCodeAt(1)===45},Sc=function(t){return t!=null&&typeof t!="boolean"},Rl=Wv(function(e){return p0(e)?e:e.replace(ch,"-$&").toLowerCase()}),Ec=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(fh,function(r,o,i){return st={name:o,styles:i,next:st},o})}return uh[t]!==1&&!p0(t)&&typeof n=="number"&&n!==0?n+"px":n};function jr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return st={name:n.name,styles:n.styles,next:st},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)st={name:r.name,styles:r.styles,next:st},r=r.next;var o=n.styles+";";return o}return dh(e,t,n)}case"function":{if(e!==void 0){var i=st,l=n(e);return st=i,jr(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function dh(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=jr(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":Sc(l)&&(r+=Rl(i)+":"+Ec(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)Sc(l[a])&&(r+=Rl(i)+":"+Ec(i,l[a])+";");else{var s=jr(e,t,l);switch(i){case"animation":case"animationName":{r+=Rl(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var Cc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,st,Zs=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";st=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=jr(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=jr(r,n,t[a]),o&&(i+=l[a]);Cc.lastIndex=0;for(var s="",u;(u=Cc.exec(i))!==null;)s+="-"+u[1];var f=sh(i)+s;return{name:f,styles:i,next:st}},ph=function(t){return t()},mh=Hl.useInsertionEffect?Hl.useInsertionEffect:!1,m0=mh||ph,Js={}.hasOwnProperty,v0=d.createContext(typeof HTMLElement<"u"?Jv({key:"css"}):null);v0.Provider;var h0=function(t){return d.forwardRef(function(n,r){var o=d.useContext(v0);return t(n,o,r)})},y0=d.createContext({}),Ua="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",vh=function(t,n){var r={};for(var o in n)Js.call(n,o)&&(r[o]=n[o]);return r[Ua]=t,r},hh=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Gs(n,r,o),m0(function(){return d0(n,r,o)}),null},yh=h0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Ua],i=[r],l="";typeof e.className=="string"?l=f0(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=Zs(i,void 0,d.useContext(y0));l+=t.key+"-"+a.name;var s={};for(var u in e)Js.call(e,u)&&u!=="css"&&u!==Ua&&(s[u]=e[u]);return s.ref=n,s.className=l,d.createElement(d.Fragment,null,d.createElement(hh,{cache:t,serialized:a,isStringTag:typeof o=="string"}),d.createElement(o,s))}),gh=yh,xh=N.Fragment;function se(e,t,n){return Js.call(t,"css")?N.jsx(gh,vh(e,t),n):N.jsx(e,t,n)}function g0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Zs(t)}var P=function(){var t=g0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},wh=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function Sh(e,t,n){var r=[],o=f0(e,r,n);return r.length<2?n:o+t(r)}var Eh=function(t){var n=t.cache,r=t.serializedArr;return m0(function(){for(var o=0;o<r.length;o++)d0(n,r[o],!1)}),null},Ml=h0(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,f=new Array(u),p=0;p<u;p++)f[p]=arguments[p];var h=Zs(f,t.registered);return r.push(h),Gs(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,f=new Array(u),p=0;p<u;p++)f[p]=arguments[p];return Sh(t.registered,o,wh(f))},l={css:o,cx:i,theme:d.useContext(y0)},a=e.children(l);return n=!0,d.createElement(d.Fragment,null,d.createElement(Eh,{cache:t,serializedArr:r}),a)}),Ch=Object.defineProperty,kh=(e,t,n)=>t in e?Ch(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vo=(e,t,n)=>(kh(e,typeof t!="symbol"?t+"":t,n),n),Ba=new Map,ho=new WeakMap,kc=0,$h=void 0;function _h(e){return e?(ho.has(e)||(kc+=1,ho.set(e,kc.toString())),ho.get(e)):"0"}function Nh(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?_h(e.root):e[t]}`).toString()}function Ph(e){const t=Nh(e);let n=Ba.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(a=>{var s;const u=a.isIntersecting&&o.some(f=>a.intersectionRatio>=f);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(f=>{f(u,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Ba.set(t,n)}return n}function x0(e,t,n={},r=$h){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:i,elements:l}=Ph(n),a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),Ba.delete(o))}}function Th(e){return typeof e.children!="function"}var $c=class extends d.Component{constructor(e){super(e),vo(this,"node",null),vo(this,"_unobserveCb",null),vo(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),vo(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Th(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=x0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:g,entry:w}=this.state;return e({inView:g,entry:w,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:a,trackVisibility:s,delay:u,initialInView:f,fallbackInView:p,...h}=this.props;return d.createElement(t||"div",{ref:this.handleNode,...h},e)}};function w0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:a,fallbackInView:s,onChange:u}={}){var f;const[p,h]=d.useState(null),g=d.useRef(),[w,y]=d.useState({inView:!!a,entry:void 0});g.current=u,d.useEffect(()=>{if(l||!p)return;let v;return v=x0(p,(x,S)=>{y({inView:x,entry:S}),g.current&&g.current(x,S),S.isIntersecting&&i&&v&&(v(),v=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{v&&v()}},[Array.isArray(e)?e.toString():e,p,o,r,i,l,n,s,t]);const C=(f=w.entry)==null?void 0:f.target,m=d.useRef();!p&&C&&!i&&!l&&m.current!==C&&(m.current=C,y({inView:!!a,entry:void 0}));const c=[h,w.inView,w.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var S0={exports:{}},Y={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qs=Symbol.for("react.element"),eu=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),Hi=Symbol.for("react.strict_mode"),Qi=Symbol.for("react.profiler"),Yi=Symbol.for("react.provider"),Xi=Symbol.for("react.context"),Oh=Symbol.for("react.server_context"),Ki=Symbol.for("react.forward_ref"),Gi=Symbol.for("react.suspense"),Zi=Symbol.for("react.suspense_list"),Ji=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),Rh=Symbol.for("react.offscreen"),E0;E0=Symbol.for("react.module.reference");function Ke(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qs:switch(e=e.type,e){case Wi:case Qi:case Hi:case Gi:case Zi:return e;default:switch(e=e&&e.$$typeof,e){case Oh:case Xi:case Ki:case qi:case Ji:case Yi:return e;default:return t}}case eu:return t}}}Y.ContextConsumer=Xi;Y.ContextProvider=Yi;Y.Element=qs;Y.ForwardRef=Ki;Y.Fragment=Wi;Y.Lazy=qi;Y.Memo=Ji;Y.Portal=eu;Y.Profiler=Qi;Y.StrictMode=Hi;Y.Suspense=Gi;Y.SuspenseList=Zi;Y.isAsyncMode=function(){return!1};Y.isConcurrentMode=function(){return!1};Y.isContextConsumer=function(e){return Ke(e)===Xi};Y.isContextProvider=function(e){return Ke(e)===Yi};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qs};Y.isForwardRef=function(e){return Ke(e)===Ki};Y.isFragment=function(e){return Ke(e)===Wi};Y.isLazy=function(e){return Ke(e)===qi};Y.isMemo=function(e){return Ke(e)===Ji};Y.isPortal=function(e){return Ke(e)===eu};Y.isProfiler=function(e){return Ke(e)===Qi};Y.isStrictMode=function(e){return Ke(e)===Hi};Y.isSuspense=function(e){return Ke(e)===Gi};Y.isSuspenseList=function(e){return Ke(e)===Zi};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wi||e===Qi||e===Hi||e===Gi||e===Zi||e===Rh||typeof e=="object"&&e!==null&&(e.$$typeof===qi||e.$$typeof===Ji||e.$$typeof===Yi||e.$$typeof===Xi||e.$$typeof===Ki||e.$$typeof===E0||e.getModuleId!==void 0)};Y.typeOf=Ke;S0.exports=Y;var Mh=S0.exports;P`
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
`;P`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;P`
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
`;P`
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
`;P`
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
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;const Ih=P`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Fh=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Lh=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dh=P`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,zh=P`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tu=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jh=P`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ah=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bh=P`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Uh=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bh=P`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vh=P`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wh=P`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Hh({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=tu,iterationCount:o=1}){return g0`
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
  `}function Qh(e){return e==null}function Yh(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function C0(e,t){return n=>n?e():t()}function Ar(e){return C0(e,()=>null)}function Va(e){return Ar(()=>({opacity:0}))(e)}const k0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=tu,triggerOnce:a=!1,className:s,style:u,childClassName:f,childStyle:p,children:h,onVisibilityChange:g}=e,w=d.useMemo(()=>Hh({keyframes:l,duration:o}),[o,l]);return Qh(h)?null:Yh(h)?se(Kh,{...e,animationStyles:w,children:String(h)}):Mh.isFragment(h)?se($0,{...e,animationStyles:w}):se(xh,{children:d.Children.map(h,(y,C)=>{if(!d.isValidElement(y))return null;const m=r+(t?C*o*n:0);switch(y.type){case"ol":case"ul":return se(Ml,{children:({cx:c})=>se(y.type,{...y.props,className:c(s,y.props.className),style:Object.assign({},u,y.props.style),children:se(k0,{...e,children:y.props.children})})});case"li":return se($c,{threshold:i,triggerOnce:a,onChange:g,children:({inView:c,ref:v})=>se(Ml,{children:({cx:x})=>se(y.type,{...y.props,ref:v,className:x(f,y.props.className),css:Ar(()=>w)(c),style:Object.assign({},p,y.props.style,Va(!c),{animationDelay:m+"ms"})})})});default:return se($c,{threshold:i,triggerOnce:a,onChange:g,children:({inView:c,ref:v})=>se("div",{ref:v,className:s,css:Ar(()=>w)(c),style:Object.assign({},u,Va(!c),{animationDelay:m+"ms"}),children:se(Ml,{children:({cx:x})=>se(y.type,{...y.props,className:x(f,y.props.className),style:Object.assign({},p,y.props.style)})})})})}})})},Xh={display:"inline-block",whiteSpace:"pre"},Kh=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:u,children:f,onVisibilityChange:p}=e,{ref:h,inView:g}=w0({triggerOnce:a,threshold:l,onChange:p});return C0(()=>se("div",{ref:h,className:s,style:Object.assign({},u,Xh),children:f.split("").map((w,y)=>se("span",{css:Ar(()=>t)(g),style:{animationDelay:o+y*i*r+"ms"},children:w},y))}),()=>se($0,{...e,children:f}))(n)},$0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:a}=e,{ref:s,inView:u}=w0({triggerOnce:r,threshold:n,onChange:a});return se("div",{ref:s,className:o,css:Ar(()=>t)(u),style:Object.assign({},i,Va(!u)),children:l})};P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;P`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;P`
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
`;const Gh=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Zh=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Jh=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,qh=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,e1=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,t1=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,n1=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,r1=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,o1=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,i1=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,l1=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,a1=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,s1=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function u1(e,t,n){switch(n){case"bottom-left":return t?Zh:Fh;case"bottom-right":return t?Jh:Lh;case"down":return e?t?e1:zh:t?qh:Dh;case"left":return e?t?n1:jh:t?t1:tu;case"right":return e?t?o1:bh:t?r1:Ah;case"top-left":return t?i1:Uh;case"top-right":return t?l1:Bh;case"up":return e?t?s1:Wh:t?a1:Vh;default:return t?Gh:Ih}}const yo=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=d.useMemo(()=>u1(t,r,n),[t,n,r]);return se(k0,{keyframes:i,...o})};P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;P`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
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
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;P`
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
`;function el(e,t,n,r){return new(n||(n=Promise))(function(o,i){function l(u){try{s(r.next(u))}catch(f){i(f)}}function a(u){try{s(r.throw(u))}catch(f){i(f)}}function s(u){var f;u.done?o(u.value):(f=u.value,f instanceof n?f:new n(function(p){p(f)})).then(l,a)}s((r=r.apply(e,t||[])).next())})}function Wt(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(s){return function(u){return function(f){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&f[0]?r.return:f[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,f[1])).done)return o;switch(r=0,o&&(f=[2&f[0],o.value]),f[0]){case 0:case 1:o=f;break;case 4:return l.label++,{value:f[1],done:!1};case 5:l.label++,r=f[1],f=[0];continue;case 7:f=l.ops.pop(),l.trys.pop();continue;default:if(o=l.trys,!((o=o.length>0&&o[o.length-1])||f[0]!==6&&f[0]!==2)){l=0;continue}if(f[0]===3&&(!o||f[1]>o[0]&&f[1]<o[3])){l.label=f[1];break}if(f[0]===6&&l.label<o[1]){l.label=o[1],o=f;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(f);break}o[2]&&l.ops.pop(),l.trys.pop();continue}f=t.call(e,l)}catch(p){f=[6,p],r=0}finally{n=o=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([s,u])}}}function Wa(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function et(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(t===void 0||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l}function ct(e,t,n){if(n||arguments.length===2)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function _c(e,t,n,r,o){for(var i=[],l=5;l<arguments.length;l++)i[l-5]=arguments[l];return el(this,void 0,void 0,function(){var a,s,u,f,p,h;return Wt(this,function(g){switch(g.label){case 0:g.trys.push([0,12,13,14]),a=Wa(i),s=a.next(),g.label=1;case 1:if(s.done)return[3,11];switch(u=s.value,typeof u){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,c1(e,t,u,n,r,o)];case 3:return g.sent(),[3,10];case 4:return[4,_0(u)];case 5:return g.sent(),[3,10];case 6:return[4,u.apply(void 0,ct([e,t,n,r,o],et(i),!1))];case 7:return g.sent(),[3,10];case 8:return[4,u];case 9:g.sent(),g.label=10;case 10:return s=a.next(),[3,1];case 11:return[3,14];case 12:return f=g.sent(),p={error:f},[3,14];case 13:try{s&&!s.done&&(h=a.return)&&h.call(a)}finally{if(p)throw p.error}return[7];case 14:return[2]}})})}function c1(e,t,n,r,o,i){return el(this,void 0,void 0,function(){var l,a;return Wt(this,function(s){switch(s.label){case 0:return l=e.textContent||"",a=function(u,f){var p=et(f).slice(0);return ct(ct([],et(u),!1),[NaN],!1).findIndex(function(h,g){return p[g]!==h})}(l,n),[4,f1(e,ct(ct([],et(p1(l,t,a)),!1),et(d1(n,t,a)),!1),r,o,i)];case 1:return s.sent(),[2]}})})}function _0(e){return el(this,void 0,void 0,function(){return Wt(this,function(t){switch(t.label){case 0:return[4,new Promise(function(n){return setTimeout(n,e)})];case 1:return t.sent(),[2]}})})}function f1(e,t,n,r,o){return el(this,void 0,void 0,function(){var i,l,a,s,u,f,p,h,g,w,y,C,m;return Wt(this,function(c){switch(c.label){case 0:if(i=t,o){for(l=0,a=1;a<t.length;a++)if(s=et([t[a-1],t[a]],2),u=s[0],(f=s[1]).length>u.length||f===""){l=a;break}i=t.slice(l,t.length)}c.label=1;case 1:c.trys.push([1,6,7,8]),p=Wa(function(v){var x,S,k,E,_,D,T;return Wt(this,function(I){switch(I.label){case 0:x=function(L){return Wt(this,function(z){switch(z.label){case 0:return[4,{op:function(Me){return requestAnimationFrame(function(){return Me.textContent=L})},opCode:function(Me){var pn=Me.textContent||"";return L===""||pn.length>L.length?"DELETE":"WRITING"}}];case 1:return z.sent(),[2]}})},I.label=1;case 1:I.trys.push([1,6,7,8]),S=Wa(v),k=S.next(),I.label=2;case 2:return k.done?[3,5]:(E=k.value,[5,x(E)]);case 3:I.sent(),I.label=4;case 4:return k=S.next(),[3,2];case 5:return[3,8];case 6:return _=I.sent(),D={error:_},[3,8];case 7:try{k&&!k.done&&(T=S.return)&&T.call(S)}finally{if(D)throw D.error}return[7];case 8:return[2]}})}(i)),h=p.next(),c.label=2;case 2:return h.done?[3,5]:(g=h.value,w=g.opCode(e)==="WRITING"?n+n*(Math.random()-.5):r+r*(Math.random()-.5),g.op(e),[4,_0(w)]);case 3:c.sent(),c.label=4;case 4:return h=p.next(),[3,2];case 5:return[3,8];case 6:return y=c.sent(),C={error:y},[3,8];case 7:try{h&&!h.done&&(m=p.return)&&m.call(p)}finally{if(C)throw C.error}return[7];case 8:return[2]}})})}function d1(e,t,n){var r,o;return n===void 0&&(n=0),Wt(this,function(i){switch(i.label){case 0:r=t(e),o=r.length,i.label=1;case 1:return n<o?[4,r.slice(0,++n).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}function p1(e,t,n){var r,o;return n===void 0&&(n=0),Wt(this,function(i){switch(i.label){case 0:r=t(e),o=r.length,i.label=1;case 1:return o>n?[4,r.slice(0,--o).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}var m1="index-module_type__E-SaG";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var v1=d.memo(d.forwardRef(function(e,t){var n=e.sequence,r=e.repeat,o=e.className,i=e.speed,l=i===void 0?40:i,a=e.deletionSpeed,s=e.omitDeletionAnimation,u=s!==void 0&&s,f=e.preRenderFirstString,p=f!==void 0&&f,h=e.wrapper,g=h===void 0?"span":h,w=e.splitter,y=w===void 0?function(O){return ct([],et(O),!1)}:w,C=e.cursor,m=C===void 0||C,c=e.style,v=function(O,A){var V={};for(var ae in O)Object.prototype.hasOwnProperty.call(O,ae)&&A.indexOf(ae)<0&&(V[ae]=O[ae]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function"){var $e=0;for(ae=Object.getOwnPropertySymbols(O);$e<ae.length;$e++)A.indexOf(ae[$e])<0&&Object.prototype.propertyIsEnumerable.call(O,ae[$e])&&(V[ae[$e]]=O[ae[$e]])}return V}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),x=v["aria-label"],S=v["aria-hidden"],k=v.role;a||(a=l);var E=new Array(2).fill(40);[l,a].forEach(function(O,A){switch(typeof O){case"number":E[A]=Math.abs(O-100);break;case"object":var V=O.type,ae=O.value;if(typeof ae!="number")break;V==="keyStrokeDelayInMs"&&(E[A]=ae)}});var _,D,T,I,L,z,Me=E[0],pn=E[1],ot=function(O,A){A===void 0&&(A=null);var V=d.useRef(A);return d.useEffect(function(){O&&(typeof O=="function"?O(V.current):O.current=V.current)},[O]),V}(t),Nt=m1;_=o?"".concat(m?Nt+" ":"").concat(o):m?Nt:"",D=d.useRef(function(){var O,A=n;r===1/0?O=_c:typeof r=="number"&&(A=Array(1+r).fill(n).flat());var V=O?ct(ct([],et(A),!1),[O],!1):ct([],et(A),!1);return _c.apply(void 0,ct([ot.current,y,Me,pn,u],et(V),!1)),function(){ot.current}}),T=d.useRef(),I=d.useRef(!1),L=d.useRef(!1),z=et(d.useState(0),2)[1],I.current&&(L.current=!0),d.useEffect(function(){return I.current||(T.current=D.current(),I.current=!0),z(function(O){return O+1}),function(){L.current&&T.current&&T.current()}},[]);var R=g,F=p?n.find(function(O){return typeof O=="string"})||"":null;return Uo.createElement(R,{"aria-hidden":S,"aria-label":x,role:k,style:c,className:_,children:x?Uo.createElement("span",{"aria-hidden":"true",ref:ot,children:F}):F,ref:x?void 0:ot})}),function(e,t){return!0});function Qe(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function h1(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function N0(...e){return t=>e.forEach(n=>h1(n,t))}function _t(...e){return d.useCallback(N0(...e),e)}function P0(e,t=[]){let n=[];function r(i,l){const a=d.createContext(l),s=n.length;n=[...n,l];function u(p){const{scope:h,children:g,...w}=p,y=(h==null?void 0:h[e][s])||a,C=d.useMemo(()=>w,Object.values(w));return d.createElement(y.Provider,{value:C},g)}function f(p,h){const g=(h==null?void 0:h[e][s])||a,w=d.useContext(g);if(w)return w;if(l!==void 0)return l;throw new Error(`\`${p}\` must be used within \`${i}\``)}return u.displayName=i+"Provider",[u,f]}const o=()=>{const i=n.map(l=>d.createContext(l));return function(a){const s=(a==null?void 0:a[e])||i;return d.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])}};return o.scopeName=e,[r,y1(o,...t)]}function y1(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=r.reduce((a,{useScope:s,scopeName:u})=>{const p=s(i)[`__scope${u}`];return{...a,...p}},{});return d.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}const Ha=globalThis!=null&&globalThis.document?d.useLayoutEffect:()=>{},g1=Hl.useId||(()=>{});let x1=0;function zn(e){const[t,n]=d.useState(g1());return Ha(()=>{e||n(r=>r??String(x1++))},[e]),e||(t?`radix-${t}`:"")}function cn(e){const t=d.useRef(e);return d.useEffect(()=>{t.current=e}),d.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function w1({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=S1({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r,a=cn(n),s=d.useCallback(u=>{if(i){const p=typeof u=="function"?u(e):u;p!==e&&a(p)}else o(u)},[i,e,o,a]);return[l,s]}function S1({defaultProp:e,onChange:t}){const n=d.useState(e),[r]=n,o=d.useRef(r),i=cn(t);return d.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}const nu=d.forwardRef((e,t)=>{const{children:n,...r}=e,o=d.Children.toArray(n),i=o.find(C1);if(i){const l=i.props.children,a=o.map(s=>s===i?d.Children.count(l)>1?d.Children.only(null):d.isValidElement(l)?l.props.children:null:s);return d.createElement(Qa,W({},r,{ref:t}),d.isValidElement(l)?d.cloneElement(l,void 0,a):null)}return d.createElement(Qa,W({},r,{ref:t}),n)});nu.displayName="Slot";const Qa=d.forwardRef((e,t)=>{const{children:n,...r}=e;return d.isValidElement(n)?d.cloneElement(n,{...k1(r,n.props),ref:t?N0(t,n.ref):n.ref}):d.Children.count(n)>1?d.Children.only(null):null});Qa.displayName="SlotClone";const E1=({children:e})=>d.createElement(d.Fragment,null,e);function C1(e){return d.isValidElement(e)&&e.type===E1}function k1(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const $1=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Ue=$1.reduce((e,t)=>{const n=d.forwardRef((r,o)=>{const{asChild:i,...l}=r,a=i?nu:t;return d.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),d.createElement(a,W({},l,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function _1(e,t){e&&Oi.flushSync(()=>e.dispatchEvent(t))}function N1(e,t=globalThis==null?void 0:globalThis.document){const n=cn(e);d.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const Ya="dismissableLayer.update",P1="dismissableLayer.pointerDownOutside",T1="dismissableLayer.focusOutside";let Nc;const O1=d.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),R1=d.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:l,onInteractOutside:a,onDismiss:s,...u}=e,f=d.useContext(O1),[p,h]=d.useState(null),g=(n=p==null?void 0:p.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,w]=d.useState({}),y=_t(t,_=>h(_)),C=Array.from(f.layers),[m]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),c=C.indexOf(m),v=p?C.indexOf(p):-1,x=f.layersWithOutsidePointerEventsDisabled.size>0,S=v>=c,k=M1(_=>{const D=_.target,T=[...f.branches].some(I=>I.contains(D));!S||T||(i==null||i(_),a==null||a(_),_.defaultPrevented||s==null||s())},g),E=I1(_=>{const D=_.target;[...f.branches].some(I=>I.contains(D))||(l==null||l(_),a==null||a(_),_.defaultPrevented||s==null||s())},g);return N1(_=>{v===f.layers.size-1&&(o==null||o(_),!_.defaultPrevented&&s&&(_.preventDefault(),s()))},g),d.useEffect(()=>{if(p)return r&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(Nc=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(p)),f.layers.add(p),Pc(),()=>{r&&f.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=Nc)}},[p,g,r,f]),d.useEffect(()=>()=>{p&&(f.layers.delete(p),f.layersWithOutsidePointerEventsDisabled.delete(p),Pc())},[p,f]),d.useEffect(()=>{const _=()=>w({});return document.addEventListener(Ya,_),()=>document.removeEventListener(Ya,_)},[]),d.createElement(Ue.div,W({},u,{ref:y,style:{pointerEvents:x?S?"auto":"none":void 0,...e.style},onFocusCapture:Qe(e.onFocusCapture,E.onFocusCapture),onBlurCapture:Qe(e.onBlurCapture,E.onBlurCapture),onPointerDownCapture:Qe(e.onPointerDownCapture,k.onPointerDownCapture)}))});function M1(e,t=globalThis==null?void 0:globalThis.document){const n=cn(e),r=d.useRef(!1),o=d.useRef(()=>{});return d.useEffect(()=>{const i=a=>{if(a.target&&!r.current){let f=function(){T0(P1,n,u,{discrete:!0})};var s=f;const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=f,t.addEventListener("click",o.current,{once:!0})):f()}else t.removeEventListener("click",o.current);r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function I1(e,t=globalThis==null?void 0:globalThis.document){const n=cn(e),r=d.useRef(!1);return d.useEffect(()=>{const o=i=>{i.target&&!r.current&&T0(T1,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Pc(){const e=new CustomEvent(Ya);document.dispatchEvent(e)}function T0(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?_1(o,i):o.dispatchEvent(i)}const Il="focusScope.autoFocusOnMount",Fl="focusScope.autoFocusOnUnmount",Tc={bubbles:!1,cancelable:!0},F1=d.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...l}=e,[a,s]=d.useState(null),u=cn(o),f=cn(i),p=d.useRef(null),h=_t(t,y=>s(y)),g=d.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;d.useEffect(()=>{if(r){let c=function(k){if(g.paused||!a)return;const E=k.target;a.contains(E)?p.current=E:Tt(p.current,{select:!0})},v=function(k){if(g.paused||!a)return;const E=k.relatedTarget;E!==null&&(a.contains(E)||Tt(p.current,{select:!0}))},x=function(k){if(document.activeElement===document.body)for(const _ of k)_.removedNodes.length>0&&Tt(a)};var y=c,C=v,m=x;document.addEventListener("focusin",c),document.addEventListener("focusout",v);const S=new MutationObserver(x);return a&&S.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",c),document.removeEventListener("focusout",v),S.disconnect()}}},[r,a,g.paused]),d.useEffect(()=>{if(a){Rc.add(g);const y=document.activeElement;if(!a.contains(y)){const m=new CustomEvent(Il,Tc);a.addEventListener(Il,u),a.dispatchEvent(m),m.defaultPrevented||(L1(b1(O0(a)),{select:!0}),document.activeElement===y&&Tt(a))}return()=>{a.removeEventListener(Il,u),setTimeout(()=>{const m=new CustomEvent(Fl,Tc);a.addEventListener(Fl,f),a.dispatchEvent(m),m.defaultPrevented||Tt(y??document.body,{select:!0}),a.removeEventListener(Fl,f),Rc.remove(g)},0)}}},[a,u,f,g]);const w=d.useCallback(y=>{if(!n&&!r||g.paused)return;const C=y.key==="Tab"&&!y.altKey&&!y.ctrlKey&&!y.metaKey,m=document.activeElement;if(C&&m){const c=y.currentTarget,[v,x]=D1(c);v&&x?!y.shiftKey&&m===x?(y.preventDefault(),n&&Tt(v,{select:!0})):y.shiftKey&&m===v&&(y.preventDefault(),n&&Tt(x,{select:!0})):m===c&&y.preventDefault()}},[n,r,g.paused]);return d.createElement(Ue.div,W({tabIndex:-1},l,{ref:h,onKeyDown:w}))});function L1(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Tt(r,{select:t}),document.activeElement!==n)return}function D1(e){const t=O0(e),n=Oc(t,e),r=Oc(t.reverse(),e);return[n,r]}function O0(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Oc(e,t){for(const n of e)if(!z1(n,{upTo:t}))return n}function z1(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function j1(e){return e instanceof HTMLInputElement&&"select"in e}function Tt(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&j1(e)&&t&&e.select()}}const Rc=A1();function A1(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Mc(e,t),e.unshift(t)},remove(t){var n;e=Mc(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Mc(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function b1(e){return e.filter(t=>t.tagName!=="A")}const U1=d.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=e;return r?Ev.createPortal(d.createElement(Ue.div,W({},o,{ref:t})),r):null});function B1(e,t){return d.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const tl=e=>{const{present:t,children:n}=e,r=V1(t),o=typeof n=="function"?n({present:r.isPresent}):d.Children.only(n),i=_t(r.ref,o.ref);return typeof n=="function"||r.isPresent?d.cloneElement(o,{ref:i}):null};tl.displayName="Presence";function V1(e){const[t,n]=d.useState(),r=d.useRef({}),o=d.useRef(e),i=d.useRef("none"),l=e?"mounted":"unmounted",[a,s]=B1(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return d.useEffect(()=>{const u=go(r.current);i.current=a==="mounted"?u:"none"},[a]),Ha(()=>{const u=r.current,f=o.current;if(f!==e){const h=i.current,g=go(u);e?s("MOUNT"):g==="none"||(u==null?void 0:u.display)==="none"?s("UNMOUNT"):s(f&&h!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),Ha(()=>{if(t){const u=p=>{const g=go(r.current).includes(p.animationName);p.target===t&&g&&Oi.flushSync(()=>s("ANIMATION_END"))},f=p=>{p.target===t&&(i.current=go(r.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:d.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function go(e){return(e==null?void 0:e.animationName)||"none"}let Ll=0;function W1(){d.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:Ic()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:Ic()),Ll++,()=>{Ll===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),Ll--}},[])}function Ic(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var ft=function(){return ft=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ft.apply(this,arguments)};function R0(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function H1(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Ao="right-scroll-bar-position",bo="width-before-scroll-bar",Q1="with-scroll-bars-hidden",Y1="--removed-body-scroll-bar-size";function Dl(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function X1(e,t){var n=d.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Fc=new WeakMap;function K1(e,t){var n=X1(t||null,function(r){return e.forEach(function(o){return Dl(o,r)})});return d.useLayoutEffect(function(){var r=Fc.get(n);if(r){var o=new Set(r),i=new Set(e),l=n.current;o.forEach(function(a){i.has(a)||Dl(a,null)}),i.forEach(function(a){o.has(a)||Dl(a,l)})}Fc.set(n,e)},[e]),n}function G1(e){return e}function Z1(e,t){t===void 0&&(t=G1);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var l=t(i,r);return n.push(l),function(){n=n.filter(function(a){return a!==l})}},assignSyncMedium:function(i){for(r=!0;n.length;){var l=n;n=[],l.forEach(i)}n={push:function(a){return i(a)},filter:function(){return n}}},assignMedium:function(i){r=!0;var l=[];if(n.length){var a=n;n=[],a.forEach(i),l=n}var s=function(){var f=l;l=[],f.forEach(i)},u=function(){return Promise.resolve().then(s)};u(),n={push:function(f){l.push(f),u()},filter:function(f){return l=l.filter(f),n}}}};return o}function J1(e){e===void 0&&(e={});var t=Z1(null);return t.options=ft({async:!0,ssr:!1},e),t}var M0=function(e){var t=e.sideCar,n=R0(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return d.createElement(r,ft({},n))};M0.isSideCarExport=!0;function q1(e,t){return e.useMedium(t),M0}var I0=J1(),zl=function(){},nl=d.forwardRef(function(e,t){var n=d.useRef(null),r=d.useState({onScrollCapture:zl,onWheelCapture:zl,onTouchMoveCapture:zl}),o=r[0],i=r[1],l=e.forwardProps,a=e.children,s=e.className,u=e.removeScrollBar,f=e.enabled,p=e.shards,h=e.sideCar,g=e.noIsolation,w=e.inert,y=e.allowPinchZoom,C=e.as,m=C===void 0?"div":C,c=R0(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),v=h,x=K1([n,t]),S=ft(ft({},c),o);return d.createElement(d.Fragment,null,f&&d.createElement(v,{sideCar:I0,removeScrollBar:u,shards:p,noIsolation:g,inert:w,setCallbacks:i,allowPinchZoom:!!y,lockRef:n}),l?d.cloneElement(d.Children.only(a),ft(ft({},S),{ref:x})):d.createElement(m,ft({},S,{className:s,ref:x}),a))});nl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};nl.classNames={fullWidth:bo,zeroRight:Ao};var ey=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function ty(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=ey();return t&&e.setAttribute("nonce",t),e}function ny(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function ry(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var oy=function(){var e=0,t=null;return{add:function(n){e==0&&(t=ty())&&(ny(t,n),ry(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},iy=function(){var e=oy();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},F0=function(){var e=iy(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},ly={left:0,top:0,right:0,gap:0},jl=function(e){return parseInt(e||"",10)||0},ay=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[jl(n),jl(r),jl(o)]},sy=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return ly;var t=ay(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},uy=F0(),pi="data-scroll-locked",cy=function(e,t,n,r){var o=e.left,i=e.top,l=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Q1,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(pi,`] {
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
  
  .`).concat(Ao,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(bo,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Ao," .").concat(Ao,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(bo," .").concat(bo,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(pi,`] {
    `).concat(Y1,": ").concat(a,`px;
  }
`)},fy=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r,i=d.useMemo(function(){return sy(o)},[o]);return d.useEffect(function(){return document.body.setAttribute(pi,""),function(){document.body.removeAttribute(pi)}},[]),d.createElement(uy,{styles:cy(i,!t,o,n?"":"!important")})},Xa=!1;if(typeof window<"u")try{var xo=Object.defineProperty({},"passive",{get:function(){return Xa=!0,!0}});window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Xa=!1}var vn=Xa?{passive:!1}:!1,dy=function(e){return e.tagName==="TEXTAREA"},L0=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!dy(e)&&n[t]==="visible")},py=function(e){return L0(e,"overflowY")},my=function(e){return L0(e,"overflowX")},Lc=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=D0(e,n);if(r){var o=z0(e,n),i=o[1],l=o[2];if(i>l)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},vy=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},hy=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},D0=function(e,t){return e==="v"?py(t):my(t)},z0=function(e,t){return e==="v"?vy(t):hy(t)},yy=function(e,t){return e==="h"&&t==="rtl"?-1:1},gy=function(e,t,n,r,o){var i=yy(e,window.getComputedStyle(t).direction),l=i*r,a=n.target,s=t.contains(a),u=!1,f=l>0,p=0,h=0;do{var g=z0(e,a),w=g[0],y=g[1],C=g[2],m=y-C-i*w;(w||m)&&D0(e,a)&&(p+=m,h+=w),a=a.parentNode}while(!s&&a!==document.body||s&&(t.contains(a)||t===a));return(f&&(o&&p===0||!o&&l>p)||!f&&(o&&h===0||!o&&-l>h))&&(u=!0),u},wo=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Dc=function(e){return[e.deltaX,e.deltaY]},zc=function(e){return e&&"current"in e?e.current:e},xy=function(e,t){return e[0]===t[0]&&e[1]===t[1]},wy=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Sy=0,hn=[];function Ey(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),o=d.useState(Sy++)[0],i=d.useState(function(){return F0()})[0],l=d.useRef(e);d.useEffect(function(){l.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var y=H1([e.lockRef.current],(e.shards||[]).map(zc),!0).filter(Boolean);return y.forEach(function(C){return C.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),y.forEach(function(C){return C.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=d.useCallback(function(y,C){if("touches"in y&&y.touches.length===2)return!l.current.allowPinchZoom;var m=wo(y),c=n.current,v="deltaX"in y?y.deltaX:c[0]-m[0],x="deltaY"in y?y.deltaY:c[1]-m[1],S,k=y.target,E=Math.abs(v)>Math.abs(x)?"h":"v";if("touches"in y&&E==="h"&&k.type==="range")return!1;var _=Lc(E,k);if(!_)return!0;if(_?S=E:(S=E==="v"?"h":"v",_=Lc(E,k)),!_)return!1;if(!r.current&&"changedTouches"in y&&(v||x)&&(r.current=S),!S)return!0;var D=r.current||S;return gy(D,C,y,D==="h"?v:x,!0)},[]),s=d.useCallback(function(y){var C=y;if(!(!hn.length||hn[hn.length-1]!==i)){var m="deltaY"in C?Dc(C):wo(C),c=t.current.filter(function(S){return S.name===C.type&&S.target===C.target&&xy(S.delta,m)})[0];if(c&&c.should){C.cancelable&&C.preventDefault();return}if(!c){var v=(l.current.shards||[]).map(zc).filter(Boolean).filter(function(S){return S.contains(C.target)}),x=v.length>0?a(C,v[0]):!l.current.noIsolation;x&&C.cancelable&&C.preventDefault()}}},[]),u=d.useCallback(function(y,C,m,c){var v={name:y,delta:C,target:m,should:c};t.current.push(v),setTimeout(function(){t.current=t.current.filter(function(x){return x!==v})},1)},[]),f=d.useCallback(function(y){n.current=wo(y),r.current=void 0},[]),p=d.useCallback(function(y){u(y.type,Dc(y),y.target,a(y,e.lockRef.current))},[]),h=d.useCallback(function(y){u(y.type,wo(y),y.target,a(y,e.lockRef.current))},[]);d.useEffect(function(){return hn.push(i),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:h}),document.addEventListener("wheel",s,vn),document.addEventListener("touchmove",s,vn),document.addEventListener("touchstart",f,vn),function(){hn=hn.filter(function(y){return y!==i}),document.removeEventListener("wheel",s,vn),document.removeEventListener("touchmove",s,vn),document.removeEventListener("touchstart",f,vn)}},[]);var g=e.removeScrollBar,w=e.inert;return d.createElement(d.Fragment,null,w?d.createElement(i,{styles:wy(o)}):null,g?d.createElement(fy,{gapMode:"margin"}):null)}const Cy=q1(I0,Ey);var j0=d.forwardRef(function(e,t){return d.createElement(nl,ft({},e,{ref:t,sideCar:Cy}))});j0.classNames=nl.classNames;const ky=j0;var $y=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},yn=new WeakMap,So=new WeakMap,Eo={},Al=0,A0=function(e){return e&&(e.host||A0(e.parentNode))},_y=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=A0(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Ny=function(e,t,n,r){var o=_y(t,Array.isArray(e)?e:[e]);Eo[n]||(Eo[n]=new WeakMap);var i=Eo[n],l=[],a=new Set,s=new Set(o),u=function(p){!p||a.has(p)||(a.add(p),u(p.parentNode))};o.forEach(u);var f=function(p){!p||s.has(p)||Array.prototype.forEach.call(p.children,function(h){if(a.has(h))f(h);else{var g=h.getAttribute(r),w=g!==null&&g!=="false",y=(yn.get(h)||0)+1,C=(i.get(h)||0)+1;yn.set(h,y),i.set(h,C),l.push(h),y===1&&w&&So.set(h,!0),C===1&&h.setAttribute(n,"true"),w||h.setAttribute(r,"true")}})};return f(t),a.clear(),Al++,function(){l.forEach(function(p){var h=yn.get(p)-1,g=i.get(p)-1;yn.set(p,h),i.set(p,g),h||(So.has(p)||p.removeAttribute(r),So.delete(p)),g||p.removeAttribute(n)}),Al--,Al||(yn=new WeakMap,yn=new WeakMap,So=new WeakMap,Eo={})}},Py=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||$y(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Ny(r,o,n,"aria-hidden")):function(){return null}};const b0="Dialog",[U0,kg]=P0(b0),[Ty,vt]=U0(b0),Oy=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:l=!0}=e,a=d.useRef(null),s=d.useRef(null),[u=!1,f]=w1({prop:r,defaultProp:o,onChange:i});return d.createElement(Ty,{scope:t,triggerRef:a,contentRef:s,contentId:zn(),titleId:zn(),descriptionId:zn(),open:u,onOpenChange:f,onOpenToggle:d.useCallback(()=>f(p=>!p),[f]),modal:l},n)},Ry="DialogTrigger",My=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=vt(Ry,n),i=_t(t,o.triggerRef);return d.createElement(Ue.button,W({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":ru(o.open)},r,{ref:i,onClick:Qe(e.onClick,o.onOpenToggle)}))}),B0="DialogPortal",[Iy,V0]=U0(B0,{forceMount:void 0}),Fy=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=vt(B0,t);return d.createElement(Iy,{scope:t,forceMount:n},d.Children.map(r,l=>d.createElement(tl,{present:n||i.open},d.createElement(U1,{asChild:!0,container:o},l))))},Ka="DialogOverlay",Ly=d.forwardRef((e,t)=>{const n=V0(Ka,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=vt(Ka,e.__scopeDialog);return i.modal?d.createElement(tl,{present:r||i.open},d.createElement(Dy,W({},o,{ref:t}))):null}),Dy=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=vt(Ka,n);return d.createElement(ky,{as:nu,allowPinchZoom:!0,shards:[o.contentRef]},d.createElement(Ue.div,W({"data-state":ru(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),br="DialogContent",zy=d.forwardRef((e,t)=>{const n=V0(br,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=vt(br,e.__scopeDialog);return d.createElement(tl,{present:r||i.open},i.modal?d.createElement(jy,W({},o,{ref:t})):d.createElement(Ay,W({},o,{ref:t})))}),jy=d.forwardRef((e,t)=>{const n=vt(br,e.__scopeDialog),r=d.useRef(null),o=_t(t,n.contentRef,r);return d.useEffect(()=>{const i=r.current;if(i)return Py(i)},[]),d.createElement(W0,W({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Qe(e.onCloseAutoFocus,i=>{var l;i.preventDefault(),(l=n.triggerRef.current)===null||l===void 0||l.focus()}),onPointerDownOutside:Qe(e.onPointerDownOutside,i=>{const l=i.detail.originalEvent,a=l.button===0&&l.ctrlKey===!0;(l.button===2||a)&&i.preventDefault()}),onFocusOutside:Qe(e.onFocusOutside,i=>i.preventDefault())}))}),Ay=d.forwardRef((e,t)=>{const n=vt(br,e.__scopeDialog),r=d.useRef(!1),o=d.useRef(!1);return d.createElement(W0,W({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var l;if((l=e.onCloseAutoFocus)===null||l===void 0||l.call(e,i),!i.defaultPrevented){var a;r.current||(a=n.triggerRef.current)===null||a===void 0||a.focus(),i.preventDefault()}r.current=!1,o.current=!1},onInteractOutside:i=>{var l,a;(l=e.onInteractOutside)===null||l===void 0||l.call(e,i),i.defaultPrevented||(r.current=!0,i.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const s=i.target;((a=n.triggerRef.current)===null||a===void 0?void 0:a.contains(s))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&o.current&&i.preventDefault()}}))}),W0=d.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...l}=e,a=vt(br,n),s=d.useRef(null),u=_t(t,s);return W1(),d.createElement(d.Fragment,null,d.createElement(F1,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},d.createElement(R1,W({role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":ru(a.open)},l,{ref:u,onDismiss:()=>a.onOpenChange(!1)}))),!1)}),by="DialogTitle",Uy=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=vt(by,n);return d.createElement(Ue.h2,W({id:o.titleId},r,{ref:t}))}),By="DialogDescription",Vy=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=vt(By,n);return d.createElement(Ue.p,W({id:o.descriptionId},r,{ref:t}))});function ru(e){return e?"open":"closed"}const Wy=Oy,Hy=My,Qy=Fy,Yy=Ly,Xy=zy,Ky=Uy,Gy=Vy;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),H0=(e,t)=>{const n=d.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:a="",children:s,...u},f)=>d.createElement("svg",{ref:f,...Zy,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${Jy(e)}`,a].join(" "),...u},[...t.map(([p,h])=>d.createElement(p,h)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=H0("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=H0("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),tg=d.forwardRef((e,t)=>d.createElement(Ue.label,W({},e,{ref:t,onMouseDown:n=>{var r;(r=e.onMouseDown)===null||r===void 0||r.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault()}}))),[ou,$g]=P0("Form"),Q0="Form",[ng,Xr]=ou(Q0),[rg,Y0]=ou(Q0),og=d.forwardRef((e,t)=>{const{__scopeForm:n,onClearServerErrors:r=()=>{},...o}=e,i=d.useRef(null),l=_t(t,i),[a,s]=d.useState({}),u=d.useCallback(T=>a[T],[a]),f=d.useCallback((T,I)=>s(L=>{var z;return{...L,[T]:{...(z=L[T])!==null&&z!==void 0?z:{},...I}}}),[]),p=d.useCallback(T=>{s(I=>({...I,[T]:void 0})),c(I=>({...I,[T]:{}}))},[]),[h,g]=d.useState({}),w=d.useCallback(T=>{var I;return(I=h[T])!==null&&I!==void 0?I:[]},[h]),y=d.useCallback((T,I)=>{g(L=>{var z;return{...L,[T]:[...(z=L[T])!==null&&z!==void 0?z:[],I]}})},[]),C=d.useCallback((T,I)=>{g(L=>{var z;return{...L,[T]:((z=L[T])!==null&&z!==void 0?z:[]).filter(Me=>Me.id!==I)}})},[]),[m,c]=d.useState({}),v=d.useCallback(T=>{var I;return(I=m[T])!==null&&I!==void 0?I:{}},[m]),x=d.useCallback((T,I)=>{c(L=>{var z;return{...L,[T]:{...(z=L[T])!==null&&z!==void 0?z:{},...I}}})},[]),[S,k]=d.useState({}),E=d.useCallback((T,I)=>{k(L=>{const z=new Set(L[T]).add(I);return{...L,[T]:z}})},[]),_=d.useCallback((T,I)=>{k(L=>{const z=new Set(L[T]);return z.delete(I),{...L,[T]:z}})},[]),D=d.useCallback(T=>{var I;return Array.from((I=S[T])!==null&&I!==void 0?I:[]).join(" ")||void 0},[S]);return d.createElement(ng,{scope:n,getFieldValidity:u,onFieldValidityChange:f,getFieldCustomMatcherEntries:w,onFieldCustomMatcherEntryAdd:y,onFieldCustomMatcherEntryRemove:C,getFieldCustomErrors:v,onFieldCustomErrorsChange:x,onFieldValiditionClear:p},d.createElement(rg,{scope:n,onFieldMessageIdAdd:E,onFieldMessageIdRemove:_,getFieldDescription:D},d.createElement(Ue.form,W({},o,{ref:l,onInvalid:Qe(e.onInvalid,T=>{const I=K0(T.currentTarget);I===T.target&&I.focus(),T.preventDefault()}),onSubmit:Qe(e.onSubmit,r,{checkForDefaultPrevented:!1}),onReset:Qe(e.onReset,r)}))))}),X0="FormField",[ig,iu]=ou(X0),lg=d.forwardRef((e,t)=>{const{__scopeForm:n,name:r,serverInvalid:o=!1,...i}=e,a=Xr(X0,n).getFieldValidity(r),s=zn();return d.createElement(ig,{scope:n,id:s,name:r,serverInvalid:o},d.createElement(Ue.div,W({"data-valid":au(a,o),"data-invalid":su(a,o)},i,{ref:t})))}),jc="FormLabel",ag=d.forwardRef((e,t)=>{const{__scopeForm:n,...r}=e,o=Xr(jc,n),i=iu(jc,n),l=r.htmlFor||i.id,a=o.getFieldValidity(i.name);return d.createElement(tg,W({"data-valid":au(a,i.serverInvalid),"data-invalid":su(a,i.serverInvalid)},r,{ref:t,htmlFor:l}))}),bl="FormControl",sg=d.forwardRef((e,t)=>{const{__scopeForm:n,...r}=e,o=Xr(bl,n),i=iu(bl,n),l=Y0(bl,n),a=d.useRef(null),s=_t(t,a),u=r.name||i.name,f=r.id||i.id,p=o.getFieldCustomMatcherEntries(u),{onFieldValidityChange:h,onFieldCustomErrorsChange:g,onFieldValiditionClear:w}=o,y=d.useCallback(async c=>{if(G0(c.validity)){const L=Ul(c.validity);h(u,L);return}const v=c.form?new FormData(c.form):new FormData,x=[c.value,v],S=[],k=[];p.forEach(L=>{yg(L,x)?k.push(L):gg(L)&&S.push(L)});const E=S.map(({id:L,match:z})=>[L,z(...x)]),_=Object.fromEntries(E),D=Object.values(_).some(Boolean),T=D;c.setCustomValidity(T?Ur:"");const I=Ul(c.validity);if(h(u,I),g(u,_),!D&&k.length>0){const L=k.map(({id:R,match:F})=>F(...x).then(O=>[R,O])),z=await Promise.all(L),Me=Object.fromEntries(z),ot=Object.values(Me).some(Boolean);c.setCustomValidity(ot?Ur:"");const Nt=Ul(c.validity);h(u,Nt),g(u,Me)}},[p,u,g,h]);d.useEffect(()=>{const c=a.current;if(c){const v=()=>y(c);return c.addEventListener("change",v),()=>c.removeEventListener("change",v)}},[y]);const C=d.useCallback(()=>{const c=a.current;c&&(c.setCustomValidity(""),w(u))},[u,w]);d.useEffect(()=>{var c;const v=(c=a.current)===null||c===void 0?void 0:c.form;if(v)return v.addEventListener("reset",C),()=>v.removeEventListener("reset",C)},[C]),d.useEffect(()=>{const c=a.current,v=c==null?void 0:c.closest("form");if(v&&i.serverInvalid){const x=K0(v);x===c&&x.focus()}},[i.serverInvalid]);const m=o.getFieldValidity(u);return d.createElement(Ue.input,W({"data-valid":au(m,i.serverInvalid),"data-invalid":su(m,i.serverInvalid),"aria-invalid":i.serverInvalid?!0:void 0,"aria-describedby":l.getFieldDescription(u),title:""},r,{ref:s,id:f,name:u,onInvalid:Qe(e.onInvalid,c=>{const v=c.currentTarget;y(v)}),onChange:Qe(e.onChange,c=>{C()})}))}),Ur="This value is not valid",ug={badInput:Ur,patternMismatch:"This value does not match the required pattern",rangeOverflow:"This value is too large",rangeUnderflow:"This value is too small",stepMismatch:"This value does not match the required step",tooLong:"This value is too long",tooShort:"This value is too short",typeMismatch:"This value does not match the required type",valid:void 0,valueMissing:"This value is missing"},rl="FormMessage",cg=d.forwardRef((e,t)=>{const{match:n,name:r,...o}=e,i=iu(rl,e.__scopeForm),l=r??i.name;return n===void 0?d.createElement(lu,W({},o,{ref:t,name:l}),e.children||Ur):typeof n=="function"?d.createElement(dg,W({match:n},o,{ref:t,name:l})):d.createElement(fg,W({match:n},o,{ref:t,name:l}))}),fg=d.forwardRef((e,t)=>{const{match:n,forceMatch:r=!1,name:o,children:i,...l}=e,s=Xr(rl,l.__scopeForm).getFieldValidity(o);return r||(s==null?void 0:s[n])?d.createElement(lu,W({ref:t},l,{name:o}),i??ug[n]):null}),dg=d.forwardRef((e,t)=>{const{match:n,forceMatch:r=!1,name:o,id:i,children:l,...a}=e,s=Xr(rl,a.__scopeForm),u=d.useRef(null),f=_t(t,u),p=zn(),h=i??p,g=d.useMemo(()=>({id:h,match:n}),[h,n]),{onFieldCustomMatcherEntryAdd:w,onFieldCustomMatcherEntryRemove:y}=s;d.useEffect(()=>(w(o,g),()=>y(o,g.id)),[g,o,w,y]);const C=s.getFieldValidity(o),c=s.getFieldCustomErrors(o)[h];return r||C&&!G0(C)&&c?d.createElement(lu,W({id:h,ref:f},a,{name:o}),l??Ur):null}),lu=d.forwardRef((e,t)=>{const{__scopeForm:n,id:r,name:o,...i}=e,l=Y0(rl,n),a=zn(),s=r??a,{onFieldMessageIdAdd:u,onFieldMessageIdRemove:f}=l;return d.useEffect(()=>(u(o,s),()=>f(o,s)),[o,s,u,f]),d.createElement(Ue.span,W({id:s},i,{ref:t}))}),pg=d.forwardRef((e,t)=>{const{__scopeForm:n,...r}=e;return d.createElement(Ue.button,W({type:"submit"},r,{ref:t}))});function Ul(e){const t={};for(const n in e)t[n]=e[n];return t}function mg(e){return e instanceof HTMLElement}function vg(e){return"validity"in e}function hg(e){return vg(e)&&(e.validity.valid===!1||e.getAttribute("aria-invalid")==="true")}function K0(e){const t=e.elements,[n]=Array.from(t).filter(mg).filter(hg);return n}function yg(e,t){return e.match.constructor.name==="AsyncFunction"||xg(e.match,t)}function gg(e){return e.match.constructor.name==="Function"}function xg(e,t){return e(...t)instanceof Promise}function G0(e){let t=!1;for(const n in e){const r=n;if(r!=="valid"&&r!=="customError"&&e[r]){t=!0;break}}return t}function au(e,t){if((e==null?void 0:e.valid)===!0&&!t)return!0}function su(e,t){if((e==null?void 0:e.valid)===!1||t)return!0}const wg=og,Bl=lg,Vl=ag,Wl=sg,ir=cg,Sg=pg;function Eg(){return N.jsx("div",{children:N.jsx(Qy,{children:N.jsx(Yy,{className:"fixed inset-0",children:N.jsxs(Xy,{className:"data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-green-500 p-[25px]  focus:outline-none",children:[N.jsx(Ky,{className:"m-0 font-JetBrains font-bold text-[32px] text-center",children:"Work Request"}),N.jsx(Gy,{className:"text-green-800 mb-6 text-center",children:"Write all things you need and I go make the budget"}),N.jsx("div",{className:"",children:N.jsxs(wg,{className:"w-[400px] relative",children:[N.jsxs(Bl,{className:" grid mb-[2px]",name:"name",children:[N.jsxs("div",{className:"flex items-baseline justify-between",children:[N.jsx(Vl,{className:"text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900",children:"Full Name"}),N.jsx(ir,{className:" text-red-600 font-Inter font-semibold text-sm   opacity-[0.8]",match:"valueMissing",children:"Insert your name"}),N.jsx(ir,{className:" text-red-600 font-Inter font-semibold text-sm opacity-[0.8]",match:"typeMismatch",children:"--"})]}),N.jsx(Wl,{asChild:!0,children:N.jsx("input",{className:"box-border font-JetBrains tracking-wider w-full bg-zinc-900 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-lg leading-none text-indigo-400 outline-none",type:"name",required:!0})})]}),N.jsxs(Bl,{className:" grid mb-[2px]",name:"email",children:[N.jsxs("div",{className:"flex items-baseline justify-between",children:[N.jsx(Vl,{className:"text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900",children:"Email"}),N.jsx(ir,{className:" text-red-600 font-Inter font-semibold text-sm opacity-[0.8]",match:"valueMissing",children:"Insert your email"}),N.jsx(ir,{className:" text-red-600 font-Inter font-semibold text-sm opacity-[0.8]",match:"typeMismatch",children:"Please insert a valid email"})]}),N.jsx(Wl,{asChild:!0,children:N.jsx("input",{className:"box-border font-JetBrains tracking-wider w-full bg-zinc-900 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-lg leading-none text-indigo-400 outline-none",type:"email",required:!0})})]}),N.jsxs("div",{className:"",children:[N.jsxs(Bl,{className:"grid mb-[10px] ",name:"question",children:[N.jsxs("div",{className:"flex items-baseline justify-between",children:[N.jsx(Vl,{className:"text-lg font-semibold font-JetBrains leading-[35px] text-zinc-900",children:"You need"}),N.jsx(ir,{className:"text-red-600 font-Inter font-semibold text-sm opacity-[0.8]",match:"valueMissing",children:"Please enter the work"})]}),N.jsx(Wl,{asChild:!0,children:N.jsx("textarea",{className:"box-border font-Inter text-lg text-indigo-400 bg-zinc-900 w-full inline-flex appearance-none items-center justify-center rounded-[4px] h-56 line p-[20px]  leading-6 outline-none resize-y",required:!0})})]}),N.jsx(Sg,{asChild:!0,children:N.jsx("button",{type:"submit",className:"box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[20px] hover:bg-indigo-600 hover:text-slate-200 bg-zinc-900 border-4 text-indigo-400 border-indigo-400 border-solid bg-none p-[20px] font-medium leading-none shadow-[0_2px_10px]  outline-none mt-[2px]",children:"Send Work"})})]})]})})]})})})})}function Co(){return N.jsxs("div",{className:"flex gap-10",children:[N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"}),N.jsx("div",{className:"animate-spining",children:"+"})]})}function Cg(){const[e,t]=d.useState(!0),n=()=>{t(!e)};return N.jsx("div",{className:"mx-auto px-5",children:N.jsxs("div",{className:`${e&&"dark"} min-h-screen`,children:[N.jsx(yo,{cascade:!0,damping:.2,triggerOnce:!0,children:N.jsx(Wy,{children:N.jsxs("main",{className:"min-h-screen dark:bg-zinc-900 bg-slate-200 outline-none selection:bg-red-500 overflow-hidden",children:[N.jsx("div",{className:"h-48",children:N.jsxs(yo,{direction:"down",children:[N.jsx("h1",{className:"absolute left-6 top-6 font-normal celular:text-1xl lg:text-3xl font-Inter text-zinc-900 dark:text-slate-200",children:N.jsxs("a",{children:["PORTI",N.jsx("a",{className:" celular:text-lg lg:text-4xl font-Pixel text-blue-600  dark:text-indigo-500",children:"FOLIO"})]})}),N.jsx("div",{className:" absolute hidden lg:right-6 lg:top-6 ",children:N.jsxs("div",{className:"flex flex-row gap-6 font-normal font-JetBrains",children:[N.jsx("h1",{className:" text-4xl dark:text-slate-200",children:N.jsx("a",{children:"SOBRE"})}),N.jsx("h1",{className:" text-4xl dark:text-slate-200",children:N.jsx("a",{children:"PROJETOS"})}),N.jsx("h1",{className:" text-4xl dark:text-slate-200",children:N.jsx("a",{children:"CONTATO"})})]})})]})}),N.jsxs("div",{children:[N.jsx(yo,{direction:"down",children:N.jsx("h2",{className:" absolute animate-wiggle left-1/4 font-Pixel font-light lg:top-0 lg:text-3xl text-blue-400 dark:text-indigo-600 ",children:"I am..."})}),N.jsxs(yo,{direction:"up",children:[N.jsxs("h1",{className:" celular:relative celular:text-center celular:text-sm lg:left-72 font-JetBrains lg:text-left celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:[N.jsx(v1,{sequence:["Desginer",1e3,"Web Developer",1e3,"Music Producer",1e3,"Bruno B. Mathias",1e3],wrapper:"span",speed:50,style:{fontSize:"2em",display:"inline-block"},repeat:1/0}),N.jsx("blockquote",{className:" dark:text-slate-200 text-xl lg:text-left mt-14",children:N.jsx("span",{className:" bg-zinc-800 p-3 rounded-2xl",children:'"You dont need to make, I do"'})})]}),N.jsxs("div",{className:"flex flex-col translate-x-1/2 -translate-y-3/4 opacity-45",children:[N.jsx("div",{className:" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:N.jsx("div",{className:"flex gap-10",children:N.jsx(Co,{})})}),N.jsx("div",{className:" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:N.jsx("div",{className:"flex gap-10",children:N.jsx(Co,{})})}),N.jsx("div",{className:" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:N.jsx("div",{className:"flex gap-10",children:N.jsx(Co,{})})}),N.jsx("div",{className:" celular:relative max-w-lgflex-wrap  celular:text-center celular:text-sm lg:left-72 font-JetBrains celular:m-8 celular:top-8 font-bold lg:top-16 lg:text-3xl dark:text-slate-200",children:N.jsx(Co,{})})]})]})]}),N.jsx(Hy,{asChild:!0,children:N.jsx("button",{className:"transition ease-in-out hover:-translate-y-1 hover:scale-110 absolute right-1/4 bottom-1/4 text-violet11  hover:shadow-glowing inline-flex h-[35px] items-center justify-center rounded-[20px] border-solid border-4 border-green-500 dark:border-green-600 dark:text-green-500 dark:hover:border-indigo-600 dark:hover:text-indigo-600 text-green-500 py-[50px] px-[120px] font-JetBrains leading-none text-2xl  focus:outline-none",children:"Call-me"})}),N.jsx(Eg,{}),N.jsx("div",{className:"dark:bg-zinc-900 bg-slate-300"}),N.jsx("div",{className:"bg-slate-200"})]})})}),N.jsx("button",{onClick:n,className:"absolute w-16 h-16 right-16 bottom-16 p-4 rounded-full font-medium font-Danci dark:bg-slate-200 bg-zinc-900 text-slate-200 dark:text-zinc-900",children:e?N.jsx(eg,{className:"absolute w-8 h-8 left-4 top-4"}):N.jsx(qy,{className:"absolute w-8 h-8 left-4 top-4"})})]})})}Ql.createRoot(document.getElementById("root")).render(N.jsx(Uo.StrictMode,{children:N.jsx(Cg,{})}));
