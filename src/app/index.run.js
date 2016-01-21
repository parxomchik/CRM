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

    //$httpBackend.whenPOST(restConfig.url+'reset-password').respond(200, 'just some content');


    //$httpBackend.whenPOST(restConfig.url+'reset-password').respond(200,function(method,url,data){
    //  console.log(data);
    //  //phones.push(angular.fromJson(data));
    //});
    $httpBackend.whenPOST(restConfig.url+'resetpassword').respond(function(method,url,data) {
      var smsPassword = 1234,
          res = angular.fromJson(data);

      $log.debug("$httpBackend.whenPOST Data = "+data);
      $log.debug("$httpBackend.whenPOST Data = " + res.mobilePhone);
      $log.debug("$httpBackend.whenPOST Data.smsPassword = "+res.smsPassword);

      if(res.smsPassword === undefined){
          $log.debug('res.smsPassword === null if start');
          return [200, 'just some content', {}];

      }

      else {

        if(res.smsPassword === smsPassword) {
          $log.debug('res.smsPassword if start');

          return [200, 'data.smsPassword good', {}];
        }
        else{
          return [400, 'data.smsPassword bad', {}];
        }

      }
      //if(res.mobilePhone !== null){
      //
      //  $log.debug('res.mobilePhone if start');
      //  return [200, 'just some content', {}];
      //}

      //if(res.smsPassword === smsPassword) {
      //  $log.debug('res.smsPassword if start');
      //
      //  return [200, 'data.smsPassword good', {}];
      //}
      //else{
      //  return [400, 'data.smsPassword error', {}];
      //}
      //if(res.smsPassword === smsPassword) {
      //  $log.debug('res.smsPassword if start');
      //
      //  return [200, 'data.smsPassword good', {}];
      //}
      //else {
      //  return [400, 'data.smsPassword error', {}];
      //}






    });
  }

})();
