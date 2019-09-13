/* eslint-disable import/prefer-default-export */
const addNewRoute = (newRoute) => ({
  type: 'ADD_NEW_ROUTE',
  payload: newRoute,
});

export {
  addNewRoute,
};
