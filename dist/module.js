'use strict';

System.register(['lodash', './piechart_ctrl'], function (_export, _context) {
  var _, PieChartCtrl;

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }, function (_piechart_ctrl) {
      PieChartCtrl = _piechart_ctrl.PieChartCtrl;
    }],
    execute: function () {
      _export('PanelCtrl', PieChartCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
