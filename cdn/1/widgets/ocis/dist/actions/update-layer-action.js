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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9vY2lzL2Rpc3QvYWN0aW9ucy91cGRhdGUtbGF5ZXItYWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O0FDU2pDO0FBRWxCLHlEQUF5RDtBQUN6RCxTQUFTLG1DQUFtQyxDQUFFLEdBQVk7SUFDeEQsT0FBUSxHQUFxQyxDQUFDLElBQUksS0FBSywyQkFBMkI7QUFDcEYsQ0FBQztBQUVELE1BQU0saUJBQWlCLEdBQUcsd0RBQWlCLENBQUMsV0FBVyxFQUFFO0FBQzFDLE1BQU0saUJBQWtCLFNBQVEsNERBQXFCO0lBQ2xFLHdCQUF3QixDQUFFLGtCQUFzQztRQUM5RCxPQUFPLGtCQUFrQixDQUFDLFdBQVcsS0FBSyxrREFBVyxDQUFDLHNCQUFzQjtJQUM5RSxDQUFDO0lBRUQsYUFBYSxDQUFFLE9BQWdCO1FBQzdCLE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSyxrREFBVyxDQUFDLHNCQUFzQjtJQUM1RCxDQUFDO0lBRUQsd0JBQXdCO0lBQ3hCLHNCQUFzQixDQUFFLFdBQXdCLEVBQUUsZUFBd0I7UUFDeEUsT0FBTyxxQ0FBcUM7SUFDOUMsQ0FBQztJQUVELFNBQVMsQ0FBRSxPQUFnQixFQUFFLFlBQWtCO1FBQzdDLFFBQVEsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JCLEtBQUssa0RBQVcsQ0FBQyxzQkFBc0I7Z0JBQ3JDLE1BQU0scUJBQXFCLEdBQUcsbUNBQW1DLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUztnQkFDaEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLHFCQUFxQixFQUFFLENBQUM7Z0JBQ3RDLCtIQUErSDtnQkFDL0gsTUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBd0I7Z0JBRTlHLE1BQU0sV0FBVyxHQUFtQixVQUFVLENBQUMscUJBQXFCLEVBQUU7Z0JBQ3RFLG1DQUFtQztnQkFDbkMsa0RBQWtEO2dCQUNsRCxzREFBVyxFQUFFLENBQUMsUUFBUSxDQUFDLGlEQUFVLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6Ryx3SEFBd0g7Z0JBQ3hILE1BQUs7WUFFUCxLQUFLLGtEQUFXLENBQUMsWUFBWTtnQkFDM0Isc0ZBQXNGO2dCQUN0Riw2REFBNkQ7Z0JBQzdELEVBQUU7Z0JBQ0YsMkdBQTJHO2dCQUMzRyxFQUFFO2dCQUNGLDJFQUEyRTtnQkFDM0UsdUhBQXVIO2dCQUN2SCwyREFBMkQ7Z0JBQzNELG1CQUFtQjtnQkFDbkIsY0FBYztnQkFDZCxNQUFNO2dCQUNOLDZDQUE2QztnQkFDN0MsNkNBQTZDO2dCQUM3Qyw2Q0FBNkM7Z0JBQzdDLDRDQUE0QztnQkFDNUMsT0FBTztnQkFDUCxJQUFJO2dCQUNKLE1BQUs7WUFDUCx3RUFBd0U7WUFDeEUsNkVBQTZFO1lBQzdFLEtBQUssa0RBQVcsQ0FBQywwQkFBMEI7Z0JBQ3pDLG9HQUFvRztnQkFDcEcsZ0ZBQWdGO2dCQUNoRixNQUFLO1FBQ1QsQ0FBQztRQUVELE9BQU8sSUFBSTtJQUNiLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vY2lzL3NyYy9hY3Rpb25zL3VwZGF0ZS1sYXllci1hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7XG4gIEFic3RyYWN0TWVzc2FnZUFjdGlvbixcbiAgTWVzc2FnZVR5cGUsXG4gIHR5cGUgTWVzc2FnZSxcbiAgZ2V0QXBwU3RvcmUsXG4gIGFwcEFjdGlvbnMsXG4gIHR5cGUgTWVzc2FnZURlc2NyaXB0aW9uLFxuICAvLyB0eXBlIEV4dGVudENoYW5nZU1lc3NhZ2UsXG4gIHR5cGUgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UsXG4gIC8vIHR5cGUgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLFxuICBEYXRhU291cmNlTWFuYWdlcixcbiAgdHlwZSBTcWxRdWVyeVBhcmFtcyxcbiAgdHlwZSBRdWVyaWFibGVEYXRhU291cmNlXG59IGZyb20gJ2ppbXUtY29yZSdcblxuLy8gY3VzdG9tIHR5cGUgZ3VhcmQgdG8gYXZvaWQgVHlwZVNjcmlwdCBjYXN0aW5nIHZhcmlhYmxlXG5mdW5jdGlvbiBpc0RhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlVHlwZSAob2JqOiBNZXNzYWdlKTogb2JqIGlzIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlIHtcbiAgcmV0dXJuIChvYmogYXMgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UpLnR5cGUgPT09ICdEQVRBX1NPVVJDRV9GSUxURVJfQ0hBTkdFJ1xufVxuXG5jb25zdCBkYXRhU291cmNlTWFuYWdlciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwZGF0ZUxheWVyQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RNZXNzYWdlQWN0aW9uIHtcbiAgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uIChtZXNzYWdlRGVzY3JpcHRpb246IE1lc3NhZ2VEZXNjcmlwdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VcbiAgfVxuXG4gIGZpbHRlck1lc3NhZ2UgKG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWVzc2FnZS50eXBlID09PSBNZXNzYWdlVHlwZS5EYXRhU291cmNlRmlsdGVyQ2hhbmdlXG4gIH1cblxuICAvL3NldCBhY3Rpb24gc2V0dGluZyB1cmlcbiAgZ2V0U2V0dGluZ0NvbXBvbmVudFVyaSAobWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBtZXNzYWdlV2lkZ2V0SWQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAnYWN0aW9ucy91cGRhdGUtbGF5ZXItYWN0aW9uLXNldHRpbmcnXG4gIH1cblxuICBvbkV4ZWN1dGUgKG1lc3NhZ2U6IE1lc3NhZ2UsIGFjdGlvbkNvbmZpZz86IGFueSk6IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhU291cmNlRmlsdGVyQ2hhbmdlOlxuICAgICAgICBjb25zdCBkc0ZpbHRlckNoYW5nZU1lc3NhZ2UgPSBpc0RhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlVHlwZShtZXNzYWdlKSA/IG1lc3NhZ2UgOiB1bmRlZmluZWRcbiAgICAgICAgY29uc29sZS5sb2coeyBkc0ZpbHRlckNoYW5nZU1lc3NhZ2UgfSlcbiAgICAgICAgLy8gY29uc3QgZGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkc0ZpbHRlckNoYW5nZU1lc3NhZ2UuZGF0YVNvdXJjZUlkcykgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZVxuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gZGF0YVNvdXJjZU1hbmFnZXIuZ2V0RGF0YVNvdXJjZShkc0ZpbHRlckNoYW5nZU1lc3NhZ2UuZGF0YVNvdXJjZUlkcykgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZVxuXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiBTcWxRdWVyeVBhcmFtcyA9IGRhdGFTb3VyY2UuZ2V0Q3VycmVudFF1ZXJ5UGFyYW1zKClcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ25ldzogJywgZGF0YVNvdXJjZSlcbiAgICAgICAgLy8gdHJpZ2dlcnMgd2lkZ2V0IHJlbmRlciBieSB1cGRhdGluZyB3aWRnZXQgc3RhdGVcbiAgICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZSh0aGlzLndpZGdldElkLCAncXVlcnlQYXJhbXMnLCBxdWVyeVBhcmFtcy53aGVyZSkpXG4gICAgICAgIC8vIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UodGhpcy53aWRnZXRJZCwgJ2ZpbHRlckNoYW5nZU1lc3NhZ2UnLCBkc0ZpbHRlckNoYW5nZU1lc3NhZ2UpKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkV4dGVudENoYW5nZTpcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01lc3NhZ2VIYW5kbGVyQWN0aW9uOiBnb3QgRXh0ZW50Q2hhbmdlTWVzc2FnZScsIG1lc3NhZ2UsIGFjdGlvbkNvbmZpZylcbiAgICAgICAgLy8gY29uc3QgZXh0ZW50Q2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRXh0ZW50Q2hhbmdlTWVzc2FnZVxuICAgICAgICAvL1xuICAgICAgICAvLyB1bnRpbCB3ZSBzdGFydCBkcmF3aW5nIHRpbGVzIGp1c3QgZm9yIHRoZSBjdXJyZW50IHZpZXcgZXh0ZW50LCBubyBuZWVkIHRvIHVwZGF0ZSBhbmQgdHJpZ2dlciBhIHJlLXJlbmRlclxuICAgICAgICAvL1xuICAgICAgICAvLyB0cmlnZ2VyIGFuIHVwZGF0ZSBmb3IgdGhlIHdpZGdldCB3aGVuIEV4dGVudCBpcyBkaWZmZXJlbnQgZnJvbSBwcmV2aW91cy5cbiAgICAgICAgLy8gTXVzdCBiZSBhIHBsYWluIEphdmFTY3JpcHQgT2JqZWN0IChzZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vZXhwZXJpZW5jZS1idWlsZGVyL2d1aWRlL3dpZGdldC1jb21tdW5pY2F0aW9uLylcbiAgICAgICAgLy8gZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcbiAgICAgICAgLy8gICB0aGlzLndpZGdldElkLFxuICAgICAgICAvLyAgICdleHRlbnQnLFxuICAgICAgICAvLyAgIHtcbiAgICAgICAgLy8gICAgIHhtaW46IGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50LnhtaW4sXG4gICAgICAgIC8vICAgICB5bWluOiBleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudC55bWluLFxuICAgICAgICAvLyAgICAgeG1heDogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQueG1heCxcbiAgICAgICAgLy8gICAgIHltYXg6IGV4dGVudENoYW5nZU1lc3NhZ2UuZXh0ZW50LnltYXhcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyApXG4gICAgICAgIGJyZWFrXG4gICAgICAvLyBUT0RPIG1heSBiZSBhYmxlIHRvIHVzZSB0aGlzIG1lc3NhZ2UgdG8gaWRlbnRpZnkgdGhlIHNlbGVjdGVkIHBvbHlnb25cbiAgICAgIC8vIGJ1dCBjdXJyZW50bHkgcmV0dXJuIGVtcHR5IGFycmF5IGZvciBzZWxlY3RlZCBmZWF0dXJlIG9uIGNsaWVudC1zaWRlIGxheWVyXG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlOlxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTWVzc2FnZUhhbmRsZXJBY3Rpb246IGdvdCBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UnLCBtZXNzYWdlLCBhY3Rpb25Db25maWcpXG4gICAgICAgIC8vIGNvbnN0IGRhdGFSZWNvcmRzQ2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9