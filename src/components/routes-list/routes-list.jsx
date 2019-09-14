/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoutesListItem from '../routes-list-item';

class RoutesList extends Component {
  render() {
    const { routes } = this.props;

    return routes.length > 0
      ? (
        <ul className="list-group">
          {routes.map(({ id, address }) => (
            <li key={id} className="list-group-item">
              <RoutesListItem route={address} />
            </li>
          ))}
        </ul>
      )
      : null;
  }
}

const mapStateToProps = ({ routes }) => ({ routes });

export default connect(mapStateToProps)(RoutesList);
