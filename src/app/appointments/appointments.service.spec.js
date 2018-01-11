const appointmentsService = require('./appointments.service');

describe('appointments service', function () {

  var service, q, rootScope, http;

  beforeEach(angular.mock.module(appointmentsService));

  beforeEach(angular.mock.inject(function (appointmentsService, $q, $rootScope, $httpBackend) {
    service = appointmentsService;
    q = $q;
    rootScope = $rootScope;
    http = $httpBackend;
  }));

  it('lists appointments', function (done) {
    http.whenGET('http://localhost:5000/appointments')
      .respond(200, [
        {name: 'someAppointment'}
      ]);

    service.list()
      .then(data => {
        expect(data).toEqual([{name: 'someAppointment'}]);
        done();
      });

    http.flush();
  });


  it.skip('informs about added appointment', function (done) {
    expect.hasAssertions();

    const verify = jest.fn();
    rootScope.$on('appointmentAdded', verify);

    service.addAppointment({name: 'whatever'})
      .then(() => {
        expect(verify).toHaveBeenCalled();
        done();
      });

    rootScope.$apply();
  });
});
