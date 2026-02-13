System.register(["jimu-core","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/ocis/src/ocis-display.tsx":
/*!***********************************************************!*\
  !*** ./your-extensions/widgets/ocis/src/ocis-display.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataDisplay)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _useLoadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLoadJson */ "./your-extensions/widgets/ocis/src/useLoadJson.ts");


const fields = [
    { index: 0, display: 'Hex Grid ID', name: 'grid_id' },
    { index: 1, display: 'Area of Blue Carbon Habitat (sq. km)', name: 'b_carb_km2' },
    { index: 2, display: 'Maxp (OBIS)', name: 'obis_maxp' },
    { index: 3, display: 'Count of OBIS Records', name: 'obis_n' },
    { index: 4, display: 'Shannon Biodiversity Index (OBIS)', name: 'obis_shannon' },
    { index: 5, display: 'Species Richness (OBIS)', name: 'obis_sp' },
    { index: 6, display: 'Count of Marine Protected Areas', name: 'mpa_count' },
    { index: 7, display: 'Count of Marine Managed Areas', name: 'prosea_count' },
    { index: 8, display: 'Weighted Level of Fishing Protection', name: 'prosea_lvl' },
    { index: 9, display: 'Minimum Depth (meters)', name: 'bathy_min' },
    { index: 10, display: 'Maximum Depth (meters)', name: 'bathy_max' },
    { index: 11, display: 'Mean of Depth (meters)', name: 'bathy_mean' },
    { index: 12, display: 'Minimum Slope', name: 'slope_min' },
    { index: 13, display: 'Maximum Slope', name: 'slope_max' },
    { index: 14, display: 'Mean Slope', name: 'slope_mean' },
    { index: 15, display: 'Predominant Seafloor Lithology Type', name: 'lithology' },
    { index: 16, display: 'Count of Hydrographic Surveys', name: 'survey_count' },
    { index: 17, display: 'Total Area of Hydrographic Surveys (sq. km)', name: 'survey_area_km' },
    { index: 18, display: 'Count of Expedition Tracklines', name: 'oer_track_count' },
    { index: 19, display: 'Total Length of Expedition Tracklines (sq. km)', name: 'oer_track_km' },
    { index: 20, display: 'Global Vessel Density', name: 'ship_global' },
    { index: 21, display: 'Commercial Vessel Density', name: 'ship_comm' },
    { index: 22, display: 'Fishing Vessel Density', name: 'ship_fish' },
    { index: 23, display: 'Leisure Vessel Density', name: 'ship_leisure' },
    { index: 24, display: 'Oil and Gas Vessel Density', name: 'ship_oil_gas' },
    { index: 25, display: 'Passenger Vessel Density', name: 'ship_pass' },
    { index: 26, display: 'Global Fishing Watch - Fishing Hours (2020)', name: 'gfw_fishhours' },
    { index: 27, display: 'Global Fishing Watch - Hours (2020)', name: 'gfw_hours' },
    { index: 28, display: 'Count of Oil and Gas Platforms', name: 'platform_count' },
    { index: 29, display: 'Count of Submarine Cables', name: 'cable_count' }
];
function buildUrl(h3) {
    const ocisFeatureServiceUrl = 'https://services.arcgis.com/bDAhvQYMG4WL8O5o/ArcGIS/rest/services/ocis_sde_ocis_master_view_h4_view/FeatureServer/1/query';
    const searchParams = new URLSearchParams();
    searchParams.set('where', `grid_id='${h3}'`);
    searchParams.set('returnGeometry', 'false');
    searchParams.set('outFields', fields.map(f => f.name).join(','));
    searchParams.set('f', 'pjson');
    return (`${ocisFeatureServiceUrl}?${searchParams.toString()}`);
}
function formatFloatValue(str) {
    const num = parseFloat(str);
    if (Number.isNaN(num)) {
        return '';
    }
    // round *up* to 2 decimal places for display purposes. Always use positive values
    return (Math.abs(Math.ceil(num * 100) / 100)).toLocaleString();
}
function formatIntValue(str) {
    const num = parseInt(str);
    // if string cannot be parsed to a number, return empty string to avoid displaying "NaN"
    if (Number.isNaN(num)) {
        return '';
    }
    return num.toLocaleString();
}
function DataDisplay({ h3 }) {
    const url = buildUrl(h3);
    console.log('OCIS query URL: ', url);
    const { data, loading, error } = (0,_useLoadJson__WEBPACK_IMPORTED_MODULE_1__.useLoadJSON)(url);
    if (loading) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, "Loading...");
    }
    if (error) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
            "Error: ",
            error.message);
    }
    console.log('data from OCIS query: ', data);
    if (data.features.length === 0) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
            "No data available for grid ID ",
            h3,
            ".");
    }
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { paddingLeft: '10px', overflowY: 'auto' } },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("table", null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tbody", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[0].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[0].name])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { colSpan: 2, style: { fontWeight: 'bold' } }, "Biodiversity")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[1].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[1].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[2].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[2].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[3].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatIntValue(data.features[0].attributes[fields[3].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[4].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[4].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[5].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[5].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { colSpan: 2, style: { fontWeight: 'bold' } }, "Resource Management")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[6].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatIntValue(data.features[0].attributes[fields[6].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[7].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatIntValue(data.features[0].attributes[fields[7].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[8].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[8].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { colSpan: 2, style: { fontWeight: 'bold' } }, "Bathymetry & Seafloor")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[9].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[9].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[10].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[10].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[11].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[11].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[12].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[12].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[13].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[13].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[14].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[14].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[15].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatIntValue(data.features[0].attributes[fields[15].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { colSpan: 2, style: { fontWeight: 'bold' } }, "Surveys & Exploration")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[16].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatIntValue(data.features[0].attributes[fields[16].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[17].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[17].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[18].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatIntValue(data.features[0].attributes[fields[18].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[19].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[19].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { colSpan: 2, style: { fontWeight: 'bold' } }, "Human Activity (Shipping, Fishing & Infrastructure)")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[20].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[20].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[21].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[21].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[22].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[22].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[23].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[23].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[24].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[24].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[25].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[25].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[26].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[26].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[27].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatFloatValue(data.features[0].attributes[fields[27].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[28].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatIntValue(data.features[0].attributes[fields[28].name]))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[29].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, formatIntValue(data.features[0].attributes[fields[29].name])))))));
}


