"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[20981],{20981:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var a=t(47817),s=(t(58574),t(11115)),i=t(89300),o=t(94882);function n(e){return e.features.map((r=>{const t=a.O.fromJSON(e.spatialReference),s=a.an.fromJSON(r);return(0,a.I)(s.geometry).spatialReference=t,s}))}function l(e){return e.features.map((r=>(r.geometry.spatialReference=e.spatialReference,(0,a.J)(r.geometry))))}t(68700),t(72571);let u=class extends a.ao{constructor(e){super(e),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(e){return l(e)}readPointBarriers(e,r){return l(r.barriers)}readPolylineBarriers(e){return l(e)}readPolygonBarriers(e){return l(e)}readIncidents(e,r){return n(r.saPolylines)}readServiceAreaPolygons(e,r){return n(r.saPolygons)}};(0,a.Z)([(0,a._)({type:[a.q]})],u.prototype,"facilities",void 0),(0,a.Z)([(0,a.ab)("facilities")],u.prototype,"readFacilities",null),(0,a.Z)([(0,a._)({type:[o.a]})],u.prototype,"messages",void 0),(0,a.Z)([(0,a._)({type:[a.q]})],u.prototype,"pointBarriers",void 0),(0,a.Z)([(0,a.ab)("pointBarriers",["barriers"])],u.prototype,"readPointBarriers",null),(0,a.Z)([(0,a._)({type:[a.v]})],u.prototype,"polylineBarriers",void 0),(0,a.Z)([(0,a.ab)("polylineBarriers")],u.prototype,"readPolylineBarriers",null),(0,a.Z)([(0,a._)({type:[a.x]})],u.prototype,"polygonBarriers",void 0),(0,a.Z)([(0,a.ab)("polygonBarriers")],u.prototype,"readPolygonBarriers",null),(0,a.Z)([(0,a._)({type:[a.an]})],u.prototype,"serviceAreaPolylines",void 0),(0,a.Z)([(0,a.ab)("serviceAreaPolylines",["saPolylines"])],u.prototype,"readIncidents",null),(0,a.Z)([(0,a._)({type:[a.an]})],u.prototype,"serviceAreaPolygons",void 0),(0,a.Z)([(0,a.ab)("serviceAreaPolygons",["saPolygons"])],u.prototype,"readServiceAreaPolygons",null),u=(0,a.Z)([(0,a.a0)("esri.tasks.support.ServiceAreaSolveResult")],u);var p=u;const c=(0,o.o)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});let y=class extends((0,o.b)(s.p)){constructor(e){super(e),this.url=null}solve(e,r){return async function(e,r,t){const n=[],l=[],u={},y={},f=(0,s.r)(e);return r.facilities&&r.facilities.features&&(0,o.l)(r.facilities.features,l,"facilities.features",u),r.pointBarriers&&r.pointBarriers.features&&(0,o.l)(r.pointBarriers.features,l,"pointBarriers.features",u),r.polylineBarriers&&r.polylineBarriers.features&&(0,o.l)(r.polylineBarriers.features,l,"polylineBarriers.features",u),r.polygonBarriers&&r.polygonBarriers.features&&(0,o.l)(r.polygonBarriers.features,l,"polygonBarriers.features",u),(0,i.L)(l).then((e=>{for(const r in u){const t=u[r];n.push(r),y[r]=e.slice(t[0],t[1])}return(0,o.u)(y,n)?(0,o.d)(f.path).catch((()=>({dontCheck:!0}))):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||(0,o.n)(y,n);for(const e in y)y[e].forEach(((t,a)=>{r.get(e)[a].geometry=t}));let s={query:{...f.query,f:"json",...c.toQueryParams(r)}};return t&&(s={...t,...s}),(0,a.U)(`${f.path}/solveServiceArea`,s)})).then((e=>p.fromJSON(e.data)))}(this.url,e,r)}};(0,a.Z)([(0,a._)()],y.prototype,"url",void 0),y=(0,a.Z)([(0,a.a0)("esri.tasks.ServiceAreaTask")],y);const f=y}}]);