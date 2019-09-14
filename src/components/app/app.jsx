import React from 'react';
import Map from '../map';
import RoutesList from '../routes-list';
import TextBox from '../text-box';

const App = () => (
  <main role="main" className="container">
    <div className="container-routes">
      <TextBox />
      <RoutesList />
    </div>
    <Map />
  </main>
);

export default App;
