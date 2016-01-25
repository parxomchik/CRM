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

namespace app.feedback {
  interface IFeedbackFactory {
    getFeedback:() => any;
    sendFeedback:(saveData) => any;
  }


  export class FeedbackFactory
  implements IFeedbackFactory {

    /** @ngInject */
    constructor(
      private $http,
      private restConfig,
      private $httpParamSerializerJQLike
    )
    {

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

    getFeedback(){
      return this.$http({
        method: 'GET',
        url: this.restConfig.url+'feedback',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      })
    }

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

    sendFeedback(saveData){
      return this.$http({
        method: 'POST',
        url: this.restConfig.url+'feedback/save2',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: this.$httpParamSerializerJQLike(saveData)
      })
    }
  }
  angular
    .module("angularStrap")
    .service("feedbackFactory", FeedbackFactory);
}
