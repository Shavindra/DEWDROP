'use strict';

describe('Service: postFeed', function () {

  // load the service's module
  beforeEach(module('dewdropApp'));

  // instantiate service
  var postFeed;
  beforeEach(inject(function (_postFeed_) {
    postFeed = _postFeed_;
  }));

  it('should do something', function () {
    expect(!!postFeed).toBe(true);
  });

});
