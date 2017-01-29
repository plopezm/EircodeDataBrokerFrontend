'use strict';

describe('Service: IrelandAddressService', function () {

  // load the service's module
  beforeEach(module('eircodeDataBrokerFrontendApp'));

  // instantiate service
  var IrelandAddressService;
  beforeEach(inject(function (_IrelandAddressService_) {
    IrelandAddressService = _IrelandAddressService_;
  }));

  it('should do something', function () {
    expect(!!IrelandAddressService).toBe(true);
  });

});
