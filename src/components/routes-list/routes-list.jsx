/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import RoutesListItem from '../routes-list-item';

export default class RoutesList extends Component {
  render() {
    const { routes } = this.props;

    return (
      <ul className="list-group">
        {routes.map(({ id, address }) => (
          <li key={id} className="list-group-item">
            <RoutesListItem route={address} />
          </li>
        ))}
      </ul>
    );
  }
}
