var Af=Object.defineProperty;var Rf=(n,e,t)=>e in n?Af(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var uc=(n,e,t)=>Rf(n,typeof e!="symbol"?e+"":e,t);import{r as O,a as Cf,R as nu}from"./vendor-react-wGySg1uH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var ru={exports:{}},Pi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf=O,Pf=Symbol.for("react.element"),Nf=Symbol.for("react.fragment"),jf=Object.prototype.hasOwnProperty,Df=kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vf={key:!0,ref:!0,__self:!0,__source:!0};function iu(n,e,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)jf.call(e,r)&&!Vf.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Pf,type:n,key:o,ref:a,props:i,_owner:Df.current}}Pi.Fragment=Nf;Pi.jsx=iu;Pi.jsxs=iu;ru.exports=Pi;var c=ru.exports,su,hc=Cf;su=hc.createRoot,hc.hydrateRoot;const Of=({onOpenWizard:n})=>{const[e,t]=O.useState("stone");return c.jsxs("section",{className:"hub-hero",style:{padding:"3rem 1rem 4rem",maxWidth:"1200px",margin:"0 auto"},children:[c.jsxs("div",{style:{textAlign:"center",maxWidth:"850px",margin:"0 auto 3rem"},children:[c.jsxs("span",{className:"badge-pill gold",style:{marginBottom:"1.5rem"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"var(--gold-accent)"}}),"48-HOUR MANAGED LAUNCH SLA"]}),c.jsxs("h1",{className:"heading-luminance",style:{fontSize:"clamp(2.4rem, 6vw, 3.8rem)",fontWeight:900,lineHeight:1.12,marginBottom:"1.2rem",letterSpacing:"-0.035em"},children:["Putting Ghana's Best",c.jsx("br",{}),c.jsx("span",{className:"gold-luminance",children:"Businesses Online."})]}),c.jsxs("p",{style:{color:"#94A3B8",fontSize:"1.12rem",lineHeight:1.7,marginBottom:"2.5rem",maxWidth:"720px",margin:"0 auto 2.5rem",letterSpacing:"-0.01em"},children:["Traditional marketing ends at the flyer. We engineer high-performance Website as a Service (WaaS) platforms with automated ",c.jsx("strong",{style:{color:"#F8FAFC",fontWeight:650},children:"MoMo payments"})," and direct ",c.jsx("strong",{style:{color:"#F8FAFC",fontWeight:650},children:"WhatsApp lead routing"}),"."]}),c.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[c.jsxs("button",{onClick:n,className:"btn-primary",children:[c.jsx("span",{children:"Generate Starter Website"}),c.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),c.jsx("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20request%20a%20consultation%20for%20my%20business%20website.",target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",children:c.jsx("span",{children:"Request Consultation"})})]})]}),c.jsxs("div",{className:"hero-demo-stage neon-border",style:{background:"var(--bg-surface)",borderRadius:"20px",padding:"1.5rem",maxWidth:"960px",margin:"0 auto",boxShadow:"0 20px 50px rgba(0,0,0,0.6)"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem",marginBottom:"1.5rem",borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"1rem"},children:[c.jsx("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:c.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.4rem",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",padding:"0.25rem 0.75rem",borderRadius:"20px",fontSize:"0.75rem",color:"#94A3B8"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10B981"}}),c.jsx("span",{children:"kone-showcase.io"})]})}),c.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",justifyContent:"center"},children:[c.jsx("button",{onClick:()=>t("stone"),className:e==="stone"?"btn-primary":"btn-secondary",style:{padding:"0.35rem 0.9rem",borderRadius:"50px",fontSize:"0.78rem"},children:"Stone Architecture"}),c.jsx("button",{onClick:()=>t("fashion"),className:e==="fashion"?"btn-primary":"btn-secondary",style:{padding:"0.35rem 0.9rem",borderRadius:"50px",fontSize:"0.78rem"},children:"Fashion Retail"}),c.jsx("button",{onClick:()=>t("momo"),className:e==="momo"?"btn-primary":"btn-secondary",style:{padding:"0.35rem 0.9rem",borderRadius:"50px",fontSize:"0.78rem"},children:"Payment Engine"})]})]}),c.jsxs("div",{style:{borderRadius:"12px",overflow:"hidden",minHeight:"340px",height:"auto",position:"relative",background:"#0d1117"},children:[e==="stone"&&c.jsxs("div",{style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/sedemson_stone_hero.png")',backgroundSize:"cover",backgroundPosition:"center",color:"#fff",padding:"2rem 1.2rem",textAlign:"center"},children:[c.jsx("span",{className:"badge-pill gold",style:{marginBottom:"0.8rem"},children:"FEATURED B2B CLIENT"}),c.jsx("h2",{style:{fontSize:"clamp(1.3rem, 5vw, 2rem)",fontFamily:"serif",fontWeight:900},children:"Sedemson Stone Craftsmanship"}),c.jsx("p",{style:{maxWidth:"500px",fontSize:"0.9rem",opacity:.85,marginTop:"0.5rem"},children:"Natural Stone Cladding & Architectural Finishes across Ghana."}),c.jsxs("a",{href:"#work",style:{marginTop:"1.2rem",color:"#F8FAFC",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",padding:"0.35rem 0.9rem",borderRadius:"50px",fontWeight:650,fontSize:"0.8rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[c.jsx("span",{children:"Explore Client Showcase"}),c.jsx("span",{children:"➔"})]})]}),e==="fashion"&&c.jsxs("div",{style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/emewear/emewear_hero.jpg")',backgroundSize:"cover",backgroundPosition:"top",color:"#fff",padding:"2rem 1.2rem",textAlign:"center"},children:[c.jsx("span",{className:"badge-pill gold",style:{marginBottom:"0.8rem"},children:"E-COMMERCE SHOWCASE"}),c.jsx("h2",{style:{fontSize:"clamp(1.3rem, 5vw, 2rem)",fontFamily:"serif",fontWeight:900},children:"Emewear Plus-Size Ankara"}),c.jsx("p",{style:{maxWidth:"500px",fontSize:"0.9rem",opacity:.85,marginTop:"0.5rem"},children:"Handcrafted Ankara wide-leg cargo trousers & royal batik palazzo sets."}),c.jsxs("a",{href:"#work",style:{marginTop:"1.2rem",color:"#F8FAFC",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",padding:"0.35rem 0.9rem",borderRadius:"50px",fontWeight:650,fontSize:"0.8rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[c.jsx("span",{children:"Explore Client Showcase"}),c.jsx("span",{children:"➔"})]})]}),e==="momo"&&c.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"radial-gradient(circle, #121826 0%, #07090E 100%)",color:"#fff",padding:"2rem",textAlign:"center"},children:[c.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1rem",color:"#10b981"},children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),c.jsx("h2",{style:{fontSize:"1.6rem",color:"#fff",fontWeight:800},children:"Automated WhatsApp Order Engine"}),c.jsx("p",{style:{maxWidth:"520px",color:"var(--text-muted)",fontSize:"0.92rem",marginTop:"0.5rem",lineHeight:1.6},children:"When customers select products on your storefront, orders automatically compile into structured WhatsApp messages with instant Mobile Money payment prompts."}),c.jsxs("div",{style:{marginTop:"1.2rem",display:"flex",gap:"0.8rem",flexWrap:"wrap",justifyContent:"center"},children:[c.jsx("span",{style:{background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.3)",color:"#10b981",padding:"0.35rem 0.9rem",borderRadius:"20px",fontSize:"0.78rem",fontWeight:700},children:"Direct WhatsApp Routing"}),c.jsx("span",{style:{background:"rgba(255, 204, 0, 0.1)",border:"1px solid rgba(255, 204, 0, 0.3)",color:"#ffcc00",padding:"0.35rem 0.9rem",borderRadius:"20px",fontSize:"0.78rem",fontWeight:700},children:"MTN & Telecel Settlement"})]})]})]})]})]})},Mf=()=>{const n=[{metric:"48h",title:"Rapid Launch Turnaround",description:"Your bespoke business hub deployed with zero technical overhead.",color:"var(--cyan-glow)"},{metric:"Direct",title:"MoMo & WhatsApp Routing",description:"Automated order collection straight to your MTN, Telecel, or AT phone.",color:"var(--gold-accent)"},{metric:"100%",title:"Fully Managed WaaS",description:"Zero maintenance headaches. We handle hosting, SSL, updates & security.",color:"#10b981"},{metric:"99.9%",title:"Guaranteed Uptime & Speed",description:"Ultra-lightweight code optimized for African 3G/4G networks.",color:"var(--cyan-glow)"}];return c.jsxs("section",{className:"trust-metrics-section",style:{padding:"3rem 0",margin:"2rem 0"},children:[c.jsxs("div",{className:"section-title",style:{textAlign:"center",marginBottom:"2.5rem"},children:[c.jsxs("span",{className:"badge-pill cyan",children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"var(--cyan-glow)"}}),"ENTERPRISE ARCHITECTURE • ZERO MAINTENANCE"]}),c.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.7rem, 5vw, 2.4rem)",marginTop:"0.9rem",fontWeight:850},children:["Engineered for ",c.jsx("span",{className:"cyan-luminance",children:"Real Business Growth"})]})]}),c.jsx("div",{className:"metrics-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 220px), 1fr))",gap:"1.2rem",maxWidth:"1100px",margin:"0 auto",padding:"0 1rem"},children:n.map((e,t)=>c.jsxs("div",{className:"metric-card neon-border",style:{background:"var(--bg-surface)",padding:"2rem 1.5rem",borderRadius:"16px",textAlign:"center",backdropFilter:"blur(10px)"},children:[c.jsx("div",{style:{fontSize:"2.6rem",fontWeight:900,color:e.color},children:e.metric}),c.jsx("h3",{style:{color:"var(--text-main)",fontSize:"1rem",fontWeight:700,marginTop:"0.6rem",marginBottom:"0.3rem"},children:e.title}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.82rem",lineHeight:1.5},children:e.description})]},t))}),c.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem",flexWrap:"wrap",marginTop:"3rem",opacity:.9},children:[c.jsx("div",{style:{color:"var(--text-subtle)",fontSize:"0.8rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px"},children:"INTEGRATIONS:"}),c.jsxs("span",{style:{color:"#ffcc00",fontWeight:700,fontSize:"0.88rem",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#ffcc00"}}),"MTN Mobile Money"]}),c.jsxs("span",{style:{color:"#e60000",fontWeight:700,fontSize:"0.88rem",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#e60000"}}),"Telecel Cash"]}),c.jsxs("span",{style:{color:"#38bdf8",fontWeight:700,fontSize:"0.88rem",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#38bdf8"}}),"AT Money"]}),c.jsxs("span",{style:{color:"#10b981",fontWeight:700,fontSize:"0.88rem",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#10b981"}}),"WhatsApp Business"]})]})]})},Lf=()=>{};var dc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ff=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},au={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,m=o>>2,v=(o&3)<<4|u>>4;let T=(u&15)<<2|f>>6,A=f&63;h||(A=64,a||(T=64)),r.push(t[m],t[v],t[T],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ou(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ff(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||f==null||v==null)throw new Uf;const T=o<<2|u>>4;if(r.push(T),f!==64){const A=u<<4&240|f>>2;if(r.push(A),v!==64){const k=f<<6&192|v;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Uf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bf=function(n){const e=ou(n);return au.encodeByteArray(e,!0)},ci=function(n){return Bf(n).replace(/\./g,"")},cu=function(n){try{return au.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=()=>Wf().__FIREBASE_DEFAULTS__,qf=()=>{if(typeof process>"u"||typeof dc>"u")return;const n=dc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$f=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cu(n[1]);return e&&JSON.parse(e)},Ni=()=>{try{return Lf()||zf()||qf()||$f()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lu=n=>{var e,t;return(t=(e=Ni())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Gf=n=>{const e=lu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},uu=()=>{var n;return(n=Ni())==null?void 0:n.config},hu=n=>{var e;return(e=Ni())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ci(JSON.stringify(t)),ci(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Yf(){var e;const n=(e=Ni())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function du(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Xf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zf(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ep(){return!Yf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fu(){try{return typeof indexedDB=="object"}catch{return!1}}function pu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}function tp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="FirebaseError";class Qe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=np,Object.setPrototypeOf(this,Qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sn.prototype.create)}}class sn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?rp(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Qe(i,u,r)}}function rp(n,e){return n.replace(ip,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ip=/\{\$([^}]+)}/g;function sp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function jt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(fc(o)&&fc(a)){if(!jt(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function fc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function op(n,e){const t=new ap(n,e);return t.subscribe.bind(t)}class ap{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");cp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Is),i.error===void 0&&(i.error=Is),i.complete===void 0&&(i.complete=Is);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Is(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=1e3,up=2,hp=4*60*60*1e3,dp=.5;function pc(n,e=lp,t=up){const r=e*Math.pow(t,n),i=Math.round(dp*r*(Math.random()-.5)*2);return Math.min(hp,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mu(n){return(await fetch(n,{credentials:"include"})).ok}class He{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Hf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mp(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pp(n){return n===Gt?void 0:n}function mp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const yp={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},_p=H.INFO,vp={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},bp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=vp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ji{constructor(e){this.name=e,this._logLevel=_p,this._logHandler=bp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const wp=(n,e)=>e.some(t=>n instanceof t);let mc,gc;function Ip(){return mc||(mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tp(){return gc||(gc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gu=new WeakMap,Fs=new WeakMap,yu=new WeakMap,Ts=new WeakMap,ho=new WeakMap;function xp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Ct(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&gu.set(t,n)}).catch(()=>{}),ho.set(e,n),e}function Ep(n){if(Fs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Fs.set(n,e)}let Us={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ct(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Sp(n){Us=n(Us)}function Ap(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(xs(this),e,...t);return yu.set(r,e.sort?e.sort():[e]),Ct(r)}:Tp().includes(n)?function(...e){return n.apply(xs(this),e),Ct(gu.get(this))}:function(...e){return Ct(n.apply(xs(this),e))}}function Rp(n){return typeof n=="function"?Ap(n):(n instanceof IDBTransaction&&Ep(n),wp(n,Ip())?new Proxy(n,Us):n)}function Ct(n){if(n instanceof IDBRequest)return xp(n);if(Ts.has(n))return Ts.get(n);const e=Rp(n);return e!==n&&(Ts.set(n,e),ho.set(e,n)),e}const xs=n=>ho.get(n);function _u(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),u=Ct(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Ct(a.result),h.oldVersion,h.newVersion,Ct(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const Cp=["get","getKey","getAll","getAllKeys","count"],kp=["put","add","delete","clear"],Es=new Map;function yc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Es.get(e))return Es.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=kp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Cp.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[t](...u),i&&h.done]))[0]};return Es.set(e,o),o}Sp(n=>({...n,get:(e,t,r)=>yc(e,t)||n.get(e,t,r),has:(e,t)=>!!yc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Np(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Np(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bs="@firebase/app",_c="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new ji("@firebase/app"),jp="@firebase/app-compat",Dp="@firebase/analytics-compat",Vp="@firebase/analytics",Op="@firebase/app-check-compat",Mp="@firebase/app-check",Lp="@firebase/auth",Fp="@firebase/auth-compat",Up="@firebase/database",Bp="@firebase/data-connect",Wp="@firebase/database-compat",zp="@firebase/functions",qp="@firebase/functions-compat",$p="@firebase/installations",Gp="@firebase/installations-compat",Hp="@firebase/messaging",Kp="@firebase/messaging-compat",Qp="@firebase/performance",Yp="@firebase/performance-compat",Jp="@firebase/remote-config",Xp="@firebase/remote-config-compat",Zp="@firebase/storage",em="@firebase/storage-compat",tm="@firebase/firestore",nm="@firebase/ai",rm="@firebase/firestore-compat",im="firebase",sm="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="[DEFAULT]",om={[Bs]:"fire-core",[jp]:"fire-core-compat",[Vp]:"fire-analytics",[Dp]:"fire-analytics-compat",[Mp]:"fire-app-check",[Op]:"fire-app-check-compat",[Lp]:"fire-auth",[Fp]:"fire-auth-compat",[Up]:"fire-rtdb",[Bp]:"fire-data-connect",[Wp]:"fire-rtdb-compat",[zp]:"fire-fn",[qp]:"fire-fn-compat",[$p]:"fire-iid",[Gp]:"fire-iid-compat",[Hp]:"fire-fcm",[Kp]:"fire-fcm-compat",[Qp]:"fire-perf",[Yp]:"fire-perf-compat",[Jp]:"fire-rc",[Xp]:"fire-rc-compat",[Zp]:"fire-gcs",[em]:"fire-gcs-compat",[tm]:"fire-fst",[rm]:"fire-fst-compat",[nm]:"fire-vertex","fire-js":"fire-js",[im]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Map,am=new Map,zs=new Map;function vc(n,e){try{n.container.addComponent(e)}catch(t){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ot(n){const e=n.name;if(zs.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;zs.set(e,n);for(const t of li.values())vc(t,n);for(const t of am.values())vc(t,n);return!0}function on(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function et(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new sn("app","Firebase",cm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=sm;function vu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ws,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw kt.create("bad-app-name",{appName:String(i)});if(t||(t=uu()),!t)throw kt.create("no-options");const o=li.get(i);if(o){if(jt(t,o.options)&&jt(r,o.config))return o;throw kt.create("duplicate-app",{appName:i})}const a=new gp(i);for(const h of zs.values())a.addComponent(h);const u=new lm(t,r,a);return li.set(i,u),u}function fo(n=Ws){const e=li.get(n);if(!e&&n===Ws&&uu())return vu();if(!e)throw kt.create("no-app",{appName:n});return e}function We(n,e,t){let r=om[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(a.join(" "));return}ot(new He(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="firebase-heartbeat-database",hm=1,pr="firebase-heartbeat-store";let Ss=null;function bu(){return Ss||(Ss=_u(um,hm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pr)}catch(t){console.warn(t)}}}}).catch(n=>{throw kt.create("idb-open",{originalErrorMessage:n.message})})),Ss}async function dm(n){try{const t=(await bu()).transaction(pr),r=await t.objectStore(pr).get(wu(n));return await t.done,r}catch(e){if(e instanceof Qe)ht.warn(e.message);else{const t=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(t.message)}}}async function bc(n,e){try{const r=(await bu()).transaction(pr,"readwrite");await r.objectStore(pr).put(e,wu(n)),await r.done}catch(t){if(t instanceof Qe)ht.warn(t.message);else{const r=kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ht.warn(r.message)}}}function wu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=1024,pm=30;class mm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ym(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=wc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>pm){const a=_m(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ht.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wc(),{heartbeatsToSend:r,unsentEntries:i}=gm(this._heartbeatsCache.heartbeats),o=ci(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return ht.warn(t),""}}}function wc(){return new Date().toISOString().substring(0,10)}function gm(n,e=fm){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Ic(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ic(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ym{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fu()?pu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ic(n){return ci(JSON.stringify({version:2,heartbeats:n})).length}function _m(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n){ot(new He("platform-logger",e=>new Pp(e),"PRIVATE")),ot(new He("heartbeat",e=>new mm(e),"PRIVATE")),We(Bs,_c,n),We(Bs,_c,"esm2020"),We("fire-js","")}vm("");var Tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pt,Iu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function _(){}_.prototype=y.prototype,w.F=y.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(I,b,x){for(var g=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)g[fe-2]=arguments[fe];return y.prototype[b].apply(I,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,_){_||(_=0);const I=Array(16);if(typeof y=="string")for(var b=0;b<16;++b)I[b]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(b=0;b<16;++b)I[b]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=w.g[0],_=w.g[1],b=w.g[2];let x=w.g[3],g;g=y+(x^_&(b^x))+I[0]+3614090360&4294967295,y=_+(g<<7&4294967295|g>>>25),g=x+(b^y&(_^b))+I[1]+3905402710&4294967295,x=y+(g<<12&4294967295|g>>>20),g=b+(_^x&(y^_))+I[2]+606105819&4294967295,b=x+(g<<17&4294967295|g>>>15),g=_+(y^b&(x^y))+I[3]+3250441966&4294967295,_=b+(g<<22&4294967295|g>>>10),g=y+(x^_&(b^x))+I[4]+4118548399&4294967295,y=_+(g<<7&4294967295|g>>>25),g=x+(b^y&(_^b))+I[5]+1200080426&4294967295,x=y+(g<<12&4294967295|g>>>20),g=b+(_^x&(y^_))+I[6]+2821735955&4294967295,b=x+(g<<17&4294967295|g>>>15),g=_+(y^b&(x^y))+I[7]+4249261313&4294967295,_=b+(g<<22&4294967295|g>>>10),g=y+(x^_&(b^x))+I[8]+1770035416&4294967295,y=_+(g<<7&4294967295|g>>>25),g=x+(b^y&(_^b))+I[9]+2336552879&4294967295,x=y+(g<<12&4294967295|g>>>20),g=b+(_^x&(y^_))+I[10]+4294925233&4294967295,b=x+(g<<17&4294967295|g>>>15),g=_+(y^b&(x^y))+I[11]+2304563134&4294967295,_=b+(g<<22&4294967295|g>>>10),g=y+(x^_&(b^x))+I[12]+1804603682&4294967295,y=_+(g<<7&4294967295|g>>>25),g=x+(b^y&(_^b))+I[13]+4254626195&4294967295,x=y+(g<<12&4294967295|g>>>20),g=b+(_^x&(y^_))+I[14]+2792965006&4294967295,b=x+(g<<17&4294967295|g>>>15),g=_+(y^b&(x^y))+I[15]+1236535329&4294967295,_=b+(g<<22&4294967295|g>>>10),g=y+(b^x&(_^b))+I[1]+4129170786&4294967295,y=_+(g<<5&4294967295|g>>>27),g=x+(_^b&(y^_))+I[6]+3225465664&4294967295,x=y+(g<<9&4294967295|g>>>23),g=b+(y^_&(x^y))+I[11]+643717713&4294967295,b=x+(g<<14&4294967295|g>>>18),g=_+(x^y&(b^x))+I[0]+3921069994&4294967295,_=b+(g<<20&4294967295|g>>>12),g=y+(b^x&(_^b))+I[5]+3593408605&4294967295,y=_+(g<<5&4294967295|g>>>27),g=x+(_^b&(y^_))+I[10]+38016083&4294967295,x=y+(g<<9&4294967295|g>>>23),g=b+(y^_&(x^y))+I[15]+3634488961&4294967295,b=x+(g<<14&4294967295|g>>>18),g=_+(x^y&(b^x))+I[4]+3889429448&4294967295,_=b+(g<<20&4294967295|g>>>12),g=y+(b^x&(_^b))+I[9]+568446438&4294967295,y=_+(g<<5&4294967295|g>>>27),g=x+(_^b&(y^_))+I[14]+3275163606&4294967295,x=y+(g<<9&4294967295|g>>>23),g=b+(y^_&(x^y))+I[3]+4107603335&4294967295,b=x+(g<<14&4294967295|g>>>18),g=_+(x^y&(b^x))+I[8]+1163531501&4294967295,_=b+(g<<20&4294967295|g>>>12),g=y+(b^x&(_^b))+I[13]+2850285829&4294967295,y=_+(g<<5&4294967295|g>>>27),g=x+(_^b&(y^_))+I[2]+4243563512&4294967295,x=y+(g<<9&4294967295|g>>>23),g=b+(y^_&(x^y))+I[7]+1735328473&4294967295,b=x+(g<<14&4294967295|g>>>18),g=_+(x^y&(b^x))+I[12]+2368359562&4294967295,_=b+(g<<20&4294967295|g>>>12),g=y+(_^b^x)+I[5]+4294588738&4294967295,y=_+(g<<4&4294967295|g>>>28),g=x+(y^_^b)+I[8]+2272392833&4294967295,x=y+(g<<11&4294967295|g>>>21),g=b+(x^y^_)+I[11]+1839030562&4294967295,b=x+(g<<16&4294967295|g>>>16),g=_+(b^x^y)+I[14]+4259657740&4294967295,_=b+(g<<23&4294967295|g>>>9),g=y+(_^b^x)+I[1]+2763975236&4294967295,y=_+(g<<4&4294967295|g>>>28),g=x+(y^_^b)+I[4]+1272893353&4294967295,x=y+(g<<11&4294967295|g>>>21),g=b+(x^y^_)+I[7]+4139469664&4294967295,b=x+(g<<16&4294967295|g>>>16),g=_+(b^x^y)+I[10]+3200236656&4294967295,_=b+(g<<23&4294967295|g>>>9),g=y+(_^b^x)+I[13]+681279174&4294967295,y=_+(g<<4&4294967295|g>>>28),g=x+(y^_^b)+I[0]+3936430074&4294967295,x=y+(g<<11&4294967295|g>>>21),g=b+(x^y^_)+I[3]+3572445317&4294967295,b=x+(g<<16&4294967295|g>>>16),g=_+(b^x^y)+I[6]+76029189&4294967295,_=b+(g<<23&4294967295|g>>>9),g=y+(_^b^x)+I[9]+3654602809&4294967295,y=_+(g<<4&4294967295|g>>>28),g=x+(y^_^b)+I[12]+3873151461&4294967295,x=y+(g<<11&4294967295|g>>>21),g=b+(x^y^_)+I[15]+530742520&4294967295,b=x+(g<<16&4294967295|g>>>16),g=_+(b^x^y)+I[2]+3299628645&4294967295,_=b+(g<<23&4294967295|g>>>9),g=y+(b^(_|~x))+I[0]+4096336452&4294967295,y=_+(g<<6&4294967295|g>>>26),g=x+(_^(y|~b))+I[7]+1126891415&4294967295,x=y+(g<<10&4294967295|g>>>22),g=b+(y^(x|~_))+I[14]+2878612391&4294967295,b=x+(g<<15&4294967295|g>>>17),g=_+(x^(b|~y))+I[5]+4237533241&4294967295,_=b+(g<<21&4294967295|g>>>11),g=y+(b^(_|~x))+I[12]+1700485571&4294967295,y=_+(g<<6&4294967295|g>>>26),g=x+(_^(y|~b))+I[3]+2399980690&4294967295,x=y+(g<<10&4294967295|g>>>22),g=b+(y^(x|~_))+I[10]+4293915773&4294967295,b=x+(g<<15&4294967295|g>>>17),g=_+(x^(b|~y))+I[1]+2240044497&4294967295,_=b+(g<<21&4294967295|g>>>11),g=y+(b^(_|~x))+I[8]+1873313359&4294967295,y=_+(g<<6&4294967295|g>>>26),g=x+(_^(y|~b))+I[15]+4264355552&4294967295,x=y+(g<<10&4294967295|g>>>22),g=b+(y^(x|~_))+I[6]+2734768916&4294967295,b=x+(g<<15&4294967295|g>>>17),g=_+(x^(b|~y))+I[13]+1309151649&4294967295,_=b+(g<<21&4294967295|g>>>11),g=y+(b^(_|~x))+I[4]+4149444226&4294967295,y=_+(g<<6&4294967295|g>>>26),g=x+(_^(y|~b))+I[11]+3174756917&4294967295,x=y+(g<<10&4294967295|g>>>22),g=b+(y^(x|~_))+I[2]+718787259&4294967295,b=x+(g<<15&4294967295|g>>>17),g=_+(x^(b|~y))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(b+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+x&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const _=y-this.blockSize,I=this.C;let b=this.h,x=0;for(;x<y;){if(b==0)for(;x<=_;)i(this,w,x),x+=this.blockSize;if(typeof w=="string"){for(;x<y;)if(I[b++]=w.charCodeAt(x++),b==this.blockSize){i(this,I),b=0;break}}else for(;x<y;)if(I[b++]=w[x++],b==this.blockSize){i(this,I),b=0;break}}this.h=b,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)w[y++]=this.g[_]>>>I&255;return w};function o(w,y){var _=u;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=y(w)}function a(w,y){this.h=y;const _=[];let I=!0;for(let b=w.length-1;b>=0;b--){const x=w[b]|0;I&&x==y||(_[b]=x,I=!1)}this.g=_}var u={};function h(w){return-128<=w&&w<128?o(w,function(y){return new a([y|0],y<0?-1:0)}):new a([w|0],w<0?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return v;if(w<0)return j(f(-w));const y=[];let _=1;for(let I=0;w>=_;I++)y[I]=w/_|0,_*=4294967296;return new a(y,0)}function m(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return j(m(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(y,8));let I=v;for(let x=0;x<w.length;x+=8){var b=Math.min(8,w.length-x);const g=parseInt(w.substring(x,x+b),y);b<8?(b=f(Math.pow(y,b)),I=I.j(b).add(f(g))):(I=I.j(_),I=I.add(f(g)))}return I}var v=h(0),T=h(1),A=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-j(this).m();let w=0,y=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);w+=(I>=0?I:4294967296+I)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(N(this))return"-"+j(this).toString(w);const y=f(Math.pow(w,6));var _=this;let I="";for(;;){const b=ae(_,y).g;_=q(_,b.j(y));let x=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=b,k(_))return x+I;for(;x.length<6;)x="0"+x;I=x+I}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function N(w){return w.h==-1}n.l=function(w){return w=q(this,w),N(w)?-1:k(w)?0:1};function j(w){const y=w.g.length,_=[];for(let I=0;I<y;I++)_[I]=~w.g[I];return new a(_,~w.h).add(T)}n.abs=function(){return N(this)?j(this):this},n.add=function(w){const y=Math.max(this.g.length,w.g.length),_=[];let I=0;for(let b=0;b<=y;b++){let x=I+(this.i(b)&65535)+(w.i(b)&65535),g=(x>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);I=g>>>16,x&=65535,g&=65535,_[b]=g<<16|x}return new a(_,_[_.length-1]&-2147483648?-1:0)};function q(w,y){return w.add(j(y))}n.j=function(w){if(k(this)||k(w))return v;if(N(this))return N(w)?j(this).j(j(w)):j(j(this).j(w));if(N(w))return j(this.j(j(w)));if(this.l(A)<0&&w.l(A)<0)return f(this.m()*w.m());const y=this.g.length+w.g.length,_=[];for(var I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let b=0;b<w.g.length;b++){const x=this.i(I)>>>16,g=this.i(I)&65535,fe=w.i(b)>>>16,ze=w.i(b)&65535;_[2*I+2*b]+=g*ze,F(_,2*I+2*b),_[2*I+2*b+1]+=x*ze,F(_,2*I+2*b+1),_[2*I+2*b+1]+=g*fe,F(_,2*I+2*b+1),_[2*I+2*b+2]+=x*fe,F(_,2*I+2*b+2)}for(w=0;w<y;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=y;w<2*y;w++)_[w]=0;return new a(_,0)};function F(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function J(w,y){this.g=w,this.h=y}function ae(w,y){if(k(y))throw Error("division by zero");if(k(w))return new J(v,v);if(N(w))return y=ae(j(w),y),new J(j(y.g),j(y.h));if(N(y))return y=ae(w,j(y)),new J(j(y.g),y.h);if(w.g.length>30){if(N(w)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var _=T,I=y;I.l(w)<=0;)_=Z(_),I=Z(I);var b=ie(_,1),x=ie(I,1);for(I=ie(I,2),_=ie(_,2);!k(I);){var g=x.add(I);g.l(w)<=0&&(b=b.add(_),x=g),I=ie(I,1),_=ie(_,1)}return y=q(w,b.j(y)),new J(b,y)}for(b=v;w.l(y)>=0;){for(_=Math.max(1,Math.floor(w.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),x=f(_),g=x.j(y);N(g)||g.l(w)>0;)_-=I,x=f(_),g=x.j(y);k(x)&&(x=T),b=b.add(x),w=q(w,g)}return new J(b,w)}n.B=function(w){return ae(this,w).h},n.and=function(w){const y=Math.max(this.g.length,w.g.length),_=[];for(let I=0;I<y;I++)_[I]=this.i(I)&w.i(I);return new a(_,this.h&w.h)},n.or=function(w){const y=Math.max(this.g.length,w.g.length),_=[];for(let I=0;I<y;I++)_[I]=this.i(I)|w.i(I);return new a(_,this.h|w.h)},n.xor=function(w){const y=Math.max(this.g.length,w.g.length),_=[];for(let I=0;I<y;I++)_[I]=this.i(I)^w.i(I);return new a(_,this.h^w.h)};function Z(w){const y=w.g.length+1,_=[];for(let I=0;I<y;I++)_[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(_,w.h)}function ie(w,y){const _=y>>5;y%=32;const I=w.g.length-_,b=[];for(let x=0;x<I;x++)b[x]=y>0?w.i(x+_)>>>y|w.i(x+_+1)<<32-y:w.i(x+_);return new a(b,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Iu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,Pt=a}).apply(typeof Tc<"u"?Tc:typeof self<"u"?self:typeof window<"u"?window:{});var Gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tu,ir,xu,Xr,qs,Eu,Su,Au;(function(){var n,e=Object.defineProperty;function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gr=="object"&&Gr];for(var l=0;l<s.length;++l){var d=s[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(s,l){if(l)e:{var d=r;s=s.split(".");for(var p=0;p<s.length-1;p++){var E=s[p];if(!(E in d))break e;d=d[E]}s=s[s.length-1],p=d[s],l=l(p),l!=p&&l!=null&&e(d,s,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(l){var d=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&d.push([p,l[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function h(s,l,d){return s.call.apply(s.bind,arguments)}function f(s,l,d){return f=h,f.apply(null,arguments)}function m(s,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),s.apply(this,p)}}function v(s,l){function d(){}d.prototype=l.prototype,s.Z=l.prototype,s.prototype=new d,s.prototype.constructor=s,s.Ob=function(p,E,S){for(var P=Array(arguments.length-2),G=2;G<arguments.length;G++)P[G-2]=arguments[G];return l.prototype[E].apply(p,P)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function A(s){const l=s.length;if(l>0){const d=Array(l);for(let p=0;p<l;p++)d[p]=s[p];return d}return[]}function k(s,l){for(let p=1;p<arguments.length;p++){const E=arguments[p];var d=typeof E;if(d=d!="object"?d:E?Array.isArray(E)?"array":d:"null",d=="array"||d=="object"&&typeof E.length=="number"){d=s.length||0;const S=E.length||0;s.length=d+S;for(let P=0;P<S;P++)s[d+P]=E[P]}else s.push(E)}}class N{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(s){a.setTimeout(()=>{throw s},0)}function q(){var s=w;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class F{constructor(){this.h=this.g=null}add(l,d){const p=J.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var J=new N(()=>new ae,s=>s.reset());class ae{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,ie=!1,w=new F,y=()=>{const s=Promise.resolve(void 0);Z=()=>{s.then(_)}};function _(){for(var s;s=q();){try{s.h.call(s.g)}catch(d){j(d)}var l=J;l.j(s),l.h<100&&(l.h++,s.next=l.g,l.g=s)}ie=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const d=()=>{};a.addEventListener("test",d,l),a.removeEventListener("test",d,l)}catch{}return s}();function g(s){return/^[\s\xa0]*$/.test(s)}function fe(s,l){b.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,l)}v(fe,b),fe.prototype.init=function(s,l){const d=this.type=s.type,p=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget,l||(d=="mouseover"?l=s.fromElement:d=="mouseout"&&(l=s.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&fe.Z.h.call(this)},fe.prototype.h=function(){fe.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var ze="closure_listenable_"+(Math.random()*1e6|0),ve=0;function $(s,l,d,p,E){this.listener=s,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=E,this.key=++ve,this.da=this.fa=!1}function Ye(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Fe(s,l,d){for(const p in s)l.call(d,s[p],p,s)}function gt(s,l){for(const d in s)l.call(void 0,s[d],d,s)}function U(s){const l={};for(const d in s)l[d]=s[d];return l}const xe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function be(s,l){let d,p;for(let E=1;E<arguments.length;E++){p=arguments[E];for(d in p)s[d]=p[d];for(let S=0;S<xe.length;S++)d=xe[S],Object.prototype.hasOwnProperty.call(p,d)&&(s[d]=p[d])}}function ce(s){this.src=s,this.g={},this.h=0}ce.prototype.add=function(s,l,d,p,E){const S=s.toString();s=this.g[S],s||(s=this.g[S]=[],this.h++);const P=Zi(s,l,p,E);return P>-1?(l=s[P],d||(l.fa=!1)):(l=new $(l,this.src,S,!!p,E),l.fa=d,s.push(l)),l};function Xi(s,l){const d=l.type;if(d in s.g){var p=s.g[d],E=Array.prototype.indexOf.call(p,l,void 0),S;(S=E>=0)&&Array.prototype.splice.call(p,E,1),S&&(Ye(l),s.g[d].length==0&&(delete s.g[d],s.h--))}}function Zi(s,l,d,p){for(let E=0;E<s.length;++E){const S=s[E];if(!S.da&&S.listener==l&&S.capture==!!d&&S.ha==p)return E}return-1}var es="closure_lm_"+(Math.random()*1e6|0),ts={};function da(s,l,d,p,E){if(Array.isArray(l)){for(let S=0;S<l.length;S++)da(s,l[S],d,p,E);return null}return d=ma(d),s&&s[ze]?s.J(l,d,u(p)?!!p.capture:!1,E):Jd(s,l,d,!1,p,E)}function Jd(s,l,d,p,E,S){if(!l)throw Error("Invalid event type");const P=u(E)?!!E.capture:!!E;let G=rs(s);if(G||(s[es]=G=new ce(s)),d=G.add(l,d,p,P,S),d.proxy)return d;if(p=Xd(),d.proxy=p,p.src=s,p.listener=d,s.addEventListener)x||(E=P),E===void 0&&(E=!1),s.addEventListener(l.toString(),p,E);else if(s.attachEvent)s.attachEvent(pa(l.toString()),p);else if(s.addListener&&s.removeListener)s.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Xd(){function s(d){return l.call(s.src,s.listener,d)}const l=Zd;return s}function fa(s,l,d,p,E){if(Array.isArray(l))for(var S=0;S<l.length;S++)fa(s,l[S],d,p,E);else p=u(p)?!!p.capture:!!p,d=ma(d),s&&s[ze]?(s=s.i,S=String(l).toString(),S in s.g&&(l=s.g[S],d=Zi(l,d,p,E),d>-1&&(Ye(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete s.g[S],s.h--)))):s&&(s=rs(s))&&(l=s.g[l.toString()],s=-1,l&&(s=Zi(l,d,p,E)),(d=s>-1?l[s]:null)&&ns(d))}function ns(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[ze])Xi(l.i,s);else{var d=s.type,p=s.proxy;l.removeEventListener?l.removeEventListener(d,p,s.capture):l.detachEvent?l.detachEvent(pa(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=rs(l))?(Xi(d,s),d.h==0&&(d.src=null,l[es]=null)):Ye(s)}}}function pa(s){return s in ts?ts[s]:ts[s]="on"+s}function Zd(s,l){if(s.da)s=!0;else{l=new fe(l,this);const d=s.listener,p=s.ha||s.src;s.fa&&ns(s),s=d.call(p,l)}return s}function rs(s){return s=s[es],s instanceof ce?s:null}var is="__closure_events_fn_"+(Math.random()*1e9>>>0);function ma(s){return typeof s=="function"?s:(s[is]||(s[is]=function(l){return s.handleEvent(l)}),s[is])}function Ee(){I.call(this),this.i=new ce(this),this.M=this,this.G=null}v(Ee,I),Ee.prototype[ze]=!0,Ee.prototype.removeEventListener=function(s,l,d,p){fa(this,s,l,d,p)};function Pe(s,l){var d,p=s.G;if(p)for(d=[];p;p=p.G)d.push(p);if(s=s.M,p=l.type||l,typeof l=="string")l=new b(l,s);else if(l instanceof b)l.target=l.target||s;else{var E=l;l=new b(p,s),be(l,E)}E=!0;let S,P;if(d)for(P=d.length-1;P>=0;P--)S=l.g=d[P],E=Dr(S,p,!0,l)&&E;if(S=l.g=s,E=Dr(S,p,!0,l)&&E,E=Dr(S,p,!1,l)&&E,d)for(P=0;P<d.length;P++)S=l.g=d[P],E=Dr(S,p,!1,l)&&E}Ee.prototype.N=function(){if(Ee.Z.N.call(this),this.i){var s=this.i;for(const l in s.g){const d=s.g[l];for(let p=0;p<d.length;p++)Ye(d[p]);delete s.g[l],s.h--}}this.G=null},Ee.prototype.J=function(s,l,d,p){return this.i.add(String(s),l,!1,d,p)},Ee.prototype.K=function(s,l,d,p){return this.i.add(String(s),l,!0,d,p)};function Dr(s,l,d,p){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();let E=!0;for(let S=0;S<l.length;++S){const P=l[S];if(P&&!P.da&&P.capture==d){const G=P.listener,pe=P.ha||P.src;P.fa&&Xi(s.i,P),E=G.call(pe,p)!==!1&&E}}return E&&!p.defaultPrevented}function ef(s,l){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=f(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(s,l||0)}function ga(s){s.g=ef(()=>{s.g=null,s.i&&(s.i=!1,ga(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class tf extends I{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ga(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Un(s){I.call(this),this.h=s,this.g={}}v(Un,I);var ya=[];function _a(s){Fe(s.g,function(l,d){this.g.hasOwnProperty(d)&&ns(l)},s),s.g={}}Un.prototype.N=function(){Un.Z.N.call(this),_a(this)},Un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ss=a.JSON.stringify,nf=a.JSON.parse,rf=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function va(){}function ba(){}var Bn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function os(){b.call(this,"d")}v(os,b);function as(){b.call(this,"c")}v(as,b);var Bt={},wa=null;function Vr(){return wa=wa||new Ee}Bt.Ia="serverreachability";function Ia(s){b.call(this,Bt.Ia,s)}v(Ia,b);function Wn(s){const l=Vr();Pe(l,new Ia(l))}Bt.STAT_EVENT="statevent";function Ta(s,l){b.call(this,Bt.STAT_EVENT,s),this.stat=l}v(Ta,b);function Ne(s){const l=Vr();Pe(l,new Ta(l,s))}Bt.Ja="timingevent";function xa(s,l){b.call(this,Bt.Ja,s),this.size=l}v(xa,b);function zn(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},l)}function qn(){this.g=!0}qn.prototype.ua=function(){this.g=!1};function sf(s,l,d,p,E,S){s.info(function(){if(s.g)if(S){var P="",G=S.split("&");for(let ee=0;ee<G.length;ee++){var pe=G[ee].split("=");if(pe.length>1){const ye=pe[0];pe=pe[1];const Xe=ye.split("_");P=Xe.length>=2&&Xe[1]=="type"?P+(ye+"="+pe+"&"):P+(ye+"=redacted&")}}}else P=null;else P=S;return"XMLHTTP REQ ("+p+") [attempt "+E+"]: "+l+`
`+d+`
`+P})}function of(s,l,d,p,E,S,P){s.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+E+"]: "+l+`
`+d+`
`+S+" "+P})}function hn(s,l,d,p){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+cf(s,d)+(p?" "+p:"")})}function af(s,l){s.info(function(){return"TIMEOUT: "+l})}qn.prototype.info=function(){};function cf(s,l){if(!s.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(s=0;s<S.length;s++)if(Array.isArray(S[s])){var d=S[s];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var E=p[0];if(E!="noop"&&E!="stop"&&E!="close")for(let P=1;P<p.length;P++)p[P]=""}}}}return ss(S)}catch{return l}}var Or={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ea={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Sa;function cs(){}v(cs,va),cs.prototype.g=function(){return new XMLHttpRequest},Sa=new cs;function $n(s){return encodeURIComponent(String(s))}function lf(s){var l=1;s=s.split(":");const d=[];for(;l>0&&s.length;)d.push(s.shift()),l--;return s.length&&d.push(s.join(":")),d}function yt(s,l,d,p){this.j=s,this.i=l,this.l=d,this.S=p||1,this.V=new Un(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Aa}function Aa(){this.i=null,this.g="",this.h=!1}var Ra={},ls={};function us(s,l,d){s.M=1,s.A=Lr(Je(l)),s.u=d,s.R=!0,Ca(s,null)}function Ca(s,l){s.F=Date.now(),Mr(s),s.B=Je(s.A);var d=s.B,p=s.S;Array.isArray(p)||(p=[String(p)]),Wa(d.i,"t",p),s.C=0,d=s.j.L,s.h=new Aa,s.g=oc(s.j,d?l:null,!s.u),s.P>0&&(s.O=new tf(f(s.Y,s,s.g),s.P)),l=s.V,d=s.g,p=s.ba;var E="readystatechange";Array.isArray(E)||(E&&(ya[0]=E.toString()),E=ya);for(let S=0;S<E.length;S++){const P=da(d,E[S],p||l.handleEvent,!1,l.h||l);if(!P)break;l.g[P.key]=P}l=s.J?U(s.J):{},s.u?(s.v||(s.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,l)):(s.v="GET",s.g.ea(s.B,s.v,null,l)),Wn(),sf(s.i,s.v,s.B,s.l,s.S,s.u)}yt.prototype.ba=function(s){s=s.target;const l=this.O;l&&bt(s)==3?l.j():this.Y(s)},yt.prototype.Y=function(s){try{if(s==this.g)e:{const G=bt(this.g),pe=this.g.ya(),ee=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||Qa(this.g)))){this.K||G!=4||pe==7||(pe==8||ee<=0?Wn(3):Wn(2)),hs(this);var l=this.g.ca();this.X=l;var d=uf(this);if(this.o=l==200,of(this.i,this.v,this.B,this.l,this.S,G,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,E=this.g;if((p=E.g?E.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(p)){var S=p;break t}}S=null}if(s=S)hn(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ds(this,s);else{this.o=!1,this.m=3,Ne(12),Wt(this),Gn(this);break e}}if(this.R){s=!0;let ye;for(;!this.K&&this.C<d.length;)if(ye=hf(this,d),ye==ls){G==4&&(this.m=4,Ne(14),s=!1),hn(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==Ra){this.m=4,Ne(15),hn(this.i,this.l,d,"[Invalid Chunk]"),s=!1;break}else hn(this.i,this.l,ye,null),ds(this,ye);if(ka(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||d.length!=0||this.h.h||(this.m=1,Ne(16),s=!1),this.o=this.o&&s,!s)hn(this.i,this.l,d,"[Invalid Chunked Response]"),Wt(this),Gn(this);else if(d.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),bs(P),P.P=!0,Ne(11))}}else hn(this.i,this.l,d,null),ds(this,d);G==4&&Wt(this),this.o&&!this.K&&(G==4?nc(this.j,this):(this.o=!1,Mr(this)))}else Ef(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ne(12)):(this.m=0,Ne(13)),Wt(this),Gn(this)}}}catch{}finally{}};function uf(s){if(!ka(s))return s.g.la();const l=Qa(s.g);if(l==="")return"";let d="";const p=l.length,E=bt(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return Wt(s),Gn(s),"";s.h.i=new a.TextDecoder}for(let S=0;S<p;S++)s.h.h=!0,d+=s.h.i.decode(l[S],{stream:!(E&&S==p-1)});return l.length=0,s.h.g+=d,s.C=0,s.h.g}function ka(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function hf(s,l){var d=s.C,p=l.indexOf(`
`,d);return p==-1?ls:(d=Number(l.substring(d,p)),isNaN(d)?Ra:(p+=1,p+d>l.length?ls:(l=l.slice(p,p+d),s.C=p+d,l)))}yt.prototype.cancel=function(){this.K=!0,Wt(this)};function Mr(s){s.T=Date.now()+s.H,Pa(s,s.H)}function Pa(s,l){if(s.D!=null)throw Error("WatchDog timer not null");s.D=zn(f(s.aa,s),l)}function hs(s){s.D&&(a.clearTimeout(s.D),s.D=null)}yt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(af(this.i,this.B),this.M!=2&&(Wn(),Ne(17)),Wt(this),this.m=2,Gn(this)):Pa(this,this.T-s)};function Gn(s){s.j.I==0||s.K||nc(s.j,s)}function Wt(s){hs(s);var l=s.O;l&&typeof l.dispose=="function"&&l.dispose(),s.O=null,_a(s.V),s.g&&(l=s.g,s.g=null,l.abort(),l.dispose())}function ds(s,l){try{var d=s.j;if(d.I!=0&&(d.g==s||fs(d.h,s))){if(!s.L&&fs(d.h,s)&&d.I==3){try{var p=d.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var E=p;if(E[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<s.F)zr(d),Br(d);else break e;vs(d),Ne(18)}}else d.xa=E[1],0<d.xa-d.K&&E[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=zn(f(d.Va,d),6e3));Da(d.h)<=1&&d.ta&&(d.ta=void 0)}else qt(d,11)}else if((s.L||d.g==s)&&zr(d),!g(l))for(E=d.Ba.g.parse(l),l=0;l<E.length;l++){let ee=E[l];const ye=ee[0];if(!(ye<=d.K))if(d.K=ye,ee=ee[1],d.I==2)if(ee[0]=="c"){d.M=ee[1],d.ba=ee[2];const Xe=ee[3];Xe!=null&&(d.ka=Xe,d.j.info("VER="+d.ka));const $t=ee[4];$t!=null&&(d.za=$t,d.j.info("SVER="+d.za));const wt=ee[5];wt!=null&&typeof wt=="number"&&wt>0&&(p=1.5*wt,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const It=s.g;if(It){const $r=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($r){var S=p.h;S.g||$r.indexOf("spdy")==-1&&$r.indexOf("quic")==-1&&$r.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ps(S,S.h),S.h=null))}if(p.G){const ws=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;ws&&(p.wa=ws,ne(p.J,p.G,ws))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-s.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var P=s;if(p.na=sc(p,p.L?p.ba:null,p.W),P.L){Va(p.h,P);var G=P,pe=p.O;pe&&(G.H=pe),G.D&&(hs(G),Mr(G)),p.g=P}else ec(p);d.i.length>0&&Wr(d)}else ee[0]!="stop"&&ee[0]!="close"||qt(d,7);else d.I==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?qt(d,7):_s(d):ee[0]!="noop"&&d.l&&d.l.qa(ee),d.A=0)}}Wn(4)}catch{}}var df=class{constructor(s,l){this.g=s,this.map=l}};function Na(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ja(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Da(s){return s.h?1:s.g?s.g.size:0}function fs(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function ps(s,l){s.g?s.g.add(l):s.h=l}function Va(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}Na.prototype.cancel=function(){if(this.i=Oa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Oa(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const d of s.g.values())l=l.concat(d.G);return l}return A(s.i)}var Ma=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ff(s,l){if(s){s=s.split("&");for(let d=0;d<s.length;d++){const p=s[d].indexOf("=");let E,S=null;p>=0?(E=s[d].substring(0,p),S=s[d].substring(p+1)):E=s[d],l(E,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function _t(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;s instanceof _t?(this.l=s.l,Hn(this,s.j),this.o=s.o,this.g=s.g,Kn(this,s.u),this.h=s.h,ms(this,za(s.i)),this.m=s.m):s&&(l=String(s).match(Ma))?(this.l=!1,Hn(this,l[1]||"",!0),this.o=Qn(l[2]||""),this.g=Qn(l[3]||"",!0),Kn(this,l[4]),this.h=Qn(l[5]||"",!0),ms(this,l[6]||"",!0),this.m=Qn(l[7]||"")):(this.l=!1,this.i=new Jn(null,this.l))}_t.prototype.toString=function(){const s=[];var l=this.j;l&&s.push(Yn(l,La,!0),":");var d=this.g;return(d||l=="file")&&(s.push("//"),(l=this.o)&&s.push(Yn(l,La,!0),"@"),s.push($n(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&s.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&s.push("/"),s.push(Yn(d,d.charAt(0)=="/"?gf:mf,!0))),(d=this.i.toString())&&s.push("?",d),(d=this.m)&&s.push("#",Yn(d,_f)),s.join("")},_t.prototype.resolve=function(s){const l=Je(this);let d=!!s.j;d?Hn(l,s.j):d=!!s.o,d?l.o=s.o:d=!!s.g,d?l.g=s.g:d=s.u!=null;var p=s.h;if(d)Kn(l,s.u);else if(d=!!s.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var E=l.h.lastIndexOf("/");E!=-1&&(p=l.h.slice(0,E+1)+p)}if(E=p,E==".."||E==".")p="";else if(E.indexOf("./")!=-1||E.indexOf("/.")!=-1){p=E.lastIndexOf("/",0)==0,E=E.split("/");const S=[];for(let P=0;P<E.length;){const G=E[P++];G=="."?p&&P==E.length&&S.push(""):G==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),p&&P==E.length&&S.push("")):(S.push(G),p=!0)}p=S.join("/")}else p=E}return d?l.h=p:d=s.i.toString()!=="",d?ms(l,za(s.i)):d=!!s.m,d&&(l.m=s.m),l};function Je(s){return new _t(s)}function Hn(s,l,d){s.j=d?Qn(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function Kn(s,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);s.u=l}else s.u=null}function ms(s,l,d){l instanceof Jn?(s.i=l,vf(s.i,s.l)):(d||(l=Yn(l,yf)),s.i=new Jn(l,s.l))}function ne(s,l,d){s.i.set(l,d)}function Lr(s){return ne(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Qn(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Yn(s,l,d){return typeof s=="string"?(s=encodeURI(s).replace(l,pf),d&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function pf(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var La=/[#\/\?@]/g,mf=/[#\?:]/g,gf=/[#\?]/g,yf=/[#\?@]/g,_f=/#/g;function Jn(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function zt(s){s.g||(s.g=new Map,s.h=0,s.i&&ff(s.i,function(l,d){s.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Jn.prototype,n.add=function(s,l){zt(this),this.i=null,s=dn(this,s);let d=this.g.get(s);return d||this.g.set(s,d=[]),d.push(l),this.h+=1,this};function Fa(s,l){zt(s),l=dn(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Ua(s,l){return zt(s),l=dn(s,l),s.g.has(l)}n.forEach=function(s,l){zt(this),this.g.forEach(function(d,p){d.forEach(function(E){s.call(l,E,p,this)},this)},this)};function Ba(s,l){zt(s);let d=[];if(typeof l=="string")Ua(s,l)&&(d=d.concat(s.g.get(dn(s,l))));else for(s=Array.from(s.g.values()),l=0;l<s.length;l++)d=d.concat(s[l]);return d}n.set=function(s,l){return zt(this),this.i=null,s=dn(this,s),Ua(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=Ba(this,s),s.length>0?String(s[0]):l):l};function Wa(s,l,d){Fa(s,l),d.length>0&&(s.i=null,s.g.set(dn(s,l),A(d)),s.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var d=l[p];const E=$n(d);d=Ba(this,d);for(let S=0;S<d.length;S++){let P=E;d[S]!==""&&(P+="="+$n(d[S])),s.push(P)}}return this.i=s.join("&")};function za(s){const l=new Jn;return l.i=s.i,s.g&&(l.g=new Map(s.g),l.h=s.h),l}function dn(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function vf(s,l){l&&!s.j&&(zt(s),s.i=null,s.g.forEach(function(d,p){const E=p.toLowerCase();p!=E&&(Fa(this,p),Wa(this,E,d))},s)),s.j=l}function bf(s,l){const d=new qn;if(a.Image){const p=new Image;p.onload=m(vt,d,"TestLoadImage: loaded",!0,l,p),p.onerror=m(vt,d,"TestLoadImage: error",!1,l,p),p.onabort=m(vt,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=m(vt,d,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=s}else l(!1)}function wf(s,l){const d=new qn,p=new AbortController,E=setTimeout(()=>{p.abort(),vt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:p.signal}).then(S=>{clearTimeout(E),S.ok?vt(d,"TestPingServer: ok",!0,l):vt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(E),vt(d,"TestPingServer: error",!1,l)})}function vt(s,l,d,p,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),p(d)}catch{}}function If(){this.g=new rf}function gs(s){this.i=s.Sb||null,this.h=s.ab||!1}v(gs,va),gs.prototype.g=function(){return new Fr(this.i,this.h)};function Fr(s,l){Ee.call(this),this.H=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}v(Fr,Ee),n=Fr.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=l,this.readyState=1,Zn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(l.body=s),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xn(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;qa(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function qa(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?Xn(this):Zn(this),this.readyState==3&&qa(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Xn(this))},n.Na=function(s){this.g&&(this.response=s,Xn(this))},n.ga=function(){this.g&&Xn(this)};function Xn(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Zn(s)}n.setRequestHeader=function(s,l){this.A.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,s.push(d[0]+": "+d[1]),d=l.next();return s.join(`\r
`)};function Zn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function $a(s){let l="";return Fe(s,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function ys(s,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=$a(d),typeof s=="string"?d!=null&&$n(d):ne(s,l,d))}function oe(s){Ee.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}v(oe,Ee);var Tf=/^https?$/i,xf=["POST","PUT"];n=oe.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Sa.g(),this.g.onreadystatechange=T(f(this.Ca,this));try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(S){Ga(this,S);return}if(s=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var E in p)d.set(E,p[E]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())d.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),E=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(xf,l,void 0)>=0)||p||E||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,P]of d)this.g.setRequestHeader(S,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(S){Ga(this,S)}};function Ga(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.o=5,Ha(s),Ur(s)}function Ha(s){s.A||(s.A=!0,Pe(s,"complete"),Pe(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,Pe(this,"complete"),Pe(this,"abort"),Ur(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ur(this,!0)),oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ka(this):this.Xa())},n.Xa=function(){Ka(this)};function Ka(s){if(s.h&&typeof o<"u"){if(s.v&&bt(s)==4)setTimeout(s.Ca.bind(s),0);else if(Pe(s,"readystatechange"),bt(s)==4){s.h=!1;try{const S=s.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=S===0){let P=String(s.D).match(Ma)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),p=!Tf.test(P?P.toLowerCase():"")}d=p}if(d)Pe(s,"complete"),Pe(s,"success");else{s.o=6;try{var E=bt(s)>2?s.g.statusText:""}catch{E=""}s.l=E+" ["+s.ca()+"]",Ha(s)}}finally{Ur(s)}}}}function Ur(s,l){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const d=s.g;s.g=null,l||Pe(s,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function bt(s){return s.g?s.g.readyState:0}n.ca=function(){try{return bt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),nf(l)}};function Qa(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ef(s){const l={};s=(s.g&&bt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<s.length;p++){if(g(s[p]))continue;var d=lf(s[p]);const E=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=l[E]||[];l[E]=S,S.push(d)}gt(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function er(s,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[s]||l}function Ya(s){this.za=0,this.i=[],this.j=new qn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=er("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=er("baseRetryDelayMs",5e3,s),this.Za=er("retryDelaySeedMs",1e4,s),this.Ta=er("forwardChannelMaxRetries",2,s),this.va=er("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Na(s&&s.concurrentRequestLimit),this.Ba=new If,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ya.prototype,n.ka=8,n.I=1,n.connect=function(s,l,d,p){Ne(0),this.W=s,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=sc(this,null,this.W),Wr(this)};function _s(s){if(Ja(s),s.I==3){var l=s.V++,d=Je(s.J);if(ne(d,"SID",s.M),ne(d,"RID",l),ne(d,"TYPE","terminate"),tr(s,d),l=new yt(s,s.j,l),l.M=2,l.A=Lr(Je(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=l.A,d=!0),d||(l.g=oc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Mr(l)}ic(s)}function Br(s){s.g&&(bs(s),s.g.cancel(),s.g=null)}function Ja(s){Br(s),s.v&&(a.clearTimeout(s.v),s.v=null),zr(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function Wr(s){if(!ja(s.h)&&!s.m){s.m=!0;var l=s.Ea;Z||y(),ie||(Z(),ie=!0),w.add(l,s),s.D=0}}function Sf(s,l){return Da(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=l.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=zn(f(s.Ea,s,l),rc(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const E=new yt(this,this.j,s);let S=this.o;if(this.U&&(S?(S=U(S),be(S,this.U)):S=this.U),this.u!==null||this.R||(E.J=S,S=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Za(this,E,l),d=Je(this.J),ne(d,"RID",s),ne(d,"CVER",22),this.G&&ne(d,"X-HTTP-Session-Id",this.G),tr(this,d),S&&(this.R?l="headers="+$n($a(S))+"&"+l:this.u&&ys(d,this.u,S)),ps(this.h,E),this.Ra&&ne(d,"TYPE","init"),this.S?(ne(d,"$req",l),ne(d,"SID","null"),E.U=!0,us(E,d,null)):us(E,d,l),this.I=2}}else this.I==3&&(s?Xa(this,s):this.i.length==0||ja(this.h)||Xa(this))};function Xa(s,l){var d;l?d=l.l:d=s.V++;const p=Je(s.J);ne(p,"SID",s.M),ne(p,"RID",d),ne(p,"AID",s.K),tr(s,p),s.u&&s.o&&ys(p,s.u,s.o),d=new yt(s,s.j,d,s.D+1),s.u===null&&(d.J=s.o),l&&(s.i=l.G.concat(s.i)),l=Za(s,d,1e3),d.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),ps(s.h,d),us(d,p,l)}function tr(s,l){s.H&&Fe(s.H,function(d,p){ne(l,p,d)}),s.l&&Fe({},function(d,p){ne(l,p,d)})}function Za(s,l,d){d=Math.min(s.i.length,d);const p=s.l?f(s.l.Ka,s.l,s):null;e:{var E=s.i;let G=-1;for(;;){const pe=["count="+d];G==-1?d>0?(G=E[0].g,pe.push("ofs="+G)):G=0:pe.push("ofs="+G);let ee=!0;for(let ye=0;ye<d;ye++){var S=E[ye].g;const Xe=E[ye].map;if(S-=G,S<0)G=Math.max(0,E[ye].g-100),ee=!1;else try{S="req"+S+"_"||"";try{var P=Xe instanceof Map?Xe:Object.entries(Xe);for(const[$t,wt]of P){let It=wt;u(wt)&&(It=ss(wt)),pe.push(S+$t+"="+encodeURIComponent(It))}}catch($t){throw pe.push(S+"type="+encodeURIComponent("_badmap")),$t}}catch{p&&p(Xe)}}if(ee){P=pe.join("&");break e}}P=void 0}return s=s.i.splice(0,d),l.G=s,P}function ec(s){if(!s.g&&!s.v){s.Y=1;var l=s.Da;Z||y(),ie||(Z(),ie=!0),w.add(l,s),s.A=0}}function vs(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=zn(f(s.Da,s),rc(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,tc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=zn(f(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ne(10),Br(this),tc(this))};function bs(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function tc(s){s.g=new yt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var l=Je(s.na);ne(l,"RID","rpc"),ne(l,"SID",s.M),ne(l,"AID",s.K),ne(l,"CI",s.F?"0":"1"),!s.F&&s.ia&&ne(l,"TO",s.ia),ne(l,"TYPE","xmlhttp"),tr(s,l),s.u&&s.o&&ys(l,s.u,s.o),s.O&&(s.g.H=s.O);var d=s.g;s=s.ba,d.M=1,d.A=Lr(Je(l)),d.u=null,d.R=!0,Ca(d,s)}n.Va=function(){this.C!=null&&(this.C=null,Br(this),vs(this),Ne(19))};function zr(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function nc(s,l){var d=null;if(s.g==l){zr(s),bs(s),s.g=null;var p=2}else if(fs(s.h,l))d=l.G,Va(s.h,l),p=1;else return;if(s.I!=0){if(l.o)if(p==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var E=s.D;p=Vr(),Pe(p,new xa(p,d)),Wr(s)}else ec(s);else if(E=l.m,E==3||E==0&&l.X>0||!(p==1&&Sf(s,l)||p==2&&vs(s)))switch(d&&d.length>0&&(l=s.h,l.i=l.i.concat(d)),E){case 1:qt(s,5);break;case 4:qt(s,10);break;case 3:qt(s,6);break;default:qt(s,2)}}}function rc(s,l){let d=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(d*=2),d*l}function qt(s,l){if(s.j.info("Error code "+l),l==2){var d=f(s.bb,s),p=s.Ua;const E=!p;p=new _t(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Hn(p,"https"),Lr(p),E?bf(p.toString(),d):wf(p.toString(),d)}else Ne(2);s.I=0,s.l&&s.l.pa(l),ic(s),Ja(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function ic(s){if(s.I=0,s.ja=[],s.l){const l=Oa(s.h);(l.length!=0||s.i.length!=0)&&(k(s.ja,l),k(s.ja,s.i),s.h.i.length=0,A(s.i),s.i.length=0),s.l.oa()}}function sc(s,l,d){var p=d instanceof _t?Je(d):new _t(d);if(p.g!="")l&&(p.g=l+"."+p.g),Kn(p,p.u);else{var E=a.location;p=E.protocol,l=l?l+"."+E.hostname:E.hostname,E=+E.port;const S=new _t(null);p&&Hn(S,p),l&&(S.g=l),E&&Kn(S,E),d&&(S.h=d),p=S}return d=s.G,l=s.wa,d&&l&&ne(p,d,l),ne(p,"VER",s.ka),tr(s,p),p}function oc(s,l,d){if(l&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Aa&&!s.ma?new oe(new gs({ab:d})):new oe(s.ma),l.Fa(s.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ac(){}n=ac.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function qr(){}qr.prototype.g=function(s,l){return new Ve(s,l)};function Ve(s,l){Ee.call(this),this.g=new Ya(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(s?s["X-WebChannel-Client-Profile"]=l.sa:s={"X-WebChannel-Client-Profile":l.sa}),this.g.U=s,(s=l&&l.Qb)&&!g(s)&&(this.g.u=s),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!g(l)&&(this.g.G=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new fn(this)}v(Ve,Ee),Ve.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ve.prototype.close=function(){_s(this.g)},Ve.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var d={};d.__data__=s,s=d}else this.v&&(d={},d.__data__=ss(s),s=d);l.i.push(new df(l.Ya++,s)),l.I==3&&Wr(l)},Ve.prototype.N=function(){this.g.l=null,delete this.j,_s(this.g),delete this.g,Ve.Z.N.call(this)};function cc(s){os.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const d in l){s=d;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}v(cc,os);function lc(){as.call(this),this.status=1}v(lc,as);function fn(s){this.g=s}v(fn,ac),fn.prototype.ra=function(){Pe(this.g,"a")},fn.prototype.qa=function(s){Pe(this.g,new cc(s))},fn.prototype.pa=function(s){Pe(this.g,new lc)},fn.prototype.oa=function(){Pe(this.g,"b")},qr.prototype.createWebChannel=qr.prototype.g,Ve.prototype.send=Ve.prototype.o,Ve.prototype.open=Ve.prototype.m,Ve.prototype.close=Ve.prototype.close,Au=function(){return new qr},Su=function(){return Vr()},Eu=Bt,qs={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Or.NO_ERROR=0,Or.TIMEOUT=8,Or.HTTP_ERROR=6,Xr=Or,Ea.COMPLETE="complete",xu=Ea,ba.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",Ee.prototype.listen=Ee.prototype.J,ir=ba,oe.prototype.listenOnce=oe.prototype.K,oe.prototype.getLastError=oe.prototype.Ha,oe.prototype.getLastErrorCode=oe.prototype.ya,oe.prototype.getStatus=oe.prototype.ca,oe.prototype.getResponseJson=oe.prototype.La,oe.prototype.getResponseText=oe.prototype.la,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Fa,Tu=oe}).apply(typeof Gr<"u"?Gr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn="12.12.0";function bm(n){Dn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new ji("@firebase/firestore");function pn(){return Xt.logLevel}function V(n,...e){if(Xt.logLevel<=H.DEBUG){const t=e.map(po);Xt.debug(`Firestore (${Dn}): ${n}`,...t)}}function dt(n,...e){if(Xt.logLevel<=H.ERROR){const t=e.map(po);Xt.error(`Firestore (${Dn}): ${n}`,...t)}}function Zt(n,...e){if(Xt.logLevel<=H.WARN){const t=e.map(po);Xt.warn(`Firestore (${Dn}): ${n}`,...t)}}function po(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ru(n,r,t)}function Ru(n,e,t){let r=`FIRESTORE (${Dn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw dt(r),new Error(r)}function X(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Ru(e,i,r)}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Qe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ae.UNAUTHENTICATED))}shutdown(){}}class Im{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Tm{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Cu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Ae(e)}}class xm{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Em{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new xm(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sm{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,et(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new xc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Am(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function K(n,e){return n<e?-1:n>e?1:0}function $s(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),o=e.charAt(r);if(i!==o)return As(i)===As(o)?K(i,o):As(i)?1:-1}return K(n.length,e.length)}const Rm=55296,Cm=57343;function As(n){const e=n.charCodeAt(0);return e>=Rm&&e<=Cm}function An(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="__name__";class Ze{constructor(e,t,r){t===void 0?t=0:t>e.length&&L(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&L(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ze?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Ze.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return K(e.length,t.length)}static compareSegments(e,t){const r=Ze.isNumericId(e),i=Ze.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ze.extractNumericId(e).compare(Ze.extractNumericId(t)):$s(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pt.fromString(e.substring(4,e.length-2))}}class te extends Ze{construct(e,t,r){return new te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new te(t)}static emptyPath(){return new te([])}}const km=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends Ze{construct(e,t,r){return new Ie(e,t,r)}static isValidIdentifier(e){return km.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ec}static keyField(){return new Ie([Ec])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new D(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new D(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new D(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(t)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(te.fromString(e))}static fromName(e){return new M(te.fromString(e).popFirst(5))}static empty(){return new M(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new te(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n,e,t){if(!t)throw new D(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Pm(n,e,t,r){if(e===!0&&r===!0)throw new D(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sc(n){if(!M.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ac(n){if(M.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Di(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function cr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Di(n);throw new D(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(n,e){const t={typeString:n};return e&&(t.value=e),t}function Sr(n,e){if(!Pu(n))throw new D(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new D(R.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=-62135596800,Cc=1e6;class re{static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Cc);return new re(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rc)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cc}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sr(e,re._jsonSchema))return new re(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}re._jsonSchemaVersion="firestore/timestamp/1.0",re._jsonSchema={type:de("string",re._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new re(0,0))}static max(){return new W(new re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=-1;function Nm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new re(t+1,0):new re(t,r));return new Dt(i,M.empty(),e)}function jm(n){return new Dt(n.readTime,n.key,mr)}class Dt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Dt(W.min(),M.empty(),mr)}static max(){return new Dt(W.max(),M.empty(),mr)}}function Dm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Om{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==Vm)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(i=>i?C.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new C((r,i)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;t(e[f]).next(m=>{a[f]=m,++u,u===o&&r(a)},m=>i(m))}})}static doWhile(e,t){return new C((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function Mm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function On(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Vi.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=-1;function Oi(n){return n==null}function ui(n){return n===0&&1/n==-1/0}function Lm(n){return typeof n=="number"&&Number.isInteger(n)&&!ui(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="";function Fm(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=kc(e)),e=Um(n.get(t),e);return kc(e)}function Um(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case Nu:t+="";break;default:t+=o}}return t}function kc(n){return n+Nu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function an(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ju(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hr(this.root,e,this.comparator,!0)}}class Hr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??we.RED,this.left=i??we.EMPTY,this.right=o??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new we(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return we.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw L(27949);return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nc(this.data.getIterator())}getIteratorFrom(e){return new Nc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class Nc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new qe([])}unionWith(e){let t=new ge(Ie.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return An(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Du("Invalid base64 string: "+o):o}}(e);return new Te(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const Bm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vt(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=Bm.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ot(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="server_timestamp",Ou="__type__",Mu="__previous_value__",Lu="__local_write_time__";function yo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ou])==null?void 0:r.stringValue)===Vu}function Mi(n){const e=n.mapValue.fields[Mu];return yo(e)?Mi(e):e}function gr(n){const e=Vt(n.mapValue.fields[Lu].timestampValue);return new re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t,r,i,o,a,u,h,f,m,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m,this.apiKey=v}}const hi="(default)";class yr{constructor(e,t){this.projectId=e,this.database=t||hi}static empty(){return new yr("","")}get isDefaultDatabase(){return this.database===hi}isEqual(e){return e instanceof yr&&e.projectId===this.projectId&&e.database===this.database}}function zm(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new D(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yr(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="__type__",qm="__max__",Kr={mapValue:{}},Uu="__vector__",di="value";function Mt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?yo(n)?4:Gm(n)?9007199254740991:$m(n)?10:11:L(28295,{value:n})}function at(n,e){if(n===e)return!0;const t=Mt(n);if(t!==Mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gr(n).isEqual(gr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Vt(i.timestampValue),u=Vt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return Ot(i.bytesValue).isEqual(Ot(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return le(i.geoPointValue.latitude)===le(o.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return le(i.integerValue)===le(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=le(i.doubleValue),u=le(o.doubleValue);return a===u?ui(a)===ui(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return An(n.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Pc(a)!==Pc(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!at(a[h],u[h])))return!1;return!0}(n,e);default:return L(52216,{left:n})}}function _r(n,e){return(n.values||[]).find(t=>at(t,e))!==void 0}function Rn(n,e){if(n===e)return 0;const t=Mt(n),r=Mt(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=le(o.integerValue||o.doubleValue),h=le(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return jc(n.timestampValue,e.timestampValue);case 4:return jc(gr(n),gr(e));case 5:return $s(n.stringValue,e.stringValue);case 6:return function(o,a){const u=Ot(o),h=Ot(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let f=0;f<u.length&&f<h.length;f++){const m=K(u[f],h[f]);if(m!==0)return m}return K(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=K(le(o.latitude),le(a.latitude));return u!==0?u:K(le(o.longitude),le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Dc(n.arrayValue,e.arrayValue);case 10:return function(o,a){var T,A,k,N;const u=o.fields||{},h=a.fields||{},f=(T=u[di])==null?void 0:T.arrayValue,m=(A=h[di])==null?void 0:A.arrayValue,v=K(((k=f==null?void 0:f.values)==null?void 0:k.length)||0,((N=m==null?void 0:m.values)==null?void 0:N.length)||0);return v!==0?v:Dc(f,m)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Kr.mapValue&&a===Kr.mapValue)return 0;if(o===Kr.mapValue)return 1;if(a===Kr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let v=0;v<h.length&&v<m.length;++v){const T=$s(h[v],m[v]);if(T!==0)return T;const A=Rn(u[h[v]],f[m[v]]);if(A!==0)return A}return K(h.length,m.length)}(n.mapValue,e.mapValue);default:throw L(23264,{he:t})}}function jc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=Vt(n),r=Vt(e),i=K(t.seconds,r.seconds);return i!==0?i:K(t.nanos,r.nanos)}function Dc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Rn(t[i],r[i]);if(o)return o}return K(t.length,r.length)}function Cn(n){return Gs(n)}function Gs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Vt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ot(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Gs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Gs(t.fields[a])}`;return i+"}"}(n.mapValue):L(61005,{value:n})}function Zr(n){switch(Mt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mi(n);return e?16+Zr(e):16;case 5:return 2*n.stringValue.length;case 6:return Ot(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Zr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return an(r.fields,(o,a)=>{i+=o.length+Zr(a)}),i}(n.mapValue);default:throw L(13486,{value:n})}}function Vc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Hs(n){return!!n&&"integerValue"in n}function _o(n){return!!n&&"arrayValue"in n}function Oc(n){return!!n&&"nullValue"in n}function Mc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ei(n){return!!n&&"mapValue"in n}function $m(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Fu])==null?void 0:r.stringValue)===Uu}function lr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return an(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=lr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=lr(n.arrayValue.values[t]);return e}return{...n}}function Gm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===qm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ei(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=lr(t)}setAll(e){let t=Ie.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=lr(a):i.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());ei(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ei(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){an(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Ue(lr(this.value))}}function Bu(n){const e=[];return an(n.fields,(t,r)=>{const i=new Ie([t]);if(ei(r)){const o=Bu(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new qe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,r,i,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Re(e,0,W.min(),W.min(),W.min(),Ue.empty(),0)}static newFoundDocument(e,t,r,i){return new Re(e,1,t,W.min(),r,i,0)}static newNoDocument(e,t){return new Re(e,2,t,W.min(),W.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,W.min(),W.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this.position=e,this.inclusive=t}}function Lc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=Rn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!at(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{}class he extends Wu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Qm(e,t,r):t==="array-contains"?new Xm(e,r):t==="in"?new Zm(e,r):t==="not-in"?new eg(e,r):t==="array-contains-any"?new tg(e,r):new he(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ym(e,r):new Jm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Rn(t,this.value)):t!==null&&Mt(this.value)===Mt(t)&&this.matchesComparison(Rn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ke extends Wu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ke(e,t)}matches(e){return zu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function zu(n){return n.op==="and"}function qu(n){return Km(n)&&zu(n)}function Km(n){for(const e of n.filters)if(e instanceof Ke)return!1;return!0}function Ks(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+Cn(n.value);if(qu(n))return n.filters.map(e=>Ks(e)).join(",");{const e=n.filters.map(t=>Ks(t)).join(",");return`${n.op}(${e})`}}function $u(n,e){return n instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.field.isEqual(i.field)&&at(r.value,i.value)}(n,e):n instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&$u(a,i.filters[u]),!0):!1}(n,e):void L(19439)}function Gu(n){return n instanceof he?function(t){return`${t.field.canonicalString()} ${t.op} ${Cn(t.value)}`}(n):n instanceof Ke?function(t){return t.op.toString()+" {"+t.getFilters().map(Gu).join(" ,")+"}"}(n):"Filter"}class Qm extends he{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ym extends he{constructor(e,t){super(e,"in",t),this.keys=Hu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Jm extends he{constructor(e,t){super(e,"not-in",t),this.keys=Hu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hu(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Xm extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _o(t)&&_r(t.arrayValue,this.value)}}class Zm extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_r(this.value.arrayValue,t)}}class eg extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!_r(this.value.arrayValue,t)}}class tg extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_o(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>_r(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,t=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function Uc(n,e=null,t=[],r=[],i=null,o=null,a=null){return new ng(n,e,t,r,i,o,a)}function vo(n){const e=z(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ks(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Cn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Cn(r)).join(",")),e.Te=t}return e.Te}function bo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Hm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$u(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Fc(n.startAt,e.startAt)&&Fc(n.endAt,e.endAt)}function Qs(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function rg(n,e,t,r,i,o,a,u){return new Mn(n,e,t,r,i,o,a,u)}function wo(n){return new Mn(n)}function Bc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ig(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ku(n){return n.collectionGroup!==null}function ur(n){const e=z(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ge(Ie.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new vr(o,r))}),t.has(Ie.keyField().canonicalString())||e.Ee.push(new vr(Ie.keyField(),r))}return e.Ee}function tt(n){const e=z(n);return e.Ie||(e.Ie=sg(e,ur(n))),e.Ie}function sg(n,e){if(n.limitType==="F")return Uc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new vr(i.field,o)});const t=n.endAt?new fi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fi(n.startAt.position,n.startAt.inclusive):null;return Uc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ys(n,e){const t=n.filters.concat([e]);return new Mn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function og(n,e){const t=n.explicitOrderBy.concat([e]);return new Mn(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function pi(n,e,t){return new Mn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Li(n,e){return bo(tt(n),tt(e))&&n.limitType===e.limitType}function Qu(n){return`${vo(tt(n))}|lt:${n.limitType}`}function mn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Gu(i)).join(", ")}]`),Oi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Cn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Cn(i)).join(",")),`Target(${r})`}(tt(n))}; limitType=${n.limitType})`}function Fi(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of ur(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,h){const f=Lc(a,u,h);return a.inclusive?f<=0:f<0}(r.startAt,ur(r),i)||r.endAt&&!function(a,u,h){const f=Lc(a,u,h);return a.inclusive?f>=0:f>0}(r.endAt,ur(r),i))}(n,e)}function ag(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yu(n){return(e,t)=>{let r=!1;for(const i of ur(n)){const o=cg(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function cg(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),f=u.data.field(o);return h!==null&&f!==null?Rn(h,f):L(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){an(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return ju(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=new se(M.comparator);function ft(){return lg}const Ju=new se(M.comparator);function sr(...n){let e=Ju;for(const t of n)e=e.insert(t.key,t);return e}function Xu(n){let e=Ju;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ht(){return hr()}function Zu(){return hr()}function hr(){return new cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const ug=new se(M.comparator),hg=new ge(M.comparator);function Q(...n){let e=hg;for(const t of n)e=e.add(t);return e}const dg=new ge(K);function fg(){return dg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(e)?"-0":e}}function eh(n){return{integerValue:""+n}}function pg(n,e){return Lm(e)?eh(e):Io(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this._=void 0}}function mg(n,e,t){return n instanceof br?function(i,o){const a={fields:{[Ou]:{stringValue:Vu},[Lu]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&yo(o)&&(o=Mi(o)),o&&(a.fields[Mu]=o),{mapValue:a}}(t,e):n instanceof wr?nh(n,e):n instanceof Ir?rh(n,e):function(i,o){const a=th(i,o),u=Wc(a)+Wc(i.Ae);return Hs(a)&&Hs(i.Ae)?eh(u):Io(i.serializer,u)}(n,e)}function gg(n,e,t){return n instanceof wr?nh(n,e):n instanceof Ir?rh(n,e):t}function th(n,e){return n instanceof mi?function(r){return Hs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class br extends Ui{}class wr extends Ui{constructor(e){super(),this.elements=e}}function nh(n,e){const t=ih(e);for(const r of n.elements)t.some(i=>at(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ir extends Ui{constructor(e){super(),this.elements=e}}function rh(n,e){let t=ih(e);for(const r of n.elements)t=t.filter(i=>!at(i,r));return{arrayValue:{values:t}}}class mi extends Ui{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Wc(n){return le(n.integerValue||n.doubleValue)}function ih(n){return _o(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t){this.field=e,this.transform=t}}function _g(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof wr&&i instanceof wr||r instanceof Ir&&i instanceof Ir?An(r.elements,i.elements,at):r instanceof mi&&i instanceof mi?at(r.Ae,i.Ae):r instanceof br&&i instanceof br}(n.transform,e.transform)}class vg{constructor(e,t){this.version=e,this.transformResults=t}}class ut{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ut}static exists(e){return new ut(void 0,e)}static updateTime(e){return new ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ti(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bi{}function sh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ah(n.key,ut.none()):new Ar(n.key,n.data,ut.none());{const t=n.data,r=Ue.empty();let i=new ge(Ie.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new ln(n.key,r,new qe(i.toArray()),ut.none())}}function bg(n,e,t){n instanceof Ar?function(i,o,a){const u=i.value.clone(),h=qc(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof ln?function(i,o,a){if(!ti(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=qc(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(oh(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function dr(n,e,t,r){return n instanceof Ar?function(o,a,u,h){if(!ti(o.precondition,a))return u;const f=o.value.clone(),m=$c(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof ln?function(o,a,u,h){if(!ti(o.precondition,a))return u;const f=$c(o.fieldTransforms,h,a),m=a.data;return m.setAll(oh(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,a,u){return ti(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function wg(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=th(r.transform,i||null);o!=null&&(t===null&&(t=Ue.empty()),t.set(r.field,o))}return t||null}function zc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&An(r,i,(o,a)=>_g(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ar extends Bi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ln extends Bi{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function oh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function qc(n,e,t){const r=new Map;X(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,gg(a,u,t[i]))}return r}function $c(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,mg(o,a,e))}return r}class ah extends Bi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ig extends Bi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&bg(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=dr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=dr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Zu();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;const h=sh(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&An(this.mutations,e.mutations,(t,r)=>zc(t,r))&&An(this.baseMutations,e.baseMutations,(t,r)=>zc(t,r))}}class To{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){X(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return ug}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new To(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,Y;function Sg(n){switch(n){case R.OK:return L(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function ch(n){if(n===void 0)return dt("GRPC error has no .code"),R.UNKNOWN;switch(n){case ue.OK:return R.OK;case ue.CANCELLED:return R.CANCELLED;case ue.UNKNOWN:return R.UNKNOWN;case ue.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ue.INTERNAL:return R.INTERNAL;case ue.UNAVAILABLE:return R.UNAVAILABLE;case ue.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ue.NOT_FOUND:return R.NOT_FOUND;case ue.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ue.ABORTED:return R.ABORTED;case ue.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ue.DATA_LOSS:return R.DATA_LOSS;default:return L(39323,{code:n})}}(Y=ue||(ue={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=new Pt([4294967295,4294967295],0);function Gc(n){const e=Ag().encode(n),t=new Iu;return t.update(e),new Uint8Array(t.digest())}function Hc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Pt([t,r],0),new Pt([i,o],0)]}class xo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new or(`Invalid padding: ${t}`);if(r<0)throw new or(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new or(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new or(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Pt.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Pt.fromNumber(r)));return i.compare(Rg)===1&&(i=new Pt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Gc(e),[r,i]=Hc(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);if(!this.we(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new xo(o,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.ge===0)return;const t=Gc(e),[r,i]=Hc(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Rr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Wi(W.min(),i,new se(K),ft(),Q())}}class Rr{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Rr(r,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class lh{constructor(e,t){this.targetId=e,this.Ce=t}}class uh{constructor(e,t,r=Te.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Kc{constructor(){this.ve=0,this.Fe=Qc(),this.Me=Te.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Q(),t=Q(),r=Q();return this.Fe.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:L(38017,{changeType:o})}}),new Rr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Qc()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Cg{constructor(e){this.Ge=e,this.ze=new Map,this.je=ft(),this.Je=Qr(),this.He=Qr(),this.Ze=new se(K)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:L(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,i)=>{this.rt(i)&&t(i)})}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const o=i.target;if(Qs(o))if(r===0){const a=new M(o.path);this.et(t,a,Re.newNoDocument(a,W.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const u=this.ut(e),h=u?this.ct(u,e,a):1;if(h!==0){this.it(t);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,f)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,u;try{a=Ot(r).toUint8Array()}catch(h){if(h instanceof Du)return Zt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new xo(a,i,o)}catch(h){return Zt(h instanceof or?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.et(t,o,null),i++)}),i}Tt(e){const t=new Map;this.ze.forEach((o,a)=>{const u=this.ot(a);if(u){if(o.current&&Qs(u.target)){const h=new M(u.target.path);this.Et(h).has(a)||this.It(a,h)||this.et(a,h,Re.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.qe())}});let r=Q();this.He.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(e));const i=new Wi(e,t,this.Ze,this.je,r);return this.je=ft(),this.Je=Qr(),this.He=Qr(),this.Ze=new se(K),i}Ye(e,t){if(!this.rt(e))return;const r=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,t)?i.Ke(t,1):i.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Kc,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ge(K),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ge(K),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Kc),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Qr(){return new se(M.comparator)}function Qc(){return new se(M.comparator)}const kg={asc:"ASCENDING",desc:"DESCENDING"},Pg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ng={and:"AND",or:"OR"};class jg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Js(n,e){return n.useProto3Json||Oi(e)?e:{value:e}}function gi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Dg(n,e){return gi(n,e.toTimestamp())}function nt(n){return X(!!n,49232),W.fromTimestamp(function(t){const r=Vt(t);return new re(r.seconds,r.nanos)}(n))}function Eo(n,e){return Xs(n,e).canonicalString()}function Xs(n,e){const t=function(i){return new te(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function dh(n){const e=te.fromString(n);return X(yh(e),10190,{key:e.toString()}),e}function Zs(n,e){return Eo(n.databaseId,e.path)}function Rs(n,e){const t=dh(e);if(t.get(1)!==n.databaseId.projectId)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new D(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(ph(t))}function fh(n,e){return Eo(n.databaseId,e)}function Vg(n){const e=dh(n);return e.length===4?te.emptyPath():ph(e)}function eo(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ph(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Yc(n,e,t){return{name:Zs(n,e),fields:t.value.mapValue.fields}}function Og(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L(39313,{state:f})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(X(m===void 0||typeof m=="string",58123),Te.fromBase64String(m||"")):(X(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Te.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(f){const m=f.code===void 0?R.UNKNOWN:ch(f.code);return new D(m,f.message||"")}(a);t=new uh(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rs(n,r.document.name),o=nt(r.document.updateTime),a=r.document.createTime?nt(r.document.createTime):W.min(),u=new Ue({mapValue:{fields:r.document.fields}}),h=Re.newFoundDocument(i,o,a,u),f=r.targetIds||[],m=r.removedTargetIds||[];t=new ni(f,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rs(n,r.document),o=r.readTime?nt(r.readTime):W.min(),a=Re.newNoDocument(i,o),u=r.removedTargetIds||[];t=new ni([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rs(n,r.document),o=r.removedTargetIds||[];t=new ni([],o,i,null)}else{if(!("filter"in e))return L(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Eg(i,o),u=r.targetId;t=new lh(u,a)}}return t}function Mg(n,e){let t;if(e instanceof Ar)t={update:Yc(n,e.key,e.value)};else if(e instanceof ah)t={delete:Zs(n,e.key)};else if(e instanceof ln)t={update:Yc(n,e.key,e.data),updateMask:Gg(e.fieldMask)};else{if(!(e instanceof Ig))return L(16599,{dt:e.type});t={verify:Zs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof br)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof wr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ir)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof mi)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw L(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Dg(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)}(n,e.precondition)),t}function Lg(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map(t=>function(i,o){let a=i.updateTime?nt(i.updateTime):nt(o);return a.isEqual(W.min())&&(a=nt(o)),new vg(a,i.transformResults||[])}(t,e))):[]}function Fg(n,e){return{documents:[fh(n,e.path)]}}function Ug(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=fh(n,i);const o=function(f){if(f.length!==0)return gh(Ke.create(f,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(T){return{field:gn(T.field),direction:zg(T.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Js(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{ft:t,parent:i}}function Bg(n){let e=Vg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){X(r===1,65062);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(v){const T=mh(v);return T instanceof Ke&&qu(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(v){return v.map(T=>function(k){return new vr(yn(k.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(T))}(t.orderBy));let u=null;t.limit&&(u=function(v){let T;return T=typeof v=="object"?v.value:v,Oi(T)?null:T}(t.limit));let h=null;t.startAt&&(h=function(v){const T=!!v.before,A=v.values||[];return new fi(A,T)}(t.startAt));let f=null;return t.endAt&&(f=function(v){const T=!v.before,A=v.values||[];return new fi(A,T)}(t.endAt)),rg(e,i,a,o,u,"F",h,f)}function Wg(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=yn(t.unaryFilter.field);return he.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=yn(t.unaryFilter.field);return he.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=yn(t.unaryFilter.field);return he.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=yn(t.unaryFilter.field);return he.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}}(n):n.fieldFilter!==void 0?function(t){return he.create(yn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ke.create(t.compositeFilter.filters.map(r=>mh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}}(t.compositeFilter.op))}(n):L(30097,{filter:n})}function zg(n){return kg[n]}function qg(n){return Pg[n]}function $g(n){return Ng[n]}function gn(n){return{fieldPath:n.canonicalString()}}function yn(n){return Ie.fromServerFormat(n.fieldPath)}function gh(n){return n instanceof he?function(t){if(t.op==="=="){if(Mc(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NAN"}};if(Oc(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Mc(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NAN"}};if(Oc(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(t.field),op:qg(t.op),value:t.value}}}(n):n instanceof Ke?function(t){const r=t.getFilters().map(i=>gh(i));return r.length===1?r[0]:{compositeFilter:{op:$g(t.op),filters:r}}}(n):L(54877,{filter:n})}function Gg(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function _h(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,r,i,o=W.min(),a=W.min(),u=Te.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new Rt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.yt=e}}function Kg(n){const e=Bg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.bn=new Yg}addToCollectionParentIndex(e,t){return this.bn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Dt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Dt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Yg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ge(te.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ge(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vh=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(vh,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new kn(0)}static ar(){return new kn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="LruGarbageCollector",Jg=1048576;function Zc([n,e],[t,r]){const i=K(n,t);return i===0?K(e,r):i}class Xg{constructor(e){this.Pr=e,this.buffer=new ge(Zc),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Zc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Zg{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){V(Xc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){On(t)?V(Xc,"Ignoring IndexedDB error during garbage collection: ",t):await Vn(t)}await this.Ar(3e5)})}}class ey{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Vi.ce);const r=new Xg(t);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Jc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jc):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,i,o,a,u,h,f;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,a=Date.now(),this.nthSequenceNumber(e,i))).next(v=>(r=v,u=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(f=Date.now(),pn()<=H.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${v} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:v})))}}function ty(n,e){return new ey(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.changes=new cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&dr(r.mutation,i,qe.empty(),re.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const i=Ht();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=sr();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ht();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let o=ft();const a=hr(),u=function(){return hr()}();return t.forEach((h,f)=>{const m=r.get(f.key);i.has(f.key)&&(m===void 0||m.mutation instanceof ln)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),dr(m.mutation,f,m.mutation.getFieldMask(),re.now())):a.set(f.key,qe.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),t.forEach((f,m)=>u.set(f,new ry(m,a.get(f)??null))),u))}recalculateAndSaveOverlays(e,t){const r=hr();let i=new se((a,u)=>a-u),o=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const f=t.get(h);if(f===null)return;let m=r.get(h)||qe.empty();m=u.applyToLocalView(f,m),r.set(h,m);const v=(i.get(u.batchId)||Q()).add(h);i=i.insert(u.batchId,v)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,m=h.value,v=Zu();m.forEach(T=>{if(!o.has(T)){const A=sh(t.get(T),r.get(T));A!==null&&v.set(T,A),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,v))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return ig(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ku(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):C.resolve(Ht());let u=mr,h=o;return a.next(f=>C.forEach(f,(m,v)=>(u<v.largestBatchId&&(u=v.largestBatchId),o.get(m)?C.resolve():this.remoteDocumentCache.getEntry(e,m).next(T=>{h=h.insert(m,T)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,h,f,Q())).next(m=>({batchId:u,changes:Xu(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let i=sr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=sr();return this.indexManager.getCollectionParents(e,o).next(u=>C.forEach(u,h=>{const f=function(v,T){return new Mn(T,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(m=>{m.forEach((v,T)=>{a=a.insert(v,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Re.newInvalidDocument(m)))});let u=sr();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&dr(m.mutation,f,qe.empty(),re.now()),Fi(t,f)&&(u=u.insert(h,f))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return C.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:nt(i.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(i){return{name:i.name,query:Kg(i.bundledQuery),readTime:nt(i.readTime)}}(t)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.overlays=new se(M.comparator),this.Lr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ht();return C.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.St(e,t,o)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const i=Ht(),o=t.length+1,a=new M(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new se((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=Ht(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const u=Ht(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>u.set(f,m)),!(u.size()>=i)););return C.resolve(u)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new xg(t,r));let o=this.Lr.get(t);o===void 0&&(o=Q(),this.Lr.set(t,o)),this.Lr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.kr=new ge(_e.qr),this.Kr=new ge(_e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new _e(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new _e(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new M(new te([])),r=new _e(t,e),i=new _e(t,e+1),o=[];return this.Kr.forEachInRange([r,i],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new M(new te([])),r=new _e(t,e),i=new _e(t,e+1);let o=Q();return this.Kr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new _e(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return M.comparator(e.key,t.key)||K(e.Jr,t.Jr)}static Ur(e,t){return K(e.Jr,t.Jr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ge(_e.qr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Tg(o,t,r,i);this.mutationQueue.push(a);for(const u of i)this.Hr=this.Hr.add(new _e(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?go:this.Yn-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new _e(t,0),i=new _e(t,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([r,i],a=>{const u=this.Zr(a.Jr);o.push(u)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ge(K);return t.forEach(i=>{const o=new _e(i,0),a=new _e(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,a],u=>{r=r.add(u.Jr)})}),C.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new _e(new M(o),0);let u=new ge(K);return this.Hr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(u=u.add(h.Jr)),!0)},a),C.resolve(this.Yr(u))}Yr(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){X(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return C.forEach(t.mutations,i=>{const o=new _e(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new _e(t,0),i=this.Hr.firstAfterOrEqual(r);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.ti=e,this.docs=function(){return new se(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=ft();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Re.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=ft();const a=t.path,u=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Dm(jm(m),r)<=0||(i.has(m.key)||Fi(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(e,t,r,i){L(9500)}ni(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new uy(this)}getSize(e){return C.resolve(this.size)}}class uy extends ny{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.persistence=e,this.ri=new cn(t=>vo(t),bo),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.ii=0,this.si=new So,this.targetCount=0,this.oi=kn._r()}forEachTarget(e,t){return this.ri.forEach((r,i)=>t(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),C.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new kn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.lr(t),C.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.ri.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,t){this._i={},this.overlays={},this.ai=new Vi(0),this.ui=!1,this.ui=!0,this.ci=new ay,this.referenceDelegate=e(this),this.li=new hy(this),this.indexManager=new Qg,this.remoteDocumentCache=function(i){return new ly(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Hg(t),this.Pi=new sy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new cy(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const i=new dy(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(o=>this.referenceDelegate.Ei(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ii(e,t){return C.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class dy extends Om{constructor(e){super(),this.currentSequenceNumber=e}}class Ao{constructor(e){this.persistence=e,this.Ri=new So,this.Ai=null}static Vi(e){return new Ao(e)}get di(){if(this.Ai)return this.Ai;throw L(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,r=>{const i=M.fromPath(r);return this.mi(e,i).next(o=>{o||t.removeEntry(i,W.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class yi{constructor(e,t){this.persistence=e,this.fi=new cn(r=>Fm(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=ty(this,t)}static Vi(e,t){return new yi(e,t)}Ti(){}Ei(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return C.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(o=>o?C.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ni(e,a=>this.wr(e,a,t).next(u=>{u||(r++,o.removeEntry(a,W.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zr(e.data.value)),t}wr(e,t,r){return C.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=i}static Is(e,t){let r=Q(),i=Q();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ro(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return ep()?8:Mm(Ce())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.gs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new fy;return this.ys(e,t,a).next(u=>{if(o.result=u,this.As)return this.ws(e,t,a,u.size)})}).next(()=>o.result)}ws(e,t,r,i){return r.documentReadCount<this.Vs?(pn()<=H.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(pn()<=H.DEBUG&&V("QueryEngine","Query:",mn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(pn()<=H.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tt(t))):C.resolve())}gs(e,t){if(Bc(t))return C.resolve(null);let r=tt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=pi(t,null,"F"),r=tt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=Q(...o);return this.fs.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const f=this.Ss(t,u);return this.bs(t,f,a,h.readTime)?this.gs(e,pi(t,null,"F")):this.Ds(e,f,t,h)}))})))}ps(e,t,r,i){return Bc(t)||i.isEqual(W.min())?C.resolve(null):this.fs.getDocuments(e,r).next(o=>{const a=this.Ss(t,o);return this.bs(t,a,r,i)?C.resolve(null):(pn()<=H.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mn(t)),this.Ds(e,a,t,Nm(i,mr)).next(u=>u))})}Ss(e,t){let r=new ge(Yu(e));return t.forEach((i,o)=>{Fi(e,o)&&(r=r.add(o))}),r}bs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ys(e,t,r){return pn()<=H.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",mn(t)),this.fs.getDocumentsMatchingQuery(e,t,Dt.min(),r)}Ds(e,t,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="LocalStore",my=3e8;class gy{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new se(K),this.Fs=new cn(o=>vo(o),bo),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iy(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function yy(n,e,t,r){return new gy(n,e,t,r)}async function wh(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=Q();for(const f of i){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(r,h).next(f=>({Ns:f,removedBatchIds:a,addedBatchIds:u}))})})}function _y(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return function(u,h,f,m){const v=f.batch,T=v.keys();let A=C.resolve();return T.forEach(k=>{A=A.next(()=>m.getEntry(h,k)).next(N=>{const j=f.docVersions.get(k);X(j!==null,48541),N.version.compareTo(j)<0&&(v.applyToRemoteDocument(N,f),N.isValidDocument()&&(N.setReadTime(f.commitVersion),m.addEntry(N)))})}),A.next(()=>u.mutationQueue.removeMutationBatch(h,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=Q();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Ih(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function vy(n,e){const t=z(n),r=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const u=[];e.targetChanges.forEach((m,v)=>{const T=i.get(v);if(!T)return;u.push(t.li.removeMatchingKeys(o,m.removedDocuments,v).next(()=>t.li.addMatchingKeys(o,m.addedDocuments,v)));let A=T.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?A=A.withResumeToken(Te.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):m.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(m.resumeToken,r)),i=i.insert(v,A),function(N,j,q){return N.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=my?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(T,A,m)&&u.push(t.li.updateTargetData(o,A))});let h=ft(),f=Q();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(by(o,a,e.documentUpdates).next(m=>{h=m.Bs,f=m.Ls})),!r.isEqual(W.min())){const m=t.li.getLastRemoteSnapshotVersion(o).next(v=>t.li.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return C.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(t.vs=i,o))}function by(n,e,t){let r=Q(),i=Q();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=ft();return t.forEach((u,h)=>{const f=o.get(u);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(W.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):V(Co,"Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",h.version)}),{Bs:a,Ls:i}})}function wy(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=go),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Iy(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.li.getTargetData(r,e).next(o=>o?(i=o,C.resolve(i)):t.li.allocateTargetId(r).next(a=>(i=new Rt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function to(n,e,t){const r=z(n),i=r.vs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!On(a))throw a;V(Co,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function el(n,e,t){const r=z(n);let i=W.min(),o=Q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const v=z(h),T=v.Fs.get(m);return T!==void 0?C.resolve(v.vs.get(T)):v.li.getTargetData(f,m)}(r,a,tt(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:W.min(),t?o:Q())).next(u=>(Ty(r,ag(e),u),{documents:u,ks:o})))}function Ty(n,e,t){let r=n.Ms.get(e)||W.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ms.set(e,r)}class tl{constructor(){this.activeTargetIds=fg()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xy{constructor(){this.vo=new tl,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new tl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="ConnectivityMonitor";class rl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){V(nl,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){V(nl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yr=null;function no(){return Yr===null?Yr=function(){return 268435456+Math.round(2147483648*Math.random())}():Yr++,"0x"+Yr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="RestConnection",Sy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Ay{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===hi?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,o){const a=no(),u=this.Qo(e,t.toUriEncodedString());V(Cs,`Sending RPC '${e}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,i,o);const{host:f}=new URL(u),m=Er(f);return this.zo(e,u,h,r,m).then(v=>(V(Cs,`Received RPC '${e}' ${a}: `,v),v),v=>{throw Zt(Cs,`RPC '${e}' ${a} failed with error: `,v,"url: ",u,"request:",r),v})}jo(e,t,r,i,o,a){return this.Wo(e,t,r,i,o)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Dn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}Qo(e,t){const r=Sy[e];let i=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="WebChannelConnection",nr=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(i){setTimeout(()=>{throw i},0)}})};class bn extends Ay{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!bn.c_){const e=Su();nr(e,Eu.STAT_EVENT,t=>{t.stat===qs.PROXY?V(Se,"STAT_EVENT: detected buffering proxy"):t.stat===qs.NOPROXY&&V(Se,"STAT_EVENT: detected no buffering proxy")}),bn.c_=!0}}zo(e,t,r,i,o){const a=no();return new Promise((u,h)=>{const f=new Tu;f.setWithCredentials(!0),f.listenOnce(xu.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Xr.NO_ERROR:const v=f.getResponseJson();V(Se,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),u(v);break;case Xr.TIMEOUT:V(Se,`RPC '${e}' ${a} timed out`),h(new D(R.DEADLINE_EXCEEDED,"Request time out"));break;case Xr.HTTP_ERROR:const T=f.getStatus();if(V(Se,`RPC '${e}' ${a} failed with status:`,T,"response text:",f.getResponseText()),T>0){let A=f.getResponseJson();Array.isArray(A)&&(A=A[0]);const k=A==null?void 0:A.error;if(k&&k.status&&k.message){const N=function(q){const F=q.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(F)>=0?F:R.UNKNOWN}(k.status);h(new D(N,k.message))}else h(new D(R.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new D(R.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{V(Se,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(i);V(Se,`RPC '${e}' ${a} sending request:`,i),f.send(t,"POST",m,r,15)})}T_(e,t,r){const i=no(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=o.join("");V(Se,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=a.createWebChannel(f,u);this.E_(m);let v=!1,T=!1;const A=new Ry({Jo:k=>{T?V(Se,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(v||(V(Se,`Opening RPC '${e}' stream ${i} transport.`),m.open(),v=!0),V(Se,`RPC '${e}' stream ${i} sending:`,k),m.send(k))},Ho:()=>m.close()});return nr(m,ir.EventType.OPEN,()=>{T||(V(Se,`RPC '${e}' stream ${i} transport opened.`),A.i_())}),nr(m,ir.EventType.CLOSE,()=>{T||(T=!0,V(Se,`RPC '${e}' stream ${i} transport closed`),A.o_(),this.I_(m))}),nr(m,ir.EventType.ERROR,k=>{T||(T=!0,Zt(Se,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),A.o_(new D(R.UNAVAILABLE,"The operation could not be completed")))}),nr(m,ir.EventType.MESSAGE,k=>{var N;if(!T){const j=k.data[0];X(!!j,16349);const q=j,F=(q==null?void 0:q.error)||((N=q[0])==null?void 0:N.error);if(F){V(Se,`RPC '${e}' stream ${i} received error:`,F);const J=F.status;let ae=function(w){const y=ue[w];if(y!==void 0)return ch(y)}(J),Z=F.message;J==="NOT_FOUND"&&Z.includes("database")&&Z.includes("does not exist")&&Z.includes(this.databaseId.database)&&Zt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ae===void 0&&(ae=R.INTERNAL,Z="Unknown error status: "+J+" with message "+F.message),T=!0,A.o_(new D(ae,Z)),m.close()}else V(Se,`RPC '${e}' stream ${i} received:`,j),A.__(j)}}),bn.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Au()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(n){return new bn(n)}function ks(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n){return new jg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.c_=!1;class Th{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=i,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="PersistentStream";class xh{constructor(e,t,r,i,o,a,u,h){this.Ci=e,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Th(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(dt(t.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new D(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return V(il,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(V(il,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ky extends xh{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Og(this.serializer,e),r=function(o){if(!("targetChange"in o))return W.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?nt(a.readTime):W.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=eo(this.serializer),t.addTarget=function(o,a){let u;const h=a.target;if(u=Qs(h)?{documents:Fg(o,h)}:{query:Ug(o,h).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=hh(o,a.resumeToken);const f=Js(o,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(W.min())>0){u.readTime=gi(o,a.snapshotVersion.toTimestamp());const f=Js(o,a.expectedCount);f!==null&&(u.expectedCount=f)}return u}(this.serializer,e);const r=Wg(this.serializer,e);r&&(t.labels=r),this.q_(t)}X_(e){const t={};t.database=eo(this.serializer),t.removeTarget=e,this.q_(t)}}class Py extends xh{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Lg(e.writeResults,e.commitTime),r=nt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=eo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Mg(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{}class jy extends Ny{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(e,Xs(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(R.UNKNOWN,o.toString())})}jo(e,t,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.jo(e,Xs(t,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(R.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Dy(n,e,t,r){return new jy(n,e,t,r)}class Vy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(dt(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="RemoteStore";class Oy{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{un(this)&&(V(en,"Restarting streams for network reachability change."),await async function(h){const f=z(h);f.Ia.add(4),await Cr(f),f.Va.set("Unknown"),f.Ia.delete(4),await qi(f)}(this))})}),this.Va=new Vy(r,i)}}async function qi(n){if(un(n))for(const e of n.Ra)await e(!0)}async function Cr(n){for(const e of n.Ra)await e(!1)}function Eh(n,e){const t=z(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),jo(t)?No(t):Ln(t).O_()&&Po(t,e))}function ko(n,e){const t=z(n),r=Ln(t);t.Ea.delete(e),r.O_()&&Sh(t,e),t.Ea.size===0&&(r.O_()?r.L_():un(t)&&t.Va.set("Unknown"))}function Po(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ln(n).Z_(e)}function Sh(n,e){n.da.$e(e),Ln(n).X_(e)}function No(n){n.da=new Cg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ln(n).start(),n.Va.ua()}function jo(n){return un(n)&&!Ln(n).x_()&&n.Ea.size>0}function un(n){return z(n).Ia.size===0}function Ah(n){n.da=void 0}async function My(n){n.Va.set("Online")}async function Ly(n){n.Ea.forEach((e,t)=>{Po(n,e)})}async function Fy(n,e){Ah(n),jo(n)?(n.Va.ha(e),No(n)):n.Va.set("Unknown")}async function Uy(n,e,t){if(n.Va.set("Online"),e instanceof uh&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.Ea.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ea.delete(u),i.da.removeTarget(u))}(n,e)}catch(r){V(en,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _i(n,r)}else if(e instanceof ni?n.da.Xe(e):e instanceof lh?n.da.st(e):n.da.tt(e),!t.isEqual(W.min()))try{const r=await Ih(n.localStore);t.compareTo(r)>=0&&await function(o,a){const u=o.da.Tt(a);return u.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ea.get(f);m&&o.Ea.set(f,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,f)=>{const m=o.Ea.get(h);if(!m)return;o.Ea.set(h,m.withResumeToken(Te.EMPTY_BYTE_STRING,m.snapshotVersion)),Sh(o,h);const v=new Rt(m.target,h,f,m.sequenceNumber);Po(o,v)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){V(en,"Failed to raise snapshot:",r),await _i(n,r)}}async function _i(n,e,t){if(!On(e))throw e;n.Ia.add(1),await Cr(n),n.Va.set("Offline"),t||(t=()=>Ih(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(en,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await qi(n)})}function Rh(n,e){return e().catch(t=>_i(n,t,e))}async function $i(n){const e=z(n),t=Lt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:go;for(;By(e);)try{const i=await wy(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,Wy(e,i)}catch(i){await _i(e,i)}Ch(e)&&kh(e)}function By(n){return un(n)&&n.Ta.length<10}function Wy(n,e){n.Ta.push(e);const t=Lt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Ch(n){return un(n)&&!Lt(n).x_()&&n.Ta.length>0}function kh(n){Lt(n).start()}async function zy(n){Lt(n).ra()}async function qy(n){const e=Lt(n);for(const t of n.Ta)e.ea(t.mutations)}async function $y(n,e,t){const r=n.Ta.shift(),i=To.from(r,e,t);await Rh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await $i(n)}async function Gy(n,e){e&&Lt(n).Y_&&await async function(r,i){if(function(a){return Sg(a)&&a!==R.ABORTED}(i.code)){const o=r.Ta.shift();Lt(r).B_(),await Rh(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await $i(r)}}(n,e),Ch(n)&&kh(n)}async function sl(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),V(en,"RemoteStore received new credentials");const r=un(t);t.Ia.add(3),await Cr(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await qi(t)}async function Hy(n,e){const t=z(n);e?(t.Ia.delete(2),await qi(t)):e||(t.Ia.add(2),await Cr(t),t.Va.set("Unknown"))}function Ln(n){return n.ma||(n.ma=function(t,r,i){const o=z(t);return o.sa(),new ky(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Zo:My.bind(null,n),Yo:Ly.bind(null,n),t_:Fy.bind(null,n),H_:Uy.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),jo(n)?No(n):n.Va.set("Unknown")):(await n.ma.stop(),Ah(n))})),n.ma}function Lt(n){return n.fa||(n.fa=function(t,r,i){const o=z(t);return o.sa(),new Py(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:zy.bind(null,n),t_:Gy.bind(null,n),ta:qy.bind(null,n),na:$y.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await $i(n)):(await n.fa.stop(),n.Ta.length>0&&(V(en,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,u=new Do(e,t,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vo(n,e){if(dt("AsyncQueue",`${e}: ${n}`),On(n))return new D(R.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{static emptySet(e){return new wn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=sr(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new wn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.ga=new se(M.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):L(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Pn{constructor(e,t,r,i,o,a,u,h,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new Pn(e,t,wn.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Li(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Qy{constructor(){this.queries=al(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=z(t),o=i.queries;i.queries=al(),o.forEach((a,u)=>{for(const h of u.Sa)h.onError(r)})})(this,new D(R.ABORTED,"Firestore shutting down"))}}function al(){return new cn(n=>Qu(n),Li)}async function Yy(n,e){const t=z(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.ba()&&e.Da()&&(r=2):(o=new Ky,r=e.Da()?0:1);try{switch(r){case 0:o.wa=await t.onListen(i,!0);break;case 1:o.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=Vo(a,`Initialization of query '${mn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&Oo(t)}async function Jy(n,e){const t=z(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?i=e.Da()?0:1:!o.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Xy(n,e){const t=z(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const u of a.Sa)u.Fa(i)&&(r=!0);a.wa=i}}r&&Oo(t)}function Zy(n,e,t){const r=z(n),i=r.queries.get(e);if(i)for(const o of i.Sa)o.onError(t);r.queries.delete(e)}function Oo(n){n.Ca.forEach(e=>{e.next()})}var ro,cl;(cl=ro||(ro={})).Ma="default",cl.Cache="cache";class e0{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Pn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ro.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.key=e}}class Nh{constructor(e){this.key=e}}class t0{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Q(),this.mutatedKeys=Q(),this.eu=Yu(e),this.tu=new wn(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new ol,i=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((m,v)=>{const T=i.get(m),A=Fi(this.query,v)?v:null,k=!!T&&this.mutatedKeys.has(T.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let j=!1;T&&A?T.data.isEqual(A.data)?k!==N&&(r.track({type:3,doc:A}),j=!0):this.su(T,A)||(r.track({type:2,doc:A}),j=!0,(h&&this.eu(A,h)>0||f&&this.eu(A,f)<0)&&(u=!0)):!T&&A?(r.track({type:0,doc:A}),j=!0):T&&!A&&(r.track({type:1,doc:T}),j=!0,(h||f)&&(u=!0)),j&&(A?(a=a.add(A),o=N?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,bs:u,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((m,v)=>function(A,k){const N=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Vt:j})}};return N(A)-N(k)}(m.type,v.type)||this.eu(m.doc,v.doc)),this.ou(r),i=i??!1;const u=t&&!i?this._u():[],h=this.Ya.size===0&&this.current&&!i?1:0,f=h!==this.Xa;return this.Xa=h,a.length!==0||f?{snapshot:new Pn(this.query,e.tu,o,a,e.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ol,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Q(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Nh(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Ph(r))}),t}cu(e){this.Za=e.ks,this.Ya=Q();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Pn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Mo="SyncEngine";class n0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class r0{constructor(e){this.key=e,this.hu=!1}}class i0{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new cn(u=>Qu(u),Li),this.Eu=new Map,this.Iu=new Set,this.Ru=new se(M.comparator),this.Au=new Map,this.Vu=new So,this.du={},this.mu=new Map,this.fu=kn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function s0(n,e,t=!0){const r=Lh(n);let i;const o=r.Tu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await jh(r,e,t,!0),i}async function o0(n,e){const t=Lh(n);await jh(t,e,!0,!1)}async function jh(n,e,t,r){const i=await Iy(n.localStore,tt(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return r&&(u=await a0(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Eh(n.remoteStore,i),u}async function a0(n,e,t,r,i){n.pu=(v,T,A)=>async function(N,j,q,F){let J=j.view.ru(q);J.bs&&(J=await el(N.localStore,j.query,!1).then(({documents:w})=>j.view.ru(w,J)));const ae=F&&F.targetChanges.get(j.targetId),Z=F&&F.targetMismatches.get(j.targetId)!=null,ie=j.view.applyChanges(J,N.isPrimaryClient,ae,Z);return ul(N,j.targetId,ie.au),ie.snapshot}(n,v,T,A);const o=await el(n.localStore,e,!0),a=new t0(e,o.ks),u=a.ru(o.documents),h=Rr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),f=a.applyChanges(u,n.isPrimaryClient,h);ul(n,t,f.au);const m=new n0(e,t,a);return n.Tu.set(e,m),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),f.snapshot}async function c0(n,e,t){const r=z(n),i=r.Tu.get(e),o=r.Eu.get(i.targetId);if(o.length>1)return r.Eu.set(i.targetId,o.filter(a=>!Li(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await to(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ko(r.remoteStore,i.targetId),io(r,i.targetId)}).catch(Vn)):(io(r,i.targetId),await to(r.localStore,i.targetId,!0))}async function l0(n,e){const t=z(n),r=t.Tu.get(e),i=t.Eu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ko(t.remoteStore,r.targetId))}async function u0(n,e,t){const r=y0(n);try{const i=await function(a,u){const h=z(a),f=re.now(),m=u.reduce((A,k)=>A.add(k.key),Q());let v,T;return h.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=ft(),N=Q();return h.xs.getEntries(A,m).next(j=>{k=j,k.forEach((q,F)=>{F.isValidDocument()||(N=N.add(q))})}).next(()=>h.localDocuments.getOverlayedDocuments(A,k)).next(j=>{v=j;const q=[];for(const F of u){const J=wg(F,v.get(F.key).overlayedDocument);J!=null&&q.push(new ln(F.key,J,Bu(J.value.mapValue),ut.exists(!0)))}return h.mutationQueue.addMutationBatch(A,f,q,u)}).next(j=>{T=j;const q=j.applyToLocalDocumentSet(v,N);return h.documentOverlayCache.saveOverlays(A,j.batchId,q)})}).then(()=>({batchId:T.batchId,changes:Xu(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let f=a.du[a.currentUser.toKey()];f||(f=new se(K)),f=f.insert(u,h),a.du[a.currentUser.toKey()]=f}(r,i.batchId,t),await kr(r,i.changes),await $i(r.remoteStore)}catch(i){const o=Vo(i,"Failed to persist write");t.reject(o)}}async function Dh(n,e){const t=z(n);try{const r=await vy(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Au.get(o);a&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?X(a.hu,14607):i.removedDocuments.size>0&&(X(a.hu,42227),a.hu=!1))}),await kr(t,r,e)}catch(r){await Vn(r)}}function ll(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((o,a)=>{const u=a.view.va(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=z(a);h.onlineState=u;let f=!1;h.queries.forEach((m,v)=>{for(const T of v.Sa)T.va(u)&&(f=!0)}),f&&Oo(h)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function h0(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),o=i&&i.key;if(o){let a=new se(M.comparator);a=a.insert(o,Re.newNoDocument(o,W.min()));const u=Q().add(o),h=new Wi(W.min(),new Map,new se(K),a,u);await Dh(r,h),r.Ru=r.Ru.remove(o),r.Au.delete(e),Lo(r)}else await to(r.localStore,e,!1).then(()=>io(r,e,t)).catch(Vn)}async function d0(n,e){const t=z(n),r=e.batch.batchId;try{const i=await _y(t.localStore,e);Oh(t,r,null),Vh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await kr(t,i)}catch(i){await Vn(i)}}async function f0(n,e,t){const r=z(n);try{const i=await function(a,u){const h=z(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,u).next(v=>(X(v!==null,37113),m=v.keys(),h.mutationQueue.removeMutationBatch(f,v))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(r.localStore,e);Oh(r,e,t),Vh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await kr(r,i)}catch(i){await Vn(i)}}function Vh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Oh(n,e,t){const r=z(n);let i=r.du[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function io(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Eu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||Mh(n,r)})}function Mh(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(ko(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Lo(n))}function ul(n,e,t){for(const r of t)r instanceof Ph?(n.Vu.addReference(r.key,e),p0(n,r)):r instanceof Nh?(V(Mo,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||Mh(n,r.key)):L(19791,{wu:r})}function p0(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(r)||(V(Mo,"New document in limbo: "+t),n.Iu.add(r),Lo(n))}function Lo(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new M(te.fromString(e)),r=n.fu.next();n.Au.set(r,new r0(t)),n.Ru=n.Ru.insert(t,r),Eh(n.remoteStore,new Rt(tt(wo(t.path)),r,"TargetPurposeLimboResolution",Vi.ce))}}async function kr(n,e,t){const r=z(n),i=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((u,h)=>{a.push(r.pu(h,e,t).then(f=>{var m;if((f||t)&&r.isPrimaryClient){const v=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(f){i.push(f);const v=Ro.Is(h.targetId,f);o.push(v)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(h,f){const m=z(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>C.forEach(f,T=>C.forEach(T.Ts,A=>m.persistence.referenceDelegate.addReference(v,T.targetId,A)).next(()=>C.forEach(T.Es,A=>m.persistence.referenceDelegate.removeReference(v,T.targetId,A)))))}catch(v){if(!On(v))throw v;V(Co,"Failed to update sequence numbers: "+v)}for(const v of f){const T=v.targetId;if(!v.fromCache){const A=m.vs.get(T),k=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(k);m.vs=m.vs.insert(T,N)}}}(r.localStore,o))}async function m0(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){V(Mo,"User change. New user:",e.toKey());const r=await wh(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(u=>{u.forEach(h=>{h.reject(new D(R.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kr(t,r.Ns)}}function g0(n,e){const t=z(n),r=t.Au.get(e);if(r&&r.hu)return Q().add(r.key);{let i=Q();const o=t.Eu.get(e);if(!o)return i;for(const a of o){const u=t.Tu.get(a);i=i.unionWith(u.view.nu)}return i}}function Lh(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=g0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=h0.bind(null,e),e.Pu.H_=Xy.bind(null,e.eventManager),e.Pu.yu=Zy.bind(null,e.eventManager),e}function y0(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=d0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=f0.bind(null,e),e}class vi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return yy(this.persistence,new py,e.initialUser,this.serializer)}Cu(e){return new bh(Ao.Vi,this.serializer)}Du(e){return new xy}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vi.provider={build:()=>new vi};class _0 extends vi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){X(this.persistence.referenceDelegate instanceof yi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Zg(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new bh(r=>yi.Vi(r,t),this.serializer)}}class so{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ll(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=m0.bind(null,this.syncEngine),await Hy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Qy}()}createDatastore(e){const t=zi(e.databaseInfo.databaseId),r=Cy(e.databaseInfo);return Dy(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,u){return new Oy(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>ll(this.syncEngine,t,0),function(){return rl.v()?new rl:new Ey}())}createSyncEngine(e,t){return function(i,o,a,u,h,f,m){const v=new i0(i,o,a,u,h,f);return m&&(v.gu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=z(i);V(en,"RemoteStore shutting down."),o.Ia.add(5),await Cr(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}so.provider={build:()=>new so};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):dt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="FirestoreClient";class b0{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=Ae.UNAUTHENTICATED,this.clientId=mo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{V(Ft,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V(Ft,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ps(n,e){n.asyncQueue.verifyOperationInProgress(),V(Ft,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await wh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function hl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await w0(n);V(Ft,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>sl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>sl(e.remoteStore,i)),n._onlineComponents=e}async function w0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Ft,"Using user provided OfflineComponentProvider");try{await Ps(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Zt("Error using user provided cache. Falling back to memory cache: "+t),await Ps(n,new vi)}}else V(Ft,"Using default OfflineComponentProvider"),await Ps(n,new _0(void 0));return n._offlineComponents}async function Fh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Ft,"Using user provided OnlineComponentProvider"),await hl(n,n._uninitializedComponentsProvider._online)):(V(Ft,"Using default OnlineComponentProvider"),await hl(n,new so))),n._onlineComponents}function I0(n){return Fh(n).then(e=>e.syncEngine)}async function dl(n){const e=await Fh(n),t=e.eventManager;return t.onListen=s0.bind(null,e.syncEngine),t.onUnlisten=c0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=o0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=l0.bind(null,e.syncEngine),t}function T0(n,e,t,r){const i=new v0(r),o=new e0(e,i,t);return n.asyncQueue.enqueueAndForget(async()=>Yy(await dl(n),o)),()=>{i.Nu(),n.asyncQueue.enqueueAndForget(async()=>Jy(await dl(n),o))}}function x0(n,e){const t=new Qt;return n.asyncQueue.enqueueAndForget(async()=>u0(await I0(n),e,t)),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="ComponentProvider",fl=new Map;function S0(n,e,t,r,i){return new Wm(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Uh(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="firestore.googleapis.com",pl=!0;class ml{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bh,this.ssl=pl}else this.host=e.host,this.ssl=e.ssl??pl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Jg)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Pm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uh(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ml({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ml(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wm;switch(r.type){case"firstParty":return new Em(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=fl.get(t);r&&(V(E0,"Removing Datastore"),fl.delete(t),r.terminate())}(this),Promise.resolve()}}function A0(n,e,t,r={}){var f;n=cr(n,Gi);const i=Er(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;i&&mu(`https://${u}`),o.host!==Bh&&o.host!==u&&Zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:i,emulatorOptions:r};if(!jt(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,v;if(typeof r.mockUserToken=="string")m=r.mockUserToken,v=Ae.MOCK_USER;else{m=Kf(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new D(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new Ae(T)}n._authCredentials=new Im(new Cu(m,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ut(this.firestore,e,this._query)}}class me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}toJSON(){return{type:me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Sr(t,me._jsonSchema))return new me(e,r||null,new M(te.fromString(t.referencePath)))}}me._jsonSchemaVersion="firestore/documentReference/1.0",me._jsonSchema={type:de("string",me._jsonSchemaVersion),referencePath:de("string")};class Nt extends Ut{constructor(e,t,r){super(e,t,wo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new M(e))}withConverter(e){return new Nt(this.firestore,e,this._path)}}function _n(n,e,...t){if(n=ke(n),ku("collection","path",e),n instanceof Gi){const r=te.fromString(e,...t);return Ac(r),new Nt(n,null,r)}{if(!(n instanceof me||n instanceof Nt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return Ac(r),new Nt(n.firestore,null,r)}}function R0(n,e,...t){if(n=ke(n),arguments.length===1&&(e=mo.newId()),ku("doc","path",e),n instanceof Gi){const r=te.fromString(e,...t);return Sc(r),new me(n,null,new M(r))}{if(!(n instanceof me||n instanceof Nt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return Sc(r),new me(n.firestore,n instanceof Nt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="AsyncQueue";class yl{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Th(this,"async_queue_retry"),this._c=()=>{const r=ks();r&&V(gl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ks();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ks();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Qt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!On(e))throw e;V(gl,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,dt("INTERNAL UNHANDLED ERROR: ",_l(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Do.createAndSchedule(this,e,t,r,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&L(47125,{Pc:_l(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function _l(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class bi extends Gi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new yl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yl(e),this._firestoreClient=void 0,await e}}}function C0(n,e){const t=typeof n=="object"?n:fo(),r=typeof n=="string"?n:hi,i=on(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Gf("firestore");o&&A0(i,...o)}return i}function Wh(n){if(n._terminated)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||k0(n),n._firestoreClient}function k0(n){var r,i,o,a;const e=n._freezeSettings(),t=S0(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new b0(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(Te.fromBase64String(e))}catch(t){throw new D(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sr(e,Be._jsonSchema))return Be.fromBase64String(e.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:de("string",Be._jsonSchemaVersion),bytes:de("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rt._jsonSchemaVersion}}static fromJSON(e){if(Sr(e,rt._jsonSchema))return new rt(e.latitude,e.longitude)}}rt._jsonSchemaVersion="firestore/geoPoint/1.0",rt._jsonSchema={type:de("string",rt._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ge._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sr(e,Ge._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ge(e.vectorValues);throw new D(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ge._jsonSchemaVersion="firestore/vectorValue/1.0",Ge._jsonSchema={type:de("string",Ge._jsonSchemaVersion),vectorValues:de("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=/^__.*__$/;class N0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ln(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ar(e,this.data,t,this.fieldTransforms)}}function qh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{dataSource:n})}}class Uo{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Uo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return wi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(qh(this.dataSource)&&P0.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class j0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||zi(e)}I(e,t,r,i=!1){return new Uo({dataSource:e,methodName:t,targetDoc:r,path:Ie.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $h(n){const e=n._freezeSettings(),t=zi(n._databaseId);return new j0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function D0(n,e,t,r,i,o={}){const a=n.I(o.merge||o.mergeFields?2:0,e,t,i);Kh("Data must be an object, but it was:",a,r);const u=Gh(r,a);let h,f;if(o.merge)h=new qe(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const v of o.mergeFields){const T=Hi(e,v,t);if(!a.contains(T))throw new D(R.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);L0(m,T)||m.push(T)}h=new qe(m),f=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,f=a.fieldTransforms;return new N0(new Ue(u),h,f)}class Bo extends Fo{_toFieldTransform(e){return new yg(e.path,new br)}isEqual(e){return e instanceof Bo}}function V0(n,e,t,r=!1){return Wo(t,n.I(r?4:3,e))}function Wo(n,e){if(Hh(n=ke(n)))return Kh("Unsupported field value:",e,n),Gh(n,e);if(n instanceof Fo)return function(r,i){if(!qh(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const u of r){let h=Wo(u,i.gc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=re.fromDate(r);return{timestampValue:gi(i.serializer,o)}}if(r instanceof re){const o=new re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gi(i.serializer,o)}}if(r instanceof rt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Be)return{bytesValue:hh(i.serializer,r._byteString)};if(r instanceof me){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Eo(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ge)return function(a,u){const h=a instanceof Ge?a.toArray():a;return{mapValue:{fields:{[Fu]:{stringValue:Uu},[di]:{arrayValue:{values:h.map(m=>{if(typeof m!="number")throw u.yc("VectorValues must only contain numeric values.");return Io(u.serializer,m)})}}}}}}(r,i);if(_h(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Di(r)}`)}(n,e)}function Gh(n,e){const t={};return ju(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):an(n,(r,i)=>{const o=Wo(i,e.dc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Hh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof re||n instanceof rt||n instanceof Be||n instanceof me||n instanceof Fo||n instanceof Ge||_h(n))}function Kh(n,e,t){if(!Hh(t)||!Pu(t)){const r=Di(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function Hi(n,e,t){if((e=ke(e))instanceof zh)return e._internalPath;if(typeof e=="string")return M0(n,e);throw wi("Field path arguments must be of type string or ",n,!1,void 0,t)}const O0=new RegExp("[~\\*/\\[\\]]");function M0(n,e,t){if(e.search(O0)>=0)throw wi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new zh(...e.split("."))._internalPath}catch{throw wi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function wi(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new D(R.INVALID_ARGUMENT,u+n+h)}function L0(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{convertValue(e,t="none"){switch(Mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ot(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return an(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var r,i,o;const t=(o=(i=(r=e.fields)==null?void 0:r[di].arrayValue)==null?void 0:i.values)==null?void 0:o.map(a=>le(a.doubleValue));return new Ge(t)}convertGeoPoint(e){return new rt(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Mi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gr(e));default:return null}}convertTimestamp(e){const t=Vt(e);return new re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=te.fromString(e);X(yh(r),9688,{name:e});const i=new yr(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(t)||dt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh extends F0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,t)}}function Ii(){return new Bo("serverTimestamp")}const vl="@firebase/firestore",bl="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new U0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Hi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class U0 extends Yh{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zo{}class qo extends zo{}function W0(n,e,...t){let r=[];e instanceof zo&&r.push(e),r=r.concat(t),function(o){const a=o.filter(h=>h instanceof Go).length,u=o.filter(h=>h instanceof $o).length;if(a>1||a>0&&u>0)throw new D(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class $o extends qo{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new $o(e,t,r)}_apply(e){const t=this._parse(e);return Jh(e._query,t),new Ut(e.firestore,e.converter,Ys(e._query,t))}_parse(e){const t=$h(e.firestore);return function(o,a,u,h,f,m,v){let T;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new D(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Tl(v,m);const k=[];for(const N of v)k.push(Il(h,o,N));T={arrayValue:{values:k}}}else T=Il(h,o,v)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Tl(v,m),T=V0(u,a,v,m==="in"||m==="not-in");return he.create(f,m,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Go extends zo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Go(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ke.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,o){let a=i;const u=o.getFlattenedFilters();for(const h of u)Jh(a,h),a=Ys(a,h)}(e._query,t),new Ut(e.firestore,e.converter,Ys(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ho extends qo{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ho(e,t)}_apply(e){const t=function(i,o,a){if(i.startAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new D(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vr(o,a)}(e._query,this._field,this._direction);return new Ut(e.firestore,e.converter,og(e._query,t))}}function z0(n,e="asc"){const t=e,r=Hi("orderBy",n);return Ho._create(r,t)}class Ko extends qo{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ko(e,t,r)}_apply(e){return new Ut(e.firestore,e.converter,pi(e._query,this._limit,this._limitType))}}function q0(n){return Ko._create("limit",n,"F")}function Il(n,e,t){if(typeof(t=ke(t))=="string"){if(t==="")throw new D(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ku(e)&&t.indexOf("/")!==-1)throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(te.fromString(t));if(!M.isDocumentKey(r))throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vc(n,new M(r))}if(t instanceof me)return Vc(n,t._key);throw new D(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Di(t)}.`)}function Tl(n,e){if(!Array.isArray(n)||n.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jh(n,e){const t=function(i,o){for(const a of i)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function $0(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yt extends Yh{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Hi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Yt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Yt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Yt._jsonSchema={type:de("string",Yt._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class ri extends Yt{data(e={}){return super.data(e)}}class In{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ar(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ri(this._firestore,this._userDataWriter,r.key,r,new ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const h=new ri(i._firestore,i._userDataWriter,u.doc.key,u.doc,new ar(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new ri(i._firestore,i._userDataWriter,u.doc.key,u.doc,new ar(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,m=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:G0(u.type),doc:h,oldIndex:f,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=In._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function G0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In._jsonSchemaVersion="firestore/querySnapshot/1.0",In._jsonSchema={type:de("string",In._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};function Qo(n,e){const t=cr(n.firestore,bi),r=R0(n),i=$0(n.converter,e),o=$h(n.firestore);return H0(t,[D0(o,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ut.exists(!1))]).then(()=>r)}function Ns(n,...e){var f,m,v;n=ke(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||wl(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(wl(e[r])){const T=e[r];e[r]=(f=T.next)==null?void 0:f.bind(T),e[r+1]=(m=T.error)==null?void 0:m.bind(T),e[r+2]=(v=T.complete)==null?void 0:v.bind(T)}let o,a,u;if(n instanceof me)a=cr(n.firestore,bi),u=wo(n._key.path),o={next:T=>{e[r]&&e[r](K0(a,n,T))},error:e[r+1],complete:e[r+2]};else{const T=cr(n,Ut);a=cr(T.firestore,bi),u=T._query;const A=new Qh(a);o={next:k=>{e[r]&&e[r](new In(a,A,T,k))},error:e[r+1],complete:e[r+2]},B0(n._query)}const h=Wh(a);return T0(h,u,i,o)}function H0(n,e){const t=Wh(n);return x0(t,e)}function K0(n,e,t){const r=t.docs.get(e._key),i=new Qh(n);return new Yt(n,i,e._key,r,new ar(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){bm(jn),ot(new He("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new bi(new Tm(r.getProvider("auth-internal")),new Sm(a,r.getProvider("app-check-internal")),zm(a,i),a);return o={useFetchStreams:t,...o},u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),We(vl,bl,e),We(vl,bl,"esm2020")})();var Q0="firebase",Y0="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(Q0,Y0,"app");function Xh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const J0=Xh,Zh=new sn("auth","Firebase",Xh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new ji("@firebase/auth");function X0(n,...e){Ti.logLevel<=H.WARN&&Ti.warn(`Auth (${jn}): ${n}`,...e)}function ii(n,...e){Ti.logLevel<=H.ERROR&&Ti.error(`Auth (${jn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n,...e){throw Yo(n,...e)}function it(n,...e){return Yo(n,...e)}function ed(n,e,t){const r={...J0(),[e]:t};return new sn("auth","Firebase",r).create(e,{appName:n.name})}function Jt(n){return ed(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Zh.create(n,...e)}function B(n,e,...t){if(!n)throw Yo(e,...t)}function ct(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ii(e),new Error(e)}function mt(n,e){n||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Z0(){return xl()==="http:"||xl()==="https:"}function xl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Z0()||du()||"connection"in navigator)?navigator.onLine:!0}function t_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.shortDelay=e,this.longDelay=t,mt(t>e,"Short delay should be less than long delay!"),this.isMobile=Qf()||Xf()}get(){return e_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(n,e){mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],i_=new Pr(3e4,6e4);function Xo(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Fn(n,e,t,r,i={}){return nd(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=xr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:h,...o};return Jf()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Er(n.emulatorConfig.host)&&(f.credentials="include"),td.fetch()(await rd(n,n.config.apiHost,t,u),f)})}async function nd(n,e,t){n._canInitEmulator=!1;const r={...n_,...e};try{const i=new o_(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Jr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,f]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Jr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Jr(n,"user-disabled",a);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw ed(n,m,f);pt(n,m)}}catch(i){if(i instanceof Qe)throw i;pt(n,"network-request-failed",{message:String(i)})}}async function s_(n,e,t,r,i={}){const o=await Fn(n,e,t,r,i);return"mfaPendingCredential"in o&&pt(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function rd(n,e,t,r){const i=`${e}${t}?${r}`,o=n,a=o.config.emulator?Jo(n.config,i):`${n.config.apiScheme}://${i}`;return r_.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class o_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),i_.get())})}}function Jr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=it(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(n,e){return Fn(n,"POST","/v1/accounts:delete",e)}async function xi(n,e){return Fn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c_(n,e=!1){const t=ke(n),r=await t.getIdToken(e),i=Zo(r);B(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:fr(js(i.auth_time)),issuedAtTime:fr(js(i.iat)),expirationTime:fr(js(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function js(n){return Number(n)*1e3}function Zo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ii("JWT malformed, contained fewer than 3 sections"),null;try{const i=cu(t);return i?JSON.parse(i):(ii("Failed to decode base64 JWT payload"),null)}catch(i){return ii("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function El(n){const e=Zo(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Qe&&l_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function l_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(n){var v;const e=n.auth,t=await n.getIdToken(),r=await Tr(n,xi(e,{idToken:t}));B(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=(v=i.providerUserInfo)!=null&&v.length?id(i.providerUserInfo):[],a=d_(n.providerData,o),u=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),f=u?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ao(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function h_(n){const e=ke(n);await Ei(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function d_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function id(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(n,e){const t=await nd(n,{},async()=>{const r=xr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=await rd(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:u,body:r};return n.emulatorConfig&&Er(n.emulatorConfig.host)&&(h.credentials="include"),td.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function p_(n,e){return Fn(n,"POST","/v2/accounts:revokeToken",Xo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):El(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=El(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await f_(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new Tn;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(B(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $e{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new u_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ao(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return c_(this,e)}reload(){return h_(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $e({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ei(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(Jt(this.auth));const e=await this.getIdToken();return await Tr(this,a_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,u=t.tenantId??void 0,h=t._redirectEventId??void 0,f=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:v,emailVerified:T,isAnonymous:A,providerData:k,stsTokenManager:N}=t;B(v&&N,e,"internal-error");const j=Tn.fromJSON(this.name,N);B(typeof v=="string",e,"internal-error"),Tt(r,e.name),Tt(i,e.name),B(typeof T=="boolean",e,"internal-error"),B(typeof A=="boolean",e,"internal-error"),Tt(o,e.name),Tt(a,e.name),Tt(u,e.name),Tt(h,e.name),Tt(f,e.name),Tt(m,e.name);const q=new $e({uid:v,auth:e,email:i,emailVerified:T,displayName:r,isAnonymous:A,photoURL:a,phoneNumber:o,tenantId:u,stsTokenManager:j,createdAt:f,lastLoginAt:m});return k&&Array.isArray(k)&&(q.providerData=k.map(F=>({...F}))),h&&(q._redirectEventId=h),q}static async _fromIdTokenResponse(e,t,r=!1){const i=new Tn;i.updateFromServerResponse(t);const o=new $e({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ei(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];B(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?id(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new Tn;u.updateFromIdToken(r);const h=new $e({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ao(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new Map;function lt(n){mt(n instanceof Function,"Expected a class definition");let e=Sl.get(n);return e?(mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Sl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sd.type="NONE";const Al=sd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n,e,t){return`firebase:${n}:${e}:${t}`}class xn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=si(this.userKey,i.apiKey,o),this.fullPersistenceKey=si("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await xi(this.auth,{idToken:e}).catch(()=>{});return t?$e._fromGetAccountInfoResponse(this.auth,t,e):null}return $e._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new xn(lt(Al),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||lt(Al);const a=si(r,e.config.apiKey,e.name);let u=null;for(const f of t)try{const m=await f._get(a);if(m){let v;if(typeof m=="string"){const T=await xi(e,{idToken:m}).catch(()=>{});if(!T)break;v=await $e._fromGetAccountInfoResponse(e,T,m)}else v=$e._fromJSON(e,m);f!==o&&(u=v),o=f;break}}catch{}const h=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new xn(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new xn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ld(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(od(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hd(e))return"Blackberry";if(dd(e))return"Webos";if(ad(e))return"Safari";if((e.includes("chrome/")||cd(e))&&!e.includes("edge/"))return"Chrome";if(ud(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function od(n=Ce()){return/firefox\//i.test(n)}function ad(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cd(n=Ce()){return/crios\//i.test(n)}function ld(n=Ce()){return/iemobile/i.test(n)}function ud(n=Ce()){return/android/i.test(n)}function hd(n=Ce()){return/blackberry/i.test(n)}function dd(n=Ce()){return/webos/i.test(n)}function ea(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function m_(n=Ce()){var e;return ea(n)&&!!((e=window.navigator)!=null&&e.standalone)}function g_(){return Zf()&&document.documentMode===10}function fd(n=Ce()){return ea(n)||ud(n)||dd(n)||hd(n)||/windows phone/i.test(n)||ld(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n,e=[]){let t;switch(n){case"Browser":t=Rl(Ce());break;case"Worker":t=`${Rl(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(n,e={}){return Fn(n,"GET","/v2/passwordPolicy",Xo(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=6;class b_{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??v_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cl(this),this.idTokenSubscription=new Cl(this),this.beforeStateQueue=new y_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=lt(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await xn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xi(this,{idToken:e}),r=await $e._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,u=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(r=h.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ei(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(Jt(this));const t=e?ke(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(Jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(Jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await __(this),t=new b_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new sn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await p_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&lt(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await xn.create(this,[lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&X0(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ta(n){return ke(n)}class Cl{constructor(e){this.auth=e,this.observer=null,this.addObserver=op(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function I_(n){na=n}function T_(n){return na.loadJS(n)}function x_(){return na.gapiScript}function E_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n,e){const t=on(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(jt(o,e??{}))return i;pt(i,"already-initialized")}return t.initialize({options:e})}function A_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(lt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function R_(n,e,t){const r=ta(n);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=md(e),{host:a,port:u}=C_(e),h=u===null?"":`:${u}`,f={url:`${o}//${a}${h}/`},m=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(jt(f,r.config.emulator)&&jt(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Er(a)?mu(`${o}//${a}${h}`):k_()}function md(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function C_(n){const e=md(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:kl(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:kl(a)}}}function kl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function k_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,t){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(n,e){return s_(n,"POST","/v1/accounts:signInWithIdp",Xo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="http://localhost";class tn extends gd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...o}=t;if(!r||!i)return null;const a=new tn(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return En(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,En(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,En(e,t)}buildRequest(){const e={requestUri:P_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends yd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Nr{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Nr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Et.credential(t,r)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Nr{constructor(){super("github.com")}static credential(e){return tn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Nr{constructor(){super("twitter.com")}static credential(e,t){return tn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return At.credential(t,r)}catch{return null}}}At.TWITTER_SIGN_IN_METHOD="twitter.com";At.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await $e._fromIdTokenResponse(e,r,i),a=Pl(r);return new Nn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Pl(r);return new Nn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Pl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Qe{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Si.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Si(e,t,r,i)}}function _d(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Si._fromErrorAndOperation(n,o,e,r):o})}async function N_(n,e,t=!1){const r=await Tr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Nn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(n,e,t=!1){const{auth:r}=n;if(et(r.app))return Promise.reject(Jt(r));const i="reauthenticate";try{const o=await Tr(n,_d(r,i,e,n),t);B(o.idToken,r,"internal-error");const a=Zo(o.idToken);B(a,r,"internal-error");const{sub:u}=a;return B(n.uid===u,r,"user-mismatch"),Nn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(n,e,t=!1){if(et(n.app))return Promise.reject(Jt(n));const r="signIn",i=await _d(n,r,e),o=await Nn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function V_(n,e,t,r){return ke(n).onIdTokenChanged(e,t,r)}function O_(n,e,t){return ke(n).beforeAuthStateChanged(e,t)}const Ai="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ai,"1"),this.storage.removeItem(Ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=1e3,L_=10;class bd extends vd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);g_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,L_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},M_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bd.type="LOCAL";const F_=bd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends vd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wd.type="SESSION";const Id=wd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ki(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async f=>f(t.origin,o)),h=await U_(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ki.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const f=ra("",20);i.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(v){const T=v;if(T.data.eventId===f)switch(T.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(T.data.response);break;default:clearTimeout(m),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function W_(n){st().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function z_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function q_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function $_(){return Td()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="firebaseLocalStorageDb",G_=1,Ri="firebaseLocalStorage",Ed="fbase_key";class jr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qi(n,e){return n.transaction([Ri],e?"readwrite":"readonly").objectStore(Ri)}function H_(){const n=indexedDB.deleteDatabase(xd);return new jr(n).toPromise()}function co(){const n=indexedDB.open(xd,G_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ri,{keyPath:Ed})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ri)?e(r):(r.close(),await H_(),e(await co()))})})}async function Nl(n,e,t){const r=Qi(n,!0).put({[Ed]:e,value:t});return new jr(r).toPromise()}async function K_(n,e){const t=Qi(n,!1).get(e),r=await new jr(t).toPromise();return r===void 0?null:r.value}function jl(n,e){const t=Qi(n,!0).delete(e);return new jr(t).toPromise()}const Q_=800,Y_=3;class Sd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await co(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Y_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Td()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ki._getInstance($_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await z_(),!this.activeServiceWorker)return;this.sender=new B_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||q_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await co();return await Nl(e,Ai,"1"),await jl(e,Ai),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>K_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Qi(i,!1).getAll();return new jr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Q_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sd.type="LOCAL";const J_=Sd;new Pr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(n,e){return e?lt(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends gd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return En(e,this._buildIdpRequest())}_linkToIdToken(e,t){return En(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return En(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Z_(n){return D_(n.auth,new ia(n),n.bypassAuthState)}function ev(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),j_(t,new ia(n),n.bypassAuthState)}async function tv(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),N_(t,new ia(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Z_;case"linkViaPopup":case"linkViaRedirect":return tv;case"reauthViaPopup":case"reauthViaRedirect":return ev;default:pt(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=new Pr(2e3,1e4);class vn extends Ad{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=ra();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nv.get())};e()}}vn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="pendingRedirect",oi=new Map;class iv extends Ad{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const r=await sv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}oi.set(this.auth._key(),e)}return this.bypassAuthState||oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sv(n,e){const t=cv(e),r=av(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function ov(n,e){oi.set(n._key(),e)}function av(n){return lt(n._redirectPersistence)}function cv(n){return si(rv,n.config.apiKey,n.name)}async function lv(n,e,t=!1){if(et(n.app))return Promise.reject(Jt(n));const r=ta(n),i=X_(r,e),a=await new iv(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=10*60*1e3;class hv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Rd(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(it(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dl(e))}saveEventToCache(e){this.cachedEventUids.add(Dl(e)),this.lastProcessedEventTime=Date.now()}}function Dl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Rd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv(n,e={}){return Fn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mv=/^https?/;async function gv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fv(n);for(const t of e)try{if(yv(t))return}catch{}pt(n,"unauthorized-domain")}function yv(n){const e=oo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!mv.test(t))return!1;if(pv.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=new Pr(3e4,6e4);function Vl(){const n=st().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function vv(n){return new Promise((e,t)=>{var i,o,a;function r(){Vl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vl(),t(it(n,"network-request-failed"))},timeout:_v.get()})}if((o=(i=st().gapi)==null?void 0:i.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=st().gapi)!=null&&a.load)r();else{const u=E_("iframefcb");return st()[u]=()=>{gapi.load?r():t(it(n,"network-request-failed"))},T_(`${x_()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw ai=null,e})}let ai=null;function bv(n){return ai=ai||vv(n),ai}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=new Pr(5e3,15e3),Iv="__/auth/iframe",Tv="emulator/auth/iframe",xv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ev=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sv(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Jo(e,Tv):`https://${n.config.authDomain}/${Iv}`,r={apiKey:e.apiKey,appName:n.name,v:jn},i=Ev.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${xr(r).slice(1)}`}async function Av(n){const e=await bv(n),t=st().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:Sv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xv,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=it(n,"network-request-failed"),u=st().setTimeout(()=>{o(a)},wv.get());function h(){st().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cv=500,kv=600,Pv="_blank",Nv="http://localhost";class Ol{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jv(n,e,t,r=Cv,i=kv){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h={...Rv,width:r.toString(),height:i.toString(),top:o,left:a},f=Ce().toLowerCase();t&&(u=cd(f)?Pv:t),od(f)&&(e=e||Nv,h.scrollbars="yes");const m=Object.entries(h).reduce((T,[A,k])=>`${T}${A}=${k},`,"");if(m_(f)&&u!=="_self")return Dv(e||"",u),new Ol(null);const v=window.open(e||"",u,m);B(v,n,"popup-blocked");try{v.focus()}catch{}return new Ol(v)}function Dv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="__/auth/handler",Ov="emulator/auth/handler",Mv=encodeURIComponent("fac");async function Ml(n,e,t,r,i,o){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:jn,eventId:i};if(e instanceof yd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",sp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,v]of Object.entries({}))a[m]=v}if(e instanceof Nr){const m=e.getScopes().filter(v=>v!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const m of Object.keys(u))u[m]===void 0&&delete u[m];const h=await n._getAppCheckToken(),f=h?`#${Mv}=${encodeURIComponent(h)}`:"";return`${Lv(n)}?${xr(u).slice(1)}${f}`}function Lv({config:n}){return n.emulator?Jo(n,Ov):`https://${n.authDomain}/${Vv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="webStorageSupport";class Fv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Id,this._completeRedirectFn=lv,this._overrideRedirectResult=ov}async _openPopup(e,t,r,i){var a;mt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Ml(e,t,r,oo(),i);return jv(e,o,ra())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Ml(e,t,r,oo(),i);return W_(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(mt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Av(e),r=new hv(e);return t.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ds,{type:Ds},i=>{var a;const o=(a=i==null?void 0:i[0])==null?void 0:a[Ds];o!==void 0&&t(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fd()||ad()||ea()}}const Uv=Fv;var Ll="@firebase/auth",Fl="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zv(n){ot(new He("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pd(n)},f=new w_(r,i,o,h);return A_(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ot(new He("auth-internal",e=>{const t=ta(e.getProvider("auth").getImmediate());return(r=>new Bv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(Ll,Fl,Wv(n)),We(Ll,Fl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=5*60,$v=hu("authIdTokenMaxAge")||qv;let Ul=null;const Gv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>$v)return;const i=t==null?void 0:t.token;Ul!==i&&(Ul=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Hv(n=fo()){const e=on(n,"auth");if(e.isInitialized())return e.getImmediate();const t=S_(n,{popupRedirectResolver:Uv,persistence:[J_,F_,Id]}),r=hu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Gv(o.toString());O_(t,a,()=>a(t.currentUser)),V_(t,u=>a(u))}}const i=lu("auth");return i&&R_(t,`http://${i}`),t}function Kv(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}I_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=it("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Kv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zv("Browser");const Cd="@firebase/installations",sa="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=1e4,Pd=`w:${sa}`,Nd="FIS_v2",Qv="https://firebaseinstallations.googleapis.com/v1",Yv=60*60*1e3,Jv="installations",Xv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},nn=new sn(Jv,Xv,Zv);function jd(n){return n instanceof Qe&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd({projectId:n}){return`${Qv}/projects/${n}/installations`}function Vd(n){return{token:n.token,requestStatus:2,expiresIn:tb(n.expiresIn),creationTime:Date.now()}}async function Od(n,e){const r=(await e.json()).error;return nn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Md({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function eb(n,{refreshToken:e}){const t=Md(n);return t.append("Authorization",nb(e)),t}async function Ld(n){const e=await n();return e.status>=500&&e.status<600?n():e}function tb(n){return Number(n.replace("s","000"))}function nb(n){return`${Nd} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Dd(n),i=Md(n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:t,authVersion:Nd,appId:n.appId,sdkVersion:Pd},u={method:"POST",headers:i,body:JSON.stringify(a)},h=await Ld(()=>fetch(r,u));if(h.ok){const f=await h.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:Vd(f.authToken)}}else throw await Od("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=/^[cdef][\w-]{21}$/,lo="";function ob(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=ab(n);return sb.test(t)?t:lo}catch{return lo}}function ab(n){return ib(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=new Map;function Bd(n,e){const t=Yi(n);Wd(t,e),cb(t,e)}function Wd(n,e){const t=Ud.get(n);if(t)for(const r of t)r(e)}function cb(n,e){const t=lb();t&&t.postMessage({key:n,fid:e}),ub()}let Kt=null;function lb(){return!Kt&&"BroadcastChannel"in self&&(Kt=new BroadcastChannel("[Firebase] FID Change"),Kt.onmessage=n=>{Wd(n.data.key,n.data.fid)}),Kt}function ub(){Ud.size===0&&Kt&&(Kt.close(),Kt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb="firebase-installations-database",db=1,rn="firebase-installations-store";let Vs=null;function oa(){return Vs||(Vs=_u(hb,db,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(rn)}}})),Vs}async function Ci(n,e){const t=Yi(n),i=(await oa()).transaction(rn,"readwrite"),o=i.objectStore(rn),a=await o.get(t);return await o.put(e,t),await i.done,(!a||a.fid!==e.fid)&&Bd(n,e.fid),e}async function zd(n){const e=Yi(n),r=(await oa()).transaction(rn,"readwrite");await r.objectStore(rn).delete(e),await r.done}async function Ji(n,e){const t=Yi(n),i=(await oa()).transaction(rn,"readwrite"),o=i.objectStore(rn),a=await o.get(t),u=e(a);return u===void 0?await o.delete(t):await o.put(u,t),await i.done,u&&(!a||a.fid!==u.fid)&&Bd(n,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(n){let e;const t=await Ji(n.appConfig,r=>{const i=fb(r),o=pb(n,i);return e=o.registrationPromise,o.installationEntry});return t.fid===lo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function fb(n){const e=n||{fid:ob(),registrationStatus:0};return qd(e)}function pb(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(nn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=mb(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gb(n)}:{installationEntry:e}}async function mb(n,e){try{const t=await rb(n,e);return Ci(n.appConfig,t)}catch(t){throw jd(t)&&t.customData.serverCode===409?await zd(n.appConfig):await Ci(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function gb(n){let e=await Bl(n.appConfig);for(;e.registrationStatus===1;)await Fd(100),e=await Bl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await aa(n);return r||t}return e}function Bl(n){return Ji(n,e=>{if(!e)throw nn.create("installation-not-found");return qd(e)})}function qd(n){return yb(n)?{fid:n.fid,registrationStatus:0}:n}function yb(n){return n.registrationStatus===1&&n.registrationTime+kd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b({appConfig:n,heartbeatServiceProvider:e},t){const r=vb(n,t),i=eb(n,t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:Pd,appId:n.appId}},u={method:"POST",headers:i,body:JSON.stringify(a)},h=await Ld(()=>fetch(r,u));if(h.ok){const f=await h.json();return Vd(f)}else throw await Od("Generate Auth Token",h)}function vb(n,{fid:e}){return`${Dd(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(n,e=!1){let t;const r=await Ji(n.appConfig,o=>{if(!$d(o))throw nn.create("not-registered");const a=o.authToken;if(!e&&Ib(a))return o;if(a.requestStatus===1)return t=bb(n,e),o;{if(!navigator.onLine)throw nn.create("app-offline");const u=xb(o);return t=wb(n,u),u}});return t?await t:r.authToken}async function bb(n,e){let t=await Wl(n.appConfig);for(;t.authToken.requestStatus===1;)await Fd(100),t=await Wl(n.appConfig);const r=t.authToken;return r.requestStatus===0?ca(n,e):r}function Wl(n){return Ji(n,e=>{if(!$d(e))throw nn.create("not-registered");const t=e.authToken;return Eb(t)?{...e,authToken:{requestStatus:0}}:e})}async function wb(n,e){try{const t=await _b(n,e),r={...e,authToken:t};return await Ci(n.appConfig,r),t}catch(t){if(jd(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await zd(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ci(n.appConfig,r)}throw t}}function $d(n){return n!==void 0&&n.registrationStatus===2}function Ib(n){return n.requestStatus===2&&!Tb(n)}function Tb(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Yv}function xb(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Eb(n){return n.requestStatus===1&&n.requestTime+kd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(n){const e=n,{installationEntry:t,registrationPromise:r}=await aa(e);return r?r.catch(console.error):ca(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(n,e=!1){const t=n;return await Rb(t),(await ca(t,e)).token}async function Rb(n){const{registrationPromise:e}=await aa(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(n){if(!n||!n.options)throw Os("App Configuration");if(!n.name)throw Os("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Os(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Os(n){return nn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="installations",kb="installations-internal",Pb=n=>{const e=n.getProvider("app").getImmediate(),t=Cb(e),r=on(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Nb=n=>{const e=n.getProvider("app").getImmediate(),t=on(e,Gd).getImmediate();return{getId:()=>Sb(t),getToken:i=>Ab(t,i)}};function jb(){ot(new He(Gd,Pb,"PUBLIC")),ot(new He(kb,Nb,"PRIVATE"))}jb();We(Cd,sa);We(Cd,sa,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="analytics",Db="firebase_id",Vb="origin",Ob=60*1e3,Mb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",la="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new ji("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Le=new sn("analytics","Analytics",Lb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(n){if(!n.startsWith(la)){const e=Le.create("invalid-gtag-resource",{gtagURL:n});return je.warn(e.message),""}return n}function Hd(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Ub(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Bb(n,e){const t=Ub("firebase-js-sdk-policy",{createScriptURL:Fb}),r=document.createElement("script"),i=`${la}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Wb(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function zb(n,e,t,r,i,o){const a=r[i];try{if(a)await e[a];else{const h=(await Hd(t)).find(f=>f.measurementId===i);h&&await e[h.appId]}}catch(u){je.error(u)}n("config",i,o)}async function qb(n,e,t,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const u=await Hd(t);for(const h of a){const f=u.find(v=>v.measurementId===h),m=f&&e[f.appId];if(m)o.push(m);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",r,i||{})}catch(o){je.error(o)}}function $b(n,e,t,r){async function i(o,...a){try{if(o==="event"){const[u,h]=a;await qb(n,e,t,u,h)}else if(o==="config"){const[u,h]=a;await zb(n,e,t,r,u,h)}else if(o==="consent"){const[u,h]=a;n("consent",u,h)}else if(o==="get"){const[u,h,f]=a;n("get",u,h,f)}else if(o==="set"){const[u]=a;n("set",u)}else n(o,...a)}catch(u){je.error(u)}}return i}function Gb(n,e,t,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=$b(o,n,e,t),{gtagCore:o,wrappedGtag:window[i]}}function Hb(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(la)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=30,Qb=1e3;class Yb{constructor(e={},t=Qb){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Kd=new Yb;function Jb(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Xb(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:Jb(t)},i=Mb.replace("{app-id}",e),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let u="";try{const h=await o.json();(a=h.error)!=null&&a.message&&(u=h.error.message)}catch{}throw Le.create("config-fetch-failed",{httpStatus:o.status,responseMessage:u})}return o.json()}async function Zb(n,e=Kd,t){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw Le.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Le.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new nw;return setTimeout(async()=>{u.abort()},Ob),Qd({appId:r,apiKey:i,measurementId:o},a,u,e)}async function Qd(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Kd){var u;const{appId:o,measurementId:a}=n;try{await ew(r,e)}catch(h){if(a)return je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:a};throw h}try{const h=await Xb(n);return i.deleteThrottleMetadata(o),h}catch(h){const f=h;if(!tw(f)){if(i.deleteThrottleMetadata(o),a)return je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:o,measurementId:a};throw h}const m=Number((u=f==null?void 0:f.customData)==null?void 0:u.httpStatus)===503?pc(t,i.intervalMillis,Kb):pc(t,i.intervalMillis),v={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return i.setThrottleMetadata(o,v),je.debug(`Calling attemptFetch again in ${m} millis`),Qd(n,v,r,i)}}function ew(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(o),r(Le.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function tw(n){if(!(n instanceof Qe)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class nw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rw(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const o=await e,a={...r,send_to:o};n("event",t,a)}}async function iw(n,e,t,r){if(r&&r.global){const i={};for(const o of Object.keys(t))i[`user_properties.${o}`]=t[o];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(){if(fu())try{await pu()}catch(n){return je.warn(Le.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return je.warn(Le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ow(n,e,t,r,i,o,a){const u=Zb(n);u.then(T=>{t[T.measurementId]=T.appId,n.options.measurementId&&T.measurementId!==n.options.measurementId&&je.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>je.error(T)),e.push(u);const h=sw().then(T=>{if(T)return r.getId()}),[f,m]=await Promise.all([u,h]);Hb(o)||Bb(o,f.measurementId),i("js",new Date);const v=(a==null?void 0:a.config)??{};return v[Vb]="firebase",v.update=!0,m!=null&&(v[Db]=m),i("config",f.measurementId,v),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this.app=e}_delete(){return delete Sn[this.app.options.appId],Promise.resolve()}}let Sn={},zl=[];const ql={};let Ms="dataLayer",cw="gtag",$l,ua,Gl=!1;function lw(){const n=[];if(du()&&n.push("This is a browser extension environment."),tp()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Le.create("invalid-analytics-context",{errorInfo:e});je.warn(t.message)}}function uw(n,e,t){lw();const r=n.options.appId;if(!r)throw Le.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Le.create("no-api-key");if(Sn[r]!=null)throw Le.create("already-exists",{id:r});if(!Gl){Wb(Ms);const{wrappedGtag:o,gtagCore:a}=Gb(Sn,zl,ql,Ms,cw);ua=o,$l=a,Gl=!0}return Sn[r]=ow(n,zl,ql,e,$l,Ms,t),new aw(n)}function hw(n=fo()){n=ke(n);const e=on(n,ki);return e.isInitialized()?e.getImmediate():dw(n)}function dw(n,e={}){const t=on(n,ki);if(t.isInitialized()){const i=t.getImmediate();if(jt(e,t.getOptions()))return i;throw Le.create("already-initialized")}return t.initialize({options:e})}function fw(n,e,t){n=ke(n),iw(ua,Sn[n.app.options.appId],e,t).catch(r=>je.error(r))}function pw(n,e,t,r){n=ke(n),rw(ua,Sn[n.app.options.appId],e,t,r).catch(i=>je.error(i))}const Hl="@firebase/analytics",Kl="0.10.21";function mw(){ot(new He(ki,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return uw(r,i,t)},"PUBLIC")),ot(new He("analytics-internal",n,"PRIVATE")),We(Hl,Kl),We(Hl,Kl,"esm2020");function n(e){try{const t=e.getProvider(ki).getImmediate();return{logEvent:(r,i,o)=>pw(t,r,i,o),setUserProperties:(r,i)=>fw(t,r,i)}}catch(t){throw Le.create("interop-component-reg-failed",{reason:t})}}}mw();const Ql={apiKey:"AIzaSyCoFJWEc8z1Z-kddKR8T-QggAFCdm4Y7wI",authDomain:"daywise-ays8t.firebaseapp.com",projectId:"daywise-ays8t",storageBucket:"daywise-ays8t.firebasestorage.app",messagingSenderId:"690549644365",appId:"1:690549644365:web:d895858fbde5497b1c5004",measurementId:void 0};let rr,Yl,Me,gw;try{Ql.apiKey||console.warn("Firebase Hub: Missing VITE_FIREBASE_API_KEY. Initializing in offline simulation mode."),rr=vu(Ql),Yl=Hv(rr),Me=C0(rr),typeof window<"u"&&(gw=hw(rr))}catch{console.error("Firebase Hub: Critical Initialization Error. Forcing local fallback."),rr={},Yl={},Me={}}const yw=({isOpen:n,onClose:e,initialPhone:t="",initialBusinessName:r=""})=>{const[i,o]=O.useState(1),[a,u]=O.useState(r),[h,f]=O.useState("Fashion & Apparel"),[m,v]=O.useState("#f59e0b"),[T,A]=O.useState(t),[k,N]=O.useState("MTN MoMo"),[j,q]=O.useState(""),[F,J]=O.useState("Signature Collection Item"),[ae,Z]=O.useState("150"),[ie,w]=O.useState(0),[y,_]=O.useState("Initializing WaaS template..."),[I,b]=O.useState(!1),x=[{name:"Luxe Gold",hex:"#f59e0b"},{name:"Cyan Glow",hex:"#00ffff"},{name:"Emerald Green",hex:"#10b981"},{name:"Velvet Burgundy",hex:"#9f1239"},{name:"Royal Blue",hex:"#2563eb"}];if(O.useEffect(()=>{if(i===3&&!I){w(0),b(!1);const U=setInterval(()=>{w(xe=>{if(xe>=100)return clearInterval(U),b(!0),100;const be=xe+5;return be<30?_("Configuring SSL domain & mobile layout..."):be<65?_(`Wiring ${k} payment links...`):be<90?_("Connecting automated WhatsApp lead engine..."):_("Website Generated Successfully"),be})},150);return()=>clearInterval(U)}},[i,I,k]),!n)return null;const g=U=>{if(U.preventDefault(),!a.trim()){alert("Please enter your business name.");return}o(2)},fe=async()=>{try{Me&&(await Qo(_n(Me,"onboarding_submissions"),{businessName:a.trim(),industry:h,primaryColor:m,whatsappNumber:T.trim(),momoNetwork:k,momoNumber:j.trim()||T.trim(),itemTitle:F.trim(),itemPrice:parseFloat(ae)||0,status:"pending_claim",createdAt:Ii(),url:typeof window<"u"?window.location.href:"",userAgent:typeof navigator<"u"?navigator.userAgent:""}),console.log("✅ Merchant flyer lead successfully saved to Firestore (onboarding_submissions)."))}catch(U){console.warn("Firestore submission notice (running in offline/demo mode):",U)}},ze=U=>{if(U.preventDefault(),!T.trim()){alert("Please enter your WhatsApp phone number.");return}fe(),o(3)},ve=encodeURIComponent(T.replace(/\D/g,"")),$=encodeURIComponent(a.trim()),Ye=encodeURIComponent(F.trim()),Fe=encodeURIComponent(ae.trim()),gt=`https://wa.me/233${ve}?text=Hi%20${$}%2C%20I'd%20like%20to%20order%20${Ye}%20(GH%E2%82%B5${Fe}).`;return c.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(9, 11, 16, 0.88)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"},children:c.jsxs("div",{style:{background:"rgba(13, 18, 29, 0.95)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"24px",maxWidth:"640px",width:"100%",maxHeight:"90vh",overflowY:"auto",padding:"clamp(1.6rem, 4vw, 2.5rem) clamp(1.2rem, 3vw, 2rem)",position:"relative",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.08)"},children:[c.jsx("button",{onClick:e,"aria-label":"Close dialog",style:{position:"absolute",top:"1.2rem",right:"1.2rem",background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"#FFFFFF",fontSize:"1rem",width:"34px",height:"34px",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease",zIndex:10},children:"✕"}),c.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem",paddingRight:"2rem",paddingLeft:"2rem"},children:[c.jsxs("span",{style:{background:"rgba(0, 240, 255, 0.08)",border:"1px solid rgba(0, 240, 255, 0.25)",color:"#00F0FF",padding:"0.35rem 1rem",borderRadius:"50px",fontSize:"0.72rem",fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase",display:"inline-block",lineHeight:1.4},children:["STOREFRONT BUILDER • STEP ",i," OF 3"]}),c.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"center",marginTop:"1.2rem"},children:[c.jsx("div",{style:{height:"5px",width:"30%",borderRadius:"4px",background:i>=1?"#00F0FF":"rgba(255, 255, 255, 0.1)",transition:"all 0.3s ease"}}),c.jsx("div",{style:{height:"5px",width:"30%",borderRadius:"4px",background:i>=2?"#00F0FF":"rgba(255, 255, 255, 0.1)",transition:"all 0.3s ease"}}),c.jsx("div",{style:{height:"5px",width:"30%",borderRadius:"4px",background:i>=3?"#00F0FF":"rgba(255, 255, 255, 0.1)",transition:"all 0.3s ease"}})]})]}),i===1&&c.jsxs("form",{onSubmit:g,children:[c.jsxs("h2",{className:"heading-luminance",style:{fontSize:"1.6rem",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em",textAlign:"center"},children:["Tell Us About Your ",c.jsx("span",{className:"cyan-luminance",children:"Business"})]}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",marginBottom:"1.8rem"},children:"No technical or design skills needed. Fill in 3 simple details."}),c.jsxs("div",{style:{marginBottom:"1.4rem"},children:[c.jsxs("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.9rem",fontWeight:700,marginBottom:"0.5rem"},children:["Business Name ",c.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),c.jsx("input",{type:"text",placeholder:"e.g. Ama's Kente Boutique, Accra Stone Crafts...",value:a,onChange:U=>u(U.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none"},required:!0})]}),c.jsxs("div",{style:{marginBottom:"1.4rem"},children:[c.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.9rem",fontWeight:700,marginBottom:"0.5rem"},children:"Industry Category"}),c.jsxs("select",{value:h,onChange:U=>f(U.target.value),style:{width:"100%",background:"#10151C",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none"},children:[c.jsx("option",{value:"Fashion & Apparel",children:"Fashion & Apparel"}),c.jsx("option",{value:"Stone Cladding & Construction",children:"Stone Cladding & Construction"}),c.jsx("option",{value:"Food, Spices & Agriculture",children:"Food, Spices & Agriculture"}),c.jsx("option",{value:"Beauty, Hair & Cosmetics",children:"Beauty, Hair & Cosmetics"}),c.jsx("option",{value:"Artisan Services & Susu",children:"Artisan Services & Susu"})]})]}),c.jsxs("div",{style:{marginBottom:"2rem"},children:[c.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"Pick Primary Brand Color"}),c.jsx("div",{style:{display:"flex",gap:"0.8rem",flexWrap:"wrap"},children:x.map(U=>c.jsx("button",{type:"button",onClick:()=>v(U.hex),style:{background:U.hex,border:m===U.hex?"3px solid #ffffff":"1px solid transparent",width:"42px",height:"42px",borderRadius:"50%",cursor:"pointer",boxShadow:m===U.hex?`0 0 15px ${U.hex}`:"none",transition:"transform 0.2s"},title:U.name},U.hex))})]}),c.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"0.85rem",fontSize:"0.95rem"},children:[c.jsx("span",{children:"Continue to Step 2"}),c.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),i===2&&c.jsxs("form",{onSubmit:ze,children:[c.jsxs("h2",{style:{fontSize:"1.8rem",fontWeight:800,marginBottom:"0.5rem"},children:["Connect ",c.jsx("span",{className:"neon-text",children:"WhatsApp & MoMo"})]}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",marginBottom:"1.8rem"},children:"Where should customer orders and Mobile Money payments be routed?"}),c.jsxs("div",{style:{marginBottom:"1.4rem"},children:[c.jsxs("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.9rem",fontWeight:700,marginBottom:"0.5rem"},children:["WhatsApp Business Phone Number ",c.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),c.jsx("input",{type:"text",placeholder:"e.g. 024 123 4567 or 054 000 1122",value:T,onChange:U=>A(U.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none"},required:!0})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"1rem",marginBottom:"1.4rem"},children:[c.jsxs("div",{children:[c.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.85rem",fontWeight:700,marginBottom:"0.5rem"},children:"MoMo Network"}),c.jsxs("select",{value:k,onChange:U=>N(U.target.value),style:{width:"100%",background:"#10151C",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 0.8rem",borderRadius:"10px",fontSize:"0.85rem",outline:"none"},children:[c.jsx("option",{value:"MTN MoMo",children:"MTN MoMo"}),c.jsx("option",{value:"Telecel Cash",children:"Telecel Cash"}),c.jsx("option",{value:"AT Money",children:"AT Money"})]})]}),c.jsxs("div",{children:[c.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.85rem",fontWeight:700,marginBottom:"0.5rem"},children:"MoMo Payment Phone Number"}),c.jsx("input",{type:"text",placeholder:"e.g. 054 000 1122",value:j,onChange:U=>q(U.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none"}})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"1rem",marginBottom:"2rem"},children:[c.jsxs("div",{children:[c.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.85rem",fontWeight:700,marginBottom:"0.5rem"},children:"Sample Item / Service Name"}),c.jsx("input",{type:"text",value:F,onChange:U=>J(U.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none"}})]}),c.jsxs("div",{children:[c.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.85rem",fontWeight:700,marginBottom:"0.5rem"},children:"Price (GH₵)"}),c.jsx("input",{type:"number",value:ae,onChange:U=>Z(U.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none"}})]})]}),c.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[c.jsx("button",{type:"button",onClick:()=>o(1),className:"btn-secondary",style:{padding:"0.85rem 1.4rem",fontSize:"0.92rem"},children:c.jsx("span",{children:"← Back"})}),c.jsxs("button",{type:"submit",className:"btn-primary",style:{flexGrow:1,padding:"0.85rem 1.6rem",fontSize:"0.95rem"},children:[c.jsx("span",{children:"Generate Website in 30 Seconds"}),c.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]}),i===3&&c.jsx("div",{children:I?c.jsxs("div",{children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:"1.5rem"},children:[c.jsx("span",{style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid #10b981",color:"#10b981",padding:"0.35rem 1.2rem",borderRadius:"20px",fontWeight:700,fontSize:"0.78rem",letterSpacing:"0.5px"},children:"WEBSITE GENERATED SUCCESSFULLY"}),c.jsx("h2",{style:{fontSize:"1.8rem",fontWeight:900,marginTop:"0.8rem",color:"#fff"},children:a}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"Mobile-optimized starter website ready for instant WhatsApp lead routing."})]}),c.jsxs("div",{style:{border:`2px solid ${m}`,borderRadius:"20px",background:"#0d1117",padding:"1.5rem",maxWidth:"380px",margin:"0 auto 2rem",boxShadow:`0 10px 30px ${m}33`,textAlign:"center"},children:[c.jsxs("div",{style:{borderBottom:"1px solid rgba(255,255,255,0.1)",paddingBottom:"1rem",marginBottom:"1rem"},children:[c.jsx("div",{style:{fontSize:"1.3rem",fontWeight:900,color:m,textTransform:"uppercase"},children:a}),c.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)",letterSpacing:"1px"},children:h})]}),c.jsxs("div",{style:{background:"rgba(255,255,255,0.04)",borderRadius:"12px",padding:"1rem",marginBottom:"1rem"},children:[c.jsx("div",{style:{fontSize:"1.1rem",fontWeight:800,color:"#fff"},children:F}),c.jsxs("div",{style:{fontSize:"1.4rem",fontWeight:900,color:m,margin:"0.4rem 0"},children:["GH₵ ",ae]}),c.jsxs("div",{style:{fontSize:"0.78rem",color:"#ffcc00"},children:["Pay via ",k," (",j||T,")"]})]}),c.jsx("a",{href:gt,target:"_blank",rel:"noopener noreferrer",style:{background:"#10b981",color:"#07090E",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.4rem",padding:"0.75rem 1.4rem",borderRadius:"8px",fontWeight:800,fontSize:"0.88rem"},children:c.jsx("span",{children:"Order via WhatsApp"})})]}),c.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[c.jsxs("a",{href:`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I%20just%20generated%20a%20starter%20website%20for%20"${encodeURIComponent(a)}"%20and%20I'd%20like%20to%20claim%20it.`,target:"_blank",rel:"noopener noreferrer",className:"btn-primary",style:{textDecoration:"none",padding:"0.85rem 1.8rem",fontSize:"0.92rem"},children:[c.jsx("span",{children:"Claim My Website on Kone Digital"}),c.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),c.jsx("button",{onClick:()=>o(1),className:"btn-secondary",style:{padding:"0.85rem 1.5rem",fontSize:"0.92rem"},children:"Create Another Flyer"})]})]}):c.jsxs("div",{style:{textAlign:"center",padding:"2rem 1rem"},children:[c.jsx("div",{style:{width:"48px",height:"48px",margin:"0 auto 1.5rem",borderRadius:"50%",border:"3px solid rgba(0,255,255,0.2)",borderTopColor:"var(--cyan-glow)",animation:"spin 1s linear infinite"}}),c.jsxs("h2",{style:{fontSize:"1.8rem",fontWeight:800,marginBottom:"0.8rem"},children:["Generating ",c.jsx("span",{className:"neon-text",children:a})]}),c.jsx("p",{style:{color:"var(--cyan-glow)",fontSize:"1rem",fontWeight:700,marginBottom:"1.5rem"},children:y}),c.jsx("div",{style:{background:"rgba(255,255,255,0.08)",height:"12px",borderRadius:"10px",overflow:"hidden",maxWidth:"450px",margin:"0 auto 1rem"},children:c.jsx("div",{style:{width:`${ie}%`,height:"100%",background:"linear-gradient(90deg, var(--cyan-glow), var(--gold-accent))",transition:"width 0.2s ease"}})}),c.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:[ie,"% Completed"]})]})})]})})},Jl=({onOpenWizard:n})=>{const[e,t]=O.useState("whatsapp"),[r,i]=O.useState("0241234567"),[o,a]=O.useState("Hi! I'd like to place an order from your website catalog."),[u,h]=O.useState(!1),[f,m]=O.useState("Accra Modern Boutique"),[v,T]=O.useState("Kwame Mensah"),[A,k]=O.useState("Handmade Kente Blazer"),[N,j]=O.useState("450"),[q,F]=O.useState("MTN MoMo: 0540001122"),[J,ae]=O.useState("myoldwebsite.com"),[Z,ie]=O.useState(!1),[w,y]=O.useState(!1),I=`https://wa.me/233${r.replace(/\D/g,"")}?text=${encodeURIComponent(o)}`,b=()=>{navigator.clipboard.writeText(I),h(!0),setTimeout(()=>h(!1),2e3)},x=g=>{g.preventDefault(),ie(!0),y(!1),setTimeout(()=>{ie(!1),y(!0)},1800)};return c.jsxs("section",{className:"free-tools-section",id:"tools",style:{padding:"4rem 1rem",maxWidth:"1100px",margin:"0 auto"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[c.jsxs("span",{className:"badge-pill cyan",style:{marginBottom:"1rem"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"var(--cyan-glow)"}}),"FREE UTILITY TOOLS"]}),c.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.8rem, 4vw, 2.6rem)",fontWeight:850,marginTop:"0.8rem"},children:["Digital Commerce Tools for ",c.jsx("span",{className:"cyan-luminance",children:"African Merchants"})]}),c.jsx("p",{style:{color:"#94A3B8",fontSize:"1.05rem",marginTop:"0.5rem",maxWidth:"650px",margin:"0.5rem auto 0",letterSpacing:"-0.01em"},children:"Free standalone utilities to streamline your WhatsApp customer communications and Mobile Money payment records."}),c.jsxs("div",{style:{display:"flex",gap:"0.6rem",justifyContent:"center",flexWrap:"wrap",marginTop:"2rem"},children:[c.jsx("button",{onClick:()=>t("whatsapp"),style:{background:e==="whatsapp"?"rgba(255, 255, 255, 0.12)":"var(--bg-surface)",color:e==="whatsapp"?"#fff":"var(--text-muted)",border:"1px solid "+(e==="whatsapp"?"rgba(255, 255, 255, 0.25)":"var(--border-subtle)"),padding:"0.6rem 1.4rem",borderRadius:"8px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"all 0.2s"},children:"WhatsApp Link Maker"}),c.jsx("button",{onClick:()=>t("invoice"),style:{background:e==="invoice"?"rgba(255, 255, 255, 0.12)":"var(--bg-surface)",color:e==="invoice"?"#fff":"var(--text-muted)",border:"1px solid "+(e==="invoice"?"rgba(255, 255, 255, 0.25)":"var(--border-subtle)"),padding:"0.6rem 1.4rem",borderRadius:"8px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"all 0.2s"},children:"MoMo Invoice Generator"}),c.jsx("button",{onClick:()=>t("speed"),style:{background:e==="speed"?"rgba(255, 255, 255, 0.12)":"var(--bg-surface)",color:e==="speed"?"#fff":"var(--text-muted)",border:"1px solid "+(e==="speed"?"rgba(255, 255, 255, 0.25)":"var(--border-subtle)"),padding:"0.6rem 1.4rem",borderRadius:"8px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"all 0.2s"},children:"Mobile Speed Auditor"})]})]}),c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",borderRadius:"20px",padding:"clamp(1.4rem, 3vw, 2.5rem) clamp(1rem, 2.5vw, 2rem)",boxShadow:"0 20px 50px rgba(0,0,0,0.5)",minHeight:"400px"},children:[e==="whatsapp"&&c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 280px), 1fr))",gap:"2rem",alignItems:"center"},children:[c.jsxs("div",{children:[c.jsx("h3",{style:{fontSize:"1.3rem",color:"#fff",fontWeight:800,marginBottom:"0.5rem"},children:"WhatsApp Order Link Maker"}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"1.5rem"},children:"Generate instant click-to-chat links with custom greetings for your Instagram bio, TikTok, or posters."}),c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{htmlFor:"wa-phone-input",style:{display:"block",fontSize:"0.85rem",fontWeight:700,marginBottom:"0.4rem",color:"var(--text-main)"},children:"WhatsApp Phone Number (Ghana)"}),c.jsx("input",{id:"wa-phone-input","aria-label":"WhatsApp Phone Number",type:"text",value:r,onChange:g=>i(g.target.value),placeholder:"e.g. 0241234567",style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.75rem 1rem",borderRadius:"8px",fontSize:"0.92rem",outline:"none"}})]}),c.jsxs("div",{style:{marginBottom:"1.5rem"},children:[c.jsx("label",{htmlFor:"wa-message-textarea",style:{display:"block",fontSize:"0.85rem",fontWeight:700,marginBottom:"0.4rem",color:"var(--text-main)"},children:"Pre-filled Greeting / Order Message"}),c.jsx("textarea",{id:"wa-message-textarea","aria-label":"Pre-filled Greeting or Order Message",value:o,onChange:g=>a(g.target.value),rows:3,style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.75rem 1rem",borderRadius:"8px",fontSize:"0.92rem",outline:"none",resize:"none"}})]}),c.jsxs("div",{style:{display:"flex",gap:"0.8rem",flexWrap:"wrap"},children:[c.jsx("button",{onClick:b,style:{background:u?"#10b981":"#25d366",color:"#07090E",border:"none",padding:"0.65rem 1.4rem",borderRadius:"8px",fontWeight:800,fontSize:"0.88rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:u?"Link Copied to Clipboard":"Copy WhatsApp Link"}),c.jsx("button",{onClick:()=>{const g=r.replace(/\D/g,"");window.open(`https://wa.me/233${g}?text=${encodeURIComponent(o)}`,"_blank","noopener,noreferrer")},style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"var(--text-main)",padding:"0.65rem 1.4rem",borderRadius:"8px",fontWeight:700,fontSize:"0.88rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:"Test Link ➔"})]})]}),c.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"16px",padding:"1.5rem 1.2rem",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700,letterSpacing:"1px",marginBottom:"0.8rem"},children:"YOUR GENERATED WHATSAPP URL"}),c.jsx("div",{style:{background:"rgba(255,255,255,0.04)",padding:"0.8rem",borderRadius:"8px",wordBreak:"break-all",fontFamily:"monospace",fontSize:"0.82rem",color:"#25d366",marginBottom:"1.5rem"},children:I}),c.jsxs("div",{style:{background:"rgba(0, 255, 255, 0.05)",border:"1px solid rgba(0, 255, 255, 0.2)",borderRadius:"12px",padding:"1.2rem",marginTop:"1rem"},children:[c.jsx("div",{style:{fontSize:"1rem",fontWeight:800,color:"#fff",marginBottom:"0.4rem"},children:"Need a Full Website Instead of Just a Link?"}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.82rem",marginBottom:"1rem",lineHeight:1.5},children:"Turn this WhatsApp number into a high-converting digital storefront with automated MoMo checkout in 30 seconds."}),c.jsxs("button",{onClick:()=>n({phone:r}),className:"btn-primary",style:{width:"100%",padding:"0.75rem 1.4rem",fontSize:"0.88rem"},children:[c.jsx("span",{children:"Generate Storefront"}),c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]})]}),e==="invoice"&&c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 280px), 1fr))",gap:"2rem"},children:[c.jsxs("div",{children:[c.jsx("h3",{style:{fontSize:"1.3rem",color:"#fff",fontWeight:800,marginBottom:"0.5rem"},children:"MoMo Business Invoice Generator"}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"1.5rem"},children:"Generate clean, shareable digital receipts for clients with embedded Mobile Money payment prompts."}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",gap:"0.8rem",marginBottom:"1rem"},children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"inv-biz-input",style:{display:"block",fontSize:"0.82rem",fontWeight:700,marginBottom:"0.3rem",color:"var(--text-main)"},children:"Your Business"}),c.jsx("input",{id:"inv-biz-input","aria-label":"Your Business Name",type:"text",value:f,onChange:g=>m(g.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.65rem",borderRadius:"6px",fontSize:"0.88rem"}})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"inv-client-input",style:{display:"block",fontSize:"0.82rem",fontWeight:700,marginBottom:"0.3rem",color:"var(--text-main)"},children:"Customer Name"}),c.jsx("input",{id:"inv-client-input","aria-label":"Customer Name",type:"text",value:v,onChange:g=>T(g.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.65rem",borderRadius:"6px",fontSize:"0.88rem"}})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",gap:"0.8rem",marginBottom:"1rem"},children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"inv-item-input",style:{display:"block",fontSize:"0.82rem",fontWeight:700,marginBottom:"0.3rem",color:"var(--text-main)"},children:"Item / Service"}),c.jsx("input",{id:"inv-item-input","aria-label":"Item or Service",type:"text",value:A,onChange:g=>k(g.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.65rem",borderRadius:"6px",fontSize:"0.88rem"}})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"inv-amount-input",style:{display:"block",fontSize:"0.82rem",fontWeight:700,marginBottom:"0.3rem",color:"var(--text-main)"},children:"Amount (GH₵)"}),c.jsx("input",{id:"inv-amount-input","aria-label":"Amount in Ghana Cedis",type:"number",value:N,onChange:g=>j(g.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.65rem",borderRadius:"6px",fontSize:"0.88rem"}})]})]}),c.jsxs("div",{style:{marginBottom:"1.5rem"},children:[c.jsx("label",{htmlFor:"inv-momo-input",style:{display:"block",fontSize:"0.82rem",fontWeight:700,marginBottom:"0.3rem",color:"var(--text-main)"},children:"MoMo Payment Prompt"}),c.jsx("input",{id:"inv-momo-input","aria-label":"Mobile Money Payment Instructions",type:"text",value:q,onChange:g=>F(g.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.65rem",borderRadius:"6px",fontSize:"0.88rem"}})]}),c.jsx("button",{onClick:()=>window.print(),style:{background:"rgba(255,255,255,0.1)",color:"#fff",border:"1px solid rgba(255,255,255,0.2)",padding:"0.65rem 1.4rem",borderRadius:"8px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer"},children:"Print / Save as PDF"})]}),c.jsxs("div",{style:{background:"#ffffff",color:"#111827",borderRadius:"12px",padding:"1.8rem",boxShadow:"0 10px 30px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",borderBottom:"2px solid #e5e7eb",paddingBottom:"1rem",marginBottom:"1rem"},children:[c.jsxs("div",{children:[c.jsx("h4",{style:{fontSize:"1.2rem",fontWeight:900,color:"#111827"},children:f}),c.jsx("span",{style:{fontSize:"0.75rem",color:"#6b7280"},children:"OFFICIAL INVOICE / RECEIPT"})]}),c.jsxs("div",{style:{textAlign:"right",fontSize:"0.78rem",color:"#6b7280"},children:["DATE: ",new Date().toLocaleDateString()]})]}),c.jsxs("div",{style:{fontSize:"0.85rem",marginBottom:"1.2rem"},children:[c.jsx("strong",{children:"Billed To:"})," ",v]}),c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.85rem",marginBottom:"1.2rem"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{background:"#f3f4f6",textAlign:"left"},children:[c.jsx("th",{style:{padding:"0.4rem 0.6rem"},children:"Description"}),c.jsx("th",{style:{padding:"0.4rem 0.6rem",textAlign:"right"},children:"Total"})]})}),c.jsx("tbody",{children:c.jsxs("tr",{children:[c.jsx("td",{style:{padding:"0.6rem"},children:A}),c.jsxs("td",{style:{padding:"0.6rem",textAlign:"right",fontWeight:700},children:["GH₵ ",N]})]})})]})]}),c.jsxs("div",{style:{background:"#fef3c7",padding:"0.8rem",borderRadius:"8px",border:"1px dashed #d97706",fontSize:"0.82rem",textAlign:"center"},children:[c.jsx("span",{style:{fontWeight:800,color:"#92400e"},children:"Payment Instructions:"}),c.jsx("div",{style:{color:"#78350f",marginTop:"0.2rem"},children:q})]})]})]}),e==="speed"&&c.jsxs("div",{style:{maxWidth:"650px",margin:"0 auto",textAlign:"center"},children:[c.jsx("h3",{style:{fontSize:"1.3rem",color:"#fff",fontWeight:800,marginBottom:"0.5rem"},children:"African Mobile Speed Auditor"}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",marginBottom:"2rem"},children:"Test your existing website’s load speed across MTN & Telecel 3G/4G networks in Ghana."}),c.jsxs("form",{onSubmit:x,style:{display:"flex",gap:"0.8rem",justifyContent:"center",marginBottom:"2rem",flexWrap:"wrap"},children:[c.jsx("input",{id:"speed-audit-url","aria-label":"Website domain or URL to audit",type:"text",value:J,onChange:g=>ae(g.target.value),placeholder:"e.g. yourbusiness.com",style:{flexGrow:1,minWidth:"240px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.75rem 1.2rem",borderRadius:"8px",fontSize:"0.95rem",outline:"none"},required:!0}),c.jsx("button",{type:"submit",className:"btn-primary",style:{padding:"0.75rem 1.8rem",fontSize:"0.88rem"},disabled:Z,children:Z?"Testing Speed...":c.jsxs(c.Fragment,{children:[c.jsx("span",{children:"Audit Speed"}),c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})})]}),w&&c.jsxs("div",{style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(239,68,68,0.3)",borderRadius:"16px",padding:"2rem",textAlign:"left"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",flexWrap:"wrap",gap:"0.5rem"},children:[c.jsx("span",{style:{color:"#ef4444",fontWeight:700,fontSize:"0.82rem",letterSpacing:"0.5px"},children:"SPEED BOTTLENECK DETECTED"}),c.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:["Host: ",J]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"1rem",marginBottom:"1.5rem"},children:[c.jsxs("div",{style:{background:"rgba(239,68,68,0.1)",padding:"1rem",borderRadius:"10px",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"1.8rem",fontWeight:900,color:"#ef4444"},children:"Heavy"}),c.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Legacy CMS Plugin Overhead"})]}),c.jsxs("div",{style:{background:"rgba(255,204,0,0.1)",padding:"1rem",borderRadius:"10px",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"1.8rem",fontWeight:900,color:"#ffcc00"},children:"3G / 4G"}),c.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Mobile Network Latency"})]}),c.jsxs("div",{style:{background:"rgba(16,185,129,0.1)",padding:"1rem",borderRadius:"10px",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"1.8rem",fontWeight:900,color:"#10b981"},children:"Sub-1s"}),c.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Kone Digital Target TTFB"})]})]}),c.jsx("div",{style:{textAlign:"center"},children:c.jsxs("button",{onClick:()=>n({businessName:J.replace(/\..+/,"")}),className:"btn-primary",style:{padding:"0.85rem 2rem",fontSize:"0.92rem"},children:[c.jsx("span",{children:"Migrate to Managed WaaS"}),c.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})})]})]})]})]})},_w=()=>{const n=[{id:1,time:"10:42 AM",name:"Kwame A.",location:"Accra, Greater Accra",action:"Ordered: Kente Palazzo Pant",amount:"GH₵ 220",status:"WhatsApp Dispatched"},{id:2,time:"09:15 AM",name:"Sarah O.",location:"Kumasi, Ashanti Region",action:"MoMo Payment Prompt",amount:"GH₵ 450",status:"Paid via MTN MoMo"},{id:3,time:"Yesterday",name:"David Mensah",location:"Takoradi, Western Region",action:"Requested Stone Cladding Quote",amount:"GH₵ 1,800",status:"Follow Up Sent"}];return c.jsxs("section",{className:"crm-preview-section",id:"crm",style:{padding:"4rem 1rem",maxWidth:"1100px",margin:"0 auto"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[c.jsxs("span",{className:"badge-pill emerald",style:{marginBottom:"1rem"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10B981"}}),"INTEGRATED MERCHANT CRM • REAL-TIME NOTIFICATIONS"]}),c.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.8rem, 4vw, 2.6rem)",fontWeight:850,marginTop:"0.8rem"},children:["Centralize Every WhatsApp ",c.jsx("span",{className:"emerald-luminance",children:"Order & MoMo Lead"})]}),c.jsx("p",{style:{color:"#94A3B8",fontSize:"1.05rem",marginTop:"0.5rem",maxWidth:"650px",margin:"0.5rem auto 0",letterSpacing:"-0.01em"},children:"Real-time visibility into customer orders, instant Mobile Money reconciliations, and automated dispatch workflows."})]}),c.jsxs("div",{className:"neon-border",style:{background:"#0d1117",borderRadius:"20px",padding:"clamp(1.2rem, 3vw, 2rem) clamp(0.8rem, 2vw, 1.8rem)",boxShadow:"0 20px 50px rgba(0,0,0,0.6)"},children:[c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 180px), 1fr))",gap:"1rem",marginBottom:"1.5rem"},children:[c.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"1rem"},children:[c.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:"TODAY'S WHATSAPP LEADS"}),c.jsx("div",{style:{fontSize:"1.6rem",fontWeight:900,color:"#10b981",marginTop:"0.3rem"},children:"14 Leads"}),c.jsx("span",{style:{fontSize:"0.72rem",color:"#10b981"},children:"↑ +35% vs yesterday"})]}),c.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"1rem"},children:[c.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:"MOMO REVENUE PIPELINE"}),c.jsx("div",{style:{fontSize:"1.6rem",fontWeight:900,color:"var(--gold-accent)",marginTop:"0.3rem"},children:"GH₵ 4,850"}),c.jsx("span",{style:{fontSize:"0.72rem",color:"var(--gold-accent)"},children:"Direct network settlement"})]}),c.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"1rem"},children:[c.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:"MORNING DIGEST STATUS"}),c.jsx("div",{style:{fontSize:"1.6rem",fontWeight:900,color:"var(--cyan-glow)",marginTop:"0.3rem"},children:"Active"}),c.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:"Delivered daily at 08:00 GMT"})]})]}),c.jsx("div",{style:{overflowX:"auto",WebkitOverflowScrolling:"touch",width:"100%"},children:c.jsxs("table",{style:{width:"100%",minWidth:"550px",borderCollapse:"collapse",fontSize:"0.85rem"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.1)",textAlign:"left",color:"var(--text-muted)",fontSize:"0.78rem"},children:[c.jsx("th",{style:{padding:"0.75rem 1rem"},children:"TIME"}),c.jsx("th",{style:{padding:"0.75rem 1rem"},children:"CUSTOMER & LOCATION"}),c.jsx("th",{style:{padding:"0.75rem 1rem"},children:"ITEM / ACTION"}),c.jsx("th",{style:{padding:"0.75rem 1rem"},children:"VALUE"}),c.jsx("th",{style:{padding:"0.75rem 1rem"},children:"STATUS"})]})}),c.jsx("tbody",{children:n.map(e=>c.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[c.jsx("td",{style:{padding:"1rem",color:"var(--text-muted)"},children:e.time}),c.jsxs("td",{style:{padding:"1rem",fontWeight:700,color:"#fff"},children:[e.name,c.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:400},children:e.location})]}),c.jsx("td",{style:{padding:"1rem",color:"var(--text-main)"},children:e.action}),c.jsx("td",{style:{padding:"1rem",fontWeight:800,color:"var(--gold-accent)"},children:e.amount}),c.jsx("td",{style:{padding:"1rem"},children:c.jsx("span",{style:{background:e.status.includes("Paid")?"rgba(16,185,129,0.15)":"rgba(0,255,255,0.15)",color:e.status.includes("Paid")?"#10b981":"var(--cyan-glow)",padding:"0.25rem 0.75rem",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700},children:e.status})})]},e.id))})]})})]})]})},Yd=O.createContext(void 0),vw=({children:n})=>{const[e,t]=O.useState(()=>localStorage.getItem("kdigital-currency")||"GHS"),[r,i]=O.useState(.07),[o,a]=O.useState(!0),u=f=>{t(f),localStorage.setItem("kdigital-currency",f)};O.useEffect(()=>{(async()=>{try{a(!0);const v=await(await fetch("https://open.er-api.com/v6/latest/GHS")).json();v.rates&&v.rates.USD&&i(v.rates.USD)}catch(m){console.error("Failed to fetch exchange rate:",m)}finally{a(!1)}})()},[]);const h=f=>e==="GHS"?`GHS ${f.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}`:`$${(f*r).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}`;return c.jsx(Yd.Provider,{value:{currency:e,setCurrency:u,exchangeRate:r,formatPrice:h,isLoading:o},children:n})},ha=()=>{const n=O.useContext(Yd);if(n===void 0)throw new Error("useCurrency must be used within a CurrencyProvider");return n},Oe={Store:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.85},children:[c.jsx("path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}),c.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),c.jsx("path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}),c.jsx("path",{d:"M2 7h20"})]}),TrendUp:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.7},children:[c.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),c.jsx("polyline",{points:"16 7 22 7 22 13"})]}),Message:()=>c.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.7},children:c.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),CreditCard:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.7},children:[c.jsx("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}),c.jsx("line",{x1:"2",x2:"22",y1:"10",y2:"10"})]}),Plus:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Sliders:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"4",x2:"20",y1:"21",y2:"21"}),c.jsx("line",{x1:"4",x2:"20",y1:"14",y2:"14"}),c.jsx("line",{x1:"4",x2:"20",y1:"7",y2:"7"}),c.jsx("circle",{cx:"8",cy:"7",r:"2"}),c.jsx("circle",{cx:"16",cy:"14",r:"2"}),c.jsx("circle",{cx:"10",cy:"21",r:"2"})]}),ExternalLink:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M15 3h6v6"}),c.jsx("path",{d:"M10 14 21 3"}),c.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"})]}),Share:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"18",cy:"5",r:"3"}),c.jsx("circle",{cx:"6",cy:"12",r:"3"}),c.jsx("circle",{cx:"18",cy:"19",r:"3"}),c.jsx("line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}),c.jsx("line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"})]}),Inbox:()=>c.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.4},children:[c.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),c.jsx("path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),Headphones:()=>c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"})})},bw=()=>{const{currency:n,setCurrency:e,formatPrice:t}=ha(),[r,i]=O.useState("My New Business"),[o,a]=O.useState(["My New Business","Ama Heritage Kente","Sedemson Stone","Emewear"]),[u,h]=O.useState("EN"),[f,m]=O.useState("overview"),[v,T]=O.useState(!1),[A,k]=O.useState(!1),[N,j]=O.useState(!1),[q,F]=O.useState([]),[J,ae]=O.useState([]),[Z,ie]=O.useState(!1),[w,y]=O.useState(""),[_,I]=O.useState(""),[b,x]=O.useState("General");O.useEffect(()=>{if(!(!Me||!Me.type))try{const $=Ns(_n(Me,"onboarding_submissions"),U=>{ie(!0);const xe=[];U.forEach(be=>{const ce=be.data();ce.businessName&&!xe.includes(ce.businessName)&&xe.push(ce.businessName)}),xe.length>0&&a(be=>Array.from(new Set([...xe,...be])))},U=>{console.log("Firestore Business Sync notice:",U.message)}),Ye=Ns(_n(Me,"merchant_products"),U=>{const xe=[];U.forEach(be=>{const ce=be.data();xe.push({id:be.id,title:ce.title||"Untitled",price:Number(ce.price)||0,category:ce.category||"General",status:ce.status||"In Stock"})}),F(xe)},U=>{console.log("Firestore Product Sync notice:",U.message)}),Fe=W0(_n(Me,"merchant_activity"),z0("createdAt","desc"),q0(20)),gt=Ns(Fe,U=>{const xe=[];U.forEach(be=>{const ce=be.data();xe.push({id:be.id,time:ce.time||"Just now",type:ce.type||"order",title:ce.title||"Customer Action",detail:ce.detail||"",amount:ce.amount,badge:ce.badge||"Activity",badgeColor:ce.badgeColor||"var(--cyan-glow)"})}),ae(xe)},U=>{console.log("Firestore Activity Sync notice:",U.message)});return()=>{$(),Ye(),gt()}}catch($){console.log("Firestore init notice:",$)}},[]);const g=[{id:"a1",time:"Demo Sample",type:"order",title:"Customer ordered via WhatsApp",detail:"Kwame A. (Accra) • Sample Product",amount:t(150),badge:"WhatsApp",badgeColor:"#10b981"}],fe=N?g:J,ze=async $=>{if($.preventDefault(),!w.trim()||!_.trim())return;const Ye=parseFloat(_)||0,Fe={title:w.trim(),price:Ye,category:b,status:"In Stock",businessName:r,createdAt:Ii?Ii():new Date().toISOString()};try{Me&&Me.type?await Qo(_n(Me,"merchant_products"),Fe):F(gt=>[{...Fe,id:Date.now().toString()},...gt])}catch{F(U=>[{...Fe,id:Date.now().toString()},...U])}y(""),I(""),k(!1)},ve={EN:{planStatus:"Active Plan",visits:"Page Visits",orders:"WhatsApp Inquiries",sales:"Settled Sales Volume",addProduct:"Add Product",customize:"Customize Theme",viewSite:"View Live Site",share:"Share Store",recentActivity:"Customer Activity",catalog:"Product Catalog",support:"Priority Support",emptyActivity:"No customer events recorded yet",emptyActivitySub:"Share your store link on WhatsApp or social channels to start tracking live visitor orders and MoMo transactions."},TWI:{planStatus:"Account Foforɔ",visits:"Nnipa A Wɔaba",orders:"WhatsApp Nkratoɔ",sales:"MoMo Sika",addProduct:"Fa Nneɛma Ka Ho",customize:"Sesa Ahosuo",viewSite:"Hwɛ Wɛbsaet",share:"Fa Kɔ WhatsApp",recentActivity:"Nneyɛeɛ Foforɔ",catalog:"Nneɛma Ahodoɔ",support:"Mmoa",emptyActivity:"Obiara nnyɛɛ hwee da",emptyActivitySub:"Fa wo wɛbsaet link no kɔ WhatsApp so na nnipa ntumi ntɔ nneɛma."},GA:{planStatus:"Account Hee",visits:"Gbɔmɛi Ni Ba Biɛ",orders:"WhatsApp Nibii",sales:"MoMo Shika",addProduct:"Kɛ Nɔ Heeko Fata He",customize:"Tsake Wɛbsaet",viewSite:"Kwɛ Wɛbsaet",share:"Maje Yɛ WhatsApp",recentActivity:"Nii Ni Ya Nɔ",catalog:"Nibii Lɛ",support:"Yelikɛbuamɔ",emptyActivity:"Mɔko mɔko bako lolo",emptyActivitySub:"Maje o wɛbsaet link lɛ yɛ WhatsApp nɔ koni gbɔmɛi ahé nibii."},EWE:{planStatus:"Account Yeye",visits:"Amewo Katã Va",orders:"WhatsApp Nuwɔwɔwo",sales:"MoMo Ga Katã",addProduct:"Tsɔ Nuto Kpe Ðe Eŋu",customize:"Trɔ Wɛbsaet",viewSite:"Kpɔ Wò Wɛbsaet",share:"Ɖoe Ðe WhatsApp",recentActivity:"Nusiwo Dzɔ",catalog:"Nuwo Katã",support:"Kpekpeɖeŋu",emptyActivity:"Ame aɖeke me wɔ nane haɖe o",emptyActivitySub:"Ɖo wò wɛbsaet kadodo ɖe WhatsApp dzi be amewo nate ŋu aƒle nuwo."}}[u];return c.jsxs("div",{className:"merchant-dashboard",style:{maxWidth:"1240px",margin:"0 auto",padding:"1.5rem 1rem 5rem",color:"var(--text-main)"},children:[c.jsxs("div",{className:"neon-border",style:{background:"rgba(13, 18, 29, 0.85)",backdropFilter:"blur(20px)",borderRadius:"16px",padding:"1rem 1.4rem",marginBottom:"2rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem",boxShadow:"0 20px 40px -15px rgba(0,0,0,0.6)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.8rem",flexWrap:"wrap",flexGrow:1},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"var(--text-muted)"},children:[c.jsx(Oe.Store,{}),c.jsx("select",{value:r,onChange:$=>i($.target.value),style:{background:"#090D15",border:"1px solid rgba(255, 255, 255, 0.12)",color:"#fff",fontWeight:700,fontSize:"0.92rem",padding:"0.5rem 0.8rem",borderRadius:"8px",outline:"none",cursor:"pointer"},children:o.map($=>c.jsx("option",{value:$,children:$},$))})]}),c.jsxs("span",{style:{background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.25)",color:"#10b981",padding:"0.3rem 0.75rem",borderRadius:"50px",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:"0.35rem",whiteSpace:"nowrap"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10b981"}}),ve.planStatus]}),c.jsxs("span",{style:{background:Z?"rgba(0, 240, 255, 0.1)":"rgba(229, 192, 123, 0.1)",border:Z?"1px solid rgba(0, 240, 255, 0.25)":"1px solid rgba(229, 192, 123, 0.25)",color:Z?"var(--cyan-glow)":"var(--gold-accent)",padding:"0.3rem 0.75rem",borderRadius:"50px",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:"0.35rem",whiteSpace:"nowrap"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:Z?"var(--cyan-glow)":"var(--gold-accent)",boxShadow:Z?"0 0 8px var(--cyan-glow)":"none"}}),Z?"Live Synced":"Demo Offline"]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",flexWrap:"wrap"},children:[c.jsx("div",{style:{display:"flex",background:"#090D15",borderRadius:"8px",padding:"2px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:["EN","TWI","GA","EWE"].map($=>c.jsx("button",{onClick:()=>h($),style:{background:u===$?"rgba(255, 255, 255, 0.12)":"transparent",color:u===$?"#fff":"var(--text-muted)",border:"none",padding:"0.35rem 0.65rem",borderRadius:"6px",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",transition:"all 0.15s"},children:$},$))}),c.jsx("button",{onClick:()=>e(n==="GHS"?"USD":"GHS"),style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"var(--text-main)",padding:"0.4rem 0.75rem",borderRadius:"8px",fontWeight:700,fontSize:"0.78rem",cursor:"pointer"},children:n==="GHS"?"GHS (₵)":"USD ($)"}),c.jsxs("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%20Support%2C%20I%20need%20assistance%20with%20my%20merchant%20account.",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.12)",color:"#fff",textDecoration:"none",padding:"0.45rem 0.9rem",borderRadius:"8px",fontWeight:700,fontSize:"0.78rem",display:"inline-flex",alignItems:"center",gap:"0.45rem"},children:[c.jsx(Oe.Headphones,{}),c.jsx("span",{children:ve.support})]})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 220px), 1fr))",gap:"1.2rem",marginBottom:"2rem"},children:[c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",padding:"1.6rem",borderRadius:"16px",position:"relative"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"},children:[c.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},children:ve.visits}),c.jsx(Oe.TrendUp,{})]}),c.jsx("div",{style:{fontSize:"2.2rem",fontWeight:800,color:"#fff",letterSpacing:"-0.5px"},children:N?"1,420":"0"}),c.jsx("div",{style:{color:"var(--text-subtle)",fontSize:"0.75rem",marginTop:"0.3rem"},children:N?"+18.4% this week":"Awaiting first visitors"})]}),c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",padding:"1.6rem",borderRadius:"16px",position:"relative"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"},children:[c.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},children:ve.orders}),c.jsx(Oe.Message,{})]}),c.jsx("div",{style:{fontSize:"2.2rem",fontWeight:800,color:"#fff",letterSpacing:"-0.5px"},children:N?"48":"0"}),c.jsx("div",{style:{color:"var(--text-subtle)",fontSize:"0.75rem",marginTop:"0.3rem"},children:N?"Direct WhatsApp leads":"No inquiries recorded"})]}),c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",padding:"1.6rem",borderRadius:"16px",position:"relative"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"},children:[c.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},children:ve.sales}),c.jsx(Oe.CreditCard,{})]}),c.jsx("div",{style:{fontSize:"2.2rem",fontWeight:800,color:"#fff",letterSpacing:"-0.5px"},children:t(N?7350:0)}),c.jsx("div",{style:{color:"var(--text-subtle)",fontSize:"0.75rem",marginTop:"0.3rem"},children:N?"MTN & Telecel Cash settlements":"No settlements processed"})]})]}),c.jsxs("div",{style:{marginBottom:"2.5rem"},children:[c.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"1rem",textTransform:"uppercase",letterSpacing:"0.8px"},children:"Quick Actions"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 150px), 1fr))",gap:"1rem"},children:[c.jsxs("button",{onClick:()=>k(!0),className:"neon-border",style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",color:"var(--text-main)",padding:"1.2rem",borderRadius:"12px",fontWeight:700,fontSize:"0.88rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.6rem"},children:[c.jsx(Oe.Plus,{}),ve.addProduct]}),c.jsxs("button",{onClick:()=>alert("Theme Customizer: Adjust brand colors, logo, and store header typography."),className:"neon-border",style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",color:"var(--text-main)",padding:"1.2rem",borderRadius:"12px",fontWeight:700,fontSize:"0.88rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.6rem"},children:[c.jsx(Oe.Sliders,{}),ve.customize]}),c.jsxs("a",{href:"http://localhost:3000/emewear/",target:"_blank",rel:"noopener noreferrer",className:"neon-border",style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",color:"var(--text-main)",padding:"1.2rem",borderRadius:"12px",fontWeight:700,fontSize:"0.88rem",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.6rem"},children:[c.jsx(Oe.ExternalLink,{}),ve.viewSite]}),c.jsxs("button",{onClick:()=>T(!0),className:"neon-border",style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",color:"var(--text-main)",padding:"1.2rem",borderRadius:"12px",fontWeight:700,fontSize:"0.88rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.6rem"},children:[c.jsx(Oe.Share,{}),ve.share]})]})]}),c.jsxs("div",{style:{display:"flex",gap:"1.5rem",borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"0.8rem",marginBottom:"1.5rem"},children:[c.jsx("button",{onClick:()=>m("overview"),style:{background:"none",border:"none",color:f==="overview"?"var(--cyan-glow)":"var(--text-muted)",fontWeight:700,fontSize:"0.92rem",cursor:"pointer",borderBottom:f==="overview"?"2px solid var(--cyan-glow)":"none",paddingBottom:"0.4rem",transition:"color 0.15s"},children:ve.recentActivity}),c.jsxs("button",{onClick:()=>m("products"),style:{background:"none",border:"none",color:f==="products"?"var(--cyan-glow)":"var(--text-muted)",fontWeight:700,fontSize:"0.92rem",cursor:"pointer",borderBottom:f==="products"?"2px solid var(--cyan-glow)":"none",paddingBottom:"0.4rem",transition:"color 0.15s"},children:[ve.catalog," (",q.length,")"]})]}),f==="overview"&&c.jsx("div",{className:"neon-border",style:{background:"var(--bg-surface)",borderRadius:"16px",padding:"1.6rem",boxShadow:"0 20px 40px -15px rgba(0,0,0,0.5)"},children:fe.length===0?c.jsxs("div",{style:{textAlign:"center",padding:"3.5rem 1rem"},children:[c.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"1rem"},children:c.jsx(Oe.Inbox,{})}),c.jsx("h4",{style:{fontSize:"1.05rem",fontWeight:700,color:"#fff",marginBottom:"0.4rem"},children:ve.emptyActivity}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",maxWidth:"460px",margin:"0 auto 1.5rem",lineHeight:1.6},children:ve.emptyActivitySub}),c.jsxs("div",{style:{display:"flex",gap:"0.8rem",justifyContent:"center",flexWrap:"wrap"},children:[c.jsxs("button",{onClick:()=>T(!0),style:{background:"rgba(255, 255, 255, 0.1)",color:"#fff",border:"1px solid rgba(255, 255, 255, 0.15)",padding:"0.55rem 1.2rem",borderRadius:"8px",fontWeight:700,fontSize:"0.8rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx(Oe.Share,{}),c.jsx("span",{children:"Share Store Link"})]}),c.jsx("button",{onClick:()=>j(!N),style:{background:"none",color:"var(--text-muted)",border:"1px solid rgba(255, 255, 255, 0.08)",padding:"0.55rem 1.2rem",borderRadius:"8px",fontWeight:600,fontSize:"0.8rem",cursor:"pointer"},children:N?"Reset to Zero-State":"Toggle Sample View"})]})]}):c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.8rem"},children:fe.map($=>c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem 1.2rem",borderRadius:"10px",background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.04)",flexWrap:"wrap",gap:"1rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[c.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:$.badgeColor}}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:700,color:"#fff",fontSize:"0.9rem"},children:$.title}),c.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginTop:"0.15rem"},children:$.detail})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[$.amount&&c.jsx("span",{style:{fontWeight:700,color:"#fff",fontSize:"0.95rem"},children:$.amount}),c.jsx("span",{style:{background:"rgba(255, 255, 255, 0.06)",color:"var(--text-muted)",padding:"0.25rem 0.6rem",borderRadius:"4px",fontSize:"0.72rem",fontWeight:600},children:$.badge}),c.jsx("span",{style:{color:"var(--text-subtle)",fontSize:"0.75rem"},children:$.time})]})]},$.id))})}),f==="products"&&c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",borderRadius:"16px",padding:"1.6rem",boxShadow:"0 20px 40px -15px rgba(0,0,0,0.5)"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem"},children:[c.jsx("h4",{style:{fontSize:"1rem",fontWeight:700},children:"Store Inventory"}),c.jsxs("button",{onClick:()=>k(!0),style:{background:"rgba(255, 255, 255, 0.1)",color:"#fff",border:"1px solid rgba(255, 255, 255, 0.15)",padding:"0.45rem 1rem",borderRadius:"6px",fontWeight:700,fontSize:"0.8rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx(Oe.Plus,{}),c.jsx("span",{children:"Add Item"})]})]}),q.length===0?c.jsxs("div",{style:{textAlign:"center",padding:"2.5rem 1rem",color:"var(--text-muted)",fontSize:"0.88rem"},children:["No products added yet. Click ",c.jsx("strong",{children:"Add Item"})," to populate your store catalog."]}):c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem"},children:q.map($=>c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem 1.2rem",borderRadius:"8px",background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.04)"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:700,color:"#fff",fontSize:"0.9rem"},children:$.title}),c.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:$.category})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.2rem"},children:[c.jsx("span",{style:{fontWeight:700,color:"#fff",fontSize:"1rem"},children:t($.price)}),c.jsx("span",{style:{background:"rgba(16, 185, 129, 0.1)",color:"#10b981",padding:"0.2rem 0.5rem",borderRadius:"4px",fontSize:"0.72rem",fontWeight:600},children:$.status})]})]},$.id))})]}),A&&c.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(7, 9, 14, 0.88)",backdropFilter:"blur(16px)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999,padding:"1rem"},children:c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",borderRadius:"16px",padding:"2rem",maxWidth:"460px",width:"100%",boxShadow:"0 25px 60px rgba(0,0,0,0.8)"},children:[c.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:800,marginBottom:"1.2rem"},children:"Add Product"}),c.jsxs("form",{onSubmit:ze,children:[c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,marginBottom:"0.4rem",color:"var(--text-muted)"},children:"Product Title"}),c.jsx("input",{type:"text",placeholder:"e.g. Ankara Wrap Dress",value:w,onChange:$=>y($.target.value),style:{width:"100%",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.12)",color:"#fff",padding:"0.65rem 0.85rem",borderRadius:"8px",outline:"none",fontSize:"0.88rem"},required:!0})]}),c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,marginBottom:"0.4rem",color:"var(--text-muted)"},children:"Price (GH₵)"}),c.jsx("input",{type:"number",placeholder:"e.g. 195",value:_,onChange:$=>I($.target.value),style:{width:"100%",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.12)",color:"#fff",padding:"0.65rem 0.85rem",borderRadius:"8px",outline:"none",fontSize:"0.88rem"},required:!0})]}),c.jsxs("div",{style:{marginBottom:"1.6rem"},children:[c.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,marginBottom:"0.4rem",color:"var(--text-muted)"},children:"Category"}),c.jsxs("select",{value:b,onChange:$=>x($.target.value),style:{width:"100%",background:"#090D15",border:"1px solid rgba(255,255,255,0.12)",color:"#fff",padding:"0.65rem 0.85rem",borderRadius:"8px",outline:"none",fontSize:"0.88rem"},children:[c.jsx("option",{value:"Apparel",children:"Apparel"}),c.jsx("option",{value:"Luxury",children:"Luxury"}),c.jsx("option",{value:"Casual",children:"Casual"}),c.jsx("option",{value:"Services",children:"Services"})]})]}),c.jsxs("div",{style:{display:"flex",gap:"0.6rem",justifyContent:"flex-end"},children:[c.jsx("button",{type:"button",onClick:()=>k(!1),style:{background:"none",color:"var(--text-muted)",border:"1px solid rgba(255,255,255,0.1)",padding:"0.6rem 1.2rem",borderRadius:"6px",cursor:"pointer",fontWeight:600,fontSize:"0.82rem"},children:"Cancel"}),c.jsx("button",{type:"submit",style:{background:"#fff",color:"#07090E",border:"none",padding:"0.6rem 1.4rem",borderRadius:"6px",fontWeight:700,cursor:"pointer",fontSize:"0.82rem"},children:"Save Item"})]})]})]})}),v&&c.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(7, 9, 14, 0.88)",backdropFilter:"blur(16px)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999,padding:"1rem"},children:c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",borderRadius:"16px",padding:"2rem",maxWidth:"460px",width:"100%",textAlign:"center",boxShadow:"0 25px 60px rgba(0,0,0,0.8)"},children:[c.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:800,marginBottom:"0.5rem"},children:"Share Store Link"}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",marginBottom:"1.6rem",lineHeight:1.6},children:"Copy or broadcast your direct store URL to WhatsApp status, customer lists, or social bios."}),c.jsxs("a",{href:`https://api.whatsapp.com/send?text=${encodeURIComponent("Check out our new store catalog here: http://localhost:3000/emewear/")}`,target:"_blank",rel:"noopener noreferrer",style:{background:"#10b981",color:"#07090E",textDecoration:"none",padding:"0.75rem 1.6rem",borderRadius:"8px",fontWeight:700,fontSize:"0.88rem",display:"inline-flex",alignItems:"center",gap:"0.5rem",marginBottom:"1rem"},children:[c.jsx(Oe.Share,{}),c.jsx("span",{children:"Broadcast to WhatsApp"})]}),c.jsx("div",{children:c.jsx("button",{onClick:()=>T(!1),style:{background:"none",border:"none",color:"var(--text-muted)",cursor:"pointer",fontSize:"0.82rem",fontWeight:600},children:"Close"})})]})})]})},Ls=()=>{const{currency:n,setCurrency:e}=ha();return c.jsxs("div",{className:"currency-toggle neon-border",children:[c.jsx("button",{className:`currency-btn ${n==="GHS"?"active":""}`,onClick:()=>e("GHS"),children:"GHS"}),c.jsx("button",{className:`currency-btn ${n==="USD"?"active":""}`,onClick:()=>e("USD"),children:"USD"})]})},Xl=()=>{const[n,e]=O.useState("all"),[t,r]=O.useState(""),i=[{id:"sedemson",title:"Sedemson Stone",category:"b2b",categoryLabel:"B2B & Architectural Finishing",tagline:"Premium Natural Stone Cladding & Architectural Finishes across Ghana.",image:"/sedemson_stone_hero.png",tags:["WaaS Architecture","Catalog Engine","Direct WhatsApp RFQs"],metric:"+340% Inbound WhatsApp RFQs",status:"Live Production"},{id:"emewear",title:"Emewear Luxury",category:"ecommerce",categoryLabel:"Fashion & E-Commerce",tagline:"Ghana-Made Luxury Ankara, Plus-Size Heritage Fashion & Global Delivery.",image:"/emewear/emewear_hero.jpg",tags:["Fashion WaaS","MoMo Automated Checkout","Automated Dispatch"],metric:"Zero-Friction MoMo Checkout",status:"Live Production"},{id:"kone-farms",title:"Kone Farms & Agritech",category:"saas",categoryLabel:"Agritech & IoT Systems",tagline:"Precision IoT Soil Telemetry, Yield Analytics & Agritech Operations Platform.",image:"/sedemson_stone_hero.png",tags:["IoT Data Relay","React 18 Dashboard","Real-Time Telemetry"],metric:"+85.7% Yield Telemetry Accuracy",status:"Live Production",link:"https://farms.koneacademy.io"},{id:"kone-consult",title:"Kone Consult",category:"saas",categoryLabel:"Enterprise & Design Systems",tagline:"Corporate Technology Advisory, Multi-Subdomain Architecture & Brand Systems.",image:"/emewear/emewear_hero.jpg",tags:["Design Tokens","Cloud CI/CD","Multi-Subdomain Hub"],metric:"99.98% Multi-Subdomain Uptime",status:"Live Production",link:"https://consult.koneacademy.io"}],o=nu.useMemo(()=>{const a=t.replace(/[^\w\s-]/gi,"").toLowerCase().trim();return i.filter(u=>{const h=n==="all"||u.category===n,f=!a||u.title.toLowerCase().includes(a)||u.tagline.toLowerCase().includes(a)||u.categoryLabel.toLowerCase().includes(a)||u.tags.some(m=>m.toLowerCase().includes(a));return h&&f})},[t,n,i]);return c.jsxs("section",{className:"portfolio-section",id:"work",style:{padding:"3.5rem 1rem",maxWidth:"1200px",margin:"0 auto"},children:[c.jsxs("div",{className:"portfolio-header fade-in-up",style:{textAlign:"center",marginBottom:"3rem"},children:[c.jsxs("span",{className:"badge-pill",style:{marginBottom:"1rem"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#00F0FF"}}),"PRODUCTION CASE STUDIES"]}),c.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.8rem, 5vw, 2.5rem)",fontWeight:850,marginTop:"0.8rem",letterSpacing:"-0.03em"},children:["Featured ",c.jsx("span",{className:"cyan-luminance",children:"Client Work"})]}),c.jsx("p",{style:{color:"#94A3B8",fontSize:"1.05rem",marginTop:"0.6rem",letterSpacing:"-0.01em",maxWidth:"640px",margin:"0.6rem auto 0",lineHeight:1.6},children:"Real-world platforms and Website-as-a-Service solutions engineered for revenue growth and operational excellence."}),c.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.8rem",flexWrap:"wrap",marginTop:"2.2rem"},children:[c.jsx("button",{onClick:()=>e("all"),className:n==="all"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"All Case Studies"}),c.jsx("button",{onClick:()=>e("b2b"),className:n==="b2b"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"B2B & Architectural"}),c.jsx("button",{onClick:()=>e("ecommerce"),className:n==="ecommerce"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"Fashion & Retail"}),c.jsx("button",{onClick:()=>e("saas"),className:n==="saas"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"SaaS & IoT Systems"}),c.jsxs("div",{style:{position:"relative",width:"min(100%, 240px)"},children:[c.jsx("input",{type:"text",placeholder:"Search case studies...",value:t,onChange:a=>r(a.target.value),style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.12)",color:"#FFFFFF",padding:"0.48rem 1.1rem 0.48rem 2.2rem",borderRadius:"30px",fontSize:"0.85rem",outline:"none",width:"100%",transition:"border-color 0.2s ease"}}),c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#94A3B8",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",left:"0.8rem",top:"50%",transform:"translateY(-50%)"},children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})]})]})]}),c.jsx("div",{className:"portfolio-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 340px), 1fr))",gap:"2rem",width:"100%"},children:o.map(a=>c.jsxs("div",{className:"portfolio-card neon-border fade-in-up",style:{borderRadius:"20px",overflow:"hidden",background:"rgba(13, 18, 29, 0.75)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)"},children:[c.jsxs("div",{children:[c.jsxs("div",{className:"card-image-placeholder",style:{padding:0,height:"220px",overflow:"hidden",position:"relative"},children:[c.jsx("img",{src:a.image,alt:a.title,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",transition:"transform 0.5s ease"}}),c.jsx("div",{style:{position:"absolute",top:"1rem",right:"1rem"},children:c.jsx("span",{className:"badge-pill cyan",style:{fontSize:"0.72rem",padding:"0.25rem 0.65rem",backdropFilter:"blur(8px)"},children:a.categoryLabel})})]}),c.jsxs("div",{className:"card-content",style:{padding:"1.6rem"},children:[c.jsx("h3",{style:{fontSize:"1.35rem",color:"#FFFFFF",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em"},children:a.title}),c.jsx("p",{className:"tagline",style:{color:"#94A3B8",fontSize:"0.9rem",marginBottom:"1.2rem",lineHeight:1.5,letterSpacing:"-0.01em"},children:a.tagline}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"rgba(0, 240, 255, 0.06)",border:"1px solid rgba(0, 240, 255, 0.15)",padding:"0.5rem 0.85rem",borderRadius:"10px",marginBottom:"1.3rem"},children:[c.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#00F0FF",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),c.jsx("polyline",{points:"17 6 23 6 23 12"})]}),c.jsx("span",{style:{fontSize:"0.82rem",fontWeight:750,color:"#38BDF8"},children:a.metric})]}),c.jsx("div",{className:"tags",style:{display:"flex",gap:"0.45rem",marginBottom:"1.4rem",flexWrap:"wrap"},children:a.tags.map((u,h)=>c.jsx("span",{className:"tag",style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.08)",color:"#CBD5E1",padding:"0.25rem 0.6rem",borderRadius:"6px",fontSize:"0.76rem",fontWeight:600},children:u},h))})]})]}),c.jsxs("div",{style:{padding:"0 1.6rem 1.6rem",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid rgba(255, 255, 255, 0.05)",paddingTop:"1rem"},children:[c.jsxs("span",{className:"view-link",style:{color:"#94A3B8",cursor:"default",display:"inline-flex",alignItems:"center",gap:"0.4rem",fontWeight:700,fontSize:"0.82rem"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#4ADE80"}}),a.status]}),c.jsxs("a",{href:a.link||`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20learn%20more%20about%20the%20${encodeURIComponent(a.title)}%20case%20study.`,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.35rem",color:"#F8FAFC",fontSize:"0.82rem",fontWeight:700,textDecoration:"none",background:"rgba(255, 255, 255, 0.05)",padding:"0.35rem 0.75rem",borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.1)",transition:"all 0.2s ease"},children:[c.jsx("span",{children:"Explore"}),c.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]},a.id))})]})},Zl=()=>{const{currency:n,setCurrency:e,formatPrice:t}=ha(),[r,i]=O.useState(2),o=[{id:"lite",name:"Lite Tier",badge:"SME STARTER",priceGhs:49,desc:"Ideal for local merchants, Susu collectives, and boutique artisans.",features:["Curated Digital Product Catalog","Direct Mobile Money Payment Routing","Instant WhatsApp Lead Notifications","Cloudflare SSL & Managed Fast DNS"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20SME%20Lite%20Plan."},{id:"starter",name:"Starter Tier",badge:"GROWTH",priceGhs:499,desc:"Perfect for small businesses needing a high-converting digital storefront.",features:["Custom Single Page Web Architecture","Automated WhatsApp Inquiry Routing","Ultra-Fast Mobile Optimization","Managed Weekly Backups & Security"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Starter%20Plan."},{id:"professional",name:"Professional Tier",badge:"MOST POPULAR",priceGhs:999,desc:"For growing brands needing a complete multi-page corporate ecosystem.",popular:!0,features:["Up to 5 Tailored Application Pages","Full Technical SEO & Schema Microdata","Automated Lead Intake CRM Integration","24/7 Priority Engineering SLA"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Professional%20Plan."},{id:"enterprise",name:"Enterprise Tier",badge:"CUSTOM APPLICATION",priceGhs:2499,desc:"Advanced web applications, custom databases, and API engineering.",features:["Full Custom Architecture & Tech Stack","Backend & Payment Gateway Integration","Advanced Analytics & Real-Time Dashboard","Dedicated Senior Engineer Account Lead"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'd%20like%20to%20discuss%20a%20Custom%20Enterprise%20Plan."}],a=o[r];return c.jsxs("section",{className:"pricing-section",id:"pricing",style:{padding:"3.5rem 1rem",maxWidth:"1200px",margin:"0 auto"},children:[c.jsxs("div",{className:"pricing-header fade-in-up",style:{textAlign:"center",marginBottom:"3rem"},children:[c.jsxs("span",{className:"badge-pill",style:{marginBottom:"1rem"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#00F0FF"}}),"MANAGED TIERS & SERVICE LEVEL AGREEMENTS"]}),c.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.8rem, 5vw, 2.5rem)",fontWeight:850,marginTop:"0.8rem",letterSpacing:"-0.03em"},children:["Transparent ",c.jsx("span",{className:"cyan-luminance",children:"WaaS Pricing"})]}),c.jsx("p",{style:{color:"#94A3B8",fontSize:"1.05rem",marginTop:"0.6rem",letterSpacing:"-0.01em",maxWidth:"640px",margin:"0.6rem auto 0",lineHeight:1.6},children:"Predictable, high-ROI Website as a Service subscription tiers with zero hidden setup fees or surprise maintenance costs."}),c.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.8rem",marginTop:"1.8rem"},children:[c.jsx("span",{style:{color:n==="GHS"?"#00F0FF":"#94A3B8",fontWeight:750,fontSize:"0.85rem",letterSpacing:"0.04em"},children:"GHS (₵)"}),c.jsx("button",{onClick:()=>e(n==="GHS"?"USD":"GHS"),"aria-label":`Switch pricing currency from ${n} to ${n==="GHS"?"USD":"GHS"}`,title:`Switch pricing currency from ${n} to ${n==="GHS"?"USD":"GHS"}`,style:{background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.15)",width:"54px",height:"28px",borderRadius:"20px",position:"relative",cursor:"pointer",display:"flex",alignItems:"center",padding:"2px",transition:"all 0.2s ease"},children:c.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"#00F0FF",transform:n==="USD"?"translateX(26px)":"translateX(0)",transition:"transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",boxShadow:"0 2px 6px rgba(0, 240, 255, 0.4)"}})}),c.jsx("span",{style:{color:n==="USD"?"#00F0FF":"#94A3B8",fontWeight:750,fontSize:"0.85rem",letterSpacing:"0.04em"},children:"USD ($)"})]})]}),c.jsxs("div",{style:{maxWidth:"750px",margin:"0 auto 3rem",padding:"1.4rem 1.8rem",background:"rgba(13, 18, 29, 0.75)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderRadius:"16px",border:"1px solid rgba(255, 255, 255, 0.08)",boxShadow:"0 10px 30px -10px rgba(0, 0, 0, 0.5)"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.8rem",color:"#94A3B8",fontSize:"0.82rem",fontWeight:750,letterSpacing:"0.04em"},children:[c.jsx("label",{htmlFor:"pricing-plan-slider",children:"INTERACTIVE PLAN NAVIGATOR"}),c.jsxs("span",{style:{color:"#00F0FF"},children:[a.name," Selected"]})]}),c.jsx("input",{id:"pricing-plan-slider","aria-label":"Select pricing package plan",type:"range",min:"0",max:"3",step:"1",value:r,onChange:u=>i(parseInt(u.target.value)),style:{width:"100%",height:"6px",borderRadius:"4px",background:"rgba(255, 255, 255, 0.1)",outline:"none",cursor:"pointer",accentColor:"#00F0FF"}}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"0.6rem",fontSize:"0.78rem",color:"#94A3B8",fontWeight:650},children:[c.jsx("span",{children:"Lite (₵49)"}),c.jsx("span",{children:"Starter (₵499)"}),c.jsx("span",{children:"Professional (₵999)"}),c.jsx("span",{children:"Enterprise (₵2,499)"})]})]}),c.jsx("div",{className:"pricing-cards",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 260px), 1fr))",gap:"1.5rem",maxWidth:"1200px",margin:"0 auto",width:"100%"},children:o.map((u,h)=>{const f=h===r;return c.jsxs("div",{onClick:()=>i(h),className:"price-card fade-in-up",style:{background:f?"rgba(0, 240, 255, 0.04)":"rgba(13, 18, 29, 0.75)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderColor:f?"rgba(0, 240, 255, 0.45)":"rgba(255, 255, 255, 0.08)",borderWidth:"1px",borderStyle:"solid",borderRadius:"20px",padding:"1.8rem 1.4rem",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:f?"0 15px 40px -10px rgba(0, 240, 255, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.12)":"0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)",transition:"all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",cursor:"pointer",position:"relative"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:c.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,padding:"0.2rem 0.6rem",borderRadius:"6px",background:u.popular?"rgba(250, 204, 21, 0.15)":"rgba(56, 189, 248, 0.12)",color:u.popular?"#FACC15":"#38BDF8",letterSpacing:"0.04em"},children:u.badge})}),c.jsx("h3",{style:{fontSize:"1.3rem",color:f?"#00F0FF":"#FFFFFF",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em"},children:u.name}),c.jsxs("div",{className:"price",style:{margin:"0.8rem 0 1rem"},children:[c.jsx("span",{className:"amount",style:{fontSize:"2.1rem",fontWeight:850,color:"#FFFFFF",letterSpacing:"-0.03em"},children:t(u.priceGhs)}),c.jsx("span",{className:"period",style:{fontSize:"0.85rem",color:"#94A3B8",marginLeft:"0.2rem"},children:"/month"})]}),c.jsx("p",{className:"card-desc",style:{fontSize:"0.86rem",color:"#94A3B8",lineHeight:1.5,marginBottom:"1.4rem"},children:u.desc}),c.jsxs("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.06)",paddingTop:"1.2rem",marginBottom:"1.6rem"},children:[c.jsx("span",{style:{display:"block",fontSize:"0.72rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"#94A3B8",marginBottom:"0.8rem"},children:"Included Features"}),c.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.6rem"},children:u.features.map((m,v)=>c.jsxs("li",{style:{fontSize:"0.83rem",color:"#E2E8F0",display:"flex",alignItems:"flex-start",gap:"0.5rem",lineHeight:1.4},children:[c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#00F0FF",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"2px"},children:c.jsx("polyline",{points:"20 6 9 17 4 12"})}),c.jsx("span",{children:m})]},v))})]})]}),c.jsxs("a",{href:`https://wa.me/233551993820?text=${u.whatsappMsg}`,target:"_blank",rel:"noopener noreferrer",className:f?"btn-primary":"btn-secondary",style:{textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",gap:"0.4rem",width:"100%",padding:"0.75rem 1rem",fontSize:"0.86rem",borderRadius:"12px"},children:[c.jsx("span",{children:"Select Plan"}),c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]},u.id)})})]})},uo={"web-development":{id:"web-development",slug:"web-development",title:"Custom Web & SaaS Application Engineering",headline:"High-Performance Web Applications & Custom SaaS Platforms",badge:"CORE ENGINEERING",summary:"We build production-grade, high-speed web applications using React, Next.js, TypeScript, and modern cloud architectures. Optimized for sub-second page loads, SEO dominance, and maximum conversion rates.",icon:"",coverGradient:"linear-gradient(135deg, rgba(0, 240, 255, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Single-Page & Multi-Page Web Apps",spec:"Vite / Next.js SSR & static pre-rendering with React 18+"},{title:"API Integration & Cloud Backends",spec:"RESTful / GraphQL APIs, Node.js microservices, and Firebase real-time sync"},{title:"SEO & Microdata Architecture",spec:"Schema.org JSON-LD microdata, OpenGraph cards, and Google Search Console indexing"},{title:"Responsive Ultra-Fast UI",spec:"Mobile-first design system, glassmorphism UI, sub-second LCP performance"}],techStack:["React","TypeScript","Next.js","Node.js","Firebase","Vite","TailwindCSS / Vanilla CSS"],caseStudyHighlight:{client:"Kone Farms & Agritech",project:"IoT Soil Telemetry & Agritech Research Hub",result:"+85.7% annual yield increase & 100% GSC sitemap indexing across 11 subdomains.",link:"https://farms.koneacademy.io"},faq:[{q:"How long does a custom web development project take?",a:"Standard business websites are delivered in 5–10 business days. Complex SaaS platforms take 3–5 weeks."},{q:"Is hosting and domain setup included?",a:"Yes! We configure global CDN deployment (Vercel, Firebase, GitHub Pages), SSL certificates, and custom subdomains."}]},"mobile-apps":{id:"mobile-apps",slug:"mobile-apps",title:"iOS & Android Mobile App Development",headline:"Native Performance Cross-Platform Mobile Applications",badge:"MOBILE SYSTEMS",summary:"From concept to App Store and Google Play publication. We engineer cross-platform mobile apps using React Native and Flutter, delivering native 60fps animations, push notifications, and offline-first database sync.",icon:"",coverGradient:"linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Cross-Platform iOS & Android Apps",spec:"Single codebase compiled to native iOS Swift & Android Kotlin binaries"},{title:"Offline-First Database Sync",spec:"Local SQLite / Realm storage with automatic cloud reconciliation"},{title:"Push Notifications & Deep Linking",spec:"Firebase Cloud Messaging (FCM) & Apple APNs integration"},{title:"Store Deployment & Compliance",spec:"Complete Apple App Store & Google Play Store submission & approval management"}],techStack:["React Native","Flutter","TypeScript","Firebase FCM","App Store Connect","Google Play Console"],caseStudyHighlight:{client:"Kone Kids Academy",project:"Interactive Mobile Learning Companion",result:"4.9★ rating with offline course access for students across West Africa.",link:"https://kids.koneacademy.io"},faq:[{q:"Do you publish our app directly to the App Store & Google Play?",a:"Yes, we handle all store listing assets, compliance requirements, privacy manifests, and final submission."},{q:"Can the app work offline without internet?",a:"Yes, we build local caching mechanisms that allow full app functionality offline."}]},"brand-design":{id:"brand-design",slug:"brand-design",title:"Brand Identity & UI/UX Design Systems",headline:"World-Class Logo Systems, Brand Manuals & Figma UI/UX Prototypes",badge:"DESIGN STUDIO",summary:"We craft iconic corporate brand identity systems that command trust and market authority. Includes logo vectors, color tokens, typography scales, interactive Figma UI/UX wireframes, and complete brand manuals.",icon:"",coverGradient:"linear-gradient(135deg, rgba(234, 179, 8, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Vector Logo Systems",spec:"Scalable SVG, EPS, PNG, and PDF asset packages with dark/light variants"},{title:"Interactive Figma UI/UX Prototypes",spec:"High-fidelity component design systems, wireframes, and interactive user flows"},{title:"Brand Identity Guidelines",spec:"PDF brand book detailing typography, color palettes, spacing rules, and usage"},{title:"Social & Corporate Marketing Assets",spec:"Banners, OpenGraph social previews, business cards, and flyer graphics"}],techStack:["Figma","Adobe Illustrator","Photoshop","SVG Vector Systems","Design Tokens"],caseStudyHighlight:{client:"Kone Consult",project:"Corporate Tech Brand & Design System",result:"Unified multi-subdomain corporate visual language for enterprise client acquisition.",link:"https://consult.koneacademy.io"},faq:[{q:"What files do I receive upon project completion?",a:"You receive all original Figma source files, vector SVG/EPS logos, exportable PNGs, and a PDF Brand Guideline manual."},{q:"Can you redesign our existing company logo?",a:"Absolutely. We specialize in modernizing legacy brand identities for digital-first platforms."}]},"cloud-devops":{id:"cloud-devops",slug:"cloud-devops",title:"Cloud Infrastructure & DevOps Automation",headline:"Scalable Cloud Systems, Automated CI/CD & Security Audits",badge:"CLOUD ARCHITECTURE",summary:"Architecting resilient, self-healing cloud infrastructure on AWS, Firebase, and Cloudflare. We build automated GitHub Actions CI/CD pipelines, SSL/TLS encryption, and real-time uptime monitoring.",icon:"",coverGradient:"linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Automated CI/CD Deployment Pipelines",spec:"GitHub Actions workflows for automated build, lint, test, and zero-downtime deployment"},{title:"Cloud Infrastructure Setup",spec:"Firebase Firestore, AWS S3/CloudFront, Cloudflare DNS, and serverless edge functions"},{title:"Security & Penetration Audits",spec:"Snyk SAST security scanning, DOM-XSS prevention, and SSL/TLS configuration"},{title:"Uptime & Performance Telemetry",spec:"Real-time error tracking, automated sitemap submission, and Google Search Console APIs"}],techStack:["AWS","Firebase","Cloudflare","GitHub Actions","Docker","Snyk","Node.js"],caseStudyHighlight:{client:"Kone Code IDE Ecosystem",project:"Cloud Compiler & Data Relay Infrastructure",result:"99.98% uptime serving thousands of automated compiler executions daily.",link:"https://code.koneacademy.io"},faq:[{q:"Can you migrate our legacy server to modern cloud hosting?",a:"Yes, we perform zero-downtime migrations to Firebase, Vercel, or AWS with SSL configuration."},{q:"How do you ensure our customer data is secure?",a:"We implement hardware-level security rules, CORS isolation, HTTPS encryption, and Snyk SAST vulnerability scans."}]}};function ww({slug:n,onBack:e}){const t=uo[n]||uo["web-development"];return c.jsxs("div",{className:"service-detail-container",itemScope:!0,itemType:"https://schema.org/Service",children:[c.jsx("div",{className:"service-nav-bar",children:c.jsxs("a",{href:"#services",onClick:r=>{r.preventDefault(),window.location.hash="#services",e&&e()},className:"service-back-btn",children:[c.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"2.5",fill:"none",children:[c.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),c.jsx("polyline",{points:"12 19 5 12 12 5"})]}),"Back to Services Directory"]})}),c.jsxs("header",{className:"service-hero-banner",style:{background:t.coverGradient},children:[c.jsx("span",{className:"service-badge",children:t.badge}),c.jsx("h1",{className:"service-main-title",itemProp:"name",children:t.title}),c.jsx("p",{className:"service-headline",itemProp:"description",children:t.headline}),c.jsx("p",{className:"service-summary",children:t.summary}),c.jsxs("div",{className:"service-hero-cta",children:[c.jsx("a",{href:`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(t.title)}%20service.`,target:"_blank",rel:"noopener noreferrer",className:"service-primary-btn",children:c.jsx("span",{children:"Book a Technical Consultation"})}),c.jsx("a",{href:"#pricing",className:"service-secondary-btn",children:c.jsx("span",{children:"View Pricing Estimates"})})]})]}),c.jsxs("section",{className:"service-deliverables-section",children:[c.jsx("h2",{className:"section-title",children:"Key Technical Deliverables & Features"}),c.jsx("div",{className:"deliverables-grid",children:t.deliverables.map((r,i)=>c.jsxs("div",{className:"deliverable-card",children:[c.jsxs("span",{className:"del-num",children:["0",i+1]}),c.jsx("h3",{className:"del-title",children:r.title}),c.jsx("p",{className:"del-spec",children:r.spec})]},i))})]}),c.jsxs("section",{className:"service-tech-section",children:[c.jsx("h2",{className:"section-title",children:"Engineering Tech Stack"}),c.jsx("div",{className:"tech-pills-row",children:t.techStack.map(r=>c.jsx("span",{className:"service-tech-pill",children:r},r))})]}),c.jsx("section",{className:"service-case-section",children:c.jsxs("div",{className:"case-highlight-card",children:[c.jsxs("div",{className:"case-meta-header",children:[c.jsx("span",{className:"case-label",children:"FEATURED CASE STUDY"}),c.jsx("span",{className:"case-client",children:t.caseStudyHighlight.client})]}),c.jsx("h3",{className:"case-title",children:t.caseStudyHighlight.project}),c.jsxs("p",{className:"case-result",children:["🎯 ",t.caseStudyHighlight.result]}),t.caseStudyHighlight.link&&c.jsxs("a",{href:t.caseStudyHighlight.link,target:"_blank",rel:"noopener noreferrer",className:"case-link",children:[c.jsx("span",{children:"Explore Live Platform"}),c.jsxs("svg",{viewBox:"0 0 24 24",width:"14",height:"14",stroke:"currentColor",strokeWidth:"2",fill:"none",children:[c.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),c.jsx("polyline",{points:"15 3 21 3 21 9"}),c.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]})}),c.jsxs("section",{className:"service-faq-section",children:[c.jsx("h2",{className:"section-title",children:"❓ Frequently Asked Questions"}),c.jsx("div",{className:"faq-grid",children:t.faq.map((r,i)=>c.jsxs("div",{className:"faq-card",children:[c.jsxs("h3",{className:"faq-q",children:["Q: ",r.q]}),c.jsx("p",{className:"faq-a",children:r.a})]},i))})]})]})}const Iw={"web-development":c.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#38bdf8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("polyline",{points:"16 18 22 12 16 6"}),c.jsx("polyline",{points:"8 6 2 12 8 18"})]}),"mobile-apps":c.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#c084fc",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),c.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),"brand-design":c.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#facc15",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M12 19l7-7 3 3-7 7-3-3z"}),c.jsx("path",{d:"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}),c.jsx("path",{d:"M2 2l7.586 7.586"}),c.jsx("circle",{cx:"11",cy:"11",r:"2"})]}),"cloud-devops":c.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#4ade80",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})})};function eu({onSelectService:n}){const e=Object.values(uo);return c.jsxs("section",{className:"services-hub-section",id:"services",children:[c.jsxs("div",{className:"services-hero-header",children:[c.jsx("span",{className:"services-badge",children:"AGENCY SPECIALIZATIONS"}),c.jsx("h2",{className:"services-title",children:"Digital Engineering & Design Services"}),c.jsx("p",{className:"services-subtitle",children:"From custom SaaS applications and native mobile apps to corporate brand design and cloud DevOps infrastructure."})]}),c.jsx("div",{className:"services-hub-grid",children:e.map(t=>c.jsxs("div",{className:"service-hub-card",children:[c.jsxs("div",{className:"card-top-row",children:[c.jsx("div",{className:"hub-card-icon-wrapper",children:Iw[t.id]}),c.jsx("span",{className:"hub-card-badge",children:t.badge})]}),c.jsx("h3",{className:"hub-card-title",children:t.title}),c.jsx("p",{className:"hub-card-headline",children:t.headline}),c.jsx("p",{className:"hub-card-summary",children:t.summary}),c.jsxs("div",{className:"hub-card-deliverables",children:[c.jsx("span",{className:"deliverables-heading",children:"Core Deliverables"}),c.jsx("ul",{children:t.deliverables.slice(0,3).map((r,i)=>c.jsxs("li",{children:[c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#38bdf8",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"2px"},children:c.jsx("polyline",{points:"20 6 9 17 4 12"})}),c.jsx("span",{children:r.title})]},i))})]}),c.jsxs("a",{href:`#services/${t.slug}`,onClick:r=>{r.preventDefault(),window.location.hash=`#services/${t.slug}`,window.scrollTo({top:0,behavior:"instant"}),n(t.slug)},className:"view-service-btn",children:[c.jsx("span",{children:"Explore Specifications"}),c.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2.5",fill:"none",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]},t.id))})]})}function Tw(){const n=O.useRef(null),[e,t]=O.useState(!1),[r,i]=O.useState(!1),[o,a]=O.useState({}),u=T=>{T&&a(T),t(!0)},[h,f]=O.useState(()=>{const T=typeof window<"u"?window.location.hash:"";return T.startsWith("#services/")?"service-detail":T.startsWith("#services")?"services":T.startsWith("#work")?"work":T.startsWith("#pricing")?"pricing":T.startsWith("#tools")?"tools":T.startsWith("#crm")?"crm":T.startsWith("#dashboard")?"dashboard":"home"}),[m,v]=O.useState(()=>{const T=typeof window<"u"?window.location.hash:"";return T.startsWith("#services/")?T.replace("#services/",""):"web-development"});return O.useEffect(()=>{const T=()=>{const A=window.location.hash;if(A.startsWith("#services/")){const k=A.replace("#services/","");v(k),f("service-detail")}else A.startsWith("#services")?f("services"):A.startsWith("#work")?f("work"):A.startsWith("#pricing")?f("pricing"):A.startsWith("#tools")?f("tools"):A.startsWith("#crm")?f("crm"):A.startsWith("#dashboard")?f("dashboard"):f("home");window.scrollTo({top:0,behavior:"instant"})};return window.addEventListener("hashchange",T),T(),()=>window.removeEventListener("hashchange",T)},[]),O.useEffect(()=>{var j;if(navigator.userAgent==="ReactSnap"){(((j=n.current)==null?void 0:j.querySelectorAll(".fade-in-up"))||[]).forEach(F=>{F.classList.add("visible")});return}const A=new IntersectionObserver(q=>{q.forEach(F=>{F.isIntersecting&&F.target.classList.add("visible")})},{threshold:.1}),k=()=>{var F;(((F=n.current)==null?void 0:F.querySelectorAll(".fade-in-up:not(.observed)"))||[]).forEach(J=>{A.observe(J),J.classList.add("observed")})};k();const N=new MutationObserver(()=>{k()});return n.current&&N.observe(n.current,{childList:!0,subtree:!0}),()=>{A.disconnect(),N.disconnect()}},[]),c.jsxs("div",{className:"digital-app-root",children:[c.jsx("header",{className:"hub-header",children:c.jsxs("div",{className:"hub-header-inner",children:[c.jsxs("div",{className:"logo",style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[c.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",className:"logo-icon neon-logo",width:"34",height:"34"}),c.jsxs("span",{className:"logo-text",style:{fontWeight:850,letterSpacing:"-0.02em"},children:["KONE ",c.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]}),c.jsxs("nav",{className:"hub-nav",children:[c.jsx("a",{href:"#",className:h==="home"?"active-nav":"",children:"Overview"}),c.jsx("a",{href:"#services",className:h==="services"||h==="service-detail"?"active-nav":"",children:"Services"}),c.jsx("a",{href:"#work",className:h==="work"?"active-nav":"",children:"Work"}),c.jsx("a",{href:"#tools",className:h==="tools"?"active-nav":"",children:"Tools"}),c.jsx("a",{href:"#pricing",className:h==="pricing"?"active-nav":"",children:"Pricing"}),c.jsx("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services.",target:"_blank",rel:"noopener noreferrer",children:"Contact"}),c.jsx(Ls,{})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},className:"mobile-header-controls",children:[c.jsx("div",{className:"mobile-currency-wrapper",style:{display:"none"},children:c.jsx(Ls,{})}),c.jsx("button",{className:"mobile-nav-toggle",onClick:()=>i(!r),"aria-label":"Toggle navigation menu",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),c.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),c.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})})]})]})}),r&&c.jsxs("div",{className:"mobile-menu-drawer",children:[c.jsxs("div",{className:"mobile-drawer-header",children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[c.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",width:"30",height:"30"}),c.jsxs("span",{style:{fontWeight:850,fontSize:"1.1rem",letterSpacing:"-0.02em"},children:["KONE ",c.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]}),c.jsx("button",{className:"mobile-drawer-close",onClick:()=>i(!1),"aria-label":"Close navigation menu",children:c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),c.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),c.jsxs("div",{className:"mobile-drawer-links",children:[c.jsxs("a",{href:"#",className:`mobile-drawer-link ${h==="home"?"active-nav":""}`,onClick:()=>i(!1),children:[c.jsx("span",{children:"Overview"}),c.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"01"})]}),c.jsxs("a",{href:"#services",className:`mobile-drawer-link ${h==="services"||h==="service-detail"?"active-nav":""}`,onClick:()=>i(!1),children:[c.jsx("span",{children:"Services"}),c.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"02"})]}),c.jsxs("a",{href:"#work",className:`mobile-drawer-link ${h==="work"?"active-nav":""}`,onClick:()=>i(!1),children:[c.jsx("span",{children:"Work"}),c.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"03"})]}),c.jsxs("a",{href:"#tools",className:`mobile-drawer-link ${h==="tools"?"active-nav":""}`,onClick:()=>i(!1),children:[c.jsx("span",{children:"Tools"}),c.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"04"})]}),c.jsxs("a",{href:"#pricing",className:`mobile-drawer-link ${h==="pricing"?"active-nav":""}`,onClick:()=>i(!1),children:[c.jsx("span",{children:"Pricing"}),c.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"05"})]}),c.jsxs("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services.",target:"_blank",rel:"noopener noreferrer",className:"mobile-drawer-link",onClick:()=>i(!1),children:[c.jsx("span",{children:"Contact via WhatsApp"}),c.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"➔"})]})]}),c.jsxs("div",{className:"mobile-drawer-footer",children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("span",{style:{fontSize:"0.85rem",color:"#94A3B8"},children:"Select Currency:"}),c.jsx(Ls,{})]}),c.jsxs("button",{onClick:()=>{i(!1),u()},className:"btn-primary",style:{width:"100%",padding:"0.85rem",fontSize:"0.95rem"},children:[c.jsx("span",{children:"Generate Starter Website"}),c.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]}),c.jsx("main",{id:"main-content",style:{flex:"1 0 auto",display:"flex",flexDirection:"column",width:"100%",gap:"3rem"},children:h==="service-detail"?c.jsx(ww,{slug:m,onBack:()=>f("services")}):h==="services"?c.jsx(eu,{onSelectService:T=>{v(T),f("service-detail")}}):h==="work"?c.jsx(Xl,{}):h==="tools"?c.jsx(Jl,{onOpenWizard:u}):h==="dashboard"?c.jsx(bw,{}):h==="pricing"?c.jsx(Zl,{}):c.jsxs(c.Fragment,{children:[c.jsx(Of,{onOpenWizard:()=>u()}),c.jsx(Mf,{}),c.jsx(eu,{onSelectService:T=>{v(T),f("service-detail")}}),c.jsx(Xl,{}),c.jsx(Jl,{onOpenWizard:u}),c.jsx(_w,{}),c.jsx(Zl,{})]})}),c.jsx(yw,{isOpen:e,onClose:()=>t(!1),initialPhone:o.phone,initialBusinessName:o.businessName}),c.jsxs("footer",{className:"hub-footer",style:{marginTop:"2rem",paddingTop:"2.5rem",paddingBottom:"3.5rem",borderTop:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",flexDirection:"column",gap:"1.5rem",alignItems:"center",textAlign:"center"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[c.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",className:"logo-icon neon-logo",width:"36",height:"36"}),c.jsxs("span",{className:"logo-text",style:{fontSize:"1.2rem",fontWeight:800},children:["KONE ",c.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",maxWidth:"520px",margin:"0 auto",lineHeight:"1.6"},children:"Ghana's premier digital studio for high-performance business websites, web apps, & automated WhatsApp lead engines."}),c.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",justifyContent:"center"},children:[c.jsxs("a",{href:"https://whatsapp.com/channel/0029Vb7wdZMJUM2fepkMfR0D",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(37, 211, 102, 0.12)",border:"1px solid rgba(37, 211, 102, 0.35)",color:"#25d366",padding:"0.5rem 1.1rem",borderRadius:"25px",fontSize:"0.85rem",fontWeight:700,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.45rem",boxShadow:"0 0 12px rgba(37, 211, 102, 0.15)",transition:"all 0.2s ease"},children:[c.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor",children:c.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"WhatsApp Channel"]}),c.jsxs("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch.",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(0, 255, 255, 0.08)",border:"1px solid rgba(0, 255, 255, 0.25)",color:"var(--cyan-glow)",padding:"0.5rem 1.1rem",borderRadius:"25px",fontSize:"0.85rem",fontWeight:700,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.45rem",boxShadow:"0 0 12px rgba(0, 255, 255, 0.1)",transition:"all 0.2s ease"},children:[c.jsx("span",{children:"💬"}),c.jsx("span",{children:"Direct Line (+233 55 199 3820)"})]}),c.jsxs("a",{href:"https://www.koneacademy.io",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"var(--text-muted)",padding:"0.5rem 1.1rem",borderRadius:"25px",fontSize:"0.85rem",fontWeight:700,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.45rem",transition:"all 0.2s ease"},children:[c.jsx("span",{children:"🌐"}),c.jsx("span",{children:"Kone Academy Ecosystem"})]})]}),c.jsxs("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginTop:"0.5rem"},children:["© ",new Date().getFullYear()," Kone Digital. Powered by Kone Academy. All rights reserved."]})]}),c.jsx("a",{href:"https://wa.me/233551993820",className:"whatsapp-fab",target:"_blank",rel:"noopener noreferrer","aria-label":"Contact us on WhatsApp",children:c.jsx("svg",{viewBox:"0 0 24 24",children:c.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.132 1.38 4.788 1.381 5.069 0 9.199-4.13 9.201-9.199.001-2.454-.952-4.761-2.686-6.494-1.734-1.734-4.041-2.688-6.498-2.689-5.074 0-9.207 4.129-9.208 9.199-.001 1.73.455 3.415 1.32 4.89l-.103.16-1.11 4.054 4.151-1.089.16.095zm10.125-6.702c-.281-.141-1.664-.822-1.921-.916-.257-.094-.443-.141-.63.141-.186.281-.723.916-.885 1.102-.162.186-.324.21-.605.069-.282-.141-1.189-.439-2.264-1.401-.836-.746-1.4-1.667-1.564-1.948-.164-.282-.017-.434.124-.573.127-.125.281-.328.422-.492.141-.164.188-.281.282-.469.094-.188.047-.352-.023-.492-.07-.141-.63-1.523-.863-2.086-.226-.552-.455-.477-.63-.486-.162-.008-.349-.01-.536-.01-.188 0-.492.07-.75.352-.257.282-.984.961-.984 2.343 0 1.382 1.008 2.718 1.148 2.906.141.188 1.984 3.029 4.806 4.242.671.289 1.194.462 1.602.592.674.214 1.287.184 1.77.112.539-.081 1.664-.68 1.898-1.336.234-.656.234-1.219.164-1.336-.07-.117-.257-.188-.539-.328z"})})})]})}class xw extends O.Component{constructor(){super(...arguments);uc(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}async componentDidCatch(t,r){console.error("Uncaught error caught by ErrorBoundary:",t,r);try{await Qo(_n(Me,"client_errors"),{appName:this.props.appName||"Kone-Digital",errorMessage:t.message,errorStack:t.stack,componentStack:r.componentStack,url:window.location.href,userAgent:navigator.userAgent,timestamp:Ii()}),console.log("Error successfully logged to Firestore.")}catch(i){console.error("Failed to log error to Firestore:",i)}}render(){return this.state.hasError?c.jsxs("div",{style:{padding:"2rem",textAlign:"center",fontFamily:"system-ui, -apple-system, sans-serif",color:"#f8fafc",background:"#0a0a0f",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[c.jsx("h2",{style:{color:"#ec4899",marginBottom:"1rem",fontSize:"2rem"},children:"Oops, something went wrong."}),c.jsx("p",{style:{color:"#94a3b8",marginBottom:"2rem",maxWidth:"500px",lineHeight:"1.6"},children:this.props.fallbackMessage||"We're sorry, but an unexpected error occurred. Our engineering team has been notified. Please try refreshing the page."}),c.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"12px 24px",background:"#ec4899",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"1rem",boxShadow:"0 0 15px rgba(236, 72, 153, 0.4)"},children:"Refresh Page"})]}):this.props.children}}const tu=document.getElementById("root");tu&&su(tu).render(c.jsx(nu.StrictMode,{children:c.jsx(xw,{children:c.jsx(vw,{children:c.jsx(Tw,{})})})}));
