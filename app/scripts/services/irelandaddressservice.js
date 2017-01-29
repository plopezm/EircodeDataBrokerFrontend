'use strict';

/**
 * @ngdoc service
 * @name eircodeDataBrokerFrontendApp.IrelandAddressService
 * @description
 * # IrelandAddressService
 * Service in the eircodeDataBrokerFrontendApp.
 */
angular.module('eircodeDataBrokerFrontendApp')
  .service('IrelandAddressService', function ($http) {

    var SERVER = "http://localhost:8080";
    //var JSONP = "?callback=jsonp_callback";

    this.findEircode = function (apikey, eircode) {
      var query = SERVER+"/pcw/"+apikey+"/address/ie/"+eircode+"?format=json";
      return $http.get(query);
    };

    this.findEircodeWithCoords = function (apikey, eircode) {
      var query = SERVER+"/pcw/"+apikey+"/addressgeo/ie/"+eircode+"?format=json";
      return $http.get(query);
    };
  });
