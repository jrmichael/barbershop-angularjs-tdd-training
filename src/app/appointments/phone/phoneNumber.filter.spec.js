describe('phoneNumberFilter', function () {

  var filter;

  beforeEach(angular.mock.module(require('./phoneNumber.filter')));

  beforeEach(angular.mock.inject(function (phoneNumberFilter) {
    filter = phoneNumberFilter;
  }));

  it('does nothing to short numbers', function () {

    expect(filter('123')).toEqual('123');
  });
});
