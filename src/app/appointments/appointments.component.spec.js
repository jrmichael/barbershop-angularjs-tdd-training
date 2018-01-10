const appointmentsComponent = require('./appointments.component');

describe('appointments component', function () {

  var compile, scope;

  beforeEach(angular.mock.module(appointmentsComponent));

  beforeEach(inject(function ($compile, $rootScope, $q) {
    compile = $compile;
    scope = $rootScope.$new();
  }));

  it('has title', () => {
    const component = compile('<bs-appointments></bs-appointments>')(scope);
    scope.$digest();

    expect(component.find('.appointments__title')).toHaveText('Appointments');
  });

});
