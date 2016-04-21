module.exports = function HotelService ($http) {
  'ngInject';

  var service = this;

  service.getHotels = function getHotels (cb) {

    return $http.get('/api/hotels.json').then(function hotelsLoaded (response) {

      return response.data;
    });
  };

  service.getHotel = function getHotel(id) {

    service.getHotels().then(function parseHotels (hotels) {

      angular.forEach(hotels, function pick (hotel) {

          if (hotel.id === id) {

            return hotel;
          }
      });
    });
  };

}
