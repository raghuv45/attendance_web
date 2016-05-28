'use strict';

/**
 * @ngdoc function
 * @name mantraattendanceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mantraattendanceApp
 */
angular.module('mantraattendanceApp')
  .controller('homeCtrl', function ($scope,userService,$location) {

    userService.getUsers().then(function(response){
		console.log("response",response)
		$scope.users = response;
	}).catch(function(err){
		  $scope.getUsersApiError = err.message;
  	});

  	$scope.acceptUser = function (userid,index) {
  		$scope.acceptUserApiError = '';
  		userService.acceptUser({id:userid}).then(function(response){
			console.log("response",response)
			$scope.users[index].status = 'closed'
		}).catch(function(err){
			  $scope.acceptUserApiError = err.message;
	  	});
  	}

  	$scope.deleteUser = function (userid,index) {
  		$scope.deleteUserApiError = '';
  		userService.deleteUser({id:userid}).then(function(response){
  			$scope.users.splice(index,1)
			console.log("response",response)
		}).catch(function(err){
			  $scope.deleteUserApiError = err.message;
	  	});

  	}

  	$scope.showUserDetails = function (user) {
  		console.log("sdsdg")
  		$location.path('/user' + '?' + user.id)
  	}

  	// $scope.users = [{"email":"raghu1","status":"closed","id":"123456"},{"email":"raghu","status":"open","id":"123456"}
  	// ]
  });
