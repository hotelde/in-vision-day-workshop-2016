module.exports = 'app.pages.index';

var angular = require('angular');
var template = require('./index.html');
var controller = require('./index-controller.js');

angular.module('app.pages.index', [

  // Dependencies

])
.component('index', {
  require: {
    app: '^app'
  },
  template: template,
  controller: controller,
  controllerAs: 'index'
});
