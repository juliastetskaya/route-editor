const routeAddedToList = (address, coordinates) => ({
  type: 'ROUTE_ADDED_TO_LIST',
  payload: { address, coordinates },
});

const routeRemovedFromList = (routeId) => ({
  type: 'ROUTE_REMOVED_FROM_LIST',
  payload: routeId,
});

const newRouteEntered = (route) => ({
  type: 'NEW_ROUTE_ENTERED',
  payload: route,
});

const fetchCoordinates = (e) => {
  e.preventDefault();
  return (dispatch) => (newRoute, routeEditorService) => {
    routeEditorService.getCoords(newRoute)
      .then((coordinates) => dispatch(routeAddedToList(newRoute, coordinates)))
      .catch(() => console.log('Не удалось определить координаты объекта!'));
  };
};

export {
  fetchCoordinates,
  routeRemovedFromList,
  newRouteEntered,
};
