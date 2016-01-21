/// <reference path="../../typings/angularjs/angular.d.ts" />

namespace app.resetPassword {

  interface IResetPassword {
    sendResetPassword(resetData:{})
    isSmsShow:boolean;
    isSmsSendShow:boolean;
    isPasswordError:boolean;
    resetData:{
      password:string;
      repeatPassword:string;
    };

  }

  class ResetPasswordController implements IResetPassword {

    isSmsShow:boolean;
    isSmsSendShow:boolean;
    isPasswordError:boolean;
    resetData:{
      password:string;
      repeatPassword:string;
    };

    /** @ngInject */
    constructor(
      private resetPasswordFactory,
      private $log
    )
    {

    }

    sendResetPassword(resetData){
      this.$log.debug('isSmsShow = '+this.isSmsShow);

      // проверяем если установлен флаг isSmsShow который при значении true показывает поле ввода пароля с смс
      // если нет флага отправляем первый запрос при success => устанавливаем флаг true и показываем ввода смс.


      if(this.isSmsShow === undefined){

        this.resetPasswordFactory.getProductResource(resetData)
          .success((data) => {
            console.log(data);
            this.isSmsShow = true;
          })
          .error((data) => {
            console.log(data);
          });
      }

      else {

        // проверяем на существование поля password
        // если не установлен => отправляем второй запрос при success => устанавливаем флаг isSmsSendShow true и показываем поля изменения паролей.

        this.$log.debug('resetData.password = '+this.resetData.password);

        if(resetData.password === undefined){

          this.resetPasswordFactory.getProductResource(resetData)
            .success((data) => {
              console.log(data);
              this.isSmsSendShow = true;
            })
            .error((data) => {
              console.log(data);
            });
        }

        else {

          // проверяем на совпадение паролей если совпадают отправляем 3 раз
          // если не установлен => отправляем второй запрос при success => переход в личный кабинет.


          if(this.resetData.password === this.resetData.repeatPassword){

            this.isPasswordError = false;

            this.resetPasswordFactory.getProductResource(resetData)
              .success((data) => {

                console.log(data);

              })
              .error((data) => {

                console.log(data);

              });
          }

          // Если пароли не совпадают - устанавливаем флаг isPasswordError = true для подсветки ошибки.

          else {
            this.isPasswordError = true;

            this.$log.error('Пароли не совпадают');
          }
        }

      }
    }
  }
  angular
    .module('angularStrap')
    .controller('resetPasswordController', ResetPasswordController);
}
