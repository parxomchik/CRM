/// <reference path="../../../../typings/angularjs/angular.d.ts" />
var app;
(function (app) {
    var history;
    (function (history) {
        var ClientHistoryController = (function () {
            /** @ngInject */
            function ClientHistoryController($log, historyFactory) {
                this.$log = $log;
                this.historyFactory = historyFactory;
                $log.debug("clientHistoryController start");
                this.init();
            }
            /** @ngInject */
            ClientHistoryController.prototype.historySearch = function (periodBegin, periodEnd) {
                var vm = this;
                var $log = this.$log;
                this.historyFactory.getPeriod(periodBegin, periodEnd)
                    .success(function (data) {
                    $log.debug('historyFactory.getPeriod success = ' + angular.toJson(data));
                    vm.orders = data.data.orders;
                })
                    .error(function (data) {
                    $log.debug('historyFactory.getPeriod error = ' + angular.toJson(data));
                });
            };
            ClientHistoryController.prototype.init = function () {
                var $log = this.$log;
                var vm = this;
                this.historyFactory.getHistory()
                    .success(function (data) {
                    $log.debug('historyFactory.getHistory success = ' + angular.toJson(data));
                    vm.sort = data.data.sort;
                    vm.bonuses = data.data.bonuses;
                    vm.orders = data.data.orders;
                })
                    .error(function (data) {
                    $log.debug('historyFactory.getHistory error = ' + angular.toJson(data));
                });
            };
            return ClientHistoryController;
        })();
        angular
            .module('angularStrap')
            .controller('clientHistoryController', ClientHistoryController);
    })(history = app.history || (app.history = {}));
})(app || (app = {}));
//# sourceMappingURL=client-history.controller.js.map