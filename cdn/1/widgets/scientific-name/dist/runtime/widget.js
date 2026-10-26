System.register(["jimu-core/emotion","jimu-core","jimu-core/react","calcite-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_calcite_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_calcite_components__, "__esModule", { value: true });
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
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_calcite_components__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_calcite_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "calcite-components"
/*!*************************************!*\
  !*** external "calcite-components" ***!
  \*************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_calcite_components__;

/***/ },

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
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/scientific-name/src/runtime/widget.tsx ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var calcite_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! calcite-components */ "calcite-components");




const Widget = (props) => {
    // console.log('rendering widget with props: ', props)
    const [names, setNames] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [filteredNames, setFilteredNames] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(names);
    const [selectedName, setSelectedName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const autocompleteRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [dataSource, setDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const handleAutocompleteChange = (event) => {
        // console.log(`inside handleAutocompleteChange with an ${event.type} event. value: ${event.target.value}, inputValue: ${event.target.inputValue}`)
        // update the inputValue to match the value of the selected item
        autocompleteRef.current.inputValue = event.target.value;
        // setSelectedName(event.target.value)
    };
    const handleAutocompleteTextInput = (event) => {
        // console.log(`inside handleAutocompleteTextInput with an ${event.type} event. value: ${event.target.value}, inputValue: ${event.target.inputValue}`)
        const query = event.target.inputValue.toLowerCase();
        setFilteredNames(names.filter((name) => name.toLowerCase().startsWith(query)));
    };
    const handleAutocompleteClose = (event) => {
        // console.log(`inside handleAutocompleteClose with an ${event.type} event. value: ${event.target.value}, inputValue: ${event.target.inputValue}`)
        // only allow valid selections - if inputValue doesn't match an existing name, clear the input
        if (names.includes(event.target.inputValue)) {
            setSelectedName(event.target.inputValue);
        }
        else {
            autocompleteRef.current.inputValue = '';
            setSelectedName(null);
            console.warn(`value ${event.target.inputValue} not found in names list`);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (!dataSource) {
            // console.warn('no DataSource - cannot update queryParams')
            return;
        }
        function buildQuery(selectedName) {
            if (selectedName) {
                return ({ where: `ScientificName = '${selectedName}'` });
            }
            else {
                return null;
            }
        }
        // console.log('updating queryParams with: ', buildQuery(selectedName))
        dataSource.updateQueryParams(buildQuery(selectedName), props.id);
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceFilterChangeMessage(props.id, [dataSource.id]));
    }, [selectedName, dataSource, props.id]);
    // should only run on initial load
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        console.info('fetching names from: ', props.config.scientificNamesUrl);
        fetch(props.config.scientificNamesUrl)
            .then((res) => {
            if (!res.ok) {
                throw new Error(`Error reading configuration file from ${props.config.scientificNamesUrl}: ${res.statusText}`);
            }
            return res.json();
        })
            .then((nameslist) => {
            if (!nameslist) {
                throw new Error('configuration file improperly formatted: no names found');
            }
            if (nameslist.length > 0) {
                console.info(`${nameslist.length} unique scientific names loaded from ${props.config.scientificNamesUrl}`);
            }
            setNames(nameslist);
            setFilteredNames(nameslist);
        })
            .catch((err) => {
            console.error('error fetching configuration file: ', err);
        });
    }, [props.config.scientificNamesUrl]);
    function handleDataSourceCreated(ds) {
        if (!ds) {
            console.error('unable to create DataSource');
            return;
        }
        setDataSource(ds);
    }
    function handleDataSourceFailed(error) {
        console.error('DataSource creation failed: ', error);
    }
    // function handleDataSourceChange(info:IMDataSourceInfo) {
    //   // console.log('DataSource info changed: ', info)
    // }
    // const isDsConfigured = () => {
    //   if (props.useDataSources &&
    //     props.useDataSources.length === 1 ) {
    //     return true
    //   }
    //   return false
    // }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget p-2", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-autocomplete", { ref: autocompleteRef, style: { "--calcite-autocomplete-menu-max-size-y": "250px" }, name: "scientific-names", placeholder: "Select a scientific name", autocomplete: 'off', oncalciteAutocompleteChange: handleAutocompleteChange, oncalciteAutocompleteTextChange: (evt) => { console.log(evt); }, oncalciteAutocompleteTextInput: handleAutocompleteTextInput, oncalciteAutocompleteBeforeClose: (evt) => { console.log(evt); }, oncalciteAutocompleteBeforeOpen: (evt) => { console.log(evt); }, oncalciteAutocompleteClose: handleAutocompleteClose, oncalciteAutocompleteOpen: (evt) => { console.log(evt); }, children: filteredNames.map((name) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-autocomplete-item", { value: name, heading: name }, name))) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: props.useDataSources[0], widgetId: props.id, onDataSourceCreated: handleDataSourceCreated, onCreateDataSourceFailed: handleDataSourceFailed })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zY2llbnRpZmljLW5hbWUvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ01qQztBQUNpQztBQUd4QjtBQUczQixNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQStCLEVBQUUsRUFBRTtJQUNqRCxzREFBc0Q7SUFFdEQsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQ0FBUSxDQUFXLEVBQUUsQ0FBQztJQUNoRCxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDekQsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRywrQ0FBUSxDQUFnQixJQUFJLENBQUM7SUFDckUsTUFBTSxlQUFlLEdBQUcsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDcEMsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFh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QixFQUN0QyxZQUFZLEVBQUMsS0FBSyxFQUNsQiwyQkFBMkIsRUFBRyx3QkFBd0IsRUFDdEQsK0JBQStCLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUM3RCw4QkFBOEIsRUFBRywyQkFBMkIsRUFDNUQsZ0NBQWdDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUM5RCwrQkFBK0IsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQzdELDBCQUEwQixFQUFHLHVCQUF1QixFQUNwRCx5QkFBeUIsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLFlBRXRELGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQzNCLCtGQUVFLEtBQUssRUFBRSxJQUFJLEVBQ1gsT0FBTyxFQUFFLElBQUksSUFGUixJQUFJLENBR1QsQ0FDSCxDQUFDLEdBQ2lCLEVBQ3ZCLGdFQUFDLDBEQUFtQixJQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUM3RSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFDNUMsd0JBQXdCLEVBQUUsc0JBQXNCLEdBRWhELElBQ0ksQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxNQUFNO0FBRWIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImNhbGNpdGUtY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zY2llbnRpZmljLW5hbWUvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2FsY2l0ZV9jb21wb25lbnRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHtcclxuICBSZWFjdCxcclxuICB0eXBlIEFsbFdpZGdldFByb3BzLFxyXG4gIERhdGFTb3VyY2VDb21wb25lbnQsXHJcbiAgdHlwZSBRdWVyaWFibGVEYXRhU291cmNlLFxyXG4gIHR5cGUgRGF0YVNvdXJjZSxcclxuICAvLyB0eXBlIElNRGF0YVNvdXJjZUluZm8sXHJcbiAgdHlwZSBTcWxRdWVyeVBhcmFtcyxcclxuICBNZXNzYWdlTWFuYWdlcixcclxuICBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZVxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB0eXBlIHsgVGFyZ2V0ZWRFdmVudCB9IGZyb20gXCJAZXNyaS9jYWxjaXRlLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgJ2NhbGNpdGUtY29tcG9uZW50cydcclxuXHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgd2lkZ2V0IHdpdGggcHJvcHM6ICcsIHByb3BzKVxyXG5cclxuICBjb25zdCBbbmFtZXMsIHNldE5hbWVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcclxuICBjb25zdCBbZmlsdGVyZWROYW1lcywgc2V0RmlsdGVyZWROYW1lc10gPSB1c2VTdGF0ZShuYW1lcylcclxuICBjb25zdCBbc2VsZWN0ZWROYW1lLCBzZXRTZWxlY3RlZE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBhdXRvY29tcGxldGVSZWYgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBbZGF0YVNvdXJjZSwgc2V0RGF0YVNvdXJjZV0gPSB1c2VTdGF0ZTxRdWVyaWFibGVEYXRhU291cmNlPihudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVBdXRvY29tcGxldGVDaGFuZ2UgPSAoZXZlbnQ6IFRhcmdldGVkRXZlbnQ8SFRNTENhbGNpdGVBdXRvY29tcGxldGVFbGVtZW50PikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coYGluc2lkZSBoYW5kbGVBdXRvY29tcGxldGVDaGFuZ2Ugd2l0aCBhbiAke2V2ZW50LnR5cGV9IGV2ZW50LiB2YWx1ZTogJHtldmVudC50YXJnZXQudmFsdWV9LCBpbnB1dFZhbHVlOiAke2V2ZW50LnRhcmdldC5pbnB1dFZhbHVlfWApXHJcbiAgICAvLyB1cGRhdGUgdGhlIGlucHV0VmFsdWUgdG8gbWF0Y2ggdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBpdGVtXHJcbiAgICBhdXRvY29tcGxldGVSZWYuY3VycmVudC5pbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcblxyXG4gICAgLy8gc2V0U2VsZWN0ZWROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUF1dG9jb21wbGV0ZVRleHRJbnB1dCA9IChldmVudDogVGFyZ2V0ZWRFdmVudDxIVE1MQ2FsY2l0ZUF1dG9jb21wbGV0ZUVsZW1lbnQ+KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgaW5zaWRlIGhhbmRsZUF1dG9jb21wbGV0ZVRleHRJbnB1dCB3aXRoIGFuICR7ZXZlbnQudHlwZX0gZXZlbnQuIHZhbHVlOiAke2V2ZW50LnRhcmdldC52YWx1ZX0sIGlucHV0VmFsdWU6ICR7ZXZlbnQudGFyZ2V0LmlucHV0VmFsdWV9YClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gZXZlbnQudGFyZ2V0LmlucHV0VmFsdWUudG9Mb3dlckNhc2UoKVxyXG4gICAgc2V0RmlsdGVyZWROYW1lcyggbmFtZXMuZmlsdGVyKChuYW1lKSA9PiBuYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChxdWVyeSkpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQXV0b2NvbXBsZXRlQ2xvc2UgPSAoZXZlbnQ6IFRhcmdldGVkRXZlbnQ8SFRNTENhbGNpdGVBdXRvY29tcGxldGVFbGVtZW50PikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coYGluc2lkZSBoYW5kbGVBdXRvY29tcGxldGVDbG9zZSB3aXRoIGFuICR7ZXZlbnQudHlwZX0gZXZlbnQuIHZhbHVlOiAke2V2ZW50LnRhcmdldC52YWx1ZX0sIGlucHV0VmFsdWU6ICR7ZXZlbnQudGFyZ2V0LmlucHV0VmFsdWV9YClcclxuICAgIC8vIG9ubHkgYWxsb3cgdmFsaWQgc2VsZWN0aW9ucyAtIGlmIGlucHV0VmFsdWUgZG9lc24ndCBtYXRjaCBhbiBleGlzdGluZyBuYW1lLCBjbGVhciB0aGUgaW5wdXRcclxuICAgIGlmIChuYW1lcy5pbmNsdWRlcyhldmVudC50YXJnZXQuaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgc2V0U2VsZWN0ZWROYW1lKGV2ZW50LnRhcmdldC5pbnB1dFZhbHVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXV0b2NvbXBsZXRlUmVmLmN1cnJlbnQuaW5wdXRWYWx1ZSA9ICcnXHJcbiAgICAgIHNldFNlbGVjdGVkTmFtZShudWxsKVxyXG4gICAgICBjb25zb2xlLndhcm4oYHZhbHVlICR7ZXZlbnQudGFyZ2V0LmlucHV0VmFsdWV9IG5vdCBmb3VuZCBpbiBuYW1lcyBsaXN0YClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWRhdGFTb3VyY2UpIHtcclxuICAgICAgLy8gY29uc29sZS53YXJuKCdubyBEYXRhU291cmNlIC0gY2Fubm90IHVwZGF0ZSBxdWVyeVBhcmFtcycpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkUXVlcnkgKHNlbGVjdGVkTmFtZTpzdHJpbmcpOlNxbFF1ZXJ5UGFyYW1zIHtcclxuICAgICAgaWYgKHNlbGVjdGVkTmFtZSkge1xyXG4gICAgICAgIHJldHVybiAoeyB3aGVyZTogYFNjaWVudGlmaWNOYW1lID0gJyR7c2VsZWN0ZWROYW1lfSdgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ3VwZGF0aW5nIHF1ZXJ5UGFyYW1zIHdpdGg6ICcsIGJ1aWxkUXVlcnkoc2VsZWN0ZWROYW1lKSlcclxuICAgIGRhdGFTb3VyY2UudXBkYXRlUXVlcnlQYXJhbXMoYnVpbGRRdWVyeShzZWxlY3RlZE5hbWUpLCBwcm9wcy5pZClcclxuICAgIE1lc3NhZ2VNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVibGlzaE1lc3NhZ2UobmV3IERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlKHByb3BzLmlkLCBbZGF0YVNvdXJjZS5pZF0pKVxyXG5cclxuICB9LCBbc2VsZWN0ZWROYW1lLCBkYXRhU291cmNlLCBwcm9wcy5pZF0pXHJcblxyXG4gIC8vIHNob3VsZCBvbmx5IHJ1biBvbiBpbml0aWFsIGxvYWRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5pbmZvKCdmZXRjaGluZyBuYW1lcyBmcm9tOiAnLCBwcm9wcy5jb25maWcuc2NpZW50aWZpY05hbWVzVXJsKVxyXG4gICAgZmV0Y2gocHJvcHMuY29uZmlnLnNjaWVudGlmaWNOYW1lc1VybClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHJlYWRpbmcgY29uZmlndXJhdGlvbiBmaWxlIGZyb20gJHtwcm9wcy5jb25maWcuc2NpZW50aWZpY05hbWVzVXJsfTogJHtyZXMuc3RhdHVzVGV4dH1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigobmFtZXNsaXN0KSA9PiB7XHJcbiAgICAgICAgaWYgKCFuYW1lc2xpc3QpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29uZmlndXJhdGlvbiBmaWxlIGltcHJvcGVybHkgZm9ybWF0dGVkOiBubyBuYW1lcyBmb3VuZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lc2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc29sZS5pbmZvKGAke25hbWVzbGlzdC5sZW5ndGh9IHVuaXF1ZSBzY2llbnRpZmljIG5hbWVzIGxvYWRlZCBmcm9tICR7cHJvcHMuY29uZmlnLnNjaWVudGlmaWNOYW1lc1VybH1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXROYW1lcyhuYW1lc2xpc3QpXHJcbiAgICAgICAgc2V0RmlsdGVyZWROYW1lcyhuYW1lc2xpc3QpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3IgZmV0Y2hpbmcgY29uZmlndXJhdGlvbiBmaWxlOiAnLCBlcnIpXHJcbiAgICAgIH0pXHJcbiAgfSwgW3Byb3BzLmNvbmZpZy5zY2llbnRpZmljTmFtZXNVcmxdKVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVEYXRhU291cmNlQ3JlYXRlZChkczpEYXRhU291cmNlKSB7XHJcbiAgICBpZiAoIWRzKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBjcmVhdGUgRGF0YVNvdXJjZScpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc2V0RGF0YVNvdXJjZShkcyBhcyBRdWVyaWFibGVEYXRhU291cmNlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRGF0YVNvdXJjZUZhaWxlZChlcnJvcjphbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGFTb3VyY2UgY3JlYXRpb24gZmFpbGVkOiAnLCBlcnJvcilcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZURhdGFTb3VyY2VDaGFuZ2UoaW5mbzpJTURhdGFTb3VyY2VJbmZvKSB7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZygnRGF0YVNvdXJjZSBpbmZvIGNoYW5nZWQ6ICcsIGluZm8pXHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb25zdCBpc0RzQ29uZmlndXJlZCA9ICgpID0+IHtcclxuICAvLyAgIGlmIChwcm9wcy51c2VEYXRhU291cmNlcyAmJlxyXG4gIC8vICAgICBwcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEgKSB7XHJcbiAgLy8gICAgIHJldHVybiB0cnVlXHJcbiAgLy8gICB9XHJcbiAgLy8gICByZXR1cm4gZmFsc2VcclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0IHAtMlwiPlxyXG4gICAgICA8Y2FsY2l0ZS1hdXRvY29tcGxldGUgcmVmPXthdXRvY29tcGxldGVSZWZ9XHJcbiAgICAgICAgc3R5bGU9e3sgXCItLWNhbGNpdGUtYXV0b2NvbXBsZXRlLW1lbnUtbWF4LXNpemUteVwiOiBcIjI1MHB4XCIgfX1cclxuICAgICAgICBuYW1lPVwic2NpZW50aWZpYy1uYW1lc1wiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBzY2llbnRpZmljIG5hbWVcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJ1xyXG4gICAgICAgIG9uY2FsY2l0ZUF1dG9jb21wbGV0ZUNoYW5nZT17IGhhbmRsZUF1dG9jb21wbGV0ZUNoYW5nZSB9XHJcbiAgICAgICAgb25jYWxjaXRlQXV0b2NvbXBsZXRlVGV4dENoYW5nZT17KGV2dCk9PiB7IGNvbnNvbGUubG9nKGV2dCkgfX1cclxuICAgICAgICBvbmNhbGNpdGVBdXRvY29tcGxldGVUZXh0SW5wdXQ9eyBoYW5kbGVBdXRvY29tcGxldGVUZXh0SW5wdXQgfVxyXG4gICAgICAgIG9uY2FsY2l0ZUF1dG9jb21wbGV0ZUJlZm9yZUNsb3NlPXsoZXZ0KT0+IHsgY29uc29sZS5sb2coZXZ0KSB9fVxyXG4gICAgICAgIG9uY2FsY2l0ZUF1dG9jb21wbGV0ZUJlZm9yZU9wZW49eyhldnQpPT4geyBjb25zb2xlLmxvZyhldnQpIH19XHJcbiAgICAgICAgb25jYWxjaXRlQXV0b2NvbXBsZXRlQ2xvc2U9eyBoYW5kbGVBdXRvY29tcGxldGVDbG9zZSB9XHJcbiAgICAgICAgb25jYWxjaXRlQXV0b2NvbXBsZXRlT3Blbj17KGV2dCk9PiB7IGNvbnNvbGUubG9nKGV2dCkgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtmaWx0ZXJlZE5hbWVzLm1hcCgobmFtZSkgPT4gKFxyXG4gICAgICAgICAgPGNhbGNpdGUtYXV0b2NvbXBsZXRlLWl0ZW1cclxuICAgICAgICAgICAga2V5PXtuYW1lfVxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgaGVhZGluZz17bmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2NhbGNpdGUtYXV0b2NvbXBsZXRlPlxyXG4gICAgPERhdGFTb3VyY2VDb21wb25lbnQgdXNlRGF0YVNvdXJjZT17cHJvcHMudXNlRGF0YVNvdXJjZXNbMF19IHdpZGdldElkPXtwcm9wcy5pZH1cclxuICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17aGFuZGxlRGF0YVNvdXJjZUNyZWF0ZWR9XHJcbiAgICAgIG9uQ3JlYXRlRGF0YVNvdXJjZUZhaWxlZD17aGFuZGxlRGF0YVNvdXJjZUZhaWxlZH1cclxuICAgICAgLy8gb25EYXRhU291cmNlSW5mb0NoYW5nZT17aGFuZGxlRGF0YVNvdXJjZUNoYW5nZX1cclxuICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9