const moduleName = module.exports = 'barbershop.appointments.service';

angular.module(moduleName, [])
  .service('appointmentsService', function ($q, $rootScope, $http) {
    const appointments = [];

    return {
      list() {
        return $http.get('http://localhost:5000/appointments')
          .then(response => response.data);
      },
      addAppointment(appointment) {
        appointments.push(angular.copy(appointment));
        $rootScope.$broadcast('appointmentAdded');
        return $q.resolve();
      }
    };
  });
