(function() {
    'use strict';

angular
    .module('angularStrap')
    .controller('clientPropositionsController', clientPropositionsController);

/** @ngInject */
function clientPropositionsController($log,propositionsFactory) {
    $log.debug("clientPropositionsController start");

    var vm = this;



  //vm.propositions =
    //    [
    //        {
    //            id:1,
    //            imgUrl: 'http://placehold.it/460x250/e67e22/ffffff&text=HTML5',
    //            title: 'Make a Image Blur Effects With',
    //            ShortDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
    //            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
    //            " when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    //        },
    //        {
    //            id:2,
    //            imgUrl: 'http://placehold.it/460x250/e67e22/ffffff&text=HTML5',
    //            title: 'Make a Image Blur Effects With',
    //            ShortDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
    //            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
    //            " when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    //        },
    //        {
    //            id:3,
    //            imgUrl: 'http://placehold.it/460x250/e67e22/ffffff&text=HTML5',
    //            title: 'Make a Image Blur Effects With',
    //            ShortDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
    //            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
    //            " when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    //        },
    //        {
    //            id:4,
    //            imgUrl: 'http://placehold.it/460x250/e67e22/ffffff&text=HTML5',
    //            title: 'Make a Image Blur Effects With',
    //            ShortDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
    //            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
    //            " when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    //        }
    //    ];
    propositionsFactory.getPropositions()
        .success(function(data){
            $log.debug('propositionsFactory.getPropositions success = '+angular.toJson(data));
            vm.propositions = data.data;
        })
        .error(function(){
           $log.debug('propositionsFactory.getPropositions error = '+data);
        })
}
})();