/***/ }),

/***/ "./your-extensions/widgets/ocis/src/useLoadJson.ts":
/*!*********************************************************!*\
  !*** ./your-extensions/widgets/ocis/src/useLoadJson.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLoadJSON: () => (/* binding */ useLoadJSON)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

/**
 * Custom hook to load and parse a JSON file
 * @param url - The URL or path to the JSON file
 * @returns An object containing the parsed data, loading state, and any errors
 */
function useLoadJSON(url) {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        fetch(url)
            .then(res => {
            if (!res.ok) {
                console.log('Fetch error:', res);
                throw new Error('Network response was not ok');
            }
            // console.log('Fetch successful:', res)
            return res.json();
        })
            .then((d) => { setData(d); })
            .catch((e) => { setError(e instanceof Error ? e : new Error(String(e))); })
            .finally(() => { setLoading(false); });
    }, [url]);
    return { data, loading, error };
}


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
/*!*************************************************************!*\
  !*** ./your-extensions/widgets/ocis/src/runtime/widget.tsx ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _ocis_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ocis-display */ "./your-extensions/widgets/ocis/src/ocis-display.tsx");
/** @jsx jsx */
/*
 * there are two runtime events which impact this widget:
 *
 * 1) mapClick
 * this only requires that the hexbin summary be updated
 *
 * 2) filter changes (i.e. DataSource queryParams)
 * this requires that the graphics layer be updated (both boundaries and symbology)
 *
 * Both are handled (indirectly) via respective useEffect hooks, i.e.
 * event changes state -> triggers re-render -> useEffect runs
 *
 * Note that if a individual hexbin was selected at the time the queryParams
 * change, it will be deselected and the summary cleared. This is necessary
 * since a change in queryParams may cause a hexbin which was formerly displayed
 * to no longer be drawn
 */


