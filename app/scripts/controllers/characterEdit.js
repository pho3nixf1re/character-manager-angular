'use strict';

angular.module('characterManagerApp.controller.characterEdit', [])
  .controller('CharacterEditCtrl', ['$scope', 'syncData', '$routeParams', '$location',
    function ($scope, syncData, $routeParams, $location) {
      $scope.character = syncData(['characters', $routeParams.id]);

      $scope.save = function() {
        $scope.character.$save();
        $location.path('/');
      };

      $scope.cancel = function() {
        $location.path('/');
      };
    }]);
