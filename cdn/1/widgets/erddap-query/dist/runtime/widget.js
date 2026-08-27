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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9lcmRkYXAtcXVlcnkvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhIQUE4SCxVQUFVLE1BQU0sS0FBSyxVQUFVLHVDQUF1QyxpQkFBaUIsR0FBRyxZQUFZLG1CQUFtQixHQUFHLG1CQUFtQjtBQUNyUjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNiMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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NENBQU8sSUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyw4Q0FBOEMsWUFDM0UsZ0VBQUMsMkNBQU0sSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSx5Q0FBbUMsR0FDbk0sR0FDTixFQUVOLHlFQUFLLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFDNUIsMkpBQStFLEdBQzNFLElBQ0YsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9lcmRkYXAtcXVlcnkvc3JjL3J1bnRpbWUvd2lkZ2V0LmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZXJkZGFwLXF1ZXJ5L3NyYy9ydW50aW1lL2VyZGRhcC11dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZXJkZGFwLXF1ZXJ5L3NyYy9ydW50aW1lL3dpZGdldC5jc3M/NzY5MyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvY29yZS9yZWFjdGl2ZVV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlsc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9lcmRkYXAtcXVlcnkvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhvdmVyOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmhvdmVyIHtcbiAgY29sb3I6IGdyZWVuO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZXJkZGFwLXF1ZXJ5L3NyYy9ydW50aW1lL3dpZGdldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhvdmVyOmhvdmVyIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGZpbmRPY2Vhbk5hbWVCeUNvZGUgKGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHZhbHVlcyA9IG5ldyBNYXAoW1xuICAgIFsnMCcsICdBcmN0aWMnXSxcbiAgICBbJzEnLCAnSW5kaWFuJ10sXG4gICAgWycyJywgJ05vcnRoIEF0bGFudGljJ10sXG4gICAgWyczJywgJ05vcnRoIFBhY2lmaWMnXSxcbiAgICBbJzQnLCAnU291dGggQXRsYW50aWMnXSxcbiAgICBbJzUnLCAnU291dGggUGFjaWZpYyddLFxuICAgIFsnNicsICdTb3V0aGVybiddXG4gIF0pXG4gIHJldHVybiB2YWx1ZXMuZ2V0KGNvZGUpIHx8ICcnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlzaGVyeVJlZ2lvbkJ5Q29kZSAoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdmFsdWVzID0gW1xuICAgICdDYXJpYmJlYW4nLFxuICAgICdHdWxmIChmb3JtZXJseSBHdWxmIG9mIE1leGljbyknLFxuICAgICdNaWQtQXRsYW50aWMnLFxuICAgICdOZXcgRW5nbGFuZCcsXG4gICAgJ05vcnRoIFBhY2lmaWMnLFxuICAgICdQYWNpZmljJyxcbiAgICAnU291dGggQXRsYW50aWMnLFxuICAgICdVbmtub3duJyxcbiAgICAnV2VzdGVybiBQYWNpZmljJ1xuICBdXG4gIHJldHVybiB2YWx1ZXNbcGFyc2VJbnQoY29kZSldIHx8ICcnXG59XG5cbi8vIG11dGF0ZXMgdGhlIHByb3ZpZGVkIGFycmF5XG5leHBvcnQgZnVuY3Rpb24gY29udmVydFNxbFRvRXJkZGFwUGFyYW1zIChzcWw6IHN0cmluZywgc2VhcmNoUGFyYW1zOiBzdHJpbmdbXSkge1xuICAvLyBtYW5pcHVsYXRlIFNRTCBzdHJpbmcgaW50byBsaXN0IG9mIDMtZWxlbWVudCBsaXN0cyAoZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSlcbiAgY29uc3QgY2xhdXNlcyA9IHBhcnNlU3FsKHNxbClcbi8vICAgY29uc3QgY2xhdXNlcyA9IHNxbFxuLy8gICAgIC5yZXBsYWNlKC9cXCgrPy9nLCAnJykgLy8gcmVwbGFjZSBsZWZ0IHBhcmVuc1xuLy8gICAgIC5yZXBsYWNlKC9cXCkrPy9nLCAnJykgLy8gcmVwbGFjZSByaWdodCBwYXJlbnNcbi8vICAgICAucmVwbGFjZSgvTE9XRVIvZywgJycpIC8vIHJlbW92ZSB0aGUgTE9XRVIoKSBmdW5jdGlvblxuLy8gICAgIC5zcGxpdCgvIGFuZCAvaSlcbi8vICAgICAubWFwKGVsZW0gPT4ge1xuLy8gICAgICAgY29uc3QgdCA9IGVsZW0uc3BsaXQoL1xccysvKVxuLy8gICAgICAgLy8gY29uc3RydWN0IDMtZWxlbWVudCBhcnJheSB3aXRoIGZpZWxkLCBvcGVyYXRvciwgdmFsdWUuIFZhbHVlIG1heSBoYXZlIG11bHRpcGxlIHdvcmRzIHdoaWNoIG5lZWRcbi8vICAgICAgIC8vIHRvIGJlIHJlam9pbmVkIGFuZCByZXBsYWNlIHNpbmdsZSBxdW90ZXMgd2l0aCBkb3VibGUgcXVvdGVzXG4vLyAgICAgICByZXR1cm4gdC5zbGljZSgwLCAyKS5jb25jYXQodC5zbGljZSgyKS5qb2luKCcgJykucmVwbGFjZSgvJy9nLCAnXCInKSlcbi8vICAgICB9KVxuICAvLyBjb25zb2xlLmxvZyhjbGF1c2VzKVxuXG4gIC8vIGJ1aWxkIGtleS92YWx1ZSBwYWlycyBmb3Igc3BlY2lmaWVkIHBhcmFtZXRlcnNcbiAgbGV0IGZvdW5kID0gY2xhdXNlcy5maW5kKGVsZW0gPT4gZWxlbVswXSA9PT0gJ1Zlcm5hY3VsYXJOYW1lQ2F0ZWdvcnknKVxuICAvLyBFUkREQVAgcmVxdWlyZXMgdGhlIHZhbHVlIHRvIGJlIGluIGRvdWJsZSBxdW90ZXMsIHNvIHdlIG5lZWQgdG8gcmVwbGFjZSBzaW5nbGUgcXVvdGVzIHdpdGggZG91YmxlIHF1b3Rlc1xuICBpZiAoZm91bmQpIHsgc2VhcmNoUGFyYW1zLnB1c2goYFZlcm5hY3VsYXJOYW1lQ2F0ZWdvcnk9JHtmb3VuZFsyXS5yZXBsYWNlKC8nL2csICdcIicpfWAgKSB9XG5cbiAgLy8gSGlnaGxpZ2h0SW1hZ2VVUkwgaXMgc2tpcHBlZCBzaW5jZSBFUkREQVAgZG9lcyBub3Qgc3VwcG9ydCB0aGUgT1IgY29uZGl0aW9uXG4gIGZvdW5kID0gY2xhdXNlcy5maW5kKGVsZW0gPT4gZWxlbVswXSA9PT0gJ0ltYWdlVVJMJylcbiAgaWYgKGZvdW5kKSB7IHNlYXJjaFBhcmFtcy5wdXNoKGBJbWFnZVVSTD1+XCJodHRwczovLy4qXCJgICkgfVxuXG4gIC8vIERlcHRoSW5NZXRlcnMgaXMgYSBzcGVjaWFsIGNhc2UgYmVjYXVzZSBpdCBjYW4gYmUgc3BlY2lmaWVkIG11bHRpcGxlIHRpbWVzLCBlLmcuIFwiRGVwdGhJbk1ldGVycyA+PSAwIEFORCBEZXB0aEluTWV0ZXJzIDw9IDEwMFwiXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXSA9PT0gJ0RlcHRoSW5NZXRlcnMnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBEZXB0aEluTWV0ZXJzJHtlbGVtWzFdfSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGZvdW5kID0gY2xhdXNlcy5maW5kKGVsZW0gPT4gZWxlbVswXSA9PT0gJ1NjaWVudGlmaWNOYW1lJylcbiAgaWYgKGZvdW5kKSB7IHNlYXJjaFBhcmFtcy5wdXNoKGBTY2llbnRpZmljTmFtZT0ke2ZvdW5kWzJdLnJlcGxhY2UoLycvZywgJ1wiJyl9YCkgfVxuXG4gIC8vIE9ic2VydmF0aW9uWWVhciBpcyBhIHNwZWNpYWwgY2FzZSBiZWNhdXNlIGl0IGNhbiBiZSBzcGVjaWZpZWQgbXVsdGlwbGUgdGltZXMsIGUuZy4gXCJPYnNlcnZhdGlvblllYXIgPj0gMjAyMCBBTkQgT2JzZXJ2YXRpb25ZZWFyIDw9IDIwMjZcIlxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0gPT09ICdPYnNlcnZhdGlvblllYXInKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBPYnNlcnZhdGlvblllYXIke2VsZW1bMV19JHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgZm91bmQgPSBjbGF1c2VzLmZpbmQoZWxlbSA9PiBlbGVtWzBdID09PSAnRmlzaENvdW5jaWxSZWdpb25Db2RlJylcbiAgaWYgKGZvdW5kKSB7IHNlYXJjaFBhcmFtcy5wdXNoKGBGaXNoQ291bmNpbFJlZ2lvbj1cIiR7ZmluZEZpc2hlcnlSZWdpb25CeUNvZGUoZm91bmRbMl0pfVwiYCkgfVxuXG4gIGZvdW5kID0gY2xhdXNlcy5maW5kKGVsZW0gPT4gZWxlbVswXSA9PT0gJ09jZWFuQ29kZScpXG4gIGlmIChmb3VuZCkgeyBzZWFyY2hQYXJhbXMucHVzaChgT2NlYW49XCIke2ZpbmRPY2Vhbk5hbWVCeUNvZGUoZm91bmRbMl0pfVwiYCkgfVxuXG4gIGZvdW5kID0gY2xhdXNlcy5maW5kKGVsZW0gPT4gZWxlbVswXSA9PT0gJ1BoeWx1bScpXG4gIGlmIChmb3VuZCkgeyBzZWFyY2hQYXJhbXMucHVzaChgUGh5bHVtPSR7Zm91bmRbMl0ucmVwbGFjZSgvJy9nLCAnXCInKX1gKSB9XG5cbiAgZm91bmQgPSBjbGF1c2VzLmZpbmQoZWxlbSA9PiBlbGVtWzBdID09PSAnQ2xhc3MnKVxuICBpZiAoZm91bmQpIHsgc2VhcmNoUGFyYW1zLnB1c2goYENsYXNzPSR7Zm91bmRbMl0ucmVwbGFjZSgvJy9nLCAnXCInKX1gKSB9XG5cbiAgLy8gT3JkZXIgaXMgYSByZXNlcnZlZCB3b3JkIGFuZCByZW5hbWVkIGluIHRoZSBob3N0ZWQgZmVhdHVyZSBsYXllclxuICBmb3VuZCA9IGNsYXVzZXMuZmluZChlbGVtID0+IGVsZW1bMF0gPT09ICdPcmRlcl8nKVxuICBpZiAoZm91bmQpIHsgc2VhcmNoUGFyYW1zLnB1c2goYE9yZGVyPSR7Zm91bmRbMl19YCkgfVxuXG4gIGZvdW5kID0gY2xhdXNlcy5maW5kKGVsZW0gPT4gZWxlbVswXSA9PT0gJ0ZhbWlseScpXG4gIGlmIChmb3VuZCkgeyBzZWFyY2hQYXJhbXMucHVzaChgRmFtaWx5PSR7Zm91bmRbMl0ucmVwbGFjZSgvJy9nLCAnXCInKX1gKSB9XG5cbiAgZm91bmQgPSBjbGF1c2VzLmZpbmQoZWxlbSA9PiBlbGVtWzBdID09PSAnR2VudXMnKVxuICBpZiAoZm91bmQpIHsgc2VhcmNoUGFyYW1zLnB1c2goYEdlbnVzPSR7Zm91bmRbMl19YCkgfVxuXG4gIGZvdW5kID0gY2xhdXNlcy5maW5kKGVsZW0gPT4gZWxlbVswXSA9PT0gJ1N5bm9ueW1zJylcbiAgaWYgKGZvdW5kKSB7XG4gICAgLy8gZS5nLiBcIiVwYXJhZG94JVwiIC0+IFwiLipwYXJhZG94LipcIlxuICAgIC8vIG1hcmsgYXMgY2FzZS1pbnNlbnNpdGl2ZSBwYXR0ZXJuIG1hdGNoXG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYFN5bm9ueW1zPX5cIig/aSkuKiR7Zm91bmRbMl0ucmVwbGFjZSgvWyclXS9nLCAnJyl9LipcImApXG4gIH1cblxuICBmb3VuZCA9IGNsYXVzZXMuZmluZChlbGVtID0+IGVsZW1bMF0gPT09ICdWZXJiYXRpbVNjaWVudGlmaWNOYW1lJylcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgcmVnZXggPSAvW1wiJV0vZ1xuICAgIGNvbnN0IHN0ciA9IGZvdW5kWzJdLnJlcGxhY2UocmVnZXgsICcnKVxuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBWZXJiYXRpbVNjaWVudGlmaWNOYW1lPX5cIig/aSkuKiR7c3RyLnJlcGxhY2UoL1snJV0vZywgJycpfS4qXCJgKVxuICB9XG5cbiAgZm91bmQgPSBjbGF1c2VzLmZpbmQoZWxlbSA9PiBlbGVtWzBdID09PSAnQXBoaWFJRCcpXG4gIGlmIChmb3VuZCkgeyBzZWFyY2hQYXJhbXMucHVzaChgQXBoaWFJRD0ke2ZvdW5kWzJdfWApIH1cblxuICBmb3VuZCA9IGNsYXVzZXMuZmluZChlbGVtID0+IGVsZW1bMF0gPT09ICdEYXRhc2V0SUQnKVxuICBpZiAoZm91bmQpIHsgc2VhcmNoUGFyYW1zLnB1c2goYERhdGFzZXRJRD0ke2ZvdW5kWzJdfWApIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1BhcmVucyAoc3FsOiBzdHJpbmcpOiBzdHJpbmcge1xuICB3aGlsZSAoc3FsLmVuZHNXaXRoKCcpJykpIHtcbiAgICBzcWwgPSBzcWwuc2xpY2UoMCwgLTEpXG4gIH1cbiAgcmV0dXJuIHNxbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBMZWFkaW5nUGFyZW5zIChzcWw6IHN0cmluZyk6IHN0cmluZyB7XG4gIHdoaWxlIChzcWwuc3RhcnRzV2l0aCgnKCcpKSB7XG4gICAgc3FsID0gc3FsLnNsaWNlKDEpXG4gIH1cbiAgcmV0dXJuIHNxbFxufVxuXG4vKipcbiAqIHRha2UgYSBTUUwgc3RyaW5nIGFuZCBzcGxpdCBpdCBpbnRvIGNsYXVzZXMsIHN0cmlwcGluZyBsZWFkaW5nIGFuZCB0cmFpbGluZ1xuICogcGFyZW50aGVzZXMgZnJvbSBlYWNoIGNsYXVzZS4gUmV0dXJucyBhIGxpc3Qgb2YgbGlzdHMsIHdoZXJlIGVhY2ggaW5uZXIgbGlzdFxuICogaXMgYSBjbGF1c2Ugc3BsaXQgaW50byBpdHMgY29tcG9uZW50cyAoZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSkuXG4gKiBXQVJOSU5HOiB0aGlzIGZ1bmN0aW9uIGRvZXMgbm90IHJlY29nbml6ZSBuZXN0ZWQgY2xhdXNlc1xuICogQHJldHVybnMgbGlzdCBvZiBjbGF1c2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNxbCAoc3FsOiBzdHJpbmcpOiBzdHJpbmdbXVtdIHtcbiAgICAvLyBFeHBlcmllbmNlIEJ1aWxkZXIgc29tZXRpbWVzIHVzZXMgbG93ZXJjYXNlICdhbmQnIGFuZCAnb3InIGluc3RlYWQgb2YgdXBwZXJjYXNlIHNvIHN0YW5kYXJkaXplIGZvciBwYXJzaW5nXG4gICAgY29uc3Qgc3FsU3RyaW5nID0gc3FsLnJlcGxhY2VBbGwoJyBhbmQgJywgJyBBTkQgJykucmVwbGFjZUFsbCgnIG9yICcsICcgT1IgJylcbiAgICBjb25zdCBjbGF1c2VzTGlzdCA9IHNxbFN0cmluZy5zcGxpdCgvQU5EfE9SLykubWFwKGNsYXVzZSA9PiBjbGF1c2UudHJpbSgpKVxuICAgIGNvbnN0IHBhcnNlZExpc3QgPSBjbGF1c2VzTGlzdC5tYXAoY2xhdXNlID0+IHtcbiAgICAgICAgY2xhdXNlID0gc3RyaXBMZWFkaW5nUGFyZW5zKGNsYXVzZSlcbiAgICAgICAgY2xhdXNlID0gc3RyaXBUcmFpbGluZ1BhcmVucyhjbGF1c2UpXG4gICAgICAgIHJldHVybiBjbGF1c2Uuc3BsaXQoL1xccysvKS5tYXAocGFydCA9PiBwYXJ0LnRyaW0oKSlcbiAgICB9KVxuICAgIHJldHVybiBwYXJzZWRMaXN0Lm1hcChjbGF1c2UgPT4ge1xuICAgICAgICAvLyBqb2luIGFsbCBwYXJ0cyBhZnRlciB0aGUgb3BlcmF0b3IgaW50byBhIHNpbmdsZSB2YWx1ZSBzdHJpbmdcbiAgICAgICAgY2xhdXNlWzJdID0gY2xhdXNlLnNsaWNlKDIpLmpvaW4oJyAnKVxuICAgICAgICAvLyByZW1vdmUgYW55IGV4dHJhIHBhcnRzIGFmdGVyIHRoZSB2YWx1ZVxuICAgICAgICByZXR1cm4gY2xhdXNlLnNwbGljZSgwLDMpXG4gICAgfSlcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vd2lkZ2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3dpZGdldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2NvcmVfcmVhY3RpdmVVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXJjZ2lzX2NvcmVfZ2VvbWV0cnlfc3VwcG9ydF93ZWJNZXJjYXRvclV0aWxzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcbiAganN4LFxuICB0eXBlIElNU3RhdGUsXG4gIFJlYWN0UmVkdXgsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgRGF0YVNvdXJjZUNvbXBvbmVudCxcbiAgdHlwZSBGZWF0dXJlTGF5ZXJEYXRhU291cmNlXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIHR5cGUgSmltdU1hcFZpZXcsXG4gIEppbXVNYXBWaWV3Q29tcG9uZW50XG59IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBUb29sdGlwIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB0eXBlIEV4dGVudCBmcm9tICdlc3JpL2dlb21ldHJ5L0V4dGVudCdcbmltcG9ydCB0eXBlIE1hcFZpZXcgZnJvbSAnQGFyY2dpcy9jb3JlL3ZpZXdzL01hcFZpZXcnXG5pbXBvcnQgeyB3ZWJNZXJjYXRvclRvR2VvZ3JhcGhpYyB9IGZyb20gXCJAYXJjZ2lzL2NvcmUvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzXCJcbmltcG9ydCB7IHdhdGNoIH0gZnJvbSBcIkBhcmNnaXMvY29yZS9jb3JlL3JlYWN0aXZlVXRpbHNcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29udmVydFNxbFRvRXJkZGFwUGFyYW1zIH0gZnJvbSAnLi9lcmRkYXAtdXRpbHMnXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0ICcuL3dpZGdldC5jc3MnXG5cbmNvbnN0IHsgdXNlU2VsZWN0b3IgfSA9IFJlYWN0UmVkdXhcblxuLy8gaW50ZXJmYWNlIENvb3Jkc09iamVjdCB7XG4vLyAgIHhtaW46IG51bWJlclxuLy8gICB5bWluOiBudW1iZXJcbi8vICAgeG1heDogbnVtYmVyXG4vLyAgIHltYXg6IG51bWJlclxuLy8gfVxuLypcbmZ1bmN0aW9uIGZpbmRPY2Vhbk5hbWVCeUNvZGUgKGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHZhbHVlcyA9IG5ldyBNYXAoW1xuICAgIFsnMCcsICdBcmN0aWMnXSxcbiAgICBbJzEnLCAnSW5kaWFuJ10sXG4gICAgWycyJywgJ05vcnRoIEF0bGFudGljJ10sXG4gICAgWyczJywgJ05vcnRoIFBhY2lmaWMnXSxcbiAgICBbJzQnLCAnU291dGggQXRsYW50aWMnXSxcbiAgICBbJzUnLCAnU291dGggUGFjaWZpYyddLFxuICAgIFsnNicsICdTb3V0aGVybiddXG4gIF0pXG4gIHJldHVybiB2YWx1ZXMuZ2V0KGNvZGUpIHx8ICcnXG59XG4qL1xuLypcbmZ1bmN0aW9uIGZpbmRGaXNoZXJ5UmVnaW9uQnlDb2RlIChjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgJ0NhcmliYmVhbicsXG4gICAgJ0d1bGYgKGZvcm1lcmx5IEd1bGYgb2YgTWV4aWNvKScsXG4gICAgJ01pZC1BdGxhbnRpYycsXG4gICAgJ05ldyBFbmdsYW5kJyxcbiAgICAnTm9ydGggUGFjaWZpYycsXG4gICAgJ1BhY2lmaWMnLFxuICAgICdTb3V0aCBBdGxhbnRpYycsXG4gICAgJ1Vua25vd24nLFxuICAgICdXZXN0ZXJuIFBhY2lmaWMnXG4gIF1cbiAgcmV0dXJuIHZhbHVlc1twYXJzZUludChjb2RlKV0gfHwgJydcbn1cbiovXG4vLyB1c2VyLWRlZmluZWQgdHlwZSBndWFyZCB1c2luZyB0eXBlIHByZWRpY2F0ZVxuZnVuY3Rpb24gaXNGZWF0dXJlTGF5ZXJEYXRhU291cmNlVHlwZSAob2JqOiB1bmtub3duKTogb2JqIGlzIEZlYXR1cmVMYXllckRhdGFTb3VyY2Uge1xuICByZXR1cm4gKG9iaiBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlKS50eXBlID09PSAnRkVBVFVSRV9MQVlFUidcbn1cblxuLypcbi8vIG11dGF0ZXMgdGhlIHByb3ZpZGVkIGFycmF5XG5mdW5jdGlvbiBjb252ZXJ0U3FsVG9FcmRkYXBQYXJhbXMgKHNxbDogc3RyaW5nLCBzZWFyY2hQYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnNvbGUubG9nKCdpbnNpZGUgY29udmVydFNxbFRvRXJkZGFwUGFyYW1zIHdpdGggJywgc3FsKVxuXG4gIC8vIG1hbmlwdWxhdGUgU1FMIHN0cmluZyBpbnRvIGxpc3Qgb2YgMy1lbGVtZW50IGxpc3RzIChmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKVxuICBjb25zdCBjbGF1c2VzID0gc3FsXG4gICAgLnJlcGxhY2UoL1xcKCs/L2csICcnKSAvLyByZXBsYWNlIGxlZnQgcGFyZW5zXG4gICAgLnJlcGxhY2UoL1xcKSs/L2csICcnKSAvLyByZXBsYWNlIHJpZ2h0IHBhcmVuc1xuICAgIC5yZXBsYWNlKC9MT1dFUi9nLCAnJykgLy8gcmVtb3ZlIHRoZSBMT1dFUigpIGZ1bmN0aW9uXG4gICAgLnNwbGl0KC8gYW5kIC9pKVxuICAgIC5tYXAoZWxlbSA9PiB7XG4gICAgICBjb25zdCB0ID0gZWxlbS5zcGxpdCgvXFxzKy8pXG4gICAgICAvLyBjb25zdHJ1Y3QgMy1lbGVtZW50IGFycmF5IHdpdGggZmllbGQsIG9wZXJhdG9yLCB2YWx1ZS4gVmFsdWUgbWF5IGhhdmUgbXVsdGlwbGUgd29yZHMgd2hpY2ggbmVlZFxuICAgICAgLy8gdG8gYmUgcmVqb2luZWQgYW5kIHJlcGxhY2Ugc2luZ2xlIHF1b3RlcyB3aXRoIGRvdWJsZSBxdW90ZXNcbiAgICAgIHJldHVybiB0LnNsaWNlKDAsIDIpLmNvbmNhdCh0LnNsaWNlKDIpLmpvaW4oJyAnKS5yZXBsYWNlKC8nL2csICdcIicpKVxuICAgIH0pXG4gIC8vIGNvbnNvbGUubG9nKGNsYXVzZXMpXG5cbiAgLy8gYnVpbGQga2V5L3ZhbHVlIHBhaXJzIGZvciBzcGVjaWZpZWQgcGFyYW1ldGVyc1xuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3Zlcm5hY3VsYXJuYW1lY2F0ZWdvcnknKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBWZXJuYWN1bGFyTmFtZUNhdGVnb3J5PSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnaW1hZ2V1cmwnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKCdJbWFnZVVSTD1+XCJodHRwczovLy4qXCInKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZGVwdGhpbm1ldGVycycpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYERlcHRoSW5NZXRlcnMke2VsZW1bMV19JHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdzY2llbnRpZmljbmFtZScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYFNjaWVudGlmaWNOYW1lPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnb2JzZXJ2YXRpb255ZWFyJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgT2JzZXJ2YXRpb25ZZWFyJHtlbGVtWzFdfSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZmlzaGNvdW5jaWxyZWdpb25jb2RlJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgRmlzaENvdW5jaWxSZWdpb249XCIke2ZpbmRGaXNoZXJ5UmVnaW9uQnlDb2RlKGVsZW1bMl0pfVwiYClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ29jZWFuY29kZScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYE9jZWFuPVwiJHtmaW5kT2NlYW5OYW1lQnlDb2RlKGVsZW1bMl0pfVwiYClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3BoeWx1bScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYFBoeWx1bT0ke2VsZW1bMl19YClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2NsYXNzJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgQ2xhc3M9JHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgLy8gT3JkZXIgaXMgYSByZXNlcnZlZCB3b3JkIGFuZCByZW5hbWVkIGluIHRoZSBob3N0ZWQgZmVhdHVyZSBsYXllclxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ29yZGVyXycpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYE9yZGVyPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZmFtaWx5JykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgRmFtaWx5PSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZ2VudXMnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBHZW51cz0ke2VsZW1bMl19YClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3N5bm9ueW1zJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICAvLyBlLmcuIFwiJXBhcmFkb3glXCIgLT4gXCIuKnBhcmFkb3guKlwiXG4gICAgY29uc3QgcmVnZXggPSAvW1wiJV0vZ1xuICAgIGNvbnN0IHN0ciA9IGVsZW1bMl0ucmVwbGFjZShyZWdleCwgJycpXG4gICAgLy8gbWFyayBhcyBjYXNlLWluc2Vuc2l0aXZlIHBhdHRlcm4gbWF0Y2hcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgU3lub255bXM9flwiKD9pKS4qJHtzdHJ9LipcImApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICd2ZXJiYXRpbXNjaWVudGlmaWNuYW1lJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBjb25zdCByZWdleCA9IC9bXCIlXS9nXG4gICAgY29uc3Qgc3RyID0gZWxlbVsyXS5yZXBsYWNlKHJlZ2V4LCAnJylcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgVmVyYmF0aW1TY2llbnRpZmljTmFtZT1+XCIoP2kpLioke3N0cn0uKlwiYClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2FwaGlhaWQnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBBcGhpYUlEPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZGF0YXNldGlkJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgRGF0YXNldElEPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIC8vIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnaWRlbnRpZmljYXRpb25xdWFsaWZpZXInKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAvLyAgIHNlYXJjaFBhcmFtcy5wdXNoKGBJZGVudGlmaWNhdGlvblF1YWxpZmllcj0ke2VsZW1bMl19YClcbiAgLy8gfSlcbn1cbiovXG4vLyBmdW5jdGlvbiBmb3JtYXRFeHRlbnQgKG1lcmNFeHRlbnQ6IEV4dGVudCkge1xuLy8gICBjb25zdCBnZW9FeHRlbnQgPSB3ZWJNZXJjYXRvclV0aWxzLndlYk1lcmNhdG9yVG9HZW9ncmFwaGljKG1lcmNFeHRlbnQsIGZhbHNlKSBhcyBFeHRlbnRcbi8vICAgcmV0dXJuIGAke2dlb0V4dGVudC54bWluLnRvRml4ZWQoMyl9LCAke2dlb0V4dGVudC55bWluLnRvRml4ZWQoMyl9LCAke2dlb0V4dGVudC54bWF4LnRvRml4ZWQoMyl9LCAke2dlb0V4dGVudC55bWF4LnRvRml4ZWQoMyl9YFxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc29sZS5sb2coJ3JlbmRlcmluZyBlcmRkYXAtcXVlcnkuLi4nKVxuICBjb25zdCBbYWN0aXZlRHMsIHNldEFjdGl2ZURzXSA9IHVzZVN0YXRlPEZlYXR1cmVMYXllckRhdGFTb3VyY2U+KClcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBjb25zdCBbZ2VvZ3JhcGhpY01hcEV4dGVudCwgc2V0R2VvZ3JhcGhpY01hcEV4dGVudF0gPSB1c2VTdGF0ZTxFeHRlbnQ+KClcbiAgY29uc3QgW21hcFZpZXcsIHNldE1hcFZpZXddID0gdXNlU3RhdGU8TWFwVmlldz4oKVxuICBjb25zdCB2YWxpZEJib3hSZWYgPSB1c2VSZWYoZmFsc2UpXG5cbiAgLy8gZ2V0IHN0YXRlIGZvciB0aGlzIHdpZGdldC5cbiAgY29uc3Qgd2lkZ2V0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHtcbiAgICByZXR1cm4gc3RhdGUud2lkZ2V0c1N0YXRlW3Byb3BzLndpZGdldElkXVxuICB9KVxuXG4gIC8vIGJ1aWxkIEVSRERBUCBVcmwuIE5vdGUgdGhhdCB1c2VzIGEgbm9uLXN0YW5kYXJkIHBhdHRlcm4gZm9yIHNlYXJjaCBwYXJhbWV0ZXJzXG4gIGNvbnN0IHN0ZEZpZWxkcyA9ICdEYXRhYmFzZVZlcnNpb24sU2hhbGxvd0ZsYWcsRGF0YXNldElELENhdGFsb2dOdW1iZXIsU2FtcGxlSUQsSW1hZ2VVUkwsUmVwb3NpdG9yeSxTY2llbnRpZmljTmFtZSxWZXJuYWN1bGFyTmFtZUNhdGVnb3J5LFRheG9uUmFuayxJZGVudGlmaWNhdGlvblF1YWxpZmllcixMb2NhbGl0eSxsYXRpdHVkZSxsb25naXR1ZGUsRGVwdGhJbk1ldGVycyxEZXB0aE1ldGhvZCxPYnNlcnZhdGlvbkRhdGUsU3VydmV5SUQsU3RhdGlvbixFdmVudElELFNhbXBsaW5nRXF1aXBtZW50LExvY2F0aW9uQWNjdXJhY3ksUmVjb3JkVHlwZSxEYXRhUHJvdmlkZXInXG4gIGNvbnN0IHNlYXJjaFBhcmFtczogc3RyaW5nW10gPSBbXVxuXG4gIGlmIChtYXBWaWV3ICYmIG1hcFZpZXcuZXh0ZW50KSB7XG4gICAgY29uc3QgbWFwRXh0ZW50ID0gd2ViTWVyY2F0b3JUb0dlb2dyYXBoaWMobWFwVmlldy5leHRlbnQpIGFzIEV4dGVudFxuICAgIC8vIGZsYWcgZm9yIGFudGltZXJpZGlhbi1jcm9zc2luZyBleHRlbnRcbiAgICB2YWxpZEJib3hSZWYuY3VycmVudCA9IChtYXBFeHRlbnQueG1pbiA8IG1hcEV4dGVudC54bWF4KVxuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBsYXRpdHVkZT49JHttYXBFeHRlbnQueW1pbi50b0ZpeGVkKDQpfWApXG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYGxhdGl0dWRlPD0ke21hcEV4dGVudC55bWF4LnRvRml4ZWQoNCl9YClcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgbG9uZ2l0dWRlPj0ke21hcEV4dGVudC54bWluLnRvRml4ZWQoNCl9YClcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgbG9uZ2l0dWRlPD0ke21hcEV4dGVudC54bWF4LnRvRml4ZWQoNCl9YClcbiAgfVxuICBpZiAoYWN0aXZlRHMgJiYgYWN0aXZlRHMuZ2V0Q3VycmVudFF1ZXJ5UGFyYW1zKCkud2hlcmUpIHtcbiAgICAvLyBhdWdtZW50cyBwcm92aWRlZCBvYmplY3Qgdy8ga2V5L3ZhbHVlIHBhaXJzIGZyb20gU1FMIHdoZXJlIGNsYXVzZVxuICAgIGNvbnZlcnRTcWxUb0VyZGRhcFBhcmFtcyhhY3RpdmVEcy5nZXRDdXJyZW50UXVlcnlQYXJhbXMoKS53aGVyZSwgc2VhcmNoUGFyYW1zKVxuICB9XG4gIGNvbnN0IGVyZGRhcFVybCA9IGAke3Byb3BzLmNvbmZpZy5lcmRkYXBCYXNlVXJsfS5odG1sPyR7c3RkRmllbGRzfSYke3NlYXJjaFBhcmFtcy5qb2luKCcmJyl9YFxuICAvLyBjb25zb2xlLmxvZyh7IGVyZGRhcFVybCB9KVxuXG4gIGZ1bmN0aW9uIGNvcHlVcmxCdG4gKCkge1xuICAgIC8vIFRPRE8gYWRkIG1lc3NhZ2UgdG8gdG9hc3RlclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGdlbmVyYXRlRXJkZGFwVXJsKCkpLnRoZW4oKCkgPT4geyBjb25zb2xlLmRlYnVnKCdjb3BpZWQgdG8gY2xpcGJvYXJkJykgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlRXJkZGFwVXJsICh0eXBlID0gJ2h0bWwnKSB7XG4gICAgaWYgKHR5cGUgPT09ICdodG1sJykge1xuICAgICAgcmV0dXJuIGVyZGRhcFVybFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXJkZGFwVXJsPy5yZXBsYWNlKCdkZWVwX3NlYV9jb3JhbHMuaHRtbCcsICdkZWVwX3NlYV9jb3JhbHMuY3N2cCcpXG4gICAgfVxuICB9XG5cbiAgLy8gcnVucyBvbmNlXG4gIGZ1bmN0aW9uIG9uRGF0YVNvdXJjZUNyZWF0ZWQgKGRzOiBEYXRhU291cmNlKSB7XG4gICAgY29uc3QgZmVhdHVyZUxheWVyRGF0YVNvdXJjZSA9IGlzRmVhdHVyZUxheWVyRGF0YVNvdXJjZVR5cGUoZHMpID8gZHMgOiB1bmRlZmluZWRcbiAgICAvLyBjb25zdCBkc1RpdGxlID0gZmVhdHVyZUxheWVyRGF0YVNvdXJjZS5sYXllci50aXRsZVxuICAgIHNldEFjdGl2ZURzKGZlYXR1cmVMYXllckRhdGFTb3VyY2UpXG4gIH1cblxuICAvLyBydW5zIG9uY2VcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIHNldE1hcFZpZXcoam12LnZpZXcgYXMgTWFwVmlldylcbiAgICAvLyBUT0RPIHdoeSBkb2VzIHRoaXMgbm90IGZpcmUgd2hlbiB3aWRnZXQgaXMgaW4gV2luZG93IGJ1dCB3b3JrcyBub3JtYWxseSB3aGVuIGRpcmVjdGx5IGluIGxheW91dD9cbiAgICAvLyAndXBkYXRpbmcnIHByb3BlcnR5IGZpcmVzIG11bHRpcGxlIHRpbWVzIGR1cmluZyB6b29tL3BhbiBzbyB1c2luZyAnc3RhdGlvbmFyeScgcHJvcGVydHkgcmVkdWNlcyB1bm5lY2Vzc2FyeSByZS1yZW5kZXJzXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBqbXYudmlldy5zdGF0aW9uYXJ5LFxuICAgICAgKHN0YXRpb25hcnk6Ym9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoc3RhdGlvbmFyeSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUkREQVAgZXh0ZW50OiAnLCBmb3JtYXRFeHRlbnQoam12LnZpZXcuZXh0ZW50KSlcbiAgICAgICAgICBjb25zdCBleHRlbnQgPSB3ZWJNZXJjYXRvclRvR2VvZ3JhcGhpYyhqbXYudmlldy5leHRlbnQpIGFzIEV4dGVudFxuICAgICAgICAgIHNldEdlb2dyYXBoaWNNYXBFeHRlbnQoZXh0ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVyZGRhcC1xdWVyeSBqaW11LXdpZGdldCBtLTJcIj5cbiAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XG4gICAgICAgIHVzZURhdGFTb3VyY2U9e3Byb3BzLnVzZURhdGFTb3VyY2VzPy5bMF19XG4gICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cbiAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17b25EYXRhU291cmNlQ3JlYXRlZH1cbiAgICAgIC8+XG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxuICAgICAgLz5cbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAncmlnaHQnIH19PlxuICAgICAgICA8VGV4dEFyZWEgc3R5bGU9e3t3aWR0aDpcIjg1JVwifX0gcmVhZE9ubHk9XCJ0cnVlXCIgdmFsdWU9e2VyZGRhcFVybH0gLz5cbiAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtlcmRkYXBVcmx9IHN0eWxlPXt7IHdpZHRoOiAnODUlJywgaGVpZ2h0OiAnMjUwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19IHJlYWRPbmx5PXt0cnVlfS8+XG4gICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwiQ29weSBVUkwgdG8gY2xpcGJvYXJkXCI+XG4gICAgICAgICAgPEJ1dHRvbiBhcmlhLWxhYmVsPVwiQnV0dG9uXCIgaWNvbiBvbkNsaWNrPXtjb3B5VXJsQnRufSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cbiAgICAgICAgICAgIDxJY29uIGljb249JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBkPVwiTTE2IDEwSDguNzIzbDEuNjAyIDEuNjAyLS43MDcuNzA3TDYuODA4IDkuNWwyLjgxLTIuODEuNzA3LjcwOEw4LjcyMyA5SDE2ek0zIDEzaDR2LTFIM3ptOC0xMnYxaDJ2NmgtMVYzaC0xdjFIM1YzSDJ2MTJoMTB2LTRoMXY1SDFWMmgyVjFoMi4yNzdhMS45ODQgMS45ODQgMCAwIDEgMy40NDYgMHptLTEgMUg4di0uMzE4QS42ODIuNjgyIDAgMCAwIDcuMzE4IDFoLS42MzZBLjY4Mi42ODIgMCAwIDAgNiAxLjY4MlYySDR2MWg2ek03IDZIM3YxaDR6bS00IDRoMlY5SDN6XCIvPjxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMTZ2MTZIMHpcIi8+PC9zdmc+J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcxNXB4JyB9fT5cbiAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkNvcHkgVVJMIHRvIGNsaXBib2FyZFwiPlxuICAgICAgICAgIDxCdXR0b24gYXJpYS1sYWJlbD1cIkJ1dHRvblwiIGljb24gb25DbGljaz17Y29weVVybEJ0bn0+XG4gICAgICAgICAgICA8SWNvbiBpY29uPSc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PHBhdGggZD1cIk0xNiAxMEg4LjcyM2wxLjYwMiAxLjYwMi0uNzA3LjcwN0w2LjgwOCA5LjVsMi44MS0yLjgxLjcwNy43MDhMOC43MjMgOUgxNnpNMyAxM2g0di0xSDN6bTgtMTJ2MWgydjZoLTFWM2gtMXYxSDNWM0gydjEyaDEwdi00aDF2NUgxVjJoMlYxaDIuMjc3YTEuOTg0IDEuOTg0IDAgMCAxIDMuNDQ2IDB6bS0xIDFIOHYtLjMxOEEuNjgyLjY4MiAwIDAgMCA3LjMxOCAxaC0uNjM2QS42ODIuNjgyIDAgMCAwIDYgMS42ODJWMkg0djFoNnpNNyA2SDN2MWg0em0tNCA0aDJWOUgzelwiLz48cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDE2djE2SDB6XCIvPjwvc3ZnPidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICAge3ZhbGlkQmJveFJlZi5jdXJyZW50XG4gICAgICAgID8gPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwib3BlbiBFUkREQVAgY29uc29sZSB0byBjdXN0b21pemUgb3V0cHV0XCI+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHJvbGU9XCJidXR0b25cIiBocmVmPXtnZW5lcmF0ZUVyZGRhcFVybCgnaHRtbCcpfSB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzIwcHgnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjb2xvcjogJ3doaXRlJyB9fT5DdXN0b21pemU8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkRvd25sb2FkIHN0YW5kYXJkIENTViBmaWxlIHdpdGggY3VycmVudCBmaWx0ZXJzIGFwcGxpZWRcIj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgcm9sZT1cImJ1dHRvblwiIGhyZWY9e2dlbmVyYXRlRXJkZGFwVXJsKCdjc3ZwJyl9IHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnd2hpdGUnIH19PkRvd25sb2FkPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICAgICA6IDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc4MCUnLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgPHA+V2FybmluZzogbWlzc2luZyBvciBpbnZhbGlkIHNwYXRpYWwgZXh0ZW50LiBQbGVhc2UgZW5zdXJlIGFyZWEgb2YgaW50ZXJlc3QgZG9lcyBub3QgY3Jvc3MgdGhlIGFudGltZXJpZGlhblxuICAgICAgICAgICAgICAoaS5lLiBpbnRlcm5hdGlvbmFsIGRhdGUgbGluZSk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJEb3dubG9hZCB0aGUgZW50aXJlIGRhdGFiYXNlIGluIGEgQ1NWIGZvcm1hdFwiPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiByb2xlPVwiYnV0dG9uXCIgaHJlZj17cHJvcHMuY29uZmlnLmNzdkZpbGVVcmx9IHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IHdpZHRoOiAnMjMwcHgnLCBtYXJnaW5Ub3A6ICcyMHB4JywgdGV4dERlY29yYXRpb246ICdub25lJywgY29sb3I6ICd3aGl0ZScgfX0+RG93bmxvYWQgRW50aXJlIERhdGFiYXNlPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzIwcHgnIH19PlxuICAgICAgICA8c3Bhbj5Ob3RlIHRoYXQgRVJEREFQIG1heSB0YWtlIGEgZmV3IG1pbnV0ZXMgdG8gcmVzcG9uZCB0byB5b3VyIHJlcXVlc3Q8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==