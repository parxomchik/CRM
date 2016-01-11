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
 <client-footer></client-footer>
 </file>
 <file name="main.js">
 function clientFooter() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/client-footer/client-footer.html',
        scope: {
          creationDate: '='
        },
        controller: clientFooterController,
        controllerAs: 'footer',
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
        .directive('clientFooter', clientFooter)
        .controller('clientFooterController', clientFooterController);

    /** @ngInject */
    function clientFooter() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/client-footer/client-footer.html',
        scope: {
          creationDate: '='
        },
        controller: clientFooterController,
        controllerAs: 'footer',
        bindToController: true
      };
      return directive;
    }
  /** @ngInject */
  function clientFooterController($location,$scope) {
    //var vm = this;

  }
})();


