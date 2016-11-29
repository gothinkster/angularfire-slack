angular.module('angularfireSlackApp')
  .factory('Auth', function($firebaseAuth){
    var auth = $firebaseAuth();

    return auth;
  });
