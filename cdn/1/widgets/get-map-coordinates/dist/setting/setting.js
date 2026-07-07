System.register(["jimu-core/emotion","jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/get-map-coordinates/src/setting/translations/default.ts":
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/get-map-coordinates/src/setting/translations/default.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    selectMapWidget: "Select Map Widget",
    settings: "Settings",
    showScale: "Show Scale",
    showZoom: "Show Zoom"
});


/***/ }),

/***/ "@emotion/react/jsx-runtime":
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
  !*** ./your-extensions/widgets/get-map-coordinates/src/setting/setting.tsx ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/get-map-coordinates/src/setting/translations/default.ts");

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
    const onShowScalePropertyChange = (evt) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('showScale', evt.currentTarget.checked)
        });
    };
    const onShowZoomPropertyChange = (evt) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set('showZoom', evt.currentTarget.checked)
        });
    };
    const onMapWidgetSelected = (useMapWidgetIds) => {
        props.onSettingChange({
            id: props.id,
            useMapWidgetIds: useMapWidgetIds
        });
    };
    const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
      .widget-setting-get-map-coordinates {
        .checkbox-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    `;
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: style, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "widget-setting-get-map-coordinates", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: "map-selector-section", title: props.intl.formatMessage({
                        id: 'mapWidgetLabel',
                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].selectMapWidget
                    }), children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { onSelect: onMapWidgetSelected, useMapWidgetIds: props.useMapWidgetIds }) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: props.intl.formatMessage({
                        id: 'settingsLabel',
                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].settings
                    }), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100 showZoom", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "checkbox-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, { id: "showZoom", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].showZoom }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: (props.config && props.config.showZoom) || false, onChange: onShowZoomPropertyChange })] }) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100 showScale", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "checkbox-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, { id: "showScale", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].showScale }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: (props.config && props.config.showScale) ||
                                                false, onChange: onShowScalePropertyChange })] }) }) })] })] }) }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsZUFBZSxFQUFFLG1CQUFtQjtJQUNwQyxRQUFRLEVBQUUsVUFBVTtJQUNwQixTQUFTLEVBQUUsWUFBWTtJQUN2QixRQUFRLEVBQUUsV0FBVztDQUN0QixFQUFDOzs7Ozs7Ozs7Ozs7QUNMRix3RTs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxpRjs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDMkQ7QUFNakI7QUFDWjtBQUV3QjtBQUV4RCw2QkFBZSxvQ0FBVSxLQUFzQztJQUM3RCxNQUFNLHlCQUF5QixHQUFHLENBQUMsR0FBc0MsRUFBRSxFQUFFO1FBQzNFLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1osTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztTQUNqRSxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxHQUFzQyxFQUFFLEVBQUU7UUFDMUUsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUNwQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDWixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1NBQ2hFLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLGVBQXlCLEVBQUUsRUFBRTtRQUN4RCxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQ3BCLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNaLGVBQWUsRUFBRSxlQUFlO1NBQ2pDLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxLQUFLLEdBQUcsOENBQUc7Ozs7Ozs7O0tBUWQ7SUFDSCxPQUFPLENBQ0wseUVBQUssR0FBRyxFQUFFLEtBQUssWUFDYiwwRUFBSyxTQUFTLEVBQUMsb0NBQW9DLGFBQ2pELGdFQUFDLCtFQUFjLElBQ2IsU0FBUyxFQUFDLHNCQUFzQixFQUNoQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7d0JBQzlCLEVBQUUsRUFBRSxnQkFBZ0I7d0JBQ3BCLGNBQWMsRUFBRSw2REFBbUIsQ0FBQyxlQUFlO3FCQUNwRCxDQUFDLFlBRUYsZ0VBQUMsMkVBQVUsY0FDVCxnRUFBQyxrRkFBaUIsSUFDaEIsUUFBUSxFQUFFLG1CQUFtQixFQUM3QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWUsR0FDdEMsR0FDUyxHQUNFLEVBRWpCLGlFQUFDLCtFQUFjLElBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO3dCQUM5QixFQUFFLEVBQUUsZUFBZTt3QkFDbkIsY0FBYyxFQUFFLDZEQUFtQixDQUFDLFFBQVE7cUJBQzdDLENBQUMsYUFFRixnRUFBQywyRUFBVSxjQUNULHlFQUFLLFNBQVMsRUFBQyxnQkFBZ0IsWUFDN0IsMEVBQUssU0FBUyxFQUFDLGNBQWMsYUFDM0IscUZBQ0UsZ0VBQUMsdURBQWdCLElBQ2YsRUFBRSxFQUFDLFVBQVUsRUFDYixjQUFjLEVBQUUsNkRBQW1CLENBQUMsUUFBUSxHQUM1QyxHQUNJLEVBQ1IsZ0VBQUMsMkNBQU0sSUFDTCxPQUFPLEVBQ0wsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxFQUVsRCxRQUFRLEVBQUUsd0JBQXdCLEdBQ2xDLElBQ0UsR0FDRixHQUNLLEVBRWIsZ0VBQUMsMkVBQVUsY0FDVCx5RUFBSyxTQUFTLEVBQUMsaUJBQWlCLFlBQzlCLDBFQUFLLFNBQVMsRUFBQyxjQUFjLGFBQzNCLHFGQUNFLGdFQUFDLHVEQUFnQixJQUNmLEVBQUUsRUFBQyxXQUFXLEVBQ2QsY0FBYyxFQUFFLDZEQUFtQixDQUFDLFNBQVMsR0FDN0MsR0FDSSxFQUNSLGdFQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUNMLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztnREFDeEMsS0FBSyxFQUVQLFFBQVEsRUFBRSx5QkFBeUIsR0FDbkMsSUFDRSxHQUNGLEdBQ0ssSUFDRSxJQUNiLEdBQ0YsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2dldC1tYXAtY29vcmRpbmF0ZXMvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBzZWxlY3RNYXBXaWRnZXQ6IFwiU2VsZWN0IE1hcCBXaWRnZXRcIixcbiAgc2V0dGluZ3M6IFwiU2V0dGluZ3NcIixcbiAgc2hvd1NjYWxlOiBcIlNob3cgU2NhbGVcIixcbiAgc2hvd1pvb206IFwiU2hvdyBab29tXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMSBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuaW1wb3J0IHsgUmVhY3QsIEZvcm1hdHRlZE1lc3NhZ2UsIGNzcywganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xuaW1wb3J0IHtcbiAgTWFwV2lkZ2V0U2VsZWN0b3IsXG4gIFNldHRpbmdTZWN0aW9uLFxuICBTZXR0aW5nUm93XG59IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgZGVmYXVsdEkxOG5NZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3Qgb25TaG93U2NhbGVQcm9wZXJ0eUNoYW5nZSA9IChldnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogcHJvcHMuaWQsXG4gICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoJ3Nob3dTY2FsZScsIGV2dC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IG9uU2hvd1pvb21Qcm9wZXJ0eUNoYW5nZSA9IChldnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogcHJvcHMuaWQsXG4gICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoJ3Nob3dab29tJywgZXZ0LmN1cnJlbnRUYXJnZXQuY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25NYXBXaWRnZXRTZWxlY3RlZCA9ICh1c2VNYXBXaWRnZXRJZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIHVzZU1hcFdpZGdldElkczogdXNlTWFwV2lkZ2V0SWRzXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHN0eWxlID0gY3NzYFxuICAgICAgLndpZGdldC1zZXR0aW5nLWdldC1tYXAtY29vcmRpbmF0ZXMge1xuICAgICAgICAuY2hlY2tib3gtcm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3N0eWxlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctZ2V0LW1hcC1jb29yZGluYXRlc1wiPlxuICAgICAgICA8U2V0dGluZ1NlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXAtc2VsZWN0b3Itc2VjdGlvblwiXG4gICAgICAgICAgdGl0bGU9e3Byb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICBpZDogJ21hcFdpZGdldExhYmVsJyxcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0STE4bk1lc3NhZ2VzLnNlbGVjdE1hcFdpZGdldFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICA8TWFwV2lkZ2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e29uTWFwV2lkZ2V0U2VsZWN0ZWR9XG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17cHJvcHMudXNlTWFwV2lkZ2V0SWRzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgICAgPFNldHRpbmdTZWN0aW9uXG4gICAgICAgICAgdGl0bGU9e3Byb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICBpZDogJ3NldHRpbmdzTGFiZWwnLFxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRJMThuTWVzc2FnZXMuc2V0dGluZ3NcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBzaG93Wm9vbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LXJvd1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2hvd1pvb21cIlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5zaG93Wm9vbX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgKHByb3BzLmNvbmZpZyAmJiBwcm9wcy5jb25maWcuc2hvd1pvb20pIHx8IGZhbHNlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25TaG93Wm9vbVByb3BlcnR5Q2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxuXG4gICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHNob3dTY2FsZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LXJvd1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2hvd1NjYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRJMThuTWVzc2FnZXMuc2hvd1NjYWxlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAocHJvcHMuY29uZmlnICYmIHByb3BzLmNvbmZpZy5zaG93U2NhbGUpIHx8XG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25TaG93U2NhbGVQcm9wZXJ0eUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9