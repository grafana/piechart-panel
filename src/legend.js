import angular from 'angular';
import _ from  'lodash';
import kbn from 'app/core/utils/kbn';
import $ from  'jquery';
import 'jquery.flot';
import 'jquery.flot.time';

angular.module('grafana.directives').directive('piechartLegend', function(popoverSrv, $timeout) {
  return {
    link: function(scope, elem) {
      var $container = $('<section class="graph-legend"></section>');
      var firstRender = true;
      var ctrl = scope.ctrl;
      var panel = ctrl.panel;
      var data;
      var seriesList;
      var i;

      ctrl.events.on('render', function() {
        data = ctrl.series;
        if (data) {
          for(var i in data) {
            data[i].color = ctrl.data[i].color;
          }
          render();
        }
      });

      function mapNumeric(series, isRange) {
        var label = series.label;

        if (!isNaN(label)) {
          var _value = parseInt(label, 10);
          _.each( (isRange) ? ctrl.panel.rangeMaps : ctrl.panel.valueMaps, function(map) {
            var cond = false;
            if (isRange) {
              if (!isNaN(map.from) && !isNaN(map.to)) {
                var _from = parseInt(map.from, 10);
                var _to = parseInt(map.to, 10);
                cond = (_value >= _from && _value <= _to);
              }
            } else {
              if (!isNaN(map.value)) {
                var _ref = parseInt(map.value, 10);
                cond = (_value == _ref);
              }
            }
            if (cond) {
              label = ctrl.replaceAll(map.text, "{{value}}", _value);
              return false;
            }
          });
        }

        return label;
      }
      
      function mapString(series, isRange) {
        var label = series.label;

        if (isNaN(label)) {
          _.each( (isRange) ? ctrl.panel.rangeMaps : ctrl.panel.valueMaps, function(map) {
            var cond = false;
            if (isRange) {
              if (isNaN(map.from) && isNaN(map.to)) {
                cond = (label == map.from || label == map.to);
              }
            } else {
              if (isNaN(map.value)) {
                cond = (label == map.value);
              }
            }

            if (cond) {
              label = ctrl.replaceAll(map.text, "{{value}}", label);
              return false;
            }
          });
        }

        return label;
      }

      function mapIpAddress(series, isRange) {
        var ip2long = function(ip) {
          var components;
          if (components = ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)) {
            var iplong = 0, power = 1;
            for (var i=4; i>=1; i-=1) {
              iplong += power * parseInt(components[i],10);
              power *= 256;
            }
            return iplong;
          } else {
            return -1;
          }
        };

        var label = series.label;
        var _value = ip2long(label);
        if (_value >= 0) {
          _.each( (isRange) ? ctrl.panel.rangeMaps : ctrl.panel.valueMaps, function(map) {
            var cond = false;
            if (isRange) {
              var mask_from, base_ip_from, mask_to, base_ip_to;
              if ( (mask_from = map.from.match(/^(.*?)\/(\d{1,2})$/)) && ((base_ip_from=ip2long(mask_from[1])) >= 0) && (mask_to = map.to.match(/^(.*?)\/(\d{1,2})$/)) && ((base_ip_to=ip2long(mask_to[1])) >= 0) ) {
                var freedom_from = Math.pow(2, 32 - parseInt(mask_from[2], 10));
                var freedom_to = Math.pow(2, 32 - parseInt(mask_to[2], 10));
                cond = ( (_value > base_ip_from) && (_value < base_ip_to + freedom_to - 1) );
              } else {
                cond = false;
              }
            } else {
              var mask, base_ip;
              if ( (mask = map.value.match(/^(.*?)\/(\d{1,2})$/)) && ((base_ip=ip2long(mask[1])) >= 0) ) {
                var freedom = Math.pow(2, 32 - parseInt(mask[2], 10));
                cond = ( (_value > base_ip) && (_value < base_ip + freedom - 1) );
              } else {
                cond = false;
              }
            }
            
            if (cond) {
              label = ctrl.replaceAll(map.text, "{{value}}", label);
              return false;
            }
          });
        }

        return label;
      }

      function mapLegendValues(series) {
        // detect value mappings
        var label = series.label;

        // Value to Text
        if (ctrl.panel.mappingType == 1) {
          // Numeric
          if (ctrl.panel.mappingDataType == 1) {
            label = mapNumeric(series, false);
          }
          // String
          else if (ctrl.panel.mappingDataType == 2) {
            label = mapString(series, false);
          }
          // IP Address
          else if (ctrl.panel.mappingDataType == 3) {
            label = mapIpAddress(series, false);
          }
        }
        // Range to Text
        else if (ctrl.panel.mappingType == 2) {
          if (ctrl.panel.mappingDataType == 1) {
            label = mapNumeric(series, true);
          }
          // String
          else if (ctrl.panel.mappingDataType == 2) {
            label = mapString(series, true);
          }
          // IP Address
          else if (ctrl.panel.mappingDataType == 3) {
            label = mapIpAddress(series, true);
          }
        }

        return label;
      }

      function getSeriesIndexForElement(el) {
        return el.parents('[data-series-index]').data('series-index');
      }

      function toggleSeries(e) {
        var el = $(e.currentTarget);
        var index = getSeriesIndexForElement(el);
        var seriesInfo = seriesList[index];
        ctrl.toggleSeries(seriesInfo, e);
      }

      function sortLegend(e) {
        var el = $(e.currentTarget);
        var stat = el.data('stat');

        if (stat !== panel.legend.sort) { panel.legend.sortDesc = null; }

        // if already sort ascending, disable sorting
        if (panel.legend.sortDesc === false) {
          panel.legend.sort = null;
          panel.legend.sortDesc = null;
          render();
          return;
        }

        panel.legend.sortDesc = !panel.legend.sortDesc;
        panel.legend.sort = stat;
        render();
      }

      function openColorSelector(e) {
        // if we clicked inside poup container ignore click
        if ($(e.target).parents('.popover').length) {
          return;
        }

        var el = $(e.currentTarget).find('.fa-minus');
        var index = getSeriesIndexForElement(el);
        var series = seriesList[index];

        $timeout(function() {
          popoverSrv.show({
            element: el[0],
            position: 'bottom center',
            template: '<gf-color-picker></gf-color-picker>',
            model: {
              series: series,
              toggleAxis: function() {},
              colorSelected: function(color) {
                ctrl.changeSeriesColor(series, color);
              }
            },
          });
        });
      }

      function getTableHeaderHtml(statName) {
        if (!panel.legend[statName]) { return ""; }
        var html = '<th class="pointer" data-stat="' + statName + '">' + statName;

        if (panel.legend.sort === statName) {
          var cssClass = panel.legend.sortDesc ? 'fa fa-caret-down' : 'fa fa-caret-up' ;
          html += ' <span class="' + cssClass + '"></span>';
        }

        return html + '</th>';
      }

      function render() {
        if(panel.legendType === 'On graph') {
          $container.empty();
          return;
        }

        if (firstRender) {
          elem.append($container);
          $container.on('click', '.graph-legend-icon', openColorSelector);
          $container.on('click', '.graph-legend-alias', function(e) {
            ctrl.handle_click_event(this, e, $(this).find("a").html().trim());
          });
          $container.on('click', 'th', sortLegend);
          firstRender = false;
        }

        seriesList = data;

        $container.empty();

        // Set min-width if side style and there is a value, otherwise remove the CSS propery
        var width = panel.legendType === 'Right side' && panel.legend.sideWidth ? panel.legend.sideWidth + "px" : "";
        $container.css("min-width", width);

        var tableLayout = panel.legendType === 'Right side' && panel.legend.values;
        $container.toggleClass('graph-legend-table', tableLayout);

        if (tableLayout) {
          var header = '<tr><th colspan="2" style="text-align:left">Key</th>';
          if (panel.legend.values) {
            header += '<th class="pointer">Value</th>';
          }
          header += '</tr>';
          $container.append($(header));
        }

        if (panel.legend.sort) {
          seriesList = _.sortBy(seriesList, function(series) {
            return series.stats[panel.legend.sort];
          });
          if (panel.legend.sortDesc) {
            seriesList = seriesList.reverse();
          }
        }

        for (i = 0; i < seriesList.length; i++) {
          var series = seriesList[i];

          // ignore empty series
          if (panel.legend.hideEmpty && series.allIsNull) {
            continue;
          }
          // ignore series excluded via override
          if (!series.legend) {
            continue;
          }

          var label = mapLegendValues(series);

          var html = '<div class="graph-legend-series';
          html += '" data-series-index="' + i + '" data-series-key="' + series.label + '">';
          html += '<span class="graph-legend-icon" style="float:none;">';
          html += '<i class="fa fa-minus pointer" style="color:' + series.color + '"></i>';
          html += '</span>';

          html += '<span class="graph-legend-alias" style="float:none;">';
          html += '<a>' + label + '</a>';
          html += '</span>';

          if (tableLayout) {
              html += '<div class="graph-legend-value">' + series.formatValue(series.stats[ctrl.panel.valueName]) + '</div>'; 
              html += '</div><div class="clearfix"></div>';
          } else {
            html += '</div>';
          }

          $container.append($(html));
        }
      }
    }
  };
});
