(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var ch={exports:{}},la={},uh={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function Wv(){if(Bm)return pt;Bm=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(F,ne,Ie){this.props=F,this.context=ne,this.refs=E,this.updater=Ie||x}S.prototype.isReactComponent={},S.prototype.setState=function(F,ne){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ne,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(F,ne,Ie){this.props=F,this.context=ne,this.refs=E,this.updater=Ie||x}var L=D.prototype=new y;L.constructor=D,M(L,S.prototype),L.isPureReactComponent=!0;var R=Array.isArray,k=Object.prototype.hasOwnProperty,N={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function q(F,ne,Ie){var Z,ce={},Me=null,ve=null;if(ne!=null)for(Z in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)k.call(ne,Z)&&!U.hasOwnProperty(Z)&&(ce[Z]=ne[Z]);var Te=arguments.length-2;if(Te===1)ce.children=Ie;else if(1<Te){for(var Ne=Array(Te),Ze=0;Ze<Te;Ze++)Ne[Ze]=arguments[Ze+2];ce.children=Ne}if(F&&F.defaultProps)for(Z in Te=F.defaultProps,Te)ce[Z]===void 0&&(ce[Z]=Te[Z]);return{$$typeof:o,type:F,key:Me,ref:ve,props:ce,_owner:N.current}}function C(F,ne){return{$$typeof:o,type:F.type,key:ne,ref:F.ref,props:F.props,_owner:F._owner}}function b(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function H(F){var ne={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ie){return ne[Ie]})}var oe=/\/+/g;function ee(F,ne){return typeof F=="object"&&F!==null&&F.key!=null?H(""+F.key):ne.toString(36)}function he(F,ne,Ie,Z,ce){var Me=typeof F;(Me==="undefined"||Me==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case o:case e:ve=!0}}if(ve)return ve=F,ce=ce(ve),F=Z===""?"."+ee(ve,0):Z,R(ce)?(Ie="",F!=null&&(Ie=F.replace(oe,"$&/")+"/"),he(ce,ne,Ie,"",function(Ze){return Ze})):ce!=null&&(b(ce)&&(ce=C(ce,Ie+(!ce.key||ve&&ve.key===ce.key?"":(""+ce.key).replace(oe,"$&/")+"/")+F)),ne.push(ce)),1;if(ve=0,Z=Z===""?".":Z+":",R(F))for(var Te=0;Te<F.length;Te++){Me=F[Te];var Ne=Z+ee(Me,Te);ve+=he(Me,ne,Ie,Ne,ce)}else if(Ne=_(F),typeof Ne=="function")for(F=Ne.call(F),Te=0;!(Me=F.next()).done;)Me=Me.value,Ne=Z+ee(Me,Te++),ve+=he(Me,ne,Ie,Ne,ce);else if(Me==="object")throw ne=String(F),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function fe(F,ne,Ie){if(F==null)return F;var Z=[],ce=0;return he(F,Z,"","",function(Me){return ne.call(Ie,Me,ce++)}),Z}function se(F){if(F._status===-1){var ne=F._result;ne=ne(),ne.then(function(Ie){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ie)},function(Ie){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ie)}),F._status===-1&&(F._status=0,F._result=ne)}if(F._status===1)return F._result.default;throw F._result}var le={current:null},z={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:z,ReactCurrentOwner:N};function re(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:fe,forEach:function(F,ne,Ie){fe(F,function(){ne.apply(this,arguments)},Ie)},count:function(F){var ne=0;return fe(F,function(){ne++}),ne},toArray:function(F){return fe(F,function(ne){return ne})||[]},only:function(F){if(!b(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},pt.Component=S,pt.Fragment=t,pt.Profiler=s,pt.PureComponent=D,pt.StrictMode=i,pt.Suspense=d,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,pt.act=re,pt.cloneElement=function(F,ne,Ie){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Z=M({},F.props),ce=F.key,Me=F.ref,ve=F._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,ve=N.current),ne.key!==void 0&&(ce=""+ne.key),F.type&&F.type.defaultProps)var Te=F.type.defaultProps;for(Ne in ne)k.call(ne,Ne)&&!U.hasOwnProperty(Ne)&&(Z[Ne]=ne[Ne]===void 0&&Te!==void 0?Te[Ne]:ne[Ne])}var Ne=arguments.length-2;if(Ne===1)Z.children=Ie;else if(1<Ne){Te=Array(Ne);for(var Ze=0;Ze<Ne;Ze++)Te[Ze]=arguments[Ze+2];Z.children=Te}return{$$typeof:o,type:F.type,key:ce,ref:Me,props:Z,_owner:ve}},pt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},pt.createElement=q,pt.createFactory=function(F){var ne=q.bind(null,F);return ne.type=F,ne},pt.createRef=function(){return{current:null}},pt.forwardRef=function(F){return{$$typeof:u,render:F}},pt.isValidElement=b,pt.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:se}},pt.memo=function(F,ne){return{$$typeof:f,type:F,compare:ne===void 0?null:ne}},pt.startTransition=function(F){var ne=z.transition;z.transition={};try{F()}finally{z.transition=ne}},pt.unstable_act=re,pt.useCallback=function(F,ne){return le.current.useCallback(F,ne)},pt.useContext=function(F){return le.current.useContext(F)},pt.useDebugValue=function(){},pt.useDeferredValue=function(F){return le.current.useDeferredValue(F)},pt.useEffect=function(F,ne){return le.current.useEffect(F,ne)},pt.useId=function(){return le.current.useId()},pt.useImperativeHandle=function(F,ne,Ie){return le.current.useImperativeHandle(F,ne,Ie)},pt.useInsertionEffect=function(F,ne){return le.current.useInsertionEffect(F,ne)},pt.useLayoutEffect=function(F,ne){return le.current.useLayoutEffect(F,ne)},pt.useMemo=function(F,ne){return le.current.useMemo(F,ne)},pt.useReducer=function(F,ne,Ie){return le.current.useReducer(F,ne,Ie)},pt.useRef=function(F){return le.current.useRef(F)},pt.useState=function(F){return le.current.useState(F)},pt.useSyncExternalStore=function(F,ne,Ie){return le.current.useSyncExternalStore(F,ne,Ie)},pt.useTransition=function(){return le.current.useTransition()},pt.version="18.3.1",pt}var zm;function Gd(){return zm||(zm=1,uh.exports=Wv()),uh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function jv(){if(Hm)return la;Hm=1;var o=Gd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,f){var m,g={},_=null,x=null;f!==void 0&&(_=""+f),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)i.call(d,m)&&!a.hasOwnProperty(m)&&(g[m]=d[m]);if(u&&u.defaultProps)for(m in d=u.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:u,key:_,ref:x,props:g,_owner:s.current}}return la.Fragment=t,la.jsx=c,la.jsxs=c,la}var Vm;function Xv(){return Vm||(Vm=1,ch.exports=jv()),ch.exports}var Mt=Xv(),mn=Gd(),Ol={},hh={exports:{}},Wn={},dh={exports:{}},fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function qv(){return Gm||(Gm=1,function(o){function e(z,ae){var re=z.length;z.push(ae);e:for(;0<re;){var F=re-1>>>1,ne=z[F];if(0<s(ne,ae))z[F]=ae,z[re]=ne,re=F;else break e}}function t(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var ae=z[0],re=z.pop();if(re!==ae){z[0]=re;e:for(var F=0,ne=z.length,Ie=ne>>>1;F<Ie;){var Z=2*(F+1)-1,ce=z[Z],Me=Z+1,ve=z[Me];if(0>s(ce,re))Me<ne&&0>s(ve,ce)?(z[F]=ve,z[Me]=re,F=Me):(z[F]=ce,z[Z]=re,F=Z);else if(Me<ne&&0>s(ve,re))z[F]=ve,z[Me]=re,F=Me;else break e}}return ae}function s(z,ae){var re=z.sortIndex-ae.sortIndex;return re!==0?re:z.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var d=[],f=[],m=1,g=null,_=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var ae=t(f);ae!==null;){if(ae.callback===null)i(f);else if(ae.startTime<=z)i(f),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=t(f)}}function R(z){if(E=!1,L(z),!M)if(t(d)!==null)M=!0,se(k);else{var ae=t(f);ae!==null&&le(R,ae.startTime-z)}}function k(z,ae){M=!1,E&&(E=!1,y(q),q=-1),x=!0;var re=_;try{for(L(ae),g=t(d);g!==null&&(!(g.expirationTime>ae)||z&&!H());){var F=g.callback;if(typeof F=="function"){g.callback=null,_=g.priorityLevel;var ne=F(g.expirationTime<=ae);ae=o.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(d)&&i(d),L(ae)}else i(d);g=t(d)}if(g!==null)var Ie=!0;else{var Z=t(f);Z!==null&&le(R,Z.startTime-ae),Ie=!1}return Ie}finally{g=null,_=re,x=!1}}var N=!1,U=null,q=-1,C=5,b=-1;function H(){return!(o.unstable_now()-b<C)}function oe(){if(U!==null){var z=o.unstable_now();b=z;var ae=!0;try{ae=U(!0,z)}finally{ae?ee():(N=!1,U=null)}}else N=!1}var ee;if(typeof D=="function")ee=function(){D(oe)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,fe=he.port2;he.port1.onmessage=oe,ee=function(){fe.postMessage(null)}}else ee=function(){S(oe,0)};function se(z){U=z,N||(N=!0,ee())}function le(z,ae){q=S(function(){z(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){M||x||(M=!0,se(k))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(z){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var re=_;_=ae;try{return z()}finally{_=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,ae){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=_;_=z;try{return ae()}finally{_=re}},o.unstable_scheduleCallback=function(z,ae,re){var F=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?F+re:F):re=F,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,z={id:m++,callback:ae,priorityLevel:z,startTime:re,expirationTime:ne,sortIndex:-1},re>F?(z.sortIndex=re,e(f,z),t(d)===null&&z===t(f)&&(E?(y(q),q=-1):E=!0,le(R,re-F))):(z.sortIndex=ne,e(d,z),M||x||(M=!0,se(k))),z},o.unstable_shouldYield=H,o.unstable_wrapCallback=function(z){var ae=_;return function(){var re=_;_=ae;try{return z.apply(this,arguments)}finally{_=re}}}}(fh)),fh}var Wm;function Yv(){return Wm||(Wm=1,dh.exports=qv()),dh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function Kv(){if(jm)return Wn;jm=1;var o=Gd(),e=Yv();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return d.call(g,n)?!0:d.call(m,n)?!1:f.test(n)?g[n]=!0:(m[n]=!0,!1)}function x(n,r,l,h){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,h){if(r===null||typeof r>"u"||x(n,r,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,h,p,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,D);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,D);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,D);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,h){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,h)&&(l=null),h||p===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,h=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?n.setAttributeNS(h,r,l):n.setAttribute(r,l))))}var R=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),H=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),z=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,F;function ne(n){if(F===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);F=r&&r[1]||""}return`
`+F+n}var Ie=!1;function Z(n,r){if(!n||Ie)return"";Ie=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(Q){var h=Q}Reflect.construct(n,[],r)}else{try{r.call()}catch(Q){h=Q}n.call(r.prototype)}else{try{throw Error()}catch(Q){h=Q}n()}}catch(Q){if(Q&&h&&typeof Q.stack=="string"){for(var p=Q.stack.split(`
`),v=h.stack.split(`
`),T=p.length-1,I=v.length-1;1<=T&&0<=I&&p[T]!==v[I];)I--;for(;1<=T&&0<=I;T--,I--)if(p[T]!==v[I]){if(T!==1||I!==1)do if(T--,I--,0>I||p[T]!==v[I]){var O=`
`+p[T].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=T&&0<=I);break}}}finally{Ie=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function ce(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case N:return"Portal";case C:return"Profiler";case q:return"StrictMode";case ee:return"Suspense";case he:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case oe:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return r=n.displayName||null,r!==null?r:Me(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return Me(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(r);case 8:return r===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ze(n){var r=Ne(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),h=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){h=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function It(n){n._valueTracker||(n._valueTracker=Ze(n))}function yt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return n&&(h=Ne(n)?n.checked?"true":"false":n.value),n=h,n!==l?(r.setValue(n),!0):!1}function Ot(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function B(n,r){var l=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function wn(n,r){var l=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;l=Te(r.value!=null?r.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function mt(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function dt(n,r){mt(n,r);var l=Te(r.value),h=r.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Pt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Pt(n,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Xe(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Pt(n,r,l){(r!=="number"||Ot(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var We=Array.isArray;function P(n,r,l,h){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&h&&(n[l].defaultSelected=!0)}else{for(l=""+Te(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,h&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function w(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(We(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Te(l)}}function pe(n,r){var l=Te(r.value),h=Te(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function ge(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var we,Ue=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,h,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,h,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=we.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ut(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){ke.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Se[r]=Se[n]})});function Ye(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Se.hasOwnProperty(n)&&Se[n]?(""+r).trim():r+"px"}function Je(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Ye(l,r[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,p):n[l]=p}}var Be=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,r){if(r){if(Be[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function rt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ae=null,ie=null,de=null;function Pe(n){if(n=qo(n)){if(typeof Ae!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Qa(r),Ae(n.stateNode,n.type,r))}}function Ce(n){ie?de?de.push(n):de=[n]:ie=n}function st(){if(ie){var n=ie,r=de;if(de=ie=null,Pe(n),r)for(n=0;n<r.length;n++)Pe(r[n])}}function Bt(n,r){return n(r)}function en(){}var Et=!1;function kn(n,r,l){if(Et)return n(r,l);Et=!0;try{return Bt(n,r,l)}finally{Et=!1,(ie!==null||de!==null)&&(en(),st())}}function An(n,r){var l=n.stateNode;if(l===null)return null;var h=Qa(l);if(h===null)return null;l=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ms=!1;if(u)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Ms=!1}function zi(n,r,l,h,p,v,T,I,O){var Q=Array.prototype.slice.call(arguments,3);try{r.apply(l,Q)}catch(_e){this.onError(_e)}}var Hi=!1,jr=null,Xr=!1,cr=null,La={onError:function(n){Hi=!0,jr=n}};function Es(n,r,l,h,p,v,T,I,O){Hi=!1,jr=null,zi.apply(La,arguments)}function Da(n,r,l,h,p,v,T,I,O){if(Es.apply(this,arguments),Hi){if(Hi){var Q=jr;Hi=!1,jr=null}else throw Error(t(198));Xr||(Xr=!0,cr=Q)}}function Ri(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ia(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Na(n){if(Ri(n)!==n)throw Error(t(188))}function Dc(n){var r=n.alternate;if(!r){if(r=Ri(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,h=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return Na(p),n;if(v===h)return Na(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=v;else{for(var T=!1,I=p.child;I;){if(I===l){T=!0,l=p,h=v;break}if(I===h){T=!0,h=p,l=v;break}I=I.sibling}if(!T){for(I=v.child;I;){if(I===l){T=!0,l=v,h=p;break}if(I===h){T=!0,h=v,l=p;break}I=I.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Ua(n){return n=Dc(n),n!==null?Fa(n):null}function Fa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Fa(n);if(r!==null)return r;n=n.sibling}return null}var A=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,J=e.unstable_shouldYield,te=e.unstable_requestPaint,V=e.unstable_now,xe=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,tt=e.unstable_LowPriority,nt=e.unstable_IdlePriority,je=null,ot=null;function wt(n){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(je,n,void 0,(n.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:qe,Vt=Math.log,St=Math.LN2;function qe(n){return n>>>=0,n===0?32:31-(Vt(n)/St|0)|0}var qt=64,xt=4194304;function dn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function di(n,r){var l=n.pendingLanes;if(l===0)return 0;var h=0,p=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var I=T&~p;I!==0?h=dn(I):(v&=T,v!==0&&(h=dn(v)))}else T=l&~p,T!==0?h=dn(T):v!==0&&(h=dn(v));if(h===0)return 0;if(r!==0&&r!==h&&!(r&p)&&(p=h&-h,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if(h&4&&(h|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=h;0<r;)l=31-At(r),p=1<<l,h|=n[l],r&=~p;return h}function Rn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qr(n,r){for(var l=n.suspendedLanes,h=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-At(v),I=1<<T,O=p[T];O===-1?(!(I&l)||I&h)&&(p[T]=Rn(I,r)):O<=r&&(n.expiredLanes|=I),v&=~I}}function Nt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bn(){var n=qt;return qt<<=1,!(qt&4194240)&&(qt=64),n}function _n(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function $t(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-At(r),n[r]=l}function vn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-At(l),v=1<<p;r[p]=0,h[p]=-1,n[p]=-1,l&=~v}}function Yr(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var h=31-At(l),p=1<<h;p&r|n[h]&r&&(n[h]|=r),l&=~p}}var gt=0;function _f(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var vf,Ic,yf,xf,Sf,Nc=!1,Oa=[],ur=null,hr=null,dr=null,Lo=new Map,Do=new Map,fr=[],d0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mf(n,r){switch(n){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Lo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(r.pointerId)}}function Io(n,r,l,h,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:v,targetContainers:[p]},r!==null&&(r=qo(r),r!==null&&Ic(r)),n):(n.eventSystemFlags|=h,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function f0(n,r,l,h,p){switch(r){case"focusin":return ur=Io(ur,n,r,l,h,p),!0;case"dragenter":return hr=Io(hr,n,r,l,h,p),!0;case"mouseover":return dr=Io(dr,n,r,l,h,p),!0;case"pointerover":var v=p.pointerId;return Lo.set(v,Io(Lo.get(v)||null,n,r,l,h,p)),!0;case"gotpointercapture":return v=p.pointerId,Do.set(v,Io(Do.get(v)||null,n,r,l,h,p)),!0}return!1}function Ef(n){var r=Kr(n.target);if(r!==null){var l=Ri(r);if(l!==null){if(r=l.tag,r===13){if(r=Ia(l),r!==null){n.blockedOn=r,Sf(n.priority,function(){yf(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ka(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Fc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);Ct=h,l.target.dispatchEvent(h),Ct=null}else return r=qo(l),r!==null&&Ic(r),n.blockedOn=l,!1;r.shift()}return!0}function Tf(n,r,l){ka(n)&&l.delete(r)}function p0(){Nc=!1,ur!==null&&ka(ur)&&(ur=null),hr!==null&&ka(hr)&&(hr=null),dr!==null&&ka(dr)&&(dr=null),Lo.forEach(Tf),Do.forEach(Tf)}function No(n,r){n.blockedOn===r&&(n.blockedOn=null,Nc||(Nc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,p0)))}function Uo(n){function r(p){return No(p,n)}if(0<Oa.length){No(Oa[0],n);for(var l=1;l<Oa.length;l++){var h=Oa[l];h.blockedOn===n&&(h.blockedOn=null)}}for(ur!==null&&No(ur,n),hr!==null&&No(hr,n),dr!==null&&No(dr,n),Lo.forEach(r),Do.forEach(r),l=0;l<fr.length;l++)h=fr[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<fr.length&&(l=fr[0],l.blockedOn===null);)Ef(l),l.blockedOn===null&&fr.shift()}var Ts=R.ReactCurrentBatchConfig,Ba=!0;function m0(n,r,l,h){var p=gt,v=Ts.transition;Ts.transition=null;try{gt=1,Uc(n,r,l,h)}finally{gt=p,Ts.transition=v}}function g0(n,r,l,h){var p=gt,v=Ts.transition;Ts.transition=null;try{gt=4,Uc(n,r,l,h)}finally{gt=p,Ts.transition=v}}function Uc(n,r,l,h){if(Ba){var p=Fc(n,r,l,h);if(p===null)Jc(n,r,h,za,l),Mf(n,h);else if(f0(p,n,r,l,h))h.stopPropagation();else if(Mf(n,h),r&4&&-1<d0.indexOf(n)){for(;p!==null;){var v=qo(p);if(v!==null&&vf(v),v=Fc(n,r,l,h),v===null&&Jc(n,r,h,za,l),v===p)break;p=v}p!==null&&h.stopPropagation()}else Jc(n,r,h,null,l)}}var za=null;function Fc(n,r,l,h){if(za=null,n=j(h),n=Kr(n),n!==null)if(r=Ri(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ia(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return za=n,null}function wf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xe()){case Re:return 1;case De:return 4;case Fe:case tt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var pr=null,Oc=null,Ha=null;function Af(){if(Ha)return Ha;var n,r=Oc,l=r.length,h,p="value"in pr?pr.value:pr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var T=l-n;for(h=1;h<=T&&r[l-h]===p[v-h];h++);return Ha=p.slice(n,1<h?1-h:void 0)}function Va(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ga(){return!0}function Rf(){return!1}function qn(n){function r(l,h,p,v,T){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(l=n[I],this[I]=l?l(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ga:Rf,this.isPropagationStopped=Rf,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),r}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=qn(ws),Fo=re({},ws,{view:0,detail:0}),_0=qn(Fo),Bc,zc,Oo,Wa=re({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Oo&&(Oo&&n.type==="mousemove"?(Bc=n.screenX-Oo.screenX,zc=n.screenY-Oo.screenY):zc=Bc=0,Oo=n),Bc)},movementY:function(n){return"movementY"in n?n.movementY:zc}}),bf=qn(Wa),v0=re({},Wa,{dataTransfer:0}),y0=qn(v0),x0=re({},Fo,{relatedTarget:0}),Hc=qn(x0),S0=re({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=qn(S0),E0=re({},ws,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),T0=qn(E0),w0=re({},ws,{data:0}),Cf=qn(w0),A0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C0(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=b0[n])?!!r[n]:!1}function Vc(){return C0}var P0=re({},Fo,{key:function(n){if(n.key){var r=A0[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Va(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?R0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(n){return n.type==="keypress"?Va(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Va(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),L0=qn(P0),D0=re({},Wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pf=qn(D0),I0=re({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),N0=qn(I0),U0=re({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=qn(U0),O0=re({},Wa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=qn(O0),B0=[9,13,27,32],Gc=u&&"CompositionEvent"in window,ko=null;u&&"documentMode"in document&&(ko=document.documentMode);var z0=u&&"TextEvent"in window&&!ko,Lf=u&&(!Gc||ko&&8<ko&&11>=ko),Df=" ",If=!1;function Nf(n,r){switch(n){case"keyup":return B0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function H0(n,r){switch(n){case"compositionend":return Uf(r);case"keypress":return r.which!==32?null:(If=!0,Df);case"textInput":return n=r.data,n===Df&&If?null:n;default:return null}}function V0(n,r){if(As)return n==="compositionend"||!Gc&&Nf(n,r)?(n=Af(),Ha=Oc=pr=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Lf&&r.locale!=="ko"?null:r.data;default:return null}}var G0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!G0[n.type]:r==="textarea"}function Of(n,r,l,h){Ce(h),r=Ka(r,"onChange"),0<r.length&&(l=new kc("onChange","change",null,l,h),n.push({event:l,listeners:r}))}var Bo=null,zo=null;function W0(n){tp(n,0)}function ja(n){var r=Ls(n);if(yt(r))return n}function j0(n,r){if(n==="change")return r}var kf=!1;if(u){var Wc;if(u){var jc="oninput"in document;if(!jc){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),jc=typeof Bf.oninput=="function"}Wc=jc}else Wc=!1;kf=Wc&&(!document.documentMode||9<document.documentMode)}function zf(){Bo&&(Bo.detachEvent("onpropertychange",Hf),zo=Bo=null)}function Hf(n){if(n.propertyName==="value"&&ja(zo)){var r=[];Of(r,zo,n,j(n)),kn(W0,r)}}function X0(n,r,l){n==="focusin"?(zf(),Bo=r,zo=l,Bo.attachEvent("onpropertychange",Hf)):n==="focusout"&&zf()}function q0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ja(zo)}function Y0(n,r){if(n==="click")return ja(r)}function K0(n,r){if(n==="input"||n==="change")return ja(r)}function $0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var fi=typeof Object.is=="function"?Object.is:$0;function Ho(n,r){if(fi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!d.call(r,p)||!fi(n[p],r[p]))return!1}return!0}function Vf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gf(n,r){var l=Vf(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=r&&h>=r)return{node:l,offset:r-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Vf(l)}}function Wf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Wf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function jf(){for(var n=window,r=Ot();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Ot(n.document)}return r}function Xc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Z0(n){var r=jf(),l=n.focusedElem,h=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Wf(l.ownerDocument.documentElement,l)){if(h!==null&&Xc(l)){if(r=h.start,n=h.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(h.start,p);h=h.end===void 0?v:Math.min(h.end,p),!n.extend&&v>h&&(p=h,h=v,v=p),p=Gf(l,v);var T=Gf(l,h);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>h?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Q0=u&&"documentMode"in document&&11>=document.documentMode,Rs=null,qc=null,Vo=null,Yc=!1;function Xf(n,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Yc||Rs==null||Rs!==Ot(h)||(h=Rs,"selectionStart"in h&&Xc(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Vo&&Ho(Vo,h)||(Vo=h,h=Ka(qc,"onSelect"),0<h.length&&(r=new kc("onSelect","select",null,r,l),n.push({event:r,listeners:h}),r.target=Rs)))}function Xa(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var bs={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},Kc={},qf={};u&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function qa(n){if(Kc[n])return Kc[n];if(!bs[n])return n;var r=bs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in qf)return Kc[n]=r[l];return n}var Yf=qa("animationend"),Kf=qa("animationiteration"),$f=qa("animationstart"),Zf=qa("transitionend"),Qf=new Map,Jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,r){Qf.set(n,r),a(r,[n])}for(var $c=0;$c<Jf.length;$c++){var Zc=Jf[$c],J0=Zc.toLowerCase(),ev=Zc[0].toUpperCase()+Zc.slice(1);mr(J0,"on"+ev)}mr(Yf,"onAnimationEnd"),mr(Kf,"onAnimationIteration"),mr($f,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(Zf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function ep(n,r,l){var h=n.type||"unknown-event";n.currentTarget=l,Da(h,r,void 0,n),n.currentTarget=null}function tp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],p=h.event;h=h.listeners;e:{var v=void 0;if(r)for(var T=h.length-1;0<=T;T--){var I=h[T],O=I.instance,Q=I.currentTarget;if(I=I.listener,O!==v&&p.isPropagationStopped())break e;ep(p,I,Q),v=O}else for(T=0;T<h.length;T++){if(I=h[T],O=I.instance,Q=I.currentTarget,I=I.listener,O!==v&&p.isPropagationStopped())break e;ep(p,I,Q),v=O}}}if(Xr)throw n=cr,Xr=!1,cr=null,n}function zt(n,r){var l=r[su];l===void 0&&(l=r[su]=new Set);var h=n+"__bubble";l.has(h)||(np(r,n,2,!1),l.add(h))}function Qc(n,r,l){var h=0;r&&(h|=4),np(l,n,h,r)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function Wo(n){if(!n[Ya]){n[Ya]=!0,i.forEach(function(l){l!=="selectionchange"&&(tv.has(l)||Qc(l,!1,n),Qc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ya]||(r[Ya]=!0,Qc("selectionchange",!1,r))}}function np(n,r,l,h){switch(wf(r)){case 1:var p=m0;break;case 4:p=g0;break;default:p=Uc}l=p.bind(null,r,l,n),p=void 0,!Ms||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),h?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Jc(n,r,l,h,p){var v=h;if(!(r&1)&&!(r&2)&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var I=h.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(T===4)for(T=h.return;T!==null;){var O=T.tag;if((O===3||O===4)&&(O=T.stateNode.containerInfo,O===p||O.nodeType===8&&O.parentNode===p))return;T=T.return}for(;I!==null;){if(T=Kr(I),T===null)return;if(O=T.tag,O===5||O===6){h=v=T;continue e}I=I.parentNode}}h=h.return}kn(function(){var Q=v,_e=j(l),ye=[];e:{var me=Qf.get(n);if(me!==void 0){var Le=kc,ze=n;switch(n){case"keypress":if(Va(l)===0)break e;case"keydown":case"keyup":Le=L0;break;case"focusin":ze="focus",Le=Hc;break;case"focusout":ze="blur",Le=Hc;break;case"beforeblur":case"afterblur":Le=Hc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=N0;break;case Yf:case Kf:case $f:Le=M0;break;case Zf:Le=F0;break;case"scroll":Le=_0;break;case"wheel":Le=k0;break;case"copy":case"cut":case"paste":Le=T0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Pf}var He=(r&4)!==0,Zt=!He&&n==="scroll",Y=He?me!==null?me+"Capture":null:me;He=[];for(var G=Q,K;G!==null;){K=G;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,Y!==null&&(Ee=An(G,Y),Ee!=null&&He.push(jo(G,Ee,K)))),Zt)break;G=G.return}0<He.length&&(me=new Le(me,ze,null,l,_e),ye.push({event:me,listeners:He}))}}if(!(r&7)){e:{if(me=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",me&&l!==Ct&&(ze=l.relatedTarget||l.fromElement)&&(Kr(ze)||ze[Vi]))break e;if((Le||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(ze=l.relatedTarget||l.toElement,Le=Q,ze=ze?Kr(ze):null,ze!==null&&(Zt=Ri(ze),ze!==Zt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Le=null,ze=Q),Le!==ze)){if(He=bf,Ee="onMouseLeave",Y="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(He=Pf,Ee="onPointerLeave",Y="onPointerEnter",G="pointer"),Zt=Le==null?me:Ls(Le),K=ze==null?me:Ls(ze),me=new He(Ee,G+"leave",Le,l,_e),me.target=Zt,me.relatedTarget=K,Ee=null,Kr(_e)===Q&&(He=new He(Y,G+"enter",ze,l,_e),He.target=K,He.relatedTarget=Zt,Ee=He),Zt=Ee,Le&&ze)t:{for(He=Le,Y=ze,G=0,K=He;K;K=Cs(K))G++;for(K=0,Ee=Y;Ee;Ee=Cs(Ee))K++;for(;0<G-K;)He=Cs(He),G--;for(;0<K-G;)Y=Cs(Y),K--;for(;G--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=Cs(He),Y=Cs(Y)}He=null}else He=null;Le!==null&&ip(ye,me,Le,He,!1),ze!==null&&Zt!==null&&ip(ye,Zt,ze,He,!0)}}e:{if(me=Q?Ls(Q):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var Ge=j0;else if(Ff(me))if(kf)Ge=K0;else{Ge=q0;var Ke=X0}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ge=Y0);if(Ge&&(Ge=Ge(n,Q))){Of(ye,Ge,l,_e);break e}Ke&&Ke(n,me,Q),n==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&Pt(me,"number",me.value)}switch(Ke=Q?Ls(Q):window,n){case"focusin":(Ff(Ke)||Ke.contentEditable==="true")&&(Rs=Ke,qc=Q,Vo=null);break;case"focusout":Vo=qc=Rs=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,Xf(ye,l,_e);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":Xf(ye,l,_e)}var $e;if(Gc)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else As?Nf(n,l)&&(it="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(it="onCompositionStart");it&&(Lf&&l.locale!=="ko"&&(As||it!=="onCompositionStart"?it==="onCompositionEnd"&&As&&($e=Af()):(pr=_e,Oc="value"in pr?pr.value:pr.textContent,As=!0)),Ke=Ka(Q,it),0<Ke.length&&(it=new Cf(it,n,null,l,_e),ye.push({event:it,listeners:Ke}),$e?it.data=$e:($e=Uf(l),$e!==null&&(it.data=$e)))),($e=z0?H0(n,l):V0(n,l))&&(Q=Ka(Q,"onBeforeInput"),0<Q.length&&(_e=new Cf("onBeforeInput","beforeinput",null,l,_e),ye.push({event:_e,listeners:Q}),_e.data=$e))}tp(ye,r)})}function jo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Ka(n,r){for(var l=r+"Capture",h=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=An(n,l),v!=null&&h.unshift(jo(n,v,p)),v=An(n,r),v!=null&&h.push(jo(n,v,p))),n=n.return}return h}function Cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ip(n,r,l,h,p){for(var v=r._reactName,T=[];l!==null&&l!==h;){var I=l,O=I.alternate,Q=I.stateNode;if(O!==null&&O===h)break;I.tag===5&&Q!==null&&(I=Q,p?(O=An(l,v),O!=null&&T.unshift(jo(l,O,I))):p||(O=An(l,v),O!=null&&T.push(jo(l,O,I)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var nv=/\r\n?/g,iv=/\u0000|\uFFFD/g;function rp(n){return(typeof n=="string"?n:""+n).replace(nv,`
`).replace(iv,"")}function $a(n,r,l){if(r=rp(r),rp(n)!==r&&l)throw Error(t(425))}function Za(){}var eu=null,tu=null;function nu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,rv=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,sv=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(n){return sp.resolve(null).then(n).catch(ov)}:iu;function ov(n){setTimeout(function(){throw n})}function ru(n,r){var l=r,h=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){n.removeChild(p),Uo(r);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Uo(r)}function gr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function op(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),bi="__reactFiber$"+Ps,Xo="__reactProps$"+Ps,Vi="__reactContainer$"+Ps,su="__reactEvents$"+Ps,av="__reactListeners$"+Ps,lv="__reactHandles$"+Ps;function Kr(n){var r=n[bi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Vi]||l[bi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=op(n);n!==null;){if(l=n[bi])return l;n=op(n)}return r}n=l,l=n.parentNode}return null}function qo(n){return n=n[bi]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ls(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Qa(n){return n[Xo]||null}var ou=[],Ds=-1;function _r(n){return{current:n}}function Ht(n){0>Ds||(n.current=ou[Ds],ou[Ds]=null,Ds--)}function kt(n,r){Ds++,ou[Ds]=n.current,n.current=r}var vr={},yn=_r(vr),Bn=_r(!1),$r=vr;function Is(n,r){var l=n.type.contextTypes;if(!l)return vr;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function zn(n){return n=n.childContextTypes,n!=null}function Ja(){Ht(Bn),Ht(yn)}function ap(n,r,l){if(yn.current!==vr)throw Error(t(168));kt(yn,r),kt(Bn,l)}function lp(n,r,l){var h=n.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in r))throw Error(t(108,ve(n)||"Unknown",p));return re({},l,h)}function el(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vr,$r=yn.current,kt(yn,n),kt(Bn,Bn.current),!0}function cp(n,r,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=lp(n,r,$r),h.__reactInternalMemoizedMergedChildContext=n,Ht(Bn),Ht(yn),kt(yn,n)):Ht(Bn),kt(Bn,l)}var Gi=null,tl=!1,au=!1;function up(n){Gi===null?Gi=[n]:Gi.push(n)}function cv(n){tl=!0,up(n)}function yr(){if(!au&&Gi!==null){au=!0;var n=0,r=gt;try{var l=Gi;for(gt=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}Gi=null,tl=!1}catch(p){throw Gi!==null&&(Gi=Gi.slice(n+1)),A(Re,yr),p}finally{gt=r,au=!1}}return null}var Ns=[],Us=0,nl=null,il=0,ti=[],ni=0,Zr=null,Wi=1,ji="";function Qr(n,r){Ns[Us++]=il,Ns[Us++]=nl,nl=n,il=r}function hp(n,r,l){ti[ni++]=Wi,ti[ni++]=ji,ti[ni++]=Zr,Zr=n;var h=Wi;n=ji;var p=32-At(h)-1;h&=~(1<<p),l+=1;var v=32-At(r)+p;if(30<v){var T=p-p%5;v=(h&(1<<T)-1).toString(32),h>>=T,p-=T,Wi=1<<32-At(r)+p|l<<p|h,ji=v+n}else Wi=1<<v|l<<p|h,ji=n}function lu(n){n.return!==null&&(Qr(n,1),hp(n,1,0))}function cu(n){for(;n===nl;)nl=Ns[--Us],Ns[Us]=null,il=Ns[--Us],Ns[Us]=null;for(;n===Zr;)Zr=ti[--ni],ti[ni]=null,ji=ti[--ni],ti[ni]=null,Wi=ti[--ni],ti[ni]=null}var Yn=null,Kn=null,Gt=!1,pi=null;function dp(n,r){var l=oi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function fp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Yn=n,Kn=gr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Yn=n,Kn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Zr!==null?{id:Wi,overflow:ji}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=oi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Yn=n,Kn=null,!0):!1;default:return!1}}function uu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function hu(n){if(Gt){var r=Kn;if(r){var l=r;if(!fp(n,r)){if(uu(n))throw Error(t(418));r=gr(l.nextSibling);var h=Yn;r&&fp(n,r)?dp(h,l):(n.flags=n.flags&-4097|2,Gt=!1,Yn=n)}}else{if(uu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,Yn=n}}}function pp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function rl(n){if(n!==Yn)return!1;if(!Gt)return pp(n),Gt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!nu(n.type,n.memoizedProps)),r&&(r=Kn)){if(uu(n))throw mp(),Error(t(418));for(;r;)dp(n,r),r=gr(r.nextSibling)}if(pp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Kn=gr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Kn=null}}else Kn=Yn?gr(n.stateNode.nextSibling):null;return!0}function mp(){for(var n=Kn;n;)n=gr(n.nextSibling)}function Fs(){Kn=Yn=null,Gt=!1}function du(n){pi===null?pi=[n]:pi.push(n)}var uv=R.ReactCurrentBatchConfig;function Yo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var p=h,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var I=p.refs;T===null?delete I[v]:I[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function sl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function gp(n){var r=n._init;return r(n._payload)}function _p(n){function r(Y,G){if(n){var K=Y.deletions;K===null?(Y.deletions=[G],Y.flags|=16):K.push(G)}}function l(Y,G){if(!n)return null;for(;G!==null;)r(Y,G),G=G.sibling;return null}function h(Y,G){for(Y=new Map;G!==null;)G.key!==null?Y.set(G.key,G):Y.set(G.index,G),G=G.sibling;return Y}function p(Y,G){return Y=Rr(Y,G),Y.index=0,Y.sibling=null,Y}function v(Y,G,K){return Y.index=K,n?(K=Y.alternate,K!==null?(K=K.index,K<G?(Y.flags|=2,G):K):(Y.flags|=2,G)):(Y.flags|=1048576,G)}function T(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,G,K,Ee){return G===null||G.tag!==6?(G=ih(K,Y.mode,Ee),G.return=Y,G):(G=p(G,K),G.return=Y,G)}function O(Y,G,K,Ee){var Ge=K.type;return Ge===U?_e(Y,G,K.props.children,Ee,K.key):G!==null&&(G.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===se&&gp(Ge)===G.type)?(Ee=p(G,K.props),Ee.ref=Yo(Y,G,K),Ee.return=Y,Ee):(Ee=Cl(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=Yo(Y,G,K),Ee.return=Y,Ee)}function Q(Y,G,K,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=rh(K,Y.mode,Ee),G.return=Y,G):(G=p(G,K.children||[]),G.return=Y,G)}function _e(Y,G,K,Ee,Ge){return G===null||G.tag!==7?(G=os(K,Y.mode,Ee,Ge),G.return=Y,G):(G=p(G,K),G.return=Y,G)}function ye(Y,G,K){if(typeof G=="string"&&G!==""||typeof G=="number")return G=ih(""+G,Y.mode,K),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case k:return K=Cl(G.type,G.key,G.props,null,Y.mode,K),K.ref=Yo(Y,null,G),K.return=Y,K;case N:return G=rh(G,Y.mode,K),G.return=Y,G;case se:var Ee=G._init;return ye(Y,Ee(G._payload),K)}if(We(G)||ae(G))return G=os(G,Y.mode,K,null),G.return=Y,G;sl(Y,G)}return null}function me(Y,G,K,Ee){var Ge=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ge!==null?null:I(Y,G,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case k:return K.key===Ge?O(Y,G,K,Ee):null;case N:return K.key===Ge?Q(Y,G,K,Ee):null;case se:return Ge=K._init,me(Y,G,Ge(K._payload),Ee)}if(We(K)||ae(K))return Ge!==null?null:_e(Y,G,K,Ee,null);sl(Y,K)}return null}function Le(Y,G,K,Ee,Ge){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(K)||null,I(G,Y,""+Ee,Ge);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case k:return Y=Y.get(Ee.key===null?K:Ee.key)||null,O(G,Y,Ee,Ge);case N:return Y=Y.get(Ee.key===null?K:Ee.key)||null,Q(G,Y,Ee,Ge);case se:var Ke=Ee._init;return Le(Y,G,K,Ke(Ee._payload),Ge)}if(We(Ee)||ae(Ee))return Y=Y.get(K)||null,_e(G,Y,Ee,Ge,null);sl(G,Ee)}return null}function ze(Y,G,K,Ee){for(var Ge=null,Ke=null,$e=G,it=G=0,cn=null;$e!==null&&it<K.length;it++){$e.index>it?(cn=$e,$e=null):cn=$e.sibling;var Rt=me(Y,$e,K[it],Ee);if(Rt===null){$e===null&&($e=cn);break}n&&$e&&Rt.alternate===null&&r(Y,$e),G=v(Rt,G,it),Ke===null?Ge=Rt:Ke.sibling=Rt,Ke=Rt,$e=cn}if(it===K.length)return l(Y,$e),Gt&&Qr(Y,it),Ge;if($e===null){for(;it<K.length;it++)$e=ye(Y,K[it],Ee),$e!==null&&(G=v($e,G,it),Ke===null?Ge=$e:Ke.sibling=$e,Ke=$e);return Gt&&Qr(Y,it),Ge}for($e=h(Y,$e);it<K.length;it++)cn=Le($e,Y,it,K[it],Ee),cn!==null&&(n&&cn.alternate!==null&&$e.delete(cn.key===null?it:cn.key),G=v(cn,G,it),Ke===null?Ge=cn:Ke.sibling=cn,Ke=cn);return n&&$e.forEach(function(br){return r(Y,br)}),Gt&&Qr(Y,it),Ge}function He(Y,G,K,Ee){var Ge=ae(K);if(typeof Ge!="function")throw Error(t(150));if(K=Ge.call(K),K==null)throw Error(t(151));for(var Ke=Ge=null,$e=G,it=G=0,cn=null,Rt=K.next();$e!==null&&!Rt.done;it++,Rt=K.next()){$e.index>it?(cn=$e,$e=null):cn=$e.sibling;var br=me(Y,$e,Rt.value,Ee);if(br===null){$e===null&&($e=cn);break}n&&$e&&br.alternate===null&&r(Y,$e),G=v(br,G,it),Ke===null?Ge=br:Ke.sibling=br,Ke=br,$e=cn}if(Rt.done)return l(Y,$e),Gt&&Qr(Y,it),Ge;if($e===null){for(;!Rt.done;it++,Rt=K.next())Rt=ye(Y,Rt.value,Ee),Rt!==null&&(G=v(Rt,G,it),Ke===null?Ge=Rt:Ke.sibling=Rt,Ke=Rt);return Gt&&Qr(Y,it),Ge}for($e=h(Y,$e);!Rt.done;it++,Rt=K.next())Rt=Le($e,Y,it,Rt.value,Ee),Rt!==null&&(n&&Rt.alternate!==null&&$e.delete(Rt.key===null?it:Rt.key),G=v(Rt,G,it),Ke===null?Ge=Rt:Ke.sibling=Rt,Ke=Rt);return n&&$e.forEach(function(Gv){return r(Y,Gv)}),Gt&&Qr(Y,it),Ge}function Zt(Y,G,K,Ee){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case k:e:{for(var Ge=K.key,Ke=G;Ke!==null;){if(Ke.key===Ge){if(Ge=K.type,Ge===U){if(Ke.tag===7){l(Y,Ke.sibling),G=p(Ke,K.props.children),G.return=Y,Y=G;break e}}else if(Ke.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===se&&gp(Ge)===Ke.type){l(Y,Ke.sibling),G=p(Ke,K.props),G.ref=Yo(Y,Ke,K),G.return=Y,Y=G;break e}l(Y,Ke);break}else r(Y,Ke);Ke=Ke.sibling}K.type===U?(G=os(K.props.children,Y.mode,Ee,K.key),G.return=Y,Y=G):(Ee=Cl(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=Yo(Y,G,K),Ee.return=Y,Y=Ee)}return T(Y);case N:e:{for(Ke=K.key;G!==null;){if(G.key===Ke)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){l(Y,G.sibling),G=p(G,K.children||[]),G.return=Y,Y=G;break e}else{l(Y,G);break}else r(Y,G);G=G.sibling}G=rh(K,Y.mode,Ee),G.return=Y,Y=G}return T(Y);case se:return Ke=K._init,Zt(Y,G,Ke(K._payload),Ee)}if(We(K))return ze(Y,G,K,Ee);if(ae(K))return He(Y,G,K,Ee);sl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,G!==null&&G.tag===6?(l(Y,G.sibling),G=p(G,K),G.return=Y,Y=G):(l(Y,G),G=ih(K,Y.mode,Ee),G.return=Y,Y=G),T(Y)):l(Y,G)}return Zt}var Os=_p(!0),vp=_p(!1),ol=_r(null),al=null,ks=null,fu=null;function pu(){fu=ks=al=null}function mu(n){var r=ol.current;Ht(ol),n._currentValue=r}function gu(n,r,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),n===l)break;n=n.return}}function Bs(n,r){al=n,fu=ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Hn=!0),n.firstContext=null)}function ii(n){var r=n._currentValue;if(fu!==n)if(n={context:n,memoizedValue:r,next:null},ks===null){if(al===null)throw Error(t(308));ks=n,al.dependencies={lanes:0,firstContext:n}}else ks=ks.next=n;return r}var Jr=null;function _u(n){Jr===null?Jr=[n]:Jr.push(n)}function yp(n,r,l,h){var p=r.interleaved;return p===null?(l.next=l,_u(r)):(l.next=p.next,p.next=l),r.interleaved=l,Xi(n,h)}function Xi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var xr=!1;function vu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Sr(n,r,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,Tt&2){var p=h.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),h.pending=r,Xi(n,l)}return p=h.interleaved,p===null?(r.next=r,_u(h)):(r.next=p.next,p.next=r),h.interleaved=r,Xi(n,l)}function ll(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Yr(n,l)}}function Sp(n,r){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function cl(n,r,l,h){var p=n.updateQueue;xr=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var O=I,Q=O.next;O.next=null,T===null?v=Q:T.next=Q,T=O;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==T&&(I===null?_e.firstBaseUpdate=Q:I.next=Q,_e.lastBaseUpdate=O))}if(v!==null){var ye=p.baseState;T=0,_e=Q=O=null,I=v;do{var me=I.lane,Le=I.eventTime;if((h&me)===me){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=n,He=I;switch(me=r,Le=l,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){ye=ze.call(Le,ye,me);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,me=typeof ze=="function"?ze.call(Le,ye,me):ze,me==null)break e;ye=re({},ye,me);break e;case 2:xr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,me=p.effects,me===null?p.effects=[I]:me.push(I))}else Le={eventTime:Le,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(Q=_e=Le,O=ye):_e=_e.next=Le,T|=me;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;me=I,I=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);if(_e===null&&(O=ye),p.baseState=O,p.firstBaseUpdate=Q,p.lastBaseUpdate=_e,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);ns|=T,n.lanes=T,n.memoizedState=ye}}function Mp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var h=n[r],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Ko={},Ci=_r(Ko),$o=_r(Ko),Zo=_r(Ko);function es(n){if(n===Ko)throw Error(t(174));return n}function yu(n,r){switch(kt(Zo,r),kt($o,n),kt(Ci,Ko),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ve(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ve(r,n)}Ht(Ci),kt(Ci,r)}function zs(){Ht(Ci),Ht($o),Ht(Zo)}function Ep(n){es(Zo.current);var r=es(Ci.current),l=Ve(r,n.type);r!==l&&(kt($o,n),kt(Ci,l))}function xu(n){$o.current===n&&(Ht(Ci),Ht($o))}var Wt=_r(0);function ul(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Su=[];function Mu(){for(var n=0;n<Su.length;n++)Su[n]._workInProgressVersionPrimary=null;Su.length=0}var hl=R.ReactCurrentDispatcher,Eu=R.ReactCurrentBatchConfig,ts=0,jt=null,tn=null,an=null,dl=!1,Qo=!1,Jo=0,hv=0;function xn(){throw Error(t(321))}function Tu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!fi(n[l],r[l]))return!1;return!0}function wu(n,r,l,h,p,v){if(ts=v,jt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,hl.current=n===null||n.memoizedState===null?mv:gv,n=l(h,p),Qo){v=0;do{if(Qo=!1,Jo=0,25<=v)throw Error(t(301));v+=1,an=tn=null,r.updateQueue=null,hl.current=_v,n=l(h,p)}while(Qo)}if(hl.current=ml,r=tn!==null&&tn.next!==null,ts=0,an=tn=jt=null,dl=!1,r)throw Error(t(300));return n}function Au(){var n=Jo!==0;return Jo=0,n}function Pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?jt.memoizedState=an=n:an=an.next=n,an}function ri(){if(tn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var r=an===null?jt.memoizedState:an.next;if(r!==null)an=r,tn=n;else{if(n===null)throw Error(t(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},an===null?jt.memoizedState=an=n:an=an.next=n}return an}function ea(n,r){return typeof r=="function"?r(n):r}function Ru(n){var r=ri(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=tn,p=h.baseQueue,v=l.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}h.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,h=h.baseState;var I=T=null,O=null,Q=v;do{var _e=Q.lane;if((ts&_e)===_e)O!==null&&(O=O.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),h=Q.hasEagerState?Q.eagerState:n(h,Q.action);else{var ye={lane:_e,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};O===null?(I=O=ye,T=h):O=O.next=ye,jt.lanes|=_e,ns|=_e}Q=Q.next}while(Q!==null&&Q!==v);O===null?T=h:O.next=I,fi(h,r.memoizedState)||(Hn=!0),r.memoizedState=h,r.baseState=T,r.baseQueue=O,l.lastRenderedState=h}if(n=l.interleaved,n!==null){p=n;do v=p.lane,jt.lanes|=v,ns|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function bu(n){var r=ri(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do v=n(v,T.action),T=T.next;while(T!==p);fi(v,r.memoizedState)||(Hn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,h]}function Tp(){}function wp(n,r){var l=jt,h=ri(),p=r(),v=!fi(h.memoizedState,p);if(v&&(h.memoizedState=p,Hn=!0),h=h.queue,Cu(bp.bind(null,l,h,n),[n]),h.getSnapshot!==r||v||an!==null&&an.memoizedState.tag&1){if(l.flags|=2048,ta(9,Rp.bind(null,l,h,p,r),void 0,null),ln===null)throw Error(t(349));ts&30||Ap(l,r,p)}return p}function Ap(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Rp(n,r,l,h){r.value=l,r.getSnapshot=h,Cp(r)&&Pp(n)}function bp(n,r,l){return l(function(){Cp(r)&&Pp(n)})}function Cp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!fi(n,l)}catch{return!0}}function Pp(n){var r=Xi(n,1);r!==null&&vi(r,n,1,-1)}function Lp(n){var r=Pi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},r.queue=n,n=n.dispatch=pv.bind(null,jt,n),[r.memoizedState,n]}function ta(n,r,l,h){return n={tag:n,create:r,destroy:l,deps:h,next:null},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,r.lastEffect=n)),n}function Dp(){return ri().memoizedState}function fl(n,r,l,h){var p=Pi();jt.flags|=n,p.memoizedState=ta(1|r,l,void 0,h===void 0?null:h)}function pl(n,r,l,h){var p=ri();h=h===void 0?null:h;var v=void 0;if(tn!==null){var T=tn.memoizedState;if(v=T.destroy,h!==null&&Tu(h,T.deps)){p.memoizedState=ta(r,l,v,h);return}}jt.flags|=n,p.memoizedState=ta(1|r,l,v,h)}function Ip(n,r){return fl(8390656,8,n,r)}function Cu(n,r){return pl(2048,8,n,r)}function Np(n,r){return pl(4,2,n,r)}function Up(n,r){return pl(4,4,n,r)}function Fp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Op(n,r,l){return l=l!=null?l.concat([n]):null,pl(4,4,Fp.bind(null,r,n),l)}function Pu(){}function kp(n,r){var l=ri();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Tu(r,h[1])?h[0]:(l.memoizedState=[n,r],n)}function Bp(n,r){var l=ri();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Tu(r,h[1])?h[0]:(n=n(),l.memoizedState=[n,r],n)}function zp(n,r,l){return ts&21?(fi(l,r)||(l=bn(),jt.lanes|=l,ns|=l,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Hn=!0),n.memoizedState=l)}function dv(n,r){var l=gt;gt=l!==0&&4>l?l:4,n(!0);var h=Eu.transition;Eu.transition={};try{n(!1),r()}finally{gt=l,Eu.transition=h}}function Hp(){return ri().memoizedState}function fv(n,r,l){var h=wr(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Vp(n))Gp(r,l);else if(l=yp(n,r,l,h),l!==null){var p=Pn();vi(l,n,h,p),Wp(l,r,h)}}function pv(n,r,l){var h=wr(n),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Vp(n))Gp(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,I=v(T,l);if(p.hasEagerState=!0,p.eagerState=I,fi(I,T)){var O=r.interleaved;O===null?(p.next=p,_u(r)):(p.next=O.next,O.next=p),r.interleaved=p;return}}catch{}finally{}l=yp(n,r,p,h),l!==null&&(p=Pn(),vi(l,n,h,p),Wp(l,r,h))}}function Vp(n){var r=n.alternate;return n===jt||r!==null&&r===jt}function Gp(n,r){Qo=dl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Wp(n,r,l){if(l&4194240){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Yr(n,l)}}var ml={readContext:ii,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},mv={readContext:ii,useCallback:function(n,r){return Pi().memoizedState=[n,r===void 0?null:r],n},useContext:ii,useEffect:Ip,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,fl(4194308,4,Fp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return fl(4194308,4,n,r)},useInsertionEffect:function(n,r){return fl(4,2,n,r)},useMemo:function(n,r){var l=Pi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var h=Pi();return r=l!==void 0?l(r):r,h.memoizedState=h.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},h.queue=n,n=n.dispatch=fv.bind(null,jt,n),[h.memoizedState,n]},useRef:function(n){var r=Pi();return n={current:n},r.memoizedState=n},useState:Lp,useDebugValue:Pu,useDeferredValue:function(n){return Pi().memoizedState=n},useTransition:function(){var n=Lp(!1),r=n[0];return n=dv.bind(null,n[1]),Pi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var h=jt,p=Pi();if(Gt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),ln===null)throw Error(t(349));ts&30||Ap(h,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,Ip(bp.bind(null,h,v,n),[n]),h.flags|=2048,ta(9,Rp.bind(null,h,v,l,r),void 0,null),l},useId:function(){var n=Pi(),r=ln.identifierPrefix;if(Gt){var l=ji,h=Wi;l=(h&~(1<<32-At(h)-1)).toString(32)+l,r=":"+r+"R"+l,l=Jo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=hv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},gv={readContext:ii,useCallback:kp,useContext:ii,useEffect:Cu,useImperativeHandle:Op,useInsertionEffect:Np,useLayoutEffect:Up,useMemo:Bp,useReducer:Ru,useRef:Dp,useState:function(){return Ru(ea)},useDebugValue:Pu,useDeferredValue:function(n){var r=ri();return zp(r,tn.memoizedState,n)},useTransition:function(){var n=Ru(ea)[0],r=ri().memoizedState;return[n,r]},useMutableSource:Tp,useSyncExternalStore:wp,useId:Hp,unstable_isNewReconciler:!1},_v={readContext:ii,useCallback:kp,useContext:ii,useEffect:Cu,useImperativeHandle:Op,useInsertionEffect:Np,useLayoutEffect:Up,useMemo:Bp,useReducer:bu,useRef:Dp,useState:function(){return bu(ea)},useDebugValue:Pu,useDeferredValue:function(n){var r=ri();return tn===null?r.memoizedState=n:zp(r,tn.memoizedState,n)},useTransition:function(){var n=bu(ea)[0],r=ri().memoizedState;return[n,r]},useMutableSource:Tp,useSyncExternalStore:wp,useId:Hp,unstable_isNewReconciler:!1};function mi(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Lu(n,r,l,h){r=n.memoizedState,l=l(h,r),l=l==null?r:re({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var gl={isMounted:function(n){return(n=n._reactInternals)?Ri(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var h=Pn(),p=wr(n),v=qi(h,p);v.payload=r,l!=null&&(v.callback=l),r=Sr(n,v,p),r!==null&&(vi(r,n,p,h),ll(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var h=Pn(),p=wr(n),v=qi(h,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Sr(n,v,p),r!==null&&(vi(r,n,p,h),ll(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Pn(),h=wr(n),p=qi(l,h);p.tag=2,r!=null&&(p.callback=r),r=Sr(n,p,h),r!==null&&(vi(r,n,h,l),ll(r,n,h))}};function jp(n,r,l,h,p,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,v,T):r.prototype&&r.prototype.isPureReactComponent?!Ho(l,h)||!Ho(p,v):!0}function Xp(n,r,l){var h=!1,p=vr,v=r.contextType;return typeof v=="object"&&v!==null?v=ii(v):(p=zn(r)?$r:yn.current,h=r.contextTypes,v=(h=h!=null)?Is(n,p):vr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=gl,n.stateNode=r,r._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function qp(n,r,l,h){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==n&&gl.enqueueReplaceState(r,r.state,null)}function Du(n,r,l,h){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},vu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=ii(v):(v=zn(r)?$r:yn.current,p.context=Is(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Lu(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&gl.enqueueReplaceState(p,p.state,null),cl(n,l,p,h),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Hs(n,r){try{var l="",h=r;do l+=ce(h),h=h.return;while(h);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function Iu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Nu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var vv=typeof WeakMap=="function"?WeakMap:Map;function Yp(n,r,l){l=qi(-1,l),l.tag=3,l.payload={element:null};var h=r.value;return l.callback=function(){El||(El=!0,Ku=h),Nu(n,r)},l}function Kp(n,r,l){l=qi(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var p=r.value;l.payload=function(){return h(p)},l.callback=function(){Nu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Nu(n,r),typeof h!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function $p(n,r,l){var h=n.pingCache;if(h===null){h=n.pingCache=new vv;var p=new Set;h.set(r,p)}else p=h.get(r),p===void 0&&(p=new Set,h.set(r,p));p.has(l)||(p.add(l),n=Dv.bind(null,n,r,l),r.then(n,n))}function Zp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Qp(n,r,l,h,p){return n.mode&1?(n.flags|=65536,n.lanes=p,n):(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=qi(-1,1),r.tag=2,Sr(l,r,1))),l.lanes|=1),n)}var yv=R.ReactCurrentOwner,Hn=!1;function Cn(n,r,l,h){r.child=n===null?vp(r,null,l,h):Os(r,n.child,l,h)}function Jp(n,r,l,h,p){l=l.render;var v=r.ref;return Bs(r,p),h=wu(n,r,l,h,v,p),l=Au(),n!==null&&!Hn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Yi(n,r,p)):(Gt&&l&&lu(r),r.flags|=1,Cn(n,r,h,p),r.child)}function em(n,r,l,h,p){if(n===null){var v=l.type;return typeof v=="function"&&!nh(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,tm(n,r,v,h,p)):(n=Cl(l.type,null,h,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,!(n.lanes&p)){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:Ho,l(T,h)&&n.ref===r.ref)return Yi(n,r,p)}return r.flags|=1,n=Rr(v,h),n.ref=r.ref,n.return=r,r.child=n}function tm(n,r,l,h,p){if(n!==null){var v=n.memoizedProps;if(Ho(v,h)&&n.ref===r.ref)if(Hn=!1,r.pendingProps=h=v,(n.lanes&p)!==0)n.flags&131072&&(Hn=!0);else return r.lanes=n.lanes,Yi(n,r,p)}return Uu(n,r,l,h,p)}function nm(n,r,l){var h=r.pendingProps,p=h.children,v=n!==null?n.memoizedState:null;if(h.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Gs,$n),$n|=l;else{if(!(l&1073741824))return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,kt(Gs,$n),$n|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=v!==null?v.baseLanes:l,kt(Gs,$n),$n|=h}else v!==null?(h=v.baseLanes|l,r.memoizedState=null):h=l,kt(Gs,$n),$n|=h;return Cn(n,r,p,l),r.child}function im(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Uu(n,r,l,h,p){var v=zn(l)?$r:yn.current;return v=Is(r,v),Bs(r,p),l=wu(n,r,l,h,v,p),h=Au(),n!==null&&!Hn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Yi(n,r,p)):(Gt&&h&&lu(r),r.flags|=1,Cn(n,r,l,p),r.child)}function rm(n,r,l,h,p){if(zn(l)){var v=!0;el(r)}else v=!1;if(Bs(r,p),r.stateNode===null)vl(n,r),Xp(r,l,h),Du(r,l,h,p),h=!0;else if(n===null){var T=r.stateNode,I=r.memoizedProps;T.props=I;var O=T.context,Q=l.contextType;typeof Q=="object"&&Q!==null?Q=ii(Q):(Q=zn(l)?$r:yn.current,Q=Is(r,Q));var _e=l.getDerivedStateFromProps,ye=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==h||O!==Q)&&qp(r,T,h,Q),xr=!1;var me=r.memoizedState;T.state=me,cl(r,h,T,p),O=r.memoizedState,I!==h||me!==O||Bn.current||xr?(typeof _e=="function"&&(Lu(r,l,_e,h),O=r.memoizedState),(I=xr||jp(r,l,I,h,me,O,Q))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=O),T.props=h,T.state=O,T.context=Q,h=I):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{T=r.stateNode,xp(n,r),I=r.memoizedProps,Q=r.type===r.elementType?I:mi(r.type,I),T.props=Q,ye=r.pendingProps,me=T.context,O=l.contextType,typeof O=="object"&&O!==null?O=ii(O):(O=zn(l)?$r:yn.current,O=Is(r,O));var Le=l.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==ye||me!==O)&&qp(r,T,h,O),xr=!1,me=r.memoizedState,T.state=me,cl(r,h,T,p);var ze=r.memoizedState;I!==ye||me!==ze||Bn.current||xr?(typeof Le=="function"&&(Lu(r,l,Le,h),ze=r.memoizedState),(Q=xr||jp(r,l,Q,h,me,ze,O)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,ze,O),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,ze,O)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=ze),T.props=h,T.state=ze,T.context=O,h=Q):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),h=!1)}return Fu(n,r,l,h,v,p)}function Fu(n,r,l,h,p,v){im(n,r);var T=(r.flags&128)!==0;if(!h&&!T)return p&&cp(r,l,!1),Yi(n,r,v);h=r.stateNode,yv.current=r;var I=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,n!==null&&T?(r.child=Os(r,n.child,null,v),r.child=Os(r,null,I,v)):Cn(n,r,I,v),r.memoizedState=h.state,p&&cp(r,l,!0),r.child}function sm(n){var r=n.stateNode;r.pendingContext?ap(n,r.pendingContext,r.pendingContext!==r.context):r.context&&ap(n,r.context,!1),yu(n,r.containerInfo)}function om(n,r,l,h,p){return Fs(),du(p),r.flags|=256,Cn(n,r,l,h),r.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function ku(n){return{baseLanes:n,cachePool:null,transitions:null}}function am(n,r,l){var h=r.pendingProps,p=Wt.current,v=!1,T=(r.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(p&2)!==0),I?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),kt(Wt,p&1),n===null)return hu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(T=h.children,n=h.fallback,v?(h=r.mode,v=r.child,T={mode:"hidden",children:T},!(h&1)&&v!==null?(v.childLanes=0,v.pendingProps=T):v=Pl(T,h,0,null),n=os(n,h,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=ku(l),r.memoizedState=Ou,n):Bu(r,T));if(p=n.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return xv(n,r,T,h,I,p,l);if(v){v=h.fallback,T=r.mode,p=n.child,I=p.sibling;var O={mode:"hidden",children:h.children};return!(T&1)&&r.child!==p?(h=r.child,h.childLanes=0,h.pendingProps=O,r.deletions=null):(h=Rr(p,O),h.subtreeFlags=p.subtreeFlags&14680064),I!==null?v=Rr(I,v):(v=os(v,T,l,null),v.flags|=2),v.return=r,h.return=r,h.sibling=v,r.child=h,h=v,v=r.child,T=n.child.memoizedState,T=T===null?ku(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=Ou,h}return v=n.child,n=v.sibling,h=Rr(v,{mode:"visible",children:h.children}),!(r.mode&1)&&(h.lanes=l),h.return=r,h.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=h,r.memoizedState=null,h}function Bu(n,r){return r=Pl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function _l(n,r,l,h){return h!==null&&du(h),Os(r,n.child,null,l),n=Bu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function xv(n,r,l,h,p,v,T){if(l)return r.flags&256?(r.flags&=-257,h=Iu(Error(t(422))),_l(n,r,T,h)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=h.fallback,p=r.mode,h=Pl({mode:"visible",children:h.children},p,0,null),v=os(v,p,T,null),v.flags|=2,h.return=r,v.return=r,h.sibling=v,r.child=h,r.mode&1&&Os(r,n.child,null,T),r.child.memoizedState=ku(T),r.memoizedState=Ou,v);if(!(r.mode&1))return _l(n,r,T,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var I=h.dgst;return h=I,v=Error(t(419)),h=Iu(v,h,void 0),_l(n,r,T,h)}if(I=(T&n.childLanes)!==0,Hn||I){if(h=ln,h!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(h.suspendedLanes|T)?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Xi(n,p),vi(h,n,p,-1))}return th(),h=Iu(Error(t(421))),_l(n,r,T,h)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Iv.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,Kn=gr(p.nextSibling),Yn=r,Gt=!0,pi=null,n!==null&&(ti[ni++]=Wi,ti[ni++]=ji,ti[ni++]=Zr,Wi=n.id,ji=n.overflow,Zr=r),r=Bu(r,h.children),r.flags|=4096,r)}function lm(n,r,l){n.lanes|=r;var h=n.alternate;h!==null&&(h.lanes|=r),gu(n.return,r,l)}function zu(n,r,l,h,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=h,v.tail=l,v.tailMode=p)}function cm(n,r,l){var h=r.pendingProps,p=h.revealOrder,v=h.tail;if(Cn(n,r,h.children,l),h=Wt.current,h&2)h=h&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lm(n,l,r);else if(n.tag===19)lm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(kt(Wt,h),!(r.mode&1))r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&ul(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),zu(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&ul(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}zu(r,!0,l,null,v);break;case"together":zu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function vl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Yi(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),ns|=r.lanes,!(l&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Rr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Rr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Sv(n,r,l){switch(r.tag){case 3:sm(r),Fs();break;case 5:Ep(r);break;case 1:zn(r.type)&&el(r);break;case 4:yu(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,p=r.memoizedProps.value;kt(ol,h._currentValue),h._currentValue=p;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(kt(Wt,Wt.current&1),r.flags|=128,null):l&r.child.childLanes?am(n,r,l):(kt(Wt,Wt.current&1),n=Yi(n,r,l),n!==null?n.sibling:null);kt(Wt,Wt.current&1);break;case 19:if(h=(l&r.childLanes)!==0,n.flags&128){if(h)return cm(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),kt(Wt,Wt.current),h)break;return null;case 22:case 23:return r.lanes=0,nm(n,r,l)}return Yi(n,r,l)}var um,Hu,hm,dm;um=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Hu=function(){},hm=function(n,r,l,h){var p=n.memoizedProps;if(p!==h){n=r.stateNode,es(Ci.current);var v=null;switch(l){case"input":p=B(n,p),h=B(n,h),v=[];break;case"select":p=re({},p,{value:void 0}),h=re({},h,{value:void 0}),v=[];break;case"textarea":p=w(n,p),h=w(n,h),v=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=Za)}ft(l,h);var T;l=null;for(Q in p)if(!h.hasOwnProperty(Q)&&p.hasOwnProperty(Q)&&p[Q]!=null)if(Q==="style"){var I=p[Q];for(T in I)I.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(s.hasOwnProperty(Q)?v||(v=[]):(v=v||[]).push(Q,null));for(Q in h){var O=h[Q];if(I=p!=null?p[Q]:void 0,h.hasOwnProperty(Q)&&O!==I&&(O!=null||I!=null))if(Q==="style")if(I){for(T in I)!I.hasOwnProperty(T)||O&&O.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in O)O.hasOwnProperty(T)&&I[T]!==O[T]&&(l||(l={}),l[T]=O[T])}else l||(v||(v=[]),v.push(Q,l)),l=O;else Q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,I=I?I.__html:void 0,O!=null&&I!==O&&(v=v||[]).push(Q,O)):Q==="children"?typeof O!="string"&&typeof O!="number"||(v=v||[]).push(Q,""+O):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(s.hasOwnProperty(Q)?(O!=null&&Q==="onScroll"&&zt("scroll",n),v||I===O||(v=[])):(v=v||[]).push(Q,O))}l&&(v=v||[]).push("style",l);var Q=v;(r.updateQueue=Q)&&(r.flags|=4)}},dm=function(n,r,l,h){l!==h&&(r.flags|=4)};function na(n,r){if(!Gt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function Sn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=h,n.childLanes=l,r}function Mv(n,r,l){var h=r.pendingProps;switch(cu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(r),null;case 1:return zn(r.type)&&Ja(),Sn(r),null;case 3:return h=r.stateNode,zs(),Ht(Bn),Ht(yn),Mu(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(rl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,pi!==null&&(Qu(pi),pi=null))),Hu(n,r),Sn(r),null;case 5:xu(r);var p=es(Zo.current);if(l=r.type,n!==null&&r.stateNode!=null)hm(n,r,l,h,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return Sn(r),null}if(n=es(Ci.current),rl(r)){h=r.stateNode,l=r.type;var v=r.memoizedProps;switch(h[bi]=r,h[Xo]=v,n=(r.mode&1)!==0,l){case"dialog":zt("cancel",h),zt("close",h);break;case"iframe":case"object":case"embed":zt("load",h);break;case"video":case"audio":for(p=0;p<Go.length;p++)zt(Go[p],h);break;case"source":zt("error",h);break;case"img":case"image":case"link":zt("error",h),zt("load",h);break;case"details":zt("toggle",h);break;case"input":wn(h,v),zt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!v.multiple},zt("invalid",h);break;case"textarea":$(h,v),zt("invalid",h)}ft(l,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var I=v[T];T==="children"?typeof I=="string"?h.textContent!==I&&(v.suppressHydrationWarning!==!0&&$a(h.textContent,I,n),p=["children",I]):typeof I=="number"&&h.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&$a(h.textContent,I,n),p=["children",""+I]):s.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&zt("scroll",h)}switch(l){case"input":It(h),Xe(h,v,!0);break;case"textarea":It(h),ge(h);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(h.onclick=Za)}h=p,r.updateQueue=h,h!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=T.createElement(l,{is:h.is}):(n=T.createElement(l),l==="select"&&(T=n,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):n=T.createElementNS(n,l),n[bi]=r,n[Xo]=h,um(n,r,!1,!1),r.stateNode=n;e:{switch(T=rt(l,h),l){case"dialog":zt("cancel",n),zt("close",n),p=h;break;case"iframe":case"object":case"embed":zt("load",n),p=h;break;case"video":case"audio":for(p=0;p<Go.length;p++)zt(Go[p],n);p=h;break;case"source":zt("error",n),p=h;break;case"img":case"image":case"link":zt("error",n),zt("load",n),p=h;break;case"details":zt("toggle",n),p=h;break;case"input":wn(n,h),p=B(n,h),zt("invalid",n);break;case"option":p=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},p=re({},h,{value:void 0}),zt("invalid",n);break;case"textarea":$(n,h),p=w(n,h),zt("invalid",n);break;default:p=h}ft(l,p),I=p;for(v in I)if(I.hasOwnProperty(v)){var O=I[v];v==="style"?Je(n,O):v==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ue(n,O)):v==="children"?typeof O=="string"?(l!=="textarea"||O!=="")&&ut(n,O):typeof O=="number"&&ut(n,""+O):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?O!=null&&v==="onScroll"&&zt("scroll",n):O!=null&&L(n,v,O,T))}switch(l){case"input":It(n),Xe(n,h,!1);break;case"textarea":It(n),ge(n);break;case"option":h.value!=null&&n.setAttribute("value",""+Te(h.value));break;case"select":n.multiple=!!h.multiple,v=h.value,v!=null?P(n,!!h.multiple,v,!1):h.defaultValue!=null&&P(n,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Za)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Sn(r),null;case 6:if(n&&r.stateNode!=null)dm(n,r,n.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(l=es(Zo.current),es(Ci.current),rl(r)){if(h=r.stateNode,l=r.memoizedProps,h[bi]=r,(v=h.nodeValue!==l)&&(n=Yn,n!==null))switch(n.tag){case 3:$a(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&$a(h.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[bi]=r,r.stateNode=h}return Sn(r),null;case 13:if(Ht(Wt),h=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&Kn!==null&&r.mode&1&&!(r.flags&128))mp(),Fs(),r.flags|=98560,v=!1;else if(v=rl(r),h!==null&&h.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[bi]=r}else Fs(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Sn(r),v=!1}else pi!==null&&(Qu(pi),pi=null),v=!0;if(!v)return r.flags&65536?r:null}return r.flags&128?(r.lanes=l,r):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(r.child.flags|=8192,r.mode&1&&(n===null||Wt.current&1?nn===0&&(nn=3):th())),r.updateQueue!==null&&(r.flags|=4),Sn(r),null);case 4:return zs(),Hu(n,r),n===null&&Wo(r.stateNode.containerInfo),Sn(r),null;case 10:return mu(r.type._context),Sn(r),null;case 17:return zn(r.type)&&Ja(),Sn(r),null;case 19:if(Ht(Wt),v=r.memoizedState,v===null)return Sn(r),null;if(h=(r.flags&128)!==0,T=v.rendering,T===null)if(h)na(v,!1);else{if(nn!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(T=ul(n),T!==null){for(r.flags|=128,na(v,!1),h=T.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=l,l=r.child;l!==null;)v=l,n=h,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return kt(Wt,Wt.current&1|2),r.child}n=n.sibling}v.tail!==null&&V()>Ws&&(r.flags|=128,h=!0,na(v,!1),r.lanes=4194304)}else{if(!h)if(n=ul(T),n!==null){if(r.flags|=128,h=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),na(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Gt)return Sn(r),null}else 2*V()-v.renderingStartTime>Ws&&l!==1073741824&&(r.flags|=128,h=!0,na(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=V(),r.sibling=null,l=Wt.current,kt(Wt,h?l&1|2:l&1),r):(Sn(r),null);case 22:case 23:return eh(),h=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(r.flags|=8192),h&&r.mode&1?$n&1073741824&&(Sn(r),r.subtreeFlags&6&&(r.flags|=8192)):Sn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Ev(n,r){switch(cu(r),r.tag){case 1:return zn(r.type)&&Ja(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return zs(),Ht(Bn),Ht(yn),Mu(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return xu(r),null;case 13:if(Ht(Wt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Fs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ht(Wt),null;case 4:return zs(),null;case 10:return mu(r.type._context),null;case 22:case 23:return eh(),null;case 24:return null;default:return null}}var yl=!1,Mn=!1,Tv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Vs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Yt(n,r,h)}else l.current=null}function Vu(n,r,l){try{l()}catch(h){Yt(n,r,h)}}var fm=!1;function wv(n,r){if(eu=Ba,n=jf(),Xc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,v=h.focusNode;h=h.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,I=-1,O=-1,Q=0,_e=0,ye=n,me=null;t:for(;;){for(var Le;ye!==l||p!==0&&ye.nodeType!==3||(I=T+p),ye!==v||h!==0&&ye.nodeType!==3||(O=T+h),ye.nodeType===3&&(T+=ye.nodeValue.length),(Le=ye.firstChild)!==null;)me=ye,ye=Le;for(;;){if(ye===n)break t;if(me===l&&++Q===p&&(I=T),me===v&&++_e===h&&(O=T),(Le=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Le}l=I===-1||O===-1?null:{start:I,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for(tu={focusedElem:n,selectionRange:l},Ba=!1,Oe=r;Oe!==null;)if(r=Oe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Oe=n;else for(;Oe!==null;){r=Oe;try{var ze=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Zt=ze.memoizedState,Y=r.stateNode,G=Y.getSnapshotBeforeUpdate(r.elementType===r.type?He:mi(r.type,He),Zt);Y.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var K=r.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Yt(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,Oe=n;break}Oe=r.return}return ze=fm,fm=!1,ze}function ia(n,r,l){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Vu(r,l,v)}p=p.next}while(p!==h)}}function xl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==r)}}function Gu(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function pm(n){var r=n.alternate;r!==null&&(n.alternate=null,pm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[bi],delete r[Xo],delete r[su],delete r[av],delete r[lv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mm(n){return n.tag===5||n.tag===3||n.tag===4}function gm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wu(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Za));else if(h!==4&&(n=n.child,n!==null))for(Wu(n,r,l),n=n.sibling;n!==null;)Wu(n,r,l),n=n.sibling}function ju(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for(ju(n,r,l),n=n.sibling;n!==null;)ju(n,r,l),n=n.sibling}var fn=null,gi=!1;function Mr(n,r,l){for(l=l.child;l!==null;)_m(n,r,l),l=l.sibling}function _m(n,r,l){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(je,l)}catch{}switch(l.tag){case 5:Mn||Vs(l,r);case 6:var h=fn,p=gi;fn=null,Mr(n,r,l),fn=h,gi=p,fn!==null&&(gi?(n=fn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):fn.removeChild(l.stateNode));break;case 18:fn!==null&&(gi?(n=fn,l=l.stateNode,n.nodeType===8?ru(n.parentNode,l):n.nodeType===1&&ru(n,l),Uo(n)):ru(fn,l.stateNode));break;case 4:h=fn,p=gi,fn=l.stateNode.containerInfo,gi=!0,Mr(n,r,l),fn=h,gi=p;break;case 0:case 11:case 14:case 15:if(!Mn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&(v&2||v&4)&&Vu(l,r,T),p=p.next}while(p!==h)}Mr(n,r,l);break;case 1:if(!Mn&&(Vs(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(I){Yt(l,r,I)}Mr(n,r,l);break;case 21:Mr(n,r,l);break;case 22:l.mode&1?(Mn=(h=Mn)||l.memoizedState!==null,Mr(n,r,l),Mn=h):Mr(n,r,l);break;default:Mr(n,r,l)}}function vm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Tv),r.forEach(function(h){var p=Nv.bind(null,n,h);l.has(h)||(l.add(h),h.then(p,p))})}}function _i(n,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var v=n,T=r,I=T;e:for(;I!==null;){switch(I.tag){case 5:fn=I.stateNode,gi=!1;break e;case 3:fn=I.stateNode.containerInfo,gi=!0;break e;case 4:fn=I.stateNode.containerInfo,gi=!0;break e}I=I.return}if(fn===null)throw Error(t(160));_m(v,T,p),fn=null,gi=!1;var O=p.alternate;O!==null&&(O.return=null),p.return=null}catch(Q){Yt(p,r,Q)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)ym(r,n),r=r.sibling}function ym(n,r){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_i(r,n),Li(n),h&4){try{ia(3,n,n.return),xl(3,n)}catch(He){Yt(n,n.return,He)}try{ia(5,n,n.return)}catch(He){Yt(n,n.return,He)}}break;case 1:_i(r,n),Li(n),h&512&&l!==null&&Vs(l,l.return);break;case 5:if(_i(r,n),Li(n),h&512&&l!==null&&Vs(l,l.return),n.flags&32){var p=n.stateNode;try{ut(p,"")}catch(He){Yt(n,n.return,He)}}if(h&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,I=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&mt(p,v),rt(I,T);var Q=rt(I,v);for(T=0;T<O.length;T+=2){var _e=O[T],ye=O[T+1];_e==="style"?Je(p,ye):_e==="dangerouslySetInnerHTML"?Ue(p,ye):_e==="children"?ut(p,ye):L(p,_e,ye,Q)}switch(I){case"input":dt(p,v);break;case"textarea":pe(p,v);break;case"select":var me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Le=v.value;Le!=null?P(p,!!v.multiple,Le,!1):me!==!!v.multiple&&(v.defaultValue!=null?P(p,!!v.multiple,v.defaultValue,!0):P(p,!!v.multiple,v.multiple?[]:"",!1))}p[Xo]=v}catch(He){Yt(n,n.return,He)}}break;case 6:if(_i(r,n),Li(n),h&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(He){Yt(n,n.return,He)}}break;case 3:if(_i(r,n),Li(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Uo(r.containerInfo)}catch(He){Yt(n,n.return,He)}break;case 4:_i(r,n),Li(n);break;case 13:_i(r,n),Li(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Yu=V())),h&4&&vm(n);break;case 22:if(_e=l!==null&&l.memoizedState!==null,n.mode&1?(Mn=(Q=Mn)||_e,_i(r,n),Mn=Q):_i(r,n),Li(n),h&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!_e&&n.mode&1)for(Oe=n,_e=n.child;_e!==null;){for(ye=Oe=_e;Oe!==null;){switch(me=Oe,Le=me.child,me.tag){case 0:case 11:case 14:case 15:ia(4,me,me.return);break;case 1:Vs(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){h=me,l=me.return;try{r=h,ze.props=r.memoizedProps,ze.state=r.memoizedState,ze.componentWillUnmount()}catch(He){Yt(h,l,He)}}break;case 5:Vs(me,me.return);break;case 22:if(me.memoizedState!==null){Mm(ye);continue}}Le!==null?(Le.return=me,Oe=Le):Mm(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{p=ye.stateNode,Q?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=ye.stateNode,O=ye.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null,I.style.display=Ye("display",T))}catch(He){Yt(n,n.return,He)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=Q?"":ye.memoizedProps}catch(He){Yt(n,n.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:_i(r,n),Li(n),h&4&&vm(n);break;case 21:break;default:_i(r,n),Li(n)}}function Li(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(mm(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(ut(p,""),h.flags&=-33);var v=gm(n);ju(n,v,p);break;case 3:case 4:var T=h.stateNode.containerInfo,I=gm(n);Wu(n,I,T);break;default:throw Error(t(161))}}catch(O){Yt(n,n.return,O)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Av(n,r,l){Oe=n,xm(n)}function xm(n,r,l){for(var h=(n.mode&1)!==0;Oe!==null;){var p=Oe,v=p.child;if(p.tag===22&&h){var T=p.memoizedState!==null||yl;if(!T){var I=p.alternate,O=I!==null&&I.memoizedState!==null||Mn;I=yl;var Q=Mn;if(yl=T,(Mn=O)&&!Q)for(Oe=p;Oe!==null;)T=Oe,O=T.child,T.tag===22&&T.memoizedState!==null?Em(p):O!==null?(O.return=T,Oe=O):Em(p);for(;v!==null;)Oe=v,xm(v),v=v.sibling;Oe=p,yl=I,Mn=Q}Sm(n)}else p.subtreeFlags&8772&&v!==null?(v.return=p,Oe=v):Sm(n)}}function Sm(n){for(;Oe!==null;){var r=Oe;if(r.flags&8772){var l=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Mn||xl(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!Mn)if(l===null)h.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:mi(r.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Mp(r,v,h);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Mp(r,T,l)}break;case 5:var I=r.stateNode;if(l===null&&r.flags&4){l=I;var O=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&l.focus();break;case"img":O.src&&(l.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var Q=r.alternate;if(Q!==null){var _e=Q.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&Uo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||r.flags&512&&Gu(r)}catch(me){Yt(r,r.return,me)}}if(r===n){Oe=null;break}if(l=r.sibling,l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function Mm(n){for(;Oe!==null;){var r=Oe;if(r===n){Oe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function Em(n){for(;Oe!==null;){var r=Oe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{xl(4,r)}catch(O){Yt(r,l,O)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var p=r.return;try{h.componentDidMount()}catch(O){Yt(r,p,O)}}var v=r.return;try{Gu(r)}catch(O){Yt(r,v,O)}break;case 5:var T=r.return;try{Gu(r)}catch(O){Yt(r,T,O)}}}catch(O){Yt(r,r.return,O)}if(r===n){Oe=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Oe=I;break}Oe=r.return}}var Rv=Math.ceil,Sl=R.ReactCurrentDispatcher,Xu=R.ReactCurrentOwner,si=R.ReactCurrentBatchConfig,Tt=0,ln=null,Qt=null,pn=0,$n=0,Gs=_r(0),nn=0,ra=null,ns=0,Ml=0,qu=0,sa=null,Vn=null,Yu=0,Ws=1/0,Ki=null,El=!1,Ku=null,Er=null,Tl=!1,Tr=null,wl=0,oa=0,$u=null,Al=-1,Rl=0;function Pn(){return Tt&6?V():Al!==-1?Al:Al=V()}function wr(n){return n.mode&1?Tt&2&&pn!==0?pn&-pn:uv.transition!==null?(Rl===0&&(Rl=bn()),Rl):(n=gt,n!==0||(n=window.event,n=n===void 0?16:wf(n.type)),n):1}function vi(n,r,l,h){if(50<oa)throw oa=0,$u=null,Error(t(185));$t(n,l,h),(!(Tt&2)||n!==ln)&&(n===ln&&(!(Tt&2)&&(Ml|=l),nn===4&&Ar(n,pn)),Gn(n,h),l===1&&Tt===0&&!(r.mode&1)&&(Ws=V()+500,tl&&yr()))}function Gn(n,r){var l=n.callbackNode;qr(n,r);var h=di(n,n===ln?pn:0);if(h===0)l!==null&&X(l),n.callbackNode=null,n.callbackPriority=0;else if(r=h&-h,n.callbackPriority!==r){if(l!=null&&X(l),r===1)n.tag===0?cv(wm.bind(null,n)):up(wm.bind(null,n)),sv(function(){!(Tt&6)&&yr()}),l=null;else{switch(_f(h)){case 1:l=Re;break;case 4:l=De;break;case 16:l=Fe;break;case 536870912:l=nt;break;default:l=Fe}l=Im(l,Tm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Tm(n,r){if(Al=-1,Rl=0,Tt&6)throw Error(t(327));var l=n.callbackNode;if(js()&&n.callbackNode!==l)return null;var h=di(n,n===ln?pn:0);if(h===0)return null;if(h&30||h&n.expiredLanes||r)r=bl(n,h);else{r=h;var p=Tt;Tt|=2;var v=Rm();(ln!==n||pn!==r)&&(Ki=null,Ws=V()+500,rs(n,r));do try{Pv();break}catch(I){Am(n,I)}while(!0);pu(),Sl.current=v,Tt=p,Qt!==null?r=0:(ln=null,pn=0,r=nn)}if(r!==0){if(r===2&&(p=Nt(n),p!==0&&(h=p,r=Zu(n,p))),r===1)throw l=ra,rs(n,0),Ar(n,h),Gn(n,V()),l;if(r===6)Ar(n,h);else{if(p=n.current.alternate,!(h&30)&&!bv(p)&&(r=bl(n,h),r===2&&(v=Nt(n),v!==0&&(h=v,r=Zu(n,v))),r===1))throw l=ra,rs(n,0),Ar(n,h),Gn(n,V()),l;switch(n.finishedWork=p,n.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:ss(n,Vn,Ki);break;case 3:if(Ar(n,h),(h&130023424)===h&&(r=Yu+500-V(),10<r)){if(di(n,0)!==0)break;if(p=n.suspendedLanes,(p&h)!==h){Pn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=iu(ss.bind(null,n,Vn,Ki),r);break}ss(n,Vn,Ki);break;case 4:if(Ar(n,h),(h&4194240)===h)break;for(r=n.eventTimes,p=-1;0<h;){var T=31-At(h);v=1<<T,T=r[T],T>p&&(p=T),h&=~v}if(h=p,h=V()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*Rv(h/1960))-h,10<h){n.timeoutHandle=iu(ss.bind(null,n,Vn,Ki),h);break}ss(n,Vn,Ki);break;case 5:ss(n,Vn,Ki);break;default:throw Error(t(329))}}}return Gn(n,V()),n.callbackNode===l?Tm.bind(null,n):null}function Zu(n,r){var l=sa;return n.current.memoizedState.isDehydrated&&(rs(n,r).flags|=256),n=bl(n,r),n!==2&&(r=Vn,Vn=l,r!==null&&Qu(r)),n}function Qu(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function bv(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],v=p.getSnapshot;p=p.value;try{if(!fi(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ar(n,r){for(r&=~qu,r&=~Ml,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-At(r),h=1<<l;n[l]=-1,r&=~h}}function wm(n){if(Tt&6)throw Error(t(327));js();var r=di(n,0);if(!(r&1))return Gn(n,V()),null;var l=bl(n,r);if(n.tag!==0&&l===2){var h=Nt(n);h!==0&&(r=h,l=Zu(n,h))}if(l===1)throw l=ra,rs(n,0),Ar(n,r),Gn(n,V()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ss(n,Vn,Ki),Gn(n,V()),null}function Ju(n,r){var l=Tt;Tt|=1;try{return n(r)}finally{Tt=l,Tt===0&&(Ws=V()+500,tl&&yr())}}function is(n){Tr!==null&&Tr.tag===0&&!(Tt&6)&&js();var r=Tt;Tt|=1;var l=si.transition,h=gt;try{if(si.transition=null,gt=1,n)return n()}finally{gt=h,si.transition=l,Tt=r,!(Tt&6)&&yr()}}function eh(){$n=Gs.current,Ht(Gs)}function rs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,rv(l)),Qt!==null)for(l=Qt.return;l!==null;){var h=l;switch(cu(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Ja();break;case 3:zs(),Ht(Bn),Ht(yn),Mu();break;case 5:xu(h);break;case 4:zs();break;case 13:Ht(Wt);break;case 19:Ht(Wt);break;case 10:mu(h.type._context);break;case 22:case 23:eh()}l=l.return}if(ln=n,Qt=n=Rr(n.current,null),pn=$n=r,nn=0,ra=null,qu=Ml=ns=0,Vn=sa=null,Jr!==null){for(r=0;r<Jr.length;r++)if(l=Jr[r],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,v=l.pending;if(v!==null){var T=v.next;v.next=p,h.next=T}l.pending=h}Jr=null}return n}function Am(n,r){do{var l=Qt;try{if(pu(),hl.current=ml,dl){for(var h=jt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}dl=!1}if(ts=0,an=tn=jt=null,Qo=!1,Jo=0,Xu.current=null,l===null||l.return===null){nn=1,ra=r,Qt=null;break}e:{var v=n,T=l.return,I=l,O=r;if(r=pn,I.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=O,_e=I,ye=_e.tag;if(!(_e.mode&1)&&(ye===0||ye===11||ye===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=Zp(T);if(Le!==null){Le.flags&=-257,Qp(Le,T,I,v,r),Le.mode&1&&$p(v,Q,r),r=Le,O=Q;var ze=r.updateQueue;if(ze===null){var He=new Set;He.add(O),r.updateQueue=He}else ze.add(O);break e}else{if(!(r&1)){$p(v,Q,r),th();break e}O=Error(t(426))}}else if(Gt&&I.mode&1){var Zt=Zp(T);if(Zt!==null){!(Zt.flags&65536)&&(Zt.flags|=256),Qp(Zt,T,I,v,r),du(Hs(O,I));break e}}v=O=Hs(O,I),nn!==4&&(nn=2),sa===null?sa=[v]:sa.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var Y=Yp(v,O,r);Sp(v,Y);break e;case 1:I=O;var G=v.type,K=v.stateNode;if(!(v.flags&128)&&(typeof G.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Er===null||!Er.has(K)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ee=Kp(v,I,r);Sp(v,Ee);break e}}v=v.return}while(v!==null)}Cm(l)}catch(Ge){r=Ge,Qt===l&&l!==null&&(Qt=l=l.return);continue}break}while(!0)}function Rm(){var n=Sl.current;return Sl.current=ml,n===null?ml:n}function th(){(nn===0||nn===3||nn===2)&&(nn=4),ln===null||!(ns&268435455)&&!(Ml&268435455)||Ar(ln,pn)}function bl(n,r){var l=Tt;Tt|=2;var h=Rm();(ln!==n||pn!==r)&&(Ki=null,rs(n,r));do try{Cv();break}catch(p){Am(n,p)}while(!0);if(pu(),Tt=l,Sl.current=h,Qt!==null)throw Error(t(261));return ln=null,pn=0,nn}function Cv(){for(;Qt!==null;)bm(Qt)}function Pv(){for(;Qt!==null&&!J();)bm(Qt)}function bm(n){var r=Dm(n.alternate,n,$n);n.memoizedProps=n.pendingProps,r===null?Cm(n):Qt=r,Xu.current=null}function Cm(n){var r=n;do{var l=r.alternate;if(n=r.return,r.flags&32768){if(l=Ev(l,r),l!==null){l.flags&=32767,Qt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Qt=null;return}}else if(l=Mv(l,r,$n),l!==null){Qt=l;return}if(r=r.sibling,r!==null){Qt=r;return}Qt=r=n}while(r!==null);nn===0&&(nn=5)}function ss(n,r,l){var h=gt,p=si.transition;try{si.transition=null,gt=1,Lv(n,r,l,h)}finally{si.transition=p,gt=h}return null}function Lv(n,r,l,h){do js();while(Tr!==null);if(Tt&6)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(vn(n,v),n===ln&&(Qt=ln=null,pn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Tl||(Tl=!0,Im(Fe,function(){return js(),null})),v=(l.flags&15990)!==0,l.subtreeFlags&15990||v){v=si.transition,si.transition=null;var T=gt;gt=1;var I=Tt;Tt|=4,Xu.current=null,wv(n,l),ym(l,n),Z0(tu),Ba=!!eu,tu=eu=null,n.current=l,Av(l),te(),Tt=I,gt=T,si.transition=v}else n.current=l;if(Tl&&(Tl=!1,Tr=n,wl=p),v=n.pendingLanes,v===0&&(Er=null),wt(l.stateNode),Gn(n,V()),r!==null)for(h=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(El)throw El=!1,n=Ku,Ku=null,n;return wl&1&&n.tag!==0&&js(),v=n.pendingLanes,v&1?n===$u?oa++:(oa=0,$u=n):oa=0,yr(),null}function js(){if(Tr!==null){var n=_f(wl),r=si.transition,l=gt;try{if(si.transition=null,gt=16>n?16:n,Tr===null)var h=!1;else{if(n=Tr,Tr=null,wl=0,Tt&6)throw Error(t(331));var p=Tt;for(Tt|=4,Oe=n.current;Oe!==null;){var v=Oe,T=v.child;if(Oe.flags&16){var I=v.deletions;if(I!==null){for(var O=0;O<I.length;O++){var Q=I[O];for(Oe=Q;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:ia(8,_e,v)}var ye=_e.child;if(ye!==null)ye.return=_e,Oe=ye;else for(;Oe!==null;){_e=Oe;var me=_e.sibling,Le=_e.return;if(pm(_e),_e===Q){Oe=null;break}if(me!==null){me.return=Le,Oe=me;break}Oe=Le}}}var ze=v.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Zt=He.sibling;He.sibling=null,He=Zt}while(He!==null)}}Oe=v}}if(v.subtreeFlags&2064&&T!==null)T.return=v,Oe=T;else e:for(;Oe!==null;){if(v=Oe,v.flags&2048)switch(v.tag){case 0:case 11:case 15:ia(9,v,v.return)}var Y=v.sibling;if(Y!==null){Y.return=v.return,Oe=Y;break e}Oe=v.return}}var G=n.current;for(Oe=G;Oe!==null;){T=Oe;var K=T.child;if(T.subtreeFlags&2064&&K!==null)K.return=T,Oe=K;else e:for(T=G;Oe!==null;){if(I=Oe,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:xl(9,I)}}catch(Ge){Yt(I,I.return,Ge)}if(I===T){Oe=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Oe=Ee;break e}Oe=I.return}}if(Tt=p,yr(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(je,n)}catch{}h=!0}return h}finally{gt=l,si.transition=r}}return!1}function Pm(n,r,l){r=Hs(l,r),r=Yp(n,r,1),n=Sr(n,r,1),r=Pn(),n!==null&&($t(n,1,r),Gn(n,r))}function Yt(n,r,l){if(n.tag===3)Pm(n,n,l);else for(;r!==null;){if(r.tag===3){Pm(r,n,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Er===null||!Er.has(h))){n=Hs(l,n),n=Kp(r,n,1),r=Sr(r,n,1),n=Pn(),r!==null&&($t(r,1,n),Gn(r,n));break}}r=r.return}}function Dv(n,r,l){var h=n.pingCache;h!==null&&h.delete(r),r=Pn(),n.pingedLanes|=n.suspendedLanes&l,ln===n&&(pn&l)===l&&(nn===4||nn===3&&(pn&130023424)===pn&&500>V()-Yu?rs(n,0):qu|=l),Gn(n,r)}function Lm(n,r){r===0&&(n.mode&1?(r=xt,xt<<=1,!(xt&130023424)&&(xt=4194304)):r=1);var l=Pn();n=Xi(n,r),n!==null&&($t(n,r,l),Gn(n,l))}function Iv(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Lm(n,l)}function Nv(n,r){var l=0;switch(n.tag){case 13:var h=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),Lm(n,l)}var Dm;Dm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Bn.current)Hn=!0;else{if(!(n.lanes&l)&&!(r.flags&128))return Hn=!1,Sv(n,r,l);Hn=!!(n.flags&131072)}else Hn=!1,Gt&&r.flags&1048576&&hp(r,il,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;vl(n,r),n=r.pendingProps;var p=Is(r,yn.current);Bs(r,l),p=wu(null,r,h,n,p,l);var v=Au();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,zn(h)?(v=!0,el(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,vu(r),p.updater=gl,r.stateNode=p,p._reactInternals=r,Du(r,h,n,l),r=Fu(null,r,h,!0,v,l)):(r.tag=0,Gt&&v&&lu(r),Cn(null,r,p,l),r=r.child),r;case 16:h=r.elementType;e:{switch(vl(n,r),n=r.pendingProps,p=h._init,h=p(h._payload),r.type=h,p=r.tag=Fv(h),n=mi(h,n),p){case 0:r=Uu(null,r,h,n,l);break e;case 1:r=rm(null,r,h,n,l);break e;case 11:r=Jp(null,r,h,n,l);break e;case 14:r=em(null,r,h,mi(h.type,n),l);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:mi(h,p),Uu(n,r,h,p,l);case 1:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:mi(h,p),rm(n,r,h,p,l);case 3:e:{if(sm(r),n===null)throw Error(t(387));h=r.pendingProps,v=r.memoizedState,p=v.element,xp(n,r),cl(r,h,null,l);var T=r.memoizedState;if(h=T.element,v.isDehydrated)if(v={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Hs(Error(t(423)),r),r=om(n,r,h,l,p);break e}else if(h!==p){p=Hs(Error(t(424)),r),r=om(n,r,h,l,p);break e}else for(Kn=gr(r.stateNode.containerInfo.firstChild),Yn=r,Gt=!0,pi=null,l=vp(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Fs(),h===p){r=Yi(n,r,l);break e}Cn(n,r,h,l)}r=r.child}return r;case 5:return Ep(r),n===null&&hu(r),h=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,T=p.children,nu(h,p)?T=null:v!==null&&nu(h,v)&&(r.flags|=32),im(n,r),Cn(n,r,T,l),r.child;case 6:return n===null&&hu(r),null;case 13:return am(n,r,l);case 4:return yu(r,r.stateNode.containerInfo),h=r.pendingProps,n===null?r.child=Os(r,null,h,l):Cn(n,r,h,l),r.child;case 11:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:mi(h,p),Jp(n,r,h,p,l);case 7:return Cn(n,r,r.pendingProps,l),r.child;case 8:return Cn(n,r,r.pendingProps.children,l),r.child;case 12:return Cn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(h=r.type._context,p=r.pendingProps,v=r.memoizedProps,T=p.value,kt(ol,h._currentValue),h._currentValue=T,v!==null)if(fi(v.value,T)){if(v.children===p.children&&!Bn.current){r=Yi(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var I=v.dependencies;if(I!==null){T=v.child;for(var O=I.firstContext;O!==null;){if(O.context===h){if(v.tag===1){O=qi(-1,l&-l),O.tag=2;var Q=v.updateQueue;if(Q!==null){Q=Q.shared;var _e=Q.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),Q.pending=O}}v.lanes|=l,O=v.alternate,O!==null&&(O.lanes|=l),gu(v.return,l,r),I.lanes|=l;break}O=O.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,I=T.alternate,I!==null&&(I.lanes|=l),gu(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Cn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,h=r.pendingProps.children,Bs(r,l),p=ii(p),h=h(p),r.flags|=1,Cn(n,r,h,l),r.child;case 14:return h=r.type,p=mi(h,r.pendingProps),p=mi(h.type,p),em(n,r,h,p,l);case 15:return tm(n,r,r.type,r.pendingProps,l);case 17:return h=r.type,p=r.pendingProps,p=r.elementType===h?p:mi(h,p),vl(n,r),r.tag=1,zn(h)?(n=!0,el(r)):n=!1,Bs(r,l),Xp(r,h,p),Du(r,h,p,l),Fu(null,r,h,!0,n,l);case 19:return cm(n,r,l);case 22:return nm(n,r,l)}throw Error(t(156,r.tag))};function Im(n,r){return A(n,r)}function Uv(n,r,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(n,r,l,h){return new Uv(n,r,l,h)}function nh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Fv(n){if(typeof n=="function")return nh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===fe)return 14}return 2}function Rr(n,r){var l=n.alternate;return l===null?(l=oi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Cl(n,r,l,h,p,v){var T=2;if(h=n,typeof n=="function")nh(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case U:return os(l.children,p,v,r);case q:T=8,p|=8;break;case C:return n=oi(12,l,r,p|2),n.elementType=C,n.lanes=v,n;case ee:return n=oi(13,l,r,p),n.elementType=ee,n.lanes=v,n;case he:return n=oi(19,l,r,p),n.elementType=he,n.lanes=v,n;case le:return Pl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:T=10;break e;case H:T=9;break e;case oe:T=11;break e;case fe:T=14;break e;case se:T=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=oi(T,l,r,p),r.elementType=n,r.type=h,r.lanes=v,r}function os(n,r,l,h){return n=oi(7,n,h,r),n.lanes=l,n}function Pl(n,r,l,h){return n=oi(22,n,h,r),n.elementType=le,n.lanes=l,n.stateNode={isHidden:!1},n}function ih(n,r,l){return n=oi(6,n,null,r),n.lanes=l,n}function rh(n,r,l){return r=oi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Ov(n,r,l,h,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function sh(n,r,l,h,p,v,T,I,O){return n=new Ov(n,r,l,I,O),r===1?(r=1,v===!0&&(r|=8)):r=0,v=oi(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(v),n}function kv(n,r,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:h==null?null:""+h,children:n,containerInfo:r,implementation:l}}function Nm(n){if(!n)return vr;n=n._reactInternals;e:{if(Ri(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(zn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(zn(l))return lp(n,l,r)}return r}function Um(n,r,l,h,p,v,T,I,O){return n=sh(l,h,!0,n,p,v,T,I,O),n.context=Nm(null),l=n.current,h=Pn(),p=wr(l),v=qi(h,p),v.callback=r??null,Sr(l,v,p),n.current.lanes=p,$t(n,p,h),Gn(n,h),n}function Ll(n,r,l,h){var p=r.current,v=Pn(),T=wr(p);return l=Nm(l),r.context===null?r.context=l:r.pendingContext=l,r=qi(v,T),r.payload={element:n},h=h===void 0?null:h,h!==null&&(r.callback=h),n=Sr(p,r,T),n!==null&&(vi(n,p,T,v),ll(n,p,T)),T}function Dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function oh(n,r){Fm(n,r),(n=n.alternate)&&Fm(n,r)}function Bv(){return null}var Om=typeof reportError=="function"?reportError:function(n){console.error(n)};function ah(n){this._internalRoot=n}Il.prototype.render=ah.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Ll(n,r,null,null)},Il.prototype.unmount=ah.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;is(function(){Ll(null,n,null,null)}),r[Vi]=null}};function Il(n){this._internalRoot=n}Il.prototype.unstable_scheduleHydration=function(n){if(n){var r=xf();n={blockedOn:null,target:n,priority:r};for(var l=0;l<fr.length&&r!==0&&r<fr[l].priority;l++);fr.splice(l,0,n),l===0&&Ef(n)}};function lh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Nl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function km(){}function zv(n,r,l,h,p){if(p){if(typeof h=="function"){var v=h;h=function(){var Q=Dl(T);v.call(Q)}}var T=Um(r,h,n,0,null,!1,!1,"",km);return n._reactRootContainer=T,n[Vi]=T.current,Wo(n.nodeType===8?n.parentNode:n),is(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof h=="function"){var I=h;h=function(){var Q=Dl(O);I.call(Q)}}var O=sh(n,0,!1,null,null,!1,!1,"",km);return n._reactRootContainer=O,n[Vi]=O.current,Wo(n.nodeType===8?n.parentNode:n),is(function(){Ll(r,O,l,h)}),O}function Ul(n,r,l,h,p){var v=l._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var I=p;p=function(){var O=Dl(T);I.call(O)}}Ll(r,T,n,p)}else T=zv(l,r,n,p,h);return Dl(T)}vf=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=dn(r.pendingLanes);l!==0&&(Yr(r,l|1),Gn(r,V()),!(Tt&6)&&(Ws=V()+500,yr()))}break;case 13:is(function(){var h=Xi(n,1);if(h!==null){var p=Pn();vi(h,n,1,p)}}),oh(n,1)}},Ic=function(n){if(n.tag===13){var r=Xi(n,134217728);if(r!==null){var l=Pn();vi(r,n,134217728,l)}oh(n,134217728)}},yf=function(n){if(n.tag===13){var r=wr(n),l=Xi(n,r);if(l!==null){var h=Pn();vi(l,n,r,h)}oh(n,r)}},xf=function(){return gt},Sf=function(n,r){var l=gt;try{return gt=n,r()}finally{gt=l}},Ae=function(n,r,l){switch(r){case"input":if(dt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==n&&h.form===n.form){var p=Qa(h);if(!p)throw Error(t(90));yt(h),dt(h,p)}}}break;case"textarea":pe(n,l);break;case"select":r=l.value,r!=null&&P(n,!!l.multiple,r,!1)}},Bt=Ju,en=is;var Hv={usingClientEntryPoint:!1,Events:[qo,Ls,Qa,Ce,st,Ju]},aa={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vv={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ua(n),n===null?null:n.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||Bv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{je=Fl.inject(Vv),ot=Fl}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv,Wn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lh(r))throw Error(t(200));return kv(n,r,null,l)},Wn.createRoot=function(n,r){if(!lh(n))throw Error(t(299));var l=!1,h="",p=Om;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=sh(n,1,!1,null,null,l,!1,h,p),n[Vi]=r.current,Wo(n.nodeType===8?n.parentNode:n),new ah(r)},Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ua(r),n=n===null?null:n.stateNode,n},Wn.flushSync=function(n){return is(n)},Wn.hydrate=function(n,r,l){if(!Nl(r))throw Error(t(200));return Ul(null,n,r,!0,l)},Wn.hydrateRoot=function(n,r,l){if(!lh(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,v="",T=Om;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=Um(r,null,n,1,l??null,p,!1,v,T),n[Vi]=r.current,Wo(n),h)for(n=0;n<h.length;n++)l=h[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Il(r)},Wn.render=function(n,r,l){if(!Nl(r))throw Error(t(200));return Ul(null,n,r,!1,l)},Wn.unmountComponentAtNode=function(n){if(!Nl(n))throw Error(t(40));return n._reactRootContainer?(is(function(){Ul(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1},Wn.unstable_batchedUpdates=Ju,Wn.unstable_renderSubtreeIntoContainer=function(n,r,l,h){if(!Nl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ul(n,r,l,!1,h)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var Xm;function $v(){if(Xm)return hh.exports;Xm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hh.exports=Kv(),hh.exports}var qm;function Zv(){if(qm)return Ol;qm=1;var o=$v();return Ol.createRoot=o.createRoot,Ol.hydrateRoot=o.hydrateRoot,Ol}var Qv=Zv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wd="171",ho={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jv=0,Ym=1,ey=2,T_=1,ty=2,nr=3,Ni=0,Xn=1,Ii=2,Hr=0,fo=1,Km=2,$m=3,Zm=4,ny=5,ms=100,iy=101,ry=102,sy=103,oy=104,ay=200,ly=201,cy=202,uy=203,Qh=204,Jh=205,hy=206,dy=207,fy=208,py=209,my=210,gy=211,_y=212,vy=213,yy=214,ed=0,td=1,nd=2,vo=3,id=4,rd=5,sd=6,od=7,jd=0,xy=1,Sy=2,Vr=0,My=1,Ey=2,Ty=3,wy=4,Ay=5,Ry=6,by=7,Qm="attached",Cy="detached",w_=300,yo=301,xo=302,ad=303,ld=304,Ac=306,vs=1e3,kr=1001,Sc=1002,Un=1003,A_=1004,va=1005,Jn=1006,fc=1007,rr=1008,ar=1009,R_=1010,b_=1011,Ea=1012,Xd=1013,ys=1014,Ti=1015,Ra=1016,qd=1017,Yd=1018,So=1020,C_=35902,P_=1021,L_=1022,ui=1023,D_=1024,I_=1025,po=1026,Mo=1027,Kd=1028,$d=1029,N_=1030,Zd=1031,Qd=1033,pc=33776,mc=33777,gc=33778,_c=33779,cd=35840,ud=35841,hd=35842,dd=35843,fd=36196,pd=37492,md=37496,gd=37808,_d=37809,vd=37810,yd=37811,xd=37812,Sd=37813,Md=37814,Ed=37815,Td=37816,wd=37817,Ad=37818,Rd=37819,bd=37820,Cd=37821,vc=36492,Pd=36494,Ld=36495,U_=36283,Dd=36284,Id=36285,Nd=36286,Ta=2300,wa=2301,ph=2302,Jm=2400,eg=2401,tg=2402,Py=2500,Ly=0,F_=1,Ud=2,Dy=3200,Iy=3201,Jd=0,Ny=1,Or="",Kt="srgb",On="srgb-linear",Mc="linear",Ut="srgb",Xs=7680,ng=519,Uy=512,Fy=513,Oy=514,O_=515,ky=516,By=517,zy=518,Hy=519,Fd=35044,ig="300 es",sr=2e3,Ec=2001;class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rg=1234567;const xa=Math.PI/180,Eo=180/Math.PI;function wi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function ht(o,e,t){return Math.max(e,Math.min(t,o))}function ef(o,e){return(o%e+e)%e}function Vy(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function Gy(o,e,t){return o!==e?(t-o)/(e-o):0}function Sa(o,e,t){return(1-t)*o+t*e}function Wy(o,e,t,i){return Sa(o,e,1-Math.exp(-t*i))}function jy(o,e=1){return e-Math.abs(ef(o,e*2)-e)}function Xy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function qy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Yy(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Ky(o,e){return o+Math.random()*(e-o)}function $y(o){return o*(.5-Math.random())}function Zy(o){o!==void 0&&(rg=o);let e=rg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qy(o){return o*xa}function Jy(o){return o*Eo}function ex(o){return(o&o-1)===0&&o!==0}function tx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function nx(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ix(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),d=c(t/2),f=a((e+i)/2),m=c((e+i)/2),g=a((e-i)/2),_=c((e-i)/2),x=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*m,d*g,d*_,u*f);break;case"YZY":o.set(d*_,u*m,d*g,u*f);break;case"ZXZ":o.set(d*g,d*_,u*m,u*f);break;case"XZX":o.set(u*m,d*M,d*x,u*f);break;case"YXY":o.set(d*x,u*m,d*M,u*f);break;case"ZYZ":o.set(d*M,d*x,u*m,u*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Lt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const k_={DEG2RAD:xa,RAD2DEG:Eo,generateUUID:wi,clamp:ht,euclideanModulo:ef,mapLinear:Vy,inverseLerp:Gy,lerp:Sa,damp:Wy,pingpong:jy,smoothstep:Xy,smootherstep:qy,randInt:Yy,randFloat:Ky,randFloatSpread:$y,seededRandom:Zy,degToRad:Qy,radToDeg:Jy,isPowerOfTwo:ex,ceilPowerOfTwo:tx,floorPowerOfTwo:nx,setQuaternionFromProperEuler:ix,normalize:Lt,denormalize:Mi};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,i,s,a,c,u,d,f){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,d,f)}set(e,t,i,s,a,c,u,d,f){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=t,m[4]=a,m[5]=d,m[6]=i,m[7]=c,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],d=i[6],f=i[1],m=i[4],g=i[7],_=i[2],x=i[5],M=i[8],E=s[0],S=s[3],y=s[6],D=s[1],L=s[4],R=s[7],k=s[2],N=s[5],U=s[8];return a[0]=c*E+u*D+d*k,a[3]=c*S+u*L+d*N,a[6]=c*y+u*R+d*U,a[1]=f*E+m*D+g*k,a[4]=f*S+m*L+g*N,a[7]=f*y+m*R+g*U,a[2]=_*E+x*D+M*k,a[5]=_*S+x*L+M*N,a[8]=_*y+x*R+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],m=e[8];return t*c*m-t*u*f-i*a*m+i*u*d+s*a*f-s*c*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=m*c-u*f,_=u*d-m*a,x=f*a-c*d,M=t*g+i*_+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*f-m*i)*E,e[2]=(u*i-s*c)*E,e[3]=_*E,e[4]=(m*t-s*d)*E,e[5]=(s*a-u*t)*E,e[6]=x*E,e[7]=(i*d-f*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const d=Math.cos(a),f=Math.sin(a);return this.set(i*d,i*f,-i*(d*c+f*u)+c+e,-s*f,s*d,-s*(-f*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(mh.makeScale(e,t)),this}rotate(e){return this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new at;function B_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Aa(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function rx(){const o=Aa("canvas");return o.style.display="block",o}const sg={};function ao(o){o in sg||(sg[o]=!0,console.warn(o))}function sx(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function ox(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ax(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const og=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ag=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lx(){const o={enabled:!0,workingColorSpace:On,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ut&&(s.r=or(s.r),s.g=or(s.g),s.b=or(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(s.r=mo(s.r),s.g=mo(s.g),s.b=mo(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Or?Mc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[On]:{primaries:e,whitePoint:i,transfer:Mc,toXYZ:og,fromXYZ:ag,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:og,fromXYZ:ag,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),o}const _t=lx();function or(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let qs;class cx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=Aa("canvas")),qs.width=e.width,qs.height=e.height;const i=qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Aa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=or(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(or(t[i]/255)*255):t[i]=or(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ux=0;class z_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(gh(s[c].image)):a.push(gh(s[c]))}else a=gh(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function gh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?cx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hx=0;class hn extends Ss{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=kr,s=kr,a=Jn,c=rr,u=ui,d=ar,f=hn.DEFAULT_ANISOTROPY,m=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=wi(),this.name="",this.source=new z_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==w_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vs:e.x=e.x-Math.floor(e.x);break;case kr:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vs:e.y=e.y-Math.floor(e.y);break;case kr:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=w_;hn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,f=d[0],m=d[4],g=d[8],_=d[1],x=d[5],M=d[9],E=d[2],S=d[6],y=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(f+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(f+1)/2,R=(x+1)/2,k=(y+1)/2,N=(m+_)/4,U=(g+E)/4,q=(M+S)/4;return L>R&&L>k?L<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(L),s=N/i,a=U/i):R>k?R<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(R),i=N/s,a=q/s):k<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(k),i=U/a,s=q/a),this.set(i,s,a,t),this}let D=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(_-m)*(_-m));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(g-E)/D,this.z=(_-m)/D,this.w=Math.acos((f+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dx extends Ss{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new z_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends dx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class H_ extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fx extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let d=i[s+0],f=i[s+1],m=i[s+2],g=i[s+3];const _=a[c+0],x=a[c+1],M=a[c+2],E=a[c+3];if(u===0){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==_||f!==x||m!==M){let S=1-u;const y=d*_+f*x+m*M+g*E,D=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const k=Math.sqrt(L),N=Math.atan2(k,y*D);S=Math.sin(S*N)/k,u=Math.sin(u*N)/k}const R=u*D;if(d=d*S+_*R,f=f*S+x*R,m=m*S+M*R,g=g*S+E*R,S===1-u){const k=1/Math.sqrt(d*d+f*f+m*m+g*g);d*=k,f*=k,m*=k,g*=k}}e[t]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],d=i[s+1],f=i[s+2],m=i[s+3],g=a[c],_=a[c+1],x=a[c+2],M=a[c+3];return e[t]=u*M+m*g+d*x-f*_,e[t+1]=d*M+m*_+f*g-u*x,e[t+2]=f*M+m*x+u*_-d*g,e[t+3]=m*M-u*g-d*_-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,f=u(i/2),m=u(s/2),g=u(a/2),_=d(i/2),x=d(s/2),M=d(a/2);switch(c){case"XYZ":this._x=_*m*g+f*x*M,this._y=f*x*g-_*m*M,this._z=f*m*M+_*x*g,this._w=f*m*g-_*x*M;break;case"YXZ":this._x=_*m*g+f*x*M,this._y=f*x*g-_*m*M,this._z=f*m*M-_*x*g,this._w=f*m*g+_*x*M;break;case"ZXY":this._x=_*m*g-f*x*M,this._y=f*x*g+_*m*M,this._z=f*m*M+_*x*g,this._w=f*m*g-_*x*M;break;case"ZYX":this._x=_*m*g-f*x*M,this._y=f*x*g+_*m*M,this._z=f*m*M-_*x*g,this._w=f*m*g+_*x*M;break;case"YZX":this._x=_*m*g+f*x*M,this._y=f*x*g+_*m*M,this._z=f*m*M-_*x*g,this._w=f*m*g-_*x*M;break;case"XZY":this._x=_*m*g-f*x*M,this._y=f*x*g-_*m*M,this._z=f*m*M+_*x*g,this._w=f*m*g+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],d=t[9],f=t[2],m=t[6],g=t[10],_=i+u+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-d)*x,this._y=(a-f)*x,this._z=(c-s)*x}else if(i>u&&i>g){const x=2*Math.sqrt(1+i-u-g);this._w=(m-d)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+f)/x}else if(u>g){const x=2*Math.sqrt(1+u-i-g);this._w=(a-f)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+g-i-u);this._w=(c-s)/x,this._x=(a+f)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,d=t._y,f=t._z,m=t._w;return this._x=i*m+c*u+s*f-a*d,this._y=s*m+c*d+a*u-i*f,this._z=a*m+c*f+i*d-s*u,this._w=c*m-i*u-s*d-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*i+t*this._x,this._y=x*s+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const f=Math.sqrt(d),m=Math.atan2(f,u),g=Math.sin((1-t)*m)/f,_=Math.sin(t*m)/f;return this._w=c*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,d=e.w,f=2*(c*s-u*i),m=2*(u*t-a*s),g=2*(a*i-c*t);return this.x=t+d*f+c*g-u*m,this.y=i+d*m+u*f-a*g,this.z=s+d*g+a*m-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=s*d-a*u,this.y=a*c-i*d,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new W,lg=new Ui;class Fi{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,yi):yi.fromBufferAttribute(a,c),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kl.copy(i.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),Bl.subVectors(this.max,ca),Ys.subVectors(e.a,ca),Ks.subVectors(e.b,ca),$s.subVectors(e.c,ca),Cr.subVectors(Ks,Ys),Pr.subVectors($s,Ks),as.subVectors(Ys,$s);let t=[0,-Cr.z,Cr.y,0,-Pr.z,Pr.y,0,-as.z,as.y,Cr.z,0,-Cr.x,Pr.z,0,-Pr.x,as.z,0,-as.x,-Cr.y,Cr.x,0,-Pr.y,Pr.x,0,-as.y,as.x,0];return!vh(t,Ys,Ks,$s,Bl)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,Ys,Ks,$s,Bl))?!1:(zl.crossVectors(Cr,Pr),t=[zl.x,zl.y,zl.z],vh(t,Ys,Ks,$s,Bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new W,new W,new W,new W,new W,new W,new W,new W],yi=new W,kl=new Fi,Ys=new W,Ks=new W,$s=new W,Cr=new W,Pr=new W,as=new W,ca=new W,Bl=new W,zl=new W,ls=new W;function vh(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){ls.fromArray(o,a);const u=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),d=e.dot(ls),f=t.dot(ls),m=i.dot(ls);if(Math.max(-Math.max(d,f,m),Math.min(d,f,m))>u)return!1}return!0}const px=new Fi,ua=new W,yh=new W;class Oi{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):px.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const t=ua.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ua,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(yh)),this.expandByPoint(ua.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new W,xh=new W,Hl=new W,Lr=new W,Sh=new W,Vl=new W,Mh=new W;class ba{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xh.copy(e).add(t).multiplyScalar(.5),Hl.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(xh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Hl),u=Lr.dot(this.direction),d=-Lr.dot(Hl),f=Lr.lengthSq(),m=Math.abs(1-c*c);let g,_,x,M;if(m>0)if(g=c*d-u,_=c*u-d,M=a*m,g>=0)if(_>=-M)if(_<=M){const E=1/m;g*=E,_*=E,x=g*(g+c*_+2*u)+_*(c*g+_+2*d)+f}else _=a,g=Math.max(0,-(c*_+u)),x=-g*g+_*(_+2*d)+f;else _=-a,g=Math.max(0,-(c*_+u)),x=-g*g+_*(_+2*d)+f;else _<=-M?(g=Math.max(0,-(-c*a+u)),_=g>0?-a:Math.min(Math.max(-a,-d),a),x=-g*g+_*(_+2*d)+f):_<=M?(g=0,_=Math.min(Math.max(-a,-d),a),x=_*(_+2*d)+f):(g=Math.max(0,-(c*a+u)),_=g>0?a:Math.min(Math.max(-a,-d),a),x=-g*g+_*(_+2*d)+f);else _=c>0?-a:a,g=Math.max(0,-(c*_+u)),x=-g*g+_*(_+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(xh).addScaledVector(Hl,_),x}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const i=Zi.dot(this.direction),s=Zi.dot(Zi)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,d;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return f>=0?(i=(e.min.x-_.x)*f,s=(e.max.x-_.x)*f):(i=(e.max.x-_.x)*f,s=(e.min.x-_.x)*f),m>=0?(a=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),i>d||u>s)||((u>i||i!==i)&&(i=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,i,s,a){Sh.subVectors(t,e),Vl.subVectors(i,e),Mh.crossVectors(Sh,Vl);let c=this.direction.dot(Mh),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Lr.subVectors(this.origin,e);const d=u*this.direction.dot(Vl.crossVectors(Lr,Vl));if(d<0)return null;const f=u*this.direction.dot(Sh.cross(Lr));if(f<0||d+f>c)return null;const m=-u*Lr.dot(Mh);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,s,a,c,u,d,f,m,g,_,x,M,E,S){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,d,f,m,g,_,x,M,E,S)}set(e,t,i,s,a,c,u,d,f,m,g,_,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=s,y[1]=a,y[5]=c,y[9]=u,y[13]=d,y[2]=f,y[6]=m,y[10]=g,y[14]=_,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),a=1/Zs.setFromMatrixColumn(e,1).length(),c=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(s),f=Math.sin(s),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=c*m,x=c*g,M=u*m,E=u*g;t[0]=d*m,t[4]=-d*g,t[8]=f,t[1]=x+M*f,t[5]=_-E*f,t[9]=-u*d,t[2]=E-_*f,t[6]=M+x*f,t[10]=c*d}else if(e.order==="YXZ"){const _=d*m,x=d*g,M=f*m,E=f*g;t[0]=_+E*u,t[4]=M*u-x,t[8]=c*f,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=x*u-M,t[6]=E+_*u,t[10]=c*d}else if(e.order==="ZXY"){const _=d*m,x=d*g,M=f*m,E=f*g;t[0]=_-E*u,t[4]=-c*g,t[8]=M+x*u,t[1]=x+M*u,t[5]=c*m,t[9]=E-_*u,t[2]=-c*f,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const _=c*m,x=c*g,M=u*m,E=u*g;t[0]=d*m,t[4]=M*f-x,t[8]=_*f+E,t[1]=d*g,t[5]=E*f+_,t[9]=x*f-M,t[2]=-f,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,x=c*f,M=u*d,E=u*f;t[0]=d*m,t[4]=E-_*g,t[8]=M*g+x,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-f*m,t[6]=x*g+M,t[10]=_-E*g}else if(e.order==="XZY"){const _=c*d,x=c*f,M=u*d,E=u*f;t[0]=d*m,t[4]=-g,t[8]=f*m,t[1]=_*g+E,t[5]=c*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=u*m,t[10]=E*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mx,e,gx)}lookAt(e,t,i){const s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Dr.crossVectors(i,Zn),Dr.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Dr.crossVectors(i,Zn)),Dr.normalize(),Gl.crossVectors(Zn,Dr),s[0]=Dr.x,s[4]=Gl.x,s[8]=Zn.x,s[1]=Dr.y,s[5]=Gl.y,s[9]=Zn.y,s[2]=Dr.z,s[6]=Gl.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],d=i[8],f=i[12],m=i[1],g=i[5],_=i[9],x=i[13],M=i[2],E=i[6],S=i[10],y=i[14],D=i[3],L=i[7],R=i[11],k=i[15],N=s[0],U=s[4],q=s[8],C=s[12],b=s[1],H=s[5],oe=s[9],ee=s[13],he=s[2],fe=s[6],se=s[10],le=s[14],z=s[3],ae=s[7],re=s[11],F=s[15];return a[0]=c*N+u*b+d*he+f*z,a[4]=c*U+u*H+d*fe+f*ae,a[8]=c*q+u*oe+d*se+f*re,a[12]=c*C+u*ee+d*le+f*F,a[1]=m*N+g*b+_*he+x*z,a[5]=m*U+g*H+_*fe+x*ae,a[9]=m*q+g*oe+_*se+x*re,a[13]=m*C+g*ee+_*le+x*F,a[2]=M*N+E*b+S*he+y*z,a[6]=M*U+E*H+S*fe+y*ae,a[10]=M*q+E*oe+S*se+y*re,a[14]=M*C+E*ee+S*le+y*F,a[3]=D*N+L*b+R*he+k*z,a[7]=D*U+L*H+R*fe+k*ae,a[11]=D*q+L*oe+R*se+k*re,a[15]=D*C+L*ee+R*le+k*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],d=e[9],f=e[13],m=e[2],g=e[6],_=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15];return M*(+a*d*g-s*f*g-a*u*_+i*f*_+s*u*x-i*d*x)+E*(+t*d*x-t*f*_+a*c*_-s*c*x+s*f*m-a*d*m)+S*(+t*f*g-t*u*x-a*c*g+i*c*x+a*u*m-i*f*m)+y*(-s*u*m-t*d*g+t*u*_+s*c*g-i*c*_+i*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=e[9],_=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],D=g*S*f-E*_*f+E*d*x-u*S*x-g*d*y+u*_*y,L=M*_*f-m*S*f-M*d*x+c*S*x+m*d*y-c*_*y,R=m*E*f-M*g*f+M*u*x-c*E*x-m*u*y+c*g*y,k=M*g*d-m*E*d-M*u*_+c*E*_+m*u*S-c*g*S,N=t*D+i*L+s*R+a*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return e[0]=D*U,e[1]=(E*_*a-g*S*a-E*s*x+i*S*x+g*s*y-i*_*y)*U,e[2]=(u*S*a-E*d*a+E*s*f-i*S*f-u*s*y+i*d*y)*U,e[3]=(g*d*a-u*_*a-g*s*f+i*_*f+u*s*x-i*d*x)*U,e[4]=L*U,e[5]=(m*S*a-M*_*a+M*s*x-t*S*x-m*s*y+t*_*y)*U,e[6]=(M*d*a-c*S*a-M*s*f+t*S*f+c*s*y-t*d*y)*U,e[7]=(c*_*a-m*d*a+m*s*f-t*_*f-c*s*x+t*d*x)*U,e[8]=R*U,e[9]=(M*g*a-m*E*a-M*i*x+t*E*x+m*i*y-t*g*y)*U,e[10]=(c*E*a-M*u*a+M*i*f-t*E*f-c*i*y+t*u*y)*U,e[11]=(m*u*a-c*g*a-m*i*f+t*g*f+c*i*x-t*u*x)*U,e[12]=k*U,e[13]=(m*E*s-M*g*s+M*i*_-t*E*_-m*i*S+t*g*S)*U,e[14]=(M*u*s-c*E*s-M*i*d+t*E*d+c*i*S-t*u*S)*U,e[15]=(c*g*s-m*u*s+m*i*d-t*g*d-c*i*_+t*u*_)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,d=e.z,f=a*c,m=a*u;return this.set(f*c+i,f*u-s*d,f*d+s*u,0,f*u+s*d,m*u+i,m*d-s*c,0,f*d-s*u,m*d+s*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,f=a+a,m=c+c,g=u+u,_=a*f,x=a*m,M=a*g,E=c*m,S=c*g,y=u*g,D=d*f,L=d*m,R=d*g,k=i.x,N=i.y,U=i.z;return s[0]=(1-(E+y))*k,s[1]=(x+R)*k,s[2]=(M-L)*k,s[3]=0,s[4]=(x-R)*N,s[5]=(1-(_+y))*N,s[6]=(S+D)*N,s[7]=0,s[8]=(M+L)*U,s[9]=(S-D)*U,s[10]=(1-(_+E))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Zs.set(s[0],s[1],s[2]).length();const c=Zs.set(s[4],s[5],s[6]).length(),u=Zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],xi.copy(this);const f=1/a,m=1/c,g=1/u;return xi.elements[0]*=f,xi.elements[1]*=f,xi.elements[2]*=f,xi.elements[4]*=m,xi.elements[5]*=m,xi.elements[6]*=m,xi.elements[8]*=g,xi.elements[9]*=g,xi.elements[10]*=g,t.setFromRotationMatrix(xi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=sr){const d=this.elements,f=2*a/(t-e),m=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let x,M;if(u===sr)x=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===Ec)x=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=f,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=sr){const d=this.elements,f=1/(t-e),m=1/(i-s),g=1/(c-a),_=(t+e)*f,x=(i+s)*m;let M,E;if(u===sr)M=(c+a)*g,E=-2*g;else if(u===Ec)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zs=new W,xi=new lt,mx=new W(0,0,0),gx=new W(1,1,1),Dr=new W,Gl=new W,Zn=new W,cg=new lt,ug=new Ui;class Ai{constructor(e=0,t=0,i=0,s=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],d=s[1],f=s[5],m=s[9],g=s[2],_=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(ht(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-ht(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ug.setFromEuler(this),this.setFromQuaternion(ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class V_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _x=0;const hg=new W,Qs=new Ui,Qi=new lt,Wl=new W,ha=new W,vx=new W,yx=new Ui,dg=new W(1,0,0),fg=new W(0,1,0),pg=new W(0,0,1),mg={type:"added"},xx={type:"removed"},Js={type:"childadded",child:null},Eh={type:"childremoved",child:null};class Xt extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new W,t=new Ai,i=new Ui,s=new W(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new at}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new V_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(dg,e)}rotateY(e){return this.rotateOnAxis(fg,e)}rotateZ(e){return this.rotateOnAxis(pg,e)}translateOnAxis(e,t){return hg.copy(e).applyQuaternion(this.quaternion),this.position.add(hg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dg,e)}translateY(e){return this.translateOnAxis(fg,e)}translateZ(e){return this.translateOnAxis(pg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wl.copy(e):Wl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(ha,Wl,this.up):Qi.lookAt(Wl,ha,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(Qi),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mg),Js.child=e,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xx),Eh.child=e,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mg),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,m=d.length;f<m;f++){const g=d[f];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(a(e.materials,this.material[d]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),f=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),x=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const d=[];for(const f in u){const m=u[f];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new W(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new W,Ji=new W,Th=new W,er=new W,eo=new W,to=new W,gg=new W,wh=new W,Ah=new W,Rh=new W,bh=new bt,Ch=new bt,Ph=new bt;class Ei{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Si.subVectors(e,t),s.cross(Si);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Si.subVectors(s,t),Ji.subVectors(i,t),Th.subVectors(e,t);const c=Si.dot(Si),u=Si.dot(Ji),d=Si.dot(Th),f=Ji.dot(Ji),m=Ji.dot(Th),g=c*f-u*u;if(g===0)return a.set(0,0,0),null;const _=1/g,x=(f*d-u*m)*_,M=(c*m-u*d)*_;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,i,s,a,c,u,d){return this.getBarycoord(e,t,i,s,er)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,er.x),d.addScaledVector(c,er.y),d.addScaledVector(u,er.z),d)}static getInterpolatedAttribute(e,t,i,s,a,c){return bh.setScalar(0),Ch.setScalar(0),Ph.setScalar(0),bh.fromBufferAttribute(e,t),Ch.fromBufferAttribute(e,i),Ph.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(bh,a.x),c.addScaledVector(Ch,a.y),c.addScaledVector(Ph,a.z),c}static isFrontFacing(e,t,i,s){return Si.subVectors(i,t),Ji.subVectors(e,t),Si.cross(Ji).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Si.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Ei.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;eo.subVectors(s,i),to.subVectors(a,i),wh.subVectors(e,i);const d=eo.dot(wh),f=to.dot(wh);if(d<=0&&f<=0)return t.copy(i);Ah.subVectors(e,s);const m=eo.dot(Ah),g=to.dot(Ah);if(m>=0&&g<=m)return t.copy(s);const _=d*g-m*f;if(_<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(i).addScaledVector(eo,c);Rh.subVectors(e,a);const x=eo.dot(Rh),M=to.dot(Rh);if(M>=0&&x<=M)return t.copy(a);const E=x*f-d*M;if(E<=0&&f>=0&&M<=0)return u=f/(f-M),t.copy(i).addScaledVector(to,u);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return gg.subVectors(a,s),u=(g-m)/(g-m+(x-M)),t.copy(s).addScaledVector(gg,u);const y=1/(S+E+_);return c=E*y,u=_*y,t.copy(i).addScaledVector(eo,c).addScaledVector(to,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},jl={h:0,s:0,l:0};function Lh(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=_t.workingColorSpace){if(e=ef(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Lh(c,a,e+1/3),this.g=Lh(c,a,e),this.b=Lh(c,a,e-1/3)}return _t.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=G_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return _t.fromWorkingColorSpace(Tn.copy(this),e),Math.round(ht(Tn.r*255,0,255))*65536+Math.round(ht(Tn.g*255,0,255))*256+Math.round(ht(Tn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,s=Tn.g,a=Tn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let d,f;const m=(u+c)/2;if(u===c)d=0,f=0;else{const g=c-u;switch(f=m<=.5?g/(c+u):g/(2-c-u),c){case i:d=(s-a)/g+(s<a?6:0);break;case s:d=(a-i)/g+2;break;case a:d=(i-s)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=m,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Kt){_t.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,s=Tn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(jl);const i=Sa(Ir.h,jl.h,t),s=Sa(Ir.s,jl.s,t),a=Sa(Ir.l,jl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Qe;Qe.NAMES=G_;let Sx=0;class ei extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=fo,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=Jh,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qh&&(i.blendSrc=this.blendSrc),this.blendDst!==Jh&&(i.blendDst=this.blendDst),this.blendEquation!==ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ng&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _s extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new W,Xl=new et;class Fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fd,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fd&&(e.usage=this.usage),e}}class W_ extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class j_ extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class In extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Mx=0;const ai=new lt,Dh=new Xt,no=new W,Qn=new Fi,da=new Fi,un=new W;class hi extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B_(e)?j_:W_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new at().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,i){return ai.makeTranslation(e,t,i),this.applyMatrix4(ai),this}scale(e,t,i){return ai.makeScale(e,t,i),this.applyMatrix4(ai),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new In(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];Qn.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];da.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors(Qn.min,da.min),Qn.expandByPoint(un),un.addVectors(Qn.max,da.max),Qn.expandByPoint(un)):(Qn.expandByPoint(da.min),Qn.expandByPoint(da.max))}Qn.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)un.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(un));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let f=0,m=u.count;f<m;f++)un.fromBufferAttribute(u,f),d&&(no.fromBufferAttribute(e,f),un.add(no)),s=Math.max(s,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let q=0;q<i.count;q++)u[q]=new W,d[q]=new W;const f=new W,m=new W,g=new W,_=new et,x=new et,M=new et,E=new W,S=new W;function y(q,C,b){f.fromBufferAttribute(i,q),m.fromBufferAttribute(i,C),g.fromBufferAttribute(i,b),_.fromBufferAttribute(a,q),x.fromBufferAttribute(a,C),M.fromBufferAttribute(a,b),m.sub(f),g.sub(f),x.sub(_),M.sub(_);const H=1/(x.x*M.y-M.x*x.y);isFinite(H)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(H),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(H),u[q].add(E),u[C].add(E),u[b].add(E),d[q].add(S),d[C].add(S),d[b].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let q=0,C=D.length;q<C;++q){const b=D[q],H=b.start,oe=b.count;for(let ee=H,he=H+oe;ee<he;ee+=3)y(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new W,R=new W,k=new W,N=new W;function U(q){k.fromBufferAttribute(s,q),N.copy(k);const C=u[q];L.copy(C),L.sub(k.multiplyScalar(k.dot(C))).normalize(),R.crossVectors(N,C);const H=R.dot(d[q])<0?-1:1;c.setXYZW(q,L.x,L.y,L.z,H)}for(let q=0,C=D.length;q<C;++q){const b=D[q],H=b.start,oe=b.count;for(let ee=H,he=H+oe;ee<he;ee+=3)U(e.getX(ee+0)),U(e.getX(ee+1)),U(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new W,a=new W,c=new W,u=new W,d=new W,f=new W,m=new W,g=new W;if(e)for(let _=0,x=e.count;_<x;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),u.add(m),d.add(m),f.add(m),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(S,f.x,f.y,f.z)}else for(let _=0,x=t.count;_<x;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(u,d){const f=u.array,m=u.itemSize,g=u.normalized,_=new f.constructor(d.length*m);let x=0,M=0;for(let E=0,S=d.length;E<S;E++){u.isInterleavedBufferAttribute?x=d[E]*u.data.stride+u.offset:x=d[E]*m;for(let y=0;y<m;y++)_[M++]=f[x++]}return new Fn(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,i=this.index.array,s=this.attributes;for(const u in s){const d=s[u],f=e(d,i);t.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const d=[],f=a[u];for(let m=0,g=f.length;m<g;m++){const _=f[m],x=e(_,i);d.push(x)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const f=i[d];e.data.attributes[d]=f.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],m=[];for(let g=0,_=f.length;g<_;g++){const x=f[g];m.push(x.toJSON(e.data))}m.length>0&&(s[d]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const f in s){const m=s[f];this.setAttribute(f,m.clone(t))}const a=e.morphAttributes;for(const f in a){const m=[],g=a[f];for(let _=0,x=g.length;_<x;_++)m.push(g[_].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,m=c.length;f<m;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _g=new lt,cs=new ba,ql=new Oi,vg=new W,Yl=new W,Kl=new W,$l=new W,Ih=new W,Zl=new W,yg=new W,Ql=new W;class Nn extends Xt{constructor(e=new hi,t=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){Zl.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const m=u[d],g=a[d];m!==0&&(Ih.fromBufferAttribute(g,e),c?Zl.addScaledVector(Ih,m):Zl.addScaledVector(Ih.sub(t),m))}t.add(Zl)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(a),cs.copy(e.ray).recast(e.near),!(ql.containsPoint(cs.origin)===!1&&(cs.intersectSphere(ql,vg)===null||cs.origin.distanceToSquared(vg)>(e.far-e.near)**2))&&(_g.copy(a).invert(),cs.copy(e.ray).applyMatrix4(_g),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=c[S.materialIndex],D=Math.max(S.start,x.start),L=Math.min(u.count,Math.min(S.start+S.count,x.start+x.count));for(let R=D,k=L;R<k;R+=3){const N=u.getX(R),U=u.getX(R+1),q=u.getX(R+2);s=Jl(this,y,e,i,f,m,g,N,U,q),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(u.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const D=u.getX(S),L=u.getX(S+1),R=u.getX(S+2);s=Jl(this,c,e,i,f,m,g,D,L,R),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=c[S.materialIndex],D=Math.max(S.start,x.start),L=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let R=D,k=L;R<k;R+=3){const N=R,U=R+1,q=R+2;s=Jl(this,y,e,i,f,m,g,N,U,q),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(d.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const D=S,L=S+1,R=S+2;s=Jl(this,c,e,i,f,m,g,D,L,R),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function Ex(o,e,t,i,s,a,c,u){let d;if(e.side===Xn?d=i.intersectTriangle(c,a,s,!0,u):d=i.intersectTriangle(s,a,c,e.side===Ni,u),d===null)return null;Ql.copy(u),Ql.applyMatrix4(o.matrixWorld);const f=t.ray.origin.distanceTo(Ql);return f<t.near||f>t.far?null:{distance:f,point:Ql.clone(),object:o}}function Jl(o,e,t,i,s,a,c,u,d,f){o.getVertexPosition(u,Yl),o.getVertexPosition(d,Kl),o.getVertexPosition(f,$l);const m=Ex(o,e,t,i,Yl,Kl,$l,yg);if(m){const g=new W;Ei.getBarycoord(yg,Yl,Kl,$l,g),s&&(m.uv=Ei.getInterpolatedAttribute(s,u,d,f,g,new et)),a&&(m.uv1=Ei.getInterpolatedAttribute(a,u,d,f,g,new et)),c&&(m.normal=Ei.getInterpolatedAttribute(c,u,d,f,g,new W),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:u,b:d,c:f,normal:new W,materialIndex:0};Ei.getNormal(Yl,Kl,$l,_.normal),m.face=_,m.barycoord=g}return m}class Ca extends hi{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const d=[],f=[],m=[],g=[];let _=0,x=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new In(f,3)),this.setAttribute("normal",new In(m,3)),this.setAttribute("uv",new In(g,2));function M(E,S,y,D,L,R,k,N,U,q,C){const b=R/U,H=k/q,oe=R/2,ee=k/2,he=N/2,fe=U+1,se=q+1;let le=0,z=0;const ae=new W;for(let re=0;re<se;re++){const F=re*H-ee;for(let ne=0;ne<fe;ne++){const Ie=ne*b-oe;ae[E]=Ie*D,ae[S]=F*L,ae[y]=he,f.push(ae.x,ae.y,ae.z),ae[E]=0,ae[S]=0,ae[y]=N>0?1:-1,m.push(ae.x,ae.y,ae.z),g.push(ne/U),g.push(1-re/q),le+=1}}for(let re=0;re<q;re++)for(let F=0;F<U;F++){const ne=_+F+fe*re,Ie=_+F+fe*(re+1),Z=_+(F+1)+fe*(re+1),ce=_+(F+1)+fe*re;d.push(ne,Ie,ce),d.push(Ie,Z,ce),z+=6}u.addGroup(x,z,C),x+=z,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dn(o){const e={};for(let t=0;t<o.length;t++){const i=To(o[t]);for(const s in i)e[s]=i[s]}return e}function Tx(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function X_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const wx={clone:To,merge:Dn};var Ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ax,this.fragmentShader=Rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=Tx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class q_ extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new W,xg=new et,Sg=new et;class gn extends q_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,xg,Sg),t.subVectors(Sg,xg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;a+=c.offsetX*s/d,t-=c.offsetY*i/f,s*=c.width/d,i*=c.height/f}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const io=-90,ro=1;class bx extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(io,ro,e,t);s.layers=this.layers,this.add(s);const a=new gn(io,ro,e,t);a.layers=this.layers,this.add(a);const c=new gn(io,ro,e,t);c.layers=this.layers,this.add(c);const u=new gn(io,ro,e,t);u.layers=this.layers,this.add(u);const d=new gn(io,ro,e,t);d.layers=this.layers,this.add(d);const f=new gn(io,ro,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,d]=t;for(const f of t)this.remove(f);if(e===sr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,f,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,f),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(g,_,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Y_ extends hn{constructor(e,t,i,s,a,c,u,d,f,m){e=e!==void 0?e:[],t=t!==void 0?t:yo,super(e,t,i,s,a,c,u,d,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cx extends xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Y_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ca(5,5,5),a=new Gr({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:Hr});a.uniforms.tEquirect.value=t;const c=new Nn(s,a),u=t.minFilter;return t.minFilter===rr&&(t.minFilter=Jn),new bx(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}class tf extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Px{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fd,this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new W;class nf{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),a=Lt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Mg=new W,Eg=new bt,Tg=new bt,Lx=new W,wg=new lt,ec=new W,Nh=new Oi,Ag=new lt,Uh=new ba;class Dx extends Nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qm,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ec),this.boundingBox.expandByPoint(ec)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ec),this.boundingSphere.expandByPoint(ec)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nh.copy(this.boundingSphere),Nh.applyMatrix4(s),e.ray.intersectsSphere(Nh)!==!1&&(Ag.copy(s).invert(),Uh.copy(e.ray).applyMatrix4(Ag),!(this.boundingBox!==null&&Uh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Eg.fromBufferAttribute(s.attributes.skinIndex,e),Tg.fromBufferAttribute(s.attributes.skinWeight,e),Mg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Tg.getComponent(a);if(c!==0){const u=Eg.getComponent(a);wg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(Lx.copy(Mg).applyMatrix4(wg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class K_ extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $_ extends hn{constructor(e=null,t=1,i=1,s,a,c,u,d,f=Un,m=Un,g,_){super(null,c,u,d,f,m,s,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rg=new lt,Ix=new lt;class rf{constructor(e=[],t=[]){this.uuid=wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:Ix;Rg.multiplyMatrices(u,t[a]),Rg.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new rf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new $_(t,e,e,ui,Ti);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new K_),this.bones.push(c),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class Od extends Fn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const so=new lt,bg=new lt,tc=[],Cg=new Fi,Nx=new lt,fa=new Nn,pa=new Oi;class Ux extends Nn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Od(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Nx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,so),Cg.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(Cg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,so),pa.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(i),e.ray.intersectsSphere(pa)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,so),bg.multiplyMatrices(i,so),fa.matrixWorld=bg,fa.raycast(e,tc);for(let c=0,u=tc.length;c<u;c++){const d=tc[c];d.instanceId=a,d.object=this,t.push(d)}tc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Od(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $_(new Float32Array(s*this.count),s,this.count,Kd,Ti));const a=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const u=this.geometry.morphTargetsRelative?1:1-c,d=s*e;a[d]=u,a.set(i,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Fh=new W,Fx=new W,Ox=new at;class Fr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Fh.subVectors(i,t).cross(Fx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ox.getNormalMatrix(e),s=this.coplanarPoint(Fh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Oi,nc=new W;class sf{constructor(e=new Fr,t=new Fr,i=new Fr,s=new Fr,a=new Fr,c=new Fr){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=sr){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],d=s[3],f=s[4],m=s[5],g=s[6],_=s[7],x=s[8],M=s[9],E=s[10],S=s[11],y=s[12],D=s[13],L=s[14],R=s[15];if(i[0].setComponents(d-a,_-f,S-x,R-y).normalize(),i[1].setComponents(d+a,_+f,S+x,R+y).normalize(),i[2].setComponents(d+c,_+m,S+M,R+D).normalize(),i[3].setComponents(d-c,_-m,S-M,R-D).normalize(),i[4].setComponents(d-u,_-g,S-E,R-L).normalize(),t===sr)i[5].setComponents(d+u,_+g,S+E,R+L).normalize();else if(t===Ec)i[5].setComponents(u,g,E,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(nc.x=s.normal.x>0?e.max.x:e.min.x,nc.y=s.normal.y>0?e.max.y:e.min.y,nc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(nc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ma extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new W,wc=new W,Pg=new lt,ma=new ba,ic=new Oi,Oh=new W,Lg=new W;class of extends Xt{constructor(e=new hi,t=new Ma){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Tc.fromBufferAttribute(t,s-1),wc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Tc.distanceTo(wc);e.setAttribute("lineDistance",new In(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(s),ic.radius+=a,e.ray.intersectsSphere(ic)===!1)return;Pg.copy(s).invert(),ma.copy(e.ray).applyMatrix4(Pg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=x,S=M-1;E<S;E+=f){const y=m.getX(E),D=m.getX(E+1),L=rc(this,e,ma,d,y,D);L&&t.push(L)}if(this.isLineLoop){const E=m.getX(M-1),S=m.getX(x),y=rc(this,e,ma,d,E,S);y&&t.push(y)}}else{const x=Math.max(0,c.start),M=Math.min(_.count,c.start+c.count);for(let E=x,S=M-1;E<S;E+=f){const y=rc(this,e,ma,d,E,E+1);y&&t.push(y)}if(this.isLineLoop){const E=rc(this,e,ma,d,M-1,x);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function rc(o,e,t,i,s,a){const c=o.geometry.attributes.position;if(Tc.fromBufferAttribute(c,s),wc.fromBufferAttribute(c,a),t.distanceSqToSegment(Tc,wc,Oh,Lg)>i)return;Oh.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(Oh);if(!(d<e.near||d>e.far))return{distance:d,point:Lg.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const Dg=new W,Ig=new W;class kd extends of{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)Dg.fromBufferAttribute(t,s),Ig.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Dg.distanceTo(Ig);e.setAttribute("lineDistance",new In(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kx extends of{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class co extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ng=new lt,Bd=new ba,sc=new Oi,oc=new W;class yc extends Xt{constructor(e=new hi,t=new co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sc.copy(i.boundingSphere),sc.applyMatrix4(s),sc.radius+=a,e.ray.intersectsSphere(sc)===!1)return;Ng.copy(s).invert(),Bd.copy(e.ray).applyMatrix4(Ng);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=i.index,g=i.attributes.position;if(f!==null){const _=Math.max(0,c.start),x=Math.min(f.count,c.start+c.count);for(let M=_,E=x;M<E;M++){const S=f.getX(M);oc.fromBufferAttribute(g,S),Ug(oc,S,d,s,e,t,this)}}else{const _=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let M=_,E=x;M<E;M++)oc.fromBufferAttribute(g,M),Ug(oc,M,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Ug(o,e,t,i,s,a,c){const u=Bd.distanceSqToPoint(o);if(u<t){const d=new W;Bd.closestPointToPoint(o,d),d.applyMatrix4(i);const f=s.ray.origin.distanceTo(d);if(f<s.near||f>s.far)return;a.push({distance:f,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Br extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Z_ extends hn{constructor(e,t,i,s,a,c,u,d,f,m=po){if(m!==po&&m!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===po&&(i=ys),i===void 0&&m===Mo&&(i=So),super(null,s,a,c,u,d,m,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Un,this.minFilter=d!==void 0?d:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rc extends hi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),d=Math.floor(s),f=u+1,m=d+1,g=e/u,_=t/d,x=[],M=[],E=[],S=[];for(let y=0;y<m;y++){const D=y*_-c;for(let L=0;L<f;L++){const R=L*g-a;M.push(R,-D,0),E.push(0,0,1),S.push(L/u),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let D=0;D<u;D++){const L=D+f*y,R=D+f*(y+1),k=D+1+f*(y+1),N=D+1+f*y;x.push(L,R,N),x.push(R,k,N)}this.setIndex(x),this.setAttribute("position",new In(M,3)),this.setAttribute("normal",new In(E,3)),this.setAttribute("uv",new In(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.width,e.height,e.widthSegments,e.heightSegments)}}class af extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jd,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ki extends af{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Q_ extends ei{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jd,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bx extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zx extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ac(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Hx(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Vx(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Fg(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let d=0;d!==e;++d)s[c++]=o[u+d]}return s}function J_(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class Pa{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gx extends Pa{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jm,endingEnd:Jm}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],d=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case eg:a=e,u=2*t-i;break;case tg:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(d===void 0)switch(this.getSettings_().endingEnd){case eg:c=e,d=2*i-t;break;case tg:c=1,d=i+s[1]-s[0];break;default:c=e-1,d=t}const f=(i-t)*.5,m=this.valueSize;this._weightPrev=f/(t-u),this._weightNext=f/(d-i),this._offsetPrev=a*m,this._offsetNext=c*m}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,f=d-u,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,x=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,y=-_*S+2*_*E-_*M,D=(1+_)*S+(-1.5-2*_)*E+(-.5+_)*M+1,L=(-1-x)*S+(1.5+x)*E+.5*M,R=x*S-x*E;for(let k=0;k!==u;++k)a[k]=y*c[m+k]+D*c[f+k]+L*c[d+k]+R*c[g+k];return a}}class Wx extends Pa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,f=d-u,m=(i-t)/(s-t),g=1-m;for(let _=0;_!==u;++_)a[_]=c[f+_]*g+c[d+_]*m;return a}}class jx extends Pa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ac(t,this.TimeBufferType),this.values=ac(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ac(e.times,Array),values:ac(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new jx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ta:t=this.InterpolantFactoryMethodDiscrete;break;case wa:t=this.InterpolantFactoryMethodLinear;break;case ph:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return ph}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const d=i[u];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,d),e=!1;break}if(c!==null&&c>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,d,c),e=!1;break}c=d}if(s!==void 0&&Hx(s))for(let u=0,d=s.length;u!==d;++u){const f=s[u];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ph,a=e.length-1;let c=1;for(let u=1;u<a;++u){let d=!1;const f=e[u],m=e[u+1];if(f!==m&&(u!==1||f!==e[0]))if(s)d=!0;else{const g=u*i,_=g-i,x=g+i;for(let M=0;M!==i;++M){const E=t[g+M];if(E!==t[_+M]||E!==t[x+M]){d=!0;break}}}if(d){if(u!==c){e[c]=e[u];const g=u*i,_=c*i;for(let x=0;x!==i;++x)t[_+x]=t[g+x]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,d=c*i,f=0;f!==i;++f)t[d+f]=t[u+f];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Bi.prototype.TimeBufferType=Float32Array;Bi.prototype.ValueBufferType=Float32Array;Bi.prototype.DefaultInterpolation=wa;class bo extends Bi{constructor(e,t,i){super(e,t,i)}}bo.prototype.ValueTypeName="bool";bo.prototype.ValueBufferType=Array;bo.prototype.DefaultInterpolation=Ta;bo.prototype.InterpolantFactoryMethodLinear=void 0;bo.prototype.InterpolantFactoryMethodSmooth=void 0;class e0 extends Bi{}e0.prototype.ValueTypeName="color";class wo extends Bi{}wo.prototype.ValueTypeName="number";class Xx extends Pa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=(i-t)/(s-t);let f=e*u;for(let m=f+u;f!==m;f+=4)Ui.slerpFlat(a,0,c,f-u,c,f,d);return a}}class Ao extends Bi{InterpolantFactoryMethodLinear(e){return new Xx(this.times,this.values,this.getValueSize(),e)}}Ao.prototype.ValueTypeName="quaternion";Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class Co extends Bi{constructor(e,t,i){super(e,t,i)}}Co.prototype.ValueTypeName="string";Co.prototype.ValueBufferType=Array;Co.prototype.DefaultInterpolation=Ta;Co.prototype.InterpolantFactoryMethodLinear=void 0;Co.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends Bi{}Ro.prototype.ValueTypeName="vector";class qx{constructor(e="",t=-1,i=[],s=Py){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=wi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(Kx(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Bi.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let d=[],f=[];d.push((u+a-1)%a,u,(u+1)%a),f.push(0,1,0);const m=Vx(d);d=Fg(d,1,m),f=Fg(f,1,m),!s&&d[0]===0&&(d.push(a),f.push(f[0])),c.push(new wo(".morphTargetInfluences["+t[u].name+"]",d,f).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,d=e.length;u<d;u++){const f=e[u],m=f.name.match(a);if(m&&m.length>1){const g=m[1];let _=s[g];_||(s[g]=_=[]),_.push(f)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,x,M,E){if(x.length!==0){const S=[],y=[];J_(x,S,y,M),S.length!==0&&E.push(new g(_,S,y))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let d=e.length||-1;const f=e.hierarchy||[];for(let g=0;g<f.length;g++){const _=f[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)x[_[M].morphTargets[E]]=-1;for(const E in x){const S=[],y=[];for(let D=0;D!==_[M].morphTargets.length;++D){const L=_[M];S.push(L.time),y.push(L.morphTarget===E?1:0)}s.push(new wo(".morphTargetInfluence["+E+"]",S,y))}d=x.length*c}else{const x=".bones["+t[g].name+"]";i(Ro,x+".position",_,"pos",s),i(Ao,x+".quaternion",_,"rot",s),i(Ro,x+".scale",_,"scl",s)}}return s.length===0?null:new this(a,d,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Yx(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wo;case"vector":case"vector2":case"vector3":case"vector4":return Ro;case"color":return e0;case"quaternion":return Ao;case"bool":case"boolean":return bo;case"string":return Co}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Kx(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Yx(o.type);if(o.times===void 0){const t=[],i=[];J_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const zr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class $x{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,d;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){u++,a===!1&&s.onStart!==void 0&&s.onStart(m,c,u),a=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return f.push(m,g),this},this.removeHandler=function(m){const g=f.indexOf(m);return g!==-1&&f.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=f.length;g<_;g+=2){const x=f[g],M=f[g+1];if(x.global&&(x.lastIndex=0),x.test(m))return M}return null}}}const t0=new $x;class Wr{constructor(e){this.manager=e!==void 0?e:t0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Wr.DEFAULT_MATERIAL_NAME="__DEFAULT";const tr={};class Zx extends Error{constructor(e,t){super(e),this.response=t}}class bc extends Wr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=zr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(tr[e]!==void 0){tr[e].push({onLoad:t,onProgress:i,onError:s});return}tr[e]=[],tr[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,d=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const m=tr[e],g=f.body.getReader(),_=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),x=_?parseInt(_):0,M=x!==0;let E=0;const S=new ReadableStream({start(y){D();function D(){g.read().then(({done:L,value:R})=>{if(L)y.close();else{E+=R.byteLength;const k=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:x});for(let N=0,U=m.length;N<U;N++){const q=m[N];q.onProgress&&q.onProgress(k)}y.enqueue(R),D()}},L=>{y.error(L)})}}});return new Response(S)}else throw new Zx(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(d){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(m=>new DOMParser().parseFromString(m,u));case"json":return f.json();default:if(u===void 0)return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),_=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(_);return f.arrayBuffer().then(M=>x.decode(M))}}}).then(f=>{zr.add(e,f);const m=tr[e];delete tr[e];for(let g=0,_=m.length;g<_;g++){const x=m[g];x.onLoad&&x.onLoad(f)}}).catch(f=>{const m=tr[e];if(m===void 0)throw this.manager.itemError(e),f;delete tr[e];for(let g=0,_=m.length;g<_;g++){const x=m[g];x.onError&&x.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Qx extends Wr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=zr.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=Aa("img");function d(){m(),zr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function f(g){m(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){u.removeEventListener("load",d,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class n0 extends Wr{constructor(e){super(e)}load(e,t,i,s){const a=new hn,c=new Qx(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Cc extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const kh=new lt,Og=new W,kg=new W;class lf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sf,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Og.setFromMatrixPosition(e.matrixWorld),t.position.copy(Og),kg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kg),t.updateMatrixWorld(),kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jx extends lf{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Eo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class eS extends Cc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new Jx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bg=new lt,ga=new W,Bh=new W;class tS extends lf{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ga.setFromMatrixPosition(e.matrixWorld),i.position.copy(ga),Bh.copy(i.position),Bh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Bh),i.updateMatrixWorld(),s.makeTranslation(-ga.x,-ga.y,-ga.z),Bg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bg)}}class nS extends Cc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new tS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cf extends q_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class iS extends lf{constructor(){super(new cf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pc extends Cc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new iS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uf extends Cc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class go{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class rS extends Wr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=zr.get(e);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(f=>{t&&t(f),a.manager.itemEnd(e)}).catch(f=>{s&&s(f)});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const d=fetch(e,u).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(f){return zr.add(e,f),t&&t(f),a.manager.itemEnd(e),f}).catch(function(f){s&&s(f),zr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});zr.add(e,d),a.manager.itemStart(e)}}class sS extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const hf="\\[\\]\\.:\\/",oS=new RegExp("["+hf+"]","g"),df="[^"+hf+"]",aS="[^"+hf.replace("\\.","")+"]",lS=/((?:WC+[\/:])*)/.source.replace("WC",df),cS=/(WCOD+)?/.source.replace("WCOD",aS),uS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",df),hS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",df),dS=new RegExp("^"+lS+cS+uS+hS+"$"),fS=["material","materials","bones","map"];class pS{constructor(e,t,i){const s=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Dt{constructor(e,t,i){this.path=t,this.parsedPath=i||Dt.parseTrackName(t),this.node=Dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Dt.Composite(e,t,i):new Dt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oS,"")}static parseTrackName(e){const t=dS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);fS.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const d=i(u.children);if(d)return d}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===f){f=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(f!==void 0){if(e[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const c=e[s];if(c===void 0){const f=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Dt.Composite=pS;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mS extends Ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Hg(o,e,t,i){const s=gS(i);switch(t){case P_:return o*e;case D_:return o*e;case I_:return o*e*2;case Kd:return o*e/s.components*s.byteLength;case $d:return o*e/s.components*s.byteLength;case N_:return o*e*2/s.components*s.byteLength;case Zd:return o*e*2/s.components*s.byteLength;case L_:return o*e*3/s.components*s.byteLength;case ui:return o*e*4/s.components*s.byteLength;case Qd:return o*e*4/s.components*s.byteLength;case pc:case mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case gc:case _c:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ud:case dd:return Math.max(o,16)*Math.max(e,8)/4;case cd:case hd:return Math.max(o,8)*Math.max(e,8)/2;case fd:case pd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case md:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case vd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case yd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case xd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Md:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Td:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case wd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case bd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case vc:case Pd:case Ld:return Math.ceil(o/4)*Math.ceil(e/4)*16;case U_:case Dd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Id:case Nd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gS(o){switch(o){case ar:case R_:return{byteLength:1,components:1};case Ea:case b_:case Ra:return{byteLength:2,components:1};case qd:case Yd:return{byteLength:2,components:4};case ys:case Xd:case Ti:return{byteLength:4,components:1};case C_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function i0(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function _S(o){const e=new WeakMap;function t(u,d){const f=u.array,m=u.usage,g=f.byteLength,_=o.createBuffer();o.bindBuffer(d,_),o.bufferData(d,f,m),u.onUploadCallback();let x;if(f instanceof Float32Array)x=o.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=o.SHORT;else if(f instanceof Uint32Array)x=o.UNSIGNED_INT;else if(f instanceof Int32Array)x=o.INT;else if(f instanceof Int8Array)x=o.BYTE;else if(f instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,d,f){const m=d.array,g=d.updateRanges;if(o.bindBuffer(f,u),g.length===0)o.bufferSubData(f,0,m);else{g.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<g.length;x++){const M=g[_],E=g[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,g[_]=E)}g.length=_+1;for(let x=0,M=g.length;x<M;x++){const E=g[x];o.bufferSubData(f,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(o.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,d),f.version=u.version}}return{get:s,remove:a,update:c}}var vS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ES=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,RS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,HS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YS="gl_FragColor = linearToOutputTexel( gl_FragColor );",KS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$S=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_M=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:vS,alphahash_pars_fragment:yS,alphamap_fragment:xS,alphamap_pars_fragment:SS,alphatest_fragment:MS,alphatest_pars_fragment:ES,aomap_fragment:TS,aomap_pars_fragment:wS,batching_pars_vertex:AS,batching_vertex:RS,begin_vertex:bS,beginnormal_vertex:CS,bsdfs:PS,iridescence_fragment:LS,bumpmap_pars_fragment:DS,clipping_planes_fragment:IS,clipping_planes_pars_fragment:NS,clipping_planes_pars_vertex:US,clipping_planes_vertex:FS,color_fragment:OS,color_pars_fragment:kS,color_pars_vertex:BS,color_vertex:zS,common:HS,cube_uv_reflection_fragment:VS,defaultnormal_vertex:GS,displacementmap_pars_vertex:WS,displacementmap_vertex:jS,emissivemap_fragment:XS,emissivemap_pars_fragment:qS,colorspace_fragment:YS,colorspace_pars_fragment:KS,envmap_fragment:$S,envmap_common_pars_fragment:ZS,envmap_pars_fragment:QS,envmap_pars_vertex:JS,envmap_physical_pars_fragment:uM,envmap_vertex:eM,fog_vertex:tM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:rM,gradientmap_pars_fragment:sM,lightmap_pars_fragment:oM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:lM,lights_pars_begin:cM,lights_toon_fragment:hM,lights_toon_pars_fragment:dM,lights_phong_fragment:fM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:_M,lights_fragment_maps:vM,lights_fragment_end:yM,logdepthbuf_fragment:xM,logdepthbuf_pars_fragment:SM,logdepthbuf_pars_vertex:MM,logdepthbuf_vertex:EM,map_fragment:TM,map_pars_fragment:wM,map_particle_fragment:AM,map_particle_pars_fragment:RM,metalnessmap_fragment:bM,metalnessmap_pars_fragment:CM,morphinstance_vertex:PM,morphcolor_vertex:LM,morphnormal_vertex:DM,morphtarget_pars_vertex:IM,morphtarget_vertex:NM,normal_fragment_begin:UM,normal_fragment_maps:FM,normal_pars_fragment:OM,normal_pars_vertex:kM,normal_vertex:BM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:VM,clearcoat_pars_fragment:GM,iridescence_pars_fragment:WM,opaque_fragment:jM,packing:XM,premultiplied_alpha_fragment:qM,project_vertex:YM,dithering_fragment:KM,dithering_pars_fragment:$M,roughnessmap_fragment:ZM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:JM,shadowmap_pars_vertex:eE,shadowmap_vertex:tE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:rE,skinning_vertex:sE,skinnormal_vertex:oE,specularmap_fragment:aE,specularmap_pars_fragment:lE,tonemapping_fragment:cE,tonemapping_pars_fragment:uE,transmission_fragment:hE,transmission_pars_fragment:dE,uv_pars_fragment:fE,uv_pars_vertex:pE,uv_vertex:mE,worldpos_vertex:gE,background_vert:_E,background_frag:vE,backgroundCube_vert:yE,backgroundCube_frag:xE,cube_vert:SE,cube_frag:ME,depth_vert:EE,depth_frag:TE,distanceRGBA_vert:wE,distanceRGBA_frag:AE,equirect_vert:RE,equirect_frag:bE,linedashed_vert:CE,linedashed_frag:PE,meshbasic_vert:LE,meshbasic_frag:DE,meshlambert_vert:IE,meshlambert_frag:NE,meshmatcap_vert:UE,meshmatcap_frag:FE,meshnormal_vert:OE,meshnormal_frag:kE,meshphong_vert:BE,meshphong_frag:zE,meshphysical_vert:HE,meshphysical_frag:VE,meshtoon_vert:GE,meshtoon_frag:WE,points_vert:jE,points_frag:XE,shadow_vert:qE,shadow_frag:YE,sprite_vert:KE,sprite_frag:$E},be={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Di={basic:{uniforms:Dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Dn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Dn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Dn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Dn([be.points,be.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Dn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Dn([be.common,be.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Dn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Dn([be.sprite,be.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Dn([be.common,be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Dn([be.lights,be.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Di.physical={uniforms:Dn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const lc={r:0,b:0,g:0},hs=new Ai,ZE=new lt;function QE(o,e,t,i,s,a,c){const u=new Qe(0);let d=a===!0?0:1,f,m,g=null,_=0,x=null;function M(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?t:e).get(R)),R}function E(L){let R=!1;const k=M(L);k===null?y(u,d):k&&k.isColor&&(y(k,1),R=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,R){const k=M(R);k&&(k.isCubeTexture||k.mapping===Ac)?(m===void 0&&(m=new Nn(new Ca(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:To(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,U,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),hs.copy(R.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.material.uniforms.envMap.value=k,m.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(hs)),m.material.toneMapped=_t.getTransfer(k.colorSpace)!==Ut,(g!==k||_!==k.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,g=k,_=k.version,x=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):k&&k.isTexture&&(f===void 0&&(f=new Nn(new Rc(2,2),new Gr({name:"BackgroundMaterial",uniforms:To(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=k,f.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,f.material.toneMapped=_t.getTransfer(k.colorSpace)!==Ut,k.matrixAutoUpdate===!0&&k.updateMatrix(),f.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||_!==k.version||x!==o.toneMapping)&&(f.material.needsUpdate=!0,g=k,_=k.version,x=o.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null))}function y(L,R){L.getRGB(lc,X_(o)),i.buffers.color.setClear(lc.r,lc.g,lc.b,R,c)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),f!==void 0&&(f.geometry.dispose(),f.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(L,R=1){u.set(L),d=R,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,y(u,d)},render:E,addToRenderList:S,dispose:D}}function JE(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,c=!1;function u(b,H,oe,ee,he){let fe=!1;const se=g(ee,oe,H);a!==se&&(a=se,f(a.object)),fe=x(b,ee,oe,he),fe&&M(b,ee,oe,he),he!==null&&e.update(he,o.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,R(b,H,oe,ee),he!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function d(){return o.createVertexArray()}function f(b){return o.bindVertexArray(b)}function m(b){return o.deleteVertexArray(b)}function g(b,H,oe){const ee=oe.wireframe===!0;let he=i[b.id];he===void 0&&(he={},i[b.id]=he);let fe=he[H.id];fe===void 0&&(fe={},he[H.id]=fe);let se=fe[ee];return se===void 0&&(se=_(d()),fe[ee]=se),se}function _(b){const H=[],oe=[],ee=[];for(let he=0;he<t;he++)H[he]=0,oe[he]=0,ee[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:oe,attributeDivisors:ee,object:b,attributes:{},index:null}}function x(b,H,oe,ee){const he=a.attributes,fe=H.attributes;let se=0;const le=oe.getAttributes();for(const z in le)if(le[z].location>=0){const re=he[z];let F=fe[z];if(F===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(F=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(F=b.instanceColor)),re===void 0||re.attribute!==F||F&&re.data!==F.data)return!0;se++}return a.attributesNum!==se||a.index!==ee}function M(b,H,oe,ee){const he={},fe=H.attributes;let se=0;const le=oe.getAttributes();for(const z in le)if(le[z].location>=0){let re=fe[z];re===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(re=b.instanceColor));const F={};F.attribute=re,re&&re.data&&(F.data=re.data),he[z]=F,se++}a.attributes=he,a.attributesNum=se,a.index=ee}function E(){const b=a.newAttributes;for(let H=0,oe=b.length;H<oe;H++)b[H]=0}function S(b){y(b,0)}function y(b,H){const oe=a.newAttributes,ee=a.enabledAttributes,he=a.attributeDivisors;oe[b]=1,ee[b]===0&&(o.enableVertexAttribArray(b),ee[b]=1),he[b]!==H&&(o.vertexAttribDivisor(b,H),he[b]=H)}function D(){const b=a.newAttributes,H=a.enabledAttributes;for(let oe=0,ee=H.length;oe<ee;oe++)H[oe]!==b[oe]&&(o.disableVertexAttribArray(oe),H[oe]=0)}function L(b,H,oe,ee,he,fe,se){se===!0?o.vertexAttribIPointer(b,H,oe,he,fe):o.vertexAttribPointer(b,H,oe,ee,he,fe)}function R(b,H,oe,ee){E();const he=ee.attributes,fe=oe.getAttributes(),se=H.defaultAttributeValues;for(const le in fe){const z=fe[le];if(z.location>=0){let ae=he[le];if(ae===void 0&&(le==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),le==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),ae!==void 0){const re=ae.normalized,F=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ie=ne.buffer,Z=ne.type,ce=ne.bytesPerElement,Me=Z===o.INT||Z===o.UNSIGNED_INT||ae.gpuType===Xd;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ne=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<z.locationSize;Ze++)y(z.location+Ze,ve.meshPerAttribute);b.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<z.locationSize;Ze++)S(z.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let Ze=0;Ze<z.locationSize;Ze++)L(z.location+Ze,F/z.locationSize,Z,re,Te*ce,(Ne+F/z.locationSize*Ze)*ce,Me)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<z.locationSize;ve++)y(z.location+ve,ae.meshPerAttribute);b.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<z.locationSize;ve++)S(z.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let ve=0;ve<z.locationSize;ve++)L(z.location+ve,F/z.locationSize,Z,re,F*ce,F/z.locationSize*ve*ce,Me)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(z.location,re);break;case 3:o.vertexAttrib3fv(z.location,re);break;case 4:o.vertexAttrib4fv(z.location,re);break;default:o.vertexAttrib1fv(z.location,re)}}}}D()}function k(){q();for(const b in i){const H=i[b];for(const oe in H){const ee=H[oe];for(const he in ee)m(ee[he].object),delete ee[he];delete H[oe]}delete i[b]}}function N(b){if(i[b.id]===void 0)return;const H=i[b.id];for(const oe in H){const ee=H[oe];for(const he in ee)m(ee[he].object),delete ee[he];delete H[oe]}delete i[b.id]}function U(b){for(const H in i){const oe=i[H];if(oe[b.id]===void 0)continue;const ee=oe[b.id];for(const he in ee)m(ee[he].object),delete ee[he];delete oe[b.id]}}function q(){C(),c=!0,a!==s&&(a=s,f(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:q,resetDefaultState:C,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:S,disableUnusedAttributes:D}}function eT(o,e,t){let i;function s(f){i=f}function a(f,m){o.drawArrays(i,f,m),t.update(m,i,1)}function c(f,m,g){g!==0&&(o.drawArraysInstanced(i,f,m,g),t.update(m,i,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,i,1)}function d(f,m,g,_){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<f.length;M++)c(f[M],m[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(i,f,0,m,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*_[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function tT(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(U){return!(U!==ui&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){const q=U===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==ar&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Ti&&!q)}function d(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=d(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:k,maxSamples:N}}function nT(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new Fr,u=new at,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||i!==0||s;return s=_,i=g.length,x},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,x){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,y=o.get(g);if(!s||M===null||M.length===0||a&&!S)a?m(null):f();else{const D=a?0:i,L=D*4;let R=y.clippingState||null;d.value=R,R=m(M,_,L,x);for(let k=0;k!==L;++k)R[k]=t[k];y.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,x,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const y=x+E*4,D=_.matrixWorldInverse;u.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,R=x;L!==E;++L,R+=4)c.copy(g[L]).applyMatrix4(D,u),c.normal.toArray(S,R),S[R+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function iT(o){let e=new WeakMap;function t(c,u){return u===ad?c.mapping=yo:u===ld&&(c.mapping=xo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===ad||u===ld)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const f=new Cx(d.height);return f.fromEquirectangularTexture(o,c),e.set(c,f),c.addEventListener("dispose",s),t(f.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const uo=4,Vg=[.125,.215,.35,.446,.526,.582],gs=20,zh=new cf,Gg=new Qe;let Hh=null,Vh=0,Gh=0,Wh=!1;const ps=(1+Math.sqrt(5))/2,oo=1/ps,Wg=[new W(-ps,oo,0),new W(ps,oo,0),new W(-oo,0,ps),new W(oo,0,ps),new W(0,ps,-oo),new W(0,ps,oo),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class jg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Hh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Vh,Gh),this._renderer.xr.enabled=Wh,e.scissorTest=!1,cc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yo||e.mapping===xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Ra,format:ui,colorSpace:On,depthBuffer:!1},s=Xg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rT(a)),this._blurMaterial=sT(a,e,t)}return s}_compileMaterial(e){const t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,zh)}_sceneToCubeUV(e,t,i,s){const u=new gn(90,1,t,i),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(Gg),m.toneMapping=Vr,m.autoClear=!1;const x=new _s({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),M=new Nn(new Ca,x);let E=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,E=!0):(x.color.copy(Gg),E=!0);for(let y=0;y<6;y++){const D=y%3;D===0?(u.up.set(0,d[y],0),u.lookAt(f[y],0,0)):D===1?(u.up.set(0,0,d[y]),u.lookAt(0,f[y],0)):(u.up.set(0,d[y],0),u.lookAt(0,0,f[y]));const L=this._cubeSize;cc(s,D*L,y>2?L:0,L,L),m.setRenderTarget(s),E&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===yo||e.mapping===xo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qg());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Nn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;cc(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,zh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Wg[(s-a-1)%Wg.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Nn(this._lodPlanes[s],f),_=f.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*gs-1),E=a/M,S=isFinite(a)?1+Math.floor(m*E):gs;S>gs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${gs}`);const y=[];let D=0;for(let U=0;U<gs;++U){const q=U/E,C=Math.exp(-q*q/2);y.push(C),U===0?D+=C:U<S&&(D+=2*C)}for(let U=0;U<y.length;U++)y[U]=y[U]/D;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:L}=this;_.dTheta.value=M,_.mipInt.value=L-i;const R=this._sizeLods[s],k=3*R*(s>L-uo?s-L+uo:0),N=4*(this._cubeSize-R);cc(t,k,N,3*R,2*R),d.setRenderTarget(t),d.render(g,zh)}}function rT(o){const e=[],t=[],i=[];let s=o;const a=o-uo+1+Vg.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let d=1/u;c>o-uo?d=Vg[c-o+uo-1]:c===0&&(d=0),i.push(d);const f=1/(u-2),m=-f,g=1+f,_=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,E=3,S=2,y=1,D=new Float32Array(E*M*x),L=new Float32Array(S*M*x),R=new Float32Array(y*M*x);for(let N=0;N<x;N++){const U=N%3*2/3-1,q=N>2?0:-1,C=[U,q,0,U+2/3,q,0,U+2/3,q+1,0,U,q,0,U+2/3,q+1,0,U,q+1,0];D.set(C,E*M*N),L.set(_,S*M*N);const b=[N,N,N,N,N,N];R.set(b,y*M*N)}const k=new hi;k.setAttribute("position",new Fn(D,E)),k.setAttribute("uv",new Fn(L,S)),k.setAttribute("faceIndex",new Fn(R,y)),e.push(k),s>uo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xg(o,e,t){const i=new xs(o,e,t);return i.texture.mapping=Ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cc(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function sT(o,e,t){const i=new Float32Array(gs),s=new W(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function qg(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function Yg(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function ff(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oT(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,f=d===ad||d===ld,m=d===yo||d===xo;if(f||m){let g=e.get(u);const _=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new jg(o)),g=f?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return f&&x&&x.height>0||m&&x&&s(x)?(t===null&&(t=new jg(o)),g=f?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let d=0;const f=6;for(let m=0;m<f;m++)u[m]!==void 0&&d++;return d===f}function a(u){const d=u.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function aT(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ao("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function lT(o,e,t,i){const s={},a=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",c),delete s[_.id];const x=a.get(_);x&&(e.remove(x),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const x in _)e.update(_[x],o.ARRAY_BUFFER)}function f(g){const _=[],x=g.index,M=g.attributes.position;let E=0;if(x!==null){const D=x.array;E=x.version;for(let L=0,R=D.length;L<R;L+=3){const k=D[L+0],N=D[L+1],U=D[L+2];_.push(k,N,N,U,U,k)}}else if(M!==void 0){const D=M.array;E=M.version;for(let L=0,R=D.length/3-1;L<R;L+=3){const k=L+0,N=L+1,U=L+2;_.push(k,N,N,U,U,k)}}else return;const S=new(B_(_)?j_:W_)(_,1);S.version=E;const y=a.get(g);y&&e.remove(y),a.set(g,S)}function m(g){const _=a.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&f(g)}else f(g);return a.get(g)}return{get:u,update:d,getWireframeAttribute:m}}function cT(o,e,t){let i;function s(_){i=_}let a,c;function u(_){a=_.type,c=_.bytesPerElement}function d(_,x){o.drawElements(i,x,a,_*c),t.update(x,i,1)}function f(_,x,M){M!==0&&(o.drawElementsInstanced(i,x,a,_*c,M),t.update(x,i,M))}function m(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,_,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,i,1)}function g(_,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)f(_[y]/c,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,a,_,0,E,0,M);let y=0;for(let D=0;D<M;D++)y+=x[D]*E[D];t.update(y,i,1)}}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function uT(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function hT(o,e,t){const i=new WeakMap,s=new bt;function a(c,u,d){const f=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(u);if(_===void 0||_.count!==g){let b=function(){q.dispose(),i.delete(u),u.removeEventListener("dispose",b)};var x=b;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let R=0;M===!0&&(R=1),E===!0&&(R=2),S===!0&&(R=3);let k=u.attributes.position.count*R,N=1;k>e.maxTextureSize&&(N=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const U=new Float32Array(k*N*4*g),q=new H_(U,k,N,g);q.type=Ti,q.needsUpdate=!0;const C=R*4;for(let H=0;H<g;H++){const oe=y[H],ee=D[H],he=L[H],fe=k*N*4*H;for(let se=0;se<oe.count;se++){const le=se*C;M===!0&&(s.fromBufferAttribute(oe,se),U[fe+le+0]=s.x,U[fe+le+1]=s.y,U[fe+le+2]=s.z,U[fe+le+3]=0),E===!0&&(s.fromBufferAttribute(ee,se),U[fe+le+4]=s.x,U[fe+le+5]=s.y,U[fe+le+6]=s.z,U[fe+le+7]=0),S===!0&&(s.fromBufferAttribute(he,se),U[fe+le+8]=s.x,U[fe+le+9]=s.y,U[fe+le+10]=s.z,U[fe+le+11]=he.itemSize===4?s.w:1)}}_={count:g,texture:q,size:new et(k,N)},i.set(u,_),u.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<f.length;S++)M+=f[S];const E=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",f)}d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function dT(o,e,t,i){let s=new WeakMap;function a(d){const f=i.render.frame,m=d.geometry,g=e.get(d,m);if(s.get(g)!==f&&(e.update(g),s.set(g,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),s.get(d)!==f&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,f))),d.isSkinnedMesh){const _=d.skeleton;s.get(_)!==f&&(_.update(),s.set(_,f))}return g}function c(){s=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}const r0=new hn,Kg=new Z_(1,1),s0=new H_,o0=new fx,a0=new Y_,$g=[],Zg=[],Qg=new Float32Array(16),Jg=new Float32Array(9),e_=new Float32Array(4);function Po(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=$g[s];if(a===void 0&&(a=new Float32Array(s),$g[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function sn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function on(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Lc(o,e){let t=Zg[e];t===void 0&&(t=new Int32Array(e),Zg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function fT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function pT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;o.uniform2fv(this.addr,e),on(t,e)}}function mT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;o.uniform3fv(this.addr,e),on(t,e)}}function gT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;o.uniform4fv(this.addr,e),on(t,e)}}function _T(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;e_.set(i),o.uniformMatrix2fv(this.addr,!1,e_),on(t,i)}}function vT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Jg.set(i),o.uniformMatrix3fv(this.addr,!1,Jg),on(t,i)}}function yT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Qg.set(i),o.uniformMatrix4fv(this.addr,!1,Qg),on(t,i)}}function xT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function ST(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;o.uniform2iv(this.addr,e),on(t,e)}}function MT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;o.uniform3iv(this.addr,e),on(t,e)}}function ET(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;o.uniform4iv(this.addr,e),on(t,e)}}function TT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function wT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;o.uniform2uiv(this.addr,e),on(t,e)}}function AT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;o.uniform3uiv(this.addr,e),on(t,e)}}function RT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;o.uniform4uiv(this.addr,e),on(t,e)}}function bT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Kg.compareFunction=O_,a=Kg):a=r0,t.setTexture2D(e||a,s)}function CT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||o0,s)}function PT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||a0,s)}function LT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||s0,s)}function DT(o){switch(o){case 5126:return fT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return vT;case 35676:return yT;case 5124:case 35670:return xT;case 35667:case 35671:return ST;case 35668:case 35672:return MT;case 35669:case 35673:return ET;case 5125:return TT;case 36294:return wT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return LT}}function IT(o,e){o.uniform1fv(this.addr,e)}function NT(o,e){const t=Po(e,this.size,2);o.uniform2fv(this.addr,t)}function UT(o,e){const t=Po(e,this.size,3);o.uniform3fv(this.addr,t)}function FT(o,e){const t=Po(e,this.size,4);o.uniform4fv(this.addr,t)}function OT(o,e){const t=Po(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function kT(o,e){const t=Po(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function BT(o,e){const t=Po(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function zT(o,e){o.uniform1iv(this.addr,e)}function HT(o,e){o.uniform2iv(this.addr,e)}function VT(o,e){o.uniform3iv(this.addr,e)}function GT(o,e){o.uniform4iv(this.addr,e)}function WT(o,e){o.uniform1uiv(this.addr,e)}function jT(o,e){o.uniform2uiv(this.addr,e)}function XT(o,e){o.uniform3uiv(this.addr,e)}function qT(o,e){o.uniform4uiv(this.addr,e)}function YT(o,e,t){const i=this.cache,s=e.length,a=Lc(t,s);sn(i,a)||(o.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||r0,a[c])}function KT(o,e,t){const i=this.cache,s=e.length,a=Lc(t,s);sn(i,a)||(o.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||o0,a[c])}function $T(o,e,t){const i=this.cache,s=e.length,a=Lc(t,s);sn(i,a)||(o.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||a0,a[c])}function ZT(o,e,t){const i=this.cache,s=e.length,a=Lc(t,s);sn(i,a)||(o.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||s0,a[c])}function QT(o){switch(o){case 5126:return IT;case 35664:return NT;case 35665:return UT;case 35666:return FT;case 35674:return OT;case 35675:return kT;case 35676:return BT;case 5124:case 35670:return zT;case 35667:case 35671:return HT;case 35668:case 35672:return VT;case 35669:case 35673:return GT;case 5125:return WT;case 36294:return jT;case 36295:return XT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return ZT}}class JT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=DT(t.type)}}class ew{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QT(t.type)}}class tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function t_(o,e){o.seq.push(e),o.map[e.id]=e}function nw(o,e,t){const i=o.name,s=i.length;for(jh.lastIndex=0;;){const a=jh.exec(i),c=jh.lastIndex;let u=a[1];const d=a[2]==="]",f=a[3];if(d&&(u=u|0),f===void 0||f==="["&&c+2===s){t_(t,f===void 0?new JT(u,o,e):new ew(u,o,e));break}else{let g=t.map[u];g===void 0&&(g=new tw(u),t_(t,g)),t=g}}}class xc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);nw(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function n_(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const iw=37297;let rw=0;function sw(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const i_=new at;function ow(o){_t._getMatrix(i_,_t.workingColorSpace,o);const e=`mat3( ${i_.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(o)){case Mc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function r_(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+sw(o.getShaderSource(e),c)}else return s}function aw(o,e){const t=ow(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lw(o,e){let t;switch(e){case My:t="Linear";break;case Ey:t="Reinhard";break;case Ty:t="Cineon";break;case wy:t="ACESFilmic";break;case Ry:t="AgX";break;case by:t="Neutral";break;case Ay:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uc=new W;function cw(){_t.getLuminanceCoefficients(uc);const o=uc.x.toFixed(4),e=uc.y.toFixed(4),t=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function hw(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dw(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function ya(o){return o!==""}function s_(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(o){return o.replace(fw,mw)}const pw=new Map;function mw(o,e){let t=ct[e];if(t===void 0){const i=pw.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zd(t)}const gw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(o){return o.replace(gw,_w)}function _w(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function l_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vw(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===T_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ty?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function yw(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case yo:case xo:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xw(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case xo:e="ENVMAP_MODE_REFRACTION";break}return e}function Sw(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case jd:e="ENVMAP_BLENDING_MULTIPLY";break;case xy:e="ENVMAP_BLENDING_MIX";break;case Sy:e="ENVMAP_BLENDING_ADD";break}return e}function Mw(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ew(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=vw(t),f=yw(t),m=xw(t),g=Sw(t),_=Mw(t),x=uw(t),M=hw(a),E=s.createProgram();let S,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ya).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ya).join(`
`),y.length>0&&(y+=`
`)):(S=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),y=[l_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vr?"#define TONE_MAPPING":"",t.toneMapping!==Vr?ct.tonemapping_pars_fragment:"",t.toneMapping!==Vr?lw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,aw("linearToOutputTexel",t.outputColorSpace),cw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),c=zd(c),c=s_(c,t),c=o_(c,t),u=zd(u),u=s_(u,t),u=o_(u,t),c=a_(c),u=a_(u),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=D+S+c,R=D+y+u,k=n_(s,s.VERTEX_SHADER,L),N=n_(s,s.FRAGMENT_SHADER,R);s.attachShader(E,k),s.attachShader(E,N),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function U(H){if(o.debug.checkShaderErrors){const oe=s.getProgramInfoLog(E).trim(),ee=s.getShaderInfoLog(k).trim(),he=s.getShaderInfoLog(N).trim();let fe=!0,se=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(fe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,k,N);else{const le=r_(s,k,"vertex"),z=r_(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+oe+`
`+le+`
`+z)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ee===""||he==="")&&(se=!1);se&&(H.diagnostics={runnable:fe,programLog:oe,vertexShader:{log:ee,prefix:S},fragmentShader:{log:he,prefix:y}})}s.deleteShader(k),s.deleteShader(N),q=new xc(s,E),C=dw(s,E)}let q;this.getUniforms=function(){return q===void 0&&U(this),q};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(E,iw)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=k,this.fragmentShader=N,this}let Tw=0;class ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Aw(e),t.set(e,i)),i}}class Aw{constructor(e){this.id=Tw++,this.code=e,this.usedTimes=0}}function Rw(o,e,t,i,s,a,c){const u=new V_,d=new ww,f=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return f.add(C),C===0?"uv":`uv${C}`}function S(C,b,H,oe,ee){const he=oe.fog,fe=ee.geometry,se=C.isMeshStandardMaterial?oe.environment:null,le=(C.isMeshStandardMaterial?t:e).get(C.envMap||se),z=le&&le.mapping===Ac?le.image.height:null,ae=M[C.type];C.precision!==null&&(x=s.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const re=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,F=re!==void 0?re.length:0;let ne=0;fe.morphAttributes.position!==void 0&&(ne=1),fe.morphAttributes.normal!==void 0&&(ne=2),fe.morphAttributes.color!==void 0&&(ne=3);let Ie,Z,ce,Me;if(ae){const Et=Di[ae];Ie=Et.vertexShader,Z=Et.fragmentShader}else Ie=C.vertexShader,Z=C.fragmentShader,d.update(C),ce=d.getVertexShaderID(C),Me=d.getFragmentShaderID(C);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ne=ee.isInstancedMesh===!0,Ze=ee.isBatchedMesh===!0,It=!!C.map,yt=!!C.matcap,Ot=!!le,B=!!C.aoMap,wn=!!C.lightMap,mt=!!C.bumpMap,dt=!!C.normalMap,Xe=!!C.displacementMap,Pt=!!C.emissiveMap,We=!!C.metalnessMap,P=!!C.roughnessMap,w=C.anisotropy>0,$=C.clearcoat>0,pe=C.dispersion>0,ge=C.iridescence>0,ue=C.sheen>0,Ve=C.transmission>0,we=w&&!!C.anisotropyMap,Ue=$&&!!C.clearcoatMap,ut=$&&!!C.clearcoatNormalMap,Se=$&&!!C.clearcoatRoughnessMap,ke=ge&&!!C.iridescenceMap,Ye=ge&&!!C.iridescenceThicknessMap,Je=ue&&!!C.sheenColorMap,Be=ue&&!!C.sheenRoughnessMap,ft=!!C.specularMap,rt=!!C.specularColorMap,Ct=!!C.specularIntensityMap,j=Ve&&!!C.transmissionMap,Ae=Ve&&!!C.thicknessMap,ie=!!C.gradientMap,de=!!C.alphaMap,Pe=C.alphaTest>0,Ce=!!C.alphaHash,st=!!C.extensions;let Bt=Vr;C.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Bt=o.toneMapping);const en={shaderID:ae,shaderType:C.type,shaderName:C.name,vertexShader:Ie,fragmentShader:Z,defines:C.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:Ze,batchingColor:Ze&&ee._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&ee.instanceColor!==null,instancingMorph:Ne&&ee.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:On,alphaToCoverage:!!C.alphaToCoverage,map:It,matcap:yt,envMap:Ot,envMapMode:Ot&&le.mapping,envMapCubeUVHeight:z,aoMap:B,lightMap:wn,bumpMap:mt,normalMap:dt,displacementMap:_&&Xe,emissiveMap:Pt,normalMapObjectSpace:dt&&C.normalMapType===Ny,normalMapTangentSpace:dt&&C.normalMapType===Jd,metalnessMap:We,roughnessMap:P,anisotropy:w,anisotropyMap:we,clearcoat:$,clearcoatMap:Ue,clearcoatNormalMap:ut,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:ge,iridescenceMap:ke,iridescenceThicknessMap:Ye,sheen:ue,sheenColorMap:Je,sheenRoughnessMap:Be,specularMap:ft,specularColorMap:rt,specularIntensityMap:Ct,transmission:Ve,transmissionMap:j,thicknessMap:Ae,gradientMap:ie,opaque:C.transparent===!1&&C.blending===fo&&C.alphaToCoverage===!1,alphaMap:de,alphaTest:Pe,alphaHash:Ce,combine:C.combine,mapUv:It&&E(C.map.channel),aoMapUv:B&&E(C.aoMap.channel),lightMapUv:wn&&E(C.lightMap.channel),bumpMapUv:mt&&E(C.bumpMap.channel),normalMapUv:dt&&E(C.normalMap.channel),displacementMapUv:Xe&&E(C.displacementMap.channel),emissiveMapUv:Pt&&E(C.emissiveMap.channel),metalnessMapUv:We&&E(C.metalnessMap.channel),roughnessMapUv:P&&E(C.roughnessMap.channel),anisotropyMapUv:we&&E(C.anisotropyMap.channel),clearcoatMapUv:Ue&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:ut&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(C.sheenRoughnessMap.channel),specularMapUv:ft&&E(C.specularMap.channel),specularColorMapUv:rt&&E(C.specularColorMap.channel),specularIntensityMapUv:Ct&&E(C.specularIntensityMap.channel),transmissionMapUv:j&&E(C.transmissionMap.channel),thicknessMapUv:Ae&&E(C.thicknessMap.channel),alphaMapUv:de&&E(C.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(dt||w),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!fe.attributes.uv&&(It||de),fog:!!he,useFog:C.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Te,skinning:ee.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Bt,decodeVideoTexture:It&&C.map.isVideoTexture===!0&&_t.getTransfer(C.map.colorSpace)===Ut,decodeVideoTextureEmissive:Pt&&C.emissiveMap.isVideoTexture===!0&&_t.getTransfer(C.emissiveMap.colorSpace)===Ut,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ii,flipSided:C.side===Xn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:st&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&C.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return en.vertexUv1s=f.has(1),en.vertexUv2s=f.has(2),en.vertexUv3s=f.has(3),f.clear(),en}function y(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)b.push(H),b.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(D(b,C),L(b,C),b.push(o.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function D(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function L(C,b){u.disableAll(),b.supportsVertexTextures&&u.enable(0),b.instancing&&u.enable(1),b.instancingColor&&u.enable(2),b.instancingMorph&&u.enable(3),b.matcap&&u.enable(4),b.envMap&&u.enable(5),b.normalMapObjectSpace&&u.enable(6),b.normalMapTangentSpace&&u.enable(7),b.clearcoat&&u.enable(8),b.iridescence&&u.enable(9),b.alphaTest&&u.enable(10),b.vertexColors&&u.enable(11),b.vertexAlphas&&u.enable(12),b.vertexUv1s&&u.enable(13),b.vertexUv2s&&u.enable(14),b.vertexUv3s&&u.enable(15),b.vertexTangents&&u.enable(16),b.anisotropy&&u.enable(17),b.alphaHash&&u.enable(18),b.batching&&u.enable(19),b.dispersion&&u.enable(20),b.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reverseDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),C.push(u.mask)}function R(C){const b=M[C.type];let H;if(b){const oe=Di[b];H=wx.clone(oe.uniforms)}else H=C.uniforms;return H}function k(C,b){let H;for(let oe=0,ee=m.length;oe<ee;oe++){const he=m[oe];if(he.cacheKey===b){H=he,++H.usedTimes;break}}return H===void 0&&(H=new Ew(o,b,C,a),m.push(H)),H}function N(C){if(--C.usedTimes===0){const b=m.indexOf(C);m[b]=m[m.length-1],m.pop(),C.destroy()}}function U(C){d.remove(C)}function q(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:R,acquireProgram:k,releaseProgram:N,releaseShaderCache:U,programs:m,dispose:q}}function bw(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,d){o.get(c)[u]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function Cw(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function c_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function u_(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g,_,x,M,E,S){let y=o[e];return y===void 0?(y={id:g.id,object:g,geometry:_,material:x,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},o[e]=y):(y.id=g.id,y.object=g,y.geometry=_,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=E,y.group=S),e++,y}function u(g,_,x,M,E,S){const y=c(g,_,x,M,E,S);x.transmission>0?i.push(y):x.transparent===!0?s.push(y):t.push(y)}function d(g,_,x,M,E,S){const y=c(g,_,x,M,E,S);x.transmission>0?i.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function f(g,_){t.length>1&&t.sort(g||Cw),i.length>1&&i.sort(_||c_),s.length>1&&s.sort(_||c_)}function m(){for(let g=e,_=o.length;g<_;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:d,finish:m,sort:f}}function Pw(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new u_,o.set(i,[c])):s>=a.length?(c=new u_,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function Lw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Qe};break;case"SpotLight":t={position:new W,direction:new W,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new W,halfWidth:new W,halfHeight:new W};break}return o[e.id]=t,t}}}function Dw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Iw=0;function Nw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Uw(o){const e=new Lw,t=Dw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new W);const s=new W,a=new lt,c=new lt;function u(f){let m=0,g=0,_=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,D=0,L=0,R=0,k=0,N=0,U=0;f.sort(Nw);for(let C=0,b=f.length;C<b;C++){const H=f[C],oe=H.color,ee=H.intensity,he=H.distance,fe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=oe.r*ee,g+=oe.g*ee,_+=oe.b*ee;else if(H.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(H.sh.coefficients[se],ee);U++}else if(H.isDirectionalLight){const se=e.get(H);if(se.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const le=H.shadow,z=t.get(H);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,i.directionalShadow[x]=z,i.directionalShadowMap[x]=fe,i.directionalShadowMatrix[x]=H.shadow.matrix,D++}i.directional[x]=se,x++}else if(H.isSpotLight){const se=e.get(H);se.position.setFromMatrixPosition(H.matrixWorld),se.color.copy(oe).multiplyScalar(ee),se.distance=he,se.coneCos=Math.cos(H.angle),se.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),se.decay=H.decay,i.spot[E]=se;const le=H.shadow;if(H.map&&(i.spotLightMap[k]=H.map,k++,le.updateMatrices(H),H.castShadow&&N++),i.spotLightMatrix[E]=le.matrix,H.castShadow){const z=t.get(H);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,i.spotShadow[E]=z,i.spotShadowMap[E]=fe,R++}E++}else if(H.isRectAreaLight){const se=e.get(H);se.color.copy(oe).multiplyScalar(ee),se.halfWidth.set(H.width*.5,0,0),se.halfHeight.set(0,H.height*.5,0),i.rectArea[S]=se,S++}else if(H.isPointLight){const se=e.get(H);if(se.color.copy(H.color).multiplyScalar(H.intensity),se.distance=H.distance,se.decay=H.decay,H.castShadow){const le=H.shadow,z=t.get(H);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,z.shadowCameraNear=le.camera.near,z.shadowCameraFar=le.camera.far,i.pointShadow[M]=z,i.pointShadowMap[M]=fe,i.pointShadowMatrix[M]=H.shadow.matrix,L++}i.point[M]=se,M++}else if(H.isHemisphereLight){const se=e.get(H);se.skyColor.copy(H.color).multiplyScalar(ee),se.groundColor.copy(H.groundColor).multiplyScalar(ee),i.hemi[y]=se,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const q=i.hash;(q.directionalLength!==x||q.pointLength!==M||q.spotLength!==E||q.rectAreaLength!==S||q.hemiLength!==y||q.numDirectionalShadows!==D||q.numPointShadows!==L||q.numSpotShadows!==R||q.numSpotMaps!==k||q.numLightProbes!==U)&&(i.directional.length=x,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=R+k-N,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=U,q.directionalLength=x,q.pointLength=M,q.spotLength=E,q.rectAreaLength=S,q.hemiLength=y,q.numDirectionalShadows=D,q.numPointShadows=L,q.numSpotShadows=R,q.numSpotMaps=k,q.numLightProbes=U,i.version=Iw++)}function d(f,m){let g=0,_=0,x=0,M=0,E=0;const S=m.matrixWorldInverse;for(let y=0,D=f.length;y<D;y++){const L=f[y];if(L.isDirectionalLight){const R=i.directional[g];R.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),g++}else if(L.isSpotLight){const R=i.spot[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const R=i.rectArea[M];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),c.identity(),a.copy(L.matrixWorld),a.premultiply(S),c.extractRotation(a),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const R=i.point[_];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),_++}else if(L.isHemisphereLight){const R=i.hemi[E];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(S),E++}}}return{setup:u,setupView:d,state:i}}function h_(o){const e=new Uw(o),t=[],i=[];function s(m){f.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function c(m){i.push(m)}function u(){e.setup(t)}function d(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:c}}function Fw(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new h_(o),e.set(s,[u])):a>=c.length?(u=new h_(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bw(o,e,t){let i=new sf;const s=new et,a=new et,c=new bt,u=new Bx({depthPacking:Iy}),d=new zx,f={},m=t.maxTextureSize,g={[Ni]:Xn,[Xn]:Ni,[Ii]:Ii},_=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Ow,fragmentShader:kw}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new hi;M.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Nn(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T_;let y=this.type;this.render=function(N,U,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const C=o.getRenderTarget(),b=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),oe=o.state;oe.setBlending(Hr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ee=y!==nr&&this.type===nr,he=y===nr&&this.type!==nr;for(let fe=0,se=N.length;fe<se;fe++){const le=N[fe],z=le.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ae=z.getFrameExtents();if(s.multiply(ae),a.copy(z.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/ae.x),s.x=a.x*ae.x,z.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/ae.y),s.y=a.y*ae.y,z.mapSize.y=a.y)),z.map===null||ee===!0||he===!0){const F=this.type!==nr?{minFilter:Un,magFilter:Un}:{};z.map!==null&&z.map.dispose(),z.map=new xs(s.x,s.y,F),z.map.texture.name=le.name+".shadowMap",z.camera.updateProjectionMatrix()}o.setRenderTarget(z.map),o.clear();const re=z.getViewportCount();for(let F=0;F<re;F++){const ne=z.getViewport(F);c.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),oe.viewport(c),z.updateMatrices(le,F),i=z.getFrustum(),R(U,q,z.camera,le,this.type)}z.isPointLightShadow!==!0&&this.type===nr&&D(z,q),z.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(C,b,H)};function D(N,U){const q=e.update(E);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new xs(s.x,s.y)),_.uniforms.shadow_pass.value=N.map.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(U,null,q,_,E,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(U,null,q,x,E,null)}function L(N,U,q,C){let b=null;const H=q.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)b=H;else if(b=q.isPointLight===!0?d:u,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=b.uuid,ee=U.uuid;let he=f[oe];he===void 0&&(he={},f[oe]=he);let fe=he[ee];fe===void 0&&(fe=b.clone(),he[ee]=fe,U.addEventListener("dispose",k)),b=fe}if(b.visible=U.visible,b.wireframe=U.wireframe,C===nr?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:g[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,q.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const oe=o.properties.get(b);oe.light=q}return b}function R(N,U,q,C,b){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&b===nr)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,N.matrixWorld);const ee=e.update(N),he=N.material;if(Array.isArray(he)){const fe=ee.groups;for(let se=0,le=fe.length;se<le;se++){const z=fe[se],ae=he[z.materialIndex];if(ae&&ae.visible){const re=L(N,ae,C,b);N.onBeforeShadow(o,N,U,q,ee,re,z),o.renderBufferDirect(q,null,ee,re,N,z),N.onAfterShadow(o,N,U,q,ee,re,z)}}}else if(he.visible){const fe=L(N,he,C,b);N.onBeforeShadow(o,N,U,q,ee,fe,null),o.renderBufferDirect(q,null,ee,fe,N,null),N.onAfterShadow(o,N,U,q,ee,fe,null)}}const oe=N.children;for(let ee=0,he=oe.length;ee<he;ee++)R(oe[ee],U,q,C,b)}function k(N){N.target.removeEventListener("dispose",k);for(const q in f){const C=f[q],b=N.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const zw={[ed]:td,[nd]:sd,[id]:od,[vo]:rd,[td]:ed,[sd]:nd,[od]:id,[rd]:vo};function Hw(o,e){function t(){let j=!1;const Ae=new bt;let ie=null;const de=new bt(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!j&&(o.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){j=Pe},setClear:function(Pe,Ce,st,Bt,en){en===!0&&(Pe*=Bt,Ce*=Bt,st*=Bt),Ae.set(Pe,Ce,st,Bt),de.equals(Ae)===!1&&(o.clearColor(Pe,Ce,st,Bt),de.copy(Ae))},reset:function(){j=!1,ie=null,de.set(-1,0,0,0)}}}function i(){let j=!1,Ae=!1,ie=null,de=null,Pe=null;return{setReversed:function(Ce){if(Ae!==Ce){const st=e.get("EXT_clip_control");Ae?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Bt=Pe;Pe=null,this.setClear(Bt)}Ae=Ce},getReversed:function(){return Ae},setTest:function(Ce){Ce?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Ce){ie!==Ce&&!j&&(o.depthMask(Ce),ie=Ce)},setFunc:function(Ce){if(Ae&&(Ce=zw[Ce]),de!==Ce){switch(Ce){case ed:o.depthFunc(o.NEVER);break;case td:o.depthFunc(o.ALWAYS);break;case nd:o.depthFunc(o.LESS);break;case vo:o.depthFunc(o.LEQUAL);break;case id:o.depthFunc(o.EQUAL);break;case rd:o.depthFunc(o.GEQUAL);break;case sd:o.depthFunc(o.GREATER);break;case od:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}de=Ce}},setLocked:function(Ce){j=Ce},setClear:function(Ce){Pe!==Ce&&(Ae&&(Ce=1-Ce),o.clearDepth(Ce),Pe=Ce)},reset:function(){j=!1,ie=null,de=null,Pe=null,Ae=!1}}}function s(){let j=!1,Ae=null,ie=null,de=null,Pe=null,Ce=null,st=null,Bt=null,en=null;return{setTest:function(Et){j||(Et?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Et){Ae!==Et&&!j&&(o.stencilMask(Et),Ae=Et)},setFunc:function(Et,kn,An){(ie!==Et||de!==kn||Pe!==An)&&(o.stencilFunc(Et,kn,An),ie=Et,de=kn,Pe=An)},setOp:function(Et,kn,An){(Ce!==Et||st!==kn||Bt!==An)&&(o.stencilOp(Et,kn,An),Ce=Et,st=kn,Bt=An)},setLocked:function(Et){j=Et},setClear:function(Et){en!==Et&&(o.clearStencil(Et),en=Et)},reset:function(){j=!1,Ae=null,ie=null,de=null,Pe=null,Ce=null,st=null,Bt=null,en=null}}}const a=new t,c=new i,u=new s,d=new WeakMap,f=new WeakMap;let m={},g={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,D=null,L=null,R=null,k=null,N=null,U=new Qe(0,0,0),q=0,C=!1,b=null,H=null,oe=null,ee=null,he=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const z=o.getParameter(o.VERSION);z.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(z)[1]),se=le>=1):z.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),se=le>=2);let ae=null,re={};const F=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Ie=new bt().fromArray(F),Z=new bt().fromArray(ne);function ce(j,Ae,ie,de){const Pe=new Uint8Array(4),Ce=o.createTexture();o.bindTexture(j,Ce),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let st=0;st<ie;st++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,de,0,o.RGBA,o.UNSIGNED_BYTE,Pe):o.texImage2D(Ae+st,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pe);return Ce}const Me={};Me[o.TEXTURE_2D]=ce(o.TEXTURE_2D,o.TEXTURE_2D,1),Me[o.TEXTURE_CUBE_MAP]=ce(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[o.TEXTURE_2D_ARRAY]=ce(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Me[o.TEXTURE_3D]=ce(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ve(o.DEPTH_TEST),c.setFunc(vo),mt(!1),dt(Ym),ve(o.CULL_FACE),B(Hr);function ve(j){m[j]!==!0&&(o.enable(j),m[j]=!0)}function Te(j){m[j]!==!1&&(o.disable(j),m[j]=!1)}function Ne(j,Ae){return g[j]!==Ae?(o.bindFramebuffer(j,Ae),g[j]=Ae,j===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ae),j===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(j,Ae){let ie=x,de=!1;if(j){ie=_.get(Ae),ie===void 0&&(ie=[],_.set(Ae,ie));const Pe=j.textures;if(ie.length!==Pe.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let Ce=0,st=Pe.length;Ce<st;Ce++)ie[Ce]=o.COLOR_ATTACHMENT0+Ce;ie.length=Pe.length,de=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,de=!0);de&&o.drawBuffers(ie)}function It(j){return M!==j?(o.useProgram(j),M=j,!0):!1}const yt={[ms]:o.FUNC_ADD,[iy]:o.FUNC_SUBTRACT,[ry]:o.FUNC_REVERSE_SUBTRACT};yt[sy]=o.MIN,yt[oy]=o.MAX;const Ot={[ay]:o.ZERO,[ly]:o.ONE,[cy]:o.SRC_COLOR,[Qh]:o.SRC_ALPHA,[my]:o.SRC_ALPHA_SATURATE,[fy]:o.DST_COLOR,[hy]:o.DST_ALPHA,[uy]:o.ONE_MINUS_SRC_COLOR,[Jh]:o.ONE_MINUS_SRC_ALPHA,[py]:o.ONE_MINUS_DST_COLOR,[dy]:o.ONE_MINUS_DST_ALPHA,[gy]:o.CONSTANT_COLOR,[_y]:o.ONE_MINUS_CONSTANT_COLOR,[vy]:o.CONSTANT_ALPHA,[yy]:o.ONE_MINUS_CONSTANT_ALPHA};function B(j,Ae,ie,de,Pe,Ce,st,Bt,en,Et){if(j===Hr){E===!0&&(Te(o.BLEND),E=!1);return}if(E===!1&&(ve(o.BLEND),E=!0),j!==ny){if(j!==S||Et!==C){if((y!==ms||R!==ms)&&(o.blendEquation(o.FUNC_ADD),y=ms,R=ms),Et)switch(j){case fo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Km:o.blendFunc(o.ONE,o.ONE);break;case $m:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zm:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case fo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Km:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case $m:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zm:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}D=null,L=null,k=null,N=null,U.set(0,0,0),q=0,S=j,C=Et}return}Pe=Pe||Ae,Ce=Ce||ie,st=st||de,(Ae!==y||Pe!==R)&&(o.blendEquationSeparate(yt[Ae],yt[Pe]),y=Ae,R=Pe),(ie!==D||de!==L||Ce!==k||st!==N)&&(o.blendFuncSeparate(Ot[ie],Ot[de],Ot[Ce],Ot[st]),D=ie,L=de,k=Ce,N=st),(Bt.equals(U)===!1||en!==q)&&(o.blendColor(Bt.r,Bt.g,Bt.b,en),U.copy(Bt),q=en),S=j,C=!1}function wn(j,Ae){j.side===Ii?Te(o.CULL_FACE):ve(o.CULL_FACE);let ie=j.side===Xn;Ae&&(ie=!ie),mt(ie),j.blending===fo&&j.transparent===!1?B(Hr):B(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),a.setMask(j.colorWrite);const de=j.stencilWrite;u.setTest(de),de&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Pt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function mt(j){b!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),b=j)}function dt(j){j!==Jv?(ve(o.CULL_FACE),j!==H&&(j===Ym?o.cullFace(o.BACK):j===ey?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),H=j}function Xe(j){j!==oe&&(se&&o.lineWidth(j),oe=j)}function Pt(j,Ae,ie){j?(ve(o.POLYGON_OFFSET_FILL),(ee!==Ae||he!==ie)&&(o.polygonOffset(Ae,ie),ee=Ae,he=ie)):Te(o.POLYGON_OFFSET_FILL)}function We(j){j?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function P(j){j===void 0&&(j=o.TEXTURE0+fe-1),ae!==j&&(o.activeTexture(j),ae=j)}function w(j,Ae,ie){ie===void 0&&(ae===null?ie=o.TEXTURE0+fe-1:ie=ae);let de=re[ie];de===void 0&&(de={type:void 0,texture:void 0},re[ie]=de),(de.type!==j||de.texture!==Ae)&&(ae!==ie&&(o.activeTexture(ie),ae=ie),o.bindTexture(j,Ae||Me[j]),de.type=j,de.texture=Ae)}function $(){const j=re[ae];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ue(){try{o.texSubImage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ve(){try{o.texSubImage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ue(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ut(){try{o.texStorage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Se(){try{o.texStorage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ke(){try{o.texImage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{o.texImage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Je(j){Ie.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),Ie.copy(j))}function Be(j){Z.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),Z.copy(j))}function ft(j,Ae){let ie=f.get(Ae);ie===void 0&&(ie=new WeakMap,f.set(Ae,ie));let de=ie.get(j);de===void 0&&(de=o.getUniformBlockIndex(Ae,j.name),ie.set(j,de))}function rt(j,Ae){const de=f.get(Ae).get(j);d.get(Ae)!==de&&(o.uniformBlockBinding(Ae,de,j.__bindingPointIndex),d.set(Ae,de))}function Ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ae=null,re={},g={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,D=null,L=null,R=null,k=null,N=null,U=new Qe(0,0,0),q=0,C=!1,b=null,H=null,oe=null,ee=null,he=null,Ie.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:ve,disable:Te,bindFramebuffer:Ne,drawBuffers:Ze,useProgram:It,setBlending:B,setMaterial:wn,setFlipSided:mt,setCullFace:dt,setLineWidth:Xe,setPolygonOffset:Pt,setScissorTest:We,activeTexture:P,bindTexture:w,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ke,texImage3D:Ye,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:ut,texStorage3D:Se,texSubImage2D:ue,texSubImage3D:Ve,compressedTexSubImage2D:we,compressedTexSubImage3D:Ue,scissor:Je,viewport:Be,reset:Ct}}function Vw(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new et,m=new WeakMap;let g;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,w){return x?new OffscreenCanvas(P,w):Aa("canvas")}function E(P,w,$){let pe=1;const ge=We(P);if((ge.width>$||ge.height>$)&&(pe=$/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(pe*ge.width),Ve=Math.floor(pe*ge.height);g===void 0&&(g=M(ue,Ve));const we=w?M(ue,Ve):g;return we.width=ue,we.height=Ve,we.getContext("2d").drawImage(P,0,0,ue,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+Ve+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function S(P){return P.generateMipmaps}function y(P){o.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(P,w,$,pe,ge=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=w;if(w===o.RED&&($===o.FLOAT&&(ue=o.R32F),$===o.HALF_FLOAT&&(ue=o.R16F),$===o.UNSIGNED_BYTE&&(ue=o.R8)),w===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.R8UI),$===o.UNSIGNED_SHORT&&(ue=o.R16UI),$===o.UNSIGNED_INT&&(ue=o.R32UI),$===o.BYTE&&(ue=o.R8I),$===o.SHORT&&(ue=o.R16I),$===o.INT&&(ue=o.R32I)),w===o.RG&&($===o.FLOAT&&(ue=o.RG32F),$===o.HALF_FLOAT&&(ue=o.RG16F),$===o.UNSIGNED_BYTE&&(ue=o.RG8)),w===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RG8UI),$===o.UNSIGNED_SHORT&&(ue=o.RG16UI),$===o.UNSIGNED_INT&&(ue=o.RG32UI),$===o.BYTE&&(ue=o.RG8I),$===o.SHORT&&(ue=o.RG16I),$===o.INT&&(ue=o.RG32I)),w===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),$===o.UNSIGNED_INT&&(ue=o.RGB32UI),$===o.BYTE&&(ue=o.RGB8I),$===o.SHORT&&(ue=o.RGB16I),$===o.INT&&(ue=o.RGB32I)),w===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),$===o.UNSIGNED_INT&&(ue=o.RGBA32UI),$===o.BYTE&&(ue=o.RGBA8I),$===o.SHORT&&(ue=o.RGBA16I),$===o.INT&&(ue=o.RGBA32I)),w===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),w===o.RGBA){const Ve=ge?Mc:_t.getTransfer(pe);$===o.FLOAT&&(ue=o.RGBA32F),$===o.HALF_FLOAT&&(ue=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ue=Ve===Ut?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function R(P,w){let $;return P?w===null||w===ys||w===So?$=o.DEPTH24_STENCIL8:w===Ti?$=o.DEPTH32F_STENCIL8:w===Ea&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ys||w===So?$=o.DEPTH_COMPONENT24:w===Ti?$=o.DEPTH_COMPONENT32F:w===Ea&&($=o.DEPTH_COMPONENT16),$}function k(P,w){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Un&&P.minFilter!==Jn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function N(P){const w=P.target;w.removeEventListener("dispose",N),q(w),w.isVideoTexture&&m.delete(w)}function U(P){const w=P.target;w.removeEventListener("dispose",U),b(w)}function q(P){const w=i.get(P);if(w.__webglInit===void 0)return;const $=P.source,pe=_.get($);if(pe){const ge=pe[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&C(P),Object.keys(pe).length===0&&_.delete($)}i.remove(P)}function C(P){const w=i.get(P);o.deleteTexture(w.__webglTexture);const $=P.source,pe=_.get($);delete pe[w.__cacheKey],c.memory.textures--}function b(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ge=0;ge<w.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(w.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)o.deleteFramebuffer(w.__webglFramebuffer[pe]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=P.textures;for(let pe=0,ge=$.length;pe<ge;pe++){const ue=i.get($[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),c.memory.textures--),i.remove($[pe])}i.remove(P)}let H=0;function oe(){H=0}function ee(){const P=H;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),H+=1,P}function he(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function fe(P,w){const $=i.get(P);if(P.isVideoTexture&&Xe(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z($,P,w);return}}t.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+w)}function se(P,w){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Z($,P,w);return}t.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+w)}function le(P,w){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Z($,P,w);return}t.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+w)}function z(P,w){const $=i.get(P);if(P.version>0&&$.__version!==P.version){ce($,P,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+w)}const ae={[vs]:o.REPEAT,[kr]:o.CLAMP_TO_EDGE,[Sc]:o.MIRRORED_REPEAT},re={[Un]:o.NEAREST,[A_]:o.NEAREST_MIPMAP_NEAREST,[va]:o.NEAREST_MIPMAP_LINEAR,[Jn]:o.LINEAR,[fc]:o.LINEAR_MIPMAP_NEAREST,[rr]:o.LINEAR_MIPMAP_LINEAR},F={[Uy]:o.NEVER,[Hy]:o.ALWAYS,[Fy]:o.LESS,[O_]:o.LEQUAL,[Oy]:o.EQUAL,[zy]:o.GEQUAL,[ky]:o.GREATER,[By]:o.NOTEQUAL};function ne(P,w){if(w.type===Ti&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Jn||w.magFilter===fc||w.magFilter===va||w.magFilter===rr||w.minFilter===Jn||w.minFilter===fc||w.minFilter===va||w.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,ae[w.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,ae[w.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,ae[w.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,re[w.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Un||w.minFilter!==va&&w.minFilter!==rr||w.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ie(P,w){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",N));const pe=w.source;let ge=_.get(pe);ge===void 0&&(ge={},_.set(pe,ge));const ue=he(w);if(ue!==P.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ge[ue].usedTimes++;const Ve=ge[P.__cacheKey];Ve!==void 0&&(ge[P.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(w)),P.__cacheKey=ue,P.__webglTexture=ge[ue].texture}return $}function Z(P,w,$){let pe=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ie(P,w),ue=w.source;t.bindTexture(pe,P.__webglTexture,o.TEXTURE0+$);const Ve=i.get(ue);if(ue.version!==Ve.__version||ge===!0){t.activeTexture(o.TEXTURE0+$);const we=_t.getPrimaries(_t.workingColorSpace),Ue=w.colorSpace===Or?null:_t.getPrimaries(w.colorSpace),ut=w.colorSpace===Or||we===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Se=E(w.image,!1,s.maxTextureSize);Se=Pt(w,Se);const ke=a.convert(w.format,w.colorSpace),Ye=a.convert(w.type);let Je=L(w.internalFormat,ke,Ye,w.colorSpace,w.isVideoTexture);ne(pe,w);let Be;const ft=w.mipmaps,rt=w.isVideoTexture!==!0,Ct=Ve.__version===void 0||ge===!0,j=ue.dataReady,Ae=k(w,Se);if(w.isDepthTexture)Je=R(w.format===Mo,w.type),Ct&&(rt?t.texStorage2D(o.TEXTURE_2D,1,Je,Se.width,Se.height):t.texImage2D(o.TEXTURE_2D,0,Je,Se.width,Se.height,0,ke,Ye,null));else if(w.isDataTexture)if(ft.length>0){rt&&Ct&&t.texStorage2D(o.TEXTURE_2D,Ae,Je,ft[0].width,ft[0].height);for(let ie=0,de=ft.length;ie<de;ie++)Be=ft[ie],rt?j&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,Ye,Be.data):t.texImage2D(o.TEXTURE_2D,ie,Je,Be.width,Be.height,0,ke,Ye,Be.data);w.generateMipmaps=!1}else rt?(Ct&&t.texStorage2D(o.TEXTURE_2D,Ae,Je,Se.width,Se.height),j&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,Ye,Se.data)):t.texImage2D(o.TEXTURE_2D,0,Je,Se.width,Se.height,0,ke,Ye,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&Ct&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,ft[0].width,ft[0].height,Se.depth);for(let ie=0,de=ft.length;ie<de;ie++)if(Be=ft[ie],w.format!==ui)if(ke!==null)if(rt){if(j)if(w.layerUpdates.size>0){const Pe=Hg(Be.width,Be.height,w.format,w.type);for(const Ce of w.layerUpdates){const st=Be.data.subarray(Ce*Pe/Be.data.BYTES_PER_ELEMENT,(Ce+1)*Pe/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,Ce,Be.width,Be.height,1,ke,st)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Se.depth,ke,Be.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,Je,Be.width,Be.height,Se.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?j&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Se.depth,ke,Ye,Be.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ie,Je,Be.width,Be.height,Se.depth,0,ke,Ye,Be.data)}else{rt&&Ct&&t.texStorage2D(o.TEXTURE_2D,Ae,Je,ft[0].width,ft[0].height);for(let ie=0,de=ft.length;ie<de;ie++)Be=ft[ie],w.format!==ui?ke!==null?rt?j&&t.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(o.TEXTURE_2D,ie,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?j&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,Ye,Be.data):t.texImage2D(o.TEXTURE_2D,ie,Je,Be.width,Be.height,0,ke,Ye,Be.data)}else if(w.isDataArrayTexture)if(rt){if(Ct&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,Se.width,Se.height,Se.depth),j)if(w.layerUpdates.size>0){const ie=Hg(Se.width,Se.height,w.format,w.type);for(const de of w.layerUpdates){const Pe=Se.data.subarray(de*ie/Se.data.BYTES_PER_ELEMENT,(de+1)*ie/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,ke,Ye,Pe)}w.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,Ye,Se.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,ke,Ye,Se.data);else if(w.isData3DTexture)rt?(Ct&&t.texStorage3D(o.TEXTURE_3D,Ae,Je,Se.width,Se.height,Se.depth),j&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,Ye,Se.data)):t.texImage3D(o.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,ke,Ye,Se.data);else if(w.isFramebufferTexture){if(Ct)if(rt)t.texStorage2D(o.TEXTURE_2D,Ae,Je,Se.width,Se.height);else{let ie=Se.width,de=Se.height;for(let Pe=0;Pe<Ae;Pe++)t.texImage2D(o.TEXTURE_2D,Pe,Je,ie,de,0,ke,Ye,null),ie>>=1,de>>=1}}else if(ft.length>0){if(rt&&Ct){const ie=We(ft[0]);t.texStorage2D(o.TEXTURE_2D,Ae,Je,ie.width,ie.height)}for(let ie=0,de=ft.length;ie<de;ie++)Be=ft[ie],rt?j&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke,Ye,Be):t.texImage2D(o.TEXTURE_2D,ie,Je,ke,Ye,Be);w.generateMipmaps=!1}else if(rt){if(Ct){const ie=We(Se);t.texStorage2D(o.TEXTURE_2D,Ae,Je,ie.width,ie.height)}j&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,ke,Ye,Se)}else t.texImage2D(o.TEXTURE_2D,0,Je,ke,Ye,Se);S(w)&&y(pe),Ve.__version=ue.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ce(P,w,$){if(w.image.length!==6)return;const pe=Ie(P,w),ge=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+$);const ue=i.get(ge);if(ge.version!==ue.__version||pe===!0){t.activeTexture(o.TEXTURE0+$);const Ve=_t.getPrimaries(_t.workingColorSpace),we=w.colorSpace===Or?null:_t.getPrimaries(w.colorSpace),Ue=w.colorSpace===Or||Ve===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ut=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let de=0;de<6;de++)!ut&&!Se?ke[de]=E(w.image[de],!0,s.maxCubemapSize):ke[de]=Se?w.image[de].image:w.image[de],ke[de]=Pt(w,ke[de]);const Ye=ke[0],Je=a.convert(w.format,w.colorSpace),Be=a.convert(w.type),ft=L(w.internalFormat,Je,Be,w.colorSpace),rt=w.isVideoTexture!==!0,Ct=ue.__version===void 0||pe===!0,j=ge.dataReady;let Ae=k(w,Ye);ne(o.TEXTURE_CUBE_MAP,w);let ie;if(ut){rt&&Ct&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ft,Ye.width,Ye.height);for(let de=0;de<6;de++){ie=ke[de].mipmaps;for(let Pe=0;Pe<ie.length;Pe++){const Ce=ie[Pe];w.format!==ui?Je!==null?rt?j&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Ce.width,Ce.height,Je,Ce.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,ft,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?j&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,0,0,Ce.width,Ce.height,Je,Be,Ce.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe,ft,Ce.width,Ce.height,0,Je,Be,Ce.data)}}}else{if(ie=w.mipmaps,rt&&Ct){ie.length>0&&Ae++;const de=We(ke[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ft,de.width,de.height)}for(let de=0;de<6;de++)if(Se){rt?j&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke[de].width,ke[de].height,Je,Be,ke[de].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,ke[de].width,ke[de].height,0,Je,Be,ke[de].data);for(let Pe=0;Pe<ie.length;Pe++){const st=ie[Pe].image[de].image;rt?j&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,st.width,st.height,Je,Be,st.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,ft,st.width,st.height,0,Je,Be,st.data)}}else{rt?j&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Je,Be,ke[de]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,Je,Be,ke[de]);for(let Pe=0;Pe<ie.length;Pe++){const Ce=ie[Pe];rt?j&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,0,0,Je,Be,Ce.image[de]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe+1,ft,Je,Be,Ce.image[de])}}}S(w)&&y(o.TEXTURE_CUBE_MAP),ue.__version=ge.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Me(P,w,$,pe,ge,ue){const Ve=a.convert($.format,$.colorSpace),we=a.convert($.type),Ue=L($.internalFormat,Ve,we,$.colorSpace),ut=i.get(w),Se=i.get($);if(Se.__renderTarget=w,!ut.__hasExternalTextures){const ke=Math.max(1,w.width>>ue),Ye=Math.max(1,w.height>>ue);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?t.texImage3D(ge,ue,Ue,ke,Ye,w.depth,0,Ve,we,null):t.texImage2D(ge,ue,Ue,ke,Ye,0,Ve,we,null)}t.bindFramebuffer(o.FRAMEBUFFER,P),dt(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,Se.__webglTexture,0,mt(w)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,Se.__webglTexture,ue),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(P,w,$){if(o.bindRenderbuffer(o.RENDERBUFFER,P),w.depthBuffer){const pe=w.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=R(w.stencilBuffer,ge),Ve=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=mt(w);dt(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,ue,w.width,w.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,ue,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,ue,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ve,o.RENDERBUFFER,P)}else{const pe=w.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],Ve=a.convert(ue.format,ue.colorSpace),we=a.convert(ue.type),Ue=L(ue.internalFormat,Ve,we,ue.colorSpace),ut=mt(w);$&&dt(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,Ue,w.width,w.height):dt(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ut,Ue,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Ue,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe(w.depthTexture,0);const ge=pe.__webglTexture,ue=mt(w);if(w.depthTexture.format===po)dt(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(w.depthTexture.format===Mo)dt(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ne(P){const w=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=pe}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,P)}else if($){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(w.__webglDepthbuffer[pe],P,!1);else{const ge=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),ve(w.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(P,w,$){const pe=i.get(P);w!==void 0&&Me(pe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Ne(P)}function It(P){const w=P.texture,$=i.get(P),pe=i.get(w);P.addEventListener("dispose",U);const ge=P.textures,ue=P.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=w.version,c.memory.textures++),ue){$.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[we]=[];for(let Ue=0;Ue<w.mipmaps.length;Ue++)$.__webglFramebuffer[we][Ue]=o.createFramebuffer()}else $.__webglFramebuffer[we]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)$.__webglFramebuffer[we]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Ve)for(let we=0,Ue=ge.length;we<Ue;we++){const ut=i.get(ge[we]);ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture(),c.memory.textures++)}if(P.samples>0&&dt(P)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ue=ge[we];$.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const ut=a.convert(Ue.format,Ue.colorSpace),Se=a.convert(Ue.type),ke=L(Ue.internalFormat,ut,Se,Ue.colorSpace,P.isXRRenderTarget===!0),Ye=mt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye,ke,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,$.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),ve($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)Me($.__webglFramebuffer[we][Ue],P,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ue);else Me($.__webglFramebuffer[we],P,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(w)&&y(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let we=0,Ue=ge.length;we<Ue;we++){const ut=ge[we],Se=i.get(ut);t.bindTexture(o.TEXTURE_2D,Se.__webglTexture),ne(o.TEXTURE_2D,ut),Me($.__webglFramebuffer,P,ut,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),S(ut)&&y(o.TEXTURE_2D)}t.unbindTexture()}else{let we=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(we,pe.__webglTexture),ne(we,w),w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)Me($.__webglFramebuffer[Ue],P,w,o.COLOR_ATTACHMENT0,we,Ue);else Me($.__webglFramebuffer,P,w,o.COLOR_ATTACHMENT0,we,0);S(w)&&y(we),t.unbindTexture()}P.depthBuffer&&Ne(P)}function yt(P){const w=P.textures;for(let $=0,pe=w.length;$<pe;$++){const ge=w[$];if(S(ge)){const ue=D(P),Ve=i.get(ge).__webglTexture;t.bindTexture(ue,Ve),y(ue),t.unbindTexture()}}}const Ot=[],B=[];function wn(P){if(P.samples>0){if(dt(P)===!1){const w=P.textures,$=P.width,pe=P.height;let ge=o.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ve=i.get(P),we=w.length>1;if(we)for(let Ue=0;Ue<w.length;Ue++)t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ue=0;Ue<w.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ut=i.get(w[Ue]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ut,0)}o.blitFramebuffer(0,0,$,pe,0,0,$,pe,ge,o.NEAREST),d===!0&&(Ot.length=0,B.length=0,Ot.push(o.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ot.push(ue),B.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,B)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ue=0;Ue<w.length;Ue++){t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ut=i.get(w[Ue]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,ut,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const w=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function mt(P){return Math.min(s.maxSamples,P.samples)}function dt(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xe(P){const w=c.render.frame;m.get(P)!==w&&(m.set(P,w),P.update())}function Pt(P,w){const $=P.colorSpace,pe=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==On&&$!==Or&&(_t.getTransfer($)===Ut?(pe!==ui||ge!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(f.width=P.naturalWidth||P.width,f.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(f.width=P.displayWidth,f.height=P.displayHeight):(f.width=P.width,f.height=P.height),f}this.allocateTextureUnit=ee,this.resetTextureUnits=oe,this.setTexture2D=fe,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=z,this.rebindTextures=Ze,this.setupRenderTarget=It,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=dt}function Gw(o,e){function t(i,s=Or){let a;const c=_t.getTransfer(s);if(i===ar)return o.UNSIGNED_BYTE;if(i===qd)return o.UNSIGNED_SHORT_4_4_4_4;if(i===Yd)return o.UNSIGNED_SHORT_5_5_5_1;if(i===C_)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===R_)return o.BYTE;if(i===b_)return o.SHORT;if(i===Ea)return o.UNSIGNED_SHORT;if(i===Xd)return o.INT;if(i===ys)return o.UNSIGNED_INT;if(i===Ti)return o.FLOAT;if(i===Ra)return o.HALF_FLOAT;if(i===P_)return o.ALPHA;if(i===L_)return o.RGB;if(i===ui)return o.RGBA;if(i===D_)return o.LUMINANCE;if(i===I_)return o.LUMINANCE_ALPHA;if(i===po)return o.DEPTH_COMPONENT;if(i===Mo)return o.DEPTH_STENCIL;if(i===Kd)return o.RED;if(i===$d)return o.RED_INTEGER;if(i===N_)return o.RG;if(i===Zd)return o.RG_INTEGER;if(i===Qd)return o.RGBA_INTEGER;if(i===pc||i===mc||i===gc||i===_c)if(c===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===pc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===pc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cd||i===ud||i===hd||i===dd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===cd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ud)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fd||i===pd||i===md)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===fd||i===pd)return c===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===md)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gd||i===_d||i===vd||i===yd||i===xd||i===Sd||i===Md||i===Ed||i===Td||i===wd||i===Ad||i===Rd||i===bd||i===Cd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===gd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_d)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Md)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ed)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Td)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ad)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vc||i===Pd||i===Ld)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===vc)return c===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ld)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===U_||i===Dd||i===Id||i===Nd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===vc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Dd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Id)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const Ww={type:"move"};class Xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),y=this._getHandJoint(f,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],_=m.position.distanceTo(g.position),x=.02,M=.005;f.inputState.pinching&&_>x+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=x-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Ww)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Br;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const jw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new hn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gr({vertexShader:jw,fragmentShader:Xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new Rc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yw extends Ss{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",d=1,f=null,m=null,g=null,_=null,x=null,M=null;const E=new qw,S=t.getContextAttributes();let y=null,D=null;const L=[],R=[],k=new et;let N=null;const U=new gn;U.viewport=new bt;const q=new gn;q.viewport=new bt;const C=[U,q],b=new sS;let H=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=L[Z];return ce===void 0&&(ce=new Xh,L[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=L[Z];return ce===void 0&&(ce=new Xh,L[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=L[Z];return ce===void 0&&(ce=new Xh,L[Z]=ce),ce.getHandSpace()};function ee(Z){const ce=R.indexOf(Z.inputSource);if(ce===-1)return;const Me=L[ce];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,f||c),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function he(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",he),s.removeEventListener("inputsourceschange",fe);for(let Z=0;Z<L.length;Z++){const ce=R[Z];ce!==null&&(R[Z]=null,L[Z].disconnect(ce))}H=null,oe=null,E.reset(),e.setRenderTarget(y),x=null,_=null,g=null,s=null,D=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){u=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(Z){f=Z},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",he),s.addEventListener("inputsourceschange",fe),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(k),s.renderState.layers===void 0){const ce={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new xs(x.framebufferWidth,x.framebufferHeight,{format:ui,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ce=null,Me=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=S.stencil?Mo:po,Me=S.stencil?So:ys);const Te={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(Te),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new xs(_.textureWidth,_.textureHeight,{format:ui,type:ar,depthTexture:new Z_(_.textureWidth,_.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await s.requestReferenceSpace(u),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function fe(Z){for(let ce=0;ce<Z.removed.length;ce++){const Me=Z.removed[ce],ve=R.indexOf(Me);ve>=0&&(R[ve]=null,L[ve].disconnect(Me))}for(let ce=0;ce<Z.added.length;ce++){const Me=Z.added[ce];let ve=R.indexOf(Me);if(ve===-1){for(let Ne=0;Ne<L.length;Ne++)if(Ne>=R.length){R.push(Me),ve=Ne;break}else if(R[Ne]===null){R[Ne]=Me,ve=Ne;break}if(ve===-1)break}const Te=L[ve];Te&&Te.connect(Me)}}const se=new W,le=new W;function z(Z,ce,Me){se.setFromMatrixPosition(ce.matrixWorld),le.setFromMatrixPosition(Me.matrixWorld);const ve=se.distanceTo(le),Te=ce.projectionMatrix.elements,Ne=Me.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),It=Te[14]/(Te[10]+1),yt=(Te[9]+1)/Te[5],Ot=(Te[9]-1)/Te[5],B=(Te[8]-1)/Te[0],wn=(Ne[8]+1)/Ne[0],mt=Ze*B,dt=Ze*wn,Xe=ve/(-B+wn),Pt=Xe*-B;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pt),Z.translateZ(Xe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const We=Ze+Xe,P=It+Xe,w=mt-Pt,$=dt+(ve-Pt),pe=yt*It/P*We,ge=Ot*It/P*We;Z.projectionMatrix.makePerspective(w,$,pe,ge,We,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ce=Z.near,Me=Z.far;E.texture!==null&&(E.depthNear>0&&(ce=E.depthNear),E.depthFar>0&&(Me=E.depthFar)),b.near=q.near=U.near=ce,b.far=q.far=U.far=Me,(H!==b.near||oe!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),H=b.near,oe=b.far),U.layers.mask=Z.layers.mask|2,q.layers.mask=Z.layers.mask|4,b.layers.mask=U.layers.mask|q.layers.mask;const ve=Z.parent,Te=b.cameras;ae(b,ve);for(let Ne=0;Ne<Te.length;Ne++)ae(Te[Ne],ve);Te.length===2?z(b,U,q):b.projectionMatrix.copy(U.projectionMatrix),re(Z,b,ve)};function re(Z,ce,Me){Me===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Eo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(Z){d=Z,_!==null&&(_.fixedFoveation=Z),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Z)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(b)};let F=null;function ne(Z,ce){if(m=ce.getViewerPose(f||c),M=ce,m!==null){const Me=m.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let ve=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,ve=!0);for(let Ne=0;Ne<Me.length;Ne++){const Ze=Me[Ne];let It=null;if(x!==null)It=x.getViewport(Ze);else{const Ot=g.getViewSubImage(_,Ze);It=Ot.viewport,Ne===0&&(e.setRenderTargetTextures(D,Ot.colorTexture,_.ignoreDepthValues?void 0:Ot.depthStencilTexture),e.setRenderTarget(D))}let yt=C[Ne];yt===void 0&&(yt=new gn,yt.layers.enable(Ne),yt.viewport=new bt,C[Ne]=yt),yt.matrix.fromArray(Ze.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(Ze.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(It.x,It.y,It.width,It.height),Ne===0&&(b.matrix.copy(yt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ve===!0&&b.cameras.push(yt)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ne=g.getDepthInformation(Me[0]);Ne&&Ne.isValid&&Ne.texture&&E.init(e,Ne,s.renderState)}}for(let Me=0;Me<L.length;Me++){const ve=R[Me],Te=L[Me];ve!==null&&Te!==void 0&&Te.update(ve,ce,f||c)}F&&F(Z,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),M=null}const Ie=new i0;Ie.setAnimationLoop(ne),this.setAnimationLoop=function(Z){F=Z},this.dispose=function(){}}}const ds=new Ai,Kw=new lt;function $w(o,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,X_(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,D,L,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(S,y):y.isMeshToonMaterial?(a(S,y),g(S,y)):y.isMeshPhongMaterial?(a(S,y),m(S,y)):y.isMeshStandardMaterial?(a(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,R)):y.isMeshMatcapMaterial?(a(S,y),M(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),E(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?d(S,y,D,L):y.isSpriteMaterial?f(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Xn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Xn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),L=D.envMap,R=D.envMapRotation;L&&(S.envMap.value=L,ds.copy(R),ds.x*=-1,ds.y*=-1,ds.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),S.envMapRotation.value.setFromMatrix4(Kw.makeRotationFromEuler(ds)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,D,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=L*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Xn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Zw(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,L){const R=L.program;i.uniformBlockBinding(D,R)}function f(D,L){let R=s[D.id];R===void 0&&(M(D),R=m(D),s[D.id]=R,D.addEventListener("dispose",S));const k=L.program;i.updateUBOMapping(D,k);const N=e.render.frame;a[D.id]!==N&&(_(D),a[D.id]=N)}function m(D){const L=g();D.__bindingPointIndex=L;const R=o.createBuffer(),k=D.__size,N=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,k,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,R),R}function g(){for(let D=0;D<u;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const L=s[D.id],R=D.uniforms,k=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let N=0,U=R.length;N<U;N++){const q=Array.isArray(R[N])?R[N]:[R[N]];for(let C=0,b=q.length;C<b;C++){const H=q[C];if(x(H,N,C,k)===!0){const oe=H.__offset,ee=Array.isArray(H.value)?H.value:[H.value];let he=0;for(let fe=0;fe<ee.length;fe++){const se=ee[fe],le=E(se);typeof se=="number"||typeof se=="boolean"?(H.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,oe+he,H.__data)):se.isMatrix3?(H.__data[0]=se.elements[0],H.__data[1]=se.elements[1],H.__data[2]=se.elements[2],H.__data[3]=0,H.__data[4]=se.elements[3],H.__data[5]=se.elements[4],H.__data[6]=se.elements[5],H.__data[7]=0,H.__data[8]=se.elements[6],H.__data[9]=se.elements[7],H.__data[10]=se.elements[8],H.__data[11]=0):(se.toArray(H.__data,he),he+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,oe,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(D,L,R,k){const N=D.value,U=L+"_"+R;if(k[U]===void 0)return typeof N=="number"||typeof N=="boolean"?k[U]=N:k[U]=N.clone(),!0;{const q=k[U];if(typeof N=="number"||typeof N=="boolean"){if(q!==N)return k[U]=N,!0}else if(q.equals(N)===!1)return q.copy(N),!0}return!1}function M(D){const L=D.uniforms;let R=0;const k=16;for(let U=0,q=L.length;U<q;U++){const C=Array.isArray(L[U])?L[U]:[L[U]];for(let b=0,H=C.length;b<H;b++){const oe=C[b],ee=Array.isArray(oe.value)?oe.value:[oe.value];for(let he=0,fe=ee.length;he<fe;he++){const se=ee[he],le=E(se),z=R%k,ae=z%le.boundary,re=z+ae;R+=ae,re!==0&&k-re<le.storage&&(R+=k-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=R,R+=le.storage}}}const N=R%k;return N>0&&(R+=k-N),D.__size=R,D.__cache={},this}function E(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function S(D){const L=D.target;L.removeEventListener("dispose",S);const R=c.indexOf(L.__bindingPointIndex);c.splice(R,1),o.deleteBuffer(s[L.id]),delete s[L.id],delete a[L.id]}function y(){for(const D in s)o.deleteBuffer(s[D]);c=[],s={},a={}}return{bind:d,update:f,dispose:y}}class pf{constructor(e={}){const{canvas:t=rx(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,y=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=Vr,this.toneMappingExposure=1;const R=this;let k=!1,N=0,U=0,q=null,C=-1,b=null;const H=new bt,oe=new bt;let ee=null;const he=new Qe(0);let fe=0,se=t.width,le=t.height,z=1,ae=null,re=null;const F=new bt(0,0,se,le),ne=new bt(0,0,se,le);let Ie=!1;const Z=new sf;let ce=!1,Me=!1;const ve=new lt,Te=new lt,Ne=new W,Ze=new bt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Ot(){return q===null?z:1}let B=i;function wn(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wd}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),B===null){const X="webgl2";if(B=wn(X,A),B===null)throw wn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let mt,dt,Xe,Pt,We,P,w,$,pe,ge,ue,Ve,we,Ue,ut,Se,ke,Ye,Je,Be,ft,rt,Ct,j;function Ae(){mt=new aT(B),mt.init(),rt=new Gw(B,mt),dt=new tT(B,mt,e,rt),Xe=new Hw(B,mt),dt.reverseDepthBuffer&&_&&Xe.buffers.depth.setReversed(!0),Pt=new uT(B),We=new bw,P=new Vw(B,mt,Xe,We,dt,rt,Pt),w=new iT(R),$=new oT(R),pe=new _S(B),Ct=new JE(B,pe),ge=new lT(B,pe,Pt,Ct),ue=new dT(B,ge,pe,Pt),Je=new hT(B,dt,P),Se=new nT(We),Ve=new Rw(R,w,$,mt,dt,Ct,Se),we=new $w(R,We),Ue=new Pw,ut=new Fw(mt),Ye=new QE(R,w,$,Xe,ue,x,d),ke=new Bw(R,ue,dt),j=new Zw(B,Pt,dt,Xe),Be=new eT(B,mt,Pt),ft=new cT(B,mt,Pt),Pt.programs=Ve.programs,R.capabilities=dt,R.extensions=mt,R.properties=We,R.renderLists=Ue,R.shadowMap=ke,R.state=Xe,R.info=Pt}Ae();const ie=new Yw(R,B);this.xr=ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(se,le,!1))},this.getSize=function(A){return A.set(se,le)},this.setSize=function(A,X,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,le=X,t.width=Math.floor(A*z),t.height=Math.floor(X*z),J===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(se*z,le*z).floor()},this.setDrawingBufferSize=function(A,X,J){se=A,le=X,z=J,t.width=Math.floor(A*J),t.height=Math.floor(X*J),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,X,J,te){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,X,J,te),Xe.viewport(H.copy(F).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,X,J,te){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,X,J,te),Xe.scissor(oe.copy(ne).multiplyScalar(z).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(A){Xe.setScissorTest(Ie=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(A=!0,X=!0,J=!0){let te=0;if(A){let V=!1;if(q!==null){const xe=q.texture.format;V=xe===Qd||xe===Zd||xe===$d}if(V){const xe=q.texture.type,Re=xe===ar||xe===ys||xe===Ea||xe===So||xe===qd||xe===Yd,De=Ye.getClearColor(),Fe=Ye.getClearAlpha(),tt=De.r,nt=De.g,je=De.b;Re?(M[0]=tt,M[1]=nt,M[2]=je,M[3]=Fe,B.clearBufferuiv(B.COLOR,0,M)):(E[0]=tt,E[1]=nt,E[2]=je,E[3]=Fe,B.clearBufferiv(B.COLOR,0,E))}else te|=B.COLOR_BUFFER_BIT}X&&(te|=B.DEPTH_BUFFER_BIT),J&&(te|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ye.dispose(),Ue.dispose(),ut.dispose(),We.dispose(),w.dispose(),$.dispose(),ue.dispose(),Ct.dispose(),j.dispose(),Ve.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ms),ie.removeEventListener("sessionend",lr),zi.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=Pt.autoReset,X=ke.enabled,J=ke.autoUpdate,te=ke.needsUpdate,V=ke.type;Ae(),Pt.autoReset=A,ke.enabled=X,ke.autoUpdate=J,ke.needsUpdate=te,ke.type=V}function Ce(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const X=A.target;X.removeEventListener("dispose",st),Bt(X)}function Bt(A){en(A),We.remove(A)}function en(A){const X=We.get(A).programs;X!==void 0&&(X.forEach(function(J){Ve.releaseProgram(J)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,J,te,V,xe){X===null&&(X=It);const Re=V.isMesh&&V.matrixWorld.determinant()<0,De=Ia(A,X,J,te,V);Xe.setMaterial(te,Re);let Fe=J.index,tt=1;if(te.wireframe===!0){if(Fe=ge.getWireframeAttribute(J),Fe===void 0)return;tt=2}const nt=J.drawRange,je=J.attributes.position;let ot=nt.start*tt,wt=(nt.start+nt.count)*tt;xe!==null&&(ot=Math.max(ot,xe.start*tt),wt=Math.min(wt,(xe.start+xe.count)*tt)),Fe!==null?(ot=Math.max(ot,0),wt=Math.min(wt,Fe.count)):je!=null&&(ot=Math.max(ot,0),wt=Math.min(wt,je.count));const At=wt-ot;if(At<0||At===1/0)return;Ct.setup(V,te,De,J,Fe);let Vt,St=Be;if(Fe!==null&&(Vt=pe.get(Fe),St=ft,St.setIndex(Vt)),V.isMesh)te.wireframe===!0?(Xe.setLineWidth(te.wireframeLinewidth*Ot()),St.setMode(B.LINES)):St.setMode(B.TRIANGLES);else if(V.isLine){let qe=te.linewidth;qe===void 0&&(qe=1),Xe.setLineWidth(qe*Ot()),V.isLineSegments?St.setMode(B.LINES):V.isLineLoop?St.setMode(B.LINE_LOOP):St.setMode(B.LINE_STRIP)}else V.isPoints?St.setMode(B.POINTS):V.isSprite&&St.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)St.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))St.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const qe=V._multiDrawStarts,qt=V._multiDrawCounts,xt=V._multiDrawCount,dn=Fe?pe.get(Fe).bytesPerElement:1,di=We.get(te).currentProgram.getUniforms();for(let Rn=0;Rn<xt;Rn++)di.setValue(B,"_gl_DrawID",Rn),St.render(qe[Rn]/dn,qt[Rn])}else if(V.isInstancedMesh)St.renderInstances(ot,At,V.count);else if(J.isInstancedBufferGeometry){const qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,qt=Math.min(J.instanceCount,qe);St.renderInstances(ot,At,qt)}else St.render(ot,At)};function Et(A,X,J){A.transparent===!0&&A.side===Ii&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,Es(A,X,J),A.side=Ni,A.needsUpdate=!0,Es(A,X,J),A.side=Ii):Es(A,X,J)}this.compile=function(A,X,J=null){J===null&&(J=A),y=ut.get(J),y.init(X),L.push(y),J.traverseVisible(function(V){V.isLight&&V.layers.test(X.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),A!==J&&A.traverseVisible(function(V){V.isLight&&V.layers.test(X.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),y.setupLights();const te=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xe=V.material;if(xe)if(Array.isArray(xe))for(let Re=0;Re<xe.length;Re++){const De=xe[Re];Et(De,J,V),te.add(De)}else Et(xe,J,V),te.add(xe)}),L.pop(),y=null,te},this.compileAsync=function(A,X,J=null){const te=this.compile(A,X,J);return new Promise(V=>{function xe(){if(te.forEach(function(Re){We.get(Re).currentProgram.isReady()&&te.delete(Re)}),te.size===0){V(A);return}setTimeout(xe,10)}mt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let kn=null;function An(A){kn&&kn(A)}function Ms(){zi.stop()}function lr(){zi.start()}const zi=new i0;zi.setAnimationLoop(An),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(A){kn=A,ie.setAnimationLoop(A),A===null?zi.stop():zi.start()},ie.addEventListener("sessionstart",Ms),ie.addEventListener("sessionend",lr),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(X),X=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,q),y=ut.get(A,L.length),y.init(X),L.push(y),Te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,ce=Se.init(this.clippingPlanes,Me),S=Ue.get(A,D.length),S.init(),D.push(S),ie.enabled===!0&&ie.isPresenting===!0){const xe=R.xr.getDepthSensingMesh();xe!==null&&Hi(xe,X,-1/0,R.sortObjects)}Hi(A,X,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(ae,re),yt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,yt&&Ye.addToRenderList(S,A),this.info.render.frame++,ce===!0&&Se.beginShadows();const J=y.state.shadowsArray;ke.render(J,A,X),ce===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=S.opaque,V=S.transmissive;if(y.setupLights(),X.isArrayCamera){const xe=X.cameras;if(V.length>0)for(let Re=0,De=xe.length;Re<De;Re++){const Fe=xe[Re];Xr(te,V,A,Fe)}yt&&Ye.render(A);for(let Re=0,De=xe.length;Re<De;Re++){const Fe=xe[Re];jr(S,A,Fe,Fe.viewport)}}else V.length>0&&Xr(te,V,A,X),yt&&Ye.render(A),jr(S,A,X);q!==null&&(P.updateMultisampleRenderTarget(q),P.updateRenderTargetMipmap(q)),A.isScene===!0&&A.onAfterRender(R,A,X),Ct.resetDefaultState(),C=-1,b=null,L.pop(),L.length>0?(y=L[L.length-1],ce===!0&&Se.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function Hi(A,X,J,te){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){te&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Re=ue.update(A),De=A.material;De.visible&&S.push(A,Re,De,J,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Re=ue.update(A),De=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Fe=Re.groups;for(let tt=0,nt=Fe.length;tt<nt;tt++){const je=Fe[tt],ot=De[je.materialIndex];ot&&ot.visible&&S.push(A,Re,ot,J,Ze.z,je)}}else De.visible&&S.push(A,Re,De,J,Ze.z,null)}}const xe=A.children;for(let Re=0,De=xe.length;Re<De;Re++)Hi(xe[Re],X,J,te)}function jr(A,X,J,te){const V=A.opaque,xe=A.transmissive,Re=A.transparent;y.setupLightsView(J),ce===!0&&Se.setGlobalState(R.clippingPlanes,J),te&&Xe.viewport(H.copy(te)),V.length>0&&cr(V,X,J),xe.length>0&&cr(xe,X,J),Re.length>0&&cr(Re,X,J),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Xr(A,X,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[te.id]===void 0&&(y.state.transmissionRenderTarget[te.id]=new xs(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Ra:ar,minFilter:rr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const xe=y.state.transmissionRenderTarget[te.id],Re=te.viewport||H;xe.setSize(Re.z,Re.w);const De=R.getRenderTarget();R.setRenderTarget(xe),R.getClearColor(he),fe=R.getClearAlpha(),fe<1&&R.setClearColor(16777215,.5),R.clear(),yt&&Ye.render(J);const Fe=R.toneMapping;R.toneMapping=Vr;const tt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),y.setupLightsView(te),ce===!0&&Se.setGlobalState(R.clippingPlanes,te),cr(A,J,te),P.updateMultisampleRenderTarget(xe),P.updateRenderTargetMipmap(xe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let je=0,ot=X.length;je<ot;je++){const wt=X[je],At=wt.object,Vt=wt.geometry,St=wt.material,qe=wt.group;if(St.side===Ii&&At.layers.test(te.layers)){const qt=St.side;St.side=Xn,St.needsUpdate=!0,La(At,J,te,Vt,St,qe),St.side=qt,St.needsUpdate=!0,nt=!0}}nt===!0&&(P.updateMultisampleRenderTarget(xe),P.updateRenderTargetMipmap(xe))}R.setRenderTarget(De),R.setClearColor(he,fe),tt!==void 0&&(te.viewport=tt),R.toneMapping=Fe}function cr(A,X,J){const te=X.isScene===!0?X.overrideMaterial:null;for(let V=0,xe=A.length;V<xe;V++){const Re=A[V],De=Re.object,Fe=Re.geometry,tt=te===null?Re.material:te,nt=Re.group;De.layers.test(J.layers)&&La(De,X,J,Fe,tt,nt)}}function La(A,X,J,te,V,xe){A.onBeforeRender(R,X,J,te,V,xe),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(R,X,J,te,A,xe),V.transparent===!0&&V.side===Ii&&V.forceSinglePass===!1?(V.side=Xn,V.needsUpdate=!0,R.renderBufferDirect(J,X,te,V,A,xe),V.side=Ni,V.needsUpdate=!0,R.renderBufferDirect(J,X,te,V,A,xe),V.side=Ii):R.renderBufferDirect(J,X,te,V,A,xe),A.onAfterRender(R,X,J,te,V,xe)}function Es(A,X,J){X.isScene!==!0&&(X=It);const te=We.get(A),V=y.state.lights,xe=y.state.shadowsArray,Re=V.state.version,De=Ve.getParameters(A,V.state,xe,X,J),Fe=Ve.getProgramCacheKey(De);let tt=te.programs;te.environment=A.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(A.isMeshStandardMaterial?$:w).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",st),tt=new Map,te.programs=tt);let nt=tt.get(Fe);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Re)return Ri(A,De),nt}else De.uniforms=Ve.getUniforms(A),A.onBeforeCompile(De,R),nt=Ve.acquireProgram(De,Fe),tt.set(Fe,nt),te.uniforms=De.uniforms;const je=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Se.uniform),Ri(A,De),te.needsLights=Dc(A),te.lightsStateVersion=Re,te.needsLights&&(je.ambientLightColor.value=V.state.ambient,je.lightProbe.value=V.state.probe,je.directionalLights.value=V.state.directional,je.directionalLightShadows.value=V.state.directionalShadow,je.spotLights.value=V.state.spot,je.spotLightShadows.value=V.state.spotShadow,je.rectAreaLights.value=V.state.rectArea,je.ltc_1.value=V.state.rectAreaLTC1,je.ltc_2.value=V.state.rectAreaLTC2,je.pointLights.value=V.state.point,je.pointLightShadows.value=V.state.pointShadow,je.hemisphereLights.value=V.state.hemi,je.directionalShadowMap.value=V.state.directionalShadowMap,je.directionalShadowMatrix.value=V.state.directionalShadowMatrix,je.spotShadowMap.value=V.state.spotShadowMap,je.spotLightMatrix.value=V.state.spotLightMatrix,je.spotLightMap.value=V.state.spotLightMap,je.pointShadowMap.value=V.state.pointShadowMap,je.pointShadowMatrix.value=V.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function Da(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=xc.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Ri(A,X){const J=We.get(A);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Ia(A,X,J,te,V){X.isScene!==!0&&(X=It),P.resetTextureUnits();const xe=X.fog,Re=te.isMeshStandardMaterial?X.environment:null,De=q===null?R.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:On,Fe=(te.isMeshStandardMaterial?$:w).get(te.envMap||Re),tt=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,nt=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),je=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,wt=!!J.morphAttributes.color;let At=Vr;te.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(At=R.toneMapping);const Vt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,St=Vt!==void 0?Vt.length:0,qe=We.get(te),qt=y.state.lights;if(ce===!0&&(Me===!0||A!==b)){const $t=A===b&&te.id===C;Se.setState(te,A,$t)}let xt=!1;te.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==qt.state.version||qe.outputColorSpace!==De||V.isBatchedMesh&&qe.batching===!1||!V.isBatchedMesh&&qe.batching===!0||V.isBatchedMesh&&qe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&qe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&qe.instancing===!1||!V.isInstancedMesh&&qe.instancing===!0||V.isSkinnedMesh&&qe.skinning===!1||!V.isSkinnedMesh&&qe.skinning===!0||V.isInstancedMesh&&qe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&qe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&qe.instancingMorph===!1&&V.morphTexture!==null||qe.envMap!==Fe||te.fog===!0&&qe.fog!==xe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==nt||qe.morphTargets!==je||qe.morphNormals!==ot||qe.morphColors!==wt||qe.toneMapping!==At||qe.morphTargetsCount!==St)&&(xt=!0):(xt=!0,qe.__version=te.version);let dn=qe.currentProgram;xt===!0&&(dn=Es(te,X,V));let di=!1,Rn=!1,qr=!1;const Nt=dn.getUniforms(),bn=qe.uniforms;if(Xe.useProgram(dn.program)&&(di=!0,Rn=!0,qr=!0),te.id!==C&&(C=te.id,Rn=!0),di||b!==A){Xe.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),ox(ve),ax(ve),Nt.setValue(B,"projectionMatrix",ve)):Nt.setValue(B,"projectionMatrix",A.projectionMatrix),Nt.setValue(B,"viewMatrix",A.matrixWorldInverse);const vn=Nt.map.cameraPosition;vn!==void 0&&vn.setValue(B,Ne.setFromMatrixPosition(A.matrixWorld)),dt.logarithmicDepthBuffer&&Nt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Nt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Rn=!0,qr=!0)}if(V.isSkinnedMesh){Nt.setOptional(B,V,"bindMatrix"),Nt.setOptional(B,V,"bindMatrixInverse");const $t=V.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Nt.setValue(B,"boneTexture",$t.boneTexture,P))}V.isBatchedMesh&&(Nt.setOptional(B,V,"batchingTexture"),Nt.setValue(B,"batchingTexture",V._matricesTexture,P),Nt.setOptional(B,V,"batchingIdTexture"),Nt.setValue(B,"batchingIdTexture",V._indirectTexture,P),Nt.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&Nt.setValue(B,"batchingColorTexture",V._colorsTexture,P));const _n=J.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Je.update(V,J,dn),(Rn||qe.receiveShadow!==V.receiveShadow)&&(qe.receiveShadow=V.receiveShadow,Nt.setValue(B,"receiveShadow",V.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(bn.envMap.value=Fe,bn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&X.environment!==null&&(bn.envMapIntensity.value=X.environmentIntensity),Rn&&(Nt.setValue(B,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&Na(bn,qr),xe&&te.fog===!0&&we.refreshFogUniforms(bn,xe),we.refreshMaterialUniforms(bn,te,z,le,y.state.transmissionRenderTarget[A.id]),xc.upload(B,Da(qe),bn,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(xc.upload(B,Da(qe),bn,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Nt.setValue(B,"center",V.center),Nt.setValue(B,"modelViewMatrix",V.modelViewMatrix),Nt.setValue(B,"normalMatrix",V.normalMatrix),Nt.setValue(B,"modelMatrix",V.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const $t=te.uniformsGroups;for(let vn=0,Yr=$t.length;vn<Yr;vn++){const gt=$t[vn];j.update(gt,dn),j.bind(gt,dn)}}return dn}function Na(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Dc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,X,J){We.get(A.texture).__webglTexture=X,We.get(A.depthTexture).__webglTexture=J;const te=We.get(A);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const J=We.get(A);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,J=0){q=A,N=X,U=J;let te=!0,V=null,xe=!1,Re=!1;if(A){const Fe=We.get(A);if(Fe.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(B.FRAMEBUFFER,null),te=!1;else if(Fe.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Fe.__hasExternalTextures)P.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(Fe.__boundDepthTexture!==je){if(je!==null&&We.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Re=!0);const nt=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[X])?V=nt[X][J]:V=nt[X],xe=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?V=We.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?V=nt[J]:V=nt,H.copy(A.viewport),oe.copy(A.scissor),ee=A.scissorTest}else H.copy(F).multiplyScalar(z).floor(),oe.copy(ne).multiplyScalar(z).floor(),ee=Ie;if(Xe.bindFramebuffer(B.FRAMEBUFFER,V)&&te&&Xe.drawBuffers(A,V),Xe.viewport(H),Xe.scissor(oe),Xe.setScissorTest(ee),xe){const Fe=We.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Fe.__webglTexture,J)}else if(Re){const Fe=We.get(A.texture),tt=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.__webglTexture,J||0,tt)}C=-1},this.readRenderTargetPixels=function(A,X,J,te,V,xe,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){Xe.bindFramebuffer(B.FRAMEBUFFER,De);try{const Fe=A.texture,tt=Fe.format,nt=Fe.type;if(!dt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-te&&J>=0&&J<=A.height-V&&B.readPixels(X,J,te,V,rt.convert(tt),rt.convert(nt),xe)}finally{const Fe=q!==null?We.get(q).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,X,J,te,V,xe,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){const Fe=A.texture,tt=Fe.format,nt=Fe.type;if(!dt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-te&&J>=0&&J<=A.height-V){Xe.bindFramebuffer(B.FRAMEBUFFER,De);const je=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.bufferData(B.PIXEL_PACK_BUFFER,xe.byteLength,B.STREAM_READ),B.readPixels(X,J,te,V,rt.convert(tt),rt.convert(nt),0);const ot=q!==null?We.get(q).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,ot);const wt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await sx(B,wt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,xe),B.deleteBuffer(je),B.deleteSync(wt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,J=0){A.isTexture!==!0&&(ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const te=Math.pow(2,-J),V=Math.floor(A.image.width*te),xe=Math.floor(A.image.height*te),Re=X!==null?X.x:0,De=X!==null?X.y:0;P.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Re,De,V,xe),Xe.unbindTexture()};const Ua=B.createFramebuffer(),Fa=B.createFramebuffer();this.copyTextureToTexture=function(A,X,J=null,te=null,V=0,xe=null){A.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,A=arguments[1],X=arguments[2],xe=arguments[3]||0,J=null),xe===null&&(V!==0?(ao("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=V,V=0):xe=0);let Re,De,Fe,tt,nt,je,ot,wt,At;const Vt=A.isCompressedTexture?A.mipmaps[xe]:A.image;if(J!==null)Re=J.max.x-J.min.x,De=J.max.y-J.min.y,Fe=J.isBox3?J.max.z-J.min.z:1,tt=J.min.x,nt=J.min.y,je=J.isBox3?J.min.z:0;else{const _n=Math.pow(2,-V);Re=Math.floor(Vt.width*_n),De=Math.floor(Vt.height*_n),A.isDataArrayTexture?Fe=Vt.depth:A.isData3DTexture?Fe=Math.floor(Vt.depth*_n):Fe=1,tt=0,nt=0,je=0}te!==null?(ot=te.x,wt=te.y,At=te.z):(ot=0,wt=0,At=0);const St=rt.convert(X.format),qe=rt.convert(X.type);let qt;X.isData3DTexture?(P.setTexture3D(X,0),qt=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),qt=B.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),qt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const xt=B.getParameter(B.UNPACK_ROW_LENGTH),dn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),di=B.getParameter(B.UNPACK_SKIP_PIXELS),Rn=B.getParameter(B.UNPACK_SKIP_ROWS),qr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Vt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Vt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,nt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,je);const Nt=A.isDataArrayTexture||A.isData3DTexture,bn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const _n=We.get(A),$t=We.get(X),vn=We.get(_n.__renderTarget),Yr=We.get($t.__renderTarget);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,vn.__webglFramebuffer),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let gt=0;gt<Fe;gt++)Nt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(A).__webglTexture,V,je+gt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(X).__webglTexture,xe,At+gt)),B.blitFramebuffer(tt,nt,Re,De,ot,wt,Re,De,B.DEPTH_BUFFER_BIT,B.NEAREST);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||We.has(A)){const _n=We.get(A),$t=We.get(X);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,Ua),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Fa);for(let vn=0;vn<Fe;vn++)Nt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,_n.__webglTexture,V,je+vn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_n.__webglTexture,V),bn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$t.__webglTexture,xe,At+vn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,$t.__webglTexture,xe),V!==0?B.blitFramebuffer(tt,nt,Re,De,ot,wt,Re,De,B.COLOR_BUFFER_BIT,B.NEAREST):bn?B.copyTexSubImage3D(qt,xe,ot,wt,At+vn,tt,nt,Re,De):B.copyTexSubImage2D(qt,xe,ot,wt,tt,nt,Re,De);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else bn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(qt,xe,ot,wt,At,Re,De,Fe,St,qe,Vt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(qt,xe,ot,wt,At,Re,De,Fe,St,Vt.data):B.texSubImage3D(qt,xe,ot,wt,At,Re,De,Fe,St,qe,Vt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,xe,ot,wt,Re,De,St,qe,Vt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,xe,ot,wt,Vt.width,Vt.height,St,Vt.data):B.texSubImage2D(B.TEXTURE_2D,xe,ot,wt,Re,De,St,qe,Vt);B.pixelStorei(B.UNPACK_ROW_LENGTH,xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,di),B.pixelStorei(B.UNPACK_SKIP_ROWS,Rn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qr),xe===0&&X.generateMipmaps&&B.generateMipmap(qt),Xe.unbindTexture()},this.copyTextureToTexture3D=function(A,X,J=null,te=null,V=0){return A.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,te=arguments[1]||null,A=arguments[2],X=arguments[3],V=arguments[4]||0),ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,J,te,V)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Xe.unbindTexture()},this.resetState=function(){N=0,U=0,q=null,Xe.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}function d_(o,e){if(e===Ly)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Ud||e===F_){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let d=0;d<u.count;d++)c.push(d);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Ud)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class l0 extends Wr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new n1(t)}),this.register(function(t){return new i1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new s1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new Jw(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new g1(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const f=go.extractUrlBase(e);c=go.resolveURL(f,this.path)}else c=go.extractUrlBase(e);this.manager.itemStart(e);const u=function(f){s?s(f):console.error(f),a.manager.itemError(e),a.manager.itemEnd(e)},d=new bc(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(f){try{a.parse(f,c,function(m){t(m),a.manager.itemEnd(e)},u)}catch(m){u(m)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},u={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===c0){try{c[vt.KHR_BINARY_GLTF]=new _1(e)}catch(g){s&&s(g);return}a=JSON.parse(c[vt.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new P1(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const g=this.pluginCallbacks[m](f);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[g.name]=g,c[g.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const g=a.extensionsUsed[m],_=a.extensionsRequired||[];switch(g){case vt.KHR_MATERIALS_UNLIT:c[g]=new e1;break;case vt.KHR_DRACO_MESH_COMPRESSION:c[g]=new v1(a,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:c[g]=new y1;break;case vt.KHR_MESH_QUANTIZATION:c[g]=new x1;break;default:_.indexOf(g)>=0&&u[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}f.setExtensions(c),f.setPlugins(u),f.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function Qw(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Jw{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let f;const m=new Qe(16777215);d.color!==void 0&&m.setRGB(d.color[0],d.color[1],d.color[2],On);const g=d.range!==void 0?d.range:0;switch(d.type){case"directional":f=new Pc(m),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new nS(m),f.distance=g;break;case"spot":f=new eS(m),f.distance=g,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,f.angle=d.spot.outerConeAngle,f.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return f.position.set(0,0,0),f.decay=2,ir(f,d),d.intensity!==void 0&&(f.intensity=d.intensity),f.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(f),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(d){return i._getNodeRef(t.cache,u,d)})}}class e1{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return _s}extendParams(e,t,i){const s=[];e.color=new Qe(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],On),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,Kt))}return Promise.all(s)}}class t1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class n1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new et(u,u)}return Promise.all(a)}}class i1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class r1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class s1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],On)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,Kt)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class o1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class a1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(u[0],u[1],u[2],On),Promise.all(a)}}class l1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class c1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(u[0],u[1],u[2],On),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,Kt)),Promise.all(a)}}class u1{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class h1{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ki}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class d1{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class f1{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let d=i.textureLoader;if(u.uri){const f=i.options.manager.getHandler(u.uri);f!==null&&(d=f)}return this.detectSupport().then(function(f){if(f)return i.loadTextureImage(e,c.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class p1{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let d=i.textureLoader;if(u.uri){const f=i.options.manager.getHandler(u.uri);f!==null&&(d=f)}return this.detectSupport().then(function(f){if(f)return i.loadTextureImage(e,c.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class m1{constructor(e){this.name=vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const d=s.byteOffset||0,f=s.byteLength||0,m=s.count,g=s.byteStride,_=new Uint8Array(u,d,f);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,g,_,s.mode,s.filter).then(function(x){return x.buffer}):c.ready.then(function(){const x=new ArrayBuffer(m*g);return c.decodeGltfBuffer(new Uint8Array(x),m,g,_,s.mode,s.filter),x})})}else return null}}class g1{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const f of s.primitives)if(f.mode!==ci.TRIANGLES&&f.mode!==ci.TRIANGLE_STRIP&&f.mode!==ci.TRIANGLE_FAN&&f.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],d={};for(const f in c)u.push(this.parser.getDependency("accessor",c[f]).then(m=>(d[f]=m,d[f])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(f=>{const m=f.pop(),g=m.isGroup?m.children:[m],_=f[0].count,x=[];for(const M of g){const E=new lt,S=new W,y=new Ui,D=new W(1,1,1),L=new Ux(M.geometry,M.material,_);for(let R=0;R<_;R++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,R),d.ROTATION&&y.fromBufferAttribute(d.ROTATION,R),d.SCALE&&D.fromBufferAttribute(d.SCALE,R),L.setMatrixAt(R,E.compose(S,y,D));for(const R in d)if(R==="_COLOR_0"){const k=d[R];L.instanceColor=new Od(k.array,k.itemSize,k.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&M.geometry.setAttribute(R,d[R]);Xt.prototype.copy.call(L,M),this.parser.assignFinalMaterial(L),x.push(L)}return m.isGroup?(m.clear(),m.add(...x),m):x[0]}))}}const c0="glTF",_a=12,f_={JSON:1313821514,BIN:5130562};class _1{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_a),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==c0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-_a,a=new DataView(e,_a);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const d=a.getUint32(c,!0);if(c+=4,d===f_.JSON){const f=new Uint8Array(e,_a+c,u);this.content=i.decode(f)}else if(d===f_.BIN){const f=_a+c;this.body=e.slice(f,f+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class v1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},d={},f={};for(const m in c){const g=Hd[m]||m.toLowerCase();u[g]=c[m]}for(const m in e.attributes){const g=Hd[m]||m.toLowerCase();if(c[m]!==void 0){const _=i.accessors[e.attributes[m]],x=_o[_.componentType];f[g]=x.name,d[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(g,_){s.decodeDracoFile(m,function(x){for(const M in x.attributes){const E=x.attributes[M],S=d[M];S!==void 0&&(E.normalized=S)}g(x)},u,f,On,_)})})}}class y1{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class x1{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class u0 extends Pa{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=u*2,f=u*3,m=s-t,g=(i-t)/m,_=g*g,x=_*g,M=e*f,E=M-f,S=-2*x+3*_,y=x-_,D=1-S,L=y-_+g;for(let R=0;R!==u;R++){const k=c[E+R+u],N=c[E+R+d]*m,U=c[M+R+u],q=c[M+R]*m;a[R]=D*k+L*N+S*U+y*q}return a}}const S1=new Ui;class M1 extends u0{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return S1.fromArray(a).normalize().toArray(a),a}}const ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_o={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},p_={9728:Un,9729:Jn,9984:A_,9985:fc,9986:va,9987:rr},m_={33071:kr,33648:Sc,10497:vs},qh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},E1={CUBICSPLINE:void 0,LINEAR:wa,STEP:Ta},Yh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function T1(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new af({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),o.DefaultMaterial}function fs(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ir(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function w1(o,e,t){let i=!1,s=!1,a=!1;for(let f=0,m=e.length;f<m;f++){const g=e[f];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],u=[],d=[];for(let f=0,m=e.length;f<m;f++){const g=e[f];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;c.push(_)}if(s){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;u.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;d.push(_)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d)]).then(function(f){const m=f[0],g=f[1],_=f[2];return i&&(o.morphAttributes.position=m),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function A1(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function R1(o){let e;const t=o.extensions&&o.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Kh(t.attributes):e=o.indices+":"+Kh(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+Kh(o.targets[i]);return e}function Kh(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function Vd(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function b1(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const C1=new lt;class P1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const d=u.match(/Version\/(\d+)/);s=i&&d?parseInt(d[1],10):-1,a=u.indexOf("Firefox")>-1,c=a?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new n0(this.options.manager):this.textureLoader=new rS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return fs(a,u,s),ir(u,s),Promise.all(i._invokeAll(function(d){return d.afterRoot&&d.afterRoot(u)})).then(function(){for(const d of u.scenes)d.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,d=c.length;u<d;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,u)=>{const d=this.associations.get(c);d!=null&&this.associations.set(u,d);for(const[f,m]of c.children.entries())a(m,u.children[f])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(go.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=qh[s.type],u=_o[s.componentType],d=s.normalized===!0,f=new u(s.count*c);return Promise.resolve(new Fn(f,c,d))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],d=qh[s.type],f=_o[s.componentType],m=f.BYTES_PER_ELEMENT,g=m*d,_=s.byteOffset||0,x=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(x&&x!==g){const y=Math.floor(_/x),D="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+y+":"+s.count;let L=t.cache.get(D);L||(E=new f(u,y*x,s.count*x/m),L=new Px(E,x/m),t.cache.add(D,L)),S=new nf(L,d,_%x/m,M)}else u===null?E=new f(s.count*d):E=new f(u,_,s.count*d),S=new Fn(E,d,M);if(s.sparse!==void 0){const y=qh.SCALAR,D=_o[s.sparse.indices.componentType],L=s.sparse.indices.byteOffset||0,R=s.sparse.values.byteOffset||0,k=new D(c[1],L,s.sparse.count*y),N=new f(c[2],R,s.sparse.count*d);u!==null&&(S=new Fn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let U=0,q=k.length;U<q;U++){const C=k[U];if(S.setX(C,N[U*d]),d>=2&&S.setY(C,N[U*d+1]),d>=3&&S.setZ(C,N[U*d+2]),d>=4&&S.setW(C,N[U*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const d=i.manager.getHandler(c.uri);d!==null&&(u=d)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],u=a.images[t],d=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[d])return this.textureCache[d];const f=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=c.name||u.name||"",m.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(m.name=u.uri);const _=(a.samplers||{})[c.sampler]||{};return m.magFilter=p_[_.magFilter]||Jn,m.minFilter=p_[_.minFilter]||rr,m.wrapS=m_[_.wrapS]||vs,m.wrapT=m_[_.wrapT]||vs,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==Un&&m.minFilter!==Jn,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[d]=f,f}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=s.images[e],u=self.URL||self.webkitURL;let d=c.uri||"",f=!1;if(c.bufferView!==void 0)d=i.getDependency("bufferView",c.bufferView).then(function(g){f=!0;const _=new Blob([g],{type:c.mimeType});return d=u.createObjectURL(_),d});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(d).then(function(g){return new Promise(function(_,x){let M=_;t.isImageBitmapLoader===!0&&(M=function(E){const S=new hn(E);S.needsUpdate=!0,_(S)}),t.load(go.resolveURL(g,a.path),M,void 0,x)})}).then(function(g){return f===!0&&u.revokeObjectURL(d),ir(g,c),g.userData.mimeType=c.mimeType||b1(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),g});return this.sourceCache[e]=m,m}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[vt.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const d=a.associations.get(c);c=a.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,d)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let d=this.cache.get(u);d||(d=new co,ei.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,d.sizeAttenuation=!1,this.cache.add(u,d)),i=d}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let d=this.cache.get(u);d||(d=new Ma,ei.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,this.cache.add(u,d)),i=d}if(s||a||c){let u="ClonedMaterial:"+i.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let d=this.cache.get(u);d||(d=i.clone(),a&&(d.vertexColors=!0),c&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(u,d),this.associations.set(d,this.associations.get(i))),i=d}e.material=i}getMaterialType(){return af}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const u={},d=a.extensions||{},f=[];if(d[vt.KHR_MATERIALS_UNLIT]){const g=s[vt.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),f.push(g.extendParams(u,a,t))}else{const g=a.pbrMetallicRoughness||{};if(u.color=new Qe(1,1,1),u.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;u.color.setRGB(_[0],_[1],_[2],On),u.opacity=_[3]}g.baseColorTexture!==void 0&&f.push(t.assignTexture(u,"map",g.baseColorTexture,Kt)),u.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,u.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(u,"metalnessMap",g.metallicRoughnessTexture)),f.push(t.assignTexture(u,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),f.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=Ii);const m=a.alphaMode||Yh.OPAQUE;if(m===Yh.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,m===Yh.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==_s&&(f.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new et(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;u.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&c!==_s&&(f.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==_s){const g=a.emissiveFactor;u.emissive=new Qe().setRGB(g[0],g[1],g[2],On)}return a.emissiveTexture!==void 0&&c!==_s&&f.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,Kt)),Promise.all(f).then(function(){const g=new c(u);return a.name&&(g.name=a.name),ir(g,a),t.associations.set(g,{materials:e}),a.extensions&&fs(s,g,a),g})}createUniqueName(e){const t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(u){return i[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(d){return g_(d,u,t)})}const c=[];for(let u=0,d=e.length;u<d;u++){const f=e[u],m=R1(f),g=s[m];if(g)c.push(g.promise);else{let _;f.extensions&&f.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?_=a(f):_=g_(new hi,f,t),s[m]={primitive:f,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d].material===void 0?T1(this.cache):this.getDependency("material",c[d].material);u.push(m)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(d){const f=d.slice(0,d.length-1),m=d[d.length-1],g=[];for(let x=0,M=m.length;x<M;x++){const E=m[x],S=c[x];let y;const D=f[x];if(S.mode===ci.TRIANGLES||S.mode===ci.TRIANGLE_STRIP||S.mode===ci.TRIANGLE_FAN||S.mode===void 0)y=a.isSkinnedMesh===!0?new Dx(E,D):new Nn(E,D),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===ci.TRIANGLE_STRIP?y.geometry=d_(y.geometry,F_):S.mode===ci.TRIANGLE_FAN&&(y.geometry=d_(y.geometry,Ud));else if(S.mode===ci.LINES)y=new kd(E,D);else if(S.mode===ci.LINE_STRIP)y=new of(E,D);else if(S.mode===ci.LINE_LOOP)y=new kx(E,D);else if(S.mode===ci.POINTS)y=new yc(E,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&A1(y,a),y.name=t.createUniqueName(a.name||"mesh_"+e),ir(y,a),S.extensions&&fs(s,y,S),t.assignFinalMaterial(y),g.push(y)}for(let x=0,M=g.length;x<M;x++)t.associations.set(g[x],{meshes:e,primitives:x});if(g.length===1)return a.extensions&&fs(s,g[0],a),g[0];const _=new Br;a.extensions&&fs(s,_,a),t.associations.set(_,{meshes:e});for(let x=0,M=g.length;x<M;x++)_.add(g[x]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new gn(k_.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new cf(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ir(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,u=[],d=[];for(let f=0,m=c.length;f<m;f++){const g=c[f];if(g){u.push(g);const _=new lt;a!==null&&_.fromArray(a.array,f*16),d.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[f])}return new rf(u,d)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],d=[],f=[],m=[];for(let g=0,_=s.channels.length;g<_;g++){const x=s.channels[g],M=s.samplers[x.sampler],E=x.target,S=E.node,y=s.parameters!==void 0?s.parameters[M.input]:M.input,D=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",y)),d.push(this.getDependency("accessor",D)),f.push(M),m.push(E))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d),Promise.all(f),Promise.all(m)]).then(function(g){const _=g[0],x=g[1],M=g[2],E=g[3],S=g[4],y=[];for(let D=0,L=_.length;D<L;D++){const R=_[D],k=x[D],N=M[D],U=E[D],q=S[D];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const C=i._createAnimationTracks(R,k,N,U,q);if(C)for(let b=0;b<C.length;b++)y.push(C[b])}return new qx(a,void 0,y)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let d=0,f=s.weights.length;d<f;d++)u.morphTargetInfluences[d]=s.weights[d]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=s.children||[];for(let f=0,m=u.length;f<m;f++)c.push(i.getDependency("node",u[f]));const d=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),d]).then(function(f){const m=f[0],g=f[1],_=f[2];_!==null&&m.traverse(function(x){x.isSkinnedMesh&&x.bind(_,C1)});for(let x=0,M=g.length;x<M;x++)m.add(g[x]);return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],d=s._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});return d&&u.push(d),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(f){return s._getNodeRef(s.cameraCache,a.camera,f)})),s._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){u.push(f)}),this.nodeCache[e]=Promise.all(u).then(function(f){let m;if(a.isBone===!0?m=new K_:f.length>1?m=new Br:f.length===1?m=f[0]:m=new Xt,m!==f[0])for(let g=0,_=f.length;g<_;g++)m.add(f[g]);if(a.name&&(m.userData.name=a.name,m.name=c),ir(m,a),a.extensions&&fs(i,m,a),a.matrix!==void 0){const g=new lt;g.fromArray(a.matrix),m.applyMatrix4(g)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);return s.associations.has(m)||s.associations.set(m,{}),s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new Br;i.name&&(a.name=s.createUniqueName(i.name)),ir(a,i),i.extensions&&fs(t,a,i);const c=i.nodes||[],u=[];for(let d=0,f=c.length;d<f;d++)u.push(s.getDependency("node",c[d]));return Promise.all(u).then(function(d){for(let m=0,g=d.length;m<g;m++)a.add(d[m]);const f=m=>{const g=new Map;for(const[_,x]of s.associations)(_ instanceof ei||_ instanceof hn)&&g.set(_,x);return m.traverse(_=>{const x=s.associations.get(_);x!=null&&g.set(_,x)}),g};return s.associations=f(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],u=e.name?e.name:e.uuid,d=[];Ur[a.path]===Ur.weights?e.traverse(function(_){_.morphTargetInfluences&&d.push(_.name?_.name:_.uuid)}):d.push(u);let f;switch(Ur[a.path]){case Ur.weights:f=wo;break;case Ur.rotation:f=Ao;break;case Ur.position:case Ur.scale:f=Ro;break;default:switch(i.itemSize){case 1:f=wo;break;case 2:case 3:default:f=Ro;break}break}const m=s.interpolation!==void 0?E1[s.interpolation]:wa,g=this._getArrayFromAccessor(i);for(let _=0,x=d.length;_<x;_++){const M=new f(d[_]+"."+Ur[a.path],t.array,g,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Vd(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Ao?M1:u0;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function L1(o,e,t){const i=e.attributes,s=new Fi;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],d=u.min,f=u.max;if(d!==void 0&&f!==void 0){if(s.set(new W(d[0],d[1],d[2]),new W(f[0],f[1],f[2])),u.normalized){const m=Vd(_o[u.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new W,d=new W;for(let f=0,m=a.length;f<m;f++){const g=a[f];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],x=_.min,M=_.max;if(x!==void 0&&M!==void 0){if(d.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),d.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),d.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),_.normalized){const E=Vd(_o[_.componentType]);d.multiplyScalar(E)}u.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new Oi;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function g_(o,e,t){const i=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(d){o.setAttribute(u,d)})}for(const c in i){const u=Hd[c]||c.toLowerCase();u in o.attributes||s.push(a(i[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return _t.workingColorSpace!==On&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),ir(o,e),L1(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?w1(o,e.targets,t):o})}const __={type:"change"},mf={type:"start"},h0={type:"end"},hc=new ba,v_=new Fr,D1=Math.cos(70*k_.DEG2RAD),rn=new W,jn=2*Math.PI,Ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$h=1e-6;class gf extends mS{constructor(e,t=null){super(e,t),this.state=Ft.NONE,this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ho.ROTATE,MIDDLE:ho.DOLLY,RIGHT:ho.PAN},this.touches={ONE:lo.ROTATE,TWO:lo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Ui,this._lastTargetPosition=new W,this._quat=new Ui().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zg,this._sphericalDelta=new zg,this._scale=1,this._panOffset=new W,this._rotateStart=new et,this._rotateEnd=new et,this._rotateDelta=new et,this._panStart=new et,this._panEnd=new et,this._panDelta=new et,this._dollyStart=new et,this._dollyEnd=new et,this._dollyDelta=new et,this._dollyDirection=new W,this._mouse=new et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=N1.bind(this),this._onPointerDown=I1.bind(this),this._onPointerUp=U1.bind(this),this._onContextMenu=V1.bind(this),this._onMouseWheel=k1.bind(this),this._onKeyDown=B1.bind(this),this._onTouchStart=z1.bind(this),this._onTouchMove=H1.bind(this),this._onMouseDown=F1.bind(this),this._onMouseMove=O1.bind(this),this._interceptControlDown=G1.bind(this),this._interceptControlUp=W1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(__),this.update(),this.state=Ft.NONE}update(e=null){const t=this.object.position;rn.copy(t).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===Ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=jn:i>Math.PI&&(i-=jn),s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),t.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=rn.length();c=this._clampDistance(u*this._scale);const d=u-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const u=new W(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const f=new W(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(u),this.object.updateMatrixWorld(),c=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(hc.origin.copy(this.object.position),hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hc.direction))<D1?this.object.lookAt(this.target):(v_.setFromNormalAndCoplanarPoint(this.object.up,this.target),hc.intersectPlane(v_,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>$h||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$h||this._lastTargetPosition.distanceToSquared(this.target)>$h?(this.dispatchEvent(__),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jn/60*this.autoRotateSpeed*e:jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){rn.setFromMatrixColumn(t,0),rn.multiplyScalar(-e),this._panOffset.add(rn)}_panUp(e,t){this.screenSpacePanning===!0?rn.setFromMatrixColumn(t,1):(rn.setFromMatrixColumn(t,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(e),this._panOffset.add(rn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;rn.copy(s).sub(this.target);let a=rn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,a=t-i.top,c=i.width,u=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(jn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new et,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function I1(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function N1(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function U1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(h0),this.state=Ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function F1(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ho.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ft.DOLLY;break;case ho.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ft.ROTATE}break;case ho.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ft.PAN}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(mf)}function O1(o){switch(this.state){case Ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function k1(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ft.NONE||(o.preventDefault(),this.dispatchEvent(mf),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(h0))}function B1(o){this.enabled!==!1&&this._handleKeyDown(o)}function z1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case lo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ft.TOUCH_ROTATE;break;case lo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ft.TOUCH_PAN;break;default:this.state=Ft.NONE}break;case 2:switch(this.touches.TWO){case lo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ft.TOUCH_DOLLY_PAN;break;case lo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ft.TOUCH_DOLLY_ROTATE;break;default:this.state=Ft.NONE}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(mf)}function H1(o){switch(this._trackPointer(o),this.state){case Ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ft.NONE}}function V1(o){this.enabled!==!1&&o.preventDefault()}function G1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function W1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const j1=({gltfUrl:o,width:e=1200,height:t=600})=>{const i=mn.useRef(null);return mn.useEffect(()=>{const s=new tf,a=new gn(75,e/t,.1,1e3);a.position.set(0,1,5);const c=new pf({antialias:!0});c.setSize(e,t),i.current.appendChild(c.domElement);const u=new gf(a,c.domElement);u.enableDamping=!0,u.dampingFactor=.05;const d=new uf(16777215,.6);s.add(d);const f=new Pc(16777215,.8);f.position.set(10,10,10),s.add(f),new l0().load(o,_=>{const x=_.scene;console.log(x),s.add(x)},void 0,_=>{console.error("Error loading the GLTF file:",_)});const g=()=>{requestAnimationFrame(g),u.update(),c.render(s,a)};return g(),()=>{c.dispose(),i.current.removeChild(c.domElement)}},[o,e,t]),Mt.jsx("div",{ref:i,style:{width:e,height:t}})},X1=({gltfUrl:o,width:e=1200,height:t=600})=>{const i=mn.useRef(null);return mn.useEffect(()=>{const s=new tf,a=new gn(75,e/t,.1,1e3);a.position.set(0,1,2);const c=new pf({alpha:!0,antialias:!0});c.setSize(e,t),c.setClearColor(0,0),i.current.appendChild(c.domElement);const u=new gf(a,c.domElement);u.enableDamping=!0,u.dampingFactor=.05;const d=new uf(16777215,1);s.add(d);const f=new Pc(16777215,1);f.position.set(10,10,10),s.add(f),new l0().load(o,_=>{const x=_.scene;s.add(x);const M=new Fi().setFromObject(x),E=M.getSize(new W),S=M.getCenter(new W);x.position.x-=S.x,x.position.y-=S.y,x.position.z-=S.z;const y=Math.max(E.x,E.y,E.z),D=a.fov*(Math.PI/180),L=Math.abs(y/(2*Math.tan(D/2)));a.position.set(0,0,L*1.5),a.lookAt(0,0,0),u.target.set(0,0,0),u.update()},void 0,_=>{console.error("Error loading the GLTF file:",_)});const g=()=>{requestAnimationFrame(g),u.update(),c.render(s,a)};return g(),()=>{c.dispose(),i.current.removeChild(c.domElement)}},[o,e,t]),Mt.jsx("div",{ref:i,style:{width:e,height:t,backgroundColor:"white"}})},q1=()=>Mt.jsxs(mn.Fragment,{children:[Mt.jsxs("div",{className:"hero-container",children:[Mt.jsx("h1",{className:"animate__animated animate__backInDown hero-title",children:"Dentinho"}),Mt.jsx("div",{className:"viewer-wrapper",children:Mt.jsx(X1,{gltfUrl:"/models/hero/boca.glb"})})]}),Mt.jsx("div",{className:"gltf-container",children:Mt.jsx(j1,{gltfUrl:"/models/root/raiz.glb"})})]}),Y1=/^[og]\s*(.+)?/,K1=/^mtllib /,$1=/^usemtl /,Z1=/^usemap /,y_=/\s+/,x_=new W,Zh=new W,S_=new W,M_=new W,li=new W,dc=new Qe;function Q1(){const o={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,a){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const u={index:this.materials.length,name:s||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(d){const f={index:typeof d=="number"?d:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return f.clone=this.clone.bind(f),f}};return this.materials.push(u),u},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),s&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,a=this.object.geometry.vertices;a.push(s[e+0],s[e+1],s[e+2]),a.push(s[t+0],s[t+1],s[t+2]),a.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,a=this.object.geometry.normals;a.push(s[e+0],s[e+1],s[e+2]),a.push(s[t+0],s[t+1],s[t+2]),a.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,a=this.object.geometry.normals;x_.fromArray(s,e),Zh.fromArray(s,t),S_.fromArray(s,i),li.subVectors(S_,Zh),M_.subVectors(x_,Zh),li.cross(M_),li.normalize(),a.push(li.x,li.y,li.z),a.push(li.x,li.y,li.z),a.push(li.x,li.y,li.z)},addColor:function(e,t,i){const s=this.colors,a=this.object.geometry.colors;s[e]!==void 0&&a.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&a.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&a.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,a=this.object.geometry.uvs;a.push(s[e+0],s[e+1]),a.push(s[t+0],s[t+1]),a.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,a,c,u,d,f){const m=this.vertices.length;let g=this.parseVertexIndex(e,m),_=this.parseVertexIndex(t,m),x=this.parseVertexIndex(i,m);if(this.addVertex(g,_,x),this.addColor(g,_,x),u!==void 0&&u!==""){const M=this.normals.length;g=this.parseNormalIndex(u,M),_=this.parseNormalIndex(d,M),x=this.parseNormalIndex(f,M),this.addNormal(g,_,x)}else this.addFaceNormal(g,_,x);if(s!==void 0&&s!==""){const M=this.uvs.length;g=this.parseUVIndex(s,M),_=this.parseUVIndex(a,M),x=this.parseUVIndex(c,M),this.addUV(g,_,x),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const a=this.parseVertexIndex(e[i],t);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let a=0,c=e.length;a<c;a++)this.addVertexLine(this.parseVertexIndex(e[a],i));for(let a=0,c=t.length;a<c;a++)this.addUVLine(this.parseUVIndex(t[a],s))}};return o.startObject("",!1),o}class J1 extends Wr{constructor(e){super(e),this.materials=null}load(e,t,i,s){const a=this,c=new bc(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{t(a.parse(u))}catch(d){s?s(d):console.error(d),a.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Q1;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let u=0,d=i.length;u<d;u++){const f=i[u].trimStart();if(f.length===0)continue;const m=f.charAt(0);if(m!=="#")if(m==="v"){const g=f.split(y_);switch(g[0]){case"v":t.vertices.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3])),g.length>=7?(dc.setRGB(parseFloat(g[4]),parseFloat(g[5]),parseFloat(g[6]),Kt),t.colors.push(dc.r,dc.g,dc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));break;case"vt":t.uvs.push(parseFloat(g[1]),parseFloat(g[2]));break}}else if(m==="f"){const _=f.slice(1).trim().split(y_),x=[];for(let E=0,S=_.length;E<S;E++){const y=_[E];if(y.length>0){const D=y.split("/");x.push(D)}}const M=x[0];for(let E=1,S=x.length-1;E<S;E++){const y=x[E],D=x[E+1];t.addFace(M[0],y[0],D[0],M[1],y[1],D[1],M[2],y[2],D[2])}}else if(m==="l"){const g=f.substring(1).trim().split(" ");let _=[];const x=[];if(f.indexOf("/")===-1)_=g;else for(let M=0,E=g.length;M<E;M++){const S=g[M].split("/");S[0]!==""&&_.push(S[0]),S[1]!==""&&x.push(S[1])}t.addLineGeometry(_,x)}else if(m==="p"){const _=f.slice(1).trim().split(" ");t.addPointGeometry(_)}else if((s=Y1.exec(f))!==null){const g=(" "+s[0].slice(1).trim()).slice(1);t.startObject(g)}else if($1.test(f))t.object.startMaterial(f.substring(7).trim(),t.materialLibraries);else if(K1.test(f))t.materialLibraries.push(f.substring(7).trim());else if(Z1.test(f))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(m==="s"){if(s=f.split(" "),s.length>1){const _=s[1].trim().toLowerCase();t.object.smooth=_!=="0"&&_!=="off"}else t.object.smooth=!0;const g=t.object.currentMaterial();g&&(g.smooth=t.object.smooth)}else{if(f==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+f+'"')}}t.finalize();const a=new Br;if(a.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let u=0,d=t.objects.length;u<d;u++){const f=t.objects[u],m=f.geometry,g=f.materials,_=m.type==="Line",x=m.type==="Points";let M=!1;if(m.vertices.length===0)continue;const E=new hi;E.setAttribute("position",new In(m.vertices,3)),m.normals.length>0&&E.setAttribute("normal",new In(m.normals,3)),m.colors.length>0&&(M=!0,E.setAttribute("color",new In(m.colors,3))),m.hasUVIndices===!0&&E.setAttribute("uv",new In(m.uvs,2));const S=[];for(let D=0,L=g.length;D<L;D++){const R=g[D],k=R.name+"_"+R.smooth+"_"+M;let N=t.materials[k];if(this.materials!==null){if(N=this.materials.create(R.name),_&&N&&!(N instanceof Ma)){const U=new Ma;ei.prototype.copy.call(U,N),U.color.copy(N.color),N=U}else if(x&&N&&!(N instanceof co)){const U=new co({size:10,sizeAttenuation:!1});ei.prototype.copy.call(U,N),U.color.copy(N.color),U.map=N.map,N=U}}N===void 0&&(_?N=new Ma:x?N=new co({size:1,sizeAttenuation:!1}):N=new Q_,N.name=R.name,N.flatShading=!R.smooth,N.vertexColors=M,t.materials[k]=N),S.push(N)}let y;if(S.length>1){for(let D=0,L=g.length;D<L;D++){const R=g[D];E.addGroup(R.groupStart,R.groupCount,D)}_?y=new kd(E,S):x?y=new yc(E,S):y=new Nn(E,S)}else _?y=new kd(E,S[0]):x?y=new yc(E,S[0]):y=new Nn(E,S[0]);y.name=f.name,a.add(y)}else if(t.vertices.length>0){const u=new co({size:1,sizeAttenuation:!1}),d=new hi;d.setAttribute("position",new In(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(d.setAttribute("color",new In(t.colors,3)),u.vertexColors=!0);const f=new yc(d,u);a.add(f)}return a}}class eA extends Wr{constructor(e){super(e)}load(e,t,i,s){const a=this,c=this.path===""?go.extractUrlBase(e):this.path,u=new bc(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(d){try{t(a.parse(d,c))}catch(f){s?s(f):console.error(f),a.manager.itemError(e)}},i,s)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const i=e.split(`
`);let s={};const a=/\s+/,c={};for(let d=0;d<i.length;d++){let f=i[d];if(f=f.trim(),f.length===0||f.charAt(0)==="#")continue;const m=f.indexOf(" ");let g=m>=0?f.substring(0,m):f;g=g.toLowerCase();let _=m>=0?f.substring(m+1):"";if(_=_.trim(),g==="newmtl")s={name:_},c[_]=s;else if(g==="ka"||g==="kd"||g==="ks"||g==="ke"){const x=_.split(a,3);s[g]=[parseFloat(x[0]),parseFloat(x[1]),parseFloat(x[2])]}else s[g]=_}const u=new tA(this.resourcePath||t,this.materialOptions);return u.setCrossOrigin(this.crossOrigin),u.setManager(this.manager),u.setMaterials(c),u}}class tA{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Ni,this.wrap=this.options.wrap!==void 0?this.options.wrap:vs}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const i in e){const s=e[i],a={};t[i]=a;for(const c in s){let u=!0,d=s[c];const f=c.toLowerCase();switch(f){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(d=[d[0]/255,d[1]/255,d[2]/255]),this.options&&this.options.ignoreZeroRGBs&&d[0]===0&&d[1]===0&&d[2]===0&&(u=!1);break}u&&(a[f]=d)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,i=this.materialsInfo[e],s={name:e,side:this.side};function a(u,d){return typeof d!="string"||d===""?"":/^https?:\/\//i.test(d)?d:u+d}function c(u,d){if(s[u])return;const f=t.getTextureParams(d,s),m=t.loadTexture(a(t.baseUrl,f.url));m.repeat.copy(f.scale),m.offset.copy(f.offset),m.wrapS=t.wrap,m.wrapT=t.wrap,(u==="map"||u==="emissiveMap")&&(m.colorSpace=Kt),s[u]=m}for(const u in i){const d=i[u];let f;if(d!=="")switch(u.toLowerCase()){case"kd":s.color=_t.toWorkingColorSpace(new Qe().fromArray(d),Kt);break;case"ks":s.specular=_t.toWorkingColorSpace(new Qe().fromArray(d),Kt);break;case"ke":s.emissive=_t.toWorkingColorSpace(new Qe().fromArray(d),Kt);break;case"map_kd":c("map",d);break;case"map_ks":c("specularMap",d);break;case"map_ke":c("emissiveMap",d);break;case"norm":c("normalMap",d);break;case"map_bump":case"bump":c("bumpMap",d);break;case"map_d":c("alphaMap",d),s.transparent=!0;break;case"ns":s.shininess=parseFloat(d);break;case"d":f=parseFloat(d),f<1&&(s.opacity=f,s.transparent=!0);break;case"tr":f=parseFloat(d),this.options&&this.options.invertTrProperty&&(f=1-f),f>0&&(s.opacity=1-f,s.transparent=!0);break}}return this.materials[e]=new Q_(s),this.materials[e]}getTextureParams(e,t){const i={scale:new et(1,1),offset:new et(0,0)},s=e.split(/\s+/);let a;return a=s.indexOf("-bm"),a>=0&&(t.bumpScale=parseFloat(s[a+1]),s.splice(a,2)),a=s.indexOf("-s"),a>=0&&(i.scale.set(parseFloat(s[a+1]),parseFloat(s[a+2])),s.splice(a,4)),a=s.indexOf("-o"),a>=0&&(i.offset.set(parseFloat(s[a+1]),parseFloat(s[a+2])),s.splice(a,4)),i.url=s.join(" ").trim(),i}loadTexture(e,t,i,s,a){const c=this.manager!==void 0?this.manager:t0;let u=c.getHandler(e);u===null&&(u=new n0(c)),u.setCrossOrigin&&u.setCrossOrigin(this.crossOrigin);const d=u.load(e,i,s,a);return t!==void 0&&(d.mapping=t),d}}const E_=({objPath:o,mtlPath:e,teethInfo:t})=>{const i=mn.useRef(null),s=mn.useRef(null),a=mn.useRef(null),c=mn.useRef(null),[u,d]=mn.useState(!1),f=t||defaultTeethInfo;mn.useEffect(()=>{const _=new tf,x=new gn(75,i.current.offsetWidth/i.current.offsetHeight,.1,1e3);x.position.z=3,c.current=x;const M=new pf({antialias:!0});M.setSize(i.current.offsetWidth,i.current.offsetHeight),i.current.appendChild(M.domElement),a.current=M;const E=new gf(x,M.domElement),S=new uf(16777215,.8);_.add(S);const y=new Pc(16777215,.5);y.position.set(5,5,5),_.add(y),new eA().load(e,k=>{k.preload();const N=new J1;N.setMaterials(k),N.load(o,U=>{_.add(U)},void 0,U=>{console.error("Error loading OBJ file:",U)})});const L=()=>{requestAnimationFrame(L),E.update(),M.render(_,x)};L();const R=()=>{const k=s.current.offsetWidth,N=s.current.offsetHeight;x.aspect=k/N,x.updateProjectionMatrix(),M.setSize(k,N)};return window.addEventListener("resize",R),()=>{i.current.removeChild(M.domElement),M.dispose(),window.removeEventListener("resize",R)}},[o,e]);const m=()=>{document.fullscreenElement?document.exitFullscreen():s.current.requestFullscreen()};mn.useEffect(()=>{const _=()=>{if(d(!!document.fullscreenElement),document.fullscreenElement){const x=window.innerWidth,M=window.innerHeight;c.current.aspect=x/M,c.current.updateProjectionMatrix(),a.current.setSize(x,M)}else{const x=s.current.offsetWidth,M=s.current.offsetHeight;c.current.aspect=x/M,c.current.updateProjectionMatrix(),a.current.setSize(x,M)}};return document.addEventListener("fullscreenchange",_),()=>document.removeEventListener("fullscreenchange",_)},[]);const g=_=>{_.stopPropagation()};return Mt.jsxs("div",{ref:s,style:{borderRadius:"15px",overflow:"hidden",border:"2px solid #ccc",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",width:"200px",height:"200px",position:"relative",cursor:"pointer",backgroundColor:"#f0f0f0"},onClick:m,children:[Mt.jsx("div",{ref:i,style:{width:"100%",height:"100%"},onClick:g}),u&&Mt.jsx("div",{style:{position:"absolute",top:"10px",left:"10px",backgroundColor:"rgba(0,0,0,0.7)",color:"white",padding:"10px",borderRadius:"10px",maxHeight:"80%",overflowY:"auto",width:"300px",zIndex:10},children:f.map((_,x)=>Mt.jsxs("div",{style:{marginBottom:"15px",backgroundColor:"#333",padding:"10px",borderRadius:"5px"},children:[Mt.jsx("h3",{style:{margin:0,fontSize:"16px"},children:_.title}),Mt.jsx("p",{style:{fontSize:"14px"},children:_.content})]},x))}),Mt.jsx("div",{style:{position:"absolute",bottom:"10px",right:"10px",backgroundColor:"rgba(0,0,0,0.6)",color:"white",padding:"5px 10px",borderRadius:"5px",fontSize:"12px"},children:"Click to Fullscreen"})]})},nA=o=>[{name:"Incisivo central",objUrl:`${o}/Human_Teeth_Top_1.obj`,mtlUrl:`${o}/Human_Teeth_Top_1.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara palatina",content:"Orientada hacia el paladar"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Borde incisal",content:"Es el margen de los dientes anteriores"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar"},{title:"Cingulo",content:"Localizada en el tercio cervical o cara palatina"},{title:"Funcion",content:"Cortar alimentos"}]},{name:"Incisivo lateral",objUrl:`${o}/Human_Teeth_Top_2.obj`,mtlUrl:`${o}/Human_Teeth_Top_2.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara palatina",content:"Orientada hacia el paladar"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Borde incisal",content:"Es el margen de los dientes anteriores"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar"},{title:"Cingulo",content:"Localizada en el tercio cervical o cara palatina"},{title:"Funcion",content:"Cortar alimentos"}]},{name:"Canino",objUrl:`${o}/Human_Teeth_Top_3.obj`,mtlUrl:`${o}/Human_Teeth_Top_3.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara palatina",content:"Orientada hacia el paladar"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Borde incisal",content:"Es el margen de los dientes anteriores"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar"},{title:"Cingulo",content:"Localizada en el tercio cervical o cara palatina"},{title:"Funcion",content:"Corte y desgarro"}]},{name:"Primer premolar",objUrl:`${o}/Human_Teeth_Top_4.obj`,mtlUrl:`${o}/Human_Teeth_Top_4.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara palatina",content:"Orientada hacia el paladar"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Cara oclusal",content:"Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar"},{title:"Funcion",content:"Morder y desgarrar la comida"}]},{name:"Segundo premolar",objUrl:`${o}/Human_Teeth_Top_5.obj`,mtlUrl:`${o}/Human_Teeth_Top_5.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara palatina",content:"Orientada hacia el paladar"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Cara oclusal",content:"Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar"},{title:"Funcion",content:"Triturar la comida"}]},{name:"Terer molar",objUrl:`${o}/Human_Teeth_Top_6.obj`,mtlUrl:`${o}/Human_Teeth_Top_6.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara palatina",content:"Orientada hacia el paladar"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Cara oclusal",content:"Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar y suele presentar tres raices"},{title:"Funcion",content:"Moler o triturar la comida"}]},{name:"Segundo molar",objUrl:`${o}/Human_Teeth_Top_7.obj`,mtlUrl:`${o}/Human_Teeth_Top_7.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara palatina",content:"Orientada hacia el paladar"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Cara oclusal",content:"Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar y suele presentar tres raices"},{title:"Funcion",content:"Moler o triturar la comida"}]},{name:"Primer molar",objUrl:`${o}/Human_Teeth_Top_8.obj`,mtlUrl:`${o}/Human_Teeth_Top_8.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara palatina",content:"Orientada hacia el paladar"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Cara oclusal",content:"Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar y suele presentar tres raices"},{title:"Funcion",content:"Masticar la comida  y es fundamental en la oclusion para alinear bien los dientes."}]}],iA=o=>[{name:"Incisivo central",objUrl:`${o}/Human_Teeth_Bottom_1.obj`,mtlUrl:`${o}/Human_Teeth_Bottom_1.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara lingual",content:"Orientada hacia la lengua"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Borde incisal",content:"Es el margen de los dientes anteriores"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar"},{title:"Cingulo",content:"Localizada en el tercio cervical o cara lingual"},{title:"Funcion",content:"Cortar alimentos"}]},{name:"Incisivo lateral",objUrl:`${o}/Human_Teeth_Bottom_2.obj`,mtlUrl:`${o}/Human_Teeth_Bottom_2.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara lingual",content:"Orientada hacia la lengua"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Borde incisal",content:"Es el margen de los dientes anteriores"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar"},{title:"Cingulo",content:"Localizada en el tercio cervical o cara lingual"},{title:"Funcion",content:"Cortar alimentos"}]},{name:"Canino",objUrl:`${o}/Human_Teeth_Bottom_3.obj`,mtlUrl:`${o}/Human_Teeth_Bottom_3.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara lingual",content:"Orientada hacia la lengua"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Borde incisal",content:"Es el margen de los dientes anteriores"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar"},{title:"Cingulo",content:"Localizada en el tercio cervical o cara lingual"},{title:"Funcion",content:"Corte y desgarro"}]},{name:"Primer premolar",objUrl:`${o}/Human_Teeth_Bottom_4.obj`,mtlUrl:`${o}/Human_Teeth_Bottom_4.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara lingual",content:"Orientada hacia la lengua"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Cara oclusal",content:"Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar"},{title:"Funcion",content:"Morder y desgarrar la comida"}]},{name:"Segundo premolar",objUrl:`${o}/Human_Teeth_Bottom_5.obj`,mtlUrl:`${o}/Human_Teeth_Bottom_5.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara lingual",content:"Orientada hacia la lengua"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Cara oclusal",content:"Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar"},{title:"Funcion",content:"Triturar la comida"}]},{name:"Tercer molar",objUrl:`${o}/Human_Teeth_Bottom_6.obj`,mtlUrl:`${o}/Human_Teeth_Top_6.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara lingual",content:"Orientada hacia la lengua"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Cara oclusal",content:"Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar y presentan dos raices"},{title:"Funcion",content:"Moler o triturar la comida"}]},{name:"Segundo molar",objUrl:`${o}/Human_Teeth_Bottom_7.obj`,mtlUrl:`${o}/Human_Teeth_Bottom_7.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara lingual",content:"Orientada hacia la lengua"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Cara oclusal",content:"Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar y presentan dos raices"},{title:"Funcion",content:"Moler o triturar la comida"}]},{name:"Primer molar",objUrl:`${o}/Human_Teeth_Bottom_8.obj`,mtlUrl:`${o}/Human_Teeth_Bottom_8.mtl`,cards:[{title:"Cara labial o vestibular",content:"Es la cara que esta orientada hacia los labios y el vestibulo, es decir orientada en el sentido de la apertura de la boca"},{title:"Cara lingual",content:"Orientada hacia la lengua"},{title:"Cara mesial",content:"Cara interproximal mas cercana al eje medio"},{title:"Cara distal",content:"Cara interproximal mas lejana al eje medio"},{title:"Cara oclusal",content:"Superficie de masticacion que presenta fosas, surcos, cuspide, crestas marginales y triangulares"},{title:"Raiz del diente",content:"Parte que se sujeta en el hueso alveolar y presentan dos raices"},{title:"Funcion",content:"Masticar la comida  y es fundamental en la oclusion para alinear bien los dientes."}]}],rA=()=>{const o=mn.useRef(null),[e,t]=mn.useState(!1);mn.useEffect(()=>{const a=new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&(t(!0),a.unobserve(u.target))})},{threshold:.5});return o.current&&a.observe(o.current),()=>{o.current&&a.unobserve(o.current)}},[]);const i=nA("/models/top"),s=iA("/models/bottom");return Mt.jsxs(mn.Fragment,{children:[Mt.jsx("h2",{ref:o,className:`animate__animated ${e?"animate__backInLeft":""}`,children:"Dientes del maxilar superior"}),Mt.jsx("div",{className:"container",children:Mt.jsx("div",{className:"teethContainer",children:i.map((a,c)=>Mt.jsxs("div",{className:`teeth-${c+1}`,children:[Mt.jsx("p",{children:a.name}),Mt.jsx(E_,{objPath:a.objUrl,mtlPath:a.mtlUrl,teethInfo:a.cards})]},c))})}),Mt.jsx("h2",{ref:o,className:`animate__animated ${e?"animate__backInLeft":""}`,children:"Dientes del maxilar inferior"}),Mt.jsx("div",{className:"container",children:Mt.jsx("div",{className:"teethContainer",children:s.map((a,c)=>Mt.jsxs("div",{className:`teeth-${c+1}`,children:[Mt.jsx("p",{children:a.name}),Mt.jsx(E_,{objPath:a.objUrl,mtlPath:a.mtlUrl,teethInfo:a.cards})]},c))})})]})},sA=()=>Mt.jsxs("main",{className:"bg-black overflow-y-auto",children:[Mt.jsx(q1,{}),Mt.jsx(rA,{})]});Qv.createRoot(document.getElementById("root")).render(Mt.jsx(mn.StrictMode,{children:Mt.jsx(sA,{})}));
