'use strict';


angular.module('mantraattendanceApp')
  .controller('userCtrl', function ($scope,$rootScope,userService,$location) {

  	$scope.userId = $location.url().split('?')[1];
    if($scope.userId){
      userService.getUserDetails({id:$scope.userId}).then(function(response){
        $scope.userDetails = response;        
      }).catch(function(err){
        $scope.fetchUserDetailsApiError = err.message;
      });
    }

  });
