//(function() {
//  'use strict';
//
//  angular
//    .module('angularStrap')
//    .run(resetPasswordTest);
//
//  /** @ngInject */
//  function resetPasswordTest($log,$httpBackend,restConfig) {
//    $log.debug('resetPasswordTest start');
//
//    $httpBackend.whenGET(/\.html$/).passThrough();
//
//    $httpBackend.whenPOST(restConfig.url+'resetpassword').respond(function(method,url,data) {
//      var smsPassword = 1234,
//        res = angular.fromJson(data);
//
//      $log.debug("$httpBackend.whenPOST Data = "+data);
//      $log.debug("$httpBackend.whenPOST Data = " + res.mobilePhone);
//      $log.debug("$httpBackend.whenPOST Data.smsPassword = "+res.smsPassword);
//
//      if(res.smsPassword === undefined){
//        $log.debug('res.smsPassword === null if start');
//        return [200, 'just some content', {}];
//
//      }
//
//      else {
//
//        if(res.smsPassword === smsPassword) {
//          $log.debug('res.smsPassword if start');
//
//          return [200, 'data.smsPassword good', {}];
//        }
//        else{
//          return [400, 'data.smsPassword bad', {}];
//        }
//
//      }
//
//    });
//  }
//
//})();

