(function() {
  'use strict';

  angular
    .module('angularStrap')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$cookies,$httpBackend) {
    $log.debug('runBlock end');
    $cookies.put('session_id', '2015');

    //$httpBackend.whenGET(/\.html$/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenGET(/.*/).passThrough();

  }

})();
