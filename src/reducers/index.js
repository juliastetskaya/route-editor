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
      const newId = routes.length + 1;
      return {
        ...state,
        route: '',
        routes: [...routes, { id: newId, address: payload }],
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
