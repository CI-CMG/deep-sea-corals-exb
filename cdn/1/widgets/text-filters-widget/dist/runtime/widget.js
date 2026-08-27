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
        const filterString = [aphiaIdFilterString, datasetIdFilterString, synonymFilterString, verbatimNameFilterString].filter(v => !!v).join(' AND ');
        const q = { where: filterString || null };
        console.log('applyFilter: updating query params with', q);
        dataSource.updateQueryParams(q, props.id);
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceFilterChangeMessage(props.id, [dataSource.id]));
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget", style: { width: '100%', height: '100%', overflow: 'hidden' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0], widgetId: props.id, onDataSourceCreated: onDataSourceCreated }), dataSource ?
                (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AphiaIdFilter, { setFilterString: setAphiaIdFilterString }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DatasetIdFilter, { setFilterString: setDatasetIdFilterString }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SynonymFilter, { setFilterString: setSynonymFilterString }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VerbatimNameFilter, { setFilterString: setVerbatimNameFilterString })] })
                : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "DataSource not yet created" })] }));
}
function AphiaIdFilter(props) {
    const { setFilterString } = props;
    function onChangeHandler(evt) {
        const value = evt.target.value;
        if (value) {
            setFilterString(`AphiaID = '${value}'`);
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
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90ZXh0LWZpbHRlcnMtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQU1HO0FBQ3FCO0FBS3hCLFNBQVMsTUFBTSxDQUFFLEtBQStCOztJQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLEtBQUssQ0FBQztJQUM5RCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQTZCLElBQUksQ0FBQztJQUM5RSxNQUFNLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUMsR0FBRywrQ0FBUSxDQUFnQixJQUFJLENBQUM7SUFDbkYsTUFBTSxDQUFDLHFCQUFxQixFQUFFLHdCQUF3QixDQUFDLEdBQUcsK0NBQVEsQ0FBZ0IsSUFBSSxDQUFDO0lBQ3ZGLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBQyxHQUFHLCtDQUFRLENBQWdCLElBQUksQ0FBQztJQUNuRixNQUFNLENBQUMsd0JBQXdCLEVBQUUs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QWUsR0FDdEIsRUFDckIsMEdBQW1DLGlCQUFpQixZQUM5QyxnSEFBb0MsR0FDdEIsSUFDaEIsQ0FDUDtBQUNILENBQUM7QUFHRCxTQUFTLGtCQUFrQixDQUFFLEtBQStEO0lBQzFGLE1BQU0sRUFBRSxlQUFlLEVBQUUsR0FBRyxLQUFLO0lBRWpDLFNBQVMsZUFBZSxDQUFFLEdBQWU7UUFDdkMsTUFBTSxLQUFLLEdBQUksR0FBRyxDQUFDLE1BQXNDLENBQUMsS0FBSztRQUMvRCxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ1YsZUFBZSxDQUFDLGlDQUFpQyxLQUFLLElBQUksQ0FBQztRQUM3RCxDQUFDO2FBQU0sQ0FBQztZQUNOLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFNLENBQ0osMEVBQUssS0FBSyxFQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxhQUM3Qix3RkFBb0IsS0FBSyxFQUFDLEdBQUcsRUFDM0IsRUFBRSxFQUFDLHVCQUF1QixFQUFDLFNBQVMsUUFDcEMsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxnQkFBYSwwQkFBMEIsRUFDNUQsd0JBQXdCLEVBQUUsZUFBZSxHQUN0QixFQUNyQiwwR0FBbUMsdUJBQXVCLFlBQ3RELGdJQUFvRCxHQUNwQyxJQUNoQixDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3RleHQtZmlsdGVycy13aWRnZXQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQge1xuICB0eXBlIEFsbFdpZGdldFByb3BzLFxuICBqc3gsIERhdGFTb3VyY2VDb21wb25lbnQsXG4gIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSwgdHlwZSBEYXRhU291cmNlLCBNZXNzYWdlTWFuYWdlciwgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UsXG4gIHR5cGUgQXJjR0lTUXVlcnlQYXJhbXNcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgRmlsdGVyU3RyaW5nSW5wdXQgZnJvbSAnLi9maWx0ZXItc3RyaW5nLWlucHV0J1xuLy8gaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBUZXh0SW5wdXR9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc29sZS5sb2coJ3JlbmRlcmluZyB0ZXh0LWZpbHRlcnMtd2lkZ2V0IHdpdGggcHJvcHMnLCBwcm9wcylcbiAgY29uc3QgW2RhdGFTb3VyY2UsIHNldERhdGFTb3VyY2VdID0gdXNlU3RhdGU8UXVlcmlhYmxlRGF0YVNvdXJjZSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFthcGhpYUlkRmlsdGVyU3RyaW5nLCBzZXRBcGhpYUlkRmlsdGVyU3RyaW5nXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtkYXRhc2V0SWRGaWx0ZXJTdHJpbmcsIHNldERhdGFzZXRJZEZpbHRlclN0cmluZ10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbc3lub255bUZpbHRlclN0cmluZywgc2V0U3lub255bUZpbHRlclN0cmluZ10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbdmVyYmF0aW1OYW1lRmlsdGVyU3RyaW5nLCBzZXRWZXJiYXRpbU5hbWVGaWx0ZXJTdHJpbmddID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcblxuICAvLyBydW5zIG9uY2VcbiAgZnVuY3Rpb24gb25EYXRhU291cmNlQ3JlYXRlZCAoZHM6IERhdGFTb3VyY2UpIHtcbiAgICBpZiAoZHMpIHtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkcyBhcyBRdWVyaWFibGVEYXRhU291cmNlXG4gICAgICBzZXREYXRhU291cmNlKGRhdGFTb3VyY2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBjcmVhdGUgRGF0YVNvdXJjZScpXG4gICAgfVxuICB9XG5cblxuICBpZiAoZGF0YVNvdXJjZSkge1xuICAgIGNvbnN0IGZpbHRlclN0cmluZyA9IFthcGhpYUlkRmlsdGVyU3RyaW5nLCBkYXRhc2V0SWRGaWx0ZXJTdHJpbmcsIHN5bm9ueW1GaWx0ZXJTdHJpbmcsIHZlcmJhdGltTmFtZUZpbHRlclN0cmluZ10uZmlsdGVyKHYgPT4gISF2KS5qb2luKCcgQU5EICcpXG4gICAgY29uc3QgcTpBcmNHSVNRdWVyeVBhcmFtcyA9IHsgd2hlcmU6IGZpbHRlclN0cmluZyB8fCBudWxsIH1cbiAgICBjb25zb2xlLmxvZygnYXBwbHlGaWx0ZXI6IHVwZGF0aW5nIHF1ZXJ5IHBhcmFtcyB3aXRoJywgcSlcbiAgICBkYXRhU291cmNlLnVwZGF0ZVF1ZXJ5UGFyYW1zKHEsIHByb3BzLmlkKVxuICAgIE1lc3NhZ2VNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVibGlzaE1lc3NhZ2UobmV3IERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlKHByb3BzLmlkLCBbZGF0YVNvdXJjZS5pZF0pKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0XCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XG4gICAgICAgIHVzZURhdGFTb3VyY2U9e3Byb3BzLnVzZURhdGFTb3VyY2VzPy5bMF19XG4gICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cbiAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17b25EYXRhU291cmNlQ3JlYXRlZH1cbiAgICAgIC8+XG4gICAgICB7ZGF0YVNvdXJjZSA/XG4gICAgICA8ZGl2PlxuICAgICAgICA8QXBoaWFJZEZpbHRlciBzZXRGaWx0ZXJTdHJpbmc9e3NldEFwaGlhSWRGaWx0ZXJTdHJpbmd9PjwvQXBoaWFJZEZpbHRlcj5cbiAgICAgICAgPERhdGFzZXRJZEZpbHRlciBzZXRGaWx0ZXJTdHJpbmc9e3NldERhdGFzZXRJZEZpbHRlclN0cmluZ30+PC9EYXRhc2V0SWRGaWx0ZXI+XG4gICAgICAgIDxTeW5vbnltRmlsdGVyIHNldEZpbHRlclN0cmluZz17c2V0U3lub255bUZpbHRlclN0cmluZ30+PC9TeW5vbnltRmlsdGVyPlxuICAgICAgICA8VmVyYmF0aW1OYW1lRmlsdGVyIHNldEZpbHRlclN0cmluZz17c2V0VmVyYmF0aW1OYW1lRmlsdGVyU3RyaW5nfT48L1ZlcmJhdGltTmFtZUZpbHRlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgOiA8ZGl2PkRhdGFTb3VyY2Ugbm90IHlldCBjcmVhdGVkPC9kaXY+fVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZnVuY3Rpb24gQXBoaWFJZEZpbHRlciAocHJvcHM6IHtzZXRGaWx0ZXJTdHJpbmc6IChmaWx0ZXJTdHJpbmc6IHN0cmluZyB8IG51bGwpID0+IHZvaWR9KSB7XG4gIGNvbnN0IHsgc2V0RmlsdGVyU3RyaW5nIH0gPSBwcm9wc1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlSGFuZGxlciAoZXZ0OkN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSAoZXZ0LnRhcmdldCBhcyBIVE1MQ2FsY2l0ZUlucHV0VGV4dEVsZW1lbnQpLnZhbHVlXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRGaWx0ZXJTdHJpbmcoYEFwaGlhSUQgPSAnJHt2YWx1ZX0nYClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RmlsdGVyU3RyaW5nKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxNXB4J319PlxuICAgICAgPGNhbGNpdGUtaW5wdXQtdGV4dCBzY2FsZT0ncydcbiAgICAgICAgaWQ9XCJhcGhpYS1pZC10b29sdGlwXCIgY2xlYXJhYmxlXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6ICc4MCUnfX0gbGFiZWwtdGV4dD1cIkFwaGlhIElEXCJcbiAgICAgICAgb25jYWxjaXRlSW5wdXRUZXh0Q2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9PlxuICAgICAgPC9jYWxjaXRlLWlucHV0LXRleHQ+XG4gICAgICA8Y2FsY2l0ZS10b29sdGlwIHJlZmVyZW5jZS1lbGVtZW50PVwiYXBoaWEtaWQtdG9vbHRpcFwiPlxuICAgICAgICAgICAgPHNwYW4+ZmlsdGVyIGRhdGEgYnkgQXBoaWEgSUQ8L3NwYW4+XG4gICAgICAgIDwvY2FsY2l0ZS10b29sdGlwPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZnVuY3Rpb24gRGF0YXNldElkRmlsdGVyIChwcm9wczoge3NldEZpbHRlclN0cmluZzogKGZpbHRlclN0cmluZzogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZH0pIHtcbiAgY29uc3QgeyBzZXRGaWx0ZXJTdHJpbmcgfSA9IHByb3BzXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VIYW5kbGVyIChldnQ6Q3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldnQudGFyZ2V0IGFzIEhUTUxDYWxjaXRlSW5wdXRUZXh0RWxlbWVudCkudmFsdWVcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNldEZpbHRlclN0cmluZyhgRGF0YXNldElEID0gJyR7dmFsdWV9J2ApXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlclN0cmluZyhudWxsKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMTVweCd9fT5cbiAgICAgIDxjYWxjaXRlLWlucHV0LXRleHQgc2NhbGU9J3MnXG4gICAgICAgIGlkPVwiZGF0YXNldC1pZC10b29sdGlwXCIgY2xlYXJhYmxlXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6ICc4MCUnfX0gbGFiZWwtdGV4dD1cIkRhdGFzZXQgSURcIlxuICAgICAgICBvbmNhbGNpdGVJbnB1dFRleHRDaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0+XG4gICAgICA8L2NhbGNpdGUtaW5wdXQtdGV4dD5cbiAgICAgIDxjYWxjaXRlLXRvb2x0aXAgcmVmZXJlbmNlLWVsZW1lbnQ9XCJkYXRhc2V0LWlkLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxzcGFuPmZpbHRlciBkYXRhIGJ5IERhdGFzZXQgSUQ8L3NwYW4+XG4gICAgICAgIDwvY2FsY2l0ZS10b29sdGlwPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFN5bm9ueW1GaWx0ZXIgKHByb3BzOiB7c2V0RmlsdGVyU3RyaW5nOiAoZmlsdGVyU3RyaW5nOiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkfSkge1xuICBjb25zdCB7IHNldEZpbHRlclN0cmluZyB9ID0gcHJvcHNcblxuICBmdW5jdGlvbiBvbkNoYW5nZUhhbmRsZXIgKGV2dDpDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2dC50YXJnZXQgYXMgSFRNTENhbGNpdGVJbnB1dFRleHRFbGVtZW50KS52YWx1ZVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgc2V0RmlsdGVyU3RyaW5nKGBTeW5vbnltcyBsaWtlICclJHt2YWx1ZX0lJ2ApXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlclN0cmluZyhudWxsKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMTVweCd9fT5cbiAgICAgIDxjYWxjaXRlLWlucHV0LXRleHQgc2NhbGU9J3MnXG4gICAgICAgIGlkPVwic3lub255bS10b29sdGlwXCIgY2xlYXJhYmxlXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6ICc4MCUnfX0gbGFiZWwtdGV4dD1cIlN5bm9ueW1zXCJcbiAgICAgICAgb25jYWxjaXRlSW5wdXRUZXh0Q2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9PlxuICAgICAgPC9jYWxjaXRlLWlucHV0LXRleHQ+XG4gICAgICA8Y2FsY2l0ZS10b29sdGlwIHJlZmVyZW5jZS1lbGVtZW50PVwic3lub255bS10b29sdGlwXCI+XG4gICAgICAgICAgICA8c3Bhbj5maWx0ZXIgZGF0YSBieSBTeW5vbnltczwvc3Bhbj5cbiAgICAgICAgPC9jYWxjaXRlLXRvb2x0aXA+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5mdW5jdGlvbiBWZXJiYXRpbU5hbWVGaWx0ZXIgKHByb3BzOiB7c2V0RmlsdGVyU3RyaW5nOiAoZmlsdGVyU3RyaW5nOiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkfSkge1xuICBjb25zdCB7IHNldEZpbHRlclN0cmluZyB9ID0gcHJvcHNcblxuICBmdW5jdGlvbiBvbkNoYW5nZUhhbmRsZXIgKGV2dDpDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2dC50YXJnZXQgYXMgSFRNTENhbGNpdGVJbnB1dFRleHRFbGVtZW50KS52YWx1ZVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgc2V0RmlsdGVyU3RyaW5nKGBWZXJiYXRpbVNjaWVudGlmaWNOYW1lIGxpa2UgJyUke3ZhbHVlfSUnYClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RmlsdGVyU3RyaW5nKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxNXB4J319PlxuICAgICAgPGNhbGNpdGUtaW5wdXQtdGV4dCBzY2FsZT0ncydcbiAgICAgICAgaWQ9XCJ2ZXJiYXRpbS1uYW1lLXRvb2x0aXBcIiBjbGVhcmFibGVcbiAgICAgICAgc3R5bGU9e3t3aWR0aDogJzgwJSd9fSBsYWJlbC10ZXh0PVwiVmVyYmF0aW0gU2NpZW50aWZpYyBOYW1lXCJcbiAgICAgICAgb25jYWxjaXRlSW5wdXRUZXh0Q2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9PlxuICAgICAgPC9jYWxjaXRlLWlucHV0LXRleHQ+XG4gICAgICA8Y2FsY2l0ZS10b29sdGlwIHJlZmVyZW5jZS1lbGVtZW50PVwidmVyYmF0aW0tbmFtZS10b29sdGlwXCI+XG4gICAgICAgICAgPHNwYW4+ZmlsdGVyIGRhdGEgYnkgVmVyYmF0aW0gU2NpZW50aWZpYyBOYW1lPC9zcGFuPlxuICAgICAgICA8L2NhbGNpdGUtdG9vbHRpcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==