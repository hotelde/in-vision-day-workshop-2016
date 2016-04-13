module.exports = 'app.pages';

var angular = require('angular');
var ngRoute = require('angular-route');

var indexPageModule = require('./index/index.js');
var hotelsPageModule = require('./hotels/hotels.js');
var notFoundPageModule = require('./404/404.js');

var config = require('./pages-config.js');

angular.module('app.pages', [

  ngRoute,

  indexPageModule,
  hotelsPageModule,
  notFoundPageModule

])
.config(config.routing);
