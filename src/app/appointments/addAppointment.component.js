const moduleName = module.exports = 'barbershop.appointments.add';

angular.module(moduleName, [])
  .component('bsAddAppointment', {
    template: require('./addAppointment.html')
  });
