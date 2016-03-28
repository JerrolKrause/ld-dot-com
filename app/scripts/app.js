'use strict';

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
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        metaTitle : 'Home',
        metaDescription : 'This is the homepage'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        metaTitle : 'About Us',
        metaDescription : 'This is the about us page'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact',
        metaTitle : 'Contact Us',
        metaDescription : 'This is the contact us page'
      })
      .otherwise({
        templateUrl: 'views/page-not-found.html',
        metaTitle : 'Page Not Found',
        metaDescription : 'Sorry, but the page you were trying to view does not exist. It looks like this was the result of either a mistyped address or an out-of-date link.'
      });
  })
  .run(function($rootScope, $route) {
     //Route has changed successfully
     $rootScope.$on( '$routeChangeSuccess', function() {
        //Update the metaTitle based on a value set above
        $rootScope.metaTitle = $route.current.metaTitle;
        //Meta description
        $rootScope.metaDescription = $route.current.metaDescription;
     });

    //When the route has started to changed
    $rootScope.$on( '$routeChangeStart', function() {
      //Reset the menu to it's default state
      $('.navbar-toggle').addClass('collapsed');
      $('.navbar-collapse').slideUp('fast',function(){
          $(this).removeClass('in').css('display', '');
      });
    });

  });
