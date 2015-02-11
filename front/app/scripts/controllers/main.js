// Generated by CoffeeScript 1.6.3
(function() {
  'use strict';
  /**
   # @ngdoc function
   # @name frontApp.controller:MainCtrl
   # @description
   # # MainCtrl
   # Controller of the frontApp
  */

  angular.module('frontApp').controller('MainCtrl', [
    "$scope", "Api", function($scope, Api) {
      return (Api.getIllustrators('dummy')).then(function(res) {
        $scope.results = res.data;
        return console.log(res.data);
      });
    }
  ]);

}).call(this);
