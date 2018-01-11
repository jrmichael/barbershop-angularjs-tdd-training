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
    service.list.mockReturnValue(q.resolve([
      {name: 'John', phoneNumber: '12345'}
    ]));

    element = compile('<bs-appointments></bs-appointments>')(scope);
    scope.$digest();

    expect(element.find('.appointment')).toHaveLength(1);
    expect(element.find('.appointment__name')).toHaveText('John');
    expect(element.find('.appointment__phoneNumber')).toHaveText('12345');
  });

  it('has add appointment form', function () {
    element = compile('<bs-appointments></bs-appointments>')(scope);
    scope.$digest();

    expect(element.find('form[name=addAppointmentForm]')).toExist();
  });

  it('refreshes the list after adding an appointment', function () {
    element = compile('<bs-appointments></bs-appointments>')(scope);
    scope.$digest();

    service.list.mockReturnValue(q.resolve([
      {name: 'newAppointment'}
    ]));

    scope.$broadcast('appointmentAdded');
    scope.$apply();

    expect(element.text()).toContain('newAppointment');
  });
});
