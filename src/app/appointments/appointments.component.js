const moduleName = module.exports = 'barbershop.appointments.component';

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
  require('./appointments.service')
])
  .component('bsAppointments', {
    template: require('./appointments.html'),
    controller: AppointmentsController
  });
