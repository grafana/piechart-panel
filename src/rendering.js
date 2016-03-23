import _ from 'lodash';
import $ from 'jquery';
import 'jquery.flot';
import 'jquery.flot.pie';

export default function link(scope, elem, attrs, ctrl) {
  var data, panel;
  elem = elem.find('.piechart-panel');

  var $tooltip = $('<div id="tooltip">');

  ctrl.events.on('render', function() {
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

    var $panelContainer = elem.parents('.panel-container');
    var strokecolor = $panelContainer.css('background-color');
    var options = {
      legend: {
        show: false
      },
      series: {
        pie: {
          show: true,
          stroke: {
            color: strokecolor,
            width: 0.3
          },
          label: {
            show: ctrl.panel.legend.show && ctrl.panel.legendType === 'On graph'
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

    $.plot(plotCanvas, ctrl.data, options);
    plotCanvas.bind("plothover", function (event, pos, item) {
      if (!item) {
        $tooltip.detach();
        return;
      }

      var body;
      var percent = parseFloat(item.series.percent).toFixed(2);
      var formatted = ctrl.formatValue(item.series.data[0][1]);

      body = '<div class="graph-tooltip-small"><div class="graph-tooltip-time">';
      body += '<div class="graph-tooltip-value">' + item.series.label + ': ' + formatted;
      body += " (" + percent + "%)" + '</div>';
      body += "</div></div>";

      $tooltip.html(body).place_tt(pos.pageX + 20, pos.pageY);
    });
  }

  function render() {
    if (!ctrl.data) { return; }

    data = ctrl.data;
    panel = ctrl.panel;

    if (setElementHeight()) {
      addPieChart();
    }
  }
}

//export {
//  panelLink as link
//};
