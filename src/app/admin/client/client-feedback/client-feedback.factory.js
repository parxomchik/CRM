/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/**
 *
 * @ngdoc service
 * @module project
 * @name feedbackFactory
 * @description
 *
 * Сервис используется для вкладки обратной связи на странице клиента
 *
 *
 *
 * @example
 <example module="sampleServiceExample" deps="">
 <file name="feedbackController.js">
 vm.feedbacks = {
        feedbackText:'111',
        subjects: [
            {
                subjectId:1,
                subjectName:'aaa1'
            },
            {
                subjectId:2,
                subjectName:'aaa2'
            },
            {
                subjectId:3,
                subjectName:'aaa3'
            }
        ],
        selectedSubject:{
            subjectId:2,
            subjectName:'aaa2'
        }

    }
 </file>
 <file name="index.html">
 </file>

 </example>
 *
 **/
/**
 *
 * @ngdoc method
 * @name feedbackFactory#feedbackController
 * @param {number} subjectId  - id Темы.
 * @param {subjectName} author - Названия темы.
 * @description
 *
 * Описание полей контроллера
 **/
var app;
(function (app) {
    var feedback;
    (function (feedback) {
        var FeedbackFactory = (function () {
            /** @ngInject */
            function FeedbackFactory($http, restConfig, $httpParamSerializerJQLike) {
                this.$http = $http;
                this.restConfig = restConfig;
                this.$httpParamSerializerJQLike = $httpParamSerializerJQLike;
            }
            /** @ngInject */
            /**
             *
             * @ngdoc method
             * @name feedbackFactory#getFeedback
             * @param {String} cookies - При запросе информации отправляем куки
             * @return
             *
             * {Array} subjectId,
             * @description
             *
             * Get the message.
             **/
            FeedbackFactory.prototype.getFeedback = function () {
                return this.$http({
                    method: 'GET',
                    url: this.restConfig.url + 'feedback',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
            };
            /** @ngInject */
            /**
             *
             * @ngdoc method
             * @name feedbackFactory#sendFeedback
             * @param {String} feedbackText - текст сообщения
             * @param {Object} selectedSubject - контейнер для выбраной темы
             * @param {Number} subjectId  - id выбраной темы
             * @param {String} subjectName -  название выбраной темы
             * @description
             *
             * Get the message.
             **/
            FeedbackFactory.prototype.sendFeedback = function (saveData) {
                return this.$http({
                    method: 'POST',
                    url: this.restConfig.url + 'feedback/save2',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    data: this.$httpParamSerializerJQLike(saveData)
                });
            };
            return FeedbackFactory;
        })();
        feedback.FeedbackFactory = FeedbackFactory;
        angular
            .module("angularStrap")
            .service("feedbackFactory", FeedbackFactory);
    })(feedback = app.feedback || (app.feedback = {}));
})(app || (app = {}));
//# sourceMappingURL=client-feedback.factory.js.map