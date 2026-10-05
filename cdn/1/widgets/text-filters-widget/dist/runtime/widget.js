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
    console.log('rendering text-filters-widget with props', props);
    const [dataSource, setDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [aphiaIdFilterString, setAphiaIdFilterString] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [datasetIdFilterString, setDatasetIdFilterString] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [synonymFilterString, setSynonymFilterString] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [verbatimNameFilterString, setVerbatimNameFilterString] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [catalogNumberFilterString, setCatalogNumberFilterString] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
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
    if (dataSource) {
        const filterString = [aphiaIdFilterString, datasetIdFilterString, synonymFilterString, verbatimNameFilterString, catalogNumberFilterString].filter(v => !!v).join(' AND ');
        const q = { where: filterString || null };
        console.log('applyFilter: updating query params with', q);
        dataSource.updateQueryParams(q, props.id);
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceFilterChangeMessage(props.id, [dataSource.id]));
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget", style: { width: '100%', height: '100%', overflow: 'hidden' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0], widgetId: props.id, onDataSourceCreated: onDataSourceCreated }), dataSource ?
                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AphiaIdFilter, { setFilterString: setAphiaIdFilterString }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DatasetIdFilter, { setFilterString: setDatasetIdFilterString }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SynonymFilter, { setFilterString: setSynonymFilterString }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VerbatimNameFilter, { setFilterString: setVerbatimNameFilterString }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CatalogNumberFilter, { setFilterString: setCatalogNumberFilterString })] })
                : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "DataSource not yet created" })] }));
}
function AphiaIdFilter(props) {
    const { setFilterString } = props;
    function onChangeHandler(evt) {
        const value = evt.target.value;
        if (value) {
            setFilterString(`AphiaID = ${value}`);
        }
        else {
            setFilterString(null);
        }
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-input-text", { scale: 's', id: "aphia-id-tooltip", clearable: true, style: { width: '80%' }, "label-text": "Aphia ID", oncalciteInputTextChange: onChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": "aphia-id-tooltip", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "filter data by Aphia ID" }) })] }));
}
function DatasetIdFilter(props) {
    const { setFilterString } = props;
    function onChangeHandler(evt) {
        const value = evt.target.value;
        if (value) {
            setFilterString(`DatasetID = '${value}'`);
        }
        else {
            setFilterString(null);
        }
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-input-text", { scale: 's', id: "dataset-id-tooltip", clearable: true, style: { width: '80%' }, "label-text": "Dataset ID", oncalciteInputTextChange: onChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": "dataset-id-tooltip", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "filter data by Dataset ID" }) })] }));
}
function SynonymFilter(props) {
    const { setFilterString } = props;
    function onChangeHandler(evt) {
        const value = evt.target.value;
        if (value) {
            setFilterString(`Synonyms like '%${value}%'`);
        }
        else {
            setFilterString(null);
        }
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-input-text", { scale: 's', id: "synonym-tooltip", clearable: true, style: { width: '80%' }, "label-text": "Synonyms", oncalciteInputTextChange: onChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": "synonym-tooltip", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "filter data by Synonyms" }) })] }));
}
function VerbatimNameFilter(props) {
    const { setFilterString } = props;
    function onChangeHandler(evt) {
        const value = evt.target.value;
        if (value) {
            setFilterString(`VerbatimScientificName like '%${value}%'`);
        }
        else {
            setFilterString(null);
        }
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-input-text", { scale: 's', id: "verbatim-name-tooltip", clearable: true, style: { width: '80%' }, "label-text": "Verbatim Scientific Name", oncalciteInputTextChange: onChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": "verbatim-name-tooltip", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "filter data by Verbatim Scientific Name" }) })] }));
}
function CatalogNumberFilter(props) {
    const { setFilterString } = props;
    function onChangeHandler(evt) {
        const value = evt.target.value;
        if (value) {
            setFilterString(`CatalogNumber = ${value}`);
        }
        else {
            setFilterString(null);
        }
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-input-text", { scale: 's', id: "catalog-number-tooltip", clearable: true, style: { width: '80%' }, "label-text": "Catalog Number", oncalciteInputTextChange: onChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": "catalog-number-tooltip", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "filter data by Catalog Number" }) })] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90ZXh0LWZpbHRlcnMtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQU1HO0FBQ3FCO0FBS3hCLFNBQVMsTUFBTSxDQUFFLEtBQStCOztJQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLEtBQUssQ0FBQztJQUM5RCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQTZCLElBQUksQ0FBQztJQUM5RSxNQUFNLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUMsR0FBRywrQ0FBUSxDQUFnQixJQUFJLENBQUM7SUFDbkYsTUFBTSxDQUFDLHFCQUFxQixFQUFFLHdCQUF3QixDQUFDLEdBQUcsK0NBQVEsQ0FBZ0IsSUFBSSxDQUFDO0lBQ3ZGLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBQyxHQUFHLCtDQUFRLENBQWdCLElBQUksQ0FBQztJQUNuRixNQUFNLENBQUMsd0JBQXdCLEVBQUUs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bUJBQW1CLEtBQUssRUFBRSxDQUFDO1FBQzdDLENBQUM7YUFBTSxDQUFDO1lBQ04sZUFBZSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU0sQ0FDSiwwRUFBSyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLGFBQzdCLHdGQUFvQixLQUFLLEVBQUMsR0FBRyxFQUMzQixFQUFFLEVBQUMsd0JBQXdCLEVBQUMsU0FBUyxRQUNyQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLGdCQUFhLGdCQUFnQixFQUNsRCx3QkFBd0IsRUFBRSxlQUFlLEdBQ3RCLEVBQ3JCLDBHQUFtQyx3QkFBd0IsWUFDdkQsc0hBQTBDLEdBQzFCLElBQ2hCLENBQ1A7QUFDSCxDQUFDO0FBQ08sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdGV4dC1maWx0ZXJzLXdpZGdldC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsXG4gIGpzeCwgRGF0YVNvdXJjZUNvbXBvbmVudCxcbiAgdHlwZSBRdWVyaWFibGVEYXRhU291cmNlLCB0eXBlIERhdGFTb3VyY2UsIE1lc3NhZ2VNYW5hZ2VyLCBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZSxcbiAgdHlwZSBBcmNHSVNRdWVyeVBhcmFtc1xufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBGaWx0ZXJTdHJpbmdJbnB1dCBmcm9tICcuL2ZpbHRlci1zdHJpbmctaW5wdXQnXG4vLyBpbXBvcnQge0J1dHRvbiwgRHJvcGRvd24sIFRleHRJbnB1dH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICBjb25zb2xlLmxvZygncmVuZGVyaW5nIHRleHQtZmlsdGVycy13aWRnZXQgd2l0aCBwcm9wcycsIHByb3BzKVxuICBjb25zdCBbZGF0YVNvdXJjZSwgc2V0RGF0YVNvdXJjZV0gPSB1c2VTdGF0ZTxRdWVyaWFibGVEYXRhU291cmNlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2FwaGlhSWRGaWx0ZXJTdHJpbmcsIHNldEFwaGlhSWRGaWx0ZXJTdHJpbmddID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2RhdGFzZXRJZEZpbHRlclN0cmluZywgc2V0RGF0YXNldElkRmlsdGVyU3RyaW5nXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtzeW5vbnltRmlsdGVyU3RyaW5nLCBzZXRTeW5vbnltRmlsdGVyU3RyaW5nXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFt2ZXJiYXRpbU5hbWVGaWx0ZXJTdHJpbmcsIHNldFZlcmJhdGltTmFtZUZpbHRlclN0cmluZ10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbY2F0YWxvZ051bWJlckZpbHRlclN0cmluZywgc2V0Q2F0YWxvZ051bWJlckZpbHRlclN0cmluZ10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIC8vIHJ1bnMgb25jZVxuICBmdW5jdGlvbiBvbkRhdGFTb3VyY2VDcmVhdGVkIChkczogRGF0YVNvdXJjZSkge1xuICAgIGlmIChkcykge1xuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRzIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcbiAgICAgIHNldERhdGFTb3VyY2UoZGF0YVNvdXJjZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIGNyZWF0ZSBEYXRhU291cmNlJylcbiAgICB9XG4gIH1cblxuXG4gIGlmIChkYXRhU291cmNlKSB7XG4gICAgY29uc3QgZmlsdGVyU3RyaW5nID0gW2FwaGlhSWRGaWx0ZXJTdHJpbmcsIGRhdGFzZXRJZEZpbHRlclN0cmluZywgc3lub255bUZpbHRlclN0cmluZywgdmVyYmF0aW1OYW1lRmlsdGVyU3RyaW5nLCBjYXRhbG9nTnVtYmVyRmlsdGVyU3RyaW5nXS5maWx0ZXIodiA9PiAhIXYpLmpvaW4oJyBBTkQgJylcbiAgICBjb25zdCBxOkFyY0dJU1F1ZXJ5UGFyYW1zID0geyB3aGVyZTogZmlsdGVyU3RyaW5nIHx8IG51bGwgfVxuICAgIGNvbnNvbGUubG9nKCdhcHBseUZpbHRlcjogdXBkYXRpbmcgcXVlcnkgcGFyYW1zIHdpdGgnLCBxKVxuICAgIGRhdGFTb3VyY2UudXBkYXRlUXVlcnlQYXJhbXMocSwgcHJvcHMuaWQpXG4gICAgTWVzc2FnZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdWJsaXNoTWVzc2FnZShuZXcgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UocHJvcHMuaWQsIFtkYXRhU291cmNlLmlkXSkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiamltdS13aWRnZXRcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcbiAgICAgICAgdXNlRGF0YVNvdXJjZT17cHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXX1cbiAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxuICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtvbkRhdGFTb3VyY2VDcmVhdGVkfVxuICAgICAgLz5cbiAgICAgIHtkYXRhU291cmNlID9cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBcGhpYUlkRmlsdGVyIHNldEZpbHRlclN0cmluZz17c2V0QXBoaWFJZEZpbHRlclN0cmluZ30+PC9BcGhpYUlkRmlsdGVyPlxuICAgICAgICA8RGF0YXNldElkRmlsdGVyIHNldEZpbHRlclN0cmluZz17c2V0RGF0YXNldElkRmlsdGVyU3RyaW5nfT48L0RhdGFzZXRJZEZpbHRlcj5cbiAgICAgICAgPFN5bm9ueW1GaWx0ZXIgc2V0RmlsdGVyU3RyaW5nPXtzZXRTeW5vbnltRmlsdGVyU3RyaW5nfT48L1N5bm9ueW1GaWx0ZXI+XG4gICAgICAgIDxWZXJiYXRpbU5hbWVGaWx0ZXIgc2V0RmlsdGVyU3RyaW5nPXtzZXRWZXJiYXRpbU5hbWVGaWx0ZXJTdHJpbmd9PjwvVmVyYmF0aW1OYW1lRmlsdGVyPlxuICAgICAgICA8Q2F0YWxvZ051bWJlckZpbHRlciBzZXRGaWx0ZXJTdHJpbmc9e3NldENhdGFsb2dOdW1iZXJGaWx0ZXJTdHJpbmd9PjwvQ2F0YWxvZ051bWJlckZpbHRlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgOiA8ZGl2PkRhdGFTb3VyY2Ugbm90IHlldCBjcmVhdGVkPC9kaXY+fVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZnVuY3Rpb24gQXBoaWFJZEZpbHRlciAocHJvcHM6IHtzZXRGaWx0ZXJTdHJpbmc6IChmaWx0ZXJTdHJpbmc6IHN0cmluZyB8IG51bGwpID0+IHZvaWR9KSB7XG4gIGNvbnN0IHsgc2V0RmlsdGVyU3RyaW5nIH0gPSBwcm9wc1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlSGFuZGxlciAoZXZ0OkN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSAoZXZ0LnRhcmdldCBhcyBIVE1MQ2FsY2l0ZUlucHV0VGV4dEVsZW1lbnQpLnZhbHVlXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRGaWx0ZXJTdHJpbmcoYEFwaGlhSUQgPSAke3ZhbHVlfWApXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlclN0cmluZyhudWxsKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMTVweCd9fT5cbiAgICAgIDxjYWxjaXRlLWlucHV0LXRleHQgc2NhbGU9J3MnXG4gICAgICAgIGlkPVwiYXBoaWEtaWQtdG9vbHRpcFwiIGNsZWFyYWJsZVxuICAgICAgICBzdHlsZT17e3dpZHRoOiAnODAlJ319IGxhYmVsLXRleHQ9XCJBcGhpYSBJRFwiXG4gICAgICAgIG9uY2FsY2l0ZUlucHV0VGV4dENoYW5nZT17b25DaGFuZ2VIYW5kbGVyfT5cbiAgICAgIDwvY2FsY2l0ZS1pbnB1dC10ZXh0PlxuICAgICAgPGNhbGNpdGUtdG9vbHRpcCByZWZlcmVuY2UtZWxlbWVudD1cImFwaGlhLWlkLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxzcGFuPmZpbHRlciBkYXRhIGJ5IEFwaGlhIElEPC9zcGFuPlxuICAgICAgICA8L2NhbGNpdGUtdG9vbHRpcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmZ1bmN0aW9uIERhdGFzZXRJZEZpbHRlciAocHJvcHM6IHtzZXRGaWx0ZXJTdHJpbmc6IChmaWx0ZXJTdHJpbmc6IHN0cmluZyB8IG51bGwpID0+IHZvaWR9KSB7XG4gIGNvbnN0IHsgc2V0RmlsdGVyU3RyaW5nIH0gPSBwcm9wc1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlSGFuZGxlciAoZXZ0OkN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSAoZXZ0LnRhcmdldCBhcyBIVE1MQ2FsY2l0ZUlucHV0VGV4dEVsZW1lbnQpLnZhbHVlXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRGaWx0ZXJTdHJpbmcoYERhdGFzZXRJRCA9ICcke3ZhbHVlfSdgKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGaWx0ZXJTdHJpbmcobnVsbClcbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzE1cHgnfX0+XG4gICAgICA8Y2FsY2l0ZS1pbnB1dC10ZXh0IHNjYWxlPSdzJ1xuICAgICAgICBpZD1cImRhdGFzZXQtaWQtdG9vbHRpcFwiIGNsZWFyYWJsZVxuICAgICAgICBzdHlsZT17e3dpZHRoOiAnODAlJ319IGxhYmVsLXRleHQ9XCJEYXRhc2V0IElEXCJcbiAgICAgICAgb25jYWxjaXRlSW5wdXRUZXh0Q2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9PlxuICAgICAgPC9jYWxjaXRlLWlucHV0LXRleHQ+XG4gICAgICA8Y2FsY2l0ZS10b29sdGlwIHJlZmVyZW5jZS1lbGVtZW50PVwiZGF0YXNldC1pZC10b29sdGlwXCI+XG4gICAgICAgICAgICA8c3Bhbj5maWx0ZXIgZGF0YSBieSBEYXRhc2V0IElEPC9zcGFuPlxuICAgICAgICA8L2NhbGNpdGUtdG9vbHRpcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBTeW5vbnltRmlsdGVyIChwcm9wczoge3NldEZpbHRlclN0cmluZzogKGZpbHRlclN0cmluZzogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZH0pIHtcbiAgY29uc3QgeyBzZXRGaWx0ZXJTdHJpbmcgfSA9IHByb3BzXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VIYW5kbGVyIChldnQ6Q3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldnQudGFyZ2V0IGFzIEhUTUxDYWxjaXRlSW5wdXRUZXh0RWxlbWVudCkudmFsdWVcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNldEZpbHRlclN0cmluZyhgU3lub255bXMgbGlrZSAnJSR7dmFsdWV9JSdgKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGaWx0ZXJTdHJpbmcobnVsbClcbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzE1cHgnfX0+XG4gICAgICA8Y2FsY2l0ZS1pbnB1dC10ZXh0IHNjYWxlPSdzJ1xuICAgICAgICBpZD1cInN5bm9ueW0tdG9vbHRpcFwiIGNsZWFyYWJsZVxuICAgICAgICBzdHlsZT17e3dpZHRoOiAnODAlJ319IGxhYmVsLXRleHQ9XCJTeW5vbnltc1wiXG4gICAgICAgIG9uY2FsY2l0ZUlucHV0VGV4dENoYW5nZT17b25DaGFuZ2VIYW5kbGVyfT5cbiAgICAgIDwvY2FsY2l0ZS1pbnB1dC10ZXh0PlxuICAgICAgPGNhbGNpdGUtdG9vbHRpcCByZWZlcmVuY2UtZWxlbWVudD1cInN5bm9ueW0tdG9vbHRpcFwiPlxuICAgICAgICAgICAgPHNwYW4+ZmlsdGVyIGRhdGEgYnkgU3lub255bXM8L3NwYW4+XG4gICAgICAgIDwvY2FsY2l0ZS10b29sdGlwPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZnVuY3Rpb24gVmVyYmF0aW1OYW1lRmlsdGVyIChwcm9wczoge3NldEZpbHRlclN0cmluZzogKGZpbHRlclN0cmluZzogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZH0pIHtcbiAgY29uc3QgeyBzZXRGaWx0ZXJTdHJpbmcgfSA9IHByb3BzXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VIYW5kbGVyIChldnQ6Q3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldnQudGFyZ2V0IGFzIEhUTUxDYWxjaXRlSW5wdXRUZXh0RWxlbWVudCkudmFsdWVcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNldEZpbHRlclN0cmluZyhgVmVyYmF0aW1TY2llbnRpZmljTmFtZSBsaWtlICclJHt2YWx1ZX0lJ2ApXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlclN0cmluZyhudWxsKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMTVweCd9fT5cbiAgICAgIDxjYWxjaXRlLWlucHV0LXRleHQgc2NhbGU9J3MnXG4gICAgICAgIGlkPVwidmVyYmF0aW0tbmFtZS10b29sdGlwXCIgY2xlYXJhYmxlXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6ICc4MCUnfX0gbGFiZWwtdGV4dD1cIlZlcmJhdGltIFNjaWVudGlmaWMgTmFtZVwiXG4gICAgICAgIG9uY2FsY2l0ZUlucHV0VGV4dENoYW5nZT17b25DaGFuZ2VIYW5kbGVyfT5cbiAgICAgIDwvY2FsY2l0ZS1pbnB1dC10ZXh0PlxuICAgICAgPGNhbGNpdGUtdG9vbHRpcCByZWZlcmVuY2UtZWxlbWVudD1cInZlcmJhdGltLW5hbWUtdG9vbHRpcFwiPlxuICAgICAgICAgIDxzcGFuPmZpbHRlciBkYXRhIGJ5IFZlcmJhdGltIFNjaWVudGlmaWMgTmFtZTwvc3Bhbj5cbiAgICAgICAgPC9jYWxjaXRlLXRvb2x0aXA+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gQ2F0YWxvZ051bWJlckZpbHRlciAocHJvcHM6IHtzZXRGaWx0ZXJTdHJpbmc6IChmaWx0ZXJTdHJpbmc6IHN0cmluZyB8IG51bGwpID0+IHZvaWR9KSB7XG4gIGNvbnN0IHsgc2V0RmlsdGVyU3RyaW5nIH0gPSBwcm9wc1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlSGFuZGxlciAoZXZ0OkN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSAoZXZ0LnRhcmdldCBhcyBIVE1MQ2FsY2l0ZUlucHV0VGV4dEVsZW1lbnQpLnZhbHVlXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRGaWx0ZXJTdHJpbmcoYENhdGFsb2dOdW1iZXIgPSAke3ZhbHVlfWApXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlclN0cmluZyhudWxsKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMTVweCd9fT5cbiAgICAgIDxjYWxjaXRlLWlucHV0LXRleHQgc2NhbGU9J3MnXG4gICAgICAgIGlkPVwiY2F0YWxvZy1udW1iZXItdG9vbHRpcFwiIGNsZWFyYWJsZVxuICAgICAgICBzdHlsZT17e3dpZHRoOiAnODAlJ319IGxhYmVsLXRleHQ9XCJDYXRhbG9nIE51bWJlclwiXG4gICAgICAgIG9uY2FsY2l0ZUlucHV0VGV4dENoYW5nZT17b25DaGFuZ2VIYW5kbGVyfT5cbiAgICAgIDwvY2FsY2l0ZS1pbnB1dC10ZXh0PlxuICAgICAgPGNhbGNpdGUtdG9vbHRpcCByZWZlcmVuY2UtZWxlbWVudD1cImNhdGFsb2ctbnVtYmVyLXRvb2x0aXBcIj5cbiAgICAgICAgICA8c3Bhbj5maWx0ZXIgZGF0YSBieSBDYXRhbG9nIE51bWJlcjwvc3Bhbj5cbiAgICAgICAgPC9jYWxjaXRlLXRvb2x0aXA+XG4gICAgPC9kaXY+XG4gIClcbn1cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9