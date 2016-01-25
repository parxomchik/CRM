/// <reference path="../../../../typings/angularjs/angular.d.ts" />
var app;
(function (app) {
    var history;
    (function (history) {
        var HistoryFactory = (function () {
            /** @ngInject */
            function HistoryFactory($http, restConfig, $httpParamSerializerJQLike) {
                this.$http = $http;
                this.restConfig = restConfig;
                this.$httpParamSerializerJQLike = $httpParamSerializerJQLike;
            }
            /** @ngInject */
            HistoryFactory.prototype.getHistory = function () {
                return this.$http({
                    method: 'GET',
                    url: this.restConfig.url + 'history',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
            };
            /** @ngInject */
            HistoryFactory.prototype.getPeriod = function (periodBegin, periodEnd) {
                return this.$http({
                    method: 'POST',
                    url: this.restConfig.url + 'history/getPeriod',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    data: {
                        periodBegin: periodBegin,
                        periodEnd: periodEnd
                    }
                });
            };
            return HistoryFactory;
        })();
        history.HistoryFactory = HistoryFactory;
        angular
            .module("angularStrap")
            .service("historyFactory", HistoryFactory);
    })(history = app.history || (app.history = {}));
})(app || (app = {}));
//# sourceMappingURL=client-history.factory.js.map