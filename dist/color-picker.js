'use strict';

System.register(['app/core/core_module'], function (_export, _context) {
  "use strict";

  var coreModule, _createClass, template, ColorPickerCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function colorPicker() {
    return {
      restrict: 'E',
      controller: ColorPickerCtrl,
      bindToController: true,
      controllerAs: 'ctrl',
      template: template
    };
  }

  _export('colorPicker', colorPicker);

  return {
    setters: [function (_appCoreCore_module) {
      coreModule = _appCoreCore_module.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      template = '\n<div class="graph-legend-popover">\n\n  <p class="m-b-0">\n   <i ng-repeat="color in ctrl.colors" class="pointer fa fa-circle"\n    ng-style="{color:color}"\n    ng-click="ctrl.colorSelected(color);">&nbsp;</i>\n  </p>\n</div>\n';

      _export('ColorPickerCtrl', ColorPickerCtrl = function () {

        /** @ngInject */
        function ColorPickerCtrl($scope, $rootScope) {
          _classCallCheck(this, ColorPickerCtrl);

          this.$scope = $scope;
          this.colors = $rootScope.colors;
          this.autoClose = $scope.autoClose;
          this.series = $scope.series;
        }

        _createClass(ColorPickerCtrl, [{
          key: 'colorSelected',
          value: function colorSelected(color) {
            console.log(this.$scope);
            this.$scope.colorSelected(color);
            if (this.$scope.autoClose) {
              this.$scope.dismiss();
            }
          }
        }]);

        return ColorPickerCtrl;
      }());

      _export('ColorPickerCtrl', ColorPickerCtrl);

      coreModule.directive('gfColorPicker', colorPicker);
    }
  };
});
//# sourceMappingURL=color-picker.js.map
