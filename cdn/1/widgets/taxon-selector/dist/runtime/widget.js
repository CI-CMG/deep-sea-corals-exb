System.register(["jimu-core","jimu-core/react","jimu-arcgis","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
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
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/taxon-selector/src/runtime/widget.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */




function Widget(props) {
    var _a, _b;
    const [dataSource, setDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [phylumList, setPhylumList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [classList, setClassList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [orderList, setOrderList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [familyList, setFamilyList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [genusList, setGenusList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selectedPhylum, setSelectedPhylum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [selectedClass, setSelectedClass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [selectedOrder, setSelectedOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [selectedFamily, setSelectedFamily] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [selectedGenus, setSelectedGenus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const featureServiceUrl = 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/DSCRTP_NatDB/FeatureServer/0/query?';
    //TODO read from configuration
    // const serviceUrl = (props.config.serviceUrl) ? props.config.serviceUrl : 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/DSCRTP_NatDB/FeatureServer/0/query?'
    // handle changes to taxon selections. update map and publish new values
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        // console.log('phylum: ' + selectedPhylum + '; class: ' + selectedClass + '; order: ' + selectedOrder + '; genus: ' + selectedGenus)
        if (!dataSource || !view) {
            // console.warn('taxon-selector: DataSource and/or MapView not yet set. QueryParams cannot updated')
            return;
        }
        const selectedTaxon = [];
        if (selectedPhylum) {
            selectedTaxon.push(selectedPhylum);
        }
        if (selectedClass) {
            selectedTaxon.push(selectedClass);
        }
        if (selectedFamily) {
            selectedTaxon.push(selectedFamily);
        }
        if (selectedOrder) {
            selectedTaxon.push(selectedOrder);
        }
        if (selectedGenus) {
            selectedTaxon.push(selectedGenus);
        }
        const q = getQuery();
        dataSource.updateQueryParams(q, props.id);
        sendMessage();
    }, [selectedPhylum, selectedClass, selectedFamily, selectedOrder, selectedGenus]);
    // run once when widget is loaded
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        // list of phylums does not change
        updatePhylumList();
    }, []);
    function getDataFromFeatureService(incomingSearchParams) {
        return __awaiter(this, void 0, void 0, function* () {
            //clone incoming
            const searchParams = new URLSearchParams(incomingSearchParams);
            // params shared be every request
            searchParams.set('returnGeometry', 'false');
            searchParams.set('returnDistinctValues', 'true');
            searchParams.set('f', 'json');
            const response = yield fetch(featureServiceUrl, {
                method: 'POST',
                body: searchParams
            });
            //TODO better error handling
            if (!response.ok) {
                console.warn('Error fetching Taxon data from: ' + featureServiceUrl);
                return;
            }
            return yield response.json();
        });
    }
    function updatePhylumList() {
        return __awaiter(this, void 0, void 0, function* () {
            const startTime = new Date();
            const searchParams = new URLSearchParams([
                ['where', '1=1'],
                ['outFields', 'Phylum'],
                ['orderByFields', 'Phylum']
            ]);
            const data = yield getDataFromFeatureService(searchParams);
            const phylums = data.features.map(feature => feature.attributes.Phylum).map(name => name || 'NA');
            setPhylumList(phylums);
            const endTime = new Date();
            console.debug(`Phylum data loaded from FeatureService in ${(endTime.getTime() - startTime.getTime()) / 1000} seconds`);
        });
    }
    function updateClassList(phylumName) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchParams = new URLSearchParams([
                ['where', `Phylum='${phylumName}'`],
                ['outFields', 'Class'],
                ['orderByFields', 'Class']
            ]);
            const data = yield getDataFromFeatureService(searchParams);
            const classes = data.features.map(feature => feature.attributes.Class).map(name => name || 'NA');
            setClassList(classes);
        });
    }
    // 'Order' is reserved word in SQL so renamed to 'Order_ in FeatureService'
    function updateOrderList(className) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchParams = new URLSearchParams([
                ['where', `Class='${className}'`],
                ['outFields', 'Order_'],
                ['orderByFields', 'Order_']
            ]);
            const data = yield getDataFromFeatureService(searchParams);
            const orders = data.features.map(feature => feature.attributes.Order_).map(name => name || 'NA');
            setOrderList(orders);
        });
    }
    function updateFamilyList(orderName) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchParams = new URLSearchParams([
                ['where', `Order_='${orderName}'`],
                ['outFields', 'Family'],
                ['orderByFields', 'Family']
            ]);
            const data = yield getDataFromFeatureService(searchParams);
            const families = data.features.map(feature => feature.attributes.Family).map(name => name || 'NA');
            setFamilyList(families);
        });
    }
    function updateGenusList(familyName) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchParams = new URLSearchParams([
                ['where', `Family='${familyName}'`],
                ['outFields', 'Genus'],
                ['orderByFields', 'Genus']
            ]);
            const data = yield getDataFromFeatureService(searchParams);
            const genera = data.features.map(feature => feature.attributes.Genus).map(name => name || 'NA');
            setGenusList(genera);
        });
    }
    /**
     * construct SQL clause based on taxon selections
     * Note that other filter criteria are managed independently by the Filter widget
     */
    function getQuery() {
        const clauses = [];
        // Feature Layer used different column names than map service
        if (selectedPhylum) {
            clauses.push(`Phylum = '${selectedPhylum}'`);
        }
        if (selectedClass) {
            clauses.push(`Class = '${selectedClass}'`);
        }
        if (selectedFamily) {
            clauses.push(`Family = '${selectedFamily}'`);
        }
        // Order is a SQL reserved word
        if (selectedOrder) {
            clauses.push(`Order_ = '${selectedOrder}'`);
        }
        if (selectedGenus) {
            clauses.push(`Genus = '${selectedGenus}'`);
        }
        if (clauses === null || clauses === void 0 ? void 0 : clauses.length) {
            return ({ where: clauses.join(' AND ') });
        }
        else {
            return null;
        }
    }
    function resetButtonHandler(evt) {
        if (selectedPhylum) {
            setSelectedPhylum(null);
        }
        if (selectedClass) {
            setSelectedClass(null);
        }
        if (selectedOrder) {
            setSelectedOrder(null);
        }
        if (selectedFamily) {
            setSelectedFamily(null);
        }
        if (selectedGenus) {
            setSelectedGenus(null);
        }
    }
    // changing phylum resets all other Select elements in hierarchy
    function phylumSelectHandler(evt) {
        setSelectedPhylum(evt.target.value);
        updateClassList(evt.target.value);
        // reset dependent values
        setSelectedClass(undefined);
        setSelectedOrder(undefined);
        setSelectedFamily(undefined);
        setSelectedGenus(undefined);
        setOrderList([]);
        setFamilyList([]);
        setGenusList([]);
    }
    function classSelectHandler(evt) {
        setSelectedClass(evt.target.value);
        updateOrderList(evt.target.value);
        // reset dependent values
        setSelectedOrder(undefined);
        setSelectedFamily(undefined);
        setSelectedGenus(undefined);
        setFamilyList([]);
        setGenusList([]);
    }
    function orderSelectHandler(evt) {
        setSelectedOrder(evt.target.value);
        updateFamilyList(evt.target.value);
        // reset dependent values
        setSelectedFamily(undefined);
        setSelectedGenus(undefined);
        setGenusList([]);
    }
    function familySelectHandler(evt) {
        setSelectedFamily(evt.target.value);
        updateGenusList(evt.target.value);
        // reset dependent values
        setSelectedGenus(undefined);
    }
    function genusSelectHandler(evt) {
        setSelectedGenus(evt.target.value);
    }
    // runs once
    function onDataSourceCreated(ds) {
        if (ds) {
            const dataSource = ds;
            setDataSource(dataSource);
        }
        else {
            console.error('unable to create DataSource');
        }
    }
    // runs once
    const activeViewChangeHandler = (jmv) => {
        if (!jmv) {
            console.warn('no MapView');
            return;
        }
        setView(jmv.view);
    };
    function sendMessage() {
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceFilterChangeMessage(props.id, dataSource.id));
    }
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "jimu-widget", style: { width: '100%', height: '100%', overflow: 'hidden' } },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0], widgetId: props.id, onDataSourceCreated: onDataSourceCreated }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b[0], onActiveViewChange: activeViewChangeHandler })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedPhylum, onChange: phylumSelectHandler, placeholder: "Select a Phylum...", style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, "aria-label": 'Select a Phylum', menuRole: "menu", menuItemCheckMode: "singleCheck", disabled: !phylumList.length }, phylumList === null || phylumList === void 0 ? void 0 : phylumList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedClass, onChange: classSelectHandler, placeholder: "Select a Class...", style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, menuRole: "menu", disabled: !selectedPhylum }, classList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedOrder, onChange: orderSelectHandler, placeholder: "Select an Order...", style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, menuRole: "menu", disabled: !selectedClass }, orderList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedFamily, onChange: familySelectHandler, placeholder: "Select a Family...", style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, menuRole: "menu", disabled: !selectedOrder }, familyList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedGenus, onChange: genusSelectHandler, placeholder: "Select a Genus...", style: { paddingLeft: '10px', width: 200 }, menuRole: "menu", disabled: !selectedFamily }, genusList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { style: { marginLeft: '10px' }, onClick: resetButtonHandler }, "Reset")));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90YXhvbi1zZWxlY3Rvci9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQU1HO0FBQ2dDO0FBQ2tCO0FBQ3BCO0FBR2pDLFNBQVMsTUFBTSxDQUFFLEtBQStCOztJQUM3RCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEMsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRywrQ0FBUSxDQUFXLEVBQUUsQ0FBQztJQUMxRCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLCtDQUFRLENBQVcsRUFBRSxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsK0NBQVEsQ0FB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VSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFFLElBQUksSUFBRyxJQUFJLENBQVUsQ0FBQyxDQUN0RDtRQUVULCtDQUFDLDJDQUFNLElBQ0wsS0FBSyxFQUFFLGFBQWEsRUFDcEIsUUFBUSxFQUFFLGtCQUFrQixFQUM1QixXQUFXLEVBQUMsbUJBQW1CLEVBQy9CLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUMxQyxRQUFRLEVBQUMsTUFBTSxFQUNmLFFBQVEsRUFBRSxDQUFDLGNBQWMsSUFFeEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFFLElBQUksSUFBRyxJQUFJLENBQVUsQ0FBQyxDQUNyRDtRQUVULCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsWUFBZ0IsQ0FFOUUsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy90YXhvbi1zZWxlY3Rvci9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcbiAganN4LCBEYXRhU291cmNlQ29tcG9uZW50LFxuICB0eXBlIFNxbFF1ZXJ5UGFyYW1zLFxuICB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2UsIHR5cGUgRGF0YVNvdXJjZSwgTWVzc2FnZU1hbmFnZXIsIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0eXBlIEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHsgU2VsZWN0LCBPcHRpb24sIEJ1dHRvbiB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3QgW2RhdGFTb3VyY2UsIHNldERhdGFTb3VyY2VdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3BoeWx1bUxpc3QsIHNldFBoeWx1bUxpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbY2xhc3NMaXN0LCBzZXRDbGFzc0xpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbb3JkZXJMaXN0LCBzZXRPcmRlckxpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbZmFtaWx5TGlzdCwgc2V0RmFtaWx5TGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtnZW51c0xpc3QsIHNldEdlbnVzTGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtzZWxlY3RlZFBoeWx1bSwgc2V0U2VsZWN0ZWRQaHlsdW1dID0gdXNlU3RhdGU8c3RyaW5nfHVuZGVmaW5lZD4oKVxuICBjb25zdCBbc2VsZWN0ZWRDbGFzcywgc2V0U2VsZWN0ZWRDbGFzc10gPSB1c2VTdGF0ZTxzdHJpbmd8dW5kZWZpbmVkPigpXG4gIGNvbnN0IFtzZWxlY3RlZE9yZGVyLCBzZXRTZWxlY3RlZE9yZGVyXSA9IHVzZVN0YXRlPHN0cmluZ3x1bmRlZmluZWQ+KClcbiAgY29uc3QgW3NlbGVjdGVkRmFtaWx5LCBzZXRTZWxlY3RlZEZhbWlseV0gPSB1c2VTdGF0ZTxzdHJpbmd8dW5kZWZpbmVkPigpXG4gIGNvbnN0IFtzZWxlY3RlZEdlbnVzLCBzZXRTZWxlY3RlZEdlbnVzXSA9IHVzZVN0YXRlPHN0cmluZ3x1bmRlZmluZWQ+KClcbiAgY29uc3QgZmVhdHVyZVNlcnZpY2VVcmwgPSAnaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS9DOEVNZ3JzRmNSRkw2THJML0FyY0dJUy9yZXN0L3NlcnZpY2VzL0RTQ1JUUF9OYXREQi9GZWF0dXJlU2VydmVyLzAvcXVlcnk/J1xuICAvL1RPRE8gcmVhZCBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgLy8gY29uc3Qgc2VydmljZVVybCA9IChwcm9wcy5jb25maWcuc2VydmljZVVybCkgPyBwcm9wcy5jb25maWcuc2VydmljZVVybCA6ICdodHRwczovL3NlcnZpY2VzMi5hcmNnaXMuY29tL0M4RU1ncnNGY1JGTDZMckwvQXJjR0lTL3Jlc3Qvc2VydmljZXMvRFNDUlRQX05hdERCL0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeT8nXG5cbiAgLy8gaGFuZGxlIGNoYW5nZXMgdG8gdGF4b24gc2VsZWN0aW9ucy4gdXBkYXRlIG1hcCBhbmQgcHVibGlzaCBuZXcgdmFsdWVzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3BoeWx1bTogJyArIHNlbGVjdGVkUGh5bHVtICsgJzsgY2xhc3M6ICcgKyBzZWxlY3RlZENsYXNzICsgJzsgb3JkZXI6ICcgKyBzZWxlY3RlZE9yZGVyICsgJzsgZ2VudXM6ICcgKyBzZWxlY3RlZEdlbnVzKVxuICAgIGlmICghZGF0YVNvdXJjZSB8fCAhdmlldykge1xuICAgICAgLy8gY29uc29sZS53YXJuKCd0YXhvbi1zZWxlY3RvcjogRGF0YVNvdXJjZSBhbmQvb3IgTWFwVmlldyBub3QgeWV0IHNldC4gUXVlcnlQYXJhbXMgY2Fubm90IHVwZGF0ZWQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXhvbiA9IFtdXG4gICAgaWYgKHNlbGVjdGVkUGh5bHVtKSB7IHNlbGVjdGVkVGF4b24ucHVzaChzZWxlY3RlZFBoeWx1bSkgfVxuICAgIGlmIChzZWxlY3RlZENsYXNzKSB7IHNlbGVjdGVkVGF4b24ucHVzaChzZWxlY3RlZENsYXNzKSB9XG4gICAgaWYgKHNlbGVjdGVkRmFtaWx5KSB7IHNlbGVjdGVkVGF4b24ucHVzaChzZWxlY3RlZEZhbWlseSkgfVxuICAgIGlmIChzZWxlY3RlZE9yZGVyKSB7IHNlbGVjdGVkVGF4b24ucHVzaChzZWxlY3RlZE9yZGVyKSB9XG4gICAgaWYgKHNlbGVjdGVkR2VudXMpIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkR2VudXMpIH1cblxuICAgIGNvbnN0IHEgPSBnZXRRdWVyeSgpO1xuICAgIChkYXRhU291cmNlIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2UpLnVwZGF0ZVF1ZXJ5UGFyYW1zKHEsIHByb3BzLmlkKVxuICAgIHNlbmRNZXNzYWdlKClcbiAgfSwgW3NlbGVjdGVkUGh5bHVtLCBzZWxlY3RlZENsYXNzLCBzZWxlY3RlZEZhbWlseSwgc2VsZWN0ZWRPcmRlciwgc2VsZWN0ZWRHZW51c10pXG5cbiAgLy8gcnVuIG9uY2Ugd2hlbiB3aWRnZXQgaXMgbG9hZGVkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gbGlzdCBvZiBwaHlsdW1zIGRvZXMgbm90IGNoYW5nZVxuICAgIHVwZGF0ZVBoeWx1bUxpc3QoKVxuICB9LCBbXSlcblxuICBhc3luYyBmdW5jdGlvbiBnZXREYXRhRnJvbUZlYXR1cmVTZXJ2aWNlIChpbmNvbWluZ1NlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgLy9jbG9uZSBpbmNvbWluZ1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoaW5jb21pbmdTZWFyY2hQYXJhbXMpXG4gICAgLy8gcGFyYW1zIHNoYXJlZCBiZSBldmVyeSByZXF1ZXN0XG4gICAgc2VhcmNoUGFyYW1zLnNldCgncmV0dXJuR2VvbWV0cnknLCAnZmFsc2UnKVxuICAgIHNlYXJjaFBhcmFtcy5zZXQoJ3JldHVybkRpc3RpbmN0VmFsdWVzJywgJ3RydWUnKVxuICAgIHNlYXJjaFBhcmFtcy5zZXQoJ2YnLCAnanNvbicpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZWF0dXJlU2VydmljZVVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBzZWFyY2hQYXJhbXNcbiAgICB9KVxuICAgIC8vVE9ETyBiZXR0ZXIgZXJyb3IgaGFuZGxpbmdcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIGZldGNoaW5nIFRheG9uIGRhdGEgZnJvbTogJyArIGZlYXR1cmVTZXJ2aWNlVXJsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBoeWx1bUxpc3QgKCkge1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtcbiAgICAgIFsnd2hlcmUnLCAnMT0xJ10sXG4gICAgICBbJ291dEZpZWxkcycsICdQaHlsdW0nXSxcbiAgICAgIFsnb3JkZXJCeUZpZWxkcycsICdQaHlsdW0nXVxuICAgIF0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGFGcm9tRmVhdHVyZVNlcnZpY2Uoc2VhcmNoUGFyYW1zKVxuICAgIGNvbnN0IHBoeWx1bXMgPSBkYXRhLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlcy5QaHlsdW0pLm1hcChuYW1lID0+IG5hbWUgfHwgJ05BJylcbiAgICBzZXRQaHlsdW1MaXN0KHBoeWx1bXMpXG4gICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKClcbiAgICBjb25zb2xlLmRlYnVnKGBQaHlsdW0gZGF0YSBsb2FkZWQgZnJvbSBGZWF0dXJlU2VydmljZSBpbiAkeyhlbmRUaW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMH0gc2Vjb25kc2ApXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVDbGFzc0xpc3QgKHBoeWx1bU5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICAgICAgWyd3aGVyZScsIGBQaHlsdW09JyR7cGh5bHVtTmFtZX0nYF0sXG4gICAgICBbJ291dEZpZWxkcycsICdDbGFzcyddLFxuICAgICAgWydvcmRlckJ5RmllbGRzJywgJ0NsYXNzJ11cbiAgICBdKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhRnJvbUZlYXR1cmVTZXJ2aWNlKHNlYXJjaFBhcmFtcylcbiAgICBjb25zdCBjbGFzc2VzID0gZGF0YS5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXMuQ2xhc3MpLm1hcChuYW1lID0+IG5hbWUgfHwgJ05BJylcbiAgICBzZXRDbGFzc0xpc3QoY2xhc3NlcylcbiAgfVxuXG4gIC8vICdPcmRlcicgaXMgcmVzZXJ2ZWQgd29yZCBpbiBTUUwgc28gcmVuYW1lZCB0byAnT3JkZXJfIGluIEZlYXR1cmVTZXJ2aWNlJ1xuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVPcmRlckxpc3QgKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gICAgICBbJ3doZXJlJywgYENsYXNzPScke2NsYXNzTmFtZX0nYF0sXG4gICAgICBbJ291dEZpZWxkcycsICdPcmRlcl8nXSxcbiAgICAgIFsnb3JkZXJCeUZpZWxkcycsICdPcmRlcl8nXVxuICAgIF0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGFGcm9tRmVhdHVyZVNlcnZpY2Uoc2VhcmNoUGFyYW1zKVxuICAgIGNvbnN0IG9yZGVycyA9IGRhdGEuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzLk9yZGVyXykubWFwKG5hbWUgPT4gbmFtZSB8fCAnTkEnKVxuICAgIHNldE9yZGVyTGlzdChvcmRlcnMpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVGYW1pbHlMaXN0IChvcmRlck5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICAgICAgWyd3aGVyZScsIGBPcmRlcl89JyR7b3JkZXJOYW1lfSdgXSxcbiAgICAgIFsnb3V0RmllbGRzJywgJ0ZhbWlseSddLFxuICAgICAgWydvcmRlckJ5RmllbGRzJywgJ0ZhbWlseSddXG4gICAgXSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YUZyb21GZWF0dXJlU2VydmljZShzZWFyY2hQYXJhbXMpXG4gICAgY29uc3QgZmFtaWxpZXMgPSBkYXRhLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlcy5GYW1pbHkpLm1hcChuYW1lID0+IG5hbWUgfHwgJ05BJylcbiAgICBzZXRGYW1pbHlMaXN0KGZhbWlsaWVzKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2VudXNMaXN0IChmYW1pbHlOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtcbiAgICAgIFsnd2hlcmUnLCBgRmFtaWx5PScke2ZhbWlseU5hbWV9J2BdLFxuICAgICAgWydvdXRGaWVsZHMnLCAnR2VudXMnXSxcbiAgICAgIFsnb3JkZXJCeUZpZWxkcycsICdHZW51cyddXG4gICAgXSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YUZyb21GZWF0dXJlU2VydmljZShzZWFyY2hQYXJhbXMpXG4gICAgY29uc3QgZ2VuZXJhID0gZGF0YS5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXMuR2VudXMpLm1hcChuYW1lID0+IG5hbWUgfHwgJ05BJylcbiAgICBzZXRHZW51c0xpc3QoZ2VuZXJhKVxuICB9XG5cbiAgLyoqXG4gICAqIGNvbnN0cnVjdCBTUUwgY2xhdXNlIGJhc2VkIG9uIHRheG9uIHNlbGVjdGlvbnNcbiAgICogTm90ZSB0aGF0IG90aGVyIGZpbHRlciBjcml0ZXJpYSBhcmUgbWFuYWdlZCBpbmRlcGVuZGVudGx5IGJ5IHRoZSBGaWx0ZXIgd2lkZ2V0XG4gICAqL1xuICBmdW5jdGlvbiBnZXRRdWVyeSAoKTogU3FsUXVlcnlQYXJhbXMge1xuICAgIGNvbnN0IGNsYXVzZXMgPSBbXVxuXG4gICAgLy8gRmVhdHVyZSBMYXllciB1c2VkIGRpZmZlcmVudCBjb2x1bW4gbmFtZXMgdGhhbiBtYXAgc2VydmljZVxuICAgIGlmIChzZWxlY3RlZFBoeWx1bSkgeyBjbGF1c2VzLnB1c2goYFBoeWx1bSA9ICcke3NlbGVjdGVkUGh5bHVtfSdgKSB9XG4gICAgaWYgKHNlbGVjdGVkQ2xhc3MpIHsgY2xhdXNlcy5wdXNoKGBDbGFzcyA9ICcke3NlbGVjdGVkQ2xhc3N9J2ApIH1cbiAgICBpZiAoc2VsZWN0ZWRGYW1pbHkpIHsgY2xhdXNlcy5wdXNoKGBGYW1pbHkgPSAnJHtzZWxlY3RlZEZhbWlseX0nYCkgfVxuICAgIC8vIE9yZGVyIGlzIGEgU1FMIHJlc2VydmVkIHdvcmRcbiAgICBpZiAoc2VsZWN0ZWRPcmRlcikgeyBjbGF1c2VzLnB1c2goYE9yZGVyXyA9ICcke3NlbGVjdGVkT3JkZXJ9J2ApIH1cbiAgICBpZiAoc2VsZWN0ZWRHZW51cykgeyBjbGF1c2VzLnB1c2goYEdlbnVzID0gJyR7c2VsZWN0ZWRHZW51c30nYCkgfVxuXG4gICAgaWYgKGNsYXVzZXM/Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuICh7IHdoZXJlOiBjbGF1c2VzLmpvaW4oJyBBTkQgJykgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldEJ1dHRvbkhhbmRsZXIgKGV2dDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcbiAgICBpZiAoc2VsZWN0ZWRQaHlsdW0pIHsgc2V0U2VsZWN0ZWRQaHlsdW0obnVsbCkgfVxuICAgIGlmIChzZWxlY3RlZENsYXNzKSB7IHNldFNlbGVjdGVkQ2xhc3MobnVsbCkgfVxuICAgIGlmIChzZWxlY3RlZE9yZGVyKSB7IHNldFNlbGVjdGVkT3JkZXIobnVsbCkgfVxuICAgIGlmIChzZWxlY3RlZEZhbWlseSkgeyBzZXRTZWxlY3RlZEZhbWlseShudWxsKSB9XG4gICAgaWYgKHNlbGVjdGVkR2VudXMpIHsgc2V0U2VsZWN0ZWRHZW51cyhudWxsKSB9XG4gIH1cblxuICAvLyBjaGFuZ2luZyBwaHlsdW0gcmVzZXRzIGFsbCBvdGhlciBTZWxlY3QgZWxlbWVudHMgaW4gaGllcmFyY2h5XG4gIGZ1bmN0aW9uIHBoeWx1bVNlbGVjdEhhbmRsZXIgKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XG4gICAgc2V0U2VsZWN0ZWRQaHlsdW0oZXZ0LnRhcmdldC52YWx1ZSlcbiAgICB1cGRhdGVDbGFzc0xpc3QoZXZ0LnRhcmdldC52YWx1ZSlcblxuICAgIC8vIHJlc2V0IGRlcGVuZGVudCB2YWx1ZXNcbiAgICBzZXRTZWxlY3RlZENsYXNzKHVuZGVmaW5lZClcbiAgICBzZXRTZWxlY3RlZE9yZGVyKHVuZGVmaW5lZClcbiAgICBzZXRTZWxlY3RlZEZhbWlseSh1bmRlZmluZWQpXG4gICAgc2V0U2VsZWN0ZWRHZW51cyh1bmRlZmluZWQpXG4gICAgc2V0T3JkZXJMaXN0KFtdKVxuICAgIHNldEZhbWlseUxpc3QoW10pXG4gICAgc2V0R2VudXNMaXN0KFtdKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xhc3NTZWxlY3RIYW5kbGVyIChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pikge1xuICAgIHNldFNlbGVjdGVkQ2xhc3MoZXZ0LnRhcmdldC52YWx1ZSlcbiAgICB1cGRhdGVPcmRlckxpc3QoZXZ0LnRhcmdldC52YWx1ZSlcblxuICAgIC8vIHJlc2V0IGRlcGVuZGVudCB2YWx1ZXNcbiAgICBzZXRTZWxlY3RlZE9yZGVyKHVuZGVmaW5lZClcbiAgICBzZXRTZWxlY3RlZEZhbWlseSh1bmRlZmluZWQpXG4gICAgc2V0U2VsZWN0ZWRHZW51cyh1bmRlZmluZWQpXG4gICAgc2V0RmFtaWx5TGlzdChbXSlcbiAgICBzZXRHZW51c0xpc3QoW10pXG4gIH1cblxuICBmdW5jdGlvbiBvcmRlclNlbGVjdEhhbmRsZXIgKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XG4gICAgc2V0U2VsZWN0ZWRPcmRlcihldnQudGFyZ2V0LnZhbHVlKVxuICAgIHVwZGF0ZUZhbWlseUxpc3QoZXZ0LnRhcmdldC52YWx1ZSlcblxuICAgIC8vIHJlc2V0IGRlcGVuZGVudCB2YWx1ZXNcbiAgICBzZXRTZWxlY3RlZEZhbWlseSh1bmRlZmluZWQpXG4gICAgc2V0U2VsZWN0ZWRHZW51cyh1bmRlZmluZWQpXG4gICAgc2V0R2VudXNMaXN0KFtdKVxuICB9XG5cbiAgZnVuY3Rpb24gZmFtaWx5U2VsZWN0SGFuZGxlciAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcbiAgICBzZXRTZWxlY3RlZEZhbWlseShldnQudGFyZ2V0LnZhbHVlKVxuICAgIHVwZGF0ZUdlbnVzTGlzdChldnQudGFyZ2V0LnZhbHVlKVxuXG4gICAgLy8gcmVzZXQgZGVwZW5kZW50IHZhbHVlc1xuICAgIHNldFNlbGVjdGVkR2VudXModW5kZWZpbmVkKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VudXNTZWxlY3RIYW5kbGVyIChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pikge1xuICAgIHNldFNlbGVjdGVkR2VudXMoZXZ0LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIC8vIHJ1bnMgb25jZVxuICBmdW5jdGlvbiBvbkRhdGFTb3VyY2VDcmVhdGVkIChkczogRGF0YVNvdXJjZSkge1xuICAgIGlmIChkcykge1xuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRzIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcbiAgICAgIHNldERhdGFTb3VyY2UoZGF0YVNvdXJjZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIGNyZWF0ZSBEYXRhU291cmNlJylcbiAgICB9XG4gIH1cblxuICAvLyBydW5zIG9uY2VcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIGlmICgham12KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ25vIE1hcFZpZXcnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFZpZXcoam12LnZpZXcpXG4gIH1cblxuICBmdW5jdGlvbiBzZW5kTWVzc2FnZSAoKSB7XG4gICAgTWVzc2FnZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdWJsaXNoTWVzc2FnZShuZXcgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UocHJvcHMuaWQsIGRhdGFTb3VyY2UuaWQpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0XCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlcz8uWzBdfVxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxuICAgICAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17b25EYXRhU291cmNlQ3JlYXRlZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn0+PC9KaW11TWFwVmlld0NvbXBvbmVudD5cblxuICAgICAgPC9kaXY+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZFBoeWx1bX1cbiAgICAgICAgb25DaGFuZ2U9e3BoeWx1bVNlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgUGh5bHVtLi4uXCJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxMHB4JywgcGFkZGluZ0JvdHRvbTogJzEwcHgnLCB3aWR0aDogMjAwIH19XG4gICAgICAgIGFyaWEtbGFiZWw9J1NlbGVjdCBhIFBoeWx1bSdcbiAgICAgICAgbWVudVJvbGU9XCJtZW51XCJcbiAgICAgICAgbWVudUl0ZW1DaGVja01vZGU9XCJzaW5nbGVDaGVja1wiXG4gICAgICAgIGRpc2FibGVkPXshcGh5bHVtTGlzdC5sZW5ndGh9XG4gICAgICA+XG4gICAgICAgIHtwaHlsdW1MaXN0Py5tYXAoaXRlbSA9PiA8T3B0aW9uIHZhbHVlPXtpdGVtfT57aXRlbX08L09wdGlvbj4pfVxuICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkQ2xhc3N9XG4gICAgICAgIG9uQ2hhbmdlPXtjbGFzc1NlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgQ2xhc3MuLi5cIlxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzEwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcsIHdpZHRoOiAyMDAgfX1cbiAgICAgICAgbWVudVJvbGU9XCJtZW51XCJcbiAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZFBoeWx1bX1cbiAgICAgID5cbiAgICAgICAge2NsYXNzTGlzdC5tYXAoaXRlbSA9PiA8T3B0aW9uIHZhbHVlPXtpdGVtfT57aXRlbX08L09wdGlvbj4pfVxuICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3JkZXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtvcmRlclNlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGFuIE9yZGVyLi4uXCJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxMHB4JywgcGFkZGluZ0JvdHRvbTogJzEwcHgnLCB3aWR0aDogMjAwIH19XG4gICAgICAgIG1lbnVSb2xlPVwibWVudVwiXG4gICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRDbGFzc31cbiAgICAgID5cbiAgICAgICAge29yZGVyTGlzdC5tYXAoaXRlbSA9PiA8T3B0aW9uIHZhbHVlPXtpdGVtfT57aXRlbX08L09wdGlvbj4pfVxuICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkRmFtaWx5fVxuICAgICAgICBvbkNoYW5nZT17ZmFtaWx5U2VsZWN0SGFuZGxlcn1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBGYW1pbHkuLi5cIlxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzEwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcsIHdpZHRoOiAyMDAgfX1cbiAgICAgICAgbWVudVJvbGU9XCJtZW51XCJcbiAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZE9yZGVyfVxuICAgICAgPlxuICAgICAgICB7ZmFtaWx5TGlzdC5tYXAoaXRlbSA9PiA8T3B0aW9uIHZhbHVlPXtpdGVtfT57aXRlbX08L09wdGlvbj4pfVxuICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkR2VudXN9XG4gICAgICAgIG9uQ2hhbmdlPXtnZW51c1NlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgR2VudXMuLi5cIlxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzEwcHgnLCB3aWR0aDogMjAwIH19XG4gICAgICAgIG1lbnVSb2xlPVwibWVudVwiXG4gICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRGYW1pbHl9XG4gICAgICA+XG4gICAgICAgIHtnZW51c0xpc3QubWFwKGl0ZW0gPT4gPE9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9PcHRpb24+KX1cbiAgICAgIDwvU2VsZWN0PlxuXG4gICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fSBvbkNsaWNrPXtyZXNldEJ1dHRvbkhhbmRsZXJ9PlJlc2V0PC9CdXR0b24+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==