const angular = require('angular');

require('./navbar.less');

const moduleName = module.exports = 'barbershop.navbar';

angular
  .module(moduleName, [])
  .component('bsNavbar', {
    template: require('./navbar.html')
  });
