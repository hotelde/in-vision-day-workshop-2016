module.exports = 'app.menu';

require('./menu.less');

var angular = require('angular');

var headerModule = require('./../header/header.js');

var template = require('./menu.html');
var controller = require('./menu-controller.js');

angular.module('app.menu', [

  // Dependencies
  headerModule

])
.component('menu', {
  require: {
    app: '^app'
  },
  template: template,
  controller: controller,
  controllerAs: 'menu'
});
