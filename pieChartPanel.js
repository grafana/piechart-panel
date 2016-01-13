define([
  'angular',
  'app/app',
  'lodash',
  'jquery',
  'jquery.flot',
  'jquery.flot.pie',
],
function (angular, app, _, $) {
  'use strict';

  var module = angular.module('grafana.panels.piechart', []);
  app.useModule(module);

  module.directive('piechartPanel', function() {

    return {
      link: function(scope, elem) {
        var data, panel;

        var $tooltip = $('<div id="tooltip">');

        scope.$on('render', function() {
          render();
          scope.panelRenderingComplete();
        });

        function setElementHeight() {
          try {
            var height = scope.height || panel.height || scope.row.height;
            if (_.isString(height)) {
              height = parseInt(height.replace('px', ''), 10);
            }

            height -= 5; // padding
            height -= panel.title ? 24 : 9; // subtract panel title bar

            elem.css('height', height + 'px');

            return true;
          } catch(e) { // IE throws errors sometimes
            return false;
          }
        }

        function addPieChart() {
          var width = elem.width();
          var height = elem.height();

          var size = Math.min(width, height);

          var plotCanvas = $('<div></div>');
          var plotCss = {};

          plotCss.top = '10px';
          plotCss.margin = 'auto';
          plotCss.position = 'relative';
          plotCss.height = (size - 20) + 'px';

          plotCanvas.css(plotCss);

          var options = {
            legend: {
              show: false
            },
            series: {
              pie: {
                show: true,
                label: {
                  show: scope.panel.legend.show && scope.panel.legendType === 'On graph'
                }
              }
            },
            grid: {
              hoverable: true
            }
          };

          if (panel.pieType === 'donut') {
            options.series.pie.innerRadius = 0.5;
          }

          elem.html(plotCanvas);

          $.plot(plotCanvas, scope.data, options);
          plotCanvas.bind("plothover", function (event, pos, item) {
            if (!item) {
			  $tooltip.detach();
			  return;
            }

		    var body;
		    var percent = parseFloat(item.series.percent).toFixed(2);

		    body = '<div class="graph-tooltip-small"><div class="graph-tooltip-time">';
		    body += '<div class="graph-tooltip-value">' + item.series.label + ': ' + item.series.data[0][1];
		    body += " (" + percent + "%)" + '</div>';
		    body += "</div></div>";

            $tooltip.html(body).place_tt(pos.pageX + 20, pos.pageY);
          });
        };

        function render() {
          if (!scope.data) { return; }

          data = scope.data;
          panel = scope.panel;

          setElementHeight();

          addPieChart();
        }
      }
    };
  });
});
