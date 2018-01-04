var angular = require('angular');

var hello = require('./app/hello');
require('angular-ui-router');
var routesConfig = require('./routes');

require('./index.less');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', hello);
