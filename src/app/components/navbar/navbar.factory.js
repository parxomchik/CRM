(function() {
    'use strict';

    angular
        .module('angularStrap')
        .factory('navbarFactory', navbarFactory);

    /** @ngInject */
    function navbarFactory($http,restConfig,$httpParamSerializerJQLike){
        return {
            sendLogin: function (mobilePhone,password,privatePolicy) {
              return $http({
                method: "POST",
                url: restConfig.url+'registration',
                headers:{
                  'Content-Type': "application/x-www-form-urlencoded;charset=utf-8"
                },
                data:$httpParamSerializerJQLike(mobilePhone,password,privatePolicy)
              });
            }
        };
    }
})();
