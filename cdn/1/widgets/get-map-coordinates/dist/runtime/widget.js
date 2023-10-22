System.register(["jimu-core","jimu-core/react","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts":
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: "Get Map Coordinates",
    latLon: "Lat/Lon",
    zoom: "Zoom",
    latLonWillBeHere: "Lat/Lon (None - please mouse over map)"
});


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

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
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/get-map-coordinates/src/runtime/widget.tsx ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__set_webpack_public_path__": () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/get-map-coordinates/src/runtime/translations/default.ts");
/** @jsx jsx */
/**
  Licensing

  Copyright 2021 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
    var _a;
    const [latitude, setLatitude] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [longitude, setLongitude] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [scale, setScale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [mapViewReady, setMapViewReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const activeViewChangeHandler = (jmv) => {
        if (jmv) {
            // When the extent moves, update the state with all the updated values.
            jmv.view.watch('extent', evt => {
                setLatitude(jmv.view.center.latitude.toFixed(3));
                setLongitude(jmv.view.center.longitude.toFixed(3));
                setScale(Math.round(jmv.view.scale * 1) / 1);
                setZoom(jmv.view.zoom);
                // this is set to false initially, then once we have the first set of data (and all subsequent) it's set
                // to true, so that we can hide the text until everything is ready:
                setMapViewReady(true);
            });
            // When the pointer moves, take the pointer location and create a Point
            // Geometry out of it (`view.toMap(...)`), then update the state.
            jmv.view.on('pointer-move', evt => {
                const point = jmv.view.toMap({
                    x: evt.x,
                    y: evt.y
                });
                setLatitude(point.latitude.toFixed(3));
                setLongitude(point.longitude.toFixed(3));
                setScale(Math.round(jmv.view.scale * 1) / 1);
                setZoom(jmv.view.zoom);
                setMapViewReady(true);
            });
        }
    };
    const sections = [];
    sections.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null,
        _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].latLon,
        " ",
        latitude,
        ", ",
        longitude));
    if (props.config.showZoom) {
        sections.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null,
            "Zoom ",
            zoom.toFixed(0)));
    }
    if (props.config.showScale) {
        sections.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null,
            "Scale 1:",
            scale));
    }
    // We have 1, 2, or 3 JSX Elements in our array, we want to join them
    // with " | " between them. You cannot use `sections.join(" | ")`, sadly.
    // So we use array.reduce(...) to return an array of JSX elements.
    const allSections = sections.reduce((previousValue, currentValue) => {
        return previousValue === null
            ? [currentValue]
            : [...previousValue, ' | ', currentValue];
    }, null);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-get-map-coordinates jimu-widget m-2" },
        Object.prototype.hasOwnProperty.call(props, 'useMapWidgetIds') &&
            props.useMapWidgetIds &&
            props.useMapWidgetIds.length === 1 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, mapViewReady ? allSections : _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].latLonWillBeHere)));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLFlBQVksRUFBRSxxQkFBcUI7SUFDbkMsTUFBTSxFQUFFLFNBQVM7SUFDakIsSUFBSSxFQUFFLE1BQU07SUFDWixnQkFBZ0IsRUFBRSx3Q0FBd0M7Q0FDM0QsRUFBQzs7Ozs7Ozs7Ozs7O0FDTEY7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDa0Q7QUFDcEI7QUFFb0M7QUFJaEI7QUFFcEQsNkJBQWUsb0NBQVUsS0FBK0I7O0lBQ3RELE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsK0NBQVEsQ0FBUyxFQUFFLENBQUM7SUFDcEQsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRywrQ0FBUSxDQUFTLEVBQUUsQ0FBQztJQUN0RCxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLCtDQUFRLENB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Y0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUM7WUFDOUQsS0FBSyxDQUFDLGVBQWU7WUFDckIsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQ3BDLCtDQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQzFDLGtCQUFrQixFQUFFLHVCQUF1QixHQUMzQyxDQUNMO1FBR0QsMERBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLDhFQUFnQyxDQUFLLENBQ2xFLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZ2V0LW1hcC1jb29yZGluYXRlcy9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZ2V0LW1hcC1jb29yZGluYXRlcy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiBcIkdldCBNYXAgQ29vcmRpbmF0ZXNcIixcbiAgbGF0TG9uOiBcIkxhdC9Mb25cIixcbiAgem9vbTogXCJab29tXCIsXG4gIGxhdExvbldpbGxCZUhlcmU6IFwiTGF0L0xvbiAoTm9uZSAtIHBsZWFzZSBtb3VzZSBvdmVyIG1hcClcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMSBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuaW1wb3J0IHsgdHlwZSBBbGxXaWRnZXRQcm9wcywganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyB0eXBlIEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuXG5pbXBvcnQgdHlwZSBQb2ludCBmcm9tICdlc3JpL2dlb21ldHJ5L1BvaW50J1xuXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IFtsYXRpdHVkZSwgc2V0TGF0aXR1ZGVdID0gdXNlU3RhdGU8c3RyaW5nPignJylcbiAgY29uc3QgW2xvbmdpdHVkZSwgc2V0TG9uZ2l0dWRlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG4gIGNvbnN0IFttYXBWaWV3UmVhZHksIHNldE1hcFZpZXdSZWFkeV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcblxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgaWYgKGptdikge1xuICAgICAgLy8gV2hlbiB0aGUgZXh0ZW50IG1vdmVzLCB1cGRhdGUgdGhlIHN0YXRlIHdpdGggYWxsIHRoZSB1cGRhdGVkIHZhbHVlcy5cbiAgICAgIGptdi52aWV3LndhdGNoKCdleHRlbnQnLCBldnQgPT4ge1xuICAgICAgICBzZXRMYXRpdHVkZShqbXYudmlldy5jZW50ZXIubGF0aXR1ZGUudG9GaXhlZCgzKSlcbiAgICAgICAgc2V0TG9uZ2l0dWRlKGptdi52aWV3LmNlbnRlci5sb25naXR1ZGUudG9GaXhlZCgzKSlcbiAgICAgICAgc2V0U2NhbGUoTWF0aC5yb3VuZChqbXYudmlldy5zY2FsZSAqIDEpIC8gMSlcbiAgICAgICAgc2V0Wm9vbShqbXYudmlldy56b29tKVxuXG4gICAgICAgIC8vIHRoaXMgaXMgc2V0IHRvIGZhbHNlIGluaXRpYWxseSwgdGhlbiBvbmNlIHdlIGhhdmUgdGhlIGZpcnN0IHNldCBvZiBkYXRhIChhbmQgYWxsIHN1YnNlcXVlbnQpIGl0J3Mgc2V0XG4gICAgICAgIC8vIHRvIHRydWUsIHNvIHRoYXQgd2UgY2FuIGhpZGUgdGhlIHRleHQgdW50aWwgZXZlcnl0aGluZyBpcyByZWFkeTpcbiAgICAgICAgc2V0TWFwVmlld1JlYWR5KHRydWUpXG4gICAgICB9KVxuXG4gICAgICAvLyBXaGVuIHRoZSBwb2ludGVyIG1vdmVzLCB0YWtlIHRoZSBwb2ludGVyIGxvY2F0aW9uIGFuZCBjcmVhdGUgYSBQb2ludFxuICAgICAgLy8gR2VvbWV0cnkgb3V0IG9mIGl0IChgdmlldy50b01hcCguLi4pYCksIHRoZW4gdXBkYXRlIHRoZSBzdGF0ZS5cbiAgICAgIGptdi52aWV3Lm9uKCdwb2ludGVyLW1vdmUnLCBldnQgPT4ge1xuICAgICAgICBjb25zdCBwb2ludDogUG9pbnQgPSBqbXYudmlldy50b01hcCh7XG4gICAgICAgICAgeDogZXZ0LngsXG4gICAgICAgICAgeTogZXZ0LnlcbiAgICAgICAgfSlcbiAgICAgICAgc2V0TGF0aXR1ZGUocG9pbnQubGF0aXR1ZGUudG9GaXhlZCgzKSlcbiAgICAgICAgc2V0TG9uZ2l0dWRlKHBvaW50LmxvbmdpdHVkZS50b0ZpeGVkKDMpKVxuICAgICAgICBzZXRTY2FsZShNYXRoLnJvdW5kKGptdi52aWV3LnNjYWxlICogMSkgLyAxKVxuICAgICAgICBzZXRab29tKGptdi52aWV3Lnpvb20pXG4gICAgICAgIHNldE1hcFZpZXdSZWFkeSh0cnVlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZWN0aW9ucyA9IFtdXG5cbiAgc2VjdGlvbnMucHVzaChcbiAgICA8c3Bhbj5cbiAgICAgIHtkZWZhdWx0TWVzc2FnZXMubGF0TG9ufSB7bGF0aXR1ZGV9LCB7bG9uZ2l0dWRlfVxuICAgIDwvc3Bhbj5cbiAgKVxuXG4gIGlmIChwcm9wcy5jb25maWcuc2hvd1pvb20pIHtcbiAgICBzZWN0aW9ucy5wdXNoKDxzcGFuPlpvb20ge3pvb20udG9GaXhlZCgwKX08L3NwYW4+KVxuICB9XG5cbiAgaWYgKHByb3BzLmNvbmZpZy5zaG93U2NhbGUpIHtcbiAgICBzZWN0aW9ucy5wdXNoKDxzcGFuPlNjYWxlIDE6e3NjYWxlfTwvc3Bhbj4pXG4gIH1cblxuICAvLyBXZSBoYXZlIDEsIDIsIG9yIDMgSlNYIEVsZW1lbnRzIGluIG91ciBhcnJheSwgd2Ugd2FudCB0byBqb2luIHRoZW1cbiAgLy8gd2l0aCBcIiB8IFwiIGJldHdlZW4gdGhlbS4gWW91IGNhbm5vdCB1c2UgYHNlY3Rpb25zLmpvaW4oXCIgfCBcIilgLCBzYWRseS5cbiAgLy8gU28gd2UgdXNlIGFycmF5LnJlZHVjZSguLi4pIHRvIHJldHVybiBhbiBhcnJheSBvZiBKU1ggZWxlbWVudHMuXG4gIGNvbnN0IGFsbFNlY3Rpb25zID0gc2VjdGlvbnMucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHtcbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZSA9PT0gbnVsbFxuICAgICAgPyBbY3VycmVudFZhbHVlXVxuICAgICAgOiBbLi4ucHJldmlvdXNWYWx1ZSwgJyB8ICcsIGN1cnJlbnRWYWx1ZV1cbiAgfSwgbnVsbClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWdldC1tYXAtY29vcmRpbmF0ZXMgamltdS13aWRnZXQgbS0yXCI+XG4gICAgICB7IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ3VzZU1hcFdpZGdldElkcycpICYmXG4gICAgICAgIHByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxuICAgICAgICBwcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcbiAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17YWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBPbmx5IHNob3cgdGhlIGRhdGEgb25jZSB0aGUgTWFwVmlldyBpcyByZWFkeSAqL31cbiAgICAgIDxwPnttYXBWaWV3UmVhZHkgPyBhbGxTZWN0aW9ucyA6IGRlZmF1bHRNZXNzYWdlcy5sYXRMb25XaWxsQmVIZXJlfTwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==