const routeAddedToList = (event) => {
  event.preventDefault();
  return (dispatch) => (newRoute, routeEditorService) => {
    routeEditorService.getCoords(newRoute)
      .then((coordinates) => dispatch({
        type: 'ROUTE_ADDED_TO_LIST',
        payload: { address: newRoute, coordinates },
      }))
      .catch(() => console.log('Не удалось определить координаты объекта!'));
  };
};

const routeRemovedFromList = (routeId) => ({
  type: 'ROUTE_REMOVED_FROM_LIST',
  payload: routeId,
});

const newRouteEntered = (route) => ({
  type: 'NEW_ROUTE_ENTERED',
  payload: route,
});

export {
  routeAddedToList,
  routeRemovedFromList,
  newRouteEntered,
};
