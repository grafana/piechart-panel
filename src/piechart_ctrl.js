import {MetricsPanelCtrl} from 'app/plugins/sdk';
import _ from 'lodash';
import $ from 'jquery';
import kbn from 'app/core/utils/kbn';
import TimeSeries from 'app/core/time_series';
import rendering from './rendering';
import legend from './legend';

import coreModule from 'app/core/core_module';

import Tether from 'tether';

// Assigned as a global due to bs-typeahead angularjs problems
var _bs;

export class PieChartCtrl extends MetricsPanelCtrl {
  constructor($scope, $injector, $rootScope, $compile, backendSrv, linkSrv) {
    super($scope, $injector);

    this.$rootScope = $rootScope;
    this.linkSrv = linkSrv;
    this.backendSrv = backendSrv;
    this.$scope = $scope;
    this.$compile = $compile;

    _bs = backendSrv;

    var panelDefaults = {
      pieType: 'pie',
      legend: {
	// disable/enable legend
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
      aliasColors: {},
      format: 'short',
      valueName: 'current',
      strokeWidth: 1,
      fontSize: '80%',

      clickable: false,
      cevents: [],

      mappingTypes: [
        {name: 'Value to Text', value: 1},
        {name: 'Range to Text', value: 2},
      ],
      mappingType: 1,
      mappingDataTypes: [
        {name: 'Numeric', value: 1},
        {name: 'String', value: 2},
        {name: 'IP address', value: 3},
      ],
      mappingDataType: 1,
      valueMaps: [
        { value: 'null', op: '=', text: 'N/A' }
      ],
      rangeMaps: [
        { from: 'null', to: 'null', text: 'N/A' }
      ],

      mappingHelpIndex: null,
    };

    coreModule.filter('startFrom', function() {
      return function(input, start) {
        start = +start;
        return input.slice(start);
      };
    });
    this.currentValuePage = 0;
    this.currentRangePage = 0;
    this.pageSize = 10;

    _.defaults(this.panel, panelDefaults);
    _.defaults(this.panel.legend, panelDefaults.legend);

    this.events.on('render', this.onRender.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-error', this.onDataError.bind(this));
    this.events.on('data-snapshot-load', this.onDataReceived.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
  }

  numberOfPages(isRange) {
    return Math.floor(((isRange)?this.panel.rangeMaps.length:this.panel.valueMaps.length)/this.pageSize);
  } 

  onInitEditMode() {
    this.addEditorTab('Options', 'public/plugins/grafana-piechart-panel/editor.html', 2);
    this.addEditorTab('Value Mappings', 'public/plugins/grafana-piechart-panel/mappings.html', 3);
    this.addEditorTab('Events', 'public/plugins/grafana-piechart-panel/events.html', 4);
    this.unitFormats = kbn.getUnitFormats();
  }

  setUnitFormat(subItem) {
    this.panel.format = subItem.value;
    this.render();
  }

  onDataError() {
    this.series = [];
    this.render();
  }

  changeSeriesColor(series, color) {
    series.color = color;
    this.panel.aliasColors[series.alias] = series.color;
    this.render();
  }

  onRender() {
    this.data = this.parseSeries(this.series);
  }

  parseSeries(series) {
    return _.map(this.series, (serie, i) => {
      return {
        label: serie.alias,
        data: serie.stats[this.panel.valueName],
        color: this.panel.aliasColors[serie.alias] || this.$rootScope.colors[i]
      };
    });
  }

  onDataReceived(dataList) {
    this.series = dataList.map(this.seriesHandler.bind(this));
    this.data = this.parseSeries(this.series);
    this.render(this.data);
  }

  seriesHandler(seriesData) {
    var series = new TimeSeries({
      datapoints: seriesData.datapoints,
      alias: seriesData.target
    });

    series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);
    return series;
  }

  getDecimalsForValue(value) {
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
  }

  formatValue(value) {
    var decimalInfo = this.getDecimalsForValue(value);
    var formatFunc = kbn.valueFormats[this.panel.format];
    if (formatFunc) {
      return formatFunc(value, decimalInfo.decimals, decimalInfo.scaledDecimals);
    }
    return value;
  }

  link(scope, elem, attrs, ctrl) {
    rendering(scope, elem, attrs, ctrl);
  }

  searchDashboards(queryStr, callback) {
    var elem = (this === null || typeof this === undefined) ? _bs : this.backendSrv;
    elem.search({query: queryStr}).then(function(hits) {
      var dashboards = _.map(hits, function(dash) {
        return dash.title;
      });

      callback(dashboards);
    });
  }

  dashboardChanged(link) {
    var elem = (this === null || typeof this === undefined) ? _bs : this.backendSrv;
    elem.search({query: link.dashboard}).then(function(hits) {
      var dashboard = _.findWhere(hits, {title: link.dashboard});
      if (dashboard) {
        link.dashUri = dashboard.uri;
        link.title = dashboard.title;
      }
    });

    this.refresh();
  }

  deleteLink(link) {
    this.panel.cevents = _.without(this.panel.cevents, link);
  }

  addLink() {
    this.panel.cevents.push({
      type: 'dashboard',
    });
  }

  removeMap(map, isRange) {
    var index = _.indexOf((isRange)?this.panel.rangeMaps:this.panel.valueMaps, map);
    if (isRange) {
      this.panel.rangeMaps.slice(index, 1);
    } else {
      this.panel.valueMaps.splice(index, 1);
    }
    this.render();
  }

  addMap(isRange) {
    if (isRange) {
      this.panel.rangeMaps.push({from: '', to: '', text: ''});
    } else {
      this.panel.valueMaps.push({value: '', op: '=', text: ''});
    }
  }
  
  cleanMapList(isRange) {
    var l = (isRange)?this.panel.rangeMaps.length:this.panel.valueMaps.length;
    for (var i=0; i<l; i++) {
      if (isRange) {
        this.panel.rangeMaps.splice(0,1);
      } else {
        this.panel.valueMaps.splice(0,1);
      }
    }
    this.render();
  }

  cancelImportMapList(isRange) {
    this.importContainer._reader.abort(); 
  }

  importMapList(isRange) {
    this.currentValuePage = 0;
    this.currentRangePage = 0;

    this.importContainer = document.createElement("input");
    this.importContainer.setAttribute("type","file");
    this.importContainer.setAttribute("name","files[]");
    this.importContainer.setAttribute("multiple","");
    this.importContainer._controller = this;
    this.importContainer.addEventListener('change', function(evt) {
      var files = evt.target.files;
      for (var i=0, f; f = files[i]; i++) {
        // Only process csv files
        if (!f.type.match(".*csv")) {
          continue;
        }
        this._reader = new FileReader();
        this._reader.onload = (function(_file, _input) {
          return function(e) {
            document.getElementById("import-loading").setAttribute("style","display: inline-block;");
            document.getElementById("import-button").setAttribute("style","display: none;");
            document.getElementById("cancel-import-button").setAttribute("style","display: inline-block;");
            var l = e.target.result.split("\n");
            for (var i=0; i<l.length; i++) {
              var f = l[i].split(";");
              // Value to Text
              if (!isRange && f.length == 2) {
                _input._controller.panel.valueMaps.push({value: f[0], op: '=', text: f[1]});
              }
              // Range to Text
              else if (isRange && f.length == 3) {
                _input._controller.panel.rangeMaps.push({from: f[0], to: f[1], text: f[2]});
              }
            }
          };
        })(f, this);
        // In case of abort from user action, remove previous data
        this._reader.onabort = (function(_input) {
          return function(e) {
              document.getElementById("import-loading").setAttribute("style","display: none;");
              document.getElementById("import-button").setAttribute("style","display: inline-block;");
              document.getElementById("cancel-import-button").setAttribute("style","display: none;");
              _input._controller.$scope.$apply();
              _input._controller.render();
              _input.remove();
          };
        })(this);
        // Once finished csv file processing, remove temporary input element
        this._reader.onloadend = (function(_input) { 
          return function(e) {
            if (e.target.readyState == FileReader.DONE) {
              setTimeout(function(obj) {
                document.getElementById("import-loading").setAttribute("style","display: none;");
                document.getElementById("import-button").setAttribute("style","display: inline-block;");
                document.getElementById("cancel-import-button").setAttribute("style","display: none;");
                obj._controller.$scope.$apply();
                obj._controller.render();
                obj.remove();
              }, 3000, _input);
            }
          };
        })(this);
        // Read csv file as text (utf-8)
        this._reader.readAsText(f);
      }
    }, false);
    this.importContainer.click();
  }

  handle_click_event(el, evt, value) {
    if (this.panel.clickable && this.panel.cevents.length == 1) {
      var info = this.linkSrv.getPanelLinkAnchorInfo(this.panel.cevents[0], this.panel.scopedVars);
      info.href = this.replaceAll(info.href, "{{value}}", value);
      window.open(info.href, (info.target != "")?info.target:"_self");
    } else if (this.panel.clickable && this.panel.cevents.length > 1) {
      var $panelContainer = $(el).parents(".panel-container");
      var $menu = null;
      var menuScope = null;
      var teather = null;
      var timeout = null;

      if (!$.contains(document, evt.target)) {
       return;
      }

      if ($menu) {
        this.event_panel_dismiss($menu, $panelContainer, menuScope, teather, timeout);
        return;
      }

      var template = '<div class="panel-menu small">';
      template += '<div class="panel-menu-row">';
      _.each(this.panel.cevents, function(link) {
        var info = this.linkSrv.getPanelLinkAnchorInfo(link, this.panel.scopedVars); 
        info.href = this.replaceAll(info.href, "{{value}}", value);
        template += '<a class="panel-menu-link" href="' + info.href + '" target="' + info.target + '">' + info.title + '</a>';
      });

      $menu = $(template);
      $menu.mouseleave(function() {
        this.event_panel_dismiss($menu, $panelContainer, menuScope, teather, timeout, 1000);
      });
      menuScope = this.$scope.$new();
      menuScope.extendedMenu = this.getExtendedMenu();
      menuScope.dismiss = function() {
        this.event_panel_dismiss($menu, $panelContainer, menuScope, teather, timeout, null, true);
      };
      $(".panel-container").removeClass('panel-highlight');
      $panelContainer.toggleClass('panel-highlight');
      $('.panel-menu').remove();
      $(el).append($menu);
      this.$scope.$apply(function() {
        this.$compile($menu.contents())(menuScope);
        teather = new Tether({
          element: $menu,
          target: $panelContainer,
          attachment: 'bottom center',
          targetAttachment: 'top center',
          constraints: [{
	    to: 'window',
	    attachment: 'together',
	    pin: true
          }]
        });
      });
      this.event_panel_dismiss($menu, $panelContainer, menuScope, teather, timeout, 2200);
    }
  }

  event_panel_dismiss($menu, $panelContainer, menuScope, teather, timeout, time, force) {
    clearTimeout(timeout);
    timeout = null;

    if (time) {
      timeout = setTimeout(function() {
        this.event_panel_dismiss($menu, $panelContainer, menuScope, teather, timeout);
      }, time);
      return;
    }

    // if hovering or draging pospone close
    if (force !== true) {
      if ($menu.is(':hover') || this.$scope.ctrl.dashboard.$$panelDragging) {
        this.event_panel_dismiss($menu, $panelContainer, menuScope, teather, timeout, 2200);
        return;
      }
    }

    if (menuScope) {
      teather.destroy();
      $menu.unbind();
      $menu.remove();
      menuScope.$destroy();
      menuScope = null;
      $menu = null;
      $panelContainer.removeClass('panel-highlight');
    }
  }

  toggleMappingHelp(index) {
    if (this.panel.mappingHelpIndex === index) {
      this.panel.mappingHelpIndex = null;
      return;
    }
    this.panel.mappingHelpIndex = index;
  }

  replaceAll(str, find, replace) {
    var escaped = function(f) {
      return f.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };

    return str.replace(new RegExp(escaped(find), 'g'), replace);
  }
}

PieChartCtrl.templateUrl = 'module.html';
