module.exports = function HotelsCtrl (HotelService) {
  'ngInject';

  var ctrl = this;

  ctrl.hotels = [];

  ctrl.$onInit = function $onInit () {

    HotelService.getHotels().then(function hotelsLoaded (hotels) {

      ctrl.hotels = hotels;
    });
  };
}
