module.exports = 'app.pages.hotel';

var angular = require('angular');

var hotelModule = require('./../../hotel/hotel.js');

var template = require('./hotel.html');
var controller = require('./hotel-controller.js');

angular.module('app.pages.hotel', [

  // Dependencies
  hotelModule

])
.component('hotelpage', {
  template: template,
  controller: controller,
  controllerAs: 'page'
});
