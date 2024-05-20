/*! For license information please see 0c693ee6b4916318d2f359be3c61e4a7.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[15791],{69635:(e,i,t)=>{t.d(i,{H:()=>s,c:()=>n});var a=t(30396);function n(e){return Math.min(Math.max(Math.ceil(e),1),6)}const s=(e,i)=>{const t=e.level?`h${e.level}`:"div";return delete e.level,(0,a.h)(t,{...e},i)}},15791:(e,i,t)=>{t.r(i),t.d(i,{calcite_tip:()=>d});var a=t(30396),n=t(39591),s=t(9615),c=t(36578),o=t(39351),r=t(69635);const l="thumbnail",d=class{constructor(e){(0,a.r)(this,e),this.calciteTipDismiss=(0,a.c)(this,"calciteTipDismiss",6),this.hideTip=()=>{this.closed=!0,this.calciteTipDismiss.emit()},this.closed=!1,this.closeDisabled=!1,this.heading=void 0,this.headingLevel=void 0,this.selected=!1,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}connectedCallback(){(0,n.c)(this),(0,c.c)(this),(0,o.c)(this)}async componentWillLoad(){await(0,o.s)(this)}disconnectedCallback(){(0,n.d)(this),(0,c.d)(this),(0,o.d)(this)}renderHeader(){const{heading:e,headingLevel:i,el:t}=this,n=t.closest("calcite-tip-manager")?.headingLevel,s=n?(0,r.c)(n+1):null,c=i||s;return e?(0,a.h)("header",{class:"header"},(0,a.h)(r.H,{class:"heading",level:c},e)):null}renderDismissButton(){const{closeDisabled:e,hideTip:i}=this;return e?null:(0,a.h)("calcite-action",{class:"close",icon:"x",onClick:i,scale:"l",text:this.messages.close})}renderImageFrame(){const{el:e}=this;return(0,s.g)(e,l)?(0,a.h)("div",{class:"image-frame",key:"thumbnail"},(0,a.h)("slot",{name:l})):null}renderInfoNode(){return(0,a.h)("div",{class:"info"},(0,a.h)("slot",null))}renderContent(){return(0,a.h)("div",{class:"content"},this.renderImageFrame(),this.renderInfoNode())}render(){return(0,a.h)(a.F,null,(0,a.h)("article",{class:"container"},this.renderHeader(),this.renderContent()),this.renderDismissButton())}static get assetsDirs(){return["assets"]}get el(){return(0,a.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};d.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;margin:1rem;box-sizing:border-box;display:flex;flex-direction:row;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}.container{inline-size:100%;padding:1rem}:host([closed]),:host([closed]) .container{display:none}:host([selected]) .container{margin:0px;border-style:none;padding:0px}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{margin-block-end:0.5rem}.header .heading{padding:0px;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-1)}.container[hidden]{display:none}.content{display:flex}.info{padding-block:0px;padding-inline:1rem;inline-size:70%}.info:only-child{inline-size:100%;padding-inline:0px}::slotted(p){margin-block-start:0px}::slotted(a){outline-color:transparent;color:var(--calcite-ui-brand)}::slotted(a:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.image-frame{inline-size:25%}.image-frame img{max-inline-size:100%}::slotted(img){max-inline-size:100%}"},39591:(e,i,t)=>{t.d(i,{c:()=>r,d:()=>l});var a=t(30396),n=t(77041);const s=new Set;let c;const o={childList:!0};function r(e){c||(c=(0,n.c)("mutation",d)),c.observe(e.el,o)}function l(e){s.delete(e.el),d(c.takeRecords()),c.disconnect();for(const[e]of s.entries())c.observe(e,o)}function d(e){e.forEach((({target:e})=>{(0,a.f)(e)}))}},39351:(e,i,t)=>{t.d(i,{c:()=>h,d:()=>m,s:()=>r,u:()=>d});var a=t(30396),n=t(36578);const s={};function c(){throw new Error("could not fetch component message bundle")}function o(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function r(e){e.defaultMessages=await l(e,e.effectiveLocale),o(e)}async function l(e,i){const{el:t}=e,o=t.tagName.toLowerCase().replace("calcite-","");return async function(e,i){const t=`${i}_${e}`;return s[t]||(s[t]=fetch((0,a.a)(`./assets/${i}/t9n/messages_${e}.json`)).then((e=>(e.ok||c(),e.json()))).catch((()=>c()))),s[t]}((0,n.g)(i,"t9n"),o)}async function d(e,i){e.defaultMessages=await l(e,i),o(e)}function h(e){e.onMessagesChange=f}function m(e){e.onMessagesChange=void 0}function f(){o(this)}}}]);