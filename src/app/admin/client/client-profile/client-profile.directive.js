(function () {
  'use strict';

  angular
    .module('angularStrap')
    .directive('validation', validation);

  /* @ngInject */
  function validation() {
    var directive = {
      //bindToController: true,
      //controller: ControllerName,
      //controllerAs: 'vm',
      link: link,
      restrict: 'A'
      //scope: {}
    };
    return directive;

    function link(scope, element, attrs) {



      scope.$watch(attrs.ngModel, function (v) {

        if(v === '' || undefined ){
          element.parent().addClass('has-error');
          element.parent().append("<span class='span-error' >Це поле є обов'язковим</span>");
          element[0].focus();
          scope.isDisabled = true;
        }
        if(v !== '' ){
          element.parent().removeClass('has-error');
          angular.element( document.querySelector( '.span-error' )).remove();
          scope.isDisabled = false;
        }
      });

    }
  }

})();

