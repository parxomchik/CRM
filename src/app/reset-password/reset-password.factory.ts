/// <reference path="../../typings/angularjs/angular.d.ts" />

namespace app.resetPassword {
  interface IResetPasswordFactory {
    getProductResource:(resetPasswordData) => any;
  }


  export class ResetPasswordFactory
  implements IResetPasswordFactory {

    /** @ngInject */
    constructor(
      private $http,
      private restConfig,
      private $httpParamSerializerJQLike
    )
    {

    }
    /** @ngInject */
    getProductResource(resetPasswordData){
    return this.$http({
      method: 'POST',
      url: this.restConfig.url+'resetpassword',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      //data: this.$httpParamSerializerJQLike(resetPasswordData)
      data : resetPasswordData
    })
    }
  }
  angular
    .module("angularStrap")
    .service("resetPasswordFactory", ResetPasswordFactory);
}
