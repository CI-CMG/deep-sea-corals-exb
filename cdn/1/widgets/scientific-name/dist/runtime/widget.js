System.register(["jimu-core","jimu-core/react","calcite-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_calcite_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_calcite_components__, "__esModule", { value: true });
	return {
		setters: [
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
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/scientific-name/src/runtime/widget.tsx ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var calcite_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! calcite-components */ "calcite-components");



const Widget = (props) => {
    // console.log('rendering widget with props: ', props)
    const [names, setNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [filteredNames, setFilteredNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(names);
    const [selectedName, setSelectedName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const autocompleteRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [dataSource, setDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
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
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceFilterChangeMessage(props.id, [dataSource.id]));
    }, [selectedName, dataSource, props.id]);
    // should only run on initial load
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
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
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "jimu-widget p-2" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_2__.CalciteAutocomplete, { ref: autocompleteRef, name: "scientific-names", placeholder: "Select a scientific name", autocomplete: 'off', onCalciteAutocompleteChange: handleAutocompleteChange, onCalciteAutocompleteTextChange: (evt) => { console.log(evt); }, onCalciteAutocompleteTextInput: handleAutocompleteTextInput, onCalciteAutocompleteBeforeClose: (evt) => { console.log(evt); }, onCalciteAutocompleteBeforeOpen: (evt) => { console.log(evt); }, onCalciteAutocompleteClose: handleAutocompleteClose, onCalciteAutocompleteOpen: (evt) => { console.log(evt); } }, filteredNames.map((name) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(calcite_components__WEBPACK_IMPORTED_MODULE_2__.CalciteAutocompleteItem, { key: name, value: name, heading: name })))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: props.useDataSources[0], widgetId: props.id, onDataSourceCreated: handleDataSourceCreated, onCreateDataSourceFailed: handleDataSourceFailed })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zY2llbnRpZmljLW5hbWUvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0dqQztBQUNpQztBQU14QjtBQUUzQixNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQStCLEVBQUUsRUFBRTtJQUNqRCxzREFBc0Q7SUFFdEQsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQ0FBUSxDQUFXLEVBQUUsQ0FBQztJQUNoRCxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDekQsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRywrQ0FBUSxDQUFnQixJQUFJLENBQUM7SUFDckUsTUFBTSxlQUFlLEdBQUcsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDcEMsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRywrQ0FBUSxDQUFzQixJQUFJLENBQUM7SUFFdkUsTUFBTSx3QkFBd0IsR0FBRyxD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Ryx3QkFBd0IsRUFDdEQsK0JBQStCLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUM3RCw4QkFBOEIsRUFBRywyQkFBMkIsRUFDNUQsZ0NBQWdDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUM5RCwrQkFBK0IsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQzdELDBCQUEwQixFQUFHLHVCQUF1QixFQUNwRCx5QkFBeUIsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLElBRXRELGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQzNCLDJEQUFDLHVFQUF1QixJQUN0QixHQUFHLEVBQUUsSUFBSSxFQUNULEtBQUssRUFBRSxJQUFJLEVBQ1gsT0FBTyxFQUFFLElBQUksR0FDYixDQUNILENBQUMsQ0FDZ0I7UUFDdEIsMkRBQUMsMERBQW1CLElBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQzdFLG1CQUFtQixFQUFFLHVCQUF1QixFQUM1Qyx3QkFBd0IsRUFBRSxzQkFBc0IsR0FFaEQsQ0FDSSxDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiY2FsY2l0ZS1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2NpZW50aWZpYy1uYW1lL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhbGNpdGVfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQge1xyXG4gIFJlYWN0LFxyXG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsXHJcbiAgRGF0YVNvdXJjZUNvbXBvbmVudCxcclxuICB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2UsXHJcbiAgLy8gdHlwZSBJTURhdGFTb3VyY2VJbmZvLFxyXG4gIHR5cGUgU3FsUXVlcnlQYXJhbXMsXHJcbiAgTWVzc2FnZU1hbmFnZXIsXHJcbiAgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2VcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgdHlwZSB7IFRhcmdldGVkRXZlbnQgfSBmcm9tIFwiQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzXCJcclxuaW1wb3J0IHtcclxuICBDYWxjaXRlQXV0b2NvbXBsZXRlLFxyXG4gIENhbGNpdGVBdXRvY29tcGxldGVJdGVtXHJcbn0gZnJvbSAnY2FsY2l0ZS1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZygncmVuZGVyaW5nIHdpZGdldCB3aXRoIHByb3BzOiAnLCBwcm9wcylcclxuXHJcbiAgY29uc3QgW25hbWVzLCBzZXROYW1lc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXHJcbiAgY29uc3QgW2ZpbHRlcmVkTmFtZXMsIHNldEZpbHRlcmVkTmFtZXNdID0gdXNlU3RhdGUobmFtZXMpXHJcbiAgY29uc3QgW3NlbGVjdGVkTmFtZSwgc2V0U2VsZWN0ZWROYW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgYXV0b2NvbXBsZXRlUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW2RhdGFTb3VyY2UsIHNldERhdGFTb3VyY2VdID0gdXNlU3RhdGU8UXVlcmlhYmxlRGF0YVNvdXJjZT4obnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlQXV0b2NvbXBsZXRlQ2hhbmdlID0gKGV2ZW50OiBUYXJnZXRlZEV2ZW50PEhUTUxDYWxjaXRlQXV0b2NvbXBsZXRlRWxlbWVudD4pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBpbnNpZGUgaGFuZGxlQXV0b2NvbXBsZXRlQ2hhbmdlIHdpdGggYW4gJHtldmVudC50eXBlfSBldmVudC4gdmFsdWU6ICR7ZXZlbnQudGFyZ2V0LnZhbHVlfSwgaW5wdXRWYWx1ZTogJHtldmVudC50YXJnZXQuaW5wdXRWYWx1ZX1gKVxyXG4gICAgLy8gdXBkYXRlIHRoZSBpbnB1dFZhbHVlIHRvIG1hdGNoIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgaXRlbVxyXG4gICAgYXV0b2NvbXBsZXRlUmVmLmN1cnJlbnQuaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG5cclxuICAgIC8vIHNldFNlbGVjdGVkTmFtZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVBdXRvY29tcGxldGVUZXh0SW5wdXQgPSAoZXZlbnQ6IFRhcmdldGVkRXZlbnQ8SFRNTENhbGNpdGVBdXRvY29tcGxldGVFbGVtZW50PikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coYGluc2lkZSBoYW5kbGVBdXRvY29tcGxldGVUZXh0SW5wdXQgd2l0aCBhbiAke2V2ZW50LnR5cGV9IGV2ZW50LiB2YWx1ZTogJHtldmVudC50YXJnZXQudmFsdWV9LCBpbnB1dFZhbHVlOiAke2V2ZW50LnRhcmdldC5pbnB1dFZhbHVlfWApXHJcbiAgICBjb25zdCBxdWVyeSA9IGV2ZW50LnRhcmdldC5pbnB1dFZhbHVlLnRvTG93ZXJDYXNlKClcclxuICAgIHNldEZpbHRlcmVkTmFtZXMoIG5hbWVzLmZpbHRlcigobmFtZSkgPT4gbmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgocXVlcnkpKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUF1dG9jb21wbGV0ZUNsb3NlID0gKGV2ZW50OiBUYXJnZXRlZEV2ZW50PEhUTUxDYWxjaXRlQXV0b2NvbXBsZXRlRWxlbWVudD4pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBpbnNpZGUgaGFuZGxlQXV0b2NvbXBsZXRlQ2xvc2Ugd2l0aCBhbiAke2V2ZW50LnR5cGV9IGV2ZW50LiB2YWx1ZTogJHtldmVudC50YXJnZXQudmFsdWV9LCBpbnB1dFZhbHVlOiAke2V2ZW50LnRhcmdldC5pbnB1dFZhbHVlfWApXHJcbiAgICAvLyBvbmx5IGFsbG93IHZhbGlkIHNlbGVjdGlvbnMgLSBpZiBpbnB1dFZhbHVlIGRvZXNuJ3QgbWF0Y2ggYW4gZXhpc3RpbmcgbmFtZSwgY2xlYXIgdGhlIGlucHV0XHJcbiAgICBpZiAobmFtZXMuaW5jbHVkZXMoZXZlbnQudGFyZ2V0LmlucHV0VmFsdWUpKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkTmFtZShldmVudC50YXJnZXQuaW5wdXRWYWx1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF1dG9jb21wbGV0ZVJlZi5jdXJyZW50LmlucHV0VmFsdWUgPSAnJ1xyXG4gICAgICBzZXRTZWxlY3RlZE5hbWUobnVsbClcclxuICAgICAgY29uc29sZS53YXJuKGB2YWx1ZSAke2V2ZW50LnRhcmdldC5pbnB1dFZhbHVlfSBub3QgZm91bmQgaW4gbmFtZXMgbGlzdGApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFkYXRhU291cmNlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUud2Fybignbm8gRGF0YVNvdXJjZSAtIGNhbm5vdCB1cGRhdGUgcXVlcnlQYXJhbXMnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBidWlsZFF1ZXJ5KHNlbGVjdGVkTmFtZTpzdHJpbmcpOlNxbFF1ZXJ5UGFyYW1zIHtcclxuICAgICAgaWYgKHNlbGVjdGVkTmFtZSkge1xyXG4gICAgICAgIHJldHVybiAoeyB3aGVyZTogYFNjaWVudGlmaWNOYW1lID0gJyR7c2VsZWN0ZWROYW1lfSdgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ3VwZGF0aW5nIHF1ZXJ5UGFyYW1zIHdpdGg6ICcsIGJ1aWxkUXVlcnkoc2VsZWN0ZWROYW1lKSlcclxuICAgIGRhdGFTb3VyY2UudXBkYXRlUXVlcnlQYXJhbXMoYnVpbGRRdWVyeShzZWxlY3RlZE5hbWUpLCBwcm9wcy5pZClcclxuICAgIE1lc3NhZ2VNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVibGlzaE1lc3NhZ2UobmV3IERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlKHByb3BzLmlkLCBbZGF0YVNvdXJjZS5pZF0pKVxyXG5cclxuICB9LCBbc2VsZWN0ZWROYW1lLCBkYXRhU291cmNlLCBwcm9wcy5pZF0pXHJcblxyXG4gIC8vIHNob3VsZCBvbmx5IHJ1biBvbiBpbml0aWFsIGxvYWRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2ZldGNoaW5nIG5hbWVzIGZyb206ICcsIHByb3BzLmNvbmZpZy5zY2llbnRpZmljTmFtZXNVcmwpXHJcbiAgICBmZXRjaChwcm9wcy5jb25maWcuc2NpZW50aWZpY05hbWVzVXJsKS50aGVuKClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYEVycm9yIHJlYWRpbmcgY29uZmlndXJhdGlvbiBmaWxlIGZyb20gJHtwcm9wcy5jb25maWcuc2NpZW50aWZpY05hbWVzVXJsfTogYCwgcmVzLnN0YXR1c1RleHQpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKG5hbWVzbGlzdCkgPT4ge1xyXG4gICAgICAgIGlmICghbmFtZXNsaXN0KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdjb25maWd1cmF0aW9uIGZpbGUgaW1wcm9wZXJseSBmb3JtYXR0ZWQ6IG5vIG5hbWVzIGZvdW5kJylcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZXNsaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAke25hbWVzbGlzdC5sZW5ndGh9IHVuaXF1ZSBzY2llbnRpZmljIG5hbWVzIGxvYWRlZCBmcm9tICR7cHJvcHMuY29uZmlnLnNjaWVudGlmaWNOYW1lc1VybH1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXROYW1lcyhuYW1lc2xpc3QpXHJcbiAgICAgICAgc2V0RmlsdGVyZWROYW1lcyhuYW1lc2xpc3QpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3IgZmV0Y2hpbmcgY29uZmlndXJhdGlvbiBmaWxlOiAnLCBlcnIpXHJcbiAgICAgIH0pXHJcbiAgfSwgW3Byb3BzLmNvbmZpZy5zY2llbnRpZmljTmFtZXNVcmxdKVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVEYXRhU291cmNlQ3JlYXRlZChkczogUXVlcmlhYmxlRGF0YVNvdXJjZSkge1xyXG4gICAgaWYgKCFkcykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gY3JlYXRlIERhdGFTb3VyY2UnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdEYXRhU291cmNlIGNyZWF0ZWQ6ICcsIGRzKVxyXG4gICAgc2V0RGF0YVNvdXJjZShkcylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZURhdGFTb3VyY2VGYWlsZWQoZXJyb3I6YW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdEYXRhU291cmNlIGNyZWF0aW9uIGZhaWxlZDogJywgZXJyb3IpXHJcbiAgfVxyXG5cclxuICAvLyBmdW5jdGlvbiBoYW5kbGVEYXRhU291cmNlQ2hhbmdlKGluZm86SU1EYXRhU291cmNlSW5mbykge1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2coJ0RhdGFTb3VyY2UgaW5mbyBjaGFuZ2VkOiAnLCBpbmZvKVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3QgaXNEc0NvbmZpZ3VyZWQgPSAoKSA9PiB7XHJcbiAgLy8gICBpZiAocHJvcHMudXNlRGF0YVNvdXJjZXMgJiZcclxuICAvLyAgICAgcHJvcHMudXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxICkge1xyXG4gIC8vICAgICByZXR1cm4gdHJ1ZVxyXG4gIC8vICAgfVxyXG4gIC8vICAgcmV0dXJuIGZhbHNlXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldCBwLTJcIj5cclxuICAgICAgPENhbGNpdGVBdXRvY29tcGxldGUgcmVmPXthdXRvY29tcGxldGVSZWZ9XHJcbiAgICAgICAgbmFtZT1cInNjaWVudGlmaWMtbmFtZXNcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgc2NpZW50aWZpYyBuYW1lXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9J29mZidcclxuICAgICAgICBvbkNhbGNpdGVBdXRvY29tcGxldGVDaGFuZ2U9eyBoYW5kbGVBdXRvY29tcGxldGVDaGFuZ2UgfVxyXG4gICAgICAgIG9uQ2FsY2l0ZUF1dG9jb21wbGV0ZVRleHRDaGFuZ2U9eyhldnQpPT4geyBjb25zb2xlLmxvZyhldnQpIH19XHJcbiAgICAgICAgb25DYWxjaXRlQXV0b2NvbXBsZXRlVGV4dElucHV0PXsgaGFuZGxlQXV0b2NvbXBsZXRlVGV4dElucHV0IH1cclxuICAgICAgICBvbkNhbGNpdGVBdXRvY29tcGxldGVCZWZvcmVDbG9zZT17KGV2dCk9PiB7IGNvbnNvbGUubG9nKGV2dCkgfX1cclxuICAgICAgICBvbkNhbGNpdGVBdXRvY29tcGxldGVCZWZvcmVPcGVuPXsoZXZ0KT0+IHsgY29uc29sZS5sb2coZXZ0KSB9fVxyXG4gICAgICAgIG9uQ2FsY2l0ZUF1dG9jb21wbGV0ZUNsb3NlPXsgaGFuZGxlQXV0b2NvbXBsZXRlQ2xvc2UgfVxyXG4gICAgICAgIG9uQ2FsY2l0ZUF1dG9jb21wbGV0ZU9wZW49eyhldnQpPT4geyBjb25zb2xlLmxvZyhldnQpIH19XHJcbiAgICAgID5cclxuICAgICAgICB7ZmlsdGVyZWROYW1lcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgIDxDYWxjaXRlQXV0b2NvbXBsZXRlSXRlbVxyXG4gICAgICAgICAgICBrZXk9e25hbWV9XHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBoZWFkaW5nPXtuYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgIDwvQ2FsY2l0ZUF1dG9jb21wbGV0ZT5cclxuICAgIDxEYXRhU291cmNlQ29tcG9uZW50IHVzZURhdGFTb3VyY2U9e3Byb3BzLnVzZURhdGFTb3VyY2VzWzBdfSB3aWRnZXRJZD17cHJvcHMuaWR9XHJcbiAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e2hhbmRsZURhdGFTb3VyY2VDcmVhdGVkfVxyXG4gICAgICBvbkNyZWF0ZURhdGFTb3VyY2VGYWlsZWQ9e2hhbmRsZURhdGFTb3VyY2VGYWlsZWR9XHJcbiAgICAgIC8vIG9uRGF0YVNvdXJjZUluZm9DaGFuZ2U9e2hhbmRsZURhdGFTb3VyY2VDaGFuZ2V9XHJcbiAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==