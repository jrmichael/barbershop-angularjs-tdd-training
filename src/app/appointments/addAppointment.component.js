const moduleName = module.exports = 'barbershop.appointments.add';

class AddAppointmentController {
  constructor(appointmentsService) {
    this.service = appointmentsService;
  }

  createAppointment() {
    this.service.addAppointment(this.newAppointment);
    this.newAppointment = undefined;
  }
}

angular.module(moduleName, [
  require('./appointments.service')
])
  .component('bsAddAppointment', {
    template: require('./addAppointment.html'),
    controller: AddAppointmentController
  });
