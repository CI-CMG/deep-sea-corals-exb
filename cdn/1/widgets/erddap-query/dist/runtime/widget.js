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
/* harmony import */ var _widget_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widget.css */ "./your-extensions/widgets/erddap-query/src/runtime/widget.css");

/** @jsx jsx */







const { useSelector } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.ReactRedux;
// interface CoordsObject {
//   xmin: number
//   ymin: number
//   xmax: number
//   ymax: number
// }
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
        searchParams.push('ImageURL=~"https://.*"');
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'depthinmeters').forEach(elem => {
        searchParams.push(`DepthInMeters${elem[1]}${elem[2]}`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'scientificname').forEach(elem => {
        searchParams.push(`ScientificName=${elem[2]}`);
    });
    clauses.filter(elem => elem[0].toLowerCase() === 'observationyear').forEach(elem => {
        searchParams.push(`ObservationYear${elem[1]}${elem[2]}`);
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
    clauses.filter(elem => elem[0].toLowerCase() === 'datasetid').forEach(elem => {
        searchParams.push(`DatasetID=${elem[2]}`);
    });
    // clauses.filter(elem => elem[0].toLowerCase() === 'identificationqualifier').forEach(elem => {
    //   searchParams.push(`IdentificationQualifier=${elem[2]}`)
    // })
}
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
        convertSqlToErddapParams(activeDs.getCurrentQueryParams().where, searchParams);
    }
    const erddapUrl = `${props.config.erddapBaseUrl}.html?${stdFields}&${searchParams.join('&')}`;
    // console.log({ erddapUrl })
    function copyUrlBtn() {
        // TODO add message to toaster
        navigator.clipboard.writeText(generateErddapUrl()).then(() => { console.debug('copied to clipboard'); });
    }
    function generateErddapUrl(type = 'html') {
        console.log(activeDs.getCurrentQueryParams().where);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9lcmRkYXAtcXVlcnkvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhIQUE4SCxVQUFVLE1BQU0sS0FBSyxVQUFVLHVDQUF1QyxpQkFBaUIsR0FBRyxZQUFZLG1CQUFtQixHQUFHLG1CQUFtQjtBQUNyUjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNiMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRDs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Qjs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkEsTUFBMkc7QUFDM0csTUFBaUc7QUFDakcsTUFBd0c7QUFDeEcsTUFBMkg7QUFDM0gsTUFBb0g7QUFDcEgsTUFBb0g7QUFDcEgsTUFBZ1Q7QUFDaFQ7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw2T0FBTzs7OztBQUkwUDtBQUNsUixPQUFPLGlFQUFlLDZPQUFPLElBQUksNk9BQU8sVUFBVSw2T0FBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDeEI3RSw2RTs7Ozs7Ozs7Ozs7QUNBQSw0Rjs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7O1dDQUEsbUM7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCxlQUFlO0FBU0c7QUFJRTtBQUMyQjtBQUd5QztBQUNqQztBQUNmO0FBRW5CO0FBRXJCLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxpREFBVTtBQUVsQywyQkFBMkI7QUFDM0IsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLElBQUk7QUFFSixTQUFTLG1CQUFtQixDQUFFLElBQVk7SUFDeEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFDckIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO1FBQ2YsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO1FBQ2YsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUM7UUFDdkIsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDO1FBQ3RCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDO1FBQ3ZCLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQztRQUN0QixDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUM7S0FDbEIsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQy9CLENBQUM7QUFFRCxTQUFTLHVCQUF1QixDQUFFLElBQVk7SUFDNUMsTUFBTSxNQUFNLEdBQUc7UUFDYixXQUFXO1FBQ1gsZ0NBQWdDO1FBQ2hDLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZTtRQUNmLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsU0FBUztRQUNULGlCQUFpQjtLQUNsQjtJQUNELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDckMsQ0FBQztBQUVELCtDQUErQztBQUMvQyxTQUFTLDRCQUE0QixDQUFFLEdBQVk7SUFDakQsT0FBUSxHQUE4QixDQUFDLElBQUksS0FBSyxlQUFlO0FBQ2pFLENBQUM7QUFFRCw2QkFBNkI7QUFDN0IsU0FBUyx3QkFBd0IsQ0FBRSxHQUFXLEVBQUUsWUFBc0I7SUFDcEUsNERBQTREO0lBRTVELDhFQUE4RTtJQUM5RSxNQUFNLE9BQU8sR0FBRyxHQUFHO1NBQ2hCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsc0JBQXNCO1NBQzNDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsdUJBQXVCO1NBQzVDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsOEJBQThCO1NBQ3BELEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDZixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDVixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMzQixrR0FBa0c7UUFDbEcsOERBQThEO1FBQzlELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEUsQ0FBQyxDQUFDO0lBQ0osdUJBQXVCO0lBRXZCLGlEQUFpRDtJQUNqRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLHdCQUF3QixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3hGLFlBQVksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hELENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzFFLFlBQVksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDN0MsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDL0UsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hELENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDaEYsWUFBWSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqRixZQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDMUQsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyx1QkFBdUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2RixZQUFZLENBQUMsSUFBSSxDQUFDLHNCQUFzQix1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzlFLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzNFLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzlELENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3hFLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxDQUFDLENBQUM7SUFFRixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2RSxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0lBRUYsbUVBQW1FO0lBQ25FLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3hFLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2QyxDQUFDLENBQUM7SUFFRixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4RSxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkUsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzFFLG9DQUFvQztRQUNwQyxNQUFNLEtBQUssR0FBRyxPQUFPO1FBQ3JCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUN0Qyx5Q0FBeUM7UUFDekMsWUFBWSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFDakQsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyx3QkFBd0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4RixNQUFNLEtBQUssR0FBRyxPQUFPO1FBQ3JCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUN0QyxZQUFZLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLEtBQUssQ0FBQztJQUMvRCxDQUFDLENBQUM7SUFFRixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN6RSxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekMsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDM0UsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNDLENBQUMsQ0FBQztJQUVGLGdHQUFnRztJQUNoRyw0REFBNEQ7SUFDNUQsS0FBSztBQUNQLENBQUM7QUFFRCwrQ0FBK0M7QUFDL0MsNEZBQTRGO0FBQzVGLG9JQUFvSTtBQUNwSSxJQUFJO0FBRVcsU0FBUyxNQUFNLENBQUUsS0FBK0I7O0lBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7SUFDeEMsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRywrQ0FBUSxFQUEwQjtJQUNsRSw2REFBNkQ7SUFDN0QsTUFBTSxDQUFDLG1CQUFtQixFQUFFLHNCQUFzQixDQUFDLEdBQUcsK0NBQVEsRUFBVTtJQUN4RSxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLCtDQUFRLEVBQVc7SUFDakQsTUFBTSxZQUFZLEdBQUcsNkNBQU0sQ0FBQyxLQUFLLENBQUM7SUFFbEMsNkJBQTZCO0lBQzdCLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1FBQ2pELE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUMsQ0FBQztJQUVGLGdGQUFnRjtJQUNoRixNQUFNLFNBQVMsR0FBRyxvVEFBb1Q7SUFDdFUsTUFBTSxZQUFZLEdBQWEsRUFBRTtJQUVqQyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsTUFBTSxTQUFTLEdBQUcsdUdBQXVCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBVztRQUNuRSx3Q0FBd0M7UUFDeEMsWUFBWSxDQUFDLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUN4RCxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMzRCxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMzRCxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RCxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkQsb0VBQW9FO1FBQ3BFLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUM7SUFDaEYsQ0FBQztJQUNELE1BQU0sU0FBUyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLFNBQVMsU0FBUyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDN0YsNkJBQTZCO0lBRTdCLFNBQVMsVUFBVTtRQUNqQiw4QkFBOEI7UUFDOUIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFFRCxTQUFTLGlCQUFpQixDQUFFLElBQUksR0FBRyxNQUFNO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ25ELG9CQUFvQjtRQUNwQixJQUFJLElBQUksS0FBSyxNQUFNLEVBQUUsQ0FBQztZQUNwQixPQUFPLFNBQVM7UUFDbEIsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxPQUFPLENBQUMsc0JBQXNCLEVBQUUsc0JBQXNCLENBQUM7UUFDM0UsQ0FBQztJQUNILENBQUM7SUFFRCxZQUFZO0lBQ1osU0FBUyxtQkFBbUIsQ0FBRSxFQUFjO1FBQzFDLE1BQU0sc0JBQXNCLEdBQUcsNEJBQTRCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUNoRixxREFBcUQ7UUFDckQsV0FBVyxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUM7SUFFRCxZQUFZO0lBQ1osTUFBTSx1QkFBdUIsR0FBRyxDQUFDLEdBQWdCLEVBQUUsRUFBRTtRQUNuRCxVQUFVLENBQUMsR0FBRyxDQUFDLElBQWUsQ0FBQztRQUMvQixtR0FBbUc7UUFDbkcseUhBQXlIO1FBQ3pILHNFQUFLLENBQ0gsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ3pCLENBQUMsVUFBa0IsRUFBRSxFQUFFO1lBQ3JCLElBQUksVUFBVSxFQUFFLENBQUM7Z0JBQ2YsZ0VBQWdFO2dCQUNoRSxNQUFNLE1BQU0sR0FBRyx1R0FBdUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBVztnQkFDakUsc0JBQXNCLENBQUMsTUFBTSxDQUFDO1lBQ2hDLENBQUM7UUFDSCxDQUFDLENBQ0Y7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUNMLDBFQUFLLFNBQVMsRUFBQyw4QkFBOEIsYUFDM0MsZ0VBQUMsMERBQW1CLElBQ2xCLGFBQWEsRUFBRSxXQUFLLENBQUMsY0FBYywwQ0FBRyxDQUFDLENBQUMsRUFDeEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQ2xCLG1CQUFtQixFQUFFLG1CQUFtQixHQUN4QyxFQUNGLGdFQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQzFDLGtCQUFrQixFQUFFLHVCQUF1QixHQUMzQyxFQVdGLHlFQUFLLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUMvQyxnRUFBQyw0Q0FBTyxJQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLHVCQUF1QixZQUN0RCxnRUFBQywyQ0FBTSxrQkFBWSxRQUFRLEVBQUMsSUFBSSxRQUFDLE9BQU8sRUFBRSxVQUFVLFlBQ2xELGdFQUFDLHlDQUFJLElBQUMsSUFBSSxFQUFDLDZYQUE2WCxHQUN0WSxHQUNLLEdBQ0QsR0FDTixFQUNMLFlBQVksQ0FBQyxPQUFPO2dCQUNuQixDQUFDLENBQUMsMEVBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsYUFDakYsZ0VBQUMsNENBQU8sSUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyx5Q0FBeUMsWUFDdEUsZ0VBQUMsMkNBQU0sSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsMEJBQW9CLEdBQ3hLLEVBQ1YsZ0VBQUMsNENBQU8sSUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyx5REFBeUQsWUFDdEYsZ0VBQUMsMkNBQU0sSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLHlCQUFtQixHQUNsSixJQUNOO2dCQUNKLENBQUMsQ0FBQyx5RUFBSyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsWUFDbEQsK05BQ29DLEdBQ2hDLEVBRVYseUVBQUssS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsWUFDN0UsZ0VBQUMsNENBQU8sSUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyw4Q0FBOEMsWUFDM0UsZ0VBQUMsMkNBQU0sSUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSx5Q0FBbUMsR0FDbk0sR0FDTixFQUVOLHlFQUFLLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFDNUIsMkpBQStFLEdBQzNFLElBQ0YsQ0FDUDtBQUNILENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9lcmRkYXAtcXVlcnkvc3JjL3J1bnRpbWUvd2lkZ2V0LmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZXJkZGFwLXF1ZXJ5L3NyYy9ydW50aW1lL3dpZGdldC5jc3M/NzY5MyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvY29yZS9yZWFjdGl2ZVV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlsc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9lcmRkYXAtcXVlcnkvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhvdmVyOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmhvdmVyIHtcbiAgY29sb3I6IGdyZWVuO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZXJkZGFwLXF1ZXJ5L3NyYy9ydW50aW1lL3dpZGdldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhvdmVyOmhvdmVyIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3dpZGdldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi93aWRnZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY29yZV9jb3JlX3JlYWN0aXZlVXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jb3JlX2dlb21ldHJ5X3N1cHBvcnRfd2ViTWVyY2F0b3JVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIHR5cGUgQWxsV2lkZ2V0UHJvcHMsXG4gIGpzeCxcbiAgdHlwZSBJTVN0YXRlLFxuICBSZWFjdFJlZHV4LFxuICB0eXBlIERhdGFTb3VyY2UsXG4gIERhdGFTb3VyY2VDb21wb25lbnQsXG4gIHR5cGUgRmVhdHVyZUxheWVyRGF0YVNvdXJjZVxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICB0eXBlIEppbXVNYXBWaWV3LFxuICBKaW11TWFwVmlld0NvbXBvbmVudFxufSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgVG9vbHRpcCB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgdHlwZSBFeHRlbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9FeHRlbnQnXG5pbXBvcnQgdHlwZSBNYXBWaWV3IGZyb20gJ0BhcmNnaXMvY29yZS92aWV3cy9NYXBWaWV3J1xuaW1wb3J0IHsgd2ViTWVyY2F0b3JUb0dlb2dyYXBoaWMgfSBmcm9tIFwiQGFyY2dpcy9jb3JlL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlsc1wiXG5pbXBvcnQgeyB3YXRjaCB9IGZyb20gXCJAYXJjZ2lzL2NvcmUvY29yZS9yZWFjdGl2ZVV0aWxzXCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgJy4vd2lkZ2V0LmNzcydcblxuY29uc3QgeyB1c2VTZWxlY3RvciB9ID0gUmVhY3RSZWR1eFxuXG4vLyBpbnRlcmZhY2UgQ29vcmRzT2JqZWN0IHtcbi8vICAgeG1pbjogbnVtYmVyXG4vLyAgIHltaW46IG51bWJlclxuLy8gICB4bWF4OiBudW1iZXJcbi8vICAgeW1heDogbnVtYmVyXG4vLyB9XG5cbmZ1bmN0aW9uIGZpbmRPY2Vhbk5hbWVCeUNvZGUgKGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHZhbHVlcyA9IG5ldyBNYXAoW1xuICAgIFsnMCcsICdBcmN0aWMnXSxcbiAgICBbJzEnLCAnSW5kaWFuJ10sXG4gICAgWycyJywgJ05vcnRoIEF0bGFudGljJ10sXG4gICAgWyczJywgJ05vcnRoIFBhY2lmaWMnXSxcbiAgICBbJzQnLCAnU291dGggQXRsYW50aWMnXSxcbiAgICBbJzUnLCAnU291dGggUGFjaWZpYyddLFxuICAgIFsnNicsICdTb3V0aGVybiddXG4gIF0pXG4gIHJldHVybiB2YWx1ZXMuZ2V0KGNvZGUpIHx8ICcnXG59XG5cbmZ1bmN0aW9uIGZpbmRGaXNoZXJ5UmVnaW9uQnlDb2RlIChjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgJ0NhcmliYmVhbicsXG4gICAgJ0d1bGYgKGZvcm1lcmx5IEd1bGYgb2YgTWV4aWNvKScsXG4gICAgJ01pZC1BdGxhbnRpYycsXG4gICAgJ05ldyBFbmdsYW5kJyxcbiAgICAnTm9ydGggUGFjaWZpYycsXG4gICAgJ1BhY2lmaWMnLFxuICAgICdTb3V0aCBBdGxhbnRpYycsXG4gICAgJ1Vua25vd24nLFxuICAgICdXZXN0ZXJuIFBhY2lmaWMnXG4gIF1cbiAgcmV0dXJuIHZhbHVlc1twYXJzZUludChjb2RlKV0gfHwgJydcbn1cblxuLy8gdXNlci1kZWZpbmVkIHR5cGUgZ3VhcmQgdXNpbmcgdHlwZSBwcmVkaWNhdGVcbmZ1bmN0aW9uIGlzRmVhdHVyZUxheWVyRGF0YVNvdXJjZVR5cGUgKG9iajogdW5rbm93bik6IG9iaiBpcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHtcbiAgcmV0dXJuIChvYmogYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSkudHlwZSA9PT0gJ0ZFQVRVUkVfTEFZRVInXG59XG5cbi8vIG11dGF0ZXMgdGhlIHByb3ZpZGVkIGFycmF5XG5mdW5jdGlvbiBjb252ZXJ0U3FsVG9FcmRkYXBQYXJhbXMgKHNxbDogc3RyaW5nLCBzZWFyY2hQYXJhbXM6IHN0cmluZ1tdKSB7XG4gIC8vIGNvbnNvbGUubG9nKCdpbnNpZGUgY29udmVydFNxbFRvRXJkZGFwUGFyYW1zIHdpdGggJywgc3FsKVxuXG4gIC8vIG1hbmlwdWxhdGUgU1FMIHN0cmluZyBpbnRvIGxpc3Qgb2YgMy1lbGVtZW50IGxpc3RzIChmaWVsZCwgb3BlcmF0b3IsIHZhbHVlKVxuICBjb25zdCBjbGF1c2VzID0gc3FsXG4gICAgLnJlcGxhY2UoL1xcKCs/L2csICcnKSAvLyByZXBsYWNlIGxlZnQgcGFyZW5zXG4gICAgLnJlcGxhY2UoL1xcKSs/L2csICcnKSAvLyByZXBsYWNlIHJpZ2h0IHBhcmVuc1xuICAgIC5yZXBsYWNlKC9MT1dFUi9nLCAnJykgLy8gcmVtb3ZlIHRoZSBMT1dFUigpIGZ1bmN0aW9uXG4gICAgLnNwbGl0KC8gYW5kIC9pKVxuICAgIC5tYXAoZWxlbSA9PiB7XG4gICAgICBjb25zdCB0ID0gZWxlbS5zcGxpdCgvXFxzKy8pXG4gICAgICAvLyBjb25zdHJ1Y3QgMy1lbGVtZW50IGFycmF5IHdpdGggZmllbGQsIG9wZXJhdG9yLCB2YWx1ZS4gVmFsdWUgbWF5IGhhdmUgbXVsdGlwbGUgd29yZHMgd2hpY2ggbmVlZFxuICAgICAgLy8gdG8gYmUgcmVqb2luZWQgYW5kIHJlcGxhY2Ugc2luZ2xlIHF1b3RlcyB3aXRoIGRvdWJsZSBxdW90ZXNcbiAgICAgIHJldHVybiB0LnNsaWNlKDAsIDIpLmNvbmNhdCh0LnNsaWNlKDIpLmpvaW4oJyAnKS5yZXBsYWNlKC8nL2csICdcIicpKVxuICAgIH0pXG4gIC8vIGNvbnNvbGUubG9nKGNsYXVzZXMpXG5cbiAgLy8gYnVpbGQga2V5L3ZhbHVlIHBhaXJzIGZvciBzcGVjaWZpZWQgcGFyYW1ldGVyc1xuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3Zlcm5hY3VsYXJuYW1lY2F0ZWdvcnknKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBWZXJuYWN1bGFyTmFtZUNhdGVnb3J5PSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnaW1hZ2V1cmwnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKCdJbWFnZVVSTD1+XCJodHRwczovLy4qXCInKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZGVwdGhpbm1ldGVycycpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYERlcHRoSW5NZXRlcnMke2VsZW1bMV19JHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdzY2llbnRpZmljbmFtZScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYFNjaWVudGlmaWNOYW1lPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnb2JzZXJ2YXRpb255ZWFyJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgT2JzZXJ2YXRpb25ZZWFyJHtlbGVtWzFdfSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZmlzaGNvdW5jaWxyZWdpb25jb2RlJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgRmlzaENvdW5jaWxSZWdpb249XCIke2ZpbmRGaXNoZXJ5UmVnaW9uQnlDb2RlKGVsZW1bMl0pfVwiYClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ29jZWFuY29kZScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYE9jZWFuPVwiJHtmaW5kT2NlYW5OYW1lQnlDb2RlKGVsZW1bMl0pfVwiYClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3BoeWx1bScpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYFBoeWx1bT0ke2VsZW1bMl19YClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2NsYXNzJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgQ2xhc3M9JHtlbGVtWzJdfWApXG4gIH0pXG5cbiAgLy8gT3JkZXIgaXMgYSByZXNlcnZlZCB3b3JkIGFuZCByZW5hbWVkIGluIHRoZSBob3N0ZWQgZmVhdHVyZSBsYXllclxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ29yZGVyXycpLmZvckVhY2goZWxlbSA9PiB7XG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYE9yZGVyPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZmFtaWx5JykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgRmFtaWx5PSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZ2VudXMnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBHZW51cz0ke2VsZW1bMl19YClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ3N5bm9ueW1zJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICAvLyBlLmcuIFwiJXBhcmFkb3glXCIgLT4gXCIuKnBhcmFkb3guKlwiXG4gICAgY29uc3QgcmVnZXggPSAvW1wiJV0vZ1xuICAgIGNvbnN0IHN0ciA9IGVsZW1bMl0ucmVwbGFjZShyZWdleCwgJycpXG4gICAgLy8gbWFyayBhcyBjYXNlLWluc2Vuc2l0aXZlIHBhdHRlcm4gbWF0Y2hcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgU3lub255bXM9flwiKD9pKS4qJHtzdHJ9LipcImApXG4gIH0pXG5cbiAgY2xhdXNlcy5maWx0ZXIoZWxlbSA9PiBlbGVtWzBdLnRvTG93ZXJDYXNlKCkgPT09ICd2ZXJiYXRpbXNjaWVudGlmaWNuYW1lJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBjb25zdCByZWdleCA9IC9bXCIlXS9nXG4gICAgY29uc3Qgc3RyID0gZWxlbVsyXS5yZXBsYWNlKHJlZ2V4LCAnJylcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgVmVyYmF0aW1TY2llbnRpZmljTmFtZT1+XCIoP2kpLioke3N0cn0uKlwiYClcbiAgfSlcblxuICBjbGF1c2VzLmZpbHRlcihlbGVtID0+IGVsZW1bMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2FwaGlhaWQnKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBBcGhpYUlEPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnZGF0YXNldGlkJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgRGF0YXNldElEPSR7ZWxlbVsyXX1gKVxuICB9KVxuXG4gIC8vIGNsYXVzZXMuZmlsdGVyKGVsZW0gPT4gZWxlbVswXS50b0xvd2VyQ2FzZSgpID09PSAnaWRlbnRpZmljYXRpb25xdWFsaWZpZXInKS5mb3JFYWNoKGVsZW0gPT4ge1xuICAvLyAgIHNlYXJjaFBhcmFtcy5wdXNoKGBJZGVudGlmaWNhdGlvblF1YWxpZmllcj0ke2VsZW1bMl19YClcbiAgLy8gfSlcbn1cblxuLy8gZnVuY3Rpb24gZm9ybWF0RXh0ZW50IChtZXJjRXh0ZW50OiBFeHRlbnQpIHtcbi8vICAgY29uc3QgZ2VvRXh0ZW50ID0gd2ViTWVyY2F0b3JVdGlscy53ZWJNZXJjYXRvclRvR2VvZ3JhcGhpYyhtZXJjRXh0ZW50LCBmYWxzZSkgYXMgRXh0ZW50XG4vLyAgIHJldHVybiBgJHtnZW9FeHRlbnQueG1pbi50b0ZpeGVkKDMpfSwgJHtnZW9FeHRlbnQueW1pbi50b0ZpeGVkKDMpfSwgJHtnZW9FeHRlbnQueG1heC50b0ZpeGVkKDMpfSwgJHtnZW9FeHRlbnQueW1heC50b0ZpeGVkKDMpfWBcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSB7XG4gIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgZXJkZGFwLXF1ZXJ5Li4uJylcbiAgY29uc3QgW2FjdGl2ZURzLCBzZXRBY3RpdmVEc10gPSB1c2VTdGF0ZTxGZWF0dXJlTGF5ZXJEYXRhU291cmNlPigpXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgY29uc3QgW2dlb2dyYXBoaWNNYXBFeHRlbnQsIHNldEdlb2dyYXBoaWNNYXBFeHRlbnRdID0gdXNlU3RhdGU8RXh0ZW50PigpXG4gIGNvbnN0IFttYXBWaWV3LCBzZXRNYXBWaWV3XSA9IHVzZVN0YXRlPE1hcFZpZXc+KClcbiAgY29uc3QgdmFsaWRCYm94UmVmID0gdXNlUmVmKGZhbHNlKVxuXG4gIC8vIGdldCBzdGF0ZSBmb3IgdGhpcyB3aWRnZXQuXG4gIGNvbnN0IHdpZGdldFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLndpZGdldHNTdGF0ZVtwcm9wcy53aWRnZXRJZF1cbiAgfSlcblxuICAvLyBidWlsZCBFUkREQVAgVXJsLiBOb3RlIHRoYXQgdXNlcyBhIG5vbi1zdGFuZGFyZCBwYXR0ZXJuIGZvciBzZWFyY2ggcGFyYW1ldGVyc1xuICBjb25zdCBzdGRGaWVsZHMgPSAnRGF0YWJhc2VWZXJzaW9uLFNoYWxsb3dGbGFnLERhdGFzZXRJRCxDYXRhbG9nTnVtYmVyLFNhbXBsZUlELEltYWdlVVJMLFJlcG9zaXRvcnksU2NpZW50aWZpY05hbWUsVmVybmFjdWxhck5hbWVDYXRlZ29yeSxUYXhvblJhbmssSWRlbnRpZmljYXRpb25RdWFsaWZpZXIsTG9jYWxpdHksbGF0aXR1ZGUsbG9uZ2l0dWRlLERlcHRoSW5NZXRlcnMsRGVwdGhNZXRob2QsT2JzZXJ2YXRpb25EYXRlLFN1cnZleUlELFN0YXRpb24sRXZlbnRJRCxTYW1wbGluZ0VxdWlwbWVudCxMb2NhdGlvbkFjY3VyYWN5LFJlY29yZFR5cGUsRGF0YVByb3ZpZGVyJ1xuICBjb25zdCBzZWFyY2hQYXJhbXM6IHN0cmluZ1tdID0gW11cblxuICBpZiAobWFwVmlldyAmJiBtYXBWaWV3LmV4dGVudCkge1xuICAgIGNvbnN0IG1hcEV4dGVudCA9IHdlYk1lcmNhdG9yVG9HZW9ncmFwaGljKG1hcFZpZXcuZXh0ZW50KSBhcyBFeHRlbnRcbiAgICAvLyBmbGFnIGZvciBhbnRpbWVyaWRpYW4tY3Jvc3NpbmcgZXh0ZW50XG4gICAgdmFsaWRCYm94UmVmLmN1cnJlbnQgPSAobWFwRXh0ZW50LnhtaW4gPCBtYXBFeHRlbnQueG1heClcbiAgICBzZWFyY2hQYXJhbXMucHVzaChgbGF0aXR1ZGU+PSR7bWFwRXh0ZW50LnltaW4udG9GaXhlZCg0KX1gKVxuICAgIHNlYXJjaFBhcmFtcy5wdXNoKGBsYXRpdHVkZTw9JHttYXBFeHRlbnQueW1heC50b0ZpeGVkKDQpfWApXG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYGxvbmdpdHVkZT49JHttYXBFeHRlbnQueG1pbi50b0ZpeGVkKDQpfWApXG4gICAgc2VhcmNoUGFyYW1zLnB1c2goYGxvbmdpdHVkZTw9JHttYXBFeHRlbnQueG1heC50b0ZpeGVkKDQpfWApXG4gIH1cbiAgaWYgKGFjdGl2ZURzICYmIGFjdGl2ZURzLmdldEN1cnJlbnRRdWVyeVBhcmFtcygpLndoZXJlKSB7XG4gICAgLy8gYXVnbWVudHMgcHJvdmlkZWQgb2JqZWN0IHcvIGtleS92YWx1ZSBwYWlycyBmcm9tIFNRTCB3aGVyZSBjbGF1c2VcbiAgICBjb252ZXJ0U3FsVG9FcmRkYXBQYXJhbXMoYWN0aXZlRHMuZ2V0Q3VycmVudFF1ZXJ5UGFyYW1zKCkud2hlcmUsIHNlYXJjaFBhcmFtcylcbiAgfVxuICBjb25zdCBlcmRkYXBVcmwgPSBgJHtwcm9wcy5jb25maWcuZXJkZGFwQmFzZVVybH0uaHRtbD8ke3N0ZEZpZWxkc30mJHtzZWFyY2hQYXJhbXMuam9pbignJicpfWBcbiAgLy8gY29uc29sZS5sb2coeyBlcmRkYXBVcmwgfSlcblxuICBmdW5jdGlvbiBjb3B5VXJsQnRuICgpIHtcbiAgICAvLyBUT0RPIGFkZCBtZXNzYWdlIHRvIHRvYXN0ZXJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChnZW5lcmF0ZUVyZGRhcFVybCgpKS50aGVuKCgpID0+IHsgY29uc29sZS5kZWJ1ZygnY29waWVkIHRvIGNsaXBib2FyZCcpIH0pXG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUVyZGRhcFVybCAodHlwZSA9ICdodG1sJykge1xuICAgIGNvbnNvbGUubG9nKGFjdGl2ZURzLmdldEN1cnJlbnRRdWVyeVBhcmFtcygpLndoZXJlKVxuICAgIC8vIGNvbnNvbGUubG9nKHR5cGUpXG4gICAgaWYgKHR5cGUgPT09ICdodG1sJykge1xuICAgICAgcmV0dXJuIGVyZGRhcFVybFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXJkZGFwVXJsPy5yZXBsYWNlKCdkZWVwX3NlYV9jb3JhbHMuaHRtbCcsICdkZWVwX3NlYV9jb3JhbHMuY3N2cCcpXG4gICAgfVxuICB9XG5cbiAgLy8gcnVucyBvbmNlXG4gIGZ1bmN0aW9uIG9uRGF0YVNvdXJjZUNyZWF0ZWQgKGRzOiBEYXRhU291cmNlKSB7XG4gICAgY29uc3QgZmVhdHVyZUxheWVyRGF0YVNvdXJjZSA9IGlzRmVhdHVyZUxheWVyRGF0YVNvdXJjZVR5cGUoZHMpID8gZHMgOiB1bmRlZmluZWRcbiAgICAvLyBjb25zdCBkc1RpdGxlID0gZmVhdHVyZUxheWVyRGF0YVNvdXJjZS5sYXllci50aXRsZVxuICAgIHNldEFjdGl2ZURzKGZlYXR1cmVMYXllckRhdGFTb3VyY2UpXG4gIH1cblxuICAvLyBydW5zIG9uY2VcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIHNldE1hcFZpZXcoam12LnZpZXcgYXMgTWFwVmlldylcbiAgICAvLyBUT0RPIHdoeSBkb2VzIHRoaXMgbm90IGZpcmUgd2hlbiB3aWRnZXQgaXMgaW4gV2luZG93IGJ1dCB3b3JrcyBub3JtYWxseSB3aGVuIGRpcmVjdGx5IGluIGxheW91dD9cbiAgICAvLyAndXBkYXRpbmcnIHByb3BlcnR5IGZpcmVzIG11bHRpcGxlIHRpbWVzIGR1cmluZyB6b29tL3BhbiBzbyB1c2luZyAnc3RhdGlvbmFyeScgcHJvcGVydHkgcmVkdWNlcyB1bm5lY2Vzc2FyeSByZS1yZW5kZXJzXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBqbXYudmlldy5zdGF0aW9uYXJ5LFxuICAgICAgKHN0YXRpb25hcnk6Ym9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoc3RhdGlvbmFyeSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUkREQVAgZXh0ZW50OiAnLCBmb3JtYXRFeHRlbnQoam12LnZpZXcuZXh0ZW50KSlcbiAgICAgICAgICBjb25zdCBleHRlbnQgPSB3ZWJNZXJjYXRvclRvR2VvZ3JhcGhpYyhqbXYudmlldy5leHRlbnQpIGFzIEV4dGVudFxuICAgICAgICAgIHNldEdlb2dyYXBoaWNNYXBFeHRlbnQoZXh0ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVyZGRhcC1xdWVyeSBqaW11LXdpZGdldCBtLTJcIj5cbiAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XG4gICAgICAgIHVzZURhdGFTb3VyY2U9e3Byb3BzLnVzZURhdGFTb3VyY2VzPy5bMF19XG4gICAgICAgIHdpZGdldElkPXtwcm9wcy5pZH1cbiAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17b25EYXRhU291cmNlQ3JlYXRlZH1cbiAgICAgIC8+XG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3Byb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxuICAgICAgLz5cbiAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAncmlnaHQnIH19PlxuICAgICAgICA8VGV4dEFyZWEgc3R5bGU9e3t3aWR0aDpcIjg1JVwifX0gcmVhZE9ubHk9XCJ0cnVlXCIgdmFsdWU9e2VyZGRhcFVybH0gLz5cbiAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtlcmRkYXBVcmx9IHN0eWxlPXt7IHdpZHRoOiAnODUlJywgaGVpZ2h0OiAnMjUwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19IHJlYWRPbmx5PXt0cnVlfS8+XG4gICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwiQ29weSBVUkwgdG8gY2xpcGJvYXJkXCI+XG4gICAgICAgICAgPEJ1dHRvbiBhcmlhLWxhYmVsPVwiQnV0dG9uXCIgaWNvbiBvbkNsaWNrPXtjb3B5VXJsQnRufSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cbiAgICAgICAgICAgIDxJY29uIGljb249JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBkPVwiTTE2IDEwSDguNzIzbDEuNjAyIDEuNjAyLS43MDcuNzA3TDYuODA4IDkuNWwyLjgxLTIuODEuNzA3LjcwOEw4LjcyMyA5SDE2ek0zIDEzaDR2LTFIM3ptOC0xMnYxaDJ2NmgtMVYzaC0xdjFIM1YzSDJ2MTJoMTB2LTRoMXY1SDFWMmgyVjFoMi4yNzdhMS45ODQgMS45ODQgMCAwIDEgMy40NDYgMHptLTEgMUg4di0uMzE4QS42ODIuNjgyIDAgMCAwIDcuMzE4IDFoLS42MzZBLjY4Mi42ODIgMCAwIDAgNiAxLjY4MlYySDR2MWg2ek03IDZIM3YxaDR6bS00IDRoMlY5SDN6XCIvPjxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMTZ2MTZIMHpcIi8+PC9zdmc+J1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcxNXB4JyB9fT5cbiAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkNvcHkgVVJMIHRvIGNsaXBib2FyZFwiPlxuICAgICAgICAgIDxCdXR0b24gYXJpYS1sYWJlbD1cIkJ1dHRvblwiIGljb24gb25DbGljaz17Y29weVVybEJ0bn0+XG4gICAgICAgICAgICA8SWNvbiBpY29uPSc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PHBhdGggZD1cIk0xNiAxMEg4LjcyM2wxLjYwMiAxLjYwMi0uNzA3LjcwN0w2LjgwOCA5LjVsMi44MS0yLjgxLjcwNy43MDhMOC43MjMgOUgxNnpNMyAxM2g0di0xSDN6bTgtMTJ2MWgydjZoLTFWM2gtMXYxSDNWM0gydjEyaDEwdi00aDF2NUgxVjJoMlYxaDIuMjc3YTEuOTg0IDEuOTg0IDAgMCAxIDMuNDQ2IDB6bS0xIDFIOHYtLjMxOEEuNjgyLjY4MiAwIDAgMCA3LjMxOCAxaC0uNjM2QS42ODIuNjgyIDAgMCAwIDYgMS42ODJWMkg0djFoNnpNNyA2SDN2MWg0em0tNCA0aDJWOUgzelwiLz48cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDE2djE2SDB6XCIvPjwvc3ZnPidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICAge3ZhbGlkQmJveFJlZi5jdXJyZW50XG4gICAgICAgID8gPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwib3BlbiBFUkREQVAgY29uc29sZSB0byBjdXN0b21pemUgb3V0cHV0XCI+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHJvbGU9XCJidXR0b25cIiBocmVmPXtnZW5lcmF0ZUVyZGRhcFVybCgnaHRtbCcpfSB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzIwcHgnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjb2xvcjogJ3doaXRlJyB9fT5DdXN0b21pemU8L0J1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkRvd25sb2FkIHN0YW5kYXJkIENTViBmaWxlIHdpdGggY3VycmVudCBmaWx0ZXJzIGFwcGxpZWRcIj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgcm9sZT1cImJ1dHRvblwiIGhyZWY9e2dlbmVyYXRlRXJkZGFwVXJsKCdjc3ZwJyl9IHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnd2hpdGUnIH19PkRvd25sb2FkPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICAgICA6IDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc4MCUnLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgPHA+V2FybmluZzogbWlzc2luZyBvciBpbnZhbGlkIHNwYXRpYWwgZXh0ZW50LiBQbGVhc2UgZW5zdXJlIGFyZWEgb2YgaW50ZXJlc3QgZG9lcyBub3QgY3Jvc3MgdGhlIGFudGltZXJpZGlhblxuICAgICAgICAgICAgICAoaS5lLiBpbnRlcm5hdGlvbmFsIGRhdGUgbGluZSk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJEb3dubG9hZCB0aGUgZW50aXJlIGRhdGFiYXNlIGluIGEgQ1NWIGZvcm1hdFwiPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiByb2xlPVwiYnV0dG9uXCIgaHJlZj17cHJvcHMuY29uZmlnLmNzdkZpbGVVcmx9IHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IHdpZHRoOiAnMjMwcHgnLCBtYXJnaW5Ub3A6ICcyMHB4JywgdGV4dERlY29yYXRpb246ICdub25lJywgY29sb3I6ICd3aGl0ZScgfX0+RG93bmxvYWQgRW50aXJlIERhdGFiYXNlPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzIwcHgnIH19PlxuICAgICAgICA8c3Bhbj5Ob3RlIHRoYXQgRVJEREFQIG1heSB0YWtlIGEgZmV3IG1pbnV0ZXMgdG8gcmVzcG9uZCB0byB5b3VyIHJlcXVlc3Q8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==