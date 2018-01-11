const moduleName = module.exports = 'barbershop.appointments.component';
const angular = require('angular');

class AppointmentsController {

  constructor(appointmentsService) {
    this.service = appointmentsService;
  }

  $onInit() {
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
