const appointmentsService = require('./appointments.service');

describe('appointments in-memory service', function () {

  var service, q, rootScope;

  beforeEach(angular.mock.module(appointmentsService));

  beforeEach(angular.mock.inject(function (appointmentsService, $q, $rootScope) {
    service = appointmentsService;
    q = $q;
    rootScope = $rootScope;
  }));

  it('exists', function () {
    expect(service.list).toEqual(expect.any(Function));
  });

  it('is initially empty', function (done) {
    expect.hasAssertions();

    service.list()
      .then(data => {
        expect(data).toEqual([]);
        done();
      });

    rootScope.$apply();
  });

  it('adds an appointment', function (done) {
    service.addAppointment({name: 'newAppointment'})
      .then(service.list)
      .then(data => {
        expect(data).toEqual([
          {name: 'newAppointment'}
        ]);
        done();
      });

    rootScope.$apply();
  });
});
