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
function DataDisplay({ h3 }) {
    const url = buildUrl(h3);
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
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { overflowY: 'auto' } },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("table", null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tbody", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[0].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[0].name])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { colSpan: 2, style: { fontWeight: 'bold' } }, "Biodiversity")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[1].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[1].name])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[2].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[2].name])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[3].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseInt(data.features[0].attributes[fields[3].name]).toLocaleString())),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[4].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[4].name])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[5].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[5].name])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { colSpan: 2, style: { fontWeight: 'bold' } }, "Resource Management")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[6].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[6].name])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[7].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[7].name])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[8].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[8].name])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { colSpan: 2, style: { fontWeight: 'bold' } }, "Bathymetry & Seafloor")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[9].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseInt(data.features[0].attributes[fields[9].name]).toLocaleString())),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[10].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseInt(data.features[0].attributes[fields[10].name]).toLocaleString())),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[11].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseFloat(data.features[0].attributes[fields[11].name]).toFixed(2))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[12].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseFloat(data.features[0].attributes[fields[12].name]).toFixed(2))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[13].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseFloat(data.features[0].attributes[fields[13].name]).toFixed(2))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[14].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseFloat(data.features[0].attributes[fields[14].name]).toFixed(2))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[15].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[15].name])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { colSpan: 2, style: { fontWeight: 'bold' } }, "Surveys & Exploration")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[16].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseInt(data.features[0].attributes[fields[16].name]).toLocaleString())),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[17].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseInt(data.features[0].attributes[fields[17].name]).toLocaleString())),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[18].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseInt(data.features[0].attributes[fields[18].name]).toLocaleString())),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[19].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseInt(data.features[0].attributes[fields[19].name]).toLocaleString())),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { colSpan: 2, style: { fontWeight: 'bold' } }, "Human Activity (Shipping, Fishing & Infrastructure)")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[20].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseInt(data.features[0].attributes[fields[20].name]).toLocaleString())),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[21].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseInt(data.features[0].attributes[fields[21].name]).toLocaleString())),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[22].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseInt(data.features[0].attributes[fields[22].name]).toLocaleString())),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[23].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseInt(data.features[0].attributes[fields[23].name]).toLocaleString())),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[24].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseInt(data.features[0].attributes[fields[24].name]).toLocaleString())),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[25].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, parseInt(data.features[0].attributes[fields[25].name]).toLocaleString())),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[26].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[26].name])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[27].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[27].name])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[28].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[28].name])),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, fields[29].display),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", null, data.features[0].attributes[fields[29].name]))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQU0sQ0FBSztnQkFDeEg7b0JBQUksdUVBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBTTtvQkFBQSx1RUFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQU0sQ0FBSztnQkFDeEg7b0JBQUksdUVBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBTTtvQkFBQSx1RUFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQU0sQ0FBSztnQkFDeEg7b0JBQUksdUVBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBTTtvQkFBQSx1RUFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQU0sQ0FBSztnQkFDeEg7b0JBQUksdUVBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBTTtvQkFBQSx1RUFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQU0sQ0FBSztnQkFDeEg7b0JBQUksdUVBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBTTtvQkFBQSx1RUFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEs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QUMsa0JBQWtCLEdBQUcsQ0FBQyxLQUFjLEVBQUUsUUFBa0MsRUFBYyxFQUFFOztJQUM3RixPQUFPO1FBQ0wsRUFBRSxFQUFFLFlBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQywwQ0FBRSxFQUFFLEtBQUksSUFBSTtLQUN0RDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vY2lzL3NyYy9vY2lzLWRpc3BsYXkudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vY2lzL3NyYy91c2VMb2FkSnNvbi50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9vY2lzL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHVzZUxvYWRKU09OIH0gZnJvbSAnLi91c2VMb2FkSnNvbidcblxuY29uc3QgZmllbGRzID0gW1xuICB7IGluZGV4OiAwLCBkaXNwbGF5OiAnSGV4IEdyaWQgSUQnLCBuYW1lOiAnZ3JpZF9pZCcgfSxcbiAgeyBpbmRleDogMSwgZGlzcGxheTogJ0FyZWEgb2YgQmx1ZSBDYXJib24gSGFiaXRhdCAoc3EuIGttKScsIG5hbWU6ICdiX2NhcmJfa20yJyB9LFxuICB7IGluZGV4OiAyLCBkaXNwbGF5OiAnTWF4cCAoT0JJUyknLCBuYW1lOiAnb2Jpc19tYXhwJyB9LFxuICB7IGluZGV4OiAzLCBkaXNwbGF5OiAnQ291bnQgb2YgT0JJUyBSZWNvcmRzJywgbmFtZTogJ29iaXNfbicgfSxcbiAgeyBpbmRleDogNCwgZGlzcGxheTogJ1NoYW5ub24gQmlvZGl2ZXJzaXR5IEluZGV4IChPQklTKScsIG5hbWU6ICdvYmlzX3NoYW5ub24nIH0sXG4gIHsgaW5kZXg6IDUsIGRpc3BsYXk6ICdTcGVjaWVzIFJpY2huZXNzIChPQklTKScsIG5hbWU6ICdvYmlzX3NwJyB9LFxuICB7IGluZGV4OiA2LCBkaXNwbGF5OiAnQ291bnQgb2YgTWFyaW5lIFByb3RlY3RlZCBBcmVhcycsIG5hbWU6ICdtcGFfY291bnQnIH0sXG4gIHsgaW5kZXg6IDcsIGRpc3BsYXk6ICdDb3VudCBvZiBNYXJpbmUgTWFuYWdlZCBBcmVhcycsIG5hbWU6ICdwcm9zZWFfY291bnQnIH0sXG4gIHsgaW5kZXg6IDgsIGRpc3BsYXk6ICdXZWlnaHRlZCBMZXZlbCBvZiBGaXNoaW5nIFByb3RlY3Rpb24nLCBuYW1lOiAncHJvc2VhX2x2bCcgfSxcbiAgeyBpbmRleDogOSwgZGlzcGxheTogJ01pbmltdW0gRGVwdGggKG1ldGVycyknLCBuYW1lOiAnYmF0aHlfbWluJyB9LFxuICB7IGluZGV4OiAxMCwgZGlzcGxheTogJ01heGltdW0gRGVwdGggKG1ldGVycyknLCBuYW1lOiAnYmF0aHlfbWF4JyB9LFxuICB7IGluZGV4OiAxMSwgZGlzcGxheTogJ01lYW4gb2YgRGVwdGggKG1ldGVycyknLCBuYW1lOiAnYmF0aHlfbWVhbicgfSxcbiAgeyBpbmRleDogMTIsIGRpc3BsYXk6ICdNaW5pbXVtIFNsb3BlJywgbmFtZTogJ3Nsb3BlX21pbicgfSxcbiAgeyBpbmRleDogMTMsIGRpc3BsYXk6ICdNYXhpbXVtIFNsb3BlJywgbmFtZTogJ3Nsb3BlX21heCcgfSxcbiAgeyBpbmRleDogMTQsIGRpc3BsYXk6ICdNZWFuIFNsb3BlJywgbmFtZTogJ3Nsb3BlX21lYW4nIH0sXG4gIHsgaW5kZXg6IDE1LCBkaXNwbGF5OiAnUHJlZG9taW5hbnQgU2VhZmxvb3IgTGl0aG9sb2d5IFR5cGUnLCBuYW1lOiAnbGl0aG9sb2d5JyB9LFxuICB7IGluZGV4OiAxNiwgZGlzcGxheTogJ0NvdW50IG9mIEh5ZHJvZ3JhcGhpYyBTdXJ2ZXlzJywgbmFtZTogJ3N1cnZleV9jb3VudCcgfSxcbiAgeyBpbmRleDogMTcsIGRpc3BsYXk6ICdUb3RhbCBBcmVhIG9mIEh5ZHJvZ3JhcGhpYyBTdXJ2ZXlzIChzcS4ga20pJywgbmFtZTogJ3N1cnZleV9hcmVhX2ttJyB9LFxuICB7IGluZGV4OiAxOCwgZGlzcGxheTogJ0NvdW50IG9mIEV4cGVkaXRpb24gVHJhY2tsaW5lcycsIG5hbWU6ICdvZXJfdHJhY2tfY291bnQnIH0sXG4gIHsgaW5kZXg6IDE5LCBkaXNwbGF5OiAnVG90YWwgTGVuZ3RoIG9mIEV4cGVkaXRpb24gVHJhY2tsaW5lcyAoc3EuIGttKScsIG5hbWU6ICdvZXJfdHJhY2tfa20nIH0sXG4gIHsgaW5kZXg6IDIwLCBkaXNwbGF5OiAnR2xvYmFsIFZlc3NlbCBEZW5zaXR5JywgbmFtZTogJ3NoaXBfZ2xvYmFsJyB9LFxuICB7IGluZGV4OiAyMSwgZGlzcGxheTogJ0NvbW1lcmNpYWwgVmVzc2VsIERlbnNpdHknLCBuYW1lOiAnc2hpcF9jb21tJyB9LFxuICB7IGluZGV4OiAyMiwgZGlzcGxheTogJ0Zpc2hpbmcgVmVzc2VsIERlbnNpdHknLCBuYW1lOiAnc2hpcF9maXNoJyB9LFxuICB7IGluZGV4OiAyMywgZGlzcGxheTogJ0xlaXN1cmUgVmVzc2VsIERlbnNpdHknLCBuYW1lOiAnc2hpcF9sZWlzdXJlJyB9LFxuICB7IGluZGV4OiAyNCwgZGlzcGxheTogJ09pbCBhbmQgR2FzIFZlc3NlbCBEZW5zaXR5JywgbmFtZTogJ3NoaXBfb2lsX2dhcycgfSxcbiAgeyBpbmRleDogMjUsIGRpc3BsYXk6ICdQYXNzZW5nZXIgVmVzc2VsIERlbnNpdHknLCBuYW1lOiAnc2hpcF9wYXNzJyB9LFxuICB7IGluZGV4OiAyNiwgZGlzcGxheTogJ0dsb2JhbCBGaXNoaW5nIFdhdGNoIC0gRmlzaGluZyBIb3VycyAoMjAyMCknLCBuYW1lOiAnZ2Z3X2Zpc2hob3VycycgfSxcbiAgeyBpbmRleDogMjcsIGRpc3BsYXk6ICdHbG9iYWwgRmlzaGluZyBXYXRjaCAtIEhvdXJzICgyMDIwKScsIG5hbWU6ICdnZndfaG91cnMnIH0sXG4gIHsgaW5kZXg6IDI4LCBkaXNwbGF5OiAnQ291bnQgb2YgT2lsIGFuZCBHYXMgUGxhdGZvcm1zJywgbmFtZTogJ3BsYXRmb3JtX2NvdW50JyB9LFxuICB7IGluZGV4OiAyOSwgZGlzcGxheTogJ0NvdW50IG9mIFN1Ym1hcmluZSBDYWJsZXMnLCBuYW1lOiAnY2FibGVfY291bnQnIH1cbl1cblxuZnVuY3Rpb24gYnVpbGRVcmwgKGgzOiBzdHJpbmcpIHtcbiAgY29uc3Qgb2Npc0ZlYXR1cmVTZXJ2aWNlVXJsID0gJ2h0dHBzOi8vc2VydmljZXMuYXJjZ2lzLmNvbS9iREFodlFZTUc0V0w4TzVvL0FyY0dJUy9yZXN0L3NlcnZpY2VzL29jaXNfc2RlX29jaXNfbWFzdGVyX3ZpZXdfaDRfdmlldy9GZWF0dXJlU2VydmVyLzEvcXVlcnknXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBzZWFyY2hQYXJhbXMuc2V0KCd3aGVyZScsIGBncmlkX2lkPScke2gzfSdgKVxuICBzZWFyY2hQYXJhbXMuc2V0KCdyZXR1cm5HZW9tZXRyeScsICdmYWxzZScpXG4gIHNlYXJjaFBhcmFtcy5zZXQoJ291dEZpZWxkcycsIGZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpLmpvaW4oJywnKSlcbiAgc2VhcmNoUGFyYW1zLnNldCgnZicsICdwanNvbicpXG4gIHJldHVybiAoYCR7b2Npc0ZlYXR1cmVTZXJ2aWNlVXJsfT8ke3NlYXJjaFBhcmFtcy50b1N0cmluZygpfWApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGFEaXNwbGF5ICh7IGgzIH06IHsgaDM6IHN0cmluZyB9KSB7XG4gIGNvbnN0IHVybCA9IGJ1aWxkVXJsKGgzKVxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VMb2FkSlNPTjxhbnk+KHVybClcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj5cbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdkYXRhIGZyb20gT0NJUyBxdWVyeTogJywgZGF0YSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnYXV0bycgfX0+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMF0uZGlzcGxheX08L3RkPjx0ZD57ZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1swXS5uYW1lXX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+QmlvZGl2ZXJzaXR5PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1sxXS5kaXNwbGF5fTwvdGQ+PHRkPntkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzFdLm5hbWVdfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMl0uZGlzcGxheX08L3RkPjx0ZD57ZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1syXS5uYW1lXX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzNdLmRpc3BsYXl9PC90ZD48dGQ+e3BhcnNlSW50KGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbM10ubmFtZV0pLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1s0XS5kaXNwbGF5fTwvdGQ+PHRkPntkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzRdLm5hbWVdfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbNV0uZGlzcGxheX08L3RkPjx0ZD57ZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1s1XS5uYW1lXX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+UmVzb3VyY2UgTWFuYWdlbWVudDwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbNl0uZGlzcGxheX08L3RkPjx0ZD57ZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1s2XS5uYW1lXX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzddLmRpc3BsYXl9PC90ZD48dGQ+e2RhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbN10ubmFtZV19PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1s4XS5kaXNwbGF5fTwvdGQ+PHRkPntkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzhdLm5hbWVdfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5CYXRoeW1ldHJ5ICYgU2VhZmxvb3I8L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzldLmRpc3BsYXl9PC90ZD48dGQ+e3BhcnNlSW50KGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbOV0ubmFtZV0pLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1sxMF0uZGlzcGxheX08L3RkPjx0ZD57cGFyc2VJbnQoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxMF0ubmFtZV0pLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1sxMV0uZGlzcGxheX08L3RkPjx0ZD57cGFyc2VGbG9hdChkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzExXS5uYW1lXSkudG9GaXhlZCgyKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzEyXS5kaXNwbGF5fTwvdGQ+PHRkPntwYXJzZUZsb2F0KGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMTJdLm5hbWVdKS50b0ZpeGVkKDIpfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMTNdLmRpc3BsYXl9PC90ZD48dGQ+e3BhcnNlRmxvYXQoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxM10ubmFtZV0pLnRvRml4ZWQoMil9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1sxNF0uZGlzcGxheX08L3RkPjx0ZD57cGFyc2VGbG9hdChkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzE0XS5uYW1lXSkudG9GaXhlZCgyKX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZD57ZmllbGRzWzE1XS5kaXNwbGF5fTwvdGQ+PHRkPntkYXRhLmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXNbZmllbGRzWzE1XS5uYW1lXX08L3RkPjwvdHI+XG4gICAgICAgICAgPHRyPjx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+U3VydmV5cyAmIEV4cGxvcmF0aW9uPC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1sxNl0uZGlzcGxheX08L3RkPjx0ZD57cGFyc2VJbnQoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxNl0ubmFtZV0pLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1sxN10uZGlzcGxheX08L3RkPjx0ZD57cGFyc2VJbnQoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxN10ubmFtZV0pLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1sxOF0uZGlzcGxheX08L3RkPjx0ZD57cGFyc2VJbnQoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxOF0ubmFtZV0pLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQ+e2ZpZWxkc1sxOV0uZGlzcGxheX08L3RkPjx0ZD57cGFyc2VJbnQoZGF0YS5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzW2ZpZWxkc1sxOV0ubmFtZV0pLnRvTG9jYWxlU3RyaW5nKCl9PC90ZD48L3RyPlxuICAgICAgICAgIDx0cj48dGQgY29sU3Bhbj17Mn0gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19Pkh1bWFuIEFjdGl2aXR5IChTaGlwcGluZywgRmlzaGluZyAmIEluZnJhc3RydWN0dXJlKTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMjBdLmRpc3BsYXl9PC90ZD48dGQ+e3BhcnNlSW50KGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjBdLm5hbWVdKS50b0xvY2FsZVN0cmluZygpfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMjFdLmRpc3BsYXl9PC90ZD48dGQ+e3BhcnNlSW50KGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjFdLm5hbWVdKS50b0xvY2FsZVN0cmluZygpfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMjJdLmRpc3BsYXl9PC90ZD48dGQ+e3BhcnNlSW50KGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjJdLm5hbWVdKS50b0xvY2FsZVN0cmluZygpfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMjNdLmRpc3BsYXl9PC90ZD48dGQ+e3BhcnNlSW50KGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjNdLm5hbWVdKS50b0xvY2FsZVN0cmluZygpfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMjRdLmRpc3BsYXl9PC90ZD48dGQ+e3BhcnNlSW50KGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjRdLm5hbWVdKS50b0xvY2FsZVN0cmluZygpfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMjVdLmRpc3BsYXl9PC90ZD48dGQ+e3BhcnNlSW50KGRhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjVdLm5hbWVdKS50b0xvY2FsZVN0cmluZygpfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMjZdLmRpc3BsYXl9PC90ZD48dGQ+e2RhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjZdLm5hbWVdfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMjddLmRpc3BsYXl9PC90ZD48dGQ+e2RhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjddLm5hbWVdfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMjhdLmRpc3BsYXl9PC90ZD48dGQ+e2RhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjhdLm5hbWVdfTwvdGQ+PC90cj5cbiAgICAgICAgICA8dHI+PHRkPntmaWVsZHNbMjldLmRpc3BsYXl9PC90ZD48dGQ+e2RhdGEuZmVhdHVyZXNbMF0uYXR0cmlidXRlc1tmaWVsZHNbMjldLm5hbWVdfTwvdGQ+PC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlTG9hZEpTT05SZXN1bHQ8VD4ge1xuICBkYXRhOiBUIHwgbnVsbFxuICBsb2FkaW5nOiBib29sZWFuXG4gIGVycm9yOiBFcnJvciB8IG51bGxcbn1cblxuLyoqXG4gKiBDdXN0b20gaG9vayB0byBsb2FkIGFuZCBwYXJzZSBhIEpTT04gZmlsZVxuICogQHBhcmFtIHVybCAtIFRoZSBVUkwgb3IgcGF0aCB0byB0aGUgSlNPTiBmaWxlXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcGFyc2VkIGRhdGEsIGxvYWRpbmcgc3RhdGUsIGFuZCBhbnkgZXJyb3JzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvYWRKU09OPFQ+ICh1cmw6IHN0cmluZykge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxUIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxFcnJvciB8IG51bGw+KG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdGZXRjaCBlcnJvcjonLCByZXMpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdGZXRjaCBzdWNjZXNzZnVsOicsIHJlcylcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbigoZDogVCkgPT4geyBzZXREYXRhKGQpIH0pXG4gICAgICAuY2F0Y2goKGU6IHVua25vd24pID0+IHsgc2V0RXJyb3IoZSBpbnN0YW5jZW9mIEVycm9yID8gZSA6IG5ldyBFcnJvcihTdHJpbmcoZSkpKSB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4geyBzZXRMb2FkaW5nKGZhbHNlKSB9KVxuICB9LCBbdXJsXSlcblxuICByZXR1cm4geyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5cbi8qXG4gKiB0aGVyZSBhcmUgdHdvIHJ1bnRpbWUgZXZlbnRzIHdoaWNoIGltcGFjdCB0aGlzIHdpZGdldDpcbiAqXG4gKiAxKSBtYXBDbGlja1xuICogdGhpcyBvbmx5IHJlcXVpcmVzIHRoYXQgdGhlIGhleGJpbiBzdW1tYXJ5IGJlIHVwZGF0ZWRcbiAqXG4gKiAyKSBmaWx0ZXIgY2hhbmdlcyAoaS5lLiBEYXRhU291cmNlIHF1ZXJ5UGFyYW1zKVxuICogdGhpcyByZXF1aXJlcyB0aGF0IHRoZSBncmFwaGljcyBsYXllciBiZSB1cGRhdGVkIChib3RoIGJvdW5kYXJpZXMgYW5kIHN5bWJvbG9neSlcbiAqXG4gKiBCb3RoIGFyZSBoYW5kbGVkIChpbmRpcmVjdGx5KSB2aWEgcmVzcGVjdGl2ZSB1c2VFZmZlY3QgaG9va3MsIGkuZS5cbiAqIGV2ZW50IGNoYW5nZXMgc3RhdGUgLT4gdHJpZ2dlcnMgcmUtcmVuZGVyIC0+IHVzZUVmZmVjdCBydW5zXG4gKlxuICogTm90ZSB0aGF0IGlmIGEgaW5kaXZpZHVhbCBoZXhiaW4gd2FzIHNlbGVjdGVkIGF0IHRoZSB0aW1lIHRoZSBxdWVyeVBhcmFtc1xuICogY2hhbmdlLCBpdCB3aWxsIGJlIGRlc2VsZWN0ZWQgYW5kIHRoZSBzdW1tYXJ5IGNsZWFyZWQuIFRoaXMgaXMgbmVjZXNzYXJ5XG4gKiBzaW5jZSBhIGNoYW5nZSBpbiBxdWVyeVBhcmFtcyBtYXkgY2F1c2UgYSBoZXhiaW4gd2hpY2ggd2FzIGZvcm1lcmx5IGRpc3BsYXllZFxuICogdG8gbm8gbG9uZ2VyIGJlIGRyYXduXG4gKi9cbmltcG9ydCB7XG4gIFJlYWN0LFxuICBqc3gsXG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsXG4gIHR5cGUgSU1TdGF0ZSxcbiAgUmVhY3RSZWR1eFxufSBmcm9tICdqaW11LWNvcmUnXG5cbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgRGF0YURpc3BsYXkgZnJvbSAnLi4vb2Npcy1kaXNwbGF5J1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICBoMzogc3RyaW5nXG59XG5jb25zdCB7IHVzZVNlbGVjdG9yIH0gPSBSZWFjdFJlZHV4XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMpIHtcbiAgY29uc29sZS5sb2coJ2luc2lkZSBPQ0lTIHdpZGdldCB3aXRoIHByb3BzOiAnLCBwcm9wcylcblxuICAvLyBnZXQgc3RhdGUgZm9yIHRoaXMgd2lkZ2V0XG4gIGNvbnN0IHdpZGdldFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLndpZGdldHNTdGF0ZVtwcm9wcy53aWRnZXRJZF1cbiAgfSlcbiAgY29uc29sZS5sb2coYGluc2lkZSBPQ0lTOiBoMyA9ICR7d2lkZ2V0U3RhdGU/LmgzfWApXG5cbiAgaWYgKCF3aWRnZXRTdGF0ZT8uaDMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5ObyBIMyBjZWxsIHNlbGVjdGVkPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7d2lkZ2V0U3RhdGUuaDMgPyA8RGF0YURpc3BsYXkgaDM9e3dpZGdldFN0YXRlLmgzfSAvPiA6IDxwPlBsZWFzZSBzZWxlY3QgYSBoZXhhZ29uYWwgYXJlYSB0byBzdW1tYXJpemU8L3A+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbldpZGdldC5tYXBFeHRyYVN0YXRlUHJvcHMgPSAoc3RhdGU6IElNU3RhdGUsIG93blByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pOiBFeHRyYVByb3BzID0+IHtcbiAgcmV0dXJuIHtcbiAgICBoMzogc3RhdGUud2lkZ2V0c1N0YXRlW293blByb3BzLndpZGdldElkXT8uaDMgfHwgbnVsbFxuICB9XG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9