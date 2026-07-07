System.register(["jimu-core/emotion","jimu-core","jimu-arcgis","jimu-core/react","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
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

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/dsc-models/src/runtime/widget.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");

/** @jsx jsx */


// import { CalciteSelect, CalciteOption, CalciteOptionGroup } from 'calcite-components'
// import defaultMessages from './translations/default'
// import { defaultMessages as jimuUIMessages } from 'jimu-ui'


function Widget(props) {
    var _a;
    // console.log('inside dsc-models...')
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_3__["default"].useState(true);
    const [optionsList, setOptionsList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [selectedLayerId, setSelectedLayerId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [mapLayer, setMapLayer] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    // const graphicsLayerRef = useRef<GraphicsLayer>()
    // TODO should sync of map w/ Select be in useEffect? if so, why doesn't the following work?
    // useEffect(() => {
    //   if (!selectedLayerId || !mapLayer) { return }
    //   mapLayer.allSublayers.forEach(it => {
    //     if (it.id !== selectedLayerId && !it.sublayers) {
    //       it.visible = false
    //     } else if (it.id === selectedLayerId) {
    //       it.visible = true
    //     }
    //   })
    // }, [selectedLayerId, mapLayer])
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        if (!view) {
            return;
        }
        const graphicsLayer = view.view.map.layers.find(it => it.type === 'graphics');
        if (!graphicsLayer) {
            return;
        }
        if (checked && selectedLayerId) {
            graphicsLayer.visible = false;
        }
        else {
            graphicsLayer.visible = true;
        }
    }, [view, selectedLayerId, checked]);
    // called once and used to initialize the models layer and build select list
    function initModelsLayer(layer) {
        // hack to ensure all models layers are initially off
        layer.allSublayers.forEach(it => {
            if (!it.sublayers) {
                it.visible = false;
            }
        });
        const alllayers = layer.allSublayers.map(sublayer => {
            return { id: sublayer.id, label: sublayer.title, parent: !!sublayer.sublayers };
        });
        alllayers.sort((a, b) => a.id - b.id);
        setOptionsList(alllayers.toArray());
    }
    const activeViewChangeHandler = (jmv) => {
        if (!jmv) {
            // console.warn('no MapView')
            return;
        }
        setView(jmv);
        const modelLayer = jmv.view.map.layers.find(lyr => lyr.title === props.config.modelsLayerName && lyr.type === 'map-image');
        setMapLayer(modelLayer);
        if (!modelLayer) {
            console.warn('DSC Model layer not found!');
            return;
        }
        jmv.view.whenLayerView(modelLayer).then(function (modelLayerView) {
            // now we have access to the layerView, an object representing the layer in the view
            initModelsLayer(modelLayer);
        });
    };
    function hideAllButtonHandler(e) {
        mapLayer.allSublayers.forEach(it => {
            if (!it.sublayers) {
                it.visible = false;
            }
        });
        setSelectedLayerId(null);
    }
    // WARNING: for this to work the web map has to have all the group layers visible!
    function modelLayerChangeHandler(e) {
        const selectedId = parseInt(e.target.value);
        setSelectedLayerId(selectedId);
        mapLayer.allSublayers.forEach(it => {
            // don't change visibility of group layers
            if (it.id !== selectedId && !it.sublayers) {
                it.visible = false;
            }
            else if (it.id === selectedId) {
                it.visible = true;
            }
        });
    }
    function checkboxHandler(evt, checked) {
        setChecked(checked);
    }
    function buildSelect() {
        if (!optionsList) {
            return '';
        }
        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Select, { onChange: modelLayerChangeHandler, placeholder: "Select a model layer...", value: selectedLayerId, children: optionsList.map(item => {
                if (item.parent) {
                    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Option, { header: true, children: item.label });
                }
                else {
                    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Option, { value: item.id, children: item.label });
                }
            }) }));
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "widget-demo jimu-widget", style: { width: '90%' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '90%', paddingLeft: '10px', paddingRight: '10px' }, children: buildSelect() }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { width: '90%', padding: '10px' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Checkbox, { checked: checked, onChange: checkboxHandler, "aria-label": "Hide Hexbins" }), " Hide Hexbins"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '90%' }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { onClick: hideAllButtonHandler, style: { margin: '10px' }, children: "Reset" }) })] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9kc2MtbW9kZWxzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELGVBQWU7QUFLRztBQUNrRDtBQUNwRSx3RkFBd0Y7QUFDeEYsdURBQXVEO0FBQ3ZELDhEQUE4RDtBQUNaO0FBSVE7QUFRM0MsU0FBUyxNQUFNLENBQUUsS0FBK0I7O0lBQzdELHNDQUFzQztJQUN0QyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLCtDQUFRLENBQWMsSUFBSSxDQUFDO0lBQ25ELE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsc0RBQWMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRywrQ0FBUSxDQUFnQixFQUFFLENBQUM7SUFDakUsTUFBTSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHLCtDQUFR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ZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2RzYy1tb2RlbHMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cblxuaW1wb3J0IHtcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcbiAganN4XG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgSmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnXG4vLyBpbXBvcnQgeyBDYWxjaXRlU2VsZWN0LCBDYWxjaXRlT3B0aW9uLCBDYWxjaXRlT3B0aW9uR3JvdXAgfSBmcm9tICdjYWxjaXRlLWNvbXBvbmVudHMnXG4vLyBpbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG4vLyBpbXBvcnQgeyBkZWZhdWx0TWVzc2FnZXMgYXMgamltdVVJTWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgdHlwZSBNYXBJbWFnZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL01hcEltYWdlTGF5ZXInXG5pbXBvcnQgdHlwZSBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInXG5pbXBvcnQgeyBCdXR0b24sIFNlbGVjdCwgT3B0aW9uLCBDaGVja2JveCB9IGZyb20gJ2ppbXUtdWknXG5cbmludGVyZmFjZSBNb2RlbE9wdGlvbiB7XG4gIGlkOiBudW1iZXJcbiAgbGFiZWw6IHN0cmluZ1xuICBwYXJlbnQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICAvLyBjb25zb2xlLmxvZygnaW5zaWRlIGRzYy1tb2RlbHMuLi4nKVxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZTxKaW11TWFwVmlldz4obnVsbClcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW29wdGlvbnNMaXN0LCBzZXRPcHRpb25zTGlzdF0gPSB1c2VTdGF0ZTxNb2RlbE9wdGlvbltdPihbXSlcbiAgY29uc3QgW3NlbGVjdGVkTGF5ZXJJZCwgc2V0U2VsZWN0ZWRMYXllcklkXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFttYXBMYXllciwgc2V0TWFwTGF5ZXJdID0gdXNlU3RhdGU8TWFwSW1hZ2VMYXllcj4oKVxuICAvLyBjb25zdCBncmFwaGljc0xheWVyUmVmID0gdXNlUmVmPEdyYXBoaWNzTGF5ZXI+KClcblxuICAvLyBUT0RPIHNob3VsZCBzeW5jIG9mIG1hcCB3LyBTZWxlY3QgYmUgaW4gdXNlRWZmZWN0PyBpZiBzbywgd2h5IGRvZXNuJ3QgdGhlIGZvbGxvd2luZyB3b3JrP1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICghc2VsZWN0ZWRMYXllcklkIHx8ICFtYXBMYXllcikgeyByZXR1cm4gfVxuXG4gIC8vICAgbWFwTGF5ZXIuYWxsU3VibGF5ZXJzLmZvckVhY2goaXQgPT4ge1xuICAvLyAgICAgaWYgKGl0LmlkICE9PSBzZWxlY3RlZExheWVySWQgJiYgIWl0LnN1YmxheWVycykge1xuICAvLyAgICAgICBpdC52aXNpYmxlID0gZmFsc2VcbiAgLy8gICAgIH0gZWxzZSBpZiAoaXQuaWQgPT09IHNlbGVjdGVkTGF5ZXJJZCkge1xuICAvLyAgICAgICBpdC52aXNpYmxlID0gdHJ1ZVxuICAvLyAgICAgfVxuICAvLyAgIH0pXG4gIC8vIH0sIFtzZWxlY3RlZExheWVySWQsIG1hcExheWVyXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdmlldykgeyByZXR1cm4gfVxuICAgIGNvbnN0IGdyYXBoaWNzTGF5ZXI6IEdyYXBoaWNzTGF5ZXIgPSB2aWV3LnZpZXcubWFwLmxheWVycy5maW5kKGl0ID0+IGl0LnR5cGUgPT09ICdncmFwaGljcycpIGFzIEdyYXBoaWNzTGF5ZXJcbiAgICBpZiAoIWdyYXBoaWNzTGF5ZXIpIHsgcmV0dXJuIH1cbiAgICBpZiAoY2hlY2tlZCAmJiBzZWxlY3RlZExheWVySWQpIHtcbiAgICAgIGdyYXBoaWNzTGF5ZXIudmlzaWJsZSA9IGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIGdyYXBoaWNzTGF5ZXIudmlzaWJsZSA9IHRydWVcbiAgICB9XG4gIH0sIFt2aWV3LCBzZWxlY3RlZExheWVySWQsIGNoZWNrZWRdKVxuXG4gIC8vIGNhbGxlZCBvbmNlIGFuZCB1c2VkIHRvIGluaXRpYWxpemUgdGhlIG1vZGVscyBsYXllciBhbmQgYnVpbGQgc2VsZWN0IGxpc3RcbiAgZnVuY3Rpb24gaW5pdE1vZGVsc0xheWVyIChsYXllcjogTWFwSW1hZ2VMYXllcikge1xuICAgIC8vIGhhY2sgdG8gZW5zdXJlIGFsbCBtb2RlbHMgbGF5ZXJzIGFyZSBpbml0aWFsbHkgb2ZmXG4gICAgbGF5ZXIuYWxsU3VibGF5ZXJzLmZvckVhY2goaXQgPT4ge1xuICAgICAgaWYgKCFpdC5zdWJsYXllcnMpIHtcbiAgICAgICAgaXQudmlzaWJsZSA9IGZhbHNlXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBhbGxsYXllcnMgPSBsYXllci5hbGxTdWJsYXllcnMubWFwKHN1YmxheWVyID0+IHtcbiAgICAgIHJldHVybiB7IGlkOiBzdWJsYXllci5pZCwgbGFiZWw6IHN1YmxheWVyLnRpdGxlLCBwYXJlbnQ6ICEhc3VibGF5ZXIuc3VibGF5ZXJzIH1cbiAgICB9KVxuICAgIGFsbGxheWVycy5zb3J0KChhLCBiKSA9PiBhLmlkIC0gYi5pZClcbiAgICBzZXRPcHRpb25zTGlzdChhbGxsYXllcnMudG9BcnJheSgpKVxuICB9XG5cbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIGlmICgham12KSB7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ25vIE1hcFZpZXcnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFZpZXcoam12KVxuICAgIGNvbnN0IG1vZGVsTGF5ZXIgPSBqbXYudmlldy5tYXAubGF5ZXJzLmZpbmQobHlyID0+IGx5ci50aXRsZSA9PT0gcHJvcHMuY29uZmlnLm1vZGVsc0xheWVyTmFtZSAmJiBseXIudHlwZSA9PT0gJ21hcC1pbWFnZScpIGFzIE1hcEltYWdlTGF5ZXJcbiAgICBzZXRNYXBMYXllcihtb2RlbExheWVyKVxuICAgIGlmICghbW9kZWxMYXllcikge1xuICAgICAgY29uc29sZS53YXJuKCdEU0MgTW9kZWwgbGF5ZXIgbm90IGZvdW5kIScpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBqbXYudmlldy53aGVuTGF5ZXJWaWV3KG1vZGVsTGF5ZXIpLnRoZW4oZnVuY3Rpb24gKG1vZGVsTGF5ZXJWaWV3KSB7XG4gICAgICAvLyBub3cgd2UgaGF2ZSBhY2Nlc3MgdG8gdGhlIGxheWVyVmlldywgYW4gb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbGF5ZXIgaW4gdGhlIHZpZXdcbiAgICAgIGluaXRNb2RlbHNMYXllcihtb2RlbExheWVyKVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBoaWRlQWxsQnV0dG9uSGFuZGxlciAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pIHtcbiAgICBtYXBMYXllci5hbGxTdWJsYXllcnMuZm9yRWFjaChpdCA9PiB7XG4gICAgICBpZiAoIWl0LnN1YmxheWVycykge1xuICAgICAgICBpdC52aXNpYmxlID0gZmFsc2VcbiAgICAgIH1cbiAgICB9KVxuICAgIHNldFNlbGVjdGVkTGF5ZXJJZChudWxsKVxuICB9XG5cbiAgLy8gV0FSTklORzogZm9yIHRoaXMgdG8gd29yayB0aGUgd2ViIG1hcCBoYXMgdG8gaGF2ZSBhbGwgdGhlIGdyb3VwIGxheWVycyB2aXNpYmxlIVxuICBmdW5jdGlvbiBtb2RlbExheWVyQ2hhbmdlSGFuZGxlciAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJZCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgIHNldFNlbGVjdGVkTGF5ZXJJZChzZWxlY3RlZElkKVxuICAgIG1hcExheWVyLmFsbFN1YmxheWVycy5mb3JFYWNoKGl0ID0+IHtcbiAgICAgIC8vIGRvbid0IGNoYW5nZSB2aXNpYmlsaXR5IG9mIGdyb3VwIGxheWVyc1xuICAgICAgaWYgKGl0LmlkICE9PSBzZWxlY3RlZElkICYmICFpdC5zdWJsYXllcnMpIHtcbiAgICAgICAgaXQudmlzaWJsZSA9IGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKGl0LmlkID09PSBzZWxlY3RlZElkKSB7XG4gICAgICAgIGl0LnZpc2libGUgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrYm94SGFuZGxlciAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiwgY2hlY2tlZDogYm9vbGVhbikge1xuICAgIHNldENoZWNrZWQoY2hlY2tlZClcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkU2VsZWN0ICgpIHtcbiAgICBpZiAoIW9wdGlvbnNMaXN0KSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgb25DaGFuZ2U9e21vZGVsTGF5ZXJDaGFuZ2VIYW5kbGVyfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIG1vZGVsIGxheWVyLi4uXCJcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkTGF5ZXJJZH1cbiAgICAgID5cbiAgICAgICAge29wdGlvbnNMaXN0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIGhlYWRlcj57aXRlbS5sYWJlbH08L09wdGlvbj5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24gdmFsdWU9e2l0ZW0uaWR9PntpdGVtLmxhYmVsfTwvT3B0aW9uPlxuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gIDwvU2VsZWN0PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtZGVtbyBqaW11LXdpZGdldFwiIHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fT5cbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XG4gICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17YWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XG4gICAgICAvPlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzkwJScsIHBhZGRpbmdMZWZ0OiAnMTBweCcsIHBhZGRpbmdSaWdodDogJzEwcHgnIH19PlxuICAgICAge2J1aWxkU2VsZWN0KCl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzkwJScsIHBhZGRpbmc6ICcxMHB4JyB9fT5cbiAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2hhbmdlPXtjaGVja2JveEhhbmRsZXJ9IGFyaWEtbGFiZWw9XCJIaWRlIEhleGJpbnNcIi8+IEhpZGUgSGV4Ymluc1xuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc5MCUnIH19PlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoaWRlQWxsQnV0dG9uSGFuZGxlcn0gc3R5bGU9e3sgbWFyZ2luOiAnMTBweCcgfX0+UmVzZXQ8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9