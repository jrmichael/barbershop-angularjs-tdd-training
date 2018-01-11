const appointmentsService = require('./appointments.service');

describe('appointments service', function () {

  var service, q;

  beforeEach(angular.mock.module(appointmentsService));

  beforeEach(angular.mock.inject(function (appointmentsService, $q) {
    service = appointmentsService;
    q = $q;
  }));

  it('exists', function () {
    expect(service.list).toEqual(expect.any(Function));
  });


});
