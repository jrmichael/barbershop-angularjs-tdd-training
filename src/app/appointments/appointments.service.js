const moduleName = module.exports = 'barbershop.appointments.service';

angular.module(moduleName, [])
  .service('appointmentsService', function ($q, $rootScope) {
    const appointments = [];

    return {
      list() {
        return $q.resolve(appointments);
      },
      addAppointment(appointment) {
        appointments.push(appointment);
        $rootScope.$broadcast('appointmentAdded');
        return $q.resolve();
      }
    };
  });
