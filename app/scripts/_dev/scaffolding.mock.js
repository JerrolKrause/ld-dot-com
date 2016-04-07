'use strict';

/**
 * @ngdoc service
 * @name sdpApp.contacts
 * @description
 * # contacts
 * Service in the sdpApp.
 */
angular.module('ngMockDev', ['sdpApp', 'ngMockE2E'])
        //Sample http/rest API backend
        .run(function ($httpBackend) {

            //Don't use get requests for templates/partials
            $httpBackend.whenGET(/views/).passThrough();

            var messages = [
                {'name': 'Martin Testco', 'isCustomer': true, 'date': 'Today', 'new': true, 'message': 'Secure Document Exchange user Martin Testco has requested a call back from you. Please call back the borrower as soon as possible.'},
                {'name': 'Wendi King', 'isCustomer': false, 'date': '2 days ago', 'new': true, 'message': 'Good morning Mr. Testco. Please call me when you have time.'},
                {'name': 'Martin Testco', 'isCustomer': true, 'date': '2 days ago', 'message': 'Hello, can you call me back?'},
                {'name': 'Wendi King', 'isCustomer': false, 'date': '2 days ago', 'message': 'this is a test to show how quick this happens'},
                {'name': 'Martin Testco', 'isCustomer': true, 'date': '2 days ago', 'message': 'Hello, can you call me back?'},
                {'name': 'Wendi King', 'isCustomer': false, 'date': '3 days ago', 'message': 'this is a test to show how quick this happens'}
            ];

            $httpBackend.whenGET(/^\/api\/messages\/*/).respond(function (method, url, data, headers) {
                console.log('Received these data:', method, url, data, headers);
                return [200, messages, {}];
            });
            $httpBackend.whenPOST(/^\/api\/messages\/*/).respond(function (method, url, data, headers) {
                console.log('Received these data:', method, url, data, headers);
                messages.unshift(angular.fromJson(data));
                return [200, {}, {}];
            });

        });//end $httpBackend
        
//Automatically add ngMock to the app if it is present. This will not require an ng-app or controller call
if (angular.mock) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['ngMockDev']);
    });
}