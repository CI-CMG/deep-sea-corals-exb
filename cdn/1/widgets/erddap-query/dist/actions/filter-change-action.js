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
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/erddap-query/src/actions/filter-change-action.ts ***!
  \**********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

// custom type guard to avoid TypeScript casting variable
function isDataSourceFilterChangeMessageType(obj) {
    return obj.type === 'DATA_SOURCE_FILTER_CHANGE';
}
class FilterAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    filterMessageDescription(messageDescription) {
        return (messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange);
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
                // const dataSource = DataSourceManager.getInstance().getDataSource(dsFilterChangeMessage.dataSourceIds[0]) as QueriableDataSource
                // const queryParams: SqlQueryParams = dataSource.getCurrentQueryParams()
                // triggers widget render by updating widget state
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(this.widgetId, 'filterChangeMessage', dsFilterChangeMessage));
                // getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'queryParams', queryParams.where))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9lcmRkYXAtcXVlcnkvZGlzdC9hY3Rpb25zL2ZpbHRlci1jaGFuZ2UtYWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNNa0I7QUFFbEIseURBQXlEO0FBQ3pELFNBQVMsbUNBQW1DLENBQUUsR0FBWTtJQUN4RCxPQUFRLEdBQXFDLENBQUMsSUFBSSxLQUFLLDJCQUEyQjtBQUNwRixDQUFDO0FBRWMsTUFBTSxZQUFhLFNBQVEsNERBQXFCO0lBQzdELHdCQUF3QixDQUFFLGtCQUFzQztRQUM5RCxPQUFPLENBQ0wsa0JBQWtCLENBQUMsV0FBVyxLQUFLLGtEQUFXLENBQUMsc0JBQXNCLENBQ3RFO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBRSxPQUFnQjtRQUM3QixPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssa0RBQVcsQ0FBQyxzQkFBc0I7SUFDNUQsQ0FBQztJQUVELHdCQUF3QjtJQUN4QixzQkFBc0IsQ0FBRSxXQUF3QixFQUFFLGVBQXdCO1FBQ3hFLE9BQU8sc0NBQXNDO0lBQy9DLENBQUM7SUFFRCxTQUFTLENBQUUsT0FBZ0I7UUFDekIsUUFBUSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3BCLEtBQUssa0RBQVcsQ0FBQyxzQkFBc0I7Z0JBQ3JDLE1BQU0scUJBQXFCLEdBQUcsbUNBQW1DLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUztnQkFDaEcsa0lBQWtJO2dCQUNsSSx5RUFBeUU7Z0JBRXpFLGtEQUFrRDtnQkFDbEQsc0RBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpREFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztnQkFDckgsNEdBQTRHO2dCQUU1RyxNQUFLO1NBQ1I7UUFDRCxPQUFPLElBQUk7SUFDYixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZXJkZGFwLXF1ZXJ5L3NyYy9hY3Rpb25zL2ZpbHRlci1jaGFuZ2UtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIEFic3RyYWN0TWVzc2FnZUFjdGlvbixcbiAgTWVzc2FnZVR5cGUsXG4gIHR5cGUgTWVzc2FnZSxcbiAgZ2V0QXBwU3RvcmUsXG4gIGFwcEFjdGlvbnMsXG4gIHR5cGUgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UsXG4gIHR5cGUgRXh0ZW50Q2hhbmdlTWVzc2FnZSxcbiAgRGF0YVNvdXJjZU1hbmFnZXIsXG4gIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSxcbiAgdHlwZSBTcWxRdWVyeVBhcmFtcyxcbiAgdHlwZSBNZXNzYWdlRGVzY3JpcHRpb25cbn0gZnJvbSAnamltdS1jb3JlJ1xuXG4vLyBjdXN0b20gdHlwZSBndWFyZCB0byBhdm9pZCBUeXBlU2NyaXB0IGNhc3RpbmcgdmFyaWFibGVcbmZ1bmN0aW9uIGlzRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2VUeXBlIChvYmo6IE1lc3NhZ2UpOiBvYmogaXMgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2Uge1xuICByZXR1cm4gKG9iaiBhcyBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZSkudHlwZSA9PT0gJ0RBVEFfU09VUkNFX0ZJTFRFUl9DSEFOR0UnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckFjdGlvbiBleHRlbmRzIEFic3RyYWN0TWVzc2FnZUFjdGlvbiB7XG4gIGZpbHRlck1lc3NhZ2VEZXNjcmlwdGlvbiAobWVzc2FnZURlc2NyaXB0aW9uOiBNZXNzYWdlRGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhU291cmNlRmlsdGVyQ2hhbmdlXG4gICAgKVxuICB9XG5cbiAgZmlsdGVyTWVzc2FnZSAobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtZXNzYWdlLnR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VcbiAgfVxuXG4gIC8vc2V0IGFjdGlvbiBzZXR0aW5nIHVyaVxuICBnZXRTZXR0aW5nQ29tcG9uZW50VXJpIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdhY3Rpb25zL2ZpbHRlci1jaGFuZ2UtYWN0aW9uLXNldHRpbmcnXG4gIH1cblxuICBvbkV4ZWN1dGUgKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhU291cmNlRmlsdGVyQ2hhbmdlOlxuICAgICAgICBjb25zdCBkc0ZpbHRlckNoYW5nZU1lc3NhZ2UgPSBpc0RhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlVHlwZShtZXNzYWdlKSA/IG1lc3NhZ2UgOiB1bmRlZmluZWRcbiAgICAgICAgLy8gY29uc3QgZGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkc0ZpbHRlckNoYW5nZU1lc3NhZ2UuZGF0YVNvdXJjZUlkc1swXSkgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZVxuICAgICAgICAvLyBjb25zdCBxdWVyeVBhcmFtczogU3FsUXVlcnlQYXJhbXMgPSBkYXRhU291cmNlLmdldEN1cnJlbnRRdWVyeVBhcmFtcygpXG5cbiAgICAgICAgLy8gdHJpZ2dlcnMgd2lkZ2V0IHJlbmRlciBieSB1cGRhdGluZyB3aWRnZXQgc3RhdGVcbiAgICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZSh0aGlzLndpZGdldElkLCAnZmlsdGVyQ2hhbmdlTWVzc2FnZScsIGRzRmlsdGVyQ2hhbmdlTWVzc2FnZSkpXG4gICAgICAgIC8vIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UodGhpcy53aWRnZXRJZCwgJ3F1ZXJ5UGFyYW1zJywgcXVlcnlQYXJhbXMud2hlcmUpKVxuXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==