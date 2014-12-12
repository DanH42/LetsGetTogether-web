'use strict';

/**
 * @ngdoc overview
 * @name g2gMobileApp
 * @description
 * # g2gMobileApp
 *
 * Main module of the application.
 */
angular
  .module('g2gMobileApp', [
    'ngRoute',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/profile/:id', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/logout/:id', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl'
      })
      .when('/auth/:id', {
        templateUrl: 'views/auth.html',
        controller: 'AuthCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
