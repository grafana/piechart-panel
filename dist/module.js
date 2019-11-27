define(["angular","app/core/time_series","app/core/utils/kbn","app/plugins/sdk","jquery","lodash"], function(__WEBPACK_EXTERNAL_MODULE_angular__, __WEBPACK_EXTERNAL_MODULE_grafana_app_core_time_series__, __WEBPACK_EXTERNAL_MODULE_grafana_app_core_utils_kbn__, __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_lodash__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./legend.ts":
/*!*******************!*\
  !*** ./legend.ts ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_jquery_flot_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/jquery.flot.time */ "./lib/jquery.flot.time.js");
/* harmony import */ var _lib_jquery_flot_time__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_flot_time__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_perfect_scrollbar_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/perfect-scrollbar.min */ "./lib/perfect-scrollbar.min.js");
/* harmony import */ var _lib_perfect_scrollbar_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_perfect_scrollbar_min__WEBPACK_IMPORTED_MODULE_4__);
 // @ts-ignore

 //import './lib/jquery.flot.pie';
//import 'jquery.flot';


 // @ts-ignore


angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('grafana.directives').directive('piechartLegend', ["popoverSrv", "$timeout", function (popoverSrv, $timeout) {
  return {
    link: function link(scope, elem) {
      var $container = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<div class="piechart-legend__container"></div>');
      var firstRender = true;
      var ctrl = scope.ctrl;
      var panel = ctrl.panel;
      var data;
      var seriesList;
      var dataList;
      var i;
      var legendScrollbar;
      scope.$on('$destroy', function () {
        if (legendScrollbar) {
          legendScrollbar.destroy();
        }
      });
      ctrl.events.on('render', function () {
        data = ctrl.series;

        if (data) {
          for (var i_1 in data) {
            data[i_1].color = ctrl.data[i_1].color;
          }

          render();
        }
      });

      function getSeriesIndexForElement(el) {
        return el.parents('[data-series-index]').data('series-index');
      }

      function toggleSeries(e) {
        var el = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.currentTarget); // Consider Combine entry as special case (not clickable)

        if (el && el.text() !== panel.combine.label) {
          var index = getSeriesIndexForElement(el);
          var seriesInfo = dataList[index];
          var scrollPosition = jquery__WEBPACK_IMPORTED_MODULE_1___default()($container.children('tbody')).scrollTop();
          ctrl.toggleSeries(seriesInfo);

          if (typeof scrollPosition !== 'undefined') {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()($container.children('tbody')).scrollTop(scrollPosition);
          }
        }
      }

      function sortLegend(e) {
        var el = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.currentTarget);
        var stat = el.data('stat');

        if (stat !== panel.legend.sort) {
          panel.legend.sortDesc = null;
        } // if already sort ascending, disable sorting


        if (panel.legend.sortDesc === false) {
          panel.legend.sort = null;
          panel.legend.sortDesc = null;
          ctrl.render();
          return;
        }

        panel.legend.sortDesc = !panel.legend.sortDesc;
        panel.legend.sort = stat;
        ctrl.render();
      }

      function getLegendHeaderHtml(statName) {
        var name = statName;

        if (panel.legend.header) {
          name = panel.legend.header;
        }

        var html = '<th class="pointer" data-stat="' + lodash__WEBPACK_IMPORTED_MODULE_3___default.a.escape(statName) + '">' + name;

        if (panel.legend.sort === statName) {
          var cssClass = panel.legend.sortDesc ? 'fa fa-caret-down' : 'fa fa-caret-up';
          html += ' <span class="' + cssClass + '"></span>';
        }

        return html + '</th>';
      }

      function getLegendPercentageHtml(statName) {
        var name = 'percentage';
        var html = '<th class="pointer" data-stat="' + statName + '">' + name;

        if (panel.legend.sort === statName) {
          var cssClass = panel.legend.sortDesc ? 'fa fa-caret-down' : 'fa fa-caret-up';
          html += ' <span class="' + cssClass + '"></span>';
        }

        return html + '</th>';
      }

      function openColorSelector(e) {
        // if we clicked inside poup container ignore click
        if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).parents('.popover').length) {
          return;
        }

        var el = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.currentTarget).find('.fa-minus');
        var index = getSeriesIndexForElement(el);
        var series = seriesList[index];
        $timeout(function () {
          popoverSrv.show({
            element: el[0],
            position: 'right center',
            template: '<series-color-picker-popover series="series" onToggleAxis="toggleAxis" onColorChange="colorSelected">' + '</series-color-picker-popover>',
            openOn: 'hover',
            classNames: 'drop-popover drop-popover--transparent',
            model: {
              autoClose: true,
              series: series,
              toggleAxis: function toggleAxis() {},
              colorSelected: function colorSelected(color) {
                ctrl.changeSeriesColor(series, color);
              }
            }
          });
        });
      }

      function render() {
        if (panel.legendType === 'On graph' || !panel.legend.show) {
          $container.empty();
          elem.find('.piechart-legend').css('padding-top', 0);
          return;
        } else {
          elem.find('.piechart-legend').css('padding-top', 6);
        }

        if (firstRender) {
          elem.append($container);
          $container.on('click', '.piechart-legend-icon', openColorSelector);
          $container.on('click', '.piechart-legend-alias', toggleSeries);
          $container.on('click', 'th', sortLegend);
          firstRender = false;
        }

        seriesList = data;
        dataList = ctrl.data;
        $container.empty();
        var width = panel.legendType === 'Right side' && panel.legend.sideWidth ? panel.legend.sideWidth + 'px' : '';
        var ieWidth = panel.legendType === 'Right side' && panel.legend.sideWidth ? panel.legend.sideWidth - 1 + 'px' : '';
        elem.css('min-width', width);
        elem.css('width', ieWidth);
        var showValues = panel.legend.values || panel.legend.percentage;
        var tableLayout = (panel.legendType === 'Under graph' || panel.legendType === 'Right side') && showValues;
        $container.toggleClass('piechart-legend-table', tableLayout);
        var legendHeader;

        if (tableLayout) {
          var header = '<tr><th colspan="2" style="text-align:left"></th>';

          if (panel.legend.values) {
            header += getLegendHeaderHtml(ctrl.panel.valueName);
          }

          if (panel.legend.percentage) {
            header += getLegendPercentageHtml(ctrl.panel.valueName);
          }

          header += '</tr>';
          legendHeader = jquery__WEBPACK_IMPORTED_MODULE_1___default()(header);
        }

        var total = 0;

        if (panel.legend.percentage) {
          for (i = 0; i < seriesList.length; i++) {
            total += seriesList[i].stats[ctrl.panel.valueName];
          }
        }

        var combineNum = 0,
            combineVal = {
          label: panel.combine.label,
          color: '',
          legendData: 0
        };
        var seriesElements = [];

        for (i = 0; i < seriesList.length; i++) {
          var series = seriesList[i];
          var seriesData = dataList[i]; // combine lower values than threshold and not include into legent

          if (seriesData.data / total < panel.combine.threshold) {
            combineNum++;
            combineVal.legendData += seriesData.data; // Take the first color as piechart

            if (combineVal.color === '') combineVal.color = seriesData.color;
          } else {
            // ignore empty series
            if (panel.legend.hideEmpty && series.allIsNull) {
              continue;
            } // ignore series excluded via override


            if (!series.legend) {
              continue;
            }

            seriesElements.push(jquery__WEBPACK_IMPORTED_MODULE_1___default()(generateLegendItem(seriesData, i, total, showValues, tableLayout)));
          }
        } // Add combine to legend


        if (combineNum > 0) {
          seriesElements.push(jquery__WEBPACK_IMPORTED_MODULE_1___default()(generateLegendItem(combineVal, seriesList.length - combineNum, total, showValues, tableLayout)));
        }

        if (tableLayout) {
          // const topPadding = 6;
          var tbodyElem = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<tbody></tbody>'); // tbodyElem.css("max-height", maxHeight - topPadding);

          if (typeof legendHeader !== 'undefined') {
            tbodyElem.append(legendHeader);
          }

          tbodyElem.append(seriesElements);
          $container.append(tbodyElem);
        } else {
          $container.append(seriesElements);
        }

        if (panel.legendType === 'Under graph') {
          addScrollbar();
        } else {
          destroyScrollbar();
        }
      }

      function generateLegendItem(data, index, total, showValues, tableLayout) {
        var html = '<div class="piechart-legend-series';

        if (ctrl.hiddenSeries[data.label]) {
          html += ' piechart-legend-series-hidden';
        }

        html += '" data-series-index="' + index + '">';
        html += '<span class="piechart-legend-icon" style="float:none;">';
        html += '<i class="fa fa-minus pointer" style="color:' + data.color + '"></i>';
        html += '</span>';
        html += '<a class="piechart-legend-alias" style="float:none;">' + lodash__WEBPACK_IMPORTED_MODULE_3___default.a.escape(data.label) + '</a>';
        var decimal = 0;

        if (ctrl.panel.legend.percentageDecimals) {
          decimal = ctrl.panel.legend.percentageDecimals;
        }

        if (showValues && tableLayout) {
          var value = data.legendData;

          if (panel.legend.values) {
            html += '<div class="piechart-legend-value">' + ctrl.formatValue(value) + '</div>';
          }

          if (total) {
            var pvalue = (value / total * 100).toFixed(decimal) + '%';
            html += '<div class="piechart-legend-value">' + pvalue + '</div>';
          }
        }

        html += '</div>';
        return html;
      }

      function addScrollbar() {
        var scrollbarOptions = {
          // Number of pixels the content height can surpass the container height without enabling the scroll bar.
          scrollYMarginOffset: 2,
          suppressScrollX: true
        };

        if (!legendScrollbar) {
          legendScrollbar = new _lib_perfect_scrollbar_min__WEBPACK_IMPORTED_MODULE_4___default.a(elem[0], scrollbarOptions);
        } else {
          legendScrollbar.update();
        }
      }

      function destroyScrollbar() {
        if (legendScrollbar) {
          legendScrollbar.destroy();
          legendScrollbar = null;
        }
      }
    }
  };
}]);

