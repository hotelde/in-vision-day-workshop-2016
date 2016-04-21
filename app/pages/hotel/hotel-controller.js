module.exports = function HotelCtrl (HotelService, $routeParams) {
  'ngInject';

  var ctrl = this;

  ctrl.hotel = null;

  ctrl.$onInit = function $onInit () {

    HotelService.getHotel($routeParams.hotelId).then(function hotelLoaded (hotel) {

      ctrl.hotel = hotel;
    });
  };
}
