(function() {
    'use strict';

    angular
        .module('angularStrap')
        .factory('navbarFactory', navbarFactory);

    /** @ngInject */
    function navbarFactory($http,restConfig,$httpParamSerializerJQLike){
        return {
            sendLogin: function (loginData) {
              return $http({
                method: "POST",
                url: restConfig.url+'login',
                headers:{
                  'Content-Type': "application/x-www-form-urlencoded;charset=utf-8"
                },
                data:$httpParamSerializerJQLike(loginData)
              });
            }
        };
    }
})();