/***/ }),

/***/ "./lib/jquery.flot.pie.js":
/*!********************************!*\
  !*** ./lib/jquery.flot.pie.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Flot plugin for rendering pie charts.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin assumes that each series has a single data value, and that each
value is a positive integer or zero.  Negative numbers don't make sense for a
pie chart, and have unpredictable results.  The values do NOT need to be
passed in as percentages; the plugin will calculate the total and per-slice
percentages internally.

* Created by Brian Medendorp

* Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars

The plugin supports these options:

	series: {
		pie: {
			show: true/false
			radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
			innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
			startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
			tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
			offset: {
				top: integer value to move the pie up or down
				left: integer value to move the pie left or right, or 'auto'
			},
			stroke: {
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
				width: integer pixel width of the stroke
			},
			label: {
				show: true/false, or 'auto'
				formatter:  a user-defined function that modifies the text/style of the label text
				radius: 0-1 for percentage of fullsize, or a specified pixel length
				background: {
					color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
					opacity: 0-1
				},
				threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
			},
			combine: {
				threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
				label: any text value of what the combined slice should be labeled
			}
			highlight: {
				opacity: 0-1
			}
		}
	}

More detail and specific examples can be found in the included HTML file.

*/
(function ($) {
  // Maximum redraw attempts when fitting labels within the plot
  var REDRAW_ATTEMPTS = 10; // Factor by which to shrink the pie when fitting labels within the plot

  var REDRAW_SHRINK = 0.95;

  function init(plot) {
    var canvas = null,
        target = null,
        options = null,
        maxRadius = null,
        centerLeft = null,
        centerTop = null,
        processed = false,
        ctx = null; // interactive variables

    var highlights = []; // add hook to determine if pie plugin in enabled, and then perform necessary operations

    plot.hooks.processOptions.push(function (plot, options) {
      if (options.series.pie.show) {
        options.grid.show = false; // set labels.show

        if (options.series.pie.label.show == "auto") {
          if (options.legend.show) {
            options.series.pie.label.show = false;
          } else {
            options.series.pie.label.show = true;
          }
        } // set radius


        if (options.series.pie.radius == "auto") {
          if (options.series.pie.label.show) {
            options.series.pie.radius = 3 / 4;
          } else {
            options.series.pie.radius = 1;
          }
        } // ensure sane tilt


        if (options.series.pie.tilt > 1) {
          options.series.pie.tilt = 1;
        } else if (options.series.pie.tilt < 0) {
          options.series.pie.tilt = 0;
        }
      }
    });
    plot.hooks.bindEvents.push(function (plot, eventHolder) {
      var options = plot.getOptions();

      if (options.series.pie.show) {
        if (options.grid.hoverable) {
          eventHolder.unbind("mousemove").mousemove(onMouseMove);
        }

        if (options.grid.clickable) {
          eventHolder.unbind("click").click(onClick);
        }
      }
    });
    plot.hooks.processDatapoints.push(function (plot, series, data, datapoints) {
      var options = plot.getOptions();

      if (options.series.pie.show) {
        processDatapoints(plot, series, data, datapoints);
      }
    });
    plot.hooks.drawOverlay.push(function (plot, octx) {
      var options = plot.getOptions();

      if (options.series.pie.show) {
        drawOverlay(plot, octx);
      }
    });
    plot.hooks.draw.push(function (plot, newCtx) {
      var options = plot.getOptions();

      if (options.series.pie.show) {
        draw(plot, newCtx);
      }
    });

    function processDatapoints(plot, series, datapoints) {
      if (!processed) {
        processed = true;
        canvas = plot.getCanvas();
        target = $(canvas).parent();
        options = plot.getOptions();
        plot.setData(combine(plot.getData()));
      }
    }

    function combine(data) {
      var total = 0,
          combined = 0,
          numCombined = 0,
          color = options.series.pie.combine.color,
          newdata = []; // Fix up the raw data from Flot, ensuring the data is numeric

      for (var i = 0; i < data.length; ++i) {
        var value = data[i].data; // If the data is an array, we'll assume that it's a standard
        // Flot x-y pair, and are concerned only with the second value.
        // Note how we use the original array, rather than creating a
        // new one; this is more efficient and preserves any extra data
        // that the user may have stored in higher indexes.

        if ($.isArray(value) && value.length == 1) {
          value = value[0];
        }

        if ($.isArray(value)) {
          // Equivalent to $.isNumeric() but compatible with jQuery < 1.7
          if (!isNaN(parseFloat(value[1])) && isFinite(value[1])) {
            value[1] = +value[1];
          } else {
            value[1] = 0;
          }
        } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
          value = [1, +value];
        } else {
          value = [1, 0];
        }

        data[i].data = [value];
      } // Sum up all the slices, so we can calculate percentages for each


      for (var i = 0; i < data.length; ++i) {
        total += data[i].data[0][1];
      } // Count the number of slices with percentages below the combine
      // threshold; if it turns out to be just one, we won't combine.


      for (var i = 0; i < data.length; ++i) {
        var value = data[i].data[0][1];

        if (value / total <= options.series.pie.combine.threshold) {
          combined += value;
          numCombined++;

          if (!color) {
            color = data[i].color;
          }
        }
      }

      for (var i = 0; i < data.length; ++i) {
        var value = data[i].data[0][1];

        if (numCombined < 2 || value / total > options.series.pie.combine.threshold) {
          newdata.push($.extend(data[i], {
            /* extend to allow keeping all other original data values
               and using them e.g. in labelFormatter. */
            data: [[1, value]],
            color: data[i].color,
            label: data[i].label,
            angle: value * Math.PI * 2 / total,
            percent: value / (total / 100)
          }));
        }
      }

      if (numCombined > 1) {
        newdata.push({
          data: [[1, combined]],
          color: color,
          label: options.series.pie.combine.label,
          angle: combined * Math.PI * 2 / total,
          percent: combined / (total / 100)
        });
      }

      return newdata;
    }

    function draw(plot, newCtx) {
      if (!target) {
        return; // if no series were passed
      }

      var canvasWidth = plot.getPlaceholder().width(),
          canvasHeight = plot.getPlaceholder().height(),
          legendWidth = target.children().filter(".legend").children().width() || 0;
      ctx = newCtx; // WARNING: HACK! REWRITE THIS CODE AS SOON AS POSSIBLE!
      // When combining smaller slices into an 'other' slice, we need to
      // add a new series.  Since Flot gives plugins no way to modify the
      // list of series, the pie plugin uses a hack where the first call
      // to processDatapoints results in a call to setData with the new
      // list of series, then subsequent processDatapoints do nothing.
      // The plugin-global 'processed' flag is used to control this hack;
      // it starts out false, and is set to true after the first call to
      // processDatapoints.
      // Unfortunately this turns future setData calls into no-ops; they
      // call processDatapoints, the flag is true, and nothing happens.
      // To fix this we'll set the flag back to false here in draw, when
      // all series have been processed, so the next sequence of calls to
      // processDatapoints once again starts out with a slice-combine.
      // This is really a hack; in 0.9 we need to give plugins a proper
      // way to modify series before any processing begins.

      processed = false; // calculate maximum radius and center point

      maxRadius = Math.min(canvasWidth, canvasHeight / options.series.pie.tilt) / 2;
      centerTop = canvasHeight / 2 + options.series.pie.offset.top;
      centerLeft = canvasWidth / 2;

      if (options.series.pie.offset.left == "auto") {
        if (options.legend.position.match("w")) {
          centerLeft += legendWidth / 2;
        } else {
          centerLeft -= legendWidth / 2;
        }

        if (centerLeft < maxRadius) {
          centerLeft = maxRadius;
        } else if (centerLeft > canvasWidth - maxRadius) {
          centerLeft = canvasWidth - maxRadius;
        }
      } else {
        centerLeft += options.series.pie.offset.left;
      }

      var slices = plot.getData(),
          attempts = 0; // Keep shrinking the pie's radius until drawPie returns true,
      // indicating that all the labels fit, or we try too many times.

      do {
        if (attempts > 0) {
          maxRadius *= REDRAW_SHRINK;
        }

        attempts += 1;
        clear();

        if (options.series.pie.tilt <= 0.8) {
          drawShadow();
        }
      } while (!drawPie() && attempts < REDRAW_ATTEMPTS);

      if (attempts >= REDRAW_ATTEMPTS) {
        clear();
        target.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>");
      }

      if (plot.setSeries && plot.insertLegend) {
        plot.setSeries(slices);
        plot.insertLegend();
      } // we're actually done at this point, just defining internal functions at this point


      function clear() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        target.children().filter(".pieLabel, .pieLabelBackground").remove();
      }

      function drawShadow() {
        var shadowLeft = options.series.pie.shadow.left;
        var shadowTop = options.series.pie.shadow.top;
        var edge = 10;
        var alpha = options.series.pie.shadow.alpha;
        var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

        if (radius >= canvasWidth / 2 - shadowLeft || radius * options.series.pie.tilt >= canvasHeight / 2 - shadowTop || radius <= edge) {
          return; // shadow would be outside canvas, so don't draw it
        }

        ctx.save();
        ctx.translate(shadowLeft, shadowTop);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "#000"; // center and rotate to starting position

        ctx.translate(centerLeft, centerTop);
        ctx.scale(1, options.series.pie.tilt); //radius -= edge;

        for (var i = 1; i <= edge; i++) {
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
          ctx.fill();
          radius -= i;
        }

        ctx.restore();
      }

      function drawPie() {
        var startAngle = Math.PI * options.series.pie.startAngle;
        var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius; // center and rotate to starting position

        ctx.save();
        ctx.translate(centerLeft, centerTop);
        ctx.scale(1, options.series.pie.tilt); //ctx.rotate(startAngle); // start at top; -- This doesn't work properly in Opera
        // draw slices

        ctx.save();
        var currentAngle = startAngle;

        for (var i = 0; i < slices.length; ++i) {
          slices[i].startAngle = currentAngle;
          drawSlice(slices[i].angle, slices[i].color, true);
        }

        ctx.restore(); // draw slice outlines

        if (options.series.pie.stroke.width > 0) {
          ctx.save();
          ctx.lineWidth = options.series.pie.stroke.width;
          currentAngle = startAngle;

          for (var i = 0; i < slices.length; ++i) {
            drawSlice(slices[i].angle, options.series.pie.stroke.color, false);
          }

          ctx.restore();
        } // draw donut hole


        drawDonutHole(ctx);
        ctx.restore(); // Draw the labels, returning true if they fit within the plot

        if (options.series.pie.label.show) {
          return drawLabels();
        } else return true;

        function drawSlice(angle, color, fill) {
          if (angle <= 0 || isNaN(angle)) {
            return;
          }

          if (fill) {
            ctx.fillStyle = color;
          } else {
            ctx.strokeStyle = color;
            ctx.lineJoin = "round";
          }

          ctx.beginPath();

          if (Math.abs(angle - Math.PI * 2) > 0.000000001) {
            ctx.moveTo(0, 0); // Center of the pie
          } //ctx.arc(0, 0, radius, 0, angle, false); // This doesn't work properly in Opera


          ctx.arc(0, 0, radius, currentAngle, currentAngle + angle / 2, false);
          ctx.arc(0, 0, radius, currentAngle + angle / 2, currentAngle + angle, false);
          ctx.closePath(); //ctx.rotate(angle); // This doesn't work properly in Opera

          currentAngle += angle;

          if (fill) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }

        function drawLabels() {
          var currentAngle = startAngle;
          var radius = options.series.pie.label.radius > 1 ? options.series.pie.label.radius : maxRadius * options.series.pie.label.radius;

          for (var i = 0; i < slices.length; ++i) {
            if (slices[i].percent >= options.series.pie.label.threshold * 100) {
              if (!drawLabel(slices[i], currentAngle, i)) {
                return false;
              }
            }

            currentAngle += slices[i].angle;
          }

          return true;

          function drawLabel(slice, startAngle, index) {
            if (slice.data[0][1] == 0) {
              return true;
            } // format label text


            var lf = options.legend.labelFormatter,
                text,
                plf = options.series.pie.label.formatter;

            if (lf) {
              text = lf(slice.label, slice);
            } else {
              text = slice.label;
            }

            if (plf) {
              text = plf(text, slice);
            }

            var halfAngle = (startAngle + slice.angle + startAngle) / 2;
            var x = centerLeft + Math.round(Math.cos(halfAngle) * radius);
            var y = centerTop + Math.round(Math.sin(halfAngle) * radius) * options.series.pie.tilt;
            var html = "<span class='pieLabel' id='pieLabel" + index + "' style='position:absolute;top:" + y + "px;left:" + x + "px;'>" + text + "</span>";
            target.append(html);
            var label = target.children("#pieLabel" + index);
            var labelTop = y - label.height() / 2;
            var labelLeft = x - label.width() / 2;
            label.css("top", labelTop);
            label.css("left", labelLeft); // check to make sure that the label is not outside the canvas

            if (0 - labelTop > 0 || 0 - labelLeft > 0 || canvasHeight - (labelTop + label.height()) < 0 || canvasWidth - (labelLeft + label.width()) < 0) {
              return false;
            }

            if (options.series.pie.label.background.opacity != 0) {
              // put in the transparent background separately to avoid blended labels and label boxes
              var c = options.series.pie.label.background.color;

              if (c == null) {
                c = slice.color;
              }

              var pos = "top:" + labelTop + "px;left:" + labelLeft + "px;";
              $("<div class='pieLabelBackground' style='position:absolute;width:" + label.width() + "px;height:" + label.height() + "px;" + pos + "background-color:" + c + ";'></div>").css("opacity", options.series.pie.label.background.opacity).insertBefore(label);
            }

            return true;
          } // end individual label function

        } // end drawLabels function

      } // end drawPie function

    } // end draw function
    // Placed here because it needs to be accessed from multiple locations


    function drawDonutHole(layer) {
      if (options.series.pie.innerRadius > 0) {
        // subtract the center
        layer.save();
        var innerRadius = options.series.pie.innerRadius > 1 ? options.series.pie.innerRadius : maxRadius * options.series.pie.innerRadius;
        layer.globalCompositeOperation = "destination-out"; // this does not work with excanvas, but it will fall back to using the stroke color

        layer.beginPath();
        layer.fillStyle = options.series.pie.stroke.color;
        layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
        layer.fill();
        layer.closePath();
        layer.restore(); // add inner stroke

        layer.save();
        layer.beginPath();
        layer.strokeStyle = options.series.pie.stroke.color;
        layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
        layer.stroke();
        layer.closePath();
        layer.restore(); // TODO: add extra shadow inside hole (with a mask) if the pie is tilted.
      }
    } //-- Additional Interactive related functions --


    function isPointInPoly(poly, pt) {
      for (var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i) {
        (poly[i][1] <= pt[1] && pt[1] < poly[j][1] || poly[j][1] <= pt[1] && pt[1] < poly[i][1]) && pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0] && (c = !c);
      }

      return c;
    }

    function findNearbySlice(mouseX, mouseY) {
      var slices = plot.getData(),
          options = plot.getOptions(),
          radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius,
          x,
          y;

      for (var i = 0; i < slices.length; ++i) {
        var s = slices[i];

        if (s.pie.show) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(0, 0); // Center of the pie
          //ctx.scale(1, options.series.pie.tilt);	// this actually seems to break everything when here.

          ctx.arc(0, 0, radius, s.startAngle, s.startAngle + s.angle / 2, false);
          ctx.arc(0, 0, radius, s.startAngle + s.angle / 2, s.startAngle + s.angle, false);
          ctx.closePath();
          x = mouseX - centerLeft;
          y = mouseY - centerTop;

          if (ctx.isPointInPath) {
            if (ctx.isPointInPath(mouseX - centerLeft, mouseY - centerTop)) {
              ctx.restore();
              return {
                datapoint: [s.percent, s.data],
                dataIndex: 0,
                series: s,
                seriesIndex: i
              };
            }
          } else {
            // excanvas for IE doesn;t support isPointInPath, this is a workaround.
            var p1X = radius * Math.cos(s.startAngle),
                p1Y = radius * Math.sin(s.startAngle),
                p2X = radius * Math.cos(s.startAngle + s.angle / 4),
                p2Y = radius * Math.sin(s.startAngle + s.angle / 4),
                p3X = radius * Math.cos(s.startAngle + s.angle / 2),
                p3Y = radius * Math.sin(s.startAngle + s.angle / 2),
                p4X = radius * Math.cos(s.startAngle + s.angle / 1.5),
                p4Y = radius * Math.sin(s.startAngle + s.angle / 1.5),
                p5X = radius * Math.cos(s.startAngle + s.angle),
                p5Y = radius * Math.sin(s.startAngle + s.angle),
                arrPoly = [[0, 0], [p1X, p1Y], [p2X, p2Y], [p3X, p3Y], [p4X, p4Y], [p5X, p5Y]],
                arrPoint = [x, y]; // TODO: perhaps do some mathmatical trickery here with the Y-coordinate to compensate for pie tilt?

            if (isPointInPoly(arrPoly, arrPoint)) {
              ctx.restore();
              return {
                datapoint: [s.percent, s.data],
                dataIndex: 0,
                series: s,
                seriesIndex: i
              };
            }
          }

          ctx.restore();
        }
      }

      return null;
    }

    function onMouseMove(e) {
      triggerClickHoverEvent("plothover", e);
    }

    function onClick(e) {
      triggerClickHoverEvent("plotclick", e);
    } // trigger click or hover event (they send the same parameters so we share their code)


    function triggerClickHoverEvent(eventname, e) {
      var offset = plot.offset();
      var canvasX = parseInt(e.pageX - offset.left);
      var canvasY = parseInt(e.pageY - offset.top);
      var item = findNearbySlice(canvasX, canvasY);

      if (options.grid.autoHighlight) {
        // clear auto-highlights
        for (var i = 0; i < highlights.length; ++i) {
          var h = highlights[i];

          if (h.auto == eventname && !(item && h.series == item.series)) {
            unhighlight(h.series);
          }
        }
      } // highlight the slice


      if (item) {
        highlight(item.series, eventname);
      } // trigger any hover bind events


      var pos = {
        pageX: e.pageX,
        pageY: e.pageY
      };
      target.trigger(eventname, [pos, item]);
    }

    function highlight(s, auto) {
      //if (typeof s == "number") {
      //	s = series[s];
      //}
      var i = indexOfHighlight(s);

      if (i == -1) {
        highlights.push({
          series: s,
          auto: auto
        });
        plot.triggerRedrawOverlay();
      } else if (!auto) {
        highlights[i].auto = false;
      }
    }

    function unhighlight(s) {
      if (s == null) {
        highlights = [];
        plot.triggerRedrawOverlay();
      } //if (typeof s == "number") {
      //	s = series[s];
      //}


      var i = indexOfHighlight(s);

      if (i != -1) {
        highlights.splice(i, 1);
        plot.triggerRedrawOverlay();
      }
    }

    function indexOfHighlight(s) {
      for (var i = 0; i < highlights.length; ++i) {
        var h = highlights[i];
        if (h.series == s) return i;
      }

      return -1;
    }

    function drawOverlay(plot, octx) {
      var options = plot.getOptions();
      var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;
      octx.save();
      octx.translate(centerLeft, centerTop);
      octx.scale(1, options.series.pie.tilt);

      for (var i = 0; i < highlights.length; ++i) {
        drawHighlight(highlights[i].series);
      }

      drawDonutHole(octx);
      octx.restore();

      function drawHighlight(series) {
        if (series.angle <= 0 || isNaN(series.angle)) {
          return;
        } //octx.fillStyle = parseColor(options.series.pie.highlight.color).scale(null, null, null, options.series.pie.highlight.opacity).toString();


        octx.fillStyle = "rgba(255, 255, 255, " + options.series.pie.highlight.opacity + ")"; // this is temporary until we have access to parseColor

        octx.beginPath();

        if (Math.abs(series.angle - Math.PI * 2) > 0.000000001) {
          octx.moveTo(0, 0); // Center of the pie
        }

        octx.arc(0, 0, radius, series.startAngle, series.startAngle + series.angle / 2, false);
        octx.arc(0, 0, radius, series.startAngle + series.angle / 2, series.startAngle + series.angle, false);
        octx.closePath();
        octx.fill();
      }
    }
  } // end init (plugin body)
  // define pie specific options and their default values


  var options = {
    series: {
      pie: {
        show: false,
        radius: "auto",
        // actual radius of the visible pie (based on full calculated radius if <=1, or hard pixel value)
        innerRadius: 0,

        /* for donut */
        startAngle: 3 / 2,
        tilt: 1,
        shadow: {
          left: 5,
          // shadow left offset
          top: 15,
          // shadow top offset
          alpha: 0.02 // shadow alpha

        },
        offset: {
          top: 0,
          left: "auto"
        },
        stroke: {
          color: "#fff",
          width: 1
        },
        label: {
          show: "auto",
          formatter: function formatter(label, slice) {
            return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + slice.color + ";'>" + label + "<br/>" + Math.round(slice.percent) + "%</div>";
          },
          // formatter function
          radius: 1,
          // radius at which to place the labels (based on full calculated radius if <=1, or hard pixel value)
          background: {
            color: null,
            opacity: 0
          },
          threshold: 0 // percentage at which to hide the label (i.e. the slice is too narrow)

        },
        combine: {
          threshold: -1,
          // percentage at which to combine little slices into one larger slice
          color: null,
          // color to give the new slice (auto-generated if null)
          label: "Other" // label to give the new slice

        },
        highlight: {
          //color: "#fff",		// will add this functionality once parseColor is available
          opacity: 0.5
        }
      }
    }
  };
  $.plot.plugins.push({
    init: init,
    options: options,
    name: "pie",
    version: "1.1"
  });
})(jQuery);

