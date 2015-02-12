// Generated by CoffeeScript 1.6.3
(function() {
  'use strict';
  /**
   # @ngdoc overview
   # @name frontApp
   # @description
   # # frontApp
   #
   # Main module of the application.
  */

  angular.module('frontApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'masonry', 'infinite-scroll', 'ui.bootstrap']).config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  });

}).call(this);
