/// <reference path="../../../../typings/angularjs/angular.d.ts" />
var app;
(function (app) {
    var feedback;
    (function (feedback) {
        var ClientFeedbackController = (function () {
            /** @ngInject */
            function ClientFeedbackController($log, feedbackFactory, sweet) {
                this.$log = $log;
                this.feedbackFactory = feedbackFactory;
                this.sweet = sweet;
                $log.debug("clientFeedbackController start");
                var vm = this;
                this.init();
            }
            /** @ngInject */
            ClientFeedbackController.prototype.send = function (selectedSubject, feedbackText, $log, feedbackFactory, sweet) {
                $log = this.$log;
                feedbackFactory = this.feedbackFactory;
                sweet = this.sweet;
                $log.debug('selected selectedSubject = ' + angular.toJson(selectedSubject));
                $log.debug('selected feedbackText = ' + angular.toJson(feedbackText));
                var saveData = {
                    selectedSubject: selectedSubject,
                    feedbackText: feedbackText
                };
                feedbackFactory.sendFeedback(saveData)
                    .success(function (data) {
                    $log.debug('feedbackFactory.sendFeedback success = ' + angular.toJson(data));
                    sweet.show({
                        title: "ДАНІ ЗБЕРЕЖЕНО",
                        text: "You will not be able to recover this imaginary file!",
                        type: "success",
                        timer: 1500,
                        showConfirmButton: false
                    });
                })
                    .error(function (data) {
                    $log.debug('feedbackFactory.sendFeedback error = ' + angular.toJson(data));
                });
            };
            ClientFeedbackController.prototype.init = function () {
                var vm = this;
                var $log = this.$log;
                this.feedbackFactory.getFeedback()
                    .success(function (data) {
                    $log.debug('feedbackFactory.getFeedback success = ' + angular.toJson(data));
                    vm.feedbacks = data.data;
                })
                    .error(function (data) {
                    $log.debug('feedbackFactory.getFeedback error = ' + angular.toJson(data));
                });
            };
            return ClientFeedbackController;
        })();
        angular
            .module('angularStrap')
            .controller('clientFeedbackController', ClientFeedbackController);
    })(feedback = app.feedback || (app.feedback = {}));
})(app || (app = {}));
//# sourceMappingURL=client-feedback.controller.js.map