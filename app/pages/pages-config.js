module.exports = {

  routing: function routingConfig ($routeProvider) {
    'ngInject';

    $routeProvider
      .when('/', {
        template: '<page-index></page-index>'
      })
      .when('/hotels', {
        template: '<page-hotels></page-hotels>'
      })
      .when('/hotel/:hotelId', {
        template: '<hotelpage></hotelpage>'
      })
      .when('/404', {
        template: '<page-not-found></page-not-found>'
      })
      .otherwise('/404');
  }
};
