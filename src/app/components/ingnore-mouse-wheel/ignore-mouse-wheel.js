(function() {

  'use strict';

  /**
   * @ngdoc directive
   * @name  ignoreMouseWheel;
   * @description disable mouse wheel on input elements type number
   */



  angular.module('angularStrap')
    .directive('ignoreMouseWheel', function ($timeout) {
      return {
        restrict: 'A',
        link: function (scope, element) {
          element.bind('mousewheel', function() {
            element[0].blur();
            $timeout(function () {
              element[0].focus();
            }, 10);
          });
        }
      };
    });

}());
