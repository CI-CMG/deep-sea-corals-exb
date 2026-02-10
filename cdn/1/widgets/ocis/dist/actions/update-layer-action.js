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
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/ocis/src/actions/update-layer-action.ts ***!
  \*************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9vY2lzL2Rpc3QvYWN0aW9ucy91cGRhdGUtbGF5ZXItYWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNPa0I7QUFFbEIseURBQXlEO0FBQ3pELFNBQVMsbUNBQW1DLENBQUUsR0FBWTtJQUN4RCxPQUFRLEdBQXFDLENBQUMsSUFBSSxLQUFLLDJCQUEyQjtBQUNwRixDQUFDO0FBRUQsTUFBTSxpQkFBaUIsR0FBRyx3REFBaUIsQ0FBQyxXQUFXLEVBQUU7QUFDMUMsTUFBTSxpQkFBa0IsU0FBUSw0REFBcUI7SUFDbEUsd0JBQXdCLENBQUUsa0JBQXNDO1FBQzlELE9BQU8sa0JBQWtCLENBQUMsV0FBVyxLQUFLLGtEQUFXLENBQUMsc0JBQXNCO0lBQzlFLENBQUM7SUFFRCxhQUFhLENBQUUsT0FBZ0I7UUFDN0IsT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLGtEQUFXLENBQUMsc0JBQXNCO0lBQzVELENBQUM7SUFFRCx3QkFBd0I7SUFDeEIsc0JBQXNCLENBQUUsV0FBd0IsRUFBRSxlQUF3QjtRQUN4RSxPQUFPLHFDQUFxQztJQUM5QyxDQUFDO0lBRUQsU0FBUyxDQUFFLE9BQWdCLEVBQUUsWUFBa0I7UUFDN0MsUUFBUSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDckIsS0FBSyxrREFBVyxDQUFDLHNCQUFzQjtnQkFDckMsTUFBTSxxQkFBcUIsR0FBRyxtQ0FBbUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTO2dCQUNoRyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUscUJBQXFCLEVBQUUsQ0FBQztnQkFDdEMsK0hBQStIO2dCQUMvSCxNQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUF3QjtnQkFFOUcsTUFBTSxXQUFXLEdBQW1CLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDdEUsbUNBQW1DO2dCQUNuQyxrREFBa0Q7Z0JBQ2xELHNEQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsaURBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pHLHdIQUF3SDtnQkFDeEgsTUFBSztZQUVQLEtBQUssa0RBQVcsQ0FBQyxZQUFZO2dCQUMzQixzRkFBc0Y7Z0JBQ3RGLDZEQUE2RDtnQkFDN0QsRUFBRTtnQkFDRiwyR0FBMkc7Z0JBQzNHLEVBQUU7Z0JBQ0YsMkVBQTJFO2dCQUMzRSx1SEFBdUg7Z0JBQ3ZILDJEQUEyRDtnQkFDM0QsbUJBQW1CO2dCQUNuQixjQUFjO2dCQUNkLE1BQU07Z0JBQ04sNkNBQTZDO2dCQUM3Qyw2Q0FBNkM7Z0JBQzdDLDZDQUE2QztnQkFDN0MsNENBQTRDO2dCQUM1QyxPQUFPO2dCQUNQLElBQUk7Z0JBQ0osTUFBSztZQUNQLHdFQUF3RTtZQUN4RSw2RUFBNkU7WUFDN0UsS0FBSyxrREFBVyxDQUFDLDBCQUEwQjtnQkFDekMsb0dBQW9HO2dCQUNwRyxnRkFBZ0Y7Z0JBQ2hGLE1BQUs7UUFDVCxDQUFDO1FBRUQsT0FBTyxJQUFJO0lBQ2IsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29jaXMvc3JjL2FjdGlvbnMvdXBkYXRlLWxheWVyLWFjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24sXG4gIE1lc3NhZ2VUeXBlLFxuICB0eXBlIE1lc3NhZ2UsXG4gIGdldEFwcFN0b3JlLFxuICBhcHBBY3Rpb25zLFxuICB0eXBlIE1lc3NhZ2VEZXNjcmlwdGlvbixcbiAgLy8gdHlwZSBFeHRlbnRDaGFuZ2VNZXNzYWdlLFxuICB0eXBlIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlLFxuICAvLyB0eXBlIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSxcbiAgRGF0YVNvdXJjZU1hbmFnZXIsXG4gIHR5cGUgU3FsUXVlcnlQYXJhbXMsXG4gIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZVxufSBmcm9tICdqaW11LWNvcmUnXG5cbi8vIGN1c3RvbSB0eXBlIGd1YXJkIHRvIGF2b2lkIFR5cGVTY3JpcHQgY2FzdGluZyB2YXJpYWJsZVxuZnVuY3Rpb24gaXNEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZVR5cGUgKG9iajogTWVzc2FnZSk6IG9iaiBpcyBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZSB7XG4gIHJldHVybiAob2JqIGFzIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlKS50eXBlID09PSAnREFUQV9TT1VSQ0VfRklMVEVSX0NIQU5HRSdcbn1cblxuY29uc3QgZGF0YVNvdXJjZU1hbmFnZXIgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGRhdGVMYXllckFjdGlvbiBleHRlbmRzIEFic3RyYWN0TWVzc2FnZUFjdGlvbiB7XG4gIGZpbHRlck1lc3NhZ2VEZXNjcmlwdGlvbiAobWVzc2FnZURlc2NyaXB0aW9uOiBNZXNzYWdlRGVzY3JpcHRpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhU291cmNlRmlsdGVyQ2hhbmdlXG4gIH1cblxuICBmaWx0ZXJNZXNzYWdlIChtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1lc3NhZ2UudHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVNvdXJjZUZpbHRlckNoYW5nZVxuICB9XG5cbiAgLy9zZXQgYWN0aW9uIHNldHRpbmcgdXJpXG4gIGdldFNldHRpbmdDb21wb25lbnRVcmkgKG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSwgbWVzc2FnZVdpZGdldElkPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2FjdGlvbnMvdXBkYXRlLWxheWVyLWFjdGlvbi1zZXR0aW5nJ1xuICB9XG5cbiAgb25FeGVjdXRlIChtZXNzYWdlOiBNZXNzYWdlLCBhY3Rpb25Db25maWc/OiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRGF0YVNvdXJjZUZpbHRlckNoYW5nZTpcbiAgICAgICAgY29uc3QgZHNGaWx0ZXJDaGFuZ2VNZXNzYWdlID0gaXNEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZVR5cGUobWVzc2FnZSkgPyBtZXNzYWdlIDogdW5kZWZpbmVkXG4gICAgICAgIGNvbnNvbGUubG9nKHsgZHNGaWx0ZXJDaGFuZ2VNZXNzYWdlIH0pXG4gICAgICAgIC8vIGNvbnN0IGRhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoZHNGaWx0ZXJDaGFuZ2VNZXNzYWdlLmRhdGFTb3VyY2VJZHMpIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2VNYW5hZ2VyLmdldERhdGFTb3VyY2UoZHNGaWx0ZXJDaGFuZ2VNZXNzYWdlLmRhdGFTb3VyY2VJZHMpIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcblxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtczogU3FsUXVlcnlQYXJhbXMgPSBkYXRhU291cmNlLmdldEN1cnJlbnRRdWVyeVBhcmFtcygpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCduZXc6ICcsIGRhdGFTb3VyY2UpXG4gICAgICAgIC8vIHRyaWdnZXJzIHdpZGdldCByZW5kZXIgYnkgdXBkYXRpbmcgd2lkZ2V0IHN0YXRlXG4gICAgICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UodGhpcy53aWRnZXRJZCwgJ3F1ZXJ5UGFyYW1zJywgcXVlcnlQYXJhbXMud2hlcmUpKVxuICAgICAgICAvLyBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKHRoaXMud2lkZ2V0SWQsICdmaWx0ZXJDaGFuZ2VNZXNzYWdlJywgZHNGaWx0ZXJDaGFuZ2VNZXNzYWdlKSlcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FeHRlbnRDaGFuZ2U6XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdNZXNzYWdlSGFuZGxlckFjdGlvbjogZ290IEV4dGVudENoYW5nZU1lc3NhZ2UnLCBtZXNzYWdlLCBhY3Rpb25Db25maWcpXG4gICAgICAgIC8vIGNvbnN0IGV4dGVudENoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIEV4dGVudENoYW5nZU1lc3NhZ2VcbiAgICAgICAgLy9cbiAgICAgICAgLy8gdW50aWwgd2Ugc3RhcnQgZHJhd2luZyB0aWxlcyBqdXN0IGZvciB0aGUgY3VycmVudCB2aWV3IGV4dGVudCwgbm8gbmVlZCB0byB1cGRhdGUgYW5kIHRyaWdnZXIgYSByZS1yZW5kZXJcbiAgICAgICAgLy9cbiAgICAgICAgLy8gdHJpZ2dlciBhbiB1cGRhdGUgZm9yIHRoZSB3aWRnZXQgd2hlbiBFeHRlbnQgaXMgZGlmZmVyZW50IGZyb20gcHJldmlvdXMuXG4gICAgICAgIC8vIE11c3QgYmUgYSBwbGFpbiBKYXZhU2NyaXB0IE9iamVjdCAoc2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2V4cGVyaWVuY2UtYnVpbGRlci9ndWlkZS93aWRnZXQtY29tbXVuaWNhdGlvbi8pXG4gICAgICAgIC8vIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXG4gICAgICAgIC8vICAgdGhpcy53aWRnZXRJZCxcbiAgICAgICAgLy8gICAnZXh0ZW50JyxcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICB4bWluOiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC54bWluLFxuICAgICAgICAvLyAgICAgeW1pbjogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQueW1pbixcbiAgICAgICAgLy8gICAgIHhtYXg6IGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50LnhtYXgsXG4gICAgICAgIC8vICAgICB5bWF4OiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC55bWF4XG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgLy8gKVxuICAgICAgICBicmVha1xuICAgICAgLy8gVE9ETyBtYXkgYmUgYWJsZSB0byB1c2UgdGhpcyBtZXNzYWdlIHRvIGlkZW50aWZ5IHRoZSBzZWxlY3RlZCBwb2x5Z29uXG4gICAgICAvLyBidXQgY3VycmVudGx5IHJldHVybiBlbXB0eSBhcnJheSBmb3Igc2VsZWN0ZWQgZmVhdHVyZSBvbiBjbGllbnQtc2lkZSBsYXllclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZTpcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01lc3NhZ2VIYW5kbGVyQWN0aW9uOiBnb3QgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlJywgbWVzc2FnZSwgYWN0aW9uQ29uZmlnKVxuICAgICAgICAvLyBjb25zdCBkYXRhUmVjb3Jkc0NoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==