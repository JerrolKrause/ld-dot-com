'use strict';

/**
 * @ngdoc service
 * @name sdpApp.contacts
 * @description
 * # contacts
 * Service in the sdpApp.
 */
angular.module('sdpApp')
  .service('sample',  function ($http) {
    return $http({
            method  : 'GET',
            url     : '/scripts/models/sample.json'
        }).then(function ($response) {
            //Load this data straight into the user generated model so we can save back to server
            return $response.data[0];
    });
  });
