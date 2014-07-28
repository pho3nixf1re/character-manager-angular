'use strict';

angular.module('characterManagerApp.controller.charactersList', [])
  .controller('CharactersListCtrl', ['$scope', 'syncData',
    function ($scope, syncData) {
      $scope.characters = syncData('characters');

      $scope.newCharacter = function(character) {
        $scope.characters.$add(character);
      };

      $scope.deleteCharacter = function(id) {
        if (!_.isEmpty(id)) {
          $scope.characters.$remove(id);
        }
      };
    }]);
