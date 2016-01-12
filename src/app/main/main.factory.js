(function() {
    'use strict';

    angular
        .module('angularStrap')
        .factory('loginFactory', loginFactory);

    /** @ngInject */
    function loginFactory($http,$cookies,$log,restConfig,$httpParamSerializerJQLike){
        return {

            sendLogin: function (mobilePhone,password,privatePolicy) {
              return $http({
                method: "POST",
                url: restConfig.url+'login',
                headers:{
                  'Content-Type': "application/x-www-form-urlencoded;charset=utf-8"
                },
                data:$httpParamSerializerJQLike(mobilePhone,password,privatePolicy)
              });
            },

            sendRegistration: function (mobilePhone,password,privatePolicy) {
              return $http({
                method: "POST",
                url: restConfig.url+'registration',
                headers:{
                  'Content-Type': "application/x-www-form-urlencoded;charset=utf-8"
                },
                data:$httpParamSerializerJQLike(mobilePhone,password,privatePolicy)
              });
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