/***/ }),

/***/ "./lib/jquery.flot.time.js":
/*!*********************************!*\
  !*** ./lib/jquery.flot.time.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Pretty handling of time axes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

Set axis.mode to "time" to enable. See the section "Time series data" in
API.txt for details.

*/
(function ($) {
  var options = {
    xaxis: {
      timezone: null,
      // "browser" for local to the client or timezone for timezone-js
      timeformat: null,
      // format string to use
      twelveHourClock: false,
      // 12 or 24 time in time mode
      monthNames: null // list of names of months

    }
  }; // round to nearby lower multiple of base

  function floorInBase(n, base) {
    return base * Math.floor(n / base);
  } // Returns a string with the date d formatted according to fmt.
  // A subset of the Open Group's strftime format is supported.


  function formatDate(d, fmt, monthNames, dayNames) {
    if (typeof d.strftime == "function") {
      return d.strftime(fmt);
    }

    var leftPad = function leftPad(n, pad) {
      n = "" + n;
      pad = "" + (pad == null ? "0" : pad);
      return n.length == 1 ? pad + n : n;
    };

    var r = [];
    var escape = false;
    var hours = d.getHours();
    var isAM = hours < 12;

    if (monthNames == null) {
      monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    }

    if (dayNames == null) {
      dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    }

    var hours12;

    if (hours > 12) {
      hours12 = hours - 12;
    } else if (hours == 0) {
      hours12 = 12;
    } else {
      hours12 = hours;
    }

    for (var i = 0; i < fmt.length; ++i) {
      var c = fmt.charAt(i);

      if (escape) {
        switch (c) {
          case 'a':
            c = "" + dayNames[d.getDay()];
            break;

          case 'b':
            c = "" + monthNames[d.getMonth()];
            break;

          case 'd':
            c = leftPad(d.getDate());
            break;

          case 'e':
            c = leftPad(d.getDate(), " ");
            break;

          case 'h': // For back-compat with 0.7; remove in 1.0

          case 'H':
            c = leftPad(hours);
            break;

          case 'I':
            c = leftPad(hours12);
            break;

          case 'l':
            c = leftPad(hours12, " ");
            break;

          case 'm':
            c = leftPad(d.getMonth() + 1);
            break;

          case 'M':
            c = leftPad(d.getMinutes());
            break;
          // quarters not in Open Group's strftime specification

          case 'q':
            c = "" + (Math.floor(d.getMonth() / 3) + 1);
            break;

          case 'S':
            c = leftPad(d.getSeconds());
            break;

          case 'y':
            c = leftPad(d.getFullYear() % 100);
            break;

          case 'Y':
            c = "" + d.getFullYear();
            break;

          case 'p':
            c = isAM ? "" + "am" : "" + "pm";
            break;

          case 'P':
            c = isAM ? "" + "AM" : "" + "PM";
            break;

          case 'w':
            c = "" + d.getDay();
            break;
        }

        r.push(c);
        escape = false;
      } else {
        if (c == "%") {
          escape = true;
        } else {
          r.push(c);
        }
      }
    }

    return r.join("");
  } // To have a consistent view of time-based data independent of which time
  // zone the client happens to be in we need a date-like object independent
  // of time zones.  This is done through a wrapper that only calls the UTC
  // versions of the accessor methods.


  function makeUtcWrapper(d) {
    function addProxyMethod(sourceObj, sourceMethod, targetObj, targetMethod) {
      sourceObj[sourceMethod] = function () {
        return targetObj[targetMethod].apply(targetObj, arguments);
      };
    }

    ;
    var utc = {
      date: d
    }; // support strftime, if found

    if (d.strftime != undefined) {
      addProxyMethod(utc, "strftime", d, "strftime");
    }

    addProxyMethod(utc, "getTime", d, "getTime");
    addProxyMethod(utc, "setTime", d, "setTime");
    var props = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"];

    for (var p = 0; p < props.length; p++) {
      addProxyMethod(utc, "get" + props[p], d, "getUTC" + props[p]);
      addProxyMethod(utc, "set" + props[p], d, "setUTC" + props[p]);
    }

    return utc;
  }

  ; // select time zone strategy.  This returns a date-like object tied to the
  // desired timezone

  function dateGenerator(ts, opts) {
    if (opts.timezone == "browser") {
      return new Date(ts);
    } else if (!opts.timezone || opts.timezone == "utc") {
      return makeUtcWrapper(new Date(ts));
    } else if (typeof timezoneJS != "undefined" && typeof timezoneJS.Date != "undefined") {
      var d = new timezoneJS.Date(); // timezone-js is fickle, so be sure to set the time zone before
      // setting the time.

      d.setTimezone(opts.timezone);
      d.setTime(ts);
      return d;
    } else {
      return makeUtcWrapper(new Date(ts));
    }
  } // map of app. size of time units in milliseconds


  var timeUnitSize = {
    "second": 1000,
    "minute": 60 * 1000,
    "hour": 60 * 60 * 1000,
    "day": 24 * 60 * 60 * 1000,
    "month": 30 * 24 * 60 * 60 * 1000,
    "quarter": 3 * 30 * 24 * 60 * 60 * 1000,
    "year": 365.2425 * 24 * 60 * 60 * 1000
  }; // the allowed tick sizes, after 1 year we use
  // an integer algorithm

  var baseSpec = [[1, "second"], [2, "second"], [5, "second"], [10, "second"], [30, "second"], [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"], [30, "minute"], [1, "hour"], [2, "hour"], [4, "hour"], [8, "hour"], [12, "hour"], [1, "day"], [2, "day"], [3, "day"], [0.25, "month"], [0.5, "month"], [1, "month"], [2, "month"]]; // we don't know which variant(s) we'll need yet, but generating both is
  // cheap

  var specMonths = baseSpec.concat([[3, "month"], [6, "month"], [1, "year"]]);
  var specQuarters = baseSpec.concat([[1, "quarter"], [2, "quarter"], [1, "year"]]);

  function init(plot) {
    plot.hooks.processOptions.push(function (plot, options) {
      $.each(plot.getAxes(), function (axisName, axis) {
        var opts = axis.options;

        if (opts.mode == "time") {
          axis.tickGenerator = function (axis) {
            var ticks = [];
            var d = dateGenerator(axis.min, opts);
            var minSize = 0; // make quarter use a possibility if quarters are
            // mentioned in either of these options

            var spec = opts.tickSize && opts.tickSize[1] === "quarter" || opts.minTickSize && opts.minTickSize[1] === "quarter" ? specQuarters : specMonths;

            if (opts.minTickSize != null) {
              if (typeof opts.tickSize == "number") {
                minSize = opts.tickSize;
              } else {
                minSize = opts.minTickSize[0] * timeUnitSize[opts.minTickSize[1]];
              }
            }

            for (var i = 0; i < spec.length - 1; ++i) {
              if (axis.delta < (spec[i][0] * timeUnitSize[spec[i][1]] + spec[i + 1][0] * timeUnitSize[spec[i + 1][1]]) / 2 && spec[i][0] * timeUnitSize[spec[i][1]] >= minSize) {
                break;
              }
            }

            var size = spec[i][0];
            var unit = spec[i][1]; // special-case the possibility of several years

            if (unit == "year") {
              // if given a minTickSize in years, just use it,
              // ensuring that it's an integer
              if (opts.minTickSize != null && opts.minTickSize[1] == "year") {
                size = Math.floor(opts.minTickSize[0]);
              } else {
                var magn = Math.pow(10, Math.floor(Math.log(axis.delta / timeUnitSize.year) / Math.LN10));
                var norm = axis.delta / timeUnitSize.year / magn;

                if (norm < 1.5) {
                  size = 1;
                } else if (norm < 3) {
                  size = 2;
                } else if (norm < 7.5) {
                  size = 5;
                } else {
                  size = 10;
                }

                size *= magn;
              } // minimum size for years is 1


              if (size < 1) {
                size = 1;
              }
            }

            axis.tickSize = opts.tickSize || [size, unit];
            var tickSize = axis.tickSize[0];
            unit = axis.tickSize[1];
            var step = tickSize * timeUnitSize[unit];

            if (unit == "second") {
              d.setSeconds(floorInBase(d.getSeconds(), tickSize));
            } else if (unit == "minute") {
              d.setMinutes(floorInBase(d.getMinutes(), tickSize));
            } else if (unit == "hour") {
              d.setHours(floorInBase(d.getHours(), tickSize));
            } else if (unit == "month") {
              d.setMonth(floorInBase(d.getMonth(), tickSize));
            } else if (unit == "quarter") {
              d.setMonth(3 * floorInBase(d.getMonth() / 3, tickSize));
            } else if (unit == "year") {
              d.setFullYear(floorInBase(d.getFullYear(), tickSize));
            } // reset smaller components


            d.setMilliseconds(0);

            if (step >= timeUnitSize.minute) {
              d.setSeconds(0);
            }

            if (step >= timeUnitSize.hour) {
              d.setMinutes(0);
            }

            if (step >= timeUnitSize.day) {
              d.setHours(0);
            }

            if (step >= timeUnitSize.day * 4) {
              d.setDate(1);
            }

            if (step >= timeUnitSize.month * 2) {
              d.setMonth(floorInBase(d.getMonth(), 3));
            }

            if (step >= timeUnitSize.quarter * 2) {
              d.setMonth(floorInBase(d.getMonth(), 6));
            }

            if (step >= timeUnitSize.year) {
              d.setMonth(0);
            }

            var carry = 0;
            var v = Number.NaN;
            var prev;

            do {
              prev = v;
              v = d.getTime();
              ticks.push(v);

              if (unit == "month" || unit == "quarter") {
                if (tickSize < 1) {
                  // a bit complicated - we'll divide the
                  // month/quarter up but we need to take
                  // care of fractions so we don't end up in
                  // the middle of a day
                  d.setDate(1);
                  var start = d.getTime();
                  d.setMonth(d.getMonth() + (unit == "quarter" ? 3 : 1));
                  var end = d.getTime();
                  d.setTime(v + carry * timeUnitSize.hour + (end - start) * tickSize);
                  carry = d.getHours();
                  d.setHours(0);
                } else {
                  d.setMonth(d.getMonth() + tickSize * (unit == "quarter" ? 3 : 1));
                }
              } else if (unit == "year") {
                d.setFullYear(d.getFullYear() + tickSize);
              } else {
                d.setTime(v + step);
              }
            } while (v < axis.max && v != prev);

            return ticks;
          };

          axis.tickFormatter = function (v, axis) {
            var d = dateGenerator(v, axis.options); // first check global format

            if (opts.timeformat != null) {
              return formatDate(d, opts.timeformat, opts.monthNames, opts.dayNames);
            } // possibly use quarters if quarters are mentioned in
            // any of these places


            var useQuarters = axis.options.tickSize && axis.options.tickSize[1] == "quarter" || axis.options.minTickSize && axis.options.minTickSize[1] == "quarter";
            var t = axis.tickSize[0] * timeUnitSize[axis.tickSize[1]];
            var span = axis.max - axis.min;
            var suffix = opts.twelveHourClock ? " %p" : "";
            var hourCode = opts.twelveHourClock ? "%I" : "%H";
            var fmt;

            if (t < timeUnitSize.minute) {
              fmt = hourCode + ":%M:%S" + suffix;
            } else if (t < timeUnitSize.day) {
              if (span < 2 * timeUnitSize.day) {
                fmt = hourCode + ":%M" + suffix;
              } else {
                fmt = "%b %d " + hourCode + ":%M" + suffix;
              }
            } else if (t < timeUnitSize.month) {
              fmt = "%b %d";
            } else if (useQuarters && t < timeUnitSize.quarter || !useQuarters && t < timeUnitSize.year) {
              if (span < timeUnitSize.year) {
                fmt = "%b";
              } else {
                fmt = "%b %Y";
              }
            } else if (useQuarters && t < timeUnitSize.year) {
              if (span < timeUnitSize.year) {
                fmt = "Q%q";
              } else {
                fmt = "Q%q %Y";
              }
            } else {
              fmt = "%Y";
            }

            var rt = formatDate(d, fmt, opts.monthNames, opts.dayNames);
            return rt;
          };
        }
      });
    });
  }

  $.plot.plugins.push({
    init: init,
    options: options,
    name: 'time',
    version: '1.0'
  }); // Time-axis support used to be in Flot core, which exposed the
  // formatDate function on the plot object.  Various plugins depend
  // on the function, so we need to re-expose it here.

  $.plot.formatDate = formatDate;
  $.plot.dateGenerator = dateGenerator;
})(jQuery);

/***/ }),

