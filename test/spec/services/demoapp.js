'use strict';

describe('Service: demoApp', function () {

  // load the service's module
  beforeEach(module('templateApp'));

  // instantiate service
  var demoApp;
  beforeEach(inject(function (_demoApp_) {
    demoApp = _demoApp_;
  }));

  it('should do something', function () {
    expect(!!demoApp).toBe(true);
  });

});
