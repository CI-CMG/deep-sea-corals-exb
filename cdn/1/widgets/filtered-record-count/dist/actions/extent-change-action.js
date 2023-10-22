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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************************************************!*\
  !*** ./your-extensions/widgets/filtered-record-count/src/actions/extent-change-action.ts ***!
  \*******************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExtentChangeAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

// import webMercatorUtils from 'esri/geometry/support/webMercatorUtils'
class ExtentChangeAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    // new in v1.9, replaces filterMessageDescription. used in builder
    filterMessageDescription(messageDescription) {
        return messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange;
    }
    filterMessage(message) {
        return message.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange;
    }
    //set action setting uri
    getSettingComponentUri(messageType, messageWidgetId) {
        return 'actions/extent-change-action-setting';
    }
    onExecute(message, actionConfig) {
        switch (message.type) {
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange:
                // console.log('ExtentChangeAction: got ExtentChangeMessage', message, actionConfig)
                // const extentChangeMessage = message as ExtentChangeMessage
                // trigger an update for the widget when Extent is different from previous. Must be a plain JavaScript Object (see https://developers.arcgis.com/experience-builder/guide/widget-communication/)
                // getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'extent', this.formatExtent(extentChangeMessage.extent)))
                // getAppStore().dispatch(appActions.widgetStatePropChange(
                //   this.widgetId,
                //   'extent',
                //   {
                //     xmin: extentChangeMessage.extent.xmin,
                //     ymin: extentChangeMessage.extent.ymin,
                //     xmax: extentChangeMessage.extent.xmax,
                //     ymax: extentChangeMessage.extent.ymax
                //   })
                // )
                break;
        }
        return true;
    }
    formatExtent(extent) {
        if (!extent) {
            return 'extent not available';
        }
        // VSCode does not recognize isLinear argument is optional and defaults to false
        // TODO calling webMercatorToGeographic() causing "Load module error. TypeError: window.require is not a function"
        // const geoExtent = webMercatorUtils.webMercatorToGeographic(extent, false) as Extent
        // return `${geoExtent.xmin}, ${geoExtent.ymin}, ${geoExtent.xmax}, ${geoExtent.ymax}`
        return `${extent.xmin}, ${extent.ymin}, ${extent.xmax}, ${extent.ymax}`;
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXJlZC1yZWNvcmQtY291bnQvZGlzdC9hY3Rpb25zL2V4dGVudC1jaGFuZ2UtYWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNBa0I7QUFFbEIsd0VBQXdFO0FBRXpELE1BQU0sa0JBQW1CLFNBQVEsNERBQXFCO0lBQ25FLGtFQUFrRTtJQUNsRSx3QkFBd0IsQ0FBRSxrQkFBc0M7UUFDOUQsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLEtBQUssK0RBQXdCO0lBQ3BFLENBQUM7SUFFRCxhQUFhLENBQUUsT0FBZ0I7UUFDN0IsT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLCtEQUF3QjtJQUNsRCxDQUFDO0lBRUQsd0JBQXdCO0lBQ3hCLHNCQUFzQixDQUFFLFdBQXdCLEVBQUUsZUFBd0I7UUFDeEUsT0FBTyxzQ0FBc0M7SUFDL0MsQ0FBQztJQUVELFNBQVMsQ0FBRSxPQUFnQixFQUFFLFlBQWtCO1FBQzdDLFFBQVEsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNwQixLQUFLLCtEQUF3QjtnQkFDM0Isb0ZBQW9GO2dCQUNwRiw2REFBNkQ7Z0JBQzdELGdNQUFnTTtnQkFDaE0sbUlBQW1JO2dCQUVuSSwyREFBMkQ7Z0JBQzNELG1CQUFtQjtnQkFDbkIsY0FBYztnQkFDZCxNQUFNO2dCQUNOLDZDQUE2QztnQkFDN0MsNkNBQTZDO2dCQUM3Qyw2Q0FBNkM7Z0JBQzdDLDRDQUE0QztnQkFDNUMsT0FBTztnQkFDUCxJQUFJO2dCQUNKLE1BQUs7U0FDUjtRQUVELE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxZQUFZLENBQUUsTUFBYztRQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTyxzQkFBc0I7U0FBRTtRQUM5QyxnRkFBZ0Y7UUFDaEYsa0hBQWtIO1FBQ2xILHNGQUFzRjtRQUN0RixzRkFBc0Y7UUFDdEYsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDekUsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpbHRlcmVkLXJlY29yZC1jb3VudC9zcmMvYWN0aW9ucy9leHRlbnQtY2hhbmdlLWFjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24sXG4gIE1lc3NhZ2VUeXBlLFxuICB0eXBlIE1lc3NhZ2UsXG4gIHR5cGUgTWVzc2FnZURlc2NyaXB0aW9uXG4gIC8vIHR5cGUgRXh0ZW50Q2hhbmdlTWVzc2FnZVxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgdHlwZSBFeHRlbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9FeHRlbnQnXG4vLyBpbXBvcnQgd2ViTWVyY2F0b3JVdGlscyBmcm9tICdlc3JpL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0ZW50Q2hhbmdlQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RNZXNzYWdlQWN0aW9uIHtcbiAgLy8gbmV3IGluIHYxLjksIHJlcGxhY2VzIGZpbHRlck1lc3NhZ2VEZXNjcmlwdGlvbi4gdXNlZCBpbiBidWlsZGVyXG4gIGZpbHRlck1lc3NhZ2VEZXNjcmlwdGlvbiAobWVzc2FnZURlc2NyaXB0aW9uOiBNZXNzYWdlRGVzY3JpcHRpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5FeHRlbnRDaGFuZ2VcbiAgfVxuXG4gIGZpbHRlck1lc3NhZ2UgKG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWVzc2FnZS50eXBlID09PSBNZXNzYWdlVHlwZS5FeHRlbnRDaGFuZ2VcbiAgfVxuXG4gIC8vc2V0IGFjdGlvbiBzZXR0aW5nIHVyaVxuICBnZXRTZXR0aW5nQ29tcG9uZW50VXJpIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdhY3Rpb25zL2V4dGVudC1jaGFuZ2UtYWN0aW9uLXNldHRpbmcnXG4gIH1cblxuICBvbkV4ZWN1dGUgKG1lc3NhZ2U6IE1lc3NhZ2UsIGFjdGlvbkNvbmZpZz86IGFueSk6IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FeHRlbnRDaGFuZ2U6XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdFeHRlbnRDaGFuZ2VBY3Rpb246IGdvdCBFeHRlbnRDaGFuZ2VNZXNzYWdlJywgbWVzc2FnZSwgYWN0aW9uQ29uZmlnKVxuICAgICAgICAvLyBjb25zdCBleHRlbnRDaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBFeHRlbnRDaGFuZ2VNZXNzYWdlXG4gICAgICAgIC8vIHRyaWdnZXIgYW4gdXBkYXRlIGZvciB0aGUgd2lkZ2V0IHdoZW4gRXh0ZW50IGlzIGRpZmZlcmVudCBmcm9tIHByZXZpb3VzLiBNdXN0IGJlIGEgcGxhaW4gSmF2YVNjcmlwdCBPYmplY3QgKHNlZSBodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9leHBlcmllbmNlLWJ1aWxkZXIvZ3VpZGUvd2lkZ2V0LWNvbW11bmljYXRpb24vKVxuICAgICAgICAvLyBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKHRoaXMud2lkZ2V0SWQsICdleHRlbnQnLCB0aGlzLmZvcm1hdEV4dGVudChleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudCkpKVxuXG4gICAgICAgIC8vIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXG4gICAgICAgIC8vICAgdGhpcy53aWRnZXRJZCxcbiAgICAgICAgLy8gICAnZXh0ZW50JyxcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICB4bWluOiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC54bWluLFxuICAgICAgICAvLyAgICAgeW1pbjogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQueW1pbixcbiAgICAgICAgLy8gICAgIHhtYXg6IGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50LnhtYXgsXG4gICAgICAgIC8vICAgICB5bWF4OiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC55bWF4XG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgLy8gKVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmb3JtYXRFeHRlbnQgKGV4dGVudDogRXh0ZW50KTogc3RyaW5nIHtcbiAgICBpZiAoIWV4dGVudCkgeyByZXR1cm4gJ2V4dGVudCBub3QgYXZhaWxhYmxlJyB9XG4gICAgLy8gVlNDb2RlIGRvZXMgbm90IHJlY29nbml6ZSBpc0xpbmVhciBhcmd1bWVudCBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICAvLyBUT0RPIGNhbGxpbmcgd2ViTWVyY2F0b3JUb0dlb2dyYXBoaWMoKSBjYXVzaW5nIFwiTG9hZCBtb2R1bGUgZXJyb3IuIFR5cGVFcnJvcjogd2luZG93LnJlcXVpcmUgaXMgbm90IGEgZnVuY3Rpb25cIlxuICAgIC8vIGNvbnN0IGdlb0V4dGVudCA9IHdlYk1lcmNhdG9yVXRpbHMud2ViTWVyY2F0b3JUb0dlb2dyYXBoaWMoZXh0ZW50LCBmYWxzZSkgYXMgRXh0ZW50XG4gICAgLy8gcmV0dXJuIGAke2dlb0V4dGVudC54bWlufSwgJHtnZW9FeHRlbnQueW1pbn0sICR7Z2VvRXh0ZW50LnhtYXh9LCAke2dlb0V4dGVudC55bWF4fWBcbiAgICByZXR1cm4gYCR7ZXh0ZW50LnhtaW59LCAke2V4dGVudC55bWlufSwgJHtleHRlbnQueG1heH0sICR7ZXh0ZW50LnltYXh9YFxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=