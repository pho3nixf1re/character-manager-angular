'use strict';

angular
  .module('characterManagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'characterManagerApp.services',
    'characterManagerApp.directives',
    'characterManagerApp.controllers'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/characters/list.html',
        controller: 'CharactersListCtrl'
      })
      .when('/character/:id', {
        templateUrl: 'views/characters/show.html',
        controller: 'CharacterShowCtrl'
      })
      .when('/character/:id/edit', {
        templateUrl: 'views/characters/edit.html',
        controller: 'CharacterEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .constant('FIREBASE_URL','https://boiling-fire-5958.firebaseio.com');
