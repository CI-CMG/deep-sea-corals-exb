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
    // note the bathy_min, bathy_max labels are swapped due to the conversion to positive depth values
    { index: 9, display: 'Minimum Depth (meters)', name: 'bathy_max' },
    { index: 10, display: 'Maximum Depth (meters)', name: 'bathy_min' },
    { index: 11, display: 'Mean of Depth (meters)', name: 'bathy_mean' },
    { index: 12, display: 'Minimum Slope', name: 'slope_min' },
    { index: 13, display: 'Maximum Slope', name: 'slope_max' },
    { index: 14, display: 'Mean Slope', name: 'slope_mean' },
    { index: 15, display: 'Predominant Seafloor Lithology Type', name: 'lithology' },
    { index: 16, display: 'Count of Hydrographic Surveys', name: 'survey_count' },
    { index: 17, display: 'Total Area of Hydrographic Surveys (sq. km)', name: 'survey_area_km' },
    { index: 18, display: 'Count of Expedition Tracklines', name: 'oer_track_count' },
    { index: 19, display: 'Total Length of Expedition Tracklines (km)', name: 'oer_track_km' },
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
            "OCIS data are not available for hexagon ",
            h3,
            ". The  OCIS only covers the United States EEZ.");
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
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { fontSize: 'medium' } }, "Please select a hexagon to summarize."))));
    }
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { overflowY: 'auto' } }, widgetState.h3 ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ocis_display__WEBPACK_IMPORTED_MODULE_1__["default"], { h3: widgetState.h3 }) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { fontSize: 'medium' } }, "Please select a hexagon to summarize")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9vY2lzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0s7QUFFM0MsTUFBTSxNQUFNLEdBQUc7SUFDYixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ3JELEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtJQUNqRixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3ZELEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtJQUM5RCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7SUFDaEYsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ2pFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtJQUMzRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7SUFDNUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO0lBQ2pGLGtHQUFrRztJQUNsRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDbEUsRUFBRSxLQUFLLEVBQUUsRUFB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S0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxFQUFFLEVBQUUsQ0FBQztJQUVuRCxJQUFJLENBQUMsWUFBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLEVBQUUsR0FBRSxDQUFDO1FBQ3JCLE9BQU8sQ0FDTDtZQUNFO2dCQUNFLHNEQUFHLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsNENBQTJDLENBQ3ZFLENBQ0osQ0FDTDtJQUNILENBQUM7SUFFRCxPQUFPLENBQ0wsd0RBQUssS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUM5QixXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQywrQ0FBQyxxREFBVyxJQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRSxHQUFJLENBQUMsQ0FBQyxDQUFDLHNEQUFHLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsMkNBQTBDLENBQzlILENBQ1A7QUFDSCxDQUFDO0FBRUQsTUFBTSxDQUFDLGtCQUFrQixHQUFHLENBQUMsS0FBYyxFQUFFLFFBQWtDLEVBQWMsRUFBRTs7SUFDN0YsT0FBTztRQUNMLEVBQUUsRUFBRSxZQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsMENBQUUsRUFBRSxLQUFJLElBQUk7S0FDdEQ7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2Npcy9zcmMvb2Npcy1kaXNwbGF5LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2Npcy9zcmMvdXNlTG9hZEpzb24udHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2Npcy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB1c2VMb2FkSlNPTiB9IGZyb20gJy4vdXNlTG9hZEpzb24nXG5cbmNvbnN0IGZpZWxkcyA9IFtcbiAgeyBpbmRleDogMCwgZGlzcGxheTogJ0hleCBHcmlkIElEJywgbmFtZTogJ2dyaWRfaWQnIH0sXG4gIHsgaW5kZXg6IDEsIGRpc3BsYXk6ICdBcmVhIG9mIEJsdWUgQ2FyYm9uIEhhYml0YXQgKHNxLiBrbSknLCBuYW1lOiAnYl9jYXJiX2ttMicgfSxcbiAgeyBpbmRleDogMiwgZGlzcGxheTogJ01heHAgKE9CSVMpJywgbmFtZTogJ29iaXNfbWF4cCcgfSxcbiAgeyBpbmRleDogMywgZGlzcGxheTogJ0NvdW50IG9mIE9CSVMgUmVjb3JkcycsIG5hbWU6ICdvYmlzX24nIH0sXG4gIHsgaW5kZXg6IDQsIGRpc3BsYXk6ICdTaGFubm9uIEJpb2RpdmVyc2l0eSBJbmRleCAoT0JJUyknLCBuYW1lOiAnb2Jpc19zaGFubm9uJyB9LFxuICB7IGluZGV4OiA1LCBkaXNwbGF5OiAnU3BlY2llcyBSaWNobmVzcyAoT0JJUyknLCBuYW1lOiAnb2Jpc19zcCcgfSxcbiAgeyBpbmRleDogNiwgZGlzcGxheTogJ0NvdW50IG9mIE1hcmluZSBQcm90ZWN0ZWQgQXJlYXMnLCBuYW1lOiAnbXBhX2NvdW50JyB9LFxuICB7IGluZGV4OiA3LCBkaXNwbGF5OiAnQ291bnQgb2YgTWFyaW5lIE1hbmFnZWQgQXJlYXMnLCBuYW1lOiAncHJvc2VhX2NvdW50JyB9LFxuICB7IGluZGV4OiA4LCBkaXNwbGF5OiAnV2VpZ2h0ZWQgTGV2ZWwgb2YgRmlzaGluZyBQcm90ZWN0aW9uJywgbmFtZTogJ3Byb3NlYV9sdmwnIH0sXG4gIC8vIG5vdGUgdGhlIGJhdGh5X21pbiwgYmF0aHlfbWF4IGxhYmVscyBhcmUgc3dhcHBlZCBkdWUgdG8gdGhlIGNvbnZlcnNpb24gdG8gcG9zaXRpdmUgZGVwdGggdmFsdWVzXG4gIHsgaW5kZXg6IDksIGRpc3BsYXk6ICdNaW5pbXVtIERlcHRoIChtZXRlcnMpJywgbmFtZTogJ2JhdGh5X21heCcgfSxcbiAgeyBpbmRleDogMTAsIGRpc3BsYXk6ICdNYXhpbXVtIERlcHRoIChtZXRlcnMpJywgbmFtZTogJ2JhdGh5X21pbicgfSxcbiAgeyBpbmRleDogMTEsIGRpc3BsYXk6ICdNZWFuIG9mIERlcHRoIChtZXRlcnMpJywgbmFtZTogJ2JhdGh5X21lYW4nIH0sXG4gIHsgaW5kZXg6IDEyLCBkaXNwbGF5OiAnTWluaW11bSBTbG9wZScsIG5hbWU6ICdzbG9wZV9taW4nIH0sXG4gIHsgaW5kZXg6IDEzLCBkaXNwbGF5OiAnTWF4aW11bSBTbG9wZScsIG5hbWU6ICdzbG9wZV9tYXgnIH0sXG4gIHsgaW5kZXg6IDE0LCBkaXNwbGF5OiAnTWVhbiBTbG9wZScsIG5hbWU6ICdzbG9wZV9tZWFuJyB9LFxuICB7IGluZGV4OiAxNSwgZGlzcGxheTogJ1ByZWRvbWluYW50IFNlYWZsb29yIExpdGhvbG9neSBUeXBlJywgbmFtZTogJ2xpdGhvbG9neScgfSxcbiAgeyBpbmRleDogMTYsIGRpc3BsYXk6ICdDb3VudCBvZiBIeWRyb2dyYXBoaWMgU3VydmV5cycsIG5hbWU6ICdzdXJ2ZXlfY291bnQnIH0sXG4gIHsgaW5kZXg6IDE3LCBkaXNwbGF5OiAnVG90YWwgQXJlYSBvZiBIeWRyb2dyYXBoaWMgU3VydmV5cyAoc3EuIGttKScsIG5hbWU6ICdzdXJ2ZXlfYXJlYV9rbScgfSxcbiAgeyBpbmRleDogMTgsIGRpc3BsYXk6ICdDb3VudCBvZiBFeHBlZGl0aW9uIFRyYWNrbGluZXMnLCBuYW1lOiAnb2VyX3RyYWNrX2NvdW50JyB9LFxuICB7IGluZGV4OiAxOSwgZGlzcGxheTogJ1RvdGFsIExlbmd0aCBvZiBFeHBlZGl0aW9uIFRyYWNrbGluZXMgKGttKScsIG5hbWU6ICdvZXJfdHJhY2tfa20nIH0sXG4gIHsgaW5kZXg6IDIwLCBkaXNwbGF5OiAnR2xvYmFsIFZlc3NlbCBEZW5zaXR5JywgbmFtZTogJ3NoaXBfZ2xvYmFsJyB9LFxuICB7IGluZGV4OiAyMSwgZGlzcGxheTogJ0NvbW1lcmNpYWwgVmVzc2VsIERlbnNpdHknLCBuYW1lOiAnc2hpcF9jb21tJyB9LFxuICB7IGluZGV4OiAyMiwgZGlzcGxheTogJ0Zpc2hpbmcgVmVzc2VsIERlbnNpdHknLCBuYW1lOiAnc2hpcF9maXNoJyB9LFxuICB7IGluZGV4OiAyMywgZGlzcGxheTogJ0xlaXN1cmUgVmVzc2VsIERlbnNpdHknLCBuYW1lOiAnc2hpcF9sZWlzdXJlJyB9LFxuICB7IGluZGV4OiAyNCwgZGlzcGxheTogJ09pbCBhbmQgR2FzIFZlc3NlbCBEZW5zaXR5JywgbmFtZTogJ3NoaXBfb2lsX2dhcycgfSxcbiAgeyBpbmRleDogMjUsIGRpc3BsYXk6ICdQYXNzZW5nZXIgVmVzc2VsIERlbnNpdHknLCBuYW1lOiAnc2hpcF9wYXNzJyB9LFxuICB7IGluZGV4OiAyNiwgZGlzcGxheTogJ0dsb2JhbCBGaXNoaW5nIFdhdGNoIC0gRmlzaGluZyBIb3VycyAoMjAyMCknLCBuYW1lOiAnZ2Z3X2Zpc2hob3VycycgfSxcbiAgeyBpbmRleDogMjcsIGRpc3BsYXk6ICdHbG9iYWwgRmlzaGluZyBXYXRjaCAtIEhvdXJzICgyMDIwKScsIG5hbWU6ICdnZndfaG91cnMnIH0sXG4gIHsgaW5kZXg6IDI4LCBkaXNwbGF5OiAnQ291bnQgb2YgT2lsIGFuZCBHYXMgUGxhdGZvcm1zJywgbmFtZTogJ3BsYXRmb3JtX2NvdW50JyB9LFxuICB7IGluZGV4OiAyOSwgZGlzcGxheTogJ0NvdW50IG9mIFN1Ym1hcmluZSBDYWJsZXMnLCBuYW1lOiAnY2FibGVfY291bnQnIH1cbl1cblxuZnVuY3Rpb24gYnVpbGRVcmwgKGgzOiBzdHJpbmcpIHtcbiAgY29uc3Qgb2Npc0ZlYXR1cmVTZXJ2aWNlVXJsID0gJ2h0dHBzOi8vc2VydmljZXMuYXJjZ2lzLmNvbS9iREFodlFZTUc0V0w4TzVvL0FyY0dJUy9yZXN0L3NlcnZpY2VzL29jaXNfc2RlX29jaXNfbWFzdGVyX3ZpZXdfaDRfdmlldy9GZWF0dXJlU2VydmVyLzEvcXVlcnknXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBzZWFyY2hQYXJhbXMuc2V0KCd3aGVyZScsIGBncmlkX2lkPScke2gzfSdgKVxuICBzZWFyY2hQYXJhbXMuc2V0KCdyZXR1cm5HZW9tZXRyeScsICdmYWxzZScpXG4gIHNlYXJjaFBhcmFtcy5zZXQoJ291dEZpZWxkcycsIGZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpLmpvaW4oJywnKSlcbiAgc2VhcmNoUGFyYW1zLnNldCgnZicsICdwanNvbicpXG4gIHJldHVybiAoYCR7b2Npc0ZlYXR1cmVTZXJ2aWNlVXJsfT8ke3NlYXJjaFBhcmFtcy50b1N0cmluZygpfWApXG59XG5cbmZ1bmN0aW9uIGZvcm1hdEZsb2F0VmFsdWUgKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChzdHIpXG4gIGlmIChOdW1iZXIuaXNOYU4obnVtKSkge1xuICAgIHJldHVybiAnJ1xuICB9XG4gIC8vIHJvdW5kICp1cCogdG8gMiBkZWNpbWFsIHBsYWNlcyBmb3IgZGlzcGxheSBwdXJwb3Nlcy4gQWx3YXlzIHVzZSBwb3NpdGl2ZSB2YWx1ZXNcbiAgcmV0dXJuIChNYXRoLmFicyhNYXRoLmNlaWwobnVtICogMTAwKSAvIDEwMCkpLnRvTG9jYWxlU3RyaW5nKClcbn1cblxuZnVuY3Rpb24gZm9ybWF0SW50VmFsdWUgKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgbnVtID0gcGFyc2VJbnQoc3RyKVxuICAvLyBpZiBzdHJpbmcgY2Fubm90IGJlIHBhcnNlZCB0byBhIG51bWJlciwgcmV0dXJuIGVtcHR5IHN0cmluZyB0byBhdm9pZCBkaXNwbGF5aW5nIFwiTmFOXCJcbiAgaWYgKE51bWJlci5pc05hTihudW0pKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbiAgcmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGFEaXNwbGF5ICh7IGgzIH06IHsgaDM6IHN0cmluZyB9KSB7XG4gIGNvbnN0IHVybCA9IGJ1aWxkVXJsKGgzKVxuICBjb25zb2xlLmxvZygnT0NJUyBxdWVyeSBVUkw6ICcsIHVybClcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlTG9hZEpTT048YW55Pih1cmwpXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gIH1cblxuICBjb25zb2xlLmxvZygnZGF0YSBmcm9tIE9DSVMgcXVlcnk6ICcsIGRhdGEpXG4gIGlmIChkYXRhLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8ZGl2Pk9DSVMgZGF0YSBhcmUgbm90IGF2YWlsYWJsZSBmb3IgaGV4YWdvbiB7aDN9LiBUaGUgIE9DSVMgb25seSBjb3ZlcnMgdGhlIFVuaXRlZCBTdGF0ZXMgRUVaLjwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMTBweCcsIG92ZXJmbG93WTogJ2F1dG8nIH19PlxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzBdLmRpc3BsYXl9PC90ZD48dGQ+e2RhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMF0ubmFtZV19PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkJpb2RpdmVyc2l0eTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMV0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzFdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzJdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1syXS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1szXS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRJbnRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzNdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzRdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1s0XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1s1XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbNV0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5SZXNvdXJjZSBNYW5hZ2VtZW50PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1s2XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRJbnRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzZdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzddLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEludFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbN10ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbOF0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzhdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+QmF0aHltZXRyeSAmIFNlYWZsb29yPC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1s5XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbOV0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTBdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxMF0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTFdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxMV0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTJdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxMl0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTNdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxM10ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTRdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxNF0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICB7LyogPHRyPjx0ZD57ZmllbGRzWzE1XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRJbnRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzE1XS5uYW1lXSl9PC90ZD48L3RyPiAqL31cbiAgICAgICAgICA8dHI+PHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5TdXJ2ZXlzICYgRXhwbG9yYXRpb248L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzE2XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRJbnRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzE2XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1sxN10uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzE3XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1sxOF0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0SW50VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxOF0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTldLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxOV0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5IdW1hbiBBY3Rpdml0eSAoU2hpcHBpbmcsIEZpc2hpbmcgJiBJbmZyYXN0cnVjdHVyZSk8L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzIwXS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjBdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzIxXS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjFdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzIyXS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjJdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzIzXS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjNdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzI0XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjRdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzI1XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjVdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzI2XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjZdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzI3XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjddLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzI4XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRJbnRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzI4XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syOV0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0SW50VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1syOV0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlTG9hZEpTT05SZXN1bHQ8VD4ge1xuICBkYXRhOiBUIHwgbnVsbFxuICBsb2FkaW5nOiBib29sZWFuXG4gIGVycm9yOiBFcnJvciB8IG51bGxcbn1cblxuLyoqXG4gKiBDdXN0b20gaG9vayB0byBsb2FkIGFuZCBwYXJzZSBhIEpTT04gZmlsZVxuICogQHBhcmFtIHVybCAtIFRoZSBVUkwgb3IgcGF0aCB0byB0aGUgSlNPTiBmaWxlXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcGFyc2VkIGRhdGEsIGxvYWRpbmcgc3RhdGUsIGFuZCBhbnkgZXJyb3JzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvYWRKU09OPFQ+ICh1cmw6IHN0cmluZykge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxUIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxFcnJvciB8IG51bGw+KG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdGZXRjaCBlcnJvcjonLCByZXMpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdGZXRjaCBzdWNjZXNzZnVsOicsIHJlcylcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbigoZDogVCkgPT4geyBzZXREYXRhKGQpIH0pXG4gICAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IHsgc2V0RXJyb3IoZSBpbnN0YW5jZW9mIEVycm9yID8gZSA6IG5ldyBFcnJvcihTdHJpbmcoZSkpKSB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4geyBzZXRMb2FkaW5nKGZhbHNlKSB9KVxuICB9LCBbdXJsXSlcblxuICByZXR1cm4geyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5cbi8qXG4gKiB0aGVyZSBhcmUgdHdvIHJ1bnRpbWUgZXZlbnRzIHdoaWNoIGltcGFjdCB0aGlzIHdpZGdldDpcbiAqXG4gKiAxKSBtYXBDbGlja1xuICogdGhpcyBvbmx5IHJlcXVpcmVzIHRoYXQgdGhlIGhleGJpbiBzdW1tYXJ5IGJlIHVwZGF0ZWRcbiAqXG4gKiAyKSBmaWx0ZXIgY2hhbmdlcyAoaS5lLiBEYXRhU291cmNlIHF1ZXJ5UGFyYW1zKVxuICogdGhpcyByZXF1aXJlcyB0aGF0IHRoZSBncmFwaGljcyBsYXllciBiZSB1cGRhdGVkIChib3RoIGJvdW5kYXJpZXMgYW5kIHN5bWJvbG9neSlcbiAqXG4gKiBCb3RoIGFyZSBoYW5kbGVkIChpbmRpcmVjdGx5KSB2aWEgcmVzcGVjdGl2ZSB1c2VFZmZlY3QgaG9va3MsIGkuZS5cbiAqIGV2ZW50IGNoYW5nZXMgc3RhdGUgLT4gdHJpZ2dlcnMgcmUtcmVuZGVyIC0+IHVzZUVmZmVjdCBydW5zXG4gKlxuICogTm90ZSB0aGF0IGlmIGEgaW5kaXZpZHVhbCBoZXhiaW4gd2FzIHNlbGVjdGVkIGF0IHRoZSB0aW1lIHRoZSBxdWVyeVBhcmFtc1xuICogY2hhbmdlLCBpdCB3aWxsIGJlIGRlc2VsZWN0ZWQgYW5kIHRoZSBzdW1tYXJ5IGNsZWFyZWQuIFRoaXMgaXMgbmVjZXNzYXJ5XG4gKiBzaW5jZSBhIGNoYW5nZSBpbiBxdWVyeVBhcmFtcyBtYXkgY2F1c2UgYSBoZXhiaW4gd2hpY2ggd2FzIGZvcm1lcmx5IGRpc3BsYXllZFxuICogdG8gbm8gbG9uZ2VyIGJlIGRyYXduXG4gKi9cbmltcG9ydCB7XG4gIFJlYWN0LFxuICBqc3gsXG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsXG4gIHR5cGUgSU1TdGF0ZSxcbiAgUmVhY3RSZWR1eFxufSBmcm9tICdqaW11LWNvcmUnXG5cbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgRGF0YURpc3BsYXkgZnJvbSAnLi4vb2Npcy1kaXNwbGF5J1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICBoMzogc3RyaW5nXG59XG5jb25zdCB7IHVzZVNlbGVjdG9yIH0gPSBSZWFjdFJlZHV4XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMpIHtcbiAgY29uc29sZS5sb2coJ2luc2lkZSBPQ0lTIHdpZGdldCB3aXRoIHByb3BzOiAnLCBwcm9wcylcblxuICAvLyBnZXQgc3RhdGUgZm9yIHRoaXMgd2lkZ2V0XG4gIGNvbnN0IHdpZGdldFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLndpZGdldHNTdGF0ZVtwcm9wcy53aWRnZXRJZF1cbiAgfSlcbiAgY29uc29sZS5sb2coYGluc2lkZSBPQ0lTOiBoMyA9ICR7d2lkZ2V0U3RhdGU/LmgzfWApXG5cbiAgaWYgKCF3aWRnZXRTdGF0ZT8uaDMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJ21lZGl1bScgfX0+UGxlYXNlIHNlbGVjdCBhIGhleGFnb24gdG8gc3VtbWFyaXplLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93WTogJ2F1dG8nIH19PlxuICAgICAge3dpZGdldFN0YXRlLmgzID8gPERhdGFEaXNwbGF5IGgzPXt3aWRnZXRTdGF0ZS5oM30gLz4gOiA8cCBzdHlsZT17eyBmb250U2l6ZTogJ21lZGl1bScgfX0+UGxlYXNlIHNlbGVjdCBhIGhleGFnb24gdG8gc3VtbWFyaXplPC9wPn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5XaWRnZXQubWFwRXh0cmFTdGF0ZVByb3BzID0gKHN0YXRlOiBJTVN0YXRlLCBvd25Qcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KTogRXh0cmFQcm9wcyA9PiB7XG4gIHJldHVybiB7XG4gICAgaDM6IHN0YXRlLndpZGdldHNTdGF0ZVtvd25Qcm9wcy53aWRnZXRJZF0/LmgzIHx8IG51bGxcbiAgfVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==