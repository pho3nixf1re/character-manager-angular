'use strict';

angular.module('characterManagerApp.directive.cmModal', [])
  .directive('cmModal', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@',
        buttonText: '@',
        open: '='
      },
      templateUrl: 'scripts/directives/cmModal/modal.html',
      link: function(scope, element, attributes) {
        scope.id = _.uniqueId();
        scope.small = (attributes.size === 'small');
      }
    };
  });
