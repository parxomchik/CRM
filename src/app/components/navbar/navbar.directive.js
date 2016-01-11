/**
 *
 * @ngdoc directive
 * @module project
 * @name userNavbar
 * @restrict E
 * @description
 * Это директива для подключения навигации на главной странице
 *
 * @example
 <example module="project" deps="" animate="false">
 <file name="index.html">
 <user-navbar></user-navbar>
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
    .directive('userNavbar', userNavbar);

  /** @ngInject */
  function userNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      }
    };
    return directive;
  }
})();
