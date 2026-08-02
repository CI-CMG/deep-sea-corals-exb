System.register(["jimu-core/emotion","jimu-core","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "@emotion/react/jsx-runtime":
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/text-filters-widget/src/runtime/widget.tsx ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");

/** @jsx jsx */


function Widget(props) {
    var _a;
    const [dataSource, setDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    // runs once
    function onDataSourceCreated(ds) {
        if (ds) {
            const dataSource = ds;
            setDataSource(dataSource);
        }
        else {
            console.error('unable to create DataSource');
        }
    }
    // handle changes to filter string. update map and publish new values
    function applyFilter(filterString) {
        if (!dataSource) {
            console.warn('DataSource is not yet set. QueryParams cannot updated');
            return;
        }
        const q = filterString ? { where: filterString } : null;
        console.log('applyFilter: updating query params with', q);
        dataSource.updateQueryParams(q, props.id);
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceFilterChangeMessage(props.id, [dataSource.id]));
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget", style: { width: '100%', height: '100%', overflow: 'hidden' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0], widgetId: props.id, onDataSourceCreated: onDataSourceCreated }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AphiaIdFilter, { applyFilter: applyFilter }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DatasetIdFilter, { applyFilter: applyFilter }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SynonymFilter, { applyFilter: applyFilter }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VerbatimNameFilter, { applyFilter: applyFilter })] })] }));
}
function AphiaIdFilter(props) {
    const { applyFilter } = props;
    function onChangeHandler(evt) {
        const value = evt.target.value;
        if (value) {
            applyFilter(`AphiaID = '${value}'`);
        }
        else {
            applyFilter(null);
        }
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-input-text", { scale: 's', id: "aphia-id-tooltip", clearable: true, style: { width: '80%' }, "label-text": "Aphia ID", oncalciteInputTextChange: onChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": "aphia-id-tooltip", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "filter data by Aphia ID" }) })] }));
}
function DatasetIdFilter(props) {
    const { applyFilter } = props;
    function onChangeHandler(evt) {
        const value = evt.target.value;
        if (value) {
            applyFilter(`DatasetID = '${value}'`);
        }
        else {
            applyFilter(null);
        }
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-input-text", { scale: 's', id: "dataset-id-tooltip", clearable: true, style: { width: '80%' }, "label-text": "Dataset ID", oncalciteInputTextChange: onChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": "dataset-id-tooltip", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "filter data by Dataset ID" }) })] }));
}
function SynonymFilter(props) {
    const { applyFilter } = props;
    function onChangeHandler(evt) {
        const value = evt.target.value;
        if (value) {
            applyFilter(`Synonyms like '%${value}%'`);
        }
        else {
            applyFilter(null);
        }
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-input-text", { scale: 's', id: "synonym-tooltip", clearable: true, style: { width: '80%' }, "label-text": "Synonyms", oncalciteInputTextChange: onChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": "synonym-tooltip", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "filter data by Synonyms" }) })] }));
}
function VerbatimNameFilter(props) {
    const { applyFilter } = props;
    function onChangeHandler(evt) {
        const value = evt.target.value;
        if (value) {
            applyFilter(`VerbatimScientificName like '%${value}%'`);
        }
        else {
            applyFilter(null);
        }
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-input-text", { scale: 's', id: "verbatim-name-tooltip", clearable: true, style: { width: '80%' }, "label-text": "Verbatim Scientific Name", oncalciteInputTextChange: onChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": "verbatim-name-tooltip", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "filter data by Verbatim Scientific Name" }) })] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90ZXh0LWZpbHRlcnMtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQU1HO0FBQ3FCO0FBS3hCLFNBQVMsTUFBTSxDQUFFLEtBQStCOztJQUM3RCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQTZCLElBQUksQ0FBQztJQUU5RSxZQUFZO0lBQ1osU0FBUyxtQkFBbUIsQ0FBRSxFQUFjO1FBQzFDLElBQUksRUFBRSxFQUFFLENBQUM7WUFDUCxNQUFNLFVBQVUsR0FBRyxFQUF5QjtZQUM1QyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQztRQUM5QyxDQUFDO0lBQ0gsQ0FBQztJQUdELHFFQUFxRTtJQUNyRSxTQUFTLFdBQVcsQ0FBRSxZQUFvQjtRQUN4QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDaEIsT0FBTyxD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QUMsYUFDN0Isd0ZBQW9CLEtBQUssRUFBQyxHQUFHLEVBQzNCLEVBQUUsRUFBQyx1QkFBdUIsRUFBQyxTQUFTLFFBQ3BDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsZ0JBQWEsMEJBQTBCLEVBQzVELHdCQUF3QixFQUFFLGVBQWUsR0FDdEIsRUFDckIsMEdBQW1DLHVCQUF1QixZQUN0RCxnSUFBb0QsR0FDcEMsSUFDaEIsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy90ZXh0LWZpbHRlcnMtd2lkZ2V0L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcbiAganN4LCBEYXRhU291cmNlQ29tcG9uZW50LFxuICB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2UsIHR5cGUgRGF0YVNvdXJjZSwgTWVzc2FnZU1hbmFnZXIsIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlLFxuICB0eXBlIEFyY0dJU1F1ZXJ5UGFyYW1zXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IEZpbHRlclN0cmluZ0lucHV0IGZyb20gJy4vZmlsdGVyLXN0cmluZy1pbnB1dCdcbi8vIGltcG9ydCB7QnV0dG9uLCBEcm9wZG93biwgVGV4dElucHV0fSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IFtkYXRhU291cmNlLCBzZXREYXRhU291cmNlXSA9IHVzZVN0YXRlPFF1ZXJpYWJsZURhdGFTb3VyY2UgfCBudWxsPihudWxsKVxuXG4gIC8vIHJ1bnMgb25jZVxuICBmdW5jdGlvbiBvbkRhdGFTb3VyY2VDcmVhdGVkIChkczogRGF0YVNvdXJjZSkge1xuICAgIGlmIChkcykge1xuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRzIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcbiAgICAgIHNldERhdGFTb3VyY2UoZGF0YVNvdXJjZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIGNyZWF0ZSBEYXRhU291cmNlJylcbiAgICB9XG4gIH1cblxuXG4gIC8vIGhhbmRsZSBjaGFuZ2VzIHRvIGZpbHRlciBzdHJpbmcuIHVwZGF0ZSBtYXAgYW5kIHB1Ymxpc2ggbmV3IHZhbHVlc1xuICBmdW5jdGlvbiBhcHBseUZpbHRlciAoZmlsdGVyU3RyaW5nOiBzdHJpbmcpIHtcbiAgICBpZiAoIWRhdGFTb3VyY2UpIHtcbiAgICAgIGNvbnNvbGUud2FybignRGF0YVNvdXJjZSBpcyBub3QgeWV0IHNldC4gUXVlcnlQYXJhbXMgY2Fubm90IHVwZGF0ZWQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcTpBcmNHSVNRdWVyeVBhcmFtcyA9IGZpbHRlclN0cmluZyA/IHsgd2hlcmU6IGZpbHRlclN0cmluZyB9IDogbnVsbFxuICAgIGNvbnNvbGUubG9nKCdhcHBseUZpbHRlcjogdXBkYXRpbmcgcXVlcnkgcGFyYW1zIHdpdGgnLCBxKVxuICAgIGRhdGFTb3VyY2UudXBkYXRlUXVlcnlQYXJhbXMocSwgcHJvcHMuaWQpXG4gICAgTWVzc2FnZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdWJsaXNoTWVzc2FnZShuZXcgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UocHJvcHMuaWQsIFtkYXRhU291cmNlLmlkXSkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiamltdS13aWRnZXRcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcbiAgICAgICAgdXNlRGF0YVNvdXJjZT17cHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXX1cbiAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxuICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtvbkRhdGFTb3VyY2VDcmVhdGVkfVxuICAgICAgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBcGhpYUlkRmlsdGVyIGFwcGx5RmlsdGVyPXthcHBseUZpbHRlcn0+PC9BcGhpYUlkRmlsdGVyPlxuICAgICAgICA8RGF0YXNldElkRmlsdGVyIGFwcGx5RmlsdGVyPXthcHBseUZpbHRlcn0+PC9EYXRhc2V0SWRGaWx0ZXI+XG4gICAgICAgIDxTeW5vbnltRmlsdGVyIGFwcGx5RmlsdGVyPXthcHBseUZpbHRlcn0+PC9TeW5vbnltRmlsdGVyPlxuICAgICAgICA8VmVyYmF0aW1OYW1lRmlsdGVyIGFwcGx5RmlsdGVyPXthcHBseUZpbHRlcn0+PC9WZXJiYXRpbU5hbWVGaWx0ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmZ1bmN0aW9uIEFwaGlhSWRGaWx0ZXIgKHByb3BzOiB7IGFwcGx5RmlsdGVyOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCB9KSB7XG4gIGNvbnN0IHsgYXBwbHlGaWx0ZXIgfSA9IHByb3BzXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VIYW5kbGVyIChldnQ6Q3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldnQudGFyZ2V0IGFzIEhUTUxDYWxjaXRlSW5wdXRUZXh0RWxlbWVudCkudmFsdWVcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGFwcGx5RmlsdGVyKGBBcGhpYUlEID0gJyR7dmFsdWV9J2ApXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGx5RmlsdGVyKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxNXB4J319PlxuICAgICAgPGNhbGNpdGUtaW5wdXQtdGV4dCBzY2FsZT0ncydcbiAgICAgICAgaWQ9XCJhcGhpYS1pZC10b29sdGlwXCIgY2xlYXJhYmxlXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6ICc4MCUnfX0gbGFiZWwtdGV4dD1cIkFwaGlhIElEXCJcbiAgICAgICAgb25jYWxjaXRlSW5wdXRUZXh0Q2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9PlxuICAgICAgPC9jYWxjaXRlLWlucHV0LXRleHQ+XG4gICAgICA8Y2FsY2l0ZS10b29sdGlwIHJlZmVyZW5jZS1lbGVtZW50PVwiYXBoaWEtaWQtdG9vbHRpcFwiPlxuICAgICAgICAgICAgPHNwYW4+ZmlsdGVyIGRhdGEgYnkgQXBoaWEgSUQ8L3NwYW4+XG4gICAgICAgIDwvY2FsY2l0ZS10b29sdGlwPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIERhdGFzZXRJZEZpbHRlciAocHJvcHM6IHsgYXBwbHlGaWx0ZXI6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkIH0pIHtcbiAgY29uc3QgeyBhcHBseUZpbHRlciB9ID0gcHJvcHNcblxuICBmdW5jdGlvbiBvbkNoYW5nZUhhbmRsZXIgKGV2dDpDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2dC50YXJnZXQgYXMgSFRNTENhbGNpdGVJbnB1dFRleHRFbGVtZW50KS52YWx1ZVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgYXBwbHlGaWx0ZXIoYERhdGFzZXRJRCA9ICcke3ZhbHVlfSdgKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcHBseUZpbHRlcihudWxsKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMTVweCd9fT5cbiAgICAgIDxjYWxjaXRlLWlucHV0LXRleHQgc2NhbGU9J3MnXG4gICAgICAgIGlkPVwiZGF0YXNldC1pZC10b29sdGlwXCIgY2xlYXJhYmxlXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6ICc4MCUnfX0gbGFiZWwtdGV4dD1cIkRhdGFzZXQgSURcIlxuICAgICAgICBvbmNhbGNpdGVJbnB1dFRleHRDaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0+XG4gICAgICA8L2NhbGNpdGUtaW5wdXQtdGV4dD5cbiAgICAgIDxjYWxjaXRlLXRvb2x0aXAgcmVmZXJlbmNlLWVsZW1lbnQ9XCJkYXRhc2V0LWlkLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxzcGFuPmZpbHRlciBkYXRhIGJ5IERhdGFzZXQgSUQ8L3NwYW4+XG4gICAgICAgIDwvY2FsY2l0ZS10b29sdGlwPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFN5bm9ueW1GaWx0ZXIgKHByb3BzOiB7IGFwcGx5RmlsdGVyOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCB9KSB7XG4gIGNvbnN0IHsgYXBwbHlGaWx0ZXIgfSA9IHByb3BzXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VIYW5kbGVyIChldnQ6Q3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldnQudGFyZ2V0IGFzIEhUTUxDYWxjaXRlSW5wdXRUZXh0RWxlbWVudCkudmFsdWVcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGFwcGx5RmlsdGVyKGBTeW5vbnltcyBsaWtlICclJHt2YWx1ZX0lJ2ApXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGx5RmlsdGVyKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxNXB4J319PlxuICAgICAgPGNhbGNpdGUtaW5wdXQtdGV4dCBzY2FsZT0ncydcbiAgICAgICAgaWQ9XCJzeW5vbnltLXRvb2x0aXBcIiBjbGVhcmFibGVcbiAgICAgICAgc3R5bGU9e3t3aWR0aDogJzgwJSd9fSBsYWJlbC10ZXh0PVwiU3lub255bXNcIlxuICAgICAgICBvbmNhbGNpdGVJbnB1dFRleHRDaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0+XG4gICAgICA8L2NhbGNpdGUtaW5wdXQtdGV4dD5cbiAgICAgIDxjYWxjaXRlLXRvb2x0aXAgcmVmZXJlbmNlLWVsZW1lbnQ9XCJzeW5vbnltLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxzcGFuPmZpbHRlciBkYXRhIGJ5IFN5bm9ueW1zPC9zcGFuPlxuICAgICAgICA8L2NhbGNpdGUtdG9vbHRpcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmZ1bmN0aW9uIFZlcmJhdGltTmFtZUZpbHRlciAocHJvcHM6IHsgYXBwbHlGaWx0ZXI6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkIH0pIHtcbiAgY29uc3QgeyBhcHBseUZpbHRlciB9ID0gcHJvcHNcblxuICBmdW5jdGlvbiBvbkNoYW5nZUhhbmRsZXIgKGV2dDpDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2dC50YXJnZXQgYXMgSFRNTENhbGNpdGVJbnB1dFRleHRFbGVtZW50KS52YWx1ZVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgYXBwbHlGaWx0ZXIoYFZlcmJhdGltU2NpZW50aWZpY05hbWUgbGlrZSAnJSR7dmFsdWV9JSdgKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcHBseUZpbHRlcihudWxsKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMTVweCd9fT5cbiAgICAgIDxjYWxjaXRlLWlucHV0LXRleHQgc2NhbGU9J3MnXG4gICAgICAgIGlkPVwidmVyYmF0aW0tbmFtZS10b29sdGlwXCIgY2xlYXJhYmxlXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6ICc4MCUnfX0gbGFiZWwtdGV4dD1cIlZlcmJhdGltIFNjaWVudGlmaWMgTmFtZVwiXG4gICAgICAgIG9uY2FsY2l0ZUlucHV0VGV4dENoYW5nZT17b25DaGFuZ2VIYW5kbGVyfT5cbiAgICAgIDwvY2FsY2l0ZS1pbnB1dC10ZXh0PlxuICAgICAgPGNhbGNpdGUtdG9vbHRpcCByZWZlcmVuY2UtZWxlbWVudD1cInZlcmJhdGltLW5hbWUtdG9vbHRpcFwiPlxuICAgICAgICAgIDxzcGFuPmZpbHRlciBkYXRhIGJ5IFZlcmJhdGltIFNjaWVudGlmaWMgTmFtZTwvc3Bhbj5cbiAgICAgICAgPC9jYWxjaXRlLXRvb2x0aXA+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=