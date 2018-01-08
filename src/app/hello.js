const angular = require('angular');

const moduleName = module.exports = 'app.hello';

angular.module(moduleName, [])

  .component('hello', {

    template: require('./hello.html'),
    controller: function () {
      this.hello = 'Hello World!';
    }

  });
