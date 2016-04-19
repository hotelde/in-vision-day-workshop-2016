module.exports = function HotelCtrl () {

  var ctrl = this;

  ctrl.getStars = function getStars () {

    return new Array(this.data.stars);
  }
}
