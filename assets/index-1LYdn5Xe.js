var Sf=Object.defineProperty;var Af=(n,e,t)=>e in n?Sf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var lc=(n,e,t)=>Af(n,typeof e!="symbol"?e+"":e,t);import{r as O,a as Rf,R as tu}from"./vendor-react-wGySg1uH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var nu={exports:{}},Pi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf=O,kf=Symbol.for("react.element"),Pf=Symbol.for("react.fragment"),Nf=Object.prototype.hasOwnProperty,Df=Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vf={key:!0,ref:!0,__self:!0,__source:!0};function ru(n,e,t){var r,i={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Nf.call(e,r)&&!Vf.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kf,type:n,key:s,ref:a,props:i,_owner:Df.current}}Pi.Fragment=Pf;Pi.jsx=ru;Pi.jsxs=ru;nu.exports=Pi;var c=nu.exports,iu,uc=Rf;iu=uc.createRoot,uc.hydrateRoot;const jf=({onOpenWizard:n})=>{const[e,t]=O.useState("stone");return c.jsxs("section",{className:"hub-hero",style:{padding:"3rem 1rem 4rem",maxWidth:"1200px",margin:"0 auto"},children:[c.jsxs("div",{style:{textAlign:"center",maxWidth:"850px",margin:"0 auto 3rem"},children:[c.jsx("span",{style:{background:"rgba(229, 192, 123, 0.1)",border:"1px solid rgba(229, 192, 123, 0.25)",color:"var(--gold-accent)",padding:"0.35rem 1.2rem",borderRadius:"50px",fontSize:"0.78rem",fontWeight:700,letterSpacing:"1.2px",textTransform:"uppercase",display:"inline-block",marginBottom:"1.5rem"},children:"48-HOUR MANAGED LAUNCH SLA"}),c.jsxs("h1",{style:{fontSize:"clamp(2.4rem, 6vw, 3.8rem)",fontWeight:900,lineHeight:1.15,marginBottom:"1.2rem"},children:["Putting Ghana's Best",c.jsx("br",{}),c.jsx("span",{className:"gold-text",children:"Businesses Online."})]}),c.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"1.15rem",lineHeight:1.7,marginBottom:"2.5rem",maxWidth:"720px",margin:"0 auto 2.5rem"},children:["Traditional marketing ends at the flyer. We engineer high-performance Website as a Service (WaaS) platforms with automated ",c.jsx("strong",{style:{color:"#ffcc00"},children:"MoMo payments"})," and direct ",c.jsx("strong",{style:{color:"#10b981"},children:"WhatsApp lead routing"}),"."]}),c.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[c.jsx("button",{onClick:n,className:"neon-btn",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.85rem 2rem",fontSize:"0.92rem",cursor:"pointer",background:"var(--cyan-glow)",color:"#07090E",fontWeight:800},children:c.jsx("span",{children:"Generate Starter Website ➔"})}),c.jsx("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20request%20a%20consultation%20for%20my%20business%20website.",target:"_blank",rel:"noopener noreferrer",className:"neon-btn",style:{textDecoration:"none",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.12)",color:"var(--text-main)",padding:"0.85rem 2rem",fontSize:"0.92rem"},children:c.jsx("span",{children:"Request Consultation"})})]})]}),c.jsxs("div",{className:"hero-demo-stage neon-border",style:{background:"var(--bg-surface)",borderRadius:"20px",padding:"1.5rem",maxWidth:"960px",margin:"0 auto",boxShadow:"0 20px 50px rgba(0,0,0,0.6)"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem",marginBottom:"1.5rem",borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"1rem"},children:[c.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[c.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#ff5f56"}}),c.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#ffbd2e"}}),c.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#27c93f"}}),c.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.78rem",marginLeft:"0.5rem",fontWeight:700,letterSpacing:"0.5px"},children:"INTERACTIVE PLATFORM PREVIEW"})]}),c.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",justifyContent:"center"},children:[c.jsx("button",{onClick:()=>t("stone"),style:{background:e==="stone"?"rgba(255,255,255,0.12)":"transparent",color:e==="stone"?"#fff":"var(--text-muted)",border:"1px solid "+(e==="stone"?"rgba(255,255,255,0.2)":"transparent"),padding:"0.4rem 0.8rem",borderRadius:"8px",fontWeight:700,fontSize:"0.78rem",cursor:"pointer",transition:"all 0.2s"},children:"Stone Architecture"}),c.jsx("button",{onClick:()=>t("fashion"),style:{background:e==="fashion"?"rgba(255,255,255,0.12)":"transparent",color:e==="fashion"?"#fff":"var(--text-muted)",border:"1px solid "+(e==="fashion"?"rgba(255,255,255,0.2)":"transparent"),padding:"0.4rem 0.8rem",borderRadius:"8px",fontWeight:700,fontSize:"0.78rem",cursor:"pointer",transition:"all 0.2s"},children:"Fashion Retail"}),c.jsx("button",{onClick:()=>t("momo"),style:{background:e==="momo"?"rgba(255,255,255,0.12)":"transparent",color:e==="momo"?"#fff":"var(--text-muted)",border:"1px solid "+(e==="momo"?"rgba(255,255,255,0.2)":"transparent"),padding:"0.4rem 0.8rem",borderRadius:"8px",fontWeight:700,fontSize:"0.78rem",cursor:"pointer",transition:"all 0.2s"},children:"Payment Engine"})]})]}),c.jsxs("div",{style:{borderRadius:"12px",overflow:"hidden",minHeight:"340px",height:"auto",position:"relative",background:"#0d1117"},children:[e==="stone"&&c.jsxs("div",{style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/sedemson_stone_hero.png")',backgroundSize:"cover",backgroundPosition:"center",color:"#fff",padding:"2rem 1.2rem",textAlign:"center"},children:[c.jsx("span",{style:{background:"rgba(241, 196, 15, 0.2)",border:"1px solid #f1c40f",color:"#f1c40f",padding:"0.25rem 0.85rem",borderRadius:"20px",fontWeight:700,fontSize:"0.75rem",marginBottom:"0.8rem"},children:"B2B CASE STUDY"}),c.jsx("h2",{style:{fontSize:"clamp(1.3rem, 5vw, 2rem)",fontFamily:"serif",fontWeight:900},children:"Sedemson Stone Craftsmanship"}),c.jsx("p",{style:{maxWidth:"500px",fontSize:"0.9rem",opacity:.85,marginTop:"0.5rem"},children:"Natural Stone Cladding & Architectural Finishes across Ghana."}),c.jsx("span",{style:{marginTop:"1.2rem",color:"var(--cyan-glow)",fontWeight:700,fontSize:"0.85rem"},children:"Launching Soon"})]}),e==="fashion"&&c.jsxs("div",{style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/emewear/emewear_hero.jpg")',backgroundSize:"cover",backgroundPosition:"top",color:"#fff",padding:"2rem 1.2rem",textAlign:"center"},children:[c.jsx("span",{style:{background:"rgba(229, 184, 130, 0.2)",border:"1px solid #e5b882",color:"#e5b882",padding:"0.25rem 0.85rem",borderRadius:"20px",fontWeight:700,fontSize:"0.75rem",marginBottom:"0.8rem"},children:"E-COMMERCE CASE STUDY"}),c.jsx("h2",{style:{fontSize:"clamp(1.3rem, 5vw, 2rem)",fontFamily:"serif",fontWeight:900},children:"Emewear Plus-Size Ankara"}),c.jsx("p",{style:{maxWidth:"500px",fontSize:"0.9rem",opacity:.85,marginTop:"0.5rem"},children:"Handcrafted Ankara wide-leg cargo trousers & royal batik palazzo sets."}),c.jsx("span",{style:{marginTop:"1.2rem",color:"#e5b882",fontWeight:700,fontSize:"0.85rem"},children:"Launching Soon"})]}),e==="momo"&&c.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"radial-gradient(circle, #121826 0%, #07090E 100%)",color:"#fff",padding:"2rem",textAlign:"center"},children:[c.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1rem",color:"#10b981"},children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),c.jsx("h2",{style:{fontSize:"1.6rem",color:"#fff",fontWeight:800},children:"Automated WhatsApp Order Engine"}),c.jsx("p",{style:{maxWidth:"520px",color:"var(--text-muted)",fontSize:"0.92rem",marginTop:"0.5rem",lineHeight:1.6},children:"When customers select products on your storefront, orders automatically compile into structured WhatsApp messages with instant Mobile Money payment prompts."}),c.jsxs("div",{style:{marginTop:"1.2rem",display:"flex",gap:"0.8rem",flexWrap:"wrap",justifyContent:"center"},children:[c.jsx("span",{style:{background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.3)",color:"#10b981",padding:"0.35rem 0.9rem",borderRadius:"20px",fontSize:"0.78rem",fontWeight:700},children:"Direct WhatsApp Routing"}),c.jsx("span",{style:{background:"rgba(255, 204, 0, 0.1)",border:"1px solid rgba(255, 204, 0, 0.3)",color:"#ffcc00",padding:"0.35rem 0.9rem",borderRadius:"20px",fontSize:"0.78rem",fontWeight:700},children:"MTN & Telecel Settlement"})]})]})]})]})]})},Of=()=>{const n=[{metric:"48h",title:"Rapid Launch Turnaround",description:"Your bespoke business hub deployed with zero technical overhead.",color:"var(--cyan-glow)"},{metric:"Direct",title:"MoMo & WhatsApp Routing",description:"Automated order collection straight to your MTN, Telecel, or AT phone.",color:"var(--gold-accent)"},{metric:"100%",title:"Fully Managed WaaS",description:"Zero maintenance headaches. We handle hosting, SSL, updates & security.",color:"#10b981"},{metric:"99.9%",title:"Guaranteed Uptime & Speed",description:"Ultra-lightweight code optimized for African 3G/4G networks.",color:"var(--cyan-glow)"}];return c.jsxs("section",{className:"trust-metrics-section",style:{padding:"3rem 0",margin:"2rem 0"},children:[c.jsxs("div",{className:"section-title",style:{textAlign:"center",marginBottom:"2.5rem"},children:[c.jsx("span",{className:"badge-pill",style:{background:"rgba(0, 255, 255, 0.1)",border:"1px solid var(--cyan-glow)",color:"var(--cyan-glow)",padding:"0.35rem 1rem",borderRadius:"50px",fontSize:"0.72rem",fontWeight:750,letterSpacing:"1px",textTransform:"uppercase",display:"inline-block",maxWidth:"90%"},children:"ENTERPRISE ARCHITECTURE • ZERO MAINTENANCE"}),c.jsxs("h2",{style:{fontSize:"clamp(1.5rem, 5vw, 2.2rem)",marginTop:"0.8rem",fontWeight:800},children:["Engineered for ",c.jsx("span",{className:"neon-text",children:"Real Business Growth"})]})]}),c.jsx("div",{className:"metrics-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 220px), 1fr))",gap:"1.2rem",maxWidth:"1100px",margin:"0 auto",padding:"0 1rem"},children:n.map((e,t)=>c.jsxs("div",{className:"metric-card neon-border",style:{background:"var(--bg-surface)",padding:"2rem 1.5rem",borderRadius:"16px",textAlign:"center",backdropFilter:"blur(10px)"},children:[c.jsx("div",{style:{fontSize:"2.6rem",fontWeight:900,color:e.color},children:e.metric}),c.jsx("h3",{style:{color:"var(--text-main)",fontSize:"1rem",fontWeight:700,marginTop:"0.6rem",marginBottom:"0.3rem"},children:e.title}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.82rem",lineHeight:1.5},children:e.description})]},t))}),c.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem",flexWrap:"wrap",marginTop:"3rem",opacity:.9},children:[c.jsx("div",{style:{color:"var(--text-subtle)",fontSize:"0.8rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"1px"},children:"INTEGRATIONS:"}),c.jsxs("span",{style:{color:"#ffcc00",fontWeight:700,fontSize:"0.88rem",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#ffcc00"}}),"MTN Mobile Money"]}),c.jsxs("span",{style:{color:"#e60000",fontWeight:700,fontSize:"0.88rem",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#e60000"}}),"Telecel Cash"]}),c.jsxs("span",{style:{color:"#38bdf8",fontWeight:700,fontSize:"0.88rem",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#38bdf8"}}),"AT Money"]}),c.jsxs("span",{style:{color:"#10b981",fontWeight:700,fontSize:"0.88rem",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#10b981"}}),"WhatsApp Business"]})]})]})},Mf=()=>{};var hc={};/**
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
 */const su=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Lf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],u=n[t++],d=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},ou={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,u=a?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,p=s>>2,_=(s&3)<<4|u>>4;let x=(u&15)<<2|f>>6,C=f&63;d||(C=64,a||(x=64)),r.push(t[p],t[_],t[x],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(su(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Lf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const _=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||f==null||_==null)throw new Ff;const x=s<<2|u>>4;if(r.push(x),f!==64){const C=u<<4&240|f>>2;if(r.push(C),_!==64){const P=f<<6&192|_;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ff extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uf=function(n){const e=su(n);return ou.encodeByteArray(e,!0)},ci=function(n){return Uf(n).replace(/\./g,"")},au=function(n){try{return ou.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wf=()=>Bf().__FIREBASE_DEFAULTS__,zf=()=>{if(typeof process>"u"||typeof hc>"u")return;const n=hc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},qf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&au(n[1]);return e&&JSON.parse(e)},Ni=()=>{try{return Mf()||Wf()||zf()||qf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cu=n=>{var e,t;return(t=(e=Ni())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},$f=n=>{const e=cu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},lu=()=>{var n;return(n=Ni())==null?void 0:n.config},uu=n=>{var e;return(e=Ni())==null?void 0:e[`_${n}`]};/**
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
 */class Gf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Hf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ci(JSON.stringify(t)),ci(JSON.stringify(a)),""].join(".")}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Qf(){var e;const n=(e=Ni())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xf(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Zf(){return!Qf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function du(){try{return typeof indexedDB=="object"}catch{return!1}}function fu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}function em(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const tm="FirebaseError";class Qe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=tm,Object.setPrototypeOf(this,Qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sn.prototype.create)}}class sn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?nm(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Qe(i,u,r)}}function nm(n,e){return n.replace(rm,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rm=/\{\$([^}]+)}/g;function im(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Dt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(dc(s)&&dc(a)){if(!Dt(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function dc(n){return n!==null&&typeof n=="object"}/**
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
 */function Er(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sm(n,e){const t=new om(n,e);return t.subscribe.bind(t)}class om{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");am(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Is),i.error===void 0&&(i.error=Is),i.complete===void 0&&(i.complete=Is);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function am(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Is(){}/**
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
 */const cm=1e3,lm=2,um=4*60*60*1e3,hm=.5;function fc(n,e=cm,t=lm){const r=e*Math.pow(t,n),i=Math.round(hm*r*(Math.random()-.5)*2);return Math.min(um,r+i)}/**
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
 */function xr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mu(n){return(await fetch(n,{credentials:"include"})).ok}class He{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class dm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Gf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mm(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fm(n){return n===Gt?void 0:n}function mm(n){return n.instantiationMode==="EAGER"}/**
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
 */class pm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const gm={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},ym=H.INFO,_m={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},vm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=_m[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Di{constructor(e){this.name=e,this._logLevel=ym,this._logHandler=vm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const bm=(n,e)=>e.some(t=>n instanceof t);let mc,pc;function wm(){return mc||(mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Im(){return pc||(pc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pu=new WeakMap,Ls=new WeakMap,gu=new WeakMap,Ts=new WeakMap,uo=new WeakMap;function Tm(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Ct(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&pu.set(t,n)}).catch(()=>{}),uo.set(e,n),e}function Em(n){if(Ls.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Ls.set(n,e)}let Fs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ls.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ct(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xm(n){Fs=n(Fs)}function Sm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Es(this),e,...t);return gu.set(r,e.sort?e.sort():[e]),Ct(r)}:Im().includes(n)?function(...e){return n.apply(Es(this),e),Ct(pu.get(this))}:function(...e){return Ct(n.apply(Es(this),e))}}function Am(n){return typeof n=="function"?Sm(n):(n instanceof IDBTransaction&&Em(n),bm(n,wm())?new Proxy(n,Fs):n)}function Ct(n){if(n instanceof IDBRequest)return Tm(n);if(Ts.has(n))return Ts.get(n);const e=Am(n);return e!==n&&(Ts.set(n,e),uo.set(e,n)),e}const Es=n=>uo.get(n);function yu(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),u=Ct(a);return r&&a.addEventListener("upgradeneeded",d=>{r(Ct(a.result),d.oldVersion,d.newVersion,Ct(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),u.then(d=>{s&&d.addEventListener("close",()=>s()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const Rm=["get","getKey","getAll","getAllKeys","count"],Cm=["put","add","delete","clear"],xs=new Map;function gc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xs.get(e))return xs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Cm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Rm.includes(t)))return;const s=async function(a,...u){const d=this.transaction(a,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[t](...u),i&&d.done]))[0]};return xs.set(e,s),s}xm(n=>({...n,get:(e,t,r)=>gc(e,t)||n.get(e,t,r),has:(e,t)=>!!gc(e,t)||n.has(e,t)}));/**
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
 */class km{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Pm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Pm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Us="@firebase/app",yc="0.14.11";/**
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
 */const ht=new Di("@firebase/app"),Nm="@firebase/app-compat",Dm="@firebase/analytics-compat",Vm="@firebase/analytics",jm="@firebase/app-check-compat",Om="@firebase/app-check",Mm="@firebase/auth",Lm="@firebase/auth-compat",Fm="@firebase/database",Um="@firebase/data-connect",Bm="@firebase/database-compat",Wm="@firebase/functions",zm="@firebase/functions-compat",qm="@firebase/installations",$m="@firebase/installations-compat",Gm="@firebase/messaging",Hm="@firebase/messaging-compat",Km="@firebase/performance",Qm="@firebase/performance-compat",Ym="@firebase/remote-config",Jm="@firebase/remote-config-compat",Xm="@firebase/storage",Zm="@firebase/storage-compat",ep="@firebase/firestore",tp="@firebase/ai",np="@firebase/firestore-compat",rp="firebase",ip="12.12.0";/**
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
 */const Bs="[DEFAULT]",sp={[Us]:"fire-core",[Nm]:"fire-core-compat",[Vm]:"fire-analytics",[Dm]:"fire-analytics-compat",[Om]:"fire-app-check",[jm]:"fire-app-check-compat",[Mm]:"fire-auth",[Lm]:"fire-auth-compat",[Fm]:"fire-rtdb",[Um]:"fire-data-connect",[Bm]:"fire-rtdb-compat",[Wm]:"fire-fn",[zm]:"fire-fn-compat",[qm]:"fire-iid",[$m]:"fire-iid-compat",[Gm]:"fire-fcm",[Hm]:"fire-fcm-compat",[Km]:"fire-perf",[Qm]:"fire-perf-compat",[Ym]:"fire-rc",[Jm]:"fire-rc-compat",[Xm]:"fire-gcs",[Zm]:"fire-gcs-compat",[ep]:"fire-fst",[np]:"fire-fst-compat",[tp]:"fire-vertex","fire-js":"fire-js",[rp]:"fire-js-all"};/**
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
 */const li=new Map,op=new Map,Ws=new Map;function _c(n,e){try{n.container.addComponent(e)}catch(t){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ot(n){const e=n.name;if(Ws.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;Ws.set(e,n);for(const t of li.values())_c(t,n);for(const t of op.values())_c(t,n);return!0}function on(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function et(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ap={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new sn("app","Firebase",ap);/**
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
 */class cp{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
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
 */const Dn=ip;function _u(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Bs,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw kt.create("bad-app-name",{appName:String(i)});if(t||(t=lu()),!t)throw kt.create("no-options");const s=li.get(i);if(s){if(Dt(t,s.options)&&Dt(r,s.config))return s;throw kt.create("duplicate-app",{appName:i})}const a=new pm(i);for(const d of Ws.values())a.addComponent(d);const u=new cp(t,r,a);return li.set(i,u),u}function ho(n=Bs){const e=li.get(n);if(!e&&n===Bs&&lu())return _u();if(!e)throw kt.create("no-app",{appName:n});return e}function We(n,e,t){let r=sp[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(a.join(" "));return}ot(new He(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const lp="firebase-heartbeat-database",up=1,mr="firebase-heartbeat-store";let Ss=null;function vu(){return Ss||(Ss=yu(lp,up,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(mr)}catch(t){console.warn(t)}}}}).catch(n=>{throw kt.create("idb-open",{originalErrorMessage:n.message})})),Ss}async function hp(n){try{const t=(await vu()).transaction(mr),r=await t.objectStore(mr).get(bu(n));return await t.done,r}catch(e){if(e instanceof Qe)ht.warn(e.message);else{const t=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(t.message)}}}async function vc(n,e){try{const r=(await vu()).transaction(mr,"readwrite");await r.objectStore(mr).put(e,bu(n)),await r.done}catch(t){if(t instanceof Qe)ht.warn(t.message);else{const r=kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ht.warn(r.message)}}}function bu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const dp=1024,fp=30;class mp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>fp){const a=yp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ht.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bc(),{heartbeatsToSend:r,unsentEntries:i}=pp(this._heartbeatsCache.heartbeats),s=ci(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ht.warn(t),""}}}function bc(){return new Date().toISOString().substring(0,10)}function pp(n,e=dp){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),wc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),wc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class gp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return du()?fu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wc(n){return ci(JSON.stringify({version:2,heartbeats:n})).length}function yp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function _p(n){ot(new He("platform-logger",e=>new km(e),"PRIVATE")),ot(new He("heartbeat",e=>new mp(e),"PRIVATE")),We(Us,yc,n),We(Us,yc,"esm2020"),We("fire-js","")}_p("");var Ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pt,wu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function v(){}v.prototype=y.prototype,w.F=y.prototype,w.prototype=new v,w.prototype.constructor=w,w.D=function(I,b,T){for(var g=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)g[fe-2]=arguments[fe];return y.prototype[b].apply(I,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,v){v||(v=0);const I=Array(16);if(typeof y=="string")for(var b=0;b<16;++b)I[b]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(b=0;b<16;++b)I[b]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=w.g[0],v=w.g[1],b=w.g[2];let T=w.g[3],g;g=y+(T^v&(b^T))+I[0]+3614090360&4294967295,y=v+(g<<7&4294967295|g>>>25),g=T+(b^y&(v^b))+I[1]+3905402710&4294967295,T=y+(g<<12&4294967295|g>>>20),g=b+(v^T&(y^v))+I[2]+606105819&4294967295,b=T+(g<<17&4294967295|g>>>15),g=v+(y^b&(T^y))+I[3]+3250441966&4294967295,v=b+(g<<22&4294967295|g>>>10),g=y+(T^v&(b^T))+I[4]+4118548399&4294967295,y=v+(g<<7&4294967295|g>>>25),g=T+(b^y&(v^b))+I[5]+1200080426&4294967295,T=y+(g<<12&4294967295|g>>>20),g=b+(v^T&(y^v))+I[6]+2821735955&4294967295,b=T+(g<<17&4294967295|g>>>15),g=v+(y^b&(T^y))+I[7]+4249261313&4294967295,v=b+(g<<22&4294967295|g>>>10),g=y+(T^v&(b^T))+I[8]+1770035416&4294967295,y=v+(g<<7&4294967295|g>>>25),g=T+(b^y&(v^b))+I[9]+2336552879&4294967295,T=y+(g<<12&4294967295|g>>>20),g=b+(v^T&(y^v))+I[10]+4294925233&4294967295,b=T+(g<<17&4294967295|g>>>15),g=v+(y^b&(T^y))+I[11]+2304563134&4294967295,v=b+(g<<22&4294967295|g>>>10),g=y+(T^v&(b^T))+I[12]+1804603682&4294967295,y=v+(g<<7&4294967295|g>>>25),g=T+(b^y&(v^b))+I[13]+4254626195&4294967295,T=y+(g<<12&4294967295|g>>>20),g=b+(v^T&(y^v))+I[14]+2792965006&4294967295,b=T+(g<<17&4294967295|g>>>15),g=v+(y^b&(T^y))+I[15]+1236535329&4294967295,v=b+(g<<22&4294967295|g>>>10),g=y+(b^T&(v^b))+I[1]+4129170786&4294967295,y=v+(g<<5&4294967295|g>>>27),g=T+(v^b&(y^v))+I[6]+3225465664&4294967295,T=y+(g<<9&4294967295|g>>>23),g=b+(y^v&(T^y))+I[11]+643717713&4294967295,b=T+(g<<14&4294967295|g>>>18),g=v+(T^y&(b^T))+I[0]+3921069994&4294967295,v=b+(g<<20&4294967295|g>>>12),g=y+(b^T&(v^b))+I[5]+3593408605&4294967295,y=v+(g<<5&4294967295|g>>>27),g=T+(v^b&(y^v))+I[10]+38016083&4294967295,T=y+(g<<9&4294967295|g>>>23),g=b+(y^v&(T^y))+I[15]+3634488961&4294967295,b=T+(g<<14&4294967295|g>>>18),g=v+(T^y&(b^T))+I[4]+3889429448&4294967295,v=b+(g<<20&4294967295|g>>>12),g=y+(b^T&(v^b))+I[9]+568446438&4294967295,y=v+(g<<5&4294967295|g>>>27),g=T+(v^b&(y^v))+I[14]+3275163606&4294967295,T=y+(g<<9&4294967295|g>>>23),g=b+(y^v&(T^y))+I[3]+4107603335&4294967295,b=T+(g<<14&4294967295|g>>>18),g=v+(T^y&(b^T))+I[8]+1163531501&4294967295,v=b+(g<<20&4294967295|g>>>12),g=y+(b^T&(v^b))+I[13]+2850285829&4294967295,y=v+(g<<5&4294967295|g>>>27),g=T+(v^b&(y^v))+I[2]+4243563512&4294967295,T=y+(g<<9&4294967295|g>>>23),g=b+(y^v&(T^y))+I[7]+1735328473&4294967295,b=T+(g<<14&4294967295|g>>>18),g=v+(T^y&(b^T))+I[12]+2368359562&4294967295,v=b+(g<<20&4294967295|g>>>12),g=y+(v^b^T)+I[5]+4294588738&4294967295,y=v+(g<<4&4294967295|g>>>28),g=T+(y^v^b)+I[8]+2272392833&4294967295,T=y+(g<<11&4294967295|g>>>21),g=b+(T^y^v)+I[11]+1839030562&4294967295,b=T+(g<<16&4294967295|g>>>16),g=v+(b^T^y)+I[14]+4259657740&4294967295,v=b+(g<<23&4294967295|g>>>9),g=y+(v^b^T)+I[1]+2763975236&4294967295,y=v+(g<<4&4294967295|g>>>28),g=T+(y^v^b)+I[4]+1272893353&4294967295,T=y+(g<<11&4294967295|g>>>21),g=b+(T^y^v)+I[7]+4139469664&4294967295,b=T+(g<<16&4294967295|g>>>16),g=v+(b^T^y)+I[10]+3200236656&4294967295,v=b+(g<<23&4294967295|g>>>9),g=y+(v^b^T)+I[13]+681279174&4294967295,y=v+(g<<4&4294967295|g>>>28),g=T+(y^v^b)+I[0]+3936430074&4294967295,T=y+(g<<11&4294967295|g>>>21),g=b+(T^y^v)+I[3]+3572445317&4294967295,b=T+(g<<16&4294967295|g>>>16),g=v+(b^T^y)+I[6]+76029189&4294967295,v=b+(g<<23&4294967295|g>>>9),g=y+(v^b^T)+I[9]+3654602809&4294967295,y=v+(g<<4&4294967295|g>>>28),g=T+(y^v^b)+I[12]+3873151461&4294967295,T=y+(g<<11&4294967295|g>>>21),g=b+(T^y^v)+I[15]+530742520&4294967295,b=T+(g<<16&4294967295|g>>>16),g=v+(b^T^y)+I[2]+3299628645&4294967295,v=b+(g<<23&4294967295|g>>>9),g=y+(b^(v|~T))+I[0]+4096336452&4294967295,y=v+(g<<6&4294967295|g>>>26),g=T+(v^(y|~b))+I[7]+1126891415&4294967295,T=y+(g<<10&4294967295|g>>>22),g=b+(y^(T|~v))+I[14]+2878612391&4294967295,b=T+(g<<15&4294967295|g>>>17),g=v+(T^(b|~y))+I[5]+4237533241&4294967295,v=b+(g<<21&4294967295|g>>>11),g=y+(b^(v|~T))+I[12]+1700485571&4294967295,y=v+(g<<6&4294967295|g>>>26),g=T+(v^(y|~b))+I[3]+2399980690&4294967295,T=y+(g<<10&4294967295|g>>>22),g=b+(y^(T|~v))+I[10]+4293915773&4294967295,b=T+(g<<15&4294967295|g>>>17),g=v+(T^(b|~y))+I[1]+2240044497&4294967295,v=b+(g<<21&4294967295|g>>>11),g=y+(b^(v|~T))+I[8]+1873313359&4294967295,y=v+(g<<6&4294967295|g>>>26),g=T+(v^(y|~b))+I[15]+4264355552&4294967295,T=y+(g<<10&4294967295|g>>>22),g=b+(y^(T|~v))+I[6]+2734768916&4294967295,b=T+(g<<15&4294967295|g>>>17),g=v+(T^(b|~y))+I[13]+1309151649&4294967295,v=b+(g<<21&4294967295|g>>>11),g=y+(b^(v|~T))+I[4]+4149444226&4294967295,y=v+(g<<6&4294967295|g>>>26),g=T+(v^(y|~b))+I[11]+3174756917&4294967295,T=y+(g<<10&4294967295|g>>>22),g=b+(y^(T|~v))+I[2]+718787259&4294967295,b=T+(g<<15&4294967295|g>>>17),g=v+(T^(b|~y))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(b+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+T&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const v=y-this.blockSize,I=this.C;let b=this.h,T=0;for(;T<y;){if(b==0)for(;T<=v;)i(this,w,T),T+=this.blockSize;if(typeof w=="string"){for(;T<y;)if(I[b++]=w.charCodeAt(T++),b==this.blockSize){i(this,I),b=0;break}}else for(;T<y;)if(I[b++]=w[T++],b==this.blockSize){i(this,I),b=0;break}}this.h=b,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var v=w.length-8;v<w.length;++v)w[v]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,v=0;v<4;++v)for(let I=0;I<32;I+=8)w[y++]=this.g[v]>>>I&255;return w};function s(w,y){var v=u;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=y(w)}function a(w,y){this.h=y;const v=[];let I=!0;for(let b=w.length-1;b>=0;b--){const T=w[b]|0;I&&T==y||(v[b]=T,I=!1)}this.g=v}var u={};function d(w){return-128<=w&&w<128?s(w,function(y){return new a([y|0],y<0?-1:0)}):new a([w|0],w<0?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return _;if(w<0)return N(f(-w));const y=[];let v=1;for(let I=0;w>=v;I++)y[I]=w/v|0,v*=4294967296;return new a(y,0)}function p(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return N(p(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=f(Math.pow(y,8));let I=_;for(let T=0;T<w.length;T+=8){var b=Math.min(8,w.length-T);const g=parseInt(w.substring(T,T+b),y);b<8?(b=f(Math.pow(y,b)),I=I.j(b).add(f(g))):(I=I.j(v),I=I.add(f(g)))}return I}var _=d(0),x=d(1),C=d(16777216);n=a.prototype,n.m=function(){if(D(this))return-N(this).m();let w=0,y=1;for(let v=0;v<this.g.length;v++){const I=this.i(v);w+=(I>=0?I:4294967296+I)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(D(this))return"-"+N(this).toString(w);const y=f(Math.pow(w,6));var v=this;let I="";for(;;){const b=ae(v,y).g;v=z(v,b.j(y));let T=((v.g.length>0?v.g[0]:v.h)>>>0).toString(w);if(v=b,P(v))return T+I;for(;T.length<6;)T="0"+T;I=T+I}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function D(w){return w.h==-1}n.l=function(w){return w=z(this,w),D(w)?-1:P(w)?0:1};function N(w){const y=w.g.length,v=[];for(let I=0;I<y;I++)v[I]=~w.g[I];return new a(v,~w.h).add(x)}n.abs=function(){return D(this)?N(this):this},n.add=function(w){const y=Math.max(this.g.length,w.g.length),v=[];let I=0;for(let b=0;b<=y;b++){let T=I+(this.i(b)&65535)+(w.i(b)&65535),g=(T>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);I=g>>>16,T&=65535,g&=65535,v[b]=g<<16|T}return new a(v,v[v.length-1]&-2147483648?-1:0)};function z(w,y){return w.add(N(y))}n.j=function(w){if(P(this)||P(w))return _;if(D(this))return D(w)?N(this).j(N(w)):N(N(this).j(w));if(D(w))return N(this.j(N(w)));if(this.l(C)<0&&w.l(C)<0)return f(this.m()*w.m());const y=this.g.length+w.g.length,v=[];for(var I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(let b=0;b<w.g.length;b++){const T=this.i(I)>>>16,g=this.i(I)&65535,fe=w.i(b)>>>16,ze=w.i(b)&65535;v[2*I+2*b]+=g*ze,$(v,2*I+2*b),v[2*I+2*b+1]+=T*ze,$(v,2*I+2*b+1),v[2*I+2*b+1]+=g*fe,$(v,2*I+2*b+1),v[2*I+2*b+2]+=T*fe,$(v,2*I+2*b+2)}for(w=0;w<y;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=y;w<2*y;w++)v[w]=0;return new a(v,0)};function $(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function J(w,y){this.g=w,this.h=y}function ae(w,y){if(P(y))throw Error("division by zero");if(P(w))return new J(_,_);if(D(w))return y=ae(N(w),y),new J(N(y.g),N(y.h));if(D(y))return y=ae(w,N(y)),new J(N(y.g),y.h);if(w.g.length>30){if(D(w)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var v=x,I=y;I.l(w)<=0;)v=Z(v),I=Z(I);var b=ie(v,1),T=ie(I,1);for(I=ie(I,2),v=ie(v,2);!P(I);){var g=T.add(I);g.l(w)<=0&&(b=b.add(v),T=g),I=ie(I,1),v=ie(v,1)}return y=z(w,b.j(y)),new J(b,y)}for(b=_;w.l(y)>=0;){for(v=Math.max(1,Math.floor(w.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),T=f(v),g=T.j(y);D(g)||g.l(w)>0;)v-=I,T=f(v),g=T.j(y);P(T)&&(T=x),b=b.add(T),w=z(w,g)}return new J(b,w)}n.B=function(w){return ae(this,w).h},n.and=function(w){const y=Math.max(this.g.length,w.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)&w.i(I);return new a(v,this.h&w.h)},n.or=function(w){const y=Math.max(this.g.length,w.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)|w.i(I);return new a(v,this.h|w.h)},n.xor=function(w){const y=Math.max(this.g.length,w.g.length),v=[];for(let I=0;I<y;I++)v[I]=this.i(I)^w.i(I);return new a(v,this.h^w.h)};function Z(w){const y=w.g.length+1,v=[];for(let I=0;I<y;I++)v[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(v,w.h)}function ie(w,y){const v=y>>5;y%=32;const I=w.g.length-v,b=[];for(let T=0;T<I;T++)b[T]=y>0?w.i(T+v)>>>y|w.i(T+v+1)<<32-y:w.i(T+v);return new a(b,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,wu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,Pt=a}).apply(typeof Ic<"u"?Ic:typeof self<"u"?self:typeof window<"u"?window:{});var Gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Iu,ir,Tu,Xr,zs,Eu,xu,Su;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gr=="object"&&Gr];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,l){if(l)e:{var h=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var E=o[m];if(!(E in h))break e;h=h[E]}o=o[o.length-1],m=h[o],l=l(m),l!=m&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(l){var h=[],m;for(m in l)Object.prototype.hasOwnProperty.call(l,m)&&h.push([m,l[m]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function u(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function d(o,l,h){return o.call.apply(o.bind,arguments)}function f(o,l,h){return f=d,f.apply(null,arguments)}function p(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function _(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(m,E,S){for(var k=Array(arguments.length-2),G=2;G<arguments.length;G++)k[G-2]=arguments[G];return l.prototype[E].apply(m,k)}}var x=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function C(o){const l=o.length;if(l>0){const h=Array(l);for(let m=0;m<l;m++)h[m]=o[m];return h}return[]}function P(o,l){for(let m=1;m<arguments.length;m++){const E=arguments[m];var h=typeof E;if(h=h!="object"?h:E?Array.isArray(E)?"array":h:"null",h=="array"||h=="object"&&typeof E.length=="number"){h=o.length||0;const S=E.length||0;o.length=h+S;for(let k=0;k<S;k++)o[h+k]=E[k]}else o.push(E)}}class D{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function N(o){a.setTimeout(()=>{throw o},0)}function z(){var o=w;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class ${constructor(){this.h=this.g=null}add(l,h){const m=J.get();m.set(l,h),this.h?this.h.next=m:this.g=m,this.h=m}}var J=new D(()=>new ae,o=>o.reset());class ae{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,ie=!1,w=new $,y=()=>{const o=Promise.resolve(void 0);Z=()=>{o.then(v)}};function v(){for(var o;o=z();){try{o.h.call(o.g)}catch(h){N(h)}var l=J;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}ie=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o}();function g(o){return/^[\s\xa0]*$/.test(o)}function fe(o,l){b.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}_(fe,b),fe.prototype.init=function(o,l){const h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&fe.Z.h.call(this)},fe.prototype.h=function(){fe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ze="closure_listenable_"+(Math.random()*1e6|0),ve=0;function q(o,l,h,m,E){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!m,this.ha=E,this.key=++ve,this.da=this.fa=!1}function Ye(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Fe(o,l,h){for(const m in o)l.call(h,o[m],m,o)}function gt(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function F(o){const l={};for(const h in o)l[h]=o[h];return l}const Ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function be(o,l){let h,m;for(let E=1;E<arguments.length;E++){m=arguments[E];for(h in m)o[h]=m[h];for(let S=0;S<Ee.length;S++)h=Ee[S],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function ce(o){this.src=o,this.g={},this.h=0}ce.prototype.add=function(o,l,h,m,E){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const k=Zi(o,l,m,E);return k>-1?(l=o[k],h||(l.fa=!1)):(l=new q(l,this.src,S,!!m,E),l.fa=h,o.push(l)),l};function Xi(o,l){const h=l.type;if(h in o.g){var m=o.g[h],E=Array.prototype.indexOf.call(m,l,void 0),S;(S=E>=0)&&Array.prototype.splice.call(m,E,1),S&&(Ye(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Zi(o,l,h,m){for(let E=0;E<o.length;++E){const S=o[E];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==m)return E}return-1}var es="closure_lm_"+(Math.random()*1e6|0),ts={};function ha(o,l,h,m,E){if(Array.isArray(l)){for(let S=0;S<l.length;S++)ha(o,l[S],h,m,E);return null}return h=ma(h),o&&o[ze]?o.J(l,h,u(m)?!!m.capture:!1,E):Yd(o,l,h,!1,m,E)}function Yd(o,l,h,m,E,S){if(!l)throw Error("Invalid event type");const k=u(E)?!!E.capture:!!E;let G=rs(o);if(G||(o[es]=G=new ce(o)),h=G.add(l,h,m,k,S),h.proxy)return h;if(m=Jd(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)T||(E=k),E===void 0&&(E=!1),o.addEventListener(l.toString(),m,E);else if(o.attachEvent)o.attachEvent(fa(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Jd(){function o(h){return l.call(o.src,o.listener,h)}const l=Xd;return o}function da(o,l,h,m,E){if(Array.isArray(l))for(var S=0;S<l.length;S++)da(o,l[S],h,m,E);else m=u(m)?!!m.capture:!!m,h=ma(h),o&&o[ze]?(o=o.i,S=String(l).toString(),S in o.g&&(l=o.g[S],h=Zi(l,h,m,E),h>-1&&(Ye(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[S],o.h--)))):o&&(o=rs(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Zi(l,h,m,E)),(h=o>-1?l[o]:null)&&ns(h))}function ns(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[ze])Xi(l.i,o);else{var h=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(h,m,o.capture):l.detachEvent?l.detachEvent(fa(h),m):l.addListener&&l.removeListener&&l.removeListener(m),(h=rs(l))?(Xi(h,o),h.h==0&&(h.src=null,l[es]=null)):Ye(o)}}}function fa(o){return o in ts?ts[o]:ts[o]="on"+o}function Xd(o,l){if(o.da)o=!0;else{l=new fe(l,this);const h=o.listener,m=o.ha||o.src;o.fa&&ns(o),o=h.call(m,l)}return o}function rs(o){return o=o[es],o instanceof ce?o:null}var is="__closure_events_fn_"+(Math.random()*1e9>>>0);function ma(o){return typeof o=="function"?o:(o[is]||(o[is]=function(l){return o.handleEvent(l)}),o[is])}function xe(){I.call(this),this.i=new ce(this),this.M=this,this.G=null}_(xe,I),xe.prototype[ze]=!0,xe.prototype.removeEventListener=function(o,l,h,m){da(this,o,l,h,m)};function Pe(o,l){var h,m=o.G;if(m)for(h=[];m;m=m.G)h.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new b(l,o);else if(l instanceof b)l.target=l.target||o;else{var E=l;l=new b(m,o),be(l,E)}E=!0;let S,k;if(h)for(k=h.length-1;k>=0;k--)S=l.g=h[k],E=Vr(S,m,!0,l)&&E;if(S=l.g=o,E=Vr(S,m,!0,l)&&E,E=Vr(S,m,!1,l)&&E,h)for(k=0;k<h.length;k++)S=l.g=h[k],E=Vr(S,m,!1,l)&&E}xe.prototype.N=function(){if(xe.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let m=0;m<h.length;m++)Ye(h[m]);delete o.g[l],o.h--}}this.G=null},xe.prototype.J=function(o,l,h,m){return this.i.add(String(o),l,!1,h,m)},xe.prototype.K=function(o,l,h,m){return this.i.add(String(o),l,!0,h,m)};function Vr(o,l,h,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let E=!0;for(let S=0;S<l.length;++S){const k=l[S];if(k&&!k.da&&k.capture==h){const G=k.listener,me=k.ha||k.src;k.fa&&Xi(o.i,k),E=G.call(me,m)!==!1&&E}}return E&&!m.defaultPrevented}function Zd(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function pa(o){o.g=Zd(()=>{o.g=null,o.i&&(o.i=!1,pa(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class ef extends I{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:pa(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Un(o){I.call(this),this.h=o,this.g={}}_(Un,I);var ga=[];function ya(o){Fe(o.g,function(l,h){this.g.hasOwnProperty(h)&&ns(l)},o),o.g={}}Un.prototype.N=function(){Un.Z.N.call(this),ya(this)},Un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ss=a.JSON.stringify,tf=a.JSON.parse,nf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function _a(){}function va(){}var Bn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function os(){b.call(this,"d")}_(os,b);function as(){b.call(this,"c")}_(as,b);var Bt={},ba=null;function jr(){return ba=ba||new xe}Bt.Ia="serverreachability";function wa(o){b.call(this,Bt.Ia,o)}_(wa,b);function Wn(o){const l=jr();Pe(l,new wa(l))}Bt.STAT_EVENT="statevent";function Ia(o,l){b.call(this,Bt.STAT_EVENT,o),this.stat=l}_(Ia,b);function Ne(o){const l=jr();Pe(l,new Ia(l,o))}Bt.Ja="timingevent";function Ta(o,l){b.call(this,Bt.Ja,o),this.size=l}_(Ta,b);function zn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function qn(){this.g=!0}qn.prototype.ua=function(){this.g=!1};function rf(o,l,h,m,E,S){o.info(function(){if(o.g)if(S){var k="",G=S.split("&");for(let ee=0;ee<G.length;ee++){var me=G[ee].split("=");if(me.length>1){const ye=me[0];me=me[1];const Xe=ye.split("_");k=Xe.length>=2&&Xe[1]=="type"?k+(ye+"="+me+"&"):k+(ye+"=redacted&")}}}else k=null;else k=S;return"XMLHTTP REQ ("+m+") [attempt "+E+"]: "+l+`
`+h+`
`+k})}function sf(o,l,h,m,E,S,k){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+E+"]: "+l+`
`+h+`
`+S+" "+k})}function hn(o,l,h,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+af(o,h)+(m?" "+m:"")})}function of(o,l){o.info(function(){return"TIMEOUT: "+l})}qn.prototype.info=function(){};function af(o,l){if(!o.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var h=S[o];if(!(h.length<2)){var m=h[1];if(Array.isArray(m)&&!(m.length<1)){var E=m[0];if(E!="noop"&&E!="stop"&&E!="close")for(let k=1;k<m.length;k++)m[k]=""}}}}return ss(S)}catch{return l}}var Or={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ea={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},xa;function cs(){}_(cs,_a),cs.prototype.g=function(){return new XMLHttpRequest},xa=new cs;function $n(o){return encodeURIComponent(String(o))}function cf(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function yt(o,l,h,m){this.j=o,this.i=l,this.l=h,this.S=m||1,this.V=new Un(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Sa}function Sa(){this.i=null,this.g="",this.h=!1}var Aa={},ls={};function us(o,l,h){o.M=1,o.A=Lr(Je(l)),o.u=h,o.R=!0,Ra(o,null)}function Ra(o,l){o.F=Date.now(),Mr(o),o.B=Je(o.A);var h=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),Ba(h.i,"t",m),o.C=0,h=o.j.L,o.h=new Sa,o.g=sc(o.j,h?l:null,!o.u),o.P>0&&(o.O=new ef(f(o.Y,o,o.g),o.P)),l=o.V,h=o.g,m=o.ba;var E="readystatechange";Array.isArray(E)||(E&&(ga[0]=E.toString()),E=ga);for(let S=0;S<E.length;S++){const k=ha(h,E[S],m||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.J?F(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),Wn(),rf(o.i,o.v,o.B,o.l,o.S,o.u)}yt.prototype.ba=function(o){o=o.target;const l=this.O;l&&bt(o)==3?l.j():this.Y(o)},yt.prototype.Y=function(o){try{if(o==this.g)e:{const G=bt(this.g),me=this.g.ya(),ee=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||Ka(this.g)))){this.K||G!=4||me==7||(me==8||ee<=0?Wn(3):Wn(2)),hs(this);var l=this.g.ca();this.X=l;var h=lf(this);if(this.o=l==200,sf(this.i,this.v,this.B,this.l,this.S,G,l),this.o){if(this.U&&!this.L){t:{if(this.g){var m,E=this.g;if((m=E.g?E.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(m)){var S=m;break t}}S=null}if(o=S)hn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ds(this,o);else{this.o=!1,this.m=3,Ne(12),Wt(this),Gn(this);break e}}if(this.R){o=!0;let ye;for(;!this.K&&this.C<h.length;)if(ye=uf(this,h),ye==ls){G==4&&(this.m=4,Ne(14),o=!1),hn(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==Aa){this.m=4,Ne(15),hn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else hn(this.i,this.l,ye,null),ds(this,ye);if(Ca(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||h.length!=0||this.h.h||(this.m=1,Ne(16),o=!1),this.o=this.o&&o,!o)hn(this.i,this.l,h,"[Invalid Chunked Response]"),Wt(this),Gn(this);else if(h.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),bs(k),k.P=!0,Ne(11))}}else hn(this.i,this.l,h,null),ds(this,h);G==4&&Wt(this),this.o&&!this.K&&(G==4?tc(this.j,this):(this.o=!1,Mr(this)))}else Ef(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ne(12)):(this.m=0,Ne(13)),Wt(this),Gn(this)}}}catch{}finally{}};function lf(o){if(!Ca(o))return o.g.la();const l=Ka(o.g);if(l==="")return"";let h="";const m=l.length,E=bt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Wt(o),Gn(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<m;S++)o.h.h=!0,h+=o.h.i.decode(l[S],{stream:!(E&&S==m-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function Ca(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function uf(o,l){var h=o.C,m=l.indexOf(`
`,h);return m==-1?ls:(h=Number(l.substring(h,m)),isNaN(h)?Aa:(m+=1,m+h>l.length?ls:(l=l.slice(m,m+h),o.C=m+h,l)))}yt.prototype.cancel=function(){this.K=!0,Wt(this)};function Mr(o){o.T=Date.now()+o.H,ka(o,o.H)}function ka(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=zn(f(o.aa,o),l)}function hs(o){o.D&&(a.clearTimeout(o.D),o.D=null)}yt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(of(this.i,this.B),this.M!=2&&(Wn(),Ne(17)),Wt(this),this.m=2,Gn(this)):ka(this,this.T-o)};function Gn(o){o.j.I==0||o.K||tc(o.j,o)}function Wt(o){hs(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,ya(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function ds(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||fs(h.h,o))){if(!o.L&&fs(h.h,o)&&h.I==3){try{var m=h.Ba.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var E=m;if(E[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)zr(h),Br(h);else break e;vs(h),Ne(18)}}else h.xa=E[1],0<h.xa-h.K&&E[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=zn(f(h.Va,h),6e3));Da(h.h)<=1&&h.ta&&(h.ta=void 0)}else qt(h,11)}else if((o.L||h.g==o)&&zr(h),!g(l))for(E=h.Ba.g.parse(l),l=0;l<E.length;l++){let ee=E[l];const ye=ee[0];if(!(ye<=h.K))if(h.K=ye,ee=ee[1],h.I==2)if(ee[0]=="c"){h.M=ee[1],h.ba=ee[2];const Xe=ee[3];Xe!=null&&(h.ka=Xe,h.j.info("VER="+h.ka));const $t=ee[4];$t!=null&&(h.za=$t,h.j.info("SVER="+h.za));const wt=ee[5];wt!=null&&typeof wt=="number"&&wt>0&&(m=1.5*wt,h.O=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const It=o.g;if(It){const $r=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($r){var S=m.h;S.g||$r.indexOf("spdy")==-1&&$r.indexOf("quic")==-1&&$r.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ms(S,S.h),S.h=null))}if(m.G){const ws=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;ws&&(m.wa=ws,ne(m.J,m.G,ws))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),m=h;var k=o;if(m.na=ic(m,m.L?m.ba:null,m.W),k.L){Va(m.h,k);var G=k,me=m.O;me&&(G.H=me),G.D&&(hs(G),Mr(G)),m.g=k}else Za(m);h.i.length>0&&Wr(h)}else ee[0]!="stop"&&ee[0]!="close"||qt(h,7);else h.I==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?qt(h,7):_s(h):ee[0]!="noop"&&h.l&&h.l.qa(ee),h.A=0)}}Wn(4)}catch{}}var hf=class{constructor(o,l){this.g=o,this.map=l}};function Pa(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Na(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Da(o){return o.h?1:o.g?o.g.size:0}function fs(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ms(o,l){o.g?o.g.add(l):o.h=l}function Va(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Pa.prototype.cancel=function(){if(this.i=ja(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ja(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return C(o.i)}var Oa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function df(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const m=o[h].indexOf("=");let E,S=null;m>=0?(E=o[h].substring(0,m),S=o[h].substring(m+1)):E=o[h],l(E,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function _t(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof _t?(this.l=o.l,Hn(this,o.j),this.o=o.o,this.g=o.g,Kn(this,o.u),this.h=o.h,ps(this,Wa(o.i)),this.m=o.m):o&&(l=String(o).match(Oa))?(this.l=!1,Hn(this,l[1]||"",!0),this.o=Qn(l[2]||""),this.g=Qn(l[3]||"",!0),Kn(this,l[4]),this.h=Qn(l[5]||"",!0),ps(this,l[6]||"",!0),this.m=Qn(l[7]||"")):(this.l=!1,this.i=new Jn(null,this.l))}_t.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Yn(l,Ma,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Yn(l,Ma,!0),"@"),o.push($n(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Yn(h,h.charAt(0)=="/"?pf:mf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Yn(h,yf)),o.join("")},_t.prototype.resolve=function(o){const l=Je(this);let h=!!o.j;h?Hn(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var m=o.h;if(h)Kn(l,o.u);else if(h=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var E=l.h.lastIndexOf("/");E!=-1&&(m=l.h.slice(0,E+1)+m)}if(E=m,E==".."||E==".")m="";else if(E.indexOf("./")!=-1||E.indexOf("/.")!=-1){m=E.lastIndexOf("/",0)==0,E=E.split("/");const S=[];for(let k=0;k<E.length;){const G=E[k++];G=="."?m&&k==E.length&&S.push(""):G==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),m&&k==E.length&&S.push("")):(S.push(G),m=!0)}m=S.join("/")}else m=E}return h?l.h=m:h=o.i.toString()!=="",h?ps(l,Wa(o.i)):h=!!o.m,h&&(l.m=o.m),l};function Je(o){return new _t(o)}function Hn(o,l,h){o.j=h?Qn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Kn(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function ps(o,l,h){l instanceof Jn?(o.i=l,_f(o.i,o.l)):(h||(l=Yn(l,gf)),o.i=new Jn(l,o.l))}function ne(o,l,h){o.i.set(l,h)}function Lr(o){return ne(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Qn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Yn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,ff),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ff(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ma=/[#\/\?@]/g,mf=/[#\?:]/g,pf=/[#\?]/g,gf=/[#\?@]/g,yf=/#/g;function Jn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function zt(o){o.g||(o.g=new Map,o.h=0,o.i&&df(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Jn.prototype,n.add=function(o,l){zt(this),this.i=null,o=dn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function La(o,l){zt(o),l=dn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Fa(o,l){return zt(o),l=dn(o,l),o.g.has(l)}n.forEach=function(o,l){zt(this),this.g.forEach(function(h,m){h.forEach(function(E){o.call(l,E,m,this)},this)},this)};function Ua(o,l){zt(o);let h=[];if(typeof l=="string")Fa(o,l)&&(h=h.concat(o.g.get(dn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return zt(this),this.i=null,o=dn(this,o),Fa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Ua(this,o),o.length>0?String(o[0]):l):l};function Ba(o,l,h){La(o,l),h.length>0&&(o.i=null,o.g.set(dn(o,l),C(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let m=0;m<l.length;m++){var h=l[m];const E=$n(h);h=Ua(this,h);for(let S=0;S<h.length;S++){let k=E;h[S]!==""&&(k+="="+$n(h[S])),o.push(k)}}return this.i=o.join("&")};function Wa(o){const l=new Jn;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function dn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function _f(o,l){l&&!o.j&&(zt(o),o.i=null,o.g.forEach(function(h,m){const E=m.toLowerCase();m!=E&&(La(this,m),Ba(this,E,h))},o)),o.j=l}function vf(o,l){const h=new qn;if(a.Image){const m=new Image;m.onload=p(vt,h,"TestLoadImage: loaded",!0,l,m),m.onerror=p(vt,h,"TestLoadImage: error",!1,l,m),m.onabort=p(vt,h,"TestLoadImage: abort",!1,l,m),m.ontimeout=p(vt,h,"TestLoadImage: timeout",!1,l,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function bf(o,l){const h=new qn,m=new AbortController,E=setTimeout(()=>{m.abort(),vt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(S=>{clearTimeout(E),S.ok?vt(h,"TestPingServer: ok",!0,l):vt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(E),vt(h,"TestPingServer: error",!1,l)})}function vt(o,l,h,m,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),m(h)}catch{}}function wf(){this.g=new nf}function gs(o){this.i=o.Sb||null,this.h=o.ab||!1}_(gs,_a),gs.prototype.g=function(){return new Fr(this.i,this.h)};function Fr(o,l){xe.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}_(Fr,xe),n=Fr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,Zn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xn(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;za(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function za(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Xn(this):Zn(this),this.readyState==3&&za(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Xn(this))},n.Na=function(o){this.g&&(this.response=o,Xn(this))},n.ga=function(){this.g&&Xn(this)};function Xn(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Zn(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Zn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function qa(o){let l="";return Fe(o,function(h,m){l+=m,l+=":",l+=h,l+=`\r
`}),l}function ys(o,l,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=qa(h),typeof o=="string"?h!=null&&$n(h):ne(o,l,h))}function oe(o){xe.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}_(oe,xe);var If=/^https?$/i,Tf=["POST","PUT"];n=oe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():xa.g(),this.g.onreadystatechange=x(f(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){$a(this,S);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var E in m)h.set(E,m[E]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())h.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),E=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Tf,l,void 0)>=0)||m||E||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of h)this.g.setRequestHeader(S,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){$a(this,S)}};function $a(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Ga(o),Ur(o)}function Ga(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Pe(this,"complete"),Pe(this,"abort"),Ur(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ur(this,!0)),oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ha(this):this.Xa())},n.Xa=function(){Ha(this)};function Ha(o){if(o.h&&typeof s<"u"){if(o.v&&bt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Pe(o,"readystatechange"),bt(o)==4){o.h=!1;try{const S=o.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var m;if(m=S===0){let k=String(o.D).match(Oa)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),m=!If.test(k?k.toLowerCase():"")}h=m}if(h)Pe(o,"complete"),Pe(o,"success");else{o.o=6;try{var E=bt(o)>2?o.g.statusText:""}catch{E=""}o.l=E+" ["+o.ca()+"]",Ga(o)}}finally{Ur(o)}}}}function Ur(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||Pe(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function bt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return bt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),tf(l)}};function Ka(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ef(o){const l={};o=(o.g&&bt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(g(o[m]))continue;var h=cf(o[m]);const E=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[E]||[];l[E]=S,S.push(h)}gt(l,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function er(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Qa(o){this.za=0,this.i=[],this.j=new qn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=er("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=er("baseRetryDelayMs",5e3,o),this.Za=er("retryDelaySeedMs",1e4,o),this.Ta=er("forwardChannelMaxRetries",2,o),this.va=er("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Pa(o&&o.concurrentRequestLimit),this.Ba=new wf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Qa.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,m){Ne(0),this.W=o,this.H=l||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.J=ic(this,null,this.W),Wr(this)};function _s(o){if(Ya(o),o.I==3){var l=o.V++,h=Je(o.J);if(ne(h,"SID",o.M),ne(h,"RID",l),ne(h,"TYPE","terminate"),tr(o,h),l=new yt(o,o.j,l),l.M=2,l.A=Lr(Je(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=sc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Mr(l)}rc(o)}function Br(o){o.g&&(bs(o),o.g.cancel(),o.g=null)}function Ya(o){Br(o),o.v&&(a.clearTimeout(o.v),o.v=null),zr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Wr(o){if(!Na(o.h)&&!o.m){o.m=!0;var l=o.Ea;Z||y(),ie||(Z(),ie=!0),w.add(l,o),o.D=0}}function xf(o,l){return Da(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=zn(f(o.Ea,o,l),nc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const E=new yt(this,this.j,o);let S=this.o;if(this.U&&(S?(S=F(S),be(S,this.U)):S=this.U),this.u!==null||this.R||(E.J=S,S=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Xa(this,E,l),h=Je(this.J),ne(h,"RID",o),ne(h,"CVER",22),this.G&&ne(h,"X-HTTP-Session-Id",this.G),tr(this,h),S&&(this.R?l="headers="+$n(qa(S))+"&"+l:this.u&&ys(h,this.u,S)),ms(this.h,E),this.Ra&&ne(h,"TYPE","init"),this.S?(ne(h,"$req",l),ne(h,"SID","null"),E.U=!0,us(E,h,null)):us(E,h,l),this.I=2}}else this.I==3&&(o?Ja(this,o):this.i.length==0||Na(this.h)||Ja(this))};function Ja(o,l){var h;l?h=l.l:h=o.V++;const m=Je(o.J);ne(m,"SID",o.M),ne(m,"RID",h),ne(m,"AID",o.K),tr(o,m),o.u&&o.o&&ys(m,o.u,o.o),h=new yt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Xa(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ms(o.h,h),us(h,m,l)}function tr(o,l){o.H&&Fe(o.H,function(h,m){ne(l,m,h)}),o.l&&Fe({},function(h,m){ne(l,m,h)})}function Xa(o,l,h){h=Math.min(o.i.length,h);const m=o.l?f(o.l.Ka,o.l,o):null;e:{var E=o.i;let G=-1;for(;;){const me=["count="+h];G==-1?h>0?(G=E[0].g,me.push("ofs="+G)):G=0:me.push("ofs="+G);let ee=!0;for(let ye=0;ye<h;ye++){var S=E[ye].g;const Xe=E[ye].map;if(S-=G,S<0)G=Math.max(0,E[ye].g-100),ee=!1;else try{S="req"+S+"_"||"";try{var k=Xe instanceof Map?Xe:Object.entries(Xe);for(const[$t,wt]of k){let It=wt;u(wt)&&(It=ss(wt)),me.push(S+$t+"="+encodeURIComponent(It))}}catch($t){throw me.push(S+"type="+encodeURIComponent("_badmap")),$t}}catch{m&&m(Xe)}}if(ee){k=me.join("&");break e}}k=void 0}return o=o.i.splice(0,h),l.G=o,k}function Za(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;Z||y(),ie||(Z(),ie=!0),w.add(l,o),o.A=0}}function vs(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=zn(f(o.Da,o),nc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,ec(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=zn(f(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ne(10),Br(this),ec(this))};function bs(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function ec(o){o.g=new yt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=Je(o.na);ne(l,"RID","rpc"),ne(l,"SID",o.M),ne(l,"AID",o.K),ne(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&ne(l,"TO",o.ia),ne(l,"TYPE","xmlhttp"),tr(o,l),o.u&&o.o&&ys(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Lr(Je(l)),h.u=null,h.R=!0,Ra(h,o)}n.Va=function(){this.C!=null&&(this.C=null,Br(this),vs(this),Ne(19))};function zr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function tc(o,l){var h=null;if(o.g==l){zr(o),bs(o),o.g=null;var m=2}else if(fs(o.h,l))h=l.G,Va(o.h,l),m=1;else return;if(o.I!=0){if(l.o)if(m==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var E=o.D;m=jr(),Pe(m,new Ta(m,h)),Wr(o)}else Za(o);else if(E=l.m,E==3||E==0&&l.X>0||!(m==1&&xf(o,l)||m==2&&vs(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),E){case 1:qt(o,5);break;case 4:qt(o,10);break;case 3:qt(o,6);break;default:qt(o,2)}}}function nc(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function qt(o,l){if(o.j.info("Error code "+l),l==2){var h=f(o.bb,o),m=o.Ua;const E=!m;m=new _t(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Hn(m,"https"),Lr(m),E?vf(m.toString(),h):bf(m.toString(),h)}else Ne(2);o.I=0,o.l&&o.l.pa(l),rc(o),Ya(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function rc(o){if(o.I=0,o.ja=[],o.l){const l=ja(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ja,l),P(o.ja,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.oa()}}function ic(o,l,h){var m=h instanceof _t?Je(h):new _t(h);if(m.g!="")l&&(m.g=l+"."+m.g),Kn(m,m.u);else{var E=a.location;m=E.protocol,l=l?l+"."+E.hostname:E.hostname,E=+E.port;const S=new _t(null);m&&Hn(S,m),l&&(S.g=l),E&&Kn(S,E),h&&(S.h=h),m=S}return h=o.G,l=o.wa,h&&l&&ne(m,h,l),ne(m,"VER",o.ka),tr(o,m),m}function sc(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new oe(new gs({ab:h})):new oe(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function oc(){}n=oc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function qr(){}qr.prototype.g=function(o,l){return new je(o,l)};function je(o,l){xe.call(this),this.g=new Qa(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!g(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!g(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new fn(this)}_(je,xe),je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},je.prototype.close=function(){_s(this.g)},je.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=ss(o),o=h);l.i.push(new hf(l.Ya++,o)),l.I==3&&Wr(l)},je.prototype.N=function(){this.g.l=null,delete this.j,_s(this.g),delete this.g,je.Z.N.call(this)};function ac(o){os.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}_(ac,os);function cc(){as.call(this),this.status=1}_(cc,as);function fn(o){this.g=o}_(fn,oc),fn.prototype.ra=function(){Pe(this.g,"a")},fn.prototype.qa=function(o){Pe(this.g,new ac(o))},fn.prototype.pa=function(o){Pe(this.g,new cc)},fn.prototype.oa=function(){Pe(this.g,"b")},qr.prototype.createWebChannel=qr.prototype.g,je.prototype.send=je.prototype.o,je.prototype.open=je.prototype.m,je.prototype.close=je.prototype.close,Su=function(){return new qr},xu=function(){return jr()},Eu=Bt,zs={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Or.NO_ERROR=0,Or.TIMEOUT=8,Or.HTTP_ERROR=6,Xr=Or,Ea.COMPLETE="complete",Tu=Ea,va.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",xe.prototype.listen=xe.prototype.J,ir=va,oe.prototype.listenOnce=oe.prototype.K,oe.prototype.getLastError=oe.prototype.Ha,oe.prototype.getLastErrorCode=oe.prototype.ya,oe.prototype.getStatus=oe.prototype.ca,oe.prototype.getResponseJson=oe.prototype.La,oe.prototype.getResponseText=oe.prototype.la,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Fa,Iu=oe}).apply(typeof Gr<"u"?Gr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Vn="12.12.0";function vp(n){Vn=n}/**
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
 */const Xt=new Di("@firebase/firestore");function mn(){return Xt.logLevel}function j(n,...e){if(Xt.logLevel<=H.DEBUG){const t=e.map(fo);Xt.debug(`Firestore (${Vn}): ${n}`,...t)}}function dt(n,...e){if(Xt.logLevel<=H.ERROR){const t=e.map(fo);Xt.error(`Firestore (${Vn}): ${n}`,...t)}}function Zt(n,...e){if(Xt.logLevel<=H.WARN){const t=e.map(fo);Xt.warn(`Firestore (${Vn}): ${n}`,...t)}}function fo(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function L(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Au(n,r,t)}function Au(n,e,t){let r=`FIRESTORE (${Vn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw dt(r),new Error(r)}function X(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Au(e,i,r)}function W(n,e){return n}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Qe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ru{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ae.UNAUTHENTICATED))}shutdown(){}}class wp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ip{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,t(d)):Promise.resolve();let s=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const d=s;e.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},u=d=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>u(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?u(d):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Ru(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Ae(e)}}class Tp{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Ep{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Tp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,et(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Tc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Tc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Sp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class mo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Sp(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function K(n,e){return n<e?-1:n>e?1:0}function qs(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return As(i)===As(s)?K(i,s):As(i)?1:-1}return K(n.length,e.length)}const Ap=55296,Rp=57343;function As(n){const e=n.charCodeAt(0);return e>=Ap&&e<=Rp}function An(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const Ec="__name__";class Ze{constructor(e,t,r){t===void 0?t=0:t>e.length&&L(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&L(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ze?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Ze.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return K(e.length,t.length)}static compareSegments(e,t){const r=Ze.isNumericId(e),i=Ze.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ze.extractNumericId(e).compare(Ze.extractNumericId(t)):qs(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pt.fromString(e.substring(4,e.length-2))}}class te extends Ze{construct(e,t,r){return new te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new te(t)}static emptyPath(){return new te([])}}const Cp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends Ze{construct(e,t,r){return new Ie(e,t,r)}static isValidIdentifier(e){return Cp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ec}static keyField(){return new Ie([Ec])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new V(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new V(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new V(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(t)}static emptyPath(){return new Ie([])}}/**
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
 */function Cu(n,e,t){if(!t)throw new V(A.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function kp(n,e,t,r){if(e===!0&&r===!0)throw new V(A.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function xc(n){if(!M.isDocumentKey(n))throw new V(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sc(n){if(M.isDocumentKey(n))throw new V(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ku(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Vi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function cr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vi(n);throw new V(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function de(n,e){const t={typeString:n};return e&&(t.value=e),t}function Sr(n,e){if(!ku(n))throw new V(A.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new V(A.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ac=-62135596800,Rc=1e6;class re{static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Rc);return new re(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ac)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rc}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sr(e,re._jsonSchema))return new re(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ac;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}re._jsonSchemaVersion="firestore/timestamp/1.0",re._jsonSchema={type:de("string",re._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};/**
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
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new re(0,0))}static max(){return new B(new re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pr=-1;function Pp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new re(t+1,0):new re(t,r));return new Vt(i,M.empty(),e)}function Np(n){return new Vt(n.readTime,n.key,pr)}class Vt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Vt(B.min(),M.empty(),pr)}static max(){return new Vt(B.max(),M.empty(),pr)}}function Dp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
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
 */const Vp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function jn(n){if(n.code!==A.FAILED_PRECONDITION||n.message!==Vp)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},d=>r(d))}),a=!0,s===i&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(i=>i?R.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new R((r,i)=>{const s=e.length,a=new Array(s);let u=0;for(let d=0;d<s;d++){const f=d;t(e[f]).next(p=>{a[f]=p,++u,u===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new R((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Op(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function On(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ji{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ji.ce=-1;/**
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
 */const po=-1;function Oi(n){return n==null}function ui(n){return n===0&&1/n==-1/0}function Mp(n){return typeof n=="number"&&Number.isInteger(n)&&!ui(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Pu="";function Lp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Cc(e)),e=Fp(n.get(t),e);return Cc(e)}function Fp(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Pu:t+="";break;default:t+=s}}return t}function Cc(n){return n+Pu+""}/**
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
 */function kc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function an(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Nu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class se{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hr(this.root,e,this.comparator,!0)}}class Hr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??we.RED,this.left=i??we.EMPTY,this.right=s??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new we(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return we.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw L(27949);return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pc(this.data.getIterator())}getIteratorFrom(e){return new Pc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class Pc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Du("Invalid base64 string: "+s):s}}(e);return new Te(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const Up=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=Up.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ot(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */const Vu="server_timestamp",ju="__type__",Ou="__previous_value__",Mu="__local_write_time__";function go(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[ju])==null?void 0:r.stringValue)===Vu}function Mi(n){const e=n.mapValue.fields[Ou];return go(e)?Mi(e):e}function gr(n){const e=jt(n.mapValue.fields[Mu].timestampValue);return new re(e.seconds,e.nanos)}/**
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
 */class Bp{constructor(e,t,r,i,s,a,u,d,f,p,_){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=p,this.apiKey=_}}const hi="(default)";class yr{constructor(e,t){this.projectId=e,this.database=t||hi}static empty(){return new yr("","")}get isDefaultDatabase(){return this.database===hi}isEqual(e){return e instanceof yr&&e.projectId===this.projectId&&e.database===this.database}}function Wp(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new V(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yr(n.options.projectId,e)}/**
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
 */const Lu="__type__",zp="__max__",Kr={mapValue:{}},Fu="__vector__",di="value";function Mt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?go(n)?4:$p(n)?9007199254740991:qp(n)?10:11:L(28295,{value:n})}function at(n,e){if(n===e)return!0;const t=Mt(n);if(t!==Mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gr(n).isEqual(gr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=jt(i.timestampValue),u=jt(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ot(i.bytesValue).isEqual(Ot(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return le(i.geoPointValue.latitude)===le(s.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return le(i.integerValue)===le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=le(i.doubleValue),u=le(s.doubleValue);return a===u?ui(a)===ui(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return An(n.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(kc(a)!==kc(u))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(u[d]===void 0||!at(a[d],u[d])))return!1;return!0}(n,e);default:return L(52216,{left:n})}}function _r(n,e){return(n.values||[]).find(t=>at(t,e))!==void 0}function Rn(n,e){if(n===e)return 0;const t=Mt(n),r=Mt(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(s,a){const u=le(s.integerValue||s.doubleValue),d=le(a.integerValue||a.doubleValue);return u<d?-1:u>d?1:u===d?0:isNaN(u)?isNaN(d)?0:-1:1}(n,e);case 3:return Nc(n.timestampValue,e.timestampValue);case 4:return Nc(gr(n),gr(e));case 5:return qs(n.stringValue,e.stringValue);case 6:return function(s,a){const u=Ot(s),d=Ot(a);return u.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const u=s.split("/"),d=a.split("/");for(let f=0;f<u.length&&f<d.length;f++){const p=K(u[f],d[f]);if(p!==0)return p}return K(u.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const u=K(le(s.latitude),le(a.latitude));return u!==0?u:K(le(s.longitude),le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Dc(n.arrayValue,e.arrayValue);case 10:return function(s,a){var x,C,P,D;const u=s.fields||{},d=a.fields||{},f=(x=u[di])==null?void 0:x.arrayValue,p=(C=d[di])==null?void 0:C.arrayValue,_=K(((P=f==null?void 0:f.values)==null?void 0:P.length)||0,((D=p==null?void 0:p.values)==null?void 0:D.length)||0);return _!==0?_:Dc(f,p)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Kr.mapValue&&a===Kr.mapValue)return 0;if(s===Kr.mapValue)return 1;if(a===Kr.mapValue)return-1;const u=s.fields||{},d=Object.keys(u),f=a.fields||{},p=Object.keys(f);d.sort(),p.sort();for(let _=0;_<d.length&&_<p.length;++_){const x=qs(d[_],p[_]);if(x!==0)return x;const C=Rn(u[d[_]],f[p[_]]);if(C!==0)return C}return K(d.length,p.length)}(n.mapValue,e.mapValue);default:throw L(23264,{he:t})}}function Nc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=jt(n),r=jt(e),i=K(t.seconds,r.seconds);return i!==0?i:K(t.nanos,r.nanos)}function Dc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Rn(t[i],r[i]);if(s)return s}return K(t.length,r.length)}function Cn(n){return $s(n)}function $s(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=jt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ot(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=$s(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${$s(t.fields[a])}`;return i+"}"}(n.mapValue):L(61005,{value:n})}function Zr(n){switch(Mt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mi(n);return e?16+Zr(e):16;case 5:return 2*n.stringValue.length;case 6:return Ot(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Zr(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return an(r.fields,(s,a)=>{i+=s.length+Zr(a)}),i}(n.mapValue);default:throw L(13486,{value:n})}}function Vc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Gs(n){return!!n&&"integerValue"in n}function yo(n){return!!n&&"arrayValue"in n}function jc(n){return!!n&&"nullValue"in n}function Oc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ei(n){return!!n&&"mapValue"in n}function qp(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Lu])==null?void 0:r.stringValue)===Fu}function lr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return an(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=lr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=lr(n.arrayValue.values[t]);return e}return{...n}}function $p(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===zp}/**
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
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ei(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=lr(t)}setAll(e){let t=Ie.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const d=this.getFieldsMap(t);this.applyChanges(d,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=lr(a):i.push(u.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ei(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ei(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){an(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ue(lr(this.value))}}function Uu(n){const e=[];return an(n.fields,(t,r)=>{const i=new Ie([t]);if(ei(r)){const s=Uu(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new qe(e)}/**
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
 */class Re{constructor(e,t,r,i,s,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Re(e,0,B.min(),B.min(),B.min(),Ue.empty(),0)}static newFoundDocument(e,t,r,i){return new Re(e,1,t,B.min(),r,i,0)}static newNoDocument(e,t){return new Re(e,2,t,B.min(),B.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,B.min(),B.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fi{constructor(e,t){this.position=e,this.inclusive=t}}function Mc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=Rn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!at(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class vr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Gp(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Bu{}class he extends Bu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Kp(e,t,r):t==="array-contains"?new Jp(e,r):t==="in"?new Xp(e,r):t==="not-in"?new Zp(e,r):t==="array-contains-any"?new eg(e,r):new he(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Qp(e,r):new Yp(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Rn(t,this.value)):t!==null&&Mt(this.value)===Mt(t)&&this.matchesComparison(Rn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ke extends Bu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ke(e,t)}matches(e){return Wu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Wu(n){return n.op==="and"}function zu(n){return Hp(n)&&Wu(n)}function Hp(n){for(const e of n.filters)if(e instanceof Ke)return!1;return!0}function Hs(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+Cn(n.value);if(zu(n))return n.filters.map(e=>Hs(e)).join(",");{const e=n.filters.map(t=>Hs(t)).join(",");return`${n.op}(${e})`}}function qu(n,e){return n instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.field.isEqual(i.field)&&at(r.value,i.value)}(n,e):n instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,u)=>s&&qu(a,i.filters[u]),!0):!1}(n,e):void L(19439)}function $u(n){return n instanceof he?function(t){return`${t.field.canonicalString()} ${t.op} ${Cn(t.value)}`}(n):n instanceof Ke?function(t){return t.op.toString()+" {"+t.getFilters().map($u).join(" ,")+"}"}(n):"Filter"}class Kp extends he{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Qp extends he{constructor(e,t){super(e,"in",t),this.keys=Gu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Yp extends he{constructor(e,t){super(e,"not-in",t),this.keys=Gu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Gu(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Jp extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yo(t)&&_r(t.arrayValue,this.value)}}class Xp extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_r(this.value.arrayValue,t)}}class Zp extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(_r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!_r(this.value.arrayValue,t)}}class eg extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>_r(this.value.arrayValue,r))}}/**
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
 */class tg{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.Te=null}}function Fc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new tg(n,e,t,r,i,s,a)}function _o(n){const e=W(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Hs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Cn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Cn(r)).join(",")),e.Te=t}return e.Te}function vo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Gp(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Lc(n.startAt,e.startAt)&&Lc(n.endAt,e.endAt)}function Ks(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Mn{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=d,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function ng(n,e,t,r,i,s,a,u){return new Mn(n,e,t,r,i,s,a,u)}function bo(n){return new Mn(n)}function Uc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rg(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Hu(n){return n.collectionGroup!==null}function ur(n){const e=W(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ge(Ie.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new vr(s,r))}),t.has(Ie.keyField().canonicalString())||e.Ee.push(new vr(Ie.keyField(),r))}return e.Ee}function tt(n){const e=W(n);return e.Ie||(e.Ie=ig(e,ur(n))),e.Ie}function ig(n,e){if(n.limitType==="F")return Fc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new vr(i.field,s)});const t=n.endAt?new fi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fi(n.startAt.position,n.startAt.inclusive):null;return Fc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Qs(n,e){const t=n.filters.concat([e]);return new Mn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function sg(n,e){const t=n.explicitOrderBy.concat([e]);return new Mn(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function mi(n,e,t){return new Mn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Li(n,e){return vo(tt(n),tt(e))&&n.limitType===e.limitType}function Ku(n){return`${_o(tt(n))}|lt:${n.limitType}`}function pn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>$u(i)).join(", ")}]`),Oi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Cn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Cn(i)).join(",")),`Target(${r})`}(tt(n))}; limitType=${n.limitType})`}function Fi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):M.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ur(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,d){const f=Mc(a,u,d);return a.inclusive?f<=0:f<0}(r.startAt,ur(r),i)||r.endAt&&!function(a,u,d){const f=Mc(a,u,d);return a.inclusive?f>=0:f>0}(r.endAt,ur(r),i))}(n,e)}function og(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qu(n){return(e,t)=>{let r=!1;for(const i of ur(n)){const s=ag(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ag(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(s,a,u){const d=a.data.field(s),f=u.data.field(s);return d!==null&&f!==null?Rn(d,f):L(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
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
 */class cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){an(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Nu(this.inner)}size(){return this.innerSize}}/**
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
 */const cg=new se(M.comparator);function ft(){return cg}const Yu=new se(M.comparator);function sr(...n){let e=Yu;for(const t of n)e=e.insert(t.key,t);return e}function Ju(n){let e=Yu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ht(){return hr()}function Xu(){return hr()}function hr(){return new cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const lg=new se(M.comparator),ug=new ge(M.comparator);function Q(...n){let e=ug;for(const t of n)e=e.add(t);return e}const hg=new ge(K);function dg(){return hg}/**
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
 */function wo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(e)?"-0":e}}function Zu(n){return{integerValue:""+n}}function fg(n,e){return Mp(e)?Zu(e):wo(n,e)}/**
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
 */class Ui{constructor(){this._=void 0}}function mg(n,e,t){return n instanceof br?function(i,s){const a={fields:{[ju]:{stringValue:Vu},[Mu]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&go(s)&&(s=Mi(s)),s&&(a.fields[Ou]=s),{mapValue:a}}(t,e):n instanceof wr?th(n,e):n instanceof Ir?nh(n,e):function(i,s){const a=eh(i,s),u=Bc(a)+Bc(i.Ae);return Gs(a)&&Gs(i.Ae)?Zu(u):wo(i.serializer,u)}(n,e)}function pg(n,e,t){return n instanceof wr?th(n,e):n instanceof Ir?nh(n,e):t}function eh(n,e){return n instanceof pi?function(r){return Gs(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class br extends Ui{}class wr extends Ui{constructor(e){super(),this.elements=e}}function th(n,e){const t=rh(e);for(const r of n.elements)t.some(i=>at(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ir extends Ui{constructor(e){super(),this.elements=e}}function nh(n,e){let t=rh(e);for(const r of n.elements)t=t.filter(i=>!at(i,r));return{arrayValue:{values:t}}}class pi extends Ui{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Bc(n){return le(n.integerValue||n.doubleValue)}function rh(n){return yo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class gg{constructor(e,t){this.field=e,this.transform=t}}function yg(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof wr&&i instanceof wr||r instanceof Ir&&i instanceof Ir?An(r.elements,i.elements,at):r instanceof pi&&i instanceof pi?at(r.Ae,i.Ae):r instanceof br&&i instanceof br}(n.transform,e.transform)}class _g{constructor(e,t){this.version=e,this.transformResults=t}}class ut{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ut}static exists(e){return new ut(void 0,e)}static updateTime(e){return new ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ti(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bi{}function ih(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new oh(n.key,ut.none()):new Ar(n.key,n.data,ut.none());{const t=n.data,r=Ue.empty();let i=new ge(Ie.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new ln(n.key,r,new qe(i.toArray()),ut.none())}}function vg(n,e,t){n instanceof Ar?function(i,s,a){const u=i.value.clone(),d=zc(i.fieldTransforms,s,a.transformResults);u.setAll(d),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof ln?function(i,s,a){if(!ti(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=zc(i.fieldTransforms,s,a.transformResults),d=s.data;d.setAll(sh(i)),d.setAll(u),s.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function dr(n,e,t,r){return n instanceof Ar?function(s,a,u,d){if(!ti(s.precondition,a))return u;const f=s.value.clone(),p=qc(s.fieldTransforms,d,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof ln?function(s,a,u,d){if(!ti(s.precondition,a))return u;const f=qc(s.fieldTransforms,d,a),p=a.data;return p.setAll(sh(s)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(s,a,u){return ti(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function bg(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=eh(r.transform,i||null);s!=null&&(t===null&&(t=Ue.empty()),t.set(r.field,s))}return t||null}function Wc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&An(r,i,(s,a)=>yg(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ar extends Bi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ln extends Bi{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function zc(n,e,t){const r=new Map;X(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,pg(a,u,t[i]))}return r}function qc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,mg(s,a,e))}return r}class oh extends Bi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wg extends Bi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ig{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&vg(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=dr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=dr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Xu();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;const d=ih(a,u);d!==null&&r.set(i.key,d),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&An(this.mutations,e.mutations,(t,r)=>Wc(t,r))&&An(this.baseMutations,e.baseMutations,(t,r)=>Wc(t,r))}}class Io{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){X(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return lg}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Io(e,t,r,i)}}/**
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
 */class Tg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ue,Y;function xg(n){switch(n){case A.OK:return L(64938);case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function ah(n){if(n===void 0)return dt("GRPC error has no .code"),A.UNKNOWN;switch(n){case ue.OK:return A.OK;case ue.CANCELLED:return A.CANCELLED;case ue.UNKNOWN:return A.UNKNOWN;case ue.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case ue.INTERNAL:return A.INTERNAL;case ue.UNAVAILABLE:return A.UNAVAILABLE;case ue.UNAUTHENTICATED:return A.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case ue.NOT_FOUND:return A.NOT_FOUND;case ue.ALREADY_EXISTS:return A.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return A.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case ue.ABORTED:return A.ABORTED;case ue.OUT_OF_RANGE:return A.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return A.UNIMPLEMENTED;case ue.DATA_LOSS:return A.DATA_LOSS;default:return L(39323,{code:n})}}(Y=ue||(ue={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Sg(){return new TextEncoder}/**
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
 */const Ag=new Pt([4294967295,4294967295],0);function $c(n){const e=Sg().encode(n),t=new wu;return t.update(e),new Uint8Array(t.digest())}function Gc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Pt([t,r],0),new Pt([i,s],0)]}class To{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new or(`Invalid padding: ${t}`);if(r<0)throw new or(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new or(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new or(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Pt.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Pt.fromNumber(r)));return i.compare(Ag)===1&&(i=new Pt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=$c(e),[r,i]=Gc(t);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);if(!this.we(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new To(s,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.ge===0)return;const t=$c(e),[r,i]=Gc(t);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wi{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Rr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Wi(B.min(),i,new se(K),ft(),Q())}}class Rr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Rr(r,t,Q(),Q(),Q())}}/**
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
 */class ni{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class ch{constructor(e,t){this.targetId=e,this.Ce=t}}class lh{constructor(e,t,r=Te.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Hc{constructor(){this.ve=0,this.Fe=Kc(),this.Me=Te.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Q(),t=Q(),r=Q();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:L(38017,{changeType:s})}}),new Rr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Kc()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Rg{constructor(e){this.Ge=e,this.ze=new Map,this.je=ft(),this.Je=Qr(),this.He=Qr(),this.Ze=new se(K)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:L(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,i)=>{this.rt(i)&&t(i)})}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(Ks(s))if(r===0){const a=new M(s.path);this.et(t,a,Re.newNoDocument(a,B.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const u=this.ut(e),d=u?this.ct(u,e,a):1;if(d!==0){this.it(t);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,f)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,u;try{a=Ot(r).toUint8Array()}catch(d){if(d instanceof Du)return Zt("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{u=new To(a,i,s)}catch(d){return Zt(d instanceof or?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return u.ge===0?null:u}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.et(t,s,null),i++)}),i}Tt(e){const t=new Map;this.ze.forEach((s,a)=>{const u=this.ot(a);if(u){if(s.current&&Ks(u.target)){const d=new M(u.target.path);this.Et(d).has(a)||this.It(a,d)||this.et(a,d,Re.newNoDocument(d,e))}s.Be&&(t.set(a,s.ke()),s.qe())}});let r=Q();this.He.forEach((s,a)=>{let u=!0;a.forEachWhile(d=>{const f=this.ot(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.je.forEach((s,a)=>a.setReadTime(e));const i=new Wi(e,t,this.Ze,this.je,r);return this.je=ft(),this.Je=Qr(),this.He=Qr(),this.Ze=new se(K),i}Ye(e,t){if(!this.rt(e))return;const r=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,t)?i.Ke(t,1):i.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Hc,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ge(K),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ge(K),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hc),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Qr(){return new se(M.comparator)}function Kc(){return new se(M.comparator)}const Cg={asc:"ASCENDING",desc:"DESCENDING"},kg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Pg={and:"AND",or:"OR"};class Ng{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ys(n,e){return n.useProto3Json||Oi(e)?e:{value:e}}function gi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Dg(n,e){return gi(n,e.toTimestamp())}function nt(n){return X(!!n,49232),B.fromTimestamp(function(t){const r=jt(t);return new re(r.seconds,r.nanos)}(n))}function Eo(n,e){return Js(n,e).canonicalString()}function Js(n,e){const t=function(i){return new te(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function hh(n){const e=te.fromString(n);return X(gh(e),10190,{key:e.toString()}),e}function Xs(n,e){return Eo(n.databaseId,e.path)}function Rs(n,e){const t=hh(e);if(t.get(1)!==n.databaseId.projectId)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(fh(t))}function dh(n,e){return Eo(n.databaseId,e)}function Vg(n){const e=hh(n);return e.length===4?te.emptyPath():fh(e)}function Zs(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fh(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Qc(n,e,t){return{name:Xs(n,e),fields:t.value.mapValue.fields}}function jg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L(39313,{state:f})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(f,p){return f.useProto3Json?(X(p===void 0||typeof p=="string",58123),Te.fromBase64String(p||"")):(X(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Te.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(f){const p=f.code===void 0?A.UNKNOWN:ah(f.code);return new V(p,f.message||"")}(a);t=new lh(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rs(n,r.document.name),s=nt(r.document.updateTime),a=r.document.createTime?nt(r.document.createTime):B.min(),u=new Ue({mapValue:{fields:r.document.fields}}),d=Re.newFoundDocument(i,s,a,u),f=r.targetIds||[],p=r.removedTargetIds||[];t=new ni(f,p,d.key,d)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rs(n,r.document),s=r.readTime?nt(r.readTime):B.min(),a=Re.newNoDocument(i,s),u=r.removedTargetIds||[];t=new ni([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rs(n,r.document),s=r.removedTargetIds||[];t=new ni([],s,i,null)}else{if(!("filter"in e))return L(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Eg(i,s),u=r.targetId;t=new ch(u,a)}}return t}function Og(n,e){let t;if(e instanceof Ar)t={update:Qc(n,e.key,e.value)};else if(e instanceof oh)t={delete:Xs(n,e.key)};else if(e instanceof ln)t={update:Qc(n,e.key,e.data),updateMask:$g(e.fieldMask)};else{if(!(e instanceof wg))return L(16599,{dt:e.type});t={verify:Xs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const u=a.transform;if(u instanceof br)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof wr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ir)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof pi)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw L(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Dg(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L(27497)}(n,e.precondition)),t}function Mg(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map(t=>function(i,s){let a=i.updateTime?nt(i.updateTime):nt(s);return a.isEqual(B.min())&&(a=nt(s)),new _g(a,i.transformResults||[])}(t,e))):[]}function Lg(n,e){return{documents:[dh(n,e.path)]}}function Fg(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=dh(n,i);const s=function(f){if(f.length!==0)return ph(Ke.create(f,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(f){if(f.length!==0)return f.map(p=>function(x){return{field:gn(x.field),direction:Wg(x.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Ys(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{ft:t,parent:i}}function Ug(n){let e=Vg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){X(r===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(_){const x=mh(_);return x instanceof Ke&&zu(x)?x.getFilters():[x]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(x=>function(P){return new vr(yn(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(x))}(t.orderBy));let u=null;t.limit&&(u=function(_){let x;return x=typeof _=="object"?_.value:_,Oi(x)?null:x}(t.limit));let d=null;t.startAt&&(d=function(_){const x=!!_.before,C=_.values||[];return new fi(C,x)}(t.startAt));let f=null;return t.endAt&&(f=function(_){const x=!_.before,C=_.values||[];return new fi(C,x)}(t.endAt)),ng(e,i,a,s,u,"F",d,f)}function Bg(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=yn(t.unaryFilter.field);return he.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=yn(t.unaryFilter.field);return he.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=yn(t.unaryFilter.field);return he.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=yn(t.unaryFilter.field);return he.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}}(n):n.fieldFilter!==void 0?function(t){return he.create(yn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ke.create(t.compositeFilter.filters.map(r=>mh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}}(t.compositeFilter.op))}(n):L(30097,{filter:n})}function Wg(n){return Cg[n]}function zg(n){return kg[n]}function qg(n){return Pg[n]}function gn(n){return{fieldPath:n.canonicalString()}}function yn(n){return Ie.fromServerFormat(n.fieldPath)}function ph(n){return n instanceof he?function(t){if(t.op==="=="){if(Oc(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NAN"}};if(jc(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Oc(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NAN"}};if(jc(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(t.field),op:zg(t.op),value:t.value}}}(n):n instanceof Ke?function(t){const r=t.getFilters().map(i=>ph(i));return r.length===1?r[0]:{compositeFilter:{op:qg(t.op),filters:r}}}(n):L(54877,{filter:n})}function $g(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function gh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function yh(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Rt{constructor(e,t,r,i,s=B.min(),a=B.min(),u=Te.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=d}withSequenceNumber(e){return new Rt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Gg{constructor(e){this.yt=e}}function Hg(n){const e=Ug({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mi(e,e.limit,"L"):e}/**
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
 */class Kg{constructor(){this.bn=new Qg}addToCollectionParentIndex(e,t){return this.bn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Vt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Qg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ge(te.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ge(te.comparator)).toArray()}}/**
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
 */const Yc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_h=41943040;class Ve{static withCacheSize(e){return new Ve(e,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ve.DEFAULT_COLLECTION_PERCENTILE=10,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ve.DEFAULT=new Ve(_h,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ve.DISABLED=new Ve(-1,0,0);/**
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
 */const Jc="LruGarbageCollector",Yg=1048576;function Xc([n,e],[t,r]){const i=K(n,t);return i===0?K(e,r):i}class Jg{constructor(e){this.Pr=e,this.buffer=new ge(Xc),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Xc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Xg{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){j(Jc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){On(t)?j(Jc,"Ignoring IndexedDB error during garbage collection: ",t):await jn(t)}await this.Ar(3e5)})}}class Zg{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return R.resolve(ji.ce);const r=new Jg(t);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Yc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yc):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,i,s,a,u,d,f;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),i=this.params.maximumSequenceNumbersToCollect):i=_,a=Date.now(),this.nthSequenceNumber(e,i))).next(_=>(r=_,u=Date.now(),this.removeTargets(e,r,t))).next(_=>(s=_,d=Date.now(),this.removeOrphanedDocuments(e,r))).next(_=>(f=Date.now(),mn()<=H.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(d-u)+`ms
	Removed ${_} documents in `+(f-d)+`ms
Total Duration: ${f-p}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:_})))}}function ey(n,e){return new Zg(n,e)}/**
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
 */class ty{constructor(){this.changes=new cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ny{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ry{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&dr(r.mutation,i,qe.empty(),re.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const i=Ht();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=sr();return s.forEach((u,d)=>{a=a.insert(u,d.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ht();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let s=ft();const a=hr(),u=function(){return hr()}();return t.forEach((d,f)=>{const p=r.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof ln)?s=s.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),dr(p.mutation,f,p.mutation.getFieldMask(),re.now())):a.set(f.key,qe.empty())}),this.recalculateAndSaveOverlays(e,s).next(d=>(d.forEach((f,p)=>a.set(f,p)),t.forEach((f,p)=>u.set(f,new ny(p,a.get(f)??null))),u))}recalculateAndSaveOverlays(e,t){const r=hr();let i=new se((a,u)=>a-u),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(d=>{const f=t.get(d);if(f===null)return;let p=r.get(d)||qe.empty();p=u.applyToLocalView(f,p),r.set(d,p);const _=(i.get(u.batchId)||Q()).add(d);i=i.insert(u.batchId,_)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const d=u.getNext(),f=d.key,p=d.value,_=Xu();p.forEach(x=>{if(!s.has(x)){const C=ih(t.get(x),r.get(x));C!==null&&_.set(x,C),s=s.add(x)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,_))}return R.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return rg(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):R.resolve(Ht());let u=pr,d=s;return a.next(f=>R.forEach(f,(p,_)=>(u<_.largestBatchId&&(u=_.largestBatchId),s.get(p)?R.resolve():this.remoteDocumentCache.getEntry(e,p).next(x=>{d=d.insert(p,x)}))).next(()=>this.populateOverlays(e,f,s)).next(()=>this.computeViews(e,d,f,Q())).next(p=>({batchId:u,changes:Ju(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let i=sr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=sr();return this.indexManager.getCollectionParents(e,s).next(u=>R.forEach(u,d=>{const f=function(_,x){return new Mn(x,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,d.child(s));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(p=>{p.forEach((_,x)=>{a=a.insert(_,x)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((d,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,Re.newInvalidDocument(p)))});let u=sr();return a.forEach((d,f)=>{const p=s.get(d);p!==void 0&&dr(p.mutation,f,qe.empty(),re.now()),Fi(t,f)&&(u=u.insert(d,f))}),u})}}/**
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
 */class iy{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return R.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:nt(i.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(i){return{name:i.name,query:Hg(i.bundledQuery),readTime:nt(i.readTime)}}(t)),R.resolve()}}/**
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
 */class sy{constructor(){this.overlays=new se(M.comparator),this.Lr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ht();return R.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.St(e,t,s)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const i=Ht(),s=t.length+1,a=new M(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const d=u.getNext().value,f=d.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===s&&d.largestBatchId>r&&i.set(d.getKey(),d)}return R.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new se((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let p=s.get(f.largestBatchId);p===null&&(p=Ht(),s=s.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const u=Ht(),d=s.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,p)=>u.set(f,p)),!(u.size()>=i)););return R.resolve(u)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Tg(t,r));let s=this.Lr.get(t);s===void 0&&(s=Q(),this.Lr.set(t,s)),this.Lr.set(t,s.add(r.key))}}/**
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
 */class oy{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
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
 */class xo{constructor(){this.kr=new ge(_e.qr),this.Kr=new ge(_e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new _e(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new _e(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new M(new te([])),r=new _e(t,e),i=new _e(t,e+1),s=[];return this.Kr.forEachInRange([r,i],a=>{this.Wr(a),s.push(a.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new M(new te([])),r=new _e(t,e),i=new _e(t,e+1);let s=Q();return this.Kr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new _e(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return M.comparator(e.key,t.key)||K(e.Jr,t.Jr)}static Ur(e,t){return K(e.Jr,t.Jr)||M.comparator(e.key,t.key)}}/**
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
 */class ay{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ge(_e.qr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ig(s,t,r,i);this.mutationQueue.push(a);for(const u of i)this.Hr=this.Hr.add(new _e(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?po:this.Yn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new _e(t,0),i=new _e(t,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],a=>{const u=this.Zr(a.Jr);s.push(u)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ge(K);return t.forEach(i=>{const s=new _e(i,0),a=new _e(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,a],u=>{r=r.add(u.Jr)})}),R.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const a=new _e(new M(s),0);let u=new ge(K);return this.Hr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(u=u.add(d.Jr)),!0)},a),R.resolve(this.Yr(u))}Yr(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){X(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return R.forEach(t.mutations,i=>{const s=new _e(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new _e(t,0),i=this.Hr.firstAfterOrEqual(r);return R.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class cy{constructor(e){this.ti=e,this.docs=function(){return new se(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=ft();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Re.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ft();const a=t.path,u=new M(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(u);for(;d.hasNext();){const{key:f,value:{document:p}}=d.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Dp(Np(p),r)<=0||(i.has(p.key)||Fi(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,t,r,i){L(9500)}ni(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ly(this)}getSize(e){return R.resolve(this.size)}}class ly extends ty{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class uy{constructor(e){this.persistence=e,this.ri=new cn(t=>_o(t),vo),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.ii=0,this.si=new xo,this.targetCount=0,this.oi=kn._r()}forEachTarget(e,t){return this.ri.forEach((r,i)=>t(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),R.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new kn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.lr(t),R.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ri.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ri.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.si.containsKey(t))}}/**
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
 */class vh{constructor(e,t){this._i={},this.overlays={},this.ai=new ji(0),this.ui=!1,this.ui=!0,this.ci=new oy,this.referenceDelegate=e(this),this.li=new uy(this),this.indexManager=new Kg,this.remoteDocumentCache=function(i){return new cy(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Gg(t),this.Pi=new iy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new ay(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const i=new hy(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,t){return R.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class hy extends jp{constructor(e){super(),this.currentSequenceNumber=e}}class So{constructor(e){this.persistence=e,this.Ri=new xo,this.Ai=null}static Vi(e){return new So(e)}get di(){if(this.Ai)return this.Ai;throw L(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,r=>{const i=M.fromPath(r);return this.mi(e,i).next(s=>{s||t.removeEntry(i,B.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class yi{constructor(e,t){this.persistence=e,this.fi=new cn(r=>Lp(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=ey(this,t)}static Vi(e,t){return new yi(e,t)}Ti(){}Ei(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return R.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?R.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,a=>this.wr(e,a,t).next(u=>{u||(r++,s.removeEntry(a,B.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zr(e.data.value)),t}wr(e,t,r){return R.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ao{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=i}static Is(e,t){let r=Q(),i=Q();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ao(e,t.fromCache,r,i)}}/**
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
 */class dy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class fy{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Zf()?8:Op(Ce())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.gs(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ps(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new dy;return this.ys(e,t,a).next(u=>{if(s.result=u,this.As)return this.ws(e,t,a,u.size)})}).next(()=>s.result)}ws(e,t,r,i){return r.documentReadCount<this.Vs?(mn()<=H.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",pn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(mn()<=H.DEBUG&&j("QueryEngine","Query:",pn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(mn()<=H.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",pn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tt(t))):R.resolve())}gs(e,t){if(Uc(t))return R.resolve(null);let r=tt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=mi(t,null,"F"),r=tt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Q(...s);return this.fs.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(d=>{const f=this.Ss(t,u);return this.bs(t,f,a,d.readTime)?this.gs(e,mi(t,null,"F")):this.Ds(e,f,t,d)}))})))}ps(e,t,r,i){return Uc(t)||i.isEqual(B.min())?R.resolve(null):this.fs.getDocuments(e,r).next(s=>{const a=this.Ss(t,s);return this.bs(t,a,r,i)?R.resolve(null):(mn()<=H.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pn(t)),this.Ds(e,a,t,Pp(i,pr)).next(u=>u))})}Ss(e,t){let r=new ge(Qu(e));return t.forEach((i,s)=>{Fi(e,s)&&(r=r.add(s))}),r}bs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,t,r){return mn()<=H.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",pn(t)),this.fs.getDocumentsMatchingQuery(e,t,Vt.min(),r)}Ds(e,t,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */const Ro="LocalStore",my=3e8;class py{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new se(K),this.Fs=new cn(s=>_o(s),vo),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ry(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function gy(n,e,t,r){return new py(n,e,t,r)}async function bh(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],u=[];let d=Q();for(const f of i){a.push(f.batchId);for(const p of f.mutations)d=d.add(p.key)}for(const f of s){u.push(f.batchId);for(const p of f.mutations)d=d.add(p.key)}return t.localDocuments.getDocuments(r,d).next(f=>({Ns:f,removedBatchIds:a,addedBatchIds:u}))})})}function yy(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.xs.newChangeBuffer({trackRemovals:!0});return function(u,d,f,p){const _=f.batch,x=_.keys();let C=R.resolve();return x.forEach(P=>{C=C.next(()=>p.getEntry(d,P)).next(D=>{const N=f.docVersions.get(P);X(N!==null,48541),D.version.compareTo(N)<0&&(_.applyToRemoteDocument(D,f),D.isValidDocument()&&(D.setReadTime(f.commitVersion),p.addEntry(D)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(d,_))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let d=Q();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(d=d.add(u.batch.mutations[f].key));return d}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function wh(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function _y(n,e){const t=W(n),r=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const u=[];e.targetChanges.forEach((p,_)=>{const x=i.get(_);if(!x)return;u.push(t.li.removeMatchingKeys(s,p.removedDocuments,_).next(()=>t.li.addMatchingKeys(s,p.addedDocuments,_)));let C=x.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(_)!==null?C=C.withResumeToken(Te.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,r)),i=i.insert(_,C),function(D,N,z){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=my?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(x,C,p)&&u.push(t.li.updateTargetData(s,C))});let d=ft(),f=Q();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),u.push(vy(s,a,e.documentUpdates).next(p=>{d=p.Bs,f=p.Ls})),!r.isEqual(B.min())){const p=t.li.getLastRemoteSnapshotVersion(s).next(_=>t.li.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(p)}return R.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,d,f)).next(()=>d)}).then(s=>(t.vs=i,s))}function vy(n,e,t){let r=Q(),i=Q();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=ft();return t.forEach((u,d)=>{const f=s.get(u);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(u)),d.isNoDocument()&&d.version.isEqual(B.min())?(e.removeEntry(u,d.readTime),a=a.insert(u,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(d),a=a.insert(u,d)):j(Ro,"Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",d.version)}),{Bs:a,Ls:i}})}function by(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=po),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wy(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.li.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):t.li.allocateTargetId(r).next(a=>(i=new Rt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function eo(n,e,t){const r=W(n),i=r.vs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!On(a))throw a;j(Ro,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Zc(n,e,t){const r=W(n);let i=B.min(),s=Q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(d,f,p){const _=W(d),x=_.Fs.get(p);return x!==void 0?R.resolve(_.vs.get(x)):_.li.getTargetData(f,p)}(r,a,tt(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,u.targetId).next(d=>{s=d})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?s:Q())).next(u=>(Iy(r,og(e),u),{documents:u,ks:s})))}function Iy(n,e,t){let r=n.Ms.get(e)||B.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ms.set(e,r)}class el{constructor(){this.activeTargetIds=dg()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ty{constructor(){this.vo=new el,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new el,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const tl="ConnectivityMonitor";class nl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){j(tl,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){j(tl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yr=null;function to(){return Yr===null?Yr=function(){return 268435456+Math.round(2147483648*Math.random())}():Yr++,"0x"+Yr.toString(16)}/**
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
 */const Cs="RestConnection",xy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Sy{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===hi?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const a=to(),u=this.Qo(e,t.toUriEncodedString());j(Cs,`Sending RPC '${e}' ${a}:`,u,r);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,i,s);const{host:f}=new URL(u),p=xr(f);return this.zo(e,u,d,r,p).then(_=>(j(Cs,`Received RPC '${e}' ${a}: `,_),_),_=>{throw Zt(Cs,`RPC '${e}' ${a} failed with error: `,_,"url: ",u,"request:",r),_})}jo(e,t,r,i,s,a){return this.Wo(e,t,r,i,s)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,t){const r=xy[e];let i=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class Ay{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Se="WebChannelConnection",nr=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(i){setTimeout(()=>{throw i},0)}})};class bn extends Sy{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!bn.c_){const e=xu();nr(e,Eu.STAT_EVENT,t=>{t.stat===zs.PROXY?j(Se,"STAT_EVENT: detected buffering proxy"):t.stat===zs.NOPROXY&&j(Se,"STAT_EVENT: detected no buffering proxy")}),bn.c_=!0}}zo(e,t,r,i,s){const a=to();return new Promise((u,d)=>{const f=new Iu;f.setWithCredentials(!0),f.listenOnce(Tu.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Xr.NO_ERROR:const _=f.getResponseJson();j(Se,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),u(_);break;case Xr.TIMEOUT:j(Se,`RPC '${e}' ${a} timed out`),d(new V(A.DEADLINE_EXCEEDED,"Request time out"));break;case Xr.HTTP_ERROR:const x=f.getStatus();if(j(Se,`RPC '${e}' ${a} failed with status:`,x,"response text:",f.getResponseText()),x>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C==null?void 0:C.error;if(P&&P.status&&P.message){const D=function(z){const $=z.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf($)>=0?$:A.UNKNOWN}(P.status);d(new V(D,P.message))}else d(new V(A.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new V(A.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{j(Se,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(i);j(Se,`RPC '${e}' ${a} sending request:`,i),f.send(t,"POST",p,r,15)})}T_(e,t,r){const i=to(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");j(Se,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=a.createWebChannel(f,u);this.E_(p);let _=!1,x=!1;const C=new Ay({Jo:P=>{x?j(Se,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(_||(j(Se,`Opening RPC '${e}' stream ${i} transport.`),p.open(),_=!0),j(Se,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},Ho:()=>p.close()});return nr(p,ir.EventType.OPEN,()=>{x||(j(Se,`RPC '${e}' stream ${i} transport opened.`),C.i_())}),nr(p,ir.EventType.CLOSE,()=>{x||(x=!0,j(Se,`RPC '${e}' stream ${i} transport closed`),C.o_(),this.I_(p))}),nr(p,ir.EventType.ERROR,P=>{x||(x=!0,Zt(Se,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),C.o_(new V(A.UNAVAILABLE,"The operation could not be completed")))}),nr(p,ir.EventType.MESSAGE,P=>{var D;if(!x){const N=P.data[0];X(!!N,16349);const z=N,$=(z==null?void 0:z.error)||((D=z[0])==null?void 0:D.error);if($){j(Se,`RPC '${e}' stream ${i} received error:`,$);const J=$.status;let ae=function(w){const y=ue[w];if(y!==void 0)return ah(y)}(J),Z=$.message;J==="NOT_FOUND"&&Z.includes("database")&&Z.includes("does not exist")&&Z.includes(this.databaseId.database)&&Zt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ae===void 0&&(ae=A.INTERNAL,Z="Unknown error status: "+J+" with message "+$.message),x=!0,C.o_(new V(ae,Z)),p.close()}else j(Se,`RPC '${e}' stream ${i} received:`,N),C.__(N)}}),bn.u_(),setTimeout(()=>{C.s_()},0),C}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Su()}}/**
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
 */function Ry(n){return new bn(n)}function ks(){return typeof document<"u"?document:null}/**
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
 */function zi(n){return new Ng(n,!0)}/**
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
 */bn.c_=!1;class Ih{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const rl="PersistentStream";class Th{constructor(e,t,r,i,s,a,u,d){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ih(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===A.RESOURCE_EXHAUSTED?(dt(t.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new V(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return j(rl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(j(rl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cy extends Th{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=jg(this.serializer,e),r=function(s){if(!("targetChange"in s))return B.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?nt(a.readTime):B.min()}(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=Zs(this.serializer),t.addTarget=function(s,a){let u;const d=a.target;if(u=Ks(d)?{documents:Lg(s,d)}:{query:Fg(s,d).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=uh(s,a.resumeToken);const f=Ys(s,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=gi(s,a.snapshotVersion.toTimestamp());const f=Ys(s,a.expectedCount);f!==null&&(u.expectedCount=f)}return u}(this.serializer,e);const r=Bg(this.serializer,e);r&&(t.labels=r),this.q_(t)}X_(e){const t={};t.database=Zs(this.serializer),t.removeTarget=e,this.q_(t)}}class ky extends Th{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Mg(e.writeResults,e.commitTime),r=nt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Zs(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Og(this.serializer,r))};this.q_(t)}}/**
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
 */class Py{}class Ny extends Py{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,Js(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(A.UNKNOWN,s.toString())})}jo(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.jo(e,Js(t,r),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(A.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Dy(n,e,t,r){return new Ny(n,e,t,r)}class Vy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(dt(t),this.aa=!1):j("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const en="RemoteStore";class jy{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{un(this)&&(j(en,"Restarting streams for network reachability change."),await async function(d){const f=W(d);f.Ia.add(4),await Cr(f),f.Va.set("Unknown"),f.Ia.delete(4),await qi(f)}(this))})}),this.Va=new Vy(r,i)}}async function qi(n){if(un(n))for(const e of n.Ra)await e(!0)}async function Cr(n){for(const e of n.Ra)await e(!1)}function Eh(n,e){const t=W(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),No(t)?Po(t):Ln(t).O_()&&ko(t,e))}function Co(n,e){const t=W(n),r=Ln(t);t.Ea.delete(e),r.O_()&&xh(t,e),t.Ea.size===0&&(r.O_()?r.L_():un(t)&&t.Va.set("Unknown"))}function ko(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ln(n).Z_(e)}function xh(n,e){n.da.$e(e),Ln(n).X_(e)}function Po(n){n.da=new Rg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ln(n).start(),n.Va.ua()}function No(n){return un(n)&&!Ln(n).x_()&&n.Ea.size>0}function un(n){return W(n).Ia.size===0}function Sh(n){n.da=void 0}async function Oy(n){n.Va.set("Online")}async function My(n){n.Ea.forEach((e,t)=>{ko(n,e)})}async function Ly(n,e){Sh(n),No(n)?(n.Va.ha(e),Po(n)):n.Va.set("Unknown")}async function Fy(n,e,t){if(n.Va.set("Online"),e instanceof lh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.Ea.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ea.delete(u),i.da.removeTarget(u))}(n,e)}catch(r){j(en,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _i(n,r)}else if(e instanceof ni?n.da.Xe(e):e instanceof ch?n.da.st(e):n.da.tt(e),!t.isEqual(B.min()))try{const r=await wh(n.localStore);t.compareTo(r)>=0&&await function(s,a){const u=s.da.Tt(a);return u.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const p=s.Ea.get(f);p&&s.Ea.set(f,p.withResumeToken(d.resumeToken,a))}}),u.targetMismatches.forEach((d,f)=>{const p=s.Ea.get(d);if(!p)return;s.Ea.set(d,p.withResumeToken(Te.EMPTY_BYTE_STRING,p.snapshotVersion)),xh(s,d);const _=new Rt(p.target,d,f,p.sequenceNumber);ko(s,_)}),s.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){j(en,"Failed to raise snapshot:",r),await _i(n,r)}}async function _i(n,e,t){if(!On(e))throw e;n.Ia.add(1),await Cr(n),n.Va.set("Offline"),t||(t=()=>wh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j(en,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await qi(n)})}function Ah(n,e){return e().catch(t=>_i(n,t,e))}async function $i(n){const e=W(n),t=Lt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:po;for(;Uy(e);)try{const i=await by(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,By(e,i)}catch(i){await _i(e,i)}Rh(e)&&Ch(e)}function Uy(n){return un(n)&&n.Ta.length<10}function By(n,e){n.Ta.push(e);const t=Lt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Rh(n){return un(n)&&!Lt(n).x_()&&n.Ta.length>0}function Ch(n){Lt(n).start()}async function Wy(n){Lt(n).ra()}async function zy(n){const e=Lt(n);for(const t of n.Ta)e.ea(t.mutations)}async function qy(n,e,t){const r=n.Ta.shift(),i=Io.from(r,e,t);await Ah(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await $i(n)}async function $y(n,e){e&&Lt(n).Y_&&await async function(r,i){if(function(a){return xg(a)&&a!==A.ABORTED}(i.code)){const s=r.Ta.shift();Lt(r).B_(),await Ah(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $i(r)}}(n,e),Rh(n)&&Ch(n)}async function il(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),j(en,"RemoteStore received new credentials");const r=un(t);t.Ia.add(3),await Cr(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await qi(t)}async function Gy(n,e){const t=W(n);e?(t.Ia.delete(2),await qi(t)):e||(t.Ia.add(2),await Cr(t),t.Va.set("Unknown"))}function Ln(n){return n.ma||(n.ma=function(t,r,i){const s=W(t);return s.sa(),new Cy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:Oy.bind(null,n),Yo:My.bind(null,n),t_:Ly.bind(null,n),H_:Fy.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),No(n)?Po(n):n.Va.set("Unknown")):(await n.ma.stop(),Sh(n))})),n.ma}function Lt(n){return n.fa||(n.fa=function(t,r,i){const s=W(t);return s.sa(),new ky(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Wy.bind(null,n),t_:$y.bind(null,n),ta:zy.bind(null,n),na:qy.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await $i(n)):(await n.fa.stop(),n.Ta.length>0&&(j(en,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Do{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,u=new Do(e,t,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vo(n,e){if(dt("AsyncQueue",`${e}: ${n}`),On(n))return new V(A.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class wn{static emptySet(e){return new wn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=sr(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class sl{constructor(){this.ga=new se(M.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):L(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Pn{constructor(e,t,r,i,s,a,u,d,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new Pn(e,t,wn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Li(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Hy{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Ky{constructor(){this.queries=ol(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=W(t),s=i.queries;i.queries=ol(),s.forEach((a,u)=>{for(const d of u.Sa)d.onError(r)})})(this,new V(A.ABORTED,"Firestore shutting down"))}}function ol(){return new cn(n=>Ku(n),Li)}async function Qy(n,e){const t=W(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new Hy,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await t.onListen(i,!0);break;case 1:s.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=Vo(a,`Initialization of query '${pn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&jo(t)}async function Yy(n,e){const t=W(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.Sa.indexOf(e);a>=0&&(s.Sa.splice(a,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Jy(n,e){const t=W(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const u of a.Sa)u.Fa(i)&&(r=!0);a.wa=i}}r&&jo(t)}function Xy(n,e,t){const r=W(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function jo(n){n.Ca.forEach(e=>{e.next()})}var no,al;(al=no||(no={})).Ma="default",al.Cache="cache";class Zy{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Pn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==no.Cache}}/**
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
 */class kh{constructor(e){this.key=e}}class Ph{constructor(e){this.key=e}}class e0{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Q(),this.mutatedKeys=Q(),this.eu=Qu(e),this.tu=new wn(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new sl,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,_)=>{const x=i.get(p),C=Fi(this.query,_)?_:null,P=!!x&&this.mutatedKeys.has(x.key),D=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let N=!1;x&&C?x.data.isEqual(C.data)?P!==D&&(r.track({type:3,doc:C}),N=!0):this.su(x,C)||(r.track({type:2,doc:C}),N=!0,(d&&this.eu(C,d)>0||f&&this.eu(C,f)<0)&&(u=!0)):!x&&C?(r.track({type:0,doc:C}),N=!0):x&&!C&&(r.track({type:1,doc:x}),N=!0,(d||f)&&(u=!0)),N&&(C?(a=a.add(C),s=D?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,bs:u,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,_)=>function(C,P){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Vt:N})}};return D(C)-D(P)}(p.type,_.type)||this.eu(p.doc,_.doc)),this.ou(r),i=i??!1;const u=t&&!i?this._u():[],d=this.Ya.size===0&&this.current&&!i?1:0,f=d!==this.Xa;return this.Xa=d,a.length!==0||f?{snapshot:new Pn(this.query,e.tu,s,a,e.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new sl,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Q(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Ph(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new kh(r))}),t}cu(e){this.Za=e.ks,this.Ya=Q();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Pn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Oo="SyncEngine";class t0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class n0{constructor(e){this.key=e,this.hu=!1}}class r0{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new cn(u=>Ku(u),Li),this.Eu=new Map,this.Iu=new Set,this.Ru=new se(M.comparator),this.Au=new Map,this.Vu=new xo,this.du={},this.mu=new Map,this.fu=kn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function i0(n,e,t=!0){const r=Mh(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Nh(r,e,t,!0),i}async function s0(n,e){const t=Mh(n);await Nh(t,e,!0,!1)}async function Nh(n,e,t,r){const i=await wy(n.localStore,tt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let u;return r&&(u=await o0(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Eh(n.remoteStore,i),u}async function o0(n,e,t,r,i){n.pu=(_,x,C)=>async function(D,N,z,$){let J=N.view.ru(z);J.bs&&(J=await Zc(D.localStore,N.query,!1).then(({documents:w})=>N.view.ru(w,J)));const ae=$&&$.targetChanges.get(N.targetId),Z=$&&$.targetMismatches.get(N.targetId)!=null,ie=N.view.applyChanges(J,D.isPrimaryClient,ae,Z);return ll(D,N.targetId,ie.au),ie.snapshot}(n,_,x,C);const s=await Zc(n.localStore,e,!0),a=new e0(e,s.ks),u=a.ru(s.documents),d=Rr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),f=a.applyChanges(u,n.isPrimaryClient,d);ll(n,t,f.au);const p=new t0(e,t,a);return n.Tu.set(e,p),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),f.snapshot}async function a0(n,e,t){const r=W(n),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(a=>!Li(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await eo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Co(r.remoteStore,i.targetId),ro(r,i.targetId)}).catch(jn)):(ro(r,i.targetId),await eo(r.localStore,i.targetId,!0))}async function c0(n,e){const t=W(n),r=t.Tu.get(e),i=t.Eu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Co(t.remoteStore,r.targetId))}async function l0(n,e,t){const r=g0(n);try{const i=await function(a,u){const d=W(a),f=re.now(),p=u.reduce((C,P)=>C.add(P.key),Q());let _,x;return d.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=ft(),D=Q();return d.xs.getEntries(C,p).next(N=>{P=N,P.forEach((z,$)=>{$.isValidDocument()||(D=D.add(z))})}).next(()=>d.localDocuments.getOverlayedDocuments(C,P)).next(N=>{_=N;const z=[];for(const $ of u){const J=bg($,_.get($.key).overlayedDocument);J!=null&&z.push(new ln($.key,J,Uu(J.value.mapValue),ut.exists(!0)))}return d.mutationQueue.addMutationBatch(C,f,z,u)}).next(N=>{x=N;const z=N.applyToLocalDocumentSet(_,D);return d.documentOverlayCache.saveOverlays(C,N.batchId,z)})}).then(()=>({batchId:x.batchId,changes:Ju(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,d){let f=a.du[a.currentUser.toKey()];f||(f=new se(K)),f=f.insert(u,d),a.du[a.currentUser.toKey()]=f}(r,i.batchId,t),await kr(r,i.changes),await $i(r.remoteStore)}catch(i){const s=Vo(i,"Failed to persist write");t.reject(s)}}async function Dh(n,e){const t=W(n);try{const r=await _y(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Au.get(s);a&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?X(a.hu,14607):i.removedDocuments.size>0&&(X(a.hu,42227),a.hu=!1))}),await kr(t,r,e)}catch(r){await jn(r)}}function cl(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((s,a)=>{const u=a.view.va(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const d=W(a);d.onlineState=u;let f=!1;d.queries.forEach((p,_)=>{for(const x of _.Sa)x.va(u)&&(f=!0)}),f&&jo(d)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function u0(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let a=new se(M.comparator);a=a.insert(s,Re.newNoDocument(s,B.min()));const u=Q().add(s),d=new Wi(B.min(),new Map,new se(K),a,u);await Dh(r,d),r.Ru=r.Ru.remove(s),r.Au.delete(e),Mo(r)}else await eo(r.localStore,e,!1).then(()=>ro(r,e,t)).catch(jn)}async function h0(n,e){const t=W(n),r=e.batch.batchId;try{const i=await yy(t.localStore,e);jh(t,r,null),Vh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await kr(t,i)}catch(i){await jn(i)}}async function d0(n,e,t){const r=W(n);try{const i=await function(a,u){const d=W(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return d.mutationQueue.lookupMutationBatch(f,u).next(_=>(X(_!==null,37113),p=_.keys(),d.mutationQueue.removeMutationBatch(f,_))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,p,u)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>d.localDocuments.getDocuments(f,p))})}(r.localStore,e);jh(r,e,t),Vh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await kr(r,i)}catch(i){await jn(i)}}function Vh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function jh(n,e,t){const r=W(n);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function ro(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Eu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||Oh(n,r)})}function Oh(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Co(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Mo(n))}function ll(n,e,t){for(const r of t)r instanceof kh?(n.Vu.addReference(r.key,e),f0(n,r)):r instanceof Ph?(j(Oo,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||Oh(n,r.key)):L(19791,{wu:r})}function f0(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(r)||(j(Oo,"New document in limbo: "+t),n.Iu.add(r),Mo(n))}function Mo(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new M(te.fromString(e)),r=n.fu.next();n.Au.set(r,new n0(t)),n.Ru=n.Ru.insert(t,r),Eh(n.remoteStore,new Rt(tt(bo(t.path)),r,"TargetPurposeLimboResolution",ji.ce))}}async function kr(n,e,t){const r=W(n),i=[],s=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((u,d)=>{a.push(r.pu(d,e,t).then(f=>{var p;if((f||t)&&r.isPrimaryClient){const _=f?!f.fromCache:(p=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(d.targetId,_?"current":"not-current")}if(f){i.push(f);const _=Ao.Is(d.targetId,f);s.push(_)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(d,f){const p=W(d);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>R.forEach(f,x=>R.forEach(x.Ts,C=>p.persistence.referenceDelegate.addReference(_,x.targetId,C)).next(()=>R.forEach(x.Es,C=>p.persistence.referenceDelegate.removeReference(_,x.targetId,C)))))}catch(_){if(!On(_))throw _;j(Ro,"Failed to update sequence numbers: "+_)}for(const _ of f){const x=_.targetId;if(!_.fromCache){const C=p.vs.get(x),P=C.snapshotVersion,D=C.withLastLimboFreeSnapshotVersion(P);p.vs=p.vs.insert(x,D)}}}(r.localStore,s))}async function m0(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){j(Oo,"User change. New user:",e.toKey());const r=await bh(t.localStore,e);t.currentUser=e,function(s,a){s.mu.forEach(u=>{u.forEach(d=>{d.reject(new V(A.CANCELLED,a))})}),s.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kr(t,r.Ns)}}function p0(n,e){const t=W(n),r=t.Au.get(e);if(r&&r.hu)return Q().add(r.key);{let i=Q();const s=t.Eu.get(e);if(!s)return i;for(const a of s){const u=t.Tu.get(a);i=i.unionWith(u.view.nu)}return i}}function Mh(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=p0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=u0.bind(null,e),e.Pu.H_=Jy.bind(null,e.eventManager),e.Pu.yu=Xy.bind(null,e.eventManager),e}function g0(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=h0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=d0.bind(null,e),e}class vi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return gy(this.persistence,new fy,e.initialUser,this.serializer)}Cu(e){return new vh(So.Vi,this.serializer)}Du(e){return new Ty}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vi.provider={build:()=>new vi};class y0 extends vi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){X(this.persistence.referenceDelegate instanceof yi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Xg(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new vh(r=>yi.Vi(r,t),this.serializer)}}class io{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=m0.bind(null,this.syncEngine),await Gy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ky}()}createDatastore(e){const t=zi(e.databaseInfo.databaseId),r=Ry(e.databaseInfo);return Dy(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,u){return new jy(r,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>cl(this.syncEngine,t,0),function(){return nl.v()?new nl:new Ey}())}createSyncEngine(e,t){return function(i,s,a,u,d,f,p){const _=new r0(i,s,a,u,d,f);return p&&(_.gu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=W(i);j(en,"RemoteStore shutting down."),s.Ia.add(5),await Cr(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}io.provider={build:()=>new io};/**
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
 */class _0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):dt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Ft="FirestoreClient";class v0{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=Ae.UNAUTHENTICATED,this.clientId=mo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{j(Ft,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(j(Ft,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ps(n,e){n.asyncQueue.verifyOperationInProgress(),j(Ft,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ul(n,e){n.asyncQueue.verifyOperationInProgress();const t=await b0(n);j(Ft,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>il(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>il(e.remoteStore,i)),n._onlineComponents=e}async function b0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(Ft,"Using user provided OfflineComponentProvider");try{await Ps(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===A.FAILED_PRECONDITION||i.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Zt("Error using user provided cache. Falling back to memory cache: "+t),await Ps(n,new vi)}}else j(Ft,"Using default OfflineComponentProvider"),await Ps(n,new y0(void 0));return n._offlineComponents}async function Lh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(Ft,"Using user provided OnlineComponentProvider"),await ul(n,n._uninitializedComponentsProvider._online)):(j(Ft,"Using default OnlineComponentProvider"),await ul(n,new io))),n._onlineComponents}function w0(n){return Lh(n).then(e=>e.syncEngine)}async function hl(n){const e=await Lh(n),t=e.eventManager;return t.onListen=i0.bind(null,e.syncEngine),t.onUnlisten=a0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=s0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=c0.bind(null,e.syncEngine),t}function I0(n,e,t,r){const i=new _0(r),s=new Zy(e,i,t);return n.asyncQueue.enqueueAndForget(async()=>Qy(await hl(n),s)),()=>{i.Nu(),n.asyncQueue.enqueueAndForget(async()=>Yy(await hl(n),s))}}function T0(n,e){const t=new Qt;return n.asyncQueue.enqueueAndForget(async()=>l0(await w0(n),e,t)),t.promise}/**
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
 */function Fh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const E0="ComponentProvider",dl=new Map;function x0(n,e,t,r,i){return new Bp(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Fh(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const Uh="firestore.googleapis.com",fl=!0;class ml{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Uh,this.ssl=fl}else this.host=e.host,this.ssl=e.ssl??fl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_h;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Yg)throw new V(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fh(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ml({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ml(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bp;switch(r.type){case"firstParty":return new Ep(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=dl.get(t);r&&(j(E0,"Removing Datastore"),dl.delete(t),r.terminate())}(this),Promise.resolve()}}function S0(n,e,t,r={}){var f;n=cr(n,Gi);const i=xr(e),s=n._getSettings(),a={...s,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;i&&mu(`https://${u}`),s.host!==Uh&&s.host!==u&&Zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...s,host:u,ssl:i,emulatorOptions:r};if(!Dt(d,a)&&(n._setSettings(d),r.mockUserToken)){let p,_;if(typeof r.mockUserToken=="string")p=r.mockUserToken,_=Ae.MOCK_USER;else{p=Hf(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const x=r.mockUserToken.sub||r.mockUserToken.user_id;if(!x)throw new V(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Ae(x)}n._authCredentials=new wp(new Ru(p,_))}}/**
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
 */class Ut{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ut(this.firestore,e,this._query)}}class pe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pe(this.firestore,e,this._key)}toJSON(){return{type:pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Sr(t,pe._jsonSchema))return new pe(e,r||null,new M(te.fromString(t.referencePath)))}}pe._jsonSchemaVersion="firestore/documentReference/1.0",pe._jsonSchema={type:de("string",pe._jsonSchemaVersion),referencePath:de("string")};class Nt extends Ut{constructor(e,t,r){super(e,t,bo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new M(e))}withConverter(e){return new Nt(this.firestore,e,this._path)}}function _n(n,e,...t){if(n=ke(n),Cu("collection","path",e),n instanceof Gi){const r=te.fromString(e,...t);return Sc(r),new Nt(n,null,r)}{if(!(n instanceof pe||n instanceof Nt))throw new V(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return Sc(r),new Nt(n.firestore,null,r)}}function A0(n,e,...t){if(n=ke(n),arguments.length===1&&(e=mo.newId()),Cu("doc","path",e),n instanceof Gi){const r=te.fromString(e,...t);return xc(r),new pe(n,null,new M(r))}{if(!(n instanceof pe||n instanceof Nt))throw new V(A.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return xc(r),new pe(n.firestore,n instanceof Nt?n.converter:null,new M(r))}}/**
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
 */const pl="AsyncQueue";class gl{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ih(this,"async_queue_retry"),this._c=()=>{const r=ks();r&&j(pl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ks();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ks();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Qt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!On(e))throw e;j(pl,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,dt("INTERNAL UNHANDLED ERROR: ",yl(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Do.createAndSchedule(this,e,t,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&L(47125,{Pc:yl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function yl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class bi extends Gi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new gl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gl(e),this._firestoreClient=void 0,await e}}}function R0(n,e){const t=typeof n=="object"?n:ho(),r=typeof n=="string"?n:hi,i=on(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$f("firestore");s&&S0(i,...s)}return i}function Bh(n){if(n._terminated)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||C0(n),n._firestoreClient}function C0(n){var r,i,s,a;const e=n._freezeSettings(),t=x0(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new v0(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(Te.fromBase64String(e))}catch(t){throw new V(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sr(e,Be._jsonSchema))return Be.fromBase64String(e.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:de("string",Be._jsonSchemaVersion),bytes:de("string")};/**
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
 */class Wh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Lo{constructor(e){this._methodName=e}}/**
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
 */class rt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rt._jsonSchemaVersion}}static fromJSON(e){if(Sr(e,rt._jsonSchema))return new rt(e.latitude,e.longitude)}}rt._jsonSchemaVersion="firestore/geoPoint/1.0",rt._jsonSchema={type:de("string",rt._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
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
 */class Ge{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ge._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sr(e,Ge._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ge(e.vectorValues);throw new V(A.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ge._jsonSchemaVersion="firestore/vectorValue/1.0",Ge._jsonSchema={type:de("string",Ge._jsonSchemaVersion),vectorValues:de("object")};/**
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
 */const k0=/^__.*__$/;class P0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ln(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ar(e,this.data,t,this.fieldTransforms)}}function zh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{dataSource:n})}}class Fo{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Fo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return wi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(zh(this.dataSource)&&k0.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class N0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||zi(e)}I(e,t,r,i=!1){return new Fo({dataSource:e,methodName:t,targetDoc:r,path:Ie.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qh(n){const e=n._freezeSettings(),t=zi(n._databaseId);return new N0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function D0(n,e,t,r,i,s={}){const a=n.I(s.merge||s.mergeFields?2:0,e,t,i);Hh("Data must be an object, but it was:",a,r);const u=$h(r,a);let d,f;if(s.merge)d=new qe(a.fieldMask),f=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const _ of s.mergeFields){const x=Hi(e,_,t);if(!a.contains(x))throw new V(A.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);M0(p,x)||p.push(x)}d=new qe(p),f=a.fieldTransforms.filter(_=>d.covers(_.field))}else d=null,f=a.fieldTransforms;return new P0(new Ue(u),d,f)}class Uo extends Lo{_toFieldTransform(e){return new gg(e.path,new br)}isEqual(e){return e instanceof Uo}}function V0(n,e,t,r=!1){return Bo(t,n.I(r?4:3,e))}function Bo(n,e){if(Gh(n=ke(n)))return Hh("Unsupported field value:",e,n),$h(n,e);if(n instanceof Lo)return function(r,i){if(!zh(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const u of r){let d=Bo(u,i.gc(a));d==null&&(d={nullValue:"NULL_VALUE"}),s.push(d),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=re.fromDate(r);return{timestampValue:gi(i.serializer,s)}}if(r instanceof re){const s=new re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gi(i.serializer,s)}}if(r instanceof rt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Be)return{bytesValue:uh(i.serializer,r._byteString)};if(r instanceof pe){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Eo(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ge)return function(a,u){const d=a instanceof Ge?a.toArray():a;return{mapValue:{fields:{[Lu]:{stringValue:Fu},[di]:{arrayValue:{values:d.map(p=>{if(typeof p!="number")throw u.yc("VectorValues must only contain numeric values.");return wo(u.serializer,p)})}}}}}}(r,i);if(yh(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Vi(r)}`)}(n,e)}function $h(n,e){const t={};return Nu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):an(n,(r,i)=>{const s=Bo(i,e.dc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Gh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof re||n instanceof rt||n instanceof Be||n instanceof pe||n instanceof Lo||n instanceof Ge||yh(n))}function Hh(n,e,t){if(!Gh(t)||!ku(t)){const r=Vi(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function Hi(n,e,t){if((e=ke(e))instanceof Wh)return e._internalPath;if(typeof e=="string")return O0(n,e);throw wi("Field path arguments must be of type string or ",n,!1,void 0,t)}const j0=new RegExp("[~\\*/\\[\\]]");function O0(n,e,t){if(e.search(j0)>=0)throw wi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wh(...e.split("."))._internalPath}catch{throw wi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function wi(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let d="";return(s||a)&&(d+=" (found",s&&(d+=` in field ${r}`),a&&(d+=` in document ${i}`),d+=")"),new V(A.INVALID_ARGUMENT,u+n+d)}function M0(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class L0{convertValue(e,t="none"){switch(Mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ot(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return an(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var r,i,s;const t=(s=(i=(r=e.fields)==null?void 0:r[di].arrayValue)==null?void 0:i.values)==null?void 0:s.map(a=>le(a.doubleValue));return new Ge(t)}convertGeoPoint(e){return new rt(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Mi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gr(e));default:return null}}convertTimestamp(e){const t=jt(e);return new re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=te.fromString(e);X(gh(r),9688,{name:e});const i=new yr(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(t)||dt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class Kh extends L0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}function Ii(){return new Uo("serverTimestamp")}const _l="@firebase/firestore",vl="4.14.0";/**
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
 */function bl(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}/**
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
 */class Qh{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new F0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Hi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class F0 extends Qh{data(){return super.data()}}/**
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
 */function U0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wo{}class zo extends Wo{}function B0(n,e,...t){let r=[];e instanceof Wo&&r.push(e),r=r.concat(t),function(s){const a=s.filter(d=>d instanceof $o).length,u=s.filter(d=>d instanceof qo).length;if(a>1||a>0&&u>0)throw new V(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class qo extends zo{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new qo(e,t,r)}_apply(e){const t=this._parse(e);return Yh(e._query,t),new Ut(e.firestore,e.converter,Qs(e._query,t))}_parse(e){const t=qh(e.firestore);return function(s,a,u,d,f,p,_){let x;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new V(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Il(_,p);const P=[];for(const D of _)P.push(wl(d,s,D));x={arrayValue:{values:P}}}else x=wl(d,s,_)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Il(_,p),x=V0(u,a,_,p==="in"||p==="not-in");return he.create(f,p,x)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class $o extends Wo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new $o(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ke.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const u=s.getFlattenedFilters();for(const d of u)Yh(a,d),a=Qs(a,d)}(e._query,t),new Ut(e.firestore,e.converter,Qs(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Go extends zo{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Go(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new V(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vr(s,a)}(e._query,this._field,this._direction);return new Ut(e.firestore,e.converter,sg(e._query,t))}}function W0(n,e="asc"){const t=e,r=Hi("orderBy",n);return Go._create(r,t)}class Ho extends zo{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ho(e,t,r)}_apply(e){return new Ut(e.firestore,e.converter,mi(e._query,this._limit,this._limitType))}}function z0(n){return Ho._create("limit",n,"F")}function wl(n,e,t){if(typeof(t=ke(t))=="string"){if(t==="")throw new V(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hu(e)&&t.indexOf("/")!==-1)throw new V(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(te.fromString(t));if(!M.isDocumentKey(r))throw new V(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vc(n,new M(r))}if(t instanceof pe)return Vc(n,t._key);throw new V(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vi(t)}.`)}function Il(n,e){if(!Array.isArray(n)||n.length===0)throw new V(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Yh(n,e){const t=function(i,s){for(const a of i)for(const u of a.getFlattenedFilters())if(s.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function q0(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yt extends Qh{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Hi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(A.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Yt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Yt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Yt._jsonSchema={type:de("string",Yt._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class ri extends Yt{data(e={}){return super.data(e)}}class In{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ar(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ri(this._firestore,this._userDataWriter,r.key,r,new ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const d=new ri(i._firestore,i._userDataWriter,u.doc.key,u.doc,new ar(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const d=new ri(i._firestore,i._userDataWriter,u.doc.key,u.doc,new ar(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,p=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:$0(u.type),doc:d,oldIndex:f,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(A.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=In._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
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
 */In._jsonSchemaVersion="firestore/querySnapshot/1.0",In._jsonSchema={type:de("string",In._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};function Ko(n,e){const t=cr(n.firestore,bi),r=A0(n),i=q0(n.converter,e),s=qh(n.firestore);return G0(t,[D0(s,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ut.exists(!1))]).then(()=>r)}function Ns(n,...e){var f,p,_;n=ke(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||bl(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(bl(e[r])){const x=e[r];e[r]=(f=x.next)==null?void 0:f.bind(x),e[r+1]=(p=x.error)==null?void 0:p.bind(x),e[r+2]=(_=x.complete)==null?void 0:_.bind(x)}let s,a,u;if(n instanceof pe)a=cr(n.firestore,bi),u=bo(n._key.path),s={next:x=>{e[r]&&e[r](H0(a,n,x))},error:e[r+1],complete:e[r+2]};else{const x=cr(n,Ut);a=cr(x.firestore,bi),u=x._query;const C=new Kh(a);s={next:P=>{e[r]&&e[r](new In(a,C,x,P))},error:e[r+1],complete:e[r+2]},U0(n._query)}const d=Bh(a);return I0(d,u,i,s)}function G0(n,e){const t=Bh(n);return T0(t,e)}function H0(n,e,t){const r=t.docs.get(e._key),i=new Kh(n);return new Yt(n,i,e._key,r,new ar(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){vp(Dn),ot(new He("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),u=new bi(new Ip(r.getProvider("auth-internal")),new xp(a,r.getProvider("app-check-internal")),Wp(a,i),a);return s={useFetchStreams:t,...s},u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),We(_l,vl,e),We(_l,vl,"esm2020")})();var K0="firebase",Q0="12.12.1";/**
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
 */We(K0,Q0,"app");function Jh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Y0=Jh,Xh=new sn("auth","Firebase",Jh());/**
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
 */const Ti=new Di("@firebase/auth");function J0(n,...e){Ti.logLevel<=H.WARN&&Ti.warn(`Auth (${Dn}): ${n}`,...e)}function ii(n,...e){Ti.logLevel<=H.ERROR&&Ti.error(`Auth (${Dn}): ${n}`,...e)}/**
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
 */function mt(n,...e){throw Qo(n,...e)}function it(n,...e){return Qo(n,...e)}function Zh(n,e,t){const r={...Y0(),[e]:t};return new sn("auth","Firebase",r).create(e,{appName:n.name})}function Jt(n){return Zh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Xh.create(n,...e)}function U(n,e,...t){if(!n)throw Qo(e,...t)}function ct(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ii(e),new Error(e)}function pt(n,e){n||ct(e)}/**
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
 */function so(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function X0(){return Tl()==="http:"||Tl()==="https:"}function Tl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Z0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(X0()||hu()||"connection"in navigator)?navigator.onLine:!0}function e_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Pr{constructor(e,t){this.shortDelay=e,this.longDelay=t,pt(t>e,"Short delay should be less than long delay!"),this.isMobile=Kf()||Jf()}get(){return Z0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yo(n,e){pt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ed{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const t_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const n_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],r_=new Pr(3e4,6e4);function Jo(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Fn(n,e,t,r,i={}){return td(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const u=Er({key:n.config.apiKey,...a}).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:d,...s};return Yf()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&xr(n.emulatorConfig.host)&&(f.credentials="include"),ed.fetch()(await nd(n,n.config.apiHost,t,u),f)})}async function td(n,e,t){n._canInitEmulator=!1;const r={...t_,...e};try{const i=new s_(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Jr(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[d,f]=u.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jr(n,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw Jr(n,"email-already-in-use",a);if(d==="USER_DISABLED")throw Jr(n,"user-disabled",a);const p=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Zh(n,p,f);mt(n,p)}}catch(i){if(i instanceof Qe)throw i;mt(n,"network-request-failed",{message:String(i)})}}async function i_(n,e,t,r,i={}){const s=await Fn(n,e,t,r,i);return"mfaPendingCredential"in s&&mt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function nd(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?Yo(n.config,i):`${n.config.apiScheme}://${i}`;return n_.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class s_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),r_.get())})}}function Jr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=it(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function o_(n,e){return Fn(n,"POST","/v1/accounts:delete",e)}async function Ei(n,e){return Fn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function fr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a_(n,e=!1){const t=ke(n),r=await t.getIdToken(e),i=Xo(r);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fr(Ds(i.auth_time)),issuedAtTime:fr(Ds(i.iat)),expirationTime:fr(Ds(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ds(n){return Number(n)*1e3}function Xo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ii("JWT malformed, contained fewer than 3 sections"),null;try{const i=au(t);return i?JSON.parse(i):(ii("Failed to decode base64 JWT payload"),null)}catch(i){return ii("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function El(n){const e=Xo(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Tr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Qe&&c_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function c_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class l_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class oo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xi(n){var _;const e=n.auth,t=await n.getIdToken(),r=await Tr(n,Ei(e,{idToken:t}));U(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=(_=i.providerUserInfo)!=null&&_.length?rd(i.providerUserInfo):[],a=h_(n.providerData,s),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),f=u?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new oo(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function u_(n){const e=ke(n);await xi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function d_(n,e){const t=await td(n,{},async()=>{const r=Er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await nd(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:u,body:r};return n.emulatorConfig&&xr(n.emulatorConfig.host)&&(d.credentials="include"),ed.fetch()(a,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function f_(n,e){return Fn(n,"POST","/v2/accounts:revokeToken",Jo(n,e))}/**
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
 */class Tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):El(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=El(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await d_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Tn;return r&&(U(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function Tt(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $e{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new l_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new oo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return a_(this,e)}reload(){return u_(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $e({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await xi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(Jt(this.auth));const e=await this.getIdToken();return await Tr(this,o_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,a=t.photoURL??void 0,u=t.tenantId??void 0,d=t._redirectEventId??void 0,f=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:_,emailVerified:x,isAnonymous:C,providerData:P,stsTokenManager:D}=t;U(_&&D,e,"internal-error");const N=Tn.fromJSON(this.name,D);U(typeof _=="string",e,"internal-error"),Tt(r,e.name),Tt(i,e.name),U(typeof x=="boolean",e,"internal-error"),U(typeof C=="boolean",e,"internal-error"),Tt(s,e.name),Tt(a,e.name),Tt(u,e.name),Tt(d,e.name),Tt(f,e.name),Tt(p,e.name);const z=new $e({uid:_,auth:e,email:i,emailVerified:x,displayName:r,isAnonymous:C,photoURL:a,phoneNumber:s,tenantId:u,stsTokenManager:N,createdAt:f,lastLoginAt:p});return P&&Array.isArray(P)&&(z.providerData=P.map($=>({...$}))),d&&(z._redirectEventId=d),z}static async _fromIdTokenResponse(e,t,r=!1){const i=new Tn;i.updateFromServerResponse(t);const s=new $e({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];U(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?rd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new Tn;u.updateFromIdToken(r);const d=new $e({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new oo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(d,f),d}}/**
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
 */const xl=new Map;function lt(n){pt(n instanceof Function,"Expected a class definition");let e=xl.get(n);return e?(pt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xl.set(n,e),e)}/**
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
 */class id{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}id.type="NONE";const Sl=id;/**
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
 */function si(n,e,t){return`firebase:${n}:${e}:${t}`}class En{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=si(this.userKey,i.apiKey,s),this.fullPersistenceKey=si("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ei(this.auth,{idToken:e}).catch(()=>{});return t?$e._fromGetAccountInfoResponse(this.auth,t,e):null}return $e._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new En(lt(Sl),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||lt(Sl);const a=si(r,e.config.apiKey,e.name);let u=null;for(const f of t)try{const p=await f._get(a);if(p){let _;if(typeof p=="string"){const x=await Ei(e,{idToken:p}).catch(()=>{});if(!x)break;_=await $e._fromGetAccountInfoResponse(e,x,p)}else _=$e._fromJSON(e,p);f!==s&&(u=_),s=f;break}}catch{}const d=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!d.length?new En(s,e,r):(s=d[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async f=>{if(f!==s)try{await f._remove(a)}catch{}})),new En(s,e,r))}}/**
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
 */function Al(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ud(e))return"Blackberry";if(hd(e))return"Webos";if(od(e))return"Safari";if((e.includes("chrome/")||ad(e))&&!e.includes("edge/"))return"Chrome";if(ld(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sd(n=Ce()){return/firefox\//i.test(n)}function od(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ad(n=Ce()){return/crios\//i.test(n)}function cd(n=Ce()){return/iemobile/i.test(n)}function ld(n=Ce()){return/android/i.test(n)}function ud(n=Ce()){return/blackberry/i.test(n)}function hd(n=Ce()){return/webos/i.test(n)}function Zo(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function m_(n=Ce()){var e;return Zo(n)&&!!((e=window.navigator)!=null&&e.standalone)}function p_(){return Xf()&&document.documentMode===10}function dd(n=Ce()){return Zo(n)||ld(n)||hd(n)||ud(n)||/windows phone/i.test(n)||cd(n)}/**
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
 */function fd(n,e=[]){let t;switch(n){case"Browser":t=Al(Ce());break;case"Worker":t=`${Al(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Dn}/${r}`}/**
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
 */class g_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,u)=>{try{const d=e(s);a(d)}catch(d){u(d)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function y_(n,e={}){return Fn(n,"GET","/v2/passwordPolicy",Jo(n,e))}/**
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
 */const __=6;class v_{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??__,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class b_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rl(this),this.idTokenSubscription=new Rl(this),this.beforeStateQueue=new g_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=lt(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await En.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ei(this,{idToken:e}),r=await $e._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,u=r==null?void 0:r._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===u)&&(d!=null&&d.user)&&(r=d.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=e_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject(Jt(this));const t=e?ke(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(Jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject(Jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await y_(this),t=new v_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new sn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await f_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&lt(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,r,i);return()=>{a=!0,d()}}else{const d=e.addObserver(t);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&J0(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ea(n){return ke(n)}class Rl{constructor(e){this.auth=e,this.observer=null,this.addObserver=sm(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ta={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function w_(n){ta=n}function I_(n){return ta.loadJS(n)}function T_(){return ta.gapiScript}function E_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function x_(n,e){const t=on(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Dt(s,e??{}))return i;mt(i,"already-initialized")}return t.initialize({options:e})}function S_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(lt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function A_(n,e,t){const r=ea(n);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=md(e),{host:a,port:u}=R_(e),d=u===null?"":`:${u}`,f={url:`${s}//${a}${d}/`},p=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(Dt(f,r.config.emulator)&&Dt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,xr(a)?mu(`${s}//${a}${d}`):C_()}function md(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function R_(n){const e=md(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Cl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Cl(a)}}}function Cl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function C_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class pd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,t){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}/**
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
 */async function xn(n,e){return i_(n,"POST","/v1/accounts:signInWithIdp",Jo(n,e))}/**
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
 */const k_="http://localhost";class tn extends pd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const a=new tn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return xn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,xn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xn(e,t)}buildRequest(){const e={requestUri:k_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Er(t)}return e}}/**
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
 */class gd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nr extends gd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Et extends Nr{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
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
 */class xt extends Nr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return xt.credential(t,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
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
 */class Nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await $e._fromIdTokenResponse(e,r,i),a=kl(r);return new Nn({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=kl(r);return new Nn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function kl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Si extends Qe{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Si.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Si(e,t,r,i)}}function yd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Si._fromErrorAndOperation(n,s,e,r):s})}async function P_(n,e,t=!1){const r=await Tr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Nn._forOperation(n,"link",r)}/**
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
 */async function N_(n,e,t=!1){const{auth:r}=n;if(et(r.app))return Promise.reject(Jt(r));const i="reauthenticate";try{const s=await Tr(n,yd(r,i,e,n),t);U(s.idToken,r,"internal-error");const a=Xo(s.idToken);U(a,r,"internal-error");const{sub:u}=a;return U(n.uid===u,r,"user-mismatch"),Nn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),s}}/**
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
 */async function D_(n,e,t=!1){if(et(n.app))return Promise.reject(Jt(n));const r="signIn",i=await yd(n,r,e),s=await Nn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function V_(n,e,t,r){return ke(n).onIdTokenChanged(e,t,r)}function j_(n,e,t){return ke(n).beforeAuthStateChanged(e,t)}const Ai="__sak";/**
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
 */class _d{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ai,"1"),this.storage.removeItem(Ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const O_=1e3,M_=10;class vd extends _d{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,d)=>{this.notifyListeners(a,d)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);p_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,M_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},O_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vd.type="LOCAL";const L_=vd;/**
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
 */class bd extends _d{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bd.type="SESSION";const wd=bd;/**
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
 */function F_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ki(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async f=>f(t.origin,s)),d=await F_(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ki.receivers=[];/**
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
 */function na(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class U_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,d)=>{const f=na("",20);i.port1.start();const p=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(_){const x=_;if(x.data.eventId===f)switch(x.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(x.data.response);break;default:clearTimeout(p),clearTimeout(s),d(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function st(){return window}function B_(n){st().location.href=n}/**
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
 */function Id(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function W_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function z_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function q_(){return Id()?self:null}/**
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
 */const Td="firebaseLocalStorageDb",$_=1,Ri="firebaseLocalStorage",Ed="fbase_key";class Dr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qi(n,e){return n.transaction([Ri],e?"readwrite":"readonly").objectStore(Ri)}function G_(){const n=indexedDB.deleteDatabase(Td);return new Dr(n).toPromise()}function ao(){const n=indexedDB.open(Td,$_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ri,{keyPath:Ed})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ri)?e(r):(r.close(),await G_(),e(await ao()))})})}async function Pl(n,e,t){const r=Qi(n,!0).put({[Ed]:e,value:t});return new Dr(r).toPromise()}async function H_(n,e){const t=Qi(n,!1).get(e),r=await new Dr(t).toPromise();return r===void 0?null:r.value}function Nl(n,e){const t=Qi(n,!0).delete(e);return new Dr(t).toPromise()}const K_=800,Q_=3;class xd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ao(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Q_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Id()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ki._getInstance(q_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await W_(),!this.activeServiceWorker)return;this.sender=new U_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||z_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ao();return await Pl(e,Ai,"1"),await Nl(e,Ai),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>H_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Nl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qi(i,!1).getAll();return new Dr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),K_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xd.type="LOCAL";const Y_=xd;new Pr(3e4,6e4);/**
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
 */function J_(n,e){return e?lt(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ra extends pd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function X_(n){return D_(n.auth,new ra(n),n.bypassAuthState)}function Z_(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),N_(t,new ra(n),n.bypassAuthState)}async function ev(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),P_(t,new ra(n),n.bypassAuthState)}/**
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
 */class Sd{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(d))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return X_;case"linkViaPopup":case"linkViaRedirect":return ev;case"reauthViaPopup":case"reauthViaRedirect":return Z_;default:mt(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tv=new Pr(2e3,1e4);class vn extends Sd{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=na();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tv.get())};e()}}vn.currentPopupAction=null;/**
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
 */const nv="pendingRedirect",oi=new Map;class rv extends Sd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const r=await iv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}oi.set(this.auth._key(),e)}return this.bypassAuthState||oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iv(n,e){const t=av(e),r=ov(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function sv(n,e){oi.set(n._key(),e)}function ov(n){return lt(n._redirectPersistence)}function av(n){return si(nv,n.config.apiKey,n.name)}async function cv(n,e,t=!1){if(et(n.app))return Promise.reject(Jt(n));const r=ea(n),i=J_(r,e),a=await new rv(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const lv=10*60*1e3;class uv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ad(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(it(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dl(e))}saveEventToCache(e){this.cachedEventUids.add(Dl(e)),this.lastProcessedEventTime=Date.now()}}function Dl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ad({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ad(n);default:return!1}}/**
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
 */async function dv(n,e={}){return Fn(n,"GET","/v1/projects",e)}/**
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
 */const fv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mv=/^https?/;async function pv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dv(n);for(const t of e)try{if(gv(t))return}catch{}mt(n,"unauthorized-domain")}function gv(n){const e=so(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!mv.test(t))return!1;if(fv.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const yv=new Pr(3e4,6e4);function Vl(){const n=st().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _v(n){return new Promise((e,t)=>{var i,s,a;function r(){Vl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vl(),t(it(n,"network-request-failed"))},timeout:yv.get()})}if((s=(i=st().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((a=st().gapi)!=null&&a.load)r();else{const u=E_("iframefcb");return st()[u]=()=>{gapi.load?r():t(it(n,"network-request-failed"))},I_(`${T_()}?onload=${u}`).catch(d=>t(d))}}).catch(e=>{throw ai=null,e})}let ai=null;function vv(n){return ai=ai||_v(n),ai}/**
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
 */const bv=new Pr(5e3,15e3),wv="__/auth/iframe",Iv="emulator/auth/iframe",Tv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ev=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xv(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yo(e,Iv):`https://${n.config.authDomain}/${wv}`,r={apiKey:e.apiKey,appName:n.name,v:Dn},i=Ev.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Er(r).slice(1)}`}async function Sv(n){const e=await vv(n),t=st().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:xv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=it(n,"network-request-failed"),u=st().setTimeout(()=>{s(a)},bv.get());function d(){st().clearTimeout(u),i(r)}r.ping(d).then(d,()=>{s(a)})}))}/**
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
 */const Av={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rv=500,Cv=600,kv="_blank",Pv="http://localhost";class jl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nv(n,e,t,r=Rv,i=Cv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const d={...Av,width:r.toString(),height:i.toString(),top:s,left:a},f=Ce().toLowerCase();t&&(u=ad(f)?kv:t),sd(f)&&(e=e||Pv,d.scrollbars="yes");const p=Object.entries(d).reduce((x,[C,P])=>`${x}${C}=${P},`,"");if(m_(f)&&u!=="_self")return Dv(e||"",u),new jl(null);const _=window.open(e||"",u,p);U(_,n,"popup-blocked");try{_.focus()}catch{}return new jl(_)}function Dv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Vv="__/auth/handler",jv="emulator/auth/handler",Ov=encodeURIComponent("fac");async function Ol(n,e,t,r,i,s){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Dn,eventId:i};if(e instanceof gd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",im(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,_]of Object.entries({}))a[p]=_}if(e instanceof Nr){const p=e.getScopes().filter(_=>_!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const d=await n._getAppCheckToken(),f=d?`#${Ov}=${encodeURIComponent(d)}`:"";return`${Mv(n)}?${Er(u).slice(1)}${f}`}function Mv({config:n}){return n.emulator?Yo(n,jv):`https://${n.authDomain}/${Vv}`}/**
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
 */const Vs="webStorageSupport";class Lv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wd,this._completeRedirectFn=cv,this._overrideRedirectResult=sv}async _openPopup(e,t,r,i){var a;pt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Ol(e,t,r,so(),i);return Nv(e,s,na())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ol(e,t,r,so(),i);return B_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(pt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Sv(e),r=new uv(e);return t.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vs,{type:Vs},i=>{var a;const s=(a=i==null?void 0:i[0])==null?void 0:a[Vs];s!==void 0&&t(!!s),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=pv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dd()||od()||Zo()}}const Fv=Lv;var Ml="@firebase/auth",Ll="1.13.0";/**
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
 */class Uv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Bv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wv(n){ot(new He("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fd(n)},f=new b_(r,i,s,d);return S_(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ot(new He("auth-internal",e=>{const t=ea(e.getProvider("auth").getImmediate());return(r=>new Uv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(Ml,Ll,Bv(n)),We(Ml,Ll,"esm2020")}/**
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
 */const zv=5*60,qv=uu("authIdTokenMaxAge")||zv;let Fl=null;const $v=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>qv)return;const i=t==null?void 0:t.token;Fl!==i&&(Fl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gv(n=ho()){const e=on(n,"auth");if(e.isInitialized())return e.getImmediate();const t=x_(n,{popupRedirectResolver:Fv,persistence:[Y_,L_,wd]}),r=uu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=$v(s.toString());j_(t,a,()=>a(t.currentUser)),V_(t,u=>a(u))}}const i=cu("auth");return i&&A_(t,`http://${i}`),t}function Hv(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}w_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=it("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Hv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wv("Browser");const Rd="@firebase/installations",ia="0.6.21";/**
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
 */const Cd=1e4,kd=`w:${ia}`,Pd="FIS_v2",Kv="https://firebaseinstallations.googleapis.com/v1",Qv=60*60*1e3,Yv="installations",Jv="Installations";/**
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
 */const Xv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},nn=new sn(Yv,Jv,Xv);function Nd(n){return n instanceof Qe&&n.code.includes("request-failed")}/**
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
 */function Dd({projectId:n}){return`${Kv}/projects/${n}/installations`}function Vd(n){return{token:n.token,requestStatus:2,expiresIn:eb(n.expiresIn),creationTime:Date.now()}}async function jd(n,e){const r=(await e.json()).error;return nn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Od({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Zv(n,{refreshToken:e}){const t=Od(n);return t.append("Authorization",tb(e)),t}async function Md(n){const e=await n();return e.status>=500&&e.status<600?n():e}function eb(n){return Number(n.replace("s","000"))}function tb(n){return`${Pd} ${n}`}/**
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
 */async function nb({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Dd(n),i=Od(n),s=e.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:t,authVersion:Pd,appId:n.appId,sdkVersion:kd},u={method:"POST",headers:i,body:JSON.stringify(a)},d=await Md(()=>fetch(r,u));if(d.ok){const f=await d.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:Vd(f.authToken)}}else throw await jd("Create Installation",d)}/**
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
 */function Ld(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function rb(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ib=/^[cdef][\w-]{21}$/,co="";function sb(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=ob(n);return ib.test(t)?t:co}catch{return co}}function ob(n){return rb(n).substr(0,22)}/**
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
 */const Fd=new Map;function Ud(n,e){const t=Yi(n);Bd(t,e),ab(t,e)}function Bd(n,e){const t=Fd.get(n);if(t)for(const r of t)r(e)}function ab(n,e){const t=cb();t&&t.postMessage({key:n,fid:e}),lb()}let Kt=null;function cb(){return!Kt&&"BroadcastChannel"in self&&(Kt=new BroadcastChannel("[Firebase] FID Change"),Kt.onmessage=n=>{Bd(n.data.key,n.data.fid)}),Kt}function lb(){Fd.size===0&&Kt&&(Kt.close(),Kt=null)}/**
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
 */const ub="firebase-installations-database",hb=1,rn="firebase-installations-store";let js=null;function sa(){return js||(js=yu(ub,hb,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(rn)}}})),js}async function Ci(n,e){const t=Yi(n),i=(await sa()).transaction(rn,"readwrite"),s=i.objectStore(rn),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&Ud(n,e.fid),e}async function Wd(n){const e=Yi(n),r=(await sa()).transaction(rn,"readwrite");await r.objectStore(rn).delete(e),await r.done}async function Ji(n,e){const t=Yi(n),i=(await sa()).transaction(rn,"readwrite"),s=i.objectStore(rn),a=await s.get(t),u=e(a);return u===void 0?await s.delete(t):await s.put(u,t),await i.done,u&&(!a||a.fid!==u.fid)&&Ud(n,u.fid),u}/**
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
 */async function oa(n){let e;const t=await Ji(n.appConfig,r=>{const i=db(r),s=fb(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===co?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function db(n){const e=n||{fid:sb(),registrationStatus:0};return zd(e)}function fb(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(nn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=mb(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pb(n)}:{installationEntry:e}}async function mb(n,e){try{const t=await nb(n,e);return Ci(n.appConfig,t)}catch(t){throw Nd(t)&&t.customData.serverCode===409?await Wd(n.appConfig):await Ci(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function pb(n){let e=await Ul(n.appConfig);for(;e.registrationStatus===1;)await Ld(100),e=await Ul(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await oa(n);return r||t}return e}function Ul(n){return Ji(n,e=>{if(!e)throw nn.create("installation-not-found");return zd(e)})}function zd(n){return gb(n)?{fid:n.fid,registrationStatus:0}:n}function gb(n){return n.registrationStatus===1&&n.registrationTime+Cd<Date.now()}/**
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
 */async function yb({appConfig:n,heartbeatServiceProvider:e},t){const r=_b(n,t),i=Zv(n,t),s=e.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:kd,appId:n.appId}},u={method:"POST",headers:i,body:JSON.stringify(a)},d=await Md(()=>fetch(r,u));if(d.ok){const f=await d.json();return Vd(f)}else throw await jd("Generate Auth Token",d)}function _b(n,{fid:e}){return`${Dd(n)}/${e}/authTokens:generate`}/**
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
 */async function aa(n,e=!1){let t;const r=await Ji(n.appConfig,s=>{if(!qd(s))throw nn.create("not-registered");const a=s.authToken;if(!e&&wb(a))return s;if(a.requestStatus===1)return t=vb(n,e),s;{if(!navigator.onLine)throw nn.create("app-offline");const u=Tb(s);return t=bb(n,u),u}});return t?await t:r.authToken}async function vb(n,e){let t=await Bl(n.appConfig);for(;t.authToken.requestStatus===1;)await Ld(100),t=await Bl(n.appConfig);const r=t.authToken;return r.requestStatus===0?aa(n,e):r}function Bl(n){return Ji(n,e=>{if(!qd(e))throw nn.create("not-registered");const t=e.authToken;return Eb(t)?{...e,authToken:{requestStatus:0}}:e})}async function bb(n,e){try{const t=await yb(n,e),r={...e,authToken:t};return await Ci(n.appConfig,r),t}catch(t){if(Nd(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Wd(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ci(n.appConfig,r)}throw t}}function qd(n){return n!==void 0&&n.registrationStatus===2}function wb(n){return n.requestStatus===2&&!Ib(n)}function Ib(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Qv}function Tb(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Eb(n){return n.requestStatus===1&&n.requestTime+Cd<Date.now()}/**
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
 */async function xb(n){const e=n,{installationEntry:t,registrationPromise:r}=await oa(e);return r?r.catch(console.error):aa(e).catch(console.error),t.fid}/**
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
 */async function Sb(n,e=!1){const t=n;return await Ab(t),(await aa(t,e)).token}async function Ab(n){const{registrationPromise:e}=await oa(n);e&&await e}/**
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
 */function Rb(n){if(!n||!n.options)throw Os("App Configuration");if(!n.name)throw Os("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Os(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Os(n){return nn.create("missing-app-config-values",{valueName:n})}/**
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
 */const $d="installations",Cb="installations-internal",kb=n=>{const e=n.getProvider("app").getImmediate(),t=Rb(e),r=on(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Pb=n=>{const e=n.getProvider("app").getImmediate(),t=on(e,$d).getImmediate();return{getId:()=>xb(t),getToken:i=>Sb(t,i)}};function Nb(){ot(new He($d,kb,"PUBLIC")),ot(new He(Cb,Pb,"PRIVATE"))}Nb();We(Rd,ia);We(Rd,ia,"esm2020");/**
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
 */const ki="analytics",Db="firebase_id",Vb="origin",jb=60*1e3,Ob="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ca="https://www.googletagmanager.com/gtag/js";/**
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
 */const De=new Di("@firebase/analytics");/**
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
 */const Mb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Le=new sn("analytics","Analytics",Mb);/**
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
 */function Lb(n){if(!n.startsWith(ca)){const e=Le.create("invalid-gtag-resource",{gtagURL:n});return De.warn(e.message),""}return n}function Gd(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Fb(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Ub(n,e){const t=Fb("firebase-js-sdk-policy",{createScriptURL:Lb}),r=document.createElement("script"),i=`${ca}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Bb(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Wb(n,e,t,r,i,s){const a=r[i];try{if(a)await e[a];else{const d=(await Gd(t)).find(f=>f.measurementId===i);d&&await e[d.appId]}}catch(u){De.error(u)}n("config",i,s)}async function zb(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const u=await Gd(t);for(const d of a){const f=u.find(_=>_.measurementId===d),p=f&&e[f.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){De.error(s)}}function qb(n,e,t,r){async function i(s,...a){try{if(s==="event"){const[u,d]=a;await zb(n,e,t,u,d)}else if(s==="config"){const[u,d]=a;await Wb(n,e,t,r,u,d)}else if(s==="consent"){const[u,d]=a;n("consent",u,d)}else if(s==="get"){const[u,d,f]=a;n("get",u,d,f)}else if(s==="set"){const[u]=a;n("set",u)}else n(s,...a)}catch(u){De.error(u)}}return i}function $b(n,e,t,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=qb(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function Gb(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ca)&&t.src.includes(n))return t;return null}/**
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
 */const Hb=30,Kb=1e3;class Qb{constructor(e={},t=Kb){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Hd=new Qb;function Yb(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Jb(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:Yb(t)},i=Ob.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let u="";try{const d=await s.json();(a=d.error)!=null&&a.message&&(u=d.error.message)}catch{}throw Le.create("config-fetch-failed",{httpStatus:s.status,responseMessage:u})}return s.json()}async function Xb(n,e=Hd,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw Le.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Le.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new tw;return setTimeout(async()=>{u.abort()},jb),Kd({appId:r,apiKey:i,measurementId:s},a,u,e)}async function Kd(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Hd){var u;const{appId:s,measurementId:a}=n;try{await Zb(r,e)}catch(d){if(a)return De.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw d}try{const d=await Jb(n);return i.deleteThrottleMetadata(s),d}catch(d){const f=d;if(!ew(f)){if(i.deleteThrottleMetadata(s),a)return De.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:s,measurementId:a};throw d}const p=Number((u=f==null?void 0:f.customData)==null?void 0:u.httpStatus)===503?fc(t,i.intervalMillis,Hb):fc(t,i.intervalMillis),_={throttleEndTimeMillis:Date.now()+p,backoffCount:t+1};return i.setThrottleMetadata(s,_),De.debug(`Calling attemptFetch again in ${p} millis`),Kd(n,_,r,i)}}function Zb(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(Le.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ew(n){if(!(n instanceof Qe)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class tw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function nw(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,a={...r,send_to:s};n("event",t,a)}}async function rw(n,e,t,r){if(r&&r.global){const i={};for(const s of Object.keys(t))i[`user_properties.${s}`]=t[s];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}/**
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
 */async function iw(){if(du())try{await fu()}catch(n){return De.warn(Le.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return De.warn(Le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sw(n,e,t,r,i,s,a){const u=Xb(n);u.then(x=>{t[x.measurementId]=x.appId,n.options.measurementId&&x.measurementId!==n.options.measurementId&&De.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>De.error(x)),e.push(u);const d=iw().then(x=>{if(x)return r.getId()}),[f,p]=await Promise.all([u,d]);Gb(s)||Ub(s,f.measurementId),i("js",new Date);const _=(a==null?void 0:a.config)??{};return _[Vb]="firebase",_.update=!0,p!=null&&(_[Db]=p),i("config",f.measurementId,_),f.measurementId}/**
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
 */class ow{constructor(e){this.app=e}_delete(){return delete Sn[this.app.options.appId],Promise.resolve()}}let Sn={},Wl=[];const zl={};let Ms="dataLayer",aw="gtag",ql,la,$l=!1;function cw(){const n=[];if(hu()&&n.push("This is a browser extension environment."),em()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Le.create("invalid-analytics-context",{errorInfo:e});De.warn(t.message)}}function lw(n,e,t){cw();const r=n.options.appId;if(!r)throw Le.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)De.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Le.create("no-api-key");if(Sn[r]!=null)throw Le.create("already-exists",{id:r});if(!$l){Bb(Ms);const{wrappedGtag:s,gtagCore:a}=$b(Sn,Wl,zl,Ms,aw);la=s,ql=a,$l=!0}return Sn[r]=sw(n,Wl,zl,e,ql,Ms,t),new ow(n)}function uw(n=ho()){n=ke(n);const e=on(n,ki);return e.isInitialized()?e.getImmediate():hw(n)}function hw(n,e={}){const t=on(n,ki);if(t.isInitialized()){const i=t.getImmediate();if(Dt(e,t.getOptions()))return i;throw Le.create("already-initialized")}return t.initialize({options:e})}function dw(n,e,t){n=ke(n),rw(la,Sn[n.app.options.appId],e,t).catch(r=>De.error(r))}function fw(n,e,t,r){n=ke(n),nw(la,Sn[n.app.options.appId],e,t,r).catch(i=>De.error(i))}const Gl="@firebase/analytics",Hl="0.10.21";function mw(){ot(new He(ki,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return lw(r,i,t)},"PUBLIC")),ot(new He("analytics-internal",n,"PRIVATE")),We(Gl,Hl),We(Gl,Hl,"esm2020");function n(e){try{const t=e.getProvider(ki).getImmediate();return{logEvent:(r,i,s)=>fw(t,r,i,s),setUserProperties:(r,i)=>dw(t,r,i)}}catch(t){throw Le.create("interop-component-reg-failed",{reason:t})}}}mw();const Kl={apiKey:"AIzaSyCoFJWEc8z1Z-kddKR8T-QggAFCdm4Y7wI",authDomain:"daywise-ays8t.firebaseapp.com",projectId:"daywise-ays8t",storageBucket:"daywise-ays8t.firebasestorage.app",messagingSenderId:"690549644365",appId:"1:690549644365:web:d895858fbde5497b1c5004",measurementId:void 0};let rr,Ql,Me,pw;try{Kl.apiKey||console.warn("Firebase Hub: Missing VITE_FIREBASE_API_KEY. Initializing in offline simulation mode."),rr=_u(Kl),Ql=Gv(rr),Me=R0(rr),typeof window<"u"&&(pw=uw(rr))}catch{console.error("Firebase Hub: Critical Initialization Error. Forcing local fallback."),rr={},Ql={},Me={}}const gw=({isOpen:n,onClose:e,initialPhone:t="",initialBusinessName:r=""})=>{const[i,s]=O.useState(1),[a,u]=O.useState(r),[d,f]=O.useState("Fashion & Apparel"),[p,_]=O.useState("#f59e0b"),[x,C]=O.useState(t),[P,D]=O.useState("MTN MoMo"),[N,z]=O.useState(""),[$,J]=O.useState("Signature Collection Item"),[ae,Z]=O.useState("150"),[ie,w]=O.useState(0),[y,v]=O.useState("Initializing WaaS template..."),[I,b]=O.useState(!1),T=[{name:"Luxe Gold",hex:"#f59e0b"},{name:"Cyan Glow",hex:"#00ffff"},{name:"Emerald Green",hex:"#10b981"},{name:"Velvet Burgundy",hex:"#9f1239"},{name:"Royal Blue",hex:"#2563eb"}];if(O.useEffect(()=>{if(i===3&&!I){w(0),b(!1);const F=setInterval(()=>{w(Ee=>{if(Ee>=100)return clearInterval(F),b(!0),100;const be=Ee+5;return be<30?v("Configuring SSL domain & mobile layout..."):be<65?v(`Wiring ${P} payment links...`):be<90?v("Connecting automated WhatsApp lead engine..."):v("Website Generated Successfully"),be})},150);return()=>clearInterval(F)}},[i,I,P]),!n)return null;const g=F=>{if(F.preventDefault(),!a.trim()){alert("Please enter your business name.");return}s(2)},fe=async()=>{try{Me&&(await Ko(_n(Me,"onboarding_submissions"),{businessName:a.trim(),industry:d,primaryColor:p,whatsappNumber:x.trim(),momoNetwork:P,momoNumber:N.trim()||x.trim(),itemTitle:$.trim(),itemPrice:parseFloat(ae)||0,status:"pending_claim",createdAt:Ii(),url:typeof window<"u"?window.location.href:"",userAgent:typeof navigator<"u"?navigator.userAgent:""}),console.log("✅ Merchant flyer lead successfully saved to Firestore (onboarding_submissions)."))}catch(F){console.warn("Firestore submission notice (running in offline/demo mode):",F)}},ze=F=>{if(F.preventDefault(),!x.trim()){alert("Please enter your WhatsApp phone number.");return}fe(),s(3)},ve=encodeURIComponent(x.replace(/\D/g,"")),q=encodeURIComponent(a.trim()),Ye=encodeURIComponent($.trim()),Fe=encodeURIComponent(ae.trim()),gt=`https://wa.me/233${ve}?text=Hi%20${q}%2C%20I'd%20like%20to%20order%20${Ye}%20(GH%E2%82%B5${Fe}).`;return c.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(9, 11, 16, 0.88)",backdropFilter:"blur(16px)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"},children:c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",borderRadius:"24px",maxWidth:"680px",width:"100%",maxHeight:"90vh",overflowY:"auto",padding:"2.5rem 2rem",position:"relative",boxShadow:"0 25px 60px rgba(0,0,0,0.8)"},children:[c.jsx("button",{onClick:e,style:{position:"absolute",top:"1.2rem",right:"1.5rem",background:"rgba(255,255,255,0.08)",border:"none",color:"var(--text-main)",fontSize:"1.2rem",width:"36px",height:"36px",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"}),c.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[c.jsxs("span",{style:{background:"rgba(0, 255, 255, 0.1)",border:"1px solid var(--cyan-glow)",color:"var(--cyan-glow)",padding:"0.35rem 1.2rem",borderRadius:"50px",fontSize:"0.78rem",fontWeight:800,letterSpacing:"1.5px",textTransform:"uppercase"},children:["INSTANT DIGITAL FLYER BUILDER • STEP ",i," OF 3"]}),c.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"center",marginTop:"1.2rem"},children:[c.jsx("div",{style:{height:"6px",width:"30%",borderRadius:"4px",background:i>=1?"var(--cyan-glow)":"rgba(255,255,255,0.1)"}}),c.jsx("div",{style:{height:"6px",width:"30%",borderRadius:"4px",background:i>=2?"var(--cyan-glow)":"rgba(255,255,255,0.1)"}}),c.jsx("div",{style:{height:"6px",width:"30%",borderRadius:"4px",background:i>=3?"var(--cyan-glow)":"rgba(255,255,255,0.1)"}})]})]}),i===1&&c.jsxs("form",{onSubmit:g,children:[c.jsxs("h2",{style:{fontSize:"1.8rem",fontWeight:800,marginBottom:"0.5rem"},children:["Tell Us About Your ",c.jsx("span",{className:"neon-text",children:"Business"})]}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",marginBottom:"1.8rem"},children:"No technical or design skills needed. Fill in 3 simple details."}),c.jsxs("div",{style:{marginBottom:"1.4rem"},children:[c.jsxs("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.9rem",fontWeight:700,marginBottom:"0.5rem"},children:["Business Name ",c.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),c.jsx("input",{type:"text",placeholder:"e.g. Ama's Kente Boutique, Accra Stone Crafts...",value:a,onChange:F=>u(F.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none"},required:!0})]}),c.jsxs("div",{style:{marginBottom:"1.4rem"},children:[c.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.9rem",fontWeight:700,marginBottom:"0.5rem"},children:"Industry Category"}),c.jsxs("select",{value:d,onChange:F=>f(F.target.value),style:{width:"100%",background:"#10151C",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none"},children:[c.jsx("option",{value:"Fashion & Apparel",children:"Fashion & Apparel"}),c.jsx("option",{value:"Stone Cladding & Construction",children:"Stone Cladding & Construction"}),c.jsx("option",{value:"Food, Spices & Agriculture",children:"Food, Spices & Agriculture"}),c.jsx("option",{value:"Beauty, Hair & Cosmetics",children:"Beauty, Hair & Cosmetics"}),c.jsx("option",{value:"Artisan Services & Susu",children:"Artisan Services & Susu"})]})]}),c.jsxs("div",{style:{marginBottom:"2rem"},children:[c.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.9rem",fontWeight:700,marginBottom:"0.8rem"},children:"Pick Primary Brand Color"}),c.jsx("div",{style:{display:"flex",gap:"0.8rem",flexWrap:"wrap"},children:T.map(F=>c.jsx("button",{type:"button",onClick:()=>_(F.hex),style:{background:F.hex,border:p===F.hex?"3px solid #ffffff":"1px solid transparent",width:"42px",height:"42px",borderRadius:"50%",cursor:"pointer",boxShadow:p===F.hex?`0 0 15px ${F.hex}`:"none",transition:"transform 0.2s"},title:F.name},F.hex))})]}),c.jsx("button",{type:"submit",className:"neon-btn neon-border",style:{width:"100%",padding:"0.95rem",fontSize:"1rem",fontWeight:800,cursor:"pointer"},children:"Continue to Step 2 ➔"})]}),i===2&&c.jsxs("form",{onSubmit:ze,children:[c.jsxs("h2",{style:{fontSize:"1.8rem",fontWeight:800,marginBottom:"0.5rem"},children:["Connect ",c.jsx("span",{className:"neon-text",children:"WhatsApp & MoMo"})]}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",marginBottom:"1.8rem"},children:"Where should customer orders and Mobile Money payments be routed?"}),c.jsxs("div",{style:{marginBottom:"1.4rem"},children:[c.jsxs("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.9rem",fontWeight:700,marginBottom:"0.5rem"},children:["WhatsApp Business Phone Number ",c.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),c.jsx("input",{type:"text",placeholder:"e.g. 024 123 4567 or 054 000 1122",value:x,onChange:F=>C(F.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none"},required:!0})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"1rem",marginBottom:"1.4rem"},children:[c.jsxs("div",{children:[c.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.85rem",fontWeight:700,marginBottom:"0.5rem"},children:"MoMo Network"}),c.jsxs("select",{value:P,onChange:F=>D(F.target.value),style:{width:"100%",background:"#10151C",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 0.8rem",borderRadius:"10px",fontSize:"0.85rem",outline:"none"},children:[c.jsx("option",{value:"MTN MoMo",children:"MTN MoMo"}),c.jsx("option",{value:"Telecel Cash",children:"Telecel Cash"}),c.jsx("option",{value:"AT Money",children:"AT Money"})]})]}),c.jsxs("div",{children:[c.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.85rem",fontWeight:700,marginBottom:"0.5rem"},children:"MoMo Payment Phone Number"}),c.jsx("input",{type:"text",placeholder:"e.g. 054 000 1122",value:N,onChange:F=>z(F.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none"}})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"1rem",marginBottom:"2rem"},children:[c.jsxs("div",{children:[c.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.85rem",fontWeight:700,marginBottom:"0.5rem"},children:"Sample Item / Service Name"}),c.jsx("input",{type:"text",value:$,onChange:F=>J(F.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none"}})]}),c.jsxs("div",{children:[c.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.85rem",fontWeight:700,marginBottom:"0.5rem"},children:"Price (GH₵)"}),c.jsx("input",{type:"number",value:ae,onChange:F=>Z(F.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none"}})]})]}),c.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[c.jsx("button",{type:"button",onClick:()=>s(1),style:{background:"rgba(255,255,255,0.08)",color:"var(--text-main)",border:"none",padding:"0.95rem 1.5rem",borderRadius:"100px",fontWeight:700,cursor:"pointer"},children:"◀ Back"}),c.jsx("button",{type:"submit",className:"neon-btn neon-border",style:{flexGrow:1,padding:"0.95rem",fontSize:"1rem",fontWeight:800,cursor:"pointer"},children:"Generate Website in 30 Seconds ➔"})]})]}),i===3&&c.jsx("div",{children:I?c.jsxs("div",{children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:"1.5rem"},children:[c.jsx("span",{style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid #10b981",color:"#10b981",padding:"0.35rem 1.2rem",borderRadius:"20px",fontWeight:700,fontSize:"0.78rem",letterSpacing:"0.5px"},children:"WEBSITE GENERATED SUCCESSFULLY"}),c.jsx("h2",{style:{fontSize:"1.8rem",fontWeight:900,marginTop:"0.8rem",color:"#fff"},children:a}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"Mobile-optimized starter website ready for instant WhatsApp lead routing."})]}),c.jsxs("div",{style:{border:`2px solid ${p}`,borderRadius:"20px",background:"#0d1117",padding:"1.5rem",maxWidth:"380px",margin:"0 auto 2rem",boxShadow:`0 10px 30px ${p}33`,textAlign:"center"},children:[c.jsxs("div",{style:{borderBottom:"1px solid rgba(255,255,255,0.1)",paddingBottom:"1rem",marginBottom:"1rem"},children:[c.jsx("div",{style:{fontSize:"1.3rem",fontWeight:900,color:p,textTransform:"uppercase"},children:a}),c.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)",letterSpacing:"1px"},children:d})]}),c.jsxs("div",{style:{background:"rgba(255,255,255,0.04)",borderRadius:"12px",padding:"1rem",marginBottom:"1rem"},children:[c.jsx("div",{style:{fontSize:"1.1rem",fontWeight:800,color:"#fff"},children:$}),c.jsxs("div",{style:{fontSize:"1.4rem",fontWeight:900,color:p,margin:"0.4rem 0"},children:["GH₵ ",ae]}),c.jsxs("div",{style:{fontSize:"0.78rem",color:"#ffcc00"},children:["Pay via ",P," (",N||x,")"]})]}),c.jsx("a",{href:gt,target:"_blank",rel:"noopener noreferrer",style:{background:"#10b981",color:"#07090E",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.4rem",padding:"0.75rem 1.4rem",borderRadius:"8px",fontWeight:800,fontSize:"0.88rem"},children:c.jsx("span",{children:"Order via WhatsApp"})})]}),c.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[c.jsx("a",{href:`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I%20just%20generated%20a%20starter%20website%20for%20"${encodeURIComponent(a)}"%20and%20I'd%20like%20to%20claim%20it.`,target:"_blank",rel:"noopener noreferrer",className:"neon-btn",style:{textDecoration:"none",padding:"0.85rem 1.8rem",fontSize:"0.9rem",fontWeight:800,background:"var(--cyan-glow)",color:"#07090E"},children:"Claim My Website on Kone Digital ➔"}),c.jsx("button",{onClick:()=>s(1),style:{background:"rgba(255,255,255,0.06)",color:"var(--text-muted)",border:"1px solid rgba(255,255,255,0.1)",padding:"0.85rem 1.5rem",borderRadius:"8px",fontWeight:600,cursor:"pointer"},children:"Create Another Flyer"})]})]}):c.jsxs("div",{style:{textAlign:"center",padding:"2rem 1rem"},children:[c.jsx("div",{style:{width:"48px",height:"48px",margin:"0 auto 1.5rem",borderRadius:"50%",border:"3px solid rgba(0,255,255,0.2)",borderTopColor:"var(--cyan-glow)",animation:"spin 1s linear infinite"}}),c.jsxs("h2",{style:{fontSize:"1.8rem",fontWeight:800,marginBottom:"0.8rem"},children:["Generating ",c.jsx("span",{className:"neon-text",children:a})]}),c.jsx("p",{style:{color:"var(--cyan-glow)",fontSize:"1rem",fontWeight:700,marginBottom:"1.5rem"},children:y}),c.jsx("div",{style:{background:"rgba(255,255,255,0.08)",height:"12px",borderRadius:"10px",overflow:"hidden",maxWidth:"450px",margin:"0 auto 1rem"},children:c.jsx("div",{style:{width:`${ie}%`,height:"100%",background:"linear-gradient(90deg, var(--cyan-glow), var(--gold-accent))",transition:"width 0.2s ease"}})}),c.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem"},children:[ie,"% Completed"]})]})})]})})},Yl=({onOpenWizard:n})=>{const[e,t]=O.useState("whatsapp"),[r,i]=O.useState("0241234567"),[s,a]=O.useState("Hi! I'd like to place an order from your website catalog."),[u,d]=O.useState(!1),[f,p]=O.useState("Accra Modern Boutique"),[_,x]=O.useState("Kwame Mensah"),[C,P]=O.useState("Handmade Kente Blazer"),[D,N]=O.useState("450"),[z,$]=O.useState("MTN MoMo: 0540001122"),[J,ae]=O.useState("myoldwebsite.com"),[Z,ie]=O.useState(!1),[w,y]=O.useState(!1),I=`https://wa.me/233${r.replace(/\D/g,"")}?text=${encodeURIComponent(s)}`,b=()=>{navigator.clipboard.writeText(I),d(!0),setTimeout(()=>d(!1),2e3)},T=g=>{g.preventDefault(),ie(!0),y(!1),setTimeout(()=>{ie(!1),y(!0)},1800)};return c.jsxs("section",{className:"free-tools-section",id:"tools",style:{padding:"4rem 1rem",maxWidth:"1100px",margin:"0 auto"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[c.jsx("span",{style:{background:"rgba(0, 255, 255, 0.08)",border:"1px solid var(--border-cyan)",color:"var(--cyan-glow)",padding:"0.35rem 1.2rem",borderRadius:"50px",fontSize:"0.78rem",fontWeight:700,letterSpacing:"1.2px",textTransform:"uppercase",display:"inline-block",marginBottom:"1rem"},children:"FREE UTILITY TOOLS"}),c.jsxs("h2",{style:{fontSize:"clamp(1.8rem, 4vw, 2.6rem)",fontWeight:900},children:["Digital Commerce Tools for ",c.jsx("span",{className:"neon-text",children:"African Merchants"})]}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",marginTop:"0.5rem",maxWidth:"650px",margin:"0.5rem auto 0"},children:"Free standalone utilities to streamline your WhatsApp customer communications and Mobile Money payment records."}),c.jsxs("div",{style:{display:"flex",gap:"0.6rem",justifyContent:"center",flexWrap:"wrap",marginTop:"2rem"},children:[c.jsx("button",{onClick:()=>t("whatsapp"),style:{background:e==="whatsapp"?"rgba(255, 255, 255, 0.12)":"var(--bg-surface)",color:e==="whatsapp"?"#fff":"var(--text-muted)",border:"1px solid "+(e==="whatsapp"?"rgba(255, 255, 255, 0.25)":"var(--border-subtle)"),padding:"0.6rem 1.4rem",borderRadius:"8px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"all 0.2s"},children:"WhatsApp Link Maker"}),c.jsx("button",{onClick:()=>t("invoice"),style:{background:e==="invoice"?"rgba(255, 255, 255, 0.12)":"var(--bg-surface)",color:e==="invoice"?"#fff":"var(--text-muted)",border:"1px solid "+(e==="invoice"?"rgba(255, 255, 255, 0.25)":"var(--border-subtle)"),padding:"0.6rem 1.4rem",borderRadius:"8px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"all 0.2s"},children:"MoMo Invoice Generator"}),c.jsx("button",{onClick:()=>t("speed"),style:{background:e==="speed"?"rgba(255, 255, 255, 0.12)":"var(--bg-surface)",color:e==="speed"?"#fff":"var(--text-muted)",border:"1px solid "+(e==="speed"?"rgba(255, 255, 255, 0.25)":"var(--border-subtle)"),padding:"0.6rem 1.4rem",borderRadius:"8px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"all 0.2s"},children:"Mobile Speed Auditor"})]})]}),c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",borderRadius:"20px",padding:"clamp(1.4rem, 3vw, 2.5rem) clamp(1rem, 2.5vw, 2rem)",boxShadow:"0 20px 50px rgba(0,0,0,0.5)",minHeight:"400px"},children:[e==="whatsapp"&&c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 280px), 1fr))",gap:"2rem",alignItems:"center"},children:[c.jsxs("div",{children:[c.jsx("h3",{style:{fontSize:"1.3rem",color:"#fff",fontWeight:800,marginBottom:"0.5rem"},children:"WhatsApp Order Link Maker"}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"1.5rem"},children:"Generate instant click-to-chat links with custom greetings for your Instagram bio, TikTok, or posters."}),c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{htmlFor:"wa-phone-input",style:{display:"block",fontSize:"0.85rem",fontWeight:700,marginBottom:"0.4rem",color:"var(--text-main)"},children:"WhatsApp Phone Number (Ghana)"}),c.jsx("input",{id:"wa-phone-input","aria-label":"WhatsApp Phone Number",type:"text",value:r,onChange:g=>i(g.target.value),placeholder:"e.g. 0241234567",style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.75rem 1rem",borderRadius:"8px",fontSize:"0.92rem",outline:"none"}})]}),c.jsxs("div",{style:{marginBottom:"1.5rem"},children:[c.jsx("label",{htmlFor:"wa-message-textarea",style:{display:"block",fontSize:"0.85rem",fontWeight:700,marginBottom:"0.4rem",color:"var(--text-main)"},children:"Pre-filled Greeting / Order Message"}),c.jsx("textarea",{id:"wa-message-textarea","aria-label":"Pre-filled Greeting or Order Message",value:s,onChange:g=>a(g.target.value),rows:3,style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.75rem 1rem",borderRadius:"8px",fontSize:"0.92rem",outline:"none",resize:"none"}})]}),c.jsxs("div",{style:{display:"flex",gap:"0.8rem",flexWrap:"wrap"},children:[c.jsx("button",{onClick:b,style:{background:u?"#10b981":"#25d366",color:"#07090E",border:"none",padding:"0.65rem 1.4rem",borderRadius:"8px",fontWeight:800,fontSize:"0.88rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:u?"Link Copied to Clipboard":"Copy WhatsApp Link"}),c.jsx("a",{href:I,target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"var(--text-main)",padding:"0.65rem 1.4rem",borderRadius:"8px",fontWeight:700,fontSize:"0.88rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:"Test Link ➔"})]})]}),c.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"16px",padding:"1.5rem 1.2rem",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700,letterSpacing:"1px",marginBottom:"0.8rem"},children:"YOUR GENERATED WHATSAPP URL"}),c.jsx("div",{style:{background:"rgba(255,255,255,0.04)",padding:"0.8rem",borderRadius:"8px",wordBreak:"break-all",fontFamily:"monospace",fontSize:"0.82rem",color:"#25d366",marginBottom:"1.5rem"},children:I}),c.jsxs("div",{style:{background:"rgba(0, 255, 255, 0.05)",border:"1px solid rgba(0, 255, 255, 0.2)",borderRadius:"12px",padding:"1.2rem",marginTop:"1rem"},children:[c.jsx("div",{style:{fontSize:"1rem",fontWeight:800,color:"#fff",marginBottom:"0.4rem"},children:"Need a Full Website Instead of Just a Link?"}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.82rem",marginBottom:"1rem",lineHeight:1.5},children:"Turn this WhatsApp number into a high-converting digital storefront with automated MoMo checkout in 30 seconds."}),c.jsx("button",{onClick:()=>n({phone:r}),className:"neon-btn",style:{padding:"0.65rem 1.4rem",fontSize:"0.85rem",fontWeight:800,cursor:"pointer",background:"var(--cyan-glow)",color:"#07090E",width:"100%"},children:"Generate Storefront ➔"})]})]})]}),e==="invoice"&&c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 280px), 1fr))",gap:"2rem"},children:[c.jsxs("div",{children:[c.jsx("h3",{style:{fontSize:"1.3rem",color:"#fff",fontWeight:800,marginBottom:"0.5rem"},children:"MoMo Business Invoice Generator"}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"1.5rem"},children:"Generate clean, shareable digital receipts for clients with embedded Mobile Money payment prompts."}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",gap:"0.8rem",marginBottom:"1rem"},children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"inv-biz-input",style:{display:"block",fontSize:"0.82rem",fontWeight:700,marginBottom:"0.3rem",color:"var(--text-main)"},children:"Your Business"}),c.jsx("input",{id:"inv-biz-input","aria-label":"Your Business Name",type:"text",value:f,onChange:g=>p(g.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.65rem",borderRadius:"6px",fontSize:"0.88rem"}})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"inv-client-input",style:{display:"block",fontSize:"0.82rem",fontWeight:700,marginBottom:"0.3rem",color:"var(--text-main)"},children:"Customer Name"}),c.jsx("input",{id:"inv-client-input","aria-label":"Customer Name",type:"text",value:_,onChange:g=>x(g.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.65rem",borderRadius:"6px",fontSize:"0.88rem"}})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",gap:"0.8rem",marginBottom:"1rem"},children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"inv-item-input",style:{display:"block",fontSize:"0.82rem",fontWeight:700,marginBottom:"0.3rem",color:"var(--text-main)"},children:"Item / Service"}),c.jsx("input",{id:"inv-item-input","aria-label":"Item or Service",type:"text",value:C,onChange:g=>P(g.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.65rem",borderRadius:"6px",fontSize:"0.88rem"}})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"inv-amount-input",style:{display:"block",fontSize:"0.82rem",fontWeight:700,marginBottom:"0.3rem",color:"var(--text-main)"},children:"Amount (GH₵)"}),c.jsx("input",{id:"inv-amount-input","aria-label":"Amount in Ghana Cedis",type:"number",value:D,onChange:g=>N(g.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.65rem",borderRadius:"6px",fontSize:"0.88rem"}})]})]}),c.jsxs("div",{style:{marginBottom:"1.5rem"},children:[c.jsx("label",{htmlFor:"inv-momo-input",style:{display:"block",fontSize:"0.82rem",fontWeight:700,marginBottom:"0.3rem",color:"var(--text-main)"},children:"MoMo Payment Prompt"}),c.jsx("input",{id:"inv-momo-input","aria-label":"Mobile Money Payment Instructions",type:"text",value:z,onChange:g=>$(g.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.65rem",borderRadius:"6px",fontSize:"0.88rem"}})]}),c.jsx("button",{onClick:()=>window.print(),style:{background:"rgba(255,255,255,0.1)",color:"#fff",border:"1px solid rgba(255,255,255,0.2)",padding:"0.65rem 1.4rem",borderRadius:"8px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer"},children:"Print / Save as PDF"})]}),c.jsxs("div",{style:{background:"#ffffff",color:"#111827",borderRadius:"12px",padding:"1.8rem",boxShadow:"0 10px 30px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",borderBottom:"2px solid #e5e7eb",paddingBottom:"1rem",marginBottom:"1rem"},children:[c.jsxs("div",{children:[c.jsx("h4",{style:{fontSize:"1.2rem",fontWeight:900,color:"#111827"},children:f}),c.jsx("span",{style:{fontSize:"0.75rem",color:"#6b7280"},children:"OFFICIAL INVOICE / RECEIPT"})]}),c.jsxs("div",{style:{textAlign:"right",fontSize:"0.78rem",color:"#6b7280"},children:["DATE: ",new Date().toLocaleDateString()]})]}),c.jsxs("div",{style:{fontSize:"0.85rem",marginBottom:"1.2rem"},children:[c.jsx("strong",{children:"Billed To:"})," ",_]}),c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"0.85rem",marginBottom:"1.2rem"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{background:"#f3f4f6",textAlign:"left"},children:[c.jsx("th",{style:{padding:"0.4rem 0.6rem"},children:"Description"}),c.jsx("th",{style:{padding:"0.4rem 0.6rem",textAlign:"right"},children:"Total"})]})}),c.jsx("tbody",{children:c.jsxs("tr",{children:[c.jsx("td",{style:{padding:"0.6rem"},children:C}),c.jsxs("td",{style:{padding:"0.6rem",textAlign:"right",fontWeight:700},children:["GH₵ ",D]})]})})]})]}),c.jsxs("div",{style:{background:"#fef3c7",padding:"0.8rem",borderRadius:"8px",border:"1px dashed #d97706",fontSize:"0.82rem",textAlign:"center"},children:[c.jsx("span",{style:{fontWeight:800,color:"#92400e"},children:"Payment Instructions:"}),c.jsx("div",{style:{color:"#78350f",marginTop:"0.2rem"},children:z})]})]})]}),e==="speed"&&c.jsxs("div",{style:{maxWidth:"650px",margin:"0 auto",textAlign:"center"},children:[c.jsx("h3",{style:{fontSize:"1.3rem",color:"#fff",fontWeight:800,marginBottom:"0.5rem"},children:"African Mobile Speed Auditor"}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",marginBottom:"2rem"},children:"Test your existing website’s load speed across MTN & Telecel 3G/4G networks in Ghana."}),c.jsxs("form",{onSubmit:T,style:{display:"flex",gap:"0.8rem",justifyContent:"center",marginBottom:"2rem",flexWrap:"wrap"},children:[c.jsx("input",{id:"speed-audit-url","aria-label":"Website domain or URL to audit",type:"text",value:J,onChange:g=>ae(g.target.value),placeholder:"e.g. yourbusiness.com",style:{flexGrow:1,minWidth:"240px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"#fff",padding:"0.75rem 1.2rem",borderRadius:"8px",fontSize:"0.95rem",outline:"none"},required:!0}),c.jsx("button",{type:"submit",className:"neon-btn",style:{padding:"0.75rem 1.8rem",fontSize:"0.88rem",fontWeight:800,cursor:"pointer",background:"var(--cyan-glow)",color:"#07090E"},disabled:Z,children:Z?"Testing Speed...":"Audit Speed ➔"})]}),w&&c.jsxs("div",{style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(239,68,68,0.3)",borderRadius:"16px",padding:"2rem",textAlign:"left"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",flexWrap:"wrap",gap:"0.5rem"},children:[c.jsx("span",{style:{color:"#ef4444",fontWeight:700,fontSize:"0.82rem",letterSpacing:"0.5px"},children:"SPEED BOTTLENECK DETECTED"}),c.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:["Host: ",J]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"1rem",marginBottom:"1.5rem"},children:[c.jsxs("div",{style:{background:"rgba(239,68,68,0.1)",padding:"1rem",borderRadius:"10px",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"1.8rem",fontWeight:900,color:"#ef4444"},children:"Heavy"}),c.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Legacy CMS Plugin Overhead"})]}),c.jsxs("div",{style:{background:"rgba(255,204,0,0.1)",padding:"1rem",borderRadius:"10px",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"1.8rem",fontWeight:900,color:"#ffcc00"},children:"3G / 4G"}),c.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Mobile Network Latency"})]}),c.jsxs("div",{style:{background:"rgba(16,185,129,0.1)",padding:"1rem",borderRadius:"10px",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:"1.8rem",fontWeight:900,color:"#10b981"},children:"Sub-1s"}),c.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Kone Digital Target TTFB"})]})]}),c.jsx("div",{style:{textAlign:"center"},children:c.jsx("button",{onClick:()=>n({businessName:J.replace(/\..+/,"")}),className:"neon-btn",style:{padding:"0.85rem 2rem",fontSize:"0.92rem",fontWeight:800,background:"var(--cyan-glow)",color:"#07090E",cursor:"pointer"},children:"Migrate to Managed WaaS ➔"})})]})]})]})]})},yw=()=>{const n=[{id:1,time:"10:42 AM",name:"Kwame A.",location:"Accra, Greater Accra",action:"Ordered: Kente Palazzo Pant",amount:"GH₵ 220",status:"WhatsApp Dispatched"},{id:2,time:"09:15 AM",name:"Sarah O.",location:"Kumasi, Ashanti Region",action:"MoMo Payment Prompt",amount:"GH₵ 450",status:"Paid via MTN MoMo"},{id:3,time:"Yesterday",name:"David Mensah",location:"Takoradi, Western Region",action:"Requested Stone Cladding Quote",amount:"GH₵ 1,800",status:"Follow Up Sent"}];return c.jsxs("section",{className:"crm-preview-section",id:"crm",style:{padding:"4rem 1rem",maxWidth:"1100px",margin:"0 auto"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[c.jsx("span",{style:{background:"rgba(16, 185, 129, 0.1)",border:"1px solid #10b981",color:"#10b981",padding:"0.35rem 1.2rem",borderRadius:"50px",fontSize:"0.78rem",fontWeight:800,letterSpacing:"1.5px",textTransform:"uppercase",display:"inline-block",marginBottom:"1rem"},children:"DEMO WORKFLOW PREVIEW • WHATSAPP LEAD CRM"}),c.jsxs("h2",{style:{fontSize:"clamp(1.8rem, 4vw, 2.6rem)",fontWeight:900},children:["Centralize Every WhatsApp ",c.jsx("span",{style:{color:"#10b981"},children:"Order & MoMo Lead"})]}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",marginTop:"0.5rem",maxWidth:"650px",margin:"0.5rem auto 0"},children:"An interactive demonstration of how your merchant dashboard organizes customer inquiries, MoMo payment verifications, and automated WhatsApp notifications."})]}),c.jsxs("div",{className:"neon-border",style:{background:"#0d1117",borderRadius:"20px",padding:"clamp(1.2rem, 3vw, 2rem) clamp(0.8rem, 2vw, 1.8rem)",boxShadow:"0 20px 50px rgba(0,0,0,0.6)"},children:[c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 180px), 1fr))",gap:"1rem",marginBottom:"1.5rem"},children:[c.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"1rem"},children:[c.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:"TODAY'S WHATSAPP LEADS"}),c.jsx("div",{style:{fontSize:"1.6rem",fontWeight:900,color:"#10b981",marginTop:"0.3rem"},children:"14 Leads"}),c.jsx("span",{style:{fontSize:"0.72rem",color:"#10b981"},children:"↑ +35% vs yesterday"})]}),c.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"1rem"},children:[c.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:"MOMO REVENUE PIPELINE"}),c.jsx("div",{style:{fontSize:"1.6rem",fontWeight:900,color:"var(--gold-accent)",marginTop:"0.3rem"},children:"GH₵ 4,850"}),c.jsx("span",{style:{fontSize:"0.72rem",color:"var(--gold-accent)"},children:"Direct network settlement"})]}),c.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"1rem"},children:[c.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:"MORNING DIGEST STATUS"}),c.jsx("div",{style:{fontSize:"1.6rem",fontWeight:900,color:"var(--cyan-glow)",marginTop:"0.3rem"},children:"Active"}),c.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:"Delivered daily at 08:00 GMT"})]})]}),c.jsx("div",{style:{overflowX:"auto",WebkitOverflowScrolling:"touch",width:"100%"},children:c.jsxs("table",{style:{width:"100%",minWidth:"550px",borderCollapse:"collapse",fontSize:"0.85rem"},children:[c.jsx("thead",{children:c.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.1)",textAlign:"left",color:"var(--text-muted)",fontSize:"0.78rem"},children:[c.jsx("th",{style:{padding:"0.75rem 1rem"},children:"TIME"}),c.jsx("th",{style:{padding:"0.75rem 1rem"},children:"CUSTOMER & LOCATION"}),c.jsx("th",{style:{padding:"0.75rem 1rem"},children:"ITEM / ACTION"}),c.jsx("th",{style:{padding:"0.75rem 1rem"},children:"VALUE"}),c.jsx("th",{style:{padding:"0.75rem 1rem"},children:"STATUS"})]})}),c.jsx("tbody",{children:n.map(e=>c.jsxs("tr",{style:{borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[c.jsx("td",{style:{padding:"1rem",color:"var(--text-muted)"},children:e.time}),c.jsxs("td",{style:{padding:"1rem",fontWeight:700,color:"#fff"},children:[e.name,c.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:400},children:e.location})]}),c.jsx("td",{style:{padding:"1rem",color:"var(--text-main)"},children:e.action}),c.jsx("td",{style:{padding:"1rem",fontWeight:800,color:"var(--gold-accent)"},children:e.amount}),c.jsx("td",{style:{padding:"1rem"},children:c.jsx("span",{style:{background:e.status.includes("Paid")?"rgba(16,185,129,0.15)":"rgba(0,255,255,0.15)",color:e.status.includes("Paid")?"#10b981":"var(--cyan-glow)",padding:"0.25rem 0.75rem",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700},children:e.status})})]},e.id))})]})})]})]})},Qd=O.createContext(void 0),_w=({children:n})=>{const[e,t]=O.useState(()=>localStorage.getItem("kdigital-currency")||"GHS"),[r,i]=O.useState(.07),[s,a]=O.useState(!0),u=f=>{t(f),localStorage.setItem("kdigital-currency",f)};O.useEffect(()=>{(async()=>{try{a(!0);const _=await(await fetch("https://open.er-api.com/v6/latest/GHS")).json();_.rates&&_.rates.USD&&i(_.rates.USD)}catch(p){console.error("Failed to fetch exchange rate:",p)}finally{a(!1)}})()},[]);const d=f=>e==="GHS"?`GHS ${f.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}`:`$${(f*r).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}`;return c.jsx(Qd.Provider,{value:{currency:e,setCurrency:u,exchangeRate:r,formatPrice:d,isLoading:s},children:n})},ua=()=>{const n=O.useContext(Qd);if(n===void 0)throw new Error("useCurrency must be used within a CurrencyProvider");return n},Oe={Store:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.85},children:[c.jsx("path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}),c.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),c.jsx("path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}),c.jsx("path",{d:"M2 7h20"})]}),TrendUp:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.7},children:[c.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),c.jsx("polyline",{points:"16 7 22 7 22 13"})]}),Message:()=>c.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.7},children:c.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),CreditCard:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.7},children:[c.jsx("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}),c.jsx("line",{x1:"2",x2:"22",y1:"10",y2:"10"})]}),Plus:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Sliders:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"4",x2:"20",y1:"21",y2:"21"}),c.jsx("line",{x1:"4",x2:"20",y1:"14",y2:"14"}),c.jsx("line",{x1:"4",x2:"20",y1:"7",y2:"7"}),c.jsx("circle",{cx:"8",cy:"7",r:"2"}),c.jsx("circle",{cx:"16",cy:"14",r:"2"}),c.jsx("circle",{cx:"10",cy:"21",r:"2"})]}),ExternalLink:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M15 3h6v6"}),c.jsx("path",{d:"M10 14 21 3"}),c.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"})]}),Share:()=>c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"18",cy:"5",r:"3"}),c.jsx("circle",{cx:"6",cy:"12",r:"3"}),c.jsx("circle",{cx:"18",cy:"19",r:"3"}),c.jsx("line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}),c.jsx("line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"})]}),Inbox:()=>c.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.4},children:[c.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),c.jsx("path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),Headphones:()=>c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"})})},vw=()=>{const{currency:n,setCurrency:e,formatPrice:t}=ua(),[r,i]=O.useState("My New Business"),[s,a]=O.useState(["My New Business","Ama Heritage Kente","Sedemson Stone","Emewear"]),[u,d]=O.useState("EN"),[f,p]=O.useState("overview"),[_,x]=O.useState(!1),[C,P]=O.useState(!1),[D,N]=O.useState(!1),[z,$]=O.useState([]),[J,ae]=O.useState([]),[Z,ie]=O.useState(!1),[w,y]=O.useState(""),[v,I]=O.useState(""),[b,T]=O.useState("General");O.useEffect(()=>{if(!(!Me||!Me.type))try{const q=Ns(_n(Me,"onboarding_submissions"),F=>{ie(!0);const Ee=[];F.forEach(be=>{const ce=be.data();ce.businessName&&!Ee.includes(ce.businessName)&&Ee.push(ce.businessName)}),Ee.length>0&&a(be=>Array.from(new Set([...Ee,...be])))},F=>{console.log("Firestore Business Sync notice:",F.message)}),Ye=Ns(_n(Me,"merchant_products"),F=>{const Ee=[];F.forEach(be=>{const ce=be.data();Ee.push({id:be.id,title:ce.title||"Untitled",price:Number(ce.price)||0,category:ce.category||"General",status:ce.status||"In Stock"})}),$(Ee)},F=>{console.log("Firestore Product Sync notice:",F.message)}),Fe=B0(_n(Me,"merchant_activity"),W0("createdAt","desc"),z0(20)),gt=Ns(Fe,F=>{const Ee=[];F.forEach(be=>{const ce=be.data();Ee.push({id:be.id,time:ce.time||"Just now",type:ce.type||"order",title:ce.title||"Customer Action",detail:ce.detail||"",amount:ce.amount,badge:ce.badge||"Activity",badgeColor:ce.badgeColor||"var(--cyan-glow)"})}),ae(Ee)},F=>{console.log("Firestore Activity Sync notice:",F.message)});return()=>{q(),Ye(),gt()}}catch(q){console.log("Firestore init notice:",q)}},[]);const g=[{id:"a1",time:"Demo Sample",type:"order",title:"Customer ordered via WhatsApp",detail:"Kwame A. (Accra) • Sample Product",amount:t(150),badge:"WhatsApp",badgeColor:"#10b981"}],fe=D?g:J,ze=async q=>{if(q.preventDefault(),!w.trim()||!v.trim())return;const Ye=parseFloat(v)||0,Fe={title:w.trim(),price:Ye,category:b,status:"In Stock",businessName:r,createdAt:Ii?Ii():new Date().toISOString()};try{Me&&Me.type?await Ko(_n(Me,"merchant_products"),Fe):$(gt=>[{...Fe,id:Date.now().toString()},...gt])}catch{$(F=>[{...Fe,id:Date.now().toString()},...F])}y(""),I(""),P(!1)},ve={EN:{planStatus:"Active Plan",visits:"Page Visits",orders:"WhatsApp Inquiries",sales:"Settled Sales Volume",addProduct:"Add Product",customize:"Customize Theme",viewSite:"View Live Site",share:"Share Store",recentActivity:"Customer Activity",catalog:"Product Catalog",support:"Priority Support",emptyActivity:"No customer events recorded yet",emptyActivitySub:"Share your store link on WhatsApp or social channels to start tracking live visitor orders and MoMo transactions."},TWI:{planStatus:"Account Foforɔ",visits:"Nnipa A Wɔaba",orders:"WhatsApp Nkratoɔ",sales:"MoMo Sika",addProduct:"Fa Nneɛma Ka Ho",customize:"Sesa Ahosuo",viewSite:"Hwɛ Wɛbsaet",share:"Fa Kɔ WhatsApp",recentActivity:"Nneyɛeɛ Foforɔ",catalog:"Nneɛma Ahodoɔ",support:"Mmoa",emptyActivity:"Obiara nnyɛɛ hwee da",emptyActivitySub:"Fa wo wɛbsaet link no kɔ WhatsApp so na nnipa ntumi ntɔ nneɛma."},GA:{planStatus:"Account Hee",visits:"Gbɔmɛi Ni Ba Biɛ",orders:"WhatsApp Nibii",sales:"MoMo Shika",addProduct:"Kɛ Nɔ Heeko Fata He",customize:"Tsake Wɛbsaet",viewSite:"Kwɛ Wɛbsaet",share:"Maje Yɛ WhatsApp",recentActivity:"Nii Ni Ya Nɔ",catalog:"Nibii Lɛ",support:"Yelikɛbuamɔ",emptyActivity:"Mɔko mɔko bako lolo",emptyActivitySub:"Maje o wɛbsaet link lɛ yɛ WhatsApp nɔ koni gbɔmɛi ahé nibii."},EWE:{planStatus:"Account Yeye",visits:"Amewo Katã Va",orders:"WhatsApp Nuwɔwɔwo",sales:"MoMo Ga Katã",addProduct:"Tsɔ Nuto Kpe Ðe Eŋu",customize:"Trɔ Wɛbsaet",viewSite:"Kpɔ Wò Wɛbsaet",share:"Ɖoe Ðe WhatsApp",recentActivity:"Nusiwo Dzɔ",catalog:"Nuwo Katã",support:"Kpekpeɖeŋu",emptyActivity:"Ame aɖeke me wɔ nane haɖe o",emptyActivitySub:"Ɖo wò wɛbsaet kadodo ɖe WhatsApp dzi be amewo nate ŋu aƒle nuwo."}}[u];return c.jsxs("div",{className:"merchant-dashboard",style:{maxWidth:"1240px",margin:"0 auto",padding:"1.5rem 1rem 5rem",color:"var(--text-main)"},children:[c.jsxs("div",{className:"neon-border",style:{background:"rgba(13, 18, 29, 0.85)",backdropFilter:"blur(20px)",borderRadius:"16px",padding:"1rem 1.4rem",marginBottom:"2rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem",boxShadow:"0 20px 40px -15px rgba(0,0,0,0.6)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.8rem",flexWrap:"wrap",flexGrow:1},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"var(--text-muted)"},children:[c.jsx(Oe.Store,{}),c.jsx("select",{value:r,onChange:q=>i(q.target.value),style:{background:"#090D15",border:"1px solid rgba(255, 255, 255, 0.12)",color:"#fff",fontWeight:700,fontSize:"0.92rem",padding:"0.5rem 0.8rem",borderRadius:"8px",outline:"none",cursor:"pointer"},children:s.map(q=>c.jsx("option",{value:q,children:q},q))})]}),c.jsxs("span",{style:{background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.25)",color:"#10b981",padding:"0.3rem 0.75rem",borderRadius:"50px",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:"0.35rem",whiteSpace:"nowrap"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10b981"}}),ve.planStatus]}),c.jsxs("span",{style:{background:Z?"rgba(0, 240, 255, 0.1)":"rgba(229, 192, 123, 0.1)",border:Z?"1px solid rgba(0, 240, 255, 0.25)":"1px solid rgba(229, 192, 123, 0.25)",color:Z?"var(--cyan-glow)":"var(--gold-accent)",padding:"0.3rem 0.75rem",borderRadius:"50px",fontSize:"0.75rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:"0.35rem",whiteSpace:"nowrap"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:Z?"var(--cyan-glow)":"var(--gold-accent)",boxShadow:Z?"0 0 8px var(--cyan-glow)":"none"}}),Z?"Live Synced":"Demo Offline"]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",flexWrap:"wrap"},children:[c.jsx("div",{style:{display:"flex",background:"#090D15",borderRadius:"8px",padding:"2px",border:"1px solid rgba(255, 255, 255, 0.08)"},children:["EN","TWI","GA","EWE"].map(q=>c.jsx("button",{onClick:()=>d(q),style:{background:u===q?"rgba(255, 255, 255, 0.12)":"transparent",color:u===q?"#fff":"var(--text-muted)",border:"none",padding:"0.35rem 0.65rem",borderRadius:"6px",fontWeight:700,fontSize:"0.75rem",cursor:"pointer",transition:"all 0.15s"},children:q},q))}),c.jsx("button",{onClick:()=>e(n==="GHS"?"USD":"GHS"),style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"var(--text-main)",padding:"0.4rem 0.75rem",borderRadius:"8px",fontWeight:700,fontSize:"0.78rem",cursor:"pointer"},children:n==="GHS"?"GHS (₵)":"USD ($)"}),c.jsxs("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%20Support%2C%20I%20need%20assistance%20with%20my%20merchant%20account.",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.12)",color:"#fff",textDecoration:"none",padding:"0.45rem 0.9rem",borderRadius:"8px",fontWeight:700,fontSize:"0.78rem",display:"inline-flex",alignItems:"center",gap:"0.45rem"},children:[c.jsx(Oe.Headphones,{}),c.jsx("span",{children:ve.support})]})]})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 220px), 1fr))",gap:"1.2rem",marginBottom:"2rem"},children:[c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",padding:"1.6rem",borderRadius:"16px",position:"relative"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"},children:[c.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},children:ve.visits}),c.jsx(Oe.TrendUp,{})]}),c.jsx("div",{style:{fontSize:"2.2rem",fontWeight:800,color:"#fff",letterSpacing:"-0.5px"},children:D?"1,420":"0"}),c.jsx("div",{style:{color:"var(--text-subtle)",fontSize:"0.75rem",marginTop:"0.3rem"},children:D?"+18.4% this week":"Awaiting first visitors"})]}),c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",padding:"1.6rem",borderRadius:"16px",position:"relative"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"},children:[c.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},children:ve.orders}),c.jsx(Oe.Message,{})]}),c.jsx("div",{style:{fontSize:"2.2rem",fontWeight:800,color:"#fff",letterSpacing:"-0.5px"},children:D?"48":"0"}),c.jsx("div",{style:{color:"var(--text-subtle)",fontSize:"0.75rem",marginTop:"0.3rem"},children:D?"Direct WhatsApp leads":"No inquiries recorded"})]}),c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",padding:"1.6rem",borderRadius:"16px",position:"relative"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"},children:[c.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px"},children:ve.sales}),c.jsx(Oe.CreditCard,{})]}),c.jsx("div",{style:{fontSize:"2.2rem",fontWeight:800,color:"#fff",letterSpacing:"-0.5px"},children:t(D?7350:0)}),c.jsx("div",{style:{color:"var(--text-subtle)",fontSize:"0.75rem",marginTop:"0.3rem"},children:D?"MTN & Telecel Cash settlements":"No settlements processed"})]})]}),c.jsxs("div",{style:{marginBottom:"2.5rem"},children:[c.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:700,color:"var(--text-muted)",marginBottom:"1rem",textTransform:"uppercase",letterSpacing:"0.8px"},children:"Quick Actions"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 150px), 1fr))",gap:"1rem"},children:[c.jsxs("button",{onClick:()=>P(!0),className:"neon-border",style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",color:"var(--text-main)",padding:"1.2rem",borderRadius:"12px",fontWeight:700,fontSize:"0.88rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.6rem"},children:[c.jsx(Oe.Plus,{}),ve.addProduct]}),c.jsxs("button",{onClick:()=>alert("Theme Customizer: Adjust brand colors, logo, and store header typography."),className:"neon-border",style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",color:"var(--text-main)",padding:"1.2rem",borderRadius:"12px",fontWeight:700,fontSize:"0.88rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.6rem"},children:[c.jsx(Oe.Sliders,{}),ve.customize]}),c.jsxs("a",{href:"http://localhost:3000/emewear/",target:"_blank",rel:"noopener noreferrer",className:"neon-border",style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",color:"var(--text-main)",padding:"1.2rem",borderRadius:"12px",fontWeight:700,fontSize:"0.88rem",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.6rem"},children:[c.jsx(Oe.ExternalLink,{}),ve.viewSite]}),c.jsxs("button",{onClick:()=>x(!0),className:"neon-border",style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",color:"var(--text-main)",padding:"1.2rem",borderRadius:"12px",fontWeight:700,fontSize:"0.88rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.6rem"},children:[c.jsx(Oe.Share,{}),ve.share]})]})]}),c.jsxs("div",{style:{display:"flex",gap:"1.5rem",borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"0.8rem",marginBottom:"1.5rem"},children:[c.jsx("button",{onClick:()=>p("overview"),style:{background:"none",border:"none",color:f==="overview"?"var(--cyan-glow)":"var(--text-muted)",fontWeight:700,fontSize:"0.92rem",cursor:"pointer",borderBottom:f==="overview"?"2px solid var(--cyan-glow)":"none",paddingBottom:"0.4rem",transition:"color 0.15s"},children:ve.recentActivity}),c.jsxs("button",{onClick:()=>p("products"),style:{background:"none",border:"none",color:f==="products"?"var(--cyan-glow)":"var(--text-muted)",fontWeight:700,fontSize:"0.92rem",cursor:"pointer",borderBottom:f==="products"?"2px solid var(--cyan-glow)":"none",paddingBottom:"0.4rem",transition:"color 0.15s"},children:[ve.catalog," (",z.length,")"]})]}),f==="overview"&&c.jsx("div",{className:"neon-border",style:{background:"var(--bg-surface)",borderRadius:"16px",padding:"1.6rem",boxShadow:"0 20px 40px -15px rgba(0,0,0,0.5)"},children:fe.length===0?c.jsxs("div",{style:{textAlign:"center",padding:"3.5rem 1rem"},children:[c.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"1rem"},children:c.jsx(Oe.Inbox,{})}),c.jsx("h4",{style:{fontSize:"1.05rem",fontWeight:700,color:"#fff",marginBottom:"0.4rem"},children:ve.emptyActivity}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",maxWidth:"460px",margin:"0 auto 1.5rem",lineHeight:1.6},children:ve.emptyActivitySub}),c.jsxs("div",{style:{display:"flex",gap:"0.8rem",justifyContent:"center",flexWrap:"wrap"},children:[c.jsxs("button",{onClick:()=>x(!0),style:{background:"rgba(255, 255, 255, 0.1)",color:"#fff",border:"1px solid rgba(255, 255, 255, 0.15)",padding:"0.55rem 1.2rem",borderRadius:"8px",fontWeight:700,fontSize:"0.8rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx(Oe.Share,{}),c.jsx("span",{children:"Share Store Link"})]}),c.jsx("button",{onClick:()=>N(!D),style:{background:"none",color:"var(--text-muted)",border:"1px solid rgba(255, 255, 255, 0.08)",padding:"0.55rem 1.2rem",borderRadius:"8px",fontWeight:600,fontSize:"0.8rem",cursor:"pointer"},children:D?"Reset to Zero-State":"Toggle Sample View"})]})]}):c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.8rem"},children:fe.map(q=>c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem 1.2rem",borderRadius:"10px",background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.04)",flexWrap:"wrap",gap:"1rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[c.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:q.badgeColor}}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:700,color:"#fff",fontSize:"0.9rem"},children:q.title}),c.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginTop:"0.15rem"},children:q.detail})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[q.amount&&c.jsx("span",{style:{fontWeight:700,color:"#fff",fontSize:"0.95rem"},children:q.amount}),c.jsx("span",{style:{background:"rgba(255, 255, 255, 0.06)",color:"var(--text-muted)",padding:"0.25rem 0.6rem",borderRadius:"4px",fontSize:"0.72rem",fontWeight:600},children:q.badge}),c.jsx("span",{style:{color:"var(--text-subtle)",fontSize:"0.75rem"},children:q.time})]})]},q.id))})}),f==="products"&&c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",borderRadius:"16px",padding:"1.6rem",boxShadow:"0 20px 40px -15px rgba(0,0,0,0.5)"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem"},children:[c.jsx("h4",{style:{fontSize:"1rem",fontWeight:700},children:"Store Inventory"}),c.jsxs("button",{onClick:()=>P(!0),style:{background:"rgba(255, 255, 255, 0.1)",color:"#fff",border:"1px solid rgba(255, 255, 255, 0.15)",padding:"0.45rem 1rem",borderRadius:"6px",fontWeight:700,fontSize:"0.8rem",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.4rem"},children:[c.jsx(Oe.Plus,{}),c.jsx("span",{children:"Add Item"})]})]}),z.length===0?c.jsxs("div",{style:{textAlign:"center",padding:"2.5rem 1rem",color:"var(--text-muted)",fontSize:"0.88rem"},children:["No products added yet. Click ",c.jsx("strong",{children:"Add Item"})," to populate your store catalog."]}):c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem"},children:z.map(q=>c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem 1.2rem",borderRadius:"8px",background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.04)"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:700,color:"#fff",fontSize:"0.9rem"},children:q.title}),c.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:q.category})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.2rem"},children:[c.jsx("span",{style:{fontWeight:700,color:"#fff",fontSize:"1rem"},children:t(q.price)}),c.jsx("span",{style:{background:"rgba(16, 185, 129, 0.1)",color:"#10b981",padding:"0.2rem 0.5rem",borderRadius:"4px",fontSize:"0.72rem",fontWeight:600},children:q.status})]})]},q.id))})]}),C&&c.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(7, 9, 14, 0.88)",backdropFilter:"blur(16px)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999,padding:"1rem"},children:c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",borderRadius:"16px",padding:"2rem",maxWidth:"460px",width:"100%",boxShadow:"0 25px 60px rgba(0,0,0,0.8)"},children:[c.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:800,marginBottom:"1.2rem"},children:"Add Product"}),c.jsxs("form",{onSubmit:ze,children:[c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,marginBottom:"0.4rem",color:"var(--text-muted)"},children:"Product Title"}),c.jsx("input",{type:"text",placeholder:"e.g. Ankara Wrap Dress",value:w,onChange:q=>y(q.target.value),style:{width:"100%",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.12)",color:"#fff",padding:"0.65rem 0.85rem",borderRadius:"8px",outline:"none",fontSize:"0.88rem"},required:!0})]}),c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,marginBottom:"0.4rem",color:"var(--text-muted)"},children:"Price (GH₵)"}),c.jsx("input",{type:"number",placeholder:"e.g. 195",value:v,onChange:q=>I(q.target.value),style:{width:"100%",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.12)",color:"#fff",padding:"0.65rem 0.85rem",borderRadius:"8px",outline:"none",fontSize:"0.88rem"},required:!0})]}),c.jsxs("div",{style:{marginBottom:"1.6rem"},children:[c.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,marginBottom:"0.4rem",color:"var(--text-muted)"},children:"Category"}),c.jsxs("select",{value:b,onChange:q=>T(q.target.value),style:{width:"100%",background:"#090D15",border:"1px solid rgba(255,255,255,0.12)",color:"#fff",padding:"0.65rem 0.85rem",borderRadius:"8px",outline:"none",fontSize:"0.88rem"},children:[c.jsx("option",{value:"Apparel",children:"Apparel"}),c.jsx("option",{value:"Luxury",children:"Luxury"}),c.jsx("option",{value:"Casual",children:"Casual"}),c.jsx("option",{value:"Services",children:"Services"})]})]}),c.jsxs("div",{style:{display:"flex",gap:"0.6rem",justifyContent:"flex-end"},children:[c.jsx("button",{type:"button",onClick:()=>P(!1),style:{background:"none",color:"var(--text-muted)",border:"1px solid rgba(255,255,255,0.1)",padding:"0.6rem 1.2rem",borderRadius:"6px",cursor:"pointer",fontWeight:600,fontSize:"0.82rem"},children:"Cancel"}),c.jsx("button",{type:"submit",style:{background:"#fff",color:"#07090E",border:"none",padding:"0.6rem 1.4rem",borderRadius:"6px",fontWeight:700,cursor:"pointer",fontSize:"0.82rem"},children:"Save Item"})]})]})]})}),_&&c.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(7, 9, 14, 0.88)",backdropFilter:"blur(16px)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999,padding:"1rem"},children:c.jsxs("div",{className:"neon-border",style:{background:"var(--bg-surface)",borderRadius:"16px",padding:"2rem",maxWidth:"460px",width:"100%",textAlign:"center",boxShadow:"0 25px 60px rgba(0,0,0,0.8)"},children:[c.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:800,marginBottom:"0.5rem"},children:"Share Store Link"}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",marginBottom:"1.6rem",lineHeight:1.6},children:"Copy or broadcast your direct store URL to WhatsApp status, customer lists, or social bios."}),c.jsxs("a",{href:`https://api.whatsapp.com/send?text=${encodeURIComponent("Check out our new store catalog here: http://localhost:3000/emewear/")}`,target:"_blank",rel:"noopener noreferrer",style:{background:"#10b981",color:"#07090E",textDecoration:"none",padding:"0.75rem 1.6rem",borderRadius:"8px",fontWeight:700,fontSize:"0.88rem",display:"inline-flex",alignItems:"center",gap:"0.5rem",marginBottom:"1rem"},children:[c.jsx(Oe.Share,{}),c.jsx("span",{children:"Broadcast to WhatsApp"})]}),c.jsx("div",{children:c.jsx("button",{onClick:()=>x(!1),style:{background:"none",border:"none",color:"var(--text-muted)",cursor:"pointer",fontSize:"0.82rem",fontWeight:600},children:"Close"})})]})})]})},bw=({onOpenWizard:n})=>c.jsxs("div",{className:"powered-by-badge",onClick:n,style:{position:"fixed",bottom:"20px",left:"20px",background:"rgba(9, 11, 16, 0.85)",backdropFilter:"blur(12px)",border:"1px solid rgba(0, 255, 255, 0.3)",borderRadius:"50px",padding:"0.45rem 1.1rem",display:"inline-flex",alignItems:"center",gap:"0.55rem",zIndex:999,cursor:"pointer",boxShadow:"0 8px 25px rgba(0,0,0,0.6), 0 0 12px rgba(0,255,255,0.15)",transition:"all 0.3s ease"},title:"Powered by Kone Digital WaaS - Build your business website in 30s",children:[c.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"var(--cyan-glow)",boxShadow:"0 0 8px var(--cyan-glow)"}}),c.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:600},children:["Powered by ",c.jsx("strong",{style:{color:"#fff"},children:"Kone Digital"})]}),c.jsx("span",{style:{background:"rgba(0, 255, 255, 0.1)",color:"var(--cyan-glow)",fontSize:"0.68rem",fontWeight:700,padding:"0.15rem 0.5rem",borderRadius:"20px",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Build in 30s"})]}),ww=()=>{const{currency:n,setCurrency:e}=ua();return c.jsxs("div",{className:"currency-toggle neon-border",children:[c.jsx("button",{className:`currency-btn ${n==="GHS"?"active":""}`,onClick:()=>e("GHS"),children:"GHS"}),c.jsx("button",{className:`currency-btn ${n==="USD"?"active":""}`,onClick:()=>e("USD"),children:"USD"})]})},Jl=()=>{const[n,e]=O.useState("all"),[t,r]=O.useState(""),i=[{id:"sedemson",title:"Sedemson Stone",category:"b2b",categoryLabel:"Natural Stone & B2B",tagline:"Premium Natural Stone Finishes & Architectural Cladding",image:"/sedemson_stone_hero.png",tags:["WaaS","B2B","Cladding"],status:"Launching Soon"},{id:"emewear",title:"Emewear",category:"fashion",categoryLabel:"Fashion & E-Commerce",tagline:"Ghana-Made Plus-Size Ankara & Luxury Heritage Fashion",image:"/emewear/emewear_hero.jpg",tags:["Fashion WaaS","E-Commerce","3D Runway"],status:"Launching Soon"}],s=tu.useMemo(()=>{const a=t.replace(/[^\w\s-]/gi,"").toLowerCase().trim();return!a&&n==="all"?i:i.filter(u=>{const d=n==="all"||u.category===n,f=!a||u.title.toLowerCase().includes(a)||u.tagline.toLowerCase().includes(a);return d&&f})},[t,n]);return c.jsxs("section",{className:"portfolio-section",id:"work",style:{padding:"4rem 1rem"},children:[c.jsxs("div",{className:"portfolio-header fade-in-up",style:{textAlign:"center",marginBottom:"2.5rem"},children:[c.jsxs("h2",{children:["Our ",c.jsx("span",{className:"neon-text",children:"Portfolio Showcase"})]}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.1rem",marginTop:"0.5rem"},children:"Real-world WaaS implementations engineered for client growth."}),c.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",flexWrap:"wrap",marginTop:"2rem",maxWidth:"850px",margin:"2rem auto 0"},children:[c.jsxs("button",{onClick:()=>e("all"),className:"neon-border",style:{background:n==="all"?"var(--cyan-glow)":"var(--bg-surface)",color:n==="all"?"#090B10":"var(--text-main)",border:"1px solid var(--cyan-glow)",padding:"0.5rem 1.4rem",borderRadius:"30px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"all 0.3s"},children:["All Projects (",i.length,")"]}),c.jsx("button",{onClick:()=>e("b2b"),className:"neon-border",style:{background:n==="b2b"?"var(--cyan-glow)":"var(--bg-surface)",color:n==="b2b"?"#090B10":"var(--text-main)",border:"1px solid var(--cyan-glow)",padding:"0.5rem 1.4rem",borderRadius:"30px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"all 0.3s"},children:"Natural Stone & B2B (1)"}),c.jsx("button",{onClick:()=>e("fashion"),className:"neon-border",style:{background:n==="fashion"?"var(--cyan-glow)":"var(--bg-surface)",color:n==="fashion"?"#090B10":"var(--text-main)",border:"1px solid var(--cyan-glow)",padding:"0.5rem 1.4rem",borderRadius:"30px",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"all 0.3s"},children:"Fashion & E-Commerce (1)"}),c.jsx("input",{type:"text",placeholder:"🔍 Search portfolio...",value:t,onChange:a=>r(a.target.value),style:{background:"var(--bg-surface)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.5rem 1.2rem",borderRadius:"30px",fontSize:"0.85rem",outline:"none",width:"min(100%, 220px)"}})]})]}),c.jsx("div",{className:"carousel-container",style:{padding:"0 0.5rem"},children:c.jsx("div",{className:"carousel-track",style:{justifyContent:"center",flexWrap:"wrap",gap:"2rem",width:"100%",maxWidth:"1100px",margin:"0 auto"},children:s.map(a=>c.jsxs("div",{className:"portfolio-card neon-border fade-in-up",style:{width:"100%",maxWidth:"380px",borderRadius:"16px",overflow:"hidden",background:"var(--bg-surface)"},children:[c.jsx("div",{className:"card-image-placeholder",style:{padding:0,height:"220px",overflow:"hidden"},children:c.jsx("img",{src:a.image,alt:a.title,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",transition:"transform 0.5s ease"}})}),c.jsxs("div",{className:"card-content",style:{padding:"1.8rem"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"},children:[c.jsx("h3",{style:{fontSize:"1.5rem",color:"var(--text-main)"},children:a.title}),c.jsx("span",{style:{fontSize:"0.72rem",background:"rgba(0, 255, 255, 0.1)",color:"var(--cyan-glow)",padding:"0.2rem 0.6rem",borderRadius:"6px",fontWeight:700},children:a.categoryLabel})]}),c.jsx("p",{className:"tagline",style:{color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"1.2rem",lineHeight:1.5},children:a.tagline}),c.jsx("div",{className:"tags",style:{display:"flex",gap:"0.5rem",marginBottom:"1.5rem"},children:a.tags.map((u,d)=>c.jsx("span",{className:"tag",style:{background:"rgba(255, 255, 255, 0.08)",padding:"0.2rem 0.6rem",borderRadius:"4px",fontSize:"0.78rem"},children:u},d))}),c.jsx("span",{className:"view-link",style:{color:"#8b949e",cursor:"not-allowed",display:"inline-flex",alignItems:"center",gap:"0.25rem",fontWeight:700},children:a.status})]})]},a.id))})})]})},Xl=()=>{const{currency:n,setCurrency:e,formatPrice:t}=ua(),[r,i]=O.useState(2),s=[{id:"lite",name:"Lite",priceGhs:49,desc:"Ideal for market traders, Susu groups, and local artisans.",features:["✓ Niche SME Website Catalog","✓ Automated MoMo Payments","✓ Direct WhatsApp Lead Routing","✓ Standard Hosting & SSL Security"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20SME%20Lite%20Plan."},{id:"starter",name:"Starter",priceGhs:499,desc:"Perfect for small businesses needing a high-converting digital flyer.",features:["✓ Custom Single Page Website","✓ Automated WhatsApp Integration","✓ Ultra-Fast Mobile Optimization","✓ Monthly Maintenance & Backups"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Starter%20Plan."},{id:"professional",name:"Professional",priceGhs:999,desc:"For growing brands needing a full multi-page corporate hub.",popular:!0,features:["✓ Up to 5 Custom Pages","✓ Full Technical SEO & Sitemaps","✓ Custom Form & Lead Integrations","✓ 24/7 Priority Support Guarantee"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Professional%20Plan."},{id:"enterprise",name:"Enterprise",priceGhs:2499,desc:"Advanced web applications, custom databases, and API engineering.",features:["✓ Full Custom Architecture & Stack","✓ Backend & Payment Gateway Integration","✓ Advanced Analytics & Custom CRM","✓ Dedicated Senior Engineer Account Manager"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'd%20like%20to%20discuss%20a%20Custom%20Enterprise%20Plan."}],a=s[r];return c.jsxs("section",{className:"pricing-section",id:"pricing",style:{padding:"4rem 1rem"},children:[c.jsxs("div",{className:"pricing-header fade-in-up",style:{textAlign:"center",marginBottom:"2.5rem"},children:[c.jsxs("h2",{children:["Transparent ",c.jsx("span",{className:"neon-text",children:"WaaS Pricing"})]}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.1rem",marginTop:"0.5rem"},children:"Simple, predictable Website as a Service plans tailored for African enterprises."}),c.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem",marginTop:"1.5rem"},children:[c.jsx("span",{style:{color:n==="GHS"?"var(--cyan-glow)":"var(--text-muted)",fontWeight:700,fontSize:"0.9rem"},children:"GHS (₵)"}),c.jsx("button",{onClick:()=>e(n==="GHS"?"USD":"GHS"),"aria-label":`Switch pricing currency from ${n} to ${n==="GHS"?"USD":"GHS"}`,title:`Switch pricing currency from ${n} to ${n==="GHS"?"USD":"GHS"}`,style:{background:"rgba(0, 255, 255, 0.15)",border:"1px solid var(--cyan-glow)",width:"60px",height:"30px",borderRadius:"20px",position:"relative",cursor:"pointer",display:"flex",alignItems:"center",padding:"3px"},children:c.jsx("div",{style:{width:"24px",height:"24px",borderRadius:"50%",background:"var(--cyan-glow)",transform:n==="USD"?"translateX(30px)":"translateX(0)",transition:"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"}})}),c.jsx("span",{style:{color:n==="USD"?"var(--cyan-glow)":"var(--text-muted)",fontWeight:700,fontSize:"0.9rem"},children:"USD ($)"})]})]}),c.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto 3rem",padding:"1.5rem",background:"var(--bg-surface)",borderRadius:"16px",border:"1px solid rgba(255,255,255,0.08)"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem",color:"var(--text-muted)",fontSize:"0.88rem",fontWeight:700},children:[c.jsx("label",{htmlFor:"pricing-plan-slider",children:"SLIDE TO COMPARE PACKAGES:"}),c.jsxs("span",{style:{color:"var(--cyan-glow)"},children:[a.name," Plan Selected"]})]}),c.jsx("input",{id:"pricing-plan-slider","aria-label":"Select pricing package plan",type:"range",min:"0",max:"3",step:"1",value:r,onChange:u=>i(parseInt(u.target.value)),style:{width:"100%",height:"8px",borderRadius:"5px",background:"var(--bg-surface-light)",outline:"none",cursor:"pointer",accentColor:"var(--cyan-glow)"}}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"0.6rem",fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:600},children:[c.jsx("span",{children:"Lite"}),c.jsx("span",{children:"Starter"}),c.jsx("span",{children:"Professional"}),c.jsx("span",{children:"Enterprise"})]})]}),c.jsx("div",{className:"pricing-cards",style:{display:"flex",gap:"1.5rem",justifyContent:"center",flexWrap:"wrap",maxWidth:"1200px",margin:"0 auto",width:"100%"},children:s.map((u,d)=>{const f=d===r;return c.jsxs("div",{onClick:()=>i(d),className:`price-card neon-border ${f?"highlight active":""}`,style:{background:f?"rgba(0, 255, 255, 0.04)":"var(--bg-surface)",borderColor:f?"var(--cyan-glow)":"rgba(255, 255, 255, 0.08)",boxShadow:f?"0 0 20px rgba(0, 240, 255, 0.25)":"none",transition:"all 0.3s ease",cursor:"pointer",width:"100%",maxWidth:"280px",position:"relative"},children:[u.popular&&c.jsx("div",{className:"badge",style:{background:"var(--gold-accent)",color:"#090B10"},children:"MOST POPULAR"}),c.jsxs("div",{className:"card-top",style:{textAlign:"center",borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"1.2rem",marginBottom:"1.2rem"},children:[c.jsx("h3",{style:{fontSize:"1.4rem",color:f?"var(--cyan-glow)":"var(--text-main)"},children:u.name}),c.jsxs("div",{className:"price",style:{margin:"1rem 0"},children:[c.jsx("span",{className:"amount",style:{fontSize:"2.2rem",fontWeight:800},children:t(u.priceGhs)}),c.jsx("span",{className:"period",style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"/mo"})]}),c.jsx("p",{className:"card-desc",style:{fontSize:"0.85rem",color:"var(--text-muted)",lineHeight:1.5},children:u.desc})]}),c.jsx("ul",{className:"features",style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.75rem",marginBottom:"2rem",flexGrow:1},children:u.features.map((p,_)=>c.jsx("li",{style:{fontSize:"0.86rem",color:"var(--text-main)",display:"flex",alignItems:"center",gap:"0.5rem"},children:p},_))}),c.jsx("a",{href:`https://wa.me/233551993820?text=${u.whatsappMsg}`,target:"_blank",rel:"noopener noreferrer",className:"neon-btn neon-border flex-center",style:{textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",background:f?"var(--cyan-glow)":"transparent",color:f?"#090B10":"var(--cyan-glow)",padding:"0.75rem 1.2rem",fontSize:"0.85rem",fontWeight:800},children:"Get Started via WhatsApp"})]},u.id)})})]})},lo={"web-development":{id:"web-development",slug:"web-development",title:"Custom Web & SaaS Application Engineering",headline:"High-Performance Web Applications & Custom SaaS Platforms",badge:"CORE ENGINEERING",summary:"We build production-grade, high-speed web applications using React, Next.js, TypeScript, and modern cloud architectures. Optimized for sub-second page loads, SEO dominance, and maximum conversion rates.",icon:"",coverGradient:"linear-gradient(135deg, rgba(0, 240, 255, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Single-Page & Multi-Page Web Apps",spec:"Vite / Next.js SSR & static pre-rendering with React 18+"},{title:"API Integration & Cloud Backends",spec:"RESTful / GraphQL APIs, Node.js microservices, and Firebase real-time sync"},{title:"SEO & Microdata Architecture",spec:"Schema.org JSON-LD microdata, OpenGraph cards, and Google Search Console indexing"},{title:"Responsive Ultra-Fast UI",spec:"Mobile-first design system, glassmorphism UI, sub-second LCP performance"}],techStack:["React","TypeScript","Next.js","Node.js","Firebase","Vite","TailwindCSS / Vanilla CSS"],caseStudyHighlight:{client:"Kone Farms & Agritech",project:"IoT Soil Telemetry & Agritech Research Hub",result:"+85.7% annual yield increase & 100% GSC sitemap indexing across 11 subdomains.",link:"https://farms.koneacademy.io"},faq:[{q:"How long does a custom web development project take?",a:"Standard business websites are delivered in 5–10 business days. Complex SaaS platforms take 3–5 weeks."},{q:"Is hosting and domain setup included?",a:"Yes! We configure global CDN deployment (Vercel, Firebase, GitHub Pages), SSL certificates, and custom subdomains."}]},"mobile-apps":{id:"mobile-apps",slug:"mobile-apps",title:"iOS & Android Mobile App Development",headline:"Native Performance Cross-Platform Mobile Applications",badge:"MOBILE SYSTEMS",summary:"From concept to App Store and Google Play publication. We engineer cross-platform mobile apps using React Native and Flutter, delivering native 60fps animations, push notifications, and offline-first database sync.",icon:"",coverGradient:"linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Cross-Platform iOS & Android Apps",spec:"Single codebase compiled to native iOS Swift & Android Kotlin binaries"},{title:"Offline-First Database Sync",spec:"Local SQLite / Realm storage with automatic cloud reconciliation"},{title:"Push Notifications & Deep Linking",spec:"Firebase Cloud Messaging (FCM) & Apple APNs integration"},{title:"Store Deployment & Compliance",spec:"Complete Apple App Store & Google Play Store submission & approval management"}],techStack:["React Native","Flutter","TypeScript","Firebase FCM","App Store Connect","Google Play Console"],caseStudyHighlight:{client:"Kone Kids Academy",project:"Interactive Mobile Learning Companion",result:"4.9★ rating with offline course access for students across West Africa.",link:"https://kids.koneacademy.io"},faq:[{q:"Do you publish our app directly to the App Store & Google Play?",a:"Yes, we handle all store listing assets, compliance requirements, privacy manifests, and final submission."},{q:"Can the app work offline without internet?",a:"Yes, we build local caching mechanisms that allow full app functionality offline."}]},"brand-design":{id:"brand-design",slug:"brand-design",title:"Brand Identity & UI/UX Design Systems",headline:"World-Class Logo Systems, Brand Manuals & Figma UI/UX Prototypes",badge:"DESIGN STUDIO",summary:"We craft iconic corporate brand identity systems that command trust and market authority. Includes logo vectors, color tokens, typography scales, interactive Figma UI/UX wireframes, and complete brand manuals.",icon:"",coverGradient:"linear-gradient(135deg, rgba(234, 179, 8, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Vector Logo Systems",spec:"Scalable SVG, EPS, PNG, and PDF asset packages with dark/light variants"},{title:"Interactive Figma UI/UX Prototypes",spec:"High-fidelity component design systems, wireframes, and interactive user flows"},{title:"Brand Identity Guidelines",spec:"PDF brand book detailing typography, color palettes, spacing rules, and usage"},{title:"Social & Corporate Marketing Assets",spec:"Banners, OpenGraph social previews, business cards, and flyer graphics"}],techStack:["Figma","Adobe Illustrator","Photoshop","SVG Vector Systems","Design Tokens"],caseStudyHighlight:{client:"Kone Consult",project:"Corporate Tech Brand & Design System",result:"Unified multi-subdomain corporate visual language for enterprise client acquisition.",link:"https://consult.koneacademy.io"},faq:[{q:"What files do I receive upon project completion?",a:"You receive all original Figma source files, vector SVG/EPS logos, exportable PNGs, and a PDF Brand Guideline manual."},{q:"Can you redesign our existing company logo?",a:"Absolutely. We specialize in modernizing legacy brand identities for digital-first platforms."}]},"cloud-devops":{id:"cloud-devops",slug:"cloud-devops",title:"Cloud Infrastructure & DevOps Automation",headline:"Scalable Cloud Systems, Automated CI/CD & Security Audits",badge:"CLOUD ARCHITECTURE",summary:"Architecting resilient, self-healing cloud infrastructure on AWS, Firebase, and Cloudflare. We build automated GitHub Actions CI/CD pipelines, SSL/TLS encryption, and real-time uptime monitoring.",icon:"",coverGradient:"linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Automated CI/CD Deployment Pipelines",spec:"GitHub Actions workflows for automated build, lint, test, and zero-downtime deployment"},{title:"Cloud Infrastructure Setup",spec:"Firebase Firestore, AWS S3/CloudFront, Cloudflare DNS, and serverless edge functions"},{title:"Security & Penetration Audits",spec:"Snyk SAST security scanning, DOM-XSS prevention, and SSL/TLS configuration"},{title:"Uptime & Performance Telemetry",spec:"Real-time error tracking, automated sitemap submission, and Google Search Console APIs"}],techStack:["AWS","Firebase","Cloudflare","GitHub Actions","Docker","Snyk","Node.js"],caseStudyHighlight:{client:"Kone Code IDE Ecosystem",project:"Cloud Compiler & Data Relay Infrastructure",result:"99.98% uptime serving thousands of automated compiler executions daily.",link:"https://code.koneacademy.io"},faq:[{q:"Can you migrate our legacy server to modern cloud hosting?",a:"Yes, we perform zero-downtime migrations to Firebase, Vercel, or AWS with SSL configuration."},{q:"How do you ensure our customer data is secure?",a:"We implement hardware-level security rules, CORS isolation, HTTPS encryption, and Snyk SAST vulnerability scans."}]}};function Iw({slug:n,onBack:e}){const t=lo[n]||lo["web-development"];return c.jsxs("div",{className:"service-detail-container",itemScope:!0,itemType:"https://schema.org/Service",children:[c.jsx("div",{className:"service-nav-bar",children:c.jsxs("a",{href:"#services",onClick:r=>{r.preventDefault(),window.location.hash="#services",e&&e()},className:"service-back-btn",children:[c.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"2.5",fill:"none",children:[c.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),c.jsx("polyline",{points:"12 19 5 12 12 5"})]}),"Back to Services Directory"]})}),c.jsxs("header",{className:"service-hero-banner",style:{background:t.coverGradient},children:[c.jsx("span",{className:"service-badge",children:t.badge}),c.jsx("h1",{className:"service-main-title",itemProp:"name",children:t.title}),c.jsx("p",{className:"service-headline",itemProp:"description",children:t.headline}),c.jsx("p",{className:"service-summary",children:t.summary}),c.jsxs("div",{className:"service-hero-cta",children:[c.jsx("a",{href:`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(t.title)}%20service.`,target:"_blank",rel:"noopener noreferrer",className:"service-primary-btn",children:c.jsx("span",{children:"Book a Technical Consultation"})}),c.jsx("a",{href:"#pricing",className:"service-secondary-btn",children:c.jsx("span",{children:"View Pricing Estimates"})})]})]}),c.jsxs("section",{className:"service-deliverables-section",children:[c.jsx("h2",{className:"section-title",children:"Key Technical Deliverables & Features"}),c.jsx("div",{className:"deliverables-grid",children:t.deliverables.map((r,i)=>c.jsxs("div",{className:"deliverable-card",children:[c.jsxs("span",{className:"del-num",children:["0",i+1]}),c.jsx("h3",{className:"del-title",children:r.title}),c.jsx("p",{className:"del-spec",children:r.spec})]},i))})]}),c.jsxs("section",{className:"service-tech-section",children:[c.jsx("h2",{className:"section-title",children:"Engineering Tech Stack"}),c.jsx("div",{className:"tech-pills-row",children:t.techStack.map(r=>c.jsx("span",{className:"service-tech-pill",children:r},r))})]}),c.jsx("section",{className:"service-case-section",children:c.jsxs("div",{className:"case-highlight-card",children:[c.jsxs("div",{className:"case-meta-header",children:[c.jsx("span",{className:"case-label",children:"FEATURED CASE STUDY"}),c.jsx("span",{className:"case-client",children:t.caseStudyHighlight.client})]}),c.jsx("h3",{className:"case-title",children:t.caseStudyHighlight.project}),c.jsxs("p",{className:"case-result",children:["🎯 ",t.caseStudyHighlight.result]}),t.caseStudyHighlight.link&&c.jsxs("a",{href:t.caseStudyHighlight.link,target:"_blank",rel:"noopener noreferrer",className:"case-link",children:[c.jsx("span",{children:"Explore Live Platform"}),c.jsxs("svg",{viewBox:"0 0 24 24",width:"14",height:"14",stroke:"currentColor",strokeWidth:"2",fill:"none",children:[c.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),c.jsx("polyline",{points:"15 3 21 3 21 9"}),c.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]})}),c.jsxs("section",{className:"service-faq-section",children:[c.jsx("h2",{className:"section-title",children:"❓ Frequently Asked Questions"}),c.jsx("div",{className:"faq-grid",children:t.faq.map((r,i)=>c.jsxs("div",{className:"faq-card",children:[c.jsxs("h3",{className:"faq-q",children:["Q: ",r.q]}),c.jsx("p",{className:"faq-a",children:r.a})]},i))})]})]})}function Zl({onSelectService:n}){const e=Object.values(lo);return c.jsxs("section",{className:"services-hub-section",id:"services",children:[c.jsxs("div",{className:"services-hero-header",children:[c.jsx("span",{className:"services-badge",children:"AGENCY SPECIALIZATIONS"}),c.jsx("h2",{className:"services-title",children:"Digital Engineering & Design Services"}),c.jsx("p",{className:"services-subtitle",children:"From custom SaaS applications and native mobile apps to corporate brand design and cloud DevOps infrastructure."})]}),c.jsx("div",{className:"services-hub-grid",children:e.map(t=>c.jsxs("div",{className:"service-hub-card",children:[c.jsx("div",{className:"card-top-row",children:c.jsx("span",{className:"hub-card-badge",children:t.badge})}),c.jsx("h3",{className:"hub-card-title",children:t.title}),c.jsx("p",{className:"hub-card-headline",children:t.headline}),c.jsxs("p",{className:"hub-card-summary",children:[t.summary.slice(0,140),"..."]}),c.jsxs("div",{className:"hub-card-deliverables",children:[c.jsx("strong",{children:"Includes:"}),c.jsx("ul",{children:t.deliverables.slice(0,2).map((r,i)=>c.jsxs("li",{children:["• ",r.title]},i))})]}),c.jsxs("a",{href:`#services/${t.slug}`,onClick:r=>{r.preventDefault(),window.location.hash=`#services/${t.slug}`,n(t.slug)},className:"view-service-btn",children:[c.jsx("span",{children:"Explore Dedicated Page & Specifications"}),c.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2.5",fill:"none",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]},t.id))})]})}function Tw(){const n=O.useRef(null),[e,t]=O.useState(!1),[r,i]=O.useState({}),s=p=>{p&&i(p),t(!0)},[a,u]=O.useState(()=>{const p=typeof window<"u"?window.location.hash:"";return p.startsWith("#services/")?"service-detail":p.startsWith("#services")?"services":p.startsWith("#work")?"work":p.startsWith("#pricing")?"pricing":p.startsWith("#tools")?"tools":p.startsWith("#crm")?"crm":p.startsWith("#dashboard")?"dashboard":"home"}),[d,f]=O.useState(()=>{const p=typeof window<"u"?window.location.hash:"";return p.startsWith("#services/")?p.replace("#services/",""):"web-development"});return O.useEffect(()=>{const p=()=>{const _=window.location.hash;if(_.startsWith("#services/")){const x=_.replace("#services/","");f(x),u("service-detail")}else _.startsWith("#services")?u("services"):_.startsWith("#work")?u("work"):_.startsWith("#pricing")?u("pricing"):_.startsWith("#tools")?u("tools"):_.startsWith("#crm")?u("crm"):_.startsWith("#dashboard")?u("dashboard"):u("home")};return window.addEventListener("hashchange",p),p(),()=>window.removeEventListener("hashchange",p)},[]),O.useEffect(()=>{var P;if(navigator.userAgent==="ReactSnap"){(((P=n.current)==null?void 0:P.querySelectorAll(".fade-in-up"))||[]).forEach(N=>{N.classList.add("visible")});return}const _=new IntersectionObserver(D=>{D.forEach(N=>{N.isIntersecting&&N.target.classList.add("visible")})},{threshold:.1}),x=()=>{var N;(((N=n.current)==null?void 0:N.querySelectorAll(".fade-in-up:not(.observed)"))||[]).forEach(z=>{_.observe(z),z.classList.add("observed")})};x();const C=new MutationObserver(()=>{x()});return n.current&&C.observe(n.current,{childList:!0,subtree:!0}),()=>{_.disconnect(),C.disconnect()}},[]),c.jsxs("div",{className:"hub-container",ref:n,children:[c.jsxs("header",{className:"hub-header",children:[c.jsxs("div",{className:"logo",style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[c.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",className:"logo-icon neon-logo",width:"40",height:"40"}),c.jsxs("span",{className:"logo-text",children:["KONE ",c.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]}),c.jsxs("nav",{className:"hub-nav",children:[c.jsx("a",{href:"#",className:a==="home"?"active-nav":"",children:"Overview"}),c.jsx("a",{href:"#services",className:a==="services"||a==="service-detail"?"active-nav":"",children:"Services"}),c.jsx("a",{href:"#work",className:a==="work"?"active-nav":"",children:"Our Work"}),c.jsx("a",{href:"#tools",className:a==="tools"?"active-nav":"",children:"Free Tools"}),c.jsx("a",{href:"#dashboard",className:a==="dashboard"?"active-nav":"",style:{color:"var(--cyan-glow)",fontWeight:800},children:"Dashboard"}),c.jsx("a",{href:"#pricing",className:a==="pricing"?"active-nav":"",children:"Pricing"}),c.jsx("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services.",target:"_blank",rel:"noopener noreferrer",children:"Contact"}),c.jsx(ww,{})]})]}),c.jsx("main",{id:"main-content",style:{flex:"1 0 auto",display:"flex",flexDirection:"column",width:"100%",gap:"3rem"},children:a==="service-detail"?c.jsx(Iw,{slug:d,onBack:()=>u("services")}):a==="services"?c.jsx(Zl,{onSelectService:p=>{f(p),u("service-detail")}}):a==="work"?c.jsx(Jl,{}):a==="tools"?c.jsx(Yl,{onOpenWizard:s}):a==="dashboard"?c.jsx(vw,{}):a==="pricing"?c.jsx(Xl,{}):c.jsxs(c.Fragment,{children:[c.jsx(jf,{onOpenWizard:()=>s()}),c.jsx(Of,{}),c.jsx(Zl,{onSelectService:p=>{f(p),u("service-detail")}}),c.jsx(Jl,{}),c.jsx(Yl,{onOpenWizard:s}),c.jsx(yw,{}),c.jsx(Xl,{})]})}),c.jsx(bw,{onOpenWizard:()=>s()}),c.jsx(gw,{isOpen:e,onClose:()=>t(!1),initialPhone:r.phone,initialBusinessName:r.businessName}),c.jsxs("footer",{className:"hub-footer",style:{marginTop:"2rem",paddingTop:"2.5rem",paddingBottom:"6.5rem",borderTop:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",flexDirection:"column",gap:"1.5rem",alignItems:"center",textAlign:"center"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[c.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",className:"logo-icon neon-logo",width:"36",height:"36"}),c.jsxs("span",{className:"logo-text",style:{fontSize:"1.2rem",fontWeight:800},children:["KONE ",c.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]}),c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",maxWidth:"520px",margin:"0 auto",lineHeight:"1.6"},children:"Ghana's premier digital studio for high-performance business websites, web apps, & automated WhatsApp lead engines."}),c.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",justifyContent:"center"},children:[c.jsxs("a",{href:"https://whatsapp.com/channel/0029Vb7wdZMJUM2fepkMfR0D",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(37, 211, 102, 0.12)",border:"1px solid rgba(37, 211, 102, 0.35)",color:"#25d366",padding:"0.5rem 1.1rem",borderRadius:"25px",fontSize:"0.85rem",fontWeight:700,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.45rem",boxShadow:"0 0 12px rgba(37, 211, 102, 0.15)",transition:"all 0.2s ease"},children:[c.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor",children:c.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"WhatsApp Channel"]}),c.jsxs("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch.",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(0, 255, 255, 0.08)",border:"1px solid rgba(0, 255, 255, 0.25)",color:"var(--cyan-glow)",padding:"0.5rem 1.1rem",borderRadius:"25px",fontSize:"0.85rem",fontWeight:700,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.45rem",boxShadow:"0 0 12px rgba(0, 255, 255, 0.1)",transition:"all 0.2s ease"},children:[c.jsx("span",{children:"💬"}),c.jsx("span",{children:"Direct Line (+233 55 199 3820)"})]}),c.jsxs("a",{href:"https://www.koneacademy.io",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"var(--text-muted)",padding:"0.5rem 1.1rem",borderRadius:"25px",fontSize:"0.85rem",fontWeight:700,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.45rem",transition:"all 0.2s ease"},children:[c.jsx("span",{children:"🌐"}),c.jsx("span",{children:"Kone Academy Ecosystem"})]})]}),c.jsxs("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginTop:"0.5rem"},children:["© ",new Date().getFullYear()," Kone Digital. Powered by Kone Academy. All rights reserved."]})]}),c.jsx("a",{href:"https://wa.me/233551993820",className:"whatsapp-fab",target:"_blank",rel:"noopener noreferrer","aria-label":"Contact us on WhatsApp",children:c.jsx("svg",{viewBox:"0 0 24 24",children:c.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.132 1.38 4.788 1.381 5.069 0 9.199-4.13 9.201-9.199.001-2.454-.952-4.761-2.686-6.494-1.734-1.734-4.041-2.688-6.498-2.689-5.074 0-9.207 4.129-9.208 9.199-.001 1.73.455 3.415 1.32 4.89l-.103.16-1.11 4.054 4.151-1.089.16.095zm10.125-6.702c-.281-.141-1.664-.822-1.921-.916-.257-.094-.443-.141-.63.141-.186.281-.723.916-.885 1.102-.162.186-.324.21-.605.069-.282-.141-1.189-.439-2.264-1.401-.836-.746-1.4-1.667-1.564-1.948-.164-.282-.017-.434.124-.573.127-.125.281-.328.422-.492.141-.164.188-.281.282-.469.094-.188.047-.352-.023-.492-.07-.141-.63-1.523-.863-2.086-.226-.552-.455-.477-.63-.486-.162-.008-.349-.01-.536-.01-.188 0-.492.07-.75.352-.257.282-.984.961-.984 2.343 0 1.382 1.008 2.718 1.148 2.906.141.188 1.984 3.029 4.806 4.242.671.289 1.194.462 1.602.592.674.214 1.287.184 1.77.112.539-.081 1.664-.68 1.898-1.336.234-.656.234-1.219.164-1.336-.07-.117-.257-.188-.539-.328z"})})}),c.jsxs("nav",{className:"digital-mobile-bottom-nav",children:[c.jsx("a",{href:"#",className:`mobile-tab ${a==="home"?"active":""}`,onClick:()=>u("home"),title:"Home","aria-label":"Home",children:c.jsx("div",{className:"mobile-icon-pill",children:c.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",stroke:"currentColor",strokeWidth:"2.2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),c.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})})}),c.jsx("a",{href:"#work",className:`mobile-tab ${a==="work"?"active":""}`,onClick:()=>u("work"),title:"Our Work","aria-label":"Our Work",children:c.jsx("div",{className:"mobile-icon-pill",children:c.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",stroke:"currentColor",strokeWidth:"2.2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),c.jsx("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]})})}),c.jsx("a",{href:"#pricing",className:`mobile-tab ${a==="pricing"?"active":""}`,onClick:()=>u("pricing"),title:"Pricing","aria-label":"Pricing",children:c.jsx("div",{className:"mobile-icon-pill",children:c.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",stroke:"currentColor",strokeWidth:"2.2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),c.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]})})}),c.jsx("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services.",target:"_blank",rel:"noopener noreferrer",className:"mobile-tab",title:"Contact","aria-label":"Contact via WhatsApp",children:c.jsx("div",{className:"mobile-icon-pill",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"22",height:"22",stroke:"currentColor",strokeWidth:"2.2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})})})})]})]})}class Ew extends O.Component{constructor(){super(...arguments);lc(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}async componentDidCatch(t,r){console.error("Uncaught error caught by ErrorBoundary:",t,r);try{await Ko(_n(Me,"client_errors"),{appName:this.props.appName||"Kone-Digital",errorMessage:t.message,errorStack:t.stack,componentStack:r.componentStack,url:window.location.href,userAgent:navigator.userAgent,timestamp:Ii()}),console.log("Error successfully logged to Firestore.")}catch(i){console.error("Failed to log error to Firestore:",i)}}render(){return this.state.hasError?c.jsxs("div",{style:{padding:"2rem",textAlign:"center",fontFamily:"system-ui, -apple-system, sans-serif",color:"#f8fafc",background:"#0a0a0f",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[c.jsx("h2",{style:{color:"#ec4899",marginBottom:"1rem",fontSize:"2rem"},children:"Oops, something went wrong."}),c.jsx("p",{style:{color:"#94a3b8",marginBottom:"2rem",maxWidth:"500px",lineHeight:"1.6"},children:this.props.fallbackMessage||"We're sorry, but an unexpected error occurred. Our engineering team has been notified. Please try refreshing the page."}),c.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"12px 24px",background:"#ec4899",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"1rem",boxShadow:"0 0 15px rgba(236, 72, 153, 0.4)"},children:"Refresh Page"})]}):this.props.children}}const eu=document.getElementById("root");eu&&iu(eu).render(c.jsx(tu.StrictMode,{children:c.jsx(Ew,{children:c.jsx(_w,{children:c.jsx(Tw,{})})})}));
