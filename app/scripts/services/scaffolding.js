'use strict';

/**
 * @ngdoc service
 * @name sdpApp.contacts
 * @description
 * # contacts
 * Service in the sdpApp.
 */
angular.module('sdpApp')
        /**
         * Passes rest API between between the controllers and the template cache
         * @param {type} cacheResource - Angular service that manages the template cache
         * @returns {scaffolding_L14.data}
         */
        .service('scaffolding', function (cacheResource) {

            var params = {userID: 1};

            var data = {
                messages: function () {
                    return cacheResource('/api/messages/:userID', params);
                }
            };

            return data;
        });
