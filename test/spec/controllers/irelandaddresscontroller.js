'use strict';

describe('Controller: IrelandaddresscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('eircodeDataBrokerFrontendApp'));

  var IrelandaddresscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IrelandaddresscontrollerCtrl = $controller('IrelandaddresscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IrelandaddresscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
