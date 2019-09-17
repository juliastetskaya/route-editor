/* eslint-disable class-methods-use-this */

export default class RouteEditorService {
  setMap() {
    window.ymaps.ready(() => {
      this.localMap = new window.ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 11,
        controls: ['zoomControl'],
      });
    });
  }
}
