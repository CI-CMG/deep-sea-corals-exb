System.register(["jimu-core","jimu-ui","esri/geometry/Extent","esri/geometry/SpatialReference","esri/geometry/support/webMercatorUtils"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "esri/geometry/Extent":
/*!***************************************!*\
  !*** external "esri/geometry/Extent" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__;

/***/ }),

/***/ "esri/geometry/SpatialReference":
/*!*************************************************!*\
  !*** external "esri/geometry/SpatialReference" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_SpatialReference__;

/***/ }),

/***/ "esri/geometry/support/webMercatorUtils":
/*!*********************************************************!*\
  !*** external "esri/geometry/support/webMercatorUtils" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__;

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
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_geometry_Extent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/geometry/Extent */ "esri/geometry/Extent");
/* harmony import */ var esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/geometry/SpatialReference */ "esri/geometry/SpatialReference");
/* harmony import */ var esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/geometry/support/webMercatorUtils */ "esri/geometry/support/webMercatorUtils");
/** @jsx jsx */





const { useSelector } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux;
function Widget(props) {
    //TODO get URL from Settings panel
    const CSVfileUrl = 'https://noaa.maps.arcgis.com/home/item.html?id=f465861aecac410980a7c601cfec7850';
    // get state for this widget
    const widgetState = useSelector((state) => {
        return state.widgetsState[props.widgetId];
    });
    const extent = convertExtentToGeographic(widgetState.extent);
    // flag for antimeridian-crossing extent
    const validBbox = extent && (extent.xmin < extent.xmax);
    const queryString = widgetState.queryString ? widgetState === null || widgetState === void 0 ? void 0 : widgetState.queryString : '1=1';
    const erddapUrl = buildErddapUrl();
    function convertExtentToGeographic(coords) {
        const webmercExtent = new esri_geometry_Extent__WEBPACK_IMPORTED_MODULE_2__["default"]({
            xmin: coords.xmin,
            ymin: coords.ymin,
            xmax: coords.xmax,
            ymax: coords.ymax,
            spatialReference: new esri_geometry_SpatialReference__WEBPACK_IMPORTED_MODULE_3__["default"]({ wkid: 102100 })
        });
        return esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_4__["default"].webMercatorToGeographic(webmercExtent, false);
    }
    function buildErddapUrl() {
        // console.log('inside buildErddapUrl. queryString = ', widgetState?.queryString)
        const stdFields = 'ShallowFlag,DatasetID,CatalogNumber,SampleID,ImageURL,Repository,ScientificName,VernacularNameCategory,TaxonRank,IdentificationQualifier,Locality,latitude,longitude,DepthInMeters,DepthMethod,ObservationDate,SurveyID,Station,EventID,SamplingEquipment,LocationAccuracy,RecordType,DataProvider';
        let url = `${props.config.erddapBaseUrl}.html?${stdFields}&latitude>=${extent.ymin.toFixed(4)}&latitude<=${extent.ymax.toFixed(4)}&longitude>=${extent.xmin.toFixed(4)}&longitude<=${extent.xmax.toFixed(4)}`;
        if (queryString !== '1=1') {
            url += '&' + convertSqlToErddapParams(queryString);
        }
        return url;
    }
    function convertSqlToErddapParams(sql) {
        // console.log('inside convertSqlToErddapParams with ', sql)
        const params = [];
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
            params.push(`VernacularNameCategory=${elem[2]}`);
        });
        clauses.filter(elem => elem[0].toLowerCase() === 'imageurl').forEach(elem => {
            params.push('ImageURL!="NA"');
        });
        clauses.filter(elem => elem[0].toLowerCase() === 'depthinmeters').forEach(elem => {
            params.push(`DepthInMeters ${elem[1]} ${elem[2]}`);
        });
        clauses.filter(elem => elem[0].toLowerCase() === 'scientificname').forEach(elem => {
            params.push(`ScientificName=${elem[2]}`);
        });
        clauses.filter(elem => elem[0].toLowerCase() === 'observationyear').forEach(elem => {
            params.push(`ObservationYear ${elem[1]} ${elem[2]}`);
        });
        clauses.filter(elem => elem[0].toLowerCase() === 'fishcouncilregion').forEach(elem => {
            params.push(`FishCouncilRegion=${elem[2]}`);
        });
        clauses.filter(elem => elem[0].toLowerCase() === 'ocean').forEach(elem => {
            params.push(`Ocean="${findOceanNameByCode(elem[2])}"`);
        });
        clauses.filter(elem => elem[0].toLowerCase() === 'phylum').forEach(elem => {
            params.push(`Phylum=${elem[2]}`);
        });
        clauses.filter(elem => elem[0].toLowerCase() === 'class').forEach(elem => {
            params.push(`Class=${elem[2]}`);
        });
        // Order is a reserved word and renamed in the hosted feature layer
        clauses.filter(elem => elem[0].toLowerCase() === 'order_').forEach(elem => {
            params.push(`Order=${elem[2]}`);
        });
        clauses.filter(elem => elem[0].toLowerCase() === 'family').forEach(elem => {
            params.push(`Family=${elem[2]}`);
        });
        clauses.filter(elem => elem[0].toLowerCase() === 'genus').forEach(elem => {
            params.push(`Genus=${elem[2]}`);
        });
        return params.join('&');
    }
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
    function copyUrlBtn() {
        navigator.clipboard.writeText(erddapUrl).then(() => { console.debug('copied to clipboard'); });
    }
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-demo jimu-widget m-2" },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { position: 'absolute', right: '15px' } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { placement: "top", title: "Copy URL to clipboard" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { "aria-label": "Button", icon: true, onClick: copyUrlBtn },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 10H8.723l1.602 1.602-.707.707L6.808 9.5l2.81-2.81.707.708L8.723 9H16zM3 13h4v-1H3zm8-12v1h2v6h-1V3h-1v1H3V3H2v12h10v-4h1v5H1V2h2V1h2.277a1.984 1.984 0 0 1 3.446 0zm-1 1H8v-.318A.682.682 0 0 0 7.318 1h-.636A.682.682 0 0 0 6 1.682V2H4v1h6zM7 6H3v1h4zm-4 4h2V9H3z"/><path fill="none" d="M0 0h16v16H0z"/></svg>' })))),
        validBbox
            ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { placement: "top", title: "open ERDDAP console to customize output" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", tag: "a", href: erddapUrl, target: "_blank", style: { marginRight: '20px' } }, "Customize")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { placement: "top", title: "Download standard CSV file with current filters applied" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", tag: "a", href: erddapUrl === null || erddapUrl === void 0 ? void 0 : erddapUrl.replace('deep_sea_corals.html', 'deep_sea_corals.csvp'), target: "_blank" }, "Download")))
            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '80%', alignContent: 'center' } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, "Warning: missing or invalid spatial extent. Please ensure area of interest does not cross the antimeridian (i.e. international date line)")),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { placement: "top", title: "Download the entire database in a CSV format" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", tag: "a", href: CSVfileUrl, target: "_blank", style: { width: '230px', marginTop: '20px' } }, "Download Entire Database"))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9lcmRkYXAtcXVlcnkvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQU1HO0FBQzZCO0FBQ047QUFDb0I7QUFDUTtBQUlyRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsaURBQVU7QUFTbkIsU0FBUyxNQUFNLENBQUUsS0FBK0I7SUFDN0Qsa0NBQWtDO0lBQ2xDLE1BQU0sVUFBVSxHQUFHLGlGQUFpRjtJQUVwRyw0QkFBNEI7SUFDNUIsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7UUFDakQsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQyxDQUFDO0lBRUYsTUFBTSxNQUFNLEdBQUcseUJBQXlCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUM1RCx3Q0FBd0M7SUFDeEMsTUFB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QUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFO2dCQUNsRCxzTUFDb0MsQ0FDaEM7UUFFVix3REFBSyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtZQUM3RSwrQ0FBQyw0Q0FBTyxJQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLDhDQUE4QztnQkFDM0UsK0NBQUMsMkNBQU0sSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwrQkFBbUMsQ0FDeEksQ0FDTjtRQUVOLHdEQUFLLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7WUFDNUIsa0lBQStFLENBQzNFLENBQ0YsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9FeHRlbnRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9zdXBwb3J0L3dlYk1lcmNhdG9yVXRpbHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZXJkZGFwLXF1ZXJ5L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfRXh0ZW50X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfU3BhdGlhbFJlZmVyZW5jZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X3N1cHBvcnRfd2ViTWVyY2F0b3JVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcbiAganN4LFxuICB0eXBlIElNU3RhdGUsXG4gIFJlYWN0UmVkdXhcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBUb29sdGlwIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBFeHRlbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9FeHRlbnQnXG5pbXBvcnQgU3BhdGlhbFJlZmVyZW5jZSBmcm9tICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnXG5pbXBvcnQgd2ViTWVyY2F0b3JVdGlscyBmcm9tICdlc3JpL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlscydcbi8vIGltcG9ydCB7IExhYmVsLCBSYWRpbywgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVVSU1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IHsgdXNlU2VsZWN0b3IgfSA9IFJlYWN0UmVkdXhcblxuaW50ZXJmYWNlIENvb3Jkc09iamVjdCB7XG4gIHhtaW46IG51bWJlclxuICB5bWluOiBudW1iZXJcbiAgeG1heDogbnVtYmVyXG4gIHltYXg6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgLy9UT0RPIGdldCBVUkwgZnJvbSBTZXR0aW5ncyBwYW5lbFxuICBjb25zdCBDU1ZmaWxlVXJsID0gJ2h0dHBzOi8vbm9hYS5tYXBzLmFyY2dpcy5jb20vaG9tZS9pdGVtLmh0bWw/aWQ9ZjQ2NTg2MWFlY2FjNDEwOTgwYTdjNjAxY2ZlYzc4NTAnXG5cbiAgLy8gZ2V0IHN0YXRlIGZvciB0aGlzIHdpZGdldFxuICBjb25zdCB3aWRnZXRTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZS53aWRnZXRzU3RhdGVbcHJvcHMud2lkZ2V0SWRdXG4gIH0pXG5cbiAgY29uc3QgZXh0ZW50ID0gY29udmVydEV4dGVudFRvR2VvZ3JhcGhpYyh3aWRnZXRTdGF0ZS5leHRlbnQpXG4gIC8vIGZsYWcgZm9yIGFudGltZXJpZGlhbi1jcm9zc2luZyBleHRlbnRcbiAgY29uc3QgdmFsaWRCYm94ID0gZXh0ZW50ICYmIChleHRlbnQueG1pbiA8IGV4dGVudC54bWF4KVxuICBjb25zdCBxdWVyeVN0cmluZyA9IHdpZGdldFN0YXRlLnF1ZXJ5U3RyaW5nID8gd2lkZ2V0U3RhdGU/LnF1ZXJ5U3RyaW5nIDogJzE9MSdcbiAgY29uc3QgZXJkZGFwVXJsID0gYnVpbGRFcmRkYXBVcmwoKVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRFeHRlbnRUb0dlb2dyYXBoaWMgKGNvb3JkczogQ29vcmRzT2JqZWN0KSB7XG4gICAgY29uc3Qgd2VibWVyY0V4dGVudCA9IG5ldyBFeHRlbnQoe1xuICAgICAgeG1pbjogY29vcmRzLnhtaW4sXG4gICAgICB5bWluOiBjb29yZHMueW1pbixcbiAgICAgIHhtYXg6IGNvb3Jkcy54bWF4LFxuICAgICAgeW1heDogY29vcmRzLnltYXgsXG4gICAgICBzcGF0aWFsUmVmZXJlbmNlOiBuZXcgU3BhdGlhbFJlZmVyZW5jZSh7IHdraWQ6IDEwMjEwMCB9KVxuICAgIH0pXG4gICAgcmV0dXJuICh3ZWJNZXJjYXRvclV0aWxzLndlYk1lcmNhdG9yVG9HZW9ncmFwaGljKHdlYm1lcmNFeHRlbnQsIGZhbHNlKSBhcyBFeHRlbnQpXG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEVyZGRhcFVybCAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2luc2lkZSBidWlsZEVyZGRhcFVybC4gcXVlcnlTdHJpbmcgPSAnLCB3aWRnZXRTdGF0ZT8ucXVlcnlTdHJpbmcpXG4gICAgY29uc3Qgc3RkRmllbGRzID0gJ1NoYWxsb3dGbGFnLERhdGFzZXRJRCxDYXRhbG9nTnVtYmVyLFNhbXBsZUlELEltYWdlVVJMLFJlcG9zaXRvcnksU2NpZW50aWZpY05hbWUsVmVybmFjdWxhck5hbWVDYXRlZ29yeSxUYXhvblJhbmssSWRlbnRpZmljYXRpb25RdWFsaWZpZXIsTG9jYWxpdHksbGF0aXR1ZGUsbG9uZ2l0dWRlLERlcHRoSW5NZXRlcnMsRGVwdGhNZXRob2QsT2JzZXJ2YXRpb25EYXRlLFN1cnZleUlELFN0YXRpb24sRXZlbnRJRCxTYW1wbGluZ0VxdWlwbWVudCxMb2NhdGlvbkFjY3VyYWN5LFJlY29yZFR5cGUsRGF0YVByb3ZpZGVyJ1xuICAgIGxldCB1cmwgPSBgJHtwcm9wcy5jb25maWcuZXJkZGFwQmFzZVVybH0uaHRtbD8ke3N0ZEZpZWxkc30mbGF0aXR1ZGU+PSR7ZXh0ZW50LnltaW4udG9GaXhlZCg0KX0mbGF0aXR1ZGU8PSR7ZXh0ZW50LnltYXgudG9GaXhlZCg0KX0mbG9uZ2l0dWRlPj0ke2V4dGVudC54bWluLnRvRml4ZWQoNCl9JmxvbmdpdHVkZTw9JHtleHRlbnQueG1heC50b0ZpeGVkKDQpfWBcbiAgICBpZiAocXVlcnlTdHJpbmcgIT09ICcxPTEnKSB7XG4gICAgICB1cmwgKz0gJyYnICsgY29udmVydFNxbFRvRXJkZGFwUGFyYW1zKHF1ZXJ5U3RyaW5nKVxuICAgIH1cbiAgICByZXR1cm4gdXJsXG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0U3FsVG9FcmRkYXBQYXJhbXMgKHNxbDogc3RyaW5nKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2luc2lkZSBjb252ZXJ0U3FsVG9FcmRkYXBQYXJhbXMgd2l0aCAnLCBzcWwpXG4gICAgY29uc3QgcGFyYW1zID0gW11cblxuICAgIC8vIG1hbmlwdWxhdGUgU1FMIHN0cmluZyBpbnRvIGxpc3Qgb2YgMy1lbGVtZW50IGxpc3RzIChmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKVxuICAgIGNvbnN0IGNsYXVzZXMgPSBzcWxcbiAgICAgIC5yZXBsYWNlKC9cXCgrPy9nLCAnJykgLy8gcmVwbGFjZSBsZWZ0IHBhcmVuc1xuICAgICAgLnJlcGxhY2UoL1xcKSs/L2csICcnKSAvLyByZXBsYWNlIHJpZ2h0IHBhcmVuc1xuICAgICAgLnJlcGxhY2UoL0xPV0VSL2csICcnKSAvLyByZW1vdmUgdGhlIExPV0VSKCkgZnVuY3Rpb25cbiAgICAgIC5zcGxpdCgvIGFuZCAvaSlcbiAgICAgIC5tYXAoZWxlbSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSBlbGVtLnNwbGl0KC9cXHMrLylcbiAgICAgICAgLy8gY29uc3RydWN0IDMtZWxlbWVudCBhcnJheSB3aXRoIGZpZWxkLCBvcGVyYXRvciwgdmFsdWUuIFZhbHVlIG1heSBoYXZlIG11bHRpcGxlIHdvcmRzIHdoaWNoIG5lZWRcbiAgICAgICAgLy8gdG8gYmUgcmVqb2luZWQgYW5kIHJlcGxhY2Ugc2luZ2xlIHF1b3RlcyB3aXRoIGRvdWJsZSBxdW90ZXNcbiAgICAgICAgcmV0dXJuIHQuc2xpY2UoMCwgMikuY29uY2F0KHQuc2xpY2UoMikuam9pbignICcpLnJlcGxhY2UoLycvZywgJ1wiJykpXG4gICAgICB9KVxuICAgIC8vIGNvbnNvbGUubG9nKGNsYXVzZXMpXG5cbiAgICAvLyBidWlsZCBrZXkvdmFsdWUgcGFpcnMgZm9yIHNwZWNpZmllZCBwYXJhbWV0ZXJzXG4gICAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICd2ZXJuYWN1bGFybmFtZWNhdGVnb3J5JykuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIHBhcmFtcy5wdXNoKGBWZXJuYWN1bGFyTmFtZUNhdGVnb3J5PSR7ZWxlbVsyXX1gKVxuICAgIH0pXG5cbiAgICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2ltYWdldXJsJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIHBhcmFtcy5wdXNoKCdJbWFnZVVSTCE9XCJOQVwiJylcbiAgICB9KVxuXG4gICAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdkZXB0aGlubWV0ZXJzJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIHBhcmFtcy5wdXNoKGBEZXB0aEluTWV0ZXJzICR7ZWxlbVsxXX0gJHtlbGVtWzJdfWApXG4gICAgfSlcblxuICAgIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnc2NpZW50aWZpY25hbWUnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgcGFyYW1zLnB1c2goYFNjaWVudGlmaWNOYW1lPSR7ZWxlbVsyXX1gKVxuICAgIH0pXG5cbiAgICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ29ic2VydmF0aW9ueWVhcicpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBwYXJhbXMucHVzaChgT2JzZXJ2YXRpb25ZZWFyICR7ZWxlbVsxXX0gJHtlbGVtWzJdfWApXG4gICAgfSlcblxuICAgIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZmlzaGNvdW5jaWxyZWdpb24nKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgcGFyYW1zLnB1c2goYEZpc2hDb3VuY2lsUmVnaW9uPSR7ZWxlbVsyXX1gKVxuICAgIH0pXG5cbiAgICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ29jZWFuJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIHBhcmFtcy5wdXNoKGBPY2Vhbj1cIiR7ZmluZE9jZWFuTmFtZUJ5Q29kZShlbGVtWzJdKX1cImApXG4gICAgfSlcblxuICAgIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAncGh5bHVtJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIHBhcmFtcy5wdXNoKGBQaHlsdW09JHtlbGVtWzJdfWApXG4gICAgfSlcblxuICAgIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnY2xhc3MnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgcGFyYW1zLnB1c2goYENsYXNzPSR7ZWxlbVsyXX1gKVxuICAgIH0pXG5cbiAgICAvLyBPcmRlciBpcyBhIHJlc2VydmVkIHdvcmQgYW5kIHJlbmFtZWQgaW4gdGhlIGhvc3RlZCBmZWF0dXJlIGxheWVyXG4gICAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdvcmRlcl8nKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgcGFyYW1zLnB1c2goYE9yZGVyPSR7ZWxlbVsyXX1gKVxuICAgIH0pXG5cbiAgICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbWlseScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBwYXJhbXMucHVzaChgRmFtaWx5PSR7ZWxlbVsyXX1gKVxuICAgIH0pXG5cbiAgICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2dlbnVzJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIHBhcmFtcy5wdXNoKGBHZW51cz0ke2VsZW1bMl19YClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRPY2Vhbk5hbWVCeUNvZGUgKGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgMDogJ0FyY3RpYycsXG4gICAgICAxOiAnSW5kaWFuJyxcbiAgICAgIDI6ICdOb3J0aCBBdGxhbnRpYycsXG4gICAgICAzOiAnTm9ydGggUGFjaWZpYycsXG4gICAgICA0OiAnU291dGggQXRsYW50aWMnLFxuICAgICAgNTogJ1NvdXRoIFBhY2lmaWMnLFxuICAgICAgNjogJ1NvdXRoZXJuJ1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzW2NvZGVdID8gdmFsdWVzW2NvZGVdIDogJydcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvcHlVcmxCdG4gKCkge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGVyZGRhcFVybCkudGhlbigoKSA9PiB7IGNvbnNvbGUuZGVidWcoJ2NvcGllZCB0byBjbGlwYm9hcmQnKSB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1kZW1vIGppbXUtd2lkZ2V0IG0tMlwiPlxuICAgICAgey8qIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdyaWdodCcgfX0+XG4gICAgICAgIDxUZXh0QXJlYSBzdHlsZT17e3dpZHRoOlwiODUlXCJ9fSByZWFkT25seT1cInRydWVcIiB2YWx1ZT17ZXJkZGFwVXJsfSAvPlxuICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2VyZGRhcFVybH0gc3R5bGU9e3sgd2lkdGg6ICc4NSUnLCBoZWlnaHQ6ICcyNTBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0gcmVhZE9ubHk9e3RydWV9Lz5cbiAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJDb3B5IFVSTCB0byBjbGlwYm9hcmRcIj5cbiAgICAgICAgICA8QnV0dG9uIGFyaWEtbGFiZWw9XCJCdXR0b25cIiBpY29uIG9uQ2xpY2s9e2NvcHlVcmxCdG59IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxuICAgICAgICAgICAgPEljb24gaWNvbj0nPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGQ9XCJNMTYgMTBIOC43MjNsMS42MDIgMS42MDItLjcwNy43MDdMNi44MDggOS41bDIuODEtMi44MS43MDcuNzA4TDguNzIzIDlIMTZ6TTMgMTNoNHYtMUgzem04LTEydjFoMnY2aC0xVjNoLTF2MUgzVjNIMnYxMmgxMHYtNGgxdjVIMVYyaDJWMWgyLjI3N2ExLjk4NCAxLjk4NCAwIDAgMSAzLjQ0NiAwem0tMSAxSDh2LS4zMThBLjY4Mi42ODIgMCAwIDAgNy4zMTggMWgtLjYzNkEuNjgyLjY4MiAwIDAgMCA2IDEuNjgyVjJINHYxaDZ6TTcgNkgzdjFoNHptLTQgNGgyVjlIM3pcIi8+PHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgxNnYxNkgwelwiLz48L3N2Zz4nXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzE1cHgnIH19PlxuICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwiQ29weSBVUkwgdG8gY2xpcGJvYXJkXCI+XG4gICAgICAgICAgPEJ1dHRvbiBhcmlhLWxhYmVsPVwiQnV0dG9uXCIgaWNvbiBvbkNsaWNrPXtjb3B5VXJsQnRufT5cbiAgICAgICAgICAgIDxJY29uIGljb249JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBkPVwiTTE2IDEwSDguNzIzbDEuNjAyIDEuNjAyLS43MDcuNzA3TDYuODA4IDkuNWwyLjgxLTIuODEuNzA3LjcwOEw4LjcyMyA5SDE2ek0zIDEzaDR2LTFIM3ptOC0xMnYxaDJ2NmgtMVYzaC0xdjFIM1YzSDJ2MTJoMTB2LTRoMXY1SDFWMmgyVjFoMi4yNzdhMS45ODQgMS45ODQgMCAwIDEgMy40NDYgMHptLTEgMUg4di0uMzE4QS42ODIuNjgyIDAgMCAwIDcuMzE4IDFoLS42MzZBLjY4Mi42ODIgMCAwIDAgNiAxLjY4MlYySDR2MWg2ek03IDZIM3YxaDR6bS00IDRoMlY5SDN6XCIvPjxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMTZ2MTZIMHpcIi8+PC9zdmc+J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9kaXY+XG4gICAgICB7dmFsaWRCYm94XG4gICAgICAgID8gPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwib3BlbiBFUkREQVAgY29uc29sZSB0byBjdXN0b21pemUgb3V0cHV0XCI+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHRhZz1cImFcIiBocmVmPXtlcmRkYXBVcmx9IHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMjBweCcgfX0+Q3VzdG9taXplPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJEb3dubG9hZCBzdGFuZGFyZCBDU1YgZmlsZSB3aXRoIGN1cnJlbnQgZmlsdGVycyBhcHBsaWVkXCI+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHRhZz1cImFcIiBocmVmPXtlcmRkYXBVcmw/LnJlcGxhY2UoJ2RlZXBfc2VhX2NvcmFscy5odG1sJywgJ2RlZXBfc2VhX2NvcmFscy5jc3ZwJyl9IHRhcmdldD1cIl9ibGFua1wiID5Eb3dubG9hZDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgOiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnODAlJywgYWxpZ25Db250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgIDxwPldhcm5pbmc6IG1pc3Npbmcgb3IgaW52YWxpZCBzcGF0aWFsIGV4dGVudC4gUGxlYXNlIGVuc3VyZSBhcmVhIG9mIGludGVyZXN0IGRvZXMgbm90IGNyb3NzIHRoZSBhbnRpbWVyaWRpYW5cbiAgICAgICAgICAgICAgKGkuZS4gaW50ZXJuYXRpb25hbCBkYXRlIGxpbmUpPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgIH1cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkRvd25sb2FkIHRoZSBlbnRpcmUgZGF0YWJhc2UgaW4gYSBDU1YgZm9ybWF0XCI+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHRhZz1cImFcIiBocmVmPXtDU1ZmaWxlVXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyB3aWR0aDogJzIzMHB4JywgbWFyZ2luVG9wOiAnMjBweCcgfX0+RG93bmxvYWQgRW50aXJlIERhdGFiYXNlPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzIwcHgnIH19PlxuICAgICAgICA8c3Bhbj5Ob3RlIHRoYXQgRVJEREFQIG1heSB0YWtlIGEgZmV3IG1pbnV0ZXMgdG8gcmVzcG9uZCB0byB5b3VyIHJlcXVlc3Q8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==