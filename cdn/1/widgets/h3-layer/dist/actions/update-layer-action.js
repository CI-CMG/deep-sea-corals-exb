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
                const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsFilterChangeMessage.dataSourceIds[0]);
                const queryParams = dataSource.getCurrentQueryParams();
                console.log('new: ', dataSource);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9oMy1sYXllci9kaXN0L2FjdGlvbnMvdXBkYXRlLWxheWVyLWFjdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDT2tCO0FBRWxCLHlEQUF5RDtBQUN6RCxTQUFTLG1DQUFtQyxDQUFFLEdBQVk7SUFDeEQsT0FBUSxHQUFxQyxDQUFDLElBQUksS0FBSywyQkFBMkI7QUFDcEYsQ0FBQztBQUVjLE1BQU0saUJBQWtCLFNBQVEsNERBQXFCO0lBQ2xFLHdCQUF3QixDQUFFLGtCQUFzQztRQUM5RCxPQUFPLGtCQUFrQixDQUFDLFdBQVcsS0FBSyx5RUFBa0M7SUFDOUUsQ0FBQztJQUVELGFBQWEsQ0FBRSxPQUFnQjtRQUM3QixPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUsseUVBQWtDO0lBQzVELENBQUM7SUFFRCx3QkFBd0I7SUFDeEIsc0JBQXNCLENBQUUsV0FBd0IsRUFBRSxlQUF3QjtRQUN4RSxPQUFPLHFDQUFxQztJQUM5QyxDQUFDO0lBRUQsU0FBUyxDQUFFLE9BQWdCLEVBQUUsWUFBa0I7UUFDN0MsUUFBUSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3BCLEtBQUsseUVBQWtDO2dCQUNyQyxNQUFNLHFCQUFxQixHQUFHLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVM7Z0JBQ2hHLE1BQU0sVUFBVSxHQUFHLG9FQUE2QixFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBd0I7Z0JBQy9ILE1BQU0sV0FBVyxHQUFtQixVQUFVLENBQUMscUJBQXFCLEVBQUU7Z0JBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztnQkFDaEMsa0RBQWtEO2dCQUNsRCxzREFBVyxFQUFFLENBQUMsUUFBUSxDQUFDLHVFQUFnQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekcsd0hBQXdIO2dCQUN4SCxNQUFLO1lBRVAsS0FBSywrREFBd0I7Z0JBQzNCLHNGQUFzRjtnQkFDdEYsNkRBQTZEO2dCQUM3RCxFQUFFO2dCQUNGLDJHQUEyRztnQkFDM0csRUFBRTtnQkFDRiwyRUFBMkU7Z0JBQzNFLHVIQUF1SDtnQkFDdkgsMkRBQTJEO2dCQUMzRCxtQkFBbUI7Z0JBQ25CLGNBQWM7Z0JBQ2QsTUFBTTtnQkFDTiw2Q0FBNkM7Z0JBQzdDLDZDQUE2QztnQkFDN0MsNkNBQTZDO2dCQUM3Qyw0Q0FBNEM7Z0JBQzVDLE9BQU87Z0JBQ1AsSUFBSTtnQkFDSixNQUFLO1lBQ1Asd0VBQXdFO1lBQ3hFLDZFQUE2RTtZQUM3RSxLQUFLLDZFQUFzQztnQkFDekMsb0dBQW9HO2dCQUNwRyxnRkFBZ0Y7Z0JBQ2hGLE1BQUs7U0FDUjtRQUVELE9BQU8sSUFBSTtJQUNiLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9oMy1sYXllci9zcmMvYWN0aW9ucy91cGRhdGUtbGF5ZXItYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIEFic3RyYWN0TWVzc2FnZUFjdGlvbixcbiAgTWVzc2FnZVR5cGUsXG4gIHR5cGUgTWVzc2FnZSxcbiAgZ2V0QXBwU3RvcmUsXG4gIGFwcEFjdGlvbnMsXG4gIHR5cGUgTWVzc2FnZURlc2NyaXB0aW9uLFxuICAvLyB0eXBlIEV4dGVudENoYW5nZU1lc3NhZ2UsXG4gIHR5cGUgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UsXG4gIC8vIHR5cGUgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLFxuICBEYXRhU291cmNlTWFuYWdlcixcbiAgdHlwZSBTcWxRdWVyeVBhcmFtcyxcbiAgdHlwZSBRdWVyaWFibGVEYXRhU291cmNlXG59IGZyb20gJ2ppbXUtY29yZSdcblxuLy8gY3VzdG9tIHR5cGUgZ3VhcmQgdG8gYXZvaWQgVHlwZVNjcmlwdCBjYXN0aW5nIHZhcmlhYmxlXG5mdW5jdGlvbiBpc0RhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlVHlwZSAob2JqOiBNZXNzYWdlKTogb2JqIGlzIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlIHtcbiAgcmV0dXJuIChvYmogYXMgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UpLnR5cGUgPT09ICdEQVRBX1NPVVJDRV9GSUxURVJfQ0hBTkdFJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGRhdGVMYXllckFjdGlvbiBleHRlbmRzIEFic3RyYWN0TWVzc2FnZUFjdGlvbiB7XG4gIGZpbHRlck1lc3NhZ2VEZXNjcmlwdGlvbiAobWVzc2FnZURlc2NyaXB0aW9uOiBNZXNzYWdlRGVzY3JpcHRpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhU291cmNlRmlsdGVyQ2hhbmdlXG4gIH1cblxuICBmaWx0ZXJNZXNzYWdlIChtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1lc3NhZ2UudHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVNvdXJjZUZpbHRlckNoYW5nZVxuICB9XG5cbiAgLy9zZXQgYWN0aW9uIHNldHRpbmcgdXJpXG4gIGdldFNldHRpbmdDb21wb25lbnRVcmkgKG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSwgbWVzc2FnZVdpZGdldElkPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2FjdGlvbnMvdXBkYXRlLWxheWVyLWFjdGlvbi1zZXR0aW5nJ1xuICB9XG5cbiAgb25FeGVjdXRlIChtZXNzYWdlOiBNZXNzYWdlLCBhY3Rpb25Db25maWc/OiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRGF0YVNvdXJjZUZpbHRlckNoYW5nZTpcbiAgICAgICAgY29uc3QgZHNGaWx0ZXJDaGFuZ2VNZXNzYWdlID0gaXNEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZVR5cGUobWVzc2FnZSkgPyBtZXNzYWdlIDogdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoZHNGaWx0ZXJDaGFuZ2VNZXNzYWdlLmRhdGFTb3VyY2VJZHNbMF0pIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXM6IFNxbFF1ZXJ5UGFyYW1zID0gZGF0YVNvdXJjZS5nZXRDdXJyZW50UXVlcnlQYXJhbXMoKVxuICAgICAgICBjb25zb2xlLmxvZygnbmV3OiAnLCBkYXRhU291cmNlKVxuICAgICAgICAvLyB0cmlnZ2VycyB3aWRnZXQgcmVuZGVyIGJ5IHVwZGF0aW5nIHdpZGdldCBzdGF0ZVxuICAgICAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKHRoaXMud2lkZ2V0SWQsICdxdWVyeVBhcmFtcycsIHF1ZXJ5UGFyYW1zLndoZXJlKSlcbiAgICAgICAgLy8gZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZSh0aGlzLndpZGdldElkLCAnZmlsdGVyQ2hhbmdlTWVzc2FnZScsIGRzRmlsdGVyQ2hhbmdlTWVzc2FnZSkpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlOlxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTWVzc2FnZUhhbmRsZXJBY3Rpb246IGdvdCBFeHRlbnRDaGFuZ2VNZXNzYWdlJywgbWVzc2FnZSwgYWN0aW9uQ29uZmlnKVxuICAgICAgICAvLyBjb25zdCBleHRlbnRDaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBFeHRlbnRDaGFuZ2VNZXNzYWdlXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHVudGlsIHdlIHN0YXJ0IGRyYXdpbmcgdGlsZXMganVzdCBmb3IgdGhlIGN1cnJlbnQgdmlldyBleHRlbnQsIG5vIG5lZWQgdG8gdXBkYXRlIGFuZCB0cmlnZ2VyIGEgcmUtcmVuZGVyXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRyaWdnZXIgYW4gdXBkYXRlIGZvciB0aGUgd2lkZ2V0IHdoZW4gRXh0ZW50IGlzIGRpZmZlcmVudCBmcm9tIHByZXZpb3VzLlxuICAgICAgICAvLyBNdXN0IGJlIGEgcGxhaW4gSmF2YVNjcmlwdCBPYmplY3QgKHNlZSBodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9leHBlcmllbmNlLWJ1aWxkZXIvZ3VpZGUvd2lkZ2V0LWNvbW11bmljYXRpb24vKVxuICAgICAgICAvLyBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFxuICAgICAgICAvLyAgIHRoaXMud2lkZ2V0SWQsXG4gICAgICAgIC8vICAgJ2V4dGVudCcsXG4gICAgICAgIC8vICAge1xuICAgICAgICAvLyAgICAgeG1pbjogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQueG1pbixcbiAgICAgICAgLy8gICAgIHltaW46IGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50LnltaW4sXG4gICAgICAgIC8vICAgICB4bWF4OiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC54bWF4LFxuICAgICAgICAvLyAgICAgeW1heDogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQueW1heFxuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vIClcbiAgICAgICAgYnJlYWtcbiAgICAgIC8vIFRPRE8gbWF5IGJlIGFibGUgdG8gdXNlIHRoaXMgbWVzc2FnZSB0byBpZGVudGlmeSB0aGUgc2VsZWN0ZWQgcG9seWdvblxuICAgICAgLy8gYnV0IGN1cnJlbnRseSByZXR1cm4gZW1wdHkgYXJyYXkgZm9yIHNlbGVjdGVkIGZlYXR1cmUgb24gY2xpZW50LXNpZGUgbGF5ZXJcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2U6XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdNZXNzYWdlSGFuZGxlckFjdGlvbjogZ290IERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZScsIG1lc3NhZ2UsIGFjdGlvbkNvbmZpZylcbiAgICAgICAgLy8gY29uc3QgZGF0YVJlY29yZHNDaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2VcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=