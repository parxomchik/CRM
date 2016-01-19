/// <reference path="../../../../typings/angularjs/angular.d.ts" />

module app.feedback {

  interface IClientFeedbackController {
    selectedSubject:string;
    feedbackText:{};
    feedbacks:any[];
    send(selectedSubject:string,feedbackText:string,$log):void;
    init():void;
  }


  class ClientFeedbackController implements IClientFeedbackController{

    selectedSubject:string;
    feedbackText:{};
    feedbacks:any[];

    /** @ngInject */
    constructor(
      public $log:angular.ILogService,
      public feedbackFactory,
      public sweet
     ){
         $log.debug("clientFeedbackController start");
         this.init();
    }
    /** @ngInject */
     send(selectedSubject:string,feedbackText:string):void{

      var $log = this.$log;
      var feedbackFactory = this.feedbackFactory ;
      var sweet = this.sweet;

      $log.debug('selected selectedSubject = '+ angular.toJson(selectedSubject));
      $log.debug('selected feedbackText = '+ angular.toJson(feedbackText));

      var saveData = {
        selectedSubject:selectedSubject,
        feedbackText:feedbackText
      };

      feedbackFactory.sendFeedback(saveData)
        .success(function (data)
        {
          $log.debug('feedbackFactory.sendFeedback success = '+angular.toJson(data));
          sweet.show({
            title: "ДАНІ ЗБЕРЕЖЕНО",
            text: "You will not be able to recover this imaginary file!",
            type: "success",
            timer: 1500,
            showConfirmButton: false
          });
        })
        .error(function (data) {
          $log.debug('feedbackFactory.sendFeedback error = '+angular.toJson(data));
        });
    }


     init():void{
      var vm = this;
      var $log = this.$log;

       this.feedbackFactory.getFeedback()
        .success(function (data) {
          $log.debug('feedbackFactory.getFeedback success = '+angular.toJson(data));
          vm.feedbacks = data.data;
        })
        .error(function (data) {
          $log.debug('feedbackFactory.getFeedback error = '+angular.toJson(data));
        });
    }


  }

  angular
    .module('angularStrap')
    .controller('clientFeedbackController', ClientFeedbackController);
}
