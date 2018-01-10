const angular = require('angular');

require('angular-ui-router');

const moduleName = module.exports = 'barbershop.app';

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    });
}

const dependencies = [
  'ui.router',
  require('./navbar/navbar'),
  require('./appointments/appointments.module')
];
angular.module(moduleName, dependencies)
  .config(routesConfig)
  .component('app', {

    template: require('./app.html')

  });
