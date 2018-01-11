const moduleName = module.exports = 'barbershop.appointments.service';

angular.module(moduleName, [])
  .service('appointmentsService', function ($q, $rootScope, $log) {
    const appointments = [];

    return {
      list() {
        return $q.resolve(angular.copy(appointments));
      },
      addAppointment(appointment) {
        $log.info('adding', appointment);
        appointments.push(angular.copy(appointment));
        $rootScope.$broadcast('appointmentAdded');
        return $q.resolve();
      }
    };
  });
