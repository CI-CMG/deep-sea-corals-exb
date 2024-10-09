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
    const featureServiceUrl = 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/DSCRTP_NatDB_FeatureLayer/FeatureServer/0/query?';
    //TODO read from configuration
    // const serviceUrl = (props.config.serviceUrl) ? props.config.serviceUrl : 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/DSCRTP_NatDB_FeatureLayer/FeatureServer/0/query?'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90YXhvbi1zZWxlY3Rvci9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQU1HO0FBQ2dDO0FBQ2tCO0FBQ3BCO0FBR2pDLFNBQVMsTUFBTSxDQUFFLEtBQStCOztJQUM3RCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEMsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRywrQ0FBUSxDQUFXLEVBQUUsQ0FBQztJQUMxRCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLCtDQUFRLENBQVcsRUFBRSxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsK0NBQVEsQ0FB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VSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFFLElBQUksSUFBRyxJQUFJLENBQVUsQ0FBQyxDQUN0RDtRQUVULCtDQUFDLDJDQUFNLElBQ0wsS0FBSyxFQUFFLGFBQWEsRUFDcEIsUUFBUSxFQUFFLGtCQUFrQixFQUM1QixXQUFXLEVBQUMsbUJBQW1CLEVBQy9CLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUMxQyxRQUFRLEVBQUMsTUFBTSxFQUNmLFFBQVEsRUFBRSxDQUFDLGNBQWMsSUFFeEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFFLElBQUksSUFBRyxJQUFJLENBQVUsQ0FBQyxDQUNyRDtRQUVULCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsWUFBZ0IsQ0FFOUUsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy90YXhvbi1zZWxlY3Rvci9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcbiAganN4LCBEYXRhU291cmNlQ29tcG9uZW50LFxuICB0eXBlIFNxbFF1ZXJ5UGFyYW1zLFxuICB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2UsIHR5cGUgRGF0YVNvdXJjZSwgTWVzc2FnZU1hbmFnZXIsIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0eXBlIEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHsgU2VsZWN0LCBPcHRpb24sIEJ1dHRvbiB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3QgW2RhdGFTb3VyY2UsIHNldERhdGFTb3VyY2VdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3BoeWx1bUxpc3QsIHNldFBoeWx1bUxpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbY2xhc3NMaXN0LCBzZXRDbGFzc0xpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbb3JkZXJMaXN0LCBzZXRPcmRlckxpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbZmFtaWx5TGlzdCwgc2V0RmFtaWx5TGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtnZW51c0xpc3QsIHNldEdlbnVzTGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtzZWxlY3RlZFBoeWx1bSwgc2V0U2VsZWN0ZWRQaHlsdW1dID0gdXNlU3RhdGU8c3RyaW5nfHVuZGVmaW5lZD4oKVxuICBjb25zdCBbc2VsZWN0ZWRDbGFzcywgc2V0U2VsZWN0ZWRDbGFzc10gPSB1c2VTdGF0ZTxzdHJpbmd8dW5kZWZpbmVkPigpXG4gIGNvbnN0IFtzZWxlY3RlZE9yZGVyLCBzZXRTZWxlY3RlZE9yZGVyXSA9IHVzZVN0YXRlPHN0cmluZ3x1bmRlZmluZWQ+KClcbiAgY29uc3QgW3NlbGVjdGVkRmFtaWx5LCBzZXRTZWxlY3RlZEZhbWlseV0gPSB1c2VTdGF0ZTxzdHJpbmd8dW5kZWZpbmVkPigpXG4gIGNvbnN0IFtzZWxlY3RlZEdlbnVzLCBzZXRTZWxlY3RlZEdlbnVzXSA9IHVzZVN0YXRlPHN0cmluZ3x1bmRlZmluZWQ+KClcbiAgY29uc3QgZmVhdHVyZVNlcnZpY2VVcmwgPSAnaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS9DOEVNZ3JzRmNSRkw2THJML0FyY0dJUy9yZXN0L3NlcnZpY2VzL0RTQ1JUUF9OYXREQl9GZWF0dXJlTGF5ZXIvRmVhdHVyZVNlcnZlci8wL3F1ZXJ5PydcbiAgLy9UT0RPIHJlYWQgZnJvbSBjb25maWd1cmF0aW9uXG4gIC8vIGNvbnN0IHNlcnZpY2VVcmwgPSAocHJvcHMuY29uZmlnLnNlcnZpY2VVcmwpID8gcHJvcHMuY29uZmlnLnNlcnZpY2VVcmwgOiAnaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS9DOEVNZ3JzRmNSRkw2THJML0FyY0dJUy9yZXN0L3NlcnZpY2VzL0RTQ1JUUF9OYXREQl9GZWF0dXJlTGF5ZXIvRmVhdHVyZVNlcnZlci8wL3F1ZXJ5PydcblxuICAvLyBoYW5kbGUgY2hhbmdlcyB0byB0YXhvbiBzZWxlY3Rpb25zLiB1cGRhdGUgbWFwIGFuZCBwdWJsaXNoIG5ldyB2YWx1ZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygncGh5bHVtOiAnICsgc2VsZWN0ZWRQaHlsdW0gKyAnOyBjbGFzczogJyArIHNlbGVjdGVkQ2xhc3MgKyAnOyBvcmRlcjogJyArIHNlbGVjdGVkT3JkZXIgKyAnOyBnZW51czogJyArIHNlbGVjdGVkR2VudXMpXG4gICAgaWYgKCFkYXRhU291cmNlIHx8ICF2aWV3KSB7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ3RheG9uLXNlbGVjdG9yOiBEYXRhU291cmNlIGFuZC9vciBNYXBWaWV3IG5vdCB5ZXQgc2V0LiBRdWVyeVBhcmFtcyBjYW5ub3QgdXBkYXRlZCcpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZFRheG9uID0gW11cbiAgICBpZiAoc2VsZWN0ZWRQaHlsdW0pIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkUGh5bHVtKSB9XG4gICAgaWYgKHNlbGVjdGVkQ2xhc3MpIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkQ2xhc3MpIH1cbiAgICBpZiAoc2VsZWN0ZWRGYW1pbHkpIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkRmFtaWx5KSB9XG4gICAgaWYgKHNlbGVjdGVkT3JkZXIpIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkT3JkZXIpIH1cbiAgICBpZiAoc2VsZWN0ZWRHZW51cykgeyBzZWxlY3RlZFRheG9uLnB1c2goc2VsZWN0ZWRHZW51cykgfVxuXG4gICAgY29uc3QgcSA9IGdldFF1ZXJ5KCk7XG4gICAgKGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZSkudXBkYXRlUXVlcnlQYXJhbXMocSwgcHJvcHMuaWQpXG4gICAgc2VuZE1lc3NhZ2UoKVxuICB9LCBbc2VsZWN0ZWRQaHlsdW0sIHNlbGVjdGVkQ2xhc3MsIHNlbGVjdGVkRmFtaWx5LCBzZWxlY3RlZE9yZGVyLCBzZWxlY3RlZEdlbnVzXSlcblxuICAvLyBydW4gb25jZSB3aGVuIHdpZGdldCBpcyBsb2FkZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBsaXN0IG9mIHBoeWx1bXMgZG9lcyBub3QgY2hhbmdlXG4gICAgdXBkYXRlUGh5bHVtTGlzdCgpXG4gIH0sIFtdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldERhdGFGcm9tRmVhdHVyZVNlcnZpY2UgKGluY29taW5nU2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAvL2Nsb25lIGluY29taW5nXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhpbmNvbWluZ1NlYXJjaFBhcmFtcylcbiAgICAvLyBwYXJhbXMgc2hhcmVkIGJlIGV2ZXJ5IHJlcXVlc3RcbiAgICBzZWFyY2hQYXJhbXMuc2V0KCdyZXR1cm5HZW9tZXRyeScsICdmYWxzZScpXG4gICAgc2VhcmNoUGFyYW1zLnNldCgncmV0dXJuRGlzdGluY3RWYWx1ZXMnLCAndHJ1ZScpXG4gICAgc2VhcmNoUGFyYW1zLnNldCgnZicsICdqc29uJylcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZlYXR1cmVTZXJ2aWNlVXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IHNlYXJjaFBhcmFtc1xuICAgIH0pXG4gICAgLy9UT0RPIGJldHRlciBlcnJvciBoYW5kbGluZ1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnNvbGUud2FybignRXJyb3IgZmV0Y2hpbmcgVGF4b24gZGF0YSBmcm9tOiAnICsgZmVhdHVyZVNlcnZpY2VVcmwpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGh5bHVtTGlzdCAoKSB7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICAgICAgWyd3aGVyZScsICcxPTEnXSxcbiAgICAgIFsnb3V0RmllbGRzJywgJ1BoeWx1bSddLFxuICAgICAgWydvcmRlckJ5RmllbGRzJywgJ1BoeWx1bSddXG5cbiAgICBdKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhRnJvbUZlYXR1cmVTZXJ2aWNlKHNlYXJjaFBhcmFtcylcbiAgICBjb25zdCBwaHlsdW1zID0gZGF0YS5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXMuUGh5bHVtKS5tYXAobmFtZSA9PiBuYW1lIHx8ICdOQScpXG4gICAgc2V0UGh5bHVtTGlzdChwaHlsdW1zKVxuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc29sZS5kZWJ1ZyhgUGh5bHVtIGRhdGEgbG9hZGVkIGZyb20gRmVhdHVyZVNlcnZpY2UgaW4gJHsoZW5kVGltZS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpKSAvIDEwMDB9IHNlY29uZHNgKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2xhc3NMaXN0IChwaHlsdW1OYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtcbiAgICAgIFsnd2hlcmUnLCBgUGh5bHVtPScke3BoeWx1bU5hbWV9J2BdLFxuICAgICAgWydvdXRGaWVsZHMnLCAnQ2xhc3MnXSxcbiAgICAgIFsnb3JkZXJCeUZpZWxkcycsICdDbGFzcyddXG4gICAgXSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YUZyb21GZWF0dXJlU2VydmljZShzZWFyY2hQYXJhbXMpXG4gICAgY29uc3QgY2xhc3NlcyA9IGRhdGEuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzLkNsYXNzKS5tYXAobmFtZSA9PiBuYW1lIHx8ICdOQScpXG4gICAgc2V0Q2xhc3NMaXN0KGNsYXNzZXMpXG4gIH1cblxuICAvLyAnT3JkZXInIGlzIHJlc2VydmVkIHdvcmQgaW4gU1FMIHNvIHJlbmFtZWQgdG8gJ09yZGVyXyBpbiBGZWF0dXJlU2VydmljZSdcbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlT3JkZXJMaXN0IChjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICAgICAgWyd3aGVyZScsIGBDbGFzcz0nJHtjbGFzc05hbWV9J2BdLFxuICAgICAgWydvdXRGaWVsZHMnLCAnT3JkZXJfJ10sXG4gICAgICBbJ29yZGVyQnlGaWVsZHMnLCAnT3JkZXJfJ11cbiAgICBdKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhRnJvbUZlYXR1cmVTZXJ2aWNlKHNlYXJjaFBhcmFtcylcbiAgICBjb25zdCBvcmRlcnMgPSBkYXRhLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlcy5PcmRlcl8pLm1hcChuYW1lID0+IG5hbWUgfHwgJ05BJylcbiAgICBzZXRPcmRlckxpc3Qob3JkZXJzKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRmFtaWx5TGlzdCAob3JkZXJOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtcbiAgICAgIFsnd2hlcmUnLCBgT3JkZXJfPScke29yZGVyTmFtZX0nYF0sXG4gICAgICBbJ291dEZpZWxkcycsICdGYW1pbHknXSxcbiAgICAgIFsnb3JkZXJCeUZpZWxkcycsICdGYW1pbHknXVxuICAgIF0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGFGcm9tRmVhdHVyZVNlcnZpY2Uoc2VhcmNoUGFyYW1zKVxuICAgIGNvbnN0IGZhbWlsaWVzID0gZGF0YS5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXMuRmFtaWx5KS5tYXAobmFtZSA9PiBuYW1lIHx8ICdOQScpXG4gICAgc2V0RmFtaWx5TGlzdChmYW1pbGllcylcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdlbnVzTGlzdCAoZmFtaWx5TmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gICAgICBbJ3doZXJlJywgYEZhbWlseT0nJHtmYW1pbHlOYW1lfSdgXSxcbiAgICAgIFsnb3V0RmllbGRzJywgJ0dlbnVzJ10sXG4gICAgICBbJ29yZGVyQnlGaWVsZHMnLCAnR2VudXMnXVxuICAgIF0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGFGcm9tRmVhdHVyZVNlcnZpY2Uoc2VhcmNoUGFyYW1zKVxuICAgIGNvbnN0IGdlbmVyYSA9IGRhdGEuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzLkdlbnVzKS5tYXAobmFtZSA9PiBuYW1lIHx8ICdOQScpXG4gICAgc2V0R2VudXNMaXN0KGdlbmVyYSlcbiAgfVxuXG4gIC8qKlxuICAgKiBjb25zdHJ1Y3QgU1FMIGNsYXVzZSBiYXNlZCBvbiB0YXhvbiBzZWxlY3Rpb25zXG4gICAqIE5vdGUgdGhhdCBvdGhlciBmaWx0ZXIgY3JpdGVyaWEgYXJlIG1hbmFnZWQgaW5kZXBlbmRlbnRseSBieSB0aGUgRmlsdGVyIHdpZGdldFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UXVlcnkgKCk6IFNxbFF1ZXJ5UGFyYW1zIHtcbiAgICBjb25zdCBjbGF1c2VzID0gW11cblxuICAgIC8vIEZlYXR1cmUgTGF5ZXIgdXNlZCBkaWZmZXJlbnQgY29sdW1uIG5hbWVzIHRoYW4gbWFwIHNlcnZpY2VcbiAgICBpZiAoc2VsZWN0ZWRQaHlsdW0pIHsgY2xhdXNlcy5wdXNoKGBQaHlsdW0gPSAnJHtzZWxlY3RlZFBoeWx1bX0nYCkgfVxuICAgIGlmIChzZWxlY3RlZENsYXNzKSB7IGNsYXVzZXMucHVzaChgQ2xhc3MgPSAnJHtzZWxlY3RlZENsYXNzfSdgKSB9XG4gICAgaWYgKHNlbGVjdGVkRmFtaWx5KSB7IGNsYXVzZXMucHVzaChgRmFtaWx5ID0gJyR7c2VsZWN0ZWRGYW1pbHl9J2ApIH1cbiAgICAvLyBPcmRlciBpcyBhIFNRTCByZXNlcnZlZCB3b3JkXG4gICAgaWYgKHNlbGVjdGVkT3JkZXIpIHsgY2xhdXNlcy5wdXNoKGBPcmRlcl8gPSAnJHtzZWxlY3RlZE9yZGVyfSdgKSB9XG4gICAgaWYgKHNlbGVjdGVkR2VudXMpIHsgY2xhdXNlcy5wdXNoKGBHZW51cyA9ICcke3NlbGVjdGVkR2VudXN9J2ApIH1cblxuICAgIGlmIChjbGF1c2VzPy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAoeyB3aGVyZTogY2xhdXNlcy5qb2luKCcgQU5EICcpIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRCdXR0b25IYW5kbGVyIChldnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XG4gICAgaWYgKHNlbGVjdGVkUGh5bHVtKSB7IHNldFNlbGVjdGVkUGh5bHVtKG51bGwpIH1cbiAgICBpZiAoc2VsZWN0ZWRDbGFzcykgeyBzZXRTZWxlY3RlZENsYXNzKG51bGwpIH1cbiAgICBpZiAoc2VsZWN0ZWRPcmRlcikgeyBzZXRTZWxlY3RlZE9yZGVyKG51bGwpIH1cbiAgICBpZiAoc2VsZWN0ZWRGYW1pbHkpIHsgc2V0U2VsZWN0ZWRGYW1pbHkobnVsbCkgfVxuICAgIGlmIChzZWxlY3RlZEdlbnVzKSB7IHNldFNlbGVjdGVkR2VudXMobnVsbCkgfVxuICB9XG5cbiAgLy8gY2hhbmdpbmcgcGh5bHVtIHJlc2V0cyBhbGwgb3RoZXIgU2VsZWN0IGVsZW1lbnRzIGluIGhpZXJhcmNoeVxuICBmdW5jdGlvbiBwaHlsdW1TZWxlY3RIYW5kbGVyIChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pikge1xuICAgIHNldFNlbGVjdGVkUGh5bHVtKGV2dC50YXJnZXQudmFsdWUpXG4gICAgdXBkYXRlQ2xhc3NMaXN0KGV2dC50YXJnZXQudmFsdWUpXG5cbiAgICAvLyByZXNldCBkZXBlbmRlbnQgdmFsdWVzXG4gICAgc2V0U2VsZWN0ZWRDbGFzcyh1bmRlZmluZWQpXG4gICAgc2V0U2VsZWN0ZWRPcmRlcih1bmRlZmluZWQpXG4gICAgc2V0U2VsZWN0ZWRGYW1pbHkodW5kZWZpbmVkKVxuICAgIHNldFNlbGVjdGVkR2VudXModW5kZWZpbmVkKVxuICAgIHNldE9yZGVyTGlzdChbXSlcbiAgICBzZXRGYW1pbHlMaXN0KFtdKVxuICAgIHNldEdlbnVzTGlzdChbXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsYXNzU2VsZWN0SGFuZGxlciAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcbiAgICBzZXRTZWxlY3RlZENsYXNzKGV2dC50YXJnZXQudmFsdWUpXG4gICAgdXBkYXRlT3JkZXJMaXN0KGV2dC50YXJnZXQudmFsdWUpXG5cbiAgICAvLyByZXNldCBkZXBlbmRlbnQgdmFsdWVzXG4gICAgc2V0U2VsZWN0ZWRPcmRlcih1bmRlZmluZWQpXG4gICAgc2V0U2VsZWN0ZWRGYW1pbHkodW5kZWZpbmVkKVxuICAgIHNldFNlbGVjdGVkR2VudXModW5kZWZpbmVkKVxuICAgIHNldEZhbWlseUxpc3QoW10pXG4gICAgc2V0R2VudXNMaXN0KFtdKVxuICB9XG5cbiAgZnVuY3Rpb24gb3JkZXJTZWxlY3RIYW5kbGVyIChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pikge1xuICAgIHNldFNlbGVjdGVkT3JkZXIoZXZ0LnRhcmdldC52YWx1ZSlcbiAgICB1cGRhdGVGYW1pbHlMaXN0KGV2dC50YXJnZXQudmFsdWUpXG5cbiAgICAvLyByZXNldCBkZXBlbmRlbnQgdmFsdWVzXG4gICAgc2V0U2VsZWN0ZWRGYW1pbHkodW5kZWZpbmVkKVxuICAgIHNldFNlbGVjdGVkR2VudXModW5kZWZpbmVkKVxuICAgIHNldEdlbnVzTGlzdChbXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGZhbWlseVNlbGVjdEhhbmRsZXIgKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XG4gICAgc2V0U2VsZWN0ZWRGYW1pbHkoZXZ0LnRhcmdldC52YWx1ZSlcbiAgICB1cGRhdGVHZW51c0xpc3QoZXZ0LnRhcmdldC52YWx1ZSlcblxuICAgIC8vIHJlc2V0IGRlcGVuZGVudCB2YWx1ZXNcbiAgICBzZXRTZWxlY3RlZEdlbnVzKHVuZGVmaW5lZClcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbnVzU2VsZWN0SGFuZGxlciAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcbiAgICBzZXRTZWxlY3RlZEdlbnVzKGV2dC50YXJnZXQudmFsdWUpXG4gIH1cblxuICAvLyBydW5zIG9uY2VcbiAgZnVuY3Rpb24gb25EYXRhU291cmNlQ3JlYXRlZCAoZHM6IERhdGFTb3VyY2UpIHtcbiAgICBpZiAoZHMpIHtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkcyBhcyBRdWVyaWFibGVEYXRhU291cmNlXG4gICAgICBzZXREYXRhU291cmNlKGRhdGFTb3VyY2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBjcmVhdGUgRGF0YVNvdXJjZScpXG4gICAgfVxuICB9XG5cbiAgLy8gcnVucyBvbmNlXG4gIGNvbnN0IGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICBpZiAoIWptdikge1xuICAgICAgY29uc29sZS53YXJuKCdubyBNYXBWaWV3JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRWaWV3KGptdi52aWV3KVxuICB9XG5cbiAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UgKCkge1xuICAgIE1lc3NhZ2VNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVibGlzaE1lc3NhZ2UobmV3IERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlKHByb3BzLmlkLCBkYXRhU291cmNlLmlkKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZT17cHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXX1cbiAgICAgICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cbiAgICAgICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e29uRGF0YVNvdXJjZUNyZWF0ZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17YWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9PjwvSmltdU1hcFZpZXdDb21wb25lbnQ+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNlbGVjdFxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRQaHlsdW19XG4gICAgICAgIG9uQ2hhbmdlPXtwaHlsdW1TZWxlY3RIYW5kbGVyfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIFBoeWx1bS4uLlwiXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMTBweCcsIHBhZGRpbmdCb3R0b206ICcxMHB4Jywgd2lkdGg6IDIwMCB9fVxuICAgICAgICBhcmlhLWxhYmVsPSdTZWxlY3QgYSBQaHlsdW0nXG4gICAgICAgIG1lbnVSb2xlPVwibWVudVwiXG4gICAgICAgIG1lbnVJdGVtQ2hlY2tNb2RlPVwic2luZ2xlQ2hlY2tcIlxuICAgICAgICBkaXNhYmxlZD17IXBoeWx1bUxpc3QubGVuZ3RofVxuICAgICAgPlxuICAgICAgICB7cGh5bHVtTGlzdD8ubWFwKGl0ZW0gPT4gPE9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9PcHRpb24+KX1cbiAgICAgIDwvU2VsZWN0PlxuXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZENsYXNzfVxuICAgICAgICBvbkNoYW5nZT17Y2xhc3NTZWxlY3RIYW5kbGVyfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIENsYXNzLi4uXCJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxMHB4JywgcGFkZGluZ0JvdHRvbTogJzEwcHgnLCB3aWR0aDogMjAwIH19XG4gICAgICAgIG1lbnVSb2xlPVwibWVudVwiXG4gICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRQaHlsdW19XG4gICAgICA+XG4gICAgICAgIHtjbGFzc0xpc3QubWFwKGl0ZW0gPT4gPE9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9PcHRpb24+KX1cbiAgICAgIDwvU2VsZWN0PlxuXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZE9yZGVyfVxuICAgICAgICBvbkNoYW5nZT17b3JkZXJTZWxlY3RIYW5kbGVyfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhbiBPcmRlci4uLlwiXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMTBweCcsIHBhZGRpbmdCb3R0b206ICcxMHB4Jywgd2lkdGg6IDIwMCB9fVxuICAgICAgICBtZW51Um9sZT1cIm1lbnVcIlxuICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkQ2xhc3N9XG4gICAgICA+XG4gICAgICAgIHtvcmRlckxpc3QubWFwKGl0ZW0gPT4gPE9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9PcHRpb24+KX1cbiAgICAgIDwvU2VsZWN0PlxuXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZEZhbWlseX1cbiAgICAgICAgb25DaGFuZ2U9e2ZhbWlseVNlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgRmFtaWx5Li4uXCJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxMHB4JywgcGFkZGluZ0JvdHRvbTogJzEwcHgnLCB3aWR0aDogMjAwIH19XG4gICAgICAgIG1lbnVSb2xlPVwibWVudVwiXG4gICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRPcmRlcn1cbiAgICAgID5cbiAgICAgICAge2ZhbWlseUxpc3QubWFwKGl0ZW0gPT4gPE9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9PcHRpb24+KX1cbiAgICAgIDwvU2VsZWN0PlxuXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZEdlbnVzfVxuICAgICAgICBvbkNoYW5nZT17Z2VudXNTZWxlY3RIYW5kbGVyfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIEdlbnVzLi4uXCJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxMHB4Jywgd2lkdGg6IDIwMCB9fVxuICAgICAgICBtZW51Um9sZT1cIm1lbnVcIlxuICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkRmFtaWx5fVxuICAgICAgPlxuICAgICAgICB7Z2VudXNMaXN0Lm1hcChpdGVtID0+IDxPcHRpb24gdmFsdWU9e2l0ZW19PntpdGVtfTwvT3B0aW9uPil9XG4gICAgICA8L1NlbGVjdD5cblxuICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0gb25DbGljaz17cmVzZXRCdXR0b25IYW5kbGVyfT5SZXNldDwvQnV0dG9uPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=