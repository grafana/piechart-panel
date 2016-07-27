'use strict';

System.register(['lodash', 'jquery', 'jquery.flot', 'jquery.flot.pie'], function (_export, _context) {
  "use strict";

  var _, $;

  function link(scope, elem, attrs, ctrl) {
    var data, panel;
    elem = elem.find('.piechart-panel');
    var $tooltip = $('<div id="tooltip">');

    ctrl.events.on('render', function () {
      render();
      ctrl.renderingCompleted();
    });

    function setElementHeight() {
      try {
        var height = ctrl.height || panel.height || ctrl.row.height;
        if (_.isString(height)) {
          height = parseInt(height.replace('px', ''), 10);
        }

        height -= 5; // padding
        height -= panel.title ? 24 : 9; // subtract panel title bar

        elem.css('height', height + 'px');

        return true;
      } catch (e) {
        // IE throws errors sometimes
        return false;
      }
    }

    function formatter(label, slice) {
      return "<div style='font-size:" + ctrl.panel.fontSize + ";text-align:center;padding:2px;color:" + slice.color + ";'>" + label + "<br/>" + Math.round(slice.percent) + "%</div>";
    }

    function addPieChart() {
      var width = elem.width();
      var height = elem.height();

      var size = Math.min(width, height);

      var plotCanvas = $('<div></div>');
      var plotCss = {
        top: '10px',
        margin: 'auto',
        position: 'relative',
        height: size - 20 + 'px'
      };

      plotCanvas.css(plotCss);

      var $panelContainer = elem.parents('.panel-container');

      var options = {
        legend: {
          show: false
        },
        series: {
          pie: {
            innerRadius: 0.5,
            show: true,
            stroke: {
              // stroke color does not support rgba colors
              color: 'rgb(255,255,255)',
              width: parseFloat(ctrl.panel.strokeWidth).toFixed(1)
            },
            label: {
              show: ctrl.panel.legend.show && ctrl.panel.legendType === 'On graph',
              formatter: formatter
            },
            highlight: {
              opacity: 0.0
            }
          }
        },
        grid: {
          hoverable: true,
          clickable: ctrl.panel.clickable
        }
      };

      if (panel.pieType === 'donut') {
        options.series.pie.innerRadius = 0.5;
      } else {
        options.series.pie.innerRadius = 0;
      }

      elem.html(plotCanvas);

      var plot = $.plot(plotCanvas, ctrl.data, options);
      plotCanvas.bind("plothover", function (event, pos, item) {
        var $panelContainer = $(event.target).parents(".panel-container");
        if (!item) {
          _.each($panelContainer.find(".graph-legend-series"), function (legend) {
            $(legend).css("opacity", "1.0");
          });
          $tooltip.detach();
          return;
        }

        _.each($panelContainer.find(".graph-legend-series"), function (legend) {
          if ($(legend).attr("data-series-key") !== item.series.label) {
            $(legend).css("opacity", "0.5");
          } else {
            $(legend).css("opacity", "1");
          }
        });

        var body;
        var percent = parseFloat(item.series.percent).toFixed(2);
        var formatted = ctrl.formatValue(item.series.data[0][1]);

        body = '<div class="graph-tooltip-small"><div class="graph-tooltip-time">';
        body += '<div class="graph-tooltip-value">' + item.series.label + ': ' + formatted;
        body += " (" + percent + "%)" + '</div>';
        body += "</div></div>";

        $tooltip.html(body).place_tt(pos.pageX + 20, pos.pageY);
      });

      if (ctrl.panel.clickable) {
        plotCanvas.bind("plotclick", function (evt, pos, item) {
          ctrl.handle_click_event(this, evt, item.series.label.trim());
        });
      }
    }

    function render() {
      if (!ctrl.data) {
        return;
      }

      data = ctrl.data;
      panel = ctrl.panel;

      setTimeout(function () {
        if (setElementHeight()) {
          addPieChart();
        }
      }, 1000);
    }
  }

  _export('default', link);

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_jqueryFlot) {}, function (_jqueryFlotPie) {}],
    execute: function () {}
  };
});
//# sourceMappingURL=rendering.js.map
