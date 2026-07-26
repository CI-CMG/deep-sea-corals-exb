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
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "jimu-widget", style: { width: '100%', height: '100%', overflow: 'hidden' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0], widgetId: props.id, onDataSourceCreated: onDataSourceCreated }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.JimuMapViewComponent, { useMapWidgetId: (_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b[0], onActiveViewChange: activeViewChangeHandler })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox", { label: "Phylum", placeholder: "Select a Phylum...", "selection-display": "fit", "selection-appearance": "highlight", "selection-mode": "single-persist", value: selectedPhylum, disabled: !phylumList.length, oncalciteComboboxChange: phylumSelectHandler, style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, children: phylumList === null || phylumList === void 0 ? void 0 : phylumList.map(item => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox-item", { value: item, heading: item })) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox", { label: "Class", placeholder: "Select a Class...", "selection-display": "fit", "selection-appearance": "highlight", "selection-mode": "single-persist", value: selectedClass, disabled: !classList.length, oncalciteComboboxChange: classSelectHandler, style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, children: classList === null || classList === void 0 ? void 0 : classList.map(item => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox-item", { value: item, heading: item })) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox", { label: "Order", placeholder: "Select an Order...", "selection-display": "fit", "selection-appearance": "highlight", "selection-mode": "single-persist", value: selectedOrder, disabled: !orderList.length, oncalciteComboboxChange: orderSelectHandler, style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, children: orderList === null || orderList === void 0 ? void 0 : orderList.map(item => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox-item", { value: item, heading: item })) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox", { label: "Family", placeholder: "Select a Family...", "selection-display": "fit", "selection-appearance": "highlight", "selection-mode": "single-persist", value: selectedFamily, disabled: !familyList.length, oncalciteComboboxChange: familySelectHandler, style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, children: familyList === null || familyList === void 0 ? void 0 : familyList.map(item => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox-item", { value: item, heading: item })) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox", { label: "Genus", placeholder: "Select a Genus...", "selection-display": "fit", "selection-appearance": "highlight", "selection-mode": "single-persist", value: selectedGenus, disabled: !genusList.length, oncalciteComboboxChange: genusSelectHandler, style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, children: genusList.map(item => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("calcite-combobox-item", { value: item, heading: item })) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { style: { marginLeft: '10px' }, onClick: resetButtonHandler, children: "Reset" })] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy90YXhvbi1zZWxlY3Rvci9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCxlQUFlO0FBTUc7QUFDZ0M7QUFDa0I7QUFDcEI7QUFHakMsU0FBUyxNQUFNLENBQUUsS0FBK0I7O0lBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUM7SUFDMUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsR0FBRywrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUNsRCxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsK0NBQVEsQ0FBVyxFQUFFLENBQUM7SUFDMUQsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRywrQ0FBUSxD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QUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdGF4b24tc2VsZWN0b3Ivc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsXG4gIGpzeCwgRGF0YVNvdXJjZUNvbXBvbmVudCxcbiAgdHlwZSBTcWxRdWVyeVBhcmFtcyxcbiAgdHlwZSBRdWVyaWFibGVEYXRhU291cmNlLCB0eXBlIERhdGFTb3VyY2UsIE1lc3NhZ2VNYW5hZ2VyLCBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZVxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdHlwZSBKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB7IFNlbGVjdCwgT3B0aW9uLCBCdXR0b24gfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgdGF4b24tc2VsZWN0b3IuLi4nKVxuICBjb25zdCBbZGF0YVNvdXJjZSwgc2V0RGF0YVNvdXJjZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcGh5bHVtTGlzdCwgc2V0UGh5bHVtTGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtjbGFzc0xpc3QsIHNldENsYXNzTGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtvcmRlckxpc3QsIHNldE9yZGVyTGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtmYW1pbHlMaXN0LCBzZXRGYW1pbHlMaXN0XSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgY29uc3QgW2dlbnVzTGlzdCwgc2V0R2VudXNMaXN0XSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgY29uc3QgW3NlbGVjdGVkUGh5bHVtLCBzZXRTZWxlY3RlZFBoeWx1bV0gPSB1c2VTdGF0ZTxzdHJpbmd8c3RyaW5nW10+KClcbiAgY29uc3QgW3NlbGVjdGVkQ2xhc3MsIHNldFNlbGVjdGVkQ2xhc3NdID0gdXNlU3RhdGU8c3RyaW5nfHN0cmluZ1tdPigpXG4gIGNvbnN0IFtzZWxlY3RlZE9yZGVyLCBzZXRTZWxlY3RlZE9yZGVyXSA9IHVzZVN0YXRlPHN0cmluZ3xzdHJpbmdbXT4oKVxuICBjb25zdCBbc2VsZWN0ZWRGYW1pbHksIHNldFNlbGVjdGVkRmFtaWx5XSA9IHVzZVN0YXRlPHN0cmluZ3xzdHJpbmdbXT4oKVxuICBjb25zdCBbc2VsZWN0ZWRHZW51cywgc2V0U2VsZWN0ZWRHZW51c10gPSB1c2VTdGF0ZTxzdHJpbmd8c3RyaW5nW10+KClcbiAgY29uc3QgZmVhdHVyZVNlcnZpY2VVcmwgPSAnaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS9DOEVNZ3JzRmNSRkw2THJML0FyY0dJUy9yZXN0L3NlcnZpY2VzL0RTQ1JUUF9OYXREQi9GZWF0dXJlU2VydmVyLzAvcXVlcnk/J1xuICAvL1RPRE8gcmVhZCBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgLy8gY29uc3Qgc2VydmljZVVybCA9IChwcm9wcy5jb25maWcuc2VydmljZVVybCkgPyBwcm9wcy5jb25maWcuc2VydmljZVVybCA6ICdodHRwczovL3NlcnZpY2VzMi5hcmNnaXMuY29tL0M4RU1ncnNGY1JGTDZMckwvQXJjR0lTL3Jlc3Qvc2VydmljZXMvRFNDUlRQX05hdERCL0ZlYXR1cmVTZXJ2ZXIvMC9xdWVyeT8nXG4gIC8vIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgVGF4b25TZWxlY3RvciB3aWRnZXQnLCBzZWxlY3RlZFBoeWx1bSwgc2VsZWN0ZWRDbGFzcywgc2VsZWN0ZWRPcmRlciwgc2VsZWN0ZWRGYW1pbHksIHNlbGVjdGVkR2VudXMpXG4gIC8vIGhhbmRsZSBjaGFuZ2VzIHRvIHRheG9uIHNlbGVjdGlvbnMuIHVwZGF0ZSBtYXAgYW5kIHB1Ymxpc2ggbmV3IHZhbHVlc1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3RheG9uLXNlbGVjdG9yOiBpbnNpZGUgdXNlRWZmZWN0Li4uJylcbiAgICAvLyBjb25zb2xlLmxvZygncGh5bHVtOiAnICsgc2VsZWN0ZWRQaHlsdW0gKyAnOyBjbGFzczogJyArIHNlbGVjdGVkQ2xhc3MgKyAnOyBvcmRlcjogJyArIHNlbGVjdGVkT3JkZXIgKyAnOyBnZW51czogJyArIHNlbGVjdGVkR2VudXMpXG4gICAgaWYgKCFkYXRhU291cmNlIHx8ICF2aWV3KSB7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ3RheG9uLXNlbGVjdG9yOiBEYXRhU291cmNlIGFuZC9vciBNYXBWaWV3IG5vdCB5ZXQgc2V0LiBRdWVyeVBhcmFtcyBjYW5ub3QgdXBkYXRlZCcpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZFRheG9uID0gW11cbiAgICBpZiAoc2VsZWN0ZWRQaHlsdW0pIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkUGh5bHVtKSB9XG4gICAgaWYgKHNlbGVjdGVkQ2xhc3MpIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkQ2xhc3MpIH1cbiAgICBpZiAoc2VsZWN0ZWRGYW1pbHkpIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkRmFtaWx5KSB9XG4gICAgaWYgKHNlbGVjdGVkT3JkZXIpIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkT3JkZXIpIH1cbiAgICBpZiAoc2VsZWN0ZWRHZW51cykgeyBzZWxlY3RlZFRheG9uLnB1c2goc2VsZWN0ZWRHZW51cykgfVxuXG4gICAgY29uc3QgcSA9IGdldFF1ZXJ5KCk7XG4gICAgKGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZSkudXBkYXRlUXVlcnlQYXJhbXMocSwgcHJvcHMuaWQpXG4gICAgc2VuZE1lc3NhZ2UoKVxuICB9LCBbc2VsZWN0ZWRQaHlsdW0sIHNlbGVjdGVkQ2xhc3MsIHNlbGVjdGVkRmFtaWx5LCBzZWxlY3RlZE9yZGVyLCBzZWxlY3RlZEdlbnVzXSlcblxuXG4gIC8vIHJ1biBvbmNlIHdoZW4gd2lkZ2V0IGlzIGxvYWRlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGxpc3Qgb2YgcGh5bHVtcyBkb2VzIG5vdCBjaGFuZ2VcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gICAgICBbJ3doZXJlJywgJzE9MSddLFxuICAgICAgWydvdXRGaWVsZHMnLCAnUGh5bHVtJ10sXG4gICAgICBbJ29yZGVyQnlGaWVsZHMnLCAnUGh5bHVtJ11cbiAgICBdKVxuICAgIGdldERhdGFGcm9tRmVhdHVyZVNlcnZpY2Uoc2VhcmNoUGFyYW1zKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc3QgcGh5bHVtcyA9IGRhdGEuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzLlBoeWx1bSlcbiAgICAgIC8vIHJlcHJlc2VudCBudWxsIHZhbHVlcyB3LyAnTkEnIGluIHRoZSBwdWxsLWRvd24gbGlzdFxuICAgICAgLy8gY29uc3QgcGh5bHVtcyA9IGRhdGEuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzLlBoeWx1bSkubWFwKG5hbWUgPT4gbmFtZSB8fCAnTkEnKVxuICAgICAgc2V0UGh5bHVtTGlzdChwaHlsdW1zKVxuICAgICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKClcbiAgICAgIGNvbnNvbGUuZGVidWcoYFBoeWx1bSBkYXRhIGxvYWRlZCBmcm9tIEZlYXR1cmVTZXJ2aWNlIGluICR7KGVuZFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwfSBzZWNvbmRzYClcbiAgICB9KVxuICB9LCBbXSlcblxuICBhc3luYyBmdW5jdGlvbiBnZXREYXRhRnJvbUZlYXR1cmVTZXJ2aWNlIChpbmNvbWluZ1NlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgLy9jbG9uZSBpbmNvbWluZ1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoaW5jb21pbmdTZWFyY2hQYXJhbXMpXG4gICAgLy8gcGFyYW1zIHNoYXJlZCBiZSBldmVyeSByZXF1ZXN0XG4gICAgc2VhcmNoUGFyYW1zLnNldCgncmV0dXJuR2VvbWV0cnknLCAnZmFsc2UnKVxuICAgIHNlYXJjaFBhcmFtcy5zZXQoJ3JldHVybkRpc3RpbmN0VmFsdWVzJywgJ3RydWUnKVxuICAgIHNlYXJjaFBhcmFtcy5zZXQoJ2YnLCAnanNvbicpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZWF0dXJlU2VydmljZVVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBzZWFyY2hQYXJhbXNcbiAgICB9KVxuICAgIC8vVE9ETyBiZXR0ZXIgZXJyb3IgaGFuZGxpbmdcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIGZldGNoaW5nIFRheG9uIGRhdGEgZnJvbTogJyArIGZlYXR1cmVTZXJ2aWNlVXJsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNsYXNzTGlzdCAocGh5bHVtTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gICAgICBbJ3doZXJlJywgYFBoeWx1bT0nJHtwaHlsdW1OYW1lfScgYW5kIENsYXNzIGlzIG5vdCBudWxsYF0sXG4gICAgICBbJ291dEZpZWxkcycsICdDbGFzcyddLFxuICAgICAgWydvcmRlckJ5RmllbGRzJywgJ0NsYXNzJ11cbiAgICBdKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhRnJvbUZlYXR1cmVTZXJ2aWNlKHNlYXJjaFBhcmFtcylcbiAgICBjb25zdCBjbGFzc2VzID0gZGF0YS5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXMuQ2xhc3MpXG4gICAgc2V0Q2xhc3NMaXN0KGNsYXNzZXMpXG4gIH1cblxuICAvLyAnT3JkZXInIGlzIHJlc2VydmVkIHdvcmQgaW4gU1FMIHNvIHJlbmFtZWQgdG8gJ09yZGVyXyBpbiBGZWF0dXJlU2VydmljZSdcbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlT3JkZXJMaXN0IChjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICAgICAgWyd3aGVyZScsIGBDbGFzcz0nJHtjbGFzc05hbWV9JyBhbmQgT3JkZXJfIGlzIG5vdCBudWxsYF0sXG4gICAgICBbJ291dEZpZWxkcycsICdPcmRlcl8nXSxcbiAgICAgIFsnb3JkZXJCeUZpZWxkcycsICdPcmRlcl8nXVxuICAgIF0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGFGcm9tRmVhdHVyZVNlcnZpY2Uoc2VhcmNoUGFyYW1zKVxuICAgIGNvbnN0IG9yZGVycyA9IGRhdGEuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzLk9yZGVyXylcbiAgICBzZXRPcmRlckxpc3Qob3JkZXJzKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRmFtaWx5TGlzdCAob3JkZXJOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtcbiAgICAgIFsnd2hlcmUnLCBgT3JkZXJfPScke29yZGVyTmFtZX0nIGFuZCBGYW1pbHkgaXMgbm90IG51bGxgXSxcbiAgICAgIFsnb3V0RmllbGRzJywgJ0ZhbWlseSddLFxuICAgICAgWydvcmRlckJ5RmllbGRzJywgJ0ZhbWlseSddXG4gICAgXSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YUZyb21GZWF0dXJlU2VydmljZShzZWFyY2hQYXJhbXMpXG4gICAgY29uc3QgZmFtaWxpZXMgPSBkYXRhLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlcy5GYW1pbHkpXG4gICAgc2V0RmFtaWx5TGlzdChmYW1pbGllcylcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdlbnVzTGlzdCAoZmFtaWx5TmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gICAgICBbJ3doZXJlJywgYEZhbWlseT0nJHtmYW1pbHlOYW1lfScgYW5kIEdlbnVzIGlzIG5vdCBudWxsYF0sXG4gICAgICBbJ291dEZpZWxkcycsICdHZW51cyddLFxuICAgICAgWydvcmRlckJ5RmllbGRzJywgJ0dlbnVzJ11cbiAgICBdKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhRnJvbUZlYXR1cmVTZXJ2aWNlKHNlYXJjaFBhcmFtcylcbiAgICBjb25zdCBnZW5lcmEgPSBkYXRhLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlcy5HZW51cylcbiAgICBzZXRHZW51c0xpc3QoZ2VuZXJhKVxuICB9XG5cbiAgLyoqXG4gICAqIGNvbnN0cnVjdCBTUUwgY2xhdXNlIGJhc2VkIG9uIHRheG9uIHNlbGVjdGlvbnNcbiAgICogTm90ZSB0aGF0IG90aGVyIGZpbHRlciBjcml0ZXJpYSBhcmUgbWFuYWdlZCBpbmRlcGVuZGVudGx5IGJ5IHRoZSBGaWx0ZXIgd2lkZ2V0XG4gICAqL1xuICBmdW5jdGlvbiBnZXRRdWVyeSAoKTogU3FsUXVlcnlQYXJhbXMge1xuICAgIGNvbnN0IGNsYXVzZXMgPSBbXVxuXG4gICAgLy8gRmVhdHVyZSBMYXllciB1c2VkIGRpZmZlcmVudCBjb2x1bW4gbmFtZXMgdGhhbiBtYXAgc2VydmljZVxuICAgIGlmIChzZWxlY3RlZFBoeWx1bSkgeyBjbGF1c2VzLnB1c2goYFBoeWx1bSA9ICcke3NlbGVjdGVkUGh5bHVtfSdgKSB9XG4gICAgaWYgKHNlbGVjdGVkQ2xhc3MpIHsgY2xhdXNlcy5wdXNoKGBDbGFzcyA9ICcke3NlbGVjdGVkQ2xhc3N9J2ApIH1cbiAgICBpZiAoc2VsZWN0ZWRGYW1pbHkpIHsgY2xhdXNlcy5wdXNoKGBGYW1pbHkgPSAnJHtzZWxlY3RlZEZhbWlseX0nYCkgfVxuICAgIC8vIE9yZGVyIGlzIGEgU1FMIHJlc2VydmVkIHdvcmRcbiAgICBpZiAoc2VsZWN0ZWRPcmRlcikgeyBjbGF1c2VzLnB1c2goYE9yZGVyXyA9ICcke3NlbGVjdGVkT3JkZXJ9J2ApIH1cbiAgICBpZiAoc2VsZWN0ZWRHZW51cykgeyBjbGF1c2VzLnB1c2goYEdlbnVzID0gJyR7c2VsZWN0ZWRHZW51c30nYCkgfVxuXG4gICAgaWYgKGNsYXVzZXM/Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuICh7IHdoZXJlOiBjbGF1c2VzLmpvaW4oJyBBTkQgJykgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldEJ1dHRvbkhhbmRsZXIgKGV2dDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcbiAgICBjb25zb2xlLmxvZygncmVzZXQgYnV0dG9uIGNsaWNrZWQnLHNlbGVjdGVkUGh5bHVtLCBzZWxlY3RlZENsYXNzLCBzZWxlY3RlZE9yZGVyLCBzZWxlY3RlZEZhbWlseSwgc2VsZWN0ZWRHZW51cylcblxuICAgIHNldFNlbGVjdGVkUGh5bHVtKCcnKVxuICAgIHNldFNlbGVjdGVkQ2xhc3MoJycpXG4gICAgc2V0U2VsZWN0ZWRPcmRlcignJylcbiAgICBzZXRTZWxlY3RlZEZhbWlseSgnJylcbiAgICBzZXRTZWxlY3RlZEdlbnVzKCcnKVxuICAgIHNldENsYXNzTGlzdChbXSlcbiAgICBzZXRPcmRlckxpc3QoW10pXG4gICAgc2V0RmFtaWx5TGlzdChbXSlcbiAgICBzZXRHZW51c0xpc3QoW10pXG4gIH1cblxuICAvLyBjaGFuZ2luZyBwaHlsdW0gcmVzZXRzIGFsbCBvdGhlciBTZWxlY3QgZWxlbWVudHMgaW4gaGllcmFyY2h5XG4gIGZ1bmN0aW9uIHBoeWx1bVNlbGVjdEhhbmRsZXIgKGV2dDogQ3VzdG9tRXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0IGFzIEhUTUxDYWxjaXRlQ29tYm9ib3hFbGVtZW50XG4gICAgc2V0U2VsZWN0ZWRQaHlsdW0odGFyZ2V0LnZhbHVlKVxuICAgIC8vIHZhbHVlIHdpbGwgYWx3YXlzIGJlIGEgc3RyaW5nIGFuZCBub3QgYW4gYXJyYXkgYmVjYXVzZSBzZWxlY3Rpb24tbW9kZT1cInNpbmdsZS1wZXJzaXN0XCJcbiAgICB1cGRhdGVDbGFzc0xpc3QodGFyZ2V0LnZhbHVlIGFzIHN0cmluZylcblxuICAgIC8vIHJlc2V0IGRlcGVuZGVudCB2YWx1ZXNcbiAgICBzZXRTZWxlY3RlZENsYXNzKCcnKVxuICAgIHNldFNlbGVjdGVkT3JkZXIoJycpXG4gICAgc2V0U2VsZWN0ZWRGYW1pbHkoJycpXG4gICAgc2V0U2VsZWN0ZWRHZW51cygnJylcbiAgICBzZXRPcmRlckxpc3QoW10pXG4gICAgc2V0RmFtaWx5TGlzdChbXSlcbiAgICBzZXRHZW51c0xpc3QoW10pXG4gIH1cblxuICBmdW5jdGlvbiBjbGFzc1NlbGVjdEhhbmRsZXIgKGV2dDogYW55KSB7XG4gICAgc2V0U2VsZWN0ZWRDbGFzcyhldnQudGFyZ2V0LnZhbHVlKVxuICAgIHVwZGF0ZU9yZGVyTGlzdChldnQudGFyZ2V0LnZhbHVlKVxuXG4gICAgLy8gcmVzZXQgZGVwZW5kZW50IHZhbHVlc1xuICAgIHNldFNlbGVjdGVkT3JkZXIoJycpXG4gICAgc2V0U2VsZWN0ZWRGYW1pbHkoJycpXG4gICAgc2V0U2VsZWN0ZWRHZW51cygnJylcbiAgICBzZXRGYW1pbHlMaXN0KFtdKVxuICAgIHNldEdlbnVzTGlzdChbXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9yZGVyU2VsZWN0SGFuZGxlciAoZXZ0OiBDdXN0b21FdmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXQgYXMgSFRNTENhbGNpdGVDb21ib2JveEVsZW1lbnRcbiAgICBzZXRTZWxlY3RlZE9yZGVyKHRhcmdldC52YWx1ZSlcbiAgICB1cGRhdGVGYW1pbHlMaXN0KHRhcmdldC52YWx1ZSBhcyBzdHJpbmcpXG5cbiAgICAvLyByZXNldCBkZXBlbmRlbnQgdmFsdWVzXG4gICAgc2V0U2VsZWN0ZWRGYW1pbHkoJycpXG4gICAgc2V0U2VsZWN0ZWRHZW51cygnJylcbiAgICBzZXRHZW51c0xpc3QoW10pXG4gIH1cblxuICBmdW5jdGlvbiBmYW1pbHlTZWxlY3RIYW5kbGVyIChldnQ6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZ0LnRhcmdldCBhcyBIVE1MQ2FsY2l0ZUNvbWJvYm94RWxlbWVudFxuICAgIHNldFNlbGVjdGVkRmFtaWx5KHRhcmdldC52YWx1ZSlcbiAgICB1cGRhdGVHZW51c0xpc3QodGFyZ2V0LnZhbHVlIGFzIHN0cmluZylcblxuICAgIC8vIHJlc2V0IGRlcGVuZGVudCB2YWx1ZXNcbiAgICBzZXRTZWxlY3RlZEdlbnVzKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VudXNTZWxlY3RIYW5kbGVyIChldnQ6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZ0LnRhcmdldCBhcyBIVE1MQ2FsY2l0ZUNvbWJvYm94RWxlbWVudFxuICAgIHNldFNlbGVjdGVkR2VudXModGFyZ2V0LnZhbHVlIGFzIHN0cmluZylcbiAgfVxuXG4gIC8vIHJ1bnMgb25jZVxuICBmdW5jdGlvbiBvbkRhdGFTb3VyY2VDcmVhdGVkIChkczogRGF0YVNvdXJjZSkge1xuICAgIGlmIChkcykge1xuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRzIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcbiAgICAgIHNldERhdGFTb3VyY2UoZGF0YVNvdXJjZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIGNyZWF0ZSBEYXRhU291cmNlJylcbiAgICB9XG4gIH1cblxuICAvLyBydW5zIG9uY2VcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIGlmICgham12KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ25vIE1hcFZpZXcnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFZpZXcoam12LnZpZXcpXG4gIH1cblxuICBmdW5jdGlvbiBzZW5kTWVzc2FnZSAoKSB7XG4gICAgTWVzc2FnZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdWJsaXNoTWVzc2FnZShuZXcgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UocHJvcHMuaWQsIGRhdGFTb3VyY2UuaWQpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0XCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlcz8uWzBdfVxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxuICAgICAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17b25EYXRhU291cmNlQ3JlYXRlZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn0+PC9KaW11TWFwVmlld0NvbXBvbmVudD5cblxuICAgICAgPC9kaXY+XG4gICAgICA8Y2FsY2l0ZS1jb21ib2JveCBsYWJlbD1cIlBoeWx1bVwiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgUGh5bHVtLi4uXCJcbiAgICAgICAgc2VsZWN0aW9uLWRpc3BsYXk9XCJmaXRcIiBzZWxlY3Rpb24tYXBwZWFyYW5jZT1cImhpZ2hsaWdodFwiXG4gICAgICAgIHNlbGVjdGlvbi1tb2RlPVwic2luZ2xlLXBlcnNpc3RcIlxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRQaHlsdW19IGRpc2FibGVkPXshcGh5bHVtTGlzdC5sZW5ndGh9XG4gICAgICAgIG9uY2FsY2l0ZUNvbWJvYm94Q2hhbmdlPXtwaHlsdW1TZWxlY3RIYW5kbGVyfVxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzEwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcsIHdpZHRoOiAyMDAgfX1cbiAgICAgID5cbiAgICAgICAgICB7cGh5bHVtTGlzdD8ubWFwKGl0ZW0gPT4gPGNhbGNpdGUtY29tYm9ib3gtaXRlbSB2YWx1ZT17aXRlbX0gaGVhZGluZz17aXRlbX0+PC9jYWxjaXRlLWNvbWJvYm94LWl0ZW0+KX1cbiAgICAgIDwvY2FsY2l0ZS1jb21ib2JveD5cbiAgICAgIDxjYWxjaXRlLWNvbWJvYm94IGxhYmVsPVwiQ2xhc3NcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIENsYXNzLi4uXCJcbiAgICAgICAgc2VsZWN0aW9uLWRpc3BsYXk9XCJmaXRcIiBzZWxlY3Rpb24tYXBwZWFyYW5jZT1cImhpZ2hsaWdodFwiXG4gICAgICAgIHNlbGVjdGlvbi1tb2RlPVwic2luZ2xlLXBlcnNpc3RcIlxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRDbGFzc30gZGlzYWJsZWQ9eyFjbGFzc0xpc3QubGVuZ3RofVxuICAgICAgICBvbmNhbGNpdGVDb21ib2JveENoYW5nZT17Y2xhc3NTZWxlY3RIYW5kbGVyfVxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzEwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcsIHdpZHRoOiAyMDAgfX1cbiAgICAgID5cbiAgICAgICAgICB7Y2xhc3NMaXN0Py5tYXAoaXRlbSA9PiA8Y2FsY2l0ZS1jb21ib2JveC1pdGVtIHZhbHVlPXtpdGVtfSBoZWFkaW5nPXtpdGVtfT48L2NhbGNpdGUtY29tYm9ib3gtaXRlbT4pfVxuICAgICAgPC9jYWxjaXRlLWNvbWJvYm94PlxuXG4gICAgICA8Y2FsY2l0ZS1jb21ib2JveCBsYWJlbD1cIk9yZGVyXCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYW4gT3JkZXIuLi5cIlxuICAgICAgICBzZWxlY3Rpb24tZGlzcGxheT1cImZpdFwiIHNlbGVjdGlvbi1hcHBlYXJhbmNlPVwiaGlnaGxpZ2h0XCJcbiAgICAgICAgc2VsZWN0aW9uLW1vZGU9XCJzaW5nbGUtcGVyc2lzdFwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZE9yZGVyfSBkaXNhYmxlZD17IW9yZGVyTGlzdC5sZW5ndGh9XG4gICAgICAgIG9uY2FsY2l0ZUNvbWJvYm94Q2hhbmdlPXtvcmRlclNlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMTBweCcsIHBhZGRpbmdCb3R0b206ICcxMHB4Jywgd2lkdGg6IDIwMCB9fVxuICAgICAgPlxuICAgICAgICAgIHtvcmRlckxpc3Q/Lm1hcChpdGVtID0+IDxjYWxjaXRlLWNvbWJvYm94LWl0ZW0gdmFsdWU9e2l0ZW19IGhlYWRpbmc9e2l0ZW19PjwvY2FsY2l0ZS1jb21ib2JveC1pdGVtPil9XG4gICAgICA8L2NhbGNpdGUtY29tYm9ib3g+XG5cbiAgICAgIDxjYWxjaXRlLWNvbWJvYm94IGxhYmVsPVwiRmFtaWx5XCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBGYW1pbHkuLi5cIlxuICAgICAgICBzZWxlY3Rpb24tZGlzcGxheT1cImZpdFwiIHNlbGVjdGlvbi1hcHBlYXJhbmNlPVwiaGlnaGxpZ2h0XCJcbiAgICAgICAgc2VsZWN0aW9uLW1vZGU9XCJzaW5nbGUtcGVyc2lzdFwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZEZhbWlseX0gZGlzYWJsZWQ9eyFmYW1pbHlMaXN0Lmxlbmd0aH1cbiAgICAgICAgb25jYWxjaXRlQ29tYm9ib3hDaGFuZ2U9e2ZhbWlseVNlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMTBweCcsIHBhZGRpbmdCb3R0b206ICcxMHB4Jywgd2lkdGg6IDIwMCB9fVxuICAgICAgPlxuICAgICAgICAgIHtmYW1pbHlMaXN0Py5tYXAoaXRlbSA9PiA8Y2FsY2l0ZS1jb21ib2JveC1pdGVtIHZhbHVlPXtpdGVtfSBoZWFkaW5nPXtpdGVtfT48L2NhbGNpdGUtY29tYm9ib3gtaXRlbT4pfVxuICAgICAgPC9jYWxjaXRlLWNvbWJvYm94PlxuICAgICAgPGNhbGNpdGUtY29tYm9ib3ggbGFiZWw9XCJHZW51c1wiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgR2VudXMuLi5cIlxuICAgICAgICBzZWxlY3Rpb24tZGlzcGxheT1cImZpdFwiIHNlbGVjdGlvbi1hcHBlYXJhbmNlPVwiaGlnaGxpZ2h0XCJcbiAgICAgICAgc2VsZWN0aW9uLW1vZGU9XCJzaW5nbGUtcGVyc2lzdFwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZEdlbnVzfSBkaXNhYmxlZD17IWdlbnVzTGlzdC5sZW5ndGh9XG4gICAgICAgIG9uY2FsY2l0ZUNvbWJvYm94Q2hhbmdlPXtnZW51c1NlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMTBweCcsIHBhZGRpbmdCb3R0b206ICcxMHB4Jywgd2lkdGg6IDIwMCB9fVxuICAgICAgPlxuICAgICAgICB7Z2VudXNMaXN0Lm1hcChpdGVtID0+IDxjYWxjaXRlLWNvbWJvYm94LWl0ZW0gdmFsdWU9e2l0ZW19IGhlYWRpbmc9e2l0ZW19PjwvY2FsY2l0ZS1jb21ib2JveC1pdGVtPil9XG4gICAgICA8L2NhbGNpdGUtY29tYm9ib3g+XG5cbiAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19IG9uQ2xpY2s9e3Jlc2V0QnV0dG9uSGFuZGxlcn0+UmVzZXQ8L0J1dHRvbj5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9