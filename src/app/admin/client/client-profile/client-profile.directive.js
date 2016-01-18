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

     //var BirthDayDate = angular.element( document.querySelector( '#BirthDayDate' )).val();
     // console.log(BirthDayDate);

      scope.$watch(attrs.ngModel, function (v) {
        //console.log('BirthDay = '+ angular.isObject(scope.profile.profiles.BirthDay));
        //console.log('BirthDay2 = '+ angular.isUndefined(scope.profile.profiles.BirthDay));

        //console.log('BirthDay3 = '+ angular.isDefined(scope.profile.profiles.BirthDay));
        //console.log('BirthDay4 = '+ angular.isDefined(v));
        //console.log('BirthDay5 = '+ angular.isUndefined(v));
        console.log('BirthDay  typeof = '+ (scope.profile.profiles.BirthDay === null));
        console.log('BirthDay  typeof ne ravno = '+ (scope.profile.profiles.BirthDay !== null));
        //console.log(scope.profile.profiles.BirthDay === null);
        console.log('v ='+v);
        if( v === '' ){
          //if( scope.profile.profiles.BirthDay === null){
          element.parent().addClass('has-error');
          element.parent().append("<span class='span-error' >Це поле є обов'язковим</span>");
          element[0].focus();
          scope.isDisabled = true;
          //console.log('BirthDay = '+scope.profile.profiles.BirthDay)
          //}
        }
        if(v !== ''  ){
          element.parent().removeClass('has-error');
          angular.element( document.querySelector( '.span-error' )).remove();
          scope.isDisabled = false;
          //console.log('BirthDay = '+scope.profile.profiles.BirthDay)

        }
      });

    }
  }

})();

