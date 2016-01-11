(function() {
    'use strict';

    angular
        .module('angularStrap')
        .controller('NavbarController',NavbarController);

    /** @ngInject */
    function NavbarController($location,$scope,$log,$modal) {
        var vm = this;

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
      var myOtherModal = $modal({
        scope: $scope,
        template: './app/components/templates/modal-login.tpl.html',
        //"content": "<modal-login></modal-login>",
        show: false
      });
      // Show when some event occurs (use $promise property to ensure the template has been loaded)
      vm.showLoginModal = function () {
        myOtherModal.$promise.then(myOtherModal.show);
      };
      vm.loginSubmit = function (MobilePhone,Password,privatePolicy) {
        $log.debug(MobilePhone,Password,privatePolicy);
        vm.registrationData = {
          phoneNumber:MobilePhone,
          password: Password,
          privatePolicy: privatePolicy
        };
      };
    }





})();

