const addAppointmentsComponent = require('./addAppointment.component');

describe('add appointment form', function () {

  var compile, scope, service;
  var element;

  beforeEach(angular.mock.module(addAppointmentsComponent));

  beforeEach(angular.mock.inject(function ($compile, $rootScope, appointmentsService) {
    scope = $rootScope.$new();
    compile = $compile;
    service = appointmentsService;
    jest.spyOn(service, 'addAppointment').mockImplementation(() => {
    });
  }));

  it('adds an appointment', function () {
    element = compile('<bs-add-appointment></bs-add-appointment>')(scope);
    scope.$digest();

    element.find('input').val('newAppointment').trigger('input');
    element.find('button').click();

    expect(service.addAppointment).toHaveBeenCalledWith({name: 'newAppointment'});
  });

  it('does not add appointments when no name', function () {
    element = compile('<bs-add-appointment></bs-add-appointment>')(scope);
    scope.$digest();

    element.find('input').val('').trigger('input');
    element.find('button').trigger('click');

    expect(service.addAppointment).not.toHaveBeenCalled();
  });

  it('clears input after adding', function () {
    element = compile('<bs-add-appointment></bs-add-appointment>')(scope);
    scope.$digest();

    element.find('input').val('newAppointment').trigger('input');
    element.find('button').click();

    expect(element.find('input').val()).toEqual('');
  });
});
