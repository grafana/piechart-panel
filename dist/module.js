"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PanelCtrl", {
  enumerable: true,
  get: function get() {
    return _piechart_ctrl.PieChartCtrl;
  }
});

var _piechart_ctrl = require("./piechart_ctrl");

var _sdk = require("app/plugins/sdk");

(0, _sdk.loadPluginCss)({
  dark: 'plugins/grafana-piechart-panel/css/piechart.dark.css',
  light: 'plugins/grafana-piechart-panel/css/piechart.light.css'
});
//# sourceMappingURL=module.js.map
