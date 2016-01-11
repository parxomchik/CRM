(function() {
    'use strict';

angular
    .module('angularStrap')
    .controller('clientProfileController', clientProfileController);

/** @ngInject */
function clientProfileController($scope,$log,profileFactory,sweet,$filter) {
    $log.debug("clientProfileController start");
    //$scope.PolicyIsSelected = true;
    //var res = loginFactory.userStatus();
    ////var res2 = $cookies.getObject('session_id');
    //$log.debug('res = '+angular.toJson(res));

    var vm = this;
    vm.profiles = {};
    //vm.profiles.BirthDay1 = '111';
    //vm.profiles.BirthDay1 = $filter('date')(new Date(),'dd.MM.yyyy');
    //vm.curentDate = function(){
    //  $log.debug('curentDate');
    //  var date = new Date();
    //  var date1 = $filter('date')(new Date(),'dd.MM.yyyy');
    //  $log.debug(date);
    //  $log.debug(date1);
    //  return 111;
    //}

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

      $log.debug(profileData);



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

    //vm.profiles = {
    //    FirstName:"Константин",
    //    LastName:"Юштин",
    //    SurName:"Єдуардович",
    //    BirthDay: "10.12.1990",
    //    Genders: [
    //        {
    //            GendertId: 1,
    //            GenderName:'aaa1'
    //        },
    //        {
    //            GendertId: 2,
    //            GenderName:'aaa2'
    //        },
    //        {
    //            GendertId: 3,
    //            GenderName:'aaa3'
    //        }
    //    ],
    //    selectedGender:{
    //        GendertId:2,
    //        GenderName:'aaa2'
    //    },
    //    MaritalStatuses: [
    //        {
    //            MaritalStatustId: 1,
    //            MaritalStatusName:'aaa1'
    //        },
    //        {
    //            MaritalStatustId: 2,
    //            MaritalStatusName:'aaa2'
    //        },
    //        {
    //            MaritalStatustId: 3,
    //            MaritalStatusName:'aaa3'
    //        }
    //    ],
    //    selectedMaritalStatus:{
    //        MaritalStatustId: 3,
    //        MaritalStatusName:'aaa3'
    //    },
    //    MobilePhoneNumber: "1231232131",
    //    HomePhoneNumber: "1231232131",
    //    Email:'mail@mail.com',
    //    Areas: [
    //        {
    //            AreaName:'Не вибрано',
    //            AreaId:0
    //        },
    //        {
    //            AreaName:'1',
    //            AreaId:1
    //        },
    //        {
    //            AreaName:'2',
    //            AreaId:2
    //        },
    //        {
    //            AreaName:'3',
    //            AreaId:3
    //        }
    //    ],
    //    selectedArea:{
    //        AreaName:'Не вибрано',
    //        AreaId:0
    //    } ,
    //    Regions: [
    //        {
    //            RegionName:'Не вибрано',
    //            RegionId:0
    //        },
    //        {
    //            RegionName:'1',
    //            RegionId:1
    //        },
    //        {
    //            RegionName:'2',
    //            RegionId:2
    //        },
    //        {
    //            RegionName:'3',
    //            RegionId:3
    //        }
    //    ],
    //    selectedRegion:{
    //        RegionName:'Не вибрано',
    //        RegionId:0
    //    },
    //    RegionSelectIsDisabled: true,
    //    Cities: [
    //        {
    //            CityName:'1',
    //            CityId:1
    //        },
    //        {
    //            CityName:'2',
    //            CityId:2
    //        },
    //        {
    //            CityName:'3',
    //            CityId:3
    //        }
    //    ],
    //    selectedCity:{
    //        CityName:'3',
    //        CityId:3
    //    },
    //    CitySelectIsDisabled : true,
    //    ZipCode: 12345,
    //    Street: "Богоутовская",
    //    HouseNumber: "2А",
    //    FlatNumber: 1,
    //    Kids:[
    //        {
    //          id:1,
    //          name:"Вася",
    //          BirthDay:"10.12.1991",
    //          Genders: [
    //            {
    //              GendertId: 1,
    //              GenderName:'aaa1'
    //            },
    //            {
    //              GendertId: 2,
    //              GenderName:'aaa2'
    //            }
    //          ],
    //          selectedGender:{
    //            GendertId:2,
    //            GenderName:'aaa2'
    //          }
    //        },
    //        {
    //          id:2,
    //          name:"Вася",
    //          BirthDay:"10.12.1992",
    //          Genders: [
    //            {
    //              GendertId: 1,
    //              GenderName:'aaa1'
    //            },
    //            {
    //              GendertId: 2,
    //              GenderName:'aaa2'
    //            }
    //          ],
    //          selectedGender:{
    //            GendertId:2,
    //            GenderName:'aaa2'
    //          }
    //
    //        },
    //        {
    //          id:3,
    //          name:"Вася",
    //          BirthDay:"10.12.1993",
    //          Genders: [
    //            {
    //              GendertId: 1,
    //              GenderName:'aaa1'
    //            },
    //            {
    //              GendertId: 2,
    //              GenderName:'aaa2'
    //            }
    //          ],
    //          selectedGender:{
    //            GendertId:2,
    //            GenderName:'aaa2'
    //          }
    //
    //        }
    //    ],
    //    Pets: [
    //        {
    //          name: "cat",
    //          label: "Кіт",
    //          isSelected: true
    //        },
    //        {name: "dog",
    //          label: "Пес",
    //          isSelected: true
    //
    //        },
    //        {
    //          name: "bird",
    //          label: "Птах",
    //          isSelected: true
    //        },
    //        {
    //          name: "fish",
    //          label: "Рибки",
    //          isSelected: false
    //
    //        }
    //    ],
    //    PetOther: '111',
    //    Hobbes:[
    //        {
    //          name: 1,
    //          label: "Рибальство",
    //          isSelected: true
    //        },
    //        {
    //          name: 2,
    //          label: "Полювання",
    //          isSelected: true
    //
    //        },
    //        {
    //          name: 3,
    //          label: "Майстрування",
    //          isSelected: true
    //
    //        },
    //        {
    //          name: 4,
    //          label: "Спорт",
    //          isSelected: true
    //
    //        },
    //        {
    //          name: 5,
    //          label: "Декор інтерєрів",
    //          isSelected: true
    //
    //        },
    //        {
    //          name: 6,
    //          label: "Рукоділля",
    //          isSelected: true
    //
    //        },
    //        {
    //          name: 7,
    //          label: "Садівництво",
    //          isSelected: true
    //
    //        }
    //    ],
    //    HobbyOther: '222',
    //    CarIsSelected:{
    //        val:0
    //    },
    //    SmsIsSelected:{
    //        val:0
    //    },
    //    EmailIsSelected:{
    //        val:0
    //    },
    //    PolicyIsSelected:true
    //
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
