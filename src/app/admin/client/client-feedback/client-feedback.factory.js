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



(function() {
    'use strict';

    angular
        .module('angularStrap')
        .factory('feedbackFactory', feedbackFactory);

    /** @ngInject */
    function feedbackFactory($cookies,$http,restConfig,$httpParamSerializerJQLike) {
        return {
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
            getFeedback: function () {
                return $http({
                    method: 'GET',
                    url: restConfig.url+'feedback',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    data: {
                      session_id: $cookies.getObject('session_id')
                    }
                });
            },
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
            sendFeedback: function (saveData) {
                return $http({
                  method: "POST",
                  url: restConfig.url+'feedback/save2',
                  headers:{
                    'Content-Type': "application/x-www-form-urlencoded;charset=utf-8"
                  },
                  data:$httpParamSerializerJQLike(saveData)
                });
            }
        };
    }
})();
