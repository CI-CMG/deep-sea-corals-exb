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
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/h3-layer/src/actions/update-layer-action.ts ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateLayerAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

// custom type guard to avoid TypeScript casting variable
function isDataSourceFilterChangeMessageType(obj) {
    return obj.type === 'DATA_SOURCE_FILTER_CHANGE';
}
const dataSourceManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
class UpdateLayerAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    filterMessageDescription(messageDescription) {
        return messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange;
    }
    filterMessage(message) {
        return message.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange;
    }
    //set action setting uri
    getSettingComponentUri(messageType, messageWidgetId) {
        return 'actions/update-layer-action-setting';
    }
    onExecute(message, actionConfig) {
        switch (message.type) {
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange:
                const dsFilterChangeMessage = isDataSourceFilterChangeMessageType(message) ? message : undefined;
                console.log({ dsFilterChangeMessage });
                // const dataSource = DataSourceManager.getInstance().getDataSource(dsFilterChangeMessage.dataSourceIds) as QueriableDataSource
                const dataSource = dataSourceManager.getDataSource(dsFilterChangeMessage.dataSourceIds);
                const queryParams = dataSource.getCurrentQueryParams();
                // console.log('new: ', dataSource)
                // triggers widget render by updating widget state
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(this.widgetId, 'queryParams', queryParams.where));
                // getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'filterChangeMessage', dsFilterChangeMessage))
                break;
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange:
                // console.log('MessageHandlerAction: got ExtentChangeMessage', message, actionConfig)
                // const extentChangeMessage = message as ExtentChangeMessage
                //
                // until we start drawing tiles just for the current view extent, no need to update and trigger a re-render
                //
                // trigger an update for the widget when Extent is different from previous.
                // Must be a plain JavaScript Object (see https://developers.arcgis.com/experience-builder/guide/widget-communication/)
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
            // TODO may be able to use this message to identify the selected polygon
            // but currently return empty array for selected feature on client-side layer
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange:
                // console.log('MessageHandlerAction: got DataRecordsSelectionChangeMessage', message, actionConfig)
                // const dataRecordsChangeMessage = message as DataRecordsSelectionChangeMessage
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9oMy1sYXllci9kaXN0L2FjdGlvbnMvdXBkYXRlLWxheWVyLWFjdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7OztBQ1NqQztBQUVsQix5REFBeUQ7QUFDekQsU0FBUyxtQ0FBbUMsQ0FBRSxHQUFZO0lBQ3hELE9BQVEsR0FBcUMsQ0FBQyxJQUFJLEtBQUssMkJBQTJCO0FBQ3BGLENBQUM7QUFFRCxNQUFNLGlCQUFpQixHQUFHLHdEQUFpQixDQUFDLFdBQVcsRUFBRTtBQUMxQyxNQUFNLGlCQUFrQixTQUFRLDREQUFxQjtJQUNsRSx3QkFBd0IsQ0FBRSxrQkFBc0M7UUFDOUQsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLEtBQUssa0RBQVcsQ0FBQyxzQkFBc0I7SUFDOUUsQ0FBQztJQUVELGFBQWEsQ0FBRSxPQUFnQjtRQUM3QixPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssa0RBQVcsQ0FBQyxzQkFBc0I7SUFDNUQsQ0FBQztJQUVELHdCQUF3QjtJQUN4QixzQkFBc0IsQ0FBRSxXQUF3QixFQUFFLGVBQXdCO1FBQ3hFLE9BQU8scUNBQXFDO0lBQzlDLENBQUM7SUFFRCxTQUFTLENBQUUsT0FBZ0IsRUFBRSxZQUFrQjtRQUM3QyxRQUFRLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixLQUFLLGtEQUFXLENBQUMsc0JBQXNCO2dCQUNyQyxNQUFNLHFCQUFxQixHQUFHLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVM7Z0JBQ2hHLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxDQUFDO2dCQUN0QywrSEFBK0g7Z0JBQy9ILE1BQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQXdCO2dCQUU5RyxNQUFNLFdBQVcsR0FBbUIsVUFBVSxDQUFDLHFCQUFxQixFQUFFO2dCQUN0RSxtQ0FBbUM7Z0JBQ25DLGtEQUFrRDtnQkFDbEQsc0RBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpREFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekcsd0hBQXdIO2dCQUN4SCxNQUFLO1lBRVAsS0FBSyxrREFBVyxDQUFDLFlBQVk7Z0JBQzNCLHNGQUFzRjtnQkFDdEYsNkRBQTZEO2dCQUM3RCxFQUFFO2dCQUNGLDJHQUEyRztnQkFDM0csRUFBRTtnQkFDRiwyRUFBMkU7Z0JBQzNFLHVIQUF1SDtnQkFDdkgsMkRBQTJEO2dCQUMzRCxtQkFBbUI7Z0JBQ25CLGNBQWM7Z0JBQ2QsTUFBTTtnQkFDTiw2Q0FBNkM7Z0JBQzdDLDZDQUE2QztnQkFDN0MsNkNBQTZDO2dCQUM3Qyw0Q0FBNEM7Z0JBQzVDLE9BQU87Z0JBQ1AsSUFBSTtnQkFDSixNQUFLO1lBQ1Asd0VBQXdFO1lBQ3hFLDZFQUE2RTtZQUM3RSxLQUFLLGtEQUFXLENBQUMsMEJBQTBCO2dCQUN6QyxvR0FBb0c7Z0JBQ3BHLGdGQUFnRjtnQkFDaEYsTUFBSztRQUNULENBQUM7UUFFRCxPQUFPLElBQUk7SUFDYixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaDMtbGF5ZXIvc3JjL2FjdGlvbnMvdXBkYXRlLWxheWVyLWFjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHtcbiAgQWJzdHJhY3RNZXNzYWdlQWN0aW9uLFxuICBNZXNzYWdlVHlwZSxcbiAgdHlwZSBNZXNzYWdlLFxuICBnZXRBcHBTdG9yZSxcbiAgYXBwQWN0aW9ucyxcbiAgdHlwZSBNZXNzYWdlRGVzY3JpcHRpb24sXG4gIC8vIHR5cGUgRXh0ZW50Q2hhbmdlTWVzc2FnZSxcbiAgdHlwZSBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZSxcbiAgLy8gdHlwZSBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UsXG4gIERhdGFTb3VyY2VNYW5hZ2VyLFxuICB0eXBlIFNxbFF1ZXJ5UGFyYW1zLFxuICB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2Vcbn0gZnJvbSAnamltdS1jb3JlJ1xuXG4vLyBjdXN0b20gdHlwZSBndWFyZCB0byBhdm9pZCBUeXBlU2NyaXB0IGNhc3RpbmcgdmFyaWFibGVcbmZ1bmN0aW9uIGlzRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2VUeXBlIChvYmo6IE1lc3NhZ2UpOiBvYmogaXMgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2Uge1xuICByZXR1cm4gKG9iaiBhcyBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZSkudHlwZSA9PT0gJ0RBVEFfU09VUkNFX0ZJTFRFUl9DSEFOR0UnXG59XG5cbmNvbnN0IGRhdGFTb3VyY2VNYW5hZ2VyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBkYXRlTGF5ZXJBY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24ge1xuICBmaWx0ZXJNZXNzYWdlRGVzY3JpcHRpb24gKG1lc3NhZ2VEZXNjcmlwdGlvbjogTWVzc2FnZURlc2NyaXB0aW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVNvdXJjZUZpbHRlckNoYW5nZVxuICB9XG5cbiAgZmlsdGVyTWVzc2FnZSAobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtZXNzYWdlLnR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VcbiAgfVxuXG4gIC8vc2V0IGFjdGlvbiBzZXR0aW5nIHVyaVxuICBnZXRTZXR0aW5nQ29tcG9uZW50VXJpIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdhY3Rpb25zL3VwZGF0ZS1sYXllci1hY3Rpb24tc2V0dGluZydcbiAgfVxuXG4gIG9uRXhlY3V0ZSAobWVzc2FnZTogTWVzc2FnZSwgYWN0aW9uQ29uZmlnPzogYW55KTogUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2U6XG4gICAgICAgIGNvbnN0IGRzRmlsdGVyQ2hhbmdlTWVzc2FnZSA9IGlzRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2VUeXBlKG1lc3NhZ2UpID8gbWVzc2FnZSA6IHVuZGVmaW5lZFxuICAgICAgICBjb25zb2xlLmxvZyh7IGRzRmlsdGVyQ2hhbmdlTWVzc2FnZSB9KVxuICAgICAgICAvLyBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRzRmlsdGVyQ2hhbmdlTWVzc2FnZS5kYXRhU291cmNlSWRzKSBhcyBRdWVyaWFibGVEYXRhU291cmNlXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkYXRhU291cmNlTWFuYWdlci5nZXREYXRhU291cmNlKGRzRmlsdGVyQ2hhbmdlTWVzc2FnZS5kYXRhU291cmNlSWRzKSBhcyBRdWVyaWFibGVEYXRhU291cmNlXG5cbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXM6IFNxbFF1ZXJ5UGFyYW1zID0gZGF0YVNvdXJjZS5nZXRDdXJyZW50UXVlcnlQYXJhbXMoKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnbmV3OiAnLCBkYXRhU291cmNlKVxuICAgICAgICAvLyB0cmlnZ2VycyB3aWRnZXQgcmVuZGVyIGJ5IHVwZGF0aW5nIHdpZGdldCBzdGF0ZVxuICAgICAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKHRoaXMud2lkZ2V0SWQsICdxdWVyeVBhcmFtcycsIHF1ZXJ5UGFyYW1zLndoZXJlKSlcbiAgICAgICAgLy8gZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZSh0aGlzLndpZGdldElkLCAnZmlsdGVyQ2hhbmdlTWVzc2FnZScsIGRzRmlsdGVyQ2hhbmdlTWVzc2FnZSkpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlOlxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTWVzc2FnZUhhbmRsZXJBY3Rpb246IGdvdCBFeHRlbnRDaGFuZ2VNZXNzYWdlJywgbWVzc2FnZSwgYWN0aW9uQ29uZmlnKVxuICAgICAgICAvLyBjb25zdCBleHRlbnRDaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBFeHRlbnRDaGFuZ2VNZXNzYWdlXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHVudGlsIHdlIHN0YXJ0IGRyYXdpbmcgdGlsZXMganVzdCBmb3IgdGhlIGN1cnJlbnQgdmlldyBleHRlbnQsIG5vIG5lZWQgdG8gdXBkYXRlIGFuZCB0cmlnZ2VyIGEgcmUtcmVuZGVyXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRyaWdnZXIgYW4gdXBkYXRlIGZvciB0aGUgd2lkZ2V0IHdoZW4gRXh0ZW50IGlzIGRpZmZlcmVudCBmcm9tIHByZXZpb3VzLlxuICAgICAgICAvLyBNdXN0IGJlIGEgcGxhaW4gSmF2YVNjcmlwdCBPYmplY3QgKHNlZSBodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9leHBlcmllbmNlLWJ1aWxkZXIvZ3VpZGUvd2lkZ2V0LWNvbW11bmljYXRpb24vKVxuICAgICAgICAvLyBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFxuICAgICAgICAvLyAgIHRoaXMud2lkZ2V0SWQsXG4gICAgICAgIC8vICAgJ2V4dGVudCcsXG4gICAgICAgIC8vICAge1xuICAgICAgICAvLyAgICAgeG1pbjogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQueG1pbixcbiAgICAgICAgLy8gICAgIHltaW46IGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50LnltaW4sXG4gICAgICAgIC8vICAgICB4bWF4OiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC54bWF4LFxuICAgICAgICAvLyAgICAgeW1heDogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQueW1heFxuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vIClcbiAgICAgICAgYnJlYWtcbiAgICAgIC8vIFRPRE8gbWF5IGJlIGFibGUgdG8gdXNlIHRoaXMgbWVzc2FnZSB0byBpZGVudGlmeSB0aGUgc2VsZWN0ZWQgcG9seWdvblxuICAgICAgLy8gYnV0IGN1cnJlbnRseSByZXR1cm4gZW1wdHkgYXJyYXkgZm9yIHNlbGVjdGVkIGZlYXR1cmUgb24gY2xpZW50LXNpZGUgbGF5ZXJcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2U6XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdNZXNzYWdlSGFuZGxlckFjdGlvbjogZ290IERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZScsIG1lc3NhZ2UsIGFjdGlvbkNvbmZpZylcbiAgICAgICAgLy8gY29uc3QgZGF0YVJlY29yZHNDaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2VcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=