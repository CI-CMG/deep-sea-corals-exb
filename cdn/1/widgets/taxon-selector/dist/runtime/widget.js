/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core","jimu-core/react","jimu-arcgis","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-core/lib/set-public-path.ts":
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.\n * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.\n * */\n// eslint-disable-next-line\n// @ts-ignore\n__webpack_require__.p = window.jimuConfig.baseUrl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHM/OGQyYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./jimu-core/lib/set-public-path.ts\n");

/***/ }),

/***/ "./your-extensions/widgets/taxon-selector/src/runtime/widget.tsx":
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/taxon-selector/src/runtime/widget.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Widget)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n/** @jsx jsx */\n\n\n\n\nfunction Widget(props) {\n    var _a, _b;\n    const [dataSource, setDataSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [phylumList, setPhylumList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [classList, setClassList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [orderList, setOrderList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [familyList, setFamilyList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [genusList, setGenusList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedPhylum, setSelectedPhylum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [selectedClass, setSelectedClass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [selectedOrder, setSelectedOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [selectedFamily, setSelectedFamily] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [selectedGenus, setSelectedGenus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const featureServiceUrl = 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/DSCRTP_NatDB_FeatureLayer/FeatureServer/0/query?';\n    //TODO read from configuration\n    // const serviceUrl = (props.config.serviceUrl) ? props.config.serviceUrl : 'https://services2.arcgis.com/C8EMgrsFcRFL6LrL/ArcGIS/rest/services/DSCRTP_NatDB_FeatureLayer/FeatureServer/0/query?'\n    // handle changes to taxon selections. update map and publish new values\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        // console.log('phylum: ' + selectedPhylum + '; class: ' + selectedClass + '; order: ' + selectedOrder + '; genus: ' + selectedGenus)\n        if (!dataSource || !view) {\n            // console.warn('taxon-selector: DataSource and/or MapView not yet set. QueryParams cannot updated')\n            return;\n        }\n        const selectedTaxon = [];\n        if (selectedPhylum) {\n            selectedTaxon.push(selectedPhylum);\n        }\n        if (selectedClass) {\n            selectedTaxon.push(selectedClass);\n        }\n        if (selectedFamily) {\n            selectedTaxon.push(selectedFamily);\n        }\n        if (selectedOrder) {\n            selectedTaxon.push(selectedOrder);\n        }\n        if (selectedGenus) {\n            selectedTaxon.push(selectedGenus);\n        }\n        const q = getQuery();\n        dataSource.updateQueryParams(q, props.id);\n        sendMessage();\n    }, [selectedPhylum, selectedClass, selectedFamily, selectedOrder, selectedGenus]);\n    // run once when widget is loaded\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n        // list of phylums does not change\n        updatePhylumList();\n    }, []);\n    function getDataFromFeatureService(incomingSearchParams) {\n        return __awaiter(this, void 0, void 0, function* () {\n            //clone incoming\n            const searchParams = new URLSearchParams(incomingSearchParams);\n            // params shared be every request\n            searchParams.set('returnGeometry', 'false');\n            searchParams.set('returnDistinctValues', 'true');\n            searchParams.set('f', 'json');\n            const response = yield fetch(featureServiceUrl, {\n                method: 'POST',\n                body: searchParams\n            });\n            //TODO better error handling\n            if (!response.ok) {\n                console.warn('Error fetching Taxon data from: ' + featureServiceUrl);\n                return;\n            }\n            return yield response.json();\n        });\n    }\n    function updatePhylumList() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const startTime = new Date();\n            const searchParams = new URLSearchParams([\n                ['where', '1=1'],\n                ['outFields', 'Phylum']\n            ]);\n            const data = yield getDataFromFeatureService(searchParams);\n            const phylums = data.features.map(feature => feature.attributes.Phylum).map(name => name || 'NA');\n            setPhylumList(phylums);\n            const endTime = new Date();\n            console.debug(`Phylum data loaded from FeatureService in ${(endTime.getTime() - startTime.getTime()) / 1000} seconds`);\n        });\n    }\n    function updateClassList(phylumName) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const searchParams = new URLSearchParams([\n                ['where', `Phylum='${phylumName}'`],\n                ['outFields', 'Class']\n            ]);\n            const data = yield getDataFromFeatureService(searchParams);\n            const classes = data.features.map(feature => feature.attributes.Class).map(name => name || 'NA');\n            setClassList(classes);\n        });\n    }\n    // 'Order' is reserved word in SQL so renamed to 'Order_ in FeatureService'\n    function updateOrderList(className) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const searchParams = new URLSearchParams([\n                ['where', `Class='${className}'`],\n                ['outFields', 'Order_']\n            ]);\n            const data = yield getDataFromFeatureService(searchParams);\n            const orders = data.features.map(feature => feature.attributes.Order_).map(name => name || 'NA');\n            setOrderList(orders);\n        });\n    }\n    function updateFamilyList(orderName) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const searchParams = new URLSearchParams([\n                ['where', `Order_='${orderName}'`],\n                ['outFields', 'Family']\n            ]);\n            const data = yield getDataFromFeatureService(searchParams);\n            const families = data.features.map(feature => feature.attributes.Family).map(name => name || 'NA');\n            setFamilyList(families);\n        });\n    }\n    function updateGenusList(familyName) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const searchParams = new URLSearchParams([\n                ['where', `Family='${familyName}'`],\n                ['outFields', 'Genus']\n            ]);\n            const data = yield getDataFromFeatureService(searchParams);\n            const genera = data.features.map(feature => feature.attributes.Genus).map(name => name || 'NA');\n            console.log('genus list: ', genera);\n            setGenusList(genera);\n        });\n    }\n    /**\n     * construct SQL clause based on taxon selections\n     * Note that other filter criteria are managed independently by the Filter widget\n     */\n    function getQuery() {\n        const clauses = [];\n        // Feature Layer used different column names than map service\n        if (selectedPhylum) {\n            clauses.push(`Phylum = '${selectedPhylum}'`);\n        }\n        if (selectedClass) {\n            clauses.push(`Class = '${selectedClass}'`);\n        }\n        if (selectedFamily) {\n            clauses.push(`Family = '${selectedFamily}'`);\n        }\n        // Order is a SQL reserved word\n        if (selectedOrder) {\n            clauses.push(`Order_ = '${selectedOrder}'`);\n        }\n        if (selectedGenus) {\n            clauses.push(`Genus = '${selectedGenus}'`);\n        }\n        if (clauses === null || clauses === void 0 ? void 0 : clauses.length) {\n            return ({ where: clauses.join(' AND ') });\n        }\n        else {\n            return null;\n        }\n    }\n    function resetButtonHandler(evt) {\n        if (selectedPhylum) {\n            setSelectedPhylum(null);\n        }\n        if (selectedClass) {\n            setSelectedClass(null);\n        }\n        if (selectedOrder) {\n            setSelectedOrder(null);\n        }\n        if (selectedFamily) {\n            setSelectedFamily(null);\n        }\n        if (selectedGenus) {\n            setSelectedGenus(null);\n        }\n    }\n    // changing phylum resets all other Select elements in hierarchy\n    function phylumSelectHandler(evt) {\n        setSelectedPhylum(evt.target.value);\n        updateClassList(evt.target.value);\n        // reset dependent values\n        setSelectedClass(undefined);\n        setSelectedOrder(undefined);\n        setSelectedFamily(undefined);\n        setSelectedGenus(undefined);\n        setOrderList([]);\n        setFamilyList([]);\n        setGenusList([]);\n    }\n    function classSelectHandler(evt) {\n        setSelectedClass(evt.target.value);\n        updateOrderList(evt.target.value);\n        // reset dependent values\n        setSelectedOrder(undefined);\n        setSelectedFamily(undefined);\n        setSelectedGenus(undefined);\n        setFamilyList([]);\n        setGenusList([]);\n    }\n    function orderSelectHandler(evt) {\n        setSelectedOrder(evt.target.value);\n        updateFamilyList(evt.target.value);\n        // reset dependent values\n        setSelectedFamily(undefined);\n        setSelectedGenus(undefined);\n        setGenusList([]);\n    }\n    function familySelectHandler(evt) {\n        setSelectedFamily(evt.target.value);\n        updateGenusList(evt.target.value);\n        // reset dependent values\n        setSelectedGenus(undefined);\n    }\n    function genusSelectHandler(evt) {\n        setSelectedGenus(evt.target.value);\n    }\n    // runs once\n    function onDataSourceCreated(ds) {\n        if (ds) {\n            const dataSource = ds;\n            setDataSource(dataSource);\n        }\n        else {\n            console.error('unable to create DataSource');\n        }\n    }\n    // runs once\n    const activeViewChangeHandler = (jmv) => {\n        if (!jmv) {\n            console.warn('no MapView');\n            return;\n        }\n        setView(jmv.view);\n    };\n    function sendMessage() {\n        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceFilterChangeMessage(props.id, dataSource.id));\n    }\n    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"jimu-widget\", style: { width: '100%', height: '100%', overflow: 'hidden' } },\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", null,\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0], widgetId: props.id, onDataSourceCreated: onDataSourceCreated }),\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b[0], onActiveViewChange: activeViewChangeHandler })),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedPhylum, onChange: phylumSelectHandler, placeholder: \"Select a Phylum...\", style: { padding: '10px', width: 200 }, ariaLabel: \"Select a Phylum\", menuRole: \"menu\", menuItemCheckMode: \"singleCheck\", disabled: !phylumList.length }, phylumList === null || phylumList === void 0 ? void 0 : phylumList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedClass, onChange: classSelectHandler, placeholder: \"Select a Class...\", style: { padding: '10px', width: 200 }, menuRole: \"menu\", disabled: !selectedPhylum }, classList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedOrder, onChange: orderSelectHandler, placeholder: \"Select an Order...\", style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, menuRole: \"menu\", disabled: !selectedClass }, orderList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedFamily, onChange: familySelectHandler, placeholder: \"Select a Family...\", style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, menuRole: \"menu\", disabled: !selectedOrder }, familyList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: selectedGenus, onChange: genusSelectHandler, placeholder: \"Select a Genus...\", style: { paddingLeft: '10px', paddingBottom: '10px', width: 200 }, menuRole: \"menu\", disabled: !selectedFamily }, genusList.map(item => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: item }, item))),\n        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { style: { margin: '10px' }, onClick: resetButtonHandler }, \"Reset\")));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy90YXhvbi1zZWxlY3Rvci9zcmMvcnVudGltZS93aWRnZXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUtBO0FBS0E7QUFhQTtBQVdBO0FBV0E7QUFXQTtBQVdBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvdGF4b24tc2VsZWN0b3Ivc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeD8wMjkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgQWxsV2lkZ2V0UHJvcHMsIGpzeCwgRGF0YVNvdXJjZUNvbXBvbmVudCwgU3FsUXVlcnlQYXJhbXMsIFF1ZXJpYWJsZURhdGFTb3VyY2UsIERhdGFTb3VyY2UsIE1lc3NhZ2VNYW5hZ2VyLCBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZSB9IGZyb20gXCJqaW11LWNvcmVcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHsgU2VsZWN0LCBPcHRpb24sIEJ1dHRvbiwgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVVSU1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3QgW2RhdGFTb3VyY2UsIHNldERhdGFTb3VyY2VdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3BoeWx1bUxpc3QsIHNldFBoeWx1bUxpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbY2xhc3NMaXN0LCBzZXRDbGFzc0xpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbb3JkZXJMaXN0LCBzZXRPcmRlckxpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbZmFtaWx5TGlzdCwgc2V0RmFtaWx5TGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtnZW51c0xpc3QsIHNldEdlbnVzTGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtzZWxlY3RlZFBoeWx1bSwgc2V0U2VsZWN0ZWRQaHlsdW1dID0gdXNlU3RhdGU8c3RyaW5nfHVuZGVmaW5lZD4oKVxuICBjb25zdCBbc2VsZWN0ZWRDbGFzcywgc2V0U2VsZWN0ZWRDbGFzc10gPSB1c2VTdGF0ZTxzdHJpbmd8dW5kZWZpbmVkPigpXG4gIGNvbnN0IFtzZWxlY3RlZE9yZGVyLCBzZXRTZWxlY3RlZE9yZGVyXSA9IHVzZVN0YXRlPHN0cmluZ3x1bmRlZmluZWQ+KClcbiAgY29uc3QgW3NlbGVjdGVkRmFtaWx5LCBzZXRTZWxlY3RlZEZhbWlseV0gPSB1c2VTdGF0ZTxzdHJpbmd8dW5kZWZpbmVkPigpXG4gIGNvbnN0IFtzZWxlY3RlZEdlbnVzLCBzZXRTZWxlY3RlZEdlbnVzXSA9IHVzZVN0YXRlPHN0cmluZ3x1bmRlZmluZWQ+KClcbiAgY29uc3QgZmVhdHVyZVNlcnZpY2VVcmwgPSAnaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS9DOEVNZ3JzRmNSRkw2THJML0FyY0dJUy9yZXN0L3NlcnZpY2VzL0RTQ1JUUF9OYXREQl9GZWF0dXJlTGF5ZXIvRmVhdHVyZVNlcnZlci8wL3F1ZXJ5PydcbiAgLy9UT0RPIHJlYWQgZnJvbSBjb25maWd1cmF0aW9uXG4gIC8vIGNvbnN0IHNlcnZpY2VVcmwgPSAocHJvcHMuY29uZmlnLnNlcnZpY2VVcmwpID8gcHJvcHMuY29uZmlnLnNlcnZpY2VVcmwgOiAnaHR0cHM6Ly9zZXJ2aWNlczIuYXJjZ2lzLmNvbS9DOEVNZ3JzRmNSRkw2THJML0FyY0dJUy9yZXN0L3NlcnZpY2VzL0RTQ1JUUF9OYXREQl9GZWF0dXJlTGF5ZXIvRmVhdHVyZVNlcnZlci8wL3F1ZXJ5PydcblxuICAvLyBoYW5kbGUgY2hhbmdlcyB0byB0YXhvbiBzZWxlY3Rpb25zLiB1cGRhdGUgbWFwIGFuZCBwdWJsaXNoIG5ldyB2YWx1ZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygncGh5bHVtOiAnICsgc2VsZWN0ZWRQaHlsdW0gKyAnOyBjbGFzczogJyArIHNlbGVjdGVkQ2xhc3MgKyAnOyBvcmRlcjogJyArIHNlbGVjdGVkT3JkZXIgKyAnOyBnZW51czogJyArIHNlbGVjdGVkR2VudXMpXG4gICAgaWYgKCFkYXRhU291cmNlIHx8ICF2aWV3KSB7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ3RheG9uLXNlbGVjdG9yOiBEYXRhU291cmNlIGFuZC9vciBNYXBWaWV3IG5vdCB5ZXQgc2V0LiBRdWVyeVBhcmFtcyBjYW5ub3QgdXBkYXRlZCcpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZFRheG9uID0gW11cbiAgICBpZiAoc2VsZWN0ZWRQaHlsdW0pIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkUGh5bHVtKSB9XG4gICAgaWYgKHNlbGVjdGVkQ2xhc3MpIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkQ2xhc3MpIH1cbiAgICBpZiAoc2VsZWN0ZWRGYW1pbHkpIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkRmFtaWx5KSB9XG4gICAgaWYgKHNlbGVjdGVkT3JkZXIpIHsgc2VsZWN0ZWRUYXhvbi5wdXNoKHNlbGVjdGVkT3JkZXIpIH1cbiAgICBpZiAoc2VsZWN0ZWRHZW51cykgeyBzZWxlY3RlZFRheG9uLnB1c2goc2VsZWN0ZWRHZW51cykgfVxuXG4gICAgY29uc3QgcSA9IGdldFF1ZXJ5KCk7XG4gICAgKGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZSkudXBkYXRlUXVlcnlQYXJhbXMocSwgcHJvcHMuaWQpXG4gICAgc2VuZE1lc3NhZ2UoKVxuICB9LCBbc2VsZWN0ZWRQaHlsdW0sIHNlbGVjdGVkQ2xhc3MsIHNlbGVjdGVkRmFtaWx5LCBzZWxlY3RlZE9yZGVyLCBzZWxlY3RlZEdlbnVzXSlcblxuICAvLyBydW4gb25jZSB3aGVuIHdpZGdldCBpcyBsb2FkZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBsaXN0IG9mIHBoeWx1bXMgZG9lcyBub3QgY2hhbmdlXG4gICAgdXBkYXRlUGh5bHVtTGlzdCgpXG4gIH0sIFtdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldERhdGFGcm9tRmVhdHVyZVNlcnZpY2UgKGluY29taW5nU2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAvL2Nsb25lIGluY29taW5nXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhpbmNvbWluZ1NlYXJjaFBhcmFtcylcbiAgICAvLyBwYXJhbXMgc2hhcmVkIGJlIGV2ZXJ5IHJlcXVlc3RcbiAgICBzZWFyY2hQYXJhbXMuc2V0KCdyZXR1cm5HZW9tZXRyeScsICdmYWxzZScpXG4gICAgc2VhcmNoUGFyYW1zLnNldCgncmV0dXJuRGlzdGluY3RWYWx1ZXMnLCAndHJ1ZScpXG4gICAgc2VhcmNoUGFyYW1zLnNldCgnZicsICdqc29uJylcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZlYXR1cmVTZXJ2aWNlVXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IHNlYXJjaFBhcmFtc1xuICAgIH0pXG4gICAgLy9UT0RPIGJldHRlciBlcnJvciBoYW5kbGluZ1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnNvbGUud2FybignRXJyb3IgZmV0Y2hpbmcgVGF4b24gZGF0YSBmcm9tOiAnICsgZmVhdHVyZVNlcnZpY2VVcmwpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGh5bHVtTGlzdCAoKSB7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICAgICAgWyd3aGVyZScsICcxPTEnXSxcbiAgICAgIFsnb3V0RmllbGRzJywgJ1BoeWx1bSddXG4gICAgXSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YUZyb21GZWF0dXJlU2VydmljZShzZWFyY2hQYXJhbXMpXG4gICAgY29uc3QgcGh5bHVtcyA9IGRhdGEuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzLlBoeWx1bSkubWFwKG5hbWUgPT4gbmFtZSB8fCAnTkEnKVxuICAgIHNldFBoeWx1bUxpc3QocGh5bHVtcylcbiAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoKVxuICAgIGNvbnNvbGUuZGVidWcoYFBoeWx1bSBkYXRhIGxvYWRlZCBmcm9tIEZlYXR1cmVTZXJ2aWNlIGluICR7KGVuZFRpbWUuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwfSBzZWNvbmRzYClcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNsYXNzTGlzdCAocGh5bHVtTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gICAgICBbJ3doZXJlJywgYFBoeWx1bT0nJHtwaHlsdW1OYW1lfSdgXSxcbiAgICAgIFsnb3V0RmllbGRzJywgJ0NsYXNzJ11cbiAgICBdKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhRnJvbUZlYXR1cmVTZXJ2aWNlKHNlYXJjaFBhcmFtcylcbiAgICBjb25zdCBjbGFzc2VzID0gZGF0YS5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXMuQ2xhc3MpLm1hcChuYW1lID0+IG5hbWUgfHwgJ05BJylcbiAgICBzZXRDbGFzc0xpc3QoY2xhc3NlcylcbiAgfVxuXG4gIC8vICdPcmRlcicgaXMgcmVzZXJ2ZWQgd29yZCBpbiBTUUwgc28gcmVuYW1lZCB0byAnT3JkZXJfIGluIEZlYXR1cmVTZXJ2aWNlJ1xuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVPcmRlckxpc3QgKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gICAgICBbJ3doZXJlJywgYENsYXNzPScke2NsYXNzTmFtZX0nYF0sXG4gICAgICBbJ291dEZpZWxkcycsICdPcmRlcl8nXVxuICAgIF0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGFGcm9tRmVhdHVyZVNlcnZpY2Uoc2VhcmNoUGFyYW1zKVxuICAgIGNvbnN0IG9yZGVycyA9IGRhdGEuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzLk9yZGVyXykubWFwKG5hbWUgPT4gbmFtZSB8fCAnTkEnKVxuICAgIHNldE9yZGVyTGlzdChvcmRlcnMpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVGYW1pbHlMaXN0IChvcmRlck5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1xuICAgICAgWyd3aGVyZScsIGBPcmRlcl89JyR7b3JkZXJOYW1lfSdgXSxcbiAgICAgIFsnb3V0RmllbGRzJywgJ0ZhbWlseSddXG4gICAgXSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YUZyb21GZWF0dXJlU2VydmljZShzZWFyY2hQYXJhbXMpXG4gICAgY29uc3QgZmFtaWxpZXMgPSBkYXRhLmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlcy5GYW1pbHkpLm1hcChuYW1lID0+IG5hbWUgfHwgJ05BJylcbiAgICBzZXRGYW1pbHlMaXN0KGZhbWlsaWVzKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2VudXNMaXN0IChmYW1pbHlOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtcbiAgICAgIFsnd2hlcmUnLCBgRmFtaWx5PScke2ZhbWlseU5hbWV9J2BdLFxuICAgICAgWydvdXRGaWVsZHMnLCAnR2VudXMnXVxuICAgIF0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGFGcm9tRmVhdHVyZVNlcnZpY2Uoc2VhcmNoUGFyYW1zKVxuICAgIGNvbnN0IGdlbmVyYSA9IGRhdGEuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzLkdlbnVzKS5tYXAobmFtZSA9PiBuYW1lIHx8ICdOQScpXG4gICAgY29uc29sZS5sb2coJ2dlbnVzIGxpc3Q6ICcsIGdlbmVyYSlcbiAgICBzZXRHZW51c0xpc3QoZ2VuZXJhKVxuICB9XG5cbiAgLyoqXG4gICAqIGNvbnN0cnVjdCBTUUwgY2xhdXNlIGJhc2VkIG9uIHRheG9uIHNlbGVjdGlvbnNcbiAgICogTm90ZSB0aGF0IG90aGVyIGZpbHRlciBjcml0ZXJpYSBhcmUgbWFuYWdlZCBpbmRlcGVuZGVudGx5IGJ5IHRoZSBGaWx0ZXIgd2lkZ2V0XG4gICAqL1xuICBmdW5jdGlvbiBnZXRRdWVyeSAoKTogU3FsUXVlcnlQYXJhbXMge1xuICAgIGNvbnN0IGNsYXVzZXMgPSBbXVxuXG4gICAgLy8gRmVhdHVyZSBMYXllciB1c2VkIGRpZmZlcmVudCBjb2x1bW4gbmFtZXMgdGhhbiBtYXAgc2VydmljZVxuICAgIGlmIChzZWxlY3RlZFBoeWx1bSkgeyBjbGF1c2VzLnB1c2goYFBoeWx1bSA9ICcke3NlbGVjdGVkUGh5bHVtfSdgKSB9XG4gICAgaWYgKHNlbGVjdGVkQ2xhc3MpIHsgY2xhdXNlcy5wdXNoKGBDbGFzcyA9ICcke3NlbGVjdGVkQ2xhc3N9J2ApIH1cbiAgICBpZiAoc2VsZWN0ZWRGYW1pbHkpIHsgY2xhdXNlcy5wdXNoKGBGYW1pbHkgPSAnJHtzZWxlY3RlZEZhbWlseX0nYCkgfVxuICAgIC8vIE9yZGVyIGlzIGEgU1FMIHJlc2VydmVkIHdvcmRcbiAgICBpZiAoc2VsZWN0ZWRPcmRlcikgeyBjbGF1c2VzLnB1c2goYE9yZGVyXyA9ICcke3NlbGVjdGVkT3JkZXJ9J2ApIH1cbiAgICBpZiAoc2VsZWN0ZWRHZW51cykgeyBjbGF1c2VzLnB1c2goYEdlbnVzID0gJyR7c2VsZWN0ZWRHZW51c30nYCkgfVxuXG4gICAgaWYgKGNsYXVzZXM/Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuICh7IHdoZXJlOiBjbGF1c2VzLmpvaW4oJyBBTkQgJykgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldEJ1dHRvbkhhbmRsZXIgKGV2dDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcbiAgICBpZiAoc2VsZWN0ZWRQaHlsdW0pIHsgc2V0U2VsZWN0ZWRQaHlsdW0obnVsbCkgfVxuICAgIGlmIChzZWxlY3RlZENsYXNzKSB7IHNldFNlbGVjdGVkQ2xhc3MobnVsbCkgfVxuICAgIGlmIChzZWxlY3RlZE9yZGVyKSB7IHNldFNlbGVjdGVkT3JkZXIobnVsbCkgfVxuICAgIGlmIChzZWxlY3RlZEZhbWlseSkgeyBzZXRTZWxlY3RlZEZhbWlseShudWxsKSB9XG4gICAgaWYgKHNlbGVjdGVkR2VudXMpIHsgc2V0U2VsZWN0ZWRHZW51cyhudWxsKSB9XG4gIH1cblxuICAvLyBjaGFuZ2luZyBwaHlsdW0gcmVzZXRzIGFsbCBvdGhlciBTZWxlY3QgZWxlbWVudHMgaW4gaGllcmFyY2h5XG4gIGZ1bmN0aW9uIHBoeWx1bVNlbGVjdEhhbmRsZXIgKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XG4gICAgc2V0U2VsZWN0ZWRQaHlsdW0oZXZ0LnRhcmdldC52YWx1ZSlcbiAgICB1cGRhdGVDbGFzc0xpc3QoZXZ0LnRhcmdldC52YWx1ZSlcblxuICAgIC8vIHJlc2V0IGRlcGVuZGVudCB2YWx1ZXNcbiAgICBzZXRTZWxlY3RlZENsYXNzKHVuZGVmaW5lZClcbiAgICBzZXRTZWxlY3RlZE9yZGVyKHVuZGVmaW5lZClcbiAgICBzZXRTZWxlY3RlZEZhbWlseSh1bmRlZmluZWQpXG4gICAgc2V0U2VsZWN0ZWRHZW51cyh1bmRlZmluZWQpXG4gICAgc2V0T3JkZXJMaXN0KFtdKVxuICAgIHNldEZhbWlseUxpc3QoW10pXG4gICAgc2V0R2VudXNMaXN0KFtdKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xhc3NTZWxlY3RIYW5kbGVyIChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pikge1xuICAgIHNldFNlbGVjdGVkQ2xhc3MoZXZ0LnRhcmdldC52YWx1ZSlcbiAgICB1cGRhdGVPcmRlckxpc3QoZXZ0LnRhcmdldC52YWx1ZSlcblxuICAgIC8vIHJlc2V0IGRlcGVuZGVudCB2YWx1ZXNcbiAgICBzZXRTZWxlY3RlZE9yZGVyKHVuZGVmaW5lZClcbiAgICBzZXRTZWxlY3RlZEZhbWlseSh1bmRlZmluZWQpXG4gICAgc2V0U2VsZWN0ZWRHZW51cyh1bmRlZmluZWQpXG4gICAgc2V0RmFtaWx5TGlzdChbXSlcbiAgICBzZXRHZW51c0xpc3QoW10pXG4gIH1cblxuICBmdW5jdGlvbiBvcmRlclNlbGVjdEhhbmRsZXIgKGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XG4gICAgc2V0U2VsZWN0ZWRPcmRlcihldnQudGFyZ2V0LnZhbHVlKVxuICAgIHVwZGF0ZUZhbWlseUxpc3QoZXZ0LnRhcmdldC52YWx1ZSlcblxuICAgIC8vIHJlc2V0IGRlcGVuZGVudCB2YWx1ZXNcbiAgICBzZXRTZWxlY3RlZEZhbWlseSh1bmRlZmluZWQpXG4gICAgc2V0U2VsZWN0ZWRHZW51cyh1bmRlZmluZWQpXG4gICAgc2V0R2VudXNMaXN0KFtdKVxuICB9XG5cbiAgZnVuY3Rpb24gZmFtaWx5U2VsZWN0SGFuZGxlciAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcbiAgICBzZXRTZWxlY3RlZEZhbWlseShldnQudGFyZ2V0LnZhbHVlKVxuICAgIHVwZGF0ZUdlbnVzTGlzdChldnQudGFyZ2V0LnZhbHVlKVxuXG4gICAgLy8gcmVzZXQgZGVwZW5kZW50IHZhbHVlc1xuICAgIHNldFNlbGVjdGVkR2VudXModW5kZWZpbmVkKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VudXNTZWxlY3RIYW5kbGVyIChldnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pikge1xuICAgIHNldFNlbGVjdGVkR2VudXMoZXZ0LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIC8vIHJ1bnMgb25jZVxuICBmdW5jdGlvbiBvbkRhdGFTb3VyY2VDcmVhdGVkIChkczogRGF0YVNvdXJjZSkge1xuICAgIGlmIChkcykge1xuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRzIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcbiAgICAgIHNldERhdGFTb3VyY2UoZGF0YVNvdXJjZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIGNyZWF0ZSBEYXRhU291cmNlJylcbiAgICB9XG4gIH1cblxuICAvLyBydW5zIG9uY2VcbiAgY29uc3QgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIGlmICgham12KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ25vIE1hcFZpZXcnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFZpZXcoam12LnZpZXcpXG4gIH1cblxuICBmdW5jdGlvbiBzZW5kTWVzc2FnZSAoKSB7XG4gICAgTWVzc2FnZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdWJsaXNoTWVzc2FnZShuZXcgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UocHJvcHMuaWQsIGRhdGFTb3VyY2UuaWQpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0XCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlcz8uWzBdfVxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxuICAgICAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17b25EYXRhU291cmNlQ3JlYXRlZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXthY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn0+PC9KaW11TWFwVmlld0NvbXBvbmVudD5cblxuICAgICAgPC9kaXY+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZFBoeWx1bX1cbiAgICAgICAgb25DaGFuZ2U9e3BoeWx1bVNlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgUGh5bHVtLi4uXCJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogMjAwIH19XG4gICAgICAgIGFyaWFMYWJlbD1cIlNlbGVjdCBhIFBoeWx1bVwiXG4gICAgICAgIG1lbnVSb2xlPVwibWVudVwiXG4gICAgICAgIG1lbnVJdGVtQ2hlY2tNb2RlPVwic2luZ2xlQ2hlY2tcIlxuICAgICAgICBkaXNhYmxlZD17IXBoeWx1bUxpc3QubGVuZ3RofVxuICAgICAgPlxuICAgICAgICB7cGh5bHVtTGlzdD8ubWFwKGl0ZW0gPT4gPE9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9PcHRpb24+KX1cbiAgICAgIDwvU2VsZWN0PlxuXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZENsYXNzfVxuICAgICAgICBvbkNoYW5nZT17Y2xhc3NTZWxlY3RIYW5kbGVyfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIENsYXNzLi4uXCJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnLCB3aWR0aDogMjAwIH19XG4gICAgICAgIG1lbnVSb2xlPVwibWVudVwiXG4gICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRQaHlsdW19XG4gICAgICA+XG4gICAgICAgIHtjbGFzc0xpc3QubWFwKGl0ZW0gPT4gPE9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9PcHRpb24+KX1cbiAgICAgIDwvU2VsZWN0PlxuXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZE9yZGVyfVxuICAgICAgICBvbkNoYW5nZT17b3JkZXJTZWxlY3RIYW5kbGVyfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhbiBPcmRlci4uLlwiXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMTBweCcsIHBhZGRpbmdCb3R0b206ICcxMHB4Jywgd2lkdGg6IDIwMCB9fVxuICAgICAgICBtZW51Um9sZT1cIm1lbnVcIlxuICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkQ2xhc3N9XG4gICAgICA+XG4gICAgICAgIHtvcmRlckxpc3QubWFwKGl0ZW0gPT4gPE9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9PcHRpb24+KX1cbiAgICAgIDwvU2VsZWN0PlxuXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZEZhbWlseX1cbiAgICAgICAgb25DaGFuZ2U9e2ZhbWlseVNlbGVjdEhhbmRsZXJ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgRmFtaWx5Li4uXCJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxMHB4JywgcGFkZGluZ0JvdHRvbTogJzEwcHgnLCB3aWR0aDogMjAwIH19XG4gICAgICAgIG1lbnVSb2xlPVwibWVudVwiXG4gICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRPcmRlcn1cbiAgICAgID5cbiAgICAgICAge2ZhbWlseUxpc3QubWFwKGl0ZW0gPT4gPE9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9PcHRpb24+KX1cbiAgICAgIDwvU2VsZWN0PlxuXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZEdlbnVzfVxuICAgICAgICBvbkNoYW5nZT17Z2VudXNTZWxlY3RIYW5kbGVyfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIEdlbnVzLi4uXCJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxMHB4JywgcGFkZGluZ0JvdHRvbTogJzEwcHgnLCB3aWR0aDogMjAwIH19XG4gICAgICAgIG1lbnVSb2xlPVwibWVudVwiXG4gICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRGYW1pbHl9XG4gICAgICA+XG4gICAgICAgIHtnZW51c0xpc3QubWFwKGl0ZW0gPT4gPE9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9PcHRpb24+KX1cbiAgICAgIDwvU2VsZWN0PlxuXG4gICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogJzEwcHgnIH19IG9uQ2xpY2s9e3Jlc2V0QnV0dG9uSGFuZGxlcn0+UmVzZXQ8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./your-extensions/widgets/taxon-selector/src/runtime/widget.tsx\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./jimu-core/lib/set-public-path.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/taxon-selector/src/runtime/widget.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});