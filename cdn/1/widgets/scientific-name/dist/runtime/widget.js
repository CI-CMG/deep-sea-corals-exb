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
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget p-2", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_3__.CalciteAutocomplete, { ref: autocompleteRef, 
                // style={{ "-calcite-autocomplete-menu-max-size-y": "300px" }}
                name: "scientific-names", placeholder: "Select a scientific name", autocomplete: 'off', onCalciteAutocompleteChange: handleAutocompleteChange, onCalciteAutocompleteTextChange: (evt) => { console.log(evt); }, onCalciteAutocompleteTextInput: handleAutocompleteTextInput, onCalciteAutocompleteBeforeClose: (evt) => { console.log(evt); }, onCalciteAutocompleteBeforeOpen: (evt) => { console.log(evt); }, onCalciteAutocompleteClose: handleAutocompleteClose, onCalciteAutocompleteOpen: (evt) => { console.log(evt); }, children: filteredNames.map((name) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_3__.CalciteAutocompleteItem, { value: name, heading: name }, name))) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: props.useDataSources[0], widgetId: props.id, onDataSourceCreated: handleDataSourceCreated, onCreateDataSourceFailed: handleDataSourceFailed })] }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zY2llbnRpZmljLW5hbWUvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTWpDO0FBQ2lDO0FBTXhCO0FBRTNCLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBK0IsRUFBRSxFQUFFO0lBQ2pELHNEQUFzRDtJQUV0RCxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLCtDQUFRLENBQVcsRUFBRSxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRywrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUN6RCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLCtDQUFRLENBQWdCLElBQUksQ0FBQztJQUNyRSxNQUFNLGVBQWUsR0FBRyw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUNwQyxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQXNCLElBQUksQ0FBQztJ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dEQsK0JBQStCLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUM3RCw4QkFBOEIsRUFBRywyQkFBMkIsRUFDNUQsZ0NBQWdDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUM5RCwrQkFBK0IsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQzdELDBCQUEwQixFQUFHLHVCQUF1QixFQUNwRCx5QkFBeUIsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLFlBRXRELGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQzNCLGdFQUFDLHVFQUF1QixJQUV0QixLQUFLLEVBQUUsSUFBSSxFQUNYLE9BQU8sRUFBRSxJQUFJLElBRlIsSUFBSSxDQUdULENBQ0gsQ0FBQyxHQUNnQixFQUN0QixnRUFBQywwREFBbUIsSUFBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFDN0UsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQzVDLHdCQUF3QixFQUFFLHNCQUFzQixHQUVoRCxJQUNJLENBQ1A7QUFDSCxDQUFDO0FBRUQsaUVBQWUsTUFBTTtBQUViLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiY2FsY2l0ZS1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2NpZW50aWZpYy1uYW1lL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhbGNpdGVfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQge1xyXG4gIFJlYWN0LFxyXG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsXHJcbiAgRGF0YVNvdXJjZUNvbXBvbmVudCxcclxuICB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2UsXHJcbiAgdHlwZSBEYXRhU291cmNlLFxyXG4gIC8vIHR5cGUgSU1EYXRhU291cmNlSW5mbyxcclxuICB0eXBlIFNxbFF1ZXJ5UGFyYW1zLFxyXG4gIE1lc3NhZ2VNYW5hZ2VyLFxyXG4gIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHR5cGUgeyBUYXJnZXRlZEV2ZW50IH0gZnJvbSBcIkBlc3JpL2NhbGNpdGUtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7XHJcbiAgQ2FsY2l0ZUF1dG9jb21wbGV0ZSxcclxuICBDYWxjaXRlQXV0b2NvbXBsZXRlSXRlbVxyXG59IGZyb20gJ2NhbGNpdGUtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coJ3JlbmRlcmluZyB3aWRnZXQgd2l0aCBwcm9wczogJywgcHJvcHMpXHJcblxyXG4gIGNvbnN0IFtuYW1lcywgc2V0TmFtZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxyXG4gIGNvbnN0IFtmaWx0ZXJlZE5hbWVzLCBzZXRGaWx0ZXJlZE5hbWVzXSA9IHVzZVN0YXRlKG5hbWVzKVxyXG4gIGNvbnN0IFtzZWxlY3RlZE5hbWUsIHNldFNlbGVjdGVkTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IGF1dG9jb21wbGV0ZVJlZiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IFtkYXRhU291cmNlLCBzZXREYXRhU291cmNlXSA9IHVzZVN0YXRlPFF1ZXJpYWJsZURhdGFTb3VyY2U+KG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUF1dG9jb21wbGV0ZUNoYW5nZSA9IChldmVudDogVGFyZ2V0ZWRFdmVudDxIVE1MQ2FsY2l0ZUF1dG9jb21wbGV0ZUVsZW1lbnQ+KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgaW5zaWRlIGhhbmRsZUF1dG9jb21wbGV0ZUNoYW5nZSB3aXRoIGFuICR7ZXZlbnQudHlwZX0gZXZlbnQuIHZhbHVlOiAke2V2ZW50LnRhcmdldC52YWx1ZX0sIGlucHV0VmFsdWU6ICR7ZXZlbnQudGFyZ2V0LmlucHV0VmFsdWV9YClcclxuICAgIC8vIHVwZGF0ZSB0aGUgaW5wdXRWYWx1ZSB0byBtYXRjaCB0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdGVkIGl0ZW1cclxuICAgIGF1dG9jb21wbGV0ZVJlZi5jdXJyZW50LmlucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcclxuXHJcbiAgICAvLyBzZXRTZWxlY3RlZE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQXV0b2NvbXBsZXRlVGV4dElucHV0ID0gKGV2ZW50OiBUYXJnZXRlZEV2ZW50PEhUTUxDYWxjaXRlQXV0b2NvbXBsZXRlRWxlbWVudD4pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBpbnNpZGUgaGFuZGxlQXV0b2NvbXBsZXRlVGV4dElucHV0IHdpdGggYW4gJHtldmVudC50eXBlfSBldmVudC4gdmFsdWU6ICR7ZXZlbnQudGFyZ2V0LnZhbHVlfSwgaW5wdXRWYWx1ZTogJHtldmVudC50YXJnZXQuaW5wdXRWYWx1ZX1gKVxyXG4gICAgY29uc3QgcXVlcnkgPSBldmVudC50YXJnZXQuaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpXHJcbiAgICBzZXRGaWx0ZXJlZE5hbWVzKCBuYW1lcy5maWx0ZXIoKG5hbWUpID0+IG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHF1ZXJ5KSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVBdXRvY29tcGxldGVDbG9zZSA9IChldmVudDogVGFyZ2V0ZWRFdmVudDxIVE1MQ2FsY2l0ZUF1dG9jb21wbGV0ZUVsZW1lbnQ+KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgaW5zaWRlIGhhbmRsZUF1dG9jb21wbGV0ZUNsb3NlIHdpdGggYW4gJHtldmVudC50eXBlfSBldmVudC4gdmFsdWU6ICR7ZXZlbnQudGFyZ2V0LnZhbHVlfSwgaW5wdXRWYWx1ZTogJHtldmVudC50YXJnZXQuaW5wdXRWYWx1ZX1gKVxyXG4gICAgLy8gb25seSBhbGxvdyB2YWxpZCBzZWxlY3Rpb25zIC0gaWYgaW5wdXRWYWx1ZSBkb2Vzbid0IG1hdGNoIGFuIGV4aXN0aW5nIG5hbWUsIGNsZWFyIHRoZSBpbnB1dFxyXG4gICAgaWYgKG5hbWVzLmluY2x1ZGVzKGV2ZW50LnRhcmdldC5pbnB1dFZhbHVlKSkge1xyXG4gICAgICBzZXRTZWxlY3RlZE5hbWUoZXZlbnQudGFyZ2V0LmlucHV0VmFsdWUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhdXRvY29tcGxldGVSZWYuY3VycmVudC5pbnB1dFZhbHVlID0gJydcclxuICAgICAgc2V0U2VsZWN0ZWROYW1lKG51bGwpXHJcbiAgICAgIGNvbnNvbGUud2FybihgdmFsdWUgJHtldmVudC50YXJnZXQuaW5wdXRWYWx1ZX0gbm90IGZvdW5kIGluIG5hbWVzIGxpc3RgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZGF0YVNvdXJjZSkge1xyXG4gICAgICAvLyBjb25zb2xlLndhcm4oJ25vIERhdGFTb3VyY2UgLSBjYW5ub3QgdXBkYXRlIHF1ZXJ5UGFyYW1zJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYnVpbGRRdWVyeShzZWxlY3RlZE5hbWU6c3RyaW5nKTpTcWxRdWVyeVBhcmFtcyB7XHJcbiAgICAgIGlmIChzZWxlY3RlZE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gKHsgd2hlcmU6IGBTY2llbnRpZmljTmFtZSA9ICcke3NlbGVjdGVkTmFtZX0nYCB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGluZyBxdWVyeVBhcmFtcyB3aXRoOiAnLCBidWlsZFF1ZXJ5KHNlbGVjdGVkTmFtZSkpXHJcbiAgICBkYXRhU291cmNlLnVwZGF0ZVF1ZXJ5UGFyYW1zKGJ1aWxkUXVlcnkoc2VsZWN0ZWROYW1lKSwgcHJvcHMuaWQpXHJcbiAgICBNZXNzYWdlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1Ymxpc2hNZXNzYWdlKG5ldyBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZShwcm9wcy5pZCwgW2RhdGFTb3VyY2UuaWRdKSlcclxuXHJcbiAgfSwgW3NlbGVjdGVkTmFtZSwgZGF0YVNvdXJjZSwgcHJvcHMuaWRdKVxyXG5cclxuICAvLyBzaG91bGQgb25seSBydW4gb24gaW5pdGlhbCBsb2FkXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUuaW5mbygnZmV0Y2hpbmcgbmFtZXMgZnJvbTogJywgcHJvcHMuY29uZmlnLnNjaWVudGlmaWNOYW1lc1VybClcclxuICAgIGZldGNoKHByb3BzLmNvbmZpZy5zY2llbnRpZmljTmFtZXNVcmwpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciByZWFkaW5nIGNvbmZpZ3VyYXRpb24gZmlsZSBmcm9tICR7cHJvcHMuY29uZmlnLnNjaWVudGlmaWNOYW1lc1VybH06ICR7cmVzLnN0YXR1c1RleHR9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKG5hbWVzbGlzdCkgPT4ge1xyXG4gICAgICAgIGlmICghbmFtZXNsaXN0KSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbmZpZ3VyYXRpb24gZmlsZSBpbXByb3Blcmx5IGZvcm1hdHRlZDogbm8gbmFtZXMgZm91bmQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZXNsaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnNvbGUuaW5mbyhgJHtuYW1lc2xpc3QubGVuZ3RofSB1bmlxdWUgc2NpZW50aWZpYyBuYW1lcyBsb2FkZWQgZnJvbSAke3Byb3BzLmNvbmZpZy5zY2llbnRpZmljTmFtZXNVcmx9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TmFtZXMobmFtZXNsaXN0KVxyXG4gICAgICAgIHNldEZpbHRlcmVkTmFtZXMobmFtZXNsaXN0KVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGZldGNoaW5nIGNvbmZpZ3VyYXRpb24gZmlsZTogJywgZXJyKVxyXG4gICAgICB9KVxyXG4gIH0sIFtwcm9wcy5jb25maWcuc2NpZW50aWZpY05hbWVzVXJsXSlcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRGF0YVNvdXJjZUNyZWF0ZWQoZHM6RGF0YVNvdXJjZSkge1xyXG4gICAgaWYgKCFkcykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gY3JlYXRlIERhdGFTb3VyY2UnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHNldERhdGFTb3VyY2UoZHMgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZURhdGFTb3VyY2VGYWlsZWQoZXJyb3I6YW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdEYXRhU291cmNlIGNyZWF0aW9uIGZhaWxlZDogJywgZXJyb3IpXHJcbiAgfVxyXG5cclxuICAvLyBmdW5jdGlvbiBoYW5kbGVEYXRhU291cmNlQ2hhbmdlKGluZm86SU1EYXRhU291cmNlSW5mbykge1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2coJ0RhdGFTb3VyY2UgaW5mbyBjaGFuZ2VkOiAnLCBpbmZvKVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3QgaXNEc0NvbmZpZ3VyZWQgPSAoKSA9PiB7XHJcbiAgLy8gICBpZiAocHJvcHMudXNlRGF0YVNvdXJjZXMgJiZcclxuICAvLyAgICAgcHJvcHMudXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxICkge1xyXG4gIC8vICAgICByZXR1cm4gdHJ1ZVxyXG4gIC8vICAgfVxyXG4gIC8vICAgcmV0dXJuIGZhbHNlXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldCBwLTJcIj5cclxuICAgICAgPENhbGNpdGVBdXRvY29tcGxldGUgcmVmPXthdXRvY29tcGxldGVSZWZ9XHJcbiAgICAgICAgLy8gc3R5bGU9e3sgXCItY2FsY2l0ZS1hdXRvY29tcGxldGUtbWVudS1tYXgtc2l6ZS15XCI6IFwiMzAwcHhcIiB9fVxyXG4gICAgICAgIG5hbWU9XCJzY2llbnRpZmljLW5hbWVzXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIHNjaWVudGlmaWMgbmFtZVwiXHJcbiAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnXHJcbiAgICAgICAgb25DYWxjaXRlQXV0b2NvbXBsZXRlQ2hhbmdlPXsgaGFuZGxlQXV0b2NvbXBsZXRlQ2hhbmdlIH1cclxuICAgICAgICBvbkNhbGNpdGVBdXRvY29tcGxldGVUZXh0Q2hhbmdlPXsoZXZ0KT0+IHsgY29uc29sZS5sb2coZXZ0KSB9fVxyXG4gICAgICAgIG9uQ2FsY2l0ZUF1dG9jb21wbGV0ZVRleHRJbnB1dD17IGhhbmRsZUF1dG9jb21wbGV0ZVRleHRJbnB1dCB9XHJcbiAgICAgICAgb25DYWxjaXRlQXV0b2NvbXBsZXRlQmVmb3JlQ2xvc2U9eyhldnQpPT4geyBjb25zb2xlLmxvZyhldnQpIH19XHJcbiAgICAgICAgb25DYWxjaXRlQXV0b2NvbXBsZXRlQmVmb3JlT3Blbj17KGV2dCk9PiB7IGNvbnNvbGUubG9nKGV2dCkgfX1cclxuICAgICAgICBvbkNhbGNpdGVBdXRvY29tcGxldGVDbG9zZT17IGhhbmRsZUF1dG9jb21wbGV0ZUNsb3NlIH1cclxuICAgICAgICBvbkNhbGNpdGVBdXRvY29tcGxldGVPcGVuPXsoZXZ0KT0+IHsgY29uc29sZS5sb2coZXZ0KSB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2ZpbHRlcmVkTmFtZXMubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICA8Q2FsY2l0ZUF1dG9jb21wbGV0ZUl0ZW1cclxuICAgICAgICAgICAga2V5PXtuYW1lfVxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgaGVhZGluZz17bmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L0NhbGNpdGVBdXRvY29tcGxldGU+XHJcbiAgICA8RGF0YVNvdXJjZUNvbXBvbmVudCB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlc1swXX0gd2lkZ2V0SWQ9e3Byb3BzLmlkfVxyXG4gICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtoYW5kbGVEYXRhU291cmNlQ3JlYXRlZH1cclxuICAgICAgb25DcmVhdGVEYXRhU291cmNlRmFpbGVkPXtoYW5kbGVEYXRhU291cmNlRmFpbGVkfVxyXG4gICAgICAvLyBvbkRhdGFTb3VyY2VJbmZvQ2hhbmdlPXtoYW5kbGVEYXRhU291cmNlQ2hhbmdlfVxyXG4gICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=