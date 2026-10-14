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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zY2llbnRpZmljLW5hbWUvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTWpDO0FBQ2lDO0FBR3hCO0FBRzNCLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBK0IsRUFBRSxFQUFFO0lBQ2pELHNEQUFzRDtJQUV0RCxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLCtDQUFRLENBQVcsRUFBRSxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRywrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUN6RCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLCtDQUFRLENBQWdCLElBQUksQ0FBQztJQUNyRSxNQUFNLGVBQWUsR0FBRyw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUNwQyxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQXNCLElBQUksQ0FBQztJ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QixFQUFHLHdCQUF3QixFQUN0RCwrQkFBK0IsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQzdELDhCQUE4QixFQUFHLDJCQUEyQixFQUM1RCxnQ0FBZ0MsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQzlELCtCQUErQixFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFDN0QsMEJBQTBCLEVBQUcsdUJBQXVCLEVBQ3BELHlCQUF5QixFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsWUFFdEQsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FDM0IsK0ZBRUUsS0FBSyxFQUFFLElBQUksRUFDWCxPQUFPLEVBQUUsSUFBSSxJQUZSLElBQUksQ0FHVCxDQUNILENBQUMsR0FDaUIsRUFDdkIsZ0VBQUMsMERBQW1CLElBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQzdFLG1CQUFtQixFQUFFLHVCQUF1QixFQUM1Qyx3QkFBd0IsRUFBRSxzQkFBc0IsR0FFaEQsSUFDSSxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImNhbGNpdGUtY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NjaWVudGlmaWMtbmFtZS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYWxjaXRlX2NvbXBvbmVudHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHtcclxuICBSZWFjdCxcclxuICB0eXBlIEFsbFdpZGdldFByb3BzLFxyXG4gIERhdGFTb3VyY2VDb21wb25lbnQsXHJcbiAgdHlwZSBRdWVyaWFibGVEYXRhU291cmNlLFxyXG4gIHR5cGUgRGF0YVNvdXJjZSxcclxuICAvLyB0eXBlIElNRGF0YVNvdXJjZUluZm8sXHJcbiAgdHlwZSBTcWxRdWVyeVBhcmFtcyxcclxuICBNZXNzYWdlTWFuYWdlcixcclxuICBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZVxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB0eXBlIHsgVGFyZ2V0ZWRFdmVudCB9IGZyb20gXCJAZXNyaS9jYWxjaXRlLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgJ2NhbGNpdGUtY29tcG9uZW50cydcclxuXHJcblxyXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgd2lkZ2V0IHdpdGggcHJvcHM6ICcsIHByb3BzKVxyXG5cclxuICBjb25zdCBbbmFtZXMsIHNldE5hbWVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcclxuICBjb25zdCBbZmlsdGVyZWROYW1lcywgc2V0RmlsdGVyZWROYW1lc10gPSB1c2VTdGF0ZShuYW1lcylcclxuICBjb25zdCBbc2VsZWN0ZWROYW1lLCBzZXRTZWxlY3RlZE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBhdXRvY29tcGxldGVSZWYgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBbZGF0YVNvdXJjZSwgc2V0RGF0YVNvdXJjZV0gPSB1c2VTdGF0ZTxRdWVyaWFibGVEYXRhU291cmNlPihudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVBdXRvY29tcGxldGVDaGFuZ2UgPSAoZXZlbnQ6IFRhcmdldGVkRXZlbnQ8SFRNTENhbGNpdGVBdXRvY29tcGxldGVFbGVtZW50PikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coYGluc2lkZSBoYW5kbGVBdXRvY29tcGxldGVDaGFuZ2Ugd2l0aCBhbiAke2V2ZW50LnR5cGV9IGV2ZW50LiB2YWx1ZTogJHtldmVudC50YXJnZXQudmFsdWV9LCBpbnB1dFZhbHVlOiAke2V2ZW50LnRhcmdldC5pbnB1dFZhbHVlfWApXHJcbiAgICAvLyB1cGRhdGUgdGhlIGlucHV0VmFsdWUgdG8gbWF0Y2ggdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBpdGVtXHJcbiAgICBhdXRvY29tcGxldGVSZWYuY3VycmVudC5pbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcblxyXG4gICAgLy8gc2V0U2VsZWN0ZWROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUF1dG9jb21wbGV0ZVRleHRJbnB1dCA9IChldmVudDogVGFyZ2V0ZWRFdmVudDxIVE1MQ2FsY2l0ZUF1dG9jb21wbGV0ZUVsZW1lbnQ+KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgaW5zaWRlIGhhbmRsZUF1dG9jb21wbGV0ZVRleHRJbnB1dCB3aXRoIGFuICR7ZXZlbnQudHlwZX0gZXZlbnQuIHZhbHVlOiAke2V2ZW50LnRhcmdldC52YWx1ZX0sIGlucHV0VmFsdWU6ICR7ZXZlbnQudGFyZ2V0LmlucHV0VmFsdWV9YClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gZXZlbnQudGFyZ2V0LmlucHV0VmFsdWUudG9Mb3dlckNhc2UoKVxyXG4gICAgc2V0RmlsdGVyZWROYW1lcyggbmFtZXMuZmlsdGVyKChuYW1lKSA9PiBuYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChxdWVyeSkpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQXV0b2NvbXBsZXRlQ2xvc2UgPSAoZXZlbnQ6IFRhcmdldGVkRXZlbnQ8SFRNTENhbGNpdGVBdXRvY29tcGxldGVFbGVtZW50PikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coYGluc2lkZSBoYW5kbGVBdXRvY29tcGxldGVDbG9zZSB3aXRoIGFuICR7ZXZlbnQudHlwZX0gZXZlbnQuIHZhbHVlOiAke2V2ZW50LnRhcmdldC52YWx1ZX0sIGlucHV0VmFsdWU6ICR7ZXZlbnQudGFyZ2V0LmlucHV0VmFsdWV9YClcclxuICAgIC8vIG9ubHkgYWxsb3cgdmFsaWQgc2VsZWN0aW9ucyAtIGlmIGlucHV0VmFsdWUgZG9lc24ndCBtYXRjaCBhbiBleGlzdGluZyBuYW1lLCBjbGVhciB0aGUgaW5wdXRcclxuICAgIGlmIChuYW1lcy5pbmNsdWRlcyhldmVudC50YXJnZXQuaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgc2V0U2VsZWN0ZWROYW1lKGV2ZW50LnRhcmdldC5pbnB1dFZhbHVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXV0b2NvbXBsZXRlUmVmLmN1cnJlbnQuaW5wdXRWYWx1ZSA9ICcnXHJcbiAgICAgIHNldFNlbGVjdGVkTmFtZShudWxsKVxyXG4gICAgICBjb25zb2xlLndhcm4oYHZhbHVlICR7ZXZlbnQudGFyZ2V0LmlucHV0VmFsdWV9IG5vdCBmb3VuZCBpbiBuYW1lcyBsaXN0YClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWRhdGFTb3VyY2UpIHtcclxuICAgICAgLy8gY29uc29sZS53YXJuKCdubyBEYXRhU291cmNlIC0gY2Fubm90IHVwZGF0ZSBxdWVyeVBhcmFtcycpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkUXVlcnkgKHNlbGVjdGVkTmFtZTpzdHJpbmcpOlNxbFF1ZXJ5UGFyYW1zIHtcclxuICAgICAgaWYgKHNlbGVjdGVkTmFtZSkge1xyXG4gICAgICAgIHJldHVybiAoeyB3aGVyZTogYFNjaWVudGlmaWNOYW1lID0gJyR7c2VsZWN0ZWROYW1lfSdgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ3VwZGF0aW5nIHF1ZXJ5UGFyYW1zIHdpdGg6ICcsIGJ1aWxkUXVlcnkoc2VsZWN0ZWROYW1lKSlcclxuICAgIGRhdGFTb3VyY2UudXBkYXRlUXVlcnlQYXJhbXMoYnVpbGRRdWVyeShzZWxlY3RlZE5hbWUpLCBwcm9wcy5pZClcclxuICAgIE1lc3NhZ2VNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVibGlzaE1lc3NhZ2UobmV3IERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlKHByb3BzLmlkLCBbZGF0YVNvdXJjZS5pZF0pKVxyXG5cclxuICB9LCBbc2VsZWN0ZWROYW1lLCBkYXRhU291cmNlLCBwcm9wcy5pZF0pXHJcblxyXG4gIC8vIHNob3VsZCBvbmx5IHJ1biBvbiBpbml0aWFsIGxvYWRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5pbmZvKCdmZXRjaGluZyBuYW1lcyBmcm9tOiAnLCBwcm9wcy5jb25maWcuc2NpZW50aWZpY05hbWVzVXJsKVxyXG4gICAgZmV0Y2gocHJvcHMuY29uZmlnLnNjaWVudGlmaWNOYW1lc1VybClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHJlYWRpbmcgY29uZmlndXJhdGlvbiBmaWxlIGZyb20gJHtwcm9wcy5jb25maWcuc2NpZW50aWZpY05hbWVzVXJsfTogJHtyZXMuc3RhdHVzVGV4dH1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigobmFtZXNsaXN0KSA9PiB7XHJcbiAgICAgICAgaWYgKCFuYW1lc2xpc3QpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29uZmlndXJhdGlvbiBmaWxlIGltcHJvcGVybHkgZm9ybWF0dGVkOiBubyBuYW1lcyBmb3VuZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lc2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc29sZS5pbmZvKGAke25hbWVzbGlzdC5sZW5ndGh9IHVuaXF1ZSBzY2llbnRpZmljIG5hbWVzIGxvYWRlZCBmcm9tICR7cHJvcHMuY29uZmlnLnNjaWVudGlmaWNOYW1lc1VybH1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXROYW1lcyhuYW1lc2xpc3QpXHJcbiAgICAgICAgc2V0RmlsdGVyZWROYW1lcyhuYW1lc2xpc3QpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3IgZmV0Y2hpbmcgY29uZmlndXJhdGlvbiBmaWxlOiAnLCBlcnIpXHJcbiAgICAgIH0pXHJcbiAgfSwgW3Byb3BzLmNvbmZpZy5zY2llbnRpZmljTmFtZXNVcmxdKVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVEYXRhU291cmNlQ3JlYXRlZChkczpEYXRhU291cmNlKSB7XHJcbiAgICBpZiAoIWRzKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBjcmVhdGUgRGF0YVNvdXJjZScpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc2V0RGF0YVNvdXJjZShkcyBhcyBRdWVyaWFibGVEYXRhU291cmNlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRGF0YVNvdXJjZUZhaWxlZChlcnJvcjphbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGFTb3VyY2UgY3JlYXRpb24gZmFpbGVkOiAnLCBlcnJvcilcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZURhdGFTb3VyY2VDaGFuZ2UoaW5mbzpJTURhdGFTb3VyY2VJbmZvKSB7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZygnRGF0YVNvdXJjZSBpbmZvIGNoYW5nZWQ6ICcsIGluZm8pXHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb25zdCBpc0RzQ29uZmlndXJlZCA9ICgpID0+IHtcclxuICAvLyAgIGlmIChwcm9wcy51c2VEYXRhU291cmNlcyAmJlxyXG4gIC8vICAgICBwcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEgKSB7XHJcbiAgLy8gICAgIHJldHVybiB0cnVlXHJcbiAgLy8gICB9XHJcbiAgLy8gICByZXR1cm4gZmFsc2VcclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0IHAtMlwiPlxyXG4gICAgICA8Y2FsY2l0ZS1hdXRvY29tcGxldGUgcmVmPXthdXRvY29tcGxldGVSZWZ9XHJcbiAgICAgICAgc3R5bGU9e3sgXCItLWNhbGNpdGUtYXV0b2NvbXBsZXRlLW1lbnUtbWF4LXNpemUteVwiOiBcIjI1MHB4XCIgfX1cclxuICAgICAgICBuYW1lPVwic2NpZW50aWZpYy1uYW1lc1wiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBzY2llbnRpZmljIG5hbWVcIlxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJ1xyXG4gICAgICAgIG9uY2FsY2l0ZUF1dG9jb21wbGV0ZUNoYW5nZT17IGhhbmRsZUF1dG9jb21wbGV0ZUNoYW5nZSB9XHJcbiAgICAgICAgb25jYWxjaXRlQXV0b2NvbXBsZXRlVGV4dENoYW5nZT17KGV2dCk9PiB7IGNvbnNvbGUubG9nKGV2dCkgfX1cclxuICAgICAgICBvbmNhbGNpdGVBdXRvY29tcGxldGVUZXh0SW5wdXQ9eyBoYW5kbGVBdXRvY29tcGxldGVUZXh0SW5wdXQgfVxyXG4gICAgICAgIG9uY2FsY2l0ZUF1dG9jb21wbGV0ZUJlZm9yZUNsb3NlPXsoZXZ0KT0+IHsgY29uc29sZS5sb2coZXZ0KSB9fVxyXG4gICAgICAgIG9uY2FsY2l0ZUF1dG9jb21wbGV0ZUJlZm9yZU9wZW49eyhldnQpPT4geyBjb25zb2xlLmxvZyhldnQpIH19XHJcbiAgICAgICAgb25jYWxjaXRlQXV0b2NvbXBsZXRlQ2xvc2U9eyBoYW5kbGVBdXRvY29tcGxldGVDbG9zZSB9XHJcbiAgICAgICAgb25jYWxjaXRlQXV0b2NvbXBsZXRlT3Blbj17KGV2dCk9PiB7IGNvbnNvbGUubG9nKGV2dCkgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtmaWx0ZXJlZE5hbWVzLm1hcCgobmFtZSkgPT4gKFxyXG4gICAgICAgICAgPGNhbGNpdGUtYXV0b2NvbXBsZXRlLWl0ZW1cclxuICAgICAgICAgICAga2V5PXtuYW1lfVxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgaGVhZGluZz17bmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2NhbGNpdGUtYXV0b2NvbXBsZXRlPlxyXG4gICAgPERhdGFTb3VyY2VDb21wb25lbnQgdXNlRGF0YVNvdXJjZT17cHJvcHMudXNlRGF0YVNvdXJjZXNbMF19IHdpZGdldElkPXtwcm9wcy5pZH1cclxuICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17aGFuZGxlRGF0YVNvdXJjZUNyZWF0ZWR9XHJcbiAgICAgIG9uQ3JlYXRlRGF0YVNvdXJjZUZhaWxlZD17aGFuZGxlRGF0YVNvdXJjZUZhaWxlZH1cclxuICAgICAgLy8gb25EYXRhU291cmNlSW5mb0NoYW5nZT17aGFuZGxlRGF0YVNvdXJjZUNoYW5nZX1cclxuICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9