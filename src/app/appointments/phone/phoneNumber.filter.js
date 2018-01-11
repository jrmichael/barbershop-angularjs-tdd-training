const moduleName = module.exports = 'barbarshop.phoneNumber';

function phoneNumberFilter(number) {
  return number;
}

angular.module(moduleName, [])
  .filter('phoneNumber', function () {
    return phoneNumberFilter;
  });
