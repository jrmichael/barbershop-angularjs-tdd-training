const angular = require('angular');
const app = require('./app/app');

require('./index.less');

const barbershop = module.exports = 'barbershop';

angular
  .module(barbershop, [app]);
