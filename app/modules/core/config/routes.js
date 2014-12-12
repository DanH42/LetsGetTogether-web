'use strict';

/**
 * @ngdoc object
 * @name core.config
 * @requires ng.$stateProvider
 * @requires ng.$urlRouterProvider
 * @description Defines the routes and other config within the core module
 */
angular
    .module('core')
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
                templateUrl: 'modules/core/views/about.html',
                controller: 'AboutController'
            }).
            state('profile', {
                url: '/profile',
                templateUrl: 'modules/core/views/profile.html',
                controller: 'ProfileController'
            }).
            state('home', {
                url: '/',
                templateUrl: 'modules/core/views/home.html',
                controller: 'HomeController'
            });
        }
    ]);
