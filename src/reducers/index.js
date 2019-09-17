const initialState = {
  route: '',
  routes: [
    {
      id: 1,
      address: 'Москва, Матросова, 7к1',
    },
    {
      id: 2,
      address: 'Москва, Ленина, 5',
    },
    {
      id: 3,
      address: 'Москва, Комсомольская, 15',
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
