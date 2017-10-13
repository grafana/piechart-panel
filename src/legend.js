import angular from 'angular';
//import _ from  'lodash';
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

      function getLegendHeaderHtml(statName) {
        var name = statName;

        if (panel.legend.header) {
          name = panel.legend.header;
        }

        var html = '<th class="pointer" data-stat="' + statName + '">' + name;

        if (panel.legend.sort === statName) {
          var cssClass = panel.legend.sortDesc ? 'fa fa-caret-down' : 'fa fa-caret-up' ;
          html += ' <span class="' + cssClass + '"></span>';
        }

        return html + '</th>';
      }

      function getLegendPercentageHtml(statName) {
        var name = 'percentage';
        var html = '<th class="pointer" data-stat="' + statName + '">' + name;

        if (panel.legend.sort === statName) {
          var cssClass = panel.legend.sortDesc ? 'fa fa-caret-down' : 'fa fa-caret-up' ;
          html += ' <span class="' + cssClass + '"></span>';
        }

        return html + '</th>';
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
            template: '<series-color-picker series="series" onToggleAxis="toggleAxis" onColorChange="colorSelected">' +
            '</series-color-picker>',
            openOn: 'hover',
            model: {
              autoClose: true,
              series: series,
              toggleAxis: function() {},
              colorSelected: function(color) {
                ctrl.changeSeriesColor(series, color);
              }
            },
          });
        });
      }

      function render() {
        if(panel.legendType === 'On graph') {
          $container.empty();
          return;
        }

        if (firstRender) {
          elem.append($container);
          $container.on('click', '.graph-legend-icon', openColorSelector);
          $container.on('click', '.graph-legend-alias', toggleSeries);
          $container.on('click', 'th', sortLegend);
          firstRender = false;
        }

        seriesList = data;

        $container.empty();

        var showValues = panel.legend.values || panel.legend.percentage;
        var tableLayout = (
            panel.legendType === 'Under graph' ||
            panel.legendType === 'Right side'
            ) && showValues;


        $container.toggleClass('graph-legend-table', tableLayout);

        if (tableLayout) {
          var header = '<tr><th colspan="2" style="text-align:left"></th>';
          if (panel.legend.values) {
              header += getLegendHeaderHtml(ctrl.panel.valueName);
          }
          if (panel.legend.percentage) {
            header += getLegendPercentageHtml(ctrl.panel.valueName);
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

        if (panel.legend.percentage) {
          var total = 0;
          for (i = 0; i < seriesList.length; i++) {
            total += seriesList[i].stats[ctrl.panel.valueName];
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

          var html = '<div class="graph-legend-series';
          html += '" data-series-index="' + i + '">';
          html += '<span class="graph-legend-icon" style="float:none;">';
          html += '<i class="fa fa-minus pointer" style="color:' + series.color + '"></i>';
          html += '</span>';

          html += '<span class="graph-legend-alias" style="float:none;">';
          html += '<a>' + series.label + '</a>';
          html += '</span>';

          if (showValues && tableLayout) {
            var value = series.stats[ctrl.panel.valueName];
            if (panel.legend.values) {
              html += '<div class="graph-legend-value">' + ctrl.formatValue(value) + '</div>';
            }
            if (total) {
              var pvalue = ((value / total) * 100).toFixed(2) + '%';
              html += '<div class="graph-legend-value">' + pvalue +'</div>';
            }
          }

          html += '</div>';
          $container.append($(html));
        }
      }
    }
  };
});


