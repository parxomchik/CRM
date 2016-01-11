/**
 *
 * @ngdoc directive
 * @module project
 * @name mainFooter
 * @restrict E
 * @description
 * Это директива для подключения подвала на главной странице
 *
 * @example
 <example module="project" deps="" animate="false">
 <file name="index.html">
 <main-footer></main-footer>
 </file>
 <file name="main.js">
 function userNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      }
    };
    return directive;
  } </file>
 </example>
 *
 **/


(function() {
    'use strict';

    angular
        .module('angularStrap')
        .directive('mainFooter', mainFooter);


    function mainFooter() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/components/footer/footer.html',
        scope: {
            creationDate: '='
        },
        controller: footerController,
        controllerAs: 'footer',
        bindToController: true
    };

    return directive;
}
    /** @ngInject */
    function footerController($location,$scope) {
        //var vm = this;

    }
})();
