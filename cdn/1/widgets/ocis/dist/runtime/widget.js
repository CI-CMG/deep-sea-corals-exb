System.register(["jimu-core/emotion","jimu-core","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
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
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _useLoadJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useLoadJson */ "./your-extensions/widgets/ocis/src/useLoadJson.ts");



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
    const { data, loading, error } = (0,_useLoadJson__WEBPACK_IMPORTED_MODULE_2__.useLoadJSON)(url);
    if (loading) {
        return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Loading..." });
    }
    if (error) {
        return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: ["Error: ", error.message] });
    }
    console.log('data from OCIS query: ', data);
    if (data.features.length === 0) {
        return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: ["OCIS data are not available for hexagon ", h3, ". The  OCIS only covers the United States EEZ."] });
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { paddingLeft: '10px', overflowY: 'auto' }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[0].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: data.features[0].attributes[fields[0].name] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 2, style: { fontWeight: 'bold' }, children: "Biodiversity" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[1].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[1].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[2].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[2].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[3].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatIntValue(data.features[0].attributes[fields[3].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[4].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[4].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[5].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[5].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 2, style: { fontWeight: 'bold' }, children: "Resource Management" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[6].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatIntValue(data.features[0].attributes[fields[6].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[7].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatIntValue(data.features[0].attributes[fields[7].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[8].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[8].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 2, style: { fontWeight: 'bold' }, children: "Bathymetry & Seafloor" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[9].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[9].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[10].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[10].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[11].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[11].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[12].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[12].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[13].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[13].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[14].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[14].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 2, style: { fontWeight: 'bold' }, children: "Surveys & Exploration" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[16].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatIntValue(data.features[0].attributes[fields[16].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[17].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[17].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[18].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatIntValue(data.features[0].attributes[fields[18].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[19].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[19].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 2, style: { fontWeight: 'bold' }, children: "Human Activity (Shipping, Fishing & Infrastructure)" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[20].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[20].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[21].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[21].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[22].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[22].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[23].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[23].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[24].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[24].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[25].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[25].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[26].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[26].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[27].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatFloatValue(data.features[0].attributes[fields[27].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[28].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatIntValue(data.features[0].attributes[fields[28].name]) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: fields[29].display }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatIntValue(data.features[0].attributes[fields[29].name]) })] })] }) }) }));
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

/***/ "@emotion/react/jsx-runtime":
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

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
/*!*************************************************************!*\
  !*** ./your-extensions/widgets/ocis/src/runtime/widget.tsx ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _ocis_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ocis-display */ "./your-extensions/widgets/ocis/src/ocis-display.tsx");

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


