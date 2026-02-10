System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/h3-layer/src/setting/setting.tsx ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */

// import {JimuMapViewSelector} from 'jimu-ui/advanced/setting-components'



function Setting(props) {
    const supportedTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]);
    const onMapSelected = (useMapWidgetIds) => {
        props.onSettingChange({
            id: props.id,
            useMapWidgetIds: useMapWidgetIds
        });
    };
    const onDataSourceChange = (useDataSources) => {
        // console.log({ useDataSources })
        props.onSettingChange({
            id: props.id,
            useDataSources: useDataSources
        });
    };
    const onLayerNameChange = (event) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('layerName', event.target.value)
        });
    };
    const onSidePanelChange = (event) => {
        // console.log(event)
        props.onSettingChange({
            id: props.id,
            config: props.config.set('sidePanelId', event.target.value)
        });
    };
    const onOcisWidgetIdChange = (event) => {
        // console.log(event)
        props.onSettingChange({
            id: props.id,
            config: props.config.set('ocisWidgetId', event.target.value)
        });
    };
    const onSectionChange = (event) => {
        // console.log(event)
        props.onSettingChange({
            id: props.id,
            config: props.config.set('sectionId', event.target.value)
        });
    };
    const onDetailsViewChange = (event) => {
        // console.log(event)
        props.onSettingChange({
            id: props.id,
            config: props.config.set('detailsViewId', event.target.value)
        });
    };
    const onSummaryViewChange = (event) => {
        // console.log(event)
        props.onSettingChange({
            id: props.id,
            config: props.config.set('summaryViewId', event.target.value)
        });
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'widget-setting-demo p-3' },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Map" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { onSelect: onMapSelected, useMapWidgetIds: props.useMapWidgetIds }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Corals DataSource" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { mustUseDataSource: true, types: supportedTypes, useDataSources: props.useDataSources, onChange: onDataSourceChange, widgetId: props.id }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "FeatureLayer Name" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { type: "text", placeholder: "layer name", htmlSize: 28, value: props.config.layerName, onChange: onLayerNameChange }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Sidepane Widget" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { type: "text", placeholder: "widgetId", htmlSize: 28, value: props.config.sidePanelId, onChange: onSidePanelChange }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "OCIS Widget" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { type: "text", placeholder: "widgetId", htmlSize: 28, value: props.config.ocisWidgetId, onChange: onOcisWidgetIdChange }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Section" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { type: "text", placeholder: "sectionId", htmlSize: 28, value: props.config.sectionId, onChange: onSectionChange }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Details View" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { type: "text", placeholder: "viewId", htmlSize: 28, value: props.config.detailsViewId, onChange: onDetailsViewChange }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Summary View" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { type: "text", placeholder: "viewId", htmlSize: 28, value: props.config.summaryViewId, onChange: onSummaryViewChange })))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9oMy1sYXllci9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm5ELGVBQWU7QUFDdUU7QUFFdEYsMEVBQTBFO0FBQ0E7QUFDeUI7QUFDaEU7QUFHcEIsU0FBUyxPQUFPLENBQUUsS0FBc0M7SUFDckUsTUFBTSxjQUFjLEdBQUcsb0RBQVMsQ0FBQyxDQUFDLHNEQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFaEUsTUFBTSxhQUFhLEdBQUcsQ0FBQyxlQUF5QixFQUFFLEVBQUU7UUFDbEQsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUNwQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDWixlQUFlLEVBQUUsZUFBZTtTQUNqQyxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxjQUErQixFQUFFLEVBQUU7UUFDN0Qsa0NBQWtDO1FBQ2xDLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEIsRUFBRSxFQUFF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LEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsR0FBRyxDQUNsSCxDQUNFO1FBQ2pCLCtDQUFDLCtFQUFjLElBQUMsS0FBSyxFQUFDLGNBQWM7WUFDbEMsK0NBQUMsMkVBQVU7Z0JBQ1QsK0NBQUMsOENBQVMsSUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixHQUFHLENBQ2xILENBQ0UsQ0FFYixDQUNMO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9oMy1sYXllci9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCwgSW1tdXRhYmxlLCBEYXRhU291cmNlVHlwZXMsIHR5cGUgVXNlRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbi8vIGltcG9ydCB7SmltdU1hcFZpZXdTZWxlY3Rvcn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJ1xuaW1wb3J0IHsgTWFwV2lkZ2V0U2VsZWN0b3IsIFNldHRpbmdTZWN0aW9uLCBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZyAocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBJbW11dGFibGUoW0RhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXJdKVxuXG4gIGNvbnN0IG9uTWFwU2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogcHJvcHMuaWQsXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkc1xuICAgIH0pXG4gIH1cblxuICBjb25zdCBvbkRhdGFTb3VyY2VDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHsgdXNlRGF0YVNvdXJjZXMgfSlcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IG9uTGF5ZXJOYW1lQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogcHJvcHMuaWQsXG4gICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoJ2xheWVyTmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25TaWRlUGFuZWxDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgnc2lkZVBhbmVsSWQnLCBldmVudC50YXJnZXQudmFsdWUpXG4gICAgfSlcbiAgfVxuICBjb25zdCBvbk9jaXNXaWRnZXRJZENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudClcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdvY2lzV2lkZ2V0SWQnLCBldmVudC50YXJnZXQudmFsdWUpXG4gICAgfSlcbiAgfVxuICBjb25zdCBvblNlY3Rpb25DaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpXG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLnNldCgnc2VjdGlvbklkJywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH0pXG4gIH1cbiAgY29uc3Qgb25EZXRhaWxzVmlld0NoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudClcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdkZXRhaWxzVmlld0lkJywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH0pXG4gIH1cbiAgY29uc3Qgb25TdW1tYXJ5Vmlld0NoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudClcbiAgICBwcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KCdzdW1tYXJ5Vmlld0lkJywgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQtc2V0dGluZy1kZW1vIHAtMyc+XG4gICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiTWFwXCI+XG4gICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yIG9uU2VsZWN0PXtvbk1hcFNlbGVjdGVkfSB1c2VNYXBXaWRnZXRJZHM9e3Byb3BzLnVzZU1hcFdpZGdldElkc30vPlxuICAgICAgPC9TZXR0aW5nUm93PlxuICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJDb3JhbHMgRGF0YVNvdXJjZVwiPlxuICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcbiAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxuICAgICAgICAgIHR5cGVzPXtzdXBwb3J0ZWRUeXBlc31cbiAgICAgICAgICB1c2VEYXRhU291cmNlcz17cHJvcHMudXNlRGF0YVNvdXJjZXN9XG4gICAgICAgICAgb25DaGFuZ2U9e29uRGF0YVNvdXJjZUNoYW5nZX1cbiAgICAgICAgICB3aWRnZXRJZD17cHJvcHMuaWR9XG4gICAgICAgIC8+XG4gICAgICA8L1NldHRpbmdSb3c+XG4gICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJGZWF0dXJlTGF5ZXIgTmFtZVwiPlxuICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgIDxUZXh0SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImxheWVyIG5hbWVcIiBodG1sU2l6ZT17Mjh9IHZhbHVlPXtwcm9wcy5jb25maWcubGF5ZXJOYW1lfSBvbkNoYW5nZT17b25MYXllck5hbWVDaGFuZ2V9Lz5cbiAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIlNpZGVwYW5lIFdpZGdldFwiPlxuICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgIDxUZXh0SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIndpZGdldElkXCIgaHRtbFNpemU9ezI4fSB2YWx1ZT17cHJvcHMuY29uZmlnLnNpZGVQYW5lbElkfSBvbkNoYW5nZT17b25TaWRlUGFuZWxDaGFuZ2V9Lz5cbiAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIk9DSVMgV2lkZ2V0XCI+XG4gICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgPFRleHRJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwid2lkZ2V0SWRcIiBodG1sU2l6ZT17Mjh9IHZhbHVlPXtwcm9wcy5jb25maWcub2Npc1dpZGdldElkfSBvbkNoYW5nZT17b25PY2lzV2lkZ2V0SWRDaGFuZ2V9Lz5cbiAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIlNlY3Rpb25cIj5cbiAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICA8VGV4dElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJzZWN0aW9uSWRcIiBodG1sU2l6ZT17Mjh9IHZhbHVlPXtwcm9wcy5jb25maWcuc2VjdGlvbklkfSBvbkNoYW5nZT17b25TZWN0aW9uQ2hhbmdlfS8+XG4gICAgICA8L1NldHRpbmdSb3c+XG4gICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJEZXRhaWxzIFZpZXdcIj5cbiAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICA8VGV4dElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ2aWV3SWRcIiBodG1sU2l6ZT17Mjh9IHZhbHVlPXtwcm9wcy5jb25maWcuZGV0YWlsc1ZpZXdJZH0gb25DaGFuZ2U9e29uRGV0YWlsc1ZpZXdDaGFuZ2V9Lz5cbiAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIlN1bW1hcnkgVmlld1wiPlxuICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgIDxUZXh0SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInZpZXdJZFwiIGh0bWxTaXplPXsyOH0gdmFsdWU9e3Byb3BzLmNvbmZpZy5zdW1tYXJ5Vmlld0lkfSBvbkNoYW5nZT17b25TdW1tYXJ5Vmlld0NoYW5nZX0vPlxuICAgICAgPC9TZXR0aW5nUm93PlxuICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgPC9kaXY+XG4gIClcbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=