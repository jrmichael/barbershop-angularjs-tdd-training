const moduleName = module.exports = 'barbershop.appointments';

require('./appointments.less');

angular.module(moduleName, [
  require('./appointments.routes'),
  require('./appointments.service'),
  require('./appointments.component')
]);
