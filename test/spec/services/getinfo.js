'use strict';

describe('Service: getInfo', function () {

  // load the service's module
  beforeEach(module('sdpApp'));

  // instantiate service
  var getInfo;
  beforeEach(inject(function (_getInfo_) {
    getInfo = _getInfo_;
  }));

  it('should do something', function () {
    expect(!!getInfo).toBe(true);
  });

});
