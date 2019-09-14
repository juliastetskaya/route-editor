const initialState = {
  route: '',
  routes: [
    {
      id: 1,
      address: 'Матросова',
    },
    {
      id: 2,
      address: 'Ленина',
    },
    {
      id: 3,
      address: 'Комсомольская',
    },
  ],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ROUTE_ADDED_TO_LIST': {
      const { routes } = state;
      const { length } = routes;
      const newId = length > 0 ? routes[length - 1].id + 1 : 1;
      return {
        ...state,
        route: '',
        routes: [...routes, { id: newId, address: payload }],
      };
    }
    case 'ROUTE_REMOVED_FROM_LIST': {
      const { routes } = state;
      const newRoutes = routes.filter(({ id }) => id !== payload);
      return {
        ...state,
        routes: newRoutes,
      };
    }
    case 'NEW_ROUTE_ENTERED':
      return {
        ...state,
        route: payload,
      };
    default:
      return state;
  }
};

export default reducer;
