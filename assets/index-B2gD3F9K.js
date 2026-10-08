var rd=Object.defineProperty;var id=(n,e,t)=>e in n?rd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ya=(n,e,t)=>id(n,typeof e!="symbol"?e+"":e,t);import{r as z,a as sd,R as Yl}from"./vendor-react-wGySg1uH.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Xl={exports:{}},oi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od=z,ad=Symbol.for("react.element"),ld=Symbol.for("react.fragment"),cd=Object.prototype.hasOwnProperty,ud=od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hd={key:!0,ref:!0,__self:!0,__source:!0};function Zl(n,e,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)cd.call(e,r)&&!hd.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ad,type:n,key:o,ref:a,props:i,_owner:ud.current}}oi.Fragment=ld;oi.jsx=Zl;oi.jsxs=Zl;Xl.exports=oi;var l=Xl.exports,ec,_a=sd;ec=_a.createRoot,_a.hydrateRoot;const ct=[{id:"stone",label:"Stone Architecture"},{id:"fashion",label:"Fashion Retail"},{id:"foundation",label:"Social Impact NGO"},{id:"pastries",label:"Food & Beverage"}],va=5e3,dd=({onOpenWizard:n})=>{const[e,t]=z.useState("stone"),[r,i]=z.useState(!1),[o,a]=z.useState(0),h=z.useCallback(()=>{t(S=>{const P=ct.findIndex(N=>N.id===S);return ct[(P+1)%ct.length].id}),a(S=>S+1)},[]),d=z.useCallback(()=>{t(S=>{const P=ct.findIndex(N=>N.id===S);return ct[(P-1+ct.length)%ct.length].id}),a(S=>S+1)},[]),f=S=>{t(S),a(P=>P+1)};z.useEffect(()=>{if(r)return;const S=setTimeout(()=>{h()},va);return()=>clearTimeout(S)},[r,e,h]);const g=()=>i(!0),I=()=>{i(!1),a(S=>S+1)};return l.jsxs("section",{className:"hub-hero",style:{padding:"3rem 1rem 4rem",maxWidth:"1200px",margin:"0 auto"},children:[l.jsxs("div",{style:{textAlign:"center",maxWidth:"850px",margin:"0 auto 3rem"},children:[l.jsxs("h1",{className:"heading-luminance",style:{fontSize:"clamp(2.4rem, 6vw, 3.8rem)",fontWeight:900,lineHeight:1.12,marginBottom:"1.2rem",letterSpacing:"-0.035em"},children:["Putting Ghana's Best",l.jsx("br",{}),l.jsx("span",{className:"gold-luminance",children:"Businesses Online."})]}),l.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"1.12rem",lineHeight:1.7,marginBottom:"2.5rem",maxWidth:"720px",margin:"0 auto 2.5rem",letterSpacing:"-0.01em"},children:["Traditional marketing ends at the flyer. We engineer high-performance Website as a Service (WaaS) platforms with automated ",l.jsx("strong",{style:{color:"#FFFFFF",fontWeight:700},children:"MoMo payments"})," and direct ",l.jsx("strong",{style:{color:"#FFFFFF",fontWeight:700},children:"WhatsApp lead routing"}),"."]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[l.jsxs("button",{onClick:n,className:"btn-primary",children:[l.jsx("span",{children:"Start Fast-Track Project"}),l.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),l.jsx("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20request%20a%20consultation%20for%20my%20business%20website.",target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",children:l.jsx("span",{children:"Request Consultation"})})]})]}),l.jsxs("div",{className:"hero-demo-stage neon-border",onMouseEnter:g,onMouseLeave:I,onFocus:()=>i(!0),onBlur:()=>{i(!1),a(S=>S+1)},"aria-label":"Interactive Client Showcase Carousel",role:"region",style:{background:"var(--bg-surface)",borderRadius:"20px",padding:"1.5rem",maxWidth:"960px",margin:"0 auto",boxShadow:"0 20px 50px rgba(0,0,0,0.6)",position:"relative"},children:[l.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"0.6rem",marginBottom:"1.2rem",borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"1rem"},children:ct.map(S=>{const P=e===S.id;return l.jsxs("button",{onClick:()=>f(S.id),className:P?"btn-primary":"btn-secondary",style:{padding:"0.38rem 1rem",borderRadius:"50px",fontSize:"0.82rem",position:"relative",overflow:"hidden",transition:"all 0.25s ease"},children:[l.jsx("span",{style:{position:"relative",zIndex:2},children:S.label}),P&&l.jsx("span",{className:"hero-tab-progress-bar",style:{position:"absolute",bottom:0,left:0,height:"3px",background:"#07090E",borderRadius:"2px",animation:`tabProgressBar ${va}ms linear forwards`,animationPlayState:r?"paused":"running",zIndex:1}},`progress-${S.id}-${o}`)]},S.id)})}),l.jsxs("div",{style:{borderRadius:"12px",overflow:"hidden",minHeight:"340px",height:"auto",position:"relative",background:"#0d1117"},children:[l.jsx("button",{onClick:d,"aria-label":"Previous client showcase",className:"showcase-nav-btn prev",style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",zIndex:10,background:"rgba(7, 9, 14, 0.65)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#FFFFFF",width:"36px",height:"36px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)"},children:l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"15 18 9 12 15 6"})})}),l.jsx("button",{onClick:h,"aria-label":"Next client showcase",className:"showcase-nav-btn next",style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",zIndex:10,background:"rgba(7, 9, 14, 0.65)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#FFFFFF",width:"36px",height:"36px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)"},children:l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"9 18 15 12 9 6"})})}),e==="stone"&&l.jsxs("div",{className:"hero-slide-enter",style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/sedemson_stone_hero.webp")',backgroundSize:"cover",backgroundPosition:"center",color:"#fff",padding:"2rem 2.8rem",textAlign:"center"},children:[l.jsx("span",{style:{fontSize:"0.74rem",fontWeight:750,letterSpacing:"2px",textTransform:"uppercase",color:"var(--gold-accent)",marginBottom:"0.4rem",display:"block"},children:"Featured B2B Client"}),l.jsx("h2",{style:{fontSize:"clamp(1.25rem, 4.5vw, 2rem)",fontFamily:"var(--font-heading)",fontWeight:800},children:"Sedemson Stone Craftsmanship"}),l.jsx("p",{style:{maxWidth:"500px",fontSize:"0.88rem",opacity:.85,marginTop:"0.5rem"},children:"Natural Stone Cladding & Architectural Finishes across Ghana."}),l.jsxs("a",{href:"/sedemson-stone/index.html",target:"_blank",rel:"noopener noreferrer",style:{marginTop:"1.2rem",color:"#F8FAFC",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",padding:"0.35rem 0.9rem",borderRadius:"50px",fontWeight:650,fontSize:"0.8rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[l.jsx("span",{children:"Explore Client Showcase"}),l.jsx("span",{children:"➔"})]})]},"slide-stone"),e==="fashion"&&l.jsxs("div",{className:"hero-slide-enter",style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/emewear/emewear_hero.webp")',backgroundSize:"cover",backgroundPosition:"top",color:"#fff",padding:"2rem 2.8rem",textAlign:"center"},children:[l.jsx("span",{style:{fontSize:"0.74rem",fontWeight:750,letterSpacing:"2px",textTransform:"uppercase",color:"var(--gold-accent)",marginBottom:"0.4rem",display:"block"},children:"E-Commerce Showcase"}),l.jsx("h2",{style:{fontSize:"clamp(1.25rem, 4.5vw, 2rem)",fontFamily:"var(--font-heading)",fontWeight:800},children:"Emewear Plus-Size Ankara"}),l.jsx("p",{style:{maxWidth:"500px",fontSize:"0.88rem",opacity:.85,marginTop:"0.5rem"},children:"Handcrafted Ankara wide-leg cargo trousers & royal batik palazzo sets."}),l.jsxs("a",{href:"/emewear/index.html",target:"_blank",rel:"noopener noreferrer",style:{marginTop:"1.2rem",color:"#F8FAFC",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",padding:"0.35rem 0.9rem",borderRadius:"50px",fontWeight:650,fontSize:"0.8rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.3rem"},children:[l.jsx("span",{children:"Explore Client Showcase"}),l.jsx("span",{children:"➔"})]})]},"slide-fashion"),e==="foundation"&&l.jsxs("div",{className:"hero-slide-enter",style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(7, 30, 74, 0.78), rgba(0, 59, 153, 0.82)), url("/ansah-delali/cohort-group.webp")',backgroundSize:"cover",backgroundPosition:"center",color:"#fff",padding:"2rem 2.8rem",textAlign:"center"},children:[l.jsx("span",{style:{fontSize:"0.74rem",fontWeight:750,letterSpacing:"2px",textTransform:"uppercase",color:"#FDBA74",marginBottom:"0.4rem",display:"block"},children:"Featured Social Impact Initiative"}),l.jsx("h2",{style:{fontSize:"clamp(1.25rem, 4.5vw, 2rem)",fontFamily:"var(--font-heading)",fontWeight:800},children:"Ansah Delali Foundation"}),l.jsx("p",{style:{maxWidth:"520px",fontSize:"0.88rem",opacity:.92,marginTop:"0.5rem"},children:"Giving Back, Rising Together — Educational mentorship, SkillUp 1.0 outreach, and digital skills empowerment across Ghana."}),l.jsxs("a",{href:"/ansah-delali/index.html",target:"_blank",rel:"noopener noreferrer",style:{marginTop:"1.2rem",color:"#FFFFFF",background:"#0052CC",border:"1px solid rgba(255,255,255,0.3)",padding:"0.45rem 1.1rem",borderRadius:"50px",fontWeight:700,fontSize:"0.84rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.4rem",boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:[l.jsx("span",{children:"Explore Foundation Portal"}),l.jsx("span",{children:"➔"})]})]},"slide-foundation"),e==="pastries"&&l.jsxs("div",{className:"hero-slide-enter",style:{minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:'linear-gradient(rgba(45, 24, 16, 0.78), rgba(74, 44, 26, 0.82)), url("/susans-pastries/hero-banner.webp")',backgroundSize:"cover",backgroundPosition:"center",color:"#fff",padding:"2rem 2.8rem",textAlign:"center"},children:[l.jsx("span",{style:{fontSize:"0.74rem",fontWeight:750,letterSpacing:"2px",textTransform:"uppercase",color:"#FDBA74",marginBottom:"0.4rem",display:"block"},children:"Food & Beverage Showcase"}),l.jsx("h2",{style:{fontSize:"clamp(1.25rem, 4.5vw, 2rem)",fontFamily:"var(--font-heading)",fontWeight:800},children:"Susan's Pastries & Drinks"}),l.jsx("p",{style:{maxWidth:"520px",fontSize:"0.88rem",opacity:.92,marginTop:"0.5rem"},children:"Artisanal Ghanaian pastries, custom celebration cakes & fresh fruit juices — order directly via WhatsApp."}),l.jsxs("a",{href:"/susans-pastries/index.html",target:"_blank",rel:"noopener noreferrer",style:{marginTop:"1.2rem",color:"#FFFFFF",background:"#E8922F",border:"1px solid rgba(255,255,255,0.3)",padding:"0.45rem 1.1rem",borderRadius:"50px",fontWeight:700,fontSize:"0.84rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.4rem",boxShadow:"0 4px 12px rgba(0,0,0,0.2)"},children:[l.jsx("span",{children:"Explore Pastries Showcase"}),l.jsx("span",{children:"➔"})]})]},"slide-pastries")]})]})]})},fd="/assets/momo-Du5GlNOn.png",pd="/assets/telecel-8JjmPpPR.png",md="/assets/at_money-DjPIB_Ur.png",gd="/assets/whatsapp_business-CgJgUw8J.png",Ir=[{id:"mtn",name:"MTN MoMo",icon:fd,className:"mtn",title:"MTN Mobile Money (MoMo) API Integration",imgStyle:{borderRadius:"6px"}},{id:"telecel",name:"Telecel Cash",icon:pd,className:"telecel",title:"Telecel Cash Automated Payment Gateway",imgStyle:{borderRadius:"50%"}},{id:"at",name:"AT Money",icon:md,className:"at",title:"AT Money (AirtelTigo) Automated Gateway",imgStyle:{borderRadius:"50%"}},{id:"whatsapp",name:"WhatsApp Business",icon:gd,className:"whatsapp",title:"WhatsApp Business Automated Order & Lead Routing",imgStyle:{borderRadius:"6px"}}],yd=()=>{const n=[{metric:"48h",title:"Rapid Launch Turnaround",description:"Your bespoke business hub deployed with zero technical overhead.",color:"var(--cyan-glow)"},{metric:"Direct",title:"MoMo & WhatsApp Routing",description:"Automated order collection straight to your MTN, Telecel, or AT phone.",color:"var(--gold-accent)"},{metric:"100%",title:"Fully Managed WaaS",description:"Zero maintenance headaches. We handle hosting, SSL, updates & security.",color:"#10b981"},{metric:"99.9%",title:"Guaranteed Uptime & Speed",description:"Ultra-lightweight code optimized for African 3G/4G networks.",color:"var(--cyan-glow)"}];return l.jsxs("section",{className:"trust-metrics-section",style:{padding:"3rem 0",margin:"2rem 0"},children:[l.jsx("div",{className:"section-title fade-in-up",style:{textAlign:"center",marginBottom:"2.5rem"},children:l.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.7rem, 5vw, 2.4rem)",fontWeight:850},children:["Engineered for ",l.jsx("span",{className:"cyan-luminance",children:"Real Business Growth"})]})}),l.jsx("div",{className:"metrics-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 220px), 1fr))",gap:"1.2rem",maxWidth:"1100px",margin:"0 auto",padding:"0 1rem"},children:n.map((e,t)=>l.jsxs("div",{className:`metric-card neon-border fade-in-up stagger-${t+1}`,style:{background:"rgba(13, 18, 29, 0.92)",padding:"2rem 1.5rem",borderRadius:"16px",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:"2.6rem",fontWeight:900,color:e.color},children:e.metric}),l.jsx("h3",{style:{color:"var(--text-main)",fontSize:"1rem",fontWeight:700,marginTop:"0.6rem",marginBottom:"0.3rem"},children:e.title}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.82rem",lineHeight:1.5},children:e.description})]},t))}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1.2rem",marginTop:"3.5rem",width:"100%",boxSizing:"border-box",overflow:"hidden"},children:[l.jsxs("div",{style:{color:"var(--text-subtle)",fontSize:"0.74rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em",display:"flex",alignItems:"center",gap:"0.8rem"},children:[l.jsx("span",{style:{width:"28px",height:"1px",background:"rgba(255, 255, 255, 0.12)"}}),"SUPPORTED PAYMENT & LEAD GATEWAYS",l.jsx("span",{style:{width:"28px",height:"1px",background:"rgba(255, 255, 255, 0.12)"}})]}),l.jsxs("div",{className:"gateway-marquee-wrapper","aria-label":"Supported Payment and Lead Gateways marquee",children:[l.jsx("div",{className:"gateway-marquee-track",children:[...Ir,...Ir].map((e,t)=>l.jsxs("div",{className:`integration-badge ${e.className}`,title:e.title,children:[l.jsx("img",{src:e.icon,alt:e.name,style:e.imgStyle}),l.jsx("span",{children:e.name})]},`gw-t1-${e.id}-${t}`))}),l.jsx("div",{className:"gateway-marquee-track","aria-hidden":"true",children:[...Ir,...Ir].map((e,t)=>l.jsxs("div",{className:`integration-badge ${e.className}`,title:e.title,children:[l.jsx("img",{src:e.icon,alt:e.name,style:e.imgStyle}),l.jsx("span",{children:e.name})]},`gw-t2-${e.id}-${t}`))})]})]})]})},_d=()=>{};var wa={};/**
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
 */const tc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},vd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],h=n[t++],d=((i&7)<<18|(o&63)<<12|(a&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},nc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,h=a?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,g=o>>2,I=(o&3)<<4|h>>4;let S=(h&15)<<2|f>>6,P=f&63;d||(P=64,a||(S=64)),r.push(t[g],t[I],t[S],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(tc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],h=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const I=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||h==null||f==null||I==null)throw new wd;const S=o<<2|h>>4;if(r.push(S),f!==64){const P=h<<4&240|f>>2;if(r.push(P),I!==64){const N=f<<6&192|I;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Id=function(n){const e=tc(n);return nc.encodeByteArray(e,!0)},Mr=function(n){return Id(n).replace(/\./g,"")},rc=function(n){try{return nc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Td=()=>bd().__FIREBASE_DEFAULTS__,Ed=()=>{if(typeof process>"u"||typeof wa>"u")return;const n=wa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&rc(n[1]);return e&&JSON.parse(e)},ai=()=>{try{return _d()||Td()||Ed()||xd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ic=n=>{var e,t;return(t=(e=ai())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Sd=n=>{const e=ic(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},sc=()=>{var n;return(n=ai())==null?void 0:n.config},oc=n=>{var e;return(e=ai())==null?void 0:e[`_${n}`]};/**
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
 */class Ad{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Cd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Mr(JSON.stringify(t)),Mr(JSON.stringify(a)),""].join(".")}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Rd(){var e;const n=(e=ai())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ac(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Nd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dd(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jd(){return!Rd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lc(){try{return typeof indexedDB=="object"}catch{return!1}}function cc(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}function Od(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Vd="FirebaseError";class Fe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Vd,Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zt.prototype.create)}}class zt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Fd(o,r):"Error",h=`${this.serviceName}: ${a} (${i}).`;return new Fe(i,h,r)}}function Fd(n,e){return n.replace(Ld,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ld=/\{\$([^}]+)}/g;function Md(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _t(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Ia(o)&&Ia(a)){if(!_t(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ia(n){return n!==null&&typeof n=="object"}/**
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
 */function Yn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ud(n,e){const t=new Bd(n,e);return t.subscribe.bind(t)}class Bd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");zd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Gi),i.error===void 0&&(i.error=Gi),i.complete===void 0&&(i.complete=Gi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gi(){}/**
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
 */const Wd=1e3,$d=2,Hd=4*60*60*1e3,Gd=.5;function ba(n,e=Wd,t=$d){const r=e*Math.pow(t,n),i=Math.round(Gd*r*(Math.random()-.5)*2);return Math.min(Hd,r+i)}/**
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
 */function xe(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Xn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function uc(n){return(await fetch(n,{credentials:"include"})).ok}class Ve{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kt="[DEFAULT]";/**
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
 */class qd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ad;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qd(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&a.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kd(n){return n===kt?void 0:n}function Qd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Jd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const Yd={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Xd=W.INFO,Zd={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},ef=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Zd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class li{constructor(e){this.name=e,this._logLevel=Xd,this._logHandler=ef,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const tf=(n,e)=>e.some(t=>n instanceof t);let Ta,Ea;function nf(){return Ta||(Ta=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rf(){return Ea||(Ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hc=new WeakMap,os=new WeakMap,dc=new WeakMap,qi=new WeakMap,As=new WeakMap;function sf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(mt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&hc.set(t,n)}).catch(()=>{}),As.set(e,n),e}function of(n){if(os.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});os.set(n,e)}let as={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return os.get(n);if(e==="objectStoreNames")return n.objectStoreNames||dc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function af(n){as=n(as)}function lf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ki(this),e,...t);return dc.set(r,e.sort?e.sort():[e]),mt(r)}:rf().includes(n)?function(...e){return n.apply(Ki(this),e),mt(hc.get(this))}:function(...e){return mt(n.apply(Ki(this),e))}}function cf(n){return typeof n=="function"?lf(n):(n instanceof IDBTransaction&&of(n),tf(n,nf())?new Proxy(n,as):n)}function mt(n){if(n instanceof IDBRequest)return sf(n);if(qi.has(n))return qi.get(n);const e=cf(n);return e!==n&&(qi.set(n,e),As.set(e,n)),e}const Ki=n=>As.get(n);function fc(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),h=mt(a);return r&&a.addEventListener("upgradeneeded",d=>{r(mt(a.result),d.oldVersion,d.newVersion,mt(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),h.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),h}const uf=["get","getKey","getAll","getAllKeys","count"],hf=["put","add","delete","clear"],Qi=new Map;function xa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qi.get(e))return Qi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=hf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uf.includes(t)))return;const o=async function(a,...h){const d=this.transaction(a,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(h.shift())),(await Promise.all([f[t](...h),i&&d.done]))[0]};return Qi.set(e,o),o}af(n=>({...n,get:(e,t,r)=>xa(e,t)||n.get(e,t,r),has:(e,t)=>!!xa(e,t)||n.has(e,t)}));/**
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
 */class df{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ff(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ff(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ls="@firebase/app",Sa="0.14.11";/**
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
 */const et=new li("@firebase/app"),pf="@firebase/app-compat",mf="@firebase/analytics-compat",gf="@firebase/analytics",yf="@firebase/app-check-compat",_f="@firebase/app-check",vf="@firebase/auth",wf="@firebase/auth-compat",If="@firebase/database",bf="@firebase/data-connect",Tf="@firebase/database-compat",Ef="@firebase/functions",xf="@firebase/functions-compat",Sf="@firebase/installations",Af="@firebase/installations-compat",Cf="@firebase/messaging",kf="@firebase/messaging-compat",Rf="@firebase/performance",Pf="@firebase/performance-compat",Nf="@firebase/remote-config",Df="@firebase/remote-config-compat",jf="@firebase/storage",Of="@firebase/storage-compat",Vf="@firebase/firestore",Ff="@firebase/ai",Lf="@firebase/firestore-compat",Mf="firebase",Uf="12.12.0";/**
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
 */const cs="[DEFAULT]",Bf={[ls]:"fire-core",[pf]:"fire-core-compat",[gf]:"fire-analytics",[mf]:"fire-analytics-compat",[_f]:"fire-app-check",[yf]:"fire-app-check-compat",[vf]:"fire-auth",[wf]:"fire-auth-compat",[If]:"fire-rtdb",[bf]:"fire-data-connect",[Tf]:"fire-rtdb-compat",[Ef]:"fire-fn",[xf]:"fire-fn-compat",[Sf]:"fire-iid",[Af]:"fire-iid-compat",[Cf]:"fire-fcm",[kf]:"fire-fcm-compat",[Rf]:"fire-perf",[Pf]:"fire-perf-compat",[Nf]:"fire-rc",[Df]:"fire-rc-compat",[jf]:"fire-gcs",[Of]:"fire-gcs-compat",[Vf]:"fire-fst",[Lf]:"fire-fst-compat",[Ff]:"fire-vertex","fire-js":"fire-js",[Mf]:"fire-js-all"};/**
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
 */const Ur=new Map,zf=new Map,us=new Map;function Aa(n,e){try{n.container.addComponent(e)}catch(t){et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function He(n){const e=n.name;if(us.has(e))return et.debug(`There were multiple attempts to register component ${e}.`),!1;us.set(e,n);for(const t of Ur.values())Aa(t,n);for(const t of zf.values())Aa(t,n);return!0}function Wt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Be(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Wf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new zt("app","Firebase",Wf);/**
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
 */class $f{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
 */const dn=Uf;function pc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:cs,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(t||(t=sc()),!t)throw gt.create("no-options");const o=Ur.get(i);if(o){if(_t(t,o.options)&&_t(r,o.config))return o;throw gt.create("duplicate-app",{appName:i})}const a=new Jd(i);for(const d of us.values())a.addComponent(d);const h=new $f(t,r,a);return Ur.set(i,h),h}function Cs(n=cs){const e=Ur.get(n);if(!e&&n===cs&&sc())return pc();if(!e)throw gt.create("no-app",{appName:n});return e}function Re(n,e,t){let r=Bf[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),et.warn(a.join(" "));return}He(new Ve(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Hf="firebase-heartbeat-database",Gf=1,zn="firebase-heartbeat-store";let Ji=null;function mc(){return Ji||(Ji=fc(Hf,Gf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zn)}catch(t){console.warn(t)}}}}).catch(n=>{throw gt.create("idb-open",{originalErrorMessage:n.message})})),Ji}async function qf(n){try{const t=(await mc()).transaction(zn),r=await t.objectStore(zn).get(gc(n));return await t.done,r}catch(e){if(e instanceof Fe)et.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});et.warn(t.message)}}}async function Ca(n,e){try{const r=(await mc()).transaction(zn,"readwrite");await r.objectStore(zn).put(e,gc(n)),await r.done}catch(t){if(t instanceof Fe)et.warn(t.message);else{const r=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});et.warn(r.message)}}}function gc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Kf=1024,Qf=30;class Jf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ka();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Qf){const a=Zf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){et.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ka(),{heartbeatsToSend:r,unsentEntries:i}=Yf(this._heartbeatsCache.heartbeats),o=Mr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return et.warn(t),""}}}function ka(){return new Date().toISOString().substring(0,10)}function Yf(n,e=Kf){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Ra(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ra(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Xf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lc()?cc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ca(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ca(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ra(n){return Mr(JSON.stringify({version:2,heartbeats:n})).length}function Zf(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function ep(n){He(new Ve("platform-logger",e=>new df(e),"PRIVATE")),He(new Ve("heartbeat",e=>new Jf(e),"PRIVATE")),Re(ls,Sa,n),Re(ls,Sa,"esm2020"),Re("fire-js","")}ep("");var Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ks;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function _(){}_.prototype=m.prototype,w.F=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(b,v,E){for(var y=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)y[pe-2]=arguments[pe];return m.prototype[v].apply(b,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,_){_||(_=0);const b=Array(16);if(typeof m=="string")for(var v=0;v<16;++v)b[v]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(v=0;v<16;++v)b[v]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],v=w.g[2];let E=w.g[3],y;y=m+(E^_&(v^E))+b[0]+3614090360&4294967295,m=_+(y<<7&4294967295|y>>>25),y=E+(v^m&(_^v))+b[1]+3905402710&4294967295,E=m+(y<<12&4294967295|y>>>20),y=v+(_^E&(m^_))+b[2]+606105819&4294967295,v=E+(y<<17&4294967295|y>>>15),y=_+(m^v&(E^m))+b[3]+3250441966&4294967295,_=v+(y<<22&4294967295|y>>>10),y=m+(E^_&(v^E))+b[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=E+(v^m&(_^v))+b[5]+1200080426&4294967295,E=m+(y<<12&4294967295|y>>>20),y=v+(_^E&(m^_))+b[6]+2821735955&4294967295,v=E+(y<<17&4294967295|y>>>15),y=_+(m^v&(E^m))+b[7]+4249261313&4294967295,_=v+(y<<22&4294967295|y>>>10),y=m+(E^_&(v^E))+b[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=E+(v^m&(_^v))+b[9]+2336552879&4294967295,E=m+(y<<12&4294967295|y>>>20),y=v+(_^E&(m^_))+b[10]+4294925233&4294967295,v=E+(y<<17&4294967295|y>>>15),y=_+(m^v&(E^m))+b[11]+2304563134&4294967295,_=v+(y<<22&4294967295|y>>>10),y=m+(E^_&(v^E))+b[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=E+(v^m&(_^v))+b[13]+4254626195&4294967295,E=m+(y<<12&4294967295|y>>>20),y=v+(_^E&(m^_))+b[14]+2792965006&4294967295,v=E+(y<<17&4294967295|y>>>15),y=_+(m^v&(E^m))+b[15]+1236535329&4294967295,_=v+(y<<22&4294967295|y>>>10),y=m+(v^E&(_^v))+b[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=E+(_^v&(m^_))+b[6]+3225465664&4294967295,E=m+(y<<9&4294967295|y>>>23),y=v+(m^_&(E^m))+b[11]+643717713&4294967295,v=E+(y<<14&4294967295|y>>>18),y=_+(E^m&(v^E))+b[0]+3921069994&4294967295,_=v+(y<<20&4294967295|y>>>12),y=m+(v^E&(_^v))+b[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=E+(_^v&(m^_))+b[10]+38016083&4294967295,E=m+(y<<9&4294967295|y>>>23),y=v+(m^_&(E^m))+b[15]+3634488961&4294967295,v=E+(y<<14&4294967295|y>>>18),y=_+(E^m&(v^E))+b[4]+3889429448&4294967295,_=v+(y<<20&4294967295|y>>>12),y=m+(v^E&(_^v))+b[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=E+(_^v&(m^_))+b[14]+3275163606&4294967295,E=m+(y<<9&4294967295|y>>>23),y=v+(m^_&(E^m))+b[3]+4107603335&4294967295,v=E+(y<<14&4294967295|y>>>18),y=_+(E^m&(v^E))+b[8]+1163531501&4294967295,_=v+(y<<20&4294967295|y>>>12),y=m+(v^E&(_^v))+b[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=E+(_^v&(m^_))+b[2]+4243563512&4294967295,E=m+(y<<9&4294967295|y>>>23),y=v+(m^_&(E^m))+b[7]+1735328473&4294967295,v=E+(y<<14&4294967295|y>>>18),y=_+(E^m&(v^E))+b[12]+2368359562&4294967295,_=v+(y<<20&4294967295|y>>>12),y=m+(_^v^E)+b[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=E+(m^_^v)+b[8]+2272392833&4294967295,E=m+(y<<11&4294967295|y>>>21),y=v+(E^m^_)+b[11]+1839030562&4294967295,v=E+(y<<16&4294967295|y>>>16),y=_+(v^E^m)+b[14]+4259657740&4294967295,_=v+(y<<23&4294967295|y>>>9),y=m+(_^v^E)+b[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=E+(m^_^v)+b[4]+1272893353&4294967295,E=m+(y<<11&4294967295|y>>>21),y=v+(E^m^_)+b[7]+4139469664&4294967295,v=E+(y<<16&4294967295|y>>>16),y=_+(v^E^m)+b[10]+3200236656&4294967295,_=v+(y<<23&4294967295|y>>>9),y=m+(_^v^E)+b[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=E+(m^_^v)+b[0]+3936430074&4294967295,E=m+(y<<11&4294967295|y>>>21),y=v+(E^m^_)+b[3]+3572445317&4294967295,v=E+(y<<16&4294967295|y>>>16),y=_+(v^E^m)+b[6]+76029189&4294967295,_=v+(y<<23&4294967295|y>>>9),y=m+(_^v^E)+b[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=E+(m^_^v)+b[12]+3873151461&4294967295,E=m+(y<<11&4294967295|y>>>21),y=v+(E^m^_)+b[15]+530742520&4294967295,v=E+(y<<16&4294967295|y>>>16),y=_+(v^E^m)+b[2]+3299628645&4294967295,_=v+(y<<23&4294967295|y>>>9),y=m+(v^(_|~E))+b[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=E+(_^(m|~v))+b[7]+1126891415&4294967295,E=m+(y<<10&4294967295|y>>>22),y=v+(m^(E|~_))+b[14]+2878612391&4294967295,v=E+(y<<15&4294967295|y>>>17),y=_+(E^(v|~m))+b[5]+4237533241&4294967295,_=v+(y<<21&4294967295|y>>>11),y=m+(v^(_|~E))+b[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=E+(_^(m|~v))+b[3]+2399980690&4294967295,E=m+(y<<10&4294967295|y>>>22),y=v+(m^(E|~_))+b[10]+4293915773&4294967295,v=E+(y<<15&4294967295|y>>>17),y=_+(E^(v|~m))+b[1]+2240044497&4294967295,_=v+(y<<21&4294967295|y>>>11),y=m+(v^(_|~E))+b[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=E+(_^(m|~v))+b[15]+4264355552&4294967295,E=m+(y<<10&4294967295|y>>>22),y=v+(m^(E|~_))+b[6]+2734768916&4294967295,v=E+(y<<15&4294967295|y>>>17),y=_+(E^(v|~m))+b[13]+1309151649&4294967295,_=v+(y<<21&4294967295|y>>>11),y=m+(v^(_|~E))+b[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=E+(_^(m|~v))+b[11]+3174756917&4294967295,E=m+(y<<10&4294967295|y>>>22),y=v+(m^(E|~_))+b[2]+718787259&4294967295,v=E+(y<<15&4294967295|y>>>17),y=_+(E^(v|~m))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+v&4294967295,w.g[3]=w.g[3]+E&4294967295}r.prototype.v=function(w,m){m===void 0&&(m=w.length);const _=m-this.blockSize,b=this.C;let v=this.h,E=0;for(;E<m;){if(v==0)for(;E<=_;)i(this,w,E),E+=this.blockSize;if(typeof w=="string"){for(;E<m;)if(b[v++]=w.charCodeAt(E++),v==this.blockSize){i(this,b),v=0;break}}else for(;E<m;)if(b[v++]=w[E++],v==this.blockSize){i(this,b),v=0;break}}this.h=v,this.o+=m},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;m=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=m&255,m/=256;for(this.v(w),w=Array(16),m=0,_=0;_<4;++_)for(let b=0;b<32;b+=8)w[m++]=this.g[_]>>>b&255;return w};function o(w,m){var _=h;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;const _=[];let b=!0;for(let v=w.length-1;v>=0;v--){const E=w[v]|0;b&&E==m||(_[v]=E,b=!1)}this.g=_}var h={};function d(w){return-128<=w&&w<128?o(w,function(m){return new a([m|0],m<0?-1:0)}):new a([w|0],w<0?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return I;if(w<0)return C(f(-w));const m=[];let _=1;for(let b=0;w>=_;b++)m[b]=w/_|0,_*=4294967296;return new a(m,0)}function g(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return C(g(w.substring(1),m));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(m,8));let b=I;for(let E=0;E<w.length;E+=8){var v=Math.min(8,w.length-E);const y=parseInt(w.substring(E,E+v),m);v<8?(v=f(Math.pow(m,v)),b=b.j(v).add(f(y))):(b=b.j(_),b=b.add(f(y)))}return b}var I=d(0),S=d(1),P=d(16777216);n=a.prototype,n.m=function(){if(j(this))return-C(this).m();let w=0,m=1;for(let _=0;_<this.g.length;_++){const b=this.i(_);w+=(b>=0?b:4294967296+b)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(j(this))return"-"+C(this).toString(w);const m=f(Math.pow(w,6));var _=this;let b="";for(;;){const v=Ae(_,m).g;_=V(_,v.j(m));let E=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=v,N(_))return E+b;for(;E.length<6;)E="0"+E;b=E+b}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(let m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function j(w){return w.h==-1}n.l=function(w){return w=V(this,w),j(w)?-1:N(w)?0:1};function C(w){const m=w.g.length,_=[];for(let b=0;b<m;b++)_[b]=~w.g[b];return new a(_,~w.h).add(S)}n.abs=function(){return j(this)?C(this):this},n.add=function(w){const m=Math.max(this.g.length,w.g.length),_=[];let b=0;for(let v=0;v<=m;v++){let E=b+(this.i(v)&65535)+(w.i(v)&65535),y=(E>>>16)+(this.i(v)>>>16)+(w.i(v)>>>16);b=y>>>16,E&=65535,y&=65535,_[v]=y<<16|E}return new a(_,_[_.length-1]&-2147483648?-1:0)};function V(w,m){return w.add(C(m))}n.j=function(w){if(N(this)||N(w))return I;if(j(this))return j(w)?C(this).j(C(w)):C(C(this).j(w));if(j(w))return C(this.j(C(w)));if(this.l(P)<0&&w.l(P)<0)return f(this.m()*w.m());const m=this.g.length+w.g.length,_=[];for(var b=0;b<2*m;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(let v=0;v<w.g.length;v++){const E=this.i(b)>>>16,y=this.i(b)&65535,pe=w.i(v)>>>16,Ke=w.i(v)&65535;_[2*b+2*v]+=y*Ke,B(_,2*b+2*v),_[2*b+2*v+1]+=E*Ke,B(_,2*b+2*v+1),_[2*b+2*v+1]+=y*pe,B(_,2*b+2*v+1),_[2*b+2*v+2]+=E*pe,B(_,2*b+2*v+2)}for(w=0;w<m;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=m;w<2*m;w++)_[w]=0;return new a(_,0)};function B(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function Z(w,m){this.g=w,this.h=m}function Ae(w,m){if(N(m))throw Error("division by zero");if(N(w))return new Z(I,I);if(j(w))return m=Ae(C(w),m),new Z(C(m.g),C(m.h));if(j(m))return m=Ae(w,C(m)),new Z(C(m.g),m.h);if(w.g.length>30){if(j(w)||j(m))throw Error("slowDivide_ only works with positive integers.");for(var _=S,b=m;b.l(w)<=0;)_=ee(_),b=ee(b);var v=ce(_,1),E=ce(b,1);for(b=ce(b,2),_=ce(_,2);!N(b);){var y=E.add(b);y.l(w)<=0&&(v=v.add(_),E=y),b=ce(b,1),_=ce(_,1)}return m=V(w,v.j(m)),new Z(v,m)}for(v=I;w.l(m)>=0;){for(_=Math.max(1,Math.floor(w.m()/m.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),E=f(_),y=E.j(m);j(y)||y.l(w)>0;)_-=b,E=f(_),y=E.j(m);N(E)&&(E=S),v=v.add(E),w=V(w,y)}return new Z(v,w)}n.B=function(w){return Ae(this,w).h},n.and=function(w){const m=Math.max(this.g.length,w.g.length),_=[];for(let b=0;b<m;b++)_[b]=this.i(b)&w.i(b);return new a(_,this.h&w.h)},n.or=function(w){const m=Math.max(this.g.length,w.g.length),_=[];for(let b=0;b<m;b++)_[b]=this.i(b)|w.i(b);return new a(_,this.h|w.h)},n.xor=function(w){const m=Math.max(this.g.length,w.g.length),_=[];for(let b=0;b<m;b++)_[b]=this.i(b)^w.i(b);return new a(_,this.h^w.h)};function ee(w){const m=w.g.length+1,_=[];for(let b=0;b<m;b++)_[b]=w.i(b)<<1|w.i(b-1)>>>31;return new a(_,w.h)}function ce(w,m){const _=m>>5;m%=32;const b=w.g.length-_,v=[];for(let E=0;E<b;E++)v[E]=m>0?w.i(E+_)>>>m|w.i(E+_+1)<<32-m:w.i(E+_);return new a(v,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=g,ks=a}).apply(typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{});var br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yc,On,_c,kr,hs,vc,wc,Ic;(function(){var n,e=Object.defineProperty;function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof br=="object"&&br];for(var c=0;c<s.length;++c){var u=s[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var u=r;s=s.split(".");for(var p=0;p<s.length-1;p++){var T=s[p];if(!(T in u))break e;u=u[T]}s=s[s.length-1],p=u[s],c=c(p),c!=p&&c!=null&&e(u,s,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(c){var u=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&u.push([p,c[p]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function h(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function d(s,c,u){return s.call.apply(s.bind,arguments)}function f(s,c,u){return f=d,f.apply(null,arguments)}function g(s,c){var u=Array.prototype.slice.call(arguments,1);return function(){var p=u.slice();return p.push.apply(p,arguments),s.apply(this,p)}}function I(s,c){function u(){}u.prototype=c.prototype,s.Z=c.prototype,s.prototype=new u,s.prototype.constructor=s,s.Ob=function(p,T,x){for(var R=Array(arguments.length-2),M=2;M<arguments.length;M++)R[M-2]=arguments[M];return c.prototype[T].apply(p,R)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function P(s){const c=s.length;if(c>0){const u=Array(c);for(let p=0;p<c;p++)u[p]=s[p];return u}return[]}function N(s,c){for(let p=1;p<arguments.length;p++){const T=arguments[p];var u=typeof T;if(u=u!="object"?u:T?Array.isArray(T)?"array":u:"null",u=="array"||u=="object"&&typeof T.length=="number"){u=s.length||0;const x=T.length||0;s.length=u+x;for(let R=0;R<x;R++)s[u+R]=T[R]}else s.push(T)}}class j{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function C(s){a.setTimeout(()=>{throw s},0)}function V(){var s=w;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class B{constructor(){this.h=this.g=null}add(c,u){const p=Z.get();p.set(c,u),this.h?this.h.next=p:this.g=p,this.h=p}}var Z=new j(()=>new Ae,s=>s.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,ce=!1,w=new B,m=()=>{const s=Promise.resolve(void 0);ee=()=>{s.then(_)}};function _(){for(var s;s=V();){try{s.h.call(s.g)}catch(u){C(u)}var c=Z;c.j(s),c.h<100&&(c.h++,s.next=c.g,c.g=s)}ce=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var E=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return s}();function y(s){return/^[\s\xa0]*$/.test(s)}function pe(s,c){v.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,c)}I(pe,v),pe.prototype.init=function(s,c){const u=this.type=s.type,p=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget,c||(u=="mouseover"?c=s.fromElement:u=="mouseout"&&(c=s.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&pe.Z.h.call(this)},pe.prototype.h=function(){pe.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Ke="closure_listenable_"+(Math.random()*1e6|0),Ii=0;function G(s,c,u,p,T){this.listener=s,this.proxy=null,this.src=c,this.type=u,this.capture=!!p,this.ha=T,this.key=++Ii,this.da=this.fa=!1}function Tt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Qe(s,c,u){for(const p in s)c.call(u,s[p],p,s)}function Ah(s,c){for(const u in s)c.call(void 0,s[u],u,s)}function go(s){const c={};for(const u in s)c[u]=s[u];return c}const yo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _o(s,c){let u,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(u in p)s[u]=p[u];for(let x=0;x<yo.length;x++)u=yo[x],Object.prototype.hasOwnProperty.call(p,u)&&(s[u]=p[u])}}function lr(s){this.src=s,this.g={},this.h=0}lr.prototype.add=function(s,c,u,p,T){const x=s.toString();s=this.g[x],s||(s=this.g[x]=[],this.h++);const R=Ti(s,c,p,T);return R>-1?(c=s[R],u||(c.fa=!1)):(c=new G(c,this.src,x,!!p,T),c.fa=u,s.push(c)),c};function bi(s,c){const u=c.type;if(u in s.g){var p=s.g[u],T=Array.prototype.indexOf.call(p,c,void 0),x;(x=T>=0)&&Array.prototype.splice.call(p,T,1),x&&(Tt(c),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Ti(s,c,u,p){for(let T=0;T<s.length;++T){const x=s[T];if(!x.da&&x.listener==c&&x.capture==!!u&&x.ha==p)return T}return-1}var Ei="closure_lm_"+(Math.random()*1e6|0),xi={};function vo(s,c,u,p,T){if(Array.isArray(c)){for(let x=0;x<c.length;x++)vo(s,c[x],u,p,T);return null}return u=bo(u),s&&s[Ke]?s.J(c,u,h(p)?!!p.capture:!1,T):Ch(s,c,u,!1,p,T)}function Ch(s,c,u,p,T,x){if(!c)throw Error("Invalid event type");const R=h(T)?!!T.capture:!!T;let M=Ai(s);if(M||(s[Ei]=M=new lr(s)),u=M.add(c,u,p,R,x),u.proxy)return u;if(p=kh(),u.proxy=p,p.src=s,p.listener=u,s.addEventListener)E||(T=R),T===void 0&&(T=!1),s.addEventListener(c.toString(),p,T);else if(s.attachEvent)s.attachEvent(Io(c.toString()),p);else if(s.addListener&&s.removeListener)s.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return u}function kh(){function s(u){return c.call(s.src,s.listener,u)}const c=Rh;return s}function wo(s,c,u,p,T){if(Array.isArray(c))for(var x=0;x<c.length;x++)wo(s,c[x],u,p,T);else p=h(p)?!!p.capture:!!p,u=bo(u),s&&s[Ke]?(s=s.i,x=String(c).toString(),x in s.g&&(c=s.g[x],u=Ti(c,u,p,T),u>-1&&(Tt(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete s.g[x],s.h--)))):s&&(s=Ai(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Ti(c,u,p,T)),(u=s>-1?c[s]:null)&&Si(u))}function Si(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Ke])bi(c.i,s);else{var u=s.type,p=s.proxy;c.removeEventListener?c.removeEventListener(u,p,s.capture):c.detachEvent?c.detachEvent(Io(u),p):c.addListener&&c.removeListener&&c.removeListener(p),(u=Ai(c))?(bi(u,s),u.h==0&&(u.src=null,c[Ei]=null)):Tt(s)}}}function Io(s){return s in xi?xi[s]:xi[s]="on"+s}function Rh(s,c){if(s.da)s=!0;else{c=new pe(c,this);const u=s.listener,p=s.ha||s.src;s.fa&&Si(s),s=u.call(p,c)}return s}function Ai(s){return s=s[Ei],s instanceof lr?s:null}var Ci="__closure_events_fn_"+(Math.random()*1e9>>>0);function bo(s){return typeof s=="function"?s:(s[Ci]||(s[Ci]=function(c){return s.handleEvent(c)}),s[Ci])}function me(){b.call(this),this.i=new lr(this),this.M=this,this.G=null}I(me,b),me.prototype[Ke]=!0,me.prototype.removeEventListener=function(s,c,u,p){wo(this,s,c,u,p)};function Ie(s,c){var u,p=s.G;if(p)for(u=[];p;p=p.G)u.push(p);if(s=s.M,p=c.type||c,typeof c=="string")c=new v(c,s);else if(c instanceof v)c.target=c.target||s;else{var T=c;c=new v(p,s),_o(c,T)}T=!0;let x,R;if(u)for(R=u.length-1;R>=0;R--)x=c.g=u[R],T=cr(x,p,!0,c)&&T;if(x=c.g=s,T=cr(x,p,!0,c)&&T,T=cr(x,p,!1,c)&&T,u)for(R=0;R<u.length;R++)x=c.g=u[R],T=cr(x,p,!1,c)&&T}me.prototype.N=function(){if(me.Z.N.call(this),this.i){var s=this.i;for(const c in s.g){const u=s.g[c];for(let p=0;p<u.length;p++)Tt(u[p]);delete s.g[c],s.h--}}this.G=null},me.prototype.J=function(s,c,u,p){return this.i.add(String(s),c,!1,u,p)},me.prototype.K=function(s,c,u,p){return this.i.add(String(s),c,!0,u,p)};function cr(s,c,u,p){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();let T=!0;for(let x=0;x<c.length;++x){const R=c[x];if(R&&!R.da&&R.capture==u){const M=R.listener,se=R.ha||R.src;R.fa&&bi(s.i,R),T=M.call(se,p)!==!1&&T}}return T&&!p.defaultPrevented}function Ph(s,c){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=f(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(s,c||0)}function To(s){s.g=Ph(()=>{s.g=null,s.i&&(s.i=!1,To(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Nh extends b{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:To(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(s){b.call(this),this.h=s,this.g={}}I(gn,b);var Eo=[];function xo(s){Qe(s.g,function(c,u){this.g.hasOwnProperty(u)&&Si(c)},s),s.g={}}gn.prototype.N=function(){gn.Z.N.call(this),xo(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ki=a.JSON.stringify,Dh=a.JSON.parse,jh=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function So(){}function Ao(){}var yn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ri(){v.call(this,"d")}I(Ri,v);function Pi(){v.call(this,"c")}I(Pi,v);var Et={},Co=null;function ur(){return Co=Co||new me}Et.Ia="serverreachability";function ko(s){v.call(this,Et.Ia,s)}I(ko,v);function _n(s){const c=ur();Ie(c,new ko(c))}Et.STAT_EVENT="statevent";function Ro(s,c){v.call(this,Et.STAT_EVENT,s),this.stat=c}I(Ro,v);function be(s){const c=ur();Ie(c,new Ro(c,s))}Et.Ja="timingevent";function Po(s,c){v.call(this,Et.Ja,s),this.size=c}I(Po,v);function vn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},c)}function wn(){this.g=!0}wn.prototype.ua=function(){this.g=!1};function Oh(s,c,u,p,T,x){s.info(function(){if(s.g)if(x){var R="",M=x.split("&");for(let q=0;q<M.length;q++){var se=M[q].split("=");if(se.length>1){const oe=se[0];se=se[1];const Me=oe.split("_");R=Me.length>=2&&Me[1]=="type"?R+(oe+"="+se+"&"):R+(oe+"=redacted&")}}}else R=null;else R=x;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+c+`
`+u+`
`+R})}function Vh(s,c,u,p,T,x,R){s.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+c+`
`+u+`
`+x+" "+R})}function Gt(s,c,u,p){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Lh(s,u)+(p?" "+p:"")})}function Fh(s,c){s.info(function(){return"TIMEOUT: "+c})}wn.prototype.info=function(){};function Lh(s,c){if(!s.g)return c;if(!c)return null;try{const x=JSON.parse(c);if(x){for(s=0;s<x.length;s++)if(Array.isArray(x[s])){var u=x[s];if(!(u.length<2)){var p=u[1];if(Array.isArray(p)&&!(p.length<1)){var T=p[0];if(T!="noop"&&T!="stop"&&T!="close")for(let R=1;R<p.length;R++)p[R]=""}}}}return ki(x)}catch{return c}}var hr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},No={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Do;function Ni(){}I(Ni,So),Ni.prototype.g=function(){return new XMLHttpRequest},Do=new Ni;function In(s){return encodeURIComponent(String(s))}function Mh(s){var c=1;s=s.split(":");const u=[];for(;c>0&&s.length;)u.push(s.shift()),c--;return s.length&&u.push(s.join(":")),u}function rt(s,c,u,p){this.j=s,this.i=c,this.l=u,this.S=p||1,this.V=new gn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new jo}function jo(){this.i=null,this.g="",this.h=!1}var Oo={},Di={};function ji(s,c,u){s.M=1,s.A=fr(Le(c)),s.u=u,s.R=!0,Vo(s,null)}function Vo(s,c){s.F=Date.now(),dr(s),s.B=Le(s.A);var u=s.B,p=s.S;Array.isArray(p)||(p=[String(p)]),Qo(u.i,"t",p),s.C=0,u=s.j.L,s.h=new jo,s.g=fa(s.j,u?c:null,!s.u),s.P>0&&(s.O=new Nh(f(s.Y,s,s.g),s.P)),c=s.V,u=s.g,p=s.ba;var T="readystatechange";Array.isArray(T)||(T&&(Eo[0]=T.toString()),T=Eo);for(let x=0;x<T.length;x++){const R=vo(u,T[x],p||c.handleEvent,!1,c.h||c);if(!R)break;c.g[R.key]=R}c=s.J?go(s.J):{},s.u?(s.v||(s.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,c)):(s.v="GET",s.g.ea(s.B,s.v,null,c)),_n(),Oh(s.i,s.v,s.B,s.l,s.S,s.u)}rt.prototype.ba=function(s){s=s.target;const c=this.O;c&&ot(s)==3?c.j():this.Y(s)},rt.prototype.Y=function(s){try{if(s==this.g)e:{const M=ot(this.g),se=this.g.ya(),q=this.g.ca();if(!(M<3)&&(M!=3||this.g&&(this.h.h||this.g.la()||na(this.g)))){this.K||M!=4||se==7||(se==8||q<=0?_n(3):_n(2)),Oi(this);var c=this.g.ca();this.X=c;var u=Uh(this);if(this.o=c==200,Vh(this.i,this.v,this.B,this.l,this.S,M,c),this.o){if(this.U&&!this.L){t:{if(this.g){var p,T=this.g;if((p=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var x=p;break t}}x=null}if(s=x)Gt(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Vi(this,s);else{this.o=!1,this.m=3,be(12),xt(this),bn(this);break e}}if(this.R){s=!0;let oe;for(;!this.K&&this.C<u.length;)if(oe=Bh(this,u),oe==Di){M==4&&(this.m=4,be(14),s=!1),Gt(this.i,this.l,null,"[Incomplete Response]");break}else if(oe==Oo){this.m=4,be(15),Gt(this.i,this.l,u,"[Invalid Chunk]"),s=!1;break}else Gt(this.i,this.l,oe,null),Vi(this,oe);if(Fo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),M!=4||u.length!=0||this.h.h||(this.m=1,be(16),s=!1),this.o=this.o&&s,!s)Gt(this.i,this.l,u,"[Invalid Chunked Response]"),xt(this),bn(this);else if(u.length>0&&!this.W){this.W=!0;var R=this.j;R.g==this&&R.aa&&!R.P&&(R.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),$i(R),R.P=!0,be(11))}}else Gt(this.i,this.l,u,null),Vi(this,u);M==4&&xt(this),this.o&&!this.K&&(M==4?ca(this.j,this):(this.o=!1,dr(this)))}else td(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,be(12)):(this.m=0,be(13)),xt(this),bn(this)}}}catch{}finally{}};function Uh(s){if(!Fo(s))return s.g.la();const c=na(s.g);if(c==="")return"";let u="";const p=c.length,T=ot(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return xt(s),bn(s),"";s.h.i=new a.TextDecoder}for(let x=0;x<p;x++)s.h.h=!0,u+=s.h.i.decode(c[x],{stream:!(T&&x==p-1)});return c.length=0,s.h.g+=u,s.C=0,s.h.g}function Fo(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Bh(s,c){var u=s.C,p=c.indexOf(`
`,u);return p==-1?Di:(u=Number(c.substring(u,p)),isNaN(u)?Oo:(p+=1,p+u>c.length?Di:(c=c.slice(p,p+u),s.C=p+u,c)))}rt.prototype.cancel=function(){this.K=!0,xt(this)};function dr(s){s.T=Date.now()+s.H,Lo(s,s.H)}function Lo(s,c){if(s.D!=null)throw Error("WatchDog timer not null");s.D=vn(f(s.aa,s),c)}function Oi(s){s.D&&(a.clearTimeout(s.D),s.D=null)}rt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(Fh(this.i,this.B),this.M!=2&&(_n(),be(17)),xt(this),this.m=2,bn(this)):Lo(this,this.T-s)};function bn(s){s.j.I==0||s.K||ca(s.j,s)}function xt(s){Oi(s);var c=s.O;c&&typeof c.dispose=="function"&&c.dispose(),s.O=null,xo(s.V),s.g&&(c=s.g,s.g=null,c.abort(),c.dispose())}function Vi(s,c){try{var u=s.j;if(u.I!=0&&(u.g==s||Fi(u.h,s))){if(!s.L&&Fi(u.h,s)&&u.I==3){try{var p=u.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<s.F)_r(u),gr(u);else break e;Wi(u),be(18)}}else u.xa=T[1],0<u.xa-u.K&&T[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=vn(f(u.Va,u),6e3));Bo(u.h)<=1&&u.ta&&(u.ta=void 0)}else At(u,11)}else if((s.L||u.g==s)&&_r(u),!y(c))for(T=u.Ba.g.parse(c),c=0;c<T.length;c++){let q=T[c];const oe=q[0];if(!(oe<=u.K))if(u.K=oe,q=q[1],u.I==2)if(q[0]=="c"){u.M=q[1],u.ba=q[2];const Me=q[3];Me!=null&&(u.ka=Me,u.j.info("VER="+u.ka));const Ct=q[4];Ct!=null&&(u.za=Ct,u.j.info("SVER="+u.za));const at=q[5];at!=null&&typeof at=="number"&&at>0&&(p=1.5*at,u.O=p,u.j.info("backChannelRequestTimeoutMs_="+p)),p=u;const lt=s.g;if(lt){const wr=lt.g?lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wr){var x=p.h;x.g||wr.indexOf("spdy")==-1&&wr.indexOf("quic")==-1&&wr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Li(x,x.h),x.h=null))}if(p.G){const Hi=lt.g?lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Hi&&(p.wa=Hi,Q(p.J,p.G,Hi))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-s.F,u.j.info("Handshake RTT: "+u.T+"ms")),p=u;var R=s;if(p.na=da(p,p.L?p.ba:null,p.W),R.L){zo(p.h,R);var M=R,se=p.O;se&&(M.H=se),M.D&&(Oi(M),dr(M)),p.g=R}else aa(p);u.i.length>0&&yr(u)}else q[0]!="stop"&&q[0]!="close"||At(u,7);else u.I==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?At(u,7):zi(u):q[0]!="noop"&&u.l&&u.l.qa(q),u.A=0)}}_n(4)}catch{}}var zh=class{constructor(s,c){this.g=s,this.map=c}};function Mo(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Uo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Bo(s){return s.h?1:s.g?s.g.size:0}function Fi(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Li(s,c){s.g?s.g.add(c):s.h=c}function zo(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Mo.prototype.cancel=function(){if(this.i=Wo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Wo(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const u of s.g.values())c=c.concat(u.G);return c}return P(s.i)}var $o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wh(s,c){if(s){s=s.split("&");for(let u=0;u<s.length;u++){const p=s[u].indexOf("=");let T,x=null;p>=0?(T=s[u].substring(0,p),x=s[u].substring(p+1)):T=s[u],c(T,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function it(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;s instanceof it?(this.l=s.l,Tn(this,s.j),this.o=s.o,this.g=s.g,En(this,s.u),this.h=s.h,Mi(this,Jo(s.i)),this.m=s.m):s&&(c=String(s).match($o))?(this.l=!1,Tn(this,c[1]||"",!0),this.o=xn(c[2]||""),this.g=xn(c[3]||"",!0),En(this,c[4]),this.h=xn(c[5]||"",!0),Mi(this,c[6]||"",!0),this.m=xn(c[7]||"")):(this.l=!1,this.i=new An(null,this.l))}it.prototype.toString=function(){const s=[];var c=this.j;c&&s.push(Sn(c,Ho,!0),":");var u=this.g;return(u||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Sn(c,Ho,!0),"@"),s.push(In(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&s.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Sn(u,u.charAt(0)=="/"?Gh:Hh,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Sn(u,Kh)),s.join("")},it.prototype.resolve=function(s){const c=Le(this);let u=!!s.j;u?Tn(c,s.j):u=!!s.o,u?c.o=s.o:u=!!s.g,u?c.g=s.g:u=s.u!=null;var p=s.h;if(u)En(c,s.u);else if(u=!!s.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var T=c.h.lastIndexOf("/");T!=-1&&(p=c.h.slice(0,T+1)+p)}if(T=p,T==".."||T==".")p="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){p=T.lastIndexOf("/",0)==0,T=T.split("/");const x=[];for(let R=0;R<T.length;){const M=T[R++];M=="."?p&&R==T.length&&x.push(""):M==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),p&&R==T.length&&x.push("")):(x.push(M),p=!0)}p=x.join("/")}else p=T}return u?c.h=p:u=s.i.toString()!=="",u?Mi(c,Jo(s.i)):u=!!s.m,u&&(c.m=s.m),c};function Le(s){return new it(s)}function Tn(s,c,u){s.j=u?xn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function En(s,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);s.u=c}else s.u=null}function Mi(s,c,u){c instanceof An?(s.i=c,Qh(s.i,s.l)):(u||(c=Sn(c,qh)),s.i=new An(c,s.l))}function Q(s,c,u){s.i.set(c,u)}function fr(s){return Q(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function xn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Sn(s,c,u){return typeof s=="string"?(s=encodeURI(s).replace(c,$h),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function $h(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ho=/[#\/\?@]/g,Hh=/[#\?:]/g,Gh=/[#\?]/g,qh=/[#\?@]/g,Kh=/#/g;function An(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function St(s){s.g||(s.g=new Map,s.h=0,s.i&&Wh(s.i,function(c,u){s.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=An.prototype,n.add=function(s,c){St(this),this.i=null,s=qt(this,s);let u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(c),this.h+=1,this};function Go(s,c){St(s),c=qt(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function qo(s,c){return St(s),c=qt(s,c),s.g.has(c)}n.forEach=function(s,c){St(this),this.g.forEach(function(u,p){u.forEach(function(T){s.call(c,T,p,this)},this)},this)};function Ko(s,c){St(s);let u=[];if(typeof c=="string")qo(s,c)&&(u=u.concat(s.g.get(qt(s,c))));else for(s=Array.from(s.g.values()),c=0;c<s.length;c++)u=u.concat(s[c]);return u}n.set=function(s,c){return St(this),this.i=null,s=qt(this,s),qo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=Ko(this,s),s.length>0?String(s[0]):c):c};function Qo(s,c,u){Go(s,c),u.length>0&&(s.i=null,s.g.set(qt(s,c),P(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var u=c[p];const T=In(u);u=Ko(this,u);for(let x=0;x<u.length;x++){let R=T;u[x]!==""&&(R+="="+In(u[x])),s.push(R)}}return this.i=s.join("&")};function Jo(s){const c=new An;return c.i=s.i,s.g&&(c.g=new Map(s.g),c.h=s.h),c}function qt(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Qh(s,c){c&&!s.j&&(St(s),s.i=null,s.g.forEach(function(u,p){const T=p.toLowerCase();p!=T&&(Go(this,p),Qo(this,T,u))},s)),s.j=c}function Jh(s,c){const u=new wn;if(a.Image){const p=new Image;p.onload=g(st,u,"TestLoadImage: loaded",!0,c,p),p.onerror=g(st,u,"TestLoadImage: error",!1,c,p),p.onabort=g(st,u,"TestLoadImage: abort",!1,c,p),p.ontimeout=g(st,u,"TestLoadImage: timeout",!1,c,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=s}else c(!1)}function Yh(s,c){const u=new wn,p=new AbortController,T=setTimeout(()=>{p.abort(),st(u,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:p.signal}).then(x=>{clearTimeout(T),x.ok?st(u,"TestPingServer: ok",!0,c):st(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),st(u,"TestPingServer: error",!1,c)})}function st(s,c,u,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(u)}catch{}}function Xh(){this.g=new jh}function Ui(s){this.i=s.Sb||null,this.h=s.ab||!1}I(Ui,So),Ui.prototype.g=function(){return new pr(this.i,this.h)};function pr(s,c){me.call(this),this.H=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(pr,me),n=pr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=c,this.readyState=1,kn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(c.body=s),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Yo(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Yo(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Cn(this):kn(this),this.readyState==3&&Yo(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Cn(this))},n.Na=function(s){this.g&&(this.response=s,Cn(this))},n.ga=function(){this.g&&Cn(this)};function Cn(s){s.readyState=4,s.l=null,s.j=null,s.B=null,kn(s)}n.setRequestHeader=function(s,c){this.A.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=c.next();return s.join(`\r
`)};function kn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Xo(s){let c="";return Qe(s,function(u,p){c+=p,c+=":",c+=u,c+=`\r
`}),c}function Bi(s,c,u){e:{for(p in u){var p=!1;break e}p=!0}p||(u=Xo(u),typeof s=="string"?u!=null&&In(u):Q(s,c,u))}function te(s){me.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(te,me);var Zh=/^https?$/i,ed=["POST","PUT"];n=te.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,c,u,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Do.g(),this.g.onreadystatechange=S(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(x){Zo(this,x);return}if(s=u||"",u=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)u.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())u.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(u.keys()).find(x=>x.toLowerCase()=="content-type"),T=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(ed,c,void 0)>=0)||p||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,R]of u)this.g.setRequestHeader(x,R);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(x){Zo(this,x)}};function Zo(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.o=5,ea(s),mr(s)}function ea(s){s.A||(s.A=!0,Ie(s,"complete"),Ie(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,Ie(this,"complete"),Ie(this,"abort"),mr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mr(this,!0)),te.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ta(this):this.Xa())},n.Xa=function(){ta(this)};function ta(s){if(s.h&&typeof o<"u"){if(s.v&&ot(s)==4)setTimeout(s.Ca.bind(s),0);else if(Ie(s,"readystatechange"),ot(s)==4){s.h=!1;try{const x=s.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var p;if(p=x===0){let R=String(s.D).match($o)[1]||null;!R&&a.self&&a.self.location&&(R=a.self.location.protocol.slice(0,-1)),p=!Zh.test(R?R.toLowerCase():"")}u=p}if(u)Ie(s,"complete"),Ie(s,"success");else{s.o=6;try{var T=ot(s)>2?s.g.statusText:""}catch{T=""}s.l=T+" ["+s.ca()+"]",ea(s)}}finally{mr(s)}}}}function mr(s,c){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const u=s.g;s.g=null,c||Ie(s,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ot(s){return s.g?s.g.readyState:0}n.ca=function(){try{return ot(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Dh(c)}};function na(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function td(s){const c={};s=(s.g&&ot(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<s.length;p++){if(y(s[p]))continue;var u=Mh(s[p]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const x=c[T]||[];c[T]=x,x.push(u)}Ah(c,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rn(s,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||c}function ra(s){this.za=0,this.i=[],this.j=new wn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Rn("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Rn("baseRetryDelayMs",5e3,s),this.Za=Rn("retryDelaySeedMs",1e4,s),this.Ta=Rn("forwardChannelMaxRetries",2,s),this.va=Rn("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Mo(s&&s.concurrentRequestLimit),this.Ba=new Xh,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ra.prototype,n.ka=8,n.I=1,n.connect=function(s,c,u,p){be(0),this.W=s,this.H=c||{},u&&p!==void 0&&(this.H.OSID=u,this.H.OAID=p),this.F=this.X,this.J=da(this,null,this.W),yr(this)};function zi(s){if(ia(s),s.I==3){var c=s.V++,u=Le(s.J);if(Q(u,"SID",s.M),Q(u,"RID",c),Q(u,"TYPE","terminate"),Pn(s,u),c=new rt(s,s.j,c),c.M=2,c.A=fr(Le(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=fa(c.j,null),c.g.ea(c.A)),c.F=Date.now(),dr(c)}ha(s)}function gr(s){s.g&&($i(s),s.g.cancel(),s.g=null)}function ia(s){gr(s),s.v&&(a.clearTimeout(s.v),s.v=null),_r(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function yr(s){if(!Uo(s.h)&&!s.m){s.m=!0;var c=s.Ea;ee||m(),ce||(ee(),ce=!0),w.add(c,s),s.D=0}}function nd(s,c){return Bo(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=c.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=vn(f(s.Ea,s,c),ua(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const T=new rt(this,this.j,s);let x=this.o;if(this.U&&(x?(x=go(x),_o(x,this.U)):x=this.U),this.u!==null||this.R||(T.J=x,x=null),this.S)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var p=this.i[u];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=oa(this,T,c),u=Le(this.J),Q(u,"RID",s),Q(u,"CVER",22),this.G&&Q(u,"X-HTTP-Session-Id",this.G),Pn(this,u),x&&(this.R?c="headers="+In(Xo(x))+"&"+c:this.u&&Bi(u,this.u,x)),Li(this.h,T),this.Ra&&Q(u,"TYPE","init"),this.S?(Q(u,"$req",c),Q(u,"SID","null"),T.U=!0,ji(T,u,null)):ji(T,u,c),this.I=2}}else this.I==3&&(s?sa(this,s):this.i.length==0||Uo(this.h)||sa(this))};function sa(s,c){var u;c?u=c.l:u=s.V++;const p=Le(s.J);Q(p,"SID",s.M),Q(p,"RID",u),Q(p,"AID",s.K),Pn(s,p),s.u&&s.o&&Bi(p,s.u,s.o),u=new rt(s,s.j,u,s.D+1),s.u===null&&(u.J=s.o),c&&(s.i=c.G.concat(s.i)),c=oa(s,u,1e3),u.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Li(s.h,u),ji(u,p,c)}function Pn(s,c){s.H&&Qe(s.H,function(u,p){Q(c,p,u)}),s.l&&Qe({},function(u,p){Q(c,p,u)})}function oa(s,c,u){u=Math.min(s.i.length,u);const p=s.l?f(s.l.Ka,s.l,s):null;e:{var T=s.i;let M=-1;for(;;){const se=["count="+u];M==-1?u>0?(M=T[0].g,se.push("ofs="+M)):M=0:se.push("ofs="+M);let q=!0;for(let oe=0;oe<u;oe++){var x=T[oe].g;const Me=T[oe].map;if(x-=M,x<0)M=Math.max(0,T[oe].g-100),q=!1;else try{x="req"+x+"_"||"";try{var R=Me instanceof Map?Me:Object.entries(Me);for(const[Ct,at]of R){let lt=at;h(at)&&(lt=ki(at)),se.push(x+Ct+"="+encodeURIComponent(lt))}}catch(Ct){throw se.push(x+"type="+encodeURIComponent("_badmap")),Ct}}catch{p&&p(Me)}}if(q){R=se.join("&");break e}}R=void 0}return s=s.i.splice(0,u),c.G=s,R}function aa(s){if(!s.g&&!s.v){s.Y=1;var c=s.Da;ee||m(),ce||(ee(),ce=!0),w.add(c,s),s.A=0}}function Wi(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=vn(f(s.Da,s),ua(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,la(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=vn(f(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,be(10),gr(this),la(this))};function $i(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function la(s){s.g=new rt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var c=Le(s.na);Q(c,"RID","rpc"),Q(c,"SID",s.M),Q(c,"AID",s.K),Q(c,"CI",s.F?"0":"1"),!s.F&&s.ia&&Q(c,"TO",s.ia),Q(c,"TYPE","xmlhttp"),Pn(s,c),s.u&&s.o&&Bi(c,s.u,s.o),s.O&&(s.g.H=s.O);var u=s.g;s=s.ba,u.M=1,u.A=fr(Le(c)),u.u=null,u.R=!0,Vo(u,s)}n.Va=function(){this.C!=null&&(this.C=null,gr(this),Wi(this),be(19))};function _r(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function ca(s,c){var u=null;if(s.g==c){_r(s),$i(s),s.g=null;var p=2}else if(Fi(s.h,c))u=c.G,zo(s.h,c),p=1;else return;if(s.I!=0){if(c.o)if(p==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var T=s.D;p=ur(),Ie(p,new Po(p,u)),yr(s)}else aa(s);else if(T=c.m,T==3||T==0&&c.X>0||!(p==1&&nd(s,c)||p==2&&Wi(s)))switch(u&&u.length>0&&(c=s.h,c.i=c.i.concat(u)),T){case 1:At(s,5);break;case 4:At(s,10);break;case 3:At(s,6);break;default:At(s,2)}}}function ua(s,c){let u=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(u*=2),u*c}function At(s,c){if(s.j.info("Error code "+c),c==2){var u=f(s.bb,s),p=s.Ua;const T=!p;p=new it(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Tn(p,"https"),fr(p),T?Jh(p.toString(),u):Yh(p.toString(),u)}else be(2);s.I=0,s.l&&s.l.pa(c),ha(s),ia(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function ha(s){if(s.I=0,s.ja=[],s.l){const c=Wo(s.h);(c.length!=0||s.i.length!=0)&&(N(s.ja,c),N(s.ja,s.i),s.h.i.length=0,P(s.i),s.i.length=0),s.l.oa()}}function da(s,c,u){var p=u instanceof it?Le(u):new it(u);if(p.g!="")c&&(p.g=c+"."+p.g),En(p,p.u);else{var T=a.location;p=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;const x=new it(null);p&&Tn(x,p),c&&(x.g=c),T&&En(x,T),u&&(x.h=u),p=x}return u=s.G,c=s.wa,u&&c&&Q(p,u,c),Q(p,"VER",s.ka),Pn(s,p),p}function fa(s,c,u){if(c&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Aa&&!s.ma?new te(new Ui({ab:u})):new te(s.ma),c.Fa(s.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}n=pa.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function vr(){}vr.prototype.g=function(s,c){return new Ce(s,c)};function Ce(s,c){me.call(this),this.g=new ra(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(s?s["X-WebChannel-Client-Profile"]=c.sa:s={"X-WebChannel-Client-Profile":c.sa}),this.g.U=s,(s=c&&c.Qb)&&!y(s)&&(this.g.u=s),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Kt(this)}I(Ce,me),Ce.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ce.prototype.close=function(){zi(this.g)},Ce.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.v&&(u={},u.__data__=ki(s),s=u);c.i.push(new zh(c.Ya++,s)),c.I==3&&yr(c)},Ce.prototype.N=function(){this.g.l=null,delete this.j,zi(this.g),delete this.g,Ce.Z.N.call(this)};function ma(s){Ri.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const u in c){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}I(ma,Ri);function ga(){Pi.call(this),this.status=1}I(ga,Pi);function Kt(s){this.g=s}I(Kt,pa),Kt.prototype.ra=function(){Ie(this.g,"a")},Kt.prototype.qa=function(s){Ie(this.g,new ma(s))},Kt.prototype.pa=function(s){Ie(this.g,new ga)},Kt.prototype.oa=function(){Ie(this.g,"b")},vr.prototype.createWebChannel=vr.prototype.g,Ce.prototype.send=Ce.prototype.o,Ce.prototype.open=Ce.prototype.m,Ce.prototype.close=Ce.prototype.close,Ic=function(){return new vr},wc=function(){return ur()},vc=Et,hs={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hr.NO_ERROR=0,hr.TIMEOUT=8,hr.HTTP_ERROR=6,kr=hr,No.COMPLETE="complete",_c=No,Ao.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",me.prototype.listen=me.prototype.J,On=Ao,te.prototype.listenOnce=te.prototype.K,te.prototype.getLastError=te.prototype.Ha,te.prototype.getLastErrorCode=te.prototype.ya,te.prototype.getStatus=te.prototype.ca,te.prototype.getResponseJson=te.prototype.La,te.prototype.getResponseText=te.prototype.la,te.prototype.send=te.prototype.ea,te.prototype.setWithCredentials=te.prototype.Fa,yc=te}).apply(typeof br<"u"?br:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let fn="12.12.0";function tp(n){fn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ot=new li("@firebase/firestore");function Qt(){return Ot.logLevel}function D(n,...e){if(Ot.logLevel<=W.DEBUG){const t=e.map(Rs);Ot.debug(`Firestore (${fn}): ${n}`,...t)}}function Vt(n,...e){if(Ot.logLevel<=W.ERROR){const t=e.map(Rs);Ot.error(`Firestore (${fn}): ${n}`,...t)}}function Wn(n,...e){if(Ot.logLevel<=W.WARN){const t=e.map(Rs);Ot.warn(`Firestore (${fn}): ${n}`,...t)}}function Rs(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function U(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,bc(n,r,t)}function bc(n,e,t){let r=`FIRESTORE (${fn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Vt(r),new Error(r)}function ne(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||bc(e,i,r)}function K(n,e){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Fe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class np{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ye.UNAUTHENTICATED))}shutdown(){}}class rp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ip{constructor(e){this.t=e,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,t(d)):Promise.resolve();let o=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Nt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const d=o;e.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},h=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>h(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?h(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Nt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string",31837,{l:r}),new Tc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new ye(e)}}class sp{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class op{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new sp(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Na{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ap{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Be(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Na(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Na(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ps{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=lp(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function ds(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),o=e.charAt(r);if(i!==o)return Yi(i)===Yi(o)?H(i,o):Yi(i)?1:-1}return H(n.length,e.length)}const cp=55296,up=57343;function Yi(n){const e=n.charCodeAt(0);return e>=cp&&e<=up}function on(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const Da="__name__";class Ue{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&U(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ue.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ue?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Ue.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return H(e.length,t.length)}static compareSegments(e,t){const r=Ue.isNumericId(e),i=Ue.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ue.extractNumericId(e).compare(Ue.extractNumericId(t)):ds(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ks.fromString(e.substring(4,e.length-2))}}class X extends Ue{construct(e,t,r){return new X(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new X(t)}static emptyPath(){return new X([])}}const hp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class de extends Ue{construct(e,t,r){return new de(e,t,r)}static isValidIdentifier(e){return hp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),de.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Da}static keyField(){return new de([Da])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const h=e[i];if(h==="\\"){if(i+1===e.length)throw new O(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,i+=2}else h==="`"?(a=!a,i++):h!=="."||a?(r+=h,i++):(o(),i++)}if(o(),a)throw new O(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new de(t)}static emptyPath(){return new de([])}}/**
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
 */function Ec(n,e,t){if(!t)throw new O(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function dp(n,e,t,r){if(e===!0&&r===!0)throw new O(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ja(n){if(!L.isDocumentKey(n))throw new O(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Oa(n){if(L.isDocumentKey(n))throw new O(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ns(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function Sc(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ns(n);throw new O(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ie(n,e){const t={typeString:n};return e&&(t.value=e),t}function Zn(n,e){if(!xc(n))throw new O(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new O(k.INVALID_ARGUMENT,t);return!0}/**
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
 */const Va=-62135596800,Fa=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Fa);return new Y(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Va)throw new O(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fa}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zn(e,Y._jsonSchema))return new Y(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Va;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:ie("string",Y._jsonSchemaVersion),seconds:ie("number"),nanoseconds:ie("number")};/**
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
 */const $n=-1;function fp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Y(t+1,0):new Y(t,r));return new vt(i,L.empty(),e)}function pp(n){return new vt(n.readTime,n.key,$n)}class vt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new vt(J.min(),L.empty(),$n)}static max(){return new vt(J.max(),L.empty(),$n)}}function mp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ds(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==gp)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):A.reject(t)}static resolve(e){return new A((t,r)=>{t(e)})}static reject(e){return new A((t,r)=>{r(e)})}static waitFor(e){return new A((t,r)=>{let i=0,o=0,a=!1;e.forEach(h=>{++i,h.next(()=>{++o,a&&o===i&&t()},d=>r(d))}),a=!0,o===i&&t()})}static or(e){let t=A.resolve(!1);for(const r of e)t=t.next(i=>i?A.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new A((r,i)=>{const o=e.length,a=new Array(o);let h=0;for(let d=0;d<o;d++){const f=d;t(e[f]).next(g=>{a[f]=g,++h,h===o&&r(a)},g=>i(g))}})}static doWhile(e,t){return new A((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function _p(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function er(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class js{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}js.ce=-1;/**
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
 */const Os=-1;function Vs(n){return n==null}function Br(n){return n===0&&1/n==-1/0}function vp(n){return typeof n=="number"&&Number.isInteger(n)&&!Br(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ac="";function wp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=La(e)),e=Ip(n.get(t),e);return La(e)}function Ip(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case Ac:t+="";break;default:t+=o}}return t}function La(n){return n+Ac+""}/**
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
 */function Ma(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function pn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Cc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Se{constructor(e,t){this.comparator=e,this.root=t||ue.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tr(this.root,e,this.comparator,!0)}}class Tr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ue{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??ue.RED,this.left=i??ue.EMPTY,this.right=o??ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new ue(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1;ue.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new je([])}unionWith(e){let t=new fe(de.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return on(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class bp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new bp("Invalid base64 string: "+o):o}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const Tp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ft(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=Tp.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="server_timestamp",Rc="__type__",Pc="__previous_value__",Nc="__local_write_time__";function Fs(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Rc])==null?void 0:r.stringValue)===kc}function Ls(n){const e=n.mapValue.fields[Pc];return Fs(e)?Ls(e):e}function zr(n){const e=Ft(n.mapValue.fields[Nc].timestampValue);return new Y(e.seconds,e.nanos)}/**
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
 */class Ep{constructor(e,t,r,i,o,a,h,d,f,g,I){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=g,this.apiKey=I}}const Wr="(default)";class $r{constructor(e,t){this.projectId=e,this.database=t||Wr}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database===Wr}isEqual(e){return e instanceof $r&&e.projectId===this.projectId&&e.database===this.database}}function xp(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new O(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="__type__",Sp="__max__",Er={mapValue:{}},jc="__vector__",fs="value";function Lt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fs(n)?4:Cp(n)?9007199254740991:Ap(n)?10:11:U(28295,{value:n})}function qe(n,e){if(n===e)return!0;const t=Lt(n);if(t!==Lt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zr(n).isEqual(zr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Ft(i.timestampValue),h=Ft(o.timestampValue);return a.seconds===h.seconds&&a.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return an(i.bytesValue).isEqual(an(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return he(i.geoPointValue.latitude)===he(o.geoPointValue.latitude)&&he(i.geoPointValue.longitude)===he(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return he(i.integerValue)===he(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=he(i.doubleValue),h=he(o.doubleValue);return a===h?Br(a)===Br(h):isNaN(a)&&isNaN(h)}return!1}(n,e);case 9:return on(n.arrayValue.values||[],e.arrayValue.values||[],qe);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},h=o.mapValue.fields||{};if(Ma(a)!==Ma(h))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(h[d]===void 0||!qe(a[d],h[d])))return!1;return!0}(n,e);default:return U(52216,{left:n})}}function Hn(n,e){return(n.values||[]).find(t=>qe(t,e))!==void 0}function ln(n,e){if(n===e)return 0;const t=Lt(n),r=Lt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(o,a){const h=he(o.integerValue||o.doubleValue),d=he(a.integerValue||a.doubleValue);return h<d?-1:h>d?1:h===d?0:isNaN(h)?isNaN(d)?0:-1:1}(n,e);case 3:return Ba(n.timestampValue,e.timestampValue);case 4:return Ba(zr(n),zr(e));case 5:return ds(n.stringValue,e.stringValue);case 6:return function(o,a){const h=an(o),d=an(a);return h.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const h=o.split("/"),d=a.split("/");for(let f=0;f<h.length&&f<d.length;f++){const g=H(h[f],d[f]);if(g!==0)return g}return H(h.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const h=H(he(o.latitude),he(a.latitude));return h!==0?h:H(he(o.longitude),he(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return za(n.arrayValue,e.arrayValue);case 10:return function(o,a){var S,P,N,j;const h=o.fields||{},d=a.fields||{},f=(S=h[fs])==null?void 0:S.arrayValue,g=(P=d[fs])==null?void 0:P.arrayValue,I=H(((N=f==null?void 0:f.values)==null?void 0:N.length)||0,((j=g==null?void 0:g.values)==null?void 0:j.length)||0);return I!==0?I:za(f,g)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Er.mapValue&&a===Er.mapValue)return 0;if(o===Er.mapValue)return 1;if(a===Er.mapValue)return-1;const h=o.fields||{},d=Object.keys(h),f=a.fields||{},g=Object.keys(f);d.sort(),g.sort();for(let I=0;I<d.length&&I<g.length;++I){const S=ds(d[I],g[I]);if(S!==0)return S;const P=ln(h[d[I]],f[g[I]]);if(P!==0)return P}return H(d.length,g.length)}(n.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function Ba(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=Ft(n),r=Ft(e),i=H(t.seconds,r.seconds);return i!==0?i:H(t.nanos,r.nanos)}function za(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=ln(t[i],r[i]);if(o)return o}return H(t.length,r.length)}function cn(n){return ps(n)}function ps(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ft(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return an(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=ps(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ps(t.fields[a])}`;return i+"}"}(n.mapValue):U(61005,{value:n})}function Rr(n){switch(Lt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ls(n);return e?16+Rr(e):16;case 5:return 2*n.stringValue.length;case 6:return an(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Rr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return pn(r.fields,(o,a)=>{i+=o.length+Rr(a)}),i}(n.mapValue);default:throw U(13486,{value:n})}}function ms(n){return!!n&&"integerValue"in n}function Ms(n){return!!n&&"arrayValue"in n}function Pr(n){return!!n&&"mapValue"in n}function Ap(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Dc])==null?void 0:r.stringValue)===jc}function Vn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return pn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Vn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vn(n.arrayValue.values[t]);return e}return{...n}}function Cp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Sp}/**
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
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Pr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vn(t)}setAll(e){let t=de.emptyPath(),r={},i=[];e.forEach((a,h)=>{if(!t.isImmediateParentOf(h)){const d=this.getFieldsMap(t);this.applyChanges(d,r,i),r={},i=[],t=h.popLast()}a?r[h.lastSegment()]=Vn(a):i.push(h.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Pr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Pr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){pn(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Ne(Vn(this.value))}}function Oc(n){const e=[];return pn(n.fields,(t,r)=>{const i=new de([t]);if(Pr(r)){const o=Oc(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new je(e)}/**
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
 */class Pe{constructor(e,t,r,i,o,a,h){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=h}static newInvalidDocument(e){return new Pe(e,0,J.min(),J.min(),J.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,i){return new Pe(e,1,t,J.min(),r,i,0)}static newNoDocument(e,t){return new Pe(e,2,t,J.min(),J.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new Pe(e,3,t,J.min(),J.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hr{constructor(e,t){this.position=e,this.inclusive=t}}function Wa(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=ln(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function $a(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Gr{constructor(e,t="asc"){this.field=e,this.dir=t}}function kp(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Vc{}class le extends Vc{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Pp(e,t,r):t==="array-contains"?new jp(e,r):t==="in"?new Op(e,r):t==="not-in"?new Vp(e,r):t==="array-contains-any"?new Fp(e,r):new le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Np(e,r):new Dp(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ln(t,this.value)):t!==null&&Lt(this.value)===Lt(t)&&this.matchesComparison(ln(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wt extends Vc{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new wt(e,t)}matches(e){return Fc(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Fc(n){return n.op==="and"}function Lc(n){return Rp(n)&&Fc(n)}function Rp(n){for(const e of n.filters)if(e instanceof wt)return!1;return!0}function gs(n){if(n instanceof le)return n.field.canonicalString()+n.op.toString()+cn(n.value);if(Lc(n))return n.filters.map(e=>gs(e)).join(",");{const e=n.filters.map(t=>gs(t)).join(",");return`${n.op}(${e})`}}function Mc(n,e){return n instanceof le?function(r,i){return i instanceof le&&r.op===i.op&&r.field.isEqual(i.field)&&qe(r.value,i.value)}(n,e):n instanceof wt?function(r,i){return i instanceof wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,h)=>o&&Mc(a,i.filters[h]),!0):!1}(n,e):void U(19439)}function Uc(n){return n instanceof le?function(t){return`${t.field.canonicalString()} ${t.op} ${cn(t.value)}`}(n):n instanceof wt?function(t){return t.op.toString()+" {"+t.getFilters().map(Uc).join(" ,")+"}"}(n):"Filter"}class Pp extends le{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Np extends le{constructor(e,t){super(e,"in",t),this.keys=Bc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Dp extends le{constructor(e,t){super(e,"not-in",t),this.keys=Bc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Bc(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class jp extends le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ms(t)&&Hn(t.arrayValue,this.value)}}class Op extends le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Hn(this.value.arrayValue,t)}}class Vp extends le{constructor(e,t){super(e,"not-in",t)}matches(e){if(Hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Hn(this.value.arrayValue,t)}}class Fp extends le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ms(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Hn(this.value.arrayValue,r))}}/**
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
 */class Lp{constructor(e,t=null,r=[],i=[],o=null,a=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=h,this.Te=null}}function Ha(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Lp(n,e,t,r,i,o,a)}function Us(n){const e=K(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>gs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Vs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>cn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>cn(r)).join(",")),e.Te=t}return e.Te}function Bs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!kp(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Mc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$a(n.startAt,e.startAt)&&$a(n.endAt,e.endAt)}/**
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
 */class ci{constructor(e,t=null,r=[],i=[],o=null,a="F",h=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=h,this.endAt=d,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Mp(n,e,t,r,i,o,a,h){return new ci(n,e,t,r,i,o,a,h)}function Up(n){return new ci(n)}function Ga(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Bp(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function zp(n){return n.collectionGroup!==null}function Fn(n){const e=K(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let h=new fe(de.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(h=h.add(f.field))})}),h})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new Gr(o,r))}),t.has(de.keyField().canonicalString())||e.Ee.push(new Gr(de.keyField(),r))}return e.Ee}function Dt(n){const e=K(n);return e.Ie||(e.Ie=Wp(e,Fn(n))),e.Ie}function Wp(n,e){if(n.limitType==="F")return Ha(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Gr(i.field,o)});const t=n.endAt?new Hr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Hr(n.startAt.position,n.startAt.inclusive):null;return Ha(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ys(n,e,t){return new ci(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zc(n,e){return Bs(Dt(n),Dt(e))&&n.limitType===e.limitType}function Wc(n){return`${Us(Dt(n))}|lt:${n.limitType}`}function Nn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Uc(i)).join(", ")}]`),Vs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>cn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>cn(i)).join(",")),`Target(${r})`}(Dt(n))}; limitType=${n.limitType})`}function zs(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Fn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,h,d){const f=Wa(a,h,d);return a.inclusive?f<=0:f<0}(r.startAt,Fn(r),i)||r.endAt&&!function(a,h,d){const f=Wa(a,h,d);return a.inclusive?f>=0:f>0}(r.endAt,Fn(r),i))}(n,e)}function $p(n){return(e,t)=>{let r=!1;for(const i of Fn(n)){const o=Hp(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Hp(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(o,a,h){const d=a.data.field(o),f=h.data.field(o);return d!==null&&f!==null?ln(d,f):U(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
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
 */class $t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){pn(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Cc(this.inner)}size(){return this.innerSize}}/**
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
 */const Gp=new Se(L.comparator);function qr(){return Gp}const $c=new Se(L.comparator);function xr(...n){let e=$c;for(const t of n)e=e.insert(t.key,t);return e}function Hc(n){let e=$c;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Rt(){return Ln()}function Gc(){return Ln()}function Ln(){return new $t(n=>n.toString(),(n,e)=>n.isEqual(e))}const qp=new Se(L.comparator),Kp=new fe(L.comparator);function _e(...n){let e=Kp;for(const t of n)e=e.add(t);return e}const Qp=new fe(H);function Jp(){return Qp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Br(e)?"-0":e}}function qc(n){return{integerValue:""+n}}function Yp(n,e){return vp(e)?qc(e):Ws(n,e)}/**
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
 */class ui{constructor(){this._=void 0}}function Xp(n,e,t){return n instanceof Gn?function(i,o){const a={fields:{[Rc]:{stringValue:kc},[Nc]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Fs(o)&&(o=Ls(o)),o&&(a.fields[Pc]=o),{mapValue:a}}(t,e):n instanceof qn?Qc(n,e):n instanceof Kn?Jc(n,e):function(i,o){const a=Kc(i,o),h=qa(a)+qa(i.Ae);return ms(a)&&ms(i.Ae)?qc(h):Ws(i.serializer,h)}(n,e)}function Zp(n,e,t){return n instanceof qn?Qc(n,e):n instanceof Kn?Jc(n,e):t}function Kc(n,e){return n instanceof Kr?function(r){return ms(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Gn extends ui{}class qn extends ui{constructor(e){super(),this.elements=e}}function Qc(n,e){const t=Yc(e);for(const r of n.elements)t.some(i=>qe(i,r))||t.push(r);return{arrayValue:{values:t}}}class Kn extends ui{constructor(e){super(),this.elements=e}}function Jc(n,e){let t=Yc(e);for(const r of n.elements)t=t.filter(i=>!qe(i,r));return{arrayValue:{values:t}}}class Kr extends ui{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function qa(n){return he(n.integerValue||n.doubleValue)}function Yc(n){return Ms(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class em{constructor(e,t){this.field=e,this.transform=t}}function tm(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof qn&&i instanceof qn||r instanceof Kn&&i instanceof Kn?on(r.elements,i.elements,qe):r instanceof Kr&&i instanceof Kr?qe(r.Ae,i.Ae):r instanceof Gn&&i instanceof Gn}(n.transform,e.transform)}class nm{constructor(e,t){this.version=e,this.transformResults=t}}class Xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xe}static exists(e){return new Xe(void 0,e)}static updateTime(e){return new Xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class hi{}function Xc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new eu(n.key,Xe.none()):new tr(n.key,n.data,Xe.none());{const t=n.data,r=Ne.empty();let i=new fe(de.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Ht(n.key,r,new je(i.toArray()),Xe.none())}}function rm(n,e,t){n instanceof tr?function(i,o,a){const h=i.value.clone(),d=Qa(i.fieldTransforms,o,a.transformResults);h.setAll(d),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):n instanceof Ht?function(i,o,a){if(!Nr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const h=Qa(i.fieldTransforms,o,a.transformResults),d=o.data;d.setAll(Zc(i)),d.setAll(h),o.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Mn(n,e,t,r){return n instanceof tr?function(o,a,h,d){if(!Nr(o.precondition,a))return h;const f=o.value.clone(),g=Ja(o.fieldTransforms,d,a);return f.setAll(g),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ht?function(o,a,h,d){if(!Nr(o.precondition,a))return h;const f=Ja(o.fieldTransforms,d,a),g=a.data;return g.setAll(Zc(o)),g.setAll(f),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,r):function(o,a,h){return Nr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):h}(n,e,t)}function im(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=Kc(r.transform,i||null);o!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,o))}return t||null}function Ka(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&on(r,i,(o,a)=>tm(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class tr extends hi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ht extends hi{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Zc(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Qa(n,e,t){const r=new Map;ne(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,h=e.data.field(o.field);r.set(o.field,Zp(a,h,t[i]))}return r}function Ja(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,Xp(o,a,e))}return r}class eu extends hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sm extends hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class om{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&rm(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Mn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Mn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Gc();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let h=this.applyToLocalView(a,o.mutatedFields);h=t.has(i.key)?null:h;const d=Xc(a,h);d!==null&&r.set(i.key,d),a.isValidDocument()||a.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),_e())}isEqual(e){return this.batchId===e.batchId&&on(this.mutations,e.mutations,(t,r)=>Ka(t,r))&&on(this.baseMutations,e.baseMutations,(t,r)=>Ka(t,r))}}class $s{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ne(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return qp}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new $s(e,t,r,i)}}/**
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
 */class am{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var re,$;function lm(n){switch(n){case k.OK:return U(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function cm(n){if(n===void 0)return Vt("GRPC error has no .code"),k.UNKNOWN;switch(n){case re.OK:return k.OK;case re.CANCELLED:return k.CANCELLED;case re.UNKNOWN:return k.UNKNOWN;case re.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case re.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case re.INTERNAL:return k.INTERNAL;case re.UNAVAILABLE:return k.UNAVAILABLE;case re.UNAUTHENTICATED:return k.UNAUTHENTICATED;case re.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case re.NOT_FOUND:return k.NOT_FOUND;case re.ALREADY_EXISTS:return k.ALREADY_EXISTS;case re.PERMISSION_DENIED:return k.PERMISSION_DENIED;case re.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case re.ABORTED:return k.ABORTED;case re.OUT_OF_RANGE:return k.OUT_OF_RANGE;case re.UNIMPLEMENTED:return k.UNIMPLEMENTED;case re.DATA_LOSS:return k.DATA_LOSS;default:return U(39323,{code:n})}}($=re||(re={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ks([4294967295,4294967295],0);class um{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _s(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function dm(n,e){return _s(n,e.toTimestamp())}function Xt(n){return ne(!!n,49232),J.fromTimestamp(function(t){const r=Ft(t);return new Y(r.seconds,r.nanos)}(n))}function tu(n,e){return vs(n,e).canonicalString()}function vs(n,e){const t=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function fm(n){const e=X.fromString(n);return ne(Im(e),10190,{key:e.toString()}),e}function ws(n,e){return tu(n.databaseId,e.path)}function pm(n){const e=fm(n);return e.length===4?X.emptyPath():gm(e)}function mm(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function gm(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ya(n,e,t){return{name:ws(n,e),fields:t.value.mapValue.fields}}function ym(n,e){let t;if(e instanceof tr)t={update:Ya(n,e.key,e.value)};else if(e instanceof eu)t={delete:ws(n,e.key)};else if(e instanceof Ht)t={update:Ya(n,e.key,e.data),updateMask:wm(e.fieldMask)};else{if(!(e instanceof sm))return U(16599,{dt:e.type});t={verify:ws(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const h=a.transform;if(h instanceof Gn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof qn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Kn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Kr)return{fieldPath:a.field.canonicalString(),increment:h.Ae};throw U(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:dm(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U(27497)}(n,e.precondition)),t}function _m(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map(t=>function(i,o){let a=i.updateTime?Xt(i.updateTime):Xt(o);return a.isEqual(J.min())&&(a=Xt(o)),new nm(a,i.transformResults||[])}(t,e))):[]}function vm(n){let e=pm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ne(r===1,65062);const g=t.from[0];g.allDescendants?i=g.collectionId:e=e.child(g.collectionId)}let o=[];t.where&&(o=function(I){const S=nu(I);return S instanceof wt&&Lc(S)?S.getFilters():[S]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(S=>function(N){return new Gr(Jt(N.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(S))}(t.orderBy));let h=null;t.limit&&(h=function(I){let S;return S=typeof I=="object"?I.value:I,Vs(S)?null:S}(t.limit));let d=null;t.startAt&&(d=function(I){const S=!!I.before,P=I.values||[];return new Hr(P,S)}(t.startAt));let f=null;return t.endAt&&(f=function(I){const S=!I.before,P=I.values||[];return new Hr(P,S)}(t.endAt)),Mp(e,i,a,o,h,"F",d,f)}function nu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Jt(t.unaryFilter.field);return le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Jt(t.unaryFilter.field);return le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Jt(t.unaryFilter.field);return le.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Jt(t.unaryFilter.field);return le.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}}(n):n.fieldFilter!==void 0?function(t){return le.create(Jt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return wt.create(t.compositeFilter.filters.map(r=>nu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U(1026)}}(t.compositeFilter.op))}(n):U(30097,{filter:n})}function Jt(n){return de.fromServerFormat(n.fieldPath)}function wm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Im(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function ru(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class bm{constructor(e){this.yt=e}}function Tm(n){const e=vm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ys(e,e.limit,"L"):e}/**
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
 */class Em{constructor(){this.bn=new xm}addToCollectionParentIndex(e,t){return this.bn.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(vt.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(vt.min())}updateCollectionGroup(e,t,r){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class xm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new fe(X.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new fe(X.comparator)).toArray()}}/**
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
 */const Xa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iu=41943040;class Ee{static withCacheSize(e){return new Ee(e,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ee.DEFAULT_COLLECTION_PERCENTILE=10,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ee.DEFAULT=new Ee(iu,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ee.DISABLED=new Ee(-1,0,0);/**
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
 */const Za="LruGarbageCollector",Sm=1048576;function el([n,e],[t,r]){const i=H(n,t);return i===0?H(e,r):i}class Am{constructor(e){this.Pr=e,this.buffer=new fe(el),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();el(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Cm{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){D(Za,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){er(t)?D(Za,"Ignoring IndexedDB error during garbage collection: ",t):await Ds(t)}await this.Ar(3e5)})}}class km{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return A.resolve(js.ce);const r=new Am(t);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Xa)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xa):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,i,o,a,h,d,f;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,a=Date.now(),this.nthSequenceNumber(e,i))).next(I=>(r=I,h=Date.now(),this.removeTargets(e,r,t))).next(I=>(o=I,d=Date.now(),this.removeOrphanedDocuments(e,r))).next(I=>(f=Date.now(),Qt()<=W.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${i} in `+(h-a)+`ms
	Removed ${o} targets in `+(d-h)+`ms
	Removed ${I} documents in `+(f-d)+`ms
Total Duration: ${f-g}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I})))}}function Rm(n,e){return new km(n,e)}/**
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
 */class Pm{constructor(){this.changes=new $t(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?A.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Nm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Dm{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Mn(r.mutation,i,je.empty(),Y.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,t,r=_e()){const i=Rt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=xr();return o.forEach((h,d)=>{a=a.insert(h,d.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Rt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,_e()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,h)=>{t.set(a,h)})})}computeViews(e,t,r,i){let o=qr();const a=Ln(),h=function(){return Ln()}();return t.forEach((d,f)=>{const g=r.get(f.key);i.has(f.key)&&(g===void 0||g.mutation instanceof Ht)?o=o.insert(f.key,f):g!==void 0?(a.set(f.key,g.mutation.getFieldMask()),Mn(g.mutation,f,g.mutation.getFieldMask(),Y.now())):a.set(f.key,je.empty())}),this.recalculateAndSaveOverlays(e,o).next(d=>(d.forEach((f,g)=>a.set(f,g)),t.forEach((f,g)=>h.set(f,new Nm(g,a.get(f)??null))),h))}recalculateAndSaveOverlays(e,t){const r=Ln();let i=new Se((a,h)=>a-h),o=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const h of a)h.keys().forEach(d=>{const f=t.get(d);if(f===null)return;let g=r.get(d)||je.empty();g=h.applyToLocalView(f,g),r.set(d,g);const I=(i.get(h.batchId)||_e()).add(d);i=i.insert(h.batchId,I)})}).next(()=>{const a=[],h=i.getReverseIterator();for(;h.hasNext();){const d=h.getNext(),f=d.key,g=d.value,I=Gc();g.forEach(S=>{if(!o.has(S)){const P=Xc(t.get(S),r.get(S));P!==null&&I.set(S,P),o=o.add(S)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,I))}return A.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return Bp(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):A.resolve(Rt());let h=$n,d=o;return a.next(f=>A.forEach(f,(g,I)=>(h<I.largestBatchId&&(h=I.largestBatchId),o.get(g)?A.resolve():this.remoteDocumentCache.getEntry(e,g).next(S=>{d=d.insert(g,S)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,d,f,_e())).next(g=>({batchId:h,changes:Hc(g)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=xr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=xr();return this.indexManager.getCollectionParents(e,o).next(h=>A.forEach(h,d=>{const f=function(I,S){return new ci(S,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,d.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(g=>{g.forEach((I,S)=>{a=a.insert(I,S)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((d,f)=>{const g=f.getKey();a.get(g)===null&&(a=a.insert(g,Pe.newInvalidDocument(g)))});let h=xr();return a.forEach((d,f)=>{const g=o.get(d);g!==void 0&&Mn(g.mutation,f,je.empty(),Y.now()),zs(t,f)&&(h=h.insert(d,f))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return A.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Xt(i.createTime)}}(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(i){return{name:i.name,query:Tm(i.bundledQuery),readTime:Xt(i.readTime)}}(t)),A.resolve()}}/**
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
 */class Om{constructor(){this.overlays=new Se(L.comparator),this.Lr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Rt();return A.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.St(e,t,o)}),A.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),A.resolve()}getOverlaysForCollection(e,t,r){const i=Rt(),o=t.length+1,a=new L(t.child("")),h=this.overlays.getIteratorFrom(a);for(;h.hasNext();){const d=h.getNext().value,f=d.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return A.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Se((f,g)=>f-g);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let g=o.get(f.largestBatchId);g===null&&(g=Rt(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const h=Rt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,g)=>h.set(f,g)),!(h.size()>=i)););return A.resolve(h)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new am(t,r));let o=this.Lr.get(t);o===void 0&&(o=_e(),this.Lr.set(t,o)),this.Lr.set(t,o.add(r.key))}}/**
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
 */class Vm{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
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
 */class Hs{constructor(){this.kr=new fe(ae.qr),this.Kr=new fe(ae.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new ae(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new ae(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new L(new X([])),r=new ae(t,e),i=new ae(t,e+1),o=[];return this.Kr.forEachInRange([r,i],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new L(new X([])),r=new ae(t,e),i=new ae(t,e+1);let o=_e();return this.Kr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new ae(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ae{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return L.comparator(e.key,t.key)||H(e.Jr,t.Jr)}static Ur(e,t){return H(e.Jr,t.Jr)||L.comparator(e.key,t.key)}}/**
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
 */class Fm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new fe(ae.qr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new om(o,t,r,i);this.mutationQueue.push(a);for(const h of i)this.Hr=this.Hr.add(new ae(h.key,o)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return A.resolve(a)}lookupMutationBatch(e,t){return A.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),o=i<0?0:i;return A.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?Os:this.Yn-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ae(t,0),i=new ae(t,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([r,i],a=>{const h=this.Zr(a.Jr);o.push(h)}),A.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(H);return t.forEach(i=>{const o=new ae(i,0),a=new ae(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,a],h=>{r=r.add(h.Jr)})}),A.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const a=new ae(new L(o),0);let h=new fe(H);return this.Hr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(h=h.add(d.Jr)),!0)},a),A.resolve(this.Yr(h))}Yr(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ne(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return A.forEach(t.mutations,i=>{const o=new ae(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,t){const r=new ae(t,0),i=this.Hr.firstAfterOrEqual(r);return A.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Lm{constructor(e){this.ti=e,this.docs=function(){return new Se(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return A.resolve(r?r.document.mutableCopy():Pe.newInvalidDocument(t))}getEntries(e,t){let r=qr();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Pe.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=qr();const a=t.path,h=new L(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){const{key:f,value:{document:g}}=d.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||mp(pp(g),r)<=0||(i.has(g.key)||zs(t,g))&&(o=o.insert(g.key,g.mutableCopy()))}return A.resolve(o)}getAllFromCollectionGroup(e,t,r,i){U(9500)}ni(e,t){return A.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Mm(this)}getSize(e){return A.resolve(this.size)}}class Mm extends Pm{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),A.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class Um{constructor(e){this.persistence=e,this.ri=new $t(t=>Us(t),Bs),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new Hs,this.targetCount=0,this.oi=un._r()}forEachTarget(e,t){return this.ri.forEach((r,i)=>t(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),A.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new un(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.lr(t),A.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.ri.forEach((a,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,h.targetId)),i++)}),A.waitFor(o).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return A.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),A.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),A.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return A.resolve(r)}containsKey(e,t){return A.resolve(this.si.containsKey(t))}}/**
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
 */class su{constructor(e,t){this._i={},this.overlays={},this.ai=new js(0),this.ui=!1,this.ui=!0,this.ci=new Vm,this.referenceDelegate=e(this),this.li=new Um(this),this.indexManager=new Em,this.remoteDocumentCache=function(i){return new Lm(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new bm(t),this.Pi=new jm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Om,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new Fm(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const i=new Bm(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(o=>this.referenceDelegate.Ei(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ii(e,t){return A.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class Bm extends yp{constructor(e){super(),this.currentSequenceNumber=e}}class Gs{constructor(e){this.persistence=e,this.Ri=new Hs,this.Ai=null}static Vi(e){return new Gs(e)}get di(){if(this.Ai)return this.Ai;throw U(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),A.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),A.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.di,r=>{const i=L.fromPath(r);return this.mi(e,i).next(o=>{o||t.removeEntry(i,J.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return A.or([()=>A.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Qr{constructor(e,t){this.persistence=e,this.fi=new $t(r=>wp(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Rm(this,t)}static Vi(e,t){return new Qr(e,t)}Ti(){}Ei(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return A.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(o=>o?A.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ni(e,a=>this.wr(e,a,t).next(h=>{h||(r++,o.removeEntry(a,J.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),A.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),A.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Rr(e.data.value)),t}wr(e,t,r){return A.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return A.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class zm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Wm{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return jd()?8:_p(we())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.gs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new zm;return this.ys(e,t,a).next(h=>{if(o.result=h,this.As)return this.ws(e,t,a,h.size)})}).next(()=>o.result)}ws(e,t,r,i){return r.documentReadCount<this.Vs?(Qt()<=W.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),A.resolve()):(Qt()<=W.DEBUG&&D("QueryEngine","Query:",Nn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Qt()<=W.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dt(t))):A.resolve())}gs(e,t){if(Ga(t))return A.resolve(null);let r=Dt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ys(t,null,"F"),r=Dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=_e(...o);return this.fs.getDocuments(e,a).next(h=>this.indexManager.getMinOffset(e,r).next(d=>{const f=this.Ss(t,h);return this.bs(t,f,a,d.readTime)?this.gs(e,ys(t,null,"F")):this.Ds(e,f,t,d)}))})))}ps(e,t,r,i){return Ga(t)||i.isEqual(J.min())?A.resolve(null):this.fs.getDocuments(e,r).next(o=>{const a=this.Ss(t,o);return this.bs(t,a,r,i)?A.resolve(null):(Qt()<=W.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Nn(t)),this.Ds(e,a,t,fp(i,$n)).next(h=>h))})}Ss(e,t){let r=new fe($p(e));return t.forEach((i,o)=>{zs(e,o)&&(r=r.add(o))}),r}bs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ys(e,t,r){return Qt()<=W.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Nn(t)),this.fs.getDocumentsMatchingQuery(e,t,vt.min(),r)}Ds(e,t,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="LocalStore";class Hm{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new Se(H),this.Fs=new $t(o=>Us(o),Bs),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Dm(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Gm(n,e,t,r){return new Hm(n,e,t,r)}async function ou(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],h=[];let d=_e();for(const f of i){a.push(f.batchId);for(const g of f.mutations)d=d.add(g.key)}for(const f of o){h.push(f.batchId);for(const g of f.mutations)d=d.add(g.key)}return t.localDocuments.getDocuments(r,d).next(f=>({Ns:f,removedBatchIds:a,addedBatchIds:h}))})})}function qm(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return function(h,d,f,g){const I=f.batch,S=I.keys();let P=A.resolve();return S.forEach(N=>{P=P.next(()=>g.getEntry(d,N)).next(j=>{const C=f.docVersions.get(N);ne(C!==null,48541),j.version.compareTo(C)<0&&(I.applyToRemoteDocument(j,f),j.isValidDocument()&&(j.setReadTime(f.commitVersion),g.addEntry(j)))})}),P.next(()=>h.mutationQueue.removeMutationBatch(d,I))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let d=_e();for(let f=0;f<h.mutationResults.length;++f)h.mutationResults[f].transformResults.length>0&&(d=d.add(h.batch.mutations[f].key));return d}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Km(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function Qm(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Os),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class tl{constructor(){this.activeTargetIds=Jp()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jm{constructor(){this.vo=new tl,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new tl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ym{Mo(e){}shutdown(){}}/**
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
 */const nl="ConnectivityMonitor";class rl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){D(nl,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){D(nl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sr=null;function Is(){return Sr===null?Sr=function(){return 268435456+Math.round(2147483648*Math.random())}():Sr++,"0x"+Sr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="RestConnection",Xm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Zm{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Wr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,o){const a=Is(),h=this.Qo(e,t.toUriEncodedString());D(Xi,`Sending RPC '${e}' ${a}:`,h,r);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(d,i,o);const{host:f}=new URL(h),g=Xn(f);return this.zo(e,h,d,r,g).then(I=>(D(Xi,`Received RPC '${e}' ${a}: `,I),I),I=>{throw Wn(Xi,`RPC '${e}' ${a} failed with error: `,I,"url: ",h,"request:",r),I})}jo(e,t,r,i,o,a){return this.Wo(e,t,r,i,o)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}Qo(e,t){const r=Xm[e];let i=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class eg{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const ge="WebChannelConnection",Dn=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Zt extends Zm{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Zt.c_){const e=wc();Dn(e,vc.STAT_EVENT,t=>{t.stat===hs.PROXY?D(ge,"STAT_EVENT: detected buffering proxy"):t.stat===hs.NOPROXY&&D(ge,"STAT_EVENT: detected no buffering proxy")}),Zt.c_=!0}}zo(e,t,r,i,o){const a=Is();return new Promise((h,d)=>{const f=new yc;f.setWithCredentials(!0),f.listenOnce(_c.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case kr.NO_ERROR:const I=f.getResponseJson();D(ge,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(I)),h(I);break;case kr.TIMEOUT:D(ge,`RPC '${e}' ${a} timed out`),d(new O(k.DEADLINE_EXCEEDED,"Request time out"));break;case kr.HTTP_ERROR:const S=f.getStatus();if(D(ge,`RPC '${e}' ${a} failed with status:`,S,"response text:",f.getResponseText()),S>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const N=P==null?void 0:P.error;if(N&&N.status&&N.message){const j=function(V){const B=V.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(B)>=0?B:k.UNKNOWN}(N.status);d(new O(j,N.message))}else d(new O(k.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new O(k.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{D(ge,`RPC '${e}' ${a} completed.`)}});const g=JSON.stringify(i);D(ge,`RPC '${e}' ${a} sending request:`,i),f.send(t,"POST",g,r,15)})}T_(e,t,r){const i=Is(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Go(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const f=o.join("");D(ge,`Creating RPC '${e}' stream ${i}: ${f}`,h);const g=a.createWebChannel(f,h);this.E_(g);let I=!1,S=!1;const P=new eg({Jo:N=>{S?D(ge,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(I||(D(ge,`Opening RPC '${e}' stream ${i} transport.`),g.open(),I=!0),D(ge,`RPC '${e}' stream ${i} sending:`,N),g.send(N))},Ho:()=>g.close()});return Dn(g,On.EventType.OPEN,()=>{S||(D(ge,`RPC '${e}' stream ${i} transport opened.`),P.i_())}),Dn(g,On.EventType.CLOSE,()=>{S||(S=!0,D(ge,`RPC '${e}' stream ${i} transport closed`),P.o_(),this.I_(g))}),Dn(g,On.EventType.ERROR,N=>{S||(S=!0,Wn(ge,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),P.o_(new O(k.UNAVAILABLE,"The operation could not be completed")))}),Dn(g,On.EventType.MESSAGE,N=>{var j;if(!S){const C=N.data[0];ne(!!C,16349);const V=C,B=(V==null?void 0:V.error)||((j=V[0])==null?void 0:j.error);if(B){D(ge,`RPC '${e}' stream ${i} received error:`,B);const Z=B.status;let Ae=function(w){const m=re[w];if(m!==void 0)return cm(m)}(Z),ee=B.message;Z==="NOT_FOUND"&&ee.includes("database")&&ee.includes("does not exist")&&ee.includes(this.databaseId.database)&&Wn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Ae===void 0&&(Ae=k.INTERNAL,ee="Unknown error status: "+Z+" with message "+B.message),S=!0,P.o_(new O(Ae,ee)),g.close()}else D(ge,`RPC '${e}' stream ${i} received:`,C),P.__(C)}}),Zt.u_(),setTimeout(()=>{P.s_()},0),P}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ic()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n){return new Zt(n)}function Zi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n){return new um(n,!0)}/**
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
 */Zt.c_=!1;class au{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=i,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const il="PersistentStream";class ng{constructor(e,t,r,i,o,a,h,d){this.Ci=e,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=h,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new au(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new O(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return D(il,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(D(il,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rg extends ng{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=_m(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=mm(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ym(this.serializer,r))};this.q_(t)}}/**
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
 */class ig{}class sg extends ig{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new O(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(e,vs(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(k.UNKNOWN,o.toString())})}jo(e,t,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,h])=>this.connection.jo(e,vs(t,r),i,a,h,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(k.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function og(n,e,t,r){return new sg(n,e,t,r)}class ag{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vt(t),this.aa=!1):D("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const nr="RemoteStore";class lg{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{ir(this)&&(D(nr,"Restarting streams for network reachability change."),await async function(d){const f=K(d);f.Ia.add(4),await rr(f),f.Va.set("Unknown"),f.Ia.delete(4),await fi(f)}(this))})}),this.Va=new ag(r,i)}}async function fi(n){if(ir(n))for(const e of n.Ra)await e(!0)}async function rr(n){for(const e of n.Ra)await e(!1)}function ir(n){return K(n).Ia.size===0}async function lu(n,e,t){if(!er(e))throw e;n.Ia.add(1),await rr(n),n.Va.set("Offline"),t||(t=()=>Km(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(nr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await fi(n)})}function cu(n,e){return e().catch(t=>lu(n,t,e))}async function pi(n){const e=K(n),t=It(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Os;for(;cg(e);)try{const i=await Qm(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,ug(e,i)}catch(i){await lu(e,i)}uu(e)&&hu(e)}function cg(n){return ir(n)&&n.Ta.length<10}function ug(n,e){n.Ta.push(e);const t=It(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function uu(n){return ir(n)&&!It(n).x_()&&n.Ta.length>0}function hu(n){It(n).start()}async function hg(n){It(n).ra()}async function dg(n){const e=It(n);for(const t of n.Ta)e.ea(t.mutations)}async function fg(n,e,t){const r=n.Ta.shift(),i=$s.from(r,e,t);await cu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await pi(n)}async function pg(n,e){e&&It(n).Y_&&await async function(r,i){if(function(a){return lm(a)&&a!==k.ABORTED}(i.code)){const o=r.Ta.shift();It(r).B_(),await cu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await pi(r)}}(n,e),uu(n)&&hu(n)}async function sl(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),D(nr,"RemoteStore received new credentials");const r=ir(t);t.Ia.add(3),await rr(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await fi(t)}async function mg(n,e){const t=K(n);e?(t.Ia.delete(2),await fi(t)):e||(t.Ia.add(2),await rr(t),t.Va.set("Unknown"))}function It(n){return n.fa||(n.fa=function(t,r,i){const o=K(t);return o.sa(),new rg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:hg.bind(null,n),t_:pg.bind(null,n),ta:dg.bind(null,n),na:fg.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await pi(n)):(await n.fa.stop(),n.Ta.length>0&&(D(nr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Ks{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,h=new Ks(e,t,a,i,o);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function du(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),er(n))return new O(k.UNAVAILABLE,`${e}: ${n}`);throw n}class gg{constructor(){this.queries=ol(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=K(t),o=i.queries;i.queries=ol(),o.forEach((a,h)=>{for(const d of h.Sa)d.onError(r)})})(this,new O(k.ABORTED,"Firestore shutting down"))}}function ol(){return new $t(n=>Wc(n),zc)}function yg(n){n.Ca.forEach(e=>{e.next()})}var al,ll;(ll=al||(al={})).Ma="default",ll.Cache="cache";const _g="SyncEngine";class vg{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new $t(h=>Wc(h),zc),this.Eu=new Map,this.Iu=new Set,this.Ru=new Se(L.comparator),this.Au=new Map,this.Vu=new Hs,this.du={},this.mu=new Map,this.fu=un.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wg(n,e,t){const r=Eg(n);try{const i=await function(a,h){const d=K(a),f=Y.now(),g=h.reduce((P,N)=>P.add(N.key),_e());let I,S;return d.persistence.runTransaction("Locally write mutations","readwrite",P=>{let N=qr(),j=_e();return d.xs.getEntries(P,g).next(C=>{N=C,N.forEach((V,B)=>{B.isValidDocument()||(j=j.add(V))})}).next(()=>d.localDocuments.getOverlayedDocuments(P,N)).next(C=>{I=C;const V=[];for(const B of h){const Z=im(B,I.get(B.key).overlayedDocument);Z!=null&&V.push(new Ht(B.key,Z,Oc(Z.value.mapValue),Xe.exists(!0)))}return d.mutationQueue.addMutationBatch(P,f,V,h)}).next(C=>{S=C;const V=C.applyToLocalDocumentSet(I,j);return d.documentOverlayCache.saveOverlays(P,C.batchId,V)})}).then(()=>({batchId:S.batchId,changes:Hc(I)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,h,d){let f=a.du[a.currentUser.toKey()];f||(f=new Se(H)),f=f.insert(h,d),a.du[a.currentUser.toKey()]=f}(r,i.batchId,t),await mi(r,i.changes),await pi(r.remoteStore)}catch(i){const o=du(i,"Failed to persist write");t.reject(o)}}function cl(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((o,a)=>{const h=a.view.va(e);h.snapshot&&i.push(h.snapshot)}),function(a,h){const d=K(a);d.onlineState=h;let f=!1;d.queries.forEach((g,I)=>{for(const S of I.Sa)S.va(h)&&(f=!0)}),f&&yg(d)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ig(n,e){const t=K(n),r=e.batch.batchId;try{const i=await qm(t.localStore,e);pu(t,r,null),fu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await mi(t,i)}catch(i){await Ds(i)}}async function bg(n,e,t){const r=K(n);try{const i=await function(a,h){const d=K(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let g;return d.mutationQueue.lookupMutationBatch(f,h).next(I=>(ne(I!==null,37113),g=I.keys(),d.mutationQueue.removeMutationBatch(f,I))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,g,h)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,g)).next(()=>d.localDocuments.getDocuments(f,g))})}(r.localStore,e);pu(r,e,t),fu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await mi(r,i)}catch(i){await Ds(i)}}function fu(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function pu(n,e,t){const r=K(n);let i=r.du[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}async function mi(n,e,t){const r=K(n),i=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((h,d)=>{a.push(r.pu(d,e,t).then(f=>{var g;if((f||t)&&r.isPrimaryClient){const I=f?!f.fromCache:(g=t==null?void 0:t.targetChanges.get(d.targetId))==null?void 0:g.current;r.sharedClientState.updateQueryState(d.targetId,I?"current":"not-current")}if(f){i.push(f);const I=qs.Is(d.targetId,f);o.push(I)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(d,f){const g=K(d);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>A.forEach(f,S=>A.forEach(S.Ts,P=>g.persistence.referenceDelegate.addReference(I,S.targetId,P)).next(()=>A.forEach(S.Es,P=>g.persistence.referenceDelegate.removeReference(I,S.targetId,P)))))}catch(I){if(!er(I))throw I;D($m,"Failed to update sequence numbers: "+I)}for(const I of f){const S=I.targetId;if(!I.fromCache){const P=g.vs.get(S),N=P.snapshotVersion,j=P.withLastLimboFreeSnapshotVersion(N);g.vs=g.vs.insert(S,j)}}}(r.localStore,o))}async function Tg(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){D(_g,"User change. New user:",e.toKey());const r=await ou(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(h=>{h.forEach(d=>{d.reject(new O(k.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mi(t,r.Ns)}}function Eg(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ig.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bg.bind(null,e),e}class Jr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=di(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Gm(this.persistence,new Wm,e.initialUser,this.serializer)}Cu(e){return new su(Gs.Vi,this.serializer)}Du(e){return new Jm}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jr.provider={build:()=>new Jr};class xg extends Jr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ne(this.persistence.referenceDelegate instanceof Qr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Cm(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ee.withCacheSize(this.cacheSizeBytes):Ee.DEFAULT;return new su(r=>Qr.Vi(r,t),this.serializer)}}class bs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tg.bind(null,this.syncEngine),await mg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gg}()}createDatastore(e){const t=di(e.databaseInfo.databaseId),r=tg(e.databaseInfo);return og(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,h){return new lg(r,i,o,a,h)}(this.localStore,this.datastore,e.asyncQueue,t=>cl(this.syncEngine,t,0),function(){return rl.v()?new rl:new Ym}())}createSyncEngine(e,t){return function(i,o,a,h,d,f,g){const I=new vg(i,o,a,h,d,f);return g&&(I.gu=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=K(i);D(nr,"RemoteStore shutting down."),o.Ia.add(5),await rr(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}bs.provider={build:()=>new bs};/**
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
 */const bt="FirestoreClient";class Sg{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=ye.UNAUTHENTICATED,this.clientId=Ps.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{D(bt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D(bt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=du(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function es(n,e){n.asyncQueue.verifyOperationInProgress(),D(bt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ou(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ul(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ag(n);D(bt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>sl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>sl(e.remoteStore,i)),n._onlineComponents=e}async function Ag(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(bt,"Using user provided OfflineComponentProvider");try{await es(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===k.FAILED_PRECONDITION||i.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Wn("Error using user provided cache. Falling back to memory cache: "+t),await es(n,new Jr)}}else D(bt,"Using default OfflineComponentProvider"),await es(n,new xg(void 0));return n._offlineComponents}async function Cg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(bt,"Using user provided OnlineComponentProvider"),await ul(n,n._uninitializedComponentsProvider._online)):(D(bt,"Using default OnlineComponentProvider"),await ul(n,new bs))),n._onlineComponents}function kg(n){return Cg(n).then(e=>e.syncEngine)}function Rg(n,e){const t=new Nt;return n.asyncQueue.enqueueAndForget(async()=>wg(await kg(n),e,t)),t.promise}/**
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
 */function mu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="ComponentProvider",hl=new Map;function Ng(n,e,t,r,i){return new Ep(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,mu(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="firestore.googleapis.com",dl=!0;class fl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gu,this.ssl=dl}else this.host=e.host,this.ssl=e.ssl??dl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=iu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Sm)throw new O(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mu(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new np;switch(r.type){case"firstParty":return new op(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=hl.get(t);r&&(D(Pg,"Removing Datastore"),hl.delete(t),r.terminate())}(this),Promise.resolve()}}function Dg(n,e,t,r={}){var f;n=Sc(n,gi);const i=Xn(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},h=`${e}:${t}`;i&&uc(`https://${h}`),o.host!==gu&&o.host!==h&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:h,ssl:i,emulatorOptions:r};if(!_t(d,a)&&(n._setSettings(d),r.mockUserToken)){let g,I;if(typeof r.mockUserToken=="string")g=r.mockUserToken,I=ye.MOCK_USER;else{g=Cd(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new O(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new ye(S)}n._authCredentials=new rp(new Tc(g,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qs(this.firestore,e,this._query)}}class ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ve(this.firestore,e,this._key)}toJSON(){return{type:ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Zn(t,ve._jsonSchema))return new ve(e,r||null,new L(X.fromString(t.referencePath)))}}ve._jsonSchemaVersion="firestore/documentReference/1.0",ve._jsonSchema={type:ie("string",ve._jsonSchemaVersion),referencePath:ie("string")};class yt extends Qs{constructor(e,t,r){super(e,t,Up(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new L(e))}withConverter(e){return new yt(this.firestore,e,this._path)}}function yu(n,e,...t){if(n=xe(n),Ec("collection","path",e),n instanceof gi){const r=X.fromString(e,...t);return Oa(r),new yt(n,null,r)}{if(!(n instanceof ve||n instanceof yt))throw new O(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return Oa(r),new yt(n.firestore,null,r)}}function jg(n,e,...t){if(n=xe(n),arguments.length===1&&(e=Ps.newId()),Ec("doc","path",e),n instanceof gi){const r=X.fromString(e,...t);return ja(r),new ve(n,null,new L(r))}{if(!(n instanceof ve||n instanceof yt))throw new O(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(e,...t));return ja(r),new ve(n.firestore,n instanceof yt?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="AsyncQueue";class ml{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new au(this,"async_queue_retry"),this._c=()=>{const r=Zi();r&&D(pl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Zi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Zi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Nt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!er(e))throw e;D(pl,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Vt("INTERNAL UNHANDLED ERROR: ",gl(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Ks.createAndSchedule(this,e,t,r,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&U(47125,{Pc:gl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function gl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class _u extends gi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new ml,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ml(e),this._firestoreClient=void 0,await e}}}function Og(n,e){const t=typeof n=="object"?n:Cs(),r=typeof n=="string"?n:Wr,i=Wt(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Sd("firestore");o&&Dg(i,...o)}return i}function Vg(n){if(n._terminated)throw new O(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Fg(n),n._firestoreClient}function Fg(n){var r,i,o,a;const e=n._freezeSettings(),t=Ng(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Sg(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this._byteString=e}static fromBase64String(e){try{return new De(Ge.fromBase64String(e))}catch(t){throw new O(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new De(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:De._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Zn(e,De._jsonSchema))return De.fromBase64String(e.bytes)}}De._jsonSchemaVersion="firestore/bytes/1.0",De._jsonSchema={type:ie("string",De._jsonSchemaVersion),bytes:ie("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ze{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ze._jsonSchemaVersion}}static fromJSON(e){if(Zn(e,Ze._jsonSchema))return new Ze(e.latitude,e.longitude)}}Ze._jsonSchemaVersion="firestore/geoPoint/1.0",Ze._jsonSchema={type:ie("string",Ze._jsonSchemaVersion),latitude:ie("number"),longitude:ie("number")};/**
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
 */class ze{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zn(e,ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ze(e.vectorValues);throw new O(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ze._jsonSchemaVersion="firestore/vectorValue/1.0",ze._jsonSchema={type:ie("string",ze._jsonSchemaVersion),vectorValues:ie("object")};/**
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
 */const Lg=/^__.*__$/;class Mg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ht(e,this.data,this.fieldMask,t,this.fieldTransforms):new tr(e,this.data,t,this.fieldTransforms)}}function wu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{dataSource:n})}}class Ys{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ys({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Yr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(wu(this.dataSource)&&Lg.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class Ug{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||di(e)}I(e,t,r,i=!1){return new Ys({dataSource:e,methodName:t,targetDoc:r,path:de.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bg(n){const e=n._freezeSettings(),t=di(n._databaseId);return new Ug(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zg(n,e,t,r,i,o={}){const a=n.I(o.merge||o.mergeFields?2:0,e,t,i);Eu("Data must be an object, but it was:",a,r);const h=bu(r,a);let d,f;if(o.merge)d=new je(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const g=[];for(const I of o.mergeFields){const S=Zs(e,I,t);if(!a.contains(S))throw new O(k.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Hg(g,S)||g.push(S)}d=new je(g),f=a.fieldTransforms.filter(I=>d.covers(I.field))}else d=null,f=a.fieldTransforms;return new Mg(new Ne(h),d,f)}class Xs extends Js{_toFieldTransform(e){return new em(e.path,new Gn)}isEqual(e){return e instanceof Xs}}function Iu(n,e){if(Tu(n=xe(n)))return Eu("Unsupported field value:",e,n),bu(n,e);if(n instanceof Js)return function(r,i){if(!wu(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const h of r){let d=Iu(h,i.gc(a));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Yp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Y.fromDate(r);return{timestampValue:_s(i.serializer,o)}}if(r instanceof Y){const o=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_s(i.serializer,o)}}if(r instanceof Ze)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof De)return{bytesValue:hm(i.serializer,r._byteString)};if(r instanceof ve){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:tu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ze)return function(a,h){const d=a instanceof ze?a.toArray():a;return{mapValue:{fields:{[Dc]:{stringValue:jc},[fs]:{arrayValue:{values:d.map(g=>{if(typeof g!="number")throw h.yc("VectorValues must only contain numeric values.");return Ws(h.serializer,g)})}}}}}}(r,i);if(ru(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Ns(r)}`)}(n,e)}function bu(n,e){const t={};return Cc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pn(n,(r,i)=>{const o=Iu(i,e.dc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Tu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof Ze||n instanceof De||n instanceof ve||n instanceof Js||n instanceof ze||ru(n))}function Eu(n,e,t){if(!Tu(t)||!xc(t)){const r=Ns(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function Zs(n,e,t){if((e=xe(e))instanceof vu)return e._internalPath;if(typeof e=="string")return $g(n,e);throw Yr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Wg=new RegExp("[~\\*/\\[\\]]");function $g(n,e,t){if(e.search(Wg)>=0)throw Yr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new vu(...e.split("."))._internalPath}catch{throw Yr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Yr(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let d="";return(o||a)&&(d+=" (found",o&&(d+=` in field ${r}`),a&&(d+=` in document ${i}`),d+=")"),new O(k.INVALID_ARGUMENT,h+n+d)}function Hg(n,e){return n.some(t=>t.isEqual(e))}function xu(){return new Xs("serverTimestamp")}const yl="@firebase/firestore",_l="4.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Zs("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Gg extends Su{data(){return super.data()}}function qg(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class en extends Su{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Dr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Zs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=en._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}en._jsonSchemaVersion="firestore/documentSnapshot/1.0",en._jsonSchema={type:ie("string",en._jsonSchemaVersion),bundleSource:ie("string","DocumentSnapshot"),bundleName:ie("string"),bundle:ie("string")};class Dr extends en{data(e={}){return super.data(e)}}class Un{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ar(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Dr(this._firestore,this._userDataWriter,r.key,r,new Ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(h=>{const d=new Dr(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Ar(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const d=new Dr(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Ar(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,g=-1;return h.type!==0&&(f=a.indexOf(h.doc.key),a=a.delete(h.doc.key)),h.type!==1&&(a=a.add(h.doc),g=a.indexOf(h.doc.key)),{type:Kg(h.type),doc:d,oldIndex:f,newIndex:g}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Un._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ps.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Kg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}/**
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
 */Un._jsonSchemaVersion="firestore/querySnapshot/1.0",Un._jsonSchema={type:ie("string",Un._jsonSchemaVersion),bundleSource:ie("string","QuerySnapshot"),bundleName:ie("string"),bundle:ie("string")};function Au(n,e){const t=Sc(n.firestore,_u),r=jg(n),i=qg(n.converter,e),o=Bg(n.firestore);return Qg(t,[zg(o,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Xe.exists(!1))]).then(()=>r)}function Qg(n,e){const t=Vg(n);return Rg(t,e)}(function(e,t=!0){tp(dn),He(new Ve("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),h=new _u(new ip(r.getProvider("auth-internal")),new ap(a,r.getProvider("app-check-internal")),xp(a,i),a);return o={useFetchStreams:t,...o},h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Re(yl,_l,e),Re(yl,_l,"esm2020")})();var Jg="firebase",Yg="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re(Jg,Yg,"app");function Cu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xg=Cu,ku=new zt("auth","Firebase",Cu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new li("@firebase/auth");function Zg(n,...e){Xr.logLevel<=W.WARN&&Xr.warn(`Auth (${dn}): ${n}`,...e)}function jr(n,...e){Xr.logLevel<=W.ERROR&&Xr.error(`Auth (${dn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,...e){throw eo(n,...e)}function We(n,...e){return eo(n,...e)}function Ru(n,e,t){const r={...Xg(),[e]:t};return new zt("auth","Firebase",r).create(e,{appName:n.name})}function jt(n){return Ru(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ku.create(n,...e)}function F(n,e,...t){if(!n)throw eo(e,...t)}function Je(n){const e="INTERNAL ASSERTION FAILED: "+n;throw jr(e),new Error(e)}function nt(n,e){n||Je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function ey(){return vl()==="http:"||vl()==="https:"}function vl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ey()||ac()||"connection"in navigator)?navigator.onLine:!0}function ny(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t){this.shortDelay=e,this.longDelay=t,nt(t>e,"Short delay should be less than long delay!"),this.isMobile=kd()||Nd()}get(){return ty()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ry={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sy=new sr(3e4,6e4);function no(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function mn(n,e,t,r,i={}){return Nu(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const h=Yn({key:n.config.apiKey,...a}).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:d,...o};return Pd()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Xn(n.emulatorConfig.host)&&(f.credentials="include"),Pu.fetch()(await Du(n,n.config.apiHost,t,h),f)})}async function Nu(n,e,t){n._canInitEmulator=!1;const r={...ry,...e};try{const i=new ay(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Cr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const h=o.ok?a.errorMessage:a.error.message,[d,f]=h.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cr(n,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw Cr(n,"email-already-in-use",a);if(d==="USER_DISABLED")throw Cr(n,"user-disabled",a);const g=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ru(n,g,f);tt(n,g)}}catch(i){if(i instanceof Fe)throw i;tt(n,"network-request-failed",{message:String(i)})}}async function oy(n,e,t,r,i={}){const o=await mn(n,e,t,r,i);return"mfaPendingCredential"in o&&tt(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Du(n,e,t,r){const i=`${e}${t}?${r}`,o=n,a=o.config.emulator?to(n.config,i):`${n.config.apiScheme}://${i}`;return iy.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class ay{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),sy.get())})}}function Cr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=We(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(n,e){return mn(n,"POST","/v1/accounts:delete",e)}async function Zr(n,e){return mn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cy(n,e=!1){const t=xe(n),r=await t.getIdToken(e),i=ro(r);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Bn(ts(i.auth_time)),issuedAtTime:Bn(ts(i.iat)),expirationTime:Bn(ts(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ts(n){return Number(n)*1e3}function ro(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return jr("JWT malformed, contained fewer than 3 sections"),null;try{const i=rc(t);return i?JSON.parse(i):(jr("Failed to decode base64 JWT payload"),null)}catch(i){return jr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wl(n){const e=ro(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Fe&&uy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function uy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ei(n){var I;const e=n.auth,t=await n.getIdToken(),r=await Qn(n,Zr(e,{idToken:t}));F(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=(I=i.providerUserInfo)!=null&&I.length?ju(i.providerUserInfo):[],a=fy(n.providerData,o),h=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),f=h?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Es(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function dy(n){const e=xe(n);await ei(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fy(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ju(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(n,e){const t=await Nu(n,{},async()=>{const r=Yn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=await Du(n,i,"/v1/token",`key=${o}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:h,body:r};return n.emulatorConfig&&Xn(n.emulatorConfig.host)&&(d.credentials="include"),Pu.fetch()(a,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function my(n,e){return mn(n,"POST","/v2/accounts:revokeToken",no(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=wl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await py(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new tn;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(F(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tn,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Oe{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new hy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Es(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Qn(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cy(this,e)}reload(){return dy(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Oe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ei(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Be(this.auth.app))return Promise.reject(jt(this.auth));const e=await this.getIdToken();return await Qn(this,ly(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,h=t.tenantId??void 0,d=t._redirectEventId??void 0,f=t.createdAt??void 0,g=t.lastLoginAt??void 0,{uid:I,emailVerified:S,isAnonymous:P,providerData:N,stsTokenManager:j}=t;F(I&&j,e,"internal-error");const C=tn.fromJSON(this.name,j);F(typeof I=="string",e,"internal-error"),ut(r,e.name),ut(i,e.name),F(typeof S=="boolean",e,"internal-error"),F(typeof P=="boolean",e,"internal-error"),ut(o,e.name),ut(a,e.name),ut(h,e.name),ut(d,e.name),ut(f,e.name),ut(g,e.name);const V=new Oe({uid:I,auth:e,email:i,emailVerified:S,displayName:r,isAnonymous:P,photoURL:a,phoneNumber:o,tenantId:h,stsTokenManager:C,createdAt:f,lastLoginAt:g});return N&&Array.isArray(N)&&(V.providerData=N.map(B=>({...B}))),d&&(V._redirectEventId=d),V}static async _fromIdTokenResponse(e,t,r=!1){const i=new tn;i.updateFromServerResponse(t);const o=new Oe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ei(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];F(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?ju(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),h=new tn;h.updateFromIdToken(r);const d=new Oe({uid:i.localId,auth:e,stsTokenManager:h,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Es(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(d,f),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new Map;function Ye(n){nt(n instanceof Function,"Expected a class definition");let e=Il.get(n);return e?(nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Il.set(n,e),e)}/**
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
 */class Ou{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ou.type="NONE";const bl=Ou;/**
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
 */function Or(n,e,t){return`firebase:${n}:${e}:${t}`}class nn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Or(this.userKey,i.apiKey,o),this.fullPersistenceKey=Or("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Zr(this.auth,{idToken:e}).catch(()=>{});return t?Oe._fromGetAccountInfoResponse(this.auth,t,e):null}return Oe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new nn(Ye(bl),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||Ye(bl);const a=Or(r,e.config.apiKey,e.name);let h=null;for(const f of t)try{const g=await f._get(a);if(g){let I;if(typeof g=="string"){const S=await Zr(e,{idToken:g}).catch(()=>{});if(!S)break;I=await Oe._fromGetAccountInfoResponse(e,S,g)}else I=Oe._fromJSON(e,g);f!==o&&(h=I),o=f;break}}catch{}const d=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new nn(o,e,r):(o=d[0],h&&await o._set(a,h.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new nn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bu(e))return"Blackberry";if(zu(e))return"Webos";if(Fu(e))return"Safari";if((e.includes("chrome/")||Lu(e))&&!e.includes("edge/"))return"Chrome";if(Uu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vu(n=we()){return/firefox\//i.test(n)}function Fu(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lu(n=we()){return/crios\//i.test(n)}function Mu(n=we()){return/iemobile/i.test(n)}function Uu(n=we()){return/android/i.test(n)}function Bu(n=we()){return/blackberry/i.test(n)}function zu(n=we()){return/webos/i.test(n)}function io(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gy(n=we()){var e;return io(n)&&!!((e=window.navigator)!=null&&e.standalone)}function yy(){return Dd()&&document.documentMode===10}function Wu(n=we()){return io(n)||Uu(n)||zu(n)||Bu(n)||/windows phone/i.test(n)||Mu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n,e=[]){let t;switch(n){case"Browser":t=Tl(we());break;case"Worker":t=`${Tl(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dn}/${r}`}/**
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
 */class _y{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,h)=>{try{const d=e(o);a(d)}catch(d){h(d)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vy(n,e={}){return mn(n,"GET","/v2/passwordPolicy",no(n,e))}/**
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
 */const wy=6;class Iy{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??wy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new El(this),this.idTokenSubscription=new El(this),this.beforeStateQueue=new _y(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ku,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ye(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await nn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Zr(this,{idToken:e}),r=await Oe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Be(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,h=r==null?void 0:r._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===h)&&(d!=null&&d.user)&&(r=d.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ei(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ny()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Be(this.app))return Promise.reject(jt(this));const t=e?xe(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Be(this.app)?Promise.reject(jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Be(this.app)?Promise.reject(jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vy(this),t=new Iy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await my(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ye(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await nn.create(this,[Ye(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(h,this,"internal-error"),h.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,r,i);return()=>{a=!0,d()}}else{const d=e.addObserver(t);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$u(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Zg(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function so(n){return xe(n)}class El{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ud(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ty(n){oo=n}function Ey(n){return oo.loadJS(n)}function xy(){return oo.gapiScript}function Sy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(n,e){const t=Wt(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(_t(o,e??{}))return i;tt(i,"already-initialized")}return t.initialize({options:e})}function Cy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ye);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ky(n,e,t){const r=so(n);F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Hu(e),{host:a,port:h}=Ry(e),d=h===null?"":`:${h}`,f={url:`${o}//${a}${d}/`},g=Object.freeze({host:a,port:h,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){F(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),F(_t(f,r.config.emulator)&&_t(g,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=g,r.settings.appVerificationDisabledForTesting=!0,Xn(a)?uc(`${o}//${a}${d}`):Py()}function Hu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ry(n){const e=Hu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:xl(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:xl(a)}}}function xl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Py(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,t){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(n,e){return oy(n,"POST","/v1/accounts:signInWithIdp",no(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="http://localhost";class Mt extends Gu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...o}=t;if(!r||!i)return null;const a=new Mt(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return rn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,rn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rn(e,t)}buildRequest(){const e={requestUri:Ny,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class or extends qu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends or{constructor(){super("facebook.com")}static credential(e){return Mt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return dt.credential(t,r)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends or{constructor(){super("github.com")}static credential(e){return Mt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends or{constructor(){super("twitter.com")}static credential(e,t){return Mt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return pt.credential(t,r)}catch{return null}}}pt.TWITTER_SIGN_IN_METHOD="twitter.com";pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Oe._fromIdTokenResponse(e,r,i),a=Sl(r);return new hn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Sl(r);return new hn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Sl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Fe{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ti.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ti(e,t,r,i)}}function Ku(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ti._fromErrorAndOperation(n,o,e,r):o})}async function Dy(n,e,t=!1){const r=await Qn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hn._forOperation(n,"link",r)}/**
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
 */async function jy(n,e,t=!1){const{auth:r}=n;if(Be(r.app))return Promise.reject(jt(r));const i="reauthenticate";try{const o=await Qn(n,Ku(r,i,e,n),t);F(o.idToken,r,"internal-error");const a=ro(o.idToken);F(a,r,"internal-error");const{sub:h}=a;return F(n.uid===h,r,"user-mismatch"),hn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oy(n,e,t=!1){if(Be(n.app))return Promise.reject(jt(n));const r="signIn",i=await Ku(n,r,e),o=await hn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function Vy(n,e,t,r){return xe(n).onIdTokenChanged(e,t,r)}function Fy(n,e,t){return xe(n).beforeAuthStateChanged(e,t)}const ni="__sak";/**
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
 */class Qu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ni,"1"),this.storage.removeItem(ni),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=1e3,My=10;class Ju extends Qu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,h,d)=>{this.notifyListeners(a,d)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);yy()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,My):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ly)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ju.type="LOCAL";const Uy=Ju;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends Qu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yu.type="SESSION";const Xu=Yu;/**
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
 */function By(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class yi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new yi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const h=Array.from(a).map(async f=>f(t.origin,o)),d=await By(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((h,d)=>{const f=ao("",20);i.port1.start();const g=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(I){const S=I;if(S.data.eventId===f)switch(S.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),h(S.data.response);break;default:clearTimeout(g),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Zu(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function $y(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Gy(){return Zu()?self:null}/**
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
 */const eh="firebaseLocalStorageDb",qy=1,ri="firebaseLocalStorage",th="fbase_key";class ar{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _i(n,e){return n.transaction([ri],e?"readwrite":"readonly").objectStore(ri)}function Ky(){const n=indexedDB.deleteDatabase(eh);return new ar(n).toPromise()}function xs(){const n=indexedDB.open(eh,qy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ri,{keyPath:th})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ri)?e(r):(r.close(),await Ky(),e(await xs()))})})}async function Al(n,e,t){const r=_i(n,!0).put({[th]:e,value:t});return new ar(r).toPromise()}async function Qy(n,e){const t=_i(n,!1).get(e),r=await new ar(t).toPromise();return r===void 0?null:r.value}function Cl(n,e){const t=_i(n,!0).delete(e);return new ar(t).toPromise()}const Jy=800,Yy=3;class nh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Yy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yi._getInstance(Gy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await $y(),!this.activeServiceWorker)return;this.sender=new zy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xs();return await Al(e,ni,"1"),await Cl(e,ni),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Al(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Qy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=_i(i,!1).getAll();return new ar(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nh.type="LOCAL";const Xy=nh;new sr(3e4,6e4);/**
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
 */function Zy(n,e){return e?Ye(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class lo extends Gu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function e0(n){return Oy(n.auth,new lo(n),n.bypassAuthState)}function t0(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),jy(t,new lo(n),n.bypassAuthState)}async function n0(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Dy(t,new lo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:h}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(d))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e0;case"linkViaPopup":case"linkViaRedirect":return n0;case"reauthViaPopup":case"reauthViaRedirect":return t0;default:tt(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new sr(2e3,1e4);class Yt extends rh{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=ao();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,r0.get())};e()}}Yt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="pendingRedirect",Vr=new Map;class s0 extends rh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vr.get(this.auth._key());if(!e){try{const r=await o0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vr.set(this.auth._key(),e)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o0(n,e){const t=c0(e),r=l0(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function a0(n,e){Vr.set(n._key(),e)}function l0(n){return Ye(n._redirectPersistence)}function c0(n){return Or(i0,n.config.apiKey,n.name)}async function u0(n,e,t=!1){if(Be(n.app))return Promise.reject(jt(n));const r=so(n),i=Zy(r,e),a=await new s0(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=10*60*1e3;class d0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ih(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(We(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h0&&this.cachedEventUids.clear(),this.cachedEventUids.has(kl(e))}saveEventToCache(e){this.cachedEventUids.add(kl(e)),this.lastProcessedEventTime=Date.now()}}function kl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ih({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ih(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(n,e={}){return mn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g0=/^https?/;async function y0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await p0(n);for(const t of e)try{if(_0(t))return}catch{}tt(n,"unauthorized-domain")}function _0(n){const e=Ts(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!g0.test(t))return!1;if(m0.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const v0=new sr(3e4,6e4);function Rl(){const n=$e().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function w0(n){return new Promise((e,t)=>{var i,o,a;function r(){Rl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rl(),t(We(n,"network-request-failed"))},timeout:v0.get()})}if((o=(i=$e().gapi)==null?void 0:i.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=$e().gapi)!=null&&a.load)r();else{const h=Sy("iframefcb");return $e()[h]=()=>{gapi.load?r():t(We(n,"network-request-failed"))},Ey(`${xy()}?onload=${h}`).catch(d=>t(d))}}).catch(e=>{throw Fr=null,e})}let Fr=null;function I0(n){return Fr=Fr||w0(n),Fr}/**
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
 */const b0=new sr(5e3,15e3),T0="__/auth/iframe",E0="emulator/auth/iframe",x0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A0(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?to(e,E0):`https://${n.config.authDomain}/${T0}`,r={apiKey:e.apiKey,appName:n.name,v:dn},i=S0.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Yn(r).slice(1)}`}async function C0(n){const e=await I0(n),t=$e().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:A0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:x0,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=We(n,"network-request-failed"),h=$e().setTimeout(()=>{o(a)},b0.get());function d(){$e().clearTimeout(h),i(r)}r.ping(d).then(d,()=>{o(a)})}))}/**
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
 */const k0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},R0=500,P0=600,N0="_blank",D0="http://localhost";class Pl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function j0(n,e,t,r=R0,i=P0){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const d={...k0,width:r.toString(),height:i.toString(),top:o,left:a},f=we().toLowerCase();t&&(h=Lu(f)?N0:t),Vu(f)&&(e=e||D0,d.scrollbars="yes");const g=Object.entries(d).reduce((S,[P,N])=>`${S}${P}=${N},`,"");if(gy(f)&&h!=="_self")return O0(e||"",h),new Pl(null);const I=window.open(e||"",h,g);F(I,n,"popup-blocked");try{I.focus()}catch{}return new Pl(I)}function O0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const V0="__/auth/handler",F0="emulator/auth/handler",L0=encodeURIComponent("fac");async function Nl(n,e,t,r,i,o){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:dn,eventId:i};if(e instanceof qu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Md(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,I]of Object.entries({}))a[g]=I}if(e instanceof or){const g=e.getScopes().filter(I=>I!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);const h=a;for(const g of Object.keys(h))h[g]===void 0&&delete h[g];const d=await n._getAppCheckToken(),f=d?`#${L0}=${encodeURIComponent(d)}`:"";return`${M0(n)}?${Yn(h).slice(1)}${f}`}function M0({config:n}){return n.emulator?to(n,F0):`https://${n.authDomain}/${V0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="webStorageSupport";class U0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xu,this._completeRedirectFn=u0,this._overrideRedirectResult=a0}async _openPopup(e,t,r,i){var a;nt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Nl(e,t,r,Ts(),i);return j0(e,o,ao())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Nl(e,t,r,Ts(),i);return Wy(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(nt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await C0(e),r=new d0(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ns,{type:ns},i=>{var a;const o=(a=i==null?void 0:i[0])==null?void 0:a[ns];o!==void 0&&t(!!o),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=y0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wu()||Fu()||io()}}const B0=U0;var Dl="@firebase/auth",jl="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $0(n){He(new Ve("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:h}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$u(n)},f=new by(r,i,o,d);return Cy(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),He(new Ve("auth-internal",e=>{const t=so(e.getProvider("auth").getImmediate());return(r=>new z0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(Dl,jl,W0(n)),Re(Dl,jl,"esm2020")}/**
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
 */const H0=5*60,G0=oc("authIdTokenMaxAge")||H0;let Ol=null;const q0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>G0)return;const i=t==null?void 0:t.token;Ol!==i&&(Ol=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function K0(n=Cs()){const e=Wt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ay(n,{popupRedirectResolver:B0,persistence:[Xy,Uy,Xu]}),r=oc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=q0(o.toString());Fy(t,a,()=>a(t.currentUser)),Vy(t,h=>a(h))}}const i=ic("auth");return i&&ky(t,`http://${i}`),t}function Q0(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Ty({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=We("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Q0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$0("Browser");const sh="@firebase/installations",co="0.6.21";/**
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
 */const oh=1e4,ah=`w:${co}`,lh="FIS_v2",J0="https://firebaseinstallations.googleapis.com/v1",Y0=60*60*1e3,X0="installations",Z0="Installations";/**
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
 */const e_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ut=new zt(X0,Z0,e_);function ch(n){return n instanceof Fe&&n.code.includes("request-failed")}/**
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
 */function uh({projectId:n}){return`${J0}/projects/${n}/installations`}function hh(n){return{token:n.token,requestStatus:2,expiresIn:n_(n.expiresIn),creationTime:Date.now()}}async function dh(n,e){const r=(await e.json()).error;return Ut.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fh({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function t_(n,{refreshToken:e}){const t=fh(n);return t.append("Authorization",r_(e)),t}async function ph(n){const e=await n();return e.status>=500&&e.status<600?n():e}function n_(n){return Number(n.replace("s","000"))}function r_(n){return`${lh} ${n}`}/**
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
 */async function i_({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=uh(n),i=fh(n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:t,authVersion:lh,appId:n.appId,sdkVersion:ah},h={method:"POST",headers:i,body:JSON.stringify(a)},d=await ph(()=>fetch(r,h));if(d.ok){const f=await d.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:hh(f.authToken)}}else throw await dh("Create Installation",d)}/**
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
 */function mh(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function s_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const o_=/^[cdef][\w-]{21}$/,Ss="";function a_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=l_(n);return o_.test(t)?t:Ss}catch{return Ss}}function l_(n){return s_(n).substr(0,22)}/**
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
 */function vi(n){return`${n.appName}!${n.appId}`}/**
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
 */const gh=new Map;function yh(n,e){const t=vi(n);_h(t,e),c_(t,e)}function _h(n,e){const t=gh.get(n);if(t)for(const r of t)r(e)}function c_(n,e){const t=u_();t&&t.postMessage({key:n,fid:e}),h_()}let Pt=null;function u_(){return!Pt&&"BroadcastChannel"in self&&(Pt=new BroadcastChannel("[Firebase] FID Change"),Pt.onmessage=n=>{_h(n.data.key,n.data.fid)}),Pt}function h_(){gh.size===0&&Pt&&(Pt.close(),Pt=null)}/**
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
 */const d_="firebase-installations-database",f_=1,Bt="firebase-installations-store";let rs=null;function uo(){return rs||(rs=fc(d_,f_,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Bt)}}})),rs}async function ii(n,e){const t=vi(n),i=(await uo()).transaction(Bt,"readwrite"),o=i.objectStore(Bt),a=await o.get(t);return await o.put(e,t),await i.done,(!a||a.fid!==e.fid)&&yh(n,e.fid),e}async function vh(n){const e=vi(n),r=(await uo()).transaction(Bt,"readwrite");await r.objectStore(Bt).delete(e),await r.done}async function wi(n,e){const t=vi(n),i=(await uo()).transaction(Bt,"readwrite"),o=i.objectStore(Bt),a=await o.get(t),h=e(a);return h===void 0?await o.delete(t):await o.put(h,t),await i.done,h&&(!a||a.fid!==h.fid)&&yh(n,h.fid),h}/**
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
 */async function ho(n){let e;const t=await wi(n.appConfig,r=>{const i=p_(r),o=m_(n,i);return e=o.registrationPromise,o.installationEntry});return t.fid===Ss?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function p_(n){const e=n||{fid:a_(),registrationStatus:0};return wh(e)}function m_(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ut.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=g_(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:y_(n)}:{installationEntry:e}}async function g_(n,e){try{const t=await i_(n,e);return ii(n.appConfig,t)}catch(t){throw ch(t)&&t.customData.serverCode===409?await vh(n.appConfig):await ii(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function y_(n){let e=await Vl(n.appConfig);for(;e.registrationStatus===1;)await mh(100),e=await Vl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await ho(n);return r||t}return e}function Vl(n){return wi(n,e=>{if(!e)throw Ut.create("installation-not-found");return wh(e)})}function wh(n){return __(n)?{fid:n.fid,registrationStatus:0}:n}function __(n){return n.registrationStatus===1&&n.registrationTime+oh<Date.now()}/**
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
 */async function v_({appConfig:n,heartbeatServiceProvider:e},t){const r=w_(n,t),i=t_(n,t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:ah,appId:n.appId}},h={method:"POST",headers:i,body:JSON.stringify(a)},d=await ph(()=>fetch(r,h));if(d.ok){const f=await d.json();return hh(f)}else throw await dh("Generate Auth Token",d)}function w_(n,{fid:e}){return`${uh(n)}/${e}/authTokens:generate`}/**
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
 */async function fo(n,e=!1){let t;const r=await wi(n.appConfig,o=>{if(!Ih(o))throw Ut.create("not-registered");const a=o.authToken;if(!e&&T_(a))return o;if(a.requestStatus===1)return t=I_(n,e),o;{if(!navigator.onLine)throw Ut.create("app-offline");const h=x_(o);return t=b_(n,h),h}});return t?await t:r.authToken}async function I_(n,e){let t=await Fl(n.appConfig);for(;t.authToken.requestStatus===1;)await mh(100),t=await Fl(n.appConfig);const r=t.authToken;return r.requestStatus===0?fo(n,e):r}function Fl(n){return wi(n,e=>{if(!Ih(e))throw Ut.create("not-registered");const t=e.authToken;return S_(t)?{...e,authToken:{requestStatus:0}}:e})}async function b_(n,e){try{const t=await v_(n,e),r={...e,authToken:t};return await ii(n.appConfig,r),t}catch(t){if(ch(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await vh(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await ii(n.appConfig,r)}throw t}}function Ih(n){return n!==void 0&&n.registrationStatus===2}function T_(n){return n.requestStatus===2&&!E_(n)}function E_(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Y0}function x_(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function S_(n){return n.requestStatus===1&&n.requestTime+oh<Date.now()}/**
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
 */async function A_(n){const e=n,{installationEntry:t,registrationPromise:r}=await ho(e);return r?r.catch(console.error):fo(e).catch(console.error),t.fid}/**
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
 */async function C_(n,e=!1){const t=n;return await k_(t),(await fo(t,e)).token}async function k_(n){const{registrationPromise:e}=await ho(n);e&&await e}/**
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
 */function R_(n){if(!n||!n.options)throw is("App Configuration");if(!n.name)throw is("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw is(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function is(n){return Ut.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="installations",P_="installations-internal",N_=n=>{const e=n.getProvider("app").getImmediate(),t=R_(e),r=Wt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},D_=n=>{const e=n.getProvider("app").getImmediate(),t=Wt(e,bh).getImmediate();return{getId:()=>A_(t),getToken:i=>C_(t,i)}};function j_(){He(new Ve(bh,N_,"PUBLIC")),He(new Ve(P_,D_,"PRIVATE"))}j_();Re(sh,co);Re(sh,co,"esm2020");/**
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
 */const si="analytics",O_="firebase_id",V_="origin",F_=60*1e3,L_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",po="https://www.googletagmanager.com/gtag/js";/**
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
 */const Te=new li("@firebase/analytics");/**
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
 */const M_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ke=new zt("analytics","Analytics",M_);/**
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
 */function U_(n){if(!n.startsWith(po)){const e=ke.create("invalid-gtag-resource",{gtagURL:n});return Te.warn(e.message),""}return n}function Th(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function B_(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function z_(n,e){const t=B_("firebase-js-sdk-policy",{createScriptURL:U_}),r=document.createElement("script"),i=`${po}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function W_(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function $_(n,e,t,r,i,o){const a=r[i];try{if(a)await e[a];else{const d=(await Th(t)).find(f=>f.measurementId===i);d&&await e[d.appId]}}catch(h){Te.error(h)}n("config",i,o)}async function H_(n,e,t,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const h=await Th(t);for(const d of a){const f=h.find(I=>I.measurementId===d),g=f&&e[f.appId];if(g)o.push(g);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",r,i||{})}catch(o){Te.error(o)}}function G_(n,e,t,r){async function i(o,...a){try{if(o==="event"){const[h,d]=a;await H_(n,e,t,h,d)}else if(o==="config"){const[h,d]=a;await $_(n,e,t,r,h,d)}else if(o==="consent"){const[h,d]=a;n("consent",h,d)}else if(o==="get"){const[h,d,f]=a;n("get",h,d,f)}else if(o==="set"){const[h]=a;n("set",h)}else n(o,...a)}catch(h){Te.error(h)}}return i}function q_(n,e,t,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=G_(o,n,e,t),{gtagCore:o,wrappedGtag:window[i]}}function K_(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(po)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=30,J_=1e3;class Y_{constructor(e={},t=J_){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Eh=new Y_;function X_(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Z_(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:X_(t)},i=L_.replace("{app-id}",e),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let h="";try{const d=await o.json();(a=d.error)!=null&&a.message&&(h=d.error.message)}catch{}throw ke.create("config-fetch-failed",{httpStatus:o.status,responseMessage:h})}return o.json()}async function e1(n,e=Eh,t){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw ke.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw ke.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new r1;return setTimeout(async()=>{h.abort()},F_),xh({appId:r,apiKey:i,measurementId:o},a,h,e)}async function xh(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Eh){var h;const{appId:o,measurementId:a}=n;try{await t1(r,e)}catch(d){if(a)return Te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:a};throw d}try{const d=await Z_(n);return i.deleteThrottleMetadata(o),d}catch(d){const f=d;if(!n1(f)){if(i.deleteThrottleMetadata(o),a)return Te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:o,measurementId:a};throw d}const g=Number((h=f==null?void 0:f.customData)==null?void 0:h.httpStatus)===503?ba(t,i.intervalMillis,Q_):ba(t,i.intervalMillis),I={throttleEndTimeMillis:Date.now()+g,backoffCount:t+1};return i.setThrottleMetadata(o,I),Te.debug(`Calling attemptFetch again in ${g} millis`),xh(n,I,r,i)}}function t1(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(o),r(ke.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function n1(n){if(!(n instanceof Fe)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class r1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function i1(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const o=await e,a={...r,send_to:o};n("event",t,a)}}async function s1(n,e,t,r){if(r&&r.global){const i={};for(const o of Object.keys(t))i[`user_properties.${o}`]=t[o];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(){if(lc())try{await cc()}catch(n){return Te.warn(ke.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Te.warn(ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function a1(n,e,t,r,i,o,a){const h=e1(n);h.then(S=>{t[S.measurementId]=S.appId,n.options.measurementId&&S.measurementId!==n.options.measurementId&&Te.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>Te.error(S)),e.push(h);const d=o1().then(S=>{if(S)return r.getId()}),[f,g]=await Promise.all([h,d]);K_(o)||z_(o,f.measurementId),i("js",new Date);const I=(a==null?void 0:a.config)??{};return I[V_]="firebase",I.update=!0,g!=null&&(I[O_]=g),i("config",f.measurementId,I),f.measurementId}/**
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
 */class l1{constructor(e){this.app=e}_delete(){return delete sn[this.app.options.appId],Promise.resolve()}}let sn={},Ll=[];const Ml={};let ss="dataLayer",c1="gtag",Ul,mo,Bl=!1;function u1(){const n=[];if(ac()&&n.push("This is a browser extension environment."),Od()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=ke.create("invalid-analytics-context",{errorInfo:e});Te.warn(t.message)}}function h1(n,e,t){u1();const r=n.options.appId;if(!r)throw ke.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ke.create("no-api-key");if(sn[r]!=null)throw ke.create("already-exists",{id:r});if(!Bl){W_(ss);const{wrappedGtag:o,gtagCore:a}=q_(sn,Ll,Ml,ss,c1);mo=o,Ul=a,Bl=!0}return sn[r]=a1(n,Ll,Ml,e,Ul,ss,t),new l1(n)}function d1(n=Cs()){n=xe(n);const e=Wt(n,si);return e.isInitialized()?e.getImmediate():f1(n)}function f1(n,e={}){const t=Wt(n,si);if(t.isInitialized()){const i=t.getImmediate();if(_t(e,t.getOptions()))return i;throw ke.create("already-initialized")}return t.initialize({options:e})}function p1(n,e,t){n=xe(n),s1(mo,sn[n.app.options.appId],e,t).catch(r=>Te.error(r))}function m1(n,e,t,r){n=xe(n),i1(mo,sn[n.app.options.appId],e,t,r).catch(i=>Te.error(i))}const zl="@firebase/analytics",Wl="0.10.21";function g1(){He(new Ve(si,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return h1(r,i,t)},"PUBLIC")),He(new Ve("analytics-internal",n,"PRIVATE")),Re(zl,Wl),Re(zl,Wl,"esm2020");function n(e){try{const t=e.getProvider(si).getImmediate();return{logEvent:(r,i,o)=>m1(t,r,i,o),setUserProperties:(r,i)=>p1(t,r,i)}}catch(t){throw ke.create("interop-component-reg-failed",{reason:t})}}}g1();const $l={apiKey:"AIzaSyCoFJWEc8z1Z-kddKR8T-QggAFCdm4Y7wI",authDomain:"daywise-ays8t.firebaseapp.com",projectId:"daywise-ays8t",storageBucket:"daywise-ays8t.firebasestorage.app",messagingSenderId:"690549644365",appId:"1:690549644365:web:d895858fbde5497b1c5004",measurementId:void 0};let jn,Hl,Jn,y1;try{$l.apiKey||console.warn("Firebase Hub: Missing VITE_FIREBASE_API_KEY. Initializing in offline simulation mode."),jn=pc($l),Hl=K0(jn),Jn=Og(jn),typeof window<"u"&&(y1=d1(jn))}catch{console.error("Firebase Hub: Critical Initialization Error. Forcing local fallback."),jn={},Hl={},Jn={}}const _1=({isOpen:n,onClose:e,initialPhone:t="",initialBusinessName:r=""})=>{const[i,o]=z.useState(1),[a,h]=z.useState(r),[d,f]=z.useState("Custom Web & SaaS Application"),[g,I]=z.useState("#00F0FF"),[S,P]=z.useState(t),[N,j]=z.useState("Professional WaaS (GH₵ 999/mo)"),[C,V]=z.useState("High-speed platform with MoMo checkout and automated WhatsApp lead engine"),[B,Z]=z.useState(0),[Ae,ee]=z.useState("Analyzing architectural requirements..."),[ce,w]=z.useState(!1),m=[{name:"Cyan Glow",hex:"#00F0FF"},{name:"Luxe Gold",hex:"#E5C07B"},{name:"Emerald Green",hex:"#10B981"},{name:"Royal Blue",hex:"#3B82F6"},{name:"Velvet Rose",hex:"#F43F5E"}];if(z.useEffect(()=>{if(i===3&&!ce){Z(0),w(!1);const G=setInterval(()=>{Z(Tt=>{if(Tt>=100)return clearInterval(G),w(!0),100;const Qe=Tt+5;return Qe<30?ee("Synthesizing technical scope & deliverable roadmap..."):Qe<65?ee(`Mapping ${N.split("(")[0].trim()} SLA stack...`):Qe<90?ee("Connecting direct WhatsApp consultation gateway..."):ee("Proposal Blueprint Generated Successfully"),Qe})},100);return()=>clearInterval(G)}},[i,ce,N]),!n)return null;const _=G=>{if(G.preventDefault(),!a.trim()){alert("Please enter your business or project name.");return}o(2)},b=async()=>{try{Jn&&(await Au(yu(Jn,"onboarding_submissions"),{businessName:a.trim(),serviceArea:d,primaryColor:g,whatsappNumber:S.trim(),selectedPlan:N,projectRequirement:C.trim(),status:"pending_consultation",createdAt:xu(),url:typeof window<"u"?window.location.href:"",userAgent:typeof navigator<"u"?navigator.userAgent:""}),console.log("✅ Lead project brief successfully saved to Firestore."))}catch(G){console.warn("Firestore submission notice (demo mode):",G)}},v=G=>{if(G.preventDefault(),!S.trim()){alert("Please enter your WhatsApp contact number.");return}b(),o(3)},E=encodeURIComponent(a.trim()),y=encodeURIComponent(d.trim()),pe=encodeURIComponent(N.trim()),Ke=encodeURIComponent(C.trim()),Ii=`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20start%20a%20project%20for%20"${E}".%0A%0A•%20Service%3A%20${y}%0A•%20Preferred%20Tier%3A%20${pe}%0A•%20Requirement%3A%20${Ke}%0A•%20My%20Phone%3A%20${encodeURIComponent(S.trim())}`;return l.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(9, 11, 16, 0.88)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",boxSizing:"border-box"},children:l.jsxs("div",{style:{background:"rgba(13, 18, 29, 0.95)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"24px",maxWidth:"640px",width:"100%",maxHeight:"90vh",overflowY:"auto",padding:"clamp(1.6rem, 4vw, 2.5rem) clamp(1.2rem, 3vw, 2rem)",position:"relative",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.08)",boxSizing:"border-box"},children:[l.jsx("button",{onClick:e,"aria-label":"Close dialog",style:{position:"absolute",top:"1.2rem",right:"1.2rem",background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"#FFFFFF",fontSize:"1rem",width:"34px",height:"34px",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease",zIndex:10},children:"✕"}),l.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem",paddingRight:"2rem",paddingLeft:"2rem"},children:[l.jsxs("span",{style:{background:"rgba(0, 240, 255, 0.08)",border:"1px solid rgba(0, 240, 255, 0.25)",color:"#00F0FF",padding:"0.35rem 1rem",borderRadius:"50px",fontSize:"0.72rem",fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase",display:"inline-block",lineHeight:1.4},children:["PROJECT BRIEF • STEP ",i," OF 3"]}),l.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"center",marginTop:"1.2rem"},children:[l.jsx("div",{style:{height:"5px",width:"30%",borderRadius:"4px",background:i>=1?"#00F0FF":"rgba(255, 255, 255, 0.1)",transition:"all 0.3s ease"}}),l.jsx("div",{style:{height:"5px",width:"30%",borderRadius:"4px",background:i>=2?"#00F0FF":"rgba(255, 255, 255, 0.1)",transition:"all 0.3s ease"}}),l.jsx("div",{style:{height:"5px",width:"30%",borderRadius:"4px",background:i>=3?"#00F0FF":"rgba(255, 255, 255, 0.1)",transition:"all 0.3s ease"}})]})]}),i===1&&l.jsxs("form",{onSubmit:_,children:[l.jsxs("h2",{className:"heading-luminance",style:{fontSize:"1.6rem",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em",textAlign:"center"},children:["Tell Us About Your ",l.jsx("span",{className:"cyan-luminance",children:"Project"})]}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",marginBottom:"1.8rem",textAlign:"center"},children:"Fast-track your development roadmap with high-performance Ghanaian engineering."}),l.jsxs("div",{style:{marginBottom:"1.4rem"},children:[l.jsxs("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:["Business or Organization Name ",l.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),l.jsx("input",{type:"text",placeholder:"e.g. Sedemson Group, Ama's Luxury, Apex Logistics...",value:a,onChange:G=>h(G.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"},required:!0})]}),l.jsxs("div",{style:{marginBottom:"1.4rem"},children:[l.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:"Primary Specialization Needed"}),l.jsxs("select",{value:d,onChange:G=>f(G.target.value),style:{width:"100%",background:"#10151C",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"},children:[l.jsx("option",{value:"Custom Web & SaaS Application",children:"Custom Web & SaaS Application"}),l.jsx("option",{value:"iOS & Android Mobile App Development",children:"iOS & Android Mobile App Development"}),l.jsx("option",{value:"Brand Identity & UI/UX Design System",children:"Brand Identity & UI/UX Design System"}),l.jsx("option",{value:"Cloud Infrastructure & DevOps Automation",children:"Cloud Infrastructure & DevOps Automation"})]})]}),l.jsxs("div",{style:{marginBottom:"2rem"},children:[l.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.8rem"},children:"Brand Accent Palette"}),l.jsx("div",{style:{display:"flex",gap:"0.8rem",flexWrap:"wrap"},children:m.map(G=>l.jsx("button",{type:"button",onClick:()=>I(G.hex),style:{background:G.hex,border:g===G.hex?"3px solid #ffffff":"1px solid transparent",width:"40px",height:"40px",borderRadius:"50%",cursor:"pointer",boxShadow:g===G.hex?`0 0 15px ${G.hex}`:"none",transition:"transform 0.2s"},title:G.name},G.hex))})]}),l.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"0.85rem",fontSize:"0.95rem"},children:[l.jsx("span",{children:"Continue to Project Scope"}),l.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),i===2&&l.jsxs("form",{onSubmit:v,children:[l.jsxs("h2",{className:"heading-luminance",style:{fontSize:"1.6rem",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em",textAlign:"center"},children:["Project Scope & ",l.jsx("span",{className:"cyan-luminance",children:"Routing"})]}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",marginBottom:"1.8rem",textAlign:"center"},children:"Define your preferred service tier and primary feature requirements."}),l.jsxs("div",{style:{marginBottom:"1.4rem"},children:[l.jsxs("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:["WhatsApp Direct Contact Number ",l.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),l.jsx("input",{type:"text",placeholder:"e.g. 024 123 4567 or 055 000 1122",value:S,onChange:G=>P(G.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"},required:!0})]}),l.jsxs("div",{style:{marginBottom:"1.4rem"},children:[l.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:"Preferred Subscription / Service Tier"}),l.jsxs("select",{value:N,onChange:G=>j(G.target.value),style:{width:"100%",background:"#10151C",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"},children:[l.jsx("option",{value:"Lite Tier (GH₵ 49/mo)",children:"Lite Tier (GH₵ 49/mo - Micro Catalog & Lead Link)"}),l.jsx("option",{value:"Starter Tier (GH₵ 499/mo)",children:"Starter Tier (GH₵ 499/mo - High-Converting WaaS)"}),l.jsx("option",{value:"Professional Tier (GH₵ 999/mo)",children:"Professional Tier (GH₵ 999/mo - Corporate Multi-Page)"}),l.jsx("option",{value:"Enterprise Custom (GH₵ 2,499/mo)",children:"Enterprise Custom (GH₵ 2,499/mo - Custom SaaS & APIs)"})]})]}),l.jsxs("div",{style:{marginBottom:"2rem"},children:[l.jsx("label",{style:{display:"block",color:"var(--text-main)",fontSize:"0.88rem",fontWeight:700,marginBottom:"0.5rem"},children:"Key Technical Objective / Deliverable"}),l.jsx("input",{type:"text",value:C,onChange:G=>V(G.target.value),style:{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--text-main)",padding:"0.85rem 1.2rem",borderRadius:"10px",fontSize:"0.95rem",outline:"none",boxSizing:"border-box"}})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[l.jsx("button",{type:"button",onClick:()=>o(1),className:"btn-secondary",style:{padding:"0.85rem 1.4rem",fontSize:"0.92rem"},children:l.jsx("span",{children:"← Back"})}),l.jsxs("button",{type:"submit",className:"btn-primary",style:{flexGrow:1,padding:"0.85rem 1.6rem",fontSize:"0.95rem"},children:[l.jsx("span",{children:"Generate Fast-Track Proposal"}),l.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]}),i===3&&l.jsx("div",{children:ce?l.jsxs("div",{children:[l.jsxs("div",{style:{textAlign:"center",marginBottom:"1.5rem"},children:[l.jsx("span",{style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid #10B981",color:"#10B981",padding:"0.35rem 1.2rem",borderRadius:"20px",fontWeight:750,fontSize:"0.75rem",letterSpacing:"0.05em"},children:"PROPOSAL BLUEPRINT READY"}),l.jsx("h2",{className:"heading-luminance",style:{fontSize:"1.6rem",fontWeight:850,marginTop:"0.8rem"},children:a}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem"},children:"48-Hour SLA managed launch architecture prepared for your review."})]}),l.jsxs("div",{style:{border:`1px solid ${g}55`,borderRadius:"16px",background:"rgba(255, 255, 255, 0.03)",padding:"1.4rem",maxWidth:"480px",margin:"0 auto 1.8rem",boxShadow:`0 10px 30px ${g}22`,textAlign:"left"},children:[l.jsxs("div",{style:{borderBottom:"1px solid rgba(255,255,255,0.08)",paddingBottom:"0.8rem",marginBottom:"0.8rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:"1.05rem",fontWeight:850,color:"#FFFFFF"},children:a}),l.jsx("span",{style:{fontSize:"0.76rem",color:g,fontWeight:700},children:d})]}),l.jsx("span",{style:{background:"rgba(255,255,255,0.08)",padding:"0.2rem 0.6rem",borderRadius:"8px",fontSize:"0.75rem",color:"#E5C07B",fontWeight:750},children:N.split("(")[0].trim()})]}),l.jsxs("div",{style:{fontSize:"0.85rem",color:"#94A3B8",lineHeight:1.6},children:[l.jsxs("div",{style:{marginBottom:"0.4rem"},children:[l.jsx("strong",{style:{color:"#FFFFFF"},children:"Primary Deliverable:"})," ",C]}),l.jsxs("div",{children:[l.jsx("strong",{style:{color:"#FFFFFF"},children:"Contact WhatsApp:"})," ",S]})]})]}),l.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[l.jsxs("a",{href:Ii,target:"_blank",rel:"noopener noreferrer",className:"btn-primary",style:{textDecoration:"none",padding:"0.85rem 1.8rem",fontSize:"0.92rem"},children:[l.jsx("span",{children:"Submit & Open WhatsApp Brief"}),l.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),l.jsx("button",{onClick:()=>o(1),className:"btn-secondary",style:{padding:"0.85rem 1.4rem",fontSize:"0.92rem"},children:"Modify Details"})]})]}):l.jsxs("div",{style:{textAlign:"center",padding:"2rem 1rem"},children:[l.jsx("div",{style:{width:"44px",height:"44px",margin:"0 auto 1.5rem",borderRadius:"50%",border:"3px solid rgba(0,240,255,0.2)",borderTopColor:"#00F0FF",animation:"spin 1s linear infinite"}}),l.jsxs("h2",{className:"heading-luminance",style:{fontSize:"1.6rem",fontWeight:850,marginBottom:"0.6rem"},children:["Synthesizing Blueprint for ",l.jsx("span",{className:"cyan-luminance",children:a})]}),l.jsx("p",{style:{color:"#00F0FF",fontSize:"0.95rem",fontWeight:700,marginBottom:"1.5rem"},children:Ae}),l.jsx("div",{style:{background:"rgba(255,255,255,0.08)",height:"8px",borderRadius:"10px",overflow:"hidden",maxWidth:"420px",margin:"0 auto 1rem"},children:l.jsx("div",{style:{width:`${B}%`,height:"100%",background:"linear-gradient(90deg, #00F0FF, #E5C07B)",transition:"width 0.2s ease"}})}),l.jsxs("span",{style:{color:"var(--text-muted)",fontSize:"0.82rem"},children:[B,"% Prepared"]})]})})]})})},v1=[{id:"sedemson",title:"Sedemson Stone",category:"b2b",categoryLabel:"B2B & Architectural Finishing",tagline:"Premium Natural Stone Cladding & Architectural Finishes across Ghana.",image:"/sedemson_stone_hero.webp",tags:["WaaS Architecture","Catalog Engine","Direct WhatsApp RFQs"],metric:"+340% Inbound WhatsApp RFQs",status:"Live Production",link:"/sedemson-stone/index.html"},{id:"emewear",title:"Emewear Luxury",category:"ecommerce",categoryLabel:"Fashion & E-Commerce",tagline:"Ghana-Made Luxury Ankara, Plus-Size Heritage Fashion & Global Delivery.",image:"/emewear/emewear_hero.webp",tags:["Fashion WaaS","MoMo Automated Checkout","Automated Dispatch"],metric:"Zero-Friction MoMo Checkout",status:"Live Production",link:"/emewear/index.html"},{id:"ansah-delali",title:"Ansah Delali Foundation",category:"nonprofit",categoryLabel:"Non-Profit & Social Impact",tagline:"Empowering Ghanaian tertiary students and underserved youth through mentorship, education & digital skills.",image:"/ansah-delali/cohort-group.webp",tags:["Education WaaS","SkillUp 1.0 Outreach","Student Mentorship Network"],metric:"SkillUp 1.0 Community Impact",status:"Live Production",link:"/ansah-delali/index.html"},{id:"susans-pastries",title:"Susan's Pastries",category:"ecommerce",categoryLabel:"Food & Beverage",tagline:"Artisanal Ghanaian pastries, custom celebration cakes & fresh fruit juices — order via WhatsApp.",image:"/susans-pastries/hero-banner.webp",tags:["Food WaaS","WhatsApp Ordering","Menu Showcase"],metric:"Direct WhatsApp Orders",status:"Live Production",link:"/susans-pastries/index.html"}],w1={sedemson:"/sedemson_stone_hero.webp",emewear:"/emewear/emewear_hero.webp","ansah-delali":"/ansah-delali/cohort-group.webp","susans-pastries":"/susans-pastries/hero-banner.webp"},I1=(n,e="")=>n&&n.startsWith("/")?n:`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20learn%20more%20about%20the%20${encodeURIComponent(e)}%20case%20study.`,Gl=()=>{const[n,e]=z.useState("all"),[t,r]=z.useState(""),i=Yl.useMemo(()=>{const o=t.replace(/[^\w\s-]/gi,"").toLowerCase().trim();return v1.filter(a=>{const h=n==="all"||a.category===n,d=!o||a.title.toLowerCase().includes(o)||a.tagline.toLowerCase().includes(o)||a.categoryLabel.toLowerCase().includes(o)||a.tags.some(f=>f.toLowerCase().includes(o));return h&&d})},[t,n]);return l.jsxs("section",{className:"portfolio-section",id:"work",style:{padding:"3.5rem 1rem",maxWidth:"1200px",margin:"0 auto"},children:[l.jsxs("div",{className:"portfolio-header fade-in-up",style:{textAlign:"center",marginBottom:"3rem"},children:[l.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.8rem, 5vw, 2.5rem)",fontWeight:850,letterSpacing:"-0.03em"},children:["Featured ",l.jsx("span",{className:"cyan-luminance",children:"Client Work"})]}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",marginTop:"0.6rem",letterSpacing:"-0.01em",maxWidth:"640px",margin:"0.6rem auto 0",lineHeight:1.6},children:"Real-world platforms and Website-as-a-Service solutions engineered for revenue growth and operational excellence."}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.8rem",flexWrap:"wrap",marginTop:"2.2rem"},children:[l.jsx("button",{onClick:()=>e("all"),className:n==="all"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"All Case Studies"}),l.jsx("button",{onClick:()=>e("b2b"),className:n==="b2b"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"B2B & Architectural"}),l.jsx("button",{onClick:()=>e("ecommerce"),className:n==="ecommerce"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"Fashion & Retail"}),l.jsx("button",{onClick:()=>e("nonprofit"),className:n==="nonprofit"?"btn-primary":"btn-secondary",style:{padding:"0.45rem 1.15rem",borderRadius:"50px",fontSize:"0.84rem"},children:"Social Impact / NGO"}),l.jsxs("div",{style:{position:"relative",width:"min(100%, 240px)"},children:[l.jsx("input",{type:"text",placeholder:"Search case studies...",value:t,onChange:o=>r(o.target.value),style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.12)",color:"#FFFFFF",padding:"0.48rem 1.1rem 0.48rem 2.2rem",borderRadius:"30px",fontSize:"0.85rem",outline:"none",width:"100%",transition:"border-color 0.2s ease"}}),l.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#94A3B8",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{position:"absolute",left:"0.8rem",top:"50%",transform:"translateY(-50%)"},children:[l.jsx("circle",{cx:"11",cy:"11",r:"8"}),l.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})]})]})]}),l.jsx("div",{className:"portfolio-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 340px), 1fr))",gap:"2rem",width:"100%"},children:i.map((o,a)=>l.jsxs("div",{className:`portfolio-card neon-border fade-in-up stagger-${a%4+1}`,style:{borderRadius:"20px",overflow:"hidden",background:"rgba(13, 18, 29, 0.94)",border:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)"},children:[l.jsxs("div",{children:[l.jsx("div",{className:"card-image-placeholder",style:{padding:0,height:"220px",overflow:"hidden",position:"relative"},children:l.jsx("img",{src:w1[o.id]||"",alt:o.title,loading:"lazy",decoding:"async",width:"380",height:"220",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",transition:"transform 0.5s ease"}})}),l.jsxs("div",{className:"card-content",style:{padding:"1.6rem"},children:[l.jsx("div",{style:{fontSize:"0.74rem",fontWeight:750,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--cyan-glow)",marginBottom:"0.35rem"},children:o.categoryLabel}),l.jsx("h3",{style:{fontSize:"1.35rem",color:"#FFFFFF",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em"},children:o.title}),l.jsx("p",{className:"tagline",style:{color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"1.2rem",lineHeight:1.5,letterSpacing:"-0.01em"},children:o.tagline}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"rgba(0, 240, 255, 0.06)",border:"1px solid rgba(0, 240, 255, 0.15)",padding:"0.5rem 0.85rem",borderRadius:"10px",marginBottom:"1.3rem"},children:[l.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#00F0FF",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),l.jsx("polyline",{points:"17 6 23 6 23 12"})]}),l.jsx("span",{style:{fontSize:"0.82rem",fontWeight:750,color:"#38BDF8"},children:o.metric})]}),l.jsx("div",{className:"tags",style:{display:"flex",gap:"0.45rem",marginBottom:"1.4rem",flexWrap:"wrap"},children:o.tags.map((h,d)=>l.jsx("span",{className:"tag",style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid rgba(255, 255, 255, 0.08)",color:"#CBD5E1",padding:"0.25rem 0.6rem",borderRadius:"6px",fontSize:"0.76rem",fontWeight:600},children:h},d))})]})]}),l.jsxs("div",{style:{padding:"0 1.6rem 1.6rem",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid rgba(255, 255, 255, 0.05)",paddingTop:"1rem"},children:[l.jsxs("span",{className:"view-link",style:{color:"var(--text-muted)",cursor:"default",display:"inline-flex",alignItems:"center",gap:"0.4rem",fontWeight:700,fontSize:"0.82rem"},children:[l.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#4ADE80"}}),o.status]}),l.jsxs("a",{href:I1(o.link,o.title),target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.35rem",color:"#F8FAFC",fontSize:"0.82rem",fontWeight:700,textDecoration:"none",background:"rgba(255, 255, 255, 0.05)",padding:"0.35rem 0.75rem",borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.1)",transition:"all 0.2s ease"},children:[l.jsx("span",{children:"Explore"}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]},o.id))})]})},Sh=z.createContext(void 0),b1=({children:n})=>{const[e,t]=z.useState(()=>localStorage.getItem("kdigital-currency")||"GHS"),[r,i]=z.useState(.07),[o,a]=z.useState(!0),h=f=>{t(f),localStorage.setItem("kdigital-currency",f)};z.useEffect(()=>{(async()=>{try{a(!0);const I=await(await fetch("https://open.er-api.com/v6/latest/GHS")).json();I.rates&&I.rates.USD&&i(I.rates.USD)}catch(g){console.error("Failed to fetch exchange rate:",g)}finally{a(!1)}})()},[]);const d=f=>e==="GHS"?`GHS ${f.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}`:`$${(f*r).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}`;return l.jsx(Sh.Provider,{value:{currency:e,setCurrency:h,exchangeRate:r,formatPrice:d,isLoading:o},children:n})},T1=()=>{const n=z.useContext(Sh);if(n===void 0)throw new Error("useCurrency must be used within a CurrencyProvider");return n},ql=()=>{const{currency:n,setCurrency:e,formatPrice:t}=T1(),[r,i]=z.useState(2),o=[{id:"lite",name:"Lite Tier",badge:"SME STARTER",priceGhs:49,desc:"Ideal for local merchants, Susu collectives, and boutique artisans.",features:["Curated Digital Product Catalog","Direct Mobile Money Payment Routing","Instant WhatsApp Lead Notifications","Cloudflare SSL & Managed Fast DNS"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20SME%20Lite%20Plan."},{id:"starter",name:"Starter Tier",badge:"GROWTH",priceGhs:499,desc:"Perfect for small businesses needing a high-converting digital storefront.",features:["Custom Single Page Web Architecture","Automated WhatsApp Inquiry Routing","Ultra-Fast Mobile Optimization","Managed Weekly Backups & Security"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Starter%20Plan."},{id:"professional",name:"Professional Tier",badge:"MOST POPULAR",priceGhs:999,desc:"For growing brands needing a complete multi-page corporate ecosystem.",popular:!0,features:["Up to 5 Tailored Application Pages","Full Technical SEO & Schema Microdata","Automated Lead Intake CRM Integration","24/7 Priority Engineering SLA"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20the%20Professional%20Plan."},{id:"enterprise",name:"Enterprise Tier",badge:"CUSTOM APPLICATION",priceGhs:2499,desc:"Advanced web applications, custom databases, and API engineering.",features:["Full Custom Architecture & Tech Stack","Backend & Payment Gateway Integration","Advanced Analytics & Real-Time Dashboard","Dedicated Senior Engineer Account Lead"],whatsappMsg:"Hi%20Kone%20Digital%2C%20I'd%20like%20to%20discuss%20a%20Custom%20Enterprise%20Plan."}];return l.jsxs("section",{className:"pricing-section",id:"pricing",style:{padding:"3.5rem 1rem",maxWidth:"1200px",margin:"0 auto",width:"100%",boxSizing:"border-box",overflowX:"hidden"},children:[l.jsxs("div",{className:"pricing-header fade-in-up",style:{textAlign:"center",marginBottom:"3rem",width:"100%",boxSizing:"border-box"},children:[l.jsxs("h2",{className:"heading-luminance",style:{fontSize:"clamp(1.8rem, 5vw, 2.5rem)",fontWeight:850,letterSpacing:"-0.03em"},children:["Transparent ",l.jsx("span",{className:"cyan-luminance",children:"WaaS Pricing"})]}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem",marginTop:"0.6rem",letterSpacing:"-0.01em",maxWidth:"640px",margin:"0.6rem auto 0",lineHeight:1.6},children:"Predictable, high-ROI Website as a Service subscription tiers with zero hidden setup fees or surprise maintenance costs."}),l.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.8rem",marginTop:"1.8rem"},children:[l.jsx("span",{style:{color:n==="GHS"?"#00F0FF":"var(--text-muted)",fontWeight:750,fontSize:"0.85rem",letterSpacing:"0.04em"},children:"GHS (₵)"}),l.jsx("button",{onClick:()=>e(n==="GHS"?"USD":"GHS"),"aria-label":`Switch pricing currency from ${n} to ${n==="GHS"?"USD":"GHS"}`,title:`Switch pricing currency from ${n} to ${n==="GHS"?"USD":"GHS"}`,style:{background:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(255, 255, 255, 0.15)",width:"54px",height:"28px",borderRadius:"20px",position:"relative",cursor:"pointer",display:"flex",alignItems:"center",padding:"2px",transition:"all 0.2s ease"},children:l.jsx("div",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"#00F0FF",transform:n==="USD"?"translateX(26px)":"translateX(0)",transition:"transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",boxShadow:"0 2px 6px rgba(0, 240, 255, 0.4)"}})}),l.jsx("span",{style:{color:n==="USD"?"#00F0FF":"var(--text-muted)",fontWeight:750,fontSize:"0.85rem",letterSpacing:"0.04em"},children:"USD ($)"})]})]}),l.jsx("div",{className:"pricing-cards",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 250px), 1fr))",gap:"1.5rem",maxWidth:"1200px",margin:"0 auto",width:"100%",boxSizing:"border-box"},children:o.map((a,h)=>{const d=h===r;return l.jsxs("div",{onClick:()=>i(h),className:`price-card fade-in-up stagger-${h%4+1}`,style:{background:d?"rgba(0, 240, 255, 0.06)":"rgba(13, 18, 29, 0.94)",borderColor:d?"rgba(0, 240, 255, 0.45)":"rgba(255, 255, 255, 0.08)",borderWidth:"1px",borderStyle:"solid",borderRadius:"20px",padding:"1.8rem 1.4rem",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:d?"0 15px 40px -10px rgba(0, 240, 255, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.12)":"0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)",transition:"border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",cursor:"pointer",position:"relative"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:l.jsx("span",{style:{fontSize:"0.7rem",fontWeight:800,padding:"0.2rem 0.6rem",borderRadius:"6px",background:a.popular?"rgba(250, 204, 21, 0.15)":"rgba(56, 189, 248, 0.12)",color:a.popular?"#FACC15":"#38BDF8",letterSpacing:"0.04em"},children:a.badge})}),l.jsx("h3",{style:{fontSize:"1.3rem",color:d?"#00F0FF":"#FFFFFF",fontWeight:850,marginBottom:"0.4rem",letterSpacing:"-0.02em"},children:a.name}),l.jsxs("div",{className:"price",style:{margin:"0.8rem 0 1rem"},children:[l.jsx("span",{className:"amount",style:{fontSize:"2.1rem",fontWeight:850,color:"#FFFFFF",letterSpacing:"-0.03em"},children:t(a.priceGhs)}),l.jsx("span",{className:"period",style:{fontSize:"0.85rem",color:"var(--text-muted)",marginLeft:"0.2rem"},children:"/month"})]}),l.jsx("p",{className:"card-desc",style:{fontSize:"0.86rem",color:"var(--text-muted)",lineHeight:1.5,marginBottom:"1.4rem"},children:a.desc}),l.jsxs("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.06)",paddingTop:"1.2rem",marginBottom:"1.6rem"},children:[l.jsx("span",{style:{display:"block",fontSize:"0.72rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--text-muted)",marginBottom:"0.8rem"},children:"Included Features"}),l.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.6rem"},children:a.features.map((f,g)=>l.jsxs("li",{style:{fontSize:"0.83rem",color:"#F1F5F9",display:"flex",alignItems:"flex-start",gap:"0.5rem",lineHeight:1.4},children:[l.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#00F0FF",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"2px"},children:l.jsx("polyline",{points:"20 6 9 17 4 12"})}),l.jsx("span",{children:f})]},g))})]})]}),l.jsxs("a",{href:`https://wa.me/233551993820?text=${a.whatsappMsg}`,target:"_blank",rel:"noopener noreferrer",className:d?"btn-primary":"btn-secondary",style:{textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",gap:"0.4rem",width:"100%",padding:"0.75rem 1rem",fontSize:"0.86rem",borderRadius:"12px"},children:[l.jsx("span",{children:"Select Plan"}),l.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]},a.id)})})]})},Lr={"web-development":{id:"web-development",slug:"web-development",shortName:"Web Development",title:"Custom Web & SaaS Application Engineering",headline:"Full-stack web applications, client portals, and SaaS platforms engineered for scale and speed.",badge:"CORE ENGINEERING",summary:"We engineer production web applications using React, Next.js, TypeScript, and modern cloud architectures. Designed for high conversion, sub-second page loads, and native Ghanaian mobile payment integrations.",icon:"code",heroImage:"/assets/services/sedemson-live-browser.jpg",heroUrl:"digital.koneacademy.io/sedemson-stone/",heroBadge:"Verified Live Client · Sedemson Stone",coverGradient:"linear-gradient(135deg, rgba(0, 240, 255, 0.08) 0%, rgba(9, 13, 22, 0.85) 100%)",scopeHighlights:[{label:"Turnaround SLA",detail:"5–10 business days for custom apps · 48h for rapid hubs"},{label:"Payment Rails",detail:"Automated MTN MoMo, Telecel Cash & AT Money"},{label:"Architecture",detail:"React 18, Next.js SSR & static prerendering"},{label:"Code Quality",detail:"Snyk-audited zero-vulnerability & Schema.org SEO"}],deliverables:[{title:"Single-Page & Multi-Page Web Apps",spec:"Vite & Next.js static prerendering with React 18+ for instant page response",iconType:"layout"},{title:"API Integration & Cloud Backends",spec:"RESTful / GraphQL APIs, Node.js microservices, and Firebase real-time data sync",iconType:"cloud"},{title:"SEO & Microdata Architecture",spec:"Schema.org JSON-LD microdata, OpenGraph social cards, and Google Search Console indexing",iconType:"seo"},{title:"Responsive Ultra-Fast UI",spec:"Mobile-first design system, clean interactions, and sub-second loading speeds",iconType:"speed"}],techStack:["React 18","TypeScript","Next.js","Node.js","Firebase","Vite","Tailwind CSS"],caseStudyHighlight:{client:"Sedemson Stone Ghana",project:"B2B Natural Stone Architectural Finishing Hub",result:"+340% inbound wholesale WhatsApp RFQs with sub-second performance across Accra.",image:"/sedemson_stone_hero.webp",link:"/sedemson-stone/index.html"},clientShowcases:[{title:"Sedemson Stone",category:"B2B & Architectural Finishing",image:"/sedemson_stone_hero.webp",link:"/sedemson-stone/index.html",metric:"+340% WhatsApp RFQs"},{title:"Susan's Pastries",category:"Artisanal Bakery & E-Commerce",image:"/susans-pastries/hero-banner.webp",link:"/susans-pastries/index.html",metric:"Direct WhatsApp Orders"},{title:"Emewear Luxury",category:"Fashion & Heritage Apparel",image:"/emewear/emewear_hero.webp",link:"/emewear/index.html",metric:"Automated MoMo Checkout"}],faq:[{q:"How long does a custom web development project take?",a:"Rapid business landing pages launch in 24–48 hours. Custom multi-page business websites and SaaS platforms are delivered in 5–10 business days."},{q:"Is hosting, domain, and SSL setup included?",a:"Yes. We configure complete cloud hosting (Vercel, Firebase, GitHub Pages), custom domain DNS, SSL certificates, and Google Search Console indexing."},{q:"Do you integrate Mobile Money (MTN MoMo, Telecel, AT)?",a:"Yes. We natively integrate automated Ghanaian mobile payment routing so customers can pay directly into your account."}]},"mobile-apps":{id:"mobile-apps",slug:"mobile-apps",shortName:"Mobile Apps",title:"iOS & Android Mobile App Development",headline:"Native-performance cross-platform mobile apps for App Store and Google Play.",badge:"MOBILE ENGINEERING",summary:"From concept to App Store and Google Play publication. We engineer cross-platform mobile apps using React Native and Flutter, delivering native 60fps animations, push notifications, and offline-first database sync.",icon:"smartphone",heroImage:"/assets/services/mobile-apps-template.png",heroUrl:"kids.koneacademy.io",heroBadge:"Verified Live App · Kone Kids Companion",coverGradient:"linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(9, 13, 22, 0.85) 100%)",scopeHighlights:[{label:"Target Platforms",detail:"Apple iOS (App Store) & Android (Google Play)"},{label:"Architecture",detail:"Offline-first database sync & React Native / Flutter"},{label:"Push & Messaging",detail:"Firebase Cloud Messaging (FCM) & Apple APNs notifications"},{label:"Turnaround SLA",detail:"2–4 weeks MVP to Store submission"}],deliverables:[{title:"Cross-Platform iOS & Android Apps",spec:"Single codebase compiled to native iOS Swift & Android Kotlin binaries",iconType:"smartphone"},{title:"Offline-First Database Sync",spec:"Local SQLite / Realm storage with automatic cloud reconciliation",iconType:"cloud"},{title:"Push Notifications & Deep Linking",spec:"Firebase Cloud Messaging (FCM) & Apple APNs integration",iconType:"bell"},{title:"Store Deployment & Compliance",spec:"Complete Apple App Store & Google Play Store submission & approval management",iconType:"store"}],techStack:["React Native","Flutter","TypeScript","Firebase FCM","App Store Connect","Google Play Console"],caseStudyHighlight:{client:"Kone Kids Academy",project:"Interactive Mobile Learning Companion",result:"4.9★ rating with offline course access for students across West Africa.",image:"/assets/services/mobile-apps-template.png",link:"https://kids.koneacademy.io"},faq:[{q:"How long does mobile app development take?",a:"Rapid MVP mobile applications launch in 2–4 weeks. Complete multi-platform production builds with store approvals take 4–6 weeks."},{q:"Do you publish our app directly to the App Store & Google Play?",a:"Yes. We manage all store assets, compliance guidelines, privacy manifests, and final submission to both Apple and Google."},{q:"Can the app work offline without internet?",a:"Yes. We build local caching mechanisms that allow core app functionality offline with automatic cloud sync when connected."}]},"brand-design":{id:"brand-design",slug:"brand-design",shortName:"Brand & UI/UX",title:"Brand Identity & UI/UX Design Systems",headline:"Structured corporate identities, scalable vector systems, and interactive Figma prototypes.",badge:"DESIGN STUDIO",summary:"We craft iconic corporate brand identity systems that command trust and market authority. Includes logo vectors, color tokens, typography scales, interactive Figma UI/UX wireframes, and complete brand manuals.",icon:"palette",heroImage:"/assets/services/brand-design-live.jpg",heroUrl:"consult.koneacademy.io",heroBadge:"Verified Live Platform · Kone Consult",coverGradient:"linear-gradient(135deg, rgba(234, 179, 8, 0.08) 0%, rgba(9, 13, 22, 0.85) 100%)",scopeHighlights:[{label:"Deliverables",detail:"Scalable SVG / EPS vectors & full PDF Brand Guidelines"},{label:"UI/UX Prototypes",detail:"Interactive component systems in Figma"},{label:"Standards",detail:"WCAG 2.1 AA color contrast & responsive design tokens"},{label:"Turnaround SLA",detail:"3–5 business days initial concepts · 7–10 days complete package"}],deliverables:[{title:"Vector Logo Systems",spec:"Scalable SVG, EPS, PNG, and PDF asset packages with dark/light variants",iconType:"palette"},{title:"Interactive Figma UI/UX Prototypes",spec:"High-fidelity component design systems, wireframes, and interactive user flows",iconType:"layout"},{title:"Brand Identity Guidelines",spec:"PDF brand book detailing typography, color palettes, spacing rules, and usage",iconType:"book"},{title:"Social & Corporate Marketing Assets",spec:"Banners, OpenGraph social previews, business cards, and flyer graphics",iconType:"speed"}],techStack:["Figma","Adobe Illustrator","Photoshop","SVG Vector Systems","Design Tokens"],caseStudyHighlight:{client:"Kone Consult",project:"Corporate Tech Brand & Design System",result:"Unified multi-subdomain corporate visual language for enterprise client acquisition.",image:"/assets/services/brand-design-live.jpg",link:"https://consult.koneacademy.io"},faq:[{q:"What is the turnaround time for a complete brand identity?",a:"Initial brand concepts and logo marks are delivered in 3–5 business days. Complete vector packages, design systems, and PDF brand manuals are finalized in 7–10 business days."},{q:"What files and assets do I receive upon completion?",a:"You receive all original Figma source files, vector SVG/EPS assets, high-res PNG/PDF exports, and a comprehensive brand guideline manual."},{q:"Can you redesign our existing company logo?",a:"Absolutely. We specialize in modernizing legacy brand identities for digital-first platforms."}]},"cloud-devops":{id:"cloud-devops",slug:"cloud-devops",shortName:"Cloud & DevOps",title:"Cloud Infrastructure & DevOps Automation",headline:"Automated CI/CD pipelines, secure cloud hosting, and zero-downtime deployments.",badge:"CLOUD ARCHITECTURE",summary:"Architecting resilient cloud infrastructure on AWS, Firebase, and Cloudflare. We build automated GitHub Actions CI/CD pipelines, SSL/TLS encryption, and real-time uptime monitoring.",icon:"server",heroImage:"/assets/services/cloud-devops-live.jpg",heroUrl:"code.koneacademy.io",heroBadge:"Verified Live Infrastructure · Kone Code IDE",coverGradient:"linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(9, 13, 22, 0.85) 100%)",scopeHighlights:[{label:"Cloud Platforms",detail:"AWS, Firebase, Cloudflare DNS & Docker containers"},{label:"CI/CD Automation",detail:"GitHub Actions with automated testing & zero-downtime deploys"},{label:"Security Standard",detail:"Snyk SAST vulnerability scans & TLS 1.3 / SSL encryption"},{label:"Turnaround SLA",detail:"24–48h setup, configuration & zero-downtime migrations"}],deliverables:[{title:"Automated CI/CD Deployment Pipelines",spec:"GitHub Actions workflows for automated build, lint, test, and zero-downtime deployment",iconType:"speed"},{title:"Cloud Infrastructure Setup",spec:"Firebase Firestore, AWS S3/CloudFront, Cloudflare DNS, and serverless edge functions",iconType:"cloud"},{title:"Security & Penetration Audits",spec:"Snyk SAST security scanning, DOM-XSS prevention, and SSL/TLS configuration",iconType:"shield"},{title:"Uptime & Performance Telemetry",spec:"Real-time error tracking, automated sitemap submission, and Google Search Console APIs",iconType:"server"}],techStack:["AWS Cloud","Firebase","Cloudflare","GitHub Actions","Docker","Snyk Security","Node.js"],caseStudyHighlight:{client:"Kone Code IDE Ecosystem",project:"Cloud Compiler & Data Relay Infrastructure",result:"99.98% uptime serving thousands of automated compiler executions daily.",image:"/assets/services/cloud-devops-live.jpg",link:"https://code.koneacademy.io"},faq:[{q:"How quickly can cloud infrastructure or CI/CD pipelines be set up?",a:"Standard CI/CD automation, cloud hosting migration, and DNS setups are completed within 24–48 hours with zero downtime."},{q:"How do you ensure our production code and customer data are secure?",a:"We perform automated Snyk SAST security scans, enforce HTTPS/TLS 1.3 encryption, and implement strict environment isolation."}]}},E1=n=>{switch(n){case"layout":return l.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),l.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]});case"cloud":return l.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})});case"seo":return l.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"11",cy:"11",r:"8"}),l.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),l.jsx("path",{d:"M11 8v6"}),l.jsx("path",{d:"M8 11h6"})]});case"speed":return l.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})});case"smartphone":return l.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),l.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]});case"bell":return l.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),l.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]});case"store":return l.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),l.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]});case"palette":return l.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"13.5",cy:"6.5",r:".5"}),l.jsx("circle",{cx:"17.5",cy:"10.5",r:".5"}),l.jsx("circle",{cx:"8.5",cy:"7.5",r:".5"}),l.jsx("circle",{cx:"6.5",cy:"12.5",r:".5"}),l.jsx("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"})]});case"book":return l.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),l.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]});case"shield":return l.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})});case"server":return l.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}),l.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}),l.jsx("line",{x1:"6",y1:"6",x2:"6.01",y2:"6"}),l.jsx("line",{x1:"6",y1:"18",x2:"6.01",y2:"18"})]});default:return l.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"16 18 22 12 16 6"}),l.jsx("polyline",{points:"8 6 2 12 8 18"})]})}},Kl=n=>{const e=n.toLowerCase();return e.includes("react native")||e.includes("react 18")||e==="react"?l.jsxs("svg",{viewBox:"-11.5 -10.23174 23 20.46348",width:"16",height:"16","aria-hidden":"true",focusable:"false",children:[l.jsx("circle",{cx:"0",cy:"0",r:"2.05",fill:"#61DAFB"}),l.jsxs("g",{stroke:"#61DAFB",strokeWidth:"1",fill:"none",children:[l.jsx("ellipse",{rx:"11",ry:"4.2"}),l.jsx("ellipse",{rx:"11",ry:"4.2",transform:"rotate(60)"}),l.jsx("ellipse",{rx:"11",ry:"4.2",transform:"rotate(120)"})]})]}):e.includes("typescript")?l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none","aria-hidden":"true",focusable:"false",children:[l.jsx("rect",{width:"24",height:"24",rx:"4",fill:"#3178C6"}),l.jsx("path",{d:"M11.7 8.5H5.8V10.3H7.8V17.5H9.7V10.3H11.7V8.5Z",fill:"#FFFFFF"}),l.jsx("path",{d:"M18.8 11.2C18.4 10.6 17.7 10.2 16.8 10.2C15.8 10.2 15.1 10.5 14.6 11C14.1 11.5 13.9 12.1 13.9 12.8C13.9 13.5 14.2 14.1 14.7 14.5C15.2 14.9 16 15.3 17.1 15.6C18.1 16 18.8 16.4 19.3 16.9C19.7 17.4 20 18.1 20 18.9C20 19.9 19.6 20.7 18.8 21.3C18 21.8 16.9 22.1 15.5 22.1C14.3 22.1 13.2 21.8 12.3 21.2L13 19.6C13.8 20.1 14.6 20.4 15.6 20.4C16.3 20.4 17 20.2 17.4 19.8C17.9 19.4 18.1 18.9 18.1 18.3C18.1 17.7 17.9 17.2 17.5 16.8C17.1 16.4 16.3 16.1 15.3 15.7C14.2 15.3 13.4 14.8 12.9 14.2C12.4 13.6 12.1 12.8 12.1 11.9C12.1 10.9 12.5 10 13.3 9.4C14.1 8.8 15.2 8.5 16.6 8.5C17.7 8.5 18.6 8.7 19.4 9.1L18.8 11.2Z",fill:"#FFFFFF"})]}):e.includes("next.js")?l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none","aria-hidden":"true",focusable:"false",children:[l.jsx("circle",{cx:"12",cy:"12",r:"11",fill:"#000000",stroke:"rgba(255,255,255,0.3)",strokeWidth:"1"}),l.jsx("path",{d:"M14.95 16.65L8.4 8H7v8h1.4v-6.28l6.12 7.72c.16.2.39.31.64.31h.75a.93.93 0 0 0 .93-.93V8h-1.89v8.65z",fill:"#FFFFFF"})]}):e.includes("node.js")||e==="node"?l.jsxs("svg",{viewBox:"0 0 128 128",width:"16",height:"16","aria-hidden":"true",focusable:"false",children:[l.jsx("path",{fill:"url(#node-grad-a)",d:"M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"}),l.jsx("path",{fill:"url(#node-grad-b)",d:"M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"}),l.jsx("path",{fill:"url(#node-grad-c)",d:"M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"}),l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"node-grad-a",x1:"34.513",x2:"27.157",y1:"15.535",y2:"30.448",gradientTransform:"translate(-129.242 -73.715) scale(6.18523)",gradientUnits:"userSpaceOnUse",children:[l.jsx("stop",{stopColor:"#3F873F"}),l.jsx("stop",{offset:".33",stopColor:"#3F8B3D"}),l.jsx("stop",{offset:".637",stopColor:"#3E9638"}),l.jsx("stop",{offset:".934",stopColor:"#3DA92E"}),l.jsx("stop",{offset:"1",stopColor:"#3DAE2B"})]}),l.jsxs("linearGradient",{id:"node-grad-b",x1:"30.009",x2:"50.533",y1:"23.359",y2:"8.288",gradientTransform:"translate(-129.242 -73.715) scale(6.18523)",gradientUnits:"userSpaceOnUse",children:[l.jsx("stop",{offset:".138",stopColor:"#3F873F"}),l.jsx("stop",{offset:".402",stopColor:"#52A044"}),l.jsx("stop",{offset:".713",stopColor:"#64B749"}),l.jsx("stop",{offset:".908",stopColor:"#6ABF4B"})]}),l.jsxs("linearGradient",{id:"node-grad-c",x1:"21.917",x2:"40.555",y1:"22.261",y2:"22.261",gradientTransform:"translate(-129.242 -73.715) scale(6.18523)",gradientUnits:"userSpaceOnUse",children:[l.jsx("stop",{offset:".092",stopColor:"#6ABF4B"}),l.jsx("stop",{offset:".287",stopColor:"#64B749"}),l.jsx("stop",{offset:".598",stopColor:"#52A044"}),l.jsx("stop",{offset:".862",stopColor:"#3F873F"})]})]})]}):e.includes("firebase")?l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none","aria-hidden":"true",focusable:"false",children:[l.jsx("path",{d:"M4.6 17.5L7.3 1.1c.1-.4.5-.5.8-.2l3.4 6.3-6.9 10.3z",fill:"#FFA000"}),l.jsx("path",{d:"M13.7 9.8L11.5 5.7c-.2-.4-.8-.4-.9 0L4.6 17.5l9.1-7.7z",fill:"#F57C00"}),l.jsx("path",{d:"M12.9 21.8l7.6-4.3L16.2 3.6c-.2-.4-.8-.4-.9 0L4.6 17.5l7.3 4.1c.6.3 1.4.3 2 0z",fill:"#FFCA28"}),l.jsx("path",{d:"M12.9 21.8c-.3.2-.7.2-1 0L4.6 17.5l-.2.2c-.3.3-.4.8-.1 1.1l7 7c.4.4 1 .4 1.4 0l7.6-7.6-7.6 3.6z",fill:"#FFA000",opacity:"0.3"})]}):e.includes("vite")?l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none","aria-hidden":"true",focusable:"false",children:[l.jsx("path",{d:"M21.7 3.5L12.5 19.8c-.2.4-.8.4-1 0L2.3 3.5c-.3-.5.2-1.1.7-.9l9 3.5 9-3.5c.5-.2 1 .4.7.9z",fill:"url(#vite-tech-grad)"}),l.jsx("path",{d:"M16.5 1.5L8.2 12.2l4.1.2-2.5 6.9 7.7-10.7-3.9-.3 2.9-6.8z",fill:"#FFD814"}),l.jsx("defs",{children:l.jsxs("linearGradient",{id:"vite-tech-grad",x1:"2",y1:"2",x2:"22",y2:"20",gradientUnits:"userSpaceOnUse",children:[l.jsx("stop",{stopColor:"#41D1FF"}),l.jsx("stop",{offset:"1",stopColor:"#BD34FE"})]})})]}):e.includes("tailwind")?l.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"#38BDF8","aria-hidden":"true",focusable:"false",children:l.jsx("path",{d:"M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"})}):e.includes("flutter")?l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none","aria-hidden":"true",focusable:"false",children:[l.jsx("path",{d:"M14.3 2L4 12.3l3.2 3.2L20.7 2h-6.4z",fill:"#42A5F5"}),l.jsx("path",{d:"M14.3 12.3L8.8 17.8 12 21l8.7-8.7h-6.4z",fill:"#0D47A1"}),l.jsx("path",{d:"M11.2 15.4l2.4 2.4-2.4 2.4-2.4-2.4 2.4-2.4z",fill:"#01579B"}),l.jsx("path",{d:"M20.7 21h-6.4l-3.1-3.2 3.1-3.2 6.4 6.4z",fill:"#29B6F6"})]}):e.includes("app store")||e.includes("apple")?l.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"#FFFFFF","aria-hidden":"true",focusable:"false",children:l.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.05-.03.07-.42 1.44-1.38 2.82M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.72-.93 2.74 1.01.08 2.01-.49 2.63-1.24z"})}):e.includes("google play")?l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none","aria-hidden":"true",focusable:"false",children:[l.jsx("path",{d:"M3.6 2.4C3.2 2.8 3 3.4 3 4.2v15.6c0 .8.2 1.4.6 1.8l9.4-9.8L3.6 2.4z",fill:"#00E676"}),l.jsx("path",{d:"M16.4 8.2l-3.4 3.6 3.4 3.6 3.9-2.2c1.1-.6 1.1-1.7 0-2.3l-3.9-2.7z",fill:"#FFD600"}),l.jsx("path",{d:"M3.6 21.6c.4.4 1.1.5 1.8.1l11-6.3-3.4-3.6-9.4 9.8z",fill:"#FF3D00"}),l.jsx("path",{d:"M3.6 2.4L13 11.8l3.4-3.6L5.4 1.9C4.7 1.5 4 1.6 3.6 2.4z",fill:"#00B0FF"})]}):e.includes("figma")?l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none","aria-hidden":"true",focusable:"false",children:[l.jsx("path",{d:"M8 2h4v5H8a2.5 2.5 0 0 1 0-5z",fill:"#F24E1E"}),l.jsx("path",{d:"M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z",fill:"#FF7262"}),l.jsx("path",{d:"M8 7h4v5H8a2.5 2.5 0 0 1 0-5z",fill:"#A259FF"}),l.jsx("path",{d:"M12 7h4a2.5 2.5 0 1 1 0 5h-4V7z",fill:"#1ABCFE"}),l.jsx("path",{d:"M8 12h4v5H8a2.5 2.5 0 0 1 0-5z",fill:"#0ACF83"}),l.jsx("path",{d:"M8 17h4v2.5A2.5 2.5 0 0 1 8 22a2.5 2.5 0 0 1 0-5z",fill:"#0ACF83"})]}):e.includes("illustrator")?l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none","aria-hidden":"true",focusable:"false",children:[l.jsx("rect",{width:"24",height:"24",rx:"5",fill:"#330000"}),l.jsx("path",{d:"M6 17.5l3.5-10.5h1.8L15 17.5h-1.8l-.8-2.6H8.3l-.8 2.6H6zm2.8-4.2h3.1l-1.5-4.8h-.1l-1.5 4.8zm8.6-4.9c-.6 0-1.1.4-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm-.8 9.1V10.8h1.7v6.7h-1.7z",fill:"#FF9A00"})]}):e.includes("photoshop")?l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none","aria-hidden":"true",focusable:"false",children:[l.jsx("rect",{width:"24",height:"24",rx:"5",fill:"#001E36"}),l.jsx("path",{d:"M6.5 17.5V6.8h4.6c1.6 0 2.8.4 3.6 1.2.8.8 1.2 1.9 1.2 3.2s-.4 2.4-1.2 3.2c-.8.8-2 1.2-3.6 1.2H8.3v1.9H6.5zm1.8-3.5h2.8c1 0 1.8-.2 2.3-.7.5-.5.8-1.2.8-2.1s-.3-1.6-.8-2.1c-.5-.5-1.3-.7-2.3-.7H8.3v5.6zm10.9-1.3c-.6-.4-1.3-.7-2.1-.9-.8-.2-1.3-.5-1.6-.8-.3-.3-.4-.7-.4-1.2 0-.6.3-1 .8-1.4.5-.4 1.2-.6 2.1-.6.7 0 1.4.1 2 .4v1.6c-.6-.3-1.2-.4-1.8-.4-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.8 0 .3.1.5.3.7.2.2.6.4 1.2.6.9.3 1.6.6 2 .9.5.4.7.9.7 1.5 0 .7-.3 1.3-.8 1.7-.5.4-1.3.6-2.3.6-.8 0-1.7-.2-2.4-.5v-1.7c.8.4 1.6.6 2.3.6.6 0 1.1-.1 1.4-.3.3-.2.5-.5.5-.9 0-.3-.1-.6-.3-.7-.2-.2-.6-.4-1.1-.6z",fill:"#31A8FF"})]}):e.includes("aws")?l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"#FF9900","aria-hidden":"true",focusable:"false",children:[l.jsx("path",{d:"M18.8 17.4c-2.4 1.8-5.8 2.7-8.8 2.7-4.2 0-8-1.6-10.9-4.2-.2-.2-.2-.5 0-.7.4-.4.8-.8 1.2-1.2.2-.2.5-.2.7 0 2.4 2 5.4 3.2 8.7 3.2 2.5 0 5.3-.8 7.3-2.3.3-.2.6 0 .8.2.3.4.6.8.9 1.3.2.3.1.7-.1.9z"}),l.jsx("path",{d:"M20.2 14.8c-.3-.4-1.9-.2-2.9-.1-.3 0-.4-.3-.2-.5.8-1.2 2.1-1.7 2.9-1.5.8.2 1.1 1.6.4 2.8-.5.9-1.2 1.6-1.5 1.7-.2.1-.4 0-.4-.2l.1-.9.6-1.3z"}),l.jsx("path",{d:"M12.7 6.3c-.3 0-.5.2-.5.5v7.4c0 .3.2.5.5.5h1.2c.3 0 .5-.2.5-.5V6.8c0-.3-.2-.5-.5-.5h-1.2z"})]}):e.includes("cloudflare")?l.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"#F38020","aria-hidden":"true",focusable:"false",children:l.jsx("path",{d:"M18.6 10.3c-.4-3.1-3.1-5.5-6.3-5.5-2.7 0-5 1.7-5.9 4.1C6 9 5.5 9 5 9.1 2.8 9.5 1.1 11.4 1 13.7c-.1 2.6 1.9 4.8 4.5 4.9h12.8c2.6 0 4.7-2.1 4.7-4.7 0-2.3-1.7-4.2-3.9-4.5-.2.3-.3.6-.5.9z"})}):e.includes("github")?l.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",focusable:"false",children:l.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"})}):e.includes("docker")?l.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"#2496ED","aria-hidden":"true",focusable:"false",children:l.jsx("path",{d:"M13.9 8.2h2.2v2.1h-2.2V8.2zm-2.7 0h2.2v2.1h-2.2V8.2zm-2.7 0h2.2v2.1H8.5V8.2zm-2.7 0H8v2.1H5.8V8.2zm5.4-2.6h2.2v2.1h-2.2V5.6zm-2.7 0h2.2v2.1H8.5V5.6zm-2.7 0H8v2.1H5.8V5.6zm8.1 0h2.2v2.1h-2.2V5.6zm2.7 2.6h2.2v2.1h-2.2V8.2zm8 3.2c-.4-.3-1.4-.4-2.1-.2-.4-.8-1.1-1.3-1.9-1.4-.2 0-.4 0-.6.1-.1-1.5-1-2.4-2.2-2.4h-.3V13H1.2c-.1.5-.2 1.1-.2 1.7 0 4.2 3.6 7.7 8.3 7.7 5.7 0 9.8-3.6 10.9-8.7.9-.1 1.8-.7 2.3-1.5.3-.4.3-.7.1-1.1z"})}):e.includes("snyk")?l.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none","aria-hidden":"true",focusable:"false",children:l.jsx("path",{d:"M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm-1 14.5l-3.5-3.5 1.41-1.41L11 13.67l5.09-5.09 1.41 1.41L11 16.5z",fill:"#7C3AED"})}):e.includes("svg")||e.includes("token")||e.includes("design")?l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"#F59E0B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[l.jsx("circle",{cx:"12",cy:"12",r:"3"}),l.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}):l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",children:[l.jsx("polyline",{points:"16 18 22 12 16 6"}),l.jsx("polyline",{points:"8 6 2 12 8 18"})]})};function x1({slug:n,onBack:e,onSelectService:t}){const r=Lr[n]||Lr["web-development"],o=Object.values(Lr).filter(a=>a.slug!==r.slug);return l.jsxs("div",{className:"service-detail-container",itemScope:!0,itemType:"https://schema.org/Service",children:[l.jsxs("nav",{className:"service-nav-bar","aria-label":"Breadcrumb",children:[l.jsxs("div",{className:"service-breadcrumbs",children:[l.jsx("a",{href:"/",className:"crumb-link",children:"Home"}),l.jsx("span",{className:"crumb-separator",children:"/"}),l.jsx("a",{href:"/services",onClick:a=>{a.preventDefault(),e&&e()},className:"crumb-link",children:"Services"}),l.jsx("span",{className:"crumb-separator",children:"/"}),l.jsx("span",{className:"crumb-current",children:r.shortName})]}),l.jsxs("a",{href:"/services",onClick:a=>{a.preventDefault(),e&&e()},className:"service-back-btn",children:[l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2.5",fill:"none",children:[l.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),l.jsx("polyline",{points:"12 19 5 12 12 5"})]}),l.jsx("span",{children:"All Services"})]})]}),l.jsx("header",{className:"service-hero-banner",style:{background:r.coverGradient},children:l.jsxs("div",{className:"service-hero-grid",children:[l.jsxs("div",{className:"service-hero-content",children:[l.jsx("div",{className:"service-badge-wrapper",children:l.jsx("span",{className:"service-badge",children:r.badge})}),l.jsx("h1",{className:"service-main-title",itemProp:"name",children:r.title}),l.jsx("p",{className:"service-headline",itemProp:"description",children:r.headline}),l.jsx("p",{className:"service-summary",children:r.summary}),l.jsxs("div",{className:"service-hero-cta",children:[l.jsxs("a",{href:`https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(r.title)}%20service.`,target:"_blank",rel:"noopener noreferrer",className:"service-primary-btn",children:[l.jsx("span",{children:"Book a Technical Consultation"}),l.jsxs("svg",{viewBox:"0 0 24 24",width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),l.jsx("a",{href:"/pricing",className:"service-secondary-btn",children:l.jsx("span",{children:"View Pricing Estimates"})})]})]}),l.jsx("div",{className:"service-hero-visual-card",children:l.jsxs("div",{className:"visual-frame",children:[l.jsx("img",{src:r.heroImage,alt:`${r.title} Live Production Showcase`,className:"service-hero-img",loading:"eager"}),l.jsxs("div",{className:"visual-overlay-badge",children:[l.jsx("span",{className:"visual-badge-dot",children:"●"}),l.jsx("span",{children:r.heroBadge||"Verified Client Deployment"})]})]})})]})}),l.jsx("section",{className:"service-standards-strip fade-in-up",children:r.scopeHighlights.map((a,h)=>l.jsxs("div",{className:"standard-chip",children:[l.jsx("span",{className:"standard-chip-label",children:a.label}),l.jsx("span",{className:"standard-chip-detail",children:a.detail})]},h))}),l.jsxs("section",{className:"service-deliverables-section fade-in-up",children:[l.jsx("h2",{className:"section-title",children:"Key Technical Deliverables & Features"}),l.jsx("div",{className:"deliverables-grid",children:r.deliverables.map((a,h)=>l.jsxs("div",{className:`deliverable-card fade-in-up stagger-${h%4+1}`,children:[l.jsxs("div",{className:"deliverable-card-header",children:[l.jsx("div",{className:"deliverable-icon-wrapper",children:E1(a.iconType)}),l.jsxs("span",{className:"del-num",children:["0",h+1]})]}),l.jsx("h3",{className:"del-title",children:a.title}),l.jsx("p",{className:"del-spec",children:a.spec})]},h))})]}),r.clientShowcases&&r.clientShowcases.length>0&&l.jsxs("section",{className:"service-deployments-section fade-in-up",children:[l.jsxs("div",{className:"section-header-row",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"section-title",style:{marginBottom:"0.3rem"},children:"Live Client Deployments"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem",margin:0},children:"Verified production websites engineered by Kone Digital in active commercial operation."})]}),l.jsxs("a",{href:"/work",className:"section-view-all-link",children:[l.jsx("span",{children:"View All Work"}),l.jsxs("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),l.jsx("div",{className:"client-showcases-grid",children:r.clientShowcases.map((a,h)=>l.jsxs("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"client-showcase-card",children:[l.jsxs("div",{className:"client-card-image-wrapper",children:[l.jsx("img",{src:a.image,alt:a.title,className:"client-card-img",loading:"lazy"}),l.jsx("span",{className:"client-card-badge",children:a.metric})]}),l.jsxs("div",{className:"client-card-info",children:[l.jsx("span",{className:"client-card-category",children:a.category}),l.jsx("h3",{className:"client-card-title",children:a.title})]})]},h))})]}),l.jsxs("section",{className:"service-tech-section fade-in-up",children:[l.jsxs("div",{className:"tech-header-row",children:[l.jsx("h2",{className:"section-title",children:"Engineering Tech Stack"}),l.jsx("span",{className:"tech-sub-hint",children:"Production Toolchain & Frameworks"})]}),l.jsxs("div",{className:"tech-marquee-wrapper","aria-label":"Engineering Tech Stack Marquee",children:[l.jsx("div",{className:"tech-marquee-track",children:[...r.techStack,...r.techStack].map((a,h)=>l.jsxs("span",{className:"service-tech-pill",children:[l.jsx("span",{className:"tech-pill-icon",children:Kl(a)}),l.jsx("span",{className:"tech-pill-name",children:a})]},`tech-t1-${a}-${h}`))}),l.jsx("div",{className:"tech-marquee-track","aria-hidden":"true",children:[...r.techStack,...r.techStack].map((a,h)=>l.jsxs("span",{className:"service-tech-pill",children:[l.jsx("span",{className:"tech-pill-icon",children:Kl(a)}),l.jsx("span",{className:"tech-pill-name",children:a})]},`tech-t2-${a}-${h}`))})]})]}),l.jsx("section",{className:"service-case-section fade-in-up",children:l.jsx("div",{className:"case-highlight-card",children:l.jsxs("div",{className:"case-card-grid",children:[l.jsx("div",{className:"case-image-col",children:l.jsx("img",{src:r.caseStudyHighlight.image,alt:r.caseStudyHighlight.project,className:"case-study-img",loading:"lazy"})}),l.jsxs("div",{className:"case-content-col",children:[l.jsxs("div",{className:"case-meta-header",children:[l.jsx("span",{className:"case-label",children:"FEATURED CASE STUDY"}),l.jsx("span",{className:"case-client",children:r.caseStudyHighlight.client})]}),l.jsx("h3",{className:"case-title",children:r.caseStudyHighlight.project}),l.jsx("p",{className:"case-result",children:r.caseStudyHighlight.result}),r.caseStudyHighlight.link&&l.jsxs("a",{href:r.caseStudyHighlight.link,target:r.caseStudyHighlight.link.startsWith("http")?"_blank":"_self",rel:"noopener noreferrer",className:"case-link",children:[l.jsx("span",{children:"Explore Live Platform"}),l.jsxs("svg",{viewBox:"0 0 24 24",width:"14",height:"14",stroke:"currentColor",strokeWidth:"2",fill:"none",children:[l.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),l.jsx("polyline",{points:"15 3 21 3 21 9"}),l.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]})]})})}),l.jsxs("section",{className:"service-faq-section fade-in-up",children:[l.jsx("h2",{className:"section-title",children:"Frequently Asked Questions"}),l.jsx("div",{className:"faq-grid",children:r.faq.map((a,h)=>l.jsxs("div",{className:`faq-card fade-in-up stagger-${h%4+1}`,children:[l.jsxs("div",{className:"faq-q-row",children:[l.jsx("span",{className:"faq-badge",children:"Q"}),l.jsx("h3",{className:"faq-q",children:a.q})]}),l.jsx("p",{className:"faq-a",children:a.a})]},h))})]}),l.jsxs("section",{className:"other-services-section fade-in-up",children:[l.jsxs("div",{className:"other-services-header",children:[l.jsx("h2",{className:"section-title",style:{marginBottom:"0.4rem"},children:"Explore Other Services"}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.92rem"},children:"Comprehensive engineering & design capabilities for growing ventures."})]}),l.jsx("div",{className:"other-services-grid",children:o.map(a=>l.jsxs("a",{href:`/services/${a.slug}`,onClick:h=>{h.preventDefault(),t?t(a.slug):(window.history.pushState({},"",`/services/${a.slug}`),window.location.reload())},className:"other-service-card neon-border",children:[l.jsxs("div",{className:"other-card-top",children:[l.jsx("span",{className:"other-card-badge",children:a.badge}),l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2.5",className:"other-card-arrow",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),l.jsx("h3",{className:"other-card-title",children:a.title}),l.jsx("p",{className:"other-card-headline",children:a.headline})]},a.slug))})]})]})}const S1={"web-development":l.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#38bdf8",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("polyline",{points:"16 18 22 12 16 6"}),l.jsx("polyline",{points:"8 6 2 12 8 18"})]}),"mobile-apps":l.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#c084fc",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),l.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),"brand-design":l.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#facc15",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M12 19l7-7 3 3-7 7-3-3z"}),l.jsx("path",{d:"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}),l.jsx("path",{d:"M2 2l7.586 7.586"}),l.jsx("circle",{cx:"11",cy:"11",r:"2"})]}),"cloud-devops":l.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#4ade80",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"})})};function Ql({onSelectService:n}){const e=Object.values(Lr);return l.jsxs("section",{className:"services-hub-section",id:"services",children:[l.jsxs("div",{className:"services-hero-header fade-in-up",children:[l.jsx("h2",{className:"services-title",children:"Digital Engineering & Design Services"}),l.jsx("p",{className:"services-subtitle",children:"From custom SaaS applications and native mobile apps to corporate brand design and cloud DevOps infrastructure."})]}),l.jsx("div",{className:"services-hub-grid",children:e.map((t,r)=>l.jsxs("div",{className:`service-hub-card fade-in-up stagger-${r%4+1}`,children:[l.jsxs("div",{className:"card-top-row",children:[l.jsx("div",{className:"hub-card-icon-wrapper",children:S1[t.id]}),l.jsx("span",{className:"hub-card-badge",children:t.badge})]}),l.jsx("h3",{className:"hub-card-title",children:t.title}),l.jsx("p",{className:"hub-card-headline",children:t.headline}),l.jsx("p",{className:"hub-card-summary",children:t.summary}),l.jsxs("div",{className:"hub-card-deliverables",children:[l.jsx("span",{className:"deliverables-heading",children:"Core Deliverables"}),l.jsx("ul",{children:t.deliverables.slice(0,3).map((i,o)=>l.jsxs("li",{children:[l.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#38bdf8",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"2px"},children:l.jsx("polyline",{points:"20 6 9 17 4 12"})}),l.jsx("span",{children:i.title})]},o))})]}),l.jsxs("a",{href:`/services/${t.slug}`,onClick:i=>{i.preventDefault(),n(t.slug)},className:"view-service-btn",children:[l.jsx("span",{children:"Explore Specifications"}),l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2.5",fill:"none",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]},t.id))})]})}function A1(){const n=z.useRef(null),[e,t]=z.useState(!1),[r,i]=z.useState(!1),[o,a]=z.useState({}),h=C=>{t(!0)},d=()=>{if(typeof window>"u")return{route:"home",slug:"web-development"};const C=window.location.pathname.replace(/\/$/,"")||"/",V=window.location.hash;return C.startsWith("/services/")?{route:"service-detail",slug:C.replace("/services/","")}:V.startsWith("#services/")?{route:"service-detail",slug:V.replace("#services/","")}:C==="/services"||V.startsWith("#services")?{route:"services",slug:"web-development"}:C==="/work"||V.startsWith("#work")?{route:"work",slug:"web-development"}:C==="/pricing"||V.startsWith("#pricing")?{route:"pricing",slug:"web-development"}:{route:"home",slug:"web-development"}},f=d(),[g,I]=z.useState(f.route),[S,P]=z.useState(f.slug),N=()=>{const C=d();I(C.route),P(C.slug);let V="Kone Digital | WaaS Hub",B="https://digital.koneacademy.io/";C.route==="work"?(V="Portfolio & Client Work | Kone Digital",B="https://digital.koneacademy.io/work"):C.route==="pricing"?(V="Transparent WaaS Pricing Plans | Kone Digital",B="https://digital.koneacademy.io/pricing"):C.route==="services"?(V="Digital Engineering & Design Services | Kone Digital",B="https://digital.koneacademy.io/services"):C.route==="service-detail"&&(V=`${C.slug.split("-").map(ee=>ee.charAt(0).toUpperCase()+ee.slice(1)).join(" ")} Services | Kone Digital`,B=`https://digital.koneacademy.io/services/${C.slug}`),document.title=V;const Z=document.querySelector("link[rel='canonical']");Z&&(Z.href=B)},j=(C,V)=>{C.preventDefault(),window.location.pathname!==V&&window.history.pushState({},"",V),N(),window.scrollTo({top:0,behavior:"instant"})};return z.useEffect(()=>{const C=()=>{N(),window.scrollTo({top:0,behavior:"instant"})};return window.addEventListener("hashchange",C),window.addEventListener("popstate",C),N(),()=>{window.removeEventListener("hashchange",C),window.removeEventListener("popstate",C)}},[]),z.useEffect(()=>{(n.current||document).querySelectorAll(".fade-in-up").forEach(B=>B.classList.add("visible"))},[g]),l.jsxs("div",{ref:n,className:"digital-app-root",children:[l.jsx("header",{className:"hub-header",children:l.jsxs("div",{className:"hub-header-inner",children:[l.jsx("div",{className:"logo",style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:l.jsxs("a",{href:"/",onClick:C=>j(C,"/"),style:{display:"flex",alignItems:"center",gap:"0.75rem",textDecoration:"none",color:"inherit"},children:[l.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",className:"logo-icon neon-logo",width:"34",height:"34"}),l.jsxs("span",{className:"logo-text",style:{fontWeight:850,letterSpacing:"-0.02em"},children:["KONE ",l.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]})}),l.jsxs("nav",{className:"hub-nav",children:[l.jsx("a",{href:"/",onClick:C=>j(C,"/"),className:g==="home"?"active-nav":"",children:"Overview"}),l.jsx("a",{href:"/services",onClick:C=>j(C,"/services"),className:g==="services"||g==="service-detail"?"active-nav":"",children:"Services"}),l.jsx("a",{href:"/work",onClick:C=>j(C,"/work"),className:g==="work"?"active-nav":"",children:"Work"}),l.jsx("a",{href:"/pricing",onClick:C=>j(C,"/pricing"),className:g==="pricing"?"active-nav":"",children:"Pricing"}),l.jsx("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services.",target:"_blank",rel:"noopener noreferrer",children:"Contact"}),l.jsxs("button",{onClick:()=>h(),className:"btn-primary",style:{padding:"0.45rem 1.1rem",fontSize:"0.82rem",marginLeft:"0.4rem",borderRadius:"50px"},children:[l.jsx("span",{children:"Start Project"}),l.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),l.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},className:"mobile-header-controls",children:l.jsx("button",{className:"mobile-nav-toggle",onClick:()=>i(!r),"aria-label":"Toggle navigation menu",children:l.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),l.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),l.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})})})]})}),r&&l.jsxs("div",{className:"mobile-menu-drawer",children:[l.jsxs("div",{className:"mobile-drawer-header",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[l.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",width:"30",height:"30"}),l.jsxs("span",{style:{fontWeight:850,fontSize:"1.1rem",letterSpacing:"-0.02em"},children:["KONE ",l.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]}),l.jsx("button",{className:"mobile-drawer-close",onClick:()=>i(!1),"aria-label":"Close navigation menu",children:l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),l.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),l.jsxs("div",{className:"mobile-drawer-links",children:[l.jsxs("a",{href:"/",className:`mobile-drawer-link ${g==="home"?"active-nav":""}`,onClick:C=>{i(!1),j(C,"/")},children:[l.jsx("span",{children:"Overview"}),l.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"01"})]}),l.jsxs("a",{href:"/services",className:`mobile-drawer-link ${g==="services"||g==="service-detail"?"active-nav":""}`,onClick:C=>{i(!1),j(C,"/services")},children:[l.jsx("span",{children:"Services"}),l.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"02"})]}),l.jsxs("a",{href:"/work",className:`mobile-drawer-link ${g==="work"?"active-nav":""}`,onClick:C=>{i(!1),j(C,"/work")},children:[l.jsx("span",{children:"Work"}),l.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"03"})]}),l.jsxs("a",{href:"/pricing",className:`mobile-drawer-link ${g==="pricing"?"active-nav":""}`,onClick:C=>{i(!1),j(C,"/pricing")},children:[l.jsx("span",{children:"Pricing"}),l.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"04"})]}),l.jsxs("a",{href:"https://wa.me/233551993820?text=Hi%20Kone%20Digital%2C%20I'd%20like%20to%20get%20in%20touch%20about%20your%20services.",target:"_blank",rel:"noopener noreferrer",className:"mobile-drawer-link",onClick:()=>i(!1),children:[l.jsx("span",{children:"Contact via WhatsApp"}),l.jsx("span",{style:{fontSize:"0.8rem",opacity:.6},children:"➔"})]})]}),l.jsx("div",{className:"mobile-drawer-footer",children:l.jsxs("button",{onClick:()=>{i(!1),h()},className:"btn-primary",style:{width:"100%",padding:"0.85rem",fontSize:"0.95rem"},children:[l.jsx("span",{children:"Start Fast-Track Project"}),l.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})})]}),l.jsx("main",{id:"main-content",style:{flex:"1 0 auto",display:"flex",flexDirection:"column",width:"100%",maxWidth:"100%",minWidth:0,overflowX:"hidden",gap:"3rem"},children:g==="service-detail"?l.jsx(x1,{slug:S,onBack:()=>{window.location.pathname!=="/services"&&window.history.pushState({},"","/services"),N(),window.scrollTo({top:0,behavior:"instant"})}}):g==="services"?l.jsx(Ql,{onSelectService:C=>{const V=`/services/${C}`;window.location.pathname!==V&&window.history.pushState({},"",V),N(),window.scrollTo({top:0,behavior:"instant"})}}):g==="work"?l.jsx(Gl,{}):g==="pricing"?l.jsx(ql,{}):l.jsxs(l.Fragment,{children:[l.jsx(dd,{onOpenWizard:()=>h()}),l.jsx(yd,{}),l.jsx(Ql,{onSelectService:C=>{const V=`/services/${C}`;window.location.pathname!==V&&window.history.pushState({},"",V),N(),window.scrollTo({top:0,behavior:"instant"})}}),l.jsx(Gl,{}),l.jsx(ql,{})]})}),l.jsx(_1,{isOpen:e,onClose:()=>t(!1),initialPhone:o.phone,initialBusinessName:o.businessName}),l.jsxs("footer",{className:"hub-footer fade-in-up",style:{marginTop:"2rem",paddingTop:"2.5rem",paddingBottom:"3.5rem",borderTop:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",flexDirection:"column",gap:"1.5rem",alignItems:"center",textAlign:"center"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsx("img",{src:"/kone-digital-logo.svg",alt:"Kone Digital Logo",className:"logo-icon neon-logo",width:"36",height:"36"}),l.jsxs("span",{className:"logo-text",style:{fontSize:"1.2rem",fontWeight:800},children:["KONE ",l.jsx("span",{className:"neon-text",children:"DIGITAL"})]})]}),l.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",maxWidth:"580px",margin:"0 auto",lineHeight:"1.6"},children:"Ghana's premier digital studio for high-performance business websites, web apps, mobile apps, desktop apps, & automated WhatsApp lead engines."}),l.jsxs("div",{style:{display:"flex",gap:"1.4rem",flexWrap:"wrap",justifyContent:"center",fontSize:"0.88rem",fontWeight:650},children:[l.jsx("a",{href:"/",onClick:C=>j(C,"/"),style:{color:"#E2E8F0",textDecoration:"none"},children:"Overview"}),l.jsx("a",{href:"/services",onClick:C=>j(C,"/services"),style:{color:"#E2E8F0",textDecoration:"none"},children:"Services"}),l.jsx("a",{href:"/work",onClick:C=>j(C,"/work"),style:{color:"#E2E8F0",textDecoration:"none"},children:"Work"}),l.jsx("a",{href:"/pricing",onClick:C=>j(C,"/pricing"),style:{color:"#E2E8F0",textDecoration:"none"},children:"Pricing"})]}),l.jsxs("div",{style:{display:"flex",gap:"1.2rem",flexWrap:"wrap",justifyContent:"center",fontSize:"0.82rem",color:"var(--text-muted)"},children:[l.jsx("a",{href:"/services/web-development",onClick:C=>j(C,"/services/web-development"),style:{color:"var(--text-muted)",textDecoration:"none"},children:"Web Development"}),l.jsx("span",{style:{opacity:.3},children:"•"}),l.jsx("a",{href:"/services/mobile-apps",onClick:C=>j(C,"/services/mobile-apps"),style:{color:"var(--text-muted)",textDecoration:"none"},children:"Mobile Apps"}),l.jsx("span",{style:{opacity:.3},children:"•"}),l.jsx("a",{href:"/services/brand-design",onClick:C=>j(C,"/services/brand-design"),style:{color:"var(--text-muted)",textDecoration:"none"},children:"Brand & UI/UX"}),l.jsx("span",{style:{opacity:.3},children:"•"}),l.jsx("a",{href:"/services/cloud-devops",onClick:C=>j(C,"/services/cloud-devops"),style:{color:"var(--text-muted)",textDecoration:"none"},children:"Cloud & DevOps"})]}),l.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center",justifyContent:"center",marginTop:"0.2rem"},children:[l.jsxs("a",{href:"https://whatsapp.com/channel/0029Vb7wdZMJUM2fepkMfR0D",target:"_blank",rel:"noopener noreferrer",title:"Join WhatsApp Channel","aria-label":"Join WhatsApp Channel",style:{background:"rgba(37, 211, 102, 0.1)",border:"1px solid rgba(37, 211, 102, 0.3)",color:"#25d366",padding:"0.45rem 1rem",borderRadius:"25px",fontSize:"0.84rem",fontWeight:700,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.45rem",transition:"all 0.2s ease"},children:[l.jsxs("svg",{viewBox:"0 0 24 24",width:"16",height:"16",style:{flexShrink:0},children:[l.jsx("path",{fill:"#25D366",d:"M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"}),l.jsx("path",{fill:"#FFFFFF",d:"M8.53 7.33c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28s-1.44-.71-1.66-.79-.38-.12-.54.12c-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06s-1.02-.38-1.94-1.2c-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.54-1.31-.74-1.79c-.2-.48-.4-.41-.55-.42l-.47-.01z"})]}),l.jsx("span",{children:"WhatsApp Channel"})]}),l.jsx("a",{href:"tel:+233551993820",title:"Call +233 55 199 3820","aria-label":"Call +233 55 199 3820",style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.15)",color:"#F8FAFC",width:"36px",height:"36px",borderRadius:"50%",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none",transition:"all 0.2s ease"},children:l.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})})]}),l.jsxs("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem",marginTop:"0.4rem"},children:["© ",new Date().getFullYear()," Kone Digital. All rights reserved."]})]}),l.jsx("a",{href:"https://wa.me/233551993820",className:"whatsapp-fab",target:"_blank",rel:"noopener noreferrer","aria-label":"Contact us on WhatsApp",children:l.jsx("svg",{viewBox:"0 0 24 24",children:l.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.132 1.38 4.788 1.381 5.069 0 9.199-4.13 9.201-9.199.001-2.454-.952-4.761-2.686-6.494-1.734-1.734-4.041-2.688-6.498-2.689-5.074 0-9.207 4.129-9.208 9.199-.001 1.73.455 3.415 1.32 4.89l-.103.16-1.11 4.054 4.151-1.089.16.095zm10.125-6.702c-.281-.141-1.664-.822-1.921-.916-.257-.094-.443-.141-.63.141-.186.281-.723.916-.885 1.102-.162.186-.324.21-.605.069-.282-.141-1.189-.439-2.264-1.401-.836-.746-1.4-1.667-1.564-1.948-.164-.282-.017-.434.124-.573.127-.125.281-.328.422-.492.141-.164.188-.281.282-.469.094-.188.047-.352-.023-.492-.07-.141-.63-1.523-.863-2.086-.226-.552-.455-.477-.63-.486-.162-.008-.349-.01-.536-.01-.188 0-.492.07-.75.352-.257.282-.984.961-.984 2.343 0 1.382 1.008 2.718 1.148 2.906.141.188 1.984 3.029 4.806 4.242.671.289 1.194.462 1.602.592.674.214 1.287.184 1.77.112.539-.081 1.664-.68 1.898-1.336.234-.656.234-1.219.164-1.336-.07-.117-.257-.188-.539-.328z"})})})]})}class C1 extends z.Component{constructor(){super(...arguments);ya(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}async componentDidCatch(t,r){console.error("Uncaught error caught by ErrorBoundary:",t,r);try{await Au(yu(Jn,"client_errors"),{appName:this.props.appName||"Kone-Digital",errorMessage:t.message,errorStack:t.stack,componentStack:r.componentStack,url:window.location.href,userAgent:navigator.userAgent,timestamp:xu()}),console.log("Error successfully logged to Firestore.")}catch(i){console.error("Failed to log error to Firestore:",i)}}render(){return this.state.hasError?l.jsxs("div",{style:{padding:"2rem",textAlign:"center",fontFamily:"system-ui, -apple-system, sans-serif",color:"#f8fafc",background:"#0a0a0f",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[l.jsx("h2",{style:{color:"#ec4899",marginBottom:"1rem",fontSize:"2rem"},children:"Oops, something went wrong."}),l.jsx("p",{style:{color:"#94a3b8",marginBottom:"2rem",maxWidth:"500px",lineHeight:"1.6"},children:this.props.fallbackMessage||"We're sorry, but an unexpected error occurred. Our engineering team has been notified. Please try refreshing the page."}),l.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"12px 24px",background:"#ec4899",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"1rem",boxShadow:"0 0 15px rgba(236, 72, 153, 0.4)"},children:"Refresh Page"})]}):this.props.children}}const Jl=document.getElementById("root");Jl&&ec(Jl).render(l.jsx(Yl.StrictMode,{children:l.jsx(C1,{children:l.jsx(b1,{children:l.jsx(A1,{})})})}));
