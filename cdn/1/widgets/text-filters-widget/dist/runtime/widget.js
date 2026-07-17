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
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-input-text", { id: "aphia-id-tooltip", clearable: true, style: { width: '80%' }, "label-text": "Aphia ID", oncalciteInputTextChange: onChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": "aphia-id-tooltip", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "filter data by Aphia ID" }) })] }));
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
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-input-text", { id: "dataset-id-tooltip", clearable: true, style: { width: '80%' }, "label-text": "Dataset ID", oncalciteInputTextChange: onChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": "dataset-id-tooltip", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "filter data by Dataset ID" }) })] }));
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
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-input-text", { id: "synonym-tooltip", clearable: true, style: { width: '80%' }, "label-text": "Synonyms", oncalciteInputTextChange: onChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": "synonym-tooltip", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "filter data by Synonyms" }) })] }));
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
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginTop: '15px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-input-text", { id: "verbatim-name-tooltip", clearable: true, style: { width: '80%' }, "label-text": "Verbatim Scientific Name", oncalciteInputTextChange: onChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-tooltip", { "reference-element": "verbatim-name-tooltip", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "filter data by Verbatim Scientific Name" }) })] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90ZXh0LWZpbHRlcnMtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQU1HO0FBQ3FCO0FBS3hCLFNBQVMsTUFBTSxDQUFFLEtBQStCOztJQUM3RCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQTZCLElBQUksQ0FBQztJQUU5RSxZQUFZO0lBQ1osU0FBUyxtQkFBbUIsQ0FBRSxFQUFjO1FBQzFDLElBQUksRUFBRSxFQUFFLENBQUM7WUFDUCxNQUFNLFVBQVUsR0FBRyxFQUF5QjtZQUM1QyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQztRQUM5QyxDQUFDO0lBQ0gsQ0FBQztJQUdELHFFQUFxRTtJQUNyRSxTQUFTLFdBQVcsQ0FBRSxZQUFvQjtRQUN4QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDaEIsT0FBTyxD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SyxFQUFFLEtBQUssRUFBQyxnQkFBYSwwQkFBMEIsRUFDNUQsd0JBQXdCLEVBQUUsZUFBZSxHQUN0QixFQUNyQiwwR0FBbUMsdUJBQXVCLFlBQ3RELGdJQUFvRCxHQUNwQyxJQUNoQixDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3RleHQtZmlsdGVycy13aWRnZXQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQge1xuICB0eXBlIEFsbFdpZGdldFByb3BzLFxuICBqc3gsIERhdGFTb3VyY2VDb21wb25lbnQsXG4gIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSwgdHlwZSBEYXRhU291cmNlLCBNZXNzYWdlTWFuYWdlciwgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UsXG4gIHR5cGUgQXJjR0lTUXVlcnlQYXJhbXNcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgRmlsdGVyU3RyaW5nSW5wdXQgZnJvbSAnLi9maWx0ZXItc3RyaW5nLWlucHV0J1xuLy8gaW1wb3J0IHtCdXR0b24sIERyb3Bkb3duLCBUZXh0SW5wdXR9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3QgW2RhdGFTb3VyY2UsIHNldERhdGFTb3VyY2VdID0gdXNlU3RhdGU8UXVlcmlhYmxlRGF0YVNvdXJjZSB8IG51bGw+KG51bGwpXG5cbiAgLy8gcnVucyBvbmNlXG4gIGZ1bmN0aW9uIG9uRGF0YVNvdXJjZUNyZWF0ZWQgKGRzOiBEYXRhU291cmNlKSB7XG4gICAgaWYgKGRzKSB7XG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZHMgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZVxuICAgICAgc2V0RGF0YVNvdXJjZShkYXRhU291cmNlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gY3JlYXRlIERhdGFTb3VyY2UnKVxuICAgIH1cbiAgfVxuXG5cbiAgLy8gaGFuZGxlIGNoYW5nZXMgdG8gZmlsdGVyIHN0cmluZy4gdXBkYXRlIG1hcCBhbmQgcHVibGlzaCBuZXcgdmFsdWVzXG4gIGZ1bmN0aW9uIGFwcGx5RmlsdGVyIChmaWx0ZXJTdHJpbmc6IHN0cmluZykge1xuICAgIGlmICghZGF0YVNvdXJjZSkge1xuICAgICAgY29uc29sZS53YXJuKCdEYXRhU291cmNlIGlzIG5vdCB5ZXQgc2V0LiBRdWVyeVBhcmFtcyBjYW5ub3QgdXBkYXRlZCcpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBxOkFyY0dJU1F1ZXJ5UGFyYW1zID0gZmlsdGVyU3RyaW5nID8geyB3aGVyZTogZmlsdGVyU3RyaW5nIH0gOiBudWxsXG4gICAgY29uc29sZS5sb2coJ2FwcGx5RmlsdGVyOiB1cGRhdGluZyBxdWVyeSBwYXJhbXMgd2l0aCcsIHEpXG4gICAgZGF0YVNvdXJjZS51cGRhdGVRdWVyeVBhcmFtcyhxLCBwcm9wcy5pZClcbiAgICBNZXNzYWdlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1Ymxpc2hNZXNzYWdlKG5ldyBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZShwcm9wcy5pZCwgW2RhdGFTb3VyY2UuaWRdKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxuICAgICAgICB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlcz8uWzBdfVxuICAgICAgICB3aWRnZXRJZD17cHJvcHMuaWR9XG4gICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e29uRGF0YVNvdXJjZUNyZWF0ZWR9XG4gICAgICAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEFwaGlhSWRGaWx0ZXIgYXBwbHlGaWx0ZXI9e2FwcGx5RmlsdGVyfT48L0FwaGlhSWRGaWx0ZXI+XG4gICAgICAgIDxEYXRhc2V0SWRGaWx0ZXIgYXBwbHlGaWx0ZXI9e2FwcGx5RmlsdGVyfT48L0RhdGFzZXRJZEZpbHRlcj5cbiAgICAgICAgPFN5bm9ueW1GaWx0ZXIgYXBwbHlGaWx0ZXI9e2FwcGx5RmlsdGVyfT48L1N5bm9ueW1GaWx0ZXI+XG4gICAgICAgIDxWZXJiYXRpbU5hbWVGaWx0ZXIgYXBwbHlGaWx0ZXI9e2FwcGx5RmlsdGVyfT48L1ZlcmJhdGltTmFtZUZpbHRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZnVuY3Rpb24gQXBoaWFJZEZpbHRlciAocHJvcHM6IHsgYXBwbHlGaWx0ZXI6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkIH0pIHtcbiAgY29uc3QgeyBhcHBseUZpbHRlciB9ID0gcHJvcHNcblxuICBmdW5jdGlvbiBvbkNoYW5nZUhhbmRsZXIgKGV2dDpDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2dC50YXJnZXQgYXMgSFRNTENhbGNpdGVJbnB1dFRleHRFbGVtZW50KS52YWx1ZVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgYXBwbHlGaWx0ZXIoYEFwaGlhSUQgPSAnJHt2YWx1ZX0nYClcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwbHlGaWx0ZXIobnVsbClcbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzE1cHgnfX0+XG4gICAgICA8Y2FsY2l0ZS1pbnB1dC10ZXh0XG4gICAgICAgIGlkPVwiYXBoaWEtaWQtdG9vbHRpcFwiIGNsZWFyYWJsZVxuICAgICAgICBzdHlsZT17e3dpZHRoOiAnODAlJ319IGxhYmVsLXRleHQ9XCJBcGhpYSBJRFwiXG4gICAgICAgIG9uY2FsY2l0ZUlucHV0VGV4dENoYW5nZT17b25DaGFuZ2VIYW5kbGVyfT5cbiAgICAgIDwvY2FsY2l0ZS1pbnB1dC10ZXh0PlxuICAgICAgPGNhbGNpdGUtdG9vbHRpcCByZWZlcmVuY2UtZWxlbWVudD1cImFwaGlhLWlkLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxzcGFuPmZpbHRlciBkYXRhIGJ5IEFwaGlhIElEPC9zcGFuPlxuICAgICAgICA8L2NhbGNpdGUtdG9vbHRpcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBEYXRhc2V0SWRGaWx0ZXIgKHByb3BzOiB7IGFwcGx5RmlsdGVyOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCB9KSB7XG4gIGNvbnN0IHsgYXBwbHlGaWx0ZXIgfSA9IHByb3BzXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VIYW5kbGVyIChldnQ6Q3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldnQudGFyZ2V0IGFzIEhUTUxDYWxjaXRlSW5wdXRUZXh0RWxlbWVudCkudmFsdWVcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGFwcGx5RmlsdGVyKGBEYXRhc2V0SUQgPSAnJHt2YWx1ZX0nYClcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwbHlGaWx0ZXIobnVsbClcbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzE1cHgnfX0+XG4gICAgICA8Y2FsY2l0ZS1pbnB1dC10ZXh0XG4gICAgICAgIGlkPVwiZGF0YXNldC1pZC10b29sdGlwXCIgY2xlYXJhYmxlXG4gICAgICAgIHN0eWxlPXt7d2lkdGg6ICc4MCUnfX0gbGFiZWwtdGV4dD1cIkRhdGFzZXQgSURcIlxuICAgICAgICBvbmNhbGNpdGVJbnB1dFRleHRDaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0+XG4gICAgICA8L2NhbGNpdGUtaW5wdXQtdGV4dD5cbiAgICAgIDxjYWxjaXRlLXRvb2x0aXAgcmVmZXJlbmNlLWVsZW1lbnQ9XCJkYXRhc2V0LWlkLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxzcGFuPmZpbHRlciBkYXRhIGJ5IERhdGFzZXQgSUQ8L3NwYW4+XG4gICAgICAgIDwvY2FsY2l0ZS10b29sdGlwPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIFN5bm9ueW1GaWx0ZXIgKHByb3BzOiB7IGFwcGx5RmlsdGVyOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCB9KSB7XG4gIGNvbnN0IHsgYXBwbHlGaWx0ZXIgfSA9IHByb3BzXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VIYW5kbGVyIChldnQ6Q3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldnQudGFyZ2V0IGFzIEhUTUxDYWxjaXRlSW5wdXRUZXh0RWxlbWVudCkudmFsdWVcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGFwcGx5RmlsdGVyKGBTeW5vbnltcyBsaWtlICclJHt2YWx1ZX0lJ2ApXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGx5RmlsdGVyKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxNXB4J319PlxuICAgICAgPGNhbGNpdGUtaW5wdXQtdGV4dFxuICAgICAgICBpZD1cInN5bm9ueW0tdG9vbHRpcFwiIGNsZWFyYWJsZVxuICAgICAgICBzdHlsZT17e3dpZHRoOiAnODAlJ319IGxhYmVsLXRleHQ9XCJTeW5vbnltc1wiXG4gICAgICAgIG9uY2FsY2l0ZUlucHV0VGV4dENoYW5nZT17b25DaGFuZ2VIYW5kbGVyfT5cbiAgICAgIDwvY2FsY2l0ZS1pbnB1dC10ZXh0PlxuICAgICAgPGNhbGNpdGUtdG9vbHRpcCByZWZlcmVuY2UtZWxlbWVudD1cInN5bm9ueW0tdG9vbHRpcFwiPlxuICAgICAgICAgICAgPHNwYW4+ZmlsdGVyIGRhdGEgYnkgU3lub255bXM8L3NwYW4+XG4gICAgICAgIDwvY2FsY2l0ZS10b29sdGlwPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZnVuY3Rpb24gVmVyYmF0aW1OYW1lRmlsdGVyIChwcm9wczogeyBhcHBseUZpbHRlcjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQgfSkge1xuICBjb25zdCB7IGFwcGx5RmlsdGVyIH0gPSBwcm9wc1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlSGFuZGxlciAoZXZ0OkN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSAoZXZ0LnRhcmdldCBhcyBIVE1MQ2FsY2l0ZUlucHV0VGV4dEVsZW1lbnQpLnZhbHVlXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBhcHBseUZpbHRlcihgVmVyYmF0aW1TY2llbnRpZmljTmFtZSBsaWtlICclJHt2YWx1ZX0lJ2ApXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGx5RmlsdGVyKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxNXB4J319PlxuICAgICAgPGNhbGNpdGUtaW5wdXQtdGV4dFxuICAgICAgICBpZD1cInZlcmJhdGltLW5hbWUtdG9vbHRpcFwiIGNsZWFyYWJsZVxuICAgICAgICBzdHlsZT17e3dpZHRoOiAnODAlJ319IGxhYmVsLXRleHQ9XCJWZXJiYXRpbSBTY2llbnRpZmljIE5hbWVcIlxuICAgICAgICBvbmNhbGNpdGVJbnB1dFRleHRDaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0+XG4gICAgICA8L2NhbGNpdGUtaW5wdXQtdGV4dD5cbiAgICAgIDxjYWxjaXRlLXRvb2x0aXAgcmVmZXJlbmNlLWVsZW1lbnQ9XCJ2ZXJiYXRpbS1uYW1lLXRvb2x0aXBcIj5cbiAgICAgICAgICA8c3Bhbj5maWx0ZXIgZGF0YSBieSBWZXJiYXRpbSBTY2llbnRpZmljIE5hbWU8L3NwYW4+XG4gICAgICAgIDwvY2FsY2l0ZS10b29sdGlwPlxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9