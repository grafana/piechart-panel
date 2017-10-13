import _ from 'lodash';
import $ from 'jquery';
import 'jquery.flot';
import 'jquery.flot.pie';

export default function link(scope, elem, attrs, ctrl) {
  var data, panel;
  elem = elem.find('.piechart-panel');
  var $tooltip = $('<div id="tooltip">');

  ctrl.events.on('render', function() {
    render(false);
    if(panel.legendType === 'Right side') {
      setTimeout(function() { render(true); }, 50);
    }
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
    } catch(e) { // IE throws errors sometimes
      return false;
    }
  }

  function formatter(label, slice) {
    return "<div style='font-size:" + ctrl.panel.fontSize + ";text-align:center;padding:2px;color:" + slice.color + ";'>" + label + "<br/>" + Math.round(slice.percent) + "%</div>";
  }

  function noDataPoints() {

    var html = '<div class="datapoints-warning"><span class="small">No data points</span></div>';

    elem.html(html);
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
      height: (size - 20) + 'px'
    };

    plotCanvas.css(plotCss);

    var $panelContainer = elem.parents('.panel-container');
    var backgroundColor = $panelContainer.css('background-color');

    var options = {
      legend: {
        show: false
      },
      series: {
        pie: {
          show: true,
          stroke: {
            color: backgroundColor,
            width: parseFloat(ctrl.panel.strokeWidth).toFixed(1)
          },
          label: {
            show: ctrl.panel.legend.show && ctrl.panel.legendType === 'On graph',
            formatter: formatter
          },
          highlight: {
            opacity: 0.0
          },
		  combine: {
		    threshold: ctrl.panel.combine.threshold,
			label: ctrl.panel.combine.label
		  }
        }
      },
      grid: {
        hoverable: true,
        clickable: true
      }
    };

    if (panel.pieType === 'donut') {
      options.series.pie.innerRadius = 0.5;
    }

    elem.html(plotCanvas);

    $.plot(plotCanvas, ctrl.data, options);

    if (ctrl.panel.tooltip.show === true) {
      plotCanvas.bind("plotclick plothover", function (event, pos, item) {
        if (event.type == "plotclick") {
          const label = item.series.label;

          const variableName = ctrl.panel.variable.name;
          if (variableName) {
            const variable = _.find(ctrl.variableSrv.variables, {"name": variableName});
            variable.current.text = label;
            variable.current.value = label;

            ctrl.variableSrv.updateOptions(variable).then(() => {
              ctrl.variableSrv.variableUpdated(variable).then(() => {
                scope.$emit('template-variable-value-updated');
                scope.$root.$broadcast('refresh');
              });
            });
          }
        } else if (event.type == "plothover") {
          if (!item) {
            $tooltip.detach();
            return;
          }

          var body;
          var percent = parseFloat(item.series.percent).toFixed(2);
          var formatted = ctrl.formatValue(item.series.data[0][1]);

          body = '<div class="graph-tooltip-small"><div class="graph-tooltip-time">';
          body += '<div class="graph-tooltip-value">' + item.series.label;
          if (ctrl.panel.tooltip.showValue === true) {
            body += ': ' + formatted;
          }
          if (ctrl.panel.tooltip.showPercentage === true) {
            body += " (" + percent + "%)";
          }
          body += "</div>";
          body += "</div></div>";

          $tooltip.html(body).place_tt(pos.pageX + 20, pos.pageY);
        }
      });
    } else {
      $tooltip.detach();
    }
  }

  function render(incrementRenderCounter) {
    if (!ctrl.data) { return; }

    data = ctrl.data;
    panel = ctrl.panel;

    if (setElementHeight()) {
      if (0 == ctrl.data.length) {
        noDataPoints();
      } else {
        addPieChart();
      }
    }
    if (incrementRenderCounter) {
      ctrl.renderingCompleted();
    }
  }
}

