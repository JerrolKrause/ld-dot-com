/*global DEBUG:true*/
'use strict';

//Define default modules needed by app
angular.modulesDefault = ['ngAnimate','ngCookies','ngResource','ngSanitize','ngTouch','ui.router'];

//Dev environment only
if (DEBUG) {
    console.log('DEV/DEBUG mode enabled.');
    //Add ngMocks module
    angular.modulesDefault.push('ngMockDev');
}

//Now attach main app to document
angular.element(document).ready(function () {
    angular.bootstrap(document, ['sdpApp']);
});


/**
 * @ngdoc overview
 * @name sdpApp
 * @description
 * # sdpApp
 *
 * Main module of the application.
 */
angular
        .module('sdpApp', angular.modulesDefault)
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

                    .state('404', {
                        url: '/page-not-found',
                        templateUrl: 'views/page-not-found.html',
                        metaTitle: 'Page Not Found',
                        metaDescription: 'Unable to find the page you are looking for.'
                    });

            //Dev environment only
            if (DEBUG) {
                $stateProvider
                        .state('scaffolds', {
                            url: '/scaffolds',
                            templateUrl: '_dev/views/scaffolding.html',
                            controller: 'ScaffoldsCtrl',
                            metaTitle: 'Angular Scaffolds & References',
                            metaDescription: 'A random collection of useful Angular scaffolds and boilerplate code.'
                        })
                        .state('scaffolds.list1', {
                            url: '/1',
                            templateUrl: '_dev/views/scaffolding.list1.html',
                            metaTitle: 'List #1',
                            metaDescription: 'Meta description for list #1'
                        })
                        .state('scaffolds.list2', {
                            url: '/2',
                            templateUrl: '_dev/views/scaffolding.list2.html',
                            metaTitle: 'List #2',
                            metaDescription: 'Meta description for list #2'
                        });
            }

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
        });//end run