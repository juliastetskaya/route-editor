const initialState = {
  routes: [],
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
