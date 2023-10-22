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
/* harmony export */   "__set_webpack_public_path__": () => (/* binding */ __set_webpack_public_path__),
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
                ['outFields', 'Phylum']
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
                ['outFields', 'Class']
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
                ['outFields', 'Order_']
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
                ['outFields', 'Family']
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
                ['outFields', 'Genus']
            ]);
            const data = yield getDataFromFeatureService(searchParams);
            const genera = data.features.map(feature => feature.attributes.Genus).map(name => name || 'NA');
            console.log('genus list: ', genera);
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
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedPhylum, onChange: phylumSelectHandler, placeholder: "Select a Phylum...", style: { padding: '10px', width: 200 }, ariaLabel: 'Select a Phylum', menuRole: "menu", menuItemCheckMode: "singleCheck", disabled: !phylumList.length }, phylumList === null || phylumList === void 0 ? void 0 : phylumList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedClass, onChange: classSelectHandler, placeholder: "Select a Class...", style: { padding: '10px', width: 200 }, menuRole: "menu", disabled: !selectedPhylum }, classList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedOrder, onChange: orderSelectHandler, placeholder: "Select an Order...", style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, menuRole: "menu", disabled: !selectedClass }, orderList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedFamily, onChange: familySelectHandler, placeholder: "Select a Family...", style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, menuRole: "menu", disabled: !selectedOrder }, familyList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedGenus, onChange: genusSelectHandler, placeholder: "Select a Genus...", style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, menuRole: "menu", disabled: !selectedFamily }, genusList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { style: { margin: '10px' }, onClick: resetButtonHandler }, "Reset")));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90YXhvbi1zZWxlY3Rvci9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQU1HO0FBQ2dDO0FBQ2tCO0FBQ3BCO0FBR2pDLFNBQVMsTUFBTSxDQUFFLEtBQStCOztJQUM3RCxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEMsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRywrQ0FBUSxDQUFXLEVBQUUsQ0FBQztJQUMxRCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLCtDQUFRLENBQVcsRUFBRSxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsK0NBQVEsQ0FBVyxFQUFFLENBQUM7SUFDeEQsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRywrQ0FBUSxDQUFXLEVBQUUsQ0FBQztJQUMxRCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLCtDQUFRLENBQVcsRUFBRSxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsR0FBRywrQ0FBUSxFQUFvQjtJQUN4RSxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsK0NBQVEsRUFBb0I7SUFDdEUsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLCtDQUFRLEVBQW9CO0lBQ3RFLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsR0FBRywrQ0FBUSxFQUFvQjtJQUN4RSxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsK0NBQVEsRUFBb0I7SUFDdEUsTUFBTSxpQkFBaUIsR0FBRyxxSEFBcUg7SUFDL0ksOEJBQThCO0lBQzlCLGlNQUFpTTtJQUVqTSx3RUFBd0U7SUFDeEUsZ0RBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixxSUFBcUk7UUFDckksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUN4QixvR0FBb0c7WUFDcEcsT0FBTTtTQUNQO1FBRUQsTUFBTSxhQUFhLEdBQUcsRUFBRTtRQUN4QixJQUFJLGNBQWMsRUFBRTtZQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQUU7UUFDMUQsSUFBSSxhQUFhLEVBQUU7WUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUFFO1FBQ3hELElBQUksY0FBYyxFQUFFO1lBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7U0FBRTtRQUMxRCxJQUFJLGFBQWEsRUFBRTtZQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQUU7UUFDeEQsSUFBSSxhQUFhLEVBQUU7WUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUFFO1FBRXhELE1BQU0sQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLFVBQWtDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDbEUsV0FBVyxFQUFFO0lBQ2YsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRWpGLGlDQUFpQztJQUNqQyxnREFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLGtDQUFrQztRQUNsQyxnQkFBZ0IsRUFBRTtJQUNwQixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4sU0FBZSx5QkFBeUIsQ0FBRSxvQkFBcUM7O1lBQzdFLGdCQUFnQjtZQUNoQixNQUFNLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQztZQUM5RCxpQ0FBaUM7WUFDakMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUM7WUFDM0MsWUFBWSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUM7WUFDaEQsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDO1lBQzdCLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLGlCQUFpQixFQUFFO2dCQUM5QyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsWUFBWTthQUNuQixDQUFDO1lBQ0YsNEJBQTRCO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO2dCQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLGlCQUFpQixDQUFDO2dCQUNwRSxPQUFNO2FBQ1A7WUFDRCxPQUFPLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRTtRQUM5QixDQUFDO0tBQUE7SUFFRCxTQUFlLGdCQUFnQjs7WUFDN0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDNUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxlQUFlLENBQUM7Z0JBQ3ZDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztnQkFDaEIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDO2FBQ3hCLENBQUM7WUFDRixNQUFNLElBQUksR0FBRyxNQUFNLHlCQUF5QixDQUFDLFlBQVksQ0FBQztZQUMxRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztZQUNqRyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3RCLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkNBQTZDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksVUFBVSxDQUFDO1FBQ3hILENBQUM7S0FBQTtJQUVELFNBQWUsZUFBZSxDQUFFLFVBQWtCOztZQUNoRCxNQUFNLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQztnQkFDdkMsQ0FBQyxPQUFPLEVBQUUsV0FBVyxVQUFVLEdBQUcsQ0FBQztnQkFDbkMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO2FBQ3ZCLENBQUM7WUFDRixNQUFNLElBQUksR0FBRyxNQUFNLHlCQUF5QixDQUFDLFlBQVksQ0FBQztZQUMxRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztZQUNoRyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQUVELDJFQUEyRTtJQUMzRSxTQUFlLGVBQWUsQ0FBRSxTQUFpQjs7WUFDL0MsTUFBTSxZQUFZLEdBQUcsSUFBSSxlQUFlLENBQUM7Z0JBQ3ZDLENBQUMsT0FBTyxFQUFFLFVBQVUsU0FBUyxHQUFHLENBQUM7Z0JBQ2pDLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQzthQUN4QixDQUFDO1lBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSx5QkFBeUIsQ0FBQyxZQUFZLENBQUM7WUFDMUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7WUFDaEcsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUN0QixDQUFDO0tBQUE7SUFFRCxTQUFlLGdCQUFnQixDQUFFLFNBQWlCOztZQUNoRCxNQUFNLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQztnQkFDdkMsQ0FBQyxPQUFPLEVBQUUsV0FBVyxTQUFTLEdBQUcsQ0FBQztnQkFDbEMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDO2FBQ3hCLENBQUM7WUFDRixNQUFNLElBQUksR0FBRyxNQUFNLHlCQUF5QixDQUFDLFlBQVksQ0FBQztZQUMxRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztZQUNsRyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7S0FBQTtJQUVELFNBQWUsZUFBZSxDQUFFLFVBQWtCOztZQUNoRCxNQUFNLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQztnQkFDdkMsQ0FBQyxPQUFPLEVBQUUsV0FBVyxVQUFVLEdBQUcsQ0FBQztnQkFDbkMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO2FBQ3ZCLENBQUM7WUFDRixNQUFNLElBQUksR0FBRyxNQUFNLHlCQUF5QixDQUFDLFlBQVksQ0FBQztZQUMxRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztZQUMvRixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7WUFDbkMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUN0QixDQUFDO0tBQUE7SUFFRDs7O09BR0c7SUFDSCxTQUFTLFFBQVE7UUFDZixNQUFNLE9BQU8sR0FBRyxFQUFFO1FBRWxCLDZEQUE2RDtRQUM3RCxJQUFJLGNBQWMsRUFBRTtZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxjQUFjLEdBQUcsQ0FBQztTQUFFO1FBQ3BFLElBQUksYUFBYSxFQUFFO1lBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLGFBQWEsR0FBRyxDQUFDO1NBQUU7UUFDakUsSUFBSSxjQUFjLEVBQUU7WUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsY0FBYyxHQUFHLENBQUM7U0FBRTtRQUNwRSwrQkFBK0I7UUFDL0IsSUFBSSxhQUFhLEVBQUU7WUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsYUFBYSxHQUFHLENBQUM7U0FBRTtRQUNsRSxJQUFJLGFBQWEsRUFBRTtZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxhQUFhLEdBQUcsQ0FBQztTQUFFO1FBRWpFLElBQUksT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sRUFBRTtZQUNuQixPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQzFDO2FBQU07WUFDTCxPQUFPLElBQUk7U0FDWjtJQUNILENBQUM7SUFFRCxTQUFTLGtCQUFrQixDQUFFLEdBQXdDO1FBQ25FLElBQUksY0FBYyxFQUFFO1lBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1NBQUU7UUFDL0MsSUFBSSxhQUFhLEVBQUU7WUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7U0FBRTtRQUM3QyxJQUFJLGFBQWEsRUFBRTtZQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztTQUFFO1FBQzdDLElBQUksY0FBYyxFQUFFO1lBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1NBQUU7UUFDL0MsSUFBSSxhQUFhLEVBQUU7WUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7U0FBRTtJQUMvQyxDQUFDO0lBRUQsZ0VBQWdFO0lBQ2hFLFNBQVMsbUJBQW1CLENBQUUsR0FBeUM7UUFDckUsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDbkMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRWpDLHlCQUF5QjtRQUN6QixnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDM0IsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQzNCLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztRQUM1QixnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDM0IsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQUNoQixhQUFhLENBQUMsRUFBRSxDQUFDO1FBQ2pCLFlBQVksQ0FBQyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVMsa0JBQWtCLENBQUUsR0FBeUM7UUFDcEUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDbEMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRWpDLHlCQUF5QjtRQUN6QixnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDM0IsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1FBQzVCLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUMzQixhQUFhLENBQUMsRUFBRSxDQUFDO1FBQ2pCLFlBQVksQ0FBQyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVMsa0JBQWtCLENBQUUsR0FBeUM7UUFDcEUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDbEMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFbEMseUJBQXlCO1FBQ3pCLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztRQUM1QixnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7UUFDM0IsWUFBWSxDQUFDLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsU0FBUyxtQkFBbUIsQ0FBRSxHQUF5QztRQUNyRSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNuQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFakMseUJBQXlCO1FBQ3pCLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRUQsU0FBUyxrQkFBa0IsQ0FBRSxHQUF5QztRQUNwRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBRUQsWUFBWTtJQUNaLFNBQVMsbUJBQW1CLENBQUUsRUFBYztRQUMxQyxJQUFJLEVBQUUsRUFBRTtZQUNOLE1BQU0sVUFBVSxHQUFHLEVBQXlCO1lBQzVDLGFBQWEsQ0FBQyxVQUFVLENBQUM7U0FDMUI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsWUFBWTtJQUNaLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxHQUFnQixFQUFFLEVBQUU7UUFDbkQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzFCLE9BQU07U0FDUDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTLFdBQVc7UUFDbEIsaUVBQTBCLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxvRUFBNkIsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBRUQsT0FBTyxDQUNMLHdEQUFLLFNBQVMsRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7UUFDdkY7WUFDRSwrQ0FBQywwREFBbUIsSUFDaEIsYUFBYSxFQUFFLFdBQUssQ0FBQyxjQUFjLDBDQUFHLENBQUMsQ0FBQyxFQUN4QyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFDbEIsbUJBQW1CLEVBQUUsbUJBQW1CLEdBQ3hDO1lBQ0osK0NBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxXQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUMsRUFDMUMsa0JBQWtCLEVBQUUsdUJBQXVCLEdBQXlCLENBRWxFO1FBQ04sK0NBQUMsMkNBQU0sSUFDTCxLQUFLLEVBQUUsY0FBYyxFQUNyQixRQUFRLEVBQUUsbUJBQW1CLEVBQzdCLFdBQVcsRUFBQyxvQkFBb0IsRUFDaEMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQ3RDLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsUUFBUSxFQUFDLE1BQU0sRUFDZixpQkFBaUIsRUFBQyxhQUFhLEVBQy9CLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBRTNCLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBRSxJQUFJLElBQUcsSUFBSSxDQUFVLENBQUMsQ0FDdkQ7UUFFVCwrQ0FBQywyQ0FBTSxJQUNMLEtBQUssRUFBRSxhQUFhLEVBQ3BCLFFBQVEsRUFBRSxrQkFBa0IsRUFDNUIsV0FBVyxFQUFDLG1CQUFtQixFQUMvQixLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFDdEMsUUFBUSxFQUFDLE1BQU0sRUFDZixRQUFRLEVBQUUsQ0FBQyxjQUFjLElBRXhCLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBRSxJQUFJLElBQUcsSUFBSSxDQUFVLENBQUMsQ0FDckQ7UUFFVCwrQ0FBQywyQ0FBTSxJQUNMLEtBQUssRUFBRSxhQUFhLEVBQ3BCLFFBQVEsRUFBRSxrQkFBa0IsRUFDNUIsV0FBVyxFQUFDLG9CQUFvQixFQUNoQyxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUNqRSxRQUFRLEVBQUMsTUFBTSxFQUNmLFFBQVEsRUFBRSxDQUFDLGFBQWEsSUFFdkIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFFLElBQUksSUFBRyxJQUFJLENBQVUsQ0FBQyxDQUNyRDtRQUVULCtDQUFDLDJDQUFNLElBQ0wsS0FBSyxFQUFFLGNBQWMsRUFDckIsUUFBUSxFQUFFLG1CQUFtQixFQUM3QixXQUFXLEVBQUMsb0JBQW9CLEVBQ2hDLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQ2pFLFFBQVEsRUFBQyxNQUFNLEVBQ2YsUUFBUSxFQUFFLENBQUMsYUFBYSxJQUV2QixVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsK0NBQUMsMkNBQU0sSUFBQyxLQUFLLEVBQUUsSUFBSSxJQUFHLElBQUksQ0FBVSxDQUFDLENBQ3REO1FBRVQsK0NBQUMsMkNBQU0sSUFDTCxLQUFLLEVBQUUsYUFBYSxFQUNwQixRQUFRLEVBQUUsa0JBQWtCLEVBQzVCLFdBQVcsRUFBQyxtQkFBbUIsRUFDL0IsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFDakUsUUFBUSxFQUFDLE1BQU0sRUFDZixRQUFRLEVBQUUsQ0FBQyxjQUFjLElBRXhCLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQywrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBRSxJQUFJLElBQUcsSUFBSSxDQUFVLENBQUMsQ0FDckQ7UUFFVCwrQ0FBQywyQ0FBTSxJQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLFlBQWdCLENBQzFFLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdGF4b24tc2VsZWN0b3Ivc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsXG4gIGpzeCwgRGF0YVNvdXJjZUNvbXBvbmVudCxcbiAgdHlwZSBTcWxRdWVyeVBhcmFtcyxcbiAgdHlwZSBRdWVyaWFibGVEYXRhU291cmNlLCB0eXBlIERhdGFTb3VyY2UsIE1lc3NhZ2VNYW5hZ2VyLCBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZVxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdHlwZSBKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB7IFNlbGVjdCwgT3B0aW9uLCBCdXR0b24gfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnN0IFtkYXRhU291cmNlLCBzZXREYXRhU291cmNlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtwaHlsdW1MaXN0LCBzZXRQaHlsdW1MaXN0XSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgY29uc3QgW2NsYXNzTGlzdCwgc2V0Q2xhc3NMaXN0XSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgY29uc3QgW29yZGVyTGlzdCwgc2V0T3JkZXJMaXN0XSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgY29uc3QgW2ZhbWlseUxpc3QsIHNldEZhbWlseUxpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbZ2VudXNMaXN0LCBzZXRHZW51c0xpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbc2VsZWN0ZWRQaHlsdW0sIHNldFNlbGVjdGVkUGh5bHVtXSA9IHVzZVN0YXRlPHN0cmluZ3x1bmRlZmluZWQ+KClcbiAgY29uc3QgW3NlbGVjdGVkQ2xhc3MsIHNldFNlbGVjdGVkQ2xhc3NdID0gdXNlU3RhdGU8c3RyaW5nfHVuZGVmaW5lZD4oKVxuICBjb25zdCBbc2VsZWN0ZWRPcmRlciwgc2V0U2VsZWN0ZWRPcmRlcl0gPSB1c2VTdGF0ZTxzdHJpbmd8dW5kZWZpbmVkPigpXG4gIGNvbnN0IFtzZWxlY3RlZEZhbWlseSwgc2V0U2VsZWN0ZWRGYW1pbHldID0gdXNlU3RhdGU8c3RyaW5nfHVuZGVmaW5lZD4oKVxuICBjb25zdCBbc2VsZWN0ZWRHZW51cywgc2V0U2VsZWN0ZWRHZW51c10gPSB1c2VTdGF0ZTxzdHJpbmd8dW5kZWZpbmVkPigpXG4gIGNvbnN0IGZlYXR1cmVTZXJ2aWNlVXJsID0gJ2h0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vQzhFTWdyc0ZjUkZMNkxyTC9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9EU0NSVFBfTmF0REJfRmVhdHVyZUxheWVyL0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeT8nXG4gIC8vVE9ETyByZWFkIGZyb20gY29uZmlndXJhdGlvblxuICAvLyBjb25zdCBzZXJ2aWNlVXJsID0gKHByb3BzLmNvbmZpZy5zZXJ2aWNlVXJsKSA/IHByb3BzLmNvbmZpZy5zZXJ2aWNlVXJsIDogJ2h0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vQzhFTWdyc0ZjUkZMNkxyTC9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9EU0NSVFBfTmF0REJfRmVhdHVyZUxheWVyL0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeT8nXG5cbiAgLy8gaGFuZGxlIGNoYW5nZXMgdG8gdGF4b24gc2VsZWN0aW9ucy4gdXBkYXRlIG1hcCBhbmQgcHVibGlzaCBuZXcgdmFsdWVzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3BoeWx1bTogJyArIHNlbGVjdGVkUGh5bHVtICsgJzsgY2xhc3M6ICcgKyBzZWxlY3RlZENsYXNzICsgJzsgb3JkZXI6ICcgKyBzZWxlY3RlZE9yZGVyICsgJzsgZ2VudXM6ICcgKyBzZWxlY3RlZEdlbnVzKVxuICAgIGlmICghZGF0YVNvdXJjZSB8fCAhdmlldykge1xuICAgICAgLy8gY29uc29sZS53YXJuKCd0YXhvbi1zZWxlY3RvcjogRGF0YVNvdXJjZSBhbmQvb3IgTWFwVmlldyBub3QgeWV0IHNldC4gUXVlcnlQYXJhbXMgY2Fubm90IHVwZGF0ZWQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXhvbiA9IFtdXG4gICAgaWYgKHNlbGVjdGVkUGh5bHVtKSB7IHNlbGVjdGVkVGF4b24ucHVzaChzZWxlY3RlZFBoeWx1bSkgfVxuICAgIGlmIChzZWxlY3RlZENsYXNzKSB7IHNlbGVjdGVkVGF4b24ucHVzaChzZWxlY3RlZENsYXNzKSB9XG4gICAgaWYgKHNlbGVjdGVkRmFtaWx5KSB7IHNlbGVjdGVkVGF4b24ucHVzaChzZWxlY3RlZEZhbWlseSkgfVxuICAgIGlmIChzZWxlY3RlZE9yZGVyKSB7IHNlbGVjdGVkVGF4b24ucHVzaChzZWxlY3RlZE9yZGVyKSB9XG4gICAgaWYgKHNlbGVjdGVkR2VudXMpIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkR2VudXMpIH1cblxuICAgIGNvbnN0IHEgPSBnZXRRdWVyeSgpO1xuICAgIChkYXRhU291cmNlIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2UpLnVwZGF0ZVF1ZXJ5UGFyYW1zKHEsIHByb3BzLmlkKVxuICAgIHNlbmRNZXNzYWdlKClcbiAgfSwgW3NlbGVjdGVkUGh5bHVtLCBzZWxlY3RlZENsYXNzLCBzZWxlY3RlZEZhbWlseSwgc2VsZWN0ZWRPcmRlciwgc2VsZWN0ZWRHZW51c10pXG5cbiAgLy8gcnVuIG9uY2Ugd2hlbiB3aWRnZXQgaXMgbG9hZGVkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gbGlzdCBvZiBwaHlsdW1zIGRvZXMgbm90IGNoYW5nZVxuICAgIHVwZGF0ZVBoeWx1bUxpc3QoKVxuICB9LCBbXSlcblxuICBhc3luYyBmdW5jdGlvbiBnZXREYXRhRnJvbUZlYXR1cmVTZXJ2aWNlIChpbmNvbWluZ1NlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgLy9jbG9uZSBpbmNvbWluZ1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoaW5jb21pbmdTZWFyY2hQYXJhbXMpXG4gICAgLy8gcGFyYW1zIHNoYXJlZCBiZSBldmVyeSByZXF1ZXN0XG4gICAgc2VhcmNoUGFyYW1zLnNldCgncmV0dXJuR2VvbWV0cnknLCAnZmFsc2UnKVxuICAgIHNlYXJjaFBhcmFtcy5zZXQoJ3JldHVybkRpc3RpbmN0VmFsdWVzJywgJ3RydWUnKVxuICAgIHNlYXJjaFBhcmFtcy5zZXQoJ2YnLCAnanNvbicpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZWF0dXJlU2VydmljZVVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBzZWFyY2hQYXJhbXNcbiAgICB9KVxuICAgIC8vVE9ETyBiZXR0ZXIgZXJyb3IgaGFuZGxpbmdcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIGZldGNoaW5nIFRheG9uIGRhdGEgZnJvbTogJyArIGZlYXR1cmVTZXJ2aWNlVXJsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBoeWx1bUxpc3QgKCkge1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtcbiAgICAgIFsnd2hlcmUnLCAnMT0xJ10sXG4gICAgICBbJ291dEZpZWxkcycsICdQaHlsdW0nXVxuICAgIF0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGFGcm9tRmVhdHVyZVNlcnZpY2Uoc2VhcmNoUGFyYW1zKVxuICAgIGNvbnN0IHBoeWx1bXMgPSBkYXRhLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlcy5QaHlsdW0pLm1hcChuYW1lID0+IG5hbWUgfHwgJ05BJylcbiAgICBzZXRQaHlsdW1MaXN0KHBoeWx1bXMpXG4gICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKClcbiAgICBjb25zb2xlLmRlYnVnKGBQaHlsdW0gZGF0YSBsb2FkZWQgZnJvbSBGZWF0dXJlU2VydmljZSBpbiAkeyhlbmRUaW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMH0gc2Vjb25kc2ApXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVDbGFzc0xpc3QgKHBoeWx1bU5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICAgICAgWyd3aGVyZScsIGBQaHlsdW09JyR7cGh5bHVtTmFtZX0nYF0sXG4gICAgICBbJ291dEZpZWxkcycsICdDbGFzcyddXG4gICAgXSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YUZyb21GZWF0dXJlU2VydmljZShzZWFyY2hQYXJhbXMpXG4gICAgY29uc3QgY2xhc3NlcyA9IGRhdGEuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzLkNsYXNzKS5tYXAobmFtZSA9PiBuYW1lIHx8ICdOQScpXG4gICAgc2V0Q2xhc3NMaXN0KGNsYXNzZXMpXG4gIH1cblxuICAvLyAnT3JkZXInIGlzIHJlc2VydmVkIHdvcmQgaW4gU1FMIHNvIHJlbmFtZWQgdG8gJ09yZGVyXyBpbiBGZWF0dXJlU2VydmljZSdcbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlT3JkZXJMaXN0IChjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICAgICAgWyd3aGVyZScsIGBDbGFzcz0nJHtjbGFzc05hbWV9J2BdLFxuICAgICAgWydvdXRGaWVsZHMnLCAnT3JkZXJfJ11cbiAgICBdKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhRnJvbUZlYXR1cmVTZXJ2aWNlKHNlYXJjaFBhcmFtcylcbiAgICBjb25zdCBvcmRlcnMgPSBkYXRhLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlcy5PcmRlcl8pLm1hcChuYW1lID0+IG5hbWUgfHwgJ05BJylcbiAgICBzZXRPcmRlckxpc3Qob3JkZXJzKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRmFtaWx5TGlzdCAob3JkZXJOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtcbiAgICAgIFsnd2hlcmUnLCBgT3JkZXJfPScke29yZGVyTmFtZX0nYF0sXG4gICAgICBbJ291dEZpZWxkcycsICdGYW1pbHknXVxuICAgIF0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGFGcm9tRmVhdHVyZVNlcnZpY2Uoc2VhcmNoUGFyYW1zKVxuICAgIGNvbnN0IGZhbWlsaWVzID0gZGF0YS5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXMuRmFtaWx5KS5tYXAobmFtZSA9PiBuYW1lIHx8ICdOQScpXG4gICAgc2V0RmFtaWx5TGlzdChmYW1pbGllcylcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdlbnVzTGlzdCAoZmFtaWx5TmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gICAgICBbJ3doZXJlJywgYEZhbWlseT0nJHtmYW1pbHlOYW1lfSdgXSxcbiAgICAgIFsnb3V0RmllbGRzJywgJ0dlbnVzJ11cbiAgICBdKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhRnJvbUZlYXR1cmVTZXJ2aWNlKHNlYXJjaFBhcmFtcylcbiAgICBjb25zdCBnZW5lcmEgPSBkYXRhLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlcy5HZW51cykubWFwKG5hbWUgPT4gbmFtZSB8fCAnTkEnKVxuICAgIGNvbnNvbGUubG9nKCdnZW51cyBsaXN0OiAnLCBnZW5lcmEpXG4gICAgc2V0R2VudXNMaXN0KGdlbmVyYSlcbiAgfVxuXG4gIC8qKlxuICAgKiBjb25zdHJ1Y3QgU1FMIGNsYXVzZSBiYXNlZCBvbiB0YXhvbiBzZWxlY3Rpb25zXG4gICAqIE5vdGUgdGhhdCBvdGhlciBmaWx0ZXIgY3JpdGVyaWEgYXJlIG1hbmFnZWQgaW5kZXBlbmRlbnRseSBieSB0aGUgRmlsdGVyIHdpZGdldFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UXVlcnkgKCk6IFNxbFF1ZXJ5UGFyYW1zIHtcbiAgICBjb25zdCBjbGF1c2VzID0gW11cblxuICAgIC8vIEZlYXR1cmUgTGF5ZXIgdXNlZCBkaWZmZXJlbnQgY29sdW1uIG5hbWVzIHRoYW4gbWFwIHNlcnZpY2VcbiAgICBpZiAoc2VsZWN0ZWRQaHlsdW0pIHsgY2xhdXNlcy5wdXNoKGBQaHlsdW0gPSAnJHtzZWxlY3RlZFBoeWx1bX0nYCkgfVxuICAgIGlmIChzZWxlY3RlZENsYXNzKSB7IGNsYXVzZXMucHVzaChgQ2xhc3MgPSAnJHtzZWxlY3RlZENsYXNzfSdgKSB9XG4gICAgaWYgKHNlbGVjdGVkRmFtaWx5KSB7IGNsYXVzZXMucHVzaChgRmFtaWx5ID0gJyR7c2VsZWN0ZWRGYW1pbHl9J2ApIH1cbiAgICAvLyBPcmRlciBpcyBhIFNRTCByZXNlcnZlZCB3b3JkXG4gICAgaWYgKHNlbGVjdGVkT3JkZXIpIHsgY2xhdXNlcy5wdXNoKGBPcmRlcl8gPSAnJHtzZWxlY3RlZE9yZGVyfSdgKSB9XG4gICAgaWYgKHNlbGVjdGVkR2VudXMpIHsgY2xhdXNlcy5wdXNoKGBHZW51cyA9ICcke3NlbGVjdGVkR2VudXN9J2ApIH1cblxuICAgIGlmIChjbGF1c2VzPy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAoeyB3aGVyZTogY2xhdXNlcy5qb2luKCcgQU5EICcpIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRCdXR0b25IYW5kbGVyIChldnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XG4gICAgaWYgKHNlbGVjdGVkUGh5bHVtKSB7IHNldFNlbGVjdGVkUGh5bHVtKG51bGwpIH1cbiAgICBpZiAoc2VsZWN0ZWRDbGFzcykgeyBzZXRTZWxlY3RlZENsYXNzKG51bGwpIH1cbiAgICBpZiAoc2VsZWN0ZWRPcmRlcikgeyBzZXRTZWxlY3RlZE9yZGVyKG51bGwpIH1cbiAgICBpZiAoc2VsZWN0ZWRGYW1pbHkpIHsgc2V0U2VsZWN0ZWRGYW1pbHkobnVsbCkgfVxuICAgIGlmIChzZWxlY3RlZEdlbnVzKSB7IHNldFNlbGVjdGVkR2VudXMobnVsbCkgfVxuICB9XG5cbiAgLy8gY2hhbmdpbmcgcGh5bHVtIHJlc2V0cyBhbGwgb3RoZXIgU2VsZWN0IGVsZW1lbnRzIGluIGhpZXJhcmNoeVxuICBmdW5jdGlvbiBwaHlsdW1TZWxlY3RIYW5kbGVyIChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pikge1xuICAgIHNldFNlbGVjdGVkUGh5bHVtKGV2dC50YXJnZXQudmFsdWUpXG4gICAgdXBkYXRlQ2xhc3NMaXN0KGV2dC50YXJnZXQudmFsdWUpXG5cbiAgICAvLyByZXNldCBkZXBlbmRlbnQgdmFsdWVzXG4gICAgc2V0U2VsZWN0ZWRDbGFzcyh1bmRlZmluZWQpXG4gICAgc2V0U2VsZWN0ZWRPcmRlcih1bmRlZmluZWQpXG4gICAgc2V0U2VsZWN0ZWRGYW1pbHkodW5kZWZpbmVkKVxuICAgIHNldFNlbGVjdGVkR2VudXModW5kZWZpbmVkKVxuICAgIHNldE9yZGVyTGlzdChbXSlcbiAgICBzZXRGYW1pbHlMaXN0KFtdKVxuICAgIHNldEdlbnVzTGlzdChbXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsYXNzU2VsZWN0SGFuZGxlciAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcbiAgICBzZXRTZWxlY3RlZENsYXNzKGV2dC50YXJnZXQudmFsdWUpXG4gICAgdXBkYXRlT3JkZXJMaXN0KGV2dC50YXJnZXQudmFsdWUpXG5cbiAgICAvLyByZXNldCBkZXBlbmRlbnQgdmFsdWVzXG4gICAgc2V0U2VsZWN0ZWRPcmRlcih1bmRlZmluZWQpXG4gICAgc2V0U2VsZWN0ZWRGYW1pbHkodW5kZWZpbmVkKVxuICAgIHNldFNlbGVjdGVkR2VudXModW5kZWZpbmVkKVxuICAgIHNldEZhbWlseUxpc3QoW10pXG4gICAgc2V0R2VudXNMaXN0KFtdKVxuICB9XG5cbiAgZnVuY3Rpb24gb3JkZXJTZWxlY3RIYW5kbGVyIChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pikge1xuICAgIHNldFNlbGVjdGVkT3JkZXIoZXZ0LnRhcmdldC52YWx1ZSlcbiAgICB1cGRhdGVGYW1pbHlMaXN0KGV2dC50YXJnZXQudmFsdWUpXG5cbiAgICAvLyByZXNldCBkZXBlbmRlbnQgdmFsdWVzXG4gICAgc2V0U2VsZWN0ZWRGYW1pbHkodW5kZWZpbmVkKVxuICAgIHNldFNlbGVjdGVkR2VudXModW5kZWZpbmVkKVxuICAgIHNldEdlbnVzTGlzdChbXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGZhbWlseVNlbGVjdEhhbmRsZXIgKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XG4gICAgc2V0U2VsZWN0ZWRGYW1pbHkoZXZ0LnRhcmdldC52YWx1ZSlcbiAgICB1cGRhdGVHZW51c0xpc3QoZXZ0LnRhcmdldC52YWx1ZSlcblxuICAgIC8vIHJlc2V0IGRlcGVuZGVudCB2YWx1ZXNcbiAgICBzZXRTZWxlY3RlZEdlbnVzKHVuZGVmaW5lZClcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbnVzU2VsZWN0SGFuZGxlciAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcbiAgICBzZXRTZWxlY3RlZEdlbnVzKGV2dC50YXJnZXQudmFsdWUpXG4gIH1cblxuICAvLyBydW5zIG9uY2VcbiAgZnVuY3Rpb24gb25EYXRhU291cmNlQ3JlYXRlZCAoZHM6IERhdGFTb3VyY2UpIHtcbiAgICBpZiAoZHMpIHtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkcyBhcyBRdWVyaWFibGVEYXRhU291cmNlXG4gICAgICBzZXREYXRhU291cmNlKGRhdGFTb3VyY2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBjcmVhdGUgRGF0YVNvdXJjZScpXG4gICAgfVxuICB9XG5cbiAgLy8gcnVucyBvbmNlXG4gIGNvbnN0IGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICBpZiAoIWptdikge1xuICAgICAgY29uc29sZS53YXJuKCdubyBNYXBWaWV3JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRWaWV3KGptdi52aWV3KVxuICB9XG5cbiAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UgKCkge1xuICAgIE1lc3NhZ2VNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVibGlzaE1lc3NhZ2UobmV3IERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlKHByb3BzLmlkLCBkYXRhU291cmNlLmlkKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZT17cHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXX1cbiAgICAgICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cbiAgICAgICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e29uRGF0YVNvdXJjZUNyZWF0ZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17YWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9PjwvSmltdU1hcFZpZXdDb21wb25lbnQ+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNlbGVjdFxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRQaHlsdW19XG4gICAgICAgIG9uQ2hhbmdlPXtwaHlsdW1TZWxlY3RIYW5kbGVyfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIFBoeWx1bS4uLlwiXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4Jywgd2lkdGg6IDIwMCB9fVxuICAgICAgICBhcmlhTGFiZWw9J1NlbGVjdCBhIFBoeWx1bSdcbiAgICAgICAgbWVudVJvbGU9XCJtZW51XCJcbiAgICAgICAgbWVudUl0ZW1DaGVja01vZGU9XCJzaW5nbGVDaGVja1wiXG4gICAgICAgIGRpc2FibGVkPXshcGh5bHVtTGlzdC5sZW5ndGh9XG4gICAgICA+XG4gICAgICAgIHtwaHlsdW1MaXN0Py5tYXAoaXRlbSA9PiA8T3B0aW9uIHZhbHVlPXtpdGVtfT57aXRlbX08L09wdGlvbj4pfVxuICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkQ2xhc3N9XG4gICAgICAgIG9uQ2hhbmdlPXtjbGFzc1NlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgQ2xhc3MuLi5cIlxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIHdpZHRoOiAyMDAgfX1cbiAgICAgICAgbWVudVJvbGU9XCJtZW51XCJcbiAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZFBoeWx1bX1cbiAgICAgID5cbiAgICAgICAge2NsYXNzTGlzdC5tYXAoaXRlbSA9PiA8T3B0aW9uIHZhbHVlPXtpdGVtfT57aXRlbX08L09wdGlvbj4pfVxuICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3JkZXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtvcmRlclNlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGFuIE9yZGVyLi4uXCJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxMHB4JywgcGFkZGluZ0JvdHRvbTogJzEwcHgnLCB3aWR0aDogMjAwIH19XG4gICAgICAgIG1lbnVSb2xlPVwibWVudVwiXG4gICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRDbGFzc31cbiAgICAgID5cbiAgICAgICAge29yZGVyTGlzdC5tYXAoaXRlbSA9PiA8T3B0aW9uIHZhbHVlPXtpdGVtfT57aXRlbX08L09wdGlvbj4pfVxuICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkRmFtaWx5fVxuICAgICAgICBvbkNoYW5nZT17ZmFtaWx5U2VsZWN0SGFuZGxlcn1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBGYW1pbHkuLi5cIlxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzEwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcsIHdpZHRoOiAyMDAgfX1cbiAgICAgICAgbWVudVJvbGU9XCJtZW51XCJcbiAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZE9yZGVyfVxuICAgICAgPlxuICAgICAgICB7ZmFtaWx5TGlzdC5tYXAoaXRlbSA9PiA8T3B0aW9uIHZhbHVlPXtpdGVtfT57aXRlbX08L09wdGlvbj4pfVxuICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkR2VudXN9XG4gICAgICAgIG9uQ2hhbmdlPXtnZW51c1NlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgR2VudXMuLi5cIlxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzEwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcsIHdpZHRoOiAyMDAgfX1cbiAgICAgICAgbWVudVJvbGU9XCJtZW51XCJcbiAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZEZhbWlseX1cbiAgICAgID5cbiAgICAgICAge2dlbnVzTGlzdC5tYXAoaXRlbSA9PiA8T3B0aW9uIHZhbHVlPXtpdGVtfT57aXRlbX08L09wdGlvbj4pfVxuICAgICAgPC9TZWxlY3Q+XG5cbiAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiAnMTBweCcgfX0gb25DbGljaz17cmVzZXRCdXR0b25IYW5kbGVyfT5SZXNldDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9