import React from 'react';
import { RouteEditorServiceConsumer } from '../route-editor-service-context';

const withRouteEditorService = () => (Wrapped) => (props) => (
  <RouteEditorServiceConsumer>
    {
      (routeEditorService) => <Wrapped {...props} routeEditorService={routeEditorService} />
    }
  </RouteEditorServiceConsumer>
);

export default withRouteEditorService;
