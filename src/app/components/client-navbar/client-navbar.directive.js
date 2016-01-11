/**
 *
 * @ngdoc directive
 * @module project
 * @name clientNavbar
 * @restrict E
 * @description
 * Это директива для подключения навигации на  странице клиента
 *
 * @example
 <example module="project" deps="" animate="false">
 <file name="index.html">
 <client-navbar></client-navbar>
 </file>
 <file name="main.js">
 function clientNavbar() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/components/client-navbar/client-navbar.html',
        scope: {
            creationDate: '='
        },
        controller: clientNavbarController,
        controllerAs: 'navbar',
        bindToController: true
    };

    return directive;
}
 </file>
 </example>
 *
 **/


(function() {
    'use strict';

    angular
        .module('angularStrap')
        .directive('clientNavbar', clientNavbar);

    /** @ngInject */
    function clientNavbar() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/components/client-navbar/client-navbar.html',
        scope: {
            creationDate: '='
        },
        controller: clientNavbarController,
        controllerAs: 'navbar',
        bindToController: true
    };

    return directive;
}
    /** @ngInject */
    function clientNavbarController(screenSize,$scope,$aside,$location) {
        var vm = this;
        if (screenSize.is('xs')) {
            // it's a mobile device so fetch a small image
            vm.navCollapsedMobile = true;
        }else {
            vm.navCollapsedMobile = false;
        }
        var LeftAside = $aside(
        {
        scope: $scope,
        template: './app/components/templates/menu-aside-left.tpl.html',
        show: false,
        placement:'left',
        animation:'am-fade-and-slide-left'
        });

        var RightAside = $aside(
        {
        scope: $scope,
        template: './app/components/templates/menu-aside-right.tpl.html',
        show: false,
        placement:'right',
        animation:'am-fade-and-slide-right'
        });
      // Show when some event occurs (use $promise property to ensure the template has been loaded)
      vm.openLeftAside = function() {
        LeftAside.$promise.then(LeftAside.show);
      };

      vm.openRightAside = function() {
        //alert('right')
        RightAside.$promise.then(RightAside.show);
      };

      vm.feedback = function () {
        LeftAside.hide();
        RightAside.hide();
        $location.path("/client/feedback");
      };
      vm.history = function () {
        LeftAside.hide();
        RightAside.hide();
        $location.path("/client/history");
      };
      vm.propositions = function () {
        LeftAside.hide();
        RightAside.hide();
        $location.path("/client/propositions");
      };
      vm.profile = function () {
        LeftAside.hide();
        RightAside.hide();
        $location.path("/client/profile");
      };
      vm.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };
    }
})();
