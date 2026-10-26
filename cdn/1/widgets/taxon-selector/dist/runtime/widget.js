System.register(["jimu-core/emotion","jimu-core","jimu-core/react","jimu-arcgis","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_react__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-arcgis"
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ },

/***/ "react"
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/taxon-selector/src/runtime/widget.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
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
    console.log('rendering taxon-selector...');
    const [dataSource, setDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [phylumList, setPhylumList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [classList, setClassList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [orderList, setOrderList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [familyList, setFamilyList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [genusList, setGenusList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [selectedPhylum, setSelectedPhylum] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [selectedClass, setSelectedClass] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [selectedOrder, setSelectedOrder] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [selectedFamily, setSelectedFamily] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [selectedGenus, setSelectedGenus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const featureServiceUrl = 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/DSCRTP_NatDB/FeatureServer/0/query?';
    //TODO read from configuration
    // const serviceUrl = (props.config.serviceUrl) ? props.config.serviceUrl : 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/DSCRTP_NatDB/FeatureServer/0/query?'
    // console.log('rendering TaxonSelector widget', selectedPhylum, selectedClass, selectedOrder, selectedFamily, selectedGenus)
    // handle changes to taxon selections. update map and publish new values
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        console.log('taxon-selector: inside useEffect...');
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
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        // list of phylums does not change
        const startTime = new Date();
        const searchParams = new URLSearchParams([
            ['where', '1=1'],
            ['outFields', 'Phylum'],
            ['orderByFields', 'Phylum']
        ]);
        getDataFromFeatureService(searchParams)
            .then(data => {
            const phylums = data.features.map(feature => feature.attributes.Phylum);
            // represent null values w/ 'NA' in the pull-down list
            // const phylums = data.features.map(feature => feature.attributes.Phylum).map(name => name || 'NA')
            setPhylumList(phylums);
            const endTime = new Date();
            console.debug(`Phylum data loaded from FeatureService in ${(endTime.getTime() - startTime.getTime()) / 1000} seconds`);
        });
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
    function updateClassList(phylumName) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchParams = new URLSearchParams([
                ['where', `Phylum='${phylumName}' and Class is not null`],
                ['outFields', 'Class'],
                ['orderByFields', 'Class']
            ]);
            const data = yield getDataFromFeatureService(searchParams);
            const classes = data.features.map(feature => feature.attributes.Class);
            setClassList(classes);
        });
    }
    // 'Order' is reserved word in SQL so renamed to 'Order_ in FeatureService'
    function updateOrderList(className) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchParams = new URLSearchParams([
                ['where', `Class='${className}' and Order_ is not null`],
                ['outFields', 'Order_'],
                ['orderByFields', 'Order_']
            ]);
            const data = yield getDataFromFeatureService(searchParams);
            const orders = data.features.map(feature => feature.attributes.Order_);
            setOrderList(orders);
        });
    }
    function updateFamilyList(orderName) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchParams = new URLSearchParams([
                ['where', `Order_='${orderName}' and Family is not null`],
                ['outFields', 'Family'],
                ['orderByFields', 'Family']
            ]);
            const data = yield getDataFromFeatureService(searchParams);
            const families = data.features.map(feature => feature.attributes.Family);
            setFamilyList(families);
        });
    }
    function updateGenusList(familyName) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchParams = new URLSearchParams([
                ['where', `Family='${familyName}' and Genus is not null`],
                ['outFields', 'Genus'],
                ['orderByFields', 'Genus']
            ]);
            const data = yield getDataFromFeatureService(searchParams);
            const genera = data.features.map(feature => feature.attributes.Genus);
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
        console.log('reset button clicked', selectedPhylum, selectedClass, selectedOrder, selectedFamily, selectedGenus);
        setSelectedPhylum('');
        setSelectedClass('');
        setSelectedOrder('');
        setSelectedFamily('');
        setSelectedGenus('');
        setClassList([]);
        setOrderList([]);
        setFamilyList([]);
        setGenusList([]);
    }
    // changing phylum resets all other Select elements in hierarchy
    function phylumSelectHandler(evt) {
        const target = evt.target;
        setSelectedPhylum(target.value);
        // value will always be a string and not an array because selection-mode="single-persist"
        updateClassList(target.value);
        // reset dependent values
        setSelectedClass('');
        setSelectedOrder('');
        setSelectedFamily('');
        setSelectedGenus('');
        setOrderList([]);
        setFamilyList([]);
        setGenusList([]);
    }
    function classSelectHandler(evt) {
        setSelectedClass(evt.target.value);
        updateOrderList(evt.target.value);
        // reset dependent values
        setSelectedOrder('');
        setSelectedFamily('');
        setSelectedGenus('');
        setFamilyList([]);
        setGenusList([]);
    }
    function orderSelectHandler(evt) {
        const target = evt.target;
        setSelectedOrder(target.value);
        updateFamilyList(target.value);
        // reset dependent values
        setSelectedFamily('');
        setSelectedGenus('');
        setGenusList([]);
    }
    function familySelectHandler(evt) {
        const target = evt.target;
        setSelectedFamily(target.value);
        updateGenusList(target.value);
        // reset dependent values
        setSelectedGenus('');
    }
    function genusSelectHandler(evt) {
        const target = evt.target;
        setSelectedGenus(target.value);
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
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceFilterChangeMessage(props.id, dataSource.id));
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget", style: { width: '100%', height: '100%', overflow: 'hidden' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0], widgetId: props.id, onDataSourceCreated: onDataSourceCreated }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.JimuMapViewComponent, { useMapWidgetId: (_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b[0], onActiveViewChange: activeViewChangeHandler })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox", { label: "Phylum", placeholder: "Select a Phylum...", "selection-display": "fit", "selection-appearance": "highlight", "selection-mode": "single-persist", scale: 's', value: selectedPhylum, disabled: !phylumList.length, oncalciteComboboxChange: phylumSelectHandler, style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, children: phylumList === null || phylumList === void 0 ? void 0 : phylumList.map(item => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox-item", { value: item, heading: item })) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox", { label: "Class", placeholder: "Select a Class...", "selection-display": "fit", "selection-appearance": "highlight", "selection-mode": "single-persist", scale: 's', value: selectedClass, disabled: !classList.length, oncalciteComboboxChange: classSelectHandler, style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, children: classList === null || classList === void 0 ? void 0 : classList.map(item => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox-item", { value: item, heading: item })) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox", { label: "Order", placeholder: "Select an Order...", "selection-display": "fit", "selection-appearance": "highlight", "selection-mode": "single-persist", scale: 's', value: selectedOrder, disabled: !orderList.length, oncalciteComboboxChange: orderSelectHandler, style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, children: orderList === null || orderList === void 0 ? void 0 : orderList.map(item => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox-item", { value: item, heading: item })) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox", { label: "Family", placeholder: "Select a Family...", "selection-display": "fit", "selection-appearance": "highlight", "selection-mode": "single-persist", scale: 's', value: selectedFamily, disabled: !familyList.length, oncalciteComboboxChange: familySelectHandler, style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, children: familyList === null || familyList === void 0 ? void 0 : familyList.map(item => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox-item", { value: item, heading: item })) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox", { label: "Genus", placeholder: "Select a Genus...", "selection-display": "fit", "selection-appearance": "highlight", "selection-mode": "single-persist", scale: 's', value: selectedGenus, disabled: !genusList.length, oncalciteComboboxChange: genusSelectHandler, style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, children: genusList.map(item => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox-item", { value: item, heading: item })) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: 'sm', style: { marginLeft: '10px' }, onClick: resetButtonHandler, children: "Reset" })] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90YXhvbi1zZWxlY3Rvci9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELGVBQWU7QUFNRztBQUNnQztBQUNrQjtBQUNwQjtBQUdqQyxTQUFTLE1BQU0sQ0FBRSxLQUErQjs7SUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQztJQUMxQyxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxHQUFHLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEMsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRywrQ0FBUSxDQUFXLEVBQUUsQ0FBQztJQUMxRCxNQUFNLENB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QUFFLE9BQU8sRUFBRSxJQUFJLEdBQTBCLENBQUMsR0FDbEYsRUFFbkIsZ0VBQUMsMkNBQU0sSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLHNCQUFnQixJQUV4RixDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy90YXhvbi1zZWxlY3Rvci9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQge1xuICB0eXBlIEFsbFdpZGdldFByb3BzLFxuICBqc3gsIERhdGFTb3VyY2VDb21wb25lbnQsXG4gIHR5cGUgU3FsUXVlcnlQYXJhbXMsXG4gIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSwgdHlwZSBEYXRhU291cmNlLCBNZXNzYWdlTWFuYWdlciwgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2Vcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHR5cGUgSmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgeyBTZWxlY3QsIE9wdGlvbiwgQnV0dG9uIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICBjb25zb2xlLmxvZygncmVuZGVyaW5nIHRheG9uLXNlbGVjdG9yLi4uJylcbiAgY29uc3QgW2RhdGFTb3VyY2UsIHNldERhdGFTb3VyY2VdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3BoeWx1bUxpc3QsIHNldFBoeWx1bUxpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbY2xhc3NMaXN0LCBzZXRDbGFzc0xpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbb3JkZXJMaXN0LCBzZXRPcmRlckxpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbZmFtaWx5TGlzdCwgc2V0RmFtaWx5TGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtnZW51c0xpc3QsIHNldEdlbnVzTGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtzZWxlY3RlZFBoeWx1bSwgc2V0U2VsZWN0ZWRQaHlsdW1dID0gdXNlU3RhdGU8c3RyaW5nfHN0cmluZ1tdPigpXG4gIGNvbnN0IFtzZWxlY3RlZENsYXNzLCBzZXRTZWxlY3RlZENsYXNzXSA9IHVzZVN0YXRlPHN0cmluZ3xzdHJpbmdbXT4oKVxuICBjb25zdCBbc2VsZWN0ZWRPcmRlciwgc2V0U2VsZWN0ZWRPcmRlcl0gPSB1c2VTdGF0ZTxzdHJpbmd8c3RyaW5nW10+KClcbiAgY29uc3QgW3NlbGVjdGVkRmFtaWx5LCBzZXRTZWxlY3RlZEZhbWlseV0gPSB1c2VTdGF0ZTxzdHJpbmd8c3RyaW5nW10+KClcbiAgY29uc3QgW3NlbGVjdGVkR2VudXMsIHNldFNlbGVjdGVkR2VudXNdID0gdXNlU3RhdGU8c3RyaW5nfHN0cmluZ1tdPigpXG4gIGNvbnN0IGZlYXR1cmVTZXJ2aWNlVXJsID0gJ2h0dHBzOi8vc2VydmljZXMyLmFyY2dpcy5jb20vQzhFTWdyc0ZjUkZMNkxyTC9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9EU0NSVFBfTmF0REIvRmVhdHVyZVNlcnZlci8wL3F1ZXJ5PydcbiAgLy9UT0RPIHJlYWQgZnJvbSBjb25maWd1cmF0aW9uXG4gIC8vIGNvbnN0IHNlcnZpY2VVcmwgPSAocHJvcHMuY29uZmlnLnNlcnZpY2VVcmwpID8gcHJvcHMuY29uZmlnLnNlcnZpY2VVcmwgOiAnaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS9DOEVNZ3JzRmNSRkw2THJML0FyY0dJUy9yZXN0L3NlcnZpY2VzL0RTQ1JUUF9OYXREQi9GZWF0dXJlU2VydmVyLzAvcXVlcnk/J1xuICAvLyBjb25zb2xlLmxvZygncmVuZGVyaW5nIFRheG9uU2VsZWN0b3Igd2lkZ2V0Jywgc2VsZWN0ZWRQaHlsdW0sIHNlbGVjdGVkQ2xhc3MsIHNlbGVjdGVkT3JkZXIsIHNlbGVjdGVkRmFtaWx5LCBzZWxlY3RlZEdlbnVzKVxuICAvLyBoYW5kbGUgY2hhbmdlcyB0byB0YXhvbiBzZWxlY3Rpb25zLiB1cGRhdGUgbWFwIGFuZCBwdWJsaXNoIG5ldyB2YWx1ZXNcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd0YXhvbi1zZWxlY3RvcjogaW5zaWRlIHVzZUVmZmVjdC4uLicpXG4gICAgLy8gY29uc29sZS5sb2coJ3BoeWx1bTogJyArIHNlbGVjdGVkUGh5bHVtICsgJzsgY2xhc3M6ICcgKyBzZWxlY3RlZENsYXNzICsgJzsgb3JkZXI6ICcgKyBzZWxlY3RlZE9yZGVyICsgJzsgZ2VudXM6ICcgKyBzZWxlY3RlZEdlbnVzKVxuICAgIGlmICghZGF0YVNvdXJjZSB8fCAhdmlldykge1xuICAgICAgLy8gY29uc29sZS53YXJuKCd0YXhvbi1zZWxlY3RvcjogRGF0YVNvdXJjZSBhbmQvb3IgTWFwVmlldyBub3QgeWV0IHNldC4gUXVlcnlQYXJhbXMgY2Fubm90IHVwZGF0ZWQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXhvbiA9IFtdXG4gICAgaWYgKHNlbGVjdGVkUGh5bHVtKSB7IHNlbGVjdGVkVGF4b24ucHVzaChzZWxlY3RlZFBoeWx1bSkgfVxuICAgIGlmIChzZWxlY3RlZENsYXNzKSB7IHNlbGVjdGVkVGF4b24ucHVzaChzZWxlY3RlZENsYXNzKSB9XG4gICAgaWYgKHNlbGVjdGVkRmFtaWx5KSB7IHNlbGVjdGVkVGF4b24ucHVzaChzZWxlY3RlZEZhbWlseSkgfVxuICAgIGlmIChzZWxlY3RlZE9yZGVyKSB7IHNlbGVjdGVkVGF4b24ucHVzaChzZWxlY3RlZE9yZGVyKSB9XG4gICAgaWYgKHNlbGVjdGVkR2VudXMpIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkR2VudXMpIH1cblxuICAgIGNvbnN0IHEgPSBnZXRRdWVyeSgpO1xuICAgIChkYXRhU291cmNlIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2UpLnVwZGF0ZVF1ZXJ5UGFyYW1zKHEsIHByb3BzLmlkKVxuICAgIHNlbmRNZXNzYWdlKClcbiAgfSwgW3NlbGVjdGVkUGh5bHVtLCBzZWxlY3RlZENsYXNzLCBzZWxlY3RlZEZhbWlseSwgc2VsZWN0ZWRPcmRlciwgc2VsZWN0ZWRHZW51c10pXG5cblxuICAvLyBydW4gb25jZSB3aGVuIHdpZGdldCBpcyBsb2FkZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBsaXN0IG9mIHBoeWx1bXMgZG9lcyBub3QgY2hhbmdlXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICAgICAgWyd3aGVyZScsICcxPTEnXSxcbiAgICAgIFsnb3V0RmllbGRzJywgJ1BoeWx1bSddLFxuICAgICAgWydvcmRlckJ5RmllbGRzJywgJ1BoeWx1bSddXG4gICAgXSlcbiAgICBnZXREYXRhRnJvbUZlYXR1cmVTZXJ2aWNlKHNlYXJjaFBhcmFtcylcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGNvbnN0IHBoeWx1bXMgPSBkYXRhLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlcy5QaHlsdW0pXG4gICAgICAvLyByZXByZXNlbnQgbnVsbCB2YWx1ZXMgdy8gJ05BJyBpbiB0aGUgcHVsbC1kb3duIGxpc3RcbiAgICAgIC8vIGNvbnN0IHBoeWx1bXMgPSBkYXRhLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlcy5QaHlsdW0pLm1hcChuYW1lID0+IG5hbWUgfHwgJ05BJylcbiAgICAgIHNldFBoeWx1bUxpc3QocGh5bHVtcylcbiAgICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpXG4gICAgICBjb25zb2xlLmRlYnVnKGBQaHlsdW0gZGF0YSBsb2FkZWQgZnJvbSBGZWF0dXJlU2VydmljZSBpbiAkeyhlbmRUaW1lLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMH0gc2Vjb25kc2ApXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YUZyb21GZWF0dXJlU2VydmljZSAoaW5jb21pbmdTZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtcykge1xuICAgIC8vY2xvbmUgaW5jb21pbmdcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGluY29taW5nU2VhcmNoUGFyYW1zKVxuICAgIC8vIHBhcmFtcyBzaGFyZWQgYmUgZXZlcnkgcmVxdWVzdFxuICAgIHNlYXJjaFBhcmFtcy5zZXQoJ3JldHVybkdlb21ldHJ5JywgJ2ZhbHNlJylcbiAgICBzZWFyY2hQYXJhbXMuc2V0KCdyZXR1cm5EaXN0aW5jdFZhbHVlcycsICd0cnVlJylcbiAgICBzZWFyY2hQYXJhbXMuc2V0KCdmJywgJ2pzb24nKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmVhdHVyZVNlcnZpY2VVcmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogc2VhcmNoUGFyYW1zXG4gICAgfSlcbiAgICAvL1RPRE8gYmV0dGVyIGVycm9yIGhhbmRsaW5nXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgY29uc29sZS53YXJuKCdFcnJvciBmZXRjaGluZyBUYXhvbiBkYXRhIGZyb206ICcgKyBmZWF0dXJlU2VydmljZVVybClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVDbGFzc0xpc3QgKHBoeWx1bU5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICAgICAgWyd3aGVyZScsIGBQaHlsdW09JyR7cGh5bHVtTmFtZX0nIGFuZCBDbGFzcyBpcyBub3QgbnVsbGBdLFxuICAgICAgWydvdXRGaWVsZHMnLCAnQ2xhc3MnXSxcbiAgICAgIFsnb3JkZXJCeUZpZWxkcycsICdDbGFzcyddXG4gICAgXSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YUZyb21GZWF0dXJlU2VydmljZShzZWFyY2hQYXJhbXMpXG4gICAgY29uc3QgY2xhc3NlcyA9IGRhdGEuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzLkNsYXNzKVxuICAgIHNldENsYXNzTGlzdChjbGFzc2VzKVxuICB9XG5cbiAgLy8gJ09yZGVyJyBpcyByZXNlcnZlZCB3b3JkIGluIFNRTCBzbyByZW5hbWVkIHRvICdPcmRlcl8gaW4gRmVhdHVyZVNlcnZpY2UnXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU9yZGVyTGlzdCAoY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtcbiAgICAgIFsnd2hlcmUnLCBgQ2xhc3M9JyR7Y2xhc3NOYW1lfScgYW5kIE9yZGVyXyBpcyBub3QgbnVsbGBdLFxuICAgICAgWydvdXRGaWVsZHMnLCAnT3JkZXJfJ10sXG4gICAgICBbJ29yZGVyQnlGaWVsZHMnLCAnT3JkZXJfJ11cbiAgICBdKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhRnJvbUZlYXR1cmVTZXJ2aWNlKHNlYXJjaFBhcmFtcylcbiAgICBjb25zdCBvcmRlcnMgPSBkYXRhLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlcy5PcmRlcl8pXG4gICAgc2V0T3JkZXJMaXN0KG9yZGVycylcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUZhbWlseUxpc3QgKG9yZGVyTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gICAgICBbJ3doZXJlJywgYE9yZGVyXz0nJHtvcmRlck5hbWV9JyBhbmQgRmFtaWx5IGlzIG5vdCBudWxsYF0sXG4gICAgICBbJ291dEZpZWxkcycsICdGYW1pbHknXSxcbiAgICAgIFsnb3JkZXJCeUZpZWxkcycsICdGYW1pbHknXVxuICAgIF0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGFGcm9tRmVhdHVyZVNlcnZpY2Uoc2VhcmNoUGFyYW1zKVxuICAgIGNvbnN0IGZhbWlsaWVzID0gZGF0YS5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXMuRmFtaWx5KVxuICAgIHNldEZhbWlseUxpc3QoZmFtaWxpZXMpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVHZW51c0xpc3QgKGZhbWlseU5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICAgICAgWyd3aGVyZScsIGBGYW1pbHk9JyR7ZmFtaWx5TmFtZX0nIGFuZCBHZW51cyBpcyBub3QgbnVsbGBdLFxuICAgICAgWydvdXRGaWVsZHMnLCAnR2VudXMnXSxcbiAgICAgIFsnb3JkZXJCeUZpZWxkcycsICdHZW51cyddXG4gICAgXSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YUZyb21GZWF0dXJlU2VydmljZShzZWFyY2hQYXJhbXMpXG4gICAgY29uc3QgZ2VuZXJhID0gZGF0YS5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXMuR2VudXMpXG4gICAgc2V0R2VudXNMaXN0KGdlbmVyYSlcbiAgfVxuXG4gIC8qKlxuICAgKiBjb25zdHJ1Y3QgU1FMIGNsYXVzZSBiYXNlZCBvbiB0YXhvbiBzZWxlY3Rpb25zXG4gICAqIE5vdGUgdGhhdCBvdGhlciBmaWx0ZXIgY3JpdGVyaWEgYXJlIG1hbmFnZWQgaW5kZXBlbmRlbnRseSBieSB0aGUgRmlsdGVyIHdpZGdldFxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UXVlcnkgKCk6IFNxbFF1ZXJ5UGFyYW1zIHtcbiAgICBjb25zdCBjbGF1c2VzID0gW11cblxuICAgIC8vIEZlYXR1cmUgTGF5ZXIgdXNlZCBkaWZmZXJlbnQgY29sdW1uIG5hbWVzIHRoYW4gbWFwIHNlcnZpY2VcbiAgICBpZiAoc2VsZWN0ZWRQaHlsdW0pIHsgY2xhdXNlcy5wdXNoKGBQaHlsdW0gPSAnJHtzZWxlY3RlZFBoeWx1bX0nYCkgfVxuICAgIGlmIChzZWxlY3RlZENsYXNzKSB7IGNsYXVzZXMucHVzaChgQ2xhc3MgPSAnJHtzZWxlY3RlZENsYXNzfSdgKSB9XG4gICAgaWYgKHNlbGVjdGVkRmFtaWx5KSB7IGNsYXVzZXMucHVzaChgRmFtaWx5ID0gJyR7c2VsZWN0ZWRGYW1pbHl9J2ApIH1cbiAgICAvLyBPcmRlciBpcyBhIFNRTCByZXNlcnZlZCB3b3JkXG4gICAgaWYgKHNlbGVjdGVkT3JkZXIpIHsgY2xhdXNlcy5wdXNoKGBPcmRlcl8gPSAnJHtzZWxlY3RlZE9yZGVyfSdgKSB9XG4gICAgaWYgKHNlbGVjdGVkR2VudXMpIHsgY2xhdXNlcy5wdXNoKGBHZW51cyA9ICcke3NlbGVjdGVkR2VudXN9J2ApIH1cblxuICAgIGlmIChjbGF1c2VzPy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAoeyB3aGVyZTogY2xhdXNlcy5qb2luKCcgQU5EICcpIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRCdXR0b25IYW5kbGVyIChldnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XG4gICAgY29uc29sZS5sb2coJ3Jlc2V0IGJ1dHRvbiBjbGlja2VkJyxzZWxlY3RlZFBoeWx1bSwgc2VsZWN0ZWRDbGFzcywgc2VsZWN0ZWRPcmRlciwgc2VsZWN0ZWRGYW1pbHksIHNlbGVjdGVkR2VudXMpXG5cbiAgICBzZXRTZWxlY3RlZFBoeWx1bSgnJylcbiAgICBzZXRTZWxlY3RlZENsYXNzKCcnKVxuICAgIHNldFNlbGVjdGVkT3JkZXIoJycpXG4gICAgc2V0U2VsZWN0ZWRGYW1pbHkoJycpXG4gICAgc2V0U2VsZWN0ZWRHZW51cygnJylcbiAgICBzZXRDbGFzc0xpc3QoW10pXG4gICAgc2V0T3JkZXJMaXN0KFtdKVxuICAgIHNldEZhbWlseUxpc3QoW10pXG4gICAgc2V0R2VudXNMaXN0KFtdKVxuICB9XG5cbiAgLy8gY2hhbmdpbmcgcGh5bHVtIHJlc2V0cyBhbGwgb3RoZXIgU2VsZWN0IGVsZW1lbnRzIGluIGhpZXJhcmNoeVxuICBmdW5jdGlvbiBwaHlsdW1TZWxlY3RIYW5kbGVyIChldnQ6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZ0LnRhcmdldCBhcyBIVE1MQ2FsY2l0ZUNvbWJvYm94RWxlbWVudFxuICAgIHNldFNlbGVjdGVkUGh5bHVtKHRhcmdldC52YWx1ZSlcbiAgICAvLyB2YWx1ZSB3aWxsIGFsd2F5cyBiZSBhIHN0cmluZyBhbmQgbm90IGFuIGFycmF5IGJlY2F1c2Ugc2VsZWN0aW9uLW1vZGU9XCJzaW5nbGUtcGVyc2lzdFwiXG4gICAgdXBkYXRlQ2xhc3NMaXN0KHRhcmdldC52YWx1ZSBhcyBzdHJpbmcpXG5cbiAgICAvLyByZXNldCBkZXBlbmRlbnQgdmFsdWVzXG4gICAgc2V0U2VsZWN0ZWRDbGFzcygnJylcbiAgICBzZXRTZWxlY3RlZE9yZGVyKCcnKVxuICAgIHNldFNlbGVjdGVkRmFtaWx5KCcnKVxuICAgIHNldFNlbGVjdGVkR2VudXMoJycpXG4gICAgc2V0T3JkZXJMaXN0KFtdKVxuICAgIHNldEZhbWlseUxpc3QoW10pXG4gICAgc2V0R2VudXNMaXN0KFtdKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xhc3NTZWxlY3RIYW5kbGVyIChldnQ6IGFueSkge1xuICAgIHNldFNlbGVjdGVkQ2xhc3MoZXZ0LnRhcmdldC52YWx1ZSlcbiAgICB1cGRhdGVPcmRlckxpc3QoZXZ0LnRhcmdldC52YWx1ZSlcblxuICAgIC8vIHJlc2V0IGRlcGVuZGVudCB2YWx1ZXNcbiAgICBzZXRTZWxlY3RlZE9yZGVyKCcnKVxuICAgIHNldFNlbGVjdGVkRmFtaWx5KCcnKVxuICAgIHNldFNlbGVjdGVkR2VudXMoJycpXG4gICAgc2V0RmFtaWx5TGlzdChbXSlcbiAgICBzZXRHZW51c0xpc3QoW10pXG4gIH1cblxuICBmdW5jdGlvbiBvcmRlclNlbGVjdEhhbmRsZXIgKGV2dDogQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0IGFzIEhUTUxDYWxjaXRlQ29tYm9ib3hFbGVtZW50XG4gICAgc2V0U2VsZWN0ZWRPcmRlcih0YXJnZXQudmFsdWUpXG4gICAgdXBkYXRlRmFtaWx5TGlzdCh0YXJnZXQudmFsdWUgYXMgc3RyaW5nKVxuXG4gICAgLy8gcmVzZXQgZGVwZW5kZW50IHZhbHVlc1xuICAgIHNldFNlbGVjdGVkRmFtaWx5KCcnKVxuICAgIHNldFNlbGVjdGVkR2VudXMoJycpXG4gICAgc2V0R2VudXNMaXN0KFtdKVxuICB9XG5cbiAgZnVuY3Rpb24gZmFtaWx5U2VsZWN0SGFuZGxlciAoZXZ0OiBDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXQgYXMgSFRNTENhbGNpdGVDb21ib2JveEVsZW1lbnRcbiAgICBzZXRTZWxlY3RlZEZhbWlseSh0YXJnZXQudmFsdWUpXG4gICAgdXBkYXRlR2VudXNMaXN0KHRhcmdldC52YWx1ZSBhcyBzdHJpbmcpXG5cbiAgICAvLyByZXNldCBkZXBlbmRlbnQgdmFsdWVzXG4gICAgc2V0U2VsZWN0ZWRHZW51cygnJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbnVzU2VsZWN0SGFuZGxlciAoZXZ0OiBDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXQgYXMgSFRNTENhbGNpdGVDb21ib2JveEVsZW1lbnRcbiAgICBzZXRTZWxlY3RlZEdlbnVzKHRhcmdldC52YWx1ZSBhcyBzdHJpbmcpXG4gIH1cblxuICAvLyBydW5zIG9uY2VcbiAgZnVuY3Rpb24gb25EYXRhU291cmNlQ3JlYXRlZCAoZHM6IERhdGFTb3VyY2UpIHtcbiAgICBpZiAoZHMpIHtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkcyBhcyBRdWVyaWFibGVEYXRhU291cmNlXG4gICAgICBzZXREYXRhU291cmNlKGRhdGFTb3VyY2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byBjcmVhdGUgRGF0YVNvdXJjZScpXG4gICAgfVxuICB9XG5cbiAgLy8gcnVucyBvbmNlXG4gIGNvbnN0IGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICBpZiAoIWptdikge1xuICAgICAgY29uc29sZS53YXJuKCdubyBNYXBWaWV3JylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRWaWV3KGptdi52aWV3KVxuICB9XG5cbiAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UgKCkge1xuICAgIE1lc3NhZ2VNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVibGlzaE1lc3NhZ2UobmV3IERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlKHByb3BzLmlkLCBkYXRhU291cmNlLmlkKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZT17cHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXX1cbiAgICAgICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cbiAgICAgICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e29uRGF0YVNvdXJjZUNyZWF0ZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17YWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9PjwvSmltdU1hcFZpZXdDb21wb25lbnQ+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPGNhbGNpdGUtY29tYm9ib3ggbGFiZWw9XCJQaHlsdW1cIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIFBoeWx1bS4uLlwiXG4gICAgICAgIHNlbGVjdGlvbi1kaXNwbGF5PVwiZml0XCIgc2VsZWN0aW9uLWFwcGVhcmFuY2U9XCJoaWdobGlnaHRcIlxuICAgICAgICBzZWxlY3Rpb24tbW9kZT1cInNpbmdsZS1wZXJzaXN0XCIgc2NhbGU9J3MnXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZFBoeWx1bX0gZGlzYWJsZWQ9eyFwaHlsdW1MaXN0Lmxlbmd0aH1cbiAgICAgICAgb25jYWxjaXRlQ29tYm9ib3hDaGFuZ2U9e3BoeWx1bVNlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMTBweCcsIHBhZGRpbmdCb3R0b206ICcxMHB4Jywgd2lkdGg6IDIwMCB9fVxuICAgICAgPlxuICAgICAgICAgIHtwaHlsdW1MaXN0Py5tYXAoaXRlbSA9PiA8Y2FsY2l0ZS1jb21ib2JveC1pdGVtIHZhbHVlPXtpdGVtfSBoZWFkaW5nPXtpdGVtfT48L2NhbGNpdGUtY29tYm9ib3gtaXRlbT4pfVxuICAgICAgPC9jYWxjaXRlLWNvbWJvYm94PlxuICAgICAgPGNhbGNpdGUtY29tYm9ib3ggbGFiZWw9XCJDbGFzc1wiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgQ2xhc3MuLi5cIlxuICAgICAgICBzZWxlY3Rpb24tZGlzcGxheT1cImZpdFwiIHNlbGVjdGlvbi1hcHBlYXJhbmNlPVwiaGlnaGxpZ2h0XCJcbiAgICAgICAgc2VsZWN0aW9uLW1vZGU9XCJzaW5nbGUtcGVyc2lzdFwiIHNjYWxlPSdzJ1xuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRDbGFzc30gZGlzYWJsZWQ9eyFjbGFzc0xpc3QubGVuZ3RofVxuICAgICAgICBvbmNhbGNpdGVDb21ib2JveENoYW5nZT17Y2xhc3NTZWxlY3RIYW5kbGVyfVxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzEwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcsIHdpZHRoOiAyMDAgfX1cbiAgICAgID5cbiAgICAgICAgICB7Y2xhc3NMaXN0Py5tYXAoaXRlbSA9PiA8Y2FsY2l0ZS1jb21ib2JveC1pdGVtIHZhbHVlPXtpdGVtfSBoZWFkaW5nPXtpdGVtfT48L2NhbGNpdGUtY29tYm9ib3gtaXRlbT4pfVxuICAgICAgPC9jYWxjaXRlLWNvbWJvYm94PlxuXG4gICAgICA8Y2FsY2l0ZS1jb21ib2JveCBsYWJlbD1cIk9yZGVyXCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYW4gT3JkZXIuLi5cIlxuICAgICAgICBzZWxlY3Rpb24tZGlzcGxheT1cImZpdFwiIHNlbGVjdGlvbi1hcHBlYXJhbmNlPVwiaGlnaGxpZ2h0XCJcbiAgICAgICAgc2VsZWN0aW9uLW1vZGU9XCJzaW5nbGUtcGVyc2lzdFwiIHNjYWxlPSdzJ1xuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcmRlcn0gZGlzYWJsZWQ9eyFvcmRlckxpc3QubGVuZ3RofVxuICAgICAgICBvbmNhbGNpdGVDb21ib2JveENoYW5nZT17b3JkZXJTZWxlY3RIYW5kbGVyfVxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzEwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcsIHdpZHRoOiAyMDAgfX1cbiAgICAgID5cbiAgICAgICAgICB7b3JkZXJMaXN0Py5tYXAoaXRlbSA9PiA8Y2FsY2l0ZS1jb21ib2JveC1pdGVtIHZhbHVlPXtpdGVtfSBoZWFkaW5nPXtpdGVtfT48L2NhbGNpdGUtY29tYm9ib3gtaXRlbT4pfVxuICAgICAgPC9jYWxjaXRlLWNvbWJvYm94PlxuXG4gICAgICA8Y2FsY2l0ZS1jb21ib2JveCBsYWJlbD1cIkZhbWlseVwiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgRmFtaWx5Li4uXCJcbiAgICAgICAgc2VsZWN0aW9uLWRpc3BsYXk9XCJmaXRcIiBzZWxlY3Rpb24tYXBwZWFyYW5jZT1cImhpZ2hsaWdodFwiXG4gICAgICAgIHNlbGVjdGlvbi1tb2RlPVwic2luZ2xlLXBlcnNpc3RcIiBzY2FsZT0ncydcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkRmFtaWx5fSBkaXNhYmxlZD17IWZhbWlseUxpc3QubGVuZ3RofVxuICAgICAgICBvbmNhbGNpdGVDb21ib2JveENoYW5nZT17ZmFtaWx5U2VsZWN0SGFuZGxlcn1cbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxMHB4JywgcGFkZGluZ0JvdHRvbTogJzEwcHgnLCB3aWR0aDogMjAwIH19XG4gICAgICA+XG4gICAgICAgICAge2ZhbWlseUxpc3Q/Lm1hcChpdGVtID0+IDxjYWxjaXRlLWNvbWJvYm94LWl0ZW0gdmFsdWU9e2l0ZW19IGhlYWRpbmc9e2l0ZW19PjwvY2FsY2l0ZS1jb21ib2JveC1pdGVtPil9XG4gICAgICA8L2NhbGNpdGUtY29tYm9ib3g+XG4gICAgICA8Y2FsY2l0ZS1jb21ib2JveCBsYWJlbD1cIkdlbnVzXCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBHZW51cy4uLlwiXG4gICAgICAgIHNlbGVjdGlvbi1kaXNwbGF5PVwiZml0XCIgc2VsZWN0aW9uLWFwcGVhcmFuY2U9XCJoaWdobGlnaHRcIlxuICAgICAgICBzZWxlY3Rpb24tbW9kZT1cInNpbmdsZS1wZXJzaXN0XCIgc2NhbGU9J3MnXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZEdlbnVzfSBkaXNhYmxlZD17IWdlbnVzTGlzdC5sZW5ndGh9XG4gICAgICAgIG9uY2FsY2l0ZUNvbWJvYm94Q2hhbmdlPXtnZW51c1NlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMTBweCcsIHBhZGRpbmdCb3R0b206ICcxMHB4Jywgd2lkdGg6IDIwMCB9fVxuICAgICAgPlxuICAgICAgICB7Z2VudXNMaXN0Lm1hcChpdGVtID0+IDxjYWxjaXRlLWNvbWJvYm94LWl0ZW0gdmFsdWU9e2l0ZW19IGhlYWRpbmc9e2l0ZW19PjwvY2FsY2l0ZS1jb21ib2JveC1pdGVtPil9XG4gICAgICA8L2NhbGNpdGUtY29tYm9ib3g+XG5cbiAgICAgIDxCdXR0b24gc2l6ZT0nc20nIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fSBvbkNsaWNrPXtyZXNldEJ1dHRvbkhhbmRsZXJ9PlJlc2V0PC9CdXR0b24+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==