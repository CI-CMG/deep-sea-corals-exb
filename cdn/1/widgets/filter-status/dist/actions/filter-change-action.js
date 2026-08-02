System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/filter-status/src/actions/filter-change-action.ts ***!
  \***********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterChangeAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

// custom type guard to avoid TypeScript casting variable
function isDataSourceFilterChangeMessageType(obj) {
    return obj.type === 'DATA_SOURCE_FILTER_CHANGE';
}
class FilterChangeAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    filterMessageDescription(messageDescription) {
        return messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange;
    }
    filterMessage(message) {
        return message.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange;
    }
    //set action setting uri
    getSettingComponentUri(messageType, messageWidgetId) {
        return 'actions/filter-change-action-setting';
    }
    onExecute(message) {
        switch (message.type) {
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange:
                const dsFilterChangeMessage = isDataSourceFilterChangeMessageType(message) ? message : undefined;
                // triggers widget render by updating widget state
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(this.widgetId, 'filterChangeMessage', dsFilterChangeMessage));
                break;
            default:
                // no action needed for this message type, but we return true to indicate that the message was handled
                break;
        }
        return true;
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXItc3RhdHVzL2Rpc3QvYWN0aW9ucy9maWx0ZXItY2hhbmdlLWFjdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7OztBQ09qQztBQUVsQix5REFBeUQ7QUFDekQsU0FBUyxtQ0FBbUMsQ0FBRSxHQUFZO0lBQ3hELE9BQVEsR0FBcUMsQ0FBQyxJQUFJLEtBQUssMkJBQTJCO0FBQ3BGLENBQUM7QUFFYyxNQUFNLGtCQUFtQixTQUFRLDREQUFxQjtJQUNuRSx3QkFBd0IsQ0FBRSxrQkFBc0M7UUFDOUQsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLEtBQUssa0RBQVcsQ0FBQyxzQkFBc0I7SUFDOUUsQ0FBQztJQUVELGFBQWEsQ0FBRSxPQUFnQjtRQUM3QixPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssa0RBQVcsQ0FBQyxzQkFBc0I7SUFDNUQsQ0FBQztJQUVELHdCQUF3QjtJQUN4QixzQkFBc0IsQ0FBRSxXQUF3QixFQUFFLGVBQXdCO1FBQ3hFLE9BQU8sc0NBQXNDO0lBQy9DLENBQUM7SUFFRCxTQUFTLENBQUUsT0FBZ0I7UUFDekIsUUFBUSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDckIsS0FBSyxrREFBVyxDQUFDLHNCQUFzQjtnQkFDckMsTUFBTSxxQkFBcUIsR0FBRyxtQ0FBbUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTO2dCQUNoRyxrREFBa0Q7Z0JBQ2xELHNEQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsaURBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixDQUFDLENBQUM7Z0JBQ3JILE1BQUs7WUFDUDtnQkFDRSxzR0FBc0c7Z0JBQ3RHLE1BQUs7UUFFVCxDQUFDO1FBQ0QsT0FBTyxJQUFJO0lBQ2IsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpbHRlci1zdGF0dXMvc3JjL2FjdGlvbnMvZmlsdGVyLWNoYW5nZS1hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7XG4gIEFic3RyYWN0TWVzc2FnZUFjdGlvbixcbiAgTWVzc2FnZVR5cGUsXG4gIHR5cGUgTWVzc2FnZSxcbiAgZ2V0QXBwU3RvcmUsXG4gIGFwcEFjdGlvbnMsXG4gIHR5cGUgTWVzc2FnZURlc2NyaXB0aW9uLFxuICB0eXBlIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlLFxuICAvLyBEYXRhU291cmNlTWFuYWdlcixcbiAgLy8gdHlwZSBTcWxRdWVyeVBhcmFtcyxcbiAgLy8gdHlwZSBRdWVyaWFibGVEYXRhU291cmNlXG59IGZyb20gJ2ppbXUtY29yZSdcblxuLy8gY3VzdG9tIHR5cGUgZ3VhcmQgdG8gYXZvaWQgVHlwZVNjcmlwdCBjYXN0aW5nIHZhcmlhYmxlXG5mdW5jdGlvbiBpc0RhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlVHlwZSAob2JqOiBNZXNzYWdlKTogb2JqIGlzIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlIHtcbiAgcmV0dXJuIChvYmogYXMgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UpLnR5cGUgPT09ICdEQVRBX1NPVVJDRV9GSUxURVJfQ0hBTkdFJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJDaGFuZ2VBY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24ge1xuICBmaWx0ZXJNZXNzYWdlRGVzY3JpcHRpb24gKG1lc3NhZ2VEZXNjcmlwdGlvbjogTWVzc2FnZURlc2NyaXB0aW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVNvdXJjZUZpbHRlckNoYW5nZVxuICB9XG5cbiAgZmlsdGVyTWVzc2FnZSAobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtZXNzYWdlLnR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VcbiAgfVxuXG4gIC8vc2V0IGFjdGlvbiBzZXR0aW5nIHVyaVxuICBnZXRTZXR0aW5nQ29tcG9uZW50VXJpIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdhY3Rpb25zL2ZpbHRlci1jaGFuZ2UtYWN0aW9uLXNldHRpbmcnXG4gIH1cblxuICBvbkV4ZWN1dGUgKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhU291cmNlRmlsdGVyQ2hhbmdlOlxuICAgICAgICBjb25zdCBkc0ZpbHRlckNoYW5nZU1lc3NhZ2UgPSBpc0RhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlVHlwZShtZXNzYWdlKSA/IG1lc3NhZ2UgOiB1bmRlZmluZWRcbiAgICAgICAgLy8gdHJpZ2dlcnMgd2lkZ2V0IHJlbmRlciBieSB1cGRhdGluZyB3aWRnZXQgc3RhdGVcbiAgICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZSh0aGlzLndpZGdldElkLCAnZmlsdGVyQ2hhbmdlTWVzc2FnZScsIGRzRmlsdGVyQ2hhbmdlTWVzc2FnZSkpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBubyBhY3Rpb24gbmVlZGVkIGZvciB0aGlzIG1lc3NhZ2UgdHlwZSwgYnV0IHdlIHJldHVybiB0cnVlIHRvIGluZGljYXRlIHRoYXQgdGhlIG1lc3NhZ2Ugd2FzIGhhbmRsZWRcbiAgICAgICAgYnJlYWtcblxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=