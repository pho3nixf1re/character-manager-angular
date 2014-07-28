'use strict';

angular.module('characterManagerApp.directive.cmCharacterCard', [])
  .directive('cmCharacterCard', function(){
    return {
      restrict: 'E',
      scope: {
        character: '=',
        characterId: '=',
        onRemove: '&'
      },
      templateUrl: 'scripts/directives/cmCharacterCard/card.html',
      link: function(scope) {
        scope.remove = scope.onRemove();
      }
    };
  });
