/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/**
 *
 * @ngdoc service
 * @module project
 * @name profileFactory
 * @description
 *
 * Сервис используется для вкладки обратной связи на странице клиента
 *
 *
 *
 * @example
 <example module="sampleServiceExample" deps="">
 <file name="feedbackController.js">
 vm.profiles = {
        FirstName:"Константин",
        LastName:"Юштин",
        SurName:"Єдуардович",
        BirthDay: new Date(2013, 9, 22),
        Genders: [
            {
                GendertId: 1,
                GenderName:'aaa1'
            },
            {
                GendertId: 2,
                GenderName:'aaa2'
            },
            {
                GendertId: 3,
                GenderName:'aaa3'
            }
        ],
        selectedGender:{
            GendertId:2,
            GenderName:'aaa2'
        },
        MaritalStatuses: [
            {
                MaritalStatustId: 1,
                MaritalStatusName:'aaa1'
            },
            {
                MaritalStatustId: 2,
                MaritalStatusName:'aaa2'
            },
            {
                MaritalStatustId: 3,
                MaritalStatusName:'aaa3'
            }
        ],
        selectedMaritalStatus:{
            MaritalStatustId: 3,
            MaritalStatusName:'aaa3'
        },
        MobilePhoneNumber: 123,
        HomePhoneNumber: 124,
        Email:'mail@mail.com',
 Areas: [
 {
     AreaName:'1',
     AreaId:1
 },
 {
     AreaName:'2',
     AreaId:2
 },
 {
     AreaName:'3',
     AreaId:3
 }
 ],
 selectedArea:{
            AreaName:'3',
            AreaId:3
        } ,
 Regions: [
 {
     RegionName:'1',
     RegionId:1
 },
 {
     RegionName:'2',
     RegionId:2
 },
 {
     RegionName:'3',
     RegionId:3
 }
 ],
 selectedRegion:{
            RegionName:'3',
            RegionId:3
        },
 Cities: [
 {
     CityName:'1',
     CityId:1
 },
 {
     CityName:'2',
     CityId:2
 },
 {
     CityName:'3',
     CityId:3
 }
 ],
 selectedCity:{
            CityName:'3',
            CityId:3
        },
 ZipCode: 12345,
 Street: "Богоутовская",
 HouseNumber: "2А",
 FlatNumber: 1,
 Pets: [
 {id: 1, label: "Кіт"},
 {id: 2, label: "Пес"},
 {id: 3, label: "Птах"},
 {id: 4, label: "Рибки"}
 ],
 selectedPet:[
 {
 id: 3,
 label: "Птах"
 },
 {
 id: 2,
 label: "Пес"
 }
 ],
 selectPetSettings:{
            smartButtonMaxItems: 3
        },
 selectPetTexts:{
            buttonDefaultText: 'Виберіть один або кілька варіантів',
            checkAll:'Вибрати все',
            uncheckAll:'За замовчуванням'
        },
 PetOther: '111',
 Hobbes:[
 {id: 1, label: "Рибальство"},
 {id: 2, label: "Полювання"},
 {id: 3, label: "Майстрування"},
 {id: 4, label: "Спорт"},
 {id: 5, label: "Декор інтерєрів"},
 {id: 6, label: "Рукоділля"},
 {id: 7, label: "Садівництво"}=
 ],
 selectedHobby:[
 {id: 2, label: "Полювання"},
 {id: 3, label: "Майстрування"}
 ],
 selectHobbySettings:{
            smartButtonMaxItems: 3
        },
 selectHobbyTexts:{
            buttonDefaultText: 'Виберіть один або кілька варіантів',
            checkAll:'Вибрати все',
            uncheckAll:'За замовчуванням'
        },
 HobbyOther: '111'
 };
 </file>
 <file name="index.html">

 </file>

 </example>
 *
 **/
/**
 *
 * @ngdoc method
 * @name profileFactory#profileController
 * @param {number} subjectId  - id Темы.
 * @param {subjectName} author - Названия темы.
 * @description
 *
 * Описание полей контроллера
 **/
var app;
(function (app) {
    var profile;
    (function (profile) {
        var ProfileFactory = (function () {
            /** @ngInject */
            function ProfileFactory($http, restConfig, $httpParamSerializerJQLike) {
                this.$http = $http;
                this.restConfig = restConfig;
                this.$httpParamSerializerJQLike = $httpParamSerializerJQLike;
            }
            /** @ngInject */
            /**
             *
             * @ngdoc method
             * @name profileFactory#getProfile
             * @param {String} cookies - При запросе информации отправляем куки
             * @return
             *
             * {Array} subjectId,
             * @description
             *
             * Get the message.
             **/
            ProfileFactory.prototype.getProfile = function () {
                return this.$http({
                    method: 'GET',
                    url: this.restConfig.url + 'profile',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
            };
            /** @ngInject */
            ProfileFactory.prototype.getProfileRegions = function (areaId) {
                return this.$http({
                    method: 'POST',
                    url: this.restConfig.url + 'profile/regions',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    data: {
                        areaId: areaId
                    }
                });
            };
            /** @ngInject */
            ProfileFactory.prototype.getProfileCities = function (regionId) {
                return this.$http({
                    method: 'POST',
                    url: this.restConfig.url + 'profile/Cities',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    data: {
                        regionId: regionId
                    }
                });
            };
            /** @ngInject */
            ProfileFactory.prototype.saveProfile = function (data) {
                return this.$http({
                    method: 'POST',
                    url: this.restConfig.url + 'profile',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    data: this.$httpParamSerializerJQLike(data)
                });
            };
            return ProfileFactory;
        })();
        profile.ProfileFactory = ProfileFactory;
        angular
            .module("angularStrap")
            .service("profileFactory", ProfileFactory);
    })(profile = app.profile || (app.profile = {}));
})(app || (app = {}));
//# sourceMappingURL=client-profile.factory.js.map