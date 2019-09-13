/* eslint-disable class-methods-use-this */

export default class RouteEditorService {
  init() {
    return new window.ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 7,
    });
  }
}
