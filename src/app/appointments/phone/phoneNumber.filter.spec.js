describe('phoneNumberFilter', function () {

  var filter;

  beforeEach(angular.mock.module(require('./phoneNumber.filter')));

  beforeEach(angular.mock.inject(function (phoneNumberFilter) {
    filter = phoneNumberFilter;
  }));

  it('adds spaces', function () {
    expect(filter(undefined)).toBe(undefined);
    expect(filter('1')).toBe('1');
    expect(filter('123')).toBe('123');
    expect(filter('1234')).toBe('1 234');
    expect(filter('123456')).toBe('123 456');
  });
});
