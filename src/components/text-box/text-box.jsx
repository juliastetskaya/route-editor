import React from 'react';
import { connect } from 'react-redux';
import { fetchCoordinates, newRouteEntered } from '../../actions';
import withRouteEditorService from '../hoc';

const TextBox = ({
  route, addNewRoute, enterNewRoute, routeEditorService,
}) => (
  <form
    className="form-group"
    onSubmit={(e) => addNewRoute(e)(route, routeEditorService)}
  >
    <input
      value={route}
      onChange={({ target }) => enterNewRoute(target.value)}
      onKeyUp={({ target }) => enterNewRoute(target.value)}
      className="form-control mr-sm-5"
      type="text"
      placeholder="Введите новую точку маршрута"
      id="suggest"
    />
  </form>
);

const mapStateToProps = ({ route }) => ({ route });

const mapDispatchToProps = {
  addNewRoute: fetchCoordinates,
  enterNewRoute: newRouteEntered,
};

export default withRouteEditorService()(connect(mapStateToProps, mapDispatchToProps)(TextBox));
