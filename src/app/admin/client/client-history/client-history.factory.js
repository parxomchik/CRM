(function() {
    'use strict';

    angular
        .module('angularStrap')
        .factory('historyFactory', historyFactory);

    /** @ngInject */
    function historyFactory($cookies,$http,$stateParams,restConfig) {
      return {
        getHistory: function () {
          return $http({
            method: 'GET',
            url: restConfig.url + 'history',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: {
              session_id: $cookies.getObject('session_id')
            }
          });
        },
        getPeriod: function (periodBegin,periodEnd) {
          return $http({
            method: 'POST',
            url: restConfig.url + 'history/getPeriod',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: {
              periodBegin:periodBegin,
              periodEnd:periodEnd,
              session_id: $cookies.getObject('session_id')
            }
          });
        }
      }
    }
})();
