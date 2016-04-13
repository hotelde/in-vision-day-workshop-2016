require('./app.less');

// Angular framework dependencies & modules
var angular = require('angular');

// Applicaiton module dependencies (written by us)
var menuModule = require('./menu/menu.js');
var pagesModule = require('./pages/pages.js');

// Everything which belongs to the current app.js module
var config = require('./app-config.js');
var template = require('./app.html');
var controller = require('./app-controller.js');

angular.module('app', [

  menuModule,
  pagesModule

])
.component('app', {
  template: template,
  controller: controller,
  controllerAs: 'app'
})
.config(config.location);
