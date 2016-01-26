(function() {
  'use strict';

  angular
    .module('angularStrap')
    .controller('clientPropositionsController', clientPropositionsController);

  /** @ngInject */
  function clientPropositionsController($log,propositionsFactory) {
    $log.debug("clientPropositionsController start");

    var vm = this;

    propositionsFactory.getPropositions()
      .success(function(data){
        $log.debug('propositionsFactory.getPropositions success = '+angular.toJson(data));
        vm.propositions = data.data;
      })
      .error(function(data){
        $log.debug('propositionsFactory.getPropositions error = '+data);
      })
  }
})();