/***/ "./lib/perfect-scrollbar.min.js":
/*!**************************************!*\
  !*** ./lib/perfect-scrollbar.min.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * perfect-scrollbar v1.2.0
 * (c) 2017 Hyunje Jun
 * @license MIT
 */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function t(t) {
    return getComputedStyle(t);
  }

  function e(t, e) {
    for (var i in e) {
      var n = e[i];
      "number" == typeof n && (n += "px"), t.style[i] = n;
    }

    return t;
  }

  function i(t) {
    var e = document.createElement("div");
    return e.className = t, e;
  }

  function n(t, e) {
    if (!v) throw new Error("No element matching method supported");
    return v.call(t, e);
  }

  function r(t) {
    t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
  }

  function l(t, e) {
    return Array.prototype.filter.call(t.children, function (t) {
      return n(t, e);
    });
  }

  function o(t, e) {
    var i = t.element.classList,
        n = m.state.scrolling(e);
    i.contains(n) ? clearTimeout(w[e]) : i.add(n);
  }

  function s(t, e) {
    w[e] = setTimeout(function () {
      return t.isAlive && t.element.classList.remove(m.state.scrolling(e));
    }, t.settings.scrollingThreshold);
  }

  function a(t, e) {
    o(t, e), s(t, e);
  }

  function c(t) {
    if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
    var e = document.createEvent("CustomEvent");
    return e.initCustomEvent(t, !1, !1, void 0), e;
  }

  function h(t, e, i, n, r) {
    var l = i[0],
        o = i[1],
        s = i[2],
        h = i[3],
        u = i[4],
        d = i[5];
    void 0 === n && (n = !0), void 0 === r && (r = !1);
    var p = t.element;
    t.reach[h] = null, p[s] < 1 && (t.reach[h] = "start"), p[s] > t[l] - t[o] - 1 && (t.reach[h] = "end"), e && (p.dispatchEvent(c("ps-scroll-" + h)), e < 0 ? p.dispatchEvent(c("ps-scroll-" + u)) : e > 0 && p.dispatchEvent(c("ps-scroll-" + d)), n && a(t, h)), t.reach[h] && (e || r) && p.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h]));
  }

  function u(t) {
    return parseInt(t, 10) || 0;
  }

  function d(t) {
    return n(t, "input,[contenteditable]") || n(t, "select,[contenteditable]") || n(t, "textarea,[contenteditable]") || n(t, "button,[contenteditable]");
  }

  function p(e) {
    var i = t(e);
    return u(i.width) + u(i.paddingLeft) + u(i.paddingRight) + u(i.borderLeftWidth) + u(i.borderRightWidth);
  }

  function f(t, e) {
    return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
  }

  function b(t, i) {
    var n = {
      width: i.railXWidth
    };
    i.isRtl ? n.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : n.left = t.scrollLeft, i.isScrollbarXUsingBottom ? n.bottom = i.scrollbarXBottom - t.scrollTop : n.top = i.scrollbarXTop + t.scrollTop, e(i.scrollbarXRail, n);
    var r = {
      top: t.scrollTop,
      height: i.railYHeight
    };
    i.isScrollbarYUsingRight ? i.isRtl ? r.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : r.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : r.left = i.scrollbarYLeft + t.scrollLeft, e(i.scrollbarYRail, r), e(i.scrollbarX, {
      left: i.scrollbarXLeft,
      width: i.scrollbarXWidth - i.railBorderXWidth
    }), e(i.scrollbarY, {
      top: i.scrollbarYTop,
      height: i.scrollbarYHeight - i.railBorderYWidth
    });
  }

  function g(t, e) {
    function i(e) {
      f[d] = b + v * (e[a] - g), o(t, p), R(t), e.stopPropagation(), e.preventDefault();
    }

    function n() {
      s(t, p), t.event.unbind(t.ownerDocument, "mousemove", i);
    }

    var r = e[0],
        l = e[1],
        a = e[2],
        c = e[3],
        h = e[4],
        u = e[5],
        d = e[6],
        p = e[7],
        f = t.element,
        b = null,
        g = null,
        v = null;
    t.event.bind(t[h], "mousedown", function (e) {
      b = f[d], g = e[a], v = (t[l] - t[r]) / (t[c] - t[u]), t.event.bind(t.ownerDocument, "mousemove", i), t.event.once(t.ownerDocument, "mouseup", n), e.stopPropagation(), e.preventDefault();
    });
  }

  var v = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector,
      m = {
    main: "ps",
    element: {
      thumb: function thumb(t) {
        return "ps__thumb-" + t;
      },
      rail: function rail(t) {
        return "ps__rail-" + t;
      },
      consuming: "ps__child--consume"
    },
    state: {
      focus: "ps--focus",
      active: function active(t) {
        return "ps--active-" + t;
      },
      scrolling: function scrolling(t) {
        return "ps--scrolling-" + t;
      }
    }
  },
      w = {
    x: null,
    y: null
  },
      Y = function Y(t) {
    this.element = t, this.handlers = {};
  },
      X = {
    isEmpty: {
      configurable: !0
    }
  };

  Y.prototype.bind = function (t, e) {
    void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
  }, Y.prototype.unbind = function (t, e) {
    var i = this;
    this.handlers[t] = this.handlers[t].filter(function (n) {
      return !(!e || n === e) || (i.element.removeEventListener(t, n, !1), !1);
    });
  }, Y.prototype.unbindAll = function () {
    var t = this;

    for (var e in t.handlers) {
      t.unbind(e);
    }
  }, X.isEmpty.get = function () {
    var t = this;
    return Object.keys(this.handlers).every(function (e) {
      return 0 === t.handlers[e].length;
    });
  }, Object.defineProperties(Y.prototype, X);

  var W = function W() {
    this.eventElements = [];
  };

  W.prototype.eventElement = function (t) {
    var e = this.eventElements.filter(function (e) {
      return e.element === t;
    })[0];
    return e || (e = new Y(t), this.eventElements.push(e)), e;
  }, W.prototype.bind = function (t, e, i) {
    this.eventElement(t).bind(e, i);
  }, W.prototype.unbind = function (t, e, i) {
    var n = this.eventElement(t);
    n.unbind(e, i), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1);
  }, W.prototype.unbindAll = function () {
    this.eventElements.forEach(function (t) {
      return t.unbindAll();
    }), this.eventElements = [];
  }, W.prototype.once = function (t, e, i) {
    var n = this.eventElement(t),
        r = function r(t) {
      n.unbind(e, r), i(t);
    };

    n.bind(e, r);
  };

  var y = function y(t, e, i, n, r) {
    void 0 === n && (n = !0), void 0 === r && (r = !1);
    var l;
    if ("top" === e) l = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];else {
      if ("left" !== e) throw new Error("A proper axis should be provided");
      l = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
    }
    h(t, i, l, n, r);
  },
      L = {
    isWebKit: document && "WebkitAppearance" in document.documentElement.style,
    supportsTouch: window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    supportsIePointer: navigator && navigator.msMaxTouchPoints
  },
      R = function R(t) {
    var e = t.element;
    t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || (l(e, m.element.rail("x")).forEach(function (t) {
      return r(t);
    }), e.appendChild(t.scrollbarXRail)), e.contains(t.scrollbarYRail) || (l(e, m.element.rail("y")).forEach(function (t) {
      return r(t);
    }), e.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = f(t, u(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = u((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = f(t, u(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = u(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), b(e, t), t.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = 0), t.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0);
  },
      T = {
    "click-rail": function clickRail(t) {
      t.event.bind(t.scrollbarY, "mousedown", function (t) {
        return t.stopPropagation();
      }), t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
        var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
        t.element.scrollTop += i * t.containerHeight, R(t), e.stopPropagation();
      }), t.event.bind(t.scrollbarX, "mousedown", function (t) {
        return t.stopPropagation();
      }), t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
        var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
        t.element.scrollLeft += i * t.containerWidth, R(t), e.stopPropagation();
      });
    },
    "drag-thumb": function dragThumb(t) {
      g(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x"]), g(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y"]);
    },
    keyboard: function keyboard(t) {
      function e(e, n) {
        var r = i.scrollTop;

        if (0 === e) {
          if (!t.scrollbarYActive) return !1;
          if (0 === r && n > 0 || r >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation;
        }

        var l = i.scrollLeft;

        if (0 === n) {
          if (!t.scrollbarXActive) return !1;
          if (0 === l && e < 0 || l >= t.contentWidth - t.containerWidth && e > 0) return !t.settings.wheelPropagation;
        }

        return !0;
      }

      var i = t.element,
          r = function r() {
        return n(i, ":hover");
      },
          l = function l() {
        return n(t.scrollbarX, ":focus") || n(t.scrollbarY, ":focus");
      };

      t.event.bind(t.ownerDocument, "keydown", function (n) {
        if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && (r() || l())) {
          var o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;

          if (o) {
            if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;else for (; o.shadowRoot;) {
              o = o.shadowRoot.activeElement;
            }
            if (d(o)) return;
          }

          var s = 0,
              a = 0;

          switch (n.which) {
            case 37:
              s = n.metaKey ? -t.contentWidth : n.altKey ? -t.containerWidth : -30;
              break;

            case 38:
              a = n.metaKey ? t.contentHeight : n.altKey ? t.containerHeight : 30;
              break;

            case 39:
              s = n.metaKey ? t.contentWidth : n.altKey ? t.containerWidth : 30;
              break;

            case 40:
              a = n.metaKey ? -t.contentHeight : n.altKey ? -t.containerHeight : -30;
              break;

            case 32:
              a = n.shiftKey ? t.containerHeight : -t.containerHeight;
              break;

            case 33:
              a = t.containerHeight;
              break;

            case 34:
              a = -t.containerHeight;
              break;

            case 36:
              a = t.contentHeight;
              break;

            case 35:
              a = -t.contentHeight;
              break;

            default:
              return;
          }

          t.settings.suppressScrollX && 0 !== s || t.settings.suppressScrollY && 0 !== a || (i.scrollTop -= a, i.scrollLeft += s, R(t), e(s, a) && n.preventDefault());
        }
      });
    },
    wheel: function wheel(e) {
      function i(t, i) {
        var n = o.scrollTop;

        if (0 === t) {
          if (!e.scrollbarYActive) return !1;
          if (0 === n && i > 0 || n >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation;
        }

        var r = o.scrollLeft;

        if (0 === i) {
          if (!e.scrollbarXActive) return !1;
          if (0 === r && t < 0 || r >= e.contentWidth - e.containerWidth && t > 0) return !e.settings.wheelPropagation;
        }

        return !0;
      }

      function n(t) {
        var e = t.deltaX,
            i = -1 * t.deltaY;
        return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i];
      }

      function r(e, i, n) {
        if (!L.isWebKit && o.querySelector("select:focus")) return !0;
        if (!o.contains(e)) return !1;

        for (var r = e; r && r !== o;) {
          if (r.classList.contains(m.element.consuming)) return !0;
          var l = t(r);

          if ([l.overflow, l.overflowX, l.overflowY].join("").match(/(scroll|auto)/)) {
            var s = r.scrollHeight - r.clientHeight;
            if (s > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === s && n < 0)) return !0;
            var a = r.scrollLeft - r.clientWidth;
            if (a > 0 && !(0 === r.scrollLeft && i < 0 || r.scrollLeft === a && i > 0)) return !0;
          }

          r = r.parentNode;
        }

        return !1;
      }

      function l(t) {
        var l = n(t),
            s = l[0],
            a = l[1];

        if (!r(t.target, s, a)) {
          var c = !1;
          e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (a ? o.scrollTop -= a * e.settings.wheelSpeed : o.scrollTop += s * e.settings.wheelSpeed, c = !0) : e.scrollbarXActive && !e.scrollbarYActive && (s ? o.scrollLeft += s * e.settings.wheelSpeed : o.scrollLeft -= a * e.settings.wheelSpeed, c = !0) : (o.scrollTop -= a * e.settings.wheelSpeed, o.scrollLeft += s * e.settings.wheelSpeed), R(e), (c = c || i(s, a)) && !t.ctrlKey && (t.stopPropagation(), t.preventDefault());
        }
      }

      var o = e.element;
      void 0 !== window.onwheel ? e.event.bind(o, "wheel", l) : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", l);
    },
    touch: function touch(t) {
      function e(e, i) {
        var n = h.scrollTop,
            r = h.scrollLeft,
            l = Math.abs(e),
            o = Math.abs(i);

        if (o > l) {
          if (i < 0 && n === t.contentHeight - t.containerHeight || i > 0 && 0 === n) return {
            stop: !t.settings.swipePropagation,
            prevent: 0 === window.scrollY
          };
        } else if (l > o && (e < 0 && r === t.contentWidth - t.containerWidth || e > 0 && 0 === r)) return {
          stop: !t.settings.swipePropagation,
          prevent: !0
        };

        return {
          stop: !0,
          prevent: !0
        };
      }

      function i(e, i) {
        h.scrollTop -= i, h.scrollLeft -= e, R(t);
      }

      function n() {
        b = !0;
      }

      function r() {
        b = !1;
      }

      function l(t) {
        return t.targetTouches ? t.targetTouches[0] : t;
      }

      function o(t) {
        return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE));
      }

      function s(t) {
        if (o(t)) {
          g = !0;
          var e = l(t);
          u.pageX = e.pageX, u.pageY = e.pageY, d = new Date().getTime(), null !== f && clearInterval(f), t.stopPropagation();
        }
      }

      function a(n) {
        if (!g && t.settings.swipePropagation && s(n), !b && g && o(n)) {
          var r = l(n),
              a = {
            pageX: r.pageX,
            pageY: r.pageY
          },
              c = a.pageX - u.pageX,
              h = a.pageY - u.pageY;
          i(c, h), u = a;
          var f = new Date().getTime(),
              v = f - d;
          v > 0 && (p.x = c / v, p.y = h / v, d = f);
          var m = e(c, h),
              w = m.stop,
              Y = m.prevent;
          w && n.stopPropagation(), Y && n.preventDefault();
        }
      }

      function c() {
        !b && g && (g = !1, t.settings.swipeEasing && (clearInterval(f), f = setInterval(function () {
          t.isInitialized ? clearInterval(f) : p.x || p.y ? Math.abs(p.x) < .01 && Math.abs(p.y) < .01 ? clearInterval(f) : (i(30 * p.x, 30 * p.y), p.x *= .8, p.y *= .8) : clearInterval(f);
        }, 10)));
      }

      if (L.supportsTouch || L.supportsIePointer) {
        var h = t.element,
            u = {},
            d = 0,
            p = {},
            f = null,
            b = !1,
            g = !1;
        L.supportsTouch ? (t.event.bind(window, "touchstart", n), t.event.bind(window, "touchend", r), t.event.bind(h, "touchstart", s), t.event.bind(h, "touchmove", a), t.event.bind(h, "touchend", c)) : L.supportsIePointer && (window.PointerEvent ? (t.event.bind(window, "pointerdown", n), t.event.bind(window, "pointerup", r), t.event.bind(h, "pointerdown", s), t.event.bind(h, "pointermove", a), t.event.bind(h, "pointerup", c)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", n), t.event.bind(window, "MSPointerUp", r), t.event.bind(h, "MSPointerDown", s), t.event.bind(h, "MSPointerMove", a), t.event.bind(h, "MSPointerUp", c)));
      }
    }
  },
      H = function H(n, r) {
    var l = this;
    if (void 0 === r && (r = {}), "string" == typeof n && (n = document.querySelector(n)), !n || !n.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
    this.element = n, n.classList.add(m.main), this.settings = {
      handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollingThreshold: 1e3,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipePropagation: !0,
      swipeEasing: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !1,
      wheelSpeed: 1
    };

    for (var o in r) {
      l.settings[o] = r[o];
    }

    this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;

    var s = function s() {
      return n.classList.add(m.state.focus);
    },
        a = function a() {
      return n.classList.remove(m.state.focus);
    };

    this.isRtl = "rtl" === t(n).direction, this.isNegativeScroll = function () {
      var t = n.scrollLeft,
          e = null;
      return n.scrollLeft = -1, e = n.scrollLeft < 0, n.scrollLeft = t, e;
    }(), this.negativeScrollAdjustment = this.isNegativeScroll ? n.scrollWidth - n.clientWidth : 0, this.event = new W(), this.ownerDocument = n.ownerDocument || document, this.scrollbarXRail = i(m.element.rail("x")), n.appendChild(this.scrollbarXRail), this.scrollbarX = i(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
    var c = t(this.scrollbarXRail);
    this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), e(this.scrollbarXRail, {
      display: "block"
    }), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), e(this.scrollbarXRail, {
      display: ""
    }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i(m.element.rail("y")), n.appendChild(this.scrollbarYRail), this.scrollbarY = i(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
    var h = t(this.scrollbarYRail);
    this.scrollbarYRight = parseInt(h.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(h.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? p(this.scrollbarY) : null, this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth), e(this.scrollbarYRail, {
      display: "block"
    }), this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom), e(this.scrollbarYRail, {
      display: ""
    }), this.railYHeight = null, this.railYRatio = null, this.reach = {
      x: n.scrollLeft <= 0 ? "start" : n.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
      y: n.scrollTop <= 0 ? "start" : n.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
    }, this.isAlive = !0, this.settings.handlers.forEach(function (t) {
      return T[t](l);
    }), this.lastScrollTop = n.scrollTop, this.lastScrollLeft = n.scrollLeft, this.event.bind(this.element, "scroll", function (t) {
      return l.onScroll(t);
    }), R(this);
  };

  return H.prototype.update = function () {
    this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e(this.scrollbarXRail, {
      display: "block"
    }), e(this.scrollbarYRail, {
      display: "block"
    }), this.railXMarginWidth = u(t(this.scrollbarXRail).marginLeft) + u(t(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(t(this.scrollbarYRail).marginTop) + u(t(this.scrollbarYRail).marginBottom), e(this.scrollbarXRail, {
      display: "none"
    }), e(this.scrollbarYRail, {
      display: "none"
    }), R(this), y(this, "top", 0, !1, !0), y(this, "left", 0, !1, !0), e(this.scrollbarXRail, {
      display: ""
    }), e(this.scrollbarYRail, {
      display: ""
    }));
  }, H.prototype.onScroll = function (t) {
    this.isAlive && (R(this), y(this, "top", this.element.scrollTop - this.lastScrollTop), y(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = this.element.scrollTop, this.lastScrollLeft = this.element.scrollLeft);
  }, H.prototype.destroy = function () {
    this.isAlive && (this.event.unbindAll(), r(this.scrollbarX), r(this.scrollbarY), r(this.scrollbarXRail), r(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
  }, H.prototype.removePsClasses = function () {
    this.element.className = this.element.className.split(" ").filter(function (t) {
      return !t.match(/^ps([-_].+|)$/);
    }).join(" ");
  }, H;
});

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: PanelCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _piechart_ctrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piechart_ctrl */ "./piechart_ctrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelCtrl", function() { return _piechart_ctrl__WEBPACK_IMPORTED_MODULE_0__["PieChartCtrl"]; });

/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__);


Object(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__["loadPluginCss"])({
  dark: 'plugins/grafana-piechart-panel/styles/dark.css',
  light: 'plugins/grafana-piechart-panel/styles/light.css'
});


/***/ }),

