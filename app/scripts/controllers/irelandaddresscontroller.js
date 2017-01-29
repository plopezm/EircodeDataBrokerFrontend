'use strict';

/**
 * @ngdoc function
 * @name eircodeDataBrokerFrontendApp.controller:IrelandaddresscontrollerCtrl
 * @description
 * # IrelandaddresscontrollerCtrl
 * Controller of the eircodeDataBrokerFrontendApp
 */
angular.module('eircodeDataBrokerFrontendApp')
  .controller('IrelandaddresscontrollerCtrl', function ($scope, IrelandAddressService) {

    const TYPE_REQUEST_IRELAND_ADDRESS = "Ireland Address";
    const TYPE_REQUEST_IRELAND_ADDRESS_WITH_COORDS = "Ireland Address with Coordinates";


    //var vm = this;
    $scope.irelandAddressService = IrelandAddressService;

    $scope.requestTypes = [TYPE_REQUEST_IRELAND_ADDRESS, TYPE_REQUEST_IRELAND_ADDRESS_WITH_COORDS];
    $scope.typeRequest = TYPE_REQUEST_IRELAND_ADDRESS;
    $scope.apiKey = "PCW45-12345-12345-1234X";
    $scope.eircodeTyped = "D02X285";
    $scope.eircodesList = [];

    $scope.errors = null;

    $scope.searchIrelandAddress = function(){
      $scope.errors = null;

      if($scope.typeRequest === TYPE_REQUEST_IRELAND_ADDRESS){
        IrelandAddressService.findEircode($scope.apiKey, $scope.eircodeTyped)
          .then(function success(response) {
            $scope.eircodesList = $scope.eircodesList.concat(response.data);
            //$scope.eircodesList.push(response.data);
          }, function error(err) {
            if(!err.data){
              $scope.errors = "Server not found";
            }else{
              $scope.errors = "HTTP code: "+err.status + " -> "+err.data.error;
            }
          });

      }else if($scope.typeRequest === TYPE_REQUEST_IRELAND_ADDRESS_WITH_COORDS){
        IrelandAddressService.findEircodeWithCoords($scope.apiKey, $scope.eircodeTyped)
          .then(function success(response) {
            $scope.eircodesList = $scope.eircodesList.concat(response.data);
            //$scope.eircodesList.push(response.data);
          }, function error(err) {
            if(!err.data){
              $scope.errors = "Server not found";
            }else {
              $scope.errors = "HTTP code: " + err.status + " -> " + err.data.error;
            }
          });
      }
    };


  });
