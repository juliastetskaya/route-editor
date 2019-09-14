const routeAddedToList = (event, newRoute) => {
  event.preventDefault();
  return ({
    type: 'ROUTE_ADDED_TO_LIST',
    payload: newRoute,
  });
};

const newRouteEntered = (route) => ({
  type: 'NEW_ROUTE_ENTERED',
  payload: route,
});

export {
  routeAddedToList,
  newRouteEntered,
};
