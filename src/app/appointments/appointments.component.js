const moduleName = module.exports = 'barbershop.appointments.component';
const angular = require('angular');

class AppointmentsController {

  constructor(appointmentsService, $scope) {
    this.service = appointmentsService;
    $scope.$on('appointmentAdded', () => {
      this.fetchAppointments();
    });
  }

  $onInit() {
    this.fetchAppointments();
  }

  fetchAppointments() {
    this.service.list()
      .then(data => {
        this.appointments = data;
      });
  }
}

angular.module(moduleName, [
  require('./appointments.service'),
  require('./addAppointment.component')
])
  .component('bsAppointments', {
    template: require('./appointments.html'),
    controller: AppointmentsController
  });
