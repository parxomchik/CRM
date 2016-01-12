/// <reference path="../../../../typings/angularjs/angular.d.ts" />

module app.feedback {

  interface IClientFeedbackController {
    selectedSubject:string;
    feedbackText:{};
    feedbacks:any[];
    send(selectedSubject:string,feedbackText:string, $log,feedbackFactory,sweet):void;
    init():void;
  }


  class ClientFeedbackController implements IClientFeedbackController{

    selectedSubject:string;
    feedbackText:{};
    feedbacks:any[];
    //send:Function;


    //static $inject = ['$log', 'feedbackFactory', 'sweet'];

    /** @ngInject */
    constructor(
      public $log,
      public feedbackFactory,
      public sweet
     ){
         $log.debug("clientFeedbackController start");

         var vm = this;
         this.init();


         //$scope.vm = this;
          //vm.send  = function(selectedSubject:string,feedbackText:string,feedbackFactory,$log,sweet)
     //vm.send  = function(selectedSubject:string,feedbackText:string) {
     //  $log.debug('selected selectedSubject = '+ angular.toJson(selectedSubject));
     //  $log.debug('selected feedbackText = '+ angular.toJson(feedbackText));
     //
     //
     //  var saveData = {
     //    selectedSubject:selectedSubject,
     //    feedbackText:feedbackText
     //  };
     //  //var data = JSON.stringify(saveData);
     //  // var data = angular.toJson(saveData);
     //
     //  //feedbackFactory.sendFeedback(selectedSubject,feedbackText)
     //  feedbackFactory.sendFeedback(saveData)
     //    .success(function (data) {
     //      $log.debug('feedbackFactory.sendFeedback success = '+angular.toJson(data));
     //      sweet.show({
     //        title: "ДАНІ ЗБЕРЕЖЕНО",
     //        text: "You will not be able to recover this imaginary file!",
     //        type: "success",
     //        timer: 1500,
     //        showConfirmButton: false
     //      });
     //    })
     //    .error(function (data) {
     //      $log.debug('feedbackFactory.sendFeedback error = '+angular.toJson(data));
     //    });
     //}






      //  vm.send = function (selectedSubject:string,feedbackText:string) {
      //  $log.debug('selected selectedSubject = '+ angular.toJson(selectedSubject));
      //  $log.debug('selected feedbackText = '+ angular.toJson(feedbackText));
      //  var saveData = {
      //    selectedSubject:selectedSubject,
      //    feedbackText:feedbackText
      //  };
      //  //var data = JSON.stringify(saveData);
      //  // var data = angular.toJson(saveData);
      //
      //  //feedbackFactory.sendFeedback(selectedSubject,feedbackText)
      //  feedbackFactory.sendFeedback(saveData)
      //      .success(function (data) {
      //          $log.debug('feedbackFactory.sendFeedback success = '+angular.toJson(data));
      //          sweet.show({
      //            title: "ДАНІ ЗБЕРЕЖЕНО",
      //            text: "You will not be able to recover this imaginary file!",
      //            type: "success",
      //            timer: 1500,
      //            showConfirmButton: false
      //          });
      //     })
      //      .error(function (data) {
      //          $log.debug('feedbackFactory.sendFeedback error = '+angular.toJson(data));
      //      });
      //};


    }

     send(selectedSubject:string,feedbackText:string, $log,  feedbackFactory, sweet):void{



      $log = this.$log;
      feedbackFactory = this.feedbackFactory ;
      sweet = this.sweet;


      $log.debug('selected selectedSubject = '+ angular.toJson(selectedSubject));
      $log.debug('selected feedbackText = '+ angular.toJson(feedbackText));


      var saveData = {
        selectedSubject:selectedSubject,
        feedbackText:feedbackText
      };


      //var data = JSON.stringify(saveData);
      // var data = angular.toJson(saveData);

      //feedbackFactory.sendFeedback(selectedSubject,feedbackText)



      feedbackFactory.sendFeedback(saveData)
        .success(function (data) {
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

//
//(function() {
//    'use strict';
//
//angular
//    .module('angularStrap')
//    .controller('clientFeedbackController', clientFeedbackController);
//
///** @ngInject */
//function clientFeedbackController($log,feedbackFactory,sweet) {
//    $log.debug("clientFeedbackController start");
//    var vm = this;
//    feedbackFactory.getFeedback()
//        .success(function (data) {
//            $log.debug('feedbackFactory.getFeedback success = '+angular.toJson(data));
//            vm.feedbacks = data.data;
//        })
//        .error(function (data) {
//            $log.debug('feedbackFactory.getFeedback error = '+angular.toJson(data));
//        });
//    vm.send = function (selectedSubject,feedbackText) {
//        $log.debug('selected selectedSubject = '+ angular.toJson(selectedSubject));
//        $log.debug('selected feedbackText = '+ angular.toJson(feedbackText));
//        var saveData = {
//          selectedSubject:selectedSubject,
//          feedbackText:feedbackText
//        };
//        //var data = JSON.stringify(saveData);
//        // var data = angular.toJson(saveData);
//
//        //feedbackFactory.sendFeedback(selectedSubject,feedbackText)
//        feedbackFactory.sendFeedback(saveData)
//            .success(function (data) {
//                $log.debug('feedbackFactory.sendFeedback success = '+angular.toJson(data));
//                sweet.show({
//                  title: "ДАНІ ЗБЕРЕЖЕНО",
//                  text: "You will not be able to recover this imaginary file!",
//                  type: "success",
//                  timer: 1500,
//                  showConfirmButton: false
//                });
//           })
//            .error(function (data) {
//                $log.debug('feedbackFactory.sendFeedback error = '+angular.toJson(data));
//            });
//    };
//    //vm.feedbacks = {
//    //    feedbackText:'111',
//    //    subjects: [
//    //        {
//    //            subjectId:1,
//    //            subjectName:'aaa1'
//    //        },
//    //        {
//    //            subjectId:2,
//    //            subjectName:'aaa2'
//    //        },
//    //        {
//    //            subjectId:3,
//    //            subjectName:'aaa3'
//    //        }
//    //    ],
//    //    selectedSubject:{
//    //        subjectId:2,
//    //        subjectName:'aaa2'
//    //    }
//    //
//    //}
//
//}
//})();
