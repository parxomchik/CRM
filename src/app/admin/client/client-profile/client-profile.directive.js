(function () {
  'use strict';

  angular
    .module('angularStrap')
    .directive('validation', validation);

  /* @ngInject */
  function validation() {
    var directive = {
      link: link,
      restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {



      scope.$watch(attrs.ngModel, function (v) {

        console.log('BirthDay  typeof = '+ (scope.profile.profiles.BirthDay === null));
        console.log('BirthDay  typeof ne ravno = '+ (scope.profile.profiles.BirthDay !== null));
        console.log('v ='+v);
        if( v === '' ){
          element.parent().addClass('has-error');
          element.parent().append("<span class='span-error' >Це поле є обов'язковим</span>");
          element[0].focus();
          scope.isDisabled = true;

        }
        if(v !== ''  ){
          element.parent().removeClass('has-error');
          angular.element( document.querySelector( '.span-error' )).remove();
          scope.isDisabled = false;

        }
      });

    }
  }

})();

