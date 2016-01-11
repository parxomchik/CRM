(function() {
  'use strict';

  angular
    .module('angularStrap')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('client', {
        template: '<div ui-view></div>',
        resolve:
        {
          user : function (loginFactory,$q,$log) {
            var res = loginFactory.userStatus();
            $log.debug('res ='+res);
            return loginFactory.userStatus() || $q.reject();
          }
        }
      })
        .state('brandbook', {
        url: '/brandbook',
        templateUrl: 'app/brandbook/brandbook.html',
        controller: 'brandbookController',
        controllerAs: 'brandbook',
        parent: "client"
      })
      .state('profile', {
        url: '/client/profile',
        templateUrl: 'app/admin/client/client-profile/client-profile.html',
        controller: 'clientProfileController',
        controllerAs: 'profile',
        parent: "client"
      })
        .state('history', {
          url: '/client/history',
          templateUrl: 'app/admin/client/client-history/client-history.html',
          controller: 'clientHistoryController',
          controllerAs: 'history',
          parent: "client"


      })
        .state('propositions', {
          url: '/client/propositions',
          templateUrl: 'app/admin/client/client-propositions/client-propositions.html',
          controller: 'clientPropositionsController',
          controllerAs: 'propositions',
          parent: "client"


      })
        .state('feedback', {
          url: '/client/feedback',
          templateUrl: 'app/admin/client/client-feedback/client-feedback.html',
          controller: 'clientFeedbackController',
          controllerAs: 'feedback',
          parent: "client"
      });

    //$httpProvider.defaults.withCredentials = true;
    $urlRouterProvider.otherwise('/');
  }

})();
