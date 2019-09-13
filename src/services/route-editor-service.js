/* eslint-disable class-methods-use-this */

export default class RouteEditorService {
  getMap() {
    return window.ymaps.ready(this.init);
  }

  init() {
    return new window.ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 7,
    });
  }
}
