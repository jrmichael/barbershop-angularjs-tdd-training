const addAppointmentsComponent = require('./addAppointment.component');

describe('add appointment form', function () {

  var compile, scope, service;
  var component;

  beforeEach(angular.mock.module(addAppointmentsComponent));

  beforeEach(angular.mock.inject(function ($compile, $rootScope, appointmentsService) {
    scope = $rootScope.$new();
    compile = $compile;
    service = appointmentsService;
    jest.spyOn(service, 'addAppointment').mockImplementation(() => {
    });
  }));

  it('adds an appointment', function () {
    createComponent();

    setName('newAppointment');
    setPhoneNumber('123456789');
    component.find('button').click();

    expect(service.addAppointment).toHaveBeenCalledWith({
      name: 'newAppointment',
      phoneNumber: '123456789'
    });
  });

  it('does not add appointments when no name', function () {
    createComponent();

    setName('');
    component.find('button').click();

    expect(service.addAppointment).not.toHaveBeenCalled();
  });

  it('clears input after adding', function () {
    createComponent();

    setName('whatever');
    component.find('button').click();

    expect(component.find('input').val()).toEqual('');
  });

  function createComponent() {
    component = compile('<bs-add-appointment></bs-add-appointment>')(scope);
    scope.$digest();
  }

  function setName(name) {
    component.find('input[name=name]').val(name).trigger('input');
  }

  function setPhoneNumber(number) {
    component.find('input[name=phoneNumber]').val(number).trigger('input');
  }
});
