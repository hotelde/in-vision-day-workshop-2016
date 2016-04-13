module.exports = {

  location: function locationConfig ($locationProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);
  }
};
