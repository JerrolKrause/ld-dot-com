'use strict';

/**
 * @ngdoc service
 * @name sdpApp.contacts
 * @description
 * # contacts
 * Service in the sdpApp.
 */
angular.module('sdpApp')
  .service('scaffolding',  function (cacheResource) {
   
  	var params  = {userID: 1};
   
  	var data = {
        messages   : function(){return cacheResource('/api/messages/:userID',params);},
    };

    return data;




  });
