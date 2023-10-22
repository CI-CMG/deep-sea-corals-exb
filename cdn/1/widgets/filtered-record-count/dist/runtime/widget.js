System.register(["jimu-core","jimu-arcgis","jimu-core/react","esri/geometry/support/webMercatorUtils","esri/geometry/Extent","esri/core/reactiveUtils"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/filtered-record-count/src/runtime/widget.css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/filtered-record-count/src/runtime/widget.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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

/***/ "./your-extensions/widgets/filtered-record-count/src/runtime/widget.css":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/filtered-record-count/src/runtime/widget.css ***!
  \******************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./widget.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/filtered-record-count/src/runtime/widget.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "esri/core/reactiveUtils":
/*!******************************************!*\
  !*** external "esri/core/reactiveUtils" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_core_reactiveUtils__;

/***/ }),

/***/ "esri/geometry/Extent":
/*!***************************************!*\
  !*** external "esri/geometry/Extent" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__;

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
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/filtered-record-count/src/runtime/widget.tsx ***!
  \******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__set_webpack_public_path__": () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/geometry/support/webMercatorUtils */ "esri/geometry/support/webMercatorUtils");
/* harmony import */ var esri_geometry_Extent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/geometry/Extent */ "esri/geometry/Extent");
/* harmony import */ var esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/core/reactiveUtils */ "esri/core/reactiveUtils");
/* harmony import */ var _widget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget.css */ "./your-extensions/widgets/filtered-record-count/src/runtime/widget.css");
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







