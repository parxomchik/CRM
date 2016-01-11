(function() {
    'use strict';

angular
    .module('angularStrap')
    .controller('clientHistoryController', clientHistoryController);

/** @ngInject */
function clientHistoryController($scope,$log,historyFactory) {
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
    //vm.bonuses = {
    //    activeBonus: 123,
    //    bonusReceived:132
    //};
    //vm.sort={
    //    periodBegin:'12.03.2015',
    //    periodEnd:'12.03.2015'
    //};

    //vm.orders = [
    //    {
    //        orderDate:'22.10.2015',
    //        orderCardNumber:'22231231',
    //        orderDocNumber:'123123',
    //        orderTotal:'1222',
    //        orderBonusTotal: '333',
    //        orderSaifTotal: '12',
    //        orderBonusDeducted: '12',
    //        orderSaifDeducted: '12'
    //    },
    //    {
    //        orderDate:'22.10.2015',
    //        orderCardNumber:'22231231',
    //        orderDocNumber:'123123',
    //        orderTotal:'1222',
    //        orderBonusTotal: '333',
    //        orderSaifTotal: '12',
    //        orderBonusDeducted: '12',
    //        orderSaifDeducted: '12'
    //    }
    //];





}
})();
