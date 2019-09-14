/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoutesListItem from '../routes-list-item';
import { routeRemovedFromList } from '../../actions';

class RoutesList extends Component {
  render() {
    const { routes, onRemove } = this.props;

    return routes.length > 0
      ? (
        <ul className="list-group">
          {routes.map((route) => (
            <li key={route.id} className="list-group-item">
              <RoutesListItem route={route} onRemove={onRemove} />
            </li>
          ))}
        </ul>
      )
      : null;
  }
}

const mapStateToProps = ({ routes }) => ({ routes });
const mapDispatchToProps = {
  onRemove: routeRemovedFromList,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoutesList);
