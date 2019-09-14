import React from 'react';
import { connect } from 'react-redux';
import { routeAddedToList, newRouteEntered } from '../../actions';

const TextBox = ({ route, onSubmit, onChange }) => (
  <form className="form-group" onSubmit={(event) => onSubmit(event, route)}>
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
  onSubmit: routeAddedToList,
  onChange: newRouteEntered,
};

export default connect(mapStateToProps, mapDispatchToProps)(TextBox);
