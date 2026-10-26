System.register(["jimu-core/emotion","jimu-core","jimu-arcgis","jimu-ui","esri/geometry/support/webMercatorUtils","esri/core/reactiveUtils","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_support_webMercatorUtils__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_core_core_reactiveUtils__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_support_webMercatorUtils__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_core_core_reactiveUtils__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_support_webMercatorUtils__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_core_core_reactiveUtils__[key] = module[key];
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/erddap-query/src/runtime/widget.css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/erddap-query/src/runtime/widget.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.hover:hover {
  color: red;
}

.hover {
  color: green;
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/erddap-query/src/runtime/widget.css"],"names":[],"mappings":"AAAA;EACI,UAAA;AACJ;;AAEA;EACI,YAAA;AACJ","sourcesContent":[".hover:hover {\n    color: red;\n}\n\n.hover {\n    color: green;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./your-extensions/widgets/erddap-query/src/runtime/erddap-utils.ts":
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/erddap-query/src/runtime/erddap-utils.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertSqlToErddapParams: () => (/* binding */ convertSqlToErddapParams),
/* harmony export */   findFisheryRegionByCode: () => (/* binding */ findFisheryRegionByCode),
/* harmony export */   findOceanNameByCode: () => (/* binding */ findOceanNameByCode),
/* harmony export */   parseSql: () => (/* binding */ parseSql),
/* harmony export */   stripLeadingParens: () => (/* binding */ stripLeadingParens),
/* harmony export */   stripTrailingParens: () => (/* binding */ stripTrailingParens)
/* harmony export */ });
function findOceanNameByCode(code) {
    const values = new Map([
        ['0', 'Arctic'],
        ['1', 'Indian'],
        ['2', 'North Atlantic'],
        ['3', 'North Pacific'],
        ['4', 'South Atlantic'],
        ['5', 'South Pacific'],
        ['6', 'Southern']
    ]);
    return values.get(code) || '';
}
function findFisheryRegionByCode(code) {
    const values = [
        'Caribbean',
        'Gulf (formerly Gulf of Mexico)',
        'Mid-Atlantic',
        'New England',
        'North Pacific',
        'Pacific',
        'South Atlantic',
        'Unknown',
        'Western Pacific'
    ];
    return values[parseInt(code)] || '';
}
// mutates the provided array
function convertSqlToErddapParams(sql, searchParams) {
    // manipulate SQL string into list of 3-element lists (field, operator, value)
    const clauses = parseSql(sql);
    //   const clauses = sql
    //     .replace(/\(+?/g, '') // replace left parens
    //     .replace(/\)+?/g, '') // replace right parens
    //     .replace(/LOWER/g, '') // remove the LOWER() function
    //     .split(/ and /i)
    //     .map(elem => {
    //       const t = elem.split(/\s+/)
    //       // construct 3-element array with field, operator, value. Value may have multiple words which need
    //       // to be rejoined and replace single quotes with double quotes
    //       return t.slice(0, 2).concat(t.slice(2).join(' ').replace(/'/g, '"'))
    //     })
    // console.log(clauses)
    // build key/value pairs for specified parameters
    let found = clauses.find(elem => elem[0] === 'VernacularNameCategory');
    // ERDDAP requires the value to be in double quotes, so we need to replace single quotes with double quotes
    if (found) {
        searchParams.push(`VernacularNameCategory=${found[2].replace(/'/g, '"')}`);
    }
    // HighlightImageURL is skipped since ERDDAP does not support the OR condition
    found = clauses.find(elem => elem[0] === 'ImageURL');
    if (found) {
        searchParams.push(`ImageURL=~"https://.*"`);
    }
    // DepthInMeters is a special case because it can be specified multiple times, e.g. "DepthInMeters >= 0 AND DepthInMeters <= 100"
    clauses.filter(elem => elem[0] === 'DepthInMeters').forEach(elem => {
        searchParams.push(`DepthInMeters${elem[1]}${elem[2]}`);
    });
    found = clauses.find(elem => elem[0] === 'ScientificName');
    if (found) {
        searchParams.push(`ScientificName=${found[2].replace(/'/g, '"')}`);
    }
    // ObservationYear is a special case because it can be specified multiple times, e.g. "ObservationYear >= 2020 AND ObservationYear <= 2026"
    clauses.filter(elem => elem[0] === 'ObservationYear').forEach(elem => {
        searchParams.push(`ObservationYear${elem[1]}${elem[2]}`);
    });
    found = clauses.find(elem => elem[0] === 'FishCouncilRegionCode');
    if (found) {
        searchParams.push(`FishCouncilRegion="${findFisheryRegionByCode(found[2])}"`);
    }
    found = clauses.find(elem => elem[0] === 'OceanCode');
    if (found) {
        searchParams.push(`Ocean="${findOceanNameByCode(found[2])}"`);
    }
    found = clauses.find(elem => elem[0] === 'Phylum');
    if (found) {
        searchParams.push(`Phylum=${found[2].replace(/'/g, '"')}`);
    }
    found = clauses.find(elem => elem[0] === 'Class');
    if (found) {
        searchParams.push(`Class=${found[2].replace(/'/g, '"')}`);
    }
    // Order is a reserved word and renamed in the hosted feature layer
    found = clauses.find(elem => elem[0] === 'Order_');
    if (found) {
        searchParams.push(`Order=${found[2]}`);
    }
    found = clauses.find(elem => elem[0] === 'Family');
    if (found) {
        searchParams.push(`Family=${found[2].replace(/'/g, '"')}`);
    }
    found = clauses.find(elem => elem[0] === 'Genus');
    if (found) {
        searchParams.push(`Genus=${found[2]}`);
    }
    found = clauses.find(elem => elem[0] === 'Synonyms');
    if (found) {
        // e.g. "%paradox%" -> ".*paradox.*"
        // mark as case-insensitive pattern match
        searchParams.push(`Synonyms=~"(?i).*${found[2].replace(/['%]/g, '')}.*"`);
    }
    found = clauses.find(elem => elem[0] === 'VerbatimScientificName');
    if (found) {
        const regex = /["%]/g;
        const str = found[2].replace(regex, '');
        searchParams.push(`VerbatimScientificName=~"(?i).*${str.replace(/['%]/g, '')}.*"`);
    }
    found = clauses.find(elem => elem[0] === 'AphiaID');
    if (found) {
        searchParams.push(`AphiaID=${found[2]}`);
    }
    found = clauses.find(elem => elem[0] === 'DatasetID');
    if (found) {
        searchParams.push(`DatasetID=${found[2]}`);
    }
    found = clauses.find(elem => elem[0] === 'CatalogNumber');
    if (found) {
        searchParams.push(`CatalogNumber=${found[2]}`);
    }
    found = clauses.find(elem => elem[0] === 'Specimen');
    if (found) {
        searchParams.push(`RecordType=~".*specimen*"`);
    }
}
function stripTrailingParens(sql) {
    while (sql.endsWith(')')) {
        sql = sql.slice(0, -1);
    }
    return sql;
}
function stripLeadingParens(sql) {
    while (sql.startsWith('(')) {
        sql = sql.slice(1);
    }
    return sql;
}
/**
 * take a SQL string and split it into clauses, stripping leading and trailing
 * parentheses from each clause. Returns a list of lists, where each inner list
 * is a clause split into its components (field, operator, value).
 * WARNING: this function does not recognize nested clauses
 * @returns list of clauses
 */
function parseSql(sql) {
    // Experience Builder sometimes uses lowercase 'and' and 'or' instead of uppercase so standardize for parsing
    const sqlString = sql.replaceAll(' and ', ' AND ').replaceAll(' or ', ' OR ');
    const clausesList = sqlString.split(/AND|OR/).map(clause => clause.trim());
    const parsedList = clausesList.map(clause => {
        clause = stripLeadingParens(clause);
        clause = stripTrailingParens(clause);
        return clause.split(/\s+/).map(part => part.trim());
    });
    return parsedList.map(clause => {
        // join all parts after the operator into a single value string
        clause[2] = clause.slice(2).join(' ');
        // remove any extra parts after the value
        return clause.splice(0, 3);
    });
}


/***/ }),

/***/ "./your-extensions/widgets/erddap-query/src/runtime/widget.css":
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/erddap-query/src/runtime/widget.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./widget.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/erddap-query/src/runtime/widget.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "@arcgis/core/core/reactiveUtils":
/*!******************************************!*\
  !*** external "esri/core/reactiveUtils" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_core_reactiveUtils__;

/***/ }),