const { useSelector } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.ReactRedux;
function Widget(props) {
    console.log('inside OCIS widget with props: ', props);
    // get state for this widget
    const widgetState = useSelector((state) => {
        return state.widgetsState[props.widgetId];
    });
    console.log(`inside OCIS: h3 = ${widgetState === null || widgetState === void 0 ? void 0 : widgetState.h3}`);
    if (!(widgetState === null || widgetState === void 0 ? void 0 : widgetState.h3)) {
        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { fontSize: 'medium' }, children: "Please select a hexagon to summarize." }) }) }));
    }
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { overflowY: 'auto' }, children: widgetState.h3 ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ocis_display__WEBPACK_IMPORTED_MODULE_2__["default"], { h3: widgetState.h3 }) : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { fontSize: 'medium' }, children: "Please select a hexagon to summarize" }) }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxHQUFFLENBQUM7UUFDckIsT0FBTyxDQUNMLG1GQUNFLG1GQUNFLHVFQUFHLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsc0RBQTJDLEdBQ3ZFLEdBQ0osQ0FDTDtJQUNILENBQUM7SUFFRCxPQUFPLENBQ0wseUVBQUssS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUM5QixXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnRUFBQyxxREFBVyxJQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRSxHQUFJLENBQUMsQ0FBQyxDQUFDLHVFQUFHLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUscURBQTBDLEdBQzlILENBQ1A7QUFDSCxDQUFDO0FBRUQsTUFBTSxDQUFDLGtCQUFrQixHQUFHLENBQUMsS0FBYyxFQUFFLFFBQWtDLEVBQWMsRUFBRTs7SUFDN0YsT0FBTztRQUNMLEVBQUUsRUFBRSxZQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsMENBQUUsRUFBRSxLQUFJLElBQUk7S0FDdEQ7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2Npcy9zcmMvb2Npcy1kaXNwbGF5LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvb2Npcy9zcmMvdXNlTG9hZEpzb24udHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL29jaXMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdXNlTG9hZEpTT04gfSBmcm9tICcuL3VzZUxvYWRKc29uJ1xuXG5jb25zdCBmaWVsZHMgPSBbXG4gIHsgaW5kZXg6IDAsIGRpc3BsYXk6ICdIZXggR3JpZCBJRCcsIG5hbWU6ICdncmlkX2lkJyB9LFxuICB7IGluZGV4OiAxLCBkaXNwbGF5OiAnQXJlYSBvZiBCbHVlIENhcmJvbiBIYWJpdGF0IChzcS4ga20pJywgbmFtZTogJ2JfY2FyYl9rbTInIH0sXG4gIHsgaW5kZXg6IDIsIGRpc3BsYXk6ICdNYXhwIChPQklTKScsIG5hbWU6ICdvYmlzX21heHAnIH0sXG4gIHsgaW5kZXg6IDMsIGRpc3BsYXk6ICdDb3VudCBvZiBPQklTIFJlY29yZHMnLCBuYW1lOiAnb2Jpc19uJyB9LFxuICB7IGluZGV4OiA0LCBkaXNwbGF5OiAnU2hhbm5vbiBCaW9kaXZlcnNpdHkgSW5kZXggKE9CSVMpJywgbmFtZTogJ29iaXNfc2hhbm5vbicgfSxcbiAgeyBpbmRleDogNSwgZGlzcGxheTogJ1NwZWNpZXMgUmljaG5lc3MgKE9CSVMpJywgbmFtZTogJ29iaXNfc3AnIH0sXG4gIHsgaW5kZXg6IDYsIGRpc3BsYXk6ICdDb3VudCBvZiBNYXJpbmUgUHJvdGVjdGVkIEFyZWFzJywgbmFtZTogJ21wYV9jb3VudCcgfSxcbiAgeyBpbmRleDogNywgZGlzcGxheTogJ0NvdW50IG9mIE1hcmluZSBNYW5hZ2VkIEFyZWFzJywgbmFtZTogJ3Byb3NlYV9jb3VudCcgfSxcbiAgeyBpbmRleDogOCwgZGlzcGxheTogJ1dlaWdodGVkIExldmVsIG9mIEZpc2hpbmcgUHJvdGVjdGlvbicsIG5hbWU6ICdwcm9zZWFfbHZsJyB9LFxuICAvLyBub3RlIHRoZSBiYXRoeV9taW4sIGJhdGh5X21heCBsYWJlbHMgYXJlIHN3YXBwZWQgZHVlIHRvIHRoZSBjb252ZXJzaW9uIHRvIHBvc2l0aXZlIGRlcHRoIHZhbHVlc1xuICB7IGluZGV4OiA5LCBkaXNwbGF5OiAnTWluaW11bSBEZXB0aCAobWV0ZXJzKScsIG5hbWU6ICdiYXRoeV9tYXgnIH0sXG4gIHsgaW5kZXg6IDEwLCBkaXNwbGF5OiAnTWF4aW11bSBEZXB0aCAobWV0ZXJzKScsIG5hbWU6ICdiYXRoeV9taW4nIH0sXG4gIHsgaW5kZXg6IDExLCBkaXNwbGF5OiAnTWVhbiBvZiBEZXB0aCAobWV0ZXJzKScsIG5hbWU6ICdiYXRoeV9tZWFuJyB9LFxuICB7IGluZGV4OiAxMiwgZGlzcGxheTogJ01pbmltdW0gU2xvcGUnLCBuYW1lOiAnc2xvcGVfbWluJyB9LFxuICB7IGluZGV4OiAxMywgZGlzcGxheTogJ01heGltdW0gU2xvcGUnLCBuYW1lOiAnc2xvcGVfbWF4JyB9LFxuICB7IGluZGV4OiAxNCwgZGlzcGxheTogJ01lYW4gU2xvcGUnLCBuYW1lOiAnc2xvcGVfbWVhbicgfSxcbiAgeyBpbmRleDogMTUsIGRpc3BsYXk6ICdQcmVkb21pbmFudCBTZWFmbG9vciBMaXRob2xvZ3kgVHlwZScsIG5hbWU6ICdsaXRob2xvZ3knIH0sXG4gIHsgaW5kZXg6IDE2LCBkaXNwbGF5OiAnQ291bnQgb2YgSHlkcm9ncmFwaGljIFN1cnZleXMnLCBuYW1lOiAnc3VydmV5X2NvdW50JyB9LFxuICB7IGluZGV4OiAxNywgZGlzcGxheTogJ1RvdGFsIEFyZWEgb2YgSHlkcm9ncmFwaGljIFN1cnZleXMgKHNxLiBrbSknLCBuYW1lOiAnc3VydmV5X2FyZWFfa20nIH0sXG4gIHsgaW5kZXg6IDE4LCBkaXNwbGF5OiAnQ291bnQgb2YgRXhwZWRpdGlvbiBUcmFja2xpbmVzJywgbmFtZTogJ29lcl90cmFja19jb3VudCcgfSxcbiAgeyBpbmRleDogMTksIGRpc3BsYXk6ICdUb3RhbCBMZW5ndGggb2YgRXhwZWRpdGlvbiBUcmFja2xpbmVzIChrbSknLCBuYW1lOiAnb2VyX3RyYWNrX2ttJyB9LFxuICB7IGluZGV4OiAyMCwgZGlzcGxheTogJ0dsb2JhbCBWZXNzZWwgRGVuc2l0eScsIG5hbWU6ICdzaGlwX2dsb2JhbCcgfSxcbiAgeyBpbmRleDogMjEsIGRpc3BsYXk6ICdDb21tZXJjaWFsIFZlc3NlbCBEZW5zaXR5JywgbmFtZTogJ3NoaXBfY29tbScgfSxcbiAgeyBpbmRleDogMjIsIGRpc3BsYXk6ICdGaXNoaW5nIFZlc3NlbCBEZW5zaXR5JywgbmFtZTogJ3NoaXBfZmlzaCcgfSxcbiAgeyBpbmRleDogMjMsIGRpc3BsYXk6ICdMZWlzdXJlIFZlc3NlbCBEZW5zaXR5JywgbmFtZTogJ3NoaXBfbGVpc3VyZScgfSxcbiAgeyBpbmRleDogMjQsIGRpc3BsYXk6ICdPaWwgYW5kIEdhcyBWZXNzZWwgRGVuc2l0eScsIG5hbWU6ICdzaGlwX29pbF9nYXMnIH0sXG4gIHsgaW5kZXg6IDI1LCBkaXNwbGF5OiAnUGFzc2VuZ2VyIFZlc3NlbCBEZW5zaXR5JywgbmFtZTogJ3NoaXBfcGFzcycgfSxcbiAgeyBpbmRleDogMjYsIGRpc3BsYXk6ICdHbG9iYWwgRmlzaGluZyBXYXRjaCAtIEZpc2hpbmcgSG91cnMgKDIwMjApJywgbmFtZTogJ2dmd19maXNoaG91cnMnIH0sXG4gIHsgaW5kZXg6IDI3LCBkaXNwbGF5OiAnR2xvYmFsIEZpc2hpbmcgV2F0Y2ggLSBIb3VycyAoMjAyMCknLCBuYW1lOiAnZ2Z3X2hvdXJzJyB9LFxuICB7IGluZGV4OiAyOCwgZGlzcGxheTogJ0NvdW50IG9mIE9pbCBhbmQgR2FzIFBsYXRmb3JtcycsIG5hbWU6ICdwbGF0Zm9ybV9jb3VudCcgfSxcbiAgeyBpbmRleDogMjksIGRpc3BsYXk6ICdDb3VudCBvZiBTdWJtYXJpbmUgQ2FibGVzJywgbmFtZTogJ2NhYmxlX2NvdW50JyB9XG5dXG5cbmZ1bmN0aW9uIGJ1aWxkVXJsIChoMzogc3RyaW5nKSB7XG4gIGNvbnN0IG9jaXNGZWF0dXJlU2VydmljZVVybCA9ICdodHRwczovL3NlcnZpY2VzLmFyY2dpcy5jb20vYkRBaHZRWU1HNFdMOE81by9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9vY2lzX3NkZV9vY2lzX21hc3Rlcl92aWV3X2g0X3ZpZXcvRmVhdHVyZVNlcnZlci8xL3F1ZXJ5J1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgc2VhcmNoUGFyYW1zLnNldCgnd2hlcmUnLCBgZ3JpZF9pZD0nJHtoM30nYClcbiAgc2VhcmNoUGFyYW1zLnNldCgncmV0dXJuR2VvbWV0cnknLCAnZmFsc2UnKVxuICBzZWFyY2hQYXJhbXMuc2V0KCdvdXRGaWVsZHMnLCBmaWVsZHMubWFwKGYgPT4gZi5uYW1lKS5qb2luKCcsJykpXG4gIHNlYXJjaFBhcmFtcy5zZXQoJ2YnLCAncGpzb24nKVxuICByZXR1cm4gKGAke29jaXNGZWF0dXJlU2VydmljZVVybH0/JHtzZWFyY2hQYXJhbXMudG9TdHJpbmcoKX1gKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRGbG9hdFZhbHVlIChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoc3RyKVxuICBpZiAoTnVtYmVyLmlzTmFOKG51bSkpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuICAvLyByb3VuZCAqdXAqIHRvIDIgZGVjaW1hbCBwbGFjZXMgZm9yIGRpc3BsYXkgcHVycG9zZXMuIEFsd2F5cyB1c2UgcG9zaXRpdmUgdmFsdWVzXG4gIHJldHVybiAoTWF0aC5hYnMoTWF0aC5jZWlsKG51bSAqIDEwMCkgLyAxMDApKS50b0xvY2FsZVN0cmluZygpXG59XG5cbmZ1bmN0aW9uIGZvcm1hdEludFZhbHVlIChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KHN0cilcbiAgLy8gaWYgc3RyaW5nIGNhbm5vdCBiZSBwYXJzZWQgdG8gYSBudW1iZXIsIHJldHVybiBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgZGlzcGxheWluZyBcIk5hTlwiXG4gIGlmIChOdW1iZXIuaXNOYU4obnVtKSkge1xuICAgIHJldHVybiAnJ1xuICB9XG4gIHJldHVybiBudW0udG9Mb2NhbGVTdHJpbmcoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhRGlzcGxheSAoeyBoMyB9OiB7IGgzOiBzdHJpbmcgfSkge1xuICBjb25zdCB1cmwgPSBidWlsZFVybChoMylcbiAgY29uc29sZS5sb2coJ09DSVMgcXVlcnkgVVJMOiAnLCB1cmwpXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZUxvYWRKU09OPGFueT4odXJsKVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PlxuICB9XG5cbiAgY29uc29sZS5sb2coJ2RhdGEgZnJvbSBPQ0lTIHF1ZXJ5OiAnLCBkYXRhKVxuICBpZiAoZGF0YS5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPGRpdj5PQ0lTIGRhdGEgYXJlIG5vdCBhdmFpbGFibGUgZm9yIGhleGFnb24ge2gzfS4gVGhlICBPQ0lTIG9ubHkgY292ZXJzIHRoZSBVbml0ZWQgU3RhdGVzIEVFWi48L2Rpdj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzEwcHgnLCBvdmVyZmxvd1k6ICdhdXRvJyB9fT5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1swXS5kaXNwbGF5fTwvdGQ+PHRkPntkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzBdLm5hbWVdfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5CaW9kaXZlcnNpdHk8L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzFdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxXS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syXS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMl0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbM10uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0SW50VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1szXS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1s0XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbNF0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbNV0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzVdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+UmVzb3VyY2UgTWFuYWdlbWVudDwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbNl0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0SW50VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1s2XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1s3XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRJbnRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzddLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzhdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1s4XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkJhdGh5bWV0cnkgJiBTZWFmbG9vcjwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbOV0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzldLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzEwXS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMTBdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzExXS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMTFdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzEyXS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMTJdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzEzXS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMTNdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzE0XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMTRdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgey8qIDx0cj48dGQ+e2ZpZWxkc1sxNV0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0SW50VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxNV0ubmFtZV0pfTwvdGQ+PC90cj4gKi99XG4gICAgICAgICAgPHRyPjx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+U3VydmV5cyAmIEV4cGxvcmF0aW9uPC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1sxNl0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0SW50VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxNl0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTddLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEZsb2F0VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxN10ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMThdLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEludFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMThdLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzE5XS5kaXNwbGF5fTwvdGQ+PHRkPntmb3JtYXRGbG9hdFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMTldLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+SHVtYW4gQWN0aXZpdHkgKFNoaXBwaW5nLCBGaXNoaW5nICYgSW5mcmFzdHJ1Y3R1cmUpPC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syMF0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzIwXS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syMV0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzIxXS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syMl0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzIyXS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syM10uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzIzXS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syNF0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzI0XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syNV0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzI1XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syNl0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzI2XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syN10uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0RmxvYXRWYWx1ZShkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzI3XS5uYW1lXSl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1syOF0uZGlzcGxheX08L3RkPjx0ZD57Zm9ybWF0SW50VmFsdWUoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1syOF0ubmFtZV0pfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMjldLmRpc3BsYXl9PC90ZD48dGQ+e2Zvcm1hdEludFZhbHVlKGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjldLm5hbWVdKX08L3RkPjwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZUxvYWRKU09OUmVzdWx0PFQ+IHtcbiAgZGF0YTogVCB8IG51bGxcbiAgbG9hZGluZzogYm9vbGVhblxuICBlcnJvcjogRXJyb3IgfCBudWxsXG59XG5cbi8qKlxuICogQ3VzdG9tIGhvb2sgdG8gbG9hZCBhbmQgcGFyc2UgYSBKU09OIGZpbGVcbiAqIEBwYXJhbSB1cmwgLSBUaGUgVVJMIG9yIHBhdGggdG8gdGhlIEpTT04gZmlsZVxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBhcnNlZCBkYXRhLCBsb2FkaW5nIHN0YXRlLCBhbmQgYW55IGVycm9yc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2FkSlNPTjxUPiAodXJsOiBzdHJpbmcpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8VCB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8RXJyb3IgfCBudWxsPihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2ggZXJyb3I6JywgcmVzKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJylcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRmV0Y2ggc3VjY2Vzc2Z1bDonLCByZXMpXG4gICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGQ6IFQpID0+IHsgc2V0RGF0YShkKSB9KVxuICAgICAgLmNhdGNoKChlOiB1bmtub3duKSA9PiB7IHNldEVycm9yKGUgaW5zdGFuY2VvZiBFcnJvciA/IGUgOiBuZXcgRXJyb3IoU3RyaW5nKGUpKSkgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHsgc2V0TG9hZGluZyhmYWxzZSkgfSlcbiAgfSwgW3VybF0pXG5cbiAgcmV0dXJuIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuXG4vKlxuICogdGhlcmUgYXJlIHR3byBydW50aW1lIGV2ZW50cyB3aGljaCBpbXBhY3QgdGhpcyB3aWRnZXQ6XG4gKlxuICogMSkgbWFwQ2xpY2tcbiAqIHRoaXMgb25seSByZXF1aXJlcyB0aGF0IHRoZSBoZXhiaW4gc3VtbWFyeSBiZSB1cGRhdGVkXG4gKlxuICogMikgZmlsdGVyIGNoYW5nZXMgKGkuZS4gRGF0YVNvdXJjZSBxdWVyeVBhcmFtcylcbiAqIHRoaXMgcmVxdWlyZXMgdGhhdCB0aGUgZ3JhcGhpY3MgbGF5ZXIgYmUgdXBkYXRlZCAoYm90aCBib3VuZGFyaWVzIGFuZCBzeW1ib2xvZ3kpXG4gKlxuICogQm90aCBhcmUgaGFuZGxlZCAoaW5kaXJlY3RseSkgdmlhIHJlc3BlY3RpdmUgdXNlRWZmZWN0IGhvb2tzLCBpLmUuXG4gKiBldmVudCBjaGFuZ2VzIHN0YXRlIC0+IHRyaWdnZXJzIHJlLXJlbmRlciAtPiB1c2VFZmZlY3QgcnVuc1xuICpcbiAqIE5vdGUgdGhhdCBpZiBhIGluZGl2aWR1YWwgaGV4YmluIHdhcyBzZWxlY3RlZCBhdCB0aGUgdGltZSB0aGUgcXVlcnlQYXJhbXNcbiAqIGNoYW5nZSwgaXQgd2lsbCBiZSBkZXNlbGVjdGVkIGFuZCB0aGUgc3VtbWFyeSBjbGVhcmVkLiBUaGlzIGlzIG5lY2Vzc2FyeVxuICogc2luY2UgYSBjaGFuZ2UgaW4gcXVlcnlQYXJhbXMgbWF5IGNhdXNlIGEgaGV4YmluIHdoaWNoIHdhcyBmb3JtZXJseSBkaXNwbGF5ZWRcbiAqIHRvIG5vIGxvbmdlciBiZSBkcmF3blxuICovXG5pbXBvcnQge1xuICBSZWFjdCxcbiAganN4LFxuICB0eXBlIEFsbFdpZGdldFByb3BzLFxuICB0eXBlIElNU3RhdGUsXG4gIFJlYWN0UmVkdXhcbn0gZnJvbSAnamltdS1jb3JlJ1xuXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IERhdGFEaXNwbGF5IGZyb20gJy4uL29jaXMtZGlzcGxheSdcblxuZXhwb3J0IGludGVyZmFjZSBFeHRyYVByb3BzIHtcbiAgaDM6IHN0cmluZ1xufVxuY29uc3QgeyB1c2VTZWxlY3RvciB9ID0gUmVhY3RSZWR1eFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4gJiBFeHRyYVByb3BzKSB7XG4gIGNvbnNvbGUubG9nKCdpbnNpZGUgT0NJUyB3aWRnZXQgd2l0aCBwcm9wczogJywgcHJvcHMpXG5cbiAgLy8gZ2V0IHN0YXRlIGZvciB0aGlzIHdpZGdldFxuICBjb25zdCB3aWRnZXRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZS53aWRnZXRzU3RhdGVbcHJvcHMud2lkZ2V0SWRdXG4gIH0pXG4gIGNvbnNvbGUubG9nKGBpbnNpZGUgT0NJUzogaDMgPSAke3dpZGdldFN0YXRlPy5oM31gKVxuXG4gIGlmICghd2lkZ2V0U3RhdGU/LmgzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICdtZWRpdW0nIH19PlBsZWFzZSBzZWxlY3QgYSBoZXhhZ29uIHRvIHN1bW1hcml6ZS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvd1k6ICdhdXRvJyB9fT5cbiAgICAgIHt3aWRnZXRTdGF0ZS5oMyA/IDxEYXRhRGlzcGxheSBoMz17d2lkZ2V0U3RhdGUuaDN9IC8+IDogPHAgc3R5bGU9e3sgZm9udFNpemU6ICdtZWRpdW0nIH19PlBsZWFzZSBzZWxlY3QgYSBoZXhhZ29uIHRvIHN1bW1hcml6ZTwvcD59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuV2lkZ2V0Lm1hcEV4dHJhU3RhdGVQcm9wcyA9IChzdGF0ZTogSU1TdGF0ZSwgb3duUHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPik6IEV4dHJhUHJvcHMgPT4ge1xuICByZXR1cm4ge1xuICAgIGgzOiBzdGF0ZS53aWRnZXRzU3RhdGVbb3duUHJvcHMud2lkZ2V0SWRdPy5oMyB8fCBudWxsXG4gIH1cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=