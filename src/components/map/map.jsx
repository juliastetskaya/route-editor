import React, { Component } from 'react';
import withRouteEditorService from '../hoc';

class Map extends Component {
  componentDidMount() {
    const { routeEditorService } = this.props;
    routeEditorService.setMap();
  }

  render() {
    return <div id="map" />;
  }
}

export default withRouteEditorService()(Map);
