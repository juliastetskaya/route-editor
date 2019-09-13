/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import RoutesListItem from '../routes-list-item';

export default class RoutesList extends Component {
  render() {
    const { routes } = this.props;

    return (
      <ul>
        {routes.map(({ id, address }) => (
          <li key={id}>
            <RoutesListItem route={address} />
          </li>
        ))}
      </ul>
    );
  }
}
