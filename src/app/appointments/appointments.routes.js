const moduleName = module.exports = 'barbershop.appointments.routes';

require('angular-ui-router');

angular.module(moduleName, ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider.state('appointments', {
      url: '/appointments',
      parent: 'app',
      component: 'bsAppointments'
    });
  });
