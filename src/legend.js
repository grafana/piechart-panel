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
	  var linkSrv = ctrl.$injector.get('linkSrv');

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

      function render() {
        if(panel.legendType === 'On graph') {
          $container.empty();
          return;
        }

        if (firstRender) {
          elem.append($container);
          $container.on('click', '.graph-legend-icon', openColorSelector);
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
            header += '<th class="pointer">values</th>';
          }
          if (panel.legend.percentage) {
            header += '<th class="pointer">percentage</th>';
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
		      var currentLink = "#";
		      var currentHrefTarget = "_self";

          // ignore empty series
          if (panel.legend.hideEmpty && series.allIsNull) {
             continue;
          }

            // ignore zero series
            if (panel.legend.hideZero && series.allIsZero) {
                continue;
            }

            // ignore zero series
            if (panel.legend.hideZero && series.formatValue(series.stats[ctrl.panel.valueName]) ==0) {
                continue;
            }

          // ignore series excluded via override
          if (!series.legend) {
             continue;
          }

          if(series.label != undefined && panel.legend.regexp != undefined && panel.legend.regexp.length > 0){
              if(panel.legend.replacement!= undefined &&  panel.legend.replacement.length > 0){
                  series.label = series.label.replace(panel.legend.regexp,panel.legend.replacement);
              }else{
                  series.label = series.label.replace(panel.legend.regexp,"");
              }

          }
          // ######## START JIRA RL-607 ##################
          if(panel.drilldowns && panel.drilldowns.length >0) {
            for (var y = 0; y < panel.drilldowns.length; y++) {

              var drilldown = panel.drilldowns[y];
              var regexp = new RegExp(drilldown.alias);
              var alias = series.label;
              if (regexp.test(alias)) {
                 var scopedVars = {};
                 scopedVars["alias"] = {"value": alias};

                 if (drilldown.separator && drilldown.separator.trim().length > 0) {
                   var values = alias.split(drilldown.separator);
                   for (var j = 0; j < values.length; j++) {
                     scopedVars["alias" + j] = {"value": values[j]};
                   }
                 }

                 //add panel.scopedVars for repeat var
                 if (panel.repeat && panel.scopedVars[panel.repeat] && panel.scopedVars[panel.repeat].value) {
                   scopedVars[panel.repeat] = {"value": panel.scopedVars[panel.repeat].value};
                 }

                 var link = linkSrv.getPanelLinkAnchorInfo(drilldown, scopedVars);
                 if (link.href != undefined) { 
                   currentLink = link.href;
                 }

                 if (drilldown.targetBlank) {
                   currentHrefTarget = "_blank";
                 } else {
                   currentHrefTarget = "_self";
                 }
              }
           }
         }
          // ######## END JIRA RL-607 ##################

          var html = '<div class="graph-legend-series';
          html += '" data-series-index="' + i + '">';
          html += '<span class="graph-legend-icon" style="float:none;">';
          html += '<i class="fa fa-minus pointer" style="color:' + series.color + '"></i>';
          html += '</span>';
          html += '<span class="graph-legend-alias" style="float:none;">';

          html += '<a ';

          if (currentLink != "#") {
            // add href + target attributes based on the drilldown information
            html += ' href="'+ currentLink +'" target="'+ currentHrefTarget + '" ';
          } 

          html += 'title="'+ series.label + '">';		  

          if (panel.legend.maxSize>0 && series.label.length>0 && panel.legend.maxSize < series.label.length) {
              var size = panel.legend.maxSize/2;
              html += `${series.label.substr(0,size)}...${series.label.substr(series.label.length-size)}`;
          }else{
             html += series.label;
          }

          html += '</a></span>';

          if (showValues && tableLayout) {
            var value = series.formatValue(series.stats[ctrl.panel.valueName]);
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
