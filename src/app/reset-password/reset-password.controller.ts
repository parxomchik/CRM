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
        .success((data) => {
          console.log(data);
          this.isSmsShow = true;
        })
        .error((data) => {
          console.log(data);
        });
    }
  }
  angular
    .module('angularStrap')
    .controller('resetPasswordController', ResetPasswordController);
}
