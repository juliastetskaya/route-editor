const initialState = {
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
  switch (action.type) {
    case 'ADD_NEW_ROUTE':
      return {
        ...state,
        routes: [...state.routes, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
