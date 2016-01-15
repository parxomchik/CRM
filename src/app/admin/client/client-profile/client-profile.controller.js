(function() {
    'use strict';

angular
    .module('angularStrap')
    .controller('clientProfileController', clientProfileController);

/** @ngInject */
function clientProfileController($log,profileFactory,sweet,$filter) {
    $log.debug("clientProfileController start");

    var vm = this;
    vm.profiles = {};

    profileFactory.getProfile()
        .success(function(data){
            $log.debug(' profileFactory.getProfile success = '+angular.toJson(data.data));
            vm.profiles = data.data;
            $log.debug('vm.profiles.BirthDay1 = '+vm.profiles.BirthDay1);
            if(vm.profiles.BirthDay1 == null){
              vm.profiles.BirthDay1 = $filter('date')(new Date(),'dd.MM.yyyy');
            }
        })
        .error(function (data) {
            $log.debug(' profileFactory.getProfile error = '+angular.toJson(data.data));

        });
    vm.saveProfile = function (profileData) {

      delete profileData.Areas;
      delete profileData.Genders;
      delete profileData.Cities;
      delete profileData.MaritalStatuses;
      delete profileData.Regions;

      $log.debug('vm.saveProfile profileData = '+angular.toJson(profileData));
      $log.debug('vm.saveProfile profileData = '+angular.toJson(profileData.LastName));


      //function CheckForm(){
      //
      //  $log.error('CheckForm start');
      //
      //  //for (var i = 0;  ){}
      //
      //
      //   /*
      //    *   Пройтись по всем полям с пометкой или класом если это поле пустое добавить клас контейнеру has-error и вставить span с ошибкой
      //    *   Если все поля заполнены - выполнить отправку
      //     *
      //    *
      //    *
      //    *
      //     *  */
      //
      //}
      //
      //
      //CheckForm.prototype.resetErrors = function (){
      //
      // return $log.error('checkForm prototype works');
      //
      //};
      //
      //
      //
      //
      //var profileForm = new CheckForm();
      //
      //profileForm.resetErrors();

      //if(profileData.LastName === '' || profileData.FirstName === '' || profileData.SurName === ''){
      //
      //  if(profileData.LastName === ''){
      //    angular.element(document.querySelector('#lastname')).addClass('has-error');
      //    vm.focusInputLastName = true;
      //  }
      //  else{
      //    angular.element(document.querySelector('#lastname')).removeClass('has-error');
      //    vm.focusInputLastName = false;
      //  }
      //
      //
      //  if(profileData.FirstName === ''){
      //    angular.element(document.querySelector('#firstname')).addClass('has-error');
      //    vm.focusInputFirstName = true;
      //  }
      //  else{
      //    angular.element(document.querySelector('#firstname')).removeClass('has-error');
      //    vm.focusInputFirstName = false;
      //  }
      //
      //
      //  if(profileData.SurName === ''){
      //    angular.element(document.querySelector('#surname')).addClass('has-error');
      //    vm.focusInputSurName = true;
      //  }
      //  else{
      //    angular.element(document.querySelector('#surname')).removeClass('has-error');
      //    vm.focusInputSurName = false;
      //  }
      //
      //
      //}


      //else {
        //angular.element(document.querySelector('#lastname')).removeClass('has-error');
        //vm.focusInputLastName = false;
        //
        //
        //angular.element(document.querySelector('#firstname')).removeClass('has-error');
        //vm.focusInputFirstName = false;
        //
        //angular.element(document.querySelector('#surname')).removeClass('has-error');
        //vm.focusInputSurName = false;



        profileFactory.saveProfile(profileData)
          .success(function(data){
            $log.debug(' profileFactory.saveProfile success = '+angular.toJson(data));
            sweet.show({
              title: "ДАНІ ЗБЕРЕЖЕНО",
              text: "You will not be able to recover this imaginary file!",
              type: "success",
              timer: 1500,
              showConfirmButton: false
            });
          })
          .error(function (data) {
            $log.debug(' profileFactory.saveProfile error = '+angular.toJson(data));
            sweet.show({
              title: "ПОМИЛКА ЗБЕРЕЖЕННЯ",
              text: "Спробуйте пізніше",
              type: "error",
              timer: 1500,
              showConfirmButton: false
            });
          });
      };
      //};



      //};



    vm.KidsSelect = function (value){
            $log.debug('vm.profiles.KidsIsSelected = '+value);
            if(vm.profiles.Kids.length == 0){
                vm.profiles.Kids.push(
                  {
                    id:0,
                    Genders: [
                      {
                        GendertId: 1,
                        GenderName:'aaa1'
                      },
                      {
                        GendertId: 2,
                        GenderName:'aaa2'
                      }
                    ],
                    selectedGender:{
                      GendertId:2,
                      GenderName:'aaa2'
                    }
                  }
                );
                $log.debug('vm.profiles.Kids.length = '+vm.profiles.Kids.length);
                $log.debug('vm.profiles.Kids = '+angular.toJson(vm.profiles.Kids));

            }
    };
    vm.KidRemove = function ($index) {
        $log.debug('KidRemove $index = '+$index);
            vm.profiles.Kids.splice($index,1);
        $log.debug('vm.profiles.Kids.length = '+vm.profiles.Kids.length);

        if (vm.profiles.Kids.length == 0){
            vm.profiles.KidsIsSelected = 2;
        }
    };
    vm.KidAdd = function () {
        vm.profiles.Kids.push(
            {
              id:0,
              Genders: [
                {
                  GendertId: 1,
                  GenderName:'aaa1'
                },
                {
                GendertId: 2,
                 GenderName:'aaa2'
                }
              ],
              selectedGender:{
                GendertId:2,
                GenderName:'aaa2'
              }
            }
        );
      $log.debug(vm.profiles.Kids)
    };
    vm.AreaChange = function (data) {
        $log.debug('AreaChange = '+data);
        $log.debug('vm.profiles.RegionSelectIsDisabled = '+vm.profiles.RegionSelectIsDisabled);

        profileFactory.getProfileRegions(data)
            .success(function (data) {
                vm.profiles.Regions = data.data;
            })
            .error(function (data) {
              $log.debug('profileFactory.getProfileRegions = '+data);
            });
        if (data !== 0){
            vm.profiles.RegionSelectIsDisabled = false;
            $log.debug('vm.profiles.RegionSelectIsDisabled = '+vm.profiles.RegionSelectIsDisabled);
        }
        else {
            vm.profiles.RegionSelectIsDisabled = true;
        }
    };


    vm.RegionChange = function (data) {
        profileFactory.getProfileCities(data)
            .success(function (data) {
                vm.profiles.Cities = data.data;
            })
            .error(function (data) {
                $log.debug('profileFactory.getProfileCities = '+data);
            });
        $log.debug('RegionChange = '+data);
        $log.debug('vm.profiles.CitySelectIsDisabled = '+vm.profiles.CitySelectIsDisabled);
        if (data !== 0){

            vm.profiles.CitySelectIsDisabled = false;
            $log.debug('vm.profiles.CitySelectIsDisabled = '+vm.profiles.CitySelectIsDisabled);
        }
        else {
            vm.profiles.CitySelectIsDisabled = true;

        }
    }



}
})();
