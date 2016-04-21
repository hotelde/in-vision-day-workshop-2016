module.exports = 'app.pages.hotels';

var angular = require('angular');

var hotelModule = require('./../../hotel/hotel.js');

var template = require('./hotels.html');
var controller = require('./hotels-controller.js');

angular.module('app.pages.hotels', [

  hotelModule

])
.component('pageHotels', {
  template: template,
  controller: controller,
  controllerAs: 'page'
});
