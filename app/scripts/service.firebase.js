'use strict';

angular.module('characterManagerApp.service.firebase', ['firebase'])

  // a simple utility to create references to Firebase paths
  .factory('firebaseRef', ['Firebase', 'FIREBASE_URL',
    function(Firebase, FIREBASE_URL) {
      var pathRef = function (args) {
         for(var i=0; i < args.length; i++) {
            if( typeof(args[i]) === 'object' ) {
               args[i] = pathRef(args[i]);
            }
         }
         return args.join('/');
      };

      /**
       * @function
       * @name firebaseRef
       * @param {String|Array...} path
       * @return a Firebase instance
       */
      return function() {
        var pathParts = Array.prototype.slice.call(arguments);
        pathParts = [FIREBASE_URL].concat(pathParts);
        return new Firebase(pathRef(pathParts));
      };
    }])

    // a simple utility to create $firebase objects from angularFire
    .service('syncData', ['$firebase', 'firebaseRef',
      function($firebase, firebaseRef) {
        /**
         * @function
         * @name syncData
         * @param {String|Array...} path
         * @param {int} [limit]
         * @return a Firebase instance
         */
        return function(path, limit) {
          var ref = firebaseRef(path);
          if (limit) { ref = ref.limit(limit); }
          return $firebase(ref);
        };
      }]);