/***/ "@arcgis/core/geometry/support/webMercatorUtils":
/*!*********************************************************!*\
  !*** external "esri/geometry/support/webMercatorUtils" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_core_geometry_support_webMercatorUtils__;

/***/ }),

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/erddap-query/src/runtime/widget.tsx ***!
  \*********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _arcgis_core_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @arcgis/core/geometry/support/webMercatorUtils */ "@arcgis/core/geometry/support/webMercatorUtils");
/* harmony import */ var _arcgis_core_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @arcgis/core/core/reactiveUtils */ "@arcgis/core/core/reactiveUtils");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _erddap_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./erddap-utils */ "./your-extensions/widgets/erddap-query/src/runtime/erddap-utils.ts");
/* harmony import */ var _widget_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widget.css */ "./your-extensions/widgets/erddap-query/src/runtime/widget.css");

/** @jsx jsx */








const { useSelector } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.ReactRedux;
// interface CoordsObject {
//   xmin: number
//   ymin: number
//   xmax: number
//   ymax: number
// }
/*
function findOceanNameByCode (code: string): string {
  const values = new Map([
    ['0', 'Arctic'],
    ['1', 'Indian'],
    ['2', 'North Atlantic'],
    ['3', 'North Pacific'],
    ['4', 'South Atlantic'],
    ['5', 'South Pacific'],
    ['6', 'Southern']
  ])
  return values.get(code) || ''
}
*/
/*
function findFisheryRegionByCode (code: string): string {
  const values = [
    'Caribbean',
    'Gulf (formerly Gulf of Mexico)',
    'Mid-Atlantic',
    'New England',
    'North Pacific',
    'Pacific',
    'South Atlantic',
    'Unknown',
    'Western Pacific'
  ]
  return values[parseInt(code)] || ''
}
*/
// user-defined type guard using type predicate
function isFeatureLayerDataSourceType(obj) {
    return obj.type === 'FEATURE_LAYER';
}
/*
// mutates the provided array
function convertSqlToErddapParams (sql: string, searchParams: string[]) {
  console.log('inside convertSqlToErddapParams with ', sql)

  // manipulate SQL string into list of 3-element lists (field, operator, value)
  const clauses = sql
    .replace(/\(+?/g, '') // replace left parens
    .replace(/\)+?/g, '') // replace right parens
    .replace(/LOWER/g, '') // remove the LOWER() function
    .split(/ and /i)
    .map(elem => {
      const t = elem.split(/\s+/)
      // construct 3-element array with field, operator, value. Value may have multiple words which need
      // to be rejoined and replace single quotes with double quotes
      return t.slice(0, 2).concat(t.slice(2).join(' ').replace(/'/g, '"'))
    })
  // console.log(clauses)

  // build key/value pairs for specified parameters
  clauses.filter(elem => elem[0].toLowerCase() === 'vernacularnamecategory').forEach(elem => {
    searchParams.push(`VernacularNameCategory=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'imageurl').forEach(elem => {
    searchParams.push('ImageURL=~"https://.*"')
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'depthinmeters').forEach(elem => {
    searchParams.push(`DepthInMeters${elem[1]}${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'scientificname').forEach(elem => {
    searchParams.push(`ScientificName=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'observationyear').forEach(elem => {
    searchParams.push(`ObservationYear${elem[1]}${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'fishcouncilregioncode').forEach(elem => {
    searchParams.push(`FishCouncilRegion="${findFisheryRegionByCode(elem[2])}"`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'oceancode').forEach(elem => {
    searchParams.push(`Ocean="${findOceanNameByCode(elem[2])}"`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'phylum').forEach(elem => {
    searchParams.push(`Phylum=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'class').forEach(elem => {
    searchParams.push(`Class=${elem[2]}`)
  })

  // Order is a reserved word and renamed in the hosted feature layer
  clauses.filter(elem => elem[0].toLowerCase() === 'order_').forEach(elem => {
    searchParams.push(`Order=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'family').forEach(elem => {
    searchParams.push(`Family=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'genus').forEach(elem => {
    searchParams.push(`Genus=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'synonyms').forEach(elem => {
    // e.g. "%paradox%" -> ".*paradox.*"
    const regex = /["%]/g
    const str = elem[2].replace(regex, '')
    // mark as case-insensitive pattern match
    searchParams.push(`Synonyms=~"(?i).*${str}.*"`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'verbatimscientificname').forEach(elem => {
    const regex = /["%]/g
    const str = elem[2].replace(regex, '')
    searchParams.push(`VerbatimScientificName=~"(?i).*${str}.*"`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'aphiaid').forEach(elem => {
    searchParams.push(`AphiaID=${elem[2]}`)
  })

  clauses.filter(elem => elem[0].toLowerCase() === 'datasetid').forEach(elem => {
    searchParams.push(`DatasetID=${elem[2]}`)
  })

  // clauses.filter(elem => elem[0].toLowerCase() === 'identificationqualifier').forEach(elem => {
  //   searchParams.push(`IdentificationQualifier=${elem[2]}`)
  // })
}
*/
// function formatExtent (mercExtent: Extent) {
//   const geoExtent = webMercatorUtils.webMercatorToGeographic(mercExtent, false) as Extent
//   return `${geoExtent.xmin.toFixed(3)}, ${geoExtent.ymin.toFixed(3)}, ${geoExtent.xmax.toFixed(3)}, ${geoExtent.ymax.toFixed(3)}`
// }
function Widget(props) {
    var _a, _b;
    console.log('rendering erddap-query...');
    const [activeDs, setActiveDs] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [geographicMapExtent, setGeographicMapExtent] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const [mapView, setMapView] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const validBboxRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(false);
    // get state for this widget.
    const widgetState = useSelector((state) => {
        return state.widgetsState[props.widgetId];
    });
    // build ERDDAP Url. Note that uses a non-standard pattern for search parameters
    const stdFields = 'DatabaseVersion,ShallowFlag,DatasetID,CatalogNumber,SampleID,ImageURL,Repository,ScientificName,VernacularNameCategory,TaxonRank,IdentificationQualifier,Locality,latitude,longitude,DepthInMeters,DepthMethod,ObservationDate,SurveyID,Station,EventID,SamplingEquipment,LocationAccuracy,RecordType,DataProvider';
    const searchParams = [];
    if (mapView && mapView.extent) {
        const mapExtent = (0,_arcgis_core_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_4__.webMercatorToGeographic)(mapView.extent);
        // flag for antimeridian-crossing extent
        validBboxRef.current = (mapExtent.xmin < mapExtent.xmax);
        searchParams.push(`latitude>=${mapExtent.ymin.toFixed(4)}`);
        searchParams.push(`latitude<=${mapExtent.ymax.toFixed(4)}`);
        searchParams.push(`longitude>=${mapExtent.xmin.toFixed(4)}`);
        searchParams.push(`longitude<=${mapExtent.xmax.toFixed(4)}`);
    }
    if (activeDs && activeDs.getCurrentQueryParams().where) {
        // augments provided object w/ key/value pairs from SQL where clause
        (0,_erddap_utils__WEBPACK_IMPORTED_MODULE_7__.convertSqlToErddapParams)(activeDs.getCurrentQueryParams().where, searchParams);
    }
    const erddapUrl = `${props.config.erddapBaseUrl}.html?${stdFields}&${searchParams.join('&')}`;
    // console.log({ erddapUrl })
    function copyUrlBtn() {
        // TODO add message to toaster
        navigator.clipboard.writeText(generateErddapUrl()).then(() => { console.debug('copied to clipboard'); });
    }
    function generateErddapUrl(type = 'html') {
        if (type === 'html') {
            return erddapUrl;
        }
        else {
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
        (0,_arcgis_core_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__.watch)(() => jmv.view.stationary, (stationary) => {
            if (stationary) {
                // console.log('ERDDAP extent: ', formatExtent(jmv.view.extent))
                const extent = (0,_arcgis_core_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_4__.webMercatorToGeographic)(jmv.view.extent);
                setGeographicMapExtent(extent);
            }
        });
    };
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "erddap-query jimu-widget m-2", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0], widgetId: props.id, onDataSourceCreated: onDataSourceCreated }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b[0], onActiveViewChange: activeViewChangeHandler }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { position: 'absolute', right: '15px' }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { placement: "top", title: "Copy URL to clipboard", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { "aria-label": "Button", icon: true, onClick: copyUrlBtn, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 10H8.723l1.602 1.602-.707.707L6.808 9.5l2.81-2.81.707.708L8.723 9H16zM3 13h4v-1H3zm8-12v1h2v6h-1V3h-1v1H3V3H2v12h10v-4h1v5H1V2h2V1h2.277a1.984 1.984 0 0 1 3.446 0zm-1 1H8v-.318A.682.682 0 0 0 7.318 1h-.636A.682.682 0 0 0 6 1.682V2H4v1h6zM7 6H3v1h4zm-4 4h2V9H3z"/><path fill="none" d="M0 0h16v16H0z"/></svg>' }) }) }) }), validBboxRef.current
                ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { placement: "top", title: "open ERDDAP console to customize output", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: "primary", role: "button", href: generateErddapUrl('html'), target: "_blank", style: { marginRight: '20px', textDecoration: 'none', color: 'white' }, children: "Customize" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { placement: "top", title: "Download standard CSV file with current filters applied", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: "primary", role: "button", href: generateErddapUrl('csvp'), target: "_blank", style: { textDecoration: 'none', color: 'white' }, children: "Download" }) })] })
                : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '80%', alignContent: 'center' }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Warning: missing or invalid spatial extent. Please ensure area of interest does not cross the antimeridian (i.e. international date line)" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { placement: "top", title: "Download the entire database in a CSV format", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: "primary", role: "button", href: props.config.csvFileUrl, target: "_blank", style: { width: '230px', marginTop: '20px', textDecoration: 'none', color: 'white' }, children: "Download Entire Database" }) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { margin: '20px' }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Note that ERDDAP may take a few minutes to respond to your request" }) })] }));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9lcmRkYXAtcXVlcnkvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhIQUE4SCxVQUFVLE1BQU0sS0FBSyxVQUFVLHVDQUF1QyxpQkFBaUIsR0FBRyxZQUFZLG1CQUFtQixHQUFHLG1CQUFtQjtBQUNyUjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNiMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFTLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUseUJBQW1CLEdBQ2xKLElBQ047Z0JBQ0osQ0FBQyxDQUFDLHlFQUFLLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxZQUNsRCwrTkFDb0MsR0FDaEMsRUFFVix5RUFBSyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxZQUM3RSxnRUFBQyw0Q0FBTyxJQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLDhDQUE4QyxZQUMzRSxnRUFBQywyQ0FBTSxJQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLHlDQUFtQyxHQUNuTSxHQUNOLEVBRU4seUVBQUssS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUM1QiwySkFBK0UsR0FDM0UsSUFDRixDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2VyZGRhcC1xdWVyeS9zcmMvcnVudGltZS93aWRnZXQuY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9lcmRkYXAtcXVlcnkvc3JjL3J1bnRpbWUvZXJkZGFwLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9lcmRkYXAtcXVlcnkvc3JjL3J1bnRpbWUvd2lkZ2V0LmNzcz83NjkzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9jb3JlL3JlYWN0aXZlVXRpbHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2VyZGRhcC1xdWVyeS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaG92ZXI6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4uaG92ZXIge1xuICBjb2xvcjogZ3JlZW47XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9lcmRkYXAtcXVlcnkvc3JjL3J1bnRpbWUvd2lkZ2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaG92ZXI6aG92ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gZmluZE9jZWFuTmFtZUJ5Q29kZSAoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdmFsdWVzID0gbmV3IE1hcChbXG4gICAgWycwJywgJ0FyY3RpYyddLFxuICAgIFsnMScsICdJbmRpYW4nXSxcbiAgICBbJzInLCAnTm9ydGggQXRsYW50aWMnXSxcbiAgICBbJzMnLCAnTm9ydGggUGFjaWZpYyddLFxuICAgIFsnNCcsICdTb3V0aCBBdGxhbnRpYyddLFxuICAgIFsnNScsICdTb3V0aCBQYWNpZmljJ10sXG4gICAgWyc2JywgJ1NvdXRoZXJuJ11cbiAgXSlcbiAgcmV0dXJuIHZhbHVlcy5nZXQoY29kZSkgfHwgJydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXNoZXJ5UmVnaW9uQnlDb2RlIChjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgJ0NhcmliYmVhbicsXG4gICAgJ0d1bGYgKGZvcm1lcmx5IEd1bGYgb2YgTWV4aWNvKScsXG4gICAgJ01pZC1BdGxhbnRpYycsXG4gICAgJ05ldyBFbmdsYW5kJyxcbiAgICAnTm9ydGggUGFjaWZpYycsXG4gICAgJ1BhY2lmaWMnLFxuICAgICdTb3V0aCBBdGxhbnRpYycsXG4gICAgJ1Vua25vd24nLFxuICAgICdXZXN0ZXJuIFBhY2lmaWMnXG4gIF1cbiAgcmV0dXJuIHZhbHVlc1twYXJzZUludChjb2RlKV0gfHwgJydcbn1cblxuLy8gbXV0YXRlcyB0aGUgcHJvdmlkZWQgYXJyYXlcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0U3FsVG9FcmRkYXBQYXJhbXMgKHNxbDogc3RyaW5nLCBzZWFyY2hQYXJhbXM6IHN0cmluZ1tdKSB7XG4gIC8vIG1hbmlwdWxhdGUgU1FMIHN0cmluZyBpbnRvIGxpc3Qgb2YgMy1lbGVtZW50IGxpc3RzIChmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKVxuICBjb25zdCBjbGF1c2VzID0gcGFyc2VTcWwoc3FsKVxuLy8gICBjb25zdCBjbGF1c2VzID0gc3FsXG4vLyAgICAgLnJlcGxhY2UoL1xcKCs/L2csICcnKSAvLyByZXBsYWNlIGxlZnQgcGFyZW5zXG4vLyAgICAgLnJlcGxhY2UoL1xcKSs/L2csICcnKSAvLyByZXBsYWNlIHJpZ2h0IHBhcmVuc1xuLy8gICAgIC5yZXBsYWNlKC9MT1dFUi9nLCAnJykgLy8gcmVtb3ZlIHRoZSBMT1dFUigpIGZ1bmN0aW9uXG4vLyAgICAgLnNwbGl0KC8gYW5kIC9pKVxuLy8gICAgIC5tYXAoZWxlbSA9PiB7XG4vLyAgICAgICBjb25zdCB0ID0gZWxlbS5zcGxpdCgvXFxzKy8pXG4vLyAgICAgICAvLyBjb25zdHJ1Y3QgMy1lbGVtZW50IGFycmF5IHdpdGggZmllbGQsIG9wZXJhdG9yLCB2YWx1ZS4gVmFsdWUgbWF5IGhhdmUgbXVsdGlwbGUgd29yZHMgd2hpY2ggbmVlZFxuLy8gICAgICAgLy8gdG8gYmUgcmVqb2luZWQgYW5kIHJlcGxhY2Ugc2luZ2xlIHF1b3RlcyB3aXRoIGRvdWJsZSBxdW90ZXNcbi8vICAgICAgIHJldHVybiB0LnNsaWNlKDAsIDIpLmNvbmNhdCh0LnNsaWNlKDIpLmpvaW4oJyAnKS5yZXBsYWNlKC8nL2csICdcIicpKVxuLy8gICAgIH0pXG4gIC8vIGNvbnNvbGUubG9nKGNsYXVzZXMpXG5cbiAgLy8gYnVpbGQga2V5L3ZhbHVlIHBhaXJzIGZvciBzcGVjaWZpZWQgcGFyYW1ldGVyc1xuICBsZXQgZm91bmQgPSBjbGF1c2VzLmZpbmQoZWxlbSA9PiBlbGVtWzBdID09PSAnVmVybmFjdWxhck5hbWVDYXRlZ29yeScpXG4gIC8vIEVSRERBUCByZXF1aXJlcyB0aGUgdmFsdWUgdG8gYmUgaW4gZG91YmxlIHF1b3Rlcywgc28gd2UgbmVlZCB0byByZXBsYWNlIHNpbmdsZSBxdW90ZXMgd2l0aCBkb3VibGUgcXVvdGVzXG4gIGlmIChmb3VuZCkgeyBzZWFyY2hQYXJhbXMucHVzaChgVmVybmFjdWxhck5hbWVDYXRlZ29yeT0ke2ZvdW5kWzJdLnJlcGxhY2UoLycvZywgJ1wiJyl9YCApIH1cblxuICAvLyBIaWdobGlnaHRJbWFnZVVSTCBpcyBza2lwcGVkIHNpbmNlIEVSRERBUCBkb2VzIG5vdCBzdXBwb3J0IHRoZSBPUiBjb25kaXRpb25cbiAgZm91bmQgPSBjbGF1c2VzLmZpbmQoZWxlbSA9PiBlbGVtWzBdID09PSAnSW1hZ2VVUkwnKVxuICBpZiAoZm91bmQpIHsgc2VhcmNoUGFyYW1zLnB1c2goYEltYWdlVVJMPX5cImh0dHBzOi8vLipcImAgKSB9XG5cbiAgLy8gRGVwdGhJbk1ldGVycyBpcyBhIHNwZWNpYWwgY2FzZSBiZWNhdXNlIGl0IGNhbiBiZSBzcGVjaWZpZWQgbXVsdGlwbGUgdGltZXMsIGUuZy4gXCJEZXB0aEluTWV0ZXJzID49IDAgQU5EIERlcHRoSW5NZXRlcnMgPD0gMTAwXCJcbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdID09PSAnRGVwdGhJbk1ldGVycycpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYERlcHRoSW5NZXRlcnMke2VsZW1bMV19JHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgZm91bmQgPSBjbGF1c2VzLmZpbmQoZWxlbSA9PiBlbGVtWzBdID09PSAnU2NpZW50aWZpY05hbWUnKVxuICBpZiAoZm91bmQpIHsgc2VhcmNoUGFyYW1zLnB1c2goYFNjaWVudGlmaWNOYW1lPSR7Zm91bmRbMl0ucmVwbGFjZSgvJy9nLCAnXCInKX1gKSB9XG5cbiAgLy8gT2JzZXJ2YXRpb25ZZWFyIGlzIGEgc3BlY2lhbCBjYXNlIGJlY2F1c2UgaXQgY2FuIGJlIHNwZWNpZmllZCBtdWx0aXBsZSB0aW1lcywgZS5nLiBcIk9ic2VydmF0aW9uWWVhciA+PSAyMDIwIEFORCBPYnNlcnZhdGlvblllYXIgPD0gMjAyNlwiXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXSA9PT0gJ09ic2VydmF0aW9uWWVhcicpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYE9ic2VydmF0aW9uWWVhciR7ZWxlbVsxXX0ke2VsZW1bMl19YClcbiAgfSlcblxuICBmb3VuZCA9IGNsYXVzZXMuZmluZChlbGVtID0+IGVsZW1bMF0gPT09ICdGaXNoQ291bmNpbFJlZ2lvbkNvZGUnKVxuICBpZiAoZm91bmQpIHsgc2VhcmNoUGFyYW1zLnB1c2goYEZpc2hDb3VuY2lsUmVnaW9uPVwiJHtmaW5kRmlzaGVyeVJlZ2lvbkJ5Q29kZShmb3VuZFsyXSl9XCJgKSB9XG5cbiAgZm91bmQgPSBjbGF1c2VzLmZpbmQoZWxlbSA9PiBlbGVtWzBdID09PSAnT2NlYW5Db2RlJylcbiAgaWYgKGZvdW5kKSB7IHNlYXJjaFBhcmFtcy5wdXNoKGBPY2Vhbj1cIiR7ZmluZE9jZWFuTmFtZUJ5Q29kZShmb3VuZFsyXSl9XCJgKSB9XG5cbiAgZm91bmQgPSBjbGF1c2VzLmZpbmQoZWxlbSA9PiBlbGVtWzBdID09PSAnUGh5bHVtJylcbiAgaWYgKGZvdW5kKSB7IHNlYXJjaFBhcmFtcy5wdXNoKGBQaHlsdW09JHtmb3VuZFsyXS5yZXBsYWNlKC8nL2csICdcIicpfWApIH1cblxuICBmb3VuZCA9IGNsYXVzZXMuZmluZChlbGVtID0+IGVsZW1bMF0gPT09ICdDbGFzcycpXG4gIGlmIChmb3VuZCkgeyBzZWFyY2hQYXJhbXMucHVzaChgQ2xhc3M9JHtmb3VuZFsyXS5yZXBsYWNlKC8nL2csICdcIicpfWApIH1cblxuICAvLyBPcmRlciBpcyBhIHJlc2VydmVkIHdvcmQgYW5kIHJlbmFtZWQgaW4gdGhlIGhvc3RlZCBmZWF0dXJlIGxheWVyXG4gIGZvdW5kID0gY2xhdXNlcy5maW5kKGVsZW0gPT4gZWxlbVswXSA9PT0gJ09yZGVyXycpXG4gIGlmIChmb3VuZCkgeyBzZWFyY2hQYXJhbXMucHVzaChgT3JkZXI9JHtmb3VuZFsyXX1gKSB9XG5cbiAgZm91bmQgPSBjbGF1c2VzLmZpbmQoZWxlbSA9PiBlbGVtWzBdID09PSAnRmFtaWx5JylcbiAgaWYgKGZvdW5kKSB7IHNlYXJjaFBhcmFtcy5wdXNoKGBGYW1pbHk9JHtmb3VuZFsyXS5yZXBsYWNlKC8nL2csICdcIicpfWApIH1cblxuICBmb3VuZCA9IGNsYXVzZXMuZmluZChlbGVtID0+IGVsZW1bMF0gPT09ICdHZW51cycpXG4gIGlmIChmb3VuZCkgeyBzZWFyY2hQYXJhbXMucHVzaChgR2VudXM9JHtmb3VuZFsyXX1gKSB9XG5cbiAgZm91bmQgPSBjbGF1c2VzLmZpbmQoZWxlbSA9PiBlbGVtWzBdID09PSAnU3lub255bXMnKVxuICBpZiAoZm91bmQpIHtcbiAgICAvLyBlLmcuIFwiJXBhcmFkb3glXCIgLT4gXCIuKnBhcmFkb3guKlwiXG4gICAgLy8gbWFyayBhcyBjYXNlLWluc2Vuc2l0aXZlIHBhdHRlcm4gbWF0Y2hcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgU3lub255bXM9flwiKD9pKS4qJHtmb3VuZFsyXS5yZXBsYWNlKC9bJyVdL2csICcnKX0uKlwiYClcbiAgfVxuXG4gIGZvdW5kID0gY2xhdXNlcy5maW5kKGVsZW0gPT4gZWxlbVswXSA9PT0gJ1ZlcmJhdGltU2NpZW50aWZpY05hbWUnKVxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCByZWdleCA9IC9bXCIlXS9nXG4gICAgY29uc3Qgc3RyID0gZm91bmRbMl0ucmVwbGFjZShyZWdleCwgJycpXG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYFZlcmJhdGltU2NpZW50aWZpY05hbWU9flwiKD9pKS4qJHtzdHIucmVwbGFjZSgvWyclXS9nLCAnJyl9LipcImApXG4gIH1cblxuICBmb3VuZCA9IGNsYXVzZXMuZmluZChlbGVtID0+IGVsZW1bMF0gPT09ICdBcGhpYUlEJylcbiAgaWYgKGZvdW5kKSB7IHNlYXJjaFBhcmFtcy5wdXNoKGBBcGhpYUlEPSR7Zm91bmRbMl19YCkgfVxuXG4gIGZvdW5kID0gY2xhdXNlcy5maW5kKGVsZW0gPT4gZWxlbVswXSA9PT0gJ0RhdGFzZXRJRCcpXG4gIGlmIChmb3VuZCkgeyBzZWFyY2hQYXJhbXMucHVzaChgRGF0YXNldElEPSR7Zm91bmRbMl19YCkgfVxuXG4gIGZvdW5kID0gY2xhdXNlcy5maW5kKGVsZW0gPT4gZWxlbVswXSA9PT0gJ0NhdGFsb2dOdW1iZXInKVxuICBpZiAoZm91bmQpIHsgc2VhcmNoUGFyYW1zLnB1c2goYENhdGFsb2dOdW1iZXI9JHtmb3VuZFsyXX1gKSB9XG5cbiAgZm91bmQgPSBjbGF1c2VzLmZpbmQoZWxlbSA9PiBlbGVtWzBdID09PSAnU3BlY2ltZW4nKVxuICBpZiAoZm91bmQpIHsgc2VhcmNoUGFyYW1zLnB1c2goYFJlY29yZFR5cGU9flwiLipzcGVjaW1lbipcImApIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1BhcmVucyAoc3FsOiBzdHJpbmcpOiBzdHJpbmcge1xuICB3aGlsZSAoc3FsLmVuZHNXaXRoKCcpJykpIHtcbiAgICBzcWwgPSBzcWwuc2xpY2UoMCwgLTEpXG4gIH1cbiAgcmV0dXJuIHNxbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBMZWFkaW5nUGFyZW5zIChzcWw6IHN0cmluZyk6IHN0cmluZyB7XG4gIHdoaWxlIChzcWwuc3RhcnRzV2l0aCgnKCcpKSB7XG4gICAgc3FsID0gc3FsLnNsaWNlKDEpXG4gIH1cbiAgcmV0dXJuIHNxbFxufVxuXG4vKipcbiAqIHRha2UgYSBTUUwgc3RyaW5nIGFuZCBzcGxpdCBpdCBpbnRvIGNsYXVzZXMsIHN0cmlwcGluZyBsZWFkaW5nIGFuZCB0cmFpbGluZ1xuICogcGFyZW50aGVzZXMgZnJvbSBlYWNoIGNsYXVzZS4gUmV0dXJucyBhIGxpc3Qgb2YgbGlzdHMsIHdoZXJlIGVhY2ggaW5uZXIgbGlzdFxuICogaXMgYSBjbGF1c2Ugc3BsaXQgaW50byBpdHMgY29tcG9uZW50cyAoZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSkuXG4gKiBXQVJOSU5HOiB0aGlzIGZ1bmN0aW9uIGRvZXMgbm90IHJlY29nbml6ZSBuZXN0ZWQgY2xhdXNlc1xuICogQHJldHVybnMgbGlzdCBvZiBjbGF1c2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNxbCAoc3FsOiBzdHJpbmcpOiBzdHJpbmdbXVtdIHtcbiAgICAvLyBFeHBlcmllbmNlIEJ1aWxkZXIgc29tZXRpbWVzIHVzZXMgbG93ZXJjYXNlICdhbmQnIGFuZCAnb3InIGluc3RlYWQgb2YgdXBwZXJjYXNlIHNvIHN0YW5kYXJkaXplIGZvciBwYXJzaW5nXG4gICAgY29uc3Qgc3FsU3RyaW5nID0gc3FsLnJlcGxhY2VBbGwoJyBhbmQgJywgJyBBTkQgJykucmVwbGFjZUFsbCgnIG9yICcsICcgT1IgJylcbiAgICBjb25zdCBjbGF1c2VzTGlzdCA9IHNxbFN0cmluZy5zcGxpdCgvQU5EfE9SLykubWFwKGNsYXVzZSA9PiBjbGF1c2UudHJpbSgpKVxuICAgIGNvbnN0IHBhcnNlZExpc3QgPSBjbGF1c2VzTGlzdC5tYXAoY2xhdXNlID0+IHtcbiAgICAgICAgY2xhdXNlID0gc3RyaXBMZWFkaW5nUGFyZW5zKGNsYXVzZSlcbiAgICAgICAgY2xhdXNlID0gc3RyaXBUcmFpbGluZ1BhcmVucyhjbGF1c2UpXG4gICAgICAgIHJldHVybiBjbGF1c2Uuc3BsaXQoL1xccysvKS5tYXAocGFydCA9PiBwYXJ0LnRyaW0oKSlcbiAgICB9KVxuICAgIHJldHVybiBwYXJzZWRMaXN0Lm1hcChjbGF1c2UgPT4ge1xuICAgICAgICAvLyBqb2luIGFsbCBwYXJ0cyBhZnRlciB0aGUgb3BlcmF0b3IgaW50byBhIHNpbmdsZSB2YWx1ZSBzdHJpbmdcbiAgICAgICAgY2xhdXNlWzJdID0gY2xhdXNlLnNsaWNlKDIpLmpvaW4oJyAnKVxuICAgICAgICAvLyByZW1vdmUgYW55IGV4dHJhIHBhcnRzIGFmdGVyIHRoZSB2YWx1ZVxuICAgICAgICByZXR1cm4gY2xhdXNlLnNwbGljZSgwLDMpXG4gICAgfSlcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vd2lkZ2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3dpZGdldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2NvcmVfcmVhY3RpdmVVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfZ2VvbWV0cnlfc3VwcG9ydF93ZWJNZXJjYXRvclV0aWxzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcbiAganN4LFxuICB0eXBlIElNU3RhdGUsXG4gIFJlYWN0UmVkdXgsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgRGF0YVNvdXJjZUNvbXBvbmVudCxcbiAgdHlwZSBGZWF0dXJlTGF5ZXJEYXRhU291cmNlXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIHR5cGUgSmltdU1hcFZpZXcsXG4gIEppbXVNYXBWaWV3Q29tcG9uZW50XG59IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBUb29sdGlwIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB0eXBlIEV4dGVudCBmcm9tICdlc3JpL2dlb21ldHJ5L0V4dGVudCdcbmltcG9ydCB0eXBlIE1hcFZpZXcgZnJvbSAnQGFyY2dpcy9jb3JlL3ZpZXdzL01hcFZpZXcnXG5pbXBvcnQgeyB3ZWJNZXJjYXRvclRvR2VvZ3JhcGhpYyB9IGZyb20gXCJAYXJjZ2lzL2NvcmUvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzXCJcbmltcG9ydCB7IHdhdGNoIH0gZnJvbSBcIkBhcmNnaXMvY29yZS9jb3JlL3JlYWN0aXZlVXRpbHNcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29udmVydFNxbFRvRXJkZGFwUGFyYW1zIH0gZnJvbSAnLi9lcmRkYXAtdXRpbHMnXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0ICcuL3dpZGdldC5jc3MnXG5cbmNvbnN0IHsgdXNlU2VsZWN0b3IgfSA9IFJlYWN0UmVkdXhcblxuLy8gaW50ZXJmYWNlIENvb3Jkc09iamVjdCB7XG4vLyAgIHhtaW46IG51bWJlclxuLy8gICB5bWluOiBudW1iZXJcbi8vICAgeG1heDogbnVtYmVyXG4vLyAgIHltYXg6IG51bWJlclxuLy8gfVxuLypcbmZ1bmN0aW9uIGZpbmRPY2Vhbk5hbWVCeUNvZGUgKGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHZhbHVlcyA9IG5ldyBNYXAoW1xuICAgIFsnMCcsICdBcmN0aWMnXSxcbiAgICBbJzEnLCAnSW5kaWFuJ10sXG4gICAgWycyJywgJ05vcnRoIEF0bGFudGljJ10sXG4gICAgWyczJywgJ05vcnRoIFBhY2lmaWMnXSxcbiAgICBbJzQnLCAnU291dGggQXRsYW50aWMnXSxcbiAgICBbJzUnLCAnU291dGggUGFjaWZpYyddLFxuICAgIFsnNicsICdTb3V0aGVybiddXG4gIF0pXG4gIHJldHVybiB2YWx1ZXMuZ2V0KGNvZGUpIHx8ICcnXG59XG4qL1xuLypcbmZ1bmN0aW9uIGZpbmRGaXNoZXJ5UmVnaW9uQnlDb2RlIChjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgJ0NhcmliYmVhbicsXG4gICAgJ0d1bGYgKGZvcm1lcmx5IEd1bGYgb2YgTWV4aWNvKScsXG4gICAgJ01pZC1BdGxhbnRpYycsXG4gICAgJ05ldyBFbmdsYW5kJyxcbiAgICAnTm9ydGggUGFjaWZpYycsXG4gICAgJ1BhY2lmaWMnLFxuICAgICdTb3V0aCBBdGxhbnRpYycsXG4gICAgJ1Vua25vd24nLFxuICAgICdXZXN0ZXJuIFBhY2lmaWMnXG4gIF1cbiAgcmV0dXJuIHZhbHVlc1twYXJzZUludChjb2RlKV0gfHwgJydcbn1cbiovXG4vLyB1c2VyLWRlZmluZWQgdHlwZSBndWFyZCB1c2luZyB0eXBlIHByZWRpY2F0ZVxuZnVuY3Rpb24gaXNGZWF0dXJlTGF5ZXJEYXRhU291cmNlVHlwZSAob2JqOiB1bmtub3duKTogb2JqIGlzIEZlYXR1cmVMYXllckRhdGFTb3VyY2Uge1xuICByZXR1cm4gKG9iaiBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlKS50eXBlID09PSAnRkVBVFVSRV9MQVlFUidcbn1cblxuLypcbi8vIG11dGF0ZXMgdGhlIHByb3ZpZGVkIGFycmF5XG5mdW5jdGlvbiBjb252ZXJ0U3FsVG9FcmRkYXBQYXJhbXMgKHNxbDogc3RyaW5nLCBzZWFyY2hQYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnNvbGUubG9nKCdpbnNpZGUgY29udmVydFNxbFRvRXJkZGFwUGFyYW1zIHdpdGggJywgc3FsKVxuXG4gIC8vIG1hbmlwdWxhdGUgU1FMIHN0cmluZyBpbnRvIGxpc3Qgb2YgMy1lbGVtZW50IGxpc3RzIChmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKVxuICBjb25zdCBjbGF1c2VzID0gc3FsXG4gICAgLnJlcGxhY2UoL1xcKCs/L2csICcnKSAvLyByZXBsYWNlIGxlZnQgcGFyZW5zXG4gICAgLnJlcGxhY2UoL1xcKSs/L2csICcnKSAvLyByZXBsYWNlIHJpZ2h0IHBhcmVuc1xuICAgIC5yZXBsYWNlKC9MT1dFUi9nLCAnJykgLy8gcmVtb3ZlIHRoZSBMT1dFUigpIGZ1bmN0aW9uXG4gICAgLnNwbGl0KC8gYW5kIC9pKVxuICAgIC5tYXAoZWxlbSA9PiB7XG4gICAgICBjb25zdCB0ID0gZWxlbS5zcGxpdCgvXFxzKy8pXG4gICAgICAvLyBjb25zdHJ1Y3QgMy1lbGVtZW50IGFycmF5IHdpdGggZmllbGQsIG9wZXJhdG9yLCB2YWx1ZS4gVmFsdWUgbWF5IGhhdmUgbXVsdGlwbGUgd29yZHMgd2hpY2ggbmVlZFxuICAgICAgLy8gdG8gYmUgcmVqb2luZWQgYW5kIHJlcGxhY2Ugc2luZ2xlIHF1b3RlcyB3aXRoIGRvdWJsZSBxdW90ZXNcbiAgICAgIHJldHVybiB0LnNsaWNlKDAsIDIpLmNvbmNhdCh0LnNsaWNlKDIpLmpvaW4oJyAnKS5yZXBsYWNlKC8nL2csICdcIicpKVxuICAgIH0pXG4gIC8vIGNvbnNvbGUubG9nKGNsYXVzZXMpXG5cbiAgLy8gYnVpbGQga2V5L3ZhbHVlIHBhaXJzIGZvciBzcGVjaWZpZWQgcGFyYW1ldGVyc1xuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3Zlcm5hY3VsYXJuYW1lY2F0ZWdvcnknKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBWZXJuYWN1bGFyTmFtZUNhdGVnb3J5PSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnaW1hZ2V1cmwnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKCdJbWFnZVVSTD1+XCJodHRwczovLy4qXCInKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZGVwdGhpbm1ldGVycycpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYERlcHRoSW5NZXRlcnMke2VsZW1bMV19JHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdzY2llbnRpZmljbmFtZScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYFNjaWVudGlmaWNOYW1lPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnb2JzZXJ2YXRpb255ZWFyJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgT2JzZXJ2YXRpb25ZZWFyJHtlbGVtWzFdfSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZmlzaGNvdW5jaWxyZWdpb25jb2RlJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgRmlzaENvdW5jaWxSZWdpb249XCIke2ZpbmRGaXNoZXJ5UmVnaW9uQnlDb2RlKGVsZW1bMl0pfVwiYClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ29jZWFuY29kZScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYE9jZWFuPVwiJHtmaW5kT2NlYW5OYW1lQnlDb2RlKGVsZW1bMl0pfVwiYClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3BoeWx1bScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYFBoeWx1bT0ke2VsZW1bMl19YClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2NsYXNzJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgQ2xhc3M9JHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgLy8gT3JkZXIgaXMgYSByZXNlcnZlZCB3b3JkIGFuZCByZW5hbWVkIGluIHRoZSBob3N0ZWQgZmVhdHVyZSBsYXllclxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ29yZGVyXycpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYE9yZGVyPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZmFtaWx5JykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgRmFtaWx5PSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZ2VudXMnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBHZW51cz0ke2VsZW1bMl19YClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3N5bm9ueW1zJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICAvLyBlLmcuIFwiJXBhcmFkb3glXCIgLT4gXCIuKnBhcmFkb3guKlwiXG4gICAgY29uc3QgcmVnZXggPSAvW1wiJV0vZ1xuICAgIGNvbnN0IHN0ciA9IGVsZW1bMl0ucmVwbGFjZShyZWdleCwgJycpXG4gICAgLy8gbWFyayBhcyBjYXNlLWluc2Vuc2l0aXZlIHBhdHRlcm4gbWF0Y2hcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgU3lub255bXM9flwiKD9pKS4qJHtzdHJ9LipcImApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICd2ZXJiYXRpbXNjaWVudGlmaWNuYW1lJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBjb25zdCByZWdleCA9IC9bXCIlXS9nXG4gICAgY29uc3Qgc3RyID0gZWxlbVsyXS5yZXBsYWNlKHJlZ2V4LCAnJylcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgVmVyYmF0aW1TY2llbnRpZmljTmFtZT1+XCIoP2kpLioke3N0cn0uKlwiYClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2FwaGlhaWQnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBBcGhpYUlEPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZGF0YXNldGlkJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgRGF0YXNldElEPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIC8vIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnaWRlbnRpZmljYXRpb25xdWFsaWZpZXInKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAvLyAgIHNlYXJjaFBhcmFtcy5wdXNoKGBJZGVudGlmaWNhdGlvblF1YWxpZmllcj0ke2VsZW1bMl19YClcbiAgLy8gfSlcbn1cbiovXG4vLyBmdW5jdGlvbiBmb3JtYXRFeHRlbnQgKG1lcmNFeHRlbnQ6IEV4dGVudCkge1xuLy8gICBjb25zdCBnZW9FeHRlbnQgPSB3ZWJNZXJjYXRvclV0aWxzLndlYk1lcmNhdG9yVG9HZW9ncmFwaGljKG1lcmNFeHRlbnQsIGZhbHNlKSBhcyBFeHRlbnRcbi8vICAgcmV0dXJuIGAke2dlb0V4dGVudC54bWluLnRvRml4ZWQoMyl9LCAke2dlb0V4dGVudC55bWluLnRvRml4ZWQoMyl9LCAke2dlb0V4dGVudC54bWF4LnRvRml4ZWQoMyl9LCAke2dlb0V4dGVudC55bWF4LnRvRml4ZWQoMyl9YFxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc29sZS5sb2coJ3JlbmRlcmluZyBlcmRkYXAtcXVlcnkuLi4nKVxuICBjb25zdCBbYWN0aXZlRHMsIHNldEFjdGl2ZURzXSA9IHVzZVN0YXRlPEZlYXR1cmVMYXllckRhdGFTb3VyY2U+KClcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBjb25zdCBbZ2VvZ3JhcGhpY01hcEV4dGVudCwgc2V0R2VvZ3JhcGhpY01hcEV4dGVudF0gPSB1c2VTdGF0ZTxFeHRlbnQ+KClcbiAgY29uc3QgW21hcFZpZXcsIHNldE1hcFZpZXddID0gdXNlU3RhdGU8TWFwVmlldz4oKVxuICBjb25zdCB2YWxpZEJib3hSZWYgPSB1c2VSZWYoZmFsc2UpXG5cbiAgLy8gZ2V0IHN0YXRlIGZvciB0aGlzIHdpZGdldC5cbiAgY29uc3Qgd2lkZ2V0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHtcbiAgICByZXR1cm4gc3RhdGUud2lkZ2V0c1N0YXRlW3Byb3BzLndpZGdldElkXVxuICB9KVxuXG4gIC8vIGJ1aWxkIEVSRERBUCBVcmwuIE5vdGUgdGhhdCB1c2VzIGEgbm9uLXN0YW5kYXJkIHBhdHRlcm4gZm9yIHNlYXJjaCBwYXJhbWV0ZXJzXG4gIGNvbnN0IHN0ZEZpZWxkcyA9ICdEYXRhYmFzZVZlcnNpb24sU2hhbGxvd0ZsYWcsRGF0YXNldElELENhdGFsb2dOdW1iZXIsU2FtcGxlSUQsSW1hZ2VVUkwsUmVwb3NpdG9yeSxTY2llbnRpZmljTmFtZSxWZXJuYWN1bGFyTmFtZUNhdGVnb3J5LFRheG9uUmFuayxJZGVudGlmaWNhdGlvblF1YWxpZmllcixMb2NhbGl0eSxsYXRpdHVkZSxsb25naXR1ZGUsRGVwdGhJbk1ldGVycyxEZXB0aE1ldGhvZCxPYnNlcnZhdGlvbkRhdGUsU3VydmV5SUQsU3RhdGlvbixFdmVudElELFNhbXBsaW5nRXF1aXBtZW50LExvY2F0aW9uQWNjdXJhY3ksUmVjb3JkVHlwZSxEYXRhUHJvdmlkZXInXG4gIGNvbnN0IHNlYXJjaFBhcmFtczogc3RyaW5nW10gPSBbXVxuXG4gIGlmIChtYXBWaWV3ICYmIG1hcFZpZXcuZXh0ZW50KSB7XG4gICAgY29uc3QgbWFwRXh0ZW50ID0gd2ViTWVyY2F0b3JUb0dlb2dyYXBoaWMobWFwVmlldy5leHRlbnQpIGFzIEV4dGVudFxuICAgIC8vIGZsYWcgZm9yIGFudGltZXJpZGlhbi1jcm9zc2luZyBleHRlbnRcbiAgICB2YWxpZEJib3hSZWYuY3VycmVudCA9IChtYXBFeHRlbnQueG1pbiA8IG1hcEV4dGVudC54bWF4KVxuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBsYXRpdHVkZT49JHttYXBFeHRlbnQueW1pbi50b0ZpeGVkKDQpfWApXG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYGxhdGl0dWRlPD0ke21hcEV4dGVudC55bWF4LnRvRml4ZWQoNCl9YClcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgbG9uZ2l0dWRlPj0ke21hcEV4dGVudC54bWluLnRvRml4ZWQoNCl9YClcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgbG9uZ2l0dWRlPD0ke21hcEV4dGVudC54bWF4LnRvRml4ZWQoNCl9YClcbiAgfVxuICBpZiAoYWN0aXZlRHMgJiYgYWN0aXZlRHMuZ2V0Q3VycmVudFF1ZXJ5UGFyYW1zKCkud2hlcmUpIHtcbiAgICAvLyBhdWdtZW50cyBwcm92aWRlZCBvYmplY3Qgdy8ga2V5L3ZhbHVlIHBhaXJzIGZyb20gU1FMIHdoZXJlIGNsYXVzZVxuICAgIGNvbnZlcnRTcWxUb0VyZGRhcFBhcmFtcyhhY3RpdmVEcy5nZXRDdXJyZW50UXVlcnlQYXJhbXMoKS53aGVyZSwgc2VhcmNoUGFyYW1zKVxuICB9XG4gIGNvbnN0IGVyZGRhcFVybCA9IGAke3Byb3BzLmNvbmZpZy5lcmRkYXBCYXNlVXJsfS5odG1sPyR7c3RkRmllbGRzfSYke3NlYXJjaFBhcmFtcy5qb2luKCcmJyl9YFxuICAvLyBjb25zb2xlLmxvZyh7IGVyZGRhcFVybCB9KVxuXG4gIGZ1bmN0aW9uIGNvcHlVcmxCdG4gKCkge1xuICAgIC8vIFRPRE8gYWRkIG1lc3NhZ2UgdG8gdG9hc3RlclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGdlbmVyYXRlRXJkZGFwVXJsKCkpLnRoZW4oKCkgPT4geyBjb25zb2xlLmRlYnVnKCdjb3BpZWQgdG8gY2xpcGJvYXJkJykgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlRXJkZGFwVXJsICh0eXBlID0gJ2h0bWwnKSB7XG4gICAgaWYgKHR5cGUgPT09ICdodG1sJykge1xuICAgICAgcmV0dXJuIGVyZGRhcFVybFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXJkZGFwVXJsPy5yZXBsYWNlKCdkZWVwX3NlYV9jb3JhbHMuaHRtbCcsICdkZWVwX3NlYV9jb3JhbHMuY3N2cCcpXG4gICAgfVxuICB9XG5cbiAgLy8gcnVucyBvbmNlXG4gIGZ1bmN0aW9uIG9uRGF0YVNvdXJjZUNyZWF0ZWQgKGRzOiBEYXRhU291cmNlKSB7XG4gICAgY29uc3QgZmVhdHVyZUxheWVyRGF0YVNvdXJjZSA9IGlzRmVhdHVyZUxheWVyRGF0YVNvdXJjZVR5cGUoZHMpID8gZHMgOiB1bmRlZmluZWRcbiAgICAvLyBjb25zdCBkc1RpdGxlID0gZmVhdHVyZUxheWVyRGF0YVNvdXJjZS5sYXllci50aXRsZVxuICAgIHNldEFjdGl2ZURzKGZlYXR1cmVMYXllckRhdGFTb3VyY2UpXG4gIH1cblxuICAvLyBydW5zIG9uY2VcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIHNldE1hcFZpZXcoam12LnZpZXcgYXMgTWFwVmlldylcbiAgICAvLyBUT0RPIHdoeSBkb2VzIHRoaXMgbm90IGZpcmUgd2hlbiB3aWRnZXQgaXMgaW4gV2luZG93IGJ1dCB3b3JrcyBub3JtYWxseSB3aGVuIGRpcmVjdGx5IGluIGxheW91dD9cbiAgICAvLyAndXBkYXRpbmcnIHByb3BlcnR5IGZpcmVzIG11bHRpcGxlIHRpbWVzIGR1cmluZyB6b29tL3BhbiBzbyB1c2luZyAnc3RhdGlvbmFyeScgcHJvcGVydHkgcmVkdWNlcyB1bm5lY2Vzc2FyeSByZS1yZW5kZXJzXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBqbXYudmlldy5zdGF0aW9uYXJ5LFxuICAgICAgKHN0YXRpb25hcnk6Ym9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoc3RhdGlvbmFyeSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUkREQVAgZXh0ZW50OiAnLCBmb3JtYXRFeHRlbnQoam12LnZpZXcuZXh0ZW50KSlcbiAgICAgICAgICBjb25zdCBleHRlbnQgPSB3ZWJNZXJjYXRvclRvR2VvZ3JhcGhpYyhqbXYudmlldy5leHRlbnQpIGFzIEV4dGVudFxuICAgICAgICAgIHNldEdlb2dyYXBoaWNNYXBFeHRlbnQoZXh0ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVyZGRhcC1xdWVyeSBqaW11LXdpZGdldCBtLTJcIj5cbiAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XG4gICAgICAgIHVzZURhdGFTb3VyY2U9e3Byb3BzLnVzZURhdGFTb3VyY2VzPy5bMF19XG4gICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cbiAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17b25EYXRhU291cmNlQ3JlYXRlZH1cbiAgICAgIC8+XG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxuICAgICAgLz5cbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAncmlnaHQnIH19PlxuICAgICAgICA8VGV4dEFyZWEgc3R5bGU9e3t3aWR0aDpcIjg1JVwifX0gcmVhZE9ubHk9XCJ0cnVlXCIgdmFsdWU9e2VyZGRhcFVybH0gLz5cbiAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtlcmRkYXBVcmx9IHN0eWxlPXt7IHdpZHRoOiAnODUlJywgaGVpZ2h0OiAnMjUwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19IHJlYWRPbmx5PXt0cnVlfS8+XG4gICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwiQ29weSBVUkwgdG8gY2xpcGJvYXJkXCI+XG4gICAgICAgICAgPEJ1dHRvbiBhcmlhLWxhYmVsPVwiQnV0dG9uXCIgaWNvbiBvbkNsaWNrPXtjb3B5VXJsQnRufSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cbiAgICAgICAgICAgIDxJY29uIGljb249JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBkPVwiTTE2IDEwSDguNzIzbDEuNjAyIDEuNjAyLS43MDcuNzA3TDYuODA4IDkuNWwyLjgxLTIuODEuNzA3LjcwOEw4LjcyMyA5SDE2ek0zIDEzaDR2LTFIM3ptOC0xMnYxaDJ2NmgtMVYzaC0xdjFIM1YzSDJ2MTJoMTB2LTRoMXY1SDFWMmgyVjFoMi4yNzdhMS45ODQgMS45ODQgMCAwIDEgMy40NDYgMHptLTEgMUg4di0uMzE4QS42ODIuNjgyIDAgMCAwIDcuMzE4IDFoLS42MzZBLjY4Mi42ODIgMCAwIDAgNiAxLjY4MlYySDR2MWg2ek03IDZIM3YxaDR6bS00IDRoMlY5SDN6XCIvPjxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMTZ2MTZIMHpcIi8+PC9zdmc+J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcxNXB4JyB9fT5cbiAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkNvcHkgVVJMIHRvIGNsaXBib2FyZFwiPlxuICAgICAgICAgIDxCdXR0b24gYXJpYS1sYWJlbD1cIkJ1dHRvblwiIGljb24gb25DbGljaz17Y29weVVybEJ0bn0+XG4gICAgICAgICAgICA8SWNvbiBpY29uPSc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PHBhdGggZD1cIk0xNiAxMEg4LjcyM2wxLjYwMiAxLjYwMi0uNzA3LjcwN0w2LjgwOCA5LjVsMi44MS0yLjgxLjcwNy43MDhMOC43MjMgOUgxNnpNMyAxM2g0di0xSDN6bTgtMTJ2MWgydjZoLTFWM2gtMXYxSDNWM0gydjEyaDEwdi00aDF2NUgxVjJoMlYxaDIuMjc3YTEuOTg0IDEuOTg0IDAgMCAxIDMuNDQ2IDB6bS0xIDFIOHYtLjMxOEEuNjgyLjY4MiAwIDAgMCA3LjMxOCAxaC0uNjM2QS42ODIuNjgyIDAgMCAwIDYgMS42ODJWMkg0djFoNnpNNyA2SDN2MWg0em0tNCA0aDJWOUgzelwiLz48cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDE2djE2SDB6XCIvPjwvc3ZnPidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICAge3ZhbGlkQmJveFJlZi5jdXJyZW50XG4gICAgICAgID8gPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwib3BlbiBFUkREQVAgY29uc29sZSB0byBjdXN0b21pemUgb3V0cHV0XCI+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHJvbGU9XCJidXR0b25cIiBocmVmPXtnZW5lcmF0ZUVyZGRhcFVybCgnaHRtbCcpfSB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzIwcHgnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjb2xvcjogJ3doaXRlJyB9fT5DdXN0b21pemU8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkRvd25sb2FkIHN0YW5kYXJkIENTViBmaWxlIHdpdGggY3VycmVudCBmaWx0ZXJzIGFwcGxpZWRcIj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgcm9sZT1cImJ1dHRvblwiIGhyZWY9e2dlbmVyYXRlRXJkZGFwVXJsKCdjc3ZwJyl9IHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnd2hpdGUnIH19PkRvd25sb2FkPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICAgICA6IDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc4MCUnLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgPHA+V2FybmluZzogbWlzc2luZyBvciBpbnZhbGlkIHNwYXRpYWwgZXh0ZW50LiBQbGVhc2UgZW5zdXJlIGFyZWEgb2YgaW50ZXJlc3QgZG9lcyBub3QgY3Jvc3MgdGhlIGFudGltZXJpZGlhblxuICAgICAgICAgICAgICAoaS5lLiBpbnRlcm5hdGlvbmFsIGRhdGUgbGluZSk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJEb3dubG9hZCB0aGUgZW50aXJlIGRhdGFiYXNlIGluIGEgQ1NWIGZvcm1hdFwiPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiByb2xlPVwiYnV0dG9uXCIgaHJlZj17cHJvcHMuY29uZmlnLmNzdkZpbGVVcmx9IHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IHdpZHRoOiAnMjMwcHgnLCBtYXJnaW5Ub3A6ICcyMHB4JywgdGV4dERlY29yYXRpb246ICdub25lJywgY29sb3I6ICd3aGl0ZScgfX0+RG93bmxvYWQgRW50aXJlIERhdGFiYXNlPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzIwcHgnIH19PlxuICAgICAgICA8c3Bhbj5Ob3RlIHRoYXQgRVJEREFQIG1heSB0YWtlIGEgZmV3IG1pbnV0ZXMgdG8gcmVzcG9uZCB0byB5b3VyIHJlcXVlc3Q8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==