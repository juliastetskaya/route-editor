/* eslint-disable class-methods-use-this */

export default class RouteEditorService {
  setMap() {
    window.ymaps.ready(() => {
      this.localMap = new window.ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 11,
        controls: ['zoomControl'],
      });
      this.suggestView = new window.ymaps.SuggestView('suggest');
    });
  }

  getCoords(address) {
    return window.ymaps.geocode(address, {
      results: 1,
    }).then((res) => {
      const firstGeoObject = res.geoObjects.get(0);
      return firstGeoObject.geometry.getCoordinates();
    });
  }
}
