(function() {
    'use strict';

    angular
        .module('angularStrap')
        .factory('loginFactory', loginFactory);

    /** @ngInject */
    function loginFactory($http,$cookies,$log,$state,restConfig){
        return {

            //sendLogin: function (data) {
            //    return $http({
            //        method: 'POST',
            //        url: restConfig + 'login',
            //        data: $.param({
            //            email:  data.email,
            //            password:  data.password
            //        }),
            //        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            //    })
            //},


          sendLogin: function (mobilePhone,password,privatePolicy) {
            return $http({
              method: "POST",
              url: restConfig.url+'login',
              headers:{
                'Content-Type': "application/x-www-form-urlencoded;charset=utf-8"
              },
              data:$httpParamSerializerJQLike(savmobilePhone,password,privatePolicy)


              //  method: 'POST',
              //  url: restConfig.url+'feedback/save2',
              //  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              //  data: {
              //    //data:{
              //      data:saveData,
              //    //  selectedSubject:selectedSubject,
              //    //  feedbackText:feedbackText
              //    //},
              //  session_id: $cookies.getObject('session_id')
              //}


            });

          },
            sendRegistration: function (data) {
                return $http({
                    method: 'POST',
                    url: restConfig + 'registration',
                    data: $.param({
                        session_id: $cookies.getObject('session_id')
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
            },
            userStatus: function ($state,$q) {
                //if(res = 'undefided'){
                //  alert(222)
                //  //$state.go('history');
                //  return $q.reject();
                //}
                //else {
                //  alert(111);
                //  //window.location.href = '#/client/history';
                //
                //  return  $cookies.getObject('session_id');
                //}
              var cookie =  $cookies.getObject('session_id');
              $log.debug(cookie);
              //if(cookie = 'undefined'){
                //window.location.href = '#/client/history';
                //$state.go('history')

              //}
              //else{
              //  return $cookies.getObject('session_id');
              //}
              //$log.debug(cookie);
              return cookie;
            }
        };
    }
})();
