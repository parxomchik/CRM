(function() {
    'use strict';

    angular
        .module('angularStrap')
        .factory('propositionsFactory', propositionsFactory);

    /** @ngInject */
    function propositionsFactory($cookies,$http,restConfig) {
        return {
            getPropositions: function () {
                return $http({
                    method: 'GET',
                    url: restConfig.url+'/propositions/',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: {
                      session_id: $cookies.getObject('session_id')
                    }
                }
                )
            }
        };
    }
})();
