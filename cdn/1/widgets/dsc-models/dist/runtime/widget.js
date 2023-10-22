System.register(["jimu-core","jimu-arcgis","jimu-core/react","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
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

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/dsc-models/src/runtime/widget.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__set_webpack_public_path__": () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */


// import { CalciteSelect, CalciteOption, CalciteOptionGroup } from 'calcite-components'
// import defaultMessages from './translations/default'
// import { defaultMessages as jimuUIMessages } from 'jimu-ui'


function Widget(props) {
    var _a;
    // console.log('inside dsc-models...')
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_2__["default"].useState(true);
    const [optionsList, setOptionsList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [selectedLayerId, setSelectedLayerId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [mapLayer, setMapLayer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
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
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
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
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { onChange: modelLayerChangeHandler, placeholder: "Select a model layer...", value: selectedLayerId }, optionsList.map(item => {
            if (item.parent) {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { header: true }, item.label);
            }
            else {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item.id }, item.label);
            }
        })));
    }
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-demo jimu-widget", style: { width: '90%' } },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '90%', paddingLeft: '10px', paddingRight: '10px' } }, buildSelect()),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '90%', padding: '10px' } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: checked, onChange: checkboxHandler, "aria-label": "Hide Hexbins" }),
            " Hide Hexbins"),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '90%' } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: hideAllButtonHandler, style: { margin: '10px' } }, "Reset"))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9kc2MtbW9kZWxzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCxlQUFlO0FBS0c7QUFDa0Q7QUFDcEUsd0ZBQXdGO0FBQ3hGLHVEQUF1RDtBQUN2RCw4REFBOEQ7QUFDWjtBQUlRO0FBUTNDLFNBQVMsTUFBTSxDQUFFLEtBQStCOztJQUM3RCxzQ0FBc0M7SUFDdEMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRywrQ0FBUSxDQUFjLElBQUksQ0FBQztJQUNuRCxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLHNEQUFjLENBQUMsSUFBSSxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsK0NBQVEsQ0FBZ0IsRUFBRSxDQUFDO0lBQ2pFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsR0FBRywrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUM1RCxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLCtDQUFRLEVBQWlCO0lBQ3pELG1EQUFtRDtJQUVuRCw0RkFBNEY7SUFDNUYsb0JBQW9CO0lBQ3BCLGtEQUFrRDtJQUVsRCwwQ0FBMEM7SUFDMUMsd0RBQXdEO0lBQ3hELDJCQUEyQjtJQUMzQiw4Q0FBOEM7SUFDOUMsMEJBQTBCO0lBQzFCLFFBQVE7SUFDUixPQUFPO0lBQ1Asa0NBQWtDO0lBRWxDLGdEQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLElBQUksRUFBRTtZQUFFLE9BQU07U0FBRTtRQUNyQixNQUFNLGFBQWEsR0FBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFrQjtRQUM3RyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQUUsT0FBTTtTQUFFO1FBQzlCLElBQUksT0FBTyxJQUFJLGVBQWUsRUFBRTtZQUM5QixhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUs7U0FDOUI7YUFBTTtZQUNMLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSTtTQUM3QjtJQUNILENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFcEMsNEVBQTRFO0lBQzVFLFNBQVMsZUFBZSxDQUFFLEtBQW9CO1FBQzVDLHFEQUFxRDtRQUNyRCxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLO2FBQ25CO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtRQUNqRixDQUFDLENBQUM7UUFDRixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JDLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxHQUFnQixFQUFFLEVBQUU7UUFDbkQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLDZCQUE2QjtZQUM3QixPQUFNO1NBQ1A7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ1osTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxXQUFXLENBQWtCO1FBQzNJLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUM7WUFDMUMsT0FBTTtTQUNQO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsY0FBYztZQUM5RCxvRkFBb0Y7WUFDcEYsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM3QixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxvQkFBb0IsQ0FBRSxDQUFnQztRQUM3RCxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLO2FBQ25CO1FBQ0gsQ0FBQyxDQUFDO1FBQ0Ysa0JBQWtCLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxrRkFBa0Y7SUFDbEYsU0FBUyx1QkFBdUIsQ0FBRSxDQUF1QztRQUN2RSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0Msa0JBQWtCLENBQUMsVUFBVSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2pDLDBDQUEwQztZQUMxQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRTtnQkFDekMsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLO2FBQ25CO2lCQUFNLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxVQUFVLEVBQUU7Z0JBQy9CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSTthQUNsQjtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLGVBQWUsQ0FBRSxHQUF3QyxFQUFFLE9BQWdCO1FBQ2xGLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELFNBQVMsV0FBVztRQUNsQixJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE9BQU8sRUFBRTtTQUNWO1FBQ0QsT0FBTyxDQUNMLCtDQUFDLDJDQUFNLElBQ0wsUUFBUSxFQUFFLHVCQUF1QixFQUNqQyxXQUFXLEVBQUMseUJBQXlCLEVBQ3JDLEtBQUssRUFBRSxlQUFlLElBRXJCLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLE9BQU8sK0NBQUMsMkNBQU0sSUFBQyxNQUFNLFVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBVTthQUM1QztpQkFBTTtnQkFDTCxPQUFPLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBVTthQUNyRDtRQUNILENBQUMsQ0FBQyxDQUNDLENBQ047SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUNMLHdEQUFLLFNBQVMsRUFBQyx5QkFBeUIsRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1FBQzlELCtDQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQzFDLGtCQUFrQixFQUFFLHVCQUF1QixHQUMzQztRQUNGLHdEQUFLLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQ3RFLFdBQVcsRUFBRSxDQUNSO1FBRU4sd0RBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO1lBQzNDLCtDQUFDLDZDQUFRLElBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxnQkFBYSxjQUFjLEdBQUU7NEJBQzlFO1FBRU4sd0RBQUssS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUM1QiwrQ0FBQywyQ0FBTSxJQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQWdCLENBQzFFLENBQ0YsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9kc2MtbW9kZWxzL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5cbmltcG9ydCB7XG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsXG4gIGpzeFxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuLy8gaW1wb3J0IHsgQ2FsY2l0ZVNlbGVjdCwgQ2FsY2l0ZU9wdGlvbiwgQ2FsY2l0ZU9wdGlvbkdyb3VwIH0gZnJvbSAnY2FsY2l0ZS1jb21wb25lbnRzJ1xuLy8gaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuLy8gaW1wb3J0IHsgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVVSU1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHR5cGUgTWFwSW1hZ2VMYXllciBmcm9tICdlc3JpL2xheWVycy9NYXBJbWFnZUxheWVyJ1xuaW1wb3J0IHR5cGUgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJ1xuaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3QsIE9wdGlvbiwgQ2hlY2tib3ggfSBmcm9tICdqaW11LXVpJ1xuXG5pbnRlcmZhY2UgTW9kZWxPcHRpb24ge1xuICBpZDogbnVtYmVyXG4gIGxhYmVsOiBzdHJpbmdcbiAgcGFyZW50PzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgLy8gY29uc29sZS5sb2coJ2luc2lkZSBkc2MtbW9kZWxzLi4uJylcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KG51bGwpXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtvcHRpb25zTGlzdCwgc2V0T3B0aW9uc0xpc3RdID0gdXNlU3RhdGU8TW9kZWxPcHRpb25bXT4oW10pXG4gIGNvbnN0IFtzZWxlY3RlZExheWVySWQsIHNldFNlbGVjdGVkTGF5ZXJJZF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbWFwTGF5ZXIsIHNldE1hcExheWVyXSA9IHVzZVN0YXRlPE1hcEltYWdlTGF5ZXI+KClcbiAgLy8gY29uc3QgZ3JhcGhpY3NMYXllclJlZiA9IHVzZVJlZjxHcmFwaGljc0xheWVyPigpXG5cbiAgLy8gVE9ETyBzaG91bGQgc3luYyBvZiBtYXAgdy8gU2VsZWN0IGJlIGluIHVzZUVmZmVjdD8gaWYgc28sIHdoeSBkb2Vzbid0IHRoZSBmb2xsb3dpbmcgd29yaz9cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoIXNlbGVjdGVkTGF5ZXJJZCB8fCAhbWFwTGF5ZXIpIHsgcmV0dXJuIH1cblxuICAvLyAgIG1hcExheWVyLmFsbFN1YmxheWVycy5mb3JFYWNoKGl0ID0+IHtcbiAgLy8gICAgIGlmIChpdC5pZCAhPT0gc2VsZWN0ZWRMYXllcklkICYmICFpdC5zdWJsYXllcnMpIHtcbiAgLy8gICAgICAgaXQudmlzaWJsZSA9IGZhbHNlXG4gIC8vICAgICB9IGVsc2UgaWYgKGl0LmlkID09PSBzZWxlY3RlZExheWVySWQpIHtcbiAgLy8gICAgICAgaXQudmlzaWJsZSA9IHRydWVcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuICAvLyB9LCBbc2VsZWN0ZWRMYXllcklkLCBtYXBMYXllcl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXZpZXcpIHsgcmV0dXJuIH1cbiAgICBjb25zdCBncmFwaGljc0xheWVyOiBHcmFwaGljc0xheWVyID0gdmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChpdCA9PiBpdC50eXBlID09PSAnZ3JhcGhpY3MnKSBhcyBHcmFwaGljc0xheWVyXG4gICAgaWYgKCFncmFwaGljc0xheWVyKSB7IHJldHVybiB9XG4gICAgaWYgKGNoZWNrZWQgJiYgc2VsZWN0ZWRMYXllcklkKSB7XG4gICAgICBncmFwaGljc0xheWVyLnZpc2libGUgPSBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICBncmFwaGljc0xheWVyLnZpc2libGUgPSB0cnVlXG4gICAgfVxuICB9LCBbdmlldywgc2VsZWN0ZWRMYXllcklkLCBjaGVja2VkXSlcblxuICAvLyBjYWxsZWQgb25jZSBhbmQgdXNlZCB0byBpbml0aWFsaXplIHRoZSBtb2RlbHMgbGF5ZXIgYW5kIGJ1aWxkIHNlbGVjdCBsaXN0XG4gIGZ1bmN0aW9uIGluaXRNb2RlbHNMYXllciAobGF5ZXI6IE1hcEltYWdlTGF5ZXIpIHtcbiAgICAvLyBoYWNrIHRvIGVuc3VyZSBhbGwgbW9kZWxzIGxheWVycyBhcmUgaW5pdGlhbGx5IG9mZlxuICAgIGxheWVyLmFsbFN1YmxheWVycy5mb3JFYWNoKGl0ID0+IHtcbiAgICAgIGlmICghaXQuc3VibGF5ZXJzKSB7XG4gICAgICAgIGl0LnZpc2libGUgPSBmYWxzZVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgYWxsbGF5ZXJzID0gbGF5ZXIuYWxsU3VibGF5ZXJzLm1hcChzdWJsYXllciA9PiB7XG4gICAgICByZXR1cm4geyBpZDogc3VibGF5ZXIuaWQsIGxhYmVsOiBzdWJsYXllci50aXRsZSwgcGFyZW50OiAhIXN1YmxheWVyLnN1YmxheWVycyB9XG4gICAgfSlcbiAgICBhbGxsYXllcnMuc29ydCgoYSwgYikgPT4gYS5pZCAtIGIuaWQpXG4gICAgc2V0T3B0aW9uc0xpc3QoYWxsbGF5ZXJzLnRvQXJyYXkoKSlcbiAgfVxuXG4gIGNvbnN0IGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICBpZiAoIWptdikge1xuICAgICAgLy8gY29uc29sZS53YXJuKCdubyBNYXBWaWV3JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRWaWV3KGptdilcbiAgICBjb25zdCBtb2RlbExheWVyID0gam12LnZpZXcubWFwLmxheWVycy5maW5kKGx5ciA9PiBseXIudGl0bGUgPT09IHByb3BzLmNvbmZpZy5tb2RlbHNMYXllck5hbWUgJiYgbHlyLnR5cGUgPT09ICdtYXAtaW1hZ2UnKSBhcyBNYXBJbWFnZUxheWVyXG4gICAgc2V0TWFwTGF5ZXIobW9kZWxMYXllcilcbiAgICBpZiAoIW1vZGVsTGF5ZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybignRFNDIE1vZGVsIGxheWVyIG5vdCBmb3VuZCEnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgam12LnZpZXcud2hlbkxheWVyVmlldyhtb2RlbExheWVyKS50aGVuKGZ1bmN0aW9uIChtb2RlbExheWVyVmlldykge1xuICAgICAgLy8gbm93IHdlIGhhdmUgYWNjZXNzIHRvIHRoZSBsYXllclZpZXcsIGFuIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGxheWVyIGluIHRoZSB2aWV3XG4gICAgICBpbml0TW9kZWxzTGF5ZXIobW9kZWxMYXllcilcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUFsbEJ1dHRvbkhhbmRsZXIgKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSB7XG4gICAgbWFwTGF5ZXIuYWxsU3VibGF5ZXJzLmZvckVhY2goaXQgPT4ge1xuICAgICAgaWYgKCFpdC5zdWJsYXllcnMpIHtcbiAgICAgICAgaXQudmlzaWJsZSA9IGZhbHNlXG4gICAgICB9XG4gICAgfSlcbiAgICBzZXRTZWxlY3RlZExheWVySWQobnVsbClcbiAgfVxuXG4gIC8vIFdBUk5JTkc6IGZvciB0aGlzIHRvIHdvcmsgdGhlIHdlYiBtYXAgaGFzIHRvIGhhdmUgYWxsIHRoZSBncm91cCBsYXllcnMgdmlzaWJsZSFcbiAgZnVuY3Rpb24gbW9kZWxMYXllckNoYW5nZUhhbmRsZXIgKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pikge1xuICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICBzZXRTZWxlY3RlZExheWVySWQoc2VsZWN0ZWRJZClcbiAgICBtYXBMYXllci5hbGxTdWJsYXllcnMuZm9yRWFjaChpdCA9PiB7XG4gICAgICAvLyBkb24ndCBjaGFuZ2UgdmlzaWJpbGl0eSBvZiBncm91cCBsYXllcnNcbiAgICAgIGlmIChpdC5pZCAhPT0gc2VsZWN0ZWRJZCAmJiAhaXQuc3VibGF5ZXJzKSB7XG4gICAgICAgIGl0LnZpc2libGUgPSBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChpdC5pZCA9PT0gc2VsZWN0ZWRJZCkge1xuICAgICAgICBpdC52aXNpYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBjaGVja2JveEhhbmRsZXIgKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICBzZXRDaGVja2VkKGNoZWNrZWQpXG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFNlbGVjdCAoKSB7XG4gICAgaWYgKCFvcHRpb25zTGlzdCkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0XG4gICAgICAgIG9uQ2hhbmdlPXttb2RlbExheWVyQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBtb2RlbCBsYXllci4uLlwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZExheWVySWR9XG4gICAgICA+XG4gICAgICAgIHtvcHRpb25zTGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gPE9wdGlvbiBoZWFkZXI+e2l0ZW0ubGFiZWx9PC9PcHRpb24+XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIHZhbHVlPXtpdGVtLmlkfT57aXRlbS5sYWJlbH08L09wdGlvbj5cbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICA8L1NlbGVjdD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWRlbW8gamltdS13aWRnZXRcIiBzdHlsZT17eyB3aWR0aDogJzkwJScgfX0+XG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxuICAgICAgLz5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc5MCUnLCBwYWRkaW5nTGVmdDogJzEwcHgnLCBwYWRkaW5nUmlnaHQ6ICcxMHB4JyB9fT5cbiAgICAgIHtidWlsZFNlbGVjdCgpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc5MCUnLCBwYWRkaW5nOiAnMTBweCcgfX0+XG4gICAgICAgIDxDaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNoYW5nZT17Y2hlY2tib3hIYW5kbGVyfSBhcmlhLWxhYmVsPVwiSGlkZSBIZXhiaW5zXCIvPiBIaWRlIEhleGJpbnNcbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnOTAlJyB9fT5cbiAgICAgIDxCdXR0b24gb25DbGljaz17aGlkZUFsbEJ1dHRvbkhhbmRsZXJ9IHN0eWxlPXt7IG1hcmdpbjogJzEwcHgnIH19PlJlc2V0PC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==