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
    .controller('MainController', MainController)

  /** @ngInject */
  function MainController(restConfig,$log,$scope, loginFactory,$modal) {
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

    var myOtherModal = $modal({scope: $scope, template: './app/components/templates/modal-registration.tpl.html', show: false});
    // Show when some event occurs (use $promise property to ensure the template has been loaded)
    vm.showRegisterationModal = function () {
      myOtherModal.$promise.then(myOtherModal.show);
    };
    vm.registrationSubmin = function (MobilePhone,Password,privatePolicy) {
      $log.debug(MobilePhone,Password,privatePolicy);
      vm.registrationData = {
        phoneNumber:MobilePhone,
        password: Password,
        privatePolicy: privatePolicy
      };
      //$uibModalInstance.close(vm.registrationData);
    };



  }


})();
