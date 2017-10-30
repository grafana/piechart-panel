import coreModule from 'app/core/core_module';

var template = `
<div class="graph-legend-popover">

  <p class="m-b-0">
   <i ng-repeat="color in ctrl.colors" class="pointer fa fa-circle"
    ng-style="{color:color}"
    ng-click="ctrl.colorSelected(color);">&nbsp;</i>
  </p>
</div>
`;

export class ColorPickerCtrl {

  /** @ngInject */
  constructor($scope, $rootScope) {
    this.$scope = $scope;
    this.colors = $rootScope.colors;
    this.autoClose = $scope.autoClose;
    this.series = $scope.series;
  }

  colorSelected(color) {
    console.log(this.$scope);
    this.$scope.colorSelected(color);
    if (this.$scope.autoClose) {
      this.$scope.dismiss();
    }
  }
}

export function colorPicker() {
  return {
    restrict: 'E',
    controller: ColorPickerCtrl,
    bindToController: true,
    controllerAs: 'ctrl',
    template: template,
  };
}

coreModule.directive('gfColorPicker', colorPicker);
