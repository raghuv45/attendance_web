'use strict';

/**
 * @ngdoc overview
 * @name mantraattendanceApp
 * @description
 * # mantraattendanceApp
 *
 * Main module of the application.
 */
angular
  .module('mantraattendanceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .factory('httpinterceptor', ['$q', function($q) {  
      return {
        responseError: function(response) {
            if (response.status == 401 || response.data.status == 401){
                localStorage.clear();
                window.location = '/login';
            }
            return $q.reject(response);
        },
        request: function (config) {
           config.headers = config.headers || {};
           if (window.localStorage && localStorage.getItem('token')) {
               var token = localStorage.getItem("token");
               config.headers.Authorization = 'Bearer ' + token;
           }
           return config;
       },
      }
  }])

  .config(function ($routeProvider,$locationProvider,$httpProvider) {

    $httpProvider.interceptors.push('httpinterceptor');

    var resolve = {
        auth: (['$q', '$location', function ($q, $location) {
        var defer = $q.defer();
        if (localStorage.getItem('token')) {
          defer.resolve();
        } else {
          defer.reject();
          $location.path("#/login");
        }   
        return defer.promise;
        }])
    };

    $routeProvider
      .when('/login', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        // controllerAs: 'main'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        resolve:resolve
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'userCtrl',
        resolve:resolve
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
