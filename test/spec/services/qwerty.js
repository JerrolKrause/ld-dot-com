'use strict';

describe('Service: qwerty', function () {

  // load the service's module
  beforeEach(module('sdpApp'));

  // instantiate service
  var qwerty;
  beforeEach(inject(function (_qwerty_) {
    qwerty = _qwerty_;
  }));

  it('should do something', function () {
    expect(!!qwerty).toBe(true);
  });

});