/***/ "./piechart_ctrl.ts":
/*!**************************!*\
  !*** ./piechart_ctrl.ts ***!
  \**************************/
/*! exports provided: PieChartCtrl, MetricsPanelCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartCtrl", function() { return PieChartCtrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsPanelCtrl", function() { return PieChartCtrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grafana/app/core/utils/kbn */ "grafana/app/core/utils/kbn");
/* harmony import */ var grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grafana_app_core_time_series__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grafana/app/core/time_series */ "grafana/app/core/time_series");
/* harmony import */ var grafana_app_core_time_series__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_time_series__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rendering__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rendering */ "./rendering.ts");
/* harmony import */ var _legend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./legend */ "./legend.ts");



 // @ts-ignore





var PieChartCtrl =
/** @class */
function (_super) {
  PieChartCtrl.$inject = ["$scope", "$injector", "$rootScope"];

  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PieChartCtrl, _super);
  /** @ngInject */


  function PieChartCtrl($scope, $injector, $rootScope) {
    var _this = _super.call(this, $scope, $injector) || this;

    _this.$rootScope = $rootScope;
    _this.hiddenSeries = {};
    var panelDefaults = {
      pieType: 'pie',
      legend: {
        show: true,
        values: true
      },
      links: [],
      datasource: null,
      maxDataPoints: 3,
      interval: null,
      targets: [{}],
      cacheTimeout: null,
      nullPointMode: 'connected',
      legendType: 'Under graph',
      breakPoint: '50%',
      aliasColors: {},
      format: 'short',
      valueName: 'current',
      strokeWidth: 1,
      fontSize: '80%',
      combine: {
        threshold: 0.0,
        label: 'Others'
      }
    };

    lodash__WEBPACK_IMPORTED_MODULE_2___default.a.defaults(_this.panel, panelDefaults);

    lodash__WEBPACK_IMPORTED_MODULE_2___default.a.defaults(_this.panel.legend, panelDefaults.legend);

    _this.events.on('render', _this.onRender.bind(_this));

    _this.events.on('data-received', _this.onDataReceived.bind(_this));

    _this.events.on('data-error', _this.onDataError.bind(_this));

    _this.events.on('data-snapshot-load', _this.onDataReceived.bind(_this));

    _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));

    _this.setLegendWidthForLegacyBrowser();

    return _this;
  }

  PieChartCtrl.prototype.onInitEditMode = function () {
    this.addEditorTab('Options', 'public/plugins/grafana-piechart-panel/editor.html', 2);
    this.unitFormats = grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_3___default.a.getUnitFormats();
  };

  PieChartCtrl.prototype.setUnitFormat = function (subItem) {
    this.panel.format = subItem.value;
    this.render();
  };

  PieChartCtrl.prototype.onDataError = function () {
    this.series = [];
    this.render();
  };

  PieChartCtrl.prototype.changeSeriesColor = function (series, color) {
    series.color = color;
    this.panel.aliasColors[series.alias] = series.color;
    this.render();
  };

  PieChartCtrl.prototype.onRender = function () {
    this.data = this.parseSeries(this.series);
  };

  PieChartCtrl.prototype.parseSeries = function (series) {
    var _this = this;

    return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(this.series, function (serie, i) {
      return {
        label: serie.alias,
        data: serie.stats[_this.panel.valueName],
        color: _this.panel.aliasColors[serie.alias] || _this.$rootScope.colors[i],
        legendData: serie.stats[_this.panel.valueName]
      };
    });
  };

  PieChartCtrl.prototype.onDataReceived = function (dataList) {
    this.series = dataList.map(this.seriesHandler.bind(this));
    this.data = this.parseSeries(this.series);
    this.render(this.data);
  };

  PieChartCtrl.prototype.seriesHandler = function (seriesData) {
    var series = new grafana_app_core_time_series__WEBPACK_IMPORTED_MODULE_4___default.a({
      datapoints: seriesData.datapoints,
      alias: seriesData.target
    });
    series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);
    return series;
  };

  PieChartCtrl.prototype.getDecimalsForValue = function (value) {
    if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isNumber(this.panel.decimals)) {
      return {
        decimals: this.panel.decimals,
        scaledDecimals: null
      };
    }

    var delta = value / 2;
    var dec = -Math.floor(Math.log(delta) / Math.LN10);
    var magn = Math.pow(10, -dec);
    var norm = delta / magn; // norm is between 1.0 and 10.0

    var size;

    if (norm < 1.5) {
      size = 1;
    } else if (norm < 3) {
      size = 2; // special case for 2.5, requires an extra decimal

      if (norm > 2.25) {
        size = 2.5;
        ++dec;
      }
    } else if (norm < 7.5) {
      size = 5;
    } else {
      size = 10;
    }

    size *= magn; // reduce starting decimals if not needed

    if (Math.floor(value) === value) {
      dec = 0;
    }

    var result = {
      decimals: 0,
      scaledDecimals: 0
    };
    result.decimals = Math.max(0, dec);
    result.scaledDecimals = result.decimals - Math.floor(Math.log(size) / Math.LN10) + 2;
    return result;
  };

  PieChartCtrl.prototype.formatValue = function (value) {
    var decimalInfo = this.getDecimalsForValue(value);
    var formatFunc = grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_3___default.a.valueFormats[this.panel.format];

    if (formatFunc) {
      return formatFunc(value, decimalInfo.decimals, decimalInfo.scaledDecimals);
    }

    return value;
  };

  PieChartCtrl.prototype.link = function (scope, elem, attrs, ctrl) {
    Object(_rendering__WEBPACK_IMPORTED_MODULE_5__["default"])(scope, elem, attrs, ctrl);
  };

  PieChartCtrl.prototype.toggleSeries = function (serie) {
    if (this.hiddenSeries[serie.label]) {
      delete this.hiddenSeries[serie.label];
    } else {
      this.hiddenSeries[serie.label] = true;
    }

    this.render();
  };

  PieChartCtrl.prototype.onLegendTypeChanged = function () {
    this.setLegendWidthForLegacyBrowser();
    this.render();
  };

  PieChartCtrl.prototype.setLegendWidthForLegacyBrowser = function () {
    // @ts-ignore
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

    if (isIE11 && this.panel.legendType === 'Right side' && !this.panel.legend.sideWidth) {
      this.panel.legend.sideWidth = 150;
    }
  };

  PieChartCtrl.templateUrl = 'module.html';
  return PieChartCtrl;
}(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__["MetricsPanelCtrl"]);



