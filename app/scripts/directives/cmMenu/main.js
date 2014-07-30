'use strict';

angular.module('characterManagerApp.directive.cmMenu', [])
  .directive('cmMenu', function() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'scripts/directives/cmMenu/menu.html'
    };
  });
