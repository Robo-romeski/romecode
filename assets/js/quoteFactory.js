var quoteFactory = angular.module('quoteFactory', []);

quoteApp.factory('famous', function ($http) {
  return {
    list: function(callback){
      $http.get('famous.json').success(callback);
    }
   };
 });

