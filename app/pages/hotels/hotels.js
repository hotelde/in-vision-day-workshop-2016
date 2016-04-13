module.exports = 'app.pages.hotels';

var angular = require('angular');
var template = require('./hotels.html');
var controller = require('./hotels-controller.js');

angular.module('app.pages.hotels', [

  // Dependencies

])
.component('hotels', {
  require: {
    app: '^app'
  },
  template: template,
  controller: controller,
  controllerAs: 'hotels'
});
