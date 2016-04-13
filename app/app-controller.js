module.exports = function AppCtrl () {
  'ngInject';

  var ctrl = this;

  ctrl.offCanvasOpened = false;

  ctrl.toggleOffCanvas = function toggleOffCanvas () {

    ctrl.offCanvasOpened = !ctrl.offCanvasOpened;
  }
}
