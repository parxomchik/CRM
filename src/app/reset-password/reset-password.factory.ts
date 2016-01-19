/// <reference path="../../typings/angularjs/angular.d.ts" />


namespace app.resetPassword {
  interface IResetPasswordFactory {
    sendResetPassword(resetPasswordData:{}):void
  }
  class ResetPasswordFactory implements IResetPasswordFactory{
    constructor(){

    }
    sendResetPassword(resetPasswordData:{}){
      return
    }
  }
  angular
    .module('angularStrap')
    .factory('resetPasswordFactory',ResetPasswordFactory);
}
