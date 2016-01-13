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

    var myOtherModal = $modal({
      scope: $scope,
      template: './app/components/templates/modal-registration.tpl.html',
      show: false
    });

    // Show when some event occurs (use $promise property to ensure the template has been loaded)
    vm.showRegisterationModal = function () {
      myOtherModal.$promise.then(myOtherModal.show);
    };


    vm.registrationSubmit = function (mobilePhone,password,privatePolicy,smsPassword) {

      $log.debug('vm.isSmsShow = '+vm.isSmsShow);
      $log.debug('MobilePhone = '+mobilePhone,'Password = '+password,'privatePolicy = '+privatePolicy,'smsPassword = '+smsPassword);
      //vm.isSmsShow = true;

      if(vm.isSmsShow === undefined){
        //vm.disableForm = true;
        vm.isSmsShow = true;
        loginFactory.sendRegistration(mobilePhone,password,privatePolicy,smsPassword)
          .success(function (data) {
            $log.debug('loginFactory.sendLogin success = '+angular.toJson(data));
            // redirect
          })
          .error(function (data) {
            $log.debug('loginFactory.sendLogin error = '+angular.toJson(data));
          });
      }
      else {
        $log.debug('MobilePhone = '+mobilePhone,'Password = '+password,'privatePolicy = '+privatePolicy,'smsPassword = '+smsPassword);

        loginFactory.sendRegistration(mobilePhone,password,privatePolicy,smsPassword)
          .success(function (data) {
            $log.debug('loginFactory.sendLogin success = '+angular.toJson(data));
            // redirect
          })
          .error(function (data) {
            $log.debug('loginFactory.sendLogin error = '+angular.toJson(data));
          });
      }




      //$uibModalInstance.close(vm.registrationData);
    };



  }


})();
