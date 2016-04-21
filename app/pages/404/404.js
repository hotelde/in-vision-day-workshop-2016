module.exports = 'app.pages.404';

var angular = require('angular');
var template = require('./404.html');
var controller = require('./404-controller.js');

angular.module('app.pages.404', [

  // Dependencies

])
.component('pageNotFound', {
  template: template,
  controller: controller,
  controllerAs: 'page'
});
