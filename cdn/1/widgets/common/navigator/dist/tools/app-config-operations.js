System.register(["jimu-core"],(function(e,i){var t={};return{setters:[function(e){t.AppMode=e.AppMode,t.appConfigUtils=e.appConfigUtils,t.defaultMessages=e.defaultMessages,t.getAppStore=e.getAppStore,t.i18n=e.i18n}],execute:function(){e((()=>{"use strict";var e={79244:e=>{e.exports=t}},i={};function o(t){var n=i[t];if(void 0!==n)return n.exports;var l=i[t]={exports:{}};return e[t](l,l.exports,o),l.exports}o.d=(e,i)=>{for(var t in i)o.o(i,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},o.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};o.r(n),o.d(n,{default:()=>r});var l=o(79244);class r{constructor(){this.id="query-app-config-operation"}afterWidgetCopied(e,i,t,o,n){var l,r,d,s,a,u,v;if(!n)return o;const p=i.widgets[e],c=null==p?void 0:p.config,f=(null==n?void 0:n[null===(l=null==c?void 0:c.data)||void 0===l?void 0:l.section])||(null===(r=null==c?void 0:c.data)||void 0===r?void 0:r.section),g=null===(a=null===(d=null==i?void 0:i.sections)||void 0===d?void 0:d[null===(s=null==c?void 0:c.data)||void 0===s?void 0:s.section])||void 0===a?void 0:a.views,w=null===(v=null===(u=null==o?void 0:o.sections)||void 0===u?void 0:u[f])||void 0===v?void 0:v.views,y=[];null==g||g.forEach(((e,i)=>{var t,o;(null===(o=null===(t=null==c?void 0:c.data)||void 0===t?void 0:t.views)||void 0===o?void 0:o.includes(e))&&(null==w?void 0:w[i])&&y.push(w[i])}));return o.setIn(["widgets",t,"config","data","section"],f).setIn(["widgets",t,"config","data","views"],y)}widgetWillRemove(e){return e}anyWidgetWillRemove(e,i){if(!window.jimuConfig.isInBuilder||(0,l.getAppStore)().getState().appRuntimeInfo.appMode!==l.AppMode.Express)return e;let t;if(Object.keys(e.views||{}).forEach((o=>{var n;Object.values((null===(n=e.views[o])||void 0===n?void 0:n.layout)||{}).forEach((n=>{var l;Object.values((null===(l=e.layouts[n])||void 0===l?void 0:l.content)||{}).forEach((e=>{e.widgetId===i&&(t=o)}))}))})),t){if(e.views[t].icon){const i=l.i18n.getIntl();return e.setIn(["views",t],e.views[t].set("icon",null).set("label",l.appConfigUtils.getUniqueLabel(e,"view",i.formatMessage({id:"view",defaultMessage:l.defaultMessages.view}))))}}return e}}return n})())}}}));