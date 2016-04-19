require('./hotel.less');

module.exports = 'app.hotel';

var angular = require('angular');

var template = require('./hotel.html');
var controller = require('./hotel-controller.js');

angular.module('app.hotel', [

])
.component('hotel', {
  bindings: {
    data: '<'
  },
  template: template,
  controller: controller,
  controllerAs: 'hotel'
});
