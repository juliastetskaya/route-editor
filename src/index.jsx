import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import RouteEditorService from './services/route-editor-service';
import ErrorBoundary from './components/error-boundary';
import { RouteEditorServiceProvider } from './components/route-editor-service-context';
import store from './store';

const routeEditorService = new RouteEditorService();
const map = routeEditorService.getMap();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <RouteEditorServiceProvider value={map}>
        <App />
      </RouteEditorServiceProvider>
    </ErrorBoundary>
  </Provider>, document.getElementById('root'),
);
