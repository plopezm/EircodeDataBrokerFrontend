'use strict';

describe('Directive: IrelandAddressDirective', function () {

  // load the directive's module
  beforeEach(module('eircodeDataBrokerFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-ireland-address-directive></-ireland-address-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the IrelandAddressDirective directive');
  }));
});
