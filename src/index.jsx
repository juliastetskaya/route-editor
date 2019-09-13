import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import RouteEditorService from './services/route-editor-service';

const routeEditorService = new RouteEditorService();
window.ymaps.ready(routeEditorService.init);

ReactDOM.render(<App />, document.getElementById('root'));
