const routeAddedToList = (event, newRoute) => {
  event.preventDefault();
  return ({
    type: 'ROUTE_ADDED_TO_LIST',
    payload: newRoute,
  });
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
