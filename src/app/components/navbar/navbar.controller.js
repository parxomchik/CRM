(function() {
    'use strict';

    angular
        .module('angularStrap')
        .controller('navbarController',navbarController);

    /** @ngInject */
    function navbarController($location,$scope,$log,$modal,navbarFactory) {
        var vm = this;
        $log.debug('Start navbarController');

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



      vm.loginSubmit = function (mobilePhone,password,privatePolicy) {

        $log.debug( 'loginSubmit mobilePhone = '+mobilePhone,'password = '+password,'privatePolicy = '+privatePolicy);

        navbarFactory.sendLogin(mobilePhone,password,privatePolicy)
          .success(function(data){
            $log.debug('navbarFactory.sendLogin success = '+angular.toJson(data));

          })
          .error(function(data){
            $log.debug('navbarFactory.sendLogin success = '+angular.toJson(data));
          });
      };
    }





})();

