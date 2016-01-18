/**
 * @nameController MainController
 * @element textarea
 * @function
 *
 * @description
 * Resize textarea automatically to the size of its text content.
 *
 * **Note:** ie<9 needs polyfill for window.getComputedStyle
 *
 * @example
 <example module="rfx">
 <file name="index.html">
 <textarea ng-model="text"rx-autogrow class="input-block-level"></textarea>
 <pre>{{text}}</pre>
 </file>
 </example>
 */



(function() {
  'use strict';

  angular
    .module('angularStrap')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(restConfig,$log,$scope,loginFactory,$modal) {
    var vm = this;

    $log.debug('vm = '+angular.toJson(vm));

    vm.slides = [
      {
        img: './assets/slider/1.jpg'
      },
      {
        img: './assets/slider/2.jpg'
      },
      {
        img: './assets/slider/3.jpg'
      }
    ];
    //var scope = $scope.$new();
    //scope.data = ...;
    var myOtherModal = $modal({
      scope: $scope,
      template: './app/components/templates/modal-registration.tpl.html',
      show: false
      //controller: MainController,
      //controllerAs: 'main'
    });

    // Show when some event occurs (use $promise property to ensure the template has been loaded)
    vm.showRegisterationModal = function () {
      myOtherModal.$promise.then(myOtherModal.show);
    };



    vm.registrationSubmit = function (data) {
      //var savedData;
      //var passwordToSend;

      //$log.debug('Modal scope = '+angular.toJson(scope.cardNumber));


      $log.debug('vm.isSmsShow = '+vm.isSmsShow);
      //$log.debug('MobilePhone = '+mobilePhone,'Password = '+password,'privatePolicy = '+privatePolicy,'smsPassword = '+smsPassword);
      $log.debug(data);


      //if(data.cardNumber < 13 && data.cardNumber > 20){
      //  angular.element(document.querySelectorAll("[ng-model=]"));
      //
      //}

      //if(password === repeatPassword){
      //  passwordToSend = password;
      //}

      //savedData = {
      //  mobilePhone: mobilePhone,
      //  password: passwordToSend,
      //  privatePolicy: privatePolicy,
      //  smsPassword:smsPassword
      //};

      if(data.password === data.repeatPassword) {

        if (vm.isSmsShow === undefined) {
          //vm.disableForm = true;
          vm.isSmsShow = true;
          loginFactory.sendRegistration(data)
            .success(function (data) {
              $log.debug('loginFactory.sendLogin success = ' + angular.toJson(data));


              $log.debug('cardNumber = '+$scope.cardNumber);
              // redirect



            })
            .error(function (data) {
              $log.debug('loginFactory.sendLogin error = ' + angular.toJson(data));
            });
        }
        else {
          $log.debug('MobilePhone = ' + data.mobilePhone, 'Password = ' + data.password, 'privatePolicy = ' + data.privatePolicy, 'smsPassword = ' + data.smsPassword);

          loginFactory.sendRegistration(data)
            .success(function (data) {
              $log.debug('loginFactory.sendLogin success = ' + angular.toJson(data));
              myOtherModal.$promise.then(myOtherModal.hide);
              vm.isSmsShow = false;
              //$log.debug('cardNumber = '+scope.cardNumber);
              //scope.cardNumber = '';
              // redirect
            })
            .error(function (data) {
              $log.debug('loginFactory.sendLogin error = ' + angular.toJson(data));
            });
        }

      }
      else {
        $log.error("Паролі не співпадають")
      }


      //$uibModalInstance.close(vm.registrationData);
    };



  }


})();
