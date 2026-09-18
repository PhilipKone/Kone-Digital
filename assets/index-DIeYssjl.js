var Zh=Object.defineProperty;var ed=(n,e,t)=>e in n?Zh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ma=(n,e,t)=>ed(n,typeof e!="symbol"?e+"":e,t);import{r as z,a as td,R as qc}from"./vendor-react-wGySg1uH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Kc={exports:{}},ri={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd=z,rd=Symbol.for("react.element"),id=Symbol.for("react.fragment"),sd=Object.prototype.hasOwnProperty,od=nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ad={key:!0,ref:!0,__self:!0,__source:!0};function Qc(n,e,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)sd.call(e,r)&&!ad.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rd,type:n,key:o,ref:a,props:i,_owner:od.current}}ri.Fragment=id;ri.jsx=Qc;ri.jsxs=Qc;Kc.exports=ri;var u=Kc.exports,Jc,ga=td;Jc=ga.createRoot,ga.hydrateRoot;const cd=({onOpenWizard:n})=>{const[e,t]=z.useState("stone");return u.jsxs("section",{className:"hub-hero",style:{padding:"3rem 1rem 4rem",maxWidth:"1200px",margin:"0 auto"},children:[u.jsxs("div",{style:{textAlign:"center",maxWidth:"850px",margin:"0 auto 3rem"},children:[u.jsxs("span",{className:"badge-pill gold",style:{marginBottom:"1.5rem"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"var(--gold-accent)"}}),"48-HOUR MANAGED LAUNCH SLA"]}),u.jsxs("h1",{className:"heading-luminance",style:{fontSize:"clamp(2.4rem, 6vw, 3.8rem)",fontWeight:900,lineHeight:1.12,marginBottom:"1.2rem",letterSpacing:"-0.035em"},children:["Putting Ghana's Best",u.jsx("br",{}),u.jsx("span",{className:"gold-luminance",children:"Businesses Online."})]}),u.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"1.12rem",lineHeight:1.7,marginBottom:"2.5rem",maxWidth:"720px",margin:"0 auto 2.5rem",letterSpacing:"-0.01em"},children:["Traditional marketing ends at the flyer. We engineer high-performance Website as a Service (WaaS) platforms with automated ",u.jsx("strong",{style:{color:"#FFFFFF",fontWeight:700},children:"MoMo payments"})," and direct ",u.jsx("strong",{style:{color:"#FFFFFF",fontWeight:700},children:"WhatsApp lead routing"}),"."]}),u.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[u.jsxs("button",{onClick:n,className:"btn-primary",children:[u.jsx("span",{children:"Start Fast-Track Project"}),u.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),u.jsx("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20request%20a%20consultation%20for%20my%20business%20website.",target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",children:u.jsx("span",{children:"Request Consultation"})})]})]}),u.jsxs("div",{className:"hero-demo-stage neon-border",style:{background:"var(--bg-surface)",borderRadius:"20px",padding:"1.5rem",maxWidth:"960px",margin:"0 auto",boxShadow:"0 20px 50px rgba(0,0,0,0.6)"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"0.6rem",marginBottom:"1.5rem",borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"1rem"},children:[u.jsx("button",{onClick:()=>t("stone"),className:e==="stone"?"btn-primary":"btn-secondary",style:{padding:"0.35rem 0.95rem",borderRadius:"50px",fontSize:"0.8rem"},children:"Stone Architecture"}),u.jsx("button",{onClick:()=>t("fashion"),className:e==="fashion"?"btn-primary":"btn-secondary",style:{padding:"0.35rem 0.95rem",borderRadius:"50px",fontSize:"0.8rem"},children:"Fashion Retail"}),u.jsx("button",{onClick:()=>t("foundation"),className:e==="foundation"?"btn-primary":"btn-secondary",style:{padding:"0.35rem 0.95rem",borderRadius:"50px",fontSize:"0.8rem"},children:"Social Impact NGO"})]}),u.jsxs("div",{style:{borderRadius:"12px",overflow:"hidden",minHeight:"340px",height:"auto",position:"relative",background:"#0d1117"},children:[e==="stone"&&u.jsxs("div",{style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/sedemson_stone_hero.png")',backgroundSize:"cover",backgroundPosition:"center",color:"#fff",padding:"2rem 1.2rem",textAlign:"center"},children:[u.jsx("span",{className:"badge-pill gold",style:{marginBottom:"0.8rem"},children:"FEATURED B2B CLIENT"}),u.jsx("h2",{style:{fontSize:"clamp(1.3rem, 5vw, 2rem)",fontFamily:"var(--font-heading)",fontWeight:800},children:"Sedemson Stone Craftsmanship"}),u.jsx("p",{style:{maxWidth:"500px",fontSize:"0.9rem",opacity:.85,marginTop:"0.5rem"},children:"Natural Stone Cladding & Architectural Finishes across Ghana."}),u.jsxs("a",{href:"#work",style:{marginTop:"1.2rem",color:"#F8FAFC",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",padding:"0.35rem 0.9rem",borderRadius:"50px",fontWeight:650,fontSize:"0.8rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[u.jsx("span",{children:"Explore Client Showcase"}),u.jsx("span",{children:"➔"})]})]}),e==="fashion"&&u.jsxs("div",{style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/emewear/emewear_hero.jpg")',backgroundSize:"cover",backgroundPosition:"top",color:"#fff",padding:"2rem 1.2rem",textAlign:"center"},children:[u.jsx("span",{className:"badge-pill gold",style:{marginBottom:"0.8rem"},children:"E-COMMERCE SHOWCASE"}),u.jsx("h2",{style:{fontSize:"clamp(1.3rem, 5vw, 2rem)",fontFamily:"var(--font-heading)",fontWeight:800},children:"Emewear Plus-Size Ankara"}),u.jsx("p",{style:{maxWidth:"500px",fontSize:"0.9rem",opacity:.85,marginTop:"0.5rem"},children:"Handcrafted Ankara wide-leg cargo trousers & royal batik palazzo sets."}),u.jsxs("a",{href:"/emewear/index.html",target:"_blank",rel:"noopener noreferrer",style:{marginTop:"1.2rem",color:"#F8FAFC",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",padding:"0.35rem 0.9rem",borderRadius:"50px",fontWeight:650,fontSize:"0.8rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[u.jsx("span",{children:"Explore Client Showcase"}),u.jsx("span",{children:"➔"})]})]}),e==="foundation"&&u.jsxs("div",{style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(7, 30, 74, 0.78), rgba(0, 59, 153, 0.82)), url("/ansah-delali/cohort-group.jpg")',backgroundSize:"cover",backgroundPosition:"center",color:"#fff",padding:"2rem 1.2rem",textAlign:"center"},children:[u.jsx("span",{className:"badge-pill gold",style:{marginBottom:"0.8rem",background:"#FA8C16",color:"#fff"},children:"FEATURED SOCIAL IMPACT INITIATIVE"}),u.jsx("h2",{style:{fontSize:"clamp(1.3rem, 5vw, 2rem)",fontFamily:"var(--font-heading)",fontWeight:800},children:"Ansah Delali Foundation"}),u.jsx("p",{style:{maxWidth:"520px",fontSize:"0.9rem",opacity:.92,marginTop:"0.5rem"},children:"Giving Back, Rising Together — Educational mentorship, SkillUp 1.0 outreach, and digital skills empowerment across Ghana."}),u.jsxs("a",{href:"/ansah-delali/index.html",target:"_blank",rel:"noopener noreferrer",style:{marginTop:"1.2rem",color:"#FFFFFF",background:"#0052CC",border:"1px solid rgba(255,255,255,0.3)",padding:"0.45rem 1.1rem",borderRadius:"50px",fontWeight:700,fontSize:"0.84rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.4rem",boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:[u.jsx("span",{children:"Explore Foundation Portal"}),u.jsx("span",{children:"➔"})]})]})]})]})]})},ld="/assets/momo-Du5GlNOn.png",ud="/assets/telecel-8JjmPpPR.png",hd="/assets/at_money-DjPIB_Ur.png",dd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20175.216%20175.552'%20width='100%25'%20height='100%25'%3e%3cpath%20fill='%2325D366'%20d='M87.184%2025.227c-33.733%200-61.166%2027.423-61.178%2061.13a60.98%2060.98%200%200%200%209.349%2032.535l1.455%202.313-6.179%2022.558%2023.146-6.069%202.235%201.324c9.387%205.571%2020.15%208.517%2031.126%208.523h.023c33.707%200%2061.14-27.426%2061.153-61.135a60.75%2060.75%200%200%200-17.895-43.251%2060.75%2060.75%200%200%200-43.235-17.928z'/%3e%3cpath%20fill='%23FFFFFF'%20fill-rule='evenodd'%20d='M68.772%2055.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226%200-3.218.46-4.902%202.3s-6.435%206.287-6.435%2015.332%206.588%2017.785%207.506%2019.013%2012.718%2020.381%2031.405%2027.75c15.529%206.124%2018.689%204.906%2022.061%204.6s10.877-4.447%2012.408-8.74%201.532-7.971%201.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746%205.979-5.819%207.206-2.144%201.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824%201.838-2.147%202.759-3.22s1.224-1.84%201.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647'/%3e%3c/svg%3e",fd=()=>{const n=[{metric:"48h",title:"Rapid Launch Turnaround",description:"Your bespoke business hub deployed with zero technical overhead.",color:"var(--cyan-glow)"},{metric:"Direct",title:"MoMo & WhatsApp Routing",description:"Automated order collection straight to your MTN, Telecel, or AT phone.",color:"var(--gold-accent)"},{metric:"100%",title:"Fully Managed WaaS",description:"Zero maintenance headaches. We handle hosting, SSL, updates & security.",color:"#10b981"},{metric:"99.9%",title:"Guaranteed Uptime & Speed",description:"Ultra-lightweight code optimized for African 3G/4G networks.",color:"var(--cyan-glow)"}];return u.jsxs("section",{className:"trust-metrics-section",style:{padding:"3rem 0",margin:"2rem 0"},children:[u.jsxs("div",{className:"section-title",style:{textAlign:"center",marginBottom:"2.5rem"},children:[u.jsxs("span",{className:"badge-pill cyan",children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"var(--cyan-glow)"}}),"ENTERPRISE ARCHITECTURE • ZERO MAINTENANCE"]}),u.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.7rem, 5vw, 2.4rem)",marginTop:"0.9rem",fontWeight:850},children:["Engineered for ",u.jsx("span",{className:"cyan-luminance",children:"Real Business Growth"})]})]}),u.jsx("div",{className:"metrics-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 220px), 1fr))",gap:"1.2rem",maxWidth:"1100px",margin:"0 auto",padding:"0 1rem"},children:n.map((e,t)=>u.jsxs("div",{className:"metric-card neon-border",style:{background:"var(--bg-surface)",padding:"2rem 1.5rem",borderRadius:"16px",textAlign:"center",backdropFilter:"blur(10px)"},children:[u.jsx("div",{style:{fontSize:"2.6rem",fontWeight:900,color:e.color},children:e.metric}),u.jsx("h3",{style:{color:"var(--text-main)",fontSize:"1rem",fontWeight:700,marginTop:"0.6rem",marginBottom:"0.3rem"},children:e.title}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.82rem",lineHeight:1.5},children:e.description})]},t))}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1.2rem",marginTop:"3.5rem",width:"100%",boxSizing:"border-box"},children:[u.jsxs("div",{style:{color:"var(--text-subtle)",fontSize:"0.74rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em",display:"flex",alignItems:"center",gap:"0.8rem"},children:[u.jsx("span",{style:{width:"28px",height:"1px",background:"rgba(255, 255, 255, 0.12)"}}),"SUPPORTED PAYMENT & LEAD GATEWAYS",u.jsx("span",{style:{width:"28px",height:"1px",background:"rgba(255, 255, 255, 0.12)"}})]}),u.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.85rem",flexWrap:"wrap",maxWidth:"1100px",margin:"0 auto",padding:"0 1rem"},children:[u.jsxs("div",{className:"integration-badge mtn",title:"MTN Mobile Money (MoMo) API Integration",children:[u.jsx("img",{src:ld,alt:"MTN MoMo",style:{borderRadius:"6px"}}),u.jsx("span",{children:"MTN MoMo"})]}),u.jsxs("div",{className:"integration-badge telecel",title:"Telecel Cash Automated Payment Gateway",children:[u.jsx("img",{src:ud,alt:"Telecel Cash",style:{borderRadius:"50%"}}),u.jsx("span",{children:"Telecel Cash"})]}),u.jsxs("div",{className:"integration-badge at",title:"AT Money (AirtelTigo) Automated Gateway",children:[u.jsx("img",{src:hd,alt:"AT Money",style:{borderRadius:"50%"}}),u.jsx("span",{children:"AT Money"})]}),u.jsxs("div",{className:"integration-badge whatsapp",title:"WhatsApp Business Automated Order & Lead Routing",children:[u.jsx("img",{src:dd,alt:"WhatsApp Business"}),u.jsx("span",{children:"WhatsApp Business"})]})]})]})]})},pd=()=>{};var ya={};/**
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
 */const Yc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},md=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],h=n[t++],d=((i&7)<<18|(o&63)<<12|(a&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,h=a?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,_=o>>2,I=(o&3)<<4|h>>4;let S=(h&15)<<2|f>>6,P=f&63;d||(P=64,a||(S=64)),r.push(t[_],t[I],t[S],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):md(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],h=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const I=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||h==null||f==null||I==null)throw new gd;const S=o<<2|h>>4;if(r.push(S),f!==64){const P=h<<4&240|f>>2;if(r.push(P),I!==64){const k=f<<6&192|I;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yd=function(n){const e=Yc(n);return Xc.encodeByteArray(e,!0)},Mr=function(n){return yd(n).replace(/\./g,"")},Zc=function(n){try{return Xc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _d(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vd=()=>_d().__FIREBASE_DEFAULTS__,wd=()=>{if(typeof process>"u"||typeof ya>"u")return;const n=ya.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Id=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zc(n[1]);return e&&JSON.parse(e)},ii=()=>{try{return pd()||vd()||wd()||Id()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},el=n=>{var e,t;return(t=(e=ii())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ed=n=>{const e=el(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},tl=()=>{var n;return(n=ii())==null?void 0:n.config},nl=n=>{var e;return(e=ii())==null?void 0:e[`_${n}`]};/**
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
 */class Td{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function bd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Mr(JSON.stringify(t)),Mr(JSON.stringify(a)),""].join(".")}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ad(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Sd(){var e;const n=(e=ii())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Rd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cd(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Pd(){return!Sd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function il(){try{return typeof indexedDB=="object"}catch{return!1}}function sl(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}function kd(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Nd="FirebaseError";class Le extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Nd,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bt.prototype.create)}}class Bt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Dd(o,r):"Error",h=`${this.serviceName}: ${a} (${i}).`;return new Le(i,h,r)}}function Dd(n,e){return n.replace(Od,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Od=/\{\$([^}]+)}/g;function Vd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(_a(o)&&_a(a)){if(!yt(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function _a(n){return n!==null&&typeof n=="object"}/**
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
 */function Jn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Md(n,e){const t=new Ld(n,e);return t.subscribe.bind(t)}class Ld{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");jd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=zi),i.error===void 0&&(i.error=zi),i.complete===void 0&&(i.complete=zi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function zi(){}/**
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
 */const Fd=1e3,Ud=2,Bd=4*60*60*1e3,Wd=.5;function va(n,e=Fd,t=Ud){const r=e*Math.pow(t,n),i=Math.round(Wd*r*(Math.random()-.5)*2);return Math.min(Bd,r+i)}/**
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
 */function Ae(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Yn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ol(n){return(await fetch(n,{credentials:"include"})).ok}class Me{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rt="[DEFAULT]";/**
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
 */class zd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Td;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hd(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&a.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$d(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $d(n){return n===Rt?void 0:n}function Hd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const qd={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Kd=U.INFO,Qd={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Jd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Qd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class si{constructor(e){this.name=e,this._logLevel=Kd,this._logHandler=Jd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const Yd=(n,e)=>e.some(t=>n instanceof t);let wa,Ia;function Xd(){return wa||(wa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zd(){return Ia||(Ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const al=new WeakMap,rs=new WeakMap,cl=new WeakMap,$i=new WeakMap,As=new WeakMap;function ef(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(pt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&al.set(t,n)}).catch(()=>{}),As.set(e,n),e}function tf(n){if(rs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});rs.set(n,e)}let is={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return rs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nf(n){is=n(is)}function rf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Hi(this),e,...t);return cl.set(r,e.sort?e.sort():[e]),pt(r)}:Zd().includes(n)?function(...e){return n.apply(Hi(this),e),pt(al.get(this))}:function(...e){return pt(n.apply(Hi(this),e))}}function sf(n){return typeof n=="function"?rf(n):(n instanceof IDBTransaction&&tf(n),Yd(n,Xd())?new Proxy(n,is):n)}function pt(n){if(n instanceof IDBRequest)return ef(n);if($i.has(n))return $i.get(n);const e=sf(n);return e!==n&&($i.set(n,e),As.set(e,n)),e}const Hi=n=>As.get(n);function ll(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),h=pt(a);return r&&a.addEventListener("upgradeneeded",d=>{r(pt(a.result),d.oldVersion,d.newVersion,pt(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),h.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),h}const of=["get","getKey","getAll","getAllKeys","count"],af=["put","add","delete","clear"],Gi=new Map;function Ea(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Gi.get(e))return Gi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=af.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||of.includes(t)))return;const o=async function(a,...h){const d=this.transaction(a,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(h.shift())),(await Promise.all([f[t](...h),i&&d.done]))[0]};return Gi.set(e,o),o}nf(n=>({...n,get:(e,t,r)=>Ea(e,t)||n.get(e,t,r),has:(e,t)=>!!Ea(e,t)||n.has(e,t)}));/**
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
 */class cf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function lf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ss="@firebase/app",Ta="0.14.11";/**
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
 */const et=new si("@firebase/app"),uf="@firebase/app-compat",hf="@firebase/analytics-compat",df="@firebase/analytics",ff="@firebase/app-check-compat",pf="@firebase/app-check",mf="@firebase/auth",gf="@firebase/auth-compat",yf="@firebase/database",_f="@firebase/data-connect",vf="@firebase/database-compat",wf="@firebase/functions",If="@firebase/functions-compat",Ef="@firebase/installations",Tf="@firebase/installations-compat",bf="@firebase/messaging",Af="@firebase/messaging-compat",Sf="@firebase/performance",xf="@firebase/performance-compat",Rf="@firebase/remote-config",Cf="@firebase/remote-config-compat",Pf="@firebase/storage",kf="@firebase/storage-compat",Nf="@firebase/firestore",Df="@firebase/ai",Of="@firebase/firestore-compat",Vf="firebase",Mf="12.12.0";/**
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
 */const os="[DEFAULT]",Lf={[ss]:"fire-core",[uf]:"fire-core-compat",[df]:"fire-analytics",[hf]:"fire-analytics-compat",[pf]:"fire-app-check",[ff]:"fire-app-check-compat",[mf]:"fire-auth",[gf]:"fire-auth-compat",[yf]:"fire-rtdb",[_f]:"fire-data-connect",[vf]:"fire-rtdb-compat",[wf]:"fire-fn",[If]:"fire-fn-compat",[Ef]:"fire-iid",[Tf]:"fire-iid-compat",[bf]:"fire-fcm",[Af]:"fire-fcm-compat",[Sf]:"fire-perf",[xf]:"fire-perf-compat",[Rf]:"fire-rc",[Cf]:"fire-rc-compat",[Pf]:"fire-gcs",[kf]:"fire-gcs-compat",[Nf]:"fire-fst",[Of]:"fire-fst-compat",[Df]:"fire-vertex","fire-js":"fire-js",[Vf]:"fire-js-all"};/**
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
 */const Lr=new Map,jf=new Map,as=new Map;function ba(n,e){try{n.container.addComponent(e)}catch(t){et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function He(n){const e=n.name;if(as.has(e))return et.debug(`There were multiple attempts to register component ${e}.`),!1;as.set(e,n);for(const t of Lr.values())ba(t,n);for(const t of jf.values())ba(t,n);return!0}function Wt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Be(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ff={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mt=new Bt("app","Firebase",Ff);/**
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
 */class Uf{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
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
 */const hn=Mf;function ul(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:os,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw mt.create("bad-app-name",{appName:String(i)});if(t||(t=tl()),!t)throw mt.create("no-options");const o=Lr.get(i);if(o){if(yt(t,o.options)&&yt(r,o.config))return o;throw mt.create("duplicate-app",{appName:i})}const a=new Gd(i);for(const d of as.values())a.addComponent(d);const h=new Uf(t,r,a);return Lr.set(i,h),h}function Ss(n=os){const e=Lr.get(n);if(!e&&n===os&&tl())return ul();if(!e)throw mt.create("no-app",{appName:n});return e}function Pe(n,e,t){let r=Lf[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),et.warn(a.join(" "));return}He(new Me(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Bf="firebase-heartbeat-database",Wf=1,Bn="firebase-heartbeat-store";let qi=null;function hl(){return qi||(qi=ll(Bf,Wf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Bn)}catch(t){console.warn(t)}}}}).catch(n=>{throw mt.create("idb-open",{originalErrorMessage:n.message})})),qi}async function zf(n){try{const t=(await hl()).transaction(Bn),r=await t.objectStore(Bn).get(dl(n));return await t.done,r}catch(e){if(e instanceof Le)et.warn(e.message);else{const t=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});et.warn(t.message)}}}async function Aa(n,e){try{const r=(await hl()).transaction(Bn,"readwrite");await r.objectStore(Bn).put(e,dl(n)),await r.done}catch(t){if(t instanceof Le)et.warn(t.message);else{const r=mt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});et.warn(r.message)}}}function dl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $f=1024,Hf=30;class Gf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Sa();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Hf){const a=Qf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){et.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sa(),{heartbeatsToSend:r,unsentEntries:i}=qf(this._heartbeatsCache.heartbeats),o=Mr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return et.warn(t),""}}}function Sa(){return new Date().toISOString().substring(0,10)}function qf(n,e=$f){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),xa(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),xa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Kf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return il()?sl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Aa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Aa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xa(n){return Mr(JSON.stringify({version:2,heartbeats:n})).length}function Qf(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Jf(n){He(new Me("platform-logger",e=>new cf(e),"PRIVATE")),He(new Me("heartbeat",e=>new Gf(e),"PRIVATE")),Pe(ss,Ta,n),Pe(ss,Ta,"esm2020"),Pe("fire-js","")}Jf("");var Ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xs;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function y(){}y.prototype=m.prototype,w.F=m.prototype,w.prototype=new y,w.prototype.constructor=w,w.D=function(E,v,b){for(var g=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)g[pe-2]=arguments[pe];return m.prototype[v].apply(E,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,y){y||(y=0);const E=Array(16);if(typeof m=="string")for(var v=0;v<16;++v)E[v]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(v=0;v<16;++v)E[v]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=w.g[0],y=w.g[1],v=w.g[2];let b=w.g[3],g;g=m+(b^y&(v^b))+E[0]+3614090360&4294967295,m=y+(g<<7&4294967295|g>>>25),g=b+(v^m&(y^v))+E[1]+3905402710&4294967295,b=m+(g<<12&4294967295|g>>>20),g=v+(y^b&(m^y))+E[2]+606105819&4294967295,v=b+(g<<17&4294967295|g>>>15),g=y+(m^v&(b^m))+E[3]+3250441966&4294967295,y=v+(g<<22&4294967295|g>>>10),g=m+(b^y&(v^b))+E[4]+4118548399&4294967295,m=y+(g<<7&4294967295|g>>>25),g=b+(v^m&(y^v))+E[5]+1200080426&4294967295,b=m+(g<<12&4294967295|g>>>20),g=v+(y^b&(m^y))+E[6]+2821735955&4294967295,v=b+(g<<17&4294967295|g>>>15),g=y+(m^v&(b^m))+E[7]+4249261313&4294967295,y=v+(g<<22&4294967295|g>>>10),g=m+(b^y&(v^b))+E[8]+1770035416&4294967295,m=y+(g<<7&4294967295|g>>>25),g=b+(v^m&(y^v))+E[9]+2336552879&4294967295,b=m+(g<<12&4294967295|g>>>20),g=v+(y^b&(m^y))+E[10]+4294925233&4294967295,v=b+(g<<17&4294967295|g>>>15),g=y+(m^v&(b^m))+E[11]+2304563134&4294967295,y=v+(g<<22&4294967295|g>>>10),g=m+(b^y&(v^b))+E[12]+1804603682&4294967295,m=y+(g<<7&4294967295|g>>>25),g=b+(v^m&(y^v))+E[13]+4254626195&4294967295,b=m+(g<<12&4294967295|g>>>20),g=v+(y^b&(m^y))+E[14]+2792965006&4294967295,v=b+(g<<17&4294967295|g>>>15),g=y+(m^v&(b^m))+E[15]+1236535329&4294967295,y=v+(g<<22&4294967295|g>>>10),g=m+(v^b&(y^v))+E[1]+4129170786&4294967295,m=y+(g<<5&4294967295|g>>>27),g=b+(y^v&(m^y))+E[6]+3225465664&4294967295,b=m+(g<<9&4294967295|g>>>23),g=v+(m^y&(b^m))+E[11]+643717713&4294967295,v=b+(g<<14&4294967295|g>>>18),g=y+(b^m&(v^b))+E[0]+3921069994&4294967295,y=v+(g<<20&4294967295|g>>>12),g=m+(v^b&(y^v))+E[5]+3593408605&4294967295,m=y+(g<<5&4294967295|g>>>27),g=b+(y^v&(m^y))+E[10]+38016083&4294967295,b=m+(g<<9&4294967295|g>>>23),g=v+(m^y&(b^m))+E[15]+3634488961&4294967295,v=b+(g<<14&4294967295|g>>>18),g=y+(b^m&(v^b))+E[4]+3889429448&4294967295,y=v+(g<<20&4294967295|g>>>12),g=m+(v^b&(y^v))+E[9]+568446438&4294967295,m=y+(g<<5&4294967295|g>>>27),g=b+(y^v&(m^y))+E[14]+3275163606&4294967295,b=m+(g<<9&4294967295|g>>>23),g=v+(m^y&(b^m))+E[3]+4107603335&4294967295,v=b+(g<<14&4294967295|g>>>18),g=y+(b^m&(v^b))+E[8]+1163531501&4294967295,y=v+(g<<20&4294967295|g>>>12),g=m+(v^b&(y^v))+E[13]+2850285829&4294967295,m=y+(g<<5&4294967295|g>>>27),g=b+(y^v&(m^y))+E[2]+4243563512&4294967295,b=m+(g<<9&4294967295|g>>>23),g=v+(m^y&(b^m))+E[7]+1735328473&4294967295,v=b+(g<<14&4294967295|g>>>18),g=y+(b^m&(v^b))+E[12]+2368359562&4294967295,y=v+(g<<20&4294967295|g>>>12),g=m+(y^v^b)+E[5]+4294588738&4294967295,m=y+(g<<4&4294967295|g>>>28),g=b+(m^y^v)+E[8]+2272392833&4294967295,b=m+(g<<11&4294967295|g>>>21),g=v+(b^m^y)+E[11]+1839030562&4294967295,v=b+(g<<16&4294967295|g>>>16),g=y+(v^b^m)+E[14]+4259657740&4294967295,y=v+(g<<23&4294967295|g>>>9),g=m+(y^v^b)+E[1]+2763975236&4294967295,m=y+(g<<4&4294967295|g>>>28),g=b+(m^y^v)+E[4]+1272893353&4294967295,b=m+(g<<11&4294967295|g>>>21),g=v+(b^m^y)+E[7]+4139469664&4294967295,v=b+(g<<16&4294967295|g>>>16),g=y+(v^b^m)+E[10]+3200236656&4294967295,y=v+(g<<23&4294967295|g>>>9),g=m+(y^v^b)+E[13]+681279174&4294967295,m=y+(g<<4&4294967295|g>>>28),g=b+(m^y^v)+E[0]+3936430074&4294967295,b=m+(g<<11&4294967295|g>>>21),g=v+(b^m^y)+E[3]+3572445317&4294967295,v=b+(g<<16&4294967295|g>>>16),g=y+(v^b^m)+E[6]+76029189&4294967295,y=v+(g<<23&4294967295|g>>>9),g=m+(y^v^b)+E[9]+3654602809&4294967295,m=y+(g<<4&4294967295|g>>>28),g=b+(m^y^v)+E[12]+3873151461&4294967295,b=m+(g<<11&4294967295|g>>>21),g=v+(b^m^y)+E[15]+530742520&4294967295,v=b+(g<<16&4294967295|g>>>16),g=y+(v^b^m)+E[2]+3299628645&4294967295,y=v+(g<<23&4294967295|g>>>9),g=m+(v^(y|~b))+E[0]+4096336452&4294967295,m=y+(g<<6&4294967295|g>>>26),g=b+(y^(m|~v))+E[7]+1126891415&4294967295,b=m+(g<<10&4294967295|g>>>22),g=v+(m^(b|~y))+E[14]+2878612391&4294967295,v=b+(g<<15&4294967295|g>>>17),g=y+(b^(v|~m))+E[5]+4237533241&4294967295,y=v+(g<<21&4294967295|g>>>11),g=m+(v^(y|~b))+E[12]+1700485571&4294967295,m=y+(g<<6&4294967295|g>>>26),g=b+(y^(m|~v))+E[3]+2399980690&4294967295,b=m+(g<<10&4294967295|g>>>22),g=v+(m^(b|~y))+E[10]+4293915773&4294967295,v=b+(g<<15&4294967295|g>>>17),g=y+(b^(v|~m))+E[1]+2240044497&4294967295,y=v+(g<<21&4294967295|g>>>11),g=m+(v^(y|~b))+E[8]+1873313359&4294967295,m=y+(g<<6&4294967295|g>>>26),g=b+(y^(m|~v))+E[15]+4264355552&4294967295,b=m+(g<<10&4294967295|g>>>22),g=v+(m^(b|~y))+E[6]+2734768916&4294967295,v=b+(g<<15&4294967295|g>>>17),g=y+(b^(v|~m))+E[13]+1309151649&4294967295,y=v+(g<<21&4294967295|g>>>11),g=m+(v^(y|~b))+E[4]+4149444226&4294967295,m=y+(g<<6&4294967295|g>>>26),g=b+(y^(m|~v))+E[11]+3174756917&4294967295,b=m+(g<<10&4294967295|g>>>22),g=v+(m^(b|~y))+E[2]+718787259&4294967295,v=b+(g<<15&4294967295|g>>>17),g=y+(b^(v|~m))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+v&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.v=function(w,m){m===void 0&&(m=w.length);const y=m-this.blockSize,E=this.C;let v=this.h,b=0;for(;b<m;){if(v==0)for(;b<=y;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<m;)if(E[v++]=w.charCodeAt(b++),v==this.blockSize){i(this,E),v=0;break}}else for(;b<m;)if(E[v++]=w[b++],v==this.blockSize){i(this,E),v=0;break}}this.h=v,this.o+=m},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;m=this.o*8;for(var y=w.length-8;y<w.length;++y)w[y]=m&255,m/=256;for(this.v(w),w=Array(16),m=0,y=0;y<4;++y)for(let E=0;E<32;E+=8)w[m++]=this.g[y]>>>E&255;return w};function o(w,m){var y=h;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=m(w)}function a(w,m){this.h=m;const y=[];let E=!0;for(let v=w.length-1;v>=0;v--){const b=w[v]|0;E&&b==m||(y[v]=b,E=!1)}this.g=y}var h={};function d(w){return-128<=w&&w<128?o(w,function(m){return new a([m|0],m<0?-1:0)}):new a([w|0],w<0?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return I;if(w<0)return O(f(-w));const m=[];let y=1;for(let E=0;w>=y;E++)m[E]=w/y|0,y*=4294967296;return new a(m,0)}function _(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return O(_(w.substring(1),m));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=f(Math.pow(m,8));let E=I;for(let b=0;b<w.length;b+=8){var v=Math.min(8,w.length-b);const g=parseInt(w.substring(b,b+v),m);v<8?(v=f(Math.pow(m,v)),E=E.j(v).add(f(g))):(E=E.j(y),E=E.add(f(g)))}return E}var I=d(0),S=d(1),P=d(16777216);n=a.prototype,n.m=function(){if(M(this))return-O(this).m();let w=0,m=1;for(let y=0;y<this.g.length;y++){const E=this.i(y);w+=(E>=0?E:4294967296+E)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(M(this))return"-"+O(this).toString(w);const m=f(Math.pow(w,6));var y=this;let E="";for(;;){const v=Ce(y,m).g;y=$(y,v.j(m));let b=((y.g.length>0?y.g[0]:y.h)>>>0).toString(w);if(y=v,k(y))return b+E;for(;b.length<6;)b="0"+b;E=b+E}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(let m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function M(w){return w.h==-1}n.l=function(w){return w=$(this,w),M(w)?-1:k(w)?0:1};function O(w){const m=w.g.length,y=[];for(let E=0;E<m;E++)y[E]=~w.g[E];return new a(y,~w.h).add(S)}n.abs=function(){return M(this)?O(this):this},n.add=function(w){const m=Math.max(this.g.length,w.g.length),y=[];let E=0;for(let v=0;v<=m;v++){let b=E+(this.i(v)&65535)+(w.i(v)&65535),g=(b>>>16)+(this.i(v)>>>16)+(w.i(v)>>>16);E=g>>>16,b&=65535,g&=65535,y[v]=g<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(w,m){return w.add(O(m))}n.j=function(w){if(k(this)||k(w))return I;if(M(this))return M(w)?O(this).j(O(w)):O(O(this).j(w));if(M(w))return O(this.j(O(w)));if(this.l(P)<0&&w.l(P)<0)return f(this.m()*w.m());const m=this.g.length+w.g.length,y=[];for(var E=0;E<2*m;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(let v=0;v<w.g.length;v++){const b=this.i(E)>>>16,g=this.i(E)&65535,pe=w.i(v)>>>16,Ke=w.i(v)&65535;y[2*E+2*v]+=g*Ke,B(y,2*E+2*v),y[2*E+2*v+1]+=b*Ke,B(y,2*E+2*v+1),y[2*E+2*v+1]+=g*pe,B(y,2*E+2*v+1),y[2*E+2*v+2]+=b*pe,B(y,2*E+2*v+2)}for(w=0;w<m;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=m;w<2*m;w++)y[w]=0;return new a(y,0)};function B(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function Z(w,m){this.g=w,this.h=m}function Ce(w,m){if(k(m))throw Error("division by zero");if(k(w))return new Z(I,I);if(M(w))return m=Ce(O(w),m),new Z(O(m.g),O(m.h));if(M(m))return m=Ce(w,O(m)),new Z(O(m.g),m.h);if(w.g.length>30){if(M(w)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var y=S,E=m;E.l(w)<=0;)y=ie(y),E=ie(E);var v=le(y,1),b=le(E,1);for(E=le(E,2),y=le(y,2);!k(E);){var g=b.add(E);g.l(w)<=0&&(v=v.add(y),b=g),E=le(E,1),y=le(y,1)}return m=$(w,v.j(m)),new Z(v,m)}for(v=I;w.l(m)>=0;){for(y=Math.max(1,Math.floor(w.m()/m.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),b=f(y),g=b.j(m);M(g)||g.l(w)>0;)y-=E,b=f(y),g=b.j(m);k(b)&&(b=S),v=v.add(b),w=$(w,g)}return new Z(v,w)}n.B=function(w){return Ce(this,w).h},n.and=function(w){const m=Math.max(this.g.length,w.g.length),y=[];for(let E=0;E<m;E++)y[E]=this.i(E)&w.i(E);return new a(y,this.h&w.h)},n.or=function(w){const m=Math.max(this.g.length,w.g.length),y=[];for(let E=0;E<m;E++)y[E]=this.i(E)|w.i(E);return new a(y,this.h|w.h)},n.xor=function(w){const m=Math.max(this.g.length,w.g.length),y=[];for(let E=0;E<m;E++)y[E]=this.i(E)^w.i(E);return new a(y,this.h^w.h)};function ie(w){const m=w.g.length+1,y=[];for(let E=0;E<m;E++)y[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(y,w.h)}function le(w,m){const y=m>>5;m%=32;const E=w.g.length-y,v=[];for(let b=0;b<E;b++)v[b]=m>0?w.i(b+y)>>>m|w.i(b+y+1)<<32-m:w.i(b+y);return new a(v,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=_,xs=a}).apply(typeof Ra<"u"?Ra:typeof self<"u"?self:typeof window<"u"?window:{});var wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fl,On,pl,xr,cs,ml,gl,yl;(function(){var n,e=Object.defineProperty;function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof wr=="object"&&wr];for(var c=0;c<s.length;++c){var l=s[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var l=r;s=s.split(".");for(var p=0;p<s.length-1;p++){var T=s[p];if(!(T in l))break e;l=l[T]}s=s[s.length-1],p=l[s],c=c(p),c!=p&&c!=null&&e(l,s,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(c){var l=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&l.push([p,c[p]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function h(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function d(s,c,l){return s.call.apply(s.bind,arguments)}function f(s,c,l){return f=d,f.apply(null,arguments)}function _(s,c){var l=Array.prototype.slice.call(arguments,1);return function(){var p=l.slice();return p.push.apply(p,arguments),s.apply(this,p)}}function I(s,c){function l(){}l.prototype=c.prototype,s.Z=c.prototype,s.prototype=new l,s.prototype.constructor=s,s.Ob=function(p,T,A){for(var C=Array(arguments.length-2),j=2;j<arguments.length;j++)C[j-2]=arguments[j];return c.prototype[T].apply(p,C)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function P(s){const c=s.length;if(c>0){const l=Array(c);for(let p=0;p<c;p++)l[p]=s[p];return l}return[]}function k(s,c){for(let p=1;p<arguments.length;p++){const T=arguments[p];var l=typeof T;if(l=l!="object"?l:T?Array.isArray(T)?"array":l:"null",l=="array"||l=="object"&&typeof T.length=="number"){l=s.length||0;const A=T.length||0;s.length=l+A;for(let C=0;C<A;C++)s[l+C]=T[C]}else s.push(T)}}class M{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(s){a.setTimeout(()=>{throw s},0)}function $(){var s=w;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class B{constructor(){this.h=this.g=null}add(c,l){const p=Z.get();p.set(c,l),this.h?this.h.next=p:this.g=p,this.h=p}}var Z=new M(()=>new Ce,s=>s.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,le=!1,w=new B,m=()=>{const s=Promise.resolve(void 0);ie=()=>{s.then(y)}};function y(){for(var s;s=$();){try{s.h.call(s.g)}catch(l){O(l)}var c=Z;c.j(s),c.h<100&&(c.h++,s.next=c.g,c.g=s)}le=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};a.addEventListener("test",l,c),a.removeEventListener("test",l,c)}catch{}return s}();function g(s){return/^[\s\xa0]*$/.test(s)}function pe(s,c){v.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,c)}I(pe,v),pe.prototype.init=function(s,c){const l=this.type=s.type,p=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget,c||(l=="mouseover"?c=s.fromElement:l=="mouseout"&&(c=s.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&pe.Z.h.call(this)},pe.prototype.h=function(){pe.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Ke="closure_listenable_"+(Math.random()*1e6|0),_i=0;function G(s,c,l,p,T){this.listener=s,this.proxy=null,this.src=c,this.type=l,this.capture=!!p,this.ha=T,this.key=++_i,this.da=this.fa=!1}function Et(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Qe(s,c,l){for(const p in s)c.call(l,s[p],p,s)}function Th(s,c){for(const l in s)c.call(void 0,s[l],l,s)}function po(s){const c={};for(const l in s)c[l]=s[l];return c}const mo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function go(s,c){let l,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(l in p)s[l]=p[l];for(let A=0;A<mo.length;A++)l=mo[A],Object.prototype.hasOwnProperty.call(p,l)&&(s[l]=p[l])}}function ar(s){this.src=s,this.g={},this.h=0}ar.prototype.add=function(s,c,l,p,T){const A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);const C=wi(s,c,p,T);return C>-1?(c=s[C],l||(c.fa=!1)):(c=new G(c,this.src,A,!!p,T),c.fa=l,s.push(c)),c};function vi(s,c){const l=c.type;if(l in s.g){var p=s.g[l],T=Array.prototype.indexOf.call(p,c,void 0),A;(A=T>=0)&&Array.prototype.splice.call(p,T,1),A&&(Et(c),s.g[l].length==0&&(delete s.g[l],s.h--))}}function wi(s,c,l,p){for(let T=0;T<s.length;++T){const A=s[T];if(!A.da&&A.listener==c&&A.capture==!!l&&A.ha==p)return T}return-1}var Ii="closure_lm_"+(Math.random()*1e6|0),Ei={};function yo(s,c,l,p,T){if(Array.isArray(c)){for(let A=0;A<c.length;A++)yo(s,c[A],l,p,T);return null}return l=wo(l),s&&s[Ke]?s.J(c,l,h(p)?!!p.capture:!1,T):bh(s,c,l,!1,p,T)}function bh(s,c,l,p,T,A){if(!c)throw Error("Invalid event type");const C=h(T)?!!T.capture:!!T;let j=bi(s);if(j||(s[Ii]=j=new ar(s)),l=j.add(c,l,p,C,A),l.proxy)return l;if(p=Ah(),l.proxy=p,p.src=s,p.listener=l,s.addEventListener)b||(T=C),T===void 0&&(T=!1),s.addEventListener(c.toString(),p,T);else if(s.attachEvent)s.attachEvent(vo(c.toString()),p);else if(s.addListener&&s.removeListener)s.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Ah(){function s(l){return c.call(s.src,s.listener,l)}const c=Sh;return s}function _o(s,c,l,p,T){if(Array.isArray(c))for(var A=0;A<c.length;A++)_o(s,c[A],l,p,T);else p=h(p)?!!p.capture:!!p,l=wo(l),s&&s[Ke]?(s=s.i,A=String(c).toString(),A in s.g&&(c=s.g[A],l=wi(c,l,p,T),l>-1&&(Et(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete s.g[A],s.h--)))):s&&(s=bi(s))&&(c=s.g[c.toString()],s=-1,c&&(s=wi(c,l,p,T)),(l=s>-1?c[s]:null)&&Ti(l))}function Ti(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Ke])vi(c.i,s);else{var l=s.type,p=s.proxy;c.removeEventListener?c.removeEventListener(l,p,s.capture):c.detachEvent?c.detachEvent(vo(l),p):c.addListener&&c.removeListener&&c.removeListener(p),(l=bi(c))?(vi(l,s),l.h==0&&(l.src=null,c[Ii]=null)):Et(s)}}}function vo(s){return s in Ei?Ei[s]:Ei[s]="on"+s}function Sh(s,c){if(s.da)s=!0;else{c=new pe(c,this);const l=s.listener,p=s.ha||s.src;s.fa&&Ti(s),s=l.call(p,c)}return s}function bi(s){return s=s[Ii],s instanceof ar?s:null}var Ai="__closure_events_fn_"+(Math.random()*1e9>>>0);function wo(s){return typeof s=="function"?s:(s[Ai]||(s[Ai]=function(c){return s.handleEvent(c)}),s[Ai])}function me(){E.call(this),this.i=new ar(this),this.M=this,this.G=null}I(me,E),me.prototype[Ke]=!0,me.prototype.removeEventListener=function(s,c,l,p){_o(this,s,c,l,p)};function Ie(s,c){var l,p=s.G;if(p)for(l=[];p;p=p.G)l.push(p);if(s=s.M,p=c.type||c,typeof c=="string")c=new v(c,s);else if(c instanceof v)c.target=c.target||s;else{var T=c;c=new v(p,s),go(c,T)}T=!0;let A,C;if(l)for(C=l.length-1;C>=0;C--)A=c.g=l[C],T=cr(A,p,!0,c)&&T;if(A=c.g=s,T=cr(A,p,!0,c)&&T,T=cr(A,p,!1,c)&&T,l)for(C=0;C<l.length;C++)A=c.g=l[C],T=cr(A,p,!1,c)&&T}me.prototype.N=function(){if(me.Z.N.call(this),this.i){var s=this.i;for(const c in s.g){const l=s.g[c];for(let p=0;p<l.length;p++)Et(l[p]);delete s.g[c],s.h--}}this.G=null},me.prototype.J=function(s,c,l,p){return this.i.add(String(s),c,!1,l,p)},me.prototype.K=function(s,c,l,p){return this.i.add(String(s),c,!0,l,p)};function cr(s,c,l,p){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();let T=!0;for(let A=0;A<c.length;++A){const C=c[A];if(C&&!C.da&&C.capture==l){const j=C.listener,se=C.ha||C.src;C.fa&&vi(s.i,C),T=j.call(se,p)!==!1&&T}}return T&&!p.defaultPrevented}function xh(s,c){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=f(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(s,c||0)}function Io(s){s.g=xh(()=>{s.g=null,s.i&&(s.i=!1,Io(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Rh extends E{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Io(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mn(s){E.call(this),this.h=s,this.g={}}I(mn,E);var Eo=[];function To(s){Qe(s.g,function(c,l){this.g.hasOwnProperty(l)&&Ti(c)},s),s.g={}}mn.prototype.N=function(){mn.Z.N.call(this),To(this)},mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Si=a.JSON.stringify,Ch=a.JSON.parse,Ph=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function bo(){}function Ao(){}var gn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function xi(){v.call(this,"d")}I(xi,v);function Ri(){v.call(this,"c")}I(Ri,v);var Tt={},So=null;function lr(){return So=So||new me}Tt.Ia="serverreachability";function xo(s){v.call(this,Tt.Ia,s)}I(xo,v);function yn(s){const c=lr();Ie(c,new xo(c))}Tt.STAT_EVENT="statevent";function Ro(s,c){v.call(this,Tt.STAT_EVENT,s),this.stat=c}I(Ro,v);function Ee(s){const c=lr();Ie(c,new Ro(c,s))}Tt.Ja="timingevent";function Co(s,c){v.call(this,Tt.Ja,s),this.size=c}I(Co,v);function _n(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},c)}function vn(){this.g=!0}vn.prototype.ua=function(){this.g=!1};function kh(s,c,l,p,T,A){s.info(function(){if(s.g)if(A){var C="",j=A.split("&");for(let q=0;q<j.length;q++){var se=j[q].split("=");if(se.length>1){const oe=se[0];se=se[1];const Fe=oe.split("_");C=Fe.length>=2&&Fe[1]=="type"?C+(oe+"="+se+"&"):C+(oe+"=redacted&")}}}else C=null;else C=A;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+c+`
`+l+`
`+C})}function Nh(s,c,l,p,T,A,C){s.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+c+`
`+l+`
`+A+" "+C})}function Ht(s,c,l,p){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Oh(s,l)+(p?" "+p:"")})}function Dh(s,c){s.info(function(){return"TIMEOUT: "+c})}vn.prototype.info=function(){};function Oh(s,c){if(!s.g)return c;if(!c)return null;try{const A=JSON.parse(c);if(A){for(s=0;s<A.length;s++)if(Array.isArray(A[s])){var l=A[s];if(!(l.length<2)){var p=l[1];if(Array.isArray(p)&&!(p.length<1)){var T=p[0];if(T!="noop"&&T!="stop"&&T!="close")for(let C=1;C<p.length;C++)p[C]=""}}}}return Si(A)}catch{return c}}var ur={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Po={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ko;function Ci(){}I(Ci,bo),Ci.prototype.g=function(){return new XMLHttpRequest},ko=new Ci;function wn(s){return encodeURIComponent(String(s))}function Vh(s){var c=1;s=s.split(":");const l=[];for(;c>0&&s.length;)l.push(s.shift()),c--;return s.length&&l.push(s.join(":")),l}function rt(s,c,l,p){this.j=s,this.i=c,this.l=l,this.S=p||1,this.V=new mn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new No}function No(){this.i=null,this.g="",this.h=!1}var Do={},Pi={};function ki(s,c,l){s.M=1,s.A=dr(je(c)),s.u=l,s.R=!0,Oo(s,null)}function Oo(s,c){s.F=Date.now(),hr(s),s.B=je(s.A);var l=s.B,p=s.S;Array.isArray(p)||(p=[String(p)]),qo(l.i,"t",p),s.C=0,l=s.j.L,s.h=new No,s.g=ha(s.j,l?c:null,!s.u),s.P>0&&(s.O=new Rh(f(s.Y,s,s.g),s.P)),c=s.V,l=s.g,p=s.ba;var T="readystatechange";Array.isArray(T)||(T&&(Eo[0]=T.toString()),T=Eo);for(let A=0;A<T.length;A++){const C=yo(l,T[A],p||c.handleEvent,!1,c.h||c);if(!C)break;c.g[C.key]=C}c=s.J?po(s.J):{},s.u?(s.v||(s.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,c)):(s.v="GET",s.g.ea(s.B,s.v,null,c)),yn(),kh(s.i,s.v,s.B,s.l,s.S,s.u)}rt.prototype.ba=function(s){s=s.target;const c=this.O;c&&ot(s)==3?c.j():this.Y(s)},rt.prototype.Y=function(s){try{if(s==this.g)e:{const j=ot(this.g),se=this.g.ya(),q=this.g.ca();if(!(j<3)&&(j!=3||this.g&&(this.h.h||this.g.la()||ea(this.g)))){this.K||j!=4||se==7||(se==8||q<=0?yn(3):yn(2)),Ni(this);var c=this.g.ca();this.X=c;var l=Mh(this);if(this.o=c==200,Nh(this.i,this.v,this.B,this.l,this.S,j,c),this.o){if(this.U&&!this.L){t:{if(this.g){var p,T=this.g;if((p=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(p)){var A=p;break t}}A=null}if(s=A)Ht(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Di(this,s);else{this.o=!1,this.m=3,Ee(12),bt(this),In(this);break e}}if(this.R){s=!0;let oe;for(;!this.K&&this.C<l.length;)if(oe=Lh(this,l),oe==Pi){j==4&&(this.m=4,Ee(14),s=!1),Ht(this.i,this.l,null,"[Incomplete Response]");break}else if(oe==Do){this.m=4,Ee(15),Ht(this.i,this.l,l,"[Invalid Chunk]"),s=!1;break}else Ht(this.i,this.l,oe,null),Di(this,oe);if(Vo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),j!=4||l.length!=0||this.h.h||(this.m=1,Ee(16),s=!1),this.o=this.o&&s,!s)Ht(this.i,this.l,l,"[Invalid Chunked Response]"),bt(this),In(this);else if(l.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),Bi(C),C.P=!0,Ee(11))}}else Ht(this.i,this.l,l,null),Di(this,l);j==4&&bt(this),this.o&&!this.K&&(j==4?aa(this.j,this):(this.o=!1,hr(this)))}else Yh(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,Ee(12)):(this.m=0,Ee(13)),bt(this),In(this)}}}catch{}finally{}};function Mh(s){if(!Vo(s))return s.g.la();const c=ea(s.g);if(c==="")return"";let l="";const p=c.length,T=ot(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return bt(s),In(s),"";s.h.i=new a.TextDecoder}for(let A=0;A<p;A++)s.h.h=!0,l+=s.h.i.decode(c[A],{stream:!(T&&A==p-1)});return c.length=0,s.h.g+=l,s.C=0,s.h.g}function Vo(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Lh(s,c){var l=s.C,p=c.indexOf(`
`,l);return p==-1?Pi:(l=Number(c.substring(l,p)),isNaN(l)?Do:(p+=1,p+l>c.length?Pi:(c=c.slice(p,p+l),s.C=p+l,c)))}rt.prototype.cancel=function(){this.K=!0,bt(this)};function hr(s){s.T=Date.now()+s.H,Mo(s,s.H)}function Mo(s,c){if(s.D!=null)throw Error("WatchDog timer not null");s.D=_n(f(s.aa,s),c)}function Ni(s){s.D&&(a.clearTimeout(s.D),s.D=null)}rt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(Dh(this.i,this.B),this.M!=2&&(yn(),Ee(17)),bt(this),this.m=2,In(this)):Mo(this,this.T-s)};function In(s){s.j.I==0||s.K||aa(s.j,s)}function bt(s){Ni(s);var c=s.O;c&&typeof c.dispose=="function"&&c.dispose(),s.O=null,To(s.V),s.g&&(c=s.g,s.g=null,c.abort(),c.dispose())}function Di(s,c){try{var l=s.j;if(l.I!=0&&(l.g==s||Oi(l.h,s))){if(!s.L&&Oi(l.h,s)&&l.I==3){try{var p=l.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!l.v){if(l.g)if(l.g.F+3e3<s.F)yr(l),mr(l);else break e;Ui(l),Ee(18)}}else l.xa=T[1],0<l.xa-l.K&&T[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=_n(f(l.Va,l),6e3));Fo(l.h)<=1&&l.ta&&(l.ta=void 0)}else St(l,11)}else if((s.L||l.g==s)&&yr(l),!g(c))for(T=l.Ba.g.parse(c),c=0;c<T.length;c++){let q=T[c];const oe=q[0];if(!(oe<=l.K))if(l.K=oe,q=q[1],l.I==2)if(q[0]=="c"){l.M=q[1],l.ba=q[2];const Fe=q[3];Fe!=null&&(l.ka=Fe,l.j.info("VER="+l.ka));const xt=q[4];xt!=null&&(l.za=xt,l.j.info("SVER="+l.za));const at=q[5];at!=null&&typeof at=="number"&&at>0&&(p=1.5*at,l.O=p,l.j.info("backChannelRequestTimeoutMs_="+p)),p=l;const ct=s.g;if(ct){const vr=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vr){var A=p.h;A.g||vr.indexOf("spdy")==-1&&vr.indexOf("quic")==-1&&vr.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Vi(A,A.h),A.h=null))}if(p.G){const Wi=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;Wi&&(p.wa=Wi,Q(p.J,p.G,Wi))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-s.F,l.j.info("Handshake RTT: "+l.T+"ms")),p=l;var C=s;if(p.na=ua(p,p.L?p.ba:null,p.W),C.L){Uo(p.h,C);var j=C,se=p.O;se&&(j.H=se),j.D&&(Ni(j),hr(j)),p.g=C}else sa(p);l.i.length>0&&gr(l)}else q[0]!="stop"&&q[0]!="close"||St(l,7);else l.I==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?St(l,7):Fi(l):q[0]!="noop"&&l.l&&l.l.qa(q),l.A=0)}}yn(4)}catch{}}var jh=class{constructor(s,c){this.g=s,this.map=c}};function Lo(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function jo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Fo(s){return s.h?1:s.g?s.g.size:0}function Oi(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Vi(s,c){s.g?s.g.add(c):s.h=c}function Uo(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Lo.prototype.cancel=function(){if(this.i=Bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Bo(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const l of s.g.values())c=c.concat(l.G);return c}return P(s.i)}var Wo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fh(s,c){if(s){s=s.split("&");for(let l=0;l<s.length;l++){const p=s[l].indexOf("=");let T,A=null;p>=0?(T=s[l].substring(0,p),A=s[l].substring(p+1)):T=s[l],c(T,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function it(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;s instanceof it?(this.l=s.l,En(this,s.j),this.o=s.o,this.g=s.g,Tn(this,s.u),this.h=s.h,Mi(this,Ko(s.i)),this.m=s.m):s&&(c=String(s).match(Wo))?(this.l=!1,En(this,c[1]||"",!0),this.o=bn(c[2]||""),this.g=bn(c[3]||"",!0),Tn(this,c[4]),this.h=bn(c[5]||"",!0),Mi(this,c[6]||"",!0),this.m=bn(c[7]||"")):(this.l=!1,this.i=new Sn(null,this.l))}it.prototype.toString=function(){const s=[];var c=this.j;c&&s.push(An(c,zo,!0),":");var l=this.g;return(l||c=="file")&&(s.push("//"),(c=this.o)&&s.push(An(c,zo,!0),"@"),s.push(wn(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&s.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(An(l,l.charAt(0)=="/"?Wh:Bh,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",An(l,$h)),s.join("")},it.prototype.resolve=function(s){const c=je(this);let l=!!s.j;l?En(c,s.j):l=!!s.o,l?c.o=s.o:l=!!s.g,l?c.g=s.g:l=s.u!=null;var p=s.h;if(l)Tn(c,s.u);else if(l=!!s.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var T=c.h.lastIndexOf("/");T!=-1&&(p=c.h.slice(0,T+1)+p)}if(T=p,T==".."||T==".")p="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){p=T.lastIndexOf("/",0)==0,T=T.split("/");const A=[];for(let C=0;C<T.length;){const j=T[C++];j=="."?p&&C==T.length&&A.push(""):j==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),p&&C==T.length&&A.push("")):(A.push(j),p=!0)}p=A.join("/")}else p=T}return l?c.h=p:l=s.i.toString()!=="",l?Mi(c,Ko(s.i)):l=!!s.m,l&&(c.m=s.m),c};function je(s){return new it(s)}function En(s,c,l){s.j=l?bn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Tn(s,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);s.u=c}else s.u=null}function Mi(s,c,l){c instanceof Sn?(s.i=c,Hh(s.i,s.l)):(l||(c=An(c,zh)),s.i=new Sn(c,s.l))}function Q(s,c,l){s.i.set(c,l)}function dr(s){return Q(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function bn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function An(s,c,l){return typeof s=="string"?(s=encodeURI(s).replace(c,Uh),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Uh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var zo=/[#\/\?@]/g,Bh=/[#\?:]/g,Wh=/[#\?]/g,zh=/[#\?@]/g,$h=/#/g;function Sn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function At(s){s.g||(s.g=new Map,s.h=0,s.i&&Fh(s.i,function(c,l){s.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Sn.prototype,n.add=function(s,c){At(this),this.i=null,s=Gt(this,s);let l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(c),this.h+=1,this};function $o(s,c){At(s),c=Gt(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Ho(s,c){return At(s),c=Gt(s,c),s.g.has(c)}n.forEach=function(s,c){At(this),this.g.forEach(function(l,p){l.forEach(function(T){s.call(c,T,p,this)},this)},this)};function Go(s,c){At(s);let l=[];if(typeof c=="string")Ho(s,c)&&(l=l.concat(s.g.get(Gt(s,c))));else for(s=Array.from(s.g.values()),c=0;c<s.length;c++)l=l.concat(s[c]);return l}n.set=function(s,c){return At(this),this.i=null,s=Gt(this,s),Ho(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=Go(this,s),s.length>0?String(s[0]):c):c};function qo(s,c,l){$o(s,c),l.length>0&&(s.i=null,s.g.set(Gt(s,c),P(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var l=c[p];const T=wn(l);l=Go(this,l);for(let A=0;A<l.length;A++){let C=T;l[A]!==""&&(C+="="+wn(l[A])),s.push(C)}}return this.i=s.join("&")};function Ko(s){const c=new Sn;return c.i=s.i,s.g&&(c.g=new Map(s.g),c.h=s.h),c}function Gt(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Hh(s,c){c&&!s.j&&(At(s),s.i=null,s.g.forEach(function(l,p){const T=p.toLowerCase();p!=T&&($o(this,p),qo(this,T,l))},s)),s.j=c}function Gh(s,c){const l=new vn;if(a.Image){const p=new Image;p.onload=_(st,l,"TestLoadImage: loaded",!0,c,p),p.onerror=_(st,l,"TestLoadImage: error",!1,c,p),p.onabort=_(st,l,"TestLoadImage: abort",!1,c,p),p.ontimeout=_(st,l,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=s}else c(!1)}function qh(s,c){const l=new vn,p=new AbortController,T=setTimeout(()=>{p.abort(),st(l,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:p.signal}).then(A=>{clearTimeout(T),A.ok?st(l,"TestPingServer: ok",!0,c):st(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),st(l,"TestPingServer: error",!1,c)})}function st(s,c,l,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(l)}catch{}}function Kh(){this.g=new Ph}function Li(s){this.i=s.Sb||null,this.h=s.ab||!1}I(Li,bo),Li.prototype.g=function(){return new fr(this.i,this.h)};function fr(s,c){me.call(this),this.H=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(fr,me),n=fr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=c,this.readyState=1,Rn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(c.body=s),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qo(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qo(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?xn(this):Rn(this),this.readyState==3&&Qo(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,xn(this))},n.Na=function(s){this.g&&(this.response=s,xn(this))},n.ga=function(){this.g&&xn(this)};function xn(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Rn(s)}n.setRequestHeader=function(s,c){this.A.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=c.next();return s.join(`\r
`)};function Rn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Jo(s){let c="";return Qe(s,function(l,p){c+=p,c+=":",c+=l,c+=`\r
`}),c}function ji(s,c,l){e:{for(p in l){var p=!1;break e}p=!0}p||(l=Jo(l),typeof s=="string"?l!=null&&wn(l):Q(s,c,l))}function ee(s){me.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(ee,me);var Qh=/^https?$/i,Jh=["POST","PUT"];n=ee.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,c,l,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ko.g(),this.g.onreadystatechange=S(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(A){Yo(this,A);return}if(s=l||"",l=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)l.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const A of p.keys())l.set(A,p.get(A));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),T=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(Jh,c,void 0)>=0)||p||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of l)this.g.setRequestHeader(A,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(A){Yo(this,A)}};function Yo(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.o=5,Xo(s),pr(s)}function Xo(s){s.A||(s.A=!0,Ie(s,"complete"),Ie(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,Ie(this,"complete"),Ie(this,"abort"),pr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pr(this,!0)),ee.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Zo(this):this.Xa())},n.Xa=function(){Zo(this)};function Zo(s){if(s.h&&typeof o<"u"){if(s.v&&ot(s)==4)setTimeout(s.Ca.bind(s),0);else if(Ie(s,"readystatechange"),ot(s)==4){s.h=!1;try{const A=s.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var p;if(p=A===0){let C=String(s.D).match(Wo)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),p=!Qh.test(C?C.toLowerCase():"")}l=p}if(l)Ie(s,"complete"),Ie(s,"success");else{s.o=6;try{var T=ot(s)>2?s.g.statusText:""}catch{T=""}s.l=T+" ["+s.ca()+"]",Xo(s)}}finally{pr(s)}}}}function pr(s,c){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const l=s.g;s.g=null,c||Ie(s,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ot(s){return s.g?s.g.readyState:0}n.ca=function(){try{return ot(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Ch(c)}};function ea(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Yh(s){const c={};s=(s.g&&ot(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<s.length;p++){if(g(s[p]))continue;var l=Vh(s[p]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=c[T]||[];c[T]=A,A.push(l)}Th(c,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cn(s,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||c}function ta(s){this.za=0,this.i=[],this.j=new vn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Cn("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Cn("baseRetryDelayMs",5e3,s),this.Za=Cn("retryDelaySeedMs",1e4,s),this.Ta=Cn("forwardChannelMaxRetries",2,s),this.va=Cn("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Lo(s&&s.concurrentRequestLimit),this.Ba=new Kh,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ta.prototype,n.ka=8,n.I=1,n.connect=function(s,c,l,p){Ee(0),this.W=s,this.H=c||{},l&&p!==void 0&&(this.H.OSID=l,this.H.OAID=p),this.F=this.X,this.J=ua(this,null,this.W),gr(this)};function Fi(s){if(na(s),s.I==3){var c=s.V++,l=je(s.J);if(Q(l,"SID",s.M),Q(l,"RID",c),Q(l,"TYPE","terminate"),Pn(s,l),c=new rt(s,s.j,c),c.M=2,c.A=dr(je(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=c.A,l=!0),l||(c.g=ha(c.j,null),c.g.ea(c.A)),c.F=Date.now(),hr(c)}la(s)}function mr(s){s.g&&(Bi(s),s.g.cancel(),s.g=null)}function na(s){mr(s),s.v&&(a.clearTimeout(s.v),s.v=null),yr(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function gr(s){if(!jo(s.h)&&!s.m){s.m=!0;var c=s.Ea;ie||m(),le||(ie(),le=!0),w.add(c,s),s.D=0}}function Xh(s,c){return Fo(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=c.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=_n(f(s.Ea,s,c),ca(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const T=new rt(this,this.j,s);let A=this.o;if(this.U&&(A?(A=po(A),go(A,this.U)):A=this.U),this.u!==null||this.R||(T.J=A,A=null),this.S)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var p=this.i[l];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=ia(this,T,c),l=je(this.J),Q(l,"RID",s),Q(l,"CVER",22),this.G&&Q(l,"X-HTTP-Session-Id",this.G),Pn(this,l),A&&(this.R?c="headers="+wn(Jo(A))+"&"+c:this.u&&ji(l,this.u,A)),Vi(this.h,T),this.Ra&&Q(l,"TYPE","init"),this.S?(Q(l,"$req",c),Q(l,"SID","null"),T.U=!0,ki(T,l,null)):ki(T,l,c),this.I=2}}else this.I==3&&(s?ra(this,s):this.i.length==0||jo(this.h)||ra(this))};function ra(s,c){var l;c?l=c.l:l=s.V++;const p=je(s.J);Q(p,"SID",s.M),Q(p,"RID",l),Q(p,"AID",s.K),Pn(s,p),s.u&&s.o&&ji(p,s.u,s.o),l=new rt(s,s.j,l,s.D+1),s.u===null&&(l.J=s.o),c&&(s.i=c.G.concat(s.i)),c=ia(s,l,1e3),l.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Vi(s.h,l),ki(l,p,c)}function Pn(s,c){s.H&&Qe(s.H,function(l,p){Q(c,p,l)}),s.l&&Qe({},function(l,p){Q(c,p,l)})}function ia(s,c,l){l=Math.min(s.i.length,l);const p=s.l?f(s.l.Ka,s.l,s):null;e:{var T=s.i;let j=-1;for(;;){const se=["count="+l];j==-1?l>0?(j=T[0].g,se.push("ofs="+j)):j=0:se.push("ofs="+j);let q=!0;for(let oe=0;oe<l;oe++){var A=T[oe].g;const Fe=T[oe].map;if(A-=j,A<0)j=Math.max(0,T[oe].g-100),q=!1;else try{A="req"+A+"_"||"";try{var C=Fe instanceof Map?Fe:Object.entries(Fe);for(const[xt,at]of C){let ct=at;h(at)&&(ct=Si(at)),se.push(A+xt+"="+encodeURIComponent(ct))}}catch(xt){throw se.push(A+"type="+encodeURIComponent("_badmap")),xt}}catch{p&&p(Fe)}}if(q){C=se.join("&");break e}}C=void 0}return s=s.i.splice(0,l),c.G=s,C}function sa(s){if(!s.g&&!s.v){s.Y=1;var c=s.Da;ie||m(),le||(ie(),le=!0),w.add(c,s),s.A=0}}function Ui(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=_n(f(s.Da,s),ca(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,oa(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=_n(f(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ee(10),mr(this),oa(this))};function Bi(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function oa(s){s.g=new rt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var c=je(s.na);Q(c,"RID","rpc"),Q(c,"SID",s.M),Q(c,"AID",s.K),Q(c,"CI",s.F?"0":"1"),!s.F&&s.ia&&Q(c,"TO",s.ia),Q(c,"TYPE","xmlhttp"),Pn(s,c),s.u&&s.o&&ji(c,s.u,s.o),s.O&&(s.g.H=s.O);var l=s.g;s=s.ba,l.M=1,l.A=dr(je(c)),l.u=null,l.R=!0,Oo(l,s)}n.Va=function(){this.C!=null&&(this.C=null,mr(this),Ui(this),Ee(19))};function yr(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function aa(s,c){var l=null;if(s.g==c){yr(s),Bi(s),s.g=null;var p=2}else if(Oi(s.h,c))l=c.G,Uo(s.h,c),p=1;else return;if(s.I!=0){if(c.o)if(p==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var T=s.D;p=lr(),Ie(p,new Co(p,l)),gr(s)}else sa(s);else if(T=c.m,T==3||T==0&&c.X>0||!(p==1&&Xh(s,c)||p==2&&Ui(s)))switch(l&&l.length>0&&(c=s.h,c.i=c.i.concat(l)),T){case 1:St(s,5);break;case 4:St(s,10);break;case 3:St(s,6);break;default:St(s,2)}}}function ca(s,c){let l=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(l*=2),l*c}function St(s,c){if(s.j.info("Error code "+c),c==2){var l=f(s.bb,s),p=s.Ua;const T=!p;p=new it(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||En(p,"https"),dr(p),T?Gh(p.toString(),l):qh(p.toString(),l)}else Ee(2);s.I=0,s.l&&s.l.pa(c),la(s),na(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Ee(2)):(this.j.info("Failed to ping google.com"),Ee(1))};function la(s){if(s.I=0,s.ja=[],s.l){const c=Bo(s.h);(c.length!=0||s.i.length!=0)&&(k(s.ja,c),k(s.ja,s.i),s.h.i.length=0,P(s.i),s.i.length=0),s.l.oa()}}function ua(s,c,l){var p=l instanceof it?je(l):new it(l);if(p.g!="")c&&(p.g=c+"."+p.g),Tn(p,p.u);else{var T=a.location;p=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;const A=new it(null);p&&En(A,p),c&&(A.g=c),T&&Tn(A,T),l&&(A.h=l),p=A}return l=s.G,c=s.wa,l&&c&&Q(p,l,c),Q(p,"VER",s.ka),Pn(s,p),p}function ha(s,c,l){if(c&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Aa&&!s.ma?new ee(new Li({ab:l})):new ee(s.ma),c.Fa(s.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function da(){}n=da.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function _r(){}_r.prototype.g=function(s,c){return new xe(s,c)};function xe(s,c){me.call(this),this.g=new ta(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(s?s["X-WebChannel-Client-Profile"]=c.sa:s={"X-WebChannel-Client-Profile":c.sa}),this.g.U=s,(s=c&&c.Qb)&&!g(s)&&(this.g.u=s),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!g(c)&&(this.g.G=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new qt(this)}I(xe,me),xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xe.prototype.close=function(){Fi(this.g)},xe.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.v&&(l={},l.__data__=Si(s),s=l);c.i.push(new jh(c.Ya++,s)),c.I==3&&gr(c)},xe.prototype.N=function(){this.g.l=null,delete this.j,Fi(this.g),delete this.g,xe.Z.N.call(this)};function fa(s){xi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const l in c){s=l;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}I(fa,xi);function pa(){Ri.call(this),this.status=1}I(pa,Ri);function qt(s){this.g=s}I(qt,da),qt.prototype.ra=function(){Ie(this.g,"a")},qt.prototype.qa=function(s){Ie(this.g,new fa(s))},qt.prototype.pa=function(s){Ie(this.g,new pa)},qt.prototype.oa=function(){Ie(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,xe.prototype.send=xe.prototype.o,xe.prototype.open=xe.prototype.m,xe.prototype.close=xe.prototype.close,yl=function(){return new _r},gl=function(){return lr()},ml=Tt,cs={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ur.NO_ERROR=0,ur.TIMEOUT=8,ur.HTTP_ERROR=6,xr=ur,Po.COMPLETE="complete",pl=Po,Ao.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",me.prototype.listen=me.prototype.J,On=Ao,ee.prototype.listenOnce=ee.prototype.K,ee.prototype.getLastError=ee.prototype.Ha,ee.prototype.getLastErrorCode=ee.prototype.ya,ee.prototype.getStatus=ee.prototype.ca,ee.prototype.getResponseJson=ee.prototype.La,ee.prototype.getResponseText=ee.prototype.la,ee.prototype.send=ee.prototype.ea,ee.prototype.setWithCredentials=ee.prototype.Fa,fl=ee}).apply(typeof wr<"u"?wr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ye.UNAUTHENTICATED=new ye(null),ye.GOOGLE_CREDENTIALS=new ye("google-credentials-uid"),ye.FIRST_PARTY=new ye("first-party-uid"),ye.MOCK_USER=new ye("mock-user");/**
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
 */let dn="12.12.0";function Yf(n){dn=n}/**
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
 */const Ot=new si("@firebase/firestore");function Kt(){return Ot.logLevel}function N(n,...e){if(Ot.logLevel<=U.DEBUG){const t=e.map(Rs);Ot.debug(`Firestore (${dn}): ${n}`,...t)}}function Vt(n,...e){if(Ot.logLevel<=U.ERROR){const t=e.map(Rs);Ot.error(`Firestore (${dn}): ${n}`,...t)}}function Wn(n,...e){if(Ot.logLevel<=U.WARN){const t=e.map(Rs);Ot.warn(`Firestore (${dn}): ${n}`,...t)}}function Rs(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function F(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,_l(n,r,t)}function _l(n,e,t){let r=`FIRESTORE (${dn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Vt(r),new Error(r)}function te(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||_l(e,i,r)}function K(n,e){return n}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Le{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class vl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ye.UNAUTHENTICATED))}shutdown(){}}class Zf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ep{constructor(e){this.t=e,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,t(d)):Promise.resolve();let o=new kt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new kt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const d=o;e.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},h=d=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>h(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?h(d):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new kt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string",31837,{l:r}),new vl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new ye(e)}}class tp{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class np{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new tp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ca{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rp{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Be(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){te(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ca(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ca(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ip(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Cs{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=ip(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function ls(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),o=e.charAt(r);if(i!==o)return Ki(i)===Ki(o)?H(i,o):Ki(i)?1:-1}return H(n.length,e.length)}const sp=55296,op=57343;function Ki(n){const e=n.charCodeAt(0);return e>=sp&&e<=op}function sn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const Pa="__name__";class Ue{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&F(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ue.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ue?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Ue.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return H(e.length,t.length)}static compareSegments(e,t){const r=Ue.isNumericId(e),i=Ue.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ue.extractNumericId(e).compare(Ue.extractNumericId(t)):ls(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xs.fromString(e.substring(4,e.length-2))}}class X extends Ue{construct(e,t,r){return new X(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new X(t)}static emptyPath(){return new X([])}}const ap=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class de extends Ue{construct(e,t,r){return new de(e,t,r)}static isValidIdentifier(e){return ap.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),de.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pa}static keyField(){return new de([Pa])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const h=e[i];if(h==="\\"){if(i+1===e.length)throw new D(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new D(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,i+=2}else h==="`"?(a=!a,i++):h!=="."||a?(r+=h,i++):(o(),i++)}if(o(),a)throw new D(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new de(t)}static emptyPath(){return new de([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(X.fromString(e))}static fromName(e){return new L(X.fromString(e).popFirst(5))}static empty(){return new L(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new X(e.slice()))}}/**
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
 */function wl(n,e,t){if(!t)throw new D(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function cp(n,e,t,r){if(e===!0&&r===!0)throw new D(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ka(n){if(!L.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Na(n){if(L.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Il(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ps(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function El(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ps(n);throw new D(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function re(n,e){const t={typeString:n};return e&&(t.value=e),t}function Xn(n,e){if(!Il(n))throw new D(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new D(R.INVALID_ARGUMENT,t);return!0}/**
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
 */const Da=-62135596800,Oa=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Oa);return new Y(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Da)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Oa}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xn(e,Y._jsonSchema))return new Y(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Da;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:re("string",Y._jsonSchemaVersion),seconds:re("number"),nanoseconds:re("number")};/**
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
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new Y(0,0))}static max(){return new J(new Y(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const zn=-1;function lp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Y(t+1,0):new Y(t,r));return new _t(i,L.empty(),e)}function up(n){return new _t(n.readTime,n.key,zn)}class _t{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new _t(J.min(),L.empty(),zn)}static max(){return new _t(J.max(),L.empty(),zn)}}function hp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
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
 */const dp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ks(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==dp)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,r)=>{t(e)})}static reject(e){return new x((t,r)=>{r(e)})}static waitFor(e){return new x((t,r)=>{let i=0,o=0,a=!1;e.forEach(h=>{++i,h.next(()=>{++o,a&&o===i&&t()},d=>r(d))}),a=!0,o===i&&t()})}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next(i=>i?x.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new x((r,i)=>{const o=e.length,a=new Array(o);let h=0;for(let d=0;d<o;d++){const f=d;t(e[f]).next(_=>{a[f]=_,++h,h===o&&r(a)},_=>i(_))}})}static doWhile(e,t){return new x((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function pp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Zn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ns{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ns.ce=-1;/**
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
 */const Ds=-1;function Os(n){return n==null}function jr(n){return n===0&&1/n==-1/0}function mp(n){return typeof n=="number"&&Number.isInteger(n)&&!jr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Tl="";function gp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Va(e)),e=yp(n.get(t),e);return Va(e)}function yp(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case Tl:t+="";break;default:t+=o}}return t}function Va(n){return n+Tl+""}/**
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
 */function Ma(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function fn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Se{constructor(e,t){this.comparator=e,this.root=t||ue.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ir(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ir(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ir(this.root,e,this.comparator,!0)}}class Ir{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ue{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??ue.RED,this.left=i??ue.EMPTY,this.right=o??ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new ue(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1;ue.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new La(this.data.getIterator())}getIteratorFrom(e){return new La(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class La{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Oe{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new Oe([])}unionWith(e){let t=new fe(de.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Oe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class _p extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new _p("Invalid base64 string: "+o):o}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const vp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(n){if(te(!!n,39018),typeof n=="string"){let e=0;const t=vp.exec(n);if(te(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function on(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
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
 */const Al="server_timestamp",Sl="__type__",xl="__previous_value__",Rl="__local_write_time__";function Vs(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Sl])==null?void 0:r.stringValue)===Al}function Ms(n){const e=n.mapValue.fields[xl];return Vs(e)?Ms(e):e}function Fr(n){const e=Mt(n.mapValue.fields[Rl].timestampValue);return new Y(e.seconds,e.nanos)}/**
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
 */class wp{constructor(e,t,r,i,o,a,h,d,f,_,I){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=_,this.apiKey=I}}const Ur="(default)";class Br{constructor(e,t){this.projectId=e,this.database=t||Ur}static empty(){return new Br("","")}get isDefaultDatabase(){return this.database===Ur}isEqual(e){return e instanceof Br&&e.projectId===this.projectId&&e.database===this.database}}function Ip(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new D(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(n.options.projectId,e)}/**
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
 */const Cl="__type__",Ep="__max__",Er={mapValue:{}},Pl="__vector__",us="value";function Lt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vs(n)?4:bp(n)?9007199254740991:Tp(n)?10:11:F(28295,{value:n})}function qe(n,e){if(n===e)return!0;const t=Lt(n);if(t!==Lt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fr(n).isEqual(Fr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Mt(i.timestampValue),h=Mt(o.timestampValue);return a.seconds===h.seconds&&a.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return on(i.bytesValue).isEqual(on(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return he(i.geoPointValue.latitude)===he(o.geoPointValue.latitude)&&he(i.geoPointValue.longitude)===he(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return he(i.integerValue)===he(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=he(i.doubleValue),h=he(o.doubleValue);return a===h?jr(a)===jr(h):isNaN(a)&&isNaN(h)}return!1}(n,e);case 9:return sn(n.arrayValue.values||[],e.arrayValue.values||[],qe);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},h=o.mapValue.fields||{};if(Ma(a)!==Ma(h))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(h[d]===void 0||!qe(a[d],h[d])))return!1;return!0}(n,e);default:return F(52216,{left:n})}}function $n(n,e){return(n.values||[]).find(t=>qe(t,e))!==void 0}function an(n,e){if(n===e)return 0;const t=Lt(n),r=Lt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(o,a){const h=he(o.integerValue||o.doubleValue),d=he(a.integerValue||a.doubleValue);return h<d?-1:h>d?1:h===d?0:isNaN(h)?isNaN(d)?0:-1:1}(n,e);case 3:return ja(n.timestampValue,e.timestampValue);case 4:return ja(Fr(n),Fr(e));case 5:return ls(n.stringValue,e.stringValue);case 6:return function(o,a){const h=on(o),d=on(a);return h.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const h=o.split("/"),d=a.split("/");for(let f=0;f<h.length&&f<d.length;f++){const _=H(h[f],d[f]);if(_!==0)return _}return H(h.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const h=H(he(o.latitude),he(a.latitude));return h!==0?h:H(he(o.longitude),he(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Fa(n.arrayValue,e.arrayValue);case 10:return function(o,a){var S,P,k,M;const h=o.fields||{},d=a.fields||{},f=(S=h[us])==null?void 0:S.arrayValue,_=(P=d[us])==null?void 0:P.arrayValue,I=H(((k=f==null?void 0:f.values)==null?void 0:k.length)||0,((M=_==null?void 0:_.values)==null?void 0:M.length)||0);return I!==0?I:Fa(f,_)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Er.mapValue&&a===Er.mapValue)return 0;if(o===Er.mapValue)return 1;if(a===Er.mapValue)return-1;const h=o.fields||{},d=Object.keys(h),f=a.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let I=0;I<d.length&&I<_.length;++I){const S=ls(d[I],_[I]);if(S!==0)return S;const P=an(h[d[I]],f[_[I]]);if(P!==0)return P}return H(d.length,_.length)}(n.mapValue,e.mapValue);default:throw F(23264,{he:t})}}function ja(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=Mt(n),r=Mt(e),i=H(t.seconds,r.seconds);return i!==0?i:H(t.nanos,r.nanos)}function Fa(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=an(t[i],r[i]);if(o)return o}return H(t.length,r.length)}function cn(n){return hs(n)}function hs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Mt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return on(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=hs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${hs(t.fields[a])}`;return i+"}"}(n.mapValue):F(61005,{value:n})}function Rr(n){switch(Lt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ms(n);return e?16+Rr(e):16;case 5:return 2*n.stringValue.length;case 6:return on(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Rr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return fn(r.fields,(o,a)=>{i+=o.length+Rr(a)}),i}(n.mapValue);default:throw F(13486,{value:n})}}function ds(n){return!!n&&"integerValue"in n}function Ls(n){return!!n&&"arrayValue"in n}function Cr(n){return!!n&&"mapValue"in n}function Tp(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Cl])==null?void 0:r.stringValue)===Pl}function Vn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return fn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Vn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vn(n.arrayValue.values[t]);return e}return{...n}}function bp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ep}/**
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
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Cr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vn(t)}setAll(e){let t=de.emptyPath(),r={},i=[];e.forEach((a,h)=>{if(!t.isImmediateParentOf(h)){const d=this.getFieldsMap(t);this.applyChanges(d,r,i),r={},i=[],t=h.popLast()}a?r[h.lastSegment()]=Vn(a):i.push(h.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Cr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Cr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){fn(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Ne(Vn(this.value))}}function kl(n){const e=[];return fn(n.fields,(t,r)=>{const i=new de([t]);if(Cr(r)){const o=kl(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new Oe(e)}/**
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
 */class ke{constructor(e,t,r,i,o,a,h){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=h}static newInvalidDocument(e){return new ke(e,0,J.min(),J.min(),J.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,i){return new ke(e,1,t,J.min(),r,i,0)}static newNoDocument(e,t){return new ke(e,2,t,J.min(),J.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,J.min(),J.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wr{constructor(e,t){this.position=e,this.inclusive=t}}function Ua(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=an(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ba(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class zr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ap(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Nl{}class ce extends Nl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new xp(e,t,r):t==="array-contains"?new Pp(e,r):t==="in"?new kp(e,r):t==="not-in"?new Np(e,r):t==="array-contains-any"?new Dp(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Rp(e,r):new Cp(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(an(t,this.value)):t!==null&&Lt(this.value)===Lt(t)&&this.matchesComparison(an(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vt extends Nl{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new vt(e,t)}matches(e){return Dl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Dl(n){return n.op==="and"}function Ol(n){return Sp(n)&&Dl(n)}function Sp(n){for(const e of n.filters)if(e instanceof vt)return!1;return!0}function fs(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+cn(n.value);if(Ol(n))return n.filters.map(e=>fs(e)).join(",");{const e=n.filters.map(t=>fs(t)).join(",");return`${n.op}(${e})`}}function Vl(n,e){return n instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&qe(r.value,i.value)}(n,e):n instanceof vt?function(r,i){return i instanceof vt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,h)=>o&&Vl(a,i.filters[h]),!0):!1}(n,e):void F(19439)}function Ml(n){return n instanceof ce?function(t){return`${t.field.canonicalString()} ${t.op} ${cn(t.value)}`}(n):n instanceof vt?function(t){return t.op.toString()+" {"+t.getFilters().map(Ml).join(" ,")+"}"}(n):"Filter"}class xp extends ce{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Rp extends ce{constructor(e,t){super(e,"in",t),this.keys=Ll("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Cp extends ce{constructor(e,t){super(e,"not-in",t),this.keys=Ll("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ll(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class Pp extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ls(t)&&$n(t.arrayValue,this.value)}}class kp extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$n(this.value.arrayValue,t)}}class Np extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if($n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$n(this.value.arrayValue,t)}}class Dp extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ls(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$n(this.value.arrayValue,r))}}/**
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
 */class Op{constructor(e,t=null,r=[],i=[],o=null,a=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=h,this.Te=null}}function Wa(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Op(n,e,t,r,i,o,a)}function js(n){const e=K(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>fs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Os(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>cn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>cn(r)).join(",")),e.Te=t}return e.Te}function Fs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ap(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ba(n.startAt,e.startAt)&&Ba(n.endAt,e.endAt)}/**
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
 */class oi{constructor(e,t=null,r=[],i=[],o=null,a="F",h=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=h,this.endAt=d,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Vp(n,e,t,r,i,o,a,h){return new oi(n,e,t,r,i,o,a,h)}function Mp(n){return new oi(n)}function za(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Lp(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function jp(n){return n.collectionGroup!==null}function Mn(n){const e=K(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let h=new fe(de.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(h=h.add(f.field))})}),h})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new zr(o,r))}),t.has(de.keyField().canonicalString())||e.Ee.push(new zr(de.keyField(),r))}return e.Ee}function Nt(n){const e=K(n);return e.Ie||(e.Ie=Fp(e,Mn(n))),e.Ie}function Fp(n,e){if(n.limitType==="F")return Wa(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new zr(i.field,o)});const t=n.endAt?new Wr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Wr(n.startAt.position,n.startAt.inclusive):null;return Wa(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ps(n,e,t){return new oi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function jl(n,e){return Fs(Nt(n),Nt(e))&&n.limitType===e.limitType}function Fl(n){return`${js(Nt(n))}|lt:${n.limitType}`}function kn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Ml(i)).join(", ")}]`),Os(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>cn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>cn(i)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function Us(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Mn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,h,d){const f=Ua(a,h,d);return a.inclusive?f<=0:f<0}(r.startAt,Mn(r),i)||r.endAt&&!function(a,h,d){const f=Ua(a,h,d);return a.inclusive?f>=0:f>0}(r.endAt,Mn(r),i))}(n,e)}function Up(n){return(e,t)=>{let r=!1;for(const i of Mn(n)){const o=Bp(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Bp(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(o,a,h){const d=a.data.field(o),f=h.data.field(o);return d!==null&&f!==null?an(d,f):F(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
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
 */class zt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fn(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return bl(this.inner)}size(){return this.innerSize}}/**
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
 */const Wp=new Se(L.comparator);function $r(){return Wp}const Ul=new Se(L.comparator);function Tr(...n){let e=Ul;for(const t of n)e=e.insert(t.key,t);return e}function Bl(n){let e=Ul;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ct(){return Ln()}function Wl(){return Ln()}function Ln(){return new zt(n=>n.toString(),(n,e)=>n.isEqual(e))}const zp=new Se(L.comparator),$p=new fe(L.comparator);function _e(...n){let e=$p;for(const t of n)e=e.add(t);return e}const Hp=new fe(H);function Gp(){return Hp}/**
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
 */function Bs(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jr(e)?"-0":e}}function zl(n){return{integerValue:""+n}}function qp(n,e){return mp(e)?zl(e):Bs(n,e)}/**
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
 */class ai{constructor(){this._=void 0}}function Kp(n,e,t){return n instanceof Hn?function(i,o){const a={fields:{[Sl]:{stringValue:Al},[Rl]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Vs(o)&&(o=Ms(o)),o&&(a.fields[xl]=o),{mapValue:a}}(t,e):n instanceof Gn?Hl(n,e):n instanceof qn?Gl(n,e):function(i,o){const a=$l(i,o),h=$a(a)+$a(i.Ae);return ds(a)&&ds(i.Ae)?zl(h):Bs(i.serializer,h)}(n,e)}function Qp(n,e,t){return n instanceof Gn?Hl(n,e):n instanceof qn?Gl(n,e):t}function $l(n,e){return n instanceof Hr?function(r){return ds(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Hn extends ai{}class Gn extends ai{constructor(e){super(),this.elements=e}}function Hl(n,e){const t=ql(e);for(const r of n.elements)t.some(i=>qe(i,r))||t.push(r);return{arrayValue:{values:t}}}class qn extends ai{constructor(e){super(),this.elements=e}}function Gl(n,e){let t=ql(e);for(const r of n.elements)t=t.filter(i=>!qe(i,r));return{arrayValue:{values:t}}}class Hr extends ai{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function $a(n){return he(n.integerValue||n.doubleValue)}function ql(n){return Ls(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Jp{constructor(e,t){this.field=e,this.transform=t}}function Yp(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Gn&&i instanceof Gn||r instanceof qn&&i instanceof qn?sn(r.elements,i.elements,qe):r instanceof Hr&&i instanceof Hr?qe(r.Ae,i.Ae):r instanceof Hn&&i instanceof Hn}(n.transform,e.transform)}class Xp{constructor(e,t){this.version=e,this.transformResults=t}}class Xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xe}static exists(e){return new Xe(void 0,e)}static updateTime(e){return new Xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ci{}function Kl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Jl(n.key,Xe.none()):new er(n.key,n.data,Xe.none());{const t=n.data,r=Ne.empty();let i=new fe(de.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new $t(n.key,r,new Oe(i.toArray()),Xe.none())}}function Zp(n,e,t){n instanceof er?function(i,o,a){const h=i.value.clone(),d=Ga(i.fieldTransforms,o,a.transformResults);h.setAll(d),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):n instanceof $t?function(i,o,a){if(!Pr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const h=Ga(i.fieldTransforms,o,a.transformResults),d=o.data;d.setAll(Ql(i)),d.setAll(h),o.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function jn(n,e,t,r){return n instanceof er?function(o,a,h,d){if(!Pr(o.precondition,a))return h;const f=o.value.clone(),_=qa(o.fieldTransforms,d,a);return f.setAll(_),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof $t?function(o,a,h,d){if(!Pr(o.precondition,a))return h;const f=qa(o.fieldTransforms,d,a),_=a.data;return _.setAll(Ql(o)),_.setAll(f),a.convertToFoundDocument(a.version,_).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,r):function(o,a,h){return Pr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):h}(n,e,t)}function em(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=$l(r.transform,i||null);o!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,o))}return t||null}function Ha(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&sn(r,i,(o,a)=>Yp(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class er extends ci{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $t extends ci{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ql(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ga(n,e,t){const r=new Map;te(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,h=e.data.field(o.field);r.set(o.field,Qp(a,h,t[i]))}return r}function qa(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,Kp(o,a,e))}return r}class Jl extends ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tm extends ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nm{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Zp(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=jn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=jn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Wl();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let h=this.applyToLocalView(a,o.mutatedFields);h=t.has(i.key)?null:h;const d=Kl(a,h);d!==null&&r.set(i.key,d),a.isValidDocument()||a.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),_e())}isEqual(e){return this.batchId===e.batchId&&sn(this.mutations,e.mutations,(t,r)=>Ha(t,r))&&sn(this.baseMutations,e.baseMutations,(t,r)=>Ha(t,r))}}class Ws{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){te(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return zp}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Ws(e,t,r,i)}}/**
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
 */class rm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ne,W;function im(n){switch(n){case R.OK:return F(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function sm(n){if(n===void 0)return Vt("GRPC error has no .code"),R.UNKNOWN;switch(n){case ne.OK:return R.OK;case ne.CANCELLED:return R.CANCELLED;case ne.UNKNOWN:return R.UNKNOWN;case ne.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ne.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ne.INTERNAL:return R.INTERNAL;case ne.UNAVAILABLE:return R.UNAVAILABLE;case ne.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ne.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ne.NOT_FOUND:return R.NOT_FOUND;case ne.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ne.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ne.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ne.ABORTED:return R.ABORTED;case ne.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ne.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ne.DATA_LOSS:return R.DATA_LOSS;default:return F(39323,{code:n})}}(W=ne||(ne={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new xs([4294967295,4294967295],0);class om{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ms(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function am(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function cm(n,e){return ms(n,e.toTimestamp())}function Yt(n){return te(!!n,49232),J.fromTimestamp(function(t){const r=Mt(t);return new Y(r.seconds,r.nanos)}(n))}function Yl(n,e){return gs(n,e).canonicalString()}function gs(n,e){const t=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function lm(n){const e=X.fromString(n);return te(ym(e),10190,{key:e.toString()}),e}function ys(n,e){return Yl(n.databaseId,e.path)}function um(n){const e=lm(n);return e.length===4?X.emptyPath():dm(e)}function hm(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function dm(n){return te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ka(n,e,t){return{name:ys(n,e),fields:t.value.mapValue.fields}}function fm(n,e){let t;if(e instanceof er)t={update:Ka(n,e.key,e.value)};else if(e instanceof Jl)t={delete:ys(n,e.key)};else if(e instanceof $t)t={update:Ka(n,e.key,e.data),updateMask:gm(e.fieldMask)};else{if(!(e instanceof tm))return F(16599,{dt:e.type});t={verify:ys(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const h=a.transform;if(h instanceof Hn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Gn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof qn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Hr)return{fieldPath:a.field.canonicalString(),increment:h.Ae};throw F(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:cm(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)}(n,e.precondition)),t}function pm(n,e){return n&&n.length>0?(te(e!==void 0,14353),n.map(t=>function(i,o){let a=i.updateTime?Yt(i.updateTime):Yt(o);return a.isEqual(J.min())&&(a=Yt(o)),new Xp(a,i.transformResults||[])}(t,e))):[]}function mm(n){let e=um(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){te(r===1,65062);const _=t.from[0];_.allDescendants?i=_.collectionId:e=e.child(_.collectionId)}let o=[];t.where&&(o=function(I){const S=Xl(I);return S instanceof vt&&Ol(S)?S.getFilters():[S]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(S=>function(k){return new zr(Qt(k.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(S))}(t.orderBy));let h=null;t.limit&&(h=function(I){let S;return S=typeof I=="object"?I.value:I,Os(S)?null:S}(t.limit));let d=null;t.startAt&&(d=function(I){const S=!!I.before,P=I.values||[];return new Wr(P,S)}(t.startAt));let f=null;return t.endAt&&(f=function(I){const S=!I.before,P=I.values||[];return new Wr(P,S)}(t.endAt)),Vp(e,i,a,o,h,"F",d,f)}function Xl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Qt(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qt(t.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Qt(t.unaryFilter.field);return ce.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Qt(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(t){return ce.create(Qt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return vt.create(t.compositeFilter.filters.map(r=>Xl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(n):F(30097,{filter:n})}function Qt(n){return de.fromServerFormat(n.fieldPath)}function gm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ym(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Zl(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class _m{constructor(e){this.yt=e}}function vm(n){const e=mm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ps(e,e.limit,"L"):e}/**
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
 */class wm{constructor(){this.bn=new Im}addToCollectionParentIndex(e,t){return this.bn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(_t.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(_t.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class Im{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new fe(X.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new fe(X.comparator)).toArray()}}/**
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
 */const Qa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eu=41943040;class be{static withCacheSize(e){return new be(e,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */be.DEFAULT_COLLECTION_PERCENTILE=10,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,be.DEFAULT=new be(eu,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),be.DISABLED=new be(-1,0,0);/**
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
 */class ln{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ln(0)}static ar(){return new ln(-1)}}/**
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
 */const Ja="LruGarbageCollector",Em=1048576;function Ya([n,e],[t,r]){const i=H(n,t);return i===0?H(e,r):i}class Tm{constructor(e){this.Pr=e,this.buffer=new fe(Ya),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ya(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bm{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){N(Ja,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Zn(t)?N(Ja,"Ignoring IndexedDB error during garbage collection: ",t):await ks(t)}await this.Ar(3e5)})}}class Am{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return x.resolve(Ns.ce);const r=new Tm(t);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Qa)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qa):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,i,o,a,h,d,f;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,a=Date.now(),this.nthSequenceNumber(e,i))).next(I=>(r=I,h=Date.now(),this.removeTargets(e,r,t))).next(I=>(o=I,d=Date.now(),this.removeOrphanedDocuments(e,r))).next(I=>(f=Date.now(),Kt()<=U.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-_}ms
	Determined least recently used ${i} in `+(h-a)+`ms
	Removed ${o} targets in `+(d-h)+`ms
	Removed ${I} documents in `+(f-d)+`ms
Total Duration: ${f-_}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I})))}}function Sm(n,e){return new Am(n,e)}/**
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
 */class xm{constructor(){this.changes=new zt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Rm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Cm{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&jn(r.mutation,i,Oe.empty(),Y.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,t,r=_e()){const i=Ct();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Tr();return o.forEach((h,d)=>{a=a.insert(h,d.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ct();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,_e()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,h)=>{t.set(a,h)})})}computeViews(e,t,r,i){let o=$r();const a=Ln(),h=function(){return Ln()}();return t.forEach((d,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof $t)?o=o.insert(f.key,f):_!==void 0?(a.set(f.key,_.mutation.getFieldMask()),jn(_.mutation,f,_.mutation.getFieldMask(),Y.now())):a.set(f.key,Oe.empty())}),this.recalculateAndSaveOverlays(e,o).next(d=>(d.forEach((f,_)=>a.set(f,_)),t.forEach((f,_)=>h.set(f,new Rm(_,a.get(f)??null))),h))}recalculateAndSaveOverlays(e,t){const r=Ln();let i=new Se((a,h)=>a-h),o=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const h of a)h.keys().forEach(d=>{const f=t.get(d);if(f===null)return;let _=r.get(d)||Oe.empty();_=h.applyToLocalView(f,_),r.set(d,_);const I=(i.get(h.batchId)||_e()).add(d);i=i.insert(h.batchId,I)})}).next(()=>{const a=[],h=i.getReverseIterator();for(;h.hasNext();){const d=h.getNext(),f=d.key,_=d.value,I=Wl();_.forEach(S=>{if(!o.has(S)){const P=Kl(t.get(S),r.get(S));P!==null&&I.set(S,P),o=o.add(S)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,I))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return Lp(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):x.resolve(Ct());let h=zn,d=o;return a.next(f=>x.forEach(f,(_,I)=>(h<I.largestBatchId&&(h=I.largestBatchId),o.get(_)?x.resolve():this.remoteDocumentCache.getEntry(e,_).next(S=>{d=d.insert(_,S)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,d,f,_e())).next(_=>({batchId:h,changes:Bl(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=Tr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Tr();return this.indexManager.getCollectionParents(e,o).next(h=>x.forEach(h,d=>{const f=function(I,S){return new oi(S,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,d.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(_=>{_.forEach((I,S)=>{a=a.insert(I,S)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((d,f)=>{const _=f.getKey();a.get(_)===null&&(a=a.insert(_,ke.newInvalidDocument(_)))});let h=Tr();return a.forEach((d,f)=>{const _=o.get(d);_!==void 0&&jn(_.mutation,f,Oe.empty(),Y.now()),Us(t,f)&&(h=h.insert(d,f))}),h})}}/**
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
 */class Pm{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return x.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Yt(i.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(i){return{name:i.name,query:vm(i.bundledQuery),readTime:Yt(i.readTime)}}(t)),x.resolve()}}/**
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
 */class km{constructor(){this.overlays=new Se(L.comparator),this.Lr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ct();return x.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.St(e,t,o)}),x.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const i=Ct(),o=t.length+1,a=new L(t.child("")),h=this.overlays.getIteratorFrom(a);for(;h.hasNext();){const d=h.getNext().value,f=d.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return x.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Se((f,_)=>f-_);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=Ct(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const h=Ct(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>h.set(f,_)),!(h.size()>=i)););return x.resolve(h)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rm(t,r));let o=this.Lr.get(t);o===void 0&&(o=_e(),this.Lr.set(t,o)),this.Lr.set(t,o.add(r.key))}}/**
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
 */class Nm{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
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
 */class zs{constructor(){this.kr=new fe(ae.qr),this.Kr=new fe(ae.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new ae(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new ae(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new L(new X([])),r=new ae(t,e),i=new ae(t,e+1),o=[];return this.Kr.forEachInRange([r,i],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new L(new X([])),r=new ae(t,e),i=new ae(t,e+1);let o=_e();return this.Kr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new ae(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ae{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return L.comparator(e.key,t.key)||H(e.Jr,t.Jr)}static Ur(e,t){return H(e.Jr,t.Jr)||L.comparator(e.key,t.key)}}/**
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
 */class Dm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new fe(ae.qr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new nm(o,t,r,i);this.mutationQueue.push(a);for(const h of i)this.Hr=this.Hr.add(new ae(h.key,o)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),o=i<0?0:i;return x.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Ds:this.Yn-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ae(t,0),i=new ae(t,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([r,i],a=>{const h=this.Zr(a.Jr);o.push(h)}),x.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(H);return t.forEach(i=>{const o=new ae(i,0),a=new ae(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,a],h=>{r=r.add(h.Jr)})}),x.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const a=new ae(new L(o),0);let h=new fe(H);return this.Hr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(h=h.add(d.Jr)),!0)},a),x.resolve(this.Yr(h))}Yr(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){te(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return x.forEach(t.mutations,i=>{const o=new ae(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new ae(t,0),i=this.Hr.firstAfterOrEqual(r);return x.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Om{constructor(e){this.ti=e,this.docs=function(){return new Se(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let r=$r();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():ke.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=$r();const a=t.path,h=new L(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||hp(up(_),r)<=0||(i.has(_.key)||Us(t,_))&&(o=o.insert(_.key,_.mutableCopy()))}return x.resolve(o)}getAllFromCollectionGroup(e,t,r,i){F(9500)}ni(e,t){return x.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Vm(this)}getSize(e){return x.resolve(this.size)}}class Vm extends xm{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),x.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class Mm{constructor(e){this.persistence=e,this.ri=new zt(t=>js(t),Fs),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new zs,this.targetCount=0,this.oi=ln._r()}forEachTarget(e,t){return this.ri.forEach((r,i)=>t(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),x.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new ln(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.lr(t),x.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.ri.forEach((a,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,h.targetId)),i++)}),x.waitFor(o).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),x.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.si.containsKey(t))}}/**
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
 */class tu{constructor(e,t){this._i={},this.overlays={},this.ai=new Ns(0),this.ui=!1,this.ui=!0,this.ci=new Nm,this.referenceDelegate=e(this),this.li=new Mm(this),this.indexManager=new wm,this.remoteDocumentCache=function(i){return new Om(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new _m(t),this.Pi=new Pm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new km,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new Dm(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const i=new Lm(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(o=>this.referenceDelegate.Ei(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ii(e,t){return x.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class Lm extends fp{constructor(e){super(),this.currentSequenceNumber=e}}class $s{constructor(e){this.persistence=e,this.Ri=new zs,this.Ai=null}static Vi(e){return new $s(e)}get di(){if(this.Ai)return this.Ai;throw F(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.di,r=>{const i=L.fromPath(r);return this.mi(e,i).next(o=>{o||t.removeEntry(i,J.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return x.or([()=>x.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Gr{constructor(e,t){this.persistence=e,this.fi=new zt(r=>gp(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Sm(this,t)}static Vi(e,t){return new Gr(e,t)}Ti(){}Ei(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return x.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(o=>o?x.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ni(e,a=>this.wr(e,a,t).next(h=>{h||(r++,o.removeEntry(a,J.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Rr(e.data.value)),t}wr(e,t,r){return x.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return x.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Hs{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=i}static Is(e,t){let r=_e(),i=_e();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Hs(e,t.fromCache,r,i)}}/**
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
 */class jm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Fm{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Pd()?8:pp(we())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.gs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new jm;return this.ys(e,t,a).next(h=>{if(o.result=h,this.As)return this.ws(e,t,a,h.size)})}).next(()=>o.result)}ws(e,t,r,i){return r.documentReadCount<this.Vs?(Kt()<=U.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(Kt()<=U.DEBUG&&N("QueryEngine","Query:",kn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Kt()<=U.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nt(t))):x.resolve())}gs(e,t){if(za(t))return x.resolve(null);let r=Nt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ps(t,null,"F"),r=Nt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=_e(...o);return this.fs.getDocuments(e,a).next(h=>this.indexManager.getMinOffset(e,r).next(d=>{const f=this.Ss(t,h);return this.bs(t,f,a,d.readTime)?this.gs(e,ps(t,null,"F")):this.Ds(e,f,t,d)}))})))}ps(e,t,r,i){return za(t)||i.isEqual(J.min())?x.resolve(null):this.fs.getDocuments(e,r).next(o=>{const a=this.Ss(t,o);return this.bs(t,a,r,i)?x.resolve(null):(Kt()<=U.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),kn(t)),this.Ds(e,a,t,lp(i,zn)).next(h=>h))})}Ss(e,t){let r=new fe(Up(e));return t.forEach((i,o)=>{Us(e,o)&&(r=r.add(o))}),r}bs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ys(e,t,r){return Kt()<=U.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",kn(t)),this.fs.getDocumentsMatchingQuery(e,t,_t.min(),r)}Ds(e,t,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Um="LocalStore";class Bm{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new Se(H),this.Fs=new zt(o=>js(o),Fs),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cm(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Wm(n,e,t,r){return new Bm(n,e,t,r)}async function nu(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],h=[];let d=_e();for(const f of i){a.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){h.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return t.localDocuments.getDocuments(r,d).next(f=>({Ns:f,removedBatchIds:a,addedBatchIds:h}))})})}function zm(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return function(h,d,f,_){const I=f.batch,S=I.keys();let P=x.resolve();return S.forEach(k=>{P=P.next(()=>_.getEntry(d,k)).next(M=>{const O=f.docVersions.get(k);te(O!==null,48541),M.version.compareTo(O)<0&&(I.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),_.addEntry(M)))})}),P.next(()=>h.mutationQueue.removeMutationBatch(d,I))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let d=_e();for(let f=0;f<h.mutationResults.length;++f)h.mutationResults[f].transformResults.length>0&&(d=d.add(h.batch.mutations[f].key));return d}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function $m(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function Hm(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ds),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Xa{constructor(){this.activeTargetIds=Gp()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gm{constructor(){this.vo=new Xa,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Xa,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qm{Mo(e){}shutdown(){}}/**
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
 */const Za="ConnectivityMonitor";class ec{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){N(Za,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){N(Za,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let br=null;function _s(){return br===null?br=function(){return 268435456+Math.round(2147483648*Math.random())}():br++,"0x"+br.toString(16)}/**
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
 */const Qi="RestConnection",Km={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Qm{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Ur?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,o){const a=_s(),h=this.Qo(e,t.toUriEncodedString());N(Qi,`Sending RPC '${e}' ${a}:`,h,r);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,i,o);const{host:f}=new URL(h),_=Yn(f);return this.zo(e,h,d,r,_).then(I=>(N(Qi,`Received RPC '${e}' ${a}: `,I),I),I=>{throw Wn(Qi,`RPC '${e}' ${a} failed with error: `,I,"url: ",h,"request:",r),I})}jo(e,t,r,i,o,a){return this.Wo(e,t,r,i,o)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+dn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}Qo(e,t){const r=Km[e];let i=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class Jm{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const ge="WebChannelConnection",Nn=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Xt extends Qm{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Xt.c_){const e=gl();Nn(e,ml.STAT_EVENT,t=>{t.stat===cs.PROXY?N(ge,"STAT_EVENT: detected buffering proxy"):t.stat===cs.NOPROXY&&N(ge,"STAT_EVENT: detected no buffering proxy")}),Xt.c_=!0}}zo(e,t,r,i,o){const a=_s();return new Promise((h,d)=>{const f=new fl;f.setWithCredentials(!0),f.listenOnce(pl.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case xr.NO_ERROR:const I=f.getResponseJson();N(ge,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(I)),h(I);break;case xr.TIMEOUT:N(ge,`RPC '${e}' ${a} timed out`),d(new D(R.DEADLINE_EXCEEDED,"Request time out"));break;case xr.HTTP_ERROR:const S=f.getStatus();if(N(ge,`RPC '${e}' ${a} failed with status:`,S,"response text:",f.getResponseText()),S>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const k=P==null?void 0:P.error;if(k&&k.status&&k.message){const M=function($){const B=$.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(B)>=0?B:R.UNKNOWN}(k.status);d(new D(M,k.message))}else d(new D(R.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new D(R.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{N(ge,`RPC '${e}' ${a} completed.`)}});const _=JSON.stringify(i);N(ge,`RPC '${e}' ${a} sending request:`,i),f.send(t,"POST",_,r,15)})}T_(e,t,r){const i=_s(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Go(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const f=o.join("");N(ge,`Creating RPC '${e}' stream ${i}: ${f}`,h);const _=a.createWebChannel(f,h);this.E_(_);let I=!1,S=!1;const P=new Jm({Jo:k=>{S?N(ge,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(I||(N(ge,`Opening RPC '${e}' stream ${i} transport.`),_.open(),I=!0),N(ge,`RPC '${e}' stream ${i} sending:`,k),_.send(k))},Ho:()=>_.close()});return Nn(_,On.EventType.OPEN,()=>{S||(N(ge,`RPC '${e}' stream ${i} transport opened.`),P.i_())}),Nn(_,On.EventType.CLOSE,()=>{S||(S=!0,N(ge,`RPC '${e}' stream ${i} transport closed`),P.o_(),this.I_(_))}),Nn(_,On.EventType.ERROR,k=>{S||(S=!0,Wn(ge,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),P.o_(new D(R.UNAVAILABLE,"The operation could not be completed")))}),Nn(_,On.EventType.MESSAGE,k=>{var M;if(!S){const O=k.data[0];te(!!O,16349);const $=O,B=($==null?void 0:$.error)||((M=$[0])==null?void 0:M.error);if(B){N(ge,`RPC '${e}' stream ${i} received error:`,B);const Z=B.status;let Ce=function(w){const m=ne[w];if(m!==void 0)return sm(m)}(Z),ie=B.message;Z==="NOT_FOUND"&&ie.includes("database")&&ie.includes("does not exist")&&ie.includes(this.databaseId.database)&&Wn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ce===void 0&&(Ce=R.INTERNAL,ie="Unknown error status: "+Z+" with message "+B.message),S=!0,P.o_(new D(Ce,ie)),_.close()}else N(ge,`RPC '${e}' stream ${i} received:`,O),P.__(O)}}),Xt.u_(),setTimeout(()=>{P.s_()},0),P}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return yl()}}/**
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
 */function Ym(n){return new Xt(n)}function Ji(){return typeof document<"u"?document:null}/**
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
 */function li(n){return new om(n,!0)}/**
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
 */Xt.c_=!1;class ru{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=i,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const tc="PersistentStream";class Xm{constructor(e,t,r,i,o,a,h,d){this.Ci=e,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=h,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ru(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new D(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return N(tc,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(N(tc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zm extends Xm{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=pm(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=hm(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>fm(this.serializer,r))};this.q_(t)}}/**
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
 */class eg{}class tg extends eg{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(e,gs(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(R.UNKNOWN,o.toString())})}jo(e,t,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,h])=>this.connection.jo(e,gs(t,r),i,a,h,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(R.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function ng(n,e,t,r){return new tg(n,e,t,r)}class rg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vt(t),this.aa=!1):N("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const tr="RemoteStore";class ig{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{rr(this)&&(N(tr,"Restarting streams for network reachability change."),await async function(d){const f=K(d);f.Ia.add(4),await nr(f),f.Va.set("Unknown"),f.Ia.delete(4),await ui(f)}(this))})}),this.Va=new rg(r,i)}}async function ui(n){if(rr(n))for(const e of n.Ra)await e(!0)}async function nr(n){for(const e of n.Ra)await e(!1)}function rr(n){return K(n).Ia.size===0}async function iu(n,e,t){if(!Zn(e))throw e;n.Ia.add(1),await nr(n),n.Va.set("Offline"),t||(t=()=>$m(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(tr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ui(n)})}function su(n,e){return e().catch(t=>iu(n,t,e))}async function hi(n){const e=K(n),t=wt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ds;for(;sg(e);)try{const i=await Hm(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,og(e,i)}catch(i){await iu(e,i)}ou(e)&&au(e)}function sg(n){return rr(n)&&n.Ta.length<10}function og(n,e){n.Ta.push(e);const t=wt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function ou(n){return rr(n)&&!wt(n).x_()&&n.Ta.length>0}function au(n){wt(n).start()}async function ag(n){wt(n).ra()}async function cg(n){const e=wt(n);for(const t of n.Ta)e.ea(t.mutations)}async function lg(n,e,t){const r=n.Ta.shift(),i=Ws.from(r,e,t);await su(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await hi(n)}async function ug(n,e){e&&wt(n).Y_&&await async function(r,i){if(function(a){return im(a)&&a!==R.ABORTED}(i.code)){const o=r.Ta.shift();wt(r).B_(),await su(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await hi(r)}}(n,e),ou(n)&&au(n)}async function nc(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),N(tr,"RemoteStore received new credentials");const r=rr(t);t.Ia.add(3),await nr(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ui(t)}async function hg(n,e){const t=K(n);e?(t.Ia.delete(2),await ui(t)):e||(t.Ia.add(2),await nr(t),t.Va.set("Unknown"))}function wt(n){return n.fa||(n.fa=function(t,r,i){const o=K(t);return o.sa(),new Zm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ag.bind(null,n),t_:ug.bind(null,n),ta:cg.bind(null,n),na:lg.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await hi(n)):(await n.fa.stop(),n.Ta.length>0&&(N(tr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Gs{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,h=new Gs(e,t,a,i,o);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cu(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),Zn(n))return new D(R.UNAVAILABLE,`${e}: ${n}`);throw n}class dg{constructor(){this.queries=rc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=K(t),o=i.queries;i.queries=rc(),o.forEach((a,h)=>{for(const d of h.Sa)d.onError(r)})})(this,new D(R.ABORTED,"Firestore shutting down"))}}function rc(){return new zt(n=>Fl(n),jl)}function fg(n){n.Ca.forEach(e=>{e.next()})}var ic,sc;(sc=ic||(ic={})).Ma="default",sc.Cache="cache";const pg="SyncEngine";class mg{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new zt(h=>Fl(h),jl),this.Eu=new Map,this.Iu=new Set,this.Ru=new Se(L.comparator),this.Au=new Map,this.Vu=new zs,this.du={},this.mu=new Map,this.fu=ln.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function gg(n,e,t){const r=wg(n);try{const i=await function(a,h){const d=K(a),f=Y.now(),_=h.reduce((P,k)=>P.add(k.key),_e());let I,S;return d.persistence.runTransaction("Locally write mutations","readwrite",P=>{let k=$r(),M=_e();return d.xs.getEntries(P,_).next(O=>{k=O,k.forEach(($,B)=>{B.isValidDocument()||(M=M.add($))})}).next(()=>d.localDocuments.getOverlayedDocuments(P,k)).next(O=>{I=O;const $=[];for(const B of h){const Z=em(B,I.get(B.key).overlayedDocument);Z!=null&&$.push(new $t(B.key,Z,kl(Z.value.mapValue),Xe.exists(!0)))}return d.mutationQueue.addMutationBatch(P,f,$,h)}).next(O=>{S=O;const $=O.applyToLocalDocumentSet(I,M);return d.documentOverlayCache.saveOverlays(P,O.batchId,$)})}).then(()=>({batchId:S.batchId,changes:Bl(I)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,h,d){let f=a.du[a.currentUser.toKey()];f||(f=new Se(H)),f=f.insert(h,d),a.du[a.currentUser.toKey()]=f}(r,i.batchId,t),await di(r,i.changes),await hi(r.remoteStore)}catch(i){const o=cu(i,"Failed to persist write");t.reject(o)}}function oc(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((o,a)=>{const h=a.view.va(e);h.snapshot&&i.push(h.snapshot)}),function(a,h){const d=K(a);d.onlineState=h;let f=!1;d.queries.forEach((_,I)=>{for(const S of I.Sa)S.va(h)&&(f=!0)}),f&&fg(d)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yg(n,e){const t=K(n),r=e.batch.batchId;try{const i=await zm(t.localStore,e);uu(t,r,null),lu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await di(t,i)}catch(i){await ks(i)}}async function _g(n,e,t){const r=K(n);try{const i=await function(a,h){const d=K(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let _;return d.mutationQueue.lookupMutationBatch(f,h).next(I=>(te(I!==null,37113),_=I.keys(),d.mutationQueue.removeMutationBatch(f,I))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,_,h)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,_)).next(()=>d.localDocuments.getDocuments(f,_))})}(r.localStore,e);uu(r,e,t),lu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await di(r,i)}catch(i){await ks(i)}}function lu(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function uu(n,e,t){const r=K(n);let i=r.du[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}async function di(n,e,t){const r=K(n),i=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((h,d)=>{a.push(r.pu(d,e,t).then(f=>{var _;if((f||t)&&r.isPrimaryClient){const I=f?!f.fromCache:(_=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:_.current;r.sharedClientState.updateQueryState(d.targetId,I?"current":"not-current")}if(f){i.push(f);const I=Hs.Is(d.targetId,f);o.push(I)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(d,f){const _=K(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>x.forEach(f,S=>x.forEach(S.Ts,P=>_.persistence.referenceDelegate.addReference(I,S.targetId,P)).next(()=>x.forEach(S.Es,P=>_.persistence.referenceDelegate.removeReference(I,S.targetId,P)))))}catch(I){if(!Zn(I))throw I;N(Um,"Failed to update sequence numbers: "+I)}for(const I of f){const S=I.targetId;if(!I.fromCache){const P=_.vs.get(S),k=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(k);_.vs=_.vs.insert(S,M)}}}(r.localStore,o))}async function vg(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){N(pg,"User change. New user:",e.toKey());const r=await nu(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(h=>{h.forEach(d=>{d.reject(new D(R.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await di(t,r.Ns)}}function wg(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_g.bind(null,e),e}class qr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=li(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Wm(this.persistence,new Fm,e.initialUser,this.serializer)}Cu(e){return new tu($s.Vi,this.serializer)}Du(e){return new Gm}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qr.provider={build:()=>new qr};class Ig extends qr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){te(this.persistence.referenceDelegate instanceof Gr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new bm(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?be.withCacheSize(this.cacheSizeBytes):be.DEFAULT;return new tu(r=>Gr.Vi(r,t),this.serializer)}}class vs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>oc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vg.bind(null,this.syncEngine),await hg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dg}()}createDatastore(e){const t=li(e.databaseInfo.databaseId),r=Ym(e.databaseInfo);return ng(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,h){return new ig(r,i,o,a,h)}(this.localStore,this.datastore,e.asyncQueue,t=>oc(this.syncEngine,t,0),function(){return ec.v()?new ec:new qm}())}createSyncEngine(e,t){return function(i,o,a,h,d,f,_){const I=new mg(i,o,a,h,d,f);return _&&(I.gu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=K(i);N(tr,"RemoteStore shutting down."),o.Ia.add(5),await nr(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}vs.provider={build:()=>new vs};/**
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
 */const It="FirestoreClient";class Eg{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=ye.UNAUTHENTICATED,this.clientId=Cs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(It,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(It,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=cu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yi(n,e){n.asyncQueue.verifyOperationInProgress(),N(It,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nu(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ac(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Tg(n);N(It,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>nc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>nc(e.remoteStore,i)),n._onlineComponents=e}async function Tg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(It,"Using user provided OfflineComponentProvider");try{await Yi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Wn("Error using user provided cache. Falling back to memory cache: "+t),await Yi(n,new qr)}}else N(It,"Using default OfflineComponentProvider"),await Yi(n,new Ig(void 0));return n._offlineComponents}async function bg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(It,"Using user provided OnlineComponentProvider"),await ac(n,n._uninitializedComponentsProvider._online)):(N(It,"Using default OnlineComponentProvider"),await ac(n,new vs))),n._onlineComponents}function Ag(n){return bg(n).then(e=>e.syncEngine)}function Sg(n,e){const t=new kt;return n.asyncQueue.enqueueAndForget(async()=>gg(await Ag(n),e,t)),t.promise}/**
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
 */function hu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const xg="ComponentProvider",cc=new Map;function Rg(n,e,t,r,i){return new wp(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,hu(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const du="firestore.googleapis.com",lc=!0;class uc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=du,this.ssl=lc}else this.host=e.host,this.ssl=e.ssl??lc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=eu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Em)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hu(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xf;switch(r.type){case"firstParty":return new np(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=cc.get(t);r&&(N(xg,"Removing Datastore"),cc.delete(t),r.terminate())}(this),Promise.resolve()}}function Cg(n,e,t,r={}){var f;n=El(n,fi);const i=Yn(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},h=`${e}:${t}`;i&&ol(`https://${h}`),o.host!==du&&o.host!==h&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:h,ssl:i,emulatorOptions:r};if(!yt(d,a)&&(n._setSettings(d),r.mockUserToken)){let _,I;if(typeof r.mockUserToken=="string")_=r.mockUserToken,I=ye.MOCK_USER;else{_=bd(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new D(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new ye(S)}n._authCredentials=new Zf(new vl(_,I))}}/**
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
 */class qs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qs(this.firestore,e,this._query)}}class ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ve(this.firestore,e,this._key)}toJSON(){return{type:ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Xn(t,ve._jsonSchema))return new ve(e,r||null,new L(X.fromString(t.referencePath)))}}ve._jsonSchemaVersion="firestore/documentReference/1.0",ve._jsonSchema={type:re("string",ve._jsonSchemaVersion),referencePath:re("string")};class gt extends qs{constructor(e,t,r){super(e,t,Mp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new L(e))}withConverter(e){return new gt(this.firestore,e,this._path)}}function fu(n,e,...t){if(n=Ae(n),wl("collection","path",e),n instanceof fi){const r=X.fromString(e,...t);return Na(r),new gt(n,null,r)}{if(!(n instanceof ve||n instanceof gt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return Na(r),new gt(n.firestore,null,r)}}function Pg(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=Cs.newId()),wl("doc","path",e),n instanceof fi){const r=X.fromString(e,...t);return ka(r),new ve(n,null,new L(r))}{if(!(n instanceof ve||n instanceof gt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return ka(r),new ve(n.firestore,n instanceof gt?n.converter:null,new L(r))}}/**
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
 */const hc="AsyncQueue";class dc{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ru(this,"async_queue_retry"),this._c=()=>{const r=Ji();r&&N(hc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ji();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ji();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new kt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Zn(e))throw e;N(hc,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Vt("INTERNAL UNHANDLED ERROR: ",fc(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Gs.createAndSchedule(this,e,t,r,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&F(47125,{Pc:fc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function fc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class pu extends fi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new dc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dc(e),this._firestoreClient=void 0,await e}}}function kg(n,e){const t=typeof n=="object"?n:Ss(),r=typeof n=="string"?n:Ur,i=Wt(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Ed("firestore");o&&Cg(i,...o)}return i}function Ng(n){if(n._terminated)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Dg(n),n._firestoreClient}function Dg(n){var r,i,o,a;const e=n._freezeSettings(),t=Rg(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Eg(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class De{constructor(e){this._byteString=e}static fromBase64String(e){try{return new De(Ge.fromBase64String(e))}catch(t){throw new D(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new De(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:De._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xn(e,De._jsonSchema))return De.fromBase64String(e.bytes)}}De._jsonSchemaVersion="firestore/bytes/1.0",De._jsonSchema={type:re("string",De._jsonSchemaVersion),bytes:re("string")};/**
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
 */class mu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ks{constructor(e){this._methodName=e}}/**
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
 */class Ze{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ze._jsonSchemaVersion}}static fromJSON(e){if(Xn(e,Ze._jsonSchema))return new Ze(e.latitude,e.longitude)}}Ze._jsonSchemaVersion="firestore/geoPoint/1.0",Ze._jsonSchema={type:re("string",Ze._jsonSchemaVersion),latitude:re("number"),longitude:re("number")};/**
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
 */class We{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:We._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xn(e,We._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new We(e.vectorValues);throw new D(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}We._jsonSchemaVersion="firestore/vectorValue/1.0",We._jsonSchema={type:re("string",We._jsonSchemaVersion),vectorValues:re("object")};/**
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
 */const Og=/^__.*__$/;class Vg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new $t(e,this.data,this.fieldMask,t,this.fieldTransforms):new er(e,this.data,t,this.fieldTransforms)}}function gu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:n})}}class Qs{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Qs({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Kr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(gu(this.dataSource)&&Og.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class Mg{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||li(e)}I(e,t,r,i=!1){return new Qs({dataSource:e,methodName:t,targetDoc:r,path:de.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lg(n){const e=n._freezeSettings(),t=li(n._databaseId);return new Mg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function jg(n,e,t,r,i,o={}){const a=n.I(o.merge||o.mergeFields?2:0,e,t,i);wu("Data must be an object, but it was:",a,r);const h=_u(r,a);let d,f;if(o.merge)d=new Oe(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const _=[];for(const I of o.mergeFields){const S=Ys(e,I,t);if(!a.contains(S))throw new D(R.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Bg(_,S)||_.push(S)}d=new Oe(_),f=a.fieldTransforms.filter(I=>d.covers(I.field))}else d=null,f=a.fieldTransforms;return new Vg(new Ne(h),d,f)}class Js extends Ks{_toFieldTransform(e){return new Jp(e.path,new Hn)}isEqual(e){return e instanceof Js}}function yu(n,e){if(vu(n=Ae(n)))return wu("Unsupported field value:",e,n),_u(n,e);if(n instanceof Ks)return function(r,i){if(!gu(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const h of r){let d=yu(h,i.gc(a));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Y.fromDate(r);return{timestampValue:ms(i.serializer,o)}}if(r instanceof Y){const o=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ms(i.serializer,o)}}if(r instanceof Ze)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof De)return{bytesValue:am(i.serializer,r._byteString)};if(r instanceof ve){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Yl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof We)return function(a,h){const d=a instanceof We?a.toArray():a;return{mapValue:{fields:{[Cl]:{stringValue:Pl},[us]:{arrayValue:{values:d.map(_=>{if(typeof _!="number")throw h.yc("VectorValues must only contain numeric values.");return Bs(h.serializer,_)})}}}}}}(r,i);if(Zl(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Ps(r)}`)}(n,e)}function _u(n,e){const t={};return bl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fn(n,(r,i)=>{const o=yu(i,e.dc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function vu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof Ze||n instanceof De||n instanceof ve||n instanceof Ks||n instanceof We||Zl(n))}function wu(n,e,t){if(!vu(t)||!Il(t)){const r=Ps(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function Ys(n,e,t){if((e=Ae(e))instanceof mu)return e._internalPath;if(typeof e=="string")return Ug(n,e);throw Kr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Fg=new RegExp("[~\\*/\\[\\]]");function Ug(n,e,t){if(e.search(Fg)>=0)throw Kr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new mu(...e.split("."))._internalPath}catch{throw Kr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Kr(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let d="";return(o||a)&&(d+=" (found",o&&(d+=` in field ${r}`),a&&(d+=` in document ${i}`),d+=")"),new D(R.INVALID_ARGUMENT,h+n+d)}function Bg(n,e){return n.some(t=>t.isEqual(e))}function Iu(){return new Js("serverTimestamp")}const pc="@firebase/firestore",mc="4.14.0";/**
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
 */class Eu{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Wg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ys("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Wg extends Eu{data(){return super.data()}}function zg(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zt extends Eu{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new kr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ys("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Zt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Zt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zt._jsonSchema={type:re("string",Zt._jsonSchemaVersion),bundleSource:re("string","DocumentSnapshot"),bundleName:re("string"),bundle:re("string")};class kr extends Zt{data(e={}){return super.data(e)}}class Fn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ar(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new kr(this._firestore,this._userDataWriter,r.key,r,new Ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(h=>{const d=new kr(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Ar(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const d=new kr(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Ar(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return h.type!==0&&(f=a.indexOf(h.doc.key),a=a.delete(h.doc.key)),h.type!==1&&(a=a.add(h.doc),_=a.indexOf(h.doc.key)),{type:$g(h.type),doc:d,oldIndex:f,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Cs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $g(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
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
 */Fn._jsonSchemaVersion="firestore/querySnapshot/1.0",Fn._jsonSchema={type:re("string",Fn._jsonSchemaVersion),bundleSource:re("string","QuerySnapshot"),bundleName:re("string"),bundle:re("string")};function Tu(n,e){const t=El(n.firestore,pu),r=Pg(n),i=zg(n.converter,e),o=Lg(n.firestore);return Hg(t,[jg(o,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Xe.exists(!1))]).then(()=>r)}function Hg(n,e){const t=Ng(n);return Sg(t,e)}(function(e,t=!0){Yf(hn),He(new Me("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),h=new pu(new ep(r.getProvider("auth-internal")),new rp(a,r.getProvider("app-check-internal")),Ip(a,i),a);return o={useFetchStreams:t,...o},h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Pe(pc,mc,e),Pe(pc,mc,"esm2020")})();var Gg="firebase",qg="12.12.1";/**
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
 */Pe(Gg,qg,"app");function bu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kg=bu,Au=new Bt("auth","Firebase",bu());/**
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
 */const Qr=new si("@firebase/auth");function Qg(n,...e){Qr.logLevel<=U.WARN&&Qr.warn(`Auth (${hn}): ${n}`,...e)}function Nr(n,...e){Qr.logLevel<=U.ERROR&&Qr.error(`Auth (${hn}): ${n}`,...e)}/**
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
 */function tt(n,...e){throw Xs(n,...e)}function ze(n,...e){return Xs(n,...e)}function Su(n,e,t){const r={...Kg(),[e]:t};return new Bt("auth","Firebase",r).create(e,{appName:n.name})}function Dt(n){return Su(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xs(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Au.create(n,...e)}function V(n,e,...t){if(!n)throw Xs(e,...t)}function Je(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Nr(e),new Error(e)}function nt(n,e){n||Je(e)}/**
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
 */function ws(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Jg(){return gc()==="http:"||gc()==="https:"}function gc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Yg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jg()||rl()||"connection"in navigator)?navigator.onLine:!0}function Xg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ir{constructor(e,t){this.shortDelay=e,this.longDelay=t,nt(t>e,"Short delay should be less than long delay!"),this.isMobile=Ad()||Rd()}get(){return Yg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zs(n,e){nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class xu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Zg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ey=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ty=new ir(3e4,6e4);function eo(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function pn(n,e,t,r,i={}){return Ru(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const h=Jn({key:n.config.apiKey,...a}).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:d,...o};return xd()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Yn(n.emulatorConfig.host)&&(f.credentials="include"),xu.fetch()(await Cu(n,n.config.apiHost,t,h),f)})}async function Ru(n,e,t){n._canInitEmulator=!1;const r={...Zg,...e};try{const i=new ry(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Sr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const h=o.ok?a.errorMessage:a.error.message,[d,f]=h.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sr(n,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw Sr(n,"email-already-in-use",a);if(d==="USER_DISABLED")throw Sr(n,"user-disabled",a);const _=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Su(n,_,f);tt(n,_)}}catch(i){if(i instanceof Le)throw i;tt(n,"network-request-failed",{message:String(i)})}}async function ny(n,e,t,r,i={}){const o=await pn(n,e,t,r,i);return"mfaPendingCredential"in o&&tt(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Cu(n,e,t,r){const i=`${e}${t}?${r}`,o=n,a=o.config.emulator?Zs(n.config,i):`${n.config.apiScheme}://${i}`;return ey.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class ry{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),ty.get())})}}function Sr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ze(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function iy(n,e){return pn(n,"POST","/v1/accounts:delete",e)}async function Jr(n,e){return pn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Un(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sy(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),i=to(r);V(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Un(Xi(i.auth_time)),issuedAtTime:Un(Xi(i.iat)),expirationTime:Un(Xi(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Xi(n){return Number(n)*1e3}function to(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zc(t);return i?JSON.parse(i):(Nr("Failed to decode base64 JWT payload"),null)}catch(i){return Nr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yc(n){const e=to(n);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Le&&oy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function oy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ay{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Is{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Un(this.lastLoginAt),this.creationTime=Un(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yr(n){var I;const e=n.auth,t=await n.getIdToken(),r=await Kn(n,Jr(e,{idToken:t}));V(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=(I=i.providerUserInfo)!=null&&I.length?Pu(i.providerUserInfo):[],a=ly(n.providerData,o),h=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),f=h?d:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Is(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,_)}async function cy(n){const e=Ae(n);await Yr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ly(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Pu(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function uy(n,e){const t=await Ru(n,{},async()=>{const r=Jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=await Cu(n,i,"/v1/token",`key=${o}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:h,body:r};return n.emulatorConfig&&Yn(n.emulatorConfig.host)&&(d.credentials="include"),xu.fetch()(a,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hy(n,e){return pn(n,"POST","/v2/accounts:revokeToken",eo(n,e))}/**
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
 */class en{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){V(e.length!==0,"internal-error");const t=yc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await uy(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new en;return r&&(V(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(V(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new en,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
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
 */function lt(n,e){V(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ve{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new ay(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Is(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Kn(this,this.stsTokenManager.getToken(this.auth,e));return V(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sy(this,e)}reload(){return cy(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ve({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Yr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Be(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await Kn(this,iy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,h=t.tenantId??void 0,d=t._redirectEventId??void 0,f=t.createdAt??void 0,_=t.lastLoginAt??void 0,{uid:I,emailVerified:S,isAnonymous:P,providerData:k,stsTokenManager:M}=t;V(I&&M,e,"internal-error");const O=en.fromJSON(this.name,M);V(typeof I=="string",e,"internal-error"),lt(r,e.name),lt(i,e.name),V(typeof S=="boolean",e,"internal-error"),V(typeof P=="boolean",e,"internal-error"),lt(o,e.name),lt(a,e.name),lt(h,e.name),lt(d,e.name),lt(f,e.name),lt(_,e.name);const $=new Ve({uid:I,auth:e,email:i,emailVerified:S,displayName:r,isAnonymous:P,photoURL:a,phoneNumber:o,tenantId:h,stsTokenManager:O,createdAt:f,lastLoginAt:_});return k&&Array.isArray(k)&&($.providerData=k.map(B=>({...B}))),d&&($._redirectEventId=d),$}static async _fromIdTokenResponse(e,t,r=!1){const i=new en;i.updateFromServerResponse(t);const o=new Ve({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yr(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];V(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Pu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),h=new en;h.updateFromIdToken(r);const d=new Ve({uid:i.localId,auth:e,stsTokenManager:h,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Is(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(d,f),d}}/**
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
 */const _c=new Map;function Ye(n){nt(n instanceof Function,"Expected a class definition");let e=_c.get(n);return e?(nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_c.set(n,e),e)}/**
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
 */class ku{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ku.type="NONE";const vc=ku;/**
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
 */function Dr(n,e,t){return`firebase:${n}:${e}:${t}`}class tn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Dr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Dr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Jr(this.auth,{idToken:e}).catch(()=>{});return t?Ve._fromGetAccountInfoResponse(this.auth,t,e):null}return Ve._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new tn(Ye(vc),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||Ye(vc);const a=Dr(r,e.config.apiKey,e.name);let h=null;for(const f of t)try{const _=await f._get(a);if(_){let I;if(typeof _=="string"){const S=await Jr(e,{idToken:_}).catch(()=>{});if(!S)break;I=await Ve._fromGetAccountInfoResponse(e,S,_)}else I=Ve._fromJSON(e,_);f!==o&&(h=I),o=f;break}}catch{}const d=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new tn(o,e,r):(o=d[0],h&&await o._set(a,h.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new tn(o,e,r))}}/**
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
 */function wc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lu(e))return"Blackberry";if(ju(e))return"Webos";if(Du(e))return"Safari";if((e.includes("chrome/")||Ou(e))&&!e.includes("edge/"))return"Chrome";if(Mu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nu(n=we()){return/firefox\//i.test(n)}function Du(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ou(n=we()){return/crios\//i.test(n)}function Vu(n=we()){return/iemobile/i.test(n)}function Mu(n=we()){return/android/i.test(n)}function Lu(n=we()){return/blackberry/i.test(n)}function ju(n=we()){return/webos/i.test(n)}function no(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dy(n=we()){var e;return no(n)&&!!((e=window.navigator)!=null&&e.standalone)}function fy(){return Cd()&&document.documentMode===10}function Fu(n=we()){return no(n)||Mu(n)||ju(n)||Lu(n)||/windows phone/i.test(n)||Vu(n)}/**
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
 */function Uu(n,e=[]){let t;switch(n){case"Browser":t=wc(we());break;case"Worker":t=`${wc(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${hn}/${r}`}/**
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
 */class py{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,h)=>{try{const d=e(o);a(d)}catch(d){h(d)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function my(n,e={}){return pn(n,"GET","/v2/passwordPolicy",eo(n,e))}/**
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
 */const gy=6;class yy{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??gy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class _y{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ic(this),this.idTokenSubscription=new Ic(this),this.beforeStateQueue=new py(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Au,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ye(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Jr(this,{idToken:e}),r=await Ve._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Be(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,h=r==null?void 0:r._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===h)&&(d!=null&&d.user)&&(r=d.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Be(this.app))return Promise.reject(Dt(this));const t=e?Ae(e):null;return t&&V(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Be(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Be(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await my(this),t=new yy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await hy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ye(e)||this._popupRedirectResolver;V(t,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[Ye(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(h,this,"internal-error"),h.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,r,i);return()=>{a=!0,d()}}else{const d=e.addObserver(t);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Qg(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ro(n){return Ae(n)}class Ic{constructor(e){this.auth=e,this.observer=null,this.addObserver=Md(t=>this.observer=t)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let io={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vy(n){io=n}function wy(n){return io.loadJS(n)}function Iy(){return io.gapiScript}function Ey(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Ty(n,e){const t=Wt(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(yt(o,e??{}))return i;tt(i,"already-initialized")}return t.initialize({options:e})}function by(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ye);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ay(n,e,t){const r=ro(n);V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Bu(e),{host:a,port:h}=Sy(e),d=h===null?"":`:${h}`,f={url:`${o}//${a}${d}/`},_=Object.freeze({host:a,port:h,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){V(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),V(yt(f,r.config.emulator)&&yt(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,Yn(a)?ol(`${o}//${a}${d}`):xy()}function Bu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Sy(n){const e=Bu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ec(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Ec(a)}}}function Ec(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Wu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,t){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}/**
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
 */async function nn(n,e){return ny(n,"POST","/v1/accounts:signInWithIdp",eo(n,e))}/**
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
 */const Ry="http://localhost";class jt extends Wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...o}=t;if(!r||!i)return null;const a=new jt(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return nn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,nn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nn(e,t)}buildRequest(){const e={requestUri:Ry,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jn(t)}return e}}/**
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
 */class zu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sr extends zu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ut extends sr{constructor(){super("facebook.com")}static credential(e){return jt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";ut.PROVIDER_ID="facebook.com";/**
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
 */class ht extends sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return jt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ht.credential(t,r)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
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
 */class dt extends sr{constructor(){super("github.com")}static credential(e){return jt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com";dt.PROVIDER_ID="github.com";/**
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
 */class ft extends sr{constructor(){super("twitter.com")}static credential(e,t){return jt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ft.credential(t,r)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
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
 */class un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Ve._fromIdTokenResponse(e,r,i),a=Tc(r);return new un({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Tc(r);return new un({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Tc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Xr extends Le{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Xr(e,t,r,i)}}function $u(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Xr._fromErrorAndOperation(n,o,e,r):o})}async function Cy(n,e,t=!1){const r=await Kn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return un._forOperation(n,"link",r)}/**
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
 */async function Py(n,e,t=!1){const{auth:r}=n;if(Be(r.app))return Promise.reject(Dt(r));const i="reauthenticate";try{const o=await Kn(n,$u(r,i,e,n),t);V(o.idToken,r,"internal-error");const a=to(o.idToken);V(a,r,"internal-error");const{sub:h}=a;return V(n.uid===h,r,"user-mismatch"),un._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),o}}/**
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
 */async function ky(n,e,t=!1){if(Be(n.app))return Promise.reject(Dt(n));const r="signIn",i=await $u(n,r,e),o=await un._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function Ny(n,e,t,r){return Ae(n).onIdTokenChanged(e,t,r)}function Dy(n,e,t){return Ae(n).beforeAuthStateChanged(e,t)}const Zr="__sak";/**
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
 */class Hu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zr,"1"),this.storage.removeItem(Zr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Oy=1e3,Vy=10;class Gu extends Hu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,h,d)=>{this.notifyListeners(a,d)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);fy()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Vy):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gu.type="LOCAL";const My=Gu;/**
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
 */class qu extends Hu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qu.type="SESSION";const Ku=qu;/**
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
 */function Ly(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new pi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const h=Array.from(a).map(async f=>f(t.origin,o)),d=await Ly(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pi.receivers=[];/**
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
 */function so(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class jy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((h,d)=>{const f=so("",20);i.port1.start();const _=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(I){const S=I;if(S.data.eventId===f)switch(S.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),h(S.data.response);break;default:clearTimeout(_),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function $e(){return window}function Fy(n){$e().location.href=n}/**
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
 */function Qu(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function Uy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function By(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Wy(){return Qu()?self:null}/**
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
 */const Ju="firebaseLocalStorageDb",zy=1,ei="firebaseLocalStorage",Yu="fbase_key";class or{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mi(n,e){return n.transaction([ei],e?"readwrite":"readonly").objectStore(ei)}function $y(){const n=indexedDB.deleteDatabase(Ju);return new or(n).toPromise()}function Es(){const n=indexedDB.open(Ju,zy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ei,{keyPath:Yu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ei)?e(r):(r.close(),await $y(),e(await Es()))})})}async function bc(n,e,t){const r=mi(n,!0).put({[Yu]:e,value:t});return new or(r).toPromise()}async function Hy(n,e){const t=mi(n,!1).get(e),r=await new or(t).toPromise();return r===void 0?null:r.value}function Ac(n,e){const t=mi(n,!0).delete(e);return new or(t).toPromise()}const Gy=800,qy=3;class Xu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Es(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>qy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pi._getInstance(Wy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Uy(),!this.activeServiceWorker)return;this.sender=new jy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||By()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Es();return await bc(e,Zr,"1"),await Ac(e,Zr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>bc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Hy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ac(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=mi(i,!1).getAll();return new or(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xu.type="LOCAL";const Ky=Xu;new ir(3e4,6e4);/**
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
 */function Qy(n,e){return e?Ye(e):(V(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class oo extends Wu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Jy(n){return ky(n.auth,new oo(n),n.bypassAuthState)}function Yy(n){const{auth:e,user:t}=n;return V(t,e,"internal-error"),Py(t,new oo(n),n.bypassAuthState)}async function Xy(n){const{auth:e,user:t}=n;return V(t,e,"internal-error"),Cy(t,new oo(n),n.bypassAuthState)}/**
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
 */class Zu{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:h}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(d))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jy;case"linkViaPopup":case"linkViaRedirect":return Xy;case"reauthViaPopup":case"reauthViaRedirect":return Yy;default:tt(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zy=new ir(2e3,1e4);class Jt extends Zu{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=so();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zy.get())};e()}}Jt.currentPopupAction=null;/**
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
 */const e_="pendingRedirect",Or=new Map;class t_ extends Zu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Or.get(this.auth._key());if(!e){try{const r=await n_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Or.set(this.auth._key(),e)}return this.bypassAuthState||Or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function n_(n,e){const t=s_(e),r=i_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function r_(n,e){Or.set(n._key(),e)}function i_(n){return Ye(n._redirectPersistence)}function s_(n){return Dr(e_,n.config.apiKey,n.name)}async function o_(n,e,t=!1){if(Be(n.app))return Promise.reject(Dt(n));const r=ro(n),i=Qy(r,e),a=await new t_(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const a_=10*60*1e3;class c_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!eh(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ze(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=a_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sc(e))}saveEventToCache(e){this.cachedEventUids.add(Sc(e)),this.lastProcessedEventTime=Date.now()}}function Sc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function eh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eh(n);default:return!1}}/**
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
 */async function u_(n,e={}){return pn(n,"GET","/v1/projects",e)}/**
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
 */const h_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,d_=/^https?/;async function f_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await u_(n);for(const t of e)try{if(p_(t))return}catch{}tt(n,"unauthorized-domain")}function p_(n){const e=ws(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!d_.test(t))return!1;if(h_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const m_=new ir(3e4,6e4);function xc(){const n=$e().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function g_(n){return new Promise((e,t)=>{var i,o,a;function r(){xc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xc(),t(ze(n,"network-request-failed"))},timeout:m_.get()})}if((o=(i=$e().gapi)==null?void 0:i.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=$e().gapi)!=null&&a.load)r();else{const h=Ey("iframefcb");return $e()[h]=()=>{gapi.load?r():t(ze(n,"network-request-failed"))},wy(`${Iy()}?onload=${h}`).catch(d=>t(d))}}).catch(e=>{throw Vr=null,e})}let Vr=null;function y_(n){return Vr=Vr||g_(n),Vr}/**
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
 */const __=new ir(5e3,15e3),v_="__/auth/iframe",w_="emulator/auth/iframe",I_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},E_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T_(n){const e=n.config;V(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Zs(e,w_):`https://${n.config.authDomain}/${v_}`,r={apiKey:e.apiKey,appName:n.name,v:hn},i=E_.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Jn(r).slice(1)}`}async function b_(n){const e=await y_(n),t=$e().gapi;return V(t,n,"internal-error"),e.open({where:document.body,url:T_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=ze(n,"network-request-failed"),h=$e().setTimeout(()=>{o(a)},__.get());function d(){$e().clearTimeout(h),i(r)}r.ping(d).then(d,()=>{o(a)})}))}/**
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
 */const A_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},S_=500,x_=600,R_="_blank",C_="http://localhost";class Rc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function P_(n,e,t,r=S_,i=x_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const d={...A_,width:r.toString(),height:i.toString(),top:o,left:a},f=we().toLowerCase();t&&(h=Ou(f)?R_:t),Nu(f)&&(e=e||C_,d.scrollbars="yes");const _=Object.entries(d).reduce((S,[P,k])=>`${S}${P}=${k},`,"");if(dy(f)&&h!=="_self")return k_(e||"",h),new Rc(null);const I=window.open(e||"",h,_);V(I,n,"popup-blocked");try{I.focus()}catch{}return new Rc(I)}function k_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const N_="__/auth/handler",D_="emulator/auth/handler",O_=encodeURIComponent("fac");async function Cc(n,e,t,r,i,o){V(n.config.authDomain,n,"auth-domain-config-required"),V(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:hn,eventId:i};if(e instanceof zu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Vd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,I]of Object.entries({}))a[_]=I}if(e instanceof sr){const _=e.getScopes().filter(I=>I!=="");_.length>0&&(a.scopes=_.join(","))}n.tenantId&&(a.tid=n.tenantId);const h=a;for(const _ of Object.keys(h))h[_]===void 0&&delete h[_];const d=await n._getAppCheckToken(),f=d?`#${O_}=${encodeURIComponent(d)}`:"";return`${V_(n)}?${Jn(h).slice(1)}${f}`}function V_({config:n}){return n.emulator?Zs(n,D_):`https://${n.authDomain}/${N_}`}/**
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
 */const Zi="webStorageSupport";class M_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ku,this._completeRedirectFn=o_,this._overrideRedirectResult=r_}async _openPopup(e,t,r,i){var a;nt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Cc(e,t,r,ws(),i);return P_(e,o,so())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Cc(e,t,r,ws(),i);return Fy(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(nt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await b_(e),r=new c_(e);return t.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zi,{type:Zi},i=>{var a;const o=(a=i==null?void 0:i[0])==null?void 0:a[Zi];o!==void 0&&t(!!o),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=f_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fu()||Du()||no()}}const L_=M_;var Pc="@firebase/auth",kc="1.13.0";/**
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
 */class j_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function F_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function U_(n){He(new Me("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:h}=r.options;V(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uu(n)},f=new _y(r,i,o,d);return by(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),He(new Me("auth-internal",e=>{const t=ro(e.getProvider("auth").getImmediate());return(r=>new j_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(Pc,kc,F_(n)),Pe(Pc,kc,"esm2020")}/**
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
 */const B_=5*60,W_=nl("authIdTokenMaxAge")||B_;let Nc=null;const z_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>W_)return;const i=t==null?void 0:t.token;Nc!==i&&(Nc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $_(n=Ss()){const e=Wt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ty(n,{popupRedirectResolver:L_,persistence:[Ky,My,Ku]}),r=nl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=z_(o.toString());Dy(t,a,()=>a(t.currentUser)),Ny(t,h=>a(h))}}const i=el("auth");return i&&Ay(t,`http://${i}`),t}function H_(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}vy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=ze("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",H_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});U_("Browser");const th="@firebase/installations",ao="0.6.21";/**
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
 */const nh=1e4,rh=`w:${ao}`,ih="FIS_v2",G_="https://firebaseinstallations.googleapis.com/v1",q_=60*60*1e3,K_="installations",Q_="Installations";/**
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
 */const J_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ft=new Bt(K_,Q_,J_);function sh(n){return n instanceof Le&&n.code.includes("request-failed")}/**
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
 */function oh({projectId:n}){return`${G_}/projects/${n}/installations`}function ah(n){return{token:n.token,requestStatus:2,expiresIn:X_(n.expiresIn),creationTime:Date.now()}}async function ch(n,e){const r=(await e.json()).error;return Ft.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function lh({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Y_(n,{refreshToken:e}){const t=lh(n);return t.append("Authorization",Z_(e)),t}async function uh(n){const e=await n();return e.status>=500&&e.status<600?n():e}function X_(n){return Number(n.replace("s","000"))}function Z_(n){return`${ih} ${n}`}/**
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
 */async function e0({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=oh(n),i=lh(n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:t,authVersion:ih,appId:n.appId,sdkVersion:rh},h={method:"POST",headers:i,body:JSON.stringify(a)},d=await uh(()=>fetch(r,h));if(d.ok){const f=await d.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:ah(f.authToken)}}else throw await ch("Create Installation",d)}/**
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
 */function hh(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function t0(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const n0=/^[cdef][\w-]{21}$/,Ts="";function r0(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=i0(n);return n0.test(t)?t:Ts}catch{return Ts}}function i0(n){return t0(n).substr(0,22)}/**
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
 */function gi(n){return`${n.appName}!${n.appId}`}/**
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
 */const dh=new Map;function fh(n,e){const t=gi(n);ph(t,e),s0(t,e)}function ph(n,e){const t=dh.get(n);if(t)for(const r of t)r(e)}function s0(n,e){const t=o0();t&&t.postMessage({key:n,fid:e}),a0()}let Pt=null;function o0(){return!Pt&&"BroadcastChannel"in self&&(Pt=new BroadcastChannel("[Firebase] FID Change"),Pt.onmessage=n=>{ph(n.data.key,n.data.fid)}),Pt}function a0(){dh.size===0&&Pt&&(Pt.close(),Pt=null)}/**
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
 */const c0="firebase-installations-database",l0=1,Ut="firebase-installations-store";let es=null;function co(){return es||(es=ll(c0,l0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ut)}}})),es}async function ti(n,e){const t=gi(n),i=(await co()).transaction(Ut,"readwrite"),o=i.objectStore(Ut),a=await o.get(t);return await o.put(e,t),await i.done,(!a||a.fid!==e.fid)&&fh(n,e.fid),e}async function mh(n){const e=gi(n),r=(await co()).transaction(Ut,"readwrite");await r.objectStore(Ut).delete(e),await r.done}async function yi(n,e){const t=gi(n),i=(await co()).transaction(Ut,"readwrite"),o=i.objectStore(Ut),a=await o.get(t),h=e(a);return h===void 0?await o.delete(t):await o.put(h,t),await i.done,h&&(!a||a.fid!==h.fid)&&fh(n,h.fid),h}/**
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
 */async function lo(n){let e;const t=await yi(n.appConfig,r=>{const i=u0(r),o=h0(n,i);return e=o.registrationPromise,o.installationEntry});return t.fid===Ts?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function u0(n){const e=n||{fid:r0(),registrationStatus:0};return gh(e)}function h0(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ft.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=d0(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:f0(n)}:{installationEntry:e}}async function d0(n,e){try{const t=await e0(n,e);return ti(n.appConfig,t)}catch(t){throw sh(t)&&t.customData.serverCode===409?await mh(n.appConfig):await ti(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function f0(n){let e=await Dc(n.appConfig);for(;e.registrationStatus===1;)await hh(100),e=await Dc(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await lo(n);return r||t}return e}function Dc(n){return yi(n,e=>{if(!e)throw Ft.create("installation-not-found");return gh(e)})}function gh(n){return p0(n)?{fid:n.fid,registrationStatus:0}:n}function p0(n){return n.registrationStatus===1&&n.registrationTime+nh<Date.now()}/**
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
 */async function m0({appConfig:n,heartbeatServiceProvider:e},t){const r=g0(n,t),i=Y_(n,t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:rh,appId:n.appId}},h={method:"POST",headers:i,body:JSON.stringify(a)},d=await uh(()=>fetch(r,h));if(d.ok){const f=await d.json();return ah(f)}else throw await ch("Generate Auth Token",d)}function g0(n,{fid:e}){return`${oh(n)}/${e}/authTokens:generate`}/**
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
 */async function uo(n,e=!1){let t;const r=await yi(n.appConfig,o=>{if(!yh(o))throw Ft.create("not-registered");const a=o.authToken;if(!e&&v0(a))return o;if(a.requestStatus===1)return t=y0(n,e),o;{if(!navigator.onLine)throw Ft.create("app-offline");const h=I0(o);return t=_0(n,h),h}});return t?await t:r.authToken}async function y0(n,e){let t=await Oc(n.appConfig);for(;t.authToken.requestStatus===1;)await hh(100),t=await Oc(n.appConfig);const r=t.authToken;return r.requestStatus===0?uo(n,e):r}function Oc(n){return yi(n,e=>{if(!yh(e))throw Ft.create("not-registered");const t=e.authToken;return E0(t)?{...e,authToken:{requestStatus:0}}:e})}async function _0(n,e){try{const t=await m0(n,e),r={...e,authToken:t};return await ti(n.appConfig,r),t}catch(t){if(sh(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await mh(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await ti(n.appConfig,r)}throw t}}function yh(n){return n!==void 0&&n.registrationStatus===2}function v0(n){return n.requestStatus===2&&!w0(n)}function w0(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+q_}function I0(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function E0(n){return n.requestStatus===1&&n.requestTime+nh<Date.now()}/**
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
 */async function T0(n){const e=n,{installationEntry:t,registrationPromise:r}=await lo(e);return r?r.catch(console.error):uo(e).catch(console.error),t.fid}/**
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
 */async function b0(n,e=!1){const t=n;return await A0(t),(await uo(t,e)).token}async function A0(n){const{registrationPromise:e}=await lo(n);e&&await e}/**
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
 */function S0(n){if(!n||!n.options)throw ts("App Configuration");if(!n.name)throw ts("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ts(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ts(n){return Ft.create("missing-app-config-values",{valueName:n})}/**
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
 */const _h="installations",x0="installations-internal",R0=n=>{const e=n.getProvider("app").getImmediate(),t=S0(e),r=Wt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},C0=n=>{const e=n.getProvider("app").getImmediate(),t=Wt(e,_h).getImmediate();return{getId:()=>T0(t),getToken:i=>b0(t,i)}};function P0(){He(new Me(_h,R0,"PUBLIC")),He(new Me(x0,C0,"PRIVATE"))}P0();Pe(th,ao);Pe(th,ao,"esm2020");/**
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
 */const ni="analytics",k0="firebase_id",N0="origin",D0=60*1e3,O0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ho="https://www.googletagmanager.com/gtag/js";/**
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
 */const Te=new si("@firebase/analytics");/**
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
 */const V0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Re=new Bt("analytics","Analytics",V0);/**
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
 */function M0(n){if(!n.startsWith(ho)){const e=Re.create("invalid-gtag-resource",{gtagURL:n});return Te.warn(e.message),""}return n}function vh(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function L0(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function j0(n,e){const t=L0("firebase-js-sdk-policy",{createScriptURL:M0}),r=document.createElement("script"),i=`${ho}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function F0(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function U0(n,e,t,r,i,o){const a=r[i];try{if(a)await e[a];else{const d=(await vh(t)).find(f=>f.measurementId===i);d&&await e[d.appId]}}catch(h){Te.error(h)}n("config",i,o)}async function B0(n,e,t,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const h=await vh(t);for(const d of a){const f=h.find(I=>I.measurementId===d),_=f&&e[f.appId];if(_)o.push(_);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",r,i||{})}catch(o){Te.error(o)}}function W0(n,e,t,r){async function i(o,...a){try{if(o==="event"){const[h,d]=a;await B0(n,e,t,h,d)}else if(o==="config"){const[h,d]=a;await U0(n,e,t,r,h,d)}else if(o==="consent"){const[h,d]=a;n("consent",h,d)}else if(o==="get"){const[h,d,f]=a;n("get",h,d,f)}else if(o==="set"){const[h]=a;n("set",h)}else n(o,...a)}catch(h){Te.error(h)}}return i}function z0(n,e,t,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=W0(o,n,e,t),{gtagCore:o,wrappedGtag:window[i]}}function $0(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ho)&&t.src.includes(n))return t;return null}/**
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
 */const H0=30,G0=1e3;class q0{constructor(e={},t=G0){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wh=new q0;function K0(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Q0(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:K0(t)},i=O0.replace("{app-id}",e),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let h="";try{const d=await o.json();(a=d.error)!=null&&a.message&&(h=d.error.message)}catch{}throw Re.create("config-fetch-failed",{httpStatus:o.status,responseMessage:h})}return o.json()}async function J0(n,e=wh,t){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw Re.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Re.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new Z0;return setTimeout(async()=>{h.abort()},D0),Ih({appId:r,apiKey:i,measurementId:o},a,h,e)}async function Ih(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=wh){var h;const{appId:o,measurementId:a}=n;try{await Y0(r,e)}catch(d){if(a)return Te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:a};throw d}try{const d=await Q0(n);return i.deleteThrottleMetadata(o),d}catch(d){const f=d;if(!X0(f)){if(i.deleteThrottleMetadata(o),a)return Te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:o,measurementId:a};throw d}const _=Number((h=f==null?void 0:f.customData)==null?void 0:h.httpStatus)===503?va(t,i.intervalMillis,H0):va(t,i.intervalMillis),I={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return i.setThrottleMetadata(o,I),Te.debug(`Calling attemptFetch again in ${_} millis`),Ih(n,I,r,i)}}function Y0(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(o),r(Re.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function X0(n){if(!(n instanceof Le)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Z0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ev(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const o=await e,a={...r,send_to:o};n("event",t,a)}}async function tv(n,e,t,r){if(r&&r.global){const i={};for(const o of Object.keys(t))i[`user_properties.${o}`]=t[o];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}/**
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
 */async function nv(){if(il())try{await sl()}catch(n){return Te.warn(Re.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Te.warn(Re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rv(n,e,t,r,i,o,a){const h=J0(n);h.then(S=>{t[S.measurementId]=S.appId,n.options.measurementId&&S.measurementId!==n.options.measurementId&&Te.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>Te.error(S)),e.push(h);const d=nv().then(S=>{if(S)return r.getId()}),[f,_]=await Promise.all([h,d]);$0(o)||j0(o,f.measurementId),i("js",new Date);const I=(a==null?void 0:a.config)??{};return I[N0]="firebase",I.update=!0,_!=null&&(I[k0]=_),i("config",f.measurementId,I),f.measurementId}/**
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
 */class iv{constructor(e){this.app=e}_delete(){return delete rn[this.app.options.appId],Promise.resolve()}}let rn={},Vc=[];const Mc={};let ns="dataLayer",sv="gtag",Lc,fo,jc=!1;function ov(){const n=[];if(rl()&&n.push("This is a browser extension environment."),kd()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Re.create("invalid-analytics-context",{errorInfo:e});Te.warn(t.message)}}function av(n,e,t){ov();const r=n.options.appId;if(!r)throw Re.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Re.create("no-api-key");if(rn[r]!=null)throw Re.create("already-exists",{id:r});if(!jc){F0(ns);const{wrappedGtag:o,gtagCore:a}=z0(rn,Vc,Mc,ns,sv);fo=o,Lc=a,jc=!0}return rn[r]=rv(n,Vc,Mc,e,Lc,ns,t),new iv(n)}function cv(n=Ss()){n=Ae(n);const e=Wt(n,ni);return e.isInitialized()?e.getImmediate():lv(n)}function lv(n,e={}){const t=Wt(n,ni);if(t.isInitialized()){const i=t.getImmediate();if(yt(e,t.getOptions()))return i;throw Re.create("already-initialized")}return t.initialize({options:e})}function uv(n,e,t){n=Ae(n),tv(fo,rn[n.app.options.appId],e,t).catch(r=>Te.error(r))}function hv(n,e,t,r){n=Ae(n),ev(fo,rn[n.app.options.appId],e,t,r).catch(i=>Te.error(i))}const Fc="@firebase/analytics",Uc="0.10.21";function dv(){He(new Me(ni,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return av(r,i,t)},"PUBLIC")),He(new Me("analytics-internal",n,"PRIVATE")),Pe(Fc,Uc),Pe(Fc,Uc,"esm2020");function n(e){try{const t=e.getProvider(ni).getImmediate();return{logEvent:(r,i,o)=>hv(t,r,i,o),setUserProperties:(r,i)=>uv(t,r,i)}}catch(t){throw Re.create("interop-component-reg-failed",{reason:t})}}}dv();const Bc={apiKey:"AIzaSyCoFJWEc8z1Z-kddKR8T-QggAFCdm4Y7wI",authDomain:"daywise-ays8t.firebaseapp.com",projectId:"daywise-ays8t",storageBucket:"daywise-ays8t.firebasestorage.app",messagingSenderId:"690549644365",appId:"1:690549644365:web:d895858fbde5497b1c5004",measurementId:void 0};let Dn,Wc,Qn,fv;try{Bc.apiKey||console.warn("Firebase Hub: Missing VITE_FIREBASE_API_KEY. Initializing in offline simulation mode."),Dn=ul(Bc),Wc=$_(Dn),Qn=kg(Dn),typeof window<"u"&&(fv=cv(Dn))}catch{console.error("Firebase Hub: Critical Initialization Error. Forcing local fallback."),Dn={},Wc={},Qn={}}const pv=({isOpen:n,onClose:e,initialPhone:t="",initialBusinessName:r=""})=>{const[i,o]=z.useState(1),[a,h]=z.useState(r),[d,f]=z.useState("Custom Web & SaaS Application"),[_,I]=z.useState("#00F0FF"),[S,P]=z.useState(t),[k,M]=z.useState("Professional WaaS (GH₵ 999/mo)"),[O,$]=z.useState("High-speed platform with MoMo checkout and automated WhatsApp lead engine"),[B,Z]=z.useState(0),[Ce,ie]=z.useState("Analyzing architectural requirements..."),[le,w]=z.useState(!1),m=[{name:"Cyan Glow",hex:"#00F0FF"},{name:"Luxe Gold",hex:"#E5C07B"},{name:"Emerald Green",hex:"#10B981"},{name:"Royal Blue",hex:"#3B82F6"},{name:"Velvet Rose",hex:"#F43F5E"}];if(z.useEffect(()=>{if(i===3&&!le){Z(0),w(!1);const G=setInterval(()=>{Z(Et=>{if(Et>=100)return clearInterval(G),w(!0),100;const Qe=Et+5;return Qe<30?ie("Synthesizing technical scope & deliverable roadmap..."):Qe<65?ie(`Mapping ${k.split("(")[0].trim()} SLA stack...`):Qe<90?ie("Connecting direct WhatsApp consultation gateway..."):ie("Proposal Blueprint Generated Successfully"),Qe})},100);return()=>clearInterval(G)}},[i,le,k]),!n)return null;const y=G=>{if(G.preventDefault(),!a.trim()){alert("Please enter your business or project name.");return}o(2)},E=async()=>{try{Qn&&(await Tu(fu(Qn,"onboarding_submissions"),{businessName:a.trim(),serviceArea:d,primaryColor:_,whatsappNumber:S.trim(),selectedPlan:k,projectRequirement:O.trim(),status:"pending_consultation",createdAt:Iu(),url:typeof window<"u"?window.location.href:"",userAgent:typeof navigator<"u"?navigator.userAgent:""}),console.log("✅ Lead project brief successfully saved to Firestore."))}catch(G){console.warn("Firestore submission notice (demo mode):",G)}},v=G=>{if(G.preventDefault(),!S.trim()){alert("Please enter your WhatsApp contact number.");return}E(),o(3)},b=encodeURIComponent(a.trim()),g=encodeURIComponent(d.trim()),pe=encodeURIComponent(k.trim()),Ke=encodeURIComponent(O.trim()),_i=`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20start%20a%20project%20for%20"${b}".%0A%0A•%20Service%3A%20${g}%0A•%20Preferred%20Tier%3A%20${pe}%0A•%20Requirement%3A%20${Ke}%0A•%20My%20Phone%3A%20${encodeURIComponent(S.trim())}`;return u.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(9, 11, 16, 0.88)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",boxSizing:"border-box"},children:u.jsxs("div",{style:{background:"rgba(13, 18, 29, 0.95)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"24px",maxWidth:"640px",width:"100%",maxHeight:"90vh",overflowY:"auto",padding:"clamp(1.6rem, 4vw, 2.5rem) clamp(1.2rem, 3vw, 2rem)",position:"relative",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.08)",boxSizing:"border-box"},children:[u.jsx("button",{onClick:e,"aria-label":"Close dialog",style:{position:"absolute",top:"1.2rem",right:"1.2rem",background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"#FFFFFF",fontSize:"1rem",width:"34px",height:"34px",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease",zIndex:10},children:"✕"}),u.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem",paddingRight:"2rem",paddingLeft:"2rem"},children:[u.jsxs("span",{style:{background:"rgba(0, 240, 255, 0.08)",border:"1px solid rgba(0, 240, 255, 0.25)",color:"#00F0FF",padding:"0.35rem 1rem",borderRadius:"50px",fontSize:"0.72rem",fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase",display:"inline-block",lineHeight:1.4},children:["PROJECT BRIEF • STEP ",i," OF 3"]}),u.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"center",marginTop:"1.2rem"},children:[u.jsx("div",{style:{height:"5px",width:"30%",borderRadius:"4px",background:i>=1?"#00F0FF":"rgba(255, 255, 255, 0.1)",transition:"all 0.3s ease"}}),u.jsx("div",{style:{height:"5px",width:"30%",borderRadius:"4px",background:i>=2?"#00F0FF":"rgba(255, 255, 255, 0.1)",transition:"all 0.3s ease"}}),u.jsx("div",{style:{height:"5px",width:"30%",borderRadius:"4px",background:i>=3?"#00F0FF":"rgba(255, 255, 255, 0.1)",transition:"all 0.3s ease"}})]})]}),i===1&&u.jsxs("form",{onSubmit:y,children:[u.jsxs("h2",{className:"heading-luminance",style:{fontSize:"1.6rem",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em",textAlign:"center"},children:["Tell Us About Your ",u.jsx("span",{className:"cyan-luminance",children:"Project"})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",marginBottom:"1.8rem",textAlign:"center"},children:"Fast-track your development roadmap with high-performance Ghanaian engineering."}),u.jsxs("div",{style:{marginBottom:"1.4rem"},children:[u.jsxs("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:["Business or Organization Name ",u.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),u.jsx("input",{type:"text",placeholder:"e.g. Sedemson Group, Ama's Luxury, Apex Logistics...",value:a,onChange:G=>h(G.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"},required:!0})]}),u.jsxs("div",{style:{marginBottom:"1.4rem"},children:[u.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:"Primary Specialization Needed"}),u.jsxs("select",{value:d,onChange:G=>f(G.target.value),style:{width:"100%",background:"#10151C",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"},children:[u.jsx("option",{value:"Custom Web & SaaS Application",children:"Custom Web & SaaS Application"}),u.jsx("option",{value:"iOS & Android Mobile App Development",children:"iOS & Android Mobile App Development"}),u.jsx("option",{value:"Brand Identity & UI/UX Design System",children:"Brand Identity & UI/UX Design System"}),u.jsx("option",{value:"Cloud Infrastructure & DevOps Automation",children:"Cloud Infrastructure & DevOps Automation"})]})]}),u.jsxs("div",{style:{marginBottom:"2rem"},children:[u.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.8rem"},children:"Brand Accent Palette"}),u.jsx("div",{style:{display:"flex",gap:"0.8rem",flexWrap:"wrap"},children:m.map(G=>u.jsx("button",{type:"button",onClick:()=>I(G.hex),style:{background:G.hex,border:_===G.hex?"3px solid #ffffff":"1px solid transparent",width:"40px",height:"40px",borderRadius:"50%",cursor:"pointer",boxShadow:_===G.hex?`0 0 15px ${G.hex}`:"none",transition:"transform 0.2s"},title:G.name},G.hex))})]}),u.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"0.85rem",fontSize:"0.95rem"},children:[u.jsx("span",{children:"Continue to Project Scope"}),u.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),i===2&&u.jsxs("form",{onSubmit:v,children:[u.jsxs("h2",{className:"heading-luminance",style:{fontSize:"1.6rem",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em",textAlign:"center"},children:["Project Scope & ",u.jsx("span",{className:"cyan-luminance",children:"Routing"})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",marginBottom:"1.8rem",textAlign:"center"},children:"Define your preferred service tier and primary feature requirements."}),u.jsxs("div",{style:{marginBottom:"1.4rem"},children:[u.jsxs("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:["WhatsApp Direct Contact Number ",u.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),u.jsx("input",{type:"text",placeholder:"e.g. 024 123 4567 or 055 000 1122",value:S,onChange:G=>P(G.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"},required:!0})]}),u.jsxs("div",{style:{marginBottom:"1.4rem"},children:[u.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:"Preferred Subscription / Service Tier"}),u.jsxs("select",{value:k,onChange:G=>M(G.target.value),style:{width:"100%",background:"#10151C",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"},children:[u.jsx("option",{value:"Lite Tier (GH₵ 49/mo)",children:"Lite Tier (GH₵ 49/mo - Micro Catalog & Lead Link)"}),u.jsx("option",{value:"Starter Tier (GH₵ 499/mo)",children:"Starter Tier (GH₵ 499/mo - High-Converting WaaS)"}),u.jsx("option",{value:"Professional Tier (GH₵ 999/mo)",children:"Professional Tier (GH₵ 999/mo - Corporate Multi-Page)"}),u.jsx("option",{value:"Enterprise Custom (GH₵ 2,499/mo)",children:"Enterprise Custom (GH₵ 2,499/mo - Custom SaaS & APIs)"})]})]}),u.jsxs("div",{style:{marginBottom:"2rem"},children:[u.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:"Key Technical Objective / Deliverable"}),u.jsx("input",{type:"text",value:O,onChange:G=>$(G.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"}})]}),u.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[u.jsx("button",{type:"button",onClick:()=>o(1),className:"btn-secondary",style:{padding:"0.85rem 1.4rem",fontSize:"0.92rem"},children:u.jsx("span",{children:"← Back"})}),u.jsxs("button",{type:"submit",className:"btn-primary",style:{flexGrow:1,padding:"0.85rem 1.6rem",fontSize:"0.95rem"},children:[u.jsx("span",{children:"Generate Fast-Track Proposal"}),u.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]}),i===3&&u.jsx("div",{children:le?u.jsxs("div",{children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:"1.5rem"},children:[u.jsx("span",{style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid #10B981",color:"#10B981",padding:"0.35rem 1.2rem",borderRadius:"20px",fontWeight:750,fontSize:"0.75rem",letterSpacing:"0.05em"},children:"PROPOSAL BLUEPRINT READY"}),u.jsx("h2",{className:"heading-luminance",style:{fontSize:"1.6rem",fontWeight:850,marginTop:"0.8rem"},children:a}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem"},children:"48-Hour SLA managed launch architecture prepared for your review."})]}),u.jsxs("div",{style:{border:`1px solid ${_}55`,borderRadius:"16px",background:"rgba(255, 255, 255, 0.03)",padding:"1.4rem",maxWidth:"480px",margin:"0 auto 1.8rem",boxShadow:`0 10px 30px ${_}22`,textAlign:"left"},children:[u.jsxs("div",{style:{borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"0.8rem",marginBottom:"0.8rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"1.05rem",fontWeight:850,color:"#FFFFFF"},children:a}),u.jsx("span",{style:{fontSize:"0.76rem",color:_,fontWeight:700},children:d})]}),u.jsx("span",{style:{background:"rgba(255,255,255,0.08)",padding:"0.2rem 0.6rem",borderRadius:"8px",fontSize:"0.75rem",color:"#E5C07B",fontWeight:750},children:k.split("(")[0].trim()})]}),u.jsxs("div",{style:{fontSize:"0.85rem",color:"#94A3B8",lineHeight:1.6},children:[u.jsxs("div",{style:{marginBottom:"0.4rem"},children:[u.jsx("strong",{style:{color:"#FFFFFF"},children:"Primary Deliverable:"})," ",O]}),u.jsxs("div",{children:[u.jsx("strong",{style:{color:"#FFFFFF"},children:"Contact WhatsApp:"})," ",S]})]})]}),u.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[u.jsxs("a",{href:_i,target:"_blank",rel:"noopener noreferrer",className:"btn-primary",style:{textDecoration:"none",padding:"0.85rem 1.8rem",fontSize:"0.92rem"},children:[u.jsx("span",{children:"Submit & Open WhatsApp Brief"}),u.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),u.jsx("button",{onClick:()=>o(1),className:"btn-secondary",style:{padding:"0.85rem 1.4rem",fontSize:"0.92rem"},children:"Modify Details"})]})]}):u.jsxs("div",{style:{textAlign:"center",padding:"2rem 1rem"},children:[u.jsx("div",{style:{width:"44px",height:"44px",margin:"0 auto 1.5rem",borderRadius:"50%",border:"3px solid rgba(0,240,255,0.2)",borderTopColor:"#00F0FF",animation:"spin 1s linear infinite"}}),u.jsxs("h2",{className:"heading-luminance",style:{fontSize:"1.6rem",fontWeight:850,marginBottom:"0.6rem"},children:["Synthesizing Blueprint for ",u.jsx("span",{className:"cyan-luminance",children:a})]}),u.jsx("p",{style:{color:"#00F0FF",fontSize:"0.95rem",fontWeight:700,marginBottom:"1.5rem"},children:Ce}),u.jsx("div",{style:{background:"rgba(255,255,255,0.08)",height:"8px",borderRadius:"10px",overflow:"hidden",maxWidth:"420px",margin:"0 auto 1rem"},children:u.jsx("div",{style:{width:`${B}%`,height:"100%",background:"linear-gradient(90deg, #00F0FF, #E5C07B)",transition:"width 0.2s ease"}})}),u.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.82rem"},children:[B,"% Prepared"]})]})})]})})},zc=()=>{const[n,e]=z.useState("all"),[t,r]=z.useState(""),i=[{id:"sedemson",title:"Sedemson Stone",category:"b2b",categoryLabel:"B2B & Architectural Finishing",tagline:"Premium Natural Stone Cladding & Architectural Finishes across Ghana.",image:"/sedemson_stone_hero.png",tags:["WaaS Architecture","Catalog Engine","Direct WhatsApp RFQs"],metric:"+340% Inbound WhatsApp RFQs",status:"Live Production"},{id:"emewear",title:"Emewear Luxury",category:"ecommerce",categoryLabel:"Fashion & E-Commerce",tagline:"Ghana-Made Luxury Ankara, Plus-Size Heritage Fashion & Global Delivery.",image:"/emewear/emewear_hero.jpg",tags:["Fashion WaaS","MoMo Automated Checkout","Automated Dispatch"],metric:"Zero-Friction MoMo Checkout",status:"Live Production",link:"/emewear/index.html"},{id:"ansah-delali",title:"Ansah Delali Foundation",category:"nonprofit",categoryLabel:"Non-Profit & Social Impact",tagline:"Empowering Ghanaian tertiary students and underserved youth through mentorship, education & digital skills.",image:"/ansah-delali/cohort-group.jpg",tags:["Education WaaS","SkillUp 1.0 Outreach","Student Mentorship Network"],metric:"SkillUp 1.0 Community Impact",status:"Live Production",link:"/ansah-delali/index.html"}],o=qc.useMemo(()=>{const a=t.replace(/[^\w\s-]/gi,"").toLowerCase().trim();return i.filter(h=>{const d=n==="all"||h.category===n,f=!a||h.title.toLowerCase().includes(a)||h.tagline.toLowerCase().includes(a)||h.categoryLabel.toLowerCase().includes(a)||h.tags.some(_=>_.toLowerCase().includes(a));return d&&f})},[t,n,i]);return u.jsxs("section",{className:"portfolio-section",id:"work",style:{padding:"3.5rem 1rem",maxWidth:"1200px",margin:"0 auto"},children:[u.jsxs("div",{className:"portfolio-header fade-in-up",style:{textAlign:"center",marginBottom:"3rem"},children:[u.jsxs("span",{className:"badge-pill",style:{marginBottom:"1rem"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#00F0FF"}}),"PRODUCTION CASE STUDIES"]}),u.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.8rem, 5vw, 2.5rem)",fontWeight:850,marginTop:"0.8rem",letterSpacing:"-0.03em"},children:["Featured ",u.jsx("span",{className:"cyan-luminance",children:"Client Work"})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",marginTop:"0.6rem",letterSpacing:"-0.01em",maxWidth:"640px",margin:"0.6rem auto 0",lineHeight:1.6},children:"Real-world platforms and Website-as-a-Service solutions engineered for revenue growth and operational excellence."}),u.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.8rem",flexWrap:"wrap",marginTop:"2.2rem"},children:[u.jsx("button",{onClick:()=>e("all"),className:n==="all"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"All Case Studies"}),u.jsx("button",{onClick:()=>e("b2b"),className:n==="b2b"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"B2B & Architectural"}),u.jsx("button",{onClick:()=>e("ecommerce"),className:n==="ecommerce"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"Fashion & Retail"}),u.jsx("button",{onClick:()=>e("nonprofit"),className:n==="nonprofit"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"Social Impact / NGO"}),u.jsxs("div",{style:{position:"relative",width:"min(100%, 240px)"},children:[u.jsx("input",{type:"text",placeholder:"Search case studies...",value:t,onChange:a=>r(a.target.value),style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.12)",color:"#FFFFFF",padding:"0.48rem 1.1rem 0.48rem 2.2rem",borderRadius:"30px",fontSize:"0.85rem",outline:"none",width:"100%",transition:"border-color 0.2s ease"}}),u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#94A3B8",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",left:"0.8rem",top:"50%",transform:"translateY(-50%)"},children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})]})]})]}),u.jsx("div",{className:"portfolio-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 340px), 1fr))",gap:"2rem",width:"100%"},children:o.map(a=>u.jsxs("div",{className:"portfolio-card neon-border fade-in-up",style:{borderRadius:"20px",overflow:"hidden",background:"rgba(13, 18, 29, 0.75)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)"},children:[u.jsxs("div",{children:[u.jsxs("div",{className:"card-image-placeholder",style:{padding:0,height:"220px",overflow:"hidden",position:"relative"},children:[u.jsx("img",{src:a.image,alt:a.title,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",transition:"transform 0.5s ease"}}),u.jsx("div",{style:{position:"absolute",top:"1rem",right:"1rem"},children:u.jsx("span",{className:"badge-pill cyan",style:{fontSize:"0.72rem",padding:"0.25rem 0.65rem",backdropFilter:"blur(8px)"},children:a.categoryLabel})})]}),u.jsxs("div",{className:"card-content",style:{padding:"1.6rem"},children:[u.jsx("h3",{style:{fontSize:"1.35rem",color:"#FFFFFF",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em"},children:a.title}),u.jsx("p",{className:"tagline",style:{color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"1.2rem",lineHeight:1.5,letterSpacing:"-0.01em"},children:a.tagline}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"rgba(0, 240, 255, 0.06)",border:"1px solid rgba(0, 240, 255, 0.15)",padding:"0.5rem 0.85rem",borderRadius:"10px",marginBottom:"1.3rem"},children:[u.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#00F0FF",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),u.jsx("polyline",{points:"17 6 23 6 23 12"})]}),u.jsx("span",{style:{fontSize:"0.82rem",fontWeight:750,color:"#38BDF8"},children:a.metric})]}),u.jsx("div",{className:"tags",style:{display:"flex",gap:"0.45rem",marginBottom:"1.4rem",flexWrap:"wrap"},children:a.tags.map((h,d)=>u.jsx("span",{className:"tag",style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.08)",color:"#CBD5E1",padding:"0.25rem 0.6rem",borderRadius:"6px",fontSize:"0.76rem",fontWeight:600},children:h},d))})]})]}),u.jsxs("div",{style:{padding:"0 1.6rem 1.6rem",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid rgba(255, 255, 255, 0.05)",paddingTop:"1rem"},children:[u.jsxs("span",{className:"view-link",style:{color:"var(--text-muted)",cursor:"default",display:"inline-flex",alignItems:"center",gap:"0.4rem",fontWeight:700,fontSize:"0.82rem"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#4ADE80"}}),a.status]}),u.jsxs("a",{href:a.link||`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20learn%20more%20about%20the%20${encodeURIComponent(a.title)}%20case%20study.`,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.35rem",color:"#F8FAFC",fontSize:"0.82rem",fontWeight:700,textDecoration:"none",background:"rgba(255, 255, 255, 0.05)",padding:"0.35rem 0.75rem",borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.1)",transition:"all 0.2s ease"},children:[u.jsx("span",{children:"Explore"}),u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]},a.id))})]})},Eh=z.createContext(void 0),mv=({children:n})=>{const[e,t]=z.useState(()=>localStorage.getItem("kdigital-currency")||"GHS"),[r,i]=z.useState(.07),[o,a]=z.useState(!0),h=f=>{t(f),localStorage.setItem("kdigital-currency",f)};z.useEffect(()=>{(async()=>{try{a(!0);const I=await(await fetch("https://open.er-api.com/v6/latest/GHS")).json();I.rates&&I.rates.USD&&i(I.rates.USD)}catch(_){console.error("Failed to fetch exchange rate:",_)}finally{a(!1)}})()},[]);const d=f=>e==="GHS"?`GHS ${f.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}`:`$${(f*r).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}`;return u.jsx(Eh.Provider,{value:{currency:e,setCurrency:h,exchangeRate:r,formatPrice:d,isLoading:o},children:n})},gv=()=>{const n=z.useContext(Eh);if(n===void 0)throw new Error("useCurrency must be used within a CurrencyProvider");return n},$c=()=>{const{currency:n,setCurrency:e,formatPrice:t}=gv(),[r,i]=z.useState(2),o=[{id:"lite",name:"Lite Tier",badge:"SME STARTER",priceGhs:49,desc:"Ideal for local merchants, Susu collectives, and boutique artisans.",features:["Curated Digital Product Catalog","Direct Mobile Money Payment Routing","Instant WhatsApp Lead Notifications","Cloudflare SSL & Managed Fast DNS"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20SME%20Lite%20Plan."},{id:"starter",name:"Starter Tier",badge:"GROWTH",priceGhs:499,desc:"Perfect for small businesses needing a high-converting digital storefront.",features:["Custom Single Page Web Architecture","Automated WhatsApp Inquiry Routing","Ultra-Fast Mobile Optimization","Managed Weekly Backups & Security"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Starter%20Plan."},{id:"professional",name:"Professional Tier",badge:"MOST POPULAR",priceGhs:999,desc:"For growing brands needing a complete multi-page corporate ecosystem.",popular:!0,features:["Up to 5 Tailored Application Pages","Full Technical SEO & Schema Microdata","Automated Lead Intake CRM Integration","24/7 Priority Engineering SLA"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Professional%20Plan."},{id:"enterprise",name:"Enterprise Tier",badge:"CUSTOM APPLICATION",priceGhs:2499,desc:"Advanced web applications, custom databases, and API engineering.",features:["Full Custom Architecture & Tech Stack","Backend & Payment Gateway Integration","Advanced Analytics & Real-Time Dashboard","Dedicated Senior Engineer Account Lead"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'd%20like%20to%20discuss%20a%20Custom%20Enterprise%20Plan."}];return u.jsxs("section",{className:"pricing-section",id:"pricing",style:{padding:"3.5rem 1rem",maxWidth:"1200px",margin:"0 auto",width:"100%",boxSizing:"border-box",overflowX:"hidden"},children:[u.jsxs("div",{className:"pricing-header fade-in-up",style:{textAlign:"center",marginBottom:"3rem",width:"100%",boxSizing:"border-box"},children:[u.jsxs("span",{className:"badge-pill",style:{marginBottom:"1rem",whiteSpace:"normal",lineHeight:1.4},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#00F0FF",flexShrink:0}}),"MANAGED TIERS & SLA"]}),u.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.8rem, 5vw, 2.5rem)",fontWeight:850,marginTop:"0.8rem",letterSpacing:"-0.03em"},children:["Transparent ",u.jsx("span",{className:"cyan-luminance",children:"WaaS Pricing"})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",marginTop:"0.6rem",letterSpacing:"-0.01em",maxWidth:"640px",margin:"0.6rem auto 0",lineHeight:1.6},children:"Predictable, high-ROI Website as a Service subscription tiers with zero hidden setup fees or surprise maintenance costs."}),u.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.8rem",marginTop:"1.8rem"},children:[u.jsx("span",{style:{color:n==="GHS"?"#00F0FF":"var(--text-muted)",fontWeight:750,fontSize:"0.85rem",letterSpacing:"0.04em"},children:"GHS (₵)"}),u.jsx("button",{onClick:()=>e(n==="GHS"?"USD":"GHS"),"aria-label":`Switch pricing currency from ${n} to ${n==="GHS"?"USD":"GHS"}`,title:`Switch pricing currency from ${n} to ${n==="GHS"?"USD":"GHS"}`,style:{background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.15)",width:"54px",height:"28px",borderRadius:"20px",position:"relative",cursor:"pointer",display:"flex",alignItems:"center",padding:"2px",transition:"all 0.2s ease"},children:u.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"#00F0FF",transform:n==="USD"?"translateX(26px)":"translateX(0)",transition:"transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",boxShadow:"0 2px 6px rgba(0, 240, 255, 0.4)"}})}),u.jsx("span",{style:{color:n==="USD"?"#00F0FF":"var(--text-muted)",fontWeight:750,fontSize:"0.85rem",letterSpacing:"0.04em"},children:"USD ($)"})]})]}),u.jsx("div",{className:"pricing-cards",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 250px), 1fr))",gap:"1.5rem",maxWidth:"1200px",margin:"0 auto",width:"100%",boxSizing:"border-box"},children:o.map((a,h)=>{const d=h===r;return u.jsxs("div",{onClick:()=>i(h),className:"price-card fade-in-up",style:{background:d?"rgba(0, 240, 255, 0.04)":"rgba(13, 18, 29, 0.75)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderColor:d?"rgba(0, 240, 255, 0.45)":"rgba(255, 255, 255, 0.08)",borderWidth:"1px",borderStyle:"solid",borderRadius:"20px",padding:"1.8rem 1.4rem",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:d?"0 15px 40px -10px rgba(0, 240, 255, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.12)":"0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)",transition:"all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",cursor:"pointer",position:"relative"},children:[u.jsxs("div",{children:[u.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,padding:"0.2rem 0.6rem",borderRadius:"6px",background:a.popular?"rgba(250, 204, 21, 0.15)":"rgba(56, 189, 248, 0.12)",color:a.popular?"#FACC15":"#38BDF8",letterSpacing:"0.04em"},children:a.badge})}),u.jsx("h3",{style:{fontSize:"1.3rem",color:d?"#00F0FF":"#FFFFFF",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em"},children:a.name}),u.jsxs("div",{className:"price",style:{margin:"0.8rem 0 1rem"},children:[u.jsx("span",{className:"amount",style:{fontSize:"2.1rem",fontWeight:850,color:"#FFFFFF",letterSpacing:"-0.03em"},children:t(a.priceGhs)}),u.jsx("span",{className:"period",style:{fontSize:"0.85rem",color:"var(--text-muted)",marginLeft:"0.2rem"},children:"/month"})]}),u.jsx("p",{className:"card-desc",style:{fontSize:"0.86rem",color:"var(--text-muted)",lineHeight:1.5,marginBottom:"1.4rem"},children:a.desc}),u.jsxs("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.06)",paddingTop:"1.2rem",marginBottom:"1.6rem"},children:[u.jsx("span",{style:{display:"block",fontSize:"0.72rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-muted)",marginBottom:"0.8rem"},children:"Included Features"}),u.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.6rem"},children:a.features.map((f,_)=>u.jsxs("li",{style:{fontSize:"0.83rem",color:"#F1F5F9",display:"flex",alignItems:"flex-start",gap:"0.5rem",lineHeight:1.4},children:[u.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#00F0FF",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"2px"},children:u.jsx("polyline",{points:"20 6 9 17 4 12"})}),u.jsx("span",{children:f})]},_))})]})]}),u.jsxs("a",{href:`https://wa.me/233551993820?text=${a.whatsappMsg}`,target:"_blank",rel:"noopener noreferrer",className:d?"btn-primary":"btn-secondary",style:{textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",gap:"0.4rem",width:"100%",padding:"0.75rem 1rem",fontSize:"0.86rem",borderRadius:"12px"},children:[u.jsx("span",{children:"Select Plan"}),u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]},a.id)})})]})},bs={"web-development":{id:"web-development",slug:"web-development",title:"Custom Web & SaaS Application Engineering",headline:"High-Performance Web Applications & Custom SaaS Platforms",badge:"CORE ENGINEERING",summary:"We build production-grade, high-speed web applications using React, Next.js, TypeScript, and modern cloud architectures. Optimized for sub-second page loads, SEO dominance, and maximum conversion rates.",icon:"",coverGradient:"linear-gradient(135deg, rgba(0, 240, 255, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Single-Page & Multi-Page Web Apps",spec:"Vite / Next.js SSR & static pre-rendering with React 18+"},{title:"API Integration & Cloud Backends",spec:"RESTful / GraphQL APIs, Node.js microservices, and Firebase real-time sync"},{title:"SEO & Microdata Architecture",spec:"Schema.org JSON-LD microdata, OpenGraph cards, and Google Search Console indexing"},{title:"Responsive Ultra-Fast UI",spec:"Mobile-first design system, glassmorphism UI, sub-second LCP performance"}],techStack:["React","TypeScript","Next.js","Node.js","Firebase","Vite","TailwindCSS / Vanilla CSS"],caseStudyHighlight:{client:"Kone Farms & Agritech",project:"IoT Soil Telemetry & Agritech Research Hub",result:"+85.7% annual yield increase & 100% GSC sitemap indexing across 11 subdomains.",link:"https://farms.koneacademy.io"},faq:[{q:"How long does a custom web development project take?",a:"Standard business websites are delivered in 5–10 business days. Complex SaaS platforms take 3–5 weeks."},{q:"Is hosting and domain setup included?",a:"Yes! We configure global CDN deployment (Vercel, Firebase, GitHub Pages), SSL certificates, and custom subdomains."}]},"mobile-apps":{id:"mobile-apps",slug:"mobile-apps",title:"iOS & Android Mobile App Development",headline:"Native Performance Cross-Platform Mobile Applications",badge:"MOBILE SYSTEMS",summary:"From concept to App Store and Google Play publication. We engineer cross-platform mobile apps using React Native and Flutter, delivering native 60fps animations, push notifications, and offline-first database sync.",icon:"",coverGradient:"linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Cross-Platform iOS & Android Apps",spec:"Single codebase compiled to native iOS Swift & Android Kotlin binaries"},{title:"Offline-First Database Sync",spec:"Local SQLite / Realm storage with automatic cloud reconciliation"},{title:"Push Notifications & Deep Linking",spec:"Firebase Cloud Messaging (FCM) & Apple APNs integration"},{title:"Store Deployment & Compliance",spec:"Complete Apple App Store & Google Play Store submission & approval management"}],techStack:["React Native","Flutter","TypeScript","Firebase FCM","App Store Connect","Google Play Console"],caseStudyHighlight:{client:"Kone Kids Academy",project:"Interactive Mobile Learning Companion",result:"4.9★ rating with offline course access for students across West Africa.",link:"https://kids.koneacademy.io"},faq:[{q:"Do you publish our app directly to the App Store & Google Play?",a:"Yes, we handle all store listing assets, compliance requirements, privacy manifests, and final submission."},{q:"Can the app work offline without internet?",a:"Yes, we build local caching mechanisms that allow full app functionality offline."}]},"brand-design":{id:"brand-design",slug:"brand-design",title:"Brand Identity & UI/UX Design Systems",headline:"World-Class Logo Systems, Brand Manuals & Figma UI/UX Prototypes",badge:"DESIGN STUDIO",summary:"We craft iconic corporate brand identity systems that command trust and market authority. Includes logo vectors, color tokens, typography scales, interactive Figma UI/UX wireframes, and complete brand manuals.",icon:"",coverGradient:"linear-gradient(135deg, rgba(234, 179, 8, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Vector Logo Systems",spec:"Scalable SVG, EPS, PNG, and PDF asset packages with dark/light variants"},{title:"Interactive Figma UI/UX Prototypes",spec:"High-fidelity component design systems, wireframes, and interactive user flows"},{title:"Brand Identity Guidelines",spec:"PDF brand book detailing typography, color palettes, spacing rules, and usage"},{title:"Social & Corporate Marketing Assets",spec:"Banners, OpenGraph social previews, business cards, and flyer graphics"}],techStack:["Figma","Adobe Illustrator","Photoshop","SVG Vector Systems","Design Tokens"],caseStudyHighlight:{client:"Kone Consult",project:"Corporate Tech Brand & Design System",result:"Unified multi-subdomain corporate visual language for enterprise client acquisition.",link:"https://consult.koneacademy.io"},faq:[{q:"What files do I receive upon project completion?",a:"You receive all original Figma source files, vector SVG/EPS logos, exportable PNGs, and a PDF Brand Guideline manual."},{q:"Can you redesign our existing company logo?",a:"Absolutely. We specialize in modernizing legacy brand identities for digital-first platforms."}]},"cloud-devops":{id:"cloud-devops",slug:"cloud-devops",title:"Cloud Infrastructure & DevOps Automation",headline:"Scalable Cloud Systems, Automated CI/CD & Security Audits",badge:"CLOUD ARCHITECTURE",summary:"Architecting resilient, self-healing cloud infrastructure on AWS, Firebase, and Cloudflare. We build automated GitHub Actions CI/CD pipelines, SSL/TLS encryption, and real-time uptime monitoring.",icon:"",coverGradient:"linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Automated CI/CD Deployment Pipelines",spec:"GitHub Actions workflows for automated build, lint, test, and zero-downtime deployment"},{title:"Cloud Infrastructure Setup",spec:"Firebase Firestore, AWS S3/CloudFront, Cloudflare DNS, and serverless edge functions"},{title:"Security & Penetration Audits",spec:"Snyk SAST security scanning, DOM-XSS prevention, and SSL/TLS configuration"},{title:"Uptime & Performance Telemetry",spec:"Real-time error tracking, automated sitemap submission, and Google Search Console APIs"}],techStack:["AWS","Firebase","Cloudflare","GitHub Actions","Docker","Snyk","Node.js"],caseStudyHighlight:{client:"Kone Code IDE Ecosystem",project:"Cloud Compiler & Data Relay Infrastructure",result:"99.98% uptime serving thousands of automated compiler executions daily.",link:"https://code.koneacademy.io"},faq:[{q:"Can you migrate our legacy server to modern cloud hosting?",a:"Yes, we perform zero-downtime migrations to Firebase, Vercel, or AWS with SSL configuration."},{q:"How do you ensure our customer data is secure?",a:"We implement hardware-level security rules, CORS isolation, HTTPS encryption, and Snyk SAST vulnerability scans."}]}};function yv({slug:n,onBack:e}){const t=bs[n]||bs["web-development"];return u.jsxs("div",{className:"service-detail-container",itemScope:!0,itemType:"https://schema.org/Service",children:[u.jsx("div",{className:"service-nav-bar",children:u.jsxs("a",{href:"#services",onClick:r=>{r.preventDefault(),window.location.hash="#services",e&&e()},className:"service-back-btn",children:[u.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"2.5",fill:"none",children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]}),"Back to Services Directory"]})}),u.jsxs("header",{className:"service-hero-banner",style:{background:t.coverGradient},children:[u.jsx("span",{className:"service-badge",children:t.badge}),u.jsx("h1",{className:"service-main-title",itemProp:"name",children:t.title}),u.jsx("p",{className:"service-headline",itemProp:"description",children:t.headline}),u.jsx("p",{className:"service-summary",children:t.summary}),u.jsxs("div",{className:"service-hero-cta",children:[u.jsx("a",{href:`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(t.title)}%20service.`,target:"_blank",rel:"noopener noreferrer",className:"service-primary-btn",children:u.jsx("span",{children:"Book a Technical Consultation"})}),u.jsx("a",{href:"#pricing",className:"service-secondary-btn",children:u.jsx("span",{children:"View Pricing Estimates"})})]})]}),u.jsxs("section",{className:"service-deliverables-section",children:[u.jsx("h2",{className:"section-title",children:"Key Technical Deliverables & Features"}),u.jsx("div",{className:"deliverables-grid",children:t.deliverables.map((r,i)=>u.jsxs("div",{className:"deliverable-card",children:[u.jsxs("span",{className:"del-num",children:["0",i+1]}),u.jsx("h3",{className:"del-title",children:r.title}),u.jsx("p",{className:"del-spec",children:r.spec})]},i))})]}),u.jsxs("section",{className:"service-tech-section",children:[u.jsx("h2",{className:"section-title",children:"Engineering Tech Stack"}),u.jsx("div",{className:"tech-pills-row",children:t.techStack.map(r=>u.jsx("span",{className:"service-tech-pill",children:r},r))})]}),u.jsx("section",{className:"service-case-section",children:u.jsxs("div",{className:"case-highlight-card",children:[u.jsxs("div",{className:"case-meta-header",children:[u.jsx("span",{className:"case-label",children:"FEATURED CASE STUDY"}),u.jsx("span",{className:"case-client",children:t.caseStudyHighlight.client})]}),u.jsx("h3",{className:"case-title",children:t.caseStudyHighlight.project}),u.jsxs("p",{className:"case-result",children:["🎯 ",t.caseStudyHighlight.result]}),t.caseStudyHighlight.link&&u.jsxs("a",{href:t.caseStudyHighlight.link,target:"_blank",rel:"noopener noreferrer",className:"case-link",children:[u.jsx("span",{children:"Explore Live Platform"}),u.jsxs("svg",{viewBox:"0 0 24 24",width:"14",height:"14",stroke:"currentColor",strokeWidth:"2",fill:"none",children:[u.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),u.jsx("polyline",{points:"15 3 21 3 21 9"}),u.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]})}),u.jsxs("section",{className:"service-faq-section",children:[u.jsx("h2",{className:"section-title",children:"❓ Frequently Asked Questions"}),u.jsx("div",{className:"faq-grid",children:t.faq.map((r,i)=>u.jsxs("div",{className:"faq-card",children:[u.jsxs("h3",{className:"faq-q",children:["Q: ",r.q]}),u.jsx("p",{className:"faq-a",children:r.a})]},i))})]})]})}const _v={"web-development":u.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#38bdf8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"16 18 22 12 16 6"}),u.jsx("polyline",{points:"8 6 2 12 8 18"})]}),"mobile-apps":u.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#c084fc",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),u.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),"brand-design":u.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#facc15",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M12 19l7-7 3 3-7 7-3-3z"}),u.jsx("path",{d:"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}),u.jsx("path",{d:"M2 2l7.586 7.586"}),u.jsx("circle",{cx:"11",cy:"11",r:"2"})]}),"cloud-devops":u.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#4ade80",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})})};function Hc({onSelectService:n}){const e=Object.values(bs);return u.jsxs("section",{className:"services-hub-section",id:"services",children:[u.jsxs("div",{className:"services-hero-header",children:[u.jsx("span",{className:"services-badge",children:"AGENCY SPECIALIZATIONS"}),u.jsx("h2",{className:"services-title",children:"Digital Engineering & Design Services"}),u.jsx("p",{className:"services-subtitle",children:"From custom SaaS applications and native mobile apps to corporate brand design and cloud DevOps infrastructure."})]}),u.jsx("div",{className:"services-hub-grid",children:e.map(t=>u.jsxs("div",{className:"service-hub-card",children:[u.jsxs("div",{className:"card-top-row",children:[u.jsx("div",{className:"hub-card-icon-wrapper",children:_v[t.id]}),u.jsx("span",{className:"hub-card-badge",children:t.badge})]}),u.jsx("h3",{className:"hub-card-title",children:t.title}),u.jsx("p",{className:"hub-card-headline",children:t.headline}),u.jsx("p",{className:"hub-card-summary",children:t.summary}),u.jsxs("div",{className:"hub-card-deliverables",children:[u.jsx("span",{className:"deliverables-heading",children:"Core Deliverables"}),u.jsx("ul",{children:t.deliverables.slice(0,3).map((r,i)=>u.jsxs("li",{children:[u.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#38bdf8",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"2px"},children:u.jsx("polyline",{points:"20 6 9 17 4 12"})}),u.jsx("span",{children:r.title})]},i))})]}),u.jsxs("a",{href:`#services/${t.slug}`,onClick:r=>{r.preventDefault(),window.location.hash=`#services/${t.slug}`,window.scrollTo({top:0,behavior:"instant"}),n(t.slug)},className:"view-service-btn",children:[u.jsx("span",{children:"Explore Specifications"}),u.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2.5",fill:"none",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]},t.id))})]})}function vv(){const n=z.useRef(null),[e,t]=z.useState(!1),[r,i]=z.useState(!1),[o,a]=z.useState({}),h=S=>{t(!0)},[d,f]=z.useState(()=>{const S=typeof window<"u"?window.location.hash:"";return S.startsWith("#services/")?"service-detail":S.startsWith("#services")?"services":S.startsWith("#work")?"work":S.startsWith("#pricing")?"pricing":"home"}),[_,I]=z.useState(()=>{const S=typeof window<"u"?window.location.hash:"";return S.startsWith("#services/")?S.replace("#services/",""):"web-development"});return z.useEffect(()=>{const S=()=>{const P=window.location.hash;if(P.startsWith("#services/")){const k=P.replace("#services/","");I(k),f("service-detail")}else P.startsWith("#services")?f("services"):P.startsWith("#work")?f("work"):P.startsWith("#pricing")?f("pricing"):f("home");window.scrollTo({top:0,behavior:"instant"})};return window.addEventListener("hashchange",S),S(),()=>window.removeEventListener("hashchange",S)},[]),z.useEffect(()=>{var O;if(navigator.userAgent==="ReactSnap"){(((O=n.current)==null?void 0:O.querySelectorAll(".fade-in-up"))||[]).forEach(B=>{B.classList.add("visible")});return}const P=new IntersectionObserver($=>{$.forEach(B=>{B.isIntersecting&&B.target.classList.add("visible")})},{threshold:.1}),k=()=>{var B;(((B=n.current)==null?void 0:B.querySelectorAll(".fade-in-up:not(.observed)"))||[]).forEach(Z=>{P.observe(Z),Z.classList.add("observed")})};k();const M=new MutationObserver(()=>{k()});return n.current&&M.observe(n.current,{childList:!0,subtree:!0}),()=>{P.disconnect(),M.disconnect()}},[]),u.jsxs("div",{className:"digital-app-root",children:[u.jsx("header",{className:"hub-header",children:u.jsxs("div",{className:"hub-header-inner",children:[u.jsx("div",{className:"logo",style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:u.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"0.75rem",textDecoration:"none",color:"inherit"},children:[u.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",className:"logo-icon neon-logo",width:"34",height:"34"}),u.jsxs("span",{className:"logo-text",style:{fontWeight:850,letterSpacing:"-0.02em"},children:["KONE ",u.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]})}),u.jsxs("nav",{className:"hub-nav",children:[u.jsx("a",{href:"#",className:d==="home"?"active-nav":"",children:"Overview"}),u.jsx("a",{href:"#services",className:d==="services"||d==="service-detail"?"active-nav":"",children:"Services"}),u.jsx("a",{href:"#work",className:d==="work"?"active-nav":"",children:"Work"}),u.jsx("a",{href:"#pricing",className:d==="pricing"?"active-nav":"",children:"Pricing"}),u.jsx("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services.",target:"_blank",rel:"noopener noreferrer",children:"Contact"}),u.jsxs("button",{onClick:()=>h(),className:"btn-primary",style:{padding:"0.45rem 1.1rem",fontSize:"0.82rem",marginLeft:"0.4rem",borderRadius:"50px"},children:[u.jsx("span",{children:"Start Project"}),u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),u.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},className:"mobile-header-controls",children:u.jsx("button",{className:"mobile-nav-toggle",onClick:()=>i(!r),"aria-label":"Toggle navigation menu",children:u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})})})]})}),r&&u.jsxs("div",{className:"mobile-menu-drawer",children:[u.jsxs("div",{className:"mobile-drawer-header",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[u.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",width:"30",height:"30"}),u.jsxs("span",{style:{fontWeight:850,fontSize:"1.1rem",letterSpacing:"-0.02em"},children:["KONE ",u.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]}),u.jsx("button",{className:"mobile-drawer-close",onClick:()=>i(!1),"aria-label":"Close navigation menu",children:u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),u.jsxs("div",{className:"mobile-drawer-links",children:[u.jsxs("a",{href:"#",className:`mobile-drawer-link ${d==="home"?"active-nav":""}`,onClick:()=>i(!1),children:[u.jsx("span",{children:"Overview"}),u.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"01"})]}),u.jsxs("a",{href:"#services",className:`mobile-drawer-link ${d==="services"||d==="service-detail"?"active-nav":""}`,onClick:()=>i(!1),children:[u.jsx("span",{children:"Services"}),u.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"02"})]}),u.jsxs("a",{href:"#work",className:`mobile-drawer-link ${d==="work"?"active-nav":""}`,onClick:()=>i(!1),children:[u.jsx("span",{children:"Work"}),u.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"03"})]}),u.jsxs("a",{href:"#pricing",className:`mobile-drawer-link ${d==="pricing"?"active-nav":""}`,onClick:()=>i(!1),children:[u.jsx("span",{children:"Pricing"}),u.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"04"})]}),u.jsxs("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services.",target:"_blank",rel:"noopener noreferrer",className:"mobile-drawer-link",onClick:()=>i(!1),children:[u.jsx("span",{children:"Contact via WhatsApp"}),u.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"➔"})]})]}),u.jsx("div",{className:"mobile-drawer-footer",children:u.jsxs("button",{onClick:()=>{i(!1),h()},className:"btn-primary",style:{width:"100%",padding:"0.85rem",fontSize:"0.95rem"},children:[u.jsx("span",{children:"Start Fast-Track Project"}),u.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})})]}),u.jsx("main",{id:"main-content",style:{flex:"1 0 auto",display:"flex",flexDirection:"column",width:"100%",gap:"3rem"},children:d==="service-detail"?u.jsx(yv,{slug:_,onBack:()=>f("services")}):d==="services"?u.jsx(Hc,{onSelectService:S=>{I(S),f("service-detail")}}):d==="work"?u.jsx(zc,{}):d==="pricing"?u.jsx($c,{}):u.jsxs(u.Fragment,{children:[u.jsx(cd,{onOpenWizard:()=>h()}),u.jsx(fd,{}),u.jsx(Hc,{onSelectService:S=>{I(S),f("service-detail")}}),u.jsx(zc,{}),u.jsx($c,{})]})}),u.jsx(pv,{isOpen:e,onClose:()=>t(!1),initialPhone:o.phone,initialBusinessName:o.businessName}),u.jsxs("footer",{className:"hub-footer",style:{marginTop:"2rem",paddingTop:"2.5rem",paddingBottom:"3.5rem",borderTop:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",flexDirection:"column",gap:"1.5rem",alignItems:"center",textAlign:"center"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[u.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",className:"logo-icon neon-logo",width:"36",height:"36"}),u.jsxs("span",{className:"logo-text",style:{fontSize:"1.2rem",fontWeight:800},children:["KONE ",u.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",maxWidth:"520px",margin:"0 auto",lineHeight:"1.6"},children:"Ghana's premier digital studio for high-performance business websites, web apps, & automated WhatsApp lead engines."}),u.jsxs("div",{style:{display:"flex",gap:"1.2rem",flexWrap:"wrap",justifyContent:"center",fontSize:"0.88rem",fontWeight:600},children:[u.jsx("a",{href:"#",style:{color:"var(--text-muted)",textDecoration:"none"},children:"Overview"}),u.jsx("a",{href:"#services",style:{color:"var(--text-muted)",textDecoration:"none"},children:"Services"}),u.jsx("a",{href:"#work",style:{color:"var(--text-muted)",textDecoration:"none"},children:"Work"}),u.jsx("a",{href:"#pricing",style:{color:"var(--text-muted)",textDecoration:"none"},children:"Pricing"})]}),u.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",justifyContent:"center"},children:[u.jsxs("a",{href:"https://whatsapp.com/channel/0029Vb7wdZMJUM2fepkMfR0D",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(37, 211, 102, 0.12)",border:"1px solid rgba(37, 211, 102, 0.35)",color:"#25d366",padding:"0.5rem 1.1rem",borderRadius:"25px",fontSize:"0.85rem",fontWeight:700,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.45rem",boxShadow:"0 0 12px rgba(37, 211, 102, 0.15)",transition:"all 0.2s ease"},children:[u.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor",children:u.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"WhatsApp Channel"]}),u.jsxs("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch.",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(0, 255, 255, 0.08)",border:"1px solid rgba(0, 255, 255, 0.25)",color:"var(--cyan-glow)",padding:"0.5rem 1.1rem",borderRadius:"25px",fontSize:"0.85rem",fontWeight:700,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.45rem",boxShadow:"0 0 12px rgba(0, 255, 255, 0.1)",transition:"all 0.2s ease"},children:[u.jsx("span",{children:"💬"}),u.jsx("span",{children:"Direct Line (+233 55 199 3820)"})]}),u.jsxs("a",{href:"https://www.koneacademy.io",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"var(--text-muted)",padding:"0.5rem 1.1rem",borderRadius:"25px",fontSize:"0.85rem",fontWeight:700,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.45rem",transition:"all 0.2s ease"},children:[u.jsx("span",{children:"🌐"}),u.jsx("span",{children:"Kone Academy Ecosystem"})]})]}),u.jsxs("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginTop:"0.5rem"},children:["© ",new Date().getFullYear()," Kone Digital. Powered by Kone Academy. All rights reserved."]})]}),u.jsx("a",{href:"https://wa.me/233551993820",className:"whatsapp-fab",target:"_blank",rel:"noopener noreferrer","aria-label":"Contact us on WhatsApp",children:u.jsx("svg",{viewBox:"0 0 24 24",children:u.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.132 1.38 4.788 1.381 5.069 0 9.199-4.13 9.201-9.199.001-2.454-.952-4.761-2.686-6.494-1.734-1.734-4.041-2.688-6.498-2.689-5.074 0-9.207 4.129-9.208 9.199-.001 1.73.455 3.415 1.32 4.89l-.103.16-1.11 4.054 4.151-1.089.16.095zm10.125-6.702c-.281-.141-1.664-.822-1.921-.916-.257-.094-.443-.141-.63.141-.186.281-.723.916-.885 1.102-.162.186-.324.21-.605.069-.282-.141-1.189-.439-2.264-1.401-.836-.746-1.4-1.667-1.564-1.948-.164-.282-.017-.434.124-.573.127-.125.281-.328.422-.492.141-.164.188-.281.282-.469.094-.188.047-.352-.023-.492-.07-.141-.63-1.523-.863-2.086-.226-.552-.455-.477-.63-.486-.162-.008-.349-.01-.536-.01-.188 0-.492.07-.75.352-.257.282-.984.961-.984 2.343 0 1.382 1.008 2.718 1.148 2.906.141.188 1.984 3.029 4.806 4.242.671.289 1.194.462 1.602.592.674.214 1.287.184 1.77.112.539-.081 1.664-.68 1.898-1.336.234-.656.234-1.219.164-1.336-.07-.117-.257-.188-.539-.328z"})})})]})}class wv extends z.Component{constructor(){super(...arguments);ma(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}async componentDidCatch(t,r){console.error("Uncaught error caught by ErrorBoundary:",t,r);try{await Tu(fu(Qn,"client_errors"),{appName:this.props.appName||"Kone-Digital",errorMessage:t.message,errorStack:t.stack,componentStack:r.componentStack,url:window.location.href,userAgent:navigator.userAgent,timestamp:Iu()}),console.log("Error successfully logged to Firestore.")}catch(i){console.error("Failed to log error to Firestore:",i)}}render(){return this.state.hasError?u.jsxs("div",{style:{padding:"2rem",textAlign:"center",fontFamily:"system-ui, -apple-system, sans-serif",color:"#f8fafc",background:"#0a0a0f",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[u.jsx("h2",{style:{color:"#ec4899",marginBottom:"1rem",fontSize:"2rem"},children:"Oops, something went wrong."}),u.jsx("p",{style:{color:"#94a3b8",marginBottom:"2rem",maxWidth:"500px",lineHeight:"1.6"},children:this.props.fallbackMessage||"We're sorry, but an unexpected error occurred. Our engineering team has been notified. Please try refreshing the page."}),u.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"12px 24px",background:"#ec4899",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"1rem",boxShadow:"0 0 15px rgba(236, 72, 153, 0.4)"},children:"Refresh Page"})]}):this.props.children}}const Gc=document.getElementById("root");Gc&&Jc(Gc).render(u.jsx(qc.StrictMode,{children:u.jsx(wv,{children:u.jsx(mv,{children:u.jsx(vv,{})})})}));
