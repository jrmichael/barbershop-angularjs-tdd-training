const moduleName = module.exports = 'barbershop.appointments.service';

angular.module(moduleName, [])
  .service('appointmentsService', function ($q) {
    const appointments = [];

    return {
      list() {
        return $q.resolve(appointments);
      },
      addAppointment(appointment) {
        appointments.push(appointment);
        return $q.resolve();
      }
    };
  });
