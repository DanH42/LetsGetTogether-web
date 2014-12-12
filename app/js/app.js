'use strict';

/**
 * @ngdoc object
 * @name core.config
 * @requires ng.$stateProvider
 * @requires ng.$urlRouterProvider
 * @description Defines the routes and other config within the core module
 */
angular
    .module('g2gMobileApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngStorage'
    ])
    .config(['$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            /**
             * @ngdoc event
             * @name core.config.route
             * @eventOf core.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the path is `'/'`, route to home
             * */
            /**
 * @ngdoc event
 * @name core.config.route
 * @eventOf core.config
 * @description
 *
 * Define routes and the associated paths
 *
 * - When the state is `'profile'`, route to profile
 *
*/
/**
 * @ngdoc event
 * @name core.config.route
 * @eventOf core.config
 * @description
 *
 * Define routes and the associated paths
 *
 * - When the state is `'about'`, route to about
 *
*/
$stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            }).
            state('profile', {
                url: '/profile/:id',
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl'
            }).
            state('home', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            });
        }
    ]);








// 'use strict';

// /**
//  * @ngdoc overview
//  * @name g2gMobileApp
//  * @description
//  * # g2gMobileApp
//  *
//  * Main module of the application.
//  */
// angular
//   .module('g2gMobileApp', [
//     'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ui.router'
//   ])
//   .config(function ($stateProvider) {
//     $stateProvider
//       .state('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl'
//       })
//       .state('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl'
//       })
//       .state('/profile/:id', {
//         templateUrl: 'views/profile.html',
//         controller: 'ProfileCtrl'
//       })
//       .state('/logout/:id', {
//         templateUrl: 'views/logout.html',
//         controller: 'LogoutCtrl'
//       })
//       .state('/auth/:id', {
//         templateUrl: 'views/auth.html',
//         controller: 'AuthCtrl'
//       });
//   });
