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
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_calcite_components__[key] = module[key];
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

/***/ "calcite-components":
/*!*************************************!*\
  !*** external "calcite-components" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_calcite_components__;

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
        console.log('fetching names from: ', props.config.scientificNamesUrl);
        fetch(props.config.scientificNamesUrl).then()
            .then((res) => {
            if (!res.ok) {
                console.warn(`Error reading configuration file from ${props.config.scientificNamesUrl}: `, res.statusText);
                return;
            }
            return res.json();
        })
            .then((nameslist) => {
            if (!nameslist) {
                console.error('configuration file improperly formatted: no names found');
                return;
            }
            if (nameslist.length > 0) {
                console.log(`${nameslist.length} unique scientific names loaded from ${props.config.scientificNamesUrl}`);
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
        // console.log('DataSource created: ', ds)
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
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget p-2", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_3__.CalciteAutocomplete, { ref: autocompleteRef, name: "scientific-names", placeholder: "Select a scientific name", autocomplete: 'off', onCalciteAutocompleteChange: handleAutocompleteChange, onCalciteAutocompleteTextChange: (evt) => { console.log(evt); }, onCalciteAutocompleteTextInput: handleAutocompleteTextInput, onCalciteAutocompleteBeforeClose: (evt) => { console.log(evt); }, onCalciteAutocompleteBeforeOpen: (evt) => { console.log(evt); }, onCalciteAutocompleteClose: handleAutocompleteClose, onCalciteAutocompleteOpen: (evt) => { console.log(evt); }, children: filteredNames.map((name) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_3__.CalciteAutocompleteItem, { value: name, heading: name }, name))) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: props.useDataSources[0], widgetId: props.id, onDataSourceCreated: handleDataSourceCreated, onCreateDataSourceFailed: handleDataSourceFailed })] }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zY2llbnRpZmljLW5hbWUvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDS2pDO0FBQ2lDO0FBTXhCO0FBRTNCLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBK0IsRUFBRSxFQUFFO0lBQ2pELHNEQUFzRDtJQUV0RCxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLCtDQUFRLENBQVcsRUFBRSxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRywrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUN6RCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLCtDQUFRLENBQWdCLElBQUksQ0FBQztJQUNyRSxNQUFNLGVBQWUsR0FBRyw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUNwQyxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQXNCLElBQUksQ0FBQztJ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QyxLQUFLLEVBQ2xCLDJCQUEyQixFQUFHLHdCQUF3QixFQUN0RCwrQkFBK0IsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQzdELDhCQUE4QixFQUFHLDJCQUEyQixFQUM1RCxnQ0FBZ0MsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQzlELCtCQUErQixFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFDN0QsMEJBQTBCLEVBQUcsdUJBQXVCLEVBQ3BELHlCQUF5QixFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsWUFFdEQsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FDM0IsZ0VBQUMsdUVBQXVCLElBRXRCLEtBQUssRUFBRSxJQUFJLEVBQ1gsT0FBTyxFQUFFLElBQUksSUFGUixJQUFJLENBR1QsQ0FDSCxDQUFDLEdBQ2dCLEVBQ3RCLGdFQUFDLDBEQUFtQixJQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUM3RSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFDNUMsd0JBQXdCLEVBQUUsc0JBQXNCLEdBRWhELElBQ0ksQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxNQUFNO0FBRWIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJjYWxjaXRlLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zY2llbnRpZmljLW5hbWUvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2FsY2l0ZV9jb21wb25lbnRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7XHJcbiAgUmVhY3QsXHJcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcclxuICBEYXRhU291cmNlQ29tcG9uZW50LFxyXG4gIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSxcclxuICAvLyB0eXBlIElNRGF0YVNvdXJjZUluZm8sXHJcbiAgdHlwZSBTcWxRdWVyeVBhcmFtcyxcclxuICBNZXNzYWdlTWFuYWdlcixcclxuICBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZVxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB0eXBlIHsgVGFyZ2V0ZWRFdmVudCB9IGZyb20gXCJAZXNyaS9jYWxjaXRlLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQge1xyXG4gIENhbGNpdGVBdXRvY29tcGxldGUsXHJcbiAgQ2FsY2l0ZUF1dG9jb21wbGV0ZUl0ZW1cclxufSBmcm9tICdjYWxjaXRlLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgd2lkZ2V0IHdpdGggcHJvcHM6ICcsIHByb3BzKVxyXG5cclxuICBjb25zdCBbbmFtZXMsIHNldE5hbWVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcclxuICBjb25zdCBbZmlsdGVyZWROYW1lcywgc2V0RmlsdGVyZWROYW1lc10gPSB1c2VTdGF0ZShuYW1lcylcclxuICBjb25zdCBbc2VsZWN0ZWROYW1lLCBzZXRTZWxlY3RlZE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBhdXRvY29tcGxldGVSZWYgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBbZGF0YVNvdXJjZSwgc2V0RGF0YVNvdXJjZV0gPSB1c2VTdGF0ZTxRdWVyaWFibGVEYXRhU291cmNlPihudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVBdXRvY29tcGxldGVDaGFuZ2UgPSAoZXZlbnQ6IFRhcmdldGVkRXZlbnQ8SFRNTENhbGNpdGVBdXRvY29tcGxldGVFbGVtZW50PikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coYGluc2lkZSBoYW5kbGVBdXRvY29tcGxldGVDaGFuZ2Ugd2l0aCBhbiAke2V2ZW50LnR5cGV9IGV2ZW50LiB2YWx1ZTogJHtldmVudC50YXJnZXQudmFsdWV9LCBpbnB1dFZhbHVlOiAke2V2ZW50LnRhcmdldC5pbnB1dFZhbHVlfWApXHJcbiAgICAvLyB1cGRhdGUgdGhlIGlucHV0VmFsdWUgdG8gbWF0Y2ggdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBpdGVtXHJcbiAgICBhdXRvY29tcGxldGVSZWYuY3VycmVudC5pbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcblxyXG4gICAgLy8gc2V0U2VsZWN0ZWROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUF1dG9jb21wbGV0ZVRleHRJbnB1dCA9IChldmVudDogVGFyZ2V0ZWRFdmVudDxIVE1MQ2FsY2l0ZUF1dG9jb21wbGV0ZUVsZW1lbnQ+KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgaW5zaWRlIGhhbmRsZUF1dG9jb21wbGV0ZVRleHRJbnB1dCB3aXRoIGFuICR7ZXZlbnQudHlwZX0gZXZlbnQuIHZhbHVlOiAke2V2ZW50LnRhcmdldC52YWx1ZX0sIGlucHV0VmFsdWU6ICR7ZXZlbnQudGFyZ2V0LmlucHV0VmFsdWV9YClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gZXZlbnQudGFyZ2V0LmlucHV0VmFsdWUudG9Mb3dlckNhc2UoKVxyXG4gICAgc2V0RmlsdGVyZWROYW1lcyggbmFtZXMuZmlsdGVyKChuYW1lKSA9PiBuYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChxdWVyeSkpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQXV0b2NvbXBsZXRlQ2xvc2UgPSAoZXZlbnQ6IFRhcmdldGVkRXZlbnQ8SFRNTENhbGNpdGVBdXRvY29tcGxldGVFbGVtZW50PikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coYGluc2lkZSBoYW5kbGVBdXRvY29tcGxldGVDbG9zZSB3aXRoIGFuICR7ZXZlbnQudHlwZX0gZXZlbnQuIHZhbHVlOiAke2V2ZW50LnRhcmdldC52YWx1ZX0sIGlucHV0VmFsdWU6ICR7ZXZlbnQudGFyZ2V0LmlucHV0VmFsdWV9YClcclxuICAgIC8vIG9ubHkgYWxsb3cgdmFsaWQgc2VsZWN0aW9ucyAtIGlmIGlucHV0VmFsdWUgZG9lc24ndCBtYXRjaCBhbiBleGlzdGluZyBuYW1lLCBjbGVhciB0aGUgaW5wdXRcclxuICAgIGlmIChuYW1lcy5pbmNsdWRlcyhldmVudC50YXJnZXQuaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgc2V0U2VsZWN0ZWROYW1lKGV2ZW50LnRhcmdldC5pbnB1dFZhbHVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXV0b2NvbXBsZXRlUmVmLmN1cnJlbnQuaW5wdXRWYWx1ZSA9ICcnXHJcbiAgICAgIHNldFNlbGVjdGVkTmFtZShudWxsKVxyXG4gICAgICBjb25zb2xlLndhcm4oYHZhbHVlICR7ZXZlbnQudGFyZ2V0LmlucHV0VmFsdWV9IG5vdCBmb3VuZCBpbiBuYW1lcyBsaXN0YClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWRhdGFTb3VyY2UpIHtcclxuICAgICAgLy8gY29uc29sZS53YXJuKCdubyBEYXRhU291cmNlIC0gY2Fubm90IHVwZGF0ZSBxdWVyeVBhcmFtcycpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkUXVlcnkoc2VsZWN0ZWROYW1lOnN0cmluZyk6U3FsUXVlcnlQYXJhbXMge1xyXG4gICAgICBpZiAoc2VsZWN0ZWROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuICh7IHdoZXJlOiBgU2NpZW50aWZpY05hbWUgPSAnJHtzZWxlY3RlZE5hbWV9J2AgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZygndXBkYXRpbmcgcXVlcnlQYXJhbXMgd2l0aDogJywgYnVpbGRRdWVyeShzZWxlY3RlZE5hbWUpKVxyXG4gICAgZGF0YVNvdXJjZS51cGRhdGVRdWVyeVBhcmFtcyhidWlsZFF1ZXJ5KHNlbGVjdGVkTmFtZSksIHByb3BzLmlkKVxyXG4gICAgTWVzc2FnZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdWJsaXNoTWVzc2FnZShuZXcgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UocHJvcHMuaWQsIFtkYXRhU291cmNlLmlkXSkpXHJcblxyXG4gIH0sIFtzZWxlY3RlZE5hbWUsIGRhdGFTb3VyY2UsIHByb3BzLmlkXSlcclxuXHJcbiAgLy8gc2hvdWxkIG9ubHkgcnVuIG9uIGluaXRpYWwgbG9hZFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZmV0Y2hpbmcgbmFtZXMgZnJvbTogJywgcHJvcHMuY29uZmlnLnNjaWVudGlmaWNOYW1lc1VybClcclxuICAgIGZldGNoKHByb3BzLmNvbmZpZy5zY2llbnRpZmljTmFtZXNVcmwpLnRoZW4oKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgRXJyb3IgcmVhZGluZyBjb25maWd1cmF0aW9uIGZpbGUgZnJvbSAke3Byb3BzLmNvbmZpZy5zY2llbnRpZmljTmFtZXNVcmx9OiBgLCByZXMuc3RhdHVzVGV4dClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigobmFtZXNsaXN0KSA9PiB7XHJcbiAgICAgICAgaWYgKCFuYW1lc2xpc3QpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NvbmZpZ3VyYXRpb24gZmlsZSBpbXByb3Blcmx5IGZvcm1hdHRlZDogbm8gbmFtZXMgZm91bmQnKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lc2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZXNsaXN0Lmxlbmd0aH0gdW5pcXVlIHNjaWVudGlmaWMgbmFtZXMgbG9hZGVkIGZyb20gJHtwcm9wcy5jb25maWcuc2NpZW50aWZpY05hbWVzVXJsfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE5hbWVzKG5hbWVzbGlzdClcclxuICAgICAgICBzZXRGaWx0ZXJlZE5hbWVzKG5hbWVzbGlzdClcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvciBmZXRjaGluZyBjb25maWd1cmF0aW9uIGZpbGU6ICcsIGVycilcclxuICAgICAgfSlcclxuICB9LCBbcHJvcHMuY29uZmlnLnNjaWVudGlmaWNOYW1lc1VybF0pXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZURhdGFTb3VyY2VDcmVhdGVkKGRzOiBRdWVyaWFibGVEYXRhU291cmNlKSB7XHJcbiAgICBpZiAoIWRzKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBjcmVhdGUgRGF0YVNvdXJjZScpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ0RhdGFTb3VyY2UgY3JlYXRlZDogJywgZHMpXHJcbiAgICBzZXREYXRhU291cmNlKGRzKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRGF0YVNvdXJjZUZhaWxlZChlcnJvcjphbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGFTb3VyY2UgY3JlYXRpb24gZmFpbGVkOiAnLCBlcnJvcilcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZURhdGFTb3VyY2VDaGFuZ2UoaW5mbzpJTURhdGFTb3VyY2VJbmZvKSB7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZygnRGF0YVNvdXJjZSBpbmZvIGNoYW5nZWQ6ICcsIGluZm8pXHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb25zdCBpc0RzQ29uZmlndXJlZCA9ICgpID0+IHtcclxuICAvLyAgIGlmIChwcm9wcy51c2VEYXRhU291cmNlcyAmJlxyXG4gIC8vICAgICBwcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEgKSB7XHJcbiAgLy8gICAgIHJldHVybiB0cnVlXHJcbiAgLy8gICB9XHJcbiAgLy8gICByZXR1cm4gZmFsc2VcclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0IHAtMlwiPlxyXG4gICAgICA8Q2FsY2l0ZUF1dG9jb21wbGV0ZSByZWY9e2F1dG9jb21wbGV0ZVJlZn1cclxuICAgICAgICBuYW1lPVwic2NpZW50aWZpYy1uYW1lc1wiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBzY2llbnRpZmljIG5hbWVcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJ1xyXG4gICAgICAgIG9uQ2FsY2l0ZUF1dG9jb21wbGV0ZUNoYW5nZT17IGhhbmRsZUF1dG9jb21wbGV0ZUNoYW5nZSB9XHJcbiAgICAgICAgb25DYWxjaXRlQXV0b2NvbXBsZXRlVGV4dENoYW5nZT17KGV2dCk9PiB7IGNvbnNvbGUubG9nKGV2dCkgfX1cclxuICAgICAgICBvbkNhbGNpdGVBdXRvY29tcGxldGVUZXh0SW5wdXQ9eyBoYW5kbGVBdXRvY29tcGxldGVUZXh0SW5wdXQgfVxyXG4gICAgICAgIG9uQ2FsY2l0ZUF1dG9jb21wbGV0ZUJlZm9yZUNsb3NlPXsoZXZ0KT0+IHsgY29uc29sZS5sb2coZXZ0KSB9fVxyXG4gICAgICAgIG9uQ2FsY2l0ZUF1dG9jb21wbGV0ZUJlZm9yZU9wZW49eyhldnQpPT4geyBjb25zb2xlLmxvZyhldnQpIH19XHJcbiAgICAgICAgb25DYWxjaXRlQXV0b2NvbXBsZXRlQ2xvc2U9eyBoYW5kbGVBdXRvY29tcGxldGVDbG9zZSB9XHJcbiAgICAgICAgb25DYWxjaXRlQXV0b2NvbXBsZXRlT3Blbj17KGV2dCk9PiB7IGNvbnNvbGUubG9nKGV2dCkgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtmaWx0ZXJlZE5hbWVzLm1hcCgobmFtZSkgPT4gKFxyXG4gICAgICAgICAgPENhbGNpdGVBdXRvY29tcGxldGVJdGVtXHJcbiAgICAgICAgICAgIGtleT17bmFtZX1cclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIGhlYWRpbmc9e25hbWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9DYWxjaXRlQXV0b2NvbXBsZXRlPlxyXG4gICAgPERhdGFTb3VyY2VDb21wb25lbnQgdXNlRGF0YVNvdXJjZT17cHJvcHMudXNlRGF0YVNvdXJjZXNbMF19IHdpZGdldElkPXtwcm9wcy5pZH1cclxuICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17aGFuZGxlRGF0YVNvdXJjZUNyZWF0ZWR9XHJcbiAgICAgIG9uQ3JlYXRlRGF0YVNvdXJjZUZhaWxlZD17aGFuZGxlRGF0YVNvdXJjZUZhaWxlZH1cclxuICAgICAgLy8gb25EYXRhU291cmNlSW5mb0NoYW5nZT17aGFuZGxlRGF0YVNvdXJjZUNoYW5nZX1cclxuICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9