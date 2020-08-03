import { TemplateSrv } from 'grafana/app/features/templating/template_srv';
import { MetricsPanelCtrl } from 'grafana/app/plugins/sdk';
import _ from 'lodash';
import kbn from 'grafana/app/core/utils/kbn';
// @ts-ignore
import TimeSeries from 'grafana/app/core/time_series';
import rendering from './rendering';
import './legend';

class PieChartCtrl extends MetricsPanelCtrl {
  static templateUrl = 'module.html';
  $rootScope: any;
  hiddenSeries: any;
  unitFormats: any;
  series: any;
  data: any;
  templateSrv: TemplateSrv;

  /** @ngInject */
  constructor($scope: any, $injector: any, $rootScope: any, templateSrv: any) {
    super($scope, $injector);
    this.$rootScope = $rootScope;
    this.hiddenSeries = {};
    this.templateSrv = templateSrv;
    //this.$document = $document;
    const panelDefaults = {
      pieType: 'pie',
      legend: {
        show: true, // disable/enable legend
        values: true,
        regexPattern: '',
        regexData: [],
        dataList: [],
        applySeriesName: false,
      },
      links: [],
      // prettier-ignore
      piechartDrilldownData : [],
      datasource: null,
      // prettier-ignore
      seriesnameSuggestion: ["{__series_name}"],
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
        label: 'Others',
      },
    };

    _.defaults(this.panel, panelDefaults);
    _.defaults(this.panel.legend, panelDefaults.legend);
    _.defaults(this.panel.piechartDrilldownData, panelDefaults.piechartDrilldownData);
    _.defaults(this.panel.seriesnameSuggestion, panelDefaults.seriesnameSuggestion);

    // prettier-ignore

    this.events.on('render', this.onRender.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-error', this.onDataError.bind(this));
    this.events.on('data-snapshot-load', this.onDataReceived.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));

    this.setLegendWidthForLegacyBrowser();
  }

  onInitEditMode() {
    this.addEditorTab('Options', 'public/plugins/grafana-piechart-panel/editor.html', 2);
    this.unitFormats = kbn.getUnitFormats();
  }
  // prettier-ignore
  addPiechatDatalink() {
    this.render();
    //Add the new item to the Array.
    const item: any = {};
    item.datalinktitle = item.datalinktitle;
    item.url = item.url;
    item.datalinkcheck = item.datalinkcheck;
    this.panel.piechartDrilldownData.push(item);
    //Clear the TextBoxes.
    item.datalinktitle = "";
    item.url = "";
    item.datalinkcheck = "";
  }
  // prettier-ignore
  currentindex: any = "";
  caretPoint: any = 0;
  suggestionList: any = [];
  getSuggestions(e: any, name: any, index1: any, item: any) {
    this.currentindex = index1;
    if (!(this.suggestionList && this.suggestionList.length)) {
      if (e.key === '=' || e.key === '$' || e.key === '&' || (e.keyCode === 32 && e.ctrlKey)) {
        e.preventDefault();
        this.caretPoint = e.target.selectionEnd;
        this.suggestionList = [this.panel.seriesnameSuggestion, ...this.templateSrv.variables];
      } else {
        this.suggestionList = null;
      }
    }

    if (e.key === 'Backspace' || e.key === 'Escape') {
      this.suggestionList = null;
    }
  }
  // Calculate the suggestion box position by cursor position
  getSuggestionPosition() {
    const left = this.caretPoint * 0.5;
    return `${left}em`;
  }
  insertData(url: string, index: number, rem: number, data: any) {
    return url.slice(0, index) + data + url.slice(index + Math.abs(rem));
  }
  selectSuggestion(data: any, index1: any, item: any) {
    this.panel.piechartDrilldownData.forEach((item: any, index: any) => {
      item.datalinktitle = item.datalinktitle;
      if (index1 === index) {
        item.url = this.insertData(item.url, this.caretPoint, 0, data);
      }
      item.datalinkcheck = item.datalinkcheck;
      this.panel.piechartDrilldownData.splice(index, 1, item);
      this.render();
    });
    this.suggestionList = null;
  }
  removePiechatDatalink(index: any) {
    this.panel.piechartDrilldownData.splice(index, 1);
    this.render();
  }
  // prettier-ignore
  closeSuggestionPopup() {
    this.suggestionList = null;
  }
  setUnitFormat(subItem: any) {
    this.panel.format = subItem.value;
    this.render();
  }

  onDataError() {
    this.series = [];
    this.render();
  }

  changeSeriesColor(series: any, color: any) {
    series.color = color;
    this.panel.aliasColors[series.alias] = series.color;
    this.render();
  }

  onRender() {
    this.data = this.parseSeries(this.series);
  }

  parseSeries(series: any) {
    return _.map(this.series, (serie, i) => {
      return {
        label: serie.label,
        alias: serie.alias,
        data: serie.stats[this.panel.valueName],
        color: this.panel.aliasColors[serie.alias] || this.$rootScope.colors[i],
        legendData: serie.stats[this.panel.valueName],
        legend: serie.legend,
        allIsNull: serie.allIsNull,
        stats: serie.stats,
      };
    });
  }

  onDataReceived(dataList: any) {
    this.series = dataList.map(this.seriesHandler.bind(this));
    this.data = this.parseSeries(this.series);
    this.render(this.data);
  }

  seriesHandler(seriesData: any) {
    const series = new TimeSeries({
      datapoints: seriesData.datapoints,
      alias: seriesData.target,
    });

    series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);
    return series;
  }

  getDecimalsForValue(value: any) {
    if (_.isNumber(this.panel.decimals)) {
      return { decimals: this.panel.decimals, scaledDecimals: null };
    }

    const delta = value / 2;
    let dec = -Math.floor(Math.log(delta) / Math.LN10);

    const magn = Math.pow(10, -dec);
    const norm = delta / magn; // norm is between 1.0 and 10.0
    let size;

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
    if (Math.floor(value) === value) {
      dec = 0;
    }

    const result = {
      decimals: 0,
      scaledDecimals: 0,
    };
    result.decimals = Math.max(0, dec);
    result.scaledDecimals = result.decimals - Math.floor(Math.log(size) / Math.LN10) + 2;

    return result;
  }

  formatValue(value: any) {
    const decimalInfo = this.getDecimalsForValue(value);
    const formatFunc = kbn.valueFormats[this.panel.format];
    if (formatFunc) {
      return formatFunc(value, decimalInfo.decimals, decimalInfo.scaledDecimals);
    }
    return value;
  }

  link(scope: any, elem: any, attrs: any, ctrl: any, templateSrv: any) {
    rendering(scope, elem, attrs, ctrl, templateSrv);
  }

  toggleSeries(serie: any) {
    const selectedSeriesLabel = serie.alias ? serie.alias : serie.label;
    if (this.hiddenSeries[selectedSeriesLabel]) {
      delete this.hiddenSeries[selectedSeriesLabel];
    } else {
      this.hiddenSeries[selectedSeriesLabel] = true;
    }
    this.render();
  }

  onLegendTypeChanged() {
    this.setLegendWidthForLegacyBrowser();
    this.render();
  }

  setLegendWidthForLegacyBrowser() {
    // @ts-ignore
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    if (isIE11 && this.panel.legendType === 'Right side' && !this.panel.legend.sideWidth) {
      this.panel.legend.sideWidth = 150;
    }
  }
}

export { PieChartCtrl, PieChartCtrl as MetricsPanelCtrl };
