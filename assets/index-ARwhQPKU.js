var nd=Object.defineProperty;var rd=(n,e,t)=>e in n?nd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ya=(n,e,t)=>rd(n,typeof e!="symbol"?e+"":e,t);import{r as U,a as id,R as Jc}from"./vendor-react-wGySg1uH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Yc={exports:{}},si={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd=U,od=Symbol.for("react.element"),ad=Symbol.for("react.fragment"),cd=Object.prototype.hasOwnProperty,ld=sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ud={key:!0,ref:!0,__self:!0,__source:!0};function Xc(n,e,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)cd.call(e,r)&&!ud.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:od,type:n,key:o,ref:a,props:i,_owner:ld.current}}si.Fragment=ad;si.jsx=Xc;si.jsxs=Xc;Yc.exports=si;var u=Yc.exports,Zc,_a=id;Zc=_a.createRoot,_a.hydrateRoot;const lt=[{id:"stone",label:"Stone Architecture"},{id:"fashion",label:"Fashion Retail"},{id:"foundation",label:"Social Impact NGO"}],va=5e3,hd=({onOpenWizard:n})=>{const[e,t]=U.useState("stone"),[r,i]=U.useState(!1),[o,a]=U.useState(0),h=U.useCallback(()=>{t(A=>{const C=lt.findIndex(k=>k.id===A);return lt[(C+1)%lt.length].id}),a(A=>A+1)},[]),d=U.useCallback(()=>{t(A=>{const C=lt.findIndex(k=>k.id===A);return lt[(C-1+lt.length)%lt.length].id}),a(A=>A+1)},[]),f=A=>{t(A),a(C=>C+1)};U.useEffect(()=>{if(r)return;const A=setTimeout(()=>{h()},va);return()=>clearTimeout(A)},[r,e,h]);const y=()=>i(!0),I=()=>{i(!1),a(A=>A+1)};return u.jsxs("section",{className:"hub-hero",style:{padding:"3rem 1rem 4rem",maxWidth:"1200px",margin:"0 auto"},children:[u.jsxs("div",{style:{textAlign:"center",maxWidth:"850px",margin:"0 auto 3rem"},children:[u.jsxs("span",{className:"badge-pill gold",style:{marginBottom:"1.5rem"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"var(--gold-accent)"}}),"48-HOUR MANAGED LAUNCH SLA"]}),u.jsxs("h1",{className:"heading-luminance",style:{fontSize:"clamp(2.4rem, 6vw, 3.8rem)",fontWeight:900,lineHeight:1.12,marginBottom:"1.2rem",letterSpacing:"-0.035em"},children:["Putting Ghana's Best",u.jsx("br",{}),u.jsx("span",{className:"gold-luminance",children:"Businesses Online."})]}),u.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"1.12rem",lineHeight:1.7,marginBottom:"2.5rem",maxWidth:"720px",margin:"0 auto 2.5rem",letterSpacing:"-0.01em"},children:["Traditional marketing ends at the flyer. We engineer high-performance Website as a Service (WaaS) platforms with automated ",u.jsx("strong",{style:{color:"#FFFFFF",fontWeight:700},children:"MoMo payments"})," and direct ",u.jsx("strong",{style:{color:"#FFFFFF",fontWeight:700},children:"WhatsApp lead routing"}),"."]}),u.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[u.jsxs("button",{onClick:n,className:"btn-primary",children:[u.jsx("span",{children:"Start Fast-Track Project"}),u.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),u.jsx("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20request%20a%20consultation%20for%20my%20business%20website.",target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",children:u.jsx("span",{children:"Request Consultation"})})]})]}),u.jsxs("div",{className:"hero-demo-stage neon-border",onMouseEnter:y,onMouseLeave:I,onFocus:()=>i(!0),onBlur:()=>{i(!1),a(A=>A+1)},"aria-label":"Interactive Client Showcase Carousel",role:"region",style:{background:"var(--bg-surface)",borderRadius:"20px",padding:"1.5rem",maxWidth:"960px",margin:"0 auto",boxShadow:"0 20px 50px rgba(0,0,0,0.6)",position:"relative"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.8rem",marginBottom:"1.2rem",borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"1rem"},children:[u.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"0.6rem"},children:lt.map(A=>{const C=e===A.id;return u.jsxs("button",{onClick:()=>f(A.id),className:C?"btn-primary":"btn-secondary",style:{padding:"0.38rem 1rem",borderRadius:"50px",fontSize:"0.82rem",position:"relative",overflow:"hidden",transition:"all 0.25s ease"},children:[u.jsx("span",{style:{position:"relative",zIndex:2},children:A.label}),C&&u.jsx("span",{className:"hero-tab-progress-bar",style:{position:"absolute",bottom:0,left:0,height:"3px",background:"#07090E",borderRadius:"2px",animation:`tabProgressBar ${va}ms linear forwards`,animationPlayState:r?"paused":"running",zIndex:1}},`progress-${A.id}-${o}`)]},A.id)})}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.74rem",color:"var(--text-subtle)"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:r?"var(--gold-accent)":"#10B981",boxShadow:r?"0 0 8px var(--gold-accent)":"0 0 8px #10B981",transition:"background 0.3s ease"}}),u.jsx("span",{children:r?"Paused on hover":"Auto-cycling (5s)"})]})]}),u.jsxs("div",{style:{borderRadius:"12px",overflow:"hidden",minHeight:"340px",height:"auto",position:"relative",background:"#0d1117"},children:[u.jsx("button",{onClick:d,"aria-label":"Previous client showcase",className:"showcase-nav-btn prev",style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",zIndex:10,background:"rgba(7, 9, 14, 0.65)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#FFFFFF",width:"36px",height:"36px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)"},children:u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"15 18 9 12 15 6"})})}),u.jsx("button",{onClick:h,"aria-label":"Next client showcase",className:"showcase-nav-btn next",style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",zIndex:10,background:"rgba(7, 9, 14, 0.65)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#FFFFFF",width:"36px",height:"36px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)"},children:u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"9 18 15 12 9 6"})})}),e==="stone"&&u.jsxs("div",{className:"hero-slide-enter",style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/sedemson_stone_hero.png")',backgroundSize:"cover",backgroundPosition:"center",color:"#fff",padding:"2rem 1.2rem",textAlign:"center"},children:[u.jsx("span",{className:"badge-pill gold",style:{marginBottom:"0.8rem"},children:"FEATURED B2B CLIENT"}),u.jsx("h2",{style:{fontSize:"clamp(1.3rem, 5vw, 2rem)",fontFamily:"var(--font-heading)",fontWeight:800},children:"Sedemson Stone Craftsmanship"}),u.jsx("p",{style:{maxWidth:"500px",fontSize:"0.9rem",opacity:.85,marginTop:"0.5rem"},children:"Natural Stone Cladding & Architectural Finishes across Ghana."}),u.jsxs("a",{href:"#work",style:{marginTop:"1.2rem",color:"#F8FAFC",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",padding:"0.35rem 0.9rem",borderRadius:"50px",fontWeight:650,fontSize:"0.8rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[u.jsx("span",{children:"Explore Client Showcase"}),u.jsx("span",{children:"➔"})]})]},"slide-stone"),e==="fashion"&&u.jsxs("div",{className:"hero-slide-enter",style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/emewear/emewear_hero.jpg")',backgroundSize:"cover",backgroundPosition:"top",color:"#fff",padding:"2rem 1.2rem",textAlign:"center"},children:[u.jsx("span",{className:"badge-pill gold",style:{marginBottom:"0.8rem"},children:"E-COMMERCE SHOWCASE"}),u.jsx("h2",{style:{fontSize:"clamp(1.3rem, 5vw, 2rem)",fontFamily:"var(--font-heading)",fontWeight:800},children:"Emewear Plus-Size Ankara"}),u.jsx("p",{style:{maxWidth:"500px",fontSize:"0.9rem",opacity:.85,marginTop:"0.5rem"},children:"Handcrafted Ankara wide-leg cargo trousers & royal batik palazzo sets."}),u.jsxs("a",{href:"/emewear/index.html",target:"_blank",rel:"noopener noreferrer",style:{marginTop:"1.2rem",color:"#F8FAFC",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",padding:"0.35rem 0.9rem",borderRadius:"50px",fontWeight:650,fontSize:"0.8rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[u.jsx("span",{children:"Explore Client Showcase"}),u.jsx("span",{children:"➔"})]})]},"slide-fashion"),e==="foundation"&&u.jsxs("div",{className:"hero-slide-enter",style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(7, 30, 74, 0.78), rgba(0, 59, 153, 0.82)), url("/ansah-delali/cohort-group.jpg")',backgroundSize:"cover",backgroundPosition:"center",color:"#fff",padding:"2rem 1.2rem",textAlign:"center"},children:[u.jsx("span",{className:"badge-pill gold",style:{marginBottom:"0.8rem",background:"#FA8C16",color:"#fff"},children:"FEATURED SOCIAL IMPACT INITIATIVE"}),u.jsx("h2",{style:{fontSize:"clamp(1.3rem, 5vw, 2rem)",fontFamily:"var(--font-heading)",fontWeight:800},children:"Ansah Delali Foundation"}),u.jsx("p",{style:{maxWidth:"520px",fontSize:"0.9rem",opacity:.92,marginTop:"0.5rem"},children:"Giving Back, Rising Together — Educational mentorship, SkillUp 1.0 outreach, and digital skills empowerment across Ghana."}),u.jsxs("a",{href:"/ansah-delali/index.html",target:"_blank",rel:"noopener noreferrer",style:{marginTop:"1.2rem",color:"#FFFFFF",background:"#0052CC",border:"1px solid rgba(255,255,255,0.3)",padding:"0.45rem 1.1rem",borderRadius:"50px",fontWeight:700,fontSize:"0.84rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.4rem",boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:[u.jsx("span",{children:"Explore Foundation Portal"}),u.jsx("span",{children:"➔"})]})]},"slide-foundation")]})]})]})},dd="/assets/momo-Du5GlNOn.png",fd="/assets/telecel-8JjmPpPR.png",pd="/assets/at_money-DjPIB_Ur.png",md="/assets/whatsapp_business-CgJgUw8J.png",Ir=[{id:"mtn",name:"MTN MoMo",icon:dd,className:"mtn",title:"MTN Mobile Money (MoMo) API Integration",imgStyle:{borderRadius:"6px"}},{id:"telecel",name:"Telecel Cash",icon:fd,className:"telecel",title:"Telecel Cash Automated Payment Gateway",imgStyle:{borderRadius:"50%"}},{id:"at",name:"AT Money",icon:pd,className:"at",title:"AT Money (AirtelTigo) Automated Gateway",imgStyle:{borderRadius:"50%"}},{id:"whatsapp",name:"WhatsApp Business",icon:md,className:"whatsapp",title:"WhatsApp Business Automated Order & Lead Routing",imgStyle:{borderRadius:"6px"}}],gd=()=>{const n=[{metric:"48h",title:"Rapid Launch Turnaround",description:"Your bespoke business hub deployed with zero technical overhead.",color:"var(--cyan-glow)"},{metric:"Direct",title:"MoMo & WhatsApp Routing",description:"Automated order collection straight to your MTN, Telecel, or AT phone.",color:"var(--gold-accent)"},{metric:"100%",title:"Fully Managed WaaS",description:"Zero maintenance headaches. We handle hosting, SSL, updates & security.",color:"#10b981"},{metric:"99.9%",title:"Guaranteed Uptime & Speed",description:"Ultra-lightweight code optimized for African 3G/4G networks.",color:"var(--cyan-glow)"}];return u.jsxs("section",{className:"trust-metrics-section",style:{padding:"3rem 0",margin:"2rem 0"},children:[u.jsxs("div",{className:"section-title",style:{textAlign:"center",marginBottom:"2.5rem"},children:[u.jsxs("span",{className:"badge-pill cyan",children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"var(--cyan-glow)"}}),"ENTERPRISE ARCHITECTURE • ZERO MAINTENANCE"]}),u.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.7rem, 5vw, 2.4rem)",marginTop:"0.9rem",fontWeight:850},children:["Engineered for ",u.jsx("span",{className:"cyan-luminance",children:"Real Business Growth"})]})]}),u.jsx("div",{className:"metrics-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 220px), 1fr))",gap:"1.2rem",maxWidth:"1100px",margin:"0 auto",padding:"0 1rem"},children:n.map((e,t)=>u.jsxs("div",{className:"metric-card neon-border",style:{background:"var(--bg-surface)",padding:"2rem 1.5rem",borderRadius:"16px",textAlign:"center",backdropFilter:"blur(10px)"},children:[u.jsx("div",{style:{fontSize:"2.6rem",fontWeight:900,color:e.color},children:e.metric}),u.jsx("h3",{style:{color:"var(--text-main)",fontSize:"1rem",fontWeight:700,marginTop:"0.6rem",marginBottom:"0.3rem"},children:e.title}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.82rem",lineHeight:1.5},children:e.description})]},t))}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1.2rem",marginTop:"3.5rem",width:"100%",boxSizing:"border-box",overflow:"hidden"},children:[u.jsxs("div",{style:{color:"var(--text-subtle)",fontSize:"0.74rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em",display:"flex",alignItems:"center",gap:"0.8rem"},children:[u.jsx("span",{style:{width:"28px",height:"1px",background:"rgba(255, 255, 255, 0.12)"}}),"SUPPORTED PAYMENT & LEAD GATEWAYS",u.jsx("span",{style:{width:"28px",height:"1px",background:"rgba(255, 255, 255, 0.12)"}})]}),u.jsxs("div",{className:"gateway-marquee-wrapper","aria-label":"Supported Payment and Lead Gateways marquee",children:[u.jsx("div",{className:"gateway-marquee-track",children:[...Ir,...Ir].map((e,t)=>u.jsxs("div",{className:`integration-badge ${e.className}`,title:e.title,children:[u.jsx("img",{src:e.icon,alt:e.name,style:e.imgStyle}),u.jsx("span",{children:e.name})]},`gw-t1-${e.id}-${t}`))}),u.jsx("div",{className:"gateway-marquee-track","aria-hidden":"true",children:[...Ir,...Ir].map((e,t)=>u.jsxs("div",{className:`integration-badge ${e.className}`,title:e.title,children:[u.jsx("img",{src:e.icon,alt:e.name,style:e.imgStyle}),u.jsx("span",{children:e.name})]},`gw-t2-${e.id}-${t}`))})]})]})]})},yd=()=>{};var wa={};/**
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
 */const el=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_d=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],h=n[t++],d=((i&7)<<18|(o&63)<<12|(a&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},tl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,h=a?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,y=o>>2,I=(o&3)<<4|h>>4;let A=(h&15)<<2|f>>6,C=f&63;d||(C=64,a||(A=64)),r.push(t[y],t[I],t[A],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(el(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_d(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],h=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const I=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||h==null||f==null||I==null)throw new vd;const A=o<<2|h>>4;if(r.push(A),f!==64){const C=h<<4&240|f>>2;if(r.push(C),I!==64){const k=f<<6&192|I;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wd=function(n){const e=el(n);return tl.encodeByteArray(e,!0)},Mr=function(n){return wd(n).replace(/\./g,"")},nl=function(n){try{return tl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Id(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ed=()=>Id().__FIREBASE_DEFAULTS__,Td=()=>{if(typeof process>"u"||typeof wa>"u")return;const n=wa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&nl(n[1]);return e&&JSON.parse(e)},oi=()=>{try{return yd()||Ed()||Td()||bd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rl=n=>{var e,t;return(t=(e=oi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ad=n=>{const e=rl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},il=()=>{var n;return(n=oi())==null?void 0:n.config},sl=n=>{var e;return(e=oi())==null?void 0:e[`_${n}`]};/**
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
 */class Sd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function xd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Mr(JSON.stringify(t)),Mr(JSON.stringify(a)),""].join(".")}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Cd(){var e;const n=(e=oi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ol(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nd(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Dd(){return!Cd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function al(){try{return typeof indexedDB=="object"}catch{return!1}}function cl(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}function Od(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Vd="FirebaseError";class je extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Vd,Object.setPrototypeOf(this,je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wt.prototype.create)}}class Wt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Ld(o,r):"Error",h=`${this.serviceName}: ${a} (${i}).`;return new je(i,h,r)}}function Ld(n,e){return n.replace(jd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jd=/\{\$([^}]+)}/g;function Md(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _t(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Ia(o)&&Ia(a)){if(!_t(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ia(n){return n!==null&&typeof n=="object"}/**
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
 */function Yn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fd(n,e){const t=new Ud(n,e);return t.subscribe.bind(t)}class Ud{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Bd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Hi),i.error===void 0&&(i.error=Hi),i.complete===void 0&&(i.complete=Hi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hi(){}/**
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
 */const Wd=1e3,zd=2,$d=4*60*60*1e3,Hd=.5;function Ea(n,e=Wd,t=zd){const r=e*Math.pow(t,n),i=Math.round(Hd*r*(Math.random()-.5)*2);return Math.min($d,r+i)}/**
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
 */function Xn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ll(n){return(await fetch(n,{credentials:"include"})).ok}class Le{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ct="[DEFAULT]";/**
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
 */class Gd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Sd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kd(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&a.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qd(n){return n===Ct?void 0:n}function Kd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Qd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Jd={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Yd=B.INFO,Xd={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Zd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Xd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ai{constructor(e){this.name=e,this._logLevel=Yd,this._logHandler=Zd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const ef=(n,e)=>e.some(t=>n instanceof t);let Ta,ba;function tf(){return Ta||(Ta=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nf(){return ba||(ba=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ul=new WeakMap,ss=new WeakMap,hl=new WeakMap,Gi=new WeakMap,xs=new WeakMap;function rf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(mt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ul.set(t,n)}).catch(()=>{}),xs.set(e,n),e}function sf(n){if(ss.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ss.set(n,e)}let os={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ss.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function of(n){os=n(os)}function af(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qi(this),e,...t);return hl.set(r,e.sort?e.sort():[e]),mt(r)}:nf().includes(n)?function(...e){return n.apply(qi(this),e),mt(ul.get(this))}:function(...e){return mt(n.apply(qi(this),e))}}function cf(n){return typeof n=="function"?af(n):(n instanceof IDBTransaction&&sf(n),ef(n,tf())?new Proxy(n,os):n)}function mt(n){if(n instanceof IDBRequest)return rf(n);if(Gi.has(n))return Gi.get(n);const e=cf(n);return e!==n&&(Gi.set(n,e),xs.set(e,n)),e}const qi=n=>xs.get(n);function dl(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),h=mt(a);return r&&a.addEventListener("upgradeneeded",d=>{r(mt(a.result),d.oldVersion,d.newVersion,mt(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),h.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),h}const lf=["get","getKey","getAll","getAllKeys","count"],uf=["put","add","delete","clear"],Ki=new Map;function Aa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ki.get(e))return Ki.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=uf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lf.includes(t)))return;const o=async function(a,...h){const d=this.transaction(a,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(h.shift())),(await Promise.all([f[t](...h),i&&d.done]))[0]};return Ki.set(e,o),o}of(n=>({...n,get:(e,t,r)=>Aa(e,t)||n.get(e,t,r),has:(e,t)=>!!Aa(e,t)||n.has(e,t)}));/**
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
 */class hf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(df(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function df(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const as="@firebase/app",Sa="0.14.11";/**
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
 */const et=new ai("@firebase/app"),ff="@firebase/app-compat",pf="@firebase/analytics-compat",mf="@firebase/analytics",gf="@firebase/app-check-compat",yf="@firebase/app-check",_f="@firebase/auth",vf="@firebase/auth-compat",wf="@firebase/database",If="@firebase/data-connect",Ef="@firebase/database-compat",Tf="@firebase/functions",bf="@firebase/functions-compat",Af="@firebase/installations",Sf="@firebase/installations-compat",xf="@firebase/messaging",Rf="@firebase/messaging-compat",Cf="@firebase/performance",Pf="@firebase/performance-compat",kf="@firebase/remote-config",Nf="@firebase/remote-config-compat",Df="@firebase/storage",Of="@firebase/storage-compat",Vf="@firebase/firestore",Lf="@firebase/ai",jf="@firebase/firestore-compat",Mf="firebase",Ff="12.12.0";/**
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
 */const cs="[DEFAULT]",Uf={[as]:"fire-core",[ff]:"fire-core-compat",[mf]:"fire-analytics",[pf]:"fire-analytics-compat",[yf]:"fire-app-check",[gf]:"fire-app-check-compat",[_f]:"fire-auth",[vf]:"fire-auth-compat",[wf]:"fire-rtdb",[If]:"fire-data-connect",[Ef]:"fire-rtdb-compat",[Tf]:"fire-fn",[bf]:"fire-fn-compat",[Af]:"fire-iid",[Sf]:"fire-iid-compat",[xf]:"fire-fcm",[Rf]:"fire-fcm-compat",[Cf]:"fire-perf",[Pf]:"fire-perf-compat",[kf]:"fire-rc",[Nf]:"fire-rc-compat",[Df]:"fire-gcs",[Of]:"fire-gcs-compat",[Vf]:"fire-fst",[jf]:"fire-fst-compat",[Lf]:"fire-vertex","fire-js":"fire-js",[Mf]:"fire-js-all"};/**
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
 */const Fr=new Map,Bf=new Map,ls=new Map;function xa(n,e){try{n.container.addComponent(e)}catch(t){et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function He(n){const e=n.name;if(ls.has(e))return et.debug(`There were multiple attempts to register component ${e}.`),!1;ls.set(e,n);for(const t of Fr.values())xa(t,n);for(const t of Bf.values())xa(t,n);return!0}function zt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Be(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Wf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new Wt("app","Firebase",Wf);/**
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
 */class zf{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
 */const dn=Ff;function fl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:cs,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(t||(t=il()),!t)throw gt.create("no-options");const o=Fr.get(i);if(o){if(_t(t,o.options)&&_t(r,o.config))return o;throw gt.create("duplicate-app",{appName:i})}const a=new Qd(i);for(const d of ls.values())a.addComponent(d);const h=new zf(t,r,a);return Fr.set(i,h),h}function Rs(n=cs){const e=Fr.get(n);if(!e&&n===cs&&il())return fl();if(!e)throw gt.create("no-app",{appName:n});return e}function Pe(n,e,t){let r=Uf[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),et.warn(a.join(" "));return}He(new Le(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const $f="firebase-heartbeat-database",Hf=1,Wn="firebase-heartbeat-store";let Qi=null;function pl(){return Qi||(Qi=dl($f,Hf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Wn)}catch(t){console.warn(t)}}}}).catch(n=>{throw gt.create("idb-open",{originalErrorMessage:n.message})})),Qi}async function Gf(n){try{const t=(await pl()).transaction(Wn),r=await t.objectStore(Wn).get(ml(n));return await t.done,r}catch(e){if(e instanceof je)et.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});et.warn(t.message)}}}async function Ra(n,e){try{const r=(await pl()).transaction(Wn,"readwrite");await r.objectStore(Wn).put(e,ml(n)),await r.done}catch(t){if(t instanceof je)et.warn(t.message);else{const r=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});et.warn(r.message)}}}function ml(n){return`${n.name}!${n.options.appId}`}/**
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
 */const qf=1024,Kf=30;class Qf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ca();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Kf){const a=Xf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){et.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ca(),{heartbeatsToSend:r,unsentEntries:i}=Jf(this._heartbeatsCache.heartbeats),o=Mr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return et.warn(t),""}}}function Ca(){return new Date().toISOString().substring(0,10)}function Jf(n,e=qf){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Pa(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Pa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Yf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return al()?cl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Gf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ra(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ra(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pa(n){return Mr(JSON.stringify({version:2,heartbeats:n})).length}function Xf(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Zf(n){He(new Le("platform-logger",e=>new hf(e),"PRIVATE")),He(new Le("heartbeat",e=>new Qf(e),"PRIVATE")),Pe(as,Sa,n),Pe(as,Sa,"esm2020"),Pe("fire-js","")}Zf("");var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cs;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function _(){}_.prototype=m.prototype,w.F=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(E,v,b){for(var g=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)g[pe-2]=arguments[pe];return m.prototype[v].apply(E,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,_){_||(_=0);const E=Array(16);if(typeof m=="string")for(var v=0;v<16;++v)E[v]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(v=0;v<16;++v)E[v]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],v=w.g[2];let b=w.g[3],g;g=m+(b^_&(v^b))+E[0]+3614090360&4294967295,m=_+(g<<7&4294967295|g>>>25),g=b+(v^m&(_^v))+E[1]+3905402710&4294967295,b=m+(g<<12&4294967295|g>>>20),g=v+(_^b&(m^_))+E[2]+606105819&4294967295,v=b+(g<<17&4294967295|g>>>15),g=_+(m^v&(b^m))+E[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(b^_&(v^b))+E[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=b+(v^m&(_^v))+E[5]+1200080426&4294967295,b=m+(g<<12&4294967295|g>>>20),g=v+(_^b&(m^_))+E[6]+2821735955&4294967295,v=b+(g<<17&4294967295|g>>>15),g=_+(m^v&(b^m))+E[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(b^_&(v^b))+E[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=b+(v^m&(_^v))+E[9]+2336552879&4294967295,b=m+(g<<12&4294967295|g>>>20),g=v+(_^b&(m^_))+E[10]+4294925233&4294967295,v=b+(g<<17&4294967295|g>>>15),g=_+(m^v&(b^m))+E[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(b^_&(v^b))+E[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=b+(v^m&(_^v))+E[13]+4254626195&4294967295,b=m+(g<<12&4294967295|g>>>20),g=v+(_^b&(m^_))+E[14]+2792965006&4294967295,v=b+(g<<17&4294967295|g>>>15),g=_+(m^v&(b^m))+E[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=m+(v^b&(_^v))+E[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=b+(_^v&(m^_))+E[6]+3225465664&4294967295,b=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(b^m))+E[11]+643717713&4294967295,v=b+(g<<14&4294967295|g>>>18),g=_+(b^m&(v^b))+E[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^b&(_^v))+E[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=b+(_^v&(m^_))+E[10]+38016083&4294967295,b=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(b^m))+E[15]+3634488961&4294967295,v=b+(g<<14&4294967295|g>>>18),g=_+(b^m&(v^b))+E[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^b&(_^v))+E[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=b+(_^v&(m^_))+E[14]+3275163606&4294967295,b=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(b^m))+E[3]+4107603335&4294967295,v=b+(g<<14&4294967295|g>>>18),g=_+(b^m&(v^b))+E[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(v^b&(_^v))+E[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=b+(_^v&(m^_))+E[2]+4243563512&4294967295,b=m+(g<<9&4294967295|g>>>23),g=v+(m^_&(b^m))+E[7]+1735328473&4294967295,v=b+(g<<14&4294967295|g>>>18),g=_+(b^m&(v^b))+E[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=m+(_^v^b)+E[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=b+(m^_^v)+E[8]+2272392833&4294967295,b=m+(g<<11&4294967295|g>>>21),g=v+(b^m^_)+E[11]+1839030562&4294967295,v=b+(g<<16&4294967295|g>>>16),g=_+(v^b^m)+E[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^b)+E[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=b+(m^_^v)+E[4]+1272893353&4294967295,b=m+(g<<11&4294967295|g>>>21),g=v+(b^m^_)+E[7]+4139469664&4294967295,v=b+(g<<16&4294967295|g>>>16),g=_+(v^b^m)+E[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^b)+E[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=b+(m^_^v)+E[0]+3936430074&4294967295,b=m+(g<<11&4294967295|g>>>21),g=v+(b^m^_)+E[3]+3572445317&4294967295,v=b+(g<<16&4294967295|g>>>16),g=_+(v^b^m)+E[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(_^v^b)+E[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=b+(m^_^v)+E[12]+3873151461&4294967295,b=m+(g<<11&4294967295|g>>>21),g=v+(b^m^_)+E[15]+530742520&4294967295,v=b+(g<<16&4294967295|g>>>16),g=_+(v^b^m)+E[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=m+(v^(_|~b))+E[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=b+(_^(m|~v))+E[7]+1126891415&4294967295,b=m+(g<<10&4294967295|g>>>22),g=v+(m^(b|~_))+E[14]+2878612391&4294967295,v=b+(g<<15&4294967295|g>>>17),g=_+(b^(v|~m))+E[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~b))+E[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=b+(_^(m|~v))+E[3]+2399980690&4294967295,b=m+(g<<10&4294967295|g>>>22),g=v+(m^(b|~_))+E[10]+4293915773&4294967295,v=b+(g<<15&4294967295|g>>>17),g=_+(b^(v|~m))+E[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~b))+E[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=b+(_^(m|~v))+E[15]+4264355552&4294967295,b=m+(g<<10&4294967295|g>>>22),g=v+(m^(b|~_))+E[6]+2734768916&4294967295,v=b+(g<<15&4294967295|g>>>17),g=_+(b^(v|~m))+E[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=m+(v^(_|~b))+E[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=b+(_^(m|~v))+E[11]+3174756917&4294967295,b=m+(g<<10&4294967295|g>>>22),g=v+(m^(b|~_))+E[2]+718787259&4294967295,v=b+(g<<15&4294967295|g>>>17),g=_+(b^(v|~m))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+v&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.v=function(w,m){m===void 0&&(m=w.length);const _=m-this.blockSize,E=this.C;let v=this.h,b=0;for(;b<m;){if(v==0)for(;b<=_;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<m;)if(E[v++]=w.charCodeAt(b++),v==this.blockSize){i(this,E),v=0;break}}else for(;b<m;)if(E[v++]=w[b++],v==this.blockSize){i(this,E),v=0;break}}this.h=v,this.o+=m},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;m=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=m&255,m/=256;for(this.v(w),w=Array(16),m=0,_=0;_<4;++_)for(let E=0;E<32;E+=8)w[m++]=this.g[_]>>>E&255;return w};function o(w,m){var _=h;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;const _=[];let E=!0;for(let v=w.length-1;v>=0;v--){const b=w[v]|0;E&&b==m||(_[v]=b,E=!1)}this.g=_}var h={};function d(w){return-128<=w&&w<128?o(w,function(m){return new a([m|0],m<0?-1:0)}):new a([w|0],w<0?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return I;if(w<0)return O(f(-w));const m=[];let _=1;for(let E=0;w>=_;E++)m[E]=w/_|0,_*=4294967296;return new a(m,0)}function y(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return O(y(w.substring(1),m));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(m,8));let E=I;for(let b=0;b<w.length;b+=8){var v=Math.min(8,w.length-b);const g=parseInt(w.substring(b,b+v),m);v<8?(v=f(Math.pow(m,v)),E=E.j(v).add(f(g))):(E=E.j(_),E=E.add(f(g)))}return E}var I=d(0),A=d(1),C=d(16777216);n=a.prototype,n.m=function(){if(L(this))return-O(this).m();let w=0,m=1;for(let _=0;_<this.g.length;_++){const E=this.i(_);w+=(E>=0?E:4294967296+E)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(L(this))return"-"+O(this).toString(w);const m=f(Math.pow(w,6));var _=this;let E="";for(;;){const v=Ce(_,m).g;_=$(_,v.j(m));let b=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=v,k(_))return b+E;for(;b.length<6;)b="0"+b;E=b+E}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(let m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function L(w){return w.h==-1}n.l=function(w){return w=$(this,w),L(w)?-1:k(w)?0:1};function O(w){const m=w.g.length,_=[];for(let E=0;E<m;E++)_[E]=~w.g[E];return new a(_,~w.h).add(A)}n.abs=function(){return L(this)?O(this):this},n.add=function(w){const m=Math.max(this.g.length,w.g.length),_=[];let E=0;for(let v=0;v<=m;v++){let b=E+(this.i(v)&65535)+(w.i(v)&65535),g=(b>>>16)+(this.i(v)>>>16)+(w.i(v)>>>16);E=g>>>16,b&=65535,g&=65535,_[v]=g<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function $(w,m){return w.add(O(m))}n.j=function(w){if(k(this)||k(w))return I;if(L(this))return L(w)?O(this).j(O(w)):O(O(this).j(w));if(L(w))return O(this.j(O(w)));if(this.l(C)<0&&w.l(C)<0)return f(this.m()*w.m());const m=this.g.length+w.g.length,_=[];for(var E=0;E<2*m;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(let v=0;v<w.g.length;v++){const b=this.i(E)>>>16,g=this.i(E)&65535,pe=w.i(v)>>>16,Ke=w.i(v)&65535;_[2*E+2*v]+=g*Ke,W(_,2*E+2*v),_[2*E+2*v+1]+=b*Ke,W(_,2*E+2*v+1),_[2*E+2*v+1]+=g*pe,W(_,2*E+2*v+1),_[2*E+2*v+2]+=b*pe,W(_,2*E+2*v+2)}for(w=0;w<m;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=m;w<2*m;w++)_[w]=0;return new a(_,0)};function W(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function Z(w,m){this.g=w,this.h=m}function Ce(w,m){if(k(m))throw Error("division by zero");if(k(w))return new Z(I,I);if(L(w))return m=Ce(O(w),m),new Z(O(m.g),O(m.h));if(L(m))return m=Ce(w,O(m)),new Z(O(m.g),m.h);if(w.g.length>30){if(L(w)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var _=A,E=m;E.l(w)<=0;)_=ie(_),E=ie(E);var v=le(_,1),b=le(E,1);for(E=le(E,2),_=le(_,2);!k(E);){var g=b.add(E);g.l(w)<=0&&(v=v.add(_),b=g),E=le(E,1),_=le(_,1)}return m=$(w,v.j(m)),new Z(v,m)}for(v=I;w.l(m)>=0;){for(_=Math.max(1,Math.floor(w.m()/m.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),b=f(_),g=b.j(m);L(g)||g.l(w)>0;)_-=E,b=f(_),g=b.j(m);k(b)&&(b=A),v=v.add(b),w=$(w,g)}return new Z(v,w)}n.B=function(w){return Ce(this,w).h},n.and=function(w){const m=Math.max(this.g.length,w.g.length),_=[];for(let E=0;E<m;E++)_[E]=this.i(E)&w.i(E);return new a(_,this.h&w.h)},n.or=function(w){const m=Math.max(this.g.length,w.g.length),_=[];for(let E=0;E<m;E++)_[E]=this.i(E)|w.i(E);return new a(_,this.h|w.h)},n.xor=function(w){const m=Math.max(this.g.length,w.g.length),_=[];for(let E=0;E<m;E++)_[E]=this.i(E)^w.i(E);return new a(_,this.h^w.h)};function ie(w){const m=w.g.length+1,_=[];for(let E=0;E<m;E++)_[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(_,w.h)}function le(w,m){const _=m>>5;m%=32;const E=w.g.length-_,v=[];for(let b=0;b<E;b++)v[b]=m>0?w.i(b+_)>>>m|w.i(b+_+1)<<32-m:w.i(b+_);return new a(v,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=y,Cs=a}).apply(typeof ka<"u"?ka:typeof self<"u"?self:typeof window<"u"?window:{});var Er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gl,Vn,yl,Cr,us,_l,vl,wl;(function(){var n,e=Object.defineProperty;function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Er=="object"&&Er];for(var c=0;c<s.length;++c){var l=s[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var l=r;s=s.split(".");for(var p=0;p<s.length-1;p++){var T=s[p];if(!(T in l))break e;l=l[T]}s=s[s.length-1],p=l[s],c=c(p),c!=p&&c!=null&&e(l,s,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(c){var l=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&l.push([p,c[p]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function h(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function d(s,c,l){return s.call.apply(s.bind,arguments)}function f(s,c,l){return f=d,f.apply(null,arguments)}function y(s,c){var l=Array.prototype.slice.call(arguments,1);return function(){var p=l.slice();return p.push.apply(p,arguments),s.apply(this,p)}}function I(s,c){function l(){}l.prototype=c.prototype,s.Z=c.prototype,s.prototype=new l,s.prototype.constructor=s,s.Ob=function(p,T,S){for(var P=Array(arguments.length-2),M=2;M<arguments.length;M++)P[M-2]=arguments[M];return c.prototype[T].apply(p,P)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function C(s){const c=s.length;if(c>0){const l=Array(c);for(let p=0;p<c;p++)l[p]=s[p];return l}return[]}function k(s,c){for(let p=1;p<arguments.length;p++){const T=arguments[p];var l=typeof T;if(l=l!="object"?l:T?Array.isArray(T)?"array":l:"null",l=="array"||l=="object"&&typeof T.length=="number"){l=s.length||0;const S=T.length||0;s.length=l+S;for(let P=0;P<S;P++)s[l+P]=T[P]}else s.push(T)}}class L{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(s){a.setTimeout(()=>{throw s},0)}function $(){var s=w;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class W{constructor(){this.h=this.g=null}add(c,l){const p=Z.get();p.set(c,l),this.h?this.h.next=p:this.g=p,this.h=p}}var Z=new L(()=>new Ce,s=>s.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,le=!1,w=new W,m=()=>{const s=Promise.resolve(void 0);ie=()=>{s.then(_)}};function _(){for(var s;s=$();){try{s.h.call(s.g)}catch(l){O(l)}var c=Z;c.j(s),c.h<100&&(c.h++,s.next=c.g,c.g=s)}le=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};a.addEventListener("test",l,c),a.removeEventListener("test",l,c)}catch{}return s}();function g(s){return/^[\s\xa0]*$/.test(s)}function pe(s,c){v.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,c)}I(pe,v),pe.prototype.init=function(s,c){const l=this.type=s.type,p=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget,c||(l=="mouseover"?c=s.fromElement:l=="mouseout"&&(c=s.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&pe.Z.h.call(this)},pe.prototype.h=function(){pe.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Ke="closure_listenable_"+(Math.random()*1e6|0),wi=0;function G(s,c,l,p,T){this.listener=s,this.proxy=null,this.src=c,this.type=l,this.capture=!!p,this.ha=T,this.key=++wi,this.da=this.fa=!1}function Tt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Qe(s,c,l){for(const p in s)c.call(l,s[p],p,s)}function Sh(s,c){for(const l in s)c.call(void 0,s[l],l,s)}function go(s){const c={};for(const l in s)c[l]=s[l];return c}const yo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _o(s,c){let l,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(l in p)s[l]=p[l];for(let S=0;S<yo.length;S++)l=yo[S],Object.prototype.hasOwnProperty.call(p,l)&&(s[l]=p[l])}}function cr(s){this.src=s,this.g={},this.h=0}cr.prototype.add=function(s,c,l,p,T){const S=s.toString();s=this.g[S],s||(s=this.g[S]=[],this.h++);const P=Ei(s,c,p,T);return P>-1?(c=s[P],l||(c.fa=!1)):(c=new G(c,this.src,S,!!p,T),c.fa=l,s.push(c)),c};function Ii(s,c){const l=c.type;if(l in s.g){var p=s.g[l],T=Array.prototype.indexOf.call(p,c,void 0),S;(S=T>=0)&&Array.prototype.splice.call(p,T,1),S&&(Tt(c),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Ei(s,c,l,p){for(let T=0;T<s.length;++T){const S=s[T];if(!S.da&&S.listener==c&&S.capture==!!l&&S.ha==p)return T}return-1}var Ti="closure_lm_"+(Math.random()*1e6|0),bi={};function vo(s,c,l,p,T){if(Array.isArray(c)){for(let S=0;S<c.length;S++)vo(s,c[S],l,p,T);return null}return l=Eo(l),s&&s[Ke]?s.J(c,l,h(p)?!!p.capture:!1,T):xh(s,c,l,!1,p,T)}function xh(s,c,l,p,T,S){if(!c)throw Error("Invalid event type");const P=h(T)?!!T.capture:!!T;let M=Si(s);if(M||(s[Ti]=M=new cr(s)),l=M.add(c,l,p,P,S),l.proxy)return l;if(p=Rh(),l.proxy=p,p.src=s,p.listener=l,s.addEventListener)b||(T=P),T===void 0&&(T=!1),s.addEventListener(c.toString(),p,T);else if(s.attachEvent)s.attachEvent(Io(c.toString()),p);else if(s.addListener&&s.removeListener)s.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Rh(){function s(l){return c.call(s.src,s.listener,l)}const c=Ch;return s}function wo(s,c,l,p,T){if(Array.isArray(c))for(var S=0;S<c.length;S++)wo(s,c[S],l,p,T);else p=h(p)?!!p.capture:!!p,l=Eo(l),s&&s[Ke]?(s=s.i,S=String(c).toString(),S in s.g&&(c=s.g[S],l=Ei(c,l,p,T),l>-1&&(Tt(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete s.g[S],s.h--)))):s&&(s=Si(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Ei(c,l,p,T)),(l=s>-1?c[s]:null)&&Ai(l))}function Ai(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Ke])Ii(c.i,s);else{var l=s.type,p=s.proxy;c.removeEventListener?c.removeEventListener(l,p,s.capture):c.detachEvent?c.detachEvent(Io(l),p):c.addListener&&c.removeListener&&c.removeListener(p),(l=Si(c))?(Ii(l,s),l.h==0&&(l.src=null,c[Ti]=null)):Tt(s)}}}function Io(s){return s in bi?bi[s]:bi[s]="on"+s}function Ch(s,c){if(s.da)s=!0;else{c=new pe(c,this);const l=s.listener,p=s.ha||s.src;s.fa&&Ai(s),s=l.call(p,c)}return s}function Si(s){return s=s[Ti],s instanceof cr?s:null}var xi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Eo(s){return typeof s=="function"?s:(s[xi]||(s[xi]=function(c){return s.handleEvent(c)}),s[xi])}function me(){E.call(this),this.i=new cr(this),this.M=this,this.G=null}I(me,E),me.prototype[Ke]=!0,me.prototype.removeEventListener=function(s,c,l,p){wo(this,s,c,l,p)};function Ie(s,c){var l,p=s.G;if(p)for(l=[];p;p=p.G)l.push(p);if(s=s.M,p=c.type||c,typeof c=="string")c=new v(c,s);else if(c instanceof v)c.target=c.target||s;else{var T=c;c=new v(p,s),_o(c,T)}T=!0;let S,P;if(l)for(P=l.length-1;P>=0;P--)S=c.g=l[P],T=lr(S,p,!0,c)&&T;if(S=c.g=s,T=lr(S,p,!0,c)&&T,T=lr(S,p,!1,c)&&T,l)for(P=0;P<l.length;P++)S=c.g=l[P],T=lr(S,p,!1,c)&&T}me.prototype.N=function(){if(me.Z.N.call(this),this.i){var s=this.i;for(const c in s.g){const l=s.g[c];for(let p=0;p<l.length;p++)Tt(l[p]);delete s.g[c],s.h--}}this.G=null},me.prototype.J=function(s,c,l,p){return this.i.add(String(s),c,!1,l,p)},me.prototype.K=function(s,c,l,p){return this.i.add(String(s),c,!0,l,p)};function lr(s,c,l,p){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();let T=!0;for(let S=0;S<c.length;++S){const P=c[S];if(P&&!P.da&&P.capture==l){const M=P.listener,se=P.ha||P.src;P.fa&&Ii(s.i,P),T=M.call(se,p)!==!1&&T}}return T&&!p.defaultPrevented}function Ph(s,c){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=f(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(s,c||0)}function To(s){s.g=Ph(()=>{s.g=null,s.i&&(s.i=!1,To(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class kh extends E{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:To(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(s){E.call(this),this.h=s,this.g={}}I(gn,E);var bo=[];function Ao(s){Qe(s.g,function(c,l){this.g.hasOwnProperty(l)&&Ai(c)},s),s.g={}}gn.prototype.N=function(){gn.Z.N.call(this),Ao(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ri=a.JSON.stringify,Nh=a.JSON.parse,Dh=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function So(){}function xo(){}var yn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ci(){v.call(this,"d")}I(Ci,v);function Pi(){v.call(this,"c")}I(Pi,v);var bt={},Ro=null;function ur(){return Ro=Ro||new me}bt.Ia="serverreachability";function Co(s){v.call(this,bt.Ia,s)}I(Co,v);function _n(s){const c=ur();Ie(c,new Co(c))}bt.STAT_EVENT="statevent";function Po(s,c){v.call(this,bt.STAT_EVENT,s),this.stat=c}I(Po,v);function Ee(s){const c=ur();Ie(c,new Po(c,s))}bt.Ja="timingevent";function ko(s,c){v.call(this,bt.Ja,s),this.size=c}I(ko,v);function vn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},c)}function wn(){this.g=!0}wn.prototype.ua=function(){this.g=!1};function Oh(s,c,l,p,T,S){s.info(function(){if(s.g)if(S){var P="",M=S.split("&");for(let q=0;q<M.length;q++){var se=M[q].split("=");if(se.length>1){const oe=se[0];se=se[1];const Fe=oe.split("_");P=Fe.length>=2&&Fe[1]=="type"?P+(oe+"="+se+"&"):P+(oe+"=redacted&")}}}else P=null;else P=S;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+c+`
`+l+`
`+P})}function Vh(s,c,l,p,T,S,P){s.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+c+`
`+l+`
`+S+" "+P})}function Gt(s,c,l,p){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+jh(s,l)+(p?" "+p:"")})}function Lh(s,c){s.info(function(){return"TIMEOUT: "+c})}wn.prototype.info=function(){};function jh(s,c){if(!s.g)return c;if(!c)return null;try{const S=JSON.parse(c);if(S){for(s=0;s<S.length;s++)if(Array.isArray(S[s])){var l=S[s];if(!(l.length<2)){var p=l[1];if(Array.isArray(p)&&!(p.length<1)){var T=p[0];if(T!="noop"&&T!="stop"&&T!="close")for(let P=1;P<p.length;P++)p[P]=""}}}}return Ri(S)}catch{return c}}var hr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},No={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Do;function ki(){}I(ki,So),ki.prototype.g=function(){return new XMLHttpRequest},Do=new ki;function In(s){return encodeURIComponent(String(s))}function Mh(s){var c=1;s=s.split(":");const l=[];for(;c>0&&s.length;)l.push(s.shift()),c--;return s.length&&l.push(s.join(":")),l}function rt(s,c,l,p){this.j=s,this.i=c,this.l=l,this.S=p||1,this.V=new gn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Oo}function Oo(){this.i=null,this.g="",this.h=!1}var Vo={},Ni={};function Di(s,c,l){s.M=1,s.A=fr(Me(c)),s.u=l,s.R=!0,Lo(s,null)}function Lo(s,c){s.F=Date.now(),dr(s),s.B=Me(s.A);var l=s.B,p=s.S;Array.isArray(p)||(p=[String(p)]),Qo(l.i,"t",p),s.C=0,l=s.j.L,s.h=new Oo,s.g=fa(s.j,l?c:null,!s.u),s.P>0&&(s.O=new kh(f(s.Y,s,s.g),s.P)),c=s.V,l=s.g,p=s.ba;var T="readystatechange";Array.isArray(T)||(T&&(bo[0]=T.toString()),T=bo);for(let S=0;S<T.length;S++){const P=vo(l,T[S],p||c.handleEvent,!1,c.h||c);if(!P)break;c.g[P.key]=P}c=s.J?go(s.J):{},s.u?(s.v||(s.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,c)):(s.v="GET",s.g.ea(s.B,s.v,null,c)),_n(),Oh(s.i,s.v,s.B,s.l,s.S,s.u)}rt.prototype.ba=function(s){s=s.target;const c=this.O;c&&ot(s)==3?c.j():this.Y(s)},rt.prototype.Y=function(s){try{if(s==this.g)e:{const M=ot(this.g),se=this.g.ya(),q=this.g.ca();if(!(M<3)&&(M!=3||this.g&&(this.h.h||this.g.la()||na(this.g)))){this.K||M!=4||se==7||(se==8||q<=0?_n(3):_n(2)),Oi(this);var c=this.g.ca();this.X=c;var l=Fh(this);if(this.o=c==200,Vh(this.i,this.v,this.B,this.l,this.S,M,c),this.o){if(this.U&&!this.L){t:{if(this.g){var p,T=this.g;if((p=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(p)){var S=p;break t}}S=null}if(s=S)Gt(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Vi(this,s);else{this.o=!1,this.m=3,Ee(12),At(this),En(this);break e}}if(this.R){s=!0;let oe;for(;!this.K&&this.C<l.length;)if(oe=Uh(this,l),oe==Ni){M==4&&(this.m=4,Ee(14),s=!1),Gt(this.i,this.l,null,"[Incomplete Response]");break}else if(oe==Vo){this.m=4,Ee(15),Gt(this.i,this.l,l,"[Invalid Chunk]"),s=!1;break}else Gt(this.i,this.l,oe,null),Vi(this,oe);if(jo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),M!=4||l.length!=0||this.h.h||(this.m=1,Ee(16),s=!1),this.o=this.o&&s,!s)Gt(this.i,this.l,l,"[Invalid Chunked Response]"),At(this),En(this);else if(l.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),zi(P),P.P=!0,Ee(11))}}else Gt(this.i,this.l,l,null),Vi(this,l);M==4&&At(this),this.o&&!this.K&&(M==4?la(this.j,this):(this.o=!1,dr(this)))}else ed(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,Ee(12)):(this.m=0,Ee(13)),At(this),En(this)}}}catch{}finally{}};function Fh(s){if(!jo(s))return s.g.la();const c=na(s.g);if(c==="")return"";let l="";const p=c.length,T=ot(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return At(s),En(s),"";s.h.i=new a.TextDecoder}for(let S=0;S<p;S++)s.h.h=!0,l+=s.h.i.decode(c[S],{stream:!(T&&S==p-1)});return c.length=0,s.h.g+=l,s.C=0,s.h.g}function jo(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Uh(s,c){var l=s.C,p=c.indexOf(`
`,l);return p==-1?Ni:(l=Number(c.substring(l,p)),isNaN(l)?Vo:(p+=1,p+l>c.length?Ni:(c=c.slice(p,p+l),s.C=p+l,c)))}rt.prototype.cancel=function(){this.K=!0,At(this)};function dr(s){s.T=Date.now()+s.H,Mo(s,s.H)}function Mo(s,c){if(s.D!=null)throw Error("WatchDog timer not null");s.D=vn(f(s.aa,s),c)}function Oi(s){s.D&&(a.clearTimeout(s.D),s.D=null)}rt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(Lh(this.i,this.B),this.M!=2&&(_n(),Ee(17)),At(this),this.m=2,En(this)):Mo(this,this.T-s)};function En(s){s.j.I==0||s.K||la(s.j,s)}function At(s){Oi(s);var c=s.O;c&&typeof c.dispose=="function"&&c.dispose(),s.O=null,Ao(s.V),s.g&&(c=s.g,s.g=null,c.abort(),c.dispose())}function Vi(s,c){try{var l=s.j;if(l.I!=0&&(l.g==s||Li(l.h,s))){if(!s.L&&Li(l.h,s)&&l.I==3){try{var p=l.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!l.v){if(l.g)if(l.g.F+3e3<s.F)_r(l),gr(l);else break e;Wi(l),Ee(18)}}else l.xa=T[1],0<l.xa-l.K&&T[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=vn(f(l.Va,l),6e3));Bo(l.h)<=1&&l.ta&&(l.ta=void 0)}else xt(l,11)}else if((s.L||l.g==s)&&_r(l),!g(c))for(T=l.Ba.g.parse(c),c=0;c<T.length;c++){let q=T[c];const oe=q[0];if(!(oe<=l.K))if(l.K=oe,q=q[1],l.I==2)if(q[0]=="c"){l.M=q[1],l.ba=q[2];const Fe=q[3];Fe!=null&&(l.ka=Fe,l.j.info("VER="+l.ka));const Rt=q[4];Rt!=null&&(l.za=Rt,l.j.info("SVER="+l.za));const at=q[5];at!=null&&typeof at=="number"&&at>0&&(p=1.5*at,l.O=p,l.j.info("backChannelRequestTimeoutMs_="+p)),p=l;const ct=s.g;if(ct){const wr=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wr){var S=p.h;S.g||wr.indexOf("spdy")==-1&&wr.indexOf("quic")==-1&&wr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ji(S,S.h),S.h=null))}if(p.G){const $i=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;$i&&(p.wa=$i,Q(p.J,p.G,$i))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-s.F,l.j.info("Handshake RTT: "+l.T+"ms")),p=l;var P=s;if(p.na=da(p,p.L?p.ba:null,p.W),P.L){Wo(p.h,P);var M=P,se=p.O;se&&(M.H=se),M.D&&(Oi(M),dr(M)),p.g=P}else aa(p);l.i.length>0&&yr(l)}else q[0]!="stop"&&q[0]!="close"||xt(l,7);else l.I==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?xt(l,7):Bi(l):q[0]!="noop"&&l.l&&l.l.qa(q),l.A=0)}}_n(4)}catch{}}var Bh=class{constructor(s,c){this.g=s,this.map=c}};function Fo(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Uo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Bo(s){return s.h?1:s.g?s.g.size:0}function Li(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function ji(s,c){s.g?s.g.add(c):s.h=c}function Wo(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Fo.prototype.cancel=function(){if(this.i=zo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function zo(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const l of s.g.values())c=c.concat(l.G);return c}return C(s.i)}var $o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wh(s,c){if(s){s=s.split("&");for(let l=0;l<s.length;l++){const p=s[l].indexOf("=");let T,S=null;p>=0?(T=s[l].substring(0,p),S=s[l].substring(p+1)):T=s[l],c(T,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function it(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;s instanceof it?(this.l=s.l,Tn(this,s.j),this.o=s.o,this.g=s.g,bn(this,s.u),this.h=s.h,Mi(this,Jo(s.i)),this.m=s.m):s&&(c=String(s).match($o))?(this.l=!1,Tn(this,c[1]||"",!0),this.o=An(c[2]||""),this.g=An(c[3]||"",!0),bn(this,c[4]),this.h=An(c[5]||"",!0),Mi(this,c[6]||"",!0),this.m=An(c[7]||"")):(this.l=!1,this.i=new xn(null,this.l))}it.prototype.toString=function(){const s=[];var c=this.j;c&&s.push(Sn(c,Ho,!0),":");var l=this.g;return(l||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Sn(c,Ho,!0),"@"),s.push(In(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&s.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Sn(l,l.charAt(0)=="/"?Hh:$h,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Sn(l,qh)),s.join("")},it.prototype.resolve=function(s){const c=Me(this);let l=!!s.j;l?Tn(c,s.j):l=!!s.o,l?c.o=s.o:l=!!s.g,l?c.g=s.g:l=s.u!=null;var p=s.h;if(l)bn(c,s.u);else if(l=!!s.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var T=c.h.lastIndexOf("/");T!=-1&&(p=c.h.slice(0,T+1)+p)}if(T=p,T==".."||T==".")p="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){p=T.lastIndexOf("/",0)==0,T=T.split("/");const S=[];for(let P=0;P<T.length;){const M=T[P++];M=="."?p&&P==T.length&&S.push(""):M==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),p&&P==T.length&&S.push("")):(S.push(M),p=!0)}p=S.join("/")}else p=T}return l?c.h=p:l=s.i.toString()!=="",l?Mi(c,Jo(s.i)):l=!!s.m,l&&(c.m=s.m),c};function Me(s){return new it(s)}function Tn(s,c,l){s.j=l?An(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function bn(s,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);s.u=c}else s.u=null}function Mi(s,c,l){c instanceof xn?(s.i=c,Kh(s.i,s.l)):(l||(c=Sn(c,Gh)),s.i=new xn(c,s.l))}function Q(s,c,l){s.i.set(c,l)}function fr(s){return Q(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function An(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Sn(s,c,l){return typeof s=="string"?(s=encodeURI(s).replace(c,zh),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function zh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ho=/[#\/\?@]/g,$h=/[#\?:]/g,Hh=/[#\?]/g,Gh=/[#\?@]/g,qh=/#/g;function xn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function St(s){s.g||(s.g=new Map,s.h=0,s.i&&Wh(s.i,function(c,l){s.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=xn.prototype,n.add=function(s,c){St(this),this.i=null,s=qt(this,s);let l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(c),this.h+=1,this};function Go(s,c){St(s),c=qt(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function qo(s,c){return St(s),c=qt(s,c),s.g.has(c)}n.forEach=function(s,c){St(this),this.g.forEach(function(l,p){l.forEach(function(T){s.call(c,T,p,this)},this)},this)};function Ko(s,c){St(s);let l=[];if(typeof c=="string")qo(s,c)&&(l=l.concat(s.g.get(qt(s,c))));else for(s=Array.from(s.g.values()),c=0;c<s.length;c++)l=l.concat(s[c]);return l}n.set=function(s,c){return St(this),this.i=null,s=qt(this,s),qo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=Ko(this,s),s.length>0?String(s[0]):c):c};function Qo(s,c,l){Go(s,c),l.length>0&&(s.i=null,s.g.set(qt(s,c),C(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var l=c[p];const T=In(l);l=Ko(this,l);for(let S=0;S<l.length;S++){let P=T;l[S]!==""&&(P+="="+In(l[S])),s.push(P)}}return this.i=s.join("&")};function Jo(s){const c=new xn;return c.i=s.i,s.g&&(c.g=new Map(s.g),c.h=s.h),c}function qt(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Kh(s,c){c&&!s.j&&(St(s),s.i=null,s.g.forEach(function(l,p){const T=p.toLowerCase();p!=T&&(Go(this,p),Qo(this,T,l))},s)),s.j=c}function Qh(s,c){const l=new wn;if(a.Image){const p=new Image;p.onload=y(st,l,"TestLoadImage: loaded",!0,c,p),p.onerror=y(st,l,"TestLoadImage: error",!1,c,p),p.onabort=y(st,l,"TestLoadImage: abort",!1,c,p),p.ontimeout=y(st,l,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=s}else c(!1)}function Jh(s,c){const l=new wn,p=new AbortController,T=setTimeout(()=>{p.abort(),st(l,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:p.signal}).then(S=>{clearTimeout(T),S.ok?st(l,"TestPingServer: ok",!0,c):st(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),st(l,"TestPingServer: error",!1,c)})}function st(s,c,l,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(l)}catch{}}function Yh(){this.g=new Dh}function Fi(s){this.i=s.Sb||null,this.h=s.ab||!1}I(Fi,So),Fi.prototype.g=function(){return new pr(this.i,this.h)};function pr(s,c){me.call(this),this.H=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(pr,me),n=pr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=c,this.readyState=1,Cn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(c.body=s),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Yo(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Yo(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Rn(this):Cn(this),this.readyState==3&&Yo(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Rn(this))},n.Na=function(s){this.g&&(this.response=s,Rn(this))},n.ga=function(){this.g&&Rn(this)};function Rn(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Cn(s)}n.setRequestHeader=function(s,c){this.A.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=c.next();return s.join(`\r
`)};function Cn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Xo(s){let c="";return Qe(s,function(l,p){c+=p,c+=":",c+=l,c+=`\r
`}),c}function Ui(s,c,l){e:{for(p in l){var p=!1;break e}p=!0}p||(l=Xo(l),typeof s=="string"?l!=null&&In(l):Q(s,c,l))}function ee(s){me.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(ee,me);var Xh=/^https?$/i,Zh=["POST","PUT"];n=ee.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,c,l,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Do.g(),this.g.onreadystatechange=A(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(S){Zo(this,S);return}if(s=l||"",l=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)l.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())l.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(l.keys()).find(S=>S.toLowerCase()=="content-type"),T=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(Zh,c,void 0)>=0)||p||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,P]of l)this.g.setRequestHeader(S,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(S){Zo(this,S)}};function Zo(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.o=5,ea(s),mr(s)}function ea(s){s.A||(s.A=!0,Ie(s,"complete"),Ie(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,Ie(this,"complete"),Ie(this,"abort"),mr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mr(this,!0)),ee.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ta(this):this.Xa())},n.Xa=function(){ta(this)};function ta(s){if(s.h&&typeof o<"u"){if(s.v&&ot(s)==4)setTimeout(s.Ca.bind(s),0);else if(Ie(s,"readystatechange"),ot(s)==4){s.h=!1;try{const S=s.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var p;if(p=S===0){let P=String(s.D).match($o)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),p=!Xh.test(P?P.toLowerCase():"")}l=p}if(l)Ie(s,"complete"),Ie(s,"success");else{s.o=6;try{var T=ot(s)>2?s.g.statusText:""}catch{T=""}s.l=T+" ["+s.ca()+"]",ea(s)}}finally{mr(s)}}}}function mr(s,c){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const l=s.g;s.g=null,c||Ie(s,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ot(s){return s.g?s.g.readyState:0}n.ca=function(){try{return ot(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Nh(c)}};function na(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function ed(s){const c={};s=(s.g&&ot(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<s.length;p++){if(g(s[p]))continue;var l=Mh(s[p]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const S=c[T]||[];c[T]=S,S.push(l)}Sh(c,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pn(s,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||c}function ra(s){this.za=0,this.i=[],this.j=new wn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Pn("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Pn("baseRetryDelayMs",5e3,s),this.Za=Pn("retryDelaySeedMs",1e4,s),this.Ta=Pn("forwardChannelMaxRetries",2,s),this.va=Pn("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Fo(s&&s.concurrentRequestLimit),this.Ba=new Yh,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ra.prototype,n.ka=8,n.I=1,n.connect=function(s,c,l,p){Ee(0),this.W=s,this.H=c||{},l&&p!==void 0&&(this.H.OSID=l,this.H.OAID=p),this.F=this.X,this.J=da(this,null,this.W),yr(this)};function Bi(s){if(ia(s),s.I==3){var c=s.V++,l=Me(s.J);if(Q(l,"SID",s.M),Q(l,"RID",c),Q(l,"TYPE","terminate"),kn(s,l),c=new rt(s,s.j,c),c.M=2,c.A=fr(Me(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=c.A,l=!0),l||(c.g=fa(c.j,null),c.g.ea(c.A)),c.F=Date.now(),dr(c)}ha(s)}function gr(s){s.g&&(zi(s),s.g.cancel(),s.g=null)}function ia(s){gr(s),s.v&&(a.clearTimeout(s.v),s.v=null),_r(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function yr(s){if(!Uo(s.h)&&!s.m){s.m=!0;var c=s.Ea;ie||m(),le||(ie(),le=!0),w.add(c,s),s.D=0}}function td(s,c){return Bo(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=c.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=vn(f(s.Ea,s,c),ua(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const T=new rt(this,this.j,s);let S=this.o;if(this.U&&(S?(S=go(S),_o(S,this.U)):S=this.U),this.u!==null||this.R||(T.J=S,S=null),this.S)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var p=this.i[l];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=oa(this,T,c),l=Me(this.J),Q(l,"RID",s),Q(l,"CVER",22),this.G&&Q(l,"X-HTTP-Session-Id",this.G),kn(this,l),S&&(this.R?c="headers="+In(Xo(S))+"&"+c:this.u&&Ui(l,this.u,S)),ji(this.h,T),this.Ra&&Q(l,"TYPE","init"),this.S?(Q(l,"$req",c),Q(l,"SID","null"),T.U=!0,Di(T,l,null)):Di(T,l,c),this.I=2}}else this.I==3&&(s?sa(this,s):this.i.length==0||Uo(this.h)||sa(this))};function sa(s,c){var l;c?l=c.l:l=s.V++;const p=Me(s.J);Q(p,"SID",s.M),Q(p,"RID",l),Q(p,"AID",s.K),kn(s,p),s.u&&s.o&&Ui(p,s.u,s.o),l=new rt(s,s.j,l,s.D+1),s.u===null&&(l.J=s.o),c&&(s.i=c.G.concat(s.i)),c=oa(s,l,1e3),l.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),ji(s.h,l),Di(l,p,c)}function kn(s,c){s.H&&Qe(s.H,function(l,p){Q(c,p,l)}),s.l&&Qe({},function(l,p){Q(c,p,l)})}function oa(s,c,l){l=Math.min(s.i.length,l);const p=s.l?f(s.l.Ka,s.l,s):null;e:{var T=s.i;let M=-1;for(;;){const se=["count="+l];M==-1?l>0?(M=T[0].g,se.push("ofs="+M)):M=0:se.push("ofs="+M);let q=!0;for(let oe=0;oe<l;oe++){var S=T[oe].g;const Fe=T[oe].map;if(S-=M,S<0)M=Math.max(0,T[oe].g-100),q=!1;else try{S="req"+S+"_"||"";try{var P=Fe instanceof Map?Fe:Object.entries(Fe);for(const[Rt,at]of P){let ct=at;h(at)&&(ct=Ri(at)),se.push(S+Rt+"="+encodeURIComponent(ct))}}catch(Rt){throw se.push(S+"type="+encodeURIComponent("_badmap")),Rt}}catch{p&&p(Fe)}}if(q){P=se.join("&");break e}}P=void 0}return s=s.i.splice(0,l),c.G=s,P}function aa(s){if(!s.g&&!s.v){s.Y=1;var c=s.Da;ie||m(),le||(ie(),le=!0),w.add(c,s),s.A=0}}function Wi(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=vn(f(s.Da,s),ua(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,ca(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=vn(f(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ee(10),gr(this),ca(this))};function zi(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function ca(s){s.g=new rt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var c=Me(s.na);Q(c,"RID","rpc"),Q(c,"SID",s.M),Q(c,"AID",s.K),Q(c,"CI",s.F?"0":"1"),!s.F&&s.ia&&Q(c,"TO",s.ia),Q(c,"TYPE","xmlhttp"),kn(s,c),s.u&&s.o&&Ui(c,s.u,s.o),s.O&&(s.g.H=s.O);var l=s.g;s=s.ba,l.M=1,l.A=fr(Me(c)),l.u=null,l.R=!0,Lo(l,s)}n.Va=function(){this.C!=null&&(this.C=null,gr(this),Wi(this),Ee(19))};function _r(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function la(s,c){var l=null;if(s.g==c){_r(s),zi(s),s.g=null;var p=2}else if(Li(s.h,c))l=c.G,Wo(s.h,c),p=1;else return;if(s.I!=0){if(c.o)if(p==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var T=s.D;p=ur(),Ie(p,new ko(p,l)),yr(s)}else aa(s);else if(T=c.m,T==3||T==0&&c.X>0||!(p==1&&td(s,c)||p==2&&Wi(s)))switch(l&&l.length>0&&(c=s.h,c.i=c.i.concat(l)),T){case 1:xt(s,5);break;case 4:xt(s,10);break;case 3:xt(s,6);break;default:xt(s,2)}}}function ua(s,c){let l=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(l*=2),l*c}function xt(s,c){if(s.j.info("Error code "+c),c==2){var l=f(s.bb,s),p=s.Ua;const T=!p;p=new it(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Tn(p,"https"),fr(p),T?Qh(p.toString(),l):Jh(p.toString(),l)}else Ee(2);s.I=0,s.l&&s.l.pa(c),ha(s),ia(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Ee(2)):(this.j.info("Failed to ping google.com"),Ee(1))};function ha(s){if(s.I=0,s.ja=[],s.l){const c=zo(s.h);(c.length!=0||s.i.length!=0)&&(k(s.ja,c),k(s.ja,s.i),s.h.i.length=0,C(s.i),s.i.length=0),s.l.oa()}}function da(s,c,l){var p=l instanceof it?Me(l):new it(l);if(p.g!="")c&&(p.g=c+"."+p.g),bn(p,p.u);else{var T=a.location;p=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;const S=new it(null);p&&Tn(S,p),c&&(S.g=c),T&&bn(S,T),l&&(S.h=l),p=S}return l=s.G,c=s.wa,l&&c&&Q(p,l,c),Q(p,"VER",s.ka),kn(s,p),p}function fa(s,c,l){if(c&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Aa&&!s.ma?new ee(new Fi({ab:l})):new ee(s.ma),c.Fa(s.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}n=pa.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function vr(){}vr.prototype.g=function(s,c){return new xe(s,c)};function xe(s,c){me.call(this),this.g=new ra(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(s?s["X-WebChannel-Client-Profile"]=c.sa:s={"X-WebChannel-Client-Profile":c.sa}),this.g.U=s,(s=c&&c.Qb)&&!g(s)&&(this.g.u=s),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!g(c)&&(this.g.G=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Kt(this)}I(xe,me),xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xe.prototype.close=function(){Bi(this.g)},xe.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.v&&(l={},l.__data__=Ri(s),s=l);c.i.push(new Bh(c.Ya++,s)),c.I==3&&yr(c)},xe.prototype.N=function(){this.g.l=null,delete this.j,Bi(this.g),delete this.g,xe.Z.N.call(this)};function ma(s){Ci.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const l in c){s=l;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}I(ma,Ci);function ga(){Pi.call(this),this.status=1}I(ga,Pi);function Kt(s){this.g=s}I(Kt,pa),Kt.prototype.ra=function(){Ie(this.g,"a")},Kt.prototype.qa=function(s){Ie(this.g,new ma(s))},Kt.prototype.pa=function(s){Ie(this.g,new ga)},Kt.prototype.oa=function(){Ie(this.g,"b")},vr.prototype.createWebChannel=vr.prototype.g,xe.prototype.send=xe.prototype.o,xe.prototype.open=xe.prototype.m,xe.prototype.close=xe.prototype.close,wl=function(){return new vr},vl=function(){return ur()},_l=bt,us={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hr.NO_ERROR=0,hr.TIMEOUT=8,hr.HTTP_ERROR=6,Cr=hr,No.COMPLETE="complete",yl=No,xo.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",me.prototype.listen=me.prototype.J,Vn=xo,ee.prototype.listenOnce=ee.prototype.K,ee.prototype.getLastError=ee.prototype.Ha,ee.prototype.getLastErrorCode=ee.prototype.ya,ee.prototype.getStatus=ee.prototype.ca,ee.prototype.getResponseJson=ee.prototype.La,ee.prototype.getResponseText=ee.prototype.la,ee.prototype.send=ee.prototype.ea,ee.prototype.setWithCredentials=ee.prototype.Fa,gl=ee}).apply(typeof Er<"u"?Er:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let fn="12.12.0";function ep(n){fn=n}/**
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
 */const Vt=new ai("@firebase/firestore");function Qt(){return Vt.logLevel}function N(n,...e){if(Vt.logLevel<=B.DEBUG){const t=e.map(Ps);Vt.debug(`Firestore (${fn}): ${n}`,...t)}}function Lt(n,...e){if(Vt.logLevel<=B.ERROR){const t=e.map(Ps);Vt.error(`Firestore (${fn}): ${n}`,...t)}}function zn(n,...e){if(Vt.logLevel<=B.WARN){const t=e.map(Ps);Vt.warn(`Firestore (${fn}): ${n}`,...t)}}function Ps(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function F(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Il(n,r,t)}function Il(n,e,t){let r=`FIRESTORE (${fn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Lt(r),new Error(r)}function te(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Il(e,i,r)}function K(n,e){return n}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends je{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class El{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ye.UNAUTHENTICATED))}shutdown(){}}class np{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rp{constructor(e){this.t=e,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,t(d)):Promise.resolve();let o=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Nt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const d=o;e.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},h=d=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>h(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?h(d):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Nt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string",31837,{l:r}),new El(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new ye(e)}}class ip{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class sp{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ip(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Na{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class op{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Be(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){te(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Na(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Na(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ap(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ks{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=ap(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function hs(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),o=e.charAt(r);if(i!==o)return Ji(i)===Ji(o)?H(i,o):Ji(i)?1:-1}return H(n.length,e.length)}const cp=55296,lp=57343;function Ji(n){const e=n.charCodeAt(0);return e>=cp&&e<=lp}function on(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const Da="__name__";class Ue{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&F(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ue.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ue?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Ue.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return H(e.length,t.length)}static compareSegments(e,t){const r=Ue.isNumericId(e),i=Ue.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ue.extractNumericId(e).compare(Ue.extractNumericId(t)):hs(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cs.fromString(e.substring(4,e.length-2))}}class X extends Ue{construct(e,t,r){return new X(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new X(t)}static emptyPath(){return new X([])}}const up=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class de extends Ue{construct(e,t,r){return new de(e,t,r)}static isValidIdentifier(e){return up.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),de.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Da}static keyField(){return new de([Da])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new D(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const h=e[i];if(h==="\\"){if(i+1===e.length)throw new D(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new D(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,i+=2}else h==="`"?(a=!a,i++):h!=="."||a?(r+=h,i++):(o(),i++)}if(o(),a)throw new D(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new de(t)}static emptyPath(){return new de([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(X.fromString(e))}static fromName(e){return new j(X.fromString(e).popFirst(5))}static empty(){return new j(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new X(e.slice()))}}/**
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
 */function Tl(n,e,t){if(!t)throw new D(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hp(n,e,t,r){if(e===!0&&r===!0)throw new D(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Oa(n){if(!j.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Va(n){if(j.isDocumentKey(n))throw new D(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bl(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ns(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function Al(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ns(n);throw new D(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function re(n,e){const t={typeString:n};return e&&(t.value=e),t}function Zn(n,e){if(!bl(n))throw new D(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new D(R.INVALID_ARGUMENT,t);return!0}/**
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
 */const La=-62135596800,ja=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*ja);return new Y(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<La)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ja}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zn(e,Y._jsonSchema))return new Y(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-La;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:re("string",Y._jsonSchemaVersion),seconds:re("number"),nanoseconds:re("number")};/**
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
 */const $n=-1;function dp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Y(t+1,0):new Y(t,r));return new vt(i,j.empty(),e)}function fp(n){return new vt(n.readTime,n.key,$n)}class vt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new vt(J.min(),j.empty(),$n)}static max(){return new vt(J.max(),j.empty(),$n)}}function pp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
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
 */const mp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ds(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==mp)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,r)=>{t(e)})}static reject(e){return new x((t,r)=>{r(e)})}static waitFor(e){return new x((t,r)=>{let i=0,o=0,a=!1;e.forEach(h=>{++i,h.next(()=>{++o,a&&o===i&&t()},d=>r(d))}),a=!0,o===i&&t()})}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next(i=>i?x.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new x((r,i)=>{const o=e.length,a=new Array(o);let h=0;for(let d=0;d<o;d++){const f=d;t(e[f]).next(y=>{a[f]=y,++h,h===o&&r(a)},y=>i(y))}})}static doWhile(e,t){return new x((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function yp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function er(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Os{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Os.ce=-1;/**
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
 */const Vs=-1;function Ls(n){return n==null}function Ur(n){return n===0&&1/n==-1/0}function _p(n){return typeof n=="number"&&Number.isInteger(n)&&!Ur(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Sl="";function vp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ma(e)),e=wp(n.get(t),e);return Ma(e)}function wp(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case Sl:t+="";break;default:t+=o}}return t}function Ma(n){return n+Sl+""}/**
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
 */function Fa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function pn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Se{constructor(e,t){this.comparator=e,this.root=t||ue.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tr(this.root,e,this.comparator,!0)}}class Tr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ue{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??ue.RED,this.left=i??ue.EMPTY,this.right=o??ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new ue(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1;ue.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ua(this.data.getIterator())}getIteratorFrom(e){return new Ua(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class Ua{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Oe{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new Oe([])}unionWith(e){let t=new fe(de.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Oe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return on(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Ip extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ip("Invalid base64 string: "+o):o}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const Ep=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(te(!!n,39018),typeof n=="string"){let e=0;const t=Ep.exec(n);if(te(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
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
 */const Rl="server_timestamp",Cl="__type__",Pl="__previous_value__",kl="__local_write_time__";function js(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Cl])==null?void 0:r.stringValue)===Rl}function Ms(n){const e=n.mapValue.fields[Pl];return js(e)?Ms(e):e}function Br(n){const e=jt(n.mapValue.fields[kl].timestampValue);return new Y(e.seconds,e.nanos)}/**
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
 */class Tp{constructor(e,t,r,i,o,a,h,d,f,y,I){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=y,this.apiKey=I}}const Wr="(default)";class zr{constructor(e,t){this.projectId=e,this.database=t||Wr}static empty(){return new zr("","")}get isDefaultDatabase(){return this.database===Wr}isEqual(e){return e instanceof zr&&e.projectId===this.projectId&&e.database===this.database}}function bp(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new D(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zr(n.options.projectId,e)}/**
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
 */const Nl="__type__",Ap="__max__",br={mapValue:{}},Dl="__vector__",ds="value";function Mt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?js(n)?4:xp(n)?9007199254740991:Sp(n)?10:11:F(28295,{value:n})}function qe(n,e){if(n===e)return!0;const t=Mt(n);if(t!==Mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Br(n).isEqual(Br(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=jt(i.timestampValue),h=jt(o.timestampValue);return a.seconds===h.seconds&&a.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return an(i.bytesValue).isEqual(an(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return he(i.geoPointValue.latitude)===he(o.geoPointValue.latitude)&&he(i.geoPointValue.longitude)===he(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return he(i.integerValue)===he(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=he(i.doubleValue),h=he(o.doubleValue);return a===h?Ur(a)===Ur(h):isNaN(a)&&isNaN(h)}return!1}(n,e);case 9:return on(n.arrayValue.values||[],e.arrayValue.values||[],qe);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},h=o.mapValue.fields||{};if(Fa(a)!==Fa(h))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(h[d]===void 0||!qe(a[d],h[d])))return!1;return!0}(n,e);default:return F(52216,{left:n})}}function Hn(n,e){return(n.values||[]).find(t=>qe(t,e))!==void 0}function cn(n,e){if(n===e)return 0;const t=Mt(n),r=Mt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(o,a){const h=he(o.integerValue||o.doubleValue),d=he(a.integerValue||a.doubleValue);return h<d?-1:h>d?1:h===d?0:isNaN(h)?isNaN(d)?0:-1:1}(n,e);case 3:return Ba(n.timestampValue,e.timestampValue);case 4:return Ba(Br(n),Br(e));case 5:return hs(n.stringValue,e.stringValue);case 6:return function(o,a){const h=an(o),d=an(a);return h.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const h=o.split("/"),d=a.split("/");for(let f=0;f<h.length&&f<d.length;f++){const y=H(h[f],d[f]);if(y!==0)return y}return H(h.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const h=H(he(o.latitude),he(a.latitude));return h!==0?h:H(he(o.longitude),he(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Wa(n.arrayValue,e.arrayValue);case 10:return function(o,a){var A,C,k,L;const h=o.fields||{},d=a.fields||{},f=(A=h[ds])==null?void 0:A.arrayValue,y=(C=d[ds])==null?void 0:C.arrayValue,I=H(((k=f==null?void 0:f.values)==null?void 0:k.length)||0,((L=y==null?void 0:y.values)==null?void 0:L.length)||0);return I!==0?I:Wa(f,y)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===br.mapValue&&a===br.mapValue)return 0;if(o===br.mapValue)return 1;if(a===br.mapValue)return-1;const h=o.fields||{},d=Object.keys(h),f=a.fields||{},y=Object.keys(f);d.sort(),y.sort();for(let I=0;I<d.length&&I<y.length;++I){const A=hs(d[I],y[I]);if(A!==0)return A;const C=cn(h[d[I]],f[y[I]]);if(C!==0)return C}return H(d.length,y.length)}(n.mapValue,e.mapValue);default:throw F(23264,{he:t})}}function Ba(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=jt(n),r=jt(e),i=H(t.seconds,r.seconds);return i!==0?i:H(t.nanos,r.nanos)}function Wa(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=cn(t[i],r[i]);if(o)return o}return H(t.length,r.length)}function ln(n){return fs(n)}function fs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=jt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return an(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return j.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=fs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${fs(t.fields[a])}`;return i+"}"}(n.mapValue):F(61005,{value:n})}function Pr(n){switch(Mt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ms(n);return e?16+Pr(e):16;case 5:return 2*n.stringValue.length;case 6:return an(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Pr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return pn(r.fields,(o,a)=>{i+=o.length+Pr(a)}),i}(n.mapValue);default:throw F(13486,{value:n})}}function ps(n){return!!n&&"integerValue"in n}function Fs(n){return!!n&&"arrayValue"in n}function kr(n){return!!n&&"mapValue"in n}function Sp(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Nl])==null?void 0:r.stringValue)===Dl}function Ln(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return pn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ln(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ln(n.arrayValue.values[t]);return e}return{...n}}function xp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ap}/**
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
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!kr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ln(t)}setAll(e){let t=de.emptyPath(),r={},i=[];e.forEach((a,h)=>{if(!t.isImmediateParentOf(h)){const d=this.getFieldsMap(t);this.applyChanges(d,r,i),r={},i=[],t=h.popLast()}a?r[h.lastSegment()]=Ln(a):i.push(h.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());kr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];kr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){pn(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Ne(Ln(this.value))}}function Ol(n){const e=[];return pn(n.fields,(t,r)=>{const i=new de([t]);if(kr(r)){const o=Ol(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new Oe(e)}/**
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
 */class $r{constructor(e,t){this.position=e,this.inclusive=t}}function za(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=j.comparator(j.fromName(a.referenceValue),t.key):r=cn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function $a(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Hr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rp(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Vl{}class ce extends Vl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Pp(e,t,r):t==="array-contains"?new Dp(e,r):t==="in"?new Op(e,r):t==="not-in"?new Vp(e,r):t==="array-contains-any"?new Lp(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new kp(e,r):new Np(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cn(t,this.value)):t!==null&&Mt(this.value)===Mt(t)&&this.matchesComparison(cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wt extends Vl{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new wt(e,t)}matches(e){return Ll(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ll(n){return n.op==="and"}function jl(n){return Cp(n)&&Ll(n)}function Cp(n){for(const e of n.filters)if(e instanceof wt)return!1;return!0}function ms(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+ln(n.value);if(jl(n))return n.filters.map(e=>ms(e)).join(",");{const e=n.filters.map(t=>ms(t)).join(",");return`${n.op}(${e})`}}function Ml(n,e){return n instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&qe(r.value,i.value)}(n,e):n instanceof wt?function(r,i){return i instanceof wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,h)=>o&&Ml(a,i.filters[h]),!0):!1}(n,e):void F(19439)}function Fl(n){return n instanceof ce?function(t){return`${t.field.canonicalString()} ${t.op} ${ln(t.value)}`}(n):n instanceof wt?function(t){return t.op.toString()+" {"+t.getFilters().map(Fl).join(" ,")+"}"}(n):"Filter"}class Pp extends ce{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class kp extends ce{constructor(e,t){super(e,"in",t),this.keys=Ul("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Np extends ce{constructor(e,t){super(e,"not-in",t),this.keys=Ul("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ul(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>j.fromName(r.referenceValue))}class Dp extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fs(t)&&Hn(t.arrayValue,this.value)}}class Op extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Hn(this.value.arrayValue,t)}}class Vp extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Hn(this.value.arrayValue,t)}}class Lp extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Hn(this.value.arrayValue,r))}}/**
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
 */class jp{constructor(e,t=null,r=[],i=[],o=null,a=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=h,this.Te=null}}function Ha(n,e=null,t=[],r=[],i=null,o=null,a=null){return new jp(n,e,t,r,i,o,a)}function Us(n){const e=K(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ms(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ls(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ln(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ln(r)).join(",")),e.Te=t}return e.Te}function Bs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Rp(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ml(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$a(n.startAt,e.startAt)&&$a(n.endAt,e.endAt)}/**
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
 */class ci{constructor(e,t=null,r=[],i=[],o=null,a="F",h=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=h,this.endAt=d,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Mp(n,e,t,r,i,o,a,h){return new ci(n,e,t,r,i,o,a,h)}function Fp(n){return new ci(n)}function Ga(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Up(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Bp(n){return n.collectionGroup!==null}function jn(n){const e=K(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let h=new fe(de.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(h=h.add(f.field))})}),h})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new Hr(o,r))}),t.has(de.keyField().canonicalString())||e.Ee.push(new Hr(de.keyField(),r))}return e.Ee}function Dt(n){const e=K(n);return e.Ie||(e.Ie=Wp(e,jn(n))),e.Ie}function Wp(n,e){if(n.limitType==="F")return Ha(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Hr(i.field,o)});const t=n.endAt?new $r(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new $r(n.startAt.position,n.startAt.inclusive):null;return Ha(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function gs(n,e,t){return new ci(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bl(n,e){return Bs(Dt(n),Dt(e))&&n.limitType===e.limitType}function Wl(n){return`${Us(Dt(n))}|lt:${n.limitType}`}function Nn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Fl(i)).join(", ")}]`),Ls(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>ln(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>ln(i)).join(",")),`Target(${r})`}(Dt(n))}; limitType=${n.limitType})`}function Ws(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):j.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of jn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,h,d){const f=za(a,h,d);return a.inclusive?f<=0:f<0}(r.startAt,jn(r),i)||r.endAt&&!function(a,h,d){const f=za(a,h,d);return a.inclusive?f>=0:f>0}(r.endAt,jn(r),i))}(n,e)}function zp(n){return(e,t)=>{let r=!1;for(const i of jn(n)){const o=$p(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function $p(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):function(o,a,h){const d=a.data.field(o),f=h.data.field(o);return d!==null&&f!==null?cn(d,f):F(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
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
 */class $t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){pn(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return xl(this.inner)}size(){return this.innerSize}}/**
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
 */const Hp=new Se(j.comparator);function Gr(){return Hp}const zl=new Se(j.comparator);function Ar(...n){let e=zl;for(const t of n)e=e.insert(t.key,t);return e}function $l(n){let e=zl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Pt(){return Mn()}function Hl(){return Mn()}function Mn(){return new $t(n=>n.toString(),(n,e)=>n.isEqual(e))}const Gp=new Se(j.comparator),qp=new fe(j.comparator);function _e(...n){let e=qp;for(const t of n)e=e.add(t);return e}const Kp=new fe(H);function Qp(){return Kp}/**
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
 */function zs(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ur(e)?"-0":e}}function Gl(n){return{integerValue:""+n}}function Jp(n,e){return _p(e)?Gl(e):zs(n,e)}/**
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
 */class li{constructor(){this._=void 0}}function Yp(n,e,t){return n instanceof Gn?function(i,o){const a={fields:{[Cl]:{stringValue:Rl},[kl]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&js(o)&&(o=Ms(o)),o&&(a.fields[Pl]=o),{mapValue:a}}(t,e):n instanceof qn?Kl(n,e):n instanceof Kn?Ql(n,e):function(i,o){const a=ql(i,o),h=qa(a)+qa(i.Ae);return ps(a)&&ps(i.Ae)?Gl(h):zs(i.serializer,h)}(n,e)}function Xp(n,e,t){return n instanceof qn?Kl(n,e):n instanceof Kn?Ql(n,e):t}function ql(n,e){return n instanceof qr?function(r){return ps(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Gn extends li{}class qn extends li{constructor(e){super(),this.elements=e}}function Kl(n,e){const t=Jl(e);for(const r of n.elements)t.some(i=>qe(i,r))||t.push(r);return{arrayValue:{values:t}}}class Kn extends li{constructor(e){super(),this.elements=e}}function Ql(n,e){let t=Jl(e);for(const r of n.elements)t=t.filter(i=>!qe(i,r));return{arrayValue:{values:t}}}class qr extends li{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function qa(n){return he(n.integerValue||n.doubleValue)}function Jl(n){return Fs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Zp{constructor(e,t){this.field=e,this.transform=t}}function em(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof qn&&i instanceof qn||r instanceof Kn&&i instanceof Kn?on(r.elements,i.elements,qe):r instanceof qr&&i instanceof qr?qe(r.Ae,i.Ae):r instanceof Gn&&i instanceof Gn}(n.transform,e.transform)}class tm{constructor(e,t){this.version=e,this.transformResults=t}}class Xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xe}static exists(e){return new Xe(void 0,e)}static updateTime(e){return new Xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ui{}function Yl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Zl(n.key,Xe.none()):new tr(n.key,n.data,Xe.none());{const t=n.data,r=Ne.empty();let i=new fe(de.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Ht(n.key,r,new Oe(i.toArray()),Xe.none())}}function nm(n,e,t){n instanceof tr?function(i,o,a){const h=i.value.clone(),d=Qa(i.fieldTransforms,o,a.transformResults);h.setAll(d),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):n instanceof Ht?function(i,o,a){if(!Nr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const h=Qa(i.fieldTransforms,o,a.transformResults),d=o.data;d.setAll(Xl(i)),d.setAll(h),o.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Fn(n,e,t,r){return n instanceof tr?function(o,a,h,d){if(!Nr(o.precondition,a))return h;const f=o.value.clone(),y=Ja(o.fieldTransforms,d,a);return f.setAll(y),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ht?function(o,a,h,d){if(!Nr(o.precondition,a))return h;const f=Ja(o.fieldTransforms,d,a),y=a.data;return y.setAll(Xl(o)),y.setAll(f),a.convertToFoundDocument(a.version,y).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,r):function(o,a,h){return Nr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):h}(n,e,t)}function rm(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=ql(r.transform,i||null);o!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,o))}return t||null}function Ka(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&on(r,i,(o,a)=>em(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class tr extends ui{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ht extends ui{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Xl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Qa(n,e,t){const r=new Map;te(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,h=e.data.field(o.field);r.set(o.field,Xp(a,h,t[i]))}return r}function Ja(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,Yp(o,a,e))}return r}class Zl extends ui{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class im extends ui{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sm{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&nm(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Fn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Fn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Hl();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let h=this.applyToLocalView(a,o.mutatedFields);h=t.has(i.key)?null:h;const d=Yl(a,h);d!==null&&r.set(i.key,d),a.isValidDocument()||a.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),_e())}isEqual(e){return this.batchId===e.batchId&&on(this.mutations,e.mutations,(t,r)=>Ka(t,r))&&on(this.baseMutations,e.baseMutations,(t,r)=>Ka(t,r))}}class $s{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){te(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Gp}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new $s(e,t,r,i)}}/**
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
 */class om{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ne,z;function am(n){switch(n){case R.OK:return F(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function cm(n){if(n===void 0)return Lt("GRPC error has no .code"),R.UNKNOWN;switch(n){case ne.OK:return R.OK;case ne.CANCELLED:return R.CANCELLED;case ne.UNKNOWN:return R.UNKNOWN;case ne.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ne.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ne.INTERNAL:return R.INTERNAL;case ne.UNAVAILABLE:return R.UNAVAILABLE;case ne.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ne.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ne.NOT_FOUND:return R.NOT_FOUND;case ne.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ne.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ne.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ne.ABORTED:return R.ABORTED;case ne.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ne.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ne.DATA_LOSS:return R.DATA_LOSS;default:return F(39323,{code:n})}}(z=ne||(ne={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Cs([4294967295,4294967295],0);class lm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ys(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function um(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function hm(n,e){return ys(n,e.toTimestamp())}function Xt(n){return te(!!n,49232),J.fromTimestamp(function(t){const r=jt(t);return new Y(r.seconds,r.nanos)}(n))}function eu(n,e){return _s(n,e).canonicalString()}function _s(n,e){const t=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function dm(n){const e=X.fromString(n);return te(wm(e),10190,{key:e.toString()}),e}function vs(n,e){return eu(n.databaseId,e.path)}function fm(n){const e=dm(n);return e.length===4?X.emptyPath():mm(e)}function pm(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mm(n){return te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ya(n,e,t){return{name:vs(n,e),fields:t.value.mapValue.fields}}function gm(n,e){let t;if(e instanceof tr)t={update:Ya(n,e.key,e.value)};else if(e instanceof Zl)t={delete:vs(n,e.key)};else if(e instanceof Ht)t={update:Ya(n,e.key,e.data),updateMask:vm(e.fieldMask)};else{if(!(e instanceof im))return F(16599,{dt:e.type});t={verify:vs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const h=a.transform;if(h instanceof Gn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof qn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Kn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof qr)return{fieldPath:a.field.canonicalString(),increment:h.Ae};throw F(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:hm(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)}(n,e.precondition)),t}function ym(n,e){return n&&n.length>0?(te(e!==void 0,14353),n.map(t=>function(i,o){let a=i.updateTime?Xt(i.updateTime):Xt(o);return a.isEqual(J.min())&&(a=Xt(o)),new tm(a,i.transformResults||[])}(t,e))):[]}function _m(n){let e=fm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){te(r===1,65062);const y=t.from[0];y.allDescendants?i=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(I){const A=tu(I);return A instanceof wt&&jl(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(A=>function(k){return new Hr(Jt(k.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(A))}(t.orderBy));let h=null;t.limit&&(h=function(I){let A;return A=typeof I=="object"?I.value:I,Ls(A)?null:A}(t.limit));let d=null;t.startAt&&(d=function(I){const A=!!I.before,C=I.values||[];return new $r(C,A)}(t.startAt));let f=null;return t.endAt&&(f=function(I){const A=!I.before,C=I.values||[];return new $r(C,A)}(t.endAt)),Mp(e,i,a,o,h,"F",d,f)}function tu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Jt(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Jt(t.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Jt(t.unaryFilter.field);return ce.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Jt(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(t){return ce.create(Jt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return wt.create(t.compositeFilter.filters.map(r=>tu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(n):F(30097,{filter:n})}function Jt(n){return de.fromServerFormat(n.fieldPath)}function vm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function wm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function nu(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Im{constructor(e){this.yt=e}}function Em(n){const e=_m({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?gs(e,e.limit,"L"):e}/**
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
 */class Tm{constructor(){this.bn=new bm}addToCollectionParentIndex(e,t){return this.bn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(vt.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(vt.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class bm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new fe(X.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new fe(X.comparator)).toArray()}}/**
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
 */const Xa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ru=41943040;class be{static withCacheSize(e){return new be(e,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */be.DEFAULT_COLLECTION_PERCENTILE=10,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,be.DEFAULT=new be(ru,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),be.DISABLED=new be(-1,0,0);/**
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
 */class un{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new un(0)}static ar(){return new un(-1)}}/**
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
 */const Za="LruGarbageCollector",Am=1048576;function ec([n,e],[t,r]){const i=H(n,t);return i===0?H(e,r):i}class Sm{constructor(e){this.Pr=e,this.buffer=new fe(ec),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ec(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xm{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){N(Za,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){er(t)?N(Za,"Ignoring IndexedDB error during garbage collection: ",t):await Ds(t)}await this.Ar(3e5)})}}class Rm{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return x.resolve(Os.ce);const r=new Sm(t);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Xa)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xa):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,i,o,a,h,d,f;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,a=Date.now(),this.nthSequenceNumber(e,i))).next(I=>(r=I,h=Date.now(),this.removeTargets(e,r,t))).next(I=>(o=I,d=Date.now(),this.removeOrphanedDocuments(e,r))).next(I=>(f=Date.now(),Qt()<=B.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-y}ms
	Determined least recently used ${i} in `+(h-a)+`ms
	Removed ${o} targets in `+(d-h)+`ms
	Removed ${I} documents in `+(f-d)+`ms
Total Duration: ${f-y}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I})))}}function Cm(n,e){return new Rm(n,e)}/**
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
 */class Pm{constructor(){this.changes=new $t(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class km{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Nm{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Fn(r.mutation,i,Oe.empty(),Y.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,t,r=_e()){const i=Pt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Ar();return o.forEach((h,d)=>{a=a.insert(h,d.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Pt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,_e()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,h)=>{t.set(a,h)})})}computeViews(e,t,r,i){let o=Gr();const a=Mn(),h=function(){return Mn()}();return t.forEach((d,f)=>{const y=r.get(f.key);i.has(f.key)&&(y===void 0||y.mutation instanceof Ht)?o=o.insert(f.key,f):y!==void 0?(a.set(f.key,y.mutation.getFieldMask()),Fn(y.mutation,f,y.mutation.getFieldMask(),Y.now())):a.set(f.key,Oe.empty())}),this.recalculateAndSaveOverlays(e,o).next(d=>(d.forEach((f,y)=>a.set(f,y)),t.forEach((f,y)=>h.set(f,new km(y,a.get(f)??null))),h))}recalculateAndSaveOverlays(e,t){const r=Mn();let i=new Se((a,h)=>a-h),o=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const h of a)h.keys().forEach(d=>{const f=t.get(d);if(f===null)return;let y=r.get(d)||Oe.empty();y=h.applyToLocalView(f,y),r.set(d,y);const I=(i.get(h.batchId)||_e()).add(d);i=i.insert(h.batchId,I)})}).next(()=>{const a=[],h=i.getReverseIterator();for(;h.hasNext();){const d=h.getNext(),f=d.key,y=d.value,I=Hl();y.forEach(A=>{if(!o.has(A)){const C=Yl(t.get(A),r.get(A));C!==null&&I.set(A,C),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,I))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return Up(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Bp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):x.resolve(Pt());let h=$n,d=o;return a.next(f=>x.forEach(f,(y,I)=>(h<I.largestBatchId&&(h=I.largestBatchId),o.get(y)?x.resolve():this.remoteDocumentCache.getEntry(e,y).next(A=>{d=d.insert(y,A)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,d,f,_e())).next(y=>({batchId:h,changes:$l(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(r=>{let i=Ar();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Ar();return this.indexManager.getCollectionParents(e,o).next(h=>x.forEach(h,d=>{const f=function(I,A){return new ci(A,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,d.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(y=>{y.forEach((I,A)=>{a=a.insert(I,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((d,f)=>{const y=f.getKey();a.get(y)===null&&(a=a.insert(y,ke.newInvalidDocument(y)))});let h=Ar();return a.forEach((d,f)=>{const y=o.get(d);y!==void 0&&Fn(y.mutation,f,Oe.empty(),Y.now()),Ws(t,f)&&(h=h.insert(d,f))}),h})}}/**
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
 */class Dm{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return x.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Xt(i.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(i){return{name:i.name,query:Em(i.bundledQuery),readTime:Xt(i.readTime)}}(t)),x.resolve()}}/**
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
 */class Om{constructor(){this.overlays=new Se(j.comparator),this.Lr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Pt();return x.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.St(e,t,o)}),x.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const i=Pt(),o=t.length+1,a=new j(t.child("")),h=this.overlays.getIteratorFrom(a);for(;h.hasNext();){const d=h.getNext().value,f=d.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return x.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Se((f,y)=>f-y);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let y=o.get(f.largestBatchId);y===null&&(y=Pt(),o=o.insert(f.largestBatchId,y)),y.set(f.getKey(),f)}}const h=Pt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,y)=>h.set(f,y)),!(h.size()>=i)););return x.resolve(h)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new om(t,r));let o=this.Lr.get(t);o===void 0&&(o=_e(),this.Lr.set(t,o)),this.Lr.set(t,o.add(r.key))}}/**
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
 */class Vm{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
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
 */class Hs{constructor(){this.kr=new fe(ae.qr),this.Kr=new fe(ae.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new ae(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new ae(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new j(new X([])),r=new ae(t,e),i=new ae(t,e+1),o=[];return this.Kr.forEachInRange([r,i],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new j(new X([])),r=new ae(t,e),i=new ae(t,e+1);let o=_e();return this.Kr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new ae(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ae{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return j.comparator(e.key,t.key)||H(e.Jr,t.Jr)}static Ur(e,t){return H(e.Jr,t.Jr)||j.comparator(e.key,t.key)}}/**
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
 */class Lm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new fe(ae.qr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new sm(o,t,r,i);this.mutationQueue.push(a);for(const h of i)this.Hr=this.Hr.add(new ae(h.key,o)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),o=i<0?0:i;return x.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Vs:this.Yn-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ae(t,0),i=new ae(t,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([r,i],a=>{const h=this.Zr(a.Jr);o.push(h)}),x.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(H);return t.forEach(i=>{const o=new ae(i,0),a=new ae(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,a],h=>{r=r.add(h.Jr)})}),x.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;j.isDocumentKey(o)||(o=o.child(""));const a=new ae(new j(o),0);let h=new fe(H);return this.Hr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(h=h.add(d.Jr)),!0)},a),x.resolve(this.Yr(h))}Yr(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){te(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return x.forEach(t.mutations,i=>{const o=new ae(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new ae(t,0),i=this.Hr.firstAfterOrEqual(r);return x.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class jm{constructor(e){this.ti=e,this.docs=function(){return new Se(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let r=Gr();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():ke.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=Gr();const a=t.path,h=new j(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){const{key:f,value:{document:y}}=d.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||pp(fp(y),r)<=0||(i.has(y.key)||Ws(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return x.resolve(o)}getAllFromCollectionGroup(e,t,r,i){F(9500)}ni(e,t){return x.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Mm(this)}getSize(e){return x.resolve(this.size)}}class Mm extends Pm{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),x.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class Fm{constructor(e){this.persistence=e,this.ri=new $t(t=>Us(t),Bs),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new Hs,this.targetCount=0,this.oi=un._r()}forEachTarget(e,t){return this.ri.forEach((r,i)=>t(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),x.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new un(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.lr(t),x.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.ri.forEach((a,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,h.targetId)),i++)}),x.waitFor(o).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),x.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.si.containsKey(t))}}/**
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
 */class iu{constructor(e,t){this._i={},this.overlays={},this.ai=new Os(0),this.ui=!1,this.ui=!0,this.ci=new Vm,this.referenceDelegate=e(this),this.li=new Fm(this),this.indexManager=new Tm,this.remoteDocumentCache=function(i){return new jm(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Im(t),this.Pi=new Dm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Om,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new Lm(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const i=new Um(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(o=>this.referenceDelegate.Ei(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ii(e,t){return x.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class Um extends gp{constructor(e){super(),this.currentSequenceNumber=e}}class Gs{constructor(e){this.persistence=e,this.Ri=new Hs,this.Ai=null}static Vi(e){return new Gs(e)}get di(){if(this.Ai)return this.Ai;throw F(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.di,r=>{const i=j.fromPath(r);return this.mi(e,i).next(o=>{o||t.removeEntry(i,J.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return x.or([()=>x.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Kr{constructor(e,t){this.persistence=e,this.fi=new $t(r=>vp(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Cm(this,t)}static Vi(e,t){return new Kr(e,t)}Ti(){}Ei(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return x.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(o=>o?x.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ni(e,a=>this.wr(e,a,t).next(h=>{h||(r++,o.removeEntry(a,J.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pr(e.data.value)),t}wr(e,t,r){return x.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return x.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class qs{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=i}static Is(e,t){let r=_e(),i=_e();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new qs(e,t.fromCache,r,i)}}/**
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
 */class Bm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Wm{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Dd()?8:yp(we())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.gs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Bm;return this.ys(e,t,a).next(h=>{if(o.result=h,this.As)return this.ws(e,t,a,h.size)})}).next(()=>o.result)}ws(e,t,r,i){return r.documentReadCount<this.Vs?(Qt()<=B.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(Qt()<=B.DEBUG&&N("QueryEngine","Query:",Nn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Qt()<=B.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dt(t))):x.resolve())}gs(e,t){if(Ga(t))return x.resolve(null);let r=Dt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=gs(t,null,"F"),r=Dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=_e(...o);return this.fs.getDocuments(e,a).next(h=>this.indexManager.getMinOffset(e,r).next(d=>{const f=this.Ss(t,h);return this.bs(t,f,a,d.readTime)?this.gs(e,gs(t,null,"F")):this.Ds(e,f,t,d)}))})))}ps(e,t,r,i){return Ga(t)||i.isEqual(J.min())?x.resolve(null):this.fs.getDocuments(e,r).next(o=>{const a=this.Ss(t,o);return this.bs(t,a,r,i)?x.resolve(null):(Qt()<=B.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Nn(t)),this.Ds(e,a,t,dp(i,$n)).next(h=>h))})}Ss(e,t){let r=new fe(zp(e));return t.forEach((i,o)=>{Ws(e,o)&&(r=r.add(o))}),r}bs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ys(e,t,r){return Qt()<=B.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Nn(t)),this.fs.getDocumentsMatchingQuery(e,t,vt.min(),r)}Ds(e,t,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const zm="LocalStore";class $m{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new Se(H),this.Fs=new $t(o=>Us(o),Bs),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Nm(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Hm(n,e,t,r){return new $m(n,e,t,r)}async function su(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],h=[];let d=_e();for(const f of i){a.push(f.batchId);for(const y of f.mutations)d=d.add(y.key)}for(const f of o){h.push(f.batchId);for(const y of f.mutations)d=d.add(y.key)}return t.localDocuments.getDocuments(r,d).next(f=>({Ns:f,removedBatchIds:a,addedBatchIds:h}))})})}function Gm(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return function(h,d,f,y){const I=f.batch,A=I.keys();let C=x.resolve();return A.forEach(k=>{C=C.next(()=>y.getEntry(d,k)).next(L=>{const O=f.docVersions.get(k);te(O!==null,48541),L.version.compareTo(O)<0&&(I.applyToRemoteDocument(L,f),L.isValidDocument()&&(L.setReadTime(f.commitVersion),y.addEntry(L)))})}),C.next(()=>h.mutationQueue.removeMutationBatch(d,I))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let d=_e();for(let f=0;f<h.mutationResults.length;++f)h.mutationResults[f].transformResults.length>0&&(d=d.add(h.batch.mutations[f].key));return d}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function qm(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function Km(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Vs),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class tc{constructor(){this.activeTargetIds=Qp()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qm{constructor(){this.vo=new tc,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new tc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Jm{Mo(e){}shutdown(){}}/**
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
 */const nc="ConnectivityMonitor";class rc{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){N(nc,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){N(nc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sr=null;function ws(){return Sr===null?Sr=function(){return 268435456+Math.round(2147483648*Math.random())}():Sr++,"0x"+Sr.toString(16)}/**
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
 */const Yi="RestConnection",Ym={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Xm{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Wr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,o){const a=ws(),h=this.Qo(e,t.toUriEncodedString());N(Yi,`Sending RPC '${e}' ${a}:`,h,r);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,i,o);const{host:f}=new URL(h),y=Xn(f);return this.zo(e,h,d,r,y).then(I=>(N(Yi,`Received RPC '${e}' ${a}: `,I),I),I=>{throw zn(Yi,`RPC '${e}' ${a} failed with error: `,I,"url: ",h,"request:",r),I})}jo(e,t,r,i,o,a){return this.Wo(e,t,r,i,o)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}Qo(e,t){const r=Ym[e];let i=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class Zm{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const ge="WebChannelConnection",Dn=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Zt extends Xm{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Zt.c_){const e=vl();Dn(e,_l.STAT_EVENT,t=>{t.stat===us.PROXY?N(ge,"STAT_EVENT: detected buffering proxy"):t.stat===us.NOPROXY&&N(ge,"STAT_EVENT: detected no buffering proxy")}),Zt.c_=!0}}zo(e,t,r,i,o){const a=ws();return new Promise((h,d)=>{const f=new gl;f.setWithCredentials(!0),f.listenOnce(yl.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Cr.NO_ERROR:const I=f.getResponseJson();N(ge,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(I)),h(I);break;case Cr.TIMEOUT:N(ge,`RPC '${e}' ${a} timed out`),d(new D(R.DEADLINE_EXCEEDED,"Request time out"));break;case Cr.HTTP_ERROR:const A=f.getStatus();if(N(ge,`RPC '${e}' ${a} failed with status:`,A,"response text:",f.getResponseText()),A>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);const k=C==null?void 0:C.error;if(k&&k.status&&k.message){const L=function($){const W=$.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(W)>=0?W:R.UNKNOWN}(k.status);d(new D(L,k.message))}else d(new D(R.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new D(R.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{N(ge,`RPC '${e}' ${a} completed.`)}});const y=JSON.stringify(i);N(ge,`RPC '${e}' ${a} sending request:`,i),f.send(t,"POST",y,r,15)})}T_(e,t,r){const i=ws(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Go(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const f=o.join("");N(ge,`Creating RPC '${e}' stream ${i}: ${f}`,h);const y=a.createWebChannel(f,h);this.E_(y);let I=!1,A=!1;const C=new Zm({Jo:k=>{A?N(ge,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(I||(N(ge,`Opening RPC '${e}' stream ${i} transport.`),y.open(),I=!0),N(ge,`RPC '${e}' stream ${i} sending:`,k),y.send(k))},Ho:()=>y.close()});return Dn(y,Vn.EventType.OPEN,()=>{A||(N(ge,`RPC '${e}' stream ${i} transport opened.`),C.i_())}),Dn(y,Vn.EventType.CLOSE,()=>{A||(A=!0,N(ge,`RPC '${e}' stream ${i} transport closed`),C.o_(),this.I_(y))}),Dn(y,Vn.EventType.ERROR,k=>{A||(A=!0,zn(ge,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),C.o_(new D(R.UNAVAILABLE,"The operation could not be completed")))}),Dn(y,Vn.EventType.MESSAGE,k=>{var L;if(!A){const O=k.data[0];te(!!O,16349);const $=O,W=($==null?void 0:$.error)||((L=$[0])==null?void 0:L.error);if(W){N(ge,`RPC '${e}' stream ${i} received error:`,W);const Z=W.status;let Ce=function(w){const m=ne[w];if(m!==void 0)return cm(m)}(Z),ie=W.message;Z==="NOT_FOUND"&&ie.includes("database")&&ie.includes("does not exist")&&ie.includes(this.databaseId.database)&&zn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ce===void 0&&(Ce=R.INTERNAL,ie="Unknown error status: "+Z+" with message "+W.message),A=!0,C.o_(new D(Ce,ie)),y.close()}else N(ge,`RPC '${e}' stream ${i} received:`,O),C.__(O)}}),Zt.u_(),setTimeout(()=>{C.s_()},0),C}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return wl()}}/**
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
 */function eg(n){return new Zt(n)}function Xi(){return typeof document<"u"?document:null}/**
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
 */function hi(n){return new lm(n,!0)}/**
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
 */Zt.c_=!1;class ou{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=i,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const ic="PersistentStream";class tg{constructor(e,t,r,i,o,a,h,d){this.Ci=e,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=h,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ou(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(Lt(t.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new D(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return N(ic,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(N(ic,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ng extends tg{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=ym(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=pm(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>gm(this.serializer,r))};this.q_(t)}}/**
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
 */class rg{}class ig extends rg{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(e,_s(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(R.UNKNOWN,o.toString())})}jo(e,t,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,h])=>this.connection.jo(e,_s(t,r),i,a,h,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(R.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function sg(n,e,t,r){return new ig(n,e,t,r)}class og{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Lt(t),this.aa=!1):N("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const nr="RemoteStore";class ag{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{ir(this)&&(N(nr,"Restarting streams for network reachability change."),await async function(d){const f=K(d);f.Ia.add(4),await rr(f),f.Va.set("Unknown"),f.Ia.delete(4),await di(f)}(this))})}),this.Va=new og(r,i)}}async function di(n){if(ir(n))for(const e of n.Ra)await e(!0)}async function rr(n){for(const e of n.Ra)await e(!1)}function ir(n){return K(n).Ia.size===0}async function au(n,e,t){if(!er(e))throw e;n.Ia.add(1),await rr(n),n.Va.set("Offline"),t||(t=()=>qm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(nr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await di(n)})}function cu(n,e){return e().catch(t=>au(n,t,e))}async function fi(n){const e=K(n),t=It(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Vs;for(;cg(e);)try{const i=await Km(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,lg(e,i)}catch(i){await au(e,i)}lu(e)&&uu(e)}function cg(n){return ir(n)&&n.Ta.length<10}function lg(n,e){n.Ta.push(e);const t=It(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function lu(n){return ir(n)&&!It(n).x_()&&n.Ta.length>0}function uu(n){It(n).start()}async function ug(n){It(n).ra()}async function hg(n){const e=It(n);for(const t of n.Ta)e.ea(t.mutations)}async function dg(n,e,t){const r=n.Ta.shift(),i=$s.from(r,e,t);await cu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await fi(n)}async function fg(n,e){e&&It(n).Y_&&await async function(r,i){if(function(a){return am(a)&&a!==R.ABORTED}(i.code)){const o=r.Ta.shift();It(r).B_(),await cu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await fi(r)}}(n,e),lu(n)&&uu(n)}async function sc(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),N(nr,"RemoteStore received new credentials");const r=ir(t);t.Ia.add(3),await rr(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await di(t)}async function pg(n,e){const t=K(n);e?(t.Ia.delete(2),await di(t)):e||(t.Ia.add(2),await rr(t),t.Va.set("Unknown"))}function It(n){return n.fa||(n.fa=function(t,r,i){const o=K(t);return o.sa(),new ng(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ug.bind(null,n),t_:fg.bind(null,n),ta:hg.bind(null,n),na:dg.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await fi(n)):(await n.fa.stop(),n.Ta.length>0&&(N(nr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Ks{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,h=new Ks(e,t,a,i,o);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hu(n,e){if(Lt("AsyncQueue",`${e}: ${n}`),er(n))return new D(R.UNAVAILABLE,`${e}: ${n}`);throw n}class mg{constructor(){this.queries=oc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=K(t),o=i.queries;i.queries=oc(),o.forEach((a,h)=>{for(const d of h.Sa)d.onError(r)})})(this,new D(R.ABORTED,"Firestore shutting down"))}}function oc(){return new $t(n=>Wl(n),Bl)}function gg(n){n.Ca.forEach(e=>{e.next()})}var ac,cc;(cc=ac||(ac={})).Ma="default",cc.Cache="cache";const yg="SyncEngine";class _g{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new $t(h=>Wl(h),Bl),this.Eu=new Map,this.Iu=new Set,this.Ru=new Se(j.comparator),this.Au=new Map,this.Vu=new Hs,this.du={},this.mu=new Map,this.fu=un.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vg(n,e,t){const r=Tg(n);try{const i=await function(a,h){const d=K(a),f=Y.now(),y=h.reduce((C,k)=>C.add(k.key),_e());let I,A;return d.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=Gr(),L=_e();return d.xs.getEntries(C,y).next(O=>{k=O,k.forEach(($,W)=>{W.isValidDocument()||(L=L.add($))})}).next(()=>d.localDocuments.getOverlayedDocuments(C,k)).next(O=>{I=O;const $=[];for(const W of h){const Z=rm(W,I.get(W.key).overlayedDocument);Z!=null&&$.push(new Ht(W.key,Z,Ol(Z.value.mapValue),Xe.exists(!0)))}return d.mutationQueue.addMutationBatch(C,f,$,h)}).next(O=>{A=O;const $=O.applyToLocalDocumentSet(I,L);return d.documentOverlayCache.saveOverlays(C,O.batchId,$)})}).then(()=>({batchId:A.batchId,changes:$l(I)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,h,d){let f=a.du[a.currentUser.toKey()];f||(f=new Se(H)),f=f.insert(h,d),a.du[a.currentUser.toKey()]=f}(r,i.batchId,t),await pi(r,i.changes),await fi(r.remoteStore)}catch(i){const o=hu(i,"Failed to persist write");t.reject(o)}}function lc(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((o,a)=>{const h=a.view.va(e);h.snapshot&&i.push(h.snapshot)}),function(a,h){const d=K(a);d.onlineState=h;let f=!1;d.queries.forEach((y,I)=>{for(const A of I.Sa)A.va(h)&&(f=!0)}),f&&gg(d)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wg(n,e){const t=K(n),r=e.batch.batchId;try{const i=await Gm(t.localStore,e);fu(t,r,null),du(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await pi(t,i)}catch(i){await Ds(i)}}async function Ig(n,e,t){const r=K(n);try{const i=await function(a,h){const d=K(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let y;return d.mutationQueue.lookupMutationBatch(f,h).next(I=>(te(I!==null,37113),y=I.keys(),d.mutationQueue.removeMutationBatch(f,I))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,y,h)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,y)).next(()=>d.localDocuments.getDocuments(f,y))})}(r.localStore,e);fu(r,e,t),du(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await pi(r,i)}catch(i){await Ds(i)}}function du(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function fu(n,e,t){const r=K(n);let i=r.du[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}async function pi(n,e,t){const r=K(n),i=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((h,d)=>{a.push(r.pu(d,e,t).then(f=>{var y;if((f||t)&&r.isPrimaryClient){const I=f?!f.fromCache:(y=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:y.current;r.sharedClientState.updateQueryState(d.targetId,I?"current":"not-current")}if(f){i.push(f);const I=qs.Is(d.targetId,f);o.push(I)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(d,f){const y=K(d);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>x.forEach(f,A=>x.forEach(A.Ts,C=>y.persistence.referenceDelegate.addReference(I,A.targetId,C)).next(()=>x.forEach(A.Es,C=>y.persistence.referenceDelegate.removeReference(I,A.targetId,C)))))}catch(I){if(!er(I))throw I;N(zm,"Failed to update sequence numbers: "+I)}for(const I of f){const A=I.targetId;if(!I.fromCache){const C=y.vs.get(A),k=C.snapshotVersion,L=C.withLastLimboFreeSnapshotVersion(k);y.vs=y.vs.insert(A,L)}}}(r.localStore,o))}async function Eg(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){N(yg,"User change. New user:",e.toKey());const r=await su(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(h=>{h.forEach(d=>{d.reject(new D(R.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pi(t,r.Ns)}}function Tg(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ig.bind(null,e),e}class Qr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Hm(this.persistence,new Wm,e.initialUser,this.serializer)}Cu(e){return new iu(Gs.Vi,this.serializer)}Du(e){return new Qm}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qr.provider={build:()=>new Qr};class bg extends Qr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){te(this.persistence.referenceDelegate instanceof Kr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xm(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?be.withCacheSize(this.cacheSizeBytes):be.DEFAULT;return new iu(r=>Kr.Vi(r,t),this.serializer)}}class Is{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Eg.bind(null,this.syncEngine),await pg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mg}()}createDatastore(e){const t=hi(e.databaseInfo.databaseId),r=eg(e.databaseInfo);return sg(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,h){return new ag(r,i,o,a,h)}(this.localStore,this.datastore,e.asyncQueue,t=>lc(this.syncEngine,t,0),function(){return rc.v()?new rc:new Jm}())}createSyncEngine(e,t){return function(i,o,a,h,d,f,y){const I=new _g(i,o,a,h,d,f);return y&&(I.gu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=K(i);N(nr,"RemoteStore shutting down."),o.Ia.add(5),await rr(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Is.provider={build:()=>new Is};/**
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
 */const Et="FirestoreClient";class Ag{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=ye.UNAUTHENTICATED,this.clientId=ks.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(Et,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(Et,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=hu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zi(n,e){n.asyncQueue.verifyOperationInProgress(),N(Et,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await su(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function uc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Sg(n);N(Et,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>sc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>sc(e.remoteStore,i)),n._onlineComponents=e}async function Sg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(Et,"Using user provided OfflineComponentProvider");try{await Zi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;zn("Error using user provided cache. Falling back to memory cache: "+t),await Zi(n,new Qr)}}else N(Et,"Using default OfflineComponentProvider"),await Zi(n,new bg(void 0));return n._offlineComponents}async function xg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(Et,"Using user provided OnlineComponentProvider"),await uc(n,n._uninitializedComponentsProvider._online)):(N(Et,"Using default OnlineComponentProvider"),await uc(n,new Is))),n._onlineComponents}function Rg(n){return xg(n).then(e=>e.syncEngine)}function Cg(n,e){const t=new Nt;return n.asyncQueue.enqueueAndForget(async()=>vg(await Rg(n),e,t)),t.promise}/**
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
 */function pu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Pg="ComponentProvider",hc=new Map;function kg(n,e,t,r,i){return new Tp(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,pu(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const mu="firestore.googleapis.com",dc=!0;class fc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new D(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mu,this.ssl=dc}else this.host=e.host,this.ssl=e.ssl??dc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ru;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Am)throw new D(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pu(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tp;switch(r.type){case"firstParty":return new sp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=hc.get(t);r&&(N(Pg,"Removing Datastore"),hc.delete(t),r.terminate())}(this),Promise.resolve()}}function Ng(n,e,t,r={}){var f;n=Al(n,mi);const i=Xn(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},h=`${e}:${t}`;i&&ll(`https://${h}`),o.host!==mu&&o.host!==h&&zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:h,ssl:i,emulatorOptions:r};if(!_t(d,a)&&(n._setSettings(d),r.mockUserToken)){let y,I;if(typeof r.mockUserToken=="string")y=r.mockUserToken,I=ye.MOCK_USER;else{y=xd(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new D(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new ye(A)}n._authCredentials=new np(new El(y,I))}}/**
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
 */class Qs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qs(this.firestore,e,this._query)}}class ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ve(this.firestore,e,this._key)}toJSON(){return{type:ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Zn(t,ve._jsonSchema))return new ve(e,r||null,new j(X.fromString(t.referencePath)))}}ve._jsonSchemaVersion="firestore/documentReference/1.0",ve._jsonSchema={type:re("string",ve._jsonSchemaVersion),referencePath:re("string")};class yt extends Qs{constructor(e,t,r){super(e,t,Fp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new j(e))}withConverter(e){return new yt(this.firestore,e,this._path)}}function gu(n,e,...t){if(n=Ae(n),Tl("collection","path",e),n instanceof mi){const r=X.fromString(e,...t);return Va(r),new yt(n,null,r)}{if(!(n instanceof ve||n instanceof yt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return Va(r),new yt(n.firestore,null,r)}}function Dg(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=ks.newId()),Tl("doc","path",e),n instanceof mi){const r=X.fromString(e,...t);return Oa(r),new ve(n,null,new j(r))}{if(!(n instanceof ve||n instanceof yt))throw new D(R.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return Oa(r),new ve(n.firestore,n instanceof yt?n.converter:null,new j(r))}}/**
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
 */const pc="AsyncQueue";class mc{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ou(this,"async_queue_retry"),this._c=()=>{const r=Xi();r&&N(pc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Xi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Xi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Nt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!er(e))throw e;N(pc,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Lt("INTERNAL UNHANDLED ERROR: ",gc(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Ks.createAndSchedule(this,e,t,r,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&F(47125,{Pc:gc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function gc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class yu extends mi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new mc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mc(e),this._firestoreClient=void 0,await e}}}function Og(n,e){const t=typeof n=="object"?n:Rs(),r=typeof n=="string"?n:Wr,i=zt(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Ad("firestore");o&&Ng(i,...o)}return i}function Vg(n){if(n._terminated)throw new D(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Lg(n),n._firestoreClient}function Lg(n){var r,i,o,a;const e=n._freezeSettings(),t=kg(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Ag(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class De{constructor(e){this._byteString=e}static fromBase64String(e){try{return new De(Ge.fromBase64String(e))}catch(t){throw new D(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new De(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:De._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Zn(e,De._jsonSchema))return De.fromBase64String(e.bytes)}}De._jsonSchemaVersion="firestore/bytes/1.0",De._jsonSchema={type:re("string",De._jsonSchemaVersion),bytes:re("string")};/**
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
 */class _u{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Js{constructor(e){this._methodName=e}}/**
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
 */class Ze{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ze._jsonSchemaVersion}}static fromJSON(e){if(Zn(e,Ze._jsonSchema))return new Ze(e.latitude,e.longitude)}}Ze._jsonSchemaVersion="firestore/geoPoint/1.0",Ze._jsonSchema={type:re("string",Ze._jsonSchemaVersion),latitude:re("number"),longitude:re("number")};/**
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
 */class We{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:We._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zn(e,We._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new We(e.vectorValues);throw new D(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}We._jsonSchemaVersion="firestore/vectorValue/1.0",We._jsonSchema={type:re("string",We._jsonSchemaVersion),vectorValues:re("object")};/**
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
 */const jg=/^__.*__$/;class Mg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ht(e,this.data,this.fieldMask,t,this.fieldTransforms):new tr(e,this.data,t,this.fieldTransforms)}}function vu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:n})}}class Ys{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ys({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Jr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(vu(this.dataSource)&&jg.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class Fg{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||hi(e)}I(e,t,r,i=!1){return new Ys({dataSource:e,methodName:t,targetDoc:r,path:de.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ug(n){const e=n._freezeSettings(),t=hi(n._databaseId);return new Fg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Bg(n,e,t,r,i,o={}){const a=n.I(o.merge||o.mergeFields?2:0,e,t,i);Tu("Data must be an object, but it was:",a,r);const h=Iu(r,a);let d,f;if(o.merge)d=new Oe(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const y=[];for(const I of o.mergeFields){const A=Zs(e,I,t);if(!a.contains(A))throw new D(R.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);$g(y,A)||y.push(A)}d=new Oe(y),f=a.fieldTransforms.filter(I=>d.covers(I.field))}else d=null,f=a.fieldTransforms;return new Mg(new Ne(h),d,f)}class Xs extends Js{_toFieldTransform(e){return new Zp(e.path,new Gn)}isEqual(e){return e instanceof Xs}}function wu(n,e){if(Eu(n=Ae(n)))return Tu("Unsupported field value:",e,n),Iu(n,e);if(n instanceof Js)return function(r,i){if(!vu(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const h of r){let d=wu(h,i.gc(a));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Jp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Y.fromDate(r);return{timestampValue:ys(i.serializer,o)}}if(r instanceof Y){const o=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ys(i.serializer,o)}}if(r instanceof Ze)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof De)return{bytesValue:um(i.serializer,r._byteString)};if(r instanceof ve){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:eu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof We)return function(a,h){const d=a instanceof We?a.toArray():a;return{mapValue:{fields:{[Nl]:{stringValue:Dl},[ds]:{arrayValue:{values:d.map(y=>{if(typeof y!="number")throw h.yc("VectorValues must only contain numeric values.");return zs(h.serializer,y)})}}}}}}(r,i);if(nu(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Ns(r)}`)}(n,e)}function Iu(n,e){const t={};return xl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pn(n,(r,i)=>{const o=wu(i,e.dc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Eu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof Ze||n instanceof De||n instanceof ve||n instanceof Js||n instanceof We||nu(n))}function Tu(n,e,t){if(!Eu(t)||!bl(t)){const r=Ns(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function Zs(n,e,t){if((e=Ae(e))instanceof _u)return e._internalPath;if(typeof e=="string")return zg(n,e);throw Jr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Wg=new RegExp("[~\\*/\\[\\]]");function zg(n,e,t){if(e.search(Wg)>=0)throw Jr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _u(...e.split("."))._internalPath}catch{throw Jr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Jr(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let d="";return(o||a)&&(d+=" (found",o&&(d+=` in field ${r}`),a&&(d+=` in document ${i}`),d+=")"),new D(R.INVALID_ARGUMENT,h+n+d)}function $g(n,e){return n.some(t=>t.isEqual(e))}function bu(){return new Xs("serverTimestamp")}const yc="@firebase/firestore",_c="4.14.0";/**
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
 */class Au{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Hg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Zs("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Hg extends Au{data(){return super.data()}}function Gg(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class xr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class en extends Au{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Dr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Zs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=en._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}en._jsonSchemaVersion="firestore/documentSnapshot/1.0",en._jsonSchema={type:re("string",en._jsonSchemaVersion),bundleSource:re("string","DocumentSnapshot"),bundleName:re("string"),bundle:re("string")};class Dr extends en{data(e={}){return super.data(e)}}class Un{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new xr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Dr(this._firestore,this._userDataWriter,r.key,r,new xr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(h=>{const d=new Dr(i._firestore,i._userDataWriter,h.doc.key,h.doc,new xr(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const d=new Dr(i._firestore,i._userDataWriter,h.doc.key,h.doc,new xr(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,y=-1;return h.type!==0&&(f=a.indexOf(h.doc.key),a=a.delete(h.doc.key)),h.type!==1&&(a=a.add(h.doc),y=a.indexOf(h.doc.key)),{type:qg(h.type),doc:d,oldIndex:f,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Un._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ks.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function qg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
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
 */Un._jsonSchemaVersion="firestore/querySnapshot/1.0",Un._jsonSchema={type:re("string",Un._jsonSchemaVersion),bundleSource:re("string","QuerySnapshot"),bundleName:re("string"),bundle:re("string")};function Su(n,e){const t=Al(n.firestore,yu),r=Dg(n),i=Gg(n.converter,e),o=Ug(n.firestore);return Kg(t,[Bg(o,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Xe.exists(!1))]).then(()=>r)}function Kg(n,e){const t=Vg(n);return Cg(t,e)}(function(e,t=!0){ep(dn),He(new Le("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),h=new yu(new rp(r.getProvider("auth-internal")),new op(a,r.getProvider("app-check-internal")),bp(a,i),a);return o={useFetchStreams:t,...o},h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Pe(yc,_c,e),Pe(yc,_c,"esm2020")})();var Qg="firebase",Jg="12.12.1";/**
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
 */Pe(Qg,Jg,"app");function xu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yg=xu,Ru=new Wt("auth","Firebase",xu());/**
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
 */const Yr=new ai("@firebase/auth");function Xg(n,...e){Yr.logLevel<=B.WARN&&Yr.warn(`Auth (${dn}): ${n}`,...e)}function Or(n,...e){Yr.logLevel<=B.ERROR&&Yr.error(`Auth (${dn}): ${n}`,...e)}/**
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
 */function tt(n,...e){throw eo(n,...e)}function ze(n,...e){return eo(n,...e)}function Cu(n,e,t){const r={...Yg(),[e]:t};return new Wt("auth","Firebase",r).create(e,{appName:n.name})}function Ot(n){return Cu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ru.create(n,...e)}function V(n,e,...t){if(!n)throw eo(e,...t)}function Je(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Or(e),new Error(e)}function nt(n,e){n||Je(e)}/**
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
 */function Es(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Zg(){return vc()==="http:"||vc()==="https:"}function vc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function ey(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zg()||ol()||"connection"in navigator)?navigator.onLine:!0}function ty(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class sr{constructor(e,t){this.shortDelay=e,this.longDelay=t,nt(t>e,"Short delay should be less than long delay!"),this.isMobile=Rd()||kd()}get(){return ey()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function to(n,e){nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Pu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ny={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ry=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iy=new sr(3e4,6e4);function no(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function mn(n,e,t,r,i={}){return ku(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const h=Yn({key:n.config.apiKey,...a}).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:d,...o};return Pd()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Xn(n.emulatorConfig.host)&&(f.credentials="include"),Pu.fetch()(await Nu(n,n.config.apiHost,t,h),f)})}async function ku(n,e,t){n._canInitEmulator=!1;const r={...ny,...e};try{const i=new oy(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Rr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const h=o.ok?a.errorMessage:a.error.message,[d,f]=h.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rr(n,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw Rr(n,"email-already-in-use",a);if(d==="USER_DISABLED")throw Rr(n,"user-disabled",a);const y=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Cu(n,y,f);tt(n,y)}}catch(i){if(i instanceof je)throw i;tt(n,"network-request-failed",{message:String(i)})}}async function sy(n,e,t,r,i={}){const o=await mn(n,e,t,r,i);return"mfaPendingCredential"in o&&tt(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Nu(n,e,t,r){const i=`${e}${t}?${r}`,o=n,a=o.config.emulator?to(n.config,i):`${n.config.apiScheme}://${i}`;return ry.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class oy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),iy.get())})}}function Rr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ze(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function ay(n,e){return mn(n,"POST","/v1/accounts:delete",e)}async function Xr(n,e){return mn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cy(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),i=ro(r);V(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Bn(es(i.auth_time)),issuedAtTime:Bn(es(i.iat)),expirationTime:Bn(es(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function es(n){return Number(n)*1e3}function ro(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Or("JWT malformed, contained fewer than 3 sections"),null;try{const i=nl(t);return i?JSON.parse(i):(Or("Failed to decode base64 JWT payload"),null)}catch(i){return Or("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wc(n){const e=ro(n);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof je&&ly(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ly({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class uy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ts{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zr(n){var I;const e=n.auth,t=await n.getIdToken(),r=await Qn(n,Xr(e,{idToken:t}));V(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=(I=i.providerUserInfo)!=null&&I.length?Du(i.providerUserInfo):[],a=dy(n.providerData,o),h=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),f=h?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ts(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,y)}async function hy(n){const e=Ae(n);await Zr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dy(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Du(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function fy(n,e){const t=await ku(n,{},async()=>{const r=Yn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=await Nu(n,i,"/v1/token",`key=${o}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:h,body:r};return n.emulatorConfig&&Xn(n.emulatorConfig.host)&&(d.credentials="include"),Pu.fetch()(a,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function py(n,e){return mn(n,"POST","/v2/accounts:revokeToken",no(n,e))}/**
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
 */class tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){V(e.length!==0,"internal-error");const t=wc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await fy(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new tn;return r&&(V(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(V(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tn,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
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
 */function ut(n,e){V(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ve{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new uy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ts(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Qn(this,this.stsTokenManager.getToken(this.auth,e));return V(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cy(this,e)}reload(){return hy(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ve({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Zr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Be(this.auth.app))return Promise.reject(Ot(this.auth));const e=await this.getIdToken();return await Qn(this,ay(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,h=t.tenantId??void 0,d=t._redirectEventId??void 0,f=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:I,emailVerified:A,isAnonymous:C,providerData:k,stsTokenManager:L}=t;V(I&&L,e,"internal-error");const O=tn.fromJSON(this.name,L);V(typeof I=="string",e,"internal-error"),ut(r,e.name),ut(i,e.name),V(typeof A=="boolean",e,"internal-error"),V(typeof C=="boolean",e,"internal-error"),ut(o,e.name),ut(a,e.name),ut(h,e.name),ut(d,e.name),ut(f,e.name),ut(y,e.name);const $=new Ve({uid:I,auth:e,email:i,emailVerified:A,displayName:r,isAnonymous:C,photoURL:a,phoneNumber:o,tenantId:h,stsTokenManager:O,createdAt:f,lastLoginAt:y});return k&&Array.isArray(k)&&($.providerData=k.map(W=>({...W}))),d&&($._redirectEventId=d),$}static async _fromIdTokenResponse(e,t,r=!1){const i=new tn;i.updateFromServerResponse(t);const o=new Ve({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zr(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];V(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Du(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),h=new tn;h.updateFromIdToken(r);const d=new Ve({uid:i.localId,auth:e,stsTokenManager:h,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ts(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(d,f),d}}/**
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
 */const Ic=new Map;function Ye(n){nt(n instanceof Function,"Expected a class definition");let e=Ic.get(n);return e?(nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ic.set(n,e),e)}/**
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
 */class Ou{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ou.type="NONE";const Ec=Ou;/**
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
 */function Vr(n,e,t){return`firebase:${n}:${e}:${t}`}class nn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Vr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Vr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xr(this.auth,{idToken:e}).catch(()=>{});return t?Ve._fromGetAccountInfoResponse(this.auth,t,e):null}return Ve._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new nn(Ye(Ec),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||Ye(Ec);const a=Vr(r,e.config.apiKey,e.name);let h=null;for(const f of t)try{const y=await f._get(a);if(y){let I;if(typeof y=="string"){const A=await Xr(e,{idToken:y}).catch(()=>{});if(!A)break;I=await Ve._fromGetAccountInfoResponse(e,A,y)}else I=Ve._fromJSON(e,y);f!==o&&(h=I),o=f;break}}catch{}const d=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new nn(o,e,r):(o=d[0],h&&await o._set(a,h.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new nn(o,e,r))}}/**
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
 */function Tc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uu(e))return"Blackberry";if(Bu(e))return"Webos";if(Lu(e))return"Safari";if((e.includes("chrome/")||ju(e))&&!e.includes("edge/"))return"Chrome";if(Fu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vu(n=we()){return/firefox\//i.test(n)}function Lu(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ju(n=we()){return/crios\//i.test(n)}function Mu(n=we()){return/iemobile/i.test(n)}function Fu(n=we()){return/android/i.test(n)}function Uu(n=we()){return/blackberry/i.test(n)}function Bu(n=we()){return/webos/i.test(n)}function io(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function my(n=we()){var e;return io(n)&&!!((e=window.navigator)!=null&&e.standalone)}function gy(){return Nd()&&document.documentMode===10}function Wu(n=we()){return io(n)||Fu(n)||Bu(n)||Uu(n)||/windows phone/i.test(n)||Mu(n)}/**
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
 */function zu(n,e=[]){let t;switch(n){case"Browser":t=Tc(we());break;case"Worker":t=`${Tc(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dn}/${r}`}/**
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
 */class yy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,h)=>{try{const d=e(o);a(d)}catch(d){h(d)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _y(n,e={}){return mn(n,"GET","/v2/passwordPolicy",no(n,e))}/**
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
 */const vy=6;class wy{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??vy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class Iy{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bc(this),this.idTokenSubscription=new bc(this),this.beforeStateQueue=new yy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ru,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ye(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xr(this,{idToken:e}),r=await Ve._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Be(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,h=r==null?void 0:r._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===h)&&(d!=null&&d.user)&&(r=d.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ty()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Be(this.app))return Promise.reject(Ot(this));const t=e?Ae(e):null;return t&&V(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Be(this.app)?Promise.reject(Ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Be(this.app)?Promise.reject(Ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _y(this),t=new wy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await py(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ye(e)||this._popupRedirectResolver;V(t,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[Ye(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(h,this,"internal-error"),h.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,r,i);return()=>{a=!0,d()}}else{const d=e.addObserver(t);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Xg(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function so(n){return Ae(n)}class bc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fd(t=>this.observer=t)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ey(n){oo=n}function Ty(n){return oo.loadJS(n)}function by(){return oo.gapiScript}function Ay(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Sy(n,e){const t=zt(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(_t(o,e??{}))return i;tt(i,"already-initialized")}return t.initialize({options:e})}function xy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ye);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ry(n,e,t){const r=so(n);V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=$u(e),{host:a,port:h}=Cy(e),d=h===null?"":`:${h}`,f={url:`${o}//${a}${d}/`},y=Object.freeze({host:a,port:h,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){V(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),V(_t(f,r.config.emulator)&&_t(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,Xn(a)?ll(`${o}//${a}${d}`):Py()}function $u(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Cy(n){const e=$u(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ac(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Ac(a)}}}function Ac(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Py(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Hu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,t){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}/**
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
 */async function rn(n,e){return sy(n,"POST","/v1/accounts:signInWithIdp",no(n,e))}/**
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
 */const ky="http://localhost";class Ft extends Hu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...o}=t;if(!r||!i)return null;const a=new Ft(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return rn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,rn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rn(e,t)}buildRequest(){const e={requestUri:ky,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yn(t)}return e}}/**
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
 */class Gu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class or extends Gu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ht extends or{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
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
 */class dt extends or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ft._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return dt.credential(t,r)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
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
 */class ft extends or{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
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
 */class pt extends or{constructor(){super("twitter.com")}static credential(e,t){return Ft._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return pt.credential(t,r)}catch{return null}}}pt.TWITTER_SIGN_IN_METHOD="twitter.com";pt.PROVIDER_ID="twitter.com";/**
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
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Ve._fromIdTokenResponse(e,r,i),a=Sc(r);return new hn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Sc(r);return new hn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Sc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ei extends je{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ei.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ei(e,t,r,i)}}function qu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ei._fromErrorAndOperation(n,o,e,r):o})}async function Ny(n,e,t=!1){const r=await Qn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hn._forOperation(n,"link",r)}/**
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
 */async function Dy(n,e,t=!1){const{auth:r}=n;if(Be(r.app))return Promise.reject(Ot(r));const i="reauthenticate";try{const o=await Qn(n,qu(r,i,e,n),t);V(o.idToken,r,"internal-error");const a=ro(o.idToken);V(a,r,"internal-error");const{sub:h}=a;return V(n.uid===h,r,"user-mismatch"),hn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),o}}/**
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
 */async function Oy(n,e,t=!1){if(Be(n.app))return Promise.reject(Ot(n));const r="signIn",i=await qu(n,r,e),o=await hn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function Vy(n,e,t,r){return Ae(n).onIdTokenChanged(e,t,r)}function Ly(n,e,t){return Ae(n).beforeAuthStateChanged(e,t)}const ti="__sak";/**
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
 */class Ku{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ti,"1"),this.storage.removeItem(ti),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const jy=1e3,My=10;class Qu extends Ku{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,h,d)=>{this.notifyListeners(a,d)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);gy()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,My):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},jy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qu.type="LOCAL";const Fy=Qu;/**
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
 */class Ju extends Ku{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ju.type="SESSION";const Yu=Ju;/**
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
 */function Uy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class gi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new gi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const h=Array.from(a).map(async f=>f(t.origin,o)),d=await Uy(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gi.receivers=[];/**
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
 */function ao(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class By{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((h,d)=>{const f=ao("",20);i.port1.start();const y=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(I){const A=I;if(A.data.eventId===f)switch(A.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),h(A.data.response);break;default:clearTimeout(y),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function $e(){return window}function Wy(n){$e().location.href=n}/**
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
 */function Xu(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function zy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $y(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Hy(){return Xu()?self:null}/**
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
 */const Zu="firebaseLocalStorageDb",Gy=1,ni="firebaseLocalStorage",eh="fbase_key";class ar{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yi(n,e){return n.transaction([ni],e?"readwrite":"readonly").objectStore(ni)}function qy(){const n=indexedDB.deleteDatabase(Zu);return new ar(n).toPromise()}function bs(){const n=indexedDB.open(Zu,Gy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ni,{keyPath:eh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ni)?e(r):(r.close(),await qy(),e(await bs()))})})}async function xc(n,e,t){const r=yi(n,!0).put({[eh]:e,value:t});return new ar(r).toPromise()}async function Ky(n,e){const t=yi(n,!1).get(e),r=await new ar(t).toPromise();return r===void 0?null:r.value}function Rc(n,e){const t=yi(n,!0).delete(e);return new ar(t).toPromise()}const Qy=800,Jy=3;class th{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Jy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gi._getInstance(Hy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await zy(),!this.activeServiceWorker)return;this.sender=new By(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$y()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bs();return await xc(e,ti,"1"),await Rc(e,ti),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>xc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ky(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Rc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=yi(i,!1).getAll();return new ar(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}th.type="LOCAL";const Yy=th;new sr(3e4,6e4);/**
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
 */function Xy(n,e){return e?Ye(e):(V(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class co extends Hu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zy(n){return Oy(n.auth,new co(n),n.bypassAuthState)}function e_(n){const{auth:e,user:t}=n;return V(t,e,"internal-error"),Dy(t,new co(n),n.bypassAuthState)}async function t_(n){const{auth:e,user:t}=n;return V(t,e,"internal-error"),Ny(t,new co(n),n.bypassAuthState)}/**
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
 */class nh{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:h}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(d))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zy;case"linkViaPopup":case"linkViaRedirect":return t_;case"reauthViaPopup":case"reauthViaRedirect":return e_;default:tt(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const n_=new sr(2e3,1e4);class Yt extends nh{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=ao();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n_.get())};e()}}Yt.currentPopupAction=null;/**
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
 */const r_="pendingRedirect",Lr=new Map;class i_ extends nh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Lr.get(this.auth._key());if(!e){try{const r=await s_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Lr.set(this.auth._key(),e)}return this.bypassAuthState||Lr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s_(n,e){const t=c_(e),r=a_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function o_(n,e){Lr.set(n._key(),e)}function a_(n){return Ye(n._redirectPersistence)}function c_(n){return Vr(r_,n.config.apiKey,n.name)}async function l_(n,e,t=!1){if(Be(n.app))return Promise.reject(Ot(n));const r=so(n),i=Xy(r,e),a=await new i_(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const u_=10*60*1e3;class h_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!d_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!rh(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ze(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=u_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cc(e))}saveEventToCache(e){this.cachedEventUids.add(Cc(e)),this.lastProcessedEventTime=Date.now()}}function Cc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function rh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function d_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rh(n);default:return!1}}/**
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
 */async function f_(n,e={}){return mn(n,"GET","/v1/projects",e)}/**
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
 */const p_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m_=/^https?/;async function g_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await f_(n);for(const t of e)try{if(y_(t))return}catch{}tt(n,"unauthorized-domain")}function y_(n){const e=Es(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!m_.test(t))return!1;if(p_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const __=new sr(3e4,6e4);function Pc(){const n=$e().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function v_(n){return new Promise((e,t)=>{var i,o,a;function r(){Pc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pc(),t(ze(n,"network-request-failed"))},timeout:__.get()})}if((o=(i=$e().gapi)==null?void 0:i.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=$e().gapi)!=null&&a.load)r();else{const h=Ay("iframefcb");return $e()[h]=()=>{gapi.load?r():t(ze(n,"network-request-failed"))},Ty(`${by()}?onload=${h}`).catch(d=>t(d))}}).catch(e=>{throw jr=null,e})}let jr=null;function w_(n){return jr=jr||v_(n),jr}/**
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
 */const I_=new sr(5e3,15e3),E_="__/auth/iframe",T_="emulator/auth/iframe",b_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S_(n){const e=n.config;V(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?to(e,T_):`https://${n.config.authDomain}/${E_}`,r={apiKey:e.apiKey,appName:n.name,v:dn},i=A_.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Yn(r).slice(1)}`}async function x_(n){const e=await w_(n),t=$e().gapi;return V(t,n,"internal-error"),e.open({where:document.body,url:S_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=ze(n,"network-request-failed"),h=$e().setTimeout(()=>{o(a)},I_.get());function d(){$e().clearTimeout(h),i(r)}r.ping(d).then(d,()=>{o(a)})}))}/**
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
 */const R_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C_=500,P_=600,k_="_blank",N_="http://localhost";class kc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D_(n,e,t,r=C_,i=P_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const d={...R_,width:r.toString(),height:i.toString(),top:o,left:a},f=we().toLowerCase();t&&(h=ju(f)?k_:t),Vu(f)&&(e=e||N_,d.scrollbars="yes");const y=Object.entries(d).reduce((A,[C,k])=>`${A}${C}=${k},`,"");if(my(f)&&h!=="_self")return O_(e||"",h),new kc(null);const I=window.open(e||"",h,y);V(I,n,"popup-blocked");try{I.focus()}catch{}return new kc(I)}function O_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const V_="__/auth/handler",L_="emulator/auth/handler",j_=encodeURIComponent("fac");async function Nc(n,e,t,r,i,o){V(n.config.authDomain,n,"auth-domain-config-required"),V(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:dn,eventId:i};if(e instanceof Gu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Md(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,I]of Object.entries({}))a[y]=I}if(e instanceof or){const y=e.getScopes().filter(I=>I!=="");y.length>0&&(a.scopes=y.join(","))}n.tenantId&&(a.tid=n.tenantId);const h=a;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const d=await n._getAppCheckToken(),f=d?`#${j_}=${encodeURIComponent(d)}`:"";return`${M_(n)}?${Yn(h).slice(1)}${f}`}function M_({config:n}){return n.emulator?to(n,L_):`https://${n.authDomain}/${V_}`}/**
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
 */const ts="webStorageSupport";class F_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yu,this._completeRedirectFn=l_,this._overrideRedirectResult=o_}async _openPopup(e,t,r,i){var a;nt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Nc(e,t,r,Es(),i);return D_(e,o,ao())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Nc(e,t,r,Es(),i);return Wy(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(nt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await x_(e),r=new h_(e);return t.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ts,{type:ts},i=>{var a;const o=(a=i==null?void 0:i[0])==null?void 0:a[ts];o!==void 0&&t(!!o),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=g_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wu()||Lu()||io()}}const U_=F_;var Dc="@firebase/auth",Oc="1.13.0";/**
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
 */class B_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function W_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function z_(n){He(new Le("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:h}=r.options;V(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zu(n)},f=new Iy(r,i,o,d);return xy(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),He(new Le("auth-internal",e=>{const t=so(e.getProvider("auth").getImmediate());return(r=>new B_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(Dc,Oc,W_(n)),Pe(Dc,Oc,"esm2020")}/**
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
 */const $_=5*60,H_=sl("authIdTokenMaxAge")||$_;let Vc=null;const G_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>H_)return;const i=t==null?void 0:t.token;Vc!==i&&(Vc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function q_(n=Rs()){const e=zt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Sy(n,{popupRedirectResolver:U_,persistence:[Yy,Fy,Yu]}),r=sl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=G_(o.toString());Ly(t,a,()=>a(t.currentUser)),Vy(t,h=>a(h))}}const i=rl("auth");return i&&Ry(t,`http://${i}`),t}function K_(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Ey({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=ze("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",K_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});z_("Browser");const ih="@firebase/installations",lo="0.6.21";/**
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
 */const sh=1e4,oh=`w:${lo}`,ah="FIS_v2",Q_="https://firebaseinstallations.googleapis.com/v1",J_=60*60*1e3,Y_="installations",X_="Installations";/**
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
 */const Z_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ut=new Wt(Y_,X_,Z_);function ch(n){return n instanceof je&&n.code.includes("request-failed")}/**
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
 */function lh({projectId:n}){return`${Q_}/projects/${n}/installations`}function uh(n){return{token:n.token,requestStatus:2,expiresIn:t0(n.expiresIn),creationTime:Date.now()}}async function hh(n,e){const r=(await e.json()).error;return Ut.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dh({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function e0(n,{refreshToken:e}){const t=dh(n);return t.append("Authorization",n0(e)),t}async function fh(n){const e=await n();return e.status>=500&&e.status<600?n():e}function t0(n){return Number(n.replace("s","000"))}function n0(n){return`${ah} ${n}`}/**
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
 */async function r0({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=lh(n),i=dh(n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:t,authVersion:ah,appId:n.appId,sdkVersion:oh},h={method:"POST",headers:i,body:JSON.stringify(a)},d=await fh(()=>fetch(r,h));if(d.ok){const f=await d.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:uh(f.authToken)}}else throw await hh("Create Installation",d)}/**
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
 */function ph(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function i0(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const s0=/^[cdef][\w-]{21}$/,As="";function o0(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=a0(n);return s0.test(t)?t:As}catch{return As}}function a0(n){return i0(n).substr(0,22)}/**
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
 */function _i(n){return`${n.appName}!${n.appId}`}/**
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
 */const mh=new Map;function gh(n,e){const t=_i(n);yh(t,e),c0(t,e)}function yh(n,e){const t=mh.get(n);if(t)for(const r of t)r(e)}function c0(n,e){const t=l0();t&&t.postMessage({key:n,fid:e}),u0()}let kt=null;function l0(){return!kt&&"BroadcastChannel"in self&&(kt=new BroadcastChannel("[Firebase] FID Change"),kt.onmessage=n=>{yh(n.data.key,n.data.fid)}),kt}function u0(){mh.size===0&&kt&&(kt.close(),kt=null)}/**
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
 */const h0="firebase-installations-database",d0=1,Bt="firebase-installations-store";let ns=null;function uo(){return ns||(ns=dl(h0,d0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Bt)}}})),ns}async function ri(n,e){const t=_i(n),i=(await uo()).transaction(Bt,"readwrite"),o=i.objectStore(Bt),a=await o.get(t);return await o.put(e,t),await i.done,(!a||a.fid!==e.fid)&&gh(n,e.fid),e}async function _h(n){const e=_i(n),r=(await uo()).transaction(Bt,"readwrite");await r.objectStore(Bt).delete(e),await r.done}async function vi(n,e){const t=_i(n),i=(await uo()).transaction(Bt,"readwrite"),o=i.objectStore(Bt),a=await o.get(t),h=e(a);return h===void 0?await o.delete(t):await o.put(h,t),await i.done,h&&(!a||a.fid!==h.fid)&&gh(n,h.fid),h}/**
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
 */async function ho(n){let e;const t=await vi(n.appConfig,r=>{const i=f0(r),o=p0(n,i);return e=o.registrationPromise,o.installationEntry});return t.fid===As?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function f0(n){const e=n||{fid:o0(),registrationStatus:0};return vh(e)}function p0(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ut.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=m0(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:g0(n)}:{installationEntry:e}}async function m0(n,e){try{const t=await r0(n,e);return ri(n.appConfig,t)}catch(t){throw ch(t)&&t.customData.serverCode===409?await _h(n.appConfig):await ri(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function g0(n){let e=await Lc(n.appConfig);for(;e.registrationStatus===1;)await ph(100),e=await Lc(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await ho(n);return r||t}return e}function Lc(n){return vi(n,e=>{if(!e)throw Ut.create("installation-not-found");return vh(e)})}function vh(n){return y0(n)?{fid:n.fid,registrationStatus:0}:n}function y0(n){return n.registrationStatus===1&&n.registrationTime+sh<Date.now()}/**
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
 */async function _0({appConfig:n,heartbeatServiceProvider:e},t){const r=v0(n,t),i=e0(n,t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:oh,appId:n.appId}},h={method:"POST",headers:i,body:JSON.stringify(a)},d=await fh(()=>fetch(r,h));if(d.ok){const f=await d.json();return uh(f)}else throw await hh("Generate Auth Token",d)}function v0(n,{fid:e}){return`${lh(n)}/${e}/authTokens:generate`}/**
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
 */async function fo(n,e=!1){let t;const r=await vi(n.appConfig,o=>{if(!wh(o))throw Ut.create("not-registered");const a=o.authToken;if(!e&&E0(a))return o;if(a.requestStatus===1)return t=w0(n,e),o;{if(!navigator.onLine)throw Ut.create("app-offline");const h=b0(o);return t=I0(n,h),h}});return t?await t:r.authToken}async function w0(n,e){let t=await jc(n.appConfig);for(;t.authToken.requestStatus===1;)await ph(100),t=await jc(n.appConfig);const r=t.authToken;return r.requestStatus===0?fo(n,e):r}function jc(n){return vi(n,e=>{if(!wh(e))throw Ut.create("not-registered");const t=e.authToken;return A0(t)?{...e,authToken:{requestStatus:0}}:e})}async function I0(n,e){try{const t=await _0(n,e),r={...e,authToken:t};return await ri(n.appConfig,r),t}catch(t){if(ch(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await _h(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await ri(n.appConfig,r)}throw t}}function wh(n){return n!==void 0&&n.registrationStatus===2}function E0(n){return n.requestStatus===2&&!T0(n)}function T0(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+J_}function b0(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function A0(n){return n.requestStatus===1&&n.requestTime+sh<Date.now()}/**
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
 */async function S0(n){const e=n,{installationEntry:t,registrationPromise:r}=await ho(e);return r?r.catch(console.error):fo(e).catch(console.error),t.fid}/**
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
 */async function x0(n,e=!1){const t=n;return await R0(t),(await fo(t,e)).token}async function R0(n){const{registrationPromise:e}=await ho(n);e&&await e}/**
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
 */function C0(n){if(!n||!n.options)throw rs("App Configuration");if(!n.name)throw rs("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw rs(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function rs(n){return Ut.create("missing-app-config-values",{valueName:n})}/**
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
 */const Ih="installations",P0="installations-internal",k0=n=>{const e=n.getProvider("app").getImmediate(),t=C0(e),r=zt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},N0=n=>{const e=n.getProvider("app").getImmediate(),t=zt(e,Ih).getImmediate();return{getId:()=>S0(t),getToken:i=>x0(t,i)}};function D0(){He(new Le(Ih,k0,"PUBLIC")),He(new Le(P0,N0,"PRIVATE"))}D0();Pe(ih,lo);Pe(ih,lo,"esm2020");/**
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
 */const ii="analytics",O0="firebase_id",V0="origin",L0=60*1e3,j0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",po="https://www.googletagmanager.com/gtag/js";/**
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
 */const Te=new ai("@firebase/analytics");/**
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
 */const M0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Re=new Wt("analytics","Analytics",M0);/**
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
 */function F0(n){if(!n.startsWith(po)){const e=Re.create("invalid-gtag-resource",{gtagURL:n});return Te.warn(e.message),""}return n}function Eh(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function U0(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function B0(n,e){const t=U0("firebase-js-sdk-policy",{createScriptURL:F0}),r=document.createElement("script"),i=`${po}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function W0(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function z0(n,e,t,r,i,o){const a=r[i];try{if(a)await e[a];else{const d=(await Eh(t)).find(f=>f.measurementId===i);d&&await e[d.appId]}}catch(h){Te.error(h)}n("config",i,o)}async function $0(n,e,t,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const h=await Eh(t);for(const d of a){const f=h.find(I=>I.measurementId===d),y=f&&e[f.appId];if(y)o.push(y);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",r,i||{})}catch(o){Te.error(o)}}function H0(n,e,t,r){async function i(o,...a){try{if(o==="event"){const[h,d]=a;await $0(n,e,t,h,d)}else if(o==="config"){const[h,d]=a;await z0(n,e,t,r,h,d)}else if(o==="consent"){const[h,d]=a;n("consent",h,d)}else if(o==="get"){const[h,d,f]=a;n("get",h,d,f)}else if(o==="set"){const[h]=a;n("set",h)}else n(o,...a)}catch(h){Te.error(h)}}return i}function G0(n,e,t,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=H0(o,n,e,t),{gtagCore:o,wrappedGtag:window[i]}}function q0(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(po)&&t.src.includes(n))return t;return null}/**
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
 */const K0=30,Q0=1e3;class J0{constructor(e={},t=Q0){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Th=new J0;function Y0(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function X0(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:Y0(t)},i=j0.replace("{app-id}",e),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let h="";try{const d=await o.json();(a=d.error)!=null&&a.message&&(h=d.error.message)}catch{}throw Re.create("config-fetch-failed",{httpStatus:o.status,responseMessage:h})}return o.json()}async function Z0(n,e=Th,t){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw Re.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Re.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new nv;return setTimeout(async()=>{h.abort()},L0),bh({appId:r,apiKey:i,measurementId:o},a,h,e)}async function bh(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Th){var h;const{appId:o,measurementId:a}=n;try{await ev(r,e)}catch(d){if(a)return Te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:a};throw d}try{const d=await X0(n);return i.deleteThrottleMetadata(o),d}catch(d){const f=d;if(!tv(f)){if(i.deleteThrottleMetadata(o),a)return Te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:o,measurementId:a};throw d}const y=Number((h=f==null?void 0:f.customData)==null?void 0:h.httpStatus)===503?Ea(t,i.intervalMillis,K0):Ea(t,i.intervalMillis),I={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return i.setThrottleMetadata(o,I),Te.debug(`Calling attemptFetch again in ${y} millis`),bh(n,I,r,i)}}function ev(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(o),r(Re.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function tv(n){if(!(n instanceof je)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class nv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rv(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const o=await e,a={...r,send_to:o};n("event",t,a)}}async function iv(n,e,t,r){if(r&&r.global){const i={};for(const o of Object.keys(t))i[`user_properties.${o}`]=t[o];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}/**
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
 */async function sv(){if(al())try{await cl()}catch(n){return Te.warn(Re.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Te.warn(Re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ov(n,e,t,r,i,o,a){const h=Z0(n);h.then(A=>{t[A.measurementId]=A.appId,n.options.measurementId&&A.measurementId!==n.options.measurementId&&Te.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>Te.error(A)),e.push(h);const d=sv().then(A=>{if(A)return r.getId()}),[f,y]=await Promise.all([h,d]);q0(o)||B0(o,f.measurementId),i("js",new Date);const I=(a==null?void 0:a.config)??{};return I[V0]="firebase",I.update=!0,y!=null&&(I[O0]=y),i("config",f.measurementId,I),f.measurementId}/**
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
 */class av{constructor(e){this.app=e}_delete(){return delete sn[this.app.options.appId],Promise.resolve()}}let sn={},Mc=[];const Fc={};let is="dataLayer",cv="gtag",Uc,mo,Bc=!1;function lv(){const n=[];if(ol()&&n.push("This is a browser extension environment."),Od()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Re.create("invalid-analytics-context",{errorInfo:e});Te.warn(t.message)}}function uv(n,e,t){lv();const r=n.options.appId;if(!r)throw Re.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Re.create("no-api-key");if(sn[r]!=null)throw Re.create("already-exists",{id:r});if(!Bc){W0(is);const{wrappedGtag:o,gtagCore:a}=G0(sn,Mc,Fc,is,cv);mo=o,Uc=a,Bc=!0}return sn[r]=ov(n,Mc,Fc,e,Uc,is,t),new av(n)}function hv(n=Rs()){n=Ae(n);const e=zt(n,ii);return e.isInitialized()?e.getImmediate():dv(n)}function dv(n,e={}){const t=zt(n,ii);if(t.isInitialized()){const i=t.getImmediate();if(_t(e,t.getOptions()))return i;throw Re.create("already-initialized")}return t.initialize({options:e})}function fv(n,e,t){n=Ae(n),iv(mo,sn[n.app.options.appId],e,t).catch(r=>Te.error(r))}function pv(n,e,t,r){n=Ae(n),rv(mo,sn[n.app.options.appId],e,t,r).catch(i=>Te.error(i))}const Wc="@firebase/analytics",zc="0.10.21";function mv(){He(new Le(ii,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return uv(r,i,t)},"PUBLIC")),He(new Le("analytics-internal",n,"PRIVATE")),Pe(Wc,zc),Pe(Wc,zc,"esm2020");function n(e){try{const t=e.getProvider(ii).getImmediate();return{logEvent:(r,i,o)=>pv(t,r,i,o),setUserProperties:(r,i)=>fv(t,r,i)}}catch(t){throw Re.create("interop-component-reg-failed",{reason:t})}}}mv();const $c={apiKey:"AIzaSyCoFJWEc8z1Z-kddKR8T-QggAFCdm4Y7wI",authDomain:"daywise-ays8t.firebaseapp.com",projectId:"daywise-ays8t",storageBucket:"daywise-ays8t.firebasestorage.app",messagingSenderId:"690549644365",appId:"1:690549644365:web:d895858fbde5497b1c5004",measurementId:void 0};let On,Hc,Jn,gv;try{$c.apiKey||console.warn("Firebase Hub: Missing VITE_FIREBASE_API_KEY. Initializing in offline simulation mode."),On=fl($c),Hc=q_(On),Jn=Og(On),typeof window<"u"&&(gv=hv(On))}catch{console.error("Firebase Hub: Critical Initialization Error. Forcing local fallback."),On={},Hc={},Jn={}}const yv=({isOpen:n,onClose:e,initialPhone:t="",initialBusinessName:r=""})=>{const[i,o]=U.useState(1),[a,h]=U.useState(r),[d,f]=U.useState("Custom Web & SaaS Application"),[y,I]=U.useState("#00F0FF"),[A,C]=U.useState(t),[k,L]=U.useState("Professional WaaS (GH₵ 999/mo)"),[O,$]=U.useState("High-speed platform with MoMo checkout and automated WhatsApp lead engine"),[W,Z]=U.useState(0),[Ce,ie]=U.useState("Analyzing architectural requirements..."),[le,w]=U.useState(!1),m=[{name:"Cyan Glow",hex:"#00F0FF"},{name:"Luxe Gold",hex:"#E5C07B"},{name:"Emerald Green",hex:"#10B981"},{name:"Royal Blue",hex:"#3B82F6"},{name:"Velvet Rose",hex:"#F43F5E"}];if(U.useEffect(()=>{if(i===3&&!le){Z(0),w(!1);const G=setInterval(()=>{Z(Tt=>{if(Tt>=100)return clearInterval(G),w(!0),100;const Qe=Tt+5;return Qe<30?ie("Synthesizing technical scope & deliverable roadmap..."):Qe<65?ie(`Mapping ${k.split("(")[0].trim()} SLA stack...`):Qe<90?ie("Connecting direct WhatsApp consultation gateway..."):ie("Proposal Blueprint Generated Successfully"),Qe})},100);return()=>clearInterval(G)}},[i,le,k]),!n)return null;const _=G=>{if(G.preventDefault(),!a.trim()){alert("Please enter your business or project name.");return}o(2)},E=async()=>{try{Jn&&(await Su(gu(Jn,"onboarding_submissions"),{businessName:a.trim(),serviceArea:d,primaryColor:y,whatsappNumber:A.trim(),selectedPlan:k,projectRequirement:O.trim(),status:"pending_consultation",createdAt:bu(),url:typeof window<"u"?window.location.href:"",userAgent:typeof navigator<"u"?navigator.userAgent:""}),console.log("✅ Lead project brief successfully saved to Firestore."))}catch(G){console.warn("Firestore submission notice (demo mode):",G)}},v=G=>{if(G.preventDefault(),!A.trim()){alert("Please enter your WhatsApp contact number.");return}E(),o(3)},b=encodeURIComponent(a.trim()),g=encodeURIComponent(d.trim()),pe=encodeURIComponent(k.trim()),Ke=encodeURIComponent(O.trim()),wi=`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20start%20a%20project%20for%20"${b}".%0A%0A•%20Service%3A%20${g}%0A•%20Preferred%20Tier%3A%20${pe}%0A•%20Requirement%3A%20${Ke}%0A•%20My%20Phone%3A%20${encodeURIComponent(A.trim())}`;return u.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(9, 11, 16, 0.88)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",boxSizing:"border-box"},children:u.jsxs("div",{style:{background:"rgba(13, 18, 29, 0.95)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"24px",maxWidth:"640px",width:"100%",maxHeight:"90vh",overflowY:"auto",padding:"clamp(1.6rem, 4vw, 2.5rem) clamp(1.2rem, 3vw, 2rem)",position:"relative",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.08)",boxSizing:"border-box"},children:[u.jsx("button",{onClick:e,"aria-label":"Close dialog",style:{position:"absolute",top:"1.2rem",right:"1.2rem",background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"#FFFFFF",fontSize:"1rem",width:"34px",height:"34px",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease",zIndex:10},children:"✕"}),u.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem",paddingRight:"2rem",paddingLeft:"2rem"},children:[u.jsxs("span",{style:{background:"rgba(0, 240, 255, 0.08)",border:"1px solid rgba(0, 240, 255, 0.25)",color:"#00F0FF",padding:"0.35rem 1rem",borderRadius:"50px",fontSize:"0.72rem",fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase",display:"inline-block",lineHeight:1.4},children:["PROJECT BRIEF • STEP ",i," OF 3"]}),u.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"center",marginTop:"1.2rem"},children:[u.jsx("div",{style:{height:"5px",width:"30%",borderRadius:"4px",background:i>=1?"#00F0FF":"rgba(255, 255, 255, 0.1)",transition:"all 0.3s ease"}}),u.jsx("div",{style:{height:"5px",width:"30%",borderRadius:"4px",background:i>=2?"#00F0FF":"rgba(255, 255, 255, 0.1)",transition:"all 0.3s ease"}}),u.jsx("div",{style:{height:"5px",width:"30%",borderRadius:"4px",background:i>=3?"#00F0FF":"rgba(255, 255, 255, 0.1)",transition:"all 0.3s ease"}})]})]}),i===1&&u.jsxs("form",{onSubmit:_,children:[u.jsxs("h2",{className:"heading-luminance",style:{fontSize:"1.6rem",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em",textAlign:"center"},children:["Tell Us About Your ",u.jsx("span",{className:"cyan-luminance",children:"Project"})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",marginBottom:"1.8rem",textAlign:"center"},children:"Fast-track your development roadmap with high-performance Ghanaian engineering."}),u.jsxs("div",{style:{marginBottom:"1.4rem"},children:[u.jsxs("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:["Business or Organization Name ",u.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),u.jsx("input",{type:"text",placeholder:"e.g. Sedemson Group, Ama's Luxury, Apex Logistics...",value:a,onChange:G=>h(G.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"},required:!0})]}),u.jsxs("div",{style:{marginBottom:"1.4rem"},children:[u.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:"Primary Specialization Needed"}),u.jsxs("select",{value:d,onChange:G=>f(G.target.value),style:{width:"100%",background:"#10151C",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"},children:[u.jsx("option",{value:"Custom Web & SaaS Application",children:"Custom Web & SaaS Application"}),u.jsx("option",{value:"iOS & Android Mobile App Development",children:"iOS & Android Mobile App Development"}),u.jsx("option",{value:"Brand Identity & UI/UX Design System",children:"Brand Identity & UI/UX Design System"}),u.jsx("option",{value:"Cloud Infrastructure & DevOps Automation",children:"Cloud Infrastructure & DevOps Automation"})]})]}),u.jsxs("div",{style:{marginBottom:"2rem"},children:[u.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.8rem"},children:"Brand Accent Palette"}),u.jsx("div",{style:{display:"flex",gap:"0.8rem",flexWrap:"wrap"},children:m.map(G=>u.jsx("button",{type:"button",onClick:()=>I(G.hex),style:{background:G.hex,border:y===G.hex?"3px solid #ffffff":"1px solid transparent",width:"40px",height:"40px",borderRadius:"50%",cursor:"pointer",boxShadow:y===G.hex?`0 0 15px ${G.hex}`:"none",transition:"transform 0.2s"},title:G.name},G.hex))})]}),u.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"0.85rem",fontSize:"0.95rem"},children:[u.jsx("span",{children:"Continue to Project Scope"}),u.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),i===2&&u.jsxs("form",{onSubmit:v,children:[u.jsxs("h2",{className:"heading-luminance",style:{fontSize:"1.6rem",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em",textAlign:"center"},children:["Project Scope & ",u.jsx("span",{className:"cyan-luminance",children:"Routing"})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",marginBottom:"1.8rem",textAlign:"center"},children:"Define your preferred service tier and primary feature requirements."}),u.jsxs("div",{style:{marginBottom:"1.4rem"},children:[u.jsxs("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:["WhatsApp Direct Contact Number ",u.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),u.jsx("input",{type:"text",placeholder:"e.g. 024 123 4567 or 055 000 1122",value:A,onChange:G=>C(G.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"},required:!0})]}),u.jsxs("div",{style:{marginBottom:"1.4rem"},children:[u.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:"Preferred Subscription / Service Tier"}),u.jsxs("select",{value:k,onChange:G=>L(G.target.value),style:{width:"100%",background:"#10151C",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"},children:[u.jsx("option",{value:"Lite Tier (GH₵ 49/mo)",children:"Lite Tier (GH₵ 49/mo - Micro Catalog & Lead Link)"}),u.jsx("option",{value:"Starter Tier (GH₵ 499/mo)",children:"Starter Tier (GH₵ 499/mo - High-Converting WaaS)"}),u.jsx("option",{value:"Professional Tier (GH₵ 999/mo)",children:"Professional Tier (GH₵ 999/mo - Corporate Multi-Page)"}),u.jsx("option",{value:"Enterprise Custom (GH₵ 2,499/mo)",children:"Enterprise Custom (GH₵ 2,499/mo - Custom SaaS & APIs)"})]})]}),u.jsxs("div",{style:{marginBottom:"2rem"},children:[u.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:"Key Technical Objective / Deliverable"}),u.jsx("input",{type:"text",value:O,onChange:G=>$(G.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"}})]}),u.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[u.jsx("button",{type:"button",onClick:()=>o(1),className:"btn-secondary",style:{padding:"0.85rem 1.4rem",fontSize:"0.92rem"},children:u.jsx("span",{children:"← Back"})}),u.jsxs("button",{type:"submit",className:"btn-primary",style:{flexGrow:1,padding:"0.85rem 1.6rem",fontSize:"0.95rem"},children:[u.jsx("span",{children:"Generate Fast-Track Proposal"}),u.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]}),i===3&&u.jsx("div",{children:le?u.jsxs("div",{children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:"1.5rem"},children:[u.jsx("span",{style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid #10B981",color:"#10B981",padding:"0.35rem 1.2rem",borderRadius:"20px",fontWeight:750,fontSize:"0.75rem",letterSpacing:"0.05em"},children:"PROPOSAL BLUEPRINT READY"}),u.jsx("h2",{className:"heading-luminance",style:{fontSize:"1.6rem",fontWeight:850,marginTop:"0.8rem"},children:a}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem"},children:"48-Hour SLA managed launch architecture prepared for your review."})]}),u.jsxs("div",{style:{border:`1px solid ${y}55`,borderRadius:"16px",background:"rgba(255, 255, 255, 0.03)",padding:"1.4rem",maxWidth:"480px",margin:"0 auto 1.8rem",boxShadow:`0 10px 30px ${y}22`,textAlign:"left"},children:[u.jsxs("div",{style:{borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"0.8rem",marginBottom:"0.8rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:"1.05rem",fontWeight:850,color:"#FFFFFF"},children:a}),u.jsx("span",{style:{fontSize:"0.76rem",color:y,fontWeight:700},children:d})]}),u.jsx("span",{style:{background:"rgba(255,255,255,0.08)",padding:"0.2rem 0.6rem",borderRadius:"8px",fontSize:"0.75rem",color:"#E5C07B",fontWeight:750},children:k.split("(")[0].trim()})]}),u.jsxs("div",{style:{fontSize:"0.85rem",color:"#94A3B8",lineHeight:1.6},children:[u.jsxs("div",{style:{marginBottom:"0.4rem"},children:[u.jsx("strong",{style:{color:"#FFFFFF"},children:"Primary Deliverable:"})," ",O]}),u.jsxs("div",{children:[u.jsx("strong",{style:{color:"#FFFFFF"},children:"Contact WhatsApp:"})," ",A]})]})]}),u.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[u.jsxs("a",{href:wi,target:"_blank",rel:"noopener noreferrer",className:"btn-primary",style:{textDecoration:"none",padding:"0.85rem 1.8rem",fontSize:"0.92rem"},children:[u.jsx("span",{children:"Submit & Open WhatsApp Brief"}),u.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),u.jsx("button",{onClick:()=>o(1),className:"btn-secondary",style:{padding:"0.85rem 1.4rem",fontSize:"0.92rem"},children:"Modify Details"})]})]}):u.jsxs("div",{style:{textAlign:"center",padding:"2rem 1rem"},children:[u.jsx("div",{style:{width:"44px",height:"44px",margin:"0 auto 1.5rem",borderRadius:"50%",border:"3px solid rgba(0,240,255,0.2)",borderTopColor:"#00F0FF",animation:"spin 1s linear infinite"}}),u.jsxs("h2",{className:"heading-luminance",style:{fontSize:"1.6rem",fontWeight:850,marginBottom:"0.6rem"},children:["Synthesizing Blueprint for ",u.jsx("span",{className:"cyan-luminance",children:a})]}),u.jsx("p",{style:{color:"#00F0FF",fontSize:"0.95rem",fontWeight:700,marginBottom:"1.5rem"},children:Ce}),u.jsx("div",{style:{background:"rgba(255,255,255,0.08)",height:"8px",borderRadius:"10px",overflow:"hidden",maxWidth:"420px",margin:"0 auto 1rem"},children:u.jsx("div",{style:{width:`${W}%`,height:"100%",background:"linear-gradient(90deg, #00F0FF, #E5C07B)",transition:"width 0.2s ease"}})}),u.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.82rem"},children:[W,"% Prepared"]})]})})]})})},Gc=()=>{const[n,e]=U.useState("all"),[t,r]=U.useState(""),i=[{id:"sedemson",title:"Sedemson Stone",category:"b2b",categoryLabel:"B2B & Architectural Finishing",tagline:"Premium Natural Stone Cladding & Architectural Finishes across Ghana.",image:"/sedemson_stone_hero.png",tags:["WaaS Architecture","Catalog Engine","Direct WhatsApp RFQs"],metric:"+340% Inbound WhatsApp RFQs",status:"Live Production",link:"/sedemson-stone/index.html"},{id:"emewear",title:"Emewear Luxury",category:"ecommerce",categoryLabel:"Fashion & E-Commerce",tagline:"Ghana-Made Luxury Ankara, Plus-Size Heritage Fashion & Global Delivery.",image:"/emewear/emewear_hero.jpg",tags:["Fashion WaaS","MoMo Automated Checkout","Automated Dispatch"],metric:"Zero-Friction MoMo Checkout",status:"Live Production",link:"/emewear/index.html"},{id:"ansah-delali",title:"Ansah Delali Foundation",category:"nonprofit",categoryLabel:"Non-Profit & Social Impact",tagline:"Empowering Ghanaian tertiary students and underserved youth through mentorship, education & digital skills.",image:"/ansah-delali/cohort-group.jpg",tags:["Education WaaS","SkillUp 1.0 Outreach","Student Mentorship Network"],metric:"SkillUp 1.0 Community Impact",status:"Live Production",link:"/ansah-delali/index.html"}],o=Jc.useMemo(()=>{const a=t.replace(/[^\w\s-]/gi,"").toLowerCase().trim();return i.filter(h=>{const d=n==="all"||h.category===n,f=!a||h.title.toLowerCase().includes(a)||h.tagline.toLowerCase().includes(a)||h.categoryLabel.toLowerCase().includes(a)||h.tags.some(y=>y.toLowerCase().includes(a));return d&&f})},[t,n,i]);return u.jsxs("section",{className:"portfolio-section",id:"work",style:{padding:"3.5rem 1rem",maxWidth:"1200px",margin:"0 auto"},children:[u.jsxs("div",{className:"portfolio-header fade-in-up",style:{textAlign:"center",marginBottom:"3rem"},children:[u.jsxs("span",{className:"badge-pill",style:{marginBottom:"1rem"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#00F0FF"}}),"PRODUCTION CASE STUDIES"]}),u.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.8rem, 5vw, 2.5rem)",fontWeight:850,marginTop:"0.8rem",letterSpacing:"-0.03em"},children:["Featured ",u.jsx("span",{className:"cyan-luminance",children:"Client Work"})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",marginTop:"0.6rem",letterSpacing:"-0.01em",maxWidth:"640px",margin:"0.6rem auto 0",lineHeight:1.6},children:"Real-world platforms and Website-as-a-Service solutions engineered for revenue growth and operational excellence."}),u.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.8rem",flexWrap:"wrap",marginTop:"2.2rem"},children:[u.jsx("button",{onClick:()=>e("all"),className:n==="all"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"All Case Studies"}),u.jsx("button",{onClick:()=>e("b2b"),className:n==="b2b"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"B2B & Architectural"}),u.jsx("button",{onClick:()=>e("ecommerce"),className:n==="ecommerce"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"Fashion & Retail"}),u.jsx("button",{onClick:()=>e("nonprofit"),className:n==="nonprofit"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"Social Impact / NGO"}),u.jsxs("div",{style:{position:"relative",width:"min(100%, 240px)"},children:[u.jsx("input",{type:"text",placeholder:"Search case studies...",value:t,onChange:a=>r(a.target.value),style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.12)",color:"#FFFFFF",padding:"0.48rem 1.1rem 0.48rem 2.2rem",borderRadius:"30px",fontSize:"0.85rem",outline:"none",width:"100%",transition:"border-color 0.2s ease"}}),u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#94A3B8",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",left:"0.8rem",top:"50%",transform:"translateY(-50%)"},children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})]})]})]}),u.jsx("div",{className:"portfolio-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 340px), 1fr))",gap:"2rem",width:"100%"},children:o.map(a=>u.jsxs("div",{className:"portfolio-card neon-border fade-in-up",style:{borderRadius:"20px",overflow:"hidden",background:"rgba(13, 18, 29, 0.75)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)"},children:[u.jsxs("div",{children:[u.jsxs("div",{className:"card-image-placeholder",style:{padding:0,height:"220px",overflow:"hidden",position:"relative"},children:[u.jsx("img",{src:a.image,alt:a.title,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",transition:"transform 0.5s ease"}}),u.jsx("div",{style:{position:"absolute",top:"1rem",right:"1rem"},children:u.jsx("span",{className:"badge-pill cyan",style:{fontSize:"0.72rem",padding:"0.25rem 0.65rem",backdropFilter:"blur(8px)"},children:a.categoryLabel})})]}),u.jsxs("div",{className:"card-content",style:{padding:"1.6rem"},children:[u.jsx("h3",{style:{fontSize:"1.35rem",color:"#FFFFFF",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em"},children:a.title}),u.jsx("p",{className:"tagline",style:{color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"1.2rem",lineHeight:1.5,letterSpacing:"-0.01em"},children:a.tagline}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"rgba(0, 240, 255, 0.06)",border:"1px solid rgba(0, 240, 255, 0.15)",padding:"0.5rem 0.85rem",borderRadius:"10px",marginBottom:"1.3rem"},children:[u.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#00F0FF",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),u.jsx("polyline",{points:"17 6 23 6 23 12"})]}),u.jsx("span",{style:{fontSize:"0.82rem",fontWeight:750,color:"#38BDF8"},children:a.metric})]}),u.jsx("div",{className:"tags",style:{display:"flex",gap:"0.45rem",marginBottom:"1.4rem",flexWrap:"wrap"},children:a.tags.map((h,d)=>u.jsx("span",{className:"tag",style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.08)",color:"#CBD5E1",padding:"0.25rem 0.6rem",borderRadius:"6px",fontSize:"0.76rem",fontWeight:600},children:h},d))})]})]}),u.jsxs("div",{style:{padding:"0 1.6rem 1.6rem",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid rgba(255, 255, 255, 0.05)",paddingTop:"1rem"},children:[u.jsxs("span",{className:"view-link",style:{color:"var(--text-muted)",cursor:"default",display:"inline-flex",alignItems:"center",gap:"0.4rem",fontWeight:700,fontSize:"0.82rem"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#4ADE80"}}),a.status]}),u.jsxs("a",{href:a.link||`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20learn%20more%20about%20the%20${encodeURIComponent(a.title)}%20case%20study.`,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.35rem",color:"#F8FAFC",fontSize:"0.82rem",fontWeight:700,textDecoration:"none",background:"rgba(255, 255, 255, 0.05)",padding:"0.35rem 0.75rem",borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.1)",transition:"all 0.2s ease"},children:[u.jsx("span",{children:"Explore"}),u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]},a.id))})]})},Ah=U.createContext(void 0),_v=({children:n})=>{const[e,t]=U.useState(()=>localStorage.getItem("kdigital-currency")||"GHS"),[r,i]=U.useState(.07),[o,a]=U.useState(!0),h=f=>{t(f),localStorage.setItem("kdigital-currency",f)};U.useEffect(()=>{(async()=>{try{a(!0);const I=await(await fetch("https://open.er-api.com/v6/latest/GHS")).json();I.rates&&I.rates.USD&&i(I.rates.USD)}catch(y){console.error("Failed to fetch exchange rate:",y)}finally{a(!1)}})()},[]);const d=f=>e==="GHS"?`GHS ${f.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}`:`$${(f*r).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}`;return u.jsx(Ah.Provider,{value:{currency:e,setCurrency:h,exchangeRate:r,formatPrice:d,isLoading:o},children:n})},vv=()=>{const n=U.useContext(Ah);if(n===void 0)throw new Error("useCurrency must be used within a CurrencyProvider");return n},qc=()=>{const{currency:n,setCurrency:e,formatPrice:t}=vv(),[r,i]=U.useState(2),o=[{id:"lite",name:"Lite Tier",badge:"SME STARTER",priceGhs:49,desc:"Ideal for local merchants, Susu collectives, and boutique artisans.",features:["Curated Digital Product Catalog","Direct Mobile Money Payment Routing","Instant WhatsApp Lead Notifications","Cloudflare SSL & Managed Fast DNS"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20SME%20Lite%20Plan."},{id:"starter",name:"Starter Tier",badge:"GROWTH",priceGhs:499,desc:"Perfect for small businesses needing a high-converting digital storefront.",features:["Custom Single Page Web Architecture","Automated WhatsApp Inquiry Routing","Ultra-Fast Mobile Optimization","Managed Weekly Backups & Security"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Starter%20Plan."},{id:"professional",name:"Professional Tier",badge:"MOST POPULAR",priceGhs:999,desc:"For growing brands needing a complete multi-page corporate ecosystem.",popular:!0,features:["Up to 5 Tailored Application Pages","Full Technical SEO & Schema Microdata","Automated Lead Intake CRM Integration","24/7 Priority Engineering SLA"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Professional%20Plan."},{id:"enterprise",name:"Enterprise Tier",badge:"CUSTOM APPLICATION",priceGhs:2499,desc:"Advanced web applications, custom databases, and API engineering.",features:["Full Custom Architecture & Tech Stack","Backend & Payment Gateway Integration","Advanced Analytics & Real-Time Dashboard","Dedicated Senior Engineer Account Lead"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'd%20like%20to%20discuss%20a%20Custom%20Enterprise%20Plan."}];return u.jsxs("section",{className:"pricing-section",id:"pricing",style:{padding:"3.5rem 1rem",maxWidth:"1200px",margin:"0 auto",width:"100%",boxSizing:"border-box",overflowX:"hidden"},children:[u.jsxs("div",{className:"pricing-header fade-in-up",style:{textAlign:"center",marginBottom:"3rem",width:"100%",boxSizing:"border-box"},children:[u.jsxs("span",{className:"badge-pill",style:{marginBottom:"1rem",whiteSpace:"normal",lineHeight:1.4},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#00F0FF",flexShrink:0}}),"MANAGED TIERS & SLA"]}),u.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.8rem, 5vw, 2.5rem)",fontWeight:850,marginTop:"0.8rem",letterSpacing:"-0.03em"},children:["Transparent ",u.jsx("span",{className:"cyan-luminance",children:"WaaS Pricing"})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",marginTop:"0.6rem",letterSpacing:"-0.01em",maxWidth:"640px",margin:"0.6rem auto 0",lineHeight:1.6},children:"Predictable, high-ROI Website as a Service subscription tiers with zero hidden setup fees or surprise maintenance costs."}),u.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.8rem",marginTop:"1.8rem"},children:[u.jsx("span",{style:{color:n==="GHS"?"#00F0FF":"var(--text-muted)",fontWeight:750,fontSize:"0.85rem",letterSpacing:"0.04em"},children:"GHS (₵)"}),u.jsx("button",{onClick:()=>e(n==="GHS"?"USD":"GHS"),"aria-label":`Switch pricing currency from ${n} to ${n==="GHS"?"USD":"GHS"}`,title:`Switch pricing currency from ${n} to ${n==="GHS"?"USD":"GHS"}`,style:{background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.15)",width:"54px",height:"28px",borderRadius:"20px",position:"relative",cursor:"pointer",display:"flex",alignItems:"center",padding:"2px",transition:"all 0.2s ease"},children:u.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"#00F0FF",transform:n==="USD"?"translateX(26px)":"translateX(0)",transition:"transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",boxShadow:"0 2px 6px rgba(0, 240, 255, 0.4)"}})}),u.jsx("span",{style:{color:n==="USD"?"#00F0FF":"var(--text-muted)",fontWeight:750,fontSize:"0.85rem",letterSpacing:"0.04em"},children:"USD ($)"})]})]}),u.jsx("div",{className:"pricing-cards",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 250px), 1fr))",gap:"1.5rem",maxWidth:"1200px",margin:"0 auto",width:"100%",boxSizing:"border-box"},children:o.map((a,h)=>{const d=h===r;return u.jsxs("div",{onClick:()=>i(h),className:"price-card fade-in-up",style:{background:d?"rgba(0, 240, 255, 0.04)":"rgba(13, 18, 29, 0.75)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderColor:d?"rgba(0, 240, 255, 0.45)":"rgba(255, 255, 255, 0.08)",borderWidth:"1px",borderStyle:"solid",borderRadius:"20px",padding:"1.8rem 1.4rem",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:d?"0 15px 40px -10px rgba(0, 240, 255, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.12)":"0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)",transition:"all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",cursor:"pointer",position:"relative"},children:[u.jsxs("div",{children:[u.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:u.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,padding:"0.2rem 0.6rem",borderRadius:"6px",background:a.popular?"rgba(250, 204, 21, 0.15)":"rgba(56, 189, 248, 0.12)",color:a.popular?"#FACC15":"#38BDF8",letterSpacing:"0.04em"},children:a.badge})}),u.jsx("h3",{style:{fontSize:"1.3rem",color:d?"#00F0FF":"#FFFFFF",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em"},children:a.name}),u.jsxs("div",{className:"price",style:{margin:"0.8rem 0 1rem"},children:[u.jsx("span",{className:"amount",style:{fontSize:"2.1rem",fontWeight:850,color:"#FFFFFF",letterSpacing:"-0.03em"},children:t(a.priceGhs)}),u.jsx("span",{className:"period",style:{fontSize:"0.85rem",color:"var(--text-muted)",marginLeft:"0.2rem"},children:"/month"})]}),u.jsx("p",{className:"card-desc",style:{fontSize:"0.86rem",color:"var(--text-muted)",lineHeight:1.5,marginBottom:"1.4rem"},children:a.desc}),u.jsxs("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.06)",paddingTop:"1.2rem",marginBottom:"1.6rem"},children:[u.jsx("span",{style:{display:"block",fontSize:"0.72rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-muted)",marginBottom:"0.8rem"},children:"Included Features"}),u.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.6rem"},children:a.features.map((f,y)=>u.jsxs("li",{style:{fontSize:"0.83rem",color:"#F1F5F9",display:"flex",alignItems:"flex-start",gap:"0.5rem",lineHeight:1.4},children:[u.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#00F0FF",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"2px"},children:u.jsx("polyline",{points:"20 6 9 17 4 12"})}),u.jsx("span",{children:f})]},y))})]})]}),u.jsxs("a",{href:`https://wa.me/233551993820?text=${a.whatsappMsg}`,target:"_blank",rel:"noopener noreferrer",className:d?"btn-primary":"btn-secondary",style:{textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",gap:"0.4rem",width:"100%",padding:"0.75rem 1rem",fontSize:"0.86rem",borderRadius:"12px"},children:[u.jsx("span",{children:"Select Plan"}),u.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]},a.id)})})]})},Ss={"web-development":{id:"web-development",slug:"web-development",title:"Custom Web & SaaS Application Engineering",headline:"High-Performance Web Applications & Custom SaaS Platforms",badge:"CORE ENGINEERING",summary:"We build production-grade, high-speed web applications using React, Next.js, TypeScript, and modern cloud architectures. Optimized for sub-second page loads, SEO dominance, and maximum conversion rates.",icon:"",coverGradient:"linear-gradient(135deg, rgba(0, 240, 255, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Single-Page & Multi-Page Web Apps",spec:"Vite / Next.js SSR & static pre-rendering with React 18+"},{title:"API Integration & Cloud Backends",spec:"RESTful / GraphQL APIs, Node.js microservices, and Firebase real-time sync"},{title:"SEO & Microdata Architecture",spec:"Schema.org JSON-LD microdata, OpenGraph cards, and Google Search Console indexing"},{title:"Responsive Ultra-Fast UI",spec:"Mobile-first design system, glassmorphism UI, sub-second LCP performance"}],techStack:["React","TypeScript","Next.js","Node.js","Firebase","Vite","TailwindCSS / Vanilla CSS"],caseStudyHighlight:{client:"Kone Farms & Agritech",project:"IoT Soil Telemetry & Agritech Research Hub",result:"+85.7% annual yield increase & 100% GSC sitemap indexing across 11 subdomains.",link:"https://farms.koneacademy.io"},faq:[{q:"How long does a custom web development project take?",a:"Standard business websites are delivered in 5–10 business days. Complex SaaS platforms take 3–5 weeks."},{q:"Is hosting and domain setup included?",a:"Yes! We configure global CDN deployment (Vercel, Firebase, GitHub Pages), SSL certificates, and custom subdomains."}]},"mobile-apps":{id:"mobile-apps",slug:"mobile-apps",title:"iOS & Android Mobile App Development",headline:"Native Performance Cross-Platform Mobile Applications",badge:"MOBILE SYSTEMS",summary:"From concept to App Store and Google Play publication. We engineer cross-platform mobile apps using React Native and Flutter, delivering native 60fps animations, push notifications, and offline-first database sync.",icon:"",coverGradient:"linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Cross-Platform iOS & Android Apps",spec:"Single codebase compiled to native iOS Swift & Android Kotlin binaries"},{title:"Offline-First Database Sync",spec:"Local SQLite / Realm storage with automatic cloud reconciliation"},{title:"Push Notifications & Deep Linking",spec:"Firebase Cloud Messaging (FCM) & Apple APNs integration"},{title:"Store Deployment & Compliance",spec:"Complete Apple App Store & Google Play Store submission & approval management"}],techStack:["React Native","Flutter","TypeScript","Firebase FCM","App Store Connect","Google Play Console"],caseStudyHighlight:{client:"Kone Kids Academy",project:"Interactive Mobile Learning Companion",result:"4.9★ rating with offline course access for students across West Africa.",link:"https://kids.koneacademy.io"},faq:[{q:"Do you publish our app directly to the App Store & Google Play?",a:"Yes, we handle all store listing assets, compliance requirements, privacy manifests, and final submission."},{q:"Can the app work offline without internet?",a:"Yes, we build local caching mechanisms that allow full app functionality offline."}]},"brand-design":{id:"brand-design",slug:"brand-design",title:"Brand Identity & UI/UX Design Systems",headline:"World-Class Logo Systems, Brand Manuals & Figma UI/UX Prototypes",badge:"DESIGN STUDIO",summary:"We craft iconic corporate brand identity systems that command trust and market authority. Includes logo vectors, color tokens, typography scales, interactive Figma UI/UX wireframes, and complete brand manuals.",icon:"",coverGradient:"linear-gradient(135deg, rgba(234, 179, 8, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Vector Logo Systems",spec:"Scalable SVG, EPS, PNG, and PDF asset packages with dark/light variants"},{title:"Interactive Figma UI/UX Prototypes",spec:"High-fidelity component design systems, wireframes, and interactive user flows"},{title:"Brand Identity Guidelines",spec:"PDF brand book detailing typography, color palettes, spacing rules, and usage"},{title:"Social & Corporate Marketing Assets",spec:"Banners, OpenGraph social previews, business cards, and flyer graphics"}],techStack:["Figma","Adobe Illustrator","Photoshop","SVG Vector Systems","Design Tokens"],caseStudyHighlight:{client:"Kone Consult",project:"Corporate Tech Brand & Design System",result:"Unified multi-subdomain corporate visual language for enterprise client acquisition.",link:"https://consult.koneacademy.io"},faq:[{q:"What files do I receive upon project completion?",a:"You receive all original Figma source files, vector SVG/EPS logos, exportable PNGs, and a PDF Brand Guideline manual."},{q:"Can you redesign our existing company logo?",a:"Absolutely. We specialize in modernizing legacy brand identities for digital-first platforms."}]},"cloud-devops":{id:"cloud-devops",slug:"cloud-devops",title:"Cloud Infrastructure & DevOps Automation",headline:"Scalable Cloud Systems, Automated CI/CD & Security Audits",badge:"CLOUD ARCHITECTURE",summary:"Architecting resilient, self-healing cloud infrastructure on AWS, Firebase, and Cloudflare. We build automated GitHub Actions CI/CD pipelines, SSL/TLS encryption, and real-time uptime monitoring.",icon:"",coverGradient:"linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(9, 13, 22, 0.8) 100%)",deliverables:[{title:"Automated CI/CD Deployment Pipelines",spec:"GitHub Actions workflows for automated build, lint, test, and zero-downtime deployment"},{title:"Cloud Infrastructure Setup",spec:"Firebase Firestore, AWS S3/CloudFront, Cloudflare DNS, and serverless edge functions"},{title:"Security & Penetration Audits",spec:"Snyk SAST security scanning, DOM-XSS prevention, and SSL/TLS configuration"},{title:"Uptime & Performance Telemetry",spec:"Real-time error tracking, automated sitemap submission, and Google Search Console APIs"}],techStack:["AWS","Firebase","Cloudflare","GitHub Actions","Docker","Snyk","Node.js"],caseStudyHighlight:{client:"Kone Code IDE Ecosystem",project:"Cloud Compiler & Data Relay Infrastructure",result:"99.98% uptime serving thousands of automated compiler executions daily.",link:"https://code.koneacademy.io"},faq:[{q:"Can you migrate our legacy server to modern cloud hosting?",a:"Yes, we perform zero-downtime migrations to Firebase, Vercel, or AWS with SSL configuration."},{q:"How do you ensure our customer data is secure?",a:"We implement hardware-level security rules, CORS isolation, HTTPS encryption, and Snyk SAST vulnerability scans."}]}};function wv({slug:n,onBack:e}){const t=Ss[n]||Ss["web-development"];return u.jsxs("div",{className:"service-detail-container",itemScope:!0,itemType:"https://schema.org/Service",children:[u.jsx("div",{className:"service-nav-bar",children:u.jsxs("a",{href:"#services",onClick:r=>{r.preventDefault(),window.location.hash="#services",e&&e()},className:"service-back-btn",children:[u.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor",strokeWidth:"2.5",fill:"none",children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]}),"Back to Services Directory"]})}),u.jsxs("header",{className:"service-hero-banner",style:{background:t.coverGradient},children:[u.jsx("span",{className:"service-badge",children:t.badge}),u.jsx("h1",{className:"service-main-title",itemProp:"name",children:t.title}),u.jsx("p",{className:"service-headline",itemProp:"description",children:t.headline}),u.jsx("p",{className:"service-summary",children:t.summary}),u.jsxs("div",{className:"service-hero-cta",children:[u.jsx("a",{href:`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(t.title)}%20service.`,target:"_blank",rel:"noopener noreferrer",className:"service-primary-btn",children:u.jsx("span",{children:"Book a Technical Consultation"})}),u.jsx("a",{href:"#pricing",className:"service-secondary-btn",children:u.jsx("span",{children:"View Pricing Estimates"})})]})]}),u.jsxs("section",{className:"service-deliverables-section",children:[u.jsx("h2",{className:"section-title",children:"Key Technical Deliverables & Features"}),u.jsx("div",{className:"deliverables-grid",children:t.deliverables.map((r,i)=>u.jsxs("div",{className:"deliverable-card",children:[u.jsxs("span",{className:"del-num",children:["0",i+1]}),u.jsx("h3",{className:"del-title",children:r.title}),u.jsx("p",{className:"del-spec",children:r.spec})]},i))})]}),u.jsxs("section",{className:"service-tech-section",children:[u.jsx("h2",{className:"section-title",children:"Engineering Tech Stack"}),u.jsx("div",{className:"tech-pills-row",children:t.techStack.map(r=>u.jsx("span",{className:"service-tech-pill",children:r},r))})]}),u.jsx("section",{className:"service-case-section",children:u.jsxs("div",{className:"case-highlight-card",children:[u.jsxs("div",{className:"case-meta-header",children:[u.jsx("span",{className:"case-label",children:"FEATURED CASE STUDY"}),u.jsx("span",{className:"case-client",children:t.caseStudyHighlight.client})]}),u.jsx("h3",{className:"case-title",children:t.caseStudyHighlight.project}),u.jsxs("p",{className:"case-result",children:["🎯 ",t.caseStudyHighlight.result]}),t.caseStudyHighlight.link&&u.jsxs("a",{href:t.caseStudyHighlight.link,target:"_blank",rel:"noopener noreferrer",className:"case-link",children:[u.jsx("span",{children:"Explore Live Platform"}),u.jsxs("svg",{viewBox:"0 0 24 24",width:"14",height:"14",stroke:"currentColor",strokeWidth:"2",fill:"none",children:[u.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),u.jsx("polyline",{points:"15 3 21 3 21 9"}),u.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]})}),u.jsxs("section",{className:"service-faq-section",children:[u.jsx("h2",{className:"section-title",children:"❓ Frequently Asked Questions"}),u.jsx("div",{className:"faq-grid",children:t.faq.map((r,i)=>u.jsxs("div",{className:"faq-card",children:[u.jsxs("h3",{className:"faq-q",children:["Q: ",r.q]}),u.jsx("p",{className:"faq-a",children:r.a})]},i))})]})]})}const Iv={"web-development":u.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#38bdf8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"16 18 22 12 16 6"}),u.jsx("polyline",{points:"8 6 2 12 8 18"})]}),"mobile-apps":u.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#c084fc",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),u.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),"brand-design":u.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#facc15",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M12 19l7-7 3 3-7 7-3-3z"}),u.jsx("path",{d:"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}),u.jsx("path",{d:"M2 2l7.586 7.586"}),u.jsx("circle",{cx:"11",cy:"11",r:"2"})]}),"cloud-devops":u.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#4ade80",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})})};function Kc({onSelectService:n}){const e=Object.values(Ss);return u.jsxs("section",{className:"services-hub-section",id:"services",children:[u.jsxs("div",{className:"services-hero-header",children:[u.jsx("span",{className:"services-badge",children:"AGENCY SPECIALIZATIONS"}),u.jsx("h2",{className:"services-title",children:"Digital Engineering & Design Services"}),u.jsx("p",{className:"services-subtitle",children:"From custom SaaS applications and native mobile apps to corporate brand design and cloud DevOps infrastructure."})]}),u.jsx("div",{className:"services-hub-grid",children:e.map(t=>u.jsxs("div",{className:"service-hub-card",children:[u.jsxs("div",{className:"card-top-row",children:[u.jsx("div",{className:"hub-card-icon-wrapper",children:Iv[t.id]}),u.jsx("span",{className:"hub-card-badge",children:t.badge})]}),u.jsx("h3",{className:"hub-card-title",children:t.title}),u.jsx("p",{className:"hub-card-headline",children:t.headline}),u.jsx("p",{className:"hub-card-summary",children:t.summary}),u.jsxs("div",{className:"hub-card-deliverables",children:[u.jsx("span",{className:"deliverables-heading",children:"Core Deliverables"}),u.jsx("ul",{children:t.deliverables.slice(0,3).map((r,i)=>u.jsxs("li",{children:[u.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#38bdf8",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"2px"},children:u.jsx("polyline",{points:"20 6 9 17 4 12"})}),u.jsx("span",{children:r.title})]},i))})]}),u.jsxs("a",{href:`#services/${t.slug}`,onClick:r=>{r.preventDefault(),window.location.hash=`#services/${t.slug}`,window.scrollTo({top:0,behavior:"instant"}),n(t.slug)},className:"view-service-btn",children:[u.jsx("span",{children:"Explore Specifications"}),u.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2.5",fill:"none",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]},t.id))})]})}function Ev(){const n=U.useRef(null),[e,t]=U.useState(!1),[r,i]=U.useState(!1),[o,a]=U.useState({}),h=A=>{t(!0)},[d,f]=U.useState(()=>{const A=typeof window<"u"?window.location.hash:"";return A.startsWith("#services/")?"service-detail":A.startsWith("#services")?"services":A.startsWith("#work")?"work":A.startsWith("#pricing")?"pricing":"home"}),[y,I]=U.useState(()=>{const A=typeof window<"u"?window.location.hash:"";return A.startsWith("#services/")?A.replace("#services/",""):"web-development"});return U.useEffect(()=>{const A=()=>{const C=window.location.hash;if(C.startsWith("#services/")){const k=C.replace("#services/","");I(k),f("service-detail")}else C.startsWith("#services")?f("services"):C.startsWith("#work")?f("work"):C.startsWith("#pricing")?f("pricing"):f("home");window.scrollTo({top:0,behavior:"instant"})};return window.addEventListener("hashchange",A),A(),()=>window.removeEventListener("hashchange",A)},[]),U.useEffect(()=>{var O;if(navigator.userAgent==="ReactSnap"){(((O=n.current)==null?void 0:O.querySelectorAll(".fade-in-up"))||[]).forEach(W=>{W.classList.add("visible")});return}const C=new IntersectionObserver($=>{$.forEach(W=>{W.isIntersecting&&W.target.classList.add("visible")})},{threshold:.1}),k=()=>{var W;(((W=n.current)==null?void 0:W.querySelectorAll(".fade-in-up:not(.observed)"))||[]).forEach(Z=>{C.observe(Z),Z.classList.add("observed")})};k();const L=new MutationObserver(()=>{k()});return n.current&&L.observe(n.current,{childList:!0,subtree:!0}),()=>{C.disconnect(),L.disconnect()}},[]),u.jsxs("div",{className:"digital-app-root",children:[u.jsx("header",{className:"hub-header",children:u.jsxs("div",{className:"hub-header-inner",children:[u.jsx("div",{className:"logo",style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:u.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"0.75rem",textDecoration:"none",color:"inherit"},children:[u.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",className:"logo-icon neon-logo",width:"34",height:"34"}),u.jsxs("span",{className:"logo-text",style:{fontWeight:850,letterSpacing:"-0.02em"},children:["KONE ",u.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]})}),u.jsxs("nav",{className:"hub-nav",children:[u.jsx("a",{href:"#",className:d==="home"?"active-nav":"",children:"Overview"}),u.jsx("a",{href:"#services",className:d==="services"||d==="service-detail"?"active-nav":"",children:"Services"}),u.jsx("a",{href:"#work",className:d==="work"?"active-nav":"",children:"Work"}),u.jsx("a",{href:"#pricing",className:d==="pricing"?"active-nav":"",children:"Pricing"}),u.jsx("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services.",target:"_blank",rel:"noopener noreferrer",children:"Contact"}),u.jsxs("button",{onClick:()=>h(),className:"btn-primary",style:{padding:"0.45rem 1.1rem",fontSize:"0.82rem",marginLeft:"0.4rem",borderRadius:"50px"},children:[u.jsx("span",{children:"Start Project"}),u.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),u.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},className:"mobile-header-controls",children:u.jsx("button",{className:"mobile-nav-toggle",onClick:()=>i(!r),"aria-label":"Toggle navigation menu",children:u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})})})]})}),r&&u.jsxs("div",{className:"mobile-menu-drawer",children:[u.jsxs("div",{className:"mobile-drawer-header",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[u.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",width:"30",height:"30"}),u.jsxs("span",{style:{fontWeight:850,fontSize:"1.1rem",letterSpacing:"-0.02em"},children:["KONE ",u.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]}),u.jsx("button",{className:"mobile-drawer-close",onClick:()=>i(!1),"aria-label":"Close navigation menu",children:u.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),u.jsxs("div",{className:"mobile-drawer-links",children:[u.jsxs("a",{href:"#",className:`mobile-drawer-link ${d==="home"?"active-nav":""}`,onClick:()=>i(!1),children:[u.jsx("span",{children:"Overview"}),u.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"01"})]}),u.jsxs("a",{href:"#services",className:`mobile-drawer-link ${d==="services"||d==="service-detail"?"active-nav":""}`,onClick:()=>i(!1),children:[u.jsx("span",{children:"Services"}),u.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"02"})]}),u.jsxs("a",{href:"#work",className:`mobile-drawer-link ${d==="work"?"active-nav":""}`,onClick:()=>i(!1),children:[u.jsx("span",{children:"Work"}),u.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"03"})]}),u.jsxs("a",{href:"#pricing",className:`mobile-drawer-link ${d==="pricing"?"active-nav":""}`,onClick:()=>i(!1),children:[u.jsx("span",{children:"Pricing"}),u.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"04"})]}),u.jsxs("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services.",target:"_blank",rel:"noopener noreferrer",className:"mobile-drawer-link",onClick:()=>i(!1),children:[u.jsx("span",{children:"Contact via WhatsApp"}),u.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"➔"})]})]}),u.jsx("div",{className:"mobile-drawer-footer",children:u.jsxs("button",{onClick:()=>{i(!1),h()},className:"btn-primary",style:{width:"100%",padding:"0.85rem",fontSize:"0.95rem"},children:[u.jsx("span",{children:"Start Fast-Track Project"}),u.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),u.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})})]}),u.jsx("main",{id:"main-content",style:{flex:"1 0 auto",display:"flex",flexDirection:"column",width:"100%",gap:"3rem"},children:d==="service-detail"?u.jsx(wv,{slug:y,onBack:()=>f("services")}):d==="services"?u.jsx(Kc,{onSelectService:A=>{I(A),f("service-detail")}}):d==="work"?u.jsx(Gc,{}):d==="pricing"?u.jsx(qc,{}):u.jsxs(u.Fragment,{children:[u.jsx(hd,{onOpenWizard:()=>h()}),u.jsx(gd,{}),u.jsx(Kc,{onSelectService:A=>{I(A),f("service-detail")}}),u.jsx(Gc,{}),u.jsx(qc,{})]})}),u.jsx(yv,{isOpen:e,onClose:()=>t(!1),initialPhone:o.phone,initialBusinessName:o.businessName}),u.jsxs("footer",{className:"hub-footer",style:{marginTop:"2rem",paddingTop:"2.5rem",paddingBottom:"3.5rem",borderTop:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",flexDirection:"column",gap:"1.5rem",alignItems:"center",textAlign:"center"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[u.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",className:"logo-icon neon-logo",width:"36",height:"36"}),u.jsxs("span",{className:"logo-text",style:{fontSize:"1.2rem",fontWeight:800},children:["KONE ",u.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]}),u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",maxWidth:"520px",margin:"0 auto",lineHeight:"1.6"},children:"Ghana's premier digital studio for high-performance business websites, web apps, & automated WhatsApp lead engines."}),u.jsxs("div",{style:{display:"flex",gap:"1.2rem",flexWrap:"wrap",justifyContent:"center",fontSize:"0.88rem",fontWeight:600},children:[u.jsx("a",{href:"#",style:{color:"var(--text-muted)",textDecoration:"none"},children:"Overview"}),u.jsx("a",{href:"#services",style:{color:"var(--text-muted)",textDecoration:"none"},children:"Services"}),u.jsx("a",{href:"#work",style:{color:"var(--text-muted)",textDecoration:"none"},children:"Work"}),u.jsx("a",{href:"#pricing",style:{color:"var(--text-muted)",textDecoration:"none"},children:"Pricing"})]}),u.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",justifyContent:"center"},children:[u.jsxs("a",{href:"https://whatsapp.com/channel/0029Vb7wdZMJUM2fepkMfR0D",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(37, 211, 102, 0.12)",border:"1px solid rgba(37, 211, 102, 0.35)",color:"#25d366",padding:"0.5rem 1.1rem",borderRadius:"25px",fontSize:"0.85rem",fontWeight:700,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.45rem",boxShadow:"0 0 12px rgba(37, 211, 102, 0.15)",transition:"all 0.2s ease"},children:[u.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor",children:u.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"WhatsApp Channel"]}),u.jsxs("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch.",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(0, 255, 255, 0.08)",border:"1px solid rgba(0, 255, 255, 0.25)",color:"var(--cyan-glow)",padding:"0.5rem 1.1rem",borderRadius:"25px",fontSize:"0.85rem",fontWeight:700,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.45rem",boxShadow:"0 0 12px rgba(0, 255, 255, 0.1)",transition:"all 0.2s ease"},children:[u.jsx("span",{children:"💬"}),u.jsx("span",{children:"Direct Line (+233 55 199 3820)"})]}),u.jsxs("a",{href:"https://www.koneacademy.io",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"var(--text-muted)",padding:"0.5rem 1.1rem",borderRadius:"25px",fontSize:"0.85rem",fontWeight:700,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.45rem",transition:"all 0.2s ease"},children:[u.jsx("span",{children:"🌐"}),u.jsx("span",{children:"Kone Academy Ecosystem"})]})]}),u.jsxs("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginTop:"0.5rem"},children:["© ",new Date().getFullYear()," Kone Digital. Powered by Kone Academy. All rights reserved."]})]}),u.jsx("a",{href:"https://wa.me/233551993820",className:"whatsapp-fab",target:"_blank",rel:"noopener noreferrer","aria-label":"Contact us on WhatsApp",children:u.jsx("svg",{viewBox:"0 0 24 24",children:u.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.132 1.38 4.788 1.381 5.069 0 9.199-4.13 9.201-9.199.001-2.454-.952-4.761-2.686-6.494-1.734-1.734-4.041-2.688-6.498-2.689-5.074 0-9.207 4.129-9.208 9.199-.001 1.73.455 3.415 1.32 4.89l-.103.16-1.11 4.054 4.151-1.089.16.095zm10.125-6.702c-.281-.141-1.664-.822-1.921-.916-.257-.094-.443-.141-.63.141-.186.281-.723.916-.885 1.102-.162.186-.324.21-.605.069-.282-.141-1.189-.439-2.264-1.401-.836-.746-1.4-1.667-1.564-1.948-.164-.282-.017-.434.124-.573.127-.125.281-.328.422-.492.141-.164.188-.281.282-.469.094-.188.047-.352-.023-.492-.07-.141-.63-1.523-.863-2.086-.226-.552-.455-.477-.63-.486-.162-.008-.349-.01-.536-.01-.188 0-.492.07-.75.352-.257.282-.984.961-.984 2.343 0 1.382 1.008 2.718 1.148 2.906.141.188 1.984 3.029 4.806 4.242.671.289 1.194.462 1.602.592.674.214 1.287.184 1.77.112.539-.081 1.664-.68 1.898-1.336.234-.656.234-1.219.164-1.336-.07-.117-.257-.188-.539-.328z"})})})]})}class Tv extends U.Component{constructor(){super(...arguments);ya(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}async componentDidCatch(t,r){console.error("Uncaught error caught by ErrorBoundary:",t,r);try{await Su(gu(Jn,"client_errors"),{appName:this.props.appName||"Kone-Digital",errorMessage:t.message,errorStack:t.stack,componentStack:r.componentStack,url:window.location.href,userAgent:navigator.userAgent,timestamp:bu()}),console.log("Error successfully logged to Firestore.")}catch(i){console.error("Failed to log error to Firestore:",i)}}render(){return this.state.hasError?u.jsxs("div",{style:{padding:"2rem",textAlign:"center",fontFamily:"system-ui, -apple-system, sans-serif",color:"#f8fafc",background:"#0a0a0f",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[u.jsx("h2",{style:{color:"#ec4899",marginBottom:"1rem",fontSize:"2rem"},children:"Oops, something went wrong."}),u.jsx("p",{style:{color:"#94a3b8",marginBottom:"2rem",maxWidth:"500px",lineHeight:"1.6"},children:this.props.fallbackMessage||"We're sorry, but an unexpected error occurred. Our engineering team has been notified. Please try refreshing the page."}),u.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"12px 24px",background:"#ec4899",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"1rem",boxShadow:"0 0 15px rgba(236, 72, 153, 0.4)"},children:"Refresh Page"})]}):this.props.children}}const Qc=document.getElementById("root");Qc&&Zc(Qc).render(u.jsx(Jc.StrictMode,{children:u.jsx(Tv,{children:u.jsx(_v,{children:u.jsx(Ev,{})})})}));
