const moduleName = module.exports = 'barbershop.phoneNumber';

function phoneNumberFilter(number) {
  return number;
}

angular.module(moduleName, [])
  .filter('phoneNumber', function () {
    return phoneNumberFilter;
  });
