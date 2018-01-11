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
    expect.hasAssertions();
    http.whenGET('http://localhost:5000/appointments')
      .respond(200, [{name: 'someAppointment'}]);

    service.list()
      .then(data => {
        expect(data).toEqual([{name: 'someAppointment'}]);
        done();
      });

    http.flush();
  });

  it('adds an appointment', function () {
    http.expectPOST('http://localhost:5000/appointments', {name: 'new appointment'}).respond(201);

    service.addAppointment({name: 'new appointment'});

    http.flush();
  });

  it('informs about added appointment', function (done) {
    http.whenPOST('http://localhost:5000/appointments').respond(201);

    const verify = jest.fn();
    rootScope.$on('appointmentAdded', verify);

    service.addAppointment({name: 'whatever'})
      .then(() => {
        expect(verify).toHaveBeenCalled();
        done();
      });

    http.flush();
  });
});
