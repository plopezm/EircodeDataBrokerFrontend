'use strict';

/**
 * @ngdoc directive
 * @name eircodeDataBrokerFrontendApp.directive:IrelandAddressDirective
 * @description
 * # IrelandAddressDirective
 */
angular.module('eircodeDataBrokerFrontendApp')
  .directive('irelandAddressDirective', function () {
    return {
      templateUrl: 'views/irelandAddressFinder.html',
      restrict: 'E',
      scope:{},
      controller: 'IrelandaddresscontrollerCtrl',
      controllerAs: 'IrelandaddresscontrollerCtrl'
    };
  });
