const _ = require('lodash');

const moduleName = module.exports = 'barbershop.phoneNumber';

function phoneNumberFilter(input) {
  if (!input) {
    return input;
  }
  return _(input.toString().split(''))
    .reverse()
    .chunk(3)
    .map(c => [' ', ...c])
    .flatten()
    .tail()
    .reverse()
    .join('');
}

angular.module(moduleName, [])
  .filter('phoneNumber', function () {
    return phoneNumberFilter;
  });
