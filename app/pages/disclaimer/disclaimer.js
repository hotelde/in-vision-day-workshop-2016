module.exports = 'app.pages.disclaimer';

var angular = require('angular');
var template = require('./disclaimer.html');
var controller = require('./disclaimer-controller.js');

angular.module('app.pages.disclaimer', [

  // Dependencies

])
.component('pageDisclaimer', {
  template: template,
  controller: controller,
  controllerAs: 'disclaimer'
});
