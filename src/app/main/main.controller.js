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
  function MainController($log,$scope,loginFactory,$modal) {
    var vm = this;
        vm.registration = {};
        vm.isSmsShow = false;

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

    vm.registrationSubmit = function (data) {

      if(data.password === data.repeatPassword) {

        if (vm.isSmsShow === false) {
          vm.isSmsShow = true;
          loginFactory.sendRegistration(data)
            .success(function (data) {
              $log.debug('loginFactory.sendLogin success = ' + angular.toJson(data));

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
              vm.registration = null;

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

    };

  }

})();
