/**
 *
 * @ngdoc directive
 * @module project
 * @name clientSidebar
 * @restrict E
 * @description
 * Это директива для подключения бокового меню на странице клиента
 *
 * @example
 <example module="project" deps="" animate="false">
 <file name="index.html">
 <client-sidebar></client-sidebar>
 </file>
 <file name="main.js">
 function clientSidebar() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/components/client-sidebar/client-sidebar.html',
        scope: {
            creationDate: '='
        },
        controller: clientSidebarController,
        controllerAs: 'vm',
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
        .directive('clientSidebar', clientSidebar);


    function clientSidebar() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/components/client-sidebar/client-sidebar.html',
        scope: {
            creationDate: '='
        },
        controller: clientSidebarController,
        controllerAs: 'sidebar',
        bindToController: true
    };

    return directive;
}
    /** @ngInject */
    function clientSidebarController($location) {
        //var vm = this;
        //          vm.feedback = function () {
        //             $location.path("/client/feedback");
        //          };
        //          vm.history = function () {
        //             $location.path("/client/history");
        //          };
        //          vm.propositions = function () {
        //             $location.path("/client/propositions");
        //          };
        //          vm.profile = function () {
        //             $location.path("/client/profile");
        //          };
        //          vm.isActive = function (viewLocation) {
        //              return viewLocation === $location.path();
        //          };
    }
})();
