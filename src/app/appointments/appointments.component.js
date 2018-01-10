const moduleName = module.exports = 'barbershop.appointments.component';

angular.module(moduleName, [])
  .component('bsAppointments', {
    template: require('./appointments.html')
  });
