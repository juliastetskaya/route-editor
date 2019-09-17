import React from 'react';
import { connect } from 'react-redux';
import { routeAddedToList, newRouteEntered, addMapToStore } from '../../actions';
import withRouteEditorService from '../hoc';

const TextBox = ({
  route, onSubmit, onChange, routeEditorService,
}) => (
  <form
    className="form-group"
    onSubmit={(event) => onSubmit(event, route, routeEditorService)}
  >
    <input
      value={route}
      onChange={({ target }) => onChange(target.value)}
      className="form-control mr-sm-5"
      type="text"
      placeholder="Введите новую точку маршрута"
    />
  </form>
);

const mapStateToProps = ({ route }) => ({ route });

const mapDispatchToProps = {
  onSubmit: (event, route, routeService) => (dispatch) => {
    dispatch(routeAddedToList(event, route));
    dispatch(addMapToStore(routeService, route));
  },
  onChange: newRouteEntered,
};

export default withRouteEditorService()(connect(mapStateToProps, mapDispatchToProps)(TextBox));
