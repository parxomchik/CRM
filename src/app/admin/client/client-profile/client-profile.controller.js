/// <reference path="../../../../typings/angularjs/angular.d.ts" />
var app;
(function (app) {
    var profile;
    (function (profile) {
        'use strict';
        var ClientProfileController = (function () {
            /** @ngInject */
            function ClientProfileController($log, profileFactory, sweet, $filter) {
                this.$log = $log;
                this.profileFactory = profileFactory;
                this.sweet = sweet;
                this.$filter = $filter;
                this.init();
                $log.debug("clientProfileController start");
            }
            /** @ngInject */
            ClientProfileController.prototype.init = function () {
                var vm = this;
                var $log = this.$log;
                var $filter = this.$filter;
                this.profileFactory.getProfile()
                    .success(function (data) {
                    $log.debug(' profileFactory.getProfile success = ' + angular.toJson(data.data));
                    vm.profiles = data.data;
                    $log.debug('vm.profiles.BirthDay1 = ' + data.data.BirthDay1);
                    if (data.data.BirthDay1 == null) {
                        data.data.BirthDay1 = $filter('date')(new Date(), 'dd.MM.yyyy');
                    }
                })
                    .error(function (data) {
                    this.$log.debug(' profileFactory.getProfile error = ' + angular.toJson(data.data));
                });
            };
            /** @ngInject */
            ClientProfileController.prototype.saveProfile = function (profileData) {
                var vm = this;
                var $log = this.$log;
                var sweet = this.sweet;
                $log.debug('vm.saveProfile profileData = ' + angular.toJson(profileData));
                $log.debug('vm.saveProfile profileData = ' + angular.toJson(profileData.LastName));
                this.profileFactory.saveProfile(profileData)
                    .success(function (data) {
                    $log.debug(' profileFactory.saveProfile success = ' + angular.toJson(data));
                    sweet.show({
                        title: "ДАНІ ЗБЕРЕЖЕНО",
                        text: "You will not be able to recover this imaginary file!",
                        type: "success",
                        timer: 1500,
                        showConfirmButton: false
                    });
                })
                    .error(function (data) {
                    $log.debug(' profileFactory.saveProfile error = ' + angular.toJson(data));
                    sweet.show({
                        title: "ПОМИЛКА ЗБЕРЕЖЕННЯ",
                        text: "Спробуйте пізніше",
                        type: "error",
                        timer: 1500,
                        showConfirmButton: false
                    });
                });
            };
            /** @ngInject */
            ClientProfileController.prototype.KidsSelect = function (value) {
                var vm = this;
                var $log = this.$log;
                $log.debug('vm.profiles.KidsIsSelected = ' + value);
                if (vm.profiles.Kids.length == 0) {
                    vm.profiles.Kids.push({
                        id: 0,
                        Genders: [
                            {
                                GendertId: 1,
                                GenderName: 'Жіноча'
                            },
                            {
                                GendertId: 2,
                                GenderName: 'Чоловіча'
                            },
                            {
                                GendertId: 0,
                                GenderName: 'Не обрано'
                            }
                        ],
                        selectedGender: {
                            GendertId: 0,
                            GenderName: 'Не обрано'
                        }
                    });
                    $log.debug('vm.profiles.Kids.length = ' + vm.profiles.Kids.length);
                    $log.debug('vm.profiles.Kids = ' + angular.toJson(vm.profiles.Kids));
                }
            };
            /** @ngInject */
            ClientProfileController.prototype.KidRemove = function ($index) {
                var vm = this;
                var $log = this.$log;
                $log.debug('KidRemove $index = ' + $index);
                vm.profiles.Kids.splice($index, 1);
                $log.debug('vm.profiles.Kids.length = ' + vm.profiles.Kids.length);
                if (vm.profiles.Kids.length == 0) {
                    vm.profiles.KidsIsSelected = 2;
                }
            };
            /** @ngInject */
            ClientProfileController.prototype.KidAdd = function () {
                var vm = this;
                var $log = this.$log;
                vm.profiles.Kids.push({
                    id: 0,
                    Genders: [
                        {
                            GendertId: 1,
                            GenderName: 'Жіноча'
                        },
                        {
                            GendertId: 2,
                            GenderName: 'Чоловіча'
                        },
                        {
                            GendertId: 0,
                            GenderName: 'Не обрано'
                        }
                    ],
                    selectedGender: {
                        GendertId: 0,
                        GenderName: 'Не обрано'
                    }
                });
                $log.debug(vm.profiles.Kids);
            };
            /** @ngInject */
            ClientProfileController.prototype.AreaChange = function (data) {
                var vm = this;
                var $log = this.$log;
                $log.debug('AreaChange = ' + data);
                $log.debug('vm.profiles.RegionSelectIsDisabled = ' + vm.profiles.RegionSelectIsDisabled);
                this.profileFactory.getProfileRegions(data)
                    .success(function (data) {
                    vm.profiles.Regions = data.data;
                })
                    .error(function (data) {
                    $log.debug('profileFactory.getProfileRegions = ' + data);
                });
                if (data !== 0) {
                    vm.profiles.RegionSelectIsDisabled = false;
                    $log.debug('vm.profiles.RegionSelectIsDisabled = ' + vm.profiles.RegionSelectIsDisabled);
                }
                else {
                    vm.profiles.RegionSelectIsDisabled = true;
                }
            };
            /** @ngInject */
            ClientProfileController.prototype.RegionChange = function (data) {
                var vm = this;
                var $log = this.$log;
                this.profileFactory.getProfileCities(data)
                    .success(function (data) {
                    vm.profiles.Cities = data.data;
                })
                    .error(function (data) {
                    $log.debug('profileFactory.getProfileCities = ' + data);
                });
                $log.debug('RegionChange = ' + data);
                $log.debug('vm.profiles.CitySelectIsDisabled = ' + data.data.CitySelectIsDisabled);
                if (data !== 0) {
                    vm.profiles.CitySelectIsDisabled = false;
                    $log.debug('vm.profiles.CitySelectIsDisabled = ' + data.data.CitySelectIsDisabled);
                }
                else {
                    vm.profiles.CitySelectIsDisabled = true;
                }
            };
            return ClientProfileController;
        })();
        angular
            .module('angularStrap')
            .controller('clientProfileController', ClientProfileController);
    })(profile = app.profile || (app.profile = {}));
})(app || (app = {}));
//# sourceMappingURL=client-profile.controller.js.map