const { useSelector } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux;
function Widget(props) {
    console.log('inside OCIS widget with props: ', props);
    // get state for this widget
    const widgetState = useSelector((state) => {
        return state.widgetsState[props.widgetId];
    });
    console.log(`inside OCIS: h3 = ${widgetState === null || widgetState === void 0 ? void 0 : widgetState.h3}`);
    if (!(widgetState === null || widgetState === void 0 ? void 0 : widgetState.h3)) {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, "No H3 cell selected"))));
    }
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, widgetState.h3 ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ocis_display__WEBPACK_IMPORTED_MODULE_1__["default"], { h3: widgetState.h3 }) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, "Please select a hexagonal area to summarize")));
}
Widget.mapExtraStateProps = (state, ownProps) => {
    var _a;
    return {
        h3: ((_a = state.widgetsState[ownProps.widgetId]) === null || _a === void 0 ? void 0 : _a.h3) || null
    };
};
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlEQUFVO0FBRW5CLFNBQVMsTUFBTSxDQUFFLEtBQTRDO0lBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxDQUFDO0lBRXJELDRCQUE0QjtJQUM1QixNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtRQUNqRCxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUMzQyxDQUFDLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsRUFBRSxFQUFFLENBQUM7SUFFbkQsSUFBSSxDQUFDLFlBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxFQUFFLEdBQUUsQ0FBQztRQUNyQixPQUFPLENBQ0w7WUFDRTtnQkFDRSxnRkFBMEIsQ0FDdEIsQ0FDSixDQUNMO0lBQ0gsQ0FBQztJQUVELE9BQU8sQ0FDTCw0REFDRyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQywrQ0FBQyxxREFBVyxJQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRSxHQUFJLENBQUMsQ0FBQyxDQUFDLHdHQUFrRCxDQUN0RyxDQUNQO0FBQ0gsQ0FBQztBQUVELE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLEtBQWMsRUFBRSxRQUFrQyxFQUFjLEVBQUU7O0lBQzdGLE9BQU87UUFDTCxFQUFFLEVBQUUsWUFBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLDBDQUFFLEVBQUUsS0FBSSxJQUFJO0tBQ3REO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29jaXMvc3JjL29jaXMtZGlzcGxheS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29jaXMvc3JjL3VzZUxvYWRKc29uLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29jaXMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdXNlTG9hZEpTT04gfSBmcm9tICcuL3VzZUxvYWRKc29uJ1xuXG5jb25zdCBmaWVsZHMgPSBbXG4gIHsgaW5kZXg6IDAsIGRpc3BsYXk6ICdIZXggR3JpZCBJRCcsIG5hbWU6ICdncmlkX2lkJyB9LFxuICB7IGluZGV4OiAxLCBkaXNwbGF5OiAnQXJlYSBvZiBCbHVlIENhcmJvbiBIYWJpdGF0IChzcS4ga20pJywgbmFtZTogJ2JfY2FyYl9rbTInIH0sXG4gIHsgaW5kZXg6IDIsIGRpc3BsYXk6ICdNYXhwIChPQklTKScsIG5hbWU6ICdvYmlzX21heHAnIH0sXG4gIHsgaW5kZXg6IDMsIGRpc3BsYXk6ICdDb3VudCBvZiBPQklTIFJlY29yZHMnLCBuYW1lOiAnb2Jpc19uJyB9LFxuICB7IGluZGV4OiA0LCBkaXNwbGF5OiAnU2hhbm5vbiBCaW9kaXZlcnNpdHkgSW5kZXggKE9CSVMpJywgbmFtZTogJ29iaXNfc2hhbm5vbicgfSxcbiAgeyBpbmRleDogNSwgZGlzcGxheTogJ1NwZWNpZXMgUmljaG5lc3MgKE9CSVMpJywgbmFtZTogJ29iaXNfc3AnIH0sXG4gIHsgaW5kZXg6IDYsIGRpc3BsYXk6ICdDb3VudCBvZiBNYXJpbmUgUHJvdGVjdGVkIEFyZWFzJywgbmFtZTogJ21wYV9jb3VudCcgfSxcbiAgeyBpbmRleDogNywgZGlzcGxheTogJ0NvdW50IG9mIE1hcmluZSBNYW5hZ2VkIEFyZWFzJywgbmFtZTogJ3Byb3NlYV9jb3VudCcgfSxcbiAgeyBpbmRleDogOCwgZGlzcGxheTogJ1dlaWdodGVkIExldmVsIG9mIEZpc2hpbmcgUHJvdGVjdGlvbicsIG5hbWU6ICdwcm9zZWFfbHZsJyB9LFxuICB7IGluZGV4OiA5LCBkaXNwbGF5OiAnTWluaW11bSBEZXB0aCAobWV0ZXJzKScsIG5hbWU6ICdiYXRoeV9taW4nIH0sXG4gIHsgaW5kZXg6IDEwLCBkaXNwbGF5OiAnTWF4aW11bSBEZXB0aCAobWV0ZXJzKScsIG5hbWU6ICdiYXRoeV9tYXgnIH0sXG4gIHsgaW5kZXg6IDExLCBkaXNwbGF5OiAnTWVhbiBvZiBEZXB0aCAobWV0ZXJzKScsIG5hbWU6ICdiYXRoeV9tZWFuJyB9LFxuICB7IGluZGV4OiAxMiwgZGlzcGxheTogJ01pbmltdW0gU2xvcGUnLCBuYW1lOiAnc2xvcGVfbWluJyB9LFxuICB7IGluZGV4OiAxMywgZGlzcGxheTogJ01heGltdW0gU2xvcGUnLCBuYW1lOiAnc2xvcGVfbWF4JyB9LFxuICB7IGluZGV4OiAxNCwgZGlzcGxheTogJ01lYW4gU2xvcGUnLCBuYW1lOiAnc2xvcGVfbWVhbicgfSxcbiAgeyBpbmRleDogMTUsIGRpc3BsYXk6ICdQcmVkb21pbmFudCBTZWFmbG9vciBMaXRob2xvZ3kgVHlwZScsIG5hbWU6ICdsaXRob2xvZ3knIH0sXG4gIHsgaW5kZXg6IDE2LCBkaXNwbGF5OiAnQ291bnQgb2YgSHlkcm9ncmFwaGljIFN1cnZleXMnLCBuYW1lOiAnc3VydmV5X2NvdW50JyB9LFxuICB7IGluZGV4OiAxNywgZGlzcGxheTogJ1RvdGFsIEFyZWEgb2YgSHlkcm9ncmFwaGljIFN1cnZleXMgKHNxLiBrbSknLCBuYW1lOiAnc3VydmV5X2FyZWFfa20nIH0sXG4gIHsgaW5kZXg6IDE4LCBkaXNwbGF5OiAnQ291bnQgb2YgRXhwZWRpdGlvbiBUcmFja2xpbmVzJywgbmFtZTogJ29lcl90cmFja19jb3VudCcgfSxcbiAgeyBpbmRleDogMTksIGRpc3BsYXk6ICdUb3RhbCBMZW5ndGggb2YgRXhwZWRpdGlvbiBUcmFja2xpbmVzIChzcS4ga20pJywgbmFtZTogJ29lcl90cmFja19rbScgfSxcbiAgeyBpbmRleDogMjAsIGRpc3BsYXk6ICdHbG9iYWwgVmVzc2VsIERlbnNpdHknLCBuYW1lOiAnc2hpcF9nbG9iYWwnIH0sXG4gIHsgaW5kZXg6IDIxLCBkaXNwbGF5OiAnQ29tbWVyY2lhbCBWZXNzZWwgRGVuc2l0eScsIG5hbWU6ICdzaGlwX2NvbW0nIH0sXG4gIHsgaW5kZXg6IDIyLCBkaXNwbGF5OiAnRmlzaGluZyBWZXNzZWwgRGVuc2l0eScsIG5hbWU6ICdzaGlwX2Zpc2gnIH0sXG4gIHsgaW5kZXg6IDIzLCBkaXNwbGF5OiAnTGVpc3VyZSBWZXNzZWwgRGVuc2l0eScsIG5hbWU6ICdzaGlwX2xlaXN1cmUnIH0sXG4gIHsgaW5kZXg6IDI0LCBkaXNwbGF5OiAnT2lsIGFuZCBHYXMgVmVzc2VsIERlbnNpdHknLCBuYW1lOiAnc2hpcF9vaWxfZ2FzJyB9LFxuICB7IGluZGV4OiAyNSwgZGlzcGxheTogJ1Bhc3NlbmdlciBWZXNzZWwgRGVuc2l0eScsIG5hbWU6ICdzaGlwX3Bhc3MnIH0sXG4gIHsgaW5kZXg6IDI2LCBkaXNwbGF5OiAnR2xvYmFsIEZpc2hpbmcgV2F0Y2ggLSBGaXNoaW5nIEhvdXJzICgyMDIwKScsIG5hbWU6ICdnZndfZmlzaGhvdXJzJyB9LFxuICB7IGluZGV4OiAyNywgZGlzcGxheTogJ0dsb2JhbCBGaXNoaW5nIFdhdGNoIC0gSG91cnMgKDIwMjApJywgbmFtZTogJ2dmd19ob3VycycgfSxcbiAgeyBpbmRleDogMjgsIGRpc3BsYXk6ICdDb3VudCBvZiBPaWwgYW5kIEdhcyBQbGF0Zm9ybXMnLCBuYW1lOiAncGxhdGZvcm1fY291bnQnIH0sXG4gIHsgaW5kZXg6IDI5LCBkaXNwbGF5OiAnQ291bnQgb2YgU3VibWFyaW5lIENhYmxlcycsIG5hbWU6ICdjYWJsZV9jb3VudCcgfVxuXVxuXG5mdW5jdGlvbiBidWlsZFVybCAoaDM6IHN0cmluZykge1xuICBjb25zdCBvY2lzRmVhdHVyZVNlcnZpY2VVcmwgPSAnaHR0cHM6Ly9zZXJ2aWNlcy5hcmNnaXMuY29tL2JEQWh2UVlNRzRXTDhPNW8vQXJjR0lTL3Jlc3Qvc2VydmljZXMvb2Npc19zZGVfb2Npc19tYXN0ZXJfdmlld19oNF92aWV3L0ZlYXR1cmVTZXJ2ZXIvMS9xdWVyeSdcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIHNlYXJjaFBhcmFtcy5zZXQoJ3doZXJlJywgYGdyaWRfaWQ9JyR7aDN9J2ApXG4gIHNlYXJjaFBhcmFtcy5zZXQoJ3JldHVybkdlb21ldHJ5JywgJ2ZhbHNlJylcbiAgc2VhcmNoUGFyYW1zLnNldCgnb3V0RmllbGRzJywgZmllbGRzLm1hcChmID0+IGYubmFtZSkuam9pbignLCcpKVxuICBzZWFyY2hQYXJhbXMuc2V0KCdmJywgJ3Bqc29uJylcbiAgcmV0dXJuIChgJHtvY2lzRmVhdHVyZVNlcnZpY2VVcmx9PyR7c2VhcmNoUGFyYW1zLnRvU3RyaW5nKCl9YClcbn1cblxuZnVuY3Rpb24gZm9ybWF0RmxvYXRWYWx1ZSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHN0cilcbiAgaWYgKE51bWJlci5pc05hTihudW0pKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbiAgLy8gcm91bmQgKnVwKiB0byAyIGRlY2ltYWwgcGxhY2VzIGZvciBkaXNwbGF5IHB1cnBvc2VzLiBBbHdheXMgdXNlIHBvc2l0aXZlIHZhbHVlc1xuICByZXR1cm4gKE1hdGguYWJzKE1hdGguY2VpbChudW0gKiAxMDApIC8gMTAwKSkudG9Mb2NhbGVTdHJpbmcoKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRJbnRWYWx1ZSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBudW0gPSBwYXJzZUludChzdHIpXG4gIC8vIGlmIHN0cmluZyBjYW5ub3QgYmUgcGFyc2VkIHRvIGEgbnVtYmVyLCByZXR1cm4gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIGRpc3BsYXlpbmcgXCJOYU5cIlxuICBpZiAoTnVtYmVyLmlzTmFOKG51bSkpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuICByZXR1cm4gbnVtLnRvTG9jYWxlU3RyaW5nKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0YURpc3BsYXkgKHsgaDMgfTogeyBoMzogc3RyaW5nIH0pIHtcbiAgY29uc3QgdXJsID0gYnVpbGRVcmwoaDMpXG4gIGNvbnNvbGUubG9nKCdPQ0lTIHF1ZXJ5IFVSTDogJywgdXJsKVxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VMb2FkSlNPTjxhbnk+KHVybClcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdkYXRhIGZyb20gT0NJUyBxdWVyeTogJywgZGF0YSlcbiAgaWYgKGRhdGEuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxkaXY+Tm8gZGF0YSBhdmFpbGFibGUgZm9yIGdyaWQgSUQge2gzfS48L2Rpdj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OiAnMTBweCcsIG92ZXJmbG93WTogJ2F1dG8nIH19PlxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzBdLmRpc3BsYXl9PC90ZD48dGQ+e2RhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMF0ubmFtZV19PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkJpb2RpdmVyc2l0eTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMV0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzFdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzJdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1syXS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1szXS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRJbnRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzNdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzRdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1s0XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1s1XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbNV0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5SZXNvdXJjZSBNYW5hZ2VtZW50PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1s2XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRJbnRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzZdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzddLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEludFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbN10ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbOF0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzhdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+QmF0aHltZXRyeSAmIFNlYWZsb29yPC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1s5XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbOV0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTBdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxMF0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTFdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxMV0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTJdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxMl0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTNdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxM10ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTRdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxNF0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTVdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEludFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMTVdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+U3VydmV5cyAmIEV4cGxvcmF0aW9uPC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1sxNl0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0SW50VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxNl0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTddLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxN10ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMThdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEludFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMThdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzE5XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMTldLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+SHVtYW4gQWN0aXZpdHkgKFNoaXBwaW5nLCBGaXNoaW5nICYgSW5mcmFzdHJ1Y3R1cmUpPC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syMF0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzIwXS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syMV0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzIxXS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syMl0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzIyXS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syM10uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzIzXS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syNF0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzI0XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syNV0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzI1XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syNl0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzI2XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syN10uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzI3XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syOF0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0SW50VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1syOF0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMjldLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEludFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjldLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZUxvYWRKU09OUmVzdWx0PFQ+IHtcbiAgZGF0YTogVCB8IG51bGxcbiAgbG9hZGluZzogYm9vbGVhblxuICBlcnJvcjogRXJyb3IgfCBudWxsXG59XG5cbi8qKlxuICogQ3VzdG9tIGhvb2sgdG8gbG9hZCBhbmQgcGFyc2UgYSBKU09OIGZpbGVcbiAqIEBwYXJhbSB1cmwgLSBUaGUgVVJMIG9yIHBhdGggdG8gdGhlIEpTT04gZmlsZVxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcnNlZCBkYXRhLCBsb2FkaW5nIHN0YXRlLCBhbmQgYW55IGVycm9yc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2FkSlNPTjxUPiAodXJsOiBzdHJpbmcpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8VCB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8RXJyb3IgfCBudWxsPihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2ggZXJyb3I6JywgcmVzKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJylcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRmV0Y2ggc3VjY2Vzc2Z1bDonLCByZXMpXG4gICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGQ6IFQpID0+IHsgc2V0RGF0YShkKSB9KVxuICAgICAgLmNhdGNoKChlOiB1bmtub3duKSA9PiB7IHNldEVycm9yKGUgaW5zdGFuY2VvZiBFcnJvciA/IGUgOiBuZXcgRXJyb3IoU3RyaW5nKGUpKSkgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHsgc2V0TG9hZGluZyhmYWxzZSkgfSlcbiAgfSwgW3VybF0pXG5cbiAgcmV0dXJuIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuXG4vKlxuICogdGhlcmUgYXJlIHR3byBydW50aW1lIGV2ZW50cyB3aGljaCBpbXBhY3QgdGhpcyB3aWRnZXQ6XG4gKlxuICogMSkgbWFwQ2xpY2tcbiAqIHRoaXMgb25seSByZXF1aXJlcyB0aGF0IHRoZSBoZXhiaW4gc3VtbWFyeSBiZSB1cGRhdGVkXG4gKlxuICogMikgZmlsdGVyIGNoYW5nZXMgKGkuZS4gRGF0YVNvdXJjZSBxdWVyeVBhcmFtcylcbiAqIHRoaXMgcmVxdWlyZXMgdGhhdCB0aGUgZ3JhcGhpY3MgbGF5ZXIgYmUgdXBkYXRlZCAoYm90aCBib3VuZGFyaWVzIGFuZCBzeW1ib2xvZ3kpXG4gKlxuICogQm90aCBhcmUgaGFuZGxlZCAoaW5kaXJlY3RseSkgdmlhIHJlc3BlY3RpdmUgdXNlRWZmZWN0IGhvb2tzLCBpLmUuXG4gKiBldmVudCBjaGFuZ2VzIHN0YXRlIC0+IHRyaWdnZXJzIHJlLXJlbmRlciAtPiB1c2VFZmZlY3QgcnVuc1xuICpcbiAqIE5vdGUgdGhhdCBpZiBhIGluZGl2aWR1YWwgaGV4YmluIHdhcyBzZWxlY3RlZCBhdCB0aGUgdGltZSB0aGUgcXVlcnlQYXJhbXNcbiAqIGNoYW5nZSwgaXQgd2lsbCBiZSBkZXNlbGVjdGVkIGFuZCB0aGUgc3VtbWFyeSBjbGVhcmVkLiBUaGlzIGlzIG5lY2Vzc2FyeVxuICogc2luY2UgYSBjaGFuZ2UgaW4gcXVlcnlQYXJhbXMgbWF5IGNhdXNlIGEgaGV4YmluIHdoaWNoIHdhcyBmb3JtZXJseSBkaXNwbGF5ZWRcbiAqIHRvIG5vIGxvbmdlciBiZSBkcmF3blxuICovXG5pbXBvcnQge1xuICBSZWFjdCxcbiAganN4LFxuICB0eXBlIEFsbFdpZGdldFByb3BzLFxuICB0eXBlIElNU3RhdGUsXG4gIFJlYWN0UmVkdXhcbn0gZnJvbSAnamltdS1jb3JlJ1xuXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IERhdGFEaXNwbGF5IGZyb20gJy4uL29jaXMtZGlzcGxheSdcblxuZXhwb3J0IGludGVyZmFjZSBFeHRyYVByb3BzIHtcbiAgaDM6IHN0cmluZ1xufVxuY29uc3QgeyB1c2VTZWxlY3RvciB9ID0gUmVhY3RSZWR1eFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4gJiBFeHRyYVByb3BzKSB7XG4gIGNvbnNvbGUubG9nKCdpbnNpZGUgT0NJUyB3aWRnZXQgd2l0aCBwcm9wczogJywgcHJvcHMpXG5cbiAgLy8gZ2V0IHN0YXRlIGZvciB0aGlzIHdpZGdldFxuICBjb25zdCB3aWRnZXRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZS53aWRnZXRzU3RhdGVbcHJvcHMud2lkZ2V0SWRdXG4gIH0pXG4gIGNvbnNvbGUubG9nKGBpbnNpZGUgT0NJUzogaDMgPSAke3dpZGdldFN0YXRlPy5oM31gKVxuXG4gIGlmICghd2lkZ2V0U3RhdGU/LmgzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+Tm8gSDMgY2VsbCBzZWxlY3RlZDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3dpZGdldFN0YXRlLmgzID8gPERhdGFEaXNwbGF5IGgzPXt3aWRnZXRTdGF0ZS5oM30gLz4gOiA8cD5QbGVhc2Ugc2VsZWN0IGEgaGV4YWdvbmFsIGFyZWEgdG8gc3VtbWFyaXplPC9wPn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5XaWRnZXQubWFwRXh0cmFTdGF0ZVByb3BzID0gKHN0YXRlOiBJTVN0YXRlLCBvd25Qcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KTogRXh0cmFQcm9wcyA9PiB7XG4gIHJldHVybiB7XG4gICAgaDM6IHN0YXRlLndpZGdldHNTdGF0ZVtvd25Qcm9wcy53aWRnZXRJZF0/LmgzIHx8IG51bGxcbiAgfVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==