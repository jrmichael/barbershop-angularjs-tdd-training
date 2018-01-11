const moduleName = module.exports = 'barbershop.appointments.service';

angular.module(moduleName, [])
  .service('appointmentsService', function ($q) {
    return {
      list() {
        return $q.resolve([
          {name: 'Norek'}
        ]);
      }
    };
  });
