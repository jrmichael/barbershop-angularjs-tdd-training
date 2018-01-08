const angular = require('angular');
const hello = require('./app/hello');
const routesConfig = require('./routes');

require('./index.less');

const app = module.exports = 'app';

angular
  .module(app, [routesConfig, hello]);
