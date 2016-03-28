'use strict';

describe('Service: head', function () {

  // load the service's module
  beforeEach(module('sdpApp'));

  // instantiate service
  var head;
  beforeEach(inject(function (_head_) {
    head = _head_;
  }));

  it('should do something', function () {
    expect(!!head).toBe(true);
  });

});
