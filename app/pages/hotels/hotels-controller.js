module.exports = function HotelsCtrl (HotelService) {
  'ngInject';

  var ctrl = this;

  ctrl.hotels = [];

  ctrl.order = '';

  ctrl.$onInit = function $onInit () {

    HotelService.getHotels().then(function hotelsLoaded (hotels) {

      ctrl.hotels = hotels;
    });
  };

  ctrl.toggleOrder = function toggleOrder () {

    ctrl.order = ctrl.order !== 'stars' ? 'stars' : '';
  }
}
