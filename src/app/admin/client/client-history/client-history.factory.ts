/// <reference path="../../../../typings/angularjs/angular.d.ts" />

namespace app.history {
  interface IHistoryFActory {
    getHistory:() => any;
    getPeriod:(periodBegin:string,periodEnd:string) => any;
  }


  export class HistoryFactory
  implements IHistoryFActory {

    /** @ngInject */
    constructor(
      private $http,
      private restConfig,
      private $httpParamSerializerJQLike
    )
    {

    }
    /** @ngInject */
    getHistory(){
      return this.$http({
        method: 'GET',
        url: this.restConfig.url+'history',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      })
    }

    /** @ngInject */
    getPeriod(periodBegin,periodEnd){
      return this.$http({
        method: 'POST',
        url: this.restConfig.url+'history/getPeriod',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: {
          periodBegin:periodBegin,
          periodEnd:periodEnd,
        }
      })
    }
  }
  angular
    .module("angularStrap")
    .service("historyFactory", HistoryFactory);
}

