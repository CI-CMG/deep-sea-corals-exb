"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[93217],{93217:(e,t,s)=>{s.r(t),s.d(t,{execute:()=>n});var a=s(20403);let r;function n(e,t){let s=t.responseType;s?"array-buffer"!==s&&"blob"!==s&&"json"!==s&&"native"!==s&&"native-request-init"!==s&&"text"!==s&&(s="text"):s="json",t.responseType=s;const n=t.signal;return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:n}).then((async l=>{let i,o,u,c,b;if(l.data)if(l.data instanceof ArrayBuffer){if(!("json"!==s&&"text"!==s&&"blob"!==s||(i=new Blob([l.data]),"json"!==s&&"text"!==s||(r||(r=new FileReaderSync),c=r.readAsText(i),"json"!==s)))){try{o=JSON.parse(c||null)}catch(s){const r={...s,url:e,requestOptions:t};throw new a.s("request:server",s.message,r)}if(o.error){const s={...o.error,url:e,requestOptions:t};throw new a.s("request:server",o.error.message,s)}}}else"native"===s&&(l.data.signal=n,u=await fetch(l.data.url,l.data),l.httpStatus=u.status);switch(s){case"blob":b=i;break;case"json":b=o;break;case"native":b=u;break;case"text":b=c;break;default:b=l.data}return{data:b,httpStatus:l.httpStatus,requestOptions:t,ssl:l.ssl,url:e}}))}}}]);