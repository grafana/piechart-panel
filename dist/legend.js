'use strict';

System.register(['angular', 'lodash', 'app/core/utils/kbn', 'jquery', 'jquery.flot', 'jquery.flot.time'], function (_export, _context) {
  var angular, _, kbn, $;

  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_appCoreUtilsKbn) {
      kbn = _appCoreUtilsKbn.default;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_jqueryFlot) {}, function (_jqueryFlotTime) {}],
    execute: function () {

      angular.module('grafana.directives').directive('piechartLegend', function () {
        return {
          link: function link(scope, elem) {
            var $container = $('<section class="graph-legend"></section>');
            var firstRender = true;
            var ctrl = scope.ctrl;
            var panel = ctrl.panel;
            var data;
            var seriesList;
            var i;

            ctrl.events.on('render', function () {
              data = ctrl.series;
              if (data) {
                for (var i in data) {
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

              if (stat !== panel.legend.sort) {
                panel.legend.sortDesc = null;
              }

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

            function getTableHeaderHtml(statName) {
              if (!panel.legend[statName]) {
                return "";
              }
              var html = '<th class="pointer" data-stat="' + statName + '">' + statName;

              if (panel.legend.sort === statName) {
                var cssClass = panel.legend.sortDesc ? 'fa fa-caret-down' : 'fa fa-caret-up';
                html += ' <span class="' + cssClass + '"></span>';
              }

              return html + '</th>';
            }

            function render() {
              if (panel.legendType === 'On graph') {
                $container.empty();
                return;
              }

              if (firstRender) {
                elem.append($container);
                $container.on('click', '.graph-legend-alias', toggleSeries);
                $container.on('click', 'th', sortLegend);
                firstRender = false;
              }

              seriesList = data;

              $container.empty();

              $container.toggleClass('graph-legend-table', panel.legendType === 'Table');

              if (panel.legend.legendType === 'Table') {
                var header = '<tr>';
                header += '<th colspan="2" style="text-align:left"></th>';
                if (panel.legend.values) {
                  header += getTableHeaderHtml('min');
                  header += getTableHeaderHtml('max');
                  header += getTableHeaderHtml('avg');
                  header += getTableHeaderHtml('current');
                }
                header += '</tr>';
                $container.append($(header));
              }

              if (panel.legend.sort) {
                seriesList = _.sortBy(seriesList, function (series) {
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

                var html = '<div class="graph-legend-series';
                html += '" data-series-index="' + i + '">';
                html += '<span class="graph-legend-icon" style="float:none;">';
                html += '<i class="fa fa-minus pointer" style="color:' + series.color + '"></i>';
                html += '</span>';

                html += '<span class="graph-legend-alias" style="float:none;">';
                html += '<a>' + series.label + '</a>';
                html += '</span>';

                if (panel.legend.values && panel.legendType === 'Table') {
                  var avg = series.formatValue(series.stats.avg);
                  var current = series.formatValue(series.stats.current);
                  var min = series.formatValue(series.stats.min);
                  var max = series.formatValue(series.stats.max);

                  if (panel.legend.min) {
                    html += '<div class="graph-legend-value min">' + min + '</div>';
                  }
                  if (panel.legend.max) {
                    html += '<div class="graph-legend-value max">' + max + '</div>';
                  }
                  if (panel.legend.avg) {
                    html += '<div class="graph-legend-value avg">' + avg + '</div>';
                  }
                  if (panel.legend.current) {
                    html += '<div class="graph-legend-value current">' + current + '</div>';
                  }
                }

                html += '</div>';
                $container.append($(html));
              }
            }
          }
        };
      });
    }
  };
});
//# sourceMappingURL=legend.js.map
