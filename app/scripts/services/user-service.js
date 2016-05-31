angular.module('mantraattendanceApp')
  .service('userService', function ($q, $http, $resource,$rootScope) {

    var baseUrl = "http://apiattendance.rakeshmakam.com:1337/"
  	this.login = function (data) {
      var deferred = $q.defer();
      $http.post('/api/admin/login', data)
      // $http.post(baseUrl+'admin/login', data)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    }

    this.getUsers = function (data) {
      var deferred = $q.defer();
      $http.get('/api/admin/users')
      // $http.get(baseUrl+'admin/users')
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    }

    this.getUserDetails = function (user) {
      var deferred = $q.defer();
      $http.get('/api/admin/user-details/' + user.id)
      // $http.get(baseUrl+'admin/user-details/' + user.id)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    }

    this.acceptUser = function (user) {
      var deferred = $q.defer();
      $http.get('/api/user/accept/'+user.id)
      // $http.get(baseUrl+'user/accept/'+user.id)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    }

    this.deleteUser = function (user) {
      var deferred = $q.defer();
      $http.get('/api/user/reject/'+user.id)
      // $http.get(baseUrl+'user/reject/'+user.id)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    }

    this.getCancelled = function (user) {
      var deferred = $q.defer();
      $http.get('/api/get-cancelled')
      // $http.get(baseUrl+'get-cancelled')
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    }

    // this.getData = function (data) {
    //   var deferred = $q.defer();
    //   $http.post('/api/add', data)
    //   .success(function(response){
    //     deferred.resolve(response);
    //   })
    //   .error(function(err){
    //     deferred.reject(err);
    //   });
    //   return deferred.promise;
    // }

    // this.addUser = function (data) {
    //   var deferred = $q.defer();
    //   $http.post('/api/add', data)
    //   .success(function(response){
    //     deferred.resolve(response);
    //   })
    //   .error(function(err){
    //     deferred.reject(err);
    //   });
    //   return deferred.promise;
    // }

    // this.deleteUser = function (data) {
    //   var deferred = $q.defer();
    //   $http.post('/api/delete', data)
    //   .success(function(response){
    //     deferred.resolve(response);
    //   })
    //   .error(function(err){
    //     deferred.reject(err);
    //   });
    //   return deferred.promise;
    // }


  });