(function() {
  'use strict';

  angular
    .module('angularStrap')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$cookies) {
    $log.debug('runBlock end');
    $cookies.put('session_id', '2015');

  }

})();
