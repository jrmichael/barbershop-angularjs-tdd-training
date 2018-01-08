const helloModule = require('./hello');

describe('hello component', function () {

  beforeEach(function () {
    angular.mock.module(helloModule);
  });

  it('should render hello world', angular.mock.inject(function ($rootScope, $compile) {
    const element = $compile('<hello>Loading...</hello>')($rootScope);

    $rootScope.$digest();

    expect(element.text()).toContain('Hello World!');
  }));
});
