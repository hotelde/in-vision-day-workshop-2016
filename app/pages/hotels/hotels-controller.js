module.exports = function HotelsCtrl ($http) {
  'ngInject';

  var ctrl = this;

  ctrl.hotels = [];

  ctrl.$onInit = function $onInit () {

    $http.get('/api/hotels.json').then(function (response) {

      ctrl.hotels = response.data;
    })
  }
}
