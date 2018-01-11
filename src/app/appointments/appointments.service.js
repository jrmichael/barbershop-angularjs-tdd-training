const moduleName = module.exports = 'barbershop.appointments.service';

angular.module(moduleName, [])
  .service('appointmentsService', function ($q, $rootScope, $http) {
    const appointmetsUrl = 'http://localhost:5000/appointments';
    return {
      list() {
        return $http.get(appointmetsUrl)
          .then(response => response.data);
      },
      addAppointment(appointment) {
        return $http.post('http://localhost:5000/appointments', appointment)
          .then(() => {
            $rootScope.$broadcast('appointmentAdded');
          });
      }
    };
  });
