/// <reference path="../../typings/angularjs/angular.d.ts" />

namespace app.resetPassword {
  interface IResetPassword {

      mobilePhone : number;
      password : string;
      repeatPassword : string;

    sendResetPassword(resetPasswordData:{}):void;
  }
  class ResetPasswordController implements IResetPassword{
    mobilePhone : number;
    password : string;
    repeatPassword : string;

    /** @ngInject */
    constructor(
      public $log:angular.ILogService,
      public resetPasswordFactory,
      public sweet
    ){

    }
    sendResetPassword(resetPasswordData:{}):void
    {
      this.$log.debug('sendResetPassword start');
      this.$log.debug('sendResetPassword data = '+angular.toJson(resetPasswordData));

      this.resetPasswordFactory.sendResetPassword( (resetPasswordData) => {

      })

    }
  }

  angular
    .module('angularStrap')
    .controller('resetPasswordController', ResetPasswordController);

}
