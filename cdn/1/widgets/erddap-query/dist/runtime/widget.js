System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/geometry/support/webMercatorUtils","esri/core/reactiveUtils","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "esri/core/reactiveUtils":
/*!******************************************!*\
  !*** external "esri/core/reactiveUtils" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__;

/***/ }),

/***/ "esri/geometry/support/webMercatorUtils":
/*!*********************************************************!*\
  !*** external "esri/geometry/support/webMercatorUtils" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__;

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
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/erddap-query/src/runtime/widget.tsx ***!
  \*********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__set_webpack_public_path__": () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/geometry/support/webMercatorUtils */ "esri/geometry/support/webMercatorUtils");
/* harmony import */ var esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/core/reactiveUtils */ "esri/core/reactiveUtils");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/** @jsx jsx */



// import SpatialReference from 'esri/geometry/SpatialReference'



const { useSelector } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux;
function findOceanNameByCode(code) {
    const values = {
        0: 'Arctic',
        1: 'Indian',
        2: 'North Atlantic',
        3: 'North Pacific',
        4: 'South Atlantic',
        5: 'South Pacific',
        6: 'Southern'
    };
    return values[code] ? values[code] : '';
}
function findFisheryRegionByCode(code) {
    const values = {
        0: 'NA',
        1: 'Caribbean',
        2: 'Gulf of Mexico',
        3: 'Mid-Atlantic',
        4: 'New England',
        5: 'Nort Pacific',
        6: 'Pacific',
        7: 'South Atlantic',
        8: 'Western Pacific'
    };
    return values[code] ? values[code] : '';
}
// user-defined type guard using type predicate
function isFeatureLayerDataSourceType(obj) {
    return obj.type === 'FEATURE_LAYER';
}
// mutates the provided array
function convertSqlToErddapParams(sql, searchParams) {
    // console.log('inside convertSqlToErddapParams with ', sql)
    // manipulate SQL string into list of 3-element lists (field, operator, value)
    const clauses = sql
        .replace(/\(+?/g, '') // replace left parens
        .replace(/\)+?/g, '') // replace right parens
        .replace(/LOWER/g, '') // remove the LOWER() function
        .split(/ and /i)
        .map(elem => {
        const t = elem.split(/\s+/);
        // construct 3-element array with field, operator, value. Value may have multiple words which need
        // to be rejoined and replace single quotes with double quotes
        return t.slice(0, 2).concat(t.slice(2).join(' ').replace(/'/g, '"'));
    });
    // console.log(clauses)
    // build key/value pairs for specified parameters
    clauses.filter(elem => elem[0].toLowerCase() === 'vernacularnamecategory').forEach(elem => {
        searchParams.push(`VernacularNameCategory=${elem[2]}`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'imageurl').forEach(elem => {
        searchParams.push('ImageURL!="NA"');
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'depthinmeters').forEach(elem => {
        searchParams.push(`DepthInMeters ${elem[1]} ${elem[2]}`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'scientificname').forEach(elem => {
        searchParams.push(`ScientificName=${elem[2]}`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'observationyear').forEach(elem => {
        searchParams.push(`ObservationYear ${elem[1]} ${elem[2]}`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'fishcouncilregion').forEach(elem => {
        searchParams.push(`FishCouncilRegion="${findFisheryRegionByCode(elem[2])}"`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'ocean').forEach(elem => {
        searchParams.push(`Ocean="${findOceanNameByCode(elem[2])}"`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'phylum').forEach(elem => {
        searchParams.push(`Phylum=${elem[2]}`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'class').forEach(elem => {
        searchParams.push(`Class=${elem[2]}`);
    });
    // Order is a reserved word and renamed in the hosted feature layer
    clauses.filter(elem => elem[0].toLowerCase() === 'order_').forEach(elem => {
        searchParams.push(`Order=${elem[2]}`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'family').forEach(elem => {
        searchParams.push(`Family=${elem[2]}`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'genus').forEach(elem => {
        searchParams.push(`Genus=${elem[2]}`);
    });
}
function formatExtent(mercExtent) {
    const geoExtent = esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_3__["default"].webMercatorToGeographic(mercExtent, false);
    return `${geoExtent.xmin.toFixed(3)}, ${geoExtent.ymin.toFixed(3)}, ${geoExtent.xmax.toFixed(3)}, ${geoExtent.ymax.toFixed(3)}`;
}
function Widget(props) {
    var _a, _b;
    console.log('rendering erddap-query...');
    const [activeDs, setActiveDs] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const [geographicMapExtent, setGeographicMapExtent] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const [mapView, setMapView] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const validBboxRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(false);
    // get state for this widget.
    const widgetState = useSelector((state) => {
        return state.widgetsState[props.widgetId];
    });
    // build ERDDAP Url. Note that uses a non-standard for for search parameters
    const stdFields = 'ShallowFlag,DatasetID,CatalogNumber,SampleID,ImageURL,Repository,ScientificName,VernacularNameCategory,TaxonRank,IdentificationQualifier,Locality,latitude,longitude,DepthInMeters,DepthMethod,ObservationDate,SurveyID,Station,EventID,SamplingEquipment,LocationAccuracy,RecordType,DataProvider';
    const searchParams = [];
    if (mapView && mapView.extent) {
        const mapExtent = esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_3__["default"].webMercatorToGeographic(mapView.extent);
        // flag for antimeridian-crossing extent
        validBboxRef.current = (mapExtent.xmin < mapExtent.xmax);
        searchParams.push(`latitude>=${mapExtent.ymin.toFixed(4)}`);
        searchParams.push(`latitude<=${mapExtent.ymax.toFixed(4)}`);
        searchParams.push(`longitude>=${mapExtent.xmin.toFixed(4)}`);
        searchParams.push(`longitude<=${mapExtent.xmax.toFixed(4)}`);
    }
    if (activeDs && activeDs.getCurrentQueryParams().where) {
        // augments provided object w/ key/value pairs from SQL where clause
        convertSqlToErddapParams(activeDs.getCurrentQueryParams().where, searchParams);
    }
    const erddapUrl = `${props.config.erddapBaseUrl}.html?${stdFields}&${searchParams.join('&')}`;
    console.log({ erddapUrl });
    function copyUrlBtn() {
        // TODO add message to toaster
        navigator.clipboard.writeText(generateErddapUrl()).then(() => { console.debug('copied to clipboard'); });
    }
    function generateErddapUrl(type = 'console') {
        if (type === 'console') {
            console.log(erddapUrl);
            return erddapUrl;
        }
        else {
            console.log(erddapUrl === null || erddapUrl === void 0 ? void 0 : erddapUrl.replace('deep_sea_corals.html', 'deep_sea_corals.csvp'));
            return erddapUrl === null || erddapUrl === void 0 ? void 0 : erddapUrl.replace('deep_sea_corals.html', 'deep_sea_corals.csvp');
        }
    }
    // runs once
    function onDataSourceCreated(ds) {
        const featureLayerDataSource = isFeatureLayerDataSourceType(ds) ? ds : undefined;
        // const dsTitle = featureLayerDataSource.layer.title
        setActiveDs(featureLayerDataSource);
    }
    // runs once
    const activeViewChangeHandler = (jmv) => {
        setMapView(jmv.view);
        // TODO why does this not fire when widget is in Window but works normally when directly in layout?
        // 'updating' property fires multiple times during zoom/pan so using 'stationary' property reduces unnecessary re-renders
        esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_4__["default"].watch(() => jmv.view.stationary, (stationary) => {
            if (stationary) {
                // console.log('ERDDAP extent: ', formatExtent(jmv.view.extent))
                const extent = esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_3__["default"].webMercatorToGeographic(jmv.view.extent);
                setGeographicMapExtent(extent);
            }
        });
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "erddap-query jimu-widget m-2" },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0], widgetId: props.id, onDataSourceCreated: onDataSourceCreated }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b[0], onActiveViewChange: activeViewChangeHandler }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { position: 'absolute', right: '15px' } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { placement: "top", title: "Copy URL to clipboard" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { "aria-label": "Button", icon: true, onClick: copyUrlBtn },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 10H8.723l1.602 1.602-.707.707L6.808 9.5l2.81-2.81.707.708L8.723 9H16zM3 13h4v-1H3zm8-12v1h2v6h-1V3h-1v1H3V3H2v12h10v-4h1v5H1V2h2V1h2.277a1.984 1.984 0 0 1 3.446 0zm-1 1H8v-.318A.682.682 0 0 0 7.318 1h-.636A.682.682 0 0 0 6 1.682V2H4v1h6zM7 6H3v1h4zm-4 4h2V9H3z"/><path fill="none" d="M0 0h16v16H0z"/></svg>' })))),
        validBboxRef.current
            ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { placement: "top", title: "open ERDDAP console to customize output" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "primary", tag: "a", href: generateErddapUrl(), target: "_blank", style: { marginRight: '20px' } }, "Customize")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { placement: "top", title: "Download standard CSV file with current filters applied" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "primary", tag: "a", href: generateErddapUrl('csv'), target: "_blank" }, "Download")))
            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '80%', alignContent: 'center' } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, "Warning: missing or invalid spatial extent. Please ensure area of interest does not cross the antimeridian (i.e. international date line)")),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { placement: "top", title: "Download the entire database in a CSV format" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "primary", tag: "a", href: props.config.csvFileUrl, target: "_blank", style: { width: '230px', marginTop: '20px' } }, "Download Entire Database"))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { margin: '20px' } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, "Note that ERDDAP may take a few minutes to respond to your request"))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9lcmRkYXAtcXVlcnkvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCxlQUFlO0FBUUc7QUFPRTtBQUMyQjtBQUcvQyxnRUFBZ0U7QUFDSztBQUNsQjtBQUNBO0FBTW5ELE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxpREFBVTtBQVNsQyxTQUFTLG1CQUFtQixDQUFFLElBQVk7SUFDeEMsTUFBTSxNQUFNLEdBQUc7UUFDYixDQUFDLEVBQUUsUUFBUTtRQUNYLENBQUMsRUFBRSxRQUFRO1FBQ1gsQ0FBQyxFQUFFLGdCQUFnQjtRQUNuQixDQUFDLEVBQUUsZUFBZTtRQUNsQixDQUFDLEVBQUUsZ0JBQWdCO1FBQ25CLENBQUMsRUFBRSxlQUFlO1FBQ2xCLENBQUMsRUFBRSxVQUFVO0tBQ2Q7SUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMs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ekYsQ0FDTjtZQUNKLENBQUMsQ0FBQyx3REFBSyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUU7Z0JBQ2xELHNNQUNvQyxDQUNoQztRQUVWLHdEQUFLLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO1lBQzdFLCtDQUFDLDRDQUFPLElBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsOENBQThDO2dCQUMzRSwrQ0FBQywyQ0FBTSxJQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsK0JBQW1DLENBQ3JKLENBQ047UUFFTix3REFBSyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO1lBQzVCLGtJQUErRSxDQUMzRSxDQUNGLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvY29yZS9yZWFjdGl2ZVV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlsc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9lcmRkYXAtcXVlcnkvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9jb3JlX3JlYWN0aXZlVXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9zdXBwb3J0X3dlYk1lcmNhdG9yVXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsXG4gIGpzeCxcbiAgdHlwZSBJTVN0YXRlLFxuICBSZWFjdFJlZHV4LFxuICB0eXBlIERhdGFTb3VyY2UsXG4gIERhdGFTb3VyY2VDb21wb25lbnRcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgdHlwZSBKaW11TWFwVmlldyxcbiAgLy8gdHlwZSBKaW11RmVhdHVyZUxheWVyVmlldyxcbiAgSmltdU1hcFZpZXdDb21wb25lbnQsXG4gIHR5cGUgRmVhdHVyZUxheWVyRGF0YVNvdXJjZVxuICAvLyB0eXBlIE1hcERhdGFTb3VyY2Vcbn0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgeyBCdXR0b24sIEljb24sIFRvb2x0aXAgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHR5cGUgRXh0ZW50IGZyb20gJ2VzcmkvZ2VvbWV0cnkvRXh0ZW50J1xuaW1wb3J0IHR5cGUgTWFwVmlldyBmcm9tICdAYXJjZ2lzL2NvcmUvdmlld3MvTWFwVmlldydcbi8vIGltcG9ydCBTcGF0aWFsUmVmZXJlbmNlIGZyb20gJ2VzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZSdcbmltcG9ydCB3ZWJNZXJjYXRvclV0aWxzIGZyb20gJ2VzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzJ1xuaW1wb3J0IHJlYWN0aXZlVXRpbHMgZnJvbSAnZXNyaS9jb3JlL3JlYWN0aXZlVXRpbHMnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuLy8gaW1wb3J0IHsgTGFiZWwsIFJhZGlvLCBkZWZhdWx0TWVzc2FnZXMgYXMgamltdVVJTWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ3VybCdcblxuY29uc3QgeyB1c2VTZWxlY3RvciB9ID0gUmVhY3RSZWR1eFxuXG5pbnRlcmZhY2UgQ29vcmRzT2JqZWN0IHtcbiAgeG1pbjogbnVtYmVyXG4gIHltaW46IG51bWJlclxuICB4bWF4OiBudW1iZXJcbiAgeW1heDogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIGZpbmRPY2Vhbk5hbWVCeUNvZGUgKGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAwOiAnQXJjdGljJyxcbiAgICAxOiAnSW5kaWFuJyxcbiAgICAyOiAnTm9ydGggQXRsYW50aWMnLFxuICAgIDM6ICdOb3J0aCBQYWNpZmljJyxcbiAgICA0OiAnU291dGggQXRsYW50aWMnLFxuICAgIDU6ICdTb3V0aCBQYWNpZmljJyxcbiAgICA2OiAnU291dGhlcm4nXG4gIH1cbiAgcmV0dXJuIHZhbHVlc1tjb2RlXSA/IHZhbHVlc1tjb2RlXSA6ICcnXG59XG5cbmZ1bmN0aW9uIGZpbmRGaXNoZXJ5UmVnaW9uQnlDb2RlIChjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgMDogJ05BJyxcbiAgICAxOiAnQ2FyaWJiZWFuJyxcbiAgICAyOiAnR3VsZiBvZiBNZXhpY28nLFxuICAgIDM6ICdNaWQtQXRsYW50aWMnLFxuICAgIDQ6ICdOZXcgRW5nbGFuZCcsXG4gICAgNTogJ05vcnQgUGFjaWZpYycsXG4gICAgNjogJ1BhY2lmaWMnLFxuICAgIDc6ICdTb3V0aCBBdGxhbnRpYycsXG4gICAgODogJ1dlc3Rlcm4gUGFjaWZpYydcbiAgfVxuICByZXR1cm4gdmFsdWVzW2NvZGVdID8gdmFsdWVzW2NvZGVdIDogJydcbn1cblxuLy8gdXNlci1kZWZpbmVkIHR5cGUgZ3VhcmQgdXNpbmcgdHlwZSBwcmVkaWNhdGVcbmZ1bmN0aW9uIGlzRmVhdHVyZUxheWVyRGF0YVNvdXJjZVR5cGUgKG9iajogRGF0YVNvdXJjZSk6IG9iaiBpcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHtcbiAgcmV0dXJuIChvYmogYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSkudHlwZSA9PT0gJ0ZFQVRVUkVfTEFZRVInXG59XG5cbi8vIG11dGF0ZXMgdGhlIHByb3ZpZGVkIGFycmF5XG5mdW5jdGlvbiBjb252ZXJ0U3FsVG9FcmRkYXBQYXJhbXMgKHNxbDogc3RyaW5nLCBzZWFyY2hQYXJhbXM6IHN0cmluZ1tdKSB7XG4gIC8vIGNvbnNvbGUubG9nKCdpbnNpZGUgY29udmVydFNxbFRvRXJkZGFwUGFyYW1zIHdpdGggJywgc3FsKVxuXG4gIC8vIG1hbmlwdWxhdGUgU1FMIHN0cmluZyBpbnRvIGxpc3Qgb2YgMy1lbGVtZW50IGxpc3RzIChmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKVxuICBjb25zdCBjbGF1c2VzID0gc3FsXG4gICAgLnJlcGxhY2UoL1xcKCs/L2csICcnKSAvLyByZXBsYWNlIGxlZnQgcGFyZW5zXG4gICAgLnJlcGxhY2UoL1xcKSs/L2csICcnKSAvLyByZXBsYWNlIHJpZ2h0IHBhcmVuc1xuICAgIC5yZXBsYWNlKC9MT1dFUi9nLCAnJykgLy8gcmVtb3ZlIHRoZSBMT1dFUigpIGZ1bmN0aW9uXG4gICAgLnNwbGl0KC8gYW5kIC9pKVxuICAgIC5tYXAoZWxlbSA9PiB7XG4gICAgICBjb25zdCB0ID0gZWxlbS5zcGxpdCgvXFxzKy8pXG4gICAgICAvLyBjb25zdHJ1Y3QgMy1lbGVtZW50IGFycmF5IHdpdGggZmllbGQsIG9wZXJhdG9yLCB2YWx1ZS4gVmFsdWUgbWF5IGhhdmUgbXVsdGlwbGUgd29yZHMgd2hpY2ggbmVlZFxuICAgICAgLy8gdG8gYmUgcmVqb2luZWQgYW5kIHJlcGxhY2Ugc2luZ2xlIHF1b3RlcyB3aXRoIGRvdWJsZSBxdW90ZXNcbiAgICAgIHJldHVybiB0LnNsaWNlKDAsIDIpLmNvbmNhdCh0LnNsaWNlKDIpLmpvaW4oJyAnKS5yZXBsYWNlKC8nL2csICdcIicpKVxuICAgIH0pXG4gIC8vIGNvbnNvbGUubG9nKGNsYXVzZXMpXG5cbiAgLy8gYnVpbGQga2V5L3ZhbHVlIHBhaXJzIGZvciBzcGVjaWZpZWQgcGFyYW1ldGVyc1xuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3Zlcm5hY3VsYXJuYW1lY2F0ZWdvcnknKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBWZXJuYWN1bGFyTmFtZUNhdGVnb3J5PSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnaW1hZ2V1cmwnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKCdJbWFnZVVSTCE9XCJOQVwiJylcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2RlcHRoaW5tZXRlcnMnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBEZXB0aEluTWV0ZXJzICR7ZWxlbVsxXX0gJHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdzY2llbnRpZmljbmFtZScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYFNjaWVudGlmaWNOYW1lPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnb2JzZXJ2YXRpb255ZWFyJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgT2JzZXJ2YXRpb25ZZWFyICR7ZWxlbVsxXX0gJHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdmaXNoY291bmNpbHJlZ2lvbicpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYEZpc2hDb3VuY2lsUmVnaW9uPVwiJHtmaW5kRmlzaGVyeVJlZ2lvbkJ5Q29kZShlbGVtWzJdKX1cImApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdvY2VhbicpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYE9jZWFuPVwiJHtmaW5kT2NlYW5OYW1lQnlDb2RlKGVsZW1bMl0pfVwiYClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3BoeWx1bScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYFBoeWx1bT0ke2VsZW1bMl19YClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2NsYXNzJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgQ2xhc3M9JHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgLy8gT3JkZXIgaXMgYSByZXNlcnZlZCB3b3JkIGFuZCByZW5hbWVkIGluIHRoZSBob3N0ZWQgZmVhdHVyZSBsYXllclxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ29yZGVyXycpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYE9yZGVyPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZmFtaWx5JykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgRmFtaWx5PSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZ2VudXMnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBHZW51cz0ke2VsZW1bMl19YClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZm9ybWF0RXh0ZW50IChtZXJjRXh0ZW50OiBFeHRlbnQpIHtcbiAgY29uc3QgZ2VvRXh0ZW50ID0gd2ViTWVyY2F0b3JVdGlscy53ZWJNZXJjYXRvclRvR2VvZ3JhcGhpYyhtZXJjRXh0ZW50LCBmYWxzZSkgYXMgRXh0ZW50XG4gIHJldHVybiBgJHtnZW9FeHRlbnQueG1pbi50b0ZpeGVkKDMpfSwgJHtnZW9FeHRlbnQueW1pbi50b0ZpeGVkKDMpfSwgJHtnZW9FeHRlbnQueG1heC50b0ZpeGVkKDMpfSwgJHtnZW9FeHRlbnQueW1heC50b0ZpeGVkKDMpfWBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgZXJkZGFwLXF1ZXJ5Li4uJylcbiAgY29uc3QgW2FjdGl2ZURzLCBzZXRBY3RpdmVEc10gPSB1c2VTdGF0ZTxGZWF0dXJlTGF5ZXJEYXRhU291cmNlPigpXG4gIGNvbnN0IFtnZW9ncmFwaGljTWFwRXh0ZW50LCBzZXRHZW9ncmFwaGljTWFwRXh0ZW50XSA9IHVzZVN0YXRlPEV4dGVudD4oKVxuICBjb25zdCBbbWFwVmlldywgc2V0TWFwVmlld10gPSB1c2VTdGF0ZTxNYXBWaWV3PigpXG4gIGNvbnN0IHZhbGlkQmJveFJlZiA9IHVzZVJlZihmYWxzZSlcblxuICAvLyBnZXQgc3RhdGUgZm9yIHRoaXMgd2lkZ2V0LlxuICBjb25zdCB3aWRnZXRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZS53aWRnZXRzU3RhdGVbcHJvcHMud2lkZ2V0SWRdXG4gIH0pXG5cbiAgLy8gYnVpbGQgRVJEREFQIFVybC4gTm90ZSB0aGF0IHVzZXMgYSBub24tc3RhbmRhcmQgZm9yIGZvciBzZWFyY2ggcGFyYW1ldGVyc1xuICBjb25zdCBzdGRGaWVsZHMgPSAnU2hhbGxvd0ZsYWcsRGF0YXNldElELENhdGFsb2dOdW1iZXIsU2FtcGxlSUQsSW1hZ2VVUkwsUmVwb3NpdG9yeSxTY2llbnRpZmljTmFtZSxWZXJuYWN1bGFyTmFtZUNhdGVnb3J5LFRheG9uUmFuayxJZGVudGlmaWNhdGlvblF1YWxpZmllcixMb2NhbGl0eSxsYXRpdHVkZSxsb25naXR1ZGUsRGVwdGhJbk1ldGVycyxEZXB0aE1ldGhvZCxPYnNlcnZhdGlvbkRhdGUsU3VydmV5SUQsU3RhdGlvbixFdmVudElELFNhbXBsaW5nRXF1aXBtZW50LExvY2F0aW9uQWNjdXJhY3ksUmVjb3JkVHlwZSxEYXRhUHJvdmlkZXInXG4gIGNvbnN0IHNlYXJjaFBhcmFtczogc3RyaW5nW10gPSBbXVxuXG4gIGlmIChtYXBWaWV3ICYmIG1hcFZpZXcuZXh0ZW50KSB7XG4gICAgY29uc3QgbWFwRXh0ZW50ID0gd2ViTWVyY2F0b3JVdGlscy53ZWJNZXJjYXRvclRvR2VvZ3JhcGhpYyhtYXBWaWV3LmV4dGVudCkgYXMgRXh0ZW50XG4gICAgLy8gZmxhZyBmb3IgYW50aW1lcmlkaWFuLWNyb3NzaW5nIGV4dGVudFxuICAgIHZhbGlkQmJveFJlZi5jdXJyZW50ID0gKG1hcEV4dGVudC54bWluIDwgbWFwRXh0ZW50LnhtYXgpXG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYGxhdGl0dWRlPj0ke21hcEV4dGVudC55bWluLnRvRml4ZWQoNCl9YClcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgbGF0aXR1ZGU8PSR7bWFwRXh0ZW50LnltYXgudG9GaXhlZCg0KX1gKVxuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBsb25naXR1ZGU+PSR7bWFwRXh0ZW50LnhtaW4udG9GaXhlZCg0KX1gKVxuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBsb25naXR1ZGU8PSR7bWFwRXh0ZW50LnhtYXgudG9GaXhlZCg0KX1gKVxuICB9XG4gIGlmIChhY3RpdmVEcyAmJiBhY3RpdmVEcy5nZXRDdXJyZW50UXVlcnlQYXJhbXMoKS53aGVyZSkge1xuICAgIC8vIGF1Z21lbnRzIHByb3ZpZGVkIG9iamVjdCB3LyBrZXkvdmFsdWUgcGFpcnMgZnJvbSBTUUwgd2hlcmUgY2xhdXNlXG4gICAgY29udmVydFNxbFRvRXJkZGFwUGFyYW1zKGFjdGl2ZURzLmdldEN1cnJlbnRRdWVyeVBhcmFtcygpLndoZXJlLCBzZWFyY2hQYXJhbXMpXG4gIH1cbiAgY29uc3QgZXJkZGFwVXJsID0gYCR7cHJvcHMuY29uZmlnLmVyZGRhcEJhc2VVcmx9Lmh0bWw/JHtzdGRGaWVsZHN9JiR7c2VhcmNoUGFyYW1zLmpvaW4oJyYnKX1gXG4gIGNvbnNvbGUubG9nKHsgZXJkZGFwVXJsIH0pXG5cbiAgZnVuY3Rpb24gY29weVVybEJ0biAoKSB7XG4gICAgLy8gVE9ETyBhZGQgbWVzc2FnZSB0byB0b2FzdGVyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZ2VuZXJhdGVFcmRkYXBVcmwoKSkudGhlbigoKSA9PiB7IGNvbnNvbGUuZGVidWcoJ2NvcGllZCB0byBjbGlwYm9hcmQnKSB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVFcmRkYXBVcmwgKHR5cGUgPSAnY29uc29sZScpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NvbnNvbGUnKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcmRkYXBVcmwpXG4gICAgICByZXR1cm4gZXJkZGFwVXJsXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGVyZGRhcFVybD8ucmVwbGFjZSgnZGVlcF9zZWFfY29yYWxzLmh0bWwnLCAnZGVlcF9zZWFfY29yYWxzLmNzdnAnKSlcbiAgICAgIHJldHVybiBlcmRkYXBVcmw/LnJlcGxhY2UoJ2RlZXBfc2VhX2NvcmFscy5odG1sJywgJ2RlZXBfc2VhX2NvcmFscy5jc3ZwJylcbiAgICB9XG4gIH1cblxuICAvLyBydW5zIG9uY2VcbiAgZnVuY3Rpb24gb25EYXRhU291cmNlQ3JlYXRlZCAoZHM6IERhdGFTb3VyY2UpIHtcbiAgICBjb25zdCBmZWF0dXJlTGF5ZXJEYXRhU291cmNlID0gaXNGZWF0dXJlTGF5ZXJEYXRhU291cmNlVHlwZShkcykgPyBkcyA6IHVuZGVmaW5lZFxuICAgIC8vIGNvbnN0IGRzVGl0bGUgPSBmZWF0dXJlTGF5ZXJEYXRhU291cmNlLmxheWVyLnRpdGxlXG4gICAgc2V0QWN0aXZlRHMoZmVhdHVyZUxheWVyRGF0YVNvdXJjZSlcbiAgfVxuXG4gIC8vIHJ1bnMgb25jZVxuICBjb25zdCBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgc2V0TWFwVmlldyhqbXYudmlldyBhcyBNYXBWaWV3KVxuICAgIC8vIFRPRE8gd2h5IGRvZXMgdGhpcyBub3QgZmlyZSB3aGVuIHdpZGdldCBpcyBpbiBXaW5kb3cgYnV0IHdvcmtzIG5vcm1hbGx5IHdoZW4gZGlyZWN0bHkgaW4gbGF5b3V0P1xuICAgIC8vICd1cGRhdGluZycgcHJvcGVydHkgZmlyZXMgbXVsdGlwbGUgdGltZXMgZHVyaW5nIHpvb20vcGFuIHNvIHVzaW5nICdzdGF0aW9uYXJ5JyBwcm9wZXJ0eSByZWR1Y2VzIHVubmVjZXNzYXJ5IHJlLXJlbmRlcnNcbiAgICByZWFjdGl2ZVV0aWxzLndhdGNoKFxuICAgICAgKCkgPT4gam12LnZpZXcuc3RhdGlvbmFyeSxcbiAgICAgIChzdGF0aW9uYXJ5KSA9PiB7XG4gICAgICAgIGlmIChzdGF0aW9uYXJ5KSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ0VSRERBUCBleHRlbnQ6ICcsIGZvcm1hdEV4dGVudChqbXYudmlldy5leHRlbnQpKVxuICAgICAgICAgIGNvbnN0IGV4dGVudCA9IHdlYk1lcmNhdG9yVXRpbHMud2ViTWVyY2F0b3JUb0dlb2dyYXBoaWMoam12LnZpZXcuZXh0ZW50KSBhcyBFeHRlbnRcbiAgICAgICAgICBzZXRHZW9ncmFwaGljTWFwRXh0ZW50KGV4dGVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJlcmRkYXAtcXVlcnkgamltdS13aWRnZXQgbS0yXCI+XG4gICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxuICAgICAgICB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlcz8uWzBdfVxuICAgICAgICB3aWRnZXRJZD17cHJvcHMuaWR9XG4gICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e29uRGF0YVNvdXJjZUNyZWF0ZWR9XG4gICAgICAvPlxuICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgIC8+XG4gICAgICB7LyogPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ3JpZ2h0JyB9fT5cbiAgICAgICAgPFRleHRBcmVhIHN0eWxlPXt7d2lkdGg6XCI4NSVcIn19IHJlYWRPbmx5PVwidHJ1ZVwiIHZhbHVlPXtlcmRkYXBVcmx9IC8+XG4gICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17ZXJkZGFwVXJsfSBzdHlsZT17eyB3aWR0aDogJzg1JScsIGhlaWdodDogJzI1MHB4Jywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fSByZWFkT25seT17dHJ1ZX0vPlxuICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkNvcHkgVVJMIHRvIGNsaXBib2FyZFwiPlxuICAgICAgICAgIDxCdXR0b24gYXJpYS1sYWJlbD1cIkJ1dHRvblwiIGljb24gb25DbGljaz17Y29weVVybEJ0bn0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XG4gICAgICAgICAgICA8SWNvbiBpY29uPSc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PHBhdGggZD1cIk0xNiAxMEg4LjcyM2wxLjYwMiAxLjYwMi0uNzA3LjcwN0w2LjgwOCA5LjVsMi44MS0yLjgxLjcwNy43MDhMOC43MjMgOUgxNnpNMyAxM2g0di0xSDN6bTgtMTJ2MWgydjZoLTFWM2gtMXYxSDNWM0gydjEyaDEwdi00aDF2NUgxVjJoMlYxaDIuMjc3YTEuOTg0IDEuOTg0IDAgMCAxIDMuNDQ2IDB6bS0xIDFIOHYtLjMxOEEuNjgyLjY4MiAwIDAgMCA3LjMxOCAxaC0uNjM2QS42ODIuNjgyIDAgMCAwIDYgMS42ODJWMkg0djFoNnpNNyA2SDN2MWg0em0tNCA0aDJWOUgzelwiLz48cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDE2djE2SDB6XCIvPjwvc3ZnPidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnMTVweCcgfX0+XG4gICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJDb3B5IFVSTCB0byBjbGlwYm9hcmRcIj5cbiAgICAgICAgICA8QnV0dG9uIGFyaWEtbGFiZWw9XCJCdXR0b25cIiBpY29uIG9uQ2xpY2s9e2NvcHlVcmxCdG59PlxuICAgICAgICAgICAgPEljb24gaWNvbj0nPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGQ9XCJNMTYgMTBIOC43MjNsMS42MDIgMS42MDItLjcwNy43MDdMNi44MDggOS41bDIuODEtMi44MS43MDcuNzA4TDguNzIzIDlIMTZ6TTMgMTNoNHYtMUgzem04LTEydjFoMnY2aC0xVjNoLTF2MUgzVjNIMnYxMmgxMHYtNGgxdjVIMVYyaDJWMWgyLjI3N2ExLjk4NCAxLjk4NCAwIDAgMSAzLjQ0NiAwem0tMSAxSDh2LS4zMThBLjY4Mi42ODIgMCAwIDAgNy4zMTggMWgtLjYzNkEuNjgyLjY4MiAwIDAgMCA2IDEuNjgyVjJINHYxaDZ6TTcgNkgzdjFoNHptLTQgNGgyVjlIM3pcIi8+PHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgxNnYxNkgwelwiLz48L3N2Zz4nXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L2Rpdj5cbiAgICAgIHt2YWxpZEJib3hSZWYuY3VycmVudFxuICAgICAgICA/IDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIm9wZW4gRVJEREFQIGNvbnNvbGUgdG8gY3VzdG9taXplIG91dHB1dFwiPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiB0YWc9XCJhXCIgaHJlZj17Z2VuZXJhdGVFcmRkYXBVcmwoKX0gdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcyMHB4JyB9fT5DdXN0b21pemU8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkRvd25sb2FkIHN0YW5kYXJkIENTViBmaWxlIHdpdGggY3VycmVudCBmaWx0ZXJzIGFwcGxpZWRcIj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgdGFnPVwiYVwiIGhyZWY9e2dlbmVyYXRlRXJkZGFwVXJsKCdjc3YnKX0gdGFyZ2V0PVwiX2JsYW5rXCIgPkRvd25sb2FkPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICAgICA6IDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc4MCUnLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgPHA+V2FybmluZzogbWlzc2luZyBvciBpbnZhbGlkIHNwYXRpYWwgZXh0ZW50LiBQbGVhc2UgZW5zdXJlIGFyZWEgb2YgaW50ZXJlc3QgZG9lcyBub3QgY3Jvc3MgdGhlIGFudGltZXJpZGlhblxuICAgICAgICAgICAgICAoaS5lLiBpbnRlcm5hdGlvbmFsIGRhdGUgbGluZSk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJEb3dubG9hZCB0aGUgZW50aXJlIGRhdGFiYXNlIGluIGEgQ1NWIGZvcm1hdFwiPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiB0YWc9XCJhXCIgaHJlZj17cHJvcHMuY29uZmlnLmNzdkZpbGVVcmx9IHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IHdpZHRoOiAnMjMwcHgnLCBtYXJnaW5Ub3A6ICcyMHB4JyB9fT5Eb3dubG9hZCBFbnRpcmUgRGF0YWJhc2U8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMjBweCcgfX0+XG4gICAgICAgIDxzcGFuPk5vdGUgdGhhdCBFUkREQVAgbWF5IHRha2UgYSBmZXcgbWludXRlcyB0byByZXNwb25kIHRvIHlvdXIgcmVxdWVzdDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9