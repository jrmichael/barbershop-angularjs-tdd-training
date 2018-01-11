const appointmentsComponent = require('./appointments.component');

describe('appointments component', function () {

  var compile, scope, service, q;
  var element;

  beforeEach(angular.mock.module(appointmentsComponent));

  beforeEach(angular.mock.inject(function ($compile, $rootScope, appointmentsService, $q) {
    scope = $rootScope.$new();
    compile = $compile;
    service = appointmentsService;
    q = $q;
    jest.spyOn(service, 'list').mockReturnValue(q.resolve([]));
  }));

  it('has title', () => {
    element = compile('<bs-appointments></bs-appointments>')(scope);
    scope.$digest();

    expect(element.find('.appointments__title')).toHaveText('Appointments');
  });

  it('has a list of appointments', function () {
    const promiseWithAppointments = q.resolve([
      {name: 'John'}
    ]);

    service.list.mockReturnValue(promiseWithAppointments);

    element = compile('<bs-appointments></bs-appointments>')(scope);
    scope.$digest();

    expect(element.text()).toContain("John")

  });

});
