(function() {
    'use strict';

    angular
        .module('angularStrap')
        .factory('loginFactory', loginFactory);

    /** @ngInject */
    function loginFactory($http,$cookies,$log,$state){
        return {
            sendLogin: function (data) {
                return $http({
                    method: 'POST',
                    url: 'http://wall.epicentr.com:8081/api/login',
                    data: $.param({
                        email:  data.email,
                        password:  data.password
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            },
            sendRegistration: function (data) {
                return $http({
                    method: 'POST',
                    url: 'http://wall.epicentr.com:8081/api/dashboard',
                    data: $.param({
                        session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            },
            userStatus: function ($state,$q) {
                //if(res = 'undefided'){
                //  alert(222)
                //  //$state.go('history');
                //  return $q.reject();
                //}
                //else {
                //  alert(111);
                //  //window.location.href = '#/client/history';
                //
                //  return  $cookies.getObject('session_id');
                //}
              var cookie =  $cookies.getObject('session_id');
              $log.debug(cookie);
              //if(cookie = 'undefined'){
                //window.location.href = '#/client/history';
                //$state.go('history')

              //}
              //else{
              //  return $cookies.getObject('session_id');
              //}
              //$log.debug(cookie);
              return cookie;
            }
        };
    }
})();
