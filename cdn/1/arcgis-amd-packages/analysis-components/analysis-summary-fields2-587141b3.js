define(["exports","./index-86304dcd","./index2-600fb1b2","./utils-2b3d82c1","./analysis-chip-group2-2361bfef","./analysis-label2-b880686f","./analysis-summary-fields-popover2-71590aef"],(function(e,s,i,t,a,l,o){"use strict";const r=s.proxyCustomElement(class extends s.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisSummaryFieldsChange=s.createEvent(this,"analysisSummaryFieldsChange",7),this.analysisHelpClick=s.createEvent(this,"analysisHelpClick",7),this.valueMap=new Map,this.useInitialSelectedStatistics=!1,this.selection=new Set,this.updateValueMap=(e,s)=>{var i;if(!1===this.valueMap.has(e))this.valueMap.set(e,[s]);else{const t=null!==(i=this.valueMap.get(e))&&void 0!==i?i:[];!1===t.includes(s)&&(t.push(s),this.valueMap.set(e,t))}},this.popoverAction=()=>{this.fieldPopoverOpen=!0,!0===this.fieldPopoverOpen?this.createSummaryFieldsPopover():void 0!==this.summaryFieldsPopover&&(this.summaryFieldsPopover.open=!1,this.validate())},this.createSummaryFieldsPopover=()=>{void 0===this.summaryFieldsPopover&&(this.summaryFieldsPopover=document.createElement("analysis-summary-fields-popover"),this.summaryFieldsPopover.addEventListener("analysisSummaryFieldSelectionDone",this.onAnalysisSummaryFieldSelectionDone),this.summaryFieldsPopover.addEventListener("analysisSummaryFieldPopoverClose",this.closePopover)),!1===document.body.contains(this.summaryFieldsPopover)&&(document.body.appendChild(this.summaryFieldsPopover),this.summaryFieldsPopover.open=!0),this.summaryFieldsPopover.referenceElement=this.fieldButton,this.summaryFieldsPopover.open=!0,this.summaryFieldsPopover.layer=this.layer,this.summaryFieldsPopover.usePopupTemplatesInfo=this.usePopupTemplatesInfo,this.summaryFieldsPopover.selection=new Set(this.selection.keys()),this.summaryFieldsPopover.allowDateType=this.allowDateType,this.summaryFieldsPopover.allowStringType=this.allowStringType,this.summaryFieldsPopover.allowBigIntType=this.allowBigIntType,this.summaryFieldsPopover.layerInputLocalizedLabel=this.layerInputLocalizedLabel,this.summaryFieldsPopover.noFieldsText=this.noFieldsText,this.summaryFieldsPopover.noLayersText=this.noLayersText,this.summaryFieldsPopover.showFieldDescription=this.showFieldDescription},this.closePopover=()=>{var e;void 0!==this.summaryFieldsPopover&&!0===document.body.contains(this.summaryFieldsPopover)&&(document.body.removeChild(this.summaryFieldsPopover),null===(e=this.summaryFieldsPopover)||void 0===e||e.remove(),this.summaryFieldsPopover=void 0,this.fieldPopoverOpen=!1)},this.onAnalysisSummaryFieldSelectionDone=e=>{this.selection=e.detail,this.fieldPopoverOpen=!1,0===this.selection.size?(this.valueMap=new Map,this.value=void 0):(Array.from(this.valueMap.keys()).map((e=>{!1===this.selection.has(e)&&this.removeFromValueMap(e)})),Array.from(this.selection).map((e=>{const s=this.layer.fieldsIndex.get(e),{statistics:i}=this.updateStatisticTypes(s.type);this.useInitialSelectedStatistics=!0,!1===this.valueMap.has(e)&&this.updateValueMap(s.name,i[0])})),this.updateValue()),this.analysisSummaryFieldsChange.emit(),this.validate()},this.onAnalysisChipGroupSelectionChange=e=>{var s;const i=e.target,t=i.selectedChips,a=i.parentElement,l=null!==(s=a.description)&&void 0!==s?s:a.id;!0===this.useInitialSelectedStatistics&&(this.useInitialSelectedStatistics=!1),this.valueMap.set(l,t),this.updateValue(),this.analysisSummaryFieldsChange.emit()},this.closeField=e=>{const s=e.target.parentElement.id;if(this.selection.delete(s),this.removeFromValueMap(s),void 0!==this.value){let e;e="string"===this.valueFormat?this.value.filter((e=>e.split(" ")[0]!==s)):this.value.filter((e=>e.onStatisticField!==s)),this.value=[...e],this.analysisSummaryFieldsChange.emit()}this.validate()},this.validate=()=>{var e,s;this.errorMessage=void 0;const i=!this.required||this.valueMap.size>0,t=Array.from(this.valueMap.values()).every((e=>e.length>0));i&&t||(this.errorMessage=null!==(s=null===(e=this.validationParams)||void 0===e?void 0:e.requiredMessage)&&void 0!==s?s:this.strings.isRequired)},this.renderErrorMessage=()=>void 0!==this.errorMessage?s.h("calcite-input-message",{status:i.UIInputStatus.INVALID,scale:t.UIDefaults.Scale,icon:"exclamationMarkTriangle"},this.errorMessage):null,this.renderFields=()=>{const e=Object.assign({badInputMessage:this.strings.statisticNotSelected},this.validationParams);return s.h("calcite-list",null,[...this.valueMap.keys()].map((i=>{var t,a;const l=this.layer.fieldsIndex.get(i),o=null!==(t=null==l?void 0:l.alias)&&void 0!==t?t:i,r=this.valueMap.get(i),{statistics:n,labels:h}=this.updateStatisticTypes(null!==(a=null==l?void 0:l.type)&&void 0!==a?a:"integer");return s.h("calcite-list-item",{class:"calcite-list-item",label:o,key:i,id:i,description:null==l?void 0:l.name},s.h("analysis-chip-group",{onAnalysisChipGroupSelectionChange:this.onAnalysisChipGroupSelectionChange,required:!0,scale:"s",class:"calcite-chip",chipLabel:h,value:n,label:this.strings.statistic,selectionMode:"multi",selectAllEnabled:!0,initialChipSelection:this.useInitialSelectedStatistics?r:[],selectedChips:r,validationParams:e}),s.h("calcite-action",{text:"",slot:"actions-end",icon:"trash",onClick:this.closeField}))})))},this.layer=void 0,this.label=void 0,this.valueFormat=void 0,this.value=void 0,this.required=!1,this.usePopupTemplatesInfo=!0,this.allowDateType=!1,this.allowStringType=!1,this.allowBigIntType=!1,this.showFirstLastStatistics=!1,this.validationParams=void 0,this.layerInputLocalizedLabel=void 0,this.noFieldsText=void 0,this.noLayersText=void 0,this.showFieldDescription=!1,this.fieldPopoverOpen=!1,this.errorMessage=void 0}valueChange(){var e;this.valueFormat=void 0!==this.value&&this.value.length>0&&"object"==typeof this.value[0]?"object":null!==(e=this.valueFormat)&&void 0!==e?e:"string",void 0!==this.value&&0===this.valueMap.size&&void 0!==this.valueFormat&&(this.selection=new Set,this.value.forEach((e=>{let s,i;if("string"===this.valueFormat){const t=e.split(" ");s=t[0],i=t[1]}else s=e.onStatisticField,i=e.statisticType;this.updateValueMap(s,i),this.selection.add(s)})))}async layerChange(e,s){var t;if(void 0!==e&&void 0===s&&!1===this.useInitialSelectedStatistics&&void 0!==this.value?(this.valueChange(),this.useInitialSelectedStatistics=!0):(this.valueMap=new Map,this.selection=new Set,void 0!==s&&(this.value=void 0,this.analysisSummaryFieldsChange.emit())),!1===(null==e?void 0:e.loaded)){null===(t=this.abortController)||void 0===t||t.abort();try{this.abortController=new AbortController,await(null==e?void 0:e.load(this.abortController.signal))}catch(e){i.wasAborted(e)||(this.errorMessage=this.strings.fieldLoadingErrorText)}}this.closePopover()}disconnectedCallback(){this.closePopover()}async componentWillLoad(){({strings:this.strings}=await i.fetchComponentLocaleStrings(this.hostElement,s.getAssetPath("."))),void 0===this.layer&&void 0===this.usePopupTemplatesInfo||await this.layerChange(this.layer),void 0!==this.layer&&void 0!==this.value&&(this.valueChange(),this.useInitialSelectedStatistics=!0)}async checkValidity(){return this.validate(),Promise.resolve(void 0===this.errorMessage)}updateValue(){const e=[];this.valueMap.forEach(((s,i)=>{s.forEach((s=>{let t;"string"===this.valueFormat?(t=`${i} ${s}`,e.push(t)):(t={onStatisticField:i,statisticType:s},e.push(t))}))})),this.value=[...e]}removeFromValueMap(e){const s=this.valueMap;s.delete(e),this.valueMap=new Map(s)}updateStatisticTypes(e){let s=[],a=[];return!0===i.isNumericField(e)?(s=[t.StatisticType.Sum,t.StatisticType.Minimum,t.StatisticType.Maximum,t.StatisticType.Mean,t.StatisticType.StdDev],a=[this.strings.sum,this.strings.min,this.strings.max,this.strings.mean,this.strings.standardDeviation]):"date"===e&&!0===this.allowDateType?(s=[t.StatisticType.Minimum,t.StatisticType.Maximum],a=[this.strings.min,this.strings.max]):"string"===e&&!0===this.allowStringType&&(s=[t.StatisticType.Any,t.StatisticType.Count],a=[this.strings.any,this.strings.count]),!0===this.showFirstLastStatistics&&(s=[...s,t.StatisticType.First,t.StatisticType.Last],a=[...a,this.strings.first,this.strings.last]),{statistics:s,labels:a}}render(){return s.h(s.Host,null,void 0!==this.label&&""!==this.label?s.h("analysis-label",{label:this.label,required:this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit()}):null,void 0!==this.valueMap&&this.valueMap.size>0&&this.renderFields(),s.h("calcite-button",{appearance:"outline",kind:"neutral","icon-start":"plus",round:!0,width:"full",scale:t.UIDefaults.Scale,ref:e=>{this.fieldButton=e},onClick:this.popoverAction},this.strings.field),this.renderErrorMessage())}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get watchers(){return{value:["valueChange"],layer:["layerChange"],usePopupTemplatesInfo:["layerChange"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:var(--calcite-ui-border-2);--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height:30vh;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex;flex-direction:column;margin-bottom:var(--analysis-half-spacing)}.label{margin-top:0}.calcite-chip{margin:var(--analysis-quarter-spacing)}.calcite-list-item{border:2px solid var(--calcite-ui-border-1);margin-bottom:var(--analysis-quarter-spacing);margin-top:var(--analysis-quarter-spacing);border-radius:var(--analysis-quarter-spacing);overflow:hidden}.calcite-switch{border:2px solid var(--calcite-ui-border-1);margin-bottom:var(--analysis-quarter-spacing);margin-top:var(--analysis-quarter-spacing);padding:var(--analysis-quarter-spacing);padding-top:var(--analysis-three-quarter-spacing);border-radius:var(--analysis-quarter-spacing);overflow:hidden}"}},[1,"analysis-summary-fields",{layer:[16],label:[513],valueFormat:[1537,"value-format"],value:[1040],required:[516],usePopupTemplatesInfo:[516,"use-popup-templates-info"],allowDateType:[516,"allow-date-type"],allowStringType:[516,"allow-string-type"],allowBigIntType:[516,"allow-big-int-type"],showFirstLastStatistics:[516,"show-first-last-statistics"],validationParams:[16],layerInputLocalizedLabel:[1,"layer-input-localized-label"],noFieldsText:[1,"no-fields-text"],noLayersText:[1,"no-layers-text"],showFieldDescription:[4,"show-field-description"],fieldPopoverOpen:[32],errorMessage:[32],checkValidity:[64]}]);function n(){"undefined"!=typeof customElements&&["analysis-summary-fields","analysis-chip-group","analysis-label","analysis-summary-fields-popover"].forEach((e=>{switch(e){case"analysis-summary-fields":customElements.get(e)||customElements.define(e,r);break;case"analysis-chip-group":customElements.get(e)||a.defineCustomElement();break;case"analysis-label":customElements.get(e)||l.defineCustomElement();break;case"analysis-summary-fields-popover":customElements.get(e)||o.defineCustomElement()}}))}n(),e.AnalysisSummaryFields=r,e.defineCustomElement=n}));