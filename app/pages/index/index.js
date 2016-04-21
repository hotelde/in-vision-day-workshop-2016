module.exports = 'app.pages.index';

var angular = require('angular');

var headerModule = require('./../../header/header.js');

var template = require('./index.html');
var controller = require('./index-controller.js');

angular.module('app.pages.index', [

  // Dependencies
  headerModule

])
.component('pageIndex', {
  template: template,
  controller: controller,
  controllerAs: 'index'
});
