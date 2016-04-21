module.exports = {

  routing: function routingConfig ($routeProvider) {
    'ngInject';

    $routeProvider
      .when('/', {
        template: '<index></index>'
      })
      .when('/hotels', {
        template: '<hotels></hotels>'
      })
      .when('/disclaimer', {
        template: '<disclaimer></disclaimer>'
      })
      .when('/404', {
        template: '<notfound></notfound>'
      })
      .otherwise('/404');
  }
};
