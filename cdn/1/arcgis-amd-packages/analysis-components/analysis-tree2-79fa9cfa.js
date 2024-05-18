define(["exports","./index-86304dcd","./utils-2b3d82c1"],(function(e,t,s){"use strict";const a=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisTreeValueChange=t.createEvent(this,"analysisTreeValueChange",7),this.treeItemsOpen=new Set,this.handleMutations=e=>{e.forEach((e=>{if("attributes"===e.type&&"expanded"===e.attributeName){const t=e.target;"key"in t.dataset&&void 0!==t.dataset.key&&this.treeItemsOpen.has(t.dataset.key)!==t.expanded&&this.toggleTreeItem(t.dataset.key)}}))},this.toggleTreeItem=e=>{this.treeItemsOpen.has(e)?this.treeItemsOpen.delete(e):this.treeItemsOpen.add(e),this.buildJSXTree()},this.data={},this.value=void 0,this.renderedTree=[]}onDataChange(){this.setupComponent()}componentWillLoad(){this.setupComponent()}componentDidLoad(){this.setupObserver()}disconnectedCallback(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}setupComponent(){this.treeItemsOpen.clear(),this.buildJSXTree()}setupObserver(){var e;this.observer=new MutationObserver(this.handleMutations);const t=null!==(e=this.hostElement.shadowRoot)&&void 0!==e?e:this.hostElement;this.observer.observe(t,{attributes:!0,subtree:!0,attributeFilter:["expanded"]})}buildJSXTree(){const e=t=>{const s=[];for(const a in t){const i=t[a];let n;"object"==typeof i&&(n=this.treeItemsOpen.has(a)?e(i):[this.createTreeItem("placeholder","placeholder")]);const r="object"==typeof i?a:i;s.push(this.createTreeItem(a,r,n))}return s};this.renderedTree=e(this.data)}createTreeItem(e,s,a){return t.h("calcite-tree-item",{key:`${e}-item`,"data-key":e,selected:this.value===e,"aria-selected":this.value===e,expanded:this.treeItemsOpen.has(e),"aria-expanded":this.treeItemsOpen.has(e),onClick:void 0!==a?()=>this.toggleTreeItem(e):void 0},s,void 0!==a&&t.h("calcite-tree",{key:`${e}-child-tree`,slot:"children"},a))}handleTreeSelect(e){var t,s;const a=e.target,i=null===(t=null==a?void 0:a.selectedItems[0])||void 0===t?void 0:t.dataset.key;if(void 0!==i)if(!0===i.includes("placeholder")){const e=null===(s=null==a?void 0:a.selectedItems[0].parentElement)||void 0===s?void 0:s.dataset.key;void 0!==e&&this.treeItemsOpen.add(e),this.buildJSXTree()}else this.value=i,this.analysisTreeValueChange.emit()}render(){return t.h(t.Host,null,t.h("div",null,t.h("calcite-tree",{key:"base-tree",scale:s.UIDefaults.Scale,onCalciteTreeSelect:e=>this.handleTreeSelect(e)},this.renderedTree)))}get hostElement(){return this}static get watchers(){return{data:["onDataChange"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:var(--calcite-ui-border-2);--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height:30vh;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{overflow-y:auto;overflow-x:hidden;scroll-behavior:smooth;height:100%;width:100%}"}},[1,"analysis-tree",{data:[16],value:[1537],renderedTree:[32]}]);function i(){"undefined"!=typeof customElements&&["analysis-tree"].forEach((e=>{"analysis-tree"===e&&(customElements.get(e)||customElements.define(e,a))}))}i(),e.AnalysisTree=a,e.defineCustomElement=i}));