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
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/erddap-query/src/runtime/widget.tsx ***!
  \*********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/geometry/support/webMercatorUtils */ "esri/geometry/support/webMercatorUtils");
/* harmony import */ var esri_core_reactiveUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/core/reactiveUtils */ "esri/core/reactiveUtils");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _widget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget.css */ "./your-extensions/widgets/erddap-query/src/runtime/widget.css");
/** @jsx jsx */



// import SpatialReference from 'esri/geometry/SpatialReference'



// import { URLSearchParams } from 'url'

// import { element } from 'prop-types'
const { useSelector } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux;
// interface CoordsObject {
//   xmin: number
//   ymin: number
//   xmax: number
//   ymax: number
// }
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
        searchParams.push('ImageURL=~"http.+"');
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
    clauses.filter(elem => elem[0].toLowerCase() === 'fishcouncilregioncode').forEach(elem => {
        searchParams.push(`FishCouncilRegion="${findFisheryRegionByCode(elem[2])}"`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'oceancode').forEach(elem => {
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
    clauses.filter(elem => elem[0].toLowerCase() === 'synonyms').forEach(elem => {
        // e.g. "%paradox%" -> ".*paradox.*"
        const regex = /["%]/g;
        const str = elem[2].replace(regex, '');
        // mark as case-insensitive pattern match
        searchParams.push(`Synonyms=~"(?i).*${str}.*"`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'verbatimscientificname').forEach(elem => {
        const regex = /["%]/g;
        const str = elem[2].replace(regex, '');
        searchParams.push(`VerbatimScientificName=~"(?i).*${str}.*"`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'aphiaid').forEach(elem => {
        searchParams.push(`AphiaID=${elem[2]}`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'identificationqualifier').forEach(elem => {
        searchParams.push(`IdentificationQualifier=${elem[2]}`);
    });
}
// function formatExtent (mercExtent: Extent) {
//   const geoExtent = webMercatorUtils.webMercatorToGeographic(mercExtent, false) as Extent
//   return `${geoExtent.xmin.toFixed(3)}, ${geoExtent.ymin.toFixed(3)}, ${geoExtent.xmax.toFixed(3)}, ${geoExtent.ymax.toFixed(3)}`
// }
function Widget(props) {
    var _a, _b;
    // console.log('rendering erddap-query...')
    const [activeDs, setActiveDs] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const [geographicMapExtent, setGeographicMapExtent] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const [mapView, setMapView] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const validBboxRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(false);
    // get state for this widget.
    const widgetState = useSelector((state) => {
        return state.widgetsState[props.widgetId];
    });
    // build ERDDAP Url. Note that uses a non-standard pattern for search parameters
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
    // console.log({ erddapUrl })
    function copyUrlBtn() {
        // TODO add message to toaster
        navigator.clipboard.writeText(generateErddapUrl()).then(() => { console.debug('copied to clipboard'); });
    }
    function generateErddapUrl(type = 'html') {
        // console.log(type)
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
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "primary", role: "button", href: generateErddapUrl('html'), target: "_blank", style: { marginRight: '20px', textDecoration: 'none', color: 'white' } }, "Customize")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { placement: "top", title: "Download standard CSV file with current filters applied" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "primary", role: "button", href: generateErddapUrl('csvp'), target: "_blank", style: { textDecoration: 'none', color: 'white' } }, "Download")))
            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: '80%', alignContent: 'center' } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, "Warning: missing or invalid spatial extent. Please ensure area of interest does not cross the antimeridian (i.e. international date line)")),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { placement: "top", title: "Download the entire database in a CSV format" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "primary", role: "button", href: props.config.csvFileUrl, target: "_blank", style: { width: '230px', marginTop: '20px', textDecoration: 'none', color: 'white' } }, "Download Entire Database"))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9lcmRkYXAtcXVlcnkvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOEhBQThILFVBQVUsTUFBTSxLQUFLLFVBQVUsdUNBQXVDLGlCQUFpQixHQUFHLFlBQVksbUJBQW1CLEdBQUcsbUJBQW1CO0FBQ3JSO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ2IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O1lBQzdFLCtDQUFDLDRDQUFPLElBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsOENBQThDO2dCQUMzRSwrQ0FBQywyQ0FBTSxJQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLCtCQUFtQyxDQUNuTSxDQUNOO1FBRU4sd0RBQUssS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtZQUM1QixrSUFBK0UsQ0FDM0UsQ0FDRixDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2VyZGRhcC1xdWVyeS9zcmMvcnVudGltZS93aWRnZXQuY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZXJkZGFwLXF1ZXJ5L3NyYy9ydW50aW1lL3dpZGdldC5jc3M/NzY5MyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9jb3JlL3JlYWN0aXZlVXRpbHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZXJkZGFwLXF1ZXJ5L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ob3Zlcjpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ob3ZlciB7XG4gIGNvbG9yOiBncmVlbjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2VyZGRhcC1xdWVyeS9zcmMvcnVudGltZS93aWRnZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ob3Zlcjpob3ZlciB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5ob3ZlciB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vd2lkZ2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vd2lkZ2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfY29yZV9yZWFjdGl2ZVV0aWxzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfc3VwcG9ydF93ZWJNZXJjYXRvclV0aWxzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgdHlwZSBBbGxXaWRnZXRQcm9wcyxcbiAganN4LFxuICB0eXBlIElNU3RhdGUsXG4gIFJlYWN0UmVkdXgsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgRGF0YVNvdXJjZUNvbXBvbmVudFxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICB0eXBlIEppbXVNYXBWaWV3LFxuICAvLyB0eXBlIEppbXVGZWF0dXJlTGF5ZXJWaWV3LFxuICBKaW11TWFwVmlld0NvbXBvbmVudCxcbiAgdHlwZSBGZWF0dXJlTGF5ZXJEYXRhU291cmNlXG4gIC8vIHR5cGUgTWFwRGF0YVNvdXJjZVxufSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgVG9vbHRpcCB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgdHlwZSBFeHRlbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9FeHRlbnQnXG5pbXBvcnQgdHlwZSBNYXBWaWV3IGZyb20gJ0BhcmNnaXMvY29yZS92aWV3cy9NYXBWaWV3J1xuLy8gaW1wb3J0IFNwYXRpYWxSZWZlcmVuY2UgZnJvbSAnZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlJ1xuaW1wb3J0IHdlYk1lcmNhdG9yVXRpbHMgZnJvbSAnZXNyaS9nZW9tZXRyeS9zdXBwb3J0L3dlYk1lcmNhdG9yVXRpbHMnXG5pbXBvcnQgcmVhY3RpdmVVdGlscyBmcm9tICdlc3JpL2NvcmUvcmVhY3RpdmVVdGlscydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuLy8gaW1wb3J0IHsgTGFiZWwsIFJhZGlvLCBkZWZhdWx0TWVzc2FnZXMgYXMgamltdVVJTWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbi8vIGltcG9ydCB7IFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ3VybCdcbmltcG9ydCAnLi93aWRnZXQuY3NzJ1xuLy8gaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHsgdXNlU2VsZWN0b3IgfSA9IFJlYWN0UmVkdXhcblxuLy8gaW50ZXJmYWNlIENvb3Jkc09iamVjdCB7XG4vLyAgIHhtaW46IG51bWJlclxuLy8gICB5bWluOiBudW1iZXJcbi8vICAgeG1heDogbnVtYmVyXG4vLyAgIHltYXg6IG51bWJlclxuLy8gfVxuXG5mdW5jdGlvbiBmaW5kT2NlYW5OYW1lQnlDb2RlIChjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgMDogJ0FyY3RpYycsXG4gICAgMTogJ0luZGlhbicsXG4gICAgMjogJ05vcnRoIEF0bGFudGljJyxcbiAgICAzOiAnTm9ydGggUGFjaWZpYycsXG4gICAgNDogJ1NvdXRoIEF0bGFudGljJyxcbiAgICA1OiAnU291dGggUGFjaWZpYycsXG4gICAgNjogJ1NvdXRoZXJuJ1xuICB9XG4gIHJldHVybiB2YWx1ZXNbY29kZV0gPyB2YWx1ZXNbY29kZV0gOiAnJ1xufVxuXG5mdW5jdGlvbiBmaW5kRmlzaGVyeVJlZ2lvbkJ5Q29kZSAoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdmFsdWVzID0ge1xuICAgIDA6ICdOQScsXG4gICAgMTogJ0NhcmliYmVhbicsXG4gICAgMjogJ0d1bGYgb2YgTWV4aWNvJyxcbiAgICAzOiAnTWlkLUF0bGFudGljJyxcbiAgICA0OiAnTmV3IEVuZ2xhbmQnLFxuICAgIDU6ICdOb3J0IFBhY2lmaWMnLFxuICAgIDY6ICdQYWNpZmljJyxcbiAgICA3OiAnU291dGggQXRsYW50aWMnLFxuICAgIDg6ICdXZXN0ZXJuIFBhY2lmaWMnXG4gIH1cbiAgcmV0dXJuIHZhbHVlc1tjb2RlXSA/IHZhbHVlc1tjb2RlXSA6ICcnXG59XG5cbi8vIHVzZXItZGVmaW5lZCB0eXBlIGd1YXJkIHVzaW5nIHR5cGUgcHJlZGljYXRlXG5mdW5jdGlvbiBpc0ZlYXR1cmVMYXllckRhdGFTb3VyY2VUeXBlIChvYmo6IERhdGFTb3VyY2UpOiBvYmogaXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB7XG4gIHJldHVybiAob2JqIGFzIEZlYXR1cmVMYXllckRhdGFTb3VyY2UpLnR5cGUgPT09ICdGRUFUVVJFX0xBWUVSJ1xufVxuXG4vLyBtdXRhdGVzIHRoZSBwcm92aWRlZCBhcnJheVxuZnVuY3Rpb24gY29udmVydFNxbFRvRXJkZGFwUGFyYW1zIChzcWw6IHN0cmluZywgc2VhcmNoUGFyYW1zOiBzdHJpbmdbXSkge1xuICAvLyBjb25zb2xlLmxvZygnaW5zaWRlIGNvbnZlcnRTcWxUb0VyZGRhcFBhcmFtcyB3aXRoICcsIHNxbClcblxuICAvLyBtYW5pcHVsYXRlIFNRTCBzdHJpbmcgaW50byBsaXN0IG9mIDMtZWxlbWVudCBsaXN0cyAoZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSlcbiAgY29uc3QgY2xhdXNlcyA9IHNxbFxuICAgIC5yZXBsYWNlKC9cXCgrPy9nLCAnJykgLy8gcmVwbGFjZSBsZWZ0IHBhcmVuc1xuICAgIC5yZXBsYWNlKC9cXCkrPy9nLCAnJykgLy8gcmVwbGFjZSByaWdodCBwYXJlbnNcbiAgICAucmVwbGFjZSgvTE9XRVIvZywgJycpIC8vIHJlbW92ZSB0aGUgTE9XRVIoKSBmdW5jdGlvblxuICAgIC5zcGxpdCgvIGFuZCAvaSlcbiAgICAubWFwKGVsZW0gPT4ge1xuICAgICAgY29uc3QgdCA9IGVsZW0uc3BsaXQoL1xccysvKVxuICAgICAgLy8gY29uc3RydWN0IDMtZWxlbWVudCBhcnJheSB3aXRoIGZpZWxkLCBvcGVyYXRvciwgdmFsdWUuIFZhbHVlIG1heSBoYXZlIG11bHRpcGxlIHdvcmRzIHdoaWNoIG5lZWRcbiAgICAgIC8vIHRvIGJlIHJlam9pbmVkIGFuZCByZXBsYWNlIHNpbmdsZSBxdW90ZXMgd2l0aCBkb3VibGUgcXVvdGVzXG4gICAgICByZXR1cm4gdC5zbGljZSgwLCAyKS5jb25jYXQodC5zbGljZSgyKS5qb2luKCcgJykucmVwbGFjZSgvJy9nLCAnXCInKSlcbiAgICB9KVxuICAvLyBjb25zb2xlLmxvZyhjbGF1c2VzKVxuXG4gIC8vIGJ1aWxkIGtleS92YWx1ZSBwYWlycyBmb3Igc3BlY2lmaWVkIHBhcmFtZXRlcnNcbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICd2ZXJuYWN1bGFybmFtZWNhdGVnb3J5JykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgVmVybmFjdWxhck5hbWVDYXRlZ29yeT0ke2VsZW1bMl19YClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2ltYWdldXJsJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaCgnSW1hZ2VVUkw9flwiaHR0cC4rXCInKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZGVwdGhpbm1ldGVycycpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYERlcHRoSW5NZXRlcnMgJHtlbGVtWzFdfSAke2VsZW1bMl19YClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3NjaWVudGlmaWNuYW1lJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgU2NpZW50aWZpY05hbWU9JHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdvYnNlcnZhdGlvbnllYXInKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBPYnNlcnZhdGlvblllYXIgJHtlbGVtWzFdfSAke2VsZW1bMl19YClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2Zpc2hjb3VuY2lscmVnaW9uY29kZScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYEZpc2hDb3VuY2lsUmVnaW9uPVwiJHtmaW5kRmlzaGVyeVJlZ2lvbkJ5Q29kZShlbGVtWzJdKX1cImApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdvY2VhbmNvZGUnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBPY2Vhbj1cIiR7ZmluZE9jZWFuTmFtZUJ5Q29kZShlbGVtWzJdKX1cImApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdwaHlsdW0nKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBQaHlsdW09JHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdjbGFzcycpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYENsYXNzPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIC8vIE9yZGVyIGlzIGEgcmVzZXJ2ZWQgd29yZCBhbmQgcmVuYW1lZCBpbiB0aGUgaG9zdGVkIGZlYXR1cmUgbGF5ZXJcbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdvcmRlcl8nKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBPcmRlcj0ke2VsZW1bMl19YClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbWlseScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYEZhbWlseT0ke2VsZW1bMl19YClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2dlbnVzJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgR2VudXM9JHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdzeW5vbnltcycpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgLy8gZS5nLiBcIiVwYXJhZG94JVwiIC0+IFwiLipwYXJhZG94LipcIlxuICAgIGNvbnN0IHJlZ2V4ID0gL1tcIiVdL2dcbiAgICBjb25zdCBzdHIgPSBlbGVtWzJdLnJlcGxhY2UocmVnZXgsICcnKVxuICAgIC8vIG1hcmsgYXMgY2FzZS1pbnNlbnNpdGl2ZSBwYXR0ZXJuIG1hdGNoXG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYFN5bm9ueW1zPX5cIig/aSkuKiR7c3RyfS4qXCJgKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAndmVyYmF0aW1zY2llbnRpZmljbmFtZScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgY29uc3QgcmVnZXggPSAvW1wiJV0vZ1xuICAgIGNvbnN0IHN0ciA9IGVsZW1bMl0ucmVwbGFjZShyZWdleCwgJycpXG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYFZlcmJhdGltU2NpZW50aWZpY05hbWU9flwiKD9pKS4qJHtzdHJ9LipcImApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdhcGhpYWlkJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgQXBoaWFJRD0ke2VsZW1bMl19YClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2lkZW50aWZpY2F0aW9ucXVhbGlmaWVyJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgSWRlbnRpZmljYXRpb25RdWFsaWZpZXI9JHtlbGVtWzJdfWApXG4gIH0pXG59XG5cbi8vIGZ1bmN0aW9uIGZvcm1hdEV4dGVudCAobWVyY0V4dGVudDogRXh0ZW50KSB7XG4vLyAgIGNvbnN0IGdlb0V4dGVudCA9IHdlYk1lcmNhdG9yVXRpbHMud2ViTWVyY2F0b3JUb0dlb2dyYXBoaWMobWVyY0V4dGVudCwgZmFsc2UpIGFzIEV4dGVudFxuLy8gICByZXR1cm4gYCR7Z2VvRXh0ZW50LnhtaW4udG9GaXhlZCgzKX0sICR7Z2VvRXh0ZW50LnltaW4udG9GaXhlZCgzKX0sICR7Z2VvRXh0ZW50LnhtYXgudG9GaXhlZCgzKX0sICR7Z2VvRXh0ZW50LnltYXgudG9GaXhlZCgzKX1gXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikge1xuICAvLyBjb25zb2xlLmxvZygncmVuZGVyaW5nIGVyZGRhcC1xdWVyeS4uLicpXG4gIGNvbnN0IFthY3RpdmVEcywgc2V0QWN0aXZlRHNdID0gdXNlU3RhdGU8RmVhdHVyZUxheWVyRGF0YVNvdXJjZT4oKVxuICBjb25zdCBbZ2VvZ3JhcGhpY01hcEV4dGVudCwgc2V0R2VvZ3JhcGhpY01hcEV4dGVudF0gPSB1c2VTdGF0ZTxFeHRlbnQ+KClcbiAgY29uc3QgW21hcFZpZXcsIHNldE1hcFZpZXddID0gdXNlU3RhdGU8TWFwVmlldz4oKVxuICBjb25zdCB2YWxpZEJib3hSZWYgPSB1c2VSZWYoZmFsc2UpXG5cbiAgLy8gZ2V0IHN0YXRlIGZvciB0aGlzIHdpZGdldC5cbiAgY29uc3Qgd2lkZ2V0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHtcbiAgICByZXR1cm4gc3RhdGUud2lkZ2V0c1N0YXRlW3Byb3BzLndpZGdldElkXVxuICB9KVxuXG4gIC8vIGJ1aWxkIEVSRERBUCBVcmwuIE5vdGUgdGhhdCB1c2VzIGEgbm9uLXN0YW5kYXJkIHBhdHRlcm4gZm9yIHNlYXJjaCBwYXJhbWV0ZXJzXG4gIGNvbnN0IHN0ZEZpZWxkcyA9ICdTaGFsbG93RmxhZyxEYXRhc2V0SUQsQ2F0YWxvZ051bWJlcixTYW1wbGVJRCxJbWFnZVVSTCxSZXBvc2l0b3J5LFNjaWVudGlmaWNOYW1lLFZlcm5hY3VsYXJOYW1lQ2F0ZWdvcnksVGF4b25SYW5rLElkZW50aWZpY2F0aW9uUXVhbGlmaWVyLExvY2FsaXR5LGxhdGl0dWRlLGxvbmdpdHVkZSxEZXB0aEluTWV0ZXJzLERlcHRoTWV0aG9kLE9ic2VydmF0aW9uRGF0ZSxTdXJ2ZXlJRCxTdGF0aW9uLEV2ZW50SUQsU2FtcGxpbmdFcXVpcG1lbnQsTG9jYXRpb25BY2N1cmFjeSxSZWNvcmRUeXBlLERhdGFQcm92aWRlcidcbiAgY29uc3Qgc2VhcmNoUGFyYW1zOiBzdHJpbmdbXSA9IFtdXG5cbiAgaWYgKG1hcFZpZXcgJiYgbWFwVmlldy5leHRlbnQpIHtcbiAgICBjb25zdCBtYXBFeHRlbnQgPSB3ZWJNZXJjYXRvclV0aWxzLndlYk1lcmNhdG9yVG9HZW9ncmFwaGljKG1hcFZpZXcuZXh0ZW50KSBhcyBFeHRlbnRcbiAgICAvLyBmbGFnIGZvciBhbnRpbWVyaWRpYW4tY3Jvc3NpbmcgZXh0ZW50XG4gICAgdmFsaWRCYm94UmVmLmN1cnJlbnQgPSAobWFwRXh0ZW50LnhtaW4gPCBtYXBFeHRlbnQueG1heClcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgbGF0aXR1ZGU+PSR7bWFwRXh0ZW50LnltaW4udG9GaXhlZCg0KX1gKVxuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBsYXRpdHVkZTw9JHttYXBFeHRlbnQueW1heC50b0ZpeGVkKDQpfWApXG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYGxvbmdpdHVkZT49JHttYXBFeHRlbnQueG1pbi50b0ZpeGVkKDQpfWApXG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYGxvbmdpdHVkZTw9JHttYXBFeHRlbnQueG1heC50b0ZpeGVkKDQpfWApXG4gIH1cbiAgaWYgKGFjdGl2ZURzICYmIGFjdGl2ZURzLmdldEN1cnJlbnRRdWVyeVBhcmFtcygpLndoZXJlKSB7XG4gICAgLy8gYXVnbWVudHMgcHJvdmlkZWQgb2JqZWN0IHcvIGtleS92YWx1ZSBwYWlycyBmcm9tIFNRTCB3aGVyZSBjbGF1c2VcbiAgICBjb252ZXJ0U3FsVG9FcmRkYXBQYXJhbXMoYWN0aXZlRHMuZ2V0Q3VycmVudFF1ZXJ5UGFyYW1zKCkud2hlcmUsIHNlYXJjaFBhcmFtcylcbiAgfVxuICBjb25zdCBlcmRkYXBVcmwgPSBgJHtwcm9wcy5jb25maWcuZXJkZGFwQmFzZVVybH0uaHRtbD8ke3N0ZEZpZWxkc30mJHtzZWFyY2hQYXJhbXMuam9pbignJicpfWBcbiAgLy8gY29uc29sZS5sb2coeyBlcmRkYXBVcmwgfSlcblxuICBmdW5jdGlvbiBjb3B5VXJsQnRuICgpIHtcbiAgICAvLyBUT0RPIGFkZCBtZXNzYWdlIHRvIHRvYXN0ZXJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChnZW5lcmF0ZUVyZGRhcFVybCgpKS50aGVuKCgpID0+IHsgY29uc29sZS5kZWJ1ZygnY29waWVkIHRvIGNsaXBib2FyZCcpIH0pXG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUVyZGRhcFVybCAodHlwZSA9ICdodG1sJykge1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGUpXG4gICAgaWYgKHR5cGUgPT09ICdodG1sJykge1xuICAgICAgcmV0dXJuIGVyZGRhcFVybFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXJkZGFwVXJsPy5yZXBsYWNlKCdkZWVwX3NlYV9jb3JhbHMuaHRtbCcsICdkZWVwX3NlYV9jb3JhbHMuY3N2cCcpXG4gICAgfVxuICB9XG5cbiAgLy8gcnVucyBvbmNlXG4gIGZ1bmN0aW9uIG9uRGF0YVNvdXJjZUNyZWF0ZWQgKGRzOiBEYXRhU291cmNlKSB7XG4gICAgY29uc3QgZmVhdHVyZUxheWVyRGF0YVNvdXJjZSA9IGlzRmVhdHVyZUxheWVyRGF0YVNvdXJjZVR5cGUoZHMpID8gZHMgOiB1bmRlZmluZWRcbiAgICAvLyBjb25zdCBkc1RpdGxlID0gZmVhdHVyZUxheWVyRGF0YVNvdXJjZS5sYXllci50aXRsZVxuICAgIHNldEFjdGl2ZURzKGZlYXR1cmVMYXllckRhdGFTb3VyY2UpXG4gIH1cblxuICAvLyBydW5zIG9uY2VcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIHNldE1hcFZpZXcoam12LnZpZXcgYXMgTWFwVmlldylcbiAgICAvLyBUT0RPIHdoeSBkb2VzIHRoaXMgbm90IGZpcmUgd2hlbiB3aWRnZXQgaXMgaW4gV2luZG93IGJ1dCB3b3JrcyBub3JtYWxseSB3aGVuIGRpcmVjdGx5IGluIGxheW91dD9cbiAgICAvLyAndXBkYXRpbmcnIHByb3BlcnR5IGZpcmVzIG11bHRpcGxlIHRpbWVzIGR1cmluZyB6b29tL3BhbiBzbyB1c2luZyAnc3RhdGlvbmFyeScgcHJvcGVydHkgcmVkdWNlcyB1bm5lY2Vzc2FyeSByZS1yZW5kZXJzXG4gICAgcmVhY3RpdmVVdGlscy53YXRjaChcbiAgICAgICgpID0+IGptdi52aWV3LnN0YXRpb25hcnksXG4gICAgICAoc3RhdGlvbmFyeSkgPT4ge1xuICAgICAgICBpZiAoc3RhdGlvbmFyeSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUkREQVAgZXh0ZW50OiAnLCBmb3JtYXRFeHRlbnQoam12LnZpZXcuZXh0ZW50KSlcbiAgICAgICAgICBjb25zdCBleHRlbnQgPSB3ZWJNZXJjYXRvclV0aWxzLndlYk1lcmNhdG9yVG9HZW9ncmFwaGljKGptdi52aWV3LmV4dGVudCkgYXMgRXh0ZW50XG4gICAgICAgICAgc2V0R2VvZ3JhcGhpY01hcEV4dGVudChleHRlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJkZGFwLXF1ZXJ5IGppbXUtd2lkZ2V0IG0tMlwiPlxuICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcbiAgICAgICAgdXNlRGF0YVNvdXJjZT17cHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXX1cbiAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxuICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtvbkRhdGFTb3VyY2VDcmVhdGVkfVxuICAgICAgLz5cbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XG4gICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17YWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XG4gICAgICAvPlxuICAgICAgey8qIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdyaWdodCcgfX0+XG4gICAgICAgIDxUZXh0QXJlYSBzdHlsZT17e3dpZHRoOlwiODUlXCJ9fSByZWFkT25seT1cInRydWVcIiB2YWx1ZT17ZXJkZGFwVXJsfSAvPlxuICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2VyZGRhcFVybH0gc3R5bGU9e3sgd2lkdGg6ICc4NSUnLCBoZWlnaHQ6ICcyNTBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0gcmVhZE9ubHk9e3RydWV9Lz5cbiAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJDb3B5IFVSTCB0byBjbGlwYm9hcmRcIj5cbiAgICAgICAgICA8QnV0dG9uIGFyaWEtbGFiZWw9XCJCdXR0b25cIiBpY29uIG9uQ2xpY2s9e2NvcHlVcmxCdG59IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxuICAgICAgICAgICAgPEljb24gaWNvbj0nPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGQ9XCJNMTYgMTBIOC43MjNsMS42MDIgMS42MDItLjcwNy43MDdMNi44MDggOS41bDIuODEtMi44MS43MDcuNzA4TDguNzIzIDlIMTZ6TTMgMTNoNHYtMUgzem04LTEydjFoMnY2aC0xVjNoLTF2MUgzVjNIMnYxMmgxMHYtNGgxdjVIMVYyaDJWMWgyLjI3N2ExLjk4NCAxLjk4NCAwIDAgMSAzLjQ0NiAwem0tMSAxSDh2LS4zMThBLjY4Mi42ODIgMCAwIDAgNy4zMTggMWgtLjYzNkEuNjgyLjY4MiAwIDAgMCA2IDEuNjgyVjJINHYxaDZ6TTcgNkgzdjFoNHptLTQgNGgyVjlIM3pcIi8+PHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgxNnYxNkgwelwiLz48L3N2Zz4nXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzE1cHgnIH19PlxuICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwiQ29weSBVUkwgdG8gY2xpcGJvYXJkXCI+XG4gICAgICAgICAgPEJ1dHRvbiBhcmlhLWxhYmVsPVwiQnV0dG9uXCIgaWNvbiBvbkNsaWNrPXtjb3B5VXJsQnRufT5cbiAgICAgICAgICAgIDxJY29uIGljb249JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBkPVwiTTE2IDEwSDguNzIzbDEuNjAyIDEuNjAyLS43MDcuNzA3TDYuODA4IDkuNWwyLjgxLTIuODEuNzA3LjcwOEw4LjcyMyA5SDE2ek0zIDEzaDR2LTFIM3ptOC0xMnYxaDJ2NmgtMVYzaC0xdjFIM1YzSDJ2MTJoMTB2LTRoMXY1SDFWMmgyVjFoMi4yNzdhMS45ODQgMS45ODQgMCAwIDEgMy40NDYgMHptLTEgMUg4di0uMzE4QS42ODIuNjgyIDAgMCAwIDcuMzE4IDFoLS42MzZBLjY4Mi42ODIgMCAwIDAgNiAxLjY4MlYySDR2MWg2ek03IDZIM3YxaDR6bS00IDRoMlY5SDN6XCIvPjxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMTZ2MTZIMHpcIi8+PC9zdmc+J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9kaXY+XG4gICAgICB7dmFsaWRCYm94UmVmLmN1cnJlbnRcbiAgICAgICAgPyA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJvcGVuIEVSRERBUCBjb25zb2xlIHRvIGN1c3RvbWl6ZSBvdXRwdXRcIj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgcm9sZT1cImJ1dHRvblwiIGhyZWY9e2dlbmVyYXRlRXJkZGFwVXJsKCdodG1sJyl9IHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMjBweCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnd2hpdGUnIH19PkN1c3RvbWl6ZTwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwiRG93bmxvYWQgc3RhbmRhcmQgQ1NWIGZpbGUgd2l0aCBjdXJyZW50IGZpbHRlcnMgYXBwbGllZFwiPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiByb2xlPVwiYnV0dG9uXCIgaHJlZj17Z2VuZXJhdGVFcmRkYXBVcmwoJ2NzdnAnKX0gdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJywgY29sb3I6ICd3aGl0ZScgfX0+RG93bmxvYWQ8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9kaXY+XG4gICAgICAgIDogPGRpdiBzdHlsZT17eyB3aWR0aDogJzgwJScsIGFsaWduQ29udGVudDogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICA8cD5XYXJuaW5nOiBtaXNzaW5nIG9yIGludmFsaWQgc3BhdGlhbCBleHRlbnQuIFBsZWFzZSBlbnN1cmUgYXJlYSBvZiBpbnRlcmVzdCBkb2VzIG5vdCBjcm9zcyB0aGUgYW50aW1lcmlkaWFuXG4gICAgICAgICAgICAgIChpLmUuIGludGVybmF0aW9uYWwgZGF0ZSBsaW5lKTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkRvd25sb2FkIHRoZSBlbnRpcmUgZGF0YWJhc2UgaW4gYSBDU1YgZm9ybWF0XCI+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHJvbGU9XCJidXR0b25cIiBocmVmPXtwcm9wcy5jb25maWcuY3N2RmlsZVVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgd2lkdGg6ICcyMzBweCcsIG1hcmdpblRvcDogJzIwcHgnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjb2xvcjogJ3doaXRlJyB9fT5Eb3dubG9hZCBFbnRpcmUgRGF0YWJhc2U8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMjBweCcgfX0+XG4gICAgICAgIDxzcGFuPk5vdGUgdGhhdCBFUkREQVAgbWF5IHRha2UgYSBmZXcgbWludXRlcyB0byByZXNwb25kIHRvIHlvdXIgcmVxdWVzdDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9