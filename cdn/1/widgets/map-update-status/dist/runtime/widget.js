System.register(["jimu-core/emotion","jimu-core","jimu-core/react","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
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
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/map-update-status/src/runtime/widget.tsx ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");

/** @jsx jsx */



function Widget(props) {
    var _a;
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [isUpdating, setIsUpdating] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const timeoutId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const timeoutForMapUpdate = 30000;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (!view) {
            return;
        }
        function setMapUpdateTimeout() {
            timeoutId.current = setTimeout(overrideMapStatus, timeoutForMapUpdate);
        }
        function overrideMapStatus() {
            console.warn(`forcing MapView 'updating' status to 'false' after waiting for ${timeoutForMapUpdate / 1000} seconds`);
            setIsUpdating(false);
        }
        const mapView = view.view;
        const updatingWatchHandle = mapView.watch('updating', (newStatus) => {
            // don't allow isUpdating to remain true for > 30 secs
            if (newStatus) {
                setMapUpdateTimeout();
            }
            else {
                clearTimeout(timeoutId.current);
            }
            setIsUpdating(newStatus);
        });
        return () => {
            // remove at time componment is destroyed
            if (updatingWatchHandle) {
                updatingWatchHandle.remove();
            }
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
        };
    }, [view]);
    // only called when widget first loaded
    const activeViewChangeHandler = (jmv) => {
        if (!jmv) {
            throw new Error('no MapView');
        }
        setView(jmv);
    };
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "widget-use-map-view", style: { width: '100%', height: '100%', overflow: 'hidden' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { overflowY: 'auto', height: '100%', paddingLeft: '5px' }, children: [(!view)
                        ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "MapView must be configured" }) })
                        : '', (!isUpdating)
                        ? ''
                        : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: 'medium', color: 'red' }, children: "map is updating..." })] })] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtdXBkYXRlLXN0YXR1cy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQUNxQztBQUNEO0FBQ2lCO0FBSXJELFNBQVMsTUFBTSxDQUFFLEtBQStCOztJQUM3RCxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLCtDQUFRLENBQWMsSUFBSSxDQUFDO0lBQ25ELE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDbkQsTUFBTSxTQUFTLEdBQUcsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDOUIsTUFBTSxtQkFBbUIsR0FBRyxLQUFLO0lBRWpDLGdEQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQUMsT0FBTTtRQUFDLENBQUM7UUFFckIsU0FBUyxtQkFBbUI7WUFDMUIsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7UUFDeEUsQ0FBQztRQUVELFNBQVMsaUJBQWlCO1lBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0VBQWtFLG1CQUFtQixHQUFHLElBQUksVUFBVSxDQUFDO1lBQ3BILGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJO1FBRXpCLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FDdkMsVUFBVSxFQUNWLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDWixzREFBc0Q7WUFDdEQsSUFBSSxTQUFTLEVBQUUsQ0FBQztnQkFDZCxtQkFBbUIsRUFBRTtZQUN2QixDQUFDO2lCQUFNLENBQUM7Z0JBQ04sWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDakMsQ0FBQztZQUNELGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1FBRUosT0FBTyxHQUFHLEVBQUU7WUFDVix5Q0FBeUM7WUFDekMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO2dCQUN4QixtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7WUFDOUIsQ0FBQztZQUNELElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQUMsQ0FBQztRQUM1RCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFVix1Q0FBdUM7SUFDdkMsTUFBTSx1QkFBdUIsR0FBRyxDQUFDLEdBQWdCLEVBQUUsRUFBRTtRQUNuRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFBQyxNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQztRQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNkLENBQUM7SUFFRCxPQUFPLENBQ0wsMEVBQUssU0FBUyxFQUFDLHFCQUFxQixFQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGFBQy9GLGdFQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQzFDLGtCQUFrQixFQUFFLHVCQUF1QixHQUN0QixFQUV2QiwwRUFBSyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxhQUNsRSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNOLENBQUMsQ0FBQyxtRkFDRSxtSEFBdUMsR0FDbkM7d0JBQ1IsQ0FBQyxDQUFDLEVBQUUsRUFFTCxDQUFDLENBQUMsVUFBVSxDQUFDO3dCQUNaLENBQUMsQ0FBQyxFQUFFO3dCQUNKLENBQUMsQ0FBQywwRUFBTSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsbUNBQTJCLElBRTVFLElBQ0YsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbWFwLXVwZGF0ZS1zdGF0dXMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIEFsbFdpZGdldFByb3BzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHR5cGUgSmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnXG4vLyBpbXBvcnQgeyBkZWZhdWx0TWVzc2FnZXMgYXMgamltdVVJTWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlPEppbXVNYXBWaWV3PihudWxsKVxuICBjb25zdCBbaXNVcGRhdGluZywgc2V0SXNVcGRhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdGltZW91dElkID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IHRpbWVvdXRGb3JNYXBVcGRhdGUgPSAzMDAwMFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF2aWV3KSB7IHJldHVybiB9XG5cbiAgICBmdW5jdGlvbiBzZXRNYXBVcGRhdGVUaW1lb3V0ICgpIHtcbiAgICAgIHRpbWVvdXRJZC5jdXJyZW50ID0gc2V0VGltZW91dChvdmVycmlkZU1hcFN0YXR1cywgdGltZW91dEZvck1hcFVwZGF0ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvdmVycmlkZU1hcFN0YXR1cyAoKSB7XG4gICAgICBjb25zb2xlLndhcm4oYGZvcmNpbmcgTWFwVmlldyAndXBkYXRpbmcnIHN0YXR1cyB0byAnZmFsc2UnIGFmdGVyIHdhaXRpbmcgZm9yICR7dGltZW91dEZvck1hcFVwZGF0ZSAvIDEwMDB9IHNlY29uZHNgKVxuICAgICAgc2V0SXNVcGRhdGluZyhmYWxzZSlcbiAgICB9XG5cbiAgICBjb25zdCBtYXBWaWV3ID0gdmlldy52aWV3XG5cbiAgICBjb25zdCB1cGRhdGluZ1dhdGNoSGFuZGxlID0gbWFwVmlldy53YXRjaChcbiAgICAgICd1cGRhdGluZycsXG4gICAgICAobmV3U3RhdHVzKSA9PiB7XG4gICAgICAgIC8vIGRvbid0IGFsbG93IGlzVXBkYXRpbmcgdG8gcmVtYWluIHRydWUgZm9yID4gMzAgc2Vjc1xuICAgICAgICBpZiAobmV3U3RhdHVzKSB7XG4gICAgICAgICAgc2V0TWFwVXBkYXRlVGltZW91dCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZC5jdXJyZW50KVxuICAgICAgICB9XG4gICAgICAgIHNldElzVXBkYXRpbmcobmV3U3RhdHVzKVxuICAgICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyByZW1vdmUgYXQgdGltZSBjb21wb25tZW50IGlzIGRlc3Ryb3llZFxuICAgICAgaWYgKHVwZGF0aW5nV2F0Y2hIYW5kbGUpIHtcbiAgICAgICAgdXBkYXRpbmdXYXRjaEhhbmRsZS5yZW1vdmUoKVxuICAgICAgfVxuICAgICAgaWYgKHRpbWVvdXRJZC5jdXJyZW50KSB7IGNsZWFyVGltZW91dCh0aW1lb3V0SWQuY3VycmVudCkgfVxuICAgIH1cbiAgfSwgW3ZpZXddKVxuXG4gIC8vIG9ubHkgY2FsbGVkIHdoZW4gd2lkZ2V0IGZpcnN0IGxvYWRlZFxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgaWYgKCFqbXYpIHsgdGhyb3cgbmV3IEVycm9yKCdubyBNYXBWaWV3JykgfVxuICAgIHNldFZpZXcoam12KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC11c2UtbWFwLXZpZXdcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn0+XG4gICAgICA8L0ppbXVNYXBWaWV3Q29tcG9uZW50PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93WTogJ2F1dG8nLCBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ0xlZnQ6ICc1cHgnIH19PlxuICAgICAgICB7KCF2aWV3KVxuICAgICAgICAgID8gPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4+TWFwVmlldyBtdXN0IGJlIGNvbmZpZ3VyZWQ8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH1cbiAgICAgICAgeyghaXNVcGRhdGluZylcbiAgICAgICAgICA/ICcnXG4gICAgICAgICAgOiA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJ21lZGl1bScsIGNvbG9yOiAncmVkJyB9fT5tYXAgaXMgdXBkYXRpbmcuLi48L3NwYW4+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9