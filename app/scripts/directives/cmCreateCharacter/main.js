'use strict';

angular.module('characterManagerApp.directive.cmCreateCharacter', [])
  .directive('cmCreateCharacter', function() {
    return {
      restrict: 'E',
      scope: {
        create: '&onCreate',
        cancel: '&onCancel'
      },
      templateUrl: 'scripts/directives/cmCreateCharacter/createCharacter.html',
      link: function(scope) {
        var callbackWrapper = function(handler, form) {
          var character = scope.character;
          resetForm(form);
          closeModal();
          handler(character);
        };

        var resetForm = function(form) {
          cleanCharacter();
          form.$setPristine();
        };

        var closeModal = function() {
          scope.modalOpen = false;
        };

        var cleanCharacter = function() {
          scope.character = {
            name: '',
            tagLine: ''
          };
        };

        cleanCharacter();

        scope.modalOpen = false;
        scope.createHandler = _.wrap(
          scope.create(),
          _.partialRight(callbackWrapper, scope.characterForm)
        );
        // scope.cancelHandler = _.wrap(scope.cancel(), callbackWrapper);
      }
    };
  });
