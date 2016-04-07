'use strict';

//Automatically add this app to the document without requiring an ng-app call
(function () {
    if (!angular.mock) {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['sdpApp']);
        });
    }
})();

/**
 * @ngdoc overview
 * @name sdpApp
 * @description
 * # sdpApp
 *
 * Main module of the application.
 */
angular
        .module('sdpApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngTouch',
            'ui.router'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {

            // Now set up the states/routes
            $stateProvider
                    .state('siteroot', {
                        url: '',
                        templateUrl: 'views/main.html',
                        metaTitle: 'Home',
                        metaDescription: 'This is the homepage'
                    })
                    .state('index', {
                        url: '/',
                        templateUrl: 'views/main.html',
                        metaTitle: 'Home',
                        metaDescription: 'This is the homepage'
                    })
                    .state('scaffolds', {
                        url: '/scaffolds',
                        templateUrl: 'views/scaffolding.html',
                        controller: 'ScaffoldsCtrl',
                        metaTitle: 'Angular Scaffolds & References',
                        metaDescription: 'A random collection of useful Angular scaffolds and boilerplate code.'
                    })
                    .state('scaffolds.list1', {
                        url: '/1',
                        templateUrl: 'views/partials/scaffolding.list1.html',
                        metaTitle: 'List #1',
                        metaDescription: 'Meta description for list #1'
                    })
                    .state('scaffolds.list2', {
                        url: '/2',
                        templateUrl: 'views/partials/scaffolding.list2.html',
                        metaTitle: 'List #2',
                        metaDescription: 'Meta description for list #2'
                    })
                    .state('404', {
                        url: '/page-not-found',
                        templateUrl: 'views/page-not-found.html',
                        metaTitle: 'Page Not Found',
                        metaDescription: 'Unable to find the page you are looking for.'
                    });


            //Redirect all 404 errors to this page
            //$urlRouterProvider.otherwise('/');

            //Better 404 handling, keeps the URL the same and shows the 404 page
            $urlRouterProvider.otherwise(function ($injector, $location) {
                var state = $injector.get('$state');
                state.go('404', null, {
                    location: false
                });
                return $location.path();
            });
        })//end config


        .run(function ($rootScope, $state) {
            //Route has changed successfully
            $rootScope.$on('$stateChangeSuccess', function () {
                //Update the metaTitle based on a value set above
                $rootScope.metaTitle = $state.current.metaTitle;
                //Meta description
                $rootScope.metaDescription = $state.current.metaDescription;
            });

            //When the route has started to changed
            $rootScope.$on('$stateChangeStart', function () {
                //If the hamburger menu is open, reset it to it's collapsed state
                $('.navbar-toggle').addClass('collapsed');
                $('.navbar-collapse').slideUp('fast', function () {
                    $(this).removeClass('in').css('display', '');
                });
            });
        })//end $rootScope, $state
        ;