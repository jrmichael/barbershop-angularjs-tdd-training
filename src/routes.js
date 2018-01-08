const angular = require('angular');
require('angular-ui-router');

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'hello'
    });
}

const moduleName = 'app.routing';

module.exports = moduleName;

angular.module(moduleName, ['ui.router'])
  .config(routesConfig);
