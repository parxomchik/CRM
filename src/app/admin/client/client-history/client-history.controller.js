(function() {
    'use strict';

angular
    .module('angularStrap')
    .controller('clientHistoryController', clientHistoryController);

/** @ngInject */
function clientHistoryController($log,historyFactory) {
    $log.debug("clientHistoryController start");

    var vm = this;
    historyFactory.getHistory()
        .success(function(data){

            $log.debug('historyFactory.getHistory success = '+angular.toJson(data));

            vm.sort = data.data.sort;

            vm.bonuses = data.data.bonuses;

            vm.orders = data.data.orders;

        })
        .error(function (data) {
            $log.debug('historyFactory.getHistory error = '+angular.toJson(data));

        });
     vm.historySearch = function (periodBegin,periodEnd) {
       alert('aaa');
       historyFactory.getPeriod(periodBegin,periodEnd)
         .success(function (data) {
           $log.debug('historyFactory.getPeriod success = '+angular.toJson(data));
           vm.orders = data.data.orders;
         })
         .error(function (data) {
           $log.debug('historyFactory.getPeriod error = '+angular.toJson(data));

         });
     };
}
})();
