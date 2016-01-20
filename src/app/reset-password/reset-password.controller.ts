/// <reference path="../../typings/angularjs/angular.d.ts" />

namespace app.resetPassword {

  interface IResetPassword {
    sendResetPassword(resetData:{})
  }

  class ResetPasswordController implements IResetPassword {

    /** @ngInject */
    constructor(
      private resetPasswordFactory
    )
    {

    }

    sendResetPassword(resetData){

      this.resetPasswordFactory.getProductResource(resetData)
        .success(function (data) {
          console.log(data);
        })
        .error(function (data) {
          console.log(data);
        });
    }
  }

  angular
    .module('angularStrap')
    .controller('resetPasswordController', ResetPasswordController);
}
