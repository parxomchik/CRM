(function() {
    'use strict';

    angular
        .module('angularStrap')
        .controller('navbarController',navbarController);

    /** @ngInject */
    function navbarController($location,$scope,$log,$modal,navbarFactory) {

        var vm = this;
        $log.debug('Start navbarController');

        vm.loginData = {};

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

      var myOtherModal = $modal({
        scope: $scope,
        template: './app/components/templates/modal-login.tpl.html',
        show: false
      });
      // Show when some event occurs (use $promise property to ensure the template has been loaded)
      vm.showLoginModal = function () {
        myOtherModal.$promise.then(myOtherModal.show);
      };



      vm.loginSubmit = function (loginData) {

        $log.debug( 'loginSubmit mobilePhone = '+loginData.mobilePhone,'password = '+loginData.password,'privatePolicy = '+loginData.privatePolicy);

        navbarFactory.sendLogin(loginData)
          .success(function(data){
            $log.debug('navbarFactory.sendLogin success = '+angular.toJson(data));

          })
          .error(function(data){
            $log.debug('navbarFactory.sendLogin error = '+angular.toJson(data));
          });
      };
    }





})();