/***/ }),

/***/ "./rendering.ts":
/*!**********************!*\
  !*** ./rendering.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return link; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_jquery_flot_pie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/jquery.flot.pie */ "./lib/jquery.flot.pie.js");
/* harmony import */ var _lib_jquery_flot_pie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_jquery_flot_pie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);


 //import './lib/jquery.flot';

function link(scope, elem, attrs, ctrl) {
  var data;
  var panel = ctrl.panel;
  elem = elem.find('.piechart-panel__chart');
  var $tooltip = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div id="tooltip">');
  ctrl.events.on('render', function () {
    if (panel.legendType === 'Right side') {
      render(false);
      setTimeout(function () {
        render(true);
      }, 50);
    } else {
      render(true);
    }
  });

  function getLegendHeight(panelHeight) {
    if (!ctrl.panel.legend.show || ctrl.panel.legendType === 'Right side' || ctrl.panel.legendType === 'On graph') {
      return 20;
    }

    if (ctrl.panel.legendType === 'Under graph' && ctrl.panel.legend.percentage || ctrl.panel.legend.values) {
      var breakPoint = parseInt(ctrl.panel.breakPoint, 10) / 100;
      var total = 23 + 20 * data.length;
      return Math.min(total, Math.floor(panelHeight * breakPoint));
    }

    return 0;
  }

  function formatter(label, slice) {
    var sliceData = slice.data[0][slice.data[0].length - 1];
    var decimal = 2;
    var start = "<div style=\"font-size:" + ctrl.panel.fontSize + ";text-align:center;padding:2px;\">" + label + "<br/>";

    if (ctrl.panel.legend.percentageDecimals) {
      decimal = ctrl.panel.legend.percentageDecimals;
    }

    if (ctrl.panel.legend.values && ctrl.panel.legend.percentage) {
      return start + ctrl.formatValue(sliceData) + '<br/>' + slice.percent.toFixed(decimal) + '%</div>';
    } else if (ctrl.panel.legend.values) {
      return start + ctrl.formatValue(sliceData) + '</div>';
    } else if (ctrl.panel.legend.percentage) {
      return start + slice.percent.toFixed(decimal) + '%</div>';
    } else {
      return start + '</div>';
    }
  }

  function noDataPoints() {
    var html = '<div class="datapoints-warning"><span class="small">No data points</span></div>';
    elem.html(html);
  }

  function addPieChart() {
    var width = elem.width();
    var height = ctrl.height - getLegendHeight(ctrl.height);
    var size = Math.min(width, height);
    var plotCanvas = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div></div>');
    var plotCss = {
      margin: 'auto',
      position: 'relative',
      paddingBottom: 20 + 'px',
      height: size + 'px'
    };
    plotCanvas.css(plotCss);
    var backgroundColor = jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').css('background-color');
    var options = {
      legend: {
        show: false
      },
      series: {
        pie: {
          radius: 1,
          innerRadius: 0,
          show: true,
          stroke: {
            color: backgroundColor,
            width: parseFloat(ctrl.panel.strokeWidth).toFixed(1)
          },
          label: {
            show: ctrl.panel.legend.show && ctrl.panel.legendType === 'On graph',
            formatter: formatter
          },
          highlight: {
            opacity: 0.0
          },
          combine: {
            threshold: ctrl.panel.combine.threshold,
            label: ctrl.panel.combine.label
          }
        }
      },
      grid: {
        hoverable: true,
        clickable: false
      }
    };

    if (panel.pieType === 'donut') {
      options.series.pie.innerRadius = 0.5;
    }

    data = ctrl.data;

    for (var i = 0; i < data.length; i++) {
      var series = data[i]; // if hidden remove points

      if (ctrl.hiddenSeries[series.label]) {
        series.data = {};
      }
    }

    if (panel.legend.sort) {
      if (ctrl.panel.valueName !== panel.legend.sort) {
        panel.legend.sort = ctrl.panel.valueName;
      }

      if (panel.legend.sortDesc === true) {
        data.sort(function (a, b) {
          return b.legendData - a.legendData;
        });
      } else {
        data.sort(function (a, b) {
          return a.legendData - b.legendData;
        });
      }
    }

    elem.html(plotCanvas); // @ts-ignore

    jquery__WEBPACK_IMPORTED_MODULE_2___default.a.plot(plotCanvas, data, options);
    plotCanvas.bind('plothover', function (event, pos, item) {
      if (!item) {
        $tooltip.detach();
        return;
      }

      var body;
      var percent = parseFloat(item.series.percent).toFixed(2);
      var formatted = ctrl.formatValue(item.series.data[0][1]);
      body = '<div class="piechart-tooltip-small"><div class="piechart-tooltip-time">';
      body += '<div class="piechart-tooltip-value">' + lodash__WEBPACK_IMPORTED_MODULE_0___default.a.escape(item.series.label) + ': ' + formatted;
      body += ' (' + percent + '%)' + '</div>';
      body += '</div></div>';
      $tooltip.html(body).place_tt(pos.pageX + 20, pos.pageY);
    });
  }

  function render(incrementRenderCounter) {
    if (!ctrl.data) {
      return;
    }

    data = ctrl.data;

    if (0 === ctrl.data.length) {
      noDataPoints();
    } else {
      addPieChart();
    }

    if (incrementRenderCounter) {
      ctrl.renderingCompleted();
    }
  }
}

/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_angular__;

/***/ }),

/***/ "grafana/app/core/time_series":
/*!***************************************!*\
  !*** external "app/core/time_series" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_time_series__;

/***/ }),

/***/ "grafana/app/core/utils/kbn":
/*!*************************************!*\
  !*** external "app/core/utils/kbn" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_utils_kbn__;

/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map