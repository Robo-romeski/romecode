var quoteControllers = angular.module('quoteControllers', []);

quoteControllers.controller('QuoteCtrl', function ($scope, famous){
  famous.list(function(quotes) {
    $scope.quotes = quotes;
    console.log(quotes);
  });
});