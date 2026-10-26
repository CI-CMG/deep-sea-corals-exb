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
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_react__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ },

/***/ "react"
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90ZXh0LWZpbHRlcnMtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQU1HO0FBQ3FCO0FBS3hCLFNBQVMsTUFBTSxDQUFFLEtBQStCOztJQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLEtBQUssQ0FBQztJQUM5RCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQTZCLElBQUksQ0FBQztJQUM5RSxNQUFNLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUMsR0FBRywrQ0FBUSxDQUFnQixJQUFJLENBQUM7SUFDbkYsTUFBTSxDQUFDLHFCQUFxQixFQUFFLHdCQUF3QixDQUFDLEdBQUcsK0NBQVEsQ0FBZ0IsSUFBSSxDQUFDO0lBQ3ZGLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBQyxHQUFHLCtDQUFRLENBQWdCLElBQUks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QUksS0FBSyxFQUFFLENBQUM7WUFDVixlQUFlLENBQUMsbUJBQW1CLEtBQUssRUFBRSxDQUFDO1FBQzdDLENBQUM7YUFBTSxDQUFDO1lBQ04sZUFBZSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU0sQ0FDSiwwRUFBSyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLGFBQzdCLHdGQUFvQixLQUFLLEVBQUMsR0FBRyxFQUMzQixFQUFFLEVBQUMsd0JBQXdCLEVBQUMsU0FBUyxRQUNyQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLGdCQUFhLGdCQUFnQixFQUNsRCx3QkFBd0IsRUFBRSxlQUFlLEdBQ3RCLEVBQ3JCLDBHQUFtQyx3QkFBd0IsWUFDdkQsc0hBQTBDLEdBQzFCLElBQ2hCLENBQ1A7QUFDSCxDQUFDO0FBQ08sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdGV4dC1maWx0ZXJzLXdpZGdldC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcbiAganN4LCBEYXRhU291cmNlQ29tcG9uZW50LFxuICB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2UsIHR5cGUgRGF0YVNvdXJjZSwgTWVzc2FnZU1hbmFnZXIsIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlLFxuICB0eXBlIEFyY0dJU1F1ZXJ5UGFyYW1zXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IEZpbHRlclN0cmluZ0lucHV0IGZyb20gJy4vZmlsdGVyLXN0cmluZy1pbnB1dCdcbi8vIGltcG9ydCB7QnV0dG9uLCBEcm9wZG93biwgVGV4dElucHV0fSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgdGV4dC1maWx0ZXJzLXdpZGdldCB3aXRoIHByb3BzJywgcHJvcHMpXG4gIGNvbnN0IFtkYXRhU291cmNlLCBzZXREYXRhU291cmNlXSA9IHVzZVN0YXRlPFF1ZXJpYWJsZURhdGFTb3VyY2UgfCBudWxsPihudWxsKVxuICBjb25zdCBbYXBoaWFJZEZpbHRlclN0cmluZywgc2V0QXBoaWFJZEZpbHRlclN0cmluZ10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbZGF0YXNldElkRmlsdGVyU3RyaW5nLCBzZXREYXRhc2V0SWRGaWx0ZXJTdHJpbmddID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3N5bm9ueW1GaWx0ZXJTdHJpbmcsIHNldFN5bm9ueW1GaWx0ZXJTdHJpbmddID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3ZlcmJhdGltTmFtZUZpbHRlclN0cmluZywgc2V0VmVyYmF0aW1OYW1lRmlsdGVyU3RyaW5nXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtjYXRhbG9nTnVtYmVyRmlsdGVyU3RyaW5nLCBzZXRDYXRhbG9nTnVtYmVyRmlsdGVyU3RyaW5nXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG5cbiAgLy8gcnVucyBvbmNlXG4gIGZ1bmN0aW9uIG9uRGF0YVNvdXJjZUNyZWF0ZWQgKGRzOiBEYXRhU291cmNlKSB7XG4gICAgaWYgKGRzKSB7XG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZHMgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZVxuICAgICAgc2V0RGF0YVNvdXJjZShkYXRhU291cmNlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gY3JlYXRlIERhdGFTb3VyY2UnKVxuICAgIH1cbiAgfVxuXG5cbiAgaWYgKGRhdGFTb3VyY2UpIHtcbiAgICBjb25zdCBmaWx0ZXJTdHJpbmcgPSBbYXBoaWFJZEZpbHRlclN0cmluZywgZGF0YXNldElkRmlsdGVyU3RyaW5nLCBzeW5vbnltRmlsdGVyU3RyaW5nLCB2ZXJiYXRpbU5hbWVGaWx0ZXJTdHJpbmcsIGNhdGFsb2dOdW1iZXJGaWx0ZXJTdHJpbmddLmZpbHRlcih2ID0+ICEhdikuam9pbignIEFORCAnKVxuICAgIGNvbnN0IHE6QXJjR0lTUXVlcnlQYXJhbXMgPSB7IHdoZXJlOiBmaWx0ZXJTdHJpbmcgfHwgbnVsbCB9XG4gICAgY29uc29sZS5sb2coJ2FwcGx5RmlsdGVyOiB1cGRhdGluZyBxdWVyeSBwYXJhbXMgd2l0aCcsIHEpXG4gICAgZGF0YVNvdXJjZS51cGRhdGVRdWVyeVBhcmFtcyhxLCBwcm9wcy5pZClcbiAgICBNZXNzYWdlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1Ymxpc2hNZXNzYWdlKG5ldyBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZShwcm9wcy5pZCwgW2RhdGFTb3VyY2UuaWRdKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxuICAgICAgICB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlcz8uWzBdfVxuICAgICAgICB3aWRnZXRJZD17cHJvcHMuaWR9XG4gICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e29uRGF0YVNvdXJjZUNyZWF0ZWR9XG4gICAgICAvPlxuICAgICAge2RhdGFTb3VyY2UgP1xuICAgICAgPGRpdj5cbiAgICAgICAgPEFwaGlhSWRGaWx0ZXIgc2V0RmlsdGVyU3RyaW5nPXtzZXRBcGhpYUlkRmlsdGVyU3RyaW5nfT48L0FwaGlhSWRGaWx0ZXI+XG4gICAgICAgIDxEYXRhc2V0SWRGaWx0ZXIgc2V0RmlsdGVyU3RyaW5nPXtzZXREYXRhc2V0SWRGaWx0ZXJTdHJpbmd9PjwvRGF0YXNldElkRmlsdGVyPlxuICAgICAgICA8U3lub255bUZpbHRlciBzZXRGaWx0ZXJTdHJpbmc9e3NldFN5bm9ueW1GaWx0ZXJTdHJpbmd9PjwvU3lub255bUZpbHRlcj5cbiAgICAgICAgPFZlcmJhdGltTmFtZUZpbHRlciBzZXRGaWx0ZXJTdHJpbmc9e3NldFZlcmJhdGltTmFtZUZpbHRlclN0cmluZ30+PC9WZXJiYXRpbU5hbWVGaWx0ZXI+XG4gICAgICAgIDxDYXRhbG9nTnVtYmVyRmlsdGVyIHNldEZpbHRlclN0cmluZz17c2V0Q2F0YWxvZ051bWJlckZpbHRlclN0cmluZ30+PC9DYXRhbG9nTnVtYmVyRmlsdGVyPlxuICAgICAgPC9kaXY+XG4gICAgICA6IDxkaXY+RGF0YVNvdXJjZSBub3QgeWV0IGNyZWF0ZWQ8L2Rpdj59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5mdW5jdGlvbiBBcGhpYUlkRmlsdGVyIChwcm9wczoge3NldEZpbHRlclN0cmluZzogKGZpbHRlclN0cmluZzogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZH0pIHtcbiAgY29uc3QgeyBzZXRGaWx0ZXJTdHJpbmcgfSA9IHByb3BzXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VIYW5kbGVyIChldnQ6Q3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldnQudGFyZ2V0IGFzIEhUTUxDYWxjaXRlSW5wdXRUZXh0RWxlbWVudCkudmFsdWVcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNldEZpbHRlclN0cmluZyhgQXBoaWFJRCA9ICR7dmFsdWV9YClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RmlsdGVyU3RyaW5nKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxNXB4J319PlxuICAgICAgPGNhbGNpdGUtaW5wdXQtdGV4dCBzY2FsZT0ncydcbiAgICAgICAgaWQ9XCJhcGhpYS1pZC10b29sdGlwXCIgY2xlYXJhYmxlXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6ICc4MCUnfX0gbGFiZWwtdGV4dD1cIkFwaGlhIElEXCJcbiAgICAgICAgb25jYWxjaXRlSW5wdXRUZXh0Q2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9PlxuICAgICAgPC9jYWxjaXRlLWlucHV0LXRleHQ+XG4gICAgICA8Y2FsY2l0ZS10b29sdGlwIHJlZmVyZW5jZS1lbGVtZW50PVwiYXBoaWEtaWQtdG9vbHRpcFwiPlxuICAgICAgICAgICAgPHNwYW4+ZmlsdGVyIGRhdGEgYnkgQXBoaWEgSUQ8L3NwYW4+XG4gICAgICAgIDwvY2FsY2l0ZS10b29sdGlwPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZnVuY3Rpb24gRGF0YXNldElkRmlsdGVyIChwcm9wczoge3NldEZpbHRlclN0cmluZzogKGZpbHRlclN0cmluZzogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZH0pIHtcbiAgY29uc3QgeyBzZXRGaWx0ZXJTdHJpbmcgfSA9IHByb3BzXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VIYW5kbGVyIChldnQ6Q3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldnQudGFyZ2V0IGFzIEhUTUxDYWxjaXRlSW5wdXRUZXh0RWxlbWVudCkudmFsdWVcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNldEZpbHRlclN0cmluZyhgRGF0YXNldElEID0gJyR7dmFsdWV9J2ApXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlclN0cmluZyhudWxsKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMTVweCd9fT5cbiAgICAgIDxjYWxjaXRlLWlucHV0LXRleHQgc2NhbGU9J3MnXG4gICAgICAgIGlkPVwiZGF0YXNldC1pZC10b29sdGlwXCIgY2xlYXJhYmxlXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6ICc4MCUnfX0gbGFiZWwtdGV4dD1cIkRhdGFzZXQgSURcIlxuICAgICAgICBvbmNhbGNpdGVJbnB1dFRleHRDaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0+XG4gICAgICA8L2NhbGNpdGUtaW5wdXQtdGV4dD5cbiAgICAgIDxjYWxjaXRlLXRvb2x0aXAgcmVmZXJlbmNlLWVsZW1lbnQ9XCJkYXRhc2V0LWlkLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxzcGFuPmZpbHRlciBkYXRhIGJ5IERhdGFzZXQgSUQ8L3NwYW4+XG4gICAgICAgIDwvY2FsY2l0ZS10b29sdGlwPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFN5bm9ueW1GaWx0ZXIgKHByb3BzOiB7c2V0RmlsdGVyU3RyaW5nOiAoZmlsdGVyU3RyaW5nOiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkfSkge1xuICBjb25zdCB7IHNldEZpbHRlclN0cmluZyB9ID0gcHJvcHNcblxuICBmdW5jdGlvbiBvbkNoYW5nZUhhbmRsZXIgKGV2dDpDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2dC50YXJnZXQgYXMgSFRNTENhbGNpdGVJbnB1dFRleHRFbGVtZW50KS52YWx1ZVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgc2V0RmlsdGVyU3RyaW5nKGBTeW5vbnltcyBsaWtlICclJHt2YWx1ZX0lJ2ApXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlclN0cmluZyhudWxsKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMTVweCd9fT5cbiAgICAgIDxjYWxjaXRlLWlucHV0LXRleHQgc2NhbGU9J3MnXG4gICAgICAgIGlkPVwic3lub255bS10b29sdGlwXCIgY2xlYXJhYmxlXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6ICc4MCUnfX0gbGFiZWwtdGV4dD1cIlN5bm9ueW1zXCJcbiAgICAgICAgb25jYWxjaXRlSW5wdXRUZXh0Q2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9PlxuICAgICAgPC9jYWxjaXRlLWlucHV0LXRleHQ+XG4gICAgICA8Y2FsY2l0ZS10b29sdGlwIHJlZmVyZW5jZS1lbGVtZW50PVwic3lub255bS10b29sdGlwXCI+XG4gICAgICAgICAgICA8c3Bhbj5maWx0ZXIgZGF0YSBieSBTeW5vbnltczwvc3Bhbj5cbiAgICAgICAgPC9jYWxjaXRlLXRvb2x0aXA+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5mdW5jdGlvbiBWZXJiYXRpbU5hbWVGaWx0ZXIgKHByb3BzOiB7c2V0RmlsdGVyU3RyaW5nOiAoZmlsdGVyU3RyaW5nOiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkfSkge1xuICBjb25zdCB7IHNldEZpbHRlclN0cmluZyB9ID0gcHJvcHNcblxuICBmdW5jdGlvbiBvbkNoYW5nZUhhbmRsZXIgKGV2dDpDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2dC50YXJnZXQgYXMgSFRNTENhbGNpdGVJbnB1dFRleHRFbGVtZW50KS52YWx1ZVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgc2V0RmlsdGVyU3RyaW5nKGBWZXJiYXRpbVNjaWVudGlmaWNOYW1lIGxpa2UgJyUke3ZhbHVlfSUnYClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RmlsdGVyU3RyaW5nKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxNXB4J319PlxuICAgICAgPGNhbGNpdGUtaW5wdXQtdGV4dCBzY2FsZT0ncydcbiAgICAgICAgaWQ9XCJ2ZXJiYXRpbS1uYW1lLXRvb2x0aXBcIiBjbGVhcmFibGVcbiAgICAgICAgc3R5bGU9e3t3aWR0aDogJzgwJSd9fSBsYWJlbC10ZXh0PVwiVmVyYmF0aW0gU2NpZW50aWZpYyBOYW1lXCJcbiAgICAgICAgb25jYWxjaXRlSW5wdXRUZXh0Q2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9PlxuICAgICAgPC9jYWxjaXRlLWlucHV0LXRleHQ+XG4gICAgICA8Y2FsY2l0ZS10b29sdGlwIHJlZmVyZW5jZS1lbGVtZW50PVwidmVyYmF0aW0tbmFtZS10b29sdGlwXCI+XG4gICAgICAgICAgPHNwYW4+ZmlsdGVyIGRhdGEgYnkgVmVyYmF0aW0gU2NpZW50aWZpYyBOYW1lPC9zcGFuPlxuICAgICAgICA8L2NhbGNpdGUtdG9vbHRpcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBDYXRhbG9nTnVtYmVyRmlsdGVyIChwcm9wczoge3NldEZpbHRlclN0cmluZzogKGZpbHRlclN0cmluZzogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZH0pIHtcbiAgY29uc3QgeyBzZXRGaWx0ZXJTdHJpbmcgfSA9IHByb3BzXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VIYW5kbGVyIChldnQ6Q3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldnQudGFyZ2V0IGFzIEhUTUxDYWxjaXRlSW5wdXRUZXh0RWxlbWVudCkudmFsdWVcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNldEZpbHRlclN0cmluZyhgQ2F0YWxvZ051bWJlciA9ICR7dmFsdWV9YClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RmlsdGVyU3RyaW5nKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxNXB4J319PlxuICAgICAgPGNhbGNpdGUtaW5wdXQtdGV4dCBzY2FsZT0ncydcbiAgICAgICAgaWQ9XCJjYXRhbG9nLW51bWJlci10b29sdGlwXCIgY2xlYXJhYmxlXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6ICc4MCUnfX0gbGFiZWwtdGV4dD1cIkNhdGFsb2cgTnVtYmVyXCJcbiAgICAgICAgb25jYWxjaXRlSW5wdXRUZXh0Q2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9PlxuICAgICAgPC9jYWxjaXRlLWlucHV0LXRleHQ+XG4gICAgICA8Y2FsY2l0ZS10b29sdGlwIHJlZmVyZW5jZS1lbGVtZW50PVwiY2F0YWxvZy1udW1iZXItdG9vbHRpcFwiPlxuICAgICAgICAgIDxzcGFuPmZpbHRlciBkYXRhIGJ5IENhdGFsb2cgTnVtYmVyPC9zcGFuPlxuICAgICAgICA8L2NhbGNpdGUtdG9vbHRpcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=