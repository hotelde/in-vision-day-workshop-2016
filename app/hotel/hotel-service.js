module.exports = function HotelService ($http) {
  'ngInject';

  var service = this;

  service.getHotels = function getHotels () {

    return $http.get('/api/hotels.json').then(function hotelsLoaded (response) {

      return response.data;
    });
  };

  service.getHotel = function getHotel(id) {

    return service.getHotels().then(function parseHotels (hotels) {

      var result;

      angular.forEach(hotels, function pick (hotel) {

        if (hotel.id === parseInt(id, 10)) {

          result = hotel;

          return;
        }
      });

      return result;
    });
  };
}