// const { useSelector } = ReactRedux
// since we cannot pass Extent object from MessageAction and cannot convert to
// geographic in MessageAction due to load error using webMercatorUtils
function convertAndFormatCoordinates(coords, dp = 5) {
    // clone incoming coords Object and augment with spatialReference
    const extentProps = Object.assign({ spatialReference: { wkid: 102100 } }, coords);
    const extent = new esri_geometry_Extent__WEBPACK_IMPORTED_MODULE_4__["default"](extentProps);
    const geoExtent = esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_3__["default"].webMercatorToGeographic(extent, false);
    return `${geoExtent.xmin.toFixed(dp)}, ${geoExtent.ymin.toFixed(dp)}, ${geoExtent.xmax.toFixed(dp)}, ${geoExtent.ymax.toFixed(dp)}`;
}
function countAllSamples(dataSource) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!dataSource) {
            throw new Error('DataSource cannot be null');
        }
        const startTime = new Date();
        const searchParams = new URLSearchParams([
            ['where', '1=1'],
            ['returnCountOnly', 'true'],
            ['f', 'json']
        ]);
        // TODO replace w/ FeatureLayer query
        const response = yield fetch(dataSource.url + '/query', {
            method: 'POST',
            body: searchParams
        });
        if (!response.ok) {
            console.error('failed to count total records from ' + dataSource.url);
            return;
        }
        // TODO replace with FeatureDataSource#queryCount?
        // dataSource.queryCount({}).then(result => {
        //   return result.count
        // })
        // console.log(`Total record count complete in ${(new Date().getTime() - startTime.getTime()) / 1000} seconds`)
        return response.json();
    });
}
function Widget(props) {
    var _a, _b;
    // console.log('re-rendering filtered-record-count...')
    const [totalRecordCount, setTotalRecordCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [filteredRecordCount, setFilteredRecordCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [dataSource, setDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [serverError, setServerError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const abortControllerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const [mapExtent, setMapExtent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [layerDefinition, setLayerDefinition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const mapLayerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const layerViewRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (!view) {
            return;
        }
        const mapView = view.view;
        // dataSource.getCurrentQueryParams().where and mapview layer.definitionExpression should be equal
        const layer = mapView.map.layers.find(lyr => lyr.title === dataSource.layer.title);
        const jimuLayerView = Object.values(view.jimuLayerViews).find(view => view.layerDataSourceId === dataSource.id);
        let layerView;
        // __esri.LayerView == esri/views/layers/LayerView?
        if (jimuLayerView.view.layer.type === 'feature') {
            layerView = jimuLayerView.view;
        }
        else {
            console.error(`expected FeatureLayerView, but found ${jimuLayerView.view.layer.type}`);
        }
        // use FeatureLayer#queryFeatureCount
        function serverSideFeatureCount() {
            // cancel any running request
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
            abortControllerRef.current = new AbortController();
            const startTime = new Date();
            layer.queryFeatureCount({
                geometry: mapView.extent,
                where: layer.definitionExpression
            }, { signal: abortControllerRef.current.signal }).then(result => {
                // console.log(`serverSideFeatureCount complete in ${(new Date().getTime() - startTime.getTime()) / 1000} seconds`)
                // console.log('serverSideFeatureCount: ', result)
                setFilteredRecordCount(result);
            }).catch((reason) => {
                if (reason.name === 'AbortError') {
                    // console.log('cancelled running request')
                }
                else {
                    console.error('serverSideFeatureCount failed: ', reason);
                    setServerError(true);
                }
            }).finally(() => {
                abortControllerRef.current = null;
            });
        }
        // client-side query only reports on visible features are visible so doesn't work when Webmap scale dependency set
        function clientSideFeatureCount() {
            const startTime = new Date();
            const q = {
                where: layer.definitionExpression || '1=1',
                geometry: mapView.extent
            };
            layerView.queryFeatureCount(q).then(count => {
                // console.log(`clientSideFeatureCount complete in ${(new Date().getTime() - startTime.getTime()) / 1000} seconds`)
                // console.log('clientSideFeatureCount: ', count)
                setFilteredRecordCount(count);
            }).catch((reason) => {
                console.log('clientSideFeatureCount error: ', reason);
            });
        }
        /*
        // alternate way of performing server-side count using FeatureLayerDataSource#loadCount.
        // Often a little faster than FeatureLayer#queryFeatureCount but no way to cancel
        function dataSourceFeatureCount () {
          // async request timeout idea taken from  Faraz K. Kelhini, "Modern Asynchronous JavaScript"
          const timeOut = 20000
          const failure = new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(new Error(`server failed to respond in ${timeOut} milliseconds`))
            }, timeOut)
          })
    
          const startTime = new Date()
          const queryParams = dataSource?.getCurrentQueryParams()
          Promise.race([
            dataSource.loadCount(queryParams, { widgetId: props.id }),
            failure
          ]).then((count) => {
            console.log(`dataSourceFeatureCount complete in ${(new Date().getTime() - startTime.getTime()) / 1000} seconds`)
            console.log(count)
            setFilteredRecordCount(count)
          }).catch((reason) => {
            console.error('datasourceFeatureCount failed: ', reason)
            setServerError(true)
          })
        }
        */
        setFilteredRecordCount(null);
        setServerError(false);
        if (layerView.suspended) {
            serverSideFeatureCount();
            // dataSourceFeatureCount()
        }
        else {
            // clientSideFeatureCount only produces results when scale threshold has
            // been crossed and points display
            clientSideFeatureCount();
        }
    }, [mapExtent, layerDefinition]);
    // get state for this widget. Any change in widgetState, e.g. change of map extent
    // or datasource filter, causes widget to re-render
    // const widgetState = useSelector((state: IMState) => {
    //   return state.widgetsState[props.widgetId]
    // })
    // console.log(`rendering filtered-record-count. extent: ${convertAndFormatCoordinates(widgetState?.extent)}, queryParams: ${widgetState?.queryParams}`)
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (!view || !dataSource) {
            return;
        }
        // used in server-side query
        mapLayerRef.current = view.view.map.layers.find(lyr => lyr.title === dataSource.layer.title);
        // used in client-side query
        const jimuLayerView = Object.values(view.jimuLayerViews).find(view => view.layerDataSourceId === dataSource.id);
        if (jimuLayerView.view.layer.type === 'feature') {
            layerViewRef.current = jimuLayerView.view;
        }
        else {
            console.error(`expected FeatureLayerView, but found ${jimuLayerView.view.layer.type}`);
        }
        // map redraws graphics layer for most map clicks, so useEffect ensures counts
        // are only updated for extent, filter changes
        const watchHandle = esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_5__["default"].when(() => !view.view.updating, () => {
            setMapExtent(view.view.extent);
            setLayerDefinition(mapLayerRef.current.definitionExpression);
        });
        return () => {
            // console.log('cleaning up watchHandle...')
            watchHandle.remove();
        };
    }, [view, dataSource]);
    // runs once
    function onDataSourceCreated(ds) {
        if (!ds) {
            throw new Error('no DataSource');
        }
        const featureLayerDataSource = ds;
        setDataSource(featureLayerDataSource);
        countAllSamples(featureLayerDataSource).then((response) => {
            // console.log(`counted ${response.count} total records in ${featureLayerDataSource.url}`)
            setTotalRecordCount(response.count);
        });
    }
    const activeViewChangeHandler = (jmv) => {
        if (!jmv) {
            throw new Error('no MapView');
        }
        setView(jmv);
    };
    function formatCounts() {
        if (totalRecordCount !== null && filteredRecordCount !== null) {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null,
                filteredRecordCount.toLocaleString('en-US'),
                " out of ",
                totalRecordCount.toLocaleString('en-US'),
                " records in view");
        }
        else if (serverError) {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, "Server Error - please try again");
        }
        else {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, "updating...");
        }
    }
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { paddingLeft: '10px' } },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0], widgetId: props.id, onDataSourceCreated: onDataSourceCreated }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b[0], onActiveViewChange: activeViewChangeHandler }),
        formatCounts()));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0ZXJlZC1yZWNvcmQtY291bnQvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGtFQUFrRTtBQUNuSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FB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QztJQUVELE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxHQUFnQixFQUFFLEVBQUU7UUFDbkQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDO1NBQUU7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNkLENBQUM7SUFFRCxTQUFTLFlBQVk7UUFDbkIsSUFBSSxnQkFBZ0IsS0FBSyxJQUFJLElBQUksbUJBQW1CLEtBQUssSUFBSSxFQUFFO1lBQzdELE9BQU87Z0JBQU8sbUJBQW1CLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7Z0JBQVUsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzttQ0FBd0I7U0FDcEk7YUFBTSxJQUFJLFdBQVcsRUFBRTtZQUN0QixPQUFPLCtGQUE0QztTQUNwRDthQUFNO1lBQ0wsT0FBTywyRUFBd0I7U0FDaEM7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUNMLHdEQUFLLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7UUFDakMsK0NBQUMsMERBQW1CLElBQ2xCLGFBQWEsRUFBRSxXQUFLLENBQUMsY0FBYywwQ0FBRyxDQUFDLENBQUMsRUFDeEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQ2xCLG1CQUFtQixFQUFFLG1CQUFtQixHQUN4QztRQUNGLCtDQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQzFDLGtCQUFrQixFQUFFLHVCQUF1QixHQUMzQztRQUVELFlBQVksRUFBRSxDQUNYLENBQ1A7QUFDSCxDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdGVyZWQtcmVjb3JkLWNvdW50L3NyYy9ydW50aW1lL3dpZGdldC5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0ZXJlZC1yZWNvcmQtY291bnQvc3JjL3J1bnRpbWUvd2lkZ2V0LmNzcz84OWZmIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2NvcmUvcmVhY3RpdmVVdGlsc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9FeHRlbnRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdGVyZWQtcmVjb3JkLWNvdW50L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi93aWRnZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi93aWRnZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9jb3JlX3JlYWN0aXZlVXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9FeHRlbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9zdXBwb3J0X3dlYk1lcmNhdG9yVXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcbiAganN4LFxuICB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2UsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgRGF0YVNvdXJjZUNvbXBvbmVudFxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB3ZWJNZXJjYXRvclV0aWxzIGZyb20gJ2VzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzJ1xuaW1wb3J0IEV4dGVudCBmcm9tICdlc3JpL2dlb21ldHJ5L0V4dGVudCdcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgdHlwZSBGZWF0dXJlTGF5ZXJWaWV3IGZyb20gJ2Vzcmkvdmlld3MvbGF5ZXJzL0ZlYXR1cmVMYXllclZpZXcnXG5pbXBvcnQgdHlwZSBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xuaW1wb3J0IHJlYWN0aXZlVXRpbHMgZnJvbSAnZXNyaS9jb3JlL3JlYWN0aXZlVXRpbHMnXG5pbXBvcnQgJy4vd2lkZ2V0LmNzcydcblxuLy8gY29uc3QgeyB1c2VTZWxlY3RvciB9ID0gUmVhY3RSZWR1eFxuXG4vLyBzaW5jZSB3ZSBjYW5ub3QgcGFzcyBFeHRlbnQgb2JqZWN0IGZyb20gTWVzc2FnZUFjdGlvbiBhbmQgY2Fubm90IGNvbnZlcnQgdG9cbi8vIGdlb2dyYXBoaWMgaW4gTWVzc2FnZUFjdGlvbiBkdWUgdG8gbG9hZCBlcnJvciB1c2luZyB3ZWJNZXJjYXRvclV0aWxzXG5mdW5jdGlvbiBjb252ZXJ0QW5kRm9ybWF0Q29vcmRpbmF0ZXMgKGNvb3Jkczogb2JqZWN0LCBkcDogbnVtYmVyID0gNSkge1xuICAvLyBjbG9uZSBpbmNvbWluZyBjb29yZHMgT2JqZWN0IGFuZCBhdWdtZW50IHdpdGggc3BhdGlhbFJlZmVyZW5jZVxuICBjb25zdCBleHRlbnRQcm9wcyA9IE9iamVjdC5hc3NpZ24oeyBzcGF0aWFsUmVmZXJlbmNlOiB7IHdraWQ6IDEwMjEwMCB9IH0sIGNvb3JkcylcbiAgY29uc3QgZXh0ZW50ID0gbmV3IEV4dGVudChleHRlbnRQcm9wcylcbiAgY29uc3QgZ2VvRXh0ZW50ID0gd2ViTWVyY2F0b3JVdGlscy53ZWJNZXJjYXRvclRvR2VvZ3JhcGhpYyhleHRlbnQsIGZhbHNlKSBhcyBFeHRlbnRcbiAgcmV0dXJuIGAke2dlb0V4dGVudC54bWluLnRvRml4ZWQoZHApfSwgJHtnZW9FeHRlbnQueW1pbi50b0ZpeGVkKGRwKX0sICR7Z2VvRXh0ZW50LnhtYXgudG9GaXhlZChkcCl9LCAke2dlb0V4dGVudC55bWF4LnRvRml4ZWQoZHApfWBcbn1cblxuYXN5bmMgZnVuY3Rpb24gY291bnRBbGxTYW1wbGVzIChkYXRhU291cmNlOiBRdWVyaWFibGVEYXRhU291cmNlKSB7XG4gIGlmICghZGF0YVNvdXJjZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRGF0YVNvdXJjZSBjYW5ub3QgYmUgbnVsbCcpXG4gIH1cbiAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKVxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtcbiAgICBbJ3doZXJlJywgJzE9MSddLFxuICAgIFsncmV0dXJuQ291bnRPbmx5JywgJ3RydWUnXSxcbiAgICBbJ2YnLCAnanNvbiddXG4gIF0pXG4gIC8vIFRPRE8gcmVwbGFjZSB3LyBGZWF0dXJlTGF5ZXIgcXVlcnlcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhU291cmNlLnVybCArICcvcXVlcnknLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogc2VhcmNoUGFyYW1zXG4gIH0pXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zb2xlLmVycm9yKCdmYWlsZWQgdG8gY291bnQgdG90YWwgcmVjb3JkcyBmcm9tICcgKyBkYXRhU291cmNlLnVybClcbiAgICByZXR1cm5cbiAgfVxuICAvLyBUT0RPIHJlcGxhY2Ugd2l0aCBGZWF0dXJlRGF0YVNvdXJjZSNxdWVyeUNvdW50P1xuICAvLyBkYXRhU291cmNlLnF1ZXJ5Q291bnQoe30pLnRoZW4ocmVzdWx0ID0+IHtcbiAgLy8gICByZXR1cm4gcmVzdWx0LmNvdW50XG4gIC8vIH0pXG4gIC8vIGNvbnNvbGUubG9nKGBUb3RhbCByZWNvcmQgY291bnQgY29tcGxldGUgaW4gJHsobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpKSAvIDEwMDB9IHNlY29uZHNgKVxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICAvLyBjb25zb2xlLmxvZygncmUtcmVuZGVyaW5nIGZpbHRlcmVkLXJlY29yZC1jb3VudC4uLicpXG4gIGNvbnN0IFt0b3RhbFJlY29yZENvdW50LCBzZXRUb3RhbFJlY29yZENvdW50XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtmaWx0ZXJlZFJlY29yZENvdW50LCBzZXRGaWx0ZXJlZFJlY29yZENvdW50XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtkYXRhU291cmNlLCBzZXREYXRhU291cmNlXSA9IHVzZVN0YXRlPEZlYXR1cmVMYXllckRhdGFTb3VyY2U+KClcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGU8SmltdU1hcFZpZXc+KG51bGwpXG4gIGNvbnN0IFtzZXJ2ZXJFcnJvciwgc2V0U2VydmVyRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGFib3J0Q29udHJvbGxlclJlZiA9IHVzZVJlZjxBYm9ydENvbnRyb2xsZXI+KClcbiAgY29uc3QgW21hcEV4dGVudCwgc2V0TWFwRXh0ZW50XSA9IHVzZVN0YXRlPEV4dGVudD4oKVxuICBjb25zdCBbbGF5ZXJEZWZpbml0aW9uLCBzZXRMYXllckRlZmluaXRpb25dID0gdXNlU3RhdGU8c3RyaW5nPigpXG4gIGNvbnN0IG1hcExheWVyUmVmID0gdXNlUmVmPEZlYXR1cmVMYXllcj4oKVxuICBjb25zdCBsYXllclZpZXdSZWYgPSB1c2VSZWY8RmVhdHVyZUxheWVyVmlldz4oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF2aWV3KSB7IHJldHVybiB9XG5cbiAgICBjb25zdCBtYXBWaWV3ID0gdmlldy52aWV3XG4gICAgLy8gZGF0YVNvdXJjZS5nZXRDdXJyZW50UXVlcnlQYXJhbXMoKS53aGVyZSBhbmQgbWFwdmlldyBsYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiBzaG91bGQgYmUgZXF1YWxcbiAgICBjb25zdCBsYXllciA9IG1hcFZpZXcubWFwLmxheWVycy5maW5kKGx5ciA9PiBseXIudGl0bGUgPT09IGRhdGFTb3VyY2UubGF5ZXIudGl0bGUpIGFzIEZlYXR1cmVMYXllclxuICAgIGNvbnN0IGppbXVMYXllclZpZXcgPSBPYmplY3QudmFsdWVzKHZpZXcuamltdUxheWVyVmlld3MpLmZpbmQodmlldyA9PiB2aWV3LmxheWVyRGF0YVNvdXJjZUlkID09PSBkYXRhU291cmNlLmlkKVxuICAgIGxldCBsYXllclZpZXc6IEZlYXR1cmVMYXllclZpZXdcbiAgICAvLyBfX2VzcmkuTGF5ZXJWaWV3ID09IGVzcmkvdmlld3MvbGF5ZXJzL0xheWVyVmlldz9cbiAgICBpZiAoamltdUxheWVyVmlldy52aWV3LmxheWVyLnR5cGUgPT09ICdmZWF0dXJlJykge1xuICAgICAgbGF5ZXJWaWV3ID0gamltdUxheWVyVmlldy52aWV3IGFzIEZlYXR1cmVMYXllclZpZXdcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgZXhwZWN0ZWQgRmVhdHVyZUxheWVyVmlldywgYnV0IGZvdW5kICR7amltdUxheWVyVmlldy52aWV3LmxheWVyLnR5cGV9YClcbiAgICB9XG5cbiAgICAvLyB1c2UgRmVhdHVyZUxheWVyI3F1ZXJ5RmVhdHVyZUNvdW50XG4gICAgZnVuY3Rpb24gc2VydmVyU2lkZUZlYXR1cmVDb3VudCAoKSB7XG4gICAgICAvLyBjYW5jZWwgYW55IHJ1bm5pbmcgcmVxdWVzdFxuICAgICAgaWYgKGFib3J0Q29udHJvbGxlclJlZi5jdXJyZW50KSB7XG4gICAgICAgIGFib3J0Q29udHJvbGxlclJlZi5jdXJyZW50LmFib3J0KClcbiAgICAgIH1cblxuICAgICAgYWJvcnRDb250cm9sbGVyUmVmLmN1cnJlbnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKClcbiAgICAgIGxheWVyLnF1ZXJ5RmVhdHVyZUNvdW50KHtcbiAgICAgICAgZ2VvbWV0cnk6IG1hcFZpZXcuZXh0ZW50LFxuICAgICAgICB3aGVyZTogbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb25cbiAgICAgIH0sXG4gICAgICB7IHNpZ25hbDogYWJvcnRDb250cm9sbGVyUmVmLmN1cnJlbnQuc2lnbmFsIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcnZlclNpZGVGZWF0dXJlQ291bnQgY29tcGxldGUgaW4gJHsobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpKSAvIDEwMDB9IHNlY29uZHNgKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2VydmVyU2lkZUZlYXR1cmVDb3VudDogJywgcmVzdWx0KVxuICAgICAgICBzZXRGaWx0ZXJlZFJlY29yZENvdW50KHJlc3VsdClcbiAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgaWYgKHJlYXNvbi5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2FuY2VsbGVkIHJ1bm5pbmcgcmVxdWVzdCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignc2VydmVyU2lkZUZlYXR1cmVDb3VudCBmYWlsZWQ6ICcsIHJlYXNvbilcbiAgICAgICAgICBzZXRTZXJ2ZXJFcnJvcih0cnVlKVxuICAgICAgICB9XG4gICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgYWJvcnRDb250cm9sbGVyUmVmLmN1cnJlbnQgPSBudWxsXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGNsaWVudC1zaWRlIHF1ZXJ5IG9ubHkgcmVwb3J0cyBvbiB2aXNpYmxlIGZlYXR1cmVzIGFyZSB2aXNpYmxlIHNvIGRvZXNuJ3Qgd29yayB3aGVuIFdlYm1hcCBzY2FsZSBkZXBlbmRlbmN5IHNldFxuICAgIGZ1bmN0aW9uIGNsaWVudFNpZGVGZWF0dXJlQ291bnQgKCkge1xuICAgICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKVxuXG4gICAgICBjb25zdCBxID0ge1xuICAgICAgICB3aGVyZTogbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgJzE9MScsXG4gICAgICAgIGdlb21ldHJ5OiBtYXBWaWV3LmV4dGVudFxuICAgICAgfVxuICAgICAgbGF5ZXJWaWV3LnF1ZXJ5RmVhdHVyZUNvdW50KHEpLnRoZW4oY291bnQgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgY2xpZW50U2lkZUZlYXR1cmVDb3VudCBjb21wbGV0ZSBpbiAkeyhuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMH0gc2Vjb25kc2ApXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGllbnRTaWRlRmVhdHVyZUNvdW50OiAnLCBjb3VudClcbiAgICAgICAgc2V0RmlsdGVyZWRSZWNvcmRDb3VudChjb3VudClcbiAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWVudFNpZGVGZWF0dXJlQ291bnQgZXJyb3I6ICcsIHJlYXNvbilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLypcbiAgICAvLyBhbHRlcm5hdGUgd2F5IG9mIHBlcmZvcm1pbmcgc2VydmVyLXNpZGUgY291bnQgdXNpbmcgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSNsb2FkQ291bnQuXG4gICAgLy8gT2Z0ZW4gYSBsaXR0bGUgZmFzdGVyIHRoYW4gRmVhdHVyZUxheWVyI3F1ZXJ5RmVhdHVyZUNvdW50IGJ1dCBubyB3YXkgdG8gY2FuY2VsXG4gICAgZnVuY3Rpb24gZGF0YVNvdXJjZUZlYXR1cmVDb3VudCAoKSB7XG4gICAgICAvLyBhc3luYyByZXF1ZXN0IHRpbWVvdXQgaWRlYSB0YWtlbiBmcm9tICBGYXJheiBLLiBLZWxoaW5pLCBcIk1vZGVybiBBc3luY2hyb25vdXMgSmF2YVNjcmlwdFwiXG4gICAgICBjb25zdCB0aW1lT3V0ID0gMjAwMDBcbiAgICAgIGNvbnN0IGZhaWx1cmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYHNlcnZlciBmYWlsZWQgdG8gcmVzcG9uZCBpbiAke3RpbWVPdXR9IG1pbGxpc2Vjb25kc2ApKVxuICAgICAgICB9LCB0aW1lT3V0KVxuICAgICAgfSlcblxuICAgICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKVxuICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBkYXRhU291cmNlPy5nZXRDdXJyZW50UXVlcnlQYXJhbXMoKVxuICAgICAgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgZGF0YVNvdXJjZS5sb2FkQ291bnQocXVlcnlQYXJhbXMsIHsgd2lkZ2V0SWQ6IHByb3BzLmlkIH0pLFxuICAgICAgICBmYWlsdXJlXG4gICAgICBdKS50aGVuKChjb3VudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgZGF0YVNvdXJjZUZlYXR1cmVDb3VudCBjb21wbGV0ZSBpbiAkeyhuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMH0gc2Vjb25kc2ApXG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50KVxuICAgICAgICBzZXRGaWx0ZXJlZFJlY29yZENvdW50KGNvdW50KVxuICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdkYXRhc291cmNlRmVhdHVyZUNvdW50IGZhaWxlZDogJywgcmVhc29uKVxuICAgICAgICBzZXRTZXJ2ZXJFcnJvcih0cnVlKVxuICAgICAgfSlcbiAgICB9XG4gICAgKi9cbiAgICBzZXRGaWx0ZXJlZFJlY29yZENvdW50KG51bGwpXG4gICAgc2V0U2VydmVyRXJyb3IoZmFsc2UpXG4gICAgaWYgKGxheWVyVmlldy5zdXNwZW5kZWQpIHtcbiAgICAgIHNlcnZlclNpZGVGZWF0dXJlQ291bnQoKVxuICAgICAgLy8gZGF0YVNvdXJjZUZlYXR1cmVDb3VudCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNsaWVudFNpZGVGZWF0dXJlQ291bnQgb25seSBwcm9kdWNlcyByZXN1bHRzIHdoZW4gc2NhbGUgdGhyZXNob2xkIGhhc1xuICAgICAgLy8gYmVlbiBjcm9zc2VkIGFuZCBwb2ludHMgZGlzcGxheVxuICAgICAgY2xpZW50U2lkZUZlYXR1cmVDb3VudCgpXG4gICAgfVxuICB9LCBbbWFwRXh0ZW50LCBsYXllckRlZmluaXRpb25dKVxuXG4gIC8vIGdldCBzdGF0ZSBmb3IgdGhpcyB3aWRnZXQuIEFueSBjaGFuZ2UgaW4gd2lkZ2V0U3RhdGUsIGUuZy4gY2hhbmdlIG9mIG1hcCBleHRlbnRcbiAgLy8gb3IgZGF0YXNvdXJjZSBmaWx0ZXIsIGNhdXNlcyB3aWRnZXQgdG8gcmUtcmVuZGVyXG4gIC8vIGNvbnN0IHdpZGdldFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiB7XG4gIC8vICAgcmV0dXJuIHN0YXRlLndpZGdldHNTdGF0ZVtwcm9wcy53aWRnZXRJZF1cbiAgLy8gfSlcbiAgLy8gY29uc29sZS5sb2coYHJlbmRlcmluZyBmaWx0ZXJlZC1yZWNvcmQtY291bnQuIGV4dGVudDogJHtjb252ZXJ0QW5kRm9ybWF0Q29vcmRpbmF0ZXMod2lkZ2V0U3RhdGU/LmV4dGVudCl9LCBxdWVyeVBhcmFtczogJHt3aWRnZXRTdGF0ZT8ucXVlcnlQYXJhbXN9YClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdmlldyB8fCAhZGF0YVNvdXJjZSkgeyByZXR1cm4gfVxuICAgIC8vIHVzZWQgaW4gc2VydmVyLXNpZGUgcXVlcnlcbiAgICBtYXBMYXllclJlZi5jdXJyZW50ID0gdmlldy52aWV3Lm1hcC5sYXllcnMuZmluZChseXIgPT4gbHlyLnRpdGxlID09PSBkYXRhU291cmNlLmxheWVyLnRpdGxlKSBhcyBGZWF0dXJlTGF5ZXJcblxuICAgIC8vIHVzZWQgaW4gY2xpZW50LXNpZGUgcXVlcnlcbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3ID0gT2JqZWN0LnZhbHVlcyh2aWV3LmppbXVMYXllclZpZXdzKS5maW5kKHZpZXcgPT4gdmlldy5sYXllckRhdGFTb3VyY2VJZCA9PT0gZGF0YVNvdXJjZS5pZClcbiAgICBpZiAoamltdUxheWVyVmlldy52aWV3LmxheWVyLnR5cGUgPT09ICdmZWF0dXJlJykge1xuICAgICAgbGF5ZXJWaWV3UmVmLmN1cnJlbnQgPSBqaW11TGF5ZXJWaWV3LnZpZXcgYXMgRmVhdHVyZUxheWVyVmlld1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBleHBlY3RlZCBGZWF0dXJlTGF5ZXJWaWV3LCBidXQgZm91bmQgJHtqaW11TGF5ZXJWaWV3LnZpZXcubGF5ZXIudHlwZX1gKVxuICAgIH1cblxuICAgIC8vIG1hcCByZWRyYXdzIGdyYXBoaWNzIGxheWVyIGZvciBtb3N0IG1hcCBjbGlja3MsIHNvIHVzZUVmZmVjdCBlbnN1cmVzIGNvdW50c1xuICAgIC8vIGFyZSBvbmx5IHVwZGF0ZWQgZm9yIGV4dGVudCwgZmlsdGVyIGNoYW5nZXNcbiAgICBjb25zdCB3YXRjaEhhbmRsZSA9IHJlYWN0aXZlVXRpbHMud2hlbihcbiAgICAgICgpID0+ICF2aWV3LnZpZXcudXBkYXRpbmcsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHNldE1hcEV4dGVudCh2aWV3LnZpZXcuZXh0ZW50KVxuICAgICAgICBzZXRMYXllckRlZmluaXRpb24obWFwTGF5ZXJSZWYuY3VycmVudC5kZWZpbml0aW9uRXhwcmVzc2lvbilcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NsZWFuaW5nIHVwIHdhdGNoSGFuZGxlLi4uJylcbiAgICAgIHdhdGNoSGFuZGxlLnJlbW92ZSgpXG4gICAgfVxuICB9LCBbdmlldywgZGF0YVNvdXJjZV0pXG5cbiAgLy8gcnVucyBvbmNlXG4gIGZ1bmN0aW9uIG9uRGF0YVNvdXJjZUNyZWF0ZWQgKGRzOiBEYXRhU291cmNlKSB7XG4gICAgaWYgKCFkcykgeyB0aHJvdyBuZXcgRXJyb3IoJ25vIERhdGFTb3VyY2UnKSB9XG5cbiAgICBjb25zdCBmZWF0dXJlTGF5ZXJEYXRhU291cmNlID0gZHMgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZVxuICAgIHNldERhdGFTb3VyY2UoZmVhdHVyZUxheWVyRGF0YVNvdXJjZSlcbiAgICBjb3VudEFsbFNhbXBsZXMoZmVhdHVyZUxheWVyRGF0YVNvdXJjZSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBjb3VudGVkICR7cmVzcG9uc2UuY291bnR9IHRvdGFsIHJlY29yZHMgaW4gJHtmZWF0dXJlTGF5ZXJEYXRhU291cmNlLnVybH1gKVxuICAgICAgc2V0VG90YWxSZWNvcmRDb3VudChyZXNwb25zZS5jb3VudClcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIGlmICgham12KSB7IHRocm93IG5ldyBFcnJvcignbm8gTWFwVmlldycpIH1cbiAgICBzZXRWaWV3KGptdilcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdENvdW50cygpIHtcbiAgICBpZiAodG90YWxSZWNvcmRDb3VudCAhPT0gbnVsbCAmJiBmaWx0ZXJlZFJlY29yZENvdW50ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gPHNwYW4+e2ZpbHRlcmVkUmVjb3JkQ291bnQudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9IG91dCBvZiB7dG90YWxSZWNvcmRDb3VudC50b0xvY2FsZVN0cmluZygnZW4tVVMnKX0gcmVjb3JkcyBpbiB2aWV3PC9zcGFuPlxuICAgIH0gZWxzZSBpZiAoc2VydmVyRXJyb3IpIHtcbiAgICAgIHJldHVybiA8c3Bhbj5TZXJ2ZXIgRXJyb3IgLSBwbGVhc2UgdHJ5IGFnYWluPC9zcGFuPlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPHNwYW4+dXBkYXRpbmcuLi48L3NwYW4+XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMTBweCcgfX0+XG4gICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxuICAgICAgICB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlcz8uWzBdfVxuICAgICAgICB3aWRnZXRJZD17cHJvcHMuaWR9XG4gICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e29uRGF0YVNvdXJjZUNyZWF0ZWR9XG4gICAgICAvPlxuICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgIHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgIC8+XG5cbiAgICAgIHtmb3JtYXRDb3VudHMoKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==