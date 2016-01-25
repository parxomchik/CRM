/// <reference path="../../../../typings/angularjs/angular.d.ts" />

module app.history {

  interface IClientHistoryController {

    orders:any[];
    bonuses:any[];
    sort:any[];
    historySearch(periodBegin,periodEnd):void;
    init():void;
  }


  class ClientHistoryController implements IClientHistoryController{


    orders:any[];
    bonuses:any[];
    sort:any[];

    /** @ngInject */
    constructor(
      public $log:angular.ILogService,
      public historyFactory
      //public sweet
    ){
      $log.debug("clientHistoryController start");
      this.init();
    }
    /** @ngInject */
    historySearch(periodBegin,periodEnd):void{

      var vm = this;
      var $log = this.$log;
      //var historyFactory = this.historyFactory ;
      //var sweet = this.sweet;


      this.historyFactory.getPeriod(periodBegin,periodEnd)
        .success(function (data) {
          $log.debug('historyFactory.getPeriod success = '+angular.toJson(data));
          vm.orders = data.data.orders;
        })
        .error(function (data) {
          $log.debug('historyFactory.getPeriod error = '+angular.toJson(data));
        });

    }


    init():void{

      var $log = this.$log;
      var vm = this;

      this.historyFactory.getHistory()
        .success(function(data){

          $log.debug('historyFactory.getHistory success = '+angular.toJson(data));

          vm.sort = data.data.sort;

          vm.bonuses = data.data.bonuses;

          vm.orders = data.data.orders;

        })
        .error(function (data) {
          $log.debug('historyFactory.getHistory error = '+angular.toJson(data));

        });
    }
  }

  angular
    .module('angularStrap')
    .controller('clientHistoryController', ClientHistoryController);
}

