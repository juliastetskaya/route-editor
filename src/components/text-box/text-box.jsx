import React from 'react';
import { connect } from 'react-redux';
import { fetchCoordinates, newRouteEntered } from '../../actions';
import withRouteEditorService from '../hoc';

const TextBox = ({
  route, onSubmit, onChange, routeEditorService,
}) => (
  <form
    className="form-group"
    onSubmit={(e) => onSubmit(e)(route, routeEditorService)}
  >
    <input
      value={route}
      onChange={({ target }) => onChange(target.value)}
      className="form-control mr-sm-5"
      type="text"
      placeholder="Введите новую точку маршрута"
      id="suggest"
    />
  </form>
);

const mapStateToProps = ({ route }) => ({ route });

const mapDispatchToProps = {
  onSubmit: fetchCoordinates,
  onChange: newRouteEntered,
};

export default withRouteEditorService()(connect(mapStateToProps, mapDispatchToProps)(TextBox));
