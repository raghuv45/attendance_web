'use strict';

/**
 * @ngdoc function
 * @name mantraattendanceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mantraattendanceApp
 */
angular.module('mantraattendanceApp')
  .controller('MainCtrl', function ($scope,$rootScope,userService,$location) {

  	$scope.domainError = false;

    $scope.login = function (data) {
    	console.log("data",data)
    	if(!$scope.domainError && $scope.inputform.$valid){
    		userService.login(data).then(function(response){
    			console.log("response",response)
				localStorage.setItem('token',response.token);
				$location.path('/home')
			}).catch(function(err){
				  $scope.error = err.message;
		  	});
    	}
    	console.log("data",data)
    }

    $scope.validateDomain = function (data){
    	if(data)
    		var domain = data.split('@')[1];
    	if(domain){
	    	if (domain == 'gmail.com'){
	    		$scope.domainError = false;
	    	}else{
	    		$scope.domainError = true;
	    	}
    	}
    }

  });
