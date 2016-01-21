(function() {
  'use strict';

  angular
    .module('angularStrap')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$cookies,$httpBackend,restConfig) {
    $log.debug('runBlock end');
    $cookies.put('session_id', '2015');

    $httpBackend.whenGET(/\.html$/).passThrough();

    $httpBackend.whenPOST(restConfig.url+'reset-password').respond(200, 'just some content');
  }

})();
