define([
  'lodash',
  'app/plugins/sdk',
  'app/core/utils/kbn',
  'app/core/time_series',
  './rendering',
  './legend',
],
function (_, sdk, kbn, TimeSeries, rendering) {
  'use strict';

    // Set and populate defaults
  var panelDefaults = {
    pieType: 'pie',
    legend: {
      show: true, // disable/enable legend
      values: false, // disable/enable legend values
      min: false,
      max: false,
      current: false,
      total: false,
      avg: false
    },
    links: [],
    datasource: null,
    maxDataPoints: 3,
    interval: null,
    targets: [{}],
    cacheTimeout: null,
    nullText: null,
    nullPointMode: 'connected',
    legendType: 'rightSide',
    format: 'short'
  };


  var PieChartCtrl = (function(_super) {

    function PieChartCtrl($scope, $injector, $rootScope) {
      _super.call(this, $scope, $injector);
      this.$rootScope = $rootScope;

      _.defaults(this.panel, panelDefaults);
      _.defaults(this.panel.legend, panelDefaults.legend);
    }

    PieChartCtrl.prototype = Object.create(_super.prototype);
    PieChartCtrl.prototype.constructor = PieChartCtrl;

    PieChartCtrl.templateUrl = 'public/plugins/piechart/module.html';

    PieChartCtrl.prototype.initEditMode = function() {
      _super.prototype.initEditMode.call(this);
      this.icon =  "fa fa-dashboard";
      this.addEditorTab('Options', 'public/plugins/piechart/editor.html', 2);
      this.unitFormats = kbn.getUnitFormats();
    };

    PieChartCtrl.prototype.setUnitFormat = function(subItem) {
      this.panel.format = subItem.value;
      this.render();
    };

    PieChartCtrl.prototype.refreshData = function(datasource) {
      return this.issueQueries(datasource)
      .then(this.dataHandler.bind(this))
      .catch(function(err) {
        this.series = [];
        this.render();
        throw err;
      }.bind(this));
    };

    PieChartCtrl.prototype.dataHandler = function(results) {
      this.series = _.map(results.data, this.seriesHandler.bind(this));
      this.render();
    };

    PieChartCtrl.prototype.seriesHandler = function(seriesData) {
      var series = new TimeSeries({
        datapoints: seriesData.datapoints,
        alias: seriesData.target
      });

      series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);
      return series;
    };

    PieChartCtrl.prototype.getDecimalsForValue = function(value) {
      if (_.isNumber(this.panel.decimals)) {
        return { decimals: this.panel.decimals, scaledDecimals: null };
      }

      var delta = value / 2;
      var dec = -Math.floor(Math.log(delta) / Math.LN10);

      var magn = Math.pow(10, -dec);
      var norm = delta / magn; // norm is between 1.0 and 10.0
      var size;

      if (norm < 1.5) {
        size = 1;
      } else if (norm < 3) {
        size = 2;
        // special case for 2.5, requires an extra decimal
        if (norm > 2.25) {
          size = 2.5;
          ++dec;
        }
      } else if (norm < 7.5) {
        size = 5;
      } else {
        size = 10;
      }

      size *= magn;

      // reduce starting decimals if not needed
      if (Math.floor(value) === value) { dec = 0; }

      var result = {};
      result.decimals = Math.max(0, dec);
      result.scaledDecimals = result.decimals - Math.floor(Math.log(size) / Math.LN10) + 2;

      return result;
    };

    PieChartCtrl.prototype.render = function() {
      var data = [];

      if (this.series && this.series.length > 0) {
        for (var i=0; i < this.series.length; i++) {
          data.push({label: this.series[i].alias, data: this.series[i].stats.current, color: this.$rootScope.colors[i]});
        }
      }

      this.data = data;
      this.broadcastRender(data);
    };

    PieChartCtrl.prototype.setValues = function(data) {
      data.flotpairs = [];

      if (this.series && this.series.length > 0) {
        var lastPoint = _.last(this.series[0].datapoints);
        var lastValue = _.isArray(lastPoint) ? lastPoint[0] : null;

        if (_.isString(lastValue)) {
          data.value = 0;
          data.valueFormated = lastValue;
          data.valueRounded = 0;
        } else {
          data.value = this.series[0].stats[this.panel.valueName];
          data.flotpairs = this.series[0].flotpairs;

          var decimalInfo = this.getDecimalsForValue(data.value);
          data.valueFormated = formatValue(data.value);
          data.valueRounded = kbn.roundValue(data.value, decimalInfo.decimals);
        }
      }

      if (data.value === null || data.value === void 0) {
        data.valueFormated = "no value";
      }
    };

    PieChartCtrl.prototype.formatValue = function(value) {
      var decimalInfo = this.getDecimalsForValue(value);
      var formatFunc = kbn.valueFormats[this.panel.format];
      if (formatFunc) {
        return formatFunc(value, decimalInfo.decimals, decimalInfo.scaledDecimals);
      }
      return value;
    };

    PieChartCtrl.prototype.removeValueMap = function(map) {
      var index = _.indexOf(this.panel.valueMaps, map);
      this.panel.valueMaps.splice(index, 1);
      this.render();
    };

    PieChartCtrl.prototype.addValueMap = function() {
      this.panel.valueMaps.push({value: '', op: '=', text: '' });
    };

    PieChartCtrl.prototype.legendValuesOptionChanged = function() {
      var legend = this.panel.legend;
      legend.values = legend.min || legend.max || legend.avg || legend.current || legend.total;
      this.render();
    };

    PieChartCtrl.prototype.link = function(scope, elem, attrs, ctrl) {
      rendering.link(scope, elem, attrs, ctrl);
    };

    return PieChartCtrl;

  })(sdk.MetricsPanelCtrl);

  return {
    PanelCtrl: PieChartCtrl
  };
});
