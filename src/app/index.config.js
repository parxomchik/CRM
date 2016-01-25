(function() {
  'use strict';

  angular
    .module('angularStrap')
    .config(config)
    .config(modalConfig)
    .config(datePicker);




  /** @ngInject */
  function datePicker ($datepickerProvider) {
    angular.extend($datepickerProvider.defaults, {
      dateFormat: 'dd.MM.yyyy',
      startWeek: 1,
      maxDate: new Date(),
      modelDateFormat: 'dd.MM.yyyy',
      dateType: 'date',
      language: 'uk-ua'
    });
  }



  /** @ngInject */
  function config($logProvider) {
  //  // Enable log
  //  $logProvider.debugEnabled(true);
  //
  //  // Set options third-party lib
  //  toastr.options.timeOut = 3000;
  //  toastr.options.positionClass = 'toast-top-right';
  //  toastr.options.preventDuplicates = true;
  //  toastr.options.progressBar = true;
  }
  /** @ngInject */
  function modalConfig($modalProvider) {
    angular.extend($modalProvider.defaults, {
      animation: 'am-fade-and-scale'
    });
  }
})();
