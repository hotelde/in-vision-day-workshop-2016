module.exports = 'app.header';

require('./header.less');

var angular = require('angular');
var template = require('./header.html');
var controller = require('./header-controller.js');

angular.module('app.header', [

  // Dependencies

])
.component('header', {
  require: {
    app: '^app'
  },
  bindings: {
    offCanvasDisabled: '<'
  },
  template: template,
  controller: controller,
  controllerAs: 'header',
  transclude: true
});
